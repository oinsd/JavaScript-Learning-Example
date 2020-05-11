// -----------------独立测试区 1：箭头函数的this指向----------------------
// let obj=
// {
//     a:222,
//     fn:function()
//     {    // 这里如果出现this，就是指向obj
//         setTimeout(function(){console.log(this)})
//         // 这里把函数作为回调函数，所以指向window
//     }
// };
// obj.fn(); // window


// let obj2=
// {
//     a:222,
//     fn:function(){    
//         setTimeout(()=>{console.log(this)});
//     }
// };
// obj2.fn(); 
// // 1、箭头函数在自己的作用域内没有自己的 this
// // 2、箭头函数的this是在定义函数时绑定的，不是在执行过程中绑定的。