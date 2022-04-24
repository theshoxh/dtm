var elSelect = document.querySelector(".select");
var elInput = document.querySelector(".in-number");
var elButton = document.querySelector(".button");
var elOutput = document.querySelector(".output");
var Refresh = document.querySelector(".refreshBtn");

var universitys = ["Universitetingizni tanlang !!!","Toshkent Axborot Textnologiyalar Universiteti", "Toshkent Moliya Instituti", "Toshkent Milliy Universiteti"];


for (university of universitys) {
  var newOption = document.createElement("option")
  newOption.textContent = university;
  elSelect.appendChild(newOption)
}

elInput.style.fontSize = "24px";
elInput.style.width = "180px";
elInput.style.marginLeft = "100px";
elInput.style.marginTop = "100px";
elSelect.style.fontSize = "24px";
elSelect.style.width = "320px";
elSelect.style.marginLeft = "50px"
elButton.style.fontSize = "24px";
elButton.style.marginLeft = "50px"
Refresh.style.fontSize = "24px";
Refresh.style.marginLeft = "200px"
elOutput.style.display = "block";
elOutput.style.marginTop = "100px";
elOutput.style.fontSize = "50px";
elOutput.style.color = "blue";



elButton.addEventListener("click", function(e){
  e.preventDefault();

  var amount = elInput.value.trim();
  var convertDirectory = elSelect.value;


  if (amount == ""){
    return
  }

  amount = Number(amount);
  if (isNaN(amount)){
    return
  }

  var oneHundredTwentyFour = 124;
  var oneHundredForty = 140;
  var oneHundredFifty = 150;
  var oneHundredSixtyEight = 168;
  var oneHundredSeventy = 170;
  var oneHundredSeventyFive = 175;

  var grand = "Tabriklaymiz !!! Siz o'qishga Grant asosida qabul qilindingiz !!!";
  var contract = "Tabriklaymiz !!! Siz o'qishga Kontrak asosida qabul qilindingiz !!!";
  var nona = "Siz o'qishga kira olmadingiz !!!";
  


  switch (convertDirectory) {
    case "Toshkent Axborot Textnologiyalar Universiteti":
      
      if (amount > oneHundredSixtyEight){
        elOutput.textContent = grand;
        } else
      if(amount > oneHundredTwentyFour) {
        elOutput.textContent = contract;
      } else {
        elOutput.textContent = nona;
      }
      break;

      case "Toshkent Moliya Instituti":
      if (amount > oneHundredSeventy){
        elOutput.textContent = grand;
        } else
      if(amount > oneHundredForty) {
        elOutput.textContent = contract;
      } else {
        elOutput.textContent = nona;
      }
      break;

      case "Toshkent Milliy Universiteti":
      if (amount > oneHundredSeventyFive){
        elOutput.textContent = grand;
        } else
      if(amount > oneHundredFifty) {
        elOutput.textContent = contract;
      } else {
        elOutput.textContent = nona;
      }
      break;
  
    default:
      break;
  }
  
  
})