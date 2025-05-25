"use client"

import { FC } from "react";
import styles from "./StoryPreview.module.css";
import { Story } from "@/models/item";
import Link from "next/link";
import StoryInteractions from "../StoryInteractions/StoryInteractions";

const StoryPreview: FC<{ story: Story }> = ({ story }) => {
    return (
        <div className={styles.card}>
            <p className={styles.createdAt}>{story.createdAt.toDateString()}</p>
            <h2 className={styles.title}>{story.title}</h2>
            <StoryInteractions story={story} />
            <Link href={`/story/${story.id}`} className="button">Go to article</Link>
        </div>
    );
}

export default StoryPreview;
