// TODO: 使用者可以新增待辦事項
const addNewTodo = () => {

}

// 更新已完成項目
const updateCompletedCount = () => {
  const count = $('.todolist__item').find('.completed').length

  $('.todolist__info').find('a').text(count)
}

// TODO: 使用者可以刪除待辦事項
const deleteTodo = (e) => {
}

// TODO: 清除已完成項目
const clearCompletedTodo = () => {
  // 找到 completed 的待辦事項，並移除 .completed class


  // 更新已完成項目
  // 抓出 .todolist__item 待辦事項的 .completed class 數量
  // 用 jQuery text() 方式更新 html 已完成 [數字] 項目
}


// 監聽
$(() => {
  // TODO: 每一條代辦事項 delete 監聽 click 事件
  $('.todolist__item').on('click', '.delete', (e) => deleteTodo(e))

  // 狀態：全部、待完成、已完成
  $('.todolist__tabs li').each(function () {
    $(this).click(function () {
      $(this).siblings().find('a').removeClass('active')
      $(this).find('a').addClass('active')
    })
  })

  // TODO: 使用者可以將待辦事項設定成已完成
  // 步驟一：監聽每一個 todo list，前面 checkbox 有被點擊時執行 Function
  $('.todolist__item li').on('click', 'input', (e) => {
    // 步驟二：每條待辦事項根據條件，加上不同的 class：completed, no-complete

    // 步驟三：更新已完成項目的數字

  })

  // 篩選全部
  $('.todolist__tabs').on('click', '.all', () => {
    $('.todolist__item').children().show()
  })

  // TODO: 篩選待完成


  // TODO: 篩選已完成

})