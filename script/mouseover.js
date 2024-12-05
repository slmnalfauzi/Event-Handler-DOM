const hovertex = document.getElementById("hovertext");

hovertex.addEventListener("mouseover", function (){
    hovertex.style.backgroundColor = "yellow";
    hovertex.textContent = "Mouse is over the button!"
})

hovertex.addEventListener("mouseout", function (){
    hovertex.style.backgroundColor = "white";
    hovertex.textContent = "See you later friend!"
})