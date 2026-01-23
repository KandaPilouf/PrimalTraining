import styles from "../Community/Community.module.css";

function Community() {
  return (
    <div className={styles.grid_container}>
      <div className={styles.grid_item1}>
        <h1>
          Join the <span className={styles.title_half}>community</span>
        </h1>
      </div>
      <div className={styles.grid_item2}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className={styles.grid_item3}>Something</div>
    </div>
  );
}

export default Community;
