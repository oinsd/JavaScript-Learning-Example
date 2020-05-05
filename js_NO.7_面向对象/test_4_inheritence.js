// 面向对象创建原型的演示：
// 继承-------------------------------------------------------------------
function Book(title, author, year) 
{
    this.title  = title;
    this.author = author;
    this.year   = year;
};
// getSummary
Book.prototype.getSummary = function () 
{
    return `${this.title} was written by ${this.author} in ${this.year}`;
};
// Magazine Constructor ‘杂志’构造函数
function Magazine(title, author, year, month) 
{
    Book.call(this, title, author, year);
    this.month = month;
};
// Inherit Prototype 继承原型
Magazine.prototype = Object.create(Book.prototype);    // Magazine 杂志

// Instantiate Magazine Object 实例化杂志对象
const mag1 = new Magazine('Mag ONE', 'John Ddd', '2018', 'Jan');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine; //constructor构造器
// 上面这行，如果正常启用，即使在前面就已经打印出mag1，在__proto__里面就会constructor: ƒ Magazine(title, author, year, month)
// 如果没有上面这行，打印出mag1，在__proto__里面就会constructor: ƒ Book(title, author, year)

console.log('mag1:', mag1);
console.log('mag1.getSummary():', mag1.getSummary());   

