/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: mb.bgndGallery.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 07/05/14 22.40
 *  *****************************************************************************
 */

/*Browser detection patch*/
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
	jQuery.browser = {};
	jQuery.browser.mozilla = !1;
	jQuery.browser.webkit = !1;
	jQuery.browser.opera = !1;
	jQuery.browser.safari = !1;
	jQuery.browser.chrome = !1;
	jQuery.browser.msie = !1;
	jQuery.browser.ua = nAgt;
	jQuery.browser.name = navigator.appName;
	jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
	jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
	var nameOffset, verOffset, ix;
	if (-1 != (verOffset = nAgt.indexOf("Opera")))jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("MSIE")))jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
		jQuery.browser.msie = !0;
		jQuery.browser.name = "Microsoft Internet Explorer";
		var start = nAgt.indexOf("rv:") + 3, end = start + 4;
		jQuery.browser.fullVersion = nAgt.substring(start, end)
	} else-1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
	-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
	-1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
	jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
	isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
	jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt);
jQuery.browser.blackberry = /BlackBerry/i.test(nAgt);
jQuery.browser.ios = /iPhone|iPad|iPod/i.test(nAgt);
jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt);
jQuery.browser.windowsMobile = /IEMobile/i.test(nAgt);
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile;


/*
 *   jquery.mb.components
 *  file: jquery.mb.CSSAnimate.js
 */
