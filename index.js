// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');



function createCalendar(element,month,year){
    let table = `<table><tr><th>Monday</th><th>Tuesday</th><th>Wednesday</th>
       <th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></tr><tr>`;
    
    element.innerHTML += table;   
}

createCalendar(appDiv,9,2019);