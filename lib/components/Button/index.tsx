import styles from "./styles.module.css";
import { sanitize } from "isomorphic-dompurify";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  return (
    <button className={`${className} ${styles.button}`} {...restProps}>
      {sanitize("Some dirty text")}
    </button>
  );
}