!function($){function uncamel(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function setUnit(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+$/)?""+a+b:a}function setFilter(a,b,c){var d=uncamel(b),e=jQuery.browser.mozilla?"":$.CSS.sfx;a[e+"filter"]=a[e+"filter"]||"",c=setUnit(c>$.CSS.filters[b].max?$.CSS.filters[b].max:c,$.CSS.filters[b].unit),jQuery.browser.mozilla||(a[e+"filter"]+=d+"("+c+") "),delete a[b]}eval(function(a,b,c,d,e,f){if(e=function(a){return a},!"".replace(/^/,String)){for(;c--;)f[c]=d[c]||c;d=[function(a){return f[a]}],e=function(){return"\\w+"},c=1}for(;c--;)d[c]&&(a=a.replace(new RegExp("\\b"+e(c)+"\\b","g"),d[c]));return a}('29 11=17.53;24(!2.9){2.9={};2.9.34=!1;2.9.22=!1;2.9.45=!1;2.9.42=!1;2.9.40=!1;2.9.28=!1;2.9.56=11;2.9.16=17.51;2.9.13=""+47(17.23);2.9.18=26(17.23,10);29 32,12,20;24(-1!=(12=11.15("33")))2.9.45=!0,2.9.16="33",2.9.13=11.14(12+6),-1!=(12=11.15("25"))&&(2.9.13=11.14(12+8));27 24(-1!=(12=11.15("58")))2.9.28=!0,2.9.16="36 38 39",2.9.13=11.14(12+5);27 24(-1!=11.15("57")){2.9.28=!0;2.9.16="36 38 39";29 30=11.15("59:")+3,43=30+4;2.9.13=11.14(30,43)}27-1!=(12=11.15("41"))?(2.9.22=!0,2.9.40=!0,2.9.16="41",2.9.13=11.14(12+7)):-1!=(12=11.15("31"))?(2.9.22=!0,2.9.42=!0,2.9.16="31",2.9.13=11.14(12+7),-1!=(12=11.15("25"))&&(2.9.13=11.14(12+8))):-1!=(12=11.15("68"))?(2.9.22=!0,2.9.16="31",2.9.13=11.14(12+7),-1!=(12=11.15("25"))&&(2.9.13=11.14(12+8))):-1!=(12=11.15("35"))?(2.9.34=!0,2.9.16="35",2.9.13=11.14(12+8)):(32=11.37(" ")+1)<(12=11.37("/"))&&(2.9.16=11.14(32,12),2.9.13=11.14(12+1),2.9.16.63()==2.9.16.64()&&(2.9.16=17.51));-1!=(20=2.9.13.15(";"))&&(2.9.13=2.9.13.14(0,20));-1!=(20=2.9.13.15(" "))&&(2.9.13=2.9.13.14(0,20));2.9.18=26(""+2.9.13,10);67(2.9.18)&&(2.9.13=""+47(17.23),2.9.18=26(17.23,10));2.9.69=2.9.18}2.9.46=/65/19.21(11);2.9.49=/66/19.21(11);2.9.48=/60|61|55/19.21(11);2.9.50=/33 52/19.21(11);2.9.44=/54/19.21(11);2.9.62=2.9.46||2.9.49||2.9.48||2.9.44||2.9.50;',10,70,"||jQuery|||||||browser||nAgt|verOffset|fullVersion|substring|indexOf|name|navigator|majorVersion|i|ix|test|webkit|appVersion|if|Version|parseInt|else|msie|var|start|Safari|nameOffset|Opera|mozilla|Firefox|Microsoft|lastIndexOf|Internet|Explorer|chrome|Chrome|safari|end|windowsMobile|opera|android|parseFloat|ios|blackberry|operaMobile|appName|Mini|userAgent|IEMobile|iPod|ua|Trident|MSIE|rv|iPhone|iPad|mobile|toLowerCase|toUpperCase|Android|BlackBerry|isNaN|AppleWebkit|version".split("|"),0,{})),jQuery.support.CSStransition=function(){var a=document.body||document.documentElement,b=a.style;return void 0!==b.transition||void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.MsTransition||void 0!==b.OTransition}(),$.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(a){var b=jQuery.extend(!0,{},a);jQuery.browser.webkit||jQuery.browser.opera?$.CSS.sfx="-webkit-":jQuery.browser.mozilla?$.CSS.sfx="-moz-":jQuery.browser.msie&&($.CSS.sfx="-ms-");for(var c in b){"transform"===c&&(b[$.CSS.sfx+"transform"]=b[c],delete b[c]),"transform-origin"===c&&(b[$.CSS.sfx+"transform-origin"]=a[c],delete b[c]),"filter"!==c||jQuery.browser.mozilla||(b[$.CSS.sfx+"filter"]=a[c],delete b[c]),"blur"===c&&setFilter(b,"blur",a[c]),"brightness"===c&&setFilter(b,"brightness",a[c]),"contrast"===c&&setFilter(b,"contrast",a[c]),"grayscale"===c&&setFilter(b,"grayscale",a[c]),"hueRotate"===c&&setFilter(b,"hueRotate",a[c]),"invert"===c&&setFilter(b,"invert",a[c]),"saturate"===c&&setFilter(b,"saturate",a[c]),"sepia"===c&&setFilter(b,"sepia",a[c]);var d="";"x"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateX("+setUnit(a[c],"px")+")",delete b[c]),"y"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateY("+setUnit(a[c],"px")+")",delete b[c]),"z"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateZ("+setUnit(a[c],"px")+")",delete b[c]),"rotate"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotate("+setUnit(a[c],"deg")+")",delete b[c]),"rotateX"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateX("+setUnit(a[c],"deg")+")",delete b[c]),"rotateY"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateY("+setUnit(a[c],"deg")+")",delete b[c]),"rotateZ"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateZ("+setUnit(a[c],"deg")+")",delete b[c]),"scale"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scale("+setUnit(a[c],"")+")",delete b[c]),"scaleX"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleX("+setUnit(a[c],"")+")",delete b[c]),"scaleY"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleY("+setUnit(a[c],"")+")",delete b[c]),"scaleZ"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleZ("+setUnit(a[c],"")+")",delete b[c]),"skew"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skew("+setUnit(a[c],"deg")+")",delete b[c]),"skewX"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewX("+setUnit(a[c],"deg")+")",delete b[c]),"skewY"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewY("+setUnit(a[c],"deg")+")",delete b[c]),"perspective"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" perspective("+setUnit(a[c],"px")+")",delete b[c])}return b},getProp:function(a){var b=[];for(var c in a)b.indexOf(c)<0&&b.push(uncamel(c));return b.join(",")},animate:function(a,b,c,d,e){return this.each(function(){function o(){f.called=!0,f.CSSAIsRunning=!1,g.off($.CSS.transitionEnd+"."+f.id),clearTimeout(f.timeout),g.css($.CSS.sfx+"transition",""),"function"==typeof e&&e.apply(f),"function"==typeof f.CSSqueue&&(f.CSSqueue(),f.CSSqueue=null)}var f=this,g=jQuery(this);f.id=f.id||"CSSA_"+(new Date).getTime();var h=h||{type:"noEvent"};if(f.CSSAIsRunning&&f.eventType==h.type&&!jQuery.browser.msie&&jQuery.browser.version<=9)return f.CSSqueue=function(){g.CSSAnimate(a,b,c,d,e)},void 0;if(f.CSSqueue=null,f.eventType=h.type,0!==g.length&&a){if(a=$.normalizeCss(a),f.CSSAIsRunning=!0,"function"==typeof b&&(e=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(d=c,c=0),"string"==typeof c&&(e=c,c=0),"function"==typeof d&&(e=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b)for(var i in jQuery.fx.speeds){if(b==i){b=jQuery.fx.speeds[i];break}b=jQuery.fx.speeds._default}if(b||(b=jQuery.fx.speeds._default),"string"==typeof e&&(d=e,e=null),!jQuery.support.CSStransition){for(var j in a){if("transform"===j&&delete a[j],"filter"===j&&delete a[j],"transform-origin"===j&&delete a[j],"auto"===a[j]&&delete a[j],"x"===j){var k=a[j],l="left";a[l]=k,delete a[j]}if("y"===j){var k=a[j],l="top";a[l]=k,delete a[j]}("-ms-transform"===j||"-ms-filter"===j)&&delete a[j]}return g.delay(c).animate(a,b,e),void 0}var m={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};m[d]&&(d=m[d]),g.off($.CSS.transitionEnd+"."+f.id);var n=$.CSS.getProp(a),p={};$.extend(p,a),p[$.CSS.sfx+"transition-property"]=n,p[$.CSS.sfx+"transition-duration"]=b+"ms",p[$.CSS.sfx+"transition-delay"]=c+"ms",p[$.CSS.sfx+"transition-timing-function"]=d,setTimeout(function(){g.one($.CSS.transitionEnd+"."+f.id,o),g.css(p)},1),f.timeout=setTimeout(function(){return f.called||!e?(f.called=!1,f.CSSAIsRunning=!1,void 0):(g.css($.CSS.sfx+"transition",""),e.apply(f),f.CSSAIsRunning=!1,"function"==typeof f.CSSqueue&&(f.CSSqueue(),f.CSSqueue=null),void 0)},b+c+10)}})}},$.fn.CSSAnimate=$.CSS.animate,$.normalizeCss=$.CSS.normalizeCss,$.fn.css3=function(a){return this.each(function(){var b=$(this),c=$.normalizeCss(a);b.css(c)})}}(jQuery);

