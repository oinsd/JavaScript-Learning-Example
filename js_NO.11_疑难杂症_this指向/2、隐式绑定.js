// -----------------独立测试区 1：隐式绑定----------------------
// // 当函数当作obj对象的方法来调用,this指向当前obj
// function foo() {
//     console.log(this.a);
// }
// var obj =
// {
//     a : 1,
//     foo:foo,
//     obj2:
//     {
//         a : 2,
//         foo:foo
//     }
// }
// // foo()函数的直接对象是obj,this隐式绑定了直接对象
// obj.foo();
// // foo()函数的直接对象是obj2,this隐式绑定了直接对象
// obj.obj2.foo();

