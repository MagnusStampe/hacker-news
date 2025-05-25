"use client"

import { FC } from "react";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import styles from "./UserPreview.module.css";

const UserPreview: FC<{ id: string }> = ({ id }) => {
    const { user, isError, isLoading } = useUser(id);

    if(isError) return null;

    return (
        <div className={styles.container}>
            <Image src="/profile.jpg" alt="Hacker profile image" className={styles.image} height={48} width={48} />
            {user && (
                <div>
                    <p className={styles.name}>{user.id}</p>
                    <p>Karma: {user.karma}</p>
                </div>
            )}
        </div>
    )
}

export default UserPreview;
