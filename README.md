# jQuery Tab Cycle



## Installation

* Include jQuery as a dependency in your solution.
* Include `./dist/tabCycle-min.js` in your solution.

## Usage
 A complete set of live examples can be found at  [codepen](http://codepen.io/bmuenzenmeyer/pen/f7cc6b605e3d6cf477ad2b3f0c6e422d)

**HTML**
```html
<nav>
  <a href="..." tabIndex="5">Home</a>
  <a href="..." tabIndex="5">Blog</a>
  <input type="text" tabIndex="10" placeholder="username"/>
  <input type="text" tabIndex="10" placeholder="password"/>
  <button tabIndex="10">Login</button>
</nav>
```

**Javascript**
```javascript
$(function() {
  $.tabCycle.init($('nav'));
});
```

## Options

Example:

```javascript
$.tabCycle.options = {
  ignoreSelector: ':hidden, :disabled',
  focusClass: '',
  focusElement: true,
  selectAllText: true,
  stopTabPropagation: true,
  stopArrowPropagation: true
};
```

* `ignoreSelector` - Use this option to ignore specific jQuery selectors within your tabindex set. For example, a button among the set may be currently in a disabled state.
 * Default: `':hidden, :disabled'`
* `focusClass` - an optional CSS class to be applied and removed when focused from the tabCycle plugin
 * Default: `''`
* `focusElement` - Indicates if `$.focus()` should be called on the cycled element.
 * Default: `true`
* `selectAllText` - Indicates if `$.select()` should be called to select all text on the cycled element, when it's an input or textarea.
 * Default: `true`
* `stopTabPropagation` - Indicates if `e.stopPropagation()` should be called when cycling that was triggered by the `TAB` keypress.
 * Default: `true`
* `stopArrowPropagation` - Indicates if `e.stopPropagation()` should be called when cycling that was triggered by the `ARROW` keypress.
  * Default: `true`
