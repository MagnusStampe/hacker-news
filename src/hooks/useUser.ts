import { User, UserResponse } from "@/models/user";
import useSWR from "swr";

const useUser = (id: number) => {
    const userFromResponse = (response: UserResponse): User => ({
        id: response.id,
        createdAt: new Date(response.created),
        karma: response.karma,
        about: response.about,
        submitted: response.submitted
    });
    
    const fetcher = (url: string) => fetch(url).then(async r => r.json() as Promise<UserResponse>).then(userFromResponse)

    const { data, error, isLoading } = useSWR<User, null>(`https://hacker-news.firebaseio.com/v0/user/${id}.json`, fetcher);

    return {
        user: data,
        isError: error === null,
        isLoading
    }
}

export default useUser;
