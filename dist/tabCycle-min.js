/*
 * tabcycle 0.0.1
 * A small jQuery plugin that constrains keyboard cycling to a set of like elements.
 * https://github.com/roydanenterprises/tabCycle#readme
 *
 * Copyright 2016, Roydan Enterprises
 * Released under the MIT license.
*/

!function(e){e.fn.tabCycle=function(t,o,s,a){var n={left:37,up:38,right:39,down:40,tab:9},l=e.extend({},e.fn.tabCycle.options,a);if(!((t.keyCode===n.up||t.keyCode===n.down||t.keyCode===n.left||t.keyCode===n.right)&&e(t.target).is("select, input, textarea")||t.keyCode!==n.up&&t.keyCode!==n.down&&t.keyCode!==n.left&&t.keyCode!==n.right&&t.keyCode!==n.tab)){t.preventDefault();var i=t.shiftKey&&t.keyCode===n.tab||t.keyCode===n.up||t.keyCode===n.left,d=this.find("[tabindex="+o+"]").not(l.ignoreSelector);if(0!==d.length){var f=this.find(":focus");f.attr("tabindex")!==o&&(f=f.closest("[tabindex="+o+"]"));var C=d.index(f);if(!(0>C&&t.keyCode===n.tab)){var c;i?(c=C-1,0>c&&(c=d.length-1)):(c=C+1,c>d.length-1&&(c=0)),l.focusElement&&(d[c].focus(),l.focusClass&&e(d[c]).addClass(l.focusClass)),e(d[c]).is("input")&&l.selectAllText&&e(d[c]).select(),t.keyCode===n.tab&&t.stopPropagation(),l.focusClass&&f.removeClass(l.focusClass),s&&s(d[c],f)}}}},e.fn.tabCycle.options={ignoreSelector:":hidden, .is-disabled, .is-not-actionable",focusClass:"is-focused",focusElement:!0,selectAllText:!0}}(jQuery);