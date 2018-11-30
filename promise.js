let validateLoc=(location)=>{
    return new Promise ((resolve,reject)=>{
        if((location=='BDC4') || (location=='BDC7')){
            resolve('Valid')
        } else{
            reject('Invalid')
        }
    })
}

validateLoc('BDC5')
.then((status)=>console.log(status))
.catch((status)=>console.log(status +'joke'))