import React from "react";

/*Namijenjeno funkcijama koje su univerzalne*/ 


export function EmptySpace ({windowHeightPercentage}) {
    return (
        <div style={{ height: `${windowHeightPercentage}vh` }}> </div>
    );
}

