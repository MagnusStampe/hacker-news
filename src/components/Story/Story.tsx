"use client"

import useStory from "@/hooks/useStory";
import { FC } from "react"
import UserPreview from "../User/UserPreview";
import CommentSection from "../CommentSection/CommentSection";

const Story: FC<{ id: number }> = ({ id }) => {
    const { story, isError, isLoading } = useStory(id);

    if(isError || isLoading || !story) return null;

    console.log(story)

    return (
        <article>
            <h1>{story.title}</h1>
            <UserPreview id={story.writerId} />
            <hr />
            {story.body && <div dangerouslySetInnerHTML={{ __html: story.body }} />}
            {story.body && <hr />}
            {story?.commentIds && story.commentIds.length > 0 && (
                <CommentSection ids={story.commentIds} />
            )}
        </article>
    );
}

export default Story;