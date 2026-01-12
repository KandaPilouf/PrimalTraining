import styles from "./Hero.module.css";
import cat from "../../assets/img/cat_kettlebell.jpg";
import cat_close from "../../assets/img/cat_close.jpg";
import Button from "../Button/Button.jsx";

function Hero() {
  return (
    <div className={styles.grid_container}>
      <div className={styles.title}>
        <h1>
          Train hard. <span className={styles.title_half}>Live better</span>
        </h1>
      </div>
      <div>
        <img loading="lazy" src={cat} alt="cat bench" />
      </div>
      <div>
        <h2 className={styles.box_title}>
          For the
          <br />
          committed
        </h2>
        <div className={styles.text_btn}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            id commodi blanditiis molestias vel impedit ab et unde illo
            asperiores optio suscipit earum adipisci maiores!
          </p>
          <div>
            <Button label="About Us" />
          </div>
        </div>
      </div>
      <div>
        <h2 className={styles.box_title}>guided by experts</h2>
        <div className={styles.box_txt}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            sed quas ducimus ut, aperiam pariatur beatae suscipit voluptatum vel
            quae officia. Atque harum maiores voluptas?
          </p>
        </div>
      </div>
      <div>
        <h2 className={styles.box_title}>dynamic open gym</h2>
        <div className={styles.box_txt}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            sed quas ducimus ut, aperiam pariatur beatae suscipit voluptatum vel
            quae officia. Atque harum maiores voluptas?
          </p>
        </div>
      </div>
      <div>
        <img loading="lazy" src={cat_close} alt="cat close" />
      </div>
    </div>
  );
}

export default Hero;
