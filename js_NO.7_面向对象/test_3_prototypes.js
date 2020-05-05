// 面向对象创建原型的演示：
// 原型与原型链（prototype chains）------------------------
/*
    a:所有实例都会通过原型链引用到prototype
    b:prototype相当于特定类型所有实例都可以访问到的一个公共容器
    c:那么我们就将重复的东西放到公共容器就好了
*/
function Book(title, author, year)
{
    this.title = title;
    this.author= author;
    this.year  = year;   
}

//getSummary获取摘要
Book.prototype.getSummary = function ()
{
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
//getAge
Book.prototype.getAge = function () 
{
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;  
}
//Revise修订 / Change Year
Book.prototype.revise = function (newYear) 
{
    this.year = newYear;
    this.revised = true;
}

const book1 = new Book('Book ONE', 'John Doe', '2018');
const book2 = new Book('Book TWO', 'Johnnnnnn Doe', '2019');


console.log('book1:', book1);
console.log('book1:', book2);
console.log('book1.getSummary():', book1.getSummary());
console.log('book2.getAge():', book2.getAge());

// getSummary存在原型中，而不存在对象本身
// 即__proto__里面才能看到
// 因为生成的实例就不一定需要getSummary，而title等属性就需要每个都有

const book3 = new Book('Book TWO', 'Johnnnnnn Doe', '2019');
book3.revise('2020');
console.log('book3', book3)