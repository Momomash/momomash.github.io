
(function(r,f) {
	var a=f();
	if(typeof a!=='object')return;
	var e=[typeof module==='object'&&typeof module.exports==='object'?module.exports:null,typeof window!=='undefined'?window:null,r&&r!==window?r:null];
	for(var i in a){e[0]&&(e[0][i]=a[i]);e[1]&&i!=='__esModule'&&(e[1][i] = a[i]);e[2]&&(e[2][i]=a[i]);}
})(this,function(){
	return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/bootstrap-tagsinput/bootstrap-tagsinput.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/bootstrap-tagsinput/_extension.es6":
/*!*************************************************!*\
  !*** ./libs/bootstrap-tagsinput/_extension.es6 ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Fix input position calculation\n//\n\nvar tagsinputBuild = $.fn.tagsinput.Constructor.prototype.build;\nvar tagsinputDestroy = $.fn.tagsinput.Constructor.prototype.destroy;\n\n$.fn.tagsinput.Constructor.prototype.build = function (options) {\n  var _this = this;\n\n  if (options && options.typeahead) {\n    $.extend(options.typeahead, {\n      minLength: 1,\n      afterSelect: function afterSelect() {\n        _this.$input[0].value = '';\n        _this.$input.data('typeahead').lookup('');\n      }\n    });\n  }\n\n  var result = tagsinputBuild.call(this, options);\n  var re = /<|>/g;\n\n  this.$inpWidth = $('<div class=\"bootstrap-tagsinput-input\" style=\"position:absolute;z-index:-101;top:-9999px;opacity:0;white-space:nowrap;\"></div>');\n  $('<div style=\"position:absolute;width:0;height:0;z-index:-100;opacity:0;overflow:hidden;\"></div>').append(this.$inpWidth).prependTo(this.$container);\n\n  var getWidth = function getWidth(val) {\n    return Math.ceil(_this.$inpWidth.html((val || '').replace(re, '#')).outerWidth() + 12) + 'px';\n  };\n\n  this.$input[0].style.width = getWidth();\n  this.$input.on('keydown keyup focusout', function () {\n    this.style.width = getWidth(this.value);\n\n    if (this.value.length < 1 && options && options.typeahead) {\n      $(this).data('typeahead').lookup('');\n    }\n  });\n  this.$input.on('paste', function () {\n    setTimeout($.proxy(function () {\n      this.style.width = getWidth(this.value);\n    }, this), 100);\n  });\n\n  return result;\n};\n\n$.fn.tagsinput.Constructor.prototype.destroy = function () {\n  this.$input.off('keydown keyup focusout paste change');\n\n  return tagsinputDestroy.call(this);\n};\n\n// Re-initialize [data-role=tagsinput]\n$(function () {\n  $('input[data-role=tagsinput], select[multiple][data-role=tagsinput]').tagsinput('destroy');\n  $('input[data-role=tagsinput], select[multiple][data-role=tagsinput]').tagsinput();\n});\n\n//# sourceURL=webpack:///./libs/bootstrap-tagsinput/_extension.es6?");

/***/ }),

/***/ "./libs/bootstrap-tagsinput/bootstrap-tagsinput.js":
/*!*********************************************************!*\
  !*** ./libs/bootstrap-tagsinput/bootstrap-tagsinput.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js */ \"./node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js\");\n__webpack_require__(/*! ./_extension.es6 */ \"./libs/bootstrap-tagsinput/_extension.es6\");\n\n\n//# sourceURL=webpack:///./libs/bootstrap-tagsinput/bootstrap-tagsinput.js?");

/***/ }),

