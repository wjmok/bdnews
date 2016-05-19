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

function bindUpdateBtnEvent() {
  $('.updateBtn').on('click', function () {
    var newsId = $(this).attr('data-id');
    updateNewsById(newsId);
  });
}

function deleteNewsById( nid ) {
  $.ajax({
    type: "DELETE",
    url: "/news/" + nid,
    data: {
      id='nid',
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

// todo: 更新 新闻
function updateNewsById( id, news ) {
  $.ajax({
    type: "PUT",
    url: "/news/" + id,
    data: {
       
                "title": $("#mdfTitle").val(),
                "cover_url": $("#mdfImg").val(),
                "content": $("#mdfCon").text(),
                
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

