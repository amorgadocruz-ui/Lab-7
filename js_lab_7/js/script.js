function init(){
//add your javascrip between these two lines of code
 
//Select the elements form the HTML
const enterybutton = document.querySelector('#entrybutton');
const entryinput = document.querySelector('#entryinput');
const textoutput = document.querySelector('#textoutput');

//Add a click event listener to the "Alert ME"
enterybutton.addEventListener('click', function() {
    //Get the current text typed into the input field
    const userInput = entryinput.value;
    //1. Show the Alert box with the name, a colon, and the inout text
    alert("Debarlaben: " + userInput); 
    
    //2. Change the text in the h2 below the buttonto match the input text
    textoutput.textContent = userInput;
});

}

window.addEventListener('load', init);
