// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');



function createCalendar(element,month,year){
    let table = `<table><tr><th>Monday</th><th>Tuesday</th><th>Wednesday</th>
       <th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></tr><tr>`;
   month = month - 1;// JS month start from 0;  
   let date = new Date(year,month);
    // create empty cell value before 1st month date
    for(let i=0; i < getDay(date); i++ ){
      table += `<td></td>`;
    }
     while(date.getMonth() === month){
      // table += '<td>' + date.getDate() +'</td>';
       if(getDay(date) === 6){
         table += `</tr><tr>`
       }
       date.setDate(date.getDate()+1);
     }

   // create empty cell value after last month date
    for(let i=0; i < getDay(date); i++ ){
      table += `<td></td>`;
    }
    table += `</tr></table>`;
    element.innerHTML += table;   
}

function getDay(date){
  let day = date.getDay();
  if(day===0){
    day = 7;
  }
  return day-1;
}

createCalendar(appDiv,9,2019);