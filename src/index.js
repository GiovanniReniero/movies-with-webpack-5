import _ from 'lodash';
import './style.css';
import {dealWithEvent} from "./dealWithEvent"
import {suggestions} from "./suggestions"


const insert = document.createElement("h1")
insert.innerText = "Come on Gio , Kepeepity oni gowen on fa eva"
// document.body .appendChild(insert)

 
const userEntry = document.querySelector("form")
userEntry.addEventListener("submit", dealWithEvent)

suggestions("Terminator")



