    $(document).ready(function() {
        //设置选项卡
        $("#s1").click(function() {
            $("#c2").addClass("hide");
            $("#c1").removeClass("hide");

        });
        $("#s2").click(function() {
            $("#c1").addClass("hide");
            $("#c2").removeClass("hide");

        });
        $("#s3").click(function() {
            $("#c2").addClass("hide");
            $("#c1").removeClass("hide");

        });
        $("#s4").click(function() {
            $("#c1").addClass("hide");
            $("#c2").removeClass("hide");

        });
        $("#s5").click(function() {
            $("#c2").addClass("hide");
            $("#c1").removeClass("hide");

        });
        $("#s6").click(function() {
            $("#c1").addClass("hide");
            $("#c2").removeClass("hide");

        });


        /*以上仅为实现选项卡切换，请忽略*/
        /* 以下注释为我以前用php时书写的代码，仅供参考*/
   

   /*     //
        //设置内容更新
        //立即执行
        (function(){
    showContent();
   
})();
//
//
//显示内容

function showContent(){
    //清空所有内容
    $(".index-list").remove();
    $.ajax({
        type:"GET",
        url:"js8.php",
        data:{
            newsType:"news"
        },
        dataType:"json",
        success: function(data){
            //如果该类新闻列表无新闻，显示列表为空，否则将内容添加到html中
            if (data=="blank") {
                $("<div>").addClass(".index-list").attr("style","text-align:center").text($(".type-text-active").text()+"新闻列表为空").appendTo(".news-container");

            }else{
                //遍历每一条新闻
                $.each(data,function(index,value){
                    var newsBox=$("<div>").addClass(".index-list").appendTo("#c1").on("click",function(){
                        $(".home-page").hide();
                        $(".content-page").show();
                        $(".cp-head-title").text(value.title)
                    });
                    //判断图片链接是否为空
                    var mainImg=$("<div>").addClass(".index-list-image").appendTo(newsBox);
                    if (value.pic) {
                        $("<img>").attr("src",value.newsimg).appendTo(mainImg);
                    }

                    var title = $("<div>").appendTo(newsBox);
                    $("<h3>").text(value.newstitlte).appendTo(title);

                    var mainText = $("<div>").addClass(".index-list-main-text").appendTo(newsBox);
                    $("<div>").text(value.newscontent).appendTo(mainText);
                   
                })
            }
        },    
        error:function(XMLHttpRequest){
            //通讯失败并返回状态码
            alert("通讯失败："+ XMLHttpRequest.status)
        },
    })
}
*/
});
