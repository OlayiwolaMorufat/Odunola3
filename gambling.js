let one = document.getElementById('one')
let onee = document.getElementById('onee')
let two = document.getElementById('two')
let twoo = document.getElementById('twoo')
let but = document.getElementById('but')



// gambling.addEventListener('submit',function(event) {
//     event.preventDefault();
//     const newTask  = one.value;
//     if (newTask === '') {
//         alert('Please enter a task!');
//         return;
//     }
//     one.value = '';
// });

// gambling.addEventListener('submit',function(event) {
//     event.preventDefault();
//     const newTask  = onee.value;
//     if (newTask === '') {
//         alert('Please enter a task!');
//         return;
//     }
//     onee.value = '';
// });


function show() {
    
     let two = Math.floor(Math.random() * 100);
     let twoo = Math.floor(Math.random() * 100);
     
     document.getElementById('numberDisplay').innerText = `${two}, ${twoo}`
     
     if(Number(one.value) == typeof(numberDisplay)){
        result.innerHTML = 'You win'}
 else{
    result.innerHTML     = 'You lose'
}
if(Number(onee.value) == typeof(numberDisplaye)){
    result.innerHTML = 'You win'} 
    else{
result.innerHTML     = 'You lose'
}
}
