// 类的演示：
class Book
{
    constructor(title, author, year)    // constructor构造器
    {
        this.title  = title;
        this.author = author;
        this.year   = year;
    }
    getSummary() 
    {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge()
    {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
    revise(newYear)
    {
        this.year = newYear;
        this.revised = true;
    }
    static topBookStore()
    {
        return 'Barnes & Noble';
    }
}

//Instantiate Object 实例化对象
const book1 = new Book('Book ONE', 'John Doe', '2013');

console.log('book1:', book1);
book1.revise('2018');
console.log('book1:', book1);

// static 演示
console.log(Book.topBookStore());
