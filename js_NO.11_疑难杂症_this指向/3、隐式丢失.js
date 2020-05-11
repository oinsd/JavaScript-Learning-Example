// -----------------独立测试区 1：隐式丢失1----------------------
// // // 当函数内的方法被赋值给一个变量,则出现隐式丢失
// var a = 0;
// function foo() 
// {
//     console.log(this.a);
// }
// var obj =
// {
//     a : 1,
//     foo:foo
// }
// var bar = obj.foo;
// bar();  
// // 把obj.foo()赋值给别名bar,造成隐式丢失
// // 因为此时var bar 只是function foo() {...}


// -----------------独立测试区 2：隐式丢失2----------------------
// // 当函数内的方法被当作参数,传递后,会出现隐式丢失
// var a = 0;
// function foo() 
// {
//     console.log(this.a);
// }
// function bar(fn) 
// {
//     fn();
// }
// var obj =
// {
//     a : 1,
//     foo:foo
// }
// bar(obj.foo);  
// // 把obj.foo当作参数传递到 bar(fn) ,就是赋值给fn,造成丢失


// -----------------独立测试区 3：隐式丢失3 内置函数----------------------
// // 内置函数 setTimeout() 和setInterval()第一个参数的回调函数中的this是window
// // setTimeout()是在载入执行一次后延迟指定时间后,再执行一次表达式，需要函数触发；被动触发
// // setInterval()是载入后,立即进入计算状态，每隔指定的时间就执行一次表达式；主动触发
// setTimeout(
//             function () 
//             {
//                 console.log(this);
//             }, 
//             1000
//           );
// //// 上述代码相当于:
// // var a = 10;
// // function foo() {
// //     console.log(this.a);
// // }
// // var obj =
// // {
// //     a : 1,
// //     foo:foo
// // }
// // setTimeout(obj.foo, 1000);


// -----------------独立测试区 4：隐式丢失4 间接调用----------------------
// var a = 2;
// function foo() 
// {
//     console.log(this.a);
// }
// var obj =
// {
//     a : 3,
//     foo:foo
// }
// var p = 
// {
//     a: 4,
//     b: 5

// };
// obj.foo(); // 3
// // 将obj.foo 函数对象赋值给p.foo函数 ,然后立即调用
// // 相当于仅仅是foo()函数立即调用,内部this指向window
// (p.foo = obj.foo)(); // 2
// // 将obj.foo 函数对象赋值给p.foo函数 ,然后再执行(非立即调用)
// p.foo = obj.foo;
// p.foo(); // 4


// -----------------独立测试区 5：隐式丢失5 特殊情况----------------------
// var a = 0;
// function foo() 
// {
//     console.log(this.a);
// }
// var obj = 
// {
//     a : 1,
//     f:foo
// }
// var cc;
// (cc = obj.f)(); // 0
// (false || obj.f)(); // 0
// (1, obj.f)(); // 0
// // 只要是立即调用,都会单独调用,指向window

