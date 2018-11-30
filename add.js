let add = (num1, num2, callback) => {
    let result = num1+ num2
    console.log('inside add')
    callback(result)
}

add(1,2,(res)=>{
    console.log('res :' + res)
})

console.log('after add')