import React from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search notes..."
      className="search-bar"
    />
  );
};

export default Search;
