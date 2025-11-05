const inputSlider= document.querySelector("#inputSlider");
const sliderValue= document.querySelector("#sliderValue");
const passBox= document.querySelector("#passBox");
const lowercaseE1= document.querySelector("#lowercase");
const uppercaseE1= document.querySelector("#uppercase");
const numbersE1= document.querySelector("#numbers");
const symbolsE1= document.querySelector("#symbols");
const generateBtn= document.querySelector("#getBtn");
const copyIcon= document.querySelector("#copyIcon");

const lowercaseLetters="abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const symbols="!@#$%^&*()_+-={}[]:;'<,>.'?/\\";

sliderValue.textContent=inputSlider.value;

inputSlider.addEventListener("input",()=>{
    sliderValue.textContent=inputSlider.value;
});

generateBtn.addEventListener("click",()=>{
    passBox.value=generatePassword();
});

function generatePassword(){
    const length= inputSlider.value;
    let characters="";
    let password="";

    characters+=lowercaseE1.checked?lowercaseLetters:"";
    characters+=uppercaseE1.checked?uppercaseLetters:"";
    characters+=numbersE1.checked?numbers:"";
    characters+=symbolsE1.checked?symbols:"";

    if (characters === "") {
        alert("Please select at least one character type!");
        return "";
    }

    for (let i=0;i<length;i++){
        password+=characters.charAt(Math.floor(Math.random()*characters.length));
        console.log(password);
    }

    return password;
}

copyIcon.addEventListener("click",()=>{
    if (passBox.value!="" || passBox.value.length>=10){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innertext="check";
        alert('Password copied');

        setTimeout(()=>{copyIcon.innerHTML="content_copy"},3000);
    }
});