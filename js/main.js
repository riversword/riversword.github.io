window.onload = function () {

	var mainSwiper,
		worksSwiper,
		lastSize = window.innerWidth;

	var navLinks = document.getElementsByClassName('nav-link');

    //初始化主页面的 swiper
	mainSwiper = new Swiper('#main',{
			direction: 'vertical',
			mousewheelControl: true,
			keyboardControl: true,
			pagination: '.main-pagination',
			paginationClickable: true,
			speed:800,
			hashnav:true,
			onSlideChangeStart: function (swiper) {
  				for (var i=0; i < navLinks.length; i++) {
  					navLinks[i].classList.remove('active-link');
  				}
  				navLinks[swiper.activeIndex].classList.add('active-link');
			}
		});

	var wordsT = "Hello World,I'm NewJean",
		wordsP1 = "我是刘剑",
		wordsP2 = "一名前端爱好者",
		curStr= "",
		timer=null;

	var wordBox=document.getElementById('home').getElementsByTagName('h1')[0].getElementsByTagName('span')[0],
		wordBoxShink=document.getElementById('home').getElementsByTagName('h1')[0].getElementsByTagName('span')[1],
		wordBox2=document.getElementById('home').getElementsByTagName('p')[0].getElementsByTagName('span')[0],
		wordBox2Shink=document.getElementById('home').getElementsByTagName('p')[0].getElementsByTagName('span')[1],
		wordBox3=document.getElementById('home').getElementsByTagName('p')[1].getElementsByTagName('span')[0],
		wordBox3Shink=document.getElementById('home').getElementsByTagName('p')[1].getElementsByTagName('span')[1];


    //初始化项目页面的 swiper
    var worksSwiper = new Swiper("#works-box",{
            // autoplay: 3e3,
            speed: 1e3,
            loop: !0,
            runCallbacksOnInit: !1,
            watchSlidesProgress: !0,
            // pagination: ".apple-banner .swiper-pagination",
            paginationClickable: !0,

            //mousewheelControl: true,
            keyboardControl: true,

            pagination: '.works-pagination',
            

            // paginationBulletRender: function(a, b, c) {
            //     return '<li class="' + c + '"><span><i></i></span></li>'
            // },

            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",

            onProgress: function(a) {
                var b, c, d, e, f, g;
                for (b = 0; b < a.slides.length; b++) {
                    for (c = a.slides.eq(b),
                    d = c[0].progress,
                    d > 0 ? (e = .9 * d * a.width,
                    scale = 1 - .1 * d,
                    d > 1 && (scale = .9),
                    txtPositionX = 0,
                    txtPositionY = 30 * d + "px") : (e = 0,
                    scale = 1,
                    txtPositionX = 1e3 * -d + "px",
                    txtPositionY = 0),
                    f = c.find(".txt"),
                    g = 0; g < f.length; g++)
                        f.eq(g).transform("translate3d(" + txtPositionX + "," + txtPositionY + ",0)");
                    c.transform("translate3d(" + e + "px,0,0) scale(" + scale + ")")
                }
            },

            onSetTransition: function(a, b) {
                var c, d, e;
                for (c = 0; c < a.slides.length; c++)
                    for (slide = a.slides.eq(c),
                    slide.transition(b),
                    d = slide.find(".txt"),
                    e = 0; e < d.length; e++)
                        d.eq(e).transition(b)
            },

            onSlideChangeStart: function(a) {
                a.autoplaying && (a.bullets.eq(a.realIndex - 1).addClass("replace"),
                a.bullets.eq(a.realIndex - 1).removeClass("current firsrCurrent"),
                a.bullets.eq(a.realIndex).addClass("current"),
                0 == a.realIndex && a.bullets.removeClass("replace"))
            },
            // onAutoplayStop: function(a) {
            //     a.$(".autoplay").removeClass("autoplay")
            // }
        });




    //首页文字动画
	//hello world
	addWord(wordsT.slice(0, 11), wordBox, curStr, reduce1);

	//hello world --> hello
	function reduce1 () {
		setTimeout(function () {
			curStr = wordBox.innerHTML;
			reduceWord(wordBox, curStr, 6, add2);
		}, 500);
		
	}

	//hello --> hello,I'm NewJean
	function add2 () {
		setTimeout(function () {
			curStr = wordBox.innerHTML;
			addWord(wordsT.slice(11), wordBox, curStr, function () {
				wordBoxShink.classList.add('display-none');
				wordBox2Shink.classList.remove('display-none');
				add3();
			});
		}, 500);
		
	}

	//我是刘剑
	function add3 () {
		setTimeout(function () {
			curStr="";
			addWord(wordsP1, wordBox2, curStr, function () {
				wordBox2Shink.classList.add('display-none');
				wordBox3Shink.classList.remove('display-none');
				add4();
			});
		}, 500);
	}

	//一名前端爱好者
	function add4 () {
		setTimeout(function () {
			curStr="";
			addWord(wordsP2, wordBox3, curStr, function () {
				wordBox3Shink.classList.add('display-none');
			});
		}, 500);
	}

	//str表示待添加的字符串，target表示添加的目标位置，curStr表示现在目标位置中的字符串，callback回调函数
	function addWord (str, target, curStr, callback) {
		var curNum = 0;
		var time1 = new Date();
		timer = setInterval(function () {
			if (curNum == str.length) {
				clearInterval(timer);
				if (callback) {
					callback();
				}
			} else {
				curStr += str[curNum];
				target.innerHTML = curStr;
				curNum++;
			}
		}, 200);
	}

	//target表示待修剪的元素，curStr表示待修剪元素的内容，num表示删除target尾部的字符数，callback回调函数
	function reduceWord (target, curStr, num, callback) {
		var time1=new Date();
		timer = setInterval(function(){
			if (num == 0) {
				clearInterval(timer);
				if (callback) {
					callback();
				}
			} else {
				curStr = curStr.slice(0,curStr.length-1);
				target.innerHTML = curStr;
				num--;
			}
		},100);
	}


	for (var i=0; i<navLinks.length; i++) {
		let j = i;
		navLinks[j].onclick = function () {
			//console.log("被点击了 滑动到对应页面");
			mainSwiper.slideTo(j, 800, false);//切换到第一个slide，速度为1秒
			for (var i=0; i<navLinks.length; i++) { 
				navLinks[i].classList.remove('active-link');
			}
      		navLinks[j].classList.add('active-link');
		}
	}

    document.getElementById("next_btn").onclick = function () {
        mainSwiper.slideTo(1, 800, false);
        navLinks[1].classList.add('active-link');
        navLinks[0].classList.remove('active-link');
    };

	function limitNum (a) {
		for (var i=0; i<6; i++) {
			var str = articleCon[i].innerText;
			if(str.length > a){
				str = str.substr(0,a) + '...'; 
				articleCon[i].innerText = str;
			}
		}
	}
   
}