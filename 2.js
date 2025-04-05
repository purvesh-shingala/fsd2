const mul=(a,b)=>{
    return (a*b)
}

const add=(a,b)=>{
    return (a+b)
}

const sub=(a,b)=>{
    return (a-b)
}

const div=(a,b)=>{
    if(b==0){
        return -1
    }else{
        return (a/b)
    }
    
}
module.exports.m=mul;
module.exports.s=add;
module.exports.su=sub;
module.exports.d=div;