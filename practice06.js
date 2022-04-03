for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log("=======================================");
let j = 0;

while(j < 10){
    console.log(j);
    j++;
}

console.log("=======================================");
let k = 0;

do {
    console.log(k);
    k++;
}while(k < 10);

console.log("=======================================");
while(true){
    let answer = confirm("계속 할까요?");
    if(!answer){    //확인이면 무한반복, 취소는 종료
        break;
    }
}

// 명확한 횟수가 있다면 for문을
// 그렇지 않다면 while을.
// do while은 거의 사용하지 않음