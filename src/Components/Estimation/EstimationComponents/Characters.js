import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const Characters = ({ charsCallback, charsOverallCallback }) => {
  const [text, changeText] = useState("Tekst do przetłumaczenia");
  const [count, changeCount] = useState(0);
  useEffect(() => {
    changeCount(text.trim().split(/\s+/).length);
    charsCallback(text.trim().split(/\s+/).length);
    charsOverallCallback(text);
    // console.log(document.querySelector(".characters__textarea").offsetWidth);
    // console.log(document.querySelector(".measure-width").offsetWidth);

    document.querySelector(".measure-width").innerHTML = text;

    document.querySelector(".characters__textarea").style.height = `${
      24 *
        Math.floor(
          document.querySelector(".measure-width").offsetWidth /
            (document.querySelector(".characters__textarea").offsetWidth - 32)
        ) +
      24
    }px`;
  }, [text]);

  return (
    <div className="characters">
      <h4>Liczba słów wyliczona z tekstu - {count}</h4>
      <textarea
        value={text}
        onChange={(event) => changeText(event.target.value)}
        className="characters__textarea"
        name="textarea"
        wrap="hard"
      ></textarea>
      <span className="measure-width" />
    </div>
  );
};

Characters.propTypes = {
  charsCallback: PropTypes.func,
  charsOverallCallback: PropTypes.func,
};

export default Characters;
