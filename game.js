/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Component = /** @class */function () {
    function Component() {}
    Object.defineProperty(Component.prototype, "className", {
        get: function get() {
            return this.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    return Component;
}();
exports.default = Component;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(15);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lowerFirstLetter = function lowerFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
};
var System = /** @class */function () {
    function System(aspect) {
        this.aspect = aspect;
    }
    System.prototype.insert = function (entity) {
        this.entities.push(entity);
    };
    System.prototype.remove = function (entity) {
        var _this = this;
        return this.entities.some(function (item, index) {
            if (item === entity) {
                _this.entities.splice(index, 1);
                return true;
            }
        });
    };
    System.prototype.getEntities = function () {
        return this.entities;
    };
    System.prototype.getAspect = function () {
        return this.aspect;
    };
    System.prototype.bindWorld = function (world) {
        var _this = this;
        var cm = world.getComponentManager();
        var componentMappers = cm.getMappers();
        (0, _keys2.default)(componentMappers).forEach(function (key) {
            _this[lowerFirstLetter(key) + "Mapper"] = componentMappers[key];
        });
        var systems = world.getSystems();
        systems.forEach(function (system) {
            system[lowerFirstLetter(_this.constructor.name)] = _this;
            _this[lowerFirstLetter(system.constructor.name)] = system;
        });
        this.entityManager = world.getEntityManager();
        this.tagManager = world.getTagManager();
        this.world = world;
    };
    System.prototype.onBegin = function () {};
    System.prototype.onEnd = function () {};
    return System;
}();
exports.default = System;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Aspect = /** @class */function () {
    function Aspect() {
        var components = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            components[_i] = arguments[_i];
        }
        this.allTypes = [];
        this.allTypes = this.allTypes.concat(components);
    }
    Aspect.all = function () {
        var components = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            components[_i] = arguments[_i];
        }
        return new (Aspect.bind.apply(Aspect, [void 0].concat(components)))();
    };
    Aspect.prototype.getAllTypes = function () {
        return this.allTypes;
    };
    return Aspect;
}();
exports.default = Aspect;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(2);
var ctx = __webpack_require__(18);
var hide = __webpack_require__(44);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(3);

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();

