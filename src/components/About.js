import React from "react";
import Links from "./Links";

function About({bio,github,linkedin} ) {
  return (
    <div id="about">
      <h2>About Me</h2>
       {bio? <p>{bio}</p>:null}
      <Links github={github} linkedin={linkedin} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}


export default About;
