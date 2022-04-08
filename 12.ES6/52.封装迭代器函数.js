function createArrayIterator(arr) {
  let index = 0;
  return {
    next: function() {
      if (index < arr.length) {
        return { done: false, value: arr[index++]}
      } else {
        return { done: true, value: undefined}
      }
    }
  }
}

const namea = ['a', 'b', 'c']
const ages = [1, 2, 3]

const nameaIterator = createArrayIterator(namea)
const agesIterator = createArrayIterator(ages)

console.log(nameaIterator.next()); // { done: false, value: 'a' }
console.log(nameaIterator.next()); // { done: false, value: 'b' }
console.log(nameaIterator.next()); // { done: false, value: 'c' }
console.log(nameaIterator.next()); // { done: true, value: undefined }

console.log(agesIterator.next());  // { done: false, value: 1 }
console.log(agesIterator.next());  // { done: false, value: 2 }
console.log(agesIterator.next());  // { done: false, value: 3 }
console.log(agesIterator.next());  // { done: true, value: undefined }