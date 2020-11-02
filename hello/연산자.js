let strNum = "3";
let sum = Number(strNum) + 5;
console.log(sum);
sum = 5 + parseInt(strNum);
console.log(sum);

// 원둘레 연산
// 지름 * PI
let circle = 3 * 3.141592;
console.log("지름이 3인 원의 둘레 길이", circle);
circle = 3 * Math.PI;
console.log(circle);

for (i = 0; i < 10; i++) {
  let rnd = Math.floor(Math.random() * 10) + 1;
  console.log(rnd);
}

let str1;
let str2 = null;
let str3 = "";
let str4 = 0;
let str5 = NaN; // Not a Number : 문자열형태의 값이 숫자로 변환가능한가?
let str6 = undefined;

// 임의의 변수들에 담길 예정인 값중에
// 실제 문자열, 숫자 형태인 값이 담긴 변수를 찾아
// 그 변수값을 다른 변수에 담고 싶을때
// if문을 사용하지 않고 || 연산자를 통하여 구현할수 있다.
let result = str1 || str2 || str3 || str4 || str5 || str6 || "Korea";
console.log("문자열3", Number("3"));
console.log("문자열 3A", Number("3A"));

let 어떤값 = "3A";
if (!Number(어떤값)) {
  console.log(어떤값, "는 숫자가 아님");
}

console.log("parseInt", parseInt(어떤값));
