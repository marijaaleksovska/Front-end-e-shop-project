let loginName=document.getElementById("loginName");
loginName.innerText=localStorage.getItem("name");

function addToCard() {
    for (i = 0; i < sessionStorage.length; i++) {
        x = sessionStorage.key(i);
        console.log(x.slice(0, 7));
        if (x.slice(0, 7) == "cardRow") {
            text1 = sessionStorage.getItem(x);
            obj1 = JSON.parse(text1);
            let tbody = document.getElementById("tbody");
            tbody.style.textAlign = "center";
            let row = document.createElement("tr");
            let nameTd = document.createElement("td");
            nameTd.style.display = "flex";
            nameTd.style.justifyContent = "space-around";
            nameTd.style.flexDirection = "row";
            
            let div1 = document.createElement("div");
            div1.style.border = "none";
            let img = document.createElement("img");
            img.src = obj1.img;
            img.style.width = "60px";
            img.style.height = "80px";
            div1.appendChild(img);
            let div2 = document.createElement("div");
            div2.innerText = obj1.name;
            div2.style.border = "none";
            div2.id="nameP";
            nameTd.appendChild(div1);
            nameTd.appendChild(div2);
            let priceTd = document.createElement("td");
            priceTd.innerText = obj1.price;
            let quantityTd = document.createElement("td");
            quantityTd.innerText = obj1.quantity;
            quantityTd.ondblclick=function(e){
                let value=e.target.innerText;
                e.target.innerText="";
                let input=document.createElement("input");
                input.type="number";
                input.min="1";
                input.value=value;
                input.style.width="80px";
                e.target.appendChild(input);
                input.onkeypress=function(e){
                    if(e.keyCode==13){
                        let v=input.value;
                        e.target.outerHTML="";
                        quantityTd.innerText=v;
                        for (let i = 0; i < sessionStorage.length; i++) {
                            let x = sessionStorage.key(i);
                            let product=JSON.parse(sessionStorage.getItem(x));
                            console.log(product.name);
                            if(product.name==div2.innerText){
                                sessionStorage.setItem(x,JSON.stringify({"img":img.src,"name":div2.innerText,"price":priceTd.innerText,"quantity":quantityTd.innerText}));
                            }
                            
                          }
                        
                    }
                }
                

            }
            let totalTd = document.createElement("td");
            let p = obj1.price.slice(1, obj1.price.length);
            let n1 = parseFloat(p);
            let n2 = parseInt(quantityTd.innerText);
            totalTd.innerText = "$" + (n1 * n2);
            let close=document.createElement("td");
            let closeImg=document.createElement("img");
            closeImg.src="icon-close2.png";
            close.onclick=function(e){
                console.log(e.target.parentNode.parentNode.querySelector("#nameP").innerText);
                let text=e.target.parentNode.parentNode.querySelector("#nameP").innerText;
                e.target.parentNode.parentNode.outerHTML=" ";
                for (let i = 0; i < sessionStorage.length; i++) {
                    let x = sessionStorage.key(i);
                    let product=JSON.parse(sessionStorage.getItem(x));
                    console.log(product.name);
                    if(product.name==text){
                        sessionStorage.removeItem(x);
                    }
                    
                  }

            }

            close.appendChild(closeImg);
            row.appendChild(nameTd);
            row.appendChild(priceTd);
            row.appendChild(quantityTd);
            row.appendChild(totalTd);
            row.appendChild(close);
            tbody.appendChild(row);
        }
    }
}


addToCard();
function totalPrice() {
    let subtotal = document.getElementById("subtotal-prize");
    let total = document.getElementById("total-prize");
    let tbody = document.getElementById("tbody");
    let row = tbody.querySelectorAll("tr");
    let sum = 0;
    for (let n = 0; n < row.length; n++) {
        let td = row[n].querySelectorAll("td");
        let p = td[3].innerText;
        let num = parseFloat(p.slice(1, p.length));
        sum += num;
    }
    console.log(sum);
    subtotal.innerText = "$" + sum;
    total.innerText = "$" + sum;
}
totalPrice();

let updateTable=document.getElementById("updateBtn");
updateTable.onclick=function(e){
    console.log(e.target.parentNode.parentNode.parentNode.parentNode);
    let table=e.target.parentNode.parentNode.parentNode.parentNode;
    let tbody=table.querySelector("#tbody");
    console.log(tbody);
    let rows=tbody.querySelectorAll("tr");
    console.log(rows);
    for(let i=0;i<rows.length;i++){
        let tds=rows[i].querySelectorAll("td");
        console.log(tds);
        let p=tds[1].innerText;
        let num1=parseFloat(p.slice(1,p.length));
        let q=tds[2].innerText;
        let num2=parseInt(q);
        tds[3].innerText=" ";
        tds[3].innerText = "$" + (num1* num2);   

    }
}


let updateT=document.getElementById("updateTotal");
updateT.onclick=function(e){
    console.log(e.target.parentNode.parentNode.parentNode.parentNode);
    let divParent=e.target.parentNode.parentNode.parentNode.parentNode;
    let tbody=divParent.querySelector("table").querySelector("tbody");
    console.log(tbody);
    let row = tbody.querySelectorAll("tr");
    let sum = 0;

    for (let n = 0; n < row.length; n++) {
        let td = row[n].querySelectorAll("td");
        let p = td[3].innerText;
        let num = parseFloat(p.slice(1, p.length));
        console.log(num);
        sum += num;
    }
    console.log(sum);
    let div=e.target.parentNode.parentNode.parentNode;
    let st=div.querySelector("#subtotal-prize");
    console.log(st);
    st.innerText="";
    st.innerText="$"+sum;
    let t=div.querySelector("#total-prize");
    console.log(t);
    t.innerText="";
    t.innerText="$"+sum;
    

}


