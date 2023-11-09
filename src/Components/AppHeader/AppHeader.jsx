import { Container, Navbar } from "react-bootstrap";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <div className={styles.AppHeader}>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <div>Color Picker App</div>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppHeader;
