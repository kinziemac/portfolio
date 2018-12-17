import React from "react";
import "./styles/UnderlineWords.scss";

function UnderlineWords({ word, fontFamily }) {

    return (
      <span className="UnderlineText">
        <p>
            {word}
        </p>
      </span>
    );
    
}

export default UnderlineWords