/** -----------------------------------------
 *  Header JS : 테스트용
 *  ----------------------------------------
 */
$(function(){

	//body 클릭 시 열린 레이어 닫기 (2018.05.14 추가)
	HEADER_stopPropagation();

	//쇼핑메뉴 클릭이벤트 (2018.05.14 추가)
	HEADER_MenuShop();

	//미니 대시보드  (2018.05.14 수정)
	HEADER_miniDashboard();

	//미니 카트  (2018.05.14 수정)
	HEADER_miniCart();

	//추천검색어
	HEADER_topSearch_suggestion();

	//MOB 쇼핑메뉴
	navToggling();
	$(window).resize(navToggling);

	//MOB 검색버튼
	HEADER_MOB_search();

	//레이어 : 추천검색어  Carousel
	$('#header_productSuggestListTabs').owlCarousel({
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

	//GNB 메뉴위치 조정하기 2018.03.23
	GNB_SubDepth_Control();

});

/* body 클릭 시 열린 레이어 닫기 */
function HEADER_stopPropagation(){
	//event bubbling 막기
	var stopPropagation_target = '.js-my-account-menu, .js-mini-cart-link, .auto-suggestion-popover, #overlay-menu-wrapper, #shoppingcar-drop-content, #login-drop-content';
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
	});
}

/* 미니 대시보드 : #login-drop-content */
function HEADER_miniDashboard(){
	$('.js-my-account-menu').on('click',function(e){
		e.preventDefault();

		//쇼핑메뉴 layer
		$("#overlay-menu-wrapper").removeClass("in");
		$('.overlay-menu-toggle-desktop').addClass('collapsed');

		//레이어: .nav-links
		$('header').hasClass('userinfo-open') ? $('header').removeClass('userinfo-open') : $('header').addClass('userinfo-open');
		$('header').removeClass('mincart-open');

		//레이어: 검색
		$(".auto-suggestion-popover").hide(); //추천검색어
		$('.top-search').removeClass('search-open'); //검색어 입력영역
	});
}

/* 미니 카트 : #shoppingcar-drop-content */
function HEADER_miniCart(){
	$('.js-mini-cart-link').on('click',function(e){
		e.preventDefault();

		//쇼핑메뉴 layer
		$("#overlay-menu-wrapper").removeClass("in");
		$('.overlay-menu-toggle-desktop').addClass('collapsed');

		//레이어: .nav-links
		$('header').hasClass('mincart-open') ? $('header').removeClass('mincart-open') : $('header').addClass('mincart-open');
		$('header').removeClass('userinfo-open');

		//레이어: 검색
		$(".auto-suggestion-popover").hide(); //추천검색어
		$('.top-search').removeClass('search-open'); //검색어 입력영역
	});
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
		$('.search-results-close').on('click', closeSearchResults);
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