var Position = /** @class */function (_super) {
    __extends(Position, _super);
    function Position(x, y) {
        var _this = _super.call(this) || this;
        _this.x = 0;
        _this.y = 0;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    return Position;
}(_Component2.default);
exports.default = Position;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(46);
var enumBugKeys = __webpack_require__(29);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(25);
var defined = __webpack_require__(26);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spawner = exports.WallSensor = exports.Physical = exports.Bound = exports.Position = exports.Paint = undefined;

var _Paint = __webpack_require__(32);

var _Paint2 = _interopRequireDefault(_Paint);

var _Position = __webpack_require__(12);

var _Position2 = _interopRequireDefault(_Position);

var _Bound = __webpack_require__(17);

var _Bound2 = _interopRequireDefault(_Bound);

var _Physical = __webpack_require__(33);

var _Physical2 = _interopRequireDefault(_Physical);

var _WallSensor = __webpack_require__(34);

var _WallSensor2 = _interopRequireDefault(_WallSensor);

var _Spawner = __webpack_require__(35);

var _Spawner2 = _interopRequireDefault(_Spawner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Paint = _Paint2.default;
exports.Position = _Position2.default;
exports.Bound = _Bound2.default;
exports.Physical = _Physical2.default;
exports.WallSensor = _WallSensor2.default;
exports.Spawner = _Spawner2.default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(3);

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();

var Bound = /** @class */function (_super) {
    __extends(Bound, _super);
    function Bound() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        if (args.length === 2) {
            _this.x1 = 0;
            _this.y1 = 0;
            _this.x2 = args[0];
            _this.y2 = args[1];
        } else if (args.length === 4) {
            _this.x1 = args[0];
            _this.y1 = args[1];
            _this.x2 = args[2];
            _this.y2 = args[3];
        } else {
            throw new Error('Bound: init error');
        }
        return _this;
    }
    Bound.prototype.centerX = function () {
        return (this.x1 + this.x2) / 2;
    };
    Bound.prototype.centerY = function () {
        return (this.y1 + this.y2) / 2;
    };
    Bound.prototype.width = function () {
        return this.x2 - this.x1;
    };
    Bound.prototype.height = function () {
        return this.y2 - this.y1;
    };
    return Bound;
}(_Component2.default);
exports.default = Bound;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(43);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(20);
var toPrimitive = __webpack_require__(22);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(21)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(47);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(51)('keys');
var uid = __webpack_require__(52);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(3);

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();

var Paint = /** @class */function (_super) {
    __extends(Paint, _super);
    function Paint(src, imageRenderOptions) {
        var _this = _super.call(this) || this;
        _this.img = new Image();
        _this.img.src = src;
        _this.imageRenderOptions = imageRenderOptions;
        return _this;
    }
    return Paint;
}(_Component2.default);
exports.default = Paint;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(3);

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();

var Physical = /** @class */function (_super) {
    __extends(Physical, _super);
    function Physical(vx, vy) {
        if (vx === void 0) {
            vx = 0;
        }
        if (vy === void 0) {
            vy = 0;
        }
        var _this = _super.call(this) || this;
        _this.vx = 0;
        _this.vy = 0;
        _this.vx = vx;
        _this.vy = vy;
        return _this;
    }
    return Physical;
}(_Component2.default);
exports.default = Physical;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(3);

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();

var WallSensor = /** @class */function (_super) {
    __extends(WallSensor, _super);
    function WallSensor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WallSensor;
}(_Component2.default);
exports.default = WallSensor;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(3);

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();

var Spawner = /** @class */function (_super) {
    __extends(Spawner, _super);
    function Spawner(type, cooldown) {
        var _this = _super.call(this) || this;
        _this.originCooldown = cooldown;
        _this.type = type;
        _this.cooldown = 0;
        return _this;
    }
    return Spawner;
}(_Component2.default);
exports.default = Spawner;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(16);

exports.default = {
    createGod: function createGod(world) {
        return world.createEntity().add(new _index.Position(canvas.width / 2, canvas.height / 2)).add(new _index.Bound(100, 113.5)).add(new _index.Paint('imgs/god.png')).getEntity();
    },
    createItem: function createItem(world) {
        // const seed = Math.ceil(Math.random() * 20)
        var seed = 0;
        return world.createEntity().add(new _index.Position(canvas.width / 2, 20)).add(new _index.Bound(40, 40)).add(new _index.Physical(0, 5)).add(new _index.WallSensor()).add(new _index.Paint('imgs/artifacts.png', {
            sx: 10 + seed * 40,
            sy: 8,
            sw: 40,
            sh: 40
        })).getEntity();
    },
    createItemSpawner: function createItemSpawner(world) {
        return world.createEntity().add(new _index.Spawner('item', 60)).getEntity();
    }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(38);

var _index = __webpack_require__(39);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _index2.default();

/***/ }),
/* 38 */
/***/ (function(module, exports) {

/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {}

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
      /******/
}

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true

/******/ 		// Return the exports of the module
/******/ 		return module.exports
    /******/
}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ""

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0)
  /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      var _window2 = __webpack_require__(1)

      var _window = _interopRequireWildcard(_window2)

      function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key] } } newObj.default = obj; return newObj } }

      var global = GameGlobal

      function inject() {
        _window.addEventListener = _window.canvas.addEventListener = function (type, listener) {
          _window.document.addEventListener(type, listener)
        }
        _window.removeEventListener = _window.canvas.removeEventListener = function (type, listener) {
          _window.document.removeEventListener(type, listener)
        }

        var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
          platform = _wx$getSystemInfoSync.platform

        // 开发者工具无法重定义 window


        if (typeof __devtoolssubcontext === 'undefined' && platform === 'devtools') {
          for (var key in _window) {
            var descriptor = Object.getOwnPropertyDescriptor(global, key)

            if (!descriptor || descriptor.configurable === true) {
              Object.defineProperty(window, key, {
                value: _window[key]
              })
            }
          }

          for (var _key in _window.document) {
            var _descriptor = Object.getOwnPropertyDescriptor(global.document, _key)

            if (!_descriptor || _descriptor.configurable === true) {
              Object.defineProperty(global.document, _key, {
                value: _window.document[_key]
              })
            }
          }
          window.parent = window
        } else {
          for (var _key2 in _window) {
            global[_key2] = _window[_key2]
          }
          global.window = _window
          window = global
          window.top = window.parent = window
        }
      }

      if (!GameGlobal.__isAdapterInjected) {
        GameGlobal.__isAdapterInjected = true
        inject()
      }

      /***/
}),
/* 1 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })
      exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.canvas = exports.location = exports.localStorage = exports.HTMLElement = exports.FileReader = exports.Audio = exports.Image = exports.WebSocket = exports.XMLHttpRequest = exports.navigator = exports.document = undefined

      var _WindowProperties = __webpack_require__(2)

      Object.keys(_WindowProperties).forEach(function (key) {
        if (key === "default" || key === "__esModule") return
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _WindowProperties[key]
          }
        })
      })

      var _constructor = __webpack_require__(3)

      Object.keys(_constructor).forEach(function (key) {
        if (key === "default" || key === "__esModule") return
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _constructor[key]
          }
        })
      })

      var _Canvas = __webpack_require__(9)

      var _Canvas2 = _interopRequireDefault(_Canvas)

      var _document2 = __webpack_require__(10)

      var _document3 = _interopRequireDefault(_document2)

      var _navigator2 = __webpack_require__(17)

      var _navigator3 = _interopRequireDefault(_navigator2)

      var _XMLHttpRequest2 = __webpack_require__(18)

      var _XMLHttpRequest3 = _interopRequireDefault(_XMLHttpRequest2)

      var _WebSocket2 = __webpack_require__(19)

      var _WebSocket3 = _interopRequireDefault(_WebSocket2)

      var _Image2 = __webpack_require__(11)

      var _Image3 = _interopRequireDefault(_Image2)

      var _Audio2 = __webpack_require__(12)

      var _Audio3 = _interopRequireDefault(_Audio2)

      var _FileReader2 = __webpack_require__(20)

      var _FileReader3 = _interopRequireDefault(_FileReader2)

      var _HTMLElement2 = __webpack_require__(4)

      var _HTMLElement3 = _interopRequireDefault(_HTMLElement2)

      var _localStorage2 = __webpack_require__(21)

      var _localStorage3 = _interopRequireDefault(_localStorage2)

      var _location2 = __webpack_require__(22)

      var _location3 = _interopRequireDefault(_location2)

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

      exports.document = _document3.default
      exports.navigator = _navigator3.default
      exports.XMLHttpRequest = _XMLHttpRequest3.default
      exports.WebSocket = _WebSocket3.default
      exports.Image = _Image3.default
      exports.Audio = _Audio3.default
      exports.FileReader = _FileReader3.default
      exports.HTMLElement = _HTMLElement3.default
      exports.localStorage = _localStorage3.default
      exports.location = _location3.default


      // 暴露全局的 canvas
      var canvas = new _Canvas2.default()

      exports.canvas = canvas
      exports.setTimeout = setTimeout
      exports.setInterval = setInterval
      exports.clearTimeout = clearTimeout
      exports.clearInterval = clearInterval
      exports.requestAnimationFrame = requestAnimationFrame
      exports.cancelAnimationFrame = cancelAnimationFrame

      /***/
}),
/* 2 */
/***/ (function (module, exports) {

      "use strict"

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
        screenWidth = _wx$getSystemInfoSync.screenWidth,
        screenHeight = _wx$getSystemInfoSync.screenHeight,
        devicePixelRatio = _wx$getSystemInfoSync.devicePixelRatio

      var innerWidth = exports.innerWidth = screenWidth
      var innerHeight = exports.innerHeight = screenHeight
      exports.devicePixelRatio = devicePixelRatio
      var screen = exports.screen = {
        availWidth: innerWidth,
        availHeight: innerHeight
      }
      var performance = exports.performance = {
        now: function now() {
          return Date.now() / 1000
        }
      }
      var ontouchstart = exports.ontouchstart = null
      var ontouchmove = exports.ontouchmove = null
      var ontouchend = exports.ontouchend = null

      /***/
}),
/* 3 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })
      exports.HTMLCanvasElement = exports.HTMLImageElement = undefined

      var _HTMLElement3 = __webpack_require__(4)

      var _HTMLElement4 = _interopRequireDefault(_HTMLElement3)

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === "object" || typeof call === "function") ? call : self }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

      var HTMLImageElement = exports.HTMLImageElement = function (_HTMLElement) {
        _inherits(HTMLImageElement, _HTMLElement)

        function HTMLImageElement() {
          _classCallCheck(this, HTMLImageElement)

          return _possibleConstructorReturn(this, (HTMLImageElement.__proto__ || Object.getPrototypeOf(HTMLImageElement)).call(this, 'img'))
        }

        return HTMLImageElement
      }(_HTMLElement4.default)

      var HTMLCanvasElement = exports.HTMLCanvasElement = function (_HTMLElement2) {
        _inherits(HTMLCanvasElement, _HTMLElement2)

        function HTMLCanvasElement() {
          _classCallCheck(this, HTMLCanvasElement)

          return _possibleConstructorReturn(this, (HTMLCanvasElement.__proto__ || Object.getPrototypeOf(HTMLCanvasElement)).call(this, 'canvas'))
        }

        return HTMLCanvasElement
      }(_HTMLElement4.default)

      /***/
}),
/* 4 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }()

      var _Element2 = __webpack_require__(5)

      var _Element3 = _interopRequireDefault(_Element2)

      var _util = __webpack_require__(8)

      var _WindowProperties = __webpack_require__(2)

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === "object" || typeof call === "function") ? call : self }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

      var HTMLElement = function (_Element) {
        _inherits(HTMLElement, _Element)

        function HTMLElement() {
          var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''

          _classCallCheck(this, HTMLElement)

          var _this = _possibleConstructorReturn(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).call(this))

          _this.className = ''
          _this.childern = []
          _this.style = {
            width: _WindowProperties.innerWidth + 'px',
            height: _WindowProperties.innerHeight + 'px'
          }
          _this.insertBefore = _util.noop
          _this.innerHTML = ''

          _this.tagName = tagName.toUpperCase()
          return _this
        }

        _createClass(HTMLElement, [{
          key: 'setAttribute',
          value: function setAttribute(name, value) {
            this[name] = value
          }
        }, {
          key: 'getAttribute',
          value: function getAttribute(name) {
            return this[name]
          }
        }, {
          key: 'getBoundingClientRect',
          value: function getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: _WindowProperties.innerWidth,
              height: _WindowProperties.innerHeight
            }
          }
        }, {
          key: 'focus',
          value: function focus() { }
        }, {
          key: 'clientWidth',
          get: function get() {
            var ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length

            return Number.isNaN(ret) ? 0 : ret
          }
        }, {
          key: 'clientHeight',
          get: function get() {
            var ret = parseInt(this.style.fontSize, 10)

            return Number.isNaN(ret) ? 0 : ret
          }
        }])

        return HTMLElement
      }(_Element3.default)

      exports.default = HTMLElement

      /***/
}),
/* 5 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      var _Node2 = __webpack_require__(6)

      var _Node3 = _interopRequireDefault(_Node2)

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === "object" || typeof call === "function") ? call : self }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

      var ELement = function (_Node) {
        _inherits(ELement, _Node)

        function ELement() {
          _classCallCheck(this, ELement)

          var _this = _possibleConstructorReturn(this, (ELement.__proto__ || Object.getPrototypeOf(ELement)).call(this))

          _this.className = ''
          _this.children = []
          return _this
        }

        return ELement
      }(_Node3.default)

      exports.default = ELement

      /***/
}),
/* 6 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }()

      var _EventTarget2 = __webpack_require__(7)

      var _EventTarget3 = _interopRequireDefault(_EventTarget2)

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === "object" || typeof call === "function") ? call : self }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

      var Node = function (_EventTarget) {
        _inherits(Node, _EventTarget)

        function Node() {
          _classCallCheck(this, Node)

          var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this))

          _this.childNodes = []
          return _this
        }

        _createClass(Node, [{
          key: 'appendChild',
          value: function appendChild(node) {
            if (node instanceof Node) {
              this.childNodes.push(node)
            } else {
              throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.')
            }
          }
        }, {
          key: 'cloneNode',
          value: function cloneNode() {
            var copyNode = Object.create(this)

            Object.assign(copyNode, this)
            return copyNode
          }
        }, {
          key: 'removeChild',
          value: function removeChild(node) {
            var index = this.childNodes.findIndex(function (child) {
              return child === node
            })

            if (index > -1) {
              return this.childNodes.splice(index, 1)
            }
            return null
          }
        }])

        return Node
      }(_EventTarget3.default)

      exports.default = Node

      /***/
}),
/* 7 */
/***/ (function (module, exports) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }()

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

      var _events = new WeakMap()

      var EventTarget = function () {
        function EventTarget() {
          _classCallCheck(this, EventTarget)

          _events.set(this, {})
        }

        _createClass(EventTarget, [{
          key: 'addEventListener',
          value: function addEventListener(type, listener) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}

            var events = _events.get(this)

            if (!events) {
              events = {}
              _events.set(this, events)
            }
            if (!events[type]) {
              events[type] = []
            }
            events[type].push(listener)

            if (options.capture) {
              console.warn('EventTarget.addEventListener: options.capture is not implemented.')
            }
            if (options.once) {
              console.warn('EventTarget.addEventListener: options.once is not implemented.')
            }
            if (options.passive) {
              console.warn('EventTarget.addEventListener: options.passive is not implemented.')
            }
          }
        }, {
          key: 'removeEventListener',
          value: function removeEventListener(type, listener) {
            var listeners = _events.get(this)[type]

            if (listeners && listeners.length > 0) {
              for (var i = listeners.length; i--; i > 0) {
                if (listeners[i] === listener) {
                  listeners.splice(i, 1)
                  break
                }
              }
            }
          }
        }, {
          key: 'dispatchEvent',
          value: function dispatchEvent() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

            var listeners = _events.get(this)[event.type]

            if (listeners) {
              for (var i = 0; i < listeners.length; i++) {
                listeners[i](event)
              }
            }
          }
        }])

        return EventTarget
      }()

      exports.default = EventTarget

      /***/
}),
/* 8 */
/***/ (function (module, exports) {

      "use strict"

      Object.defineProperty(exports, "__esModule", {
        value: true
      })
      exports.noop = noop
      function noop() { }

      /***/
}),
/* 9 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })
      exports.default = Canvas

      var _constructor = __webpack_require__(3)

      var _HTMLElement = __webpack_require__(4)

      var _HTMLElement2 = _interopRequireDefault(_HTMLElement)

      var _document = __webpack_require__(10)

      var _document2 = _interopRequireDefault(_document)

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

      var hasModifiedCanvasPrototype = false
      var hasInit2DContextConstructor = false
      var hasInitWebGLContextConstructor = false

      function Canvas() {
        var canvas = wx.createCanvas()

        canvas.type = 'canvas'

        canvas.__proto__.__proto__ = new _HTMLElement2.default('canvas')

        var _getContext = canvas.getContext

        canvas.getBoundingClientRect = function () {
          var ret = {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
          return ret
        }

        return canvas
      }

      /***/
}),
/* 10 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      var _window = __webpack_require__(1)

      var window = _interopRequireWildcard(_window)

      var _HTMLElement = __webpack_require__(4)

      var _HTMLElement2 = _interopRequireDefault(_HTMLElement)

      var _Image = __webpack_require__(11)

      var _Image2 = _interopRequireDefault(_Image)

      var _Audio = __webpack_require__(12)

      var _Audio2 = _interopRequireDefault(_Audio)

      var _Canvas = __webpack_require__(9)

      var _Canvas2 = _interopRequireDefault(_Canvas)

      __webpack_require__(15)

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

      function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key] } } newObj.default = obj; return newObj } }

      var events = {}

      var document = {
        readyState: 'complete',
        visibilityState: 'visible',
        documentElement: window,
        hidden: false,
        style: {},
        location: window.location,
        ontouchstart: null,
        ontouchmove: null,
        ontouchend: null,

        head: new _HTMLElement2.default('head'),
        body: new _HTMLElement2.default('body'),

        createElement: function createElement(tagName) {
          if (tagName === 'canvas') {
            return new _Canvas2.default()
          } else if (tagName === 'audio') {
            return new _Audio2.default()
          } else if (tagName === 'img') {
            return new _Image2.default()
          }

          return new _HTMLElement2.default(tagName)
        },
        getElementById: function getElementById(id) {
          if (id === window.canvas.id) {
            return window.canvas
          }
          return null
        },
        getElementsByTagName: function getElementsByTagName(tagName) {
          if (tagName === 'head') {
            return [document.head]
          } else if (tagName === 'body') {
            return [document.body]
          } else if (tagName === 'canvas') {
            return [window.canvas]
          }
          return []
        },
        querySelector: function querySelector(query) {
          if (query === 'head') {
            return document.head
          } else if (query === 'body') {
            return document.body
          } else if (query === 'canvas') {
            return window.canvas
          } else if (query === '#' + window.canvas.id) {
            return window.canvas
          }
          return null
        },
        querySelectorAll: function querySelectorAll(query) {
          if (query === 'head') {
            return [document.head]
          } else if (query === 'body') {
            return [document.body]
          } else if (query === 'canvas') {
            return [window.canvas]
          }
          return []
        },
        addEventListener: function addEventListener(type, listener) {
          if (!events[type]) {
            events[type] = []
          }
          events[type].push(listener)
        },
        removeEventListener: function removeEventListener(type, listener) {
          var listeners = events[type]

          if (listeners && listeners.length > 0) {
            for (var i = listeners.length; i--; i > 0) {
              if (listeners[i] === listener) {
                listeners.splice(i, 1)
                break
              }
            }
          }
        },
        dispatchEvent: function dispatchEvent(event) {
          var listeners = events[event.type]

          if (listeners) {
            for (var i = 0; i < listeners.length; i++) {
              listeners[i](event)
            }
          }
        }
      }

      exports.default = document

      /***/
}),
/* 11 */
/***/ (function (module, exports) {

      "use strict"

      Object.defineProperty(exports, "__esModule", {
        value: true
      })
      exports.default = Image
      function Image() {
        var image = wx.createImage()

        return image
      }

      /***/
}),
/* 12 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }()

      var _HTMLAudioElement2 = __webpack_require__(13)

      var _HTMLAudioElement3 = _interopRequireDefault(_HTMLAudioElement2)

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === "object" || typeof call === "function") ? call : self }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

      var HAVE_NOTHING = 0
      var HAVE_METADATA = 1
      var HAVE_CURRENT_DATA = 2
      var HAVE_FUTURE_DATA = 3
      var HAVE_ENOUGH_DATA = 4

      var _innerAudioContext = new WeakMap()
      var _src = new WeakMap()
      var _loop = new WeakMap()
      var _autoplay = new WeakMap()

      var Audio = function (_HTMLAudioElement) {
        _inherits(Audio, _HTMLAudioElement)

        function Audio(url) {
          _classCallCheck(this, Audio)

          var _this = _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this))

          _this.HAVE_NOTHING = HAVE_NOTHING
          _this.HAVE_METADATA = HAVE_METADATA
          _this.HAVE_CURRENT_DATA = HAVE_CURRENT_DATA
          _this.HAVE_FUTURE_DATA = HAVE_FUTURE_DATA
          _this.HAVE_ENOUGH_DATA = HAVE_ENOUGH_DATA
          _this.readyState = HAVE_NOTHING


          _src.set(_this, '')

          var innerAudioContext = wx.createInnerAudioContext()

          _innerAudioContext.set(_this, innerAudioContext)

          innerAudioContext.onCanplay(function () {
            _this.dispatchEvent({ type: 'load' })
            _this.dispatchEvent({ type: 'loadend' })
            _this.dispatchEvent({ type: 'canplay' })
            _this.dispatchEvent({ type: 'canplaythrough' })
            _this.dispatchEvent({ type: 'loadedmetadata' })
            _this.readyState = HAVE_CURRENT_DATA
          })
          innerAudioContext.onPlay(function () {
            _this.dispatchEvent({ type: 'play' })
          })
          innerAudioContext.onPause(function () {
            _this.dispatchEvent({ type: 'pause' })
          })
          innerAudioContext.onEnded(function () {
            _this.dispatchEvent({ type: 'ended' })
            _this.readyState = HAVE_ENOUGH_DATA
          })
          innerAudioContext.onError(function () {
            _this.dispatchEvent({ type: 'error' })
          })

          if (url) {
            _innerAudioContext.get(_this).src = url
          }
          return _this
        }

        _createClass(Audio, [{
          key: 'load',
          value: function load() {
            console.warn('HTMLAudioElement.load() is not implemented.')
          }
        }, {
          key: 'play',
          value: function play() {
            _innerAudioContext.get(this).play()
          }
        }, {
          key: 'pause',
          value: function pause() {
            _innerAudioContext.get(this).pause()
          }
        }, {
          key: 'canPlayType',
          value: function canPlayType() {
            var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''

            if (typeof mediaType !== 'string') {
              return ''
            }

            if (mediaType.indexOf('audio/mpeg') > -1 || mediaType.indexOf('audio/mp4')) {
              return 'probably'
            }
            return ''
          }
        }, {
          key: 'cloneNode',
          value: function cloneNode() {
            var newAudio = new Audio()
            newAudio.loop = _innerAudioContext.get(this).loop
            newAudio.autoplay = _innerAudioContext.get(this).loop
            newAudio.src = this.src
            return newAudio
          }
        }, {
          key: 'currentTime',
          get: function get() {
            return _innerAudioContext.get(this).currentTime
          },
          set: function set(value) {
            _innerAudioContext.get(this).seek(value)
          }
        }, {
          key: 'src',
          get: function get() {
            return _src.get(this)
          },
          set: function set(value) {
            _src.set(this, value)
            _innerAudioContext.get(this).src = value
          }
        }, {
          key: 'loop',
          get: function get() {
            return _innerAudioContext.get(this).loop
          },
          set: function set(value) {
            _innerAudioContext.get(this).loop = value
          }
        }, {
          key: 'autoplay',
          get: function get() {
            return _innerAudioContext.get(this).autoplay
          },
          set: function set(value) {
            _innerAudioContext.get(this).autoplay = value
          }
        }, {
          key: 'paused',
          get: function get() {
            return _innerAudioContext.get(this).paused
          }
        }])

        return Audio
      }(_HTMLAudioElement3.default)

      exports.default = Audio

      /***/
}),
/* 13 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      var _HTMLMediaElement2 = __webpack_require__(14)

      var _HTMLMediaElement3 = _interopRequireDefault(_HTMLMediaElement2)

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === "object" || typeof call === "function") ? call : self }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

      var HTMLAudioElement = function (_HTMLMediaElement) {
        _inherits(HTMLAudioElement, _HTMLMediaElement)

        function HTMLAudioElement() {
          _classCallCheck(this, HTMLAudioElement)

          return _possibleConstructorReturn(this, (HTMLAudioElement.__proto__ || Object.getPrototypeOf(HTMLAudioElement)).call(this, 'audio'))
        }

        return HTMLAudioElement
      }(_HTMLMediaElement3.default)

      exports.default = HTMLAudioElement

      /***/
}),
/* 14 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }()

      var _HTMLElement2 = __webpack_require__(4)

      var _HTMLElement3 = _interopRequireDefault(_HTMLElement2)

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === "object" || typeof call === "function") ? call : self }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

      var HTMLMediaElement = function (_HTMLElement) {
        _inherits(HTMLMediaElement, _HTMLElement)

        function HTMLMediaElement(type) {
          _classCallCheck(this, HTMLMediaElement)

          return _possibleConstructorReturn(this, (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).call(this, type))
        }

        _createClass(HTMLMediaElement, [{
          key: 'addTextTrack',
          value: function addTextTrack() { }
        }, {
          key: 'captureStream',
          value: function captureStream() { }
        }, {
          key: 'fastSeek',
          value: function fastSeek() { }
        }, {
          key: 'load',
          value: function load() { }
        }, {
          key: 'pause',
          value: function pause() { }
        }, {
          key: 'play',
          value: function play() { }
        }])

        return HTMLMediaElement
      }(_HTMLElement3.default)

      exports.default = HTMLMediaElement

      /***/
}),
/* 15 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      __webpack_require__(16)

      /***/
}),
/* 16 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      var _window = __webpack_require__(1)

      var window = _interopRequireWildcard(_window)

      var _document = __webpack_require__(10)

      var _document2 = _interopRequireDefault(_document)

      var _util = __webpack_require__(8)

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

      function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key] } } newObj.default = obj; return newObj } }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

      var TouchEvent = function TouchEvent(type) {
        _classCallCheck(this, TouchEvent)

        this.target = window.canvas
        this.currentTarget = window.canvas
        this.touches = []
        this.targetTouches = []
        this.changedTouches = []
        this.preventDefault = _util.noop
        this.stopPropagation = _util.noop

        this.type = type
      }

      function touchEventHandlerFactory(type) {
        return function (event) {
          var touchEvent = new TouchEvent(type)

          touchEvent.touches = event.touches
          touchEvent.targetTouches = Array.prototype.slice.call(event.touches)
          touchEvent.changedTouches = event.changedTouches
          touchEvent.timeStamp = event.timeStamp
          _document2.default.dispatchEvent(touchEvent)
        }
      }

      wx.onTouchStart(touchEventHandlerFactory('touchstart'))
      wx.onTouchMove(touchEventHandlerFactory('touchmove'))
      wx.onTouchEnd(touchEventHandlerFactory('touchend'))
      wx.onTouchCancel(touchEventHandlerFactory('touchcancel'))

      /***/
}),
/* 17 */
/***/ (function (module, exports, __webpack_require__) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      var _util = __webpack_require__(8)

      // TODO 需要 wx.getSystemInfo 获取更详细信息
      var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
        platform = _wx$getSystemInfoSync.platform

      var navigator = {
        platform: platform,
        language: 'zh-cn',
        appVersion: '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN',
        onLine: true, // TODO 用 wx.getNetworkStateChange 和 wx.onNetworkStateChange 来返回真实的状态

        // TODO 用 wx.getLocation 来封装 geolocation
        geolocation: {
          getCurrentPosition: _util.noop,
          watchPosition: _util.noop,
          clearWatch: _util.noop
        }
      }

      exports.default = navigator

      /***/
}),
/* 18 */
/***/ (function (module, exports) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }()

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

      var _url = new WeakMap()
      var _method = new WeakMap()
      var _requestHeader = new WeakMap()
      var _responseHeader = new WeakMap()
      var _requestTask = new WeakMap()

      function _triggerEvent(type) {
        if (typeof this['on' + type] === 'function') {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key]
          }

          this['on' + type].apply(this, args)
        }
      }

      function _changeReadyState(readyState) {
        this.readyState = readyState
        _triggerEvent.call(this, 'readystatechange')
      }

      var XMLHttpRequest = function () {
        // TODO 没法模拟 HEADERS_RECEIVED 和 LOADING 两个状态
        function XMLHttpRequest() {
          _classCallCheck(this, XMLHttpRequest)

          this.onabort = null
          this.onerror = null
          this.onload = null
          this.onloadstart = null
          this.onprogress = null
          this.ontimeout = null
          this.onloadend = null
          this.onreadystatechange = null
          this.readyState = 0
          this.response = null
          this.responseText = null
          this.responseType = ''
          this.responseXML = null
          this.status = 0
          this.statusText = ''
          this.upload = {}
          this.withCredentials = false

          _requestHeader.set(this, {
            'content-type': 'application/x-www-form-urlencoded'
          })
          _responseHeader.set(this, {})
        }

        /*
         * TODO 这一批事件应该是在 XMLHttpRequestEventTarget.prototype 上面的
         */


        _createClass(XMLHttpRequest, [{
          key: 'abort',
          value: function abort() {
            var myRequestTask = _requestTask.get(this)

            if (myRequestTask) {
              myRequestTask.abort()
            }
          }
        }, {
          key: 'getAllResponseHeaders',
          value: function getAllResponseHeaders() {
            var responseHeader = _responseHeader.get(this)

            return Object.keys(responseHeader).map(function (header) {
              return header + ': ' + responseHeader[header]
            }).join('\n')
          }
        }, {
          key: 'getResponseHeader',
          value: function getResponseHeader(header) {
            return _responseHeader.get(this)[header]
          }
        }, {
          key: 'open',
          value: function open(method, url /* async, user, password 这几个参数在小程序内不支持*/) {
            _method.set(this, method)
            _url.set(this, url)
            _changeReadyState.call(this, XMLHttpRequest.OPENED)
          }
        }, {
          key: 'overrideMimeType',
          value: function overrideMimeType() { }
        }, {
          key: 'send',
          value: function send() {
            var _this = this

            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''

            if (this.readyState !== XMLHttpRequest.OPENED) {
              throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.")
            } else {
              wx.request({
                data: data,
                url: _url.get(this),
                method: _method.get(this),
                header: _requestHeader.get(this),
                responseType: this.responseType,
                success: function success(_ref) {
                  var data = _ref.data,
                    statusCode = _ref.statusCode,
                    header = _ref.header

                  if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
                    try {
                      data = JSON.stringify(data)
                    } catch (e) {
                      data = data
                    }
                  }

                  _this.status = statusCode
                  _responseHeader.set(_this, header)
                  _triggerEvent.call(_this, 'loadstart')
                  _changeReadyState.call(_this, XMLHttpRequest.HEADERS_RECEIVED)
                  _changeReadyState.call(_this, XMLHttpRequest.LOADING)

                  _this.response = data

                  if (data instanceof ArrayBuffer) {
                    _this.responseText = ''
                    var bytes = new Uint8Array(data)
                    var len = bytes.byteLength

                    for (var i = 0; i < len; i++) {
                      _this.responseText += String.fromCharCode(bytes[i])
                    }
                  } else {
                    _this.responseText = data
                  }
                  _changeReadyState.call(_this, XMLHttpRequest.DONE)
                  _triggerEvent.call(_this, 'load')
                  _triggerEvent.call(_this, 'loadend')
                },
                fail: function fail(_ref2) {
                  var errMsg = _ref2.errMsg

                  // TODO 规范错误
                  if (errMsg.indexOf('abort') !== -1) {
                    _triggerEvent.call(_this, 'abort')
                  } else {
                    _triggerEvent.call(_this, 'error', errMsg)
                  }
                  _triggerEvent.call(_this, 'loadend')
                }
              })
            }
          }
        }, {
          key: 'setRequestHeader',
          value: function setRequestHeader(header, value) {
            var myHeader = _requestHeader.get(this)

            myHeader[header] = value
            _requestHeader.set(this, myHeader)
          }
        }])

        return XMLHttpRequest
      }()

      XMLHttpRequest.UNSEND = 0
      XMLHttpRequest.OPENED = 1
      XMLHttpRequest.HEADERS_RECEIVED = 2
      XMLHttpRequest.LOADING = 3
      XMLHttpRequest.DONE = 4
      exports.default = XMLHttpRequest

      /***/
}),
/* 19 */
/***/ (function (module, exports) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }()

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

      var _socketTask = new WeakMap()

      var WebSocket = function () {
        // TODO 更新 binaryType
        // The connection is in the process of closing.
        // The connection is not yet open.
        function WebSocket(url) {
          var _this = this

          var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []

          _classCallCheck(this, WebSocket)

          this.binaryType = ''
          this.bufferedAmount = 0
          this.extensions = ''
          this.onclose = null
          this.onerror = null
          this.onmessage = null
          this.onopen = null
          this.protocol = ''
          this.readyState = 3

          if (typeof url !== 'string' || !/(^ws:\/\/)|(^wss:\/\/)/.test(url)) {
            throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + url + '\' is invalid')
          }

          this.url = url
          this.readyState = WebSocket.CONNECTING

          var socketTask = wx.connectSocket({
            url: url,
            protocols: Array.isArray(protocols) ? protocols : [protocols]
          })

          _socketTask.set(this, socketTask)

          socketTask.onClose(function (res) {
            _this.readyState = WebSocket.CLOSED
            if (typeof _this.onclose === 'function') {
              _this.onclose(res)
            }
          })

          socketTask.onMessage(function (res) {
            if (typeof _this.onmessage === 'function') {
              _this.onmessage(res)
            }
          })

          socketTask.onOpen(function () {
            _this.readyState = WebSocket.OPEN
            if (typeof _this.onopen === 'function') {
              _this.onopen()
            }
          })

          socketTask.onError(function (res) {
            if (typeof _this.onerror === 'function') {
              _this.onerror(new Error(res.errMsg))
            }
          })

          return this
        } // TODO 小程序内目前获取不到，实际上需要根据服务器选择的 sub-protocol 返回
        // TODO 更新 bufferedAmount
        // The connection is closed or couldn't be opened.

        // The connection is open and ready to communicate.


        _createClass(WebSocket, [{
          key: 'close',
          value: function close(code, reason) {
            this.readyState = WebSocket.CLOSING
            var socketTask = _socketTask.get(this)

            socketTask.close({
              code: code,
              reason: reason
            })
          }
        }, {
          key: 'send',
          value: function send(data) {
            if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
              throw new TypeError('Failed to send message: The data ' + data + ' is invalid')
            }

            var socketTask = _socketTask.get(this)

            socketTask.send({
              data: data
            })
          }
        }])

        return WebSocket
      }()

      WebSocket.CONNECTING = 0
      WebSocket.OPEN = 1
      WebSocket.CLOSING = 2
      WebSocket.CLOSED = 3
      exports.default = WebSocket

      /***/
}),
/* 20 */
/***/ (function (module, exports) {

      "use strict"

      Object.defineProperty(exports, "__esModule", {
        value: true
      })

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

      /*
       * TODO 使用 wx.readFile 来封装 FileReader
       */
      var FileReader = function FileReader() {
        _classCallCheck(this, FileReader)
      }

      exports.default = FileReader

      /***/
}),
/* 21 */
/***/ (function (module, exports) {

      "use strict"

      Object.defineProperty(exports, "__esModule", {
        value: true
      })
      var localStorage = {
        get length() {
          var _wx$getStorageInfoSyn = wx.getStorageInfoSync(),
            keys = _wx$getStorageInfoSyn.keys

          return keys.length
        },

        key: function key(n) {
          var _wx$getStorageInfoSyn2 = wx.getStorageInfoSync(),
            keys = _wx$getStorageInfoSyn2.keys

          return keys[n]
        },
        getItem: function getItem(key) {
          return wx.getStorageSync(key)
        },
        setItem: function setItem(key, value) {
          return wx.setStorageSync(key, value)
        },
        removeItem: function removeItem(key) {
          wx.removeStorageSync(key)
        },
        clear: function clear() {
          wx.clearStorageSync()
        }
      }

      exports.default = localStorage

      /***/
}),
/* 22 */
/***/ (function (module, exports) {

      'use strict'

      Object.defineProperty(exports, "__esModule", {
        value: true
      })
      var location = {
        href: 'game.js',
        reload: function reload() { }
      }

      exports.default = location

      /***/
})
/******/])


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(40);

