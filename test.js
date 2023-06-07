//Selects the class (.container)
//const container = document.querySelector('.container');

//Creates a div element 
//const content = document.createElement('div');
//content.classList.add('content');
//content.textContent = 'This is the glorious text-content!';
//container.appendChild(content);

//This adds a event listener
/*
<!-- the HTML file -->
<button id="btn">Click Me Too</button>
*/
// the JavaScript file
/*
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
*/
// the JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
btn.addEventListener('click', function (e) {
    console.log(e);
});
btn.addEventListener('click', function (e) {
    console.log(e.target);
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});