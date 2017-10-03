/*
* @Author: lenovo
* @Date:   2017-07-20 21:35:22
* @Last Modified by:   lenovo
* @Last Modified time: 2017-07-21 10:16:23
*/

'use strict';
$(function(){
	$(".home>a").click(function(){
		$(".down").slideToggle(500)
	});

	var top=$(".bgm").find(".page");
	var tops=top.offset().top;
	var cy=$(document.body).scrollTop();
	var flag=true;
	var me=$("#me").offset().top-500;
	var one=$(".one");
	var cw=window.innerWidth;
	window.onresize=function(){
		console.log(window.innerWidth)
		cw=window.innerWidth;
			if(cw<996){
				flag=false;
				$(".banner").css("display","none")
			}
	}
	window.onscroll=function(){
		cy=$(document.body).scrollTop();
		var scr=0;
		one.each(function(index,value){
			if(cy>=$(value).offset().top-350){
				$(".banner-l li").removeClass("border").eq(index).addClass('border');
			}
		})
		if(tops<cy){
			if(flag&&cw>=996){
				flag=false;
				$(".banner").slideDown('300', function() {
					flag=true;
				});	
			};
		}else{
			flag=false;
			$(".banner").slideUp("300",function(){
					flag=true;
			})
		}
		if(me<cy){
			$("#me").find(".auto").addClass("animated rotateIn")
		}

	}
	
	// 轮播图
 	var bo=$(".bo");
 	var lis=$(".fang>li");
 	var cir=$(".circlew li")
 	var now=0;
 	var next=0;
 	var kai=true;
 	var width=bo.width();
 	function move(map="r"){
 		if(!kai){
 			return;
 		}
 		kai=false;
 		if(map=="r"){
 			next=now+1;
	 		if(next>=lis.length){
	 			next=0;
	 		};
	 		lis.eq(next).css("left",width);
 			lis.eq(now).animate({left:-width},300,'linear');
 			lis.eq(next).animate({left:0},300,'linear',function(){
 				kai=true;
 			});
 		}
 		if(map =='l'){
 			next=now-1;
	 		if(next<0){
	 			next=lis.length-1;
	 		};
	 		lis.eq(next).css("left",-width);
 			lis.eq(now).animate({left:width},300,'linear');
 			lis.eq(next).animate({left:0},300,'linear',function(){
 				kai=true;
 			});
 		};
 		cir.removeClass().eq(next).addClass('active');
 		now=next;
 	}
	var t=setInterval(move,5000);
	$(".left").click(function(){
		move("l")
	})
	$(".right").click(function(){
		move("r")
	})
	cir.click(function(){
		var index=$(this).index();
		if(index>now){
			if(!kai){
 			return;
	 		}
	 		kai=false;
			index=now-1;
	 		if(index<0){
	 			index=lis.length-1;
	 		};
	 		lis.eq(index).css("left",-width);
 			lis.eq(now).animate({left:width},300,'linear');
 			lis.eq(index).animate({left:0},300,'linear',function(){
 				kai=true;
 			});
		}
		if(index<now){
			if(!kai){
 			return;
	 		}
	 		kai=false;
 			index=now+1;
	 		if(index>=lis.length){
	 			index=0;
	 		};
	 		lis.eq(index).css("left",width);
 			lis.eq(now).animate({left:-width},300,'linear');
 			lis.eq(index).animate({left:0},300,'linear',function(){
 				kai=true;
 			});
		}
		if(index==now){
			kai=true;
		}
		cir.removeClass().eq(index).addClass('active');
		now=index;
	})
	bo.hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,5000)
	})



})