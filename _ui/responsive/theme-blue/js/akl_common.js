﻿$(function(){
/** ----- 공통 ----- */

	//header login tooltip
	$('.tooltip-btn').click(function() {
		$('.tooltip-wrap').slideToggle(0);
	});

	//탭 스크롤
	tabsTgg_Control();
	$(window).resize(function(){
		tabsTgg_Control();
	});


/** ----- SHOP ----- */

	//2018.03.12 카테고리 왼쪽메뉴
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}
	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}
	var accordion = new Accordion($('#accordion'), false);

	//제품상세 상단 이미지 : 크게보기 클릭시, 레이어에서 같은 이미지 보이게 수정
	prdtDetails_IMG();

	//제품상세 상단 이미지 embed 영역  : #pdpImg
	videoSize();

	//제품상세 상단 이미지 layer 영역
	videoWrapperSize();

	$(window).resize(function(){
		videoSize();
		videoWrapperSize();
	});

	//약관 더보기 (768이하)
	terms_ViewAll();

	//주문결제 : floating box
	orderSummaryFixed();

	//장바구니 : floating box
	cartSummaryFixed();

	//온라인 FAX 주문 - 검색영역 열고 닫기
	toggleBox_faxOrder_srch();

	//온라인 FAX 주문 - 툴팁 사이즈
	toolTips_conSize();
	$(window).resize(function(){
		toolTips_conSize();
	});

	//온라인 FAX 주문 - 툴팁 열기
	toolTips_open();

	//온라인 FAX 주문 - 안내글 토글
	toggleBox_Guide();


/** ----- 비즈니스 ----- */

	//여행점수 시뮬레이션
	BarChart();

	//Q레그 현황
	fixedTable_Scroll();
	$(window).resize(function(){
		fixedTable_Scroll();
	});


/** ----- 마이페이지 ----- */

	//마이페이지 메인 : li 여백처리
	mypageIndex_list();

	//마이페이지 메인 : li 높이제어
	myPage_EqualHeight();
	$(window).resize(function(){
		myPage_EqualHeight();
	});

	//마이페이지 > 맞춤메시지 - 신규 ABO 프로모션: 목록 정렬
	message_newABO_state();

	//마이페이지 상단 - 메뉴 list
	jumpMenuList();

	//인쇄 - 게시판 하단 인쇄버튼
	print_pageBoard();

	//인쇄 - 레이어 영역지정
	print_layerSection();

	//테이블 결과없음 : resize
	tbl_colspan();
	$(window).resize(function(){
		tbl_colspan();
	});

	//신규ABO - 대상자 조회
	event_NewABO_select();

	//계좌관리 자동이체계좌 등록 팝업
	function close_accordion_section() {
		$('.akl-accordion .accordion-section-title').removeClass('active');
		$('.akl-accordion .accordion-section-content').slideUp(400).removeClass('open');
	}
	$('.accordion-section-title').click(function(e) {
		e.preventDefault();

		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.akl-accordion ' + currentAttrValue).slideDown(400).addClass('open');
		}
	});

});

/** ------------------------------------
 *  공통요소
 *  ------------------------------------
 */
function tabsTgg_Control(){
	var _winWidth = $(window).width();

	//균등분할 탭
/*	var _tabEquality = $('.col-search-tab').find('ul');
	_tabEquality.each(function(){
		//wrapper 찾기
		var find_searchTab = $(this).parent('.col-search-tab');
		if (find_searchTab.length){
			//object 추가
			var scrollableDiv = '.scrollable-area.left , .scrollable-area.right';
			var siblings_El = $(this).siblings(scrollableDiv);

			if ( siblings_El.length ){ return; }
			else { find_searchTab.prepend('<span class="scrollable-area left"/><span class="scrollable-area right"/>'); }
		}
	});*/



	var _tabsToggles = $('.tabs-toggles , .col-search-tab>ul');
	_tabsToggles.each(function(){

		/* -- 스크롤영역 표시 Div 추가 -- */
		var scrollableDiv = '.scrollable-area.left , .scrollable-area.right';
		var siblings_El = $(this).siblings(scrollableDiv);

		//Type1: 기본형
		var find_OuterBorder = $(this).parent('.outer-border-bottom');
		if( find_OuterBorder.length ){
			find_OuterBorder.addClass('border-none'); //border-bottom 삭제

			if ( siblings_El.length ){ return; }
			else { find_OuterBorder.prepend('<span class="scrollable-area left"/><span class="scrollable-area right"/>'); }
		}

		//Type2: 균등분할
		var find_searchTab = $(this).parent('.col-search-tab');
		if (find_searchTab.length){
			if ( siblings_El.length ){ return; }
			else { find_searchTab.prepend('<span class="scrollable-area left"/><span class="scrollable-area right"/>'); }
		}

		/* 너비 비교하기 */
		var _UL = $(this);
		var _LI = _UL.find('li');

		var children_sum;
		function $tabWidthCheck(){
			var _winWidth = $(window).width();

			children_sum = 0;
			_LI.each(function(index){
				var myWD = $(this).outerWidth(true);
				children_sum += myWD;
				//console.log('index' +index +', '+ children_sum);
			});

			function runWideView(){
				_UL.removeClass('scroll-tab');

				if( children_sum < _winWidth ){ _UL.removeClass('width-auto'); }
				if( children_sum > _UL.width() ){ _UL.addClass('width-auto'); }
			}

			function runSmallView(){
				_UL.removeClass('width-auto');

				if(_winWidth < children_sum ){ _UL.addClass('scroll-tab'); }
				if(_winWidth > children_sum ){ _UL.removeClass('scroll-tab'); }
			}

			//console.log('_winWidth :' + _winWidth);
			if(_winWidth > 768){ runWideView();}
			if(_winWidth < 769){ runSmallView();}
		};

		$tabWidthCheck();
		$(window).resize(function(){
			$tabWidthCheck();
		});

		/* --- 스크롤 가능 영역 표시 --- */
		var leftDiv = $(this).siblings('.scrollable-area.left');
		var righttDiv = $(this).siblings('.scrollable-area.right');
		var $scrollArea = {
				mob : function(){
					if( _UL.is('.scroll-tab')){
						leftDiv.hide();
						righttDiv.show();
						_UL.parent('.col-search-tab').addClass('scrolling'); //균등분할 탭 여백조정 class 추가
					}
					else {
						leftDiv.hide();
						righttDiv.hide();
						_UL.parent('.col-search-tab').removeClass('scrolling');
					}
				},
				pc : function(){
					leftDiv.hide();
					righttDiv.hide();
				}
		}

		function width_check(){
			var _winWidth = $(window).width();
			if(_winWidth > 768){
				$scrollArea.pc();
			}
			if(_winWidth < 769){
				$scrollArea.mob();
			}
		}

		width_check();
		$(window).resize(function(){
			$tabWidthCheck();
			width_check();
		});

		_UL.scroll(function(event){
			var targetWrapperSize = $(this).width(); //A. wrapper : ul
			var actualContentSize = event.currentTarget.scrollWidth; //B. 스크롤되는 컨텐츠 길이
			var scrolledPosition  = event.currentTarget.scrollLeft;  //C. 스크롤 움직인 길이 (x좌표가 움직인 거리)

			//스크롤 가능 길이 알아내기(D) : B - A
			var scrollable_width  = actualContentSize - targetWrapperSize;

			if (scrolledPosition < 30) {
				//스크롤 시작
				$(this).siblings('.scrollable-area.left').hide();
				$(this).siblings('.scrollable-area.right').show();
			}
			else if ( scrollable_width === scrolledPosition ){
				//스크롤 가능 길이 알아내기(D) === 움직인 길이(C)
				$(this).siblings('.scrollable-area.left').show();
				$(this).siblings('.scrollable-area.right').hide();
			}
			else {
				//움직이는 주시작도 끝도 아님
				$(this).siblings('.scrollable-area.left , .scrollable-area.right').show();
			}
		});
	});
}

/** ------------------------------------
 *  HEADER (코어 js 정리)
 *  ------------------------------------
 */

/* body 클릭 시 열린 레이어 닫기 */
function HEADER_stopPropagation(){
	//event bubbling 막기
	var stopPropagation_target = '.js-my-account-menu, .js-mini-cart-link, .auto-suggestion-popover, .popoverword, #overlay-menu-wrapper, #shoppingcar-drop-content, #login-drop-content';
	$(stopPropagation_target).on('click', function (e){
		e.stopPropagation();
	});

	//html 클릭시 열린 레이어 닫기
	$(document).on('click',function(){
		$('header').removeClass('userinfo-open mincart-open');
		$(".auto-suggestion-popover").hide();

		//쇼핑메뉴 레이어 숨기기
		if( $('.overlay-menu-toggle-desktop').not('.collapsed') && $("#overlay-menu-wrapper").is('.in') ){
			$("#overlay-menu-wrapper").removeClass("in");
			$('.overlay-menu-toggle-desktop').addClass('collapsed');
		}
	});
}

/* 쇼핑메뉴 클릭이벤트 : .overlay-menu-toggle-desktop */
function HEADER_MenuShop(){
	var _btnSHOP = $('.overlay-menu-toggle-desktop');

	_btnSHOP.addClass('collapsed');
	_btnSHOP.on('click', function(){
		$(this).addClass('collapsed');
		$('.popoverword').hide();
	});

	//쇼핑메뉴 닫기버튼
	var _btnLayerClose = $('#overlay-menu-wrapper').find('.search-results-close');
	_btnLayerClose.on('click',function(){
		$("#overlay-menu-wrapper").removeClass("in");
		$('.overlay-menu-toggle-desktop').addClass('collapsed');
	});
}

/* 미니 대시보드 : #login-drop-content */
function HEADER_miniDashboard(){
	//쇼핑메뉴 layer
	$("#overlay-menu-wrapper").removeClass("in");
	$('.overlay-menu-toggle-desktop').addClass('collapsed');

	//레이어: .nav-links
	$('header').hasClass('userinfo-open') ? $('header').removeClass('userinfo-open') : $('header').addClass('userinfo-open');
	$('header').removeClass('mincart-open');

	//레이어: 검색
	$(".auto-suggestion-popover").hide(); //추천검색어
	$('.top-search').removeClass('search-open'); //검색어 입력영역
}

/* 미니 카트 : #shoppingcar-drop-content */
function HEADER_miniCart(){
	//쇼핑메뉴 layer
	$("#overlay-menu-wrapper").removeClass("in");
	$('.overlay-menu-toggle-desktop').addClass('collapsed');

	//레이어: .nav-links
	$('header').hasClass('mincart-open') ? $('header').removeClass('mincart-open') : $('header').addClass('mincart-open');
	$('header').removeClass('userinfo-open');

	//레이어: 검색
	$(".auto-suggestion-popover").hide(); //추천검색어
	$('.top-search').removeClass('search-open'); //검색어 입력영역
}

/* 추천검색어 레이어 */
function HEADER_topSearch_suggestion(){
	var SPEED = 'slow';
	function showSearchResults() {
		var $this = $(this);
		var $searchResult = $('.auto-suggestion-popover');
		if ($this.val().length >= 3) {
			$searchResult.fadeIn(SPEED);
		} else {
			$searchResult.fadeOut(SPEED);
		}
	}

	function closeSearchResults() {
		var $searchResult = $('.auto-suggestion-popover').fadeOut(SPEED);
		$('.ui-autocomplete-input').val('');
	}

	registerEvents();
	function registerEvents() {
		$('.ui-autocomplete-input').on('keyup', showSearchResults);

		var $btnClose_autoSuggestion = $('.auto-suggestion-popover').find('.search-results-close');
		$btnClose_autoSuggestion.on('click', closeSearchResults);
	}
}

/* MOB 쇼핑메뉴 */
function navToggling() {
	if (window.innerWidth < 768) {
		$('.overlay-menu-mobile__panel__heading').click(function () {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).next('.panel-collapse').removeClass('in');
				$(this).parent('.panel').siblings('.panel').show();
				$(this).parents('.nav-list-element').siblings('.nav-list-element').show();
			} else {
				$(this).addClass('active');
				$(this).parent('.panel').siblings('.panel').hide();
				$(this).parents('.nav-list-element').siblings('.nav-list-element').hide();
			}
		});
	} else {
	}
}

/* MOB 검색버튼 */
function HEADER_MOB_search(){
	$(".mobile-search-btn").click(function(){
		//검색어 입력영역
		$('.top-search').hasClass('search-open') ? $('.top-search').removeClass('search-open') : $('.top-search').addClass('search-open');
		$('header').removeClass('userinfo-open mincart-open');
		$(".dropdown").removeClass("open");
	});
	$(".mobile-popover-close").click(function () {
		$('header').removeClass('userinfo-open');
	});
}

/* 최근검색어 레이어 */
function HEADER_RecentSearches(){
	var _SerchInput = $('#header').find('input.ui-autocomplete-input');
	var layerRecentSearches = $('#header').find('.popoverword');
	var layerCloseBtn = layerRecentSearches.find('.search-results-close');

	_SerchInput.on('click',function(){
		layerRecentSearches.show();
	});

	layerCloseBtn.on('click',function(){
		layerRecentSearches.hide();
	});
}

