
getPrice = function() {
    var numVal1 = Number(document.getElementById("price").value);
    var numVal2 = Number(document.getElementById("discount").value) / 100;
    var totalValue = numVal1 - (numVal1 * numVal2)
    document.getElementById("total").value = totalValue.toFixed(2);
}


// function calc() {
//     const num  = parseInt(document.getElementById('num').value);
//     let result = 1;
//     if (num < 0){
//         document.getElementById('result').innerHTML = "Factorial is not defined for negative numbers.";
// } else{
//     if (num === 0 || num === 1){
//         document.getElementById('result').innerHTML = `Factorial of ${num} is 1`;
//     }else {
//         for (let i = 2; i <= num; i++){
//             result*=i;
//         }
//         document.getElementById('result').innerHTML = `Factorial of ${num} is ${result}`
//     }
// }
// }


function calc() {
    const num = parseInt(document.getElementById('num').value);
    let result = 1;
    if(isNaN(num) || num < 0) {
        document.getElementById('result').innerHTML = "Invalid input. Please enter a non-negative integer.";
    } else {
        if (num === 0 || num === 1){
        document.getElementById('result').innerHTML = `Factorial of ${num} is 1`;
    } else {
        for (let i = 2; i <= num; i++){
            result*=i;
        }
        document.getElementById('result').innerHTML = `Factorial of ${num} is ${result}`  
    }
}
}







