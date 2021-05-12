import _ from 'lodash';
import './style.css';
import printMe from './print.js';

const insert = document.createElement("h1")
insert.innerText = "Come on Gio , Kepeep on going"
document.body .appendChild(insert)
const btn = document.createElement('button');
btn.innerHTML = 'Click me and check the console!';
btn.addEventListener("click", printMe)
document.body.appendChild(btn);




// btn.onclick = printMe;
