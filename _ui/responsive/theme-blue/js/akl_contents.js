$(function(){
	//브랜드 상단 SNS - 모바일에서 위치조정
	brandTopSNS();
	$(window).resize(function(){
		brandTopSNS();
	});

	//연혁
	timelineFunc();

	//미디어갤러리
	mediaGallery();
});

/* 브랜드 상단 SNS - 모바일에서 위치조정 */
function brandTopSNS(){
	var $brandHeading = $('.top-title-wrapper');
	if(!$brandHeading.length){return;}

	var windowWidth = $(window).width();
	var $brandSns = $('.brand .bod-view-sns , .sns-container .bod-view-sns');
	var titHeight = $brandHeading.outerHeight();

	function titSpaceCal(){
		$brandSns.css({
			'opacity':'1',
			'top':titHeight
		});
	}

	if(windowWidth < 769){
		$brandSns.css('opacity','0');
		setTimeout(function(){ titSpaceCal(); },300);
	}
	else{
		setTimeout(function(){ $brandSns.css('top',''); }, 300);
	}
}

/* 미디어갤러리 */
function mediaGallery(){
	var $GalleryList =  $('.media-borad-list-video ul');
	if(!$GalleryList.length){ return; }

	$.getScript( '/_ui/responsive/theme-blue/js/masonry.pkgd.min.js'); //플러그인 호출

	$('.media-borad-list-video ul').masonry({
		columnWidth: '.grid-item',
		transitionDuration:0,
		percentPosition: true
	});

	$('.media-borad-list-gallery ul').masonry({
		columnWidth: '.grid-item',
		transitionDuration:0,
		percentPosition: true
	});

	var i = 0;
	$(document).on('click', '.media-more-btn button', function(e) {
		var $winSize = $(window).outerWidth();
		i++;
		e.preventDefault();
		var startNum = 10 * i;
		var endNum = startNum + 10;

		$(this).parent().parent().children().slice(startNum, endNum).css("display", "block");

		setTimeout(function(){ $('.media-borad-list-video ul').masonry() }, 0);

		if(!$(this).parent().prev().is(':hidden')){
			$(this).hide();
		}
	});
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

	$('.atmosphere #banner_list2').owlCarousel({
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
//원포원 : B20801
$(function() {
	$('.oneforone #banner_list2').owlCarousel({
		loop: false,
		nav: false,
		dots: true,
		margin: 0,
		items: 1
	});

	var bannerId = $('.oneforone #banner_list2');
	var $dotItembar = bannerId.find('.owl-dots');
	var $dotItems = bannerId.find('.owl-dots > button');

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

//암웨이 본사 및 계열사 : B10207
$(function(){
	var $mapItem = $('[class*="global-comp-"] .btn-tooltip');
	$mapItem.click(function(){
		$(this).parent().siblings('.toolTip-wrapper').find('.btn-tooltip-close').trigger('click');
	});
});

//암웨이 본사 및 계열사 : B10601
$(function(){
	$('#bizMovie02').owlCarousel({
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
			768: {
				items: 3
			},
			1200 : {
				items: 4
			}
		}
	});

	$('.B10601_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10601_lp1_pop');
	});
	$('.B10601_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10601_lp2_pop');
	});
	$('.B10601_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10601_lp3_pop');
	});
	$('.B10601_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10601_lp4_pop');
	});
	$('.B10601_lp5').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10601_lp5_pop');
	});
	$('.B10601_lp6').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10601_lp6_pop');
	});
	$('.B10601_lp').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10601_lp_pop');
	});
});

//암웨이 미디어 갤러리 : B10910
$(function(){
	$('.B10910_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp1_pop');
	});
	$('.B10910_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp2_pop');
	});
	$('.B10910_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp3_pop');
	});
	$('.B10910_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp4_pop');
	});
	$('.B10910_lp5').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp5_pop');
	});
	$('.B10910_lp6').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp6_pop');
	});
	$('.B10910_lp7').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp7_pop');
	});
	$('.B10910_lp8').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp8_pop');
	});
	$('.B10910_lp9').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp9_pop');
	});
	$('.B10910_lp10').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp10_pop');
	});
	$('.B10910_lp11').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp11_pop');
	});
	$('.B10910_lp12').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp12_pop');
	});
	$('.B10910_lp13').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B10910_lp13_pop');
	});
});

