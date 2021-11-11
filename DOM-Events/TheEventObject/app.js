document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
})
/*
const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    console.log(e.key);
    console.log(e.code); 
}) */
    /* solutions - 
    input: a
    key: a
    code: KeyA  -->  literal location on keyboard

    input: *press space*
    key: 
    code: Space

    etc... 
    "code" can be useful 
    with games that utilize wasd
    */
/*
input.addEventListener('keyup', function() {
    console.log('KEYUP');
})
*/

// I LOVE SWITCH STATEMENTS 
window.addEventListener('keydown', function(e) {
    switch(e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED!");
    }
})
// every key on the keyboard is ignored
// except for arrow keys!