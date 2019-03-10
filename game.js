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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(17);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EntityEditor = /** @class */function () {
    function EntityEditor(entity, world) {
        this.entity = entity;
        this.world = world;
    }
    EntityEditor.prototype.add = function (component) {
        this.world.getComponentManager().create(component, this.entity);
        return this;
    };
    EntityEditor.prototype.removeComponent = function (componentClass) {
        this.world.getComponentManager().removeComponent(componentClass, this.entity);
        return this;
    };
    EntityEditor.prototype.getEntity = function () {
        return this.entity;
    };
    EntityEditor.prototype.setComponent = function (componentClass, data) {
        var component = this.world.getComponentManager().getComponent(componentClass, this.entity);
        (0, _assign2.default)(component, data);
        return this;
    };
    return EntityEditor;
}();
exports.default = EntityEditor;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RigidBody = exports.Gravity = exports.PlayerController = exports.Payload = exports.Spawner = exports.WallSensor = exports.Physical = exports.Bound = exports.Position = exports.Paint = undefined;

var _Paint = __webpack_require__(38);

var _Paint2 = _interopRequireDefault(_Paint);

var _Position = __webpack_require__(6);

var _Position2 = _interopRequireDefault(_Position);

var _Bound = __webpack_require__(21);

var _Bound2 = _interopRequireDefault(_Bound);

var _Physical = __webpack_require__(22);

var _Physical2 = _interopRequireDefault(_Physical);

var _WallSensor = __webpack_require__(39);

var _WallSensor2 = _interopRequireDefault(_WallSensor);

var _Spawner = __webpack_require__(40);

var _Spawner2 = _interopRequireDefault(_Spawner);

var _Payload = __webpack_require__(79);

var _Payload2 = _interopRequireDefault(_Payload);

var _PlayerController = __webpack_require__(41);

var _PlayerController2 = _interopRequireDefault(_PlayerController);

var _Gravity = __webpack_require__(42);

var _Gravity2 = _interopRequireDefault(_Gravity);

var _RigidBody = __webpack_require__(80);

var _RigidBody2 = _interopRequireDefault(_RigidBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Paint = _Paint2.default;
exports.Position = _Position2.default;
exports.Bound = _Bound2.default;
exports.Physical = _Physical2.default;
exports.WallSensor = _WallSensor2.default;
exports.Spawner = _Spawner2.default;
exports.Payload = _Payload2.default;
exports.PlayerController = _PlayerController2.default;
exports.Gravity = _Gravity2.default;
exports.RigidBody = _RigidBody2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(2);

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
        _this.x = x;
        _this.y = y;
        return _this;
    }
    return Position;
}(_Component2.default);
exports.default = Position;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(10);

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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bonusMap = undefined;

var _math = __webpack_require__(43);

var _math2 = _interopRequireDefault(_math);

