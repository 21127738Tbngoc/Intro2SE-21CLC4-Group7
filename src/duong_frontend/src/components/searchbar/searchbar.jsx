import React from "react";

import './searchbar.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

const searchTextStyle = {
    background: 'var(--scheme-background)',
    border: '1px solid var(--scheme-outline, #A1B096)'
}

const Searchbar = () => {
    const searchTextStyle = {
        background: 'var(--scheme-background)',
        border: '1px solid var(--scheme-outline, #A1B096)'
    }
    return (
        <div>
            <div className="container-xxl  w-75" id={"nav-searchbar"}>
                <div className="search-dropdown justify-content-center flex-column gap-3 position-relative">
                    <div className="search-box" onClick={function (event) {
                        event.stopPropagation()
                    }}>
                        <div className="d-flex flex-row g-4 d-flex">
                            <div className="input-group">
                                <div className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                            stroke="#46692A" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <input type="text" className="form-control out" id="searchtext"
                                       placeholder="Typing something"
                                       style={searchTextStyle}/>

                                <div className="input-group-text quit-search">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                                            fill="#46692A"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Searchbar