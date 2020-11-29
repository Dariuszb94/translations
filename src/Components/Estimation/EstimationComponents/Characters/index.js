import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const Characters = ({ charsCallback }) => {
  const [text, changeText] = useState("Tekst do przetłumaczenia");
  const [count, changeCount] = useState(0);
  useEffect(() => {
    changeCount(text.trim().split(/\s+/).length);
    charsCallback(text.trim().split(/\s+/).length);
  }, [text]);

  return (
    <div className="characters">
      <h4>Liczba słów wyliczona z tekstu - {count}</h4>
      <textarea
        value={text}
        onChange={(event) => changeText(event.target.value)}
        className="characters__textarea"
      ></textarea>
    </div>
  );
};

Characters.propTypes = { charsCallback: PropTypes.func };

export default Characters;
