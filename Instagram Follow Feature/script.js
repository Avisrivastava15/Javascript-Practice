const btn1=document.querySelector("#btn1");
const rel=document.querySelector("h5");
const note=document.querySelector("#note");
const card=document.querySelector("#card");
const unfollow=document.querySelector("#unfollow");
const cancel=document.querySelector("#cancel");

let flag=false;
btn1.addEventListener('click',function(){
    if (!flag){
        rel.textContent="Friend";
        btn1.innerHTML="Following";
        rel.style.color="Green"
        flag=true;
    }
    else{
        card.style.filter = "blur(3px)";
        note.classList.add("show");
        document.getElementById("overlay").style.display = "block"; // enable overlay
    }
});

unfollow.addEventListener('click',function(){
    btn1.innerHTML="Follow";
    rel.textContent="Stranger";
    rel.style.color="red";
    note.classList.remove("show");
    card.style.filter = "none";
    flag=false;
    document.getElementById("overlay").style.display = "none"; // enable overlay

});

cancel.addEventListener('click',function(){
    note.classList.remove("show");
    card.style.filter = "none";
    document.getElementById("overlay").style.display = "none"; // enable overlay
});


