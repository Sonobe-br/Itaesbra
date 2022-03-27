;(function($,window,document,undefined){var pluginName='mateFolio',defaults={columns:4,mcolumns:3,scolumns:2,pcolumns:1,filter:'on',filterdefcat:'all',filterradius:'5px',filterpadding:'10px',filtermargin:'15px',filterbg:'#323231',filterborder:'on',filterborderbg:'#e74647',filterborderw:'2px',fbtnpadding:'5px 15px',fbtnfsize:'14px',fbtncolor:'#777777',fbtnacbg:'#FFB300',fbtnaccolor:'#ffffff',hover:'on',delay:'0.3s',hoverbg:'#FFB300',hovercolor:'#ffffff',itemsmargin:'on',itemsmarginset:'2px',itemborder:'off',itemborderp:'5px',itemborderbg:'#323231',animatespeed:500,title:'off',titlep:'tl',titleo:'0.8',titlebg:'#000000',titlecolor:'#ffffff',titlefs:'18px',titlepadding:'10px 25px',overstyle:'roll',overopacity:'0.8',overspeedin:400,overspeedout:400,overbg:'#e74647',lightborder:'on',lightborderwidth:'5px',lightborderbg:'#ffffff',lightpanelh:'50px',lighttitlecolor:'#323231',lighttitlef:'16px',lighttitlew:'bold',overmbg:'#000000',overmopacity:'0.8',overmspeedin:500,overmspeedout:300,lightboximagepercent:80};function mateFolio(element,options){this.element=$(element);var ele=this;this.options=$.extend({},defaults,options);this._defaults=defaults;this._name=pluginName;this.lightboxcreate(ele);this.variables(ele);this.remover(ele);this.loader(ele)};mateFolio.prototype.variables=function(ele){this.op=this.options;this.innerWrap=this.element.find('.mate-folio-inner-wrap');this.filterWrap=this.element.find('.mate-folio-filter');this.filterItems=this.filterWrap.find('.folio-filter-item');this.folioWrap=this.innerWrap.find('.mate-folio');this.folioI=this.folioWrap.find('.folio-item');this.folioItems=this.folioWrap.find('.folio-item');this.folioInnerWrap=this.folioItems.find('.folio-item-inner-wrap');this.folioHolder=this.folioInnerWrap.find('.folio-item-holder');this.folioTitle=this.folioHolder.find('.folio-item-title');this.img=this.folioHolder.find('img');this.imageOver=this.folioHolder.find('.mate-folio-overlay');this.lightWrap=this.innerWrap.find('.mate-folio-lightbox');this.lightOver=this.lightWrap.find('.mate-folio-lightbox-overlay');this.lightHolder=this.lightWrap.find('.mate-folio-lightbox-imghold');this.lightPanel=this.lightWrap.find('.mate-folio-lightbox-panel');this.leftpanel=this.lightPanel.find('.mflp-left');this.rightpanel=this.lightPanel.find('.mflp-right');this.lighttitle=this.lightPanel.find('.mflp-title');this.margin=parseInt(this.op.itemsmarginset);this.showspeed=400;this.hidespeed=300;this.mathfloo=(this.op.itemsmargin==='on')?'off':'on';this.catyMemory(ele,'first',false)};mateFolio.prototype.lightboxcreate=function(ele){this.boxLight=this.element.find('.mate-folio-lightbox').length;if(!this.boxLight){this.element.find('.mate-folio-inner-wrap').append('<div class="mate-folio-lightbox"><div class="mate-folio-lightbox-overlay"></div><div class="mate-folio-lightbox-imghold"></div><div class="mate-folio-lightbox-panel"><div class="mflp-left"></div><div class="mflp-title"></div><div class="mflp-right"></div></div></div>')};this.overcheck=this.element.find('.folio-item-holder');this.overcheck.each(function(){var self=$(this),over=self.find('.mate-folio-overlay').length;if(!over){self.append('<div class="mate-folio-overlay"></div>')}})};mateFolio.prototype.catyMemory=function(ele,check,data){if(check==='first'){if(this.op.filter==='on'){this.filterWrap.css({'border-radius':this.op.filterradius,'background-color':this.op.filterbg,'padding':this.op.filterpadding,'margin-bottom':this.op.filtermargin});if(this.op.filterborder==='on'){this.filterWrap.css({'border-bottom-style':'solid','border-bottom-color':this.op.filterborderbg,'border-bottom-width':this.op.filterborderw})};this.filterItems.css({'padding':this.op.fbtnpadding,'font-size':this.op.fbtnfsize,'color':this.op.fbtncolor});if(this.op.filterdefcat==='all'){this.folioItemsLen=this.folioItems.length;this.filterWrap.find('[data-filtercat=all]').addClass('mflp-active-filter').css({'background-color':ele.op.fbtnacbg,'color':ele.op.fbtnaccolor})}else{this.folioItems=this.folioItems.addClass('mflp-hidden').filter('[data-foliocaty='+this.op.filterdefcat+']').removeClass('mflp-hidden');this.folioItemsLen=this.folioItems.length;this.filterWrap.find('[data-filtercat='+this.op.filterdefcat+']').addClass('mflp-active-filter').css({'background-color':ele.op.fbtnacbg,'color':ele.op.fbtnaccolor})}}else{this.folioItemsLen=this.folioItems.length}}else{this.folioItems.stop().fadeTo(this.op.animatespeed,0,function(){$(this).css('visibility','hidden')}).addClass('mflp-hidden');if(data==='all'){this.folioItems=this.folioWrap.find('.folio-item').removeClass('mflp-hidden')}else{this.folioItems=this.folioWrap.find('[data-foliocaty='+data+']').removeClass('mflp-hidden')};this.folioItemsLen=this.folioItems.length;this.changedCounters(ele);this.calculator(ele);this.fireIt(ele)}};mateFolio.prototype.filterEvents=function(ele){this.filterItems.on('click mouseenter mouseleave.mateFolioFilterClick',function(event){var self=$(this),data=self.data('filtercat'),clas=self.hasClass('mflp-active-filter');if(event.type==='click'){if(!clas){self.addClass('mflp-active-filter').css({'background-color':ele.op.fbtnacbg,'color':ele.op.fbtnaccolor}).siblings('.folio-filter-item').removeClass('mflp-active-filter').css({'background-color':'transparent','color':ele.op.fbtncolor});ele.catyMemory(ele,'second',data)}};if(ele.op.hover==='on'){if(!clas){if(event.type==='mouseenter'){self.css({'background-color':ele.op.hoverbg,'color':ele.op.hovercolor})}else if(event.type==='mouseleave'){self.css({'background-color':'transparent','color':ele.op.fbtncolor})}}}})};mateFolio.prototype.remover=function(ele){function removeTags(who){who.each(function(indx,self){var self=$(self),parent=self.parent('p').length;if(parent===1){self.unwrap()}})};removeTags(this.img);removeTags(this.imageOver);this.imageOver.siblings('p','a').remove();this.folioWrap.children('p','a').remove()};mateFolio.prototype.loader=function(ele){var imgLoad=imagesLoaded(ele.element.find('img'));imgLoad.on('done',function(instance){ele.init(ele)})};mateFolio.prototype.setStyles=function(ele){this.lightOver.css('background-color',this.op.overmbg);this.lightPanel.css('background-color',this.op.lightborderbg);this.leftpanel.add(this.rightpanel).add(this.lighttitle).css({'height':this.op.lightpanelh,'line-height':this.op.lightpanelh});this.lighttitle.css({'color':this.op.lighttitlecolor,'font-size':this.op.lighttitlef,'font-weight':this.op.lighttitlew});if(this.op.lightborder==='on'){this.lightHolder.css({'padding':this.op.lightborderwidth,'background-color':this.op.lightborderbg})};if(this.op.itemsmargin==='on'){this.innerWrap.css('margin-left',this.margin/2)};if(this.op.itemborder==='on'){this.folioHolder.css({'border-width':this.op.itemborderp,'border-color':this.op.itemborderbg,'border-style':'solid'})};if(this.op.title==='on'){switch(this.op.titlep){case'tl':this.folioTitle.css({'top':'0','left':'0'});break;case'tr':this.folioTitle.css({'top':'0','right':'0'});break;case'bl':this.folioTitle.css({'bottom':'0','left':'0'});break;case'br':this.folioTitle.css({'bottom':'0','right':'0'});break};this.folioTitle.css({'background-color':this.op.titlebg,'color':this.op.titlecolor,'font-size':this.op.titlefs,'padding':this.op.titlepadding}).fadeTo(0,this.op.titleo)};if(this.op.hover==='on'){this.filterItems.css('transition-duration',this.op.delay)}};mateFolio.prototype.changedCounters=function(ele){this.counterWhile=0;this.longer=0};mateFolio.prototype.calculator=function(ele){this.arrHeight=[];this.arrHeightTwo=[];this.arrPositions={};this.count=1;this.countIndx=0;this.winWidth=$(window).width();if(this.winWidth>992){var columnsCalculate=this.op.columns}else if(this.winWidth<=992&&this.winWidth>768){var columnsCalculate=this.op.mcolumns}else if(this.winWidth<=768&&this.winWidth>480){var columnsCalculate=this.op.scolumns}else if(this.winWidth<=480){var columnsCalculate=this.op.pcolumns};this.columnsCalculate=columnsCalculate;if(this.counterWhile>0){var div=$('<div style="width:100%;height:'+this.longer+';"></div>');this.innerWrap.append(div)};this.eWidth=this.innerWrap.innerWidth();if(div){div.remove()};if(this.mathfloo==='on'){this.boxWidth=Math.floor(this.eWidth/this.columnsCalculate)}else{this.boxWidth=this.eWidth/this.columnsCalculate}};mateFolio.prototype.fireIt=function(ele){function isInteger(num){return(num^0)===num};function marginSet(inner,rightorbottom){if(ele.op.itemsmargin==='on'){switch(rightorbottom){case'right':inner.css({'padding-right':ele.op.itemsmarginset,'padding-bottom':ele.op.itemsmarginset});break;case'bottom':inner.css({'padding-right':'0','padding-bottom':ele.op.itemsmarginset});break}}};while(this.counterWhile<=1){this.folioItems.css('width',this.boxWidth).each(function(indx,sam){var self=$(sam);var inner=self.find('.folio-item-inner-wrap'),index=indx+1,celoe=index/ele.columnsCalculate;var arrLen=ele.arrHeight.length;if(ele.count===1){self.css('left','0')}else{self.css('left',ele.boxWidth*ele.countIndx)};if(index<=ele.columnsCalculate){self.css('top','0')}else{self.css('top',ele.arrHeight[indx-ele.columnsCalculate])};if(isInteger(celoe)){ele.count=1;ele.countIndx=0;marginSet(inner,'right')}else{ele.count++;ele.countIndx++;marginSet(inner,'right')};var height=self.outerHeight(),pos=self.position().top,calPos=height+pos;ele.arrHeight.push(calPos);if(indx==ele.folioItemsLen-1){ele.longer=Math.max.apply(0,ele.arrHeight);ele.folioWrap.css('height',ele.longer)};ele.arrPositions[indx+'-top']=self.css('top');ele.arrPositions[indx+'-left']=self.css('left');self.css({'left':'0','top':'0'})});this.counterWhile++;if(this.counterWhile===1){this.calculator(ele)}};if(this.counterWhile===2){this.showit(ele)}};mateFolio.prototype.showit=function(ele){if(this.op.filter==='on'){this.filterWrap.slideDown(300)};this.folioItems.css('visibility','visible').each(function(indx,sam){var self=$(sam);var index=indx+1;self.stop().fadeTo(ele.showspeed,1,function(){$(this).stop().animate({'top':ele.arrPositions[indx+'-top'],'left':ele.arrPositions[indx+'-left']},ele.op.animatespeed)})})};mateFolio.prototype.overlayAction=function(ele){switch(ele.op.overstyle){case'classic':ele.imageOver.css({'left':'0','top':'0','background-color':ele.op.overbg});break;case'roll':ele.imageOver.css({'display':'block','height':'0','left':'0','top':'0','background-color':ele.op.overbg});break;case'blind':ele.imageOver.css({'display':'block','height':'100%','width':'0','left':'0','top':'0','background-color':ele.op.overbg});break};function senderType(swho,sinout){if(ele.op.overstyle==='classic'){if(sinout==='in'){swho.stop(true,true).fadeTo(ele.op.overspeedin,ele.op.overopacity)}else{swho.stop(true,true).fadeTo(ele.op.overspeedout,0,function(){$(this).css('display','none')})}}else if(ele.op.overstyle==='roll'){if(sinout==='in'){swho.stop(true,true).fadeTo(0,ele.op.overopacity,function(){$(this).animate({'height':'100%'},ele.op.overspeedin)})}else{swho.stop(true,true).animate({'top':'100%'},ele.op.overspeedout,function(){$(this).css({'display':'none','top':'0','height':'0'})})}}else if(ele.op.overstyle==='blind'){if(sinout==='in'){swho.stop(true,true).fadeTo(0,ele.op.overopacity,function(){$(this).animate({'width':'100%'},ele.op.overspeedin)})}else{swho.stop(true,true).animate({'left':'100%'},ele.op.overspeedout,function(){$(this).css({'display':'none','left':'0','width':'0'})})}}};this.folioI.on('mouseenter mouseleave.mateFolioItems',function(event){var sam=$(this),over=sam.find('.mate-folio-overlay'),parentwidth=sam.outerWidth();if(event.type==='mouseenter'){senderType(over,'in')}else if(event.type==='mouseleave'){senderType(over,'out')}})};mateFolio.prototype.lightboxCalculate=function(self,ele,checker){var winW=$(window).innerWidth(),winH=$(window).innerHeight(),maxH=(winH/100)*this.op.lightboximagepercent,img=ele.lightHolder.find('img'),panel=parseInt(ele.op.lightpanelh)/2;img.css('max-height',maxH);var mar=ele.lightHolder.outerHeight()/2,mars=winH/2-mar;if(checker==='first'){ele.lightHolder.css('display','inline-block').animate({'margin-top':mars-panel},200,function(){ele.lightPanel.animate({'height':ele.op.lightpanelh},500,function(){ele.lightHolder.addClass('mf-lightbox-keeper-active')})})}else{ele.lightHolder.stop(true).animate({'margin-top':mars-panel},200)}};mateFolio.prototype.lightboxAction=function(ele){function ImageCheckControl(self){var imgLoad=imagesLoaded(ele.lightHolder.find('img'));imgLoad.on('done',function(instance){ele.lightboxCalculate(self,ele,'first')})};this.imageOver.on('click.mateFoliopopclick',function(){var self=$(this),parent=self.parents('.folio-item'),link=parent.data('foliobox'),title=parent.data('foliotitle'),img='<img src="'+link+'" alt="Mate Folio Image">';ele.parentImg=parent;parent.addClass('mf-light-box-img-active');ele.lightHolder.append(img);if(title){ele.lighttitle.html(title)}else{ele.lighttitle.html(' ')};ele.lightWrap.addClass('mf-light-box-active').fadeTo(0,1,function(){ele.lightOver.fadeTo(ele.op.overmspeedin,ele.op.overmopacity,function(){var self=$(this);ImageCheckControl(self)})});return false});function lightboxClose(){if(ele.lightHolder.hasClass('mf-lightbox-keeper-active')){ele.lightWrap.removeClass('mf-light-box-active').stop(true).fadeTo(ele.op.overmspeedout,0,function(){$(this).add(ele.lightHolder).css('display','none');ele.lightOver.fadeTo(0,0,function(){$(this).css('display','none')});ele.lightHolder.removeClass('mf-lightbox-keeper-active').css('margin-top','0').find('img').remove();ele.lightPanel.css('height','0');ele.folioWrap.find('.mf-light-box-img-active').removeClass('mf-light-box-img-active')})}};this.lightOver.on('click.mateFolioOvermClose',function(){var self=$(this);lightboxClose()});function imageChanger(self,trigger){var active=ele.folioWrap.find('.mf-light-box-img-active'),sibling=(trigger==='prev')?active.prevAll('.folio-item').not('.mflp-hidden').eq(0):active.nextAll('.folio-item').not('.mflp-hidden').eq(0),boxImgData=sibling.data('foliobox'),title=sibling.data('foliotitle'),link='<img src="'+boxImgData+'" alt="Mate Folio Image">';if(sibling.length!==0){active.removeClass('mf-light-box-img-active');sibling.addClass('mf-light-box-img-active');ele.lightHolder.hide(300,0,function(){var self=$(this);self.find('img').remove();self.append(link);if(title){ele.lighttitle.html(title)}else{ele.lighttitle.html(' ')};ImageCheckControl(self)})}};this.leftpanel.on('click.mateFolioleftpanel',function(){var self=$(this);imageChanger(self,'prev')});this.rightpanel.on('click.mateFoliorightpanel',function(){var self=$(this);imageChanger(self,'next')})};mateFolio.prototype.init=function(ele){this.changedCounters(ele);this.setStyles(ele);this.calculator(ele);this.fireIt(ele);this.filterEvents(ele);this.overlayAction(ele);this.lightboxAction(ele);var timer_resize;$(window).on('resize.MateFolioResize',function(){clearTimeout(timer_resize);timer_resize=setTimeout(function(){if(ele.lightWrap.hasClass('mf-light-box-active')){ele.lightboxCalculate(ele.lightOver,ele,'resize')};ele.folioItems.stop().fadeTo(ele.hidespeed,0,function(){ele.changedCounters(ele);ele.calculator(ele);ele.fireIt(ele)})},800)})};$.fn[pluginName]=function(options){return this.each(function(){if(!$.data(this,'plugin_'+pluginName)){$.data(this,'plugin_'+pluginName,new mateFolio(this,options))}})}})(jQuery,window,document);