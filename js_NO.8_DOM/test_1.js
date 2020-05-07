// ----------------------------独立测试区1 ： 基础对象与弹窗-------------------------
// console.log(window); // window对象是浏览器的父对象
// alert('hello');
// window.alert('hi...');


// ----------------------独立测试区 2 ：单选、多选、遍历元素----------------------
// // ELEMENT SELECTORS元素选择器
// // Single Element Selectors单元素选择器
// console.log('getElementById:', document.getElementById('my-form'));
// console.log('querySelector:', document.querySelector('.container'));  
// // querySelector查询选择器，参数是CSS选择器，可以 id, 类, 类型, 属性, 属性值等来选取元素。
// // 如果是 '.container' 这里的点就意味着是class
// // Multiple Element Selectors多元素选择器
// console.log('querySelectorAll:', document.querySelectorAll('.item'));
// console.log('getElementsByTagName:', document.getElementsByTagName('li'));
// console.log('getElementsByClassName:', document.getElementsByClassName('item'));
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log('items.forEach:', item));


// -------------------------独立测试区 3 ：移除、改写元素属性-------------------------
// // MANIPULATING THE DOM 操控DOM
// const ul = document.querySelector('.items');
// // ul.remove();                                         // ---此功能单独测试---
// // ul.lastElementChild.remove();                        // ---此功能单独测试---
// ul.firstElementChild.textContent = 'Hello';   //文本内容
// ul.children[1].innerText = 'Brad';  //内文本
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';  // 内部HTML
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// -------------------------独立测试区 4 ：鼠标与键盘事件-------------------------
// Mouse Event 鼠标事件
// const ul = document.querySelector('.items');
// const btn = document.querySelector('.btn');
// btn.addEventListener
// (
//   'click', e => 
//   {  // 除了click还有mouseover(鼠标移入),mouseout(鼠标移出)
//   e.preventDefault();   // 阻止默认行为，否则会一闪而过（表单不再处于提交状态）
//   console.log(e.target.className);  // e是事件对象 target显示事件作用的元素
//   document.querySelector('#my-form').style.background = '#ccc';
//   // document.querySelector('body').classList.add('bg-dark');  // 用css样式。独立测试
//   ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//   }
// );

// Keyboard Event 键盘事件
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').append(nameInput.value);
// });


