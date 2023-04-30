// import {searchItem , ElementDisp } from "./gallery.js";


// log in functions
console.log(localStorage);

const User = {
    firstName : localStorage.getItem('Firstname'),
    lastName : localStorage.getItem('Lastname'),
    phone : localStorage.getItem('Phone'),
    email : localStorage.getItem('Email'),
    password : localStorage.getItem('Pass')
};


if(User.firstName) {
    // let node = document.createElement('p');
    // let textnode = document.createTextNode(User.firstName);
    // node.appendChild(textnode);
    document.querySelector('.reg').innerText = User.firstName;
}
console.log(User);


const sinpt = document.querySelector('.sinpt').value;

document.querySelector('.bts').addEventListener('click' , () => {
    // go to gallery html
    document.querySelector('.bts').href = './gallery.html';
})   

console.log(sinpt);
// export default sinpt ;
