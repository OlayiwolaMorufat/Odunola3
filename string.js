


let statement = "Nurse"
let word = `Ade's mother is a ${statement}`
console.log(word)


let title = "    the God's are not to be blamed.  "
console.log(title.slice(0, 9));
console.log(title.slice(-1));
console.log(title.charAt(2));
console.log(title.length);
console.log(title.replace('The', 'Big'));
console.log(title.trim());
console.log(title.toUpperCase());
console.log(title.substring(3, 8));
console.log(title.concat('Read'));


function generate() {
    console.log(Math.floor(Math.random() * 10));
    console.log(Date());
    console.log(Math.trunc(25.6));
    console.log(Math.ceil(25.6));
    console.log(Math.round(25.6));
    console.log(Math.round(25.4));
    console.log(Math.abs(-19));
    console.log(Math.abs(19));
    console.log(Math.max(2, 4, 5, 6, 6.2));
    console.log((Math.min(2, 1.9, 4, 6.2)));
    
    
    
    
    

    
    
    // Math.random()
}
generate()
let today = new Date().getHours()
console.log(new Date().getHours());

// let clas = document.getElementById('clas')
function generateRandomNumber() {
//    console.log(Math.random() * 100);
 let randomNumber = Math.floor(Math.random() * 100);
 let randomNumbe = Math.floor(Math.random() * 100);
 
 document.getElementById('numberDisplay').innerText = `${randomNumbe} , ${randomNumber}`
   
}


let figure = 6.7
console.log(typeof(figure));

let num = '21'
console.log(typeof(num));
let converted = (Number(num))
console.log(typeof(converted));



let demo = document.getElementById('demo')
let result = document.getElementById('result')
function checkAge() {
    if(Number(demo.value) === 18){
        result.innerHTML = 'You are eligible to vote'
} else{
    result.innerHTML     = 'You are not eligible to vote'
}
}


let names = ['Ade', 'Grace', 'Titi', 'Tola']
console.log(names[1]);

let student = {name: 'Ade', school: 'OIC', age: 12, isPresent:true}
console.log(student.school);


let students = [
    {name: 'Ade', school: 'OIC', age: 14, isPresent:true},
    {name: 'Inioluwa', school: 'OIC', age: 12, isPresent:false},
    {name: 'Morufat', school: 'OIC', age: 13, isPresent:true},
    {name: 'Kehinde', school: 'OIC', age: 16, isPresent:true}
];
console.log(students[2].age);








