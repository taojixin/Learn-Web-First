const obj = {
  friend: {
    girlFriend: {
      name: 'luck'
    }
  }
}
// 传统方式需要一个一个判断
if (obj.friend && obj.friend.girlFriend) {
  console.log(obj.friend.girlFriend.name);
}
// 可选链
console.log(obj.friend?.girlFriend?.name);