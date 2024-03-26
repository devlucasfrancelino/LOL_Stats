import React, { useEffect, useState } from "react";

const SearchResult = ({result, champion}) => {

    return (
        <div className="searchResult">
          <img src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${result.id}.png`}></img>
          <p>{result.name}</p>
        </div>
    )
}

export default SearchResult;


// Avaliable data version, id, key, name, title, blurb, info, image, tags, partype, stats