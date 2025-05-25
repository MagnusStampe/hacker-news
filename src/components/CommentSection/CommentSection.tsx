"use client"

import { FC } from "react";
import useComments from "@/hooks/useComments";
import styles from "./CommentSection.module.css";
import PersonIcon from "@mui/icons-material/Person";

const CommentSection: FC<{ ids: number[] }> = ({ ids }) => {
    const { comments, isError, isLoading } = useComments(ids);

    if(isError || isLoading) return null;

    return (
        <div>
            {comments?.map(comment => (
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <PersonIcon />
                        <p>{comment.writerId}</p>
                    </div>
                    {comment.body && <div dangerouslySetInnerHTML={{ __html: comment.body }} />}
                    {comment.subCommentIds?.length > 0 && (
                        <div className={styles.subCommentSection}>
                            <CommentSection ids={comment.subCommentIds} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default CommentSection;
