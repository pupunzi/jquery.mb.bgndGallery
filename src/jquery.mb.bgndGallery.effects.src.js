/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.bgndGallery.effects.src.js                                                                                                       _
 _ last modified: 27/06/15 17.16                                                                                                                    _
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

jQuery.mbBgndGallery.effects = {

	fade: {
		enter: {
			left: 0,
			opacity: 0
		},
		exit: {
			left: 0,
			opacity: 0
		},
		enterTiming: "ease-in",
		exitTiming: "ease-in"
	},

	slideUp: {
		enter: {
			top: "100%",
			opacity: 0
		},
		exit: {
			top: 0,
			opacity: 0
		},
		enterTiming: "ease-in",
		exitTiming: "ease-in"
	},

	slideDown: {
		enter: {
			top: "-100%",
			opacity: 0
		},
		exit: {
			top: 0,
			opacity: 0
		},
		enterTiming: "ease-in",
		exitTiming: "ease-in"
	},

	slideLeft: {
		enter: {
			x: "100%",
			opacity: 0
		},
		exit: {
			x: "-100%",
			opacity: 0
		},
		enterTiming: "easeOutQuad",
		exitTiming: "easeOutQuad"
	},

	slideRight: {
		enter: {
			x: "-100%",
			opacity: 1
		},
		exit: {
			y: "100%",
			opacity: 0
		}
	},

	zoom: {
		enter: {
			scale: ( 1 + Math.random() * 5 ),
			opacity: 0
		},
		exit: {
			scale: ( 1 + Math.random() * 5 ),
			opacity: 0
		},
		enterTiming: "cubic-bezier(0.19, 1, 0.22, 1)",
		exitTiming: "cubic-bezier(0.19, 1, 0.22, 1)"
	},

	zoomBlur: { //the blur effect only works on webkit browsers.
		enter: {
			opacity: 0,
			blur: 10,
			scale: 2
		},
		exit: {
			opacity: 0,
			blur: 10,
			scale: 2
		},
		enterTiming: "cubic-bezier(0.19, 1, 0.22, 1)",
		exitTiming: "cubic-bezier(0.19, 1, 0.22, 1)"
	},

	blur: { //the blur effect only works on webkit browsers.
		enter: {
			opacity: 0,
			blur: 10
		},
		exit: {
			opacity: 0,
			blur: 10
		},
		enterTiming: "cubic-bezier(0.19, 1, 0.22, 1)",
		exitTiming: "cubic-bezier(0.19, 1, 0.22, 1)"
	}

};
