class Nav extends React.Component{
    render(){
        return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark me-sm-0">
      <div className="container-fluid">
        <a className="navbar-brand">Sam Kim</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <a className="nav-link active" aria-current="page" href="./index.html">About</a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link active" aria-current="page" href="./portfolio.html">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contact.html">Contact</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
        )
    }
}


ReactDOM.render(<Nav />, document.querySelector('#navbarReact'))



class Project extends React.Component {
    // objects for project info for each article



        // HTML article template to populate #projectSection @line 52
        render(){
            const myProjects = [
                {
                    key: 1,
                    projectImageUrl: "https://github.com/TalkingSkunk/HW10-EmployeeTracker",
                    projectImage: "./assets/images/portfolio/hw10.png",
                    projectImageAlt: "Project screenshot",
                    projectName: "Employee Tracker",
                    projectDetails: "As a HR admin, You need to keep track of all employees, So you need a SQL database.",
                    projectFeatures: ['Input validation','Add/Edit/Delete','Easy to use'],
                    projectTools: ['JS','NodeJS', 'SQL'],
                    projectGithub: "https://github.com/TalkingSkunk/HW10-EmployeeTracker"
                },
                {
                    key: 2,
                    projectImageUrl: "https://github.com/TalkingSkunk/Homework8-ProfileMaker",
                    projectImage: "./assets/images/portfolio/hw8.png",
                    projectImageAlt: "Project screenshot",
                    projectName: "Profile Maker",
                    projectDetails: "As an Employee, You need to keep track of your team, So you need a team profile maker.",
                    projectFeatures: ['Input validation','Color-distinct roles','Easy to use'],
                    projectTools: ['HTML/CSS','JS','NodeJS'],
                    projectGithub: "https://github.com/TalkingSkunk/Homework8-ProfileMaker"
                },
                {
                    key: 3,
                    projectImageUrl: "https://talkingskunk.github.io/homework6-weatherDashboard/",
                    projectImage: "./assets/images/portfolio/projectWeather.png",
                    projectImageAlt: "Project screenshot",
                    projectName: "Current-Weather Dashboard",
                    projectDetails: "As a regular traveller, You want to see the weather at destination, So you want a reliable, real-time weather information.",
                    projectFeatures: ['Search your destination', 'Store your searched places', 'See detailed forecast info'],
                    projectTools: ['HTML/CSS', 'BS', 'JS', 'API'],
                    projectGithub: "https://github.com/TalkingSkunk/homework6-weatherDashboard"
                },
                {
                    key: 4,
                    projectImageUrl: "https://talkingskunk.github.io/homework5-dayPlanner/",
                    projectImage: "./assets/images/portfolio/projectDayplanner.png",
                    projectImageAlt: "Project screenshot",
                    projectName: "Day Planner",
                    projectDetails: "As a daily worker, You need to manage your time, So you want an accessible schedule manager.",
                    projectFeatures: ['See changing color for current hour', 'Save your schedule info', 'See current date'],
                    projectTools: ['HTML/CSS', 'BS', 'JS', 'jQuery'],
                    projectGithub: ""
                },
                {
                    key: 5,
                    projectImageUrl: "https://talkingskunk.github.io/homework3-PWMaker/",
                    projectImage: "./assets/images/portfolio/projectPWMaker.png",
                    projectImageAlt: "Project screenshot",
                    projectName: "Random Password Generator",
                    projectDetails: "As a regular web user, You need to secure your Web accounts, So you want a random and complex password.",
                    projectFeatures: ['Choose desired character types', 'Generate a random password'],
                    projectTools: ["JS"],
                    projectGithub: ""
                },
                ]
                    // projectFeatures array loop
        
        // let featuresArray = myProjects[i].projectFeatures;
        // for (let a = 0; a < featuresArray.length; a++) {
        //     let list = document.createElement('LI');
        //     let listItem = document.createTextNode(`${featuresArray[a]}`);
        //     list.appendChild(listItem);
        //     document.querySelector(`#dropdownContent1${i}`).appendChild(list);
        //     console.log(`[projectFeatures${i}]`, list)
        // }
        // // projectTools array loop
        // let toolsArray = myProjects[i].projectTools;
        // for (let b = 0; b < toolsArray.length; b++) {
        //     list2 = document.createElement('LI');
        //     let listItem2 = document.createTextNode(`${toolsArray[b]}`);
        //     list2.appendChild(listItem2);
        //     document.querySelector(`#dropdownContent2${i}`).appendChild(list2);
        //     console.log(`projectsTools${i}`, list2);
        // }
            return(
            <div>
            {myProjects.map(project=>{
                    return(
                        <article id={project.key} class="outline mb-3">
                    <div class="row bg">
                        <div class="col-12 col-md-3">
                            <a href={project.projectImageUrl} target="_blank">
                                <img id="projectImage" src={project.projectImage} alt={project.projectImageAlt} />
                            </a>
                        </div>
                        <div class="col-12 col-md-9">
                            <div class="row">
                                <div class="col-12">
                                    <h2>{project.projectName}</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <p>{project.projectDetails}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </article>)
                })}

            </div>)
            
        }
    
}
ReactDOM.render(<Project />, document.querySelector('#projectSection'))



// get current year for footer's copyright year
let currentTime = new Date();
let currentYear = currentTime.getFullYear();
document.querySelector('#footerP').innerHTML = `<p>Copyright © ${currentYear} Sam Kim. All Rights Reserved. <a href="https://github.com/TalkingSkunk"
class="text-white">GitHub</a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/sam-k-14099a95/"
class="text-white">LinkedIn</a></p>`;