var _assign2 = _interopRequireDefault(_assign);

var _World = __webpack_require__(54);

var _World2 = _interopRequireDefault(_World);

var _index = __webpack_require__(16);

var com = _interopRequireWildcard(_index);

var _RenderSystem = __webpack_require__(72);

var _RenderSystem2 = _interopRequireDefault(_RenderSystem);

var _PhysicalSystem = __webpack_require__(73);

var _PhysicalSystem2 = _interopRequireDefault(_PhysicalSystem);

var _WallSensorSystem = __webpack_require__(74);

var _WallSensorSystem2 = _interopRequireDefault(_WallSensorSystem);

var _SpawnerSystem = __webpack_require__(75);

var _SpawnerSystem2 = _interopRequireDefault(_SpawnerSystem);

var _CollisionSystem = __webpack_require__(76);

var _CollisionSystem2 = _interopRequireDefault(_CollisionSystem);

var _entityFactory = __webpack_require__(36);

var _entityFactory2 = _interopRequireDefault(_entityFactory);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = undefined && undefined.__assign || _assign2.default || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var components = __assign({}, com);
var Game = /** @class */function () {
    function Game() {
        this.running = false;
        var ctx = canvas.getContext('2d');
        this.world = new _World2.default();
        this.world.importComponents(components);
        this.world.addSystem(new _SpawnerSystem2.default()).addSystem(new _WallSensorSystem2.default()).addSystem(new _PhysicalSystem2.default()).addSystem(new _CollisionSystem2.default()).addSystem(new _RenderSystem2.default(ctx));
        this.loop = this.loop.bind(this);
        this.init();
        this.start();
    }
    Game.prototype.init = function () {
        var player = _entityFactory2.default.createGod(this.world);
        this.world.getTagManager().addTeam('player', player);
        _entityFactory2.default.createItemSpawner(this.world);
    };
    Game.prototype.start = function () {
        this.running = true;
        this.loop();
    };
    Game.prototype.loop = function () {
        this.world.process();
        requestAnimationFrame(this.loop);
    };
    return Game;
}();
exports.default = Game;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(45) });


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(19);
var createDesc = __webpack_require__(23);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(13);
var gOPS = __webpack_require__(53);
var pIE = __webpack_require__(30);
var toObject = __webpack_require__(31);
var IObject = __webpack_require__(25);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(24);
var toIObject = __webpack_require__(14);
var arrayIndexOf = __webpack_require__(48)(false);
var IE_PROTO = __webpack_require__(28)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14);
var toLength = __webpack_require__(49);
var toAbsoluteIndex = __webpack_require__(50);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _EntityManager = __webpack_require__(55);

