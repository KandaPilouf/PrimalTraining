import { useState } from "react";
import styles from "./Sidebar.module.css";
import Button from "../Button/Button.jsx";

function Sidebar({ show }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <div
      className={
        showNav ? styles.sidebar : `${styles.sidebar} ${styles.active}`
      }
    >
      <ul>
        <li>
          <svg
            onClick={() => setShowNav(!showNav)}
            height="40px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M23 13H1v-2h22z"></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </g>
          </svg>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <Button />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
