var obj={'Name':[{'Fname':'Purvesh'},{'Lname':'Shingala'}]}
var data=JSON.stringify(obj)
fs=require("fs")
fs.writeFile('task2.txt',data,(e)=>{
    if(e){
        console.log("Error")
    }else{
        fs.readFile('task2.txt','utf-8',(e,data)=>{
            if(e){
                console.log("Error")
            }else{
                data=JSON.parse(data)
                console.log("My FirstName is "+data.Name[0].Fname+" And LastName is "+data.Name[1].Lname)
            }
        })
    }
})
