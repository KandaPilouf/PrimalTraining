import styles from "./Button.module.css";

function Button({ label }) {
  return (
    <div className={styles.button}>
      <a href="/">{label}</a>
    </div>
  );
}

export default Button;
