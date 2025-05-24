import { FC } from "react"
import styles from "./Header.module.css";
import Image from "next/image";

const Header= () => {
    return (
        <div>
            <header className={styles.header}>
                <Image src="/logo.png" alt="Hacker News logo" height={82} width={82} />
                <div className={styles.titleContainer}>
                    <p className={styles.title}>Hacker News</p>
                </div>
            </header>
        </div>
    );
}

export default Header;
