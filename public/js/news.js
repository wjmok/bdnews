$(document).ready(function () {
  //设置选项卡
  $("#s1").click(function () {
    /*$("#c2").addClass("hide");
     $("#c1").removeClass("hide");
     */
    showRecommendContent();
  });
  $("#s2").click(function () {
    /* $("#c1").addClass("hide");
     $("#c2").removeClass("hide");*/

    var categoryId = $(this).attr('data-category-id');
    showContent(categoryId);
  });
  $("#s3").click(function () {
    /*$("#c2").addClass("hide");
     $("#c1").removeClass("hide");*/

    var categoryId = $(this).attr('data-category-id');
    showContent(categoryId);
  });
  $("#s4").click(function () {
    /*$("#c1").addClass("hide");
     $("#c2").removeClass("hide");*/

    var categoryId = $(this).attr('data-category-id');
    showContent(categoryId);
  });
  $("#s5").click(function () {
    /*$("#c2").addClass("hide");
     $("#c1").removeClass("hide");*/

    var categoryId = $(this).attr('data-category-id');
    showContent(categoryId);
  });
  $("#s6").click(function () {
    /*$("#c1").addClass("hide");
     $("#c2").removeClass("hide");*/

    var categoryId = $(this).attr('data-category-id');
    showContent(categoryId);
  });

  $("#s1").click();
});


function renderList( data ) {
  //如果该类新闻列表无新闻，显示列表为空，否则将内容添加到html中
  if ( data.length === 0 ) {
    $("<div>").addClass("index-list").attr("style", "text-align:center").text($(".type-text-active").text() + "新闻列表为空").appendTo(".news-container");
  } else {
    //遍历每一条新闻
    $.each(data, function ( index, value ) {
      console.log(value);

      var newsBox = $("<div>").addClass("index-list").appendTo("#c1").on("click", function () {
        $(".home-page").hide();
        $(".content-page").show();
        $(".cp-head-title").text(value.title)
      });
      //判断图片链接是否为空
      var mainImg = $("<div>").addClass("index-list-image").appendTo(newsBox);
      if ( value.cover_url ) {
        $("<img>").attr("src", value.cover_url).appendTo(mainImg);
      }

      var title = $("<div>").appendTo(newsBox);
      $("<h3>").text(value.title).appendTo(title);

      var mainText = $("<div>").addClass("index-list-main-text").appendTo(newsBox);
      $("<div>").text(value.content).appendTo(mainText);

    })
  }
}


function showContent( categoryId ) {
  //清空所有内容
  $(".index-list").remove();
  $.ajax({
    // 接口请求方式
    type: "GET",
    // 服务端 api 接口地址
    url: "/news",
    // 接口参数 data
    data: {
      category_id: categoryId
    },
    // 返回数据类型
    dataType: "json",
    // 接口请求成功回调
    success: function ( data ) {
      renderList(data);
    },
    // 接口请求失败回调
    error: function ( XMLHttpRequest ) {
      //通讯失败并返回状态码
      alert("通讯失败：" + XMLHttpRequest.status)
    }
  })
}

function showRecommendContent() {
  $(".index-list").remove();
  $.ajax({
    type: "GET",
    url: "/news/recommends",
    data: {},
    dataType: "json",
    success: function ( data ) {
      renderList(data);
    },
    error: function ( XMLHttpRequest ) {
      //通讯失败并返回状态码
      alert("通讯失败：" + XMLHttpRequest.status)
    }
  })
}
