// jaise hi mai buttons pr click karun sari button ka 
// bgcolor yellow hojana chiye
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.target.style.backgroundColor="yellow";
        e.target.style.color="black";
    })
})