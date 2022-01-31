import React from "react";
import Links from "./Links";

function ConditionalP(props) {
  if (props.bio) {
    return <p>{props.bio}</p>;
  } else {
    return null;
  }
}


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <ConditionalP bio={props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
