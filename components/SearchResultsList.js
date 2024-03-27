import React from "react";

import "../styles/SearchResultsList.css";
import SearchResult from "./SearchResult";
import Link from "next/link";

export const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <Link href={`/champions/${result.id}`}>
            <SearchResult result={result} key={id} />
          </Link>
        );
      })}
    </div>
  );
};
