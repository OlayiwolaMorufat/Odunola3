let result = document.getElementById('result')
let mark = document.getElementById('mark')

function checkGrade() {
    if(mark.value >= 70){
        result.innerHTML = 'A'
    }else if(mark.value >= 60){
        result.innerHTML = 'B'
    }else if(mark.value >= 50){
        result.innerHTML = 'C'
    }else if(mark.value >= 45){
        result.innerHTML = 'D'
    }else if(mark.value >= 40){
        result.innerHTML = 'E'
    }else{
        result.innerHTML = 'F'
    }
}