let loginName=document.getElementById("loginName");
loginName.innerText=localStorage.getItem("name");


let email = document.getElementById("inlineFormInputGroup");
let msg = document.getElementById("textArea");
let  btn=document.getElementById("formBtn");
let empty=false;
if (email.value == " " && msg.value == " ") {
    empty=true;
    
}
btn.onclick=function(){
    if(empty){
       alert("ERROR:The inputs are empty!!");
    }
}



