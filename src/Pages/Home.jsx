import ColorPicker from "../Components/ColorPicker/ColorPicker";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.Home}>
      <ColorPicker />
    </div>
  );
};

export default Home;
