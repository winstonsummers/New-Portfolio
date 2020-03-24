const Notable = [
	{
		title: "One Neat Project",
		team: [],
		teamLink: [],
		summary: "A Whiskey recommendation system based off rating of four different Whiskey review sites. (Pandas, BeautifulSoup, Selenium)",
		tech: [	
			"Scraped four different review sites to gather data.", 
			"Cleaned the reviews so they were in numerical values and more user friendly.", 
			"Using Cosine-Similarity, found how similar one review is to another.", 
			"Taking in a User-Input and returnning the top 10 similar results."
		],
		imgPath: "barrels-boards-buffalo-trace-distillery-cellar.jpg",
		// deployment: "https://winstonsummers.github.io/TotM/",
		github: "https://github.com/Patrick-Hubbell/OneNeatProject"
	},
	{
		title: "Skagit-Valley-Flooding",
		team: ["Chris Chorliss", "Patrick Hubbell"],
		teamLink: ["https://github.com/ChrisSCorliss", "https://github.com/Patrick-Hubbell"],
		summary: "Taking in Skagit River Height returns threat levels for chances of floods.(Pandas, Matplotlib, ARIMA)",
		tech: [
			"Taking the data measured every five minutes from one gauge and every 15 minutes from another for 19 years.", 
			"Combine them into one data frame based on daily averages.", 
			"Created a user input app to return threat levels and water level of the time entered.",
			"Using ARIMA date time model to predict future results of possible flood times."
		],
		imgPath: "flood-map.png",
		// deployment: "https://venture-js.herokuapp.com/",
		github: "https://github.com/Patrick-Hubbell/Skagit-Valley-Flooding"
	},
	{
	title: "Reddit-Scrape",
		team: [],
		teamLink: [],
		summary: "Using Reddits API key, scraped r/KeepWriting (a reddit page that deals with all forms of writing) and r/EroticWriting (a reddit page that deals with Erotic forms of writing). (Pandas, Numpy, BeautifulSoup)",
		tech: [
			"Scrapping two seperate reddit pages for the contexts of words",
			"Use this data to create a model that can seperate erotic writing from not erotic",
			"Using this model, made a recommendation for Amazon to update their parental controls for the free books on the kindles"
		],
		imgPath: "reddit.png",
		// deployment: undefined,
		github: "https://github.com/Patrick-Hubbell/Reddit-Scrape"
	},
	// {
	// 	title: undefined,
	// 	team: [],
	// 	teamLink: [],
	// 	summary: undefined,
	// 	tech: undefined,
	//	imgPath: undefined,
	// 	deployment: undefined,
	// 	github: undefined
	// }
];

export default Notable;