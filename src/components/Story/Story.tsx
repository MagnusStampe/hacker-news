"use client"

import useStory from "@/hooks/useStory";
import { FC } from "react";
import UserPreview from "../User/UserPreview";
import CommentSection from "../CommentSection/CommentSection";
import styles from "./Story.module.css";
import Image from "next/image";
import StoryInteractions from "../StoryInteractions/StoryInteractions";

const Story: FC<{ id: number }> = ({ id }) => {
    const { story, isError, isLoading } = useStory(id);

    if(isError || isLoading || !story) return null;

    return (
        <article className={styles.container}>
            <div className={styles.heroContainer}>
                <Image priority src="/story-background.jpg" alt="Title background" className={styles.heroImage} width={1215} height={794} />
                <h1 className={styles.title}>{story.title}</h1>
                <div className={styles.details}>
                    <StoryInteractions story={story} />
                    <p className={styles.createdAt}>Created at: {story.createdAt.toDateString()}</p>
                </div>
            </div>
            <div className={styles.content}>
                <UserPreview id={story.writerId} />
                <hr />
                
                {story.body && <div className={styles.body} dangerouslySetInnerHTML={{ __html: story.body }} />}
                {story.body && <hr />}
                
                <a href={story.url} className="button">See original post</a>
                <hr />
                
                {story?.commentIds && story.commentIds.length > 0 && (
                    <CommentSection ids={story.commentIds} />
                )}
            </div>
        </article>
    );
}

export default Story;