$(function() {
	//滚轮事件
	//声明当前第几屏
	var num = 0;
	$(document).mousewheel(function(event,delta){
		//测试滚轮事件是否执行
		
		/*
		0    -1
		1    -1
		2    -1 
		3  

		*/
		//判断当前是否有动画执行，没有动画执行，才做这个
		if( !$('.wrapBox').is(':animated') ){

			num = num-delta
			console.log(num);
			//如果往上滚动，小于0的时候，等于0
			if(num < 0){
				num=0;
			}
			if(num > 5){
				num = 5;
			}
			//编号*100%
			$('.wrapBox').animate({
				top:-num*100+'%'
			},1000);

		}
	});
});