// Games & Apps Data
// To add a new game or app, add an object to this array. Fields:
// {
//     slug: "my-game",                      // used for the card id
//     title: "Game Title",
//     tagline: "One sentence that sells it",
//     platforms: ["iOS"],
//     icon: "assets/icons/my-game.png",     // square app icon
//     accent: "#5b8cff",                    // card glow / accent color
//     page: "my-game.html",                 // detail page on this site
//     appStore: "https://apps.apple.com/app/idXXXXXXXXXX" // optional
// }

const games = [
    {
        slug: "wordrush",
        title: "WordRush",
        tagline: "Drag across letter tiles to build words against the clock. Four modes, including real-time 1v1.",
        platforms: ["iOS"],
        icon: "assets/icons/wordrush.png",
        accent: "#ffd23f",
        page: "wordrush.html",
        appStore: "https://apps.apple.com/app/id6754856456"
    },
    {
        slug: "ratemyjumper",
        title: "RateMyJumper",
        tagline: "Upload your jump shot, get rated by the crowd and scored against NBA shooting forms.",
        platforms: ["iOS"],
        icon: "assets/icons/ratemyjumper.png",
        accent: "#e8421a",
        page: "ratemyjumper.html",
        appStore: "https://apps.apple.com/app/id6776380978"
    },
    {
        slug: "critter",
        title: "Critter",
        tagline: "Rank the films and shows you watch head-to-head instead of with stars, then argue about it with your friends.",
        platforms: ["iOS"],
        icon: "assets/icons/critter.png",
        accent: "#f0c477",
        page: "critter.html",
        appStore: "https://apps.apple.com/app/id6834116286"
    }
];
