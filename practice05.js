// or --> ||
// and --> &&
// not --> !

const name1 = "nana";
const age1 = 22;

if(name1 == "tom" && age1 > 19){
    console.log("pass");
}
else{
    console.log("go away");
}

console.log("------------------------------------------");

const age2 = prompt("나이를 입력하세요");
const isAdult = age2 > 19;

if(!isAdult){
    console.log("돌아가세요");
}
else{
    console.log("통과입니다");
}
console.log("------------------------------------------");

const gender = "F";
const name2 = "mike";
const gay = true;

if(gender === 'M' && name2 === 'mike' || gay){
    console.log("pass");
}
else {
    console.log('fucking go away');
}
console.log("------------------------------------------");
