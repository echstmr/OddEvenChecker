const displayTxt = document.getElementById('displayTxt');
const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');

const processInput = () => {

let inputUser = userInput.value;

if (userInput.value.trim() === "" || isNaN(inputUser)) {  
        
        displayTxt.textContent = `ENTER ONLY NUMBER! 😒👍`;
        displayTxt.style.color = 'red';


    }
    else if(inputUser % 2 !== 0)
        {
        
        displayTxt.textContent =`${inputUser} IS ODD NUMBER 😍👌`;
        displayTxt.style.color = 'green';

    }else if(inputUser % 2 == 0) 
        {

        displayTxt.textContent =`${inputUser} IS EVEN NUMBER 😁🤞`;
        displayTxt.style.color = 'green';


        }
   
};

submitBtn.addEventListener('click', processInput)

userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      processInput();
    }
  });



