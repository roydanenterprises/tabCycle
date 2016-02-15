/*
 * tabcycle 0.0.1
 * A small jQuery plugin that constrains keyboard cycling to a set of like elements.
 * https://github.com/roydanenterprises/tabCycle#readme
 *
 * Copyright 2016, Roydan Enterprises
 * Released under the MIT license.
*/

!function(e){e.tabCycle={init:function(t){t.on("keydown",function(t){e(this).tabCycle(t,e(t.target).attr("tabindex"))})},destroy:function(e){e.off("keydown")},options:{ignoreSelector:":hidden, :disabled",focusClass:"",focusElement:!0,selectAllText:!0,stopTabPropagation:!0,stopArrowPropagation:!0}},e.fn.tabCycle=function(t,o,a,n){var s={left:37,up:38,right:39,down:40,tab:9},i=e.extend({},e.tabCycle.options,n);if(!((t.keyCode===s.up||t.keyCode===s.down||t.keyCode===s.left||t.keyCode===s.right)&&e(t.target).is("select, input, textarea")||t.keyCode!==s.up&&t.keyCode!==s.down&&t.keyCode!==s.left&&t.keyCode!==s.right&&t.keyCode!==s.tab)){t.preventDefault();var d=t.shiftKey&&t.keyCode===s.tab||t.keyCode===s.up||t.keyCode===s.left,l=this.find("[tabindex="+o+"]").not(i.ignoreSelector);if(0!==l.length){var r=this.find(":focus");r.attr("tabindex")!==o&&(r=r.closest("[tabindex="+o+"]"));var f=l.index(r);if(!(0>f&&t.keyCode===s.tab)){var c;d?(c=f-1,0>c&&(c=l.length-1)):(c=f+1,c>l.length-1&&(c=0)),i.focusElement&&(l[c].focus(),i.focusClass&&e(l[c]).addClass(i.focusClass)),e(l[c]).is("input, textarea")&&i.selectAllText&&e(l[c]).select(),(t.keyCode===s.tab&&i.stopTabPropagation||i.stopArrowPropagation)&&t.stopPropagation(),i.focusClass&&r.removeClass(i.focusClass),a&&a(l[c],r)}}}}}(jQuery);