let name = 'kiruba' ;
console.log(name);

let a = 145;
let b = 'name'
let c = undefined;
let d = null;
let isvalue = true;


let value = 25;
value = 26
console.log(value);

const op =27;
 console.log('value:'+op);

 let person = {
     name:'kiruba',
     age: 27
 };

//dot notation
person.name = 'loki';
//bracket notation
person['age']= 28;
let selector = 'name';
person[selector]= 'dante';

 console.log(person);
 console.log('name:'+person.name)

//arrays
let colors = ['red','green'];
colors[2]=3;
console.log('color:'+colors[1]);
console.log('length:'+colors.length);
console.log(colors);

//performing task
function getName(name,lastname)
{
    // console.log('inside function');
    console.log('hello '+name +' ' +lastname);
}
getName('susan','test');

//calculating
function square (number)
{
return number*number;
}
let squareValue= square(5);
// console.log(squareValue);
console.log(square(8));

function  clickevent()
{
    document.getElementById('content').innerHTML='now or never';
}

function changecolor()
{
    document.getElementById('head').style.color= 'green';
}