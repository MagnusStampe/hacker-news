"use client"

import { FC } from "react";
import styles from "./StoryPreview.module.css";
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Story } from "@/models/item";
import Link from "next/link";

const StoryPreview: FC<{ story: Story }> = ({ story }) => {
    return (
        <div className={styles.card}>
            <p className={styles.createdAt}>{story.createdAt.toDateString()}</p>
            <h2 className={styles.title}>{story.title}</h2>
            <div className={styles.interactions}>
                <div className={styles.score}>
                    <FavoriteIcon />
                    <p>{story.score}</p>
                </div>
                <div className={styles.comment}>
                    <ChatBubbleIcon />
                    <p>{story.commentCount}</p>
                </div>
            </div>
            <Link href={`/story/${story.id}`}>Go to article</Link>
        </div>
    );
}

export default StoryPreview;
