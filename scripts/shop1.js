let loginName=document.getElementById("loginName");
loginName.innerText=localStorage.getItem("name");

function loadMore() {
    let loadBtn = document.getElementById("btnLoad");
    loadBtn.onclick = function () {
        let LRow = document.getElementById("loadRow");
        let LDiv = document.getElementById("Load-Div");
        if (LDiv.style.display == "none") {
            LDiv.style.display = "block";
            LRow.style.display = "none";
        }
    };
}
loadMore();

function productModal() {
    let divImg = document.querySelectorAll(".card-img-top");
    console.log(divImg);
    for (let i = 0; i < divImg.length; i++) {
        divImg[i].onclick = function (e) {
            console.log("hi");
            console.log(e.target.src);
            console.log(e.target.parentNode.parentNode.parentNode.querySelectorAll("h6"));
            let source = e.target.src;
            let div = document.getElementById("imageModal");
            console.log(div);
            div.src = source;
            div.style.width = "400px";
            let h = e.target.parentNode.parentNode.parentNode.querySelectorAll("h6");
            if (h.length == 3) {
                let name = document.getElementById("productName");
                name.innerText = h[0].innerText;
                let price = document.getElementById("productPrize");
                price.innerText = h[2].innerText;
                price.style.color = "red";
            }
            else {
                let name = document.getElementById("productName");
                name.innerText = h[0].innerText;
                let price = document.getElementById("productPrize");
                price.innerText = h[1].innerText;
            }
            $('#productModal').modal("show");
        };
    }
}

productModal();
function refreshInputs() {
    let size = document.getElementById("exampleFormControlSelect1");
    size.value = "Choose an option";
    let color = document.getElementById("exampleFormControlSelect2");
    color.value = "Choose an option";
    
    let quatity=document.getElementById("quantity").value;
    quatity.value = "1";
}
let btnAdd=document.getElementById("addToCard");

btnAdd.onclick=function(e){
    console.log(e.target.parentNode.parentNode);
    let name = document.getElementById("productName").innerText;
    console.log(name);

    let price = document.getElementById("productPrize").innerText;
    console.log(price);

    let quatity=document.getElementById("quantity").value;
    console.log(quatity);



    let imgSrc=document.getElementById("imageModal").src;
    console.log(imgSrc);

    obJson={"img":imgSrc,"name":name, "price":price,"quantity":quatity};
    window.sessionStorage.setItem("cardRow"+(sessionStorage.length+1),JSON.stringify(obJson));
    
    $('#productModal').modal("hide");
    refreshInputs();



    
}


function addCardInWishList(e) {
    console.log("clicked");
    e.target.src = "icon-heart-02.png";
    let card = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    console.log(card);
    let row = document.getElementById("mRow");
    let div = document.createElement("div");
    div.className = "col-sm-6 col-md-4 col-lg-3 p-b-35";
    let imgs = card.querySelectorAll("img");
    console.log(imgs);
    let h = card.querySelectorAll("h6");
    console.log(h);
    let span = card.querySelectorAll("span");
    console.log(span);
    let divCard = document.createElement("div");
    divCard.className = "card";
    divCard.style.width = "100%";
    let divImg = document.createElement("div");
    divImg.className = "hover01";
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    image.src = imgs[0].src;
    image.className = "card-img-top";
    figure.appendChild(image);
    divImg.appendChild(figure);
    divCard.appendChild(divImg);
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    let div1 = document.createElement("div");
    div1.style.display = "flex";
    div1.style.justifyContent = "space-around";
    div1.style.flexDirection = "column";
    let div11 = document.createElement("div");
    div11.style.display = "flex";
    div11.style.justifyContent = "space-between";
    div11.style.flexDirection = "row";
    let divChild1 = document.createElement("div");
    let h1 = document.createElement("h6");
    h1.innerText = h[0].innerText;
    h1.style.color = "rgb(104, 104, 104)";
    divChild1.appendChild(h1);
    let divChild2 = document.createElement("div");
    let imgHeart = document.createElement("img");
    imgHeart.src = imgs[1].src;
    imgHeart.className = "heart";
    imgHeart.onclick = function (e) {
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.outerHTML = " ";
    };
    divChild2.appendChild(imgHeart);
    div11.appendChild(divChild1);
    div11.appendChild(divChild2);
    let div12 = document.createElement("div");
    div12.style.display = "flex";
    div12.style.flexDirection = "row";
    let h2 = document.createElement("h6");
    h2.innerText = h[1].innerText;
    div12.appendChild(h2);
    if (h[2]) {
        let h3 = document.createElement("h6");
        h3.innerText = h[2].innerText;
        h3.style.color = "red";
        h3.style.textDecoration = "through";
        div12.appendChild(h3);
    }
    if (span[0]) {
        let s = document.createElement("span");
        s.innerText = span[0].innerText;
        s.style.color = "red";
        s.style.fontWeight = "bold";
        s.style.marginLeft = "5px";
        div12.appendChild(s);
    }
    div1.appendChild(div11);
    div1.appendChild(div12);
    cardBody.appendChild(div1);
    divCard.appendChild(cardBody);
    div.appendChild(divCard);
    row.appendChild(div);
}

let wl=document.getElementById("wishList");
wl.onclick=function(){
    $('#exampleModalCenter1').modal("show");
}
let img = document.querySelectorAll(".heart");
    console.log(img);
    for (let i = 0; i < img.length; i++) {
        
        img[i].onclick = function(e) {
            console.log(e.target.src);
            if(e.target.src=="file:///C:/Users/ACER/Desktop/cozastore-master/images/icons/icon-heart-01.png"){
                addCardInWishList(e);



            }else{
                e.target.src="file:///C:/Users/ACER/Desktop/cozastore-master/images/icons/icon-heart-01.png";


            }

        };
    }

