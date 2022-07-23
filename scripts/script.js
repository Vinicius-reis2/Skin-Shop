const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img")

let idx = 0;

function carrocel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(carrocel, 3800);

function createCard(arr){
    const ul = document.querySelector(".produtos__skins")
    for(let i = 0; i < arr.length; i++){
        let tagLi = document.createElement("li")
        tagLi.setAttribute("class", "cards")
        tagLi.setAttribute("data-aos", "fade-right")

        let tagImg = document.createElement("img")
        tagImg.src = arr[i].img;

        let tagH4 = document.createElement("h4")
        tagH4.innerHTML = arr[i].tag;

        let tagH3 = document.createElement("h3")
        tagH3.innerHTML = arr[i].nameItem;

        let tagSpan = document.createElement("span")
        tagSpan.innerHTML = "R$ " + arr[i].value;

        let tagButton = document.createElement("button")
        tagButton.innerHTML = "adicionar ao carrinho";

        tagLi.append(tagImg, tagH4, tagH3, tagSpan, tagButton)
        ul.append(tagLi)
    }
}

createCard(data)