(function(jQuery){

	jQuery.mbBgndGallery ={
		name:"mb.bgndGallery",
		author:"Matteo Bicocchi",
		version:"1.9.1",

		clear:false,

		defaults:{
			containment:"body",
			images:[],
			shuffle:false,
			controls:null,
			effect:"fade",
			filter: null,
			timer:4000,
			effTimer:5000,
			raster:false,
			folderPath:false,
			autoStart:true,
			grayScale:false,
			activateKeyboard:true,
			preserveTop:false,
			preserveWidth:false,
			placeHolder:"",

			//Path to the folder containing the thumbnails and ID of the DOM element that should contains them.
			// Thumbnail should have the same name of the corresponding image
			thumbs:{folderPath:"", placeholder:""},
			nav:{placeholder:""},

			onStart:function(){},
			onChange:function(opt,idx){},
			onPause:function(opt){},
			onPlay:function(opt){},
			onNext:function(opt){},
			onPrev:function(opt){}

			// idx = the zero based index of the displayed photo
			// opt=the options relatives to this component instance you can manipulate on the specific event

			// for example, if you want to reverse the enter/exit effect once the previous button is clicked:
			// you can change the opt.effect onPrev event : opt.effect = "slideRight"
			// onNext:function(opt){opt.effect = "slideLeft"}
			// onPrev:function(opt){opt.effect = "slideRight"}

		},


		buildGallery:function(options){
			var opt = {};
			jQuery.extend(opt, jQuery.mbBgndGallery.defaults,options);
			var el = jQuery(opt.containment).get(0);
			el.opt = opt;
			el.opt.galleryID= new Date().getTime();
			jQuery.mbBgndGallery.el = el;
			if(el.opt.onStart)
				el.opt.onStart();

			el.opt.gallery = jQuery("<div/>").attr({id:"bgndGallery_"+el.opt.galleryID}).addClass("mbBgndGallery");
			var pos= el.opt.containment=="body"?"fixed":"absolute";
			var css = {
				position                 : pos,
				top                      : 0, let: 0,
				width                    : "100%",
				height                   : "100%",
				overflow                 : "hidden",
				"-webkit-transform-style": "flat",
				"-webkit-transform"      : "translateZ(0)",
				"z-index"                : 0
			};
			el.opt.gallery.css(css);

			var containment = el.opt.containment;

			if(containment !="body" && jQuery(containment).text().trim()!=""){
				var wrapper=jQuery("<div/>").css({"position":"absolute",minHeight:"100%", minWidth:"100%", zIndex:3});
				jQuery(containment).wrapInner(wrapper);
				if(jQuery(containment).css("position")=="static")
					jQuery(containment).css("position","relative");
			}

			var raster= jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:1}).addClass(opt.raster ? "bgg_raster" :"");
			el.opt.gallery.append(raster);

			jQuery(containment).prepend(opt.gallery);

			if(el.opt.folderPath && el.opt.images.length==0)
				el.opt.images = jQuery.loadFromSystem(el.opt.folderPath) ;


			if(el.opt.shuffle)
				el.opt.images= jQuery.shuffle(el.opt.images);

			var totImg= el.opt.images.length;

			var loadCounter=0;

			jQuery.mbBgndGallery.preload(el.opt.images[0],el);
			el.opt.gallery.on("imageLoaded."+el.opt.galleryID,function(){
				loadCounter++;
				if(loadCounter==totImg){
					el.opt.gallery.off("imageLoaded."+el.opt.galleryID);
					return;
				}
				jQuery.mbBgndGallery.preload(el.opt.images[loadCounter],el);
			});

			el.opt.imageCounter=0;

			jQuery.mbBgndGallery.changePhoto(el.opt.images[el.opt.imageCounter],el);

			if (!el.opt.autoStart){
				el.opt.paused=true;
				jQuery(el.opt.gallery).trigger("paused");
			}

			el.opt.gallery.on("imageReady."+el.opt.galleryID,function(){

				if(el.opt.paused)
					return;

				clearTimeout(el.opt.changing);

				jQuery.mbBgndGallery.play(el);
			});

			jQuery(window).on("resize",function(){
				var image=jQuery("img",el.opt.gallery);
				jQuery.mbBgndGallery.checkSize(image,el);
			});

			var controls = el.opt.controls;
			if(controls){
				$(controls).addClass("controls");

				var counter=jQuery(el.opt.controls).find(".counter");
				counter.html(el.opt.imageCounter+1+" / "+el.opt.images.length);

				jQuery.mbBgndGallery.buildControls(controls,el);
				jQuery(el.opt.containment).on("paused",function(){
					jQuery(el.opt.controls).find(".play").show();
					jQuery(el.opt.controls).find(".pause").hide();
				});
				jQuery(el.opt.containment).on("play",function(){
					jQuery(el.opt.controls).find(".play").hide();
					jQuery(el.opt.controls).find(".pause").show();
				});
			}

			if(el.opt.activateKeyboard)
				jQuery.mbBgndGallery.keyboard(el);

			//	if(el.opt.thumbs.folderPath.trim().length > 0 && el.opt.thumbs.placeholder.trim().length > 0)
			jQuery.mbBgndGallery.buildThumbs(el);
			jQuery.mbBgndGallery.buildNav(el);

			return jQuery(el);

		},

		preload:function(url,el){
			if(jQuery.mbBgndGallery.clear){
				el.opt.gallery.remove();
				return;
			}

			var img= jQuery("<img/>").load(function(){
				el.opt.gallery.trigger("imageLoaded."+el.opt.galleryID);
			}).attr("src",url);

		},

		checkSize:function(image,el){
			if(!image)
				return;

			if(jQuery.mbBgndGallery.changing)
				return;

			if(jQuery.mbBgndGallery.clear){
				el.opt.gallery.remove();
				return;
			}

			return image.each(function(){
				var image=jQuery(this);
				var w= image.attr("w");
				var h= image.attr("h");

				var containment = el.opt.containment == "body"? window : el.opt.containment;
				var aspectRatio= w/h;
				var wAspectRatio=jQuery(containment).width()/jQuery(containment).height();
				if(aspectRatio>=wAspectRatio){
					image.css("height","100%");
					image.css("width","auto");
				} else{
					image.css("width","100%");
					image.css("height","auto");
				}
				image.css("margin-left",((jQuery(containment).width()-image.width())/2));

				if(!el.opt.preserveTop)
					image.css("margin-top",((jQuery(containment).height()-image.height())/2));

				if(el.opt.preserveWidth){
					image.css({width:"100%", height:"auto", left:0, marginLeft:0});
				}
			});
		},

		changePhoto:function(url,el){

			if ( !document.hasFocus() ){
				jQuery(window).one("focus",function(){
					jQuery.mbBgndGallery.changePhoto(url,el);
				});
				return;
			}

			if(jQuery.mbBgndGallery.clear){
				el.opt.gallery.remove();
				return;
			}

			jQuery.mbBgndGallery.buildThumbs(el);
			if(el.opt.thumbs.folderPath.trim().length > 0 && el.opt.thumbs.placeholder.trim().length > 0){
				jQuery(".sel", jQuery(el.opt.thumbs.placeholder)).removeClass("sel");
				jQuery("#mbBgImg_"+el.opt.imageCounter).addClass("sel");
			}

			jQuery.mbBgndGallery.buildNav(el);
			if(el.opt.nav.placeholder.trim().length > 0){
				jQuery(".sel", jQuery(el.opt.nav.placeholder)).removeClass("sel");
				jQuery("#mbBgImg_"+el.opt.imageCounter).addClass("sel");
			}

			jQuery.mbBgndGallery.changing=true;

			if(el.opt.onChange)
				el.opt.onChange(el.opt, el.opt.imageCounter);

			var image=jQuery("<img/>").hide().load(function(){

				var that=jQuery(this);

				var tmp=jQuery("<div/>").css({position:"absolute",top:-5000});
				tmp.append(that);
				jQuery("body").append(tmp);
				that.attr("w", that.width());
				that.attr("h", that.height());
				tmp.remove();

				el.opt.effect = typeof el.opt.effect == "object" ? el.opt.effect : jQuery.mbBgndGallery.effects[el.opt.effect];

				jQuery("img", el.opt.gallery).CSSAnimate(el.opt.effect.exit ,el.opt.effTimer,0,el.opt.effect.exitTiming,function(){

					if(jQuery(this).length)
						jQuery(this).remove();

				});
				that.css({position:"absolute"});

				el.opt.gallery.css({

					"-webkit-backface-visibility":"none",
					"-webkit-transform-style": "preserve-3d",
					"-webkit-perspective": 1000

				});

				el.opt.gallery.append(that);

				jQuery.mbBgndGallery.changing=false;
				jQuery.mbBgndGallery.checkSize(that, el);

				var displayProperties = {};
				for(var x in el.opt.effect.enter){
					displayProperties[x] = 0;
				}

				if(el.opt.filter && ! jQuery.browser.mozilla)
					jQuery.extend(displayProperties, el.opt.filter);

				displayProperties.opacity = 1;
				displayProperties.scale = 1;

				console.debug(el.opt.effect.enter, $.CSS.normalizeCss(el.opt.effect.enter))

				console.debug(displayProperties, $.CSS.normalizeCss(displayProperties))

				that.css3(el.opt.effect.enter).show().CSSAnimate(displayProperties, el.opt.effTimer, 0, el.opt.effect.enterTiming, function(){
					el.opt.gallery.trigger("imageReady."+el.opt.galleryID);
				});

			}).attr("src",url);

			image.error(function(){
				var image=jQuery(this);
				image.attr("src", el.opt.placeHolder);
			});

			var counter=jQuery(el.opt.controls).find(".counter");
			counter.html(el.opt.imageCounter+1+" / "+el.opt.images.length);

		},

		play:function(el){

			if(!el)
				el = this.get(0);

			clearTimeout(el.opt.changing);

			var imgToRemove = jQuery("img", el.opt.gallery).not(":last");
			imgToRemove.remove();

			if(jQuery.mbBgndGallery.clear){
				el.opt.gallery.remove();
				return;
			}

			if(el.opt.onPlay)
				el.opt.onPlay(el.opt);

			el.opt.changing=setTimeout(function(){
				if(el.opt.paused)
					return;

				if(el.opt.onNext)
					el.opt.onNext(el.opt);

				if (el.opt.imageCounter>=el.opt.images.length-1)
					el.opt.imageCounter=-1;

				el.opt.imageCounter++;

				jQuery.mbBgndGallery.changePhoto(el.opt.images[el.opt.imageCounter],jQuery(el.opt.containment).get(0));

			},el.opt.paused?0:el.opt.timer);

			el.opt.gallery.trigger("play");

		},

		pause:function(el){

			if(!el)
				el = this.get(0);

			if(jQuery.mbBgndGallery.clear){
				el.opt.gallery.remove();
				return;
			}

			clearTimeout(el.opt.changing);
			el.opt.paused=true;
			el.opt.gallery.trigger("paused");

			if(el.opt.onPause)
				el.opt.onPause(el.opt);

		},

		next:function(el){

			if(!el)
				el = this.get(0);

			if(jQuery.mbBgndGallery.clear){
				el.opt.gallery.remove();
				return;
			}

			if(el.opt.onNext)
				el.opt.onNext(el.opt);

			jQuery.mbBgndGallery.pause(el);
			if (el.opt.imageCounter==el.opt.images.length-1)
				el.opt.imageCounter=-1;

			el.opt.imageCounter++;

			jQuery.mbBgndGallery.changePhoto(el.opt.images[el.opt.imageCounter],el);
			clearTimeout(el.opt.changing);

		},

		prev:function(el){

			if(!el)
				el = this.get(0);

			if(jQuery.mbBgndGallery.clear){
				el.opt.gallery.remove();
				return;
			}

			if(el.opt.onPrev)
				el.opt.onPrev(el.opt);

			jQuery.mbBgndGallery.pause(el);

			clearTimeout(el.opt.changing);
			if (el.opt.imageCounter==0)
				el.opt.imageCounter=el.opt.images.length;

			el.opt.imageCounter--;

			jQuery.mbBgndGallery.changePhoto(el.opt.images[el.opt.imageCounter],el);

		},

		loader:{
			show:function(){},
			hide:function(){}
		},

		keyboard:function(el){

			jQuery(document).on("keydown.bgndGallery",function(e){

				if(jQuery(e.target).is("textarea") || jQuery(e.target).is("input") || jQuery(e.target).is("[contenteditable]"))
					return;

				switch(e.keyCode){
					case 32:

						if(el.opt.paused){

							jQuery.mbBgndGallery.play(el);
							el.opt.paused=false;

						} else {

							el.opt.paused=true;
							jQuery.mbBgndGallery.pause(el);

						}

						e.preventDefault();
						break;

					case 39:

						jQuery.mbBgndGallery.next(el);
						e.preventDefault();
						break;

					case 37:

						jQuery.mbBgndGallery.prev(el);
						e.preventDefault();
						break;

				}
			})
		},

		buildControls:function(controls,el){

			var pause = jQuery(controls).find(".pause");
			var play = jQuery(controls).find(".play");
			var next = jQuery(controls).find(".next");
			var prev = jQuery(controls).find(".prev");
			var fullScreen = jQuery(controls).find(".fullscreen");

			if((jQuery.browser.msie || jQuery.browser.opera || 'ontouchstart' in window))
				fullScreen.remove();

			if(el.opt.autoStart)
				play.hide();

			pause.on("click",function(){
				jQuery.mbBgndGallery.pause(el);
				jQuery(this).hide();
				play.show();
			});

			play.on("click",function(){

				if(!el.opt.paused) return;
				clearTimeout(el.opt.changing);
				jQuery.mbBgndGallery.play(el);
				el.opt.paused=false;

			});

			next.on("click",function(){

				jQuery.mbBgndGallery.next(el);
				pause.hide();
				play.show();

			});

			prev.on("click",function(){

				jQuery.mbBgndGallery.prev(el);
				pause.hide();
				play.show();

			});

			fullScreen.on("click",function(){

				jQuery.mbBgndGallery.runFullscreen(el);

			});

			if(el.opt.activateKeyboard)
				jQuery.mbBgndGallery.keyboard(el);

		},

		changeGallery:function(array){

			var el = this.get(0);

			clearTimeout(el.opt.changing);
			el.opt.gallery.off("imageLoaded."+el.opt.galleryID);

			jQuery.mbBgndGallery.pause(el);
			el.opt.gallery.fadeOut();

			el.opt.images = array ;
			el.opt.imageCounter=-1;

			var images= el.opt.images;
			var totImg= images.length;
			var loadCounter=0;

			jQuery.mbBgndGallery.preload(images[loadCounter],el);
			el.opt.gallery.on("imageLoaded."+el.opt.galleryID,function(){

				if(loadCounter==totImg){
					el.opt.gallery.off("imageLoaded."+el.opt.galleryID);
					el.opt.gallery.fadeIn();
					jQuery.mbBgndGallery.play(el);
					el.opt.paused=false;
					return;
				}

				jQuery.mbBgndGallery.preload(images[loadCounter],el);
				loadCounter++;

			});

			if(el.opt.thumbs.folderPath.trim().length > 0 && el.opt.thumbs.placeholder.trim().length > 0)
				jQuery.mbBgndGallery.buildThumbs(el);
			if(el.opt.nav.placeholder.trim().length > 0)
				jQuery.mbBgndGallery.buildNav(el);

		},

		changeEffect:function(effect){

			jQuery.mbBgndGallery.el.opt.effect = effect;

		},

		runFullscreen: function(el){

			if(!el)
				el = this.get(0);

			var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
			jQuery(document).off(fullscreenchange);
			jQuery(document).on(fullscreenchange, function() {
				var isFullScreen = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");

				if (!isFullScreen) {

					el.isFullscreen = false;

					jQuery(".fullScreen_controls").remove();

					if(!jQuery(el.opt.containment).is("body"))
						jQuery(el.opt.containment).css({
							width: el.width,
							height: el.height,
							top: el.top,
							left: el.left,
							position: el.position
						});

					el.opt.gallery.css({background:"transparent"});
					var image=jQuery("#bgndGallery_"+el.opt.galleryID+" img:first");

				}

				jQuery.mbBgndGallery.checkSize(image,el);

			});

			if(el.isFullscreen){

				cancelFullscreen();

			}else{

				el.isFullscreen = true;

				if(!jQuery(el.opt.containment).is("body")){

					el.width = jQuery(el.opt.containment).css("width");
					el.height = jQuery(el.opt.containment).css("height");
					el.top = jQuery(el.opt.containment).css("top");
					el.left = jQuery(el.opt.containment).css("left");
					el.position = jQuery(el.opt.containment).css("position");

				}

				var controls = jQuery(el.opt.controls).clone(true).addClass("fullScreen_controls").css({position:"absolute", zIndex:1000, bottom: 20, right:20});
				controls.find(".fullscreen").html("exit");
				el.opt.gallery.append(controls).css({background:"#000"});

				jQuery(el.opt.containment).CSSAnimate({

					width:"100%",
					height: "100%",
					top:0,
					left:0,
					position:"absolute"

				},500);

				launchFullscreen(el.opt.gallery.get(0));

			}

			function RunPrefixMethod(obj, method) {

				var pfx = ["webkit", "moz", "ms", "o", ""];
				var p = 0, m, t;
				while (p < pfx.length && !obj[m]) {
					m = method;
					if (pfx[p] == "") {
						m = m.substr(0,1).toLowerCase() + m.substr(1);
					}
					m = pfx[p] + m;
					t = typeof obj[m];
					if (t != "undefined") {
						pfx = [pfx[p]];
						return (t == "function" ? obj[m]() : obj[m]);
					}
					p++;
				}

			}

			function launchFullscreen(element) {
				RunPrefixMethod(element, "RequestFullScreen");
			}

			function cancelFullscreen() {
				if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
					RunPrefixMethod(document, "CancelFullScreen");
				}
			}
		},

		buildThumbs: function(el) {

			if(el.opt.thumbs.folderPath.trim().length == 0 && el.opt.thumbs.placeholder.trim().length == 0)
				return;

			jQuery(el.opt.thumbs.placeholder).addClass("bgg_thumbnailsContainer");

			function getImageName(path){
				return path.split("/").pop();
			}

			var thumbNumber = jQuery(el.opt.thumbs.placeholder).children().length || 0;

			if(thumbNumber != el.opt.images.length){

				jQuery(el.opt.thumbs.placeholder).empty();
				for (var i = 0; i < el.opt.images.length; i++){

					var imgSrc = el.opt.thumbs.folderPath + getImageName(el.opt.images[i]);

					var img=jQuery("<img/>").attr({"src":imgSrc, id: "mbBgImg_"+i}).click(function(){
						var $this = $(this);
						if(!$this.is('.sel')) {
							el.opt.imageCounter = $this.attr("i")-1;
							jQuery.mbBgndGallery.next(el);
							el.opt.paused=true;
						}
					}).attr("i",i).css({opacity:0}).on("load",function(){
						$(this).fadeTo(1000,1);
					});

					jQuery(el.opt.thumbs.placeholder).append(img);
				}

				if(el.opt.thumbs.folderPath.trim().length > 0 && el.opt.thumbs.placeholder.trim().length > 0){
					jQuery(".sel", jQuery(el.opt.thumbs.placeholder)).removeClass("sel");
					jQuery("#mbBgImg_"+el.opt.imageCounter).addClass("sel");
				}
			}

		},

		buildNav: function(el){

			if(el.opt.nav.placeholder.trim().length == 0)
			return;

			jQuery(el.opt.nav.placeholder).addClass("navContainer");

			var navNumber = jQuery(el.opt.nav.placeholder).children().length || 0;

			if(navNumber != el.opt.images.length){

				jQuery(el.opt.nav.placeholder).empty();
				for (var i = 0; i < el.opt.images.length; i++){

					var item=jQuery("<div/>").attr({id: "mbBgImg_"+i}).click(function(){
						var $this = $(this);
						if(!$this.is('.sel')) {
							el.opt.imageCounter = $this.attr("i")-1;
							jQuery.mbBgndGallery.next(el);
							el.opt.paused=true;
						}
					}).attr("i",i);

					jQuery(el.opt.nav.placeholder).append(item);
				}

				if(el.opt.nav.placeholder.trim().length > 0){
					jQuery(".sel", jQuery(el.opt.nav.placeholder)).removeClass("sel");
					jQuery("#mbBgImg_"+el.opt.imageCounter).addClass("sel");
				}
			}
		},

		addImages: function(images, goto, shuffle){

			var el = this.get(0);
			for (var i in images){
				el.opt.images.push(images[i]);
			}
			if(shuffle)
				el.opt.images = jQuery.shuffle(el.opt.images);

			if(goto)
				el.opt.imageCounter = el.opt.images.indexOf(images[0]);

			jQuery.mbBgndGallery.changePhoto(el.opt.images[el.opt.imageCounter],el);
			jQuery.mbBgndGallery.buildThumbs(el);
			jQuery.mbBgndGallery.buildNav(el);

		},

		removeImages: function(images){

			var el = this.get(0);
			for (var i in images){
				var index = el.opt.images.indexOf(images[i]);
				if (index > -1)
					el.opt.images.splice(index, 1);
			}
			jQuery.mbBgndGallery.changePhoto(el.opt.images[el.opt.imageCounter],el);
			jQuery.mbBgndGallery.buildThumbs(el);
			jQuery.mbBgndGallery.buildNav(el);
		},

		applyFilter: function(filter, val){

			var el = this.get(0);
			var gallery = el.opt.gallery;
			var f = {};
			f[filter] = val;

			gallery.css3(f);

		}
	};

	jQuery.fn.mbBgndGalleryPlay = jQuery.mbBgndGallery.play;
	jQuery.fn.mbBgndGalleryPause = jQuery.mbBgndGallery.pause;
	jQuery.fn.mbBgndGalleryPrev = jQuery.mbBgndGallery.prev;
	jQuery.fn.mbBgndGalleryNext = jQuery.mbBgndGallery.next;
	jQuery.fn.changeGallery = jQuery.mbBgndGallery.changeGallery;
	jQuery.fn.addImages = jQuery.mbBgndGallery.addImages;
	jQuery.fn.removeImages = jQuery.mbBgndGallery.removeImages;
	jQuery.fn.applyFilter = jQuery.mbBgndGallery.applyFilter;

	jQuery.loadFromSystem=function(folderPath, type){

		// if directory listing is enabled on the remote server.
		// if you run the page locally you need to run it under a local web server (Ex: http://localhost/yourPage)
		// otherwise the directory listing is unavailable.

		if(!folderPath)
			return;
		if(!type)
			type= ["jpg","jpeg","png"];
		var arr=[];
		jQuery.ajax({
			url:folderPath,
			async:false,
			success:function(response){
				var tmp=jQuery(response);
				var els= tmp.find("[href]");

				els.each(function(){
					for (var i in type){
						if (jQuery(this).attr("href").indexOf(type[i])>=0)
							arr.push(folderPath+jQuery(this).attr("href"));
						arr = jQuery.unique(arr);
					}
				});
				tmp.remove();
			}
		});
		return arr.length != 0 ? arr : false;
	};

	jQuery.fn.greyScale = function(el) {
		return this.each(function() {
			if (jQuery.browser.msie && jQuery.browser.version<9) {
				this.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayScale=1)";
			} else if(jQuery.browser.webkit){
				el.opt.gallery.css("-webkit-filter", "grayscale(1) sepia(.4)");
			} else {
				this.src = grayScaleImage(this);
			}
		})
	};

	jQuery.shuffle = function(arr) {
		var newArray = arr.slice();
		var len = newArray.length;
		var i = len;
		while (i--) {
			var p = parseInt(Math.random()*len);
			var t = newArray[i];
			newArray[i] = newArray[p];
			newArray[p] = t;
		}
		return newArray;
	};

	function grayScaleImage(imgObj){
		var canvas = document.createElement('canvas');
		var canvasContext = canvas.getContext('2d');

		var imgW = imgObj.width;
		var imgH = imgObj.height;
		canvas.width = imgW;
		canvas.height = imgH;

		canvasContext.drawImage(imgObj, 0, 0);
		var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);

		for(var y = 0; y < imgPixels.height; y++){
			for(var x = 0; x < imgPixels.width; x++){
				var i = (y * 4) * imgPixels.width + x * 4;
				var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
				imgPixels.data[i] = avg;
				imgPixels.data[i + 1] = avg;
				imgPixels.data[i + 2] = avg;
			}
		}

		canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
		return canvas.toDataURL();
	}

})(jQuery);

function mbBgndGallery(opt){
	return jQuery.mbBgndGallery.buildGallery(opt);
}
