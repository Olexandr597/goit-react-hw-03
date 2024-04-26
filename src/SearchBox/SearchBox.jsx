import React from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.findContainer}>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        id="searchInput"
        placeholder="Enter your search query"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
