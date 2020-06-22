let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Tri.png') {
      myImage.setAttribute ('src','images/Tri2.png');
    } else {
      myImage.setAttribute ('src','images/Tri.png');
    }
}
let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
  }
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'TRI!! ' + myName;
    }
  }
if(!localStorage.getItem('name')) {
    setUserName();
  } 
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'TRI!! ' + storedName;
  }