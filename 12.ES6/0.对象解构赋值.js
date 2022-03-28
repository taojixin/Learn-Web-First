// 1.数组的解构
var names = ['agc', 'cag', 'asd']
var [item1, item2, item3] = names
console.log(item1,item2,item3); // agc cag asd

// 2.解构后面元素
var [, itema, itemb] = names
console.log(itema,itemb); // cag asd

// 3.解构出一个元素，后面的元素放到一个新数组中
var [itemx, ...newNames] = names
console.log(newNames); // [ 'cag', 'asd' ]

// 4.解构的默认值 (当解构的元素可能没有值时，可以设置一个默认值)
var [itema, itemb, itemc, itemd = 'aaa'] = names
console.log(itemd); // aaa