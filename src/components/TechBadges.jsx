import React from "react";
import Badge from "./Badge/Badge";

const techColorDictionary = {
  Swift: "primary",
  iOS: "info",
  JavaScript: "success",
  MapKit: "warning",
  Firebase: "danger",
  "Google Cloud Functions": "primary",
  "Google Photos": "info",
  React: "primary",
  Redux: "info",
  "Node.js": "success",
  TypeScript: "warning",
  "Pixi.js": "warning",
  Primus: "danger",
  Express: "info",
  Unity2D: "danger",
  "C#": "info",
  AdMob: "success",
  GameKit: "primary",
  Android: "success",
  "Objective-C": "warning",
  SpriteKit: "danger",
  "Cocoas-2D": "danger",
};

function TechBadges(props) {
  const types = ["primary", "info", "success", "warning", "danger"];

  let getType = (tech) => {
    if (techColorDictionary.hasOwnProperty(tech)) {
      return techColorDictionary[tech];
    } else {
      let randomNumber = Math.floor(Math.random() * 4);
      return types[randomNumber];
    }
  };

  let techStringArray = props.technology.split(", ");

  return (
    <div>
      {techStringArray.map((item) => (
        <Badge color={getType(item)}>{item}</Badge>
      ))}
    </div>
  );
}

export default TechBadges;
