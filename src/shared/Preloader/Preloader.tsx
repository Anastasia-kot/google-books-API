import { FC } from "react";
import isLoading from "../../assets/images/preloader.gif";
import styles from "./Preloader.module.css";

const Preloader: FC = () => (
  <div>
    <img src={isLoading} className={styles.loader} alt="loader" />
  </div>
);

export default Preloader;
