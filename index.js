// TODO: 使用者可以新增待辦事項
const addNewTodo = () => {
  console.log('add new todo');
  // 1) 取得輸入的值
  const value = $('#todo').val().trim();
  value == '' ? alert('請輸入待辦事項') : appendList(value);

  // 2) 新增值到待辦事項

  //3 ) 清空 input
  $('#todo').val('');

  keepTodos();
};

// 更新已完成項目
const updateCompletedCount = () => {
  const count = $('.todolist__item').find('.completed').length;

  $('.todolist__info').find('a').text(count);
};

// TODO: 使用者可以刪除待辦事項
const deleteTodo = (e) => {
  console.log($(e.target).parent().closest('li'));
  confirm('確認刪除？') ? $(e.target).parent().closest('li').remove() : false;

  keepTodos();
};

// TODO: 使用者可以編輯待辦事項
const editTodo = (e) => {
  console.log(
    $(e.target).parent().closest('li').children().find('span').text()
  );
  let taskText = $(e.target)
    .parent()
    .closest('li')
    .children()
    .find('span')
    .text();

  let newTaskText = prompt('編輯', taskText);
  $(e.target).parent().closest('li').children().find('span').text(newTaskText);
};

// TODO: 設定項目已完成
const completedTodo = (e) => {
  let checkedItem = $(e.target).closest('li');
  checkedItem.hasClass('completed')
    ? checkedItem.addClass('no-completed').removeClass('completed')
    : checkedItem.removeClass('no-completed').addClass('completed');
};

// TODO: 清除已完成項目
const clearCompletedTodo = () => {
  // 找到 completed 的待辦事項，並移除 .completed class
  // 更新已完成項目
  // 抓出 .todolist__item 待辦事項的 .completed class 數量
  // 用 jQuery text() 方式更新 html 已完成 [數字] 項目
};

// 監聽
$(() => {
  // init from localStorage
  let todos = localStorage.getItem('todos');
  if (todos) {
    todoItems = JSON.parse(todos);
    console.log(todoItems);
    todoItems.forEach(function (todoItem) {
      appendList(todoItem.todoItem, todoItem.completed);
    });
  }

  // TODO: 每一條代辦事項 delete 監聽 click 事件
  $('.todolist__item').on('click', '.delete', (e) => deleteTodo(e));

  // 狀態：全部、待完成、已完成
  $('.todolist__tabs li').each(function () {
    $(this).click(function () {
      $(this).siblings().find('a').removeClass('active');
      $(this).find('a').addClass('active');
    });
  });

  // TODO: 使用者可以將待辦事項設定成已完成
  // 步驟一：監聽每一個 todo list，前面 checkbox 有被點擊時執行 Function
  $('.todolist__item').on('click', 'li input', (e) => {
    // 步驟二：每條待辦事項根據條件，加上不同的 class：completed, no-complete
    completedTodo(e);
    // 步驟三：更新已完成項目的數字
  });

  // 篩選全部
  $('.todolist__tabs').on('click', '.all', () => {
    $('.todolist__item').children().show();
  });

  // TODO: 編輯
  $('.todolist__item').on('click', '.edit', (e) => editTodo(e));

  // TODO: 篩選待完成

  // TODO: 篩選已完成
});

// 新增待辦
const appendList = (value, isCompleted) => {
  $('.todolist__item').append(`
    <li class=${isCompleted ? 'completed' : 'no-completed'}>
        <div class="todo_item" style="display: flex;">
          <input class="todolist__input" type="checkbox">
          <span>${value}</span>
        </div>
        <div>
          <a class="edit" href="#">
            <i class="fa fa-edit" aria-hidden="true"></i>
          </a>
          <a class="delete" href="#">
            <i class="fa fa-x" aria-hidden="true"></i>
          </a>
        </div>
    </li>
  `);
};

// to localStorage
function keepTodos() {
  let todos = [];
  $('.todolist__item li').each(function () {
    const todoText = $(this)
      .children('.todo_item')
      .children('span')
      .text()
      .trim();
    const completedItem = $(this).hasClass('completed');

    todos.push({ todoItem: todoText, completed: completedItem });
  });
  console.log(todos);
  localStorage.setItem('todos', JSON.stringify(todos));
}
