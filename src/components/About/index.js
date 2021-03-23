import React from "react";
import IAm, { Spacer } from "./IAm";
import data from "./data";

export default () => {
  return (
    <div id="about">
      <Spacer />
      <div className="about-head">
        <h1>My name is Winston Summers</h1>
        <h5>I know that was shocking to you by this time.</h5>
      </div>

      {data.map((i, key) => (
        <IAm text={i} key={key} />
      ))}

      <div className="about-img">
        <i>I am Winston Summers</i>
        <img
          src="WSheadshot.jpg"
          alt="A stunning picture of Winston, how charming!"
        ></img>
      </div>
    </div>
  );
};
