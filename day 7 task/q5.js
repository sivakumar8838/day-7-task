let XMLHttpRequest = require('xhr2');

let a = new XMLHttpRequest();

a.open ('GET', 'https://restcountries.com/v3.1/all')

a.onload = function (){
    let sk = JSON.parse(a.responseText);
 
   // let userNames =[];
sk.map((n) =>{
    if (n.currencies&& n.currencies.USD )
    console.log(n.name.common)
});
    
}
a.send();


// United States Virgin Islands
// British Virgin Islands
// Northern Mariana Islands
// Turks and Caicos Islands
// Panama
// Micronesia
// Marshall Islands
// Ecuador
// American Samoa
// Palau
// United States Minor Outlying Islands
// Caribbean Netherlands
// Guam
// United States
// Timor-Leste
// Bahamas
// El Salvador
// British Indian Ocean Territory
// Cambodia
Puerto Rico