// alert --> 알려줌
// prompt --> 입력 받음
// confirm --> 확인받음

const name1 = prompt("이름을 입력하세요.");
alert("환영합니다. " + name1 + "님.");

const name2 = prompt("이름을 입력하세요.");
alert(`환영합니다. ${name2}님.`);

const date1 = prompt("예약일을 입력해주세요.", "yyyy-mm-dd");
alert(`예약일은 ${date1}입니다.`);

const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult);