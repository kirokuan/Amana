
var display={
width:3,height:3,
text:'<div style="display: block; opacity: 1;" class="detailView x6"><div class="inner"><h3>感性?索 EVE</h3><p>?????????「EVE(Emotional Visual search Engine)」?、?真?言葉（形容詞）?体系化???????????索??????。消費者?感性?嗜好?合???真??????抽出?、企業??????????????????????????。</p><img src="https://amana.jp/imgs/card_l/4610.png"/></div></div>'
};
(function($) {  
    $.fn.extend({
ListViewer:function(opt){
var defaults={
CardClass:"card",
CardWidth:180,
CardHeight:279,
CardExpand:290,
row:5
};
opt=jQuery.extend(defaults, opt);

var Cards;
var CardWidth=opt.CardWidth;
var CardHeight=opt.CardHeight;
var row=opt.row;
var i=0;
	Cards=$(this).children("."+opt.CardClass);

	//$(this).children(".card")
	Cards.each(
			function(){
			$(this).CardMove(i);
		$(this).attr("id",i);
			i++;
				$(this).bind({
					click:function (){
					var target=$(this);
					var targetid=parseInt(target.attr("id"));
					
					var position=parseInt(target.attr("id"))+1;
				
					if(!$(this).hasClass("expand")){
					Cards.each(
					function (){
							if($(this).hasClass("expand")){
								$(this).click();
							}});
					if((targetid%row + display.width) > row )
					 {
					 position=targetid-1;
					 targetid=Math.ceil(targetid/row)*row;
					 } 
					 $(this).CardMove(targetid);
					Cards.each(
					function (){
						
							var left=$(this).css("left");
							var top=$(this).css("top");
							var id=parseInt($(this).attr("id"));
							
							if(parseInt(target.attr("id") )< id){
							position++;
							while((position%row-targetid%row)>=0&& (position%row-targetid%row)<display.width&& (Math.floor(position/row)-Math.floor(targetid/row))<display.height && position>=targetid){
							position++;
							}
								$(this).CardMove(position);
								
							}
							
						}
					);
					$(this).children(".thumbView").hide();
					$(this).animate(
					{width:"+="+CardWidth*(display.width-1)+"px",height:"+="+(opt.CardExpand)*(display.height-1)+"px"}
					,1000,function(){
					
					$(this).append(display.text);
					$(this).children(".detailView").hide();
					$(this).children(".detailView").fadeIn("slow");
					});
				//	$(this);
					$(this).addClass("expand");
					}
					else {
					$(this).animate(
					{width:"-="+CardWidth*(display.width-1)+"px",height:"-="+(opt.CardExpand)*(display.height-1)+"px"}
					);
					$(this).children(".detailView").hide();
					Cards.each(
					function (){
						var id=parseInt($(this).attr("id"));
						//if(targetid <= id)
						$(this).CardMove(id);	
						}
					);
					$(this).children(".thumbView").fadeIn("slow");
					
					$(this).removeClass("expand");
						
						}
					}
					}
				);
			}
		);
	}
	,CardMove:function(param,opt){
		
		//alert(param);
		var defaults={
CardWidth:180,
CardHeight:290,
row:5
};

opt=jQuery.extend(defaults, opt);
var i=param;
var CardWidth=opt.CardWidth;
var CardHeight=opt.CardHeight;
var row=opt.row;

		$(this).animate({
left:(i%row)*CardWidth,
top:Math.floor(i/row)*CardHeight
		});
		
		}
	});
})(jQuery);
