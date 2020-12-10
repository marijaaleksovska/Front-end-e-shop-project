let login=document.getElementById("login");
// let costumers=[];
// let Costumer=function(name,surname,email,password){
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.password=password;
//     // this.login=0;
// }
function refreshCAInputs(){
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let mail = document.getElementById("email");
    let pass = document.getElementById("pass");
    let pass1 = document.getElementById("pass1");
    name.value="";
    surname.value="";
    mail.value="";
    pass.value="";
    pass1.value="";


}
function refreshLInputs(){
    let emailLogin = document.getElementById("exampleInputEmail1");
    let passLogin = document.getElementById("exampleInputPassword1");
    emailLogin.value="";
    passLogin.value="";
}
function createAccount() {
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let mail = document.getElementById("email");
    let pass = document.getElementById("pass");
    let pass1 = document.getElementById("pass1");
    let x;
    
    let btnSC = document.getElementById("saveC");
    btnSC.onclick = function () {
        
        localStorage.removeItem("name");
        let newC = true;
        // for (let i = 0; i < costumers.length; i++) {
        //     if (costumers[i].email == mail.value) {
        //         alert("This email is already used, use another or login");
        //         newC = false;
        //     }
        // }
        for (i = 0; i < localStorage.length; i++) {
            x = localStorage.key(i);
            text = localStorage.getItem(x);
            obj = JSON.parse(text);
            if(obj.email==mail.value){
                alert("This email is already used, use another or login");
                newC = false;
                let mail = document.getElementById("email");
                mail.value="";

            }
          }
        if (newC) {
            if (pass.value == pass1.value) {
                // let costumer = new Costumer(name.value, surname.value, mail.value, pass.value);
                // costumers.push(costumer);
                obJson={"name":name.value,"surname":surname.value, "email":mail.value,"pass":pass.value};
                window.localStorage.setItem(localStorage.length+1,JSON.stringify(obJson));
                // y++;
                
                alert("Succsesfull added new costumer,now you can login");
                refreshCAInputs();
                $('#exampleModalCenter').modal('hide');
            }
            else {
                alert("the passwords are not maching");
                pass.value="";
                pass1.value="";
            }
        }
    };
    // console.log(costumers);
}
function loginCostumer() {
    
    let emailLogin = document.getElementById("exampleInputEmail1");
    let passLogin = document.getElementById("exampleInputPassword1");
   
    let btnLogin = document.getElementById("loginBtn");
    let login = false;
    let name;
    let surname;
    
    btnLogin.onclick = function () {
        localStorage.removeItem("name");
        // console.log(costumers);
        // for (let i = 0; i < costumers.length; i++) {
        //     for (i = 0; i < window.localStorage.length; i++) {
        //         x = window.localStorage.key(i);
        //         console.log(x);
        //         if(x==emailLogin.value){
        //             if(localStorage.getItem(x)==passLogin.value){
        //                 login=true;
        //                 name = costumers[i].name;
        //                 surname = costumers[i].surname;
        //                 console.log(name);
        //                 console.log(surname);
                        
        //             }
        //         }
        //         }
            
        // }
        for (i = 0; i < localStorage.length; i++) {
            x1= localStorage.key(i);
            text1 = localStorage.getItem(x1);
            obj1 = JSON.parse(text1);
            if(obj1.email==emailLogin.value){
                if(obj1.pass==passLogin.value){
                    login=true;
                    name = obj1.name;
                    surname = obj1.surname;
                    console.log(name);
                    console.log(surname);

                }

            }
          }
        
        if (login == false) {
            alert("You are not register,create account first!");
            emailLogin.value = "";
            passLogin.value = "";
            console.log("h1");
        }
        else {
            // let costumer = new Costumer(name, surname, emailLogin.value, passLogin.value);
            // loginCostumers.push(costumer);
            console.log("h2");
            // console.log(loginCostumers);
            refreshLInputs();
            localStorage.setItem("name", name);
            window.open("index1.html", "_self");
            
        }
    };
}


createAccount();
loginCostumer();