/* 테스트용 추가
function findTarget(){
	$('body').click(function(e){ console.log(e.target); });
}
function doOnOrientationChange(){
	switch(window.orientation){
		case -90:
		case 90:
			{ console.log(' 가로모드 landscape');}
			break;
		default:
			{ console.log(' 세로모드 portraite');}
			break;
	}
}
*/

/** ------------------------------------
 *  쇼핑
 *  ------------------------------------
 */

/* 주문결제 : floating box */
function orderSummaryFixed(){
	if (! $('.shipping-delivery .shipping-delivery-summary').length){ return;}
	function fixedBox(){
		//target position : top
		var wScrollTop = $(window).scrollTop();
		var headerHeight = 137;
		var headerBtmSpace = $('.breadcrumb-section').outerHeight(true);
		var topAreaHeight = headerHeight + headerBtmSpace;

		//target position : right
		var winWidth = $(window).width();
		var conWidth = $('.shipping-delivery .row').width(); //content width
		var positionRight = (winWidth - conWidth)/2;

		/* -- 중간 멈춤 위치 찾기 -- */
		//주문결제 div
		var targetWrapper = $('.shipping-delivery');
		var targetWrap_top = targetWrapper.offset().top;
		var targetWrap_btm = targetWrapper.position().top + targetWrapper.outerHeight(true); //bottom : 1750

		//주문회원정보 (floating div)
		var targetObj = $('.shipping-delivery-summary');
		var targetObj_H = targetObj.outerHeight(true);

		//재설정 위치값
		var compareTop = targetWrap_btm - targetObj_H; //1063
		var targetReTOP = compareTop - targetWrap_top + headerHeight;
		var $cartContent = targetObj.parent().find('.cart-items-wrapper');

		if( winWidth > 768 ){
			//기본높이 부여
			if( $cartContent.length && targetObj_H > 400){
				$cartContent.css({'min-height':targetObj_H});
			}
			if( wScrollTop > compareTop){
				$('.shipping-delivery-summary').css({
					'position':'absolute',
					'top':targetReTOP,
					'right':'12px'
				});
			} else if( wScrollTop > topAreaHeight ){
				$('.shipping-delivery-summary').css({
					'position':'fixed',
					'top': headerHeight,
					'right':positionRight
				});
			} else {
				$('.shipping-delivery-summary').attr('style','');
			}
		}
	}
	$(window).scroll(function(){
		fixedBox();
	});
}

/* 장바구니,위시리스트 : floating box */
function cartSummaryFixed(){
	if (! $('.cart-content-wrapper .shopping-cart-total-wrapper').length){ return;}

	function fixedBox(){
		//target position : top
		var wScrollTop = $(window).scrollTop();
		var headerHeight = 137;
		var headerBtmSpace = $('.breadcrumb-section').outerHeight(true);
		var quickSrchbox = $('.account-section-content').outerHeight(true);
		var topAreaHeight = headerHeight + headerBtmSpace + quickSrchbox;

		//target position : right
		var winWidth = $(window).width();
		var conWidth = $('.cart-content-wrapper').width(); //content width
		var positionRight = (winWidth - conWidth)/2;

		/* -- 중간 멈춤 위치 찾기 -- */
		//cart div
		var targetWrapper = $('.cart-content-wrapper');
		var targetWrap_top = targetWrapper.offset().top;
		var targetWrap_btm = targetWrapper.position().top + targetWrapper.outerHeight(true); //bottom

		//주문정보 (floating div)
		var targetObj = $('.shopping-cart-total-wrapper');
		var targetObj_W = targetObj.outerWidth();
		var targetObj_H = targetObj.outerHeight(true);

		//재설정 위치값
		var compareTop = targetWrap_btm - targetObj_H; //1063
		var targetReTOP = compareTop - targetWrap_top + headerHeight - quickSrchbox;
		var $cartContent = targetObj.parents('.shop-cart-conts').find('.cart-items-wrapper');

		if( winWidth > 768 ){
			//기본높이 부여
			$(targetObj).width(targetObj_W);
			if( $cartContent.length && targetObj_H > 400){
				$cartContent.css({'min-height':targetObj_H});
			}

			if( wScrollTop > compareTop){
				targetObj.css({
					'position':'absolute',
					'top':targetReTOP-25, // -25px은 border-bottom 맞추기 위한 보정값
					'right':'0'
				});
			} else if( wScrollTop > topAreaHeight ){
				targetObj.css({
					'position':'fixed',
					'top': headerHeight+15, //상단 여백용 보정값
					'right':positionRight
				});
			} else {
				targetObj.attr('style','');
			}
		}
	}
	$(window).scroll(function(){
		fixedBox();
	});
}

/* 제품상세 상단 이미지 : 크게보기 클릭시, 레이어에서 같은 이미지 보이게 수정 */
function prdtDetails_IMG(){
	// 수정 : 2018.03.29
	// 크게보기 클릭시, 레이어에서 같은 이미지 보이게 수정
	$.uiSnapImg = {
		owl: function(opt){
			var popidx = 0;

			$('#pdpImg').find('li').removeClass('on').eq(opt.current).addClass('on');
			$('#uiPrdViewDetail').owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				margin: 0,
				items: 3,
				startPosition: opt.current,
				responsive: {
					480 : {
						items: 3
					},
					768 : {
						items: 3
					},
					960 : {
						items: 4
					},
					1200 : {
						items: 5
					},
					1457 : {
						items: 6
					}
				}
			});

			//2018.04.02  수정 (setTimeout 추가)
			//선택된 이미지 표시
			setTimeout(function(){
				$('#uiPrdViewDetail').find('.owl-item.active').eq(0).addClass('on');
			},300);

			$(document).off('click.snapimg').on('click.snapimg', '.ui-snap-btn', function(){
				//popidx = $(this).closest('.owl-item').index();
				popidx = $(this).data('n');
				$('#pdpImg').find('li').removeClass('on').eq(popidx).addClass('on');

				//2018.04.02  수정 (_owlItem 추가)
				//선택된 이미지 표시
				var _owlItem = $(this).parents('.owl-item');
				_owlItem.addClass('on').siblings().removeClass('on');
			});

			$('.G10300_lp1_btn').click(function(event) {
				event.preventDefault();
				layerPopOver('this','.G10300_lp1_pop');

				//$(this).find('.owl-item').removeClass('.on');
				//$('#recentlyViewedListTab2').find('.owl-item').removeClass('.on');
				popidx = $(this).closest('.on').index();

				$('#recentlyViewedListTab2').owlCarousel({
					startPosition:popidx,
					loop: true,
					nav: true,
					dots: false,
					margin: 0,
					items: 3,
					responsiveClass: true,
					responsive: {
						480 : {
							items: 3
						},
						768 : {
							items: 5
						},
						960 : {
							items: 5
						},
						1100 : {
							items: 6
						},
						1457 : {
							items: 6
						}
					}
				});
				$('#largeImgView img').attr('src', $('#recentlyViewedListTab2 .owl-item [data-n="'+ popidx +'"]').find('img').attr('src'));

				//2018.04.02  수정 (_owlItemIdx 추가)
				//선택된 이미지 표시
				var _owlItemIdx = $('#recentlyViewedListTab2 .owl-item [data-n="'+ popidx +'"]').parents('.owl-item');
				var _owlItemAll = _owlItemIdx.parents('#recentlyViewedListTab2').find('.owl-item');
				_owlItemAll.removeClass('on');
				_owlItemIdx.addClass('on');

				var $IMG = $('#largeImgView.pop-gallery').find('img');
				var $listIMG = $('#recentlyViewedListTab2').find('img');

				//동영상 주소 가져오기
				var $video = $('#largeImgView.pop-gallery').find('.type-video');
				var findVideo = $('#pdpImg').find('li.type-video .video-wrapper').html();
				var imageWrapper = $('#largeImgView.pop-gallery').find('span');
				var videoWrapper = $('#largeImgView.pop-gallery').find('.video-wrapper');
				$(findVideo).appendTo( videoWrapper );

				//이미지 클릭시
				$listIMG.each(function(){
					$(this).on('click',function(e){
						e.preventDefault();

						//2018.04.02  수정 (_owlItemIdx 추가)
						//선택된 이미지 표시
						var _owlItem = $(this).parents('.owl-item');
						_owlItem.addClass('on').siblings().removeClass('on');

						var _SRC = $(this).attr('src');
						var _ALT = $(this).attr('alt');
						$IMG.attr({'src':_SRC, 'alt':_ALT});

						//비디오 이미지 클릭 시
						var _parent =  $(this).parent();
						if( _parent.hasClass('type-video')){
							$(imageWrapper).hide();
							$(videoWrapper).show();
						} else{
							$(imageWrapper).show();
							$(videoWrapper).hide();
						}
					});
				});
			});
		}
	}
	$.uiSnapImg.owl({ current:0 });
}

/* 제품상세 상단 이미지 embed 영역 : #pdpImg */
function videoSize(){
	var PDP_IMGs = $('.ui-snap-big#pdpImg');
	if(!PDP_IMGs.length){ return; }

	var _winWidth = $(window).width();
	var _PDP_IMGBox = $('.ui-snap-big').find('.slides>li');
	var _PDP_VIDEO = PDP_IMGs.find('.video-wrapper');

	var $PDP_IMG_Resize = {
			init : function(){
				_PDP_IMGBox.css({height:''});
				_PDP_VIDEO.css({'top':''});
			},
			imgReSize : function(){
				//이미지 Box 크기
				var _winWidth = $(window).width();
				var _PDP_IMGBox = $('.ui-snap-big').find('.slides>li');
				var pdpSlideWD = _PDP_IMGBox.width();

				_PDP_IMGBox.css({height:pdpSlideWD});

				// 동영상 높이 (16:9 비율) : WD*0.5625
				// 동영상 위치잡기 (상하)  : 100% - 56.25% = 43.75%
				var WD = $('.ui-snap-big#pdpImg').width();
				var HT = $('.ui-snap-big#pdpImg').height();
				var spaceTop = (WD*0.4375)/2;
				var _PDP_VIDEO = PDP_IMGs.find('.video-wrapper');
				_PDP_VIDEO.css({'top':spaceTop});
			}
	}

	//초기화
	$PDP_IMG_Resize.init();

	//사이즈 조정
	$PDP_IMG_Resize.imgReSize();
	setTimeout(function(){
		$PDP_IMG_Resize.imgReSize();
	}, 300);
}

/* 제품상세 상단 동영상 위치조정 */
function videoWrapperSize(){
	if(! $('.layerWrapper #colorbox .pop-gallery').length){ return; }

	function layerPDP_gallery(){
		var PortraiteSize = $(window).width();
		var LandscapeSize = $(window).height();
		if (LandscapeSize < PortraiteSize){PortraiteSize = LandscapeSize;}

		var win_width = $(window).width();

		//이미지 최대 사이즈 600px
		if( win_width < 601 ){ win_width = PortraiteSize; }
		if( win_width > 600 ){ win_width = 600;}

		//이미지 컨텐츠
		$('.popop-tbody').width(win_width);
		$('.pop-gallery').css({width: win_width, height: win_width, maxWidth: 'none'});

		//video-wrapper
		var topSpace = (win_width*0.4375)/2;
		var videoboxWidth = win_width - 40; //박스 안쪽 사이즈 : 좌우 여백(20px*2) 제외한 크기
		var carouselWidth = win_width;

		$('.pop-gallery').find('span').width(win_width);
		$('.pop-gallery').find('span>img').css({width:'100%', height:'auto', maxWidth:'none'});
		$('.pop-gallery').find('.video-wrapper').css({top: topSpace, width: videoboxWidth, margin: '0 auto'});

		//썸네일 슬라이드
		$('.popup-img-list').width(carouselWidth);
	}

	layerPDP_gallery();
	$(window).resize(function(){
		layerPDP_gallery();
	});
}

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

/* 마이페이지 메인 : li 여백처리 */
function mypageIndex_list(){
	var  mypageBlockList = $('.mypage-block-list');
	if (!mypageBlockList.length) {return;}
	mypageBlockList.each(function(){
		var winWidth = $(window).width();
		var _ul = $(this).find('>ul');
		_ul.find('li').filter(':nth-of-type(3n-1)').addClass('nth-3n-1');
		_ul.find('li').filter(':nth-of-type(-n+3)').addClass('nth-3n');
	});
}
/* 마이페이지 메인 : li 높이제어 */
function myPage_EqualHeight(){
	var blockList = '.mypage-block-list';
	if (!blockList.length){return;}

	var _winWidth = $(window).width();
	var colHeightResize = {
			init : function(){
				var _UL = $(blockList).find('ul');
				_UL.each(function(){
					var _child_height = $(this).find('li>div>a');

					_child_height.each(function() {
						$(this).css({height:''});
					});
				});
			},
			reSize : function(){
				var maxHeight = 85;
				var _UL = $(blockList).find('ul');
				_UL.each(function(){
					var _child_height = $(this).find('li>div>a');

					_child_height.each(function() {
						maxHeight = Math.max(maxHeight, $(this).outerHeight(true));
					});

					_child_height.css({height:maxHeight + 'px'});
				});
			}
	}

	function colHeight_check(){
		var _winWidth = $(window).width();
		if( _winWidth > 768 ){
			colHeightResize.init();
			colHeightResize.reSize();
		} else if(_winWidth < 769) {
			colHeightResize.init();
		}
	}

	colHeight_check();
	$(window).resize(function(){
		colHeight_check();
	});
}

