window.onload=function(){
	var flag = true
	$('.img-one').click(function(){
		if(flag){
			$('#fix_right').css('width','310px');
			flag = false;
		}else{
			$('#fix_right').css('width','40px');
			flag = true
		}
		
			
	})
	
	//左边楼层
	$(document).scroll(function(){
		var a=$('body').scrollTop();
		if(a>300){
			$('#fix_left').show(1000)
		}
		else{
			$('#fix_left').hide(1000)
		}
	})
	
	//返回顶部
	$('.top').click(function(){
		$('html,body').scrollTop(0)
	})
	
	//吸顶效果
	$(document).scroll(function(){
		var a=$('body').scrollTop();
		if(a>500){
			$('#TOP').slideDown(1000)
		}
		else{
			$('#TOP').slideUp(1000)
		}
	})
	//广告
	$('.guanggao').hover(function(){
		if(!$('.bian').is(':animated')){
			$('.bian').animate({
			width:'1100px'
		})
		}
		
	},function(){
		$('.bian').animate({
			width:'0px'
		})
	})
	//轮播
	var sum=0;
	var move=setInterval(love,2000);
	$('.anniu ul li').eq(0).css('background','rgb(219,25,42)')
	function love(){
		sum++;
		if(sum>=8){
			sum=0
		}
		$('.lunbo-one>img').fadeOut(1000).eq(sum).fadeIn(1000)
		$('.anniu ul li').css('background','').eq(sum).css('background','rgb(219,25,42)')
	}
	$('.lunbo-one').hover(function(){
		clearInterval(move)
	},function(){
		move=setInterval(love,2000);
	})
	$('.anniu ul li').mouseover(function(){
		clearInterval(move);
//		$('.lunbo-one>img').stop(false,true);
		var index=$(this).index('.anniu ul li')
		$('.lunbo-one>img').fadeOut(2000).eq(index).fadeIn(2000)
		$('.anniu ul li').css('background','').eq(index).css('background','rgb(219,25,42)');
		index=$(this).index()
	
	})
	$('.right').click(love)
	$('.left').click(function(){
		clearInterval(move);
		sum--;
		if(sum<-7){
			sum=0;
		}
		$('.lunbo-one>img').fadeOut(1000).eq(sum).fadeIn(1000)
		$('.anniu ul li').css('background','').eq(sum).css('background','rgb(219,25,42)');
		$(this).index()=sum;
		
	})
	//tab
	var oLi=document.querySelectorAll('.tab>div');
		var oUl=document.querySelectorAll('.evey');
			for (var i = 0; i < oLi.length; i++) {
				oLi[i].index=i;				
				oLi[i].onmouseover=function(){
					for (var j = 0; j < oUl.length; j++) {				
						oUl[j].style.display='none';	
						oLi[j].style.borderBottom='0px';
					}					
					oLi[this.index].style.borderBottom='2px solid #EE0324';
					oUl[this.index].style.display='block';					
				}
				oLi[i].onmouseout=function(){
					oLi[this.index].style.borderBottom='';
				}
			}
			
	//right广告
	
	$('#fix_right ul li').hover(function(){	
		var index=$(this).index()
		$('#fix_right ul li div').eq(index).addClass('move')
	},function(){
		var index=$(this).index()
		$('#fix_right ul li div').eq(index).removeClass('move')
	})
	
	//tab2
	$('.tab-one>ul>li').eq(0).css('border-bottom','2px solid red');
	
	$('.tab-one>ul>li').mouseover(function(){
		var index=$(this).index()
		$('.tab-one>ul>li').css('border-bottom','').eq(index).css('border-bottom','2px solid red');
		$('.tab-one>ul>li>ul').css('display','none').eq(index).css('display','block')
	})
	
	
	//楼层效果
	$('.apple').click(function(){
		var love=$(this).index();
		var son=$('.banner').eq(love).offset().top-80;
		$('body,html').animate({
			scrollTop:son
		})
	})
//滑动变色
$(document).scroll(function(){
			var love=$(this).scrollTop();
			$('.banner').each(function(i,obj){
				var move=$(obj).offset().top-80
				if(love>=move){
				$('.apple').css('background','').eq(i).css('background','#d70b1c')
				}
			})
		})
	
	
	
	//小广告
	var num=0;
	var a=$('.tai ul li').width();
	var OLi=$('.tai ul li').eq(0).clone();
		$('.tai ul').append(OLi);
		$('.dao-right').click(function (){
			console.log(num)
			if(!$('.tai ul').is(':animated')){
				num++;	
			if(num>=4) {
				num=1;
				$(this).prev().prev().css('left','0px')
			} 
			$(this).prev().prev().animate({
				left:-num*a+'px'
			},1000)
			}									
		})
		//左按钮
		
		$('.dao-left').click(function(){		
		if(!$('.tai ul').is(':animated')){
				num--;
				console.log(num)
			if(num<0){
				num=2;
				$(this).prev().css('left',-(num+1)*a+'px')				
			}
			$(this).prev().animate({
				left:-num*a+'px'
			},1000)
			}
		})
	
	//倒计时
	 function GetRTime(){
       var EndTime= new Date('2017/12/30 22:00:00');
       var NowTime = new Date();
       var t =EndTime.getTime() - NowTime.getTime();
       var d=Math.floor(t/1000/60/60/24);
       var h=Math.floor(t/1000/60/60%24);
       var m=Math.floor(t/1000/60%60);
       var s=Math.floor(t/1000%60);

       document.getElementById("a").innerHTML = d + "天";
       document.getElementById("b").innerHTML = h + "时";
       document.getElementById("c").innerHTML = m + "分";
       document.getElementById("d").innerHTML = s + "秒";
   }
   setInterval(GetRTime,0);
   
   //获取数据
  						
	var shuju = localStorage.getItem('zhanghao');
	
	if(shuju!=''){
		$('#hao').text('你好!'+shuju)	.css('color','#C10001');
		$('.beijing').append($('<div>退出</div>').addClass('dongbei'));
		$('.header-right').css('width','790px');
		$('.beijing').css({width:'100px',height:'30px'});	
	}
	else{
		$('.header-right').css('width','790px')
			}
		$('.dongbei').click(function(){
		$('#hao').text('您好！请登录')	;
		$('.dongbei').css('display','none')
	})
   
   
}
