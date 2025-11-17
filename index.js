//DECLARE A VARIABLE USING LET
let name = "Babatunde";

//ADD TWO NUMBER AND LOG RESULT
let a = 2;
let b = 3;
console.log(a+b);

//OBJECTS WITH STUDENT DATA
let student = {
    name: "Adegboye Babatunde",
    age : 19,
    department : "Backend Development"
}

//FUNCTION GREET()
function greet(){
    console.log("Hello World");
}

//CHECK IF NUMBER IS ODD OR EVEN
let number = 10;
if(number % 2 === 0){
    console.log("Even");
}else{
        console.log("Odd");
}

//ARRAY OF COLORS PRINTING FIRST COLOR
let colors = ["Green","Blue","White","Yellow","Black"];
console.log(colors[0]);

//FUNCTION RETURNING SQUARE OF A NUMBER
function  squared(n) {
    return n * n;
}

//STRING TO NUMBER
let value = "42";
let numberValue = Number(value);