/* 코어 SOP 스크립트 정리 */
$(function(){

	//레이어 띄우기
	$('#addNewPayment').on('click',function(){
		layerPopOver(this,'#pop-payment');
	});

	$('#addNewAddress').on('click',function(){
		layerPopOver(this,'#pop-address');
	});

	$('.del-profile').on('click',function(){
		layerPopOver(this,'#del-profile');
	});

	$('#btnEditSave').on('click',function(){
		layerPopOver(this,'#save-change');
	});

	$('#btnEditCancel').on('click',function(){
		layerPopOver(this,'#cancel-change');

	});

	$('.mysop-list-cancel').click(function(){
		layerPopOver(this,'#mysop-list-cancel');
	});


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
	function() {
		value = $('#editpay-card-password').val();
		setTimeout(function() {
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
	function() {
		value = $('#editpay-card-cvv').val();
		setTimeout(function() {
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


(function () {

	function inserQTY() {
		var w = $(window).width();
		var tagert = $(".mysop-list .list-row-content .col-md-2");
		if (w < 768) {
			for(var i=0;i< tagert.length;i++){
				if(tagert.eq(i).find("label").length< 2){
					tagert.eq(i).prepend('<label class="qty">QTY</label>');
				}
			}
		}else{
			$(".qty").remove();
		}
	}
	inserQTY();
})();




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
$(function(){

	$('#view-month').change(function() {

		var valueMonth = $("#view-month").val();
		if (valueMonth == '6 Month') {
			window.location.href = "mysop-6-month.html";
		} else if (valueMonth == '1 Month') {
			window.location.href = "mysop-monthly.html";
		}
	});

	$('.pop-close').click(function(){
		$(".popup").hide();
	});

	$('.del-profile').click(function(e) {
		e.preventDefault();
		$("#del-profile").show();

	});


	$("#sortOptions2").change(function () {
		var ss = $(this).children('option:selected').val();
		if (ss == "Inactive") {
			$("#sortOptions1").addClass("select-close");
			$("#sortOptions1").attr("disabled",true);
			$("#active-block").hide();
			$("#inactive-block").show();
			$("#cancel-block").hide();

		} else if (ss == "Active") {
			$("#sortOptions1").removeClass("select-close");
			$("#sortOptions1").attr("disabled",false);
			$("#active-block").show();
			$("#inactive-block").hide();
			$("#cancel-block").hide();
		}else{
			$("#cancel-block").show();
			$("#active-block").hide();
			$("#inactive-block").hide();
		}
	});
	$(".inactive").on("click",function (e) {
		e.preventDefault();
	   $("#sortOptions1").addClass("select-close");
			$("#sortOptions1").attr("disabled",true);
			$("#active-block").hide();
			$("#inactive-block").show();
			$("#cancel-block").hide();
	});
	$(".active").on("click",function (e) {
		e.preventDefault();
		$("#sortOptions1").removeClass("select-close");
			$("#sortOptions1").attr("disabled",false);
			$("#active-block").show();
			$("#inactive-block").hide();
			$("#cancel-block").hide();
	});
	$(".cancel").on("click",function (e) {
		e.preventDefault();
		$("#cancel-block").show();
			$("#active-block").hide();
			$("#inactive-block").hide();
	});


	/*
	$('#addNewAddress').click(function(e) {
				e.preventDefault();
				$('#pop-address').fadeIn();
			});
	$('#addNewPayment').click(function(e) {
		e.preventDefault();
		$('#pop-payment').fadeIn();
	});
	$('.pop-close, #submit-btn, #cancel-btn').click(function(e) {
		e.preventDefault();
		$('.popup').fadeOut();
	});
	$('.close-edit').click(function(e) {
		e.preventDefault();
		$('.edit-block').slideUp();
		$(".downline-profile-second-line").fadeIn(800);
	});
	*/

	$('body').delegate('.list-total .opera','click',function(){
		var count = $(this).attr("data");
		var inputNum = $(this).parent().children("#amount-cal-input");
		inputNum.val(function(){
			var value=$(this).val();
			count=="-"?value--:value++;
			if(value>=20){
				$(".list-total .icon-add").removeClass("opera");
				$(this).parent('.amount-cal').addClass('limit-num');
				$(this).parents('.product__list--item').addClass('has-limit');
				$(this).parents('.product__list--item').find('.non-click-panel').show();
				var value =20;
				return value;
			}
			else if(value>1){
				$(this).parent('.amount-cal').removeClass('limit-num');
				$(".list-total .icon-del").addClass("opera");
				$(".list-total .icon-add").addClass("opera");
				$(this).parents('.product__list--item').removeClass('has-limit');
				$(this).parents('.product__list--item').find('.non-click-panel').hide();
				return value;
			}
			else if(value<=1){
				$(".list-total .icon-del").removeClass("opera");
				$(this).parent('.amount-cal').addClass('limit-num');
				$(this).parents('.product__list--item').addClass('has-limit');
				$(this).parents('.product__list--item').find('.non-click-panel').show();
				var value =1;
				return value;
			}
			else if(1<value<20){
				$(this).parents('.product__list--item').find('.non-click-panel').hide();
				$(this).parents('.product__list--item').removeClass('has-limit');
				$(".list-total .icon-add").addClass("opera");
				$(this).parent('.amount-cal').removeClass('limit-num');
				return value;
			}
		})
	});
	//reset
	$('.reset').click(function(){
		$(this).parents('#quickShopForm').find('#quick-shop-search').val('');
		$(this).parents('#quickShopForm').next('#quick-search-list').slideUp(1000);
	});

	/*
	$('#edit-profile').click(function(e){
		e.preventDefault();
		if($(".edit-block").is(':hidden')){
			$(".downline-profile-second-line").hide();

			$(".edit-block").slideDown();
		}else{
			$(".edit-block").hide();
			$(".downline-profile-second-line").show();
		}

	});

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
	});
	*/
});