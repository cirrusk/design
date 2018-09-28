$(function(){
/** ----- 브랜드 ----- */
	//브랜드 상단 SNS
	brandTopSNS();

	//XS에너지 홈
	//xsEnergyHome();

	$(window).resize(function(){
		brandTopSNS();
		//xsEnergyHome();
	});

	//연혁
	timelineFunc();

});

/* 브랜드 모바일 SNS 위치 */
function brandTopSNS(){
	var $brandHeading = $('.top-title-wrapper');
	if(!$brandHeading.length){return;}

	var $brandSns = $('.brand .bod-view-sns');
	var $brandHomeSns = $('.sns-container .bod-view-sns');
	var titHeight = $brandHeading.outerHeight();
	var windowWidth = $(window).width();

	function titSpaceCal(){
		console.log('h1 높이: ' + titHeight);
		$brandSns.css('top',titHeight);
		$brandHomeSns.css('top',titHeight);
	}

	if(windowWidth < 769){
		setTimeout(function(){
			titSpaceCal();
		},300);
	}
	else{
		setTimeout(function(){
			$brandSns.css('top','0');
			$brandHomeSns.css('top','0');
		},300);
	}
}
/* XS에너지 홈 */
/* function xsEnergyHome(){

	var $xsenergyList = $('.xsenergy_mainlist');
	if(!$xsenergyList.length){return;}

	var colmn = $xsenergyList.children('li:nth-last-child(2)');
	var colmnHeight = colmn.height() + 0.01;
	var windowWidth = $(window).width();


	function colmnTop(){
		colmn.css('margin-top',-colmnHeight+'px');
	}
	//console.log(colmnHeight);

	if(windowWidth > 1024) {
		colmnTop();
	}
	else{
		colmn.css('margin-top','0');
	}
} */

/* 연혁 */
function timelineFunc(){
	$('.timelineWrap').owlCarousel({
		loop: false,
		nav: true,
		dots: true,
		margin: 0,
		items: 1,
		responsive: {
			768 : {
				items: 1
			},
			1200 : {
				items: 1
			}
		}
	});

	if($('.timeline .scrollbar-inner').length){
		setTimeout(function(){
			$('.scrollbar-inner').scrollbar(); //스크롤바 플러그인 실행
		}, 800)

	}
}
//html내 script 이동(20180921)
//뉴트리라이트 홈 : B20101
$(function() {
	$('.nutrilite #banner_list').owlCarousel({
		loop: false,
		nav: false,
		dots: true,
		//autoplay: true,
		//autoplayTimeout:5000,
		margin: 0,
		items: 1
	});
	
	var bannerId = $('.nutrilite #banner_list');
	var $dotItembar = bannerId.find('.owl-dots');
	var $dotItems = bannerId.find('.owl-dots > button');
	
	
	$dotItems.eq(0).html('<span>뉴트리라이트 브랜드 스토리</span>');
	$dotItems.eq(1).html('<span>뉴트리라이트 보태니컬 프로세스 9 캠페인</span>');
	$dotItems.eq(2).html('<span>뉴트리라이트 농장</span>');
	
	var mTop = $dotItembar.height()/2;
	$dotItembar.css('margin-top',-mTop);
	
});
//아티스트리 홈 : B20200
$(function() {
	$('.artistry #banner_list').owlCarousel({
		loop: false,
		nav: false,
		dots: true,
		margin: 0,
		items: 1
	});
	
	var bannerId = $('.artistry #banner_list');
	var $dotItembar = bannerId.find('.owl-dots');
	var $dotItems = bannerId.find('.owl-dots > button');
	
	
	$dotItems.eq(0).html('<span>아티스트리 소개</span>');
	$dotItems.eq(1).html('<span>아티스트리 스튜디오</span>');
	
	var mTop = $dotItembar.height()/2;
	$dotItembar.css('margin-top',-mTop);
	
});
// 엣모스피어 드라이브 홈 : B20601 - 상단 nav - true에서 false로 변경
$(function() {
	$('.atmosphere #banner_list').owlCarousel({
		loop: false,
		nav: false,
		dots: true,
		margin: 0,
		items: 1
	});
	
	var bannerId = $('.atmosphere #banner_list');
	var $dotItembar = bannerId.find('.owl-dots');
	var $dotItems = bannerId.find('.owl-dots > button');
	
	
	$dotItems.eq(0).html('<span>좋은 공기가 좋은 차의 기준</span>');
	$dotItems.eq(1).html('<span>아이에게 더 중요한 AIR</span>');
	$dotItems.eq(2).html('<span>에어백만큼 중요한 AIR</span>');
	
	var mTop = $dotItembar.height()/2;
	$dotItembar.css('margin-top',-mTop);
	
	$('#banner_list2').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		margin: 0,
		items: 1
	});
	
});
//배스바디 홈 : B20901
$(function() {
	$('.bathbody #banner_list').owlCarousel({
		loop: false,
		nav: false,
		dots: true,
		//autoplay: true,
		//autoplayTimeout:5000,
		margin: 0,
		items: 1
	});
	
	var bannerId = $('.bathbody #banner_list');
	var $dotItembar = bannerId.find('.owl-dots');
	var $dotItems = bannerId.find('.owl-dots > button');
	
	
	$dotItems.eq(0).html('<span>글리스터 구강 청결 시스템</span>');
	$dotItems.eq(1).html('<span>새티니크 헤어케어,<br>그 이상의 아름다움</span>');
	$dotItems.eq(2).html('<span>브랜드 이야기</span>');
	
	var mTop = $dotItembar.height()/2;
	$dotItembar.css('margin-top',-mTop);
	
});
//암웨이 퀸 홈 : B20501
$(function() {
	$('.queen #banner_list').owlCarousel({
		loop: false,
		nav: false,
		dots: true,
		//autoplay: true,
		//autoplayTimeout:5000,
		margin: 0,
		items: 1
	});
	
	var bannerId = $('.queen #banner_list');
	var $dotItembar = bannerId.find('.owl-dots');
	var $dotItems = bannerId.find('.owl-dots > button');
	
	
	$dotItems.eq(0).html('<span>My Cooking Story</span>');
	$dotItems.eq(1).html('<span>암웨이 퀸의 5가지 <br>[지키는 기술]</span>');
	$dotItems.eq(2).html('<span>암웨이 퀸 쿠킹스토리</span>');
	
	var mTop = $dotItembar.height()/2;
	$dotItembar.css('margin-top',-mTop);
	
});

