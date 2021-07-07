// Your code goes here

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

document.querySelector('p').addEventListener('mouseup', () => {
  let selection = document.getSelection ? document.getSelection() : document.selection.createRange();
  let range = selection.getRangeAt(0);
  let newNode = document.createElement('span');
  newNode.setAttribute('class', 'selector'); //<span class = "selector"></span>
  range.surroundContents(newNode); //<span class = "selector">text i selected</span>
})