"use strict";

$(document).ready(function () {
  bindDeleteBtnEvent();
});

function bindDeleteBtnEvent() {
  $('.deleteBtn').on('click', function () {
    var newsId = $(this).attr('data-id');
    deleteNewsById(newsId);
  });
}

function deleteNewsById( id ) {
  $.ajax({
    type: "DELETE",
    url: "/news/" + id,
    data: {},
    dataType: "json",
    success: function ( data ) {
      window.location.reload();
    },
    error: function () {
      //通讯失败并返回状态码
      alert("删除失败：" + id)
    }
  });
}

// todo: 更新 新闻
function updateNewsById( id, news ) {
  $.ajax({
    type: "PUT",
    url: "/news/" + id,
    data: {
      title: 'new  title',
      content: 'new content'
      // 其他信息...
    },
    dataType: "json",
    success: function ( data ) {
      window.location.reload();
    },
    error: function () {
      //通讯失败并返回状态码
      alert("删除失败：" + id)
    }
  });
}

