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

function notLogin() {
    let img = document.querySelectorAll(".heart");
    // console.log(img);
    for (let i = 0; i < img.length; i++) {
        // console.log(img[i]);
        img[i].onclick = function () {
            console.log("hi");
            alert("ERROR:You need to login first");
        };
    }
    let btn=document.getElementById("addToCard");
    btn.onclick=function(){
        console.log("hi");
            alert("ERROR:You need to login first");

    }
}

notLogin();



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

sessionStorage.clear();