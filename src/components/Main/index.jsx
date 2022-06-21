import { useState, useEffect } from "react";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import Quote from "../Quote";
import styles from "./styles.module.scss";

function Main() {
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://api.quotable.io/random").then((res) =>
      res.json().then(({ content, author }) => {
        return setData({ quote: content, author: author });
      })
    );
  };

  return (
    <div className={styles.wrap}>
      <Quote quote={data.quote} author={data.author} />
      <div className={styles.btnContainer}>
        <a href="/tweet" className={styles.btn}>
          TWEEET
        </a>
        <button className={styles.btn} onClick={getData}>
          REFRESH
          <RefreshOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default Main;
