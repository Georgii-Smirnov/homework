const user = {
  student: {
    name: 'Georgii',
    gender: 'man',
    age: 18,
    isAdmin: true
  }
}
console.log(user.student)


// =====================================================================================================

const unknownUser = {
  sayHello(name) {
    return (`Hello ${name}`)
  }
}

console.log(unknownUser.sayHello('Georgii'))
// =====================================================================================================


const users = [
  {
    name: 'alex',
    age: 25,
    isAdmin: true
  },
  {
    name: 'roberto',
    age: 23,
    isAdmin: true
  },
  {
    name: 'vaseck',
    age: 29,
    isAdmin: false
  }
]
let usersDntAdmin = 0

for (i = 0; i < users.length; i++) {
  if (users[i].isAdmin === false) {
    (usersDntAdmin = usersDntAdmin + 1)
    console.log(`${usersDntAdmin}`)
  }
}
if (usersDntAdmin === 0) {
  console.log('Admins all around! There is no place for ordinary users!')
}

// =====================================================================================================