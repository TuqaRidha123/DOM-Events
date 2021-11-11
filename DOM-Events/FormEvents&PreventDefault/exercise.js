// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const firstInput = document.querySelector("#product");
const secondInput = document.querySelector("#qty");
const list = document.querySelector("#list");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const item = firstInput.value;
    const quantity = secondInput.value;
    const newLI = document.createElement("LI");
    newLI.innerText = quantity + " " + item;
    console.log(newLI);
    list.appendChild(newLI);
    firstInput.value = "";
    secondInput.value = "";
})