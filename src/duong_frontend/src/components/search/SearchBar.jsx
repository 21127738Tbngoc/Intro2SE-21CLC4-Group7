import { useState } from "react";
import { FaSearch } from "react-icons/fa";









export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const color = require('../Utils/color')
  const searchTextStyle = {
      background: 'var(--scheme-background)',
      border: '1px solid var(--scheme-outline, #A1B096)'
  }
  const fetchData = (value) => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (

    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>


  );
};