//뉴트리키즈 놀이터 : B20163
$(function(){
	$('.B20163_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20163_lp1_pop');
	});
	$('.B20163_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20163_lp2_pop');
	});
});

//뉴트리라이트 미디어 갤러리 : B20164
$(function(){
	$('.B20164_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20164_lp1_pop');
	});
	$('.B20164_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20164_lp2_pop');
	});
	$('.B20164_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20164_lp3_pop');
	});
	$('.B20164_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20164_lp4_pop');
	});
});

//뉴트리라이트 미디어 갤러리 : B20166
$(function(){
	$('.B20166_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20166_lp1_pop');
	});
	$('.B20166_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20166_lp2_pop');
	});
	$('.B20166_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20166_lp3_pop');
	});
	$('.B20166_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20166_lp4_pop');
	});
	$('.B20166_lp5').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20166_lp5_pop');
	});
	$('.B20166_lp6').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20166_lp6_pop');
	});
	$('.B20166_lp7').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20166_lp7_pop');
	});
	$('.B20166_lp8').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20166_lp8_pop');
	});
	$('.B20166_lp9').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20166_lp9_pop');
	});
});

//뉴트리라이트 미디어 갤러리 : B20191
$(function(){
	$('.B20191_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20191_lp1_pop');
	});
	$('.B20191_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20191_lp2_pop');
	});
	$('.B20191_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20191_lp3_pop');
	});
});

//뉴트리라이트 미디어 갤러리 : B20192
$(function(){
	$('.B20192_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20192_lp1_pop');
	});
	$('.B20192_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20192_lp2_pop');
	});
});

//뉴트리라이트 미디어 갤러리 : B20193
$(function(){
	$('.B20193_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20193_lp1_pop');
	});
	$('.B20193_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20193_lp2_pop');
	});
	$('.B20193_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20193_lp3_pop');
	});
	$('.B20193_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20193_lp4_pop');
	});
	$('.B20193_lp5').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20193_lp5_pop');
	});
	$('.B20193_lp6').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20193_lp6_pop');
	});
	$('.B20193_lp7').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20193_lp7_pop');
	});
});

//뉴트리라이트 미디어 갤러리 : B20194
$(function(){
	$('.B20194_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20194_lp1_pop');
	});
	$('.B20194_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20194_lp2_pop');
	});
});

//뉴트리라이트 미디어 갤러리 : B20195
$(function(){
	$('.B20195_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20195_lp1_pop');
	});
	$('.B20195_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20195_lp2_pop');
	});
	$('.B20195_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20195_lp3_pop');
	});
	$('.B20195_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20195_lp4_pop');
	});
});

//뉴트리라이트 미디어 갤러리 : B20196
$(function(){
	$('.B20196_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20196_lp1_pop');
	});

	$('.B20196_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20196_lp2_pop');
	});
	$('.B20196_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20196_lp3_pop');
	});
});

//뉴트리라이트 미디어 갤러리 : B20197
$(function(){
	$('.B20197_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20197_lp1_pop');
	});
	$('.B20197_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20197_lp2_pop');
	});
	$('.B20197_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20197_lp3_pop');
	});
	$('.B20197_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20197_lp4_pop');
	});
});


//NQ검사하기 : B20172
$(function(){
	$('.B20172_lp1').on('click',function(){
		layerPopOver(this,'.B20172_lp1_pop');
	});
	$('.B20172_lp3').on('click',function(){
		layerPopOver(this,'.B20172_lp3_pop');
	});

	$('.nq-pop-wrap input[type=radio]').on('click',function(){
		if ($('.nq-group-box').is(':hidden') && $(this).hasClass('ra-veiw-btn'))
		{
			$('.nq-group-box').show();
		}else{
			$('.nq-group-box').hide();
		}
	});

});

