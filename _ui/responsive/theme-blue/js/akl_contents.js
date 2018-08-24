$(function(){

/** ----- 브랜드 ----- */
	//브랜드 상단 SNS
	brandTopSNS();

});

/* 브랜드 모바일 SNS 위치 */
function brandTopSNS(){

	var windowWidth = $(window).width();
	var _brandSns = $('.brand .bod-view-sns');
	var _brnadH1 = $('.brand .brand-contents > h1').height();
	var _brnadTxt = $('.brand .brand-contents > p.tit-txt').height();
	var _top = 0;

	//console.log (_brnadH1, _brnadTxt);

	if(windowWidth < 769) {
		if(_brnadH1){
			if (_brnadTxt){
				_top = _brnadH1 + _brnadTxt + 25;
			}else{
				_top = _brnadH1 + 20;
			}
		}
		_brandSns.css('top',_top + 'px')
		//console.log(_top);
	}
}