var _index = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bonusMap = exports.bonusMap = {
    gold: 2,
    gold_pack: 5,
    gold_pack2: 10,
    lucky: 1,
    bomb: -10
};
var instance = {
    createGod: function createGod(world) {
        return world.createEntity().add(new _index.PlayerController()).add(new _index.Position(canvas.width / 2, canvas.height - 160)).add(new _index.Physical(0, 0)).add(new _index.RigidBody()).add(new _index.Bound(100, 113.5)).add(new _index.Paint('imgs/god.png')).add(new _index.Payload({
            score: 0,
            catched: {}
        })).getEntity();
    },
    createItem: function createItem(scene, customType) {
        var entityEditor = scene.createEntity().add(new _index.Position(canvas.width / 2, canvas.height / 2)).add(new _index.Physical(0, 0)).add(new _index.RigidBody()).add(new _index.WallSensor());
        var types = ['gold', 'gold_pack', 'gold_pack2', 'lucky', 'bomb'];
        if (customType && types.indexOf(customType) === -1) {
            throw new Error('unknown item type');
        }
        var type = customType || types[_math2.default.getRandomInt(0, types.length - 1)];
        var payload = new _index.Payload({
            bonus: bonusMap[type],
            type: type
        });
        if (type === 'gold') {
            entityEditor.add(new _index.Bound(38, 29)).add(new _index.Paint('imgs/gold.png')).add(payload);
        } else if (type === 'gold_pack') {
            entityEditor.add(new _index.Bound(50, 42.5)).add(new _index.Paint('imgs/gold_pack.png')).add(payload);
        } else if (type === 'gold_pack2') {
            entityEditor.add(new _index.Bound(40.5, 44.5)).add(new _index.Paint('imgs/gold_pack2.png')).add(payload);
        } else if (type === 'lucky') {
            entityEditor.add(new _index.Bound(46.125, 48.75)).add(new _index.Paint('imgs/lucky/1.png')).add(payload);
        } else if (type === 'bomb') {
            entityEditor.add(new _index.Bound(50, 73)).add(new _index.Paint('imgs/bomb.png')).add(payload);
        }
        return entityEditor.getEntity();
    },
    createItemSpawner: function createItemSpawner(world) {
        return world.createEntity().add(new _index.Spawner('item', {
            minCooldown: 30,
            maxCooldown: 120,
            initialCooldown: _math2.default.getRandomInt(0, 60) / 2
        })).getEntity();
    },
    createBackground: function createBackground(world) {
        return world.createEntity().add(new _index.Paint('imgs/bg.png')).add(new _index.Position(0, 0)).add(new _index.Physical(0, 0)).add(new _index.Bound(canvas.width, canvas.height)).getEntity();
    },
    createDeeperBg: function createDeeperBg(world) {
        return world.createEntity().add(new _index.Paint('rect', {
            color: '#f8e879'
        })).add(new _index.Position(0, 0)).add(new _index.Bound(canvas.width, canvas.height)).getEntity();
    },
    createMassItemsSpawner: function createMassItemsSpawner(scene) {
        return scene.createEntity().add(new _index.Spawner('massItem', {
            minCooldown: 2,
            maxCooldown: 5,
            initialCooldown: 0
        })).getEntity();
    },
    createPot: function createPot(scene) {
        return scene.createEntity().add(new _index.Paint('imgs/pot.png')).add(new _index.Bound(256, 238.5)).add(new _index.Position(canvas.width / 2 - 128, 200)).getEntity();
    },
    createPlayAgainBtn: function createPlayAgainBtn(scene, pos) {
        return scene.createEntity().add(new _index.Paint('imgs/playagain.png')).add(new _index.Bound(64, 64)).add(pos).getEntity();
    }
};
exports.default = instance;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var core = __webpack_require__(3);
var ctx = __webpack_require__(24);
var hide = __webpack_require__(51);
var has = __webpack_require__(18);
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
    if (own && has(exports, key)) continue;
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
/* 13 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(53);
var enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(30);
var defined = __webpack_require__(31);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(2);

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
    Bound.prototype.isIn = function (position, targetPosition) {
        return targetPosition.x >= this.x1 + position.x && targetPosition.x <= this.x1 + this.x2 + position.x && targetPosition.y >= this.y1 + position.y && targetPosition.y <= this.y1 + this.y2 + position.y;
    };
    return Bound;
}(_Component2.default);
exports.default = Bound;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(2);

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
        _this.vx = vx;
        _this.vy = vy;
        return _this;
    }
    return Physical;
}(_Component2.default);
exports.default = Physical;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Scene = /** @class */function () {
    function Scene(world) {
        this.entities = [];
        this.running = false;
        this.world = world;
        this.loop = this.loop.bind(this);
    }
    Scene.prototype.start = function () {
        this.running = true;
        this.loop();
    };
    Scene.prototype.pause = function () {
        this.running = false;
    };
    Scene.prototype.loop = function () {
        if (!this.running) {
            return;
        }
        this.world.process();
        requestAnimationFrame(this.loop);
    };
    Scene.prototype.createEntity = function () {
        var entityEditor = this.world.createEntity();
        this.bindEntity(entityEditor.getEntity());
        return entityEditor;
    };
    Scene.prototype.cleanEntities = function () {
        var manager = this.world.getEntityManager();
        this.entities.forEach(function (entity) {
            return manager.remove(entity);
        });
    };
    Scene.prototype.bindEntity = function (entity) {
        if (this.entities.indexOf(entity) === -1) {
            this.entities.push(entity);
        }
    };
    return Scene;
}();
exports.default = Scene;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(50);
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(26);
var toPrimitive = __webpack_require__(28);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var document = __webpack_require__(13).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(15);
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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(54);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(58)('keys');
var uid = __webpack_require__(60);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(31);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var EventEmitter = /** @class */function () {
    function EventEmitter() {
        this.events = {};
    }
    EventEmitter.prototype.on = function (name, cb) {
        var _this = this;
        if (!this.events[name]) {
            this.events[name] = [];
        }
        this.events[name].push(cb);
        return function () {
            return _this.remove(name, cb);
        };
    };
    EventEmitter.prototype.once = function (name, cb) {
        var _this = this;
        var fn = function fn() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            cb.apply(void 0, args);
            _this.remove(name, fn);
        };
        this.on(name, fn);
    };
    EventEmitter.prototype.emit = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var events = this.events[name];
        if (events) {
            events.forEach(function (cb) {
                return cb.apply(void 0, args);
            });
        }
    };
    EventEmitter.prototype.remove = function (name, fn) {
        var targetEvent = this.events[name];
        if (!targetEvent) {
            return;
        }
        if (fn) {
            var index = targetEvent.indexOf(fn);
            if (index > -1) {
                targetEvent.splice(index, 1);
            }
        } else {
            delete this.events[name];
        }
    };
    return EventEmitter;
}();
exports.default = EventEmitter;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(2);

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
    function Paint(src, renderOptions) {
        var _this = _super.call(this) || this;
        _this.renderOptions = renderOptions;
        _this.animationCount = 0;
        _this.animationDuration = 60;
        _this.opacity = 1;
        if (src === 'rect') {
            _this.type = 'rect';
            return _this;
        }
        _this.type = 'image';
        _this.img = new Image();
        _this.img.src = src;
        return _this;
    }
    return Paint;
}(_Component2.default);
exports.default = Paint;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(2);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(2);

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
    function Spawner(type, option) {
        var _this = _super.call(this) || this;
        _this.type = type;
        _this.minCooldown = option.minCooldown;
        _this.maxCooldown = option.maxCooldown;
        _this.cooldown = option.initialCooldown;
        return _this;
    }
    return Spawner;
}(_Component2.default);
exports.default = Spawner;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(2);

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

