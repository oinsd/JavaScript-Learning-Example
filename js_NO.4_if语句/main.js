// if语句-------------------------------------------
let x = 10;
if(x == 10)
{
    console.log('x is 10');
}

if(x == '10') // ==不管类型，只管值
{
    console.log('x is 10');
}

if(x === '10') // ===需要判断类型与值都一样才行
{
    console.log('x is 10');
}
//if    else if    esle--------------------------------------------------
x = 20;
if(x === 10) 
{
    console.log('x is 10');
}else if(x > 10)
{
    console.log('x is greater than 10');
}else
{
    console.log('x is less than 10')
}



// 逻辑运算演示---------------------------------------------------
// false 是 undefined, 0, "", null, false 
// true  是 除了上面的，都是true

// ----------- || 或    演示 -----------
const xx = 11;
if(xx<6 || xx>10) // ||某一个是true，结果为true
{
    console.log('逻辑‘或’：成立')
}else
{ console.log('逻辑‘或’：不成立') }


// ----------- && 与    演示 -----------
const yy = 11;
if(yy>1 && yy<10) // &&需要两个条件都是true，结果才是true
{
    console.log('逻辑‘与’：成立')
}else
{ console.log('逻辑‘与’：不成立') }


// 三元操作符 --------------
const xxx = 9;
const color = xxx > 10 ? 'red' : 'blue'; 
//如果问号后面条件为真，设置color为red，冒号代表else
console.log('xxx color :', color)