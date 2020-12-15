import React from "react";
import Wp from "../../../Assets/wordpress.png";
import Hugo from "../../../Assets/hugo.png";
import Joomla from "../../../Assets/joomla.png";
import Magento from "../../../Assets/magento.png";
import Python from "../../../Assets/python.png";
import Sitecore from "../../../Assets/sitecore.png";
import Android from "../../../Assets/android.png";
import Github from "../../../Assets/github.png";

const Culture = () => {
  const list = [Wp, Hugo, Joomla, Magento, Python, Sitecore, Android, Github];
  return (
    <section className="grid">
      <ul className="grid-inner">
        {list.map((element, i) => {
          return (
            <li key={i} className="grid__element">
              <img className="grid__element__img" src={element} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Culture;
