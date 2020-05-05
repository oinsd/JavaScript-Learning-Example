// 面向对象演示：
// 不同的方式创建对象
// Object of Protos
const bookProtos = 
{
    getSummary: function () 
    {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge:function () 
    {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
};

// Create Object
// 方法一：
// const book1 = Object.create(bookProtos);
// book1.title = 'Book ONE';
// book1.author = 'John Doe';
// book1.year = '2013';

// // 方法二：
const book1 = Object.create
    (bookProtos,
        {
            title :{ value : 'Book ONE'},
            author:{ value : 'John Doe'},
            year  :{ value : '2013'}
        }
    );

console.log(book1);

