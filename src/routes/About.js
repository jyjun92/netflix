import React from "react";

function About(props){
    console.log(props);
    return <div className="about__container">
        <span>
            "Freedom is the freedom to say that two plus two make four.
            If that is... all else follows"
        </span>
        <span>-George Orwell, 1984</span>
    </div>
}

export default About;