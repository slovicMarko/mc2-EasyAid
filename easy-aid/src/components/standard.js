import React from "react";

/*Namijenjeno funkcijama koje su univerzalne*/ 


export function EmptySpace ({windowHeightPercentage}, {isGlobal = true}) {
    if (isGlobal) {
        return (
            <div style={{ height: `${windowHeightPercentage}vh` }}> </div>
        );
    }
    else {
        return (
            <div style={{ height: `${windowHeightPercentage}%` }}> </div>
        );
    }
}

