/**
 * 
 */
// id 정규식 체크
$(function(){
	$("#id").on("keyup", function() {
		idval = $("#id").val().trim();
		regid = /^[a-z][a-zA-Z0-9]{3,11}$/;
		if (!(regid.test(idval))) {// 정규식.test(value)
			$(this).parents(".form-group").find(".sp").empty();
			$("#idmsg").html("올바른 형식이 아닙니다.").css("color", "red").css("font-size", "0.7em");
			return;
		} else {
			$("#idmsg").empty();
		}
	})

	// 정규식 체크 메소드
	function regtest(reg, val, target, text) {
		sp = $(target).parents(".form-group").find(".sp");
		msg = $(target).parents(".form-group").find(".msg");
		if (!(reg.test(val))) {
			sp.empty();
			msg.html(text).css("color", "red").css("font-size", "0.7em");
		} else {
			msg.empty();
			sp.html($("<img>", {
				"src" : "/jqpro/images/check.png",
				"width" : "15px",
				"height" : "15px"
			}));
		}
	}

	// 이름 정규식 체그 - 한글 2 ~ 5
	$("#name").on("keyup", function() {
		val = $(this).val().trim();
		reg = /^[가-힣]{2,5}$/
		regtest(reg, val, this, "올바른 형식이 아닙니다.");
	})
	
	// 비밀번호 정규식 체크 - 영문소문자, 대문자, 특수문자, 숫자가 반드시 하나 이상씩 입력
	$("#pwd").on("keyup", function() {
		val = $(this).val().trim();
		reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*+=\-_|><?/]).{4,10}$/
		regtest(reg, val, this, "올바른 형식이 아닙니다.");
	})
	
	// 비밀번호 확인 체크
	$("#pwd2").on("keyup", function() {
		val = $(this).val().trim();
		pwd = $("#pwd").val().trim();
		sp = $(this).parents(".form-group").find(".sp");
		msg = $(this).parents(".form-group").find(".msg");
		if(val == pwd){
			msg.empty();
			sp.html($("<img>", {
				"src" : "/jqpro/images/check.png",
				"width" : "15px",
				"height" : "15px"
			}));
		} else {
			sp.empty();
			msg.html("일치하지 않습니다.").css("color", "red").css("font-size", "0.7em");
		}
	})
	
	// 전화번호 /\d{3}-\d{4}-\d{4}/
	$("#hp").on("keyup", function() {
		val = $(this).val().trim();
		reg = /^\d{3}-\d{4}-\d{4}$/
		regtest(reg, val, this, "올바른 형식이 아닙니다.");
	})
	// 이메일 //
	$("#email").on("keyup",function(){
		val = $(this).val().trim();
		reg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
		regtest(reg, val, this, "올바른 형식이 아닙니다.");
	})
	
	// 생년월일 - 10살 이상 오늘 이전
	$("#bir").on("change",function(){
		val = $(this).val().trim();
		dval = new Date(val);
		today = new Date();
		n1 = dval.getTime();
		n2 = today.getTime();
		n3 = (n2 - n1)/1000/60/60/24/365;;
		sp = $(this).parents(".form-group").find(".sp");
		msg = $(this).parents(".form-group").find(".msg");
		if(n3 < 10 && n3 > 0){
			sp.empty();
			msg.html("10살 이상 가능").css("color", "red").css("font-size", "0.7em");
		} else if(n3 < 0) {
			sp.empty();
			msg.html("올바른 날짜가 아닙니다.").css("color", "red").css("font-size", "0.7em");
		} else {
			msg.empty();
			sp.html($("<img>", {
				"src" : "/jqpro/images/check.png",
				"width" : "15px",
				"height" : "15px"
			}));
		}
	})
	
	
})












