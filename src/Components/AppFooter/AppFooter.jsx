import styles from "./AppFooter.module.css";
import { FaGithub } from "react-icons/fa";

const AppFooter = () => {
  return (
    <>
      <div className={styles.AppFooter}>
        <div> `Made with ❤️ By iSRHcoder [2023]`</div>
        <div>
          {" "}
          <a href="https://github.com/iSRHcoder" style={{ color: "white" }}>
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
