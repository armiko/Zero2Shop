var CODA = CODA || {};

CODA.config = (function (App) {
	"use strict";
	var config = {};
	config.urls = {
		battlenet: "/ph/gamex-battlenet-gift-card",
		cliponyu: "/id/cliponyu-vip-user-topup",
		candyCrush: "/demo"
	};
	return config;
}(CODA));


function showCandyCrushTheme() {
	$("#wrap").addClass("wrapCC");	
	$("#wrap").css("background", "url(/shop/content/web/images/bgWrapCC.png) no-repeat");
	$("#wrap").css("background-color", "#698202");
	$(".leftSection").css("padding-top","400px");

	$(".num01").css("background", "url(/shop/content/web/images/candystep1.png) no-repeat");
	$(".num02").css("background", "url(/shop/content/web/images/candystep2.png) no-repeat");
	$(".num03").css("background", "url(/shop/content/web/images/candystep3.png) no-repeat");
	$("[class^='num']").css("background-size","contain");
}

function showBattleNetTheme() {
	$(".header-logo > img").remove();
	$(".infoText").html("");
	$("#headerWrap").css("background","url()");
	$("#headerWrap").css("background-color","black");
	$(".header").append("<img src='/shop/content/web/images/logo-poweredbycodashopdesktop-254x34.png' align='right' style='padding:17px 0 0 30px'/>");
	$(".lan").remove();

	$("[class^='num']").css("background", "url(/shop/content/web/images/number-bg.png) no-repeat");
	$("[class^='num']").css("background-size","contain");
	$("a[id^=paymentChannel_] .logo img").attr("src","/shop/content/common/images/mno/logo-smartsuntnt-268x52.png");
	$("a[id^=paymentChannel_] .logo").css("padding","20px 0 0 48px");
	$(".info").html("")

	//mobile	
	$("#header").css("background","url()");
	$("#header").css("background-color","black");
	$(".m img").remove()
	$(".language").remove();
	$("#header").find("h1").after("<img src='/shop/content/mobile/images/logo-poweredbycodashopmobile.png' style='float:right;padding:15px 0 0 0px;margin-right:10px'/>");
	$("li[id^=paymentChannel_] a img[class='logo']").attr("src","/shop/content/common/images/mno/logo-smartsuntnt-268x52.png");
	$("li[id^=paymentChannel_]").find("span.text").html("")
	$(".circle > span").css("background", "#ed145b");
	$("#contents .section .button").css("background", "#cbdb2a");

	$(".check").attr("src", "/shop/content/mobile/images/checkmark-49x47.png");
	$(".FooBox").remove();
}

function showClipOnYuTheme() {
	$(".header-logo > img").remove();
	$(".infoText").html("");
	$("#headerWrap").css("background","url()");
	$("#headerWrap").css("background-color","white");
	$(".header").append("<img src='/shop/content/web/images/COYskin-poweredbycodashop.png' align='right' style='padding:17px 0 0 30px'/>");	
	$(".lan").remove();

	$("a[id^=paymentChannel_] .logo img").first().attr("src","/shop/content/common/images/mno/COYskin-ATMbcalogos.png");
	$(".selectList02 li a .logo").append("<div class='pgold'>+GOLD 10%</div>");

	//mobile
	$(".m img").remove()
	$(".language").remove();
	$("#header").find("h1").after("<img src='/shop/content/mobile/images/COYmobile-poweredby.png' style='float:right;padding:15px 0 0 0px;margin-right:10px'/>");
	$("li[id^=paymentChannel_] .logo").first().attr("src","/shop/content/common/images/mno/COYskin-ATMbcalogos.png");
	$(".circle > span").css("background", "#fdef94");
	$("#contents .section .button").css("background", "#ff4a8c");
	$("li[id^=paymentChannel_] img").parent().append("<div class='pgold'>+GOLD 10%</div>");
	$(".check").attr("src", "/shop/content/mobile/images/COYmobile-checkmark.png");
	$(".FooBox").remove();
}