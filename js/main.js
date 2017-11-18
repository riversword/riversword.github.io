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

		var wordsT="Hello World,I'm NewJean",
			wordsP1="我是刘剑",
			wordsP2="一名前端爱好者",
			curStr="",
			//curNum=0,
			timer=null;
		var wordBox=document.getElementById('home').getElementsByTagName('h1')[0].getElementsByTagName('span')[0],
			wordBoxShink=document.getElementById('home').getElementsByTagName('h1')[0].getElementsByTagName('span')[1],
			wordBox2=document.getElementById('home').getElementsByTagName('p')[0].getElementsByTagName('span')[0],
			wordBox2Shink=document.getElementById('home').getElementsByTagName('p')[0].getElementsByTagName('span')[1],
			wordBox3=document.getElementById('home').getElementsByTagName('p')[1].getElementsByTagName('span')[0],
			wordBox3Shink=document.getElementById('home').getElementsByTagName('p')[1].getElementsByTagName('span')[1];

			//console.log(wordBox2);
		//console.log(wordBox);
		setTimeout(function(){
			addWord(wordsT.slice(0,11),wordBox,curStr);
		},1000);
		
		setTimeout(function(){
			//console.log(wordBox.innerHTML);//Hello world
			//console.log(curStr);//空
			curStr=wordBox.innerHTML;
			reduceWord(wordBox,curStr,6);
		},5800);

		setTimeout(function(){
			//console.log(wordBox.innerHTML);//Hello
			//console.log(curStr);//Hello world
			curStr=wordBox.innerHTML;
			//console.log("赋值后curStr="+curStr);
			//console.log(wordsT.slice(11));
			//curNum=0;
			addWord(wordsT.slice(11),wordBox,curStr);
		},8000);

		setTimeout(function(){
			wordBoxShink.classList.add('display-none');
			wordBox2Shink.classList.remove('display-none');
		},12500);

		setTimeout(function(){
			curStr="";
			addWord(wordsP1,wordBox2,curStr);
		},12800);

		setTimeout(function(){
			wordBox2Shink.classList.add('display-none');
			wordBox3Shink.classList.remove('display-none');
		},14500);

		setTimeout(function(){
			curStr="";
			addWord(wordsP2,wordBox3,curStr);
		},14800);

		setTimeout(function(){
			wordBox3Shink.classList.add('display-none');
		},17500);

		//str表示待添加的字符串，target表示添加的目标位置,curStr表示现在目标位置中的字符串
		function addWord(str,target,curStr){
			var curNum=0;
			var time1=new Date();
			timer=setInterval(function(){
				if(curNum==str.length){
					clearInterval(timer);
					console.log(new Date()-time1+"加花时间");//3601

					//如果传入减的参数，则执行减
					/*setTimeout(function(){
						reduceWord(target,curStr,6);
						console.log('测试成功！');
					},800);*/

				}else{
					curStr+=str[curNum];
					target.innerHTML=curStr;
					curNum++;
				}
			},300);
		}

		//target表示待修剪的元素，curStr表示待修剪元素的内容，num表示删除target尾部的字符数
		function reduceWord(target,curStr,num){
			var time1=new Date();
			timer=setInterval(function(){
				if(num==0){
					clearInterval(timer);
					//
					console.log(new Date()-time1+"减花时间");
				}else{
					curStr=curStr.slice(0,curStr.length-1);
					target.innerHTML=curStr;
					num--;
				}
			},200);
		}


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