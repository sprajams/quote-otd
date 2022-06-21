import styles from "./styles.module.scss";
function Quote({ quote, author }) {
  return (
    <div className={styles.outer}>
      <div className={styles.quoteWrap}>
        <div className={styles.quotation}>❝</div>
        <h1 className={styles.quote}>{quote}</h1>
        <div className={styles.quotation__right}>❞</div>
      </div>
      <div className={styles.author}> - {author}</div>
    </div>
  );
}

export default Quote;
