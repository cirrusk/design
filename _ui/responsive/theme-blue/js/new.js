// $(function(){
//     $(window).resize(function () {
//         dialogPos();
//     });
//     $(".cboxClose").click(function () {
//         $(".cbox,.overlay").hide();
//     })
// });
// function dialogPos() {
//     var W = $(window).width();
//     var cW = $(".cbox").width();
//     $(".cbox").css("left",(W-cW)/2);
// }
//
// function openDialog() {
//     $(".cbox,.overlay").show();
//     dialogPos();
// }

/* akl 사용안함 : 2018.03.20
function orderSummary() {
	var win = $(window);
	win.scroll(function(){
		var confirmH = $('.cartTitile').height() + $('.checkout-steps').height() + 62;
		var winH = $('.shipping-delivery').height() + 120;
		var winW = $(window).width();
		var conW = ($('.container').width() / 2) + 12;
		//alert($('.cartTitile').height());
		var order = $(".shipping-delivery-summary");
		var orderH = $(".shipping-delivery-summary").height();
		var orderHtop = winH - 590;
		var posTop = orderHtop - 40;
		var shop = $(".shopping-cart-total-wrapper");
		var sc=$(document);
		if (winW > 768) {
			if( sc.scrollTop() > confirmH && sc.scrollTop() < orderHtop ){
				order.addClass('fix');
				order.css({"position":"fixed", "top": "70px", "right": "50%", "margin-right":"-" + conW + "px" });
			} else if( sc.scrollTop() >= orderHtop) {
				order.removeClass('fix');
				order.css({"position":"absolute", "top":posTop + "px", "right": 0, "margin-right": "auto"});
			} else {
				order.removeClass('fix');
				order.css({"position":"relative", "top": "auto", "right": "auto", "margin-right": "auto"});
			}
		} else {

		}

	});
}
*/

function registerABO() {
	var win=$(window);
	win.scroll(function(){
		var winW = $(window).width();
		var winH = $('.float-reg-side-info').height() + 186;
		var sc=$(document);
		var confirmH=$('.breadcrumb-section').height()+$('product-list-page-title').height()+$('.abo-checkout-steps').height() + 200;
		var maxHeight= confirmH + $('.new-ibo-reg').height() -500;
		var order=$('.float-reg-side-info');
		if (winW > 768) {
			if( sc.scrollTop() > confirmH && sc.scrollTop() < maxHeight){
				order.addClass('fixed');
				order.css({"position":"fixed", "top": "136px", "right": "auto", "margin-right": "auto"});
			}else if(sc.scrollTop() < confirmH){
				order.css({"position":"relative", "top": "auto", "right": "auto", "margin-right": "auto"});
			}else{
				order.removeClass('fixed');
				order.css({"position":"relative", "top": "auto", "right": "auto", "margin-right": "auto"});
			}
		}
	})
}

$(function(){
	$("#header").load("/_ui/responsive/html/header.html");
	$("#quick").load("/_ui/responsive/html/quicklink.html");
	$("#footer").load("/_ui/responsive/html/footer.html");

	registerABO();
});


// (function () {
//     var SPEED = 'slow';
//     function showSearchResults() {
//         var $this = $(this);
//
//         var $searchResult = $('.auto-suggestion-popover');
//         if ($this.val().length >= 3) {
//             $searchResult.fadeIn(SPEED);
//         } else {
//             $searchResult.fadeOut(SPEED);
//         }
//     }
//
//     function closeSearchResults() {
//         var $searchResult = $('.auto-suggestion-popover').fadeOut(SPEED);
//         $('.ui-autocomplete-input').val('');
//     }
//
//     function registerEvents() {
//         $('.ui-autocomplete-input').on('keyup', showSearchResults);
//         $('.search-results-close').on('click', closeSearchResults);
//     }
//
//     function init() {
//         registerEvents();
//     }
//     init();
// })();

(function () {
	'use strict';

	$(window).resize(handleToggling);

	function handleToggling() {
		if (window.innerWidth < 768) {

			$('.quick-links-js-header').addClass('collapsed');
			$('.quick-links-js-header').attr('data-toggle', 'collapse');
			$("ul[id^='quick-links-collapse']").removeClass('in');
			$("ul[id^='quick-links-collapse']").addClass('padding-left-20');
		} else {

			$('.quick-links-js-header').removeAttr('data-toggle');
			$("ul[id^='quick-links-collapse']").addClass('in');
			$("ul[id^='quick-links-collapse']").removeClass('padding-left-20');
		}
	}

	handleToggling();

	$(".cartlist .cartlist-header").click(function(){
		if($("#cartlistContent").is(':hidden')) {
			$("#cartlistContent").slideDown(300);
		} else {
			$("#cartlistContent").slideUp(300);
		}

	})
})();



