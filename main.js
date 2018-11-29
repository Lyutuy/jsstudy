let num = [10, 20, 12, 5, 1, 0];
console.log(num.sort());
num.sort(function (a, b) {
    console.log(a, b);
    return a - b;
});

console.log(num);