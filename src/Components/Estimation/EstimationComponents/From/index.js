import React, { useState } from "react";

const From = () => {
  const [listOpacity, showList] = useState(0);
  const [language, changeLanguage] = useState("Amharski");
  return (
    <div className="from">
      <div onClick={() => showList(!listOpacity)}>Polski</div>
      <ul className={`from__list${listOpacity ? "--shown" : "--hidden"}`}>
        <li
          className="from__list__element"
          onClick={() => changeLanguage("Albański")}
        >
          Albański{language}
        </li>
        <li
          className="from__list__element"
          onClick={() => changeLanguage("Amharski")}
        >
          Amharski
        </li>
        <li
          className="from__list__element"
          onClick={() => changeLanguage("Amharski")}
        >
          Amharski
        </li>
        <li
          className="from__list__element"
          onClick={() => changeLanguage("Albański")}
        >
          Albański
        </li>
        <li
          className="from__list__element"
          onClick={() => changeLanguage("Amharski")}
        >
          Amharski
        </li>
        <li
          className="from__list__element"
          onClick={() => changeLanguage("Amharski")}
        >
          Amharski
        </li>
        <li
          className="from__list__element"
          onClick={() => changeLanguage("Albański")}
        >
          Albański
        </li>
        <li
          className="from__list__element"
          onClick={() => changeLanguage("Amharski")}
        >
          Amharski
        </li>
        <li
          className="from__list__element"
          onClick={() => changeLanguage("Amharski")}
        >
          Amharski
        </li>
        <li
          className="from__list__element"
          onClick={() => changeLanguage("Albański")}
        >
          Albański
        </li>
        <li
          className="from__list__element"
          onClick={() => changeLanguage("Amharski")}
        >
          Amharski
        </li>
        <li
          className="from__list__element"
          onClick={() => changeLanguage("Amharski")}
        >
          Amharski
        </li>
      </ul>
    </div>
  );
};

From.propTypes = {};

export default From;
