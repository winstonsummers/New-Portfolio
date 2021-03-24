import React from "react";
import Notable from "./Notable.js";
import { Spacer } from "../About/IAm.js";

const list = Notable.map((item) => {
  return (
    <div key={item.title} className="item">
      <h3>{item.title}</h3>
      {item.team.length ? (
        <p>
          <strong>The Team:</strong>{" "}
          {item.team.map((member, index) => {
            return (
              <a
                className="pro-link"
                href={item.teamLink[index]}
                key={member + index}
              >
                {member},{" "}
              </a>
            );
          })}
        </p>
      ) : (
        <p>Independent Project</p>
      )}
      <p>{item.summary}</p>
      <ul>
        {item.tech.map((tech, key) => {
          return <li key={tech + key}>{tech}</li>;
        })}
      </ul>
      <a
        className="img-link"
        href={item.deployment}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={item.imgPath} alt=""></img>
      </a>
      <span className="righty">
        <a
          className="pro-link"
          href={item.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
      </span>
    </div>
  );
});

export default () => {
  return (
    <div id="projects">
      <Spacer />
      <h1>These are some of my Favorite Projects</h1>
      {list}
    </div>
  );
};
