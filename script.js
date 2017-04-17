
var temp=prompt("input a temperature");
var type=prompt("input the letter c or f to convert to Celsius or Fahrenheit");
var tempFah;
var tempCelsius;

function convertTemp(temp, type){
  if ((type === "c") || (type ==="C")){
    tempCelsius=((temp-32)/1.8);
    console.log(tempCelsius + " degrees Celsius");
  } else if((type==="f" ) || (type==="F")){
    tempFah=((temp * 1.8)+32);
    console.log(tempFah + " degrees Fahrenheit");
  }
}
convertTemp(temp,type);
