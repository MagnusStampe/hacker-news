import { FC } from "react"
import styles from "./Header.module.css";
import Image from "next/image";

const Header= () => {
    return (
        <header className={styles.header}>
            <Image src="/logo.png" alt="Hacker News logo" height={512} width={512} />
        </header>
    );
}

export default Header;
