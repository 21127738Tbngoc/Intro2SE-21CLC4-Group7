import React, {useState} from "react";

function Testing() {
    const [text, setText] = useState('Initial text');

    const handleClick = () => {
        setText('New text');
    };

    return (
        <div>
            <p>{text}</p>
            <button onClick={handleClick}>Change Text</button>
        </div>
    );
}

export default Testing;