var PlayerController = /** @class */function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PlayerController;
}(_Component2.default);
exports.default = PlayerController;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(2);

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

var Gravity = /** @class */function (_super) {
    __extends(Gravity, _super);
    function Gravity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Gravity;
}(_Component2.default);
exports.default = Gravity;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    getRandomInt: function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandom: function getRandom(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _EventEmitter = __webpack_require__(37);

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

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

var eventMapper = {
    click: 'touchstart',
    touchstart: 'touchstart',
    toucdmove: 'toucdmove',
    touchend: 'touchend'
};
var instance = null;
var Input = /** @class */function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super.call(this) || this;
        if (instance) {
            return instance;
        } else {
            instance = _this;
        }
        return _this;
    }
    Input.prototype.on = function (name, cb) {
        var targetEventName = eventMapper[name];
        if (!targetEventName) {
            return;
        }
        var handler = function handler(e) {
            e.preventDefault();
            cb({
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            });
        };
        canvas.addEventListener(targetEventName, handler);
        return function () {
            return canvas.removeEventListener(targetEventName, handler);
        };
    };
    return Input;
}(_EventEmitter2.default);
exports.default = Input;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _UI = __webpack_require__(89);

var _UI2 = _interopRequireDefault(_UI);

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

var Text = /** @class */function (_super) {
    __extends(Text, _super);
    function Text(text, textOption) {
        var _this = _super.call(this) || this;
        _this.text = text;
        _this.textOption = textOption;
        return _this;
    }
    Text.prototype.render = function (ctx) {
        var _a = this,
            textOption = _a.textOption,
            text = _a.text;
        ctx.fillStyle = textOption.fillStyle;
        if (textOption.fontFamily) {
            ctx.font = textOption.fontSize + "px " + textOption.fontFamily;
        } else {
            ctx.font = ctx.font.replace(/\d+px/, textOption.fontSize + 'px');
        }
        if (textOption.textAlign) {
            ctx.textAlign = textOption.textAlign;
        }
        ctx.fillText(text + '', textOption.x, textOption.y);
    };
    return Text;
}(_UI2.default);
exports.default = Text;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(47);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _index2.default(); //import '../libs/weapp-adapter'

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(17);

var _assign2 = _interopRequireDefault(_assign);

var _World = __webpack_require__(62);

var _World2 = _interopRequireDefault(_World);

var _index = __webpack_require__(5);

var com = _interopRequireWildcard(_index);

var _RenderSystem = __webpack_require__(81);

var _RenderSystem2 = _interopRequireDefault(_RenderSystem);

var _PhysicalSystem = __webpack_require__(82);

var _PhysicalSystem2 = _interopRequireDefault(_PhysicalSystem);

var _WallSensorSystem = __webpack_require__(83);

var _WallSensorSystem2 = _interopRequireDefault(_WallSensorSystem);

var _SpawnerSystem = __webpack_require__(84);

var _SpawnerSystem2 = _interopRequireDefault(_SpawnerSystem);

var _PlayerControllerSystem = __webpack_require__(85);

var _PlayerControllerSystem2 = _interopRequireDefault(_PlayerControllerSystem);

var _CollisionSystem = __webpack_require__(86);

var _CollisionSystem2 = _interopRequireDefault(_CollisionSystem);

var _Main = __webpack_require__(88);

var _Main2 = _interopRequireDefault(_Main);

var _Statistics = __webpack_require__(90);

var _Statistics2 = _interopRequireDefault(_Statistics);

