import { useRouter } from "../hooks/useRouter.jsx";
import styles from "./Link.module.css";

export function Link({href, children, ...props}){
    const { navigateTo, currentPath } = useRouter();

    const handleClick = (event) => {
        event.preventDefault();
        navigateTo(href);
    }

    return (
        <a href={href} {...props} onClick={handleClick} className={currentPath === href ? styles.isDisabled : ''}>
            {children}
        </a>
    )
}