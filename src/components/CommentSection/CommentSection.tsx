"use client"

import { FC } from "react";
import useComments from "@/hooks/useComments";
import styles from "./CommentSection.module.css";

const CommentSection: FC<{ ids: number[] }> = ({ ids }) => {
    const { comments, isError, isLoading } = useComments(ids);

    return (
        <div>
            {comments?.map(comment => (
                <div className={styles.comment}>
                    <p>{comment.writerId}</p>
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
