const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats")
form.addEventListener("submit", function(e) {
    e.preventDefault(); /*  so that you 
                            dont get a weird error
                            and the page redirects you
                            to the sad file emoticon 
                            error thingie  */
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    console.log(newLI);
    list.append(newLI);
    input.value = "";
});