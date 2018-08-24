$(function(){
/** ----- 브랜드 ----- */
	//브랜드 상단 SNS
	//window.onload=function(){
		brandTopSNS();
	//}

});

/* 브랜드 모바일 SNS 위치 */
function brandTopSNS(){

	var windowWidth = $(window).width();
	if(windowWidth < 769) {
		var _brandSns = $('.brand .bod-view-sns');
		var _brnadH1 = $('.brand .brand-contents > h1').height();
		var _brnadTxt = $('.brand .brand-contents > p.tit-txt').height();
		var _top;

		if($('.brand .brand-contents > h1').length){
			_top = 20 + _brnadH1 + _brnadTxt;
			
			/*if (_brnadTxt){
				_top = 20 + _brnadH1 + _brnadTxt;
			}else{
				_top = 15 + _brnadH1;
			}*/
		}
		_brandSns.css('top',_top + 'px');
		
	}
	
	console.log (_brnadH1, _brnadTxt);
	console.log(_top);
}