/* 마이페이지 > 맞춤메시지 - 신규 ABO 프로모션 : 목록 정렬 */
function message_newABO_state(){
	if(! $('.state-new-abo').length ){ return; }

	var stateList = $('.state-new-abo').find('ul');
	stateList.each(function(){
		var subNum = $(this).find('li').length;
		if (subNum === 1){
			$(this).addClass('list-num1');
		} else if (subNum === 2){
			$(this).addClass('list-num2');
		} else if (subNum === 3){
			$(this).addClass('list-num3');
			$(this).find('li').filter(':nth-of-type(3n-1)').addClass('nth-3n-1');
		} else if (subNum === 4){
			$(this).addClass('list-num4');
			$(this).find('li').filter(':nth-of-type(1)').addClass('first');
		} else if(subNum === 5 || subNum > 5){
			$(this).addClass('list-num5');
			$(this).find('li').filter(':nth-of-type(3n-1)').addClass('nth-3n-1');
		}
	});
}

/* 마이페이지 상단 - 메뉴 list */
function jumpMenuList(){
	var $jumpMenu = $('.jump-menu');
	if(! $jumpMenu.length){return;}

	//body 클릭시 열린 메뉴 닫음
	$jumpMenu.click(function(e){
		e.stopPropagation();
	});
	$('html').click(function() {
		$jumpMenu.find('.select-wrapper').hide();
		$jumpMenu.find('.currentTxt').removeClass('active');
	});

	$jumpMenu.each(function(){
		var $this = $(this);
		var _menuBox = $this.find('.select-wrapper');
		var _menuBtn = $this.find('.currentTxt');
		var _menuBtnText = _menuBtn.find('>a');
		var _initText = _menuBox.find('.current').text();

		_menuBtnText.html(_initText);
		_menuBtn.on('click',function(e){
			e.preventDefault();

			if( _menuBox.is(':hidden')){
				_menuBox.slideDown('fast');
				$(this).addClass('active');
			} else if( _menuBox.is(':visible')){
				_menuBox.hide();
				$(this).removeClass('active');
			}
		});

		//서브메뉴 열기
		var _listSelect = $(this).find('.select-list');
		var _depth1 = _listSelect.find('.menu-dep1');

		_depth1.each(function(){
			var subAll = $(this).parents().find('.select-depth2');
			var mySub = $(this).parent().find('.select-depth2');

			if(mySub.length){
				$(this).addClass('hasSub');
			}

			$(this).on('click',function(e){
				if(mySub.length){
					e.preventDefault();

					if(mySub.is(':hidden')){
						$(this).parent().addClass('on');
						$(this).parent().siblings().removeClass('on');
						subAll.hide();
						mySub.slideDown('fast');
					}
					else if(mySub.is(':visible')){
						$(this).parent().removeClass('on');
						mySub.hide();
					}
				}
			});
		});
	});
}

/* 테이블 결과없음 : resize */
function tbl_colspan(){
	var colspanTbl = '.tbl-list-board';
	if (!colspanTbl.length){return;}

	var _winWidth = $(window).width();
	var colspanResize = {
			init : function(){
				$(colspanTbl).each(function(){
					var _noResult = $(this).find('.tr.no-result');
					if (_noResult.length){
						_noResult.find('.search-no-result').width('')
					}
				});
			},
			reSize : function(){
				$(colspanTbl).each(function(){
					var _tblWidth =  $(this).width();
					var _noResult = $(this).find('.tr.no-result');
					if (_noResult.length){
						_noResult.find('.search-no-result').width(_tblWidth);
					}
				});
			}
	}

	function colWidth_check(){
		var _winWidth = $(window).width();
		if( _winWidth > 768 ){
			colspanResize.init();
			colspanResize.reSize();
		} else if(_winWidth < 769) {
			colspanResize.init();
		}
	}

	colWidth_check();
	$(window).resize(function(){
		colWidth_check();
	});
}

/* 신규ABO - 대상자 조회 */
function event_NewABO_select(){
	var _wrapper = $('.targetInquiry'),
		_targetO = _wrapper.find('#promotionTarget'),
		_boxForm = _wrapper.find('.valueBox'),
		_inputAll = _boxForm.find('input[type=text]');

	var obj1 = _boxForm.find('#object1'),
		obj2 = _boxForm.find('#object2'),
		obj3 = _boxForm.find('#object3'),
		obj4 = _boxForm.find('#object4'),
		obj5 = _boxForm.find('#object5');

	_targetO.change(function(){
		if($(this).val() === 'select_type1'){
			_inputAll.hide();
			obj1.show();
		} else if($(this).val() === 'select_type2'){
			_inputAll.hide();
			obj1.hide();
			obj2.show();
		} else if($(this).val() === 'select_type3'){
			_inputAll.hide();
			obj1.hide();
			obj3.show();
		} else if($(this).val() === 'select_type4'){
			_inputAll.hide();
			obj1.hide();
			obj4.show();
		} else if($(this).val() === 'select_type5'){
			_inputAll.hide();
			obj1.hide();
			obj5.show();
		}
	});
}

/* 온라인 FAX 주문 - 검색영역 열고 닫기 */
function toggleBox_faxOrder_srch(){
	$('.btn-faxOrder-serch').on('click', function(e){
		e.preventDefault();

		var parentsO = $(this).parents('.faxOrder-search-box');
		var _srchResult = parentsO.find('.shoping-cart-search');
		var _closeBtn   = parentsO.find('.btnClosed');

		if(_srchResult.is(':hidden')){
			_srchResult.show();
		}

		_closeBtn.on('click',function(e){
			e.preventDefault();
			_srchResult.hide();
		});
	});
}

/* 온라인 FAX 주문 - 툴팁 : size 조정 */
function toolTips_conSize(){
	var _winWidth= $(window).width();
	var PortraiteSize = $(window).width();
	var LandscapeSize = $(window).height();
	if (LandscapeSize < PortraiteSize){PortraiteSize = LandscapeSize;}

	var tooltipBox = $('.toolTip-wrapper');
	var tooltipBTN = tooltipBox.find('.btn-tooltip');

	function tipContWidth(){
		tooltipBox.each(function(){
			var contentWrapper = $(this).find('.tipCont-wrapper');
			if( !contentWrapper.length ){
				var $el = $(this).find('.tooltip-content');
				$el.wrap('<div class="tipCont-wrapper"\>');
			}

			// wrapper 추가 후
			$(this).addClass('type-mob-full');
			var tooltipBTN = $(this).find('.btn-tooltip');
			var tooltipWrapper = $(this).find('.tipCont-wrapper');
			var tooltipContent = tooltipWrapper.find('.tooltip-content');

			var tooltipSize = PortraiteSize;
			if( _winWidth < 361){
				tooltipWrapper.css({
					'width':tooltipSize,
					'max-width':tooltipSize-50
				});
			} else if( _winWidth < 769){
				tooltipWrapper.css({
					'width':tooltipSize,
					'max-width':tooltipSize-80
				});
			} else {
				tooltipWrapper.css({ 'width':'', 'max-width':'none'});
			}
		});

		//버튼 위치 체크 후, 컨텐츠 위치조정
		tooltipBTN.each(function(){
			var leftPosition = $(this).offset().left;
			var tipContent = $(this).parent().find('.tooltip-content');
			var tipContentWidth = tipContent.width();

			if( _winWidth > 768){
				if( leftPosition < 100  &&  leftPosition < tipContentWidth/2){
					tipContent.addClass('left');
				}
			} else {
				tipContent.removeClass('left');
			}
		});
	}

	tipContWidth();
	$(window).resize(function(){
		tipContWidth();
	});
}

/* 온라인 FAX 주문 - 툴팁열기 */
function toolTips_open(){
	var _winWidth= $(window).width();
	var _btnToolTip = $('.toolTip-wrapper').find('.btn-tooltip');
	var _btnTooltipClose = $('.toolTip-wrapper').find('.btn-tooltip-close');

	_btnToolTip.each(function(){
		$(this).on('click',function(e){
			e.preventDefault();

			//컨텐츠 노출
			var _tipContent = $(this).parent().find('.tooltip-content');
			if( _tipContent.is(':hidden')){
				$(this).parent().addClass('open'); //화살표
				_tipContent.show();
			}
			else if( _tipContent.is(':visible')){
				$(this).parent().removeClass('open'); //화살표
				_tipContent.hide();
			}
		});
	});

	//닫기 버튼
	_btnTooltipClose.on('click',function(e){
		e.preventDefault();

		var tooltipWrapper = $(this).parents('.toolTip-wrapper');
		var tooltipContent = tooltipWrapper.find('.tooltip-content');
		tooltipWrapper.removeClass('open'); //화살표
		tooltipContent.hide();
	});
}

/* 온라인 FAX 주문 - 안내글 토글 */
function toggleBox_Guide(){
	var guideboxToggle = $('.js-guidebox-toggle');
	if (! guideboxToggle.length){return}

	guideboxToggle.each(function(){
		var _titBtn = $(this).find('a.title');
		var _hiddenBox = $(this).find('.tgg-hidden-area');

		if( $(this).is('.on')){
			_hiddenBox.show();
		} else{
			_hiddenBox.hide();
		}

		_titBtn.on('click',function(e){
			e.preventDefault();
			if(_hiddenBox.is(':hidden')){
				$(this).parent().addClass('on');
				$(this).find('span').text('닫기');
				_hiddenBox.show();
			} else if(_hiddenBox.is(':visible')){
				$(this).parent().removeClass('on');
				$(this).find('span').text('열기');
				_hiddenBox.hide();
			}
		});
	});
}

/** ------------------------------------
 *  비즈니스
 *  ------------------------------------
 */

/* 여행점수 시뮬레이션 */
function BarChart(){
	if (!$('.barChartBox').length) return;

	var _chartBar = $('.barChartBox').find('ul>li');
	_chartBar.each(function(){
		var barH = $(this).find('.chartBar>span>strong').height()+8;
		$(this).find('.chartNum').css({ position:'absolute', left:'0', bottom:barH });
	});
}

/* Q레그 현황 */
function fixedTable_Scroll(){
	$('.table-scroll').each(function(){
		var _winWidth = $(window).width();
		var obj_orignal = $(this).find('.main-table');

		if( _winWidth < 1025){
			var cloneTable = $(this).find('.clone');
			if( cloneTable.length ){
				return;
			} else {
				obj_orignal.clone(true).appendTo(this).addClass('clone');
				//스크롤 표시 이미지
				//$('<button type="button" class="scrollArrow"\>').appendTo(this);
			}

		} else if( _winWidth > 1024){
			$(this).find('.clone').remove();
			//스크롤 표시 이미지
			//$(this).find('.scrollArrow').remove();
		}

		/* 사용보류
		//스크롤 표시 이미지
		$(this).scroll(function(event){
			var targetWrapperSize = $(this).width(); //wrapper size : 598
			var actualContentSize = event.currentTarget.scrollWidth; //실제 컨텐츠 크기, 858
			var scrolledPosition  = event.currentTarget.scrollLeft; //x좌표가 움직인 거리 , 최대 260
			var scrollable_width  = actualContentSize - targetWrapperSize; // 260 (실제 테이블 width - 감싸는 DIV = 스크롤 가능 길이)

			if (scrolledPosition < 10) {
				//스크롤 시작
				//console.log('스크롤 시작, 오른쪽으로 가기 >>');
				$(this).next('.scrollArrow').removeClass('toLeft toRight');
			}
			else if ( scrollable_width === scrolledPosition ){
				//비교거리 === 움직인 거리
				//console.log('스크롤 끝, << 왼쪽으로 돌아가기');
				$(this).next('.scrollArrow').removeClass('toRight').addClass('toLeft');
			}
			else {
				//움직이는 중
				$(this).next('.scrollArrow').addClass('toRight');
			}
		});
		*/

	});
}

/** ------------------------------------------
 *  인쇄하기
 *  - 맞춤메시지, 게시판
 *   ------------------------------------------
 */

/* 인쇄 - 레이어 인쇄 버튼 */
function print_layerSection(){
	var $btnPrint_layer = $('.layerWrapper .btn-print-it');
	$btnPrint_layer.each(function(){
		$(this).on('click',function(){
			$('html').addClass('printReady_layer');
			$(this).parent('.print-section').siblings().removeClass('set_printArea');
			$(this).parent('.print-section').addClass('set_printArea');
			print();
		});
	});
	function print() {
		window.print();
	}
}

/* 인쇄 - 게시판 상세 페이지 */
function print_pageBoard(){
	var  btnClass = '.btn-printPage , .btn-ico-print, #PDP_Print';
	var _btn_PrintPage = $(btnClass);
	_btn_PrintPage.on('click', function(e){
		e.preventDefault();
		window.print();
	});
}

