const inputfield = document.getElementById("inputfield")
const displaytext = document.getElementById("displaytext")

inputfield.addEventListener("keydown", function(event) {
    displaytext.textContent = event.key;
})