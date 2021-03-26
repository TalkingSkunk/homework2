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





// get current year for footer's copyright year
let currentTime = new Date();
let currentYear = currentTime.getFullYear();
document.querySelector('#footerP').innerHTML = `<p>Copyright © ${currentYear} Sam Kim. All Rights Reserved. <a href="https://github.com/TalkingSkunk"
class="text-white">GitHub</a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/sam-k-14099a95/"
class="text-white">LinkedIn</a></p>`;