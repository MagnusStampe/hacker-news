import { FC } from "react";
import styles from "./StoryInteractions.module.css";
import { Story } from "@/models/item";
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";

const StoryInteractions: FC<{ story: Story }> = ({ story }) => {
    return (
        <div className={styles.interactions}>
            <div className={styles.score}>
                <FavoriteIcon />
                <p>{story.score || 0}</p>
            </div>
            <div className={styles.comment}>
                <ChatBubbleIcon />
                <p>{story.commentCount || 0}</p>
            </div>
        </div>
    )
}

export default StoryInteractions;
