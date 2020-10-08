alert('hello Luisa you look hot today');
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('Src');
    if (mySrc === 'images/hat.jpeg') {
        myImage.setAttribute('Src','images/hat2.jpg');
    } else {
        myImage.setAttribute('Src','images/hat.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('please set your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Hallo again ' + myName;
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hallo again ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} 
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'butthead ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
