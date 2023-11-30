import React from "react";
const Options = ({ onClickHandler }) => {
  return (
    <div className="options-container container gap-15  shadow-normal ">
      <button
        className="fw-600 rad-6 c-777 fs-24 main-padding "
        value="html"
        onClick={onClickHandler}
      >
        HTML
      </button>
      <button
        className="fw-600 rad-6 c-777 fs-24 main-padding "
        value="css"
        onClick={onClickHandler}
      >
        CSS
      </button>
      <button
        className="fw-600 rad-6 c-777 fs-24 main-padding "
        value="js"
        onClick={onClickHandler}
      >
        {" "}
        JAVASCRIPT
      </button>
      <button
        className="fw-600 rad-6 c-777 fs-24 main-padding "
        value="react"
        onClick={onClickHandler}
      >
        {" "}
        React
      </button>
    </div>
  );
};

export default Options;
