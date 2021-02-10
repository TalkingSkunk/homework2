// objects for project info for each article
const myProjects = [
    {
        projectImageUrl: "https://talkingskunk.github.io/homework6-weatherDashboard/",
        projectImage: "./assets/images/portfolio/projectWeather.png",
        projectImageAlt: "Project screenshot",
        projectName: "Current-Weather Dashboard",
        projectDetails: "As a regular traveller, you would like to know what the weather is like at your destination; so you want a reliable, real-time weather information.",
        projectFeatures: ['Search your destination', 'Store your searched places', 'See detailed forecast info'],
        projectTools: ['HTML/CSS', 'BS', 'JS', 'API'],
        projectGithub: "https://github.com/TalkingSkunk/homework6-weatherDashboard"
    },
    {
        projectImageUrl: "https://talkingskunk.github.io/homework5-dayPlanner/",
        projectImage: "./assets/images/portfolio/projectDayplanner.png",
        projectImageAlt: "Project screenshot",
        projectName: "Day Planner",
        projectDetails: "As a daily worker, you need to manage your time; so you want a personal daily schedule that you can access easily.",
        projectFeatures: ['See changing color for current hour', 'Save your schedule info', 'See current date'],
        projectTools: ['HTML/CSS', 'BS', 'JS', 'jQuery'],
        projectGithub: ""
    },
    {
        projectImageUrl: "https://talkingskunk.github.io/homework3-PWMaker/",
        projectImage: "./assets/images/portfolio/projectPWMaker.png",
        projectImageAlt: "Project screenshot",
        projectName: "Random Password Generator",
        projectDetails: "As a regular Web user, you need to secure your Web accounts; so you want a random and complex password combination.",
        projectFeatures: ['Choose desired character types', 'Generate a random password'],
        projectTools: ["JS"],
        projectGithub: ""
    },
    {
        projectImageUrl: "",
        projectImage: "",
        projectImageAlt: "",
        projectName: "",
        projectDetails: "",
        projectFeatures: "",
        projectTools: "",
        projectGithub: ""
    }
]


for (let i = 0; i < myProjects.length - 1; i++) {
    // HTML article template to populate #projectSection @line 52
    document.querySelector('#projectSection').innerHTML +=
        `<article class="outline mb-3">
        <div class="row bg">
            <div class="col-12 col-md-3">
                <a href="${myProjects[i].projectImageUrl}" target="_blank">
                    <img id="projectImage" src="${myProjects[i].projectImage}" alt="${myProjects[i].projectImageAlt}" />
                </a>
            </div>
            <div class="col-12 col-md-9">
                <div class="row">
                    <div class="col-12">
                        <h2 style="text-decoration: underline;">${myProjects[i].projectName}</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <p>${myProjects[i].projectDetails}</p>
                    </div>
                    <div class="col-12 col-md-6">
                        <div id="dropdown1">
                            <p>Features: <span id="dropdown10">See List</span></p>
                            <ul id="dropdownContent1${i}" class="dropdownContent1">
                            <!-- Features Dropdown List -->
                            </ul>
                        </div>
                        <div id="dropdown2">
                            <p>Tools: <span id="dropdown20">See List</span></p>
                            <ul id="dropdownContent2${i}" class="dropdownContent2">
                            <!-- Tools Dropdown List -->
                            </ul>
                        </div>
                        <a href="${myProjects[i].projectGithub}">GitHub Repo Link</a>
                    </div>
                </div>
            </div>
        </div>
    </article>`;

    // projectFeatures array loop
    let featuresArray = myProjects[i].projectFeatures;
    for (let a = 0; a < featuresArray.length; a++) {
        let list = document.createElement('LI');
        let listItem = document.createTextNode(`${featuresArray[a]}`);
        list.appendChild(listItem);
        document.querySelector(`#dropdownContent1${i}`).appendChild(list);
        console.log(list)
    }
    // projectTools array loop
    let toolsArray = myProjects[i].projectTools;
    for (let b = 0; b < toolsArray.length; b++) {
        list2 = document.createElement('LI');
        let listItem2 = document.createTextNode(`${toolsArray[b]}`);
        list2.appendChild(listItem2);
        document.querySelector(`#dropdownContent2${i}`).appendChild(list2);
    }
}

// get current year for footer's copyright year
let currentTime = new Date();
let currentYear = currentTime.getFullYear();
document.querySelector('#footerP').innerHTML = `<p>Copyright © ${currentYear} Sam Kim. All Rights Reserved. <a href="https://github.com/TalkingSkunk"
class="text-white">GitHub</a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/sam-k-14099a95/"
class="text-white">LinkedIn</a></p>`;