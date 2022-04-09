class Classroom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }
  entry(newStudent) {
    this.students.push(newStudent)
  }
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {  //  （注意这里的箭头函数）
        if (index < this.students.length) {
          return { done: false, value: this.students[index++]}
        } else {
          return { done: true, value: undefined}
        }
      },
      return: () => { // 当迭代还没完成时被终止，会执行这里的函数  （注意这里的箭头函数）
        console.log("迭代器提前终止了");
        return { done: true, value: undefined}
      }
    }
  }
}

const classroom = new Classroom('13-304', "教室", ['jabes', 'dfsaf', 'tjx'])
classroom.entry('jiying')
for (const stu of classroom) {
  console.log(stu);
  if (stu === 'tjx') break // 这里监听被中断，然后会执行return中的监听中断的代码
}