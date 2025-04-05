import val from 'validator'
let email="purveshshingala96@gmail.com"
console.log(val.isEmail(email))
console.log(val.isEmail("hello"))
console.log(val.isLowercase('a'))
console.log(val.isLowercase('A'))
console.log(val.isEmpty(""))
console.log(val.isEmpty("hi"))