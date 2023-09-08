const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");


const calculateSum = (date) => {
    let sum = 0;
  date = date.replaceAll("-", "");
  for (let digit of date) {
    sum = sum + Number(digit);
  }
  return sum;
};



const checkBirthDateIsLucky = (sum,numCheck) => {

  if (sum % numCheck === 0) {
    outputBox.innerText = "Your birthday is lucky 🚀";
  } else {
    outputBox.innerText = "Your birthday is not lucky 🤒";
  }
};


checkNumberButton.addEventListener('click', ()=>{
const date = dateOfBirth.value;
const numCheck=luckyNumber.value;
 
  if (date && numCheck) {
     const sum = calculateSum(date);
  checkBirthDateIsLucky(sum,numCheck);
    
  } else {
    outputBox.innerText = "Please enter both the fields 😡";
  }
});