/** ------------------------------------------
 *  GNB_SubDepth_Control
 *  - 메뉴에 따른 사이드 메뉴 노출 컨트롤
 *  - Depth2 높이에 따라 위치(absolute) 지정 : 플러그인(isotope) 실행
 * -------------------------------------------
 */
function GNB_SubDepth_Control(){
	if(! $('#overlay-menu-wrapper')){ return; }

	var $SubDepthBox = $('#gnbSubDepthBox');
	var $2DepthPanel = $SubDepthBox.find('.tab-pane'); //depth2 공통 class
	var $2Dep_sideMenu = $SubDepthBox.find('.js-gnbSide-menu'); //오른쪽 메뉴
	var $2Dep_brandShop = $SubDepthBox.find(".tab-pane.brand-shop"); //브랜드샵

	/* Depth2 메뉴 클릭 시 */
	var $menuLeftTab = $('#overlay-menu-wrapper .tab-header-list').find('a.tab-toggle');
	$menuLeftTab.each(function(){
		var _MenuID = $(this).attr('href');

		$(this).on('click', function(e){
			e.preventDefault();

			//클릭 메뉴 활성화
			var $tabItem = $(this).parents('li.tab-header-item');
			$tabItem.addClass('active').siblings().removeClass('active');

			//서브메뉴 열기
			$2DepthPanel.removeClass('active');
			$SubDepthBox.find(_MenuID).addClass('active');

			//브랜드샵 클릭 시, 오른쪽 메뉴 숨김
			if($(this).hasClass('itemBrandShop')){
				$2Dep_sideMenu.hide();
			} else {
				$2Dep_sideMenu.show();
				gnbSideMenu();
			}
		});
	});

	/* 오른쪽 메뉴 숨기기 */
	gnbSideMenu();
	function gnbSideMenu(){
		//메뉴영역 확보위해 메뉴 숨김
		var _winWidth = $(window).width();
		if( _winWidth < 1051){
			$('#gnbSubDepthBox').find('.js-gnbSide-menu').hide();
		} else if ( _winWidth > 1050){
			$('#gnbSubDepthBox').find('.js-gnbSide-menu').show();
		}
	}
	$(window).resize(function(){
		gnbSideMenu();

		//브랜드샵 활성화상태에서 resize 되면 숨김
		if ($2Dep_brandShop.hasClass('active')){
			$2Dep_sideMenu.hide();
		}
	});

	/* 메뉴 정렬용 : 높이값 구하기*/
	GNB_gridSize();
	function GNB_gridSize(){
		var gridItem = $('.gnb-nav .dep2-grid').find('>li');
		gridItem.each(function(){
			if( $(this).find('.depth3-links').length ){
				//3차메뉴 높이
				var dep3Nums = $(this).find('.depth3-links>li').length;
				var dep3Size = (dep3Nums * 29) + 25;

				//2차메뉴 높이
				var dep2_Anchor = 24;
				var dep2Size = dep2_Anchor + dep3Size;
				$(this).css({ height : dep2Size });
			} else {
				var dep2BoxSize = 48;
				$(this).css({ height : dep2BoxSize });
			}
		});
	}

	/* 메뉴 높이에 따라 메뉴위치 변경(플러그인 실행) */
	$('.dep2-grid').isotope({
		layoutMode: 'fitColumns',
		itemSelector: '.dep2-grid>li'
	});
}

/** ------------------------------------------
 *  퀵링크
 *  - 바로가기 컨트롤(.footerShotcut.pc)
 *  - qkLinkAlign()
 * -------------------------------------------
 */
function quickLinks(){
	var $qLinkBTN = $('.brand-btn');
	$qLinkBTN.each(function(){
		$(this).on('click',function(){
			var $anchorList = $(this).next();

			if( $anchorList.is(':hidden')){
				//다른 리스트 닫기
				var $orderList = $(this).parents('.footerShotcut').find('.brand-wrap');
				$orderList.hide();
				$orderList.siblings('.brand-btn').removeClass('selected');

				//클릭한 리스트 열기
				$(this).addClass('selected');
				$anchorList.slideDown(200);
			} else {
				$(this).removeClass('selected');
				$anchorList.hide();
			}
		});
	});

	//body 클릭시 열린 메뉴 닫음
	$('.quick-links-misc').click(function(e){
		e.stopPropagation();
	});
	$('html').click(function() {
		$qLinkBTN.next().hide();
		$qLinkBTN.removeClass('selected');
	});

	//#accordion 메뉴위치 정렬하기
	qkLinkAlign();
	$(window).resize(function(){
		qkLinkAlign();
	});
};

function qkLinkAlign(){
	var _winWidth = $(window).width();
	var qLinkItemRun = {
		reStore : function(){
			function resetMOB(){
				var _winWidth = $(window).width();
				var qLinkWrapper = $('#accordionQuick');
				var qLinkItem = qLinkWrapper.find('.quick-links-item');

				qLinkWrapper.attr('style','');
				qLinkItem.attr('style','');
				//$('#accordionQuick').isotope().isotope('destroy');
			}

			resetMOB();
			setTimeout(function(){
				resetMOB();
			},300);
		},
		setupAlign : function(){
			function desktopView(){
				var _winWidth = $(window).width();
				var qLinkWrapper = $('#accordionQuick');
				var qLinkWrapper_height = qLinkWrapper.outerHeight(true);
				var qLinkItem = qLinkWrapper.find('.quick-links-item');

				qLinkWrapper.css({height:qLinkWrapper_height});
				qLinkItem.each(function(){
					var qHeader = $(this).find('.quick-links-header');
					var qPanel  = $(this).find('.panel-collapse');

					var qHeaderHeight = 31; // p
					var qPanel_li_Num = qPanel.find('li').length;
					var qPanel_li_Height = 28;
					var itemHeight;
					var itemWidth = 210;

					if(_winWidth < 851){
						itemWidth = 195;
					}

					if ( qPanel.length ){
						//헤더 p + 서브링크 ul
						itemHeight = qHeaderHeight + qPanel.outerHeight(true) + 5;
						$(this).css({width:itemWidth, height:itemHeight});
					} else {
						itemHeight = qHeaderHeight;
						$(this).css({width:itemWidth, height:itemHeight});
					}
				});
				//$('#accordionQuick').isotope({layoutMode: 'fitColumns',itemSelector: '.quick-links-item'});
			}

			desktopView();
			setTimeout(function(){
				desktopView();
			},300);
		}
	}

	if(_winWidth < 769) {
		qLinkItemRun.reStore();
		setTimeout(function(){
			$('#accordionQuick').isotope().isotope('destroy');
		},300);
	}
	if( _winWidth > 768 ){
		qLinkItemRun.setupAlign();
		setTimeout(function(){
			$('#accordionQuick').isotope({layoutMode: 'fitColumns',itemSelector: '.quick-links-item'});
		},300);
	}
}

/** ------------------------------------------
 *  로딩
 * -------------------------------------------
 */
function loadingLayer(){
	var loadImg =$('<div class="loading" id="loading"><div class="loading-wrap"><img src="/_ui/responsive/theme-blue/images/akl_common/img_loading.gif" alt="로딩중"></div></div>');
	if (loadImg.length){
		$('#loading').remove();
	}
	$('body').append(loadImg);
}
function loadingLayerClose(){
	$('#loading').remove();
	return false;
}

/** ------------------------------------------
 *  layerPopOver
 *  - btnOpenLayer : 레이어 열기 버튼
 *  - targetLayer  : 버튼 클릭시 열리는 레이어
 * -------------------------------------------
 */
