export const commands = {
    whoami: {
        output: "guest"
    },
    about: {
        output: "[i]about the me:\n hey!!!👋\nI'm Belassiria aymane, i'm a fullstack web developer who loves to work with anything that use JS\ni've created several projects using multiple technologies like React,Graphql,Node,Java and more🚀...\n you can use 'show-projects' to see some of my projects or use 'help' for more information about the available commands!🎉🎉\nTake care😘",
        color: "green",
    },
    help: {
        output: `this is a list of available commands: \n help:show all commands \n about: little description about aymane \n show-projects: lists of some released projects\nlinkedin:aymane linkedIn profile\nemail: aymane e-mail address\nwhoami: type of current user\nclear: remove all the previous results from the screen`,
    },
    linkedin: {
        output: "linkedin profile",
        color: "green",
        links: ["https://www.linkedin.com/in/aymane-belassiria/"],
    },
    email:{
        output: "my email",
        color: "green",
        links: ["aymanebel2@outlook.fr"],
    },
    "show-projects": {
        output: "list of some projects that i've working on 💯!",
        color: "green",
        links: ["https://github.com/aymane-smi/blockchain-js", "https://github.com/aymane-smi/uniswap-clone", "https://github.com/aymane-smi/9aleb", "https://github.com/aymane-smi/mealsToGo"],
    },
    github:{
        output: "my github profile",
        color: "green",
        links: ["https://github.com/aymane-smi/"],
    }
};