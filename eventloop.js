async function async1() {
    console.log(1)
    const result = await async2();
    // const result1 = async2();
    // console.log(result1,result)
    console.log(3)
}

async function async2() {
    await console.log(2)
    console.log(7)
    return 90
}

Promise.resolve().then(()=>{
    console.log(4)
})

setTimeout(()=>{
    console.log(5)
},0)

async1()
console.log(6)


// 1,2,6,4,3,5
function loop(){
    
}
export default loop