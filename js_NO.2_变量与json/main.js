// javascript常用变量类型： 
// Numbers, String, Boolean,    Object: Array, Undefined, Null
const name   = 'John'; // String
const age    = 22;     // Numbers
const rating = 4.5;    // Numbers, 没有浮点类型，只是数字
const isCool = true;   // Boolean
const x      = null;   // Object
let z        = [1,2,3];  //Object
const y      = undefined; // undefined
/* let和const的
	共同点是：1、不可重复声明 2、都是代码块作用域
    不同点是：const是常量，定义赋值后，不可改变
    var与let、const特性完全相反 */
console.log('typeof name:', typeof name);
console.log('typeof isCool:', typeof isCool);
console.log('typeof x:', typeof x); // typeof并不能显示原始的数据类型null，而是显示Object
console.log('typeof y:', typeof y);
console.log('typeof z:', typeof z);
console.log('x:', x); 
console.log('y:', y); 
console.log('z:', z); 
console.log('z[0]:', z[0]);
console.log('zzzzz', z['1']);
z = [6,7,'8'];
console.log('z:', z);

//字符串 String-----------------------------------------------------------------------------------------------
console.log('----------------String------------------')
console.log('My name is ' + name,' and I am ' + age);
console.log(`My name is ${name} and I am ${age}`);
console.log('name.length:', name.length); // 属性没有括号，方法才有括号
let name_m = 'hello world';
console.log('name_m.toLocaleUpperCase():', name_m.toLocaleUpperCase()); // 转换为大写，方法需要括号
console.log('name_m.substring(0,5).toLocaleUpperCase():', name_m.substring(0,5).toLocaleUpperCase());//注意不包含第五个
const name_s = 'hello world';
console.log("name_s.split(' '):", name_s.split(' '));

//数组 Arrays -----------------------------------------------------------------------------------------------
console.log('----------------Arrays------------------')
const f = ['apples', 'oranges', 'pears'];
console.log('f[1]:', f[1]);
f[3] = 'grapes'; 		// const 定义的数组可以添加元素！坑爹！
f.push('egg');   		// 在最尾部添加
f.unshift('ihave');     // 在最头部添加，注意不能f='grapes'或f=['grapes']
console.log('f:', f);
f.pop();    		    // 去掉最尾一个
console.log('f:', f);
console.log('Array.isArray(f):', Array.isArray(f))
console.log("f.indexOf('grapes'):", f.indexOf('grapes'))
console.log("f.indexOf('egg'):", f.indexOf('egg')) // 值是-1，有点意思

//对象类型-----------------------------------------------------------------------------------------------
//在编程中，对象是现实生活中的模型的一种代码结构————官方原话
console.log('----------------Object------------------')
const person = 
{
    firstName : 'John',
    lastName  : 'Doe',
    age       : 30,
    hobbies   : ['music', 'movies', 'sports'],
    address   : 
    {
        street: '50 main st',
        city  : 'Boston',
        state : 'MA'
    }
}	// 函数声明无需分号，类也是如此，其它地方都需要分号，注意！
console.log('person:', person);
console.log("person['firstName']:", person['firstName'])
console.log('person.hobbies[0]:', person.hobbies[0]);
console.log('person.address.city:', person.address.city);
// const { firstName, lastName, address:{ city }} = person;
const 
{
    firstName, 
    lastName, 
    address:
        { city }
} = person;	// 这样写是抓出person里面的某属性
console.log('firstName:', firstName);
console.log('city:', city)
person.email = 'john@gmail.com';
console.log('person.email:', person.email)
const todos = 
[
    {
        id          : 1,
        text        : 'Take out trash',
        isCompleted : true
    },
    {
        id          : 2,
        text        : 'Meeting with boss',
        isCompleted : true
    },
    {
        id          : 3,
        text        : 'Dentist appt',
        isCompleted : false
    },
];
console.log('todos:', todos);
console.log('todos[1].id:', todos[1].id);
const todoJSON = JSON.stringify(todos);//转换JSON格式
console.log(todoJSON)