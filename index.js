
/*
JAVASCRIPT ERROR FORM
THERE ARE TWO ERRORS ON THIS FILE
FIND THEM KARIM
*/

/*
The const variable system is similar to the HTML ID system.
See the html file for more info
*/

//1A
//This challenge was meant to demonstrate if-else statements. However I needed to use a function
//inorder for output of user's input to be displayed on the html file
const u1a = document.getElementById('U1A');
const b1a = document.getElementById('B1A');
const r1a = document.getElementById('R1A');
b1a.onclick = function evenOdd(){
    let num1A = u1a.value;
    num1A = Number(num1A);
    if (num1A % 2 == 0){
        r1a.textContent = 'Number is even.';
    }
    else{
        r1a.textContent = 'Number is odd.';
    }
}

//1B
const u1b = document.getElementById('U1B');
const b1b = document.getElementById('B1B');
const r1b = document.getElementById('R1B');
b1b.onclick = function voting(){
    let age = u1b.value;
    age = Number(age);
    if (age < 18){
        r1b.textContent = 'You are not eligible to vote.';
    }
    else{
        r1b.textContent = 'You are eligible to vote.';
    }
}

//1C
const u1c = document.getElementById('U1C');
const b1c = document.getElementById('B1C');
const r1c = document.getElementById('R1C');
b1c.onclick = function numValue(){
    let num1C = u1c.value;
    num1C = Number(num1C);
    if (num1C === 0){
        r1c.textContent = 'This number is zero.';
    }
    else if (num1C < 0){
        r1c.textContent = 'This number is negative.';
    }
    else if (num1C > 0){
        r1c.textContent = 'This number is positive.';
    }
}

//2A
const b2a = document.getElementById('B2A');
const r2a = document.getElementById('R2A');
b2a.onclick = function oneTen(){
    r2a.textContent = '';
    for (let i = 1; i < 11; i++){////i was not declared
        r2a.textContent += ` ${i}`;
    }
}

//2B
const b2b = document.getElementById('B2B');
const r2b = document.getElementById('R2B');
b2b.onclick = function oneFive(){
    i = 1;
    r2b.textContent = '';
    while (i < 6){
        r2b.textContent += ` ${i}`;
        i++
    }
}

//2C
const u2c = document.getElementById('U2C');
const b2c = document.getElementById('B2C');
const r2c = document.getElementById('R2C');
b2c.onclick = function factorial(){
    let userNum = u2c.value;
    userNum = Number(userNum);
    let resultNum = userNum;
    for (let  i = 1; i < userNum; i++){
        resultNum *= i
    }
    r2c.textContent = `${resultNum}`
}


//3A
const u3a = document.getElementById('U3A');
const b3a = document.getElementById('B3A');
const r3a = document.getElementById('R3A');
b3a.onclick = function greeting(){
    let name = u3a.value;
    r3a.textContent = `Hello ${name}!`
}

//3B
const u3b = document.getElementById('U3B');
const b3b = document.getElementById('B3B');
const r3b = document.getElementById('R3B');
b3b.onclick = function evenOdd2(){
    let num3B = u3b.value;
    num3B = Number(num3B);
    if (num3B % 2 == 0){
        r3b.textContent = 'Number is even.';
    }
    else{
        r3b.textContent = 'Number is odd.';
    }
}

//3C
const u3c = document.getElementById('U3C');
const b3c = document.getElementById('B3C');
const r3c = document.getElementById('R3C');
b3c.onclick = function vowel(){
    let string = u3c.value;
    string = String(string);
    vowels = ['a','e','i','o','u'];
    vowelCount = 0;
    for (x = 0; x < string.length; x++){
        for (y = 0; y < vowels.length; y++){
            if (string[x].toLowerCase() == vowels[y]){
                vowelCount += 1;
            }
        }
    }
    r3c.textContent = `Vowel Count: ${vowelCount}`;
}

//4A
const b4a = document.getElementById('B4A');
const r4a = document.getElementById('R4A');
b4a.onclick = function fruits(){
    r4a.textContent = '';
    let fruit = ['orange','strawberry','apple','mango','apple'];
    for (i = 0; i < fruit.length; i++){
        r4a.textContent += fruit[i] + ' ';
    }
}

//4B
const b4b = document.getElementById('B4B');
const r4b = document.getElementById('R4B');
b4b.onclick = function grades(){
    let grades = {'Marcus' : 95, 'Bianca' : 97, 'Angel' : 94, 'Troy' : 100}
    for (var key in grades){
        r4b.textContent += key + ': '+ grades[key] + ' ';
    }
}

//4C 
const b4c = document.getElementById('B4C');
const r4c = document.getElementById('R4C');
b4c.onclick = function numArray(){
    arrayA = [[23,45,65],[12,65,98],[112,46,76]];
    num4c = 0;
    for (let x = 0; x < arrayA.length; x++){
        arrayB = arrayA[x];
        for (let y = 0; y < arrayB.length; y++){
            if (arrayB[y] > num4c){
                num4c = arrayB[y];//num4c was incorrectly assigned
            }
        }
    }
    r4c.textContent = 'Largest number in array: ' + num4c;
}