var _EntityManager2 = _interopRequireDefault(_EntityManager);

var _TagManager = __webpack_require__(77);

var _TagManager2 = _interopRequireDefault(_TagManager);

var _ComponentManager = __webpack_require__(58);

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var World = /** @class */function () {
    function World() {
        this.systems = [];
        this.entityManager = new _EntityManager2.default(this);
        this.componentManager = new _ComponentManager2.default(this);
        this.tagManager = new _TagManager2.default();
        this.frames = 0;
    }
    World.prototype.addSystem = function (system) {
        this.systems.push(system);
        system.bindWorld(this);
        return this;
    };
    World.prototype.getSystems = function () {
        return this.systems;
    };
    World.prototype.createEntity = function () {
        return this.entityManager.create();
    };
    World.prototype.getComponentManager = function () {
        return this.componentManager;
    };
    World.prototype.getEntityManager = function () {
        return this.entityManager;
    };
    World.prototype.getTagManager = function () {
        return this.tagManager;
    };
    World.prototype.process = function (delta) {
        var _this = this;
        this.frames += 1;
        this.systems.forEach(function (system) {
            system.onBegin();
            _this.entityManager.query(system.getAspect()).forEach(function (entity) {
                return system.process(entity, delta);
            });
            system.onEnd();
        });
    };
    World.prototype.importComponents = function (components) {
        for (var key in components) {
            this.componentManager.createMapper(components[key]);
        }
    };
    return World;
}();
exports.default = World;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _EntityEdit = __webpack_require__(56);

