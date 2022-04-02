const arr2 = [33, 10, 26, 30, 33, 26]
const arrSet2 = new Set(arr2)

arrSet2.forEach(item => {
  console.log(item);
})

for (const item of arrSet2) {
  console.log(item);
}