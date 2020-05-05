// 函数与箭头函数演示：
// （箭头函数相当于匿名函数）
console.log('function函数演示--------------------------') 
function addNums(num1=1, num2=2)  // 这里的num就是形参
{
    console.log('num1 + num2:', num1 + num2);
    return num1 + num2;
}
addNums();
addNums(5,6); // 这里的5，6 就是实参
console.log('addNums():', addNums());


// 箭头函数演示1--箭头函数必须要有一个变量接收--------------------------------------
// 上述函数并不能改造为箭头函数，去掉函数名addNums才可以
console.log('箭头函数演示1------------------------------') 
const addNums_1 = (num1=1, num2=2)=>    // 箭头函数必须要有一个变量接收
{
    return num1 + num2;
}
console.log('addNums_1(3,3):', addNums_1(3,3));
// python的匿名函数 sum = lambda arg1, arg2: arg1 + arg2


// 箭头函数演示2--函数体内只有一行，无需大括号--------------------------------------
console.log('箭头函数演示2------------------------------') 
const addNums_2 = (num1=1, num2=2)=>console.log('addNums_2(6,6):', num1 + num2);
addNums_2(6,6);

// 箭头函数演示3--取代return--如果要加return，则必须大括号--------------------------
console.log('箭头函数演示3------------------------------') 
const addNums_3 = (num1=1, num2=2)=>num1 + num2;
console.log('addNums_3(12,12):', addNums_3(12,12));

// 箭头函数演示4--取代return,且只有一个形参，无初始值-------------------------------
console.log('箭头函数演示4------------------------------') 
const addNums_4 = num1 => num1 + 24;  
// 如果有初值，则 (num1=8)
console.log('addNums_4(24):', addNums_4(24));

// 应用如下：
todos = [1, 2, 3, 4, 5, { x:'xxxx' }]
todos.forEach(t => { console.log(t.x) }); // 简化后的箭头函数很简洁，python看都懒得看一眼



// 补充：
// js函数对this绑定的错误处理，以下例子无法得到预期结果：-------------------------------
var obj_1 = {
    birth: 2000,
    getAge: function () {
        var b = this.birth; // 2000
        var fn = function () {
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};

var obj_2 = {
    birth: 2000,
    getAge: function () {
        var b = this.birth; // 2000
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
console.log(obj_1.getAge());// NaN  全局属性 NaN 表示 Not-A-Number (非数值)的值。
console.log(obj_2.getAge());// 25
