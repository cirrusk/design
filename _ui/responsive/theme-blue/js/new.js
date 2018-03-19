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
function orderSummary() {
		orderFn();
		function orderFn(){
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
		}

        var win = $(window);
        win.scroll(function(){
			orderFn();
        });
}

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
    $("#header").load("header.html");
    $("#quick").load("quicklink.html");
    $("#footer").load("footer.html");
    orderSummary();
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
