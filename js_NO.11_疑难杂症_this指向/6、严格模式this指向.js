// -----------------独立测试区 1：严格模式----------------------
// // 1、严格模式，独立调用的函数内部this指向了undefined
// function foo() 
// {
//     'use strict'
//     console.log(this);// 严格模式,this默认undefined
// }
// foo();

//// 2、严格模式，函数apply()和call()内部的this始终是他们的第一个参数
// var color = 'red';
// function showcolor() 
// {
//     'use strict'
//     console.log(this);
// }
// showcolor.call(null);
// showcolor.apply(undefined);
// showcolor.call(window);