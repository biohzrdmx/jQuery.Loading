/**
 * jQuery.Loading - 'Loading' messages made easy
 * @version   0.9.0.20140113
 * @author    biohzrdmx <github.com/biohzrdmx>
 * @requires  jQuery 1.8+
 * @license   MIT
 * @copyright Copyright © 2014 biohzrdmx. All rights reserved.
 */
;(function($) {
	$.fn.loading = function(options) {
		if (!this.length) { return this; }
		var isApiCall = typeof options === 'string';
		var opts = $.extend(true, {}, $.loading.defaults, isApiCall ? {} : options);
		this.each(function() {
			var fn = isApiCall ? options : 'loading';
			if ( $(this).is('button,a,input') ) {
				fn = 'button';
			}
			fn = $.loading.api[fn];
			if ( $.isFunction(fn) ) {
				fn.call(this, opts);
			}
		});
		return this;
	};
	$.loading = {};
	$.loading.api = {
		loading: function(options) {
			var el = $(this);
			var markup = options.markup
				.replace('{class}', options.className)
				.replace('{text}', options.text);
			var overlay = $(markup);
			if (options.themeClass) {
				overlay.addClass(options.themeClass);
			}
			if (options.emptyParent) {
				el.empty();
			}
			overlay.hide();
			el.append(overlay);
			if (options.animate) {
				overlay.fadeIn();
			} else {
				overlay.show();
			}
		},
		done: function(options) {
			var el = $(this);
			var overlay = el.children().filter(function(index) {
				return $(this).hasClass(options.className);
			});
			if (overlay.length) {
				if (options.animate) {
					overlay.fadeOut(function() {
						overlay.detach();
					});
				} else {
					overlay.detach();
				}
			}
		},
		button: function(options) {
			var el = $(this);
			var prev = el.data('loading.button');
			if ( prev ) {
				if ( el.is('input') ) {
					el.val(prev);
				} else {
					el.text(prev);
				}
				el.prop({ disabled: false });
				el.data('loading.button', null);
			} else {
				if ( el.is('input') ) {
					prev = el.val();
					el.data('loading.button', prev);
					el.val(options.text);
				} else {
					prev = el.text();
					el.data('loading.button', prev);
					el.text(options.text);
				}
				el.prop({ disabled: true });
			}
		}
	};
	$.loading.defaults = {
		text: 'Loading...',
		className: 'loading',
		themeClass: null,
		emptyParent: false,
		animate: false,
		markup: '<div class="{class}"></div>'
	};
})(jQuery);