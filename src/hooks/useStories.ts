import useSWR from "swr";

const useStories = () => {
    const fetcher = (url: string) => fetch(url).then(async (response) => response.json());

    const { data, error, isLoading } = useSWR<number[], null>("https://hacker-news.firebaseio.com/v0/topstories.json", fetcher);

    return {
        storyIds: data,
        isError: error === null,
        isLoading
    }
}

export default useStories;
