export const SearchResult = ({ result }) => {
  const color = require('../Utils/color')
  return (

    <div className="row g-4">
      <div className=" d-inline-flex gap-1">
        {/* <p className="d-inline-flex" style={color.TonePrimary10}> Label</p>
        <p className="d-inline-flex" style={color.ToneNeutral60}>Label</p> */}
        <div
          className="search-result d-inline-flex"
          onClick={(e) => alert(`You selected ${result}!`)}
          style={{ color: color.ToneNeutral60, marginLeft: 4}}
        >
          {result}
        </div>
      </div>
    </div>
  );
};
