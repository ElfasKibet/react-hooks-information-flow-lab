import React from "react";

function Header({ onDarkModeClick }) {
  return (
    <header>
      <h1>Shopping List</h1>
      <button onClick={onDarkModeClick}>Dark Mode</button>
    </header>
  );
}

export default Header;
