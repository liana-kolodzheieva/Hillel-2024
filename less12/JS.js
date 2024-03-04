let a = 5;
let b = "5";

if (a == b) {
    console.log("corect");
} else {
    console.log("wrong");
}

const c = 3;
const d = 2;
const res = a > b ? a : b;
console.log(res);
const re2 = a < b ? a - b : b + a;
console.log(re2);

const res3 = "world" ?? "bay";
console.log(res3);

const res1 = 0 ?? "x";
console.log(res1);

const res4 = true ?? false;
console.log(res4);

const res5 = null ?? "not null";
console.log(res5);

const hello = "hi JS";
const mess = null;
const res6 = hello ?? mess;
console.log(res6);
