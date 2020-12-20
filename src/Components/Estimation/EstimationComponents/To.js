import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const To = () => {
  const [listOpacity, showList] = useState(0);
  const [language, changeLanguage] = useState("Bajan");
  const languages = [
    "Albański",
    "Amharski",
    "Angielski (amerykański)",
    "Angielski (brytyjski)",
    "Arabski",
    "Armeński",
    "Azerski",
    "Bahamski kreolski angielski",
    "Bajan",
    "Baskijski (euskara)",
    "Bemba",
  ];
  return (
    <div className="to">
      <h4>Na</h4>
      <div
        onClick={() => showList(!listOpacity)}
        className={`to__language${listOpacity ? "--active" : ""}`}
      >
        <div>{language}</div> <ExpandMoreIcon />
      </div>
      <ul className={`to__list${listOpacity ? "--shown" : "--hidden"}`}>
        {languages.map((item, index) => (
          <li
            key={index}
            className={`to__list__element${
              language === item ? "--active" : ""
            }`}
            onClick={() => {
              changeLanguage(item);
              showList(0);
            }}
          >
            {item} {language === item ? <CheckIcon /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

To.propTypes = {};

export default To;
