var num=Math.floor(Math.random()*11);
var a=require("readline-sync");
var guess=a.questionInt("guess num");
if(num==guess){
  console.log("your num is correct"+num);
}
else if(num>guess){
  console.log("num is law")
}
else{
  console.log("num is high")
}