Promise.resolve().then(
    setTimeout(()=>{
        console.log(5)
    },0)
)

setTimeout(()=>{
    console.log(1)
},10)

function promiseloop () {

}

export default promiseloop