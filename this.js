var obj1 = {
    a: 10,
    init: function() {
        console.log('a1 ===',this.a)
    }
}
obj1.init();
// obj1输出10，function构成作用域

// var obj2 = {
//     a: 20,
//     init: () => {
//         console.log('a2 ===', this.a)
//     }
// }
// obj2.init();
// obj2输出undefined，object不构成作用域，因此this指向window，而外部没有a

function thisa() {
    
}


export default thisa