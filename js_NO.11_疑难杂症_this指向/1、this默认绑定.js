// this默认绑定
// -----------------独立测试区 1：函数独立调用----------------------
// //1   全局环境下的this指向window
// console.log(this);
// //2   函数独立调用, 函数内部的this指向window
// function fn() 
// {
//     console.log(this);
// }
// fn();


// -----------------独立测试区 2：函数当做对象的方法来调用----------------------
// //函数当做对象的方法来调用, this 指向这个对象,即obj
// var x = 666;
// // let x = 666;
// var obj = 
// {
//     a:2,
//     foo:function () 
//     {// 函数当做对象的方法来调用, this 指向这个对象,即obj
//         console.log(this);
//         var that = this;
//         function test() 
//         {
//             console.log(this);  // 被嵌套函数独立调用,this指向window
//             console.log('x', this.x);
//             // console.log('x', x); // let要这么写
//             console.log(that.a);
            
//         }
//         test();     // 独立调用
//     }
// }
// obj.foo();


// -----------------独立测试区 3：IIFE自执行函数----------------------
// // IIFE自执行函数(相当于独立调用),内部的this指向window
// var aa = 10;
// function foo() // 它被当成变量赋值给var obj 的 foooo
// {  
//     console.log(this);
//     (function test(that)    // IIFE自执行函数
//         {
//             console.log(this);  
//             // IIFE自执行函数,内部的this指向window
//             // 同时,它在这里也是闭包,内部的this指向window
//             console.log(this.aa);
//             console.log(that.a);
//         }
//     )(this);
// }
// var obj = 
// {
//     a    : 2,
//     foooo: foo
// }
// obj.foooo();

