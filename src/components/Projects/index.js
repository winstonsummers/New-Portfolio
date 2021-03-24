import React from "react";
import Notable from "./Notable.js";
import { Spacer } from "../About/IAm.js";
import listRenderer from "./listRenderer.js";

const list = Notable.map(listRenderer)

export default () => {
  return (
    <div id="projects">
      <Spacer />
      <h1>These are some of my Favorite Projects</h1>
      {list}
    </div>
  );
};
