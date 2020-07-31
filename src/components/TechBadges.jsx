import React from "react";
import Badge from "./Badge/Badge";

function TechBadges(props) {
  const types = ["primary", "info", "success", "warning", "danger"];

  let randomType = () => {
    let randomNumber = Math.floor(Math.random() * 4);
    return types[randomNumber];
  };

  let techStringArray = props.technology.split(", ");

  return (
    <div>
      {techStringArray.map((item) => (
        <Badge color={randomType()}>{item}</Badge>
      ))}
    </div>
  );
}

export default TechBadges;