/*
한국암웨이 연혁: B10106
암웨이 시작: B10201
*/
$(function() { 
    $('.timelineWrap').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        margin: 0,
        items: 1
    });
}); 
//부산 아시아 물류 허브 센터: B10112
$(function(){
	//연혁
	$('#history-list').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		margin: 0,
		items: 1,
		responsiveClass: true,
		responsive: {
			480 : {
				items: 2
			},
			768 : {
				items: 4
			},
			960 : {
				items: 5
			},
			1200 : {
				items: 7
			}
		}
	});
}); 
//암웨이소개(암웨이 대표 브랜드) : B10000
$(function() {

	$('#recentlyViewedListTab').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		margin: 0,
		items: 1,
		responsiveClass: true,
		responsive: {
			480 : {
				items: 2
			},
			630 : {
				items: 3
			},
			768 : {
				items: 4
			},
			960 : {
				items: 5
			},
			1200 : {
				items: 6
			}
		}
	});

});

//팀뉴트리라이트 : B20129, B20132, B20133, B20136, B20137, B20139, B20141
$(function(){
	$('#layBoxPdtItem03').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		margin: 0,
		items: 1,
		responsiveClass: true,
		responsive: {
			768 : {
				items: 2
			},
			1200 : {
				items: 3
			}
		}
	});
});
//팀뉴트리라이트 : B20126, B20127, B20128, B20130, B20135, B20140, B20143, B20144
$(function(){
	$('#layBoxPdtItem04').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		margin: 0,
		items: 1,
		responsiveClass: true,
		responsive: {
			768 : {
				items: 2
			},
			1200 : {
				items: 4
			}
		}
	});
});
//팀뉴트리라이트 : B20125, B20131, B20134, B20138, B20142, B20145
$(function(){
	$('#layBoxPdtItem05').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		margin: 0,
		items: 1,
		responsiveClass: true,
		responsive: {
			768 : {
				items: 2
			},
			1200 : {
				items: 5
			}
		}
	});
});
//아티스트리 캠페인 : B20206
$(function(){
	$('#bizMovie').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		margin: 0,
		items: 1,
		responsiveClass: true,
		responsive: {
			480 : {
				items: 1
			},
			960 : {
				items: 3
			},
			1200 : {
				items: 3
			}
		}
	});
});

//레이어팝업
//뉴트리라이트 과학 : B20114
$(function(){	
	//뉴트리라이트 과학 팝업
	$('#B20114_lp01').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20114_lp01');
	});
	//항상 최고의 품질을 보증하는 뉴트리라이트 팝업
	$('#B20114_lp02').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20114_lp02');
	});
	//최상의 제품을 위해 노력하는 뉴트리라이트 팝업
	$('#B20114_lp03').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20114_lp03');
	});
	//매달 15,000가지가 넘는 제품 테스트 시행 팝업
	$('#B20114_lp04').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20114_lp04');
	});
	//뉴트리라이트가 수행하는 제품 분석방법 팝업
	$('#B20114_lp05').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20114_lp05');
	});
});
//식물 영양소 캠페인 : B20118
$(function(){	
	////빨간색(RED) 팝업
	$('#B20118_lp01').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20118_lp01');
	});
	//오렌지색(YELLOW/ORANGE) 팝업
	$('#B20118_lp02').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20118_lp02');
	});
	//초록색(GREEN) 팝업
	$('#B20118_lp03').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20118_lp03');
	});
	//보라색(PURPLE) 팝업
	$('#B20118_lp04').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20118_lp04');
	});
	//하얀색(White) 팝업
	$('#B20118_lp05').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20118_lp05');
	});
});
//뉴트리라이트 건강지킴이 : B20160
$(function(){	
	$('#B20160_lp01').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20160_lp01');
	});
	$('#B20160_lp_p01').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20160_lp_p01');

	});
	$('#B20160_lp02').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20160_lp02');
	});
	$('#B20160_lp03').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20160_lp03');
	});
	$('#B20160_lp04').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20160_lp04');
	});
});
//뉴트리라이트 건강지킴이(NQ검사하기) : B20172
$(function(){	
	$('.B20172_lp2').on('click',function(){
		layerPopOver(this,'.B20172_lp2_pop');
	});
});
