import { useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <svg
                width="43.41"
                height="25.58"
                viewBox="0 0 230 137"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M229.314 68.0865C229.314 105.69 198.83 136.173 161.227 136.173C123.624 136.173 93.1406 105.69 93.1406 68.0865C93.1406 30.4834 123.624 0 161.227 0C198.83 0 229.314 30.4834 229.314 68.0865Z"
                  fill="black"
                />
                <path
                  d="M35.8672 68.0704C35.8672 99.7362 61.5374 125.406 93.2032 125.406V10.7344C61.5374 10.7344 35.8672 36.4046 35.8672 68.0704Z"
                  fill="black"
                />
                <path
                  d="M0 68.0655C0 87.8566 16.0439 103.9 35.835 103.9V32.2305C16.0439 32.2305 0 48.2743 0 68.0655Z"
                  fill="black"
                />
              </svg>
              <p>Cat Training</p>
            </li>
            <li className={styles.hide_on_mobile}>
              <a href="/">Home</a>
            </li>
            <li className={styles.hide_on_mobile}>
              <a href="/">About</a>
            </li>
            <li className={styles.hide_on_mobile}>
              <Button />
            </li>
            <li>
              <svg
                onClick={() => setShowNav(!showNav)}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.75 15.25V2H15.25V15.25H2V16.75H15.25V30H16.75V16.75H30V15.25H16.75Z"
                  fill="black"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </header>
      {showNav && <Sidebar />}
    </>
  );
}

export default Header;
