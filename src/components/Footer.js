import React from "react";
import AComponent from "./Nav/AComponent";

export default () => {
  return (
    <footer>
      <p>
        Winston Summers&copy; 2018
        <br />
        Find me on
        <AComponent
          className="pro-link"
          href="https://github.com/winstonsummers"
          blank={true}
          text="Github"
        />
        and
        <AComponent
          className="pro-link"
          href="https://www.linkedin.com/in/winston-summers/"
          blank={true}
          text="Linkedin."
        />
      </p>
    </footer>
  );
};