var _entityFactory = __webpack_require__(11);

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
var ctx = canvas.getContext('2d');
var Game = /** @class */function () {
    function Game() {
        var world = new _World2.default(ctx);
        world.importComponents(components);
        world.addSystem(new _PlayerControllerSystem2.default(canvas)).addSystem(new _SpawnerSystem2.default()).addSystem(new _WallSensorSystem2.default()).addSystem(new _PhysicalSystem2.default()).addSystem(new _CollisionSystem2.default()).addSystem(new _RenderSystem2.default(ctx));
        var deeperBg = _entityFactory2.default.createDeeperBg(world);
        var bg = _entityFactory2.default.createBackground(world);
        var player = _entityFactory2.default.createGod(world);
        world.getTagManager().addTag('player', player);
        world.loadScenes([_Main2.default, _Statistics2.default], {
            deeperBg: deeperBg, bg: bg, player: player
        });
        world.startScene();
    }
    return Game;
}();
exports.default = Game;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(12);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(52) });


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(25);
var createDesc = __webpack_require__(29);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(19);
var gOPS = __webpack_require__(61);
var pIE = __webpack_require__(35);
var toObject = __webpack_require__(36);
var IObject = __webpack_require__(30);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(16)(function () {
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(18);
var toIObject = __webpack_require__(20);
var arrayIndexOf = __webpack_require__(55)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

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
/* 54 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(20);
var toLength = __webpack_require__(56);
var toAbsoluteIndex = __webpack_require__(57);
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(32);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var global = __webpack_require__(13);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(59) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _EntityManager = __webpack_require__(63);

var _EntityManager2 = _interopRequireDefault(_EntityManager);

var _TagManager = __webpack_require__(64);

var _TagManager2 = _interopRequireDefault(_TagManager);

var _ComponentManager = __webpack_require__(68);

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _EventEmitter = __webpack_require__(37);

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var World = /** @class */function () {
    function World(ctx) {
        this.ctx = ctx;
        this.systems = [];
        this.UIs = [];
        this.entityBundle = {};
        this.entityManager = new _EntityManager2.default(this);
        this.componentManager = new _ComponentManager2.default();
        this.tagManager = new _TagManager2.default();
        this.totalFrames = 0;
        this.eventBus = new _EventEmitter2.default();
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
    World.prototype.getComponent = function (ComponentClass, entity) {
        return this.componentManager.getComponent(ComponentClass, entity);
    };
    World.prototype.getEntityManager = function () {
        return this.entityManager;
    };
    World.prototype.getTagManager = function () {
        return this.tagManager;
    };
    World.prototype.process = function (delta) {
        var _this = this;
        this.totalFrames += 1;
        this.eventBus.emit('processBegin');
        this.systems.forEach(function (system) {
            system.onBegin();
            _this.entityManager.query(system.getAspect()).forEach(function (entity) {
                return system.process(entity, delta);
            });
            system.onEnd();
        });
        this.UIs.forEach(function (ui) {
            _this.ctx.save();
            ui.render(_this.ctx);
            _this.ctx.restore();
        });
        this.eventBus.emit('processEnd');
    };
    World.prototype.addUI = function (ui) {
        this.UIs.push(ui);
        ui.bind(this);
    };
    World.prototype.removeUI = function (ui) {
        this.UIs = this.UIs.filter(function (u) {
            return u !== ui;
        });
    };
    World.prototype.importComponents = function (components) {
        for (var key in components) {
            this.componentManager.createMapper(components[key]);
        }
    };
    World.prototype.clean = function () {
        this.UIs = [];
        this.entityManager.clean();
        this.componentManager.clean();
        this.tagManager.clean();
    };
    World.prototype.loadScenes = function (scenesClass, bundle) {
        var _this = this;
        this.scenes = scenesClass.map(function (c) {
            return new c(_this);
        });
        this.entityBundle = bundle;
    };
    World.prototype.getCurrentScene = function () {
        return this.scenes[this.sceneIndex];
    };
    World.prototype.startScene = function () {
        this.sceneIndex = 0;
        var scene = this.getCurrentScene();
        scene.init(this.entityBundle);
        scene.start();
    };
    World.prototype.nextScene = function () {
        var current = this.scenes[this.sceneIndex];
        current.cleanEntities();
        current.pause();
        this.sceneIndex++;
        if (this.sceneIndex === this.scenes.length) {
            this.sceneIndex = 0;
        }
        var scene = this.scenes[this.sceneIndex];
        scene.init(this.entityBundle);
        scene.start();
    };
    return World;
}();
exports.default = World;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _EntityEditor = __webpack_require__(4);

var _EntityEditor2 = _interopRequireDefault(_EntityEditor);

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
        return new _EntityEditor2.default(entity, this.world);
    };
    EntityManager.prototype.clean = function () {
        this.entities = [];
    };
    EntityManager.prototype.remove = function (entity) {
        var index = this.entities.indexOf(entity);
        if (index > -1) {
            this.entities.splice(index, 1);
            this.world.getTagManager().remove(entity);
            this.world.getComponentManager().removeEntity(entity);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagManager = /** @class */function () {
    function TagManager() {
        this.tags = {};
    }
    TagManager.prototype.addTag = function (tag, entity) {
        if (!this.tags[tag]) {
            this.tags[tag] = [];
        }
        var group = this.tags[tag];
        if (group.indexOf(entity) === -1) {
            group.push(entity);
        }
    };
    TagManager.prototype.remove = function (entity) {
        var _this = this;
        (0, _keys2.default)(this.tags).forEach(function (tag) {
            _this.tags[tag] = _this.tags[tag].filter(function (item) {
                return item !== entity;
            });
        });
    };
    TagManager.prototype.is = function (entity, tag) {
        if (!this.tags[tag]) {
            return false;
        }
        return this.tags[tag].indexOf(entity) > -1;
    };
    TagManager.prototype.getByTag = function (tag) {
        return this.tags[tag] || [];
    };
    TagManager.prototype.clean = function () {
        this.tags = {};
    };
    return TagManager;
}();
exports.default = TagManager;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
module.exports = __webpack_require__(3).Object.keys;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(36);
var $keys = __webpack_require__(19);

__webpack_require__(67)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(12);
var core = __webpack_require__(3);
var fails = __webpack_require__(16);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _ComponentMapper = __webpack_require__(69);

var _ComponentMapper2 = _interopRequireDefault(_ComponentMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentManager = /** @class */function () {
    function ComponentManager() {
        this.componentMappers = {};
    }
    ComponentManager.prototype.create = function (component, entity) {
        var cm = this.componentMappers[component.className];
        if (!cm) {
            cm = new _ComponentMapper2.default();
            this.componentMappers[component.className] = cm;
        }
        cm.add(component, entity);
    };
    ComponentManager.prototype.createMapper = function (componentClass) {
        var cm = this.componentMappers[componentClass.name];
        if (!cm) {
            this.componentMappers[componentClass.name] = new _ComponentMapper2.default();
        }
    };
    ComponentManager.prototype.getComponent = function (componentClass, entity) {
        return this.componentMappers[componentClass.name].get(entity);
    };
    ComponentManager.prototype.removeComponent = function (componentClass, entity) {
        return this.componentMappers[componentClass.name].remove(entity);
    };
    ComponentManager.prototype.removeEntity = function (entity) {
        var _this = this;
        (0, _keys2.default)(this.componentMappers).forEach(function (key) {
            _this.componentMappers[key].remove(entity);
        });
    };
    ComponentManager.prototype.getMappers = function () {
        return this.componentMappers;
    };
    ComponentManager.prototype.clean = function () {
        var _this = this;
        (0, _keys2.default)(this.componentMappers).forEach(function (key) {
            _this.componentMappers[key].clean();
        });
    };
    return ComponentManager;
}();
exports.default = ComponentManager;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(10);

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
        var result = this.maps[entity];
        delete this.maps[entity];
        return result;
    };
    ComponentMapper.prototype.getEntityIds = function () {
        return (0, _keys2.default)(this.maps).map(function (id) {
            return +id;
        });
    };
    ComponentMapper.prototype.clean = function () {
        this.maps = {};
    };
    return ComponentMapper;
}();
exports.default = ComponentMapper;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
var $Object = __webpack_require__(3).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(72) });


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(14);
var dPs = __webpack_require__(73);
var enumBugKeys = __webpack_require__(34);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(27)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(74).appendChild(iframe);
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(25);
var anObject = __webpack_require__(14);
var getKeys = __webpack_require__(19);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(13).document;
module.exports = document && document.documentElement;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
module.exports = __webpack_require__(3).Object.setPrototypeOf;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(12);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(77).set });


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(15);
var anObject = __webpack_require__(14);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(24)(Function.call, __webpack_require__(78).f(Object.prototype, '__proto__').set, 2);
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(35);
var createDesc = __webpack_require__(29);
var toIObject = __webpack_require__(20);
var toPrimitive = __webpack_require__(28);
var has = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(26);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(2);

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

