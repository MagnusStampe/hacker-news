import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerText}>
                <p>Didn't find what you where looking for?</p>
                <p>Try turning your browser off and on again</p>
            </div>
        </footer>
    );
}

export default Footer;
