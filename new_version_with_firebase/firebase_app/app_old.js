var bigOne = document.getElementById('bigOne');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => bigOne.innerText = snap.val());



// Get elements 
const preObject = document.getElementById('object');
const ulList = document.getElementById('ulList');


// Create references

const dbRefObject = firebase.database().ref().child('object');
const dbRefList = dbRefObject.child('books');
const dbRefListNames = dbRefObject.child('surname');




// function overWrite(a,b,c){
//     // dbRefListNames.set({'name' : newValue });
//     // dbRefListNames.set({'name' : 'somFink' });
//     dbRefList = dbRefObject.child(a);
//     dbRefList.set({b,c});
// }


function overWrite(newItem){
    // dbRefListNames.set({'name' : newValue });
    // dbRefListNames.set({'name' : 'somFink' });
    dbRefListNames.push(newItem);
}





// Sync object changes

dbRefObject.on('value', snap => {

    preObject.innerText = JSON.stringify(snap.val(), null, 5);

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
