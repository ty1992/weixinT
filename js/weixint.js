$(function() {
	//滚轮事件
	//声明当前第几屏
	var num = 0;
	//2.声明一个变量，用于保存当前的状态
	var flag = 1;//只有1的情况下，才可以滚动
	$(document).mousewheel(function(event,delta){
			//如果这个动画执行完毕之后，不允许再执行后边的动画；
		if(flag ==1){
			flag = 2;
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
			},1000,function(){
				flag=1;
			});
		}
			
	});

	$('buttom:eq(0)').click(function(event) {
		$('.box').removeClass('out')
	});
});