var Payload = /** @class */function (_super) {
    __extends(Payload, _super);
    function Payload(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    return Payload;
}(_Component2.default);
exports.default = Payload;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Component = __webpack_require__(2);

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

var RigidBody = /** @class */function (_super) {
    __extends(RigidBody, _super);
    function RigidBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigidBody;
}(_Component2.default);
exports.default = RigidBody;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _System = __webpack_require__(7);

var _System2 = _interopRequireDefault(_System);

var _Aspect = __webpack_require__(8);

var _Aspect2 = _interopRequireDefault(_Aspect);

var _Position = __webpack_require__(6);

var _Position2 = _interopRequireDefault(_Position);

var _Paint = __webpack_require__(38);

var _Paint2 = _interopRequireDefault(_Paint);

var _Bound = __webpack_require__(21);

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
    RenderSystem.prototype.handleAnimation = function (entity, ctx, paint, position, bound) {
        var c = paint.animationCount;
        var d = paint.animationDuration;
        if (paint.animation === 'shake') {
            ctx.translate(Math.cos(1 * c) + Math.cos(3 * c), Math.sin(0.5 * c) + Math.sin(0.571 * c));
            paint.animationCount++;
        }
        if (paint.animation === 'fadeOut') {
            ctx.globalAlpha = Math.max(d - c, 0) / c;
            paint.animationCount++;
        }
        if (paint.animationCount >= paint.animationDuration) {
            this.world.eventBus.emit('animationEnd', entity);
            paint.animation = null;
        }
    };
    RenderSystem.prototype.handleState = function (entity, ctx, paint, position, bound) {
        if (paint.state === 'reverse') {
            ctx.translate(bound.centerX(), 0);
            ctx.scale(-1, 1);
            ctx.translate(-bound.centerX(), 0);
        }
    };
    RenderSystem.prototype.process = function (entity) {
        var ctx = this.ctx;
        var position = this.positionMapper.get(entity);
        var paint = this.paintMapper.get(entity);
        var bound = this.boundMapper.get(entity);
        ctx.save();
        ctx.translate(position.x, position.y);
        ctx.globalAlpha = paint.opacity;
        if (paint.animation) {
            this.handleAnimation(entity, ctx, paint, position, bound);
        }
        if (paint.state) {
            this.handleState(entity, ctx, paint, position, bound);
        }
        var renderOptions = paint.renderOptions;
        if (paint.type === 'image') {
            if (renderOptions) {
                ctx.drawImage(paint.img, renderOptions.sx, renderOptions.sy, renderOptions.sw, renderOptions.sh, 0, 0, bound.x2, bound.y2);
            } else {
                ctx.drawImage(paint.img, 0, 0, bound.x2, bound.y2);
            }
        } else if (paint.type === 'rect') {
            ctx.fillStyle = renderOptions.color;
            ctx.fillRect(0, 0, bound.x2, bound.y2);
        }
        ctx.restore();
    };
    return RenderSystem;
}(_System2.default);
exports.default = RenderSystem;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _System = __webpack_require__(7);

var _System2 = _interopRequireDefault(_System);

var _Aspect = __webpack_require__(8);

var _Aspect2 = _interopRequireDefault(_Aspect);

var _Position = __webpack_require__(6);

var _Position2 = _interopRequireDefault(_Position);

