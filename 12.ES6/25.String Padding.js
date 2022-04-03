const message = "hello world"

const newMessage = message.padStart(15, '*').padEnd(20, '-')
console.log(newMessage); // ****hello world-----

// 案例：银行卡位数的隐藏
const cardNumber = "52208420390323232"
const lastFourCard = cardNumber.slice(-4)
const finalCard = lastFourCard.padStart(cardNumber.length, '*')
console.log(finalCard); // *************3232