import React, { useState, useEffect } from "react";
import './search.css';





function SearchHome({ fetchData, setFilteredData }) {
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    setFilteredData(
      searchData
        ? fetchData.filter((flagname) =>
            flagname?.name.common
              .toLowerCase()
              .includes(searchData.toLowerCase())
          )
        : fetchData
    );

  }, [searchData]);

  const searchHandler = (e) => {
    setSearchData(e.target.value);
  };
  return (
    <div>
      <div className="search-container">
        <input
          placeholder="Search"
          onChange={searchHandler}
        />
      </div>
    </div>
  );
}

export default SearchHome;
