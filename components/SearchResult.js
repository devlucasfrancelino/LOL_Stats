import React from "react";

const SearchResult = ({result}) => {
    return (
        <div className="searchResult">{result.name}</div>
    )
}

export default SearchResult;