const assignment =  [
      {
        "id": 1,
        "firstName": "Emily",
        "lastName": "Johnson",
        "maidenName": "Smith",
        "age": 28,
        "gender": "female",
        "email": "emily.johnson@x.dummyjson.com",
        "phone": "+81 965-431-3024",
        "username": "emilys",
        "password": "emilyspass",
        "birthDate": "1996-5-30",
        "image": "...",
        "bloodGroup": "O-",
        "height": 193.24,
        "weight": 63.16,
        "eyeColor": "Green",
        "hair": {
          "color": "Brown",
          "type": "Curly"
        },
        "ip": "42.48.100.32",
        "address": {
          "address": "626 Main Street",
          "city": "Phoenix",
          "state": "Mississippi",
          "stateCode": "MS",
          "postalCode": "29112",
          "coordinates": {
            "lat": -77.16213,
            "lng": -92.084824
          },
          "country": "United States"
        },
        "macAddress": "47:fa:41:18:ec:eb",
        "university": "University of Wisconsin--Madison",
        "bank": {
          "cardExpire": "03/26",
          "cardNumber": "9289760655481815",
          "cardType": "Elo",
          "currency": "CNY",
          "iban": "YPUXISOBI7TTHPK2BR3HAIXL"
        },
        "company": {
          "department": "Engineering",
          "name": "Dooley, Kozey and Cronin",
          "title": "Sales Manager",
          "address": {
            "address": "263 Tenth Street",
            "city": "San Francisco",
            "state": "Wisconsin",
            "stateCode": "WI",
            "postalCode": "37657",
            "coordinates": {
              "lat": 71.814525,
              "lng": -161.150263
            },
            "country": "United States"
          }
        },
        "ein": "977-175",
        "ssn": "900-590-289",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
        "crypto": {
          "coin": "Bitcoin",
          "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
          "network": "Ethereum (ERC20)"
        },
        "role": "admin" // or "moderator", or "user"
    },

    ];

    // console.log(icons[0].firstName);
    // console.log(icons[0].lastName);
    
    // let emi = document.getElementById('emi')
    function gene () {
        let eee = assignment[0].firstName
        let fff = assignment[0].lastName
        let ggg = assignment[0].age
        let hhh = assignment[0].gender
        let iii = assignment[0].university
        let jjj = assignment[0].hair.color
        let kkk = assignment[0].company.address.address
        let lll= assignment[0].company.department
        let mmm = assignment[0].bank.currency
        let nnn = assignment[0].bank.cardType

        document.getElementById('emi').innerText = `${eee}, ${fff}, ${ggg}, ${hhh}, ${iii}, ${jjj}, ${kkk}, ${lll}, ${mmm}, ${nnn}`
}
assignment.map((value) => {
  console.log(value.firstName);
  
})




    const pupils = ["Grace", "Blessing", "Success", "Happiness", "Ade"];
    // console.log(pupils.pop());
    // console.log(pupils.push('Bola'));
    // console.log(pupils.shift());
    // console.log(pupils.unshift('Jide'));
    // console.log(pupils);
    // console.log(pupils.concat('Today is wednesday.'));
    // console.log(pupils.slice(2,4));
    // console.log(pupils.join(','));
    // console.log(pupils.length);
    // console.log(pupils.includes('Ade'));
    
    pupils.map(item =>{
      console.log(item);
      
    });
  

  let nume = [20, 56, 67, 40]
  let sum = nume.reduce((total, value) =>{
    return total + value
    
  })
  console.log(sum);

  const productBought = []
  productBought.push(50000)
  productBought.push(3000);
  console.log(productBought);
  let totalPrice = productBought.reduce((total, value) =>{
    return total + value
})
 console.log(totalPrice);

 let numer = [20,56,67,40]
 let ans = numer.some(value =>{
  return value < 18
 })
 console.log(ans);







// for loop
 const namesss  = ['Ade', 'Titi', 'Tola', 'Grace']
for(let i = 0; i<namesss.length; i++){
  console.log(namesss[i]);
  
}

const namess  = [
  'Ade', 'Titi', 'Tola', 'Grace']
  namess.map((item)=>{
    console.log('Namess of student: ',item);
    
  })

 for (let b = 0; b<100; b++){
  if(b % 2 == 0){
    console.log(b, 'is even number');
  }else {
    console.log(b, 'is odd number');
    
  }
 } 


// for(let f = 1; f <13; f++ ){
//   let c = 2
//   console.log(`${c} x ${f} =` ,f * c);
  
// }



function checkmultiplicationTable(){
  // let c = 2;
  let food ='';
  for(let f = 1; f <13; f++){
    let c = 2;
food += `${c} x ${f} =  ${f * c} <br>`;
}
document.getElementById('table').innerHTML = food;
}


// for of
 let text = ''   
 let resulte = document.getElementById('resulte')
const studentDetail = {namee: 'Ade', school: 'Excel', age: 12, gender: 'Female'}
for (const detail in studentDetail){
  text += studentDetail[detail] + '</br>' 
  resulte.innerHTML = text
  //  console.log(studentDetail[detail]);
    
}
    
// for in 
const arr = ['Grace', 12, true, 'Male']
for (const element of arr) {
  console.log(element);
}
    

// while 
let m = 0
while(m < 10) {
  console.log(m);
  m++
}
    
    // do while 
let balance = 100
let amountSent = 110
do {
 if(amountSent > balance){
  console.log("Insufficient balance");
} else {
 console.log("Transaction successful");
}
balance++
} while (amountSent <= balance);   
    
    
    