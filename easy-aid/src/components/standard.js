import React from "react";


function EmptySpace ({windowHeightPercentage}) {
    return (
        <div style={{ height: `${windowHeightPercentage}vh` }}> </div>
    );
}

export default EmptySpace;