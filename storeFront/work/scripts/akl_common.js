//계좌관리 자동이체계좌 등록 팝업
$(function() {
	function close_accordion_section() {
		$('.akl-accordion .accordion-section-title').removeClass('active');
		$('.akl-accordion .accordion-section-content').slideUp(400).removeClass('open');
	}

	$('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.akl-accordion ' + currentAttrValue).slideDown(400).addClass('open');
		}

		e.preventDefault();
	});
	
	/* 약관 더보기 (768이하) */
	terms_ViewAll();
});

//header login tooltip
$(function() {
    $('.tooltip-btn').click(function() {
        $('.tooltip-wrap').slideToggle(0);
    });
})

//Quicklink Brand Site
//$(function() {
//    $('.brand-btn').click(function() {
//        $(this).toggleClass('selected').next().slideToggle(200);
//        $('.brand-btn').not(this).removeClass('selected').next().slideUp(200);
//     });
//});










/* 퀵링크 */
function quickLinks(){
	var $qLinkBTN = $('.brand-btn');
	$qLinkBTN.on('click',function(){
		var $anchorList = $(this).next();

		if( $anchorList.is(':hidden')){
			$(this).addClass('selected');
			$anchorList.slideDown(200);
		} else {
			$(this).removeClass('selected');
			$anchorList.hide();
		}
	});
};

/* 약관 더보기 (768이하) */
function terms_ViewAll(){
	var $btnViewAll = $('.text-btn.view-all');
	$btnViewAll.each(function(){
		$(this).on('click',function(){
			var $termsTexts = $(this).parent('.conditions');
			if ($termsTexts.hasClass('expand')){
				$termsTexts.removeClass('expand');
			}else {
				$termsTexts.addClass('expand');
			}
		});
	});
}

/** ------------------------------------------
 *  @layerPopOver
 *  - btnOpenLayer : 레이어 열기 버튼
 *  - targetLayer  : 버튼 클릭시 열리는 레이어
 * -------------------------------------------
 */
