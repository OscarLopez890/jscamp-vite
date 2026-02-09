import styles from "./ErrorMessage.module.css"

export function ErrorMessage({ message }) {
    return (
        <div className={styles.ErrorMessage}>
            {message}
        </div>
    );
}