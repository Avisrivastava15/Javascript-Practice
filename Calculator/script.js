const display= document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
    resizeDisplayFont();
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        if (display.value == 'Error'){
            throw Error;
        }
        display.value=eval(display.value);
        resizeDisplayFont();
    }
    catch(error){
        display.value="Error";
    }
    
}

function resizeDisplayFont() {
    const display = document.getElementById("display");
    const maxFont = 3.5; // rem (your original size)
    const minFont = 1.5; // minimum readable size

    let font = maxFont;
    display.style.fontSize = font + "rem";

    while (display.scrollWidth > display.clientWidth && font > minFont) {
        font -= 0.1;
        display.style.fontSize = font + "rem";
    }
}