var layerCounter = 0;
var openedLayerPrdt = false;
var openedLayerCMS = false;
function layerPopOver( btnOpenLayer , targetLayer ){
	var $layerContentBox = $(targetLayer).find('.layerBox'); //기본 레이어 타입
	var $layerPrdtDetail = $(targetLayer).find('.typeFullSizeView'); //제품 크게보기 레이어
	var $layerVideoView = $(targetLayer).find('.typeVideoView'); //동영상 레이어
	var $layerAdminAdd = $(targetLayer).find('.typeAdminAdd'); //관리자 등록(CMS)

	var scroll_LOCK = function(){
		$('html').addClass('scrollLock');

		/* 제품상세 크게보기 레이어인 경우 */
		if( $layerPrdtDetail.length){
			$('html').addClass('activeFullSizeView');
		}

		/* 맞춤메시지  .search-no-result */
		tbl_colspan();
	}
	var scroll_RESET = function(){
		$('html').removeClass('scrollLock printReady_layer'); //.printReady_layer : 레이어 팝업 인쇄용

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
			} else if( targetHeight > _winHeight ){
				$layerContentBox.css({
					'display':'block',
					'position':'absolute',
					'top':'3%',
					'left':'0',
					'right':'0',
					'max-width':'98%',
					'height':'auto',
					'margin':'0 auto',
					'margin-bottom':'3%'
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

			//맞춤메시지 (모바일 전체화면)
			if ( $layerContentBox.is('.typeMessageCenter') ){
				if( _winWidth < 769 ){
					$layerContentBox.css({
						'display':'block',
						'position':'absolute',
						'top':'0',
						'left':'0',
						'right':'0',
						'width':'100%',
						'max-width':'100%',
						'height':'auto',
						'margin-top':'0',
						'margin-left':'0',
						'margin-bottom':'0'
					});
				} else {
					$layerContentBox.css({
						'display':'block',
						'position':'absolute',
						'top':'20px',
						'left':'0',
						'right':'0',
						'max-width':'1200px',
						'height':'auto',
						'margin':'0 auto',
						'margin-bottom':'20px'
					});
				}
			}
			//맞춤메시지 : 끝
		}

		/* TYPE 2 : 제품상세-크게보기 (모바일 전체화면) */
		function _layerTypeFullSize(){
			var topPosition = (_winHeight/2);
			var leftPosition = (_winWidth/2);
			var targetWidth_prdt = $layerPrdtDetail.width();
			var targetHeight_prdt = $layerPrdtDetail.height();

			//크게보기 레이어 열린상태로 변경
			openedLayerPrdt = true;

			//레이어 길이와 윈도우 높이 비교
			var reHeight, reMargin;

			if(_winWidth < 420){
				reHeight = '100%';
			}
			if( targetHeight_prdt > _winHeight ){
				reHeight = 'auto';
				reMargin = '3%';
			} else {
				reHeight = '100%';
				reMargin = '';
			}

			if( _winWidth < 831 ){
				$layerPrdtDetail.css({
					'display':'block',
					'position':'absolute',
					'top':'0',
					'left':'0',
					'right':'0',
					'width':'100%',
					'height':reHeight,
					'margin-top':'0',
					'margin-left':'0',
					'margin-bottom':'0'
				});
			} else if( _winWidth > 830 ){
				$layerPrdtDetail.css({
					'display':'block',
					'position':'absolute',
					'top':'5%',
					'left':leftPosition,
					'right':'',
					'width':'',
					'max-width':'960px',
					'height':'auto',
					'margin-bottom':reMargin,
					'margin-left':-(targetWidth_prdt/2),
					'-webkit-transition':'left .5s',
					'transition':'left .5s'
				});
			}

			//RD화면 (모바일 전체화면)
			if ( $layerPrdtDetail.is('.RD-View') ){
				if( _winWidth < 769 ){
					$layerContentBox.css({
						'display':'block',
						'position':'absolute',
						'top':'0',
						'left':'0',
						'right':'0',
						'width':'100%',
						'max-width':'100%',
						'height':'auto',
						'margin-top':'0',
						'margin-left':'0',
						'margin-bottom':'0'
					});
				} else {
					$layerContentBox.css({
						'display':'block',
						'position':'absolute',
						'top':'20px',
						'left':'0',
						'right':'0',
						'max-width':'960px',
						'height':'auto',
						'margin':'0 auto',
						'margin-bottom':'20px'
					});
				}
			}
			//맞춤메시지 : 끝
		}

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
				'margin-left':-(targetWidth_video/2),
				'-webkit-transition':'left .5s',
				'transition':'left .5s'
			});
		}

		/* TYPE 4 : CMS용(어드민 등록) */
		function _layerTypeCMS(){
			var topPosition = (_winHeight/2);
			var leftPosition = (_winWidth/2);
			var targetWidth_admin = $layerAdminAdd.width();
			var targetHeight_admin = $layerAdminAdd.height();

			//CMS용 레이어 열린상태로 변경
			openedLayerCMS = true;

			if( _winWidth < 769 ){
				$layerAdminAdd.css({
					'display':'block',
					'position':'absolute',
					'top':'0',
					'left':'0',
					'right':'0',
					'width':'100%',
					'height':'auto',
					'margin-top':'15px',
					'margin-left':'0',
					'margin-bottom':'12px'
				});

				var cnH = _winHeight*0.6;
				$layerAdminAdd.find('.layer-content-wrapper').addClass('overFlow').height(cnH);

			} else {
				$layerAdminAdd.css({
					'display':'block',
					'width':'600px',
					'max-width':'none',
					'top':'0',
					'left':'0',
					'margin-top':'0',
					'margin-left':'0'
				});

				$layerAdminAdd.find('.layer-content-wrapper').removeClass('overFlow').height('');
			}

			/* 2018.05.17 사용보류
			var layerTabPanel = $layerAdminAdd.find('.layer-tabs-wrapper');
			var subTabCon = layerTabPanel.find('.tab-pane.content-block');
			var biggestHeight=0;
			setTimeout(function(){
				//탭 컨텐츠 높이 동일하게 고정
				subTabCon.each(function(){
					var contsHeight = $(this).outerHeight(true);
					//console.log(contsHeight);
					if(contsHeight > biggestHeight){
						biggestHeight = contsHeight;
					}
				}).height(biggestHeight);
			},300)
			//console.log('biggestHeight'+biggestHeight);
			*/
		}

		_layerTypeBasic(); //기본형
		_layerTypeFullSize(); //제품상세 큰이미지 보기
		_layerTypeVideoView(); //동영상
		//_layerTypeCMS(); //CMS
	}

	/* 레이어 위치잡기 */
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

	$(targetLayer).fadeIn(150, function(){
		scroll_LOCK();
		setPosition();

		$('#mask').addClass('on');
		$(this).css('z-index',_thisIndex);
		$(this).addClass('active');
		$(this).attr('tabindex','0').show().focus();

		//공통팝업(CMS)인 경우
		/*
		if( $layerAdminAdd.length && openedLayerCMS === true){
			scroll_RESET();
			$('#mask').remove();
			$layerAdminAdd.addClass('admin');
			openedLayerCMS = false;
		} else {
			openedLayerCMS = false;
		}*/
	});

	/* 레이어 닫기 */
	var btn_close = 'a[class*=_close], [data-btn-close="closeLayer"], .cClose, .closeCbox, .modal-close-icon, .btnClose';
	var closeBtn = $(targetLayer).find(btn_close);
	$(closeBtn).on('click', function(e){
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

		//제품상세 레이어 열때  함수 재실행
		if (openedLayerPrdt === true){
			openedLayerPrdt = false;
			videoSize();

			setTimeout(function(){
				videoSize(); //제품상세 상단 이미지 embed 영역
				//videoWrapperSize(); //제품상세 상단 이미지 layer 영역
			},200);
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


/** ------------------------------------------
 *  commonPopOver
 *  - 어드민 관리 공통팝업(메인) 전용
 * -------------------------------------------
 */
var cmnlayerCounter = 0;
var cmnOpenedLayer = false;
function commonPopOver( cmnBtnOpenLayer , cmnTargetLayer ){
	var $layerAdminAdd = $(cmnTargetLayer).find('.typeAdminAdd');

	/* 레이어 위치잡기 */
	function cmnSetPosition(){
		var _screenW = screen.width;
		var _screenH = screen.height;
		var _winWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var _winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

		var topPosition = (_winHeight/2);
		var leftPosition = (_winWidth/2);
		var targetWidth_admin = $layerAdminAdd.width();
		var targetHeight_admin = $layerAdminAdd.height();

		//레이어 열린상태로 변경
		cmnOpenedLayer = true;

		if( _winWidth < 769 ){
			$layerAdminAdd.css({
				'display':'block',
				'position':'absolute',
				'top':'0',
				'left':'0',
				'right':'0',
				'width':'100%',
				'height':'auto',
				'margin-top':'15px',
				'margin-left':'0',
				'margin-bottom':'12px'
			});

			var cnH = _winHeight*0.6;
			$layerAdminAdd.find('.layer-content-wrapper').addClass('overFlow').height(cnH);

		} else {
			$layerAdminAdd.css({
				'display':'block',
				'width':'600px',
				'max-width':'none',
				'top':'0',
				'left':'0',
				'margin-top':'0',
				'margin-left':'0'
			});

			$layerAdminAdd.find('.layer-content-wrapper').removeClass('overFlow').height('');
		}
	}

	/* 레이어 위치잡기 */
	cmnSetPosition();
	$(window).resize(function(){
		cmnSetPosition();
	});

	/* 레이어 열기 */
	cmnlayerCounter++;
	var _zindex = 9999;
	var _thisIndexCmn = _zindex + cmnlayerCounter;

	$(cmnTargetLayer).fadeIn(150, function(){
		cmnSetPosition();
		$layerAdminAdd.addClass('admin');
		$(this).css('z-index',_thisIndexCmn);
		$(this).addClass('active');
		$(this).attr('tabindex','0').show().focus();
	});

	/* 레이어 닫기 */
	var btn_close = 'a[class*=_close]';
	var closeBtn = $(cmnTargetLayer).find(btn_close);
	$(closeBtn).on('click', function(e){
		e.preventDefault();

		$(cmnTargetLayer).find('.typeAdminAdd').attr('style','');

		if($(this).data('closeAll') === true){
			var layerAll = $(document).find('.layerWrapper.active');
			$(layerAll).fadeOut().removeClass('active').attr('style','');
			cmnlayerCounter = 0;
		} else {
			$(cmnTargetLayer).fadeOut().removeClass('active').attr('style','');
			$(cmnBtnOpenLayer).focus();

			if($('.layerWrapper.active').length === 0){
				cmnlayerCounter = 0;
			}
		}
	});

	// $(cmnBtnOpenLayer)가  Anchor일 경우 return false
	var elTagName = $(cmnBtnOpenLayer).prop('tagName');
	var tagA = 'A';
	if( elTagName == tagA ){
		event.preventDefault();
	}

	// $(cmnBtnOpenLayer)가 없는 경우 (버튼클릭 없이 자동실행)
	if( cmnBtnOpenLayer === ''){
		$(closeBtn).on('click',function(e){
			$(document).find('#skipNavi').attr('tabindex','0').focus();
		});
	}

	/**
	 * 키보드 사용시 포커스 제어
	 */
	var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, iframe, [tabindex], [contenteditable]';
	var focusableEls = $(cmnTargetLayer).find(focusableElementsString),
		firstFocusableEl = focusableEls.first()[0],
		lastFocusableEl = focusableEls.last()[0],
		KEYCODE_TAB = 9;

	$(cmnTargetLayer).on('keydown', function(e) {
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


/** ------------------------------------------
 *  jquery.msgbox
 *  - alert, confirm 전용 플러그인
 * -------------------------------------------
 */

var msgboxCounter = 0;
function msgboxCommon( msgboxType, msgboxContent , functionName ){
	msgboxCounter++;
	$.msgbox({
		id: msgboxCounter,
		type: msgboxType,
		content: (msgboxContent+"").replace(/[\n|\r]/g,"<br/>"),
		onOpen : function(){
			this.$buttons.OK.focus();
		},
		onClose: functionName
	});
}

/**
 * jquery.msgbox v8.0
 * http://jmsgbox.com
 */
(function($, undefined){
	/* Key shortcuts */
	var KEYS = {
		Esc: 27,
		Space: 32,
		Left: 37,
		Right: 39,
		Up: 38,
		Down: 40,
		Tab: 9,
		Enter: 13
	};

	/* 창사이즈 조정위해 추가 : START */
	var reWidth;
	var _winWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var _winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	if(_winWidth < 400){ reWidth = _winWidth - 16;}
	else { reWidth = '400';}
	/* 창사이즈 조정위해 추가 : END */

	var DEFAULTS = {
		fixed: true,		// whether the position of the box is fixed
		overlay: true,		// show overlay ?
		overlayEvent: 'flash',
							// click overlay to flash|close or function?
		id: 0,				// you need an ID to identify instances, only applicable for $.msgbox
		open: false,		// show msgbox when initialized ? By default, $(...).msgbox will not show, $.msgbox will do.
							// However, you could use $.msgbox({...,open:false,...}) to force it hidden on initialization
		drag: false,		// whether the msgbox is draggable, true|false|jQuery Selector(drag within the element)
		resize: false,		// specify false to disable resize, or a scale as the minimal scale to be resized.
		title: false,		// the title of the msgbox
		type: 'html',		// the type of the content, text|ajax|html|iframe|confirm|alert|prompt|warning|info=alert|error|success|photo|image=photo|album|gallery=album
		content: false,		// the content
		icons: [],			// the icons to control the msgbox, min|max|close
		buttons: [],		// the buttons OK, Cancel, or custom buttons?
		buttonEvents: {},	// the behavior of the buttons {'OK': function(){ alert('You clicked OK.'); }}
		keyEvents: {
			Esc: 'close',
			Space: 'play',
			Left: 'prev',
			Right: 'next',
			Enter: 'play'
		},					// key bindings, use string to call the api or specify a function
		prefix: 'jMsgbox',	// the class prefix of overlay: jMsgbox-overlay, the box: jMsgbox-msgbox
		width: 500,			// the width of msgbox
		height: 350,		// the height of msgbox
		initialWidth: reWidth, // the initial width of msgbox, when loaded, it will be animated to options.width and options.height
		initialHeight: 300, // see initialHeight
		top: false,			// the position of msgbox, if false, will show in the middle of the window
		left: false,
		titleHeight: 30,	// the height of the title of it is not specified in css
		footHeight: 40,
		transition: "swing",// the transition, only jquery-build transitions supported (swing, linear)
		speed: 300,			// the speed of the animation of open and close
		opacity: .9,		// the opacity of the overlay, you can use !important to override this in css
		zIndex: 12000,		// the initial z-index of overlay and wrap. Just in case some other elements in document have greater z-index
		lang: 'en',			// the language, jquery.msgbox.i18n.js need
		minPos: 'top',		// or bottom, the position of the "task bar"
		minWidth: 200,		// the width of minimized msgbox, height is titleHeight

		photoAuto: true,	// whether to play the album automatically on first open
		photoSpeed: 2500,	// the interval of showing photos
		photoScaled: false,	// whether to scale the photo the scale of (options.width, options.height)
		photoFade: 500,		// whether to use fade transition to show photos, false, or a miniseconds

		padding: '0 0 10px',			// the padding of the content

		imgError: 'Failed to load image.',	// the error message when loading image
		xhrError: 'Failed to load URL.',	// the error message when using ajax
											// these will be overrided by $.msgboxI18N.en.imgError
											//						and   $.msgboxI18N.en.xhrError

		// callbacks
		onOpen: false,
		onClose: false,
		onLoad: false,
		onBeforeClose: false
	};

	// helper functions
	var createElement = function(tag, className, style, attr) {
		style = style || {};
		attr  = attr  || {};
		return $(document.createElement(tag)).addClass(className).attr(attr).css(style);
	};

	// Get the window height using innerHeight when available to avoid an issue with iOS
	// http://bugs.jquery.com/ticket/6724
	// inspired from colorbox (http://www.jacklmoore.com/colorbox/)
	var winheight = function() {
		return window.innerHeight ? window.innerHeight : $(window).height();
	};

	// i18n, if text translation exists, return it, otherwise return the text itself
	// xhrError and imgError will return options.xhrError, options.imgError
	var _ = function (text, lang) {
		if (!$.msgboxI18N || !$.msgboxI18N[lang] || !$.msgboxI18N[lang][text])
			return text;
		return $.msgboxI18N[lang][text];
	};

	// class MSGBOX
	var MSGBOX = function (obj, options) {

		// variable starts with $ are jquery object
		/* the overlay */
		this.$overlay;
		/* the whole wapper of msgbox */
		this.$wrap;
		/* the control panel containing the icons */
		this.$controls;
		/* the icons (prev|play|next|min|max|close) */
		this.$icons    = {};
		/* the title wrap */
		this.$title;
		/* the content wrapper */
		this.$content;
		/* the content loaded */
		this.$loaded;
		/* the prompt input */
		this.$prompt;
		/* the iframe */
		this.$iframe;
		/* the foot wrapper */
		this.$foot;
		/* the img for photo/gallery */
		this.$img;
		/* the buttons in the foot */
		this.$buttons = {};
		/* the resize handler in the right bottom */
		this.$resize;
		/* the trigger of msgbox */
		this.$trigger = obj;

		/* the options */
		this.options    = options;
		/* the returned value, used for confirm/prompt */
		this.v;
		/* flag, whether the content is loaded */
		this.loaded     = false;
		/* flag, whether msgbox is minimized */
		this.minimized  = false;
		/* flag, whether msgbox is maximized */
		this.maximized  = false;
		/* flag, whether msgbox is opened */
		this.opened     = false;
		/* the drag data used to calculate the  position of msgbox */
		this.dragData   = {};
		/* the resize data used to calculate the dimension of msgbox */
		this.resizeData = {};
		/* for album
		playing = -2, force paused when closed
		playing = -1, paused
		playing = setTimeout, playing*/
		this.playing    = false;
		/* whether title is specified by user. If it is, title will not be replaced.  */
		this.titleSpecified = false;
		/* the index of the photo in the gallery */
		this.index      = 0;

		/* complete the missing options or options in some situation */
		this._completeOptions();
		/* assemble the doms(elements) */
		this._assemble();
		/* append the elements to body */
		this._append();
		/* bind the events for the elements/keys */
		this._bindEvents();
		/* open msgbox if options.open is true */
		if (this.options.open) this.open();
	};

	// methods of MSGBOX
	MSGBOX.prototype = {

		// private functions are starting with _

		// complete the options
		_completeOptions: function () {
			switch (this.options.type) {
				case 'confirm':
				case 'prompt':
					// give the buttons
					if (this.options.buttons!==null && this.options.buttons.length == 0)
						this.options.buttons = ['OK', 'Cancel'];
					if (this.options.icons!==null && this.options.icons.length == 0)
						this.options.icons   = ['close'];
					// give the dimension
					if (this.options.width == DEFAULTS.width && this.options.height == DEFAULTS.height) { // user not specify dimension
						this.options.width = this.options.initialWidth;
						this.options.height = this.options.initialHeight;
					}
					break;

				case 'alert':
				case 'warning':
				case 'info':
				case 'error':
				case 'success':
					// give the buttons
					if (this.options.buttons!==null && this.options.buttons.length == 0)
						this.options.buttons = ['OK'];
					if (this.options.icons!==null && this.options.icons.length == 0)
						this.options.icons   = ['close'];
					// give the dimension
					if (this.options.width == DEFAULTS.width && this.options.height == DEFAULTS.height) { // user not specify dimension
						this.options.width = this.options.initialWidth;
						this.options.height = this.options.initialHeight;
					}
					break;

				case 'photo':
				case 'image':
					// give the trigger as the handler
					if (this.$trigger && !this.options.content)
						this.options.content = this.$trigger;
					// give the icons
					if (this.options.icons!==null && this.options.icons.length == 0)
						this.options.icons   = ['close'];
					// disable resize by default
					this.options.resize = false;
					break;

				case 'album':
				case 'gallery':
					// get the selector of the gallery
					if (this.$trigger && !this.options.content)
						this.options.content = this.$trigger.selector;
					// give the icons
					if (this.options.icons!==null && this.options.icons.length == 0)
						this.options.icons   = ['prev', 'play', 'next', 'close'];
					// disable resize by default
					this.options.resize = false;
					break;

				default:
					// default icons
					if (this.options.icons!==null && this.options.icons.length == 0)
						this.options.icons   = ['max', 'close'];
					break;
			}

			// get the url from trigger if it not specified
			if (($.inArray(this.options.type, ['ajax', 'iframe']) > -1) && !this.options.content && this.$trigger) {
				this.options.content = this.$trigger.attr('href');
			}

			if (!this.options.width) this.options.width = this.options.initialWidth;
			if (!this.options.height) this.options.height = this.options.initialHeight;

			// give default message
			if (!this.options.content && $.inArray(this.options.type, ['ajax', 'iframe', 'photo', 'image', 'album', 'gallery']) == -1 )
				this.options.content = 'jquery.msgbox v ' + $.msgbox.version;

			// not foot height if no buttons
			if (this.options.buttons === null || this.options.buttons.length == 0)
				this.options.footHeight = 0;

			// only one instance support for $(...).msgbox
			if (this.$trigger) this.options.id = 0;

			// title is specified?
			if (this.options.title) this.titleSpecified = true;
			// give default speed for the photo fading animation
			if (this.options.photoFade === true) this.options.photoFade = DEFAULTS.photoFade;
			if (this.options.photoFade === false) this.options.photoFade = 0;

			// specify the default error for xhrError and imgError from options
			$.msgboxI18N    = $.msgboxI18N || {};
			$.msgboxI18N.en = $.msgboxI18N.en || {};
			$.msgboxI18N.en.xhrError = $.msgboxI18N.en.xhrError || this.options.xhrError;
			$.msgboxI18N.en.imgError = $.msgboxI18N.en.imgError || this.options.imgError;

		},

		// assemble the html elements
		_assemble: function () {
			// overlay
			this.$overlay = createElement('div', this.options.prefix+'-overlay', {
				position: 'fixed',
				top: 0,
				left: 0,
				height: '100%',
				width: '100%',
				opacity: this.options.opacity,
				display: 'none'
			});
			// wrap
			// calculate position of msgbox
			var top  = this.options.top !== false ? this.options.top : (winheight() - this.options.initialHeight) / 2 - this.options.titleHeight;
			var left = this.options.left !== false ? this.options.left : ($(window).width() - this.options.initialWidth) / 2;
			this.$wrap = createElement('span', this.options.prefix+'-wrap', {
				display: 'none',
				width: this.options.initialWidth,
				height: this.options.initialHeight,
				position: this.options.fixed ? 'fixed' : 'absolute',
				overflow: 'hidden',
				top: this.options.fixed ? top : top + $(window).scrollTop(),
				left: this.options.fixed ? left : left + $(window).scrollLeft()
			});

			// title
			this.$title = createElement('div', this.options.prefix + '-title', {
				position: 'relative',
				height: this.options.titleHeight,
				cursor: this.options.drag ? 'move' : 'auto'
			});
			if (this.options.title) this.$title.html(this.options.title);

			// control panel
			var iconCss = {display: 'inline-block'}
			this.$icons.prev  = createElement('a', this.options.prefix + '-prev', iconCss, {href: 'javascript:;', title:_('Prev', this.options.lang)});
			this.$icons.next  = createElement('a', this.options.prefix + '-next', iconCss, {href: 'javascript:;', title:_('Next', this.options.lang)});
			this.$icons.play  = createElement('a', this.options.prefix + '-play', iconCss, {href: 'javascript:;', title:_('Play/Pause', this.options.lang)});
			this.$icons.min   = createElement('a', this.options.prefix + '-min', iconCss, {href: 'javascript:;', title:_('Minimize', this.options.lang)});
			this.$icons.max   = createElement('a', this.options.prefix + '-max', iconCss, {href: 'javascript:;', title:_('Maximize', this.options.lang)});
			this.$icons.close = createElement('a', this.options.prefix + '-close', iconCss, {href: 'javascript:;', title:_('Close', this.options.lang)});
			this.$controls    = createElement('span', this.options.prefix + '-controls', {
				position: 'absolute',
				height: '100%'
			});
			if (this.options.icons!==null) {
				for (var i=0; i<this.options.icons.length; i++) {
					this.$controls.append(this.$icons[this.options.icons[i]]);
				}
			}

			// foot
			var buttonAttr = {type: 'button'};
			this.$buttons.OK     = createElement('input', this.options.prefix + '-ok', {}, buttonAttr);
			this.$buttons.Cancel = createElement('input', this.options.prefix + '-cancel', {}, buttonAttr);
			this.$buttons.OK.val(_('확인', this.options.lang));
			this.$buttons.Cancel.val(_('취소', this.options.lang));

			this.$foot = createElement('div', this.options.prefix + '-foot', {
				position: 'relative',
				height: this.options.footHeight
				//,'line-height': this.options.footHeight
			});
			if (this.options.buttons!==null) {
				var x = 0;
				for (var i=0; i<this.options.buttons.length; i++) {
					if (!this.$buttons[this.options.buttons[i]])
						this.$buttons[this.options.buttons[i]] = createElement(
							'input',
							this.options.prefix + '-button-' + (++x), {},
							buttonAttr
						).val(this.options.buttons[i]);
					this.$foot.append(this.$buttons[this.options.buttons[i]]);
				}
			}

			// resize
			this.$resize = createElement('a', this.options.prefix + '-resize', {
				cursor: 'se-resize',
				position: 'absolute',
				bottom: '0px',
				right: '0px',
				display: 'inline-block'
			}, {href: 'javascript:;'});

			if (!$.support.boxSizing) { // fix ie7's bug that scrollbar appears when an absolute element with bottom:0 and right:0 in a relative container
				this.$resize.css({
					right: '5px',
					bottom: '5px'
				});
			}

			// content
			this.$content = createElement('div', this.options.prefix + '-content', {
				overflow: 'hidden',
				position: 'relative'
			});

			// prompt
			this.$prompt = createElement('input', this.options.prefix + '-prompt-input', {}, {
				type: 'text'
			});

			this.$loaded = createElement('div', this.options.prefix + '-loaded', {
				padding: this.options.padding,
				width: '100%',
				height: '100%',
				overflow: $.inArray(this.options.type, ['photo', 'image', 'album', 'gallery']) == -1 ? 'auto' : 'hidden'
			});

			this.$loading = createElement('div', this.options.prefix + '-loading', {
				height: '100%',
				width:  '100%'
			});
		},

		// append the element to DOM
		_append: function () {
			if (this.options.overlay) $(document.body).append(this.$overlay);
			$(document.body).append(this.$wrap.append(this.$title.append(this.$controls), this.$content.append(this.$loaded)));
			if (this.options.buttons !== null && this.options.buttons.length > 0) {
				this.$foot.appendTo(this.$wrap);
				if (this.options.resize) this.$resize.appendTo(this.$foot);
			} else {
				if (this.options.resize) this.$resize.appendTo(this.$content);
			}
		},

		_bindEvents: function () {
			var that = this;

			// the trigger
			if (this.$trigger) {
				this.$trigger.bind ('click.' + this.options.prefix, function (e) {
					e.preventDefault();
					that.focus();
				});
			}

			this.enableResize();
			this.enableDrag();

			if (this.options.overlay && this.options.overlayEvent) {
				var fn = false;
				if ($.isFunction(this.options.overlayEvent))
					fn = this.options.overlayEvent;
				else if ($.isFunction(this[this.options.overlayEvent])) {
					fn = this[this.options.overlayEvent];
				}
				if (fn) this.$overlay.bind('click.' + this.options.prefix, function () {
					fn.apply(that);
				});
			}

			// bind events for buttons
			switch (this.options.type) {

				case 'confirm':

					if (!(this.options.buttonEvents.OK)) {
						this.options.buttonEvents.OK = function () {
							this.close(function () { this.v = true; });
						}
					}

					if (!(this.options.buttonEvents.Cancel)) {
						this.options.buttonEvents.Cancel = function () {
							this.close(function () { this.v = false; });
						}
					}
					break;

				case 'prompt':

					if (!(this.options.buttonEvents.OK)) {
						this.options.buttonEvents.OK = function () {
							this.close(function () { this.v = this.$prompt.val(); });
						}
					}

					if (!(this.options.buttonEvents.Cancel)) {
						this.options.buttonEvents.Cancel = function () {
							this.close(function () { this.v = undefined; });
						}
					}
					break;

				default:

					if (!(this.options.buttonEvents.OK)) {
						this.options.buttonEvents.OK = 'close';
					}
					break;
			}

			$.each (this.options.buttonEvents, function (button, fn) {
				if (!$.isFunction(fn)) fn = $.isFunction(that[fn]) ? that[fn] : false;
				if (!fn) return;
				that.$buttons[button].bind('click.' + that.options.prefix, function(){
					fn.apply(that);
				});
			});

			// bind events for icons
			$.each (this.$icons, function (icon, $icon) {
				var fn;
				switch (icon) {
					case 'close':
						fn = function (e) { e.stopPropagation(); that.close();};
						$icon.bind('click.' + that.options.prefix, fn);
						break;
					case 'max':
						fn = function (e) { e.stopPropagation(); that.max();  };
						$icon
							.unbind('click.max.' + that.options.prefix)
							.one('click.max.' + that.options.prefix, fn);
						break;
					case 'min':
						fn = function (e) { e.stopPropagation(); that.min(); };
						$icon
							.unbind('click.min.' + that.options.prefix)
							.one('click.min.' + that.options.prefix, fn);
						break;
					case 'play':
						fn = function (e) { e.stopPropagation(); that.play(); };
						$icon.bind('click.play.' + that.options.prefix, fn);
						break;
					case 'prev':
						fn = function (e) { e.stopPropagation(); that.prev(); };
						$icon.bind('click.prev.' + that.options.prefix, fn);
						break;
					case 'next':
						fn = function (e) { e.stopPropagation(); that.next(); };
						$icon.bind('click.next.' + that.options.prefix, fn);
						break;
				}

			});

			this.$wrap.bind('mousedown.' + that.options.prefix, function () {
				$(this).css('z-index', ++ $.msgbox._zIndex);
				$.msgbox._focused = that;
			});

			// key binds
			$.each (this.options.keyEvents, function(key, fn) {
				key = KEYS[key] || key;
				if (!key) return;

				if (!$.isFunction(fn)) fn = $.isFunction(that[fn]) ? that[fn] : false;
				if (!fn) return;

				$(document).bind('keydown.' + that.options.prefix, function(e) {
					if (e.keyCode !== key) return;
					if ($.msgbox._focused != that) return;
					fn.apply(that);
				});
			});


		},

		_loadImg: function ($handler, callback) {
			if (!$handler || $handler.length == 0) return;

			var that = this;
			// purge
			//this.$content.contents().filter(function(){
			//	return this.nodeType == 3 || (!$(this).is(that.$img) && !$(this).is(that.$resize));
			//}).remove();

			this.$loading = createElement('div', this.options.prefix + '-loading', {
				height: '100%',
				width:  '100%'
			}).appendTo(this.$loaded);

			if (!this.titleSpecified) this.title ($handler.attr('title'));

			var imgload = function () {
				that.$loading.remove();
				that.$loading = undefined;

				if (that.options.photoScaled) { // scaled to height and width
					var shouldBeHeight = that.options.height - that.options.titleHeight - that.options.footHeight;
					var imgHeight = that.$img.outerHeight(true);
					var imgWidth  = that.$img.outerWidth(true);
					var ratio = 1;

					if (imgHeight > shouldBeHeight)
						ratio = shouldBeHeight / imgHeight;
					if (imgWidth*ratio > that.options.width)
						ratio = that.options.width / imgWidth;

					var realWidth = imgWidth * ratio, realHeight = imgHeight * ratio;
					that.$img.css ({
						position: 'absolute',
						width : (imgWidth * ratio) + 'px',
						height: (imgHeight * ratio)  + 'px'
					});

					if (realHeight <= shouldBeHeight)
						that.$img.css('top', ((shouldBeHeight - realHeight) / 2) + 'px');
					if (realWidth <= that.options.width)
						that.$img.css('left', ((that.options.width - realWidth) / 2) + 'px');


				} else {
					that.options.height = that.$img.outerHeight(true) + that.options.titleHeight + that.options.footHeight;
					that.options.width  = that.$img.outerWidth(true);
				}

				that.$img.fadeIn (that.options.photoFade);
				that.loaded = true;
				if (that.options.onLoad) that.options.onLoad.apply(that);
				if (callback) callback.apply(that);
			};

			if (!this.$img) {
				this.$img = createElement('img', this.options.prefix + '-photo');

				$.each (['alt', 'longdesc', 'aria-describedby'], function (i, val) {
					var attr = $handler.attr(val) || $handler.attr('data-'+val) || "";
					that.$img.attr(val, attr);
				});

				this.$img.hide().appendTo(this.$loaded)
					.error(function(){
						that.$loading.remove();
						that.$loading = undefined;
						that.loaded = true;
						that.content(_('imgError', that.options.lang));
					});
			}
			this.$img.hide().unbind('load.' + this.options.prefix)
				.bind('load.' + this.options.prefix, imgload);

			setTimeout(function(){
				that.$img.attr('src', $handler.attr('href'));
			}, 1);

		},

		_load: function (callback) {
			if (this.loaded) return;


			switch (this.options.type) {
				case 'text':
					this.$loaded.text(this.options.content);
					this.loaded = true;
					if (callback) callback.apply(this);
					if (this.options.onLoad) this.options.onLoad.apply(this);
					break;

				case 'html':
					var content = $.type(this.options.content)==='object'
									? this.options.content.show()
									: this.options.content;

					this.$loaded.append(content);
					this.loaded = true;
					if (callback) callback.apply(this);
					if (this.options.onLoad) this.options.onLoad.apply(this);
					break;

				case 'alert':
				case 'warning':
				case 'info':
				case 'error':
				case 'success':
				case 'confirm':
					var content = $.type(this.options.content)==='object'
									? this.options.content.show()
									: this.options.content;

					this.$loaded.append(content).addClass(
						this.options.prefix + '-shortcut '
						+ this.options.prefix + '-' + this.options.type);
					this.loaded = true;
					if (callback) callback.apply(this);
					if (this.options.onLoad) this.options.onLoad.apply(this);
					break;

				case 'prompt':
					var content = $.type(this.options.content)==='object'
									? this.options.content.show()
									: this.options.content;

					this.$loaded.append(content).append(this.$prompt).addClass(
						this.options.prefix + '-shortcut '
						+ this.options.prefix + '-' + this.options.type);

					this.loaded = true;
					if (callback) callback.apply(this);
					if (this.options.onLoad) this.options.onLoad.apply(this);
					break;

				case 'ajax':
					this.$loading = createElement('div', this.options.prefix + '-loading', {
						height: '100%',
						width:  '100%'
					}).appendTo(this.$content);
					var that = this;
					this.$loaded.load(this.options.content, function(data, state){
						that.$loading.remove();
						that.$loading = undefined;
						that.$loaded.appendTo(that.$content);
						if (state == 'error')
							that.$loaded.html(_('xhrError', that.options.lang));
						that.loaded = true;
						if (callback) callback.apply(that);
						if (that.options.onLoad) that.options.onLoad.apply(that);
					});
					break;

				case 'photo':
				case 'image':
					var $handler = $(this.options.content);
					this._loadImg($handler, callback);
					break;

				case 'album':
				case 'gallery':
					var index = this.$trigger ? this.$trigger.index(this.options.content) : 0;
					this.index = index < 0 ? 0 : index;
					var $handler = $(this.options.content).eq (this.index);

					var that = this;

					this._loadImg($handler, function(){
						that.$img
							.unbind('click.' + that.options.prefix)
							.bind('click.' + that.options.prefix, function () {
								that.next();
						});
						if (callback) callback.apply(that);
					});

					break;

				case 'iframe':
					var $loading = createElement('div', this.options.prefix + '-loading', {
						height: this.$content.innerHeight() + 'px',
						width:  '100%'
					}).appendTo(this.$content);
					if (!this.options.title) {
						this.title(_('Loading', this.options.lang) + ' ...');
						this.options.title = false;
					}

					var that = this;
					this.$iframe = createElement('iframe', this.options.prefix + '-iframe', {
						height: '100%',
						width:  '100%',
						border: 'none',
						display: 'none'
					},{
						frameborder: 0,
						marginheight: '0px',
						marginwidth: '0px',
						scrolling: 'auto',
						src: this.options.content
					}).appendTo(that.$loaded).one('load', function() {
						$loading.remove();
						that.$iframe.show();
						if (!that.options.title) {
							var title = "";
							try {
								title = $('title', that.$iframe.contents()).text();
							} catch(e) {} // not available for cross-domain
							that.title(title);
						}
						that.loaded = true;
						if (that.options.onLoad) that.options.onLoad.apply(that);
						if (callback) callback.apply(that);
					});
					break;
			}


		},

		_restoreFromMin: function (callback) {
			if (!this.minimized) return;

			var that = this;
			this.animate (this.minimized, function () {
				that.minimized = false;
				that.$icons.min.removeClass (that.options.prefix + '-restore');
				that.$wrap.css('position', that.options.fixed ? 'fixed' : 'absolute');
				that.$icons.min
					.unbind('click.min.'+ that.options.prefix)
					.one ('click.min.'+ that.options.prefix, function () { that.min(); });
				that.enableDrag();
				that.enableResize();
				if (callback) callback.apply(that);
			});
		},

		_min: function (where, callback) {
			if (this.minimized) return;

			var orgState = {
				width   : parseInt(this.$wrap.css('width')),
				height  : parseInt(this.$wrap.css('height')),
				top     : parseInt(this.$wrap.css('top')),
				left    : parseInt(this.$wrap.css('left'))
			};

			var that = this;
			this.animate (where, function () {
				that.minimized = orgState;
				that.$icons.min.addClass (that.options.prefix + '-restore');
				that.$wrap.css('position', 'fixed');
				that.$icons.min
					.unbind('click.restore.'+ that.options.prefix)
					.one ('click.restore.'+ that.options.prefix, function () { that.restore(); });
				if (!this.$trigger) that.disableDrag();
				that.disableResize();
				if (callback) callback.apply(that);
			});

		},


		enableDrag: function () {
			if (this.options.drag === false) return;

			var that = this;

			this.$title.css('cursor', 'move').bind('mousedown.drag.' + this.options.prefix, function (e) {

				that.dragData.x = e.pageX;
				that.dragData.y = e.pageY;
				that.dragData.top    = parseInt(that.$wrap.css('top'));
				that.dragData.left   = parseInt(that.$wrap.css('left'));
				that.dragData.width  = parseInt(that.$wrap.css('width'));
				that.dragData.height = parseInt(that.$wrap.css('height'));

				$(document).one('mouseup.drag.' + that.options.prefix, function (e) {

					that.dragData = {};
					$(this).unbind(' mousemove.drag.' + that.options.prefix);

				}).bind('mousemove.drag.' + that.options.prefix, function (e) {

					e.preventDefault();

					if ($.isEmptyObject(that.dragData)) return;
					var left  = that.dragData.left + e.pageX - that.dragData.x;
					var top   = that.dragData.top  + e.pageY - that.dragData.y;
					var width = that.dragData.width;
					var height= that.dragData.height;
					var $container = $(that.options.drag);

					if ($container.length > 0) {
						var offset = $container.offset();
						if (!offset) offset = {left:0, top:0}; // if it is window
						if (!that.options.fixed) {
							offset.left += $(window).scrollLeft();
							offset.top  += $(window).scrollTop();
						}
						var mleft  = offset.left;
						var mtop   = offset.top;
						var maleft = offset.left + $container.innerWidth();
						var matop  = offset.top  + $container.innerHeight();
						left = left <= mleft ? mleft : left;
						left = left + width > maleft ? maleft - width : left;
						top  = top + height > matop ? matop - height : top;
						top  = top <= mtop ? mtop : top;
					}

					that.animate({width: width, height:height, top: top, left: left}, undefined, 0);

				});
			})
		},


		disableDrag: function () {
			this.$title.css('cursor', 'auto').unbind('mousedown.drag.' + this.options.prefix);
		},

		enableResize: function () {

			if (this.options.resize === false) return;

			// resize
			var that = this;
			this.$resize.show().bind('mousedown.resize.' + this.options.prefix ,function (e) {

				that.resizeData.x = e.pageX;
				that.resizeData.y = e.pageY;
				that.resizeData.width  = parseInt(that.$wrap.css('width'));
				that.resizeData.height = parseInt(that.$wrap.css('height'));
				that.resizeData.top    = parseInt(that.$wrap.css('top'));
				that.resizeData.left   = parseInt(that.$wrap.css('left'));

				$(document).bind('mouseup.resize.' + that.options.prefix, function (e) {

					that.resizeData = {};
					$(this).unbind('mouseup.resize.' + that.options.prefix + ' mousemove.resize.' + that.options.prefix);

				}).bind('mousemove.resize.' + that.options.prefix, function (e) {

					e.preventDefault();

					if ($.isEmptyObject(that.resizeData)) return;
					var width  = that.resizeData.width + e.pageX - that.resizeData.x;
					var height = that.resizeData.height+ e.pageY - that.resizeData.y;
					width  = width < that.options.resize.width ? that.options.resize.width : width;
					height = height < that.options.resize.height ? that.options.resize.height : height;
					that.animate({width: width, height:height, top: that.resizeData.top, left: that.resizeData.left}, undefined, 0);

				});
			});
		},

		disableResize: function () {
			this.$resize.hide().unbind('mousedown.resize.' + this.options.prefix);
		},


		// get/set position
		// sc : {top:top, left:left, width:width, height:height}
		animate: function (sc, callback, speed) {
			sc = sc || {};
			sc = $.extend({}, {
				top: this.options.top,
				left: this.options.left,
				width: this.options.width,
				height: this.options.height,
				opacity: 1
			}, sc);

			if (speed === undefined) speed = this.options.speed;

			var top  = (winheight() - sc.height) / 2 - this.options.titleHeight;
			var left = ($(window).width() - sc.width) / 2;
			top = top < 0 ? 0 : top;

			if (sc.top === false)
				sc.top =  this.options.fixed ? top : top + $(window).scrollTop();
			if (sc.left === false)
				sc.left = this.options.fixed ? left : left + $(window).scrollLeft();

			var that = this;

			this.$overlay.fadeTo(speed, this.options.opacity);

			var step = function () {
				that.$content.height (that.$wrap.height() - that.options.titleHeight - that.options.footHeight);
			}

			this.$wrap.dequeue().animate(sc, {
				duration: speed,
				complete: function () {
					step ();
					if (callback) callback.apply(that);
				},
				step: step,
				easing: this.options.transition
			});
		},

		flash : function (opacity, interval, callback) {
			opacity = opacity || .3;
			interval = interval || 100;

			var that = this;
			this.$title.fadeTo(0, opacity)
				.delay(interval)
				.fadeTo(0, 1)
				.delay(interval)
				.fadeTo(0, opacity)
				.delay(interval)
				.fadeTo(0, 1)
				.queue(function(){
					if (callback) callback.apply(that);
					$(this).dequeue();
				});
		},

		play: function (callback) {
			if (this.options.type != 'album' && this.options.type != 'gallery') return;

			if (this.playing && this.playing!=-1 && this.playing!=-2) {
				this.pause();
				return;  // already playing
			}

			var that = this;

			this.$icons.play
				.removeClass(this.options.prefix + '-pause');

			this.playing = setTimeout(function(){
				that.next(callback);
			}, that.options.photoSpeed);
		},

		pause: function () {
			if (this.options.type != 'album' && this.options.type != 'gallery') return;
			if (!this.playing || this.playing === -1 || this.playing === -2) return; // already paused or not started

			if (this.playing) {
				clearTimeout(this.playing);
				this.playing = -1;
			}

			var that = this;
			this.$icons.play
				.addClass(this.options.prefix + '-pause');
		},

		next: function (callback) {
			if (this.options.type != 'album' && this.options.type != 'gallery') return;
			this.index ++;
			this.index = this.index >= $(this.options.content).length ? 0 : this.index;
			var $handler = $(this.options.content).eq (this.index);

			var that = this;

			if (that.playing && that.playing!=-1 && that.playing!=-2)
				clearTimeout(that.playing);

			this._loadImg($handler, function(){
				if (that.playing && that.playing!=-1 && that.playing!=-2) {
					that.playing = setTimeout (function(){
						that.next(callback);
					}, that.options.photoSpeed);
				}
				that.animate();
				if (callback) callback.apply(that);
			});

		},

		prev: function (speed, callback) {

			if (this.options.type != 'album' && this.options.type != 'gallery') return;
			this.index --;
			this.index = this.index >= $(this.options.content).length ? 0 : this.index;
			var $handler = $(this.options.content).eq (this.index);

			var that = this;

			if (that.playing && that.playing!=-1 && that.playing!=-2)
				clearTimeout(that.playing);

			this._loadImg($handler, function(){
				if (that.playing && that.playing!=-1 && that.playing!=-2) {
					that.playing = setTimeout (function(){
						that.next(callback);
					}, that.options.photoSpeed);

				}
				that.animate();
				if (callback) callback.apply(that);
			});

		},

		// show the msgbox
		open : function (callback) {
			if (this.opened) return;

			this.$overlay.show().css('z-index', ++$.msgbox._zIndex);
			this.$wrap.show().css('z-index', $.msgbox._zIndex);

			// adjust titleHeight and footHeight
			this.options.titleHeight = this.$title.outerHeight(true); // adjust
			this.$title.css({'line-height': this.options.titleHeight + 'px'});

			if (this.options.footHeight > 0) {
				this.options.footHeight = this.$foot.outerHeight(true);
				//this.$foot.css({'line-height': this.options.footHeight + 'px'});
			}

			this.$content.height (this.$wrap.height() - this.options.titleHeight - this.options.footHeight);

			// resize min scale
			if (this.options.resize === true) {
				this.options.resize = {
					width:  this.options.minWidth,
					height: (this.options.buttons !== null && this.options.buttons.length > 0)
						? this.options.titleHeight + this.options.footHeight + 5
						: this.options.titleHeight + 5
				};
			}


			var that = this;
			var rightAfterOpen = function () {
				that.opened = true;
				$.msgbox._focused = that;
				if (that.options.onOpen) that.options.onOpen.apply(that);
				if (callback) callback.apply(that);
			};
			var mayPlayAlbum = function () {
				if ((that.options.type == 'album' || that.options.type == 'gallery')
				&& that.options.photoAuto && that.options.photoSpeed
				&& (!that.playing || that.playing == -2)) {
					that.play();
				}
			};

			if (this.loaded) { // reopen
				this.animate(undefined, function(){
					rightAfterOpen();
					mayPlayAlbum();
				});
			} else { // newly open
				this._load(function() {
					that.animate(undefined, rightAfterOpen);
					mayPlayAlbum();
				});
			}
		},

		// get the returned value
		val: function () {
			return this.v;
		},

		close: function (callback) {
			if (!this.opened) return;

			if (this.options.onBeforeClose && this.options.onBeforeClose.apply(this) === false) return;

			if (this.playing && this.playing != -1 && this.playing != -2) {
				clearTimeout(this.playing);
				this.playing = -2;  // pause
			}

			var that = this;
			var _close = function (callback) {
				that.animate({ width: that.options.initialWidth, height: that.options.initialHeight, opacity:0 }, function(){
					that.$overlay.fadeOut('fast', function() {
						that.opened = false;
						that.$wrap.hide();
						that.$overlay.hide();
						//창닫은 후 remove 추가 2018.05.02 : 시작
						that.$overlay.remove();
						that.$wrap.remove();
						//창닫은 후 remove 추가 2018.05.02 : 끝

						if (callback) callback.apply(that);
						if (that.options.onClose) that.options.onClose.apply(that);
					});
				});
			};

			if (!this.$trigger && this.minimized) $.msgbox._arrangeMin(this, 'out', function(){
				_close(callback);
			});
			else _close(callback);
		},

		remove: function () {
			if (this.$trigger)
				this.$trigger.unbind('click.' + this.options.prefix);
			this.$overlay.remove();
			this.$wrap.remove();
		},

		// get/set title
		title: function (t) {
			if (t === undefined) return this.options.title;
			this.options.title = t;

			var that = this;
			this.$title.contents().filter(function(){
				return this.nodeType == 3 || !$(this).is(that.$controls)
			}).remove();
			this.$title.prepend(t);
			return this;
		},

		reload: function (callback) {
			this.loaded = false;
			if (this.options.type == 'iframe') {
				this.$iframe.remove();
			} else {
				if (this.$loaded) this.$loaded.remove();
			}
			this._load(callback);
		},

		focus: function (callback) {
			this.$overlay.css('z-index', ++$.msgbox._zIndex);
			this.$wrap.css('z-index', $.msgbox._zIndex);

			var that = this;
			if (!this.opened) {
				this.open(callback);
			} else if (this.minimized) {
				this.restore(function(){
					$.msgbox._focused = that;
					if (callback) callback.apply(that);
				});
			} else {
				this.flash(undefined, undefined, function(){
					$.msgbox._focused = that;
					if (callback) callback.apply(that);
				});
			}
		},

		restore: function (callback) {
			if (this.minimized) {
				this.$trigger
					? this._restoreFromMin(callback)
					: $.msgbox._arrangeMin(this, 'out', callback);
			} else if (this.maximized) {
				var that = this;
				this.animate (this.maximized, function(){
					that.maximized = false;
					that.$icons.max.removeClass(that.options.prefix + '-restore');
					that.$wrap.css('position', that.options.fixed ? 'fixed' : 'absolute');
					that.$icons.max
						.unbind('click.max.' + that.options.prefix)
						.one ('click.max.' + that.options.prefix, function () { that.max(); });
					that.enableDrag();
					that.enableResize();
					if (callback) callback.apply(that);
				});
			}
		},

		min: function (callback) {
			if (this.minimized) {
				this.restore(callback);
			} else {
				this.$trigger ? this._min({
					width: this.options.minWidth,
					height: this.options.titleHeight
				}) : $.msgbox._arrangeMin(this, 'in', callback);
			}
		},

		max: function (callback) {
			if (this.maximized) {
				this.restore(callback)
				return;
			}

			var that = this, orgState = $.extend({}, this.minized);

			if (this.minimized) {

				this.minimized = {
					top: 0,
					left: 0,
					width: $(window).width(),
					height: winheight()
				}

				$.msgbox._arrangeMin(this, 'out', function () {
					that.maximized = orgState;
					that.$icons.max.addClass(that.options.prefix + '-restore');
					that.$wrap.css('position', 'fixed');
					that.$icons.max
						.unbind('click.restore.' + that.options.prefix)
						.one ('click.restore.' + that.options.prefix, function () { that.restore(); });
					that.disableDrag();
					that.disableResize();
					if (callback) callback.apply(that);
				});

			} else {
				var orgState = {
					width   : parseInt(this.$wrap.css('width')),
					height  : parseInt(this.$wrap.css('height')),
					top     : parseInt(this.$wrap.css('top')),
					left    : parseInt(this.$wrap.css('left'))
				};

				var that = this;
				this.animate ({
					top: 0,
					left: 0,
					width: $(window).width(),
					height: winheight()
				}, function () {
					that.maximized = orgState;
					that.$icons.max.addClass(that.options.prefix + '-restore');
					that.$wrap.css('position', 'fixed');
					that.$icons.max
						.unbind('click.restore.' + that.options.prefix)
						.one ('click.restore.' + that.options.prefix, function () { that.restore(); });
					that.disableDrag();
					that.disableResize();
					if (callback) callback.apply(that);
				});
			}
		},

		content: function (ctt) {
			var that = this;
			if (ctt === undefined) {
				return this.$loaded.html();
			} else {
				this.$loaded.html(ctt);
			}
			return true;
		}
	};

	$.fn.msgbox = function (options) {

		if (typeof options == 'object') {

			options = $.extend(true, {}, DEFAULTS, options);

			var selector = $(this).selector; // selector will lost in each loop
			return this.each (function (){
				var $obj = $(this);
				$obj.selector = selector;
				var msgbox = new MSGBOX ($obj, options);
				$(this).data('msgbox.' + options.id, msgbox);
			});

		} else {
			options = options || 0;
			var msgbox = $(this).data('msgbox.' + options);

			return msgbox;
		}
		return this;
	};

	$.msgbox = function (options) {

		if (typeof options == 'object') {

			var open = options.open === undefined ? true : options.open;
			options = $.extend(true, {}, DEFAULTS, options);

			var msgbox = $(document.body).data ('msgbox.' + options.id);
			if (msgbox) {
				msgbox.focus();
			} else {
				msgbox = new MSGBOX(false, options);
				$(document.body).data ('msgbox.' + options.id, msgbox);
				if (open) msgbox.open();
			}
			return msgbox;

		} else {

			options = options || 0;
			var msgbox = $(document.body).data ('msgbox.' + options);

			return msgbox;
		}

	};

	$.extend ($.msgbox, {
		defaults: function (options) {
			$.extend (DEFAULTS, options);
			$.msgbox._zIndex = DEFAULTS.zIndex;
		},

		version: '8.0',

		_focused: null,  // the focused instance

		_zIndex: DEFAULTS.zIndex,

		closeAll: function (callback) {
			var msgboxes = $(document.body).data();
			var q = $({});

			$.each (msgboxes, function (key, msgbox) {
				if (key.indexOf('msgbox.') === 0 && msgbox.opened) {
					q.queue('closeAll', function (next) {
						msgbox.close(next);
					});
				}
			});

			if (callback) q.queue('closeAll', callback);
			q.dequeue('closeAll');
		},

		restoreAll: function (callback) {
			var msgboxes = $(document.body).data();
			var q = $({});

			$.each (msgboxes, function (key, msgbox) {
				if (key.indexOf('msgbox.') === 0 && msgbox.minimized) {
					q.queue('restoreAll', function (next){
						msgbox.restore(next);
					});
				}
			});

			if (callback) q.queue('restoreAll', callback);
			q.dequeue('restoreAll');
		},

		minAll: function (callback) {
			var msgboxes = $(document.body).data();
			var q = $({});

			$.each (msgboxes, function (key, msgbox) {
				if (key.indexOf('msgbox.') === 0 && !msgbox.minimized) {
					q.queue('minAll', function(next) {
						msgbox.min(next);
					});
				}
			});

			if (callback) q.queue('minAll', callback);
			q.dequeue('minAll');
		},

		_arrangeMin: function (msgbox, action, callback){
			var msgboxes = $(document.body).data();
			if (!msgboxes) return;

			var minMbs = [], totalWidth = 0, index = 0, keys = [], gap = 3, q = $({});

			$.each (msgboxes, function (key, mb) {
				if (key.indexOf('msgbox.')===0
				&& (mb.minimized || key == 'msgbox.' + msgbox.options.id)
				&& mb.options.minPos == msgbox.options.minPos) {
					minMbs[key] = mb;
					keys.push(key);
					totalWidth += mb.options.minWidth + gap;
				}
			});

			keys.sort();
			index = $.inArray('msgbox.' + msgbox.options.id, keys);

			if (action == 'in') {

				var ratio = 1, left = 0, thisWidth;
				if (totalWidth > $(window).width()) ratio = $(window).width() / totalWidth;
				thisWidth = msgbox.options.minWidth * ratio;

				$.each (keys, function (x, key) {
					if (x == index) {
						q.queue('min', function(next){
							msgbox._min ({
								left: left,
								top: msgbox.options.minPos == 'bottom' ? winheight() - msgbox.options.titleHeight : 0,
								width: thisWidth,
								height: msgbox.options.titleHeight
							}, function () {
								left += thisWidth + gap;
								next();
							});
						});
					} else {
						var width = minMbs[key].options.minWidth * ratio;
						q.queue('min', function(next) {
							minMbs[key].animate ({
								left: left,
								top: minMbs[key].options.minPos == 'bottom' ? winheight() - minMbs[key].options.titleHeight : 0,
								width: width,
								height: minMbs[key].options.titleHeight
							}, function () {
								left += width + gap;
								next();
							}, 50);
						});
					}
				});

			} else {

				totalWidth -= msgbox.options.minWidth;
				var ratio = 1;
				if (totalWidth > $(window).width()) ratio = $(window).width() / totalWidth;

				var left = 0;

				q.queue ('min', function(next){
					msgbox._restoreFromMin(next);
				});

				$.each (keys, function (x, key) {
					if (x != index)
						q.queue('min', function(next){
							var width = minMbs[key].options.minWidth * ratio;
							minMbs[key].animate({
								left: left,
								top: msgbox.options.minPos == 'bottom' ? winheight() - minMbs[key].options.titleHeight : 0,
								width: width,
								height: minMbs[key].options.titleHeight
							}, next, 50);
							left += width  + gap;
						});
				});
			}

			if (callback) {
				q.queue ('min', callback);
			}

			q.dequeue('min');
		}
	});

})(jQuery, undefined);

