import React from "react";
import "./SearchBar.css";

function SearchBar({ searchQuery, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a beer..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
