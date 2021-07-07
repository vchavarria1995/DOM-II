// Your code goes here

//Load Event//
window.onload = function (event){
  console.log(`Checking for ${event.type}`)
}
window.addEventListener('load', event => {
  console.log(`The event ${event.type} happened`)
});

//Navigation Color Mouse Over// 
let navBar = document.querySelector('.nav');
let navElements = navBar.querySelectorAll('.nav-link');
let navElementsArr = Array.from(navElements);

function navColorChanger(event) {
    event.preventDefault();
    let { target } = event;
    target.style.color = 'green';
    target.style.transition = '2s';
  }

navElementsArr.forEach(e =>{
    e.addEventListener('mouseover', navColorChanger);
});

//Fun Bus Image Double Click Scale//
let funBus = document.querySelector('.intro');
let funBusImage = document.querySelector('.intro img');
funBusImage.addEventListener('dblclick', (event) => {
    funBusImage.style.transform = 'scale(1.2)';
    event.stopPropagation();
    funBus.addEventListener('dblclick', () => {
        funBus.style.transform = 'scale(1.2)';
    });
});

//Sign Up Button On Click//
 let signUp = document.querySelectorAll('.btn')

 signUp.forEach(function(e) {
  e.addEventListener('click', function() {
    this.style.backgroundColor = "purple";
  });
});

//Map Image Scale on Mousewheel//
let letsGoIMG = document.querySelector ('.content-section img');

letsGoIMG.addEventListener('wheel', (e) => {
  letsGoIMG.style.transform = 'scale(1.4)';
});

//Drag Event//
let funBusDrag = document.querySelectorAll("h1");
funBusDrag.forEach(e => {
    e.draggable = true;
    let defaultText = e.innerText;
    e.addEventListener("dragstart", () => {
        e.innerText = "You're Dragging The Fun Bus"
    });
    e.addEventListener("dragend", () => {
        e.innerText = defaultText;
    });
    e.addEventListener("dragleave", (event) => {
        e.innerText = event.target.innerText;
        console.log(event.target)
    });
});

//Copy Event//
let sectionText = document.querySelectorAll("p");
sectionText.forEach((item) => {
	item.addEventListener("copy", () => {
		item.innerText = "Stop copying me!";
	});
});