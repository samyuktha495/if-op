// const score = 85;

  const score = 85;

const grade = (score >= 90) ? 'A' :
              (score >= 80) ? 'B' :
              (score >= 70) ? 'C' :
              (score >= 60) ? 'D' : 'F';

console.log(`Your grade is: ${grade}`);


const a = 48;

const isAdult = (a >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult);

//question 3:
var day="monday"
if(day == "saturday" || day == "sunday"){
    console.log("it is a weekend")
}else{
    console.log("it is not a weekend")
}

//question 4:
var age=16;
var citizenship="True";
if (age>=18 && citizenship){
    console.log("eligible to vote")
}else{
    console.log("not eligible to vote")
}

//question 5:
var username=prompt("enter your name");
var password=prompt("enter your password");

var pass_word="12345";
if((username.toLowerCase()==="admin") &&(password===pass_word)){
    console.log("you are logged in successfully");
}else{
    console.log("you entered wrong credentials...please check");
}

