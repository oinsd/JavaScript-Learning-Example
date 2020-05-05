// For语句-------------------------------------------
for(let i=0; i<=6; i++)
{
    console.log(`For Loop Number:${i}`);
}

// while语句-------------------------------------------
let i = 0;
while(i<=6)
{
    console.log(`While Loop Number:${i}`);
    i++;
}

// For应用---------------------------------------------
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
for(let i=0; i<todos.length; i++)
{
    console.log('todos[i].text:', todos[i].text);
}
for(let t of todos)
{
    console.log('t.id:',t.id);
}
// forEach, map, filter--------------------------------------------
// forEach
todos.forEach   //也可以写成箭头函数
(
    function(t) // 这是回调函数
    {
        console.log('t.text:', t.text);
    }
);
// map
const t = todos.map   //map返回一个数组
(
    function(t)
    {
        // console.log('t.text:', t.text);
        return t.id === 1;
        // return t.id;
    }
);
console.log('t:', t);
// filter 过滤器
const tCompleted = todos.filter  //Completed 完整的
(
    function(t)
    {
        return t.isCompleted === true; // === 相当于python的 ==
    }
);
console.log('tCompleted:', tCompleted)
// map和filter的区别：前者是返回数组，后者是返回符合条件的数组

const tttCompleted = todos.filter   
(
    function(t)
    {
        return t.isCompleted === true;
    }
).map(function(t){return t.text;})
console.log('tttCompleted:', tttCompleted)