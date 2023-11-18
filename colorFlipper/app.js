const colors=["green","red","rgba(133,122,200)","#f15025"];
document.getElementById("btn");
document.querySelector(".color");

btn.addEventListener("click",function () {
    const randomNumber=getRandonNumber();

    document.body.style.backgroundColor=colors[randomNumber];
    colors.textContent=colors[randomNumber];
});

function getRandonNumber() {
    return Math.floor(Math.random() * colors.length);
}
