// Your code goes here

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


//Sign Up Button On Click//
 let signUp = document.querySelectorAll('.btn')
 
 signUp.forEach(function(e) {
  e.addEventListener('click', function() {
    this.style.backgroundColor = "purple";
  })
});