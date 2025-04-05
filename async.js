fs = require("fs")
fs.writeFile('data.txt', 'NEW WelCome', (e) => {
    if (e) {
        console.log(e)
    } else {
        fs.appendFile('data.txt', 'To WelCome', (e) => {
            if (e) {
                console.log(e)
            } else {
                fs.readFile('data.txt', 'utf-8', (e, data) => {
                    if (e) {
                        console.log(e)
                    } else {
                        console.log(data)
                    }
                })
            }
        })
    }
})





console.log('programe endded')