//NQ검사하기 : B20180
$(function(){
	$('.B20180_lp1').on('click',function(){
		layerPopOver(this,'.B20180_lp1_pop');
	});
	$('.B20180_lp2').on('click',function(){
		layerPopOver(this,'.B20180_lp2_pop');
	});
	$('.B20180_lp3').on('click',function(){
		layerPopOver(this,'.B20180_lp3_pop');
	});
	$('.B20180_lp4').on('click',function(){
		layerPopOver(this,'.B20180_lp4_pop');
	});
});

//뉴트리라이트 보태니컬 프로세스 9 캠페인 : B20181
$(function(){
	$('.B20181_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20181_lp1_pop');
	});

	$('.B20181_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20181_lp2_pop');
	});
	$('.B20181_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20181_lp3_pop');
	});

});

//아티스트리 미디어 갤러리 : B20203
$(function(){
	$('.B20203_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20203_lp1_pop');
	});
	$('.B20203_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20203_lp2_pop');
	});
	$('.B20203_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20203_lp3_pop');
	});
	$('.B20203_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20203_lp4_pop');
	});
	$('.B20203_lp5').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20203_lp5_pop');
	});
	$('.B20203_lp6').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20203_lp6_pop');
	});
	$('.B20203_lp7').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20203_lp7_pop');
	});
});

//아티스트리 스튜디오 : B20210
$(function(){
	$('.B20210_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20210_lp1_pop');
	});
});

//XS 에너지 미디어 갤러리 : B20302
$(function(){
	$('.B20302_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20302_lp1_pop');
	});
	$('.B20302_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20302_lp2_pop');
	});
});

//XS 에너지 미디어 갤러리 : B20304
$(function(){
	$('.B20304_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20304_lp1_pop');
	});
	$('.B20304_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20304_lp2_pop');
	});
	$('.B20304_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20304_lp3_pop');
	});
	$('.B20304_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20304_lp4_pop');
	});
	$('.B20304_lp5').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20304_lp5_pop');
	});
	$('.B20304_lp6').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20304_lp6_pop');
	});
	$('.B20304_lp7').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20304_lp7_pop');
	});
});

//XS 에너지 미디어 갤러리 : B20313
$(function(){
	$('.B20313_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20313_lp1_pop');
	});
	$('.B20313_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20313_lp2_pop');
	});
	$('.B20313_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20313_lp4_pop');
	});
});

//XS 에너지 미디어 갤러리 : B20314
$(function(){
	$('.B20314_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20314_lp1_pop');
	});
	$('.B20314_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20314_lp2_pop');
	});
	$('.B20314_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20314_lp3_pop');
	});
	$('.B20314_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20314_lp4_pop');
	});
	$('.B20314_lp5').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20314_lp5_pop');
	});
	$('.B20314_lp6').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20314_lp6_pop');
	});
	$('.B20314_lp7').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20314_lp7_pop');
	});
	$('.B20314_lp8').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20314_lp8_pop');
	});
});

//XS 에너지 미디어 갤러리 : B20315
$(function(){
	$('.B20315_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp1_pop');
	});
	$('.B20315_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp2_pop');
	});
	$('.B20315_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp3_pop');
	});
	$('.B20315_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp4_pop');
	});
	$('.B20315_lp5').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp5_pop');
	});
	$('.B20315_lp8').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp8_pop');
	});
	$('.B20315_lp9').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp9_pop');
	});
	$('.B20315_lp10').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp10_pop');
	});
	$('.B20315_lp11').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp11_pop');
	});
	$('.B20315_lp14').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp14_pop');
	});
	$('.B20315_lp15').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp15_pop');
	});
	$('.B20315_lp16').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp16_pop');
	});
	$('.B20315_lp17').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp17_pop');
	});

	$('.B20315_lp18').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp18_pop');
	});
	$('.B20315_lp19').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp19_pop');
	});
	$('.B20315_lp20').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp20_pop');
	});
	$('.B20315_lp21').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp21_pop');
	});
	$('.B20315_lp22').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp22_pop');
	});
	$('.B20315_lp23').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp23_pop');
	});
	$('.B20315_lp24').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20315_lp24_pop');
	});
});