/***/ "./node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\n  \"use strict\";\n\n  var defaultOptions = {\n    tagClass: function(item) {\n      return 'label label-info';\n    },\n    itemValue: function(item) {\n      return item ? item.toString() : item;\n    },\n    itemText: function(item) {\n      return this.itemValue(item);\n    },\n    itemTitle: function(item) {\n      return null;\n    },\n    freeInput: true,\n    addOnBlur: true,\n    maxTags: undefined,\n    maxChars: undefined,\n    confirmKeys: [13, 44],\n    delimiter: ',',\n    delimiterRegex: null,\n    cancelConfirmKeysOnEmpty: false,\n    onTagExists: function(item, $tag) {\n      $tag.hide().fadeIn();\n    },\n    trimValue: false,\n    allowDuplicates: false\n  };\n\n  /**\n   * Constructor function\n   */\n  function TagsInput(element, options) {\n    this.isInit = true;\n    this.itemsArray = [];\n\n    this.$element = $(element);\n    this.$element.hide();\n\n    this.isSelect = (element.tagName === 'SELECT');\n    this.multiple = (this.isSelect && element.hasAttribute('multiple'));\n    this.objectItems = options && options.itemValue;\n    this.placeholderText = element.hasAttribute('placeholder') ? this.$element.attr('placeholder') : '';\n    this.inputSize = Math.max(1, this.placeholderText.length);\n\n    this.$container = $('<div class=\"bootstrap-tagsinput\"></div>');\n    this.$input = $('<input type=\"text\" placeholder=\"' + this.placeholderText + '\"/>').appendTo(this.$container);\n\n    this.$element.before(this.$container);\n\n    this.build(options);\n    this.isInit = false;\n  }\n\n  TagsInput.prototype = {\n    constructor: TagsInput,\n\n    /**\n     * Adds the given item as a new tag. Pass true to dontPushVal to prevent\n     * updating the elements val()\n     */\n    add: function(item, dontPushVal, options) {\n      var self = this;\n\n      if (self.options.maxTags && self.itemsArray.length >= self.options.maxTags)\n        return;\n\n      // Ignore falsey values, except false\n      if (item !== false && !item)\n        return;\n\n      // Trim value\n      if (typeof item === \"string\" && self.options.trimValue) {\n        item = $.trim(item);\n      }\n\n      // Throw an error when trying to add an object while the itemValue option was not set\n      if (typeof item === \"object\" && !self.objectItems)\n        throw(\"Can't add objects when itemValue option is not set\");\n\n      // Ignore strings only containg whitespace\n      if (item.toString().match(/^\\s*$/))\n        return;\n\n      // If SELECT but not multiple, remove current tag\n      if (self.isSelect && !self.multiple && self.itemsArray.length > 0)\n        self.remove(self.itemsArray[0]);\n\n      if (typeof item === \"string\" && this.$element[0].tagName === 'INPUT') {\n        var delimiter = (self.options.delimiterRegex) ? self.options.delimiterRegex : self.options.delimiter;\n        var items = item.split(delimiter);\n        if (items.length > 1) {\n          for (var i = 0; i < items.length; i++) {\n            this.add(items[i], true);\n          }\n\n          if (!dontPushVal)\n            self.pushVal();\n          return;\n        }\n      }\n\n      var itemValue = self.options.itemValue(item),\n          itemText = self.options.itemText(item),\n          tagClass = self.options.tagClass(item),\n          itemTitle = self.options.itemTitle(item);\n\n      // Ignore items allready added\n      var existing = $.grep(self.itemsArray, function(item) { return self.options.itemValue(item) === itemValue; } )[0];\n      if (existing && !self.options.allowDuplicates) {\n        // Invoke onTagExists\n        if (self.options.onTagExists) {\n          var $existingTag = $(\".tag\", self.$container).filter(function() { return $(this).data(\"item\") === existing; });\n          self.options.onTagExists(item, $existingTag);\n        }\n        return;\n      }\n\n      // if length greater than limit\n      if (self.items().toString().length + item.length + 1 > self.options.maxInputLength)\n        return;\n\n      // raise beforeItemAdd arg\n      var beforeItemAddEvent = $.Event('beforeItemAdd', { item: item, cancel: false, options: options});\n      self.$element.trigger(beforeItemAddEvent);\n      if (beforeItemAddEvent.cancel)\n        return;\n\n      // register item in internal array and map\n      self.itemsArray.push(item);\n\n      // add a tag element\n\n      var $tag = $('<span class=\"tag ' + htmlEncode(tagClass) + (itemTitle !== null ? ('\" title=\"' + itemTitle) : '') + '\">' + htmlEncode(itemText) + '<span data-role=\"remove\"></span></span>');\n      $tag.data('item', item);\n      self.findInputWrapper().before($tag);\n      $tag.after(' ');\n\n      // Check to see if the tag exists in its raw or uri-encoded form\n      var optionExists = (\n        $('option[value=\"' + encodeURIComponent(itemValue) + '\"]', self.$element).length ||\n        $('option[value=\"' + htmlEncode(itemValue) + '\"]', self.$element).length\n      );\n\n      // add <option /> if item represents a value not present in one of the <select />'s options\n      if (self.isSelect && !optionExists) {\n        var $option = $('<option selected>' + htmlEncode(itemText) + '</option>');\n        $option.data('item', item);\n        $option.attr('value', itemValue);\n        self.$element.append($option);\n      }\n\n      if (!dontPushVal)\n        self.pushVal();\n\n      // Add class when reached maxTags\n      if (self.options.maxTags === self.itemsArray.length || self.items().toString().length === self.options.maxInputLength)\n        self.$container.addClass('bootstrap-tagsinput-max');\n\n      // If using typeahead, once the tag has been added, clear the typeahead value so it does not stick around in the input.\n      if ($('.typeahead, .twitter-typeahead', self.$container).length) {\n        self.$input.typeahead('val', '');\n      }\n\n      if (this.isInit) {\n        self.$element.trigger($.Event('itemAddedOnInit', { item: item, options: options }));\n      } else {\n        self.$element.trigger($.Event('itemAdded', { item: item, options: options }));\n      }\n    },\n\n    /**\n     * Removes the given item. Pass true to dontPushVal to prevent updating the\n     * elements val()\n     */\n    remove: function(item, dontPushVal, options) {\n      var self = this;\n\n      if (self.objectItems) {\n        if (typeof item === \"object\")\n          item = $.grep(self.itemsArray, function(other) { return self.options.itemValue(other) ==  self.options.itemValue(item); } );\n        else\n          item = $.grep(self.itemsArray, function(other) { return self.options.itemValue(other) ==  item; } );\n\n        item = item[item.length-1];\n      }\n\n      if (item) {\n        var beforeItemRemoveEvent = $.Event('beforeItemRemove', { item: item, cancel: false, options: options });\n        self.$element.trigger(beforeItemRemoveEvent);\n        if (beforeItemRemoveEvent.cancel)\n          return;\n\n        $('.tag', self.$container).filter(function() { return $(this).data('item') === item; }).remove();\n        $('option', self.$element).filter(function() { return $(this).data('item') === item; }).remove();\n        if($.inArray(item, self.itemsArray) !== -1)\n          self.itemsArray.splice($.inArray(item, self.itemsArray), 1);\n      }\n\n      if (!dontPushVal)\n        self.pushVal();\n\n      // Remove class when reached maxTags\n      if (self.options.maxTags > self.itemsArray.length)\n        self.$container.removeClass('bootstrap-tagsinput-max');\n\n      self.$element.trigger($.Event('itemRemoved',  { item: item, options: options }));\n    },\n\n    /**\n     * Removes all items\n     */\n    removeAll: function() {\n      var self = this;\n\n      $('.tag', self.$container).remove();\n      $('option', self.$element).remove();\n\n      while(self.itemsArray.length > 0)\n        self.itemsArray.pop();\n\n      self.pushVal();\n    },\n\n    /**\n     * Refreshes the tags so they match the text/value of their corresponding\n     * item.\n     */\n    refresh: function() {\n      var self = this;\n      $('.tag', self.$container).each(function() {\n        var $tag = $(this),\n            item = $tag.data('item'),\n            itemValue = self.options.itemValue(item),\n            itemText = self.options.itemText(item),\n            tagClass = self.options.tagClass(item);\n\n          // Update tag's class and inner text\n          $tag.attr('class', null);\n          $tag.addClass('tag ' + htmlEncode(tagClass));\n          $tag.contents().filter(function() {\n            return this.nodeType == 3;\n          })[0].nodeValue = htmlEncode(itemText);\n\n          if (self.isSelect) {\n            var option = $('option', self.$element).filter(function() { return $(this).data('item') === item; });\n            option.attr('value', itemValue);\n          }\n      });\n    },\n\n    /**\n     * Returns the items added as tags\n     */\n    items: function() {\n      return this.itemsArray;\n    },\n\n    /**\n     * Assembly value by retrieving the value of each item, and set it on the\n     * element.\n     */\n    pushVal: function() {\n      var self = this,\n          val = $.map(self.items(), function(item) {\n            return self.options.itemValue(item).toString();\n          });\n\n      self.$element.val(val, true).trigger('change');\n    },\n\n    /**\n     * Initializes the tags input behaviour on the element\n     */\n    build: function(options) {\n      var self = this;\n\n      self.options = $.extend({}, defaultOptions, options);\n      // When itemValue is set, freeInput should always be false\n      if (self.objectItems)\n        self.options.freeInput = false;\n\n      makeOptionItemFunction(self.options, 'itemValue');\n      makeOptionItemFunction(self.options, 'itemText');\n      makeOptionFunction(self.options, 'tagClass');\n\n      // Typeahead Bootstrap version 2.3.2\n      if (self.options.typeahead) {\n        var typeahead = self.options.typeahead || {};\n\n        makeOptionFunction(typeahead, 'source');\n\n        self.$input.typeahead($.extend({}, typeahead, {\n          source: function (query, process) {\n            function processItems(items) {\n              var texts = [];\n\n              for (var i = 0; i < items.length; i++) {\n                var text = self.options.itemText(items[i]);\n                map[text] = items[i];\n                texts.push(text);\n              }\n              process(texts);\n            }\n\n            this.map = {};\n            var map = this.map,\n                data = typeahead.source(query);\n\n            if ($.isFunction(data.success)) {\n              // support for Angular callbacks\n              data.success(processItems);\n            } else if ($.isFunction(data.then)) {\n              // support for Angular promises\n              data.then(processItems);\n            } else {\n              // support for functions and jquery promises\n              $.when(data)\n               .then(processItems);\n            }\n          },\n          updater: function (text) {\n            self.add(this.map[text]);\n            return this.map[text];\n          },\n          matcher: function (text) {\n            return (text.toLowerCase().indexOf(this.query.trim().toLowerCase()) !== -1);\n          },\n          sorter: function (texts) {\n            return texts.sort();\n          },\n          highlighter: function (text) {\n            var regex = new RegExp( '(' + this.query + ')', 'gi' );\n            return text.replace( regex, \"<strong>$1</strong>\" );\n          }\n        }));\n      }\n\n      // typeahead.js\n      if (self.options.typeaheadjs) {\n          var typeaheadConfig = null;\n          var typeaheadDatasets = {};\n\n          // Determine if main configurations were passed or simply a dataset\n          var typeaheadjs = self.options.typeaheadjs;\n          if ($.isArray(typeaheadjs)) {\n            typeaheadConfig = typeaheadjs[0];\n            typeaheadDatasets = typeaheadjs[1];\n          } else {\n            typeaheadDatasets = typeaheadjs;\n          }\n\n          self.$input.typeahead(typeaheadConfig, typeaheadDatasets).on('typeahead:selected', $.proxy(function (obj, datum) {\n            if (typeaheadDatasets.valueKey)\n              self.add(datum[typeaheadDatasets.valueKey]);\n            else\n              self.add(datum);\n            self.$input.typeahead('val', '');\n          }, self));\n      }\n\n      self.$container.on('click', $.proxy(function(event) {\n        if (! self.$element.attr('disabled')) {\n          self.$input.removeAttr('disabled');\n        }\n        self.$input.focus();\n      }, self));\n\n        if (self.options.addOnBlur && self.options.freeInput) {\n          self.$input.on('focusout', $.proxy(function(event) {\n              // HACK: only process on focusout when no typeahead opened, to\n              //       avoid adding the typeahead text as tag\n              if ($('.typeahead, .twitter-typeahead', self.$container).length === 0) {\n                self.add(self.$input.val());\n                self.$input.val('');\n              }\n          }, self));\n        }\n\n\n      self.$container.on('keydown', 'input', $.proxy(function(event) {\n        var $input = $(event.target),\n            $inputWrapper = self.findInputWrapper();\n\n        if (self.$element.attr('disabled')) {\n          self.$input.attr('disabled', 'disabled');\n          return;\n        }\n\n        switch (event.which) {\n          // BACKSPACE\n          case 8:\n            if (doGetCaretPosition($input[0]) === 0) {\n              var prev = $inputWrapper.prev();\n              if (prev.length) {\n                self.remove(prev.data('item'));\n              }\n            }\n            break;\n\n          // DELETE\n          case 46:\n            if (doGetCaretPosition($input[0]) === 0) {\n              var next = $inputWrapper.next();\n              if (next.length) {\n                self.remove(next.data('item'));\n              }\n            }\n            break;\n\n          // LEFT ARROW\n          case 37:\n            // Try to move the input before the previous tag\n            var $prevTag = $inputWrapper.prev();\n            if ($input.val().length === 0 && $prevTag[0]) {\n              $prevTag.before($inputWrapper);\n              $input.focus();\n            }\n            break;\n          // RIGHT ARROW\n          case 39:\n            // Try to move the input after the next tag\n            var $nextTag = $inputWrapper.next();\n            if ($input.val().length === 0 && $nextTag[0]) {\n              $nextTag.after($inputWrapper);\n              $input.focus();\n            }\n            break;\n         default:\n             // ignore\n         }\n\n        // Reset internal input's size\n        var textLength = $input.val().length,\n            wordSpace = Math.ceil(textLength / 5),\n            size = textLength + wordSpace + 1;\n        $input.attr('size', Math.max(this.inputSize, $input.val().length));\n      }, self));\n\n      self.$container.on('keypress', 'input', $.proxy(function(event) {\n         var $input = $(event.target);\n\n         if (self.$element.attr('disabled')) {\n            self.$input.attr('disabled', 'disabled');\n            return;\n         }\n\n         var text = $input.val(),\n         maxLengthReached = self.options.maxChars && text.length >= self.options.maxChars;\n         if (self.options.freeInput && (keyCombinationInList(event, self.options.confirmKeys) || maxLengthReached)) {\n            // Only attempt to add a tag if there is data in the field\n            if (text.length !== 0) {\n               self.add(maxLengthReached ? text.substr(0, self.options.maxChars) : text);\n               $input.val('');\n            }\n\n            // If the field is empty, let the event triggered fire as usual\n            if (self.options.cancelConfirmKeysOnEmpty === false) {\n                event.preventDefault();\n            }\n         }\n\n         // Reset internal input's size\n         var textLength = $input.val().length,\n            wordSpace = Math.ceil(textLength / 5),\n            size = textLength + wordSpace + 1;\n         $input.attr('size', Math.max(this.inputSize, $input.val().length));\n      }, self));\n\n      // Remove icon clicked\n      self.$container.on('click', '[data-role=remove]', $.proxy(function(event) {\n        if (self.$element.attr('disabled')) {\n          return;\n        }\n        self.remove($(event.target).closest('.tag').data('item'));\n      }, self));\n\n      // Only add existing value as tags when using strings as tags\n      if (self.options.itemValue === defaultOptions.itemValue) {\n        if (self.$element[0].tagName === 'INPUT') {\n            self.add(self.$element.val());\n        } else {\n          $('option', self.$element).each(function() {\n            self.add($(this).attr('value'), true);\n          });\n        }\n      }\n    },\n\n    /**\n     * Removes all tagsinput behaviour and unregsiter all event handlers\n     */\n    destroy: function() {\n      var self = this;\n\n      // Unbind events\n      self.$container.off('keypress', 'input');\n      self.$container.off('click', '[role=remove]');\n\n      self.$container.remove();\n      self.$element.removeData('tagsinput');\n      self.$element.show();\n    },\n\n    /**\n     * Sets focus on the tagsinput\n     */\n    focus: function() {\n      this.$input.focus();\n    },\n\n    /**\n     * Returns the internal input element\n     */\n    input: function() {\n      return this.$input;\n    },\n\n    /**\n     * Returns the element which is wrapped around the internal input. This\n     * is normally the $container, but typeahead.js moves the $input element.\n     */\n    findInputWrapper: function() {\n      var elt = this.$input[0],\n          container = this.$container[0];\n      while(elt && elt.parentNode !== container)\n        elt = elt.parentNode;\n\n      return $(elt);\n    }\n  };\n\n  /**\n   * Register JQuery plugin\n   */\n  $.fn.tagsinput = function(arg1, arg2, arg3) {\n    var results = [];\n\n    this.each(function() {\n      var tagsinput = $(this).data('tagsinput');\n      // Initialize a new tags input\n      if (!tagsinput) {\n          tagsinput = new TagsInput(this, arg1);\n          $(this).data('tagsinput', tagsinput);\n          results.push(tagsinput);\n\n          if (this.tagName === 'SELECT') {\n              $('option', $(this)).attr('selected', 'selected');\n          }\n\n          // Init tags from $(this).val()\n          $(this).val($(this).val());\n      } else if (!arg1 && !arg2) {\n          // tagsinput already exists\n          // no function, trying to init\n          results.push(tagsinput);\n      } else if(tagsinput[arg1] !== undefined) {\n          // Invoke function on existing tags input\n            if(tagsinput[arg1].length === 3 && arg3 !== undefined){\n               var retVal = tagsinput[arg1](arg2, null, arg3);\n            }else{\n               var retVal = tagsinput[arg1](arg2);\n            }\n          if (retVal !== undefined)\n              results.push(retVal);\n      }\n    });\n\n    if ( typeof arg1 == 'string') {\n      // Return the results from the invoked function calls\n      return results.length > 1 ? results : results[0];\n    } else {\n      return results;\n    }\n  };\n\n  $.fn.tagsinput.Constructor = TagsInput;\n\n  /**\n   * Most options support both a string or number as well as a function as\n   * option value. This function makes sure that the option with the given\n   * key in the given options is wrapped in a function\n   */\n  function makeOptionItemFunction(options, key) {\n    if (typeof options[key] !== 'function') {\n      var propertyName = options[key];\n      options[key] = function(item) { return item[propertyName]; };\n    }\n  }\n  function makeOptionFunction(options, key) {\n    if (typeof options[key] !== 'function') {\n      var value = options[key];\n      options[key] = function() { return value; };\n    }\n  }\n  /**\n   * HtmlEncodes the given value\n   */\n  var htmlEncodeContainer = $('<div />');\n  function htmlEncode(value) {\n    if (value) {\n      return htmlEncodeContainer.text(value).html();\n    } else {\n      return '';\n    }\n  }\n\n  /**\n   * Returns the position of the caret in the given input field\n   * http://flightschool.acylt.com/devnotes/caret-position-woes/\n   */\n  function doGetCaretPosition(oField) {\n    var iCaretPos = 0;\n    if (document.selection) {\n      oField.focus ();\n      var oSel = document.selection.createRange();\n      oSel.moveStart ('character', -oField.value.length);\n      iCaretPos = oSel.text.length;\n    } else if (oField.selectionStart || oField.selectionStart == '0') {\n      iCaretPos = oField.selectionStart;\n    }\n    return (iCaretPos);\n  }\n\n  /**\n    * Returns boolean indicates whether user has pressed an expected key combination.\n    * @param object keyPressEvent: JavaScript event object, refer\n    *     http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html\n    * @param object lookupList: expected key combinations, as in:\n    *     [13, {which: 188, shiftKey: true}]\n    */\n  function keyCombinationInList(keyPressEvent, lookupList) {\n      var found = false;\n      $.each(lookupList, function (index, keyCombination) {\n          if (typeof (keyCombination) === 'number' && keyPressEvent.which === keyCombination) {\n              found = true;\n              return false;\n          }\n\n          if (keyPressEvent.which === keyCombination.which) {\n              var alt = !keyCombination.hasOwnProperty('altKey') || keyPressEvent.altKey === keyCombination.altKey,\n                  shift = !keyCombination.hasOwnProperty('shiftKey') || keyPressEvent.shiftKey === keyCombination.shiftKey,\n                  ctrl = !keyCombination.hasOwnProperty('ctrlKey') || keyPressEvent.ctrlKey === keyCombination.ctrlKey;\n              if (alt && shift && ctrl) {\n                  found = true;\n                  return false;\n              }\n          }\n      });\n\n      return found;\n  }\n\n  /**\n   * Initialize tagsinput behaviour on inputs and selects which have\n   * data-role=tagsinput\n   */\n  $(function() {\n    $(\"input[data-role=tagsinput], select[multiple][data-role=tagsinput]\").tagsinput();\n  });\n})(window.jQuery);\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js?");

/***/ })

/******/ });
});;