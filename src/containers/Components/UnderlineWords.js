import React from "react";
import "./styles/UnderlineWords.scss";

function UnderlineWords({ word, fontFamily }) {

    return (
      <span className="UnderlineText">
        <p style={{margin: "0px"}}>
            {word}
        </p>
      </span>
    );
    
}

export default UnderlineWords