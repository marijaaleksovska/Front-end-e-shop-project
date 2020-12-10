let email = document.getElementById("inlineFormInputGroup");
let msg = document.getElementById("textArea");
let  btn=document.getElementById("formBtn");
console.log(email.value);
console.log(msg.value);
let empty=false;
if (email.value == " " && msg.value == " ") {
    empty=true;
    
}
btn.onclick=function(){
    console.log("hi");
    if(empty){
        alert("ERROR:The inputs are empty!!");
    }
}
