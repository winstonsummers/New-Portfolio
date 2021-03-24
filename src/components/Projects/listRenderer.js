import React from "react";
import AComponent from "../Nav/AComponent";

export default (item) => {
  return (
    <div key={item.title} className="item">
      <h3>{item.title}</h3>
      {item.team.length ? (
        <p>
          <strong>The Team: </strong>
          {item.team.map((member, index) => {
            const text = index < item.team.length - 1 ? member + "," : member;
            return (
              <AComponent
                className="pro-link"
                href={item.teamLink[index]}
                key={member + index}
                text={text}
              />
            );
          })}
        </p>
      ) : (
        <p>Independent Project</p>
      )}
      <p>{item.summary}</p>
      <ul>
        {item.tech.map((tech, key) => {
          return <li key={item.title + key}>{tech}</li>;
        })}
      </ul>
      <AComponent
        className="img-link"
        href={item.deployment}
        blank={true}
        text={<img src={item.imgPath} alt={item.imgAlt}></img>}
      />
      <span className="righty">
        <AComponent
          className="pro-link"
          href={item.github}
          blank={true}
          text="Github"
        />
      </span>
    </div>
  );
};
