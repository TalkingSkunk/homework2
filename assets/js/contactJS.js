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
