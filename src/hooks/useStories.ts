import { ItemResponse, Story, TopStoriesResponse } from "@/models/item";
import useSWR from "swr";

const useStories = () => {
    const storyFromResponse = (response: ItemResponse): Story => ({
        id: response.id,
        writerId: response.by,
        commentCount: response.descendants,
        commentIds: response.kids,
        score: response.score,
        body: response.text,
        createdAt: new Date(response.time * 1000), // response is in seconds
        title: response.title,
        url: response.url
    });

    const fetcher = (url: string) => fetch(url).then(async (response) => response.json()).then(async (response: TopStoriesResponse) => {
        // Not the most efficient randomization, but gets the job done for the scope of this asignment
        const randomArray = response
            .map(id => ({ id, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ id }) => id);

        const storyPromises = randomArray.slice(0, 10).map(async (id: number) => await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(async (response) => response.json()));
            
        const responses: ItemResponse[] = await Promise.all(storyPromises);

        return responses.map(storyFromResponse).sort((a,b) => a.score - b.score);
    });

    const { data, error, isLoading } = useSWR<Story[], null>("https://hacker-news.firebaseio.com/v0/topstories.json", fetcher);

    return {
        stories: data,
        isError: error === null,
        isLoading
    }
}

export default useStories;
