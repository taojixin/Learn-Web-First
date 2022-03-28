function foo(m,n,...args) {
  console.log(m,n); // 1 2
  console.log(args);  // [ 3, 4, 5, 6, 7 ]
  console.log(arguments);  //  [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7 }
}
foo(1,2,3,4,5,6,7)