var layerCounter = 0;
function layerPopOver( btnOpenLayer , targetLayer ){
	var $layerContentBox = $(targetLayer).find('.layerBox'); //기본 레이어 타입
	var $layerPrdtDetail = $(targetLayer).find('.typeFullSizeView'); //제품 크게보기 레이어
	var $layerVideoView = $(targetLayer).find('.typeVideoView'); //동영상 레이어

	var scroll_LOCK = function(){
		$('html').addClass('scrollLock');

		/* 제품상세 크게보기 레이어인 경우 */
		if( $layerPrdtDetail.length){
			$('html').addClass('activeFullSizeView');
		}
	}
	var scroll_RESET = function(){
		$('html').removeClass('scrollLock');

		/* 제품상세 크게보기 레이어인 경우 */
		if( $layerPrdtDetail.length){
			$('html').removeClass('activeFullSizeView');
		}
	}

	/* 레이어 위치잡기 */
	function setPosition(){
		var _screenW = screen.width;
		var _screenH = screen.height;
		var _winWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var _winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

		/* TYPE 1 : 기본형 */
		function _layerTypeBasic(){
			var topPosition = (_winHeight/2);
			var leftPosition = (_winWidth/2);
			var targetWidth = $layerContentBox.width();
			var targetHeight = $layerContentBox.height();

			if( _winHeight < 481 ){
				$layerContentBox.css({
					'display':'block',
					'position':'absolute',
					'top':'10px',
					'left':'0',
					'right':'0',
					'width':'100%',
					'height':'auto',
					'margin-top':'0',
					'margin-left':'0',
					'margin-bottom':'12px'
				});
			} else {
				$layerContentBox.css({
					'display':'block',
					'top':topPosition,
					'left':leftPosition,
					'margin-top': -(targetHeight/2),
					'margin-left':-(targetWidth/2)
				});
			}
		}
		_layerTypeBasic();

		/* TYPE 2 : 제품상세-크게보기 (모바일 전체화면) */
		function _layerTypeFullSize(){
			var topPosition = (_winHeight/2);
			var leftPosition = (_winWidth/2);
			var targetWidth_prdt = $layerPrdtDetail.width();
			var targetHeight_prdt = $layerPrdtDetail.height();

			//레이어 길이와 윈도우 높이 비교
			if(targetHeight_prdt > _winHeight || _winWidth < 321){
				var reHeight = 'auto';
			} else {
				var reHeight = '100%';
			}

			if( _winWidth < 600 ){
				$layerPrdtDetail.css({
					'display':'block',
					'position':'absolute',
					'top':'0',
					'left':'0',
					'right':'0',
					'width':'100%',
					'height':reHeight,
					'margin-top':'0',
					'margin-left':'0'
				});
			} else {
				$layerPrdtDetail.css({
					'display':'block',
					'position':'fixed',
					'top':topPosition,
					'left':leftPosition,
					'right':'',
					'width':'80%',
					'height':'auto',
					'margin-top': -(targetHeight_prdt/2),
					'margin-left':-(targetWidth_prdt/2)
				});
			}
		}
		_layerTypeFullSize();

		/* TYPE 3 : 동영상보기 */
		function _layerTypeVideoView(){
			var topPosition = (_winHeight/2);
			var leftPosition = (_winWidth/2);
			var targetWidth_video = $layerVideoView.width();
			var targetHeight_video = $layerVideoView.height();

			$layerVideoView.css({
				'display':'block',
				'top':topPosition,
				'left':leftPosition,
				'width':(_winWidth - 20),
				'margin-top': -(targetHeight_video/2),
				'margin-left':-(targetWidth_video/2)
			});
		}
		_layerTypeVideoView();
	}
	setPosition();
	$(window).resize(function(){
		setPosition();
	});

	/* 레이어 열기 */
	layerCounter++;
	var _zindex = 9999;
	var _thisIndex = _zindex+layerCounter;

	if(!$('#mask').length){
		$('body').append('<div id="mask"/>');
	}

	$(targetLayer).fadeIn(100, function(){
		$('#mask').addClass('on');
		setPosition();
		scroll_LOCK();
		$(this).css('z-index',_thisIndex);
		$(this).addClass('active');
		$(this).attr('tabindex','0').show().focus();
	});

	/* 레이어 닫기 */
	var btn_close = 'a[class*=_close], [data-btn-close="closeLayer"], .cClose, .closeCbox, .modal-close-icon, .btnClose'
	var closeBtn = $(targetLayer).find(btn_close);
	$(closeBtn).on('click',function(e){
		e.preventDefault();
		$(targetLayer).find('.layerBox, .typeFullSizeView, .typeVideoView').attr('style','');

		if($(this).data('closeAll') === true){
			var layerAll = $(document).find('.layerWrapper.active');
			$(layerAll).fadeOut().removeClass('active').attr('style','');
			$('#mask').remove();
			layerCounter = 0;
			scroll_RESET();
		}
		else {
			$(targetLayer).fadeOut().removeClass('active').attr('style','');
			$(btnOpenLayer).focus();

			if($('.layerWrapper.active').length === 0){
				layerCounter = 0;
				$('#mask').remove();
				scroll_RESET();
			}
		}
	});

	// $(btnOpenLayer)가  Anchor일 경우 return false
	var elTagName = $(btnOpenLayer).prop('tagName');
	var tagA = 'A';
	if( elTagName == tagA ){
		event.preventDefault();
	}

	// $(btnOpenLayer)가 없는 경우 (버튼클릭 없이 자동실행)
	if( btnOpenLayer === ''){
		$(closeBtn).on('click',function(e){
			$(document).find('#skipNavi').attr('tabindex','0').focus();
		});
	}

	/**
	 * 키보드 사용시 포커스 제어
	 */
	var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, iframe, [tabindex], [contenteditable]';
	var focusableEls = $(targetLayer).find(focusableElementsString),
		firstFocusableEl = focusableEls.first()[0],
		lastFocusableEl = focusableEls.last()[0],
		KEYCODE_TAB = 9;

	$($(targetLayer)).on('keydown', function(e) {
		var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

		if (!isTabPressed) {
			return;
		}

		if ( e.shiftKey ) /* shift + tab */ {
			if (document.activeElement === firstFocusableEl) {
				lastFocusableEl.focus();
				e.preventDefault();
			}
		} else /* tab */ {
			if (document.activeElement === lastFocusableEl) {
				firstFocusableEl.focus();
				e.preventDefault();
			}
		}
	});
}
//@layerPopOver end
