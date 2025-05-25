import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <Link href="/">
                    <Image src="/logo.png" alt="Hacker News logo" height={82} width={82} />
                </Link>
                <div className={styles.titleContainer}>
                    <p className={styles.title}>Hacker News</p>
                </div>
            </header>
        </div>
    );
}

export default Header;
