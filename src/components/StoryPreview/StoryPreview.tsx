"use client"

import { FC } from "react";
import styles from "./StoryPreview.module.css";
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import useStory from "@/hooks/useStory";

const StoryPreview: FC<{ id: number }> = ({ id }) => {
    const { story, isError, isLoading } = useStory(id);

    if(isError || isLoading || !story) return null;

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
            <button>Go to article</button>
        </div>
    );
}

export default StoryPreview;
