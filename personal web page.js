$(document).ready(function(){
	$(window).scroll(function () {  

            //under PC model, when scroll to "about" section, fix the navigation bar to top 
            if ($("#home nav").offset().top<=$(document).scrollTop() && $("#home nav .mobileNav").css('display')==='none' ) {
            	$("#home nav").addClass("fixNav");
            }
            //change the navigation's background color
            if($(document).scrollTop()>600){
                $("#home nav").addClass("bg");
            }else{
                $("#home nav").removeClass("bg");
            }

            //when scroll to "about" section, trigger the hello animation in "about" section
            if($(document).scrollTop()+getViewportHeight()>$('.aboutLeft').offset().top+$('.aboutLeft').height()/2 && $(document).scrollTop()<$('.aboutLeft').offset().top+$('.aboutLeft').height()){
                $('.aboutLeft div').addClass("hello");
            }else{
                $('.aboutLeft div').removeClass("hello");
            }
            
            //show the animation in "works" section , 60 is the navigation's height nearly , 300 is the workshow'height
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

	//click the button in navigation, then go the section
	$(".scroll").click(function(event){
        event.preventDefault();
        $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
    });

	//click the "workshow" in "works" section, show the demo
	$("#works .describe>p").click(function(){
		$(this).parent().parent().children('div.viewWork').removeClass('displayHidden');
	});

	$("#works .viewWork>i").click(function(){
		$(this).parent('div.viewWork').addClass('displayHidden');
	});

	//when the mouse hover the "workshow", show the introduction
	$("#works .describe").mouseover(function(){
		$(this).addClass('hoverAntimate');
	});
	$("#works .describe").mouseout(function(){
		$(this).removeClass('hoverAntimate');
	});
    
    //under mobile model, show/hide the navigation when click the menu icon
    $('#home .mobileNav').click(function(){
        $('#home .myNav').toggle();
    });

    //form mobile to PC model, show the navigation bar 
    $(window).resize(function(){
        if(document.body.clientWidth > 500){
            $('#home .myNav').show();
        }
    });
    
    //get the document's height
    function getViewportHeight(){
　　　　if (document.compatMode == "BackCompat"){
               return document.body.clientHeight;
　　　　} else {
               return document.documentElement.clientHeight;
　　　　}
　　}
    
});