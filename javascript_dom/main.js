document.querySelector("body").style.backgroundColor = "rgb(160,180,200";
//grab the newly minted container
const container = document.querySelector('#container');
container.style.backgroundColor = "rgb(0, 0, 0" 

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//creating element <p>  when using elements you get an object so you have to treat it similar to array to select
// item(0) order of <p> if you have more than 1
const p = document.createElement('p');
var ptext = document.createTextNode("Hey I'm Red!");
// document.getElementsByName('p').style.color = "red";
p.appendChild(ptext);
container.appendChild(p)

document.getElementsByTagName('p').item(0).style.color = "#f00";

// creating elment <h2> and setting it to be blue
//best way to handle this after creating is to select with docuement.querySelector('h3')
const h2 = document.createElement('h2');

h2.appendChild(document.createTextNode("I'm a blue h2!"))
container.appendChild(h2)
document.querySelector('h2').style.color = "blue";

// creating element <div id="PinkBackground">
const blackborder = document.createElement('div');
blackborder.id = 'PinkBackground';
blackborder.textContent = "making a black border"
container.appendChild(blackborder);
const EditBorder = document.getElementById('PinkBackground');

//this sets a thick solid blue line
EditBorder.style.border = "thick solid rgb( 255, 255, 255)";
EditBorder.style.backgroundColor = "pink";
EditBorder.style.margin = "2% 2%";
blackborder.style.alignItems = "center";

// this makes an easyway to create an element inside of another
// then give it an id and some text
const h1 = EditBorder.appendChild(document.createElement("div"))
h1.id = "h1"
h1.textContent = "I'm in a div"


EditBorder.appendChild(Object.assign(document.createElement('p'),{textContent:"Me Too!"}))
EditBorder.appendChild(Object.assign(document.createElement('div'),{id:"hey", textContent:"heyhey"}))
// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m  blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
