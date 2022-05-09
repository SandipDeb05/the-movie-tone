import React from "react";
import SearchIcon from "../search.svg";
import "../App.css";

const SearchInput = (props) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      props.searchMovies(props.searchTerm);
    }
  };
  return (
    <div className="search">
      <input
        placeholder="Search your favourite movies"
        value={props.searchTerm}
        onChange={(e) => {
          props.setSearchTerm(e.target.value);
        }}
        onKeyPress={handleKeyPress}
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => props.searchMovies(props.searchTerm)}
      />
    </div>
  );
};

export default SearchInput;
