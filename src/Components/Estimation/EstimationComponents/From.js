import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const From = () => {
  const [listOpacity, showList] = useState(0);
  const [language, changeLanguage] = useState("Amharski");
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
    <div className="from">
      <h4>Z</h4>
      <div
        onClick={() => showList(!listOpacity)}
        className={`from__language${listOpacity ? "--active" : ""}`}
      >
        <div>{language}</div> <ExpandMoreIcon />
      </div>
      <ul className={`from__list${listOpacity ? "--shown" : "--hidden"}`}>
        {languages.map((item, index) => (
          <li
            key={index}
            className={`from__list__element${
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

From.propTypes = {};

export default From;
