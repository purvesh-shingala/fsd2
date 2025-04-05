fs = require("fs")
data = fs.readFile('task1.txt', 'utf-8', (e, data) => {
    if (e) {
        console.log(e);
    } else {
        newdata = data.split(" ").sort()
        for (i=0;i<newdata.length;i++) {
            newdata[i]= parseInt(newdata[i])
            
        }

        console.log(newdata)

    }
})
