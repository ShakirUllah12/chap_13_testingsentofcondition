// chapter nomber 13
 
find the largest of three nomber 
const firstNumber=+prompt("enter of first nomber");
const secondNumber=+prompt("enter of second nomber");
const thirdNumber=+prompt("enter of third nomber");

if (firstNumber >secondNumber && firstNumber > thirdNumber){
    console.log("first number that is "+firstNumber +"is the largest nomber");
}
else if(secondNumber >thirdNumber){
    console.log("second nomber that is +secondNumber+" is the largest nomber);
}
else{
    console.log("third nomber that is "+thirdNumber+"is the largest nomber");
}

const userName=prompt("please enter your name");  
const score=+prompt("please enter your score");

if (score >=90){
    alert(userName+"ypur grade is a");
}
if (score >=80){
    alert(userName+"ypur grade is b");
}
 else if (score >=70){
    alert(userName+"ypur grade is c");
}
 else if (score >=60){
    alert(userName+"ypur grade is d");
}
 else if (score >=50){
    alert(userName+"ypur grade is e");
}
 else if (score >=40){
    alert(userName+"ypur grade is f");
}