//XS 에너지 미디어 갤러리 : B20316
$(function(){
	$('.B20316_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp1_pop');
	});
	$('.B20316_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp2_pop');
	});
	$('.B20316_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp3_pop');
	});
	$('.B20316_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp4_pop');
	});
	$('.B20316_lp5').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp5_pop');
	});
	$('.B20316_lp6').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp6_pop');
	});
	$('.B20316_lp7').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp7_pop');
	});
	$('.B20316_lp8').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp8_pop');
	});
	$('.B20316_lp9').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp9_pop');
	});
	$('.B20316_lp10').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp10_pop');
	});
	$('.B20316_lp11').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp11_pop');
	});
	$('.B20316_lp12').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp12_pop');
	});
	$('.B20316_lp13').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp13_pop');
	});
	$('.B20316_lp14').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp14_pop');
	});
	$('.B20316_lp15').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp15_pop');
	});
	$('.B20316_lp16').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp16_pop');
	});
	$('.B20316_lp17').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp17_pop');
	});
	$('.B20316_lp18').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp18_pop');
	});
	$('.B20316_lp19').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp19_pop');
	});
	$('.B20316_lp20').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp20_pop');
	});
	$('.B20316_lp21').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20316_lp21_pop');
	});
});

//XS 에너지 미디어 갤러리 : B20317
$(function(){
	$('.B20317_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp1_pop');
	});
	$('.B20317_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp2_pop');
	});
	$('.B20317_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp3_pop');
	});
	$('.B20317_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp4_pop');
	});
	$('.B20317_lp5').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp5_pop');
	});
	$('.B20317_lp6').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp6_pop');
	});
	$('.B20317_lp7').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp7_pop');
	});
	$('.B20317_lp8').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp8_pop');
	});
	$('.B20317_lp9').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp9_pop');
	});
	$('.B20317_lp10').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp10_pop');
	});
	$('.B20317_lp11').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp11_pop');
	});
	$('.B20317_lp12').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp12_pop');
	});
	$('.B20317_lp13').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp13_pop');
	});
	$('.B20317_lp14').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp14_pop');
	});
	$('.B20317_lp15').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp15_pop');
	});
	$('.B20317_lp16').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp16_pop');
	});
	$('.B20317_lp17').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp17_pop');
	});
	$('.B20317_lp18').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp18_pop');
	});
	$('.B20317_lp19').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp19_pop');
	});
	$('.B20317_lp20').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp20_pop');
	});
	$('.B20317_lp21').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp21_pop');
	});
	$('.B20317_lp22').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp22_pop');
	});
	$('.B20317_lp23').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp23_pop');
	});
	$('.B20317_lp24').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp24_pop');
	});
	$('.B20317_lp25').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp25_pop');
	});
	$('.B20317_lp26').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp26_pop');
	});
	$('.B20317_lp27').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp27_pop');
	});
	$('.B20317_lp28').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp28_pop');
	});
	$('.B20317_lp29').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp29_pop');
	});
	$('.B20317_lp30').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp30_pop');
	});
	$('.B20317_lp31').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp31_pop');
	});
	$('.B20317_lp32').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp32_pop');
	});
	$('.B20317_lp33').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp33_pop');
	});
	$('.B20317_lp34').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp34_pop');
	});
	$('.B20317_lp35').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp35_pop');
	});
	$('.B20317_lp36').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20317_lp36_pop');
	});
});

