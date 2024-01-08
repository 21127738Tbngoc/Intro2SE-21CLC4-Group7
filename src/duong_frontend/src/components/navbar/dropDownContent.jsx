import React from 'react';

import '../styles/navbar.css'
import '../button/buttons.css'

const dropDownContent = () => {
    return (
        <div className="dropdown" onMouseEnter={() => {
            document.getElementById("dropdownContent").style.display = "block";}}>
            <div className="d-flex flex-row align-items-center align-baseline" id="dropdownToggle">
                <p className="mx-2">
                    <img src="/imgs/navbar/profile-icon.svg" alt="Profile"/>
                </p>
                <p className="button2 align-items-center align-content-center" id="dropdownButton">ACCOUNT
                </p>
            </div>
            <ul className="dropdown-content" id="dropdownContent" style={{zIndex: 9999}}
                onMouseLeave={() => {
                    document.getElementById("dropdownContent").style.display = "none";
                }}>
                {/*<!-- Login --> */}
                <li>
                    <a href="/login" id="signIn" className="list-item">
                        <img src="/imgs/navbar/login.svg" alt="login"/>
                        <span>Sign In</span>
                    </a>
                </li>
                {/*<!-- Sign Up --> */}
                <li>
                    <a href="/signup" id="signUp" className="list-item">
                        <img src="/imgs/navbar/signup.svg" alt="login"/>
                        <span>Sign Up</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default dropDownContent;
