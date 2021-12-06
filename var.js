// 在var变量声明之前调用会显示undefined
console.log('a === ',a)
var a = 10

// 在let、const变量声明之前会报错
// console.log('b ===', b)
// let b = 5

// console.log('c === ', c)
// const c = 5

let d 
console.log('d ====', d)

// 如果声明const变量而不赋值就会报错
// const e
// console.log('d ====', e)

function fn () {
    var f;
}

console.log('f ====', fn)

function variable(){
   
}

export default variable