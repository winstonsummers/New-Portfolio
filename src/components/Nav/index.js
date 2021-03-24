import React from "react";
import AComponent from "./AComponent";

const navValues = [
  // {
  // 	href: ,
  // 	download: ,
  // 	blank: ,
  // 	text: ,
  // },
  {
    href: "#about",
    text: "<Winston Summers />",
  },
  {
    href: "#projects",
    text: "Projects",
  },
  {
    href: process.env.PUBLIC_URL + "Winston_Summers.PDF",
    download: true,
    text: "Resume",
  },
  {
    href: "https://github.com/winstonsummers",
    blank: true,
    text: "Github",
  },
  {
    href: "https://www.linkedin.com/in/winston-summers/",
    blank: true,
    text: "Linkedin",
  },
];

export default () => {
  return (
    <nav>
      {navValues.map((item) => (
        <AComponent {...{ key: item.href, ...item }} />
      ))}
    </nav>
  );
};
