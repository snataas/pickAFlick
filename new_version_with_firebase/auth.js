
// Get element
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');


// Add login event
btnLogin.addEventListener('click', e => {

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign in

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

// Add signup event

btnSignUp.addEventListener('click', e => {

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign up

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

btnLogOut.addEventListener('click', e => {
    firebase.auth().signOut();
});


    // Add a realtime listener

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        btnLogOut.classList.remove('hide');
        console.log(firebaseUser);
    } else {
        console.log('Not logged in');
        btnLogOut.classList.add('hide');
    }
});
    
