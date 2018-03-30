
$(function(){
	click_add();
});

$(window).load(function(){
});

//check add class
function click_add(){
	$(document).on("click", ".click_add tr, .click_add a, .click_add button", function(){
		$(this).closest(".click_add").find("tr, a, button").removeClass("add_act");
		$(this).addClass("add_act");
	});
}

// loading open & close
function loading_open(){
	var loading_wrap = $("<div class='loading_wrap'><div class='loading_dim'></div><span class='loading_img'><img src='/_ui/pos/images/common/loading.gif' alt='통신중'></span></div>");
	$("body").css({overflow:"hidden"}).after(loading_wrap);
}

function loading_close(){
	$(".loading_wrap").remove();
	$("body").removeAttr("style");
}

//Layer popup open & close
function pop_open(pop_name){

	var dim_box = $("<div class='dim_box'></div>");
	$(pop_name).after(dim_box);

	var pop_wid = $(pop_name).width();
	var pop_hei = $(pop_name).height();

	$(pop_name).css({marginLeft:-(pop_wid/2), marginTop:-(pop_hei/2)});

}

function pop_close(pop_name){

	$(pop_name).remove();
	$(".dim_box").remove();

}

//alert open & close
function alert_open(pop_name){

	var dim_box = $("<div class='dim_box02'></div>");
	$(pop_name).after(dim_box);

	var pop_wid = $(pop_name).width();
	var pop_hei = $(pop_name).height();

	$(pop_name).css({marginLeft:-(pop_wid/2), marginTop:-(pop_hei/2)});

}

function alert_close(pop_name){

	$(pop_name).remove();
	$(".dim_box02").remove();

}
