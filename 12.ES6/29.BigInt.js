const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt); // 9007199254740991

const bigInt = 9007199254740991100n;  // 使用n表示BigInt
// console.log(bigInt + 10); // 报错，只能同类型运算
console.log(bigInt + 10n); // 9007199254740991110n

const num = 100
console.log(bigInt + BigInt(num)); // 9007199254740991000

const smallNum = Number(bigInt)
console.log(smallNum); // 9007199254740991000