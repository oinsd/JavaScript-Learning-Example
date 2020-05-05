// 面向对象演示：
/*
前言：
    经典类概念：类就是对象的模板，对象就是类的实例。
    但是！ES6前，js不存在类的概念，js不是基于类，而是通过 构造函数(constructor)和 原型链（prototype chains）实现的
*/


// Constructor 构造函数演示1-----------------------------------
/**
构造函数的特点：
    a:构造函数的首字母必须大写，用来区分于普通函数
    b:内部使用的this对象，来指向即将要生成的实例对象
    c:使用New来生成实例对象
 */
function Book1(title, author, year)
{
    this.title = title;
    this.author= author;
    this.year  = year;   
}
const book11 = new Book1('Book ONE', 'John Doe', '2013');
const book12 = new Book1('Book TWO', 'Johnnnnnn Doe', '2016');

console.log('book11.year:', book11.year);
console.log('book11:', book11);
// 此时，浏览器中，Book1下面有个__proto__会显示原型所有东西
// 而__proto__下面还有个__proto__会显示自带方法（Book1里面没有自定义方法）



// Constructor 构造函数演示2-----------------------------------
/*
构造函数的缺点：
    所有的实例对象都可以继承构造器函数中的属性和方法。但是，同一个对象实例之间，无法共享属性。
    */

function Book2(title, author, year)
{
    this.title = title;
    this.author= author;
    this.year  = year;   
    this.getSummary = function()
    {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
const book21 = new Book2('Book ONE', 'John Doe', '2018');
const book22 = new Book2('Book TWO', 'Johnnnnnn Doe', '2020');

console.log('book21.getSummary():', book21.getSummary());
console.log('book21.getSummary():', book22.getSummary());
console.log('book21', book21);
console.log('book22', book22);
/*解决思路：
    a:所有实例都会通过原型链引用到prototype
    b:prototype相当于特定类型所有实例都可以访问到的一个公共容器
    c:那么我们就将重复的东西放到公共容器就好了
*/
