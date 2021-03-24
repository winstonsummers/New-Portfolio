import React from "react";
import { school, personal } from "./Notable.js";
import { Spacer } from "../About/IAm.js";
import listRenderer from "./listRenderer.js";

const personalProjects = personal.map(listRenderer)
const schoolProjects = school.map(listRenderer)

export default () => {
  return (
    <div id="projects">
      
      <Spacer />
      <h1>Here are a couple things I'm working on</h1>
      {personalProjects}

      <Spacer />
      <h1>These are two of my Projects from school</h1>
      {schoolProjects}
    </div>
  );
};
