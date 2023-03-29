const clickDark = document.querySelector("#click-dark")
const imgFeed1 = document.querySelector("#img-feed1")
const imgFeed3 = document.querySelector("#img-feed3")

clickDark.onclick = function(){
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        imgFeed1.src = "./files/woman-orbit-dark.png"
        imgFeed3.src = "./files/girl-dark.png"
    } else {
        imgFeed1.src = "./files/woman-orbit.png"
        imgFeed3.src = "./files/girl.png"
    }
}



