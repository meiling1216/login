$(document).ready(function(e){
	// 登陆
	$("#login").click(function(){
		var name=$("#username").val();
		var password=$('#password').val();
		if(name.length == 0){
			layer.msg('账号不能为空');
			return;
		}else if(password.length == 0){
			layer.msg('密码不能为空');
			return;
		}else{
			$.post("http://interview.emicmh.com/login",{
				name:name,
				password:password
			},function(data){
				if(data.code==200){
					location.href="index.html"
				}else{
					layer.msg(data.info);
				}
			})
		}
	});
	// 注册
	$("#regist").click(function(){
		var name=$("#username").val();
		var password=$('#password').val();
		if(name.length == 0){
			layer.msg('账号不能为空')
			return;
		
		}else if(password.length == 0){
			layer.msg("密码不能为空")
			return;
		}else{
			$.post("http://interview.emicmh.com/signup",{
				name:name,
				password:password
			},function(data){
				layer.msg(data.info);
			})
		}
	})
	// 退出登录
	$('#out').click(function(){
 		$.get("http://interview.emicmh.com/logout",function(data){
			if(data.code==200){
				location.href="login.html"
			}else{
				layer.msg(data.info);
			}
		})
	})
	

	// 首页页面展示
	var $width = $(window).width();
    var $height = $(window).height();
    if($width <= 1024){
      $width = 1024;
    }
    $("body").css({width:$width,height:$height});
    $("body > div.box").css({width:$width,height:$height});
    $("body div.box-left").css({height:$height});
    $("body div.box-right").css({height:$height});
})