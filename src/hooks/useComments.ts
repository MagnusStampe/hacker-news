import { Comment, ItemResponse, Story } from "@/models/item";
import useSWR from "swr";

const useComments = (ids: number[]) => {
    const commentFromResponse = (response: ItemResponse): Comment => ({
        id: response.id,
        writerId: response.by,
        subCommentIds: response.kids,
        parentId: response.parent,
        body: response.text,
        createdAt: new Date(response.time)
    });

    const fetcher = async (ids: number[]) => {
        const commentPromises = ids.map(async (id: number) => await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(async (response) => response.json()));
            
        const responses: ItemResponse[] = await Promise.all(commentPromises);

        return responses.map(commentFromResponse);
    };

    const { data, error, isLoading } = useSWR<Comment[], null>(ids, fetcher);

    return {
        comments: data,
        isError: error === null,
        isLoading
    }
}

export default useComments;
