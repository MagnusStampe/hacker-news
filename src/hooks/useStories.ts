import { ItemResponse, Story, TopStoriesResponse } from "@/models/item";
import { User, UserResponse } from "@/models/user";
import useSWR from "swr";

const useStories = () => {
    const userFromResponse = (response: UserResponse): User => ({
      id: response.id,
      createdAt: new Date(response.created),
      karma: response.karma,
      about: response.about,
      submitted: response.submitted
    });
    
    // Types that can be undefined will be present on type 'story'
    const storyFromResponse = (response: ItemResponse, user: User): Story => ({
      id: response.id,
      by: user,
      commentCount: response.descendants!,
      commentIds: response.kids!,
      score: response.score!,
      body: response.text!,
      createdAt: new Date(response.time!),
      title: response.title!,
      url: response.url!
    });
    
    const fetcher = (url: string) => fetch(url).then(async (fullResponse) => {
        // Call stories
        const ids: TopStoriesResponse = await fullResponse.json();
        const storyPromises = ids.slice(0, 10).map(id => (
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(async r => r.json() as Promise<ItemResponse>))
        );

        const storyResponses = await Promise.all(storyPromises);
        
        // Call users
        const uniqueUserNames = Array.from(new Set(storyResponses.map(r => r.by)));
        const userPromises = uniqueUserNames.map(name => fetch(`https://hacker-news.firebaseio.com/v0/user/${name}.json`).then(async r => r.json() as Promise<UserResponse>))
        
        const userResponses = await Promise.all(userPromises);
        
        // Get users from responses
        const users = userResponses.reduce(
            (users, response) => ({ ...users, [response.id]: userFromResponse(response) }),
            {} as { [key: string]: User }
        );
        
        // Get stories from responses
        const stories = storyResponses.filter(response => response.type === "story").map(response => storyFromResponse(response, users[response.by!]));
        return stories;
    });

    const { data, error, isLoading } = useSWR<Story[], null>("https://hacker-news.firebaseio.com/v0/topstories.json", fetcher);

    return {
        stories: data,
        isError: error === null,
        isLoading
    }
}

export default useStories;
