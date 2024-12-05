const button = document.getElementById("changetext");
const text = document.getElementById("text");

button.addEventListener("click", function(){
    text.textContent = "Oh My God, my color has changed.";
    text.style.color = "blue";
});