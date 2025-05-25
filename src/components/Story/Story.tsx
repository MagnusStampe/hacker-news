"use client"

import useStory from "@/hooks/useStory";
import { FC } from "react";
import UserPreview from "../User/UserPreview";
import CommentSection from "../CommentSection/CommentSection";
import styles from "./Story.module.css";
import Image from "next/image";

const Story: FC<{ id: number }> = ({ id }) => {
    const { story, isError, isLoading } = useStory(id);

    if(isError || isLoading || !story) return null;

    return (
        <article>
            <div className={styles.heroContainer}>
                <h1 className={styles.title}>{story.title}</h1>
                <Image src="/story-background.jpg" alt="Title background" className={styles.heroImage} width={1215} height={794} />
            </div>
            <div className={styles.content}>
                <UserPreview id={story.writerId} />
                <hr />
                {story.body && <div className={styles.body} dangerouslySetInnerHTML={{ __html: story.body }} />}
                {story.body && <hr />}
                {story?.commentIds && story.commentIds.length > 0 && (
                    <CommentSection ids={story.commentIds} />
                )}
            </div>
        </article>
    );
}

export default Story;