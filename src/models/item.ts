import { User } from "./user";

export type TopStoriesResponse = number[]; // IDs
export type ItemTypes = "job" | "story" | "comment" | "poll" | "pollopt";

export interface ItemResponse {
    id: number,
    deleted: boolean,
    type: ItemTypes,
    by: string,
    time: number,
    text?: string, // HTML
    dead: boolean,
    parent: number, // ID
    poll: number, // ID
    kids: number[], // IDs
    url: string,
    score: number,
    title: string, // HTML
    parts: number[], // IDs
    descendants: number // IDs
}

export interface Story {
    id: number,
    writerId: string,
    commentCount: number,
    commentIds: number[],
    score: number,
    body?: string,
    createdAt: Date,
    title: string,
    url: string
}

export interface Comment {
    id: number,
    writerId: string,
    subCommentIds: number[],
    parentId: number,
    body?: string, // HTML
    createdAt: Date
}