(function () {
	var SPEED = 'slow';
	function showSearchResults() {
		var $this = $(this);
		var $searchResult = $('.contacts-auto-suggestion');
		if ($this.val().length >= 3) {
			$searchResult.show();
		} else {
			$searchResult.hide();
		}
	}

	function closeSearchResults() {
		var $searchResult = $('.contacts-auto-suggestion').hide();
	}

	function contactsEvents() {
		$('#contacts-search').on('keyup', showSearchResults);
		$('#contacts-search').on('blur', closeSearchResults);
	}

	function init() {
		contactsEvents();
	}
	init();
})();


// (function () {
//     $(window).resize(navToggling);
//
//     function navToggling() {
//         if (window.innerWidth < 768) {
//             $('.overlay-menu-mobile__panel__heading').click(function () {
//                 if($(this).hasClass('active')){
//                     $(this).removeClass('active');
//                     $(this).next('.panel-collapse').removeClass('in');
//                     $(this).parent('.panel').siblings('.panel').show();
//                     $('.nav-list-element').show();
//                 }else{
//                     $(this).addClass('active');
//                     $(this).parent('.panel').siblings('.panel').hide();
//                     $('.nav-list-element').hide();
//                 }
//             });
//         } else {
//         }
//     }
//
//     navToggling();
// })();
$(function(){
	//my account jump to event
	$(".js-jump-to-selection-btn").click(function(e){
		e.preventDefault();
		var value =$(".js-jump-to-selection").val();
		if (value == '/my-account') {
			window.location.href = "my-account.html";
		} else if (value == '/my-account/business-information') {
			window.location.href = "business-information.html";
		} else if (value == '/my-account/bonus-payment') {
			window.location.href = "Bonus-Payment-Preference.html";
		} else if(value == '/my-account/orders'){
			window.location.href = "Order-History-Personal-Orders-expanded.html";
		}else if(value == '/my-account/billing-shipping'){
			window.location.href = "billing-shipping-add-new-payment-method.html";
		}else if(value == '/my-account/bonus-payment'){
			window.location.href = "Bonus-Payment-Preference.html";
		} else if(value == '/my-account/auto-renewal'){
			window.location.href = "auto-renewal.html";
		}else if(value == '/my-account/update-profile'){
			window.location.href = "Edit-Profile.html";
		}else if(value == '/my-account/contract-renewal'){
			window.location.href = "contract-renewal.html";
		}else if(value == '/my-account/contracts'){
			window.location.href = "contracts.html";
		} else if(value == '/my-account/terms-and-conditions-management'){
			window.location.href = "terms-and-conditions-management.html";
		}else if(value == '/my-account/coupon-management'){
			window.location.href = "coupon-management.html";
		} else if(value == '/my-account/point-management'){
			window.location.href = "point-management.html";
		} else if(value == '/my-account/billing-shipping/credit-card-management'){
			window.location.href = "credit-and-debit-card-management-non-payment-gateway.html";
		}else if(value == '/my-account/billing-shipping/bank-account'){
			window.location.href = "bank-account-management.html";
		}else if(value == '/my-account/profile-management'){
			window.location.href = "profile-management.html";
		}
	});


	//business center jump to event
	$(".prw-jump-to-button").click(function(e){
		e.preventDefault();
		var value =$(".form-control.no-uppercase-form-control").val();
		if (value == '/my-business-center') {
			window.location.href = "dashboard.html";
		}else if(value == '/my-business-center/action-reports-overview'){
			window.location.href = "action-reports-overview.html";
		}else if(value == '/my-business-center/LOS-TreeView'){
			window.location.href = "los-treeview.html";
		}else if(value == '/my-business-center/customer-sales-history'){
			window.location.href = "customer-sales-history.html";
		}else if(value == '/my-business-center/key-indicators'){
			window.location.href = "kpi-tracking.html";
		}else if(value == '/my-business-center/pv-inquiry'){
			window.location.href = "pv-inquiry.html";
		}else if(value == '/my-business-center/PV/BV-Transfer'){
			window.location.href = "pvbv-transfer.html";
		}else if(value == '/my-business-center/create-receipt'){
			window.location.href = "create-a-receipt-1.html";
		}else if(value == '/my-business-center/my-business-income'){
			window.location.href = "my-business-income.html";
		}else if(value == '/my-business-center/message-center'){
			window.location.href = "message-center.html";
		}
	});
	$(".upTips").click(function(e){
		e.preventDefault();
		var flag = $(this).prev(".toolTips").is(":hidden");
		if(flag) {
			$(".toolTips").fadeOut();
			$(this).prev(".toolTips").fadeIn();
		} else {
			$(this).prev(".toolTips").fadeOut();
		}
	})

});


