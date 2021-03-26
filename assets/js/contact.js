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

class Contact extends React.Component{
    render(){
        return(
            <form id="contactForm">
            <div className="container mt-2">
              <h1>You can get in contact with me here....</h1>
   
              <div className="row">

                <div id="popUp" className="alert alert-danger d-none"></div>
      
                <div className="col-12 col-md-6">
      
                  <div className="form-group mb-3">
                    <label for="userName">Name (Required)</label>
                    <input type="text" className="form-control" id="userName" placeholder="Your name" />
                  </div>
                  <div className="form-group mb-3">
                    <label for="userEmail">E-Mail Address (Required)</label>
                    <input type="email" className="form-control" id="userEmail" placeholder="name@address.com" />
                  </div>
      
                </div>
      
                <div className="col-12 col-md-6">
      
                  <div className="form-group mb-2">
                    <label for="commentContent">Comments (Required)</label>
                    <textarea className="form-control" id="commentContent" rows="3"
                      placeholder="Questions? Comments? Rude Remarks?"></textarea>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">I want to reach Sam Kim!</label>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary" id="submit">Submit</button>
                  </div>
      
                </div>
      
              </div>
            </div>
          </form>
        )
    }
}

ReactDOM.render(<Contact />, document.querySelector('#contactReact'))



let submitButton = document.querySelector('#submit');


// runs on click submitButton

submitButton.addEventListener("click", function (event) {

    event.preventDefault();

    let userNameInput = document.querySelector('#userName').value;
    let userEmailInput = document.querySelector('#userEmail').value;
    let commentContentInput = document.querySelector('#commentContent').value;
    console.log(`[submitButton] clicked`);

    if (userNameInput == "" || userEmailInput == "" || commentContentInput == "") {
        // show the popUp
        document.querySelector('#popUp').innerText = 'Please fill the required forms.';
        document.querySelector('#popUp').classList.remove('d-none');
        console.log('fill the required forms.');
    } else {
        // gather all the inputs, and create user object for submission
        let form = {
            userName: document.querySelector('#userName').value,
            userEmail: document.querySelector('#userEmail').value,
            commentContent: document.querySelector('#commentContent').value
        }
        console.log(`form content: `, form);
        // set new submission to local storage
        localStorage.form = JSON.stringify(form);
        console.log(`..form saved as:`, localStorage.form);

        alert(`Thank you for reaching out to Sam Kim.`);
        // Reset the forms
        document.querySelector('#contactForm').reset();
        document.querySelector('#popUp').classList.add('d-none');
    }


})

// get current year for footer's copyright year
let currentTime = new Date();
let currentYear = currentTime.getFullYear();
document.querySelector('#footerP').innerHTML = `<p>Copyright © ${currentYear} Sam Kim. All Rights Reserved. <a href="https://github.com/TalkingSkunk"
class="text-white">GitHub</a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/sam-k-14099a95/"
class="text-white">LinkedIn</a></p>`;