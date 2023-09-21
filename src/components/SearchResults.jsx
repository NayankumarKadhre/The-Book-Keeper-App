import React from "react";
import SearchResultList from "./SearchResultList";

function SearchResults(props) {
  return (
    <div className="search-result">
      {props.list.map((element, id) => {
        return <SearchResultList list={props.list} key={id} />;
      })}
    </div>
  );
}

export default SearchResults;
