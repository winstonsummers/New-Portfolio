
// below is a template... or interface for how data should be shaped for display in the projects section.
// currently there are school and personal
/**
  {
  	title: string,
  	team: string[],
  	teamLink: string[],
  	summary: string,
  	tech: string[],
  	imgPath: string,
    imgAlt: string,
  	deployment: string,
  	github: string,
  },
*/

export const personal = [
//   {
//   	title: "string",
//   	team: [],
//   	teamLink: [],
//   	summary: "string",
//   	tech: [],
//   	imgPath: "string",
//     imgAlt: "coming soon",
//   	deployment: "",
//   	github: "",
//   },
]


export const school = [
  {
    title: "TotM(Theater of the Mind)",
    team: [],
    teamLink: [],
    summary:
      'Text-based RPG, a fun throw back to the "good ol\' days" of pc gaming. Front-end game(HTML, CSS, Javascript)',
    tech: [
      "Incorporated user inputs with logic and mechanics",
      "Created a UI in HTML and CSS that looks the part and functions effectively",
      "Created game logic and interpreted user input with Javascript",
      "Manipulated the DOM and created an interactive expeirence with Javascript",
    ],
    imgPath: "totm.png",
    imgAlt: "TotM game",
    deployment: "https://winstonsummers.github.io/TotM/",
    github: "https://github.com/winstonsummers/TotM",
  },
  // {
  // 	title: "Codey the Barbarian",
  // 	team: [],
  // 	teamLink: [],
  // 	summary: "A short story generator",
  // 	tech: [
  //     "Uses Markov chain to interpret text files and stores data locally",
  //     "Simple to use command line app with Python",
  //   ],
  // 	imgPath: "",
  //   imgAlt: "coming soon",
  // 	deployment: "",
  // 	github: "https://github.com/winstonsummers/codey_the_barbarian",
  // },
  {
    title: "Venture",
    team: ["Tony Phan", "Sweeney Arrnett", "Winston Summers"],
    teamLink: [
      "http://www.phantony.net/",
      "https://github.com/sweeneyyy",
      "https://github.com/winstonsummers",
    ],
    summary:
      "Team MERN stack app for travelers to record packing list and find places to eat(MERN stack, Yelp-Fusion)",
    tech: [
      "Worked with MERN stack to present a clean looking app with dynamic features",
      "Used the Yelp-Fusion API and node module to get results on the backend and give users options",
      "Used Auth and Mongodb so users can sign in and save data that they may want to retrieve later",
    ],
    imgPath: "venture.png",
    imgAlt: "Venture menu",
    deployment: "https://venture-js.herokuapp.com/",
    github: "https://github.com/sweeneyyy/mern-project-3",
  },
];
