let zero = document.getElementById('zero')
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')

function show() {
    zero.innerHTML = 'ABOUT ME'
    one.innerHTML = 'My name is Odunola'
    two.innerHTML = 'I am a student of Osun State University'
    three.innerHTML = 'I am a student of Mathematical Sciences department'
    four.innerHTML = 'I am in 200 level'
    five.innerHTML = 'I attended Bisola College of Arts and Sciences'
    six.innerHTML = 'I graduated in 2023'
    seven.innerHTML = 'My hobbies are reading,eating and sleeping'
}





let a = 5
let b = 5
console.log(a == b)

let c = 5
let d = 7
console.log(a * b)

let boy = 'Jide'
let girl = 'bola'
console.log(boy + girl)
console.log(a != b)

if(a && b == 5) {
    console.log('Correct')
}else {
    console.log('Wrong')
}

let grade=45
if(grade >= 50) {
    console.log('Pass')
}else {
    console.log('Fail')
}

grade < 20 ? console.log('Pass'):console.log('Fail')



let mark = 20
if(mark >= 70) {
    console.log('A')
}else if(mark >= 60){
    console.log('B')
}else if(mark >=50){
    console.log('C')
}else if(mark >=40){
    console.log('D')
}else {
    console.log('F')
}


let result = document.getElementById('result')
let age = document.getElementById('age')

function checkEligibility(){
    if(age.value > 18){
        result.innerHTML = 'You are eligible to vote.'
    }else{
        result.innerHTML = 'You are not eligible to vote'
    }
}

