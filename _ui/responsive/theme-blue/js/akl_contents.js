$(function(){
/** ----- 브랜드 ----- */
	//브랜드 상단 SNS
	brandTopSNS();
	$(window).resize(function(){
		brandTopSNS();
	});

});

/* 브랜드 모바일 SNS 위치 */
function brandTopSNS(){
	var $brandHeading = $('.brand .top-title-wrapper');
	if(!$brandHeading.length){return;}

	function titSpaceCal(){
		var $brandSns = $('.brand .bod-view-sns');
		var titHeight = $brandHeading.outerHeight(true);

		//console.log('h1 높이: ' + titHeight);
		$brandSns.css('top',titHeight);
	}

	var windowWidth = $(window).width();
	if(windowWidth < 769){

		setTimeout(function(){
			titSpaceCal();
		},300);
	}
}