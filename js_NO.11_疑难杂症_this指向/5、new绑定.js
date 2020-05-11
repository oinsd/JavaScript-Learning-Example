// -----------------独立测试区 1：new 绑定1----------------------
// function fn() 
// {
//     console.log('this`s', this); 
// }
// var fnn = fn(); // this`s window 
// fnn;    // 此时不会打印
// var fnnnn = new fn(); // new fn();的时候,就打印this`s fn{}  
// var cc = fnnnn; // 此时不会打印


// -----------------独立测试区 2：new 绑定2----------------------
// // 当new关键字来执行函数，相当于构造函数来实例化对象，
// // this指向当前实例化的对象
// function fn2() 
// {
//     console.log(this);  // this指向当前对象
//     return { name : 'xxx' }
//     // 使用return关键字返回对象，实例化后，this指向实例化后的对象
// }
// var fnn2 = new fn2();  // this`s fn2{} 
// fnn2; // 此时不会打印
// console.log(fnn2);  // { name : 'xxx' }


// -----------------独立测试区 3：new 绑定3----------------------
// var person =
// {
//     fav : function () 
//     {
//         console.log('thisssss', this);
//         return this;
//         // 上面写法等同 
//         // return;
//         // 上面写法等同（啥也不写）
//         //
//     }
// }
// var p = new person.fav();   // thisssss fav {}
// console.log(p, p === person);   // false
// // 实例化出来的对象，内部属性constructor指向了当前构造函数
// console.log(p.constructor === person.fav);  // true
