const fooa = ''
const result1 = fooa || '默认值'
const result2 = fooa ?? '默认值'
console.log(result1); // 默认值
console.log(result2); // ''
// 作用：有时为了那个值就是空字符串，使用 || 会出现不想要的错误，所以使用 ?? 