import ch from 'chalk'
import val from 'validator'

console.log(ch.underline.blue.bgYellow("hello"))
console.log(ch.hex('#DEADAD').bold('grey!'))
console.log(ch.red("hello",ch.underline.bgBlue("world")))
const error=ch.bold.red
const working=ch.hex('#FFA500')

console.log(error("color for error"))
console.log(working("color for working"))
console.log("----------------------------------------------------------")
var text=ch.red.underline.bgYellow("Hello")+ch.bold.bgRed.italic.yellow("yelon")
console.log(text)
console.log(val.isEmail(text),val.isLowercase(text))

