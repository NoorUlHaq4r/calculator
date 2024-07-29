const display = document.getElementById('display');

 function appendToDisplay(input){
 display.value += input;
 }
 function clearValue(){
 display.value = "";
 }
// function clear() {
//     document.getElementById('display').value = "";
//   }
 function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
 
 }