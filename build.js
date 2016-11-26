(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var retext = require('retext');
var emoji = require('retext-emoji');

retext().use(emoji);

var $convert = document.getElementsByName('convert')[0];
var $areas = document.getElementsByTagName('textarea');
var $input = $areas[0];
var $output = $areas[1];

$convert.addEventListener('change', oninputchange);
$input.addEventListener('input', oninputchange);

oninputchange();

function oninputchange() {
  var state = $convert.selectedOptions[0].value;
  var processor = retext().use(emoji, {convert : state});

  $output.value = processor.process($input.value);
}

},{"retext":51,"retext-emoji":44}],2:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module array-iterate
 * @fileoverview `forEach` with the possibility to change the
 *   next position.
 */

'use strict';

/* Dependencies. */
var has = require('has');

/* Expose. */
module.exports = iterate;

/**
 * `Array#forEach()` with the possibility to change
 * the next position.
 *
 * @param {{length: number}} values - Values.
 * @param {arrayIterate~callback} callback - Callback given to `iterate`.
 * @param {*?} [context] - Context object to use when invoking `callback`.
 */
function iterate(values, callback, context) {
  var index = -1;
  var result;

  if (!values) {
    throw new Error('Iterate requires that |this| not be ' + values);
  }

  if (!has(values, 'length')) {
    throw new Error('Iterate requires that |this| has a `length`');
  }

  if (typeof callback !== 'function') {
    throw new Error('`callback` must be a function');
  }

  /* The length might change, so we do not cache it. */
  while (++index < values.length) {
    /* Skip missing values. */
    if (!(index in values)) {
      continue;
    }

    result = callback.call(context, values[index], index, values);

    /*
     * If `callback` returns a `number`, move `index` over to
     * `number`.
     */

    if (typeof result === 'number') {
      /* Make sure that negative numbers do not break the loop. */
      if (result < 0) {
        index = 0;
      }

      index = result - 1;
    }
  }
}

},{"has":9}],3:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module bail
 * @fileoverview Throw a given error.
 */

'use strict';

/* Expose. */
module.exports = bail;

/**
 * Throw a given error.
 *
 * @example
 *   bail();
 *
 * @example
 *   bail(new Error('failure'));
 *   // Error: failure
 *   //     at repl:1:6
 *   //     at REPLServer.defaultEval (repl.js:154:27)
 *   //     ...
 *
 * @param {Error?} [err] - Optional error.
 * @throws {Error} - `err`, when given.
 */
function bail(err) {
  if (err) {
    throw err;
  }
}

},{}],4:[function(require,module,exports){
module.exports=[
  {
    "name": "angry",
    "emoji": "😠",
    "tags": [
      "mad",
      "annoyed"
    ],
    "description": "angry face",
    "emoticons": [
      ">:(",
      ">:[",
      ">:-(",
      ">:-[",
      ">=(",
      ">=[",
      ">=-(",
      ">=-["
    ]
  },
  {
    "name": "blush",
    "emoji": "😊",
    "tags": [
      "proud"
    ],
    "description": "smiling face with smiling eyes",
    "emoticons": [
      ":\")",
      ":\"]",
      ":\"D",
      ":-\")",
      ":-\"]",
      ":-\"D",
      "=\")",
      "=\"]",
      "=\"D",
      "=-\")",
      "=-\"]",
      "=-\"D"
    ]
  },
  {
    "name": "broken_heart",
    "emoji": "💔",
    "tags": [],
    "description": "broken heart",
    "emoticons": [
      "<\\3",
      "</3"
    ]
  },
  {
    "name": "confused",
    "emoji": "😕",
    "tags": [],
    "description": "confused face",
    "emoticons": [
      ":/",
      ":\\",
      ":-/",
      ":-\\",
      "=/",
      "=\\",
      "=-/",
      "=-\\"
    ]
  },
  {
    "name": "cry",
    "emoji": "😢",
    "tags": [
      "sad",
      "tear"
    ],
    "description": "crying face",
    "emoticons": [
      ":,(",
      ":,[",
      ":,|",
      ":,-(",
      ":,-[",
      ":,-|",
      ":'(",
      ":'[",
      ":'|",
      ":'-(",
      ":'-[",
      ":'-|",
      "=,(",
      "=,[",
      "=,|",
      "=,-(",
      "=,-[",
      "=,-|",
      "='(",
      "='[",
      "='|",
      "='-(",
      "='-[",
      "='-|"
    ]
  },
  {
    "name": "frowning",
    "emoji": "😦",
    "tags": [],
    "description": "frowning face with open mouth",
    "emoticons": [
      ":(",
      ":[",
      ":-(",
      ":-[",
      "=(",
      "=[",
      "=-(",
      "=-["
    ]
  },
  {
    "name": "heart",
    "emoji": "❤️",
    "tags": [
      "love"
    ],
    "description": "heavy black heart",
    "emoticons": [
      "<3"
    ]
  },
  {
    "name": "imp",
    "emoji": "👿",
    "tags": [
      "angry",
      "devil",
      "evil",
      "horns"
    ],
    "description": "imp",
    "emoticons": [
      "]:(",
      "]:[",
      "]:-(",
      "]:-[",
      "]=(",
      "]=[",
      "]=-(",
      "]=-["
    ]
  },
  {
    "name": "innocent",
    "emoji": "😇",
    "tags": [
      "angel"
    ],
    "description": "smiling face with halo",
    "emoticons": [
      "o:)",
      "o:]",
      "o:D",
      "o:-)",
      "o:-]",
      "o:-D",
      "o=)",
      "o=]",
      "o=D",
      "o=-)",
      "o=-]",
      "o=-D",
      "O:)",
      "O:]",
      "O:D",
      "O:-)",
      "O:-]",
      "O:-D",
      "O=)",
      "O=]",
      "O=D",
      "O=-)",
      "O=-]",
      "O=-D",
      "0:)",
      "0:]",
      "0:D",
      "0:-)",
      "0:-]",
      "0:-D",
      "0=)",
      "0=]",
      "0=D",
      "0=-)",
      "0=-]",
      "0=-D"
    ]
  },
  {
    "name": "joy",
    "emoji": "😂",
    "tags": [
      "tears"
    ],
    "description": "face with tears of joy",
    "emoticons": [
      ":,)",
      ":,]",
      ":,D",
      ":,-)",
      ":,-]",
      ":,-D",
      ":')",
      ":']",
      ":'D",
      ":'-)",
      ":'-]",
      ":'-D",
      "=,)",
      "=,]",
      "=,D",
      "=,-)",
      "=,-]",
      "=,-D",
      "=')",
      "=']",
      "='D",
      "='-)",
      "='-]",
      "='-D"
    ]
  },
  {
    "name": "kissing",
    "emoji": "😗",
    "tags": [],
    "description": "kissing face",
    "emoticons": [
      ":*",
      ":-*",
      "=*",
      "=-*"
    ]
  },
  {
    "name": "laughing",
    "emoji": "😆",
    "tags": [
      "happy",
      "haha"
    ],
    "description": "smiling face with open mouth and tightly-closed eyes",
    "emoticons": [
      "x)",
      "x]",
      "xD",
      "x-)",
      "x-]",
      "x-D",
      "X)",
      "X]",
      "X-)",
      "X-]",
      "X-D"
    ]
  },
  {
    "name": "man",
    "emoji": "👨",
    "tags": [
      "mustache",
      "father",
      "dad"
    ],
    "description": "man",
    "emoticons": [
      ":3",
      ":-3",
      "=3",
      "=-3",
      ";3",
      ";-3",
      "x3",
      "x-3",
      "X3",
      "X-3"
    ]
  },
  {
    "name": "neutral_face",
    "emoji": "😐",
    "tags": [
      "meh"
    ],
    "description": "neutral face",
    "emoticons": [
      ":|",
      ":-|",
      "=|",
      "=-|"
    ]
  },
  {
    "name": "no_mouth",
    "emoji": "😶",
    "tags": [
      "mute",
      "silence"
    ],
    "description": "face without mouth",
    "emoticons": [
      ":-"
    ]
  },
  {
    "name": "open_mouth",
    "emoji": "😮",
    "tags": [
      "surprise",
      "impressed",
      "wow"
    ],
    "description": "face with open mouth",
    "emoticons": [
      ":o",
      ":O",
      ":0",
      ":-o",
      ":-O",
      ":-0",
      "=o",
      "=O",
      "=0",
      "=-o",
      "=-O",
      "=-0"
    ]
  },
  {
    "name": "rage",
    "emoji": "😡",
    "tags": [
      "angry"
    ],
    "description": "pouting face",
    "emoticons": [
      ":@",
      ":-@",
      "=@",
      "=-@"
    ]
  },
  {
    "name": "smile",
    "emoji": "😄",
    "tags": [
      "happy",
      "joy",
      "pleased"
    ],
    "description": "smiling face with open mouth and smiling eyes",
    "emoticons": [
      ":D",
      ":-D",
      "=D",
      "=-D"
    ]
  },
  {
    "name": "smiley",
    "emoji": "😃",
    "tags": [
      "happy",
      "joy",
      "haha"
    ],
    "description": "smiling face with open mouth",
    "emoticons": [
      ":)",
      ":]",
      ":-)",
      ":-]",
      "=)",
      "=]",
      "=-)",
      "=-]"
    ]
  },
  {
    "name": "smiling_imp",
    "emoji": "😈",
    "tags": [
      "devil",
      "evil",
      "horns"
    ],
    "description": "smiling face with horns",
    "emoticons": [
      "]:)",
      "]:]",
      "]:D",
      "]:-)",
      "]:-]",
      "]:-D",
      "]=)",
      "]=]",
      "]=D",
      "]=-)",
      "]=-]",
      "]=-D"
    ]
  },
  {
    "name": "sob",
    "emoji": "😭",
    "tags": [
      "sad",
      "cry",
      "bawling"
    ],
    "description": "loudly crying face",
    "emoticons": [
      ":,'(",
      ":,'[",
      ":,'-(",
      ":,'-[",
      ":',(",
      ":',[",
      ":',-(",
      ":',-[",
      "=,'(",
      "=,'[",
      "=,'-(",
      "=,'-[",
      "=',(",
      "=',[",
      "=',-(",
      "=',-["
    ]
  },
  {
    "name": "stuck_out_tongue",
    "emoji": "😛",
    "tags": [],
    "description": "face with stuck-out tongue",
    "emoticons": [
      ":p",
      ":P",
      ":d",
      ":-p",
      ":-P",
      ":-d",
      "=p",
      "=P",
      "=d",
      "=-p",
      "=-P",
      "=-d"
    ]
  },
  {
    "name": "stuck_out_tongue_closed_eyes",
    "emoji": "😝",
    "tags": [
      "prank"
    ],
    "description": "face with stuck-out tongue and tightly-closed eyes",
    "emoticons": [
      "xP",
      "x-p",
      "x-P",
      "x-d",
      "Xp",
      "Xd",
      "X-p",
      "X-P",
      "X-d"
    ]
  },
  {
    "name": "stuck_out_tongue_winking_eye",
    "emoji": "😜",
    "tags": [
      "prank",
      "silly"
    ],
    "description": "face with stuck-out tongue and winking eye",
    "emoticons": [
      ";p",
      ";P",
      ";d",
      ";-p",
      ";-P",
      ";-d"
    ]
  },
  {
    "name": "sunglasses",
    "emoji": "😎",
    "tags": [
      "cool"
    ],
    "description": "smiling face with sunglasses",
    "emoticons": [
      "8)",
      "8]",
      "8D",
      "8-)",
      "8-]",
      "8-D",
      "B)",
      "B]",
      "B-)",
      "B-]",
      "B-D"
    ]
  },
  {
    "name": "sweat",
    "emoji": "😓",
    "tags": [],
    "description": "face with cold sweat",
    "emoticons": [
      ",:(",
      ",:[",
      ",:-(",
      ",:-[",
      ",=(",
      ",=[",
      ",=-(",
      ",=-[",
      "':(",
      "':[",
      "':-(",
      "':-[",
      "'=(",
      "'=[",
      "'=-(",
      "'=-["
    ]
  },
  {
    "name": "sweat_smile",
    "emoji": "😅",
    "tags": [
      "hot"
    ],
    "description": "smiling face with open mouth and cold sweat",
    "emoticons": [
      ",:)",
      ",:]",
      ",:D",
      ",:-)",
      ",:-]",
      ",:-D",
      ",=)",
      ",=]",
      ",=D",
      ",=-)",
      ",=-]",
      ",=-D",
      "':)",
      "':]",
      "':D",
      "':-)",
      "':-]",
      "':-D",
      "'=)",
      "'=]",
      "'=D",
      "'=-)",
      "'=-]",
      "'=-D"
    ]
  },
  {
    "name": "unamused",
    "emoji": "😒",
    "tags": [
      "meh"
    ],
    "description": "unamused face",
    "emoticons": [
      ":$",
      ":s",
      ":z",
      ":S",
      ":Z",
      ":-$",
      ":-s",
      ":-z",
      ":-S",
      ":-Z",
      "=$",
      "=s",
      "=z",
      "=S",
      "=Z",
      "=-$",
      "=-s",
      "=-z",
      "=-S",
      "=-Z"
    ]
  },
  {
    "name": "wink",
    "emoji": "😉",
    "tags": [
      "flirt"
    ],
    "description": "winking face",
    "emoticons": [
      ";)",
      ";]",
      ";D",
      ";-)",
      ";-]",
      ";-D"
    ]
  }
]

},{}],5:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],6:[function(require,module,exports){
'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) {/**/}

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0],
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


},{}],7:[function(require,module,exports){
var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],8:[function(require,module,exports){
var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":7}],9:[function(require,module,exports){
var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":8}],10:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],11:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],12:[function(require,module,exports){
'use strict';

/* Dependencies. */
var modifier = require('unist-util-modify-children');

/* Expose. */
module.exports = modifier(mergeAffixEmoticon);

/* Constants: node types. */
var EMOTICON_NODE = 'EmoticonNode';

/* Merge emoticons into an `EmoticonNode`. */
function mergeAffixEmoticon(child, index, parent) {
  var children = child.children;
  var position;
  var node;
  var prev;

  if (children && children.length !== 0 && index !== 0) {
    position = -1;

    while (children[++position]) {
      node = children[position];

      if (node.type === EMOTICON_NODE) {
        prev = parent.children[index - 1];

        prev.children = prev.children.concat(
          children.slice(0, position + 1)
        );

        child.children = children.slice(position + 1);

        if (node.position && child.position && prev.position) {
          prev.position.end = child.position.start = node.position.end;
        }

        /* Next, iterate over the node again. */
        return index;
      }

      if (node.type !== 'WhiteSpaceNode') {
        break;
      }
    }
  }
}

},{"unist-util-modify-children":55}],13:[function(require,module,exports){
'use strict';

/* Dependencies. */
var has = require('has');
var toString = require('nlcst-to-string');
var modifier = require('unist-util-modify-children');
var gemoji = require('gemoji');

/* Expose. */
module.exports = modifier(mergeEmoji);

/* Node types. */
var EMOTICON_NODE = 'EmoticonNode';

/* Magic numbers.
 *
 * Gemoji's are treated by a parser as multiple nodes.
 * Because this modifier walks backwards, the first colon
 * never matches a gemoji it would normaly walk back to
 * the beginning (the first node). However, because the
 * longest gemoji is tokenized as `Punctuation` (`:`),
 * `Punctuation` (`+`), `Word` (`1`), and `Punctuation`
 * (`:`), we can safely break when the modifier walked
 * back more than 4 times. */
var MAX_GEMOJI_PART_COUNT = 12;

/* Constants. */
var shortcodes = [];
var unicodes = gemoji.unicode;
var byName = gemoji.name;
var key;

for (key in byName) {
  shortcodes.push(':' + key + ':');
}

/* Merge emoji and github-emoji (punctuation marks,
 * symbols, and words) into an `EmoticonNode`. */
function mergeEmoji(child, index, parent) {
  var siblings = parent.children;
  var siblingIndex;
  var node;
  var nodes;
  var value;
  var subvalue;
  var left;
  var right;
  var leftMatch;
  var rightMatch;
  var start;
  var pos;
  var end;
  var replace;

  if (child.type === 'WordNode') {
    value = toString(child);

    /* Sometimes a unicode emoji is marked as a
     * word. Mark it as an `EmoticonNode`. */
    if (has(unicodes, value)) {
      node = {type: EMOTICON_NODE, value: value};

      if (child.position) {
        node.position = child.position;
      }

      siblings[index] = node;
    } else {
      /* Sometimes a unicode emoji is split in two.
       * Remove the last and add its value to
       * the first. */
      node = siblings[index - 1];

      if (node && has(unicodes, toString(node) + value)) {
        node.type = EMOTICON_NODE;
        node.value = toString(node) + value;

        if (child.position && node.position) {
          node.position.end = child.position.end;
        }

        siblings.splice(index, 1);

        return index;
      }
    }
  } else if (has(unicodes, toString(child))) {
    child.type = EMOTICON_NODE;
  } else if (toString(child).charAt(0) === ':') {
    nodes = [];
    siblingIndex = index;
    subvalue = toString(child);
    left = right = leftMatch = rightMatch = null;

    if (subvalue.length === 1) {
      rightMatch = child;
    } else {
      end = child.position && child.position.end;
      start = end && child.position.start;
      pos = end && {
        line: start.line,
        column: start.column + 1,
        offset: start.offset + 1
      };

      rightMatch = {
        type: 'PunctuationNode',
        value: ':'
      };

      right = {
        type: 'PunctuationNode',
        value: subvalue.slice(1)
      };

      if (end) {
        rightMatch.position = {start: start, end: pos};
        right.position = {start: pos, end: end};
      }
    }

    while (siblingIndex--) {
      if ((index - siblingIndex) > MAX_GEMOJI_PART_COUNT) {
        return;
      }

      node = siblings[siblingIndex];

      subvalue = toString(node);

      if (subvalue.charAt(subvalue.length - 1) === ':') {
        leftMatch = node;
        break;
      }

      if (node.children) {
        nodes = nodes.concat(node.children.concat().reverse());
      } else {
        nodes.push(node);
      }

      if (siblingIndex === 0) {
        return;
      }
    }

    if (!leftMatch) {
      return;
    }

    subvalue = toString(leftMatch);

    if (subvalue.length !== 1) {
      end = leftMatch.position && leftMatch.position.end;
      start = end && leftMatch.position.start;
      pos = end && {
        line: end.line,
        column: end.column - 1,
        offset: end.offset - 1
      };

      left = {
        type: 'PunctuationNode',
        value: subvalue.slice(0, -1)
      };

      leftMatch = {
        type: 'PunctuationNode',
        value: ':'
      };

      if (end) {
        left.position = {start: start, end: pos};
        leftMatch.position = {start: pos, end: end};
      }
    }

    nodes.push(leftMatch);
    nodes.reverse().push(rightMatch);

    value = toString(nodes);

    if (shortcodes.indexOf(value) === -1) {
      return;
    }

    replace = [
      siblingIndex,
      index - siblingIndex + 1
    ];

    if (left) {
      replace.push(left);
    }

    child.type = EMOTICON_NODE;
    child.value = value;

    if (child.position && leftMatch.position) {
      child.position.start = leftMatch.position.start;
    }

    if (child.position && rightMatch.position) {
      child.position.end = rightMatch.position.end;
    }

    replace.push(child);

    if (right) {
      replace.push(right);
    }

    [].splice.apply(siblings, replace);

    return siblingIndex + 3;
  }
}

},{"gemoji":15,"has":9,"nlcst-to-string":17,"unist-util-modify-children":55}],14:[function(require,module,exports){
module.exports={
  "😄": {
    "description": "smiling face with open mouth and smiling eyes",
    "names": [
      "smile"
    ],
    "tags": [
      "happy",
      "joy",
      "pleased"
    ]
  },
  "😃": {
    "description": "smiling face with open mouth",
    "names": [
      "smiley"
    ],
    "tags": [
      "happy",
      "joy",
      "haha"
    ]
  },
  "😀": {
    "description": "grinning face",
    "names": [
      "grinning"
    ],
    "tags": [
      "smile",
      "happy"
    ]
  },
  "😊": {
    "description": "smiling face with smiling eyes",
    "names": [
      "blush"
    ],
    "tags": [
      "proud"
    ]
  },
  "☺️": {
    "description": "white smiling face",
    "names": [
      "relaxed"
    ],
    "tags": [
      "blush",
      "pleased"
    ]
  },
  "😉": {
    "description": "winking face",
    "names": [
      "wink"
    ],
    "tags": [
      "flirt"
    ]
  },
  "😍": {
    "description": "smiling face with heart-shaped eyes",
    "names": [
      "heart_eyes"
    ],
    "tags": [
      "love",
      "crush"
    ]
  },
  "😘": {
    "description": "face throwing a kiss",
    "names": [
      "kissing_heart"
    ],
    "tags": [
      "flirt"
    ]
  },
  "😚": {
    "description": "kissing face with closed eyes",
    "names": [
      "kissing_closed_eyes"
    ],
    "tags": []
  },
  "😗": {
    "description": "kissing face",
    "names": [
      "kissing"
    ],
    "tags": []
  },
  "😙": {
    "description": "kissing face with smiling eyes",
    "names": [
      "kissing_smiling_eyes"
    ],
    "tags": []
  },
  "😜": {
    "description": "face with stuck-out tongue and winking eye",
    "names": [
      "stuck_out_tongue_winking_eye"
    ],
    "tags": [
      "prank",
      "silly"
    ]
  },
  "😝": {
    "description": "face with stuck-out tongue and tightly-closed eyes",
    "names": [
      "stuck_out_tongue_closed_eyes"
    ],
    "tags": [
      "prank"
    ]
  },
  "😛": {
    "description": "face with stuck-out tongue",
    "names": [
      "stuck_out_tongue"
    ],
    "tags": []
  },
  "😳": {
    "description": "flushed face",
    "names": [
      "flushed"
    ],
    "tags": []
  },
  "😁": {
    "description": "grinning face with smiling eyes",
    "names": [
      "grin"
    ],
    "tags": []
  },
  "😔": {
    "description": "pensive face",
    "names": [
      "pensive"
    ],
    "tags": []
  },
  "😌": {
    "description": "relieved face",
    "names": [
      "relieved"
    ],
    "tags": [
      "whew"
    ]
  },
  "😒": {
    "description": "unamused face",
    "names": [
      "unamused"
    ],
    "tags": [
      "meh"
    ]
  },
  "😞": {
    "description": "disappointed face",
    "names": [
      "disappointed"
    ],
    "tags": [
      "sad"
    ]
  },
  "😣": {
    "description": "persevering face",
    "names": [
      "persevere"
    ],
    "tags": [
      "struggling"
    ]
  },
  "😢": {
    "description": "crying face",
    "names": [
      "cry"
    ],
    "tags": [
      "sad",
      "tear"
    ]
  },
  "😂": {
    "description": "face with tears of joy",
    "names": [
      "joy"
    ],
    "tags": [
      "tears"
    ]
  },
  "😭": {
    "description": "loudly crying face",
    "names": [
      "sob"
    ],
    "tags": [
      "sad",
      "cry",
      "bawling"
    ]
  },
  "😪": {
    "description": "sleepy face",
    "names": [
      "sleepy"
    ],
    "tags": [
      "tired"
    ]
  },
  "😥": {
    "description": "disappointed but relieved face",
    "names": [
      "disappointed_relieved"
    ],
    "tags": [
      "phew",
      "sweat",
      "nervous"
    ]
  },
  "😰": {
    "description": "face with open mouth and cold sweat",
    "names": [
      "cold_sweat"
    ],
    "tags": [
      "nervous"
    ]
  },
  "😅": {
    "description": "smiling face with open mouth and cold sweat",
    "names": [
      "sweat_smile"
    ],
    "tags": [
      "hot"
    ]
  },
  "😓": {
    "description": "face with cold sweat",
    "names": [
      "sweat"
    ],
    "tags": []
  },
  "😩": {
    "description": "weary face",
    "names": [
      "weary"
    ],
    "tags": [
      "tired"
    ]
  },
  "😫": {
    "description": "tired face",
    "names": [
      "tired_face"
    ],
    "tags": [
      "upset",
      "whine"
    ]
  },
  "😨": {
    "description": "fearful face",
    "names": [
      "fearful"
    ],
    "tags": [
      "scared",
      "shocked",
      "oops"
    ]
  },
  "😱": {
    "description": "face screaming in fear",
    "names": [
      "scream"
    ],
    "tags": [
      "horror",
      "shocked"
    ]
  },
  "😠": {
    "description": "angry face",
    "names": [
      "angry"
    ],
    "tags": [
      "mad",
      "annoyed"
    ]
  },
  "😡": {
    "description": "pouting face",
    "names": [
      "rage",
      "pout"
    ],
    "tags": [
      "angry"
    ]
  },
  "😤": {
    "description": "face with look of triumph",
    "names": [
      "triumph"
    ],
    "tags": [
      "smug"
    ]
  },
  "😖": {
    "description": "confounded face",
    "names": [
      "confounded"
    ],
    "tags": []
  },
  "😆": {
    "description": "smiling face with open mouth and tightly-closed eyes",
    "names": [
      "laughing",
      "satisfied"
    ],
    "tags": [
      "happy",
      "haha"
    ]
  },
  "😋": {
    "description": "face savouring delicious food",
    "names": [
      "yum"
    ],
    "tags": [
      "tongue",
      "lick"
    ]
  },
  "😷": {
    "description": "face with medical mask",
    "names": [
      "mask"
    ],
    "tags": [
      "sick",
      "ill"
    ]
  },
  "😎": {
    "description": "smiling face with sunglasses",
    "names": [
      "sunglasses"
    ],
    "tags": [
      "cool"
    ]
  },
  "😴": {
    "description": "sleeping face",
    "names": [
      "sleeping"
    ],
    "tags": [
      "zzz"
    ]
  },
  "😵": {
    "description": "dizzy face",
    "names": [
      "dizzy_face"
    ],
    "tags": []
  },
  "😲": {
    "description": "astonished face",
    "names": [
      "astonished"
    ],
    "tags": [
      "amazed",
      "gasp"
    ]
  },
  "😟": {
    "description": "worried face",
    "names": [
      "worried"
    ],
    "tags": [
      "nervous"
    ]
  },
  "😦": {
    "description": "frowning face with open mouth",
    "names": [
      "frowning"
    ],
    "tags": []
  },
  "😧": {
    "description": "anguished face",
    "names": [
      "anguished"
    ],
    "tags": [
      "stunned"
    ]
  },
  "😈": {
    "description": "smiling face with horns",
    "names": [
      "smiling_imp"
    ],
    "tags": [
      "devil",
      "evil",
      "horns"
    ]
  },
  "👿": {
    "description": "imp",
    "names": [
      "imp"
    ],
    "tags": [
      "angry",
      "devil",
      "evil",
      "horns"
    ]
  },
  "😮": {
    "description": "face with open mouth",
    "names": [
      "open_mouth"
    ],
    "tags": [
      "surprise",
      "impressed",
      "wow"
    ]
  },
  "😬": {
    "description": "grimacing face",
    "names": [
      "grimacing"
    ],
    "tags": []
  },
  "😐": {
    "description": "neutral face",
    "names": [
      "neutral_face"
    ],
    "tags": [
      "meh"
    ]
  },
  "😕": {
    "description": "confused face",
    "names": [
      "confused"
    ],
    "tags": []
  },
  "😯": {
    "description": "hushed face",
    "names": [
      "hushed"
    ],
    "tags": [
      "silence",
      "speechless"
    ]
  },
  "😶": {
    "description": "face without mouth",
    "names": [
      "no_mouth"
    ],
    "tags": [
      "mute",
      "silence"
    ]
  },
  "😇": {
    "description": "smiling face with halo",
    "names": [
      "innocent"
    ],
    "tags": [
      "angel"
    ]
  },
  "😏": {
    "description": "smirking face",
    "names": [
      "smirk"
    ],
    "tags": [
      "smug"
    ]
  },
  "😑": {
    "description": "expressionless face",
    "names": [
      "expressionless"
    ],
    "tags": []
  },
  "👲": {
    "description": "man with gua pi mao",
    "names": [
      "man_with_gua_pi_mao"
    ],
    "tags": []
  },
  "👳": {
    "description": "man with turban",
    "names": [
      "man_with_turban"
    ],
    "tags": []
  },
  "👮": {
    "description": "police officer",
    "names": [
      "cop"
    ],
    "tags": [
      "police",
      "law"
    ]
  },
  "👷": {
    "description": "construction worker",
    "names": [
      "construction_worker"
    ],
    "tags": [
      "helmet"
    ]
  },
  "💂": {
    "description": "guardsman",
    "names": [
      "guardsman"
    ],
    "tags": []
  },
  "👶": {
    "description": "baby",
    "names": [
      "baby"
    ],
    "tags": [
      "child",
      "newborn"
    ]
  },
  "👦": {
    "description": "boy",
    "names": [
      "boy"
    ],
    "tags": [
      "child"
    ]
  },
  "👧": {
    "description": "girl",
    "names": [
      "girl"
    ],
    "tags": [
      "child"
    ]
  },
  "👨": {
    "description": "man",
    "names": [
      "man"
    ],
    "tags": [
      "mustache",
      "father",
      "dad"
    ]
  },
  "👩": {
    "description": "woman",
    "names": [
      "woman"
    ],
    "tags": [
      "girls"
    ]
  },
  "👴": {
    "description": "older man",
    "names": [
      "older_man"
    ],
    "tags": []
  },
  "👵": {
    "description": "older woman",
    "names": [
      "older_woman"
    ],
    "tags": []
  },
  "👱": {
    "description": "person with blond hair",
    "names": [
      "person_with_blond_hair"
    ],
    "tags": [
      "boy"
    ]
  },
  "👼": {
    "description": "baby angel",
    "names": [
      "angel"
    ],
    "tags": []
  },
  "👸": {
    "description": "princess",
    "names": [
      "princess"
    ],
    "tags": [
      "blonde",
      "crown",
      "royal"
    ]
  },
  "😺": {
    "description": "smiling cat face with open mouth",
    "names": [
      "smiley_cat"
    ],
    "tags": []
  },
  "😸": {
    "description": "grinning cat face with smiling eyes",
    "names": [
      "smile_cat"
    ],
    "tags": []
  },
  "😻": {
    "description": "smiling cat face with heart-shaped eyes",
    "names": [
      "heart_eyes_cat"
    ],
    "tags": []
  },
  "😽": {
    "description": "kissing cat face with closed eyes",
    "names": [
      "kissing_cat"
    ],
    "tags": []
  },
  "😼": {
    "description": "cat face with wry smile",
    "names": [
      "smirk_cat"
    ],
    "tags": []
  },
  "🙀": {
    "description": "weary cat face",
    "names": [
      "scream_cat"
    ],
    "tags": [
      "horror"
    ]
  },
  "😿": {
    "description": "crying cat face",
    "names": [
      "crying_cat_face"
    ],
    "tags": [
      "sad",
      "tear"
    ]
  },
  "😹": {
    "description": "cat face with tears of joy",
    "names": [
      "joy_cat"
    ],
    "tags": []
  },
  "😾": {
    "description": "pouting cat face",
    "names": [
      "pouting_cat"
    ],
    "tags": []
  },
  "👹": {
    "description": "japanese ogre",
    "names": [
      "japanese_ogre"
    ],
    "tags": [
      "monster"
    ]
  },
  "👺": {
    "description": "japanese goblin",
    "names": [
      "japanese_goblin"
    ],
    "tags": []
  },
  "🙈": {
    "description": "see-no-evil monkey",
    "names": [
      "see_no_evil"
    ],
    "tags": [
      "monkey",
      "blind",
      "ignore"
    ]
  },
  "🙉": {
    "description": "hear-no-evil monkey",
    "names": [
      "hear_no_evil"
    ],
    "tags": [
      "monkey",
      "deaf"
    ]
  },
  "🙊": {
    "description": "speak-no-evil monkey",
    "names": [
      "speak_no_evil"
    ],
    "tags": [
      "monkey",
      "mute",
      "hush"
    ]
  },
  "💀": {
    "description": "skull",
    "names": [
      "skull"
    ],
    "tags": [
      "dead",
      "danger",
      "poison"
    ]
  },
  "👽": {
    "description": "extraterrestrial alien",
    "names": [
      "alien"
    ],
    "tags": [
      "ufo"
    ]
  },
  "💩": {
    "description": "pile of poo",
    "names": [
      "hankey",
      "poop",
      "shit"
    ],
    "tags": [
      "crap"
    ]
  },
  "🔥": {
    "description": "fire",
    "names": [
      "fire"
    ],
    "tags": [
      "burn"
    ]
  },
  "✨": {
    "description": "sparkles",
    "names": [
      "sparkles"
    ],
    "tags": [
      "shiny"
    ]
  },
  "🌟": {
    "description": "glowing star",
    "names": [
      "star2"
    ],
    "tags": []
  },
  "💫": {
    "description": "dizzy symbol",
    "names": [
      "dizzy"
    ],
    "tags": [
      "star"
    ]
  },
  "💥": {
    "description": "collision symbol",
    "names": [
      "boom",
      "collision"
    ],
    "tags": [
      "explode"
    ]
  },
  "💢": {
    "description": "anger symbol",
    "names": [
      "anger"
    ],
    "tags": [
      "angry"
    ]
  },
  "💦": {
    "description": "splashing sweat symbol",
    "names": [
      "sweat_drops"
    ],
    "tags": [
      "water",
      "workout"
    ]
  },
  "💧": {
    "description": "droplet",
    "names": [
      "droplet"
    ],
    "tags": [
      "water"
    ]
  },
  "💤": {
    "description": "sleeping symbol",
    "names": [
      "zzz"
    ],
    "tags": [
      "sleeping"
    ]
  },
  "💨": {
    "description": "dash symbol",
    "names": [
      "dash"
    ],
    "tags": [
      "wind",
      "blow",
      "fast"
    ]
  },
  "👂": {
    "description": "ear",
    "names": [
      "ear"
    ],
    "tags": [
      "hear",
      "sound",
      "listen"
    ]
  },
  "👀": {
    "description": "eyes",
    "names": [
      "eyes"
    ],
    "tags": [
      "look",
      "see",
      "watch"
    ]
  },
  "👃": {
    "description": "nose",
    "names": [
      "nose"
    ],
    "tags": [
      "smell"
    ]
  },
  "👅": {
    "description": "tongue",
    "names": [
      "tongue"
    ],
    "tags": [
      "taste"
    ]
  },
  "👄": {
    "description": "mouth",
    "names": [
      "lips"
    ],
    "tags": [
      "kiss"
    ]
  },
  "👍": {
    "description": "thumbs up sign",
    "names": [
      "+1",
      "thumbsup"
    ],
    "tags": [
      "approve",
      "ok"
    ]
  },
  "👎": {
    "description": "thumbs down sign",
    "names": [
      "-1",
      "thumbsdown"
    ],
    "tags": [
      "disapprove",
      "bury"
    ]
  },
  "👌": {
    "description": "ok hand sign",
    "names": [
      "ok_hand"
    ],
    "tags": []
  },
  "👊": {
    "description": "fisted hand sign",
    "names": [
      "facepunch",
      "punch"
    ],
    "tags": [
      "attack"
    ]
  },
  "✊": {
    "description": "raised fist",
    "names": [
      "fist"
    ],
    "tags": [
      "power"
    ]
  },
  "✌️": {
    "description": "victory hand",
    "names": [
      "v"
    ],
    "tags": [
      "victory",
      "peace"
    ]
  },
  "👋": {
    "description": "waving hand sign",
    "names": [
      "wave"
    ],
    "tags": [
      "goodbye"
    ]
  },
  "✋": {
    "description": "raised hand",
    "names": [
      "hand",
      "raised_hand"
    ],
    "tags": [
      "highfive",
      "stop"
    ]
  },
  "👐": {
    "description": "open hands sign",
    "names": [
      "open_hands"
    ],
    "tags": []
  },
  "👆": {
    "description": "white up pointing backhand index",
    "names": [
      "point_up_2"
    ],
    "tags": []
  },
  "👇": {
    "description": "white down pointing backhand index",
    "names": [
      "point_down"
    ],
    "tags": []
  },
  "👉": {
    "description": "white right pointing backhand index",
    "names": [
      "point_right"
    ],
    "tags": []
  },
  "👈": {
    "description": "white left pointing backhand index",
    "names": [
      "point_left"
    ],
    "tags": []
  },
  "🙌": {
    "description": "person raising both hands in celebration",
    "names": [
      "raised_hands"
    ],
    "tags": [
      "hooray"
    ]
  },
  "🙏": {
    "description": "person with folded hands",
    "names": [
      "pray"
    ],
    "tags": [
      "please",
      "hope",
      "wish"
    ]
  },
  "☝️": {
    "description": "white up pointing index",
    "names": [
      "point_up"
    ],
    "tags": []
  },
  "👏": {
    "description": "clapping hands sign",
    "names": [
      "clap"
    ],
    "tags": [
      "praise",
      "applause"
    ]
  },
  "💪": {
    "description": "flexed biceps",
    "names": [
      "muscle"
    ],
    "tags": [
      "flex",
      "bicep",
      "strong",
      "workout"
    ]
  },
  "🚶": {
    "description": "pedestrian",
    "names": [
      "walking"
    ],
    "tags": []
  },
  "🏃": {
    "description": "runner",
    "names": [
      "runner",
      "running"
    ],
    "tags": [
      "exercise",
      "workout",
      "marathon"
    ]
  },
  "💃": {
    "description": "dancer",
    "names": [
      "dancer"
    ],
    "tags": [
      "dress"
    ]
  },
  "👫": {
    "description": "man and woman holding hands",
    "names": [
      "couple"
    ],
    "tags": [
      "date"
    ]
  },
  "👪": {
    "description": "family",
    "names": [
      "family"
    ],
    "tags": [
      "home",
      "parents",
      "child"
    ]
  },
  "👬": {
    "description": "two men holding hands",
    "names": [
      "two_men_holding_hands"
    ],
    "tags": [
      "couple",
      "date"
    ]
  },
  "👭": {
    "description": "two women holding hands",
    "names": [
      "two_women_holding_hands"
    ],
    "tags": [
      "couple",
      "date"
    ]
  },
  "💏": {
    "description": "kiss",
    "names": [
      "couplekiss"
    ],
    "tags": []
  },
  "💑": {
    "description": "couple with heart",
    "names": [
      "couple_with_heart"
    ],
    "tags": []
  },
  "👯": {
    "description": "woman with bunny ears",
    "names": [
      "dancers"
    ],
    "tags": [
      "bunny"
    ]
  },
  "🙆": {
    "description": "face with ok gesture",
    "names": [
      "ok_woman"
    ],
    "tags": []
  },
  "🙅": {
    "description": "face with no good gesture",
    "names": [
      "no_good",
      "ng_woman"
    ],
    "tags": [
      "stop",
      "halt"
    ]
  },
  "💁": {
    "description": "information desk person",
    "names": [
      "information_desk_person"
    ],
    "tags": []
  },
  "🙋": {
    "description": "happy person raising one hand",
    "names": [
      "raising_hand"
    ],
    "tags": []
  },
  "💆": {
    "description": "face massage",
    "names": [
      "massage"
    ],
    "tags": [
      "spa"
    ]
  },
  "💇": {
    "description": "haircut",
    "names": [
      "haircut"
    ],
    "tags": [
      "beauty"
    ]
  },
  "💅": {
    "description": "nail polish",
    "names": [
      "nail_care"
    ],
    "tags": [
      "beauty",
      "manicure"
    ]
  },
  "👰": {
    "description": "bride with veil",
    "names": [
      "bride_with_veil"
    ],
    "tags": [
      "marriage",
      "wedding"
    ]
  },
  "🙎": {
    "description": "person with pouting face",
    "names": [
      "person_with_pouting_face"
    ],
    "tags": []
  },
  "🙍": {
    "description": "person frowning",
    "names": [
      "person_frowning"
    ],
    "tags": [
      "sad"
    ]
  },
  "🙇": {
    "description": "person bowing deeply",
    "names": [
      "bow"
    ],
    "tags": [
      "respect",
      "thanks"
    ]
  },
  "🎩": {
    "description": "top hat",
    "names": [
      "tophat"
    ],
    "tags": [
      "hat",
      "classy"
    ]
  },
  "👑": {
    "description": "crown",
    "names": [
      "crown"
    ],
    "tags": [
      "king",
      "queen",
      "royal"
    ]
  },
  "👒": {
    "description": "womans hat",
    "names": [
      "womans_hat"
    ],
    "tags": []
  },
  "👟": {
    "description": "athletic shoe",
    "names": [
      "athletic_shoe"
    ],
    "tags": [
      "sneaker",
      "sport",
      "running"
    ]
  },
  "👞": {
    "description": "mans shoe",
    "names": [
      "mans_shoe",
      "shoe"
    ],
    "tags": []
  },
  "👡": {
    "description": "womans sandal",
    "names": [
      "sandal"
    ],
    "tags": [
      "shoe"
    ]
  },
  "👠": {
    "description": "high-heeled shoe",
    "names": [
      "high_heel"
    ],
    "tags": [
      "shoe"
    ]
  },
  "👢": {
    "description": "womans boots",
    "names": [
      "boot"
    ],
    "tags": []
  },
  "👕": {
    "description": "t-shirt",
    "names": [
      "shirt",
      "tshirt"
    ],
    "tags": []
  },
  "👔": {
    "description": "necktie",
    "names": [
      "necktie"
    ],
    "tags": [
      "shirt",
      "formal"
    ]
  },
  "👚": {
    "description": "womans clothes",
    "names": [
      "womans_clothes"
    ],
    "tags": []
  },
  "👗": {
    "description": "dress",
    "names": [
      "dress"
    ],
    "tags": []
  },
  "🎽": {
    "description": "running shirt with sash",
    "names": [
      "running_shirt_with_sash"
    ],
    "tags": [
      "marathon"
    ]
  },
  "👖": {
    "description": "jeans",
    "names": [
      "jeans"
    ],
    "tags": [
      "pants"
    ]
  },
  "👘": {
    "description": "kimono",
    "names": [
      "kimono"
    ],
    "tags": []
  },
  "👙": {
    "description": "bikini",
    "names": [
      "bikini"
    ],
    "tags": [
      "beach"
    ]
  },
  "💼": {
    "description": "briefcase",
    "names": [
      "briefcase"
    ],
    "tags": [
      "business"
    ]
  },
  "👜": {
    "description": "handbag",
    "names": [
      "handbag"
    ],
    "tags": [
      "bag"
    ]
  },
  "👝": {
    "description": "pouch",
    "names": [
      "pouch"
    ],
    "tags": [
      "bag"
    ]
  },
  "👛": {
    "description": "purse",
    "names": [
      "purse"
    ],
    "tags": []
  },
  "👓": {
    "description": "eyeglasses",
    "names": [
      "eyeglasses"
    ],
    "tags": [
      "glasses"
    ]
  },
  "🎀": {
    "description": "ribbon",
    "names": [
      "ribbon"
    ],
    "tags": []
  },
  "🌂": {
    "description": "closed umbrella",
    "names": [
      "closed_umbrella"
    ],
    "tags": [
      "weather",
      "rain"
    ]
  },
  "💄": {
    "description": "lipstick",
    "names": [
      "lipstick"
    ],
    "tags": [
      "makeup"
    ]
  },
  "💛": {
    "description": "yellow heart",
    "names": [
      "yellow_heart"
    ],
    "tags": []
  },
  "💙": {
    "description": "blue heart",
    "names": [
      "blue_heart"
    ],
    "tags": []
  },
  "💜": {
    "description": "purple heart",
    "names": [
      "purple_heart"
    ],
    "tags": []
  },
  "💚": {
    "description": "green heart",
    "names": [
      "green_heart"
    ],
    "tags": []
  },
  "❤️": {
    "description": "heavy black heart",
    "names": [
      "heart"
    ],
    "tags": [
      "love"
    ]
  },
  "💔": {
    "description": "broken heart",
    "names": [
      "broken_heart"
    ],
    "tags": []
  },
  "💗": {
    "description": "growing heart",
    "names": [
      "heartpulse"
    ],
    "tags": []
  },
  "💓": {
    "description": "beating heart",
    "names": [
      "heartbeat"
    ],
    "tags": []
  },
  "💕": {
    "description": "two hearts",
    "names": [
      "two_hearts"
    ],
    "tags": []
  },
  "💖": {
    "description": "sparkling heart",
    "names": [
      "sparkling_heart"
    ],
    "tags": []
  },
  "💞": {
    "description": "revolving hearts",
    "names": [
      "revolving_hearts"
    ],
    "tags": []
  },
  "💘": {
    "description": "heart with arrow",
    "names": [
      "cupid"
    ],
    "tags": [
      "love",
      "heart"
    ]
  },
  "💌": {
    "description": "love letter",
    "names": [
      "love_letter"
    ],
    "tags": [
      "email",
      "envelope"
    ]
  },
  "💋": {
    "description": "kiss mark",
    "names": [
      "kiss"
    ],
    "tags": [
      "lipstick"
    ]
  },
  "💍": {
    "description": "ring",
    "names": [
      "ring"
    ],
    "tags": [
      "wedding",
      "marriage",
      "engaged"
    ]
  },
  "💎": {
    "description": "gem stone",
    "names": [
      "gem"
    ],
    "tags": [
      "diamond"
    ]
  },
  "👤": {
    "description": "bust in silhouette",
    "names": [
      "bust_in_silhouette"
    ],
    "tags": [
      "user"
    ]
  },
  "👥": {
    "description": "busts in silhouette",
    "names": [
      "busts_in_silhouette"
    ],
    "tags": [
      "users",
      "group",
      "team"
    ]
  },
  "💬": {
    "description": "speech balloon",
    "names": [
      "speech_balloon"
    ],
    "tags": [
      "comment"
    ]
  },
  "👣": {
    "description": "footprints",
    "names": [
      "footprints"
    ],
    "tags": [
      "feet",
      "tracks"
    ]
  },
  "💭": {
    "description": "thought balloon",
    "names": [
      "thought_balloon"
    ],
    "tags": [
      "thinking"
    ]
  },
  "🐶": {
    "description": "dog face",
    "names": [
      "dog"
    ],
    "tags": [
      "pet"
    ]
  },
  "🐺": {
    "description": "wolf face",
    "names": [
      "wolf"
    ],
    "tags": []
  },
  "🐱": {
    "description": "cat face",
    "names": [
      "cat"
    ],
    "tags": [
      "pet"
    ]
  },
  "🐭": {
    "description": "mouse face",
    "names": [
      "mouse"
    ],
    "tags": []
  },
  "🐹": {
    "description": "hamster face",
    "names": [
      "hamster"
    ],
    "tags": [
      "pet"
    ]
  },
  "🐰": {
    "description": "rabbit face",
    "names": [
      "rabbit"
    ],
    "tags": [
      "bunny"
    ]
  },
  "🐸": {
    "description": "frog face",
    "names": [
      "frog"
    ],
    "tags": []
  },
  "🐯": {
    "description": "tiger face",
    "names": [
      "tiger"
    ],
    "tags": []
  },
  "🐨": {
    "description": "koala",
    "names": [
      "koala"
    ],
    "tags": []
  },
  "🐻": {
    "description": "bear face",
    "names": [
      "bear"
    ],
    "tags": []
  },
  "🐷": {
    "description": "pig face",
    "names": [
      "pig"
    ],
    "tags": []
  },
  "🐽": {
    "description": "pig nose",
    "names": [
      "pig_nose"
    ],
    "tags": []
  },
  "🐮": {
    "description": "cow face",
    "names": [
      "cow"
    ],
    "tags": []
  },
  "🐗": {
    "description": "boar",
    "names": [
      "boar"
    ],
    "tags": []
  },
  "🐵": {
    "description": "monkey face",
    "names": [
      "monkey_face"
    ],
    "tags": []
  },
  "🐒": {
    "description": "monkey",
    "names": [
      "monkey"
    ],
    "tags": []
  },
  "🐴": {
    "description": "horse face",
    "names": [
      "horse"
    ],
    "tags": []
  },
  "🐑": {
    "description": "sheep",
    "names": [
      "sheep"
    ],
    "tags": []
  },
  "🐘": {
    "description": "elephant",
    "names": [
      "elephant"
    ],
    "tags": []
  },
  "🐼": {
    "description": "panda face",
    "names": [
      "panda_face"
    ],
    "tags": []
  },
  "🐧": {
    "description": "penguin",
    "names": [
      "penguin"
    ],
    "tags": []
  },
  "🐦": {
    "description": "bird",
    "names": [
      "bird"
    ],
    "tags": []
  },
  "🐤": {
    "description": "baby chick",
    "names": [
      "baby_chick"
    ],
    "tags": []
  },
  "🐥": {
    "description": "front-facing baby chick",
    "names": [
      "hatched_chick"
    ],
    "tags": []
  },
  "🐣": {
    "description": "hatching chick",
    "names": [
      "hatching_chick"
    ],
    "tags": []
  },
  "🐔": {
    "description": "chicken",
    "names": [
      "chicken"
    ],
    "tags": []
  },
  "🐍": {
    "description": "snake",
    "names": [
      "snake"
    ],
    "tags": []
  },
  "🐢": {
    "description": "turtle",
    "names": [
      "turtle"
    ],
    "tags": [
      "slow"
    ]
  },
  "🐛": {
    "description": "bug",
    "names": [
      "bug"
    ],
    "tags": []
  },
  "🐝": {
    "description": "honeybee",
    "names": [
      "bee",
      "honeybee"
    ],
    "tags": []
  },
  "🐜": {
    "description": "ant",
    "names": [
      "ant"
    ],
    "tags": []
  },
  "🐞": {
    "description": "lady beetle",
    "names": [
      "beetle"
    ],
    "tags": [
      "bug"
    ]
  },
  "🐌": {
    "description": "snail",
    "names": [
      "snail"
    ],
    "tags": [
      "slow"
    ]
  },
  "🐙": {
    "description": "octopus",
    "names": [
      "octopus"
    ],
    "tags": []
  },
  "🐚": {
    "description": "spiral shell",
    "names": [
      "shell"
    ],
    "tags": [
      "sea",
      "beach"
    ]
  },
  "🐠": {
    "description": "tropical fish",
    "names": [
      "tropical_fish"
    ],
    "tags": []
  },
  "🐟": {
    "description": "fish",
    "names": [
      "fish"
    ],
    "tags": []
  },
  "🐬": {
    "description": "dolphin",
    "names": [
      "dolphin",
      "flipper"
    ],
    "tags": []
  },
  "🐳": {
    "description": "spouting whale",
    "names": [
      "whale"
    ],
    "tags": [
      "sea"
    ]
  },
  "🐋": {
    "description": "whale",
    "names": [
      "whale2"
    ],
    "tags": []
  },
  "🐄": {
    "description": "cow",
    "names": [
      "cow2"
    ],
    "tags": []
  },
  "🐏": {
    "description": "ram",
    "names": [
      "ram"
    ],
    "tags": []
  },
  "🐀": {
    "description": "rat",
    "names": [
      "rat"
    ],
    "tags": []
  },
  "🐃": {
    "description": "water buffalo",
    "names": [
      "water_buffalo"
    ],
    "tags": []
  },
  "🐅": {
    "description": "tiger",
    "names": [
      "tiger2"
    ],
    "tags": []
  },
  "🐇": {
    "description": "rabbit",
    "names": [
      "rabbit2"
    ],
    "tags": []
  },
  "🐉": {
    "description": "dragon",
    "names": [
      "dragon"
    ],
    "tags": []
  },
  "🐎": {
    "description": "horse",
    "names": [
      "racehorse"
    ],
    "tags": [
      "speed"
    ]
  },
  "🐐": {
    "description": "goat",
    "names": [
      "goat"
    ],
    "tags": []
  },
  "🐓": {
    "description": "rooster",
    "names": [
      "rooster"
    ],
    "tags": []
  },
  "🐕": {
    "description": "dog",
    "names": [
      "dog2"
    ],
    "tags": []
  },
  "🐖": {
    "description": "pig",
    "names": [
      "pig2"
    ],
    "tags": []
  },
  "🐁": {
    "description": "mouse",
    "names": [
      "mouse2"
    ],
    "tags": []
  },
  "🐂": {
    "description": "ox",
    "names": [
      "ox"
    ],
    "tags": []
  },
  "🐲": {
    "description": "dragon face",
    "names": [
      "dragon_face"
    ],
    "tags": []
  },
  "🐡": {
    "description": "blowfish",
    "names": [
      "blowfish"
    ],
    "tags": []
  },
  "🐊": {
    "description": "crocodile",
    "names": [
      "crocodile"
    ],
    "tags": []
  },
  "🐫": {
    "description": "bactrian camel",
    "names": [
      "camel"
    ],
    "tags": []
  },
  "🐪": {
    "description": "dromedary camel",
    "names": [
      "dromedary_camel"
    ],
    "tags": [
      "desert"
    ]
  },
  "🐆": {
    "description": "leopard",
    "names": [
      "leopard"
    ],
    "tags": []
  },
  "🐈": {
    "description": "cat",
    "names": [
      "cat2"
    ],
    "tags": []
  },
  "🐩": {
    "description": "poodle",
    "names": [
      "poodle"
    ],
    "tags": [
      "dog"
    ]
  },
  "🐾": {
    "description": "paw prints",
    "names": [
      "feet",
      "paw_prints"
    ],
    "tags": []
  },
  "💐": {
    "description": "bouquet",
    "names": [
      "bouquet"
    ],
    "tags": [
      "flowers"
    ]
  },
  "🌸": {
    "description": "cherry blossom",
    "names": [
      "cherry_blossom"
    ],
    "tags": [
      "flower",
      "spring"
    ]
  },
  "🌷": {
    "description": "tulip",
    "names": [
      "tulip"
    ],
    "tags": [
      "flower"
    ]
  },
  "🍀": {
    "description": "four leaf clover",
    "names": [
      "four_leaf_clover"
    ],
    "tags": [
      "luck"
    ]
  },
  "🌹": {
    "description": "rose",
    "names": [
      "rose"
    ],
    "tags": [
      "flower"
    ]
  },
  "🌻": {
    "description": "sunflower",
    "names": [
      "sunflower"
    ],
    "tags": []
  },
  "🌺": {
    "description": "hibiscus",
    "names": [
      "hibiscus"
    ],
    "tags": []
  },
  "🍁": {
    "description": "maple leaf",
    "names": [
      "maple_leaf"
    ],
    "tags": [
      "canada"
    ]
  },
  "🍃": {
    "description": "leaf fluttering in wind",
    "names": [
      "leaves"
    ],
    "tags": [
      "leaf"
    ]
  },
  "🍂": {
    "description": "fallen leaf",
    "names": [
      "fallen_leaf"
    ],
    "tags": [
      "autumn"
    ]
  },
  "🌿": {
    "description": "herb",
    "names": [
      "herb"
    ],
    "tags": []
  },
  "🌾": {
    "description": "ear of rice",
    "names": [
      "ear_of_rice"
    ],
    "tags": []
  },
  "🍄": {
    "description": "mushroom",
    "names": [
      "mushroom"
    ],
    "tags": []
  },
  "🌵": {
    "description": "cactus",
    "names": [
      "cactus"
    ],
    "tags": []
  },
  "🌴": {
    "description": "palm tree",
    "names": [
      "palm_tree"
    ],
    "tags": []
  },
  "🌲": {
    "description": "evergreen tree",
    "names": [
      "evergreen_tree"
    ],
    "tags": [
      "wood"
    ]
  },
  "🌳": {
    "description": "deciduous tree",
    "names": [
      "deciduous_tree"
    ],
    "tags": [
      "wood"
    ]
  },
  "🌰": {
    "description": "chestnut",
    "names": [
      "chestnut"
    ],
    "tags": []
  },
  "🌱": {
    "description": "seedling",
    "names": [
      "seedling"
    ],
    "tags": [
      "plant"
    ]
  },
  "🌼": {
    "description": "blossom",
    "names": [
      "blossom"
    ],
    "tags": []
  },
  "🌐": {
    "description": "globe with meridians",
    "names": [
      "globe_with_meridians"
    ],
    "tags": [
      "world",
      "global",
      "international"
    ]
  },
  "🌞": {
    "description": "sun with face",
    "names": [
      "sun_with_face"
    ],
    "tags": [
      "summer"
    ]
  },
  "🌝": {
    "description": "full moon with face",
    "names": [
      "full_moon_with_face"
    ],
    "tags": []
  },
  "🌚": {
    "description": "new moon with face",
    "names": [
      "new_moon_with_face"
    ],
    "tags": []
  },
  "🌑": {
    "description": "new moon symbol",
    "names": [
      "new_moon"
    ],
    "tags": []
  },
  "🌒": {
    "description": "waxing crescent moon symbol",
    "names": [
      "waxing_crescent_moon"
    ],
    "tags": []
  },
  "🌓": {
    "description": "first quarter moon symbol",
    "names": [
      "first_quarter_moon"
    ],
    "tags": []
  },
  "🌔": {
    "description": "waxing gibbous moon symbol",
    "names": [
      "moon",
      "waxing_gibbous_moon"
    ],
    "tags": []
  },
  "🌕": {
    "description": "full moon symbol",
    "names": [
      "full_moon"
    ],
    "tags": []
  },
  "🌖": {
    "description": "waning gibbous moon symbol",
    "names": [
      "waning_gibbous_moon"
    ],
    "tags": []
  },
  "🌗": {
    "description": "last quarter moon symbol",
    "names": [
      "last_quarter_moon"
    ],
    "tags": []
  },
  "🌘": {
    "description": "waning crescent moon symbol",
    "names": [
      "waning_crescent_moon"
    ],
    "tags": []
  },
  "🌜": {
    "description": "last quarter moon with face",
    "names": [
      "last_quarter_moon_with_face"
    ],
    "tags": []
  },
  "🌛": {
    "description": "first quarter moon with face",
    "names": [
      "first_quarter_moon_with_face"
    ],
    "tags": []
  },
  "🌙": {
    "description": "crescent moon",
    "names": [
      "crescent_moon"
    ],
    "tags": [
      "night"
    ]
  },
  "🌍": {
    "description": "earth globe europe-africa",
    "names": [
      "earth_africa"
    ],
    "tags": [
      "globe",
      "world",
      "international"
    ]
  },
  "🌎": {
    "description": "earth globe americas",
    "names": [
      "earth_americas"
    ],
    "tags": [
      "globe",
      "world",
      "international"
    ]
  },
  "🌏": {
    "description": "earth globe asia-australia",
    "names": [
      "earth_asia"
    ],
    "tags": [
      "globe",
      "world",
      "international"
    ]
  },
  "🌋": {
    "description": "volcano",
    "names": [
      "volcano"
    ],
    "tags": []
  },
  "🌌": {
    "description": "milky way",
    "names": [
      "milky_way"
    ],
    "tags": []
  },
  "🌠": {
    "description": "shooting star",
    "names": [
      "stars"
    ],
    "tags": []
  },
  "⭐": {
    "description": "white medium star",
    "names": [
      "star"
    ],
    "tags": []
  },
  "☀️": {
    "description": "black sun with rays",
    "names": [
      "sunny"
    ],
    "tags": [
      "weather"
    ]
  },
  "⛅": {
    "description": "sun behind cloud",
    "names": [
      "partly_sunny"
    ],
    "tags": [
      "weather",
      "cloud"
    ]
  },
  "☁️": {
    "description": "cloud",
    "names": [
      "cloud"
    ],
    "tags": []
  },
  "⚡": {
    "description": "high voltage sign",
    "names": [
      "zap"
    ],
    "tags": [
      "lightning",
      "thunder"
    ]
  },
  "☔": {
    "description": "umbrella with rain drops",
    "names": [
      "umbrella"
    ],
    "tags": [
      "rain",
      "weather"
    ]
  },
  "❄️": {
    "description": "snowflake",
    "names": [
      "snowflake"
    ],
    "tags": [
      "winter",
      "cold",
      "weather"
    ]
  },
  "⛄": {
    "description": "snowman without snow",
    "names": [
      "snowman"
    ],
    "tags": [
      "winter",
      "christmas"
    ]
  },
  "🌀": {
    "description": "cyclone",
    "names": [
      "cyclone"
    ],
    "tags": [
      "swirl"
    ]
  },
  "🌁": {
    "description": "foggy",
    "names": [
      "foggy"
    ],
    "tags": [
      "karl"
    ]
  },
  "🌈": {
    "description": "rainbow",
    "names": [
      "rainbow"
    ],
    "tags": [
      "pride"
    ]
  },
  "🌊": {
    "description": "water wave",
    "names": [
      "ocean"
    ],
    "tags": [
      "sea"
    ]
  },
  "🎍": {
    "description": "pine decoration",
    "names": [
      "bamboo"
    ],
    "tags": []
  },
  "💝": {
    "description": "heart with ribbon",
    "names": [
      "gift_heart"
    ],
    "tags": [
      "chocolates"
    ]
  },
  "🎎": {
    "description": "japanese dolls",
    "names": [
      "dolls"
    ],
    "tags": []
  },
  "🎒": {
    "description": "school satchel",
    "names": [
      "school_satchel"
    ],
    "tags": []
  },
  "🎓": {
    "description": "graduation cap",
    "names": [
      "mortar_board"
    ],
    "tags": [
      "education",
      "college",
      "university",
      "graduation"
    ]
  },
  "🎏": {
    "description": "carp streamer",
    "names": [
      "flags"
    ],
    "tags": []
  },
  "🎆": {
    "description": "fireworks",
    "names": [
      "fireworks"
    ],
    "tags": [
      "festival",
      "celebration"
    ]
  },
  "🎇": {
    "description": "firework sparkler",
    "names": [
      "sparkler"
    ],
    "tags": []
  },
  "🎐": {
    "description": "wind chime",
    "names": [
      "wind_chime"
    ],
    "tags": []
  },
  "🎑": {
    "description": "moon viewing ceremony",
    "names": [
      "rice_scene"
    ],
    "tags": []
  },
  "🎃": {
    "description": "jack-o-lantern",
    "names": [
      "jack_o_lantern"
    ],
    "tags": [
      "halloween"
    ]
  },
  "👻": {
    "description": "ghost",
    "names": [
      "ghost"
    ],
    "tags": [
      "halloween"
    ]
  },
  "🎅": {
    "description": "father christmas",
    "names": [
      "santa"
    ],
    "tags": [
      "christmas"
    ]
  },
  "🎄": {
    "description": "christmas tree",
    "names": [
      "christmas_tree"
    ],
    "tags": []
  },
  "🎁": {
    "description": "wrapped present",
    "names": [
      "gift"
    ],
    "tags": [
      "present",
      "birthday",
      "christmas"
    ]
  },
  "🎋": {
    "description": "tanabata tree",
    "names": [
      "tanabata_tree"
    ],
    "tags": []
  },
  "🎉": {
    "description": "party popper",
    "names": [
      "tada"
    ],
    "tags": [
      "party"
    ]
  },
  "🎊": {
    "description": "confetti ball",
    "names": [
      "confetti_ball"
    ],
    "tags": []
  },
  "🎈": {
    "description": "balloon",
    "names": [
      "balloon"
    ],
    "tags": [
      "party",
      "birthday"
    ]
  },
  "🎌": {
    "description": "crossed flags",
    "names": [
      "crossed_flags"
    ],
    "tags": []
  },
  "🔮": {
    "description": "crystal ball",
    "names": [
      "crystal_ball"
    ],
    "tags": [
      "fortune"
    ]
  },
  "🎥": {
    "description": "movie camera",
    "names": [
      "movie_camera"
    ],
    "tags": [
      "film",
      "video"
    ]
  },
  "📷": {
    "description": "camera",
    "names": [
      "camera"
    ],
    "tags": [
      "photo"
    ]
  },
  "📹": {
    "description": "video camera",
    "names": [
      "video_camera"
    ],
    "tags": []
  },
  "📼": {
    "description": "videocassette",
    "names": [
      "vhs"
    ],
    "tags": []
  },
  "💿": {
    "description": "optical disc",
    "names": [
      "cd"
    ],
    "tags": []
  },
  "📀": {
    "description": "dvd",
    "names": [
      "dvd"
    ],
    "tags": []
  },
  "💽": {
    "description": "minidisc",
    "names": [
      "minidisc"
    ],
    "tags": []
  },
  "💾": {
    "description": "floppy disk",
    "names": [
      "floppy_disk"
    ],
    "tags": [
      "save"
    ]
  },
  "💻": {
    "description": "personal computer",
    "names": [
      "computer"
    ],
    "tags": [
      "desktop",
      "screen"
    ]
  },
  "📱": {
    "description": "mobile phone",
    "names": [
      "iphone"
    ],
    "tags": [
      "smartphone",
      "mobile"
    ]
  },
  "☎️": {
    "description": "black telephone",
    "names": [
      "phone",
      "telephone"
    ],
    "tags": []
  },
  "📞": {
    "description": "telephone receiver",
    "names": [
      "telephone_receiver"
    ],
    "tags": [
      "phone",
      "call"
    ]
  },
  "📟": {
    "description": "pager",
    "names": [
      "pager"
    ],
    "tags": []
  },
  "📠": {
    "description": "fax machine",
    "names": [
      "fax"
    ],
    "tags": []
  },
  "📡": {
    "description": "satellite antenna",
    "names": [
      "satellite"
    ],
    "tags": [
      "signal"
    ]
  },
  "📺": {
    "description": "television",
    "names": [
      "tv"
    ],
    "tags": []
  },
  "📻": {
    "description": "radio",
    "names": [
      "radio"
    ],
    "tags": [
      "podcast"
    ]
  },
  "🔊": {
    "description": "speaker with three sound waves",
    "names": [
      "loud_sound"
    ],
    "tags": [
      "volume"
    ]
  },
  "🔉": {
    "description": "speaker with one sound wave",
    "names": [
      "sound"
    ],
    "tags": [
      "volume"
    ]
  },
  "🔈": {
    "description": "speaker",
    "names": [
      "speaker"
    ],
    "tags": []
  },
  "🔇": {
    "description": "speaker with cancellation stroke",
    "names": [
      "mute"
    ],
    "tags": [
      "sound",
      "volume"
    ]
  },
  "🔔": {
    "description": "bell",
    "names": [
      "bell"
    ],
    "tags": [
      "sound",
      "notification"
    ]
  },
  "🔕": {
    "description": "bell with cancellation stroke",
    "names": [
      "no_bell"
    ],
    "tags": [
      "volume",
      "off"
    ]
  },
  "📢": {
    "description": "public address loudspeaker",
    "names": [
      "loudspeaker"
    ],
    "tags": [
      "announcement"
    ]
  },
  "📣": {
    "description": "cheering megaphone",
    "names": [
      "mega"
    ],
    "tags": []
  },
  "⏳": {
    "description": "hourglass with flowing sand",
    "names": [
      "hourglass_flowing_sand"
    ],
    "tags": [
      "time"
    ]
  },
  "⌛": {
    "description": "hourglass",
    "names": [
      "hourglass"
    ],
    "tags": [
      "time"
    ]
  },
  "⏰": {
    "description": "alarm clock",
    "names": [
      "alarm_clock"
    ],
    "tags": [
      "morning"
    ]
  },
  "⌚": {
    "description": "watch",
    "names": [
      "watch"
    ],
    "tags": [
      "time"
    ]
  },
  "🔓": {
    "description": "open lock",
    "names": [
      "unlock"
    ],
    "tags": [
      "security"
    ]
  },
  "🔒": {
    "description": "lock",
    "names": [
      "lock"
    ],
    "tags": [
      "security",
      "private"
    ]
  },
  "🔏": {
    "description": "lock with ink pen",
    "names": [
      "lock_with_ink_pen"
    ],
    "tags": []
  },
  "🔐": {
    "description": "closed lock with key",
    "names": [
      "closed_lock_with_key"
    ],
    "tags": [
      "security"
    ]
  },
  "🔑": {
    "description": "key",
    "names": [
      "key"
    ],
    "tags": [
      "lock",
      "password"
    ]
  },
  "🔎": {
    "description": "right-pointing magnifying glass",
    "names": [
      "mag_right"
    ],
    "tags": []
  },
  "💡": {
    "description": "electric light bulb",
    "names": [
      "bulb"
    ],
    "tags": [
      "idea",
      "light"
    ]
  },
  "🔦": {
    "description": "electric torch",
    "names": [
      "flashlight"
    ],
    "tags": []
  },
  "🔆": {
    "description": "high brightness symbol",
    "names": [
      "high_brightness"
    ],
    "tags": []
  },
  "🔅": {
    "description": "low brightness symbol",
    "names": [
      "low_brightness"
    ],
    "tags": []
  },
  "🔌": {
    "description": "electric plug",
    "names": [
      "electric_plug"
    ],
    "tags": []
  },
  "🔋": {
    "description": "battery",
    "names": [
      "battery"
    ],
    "tags": [
      "power"
    ]
  },
  "🔍": {
    "description": "left-pointing magnifying glass",
    "names": [
      "mag"
    ],
    "tags": [
      "search",
      "zoom"
    ]
  },
  "🛁": {
    "description": "bathtub",
    "names": [
      "bathtub"
    ],
    "tags": []
  },
  "🛀": {
    "description": "bath",
    "names": [
      "bath"
    ],
    "tags": [
      "shower"
    ]
  },
  "🚿": {
    "description": "shower",
    "names": [
      "shower"
    ],
    "tags": [
      "bath"
    ]
  },
  "🚽": {
    "description": "toilet",
    "names": [
      "toilet"
    ],
    "tags": [
      "wc"
    ]
  },
  "🔧": {
    "description": "wrench",
    "names": [
      "wrench"
    ],
    "tags": [
      "tool"
    ]
  },
  "🔩": {
    "description": "nut and bolt",
    "names": [
      "nut_and_bolt"
    ],
    "tags": []
  },
  "🔨": {
    "description": "hammer",
    "names": [
      "hammer"
    ],
    "tags": [
      "tool"
    ]
  },
  "🚪": {
    "description": "door",
    "names": [
      "door"
    ],
    "tags": []
  },
  "🚬": {
    "description": "smoking symbol",
    "names": [
      "smoking"
    ],
    "tags": [
      "cigarette"
    ]
  },
  "💣": {
    "description": "bomb",
    "names": [
      "bomb"
    ],
    "tags": [
      "boom"
    ]
  },
  "🔫": {
    "description": "pistol",
    "names": [
      "gun"
    ],
    "tags": [
      "shoot",
      "weapon"
    ]
  },
  "🔪": {
    "description": "hocho",
    "names": [
      "hocho",
      "knife"
    ],
    "tags": [
      "cut",
      "chop"
    ]
  },
  "💊": {
    "description": "pill",
    "names": [
      "pill"
    ],
    "tags": [
      "health",
      "medicine"
    ]
  },
  "💉": {
    "description": "syringe",
    "names": [
      "syringe"
    ],
    "tags": [
      "health",
      "hospital",
      "needle"
    ]
  },
  "💰": {
    "description": "money bag",
    "names": [
      "moneybag"
    ],
    "tags": [
      "dollar",
      "cream"
    ]
  },
  "💴": {
    "description": "banknote with yen sign",
    "names": [
      "yen"
    ],
    "tags": []
  },
  "💵": {
    "description": "banknote with dollar sign",
    "names": [
      "dollar"
    ],
    "tags": [
      "money"
    ]
  },
  "💷": {
    "description": "banknote with pound sign",
    "names": [
      "pound"
    ],
    "tags": []
  },
  "💶": {
    "description": "banknote with euro sign",
    "names": [
      "euro"
    ],
    "tags": []
  },
  "💳": {
    "description": "credit card",
    "names": [
      "credit_card"
    ],
    "tags": [
      "subscription"
    ]
  },
  "💸": {
    "description": "money with wings",
    "names": [
      "money_with_wings"
    ],
    "tags": [
      "dollar"
    ]
  },
  "📲": {
    "description": "mobile phone with rightwards arrow at left",
    "names": [
      "calling"
    ],
    "tags": [
      "call",
      "incoming"
    ]
  },
  "📧": {
    "description": "e-mail symbol",
    "names": [
      "e-mail"
    ],
    "tags": []
  },
  "📥": {
    "description": "inbox tray",
    "names": [
      "inbox_tray"
    ],
    "tags": []
  },
  "📤": {
    "description": "outbox tray",
    "names": [
      "outbox_tray"
    ],
    "tags": []
  },
  "✉️": {
    "description": "envelope",
    "names": [
      "email",
      "envelope"
    ],
    "tags": [
      "letter"
    ]
  },
  "📩": {
    "description": "envelope with downwards arrow above",
    "names": [
      "envelope_with_arrow"
    ],
    "tags": []
  },
  "📨": {
    "description": "incoming envelope",
    "names": [
      "incoming_envelope"
    ],
    "tags": []
  },
  "📯": {
    "description": "postal horn",
    "names": [
      "postal_horn"
    ],
    "tags": []
  },
  "📫": {
    "description": "closed mailbox with raised flag",
    "names": [
      "mailbox"
    ],
    "tags": []
  },
  "📪": {
    "description": "closed mailbox with lowered flag",
    "names": [
      "mailbox_closed"
    ],
    "tags": []
  },
  "📬": {
    "description": "open mailbox with raised flag",
    "names": [
      "mailbox_with_mail"
    ],
    "tags": []
  },
  "📭": {
    "description": "open mailbox with lowered flag",
    "names": [
      "mailbox_with_no_mail"
    ],
    "tags": []
  },
  "📮": {
    "description": "postbox",
    "names": [
      "postbox"
    ],
    "tags": []
  },
  "📦": {
    "description": "package",
    "names": [
      "package"
    ],
    "tags": [
      "shipping"
    ]
  },
  "📝": {
    "description": "memo",
    "names": [
      "memo",
      "pencil"
    ],
    "tags": [
      "document",
      "note"
    ]
  },
  "📄": {
    "description": "page facing up",
    "names": [
      "page_facing_up"
    ],
    "tags": [
      "document"
    ]
  },
  "📃": {
    "description": "page with curl",
    "names": [
      "page_with_curl"
    ],
    "tags": []
  },
  "📑": {
    "description": "bookmark tabs",
    "names": [
      "bookmark_tabs"
    ],
    "tags": []
  },
  "📊": {
    "description": "bar chart",
    "names": [
      "bar_chart"
    ],
    "tags": [
      "stats",
      "metrics"
    ]
  },
  "📈": {
    "description": "chart with upwards trend",
    "names": [
      "chart_with_upwards_trend"
    ],
    "tags": [
      "graph",
      "metrics"
    ]
  },
  "📉": {
    "description": "chart with downwards trend",
    "names": [
      "chart_with_downwards_trend"
    ],
    "tags": [
      "graph",
      "metrics"
    ]
  },
  "📜": {
    "description": "scroll",
    "names": [
      "scroll"
    ],
    "tags": [
      "document"
    ]
  },
  "📋": {
    "description": "clipboard",
    "names": [
      "clipboard"
    ],
    "tags": []
  },
  "📅": {
    "description": "calendar",
    "names": [
      "date"
    ],
    "tags": [
      "calendar",
      "schedule"
    ]
  },
  "📆": {
    "description": "tear-off calendar",
    "names": [
      "calendar"
    ],
    "tags": [
      "schedule"
    ]
  },
  "📇": {
    "description": "card index",
    "names": [
      "card_index"
    ],
    "tags": []
  },
  "📁": {
    "description": "file folder",
    "names": [
      "file_folder"
    ],
    "tags": [
      "directory"
    ]
  },
  "📂": {
    "description": "open file folder",
    "names": [
      "open_file_folder"
    ],
    "tags": []
  },
  "✂️": {
    "description": "black scissors",
    "names": [
      "scissors"
    ],
    "tags": [
      "cut"
    ]
  },
  "📌": {
    "description": "pushpin",
    "names": [
      "pushpin"
    ],
    "tags": [
      "location"
    ]
  },
  "📎": {
    "description": "paperclip",
    "names": [
      "paperclip"
    ],
    "tags": []
  },
  "✒️": {
    "description": "black nib",
    "names": [
      "black_nib"
    ],
    "tags": []
  },
  "✏️": {
    "description": "pencil",
    "names": [
      "pencil2"
    ],
    "tags": []
  },
  "📏": {
    "description": "straight ruler",
    "names": [
      "straight_ruler"
    ],
    "tags": []
  },
  "📐": {
    "description": "triangular ruler",
    "names": [
      "triangular_ruler"
    ],
    "tags": []
  },
  "📕": {
    "description": "closed book",
    "names": [
      "closed_book"
    ],
    "tags": []
  },
  "📗": {
    "description": "green book",
    "names": [
      "green_book"
    ],
    "tags": []
  },
  "📘": {
    "description": "blue book",
    "names": [
      "blue_book"
    ],
    "tags": []
  },
  "📙": {
    "description": "orange book",
    "names": [
      "orange_book"
    ],
    "tags": []
  },
  "📓": {
    "description": "notebook",
    "names": [
      "notebook"
    ],
    "tags": []
  },
  "📔": {
    "description": "notebook with decorative cover",
    "names": [
      "notebook_with_decorative_cover"
    ],
    "tags": []
  },
  "📒": {
    "description": "ledger",
    "names": [
      "ledger"
    ],
    "tags": []
  },
  "📚": {
    "description": "books",
    "names": [
      "books"
    ],
    "tags": [
      "library"
    ]
  },
  "📖": {
    "description": "open book",
    "names": [
      "book",
      "open_book"
    ],
    "tags": []
  },
  "🔖": {
    "description": "bookmark",
    "names": [
      "bookmark"
    ],
    "tags": []
  },
  "📛": {
    "description": "name badge",
    "names": [
      "name_badge"
    ],
    "tags": []
  },
  "🔬": {
    "description": "microscope",
    "names": [
      "microscope"
    ],
    "tags": [
      "science",
      "laboratory",
      "investigate"
    ]
  },
  "🔭": {
    "description": "telescope",
    "names": [
      "telescope"
    ],
    "tags": []
  },
  "📰": {
    "description": "newspaper",
    "names": [
      "newspaper"
    ],
    "tags": [
      "press"
    ]
  },
  "🎨": {
    "description": "artist palette",
    "names": [
      "art"
    ],
    "tags": [
      "design",
      "paint"
    ]
  },
  "🎬": {
    "description": "clapper board",
    "names": [
      "clapper"
    ],
    "tags": [
      "film"
    ]
  },
  "🎤": {
    "description": "microphone",
    "names": [
      "microphone"
    ],
    "tags": [
      "sing"
    ]
  },
  "🎧": {
    "description": "headphone",
    "names": [
      "headphones"
    ],
    "tags": [
      "music",
      "earphones"
    ]
  },
  "🎼": {
    "description": "musical score",
    "names": [
      "musical_score"
    ],
    "tags": []
  },
  "🎵": {
    "description": "musical note",
    "names": [
      "musical_note"
    ],
    "tags": []
  },
  "🎶": {
    "description": "multiple musical notes",
    "names": [
      "notes"
    ],
    "tags": [
      "music"
    ]
  },
  "🎹": {
    "description": "musical keyboard",
    "names": [
      "musical_keyboard"
    ],
    "tags": [
      "piano"
    ]
  },
  "🎻": {
    "description": "violin",
    "names": [
      "violin"
    ],
    "tags": []
  },
  "🎺": {
    "description": "trumpet",
    "names": [
      "trumpet"
    ],
    "tags": []
  },
  "🎷": {
    "description": "saxophone",
    "names": [
      "saxophone"
    ],
    "tags": []
  },
  "🎸": {
    "description": "guitar",
    "names": [
      "guitar"
    ],
    "tags": [
      "rock"
    ]
  },
  "👾": {
    "description": "alien monster",
    "names": [
      "space_invader"
    ],
    "tags": [
      "game",
      "retro"
    ]
  },
  "🎮": {
    "description": "video game",
    "names": [
      "video_game"
    ],
    "tags": [
      "play",
      "controller",
      "console"
    ]
  },
  "🃏": {
    "description": "playing card black joker",
    "names": [
      "black_joker"
    ],
    "tags": []
  },
  "🎴": {
    "description": "flower playing cards",
    "names": [
      "flower_playing_cards"
    ],
    "tags": []
  },
  "🀄": {
    "description": "mahjong tile red dragon",
    "names": [
      "mahjong"
    ],
    "tags": []
  },
  "🎲": {
    "description": "game die",
    "names": [
      "game_die"
    ],
    "tags": [
      "dice",
      "gambling"
    ]
  },
  "🎯": {
    "description": "direct hit",
    "names": [
      "dart"
    ],
    "tags": [
      "target"
    ]
  },
  "🏈": {
    "description": "american football",
    "names": [
      "football"
    ],
    "tags": [
      "sports"
    ]
  },
  "🏀": {
    "description": "basketball and hoop",
    "names": [
      "basketball"
    ],
    "tags": [
      "sports"
    ]
  },
  "⚽": {
    "description": "soccer ball",
    "names": [
      "soccer"
    ],
    "tags": [
      "sports"
    ]
  },
  "⚾️": {
    "description": "baseball",
    "names": [
      "baseball"
    ],
    "tags": [
      "sports"
    ]
  },
  "🎾": {
    "description": "tennis racquet and ball",
    "names": [
      "tennis"
    ],
    "tags": [
      "sports"
    ]
  },
  "🎱": {
    "description": "billiards",
    "names": [
      "8ball"
    ],
    "tags": [
      "pool",
      "billiards"
    ]
  },
  "🏉": {
    "description": "rugby football",
    "names": [
      "rugby_football"
    ],
    "tags": []
  },
  "🎳": {
    "description": "bowling",
    "names": [
      "bowling"
    ],
    "tags": []
  },
  "⛳": {
    "description": "flag in hole",
    "names": [
      "golf"
    ],
    "tags": []
  },
  "🚵": {
    "description": "mountain bicyclist",
    "names": [
      "mountain_bicyclist"
    ],
    "tags": []
  },
  "🚴": {
    "description": "bicyclist",
    "names": [
      "bicyclist"
    ],
    "tags": []
  },
  "🏁": {
    "description": "chequered flag",
    "names": [
      "checkered_flag"
    ],
    "tags": [
      "milestone",
      "finish"
    ]
  },
  "🏇": {
    "description": "horse racing",
    "names": [
      "horse_racing"
    ],
    "tags": []
  },
  "🏆": {
    "description": "trophy",
    "names": [
      "trophy"
    ],
    "tags": [
      "award",
      "contest",
      "winner"
    ]
  },
  "🎿": {
    "description": "ski and ski boot",
    "names": [
      "ski"
    ],
    "tags": []
  },
  "🏂": {
    "description": "snowboarder",
    "names": [
      "snowboarder"
    ],
    "tags": []
  },
  "🏊": {
    "description": "swimmer",
    "names": [
      "swimmer"
    ],
    "tags": []
  },
  "🏄": {
    "description": "surfer",
    "names": [
      "surfer"
    ],
    "tags": []
  },
  "🎣": {
    "description": "fishing pole and fish",
    "names": [
      "fishing_pole_and_fish"
    ],
    "tags": []
  },
  "☕": {
    "description": "hot beverage",
    "names": [
      "coffee"
    ],
    "tags": [
      "cafe",
      "espresso"
    ]
  },
  "🍵": {
    "description": "teacup without handle",
    "names": [
      "tea"
    ],
    "tags": [
      "green",
      "breakfast"
    ]
  },
  "🍶": {
    "description": "sake bottle and cup",
    "names": [
      "sake"
    ],
    "tags": []
  },
  "🍼": {
    "description": "baby bottle",
    "names": [
      "baby_bottle"
    ],
    "tags": [
      "milk"
    ]
  },
  "🍺": {
    "description": "beer mug",
    "names": [
      "beer"
    ],
    "tags": [
      "drink"
    ]
  },
  "🍻": {
    "description": "clinking beer mugs",
    "names": [
      "beers"
    ],
    "tags": [
      "drinks"
    ]
  },
  "🍸": {
    "description": "cocktail glass",
    "names": [
      "cocktail"
    ],
    "tags": [
      "drink"
    ]
  },
  "🍹": {
    "description": "tropical drink",
    "names": [
      "tropical_drink"
    ],
    "tags": [
      "summer",
      "vacation"
    ]
  },
  "🍷": {
    "description": "wine glass",
    "names": [
      "wine_glass"
    ],
    "tags": []
  },
  "🍴": {
    "description": "fork and knife",
    "names": [
      "fork_and_knife"
    ],
    "tags": [
      "cutlery"
    ]
  },
  "🍕": {
    "description": "slice of pizza",
    "names": [
      "pizza"
    ],
    "tags": []
  },
  "🍔": {
    "description": "hamburger",
    "names": [
      "hamburger"
    ],
    "tags": [
      "burger"
    ]
  },
  "🍟": {
    "description": "french fries",
    "names": [
      "fries"
    ],
    "tags": []
  },
  "🍗": {
    "description": "poultry leg",
    "names": [
      "poultry_leg"
    ],
    "tags": [
      "meat",
      "chicken"
    ]
  },
  "🍖": {
    "description": "meat on bone",
    "names": [
      "meat_on_bone"
    ],
    "tags": []
  },
  "🍝": {
    "description": "spaghetti",
    "names": [
      "spaghetti"
    ],
    "tags": [
      "pasta"
    ]
  },
  "🍛": {
    "description": "curry and rice",
    "names": [
      "curry"
    ],
    "tags": []
  },
  "🍤": {
    "description": "fried shrimp",
    "names": [
      "fried_shrimp"
    ],
    "tags": [
      "tempura"
    ]
  },
  "🍱": {
    "description": "bento box",
    "names": [
      "bento"
    ],
    "tags": []
  },
  "🍣": {
    "description": "sushi",
    "names": [
      "sushi"
    ],
    "tags": []
  },
  "🍥": {
    "description": "fish cake with swirl design",
    "names": [
      "fish_cake"
    ],
    "tags": []
  },
  "🍙": {
    "description": "rice ball",
    "names": [
      "rice_ball"
    ],
    "tags": []
  },
  "🍘": {
    "description": "rice cracker",
    "names": [
      "rice_cracker"
    ],
    "tags": []
  },
  "🍚": {
    "description": "cooked rice",
    "names": [
      "rice"
    ],
    "tags": []
  },
  "🍜": {
    "description": "steaming bowl",
    "names": [
      "ramen"
    ],
    "tags": [
      "noodle"
    ]
  },
  "🍲": {
    "description": "pot of food",
    "names": [
      "stew"
    ],
    "tags": []
  },
  "🍢": {
    "description": "oden",
    "names": [
      "oden"
    ],
    "tags": []
  },
  "🍡": {
    "description": "dango",
    "names": [
      "dango"
    ],
    "tags": []
  },
  "🍳": {
    "description": "cooking",
    "names": [
      "egg"
    ],
    "tags": [
      "breakfast"
    ]
  },
  "🍞": {
    "description": "bread",
    "names": [
      "bread"
    ],
    "tags": [
      "toast"
    ]
  },
  "🍩": {
    "description": "doughnut",
    "names": [
      "doughnut"
    ],
    "tags": []
  },
  "🍮": {
    "description": "custard",
    "names": [
      "custard"
    ],
    "tags": []
  },
  "🍦": {
    "description": "soft ice cream",
    "names": [
      "icecream"
    ],
    "tags": []
  },
  "🍨": {
    "description": "ice cream",
    "names": [
      "ice_cream"
    ],
    "tags": []
  },
  "🍧": {
    "description": "shaved ice",
    "names": [
      "shaved_ice"
    ],
    "tags": []
  },
  "🎂": {
    "description": "birthday cake",
    "names": [
      "birthday"
    ],
    "tags": [
      "party"
    ]
  },
  "🍰": {
    "description": "shortcake",
    "names": [
      "cake"
    ],
    "tags": [
      "dessert"
    ]
  },
  "🍪": {
    "description": "cookie",
    "names": [
      "cookie"
    ],
    "tags": []
  },
  "🍫": {
    "description": "chocolate bar",
    "names": [
      "chocolate_bar"
    ],
    "tags": []
  },
  "🍬": {
    "description": "candy",
    "names": [
      "candy"
    ],
    "tags": [
      "sweet"
    ]
  },
  "🍭": {
    "description": "lollipop",
    "names": [
      "lollipop"
    ],
    "tags": []
  },
  "🍯": {
    "description": "honey pot",
    "names": [
      "honey_pot"
    ],
    "tags": []
  },
  "🍎": {
    "description": "red apple",
    "names": [
      "apple"
    ],
    "tags": []
  },
  "🍏": {
    "description": "green apple",
    "names": [
      "green_apple"
    ],
    "tags": [
      "fruit"
    ]
  },
  "🍊": {
    "description": "tangerine",
    "names": [
      "tangerine",
      "orange",
      "mandarin"
    ],
    "tags": []
  },
  "🍋": {
    "description": "lemon",
    "names": [
      "lemon"
    ],
    "tags": []
  },
  "🍒": {
    "description": "cherries",
    "names": [
      "cherries"
    ],
    "tags": [
      "fruit"
    ]
  },
  "🍇": {
    "description": "grapes",
    "names": [
      "grapes"
    ],
    "tags": []
  },
  "🍉": {
    "description": "watermelon",
    "names": [
      "watermelon"
    ],
    "tags": []
  },
  "🍓": {
    "description": "strawberry",
    "names": [
      "strawberry"
    ],
    "tags": [
      "fruit"
    ]
  },
  "🍑": {
    "description": "peach",
    "names": [
      "peach"
    ],
    "tags": []
  },
  "🍈": {
    "description": "melon",
    "names": [
      "melon"
    ],
    "tags": []
  },
  "🍌": {
    "description": "banana",
    "names": [
      "banana"
    ],
    "tags": [
      "fruit"
    ]
  },
  "🍐": {
    "description": "pear",
    "names": [
      "pear"
    ],
    "tags": []
  },
  "🍍": {
    "description": "pineapple",
    "names": [
      "pineapple"
    ],
    "tags": []
  },
  "🍠": {
    "description": "roasted sweet potato",
    "names": [
      "sweet_potato"
    ],
    "tags": []
  },
  "🍆": {
    "description": "aubergine",
    "names": [
      "eggplant"
    ],
    "tags": [
      "aubergine"
    ]
  },
  "🍅": {
    "description": "tomato",
    "names": [
      "tomato"
    ],
    "tags": []
  },
  "🌽": {
    "description": "ear of maize",
    "names": [
      "corn"
    ],
    "tags": []
  },
  "🏠": {
    "description": "house building",
    "names": [
      "house"
    ],
    "tags": []
  },
  "🏡": {
    "description": "house with garden",
    "names": [
      "house_with_garden"
    ],
    "tags": []
  },
  "🏫": {
    "description": "school",
    "names": [
      "school"
    ],
    "tags": []
  },
  "🏢": {
    "description": "office building",
    "names": [
      "office"
    ],
    "tags": []
  },
  "🏣": {
    "description": "japanese post office",
    "names": [
      "post_office"
    ],
    "tags": []
  },
  "🏥": {
    "description": "hospital",
    "names": [
      "hospital"
    ],
    "tags": []
  },
  "🏦": {
    "description": "bank",
    "names": [
      "bank"
    ],
    "tags": []
  },
  "🏪": {
    "description": "convenience store",
    "names": [
      "convenience_store"
    ],
    "tags": []
  },
  "🏩": {
    "description": "love hotel",
    "names": [
      "love_hotel"
    ],
    "tags": []
  },
  "🏨": {
    "description": "hotel",
    "names": [
      "hotel"
    ],
    "tags": []
  },
  "💒": {
    "description": "wedding",
    "names": [
      "wedding"
    ],
    "tags": [
      "marriage"
    ]
  },
  "⛪": {
    "description": "church",
    "names": [
      "church"
    ],
    "tags": []
  },
  "🏬": {
    "description": "department store",
    "names": [
      "department_store"
    ],
    "tags": []
  },
  "🏤": {
    "description": "european post office",
    "names": [
      "european_post_office"
    ],
    "tags": []
  },
  "🌇": {
    "description": "sunset over buildings",
    "names": [
      "city_sunrise"
    ],
    "tags": []
  },
  "🌆": {
    "description": "cityscape at dusk",
    "names": [
      "city_sunset"
    ],
    "tags": []
  },
  "🏯": {
    "description": "japanese castle",
    "names": [
      "japanese_castle"
    ],
    "tags": []
  },
  "🏰": {
    "description": "european castle",
    "names": [
      "european_castle"
    ],
    "tags": []
  },
  "⛺": {
    "description": "tent",
    "names": [
      "tent"
    ],
    "tags": [
      "camping"
    ]
  },
  "🏭": {
    "description": "factory",
    "names": [
      "factory"
    ],
    "tags": []
  },
  "🗼": {
    "description": "tokyo tower",
    "names": [
      "tokyo_tower"
    ],
    "tags": []
  },
  "🗾": {
    "description": "silhouette of japan",
    "names": [
      "japan"
    ],
    "tags": []
  },
  "🗻": {
    "description": "mount fuji",
    "names": [
      "mount_fuji"
    ],
    "tags": []
  },
  "🌄": {
    "description": "sunrise over mountains",
    "names": [
      "sunrise_over_mountains"
    ],
    "tags": []
  },
  "🌅": {
    "description": "sunrise",
    "names": [
      "sunrise"
    ],
    "tags": []
  },
  "🌃": {
    "description": "night with stars",
    "names": [
      "night_with_stars"
    ],
    "tags": []
  },
  "🗽": {
    "description": "statue of liberty",
    "names": [
      "statue_of_liberty"
    ],
    "tags": []
  },
  "🌉": {
    "description": "bridge at night",
    "names": [
      "bridge_at_night"
    ],
    "tags": []
  },
  "🎠": {
    "description": "carousel horse",
    "names": [
      "carousel_horse"
    ],
    "tags": []
  },
  "🎡": {
    "description": "ferris wheel",
    "names": [
      "ferris_wheel"
    ],
    "tags": []
  },
  "⛲": {
    "description": "fountain",
    "names": [
      "fountain"
    ],
    "tags": []
  },
  "🎢": {
    "description": "roller coaster",
    "names": [
      "roller_coaster"
    ],
    "tags": []
  },
  "🚢": {
    "description": "ship",
    "names": [
      "ship"
    ],
    "tags": []
  },
  "⛵": {
    "description": "sailboat",
    "names": [
      "boat",
      "sailboat"
    ],
    "tags": []
  },
  "🚤": {
    "description": "speedboat",
    "names": [
      "speedboat"
    ],
    "tags": [
      "ship"
    ]
  },
  "🚣": {
    "description": "rowboat",
    "names": [
      "rowboat"
    ],
    "tags": []
  },
  "⚓": {
    "description": "anchor",
    "names": [
      "anchor"
    ],
    "tags": [
      "ship"
    ]
  },
  "🚀": {
    "description": "rocket",
    "names": [
      "rocket"
    ],
    "tags": [
      "ship",
      "launch"
    ]
  },
  "✈️": {
    "description": "airplane",
    "names": [
      "airplane"
    ],
    "tags": [
      "flight"
    ]
  },
  "💺": {
    "description": "seat",
    "names": [
      "seat"
    ],
    "tags": []
  },
  "🚁": {
    "description": "helicopter",
    "names": [
      "helicopter"
    ],
    "tags": []
  },
  "🚂": {
    "description": "steam locomotive",
    "names": [
      "steam_locomotive"
    ],
    "tags": [
      "train"
    ]
  },
  "🚊": {
    "description": "tram",
    "names": [
      "tram"
    ],
    "tags": []
  },
  "🚉": {
    "description": "station",
    "names": [
      "station"
    ],
    "tags": []
  },
  "🚞": {
    "description": "mountain railway",
    "names": [
      "mountain_railway"
    ],
    "tags": []
  },
  "🚆": {
    "description": "train",
    "names": [
      "train2"
    ],
    "tags": []
  },
  "🚄": {
    "description": "high-speed train",
    "names": [
      "bullettrain_side"
    ],
    "tags": [
      "train"
    ]
  },
  "🚅": {
    "description": "high-speed train with bullet nose",
    "names": [
      "bullettrain_front"
    ],
    "tags": [
      "train"
    ]
  },
  "🚈": {
    "description": "light rail",
    "names": [
      "light_rail"
    ],
    "tags": []
  },
  "🚇": {
    "description": "metro",
    "names": [
      "metro"
    ],
    "tags": []
  },
  "🚝": {
    "description": "monorail",
    "names": [
      "monorail"
    ],
    "tags": []
  },
  "🚋": {
    "description": "tram car",
    "names": [
      "train"
    ],
    "tags": []
  },
  "🚃": {
    "description": "railway car",
    "names": [
      "railway_car"
    ],
    "tags": []
  },
  "🚎": {
    "description": "trolleybus",
    "names": [
      "trolleybus"
    ],
    "tags": []
  },
  "🚌": {
    "description": "bus",
    "names": [
      "bus"
    ],
    "tags": []
  },
  "🚍": {
    "description": "oncoming bus",
    "names": [
      "oncoming_bus"
    ],
    "tags": []
  },
  "🚙": {
    "description": "recreational vehicle",
    "names": [
      "blue_car"
    ],
    "tags": []
  },
  "🚘": {
    "description": "oncoming automobile",
    "names": [
      "oncoming_automobile"
    ],
    "tags": []
  },
  "🚗": {
    "description": "automobile",
    "names": [
      "car",
      "red_car"
    ],
    "tags": []
  },
  "🚕": {
    "description": "taxi",
    "names": [
      "taxi"
    ],
    "tags": []
  },
  "🚖": {
    "description": "oncoming taxi",
    "names": [
      "oncoming_taxi"
    ],
    "tags": []
  },
  "🚛": {
    "description": "articulated lorry",
    "names": [
      "articulated_lorry"
    ],
    "tags": []
  },
  "🚚": {
    "description": "delivery truck",
    "names": [
      "truck"
    ],
    "tags": []
  },
  "🚨": {
    "description": "police cars revolving light",
    "names": [
      "rotating_light"
    ],
    "tags": [
      "911",
      "emergency"
    ]
  },
  "🚓": {
    "description": "police car",
    "names": [
      "police_car"
    ],
    "tags": []
  },
  "🚔": {
    "description": "oncoming police car",
    "names": [
      "oncoming_police_car"
    ],
    "tags": []
  },
  "🚒": {
    "description": "fire engine",
    "names": [
      "fire_engine"
    ],
    "tags": []
  },
  "🚑": {
    "description": "ambulance",
    "names": [
      "ambulance"
    ],
    "tags": []
  },
  "🚐": {
    "description": "minibus",
    "names": [
      "minibus"
    ],
    "tags": []
  },
  "🚲": {
    "description": "bicycle",
    "names": [
      "bike"
    ],
    "tags": [
      "bicycle"
    ]
  },
  "🚡": {
    "description": "aerial tramway",
    "names": [
      "aerial_tramway"
    ],
    "tags": []
  },
  "🚟": {
    "description": "suspension railway",
    "names": [
      "suspension_railway"
    ],
    "tags": []
  },
  "🚠": {
    "description": "mountain cableway",
    "names": [
      "mountain_cableway"
    ],
    "tags": []
  },
  "🚜": {
    "description": "tractor",
    "names": [
      "tractor"
    ],
    "tags": []
  },
  "💈": {
    "description": "barber pole",
    "names": [
      "barber"
    ],
    "tags": []
  },
  "🚏": {
    "description": "bus stop",
    "names": [
      "busstop"
    ],
    "tags": []
  },
  "🎫": {
    "description": "ticket",
    "names": [
      "ticket"
    ],
    "tags": []
  },
  "🚦": {
    "description": "vertical traffic light",
    "names": [
      "vertical_traffic_light"
    ],
    "tags": [
      "semaphore"
    ]
  },
  "🚥": {
    "description": "horizontal traffic light",
    "names": [
      "traffic_light"
    ],
    "tags": []
  },
  "⚠️": {
    "description": "warning sign",
    "names": [
      "warning"
    ],
    "tags": [
      "wip"
    ]
  },
  "🚧": {
    "description": "construction sign",
    "names": [
      "construction"
    ],
    "tags": [
      "wip"
    ]
  },
  "🔰": {
    "description": "japanese symbol for beginner",
    "names": [
      "beginner"
    ],
    "tags": []
  },
  "⛽": {
    "description": "fuel pump",
    "names": [
      "fuelpump"
    ],
    "tags": []
  },
  "🏮": {
    "description": "izakaya lantern",
    "names": [
      "izakaya_lantern",
      "lantern"
    ],
    "tags": []
  },
  "🎰": {
    "description": "slot machine",
    "names": [
      "slot_machine"
    ],
    "tags": []
  },
  "♨️": {
    "description": "hot springs",
    "names": [
      "hotsprings"
    ],
    "tags": []
  },
  "🗿": {
    "description": "moyai",
    "names": [
      "moyai"
    ],
    "tags": [
      "stone"
    ]
  },
  "🎪": {
    "description": "circus tent",
    "names": [
      "circus_tent"
    ],
    "tags": []
  },
  "🎭": {
    "description": "performing arts",
    "names": [
      "performing_arts"
    ],
    "tags": [
      "theater",
      "drama"
    ]
  },
  "📍": {
    "description": "round pushpin",
    "names": [
      "round_pushpin"
    ],
    "tags": [
      "location"
    ]
  },
  "🚩": {
    "description": "triangular flag on post",
    "names": [
      "triangular_flag_on_post"
    ],
    "tags": []
  },
  "🇯🇵": {
    "description": "regional indicator symbol letter j + regional indicator symbol letter p",
    "names": [
      "jp"
    ],
    "tags": [
      "japan"
    ]
  },
  "🇰🇷": {
    "description": "regional indicator symbol letter k + regional indicator symbol letter r",
    "names": [
      "kr"
    ],
    "tags": [
      "korea"
    ]
  },
  "🇩🇪": {
    "description": "regional indicator symbol letter d + regional indicator symbol letter e",
    "names": [
      "de"
    ],
    "tags": [
      "flag",
      "germany"
    ]
  },
  "🇨🇳": {
    "description": "regional indicator symbol letter c + regional indicator symbol letter n",
    "names": [
      "cn"
    ],
    "tags": [
      "china"
    ]
  },
  "🇺🇸": {
    "description": "regional indicator symbol letter u + regional indicator symbol letter s",
    "names": [
      "us"
    ],
    "tags": [
      "flag",
      "united",
      "america"
    ]
  },
  "🇫🇷": {
    "description": "regional indicator symbol letter f + regional indicator symbol letter r",
    "names": [
      "fr"
    ],
    "tags": [
      "france",
      "french"
    ]
  },
  "🇪🇸": {
    "description": "regional indicator symbol letter e + regional indicator symbol letter s",
    "names": [
      "es"
    ],
    "tags": [
      "spain"
    ]
  },
  "🇮🇹": {
    "description": "regional indicator symbol letter i + regional indicator symbol letter t",
    "names": [
      "it"
    ],
    "tags": [
      "italy"
    ]
  },
  "🇷🇺": {
    "description": "regional indicator symbol letter r + regional indicator symbol letter u",
    "names": [
      "ru"
    ],
    "tags": [
      "russia"
    ]
  },
  "🇬🇧": {
    "description": "regional indicator symbol letter g + regional indicator symbol letter b",
    "names": [
      "gb",
      "uk"
    ],
    "tags": [
      "flag",
      "british"
    ]
  },
  "1️⃣": {
    "description": "digit one + combining enclosing keycap",
    "names": [
      "one"
    ],
    "tags": []
  },
  "2️⃣": {
    "description": "digit two + combining enclosing keycap",
    "names": [
      "two"
    ],
    "tags": []
  },
  "3️⃣": {
    "description": "digit three + combining enclosing keycap",
    "names": [
      "three"
    ],
    "tags": []
  },
  "4️⃣": {
    "description": "digit four + combining enclosing keycap",
    "names": [
      "four"
    ],
    "tags": []
  },
  "5️⃣": {
    "description": "digit five + combining enclosing keycap",
    "names": [
      "five"
    ],
    "tags": []
  },
  "6️⃣": {
    "description": "digit six + combining enclosing keycap",
    "names": [
      "six"
    ],
    "tags": []
  },
  "7️⃣": {
    "description": "digit seven + combining enclosing keycap",
    "names": [
      "seven"
    ],
    "tags": []
  },
  "8️⃣": {
    "description": "digit eight + combining enclosing keycap",
    "names": [
      "eight"
    ],
    "tags": []
  },
  "9️⃣": {
    "description": "digit nine + combining enclosing keycap",
    "names": [
      "nine"
    ],
    "tags": []
  },
  "0️⃣": {
    "description": "digit zero + combining enclosing keycap",
    "names": [
      "zero"
    ],
    "tags": []
  },
  "🔟": {
    "description": "keycap ten",
    "names": [
      "keycap_ten"
    ],
    "tags": []
  },
  "🔢": {
    "description": "input symbol for numbers",
    "names": [
      "1234"
    ],
    "tags": [
      "numbers"
    ]
  },
  "#️⃣": {
    "description": "number sign + combining enclosing keycap",
    "names": [
      "hash"
    ],
    "tags": [
      "number"
    ]
  },
  "🔣": {
    "description": "input symbol for symbols",
    "names": [
      "symbols"
    ],
    "tags": []
  },
  "⬆️": {
    "description": "upwards black arrow",
    "names": [
      "arrow_up"
    ],
    "tags": []
  },
  "⬇️": {
    "description": "downwards black arrow",
    "names": [
      "arrow_down"
    ],
    "tags": []
  },
  "⬅️": {
    "description": "leftwards black arrow",
    "names": [
      "arrow_left"
    ],
    "tags": []
  },
  "➡️": {
    "description": "black rightwards arrow",
    "names": [
      "arrow_right"
    ],
    "tags": []
  },
  "🔠": {
    "description": "input symbol for latin capital letters",
    "names": [
      "capital_abcd"
    ],
    "tags": [
      "letters"
    ]
  },
  "🔡": {
    "description": "input symbol for latin small letters",
    "names": [
      "abcd"
    ],
    "tags": []
  },
  "🔤": {
    "description": "input symbol for latin letters",
    "names": [
      "abc"
    ],
    "tags": [
      "alphabet"
    ]
  },
  "↗️": {
    "description": "north east arrow",
    "names": [
      "arrow_upper_right"
    ],
    "tags": []
  },
  "↖️": {
    "description": "north west arrow",
    "names": [
      "arrow_upper_left"
    ],
    "tags": []
  },
  "↘️": {
    "description": "south east arrow",
    "names": [
      "arrow_lower_right"
    ],
    "tags": []
  },
  "↙️": {
    "description": "south west arrow",
    "names": [
      "arrow_lower_left"
    ],
    "tags": []
  },
  "↔️": {
    "description": "left right arrow",
    "names": [
      "left_right_arrow"
    ],
    "tags": []
  },
  "↕️": {
    "description": "up down arrow",
    "names": [
      "arrow_up_down"
    ],
    "tags": []
  },
  "🔄": {
    "description": "anticlockwise downwards and upwards open circle arrows",
    "names": [
      "arrows_counterclockwise"
    ],
    "tags": [
      "sync"
    ]
  },
  "◀️": {
    "description": "black left-pointing triangle",
    "names": [
      "arrow_backward"
    ],
    "tags": []
  },
  "▶️": {
    "description": "black right-pointing triangle",
    "names": [
      "arrow_forward"
    ],
    "tags": []
  },
  "🔼": {
    "description": "up-pointing small red triangle",
    "names": [
      "arrow_up_small"
    ],
    "tags": []
  },
  "🔽": {
    "description": "down-pointing small red triangle",
    "names": [
      "arrow_down_small"
    ],
    "tags": []
  },
  "↩️": {
    "description": "leftwards arrow with hook",
    "names": [
      "leftwards_arrow_with_hook"
    ],
    "tags": [
      "return"
    ]
  },
  "↪️": {
    "description": "rightwards arrow with hook",
    "names": [
      "arrow_right_hook"
    ],
    "tags": []
  },
  "ℹ️": {
    "description": "information source",
    "names": [
      "information_source"
    ],
    "tags": []
  },
  "⏪": {
    "description": "black left-pointing double triangle",
    "names": [
      "rewind"
    ],
    "tags": []
  },
  "⏩": {
    "description": "black right-pointing double triangle",
    "names": [
      "fast_forward"
    ],
    "tags": []
  },
  "⏫": {
    "description": "black up-pointing double triangle",
    "names": [
      "arrow_double_up"
    ],
    "tags": []
  },
  "⏬": {
    "description": "black down-pointing double triangle",
    "names": [
      "arrow_double_down"
    ],
    "tags": []
  },
  "⤵️": {
    "description": "arrow pointing rightwards then curving downwards",
    "names": [
      "arrow_heading_down"
    ],
    "tags": []
  },
  "⤴️": {
    "description": "arrow pointing rightwards then curving upwards",
    "names": [
      "arrow_heading_up"
    ],
    "tags": []
  },
  "🆗": {
    "description": "squared ok",
    "names": [
      "ok"
    ],
    "tags": [
      "yes"
    ]
  },
  "🔀": {
    "description": "twisted rightwards arrows",
    "names": [
      "twisted_rightwards_arrows"
    ],
    "tags": [
      "shuffle"
    ]
  },
  "🔁": {
    "description": "clockwise rightwards and leftwards open circle arrows",
    "names": [
      "repeat"
    ],
    "tags": [
      "loop"
    ]
  },
  "🔂": {
    "description": "clockwise rightwards and leftwards open circle arrows with circled one overlay",
    "names": [
      "repeat_one"
    ],
    "tags": []
  },
  "🆕": {
    "description": "squared new",
    "names": [
      "new"
    ],
    "tags": [
      "fresh"
    ]
  },
  "🆙": {
    "description": "squared up with exclamation mark",
    "names": [
      "up"
    ],
    "tags": []
  },
  "🆒": {
    "description": "squared cool",
    "names": [
      "cool"
    ],
    "tags": []
  },
  "🆓": {
    "description": "squared free",
    "names": [
      "free"
    ],
    "tags": []
  },
  "🆖": {
    "description": "squared ng",
    "names": [
      "ng"
    ],
    "tags": []
  },
  "📶": {
    "description": "antenna with bars",
    "names": [
      "signal_strength"
    ],
    "tags": [
      "wifi"
    ]
  },
  "🎦": {
    "description": "cinema",
    "names": [
      "cinema"
    ],
    "tags": [
      "film",
      "movie"
    ]
  },
  "🈁": {
    "description": "squared katakana koko",
    "names": [
      "koko"
    ],
    "tags": []
  },
  "🈯": {
    "description": "squared cjk unified ideograph-6307",
    "names": [
      "u6307"
    ],
    "tags": []
  },
  "🈳": {
    "description": "squared cjk unified ideograph-7a7a",
    "names": [
      "u7a7a"
    ],
    "tags": []
  },
  "🈵": {
    "description": "squared cjk unified ideograph-6e80",
    "names": [
      "u6e80"
    ],
    "tags": []
  },
  "🈴": {
    "description": "squared cjk unified ideograph-5408",
    "names": [
      "u5408"
    ],
    "tags": []
  },
  "🈲": {
    "description": "squared cjk unified ideograph-7981",
    "names": [
      "u7981"
    ],
    "tags": []
  },
  "🉐": {
    "description": "circled ideograph advantage",
    "names": [
      "ideograph_advantage"
    ],
    "tags": []
  },
  "🈹": {
    "description": "squared cjk unified ideograph-5272",
    "names": [
      "u5272"
    ],
    "tags": []
  },
  "🈺": {
    "description": "squared cjk unified ideograph-55b6",
    "names": [
      "u55b6"
    ],
    "tags": []
  },
  "🈶": {
    "description": "squared cjk unified ideograph-6709",
    "names": [
      "u6709"
    ],
    "tags": []
  },
  "🈚": {
    "description": "squared cjk unified ideograph-7121",
    "names": [
      "u7121"
    ],
    "tags": []
  },
  "🚻": {
    "description": "restroom",
    "names": [
      "restroom"
    ],
    "tags": [
      "toilet"
    ]
  },
  "🚹": {
    "description": "mens symbol",
    "names": [
      "mens"
    ],
    "tags": []
  },
  "🚺": {
    "description": "womens symbol",
    "names": [
      "womens"
    ],
    "tags": []
  },
  "🚼": {
    "description": "baby symbol",
    "names": [
      "baby_symbol"
    ],
    "tags": []
  },
  "🚾": {
    "description": "water closet",
    "names": [
      "wc"
    ],
    "tags": [
      "toilet",
      "restroom"
    ]
  },
  "🚰": {
    "description": "potable water symbol",
    "names": [
      "potable_water"
    ],
    "tags": []
  },
  "🚮": {
    "description": "put litter in its place symbol",
    "names": [
      "put_litter_in_its_place"
    ],
    "tags": []
  },
  "🅿️": {
    "description": "negative squared latin capital letter p",
    "names": [
      "parking"
    ],
    "tags": []
  },
  "♿": {
    "description": "wheelchair symbol",
    "names": [
      "wheelchair"
    ],
    "tags": [
      "accessibility"
    ]
  },
  "🚭": {
    "description": "no smoking symbol",
    "names": [
      "no_smoking"
    ],
    "tags": []
  },
  "🈷️": {
    "description": "squared cjk unified ideograph-6708",
    "names": [
      "u6708"
    ],
    "tags": []
  },
  "🈸": {
    "description": "squared cjk unified ideograph-7533",
    "names": [
      "u7533"
    ],
    "tags": []
  },
  "🈂️": {
    "description": "squared katakana sa",
    "names": [
      "sa"
    ],
    "tags": []
  },
  "Ⓜ️": {
    "description": "circled latin capital letter m",
    "names": [
      "m"
    ],
    "tags": []
  },
  "🛂": {
    "description": "passport control",
    "names": [
      "passport_control"
    ],
    "tags": []
  },
  "🛄": {
    "description": "baggage claim",
    "names": [
      "baggage_claim"
    ],
    "tags": [
      "airport"
    ]
  },
  "🛅": {
    "description": "left luggage",
    "names": [
      "left_luggage"
    ],
    "tags": []
  },
  "🛃": {
    "description": "customs",
    "names": [
      "customs"
    ],
    "tags": []
  },
  "🉑": {
    "description": "circled ideograph accept",
    "names": [
      "accept"
    ],
    "tags": []
  },
  "㊙️": {
    "description": "circled ideograph secret",
    "names": [
      "secret"
    ],
    "tags": []
  },
  "㊗️": {
    "description": "circled ideograph congratulation",
    "names": [
      "congratulations"
    ],
    "tags": []
  },
  "🆑": {
    "description": "squared cl",
    "names": [
      "cl"
    ],
    "tags": []
  },
  "🆘": {
    "description": "squared sos",
    "names": [
      "sos"
    ],
    "tags": [
      "help",
      "emergency"
    ]
  },
  "🆔": {
    "description": "squared id",
    "names": [
      "id"
    ],
    "tags": []
  },
  "🚫": {
    "description": "no entry sign",
    "names": [
      "no_entry_sign"
    ],
    "tags": [
      "block",
      "forbidden"
    ]
  },
  "🔞": {
    "description": "no one under eighteen symbol",
    "names": [
      "underage"
    ],
    "tags": []
  },
  "📵": {
    "description": "no mobile phones",
    "names": [
      "no_mobile_phones"
    ],
    "tags": []
  },
  "🚯": {
    "description": "do not litter symbol",
    "names": [
      "do_not_litter"
    ],
    "tags": []
  },
  "🚱": {
    "description": "non-potable water symbol",
    "names": [
      "non-potable_water"
    ],
    "tags": []
  },
  "🚳": {
    "description": "no bicycles",
    "names": [
      "no_bicycles"
    ],
    "tags": []
  },
  "🚷": {
    "description": "no pedestrians",
    "names": [
      "no_pedestrians"
    ],
    "tags": []
  },
  "🚸": {
    "description": "children crossing",
    "names": [
      "children_crossing"
    ],
    "tags": []
  },
  "⛔": {
    "description": "no entry",
    "names": [
      "no_entry"
    ],
    "tags": [
      "limit"
    ]
  },
  "✳️": {
    "description": "eight spoked asterisk",
    "names": [
      "eight_spoked_asterisk"
    ],
    "tags": []
  },
  "❇️": {
    "description": "sparkle",
    "names": [
      "sparkle"
    ],
    "tags": []
  },
  "❎": {
    "description": "negative squared cross mark",
    "names": [
      "negative_squared_cross_mark"
    ],
    "tags": []
  },
  "✅": {
    "description": "white heavy check mark",
    "names": [
      "white_check_mark"
    ],
    "tags": []
  },
  "✴️": {
    "description": "eight pointed black star",
    "names": [
      "eight_pointed_black_star"
    ],
    "tags": []
  },
  "💟": {
    "description": "heart decoration",
    "names": [
      "heart_decoration"
    ],
    "tags": []
  },
  "🆚": {
    "description": "squared vs",
    "names": [
      "vs"
    ],
    "tags": []
  },
  "📳": {
    "description": "vibration mode",
    "names": [
      "vibration_mode"
    ],
    "tags": []
  },
  "📴": {
    "description": "mobile phone off",
    "names": [
      "mobile_phone_off"
    ],
    "tags": [
      "mute",
      "off"
    ]
  },
  "🅰️": {
    "description": "negative squared latin capital letter a",
    "names": [
      "a"
    ],
    "tags": []
  },
  "🅱️": {
    "description": "negative squared latin capital letter b",
    "names": [
      "b"
    ],
    "tags": []
  },
  "🆎": {
    "description": "negative squared ab",
    "names": [
      "ab"
    ],
    "tags": []
  },
  "🅾️": {
    "description": "negative squared latin capital letter o",
    "names": [
      "o2"
    ],
    "tags": []
  },
  "💠": {
    "description": "diamond shape with a dot inside",
    "names": [
      "diamond_shape_with_a_dot_inside"
    ],
    "tags": []
  },
  "➿": {
    "description": "double curly loop",
    "names": [
      "loop"
    ],
    "tags": []
  },
  "♻️": {
    "description": "black universal recycling symbol",
    "names": [
      "recycle"
    ],
    "tags": [
      "environment",
      "green"
    ]
  },
  "♈": {
    "description": "aries",
    "names": [
      "aries"
    ],
    "tags": []
  },
  "♉": {
    "description": "taurus",
    "names": [
      "taurus"
    ],
    "tags": []
  },
  "♊": {
    "description": "gemini",
    "names": [
      "gemini"
    ],
    "tags": []
  },
  "♋": {
    "description": "cancer",
    "names": [
      "cancer"
    ],
    "tags": []
  },
  "♌": {
    "description": "leo",
    "names": [
      "leo"
    ],
    "tags": []
  },
  "♍": {
    "description": "virgo",
    "names": [
      "virgo"
    ],
    "tags": []
  },
  "♎": {
    "description": "libra",
    "names": [
      "libra"
    ],
    "tags": []
  },
  "♏": {
    "description": "scorpius",
    "names": [
      "scorpius"
    ],
    "tags": []
  },
  "♐": {
    "description": "sagittarius",
    "names": [
      "sagittarius"
    ],
    "tags": []
  },
  "♑": {
    "description": "capricorn",
    "names": [
      "capricorn"
    ],
    "tags": []
  },
  "♒": {
    "description": "aquarius",
    "names": [
      "aquarius"
    ],
    "tags": []
  },
  "♓": {
    "description": "pisces",
    "names": [
      "pisces"
    ],
    "tags": []
  },
  "⛎": {
    "description": "ophiuchus",
    "names": [
      "ophiuchus"
    ],
    "tags": []
  },
  "🔯": {
    "description": "six pointed star with middle dot",
    "names": [
      "six_pointed_star"
    ],
    "tags": []
  },
  "🏧": {
    "description": "automated teller machine",
    "names": [
      "atm"
    ],
    "tags": []
  },
  "💹": {
    "description": "chart with upwards trend and yen sign",
    "names": [
      "chart"
    ],
    "tags": []
  },
  "💲": {
    "description": "heavy dollar sign",
    "names": [
      "heavy_dollar_sign"
    ],
    "tags": []
  },
  "💱": {
    "description": "currency exchange",
    "names": [
      "currency_exchange"
    ],
    "tags": []
  },
  "©️": {
    "description": "copyright sign",
    "names": [
      "copyright"
    ],
    "tags": []
  },
  "®️": {
    "description": "registered sign",
    "names": [
      "registered"
    ],
    "tags": []
  },
  "™️": {
    "description": "trade mark sign",
    "names": [
      "tm"
    ],
    "tags": [
      "trademark"
    ]
  },
  "❌": {
    "description": "cross mark",
    "names": [
      "x"
    ],
    "tags": []
  },
  "‼️": {
    "description": "double exclamation mark",
    "names": [
      "bangbang"
    ],
    "tags": []
  },
  "⁉️": {
    "description": "exclamation question mark",
    "names": [
      "interrobang"
    ],
    "tags": []
  },
  "❗": {
    "description": "heavy exclamation mark symbol",
    "names": [
      "exclamation",
      "heavy_exclamation_mark"
    ],
    "tags": [
      "bang"
    ]
  },
  "❓": {
    "description": "black question mark ornament",
    "names": [
      "question"
    ],
    "tags": [
      "confused"
    ]
  },
  "❕": {
    "description": "white exclamation mark ornament",
    "names": [
      "grey_exclamation"
    ],
    "tags": []
  },
  "❔": {
    "description": "white question mark ornament",
    "names": [
      "grey_question"
    ],
    "tags": []
  },
  "⭕": {
    "description": "heavy large circle",
    "names": [
      "o"
    ],
    "tags": []
  },
  "🔝": {
    "description": "top with upwards arrow above",
    "names": [
      "top"
    ],
    "tags": []
  },
  "🔚": {
    "description": "end with leftwards arrow above",
    "names": [
      "end"
    ],
    "tags": []
  },
  "🔙": {
    "description": "back with leftwards arrow above",
    "names": [
      "back"
    ],
    "tags": []
  },
  "🔛": {
    "description": "on with exclamation mark with left right arrow above",
    "names": [
      "on"
    ],
    "tags": []
  },
  "🔜": {
    "description": "soon with rightwards arrow above",
    "names": [
      "soon"
    ],
    "tags": []
  },
  "🔃": {
    "description": "clockwise downwards and upwards open circle arrows",
    "names": [
      "arrows_clockwise"
    ],
    "tags": []
  },
  "🕛": {
    "description": "clock face twelve oclock",
    "names": [
      "clock12"
    ],
    "tags": []
  },
  "🕧": {
    "description": "clock face twelve-thirty",
    "names": [
      "clock1230"
    ],
    "tags": []
  },
  "🕐": {
    "description": "clock face one oclock",
    "names": [
      "clock1"
    ],
    "tags": []
  },
  "🕜": {
    "description": "clock face one-thirty",
    "names": [
      "clock130"
    ],
    "tags": []
  },
  "🕑": {
    "description": "clock face two oclock",
    "names": [
      "clock2"
    ],
    "tags": []
  },
  "🕝": {
    "description": "clock face two-thirty",
    "names": [
      "clock230"
    ],
    "tags": []
  },
  "🕒": {
    "description": "clock face three oclock",
    "names": [
      "clock3"
    ],
    "tags": []
  },
  "🕞": {
    "description": "clock face three-thirty",
    "names": [
      "clock330"
    ],
    "tags": []
  },
  "🕓": {
    "description": "clock face four oclock",
    "names": [
      "clock4"
    ],
    "tags": []
  },
  "🕟": {
    "description": "clock face four-thirty",
    "names": [
      "clock430"
    ],
    "tags": []
  },
  "🕔": {
    "description": "clock face five oclock",
    "names": [
      "clock5"
    ],
    "tags": []
  },
  "🕠": {
    "description": "clock face five-thirty",
    "names": [
      "clock530"
    ],
    "tags": []
  },
  "🕕": {
    "description": "clock face six oclock",
    "names": [
      "clock6"
    ],
    "tags": []
  },
  "🕖": {
    "description": "clock face seven oclock",
    "names": [
      "clock7"
    ],
    "tags": []
  },
  "🕗": {
    "description": "clock face eight oclock",
    "names": [
      "clock8"
    ],
    "tags": []
  },
  "🕘": {
    "description": "clock face nine oclock",
    "names": [
      "clock9"
    ],
    "tags": []
  },
  "🕙": {
    "description": "clock face ten oclock",
    "names": [
      "clock10"
    ],
    "tags": []
  },
  "🕚": {
    "description": "clock face eleven oclock",
    "names": [
      "clock11"
    ],
    "tags": []
  },
  "🕡": {
    "description": "clock face six-thirty",
    "names": [
      "clock630"
    ],
    "tags": []
  },
  "🕢": {
    "description": "clock face seven-thirty",
    "names": [
      "clock730"
    ],
    "tags": []
  },
  "🕣": {
    "description": "clock face eight-thirty",
    "names": [
      "clock830"
    ],
    "tags": []
  },
  "🕤": {
    "description": "clock face nine-thirty",
    "names": [
      "clock930"
    ],
    "tags": []
  },
  "🕥": {
    "description": "clock face ten-thirty",
    "names": [
      "clock1030"
    ],
    "tags": []
  },
  "🕦": {
    "description": "clock face eleven-thirty",
    "names": [
      "clock1130"
    ],
    "tags": []
  },
  "✖️": {
    "description": "heavy multiplication x",
    "names": [
      "heavy_multiplication_x"
    ],
    "tags": []
  },
  "➕": {
    "description": "heavy plus sign",
    "names": [
      "heavy_plus_sign"
    ],
    "tags": []
  },
  "➖": {
    "description": "heavy minus sign",
    "names": [
      "heavy_minus_sign"
    ],
    "tags": []
  },
  "➗": {
    "description": "heavy division sign",
    "names": [
      "heavy_division_sign"
    ],
    "tags": []
  },
  "♠️": {
    "description": "black spade suit",
    "names": [
      "spades"
    ],
    "tags": []
  },
  "♥️": {
    "description": "black heart suit",
    "names": [
      "hearts"
    ],
    "tags": []
  },
  "♣️": {
    "description": "black club suit",
    "names": [
      "clubs"
    ],
    "tags": []
  },
  "♦️": {
    "description": "black diamond suit",
    "names": [
      "diamonds"
    ],
    "tags": []
  },
  "💮": {
    "description": "white flower",
    "names": [
      "white_flower"
    ],
    "tags": []
  },
  "💯": {
    "description": "hundred points symbol",
    "names": [
      "100"
    ],
    "tags": [
      "score",
      "perfect"
    ]
  },
  "✔️": {
    "description": "heavy check mark",
    "names": [
      "heavy_check_mark"
    ],
    "tags": []
  },
  "☑️": {
    "description": "ballot box with check",
    "names": [
      "ballot_box_with_check"
    ],
    "tags": []
  },
  "🔘": {
    "description": "radio button",
    "names": [
      "radio_button"
    ],
    "tags": []
  },
  "🔗": {
    "description": "link symbol",
    "names": [
      "link"
    ],
    "tags": []
  },
  "➰": {
    "description": "curly loop",
    "names": [
      "curly_loop"
    ],
    "tags": []
  },
  "〰️": {
    "description": "wavy dash",
    "names": [
      "wavy_dash"
    ],
    "tags": []
  },
  "〽️": {
    "description": "part alternation mark",
    "names": [
      "part_alternation_mark"
    ],
    "tags": []
  },
  "🔱": {
    "description": "trident emblem",
    "names": [
      "trident"
    ],
    "tags": []
  },
  "◼️": {
    "description": "black medium square",
    "names": [
      "black_medium_square"
    ],
    "tags": []
  },
  "◻️": {
    "description": "white medium square",
    "names": [
      "white_medium_square"
    ],
    "tags": []
  },
  "◾": {
    "description": "black medium small square",
    "names": [
      "black_medium_small_square"
    ],
    "tags": []
  },
  "◽": {
    "description": "white medium small square",
    "names": [
      "white_medium_small_square"
    ],
    "tags": []
  },
  "▪️": {
    "description": "black small square",
    "names": [
      "black_small_square"
    ],
    "tags": []
  },
  "▫️": {
    "description": "white small square",
    "names": [
      "white_small_square"
    ],
    "tags": []
  },
  "🔺": {
    "description": "up-pointing red triangle",
    "names": [
      "small_red_triangle"
    ],
    "tags": []
  },
  "🔲": {
    "description": "black square button",
    "names": [
      "black_square_button"
    ],
    "tags": []
  },
  "🔳": {
    "description": "white square button",
    "names": [
      "white_square_button"
    ],
    "tags": []
  },
  "⚫": {
    "description": "medium black circle",
    "names": [
      "black_circle"
    ],
    "tags": []
  },
  "⚪": {
    "description": "medium white circle",
    "names": [
      "white_circle"
    ],
    "tags": []
  },
  "🔴": {
    "description": "large red circle",
    "names": [
      "red_circle"
    ],
    "tags": []
  },
  "🔵": {
    "description": "large blue circle",
    "names": [
      "large_blue_circle"
    ],
    "tags": []
  },
  "🔻": {
    "description": "down-pointing red triangle",
    "names": [
      "small_red_triangle_down"
    ],
    "tags": []
  },
  "⬜": {
    "description": "white large square",
    "names": [
      "white_large_square"
    ],
    "tags": []
  },
  "⬛": {
    "description": "black large square",
    "names": [
      "black_large_square"
    ],
    "tags": []
  },
  "🔶": {
    "description": "large orange diamond",
    "names": [
      "large_orange_diamond"
    ],
    "tags": []
  },
  "🔷": {
    "description": "large blue diamond",
    "names": [
      "large_blue_diamond"
    ],
    "tags": []
  },
  "🔸": {
    "description": "small orange diamond",
    "names": [
      "small_orange_diamond"
    ],
    "tags": []
  },
  "🔹": {
    "description": "small blue diamond",
    "names": [
      "small_blue_diamond"
    ],
    "tags": []
  }
}

},{}],15:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module gemoji
 * @fileoverview GitHub emoji: gemoji.
 */

'use strict';

/* Dependencies. */
var data = require('./data/gemoji.json');

/* Expose. */
exports.unicode = data;
exports.name = {};

/* Transform all emoji. */
var emoji;

for (emoji in data) {
  enhance(emoji);
}

/**
 * Transform an emoji.
 *
 * @param {string} character - Unicode emoji to extend.
 */
function enhance(character) {
  var information = data[character];
  var names = information.names;
  var length = names.length;
  var index = 0; /* first must be skipped. */

  /* Add the main `name` and the emoji. */
  information.name = names[0];
  information.emoji = character;

  /* Add names. */
  exports.name[names[0]] = information;

  while (++index < length) {
    exports.name[names[index]] = information;
  }
}

},{"./data/gemoji.json":14}],16:[function(require,module,exports){
'use strict';

/* Dependencies. */
var toString = require('nlcst-to-string');
var modifier = require('unist-util-modify-children');
var raw = require('emoticon');

/* Expose. */
module.exports = modifier(mergeEmoticons);

/* Node types. */
var EMOTICON_NODE = 'EmoticonNode';

/* Magic numbers.
 *
 * Emoticons are treated by a parser as multiple nodes.
 * Because this modifier walks forwards, when a non-
 * emoticon matches it would normaly walk to the end
 * (the last node). However, because the longest emoticon
 * is tokenized as `Punctuation` (eyes), `Punctuation`
 * (a tear), `Punctuation` (another tear), `Punctuation`
 * (a nose), and `Punctuation` (a frowning mouth), we can
 * safely break when the modifier has walked 5 characters. */
var MAX_EMOTICON_LENGTH = 5;

/* Unpack. */
var emoticons = [];
var start = [];
var end = [];

unpack();

/* Merge emoticons into an `EmoticonNode`. */
function mergeEmoticons(child, index, parent) {
  var siblings;
  var value;
  var siblingIndex;
  var node;
  var emoticon;
  var subvalue;

  /* Check if `child`s first character could be used
   * to start an emoticon. */
  if (start.indexOf(toString(child).charAt(0)) !== -1) {
    siblings = parent.children;
    siblingIndex = index;
    node = child;
    value = '';

    while (node) {
      if (value.length >= MAX_EMOTICON_LENGTH) {
        return;
      }

      subvalue = toString(node);

      value += subvalue;

      /* The second test, if the last character of
       * the current node is superfluous but
       * improves performance by 30%. */
      if (
        node.type !== EMOTICON_NODE &&
        end.indexOf(subvalue.charAt(subvalue.length - 1)) !== -1 &&
        emoticons.indexOf(value) !== -1
      ) {
        emoticon = {type: EMOTICON_NODE, value: value};

        if (child.position && node.position) {
          emoticon.position = {
            start: child.position.start,
            end: node.position.end
          };
        }

        siblings.splice(index, siblingIndex - index + 1, emoticon);

        /* Some emoticons, like `:-`, can be followed by
         * more characters to form other emoticons. */
        return index - 1;
      }

      node = siblings[++siblingIndex];
    }
  }
}

function unpack() {
  var length = raw.length;
  var index = -1;
  var subset;
  var offset;
  var count;
  var subvalue;
  var char;

  while (++index < length) {
    subset = raw[index].emoticons;
    count = subset.length;
    offset = -1;

    while (++offset < count) {
      subvalue = subset[offset];

      emoticons.push(subvalue);

      char = subvalue.charAt(0);
      if (start.indexOf(char) === -1) {
        start.push(char);
      }

      char = subvalue.charAt(subvalue.length - 1);
      if (end.indexOf(char) === -1) {
        end.push(char);
      }
    }
  }
}

},{"emoticon":4,"nlcst-to-string":17,"unist-util-modify-children":55}],17:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module nlcst:to-string
 * @fileoverview Stringify NLCST.
 */

'use strict';

/* eslint-env commonjs */

/**
 * Stringify an NLCST node.
 *
 * @param {NLCSTNode|Array.<NLCSTNode>} node - Node to to
 *   stringify.
 * @param {string} separator - Value to separate each item
 *   with.
 * @return {string} - Stringified `node`.
 */
function nlcstToString(node, separator) {
    var sep = separator || '';
    var values;
    var length;
    var children;

    if (!node || (!('length' in node) && !node.type)) {
        throw new Error('Expected node, not `' + node + '`');
    }

    if (typeof node.value === 'string') {
        return node.value;
    }

    children = 'length' in node ? node : node.children;
    length = children.length;

    /*
     * Shortcut: This is pretty common, and a small performance win.
     */

    if (length === 1 && 'value' in children[0]) {
        return children[0].value;
    }

    values = [];

    while (length--) {
        values[length] = nlcstToString(children[length], sep);
    }

    return values.join(sep);
}

/*
 * Expose.
 */

module.exports = nlcstToString;

},{}],18:[function(require,module,exports){
var wrappy = require('wrappy')
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}

},{"wrappy":60}],19:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module parse-latin
 * @fileoverview Latin-script (natural language) parser.
 */

'use strict';

/* Expose. */
module.exports = require('./lib/index.js');

},{"./lib/index.js":21}],20:[function(require,module,exports){
/* This module is generated by `script/build-expressions.js` */
'use strict';

module.exports = {
  affixSymbol: /^([\)\]\}\u0F3B\u0F3D\u169C\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E23\u2E25\u2E27\u2E29\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63]|["'\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21]|[!\.\?\u2026\u203D])\1*$/,
  newLine: /^[ \t]*((\r?\n|\r)[\t ]*)+$/,
  newLineMulti: /^[ \t]*((\r?\n|\r)[\t ]*){2,}$/,
  terminalMarker: /^((?:[!\.\?\u2026\u203D])+)$/,
  wordSymbolInner: /^((?:[&'\-\.:=\?@\xAD\xB7\u2010\u2011\u2019\u2027])|(?:_)+)$/,
  numerical: /^(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE47\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD834[\uDF60-\uDF71]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDCC7-\uDCCF]|\uD83C[\uDD00-\uDD0C])+$/,
  lowerInitial: /^(?:[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB])/,
  surrogates: /[\uD800-\uDFFF]/,
  punctuation: /[!"'-\),-\/:;\?\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u201F\u2022-\u2027\u2032-\u203A\u203C-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
  word: /[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D75\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABE\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u20D0-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u3192-\u3195\u31A0-\u31BA\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA830-\uA835\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0-\uDEFB\uDF00-\uDF23\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F-\uDE47\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE6\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF\uDE60-\uDE7E]|\uD804[\uDC00-\uDC46\uDC52-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF3B]|\uD806[\uDCA0-\uDCF2\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44\uDF60-\uDF71]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
  whiteSpace: /[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
};

},{}],21:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin
 * @fileoverview Latin-script (natural language) parser.
 */

'use strict';

/* Dependencies. */
var createParser = require('./parser');
var expressions = require('./expressions');

/* Expose. */
module.exports = ParseLatin;

/* == PARSE LATIN ================================================== */

/**
 * Transform Latin-script natural language into
 * an NLCST-tree.
 *
 * @param {VFile?} file - Virtual file.
 * @param {Object?} options - Configuration.
 * @constructor {ParseLatin}
 */
function ParseLatin(file, options) {
  var position;

  if (!(this instanceof ParseLatin)) {
    return new ParseLatin(file, options);
  }

  if (file && file.message) {
    this.file = file;
  } else {
    options = file;
  }

  position = options && options.position;

  if (position !== null && position !== undefined) {
    this.position = Boolean(position);
  }
}

/* Quick access to the prototype. */
var proto = ParseLatin.prototype;

/* Default position. */
proto.position = true;

/* Create text nodes. */
proto.tokenizeSymbol = createTextFactory('Symbol');
proto.tokenizeWhiteSpace = createTextFactory('WhiteSpace');
proto.tokenizePunctuation = createTextFactory('Punctuation');
proto.tokenizeSource = createTextFactory('Source');
proto.tokenizeText = createTextFactory('Text');

/* Expose `run`. */
proto.run = run;

/*
 * Inject `plugins` to modifiy the result of the method
 * at `key` on the operated on context.
 *
 * @param {string} key
 * @param {Function|Array.<Function>} plugins
 * @this {ParseLatin|Object}
 */

proto.use = useFactory(function (context, key, plugins) {
  context[key] = context[key].concat(plugins);
});

/*
 * Inject `plugins` to modifiy the result of the method
 * at `key` on the operated on context, before any other.
 *
 * @param {string} key
 * @param {Function|Array.<Function>} plugins
 * @this {ParseLatin|Object}
 */

proto.useFirst = useFactory(function (context, key, plugins) {
  context[key] = plugins.concat(context[key]);
});

/**
 * Easy access to the document parser. This additionally
 * supports retext-style invocation: where an instance is
 * created for each file, and the file is given on
 * instanciation.
 *
 * @see ParseLatin#tokenizeRoot
 * @param {string?} value - Value to parse.
 * @return {NLCSTWordNode} - Word node.
 */
proto.parse = function (value) {
  return this.tokenizeRoot(this.file ? this.file.toString() : value);
};

/**
 * Transform a `value` into a list of `NLCSTNode`s.
 *
 * @see tokenize
 * @param {string?} value - Value to tokenize.
 * @return {Array.<NLCSTNode>} - Nodes.
 */
proto.tokenize = function (value) {
  return tokenize(this, value);
};

/* == PARENT NODES =================================================
 *
 * All these nodes are `pluggable`: they come with a
 * `use` method which accepts a plugin
 * (`function(NLCSTNode)`). Every time one of these
 * methods are called, the plugin is invoked with the
 * node, allowing for easy modification.
 *
 * In fact, the internal transformation from `tokenize`
 * (a list of words, white space, punctuation, and
 * symbols) to `tokenizeRoot` (an NLCST tree), is also
 * implemented through this mechanism. */

/**
 * Create a `WordNode` with its children set to a single
 * `TextNode`, its value set to the given `value`.
 *
 * @see pluggable
 * @param {string?} value - Value to classify as a word.
 * @param {Function} eat - Eater.
 * @return {NLCSTWordNode} - Word node.
 */
pluggable(ParseLatin, 'tokenizeWord', function (value, eat) {
  var add = (eat || noopEat)('');
  var parent = {type: 'WordNode', children: []};

  this.tokenizeText(value, eat, parent);

  return add(parent);
});

/**
 * Create a `SentenceNode` with its children set to
 * `Node`s, their values set to the tokenized given
 * `value`.
 *
 * Unless plugins add new nodes, the sentence is
 * populated by `WordNode`s, `SymbolNode`s,
 * `PunctuationNode`s, and `WhiteSpaceNode`s.
 *
 * @see pluggable
 *
 * @param {string?} value
 * @return {NLCSTSentenceNode}
 */
pluggable(ParseLatin, 'tokenizeSentence', createParser({
  type: 'SentenceNode',
  tokenizer: 'tokenize'
}));

/**
 * Create a `ParagraphNode` with its children set to
 * `Node`s, their values set to the tokenized given
 * `value`.
 *
 * Unless plugins add new nodes, the paragraph is
 * populated by `SentenceNode`s and `WhiteSpaceNode`s.
 *
 * @see pluggable
 *
 * @param {string?} value
 * @return {NLCSTParagraphNode}
 */
pluggable(ParseLatin, 'tokenizeParagraph', createParser({
  type: 'ParagraphNode',
  delimiter: expressions.terminalMarker,
  delimiterType: 'PunctuationNode',
  tokenizer: 'tokenizeSentence'
}));

/**
 * Create a `RootNode` with its children set to `Node`s,
 * their values set to the tokenized given `value`.
 *
 * Unless plugins add new nodes, the root is populated by
 * `ParagraphNode`s and `WhiteSpaceNode`s.
 *
 * @see pluggable
 *
 * @param {string?} value
 * @return {NLCSTRootNode}
 */
pluggable(ParseLatin, 'tokenizeRoot', createParser({
  type: 'RootNode',
  delimiter: expressions.newLine,
  delimiterType: 'WhiteSpaceNode',
  tokenizer: 'tokenizeParagraph'
}));

/* == PLUGINS ====================================================== */

proto.use('tokenizeSentence', [
  require('./plugin/merge-initial-word-symbol'),
  require('./plugin/merge-final-word-symbol'),
  require('./plugin/merge-inner-word-symbol'),
  require('./plugin/merge-inner-word-slash'),
  require('./plugin/merge-initialisms'),
  require('./plugin/merge-words'),
  require('./plugin/patch-position')
]);

proto.use('tokenizeParagraph', [
  require('./plugin/merge-non-word-sentences'),
  require('./plugin/merge-affix-symbol'),
  require('./plugin/merge-initial-lower-case-letter-sentences'),
  require('./plugin/merge-prefix-exceptions'),
  require('./plugin/merge-affix-exceptions'),
  require('./plugin/merge-remaining-full-stops'),
  require('./plugin/make-initial-white-space-siblings'),
  require('./plugin/make-final-white-space-siblings'),
  require('./plugin/break-implicit-sentences'),
  require('./plugin/remove-empty-nodes'),
  require('./plugin/patch-position')
]);

proto.use('tokenizeRoot', [
  require('./plugin/make-initial-white-space-siblings'),
  require('./plugin/make-final-white-space-siblings'),
  require('./plugin/remove-empty-nodes'),
  require('./plugin/patch-position')
]);

/* == TEXT NODES =================================================== */

/**
 * Factory to create a `Text`.
 *
 * @param {string} type - Name of text node.
 * @return {Function} - Text creator.
 */
function createTextFactory(type) {
  type += 'Node';

  return createText;

  /**
   * Construct a `Text` from a bound `type`
   *
   * @param {value} value - Value of the node.
   * @param {Function?} [eat] - Optional eat mechanism
   *   to use.
   * @param {NLCSTParentNode?} [parent] - Optional
   *   parent to insert into.
   * @return {NLCSTText} - Text node.
   */
  function createText(value, eat, parent) {
    if (value === null || value === undefined) {
      value = '';
    }

    return (eat || noopEat)(value)({
      type: type,
      value: String(value)
    }, parent);
  }
}

/**
 * Run transform plug-ins for `key` on `nodes`.
 *
 * @param {string} key - Unique name.
 * @param {Array.<Node>} nodes - List of nodes.
 * @return {Array.<Node>} - `nodes`.
 */
function run(key, nodes) {
  var wareKey = key + 'Plugins';
  var plugins = this[wareKey];
  var index = -1;

  if (plugins) {
    while (plugins[++index]) {
      plugins[index](nodes);
    }
  }

  return nodes;
}

/**
 * @param {Function} Constructor - Context.
 * @param {string} key - Unique name.
 * @param {function(*): undefined} callback - Wrapped.
 */
function pluggable(Constructor, key, callback) {
  /**
   * Set a pluggable version of `callback`
   * on `Constructor`.
   */
  Constructor.prototype[key] = function () {
    return this.run(key, callback.apply(this, arguments));
  };
}

/**
 * Factory to inject `plugins`. Takes `callback` for
 * the actual inserting.
 *
 * @param {function(Object, string, Array.<Function>)} callback - Wrapped.
 * @return {Function} - Use.
 */
function useFactory(callback) {
  return use;

  /**
   * Validate if `plugins` can be inserted. Invokes
   * the bound `callback` to do the actual inserting.
   *
   * @param {string} key - Method to inject on
   * @param {Array.<Function>|Function} plugins - One
   *   or more plugins.
   */
  function use(key, plugins) {
    var self = this;
    var wareKey;

    /* Throw if the method is not pluggable. */
    if (!(key in self)) {
      throw new Error(
        'Illegal Invocation: Unsupported `key` for ' +
        '`use(key, plugins)`. Make sure `key` is a ' +
        'supported function'
      );
    }

    /* Fail silently when no plugins are given. */
    if (!plugins) {
      return;
    }

    wareKey = key + 'Plugins';

    /* Make sure `plugins` is a list. */
    if (typeof plugins === 'function') {
      plugins = [plugins];
    } else {
      plugins = plugins.concat();
    }

    /* Make sure `wareKey` exists. */
    if (!self[wareKey]) {
      self[wareKey] = [];
    }

    /* Invoke callback with the ware key and plugins. */
    callback(self, wareKey, plugins);
  }
}

/* == CLASSIFY ===================================================== */

/* Match a word character. */
var EXPRESSION_WORD = expressions.word;

/* Match a surrogate character. */
var EXPRESSION_SURROGATES = expressions.surrogates;

/* Match a punctuation character. */
var EXPRESSION_PUNCTUATION = expressions.punctuation;

/* Match a white space character. */
var EXPRESSION_WHITE_SPACE = expressions.whiteSpace;

/**
 * Transform a `value` into a list of `NLCSTNode`s.
 *
 * @param {ParseLatin} parser - Context.
 * @param {string?} value - Value to tokenize.
 * @return {Array.<NLCSTNode>} - Nodes.
 */
function tokenize(parser, value) {
  var tokens;
  var offset;
  var line;
  var column;
  var index;
  var length;
  var character;
  var queue;
  var prev;
  var left;
  var right;
  var eater;

  if (value === null || value === undefined) {
    value = '';
  } else if (value instanceof String) {
    value = value.toString();
  }

  if (typeof value !== 'string') {
    /**
     * Return the given nodes if this is either an
     * empty array, or an array with a node as a first
     * child.
     */

    if ('length' in value && (!value[0] || value[0].type)) {
      return value;
    }

    throw new Error(
      'Illegal invocation: \'' + value + '\'' +
      ' is not a valid argument for \'ParseLatin\''
    );
  }

  tokens = [];

  if (!value) {
    return tokens;
  }

  index = offset = 0;
  line = 1;
  column = 1;

  /* Eat mechanism to use. */
  eater = parser.position ? eat : noPositionEat;

  length = value.length;
  prev = queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (EXPRESSION_WHITE_SPACE.test(character)) {
      right = 'WhiteSpace';
    } else if (EXPRESSION_PUNCTUATION.test(character)) {
      right = 'Punctuation';
    } else if (EXPRESSION_WORD.test(character)) {
      right = 'Word';
    } else {
      right = 'Symbol';
    }

    tick();

    prev = character;
    character = '';
    left = right;
    right = null;

    index++;
  }

  tick();

  return tokens;

  /**
   * Check one character.
   */
  function tick() {
    if (
      left === right &&
      (
        left === 'Word' ||
        left === 'WhiteSpace' ||
        character === prev ||
        EXPRESSION_SURROGATES.test(character)
      )
    ) {
      queue += character;
    } else {
      /* Flush the previous queue. */
      if (queue) {
        parser['tokenize' + left](queue, eater);
      }

      queue = character;
    }
  }

  /**
   * Remove `subvalue` from `value`.
   * Expects `subvalue` to be at the start from
   * `value`, and applies no validation.
   *
   * @example
   *   eat('foo')({type: 'TextNode', value: 'foo'});
   *
   * @param {string} subvalue - Removed from `value`,
   *   and passed to `update`.
   * @return {Function} - Wrapper around `add`, which
   *   also adds `position` to node.
   */
  function eat(subvalue) {
    var pos = position();

    update(subvalue);

    return apply;

    /**
     * Add the given arguments, add `position` to
     * the returned node, and return the node.
     *
     * @return {Node} - Patched node.
     */
    function apply() {
      return pos(add.apply(null, arguments));
    }
  }

  /**
   * Remove `subvalue` from `value`. Does not patch
   * positional information.
   *
   * @return {Function} - Apply.
   */
  function noPositionEat() {
    return apply;

    /**
     * Add the given arguments and return the node.
     *
     * @return {Node} - Given node.
     */
    function apply() {
      return add.apply(null, arguments);
    }
  }

  /**
   * Add mechanism.
   *
   * @param {NLCSTNode} node - Node to add.
   * @param {NLCSTParentNode?} [parent] - Optional parent
   *   node to insert into.
   * @return {NLCSTNode} - `node`.
   */
  function add(node, parent) {
    if (parent) {
      parent.children.push(node);
    } else {
      tokens.push(node);
    }

    return node;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @example
   *   var update = position();
   *   updatePosition('foo');
   *   update({});
   *   // {
   *   //   position: {
   *   //     start: {line: 1, column: 1}
   *   //     end: {line: 1, column: 3}
   *   //   }
   *   // }
   *
   * @returns {function(Node): Node} - Patched node.
   */
  function position() {
    var before = now();

    /**
     * Add the position to a node.
     *
     * @example
     *   update({type: 'text', value: 'foo'});
     *
     * @param {Node} node - Node to attach position
     *   on.
     * @return {Node} - `node`.
     */
    function patch(node) {
      node.position = new Position(before);

      return node;
    }

    return patch;
  }

  /**
   * Update line and column based on `value`.
   *
   * @example
   *   update('foo');
   *
   * @param {string} subvalue - Eaten value..
   */
  function update(subvalue) {
    var subvalueLength = subvalue.length;
    var character = -1;
    var lastIndex = -1;

    offset += subvalueLength;

    while (++character < subvalueLength) {
      if (subvalue.charAt(character) === '\n') {
        lastIndex = character;
        line++;
      }
    }

    if (lastIndex === -1) {
      column += subvalueLength;
    } else {
      column = subvalueLength - lastIndex;
    }
  }

  /**
   * Store position information for a node.
   *
   * @example
   *   start = now();
   *   updatePosition('foo');
   *   location = new Position(start);
   *   // {start: {line: 1, column: 1}, end: {line: 1, column: 3}}
   *
   * @param {Object} start - Starting position.
   */
  function Position(start) {
    this.start = start;
    this.end = now();
  }

  /**
   * Get the current position.
   *
   * @example
   *   position = now(); // {line: 1, column: 1}
   *
   * @return {Object} - Current position.
   */
  function now() {
    return {
      line: line,
      column: column,
      offset: offset
    };
  }
}

/**
 * Add mechanism used when text-tokenisers are called
 * directly outside of the `tokenize` function.
 *
 * @param {NLCSTNode} node - Node to add.
 * @param {NLCSTParentNode?} [parent] - Optional parent
 *   node to insert into.
 * @return {NLCSTNode} - `node`.
 */
function noopAdd(node, parent) {
  if (parent) {
    parent.children.push(node);
  }

  return node;
}

/**
 * Eat and add mechanism without adding positional
 * information, used when text-tokenisers are called
 * directly outside of the `tokenize` function.
 *
 * @return {Function} - Add.
 */
function noopEat() {
  return noopAdd;
}

},{"./expressions":20,"./parser":22,"./plugin/break-implicit-sentences":23,"./plugin/make-final-white-space-siblings":24,"./plugin/make-initial-white-space-siblings":25,"./plugin/merge-affix-exceptions":26,"./plugin/merge-affix-symbol":27,"./plugin/merge-final-word-symbol":28,"./plugin/merge-initial-lower-case-letter-sentences":29,"./plugin/merge-initial-word-symbol":30,"./plugin/merge-initialisms":31,"./plugin/merge-inner-word-slash":32,"./plugin/merge-inner-word-symbol":33,"./plugin/merge-non-word-sentences":34,"./plugin/merge-prefix-exceptions":35,"./plugin/merge-remaining-full-stops":36,"./plugin/merge-words":37,"./plugin/patch-position":38,"./plugin/remove-empty-nodes":39}],22:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:parser
 * @fileoverview Construct a parser for a given node.
 */

'use strict';

/* Dependencies. */
var tokenizer = require('./tokenizer');

/* Expose. */
module.exports = parserFactory;

/**
 * Construct a parser based on `options`.
 *
 * @param {Object} options - Configuration.
 * @return {function(string): NLCSTNode} - Parser.
 */
function parserFactory(options) {
  var type = options.type;
  var tokenizerProperty = options.tokenizer;
  var delimiter = options.delimiter;
  var tokenize = delimiter && tokenizer(options.delimiterType, delimiter);

  return parser;

  function parser(value) {
    var children = this[tokenizerProperty](value);

    return {
      type: type,
      children: tokenize ? tokenize(children) : children
    };
  }
}

},{"./tokenizer":40}],23:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:break-implicit-sentencs
 * @fileoverview Break a sentence if a white space with
 *   more than one new-line is found.
 */

'use strict';

/* Dependencies. */
var nlcstToString = require('nlcst-to-string');
var modifyChildren = require('unist-util-modify-children');
var expressions = require('../expressions');

/* Expose. */
module.exports = modifyChildren(breakImplicitSentences);

/* Two or more new line characters. */
var EXPRESSION_MULTI_NEW_LINE = expressions.newLineMulti;

/**
 * Break a sentence if a white space with more
 * than one new-line is found.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTParagraphNode} parent - Parent of `child`.
 */
function breakImplicitSentences(child, index, parent) {
  var children;
  var position;
  var length;
  var tail;
  var head;
  var end;
  var insertion;
  var node;

  if (child.type !== 'SentenceNode') {
    return;
  }

  children = child.children;

  /* Ignore first and last child. */
  length = children.length - 1;
  position = 0;

  while (++position < length) {
    node = children[position];

    if (
      node.type !== 'WhiteSpaceNode' ||
      !EXPRESSION_MULTI_NEW_LINE.test(nlcstToString(node))
    ) {
      continue;
    }

    child.children = children.slice(0, position);

    insertion = {
      type: 'SentenceNode',
      children: children.slice(position + 1)
    };

    tail = children[position - 1];
    head = children[position + 1];

    parent.children.splice(index + 1, 0, node, insertion);

    if (child.position && tail.position && head.position) {
      end = child.position.end;

      child.position.end = tail.position.end;

      insertion.position = {
        start: head.position.start,
        end: end
      };
    }

    return index + 1;
  }
}

},{"../expressions":20,"nlcst-to-string":17,"unist-util-modify-children":55}],24:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:make-final-white-space-siblings
 * @fileoverview Make final white-space siblings.
 */

'use strict';

/* Dependencies. */
var modifyChildren = require('unist-util-modify-children');

/* Expose. */
module.exports = modifyChildren(makeFinalWhiteSpaceSiblings);

/**
 * Move white space ending a paragraph up, so they are
 * the siblings of paragraphs.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTParent} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function makeFinalWhiteSpaceSiblings(child, index, parent) {
  var children = child.children;
  var prev;

  if (
    children &&
    children.length !== 0 &&
    children[children.length - 1].type === 'WhiteSpaceNode'
  ) {
    parent.children.splice(index + 1, 0, child.children.pop());
    prev = children[children.length - 1];

    if (prev && prev.position && child.position) {
      child.position.end = prev.position.end;
    }

    /* Next, iterate over the current node again. */
    return index;
  }
}

},{"unist-util-modify-children":55}],25:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:make-initial-white-space-siblings
 * @fileoverview Make initial white-space siblings.
 */

'use strict';

/* Dependencies. */
var visitChildren = require('unist-util-visit-children');

/* Expose. */
module.exports = visitChildren(makeInitialWhiteSpaceSiblings);

/**
 * Move white space starting a sentence up, so they are
 * the siblings of sentences.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTParent} parent - Parent of `child`.
 */
function makeInitialWhiteSpaceSiblings(child, index, parent) {
  var children = child.children;
  var next;

  if (
    children &&
    children.length !== 0 &&
    children[0].type === 'WhiteSpaceNode'
  ) {
    parent.children.splice(index, 0, children.shift());
    next = children[0];

    if (next && next.position && child.position) {
      child.position.start = next.position.start;
    }
  }
}

},{"unist-util-visit-children":57}],26:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:merge-affix-exceptions
 * @fileoverview Merge a sentence into its previous
 *   sentence, when the sentence starts with a comma.
 */

'use strict';

/* Dependencies. */
var nlcstToString = require('nlcst-to-string');
var modifyChildren = require('unist-util-modify-children');

/* Expose. */
module.exports = modifyChildren(mergeAffixExceptions);

/**
 * Merge a sentence into its previous sentence, when
 * the sentence starts with a comma.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTParagraphNode} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function mergeAffixExceptions(child, index, parent) {
  var children = child.children;
  var node;
  var position;
  var value;
  var previousChild;

  if (!children || !children.length || index === 0) {
    return;
  }

  position = -1;

  while (children[++position]) {
    node = children[position];

    if (node.type === 'WordNode') {
      return;
    }

    if (
      node.type === 'SymbolNode' ||
      node.type === 'PunctuationNode'
    ) {
      value = nlcstToString(node);

      if (value !== ',' && value !== ';') {
        return;
      }

      previousChild = parent.children[index - 1];

      previousChild.children = previousChild.children.concat(children);

      /* Update position. */
      if (previousChild.position && child.position) {
        previousChild.position.end = child.position.end;
      }

      parent.children.splice(index, 1);

      /* Next, iterate over the node *now* at the current
       * position. */
      return index;
    }
  }
}

},{"nlcst-to-string":17,"unist-util-modify-children":55}],27:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:merge-affix-symbol
 * @fileoverview Move certain punctuation following a
 *   terminal marker (thus in the next sentence) to the
 *   previous sentence.
 */

'use strict';

/* Dependencies. */
var nlcstToString = require('nlcst-to-string');
var modifyChildren = require('unist-util-modify-children');
var expressions = require('../expressions');

/* Expose. */
module.exports = modifyChildren(mergeAffixSymbol);

/* Closing or final punctuation, or terminal markers
 * that should still be included in the previous
 * sentence, even though they follow the sentence's
 * terminal marker. */
var EXPRESSION_AFFIX_SYMBOL = expressions.affixSymbol;

/**
 * Move certain punctuation following a terminal
 * marker (thus in the next sentence) to the
 * previous sentence.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTParagraphNode} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function mergeAffixSymbol(child, index, parent) {
  var children = child.children;
  var first;
  var second;
  var prev;

  if (
    children &&
    children.length &&
    index !== 0
  ) {
    first = children[0];
    second = children[1];
    prev = parent.children[index - 1];

    if (
      (
        first.type === 'SymbolNode' ||
        first.type === 'PunctuationNode'
      ) &&
      EXPRESSION_AFFIX_SYMBOL.test(nlcstToString(first))
    ) {
      prev.children.push(children.shift());

      /* Update position. */
      if (first.position && prev.position) {
        prev.position.end = first.position.end;
      }

      if (second && second.position && child.position) {
        child.position.start = second.position.start;
      }

      /* Next, iterate over the previous node again. */
      return index - 1;
    }
  }
}

},{"../expressions":20,"nlcst-to-string":17,"unist-util-modify-children":55}],28:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:merge-final-word-symbol
 * @fileoverview Merge certain symbols into their preceding word.
 */

'use strict';

/* Dependencies. */
var nlcstToString = require('nlcst-to-string');
var modifyChildren = require('unist-util-modify-children');

/* Expose. */
module.exports = modifyChildren(mergeFinalWordSymbol);

/**
 * Merge certain punctuation marks into their
 * preceding words.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTSentenceNode} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function mergeFinalWordSymbol(child, index, parent) {
  var children;
  var prev;
  var next;

  if (
    index !== 0 &&
    (
      child.type === 'SymbolNode' ||
      child.type === 'PunctuationNode'
    ) &&
    nlcstToString(child) === '-'
  ) {
    children = parent.children;

    prev = children[index - 1];
    next = children[index + 1];

    if (
      (
        !next ||
        next.type !== 'WordNode'
      ) &&
      (
        prev &&
        prev.type === 'WordNode'
      )
    ) {
      /* Remove `child` from parent. */
      children.splice(index, 1);

      /* Add the punctuation mark at the end of the
       * previous node. */
      prev.children.push(child);

      /* Update position. */
      if (prev.position && child.position) {
        prev.position.end = child.position.end;
      }

      /* Next, iterate over the node *now* at the
       * current position (which was the next node). */
      return index;
    }
  }
}

},{"nlcst-to-string":17,"unist-util-modify-children":55}],29:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:merge-initial-lower-case-letter-sentences
 * @fileoverview Merge a sentence into its previous
 *   sentence, when the sentence starts with a lower case
 *   letter.
 */

'use strict';

/* Dependencies. */
var nlcstToString = require('nlcst-to-string');
var modifyChildren = require('unist-util-modify-children');
var expressions = require('../expressions');

/* Expose. */
module.exports = modifyChildren(mergeInitialLowerCaseLetterSentences);

/* Initial lowercase letter. */
var EXPRESSION_LOWER_INITIAL = expressions.lowerInitial;

/**
 * Merge a sentence into its previous sentence, when
 * the sentence starts with a lower case letter.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTParagraphNode} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function mergeInitialLowerCaseLetterSentences(child, index, parent) {
  var children = child.children;
  var position;
  var node;
  var siblings;
  var prev;

  if (
    children &&
    children.length &&
    index !== 0
  ) {
    position = -1;

    while (children[++position]) {
      node = children[position];

      if (node.type === 'WordNode') {
        if (!EXPRESSION_LOWER_INITIAL.test(nlcstToString(node))) {
          return;
        }

        siblings = parent.children;

        prev = siblings[index - 1];

        prev.children = prev.children.concat(children);

        siblings.splice(index, 1);

        /* Update position. */
        if (prev.position && child.position) {
          prev.position.end = child.position.end;
        }

        /* Next, iterate over the node *now* at
         * the current position. */
        return index;
      }

      if (
        node.type === 'SymbolNode' ||
        node.type === 'PunctuationNode'
      ) {
        return;
      }
    }
  }
}

},{"../expressions":20,"nlcst-to-string":17,"unist-util-modify-children":55}],30:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:merge-initial-word-symbol
 * @fileoverview Merge certain symbols into their next word.
 */

'use strict';

/* Dependencies. */
var nlcstToString = require('nlcst-to-string');
var modifyChildren = require('unist-util-modify-children');

/* Expose. */
module.exports = modifyChildren(mergeInitialWordSymbol);

/**
 * Merge certain punctuation marks into their
 * following words.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTSentenceNode} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function mergeInitialWordSymbol(child, index, parent) {
  var children;
  var next;

  if (
    (
      child.type !== 'SymbolNode' &&
      child.type !== 'PunctuationNode'
    ) ||
    nlcstToString(child) !== '&'
  ) {
    return;
  }

  children = parent.children;

  next = children[index + 1];

  /* If either a previous word, or no following word,
   * exists, exit early. */
  if (
    (
      index !== 0 &&
      children[index - 1].type === 'WordNode'
    ) ||
    !(
      next &&
      next.type === 'WordNode'
    )
  ) {
    return;
  }

  /* Remove `child` from parent. */
  children.splice(index, 1);

  /* Add the punctuation mark at the start of the
   * next node. */
  next.children.unshift(child);

  /* Update position. */
  if (next.position && child.position) {
    next.position.start = child.position.start;
  }

  /* Next, iterate over the node at the previous
   * position, as it's now adjacent to a following
   * word. */
  return index - 1;
}

},{"nlcst-to-string":17,"unist-util-modify-children":55}],31:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:merge-initialisms
 * @fileoverview Merge initialisms.
 */

'use strict';

/* Dependencies. */
var nlcstToString = require('nlcst-to-string');
var modifyChildren = require('unist-util-modify-children');
var expressions = require('../expressions');

/* Expose. */
module.exports = modifyChildren(mergeInitialisms);

/* Numbers. */
var EXPRESSION_NUMERICAL = expressions.numerical;

/**
 * Merge initialisms.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTSentenceNode} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function mergeInitialisms(child, index, parent) {
  var siblings;
  var prev;
  var children;
  var length;
  var position;
  var otherChild;
  var isAllDigits;
  var value;

  if (
    index !== 0 &&
    nlcstToString(child) === '.'
  ) {
    siblings = parent.children;

    prev = siblings[index - 1];
    children = prev.children;

    length = children && children.length;

    if (
      prev.type === 'WordNode' &&
      length !== 1 &&
      length % 2 !== 0
    ) {
      position = length;

      isAllDigits = true;

      while (children[--position]) {
        otherChild = children[position];

        value = nlcstToString(otherChild);

        if (position % 2 === 0) {
          /* Initialisms consist of one
           * character values. */
          if (value.length > 1) {
            return;
          }

          if (!EXPRESSION_NUMERICAL.test(value)) {
            isAllDigits = false;
          }
        } else if (value !== '.') {
          if (position < length - 2) {
            break;
          } else {
            return;
          }
        }
      }

      if (!isAllDigits) {
        /* Remove `child` from parent. */
        siblings.splice(index, 1);

        /* Add child to the previous children. */
        children.push(child);

        /* Update position. */
        if (prev.position && child.position) {
          prev.position.end = child.position.end;
        }

        /* Next, iterate over the node *now* at the current
         * position. */
        return index;
      }
    }
  }
}

},{"../expressions":20,"nlcst-to-string":17,"unist-util-modify-children":55}],32:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:merge-inner-word-symbol
 * @fileoverview Merge words joined by certain punctuation
 *   marks.
 */

'use strict';

/* Dependencies. */
var nlcstToString = require('nlcst-to-string');
var modifyChildren = require('unist-util-modify-children');

/* Expose. */
module.exports = modifyChildren(mergeInnerWordSlash);

/* Constants. */
var C_SLASH = '/';

/**
 * Merge words joined by certain punctuation marks.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTSentenceNode} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function mergeInnerWordSlash(child, index, parent) {
  var siblings = parent.children;
  var prev;
  var next;
  var prevValue;
  var nextValue;
  var queue;
  var tail;
  var count;

  prev = siblings[index - 1];
  next = siblings[index + 1];

  if (
    prev &&
    prev.type === 'WordNode' &&
    (
      child.type === 'SymbolNode' ||
      child.type === 'PunctuationNode'
    ) &&
    nlcstToString(child) === C_SLASH
  ) {
    prevValue = nlcstToString(prev);
    tail = child;
    queue = [child];
    count = 1;

    if (next && next.type === 'WordNode') {
      nextValue = nlcstToString(next);
      tail = next;
      queue = queue.concat(next.children);
      count++;
    }

    if (
      prevValue.length < 3 &&
      (!nextValue || nextValue.length < 3)
    ) {
      /* Add all found tokens to `prev`s children. */
      prev.children = prev.children.concat(queue);

      siblings.splice(index, count);

      /* Update position. */
      if (prev.position && tail.position) {
        prev.position.end = tail.position.end;
      }

      /* Next, iterate over the node *now* at the current
       * position. */
      return index;
    }
  }
}

},{"nlcst-to-string":17,"unist-util-modify-children":55}],33:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:merge-inner-word-symbol
 * @fileoverview Merge words joined by certain punctuation
 *   marks.
 */

'use strict';

/* Dependencies. */
var nlcstToString = require('nlcst-to-string');
var modifyChildren = require('unist-util-modify-children');
var expressions = require('../expressions');

/* Expose. */
module.exports = modifyChildren(mergeInnerWordSymbol);

/* Symbols part of surrounding words. */
var EXPRESSION_INNER_WORD_SYMBOL = expressions.wordSymbolInner;

/**
 * Merge words joined by certain punctuation marks.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTSentenceNode} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function mergeInnerWordSymbol(child, index, parent) {
  var siblings;
  var sibling;
  var prev;
  var last;
  var position;
  var tokens;
  var queue;

  if (
    index !== 0 &&
    (
      child.type === 'SymbolNode' ||
      child.type === 'PunctuationNode'
    )
  ) {
    siblings = parent.children;

    prev = siblings[index - 1];

    if (prev && prev.type === 'WordNode') {
      position = index - 1;

      tokens = [];
      queue = [];

      /* - If a token which is neither word nor
       *   inner word symbol is found, the loop
       *   is broken.
       * - If an inner word symbol is found,
       *   it's queued.
       * - If a word is found, it's queued (and
       *   the queue stored and emptied). */
      while (siblings[++position]) {
        sibling = siblings[position];

        if (sibling.type === 'WordNode') {
          tokens = tokens.concat(queue, sibling.children);

          queue = [];
        } else if (
          (
            sibling.type === 'SymbolNode' ||
            sibling.type === 'PunctuationNode'
          ) &&
          EXPRESSION_INNER_WORD_SYMBOL.test(nlcstToString(sibling))
        ) {
          queue.push(sibling);
        } else {
          break;
        }
      }

      if (tokens.length) {
        /* If there is a queue, remove its length
         * from `position`. */
        if (queue.length) {
          position -= queue.length;
        }

        /* Remove every (one or more) inner-word punctuation
         * marks and children of words. */
        siblings.splice(index, position - index);

        /* Add all found tokens to `prev`s children. */
        prev.children = prev.children.concat(tokens);

        last = tokens[tokens.length - 1];

        /* Update position. */
        if (prev.position && last.position) {
          prev.position.end = last.position.end;
        }

        /* Next, iterate over the node *now* at the current
         * position. */
        return index;
      }
    }
  }
}

},{"../expressions":20,"nlcst-to-string":17,"unist-util-modify-children":55}],34:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:merge-non-word-sentences
 * @fileoverview Merge a sentence into the following
 *   sentence, when the sentence does not contain word
 *   tokens.
 */

'use strict';

/* Dependencies. */
var modifyChildren = require('unist-util-modify-children');

/* Expose. */
module.exports = modifyChildren(mergeNonWordSentences);

/**
 * Merge a sentence into the following sentence, when
 * the sentence does not contain word tokens.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTParagraphNode} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function mergeNonWordSentences(child, index, parent) {
  var children = child.children;
  var position = -1;
  var prev;
  var next;

  while (children[++position]) {
    if (children[position].type === 'WordNode') {
      return;
    }
  }

  prev = parent.children[index - 1];

  if (prev) {
    prev.children = prev.children.concat(children);

    /* Remove the child. */
    parent.children.splice(index, 1);

    /* Patch position. */
    if (prev.position && child.position) {
      prev.position.end = child.position.end;
    }

    /* Next, iterate over the node *now* at
     * the current position (which was the
     * next node). */
    return index;
  }

  next = parent.children[index + 1];

  if (next) {
    next.children = children.concat(next.children);

    /* Patch position. */
    if (next.position && child.position) {
      next.position.start = child.position.start;
    }

    /* Remove the child. */
    parent.children.splice(index, 1);
  }
}

},{"unist-util-modify-children":55}],35:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:merge-prefix-exceptions
 * @fileoverview Merge a sentence into its next sentence,
 *   when the sentence ends with a certain word.
 */

'use strict';

/* Dependencies. */
var nlcstToString = require('nlcst-to-string');
var modifyChildren = require('unist-util-modify-children');

/* Expose. */
module.exports = modifyChildren(mergePrefixExceptions);

/* Blacklist of full stop characters that should not
 * be treated as terminal sentence markers: A case-insensitive
 * abbreviation. */
var EXPRESSION_ABBREVIATION_PREFIX = new RegExp(
  '^(' +
    '[0-9]+|' +
    '[a-z]|' +

    /* Common Latin Abbreviations:
     * Based on: http://en.wikipedia.org/wiki/List_of_Latin_abbreviations
     * Where only the abbreviations written without joining full stops,
     * but with a final full stop, were extracted.
     *
     * circa, capitulus, confer, compare, centum weight, eadem, (et) alii,
     * et cetera, floruit, foliis, ibidem, idem, nemine && contradicente,
     * opere && citato, (per) cent, (per) procurationem, (pro) tempore,
     * sic erat scriptum, (et) sequentia, statim, videlicet. */
    'al|ca|cap|cca|cent|cf|cit|con|cp|cwt|ead|etc|ff|' +
    'fl|ibid|id|nem|op|pro|seq|sic|stat|tem|viz' +
  ')$'
);

/**
 * Merge a sentence into its next sentence, when the
 * sentence ends with a certain word.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTParagraphNode} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function mergePrefixExceptions(child, index, parent) {
  var children = child.children;
  var node;
  var next;

  if (
    children &&
    children.length &&
    index !== parent.children.length - 1
  ) {
    node = children[children.length - 1];

    if (
      node &&
      nlcstToString(node) === '.'
    ) {
      node = children[children.length - 2];

      if (
        node &&
        node.type === 'WordNode' &&
        EXPRESSION_ABBREVIATION_PREFIX.test(
          nlcstToString(node).toLowerCase()
        )
      ) {
        next = parent.children[index + 1];

        child.children = children.concat(next.children);

        parent.children.splice(index + 1, 1);

        /* Update position. */
        if (next.position && child.position) {
          child.position.end = next.position.end;
        }

        /* Next, iterate over the current node again. */
        return index - 1;
      }
    }
  }
}

},{"nlcst-to-string":17,"unist-util-modify-children":55}],36:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:merge-remaining-full-stops
 * @fileoverview Merge non-terminal-marker full stops into
 *   previous or next adjacent words.
 */

'use strict';

/* Dependencies. */
var nlcstToString = require('nlcst-to-string');
var visitChildren = require('unist-util-visit-children');
var expressions = require('../expressions');

/* Expose. */
module.exports = visitChildren(mergeRemainingFullStops);

/* Blacklist of full stop characters that should not
 * be treated as terminal sentence markers: A
 * case-insensitive abbreviation. */
var EXPRESSION_TERMINAL_MARKER = expressions.terminalMarker;

/**
 * Merge non-terminal-marker full stops into
 * the previous word (if available), or the next
 * word (if available).
 *
 * @param {NLCSTNode} child - Node.
 */
function mergeRemainingFullStops(child) {
  var children = child.children;
  var position = children.length;
  var hasFoundDelimiter = false;
  var grandchild;
  var prev;
  var next;
  var nextNext;

  while (children[--position]) {
    grandchild = children[position];

    if (
      grandchild.type !== 'SymbolNode' &&
      grandchild.type !== 'PunctuationNode'
    ) {
      /* This is a sentence without terminal marker,
       * so we 'fool' the code to make it think we
       * have found one. */
      if (grandchild.type === 'WordNode') {
        hasFoundDelimiter = true;
      }

      continue;
    }

    /* Exit when this token is not a terminal marker. */
    if (!EXPRESSION_TERMINAL_MARKER.test(nlcstToString(grandchild))) {
      continue;
    }

    /* Ignore the first terminal marker found
     * (starting at the end), as it should not
     * be merged. */
    if (!hasFoundDelimiter) {
      hasFoundDelimiter = true;

      continue;
    }

    /* Only merge a single full stop. */
    if (nlcstToString(grandchild) !== '.') {
      continue;
    }

    prev = children[position - 1];
    next = children[position + 1];

    if (prev && prev.type === 'WordNode') {
      nextNext = children[position + 2];

      /* Continue when the full stop is followed by
       * a space and another full stop, such as:
       * `{.} .` */
      if (
        next &&
        nextNext &&
        next.type === 'WhiteSpaceNode' &&
        nlcstToString(nextNext) === '.'
      ) {
        continue;
      }

      /* Remove `child` from parent. */
      children.splice(position, 1);

      /* Add the punctuation mark at the end of the
       * previous node. */
      prev.children.push(grandchild);

      /* Update position. */
      if (grandchild.position && prev.position) {
        prev.position.end = grandchild.position.end;
      }

      position--;
    } else if (next && next.type === 'WordNode') {
      /* Remove `child` from parent. */
      children.splice(position, 1);

      /* Add the punctuation mark at the start of
       * the next node. */
      next.children.unshift(grandchild);

      if (grandchild.position && next.position) {
        next.position.start = grandchild.position.start;
      }
    }
  }
}

},{"../expressions":20,"nlcst-to-string":17,"unist-util-visit-children":57}],37:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:merge-words
 * @fileoverview Merge adjacent words.
 */

'use strict';

/* Dependencies. */
var modifyChildren = require('unist-util-modify-children');

/* Expose. */
module.exports = modifyChildren(mergeFinalWordSymbol);

/**
 * Merge multiple words. This merges the children of
 * adjacent words, something which should not occur
 * naturally by parse-latin, but might happen when
 * custom tokens were passed in.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTSentenceNode} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function mergeFinalWordSymbol(child, index, parent) {
  var siblings = parent.children;
  var next;

  if (child.type === 'WordNode') {
    next = siblings[index + 1];

    if (next && next.type === 'WordNode') {
      /* Remove `next` from parent. */
      siblings.splice(index + 1, 1);

      /* Add the punctuation mark at the end of the
       * previous node. */
      child.children = child.children.concat(next.children);

      /* Update position. */
      if (next.position && child.position) {
        child.position.end = next.position.end;
      }

      /* Next, re-iterate the current node. */
      return index;
    }
  }
}

},{"unist-util-modify-children":55}],38:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:patch-position
 * @fileoverview Patch `position` on a parent node based
 *   on its first and last child.
 */

'use strict';

/* Dependencies. */
var visitChildren = require('unist-util-visit-children');

/* Expose. */
module.exports = visitChildren(patchPosition);

/**
 * Patch the position on a parent node based on its first
 * and last child.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `node`.
 * @param {NLCSTNode} node - Parent of `child`.
 */
function patchPosition(child, index, node) {
  var siblings = node.children;

  if (!child.position) {
    return;
  }

  if (
    index === 0 &&
    (!node.position || /* istanbul ignore next */ !node.position.start)
  ) {
    patch(node);
    node.position.start = child.position.start;
  }

  if (
    index === siblings.length - 1 &&
    (!node.position || !node.position.end)
  ) {
    patch(node);
    node.position.end = child.position.end;
  }
}

/**
 * Add a `position` object when it does not yet exist
 * on `node`.
 *
 * @param {NLCSTNode} node - Node to patch.
 */
function patch(node) {
  if (!node.position) {
    node.position = {};
  }
}

},{"unist-util-visit-children":57}],39:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:plugin:remove-empty-nodes
 * @fileoverview Remove empty child nodes without children.
 */

'use strict';

/* Dependencies. */
var modifyChildren = require('unist-util-modify-children');

/* Expose. */
module.exports = modifyChildren(removeEmptyNodes);

/**
 * Remove empty children.
 *
 * @param {NLCSTNode} child - Node.
 * @param {number} index - Position of `child` in `parent`.
 * @param {NLCSTParagraphNode} parent - Parent of `child`.
 * @return {number?} - Next position.
 */
function removeEmptyNodes(child, index, parent) {
  if ('children' in child && !child.children.length) {
    parent.children.splice(index, 1);

    /* Next, iterate over the node *now* at
     * the current position (which was the
     * next node). */
    return index;
  }
}

},{"unist-util-modify-children":55}],40:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module parse-latin:tokenizer
 * @fileoverview Tokenize tokens matching an expression as
 *   a given node-type.
 */

'use strict';

/* Dependencies. */
var nlcstToString = require('nlcst-to-string');

/* Expose. */
module.exports = tokenizerFactory;

/**
 * Factory to create a tokenizer based on a given
 * `expression`.
 *
 * @param {string} childType - Type of child to tokenize
 *   as.
 * @param {RegExp} expression - Expression to use for
 *   tokenization.
 * @return {Function} - Tokenizer.
 */
function tokenizerFactory(childType, expression) {
  return tokenizer;

  /**
   * A function which splits
   *
   * @param {NLCSTParent} node - Parent node.
   * @return {Array.<NLCSTChild>} - Nodes.
   */
  function tokenizer(node) {
    var children = [];
    var tokens = node.children;
    var type = node.type;
    var length = tokens.length;
    var index = -1;
    var lastIndex = length - 1;
    var start = 0;
    var first;
    var last;
    var parent;

    while (++index < length) {
      if (
        index === lastIndex ||
        (
          tokens[index].type === childType &&
          expression.test(nlcstToString(tokens[index]))
        )
      ) {
        first = tokens[start];
        last = tokens[index];

        parent = {
          type: type,
          children: tokens.slice(start, index + 1)
        };

        if (first.position && last.position) {
          parent.position = {
            start: first.position.start,
            end: last.position.end
          };
        }

        children.push(parent);

        start = index + 1;
      }
    }

    return children;
  }
}

},{"nlcst-to-string":17}],41:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":42}],42:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],43:[function(require,module,exports){
'use strict';

var path = require('path');

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = replaceExt;

},{"path":41}],44:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module retext-emoji
 * @fileoverview Emoji, gemoji, and emoticons with retext.
 */

'use strict';

/* eslint-env commonjs */

/* Dependencies. */
var affixEmoticonModifier = require('nlcst-affix-emoticon-modifier');
var emoticonModifier = require('nlcst-emoticon-modifier');
var emojiModifier = require('nlcst-emoji-modifier');
var emoticons = require('emoticon');
var toString = require('nlcst-to-string');
var gemoji = require('gemoji');
var visit = require('unist-util-visit');

/* Constants. */
var EMOTICON_NODE = 'EmoticonNode';

/* Map of visitors. */
var fns = {
    encode: toEmoji,
    decode: toGemoji
}

/* Easy access. */
var unicodes = gemoji.unicode;
var names = gemoji.name;

var shortcodes = {};

emoticons = emoticons.emoticon;

(function () {
    var key;
    var shortcode;

    for (key in names) {
        shortcode = ':' + key + ':';
        shortcodes[shortcode] = names[key];
        shortcodes[shortcode].shortcode = shortcode;
    }

    for (key in emoticons) {
        emoticons[key].names = names[emoticons[key].name].names;
        emoticons[key].shortcode = names[emoticons[key].name].shortcode;
    }
})();

/**
 * Replace a short-code with a unicode emoji.
 *
 * @param {EmoticonNode} node - Emoticon node.
 */
function toEmoji(node) {
    var value = toString(node);
    var info = (shortcodes[value] || emoticons[value] || {}).emoji;

    if (info) {
        node.value = info;
    }
}

/**
 * Replace a unicode emoji with a short-code.
 *
 * @param {EmoticonNode} node - Emoticon node.
 */
function toGemoji(node) {
    var value = toString(node);
    var info = (unicodes[value] || emoticons[value] || {}).shortcode;

    if (info) {
        node.value = info;
    }
}

/**
 * Partially applied visit factory.
 *
 * @param {Function?} transformer - EmoticonNode-visitor.
 * @return {Function?} - Vititor.
 */
function visitFactory(transformer) {
    return function (node) {
        visit(node, EMOTICON_NODE, function (node) {
            var data = node.data;
            var value = toString(node);
            var info;

            if (transformer) {
                transformer(node);
            }

            info = unicodes[value] || shortcodes[value] || emoticons[value];

            if (!data) {
                data = node.data = {};
            }

            data.names = info.names.concat();
            data.description = info.description;
            data.tags = info.tags.concat();
        });
    }
}

/**
 * Attacher.
 *
 * @param {Retext} processor - Instance.
 * @param {Object?} [options] - Configuration.
 * @return {Function} Transformer.
 */
function emoji(processor, options) {
    var proto = processor.Parser.prototype;
    var convert = (options || {}).convert;
    var fn;

    proto.useFirst('tokenizeSentence', emoticonModifier);
    proto.useFirst('tokenizeSentence', emojiModifier);
    proto.useFirst('tokenizeParagraph', affixEmoticonModifier);

    if (convert !== null && convert !== undefined) {
        fn = fns[convert];

        if (!fn) {
            throw new TypeError(
                'Illegal invocation: `' + convert +
                '` is not a valid value for ' +
                '`options.convert` in `retext#use(emoji, options)`'
            );
        }
    }

    return visitFactory(fn);
}

/* Expose. */
module.exports = emoji;

},{"emoticon":46,"gemoji":48,"nlcst-affix-emoticon-modifier":12,"nlcst-emoji-modifier":13,"nlcst-emoticon-modifier":16,"nlcst-to-string":17,"unist-util-visit":58}],45:[function(require,module,exports){
module.exports={
  "angry": {
    "name": "angry",
    "emoji": "😠",
    "tags": [
      "mad",
      "annoyed"
    ],
    "description": "angry face",
    "emoticons": [
      ">:(",
      ">:[",
      ">:-(",
      ">:-[",
      ">=(",
      ">=[",
      ">=-(",
      ">=-["
    ]
  },
  "blush": {
    "name": "blush",
    "emoji": "😊",
    "tags": [
      "proud"
    ],
    "description": "smiling face with smiling eyes",
    "emoticons": [
      ":\")",
      ":\"]",
      ":\"D",
      ":-\")",
      ":-\"]",
      ":-\"D",
      "=\")",
      "=\"]",
      "=\"D",
      "=-\")",
      "=-\"]",
      "=-\"D"
    ]
  },
  "broken_heart": {
    "name": "broken_heart",
    "emoji": "💔",
    "tags": [],
    "description": "broken heart",
    "emoticons": [
      "<\\3",
      "</3"
    ]
  },
  "confused": {
    "name": "confused",
    "emoji": "😕",
    "tags": [],
    "description": "confused face",
    "emoticons": [
      ":/",
      ":\\",
      ":-/",
      ":-\\",
      "=/",
      "=\\",
      "=-/",
      "=-\\"
    ]
  },
  "cry": {
    "name": "cry",
    "emoji": "😢",
    "tags": [
      "sad",
      "tear"
    ],
    "description": "crying face",
    "emoticons": [
      ":,(",
      ":,[",
      ":,|",
      ":,-(",
      ":,-[",
      ":,-|",
      ":'(",
      ":'[",
      ":'|",
      ":'-(",
      ":'-[",
      ":'-|",
      "=,(",
      "=,[",
      "=,|",
      "=,-(",
      "=,-[",
      "=,-|",
      "='(",
      "='[",
      "='|",
      "='-(",
      "='-[",
      "='-|"
    ]
  },
  "frowning": {
    "name": "frowning",
    "emoji": "😦",
    "tags": [],
    "description": "frowning face with open mouth",
    "emoticons": [
      ":(",
      ":[",
      ":-(",
      ":-[",
      "=(",
      "=[",
      "=-(",
      "=-["
    ]
  },
  "heart": {
    "name": "heart",
    "emoji": "❤️",
    "tags": [
      "love"
    ],
    "description": "heavy black heart",
    "emoticons": [
      "<3"
    ]
  },
  "imp": {
    "name": "imp",
    "emoji": "👿",
    "tags": [
      "angry",
      "devil",
      "evil",
      "horns"
    ],
    "description": "imp",
    "emoticons": [
      "]:(",
      "]:[",
      "]:-(",
      "]:-[",
      "]=(",
      "]=[",
      "]=-(",
      "]=-["
    ]
  },
  "innocent": {
    "name": "innocent",
    "emoji": "😇",
    "tags": [
      "angel"
    ],
    "description": "smiling face with halo",
    "emoticons": [
      "o:)",
      "o:]",
      "o:D",
      "o:-)",
      "o:-]",
      "o:-D",
      "o=)",
      "o=]",
      "o=D",
      "o=-)",
      "o=-]",
      "o=-D",
      "O:)",
      "O:]",
      "O:D",
      "O:-)",
      "O:-]",
      "O:-D",
      "O=)",
      "O=]",
      "O=D",
      "O=-)",
      "O=-]",
      "O=-D",
      "0:)",
      "0:]",
      "0:D",
      "0:-)",
      "0:-]",
      "0:-D",
      "0=)",
      "0=]",
      "0=D",
      "0=-)",
      "0=-]",
      "0=-D"
    ]
  },
  "joy": {
    "name": "joy",
    "emoji": "😂",
    "tags": [
      "tears"
    ],
    "description": "face with tears of joy",
    "emoticons": [
      ":,)",
      ":,]",
      ":,D",
      ":,-)",
      ":,-]",
      ":,-D",
      ":')",
      ":']",
      ":'D",
      ":'-)",
      ":'-]",
      ":'-D",
      "=,)",
      "=,]",
      "=,D",
      "=,-)",
      "=,-]",
      "=,-D",
      "=')",
      "=']",
      "='D",
      "='-)",
      "='-]",
      "='-D"
    ]
  },
  "kissing": {
    "name": "kissing",
    "emoji": "😗",
    "tags": [],
    "description": "kissing face",
    "emoticons": [
      ":*",
      ":-*",
      "=*",
      "=-*"
    ]
  },
  "laughing": {
    "name": "laughing",
    "emoji": "😆",
    "tags": [
      "happy",
      "haha"
    ],
    "description": "smiling face with open mouth and tightly-closed eyes",
    "emoticons": [
      "x)",
      "x]",
      "xD",
      "x-)",
      "x-]",
      "x-D",
      "X)",
      "X]",
      "X-)",
      "X-]",
      "X-D"
    ]
  },
  "man": {
    "name": "man",
    "emoji": "👨",
    "tags": [
      "mustache",
      "father",
      "dad"
    ],
    "description": "man",
    "emoticons": [
      ":3",
      ":-3",
      "=3",
      "=-3",
      ";3",
      ";-3",
      "x3",
      "x-3",
      "X3",
      "X-3"
    ]
  },
  "neutral_face": {
    "name": "neutral_face",
    "emoji": "😐",
    "tags": [
      "meh"
    ],
    "description": "neutral face",
    "emoticons": [
      ":|",
      ":-|",
      "=|",
      "=-|"
    ]
  },
  "no_mouth": {
    "name": "no_mouth",
    "emoji": "😶",
    "tags": [
      "mute",
      "silence"
    ],
    "description": "face without mouth",
    "emoticons": [
      ":-"
    ]
  },
  "open_mouth": {
    "name": "open_mouth",
    "emoji": "😮",
    "tags": [
      "surprise",
      "impressed",
      "wow"
    ],
    "description": "face with open mouth",
    "emoticons": [
      ":o",
      ":O",
      ":0",
      ":-o",
      ":-O",
      ":-0",
      "=o",
      "=O",
      "=0",
      "=-o",
      "=-O",
      "=-0"
    ]
  },
  "rage": {
    "name": "rage",
    "emoji": "😡",
    "tags": [
      "angry"
    ],
    "description": "pouting face",
    "emoticons": [
      ":@",
      ":-@",
      "=@",
      "=-@"
    ]
  },
  "smile": {
    "name": "smile",
    "emoji": "😄",
    "tags": [
      "happy",
      "joy",
      "pleased"
    ],
    "description": "smiling face with open mouth and smiling eyes",
    "emoticons": [
      ":D",
      ":-D",
      "=D",
      "=-D"
    ]
  },
  "smiley": {
    "name": "smiley",
    "emoji": "😃",
    "tags": [
      "happy",
      "joy",
      "haha"
    ],
    "description": "smiling face with open mouth",
    "emoticons": [
      ":)",
      ":]",
      ":-)",
      ":-]",
      "=)",
      "=]",
      "=-)",
      "=-]"
    ]
  },
  "smiling_imp": {
    "name": "smiling_imp",
    "emoji": "😈",
    "tags": [
      "devil",
      "evil",
      "horns"
    ],
    "description": "smiling face with horns",
    "emoticons": [
      "]:)",
      "]:]",
      "]:D",
      "]:-)",
      "]:-]",
      "]:-D",
      "]=)",
      "]=]",
      "]=D",
      "]=-)",
      "]=-]",
      "]=-D"
    ]
  },
  "sob": {
    "name": "sob",
    "emoji": "😭",
    "tags": [
      "sad",
      "cry",
      "bawling"
    ],
    "description": "loudly crying face",
    "emoticons": [
      ":,'(",
      ":,'[",
      ":,'-(",
      ":,'-[",
      ":',(",
      ":',[",
      ":',-(",
      ":',-[",
      "=,'(",
      "=,'[",
      "=,'-(",
      "=,'-[",
      "=',(",
      "=',[",
      "=',-(",
      "=',-["
    ]
  },
  "stuck_out_tongue": {
    "name": "stuck_out_tongue",
    "emoji": "😛",
    "tags": [],
    "description": "face with stuck-out tongue",
    "emoticons": [
      ":p",
      ":P",
      ":d",
      ":-p",
      ":-P",
      ":-d",
      "=p",
      "=P",
      "=d",
      "=-p",
      "=-P",
      "=-d"
    ]
  },
  "stuck_out_tongue_closed_eyes": {
    "name": "stuck_out_tongue_closed_eyes",
    "emoji": "😝",
    "tags": [
      "prank"
    ],
    "description": "face with stuck-out tongue and tightly-closed eyes",
    "emoticons": [
      "xP",
      "x-p",
      "x-P",
      "x-d",
      "Xp",
      "Xd",
      "X-p",
      "X-P",
      "X-d"
    ]
  },
  "stuck_out_tongue_winking_eye": {
    "name": "stuck_out_tongue_winking_eye",
    "emoji": "😜",
    "tags": [
      "prank",
      "silly"
    ],
    "description": "face with stuck-out tongue and winking eye",
    "emoticons": [
      ";p",
      ";P",
      ";d",
      ";-p",
      ";-P",
      ";-d"
    ]
  },
  "sunglasses": {
    "name": "sunglasses",
    "emoji": "😎",
    "tags": [
      "cool"
    ],
    "description": "smiling face with sunglasses",
    "emoticons": [
      "8)",
      "8]",
      "8D",
      "8-)",
      "8-]",
      "8-D",
      "B)",
      "B]",
      "B-)",
      "B-]",
      "B-D"
    ]
  },
  "sweat": {
    "name": "sweat",
    "emoji": "😓",
    "tags": [],
    "description": "face with cold sweat",
    "emoticons": [
      ",:(",
      ",:[",
      ",:-(",
      ",:-[",
      ",=(",
      ",=[",
      ",=-(",
      ",=-[",
      "':(",
      "':[",
      "':-(",
      "':-[",
      "'=(",
      "'=[",
      "'=-(",
      "'=-["
    ]
  },
  "sweat_smile": {
    "name": "sweat_smile",
    "emoji": "😅",
    "tags": [
      "hot"
    ],
    "description": "smiling face with open mouth and cold sweat",
    "emoticons": [
      ",:)",
      ",:]",
      ",:D",
      ",:-)",
      ",:-]",
      ",:-D",
      ",=)",
      ",=]",
      ",=D",
      ",=-)",
      ",=-]",
      ",=-D",
      "':)",
      "':]",
      "':D",
      "':-)",
      "':-]",
      "':-D",
      "'=)",
      "'=]",
      "'=D",
      "'=-)",
      "'=-]",
      "'=-D"
    ]
  },
  "unamused": {
    "name": "unamused",
    "emoji": "😒",
    "tags": [
      "meh"
    ],
    "description": "unamused face",
    "emoticons": [
      ":$",
      ":s",
      ":z",
      ":S",
      ":Z",
      ":-$",
      ":-s",
      ":-z",
      ":-S",
      ":-Z",
      "=$",
      "=s",
      "=z",
      "=S",
      "=Z",
      "=-$",
      "=-s",
      "=-z",
      "=-S",
      "=-Z"
    ]
  },
  "wink": {
    "name": "wink",
    "emoji": "😉",
    "tags": [
      "flirt"
    ],
    "description": "winking face",
    "emoticons": [
      ";)",
      ";]",
      ";D",
      ";-)",
      ";-]",
      ";-D"
    ]
  }
}

},{}],46:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module emoticon
 * @fileoverview Information regarding ASCII emoticons.
 */

'use strict';

/* eslint-env commonjs */

/*
 * Data.
 */

var data = require('./data/emoticons.json');

/*
 * Dictionaries.
 */

var emoji = {};
var text = {};

var emoticons = {
    'unicode': emoji,
    'emoticon': text
}

/**
 * Transform an emoji.
 *
 * @param {string} emoticon - Unicode emoji to extend.
 */
function enhanceEmoticon(emoticon) {
    var information = data[emoticon];
    var index;

    /**
     * Add information to `unicode` map.
     */

    emoji[information.emoji] = information;

    /**
     * Add information to `text` map.
     */

    index = information.emoticons.length;

    while (index--) {
        text[information.emoticons[index]] = information;
    }
}

/*
 * Transform all emoticons.
 */

var emoticon;

for (emoticon in data) {
    enhanceEmoticon(emoticon);
}

/*
 * Expose.
 */

module.exports = emoticons;

},{"./data/emoticons.json":45}],47:[function(require,module,exports){
module.exports={
  "😄": {
    "description": "smiling face with open mouth and smiling eyes",
    "names": [
      "smile"
    ],
    "tags": [
      "happy",
      "joy",
      "pleased"
    ]
  },
  "😃": {
    "description": "smiling face with open mouth",
    "names": [
      "smiley"
    ],
    "tags": [
      "happy",
      "joy",
      "haha"
    ]
  },
  "😀": {
    "description": "grinning face",
    "names": [
      "grinning"
    ],
    "tags": [
      "smile",
      "happy"
    ]
  },
  "😊": {
    "description": "smiling face with smiling eyes",
    "names": [
      "blush"
    ],
    "tags": [
      "proud"
    ]
  },
  "☺️": {
    "description": "white smiling face",
    "names": [
      "relaxed"
    ],
    "tags": [
      "blush",
      "pleased"
    ]
  },
  "😉": {
    "description": "winking face",
    "names": [
      "wink"
    ],
    "tags": [
      "flirt"
    ]
  },
  "😍": {
    "description": "smiling face with heart-shaped eyes",
    "names": [
      "heart_eyes"
    ],
    "tags": [
      "love",
      "crush"
    ]
  },
  "😘": {
    "description": "face throwing a kiss",
    "names": [
      "kissing_heart"
    ],
    "tags": [
      "flirt"
    ]
  },
  "😚": {
    "description": "kissing face with closed eyes",
    "names": [
      "kissing_closed_eyes"
    ],
    "tags": []
  },
  "😗": {
    "description": "kissing face",
    "names": [
      "kissing"
    ],
    "tags": []
  },
  "😙": {
    "description": "kissing face with smiling eyes",
    "names": [
      "kissing_smiling_eyes"
    ],
    "tags": []
  },
  "😜": {
    "description": "face with stuck-out tongue and winking eye",
    "names": [
      "stuck_out_tongue_winking_eye"
    ],
    "tags": [
      "prank",
      "silly"
    ]
  },
  "😝": {
    "description": "face with stuck-out tongue and tightly-closed eyes",
    "names": [
      "stuck_out_tongue_closed_eyes"
    ],
    "tags": [
      "prank"
    ]
  },
  "😛": {
    "description": "face with stuck-out tongue",
    "names": [
      "stuck_out_tongue"
    ],
    "tags": []
  },
  "😳": {
    "description": "flushed face",
    "names": [
      "flushed"
    ],
    "tags": []
  },
  "😁": {
    "description": "grinning face with smiling eyes",
    "names": [
      "grin"
    ],
    "tags": []
  },
  "😔": {
    "description": "pensive face",
    "names": [
      "pensive"
    ],
    "tags": []
  },
  "😌": {
    "description": "relieved face",
    "names": [
      "relieved"
    ],
    "tags": [
      "whew"
    ]
  },
  "😒": {
    "description": "unamused face",
    "names": [
      "unamused"
    ],
    "tags": [
      "meh"
    ]
  },
  "😞": {
    "description": "disappointed face",
    "names": [
      "disappointed"
    ],
    "tags": [
      "sad"
    ]
  },
  "😣": {
    "description": "persevering face",
    "names": [
      "persevere"
    ],
    "tags": [
      "struggling"
    ]
  },
  "😢": {
    "description": "crying face",
    "names": [
      "cry"
    ],
    "tags": [
      "sad",
      "tear"
    ]
  },
  "😂": {
    "description": "face with tears of joy",
    "names": [
      "joy"
    ],
    "tags": [
      "tears"
    ]
  },
  "😭": {
    "description": "loudly crying face",
    "names": [
      "sob"
    ],
    "tags": [
      "sad",
      "cry",
      "bawling"
    ]
  },
  "😪": {
    "description": "sleepy face",
    "names": [
      "sleepy"
    ],
    "tags": [
      "tired"
    ]
  },
  "😥": {
    "description": "disappointed but relieved face",
    "names": [
      "disappointed_relieved"
    ],
    "tags": [
      "phew",
      "sweat",
      "nervous"
    ]
  },
  "😰": {
    "description": "face with open mouth and cold sweat",
    "names": [
      "cold_sweat"
    ],
    "tags": [
      "nervous"
    ]
  },
  "😅": {
    "description": "smiling face with open mouth and cold sweat",
    "names": [
      "sweat_smile"
    ],
    "tags": [
      "hot"
    ]
  },
  "😓": {
    "description": "face with cold sweat",
    "names": [
      "sweat"
    ],
    "tags": []
  },
  "😩": {
    "description": "weary face",
    "names": [
      "weary"
    ],
    "tags": [
      "tired"
    ]
  },
  "😫": {
    "description": "tired face",
    "names": [
      "tired_face"
    ],
    "tags": [
      "upset",
      "whine"
    ]
  },
  "😨": {
    "description": "fearful face",
    "names": [
      "fearful"
    ],
    "tags": [
      "scared",
      "shocked",
      "oops"
    ]
  },
  "😱": {
    "description": "face screaming in fear",
    "names": [
      "scream"
    ],
    "tags": [
      "horror",
      "shocked"
    ]
  },
  "😠": {
    "description": "angry face",
    "names": [
      "angry"
    ],
    "tags": [
      "mad",
      "annoyed"
    ]
  },
  "😡": {
    "description": "pouting face",
    "names": [
      "rage"
    ],
    "tags": [
      "angry"
    ]
  },
  "😤": {
    "description": "face with look of triumph",
    "names": [
      "triumph"
    ],
    "tags": [
      "smug"
    ]
  },
  "😖": {
    "description": "confounded face",
    "names": [
      "confounded"
    ],
    "tags": []
  },
  "😆": {
    "description": "smiling face with open mouth and tightly-closed eyes",
    "names": [
      "laughing",
      "satisfied"
    ],
    "tags": [
      "happy",
      "haha"
    ]
  },
  "😋": {
    "description": "face savouring delicious food",
    "names": [
      "yum"
    ],
    "tags": [
      "tongue",
      "lick"
    ]
  },
  "😷": {
    "description": "face with medical mask",
    "names": [
      "mask"
    ],
    "tags": [
      "sick",
      "ill"
    ]
  },
  "😎": {
    "description": "smiling face with sunglasses",
    "names": [
      "sunglasses"
    ],
    "tags": [
      "cool"
    ]
  },
  "😴": {
    "description": "sleeping face",
    "names": [
      "sleeping"
    ],
    "tags": [
      "zzz"
    ]
  },
  "😵": {
    "description": "dizzy face",
    "names": [
      "dizzy_face"
    ],
    "tags": []
  },
  "😲": {
    "description": "astonished face",
    "names": [
      "astonished"
    ],
    "tags": [
      "amazed",
      "gasp"
    ]
  },
  "😟": {
    "description": "worried face",
    "names": [
      "worried"
    ],
    "tags": [
      "nervous"
    ]
  },
  "😦": {
    "description": "frowning face with open mouth",
    "names": [
      "frowning"
    ],
    "tags": []
  },
  "😧": {
    "description": "anguished face",
    "names": [
      "anguished"
    ],
    "tags": [
      "stunned"
    ]
  },
  "😈": {
    "description": "smiling face with horns",
    "names": [
      "smiling_imp"
    ],
    "tags": [
      "devil",
      "evil",
      "horns"
    ]
  },
  "👿": {
    "description": "imp",
    "names": [
      "imp"
    ],
    "tags": [
      "angry",
      "devil",
      "evil",
      "horns"
    ]
  },
  "😮": {
    "description": "face with open mouth",
    "names": [
      "open_mouth"
    ],
    "tags": [
      "surprise",
      "impressed",
      "wow"
    ]
  },
  "😬": {
    "description": "grimacing face",
    "names": [
      "grimacing"
    ],
    "tags": []
  },
  "😐": {
    "description": "neutral face",
    "names": [
      "neutral_face"
    ],
    "tags": [
      "meh"
    ]
  },
  "😕": {
    "description": "confused face",
    "names": [
      "confused"
    ],
    "tags": []
  },
  "😯": {
    "description": "hushed face",
    "names": [
      "hushed"
    ],
    "tags": [
      "silence",
      "speechless"
    ]
  },
  "😶": {
    "description": "face without mouth",
    "names": [
      "no_mouth"
    ],
    "tags": [
      "mute",
      "silence"
    ]
  },
  "😇": {
    "description": "smiling face with halo",
    "names": [
      "innocent"
    ],
    "tags": [
      "angel"
    ]
  },
  "😏": {
    "description": "smirking face",
    "names": [
      "smirk"
    ],
    "tags": [
      "smug"
    ]
  },
  "😑": {
    "description": "expressionless face",
    "names": [
      "expressionless"
    ],
    "tags": []
  },
  "👲": {
    "description": "man with gua pi mao",
    "names": [
      "man_with_gua_pi_mao"
    ],
    "tags": []
  },
  "👳": {
    "description": "man with turban",
    "names": [
      "man_with_turban"
    ],
    "tags": []
  },
  "👮": {
    "description": "police officer",
    "names": [
      "cop"
    ],
    "tags": [
      "police",
      "law"
    ]
  },
  "👷": {
    "description": "construction worker",
    "names": [
      "construction_worker"
    ],
    "tags": [
      "helmet"
    ]
  },
  "💂": {
    "description": "guardsman",
    "names": [
      "guardsman"
    ],
    "tags": []
  },
  "👶": {
    "description": "baby",
    "names": [
      "baby"
    ],
    "tags": [
      "child",
      "newborn"
    ]
  },
  "👦": {
    "description": "boy",
    "names": [
      "boy"
    ],
    "tags": [
      "child"
    ]
  },
  "👧": {
    "description": "girl",
    "names": [
      "girl"
    ],
    "tags": [
      "child"
    ]
  },
  "👨": {
    "description": "man",
    "names": [
      "man"
    ],
    "tags": [
      "mustache",
      "father",
      "dad"
    ]
  },
  "👩": {
    "description": "woman",
    "names": [
      "woman"
    ],
    "tags": [
      "girls"
    ]
  },
  "👴": {
    "description": "older man",
    "names": [
      "older_man"
    ],
    "tags": []
  },
  "👵": {
    "description": "older woman",
    "names": [
      "older_woman"
    ],
    "tags": []
  },
  "👱": {
    "description": "person with blond hair",
    "names": [
      "person_with_blond_hair"
    ],
    "tags": [
      "boy"
    ]
  },
  "👼": {
    "description": "baby angel",
    "names": [
      "angel"
    ],
    "tags": []
  },
  "👸": {
    "description": "princess",
    "names": [
      "princess"
    ],
    "tags": [
      "blonde",
      "crown",
      "royal"
    ]
  },
  "😺": {
    "description": "smiling cat face with open mouth",
    "names": [
      "smiley_cat"
    ],
    "tags": []
  },
  "😸": {
    "description": "grinning cat face with smiling eyes",
    "names": [
      "smile_cat"
    ],
    "tags": []
  },
  "😻": {
    "description": "smiling cat face with heart-shaped eyes",
    "names": [
      "heart_eyes_cat"
    ],
    "tags": []
  },
  "😽": {
    "description": "kissing cat face with closed eyes",
    "names": [
      "kissing_cat"
    ],
    "tags": []
  },
  "😼": {
    "description": "cat face with wry smile",
    "names": [
      "smirk_cat"
    ],
    "tags": []
  },
  "🙀": {
    "description": "weary cat face",
    "names": [
      "scream_cat"
    ],
    "tags": [
      "horror"
    ]
  },
  "😿": {
    "description": "crying cat face",
    "names": [
      "crying_cat_face"
    ],
    "tags": [
      "sad",
      "tear"
    ]
  },
  "😹": {
    "description": "cat face with tears of joy",
    "names": [
      "joy_cat"
    ],
    "tags": []
  },
  "😾": {
    "description": "pouting cat face",
    "names": [
      "pouting_cat"
    ],
    "tags": []
  },
  "👹": {
    "description": "japanese ogre",
    "names": [
      "japanese_ogre"
    ],
    "tags": [
      "monster"
    ]
  },
  "👺": {
    "description": "japanese goblin",
    "names": [
      "japanese_goblin"
    ],
    "tags": []
  },
  "🙈": {
    "description": "see-no-evil monkey",
    "names": [
      "see_no_evil"
    ],
    "tags": [
      "monkey",
      "blind",
      "ignore"
    ]
  },
  "🙉": {
    "description": "hear-no-evil monkey",
    "names": [
      "hear_no_evil"
    ],
    "tags": [
      "monkey",
      "deaf"
    ]
  },
  "🙊": {
    "description": "speak-no-evil monkey",
    "names": [
      "speak_no_evil"
    ],
    "tags": [
      "monkey",
      "mute",
      "hush"
    ]
  },
  "💀": {
    "description": "skull",
    "names": [
      "skull"
    ],
    "tags": [
      "dead",
      "danger",
      "poison"
    ]
  },
  "👽": {
    "description": "extraterrestrial alien",
    "names": [
      "alien"
    ],
    "tags": [
      "ufo"
    ]
  },
  "💩": {
    "description": "pile of poo",
    "names": [
      "hankey",
      "poop",
      "shit"
    ],
    "tags": [
      "crap"
    ]
  },
  "🔥": {
    "description": "fire",
    "names": [
      "fire"
    ],
    "tags": [
      "burn"
    ]
  },
  "✨": {
    "description": "sparkles",
    "names": [
      "sparkles"
    ],
    "tags": [
      "shiny"
    ]
  },
  "🌟": {
    "description": "glowing star",
    "names": [
      "star2"
    ],
    "tags": []
  },
  "💫": {
    "description": "dizzy symbol",
    "names": [
      "dizzy"
    ],
    "tags": [
      "star"
    ]
  },
  "💥": {
    "description": "collision symbol",
    "names": [
      "boom",
      "collision"
    ],
    "tags": [
      "explode"
    ]
  },
  "💢": {
    "description": "anger symbol",
    "names": [
      "anger"
    ],
    "tags": [
      "angry"
    ]
  },
  "💦": {
    "description": "splashing sweat symbol",
    "names": [
      "sweat_drops"
    ],
    "tags": [
      "water",
      "workout"
    ]
  },
  "💧": {
    "description": "droplet",
    "names": [
      "droplet"
    ],
    "tags": [
      "water"
    ]
  },
  "💤": {
    "description": "sleeping symbol",
    "names": [
      "zzz"
    ],
    "tags": [
      "sleeping"
    ]
  },
  "💨": {
    "description": "dash symbol",
    "names": [
      "dash"
    ],
    "tags": [
      "wind",
      "blow",
      "fast"
    ]
  },
  "👂": {
    "description": "ear",
    "names": [
      "ear"
    ],
    "tags": [
      "hear",
      "sound",
      "listen"
    ]
  },
  "👀": {
    "description": "eyes",
    "names": [
      "eyes"
    ],
    "tags": [
      "look",
      "see",
      "watch"
    ]
  },
  "👃": {
    "description": "nose",
    "names": [
      "nose"
    ],
    "tags": [
      "smell"
    ]
  },
  "👅": {
    "description": "tongue",
    "names": [
      "tongue"
    ],
    "tags": [
      "taste"
    ]
  },
  "👄": {
    "description": "mouth",
    "names": [
      "lips"
    ],
    "tags": [
      "kiss"
    ]
  },
  "👍": {
    "description": "thumbs up sign",
    "names": [
      "+1",
      "thumbsup"
    ],
    "tags": [
      "approve",
      "ok"
    ]
  },
  "👎": {
    "description": "thumbs down sign",
    "names": [
      "-1",
      "thumbsdown"
    ],
    "tags": [
      "disapprove",
      "bury"
    ]
  },
  "👌": {
    "description": "ok hand sign",
    "names": [
      "ok_hand"
    ],
    "tags": []
  },
  "👊": {
    "description": "fisted hand sign",
    "names": [
      "facepunch",
      "punch"
    ],
    "tags": [
      "attack"
    ]
  },
  "✊": {
    "description": "raised fist",
    "names": [
      "fist"
    ],
    "tags": [
      "power"
    ]
  },
  "✌️": {
    "description": "victory hand",
    "names": [
      "v"
    ],
    "tags": [
      "victory",
      "peace"
    ]
  },
  "👋": {
    "description": "waving hand sign",
    "names": [
      "wave"
    ],
    "tags": [
      "goodbye"
    ]
  },
  "✋": {
    "description": "raised hand",
    "names": [
      "hand",
      "raised_hand"
    ],
    "tags": [
      "highfive",
      "stop"
    ]
  },
  "👐": {
    "description": "open hands sign",
    "names": [
      "open_hands"
    ],
    "tags": []
  },
  "👆": {
    "description": "white up pointing backhand index",
    "names": [
      "point_up_2"
    ],
    "tags": []
  },
  "👇": {
    "description": "white down pointing backhand index",
    "names": [
      "point_down"
    ],
    "tags": []
  },
  "👉": {
    "description": "white right pointing backhand index",
    "names": [
      "point_right"
    ],
    "tags": []
  },
  "👈": {
    "description": "white left pointing backhand index",
    "names": [
      "point_left"
    ],
    "tags": []
  },
  "🙌": {
    "description": "person raising both hands in celebration",
    "names": [
      "raised_hands"
    ],
    "tags": [
      "hooray"
    ]
  },
  "🙏": {
    "description": "person with folded hands",
    "names": [
      "pray"
    ],
    "tags": [
      "please",
      "hope",
      "wish"
    ]
  },
  "☝️": {
    "description": "white up pointing index",
    "names": [
      "point_up"
    ],
    "tags": []
  },
  "👏": {
    "description": "clapping hands sign",
    "names": [
      "clap"
    ],
    "tags": [
      "praise",
      "applause"
    ]
  },
  "💪": {
    "description": "flexed biceps",
    "names": [
      "muscle"
    ],
    "tags": [
      "flex",
      "bicep",
      "strong",
      "workout"
    ]
  },
  "🚶": {
    "description": "pedestrian",
    "names": [
      "walking"
    ],
    "tags": []
  },
  "🏃": {
    "description": "runner",
    "names": [
      "runner",
      "running"
    ],
    "tags": [
      "exercise",
      "workout",
      "marathon"
    ]
  },
  "💃": {
    "description": "dancer",
    "names": [
      "dancer"
    ],
    "tags": [
      "dress"
    ]
  },
  "👫": {
    "description": "man and woman holding hands",
    "names": [
      "couple"
    ],
    "tags": [
      "date"
    ]
  },
  "👪": {
    "description": "family",
    "names": [
      "family"
    ],
    "tags": [
      "home",
      "parents",
      "child"
    ]
  },
  "👬": {
    "description": "two men holding hands",
    "names": [
      "two_men_holding_hands"
    ],
    "tags": [
      "couple",
      "date"
    ]
  },
  "👭": {
    "description": "two women holding hands",
    "names": [
      "two_women_holding_hands"
    ],
    "tags": [
      "couple",
      "date"
    ]
  },
  "💏": {
    "description": "kiss",
    "names": [
      "couplekiss"
    ],
    "tags": []
  },
  "💑": {
    "description": "couple with heart",
    "names": [
      "couple_with_heart"
    ],
    "tags": []
  },
  "👯": {
    "description": "woman with bunny ears",
    "names": [
      "dancers"
    ],
    "tags": [
      "bunny"
    ]
  },
  "🙆": {
    "description": "face with ok gesture",
    "names": [
      "ok_woman"
    ],
    "tags": []
  },
  "🙅": {
    "description": "face with no good gesture",
    "names": [
      "no_good"
    ],
    "tags": [
      "stop",
      "halt"
    ]
  },
  "💁": {
    "description": "information desk person",
    "names": [
      "information_desk_person"
    ],
    "tags": []
  },
  "🙋": {
    "description": "happy person raising one hand",
    "names": [
      "raising_hand"
    ],
    "tags": []
  },
  "💆": {
    "description": "face massage",
    "names": [
      "massage"
    ],
    "tags": [
      "spa"
    ]
  },
  "💇": {
    "description": "haircut",
    "names": [
      "haircut"
    ],
    "tags": [
      "beauty"
    ]
  },
  "💅": {
    "description": "nail polish",
    "names": [
      "nail_care"
    ],
    "tags": [
      "beauty",
      "manicure"
    ]
  },
  "👰": {
    "description": "bride with veil",
    "names": [
      "bride_with_veil"
    ],
    "tags": [
      "marriage",
      "wedding"
    ]
  },
  "🙎": {
    "description": "person with pouting face",
    "names": [
      "person_with_pouting_face"
    ],
    "tags": []
  },
  "🙍": {
    "description": "person frowning",
    "names": [
      "person_frowning"
    ],
    "tags": [
      "sad"
    ]
  },
  "🙇": {
    "description": "person bowing deeply",
    "names": [
      "bow"
    ],
    "tags": [
      "respect",
      "thanks"
    ]
  },
  "🎩": {
    "description": "top hat",
    "names": [
      "tophat"
    ],
    "tags": [
      "hat",
      "classy"
    ]
  },
  "👑": {
    "description": "crown",
    "names": [
      "crown"
    ],
    "tags": [
      "king",
      "queen",
      "royal"
    ]
  },
  "👒": {
    "description": "womans hat",
    "names": [
      "womans_hat"
    ],
    "tags": []
  },
  "👟": {
    "description": "athletic shoe",
    "names": [
      "athletic_shoe"
    ],
    "tags": [
      "sneaker",
      "sport",
      "running"
    ]
  },
  "👞": {
    "description": "mans shoe",
    "names": [
      "mans_shoe",
      "shoe"
    ],
    "tags": []
  },
  "👡": {
    "description": "womans sandal",
    "names": [
      "sandal"
    ],
    "tags": [
      "shoe"
    ]
  },
  "👠": {
    "description": "high-heeled shoe",
    "names": [
      "high_heel"
    ],
    "tags": [
      "shoe"
    ]
  },
  "👢": {
    "description": "womans boots",
    "names": [
      "boot"
    ],
    "tags": []
  },
  "👕": {
    "description": "t-shirt",
    "names": [
      "shirt",
      "tshirt"
    ],
    "tags": []
  },
  "👔": {
    "description": "necktie",
    "names": [
      "necktie"
    ],
    "tags": [
      "shirt",
      "formal"
    ]
  },
  "👚": {
    "description": "womans clothes",
    "names": [
      "womans_clothes"
    ],
    "tags": []
  },
  "👗": {
    "description": "dress",
    "names": [
      "dress"
    ],
    "tags": []
  },
  "🎽": {
    "description": "running shirt with sash",
    "names": [
      "running_shirt_with_sash"
    ],
    "tags": [
      "marathon"
    ]
  },
  "👖": {
    "description": "jeans",
    "names": [
      "jeans"
    ],
    "tags": [
      "pants"
    ]
  },
  "👘": {
    "description": "kimono",
    "names": [
      "kimono"
    ],
    "tags": []
  },
  "👙": {
    "description": "bikini",
    "names": [
      "bikini"
    ],
    "tags": [
      "beach"
    ]
  },
  "💼": {
    "description": "briefcase",
    "names": [
      "briefcase"
    ],
    "tags": [
      "business"
    ]
  },
  "👜": {
    "description": "handbag",
    "names": [
      "handbag"
    ],
    "tags": [
      "bag"
    ]
  },
  "👝": {
    "description": "pouch",
    "names": [
      "pouch"
    ],
    "tags": [
      "bag"
    ]
  },
  "👛": {
    "description": "purse",
    "names": [
      "purse"
    ],
    "tags": []
  },
  "👓": {
    "description": "eyeglasses",
    "names": [
      "eyeglasses"
    ],
    "tags": [
      "glasses"
    ]
  },
  "🎀": {
    "description": "ribbon",
    "names": [
      "ribbon"
    ],
    "tags": []
  },
  "🌂": {
    "description": "closed umbrella",
    "names": [
      "closed_umbrella"
    ],
    "tags": [
      "weather",
      "rain"
    ]
  },
  "💄": {
    "description": "lipstick",
    "names": [
      "lipstick"
    ],
    "tags": [
      "makeup"
    ]
  },
  "💛": {
    "description": "yellow heart",
    "names": [
      "yellow_heart"
    ],
    "tags": []
  },
  "💙": {
    "description": "blue heart",
    "names": [
      "blue_heart"
    ],
    "tags": []
  },
  "💜": {
    "description": "purple heart",
    "names": [
      "purple_heart"
    ],
    "tags": []
  },
  "💚": {
    "description": "green heart",
    "names": [
      "green_heart"
    ],
    "tags": []
  },
  "❤️": {
    "description": "heavy black heart",
    "names": [
      "heart"
    ],
    "tags": [
      "love"
    ]
  },
  "💔": {
    "description": "broken heart",
    "names": [
      "broken_heart"
    ],
    "tags": []
  },
  "💗": {
    "description": "growing heart",
    "names": [
      "heartpulse"
    ],
    "tags": []
  },
  "💓": {
    "description": "beating heart",
    "names": [
      "heartbeat"
    ],
    "tags": []
  },
  "💕": {
    "description": "two hearts",
    "names": [
      "two_hearts"
    ],
    "tags": []
  },
  "💖": {
    "description": "sparkling heart",
    "names": [
      "sparkling_heart"
    ],
    "tags": []
  },
  "💞": {
    "description": "revolving hearts",
    "names": [
      "revolving_hearts"
    ],
    "tags": []
  },
  "💘": {
    "description": "heart with arrow",
    "names": [
      "cupid"
    ],
    "tags": [
      "love",
      "heart"
    ]
  },
  "💌": {
    "description": "love letter",
    "names": [
      "love_letter"
    ],
    "tags": [
      "email",
      "envelope"
    ]
  },
  "💋": {
    "description": "kiss mark",
    "names": [
      "kiss"
    ],
    "tags": [
      "lipstick"
    ]
  },
  "💍": {
    "description": "ring",
    "names": [
      "ring"
    ],
    "tags": [
      "wedding",
      "marriage",
      "engaged"
    ]
  },
  "💎": {
    "description": "gem stone",
    "names": [
      "gem"
    ],
    "tags": [
      "diamond"
    ]
  },
  "👤": {
    "description": "bust in silhouette",
    "names": [
      "bust_in_silhouette"
    ],
    "tags": [
      "user"
    ]
  },
  "👥": {
    "description": "busts in silhouette",
    "names": [
      "busts_in_silhouette"
    ],
    "tags": [
      "users",
      "group",
      "team"
    ]
  },
  "💬": {
    "description": "speech balloon",
    "names": [
      "speech_balloon"
    ],
    "tags": [
      "comment"
    ]
  },
  "👣": {
    "description": "footprints",
    "names": [
      "footprints"
    ],
    "tags": [
      "feet",
      "tracks"
    ]
  },
  "💭": {
    "description": "thought balloon",
    "names": [
      "thought_balloon"
    ],
    "tags": [
      "thinking"
    ]
  },
  "🐶": {
    "description": "dog face",
    "names": [
      "dog"
    ],
    "tags": [
      "pet"
    ]
  },
  "🐺": {
    "description": "wolf face",
    "names": [
      "wolf"
    ],
    "tags": []
  },
  "🐱": {
    "description": "cat face",
    "names": [
      "cat"
    ],
    "tags": [
      "pet"
    ]
  },
  "🐭": {
    "description": "mouse face",
    "names": [
      "mouse"
    ],
    "tags": []
  },
  "🐹": {
    "description": "hamster face",
    "names": [
      "hamster"
    ],
    "tags": [
      "pet"
    ]
  },
  "🐰": {
    "description": "rabbit face",
    "names": [
      "rabbit"
    ],
    "tags": [
      "bunny"
    ]
  },
  "🐸": {
    "description": "frog face",
    "names": [
      "frog"
    ],
    "tags": []
  },
  "🐯": {
    "description": "tiger face",
    "names": [
      "tiger"
    ],
    "tags": []
  },
  "🐨": {
    "description": "koala",
    "names": [
      "koala"
    ],
    "tags": []
  },
  "🐻": {
    "description": "bear face",
    "names": [
      "bear"
    ],
    "tags": []
  },
  "🐷": {
    "description": "pig face",
    "names": [
      "pig"
    ],
    "tags": []
  },
  "🐽": {
    "description": "pig nose",
    "names": [
      "pig_nose"
    ],
    "tags": []
  },
  "🐮": {
    "description": "cow face",
    "names": [
      "cow"
    ],
    "tags": []
  },
  "🐗": {
    "description": "boar",
    "names": [
      "boar"
    ],
    "tags": []
  },
  "🐵": {
    "description": "monkey face",
    "names": [
      "monkey_face"
    ],
    "tags": []
  },
  "🐒": {
    "description": "monkey",
    "names": [
      "monkey"
    ],
    "tags": []
  },
  "🐴": {
    "description": "horse face",
    "names": [
      "horse"
    ],
    "tags": []
  },
  "🐑": {
    "description": "sheep",
    "names": [
      "sheep"
    ],
    "tags": []
  },
  "🐘": {
    "description": "elephant",
    "names": [
      "elephant"
    ],
    "tags": []
  },
  "🐼": {
    "description": "panda face",
    "names": [
      "panda_face"
    ],
    "tags": []
  },
  "🐧": {
    "description": "penguin",
    "names": [
      "penguin"
    ],
    "tags": []
  },
  "🐦": {
    "description": "bird",
    "names": [
      "bird"
    ],
    "tags": []
  },
  "🐤": {
    "description": "baby chick",
    "names": [
      "baby_chick"
    ],
    "tags": []
  },
  "🐥": {
    "description": "front-facing baby chick",
    "names": [
      "hatched_chick"
    ],
    "tags": []
  },
  "🐣": {
    "description": "hatching chick",
    "names": [
      "hatching_chick"
    ],
    "tags": []
  },
  "🐔": {
    "description": "chicken",
    "names": [
      "chicken"
    ],
    "tags": []
  },
  "🐍": {
    "description": "snake",
    "names": [
      "snake"
    ],
    "tags": []
  },
  "🐢": {
    "description": "turtle",
    "names": [
      "turtle"
    ],
    "tags": [
      "slow"
    ]
  },
  "🐛": {
    "description": "bug",
    "names": [
      "bug"
    ],
    "tags": []
  },
  "🐝": {
    "description": "honeybee",
    "names": [
      "bee",
      "honeybee"
    ],
    "tags": []
  },
  "🐜": {
    "description": "ant",
    "names": [
      "ant"
    ],
    "tags": []
  },
  "🐞": {
    "description": "lady beetle",
    "names": [
      "beetle"
    ],
    "tags": [
      "bug"
    ]
  },
  "🐌": {
    "description": "snail",
    "names": [
      "snail"
    ],
    "tags": [
      "slow"
    ]
  },
  "🐙": {
    "description": "octopus",
    "names": [
      "octopus"
    ],
    "tags": []
  },
  "🐚": {
    "description": "spiral shell",
    "names": [
      "shell"
    ],
    "tags": [
      "sea",
      "beach"
    ]
  },
  "🐠": {
    "description": "tropical fish",
    "names": [
      "tropical_fish"
    ],
    "tags": []
  },
  "🐟": {
    "description": "fish",
    "names": [
      "fish"
    ],
    "tags": []
  },
  "🐬": {
    "description": "dolphin",
    "names": [
      "dolphin",
      "flipper"
    ],
    "tags": []
  },
  "🐳": {
    "description": "spouting whale",
    "names": [
      "whale"
    ],
    "tags": [
      "sea"
    ]
  },
  "🐋": {
    "description": "whale",
    "names": [
      "whale2"
    ],
    "tags": []
  },
  "🐄": {
    "description": "cow",
    "names": [
      "cow2"
    ],
    "tags": []
  },
  "🐏": {
    "description": "ram",
    "names": [
      "ram"
    ],
    "tags": []
  },
  "🐀": {
    "description": "rat",
    "names": [
      "rat"
    ],
    "tags": []
  },
  "🐃": {
    "description": "water buffalo",
    "names": [
      "water_buffalo"
    ],
    "tags": []
  },
  "🐅": {
    "description": "tiger",
    "names": [
      "tiger2"
    ],
    "tags": []
  },
  "🐇": {
    "description": "rabbit",
    "names": [
      "rabbit2"
    ],
    "tags": []
  },
  "🐉": {
    "description": "dragon",
    "names": [
      "dragon"
    ],
    "tags": []
  },
  "🐎": {
    "description": "horse",
    "names": [
      "racehorse"
    ],
    "tags": [
      "speed"
    ]
  },
  "🐐": {
    "description": "goat",
    "names": [
      "goat"
    ],
    "tags": []
  },
  "🐓": {
    "description": "rooster",
    "names": [
      "rooster"
    ],
    "tags": []
  },
  "🐕": {
    "description": "dog",
    "names": [
      "dog2"
    ],
    "tags": []
  },
  "🐖": {
    "description": "pig",
    "names": [
      "pig2"
    ],
    "tags": []
  },
  "🐁": {
    "description": "mouse",
    "names": [
      "mouse2"
    ],
    "tags": []
  },
  "🐂": {
    "description": "ox",
    "names": [
      "ox"
    ],
    "tags": []
  },
  "🐲": {
    "description": "dragon face",
    "names": [
      "dragon_face"
    ],
    "tags": []
  },
  "🐡": {
    "description": "blowfish",
    "names": [
      "blowfish"
    ],
    "tags": []
  },
  "🐊": {
    "description": "crocodile",
    "names": [
      "crocodile"
    ],
    "tags": []
  },
  "🐫": {
    "description": "bactrian camel",
    "names": [
      "camel"
    ],
    "tags": []
  },
  "🐪": {
    "description": "dromedary camel",
    "names": [
      "dromedary_camel"
    ],
    "tags": [
      "desert"
    ]
  },
  "🐆": {
    "description": "leopard",
    "names": [
      "leopard"
    ],
    "tags": []
  },
  "🐈": {
    "description": "cat",
    "names": [
      "cat2"
    ],
    "tags": []
  },
  "🐩": {
    "description": "poodle",
    "names": [
      "poodle"
    ],
    "tags": [
      "dog"
    ]
  },
  "🐾": {
    "description": "paw prints",
    "names": [
      "feet",
      "paw_prints"
    ],
    "tags": []
  },
  "💐": {
    "description": "bouquet",
    "names": [
      "bouquet"
    ],
    "tags": [
      "flowers"
    ]
  },
  "🌸": {
    "description": "cherry blossom",
    "names": [
      "cherry_blossom"
    ],
    "tags": [
      "flower",
      "spring"
    ]
  },
  "🌷": {
    "description": "tulip",
    "names": [
      "tulip"
    ],
    "tags": [
      "flower"
    ]
  },
  "🍀": {
    "description": "four leaf clover",
    "names": [
      "four_leaf_clover"
    ],
    "tags": [
      "luck"
    ]
  },
  "🌹": {
    "description": "rose",
    "names": [
      "rose"
    ],
    "tags": [
      "flower"
    ]
  },
  "🌻": {
    "description": "sunflower",
    "names": [
      "sunflower"
    ],
    "tags": []
  },
  "🌺": {
    "description": "hibiscus",
    "names": [
      "hibiscus"
    ],
    "tags": []
  },
  "🍁": {
    "description": "maple leaf",
    "names": [
      "maple_leaf"
    ],
    "tags": [
      "canada"
    ]
  },
  "🍃": {
    "description": "leaf fluttering in wind",
    "names": [
      "leaves"
    ],
    "tags": [
      "leaf"
    ]
  },
  "🍂": {
    "description": "fallen leaf",
    "names": [
      "fallen_leaf"
    ],
    "tags": [
      "autumn"
    ]
  },
  "🌿": {
    "description": "herb",
    "names": [
      "herb"
    ],
    "tags": []
  },
  "🌾": {
    "description": "ear of rice",
    "names": [
      "ear_of_rice"
    ],
    "tags": []
  },
  "🍄": {
    "description": "mushroom",
    "names": [
      "mushroom"
    ],
    "tags": []
  },
  "🌵": {
    "description": "cactus",
    "names": [
      "cactus"
    ],
    "tags": []
  },
  "🌴": {
    "description": "palm tree",
    "names": [
      "palm_tree"
    ],
    "tags": []
  },
  "🌲": {
    "description": "evergreen tree",
    "names": [
      "evergreen_tree"
    ],
    "tags": [
      "wood"
    ]
  },
  "🌳": {
    "description": "deciduous tree",
    "names": [
      "deciduous_tree"
    ],
    "tags": [
      "wood"
    ]
  },
  "🌰": {
    "description": "chestnut",
    "names": [
      "chestnut"
    ],
    "tags": []
  },
  "🌱": {
    "description": "seedling",
    "names": [
      "seedling"
    ],
    "tags": [
      "plant"
    ]
  },
  "🌼": {
    "description": "blossom",
    "names": [
      "blossom"
    ],
    "tags": []
  },
  "🌐": {
    "description": "globe with meridians",
    "names": [
      "globe_with_meridians"
    ],
    "tags": [
      "world",
      "global",
      "international"
    ]
  },
  "🌞": {
    "description": "sun with face",
    "names": [
      "sun_with_face"
    ],
    "tags": [
      "summer"
    ]
  },
  "🌝": {
    "description": "full moon with face",
    "names": [
      "full_moon_with_face"
    ],
    "tags": []
  },
  "🌚": {
    "description": "new moon with face",
    "names": [
      "new_moon_with_face"
    ],
    "tags": []
  },
  "🌑": {
    "description": "new moon symbol",
    "names": [
      "new_moon"
    ],
    "tags": []
  },
  "🌒": {
    "description": "waxing crescent moon symbol",
    "names": [
      "waxing_crescent_moon"
    ],
    "tags": []
  },
  "🌓": {
    "description": "first quarter moon symbol",
    "names": [
      "first_quarter_moon"
    ],
    "tags": []
  },
  "🌔": {
    "description": "waxing gibbous moon symbol",
    "names": [
      "moon",
      "waxing_gibbous_moon"
    ],
    "tags": []
  },
  "🌕": {
    "description": "full moon symbol",
    "names": [
      "full_moon"
    ],
    "tags": []
  },
  "🌖": {
    "description": "waning gibbous moon symbol",
    "names": [
      "waning_gibbous_moon"
    ],
    "tags": []
  },
  "🌗": {
    "description": "last quarter moon symbol",
    "names": [
      "last_quarter_moon"
    ],
    "tags": []
  },
  "🌘": {
    "description": "waning crescent moon symbol",
    "names": [
      "waning_crescent_moon"
    ],
    "tags": []
  },
  "🌜": {
    "description": "last quarter moon with face",
    "names": [
      "last_quarter_moon_with_face"
    ],
    "tags": []
  },
  "🌛": {
    "description": "first quarter moon with face",
    "names": [
      "first_quarter_moon_with_face"
    ],
    "tags": []
  },
  "🌙": {
    "description": "crescent moon",
    "names": [
      "crescent_moon"
    ],
    "tags": [
      "night"
    ]
  },
  "🌍": {
    "description": "earth globe europe-africa",
    "names": [
      "earth_africa"
    ],
    "tags": [
      "globe",
      "world",
      "international"
    ]
  },
  "🌎": {
    "description": "earth globe americas",
    "names": [
      "earth_americas"
    ],
    "tags": [
      "globe",
      "world",
      "international"
    ]
  },
  "🌏": {
    "description": "earth globe asia-australia",
    "names": [
      "earth_asia"
    ],
    "tags": [
      "globe",
      "world",
      "international"
    ]
  },
  "🌋": {
    "description": "volcano",
    "names": [
      "volcano"
    ],
    "tags": []
  },
  "🌌": {
    "description": "milky way",
    "names": [
      "milky_way"
    ],
    "tags": []
  },
  "🌠": {
    "description": "shooting star",
    "names": [
      "stars"
    ],
    "tags": []
  },
  "⭐": {
    "description": "white medium star",
    "names": [
      "star"
    ],
    "tags": []
  },
  "☀️": {
    "description": "black sun with rays",
    "names": [
      "sunny"
    ],
    "tags": [
      "weather"
    ]
  },
  "⛅": {
    "description": "sun behind cloud",
    "names": [
      "partly_sunny"
    ],
    "tags": [
      "weather",
      "cloud"
    ]
  },
  "☁️": {
    "description": "cloud",
    "names": [
      "cloud"
    ],
    "tags": []
  },
  "⚡": {
    "description": "high voltage sign",
    "names": [
      "zap"
    ],
    "tags": [
      "lightning",
      "thunder"
    ]
  },
  "☔": {
    "description": "umbrella with rain drops",
    "names": [
      "umbrella"
    ],
    "tags": [
      "rain",
      "weather"
    ]
  },
  "❄️": {
    "description": "snowflake",
    "names": [
      "snowflake"
    ],
    "tags": [
      "winter",
      "cold",
      "weather"
    ]
  },
  "⛄": {
    "description": "snowman without snow",
    "names": [
      "snowman"
    ],
    "tags": [
      "winter",
      "christmas"
    ]
  },
  "🌀": {
    "description": "cyclone",
    "names": [
      "cyclone"
    ],
    "tags": [
      "swirl"
    ]
  },
  "🌁": {
    "description": "foggy",
    "names": [
      "foggy"
    ],
    "tags": [
      "karl"
    ]
  },
  "🌈": {
    "description": "rainbow",
    "names": [
      "rainbow"
    ],
    "tags": [
      "pride"
    ]
  },
  "🌊": {
    "description": "water wave",
    "names": [
      "ocean"
    ],
    "tags": [
      "sea"
    ]
  },
  "🎍": {
    "description": "pine decoration",
    "names": [
      "bamboo"
    ],
    "tags": []
  },
  "💝": {
    "description": "heart with ribbon",
    "names": [
      "gift_heart"
    ],
    "tags": [
      "chocolates"
    ]
  },
  "🎎": {
    "description": "japanese dolls",
    "names": [
      "dolls"
    ],
    "tags": []
  },
  "🎒": {
    "description": "school satchel",
    "names": [
      "school_satchel"
    ],
    "tags": []
  },
  "🎓": {
    "description": "graduation cap",
    "names": [
      "mortar_board"
    ],
    "tags": [
      "education",
      "college",
      "university",
      "graduation"
    ]
  },
  "🎏": {
    "description": "carp streamer",
    "names": [
      "flags"
    ],
    "tags": []
  },
  "🎆": {
    "description": "fireworks",
    "names": [
      "fireworks"
    ],
    "tags": [
      "festival",
      "celebration"
    ]
  },
  "🎇": {
    "description": "firework sparkler",
    "names": [
      "sparkler"
    ],
    "tags": []
  },
  "🎐": {
    "description": "wind chime",
    "names": [
      "wind_chime"
    ],
    "tags": []
  },
  "🎑": {
    "description": "moon viewing ceremony",
    "names": [
      "rice_scene"
    ],
    "tags": []
  },
  "🎃": {
    "description": "jack-o-lantern",
    "names": [
      "jack_o_lantern"
    ],
    "tags": [
      "halloween"
    ]
  },
  "👻": {
    "description": "ghost",
    "names": [
      "ghost"
    ],
    "tags": [
      "halloween"
    ]
  },
  "🎅": {
    "description": "father christmas",
    "names": [
      "santa"
    ],
    "tags": [
      "christmas"
    ]
  },
  "🎄": {
    "description": "christmas tree",
    "names": [
      "christmas_tree"
    ],
    "tags": []
  },
  "🎁": {
    "description": "wrapped present",
    "names": [
      "gift"
    ],
    "tags": [
      "present",
      "birthday",
      "christmas"
    ]
  },
  "🎋": {
    "description": "tanabata tree",
    "names": [
      "tanabata_tree"
    ],
    "tags": []
  },
  "🎉": {
    "description": "party popper",
    "names": [
      "tada"
    ],
    "tags": [
      "party"
    ]
  },
  "🎊": {
    "description": "confetti ball",
    "names": [
      "confetti_ball"
    ],
    "tags": []
  },
  "🎈": {
    "description": "balloon",
    "names": [
      "balloon"
    ],
    "tags": [
      "party",
      "birthday"
    ]
  },
  "🎌": {
    "description": "crossed flags",
    "names": [
      "crossed_flags"
    ],
    "tags": []
  },
  "🔮": {
    "description": "crystal ball",
    "names": [
      "crystal_ball"
    ],
    "tags": [
      "fortune"
    ]
  },
  "🎥": {
    "description": "movie camera",
    "names": [
      "movie_camera"
    ],
    "tags": [
      "film",
      "video"
    ]
  },
  "📷": {
    "description": "camera",
    "names": [
      "camera"
    ],
    "tags": [
      "photo"
    ]
  },
  "📹": {
    "description": "video camera",
    "names": [
      "video_camera"
    ],
    "tags": []
  },
  "📼": {
    "description": "videocassette",
    "names": [
      "vhs"
    ],
    "tags": []
  },
  "💿": {
    "description": "optical disc",
    "names": [
      "cd"
    ],
    "tags": []
  },
  "📀": {
    "description": "dvd",
    "names": [
      "dvd"
    ],
    "tags": []
  },
  "💽": {
    "description": "minidisc",
    "names": [
      "minidisc"
    ],
    "tags": []
  },
  "💾": {
    "description": "floppy disk",
    "names": [
      "floppy_disk"
    ],
    "tags": [
      "save"
    ]
  },
  "💻": {
    "description": "personal computer",
    "names": [
      "computer"
    ],
    "tags": [
      "desktop",
      "screen"
    ]
  },
  "📱": {
    "description": "mobile phone",
    "names": [
      "iphone"
    ],
    "tags": [
      "smartphone",
      "mobile"
    ]
  },
  "☎️": {
    "description": "black telephone",
    "names": [
      "phone",
      "telephone"
    ],
    "tags": []
  },
  "📞": {
    "description": "telephone receiver",
    "names": [
      "telephone_receiver"
    ],
    "tags": [
      "phone",
      "call"
    ]
  },
  "📟": {
    "description": "pager",
    "names": [
      "pager"
    ],
    "tags": []
  },
  "📠": {
    "description": "fax machine",
    "names": [
      "fax"
    ],
    "tags": []
  },
  "📡": {
    "description": "satellite antenna",
    "names": [
      "satellite"
    ],
    "tags": [
      "signal"
    ]
  },
  "📺": {
    "description": "television",
    "names": [
      "tv"
    ],
    "tags": []
  },
  "📻": {
    "description": "radio",
    "names": [
      "radio"
    ],
    "tags": [
      "podcast"
    ]
  },
  "🔊": {
    "description": "speaker with three sound waves",
    "names": [
      "loud_sound"
    ],
    "tags": [
      "volume"
    ]
  },
  "🔉": {
    "description": "speaker with one sound wave",
    "names": [
      "sound"
    ],
    "tags": [
      "volume"
    ]
  },
  "🔈": {
    "description": "speaker",
    "names": [
      "speaker"
    ],
    "tags": []
  },
  "🔇": {
    "description": "speaker with cancellation stroke",
    "names": [
      "mute"
    ],
    "tags": [
      "sound",
      "volume"
    ]
  },
  "🔔": {
    "description": "bell",
    "names": [
      "bell"
    ],
    "tags": [
      "sound",
      "notification"
    ]
  },
  "🔕": {
    "description": "bell with cancellation stroke",
    "names": [
      "no_bell"
    ],
    "tags": [
      "volume",
      "off"
    ]
  },
  "📢": {
    "description": "public address loudspeaker",
    "names": [
      "loudspeaker"
    ],
    "tags": [
      "announcement"
    ]
  },
  "📣": {
    "description": "cheering megaphone",
    "names": [
      "mega"
    ],
    "tags": []
  },
  "⏳": {
    "description": "hourglass with flowing sand",
    "names": [
      "hourglass_flowing_sand"
    ],
    "tags": [
      "time"
    ]
  },
  "⌛": {
    "description": "hourglass",
    "names": [
      "hourglass"
    ],
    "tags": [
      "time"
    ]
  },
  "⏰": {
    "description": "alarm clock",
    "names": [
      "alarm_clock"
    ],
    "tags": [
      "morning"
    ]
  },
  "⌚": {
    "description": "watch",
    "names": [
      "watch"
    ],
    "tags": [
      "time"
    ]
  },
  "🔓": {
    "description": "open lock",
    "names": [
      "unlock"
    ],
    "tags": [
      "security"
    ]
  },
  "🔒": {
    "description": "lock",
    "names": [
      "lock"
    ],
    "tags": [
      "security",
      "private"
    ]
  },
  "🔏": {
    "description": "lock with ink pen",
    "names": [
      "lock_with_ink_pen"
    ],
    "tags": []
  },
  "🔐": {
    "description": "closed lock with key",
    "names": [
      "closed_lock_with_key"
    ],
    "tags": [
      "security"
    ]
  },
  "🔑": {
    "description": "key",
    "names": [
      "key"
    ],
    "tags": [
      "lock",
      "password"
    ]
  },
  "🔎": {
    "description": "right-pointing magnifying glass",
    "names": [
      "mag_right"
    ],
    "tags": []
  },
  "💡": {
    "description": "electric light bulb",
    "names": [
      "bulb"
    ],
    "tags": [
      "idea",
      "light"
    ]
  },
  "🔦": {
    "description": "electric torch",
    "names": [
      "flashlight"
    ],
    "tags": []
  },
  "🔆": {
    "description": "high brightness symbol",
    "names": [
      "high_brightness"
    ],
    "tags": []
  },
  "🔅": {
    "description": "low brightness symbol",
    "names": [
      "low_brightness"
    ],
    "tags": []
  },
  "🔌": {
    "description": "electric plug",
    "names": [
      "electric_plug"
    ],
    "tags": []
  },
  "🔋": {
    "description": "battery",
    "names": [
      "battery"
    ],
    "tags": [
      "power"
    ]
  },
  "🔍": {
    "description": "left-pointing magnifying glass",
    "names": [
      "mag"
    ],
    "tags": [
      "search",
      "zoom"
    ]
  },
  "🛁": {
    "description": "bathtub",
    "names": [
      "bathtub"
    ],
    "tags": []
  },
  "🛀": {
    "description": "bath",
    "names": [
      "bath"
    ],
    "tags": [
      "shower"
    ]
  },
  "🚿": {
    "description": "shower",
    "names": [
      "shower"
    ],
    "tags": [
      "bath"
    ]
  },
  "🚽": {
    "description": "toilet",
    "names": [
      "toilet"
    ],
    "tags": [
      "wc"
    ]
  },
  "🔧": {
    "description": "wrench",
    "names": [
      "wrench"
    ],
    "tags": [
      "tool"
    ]
  },
  "🔩": {
    "description": "nut and bolt",
    "names": [
      "nut_and_bolt"
    ],
    "tags": []
  },
  "🔨": {
    "description": "hammer",
    "names": [
      "hammer"
    ],
    "tags": [
      "tool"
    ]
  },
  "🚪": {
    "description": "door",
    "names": [
      "door"
    ],
    "tags": []
  },
  "🚬": {
    "description": "smoking symbol",
    "names": [
      "smoking"
    ],
    "tags": [
      "cigarette"
    ]
  },
  "💣": {
    "description": "bomb",
    "names": [
      "bomb"
    ],
    "tags": [
      "boom"
    ]
  },
  "🔫": {
    "description": "pistol",
    "names": [
      "gun"
    ],
    "tags": [
      "shoot",
      "weapon"
    ]
  },
  "🔪": {
    "description": "hocho",
    "names": [
      "hocho",
      "knife"
    ],
    "tags": [
      "cut",
      "chop"
    ]
  },
  "💊": {
    "description": "pill",
    "names": [
      "pill"
    ],
    "tags": [
      "health",
      "medicine"
    ]
  },
  "💉": {
    "description": "syringe",
    "names": [
      "syringe"
    ],
    "tags": [
      "health",
      "hospital",
      "needle"
    ]
  },
  "💰": {
    "description": "money bag",
    "names": [
      "moneybag"
    ],
    "tags": [
      "dollar",
      "cream"
    ]
  },
  "💴": {
    "description": "banknote with yen sign",
    "names": [
      "yen"
    ],
    "tags": []
  },
  "💵": {
    "description": "banknote with dollar sign",
    "names": [
      "dollar"
    ],
    "tags": [
      "money"
    ]
  },
  "💷": {
    "description": "banknote with pound sign",
    "names": [
      "pound"
    ],
    "tags": []
  },
  "💶": {
    "description": "banknote with euro sign",
    "names": [
      "euro"
    ],
    "tags": []
  },
  "💳": {
    "description": "credit card",
    "names": [
      "credit_card"
    ],
    "tags": [
      "subscription"
    ]
  },
  "💸": {
    "description": "money with wings",
    "names": [
      "money_with_wings"
    ],
    "tags": [
      "dollar"
    ]
  },
  "📲": {
    "description": "mobile phone with rightwards arrow at left",
    "names": [
      "calling"
    ],
    "tags": [
      "call",
      "incoming"
    ]
  },
  "📧": {
    "description": "e-mail symbol",
    "names": [
      "e-mail"
    ],
    "tags": []
  },
  "📥": {
    "description": "inbox tray",
    "names": [
      "inbox_tray"
    ],
    "tags": []
  },
  "📤": {
    "description": "outbox tray",
    "names": [
      "outbox_tray"
    ],
    "tags": []
  },
  "✉️": {
    "description": "envelope",
    "names": [
      "email",
      "envelope"
    ],
    "tags": [
      "letter"
    ]
  },
  "📩": {
    "description": "envelope with downwards arrow above",
    "names": [
      "envelope_with_arrow"
    ],
    "tags": []
  },
  "📨": {
    "description": "incoming envelope",
    "names": [
      "incoming_envelope"
    ],
    "tags": []
  },
  "📯": {
    "description": "postal horn",
    "names": [
      "postal_horn"
    ],
    "tags": []
  },
  "📫": {
    "description": "closed mailbox with raised flag",
    "names": [
      "mailbox"
    ],
    "tags": []
  },
  "📪": {
    "description": "closed mailbox with lowered flag",
    "names": [
      "mailbox_closed"
    ],
    "tags": []
  },
  "📬": {
    "description": "open mailbox with raised flag",
    "names": [
      "mailbox_with_mail"
    ],
    "tags": []
  },
  "📭": {
    "description": "open mailbox with lowered flag",
    "names": [
      "mailbox_with_no_mail"
    ],
    "tags": []
  },
  "📮": {
    "description": "postbox",
    "names": [
      "postbox"
    ],
    "tags": []
  },
  "📦": {
    "description": "package",
    "names": [
      "package"
    ],
    "tags": [
      "shipping"
    ]
  },
  "📝": {
    "description": "memo",
    "names": [
      "memo",
      "pencil"
    ],
    "tags": [
      "document",
      "note"
    ]
  },
  "📄": {
    "description": "page facing up",
    "names": [
      "page_facing_up"
    ],
    "tags": [
      "document"
    ]
  },
  "📃": {
    "description": "page with curl",
    "names": [
      "page_with_curl"
    ],
    "tags": []
  },
  "📑": {
    "description": "bookmark tabs",
    "names": [
      "bookmark_tabs"
    ],
    "tags": []
  },
  "📊": {
    "description": "bar chart",
    "names": [
      "bar_chart"
    ],
    "tags": [
      "stats",
      "metrics"
    ]
  },
  "📈": {
    "description": "chart with upwards trend",
    "names": [
      "chart_with_upwards_trend"
    ],
    "tags": [
      "graph",
      "metrics"
    ]
  },
  "📉": {
    "description": "chart with downwards trend",
    "names": [
      "chart_with_downwards_trend"
    ],
    "tags": [
      "graph",
      "metrics"
    ]
  },
  "📜": {
    "description": "scroll",
    "names": [
      "scroll"
    ],
    "tags": [
      "document"
    ]
  },
  "📋": {
    "description": "clipboard",
    "names": [
      "clipboard"
    ],
    "tags": []
  },
  "📅": {
    "description": "calendar",
    "names": [
      "date"
    ],
    "tags": [
      "calendar",
      "schedule"
    ]
  },
  "📆": {
    "description": "tear-off calendar",
    "names": [
      "calendar"
    ],
    "tags": [
      "schedule"
    ]
  },
  "📇": {
    "description": "card index",
    "names": [
      "card_index"
    ],
    "tags": []
  },
  "📁": {
    "description": "file folder",
    "names": [
      "file_folder"
    ],
    "tags": [
      "directory"
    ]
  },
  "📂": {
    "description": "open file folder",
    "names": [
      "open_file_folder"
    ],
    "tags": []
  },
  "✂️": {
    "description": "black scissors",
    "names": [
      "scissors"
    ],
    "tags": [
      "cut"
    ]
  },
  "📌": {
    "description": "pushpin",
    "names": [
      "pushpin"
    ],
    "tags": [
      "location"
    ]
  },
  "📎": {
    "description": "paperclip",
    "names": [
      "paperclip"
    ],
    "tags": []
  },
  "✒️": {
    "description": "black nib",
    "names": [
      "black_nib"
    ],
    "tags": []
  },
  "✏️": {
    "description": "pencil",
    "names": [
      "pencil2"
    ],
    "tags": []
  },
  "📏": {
    "description": "straight ruler",
    "names": [
      "straight_ruler"
    ],
    "tags": []
  },
  "📐": {
    "description": "triangular ruler",
    "names": [
      "triangular_ruler"
    ],
    "tags": []
  },
  "📕": {
    "description": "closed book",
    "names": [
      "closed_book"
    ],
    "tags": []
  },
  "📗": {
    "description": "green book",
    "names": [
      "green_book"
    ],
    "tags": []
  },
  "📘": {
    "description": "blue book",
    "names": [
      "blue_book"
    ],
    "tags": []
  },
  "📙": {
    "description": "orange book",
    "names": [
      "orange_book"
    ],
    "tags": []
  },
  "📓": {
    "description": "notebook",
    "names": [
      "notebook"
    ],
    "tags": []
  },
  "📔": {
    "description": "notebook with decorative cover",
    "names": [
      "notebook_with_decorative_cover"
    ],
    "tags": []
  },
  "📒": {
    "description": "ledger",
    "names": [
      "ledger"
    ],
    "tags": []
  },
  "📚": {
    "description": "books",
    "names": [
      "books"
    ],
    "tags": [
      "library"
    ]
  },
  "📖": {
    "description": "open book",
    "names": [
      "book",
      "open_book"
    ],
    "tags": []
  },
  "🔖": {
    "description": "bookmark",
    "names": [
      "bookmark"
    ],
    "tags": []
  },
  "📛": {
    "description": "name badge",
    "names": [
      "name_badge"
    ],
    "tags": []
  },
  "🔬": {
    "description": "microscope",
    "names": [
      "microscope"
    ],
    "tags": [
      "science",
      "laboratory",
      "investigate"
    ]
  },
  "🔭": {
    "description": "telescope",
    "names": [
      "telescope"
    ],
    "tags": []
  },
  "📰": {
    "description": "newspaper",
    "names": [
      "newspaper"
    ],
    "tags": [
      "press"
    ]
  },
  "🎨": {
    "description": "artist palette",
    "names": [
      "art"
    ],
    "tags": [
      "design",
      "paint"
    ]
  },
  "🎬": {
    "description": "clapper board",
    "names": [
      "clapper"
    ],
    "tags": [
      "film"
    ]
  },
  "🎤": {
    "description": "microphone",
    "names": [
      "microphone"
    ],
    "tags": [
      "sing"
    ]
  },
  "🎧": {
    "description": "headphone",
    "names": [
      "headphones"
    ],
    "tags": [
      "music",
      "earphones"
    ]
  },
  "🎼": {
    "description": "musical score",
    "names": [
      "musical_score"
    ],
    "tags": []
  },
  "🎵": {
    "description": "musical note",
    "names": [
      "musical_note"
    ],
    "tags": []
  },
  "🎶": {
    "description": "multiple musical notes",
    "names": [
      "notes"
    ],
    "tags": [
      "music"
    ]
  },
  "🎹": {
    "description": "musical keyboard",
    "names": [
      "musical_keyboard"
    ],
    "tags": [
      "piano"
    ]
  },
  "🎻": {
    "description": "violin",
    "names": [
      "violin"
    ],
    "tags": []
  },
  "🎺": {
    "description": "trumpet",
    "names": [
      "trumpet"
    ],
    "tags": []
  },
  "🎷": {
    "description": "saxophone",
    "names": [
      "saxophone"
    ],
    "tags": []
  },
  "🎸": {
    "description": "guitar",
    "names": [
      "guitar"
    ],
    "tags": [
      "rock"
    ]
  },
  "👾": {
    "description": "alien monster",
    "names": [
      "space_invader"
    ],
    "tags": [
      "game",
      "retro"
    ]
  },
  "🎮": {
    "description": "video game",
    "names": [
      "video_game"
    ],
    "tags": [
      "play",
      "controller",
      "console"
    ]
  },
  "🃏": {
    "description": "playing card black joker",
    "names": [
      "black_joker"
    ],
    "tags": []
  },
  "🎴": {
    "description": "flower playing cards",
    "names": [
      "flower_playing_cards"
    ],
    "tags": []
  },
  "🀄": {
    "description": "mahjong tile red dragon",
    "names": [
      "mahjong"
    ],
    "tags": []
  },
  "🎲": {
    "description": "game die",
    "names": [
      "game_die"
    ],
    "tags": [
      "dice",
      "gambling"
    ]
  },
  "🎯": {
    "description": "direct hit",
    "names": [
      "dart"
    ],
    "tags": [
      "target"
    ]
  },
  "🏈": {
    "description": "american football",
    "names": [
      "football"
    ],
    "tags": [
      "sports"
    ]
  },
  "🏀": {
    "description": "basketball and hoop",
    "names": [
      "basketball"
    ],
    "tags": [
      "sports"
    ]
  },
  "⚽": {
    "description": "soccer ball",
    "names": [
      "soccer"
    ],
    "tags": [
      "sports"
    ]
  },
  "⚾️": {
    "description": "baseball",
    "names": [
      "baseball"
    ],
    "tags": [
      "sports"
    ]
  },
  "🎾": {
    "description": "tennis racquet and ball",
    "names": [
      "tennis"
    ],
    "tags": [
      "sports"
    ]
  },
  "🎱": {
    "description": "billiards",
    "names": [
      "8ball"
    ],
    "tags": [
      "pool",
      "billiards"
    ]
  },
  "🏉": {
    "description": "rugby football",
    "names": [
      "rugby_football"
    ],
    "tags": []
  },
  "🎳": {
    "description": "bowling",
    "names": [
      "bowling"
    ],
    "tags": []
  },
  "⛳": {
    "description": "flag in hole",
    "names": [
      "golf"
    ],
    "tags": []
  },
  "🚵": {
    "description": "mountain bicyclist",
    "names": [
      "mountain_bicyclist"
    ],
    "tags": []
  },
  "🚴": {
    "description": "bicyclist",
    "names": [
      "bicyclist"
    ],
    "tags": []
  },
  "🏁": {
    "description": "chequered flag",
    "names": [
      "checkered_flag"
    ],
    "tags": [
      "milestone",
      "finish"
    ]
  },
  "🏇": {
    "description": "horse racing",
    "names": [
      "horse_racing"
    ],
    "tags": []
  },
  "🏆": {
    "description": "trophy",
    "names": [
      "trophy"
    ],
    "tags": [
      "award",
      "contest",
      "winner"
    ]
  },
  "🎿": {
    "description": "ski and ski boot",
    "names": [
      "ski"
    ],
    "tags": []
  },
  "🏂": {
    "description": "snowboarder",
    "names": [
      "snowboarder"
    ],
    "tags": []
  },
  "🏊": {
    "description": "swimmer",
    "names": [
      "swimmer"
    ],
    "tags": []
  },
  "🏄": {
    "description": "surfer",
    "names": [
      "surfer"
    ],
    "tags": []
  },
  "🎣": {
    "description": "fishing pole and fish",
    "names": [
      "fishing_pole_and_fish"
    ],
    "tags": []
  },
  "☕": {
    "description": "hot beverage",
    "names": [
      "coffee"
    ],
    "tags": [
      "cafe",
      "espresso"
    ]
  },
  "🍵": {
    "description": "teacup without handle",
    "names": [
      "tea"
    ],
    "tags": [
      "green",
      "breakfast"
    ]
  },
  "🍶": {
    "description": "sake bottle and cup",
    "names": [
      "sake"
    ],
    "tags": []
  },
  "🍼": {
    "description": "baby bottle",
    "names": [
      "baby_bottle"
    ],
    "tags": [
      "milk"
    ]
  },
  "🍺": {
    "description": "beer mug",
    "names": [
      "beer"
    ],
    "tags": [
      "drink"
    ]
  },
  "🍻": {
    "description": "clinking beer mugs",
    "names": [
      "beers"
    ],
    "tags": [
      "drinks"
    ]
  },
  "🍸": {
    "description": "cocktail glass",
    "names": [
      "cocktail"
    ],
    "tags": [
      "drink"
    ]
  },
  "🍹": {
    "description": "tropical drink",
    "names": [
      "tropical_drink"
    ],
    "tags": [
      "summer",
      "vacation"
    ]
  },
  "🍷": {
    "description": "wine glass",
    "names": [
      "wine_glass"
    ],
    "tags": []
  },
  "🍴": {
    "description": "fork and knife",
    "names": [
      "fork_and_knife"
    ],
    "tags": [
      "cutlery"
    ]
  },
  "🍕": {
    "description": "slice of pizza",
    "names": [
      "pizza"
    ],
    "tags": []
  },
  "🍔": {
    "description": "hamburger",
    "names": [
      "hamburger"
    ],
    "tags": [
      "burger"
    ]
  },
  "🍟": {
    "description": "french fries",
    "names": [
      "fries"
    ],
    "tags": []
  },
  "🍗": {
    "description": "poultry leg",
    "names": [
      "poultry_leg"
    ],
    "tags": [
      "meat",
      "chicken"
    ]
  },
  "🍖": {
    "description": "meat on bone",
    "names": [
      "meat_on_bone"
    ],
    "tags": []
  },
  "🍝": {
    "description": "spaghetti",
    "names": [
      "spaghetti"
    ],
    "tags": [
      "pasta"
    ]
  },
  "🍛": {
    "description": "curry and rice",
    "names": [
      "curry"
    ],
    "tags": []
  },
  "🍤": {
    "description": "fried shrimp",
    "names": [
      "fried_shrimp"
    ],
    "tags": [
      "tempura"
    ]
  },
  "🍱": {
    "description": "bento box",
    "names": [
      "bento"
    ],
    "tags": []
  },
  "🍣": {
    "description": "sushi",
    "names": [
      "sushi"
    ],
    "tags": []
  },
  "🍥": {
    "description": "fish cake with swirl design",
    "names": [
      "fish_cake"
    ],
    "tags": []
  },
  "🍙": {
    "description": "rice ball",
    "names": [
      "rice_ball"
    ],
    "tags": []
  },
  "🍘": {
    "description": "rice cracker",
    "names": [
      "rice_cracker"
    ],
    "tags": []
  },
  "🍚": {
    "description": "cooked rice",
    "names": [
      "rice"
    ],
    "tags": []
  },
  "🍜": {
    "description": "steaming bowl",
    "names": [
      "ramen"
    ],
    "tags": [
      "noodle"
    ]
  },
  "🍲": {
    "description": "pot of food",
    "names": [
      "stew"
    ],
    "tags": []
  },
  "🍢": {
    "description": "oden",
    "names": [
      "oden"
    ],
    "tags": []
  },
  "🍡": {
    "description": "dango",
    "names": [
      "dango"
    ],
    "tags": []
  },
  "🍳": {
    "description": "cooking",
    "names": [
      "egg"
    ],
    "tags": [
      "breakfast"
    ]
  },
  "🍞": {
    "description": "bread",
    "names": [
      "bread"
    ],
    "tags": [
      "toast"
    ]
  },
  "🍩": {
    "description": "doughnut",
    "names": [
      "doughnut"
    ],
    "tags": []
  },
  "🍮": {
    "description": "custard",
    "names": [
      "custard"
    ],
    "tags": []
  },
  "🍦": {
    "description": "soft ice cream",
    "names": [
      "icecream"
    ],
    "tags": []
  },
  "🍨": {
    "description": "ice cream",
    "names": [
      "ice_cream"
    ],
    "tags": []
  },
  "🍧": {
    "description": "shaved ice",
    "names": [
      "shaved_ice"
    ],
    "tags": []
  },
  "🎂": {
    "description": "birthday cake",
    "names": [
      "birthday"
    ],
    "tags": [
      "party"
    ]
  },
  "🍰": {
    "description": "shortcake",
    "names": [
      "cake"
    ],
    "tags": [
      "dessert"
    ]
  },
  "🍪": {
    "description": "cookie",
    "names": [
      "cookie"
    ],
    "tags": []
  },
  "🍫": {
    "description": "chocolate bar",
    "names": [
      "chocolate_bar"
    ],
    "tags": []
  },
  "🍬": {
    "description": "candy",
    "names": [
      "candy"
    ],
    "tags": [
      "sweet"
    ]
  },
  "🍭": {
    "description": "lollipop",
    "names": [
      "lollipop"
    ],
    "tags": []
  },
  "🍯": {
    "description": "honey pot",
    "names": [
      "honey_pot"
    ],
    "tags": []
  },
  "🍎": {
    "description": "red apple",
    "names": [
      "apple"
    ],
    "tags": []
  },
  "🍏": {
    "description": "green apple",
    "names": [
      "green_apple"
    ],
    "tags": [
      "fruit"
    ]
  },
  "🍊": {
    "description": "tangerine",
    "names": [
      "tangerine"
    ],
    "tags": []
  },
  "🍋": {
    "description": "lemon",
    "names": [
      "lemon"
    ],
    "tags": []
  },
  "🍒": {
    "description": "cherries",
    "names": [
      "cherries"
    ],
    "tags": [
      "fruit"
    ]
  },
  "🍇": {
    "description": "grapes",
    "names": [
      "grapes"
    ],
    "tags": []
  },
  "🍉": {
    "description": "watermelon",
    "names": [
      "watermelon"
    ],
    "tags": []
  },
  "🍓": {
    "description": "strawberry",
    "names": [
      "strawberry"
    ],
    "tags": [
      "fruit"
    ]
  },
  "🍑": {
    "description": "peach",
    "names": [
      "peach"
    ],
    "tags": []
  },
  "🍈": {
    "description": "melon",
    "names": [
      "melon"
    ],
    "tags": []
  },
  "🍌": {
    "description": "banana",
    "names": [
      "banana"
    ],
    "tags": [
      "fruit"
    ]
  },
  "🍐": {
    "description": "pear",
    "names": [
      "pear"
    ],
    "tags": []
  },
  "🍍": {
    "description": "pineapple",
    "names": [
      "pineapple"
    ],
    "tags": []
  },
  "🍠": {
    "description": "roasted sweet potato",
    "names": [
      "sweet_potato"
    ],
    "tags": []
  },
  "🍆": {
    "description": "aubergine",
    "names": [
      "eggplant"
    ],
    "tags": [
      "aubergine"
    ]
  },
  "🍅": {
    "description": "tomato",
    "names": [
      "tomato"
    ],
    "tags": []
  },
  "🌽": {
    "description": "ear of maize",
    "names": [
      "corn"
    ],
    "tags": []
  },
  "🏠": {
    "description": "house building",
    "names": [
      "house"
    ],
    "tags": []
  },
  "🏡": {
    "description": "house with garden",
    "names": [
      "house_with_garden"
    ],
    "tags": []
  },
  "🏫": {
    "description": "school",
    "names": [
      "school"
    ],
    "tags": []
  },
  "🏢": {
    "description": "office building",
    "names": [
      "office"
    ],
    "tags": []
  },
  "🏣": {
    "description": "japanese post office",
    "names": [
      "post_office"
    ],
    "tags": []
  },
  "🏥": {
    "description": "hospital",
    "names": [
      "hospital"
    ],
    "tags": []
  },
  "🏦": {
    "description": "bank",
    "names": [
      "bank"
    ],
    "tags": []
  },
  "🏪": {
    "description": "convenience store",
    "names": [
      "convenience_store"
    ],
    "tags": []
  },
  "🏩": {
    "description": "love hotel",
    "names": [
      "love_hotel"
    ],
    "tags": []
  },
  "🏨": {
    "description": "hotel",
    "names": [
      "hotel"
    ],
    "tags": []
  },
  "💒": {
    "description": "wedding",
    "names": [
      "wedding"
    ],
    "tags": [
      "marriage"
    ]
  },
  "⛪": {
    "description": "church",
    "names": [
      "church"
    ],
    "tags": []
  },
  "🏬": {
    "description": "department store",
    "names": [
      "department_store"
    ],
    "tags": []
  },
  "🏤": {
    "description": "european post office",
    "names": [
      "european_post_office"
    ],
    "tags": []
  },
  "🌇": {
    "description": "sunset over buildings",
    "names": [
      "city_sunrise"
    ],
    "tags": []
  },
  "🌆": {
    "description": "cityscape at dusk",
    "names": [
      "city_sunset"
    ],
    "tags": []
  },
  "🏯": {
    "description": "japanese castle",
    "names": [
      "japanese_castle"
    ],
    "tags": []
  },
  "🏰": {
    "description": "european castle",
    "names": [
      "european_castle"
    ],
    "tags": []
  },
  "⛺": {
    "description": "tent",
    "names": [
      "tent"
    ],
    "tags": [
      "camping"
    ]
  },
  "🏭": {
    "description": "factory",
    "names": [
      "factory"
    ],
    "tags": []
  },
  "🗼": {
    "description": "tokyo tower",
    "names": [
      "tokyo_tower"
    ],
    "tags": []
  },
  "🗾": {
    "description": "silhouette of japan",
    "names": [
      "japan"
    ],
    "tags": []
  },
  "🗻": {
    "description": "mount fuji",
    "names": [
      "mount_fuji"
    ],
    "tags": []
  },
  "🌄": {
    "description": "sunrise over mountains",
    "names": [
      "sunrise_over_mountains"
    ],
    "tags": []
  },
  "🌅": {
    "description": "sunrise",
    "names": [
      "sunrise"
    ],
    "tags": []
  },
  "🌃": {
    "description": "night with stars",
    "names": [
      "night_with_stars"
    ],
    "tags": []
  },
  "🗽": {
    "description": "statue of liberty",
    "names": [
      "statue_of_liberty"
    ],
    "tags": []
  },
  "🌉": {
    "description": "bridge at night",
    "names": [
      "bridge_at_night"
    ],
    "tags": []
  },
  "🎠": {
    "description": "carousel horse",
    "names": [
      "carousel_horse"
    ],
    "tags": []
  },
  "🎡": {
    "description": "ferris wheel",
    "names": [
      "ferris_wheel"
    ],
    "tags": []
  },
  "⛲": {
    "description": "fountain",
    "names": [
      "fountain"
    ],
    "tags": []
  },
  "🎢": {
    "description": "roller coaster",
    "names": [
      "roller_coaster"
    ],
    "tags": []
  },
  "🚢": {
    "description": "ship",
    "names": [
      "ship"
    ],
    "tags": []
  },
  "⛵": {
    "description": "sailboat",
    "names": [
      "boat",
      "sailboat"
    ],
    "tags": []
  },
  "🚤": {
    "description": "speedboat",
    "names": [
      "speedboat"
    ],
    "tags": [
      "ship"
    ]
  },
  "🚣": {
    "description": "rowboat",
    "names": [
      "rowboat"
    ],
    "tags": []
  },
  "⚓": {
    "description": "anchor",
    "names": [
      "anchor"
    ],
    "tags": [
      "ship"
    ]
  },
  "🚀": {
    "description": "rocket",
    "names": [
      "rocket"
    ],
    "tags": [
      "ship",
      "launch"
    ]
  },
  "✈️": {
    "description": "airplane",
    "names": [
      "airplane"
    ],
    "tags": [
      "flight"
    ]
  },
  "💺": {
    "description": "seat",
    "names": [
      "seat"
    ],
    "tags": []
  },
  "🚁": {
    "description": "helicopter",
    "names": [
      "helicopter"
    ],
    "tags": []
  },
  "🚂": {
    "description": "steam locomotive",
    "names": [
      "steam_locomotive"
    ],
    "tags": [
      "train"
    ]
  },
  "🚊": {
    "description": "tram",
    "names": [
      "tram"
    ],
    "tags": []
  },
  "🚉": {
    "description": "station",
    "names": [
      "station"
    ],
    "tags": []
  },
  "🚞": {
    "description": "mountain railway",
    "names": [
      "mountain_railway"
    ],
    "tags": []
  },
  "🚆": {
    "description": "train",
    "names": [
      "train2"
    ],
    "tags": []
  },
  "🚄": {
    "description": "high-speed train",
    "names": [
      "bullettrain_side"
    ],
    "tags": [
      "train"
    ]
  },
  "🚅": {
    "description": "high-speed train with bullet nose",
    "names": [
      "bullettrain_front"
    ],
    "tags": [
      "train"
    ]
  },
  "🚈": {
    "description": "light rail",
    "names": [
      "light_rail"
    ],
    "tags": []
  },
  "🚇": {
    "description": "metro",
    "names": [
      "metro"
    ],
    "tags": []
  },
  "🚝": {
    "description": "monorail",
    "names": [
      "monorail"
    ],
    "tags": []
  },
  "🚋": {
    "description": "tram car",
    "names": [
      "train"
    ],
    "tags": []
  },
  "🚃": {
    "description": "railway car",
    "names": [
      "railway_car"
    ],
    "tags": []
  },
  "🚎": {
    "description": "trolleybus",
    "names": [
      "trolleybus"
    ],
    "tags": []
  },
  "🚌": {
    "description": "bus",
    "names": [
      "bus"
    ],
    "tags": []
  },
  "🚍": {
    "description": "oncoming bus",
    "names": [
      "oncoming_bus"
    ],
    "tags": []
  },
  "🚙": {
    "description": "recreational vehicle",
    "names": [
      "blue_car"
    ],
    "tags": []
  },
  "🚘": {
    "description": "oncoming automobile",
    "names": [
      "oncoming_automobile"
    ],
    "tags": []
  },
  "🚗": {
    "description": "automobile",
    "names": [
      "car",
      "red_car"
    ],
    "tags": []
  },
  "🚕": {
    "description": "taxi",
    "names": [
      "taxi"
    ],
    "tags": []
  },
  "🚖": {
    "description": "oncoming taxi",
    "names": [
      "oncoming_taxi"
    ],
    "tags": []
  },
  "🚛": {
    "description": "articulated lorry",
    "names": [
      "articulated_lorry"
    ],
    "tags": []
  },
  "🚚": {
    "description": "delivery truck",
    "names": [
      "truck"
    ],
    "tags": []
  },
  "🚨": {
    "description": "police cars revolving light",
    "names": [
      "rotating_light"
    ],
    "tags": [
      "911",
      "emergency"
    ]
  },
  "🚓": {
    "description": "police car",
    "names": [
      "police_car"
    ],
    "tags": []
  },
  "🚔": {
    "description": "oncoming police car",
    "names": [
      "oncoming_police_car"
    ],
    "tags": []
  },
  "🚒": {
    "description": "fire engine",
    "names": [
      "fire_engine"
    ],
    "tags": []
  },
  "🚑": {
    "description": "ambulance",
    "names": [
      "ambulance"
    ],
    "tags": []
  },
  "🚐": {
    "description": "minibus",
    "names": [
      "minibus"
    ],
    "tags": []
  },
  "🚲": {
    "description": "bicycle",
    "names": [
      "bike"
    ],
    "tags": [
      "bicycle"
    ]
  },
  "🚡": {
    "description": "aerial tramway",
    "names": [
      "aerial_tramway"
    ],
    "tags": []
  },
  "🚟": {
    "description": "suspension railway",
    "names": [
      "suspension_railway"
    ],
    "tags": []
  },
  "🚠": {
    "description": "mountain cableway",
    "names": [
      "mountain_cableway"
    ],
    "tags": []
  },
  "🚜": {
    "description": "tractor",
    "names": [
      "tractor"
    ],
    "tags": []
  },
  "💈": {
    "description": "barber pole",
    "names": [
      "barber"
    ],
    "tags": []
  },
  "🚏": {
    "description": "bus stop",
    "names": [
      "busstop"
    ],
    "tags": []
  },
  "🎫": {
    "description": "ticket",
    "names": [
      "ticket"
    ],
    "tags": []
  },
  "🚦": {
    "description": "vertical traffic light",
    "names": [
      "vertical_traffic_light"
    ],
    "tags": [
      "semaphore"
    ]
  },
  "🚥": {
    "description": "horizontal traffic light",
    "names": [
      "traffic_light"
    ],
    "tags": []
  },
  "⚠️": {
    "description": "warning sign",
    "names": [
      "warning"
    ],
    "tags": [
      "wip"
    ]
  },
  "🚧": {
    "description": "construction sign",
    "names": [
      "construction"
    ],
    "tags": [
      "wip"
    ]
  },
  "🔰": {
    "description": "japanese symbol for beginner",
    "names": [
      "beginner"
    ],
    "tags": []
  },
  "⛽": {
    "description": "fuel pump",
    "names": [
      "fuelpump"
    ],
    "tags": []
  },
  "🏮": {
    "description": "izakaya lantern",
    "names": [
      "izakaya_lantern",
      "lantern"
    ],
    "tags": []
  },
  "🎰": {
    "description": "slot machine",
    "names": [
      "slot_machine"
    ],
    "tags": []
  },
  "♨️": {
    "description": "hot springs",
    "names": [
      "hotsprings"
    ],
    "tags": []
  },
  "🗿": {
    "description": "moyai",
    "names": [
      "moyai"
    ],
    "tags": [
      "stone"
    ]
  },
  "🎪": {
    "description": "circus tent",
    "names": [
      "circus_tent"
    ],
    "tags": []
  },
  "🎭": {
    "description": "performing arts",
    "names": [
      "performing_arts"
    ],
    "tags": [
      "theater",
      "drama"
    ]
  },
  "📍": {
    "description": "round pushpin",
    "names": [
      "round_pushpin"
    ],
    "tags": [
      "location"
    ]
  },
  "🚩": {
    "description": "triangular flag on post",
    "names": [
      "triangular_flag_on_post"
    ],
    "tags": []
  },
  "🇯🇵": {
    "description": "regional indicator symbol letter j + regional indicator symbol letter p",
    "names": [
      "jp"
    ],
    "tags": [
      "japan"
    ]
  },
  "🇰🇷": {
    "description": "regional indicator symbol letter k + regional indicator symbol letter r",
    "names": [
      "kr"
    ],
    "tags": [
      "korea"
    ]
  },
  "🇩🇪": {
    "description": "regional indicator symbol letter d + regional indicator symbol letter e",
    "names": [
      "de"
    ],
    "tags": [
      "flag",
      "germany"
    ]
  },
  "🇨🇳": {
    "description": "regional indicator symbol letter c + regional indicator symbol letter n",
    "names": [
      "cn"
    ],
    "tags": [
      "china"
    ]
  },
  "🇺🇸": {
    "description": "regional indicator symbol letter u + regional indicator symbol letter s",
    "names": [
      "us"
    ],
    "tags": [
      "flag",
      "united",
      "america"
    ]
  },
  "🇫🇷": {
    "description": "regional indicator symbol letter f + regional indicator symbol letter r",
    "names": [
      "fr"
    ],
    "tags": [
      "france",
      "french"
    ]
  },
  "🇪🇸": {
    "description": "regional indicator symbol letter e + regional indicator symbol letter s",
    "names": [
      "es"
    ],
    "tags": [
      "spain"
    ]
  },
  "🇮🇹": {
    "description": "regional indicator symbol letter i + regional indicator symbol letter t",
    "names": [
      "it"
    ],
    "tags": [
      "italy"
    ]
  },
  "🇷🇺": {
    "description": "regional indicator symbol letter r + regional indicator symbol letter u",
    "names": [
      "ru"
    ],
    "tags": [
      "russia"
    ]
  },
  "🇬🇧": {
    "description": "regional indicator symbol letter g + regional indicator symbol letter b",
    "names": [
      "gb",
      "uk"
    ],
    "tags": [
      "flag",
      "british"
    ]
  },
  "1️⃣": {
    "description": "digit one + combining enclosing keycap",
    "names": [
      "one"
    ],
    "tags": []
  },
  "2️⃣": {
    "description": "digit two + combining enclosing keycap",
    "names": [
      "two"
    ],
    "tags": []
  },
  "3️⃣": {
    "description": "digit three + combining enclosing keycap",
    "names": [
      "three"
    ],
    "tags": []
  },
  "4️⃣": {
    "description": "digit four + combining enclosing keycap",
    "names": [
      "four"
    ],
    "tags": []
  },
  "5️⃣": {
    "description": "digit five + combining enclosing keycap",
    "names": [
      "five"
    ],
    "tags": []
  },
  "6️⃣": {
    "description": "digit six + combining enclosing keycap",
    "names": [
      "six"
    ],
    "tags": []
  },
  "7️⃣": {
    "description": "digit seven + combining enclosing keycap",
    "names": [
      "seven"
    ],
    "tags": []
  },
  "8️⃣": {
    "description": "digit eight + combining enclosing keycap",
    "names": [
      "eight"
    ],
    "tags": []
  },
  "9️⃣": {
    "description": "digit nine + combining enclosing keycap",
    "names": [
      "nine"
    ],
    "tags": []
  },
  "0️⃣": {
    "description": "digit zero + combining enclosing keycap",
    "names": [
      "zero"
    ],
    "tags": []
  },
  "🔟": {
    "description": "keycap ten",
    "names": [
      "keycap_ten"
    ],
    "tags": []
  },
  "🔢": {
    "description": "input symbol for numbers",
    "names": [
      "1234"
    ],
    "tags": [
      "numbers"
    ]
  },
  "#️⃣": {
    "description": "number sign + combining enclosing keycap",
    "names": [
      "hash"
    ],
    "tags": [
      "number"
    ]
  },
  "🔣": {
    "description": "input symbol for symbols",
    "names": [
      "symbols"
    ],
    "tags": []
  },
  "⬆️": {
    "description": "upwards black arrow",
    "names": [
      "arrow_up"
    ],
    "tags": []
  },
  "⬇️": {
    "description": "downwards black arrow",
    "names": [
      "arrow_down"
    ],
    "tags": []
  },
  "⬅️": {
    "description": "leftwards black arrow",
    "names": [
      "arrow_left"
    ],
    "tags": []
  },
  "➡️": {
    "description": "black rightwards arrow",
    "names": [
      "arrow_right"
    ],
    "tags": []
  },
  "🔠": {
    "description": "input symbol for latin capital letters",
    "names": [
      "capital_abcd"
    ],
    "tags": [
      "letters"
    ]
  },
  "🔡": {
    "description": "input symbol for latin small letters",
    "names": [
      "abcd"
    ],
    "tags": []
  },
  "🔤": {
    "description": "input symbol for latin letters",
    "names": [
      "abc"
    ],
    "tags": [
      "alphabet"
    ]
  },
  "↗️": {
    "description": "north east arrow",
    "names": [
      "arrow_upper_right"
    ],
    "tags": []
  },
  "↖️": {
    "description": "north west arrow",
    "names": [
      "arrow_upper_left"
    ],
    "tags": []
  },
  "↘️": {
    "description": "south east arrow",
    "names": [
      "arrow_lower_right"
    ],
    "tags": []
  },
  "↙️": {
    "description": "south west arrow",
    "names": [
      "arrow_lower_left"
    ],
    "tags": []
  },
  "↔️": {
    "description": "left right arrow",
    "names": [
      "left_right_arrow"
    ],
    "tags": []
  },
  "↕️": {
    "description": "up down arrow",
    "names": [
      "arrow_up_down"
    ],
    "tags": []
  },
  "🔄": {
    "description": "anticlockwise downwards and upwards open circle arrows",
    "names": [
      "arrows_counterclockwise"
    ],
    "tags": [
      "sync"
    ]
  },
  "◀️": {
    "description": "black left-pointing triangle",
    "names": [
      "arrow_backward"
    ],
    "tags": []
  },
  "▶️": {
    "description": "black right-pointing triangle",
    "names": [
      "arrow_forward"
    ],
    "tags": []
  },
  "🔼": {
    "description": "up-pointing small red triangle",
    "names": [
      "arrow_up_small"
    ],
    "tags": []
  },
  "🔽": {
    "description": "down-pointing small red triangle",
    "names": [
      "arrow_down_small"
    ],
    "tags": []
  },
  "↩️": {
    "description": "leftwards arrow with hook",
    "names": [
      "leftwards_arrow_with_hook"
    ],
    "tags": [
      "return"
    ]
  },
  "↪️": {
    "description": "rightwards arrow with hook",
    "names": [
      "arrow_right_hook"
    ],
    "tags": []
  },
  "ℹ️": {
    "description": "information source",
    "names": [
      "information_source"
    ],
    "tags": []
  },
  "⏪": {
    "description": "black left-pointing double triangle",
    "names": [
      "rewind"
    ],
    "tags": []
  },
  "⏩": {
    "description": "black right-pointing double triangle",
    "names": [
      "fast_forward"
    ],
    "tags": []
  },
  "⏫": {
    "description": "black up-pointing double triangle",
    "names": [
      "arrow_double_up"
    ],
    "tags": []
  },
  "⏬": {
    "description": "black down-pointing double triangle",
    "names": [
      "arrow_double_down"
    ],
    "tags": []
  },
  "⤵️": {
    "description": "arrow pointing rightwards then curving downwards",
    "names": [
      "arrow_heading_down"
    ],
    "tags": []
  },
  "⤴️": {
    "description": "arrow pointing rightwards then curving upwards",
    "names": [
      "arrow_heading_up"
    ],
    "tags": []
  },
  "🆗": {
    "description": "squared ok",
    "names": [
      "ok"
    ],
    "tags": [
      "yes"
    ]
  },
  "🔀": {
    "description": "twisted rightwards arrows",
    "names": [
      "twisted_rightwards_arrows"
    ],
    "tags": [
      "shuffle"
    ]
  },
  "🔁": {
    "description": "clockwise rightwards and leftwards open circle arrows",
    "names": [
      "repeat"
    ],
    "tags": [
      "loop"
    ]
  },
  "🔂": {
    "description": "clockwise rightwards and leftwards open circle arrows with circled one overlay",
    "names": [
      "repeat_one"
    ],
    "tags": []
  },
  "🆕": {
    "description": "squared new",
    "names": [
      "new"
    ],
    "tags": [
      "fresh"
    ]
  },
  "🆙": {
    "description": "squared up with exclamation mark",
    "names": [
      "up"
    ],
    "tags": []
  },
  "🆒": {
    "description": "squared cool",
    "names": [
      "cool"
    ],
    "tags": []
  },
  "🆓": {
    "description": "squared free",
    "names": [
      "free"
    ],
    "tags": []
  },
  "🆖": {
    "description": "squared ng",
    "names": [
      "ng"
    ],
    "tags": []
  },
  "📶": {
    "description": "antenna with bars",
    "names": [
      "signal_strength"
    ],
    "tags": [
      "wifi"
    ]
  },
  "🎦": {
    "description": "cinema",
    "names": [
      "cinema"
    ],
    "tags": [
      "film",
      "movie"
    ]
  },
  "🈁": {
    "description": "squared katakana koko",
    "names": [
      "koko"
    ],
    "tags": []
  },
  "🈯": {
    "description": "squared cjk unified ideograph-6307",
    "names": [
      "u6307"
    ],
    "tags": []
  },
  "🈳": {
    "description": "squared cjk unified ideograph-7a7a",
    "names": [
      "u7a7a"
    ],
    "tags": []
  },
  "🈵": {
    "description": "squared cjk unified ideograph-6e80",
    "names": [
      "u6e80"
    ],
    "tags": []
  },
  "🈴": {
    "description": "squared cjk unified ideograph-5408",
    "names": [
      "u5408"
    ],
    "tags": []
  },
  "🈲": {
    "description": "squared cjk unified ideograph-7981",
    "names": [
      "u7981"
    ],
    "tags": []
  },
  "🉐": {
    "description": "circled ideograph advantage",
    "names": [
      "ideograph_advantage"
    ],
    "tags": []
  },
  "🈹": {
    "description": "squared cjk unified ideograph-5272",
    "names": [
      "u5272"
    ],
    "tags": []
  },
  "🈺": {
    "description": "squared cjk unified ideograph-55b6",
    "names": [
      "u55b6"
    ],
    "tags": []
  },
  "🈶": {
    "description": "squared cjk unified ideograph-6709",
    "names": [
      "u6709"
    ],
    "tags": []
  },
  "🈚": {
    "description": "squared cjk unified ideograph-7121",
    "names": [
      "u7121"
    ],
    "tags": []
  },
  "🚻": {
    "description": "restroom",
    "names": [
      "restroom"
    ],
    "tags": [
      "toilet"
    ]
  },
  "🚹": {
    "description": "mens symbol",
    "names": [
      "mens"
    ],
    "tags": []
  },
  "🚺": {
    "description": "womens symbol",
    "names": [
      "womens"
    ],
    "tags": []
  },
  "🚼": {
    "description": "baby symbol",
    "names": [
      "baby_symbol"
    ],
    "tags": []
  },
  "🚾": {
    "description": "water closet",
    "names": [
      "wc"
    ],
    "tags": [
      "toilet",
      "restroom"
    ]
  },
  "🚰": {
    "description": "potable water symbol",
    "names": [
      "potable_water"
    ],
    "tags": []
  },
  "🚮": {
    "description": "put litter in its place symbol",
    "names": [
      "put_litter_in_its_place"
    ],
    "tags": []
  },
  "🅿️": {
    "description": "negative squared latin capital letter p",
    "names": [
      "parking"
    ],
    "tags": []
  },
  "♿": {
    "description": "wheelchair symbol",
    "names": [
      "wheelchair"
    ],
    "tags": [
      "accessibility"
    ]
  },
  "🚭": {
    "description": "no smoking symbol",
    "names": [
      "no_smoking"
    ],
    "tags": []
  },
  "🈷️": {
    "description": "squared cjk unified ideograph-6708",
    "names": [
      "u6708"
    ],
    "tags": []
  },
  "🈸": {
    "description": "squared cjk unified ideograph-7533",
    "names": [
      "u7533"
    ],
    "tags": []
  },
  "🈂️": {
    "description": "squared katakana sa",
    "names": [
      "sa"
    ],
    "tags": []
  },
  "Ⓜ️": {
    "description": "circled latin capital letter m",
    "names": [
      "m"
    ],
    "tags": []
  },
  "🛂": {
    "description": "passport control",
    "names": [
      "passport_control"
    ],
    "tags": []
  },
  "🛄": {
    "description": "baggage claim",
    "names": [
      "baggage_claim"
    ],
    "tags": [
      "airport"
    ]
  },
  "🛅": {
    "description": "left luggage",
    "names": [
      "left_luggage"
    ],
    "tags": []
  },
  "🛃": {
    "description": "customs",
    "names": [
      "customs"
    ],
    "tags": []
  },
  "🉑": {
    "description": "circled ideograph accept",
    "names": [
      "accept"
    ],
    "tags": []
  },
  "㊙️": {
    "description": "circled ideograph secret",
    "names": [
      "secret"
    ],
    "tags": []
  },
  "㊗️": {
    "description": "circled ideograph congratulation",
    "names": [
      "congratulations"
    ],
    "tags": []
  },
  "🆑": {
    "description": "squared cl",
    "names": [
      "cl"
    ],
    "tags": []
  },
  "🆘": {
    "description": "squared sos",
    "names": [
      "sos"
    ],
    "tags": [
      "help",
      "emergency"
    ]
  },
  "🆔": {
    "description": "squared id",
    "names": [
      "id"
    ],
    "tags": []
  },
  "🚫": {
    "description": "no entry sign",
    "names": [
      "no_entry_sign"
    ],
    "tags": [
      "block",
      "forbidden"
    ]
  },
  "🔞": {
    "description": "no one under eighteen symbol",
    "names": [
      "underage"
    ],
    "tags": []
  },
  "📵": {
    "description": "no mobile phones",
    "names": [
      "no_mobile_phones"
    ],
    "tags": []
  },
  "🚯": {
    "description": "do not litter symbol",
    "names": [
      "do_not_litter"
    ],
    "tags": []
  },
  "🚱": {
    "description": "non-potable water symbol",
    "names": [
      "non-potable_water"
    ],
    "tags": []
  },
  "🚳": {
    "description": "no bicycles",
    "names": [
      "no_bicycles"
    ],
    "tags": []
  },
  "🚷": {
    "description": "no pedestrians",
    "names": [
      "no_pedestrians"
    ],
    "tags": []
  },
  "🚸": {
    "description": "children crossing",
    "names": [
      "children_crossing"
    ],
    "tags": []
  },
  "⛔": {
    "description": "no entry",
    "names": [
      "no_entry"
    ],
    "tags": [
      "limit"
    ]
  },
  "✳️": {
    "description": "eight spoked asterisk",
    "names": [
      "eight_spoked_asterisk"
    ],
    "tags": []
  },
  "❇️": {
    "description": "sparkle",
    "names": [
      "sparkle"
    ],
    "tags": []
  },
  "❎": {
    "description": "negative squared cross mark",
    "names": [
      "negative_squared_cross_mark"
    ],
    "tags": []
  },
  "✅": {
    "description": "white heavy check mark",
    "names": [
      "white_check_mark"
    ],
    "tags": []
  },
  "✴️": {
    "description": "eight pointed black star",
    "names": [
      "eight_pointed_black_star"
    ],
    "tags": []
  },
  "💟": {
    "description": "heart decoration",
    "names": [
      "heart_decoration"
    ],
    "tags": []
  },
  "🆚": {
    "description": "squared vs",
    "names": [
      "vs"
    ],
    "tags": []
  },
  "📳": {
    "description": "vibration mode",
    "names": [
      "vibration_mode"
    ],
    "tags": []
  },
  "📴": {
    "description": "mobile phone off",
    "names": [
      "mobile_phone_off"
    ],
    "tags": [
      "mute",
      "off"
    ]
  },
  "🅰️": {
    "description": "negative squared latin capital letter a",
    "names": [
      "a"
    ],
    "tags": []
  },
  "🅱️": {
    "description": "negative squared latin capital letter b",
    "names": [
      "b"
    ],
    "tags": []
  },
  "🆎": {
    "description": "negative squared ab",
    "names": [
      "ab"
    ],
    "tags": []
  },
  "🅾️": {
    "description": "negative squared latin capital letter o",
    "names": [
      "o2"
    ],
    "tags": []
  },
  "💠": {
    "description": "diamond shape with a dot inside",
    "names": [
      "diamond_shape_with_a_dot_inside"
    ],
    "tags": []
  },
  "➿": {
    "description": "double curly loop",
    "names": [
      "loop"
    ],
    "tags": []
  },
  "♻️": {
    "description": "black universal recycling symbol",
    "names": [
      "recycle"
    ],
    "tags": [
      "environment",
      "green"
    ]
  },
  "♈": {
    "description": "aries",
    "names": [
      "aries"
    ],
    "tags": []
  },
  "♉": {
    "description": "taurus",
    "names": [
      "taurus"
    ],
    "tags": []
  },
  "♊": {
    "description": "gemini",
    "names": [
      "gemini"
    ],
    "tags": []
  },
  "♋": {
    "description": "cancer",
    "names": [
      "cancer"
    ],
    "tags": []
  },
  "♌": {
    "description": "leo",
    "names": [
      "leo"
    ],
    "tags": []
  },
  "♍": {
    "description": "virgo",
    "names": [
      "virgo"
    ],
    "tags": []
  },
  "♎": {
    "description": "libra",
    "names": [
      "libra"
    ],
    "tags": []
  },
  "♏": {
    "description": "scorpius",
    "names": [
      "scorpius"
    ],
    "tags": []
  },
  "♐": {
    "description": "sagittarius",
    "names": [
      "sagittarius"
    ],
    "tags": []
  },
  "♑": {
    "description": "capricorn",
    "names": [
      "capricorn"
    ],
    "tags": []
  },
  "♒": {
    "description": "aquarius",
    "names": [
      "aquarius"
    ],
    "tags": []
  },
  "♓": {
    "description": "pisces",
    "names": [
      "pisces"
    ],
    "tags": []
  },
  "⛎": {
    "description": "ophiuchus",
    "names": [
      "ophiuchus"
    ],
    "tags": []
  },
  "🔯": {
    "description": "six pointed star with middle dot",
    "names": [
      "six_pointed_star"
    ],
    "tags": []
  },
  "🏧": {
    "description": "automated teller machine",
    "names": [
      "atm"
    ],
    "tags": []
  },
  "💹": {
    "description": "chart with upwards trend and yen sign",
    "names": [
      "chart"
    ],
    "tags": []
  },
  "💲": {
    "description": "heavy dollar sign",
    "names": [
      "heavy_dollar_sign"
    ],
    "tags": []
  },
  "💱": {
    "description": "currency exchange",
    "names": [
      "currency_exchange"
    ],
    "tags": []
  },
  "©️": {
    "description": "copyright sign",
    "names": [
      "copyright"
    ],
    "tags": []
  },
  "®️": {
    "description": "registered sign",
    "names": [
      "registered"
    ],
    "tags": []
  },
  "™️": {
    "description": "trade mark sign",
    "names": [
      "tm"
    ],
    "tags": [
      "trademark"
    ]
  },
  "❌": {
    "description": "cross mark",
    "names": [
      "x"
    ],
    "tags": []
  },
  "‼️": {
    "description": "double exclamation mark",
    "names": [
      "bangbang"
    ],
    "tags": []
  },
  "⁉️": {
    "description": "exclamation question mark",
    "names": [
      "interrobang"
    ],
    "tags": []
  },
  "❗": {
    "description": "heavy exclamation mark symbol",
    "names": [
      "exclamation",
      "heavy_exclamation_mark"
    ],
    "tags": [
      "bang"
    ]
  },
  "❓": {
    "description": "black question mark ornament",
    "names": [
      "question"
    ],
    "tags": [
      "confused"
    ]
  },
  "❕": {
    "description": "white exclamation mark ornament",
    "names": [
      "grey_exclamation"
    ],
    "tags": []
  },
  "❔": {
    "description": "white question mark ornament",
    "names": [
      "grey_question"
    ],
    "tags": []
  },
  "⭕": {
    "description": "heavy large circle",
    "names": [
      "o"
    ],
    "tags": []
  },
  "🔝": {
    "description": "top with upwards arrow above",
    "names": [
      "top"
    ],
    "tags": []
  },
  "🔚": {
    "description": "end with leftwards arrow above",
    "names": [
      "end"
    ],
    "tags": []
  },
  "🔙": {
    "description": "back with leftwards arrow above",
    "names": [
      "back"
    ],
    "tags": []
  },
  "🔛": {
    "description": "on with exclamation mark with left right arrow above",
    "names": [
      "on"
    ],
    "tags": []
  },
  "🔜": {
    "description": "soon with rightwards arrow above",
    "names": [
      "soon"
    ],
    "tags": []
  },
  "🔃": {
    "description": "clockwise downwards and upwards open circle arrows",
    "names": [
      "arrows_clockwise"
    ],
    "tags": []
  },
  "🕛": {
    "description": "clock face twelve oclock",
    "names": [
      "clock12"
    ],
    "tags": []
  },
  "🕧": {
    "description": "clock face twelve-thirty",
    "names": [
      "clock1230"
    ],
    "tags": []
  },
  "🕐": {
    "description": "clock face one oclock",
    "names": [
      "clock1"
    ],
    "tags": []
  },
  "🕜": {
    "description": "clock face one-thirty",
    "names": [
      "clock130"
    ],
    "tags": []
  },
  "🕑": {
    "description": "clock face two oclock",
    "names": [
      "clock2"
    ],
    "tags": []
  },
  "🕝": {
    "description": "clock face two-thirty",
    "names": [
      "clock230"
    ],
    "tags": []
  },
  "🕒": {
    "description": "clock face three oclock",
    "names": [
      "clock3"
    ],
    "tags": []
  },
  "🕞": {
    "description": "clock face three-thirty",
    "names": [
      "clock330"
    ],
    "tags": []
  },
  "🕓": {
    "description": "clock face four oclock",
    "names": [
      "clock4"
    ],
    "tags": []
  },
  "🕟": {
    "description": "clock face four-thirty",
    "names": [
      "clock430"
    ],
    "tags": []
  },
  "🕔": {
    "description": "clock face five oclock",
    "names": [
      "clock5"
    ],
    "tags": []
  },
  "🕠": {
    "description": "clock face five-thirty",
    "names": [
      "clock530"
    ],
    "tags": []
  },
  "🕕": {
    "description": "clock face six oclock",
    "names": [
      "clock6"
    ],
    "tags": []
  },
  "🕖": {
    "description": "clock face seven oclock",
    "names": [
      "clock7"
    ],
    "tags": []
  },
  "🕗": {
    "description": "clock face eight oclock",
    "names": [
      "clock8"
    ],
    "tags": []
  },
  "🕘": {
    "description": "clock face nine oclock",
    "names": [
      "clock9"
    ],
    "tags": []
  },
  "🕙": {
    "description": "clock face ten oclock",
    "names": [
      "clock10"
    ],
    "tags": []
  },
  "🕚": {
    "description": "clock face eleven oclock",
    "names": [
      "clock11"
    ],
    "tags": []
  },
  "🕡": {
    "description": "clock face six-thirty",
    "names": [
      "clock630"
    ],
    "tags": []
  },
  "🕢": {
    "description": "clock face seven-thirty",
    "names": [
      "clock730"
    ],
    "tags": []
  },
  "🕣": {
    "description": "clock face eight-thirty",
    "names": [
      "clock830"
    ],
    "tags": []
  },
  "🕤": {
    "description": "clock face nine-thirty",
    "names": [
      "clock930"
    ],
    "tags": []
  },
  "🕥": {
    "description": "clock face ten-thirty",
    "names": [
      "clock1030"
    ],
    "tags": []
  },
  "🕦": {
    "description": "clock face eleven-thirty",
    "names": [
      "clock1130"
    ],
    "tags": []
  },
  "✖️": {
    "description": "heavy multiplication x",
    "names": [
      "heavy_multiplication_x"
    ],
    "tags": []
  },
  "➕": {
    "description": "heavy plus sign",
    "names": [
      "heavy_plus_sign"
    ],
    "tags": []
  },
  "➖": {
    "description": "heavy minus sign",
    "names": [
      "heavy_minus_sign"
    ],
    "tags": []
  },
  "➗": {
    "description": "heavy division sign",
    "names": [
      "heavy_division_sign"
    ],
    "tags": []
  },
  "♠️": {
    "description": "black spade suit",
    "names": [
      "spades"
    ],
    "tags": []
  },
  "♥️": {
    "description": "black heart suit",
    "names": [
      "hearts"
    ],
    "tags": []
  },
  "♣️": {
    "description": "black club suit",
    "names": [
      "clubs"
    ],
    "tags": []
  },
  "♦️": {
    "description": "black diamond suit",
    "names": [
      "diamonds"
    ],
    "tags": []
  },
  "💮": {
    "description": "white flower",
    "names": [
      "white_flower"
    ],
    "tags": []
  },
  "💯": {
    "description": "hundred points symbol",
    "names": [
      "100"
    ],
    "tags": [
      "score",
      "perfect"
    ]
  },
  "✔️": {
    "description": "heavy check mark",
    "names": [
      "heavy_check_mark"
    ],
    "tags": []
  },
  "☑️": {
    "description": "ballot box with check",
    "names": [
      "ballot_box_with_check"
    ],
    "tags": []
  },
  "🔘": {
    "description": "radio button",
    "names": [
      "radio_button"
    ],
    "tags": []
  },
  "🔗": {
    "description": "link symbol",
    "names": [
      "link"
    ],
    "tags": []
  },
  "➰": {
    "description": "curly loop",
    "names": [
      "curly_loop"
    ],
    "tags": []
  },
  "〰️": {
    "description": "wavy dash",
    "names": [
      "wavy_dash"
    ],
    "tags": []
  },
  "〽️": {
    "description": "part alternation mark",
    "names": [
      "part_alternation_mark"
    ],
    "tags": []
  },
  "🔱": {
    "description": "trident emblem",
    "names": [
      "trident"
    ],
    "tags": []
  },
  "◼️": {
    "description": "black medium square",
    "names": [
      "black_medium_square"
    ],
    "tags": []
  },
  "◻️": {
    "description": "white medium square",
    "names": [
      "white_medium_square"
    ],
    "tags": []
  },
  "◾": {
    "description": "black medium small square",
    "names": [
      "black_medium_small_square"
    ],
    "tags": []
  },
  "◽": {
    "description": "white medium small square",
    "names": [
      "white_medium_small_square"
    ],
    "tags": []
  },
  "▪️": {
    "description": "black small square",
    "names": [
      "black_small_square"
    ],
    "tags": []
  },
  "▫️": {
    "description": "white small square",
    "names": [
      "white_small_square"
    ],
    "tags": []
  },
  "🔺": {
    "description": "up-pointing red triangle",
    "names": [
      "small_red_triangle"
    ],
    "tags": []
  },
  "🔲": {
    "description": "black square button",
    "names": [
      "black_square_button"
    ],
    "tags": []
  },
  "🔳": {
    "description": "white square button",
    "names": [
      "white_square_button"
    ],
    "tags": []
  },
  "⚫": {
    "description": "medium black circle",
    "names": [
      "black_circle"
    ],
    "tags": []
  },
  "⚪": {
    "description": "medium white circle",
    "names": [
      "white_circle"
    ],
    "tags": []
  },
  "🔴": {
    "description": "large red circle",
    "names": [
      "red_circle"
    ],
    "tags": []
  },
  "🔵": {
    "description": "large blue circle",
    "names": [
      "large_blue_circle"
    ],
    "tags": []
  },
  "🔻": {
    "description": "down-pointing red triangle",
    "names": [
      "small_red_triangle_down"
    ],
    "tags": []
  },
  "⬜": {
    "description": "white large square",
    "names": [
      "white_large_square"
    ],
    "tags": []
  },
  "⬛": {
    "description": "black large square",
    "names": [
      "black_large_square"
    ],
    "tags": []
  },
  "🔶": {
    "description": "large orange diamond",
    "names": [
      "large_orange_diamond"
    ],
    "tags": []
  },
  "🔷": {
    "description": "large blue diamond",
    "names": [
      "large_blue_diamond"
    ],
    "tags": []
  },
  "🔸": {
    "description": "small orange diamond",
    "names": [
      "small_orange_diamond"
    ],
    "tags": []
  },
  "🔹": {
    "description": "small blue diamond",
    "names": [
      "small_blue_diamond"
    ],
    "tags": []
  }
}

},{}],48:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module gemoji
 * @fileoverview GitHub emoji: gemoji.
 */

'use strict';

/* eslint-env commonjs */

/*
 * Data.
 */

var data = require('./data/gemoji.json');

/*
 * Dictionaries.
 */

var named = {};

var gemoji = {
    'unicode': data,
    'name': named
};

/**
 * Transform an emoji.
 *
 * @param {string} character - Unicode emoji to extend.
 */
function enhanceEmoji(character) {
    var information = data[character];
    var names = information.names;
    var index = 0; // first must be skipped.
    var length = names.length;

    /*
     * Add the main `name`.
     */

    information.name = names[0];

    /*
     * Add the emoji to the object too.
     */

    information.emoji = character;

    /*
     * Add the main `name` to `named`.
     */

    named[names[0]] = information;

    /*
     * If the emoji is known by other names,
     * add those to the map too.
     */

    while (++index < length) {
        named[names[index]] = information;
    }
}

/*
 * Transform all emoji.
 */

var emoji;

for (emoji in data) {
    enhanceEmoji(emoji);
}

/*
 * Expose.
 */

module.exports = gemoji;

},{"./data/gemoji.json":47}],49:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module retext:latin
 * @fileoverview retext parser for Latin-script natural
 *   languages.
 */

'use strict';

/* eslint-env commonjs */

/* Dependencies. */
var unherit = require('unherit');
var Latin = require('parse-latin');

/**
 * Attacher.
 *
 * @param {unified} processor - Unified processor.
 */
function parse(processor) {
    processor.Parser = unherit(Latin);
}

/* Expose. */
parse.Parser = Latin;
module.exports = parse;

},{"parse-latin":19,"unherit":53}],50:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module retext:stringify
 * @fileoverview NLCST to text compiler.
 */

'use strict';

/* eslint-env commonjs */

/* Dependencies. */
var toString = require('nlcst-to-string');

/**
 * Attacher.
 *
 * @param {unified} processor - Unified processor.
 * @param {Object?} [config={}] - Configuration.
 */
function stringify(processor) {
    /**
     * Construct a new compiler.
     */
    function Compiler() {}

    /**
     * Compile the bound file.
     *
     * @param {Node} tree - NLCST node.
     * @return {string} - text.
     */
    function compile(tree) {
        return toString(tree);
    }

    /* Expose methods. */
    Compiler.prototype.compile = compile;

    /* Expose parser. */
    processor.Compiler = Compiler;
}

/* Expose plugin. */
module.exports = stringify;

},{"nlcst-to-string":17}],51:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module retext
 * @fileoverview Natural language processor powered by
 *   plugins.
 */

'use strict';

/* Dependencies. */
var unified = require('unified');
var latin = require('retext-latin');
var stringify = require('retext-stringify');

/* Expose. */
module.exports = unified()
  .use(latin)
  .use(stringify)
  .abstract();

},{"retext-latin":49,"retext-stringify":50,"unified":54}],52:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module trough
 * @fileoverview Middleware.  Inspired by `segmentio/ware`,
 *   but able to change the values from transformer to
 *   transformer.
 */

'use strict';

/* Expose. */
module.exports = trough;

/* Methods. */
var slice = [].slice;

/**
 * Create new middleware.
 *
 * @return {Object} - Middlewre.
 */
function trough() {
  var fns = [];
  var middleware = {};

  middleware.run = run;
  middleware.use = use;

  return middleware;

  /**
   * Run `fns`.  Last argument must be
   * a completion handler.
   *
   * @param {...*} input - Parameters
   */
  function run() {
    var index = -1;
    var input = slice.call(arguments, 0, -1);
    var done = arguments[arguments.length - 1];

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done);
    }

    next.apply(null, [null].concat(input));

    return;

    /**
     * Run the next `fn`, if any.
     *
     * @param {Error?} err - Failure.
     * @param {...*} values - Other input.
     */
    function next(err) {
      var fn = fns[++index];
      var params = slice.call(arguments, 0);
      var values = params.slice(1);
      var length = input.length;
      var pos = -1;

      if (err) {
        done(err);
        return;
      }

      /* Copy non-nully input into values. */
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos];
        }
      }

      input = values;

      /* Next or done. */
      if (fn) {
        wrap(fn, next).apply(null, input);
      } else {
        done.apply(null, [null].concat(input));
      }
    }
  }

  /**
   * Add `fn` to the list.
   *
   * @param {Function} fn - Anything `wrap` accepts.
   */
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn);
    }

    fns.push(fn);

    return middleware;
  }
}

/**
 * Wrap `fn`.  Can be sync or async; return a promise,
 * receive a completion handler, return new values and
 * errors.
 *
 * @param {Function} fn - Thing to wrap.
 * @param {Function} next - Completion handler.
 * @return {Function} - Wrapped `fn`.
 */
function wrap(fn, next) {
  var invoked;

  return wrapped;

  function wrapped() {
    var params = slice.call(arguments, 0);
    var callback = fn.length > params.length;
    var result;

    if (callback) {
      params.push(done);
    }

    try {
      result = fn.apply(null, params);
    } catch (err) {
      /* Well, this is quite the pickle.  `fn` received
       * a callback and invoked it (thus continuing the
       * pipeline), but later also threw an error.
       * We’re not about to restart the pipeline again,
       * so the only thing left to do is to throw the
       * thing instea. */
      if (callback && invoked) {
        throw err;
      }

      return done(err);
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }

  /**
   * Invoke `next`, only once.
   *
   * @param {Error?} err - Optional error.
   */
  function done() {
    if (!invoked) {
      invoked = true;

      next.apply(null, arguments);
    }
  }

  /**
   * Invoke `done` with one value.
   * Tracks if an error is passed, too.
   *
   * @param {*} value - Optional value.
   */
  function then(value) {
    done(null, value);
  }
}

},{}],53:[function(require,module,exports){
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module unherit
 * @fileoverview Create a custom constructor which can be modified
 *   without affecting the original class.
 */

'use strict';

/* Dependencies. */
var xtend = require('xtend');
var inherits = require('inherits');

/* Expose. */
module.exports = unherit;

/**
 * Create a custom constructor which can be modified
 * without affecting the original class.
 *
 * @param {Function} Super - Super-class.
 * @return {Function} - Constructor acting like `Super`,
 *   which can be modified without affecting the original
 *   class.
 */
function unherit(Super) {
  var result;
  var key;
  var value;

  inherits(Of, Super);
  inherits(From, Of);

  /* Clone values. */
  result = Of.prototype;

  for (key in result) {
    value = result[key];

    if (value && typeof value === 'object') {
      result[key] = 'concat' in value ? value.concat() : xtend(value);
    }
  }

  return Of;

  /**
   * Constructor accepting a single argument,
   * which itself is an `arguments` object.
   */
  function From(parameters) {
    return Super.apply(this, parameters);
  }

  /**
   * Constructor accepting variadic arguments.
   */
  function Of() {
    if (!(this instanceof Of)) {
      return new From(arguments);
    }

    return Super.apply(this, arguments);
  }
}

},{"inherits":10,"xtend":62}],54:[function(require,module,exports){
(function (global){
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module unified
 * @fileoverview Pluggable text processing interface.
 */

'use strict';

/* Dependencies. */
var events = require('events');
var has = require('has');
var once = require('once');
var extend = require('extend');
var bail = require('bail');
var vfile = require('vfile');
var trough = require('trough');
var buffer = require('is-buffer');
var string = require('x-is-string');

/* Expose an abstract processor. */
module.exports = unified().abstract();

/* Methods. */
var slice = [].slice;

/* Process pipeline. */
var pipeline = trough()
  .use(function (p, ctx) {
    ctx.tree = p.parse(ctx.file, ctx.options);
  })
  .use(function (p, ctx, next) {
    p.run(ctx.tree, ctx.file, function (err, tree, file) {
      if (err) {
        next(err);
      } else {
        ctx.tree = tree;
        ctx.file = file;
        next();
      }
    });
  })
  .use(function (p, ctx) {
    ctx.file.contents = p.stringify(ctx.tree, ctx.file, ctx.options);
  });

/**
 * Function to create the first processor.
 *
 * @return {Function} - First processor.
 */
function unified() {
  var attachers = [];
  var transformers = trough();
  var namespace = {};
  var chunks = [];
  var emitter = new events.EventEmitter();
  var ended = false;
  var concrete = true;
  var settings;
  var key;

  /* Mix in methods. */
  for (key in emitter) {
    processor[key] = emitter[key];
  }

  /* Throw as early as possible.
   * As events are triggered synchroneously, the stack
   * is preserved. */
  processor.on('pipe', function () {
    assertConcrete();
  });

  /* Data management. */
  processor.data = data;

  /* Lock. */
  processor.abstract = abstract;

  /* Plug-ins. */
  processor.attachers = attachers;
  processor.use = use;

  /* Streaming. */
  processor.writable = true;
  processor.readable = true;
  processor.write = write;
  processor.end = end;
  processor.pipe = pipe;

  /* API. */
  processor.parse = parse;
  processor.stringify = stringify;
  processor.run = run;
  processor.process = process;

  /* Expose. */
  return processor;

  /**
   * Create a new processor based on the processor
   * in the current scope.
   *
   * @return {Processor} - New concrete processor based
   *   on the descendant processor.
   */
  function processor() {
    var destination = unified();
    var length = attachers.length;
    var index = -1;

    while (++index < length) {
      destination.use.apply(null, attachers[index]);
    }

    destination.data(extend(true, {}, namespace));

    return destination;
  }

  /* Helpers. */

  /**
   * Assert a parser is available.
   *
   * @param {string} name - Name of callee.
   */
  function assertParser(name) {
    if (!isParser(processor.Parser)) {
      throw new Error('Cannot `' + name + '` without `Parser`');
    }
  }

  /**
   * Assert a compiler is available.
   *
   * @param {string} name - Name of callee.
   */
  function assertCompiler(name) {
    if (!isCompiler(processor.Compiler)) {
      throw new Error('Cannot `' + name + '` without `Compiler`');
    }
  }

  /**
   * Assert the processor is concrete.
   *
   * @param {string} name - Name of callee.
   */
  function assertConcrete(name) {
    if (!concrete) {
      throw new Error(
        'Cannot ' +
        (name ? 'invoke `' + name + '` on' : 'pipe into') +
        ' abstract processor.\n' +
        'To make the processor concrete, invoke it: ' +
        'use `processor()` instead of `processor`.'
      );
    }
  }

  /**
   * Assert `node` is a Unist node.
   *
   * @param {*} node - Value to check.
   */
  function assertNode(node) {
    if (!isNode(node)) {
      throw new Error('Expected node, got `' + node + '`');
    }
  }

  /**
   * Assert, if no `done` is given, that `complete` is
   * `true`.
   *
   * @param {string} name - Name of callee.
   * @param {boolean} complete - Whether an async process
   *   is complete.
   * @param {Function?} done - Optional handler of async
   *   results.
   */
  function assertDone(name, complete, done) {
    if (!complete && !done) {
      throw new Error(
        'Expected `done` to be given to `' + name + '` ' +
        'as async plug-ins are used'
      );
    }
  }

  /**
   * Abstract: used to signal an abstract processor which
   * should made concrete before using.
   *
   * For example, take unified itself.  It’s abstract.
   * Plug-ins should not be added to it.  Rather, it should
   * be made concrete (by invoking it) before modifying it.
   *
   * In essence, always invoke this when exporting a
   * processor.
   *
   * @return {Processor} - The operated on processor.
   */
  function abstract() {
    concrete = false;

    return processor;
  }

  /**
   * Data management.
   *
   * Getter / setter for processor-specific informtion.
   *
   * @param {string} key - Key to get or set.
   * @param {*} value - Value to set.
   * @return {*} - Either the operator on processor in
   *   setter mode; or the value stored as `key` in
   *   getter mode.
   */
  function data(key, value) {
    assertConcrete('data');

    if (string(key)) {
      /* Set `key`. */
      if (arguments.length === 2) {
        namespace[key] = value;

        return processor;
      }

      /* Get `key`. */
      return (has(namespace, key) && namespace[key]) || null;
    }

    /* Get space. */
    if (!key) {
      return namespace;
    }

    /* Set space. */
    namespace = key;

    return processor;
  }

  /**
   * Plug-in management.
   *
   * Pass it:
   * *   an attacher and options,
   * *   a list of attachers and options for all of them;
   * *   a tuple of one attacher and options.
   * *   a matrix: list containing any of the above and
   *     matrices.
   * *   a processor: another processor to use all its
   *     plugins (except parser if there’s already one).
   *
   * @param {...*} value - See description.
   * @return {Processor} - The operated on processor.
   */
  function use(value) {
    var args = slice.call(arguments, 0);
    var params = args.slice(1);
    var parser;
    var index;
    var length;
    var transformer;
    var result;

    assertConcrete('use');

    /* Multiple attachers. */
    if ('length' in value && !isFunction(value)) {
      index = -1;
      length = value.length;

      if (!isFunction(value[0])) {
        /* Matrix of things. */
        while (++index < length) {
          use(value[index]);
        }
      } else if (isFunction(value[1])) {
        /* List of things. */
        while (++index < length) {
          use.apply(null, [value[index]].concat(params));
        }
      } else {
        /* Arguments. */
        use.apply(null, value);
      }

      return processor;
    }

    /* Store attacher. */
    attachers.push(args);

    /* Use a processor (except its parser if there’s already one.
     * Note that the processor is stored on `attachers`, making
     * it possibly mutating in the future, but also ensuring
     * the parser isn’t overwritten in the future either. */
    if (isProcessor(value)) {
      parser = processor.Parser;
      result = use(value.attachers);

      if (parser) {
        processor.Parser = parser;
      }

      return result;
    }

    /* Single attacher. */
    transformer = value.apply(null, [processor].concat(params));

    if (isFunction(transformer)) {
      transformers.use(transformer);
    }

    return processor;
  }

  /**
   * Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the
   * processor.
   *
   * @param {VFile?} [file] - File to process.
   * @param {Object?} [options] - Configuration.
   * @return {Node} - Unist node.
   */
  function parse(file, options) {
    assertConcrete('parse');
    assertParser('parse');

    return new processor.Parser(vfile(file), options, processor).parse();
  }

  /**
   * Run transforms on a Unist node representation of a file
   * (in string or VFile representation).
   *
   * @param {Node} node - Unist node.
   * @param {(string|VFile)?} [file] - File representation.
   * @param {Function?} [done] - Callback.
   * @return {Node} - The given or resulting Unist node.
   */
  function run(node, file, done) {
    var complete = false;
    var result;

    assertConcrete('run');
    assertNode(node);

    result = node;

    if (!done && isFunction(file)) {
      done = file;
      file = null;
    }

    transformers.run(node, vfile(file), function (err, tree, file) {
      complete = true;
      result = tree || node;

      (done || bail)(err, tree, file);
    });

    assertDone('run', complete, done);

    return result;
  }

  /**
   * Stringify a Unist node representation of a file
   * (in string or VFile representation) into a string
   * using the `Compiler` on the processor.
   *
   * @param {Node} node - Unist node.
   * @param {(string|VFile)?} [file] - File representation.
   * @param {Object?} [options] - Configuration.
   * @return {string} - String representation.
   */
  function stringify(node, file, options) {
    assertConcrete('stringify');
    assertCompiler('stringify');
    assertNode(node);

    if (
      !options &&
      !string(file) &&
      !buffer(file) &&
      !(typeof file === 'object' && 'messages' in file)
    ) {
      options = file;
      file = null;
    }

    return new processor.Compiler(vfile(file), options, processor).compile(node);
  }

  /**
   * Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the processor,
   * then run transforms on that node, and compile the
   * resulting node using the `Compiler` on the processor,
   * and store that result on the VFile.
   *
   * @param {(string|VFile)?} file - File representation.
   * @param {Object?} [options] - Configuration.
   * @param {Function?} [done] - Callback.
   * @return {VFile} - The given or resulting VFile.
   */
  function process(file, options, done) {
    var complete = false;

    assertConcrete('process');
    assertParser('process');
    assertCompiler('process');

    if (!done && isFunction(options)) {
      done = options;
      options = null;
    }

    file = vfile(file);

    pipeline.run(processor, {
      file: file,
      options: options || {}
    }, function (err) {
      complete = true;

      if (done) {
        done(err, file);
      } else {
        bail(err);
      }
    });

    assertDone('process', complete, done);

    return file;
  }

  /* Streams. */

  /**
   * Write a chunk into memory.
   *
   * @param {(Buffer|string)?} chunk - Value to write.
   * @param {string?} [encoding] - Encoding.
   * @param {Function?} [callback] - Callback.
   * @return {boolean} - Whether the write was succesful.
   */
  function write(chunk, encoding, callback) {
    assertConcrete('write');

    if (isFunction(encoding)) {
      callback = encoding;
      encoding = null;
    }

    if (ended) {
      throw new Error('Did not expect `write` after `end`');
    }

    chunks.push((chunk || '').toString(encoding || 'utf8'));

    if (callback) {
      callback();
    }

    /* Signal succesful write. */
    return true;
  }

  /**
   * End the writing.  Passes all arguments to a final
   * `write`.  Starts the process, which will trigger
   * `error`, with a fatal error, if any; `data`, with
   * the generated document in `string` form, if
   * succesful.  If messages are triggered during the
   * process, those are triggerd as `warning`s.
   *
   * @return {boolean} - Whether the last write was
   *   succesful.
   */
  function end() {
    assertConcrete('end');
    assertParser('end');
    assertCompiler('end');

    write.apply(null, arguments);

    ended = true;

    process(chunks.join(''), settings, function (err, file) {
      var messages = file.messages;
      var length = messages.length;
      var index = -1;

      chunks = settings = null;

      /* Trigger messages as warnings, except for fatal error. */
      while (++index < length) {
        if (messages[index] !== err) {
          processor.emit('warning', messages[index]);
        }
      }

      if (err) {
        /* Don’t enter an infinite error throwing loop. */
        global.setTimeout(function () {
          processor.emit('error', err);
        }, 4);
      } else {
        processor.emit('data', file.contents);
        processor.emit('end');
      }
    });

    return true;
  }

  /**
   * Pipe the processor into a writable stream.
   *
   * Basically `Stream#pipe`, but inlined and
   * simplified to keep the bundled size down.
   *
   * @see https://github.com/nodejs/node/blob/master/lib/stream.js#L26
   *
   * @param {Stream} dest - Writable stream.
   * @param {Object?} [options] - Processing
   *   configuration.
   * @return {Stream} - The destination stream.
   */
  function pipe(dest, options) {
    var onend = once(onended);

    assertConcrete('pipe');

    settings = options || {};

    processor.on('data', ondata);
    processor.on('error', onerror);
    processor.on('end', cleanup);
    processor.on('close', cleanup);

    /* If the 'end' option is not supplied, dest.end() will be
     * called when the 'end' or 'close' events are received.
     * Only dest.end() once. */
    if (!dest._isStdio && settings.end !== false) {
      processor.on('end', onend);
    }

    dest.on('error', onerror);
    dest.on('close', cleanup);

    dest.emit('pipe', processor);

    return dest;

    /** End destination. */
    function onended() {
      if (dest.end) {
        dest.end();
      }
    }

    /**
     * Handle data.
     *
     * @param {*} chunk - Data to pass through.
     */
    function ondata(chunk) {
      if (dest.writable) {
        dest.write(chunk);
      }
    }

    /**
     * Clean listeners.
     */
    function cleanup() {
      processor.removeListener('data', ondata);
      processor.removeListener('end', onend);
      processor.removeListener('error', onerror);
      processor.removeListener('end', cleanup);
      processor.removeListener('close', cleanup);

      dest.removeListener('error', onerror);
      dest.removeListener('close', cleanup);
    }

    /**
     * Close dangling pipes and handle unheard errors.
     *
     * @param {Error} err - Exception.
     */
    function onerror(err) {
      var handlers = processor._events.error;

      cleanup();

      /* Cannot use `listenerCount` in node <= 0.12. */
      if (!handlers || !handlers.length || handlers === onerror) {
        throw err; /* Unhandled stream error in pipe. */
      }
    }
  }
}

/**
 * Check if `node` is a Unist node.
 *
 * @param {*} node - Value.
 * @return {boolean} - Whether `node` is a Unist node.
 */
function isNode(node) {
  return node && string(node.type) && node.type.length !== 0;
}

/**
 * Check if `fn` is a function.
 *
 * @param {*} fn - Value.
 * @return {boolean} - Whether `fn` is a function.
 */
function isFunction(fn) {
  return typeof fn === 'function';
}

/**
 * Check if `compiler` is a Compiler.
 *
 * @param {*} compiler - Value.
 * @return {boolean} - Whether `compiler` is a Compiler.
 */
function isCompiler(compiler) {
  return isFunction(compiler) && compiler.prototype && isFunction(compiler.prototype.compile);
}

/**
 * Check if `parser` is a Parser.
 *
 * @param {*} parser - Value.
 * @return {boolean} - Whether `parser` is a Parser.
 */
function isParser(parser) {
  return isFunction(parser) && parser.prototype && isFunction(parser.prototype.parse);
}

/**
 * Check if `processor` is a unified processor.
 *
 * @param {*} processor - Value.
 * @return {boolean} - Whether `processor` is a processor.
 */
function isProcessor(processor) {
  return isFunction(processor) && isFunction(processor.use) && isFunction(processor.process);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"bail":3,"events":5,"extend":6,"has":9,"is-buffer":11,"once":18,"trough":52,"vfile":59,"x-is-string":61}],55:[function(require,module,exports){
'use strict';

var iterate = require('array-iterate');

module.exports = modifierFactory;

/* Turn `callback` into a child-modifier accepting a parent.
 * See `array-iterate` for more info. */
function modifierFactory(callback) {
  return iteratorFactory(wrapperFactory(callback));
}

/* Turn `callback` into a `iterator' accepting a parent. */
function iteratorFactory(callback) {
  return iterator;

  function iterator(parent) {
    var children = parent && parent.children;

    if (!children) {
      throw new Error('Missing children in `parent` for `modifier`');
    }

    return iterate(children, callback, parent);
  }
}

/* Pass the context as the third argument to `callback`. */
function wrapperFactory(callback) {
  return wrapper;

  function wrapper(value, index) {
    return callback(value, index, this);
  }
}

},{"array-iterate":2}],56:[function(require,module,exports){
'use strict';

var has = require('has');

module.exports = stringify;

function stringify(value) {
  /* Nothing. */
  if (!value || typeof value !== 'object') {
    return null;
  }

  /* Node. */
  if (has(value, 'position') || has(value, 'type')) {
    return location(value.position);
  }

  /* Location. */
  if (has(value, 'start') || has(value, 'end')) {
    return location(value);
  }

  /* Position. */
  if (has(value, 'line') || has(value, 'column')) {
    return position(value);
  }

  /* ? */
  return null;
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {};
  }

  return index(pos.line) + ':' + index(pos.column);
}

function location(loc) {
  if (!loc || typeof loc !== 'object') {
    loc = {};
  }

  return position(loc.start) + '-' + position(loc.end);
}

function index(value) {
  return value && typeof value === 'number' ? value : 1;
}

},{"has":9}],57:[function(require,module,exports){
'use strict';

/* Expose. */
module.exports = visitorFactory;

/* Turns `callback` into a child-visitor accepting a parent. */
function visitorFactory(callback) {
  return visitor;

  /* Visit `parent`, invoking `callback` for each child. */
  function visitor(parent) {
    var index = -1;
    var children = parent && parent.children;

    if (!children) {
      throw new Error('Missing children in `parent` for `visitor`');
    }

    while (++index in children) {
      callback(children[index], index, parent);
    }
  }
}

},{}],58:[function(require,module,exports){
'use strict';

/* Expose. */
module.exports = visit;

/* Visit. */
function visit(tree, type, visitor, reverse) {
  if (typeof type === 'function') {
    reverse = visitor;
    visitor = type;
    type = null;
  }

  one(tree);

  return;

  /* Visit a single node. */
  function one(node, index, parent) {
    var result;

    index = index || (parent ? 0 : null);

    if (!type || node.type === type) {
      result = visitor(node, index, parent || null);
    }

    if (node.children && result !== false) {
      return all(node.children, node);
    }

    return result;
  }

  /* Visit children in `parent`. */
  function all(children, parent) {
    var step = reverse ? -1 : 1;
    var max = children.length;
    var min = -1;
    var index = (reverse ? max : min) + step;
    var child;

    while (index > min && index < max) {
      child = children[index];

      if (child && one(child, index, parent) === false) {
        return false;
      }

      index += step;
    }

    return true;
  }
}

},{}],59:[function(require,module,exports){
(function (process){
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module vfile
 * @fileoverview Virtual file format to attach additional
 *   information related to processed input.  Similar to
 *   `wearefractal/vinyl`.
 */

'use strict';

/* Dependencies. */
var path = require('path');
var has = require('has');
var replace = require('replace-ext');
var stringify = require('unist-util-stringify-position');
var buffer = require('is-buffer');
var string = require('x-is-string');

/* Expose. */
module.exports = VFile;

/* Methods. */
var proto = VFile.prototype;

proto.toString = toString;
proto.message = message;
proto.fail = fail;

/* Slight backwards compatibility.  Remove in the future. */
proto.warn = message;

/* Order of setting (least specific to most). */
var order = [
  'history',
  'path',
  'basename',
  'stem',
  'extname',
  'dirname'
];

/**
 * Construct a new file.
 *
 * @constructor
 * @param {Object|VFile|string} [options] - File, contents, or config.
 */
function VFile(options) {
  var prop;
  var index;
  var length;

  if (!options) {
    options = {};
  } else if (string(options) || buffer(options)) {
    options = {contents: options};
  } else if ('message' in options && 'messages' in options) {
    return options;
  }

  if (!(this instanceof VFile)) {
    return new VFile(options);
  }

  this.data = {};
  this.messages = [];
  this.history = [];
  this.cwd = process.cwd();

  /* Set path related properties in the correct order. */
  index = -1;
  length = order.length;

  while (++index < length) {
    prop = order[index];

    if (has(options, prop)) {
      this[prop] = options[prop];
    }
  }

  /* Set non-path related properties. */
  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop];
    }
  }
}

/**
 * Access complete path (`~/index.min.js`).
 */
Object.defineProperty(proto, 'path', {
  get: function () {
    return this.history[this.history.length - 1];
  },
  set: function (path) {
    assertNonEmpty(path, 'path');

    if (path !== this.path) {
      this.history.push(path);
    }
  }
});

/**
 * Access parent path (`~`).
 */
Object.defineProperty(proto, 'dirname', {
  get: function () {
    return string(this.path) ? path.dirname(this.path) : undefined;
  },
  set: function (dirname) {
    assertPath(this.path, 'dirname');
    this.path = path.join(dirname || '', this.basename);
  }
});

/**
 * Access basename (`index.min.js`).
 */
Object.defineProperty(proto, 'basename', {
  get: function () {
    return string(this.path) ? path.basename(this.path) : undefined;
  },
  set: function (basename) {
    assertNonEmpty(basename, 'basename');
    assertPart(basename, 'basename');
    this.path = path.join(this.dirname || '', basename);
  }
});

/**
 * Access extname (`.js`).
 */
Object.defineProperty(proto, 'extname', {
  get: function () {
    return string(this.path) ? path.extname(this.path) : undefined;
  },
  set: function (extname) {
    var ext = extname || '';

    assertPart(ext, 'extname');
    assertPath(this.path, 'extname');

    if (ext) {
      if (ext.charAt(0) !== '.') {
        throw new Error('`extname` must start with `.`');
      }

      if (ext.indexOf('.', 1) !== -1) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }

    this.path = replace(this.path, ext);
  }
});

/**
 * Access stem (`index.min`).
 */
Object.defineProperty(proto, 'stem', {
  get: function () {
    return string(this.path) ? path.basename(this.path, this.extname) : undefined;
  },
  set: function (stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
  }
});

/**
 * Get the value of the file.
 *
 * @return {string} - Contents.
 */
function toString(encoding) {
  var value = this.contents || '';
  return buffer(value) ? value.toString(encoding) : String(value);
}

/**
 * Create a message with `reason` at `position`.
 * When an error is passed in as `reason`, copies the
 * stack.  This does not add a message to `messages`.
 *
 * @param {string|Error} reason - Reason for message.
 * @param {Node|Location|Position} [position] - Place of message.
 * @param {string} [ruleId] - Category of message.
 * @return {VMessage} - Message.
 */
function message(reason, position, ruleId) {
  var filePath = this.path;
  var range = stringify(position) || '1:1';
  var location;
  var err;

  location = {
    start: {line: null, column: null},
    end: {line: null, column: null}
  };

  if (position && position.position) {
    position = position.position;
  }

  if (position) {
    /* Location. */
    if (position.start) {
      location = position;
      position = position.start;
    } else {
      /* Position. */
      location.start = position;
      location.end.line = null;
      location.end.column = null;
    }
  }

  err = new VMessage(reason.message || reason);

  err.name = (filePath ? filePath + ':' : '') + range;
  err.file = filePath || '';
  err.reason = reason.message || reason;
  err.line = position ? position.line : null;
  err.column = position ? position.column : null;
  err.location = location;
  err.ruleId = ruleId || null;
  err.source = null;
  err.fatal = false;

  if (reason.stack) {
    err.stack = reason.stack;
  }

  this.messages.push(err);

  return err;
}

/**
 * Fail. Creates a vmessage, associates it with the file,
 * and throws it.
 *
 * @throws {VMessage} - Fatal exception.
 */
function fail() {
  var message = this.message.apply(this, arguments);

  message.fatal = true;

  throw message;
}

/* Inherit from `Error#`. */
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype;
VMessage.prototype = new VMessagePrototype();

/* Message properties. */
proto = VMessage.prototype;

proto.file = proto.name = proto.reason = proto.message = proto.stack = '';
proto.fatal = proto.column = proto.line = null;

/**
 * Construct a new file message.
 *
 * Note: We cannot invoke `Error` on the created context,
 * as that adds readonly `line` and `column` attributes on
 * Safari 9, thus throwing and failing the data.
 *
 * @constructor
 * @param {string} reason - Reason for messaging.
 */
function VMessage(reason) {
  this.message = reason;
}

/* Assert that `part` is not a path (i.e., does
 * not contain `path.sep`). */
function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error(
      '`' + name + '` cannot be a path: did not expect `' + path.sep + '`'
    );
  }
}

/* Assert that `part` is not empty. */
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}

/* Assert `path` exists. */
function assertPath(path, name) {
  if (!path) {
    throw new Error(
      'Setting `' + name + '` requires `path` to be set too'
    );
  }
}

}).call(this,require('_process'))
},{"_process":42,"has":9,"is-buffer":11,"path":41,"replace-ext":43,"unist-util-stringify-position":56,"x-is-string":61}],60:[function(require,module,exports){
// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}

},{}],61:[function(require,module,exports){
var toString = Object.prototype.toString

module.exports = isString

function isString(obj) {
    return toString.call(obj) === "[object String]"
}

},{}],62:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}]},{},[1]);
