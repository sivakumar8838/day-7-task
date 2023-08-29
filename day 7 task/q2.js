let XMLHttpRequest = require('xhr2');

let a = new XMLHttpRequest();

a.open ('GET', 'https://restcountries.com/v3.1/all')

a.onload = function (){
    let sk = JSON.parse(a.responseText);
 
  let sk1 =[];

    let result = sk.filter((val) => {
     if(val.population <= 200000);

     
     return val; 

   });
   for (x of result){
    sk1.push((x.name.common))
   }
console.log(sk1.join("\n"));
   
}
a.send();


// South Africa
// Svalbard and Jan Mayen
// Samoa
// Gambia
// Saint Kitts and Nevis
// Monaco
// Aruba
// Guinea-Bissau
// North Korea
// Paraguay
// Bermuda
// Republic of the Congo
// United States Virgin Islands
// Antigua and Barbuda
// United Kingdom
// Mozambique
// Martinique
// British Virgin Islands
// Somalia
// Montserrat
// Northern Mariana Islands
// Singapore
// Turks and Caicos Islands
// Nicaragua
// Norfolk Island
// Saint Vincent and the Grenadines
// Peru
// Mexico
// Equatorial Guinea
// Bosnia and Herzegovina
// Bahrain
// Macau
// Barbados
// Uzbekistan
// Réunion
// China
// Malawi
// Zimbabwe
// Spain
// Kenya
// Pakistan
// Christmas Island
// Fiji
// Eswatini
// Jersey
// Taiwan
// Sri Lanka
// Belarus
// United Arab Emirates
// Curaçao
// Costa Rica
// Angola
// Uruguay
// DR Congo
// Kuwait
// Turkey
// Mauritania
// Tuvalu
// Panama
// Egypt
// Saint Lucia
// Azerbaijan
// Rwanda
// Senegal
// India
// Iceland
// Suriname
// Bulgaria
// Micronesia
// Kosovo
// Sierra Leone
// Tunisia
// Cuba
// Trinidad and Tobago
// Comoros
// Nauru
// Saint Helena, Ascension and Tristan da Cunha
// Romania
// Marshall Islands
// Nepal
// Ecuador
// Gabon
// Saudi Arabia
// Dominican Republic
// Saint Pierre and Miquelon
// Faroe Islands
// Kiribati
// Vanuatu
// Hungary
// South Georgia
// Yemen
// French Guiana
// Seychelles
// American Samoa
// Cyprus
// Libya
// Israel
// Vietnam
// Slovenia
// Iran
// Namibia
// Greece
// Lebanon
// Malaysia
// Mongolia
// Åland Islands
// Georgia
// Tajikistan
// Albania
// Dominica
// Turkmenistan
// Colombia
// Heard Island and McDonald Islands
// Venezuela
// Guinea
// South Sudan
// Ukraine
// Slovakia
// Italy
// Falkland Islands
// Guadeloupe
// Honduras
// Montenegro
// Estonia
// Brazil
// Mauritius
// Thailand
// Bolivia
// Sweden
// Guernsey
// Zambia
// Eritrea
// Kazakhstan
// Morocco
// Jordan
// Myanmar
// San Marino
// Palau
// Mayotte
// United States Minor Outlying Islands
// Czechia
// Jamaica
// Kyrgyzstan
// Sudan
// São Tomé and Príncipe
// Gibraltar
// Niger
// Caribbean Netherlands
// Australia
// Luxembourg
// Sint Maarten
// Lesotho
// Poland
// Guam
// Japan
// Liberia
// Cape Verde
// Isle of Man
// Burundi
// Papua New Guinea
// Uganda
// Afghanistan
// Wallis and Futuna
// Central African Republic
// Vatican City
// France
// United States
// Timor-Leste
// Botswana
// Austria
// Belgium
// Greenland
// Portugal
// Laos
// Guatemala
// Liechtenstein
// Solomon Islands
// Switzerland
// Palestine
// Ireland
// Saint Martin
// Syria
// Bangladesh
// Djibouti
// Ghana
// Denmark
// Oman
// Bouvet Island
// Bahamas
// Algeria
// Haiti
// Ivory Coast
// El Salvador
// Netherlands
// Philippines
// Grenada
// Norway
// Cook Islands
// Andorra
// Cocos (Keeling) Islands
// Mali
// Tokelau
// Tonga
// Benin
// Togo
// Madagascar
// Anguilla
// Canada
// Armenia
// British Indian Ocean Territory
// Nigeria
// Belize
// Saint Barthélemy
// Lithuania
// New Caledonia
// Russia
// Cayman Islands
// Moldova
// Croatia
// Serbia
// Malta
// French Polynesia
// Latvia
// Chile
// Finland
// Germany
// New Zealand
// Antarctica
// Indonesia
// Maldives
// Pitcairn Islands
// Cameroon
// Western Sahara
// Brunei
// Guyana
// Tanzania
// Chad
// French Southern and Antarctic Lands
// Cambodia
// Qatar
// Argentina
// Iraq
// Bhutan
// Niue
// South Korea
// Hong Kong
// North Macedonia
// Burkina Faso
// Puerto Rico
// Ethiopia

