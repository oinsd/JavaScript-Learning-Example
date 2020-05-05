// 面向对象演示：
// 对象的基础演示-----------------------------------
p = 
{
    a:1,
    b:2,
    c:3,
} // 大括号就是对象，跟JSON非常有关系

// 查看系统的对象，全部基于window--------------------
// console.log(window);  
// window.alert(1);
// alert(2);
// console.log(navigator.appVersion);

// 对象Object--------------------------------------
const book1 = 
{
    title   : 'Book ONE',   // 对象里面放（property）属性是键值对，JSON则键和值都引号
    author  : 'John Doe',
    year    : '2013',
    getSummary: function()
    {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log('book1:', book1);
console.log('book1.title:', book1.title);
console.log('p:', p);

const book11 = 
{
    title   : 'Book TWO',   // 对象里面放键值对，JSON则键和值都引号
    author  : 'Johnnnnnnn',
    year    : '2016',
    getSummary: function()
    {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log('book11:', book11);
console.log('book11.getSummary():', book11.getSummary());
console.log('Object.values(book11):', Object.values(book11));
console.log('Object.keys(book11):', Object.keys(book11));





