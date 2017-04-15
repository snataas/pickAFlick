// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBL0TWoWtpmBCa5ZH5If2F2XUHgW7gCQb4",
//     authDomain: "justreadandwrite-89acc.firebaseapp.com",
//     databaseURL: "https://justreadandwrite-89acc.firebaseio.com",
//     projectId: "justreadandwrite-89acc",
//     storageBucket: "justreadandwrite-89acc.appspot.com",
//     messagingSenderId: "215442961918"
// };
// firebase.initializeApp(config);






var bigOne = document.getElementById('bigOne');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => bigOne.innerText = snap.val());



// Get elements 
const preObject = document.getElementById('object');
const ulList = document.getElementById('ulList');


// Create references

const dbRefObject = firebase.database().ref().child('object');
const dbRefList = dbRefObject.child('imdbRef');
// const dbRefList = dbRefObject.child('books');
const dbRefListNames = dbRefObject.child('surname');
const dbRefListImdbRef = dbRefObject.child('imdbRef');



function overWrite(newItem){
    // dbRefListNames.set({'name' : newValue });
    // dbRefListNames.set({'name' : 'somFink' });
    dbRefListImdbRef.push(newItem);
}


// Sync object changes

dbRefObject.on('value', snap => {

    // preObject.innerText = JSON.stringify(snap.val(), null, 5);

});


dbRefList.on('child_added', snap => {
    // console.log('Added a child');
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    ulList.appendChild(li);

});


dbRefList.on('child_changed', snap => {

    // console.log('Changed a child');
    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();


});

dbRefList.on('child_removed', snap => {
    // console.log('Removed a child');

    const liRemove = document.getElementById(snap.key);
    liRemove.remove();
});
