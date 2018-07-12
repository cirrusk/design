/* 코어 SOP 스크립트 정리 */
$(function(){
	//
	SOP_editProfile();
});

function SOP_editProfile(){
	$('#edit-profile').on('click',function(e){
		e.preventDefault();
		var $orderInfo = $(this).parent('.sop-order-info');
		var $editBox = $(this).parents().find('.edit-block');
		var $editBoxClose = $editBox.find('.close-edit');

		if($editBox.is(':hidden')){
			$editBox.slideDown('fast');
		} else if ($editBox.is(':visible')){
			$editBox.hide();
		}
		$editBoxClose.on('click',function(){
			$editBox.hide();
		});
	});
}




/* -------------------- 이하 정리예정 ------------------- */

(function () {
	function listenSearchInput() {
		if ($(this).val().length >= 1) {
			$(".js-quick-shop-submit").removeClass("disabled")
		} else {
			$(".js-quick-shop-submit").addClass("disabled")
		}
	}
	function buttonState() {
		$('#quick-shop-search').on('keyup', listenSearchInput);
	}

	buttonState();

})();
$("#editpay-card-password").bind("input propertychange",
	function () {
		value = $('#editpay-card-password').val();
		setTimeout(function () {
				str = value.substr(value.length - 1, 1);
				str = '*';
				str1 = '';
				if (value.length > 1) {
					str1 = value.substr(0, value.length - 1);
					$('#editpay-card-password').val(str1)
				}
				if (value !== '') {
					$('#editpay-card-password').val(str1 + str)
				} else {
					$('#editpay-card-password').val('')
				}
			},
			0);
	});
$("#editpay-card-cvv").bind("input propertychange",
	function () {
		value = $('#editpay-card-cvv').val();
		setTimeout(function () {
				str = value.substr(value.length - 1, 1);
				str = '*';
				str1 = '';
				if (value.length > 1) {
					str1 = value.substr(0, value.length - 1);
					$('#editpay-card-cvv').val(str1)
				}
				if (value !== '') {
					$('#editpay-card-cvv').val(str1 + str)
				} else {
					$('#editpay-card-cvv').val('')
				}
			},
			0);
	});

function verify(){
	var day = $("#process-day").val();
	if (day == '1'){
		$(".verify-form").addClass("has-error");
		$(".warning-tip").show();
		return;
	} else {
		$("#save-change").fadeIn();
	}


}

function changeFunction(){
	var inputValue = $("#quick-shop-search").val().trim();
	if(inputValue == '')
	{
		$("#quick-search-list").slideUp();
		$("#search-no-item").slideUp();
	}
	else {
		if(inputValue == '666'){
			$("#quick-search-list").slideDown(1000);
			$("#search-no-item").slideUp();

		}else{
			$("#search-no-item").slideDown(1000);
			$("#quick-search-list").slideUp();
		}

	}
}
$(function () {
	$('#view-month').change(function() {

		var valueMonth = $("#view-month").val();
		if (valueMonth == '6 Month') {
			window.location.href = "mysop-6-month.html";
		} else if (valueMonth == '1 Month') {
			window.location.href = "mysop-monthly.html";
		}
	});


	$('.pop-close').click(function () {
		$(".popup").hide();
	});


	$('.pop-close').click(function () {
		$(".popup").hide();
	});

	$('.del-profile').click(function (e) {
		e.preventDefault();
		$("#del-profile").show();

	});

	$('.mysop-list-cancel').click(function (e) {
		e.preventDefault();
		$("#mysop-list-cancel").show();

	});

	$("#sortOptions2").change(function () {
		var ss = $(this).children('option:selected').val();
		if (ss == "Inactive") {
			$("#sortOptions1").addClass("select-close");
			$("#sortOptions1").attr("disabled", true);
			$("#active-block").hide();
			$("#inactive-block").show();

		} else if (ss == "Active") {
			$("#sortOptions1").removeClass("select-close");
			$("#sortOptions1").attr("disabled", false);


			$("#active-block").show();
			$("#inactive-block").hide();
		}
	});
	$('.arrow-li-prev').click(function (e) {
		e.preventDefault();
		$('.months-select-bar .active').prev("li").children("a").tab('show');
	});

	$('.arrow-li-next').click(function (e) {
		e.preventDefault();
		$('.months-select-bar .active').next("li").children("a").tab('show');
	});

	$('#addNewAddress').click(function (e) {
		e.preventDefault();
		$('#pop-address').fadeIn();
	});
	$('#addNewPayment').click(function (e) {
		e.preventDefault();
		$('#pop-payment').fadeIn();
	});

	$('.pop-close, #submit-btn, #cancel-btn').click(function (e) {
		e.preventDefault();
		$('.popup').fadeOut();
	});
	/*
	$('.close-edit').click(function (e) {
		e.preventDefault();
		$('.edit-block').slideUp();
		$(".downline-profile-second-line").fadeIn(800);
	});*/

	//reset
	$('.reset').click(function () {
		$(this).parents('#quickShopForm').find('#quick-shop-search').val('');
		$(this).parents('#quickShopForm').next('#quick-search-list').slideUp(1000);
	});

/*
	var owl2 = $('#productSuggestListTabs');
	owl2.owlCarousel({
		margin: 0,
		nav: true,
		dots: false,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			960: {
				items: 5
			}
		}

	});*/
})