var _Physical = __webpack_require__(22);

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
        var gravity = this.gravityMapper.get(entity);
        if (gravity) {
            physical.vy += 0.2;
        }
        position.x += physical.vx;
        position.y += physical.vy;
    };
    return PhysicalSystem;
}(_System2.default);
exports.default = PhysicalSystem;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _System = __webpack_require__(7);

var _System2 = _interopRequireDefault(_System);

var _Aspect = __webpack_require__(8);

var _Aspect2 = _interopRequireDefault(_Aspect);

var _Position = __webpack_require__(6);

var _Position2 = _interopRequireDefault(_Position);

var _Bound = __webpack_require__(21);

var _Bound2 = _interopRequireDefault(_Bound);

var _WallSensor = __webpack_require__(39);

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
        var screenSize = this.renderSystem.getSize();
        if (position.y > screenSize.y2) {
            this.entityManager.remove(entity);
        }
    };
    return WallSensorSystem;
}(_System2.default);
exports.default = WallSensorSystem;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _System = __webpack_require__(7);

var _System2 = _interopRequireDefault(_System);

var _Aspect = __webpack_require__(8);

var _Aspect2 = _interopRequireDefault(_Aspect);

var _EntityEditor = __webpack_require__(4);

var _EntityEditor2 = _interopRequireDefault(_EntityEditor);

var _Spawner = __webpack_require__(40);

var _Spawner2 = _interopRequireDefault(_Spawner);

var _Position = __webpack_require__(6);

var _Position2 = _interopRequireDefault(_Position);

var _Physical = __webpack_require__(22);

var _Physical2 = _interopRequireDefault(_Physical);

var _Gravity = __webpack_require__(42);

var _Gravity2 = _interopRequireDefault(_Gravity);

var _entityFactory = __webpack_require__(11);

var _entityFactory2 = _interopRequireDefault(_entityFactory);

var _math = __webpack_require__(43);

var _math2 = _interopRequireDefault(_math);

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
            spawner.cooldown = _math2.default.getRandomInt(spawner.minCooldown, spawner.maxCooldown);
            var item = _entityFactory2.default.createItem(this.world.getCurrentScene());
            this.tagManager.addTag('item', item);
            if (spawner.type === 'massItem') {
                var editor = new _EntityEditor2.default(item, this.world);
                editor.setComponent(_Position2.default, {
                    x: canvas.width / 2 - 20,
                    y: 200
                }).setComponent(_Physical2.default, {
                    vx: _math2.default.getRandom(-1.5, 1.5),
                    vy: -10
                }).add(new _Gravity2.default());
            }
        }
    };
    return SpawnerSystem;
}(_System2.default);
exports.default = SpawnerSystem;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _System = __webpack_require__(7);

var _System2 = _interopRequireDefault(_System);

var _Aspect = __webpack_require__(8);

var _Aspect2 = _interopRequireDefault(_Aspect);

var _PlayerController = __webpack_require__(41);

var _PlayerController2 = _interopRequireDefault(_PlayerController);

var _Position = __webpack_require__(6);

var _Position2 = _interopRequireDefault(_Position);

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

var PlayerControllerSystem = /** @class */function (_super) {
    __extends(PlayerControllerSystem, _super);
    function PlayerControllerSystem(canvas) {
        var _this = _super.call(this, _Aspect2.default.all(_PlayerController2.default)) || this;
        _this.finger = new _Position2.default(0, 0);
        _this.isControl = false;
        _this.initTouchEvents(canvas);
        return _this;
    }
    PlayerControllerSystem.prototype.initTouchEvents = function (canvas) {
        var _this = this;
        var movePlayer = function movePlayer(e) {
            e.preventDefault();
            _this.finger.x = e.touches[0].clientX;
            _this.finger.y = e.touches[0].clientY;
            _this.isControl = true;
        };
        var leaveControl = function leaveControl(e) {
            _this.finger.x = null;
            _this.finger.y = null;
            _this.isControl = false;
        };
        canvas.addEventListener('touchstart', movePlayer);
        canvas.addEventListener('touchmove', movePlayer);
        canvas.addEventListener('touchend', leaveControl);
    };
    PlayerControllerSystem.prototype.process = function (entity) {
        var physical = this.physicalMapper.get(entity);
        var position = this.positionMapper.get(entity);
        var bound = this.boundMapper.get(entity);
        if (!this.isControl) {
            physical.vx = 0;
            return;
        }
        var centerX = bound.centerX() + position.x;
        var delta = this.finger.x - centerX;
        if (Math.abs(delta) < 10) {
            physical.vx = 0;
        } else {
            var direction = delta / Math.abs(delta);
            var speed = Math.min(5, Math.abs(physical.vx) + 0.5);
            physical.vx = direction * speed;
            var paint = this.paintMapper.get(entity);
            paint.state = direction > 0 ? 'reverse' : null;
        }
    };
    return PlayerControllerSystem;
}(_System2.default);
exports.default = PlayerControllerSystem;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _System = __webpack_require__(7);

var _System2 = _interopRequireDefault(_System);

var _Aspect = __webpack_require__(8);

var _Aspect2 = _interopRequireDefault(_Aspect);

var _EntityEditor = __webpack_require__(4);

var _EntityEditor2 = _interopRequireDefault(_EntityEditor);

