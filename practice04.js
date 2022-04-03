const a = 1;
const b = "1";

console.log(a == b);    // true 가 나옴
console.log(a === b);   // false 가 나옴(일치 연산자)

console.log("------------------------------------------");

const age = 22;

if(age > 19){
    console.log("성인입니다.");
}
else {
    console.log("성인이 아닙니다.");
}