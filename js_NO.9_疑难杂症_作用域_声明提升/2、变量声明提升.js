// -----------------独立测试区 1：变量声明提升1----------------------
// a = 2;
// // 预解释 ，遇到var会提到最上面进行声明
// var a;
// // let a;   // let与const不会预解释
// // const a;
// console.log(a);


// -----------------独立测试区 2：变量声明提升2----------------------
// // 注意仅仅是声明移动到最上面,而赋值还是原来位置
// console.log(b);
// var b = 6;      
// //// 结果是 undefined ,说明有声明,但是没给值,相当于:
// // var b;
// // console.log(b);
// // b = 6;


// -----------------独立测试区 3：变量声明提升3----------------------
// // 注意仅仅是声明移动到最上面(当前作用域最上面!),而赋值还是原来位置
// console.log(a);
// var a = 0;
// // let a = 0;      // let 不吃这套!
// // Uncaught ReferenceError: Cannot access 'a' before initialization
// // 无法在初始化之前访问“a”
// function f() 
// {
//     console.log(b);
//     var b = 1;      // 注意这里的b不会往ff()找：往上原则
//     // let b = 1;       // let 不吃这套!
//     function ff() 
//     {
//         console.log(c);
//         var c = 2;
//         // let c = 2;       // let 不吃这套!
//     }
//     ff();
// }
// f();