var _index = __webpack_require__(5);

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
        return _super.call(this, _Aspect2.default.all(_index.Position, _index.Bound, _index.RigidBody)) || this;
    }
    CollisionSystem.prototype.process = function (entity) {
        var _this = this;
        if (!this.tagManager.is(entity, 'player')) {
            return;
        }
        var player = entity;
        this.tagManager.getByTag('item').forEach(function (item) {
            if (!_this.rigidBodyMapper.get(item)) {
                return;
            }
            if (_this.overlap(item, player)) {
                var playerPayload = _this.payloadMapper.get(player).data;
                var itemPayload = _this.payloadMapper.get(item).data;
                playerPayload.score += itemPayload.bonus;
                if (playerPayload.catched[itemPayload.type]) {
                    playerPayload.catched[itemPayload.type]++;
                } else {
                    playerPayload.catched[itemPayload.type] = 1;
                }
                var editor = new _EntityEditor2.default(item, _this.world);
                editor.removeComponent(_index.RigidBody).removeComponent(_index.Gravity).setComponent(_index.Physical, {
                    vx: 0,
                    vy: -5
                }).setComponent(_index.Paint, {
                    animation: 'fadeOut',
                    animationCount: 5,
                    animationDuration: 15
                });
                var removeEvent_1 = _this.world.eventBus.on('animationEnd', function (entity) {
                    if (entity === item) {
                        _this.entityManager.remove(item);
                        removeEvent_1();
                    }
                });
            }
        });
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
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Scene = __webpack_require__(23);

var _Scene2 = _interopRequireDefault(_Scene);

var _Text = __webpack_require__(45);

var _Text2 = _interopRequireDefault(_Text);

var _EntityEditor = __webpack_require__(4);

var _EntityEditor2 = _interopRequireDefault(_EntityEditor);

var _index = __webpack_require__(5);

var _entityFactory = __webpack_require__(11);

var _entityFactory2 = _interopRequireDefault(_entityFactory);

var _Input = __webpack_require__(44);

var _Input2 = _interopRequireDefault(_Input);

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

var COUNTDOWN = 10;
var Main = /** @class */function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.input = new _Input2.default();
        return _this;
    }
    Main.prototype.init = function (entityBundle) {
        this.pot = _entityFactory2.default.createPot(this);
        this.bg = entityBundle.bg;
        this.player = entityBundle.player;
        var editor = new _EntityEditor2.default(this.player, this.world);
        editor.add(new _index.PlayerController());
        this.startSection1();
    };
    Main.prototype.startSection1 = function () {
        var _this = this;
        this.section = 1;
        var _a = this,
            pot = _a.pot,
            bg = _a.bg;
        this.input.on('click', function (e) {
            var position = _this.world.getComponent(_index.Position, pot);
            var bound = _this.world.getComponent(_index.Bound, pot);
            if (bound && bound.isIn(position, e)) {
                _this.startSection2();
            }
        });
        if (this.world.getComponent(_index.Position, bg).y < 0) {
            var editor_1 = new _EntityEditor2.default(bg, this.world);
            editor_1.setComponent(_index.Physical, {
                vx: 0,
                vy: 10
            });
            var removeEvent_1 = this.world.eventBus.on('processBegin', function () {
                if (_this.world.getComponent(_index.Position, _this.bg).y + 10 >= 0) {
                    editor_1.setComponent(_index.Physical, {
                        vx: 0,
                        vy: 0
                    }).setComponent(_index.Position, {
                        x: 0,
                        y: 0
                    });
                    removeEvent_1();
                }
            });
        }
    };
    Main.prototype.startSection2 = function () {
        var _this = this;
        if (this.section !== 1) {
            return;
        }
        this.section = 2;
        var _a = this,
            pot = _a.pot,
            world = _a.world;
        this.initCountDown();
        var editor = new _EntityEditor2.default(pot, world);
        editor.setComponent(_index.Paint, {
            animation: 'shake',
            animationDuration: Infinity
        });
        this.itemSpawner = _entityFactory2.default.createMassItemsSpawner(this);
        this.scoreText = new _Text2.default('', {
            fillStyle: '#eee',
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'Monaco',
            x: 20,
            y: 40
        });
        world.addUI(this.scoreText);
        var removeEvent = world.eventBus.on('processEnd', function () {
            _this.scoreText.text = _this.world.getComponent(_index.Payload, _this.player).data.score;
            if (_this.section !== 2) {
                removeEvent();
            }
        });
    };
    Main.prototype.startStatistics = function () {
        var _this = this;
        this.section = 3;
        var world = this.world;
        var editor = new _EntityEditor2.default(this.bg, world);
        editor.setComponent(_index.Physical, {
            vx: 0,
            vy: -4
        });
        var potEditor = new _EntityEditor2.default(this.pot, world);
        potEditor.setComponent(_index.Paint, {
            animation: 'fadeOut',
            animationCount: 0,
            animationDuration: 30
        });
        var removeAnimationEvent = this.world.eventBus.on('animationEnd', function (entity) {
            if (entity === _this.pot) {
                _this.world.getEntityManager().remove(_this.pot);
                removeAnimationEvent();
            }
        });
        world.removeUI(this.countDownText);
        world.removeUI(this.scoreText);
        var removeEvent = this.world.eventBus.on('processEnd', function () {
            if (_this.world.getComponent(_index.Position, _this.bg).y + _this.world.getComponent(_index.Bound, _this.bg).height() <= 150) {
                editor.setComponent(_index.Physical, {
                    vx: 0,
                    vy: 0
                });
                removeEvent();
                world.nextScene();
            }
        });
    };
    Main.prototype.initCountDown = function () {
        var _this = this;
        var world = this.world;
        var startAt = world.totalFrames;
        var countDownText = new _Text2.default('', {
            fillStyle: '#f8e879',
            fontSize: 60,
            fontFamily: 'Monaco',
            textAlign: 'center',
            x: canvas.width / 2,
            y: 100
        });
        this.countDownText = countDownText;
        world.addUI(countDownText);
        var removeEvent = world.eventBus.on('processBegin', function () {
            var countDown = COUNTDOWN - Math.floor((world.totalFrames - startAt) / 60);
            countDownText.text = countDown;
            if (countDown === 0) {
                removeEvent();
                _this.world.getEntityManager().remove(_this.itemSpawner);
                countDownText.text = '时间到!';
                countDownText.textOption.fontSize = 30;
                var potEditor = new _EntityEditor2.default(_this.pot, world);
                potEditor.setComponent(_index.Paint, {
                    animation: null
                });
                var removeCheckEvent_1 = _this.world.eventBus.on('processEnd', function () {
                    if (_this.world.getTagManager().getByTag('item').length === 0) {
                        _this.startStatistics();
                        removeCheckEvent_1();
                    }
                });
            }
        });
    };
    return Main;
}(_Scene2.default);
exports.default = Main;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var UI = /** @class */function () {
    function UI() {}
    UI.prototype.bind = function (world) {
        this.world = world;
    };
    UI.prototype.destroy = function () {
        this.world.removeUI(this);
    };
    return UI;
}();
exports.default = UI;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(1);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _Scene = __webpack_require__(23);

