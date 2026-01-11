import styles from "./Hero.module.css";
import cat from "../../assets/img/cat_bench.jpg";

function Hero() {
  return (
    <div className={styles.grid_container}>
      <div className={styles.title}>
        <h1>
          Train hard. <span className={styles.title_half}>Live better</span>
        </h1>
      </div>
      <div>
        <img src={cat} alt="cat bench" />
      </div>
      <div>
        <h2>For the committed</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi
          neque quos architecto dicta ipsam.
        </p>
        <p>About button placeholder</p>
      </div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  );
}

export default Hero;
