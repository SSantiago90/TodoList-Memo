import React from "react";

function Button({ onClick, children, type }) {
  let stylesButton = {};

  /* styledcomponents */

  if (type === "isDanger") {
    stylesButton.backgroundColor = "red";
    stylesButton.colorText = "white";
    stylesButton.border = "1px solid red";
  }

  return (
    <button style={stylesButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
