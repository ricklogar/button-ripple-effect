const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=>{
//     console.log(event.pageY - btnEl.offsetTop);
//     console.log(event.pageX - btnEl.offsetTop);
    const x = (event.pageX - btnEl.offsetTop);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
})