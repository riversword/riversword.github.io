window.onload=function(){

	//console.log('window.innerWidth'+window.innerWidth);//浏览器窗口大小,chrome
	var mainSwiper,
		experienceSwiper,
		lastSize=window.innerWidth;

	var music=new audioPlay('audio/guduxunli.mp3');//new Audio('audio/AlanWalker-Fade.mp3');//在注意此处文件路径是相对于html文件
	var menuButton = document.getElementsByClassName('menu-button')[0];
	var musicIcon=document.getElementsByTagName('nav')[0].getElementsByClassName('music-icon')[0];
	var navLi=document.getElementsByTagName('nav')[0].getElementsByTagName('li');

		mainSwiper = new Swiper('#main',{
				direction : 'vertical',
				mousewheelControl : true,
				keyboardControl : true,
				pagination : '.main-pagination',
				paginationClickable: true,
				speed:800,
				hashnav:true,
				onSlideChangeStart: function(swiper){
      				//console.log(swiper.activeIndex);
      				//for(obj in navLi){ obj.classList.remove('choose');}
      				for(var i=0;i<navLi.length;i++){navLi[i].classList.remove('choose');}
      				navLi[swiper.activeIndex].classList.add('choose');
    			}
			});


		if(window.innerWidth>460){
			experienceSwiper=new Swiper('#experience-box',{
				keyboardControl : true,
				pagination: '.experience-pagination',
        		effect: 'coverflow',
        		centeredSlides: true,
        		slidesPerView: 'auto',
        		coverflow: {
        		    rotate: 50,
        		    stretch: 0,
        		    depth: 100,
        		    modifier: 1,
        		    slideShadows : true
        		},
        		loop:true,
        		paginationClickable: true,
        		prevButton:'.swiper-button-prev',
				nextButton:'.swiper-button-next'
			});

			// experienceSwiper.effect='coverflow';
			// experienceSwiper.centeredSlides= true;
   //      	experienceSwiper.slidesPerView= 'auto';
   //      	experienceSwiper.coverflow={
   //      		    rotate: 50,
   //      		    stretch: 0,
   //      		    depth: 100,
   //      		    modifier: 1,
   //      		    slideShadows : true
   //      		};

		}else{
			experienceSwiper=new Swiper('#experience-box',{
				pagination: '.experience-pagination',
				paginationClickable: true,
				effect : 'cube',
				cube: {
				  	slideShadows: true,
				  	shadow: true,
				  	shadowOffset: 20,
				  	shadowScale: 0.94
				},
				loop:true,
			});
			//
			// experienceSwiper.effect ='cube';
			// experienceSwiper.cube={
			// 	  	slideShadows: true,
			// 	  	shadow: true,
			// 	  	shadowOffset: 20,
			// 	  	shadowScale: 0.94
			// 	};
			// experienceSwiper.centeredSlides= false;
   //      	experienceSwiper.slidesPerView= 0;

		}




	
	menuButton.onclick=function(){
		menuButton.classList.toggle('cross');
		document.getElementsByTagName('nav')[0].classList.toggle('open');
		document.getElementsByClassName('screen-cover')[0].classList.toggle('open');
		//music.play();

	}

	
	musicIcon.onclick=function(){
		this.classList.toggle('spin');
		//console.log(this.getAttribute("class"));
		//console.log(music.loop);
		if(this.getAttribute("class")=='music-icon spin'){
			music.play();
		}else{
			music.stop();
		}
	}

	
	for(var i=0;i<navLi.length;i++){
		let j=i;
		navLi[j].onclick=function(){
			mainSwiper.slideTo(j, 800, false);//切换到第一个slide，速度为1秒
			for(var i=0;i<navLi.length;i++){navLi[i].classList.remove('choose');}
      		navLi[j].classList.add('choose');
			menuButton.click();
		}
	}


	function limitNum(a){
		for(var i=0;i<6;i++){
			var str=articleCon[i].innerText;
			if(str.length>a){
				str = str.substr(0,a) + '...'; 
				articleCon[i].innerText=str;
			}
		}
	}

	function audioPlay(url){
		this.audio= new Audio(url);
		this.audio.loop='loop';//循环播放
    }

    audioPlay.prototype.play =function(){
         this.audio.play();
     };

    audioPlay.prototype.stop =function(){
         this.audio.pause();
     };
   
}