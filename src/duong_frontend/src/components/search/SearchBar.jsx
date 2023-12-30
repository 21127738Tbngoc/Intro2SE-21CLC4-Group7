import { useState, useMemo } from "react";
import { debounce } from "lodash";
import { FaSearch } from "react-icons/fa";


export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

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

  // Debounce the fetchData function with a delay of 300ms
  const fetchDataDebounced = useMemo(() => debounce(fetchData, 300), []);

  const handleChange = (value) => {
    setInput(value);
    fetchDataDebounced(value);
  };

  return (
    <div className="container-xxl w-75">
      <div className="search-dropdown justify-content-center flex-column gap-3 position-relative">
        <div className="search-box">
          <div className="d-flex flex-row g-4 d-flex">
            <div className="input-group">
              <div className="input-group-text">
                <img src="/imgs/navbar/search-icon.svg" alt="Search" />
              </div>
              <input
                type="text"
                className="form-control out"
                id="searchtext"
                placeholder="What are you searching for?"
                onChange={(e) => handleChange(e.target.value)}
              />
              <div className="input-group-text quit-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#46692A"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
