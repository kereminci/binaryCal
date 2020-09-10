const e = document.querySelectorAll(".buttonClass");
const result = document.querySelector("#res");
let resArr = [""];
let lastIndex = 0;
console.log(resArr);
e[0].addEventListener("click", () => {
  resArr[lastIndex] += "0";
  result.innerHTML = resArr.join("");
  console.log(resArr);
});
e[1].addEventListener("click", () => {
  resArr[lastIndex] += "1";
  result.innerHTML = resArr.join("");
  console.log(resArr);
});
e[2].addEventListener("click", () => {
  result.innerHTML = "";
  resArr = [""];
  lastIndex = 0;
});

e[3].addEventListener("click", () => {
  // translate bae-2 to base-10 all numbers
  // eval the result
  // translate result to binary
  for (let i = 0; i < resArr.length; i++) {
    let el = resArr[i];
    if (el != "+" && el != "-" && el != "*" && el != "/") {
      resArr[i] = parseInt(el, 2).toString();
    }
  }
  resArr = resArr.join("");
  resArr = Math.floor(eval(resArr));
  result.innerHTML = resArr;
  // toString(2) conver 10 base -> 2 base
});

e[4].addEventListener("click", () => {
  resArr.push("+");
  resArr.push("");
  lastIndex += 2;
  result.innerHTML = resArr.join("");
  console.log(resArr);
});

e[5].addEventListener("click", () => {
  resArr.push("-");
  resArr.push("");
  lastIndex += 2;
  result.innerHTML = resArr.join("");
  console.log(resArr);
});

e[6].addEventListener("click", () => {
  resArr.push("*");
  resArr.push("");
  lastIndex += 2;
  result.innerHTML = resArr.join("");
  console.log(resArr);
});

e[7].addEventListener("click", () => {
  resArr.push("/");
  resArr.push("");
  lastIndex += 2;
  result.innerHTML = resArr.join("");
  console.log(resArr);
});

// this is comment
var x = 10;