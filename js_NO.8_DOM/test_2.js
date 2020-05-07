// USER FORM SCRIPT 用户表单脚本
// -------------------------保持常开状态 ：基础设置-------------------------
// Put DOM elements into variables 将DOM元素放入变量中
const myForm = document.querySelector('#my-form'); 
// 参数是CSS选择器，可以 id, 类, 类型, 属性, 属性值等来选取元素。
const nameInput = document.querySelector('#name');  //这是通过id
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg'); // 这是通过class
const userList = document.querySelector('#users');
// Listen for form submit 监听表单提交事件
myForm.addEventListener('submit', onSubmit);



// -------------------------独立测试区 1 ：获得表单的输入信息-------------------------
// function onSubmit(e) 
// {
//     e.preventDefault();
//     if (nameInput.value === '' || emailInput.value === '') 
//     {
//         alert('name or email not null');
//     } else
//     {
//         console.log('nameInput.value:', nameInput.value);
//         console.log('emailInput.value:', emailInput.value);
//     }
// }

// -------------------------独立测试区 2 ：某区域显示错误信息-------------------------
// function onSubmit(e) 
// {
//     e.preventDefault();
//     if (nameInput.value === '' || emailInput.value === '') 
//     {
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all fields';
//         // Remove error after 3 seconds 3秒后删除错误
//         setTimeout(() => msg.remove(), 3000); // 处理程序：时间处理程序
//     } else
//     {
//         console.log('success');
//     }
// }



// -------------------------独立测试区 3 ：非空值，将添加HTML代码-------------------------
// function onSubmit(e) 
// {
//   e.preventDefault();
  
//   if(nameInput.value === '' || emailInput.value === '') 
//   {
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     // Remove error after 3 seconds 3秒后删除错误
//     setTimeout(() => msg.remove(), 3000);
//   } else 
//   {
//     // Create new list item with user 与用户创建新列表项
//     const li = document.createElement('li'); // 创建一个li标签

//     // Add text node with input values 添加具有输入值的文本节点
//     li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//     // Add HTML
//     li.innerHTML = `${nameInput.value}: ${emailInput.value}`;

//     // Append to ul
//     userList.appendChild(li);

//     // Clear fields
//     nameInput.value = '';
//     emailInput.value = '';
//   }
// }