// Your code goes here

//Load Event//
window.onload = function (event){
  console.log(`Checking for ${event.type}`)
}
window.addEventListener('load', event => {
  console.log(`The event ${event.type} happened`)
})

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
  })
});