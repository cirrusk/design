$(function(){
/** ----- 브랜드 ----- */
	//브랜드 상단 SNS
	brandTopSNS();

	//XS에너지 홈
	xsEnergyHome();

	$(window).resize(function(){
		brandTopSNS();
		xsEnergyHome();
	});

	//연혁
	timelineFunc();

});

/* 브랜드 모바일 SNS 위치 */
function brandTopSNS(){
	var $brandHeading = $('.brand .top-title-wrapper');
	if(!$brandHeading.length){return;}

	var $brandSns = $('.brand .bod-view-sns');
	var titHeight = $brandHeading.outerHeight();
	var windowWidth = $(window).width();

	function titSpaceCal(){
		//console.log('h1 높이: ' + titHeight);
		$brandSns.css('top',titHeight);
	}

	if(windowWidth < 769){
		setTimeout(function(){
			titSpaceCal();
		},300);
	}
	else{
		setTimeout(function(){
			$brandSns.css('top','0');
		},300);
	}
}
/* XS에너지 홈 */
function xsEnergyHome(){

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
}

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