$(document).ready(function(){
	$(window).scroll(function () {  

			//console.log("导航条距顶部的距离"+$(".navbar").offset().top);
            //console.log($("#home nav .mobileNav").css('display'));
			//console.log("滚动的距离"+$(document).scrollTop());
            //PC端固定导航栏
            if ($("#home nav").offset().top<=$(document).scrollTop() && $("#home nav .mobileNav").css('display')==='none' ) {
            	$("#home nav").addClass("fixNav");
            }
            
            if($(document).scrollTop()+getViewportHeight()>$('.aboutLeft').offset().top+$('.aboutLeft').height()/2 && $(document).scrollTop()<$('.aboutLeft').offset().top+$('.aboutLeft').height()){
                $('.aboutLeft div').addClass("hello");
            }else{
                $('.aboutLeft div').removeClass("hello");
            }
            //PC端导航栏颜色变化
            if($(document).scrollTop()>600){
            	$("#home nav").addClass("bg");
            }else{
            	$("#home nav").removeClass("bg");
            }

            //getElementViewTop($("#works .workshow:eq(0)>div").get(0));
            //getViewport();
            //console.log('works1距文档顶部'+$("#works .workshow:eq(0)").offset().top);
            //导航条高度60，wroks展示模块高300
            for(var i=0;i<$("#works .workshow").length;i++){
                //console.log($("#works .workshow").eq(i).offset().top+50+'是works的距离');
                if($(document).scrollTop()+getViewportHeight()>$("#works .workshow").eq(i).offset().top+50 && $(document).scrollTop()+60<$("#works .workshow").eq(i).offset().top+300){
                    //console.log($("#works .workshow").eq(i).children('div.show'));
                    $("#works .workshow").eq(i).children('div.show').addClass("move");
                }else{
                    $("#works .workshow").eq(i).children('div.show').removeClass("move");
                }
            }
            
           
    });
	//点击导航按钮，页面滚动到目标位置
	$(".scroll").click(function(event){
        event.preventDefault();
        $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
    });

	//点击作品生成预览
	$("#works .describe").click(function(){
		$(this).parent().children('div.viewWork').removeClass('displayHidden');
	});

	$("#works .viewWork>i").click(function(){
		$(this).parent('div.viewWork').addClass('displayHidden');
	});
	//works鼠标悬停动画
	$("#works .describe").mouseover(function(){
		$(this).addClass('hoverAntimate');
	});
	$("#works .describe").mouseout(function(){
		$(this).removeClass('hoverAntimate');
	});


    function getViewportHeight(){
　　　　if (document.compatMode == "BackCompat"){
               return document.body.clientHeight;
                //console.log('页面高'+document.body.clientHeight);
　　　　} else {
               return document.documentElement.clientHeight;
                //console.log('页面高'+document.documentElement.clientHeight);
　　　　}
　　}
    

    //移动端导航栏
    $('#home .mobileNav').click(function(){
        $('#home .myNav').toggle();
    });
});