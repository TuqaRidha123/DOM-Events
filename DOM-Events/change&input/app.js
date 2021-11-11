const input = document.querySelector("input");
const h1 = document.querySelector('h1');
/*
input.addEventListener('change', function(e) {
    console.log("dfkdjfkdkf"); /* only fires
                                when clicking OUTSIDE
                                of the input box */
//})

input.addEventListener('input', function(e) {
    //console.log("INPUT EVENT!"); fires
                               /* immediately when 
                                something gets typed
                                into the input box */
    h1.innerText = input.value; // updates live
})

/*
UDEMY Exercise JS
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function(e) {
    h1.innerText = `Welcome, ${input.value}`;
    if (input.value === "") {
        h1.innerText = 'Enter Your Username';
    }
})
*/