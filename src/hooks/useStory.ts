import { ItemResponse, Story } from "@/models/item";
import useSWR from "swr";

const useStory = (id: number) => {
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
    
    const fetcher = (url: string) => fetch(url).then(async r => r.json() as Promise<ItemResponse>).then(storyFromResponse)

    const { data, error, isLoading } = useSWR<Story, null>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, fetcher);

    return {
        story: data,
        isError: error === null,
        isLoading
    }
}

export default useStory;