//중개판매관리 2018.03.30
$(function() {

	$(".select2-hidden-accessible").select2();
	$(".form_datetime").datepicker({format: 'yyyy-dd-mm',autoclose: true});

	$("#addToLIST").click(function(){
		$(".add-to-shopping-list-container").removeClass('open');
	});

	$(".cart-detail__dropdown-menu").on("click",function(e){
	e.stopPropagation();
	});

	$('.btn-add-wish').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.wishListAdd');
	});

	$('#U70410_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver(this,'.U70410_lp2_pop');
	});

	$('#productSuggestListTabs').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		margin: 0,
		items: 1,
		responsiveClass: true,
		responsive: {
			480 : {
				items: 1
			},
			768 : {
				items: 2
			},
			960 : {
				items: 3
			},
			1200 : {
				items: 5
			}
		}
	});

	$('#Cart_Search').click(function(event){ 
		event.preventDefault();
		$(".shoping-cart-search").show();
	});
	$(".btnClosed").click(function() {
		$(".shoping-cart-search").hide();
	});

	$('#U70410_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver(this,'.U70410_lp1_pop');
	});
	
	$('#U70410_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver(this,'.U70410_lp2_pop');
	});

});


//중개판매관리 add to shopping list event
$(function() {
	
	$('#U70410_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver(this,'.U70410_lp2_pop');
	});

	$('.btn-add-wish').click(function(event) {
		event.preventDefault();
		layerPopOver(this,'.wishListAdd');
	});

	$('#U70410_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver(this,'.U70410_lp1_pop');
	});

	(function ($) {
			$(".js-add-list-shopping-button,.addToLIST").click(function(e){
				var tag = $(this).siblings('.dropdown-menu');
				var flag=true;
				if(!$(this).parent(".plp-add-to-shopping-list ").hasClass("open")){
					e.stopPropagation();
					$(".plp-add-to-shopping-list ").removeClass("open");
					$(this).parent(".plp-add-to-shopping-list ").addClass("open");
					$(tag).show();
					$(".plp-add-to-ditto").removeClass("open");
				}else{
					$(this).parent(".plp-add-to-shopping-list ").removeClass("open");
					$(tag).hide();
				}
				$(document).bind("click",function(e){
					var target = $(e.target);
					if(target.closest(tag).length == 0 && flag == true){
						$(tag).parent(".plp-add-to-shopping-list ").removeClass("open");
						$(tag).hide();
						flag = false;
					}
				});
			});
		})(jQuery);
});


//구매권한 양도/양수 2018.04.05
$(function(){

	$('.G10000_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver(this,'.G10000_lp3_pop');
	});

	$('#U70611_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver(this,'.U70611_lp1_pop');
	});

	$('#U70610_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver(this,'.U70610_lp1_pop');
	});

	$('#U70610_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver(this,'.U70610_lp2_pop');
	});

});

//공지사항 2018.04.17
$(function() {
	$(".js-order-history-filters").click(function(){
		$(".js-search-form-wrapper").addClass('hidden-sm hidden-xs');
		if($(".js-filter-form-wrapper").hasClass('hidden-sm hidden-xs')){
			$(".js-filter-form-wrapper").removeClass('hidden-sm hidden-xs');
		}else{
			$(".js-filter-form-wrapper").addClass('hidden-sm hidden-xs');
		}
	});

	$(".js-order-history-search").click(function(){
		$(".js-filter-form-wrapper").addClass('hidden-sm hidden-xs');
		if($(".js-search-form-wrapper").hasClass('hidden-sm hidden-xs')){
			$(".js-search-form-wrapper").removeClass('hidden-sm hidden-xs');
		}else{
			$(".js-search-form-wrapper").addClass('hidden-sm hidden-xs');
		}
	});

	//new-announcement-pop
	$('.ditto-schedule-table tbody tr').click(function(event) {
		event.preventDefault();
		$(".message-center-pop2,.overlay").show();
	});
	$(".message-center-pop2 #cboxClose").click(function() {
		$(".message-center-pop2,.overlay").hide();
	});


	//mob get ".tabs-toggles" max-width
	function tabwidth(){
		var maxWidth=$(window).width()+4;
		$(".tabs-toggles").css('max-width',maxWidth)
	}
	$(window).resize(function(){
		tabwidth()
	});
	$(document).ready(function(){
		tabwidth()
	})


	$(".url-copy").click(function(){
		$(".url_pop").toggle();
	});

	$(".cart-popup-close").click(function(){
		$(".url_pop").fadeOut();
		$(".url_pop").fadeOut("slow");
		$(".url_pop").fadeOut(3000);
	});

});