var _EntityEdit2 = _interopRequireDefault(_EntityEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EntityManager = /** @class */function () {
    function EntityManager(world) {
        this.nextId = 0;
        this.entities = [];
        this.world = world;
    }
    EntityManager.prototype.create = function () {
        var entity = this.nextId++;
        this.entities.push(entity);
        return new _EntityEdit2.default(entity, this.world);
    };
    EntityManager.prototype.remove = function (entity) {
        var index = this.entities.indexOf(entity);
        if (index > -1) {
            this.entities.splice(index, 1);
            this.world.getTagManager().remove(entity);
        }
    };
    EntityManager.prototype.query = function (aspect) {
        var allTypes = aspect.getAllTypes();
        var cm = this.world.getComponentManager();
        return this.entities.filter(function (entity) {
            var flag = allTypes.every(function (klass) {
                var componentMapper = cm.getMappers()[klass.name];
                return componentMapper.get(entity);
            });
            return flag;
        });
    };
    return EntityManager;
}();
exports.default = EntityManager;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var EntityEdit = /** @class */function () {
    function EntityEdit(entity, world) {
        this.entity = entity;
        this.world = world;
    }
    EntityEdit.prototype.add = function (component) {
        this.world.getComponentManager().create(component, this.entity);
        return this;
    };
    EntityEdit.prototype.getEntity = function () {
        return this.entity;
    };
    return EntityEdit;
}();
exports.default = EntityEdit;

/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(15);

var _keys2 = _interopRequireDefault(_keys);

var _ComponentMapper = __webpack_require__(62);

var _ComponentMapper2 = _interopRequireDefault(_ComponentMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentManager = /** @class */function () {
    function ComponentManager(world) {
        this.componentMappers = {};
        this.world = world;
    }
    ComponentManager.prototype.create = function (component, entity) {
        var cm = this.componentMappers[component.className];
        if (!cm) {
            cm = new _ComponentMapper2.default();
            this.componentMappers[component.constructor.name] = cm;
        }
        cm.add(component, entity);
    };
    ComponentManager.prototype.createMapper = function (componentClass) {
        var cm = this.componentMappers[componentClass.name];
        if (!cm) {
            this.componentMappers[componentClass.name] = new _ComponentMapper2.default();
        }
    };
    ComponentManager.prototype.remove = function (entity) {
        var _this = this;
        (0, _keys2.default)(this.componentMappers).forEach(function (key) {
            _this.componentMappers[key].remove(entity);
        });
    };
    ComponentManager.prototype.getMappers = function () {
        return this.componentMappers;
    };
    return ComponentManager;
}();
exports.default = ComponentManager;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(31);
var $keys = __webpack_require__(13);

__webpack_require__(61)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7);
var core = __webpack_require__(2);
var fails = __webpack_require__(11);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(15);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentMapper = /** @class */function () {
    function ComponentMapper() {
        this.maps = {};
    }
    ComponentMapper.prototype.get = function (entity) {
        return this.maps[entity];
    };
    ComponentMapper.prototype.add = function (component, entity) {
        this.maps[entity] = component;
    };
    ComponentMapper.prototype.remove = function (entity) {
        delete this.maps[entity];
    };
    ComponentMapper.prototype.getEntityIds = function () {
        return (0, _keys2.default)(this.maps).map(function (id) {
            return +id;
        });
    };
    return ComponentMapper;
}();
exports.default = ComponentMapper;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(65) });


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(66);
var enumBugKeys = __webpack_require__(29);
var IE_PROTO = __webpack_require__(28)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(21)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(67).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(19);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(13);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(8).document;
module.exports = document && document.documentElement;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(7);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(70).set });


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(10);
var anObject = __webpack_require__(9);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(18)(Function.call, __webpack_require__(71).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(30);
var createDesc = __webpack_require__(23);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(22);
var has = __webpack_require__(24);
var IE8_DOM_DEFINE = __webpack_require__(20);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _System = __webpack_require__(5);

var _System2 = _interopRequireDefault(_System);

var _Aspect = __webpack_require__(6);

var _Aspect2 = _interopRequireDefault(_Aspect);

var _Position = __webpack_require__(12);

var _Position2 = _interopRequireDefault(_Position);

var _Paint = __webpack_require__(32);

var _Paint2 = _interopRequireDefault(_Paint);

var _Bound = __webpack_require__(17);

var _Bound2 = _interopRequireDefault(_Bound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();

var RenderSystem = /** @class */function (_super) {
    __extends(RenderSystem, _super);
    function RenderSystem(ctx) {
        var _this = _super.call(this, _Aspect2.default.all(_Position2.default, _Paint2.default)) || this;
        _this.ctx = ctx;
        _this.width = _this.ctx.canvas.width;
        _this.height = _this.ctx.canvas.height;
        _this.size = new _Bound2.default(_this.width, _this.height);
        return _this;
    }
    RenderSystem.prototype.getSize = function () {
        return this.size;
    };
    RenderSystem.prototype.onBegin = function () {
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(0, 0, this.width, this.height);
    };
    RenderSystem.prototype.onEnd = function () {};
    RenderSystem.prototype.process = function (entity) {
        var ctx = this.ctx;
        var position = this.positionMapper.get(entity);
        var paint = this.paintMapper.get(entity);
        var bound = this.boundMapper.get(entity);
        ctx.save();
        if (paint.imageRenderOptions) {
            var imageRenderOptions = paint.imageRenderOptions;
            ctx.drawImage(paint.img, imageRenderOptions.sx, imageRenderOptions.sy, imageRenderOptions.sw, imageRenderOptions.sh, position.x, position.y, bound.x2, bound.y2);
        } else {
            ctx.drawImage(paint.img, position.x, position.y, bound.x2, bound.y2);
        }
        ctx.restore();
    };
    return RenderSystem;
}(_System2.default);
exports.default = RenderSystem;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _System = __webpack_require__(5);

var _System2 = _interopRequireDefault(_System);

var _Aspect = __webpack_require__(6);

var _Aspect2 = _interopRequireDefault(_Aspect);

var _Position = __webpack_require__(12);

var _Position2 = _interopRequireDefault(_Position);

var _Physical = __webpack_require__(33);

var _Physical2 = _interopRequireDefault(_Physical);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();

var PhysicalSystem = /** @class */function (_super) {
    __extends(PhysicalSystem, _super);
    function PhysicalSystem() {
        return _super.call(this, _Aspect2.default.all(_Position2.default, _Physical2.default)) || this;
    }
    PhysicalSystem.prototype.process = function (entity) {
        var position = this.positionMapper.get(entity);
        var physical = this.physicalMapper.get(entity);
        position.x += physical.vx;
        position.y += physical.vy;
    };
    return PhysicalSystem;
}(_System2.default);
exports.default = PhysicalSystem;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _System = __webpack_require__(5);

var _System2 = _interopRequireDefault(_System);

var _Aspect = __webpack_require__(6);

var _Aspect2 = _interopRequireDefault(_Aspect);

var _Position = __webpack_require__(12);

var _Position2 = _interopRequireDefault(_Position);

var _Bound = __webpack_require__(17);

var _Bound2 = _interopRequireDefault(_Bound);

var _WallSensor = __webpack_require__(34);

var _WallSensor2 = _interopRequireDefault(_WallSensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();

var WallSensorSystem = /** @class */function (_super) {
    __extends(WallSensorSystem, _super);
    function WallSensorSystem() {
        return _super.call(this, _Aspect2.default.all(_Position2.default, _Bound2.default, _WallSensor2.default)) || this;
    }
    WallSensorSystem.prototype.process = function (entity) {
        var position = this.positionMapper.get(entity);
        var bound = this.boundMapper.get(entity);
        var wallSensor = this.wallSensorMapper.get(entity);
        var screenSize = this.renderSystem.getSize();
        if (position.y > screenSize.y2) {
            this.entityManager.remove(entity);
        }
    };
    return WallSensorSystem;
}(_System2.default);
exports.default = WallSensorSystem;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _System = __webpack_require__(5);

var _System2 = _interopRequireDefault(_System);

var _Aspect = __webpack_require__(6);

var _Aspect2 = _interopRequireDefault(_Aspect);

var _Spawner = __webpack_require__(35);

var _Spawner2 = _interopRequireDefault(_Spawner);

var _entityFactory = __webpack_require__(36);

var _entityFactory2 = _interopRequireDefault(_entityFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();

var SpawnerSystem = /** @class */function (_super) {
    __extends(SpawnerSystem, _super);
    function SpawnerSystem() {
        return _super.call(this, _Aspect2.default.all(_Spawner2.default)) || this;
    }
    SpawnerSystem.prototype.process = function (entity) {
        var spawner = this.spawnerMapper.get(entity);
        spawner.cooldown -= 1;
        if (spawner.cooldown <= 0) {
            spawner.cooldown = spawner.originCooldown;
            var item = _entityFactory2.default.createItem(this.world);
            this.tagManager.addTeam('item', item);
        }
    };
    return SpawnerSystem;
}(_System2.default);
exports.default = SpawnerSystem;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _System = __webpack_require__(5);

var _System2 = _interopRequireDefault(_System);

var _Aspect = __webpack_require__(6);

var _Aspect2 = _interopRequireDefault(_Aspect);

var _index = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();

var CollisionSystem = /** @class */function (_super) {
    __extends(CollisionSystem, _super);
    function CollisionSystem() {
        return _super.call(this, _Aspect2.default.all(_index.Position, _index.Bound)) || this;
    }
    CollisionSystem.prototype.process = function (entity) {
        var physical = this.physicalMapper.get(entity);
        var position = this.positionMapper.get(entity);
        var bound = this.boundMapper.get(entity);
    };
    CollisionSystem.prototype.overlap = function (a, b) {
        var ap = this.positionMapper.get(a);
        var bp = this.positionMapper.get(b);
        var ab = this.boundMapper.get(a);
        var bb = this.boundMapper.get(b);
        if (ap && bp && ab && bb) {
            return ap.x + ab.x1 <= bp.x + bb.x2 && bp.x + bb.x1 <= ap.x + ab.x2 && ap.y + ab.y1 <= bp.y + bb.y2 && bp.y + bb.y1 <= ap.y + ab.y2;
        }
        return false;
    };
    CollisionSystem.prototype.distance = function (ap, bp) {
        return Math.sqrt(Math.pow(ap.x - bp.x, 2) + Math.pow(ap.y - bp.y, 2));
    };
    return CollisionSystem;
}(_System2.default);
exports.default = CollisionSystem;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(15);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagManager = /** @class */function () {
    function TagManager() {
        this.teams = {};
    }
    TagManager.prototype.addTeam = function (teamName, entity) {
        if (!this.teams[teamName]) {
            this.teams[teamName] = [];
        }
        var team = this.teams[teamName];
        if (team.indexOf(entity) === -1) {
            team.push(entity);
        }
    };
    TagManager.prototype.remove = function (entity) {
        var _this = this;
        (0, _keys2.default)(this.teams).forEach(function (teamName) {
            _this.teams[teamName] = _this.teams[teamName].filter(function (item) {
                return item !== entity;
            });
        });
    };
    TagManager.prototype.getTeam = function (teamName) {
        return this.teams[teamName];
    };
    return TagManager;
}();
exports.default = TagManager;

/***/ })
/******/ ]);