const sum = (a: number, b: number) => a + b;
const rest = (a: number, b: number) => a - b;

const calc = (a: number, b: number, cb: (a: number, b: number) => number) =>
    cb(a, b);

console.log(calc(1, 7, sum)); // 8

setTimeout(() => {
    console.log(calc(1, 7, rest)); // -6
}, 1000);
