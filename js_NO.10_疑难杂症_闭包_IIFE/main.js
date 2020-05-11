// -----------------独立测试区 1：----------------------
// // 外部访问不到内部变量,这是闭包(但这个定义未必全面)
// // 通过间接方式访问到
// var a = 123;
// function f1() 
// {
//     console.log(a);
//     var b = 234;
//     function f2() 
//     {
//         console.log(b);
//         // return this; //这里this是window
//     }
//     return f2;
// }
// var result = f1();      // f1();被调用,于是打印a 123  但此时result是f2函数,不是函数返回值
// result();               // result();被调用,相当于function f2(){}  但是注意b是有值的!于是打印b 234
// console.log(result());  // result();又被调用一次    最后log出来结果是未定义,因为没有返回值
// // 特点是能记住与之相关的变量等
// // 本质上,闭包就是函数内部和外部链接的桥梁



// -----------------独立测试区 2：闭包作用----------------------
// // 计数器
// function a() 
// {
//     var start = 0;
//     function b() 
//     {
//         return start++;
//     }
//     return b;
// }
// var inc = a();  // inc不会销毁,所以start一直都在,小心内存泄漏
// console.log(inc());
// console.log(inc());
// console.log(inc());
// inc = null; // 释放当前变量


// // -----------------独立测试区 3：IIFE----------------------
// // 自调用函数:定义函数后,立即调用该函数
// // 前言:如果function出现在行首, 一律解释成函数声明语句
// function x() {};// 没有函数名x会报错
// // function () {};
// const xx = function () {};

// const a = function (){} (); 
// // 函数没有名字,但是允许被一个变量接收,最后面的括号是调用这个无名函数
// // 如果没有变量接收则报错:
// // function () {} ();
// // 由于括号()就是一个表达式,所以这样是合法的:
// (function () {})();   
// (function () {}());     
// //注意这里的分号不能省, 在有些地方, 省去尾部分号, 头部加叹号:
// !(function () {})()


// -----------------独立测试区 4：IIFE应用----------------------
// // 计数器,调用一个函数a,每次都返回值增加1
// // 方法一:
// var a = 0;
// function aaa() {
//     return ++a;
// }
// console.log(aaa());
// console.log(aaa());
// console.log(aaa());
// // 方法二:
// var add = 
// (
//     function () 
//     {
//         var count = 0;  // 私有属性
//         return function () // 注意,只有这个函数存在,即上一级函数嵌套了这个函数,严格上说才是闭包
//         {
//             return ++count;
//         }        
//     }
// )();
// console.log(add);
// console.log(add());
// console.log(add());
// console.log(add());


// -----------------独立测试区 5：闭包容易出错的地方----------------------
// // 尽量不要用var,尤其是有局部作用域(非全局作用域)的地方
// function foo() {
//     var arr = [];
//     for (let i = 0; i < 10; i++) {  // 注意这里的let如果是var,就乱套了
//         arr[i] = function () {
//             return i;
//         }
//     }
//     return arr;
// }
// var bar = foo();
// console.log(bar[0]());
// console.log(bar[2]());
// console.log(bar[5]());
