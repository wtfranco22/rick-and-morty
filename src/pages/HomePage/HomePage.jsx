import { useSelector } from "react-redux";
import { Cards } from "./../../components";
import styles from "./HomePage.module.css";

export default function HomePage({ characters, onClose }) {
      const loading = useSelector((state)=>state.loading);
      return (
            <>
                  {loading && (
                        <div className={styles.loading}>
                              <div className={styles.spinner}></div>
                              <div className={styles.loading_text}>Loading...</div>
                        </div>
                  )}
                  <Cards characters={characters} onClose={onClose} />
            </>
      );
}
