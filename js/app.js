console.log('Ciao dal file app.js')

let name = 'Yoda'; //string
console.log(name)

let surname = 'Master'; //string
console.log(surname)

let color = 'Green'; //string
console.log(color)

let age = 900; //number
console.log(age)

let password = 'Yoda' + 'Master' + 'Green' + age /*+ '900'*/; //string
console.log(password)

let userPassword = prompt('Enter Password'); //string //null
console.log('Password' + ' ' + userPassword + ' ' + 'correct');

let randomInteger = Math.floor(Math.random() * 101); //number
console.log(randomInteger)