var _Scene2 = _interopRequireDefault(_Scene);

var _EntityEditor = __webpack_require__(4);

var _EntityEditor2 = _interopRequireDefault(_EntityEditor);

var _Text = __webpack_require__(45);

var _Text2 = _interopRequireDefault(_Text);

var _index = __webpack_require__(5);

var _entityFactory = __webpack_require__(11);

var _entityFactory2 = _interopRequireDefault(_entityFactory);

var _Input = __webpack_require__(44);

var _Input2 = _interopRequireDefault(_Input);

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

var Statistics = /** @class */function (_super) {
    __extends(Statistics, _super);
    function Statistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Statistics.prototype.init = function () {
        var _this = this;
        var world = this.world;
        this.player = world.getTagManager().getByTag('player')[0];
        var playerEditor = new _EntityEditor2.default(this.player, world);
        playerEditor.removeComponent(_index.PlayerController).setComponent(_index.Physical, {
            vx: 0,
            vy: 0
        });
        var catched = world.getComponent(_index.Payload, this.player).data.catched;
        // const catched = { bomb: 30, gold: 40, lucky: 5 }
        var entities = [];
        var yCoord = 80;
        var scoreText = new _Text2.default('0', {
            fillStyle: '#db4635',
            fontSize: 60,
            fontFamily: 'Monaco',
            textAlign: 'center',
            x: canvas.width / 2,
            y: yCoord
        });
        world.addUI(scoreText);
        yCoord += 30;
        var rowWidth = canvas.width - 40;
        (0, _keys2.default)(catched).forEach(function (key) {
            var length = catched[key];
            var itemLength = Math.min(rowWidth / length, 20);
            for (var i = 0; i < length; i++) {
                var itemEntity = _entityFactory2.default.createItem(_this, key);
                entities.push(itemEntity);
                var itemBound = world.getComponent(_index.Bound, itemEntity);
                var editor = new _EntityEditor2.default(itemEntity, _this.world);
                editor.setComponent(_index.Position, {
                    x: i * itemLength + 10,
                    y: yCoord
                }).setComponent(_index.Paint, {
                    opacity: 0
                });
                if (i === length - 1) {
                    yCoord += itemBound.height() + 10;
                }
            }
        });
        entities.forEach(function (entity, index) {
            setTimeout(function () {
                var editor = new _EntityEditor2.default(entity, _this.world);
                editor.setComponent(_index.Paint, {
                    opacity: 1
                });
                scoreText.text = Number(scoreText.text) + world.getComponent(_index.Payload, entity).data.bonus;
            }, index * 100);
        });
        var againBtn = null;
        setTimeout(function () {
            againBtn = _entityFactory2.default.createPlayAgainBtn(_this, new _index.Position(canvas.width / 2 - 32, yCoord + 40));
        }, entities.length * 100 + 200);
        var input = new _Input2.default();
        var removeClickEvent = input.on('click', function (e) {
            var position = _this.world.getComponent(_index.Position, againBtn);
            var bound = _this.world.getComponent(_index.Bound, againBtn);
            if (bound && bound.isIn(position, e)) {
                world.removeUI(scoreText);
                world.getEntityManager().remove(againBtn);
                world.nextScene();
                removeClickEvent();
            }
        });
    };
    return Statistics;
}(_Scene2.default);
exports.default = Statistics;

/***/ })
/******/ ]);