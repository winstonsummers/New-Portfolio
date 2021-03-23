import React from "react";

export const Para = ({ text }) => {
  return <p>{text}</p>;
};

export const Spacer = () => {
  return <p>&nbsp;</p>;
};

export default ({ text }) => {
  return (
    <Para
      text={
        <React.Fragment>
          <i>I am</i> {text}
        </React.Fragment>
      }
    />
  );
};
