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
 *  last modified: 09/02/14 18.46
 *  *****************************************************************************
 */

/*Browser detection patch*/
if (!jQuery.browser) {
	jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1;
	var nAgt = navigator.userAgent;
	jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
	var nameOffset, verOffset, ix;
	if (-1 != (verOffset = nAgt.indexOf("Opera")))jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("MSIE")))jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
		jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
		var start = nAgt.indexOf("rv:") + 3, end = start + 4;
		jQuery.browser.fullVersion = nAgt.substring(start, end)
	} else-1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
	-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
}

/*
 *   jquery.mb.components
 *  file: jquery.mb.CSSAnimate.js
 */

/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.CSSAnimate.js
 *
 *  Copyright (c) 2001-2013. Matteo Bicocchi (Pupunzi);
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
 *  last modified: 09/06/13 17.08
 *  *****************************************************************************
 */

/*
 * version: 1.6.1
 *  params:

 @opt        -> the CSS object (ex: {top:300, left:400, ...})
 @duration   -> an int for the animation duration in milliseconds
 @delay      -> an int for the animation delay in milliseconds
 @ease       -> ease  ||  linear || ease-in || ease-out || ease-in-out  ||  cubic-bezier(<number>, <number>,  <number>,  <number>)
 @callback   -> a callback function called once the transition end

 example:

 jQuery(this).CSSAnimate({top:t, left:l, width:w, height:h, transform: 'rotate(50deg) scale(.8)'}, 2000, 100, "ease-out", callback;})
 */
jQuery.fn.CSSAnimate=function(a,f,k,m,e){return this.each(function(){var b=jQuery(this);this.id=this.id||"CSSA_"+(new Date).getTime();if(0!==b.length&&a){"function"==typeof f&&(e=f,f=jQuery.fx.speeds._default);"function"==typeof k&&(e=k,k=0);"function"==typeof m&&(e=m,m="cubic-bezier(0.65,0.03,0.36,0.72)");if("string"==typeof f)for(var l in jQuery.fx.speeds)if(f==l){f=jQuery.fx.speeds[l];break}else f=null;if(jQuery.support.transition){var d="",j="transitionEnd";jQuery.browser.webkit?(d="-webkit-", j="webkitTransitionEnd"):jQuery.browser.mozilla?(d="-moz-",j="transitionend"):jQuery.browser.opera?(d="-o-",j="otransitionend"):jQuery.browser.msie&&(d="-ms-",j="msTransitionEnd");l=[];for(c in a){var g=c;"transform"===g&&(g=d+"transform",a[g]=a[c],delete a[c]);"filter"===g&&(g=d+"filter",a[g]=a[c],delete a[c]);"transform-origin"===g&&(g=d+"transform-origin",a[g]=a[c],delete a[c]);l.push(g)}var c=l.join(","),n=function(){b.off(j+"."+b.get(0).id);clearTimeout(b.get(0).timeout);b.css(d+"transition", "");"function"==typeof e&&(b.called=!0,e(b))},h={};jQuery.extend(h,a);h[d+"transition-property"]=c;h[d+"transition-duration"]=f+"ms";h[d+"transition-delay"]=k+"ms";h[d+"transition-timing-function"]=m;h[d+"backface-visibility"]="hidden";setTimeout(function(){b.css(h);b.one(j+"."+b.get(0).id,n)},1);b.get(0).timeout=setTimeout(function(){b.called||!e?b.called=!1:(b.css(d+"transition",""),e(b))},f+k+100)}else{for(var c in a)"transform"===c&&delete a[c],"transform-origin"===c&&delete a[c],"auto"===a[c]&&delete a[c]; if(!e||"string"===typeof e)e="linear";b.animate(a,f,e)}}})};jQuery.support.transition=function(){var a=(document.body||document.documentElement).style;return void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition}();



