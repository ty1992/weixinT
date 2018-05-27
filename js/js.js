$(function() {
	var num=0;
	var flag=1;
	$('.box').eq(0).removeClass('out');
	$(document).mousewheel(function(event,dalta){
		if(flag==1){
			flag=2;
			$('.box').eq(num).addClass('out');
			num=num-dalta;
			if(num<0){
			num=0;
			}else if(num>5){
			num=5;
			}
			$('.warpbox').stop().animate({
			top:-num*100+'%',
			},1000,function(){
				flag=1;
			});
			$('.nav ul li').eq(num).addClass('current').siblings('li').removeClass('current');
			$('.box').eq(num).removeClass('out');
		}
	})
	$('.kefu').mouseover(function(){
		$(this).css({display:'none'});
		$('.kefuh').css({display:'block'});
	})
	$('.kefuh').click(function(){
		$(this).css({display:'none'});
		$('.kefu').css({display:'block'});
	})
	var attr=['首 页','购买需求','合作愉快','一路顺风','加入我们','好不阿訇']
	$('.nav li').bind({
		mouseover:function(){
			var index=$(this).index();
			var tag=$('<span>'+attr[index]+'</span>')
			$(this).append(tag);	
		},
		mouseout:function(){
			$(this).children('span').remove();
		},
		click:function(){
			$('.box').eq(num).addClass('out');
			var index=$(this).index();
			$('.warpbox').stop().animate({
				top:-index*100+'%',
			},1000);
			$(this).addClass('current').siblings('li').removeClass('current');
			num=index;
			$('.box').eq(num).removeClass('out');
		}
	});
});