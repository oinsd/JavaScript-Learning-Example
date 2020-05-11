// -----------------独立测试区 1：显示绑定----------------------
// // call() apply() bind()
// var a = 0;
// function foo() 
// {
//     console.log(this.a);
// }
// var obj = 
// {
//      a : 2 

// }
// var obj2 = 
// {
//      a : 222 

// }
// foo();  // 0
// foo.call(obj);  // 2    给一个对象
// // 通过 call()，能够使用属于另一个对象的方法。
// foo.call(obj2);  // 222    给一个对象
// foo.apply(obj); // 2    给一个对象或数组
// // 与call相似
// var fn = foo.bind(obj2); // 此时foo还没被调用，仅绑定
// fn();   // 222 此时foo被调用


// -----------------独立测试区 2：硬绑定----------------------
// // 也是一种显示绑定
// var a = 0;
// function foo() 
// {
//     console.log(this.a);
// }
// var obj = 
// { 
//     a : 2 

// }
// var bar = function () // 金刚罩
// {
//     foo.call(obj);
// }
// bar();  // 2
// setTimeout(bar, 1);  // 2
// bar.call(window);   // 2
// var cc = bar.bind(window);
// cc();   // 2



// -----------------独立测试区 3：forEach----------------------
// var id = 'wind';
// function fn(el, i, x) 
// {
//     console.log(el, i, x, this.id);
// }
// var obj = 
// { 
//     id : 'fn'

// }
// var arr = [6, 66, 666];
// // arr.forEach(fn);    // forEach的第一个参数是回调函数
// arr.forEach(fn, obj);   // 把fn绑定到obj里面
// // // 与下面情况一致：
// // arr.forEach     // 除此之外，还有map(),filter(),some(),every()构造函数
// // (
// //     function (el, index)    // 这是回调函数
// //     {
// //         console.log(el, index, this);   
// //         // el当前元素，index当前元素索引
// //     },
// //     obj     // 第二个参数就是把obj对象显示绑定到前面的回调函数
// // );

