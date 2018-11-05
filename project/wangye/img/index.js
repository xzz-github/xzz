$(function(){
	//锚点链接
	$('a[href*=#],area[href*=#]').click(function(){
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			if($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset},800);
				return false;
			}
		}
	});
	//选项卡
	var _index=0;
	$('.choose a').on('mouseover',function() {
		_index = $('.choose a').index(this);
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab li').eq(_index).addClass('active').siblings().removeClass('active');
	});
	//更多
	$('.choose .more').on('click',function(){
		if (_index===0) {
			window.open('http://cave.leiting.com/news.html');
		// } else if(_index==1){
			// window.open('http://cave.leiting.com/news.html?t=notice');
		}else{
			window.open('http://cave.leiting.com/raider.html');
		}
	})
})
//关闭悬浮框
$('.flo .flo_close').on('click',function(){
	$('.flo').fadeOut();
})
//全服奖励
$('.btn_welfare').on('click',function(){
	$('.mask,.pop1').removeClass('hid');
	$('.pop1').addClass('bounceIn');
})
//选择手机操作系统
var pop_index=0;
$('.pop_choose a').on('click',function(){
	pop_index=$('.pop_choose a').index(this);
	$(this).addClass('active').siblings().removeClass('active');
})
//确认继续
$('.btn_on').on('click',function(){
	$('.pop1').removeClass('bounceIn').addClass('hid');
	if(pop_index==0){
		$('.pop2').removeClass('hid').addClass('bounceIn');
	}else{
		$('.pop3').removeClass('hid').addClass('bounceIn');
	}
})
//错误提示
function showError(msg){
	$('.error').text('※ '+msg).animate({'opacity':'1'},1000);
}
function hideError(){
	$('.error').text('').css('opacity','0');
}
$('.make input').on('focus', function(){
	hideError();
});
var activityUrl = "http://activity.leiting.com";
var id = "activity";
function getCaptchaUrl(){
	var timestamp = (new Date()).valueOf();
	id = "activity" + timestamp + parseInt(10*Math.random()) + parseInt(10*Math.random()) + parseInt(10*Math.random());
	return "http://captcha.leiting.com/captcha/get.do?id=" + id;
}
function changeCaptchaImage() {
	var imageSrc = getCaptchaUrl();
	$('.captcha input').val('');
	$('.captcha img').attr('src', imageSrc);
}
//领取礼包
var submited = 0;
$('.btn_lqlb').on('click',lq=function(){
	if(submited==1) {
		showError('正在领取，请稍后！');
		return false;
	}
	var tel=$('.tel input').val();//手机号
	var code=$('.code input').val();//短信验证码
	var pattern = /^1[3456789][0123456789]\d{8}$/; //判断手机号
	if(tel==''){
		showError('请先输入你的手机号~');
		return false;
	}
	if(!pattern.test(tel)){
		showError('请输入正确的手机号~');
		return false;
	}
	if(code==''){
		showError('请先输入短信验证码~');
		return false;
	}
	hideError();
	submited = 1;
	$.ajax({
		url: activityUrl + '/cave/201802/gift/common/getGift.php',
		data:{
    		'phone':tel,
    		'code':code
		},
		jsonp: 'jsonpcallback',
		dataType:'jsonp',
		success: function(data) {
			submited = 0;
			if(data.status=='1' || data.status=='60009'){
				$('.pop3').addClass('hid').removeClass('bounceIn');
				$('.pop4').removeClass('hid').addClass('bounceIn');
				$('.pop4 input').val(data.message);
			}else{
				showError(data.message);
			}
		},
		error: function(e) {
			submited = 0;
			showError('网络异常，请稍后再试');
		}
	});
})
//点击获取验证码
$('.code span').on('click',getMsg=function(){
	var tel=$('.tel input').val();//手机号
	var pattern = /^1[3456789][0123456789]\d{8}$/; //判断手机号
	if(tel==''){
		showError('请先输入你的手机号~');
		return false;
	}
	if(!pattern.test(tel)){
		showError('请输入正确的手机号~');
		return false;
	}
	$('.make .code,.make .btn_lqlb').addClass('hid');
	$('.make .captcha,.make .btn_sure').removeClass('hid');
	changeCaptchaImage();
	$('.tel input').attr('disabled',true);
})
//（图形验证）获取短信
var click = false;
$('.make .btn_sure').on('click',function(){
	if(click){
		return false;
	}
	var tel=$('.tel input').val();//手机号
	var captcha=$('.captcha input').val();//图形验证码
	if(captcha==''){
		showError('请先输入图形验证码~');
		return false;
	}
	hideError();
	click = true;
	$.ajax({
    url : activityUrl + '/cave/common/sendPhoneCode.php',
		jsonp: 'jsonpcallback',
		dataType:'jsonp',
		data: {
			'phone':tel,
			'captcha':captcha,
			'id':id,
			'type': 2
		},
    success: function(data) {
			click = false;
   		if(data.status=='success'){
				$('.make .code,.make .btn_lqlb').removeClass('hid');
				$('.make .captcha,.make .btn_sure').addClass('hid');
				handler();
    	}else{
				showError(data.message);
				changeCaptchaImage();
    	}
    },
		error: function(e) {
			click = false;
			showError('网络异常，请稍后再试');
		}
	});
})
//倒计时
var times;
function handler(){
	$('.tel input').attr('disabled',false);
	$('.code span').unbind('click',getMsg).text('60s后重置').addClass('hui');
	showError('短信发送中，请稍后！');
	var i=60;
	times=setInterval(function(){
		i--;
		$('.code span').text(i+'s后重置');
		if(i<0){
			clearInterval(times);
			$('.code span').empty().text('获取验证码').bind('click',getMsg).removeClass('hui');
		}
	}, 1000);
};
//关闭弹窗
$('.pop .pop_close,.pop2 .btn_sure,.pop5 .btn_know').on('click',function(){
	$('.mask,.pop').addClass('hid');
	$('.pop').removeClass('bounceIn');
	clear_input();
})
//清空操作
function clear_input(){
	$('input').val('');
	$('.make .entry,.make .pop_btn').addClass('hid');
	$('.make .tel,.make .code,.make .btn_lqlb').removeClass('hid');
	$('.make .tel input').attr('disabled',false);
}
//安卓下载
/*$('.btn_Android,.btn_android2').on('click',function(){
	$('.mask,.pop5').removeClass('hid');
	$('.pop5').addClass('bounceIn');
})*/
//IE
if(!!window.ActiveXObject || "ActiveXObject" in window){
	alert('亲，您的浏览器过于陈旧，无法呈现HTML5完美效果，建议您使用谷歌浏览器观看。');
}
//联系客服
$('.nav5').on('click', function(){
	$('.shadow,.pop_kf').removeClass('hid');
	$('.pop_kf').addClass('bounceIn');
})
$('.shadow').on('click', function(){
	$('.shadow,.pop_kf').addClass('hid');
})
$('.navigation6').hover(function(){
		$('.navigation  ul li.navigation6 p').css('display','block').addClass('translateY');
	},function(){
		$('.navigation  ul li.navigation6 p').css('display','none').removeClass('translateY');
});
