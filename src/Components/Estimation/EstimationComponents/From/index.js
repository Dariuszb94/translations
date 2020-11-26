import React, { useState } from "react";

const From = () => {
  const [listOpacity, showList] = useState(0);
  return (
    <div className="from">
      <div onClick={() => showList(!listOpacity)}>Polski</div>
      <ul className={`from__list${listOpacity ? "--shown" : "--hidden"}`}>
        <li>x</li>
        <li>x</li>
        <li>x</li>
      </ul>
    </div>
  );
};

From.propTypes = {};

export default From;
