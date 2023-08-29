let XMLHttpRequest = require('xhr2');

let a = new XMLHttpRequest();

a.open ('GET', 'https://restcountries.com/v3.1/all')

a.onload = function (){
    let sk = JSON.parse(a.responseText);
 
  let sk1 =[];

  for (var x of sk){
    sk1.push(x.population);
  }

    let result = sk1.reduce((a, b) => a+b );
   console.log(result);
   
}
a.send();


// output:
// 7777721563