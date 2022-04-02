const arrays = ['aba', 'cag', 'aba', 'dca', NaN]
if (arrays.indexOf('aba') !== -1) {
  console.log("包含aba"); // 包含aba
}

// ES7
console.log(arrays.includes('aba')); // true
console.log(arrays.includes('aba', 3)); // false  第二个参数表示从第几个开始查找是否包含该元素

// includes与indexof的区别: indexOf不能查找NaN
console.log(arrays.indexOf(NaN)); // -1
console.log(arrays.includes(NaN)); // true