//XS 에너지 제품소개 : B20306
$(function(){
	var owlSync1 = $('#carousel_1');
	var owlSync2 = $('#carousel_2, #carousel_3, #carousel_4, #carousel_5');

	owlSync1.owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		linked: owlSync2
	});

	owlSync2.owlCarousel({
		items: 1,
		nav: false,
		touchDrag: false,
		mouseDrag: false,
		linked: owlSync2.prev()
	}).on('initialized.owl.carousel  linked.to.owl.carousel', function(){

	});
});
/**
 * Plugin for linking multiple owl instances
 * @version 1.0.0
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	/**
	 * Creates the Linked plugin.
	 * @class The Linked Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Linked = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'dragged.owl.carousel changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.linked) {
					this.update(e);
				}
			}, this),
			'linked.to.owl.carousel': $.proxy(function(e, index, speed, standard, propagate) {
				if (e.namespace && this._core.settings.linked) {
					this.toSlide(index, speed, propagate);
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Linked.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Linked.Defaults = {
		linked: false
	};

	/**
	 * Updated linked instances
	 */
	Linked.prototype.update = function(e) {
		this.toSlide( e.relatedTarget.relative(e.item.index) );
	};

	/**
	 * Carry out the to.owl.carousel proxy function
	 * @param {int} index
	 * @param {int} speed
	 * @param {bool} propagate
	 */
	Linked.prototype.toSlide = function(index, speed, propagate) {
		var id = this._core.$element.attr('id'),
			//linked = this._core.settings.linked.split(',');
			linked = typeof(this._core.settings.linked) === 'string' ? this._core.settings.linked.split(',') : this._core.settings.linked;

		if ( typeof propagate == 'undefined' ) {
			propagate = true;
		}

		index = index || 0;

		if ( propagate ) {
			$.each(linked, function(i, el){
				$(el).trigger('linked.to.owl.carousel', [index, 300, true, false]);
			});
		} else {
			this._core.$element.trigger('to.owl.carousel', [index, 300, true]);

			if ( this._core.settings.current ) {
				this._core._plugins.current.switchTo(index);
			}
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Linked.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.linked = Linked;

})(window.Zepto || window.jQuery, window, document);

//XS 에너지 제품소개 : B20309
$(function() {
	$('#xs-visual').owlCarousel({
		loop: false,
		nav: true,
		dots: true,
		margin: 0,
		items: 1
	});
});

//이스프링 미디어 갤러리 : B20411
$(function(){
	$('.B20411_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp1_pop');
	});
	$('.B20411_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp2_pop');
	});
	$('.B20411_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp3_pop');
	});
	$('.B20411_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp4_pop');
	});
	$('.B20411_lp5').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp5_pop');
	});
	$('.B20411_lp6').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp6_pop');
	});
	$('.B20411_lp7').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp7_pop');
	});
	$('.B20411_lp8').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp8_pop');
	});
	$('.B20411_lp9').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp9_pop');
	});
	$('.B20411_lp10').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp10_pop');
	});
	$('.B20411_lp11').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp11_pop');
	});
	$('.B20411_lp12').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp12_pop');
	});
	$('.B20411_lp13').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp13_pop');
	});
	$('.B20411_lp14').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp14_pop');
	});
	$('.B20411_lp15').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp15_pop');
	});
	$('.B20411_lp16').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp16_pop');
	});
	$('.B20411_lp17').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp17_pop');
	});
	$('.B20411_lp18').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp18_pop');
	});
	$('.B20411_lp19').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20411_lp19_pop');
	});
});

//암웨이 퀸 미디어 갤러리 : B20502
$(function(){
	$('.B20502_lp1').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20502_lp1_pop');
	});
	$('.B20502_lp2').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20502_lp2_pop');
	});
	$('.B20502_lp3').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20502_lp3_pop');
	});
	$('.B20502_lp4').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20502_lp4_pop');
	});
	$('.B20502_lp5').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20502_lp5_pop');
	});
	$('.B20502_lp6').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20502_lp6_pop');
	});
	$('.B20502_lp7').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20502_lp7_pop');
	});
	$('.B20502_lp8').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20502_lp8_pop');
	});
	$('.B20502_lp9').click(function(event) {
		event.preventDefault();
		layerPopOver('this','.B20502_lp9_pop');
	});
});