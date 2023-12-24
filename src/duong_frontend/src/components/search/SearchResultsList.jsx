
import { SearchResult } from "./SearchResult";
import "./SearchResultsList.css"

export const SearchResultsList = ({ results }) => {

  const color = require('../Utils/color')

  return (

    <div className="row g-4">
      <div className=" d-inline-flex gap-1 center">
        <div className="results-list d-inline-flex"
          style={{ color: color.ToneNeutral60}}
        >
          {results.map((result, id) => {
            return <SearchResult result={result.name} key={id} className={"center"} />;
          })}
        </div>
      </div>
    </div>
  );
};
