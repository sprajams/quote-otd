import { useState } from "react";
import Quote from "../Quote";

function Main() {
  const [data, setData] = useState({});
  const getData = () => {
    fetch("https://api.quotable.io/random").then((res) =>
      res.json().then(({ content, author }) => {
        return setData({ quote: content, author: author });
      })
    );
  };

  return (
    <div>
      <div>generator</div>
      <Quote quote={data.quote} author={data.author} />
      <button onClick={getData}>New Quote</button>
    </div>
  );
}

export default Main;
