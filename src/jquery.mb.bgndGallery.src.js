/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.bgndGallery.src.js                                                                                                               _
 _ last modified: 21/06/15 15.53                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

( function( jQuery ) {

	jQuery.mbBgndGallery = {
		name: "mb.bgndGallery",
		author: "Matteo Bicocchi",
		version: "{{ version }}",
		build: "{{ buildnum }}",

		clear: false,
		defaults: {
			containment: "body",
			images: [],
			shuffle: false,
			controls: null,
			effect: "fade",
			filter: null,
			timer: 4000,
			effTimer: 5000,
			raster: false,
			folderPath: false,
			autoStart: true,
			grayScale: false,
			activateKeyboard: true,
			preserveTop: false,
			preserveWidth: false,
			placeHolder: "",

			//Path to the folder containing the thumbnails and ID of the DOM element that should contains them.
			// Thumbnail should have the same name of the corresponding image
			thumbs: {
				folderPath: "",
				placeholder: ""
			},

			onStart: function() {},
			onChange: function( opt, idx ) {},
			onPause: function( opt ) {},
			onPlay: function( opt ) {},
			onNext: function( opt ) {},
			onPrev: function( opt ) {}

			// idx = the zero based index of the displayed photo
			// opt=the options relatives to this component instance you can manipulate on the specific event

			// for example, if you want to reverse the enter/exit effect once the previous button is clicked:
			// you can change the opt.effect onPrev event : opt.effect = "slideRight"
			// onNext:function(opt){opt.effect = "slideLeft"}
			// onPrev:function(opt){opt.effect = "slideRight"}

		},

		buildGallery: function( options ) {
			var opt = {};
			jQuery.extend( opt, jQuery.mbBgndGallery.defaults, options );
			var el = jQuery( opt.containment ).get( 0 );
			el.opt = opt;
			el.opt.galleryID = new Date().getTime();
			jQuery.mbBgndGallery.el = el;
			if( el.opt.onStart )
				el.opt.onStart();

			el.opt.gallery = jQuery( "<div/>" ).attr( {
				id: "bgndGallery_" + el.opt.galleryID
			} ).addClass( "mbBgndGallery" );
			var pos = el.opt.containment == "body" ? "fixed" : "absolute";
			var css = {
				position: pos,
				top: 0,
				let: 0,
				width: "100%",
				height: "100%",
				overflow: "hidden",
				"-webkit-transform-style": "flat",
				"-webkit-transform": "translateZ(0)",
				"z-index": 0
			};
			el.opt.gallery.css( css );

			var containment = el.opt.containment;

			if( containment != "body" && jQuery( containment ).text().trim() != "" ) {
				var wrapper = jQuery( "<div/>" ).css( {
					"position": "absolute",
					minHeight: "100%",
					minWidth: "100%",
					zIndex: 3
				} );
				jQuery( containment ).wrapInner( wrapper );
				if( jQuery( containment ).css( "position" ) == "static" )
					jQuery( containment ).css( "position", "relative" );
			}

			var raster = jQuery( "<div/>" ).css( {
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 1
			} ).addClass( opt.raster ? "bgg_raster" : "" );
			el.opt.gallery.append( raster );

			jQuery( containment ).prepend( opt.gallery );

			if( el.opt.folderPath && el.opt.images.length == 0 )
				el.opt.images = jQuery.loadFromSystem( el.opt.folderPath );

			if( el.opt.shuffle )
				el.opt.images = jQuery.shuffle( el.opt.images );

			var totImg = el.opt.images.length;

			var loadCounter = 0;

			jQuery.mbBgndGallery.preload( el.opt.images[ 0 ], el );
			el.opt.gallery.on( "imageLoaded." + el.opt.galleryID, function() {
				loadCounter++;
				if( loadCounter == totImg ) {
					el.opt.gallery.off( "imageLoaded." + el.opt.galleryID );
					return;
				}
				jQuery.mbBgndGallery.preload( el.opt.images[ loadCounter ], el );
			} );

			el.opt.imageCounter = 0;

			jQuery.mbBgndGallery.changePhoto( el.opt.images[ el.opt.imageCounter ], el );

			if( !el.opt.autoStart ) {
				el.opt.paused = true;
				jQuery( el.opt.gallery ).trigger( "paused" );
			}

			el.opt.gallery.on( "imageReady." + el.opt.galleryID, function() {

				if( el.opt.paused )
					return;

				clearTimeout( el.opt.changing );

				jQuery.mbBgndGallery.play( el );
			} );

			jQuery( window ).on( "resize", function() {
				var image = jQuery( "img", el.opt.gallery );
				jQuery.mbBgndGallery.checkSize( image, el );
			} );

			var controls = el.opt.controls;
			if( controls ) {
				jQuery( controls ).addClass( "controls" );

				var counter = jQuery( el.opt.controls ).find( ".counter" );
				counter.html( el.opt.imageCounter + 1 + " / " + el.opt.images.length );

				jQuery.mbBgndGallery.buildControls( controls, el );
				jQuery( el.opt.containment ).on( "paused", function() {
					jQuery( el.opt.controls ).find( ".play" ).show();
					jQuery( el.opt.controls ).find( ".pause" ).hide();
				} );
				jQuery( el.opt.containment ).on( "play", function() {
					jQuery( el.opt.controls ).find( ".play" ).hide();
					jQuery( el.opt.controls ).find( ".pause" ).show();
				} );
			}

			if( el.opt.activateKeyboard )
				jQuery.mbBgndGallery.keyboard( el );

			//	if(el.opt.thumbs.folderPath.trim().length > 0 && el.opt.thumbs.placeholder.trim().length > 0)
			jQuery.mbBgndGallery.buildThumbs( el );

			return jQuery( el );

		},

		preload: function( url, el ) {
			if( jQuery.mbBgndGallery.clear ) {
				el.opt.gallery.remove();
				return;
			}

			var img = jQuery( "<img/>" ).load( function() {
				el.opt.gallery.trigger( "imageLoaded." + el.opt.galleryID );
			} ).attr( "src", url );

		},

		checkSize: function( image, el ) {
			if( !image )
				return;

			if( jQuery.mbBgndGallery.changing )
				return;

			if( jQuery.mbBgndGallery.clear ) {
				el.opt.gallery.remove();
				return;
			}

			return image.each( function() {
				var image = jQuery( this );
				var w = image.attr( "w" );
				var h = image.attr( "h" );

				var containment = el.opt.containment == "body" ? window : el.opt.containment;
				var aspectRatio = w / h;
				var wAspectRatio = jQuery( containment ).width() / jQuery( containment ).height();
				if( aspectRatio >= wAspectRatio ) {
					image.css( "height", "100%" );
					image.css( "width", "auto" );
				} else {
					image.css( "width", "100%" );
					image.css( "height", "auto" );
				}
				image.css( "margin-left", ( ( jQuery( containment ).width() - image.width() ) / 2 ) );

				if( !el.opt.preserveTop )
					image.css( "margin-top", ( ( jQuery( containment ).height() - image.height() ) / 2 ) );

				if( el.opt.preserveWidth ) {
					image.css( {
						width: "100%",
						height: "auto",
						left: 0,
						marginLeft: 0
					} );
				}
			} );
		},

		changePhoto: function( url, el ) {

			if( !document.hasFocus() ) {
				jQuery( window ).one( "focus", function() {
					jQuery.mbBgndGallery.changePhoto( url, el );
				} );
				return;
			}

			if( jQuery.mbBgndGallery.clear ) {
				el.opt.gallery.remove();
				return;
			}

			jQuery.mbBgndGallery.buildThumbs( el );

			if( el.opt.thumbs.folderPath.trim().length > 0 && el.opt.thumbs.placeholder.trim().length > 0 ) {
				jQuery( ".sel", jQuery( el.opt.thumbs.placeholder ) ).removeClass( "sel" );
				jQuery( "#mbBgImg_" + el.opt.imageCounter ).addClass( "sel" );
			}

			jQuery.mbBgndGallery.changing = true;

			clearTimeout( el.opt.changing );

			if( el.opt.onChange )
				el.opt.onChange( el.opt, el.opt.imageCounter );

			var image = jQuery( "<img/>" ).hide().load( function() {

				var that = jQuery( this );

				var tmp = jQuery( "<div/>" ).css( {
					position: "absolute",
					top: -5000
				} );
				tmp.append( that );
				jQuery( "body" ).append( tmp );
				that.attr( "w", that.width() );
				that.attr( "h", that.height() );
				tmp.remove();

				el.opt.effect = typeof el.opt.effect == "object" ? el.opt.effect : jQuery.mbBgndGallery.effects[ el.opt.effect ];

				jQuery( "img", el.opt.gallery ).CSSAnimate( el.opt.effect.exit, el.opt.effTimer, 0, el.opt.effect.exitTiming, function() {

					if( jQuery( this ).length )
						jQuery( this ).remove();

				} );
				that.css( {
					position: "absolute"
				} );

				el.opt.gallery.css( {

					"-webkit-backface-visibility": "none",
					"-webkit-transform-style": "preserve-3d",
					"-webkit-perspective": 1000

				} );

				el.opt.gallery.append( that );

				jQuery.mbBgndGallery.changing = false;
				jQuery.mbBgndGallery.checkSize( that, el );

				var displayProperties = {};
				for( var x in el.opt.effect.enter ) {
					displayProperties[ x ] = 0;
				}

				if( el.opt.filter && !jQuery.browser.mozilla )
					jQuery.extend( displayProperties, el.opt.filter );

				displayProperties.opacity = 1;
				displayProperties.scale = 1;

				that.css3( el.opt.effect.enter ).show().CSSAnimate( displayProperties, el.opt.effTimer, 0, el.opt.effect.enterTiming, function() {
					el.opt.gallery.trigger( "imageReady." + el.opt.galleryID );
				} );

			} ).attr( "src", url );

			image.error( function() {
				var image = jQuery( this );
				image.attr( "src", el.opt.placeHolder );
			} );

			var counter = jQuery( el.opt.controls ).find( ".counter" );
			counter.html( el.opt.imageCounter + 1 + " / " + el.opt.images.length );

		},

		play: function( el ) {

			if( !el )
				el = this.get( 0 );

			clearTimeout( el.opt.changing );

			var imgToRemove = jQuery( "img", el.opt.gallery ).not( ":last" );
			imgToRemove.remove();

			if( jQuery.mbBgndGallery.clear ) {
				el.opt.gallery.remove();
				return;
			}

			if( el.opt.onPlay )
				el.opt.onPlay( el.opt );

			el.opt.changing = setTimeout( function() {
				if( el.opt.paused )
					return;

				if( el.opt.onNext )
					el.opt.onNext( el.opt );

				if( el.opt.imageCounter >= el.opt.images.length - 1 )
					el.opt.imageCounter = -1;

				el.opt.imageCounter++;

				jQuery.mbBgndGallery.changePhoto( el.opt.images[ el.opt.imageCounter ], jQuery( el.opt.containment ).get( 0 ) );

			}, el.opt.paused ? 0 : el.opt.timer );

			el.opt.gallery.trigger( "play" );

		},

		pause: function( el ) {

			if( !el )
				el = this.get( 0 );

			if( jQuery.mbBgndGallery.clear ) {
				el.opt.gallery.remove();
				return;
			}

			clearTimeout( el.opt.changing );
			el.opt.paused = true;
			el.opt.gallery.trigger( "paused" );

			if( el.opt.onPause )
				el.opt.onPause( el.opt );

		},

		next: function( el ) {

			if( !el )
				el = this.get( 0 );

			if( jQuery.mbBgndGallery.clear ) {
				el.opt.gallery.remove();
				return;
			}

			if( el.opt.onNext )
				el.opt.onNext( el.opt );

			jQuery.mbBgndGallery.pause( el );

			if( el.opt.imageCounter == el.opt.images.length - 1 )
				el.opt.imageCounter = -1;

			el.opt.imageCounter++;

			jQuery.mbBgndGallery.changePhoto( el.opt.images[ el.opt.imageCounter ], el );
			clearTimeout( el.opt.changing );

		},

		prev: function( el ) {

			if( !el )
				el = this.get( 0 );

			if( jQuery.mbBgndGallery.clear ) {
				el.opt.gallery.remove();
				return;
			}

			if( el.opt.onPrev )
				el.opt.onPrev( el.opt );

			jQuery.mbBgndGallery.pause( el );

			clearTimeout( el.opt.changing );
			if( el.opt.imageCounter == 0 )
				el.opt.imageCounter = el.opt.images.length;

			el.opt.imageCounter--;

			jQuery.mbBgndGallery.changePhoto( el.opt.images[ el.opt.imageCounter ], el );

		},

		loader: {
			show: function() {},
			hide: function() {}
		},

		keyboard: function( el ) {

			jQuery( document ).off( "keydown.bgndGallery" ).on( "keydown.bgndGallery", function( e ) {

				if( jQuery( e.target ).is( "textarea" ) || jQuery( e.target ).is( "input" ) || jQuery( e.target ).is( "[contenteditable]" ) )
					return;

				switch( e.keyCode ) {
					case 32:

						if( el.opt.paused ) {

							jQuery.mbBgndGallery.play( el );
							el.opt.paused = false;

						} else {

							el.opt.paused = true;
							jQuery.mbBgndGallery.pause( el );

						}

						e.preventDefault();
						break;

					case 39: // NEXT

						jQuery.mbBgndGallery.next( el );
						e.preventDefault();
						break;

					case 37: //PREV

						jQuery.mbBgndGallery.prev( el );
						e.preventDefault();
						break;

				}
			} )
		},

		buildControls: function( controls, el ) {

			var pause = jQuery( controls ).find( ".pause" );
			var play = jQuery( controls ).find( ".play" );
			var next = jQuery( controls ).find( ".next" );
			var prev = jQuery( controls ).find( ".prev" );
			var fullScreen = jQuery( controls ).find( ".fullscreen" );

			if( ( jQuery.browser.msie || jQuery.browser.opera || 'ontouchstart' in window ) )
				fullScreen.remove();

			if( el.opt.autoStart )
				play.hide();

			pause.on( "click", function() {
				jQuery.mbBgndGallery.pause( el );
				jQuery( this ).hide();
				play.show();
			} );

			play.on( "click", function() {

				if( !el.opt.paused ) return;
				clearTimeout( el.opt.changing );
				jQuery.mbBgndGallery.play( el );
				el.opt.paused = false;

			} );

			next.on( "click", function() {

				jQuery.mbBgndGallery.next( el );
				pause.hide();
				play.show();

			} );

			prev.on( "click", function() {

				jQuery.mbBgndGallery.prev( el );
				pause.hide();
				play.show();

			} );

			fullScreen.on( "click", function() {

				jQuery.mbBgndGallery.runFullscreen( el );

			} );

			if( el.opt.activateKeyboard )
				jQuery.mbBgndGallery.keyboard( el );

		},

		changeGallery: function( array ) {

			var el = this.get( 0 );

			clearTimeout( el.opt.changing );
			el.opt.gallery.off( "imageLoaded." + el.opt.galleryID );

			jQuery.mbBgndGallery.pause( el );
			el.opt.gallery.fadeOut();

			el.opt.images = array;
			el.opt.imageCounter = -1;

			var images = el.opt.images;
			var totImg = images.length;
			var loadCounter = 0;

			jQuery.mbBgndGallery.preload( images[ loadCounter ], el );
			el.opt.gallery.on( "imageLoaded." + el.opt.galleryID, function() {

				if( loadCounter == totImg ) {
					el.opt.gallery.off( "imageLoaded." + el.opt.galleryID );
					el.opt.gallery.fadeIn();
					jQuery.mbBgndGallery.play( el );
					el.opt.paused = false;
					return;
				}

				jQuery.mbBgndGallery.preload( images[ loadCounter ], el );
				loadCounter++;

			} );

			if( el.opt.thumbs.folderPath.trim().length > 0 && el.opt.thumbs.placeholder.trim().length > 0 )
				jQuery.mbBgndGallery.buildThumbs( el );

		},

		changeEffect: function( effect ) {

			jQuery.mbBgndGallery.el.opt.effect = effect;

		},

		runFullscreen: function( el ) {

			if( !el )
				el = this.get( 0 );

			var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
			jQuery( document ).off( fullscreenchange );
			jQuery( document ).on( fullscreenchange, function() {
				var isFullScreen = RunPrefixMethod( document, "IsFullScreen" ) || RunPrefixMethod( document, "FullScreen" );

				if( !isFullScreen ) {

					el.isFullscreen = false;

					jQuery( ".fullScreen_controls" ).remove();

					if( !jQuery( el.opt.containment ).is( "body" ) )
						jQuery( el.opt.containment ).css( {
							width: el.width,
							height: el.height,
							top: el.top,
							left: el.left,
							position: el.position
						} );

					el.opt.gallery.css( {
						background: "transparent"
					} );
					var image = jQuery( "#bgndGallery_" + el.opt.galleryID + " img:first" );

				}

				jQuery.mbBgndGallery.checkSize( image, el );

			} );

			if( el.isFullscreen ) {

				cancelFullscreen();

			} else {

				el.isFullscreen = true;

				if( !jQuery( el.opt.containment ).is( "body" ) ) {

					el.width = jQuery( el.opt.containment ).css( "width" );
					el.height = jQuery( el.opt.containment ).css( "height" );
					el.top = jQuery( el.opt.containment ).css( "top" );
					el.left = jQuery( el.opt.containment ).css( "left" );
					el.position = jQuery( el.opt.containment ).css( "position" );

				}

				var controls = jQuery( el.opt.controls ).clone( true ).addClass( "fullScreen_controls" ).css( {
					position: "absolute",
					zIndex: 1000,
					bottom: 20,
					right: 20
				} );
				controls.find( ".fullscreen" ).html( "exit" );
				el.opt.gallery.append( controls ).css( {
					background: "#000"
				} );

				jQuery( el.opt.containment ).CSSAnimate( {

					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					position: "absolute"

				}, 500 );

				launchFullscreen( el.opt.gallery.get( 0 ) );

			}

			function RunPrefixMethod( obj, method ) {

				var pfx = [ "webkit", "moz", "ms", "o", "" ];
				var p = 0,
					m, t;
				while( p < pfx.length && !obj[ m ] ) {
					m = method;
					if( pfx[ p ] == "" ) {
						m = m.substr( 0, 1 ).toLowerCase() + m.substr( 1 );
					}
					m = pfx[ p ] + m;
					t = typeof obj[ m ];
					if( t != "undefined" ) {
						pfx = [ pfx[ p ] ];
						return( t == "function" ? obj[ m ]() : obj[ m ] );
					}
					p++;
				}

			}

			function launchFullscreen( element ) {
				RunPrefixMethod( element, "RequestFullScreen" );
			}

			function cancelFullscreen() {
				if( RunPrefixMethod( document, "FullScreen" ) || RunPrefixMethod( document, "IsFullScreen" ) ) {
					RunPrefixMethod( document, "CancelFullScreen" );
				}
			}
		},

		buildThumbs: function( el ) {

			if( el.opt.thumbs.folderPath.trim().length == 0 && el.opt.thumbs.placeholder.trim().length == 0 )
				return;

			jQuery( el.opt.thumbs.placeholder ).addClass( "bgg_thumbnailsContainer" );

			function getImageName( path ) {
				return path.split( "/" ).pop();
			}

			var thumbNumber = jQuery( el.opt.thumbs.placeholder ).children().length || 0;

			if( thumbNumber != el.opt.images.length ) {

				jQuery( el.opt.thumbs.placeholder ).empty();
				for( var i = 0; i < el.opt.images.length; i++ ) {

					var imgSrc = el.opt.thumbs.folderPath + getImageName( el.opt.images[ i ] );

					var img = jQuery( "<img/>" ).attr( {
						"src": imgSrc,
						id: "mbBgImg_" + i
					} ).click( function() {
						el.opt.imageCounter = jQuery( this ).attr( "i" ) - 1;
						jQuery.mbBgndGallery.next( el );
						el.opt.paused = true;
					} ).attr( "i", i ).css( {
						opacity: 0
					} ).on( "load", function() {
						jQuery( this ).fadeTo( 1000, 1 );
					} );

					jQuery( el.opt.thumbs.placeholder ).append( img );
				}

				if( el.opt.thumbs.folderPath.trim().length > 0 && el.opt.thumbs.placeholder.trim().length > 0 ) {
					jQuery( ".sel", jQuery( el.opt.thumbs.placeholder ) ).removeClass( "sel" );
					jQuery( "#mbBgImg_" + el.opt.imageCounter ).addClass( "sel" );
				}
			}

		},

		addImages: function( images, goto, shuffle ) {

			var el = this.get( 0 );
			for( var i in images ) {
				el.opt.images.push( images[ i ] );
			}
			if( shuffle )
				el.opt.images = jQuery.shuffle( el.opt.images );

			if( goto )
				el.opt.imageCounter = el.opt.images.indexOf( images[ 0 ] );

			jQuery.mbBgndGallery.buildThumbs( el );

		},

		removeImages: function( images ) {

			var el = this.get( 0 );
			for( var i in images ) {
				var index = el.opt.images.indexOf( images[ i ] );
				if( index > -1 )
					el.opt.images.splice( index, 1 );
			}
			jQuery.mbBgndGallery.changePhoto( el.opt.images[ el.opt.imageCounter ], el );
			jQuery.mbBgndGallery.buildThumbs( el );
		},

		applyFilter: function( filter, val ) {

			var el = this.get( 0 );
			var gallery = el.opt.gallery;
			var f = {};
			f[ filter ] = val;

			gallery.css3( f );

		}
	};

	/**
	 *
	 * Public methods
	 */

	jQuery.fn.mbBgndGalleryPlay = jQuery.mbBgndGallery.play;
	jQuery.fn.mbBgndGalleryPause = jQuery.mbBgndGallery.pause;
	jQuery.fn.mbBgndGalleryPrev = jQuery.mbBgndGallery.prev;
	jQuery.fn.mbBgndGalleryNext = jQuery.mbBgndGallery.next;
	jQuery.fn.changeGallery = jQuery.mbBgndGallery.changeGallery;
	jQuery.fn.addImages = jQuery.mbBgndGallery.addImages;
	jQuery.fn.removeImages = jQuery.mbBgndGallery.removeImages;
	jQuery.fn.applyFilter = jQuery.mbBgndGallery.applyFilter;

	jQuery.loadFromSystem = function( folderPath, type ) {

		// if directory listing is enabled on the remote server.
		// if you run the page locally you need to run it under a local web server (Ex: http://localhost/yourPage)
		// otherwise the directory listing is unavailable.

		if( !folderPath )
			return;
		if( !type )
			type = [ "jpg", "jpeg", "png" ];
		var arr = [];
		jQuery.ajax( {
			url: folderPath,
			async: false,
			success: function( response ) {
				var tmp = jQuery( response );
				var els = tmp.find( "[href]" );

				els.each( function() {
					for( var i in type ) {
						if( jQuery( this ).attr( "href" ).indexOf( type[ i ] ) >= 0 )
							arr.push( folderPath + jQuery( this ).attr( "href" ) );
						arr = jQuery.unique( arr );
					}
				} );
				tmp.remove();
			}
		} );
		return arr.length != 0 ? arr : false;
	};

	jQuery.shuffle = function( arr ) {
		var newArray = arr.slice();
		var len = newArray.length;
		var i = len;
		while( i-- ) {
			var p = parseInt( Math.random() * len );
			var t = newArray[ i ];
			newArray[ i ] = newArray[ p ];
			newArray[ p ] = t;
		}
		return newArray;
	};

} )( jQuery );

function mbBgndGallery( opt ) {
	return jQuery.mbBgndGallery.buildGallery( opt );
}
