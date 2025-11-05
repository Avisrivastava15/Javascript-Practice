const password=document.querySelector("#password");
const strength=document.querySelector("#strength");
const message=document.querySelector("#message");
const viewButton=document.querySelector("button");
const image=document.querySelector("#image");

password.addEventListener("input",function(){
    const passwordValue=password.value;
    const passwordLength=passwordValue.length;

    let strengthValue='';

    if (passwordLength===0) {
        strengthValue='';
    }
    else if (passwordLength<6){
        strengthValue='Weak';
        strength.style.color="red";
    }
    else if (passwordLength<10){
        strengthValue='Medium';
        strength.style.color="yellow";
    }
    else{
        strengthValue='Strong';
        strength.style.color="green";
    }

    strength.textContent=strengthValue;
    message.style.display="block";

});

viewButton.addEventListener("click",function(){
    const passwordType=password.getAttribute('type');

    if (passwordType==='password'){
        password.setAttribute('type','text');
        image.setAttribute('src','./images/crossed eye.png');
        
    }
    else{
        password.setAttribute('type','password')
        image.setAttribute('src','./images/eye.png');
    }
});