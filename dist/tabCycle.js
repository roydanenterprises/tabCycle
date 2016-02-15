/*
 * tabcycle 1.0.0
 * Create scoped tabindex containers using HTML and Javascript.
 * https://github.com/roydanenterprises/tabCycle#readme
 *
 * Copyright 2016, Roydan Enterprises
 * Released under the MIT license.
*/

;
(function ($) {
	//Custom cycling for our application.  This function can be used to cycle focus between different
	//elements that have the same tab index.

	$.tabCycle = {
		init : function(element){
			element.on('keydown', function(e) {
				$(this).tabCycle(e, $(e.target).attr('tabindex'));
			});
		},
		destroy : function(element){
			element.off('keydown');
		},
		options : {
			ignoreSelector: ':hidden, :disabled',
			focusClass: '',
			focusElement: true,
			selectAllText: true,
			stopTabPropagation:true,
			stopArrowPropagation:true
		}
	};

	$.fn.tabCycle = function (event, tabIndex, callback, options) {
		var keyCodes = {
			left: 37,
			up: 38,
			right: 39,
			down: 40,
			tab: 9
		};

		var opts = $.extend({}, $.tabCycle.options, options);
		//if we are trying to cycle on a select box with arrow keys do not cycle.
		if (((event.keyCode === keyCodes.up ||
			  event.keyCode === keyCodes.down ||
			  event.keyCode === keyCodes.left ||
			  event.keyCode === keyCodes.right) &&
			$(event.target).is('select, input, textarea'))
			||
		  ((event.keyCode !== keyCodes.up) &&
		  (event.keyCode !== keyCodes.down) &&
		  (event.keyCode !== keyCodes.left) &&
		  (event.keyCode !== keyCodes.right) &&
		  (event.keyCode !== keyCodes.tab))
			) {
			return;
		} else {
			event.preventDefault();
		}

		var backwards = (event.shiftKey && event.keyCode === keyCodes.tab) ||
		  event.keyCode === keyCodes.up ||
		  event.keyCode === keyCodes.left;

		var elements = this.find('[tabindex=' + tabIndex + ']').not(opts.ignoreSelector);

		if (elements.length === 0) return;
		var focusedCyleElement = this.find(':focus');
		if (focusedCyleElement.attr('tabindex') !== tabIndex) {
			focusedCyleElement = focusedCyleElement.closest('[tabindex=' + tabIndex + ']');
		}

		var focusedIndex = elements.index(focusedCyleElement);
		//tab when the tab index element is not focused should just keep on movin.
		if (focusedIndex < 0 && event.keyCode === keyCodes.tab) {
			return;
		}
		var next;
		if (backwards) {
			next = focusedIndex - 1;
			if (next < 0) {
				next = elements.length - 1;
			}
		} else {
			next = focusedIndex + 1;
			if (next > elements.length - 1) {
				next = 0;
			}
		}

		if (opts.focusElement) {
			elements[next].focus();
			if (opts.focusClass) {
				$(elements[next]).addClass(opts.focusClass);
			}
		}

		//TODO: check if jquery selector is required.
		// Select all text when tabbed onto
		if ($(elements[next]).is('input, textarea')  && opts.selectAllText) {
			$(elements[next]).select();
		}

		//This is to prevent the default tab action or bubbling.  we are manually handling it here.
		if ((event.keyCode === keyCodes.tab && opts.stopTabPropagation) ||
			opts.stopArrowPropagation) {
			event.stopPropagation();
		}

		if (opts.focusClass) {
			focusedCyleElement.removeClass(opts.focusClass);
		}

		if (callback) {
			callback(elements[next], focusedCyleElement);
		}
	};
})(jQuery);