(function(jQuery){

	jQuery.mbBgndGallery ={
		name:"mb.bgndGallery",
		author:"Matteo Bicocchi",
		version:"1.8.7",
		defaults:{
			containment:"body",
			images:[],
			shuffle:false,
			controls:null,
			effect:"fade",
			timer:4000,
			effTimer:3000,
			raster:false, //"inc/raster.png"
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
		clear:false,

		buildGallery:function(options){
			var opt = {};
			jQuery.extend(opt, jQuery.mbBgndGallery.defaults,options);
			opt.galleryID= new Date().getTime();
			var el= jQuery(opt.containment).get(0);
			el.opt= opt;
			jQuery.mbBgndGallery.el = el;
			if(el.opt.onStart)
				el.opt.onStart();

			el.opt.gallery= jQuery("<div/>").attr({id:"bgndGallery_"+el.opt.galleryID}).addClass("mbBgndGallery");
			var pos= el.opt.containment=="body"?"fixed":"absolute";
			el.opt.gallery.css({
				position: pos,
				top: 0, let: 0,
				width: "100%",
				height: "100%",
				overflow: "hidden",
				backfaceVisibility:"hidden",
				webkitBackfaceVisibility:"hidden",
				mozBackfaceVisibility:"hidden",
				msBackfaceVisibility:"hidden"
			});

			var containment = el.opt.containment;

			if(containment !="body" && jQuery(containment).text().trim()!=""){
				var wrapper=jQuery("<div/>").css({"position":"absolute",minHeight:"100%", minWidth:"100%", zIndex:3});
				jQuery(containment).wrapInner(wrapper);
				if(jQuery(containment).css("position")=="static")
					jQuery(containment).css("position","relative");
			}
			if(opt.raster){
				var raster=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"url("+opt.raster+")",zIndex:1});
				opt.gallery.append(raster);
			}

			jQuery(containment).prepend(opt.gallery);

			if(el.opt.folderPath && el.opt.images.length==0)
				el.opt.images = jQuery.loadFromSystem(el.opt.folderPath);


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

			if (!opt.autoStart){
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

			//	if(el.opt.thumbs.folderPath.trim().length > 0 && el.opt.thumbs.placeholder.trim().length > 0)
			jQuery.mbBgndGallery.buildThumbs(el);

			return jQuery(el);

		},

		normalizeCss:function(opt){
			var newOpt = jQuery.extend(true, {}, opt);
			var sfx = "";
			var transitionEnd = "transitionEnd";
			if (jQuery.browser.webkit) {
				sfx = "-webkit-";
				transitionEnd = "webkitTransitionEnd";
			} else if (jQuery.browser.mozilla) {
				sfx = "-moz-";
				transitionEnd = "transitionend";
			} else if (jQuery.browser.opera) {
				sfx = "-o-";
				transitionEnd = "oTransitionEnd";
			} else if (jQuery.browser.msie) {
				sfx = "-ms-";
				transitionEnd = "msTransitionEnd";
			}

			for(var o in newOpt){
				if (o==="transform"){
					newOpt[sfx+"transform"]=newOpt[o];
					delete newOpt[o];
				}

				if (o==="transform-origin"){
					newOpt[sfx+"transform-origin"]=opt[o];
					delete newOpt[o];
				}

				if (o==="filter"){
					newOpt[sfx+"filter"]=opt[o];
					delete newOpt[o];
				}
			}
			return newOpt;
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

			if(jQuery.mbBgndGallery.clear){
				el.opt.gallery.remove();
				return;
			}

			jQuery.mbBgndGallery.buildThumbs(el);

			if(el.opt.thumbs.folderPath.trim().length > 0 && el.opt.thumbs.placeholder.trim().length > 0){
				jQuery(".sel", jQuery(el.opt.thumbs.placeholder)).removeClass("sel");
				jQuery("#mbBgImg_"+el.opt.imageCounter).addClass("sel");
			}

			jQuery.mbBgndGallery.changing=true;

			if(el.opt.onChange)
				el.opt.onChange(el.opt, el.opt.imageCounter);

			var image=jQuery("<img/>").hide().load(function(){
				var image=jQuery(this);

				var tmp=jQuery("<div/>").css({position:"absolute",top:-5000});
				tmp.append(image);
				jQuery("body").append(tmp);
				image.attr("w", image.width());
				image.attr("h", image.height());
				tmp.remove();

				el.opt.effect = typeof el.opt.effect == "object" ? el.opt.effect : jQuery.mbBgndGallery.effects[el.opt.effect];

				jQuery("img", el.opt.gallery).CSSAnimate(el.opt.effect.exit,el.opt.effTimer,0,el.opt.effect.exitTiming,function(el){
					if(el.length)
						el.remove();
				});
				image.css({position:"absolute"});
				el.opt.gallery.append(image);

				//todo: add a property to let height for vertical images
				jQuery.mbBgndGallery.changing=false;
				jQuery.mbBgndGallery.checkSize(image, el);

				var displayProperties = {top: 0, left: 0, opacity: 1, transform: "scale(1) rotate(0deg)", filter: " blur(0)"};
				displayProperties = jQuery.mbBgndGallery.normalizeCss(displayProperties);

				image.css(jQuery.mbBgndGallery.normalizeCss(el.opt.effect.enter)).show().CSSAnimate(displayProperties,el.opt.effTimer,0,el.opt.effect.enterTiming,function(){
					el.opt.gallery.trigger("imageReady."+el.opt.galleryID);
				});
			}).attr("src",url);

			image.error(function(){
				var image=jQuery(this);
				image.attr("src", el.opt.placeHolder);
			})

			if(el.opt.grayScale){
				image.greyScale(el);

			}

			var counter=jQuery(el.opt.controls).find(".counter");
			counter.html(el.opt.imageCounter+1+" / "+el.opt.images.length);

		},

		play:function(el){

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
				switch(e.keyCode){
					case 32:
						if(el.opt.paused){
							jQuery.mbBgndGallery.play(el);
							el.opt.paused=false;
						}else{
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
			var pause=jQuery(controls).find(".pause");
			var play=jQuery(controls).find(".play");
			var next=jQuery(controls).find(".next");
			var prev=jQuery(controls).find(".prev");
			var fullScreen =  jQuery(controls).find(".fullscreen");

			if((jQuery.browser.msie || jQuery.browser.opera || 'ontouchstart' in window)){
				fullScreen.remove();
			}

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

			//if(el.opt.thumbs.folderPath.trim().length > 0 && el.opt.thumbs.placeholder.trim().length > 0)
			jQuery.mbBgndGallery.buildThumbs(el);

		},

		changeEffect:function(effect){
			jQuery.mbBgndGallery.el.opt.effect = effect;
		},

		runFullscreen: function(el){
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
					el.opt.gallery.css({background:"transparent"})
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
				});

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

		buildThumbs: function(el){

			if(el.opt.thumbs.folderPath.trim().length == 0 && el.opt.thumbs.placeholder.trim().length == 0)
				return;

			function getImageName(path){
				return path.split("/").pop();
			}

			var thumbNumber = jQuery(el.opt.thumbs.placeholder).children().length || 0;


			if(thumbNumber != el.opt.images.length){

				jQuery(el.opt.thumbs.placeholder).empty()
				for (var i = 0; i < el.opt.images.length; i++){

					var imgSrc = el.opt.thumbs.folderPath + getImageName(el.opt.images[i]);

					var img=jQuery("<img/>").attr({"src":imgSrc, id: "mbBgImg_"+i}).click(function(){
						el.opt.imageCounter = jQuery(this).attr("i")-1;
						jQuery.mbBgndGallery.next(el);
						el.opt.paused=true;
					}).attr("i",i);

					jQuery(el.opt.thumbs.placeholder).append(img);
				}

				if(el.opt.thumbs.folderPath.trim().length > 0 && el.opt.thumbs.placeholder.trim().length > 0){
					jQuery(".sel", jQuery(el.opt.thumbs.placeholder)).removeClass("sel");
					jQuery("#mbBgImg_"+el.opt.imageCounter).addClass("sel");
				}
			}
		},

		addImages: function(images){

			var el = this.get(0);
			for (var i in arguments){
				el.opt.images.push(arguments[i]);
			}
			jQuery.mbBgndGallery.buildThumbs(el);
		}
	};

	jQuery.fn.addImages = jQuery.mbBgndGallery.addImages;
	jQuery.fn.changeGallery = jQuery.mbBgndGallery.changeGallery;

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
		return arr;
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
