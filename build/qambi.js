(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.sequencer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/lib/babel/polyfill.js":[function(require,module,exports){
(function (global){
"use strict";

if (global._babelPolyfill) {
  throw new Error("only one instance of babel/polyfill is allowed");
}
global._babelPolyfill = true;

require("core-js/shim");

require("regenerator-babel/runtime");
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"core-js/shim":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/shim.js","regenerator-babel/runtime":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/regenerator-babel/runtime.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.array-includes.js":[function(require,module,exports){
'use strict';
// false -> Array#indexOf
// true  -> Array#includes
var $ = require('./$');
module.exports = function(IS_INCLUDES){
  return function(el /*, fromIndex = 0 */){
    var O      = $.toObject(this)
      , length = $.toLength(O.length)
      , index  = $.toIndex(arguments[1], length)
      , value;
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index;
    } return !IS_INCLUDES && -1;
  };
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.array-methods.js":[function(require,module,exports){
'use strict';
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var $   = require('./$')
  , ctx = require('./$.ctx');
module.exports = function(TYPE){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
  return function(callbackfn/*, that = undefined */){
    var O      = Object($.assertDefined(this))
      , self   = $.ES5Object(O)
      , f      = ctx(callbackfn, arguments[1], 3)
      , length = $.toLength(self.length)
      , index  = 0
      , result = IS_MAP ? Array(length) : IS_FILTER ? [] : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.ctx":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.ctx.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assert.js":[function(require,module,exports){
var $ = require('./$');
function assert(condition, msg1, msg2){
  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
}
assert.def = $.assertDefined;
assert.fn = function(it){
  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
  return it;
};
assert.obj = function(it){
  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
assert.inst = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
module.exports = assert;
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assign.js":[function(require,module,exports){
var $ = require('./$');
// 19.1.2.1 Object.assign(target, source, ...)
module.exports = Object.assign || function(target, source){ // eslint-disable-line no-unused-vars
  var T = Object($.assertDefined(target))
    , l = arguments.length
    , i = 1;
  while(l > i){
    var S      = $.ES5Object(arguments[i++])
      , keys   = $.getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)T[key = keys[j++]] = S[key];
  }
  return T;
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.cof.js":[function(require,module,exports){
var $        = require('./$')
  , TAG      = require('./$.wks')('toStringTag')
  , toString = {}.toString;
function cof(it){
  return toString.call(it).slice(8, -1);
}
cof.classof = function(it){
  var O, T;
  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
};
cof.set = function(it, tag, stat){
  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
};
module.exports = cof;
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.wks":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.wks.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.collection-strong.js":[function(require,module,exports){
'use strict';
var $        = require('./$')
  , ctx      = require('./$.ctx')
  , safe     = require('./$.uid').safe
  , assert   = require('./$.assert')
  , $iter    = require('./$.iter')
  , has      = $.has
  , set      = $.set
  , isObject = $.isObject
  , hide     = $.hide
  , step     = $iter.step
  , isFrozen = Object.isFrozen || $.core.Object.isFrozen
  , ID       = safe('id')
  , O1       = safe('O1')
  , LAST     = safe('last')
  , FIRST    = safe('first')
  , ITER     = safe('iter')
  , SIZE     = $.DESC ? safe('size') : 'size'
  , id       = 0;

function fastKey(it, create){
  // return primitive with prefix
  if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
  // can't set id to frozen object
  if(isFrozen(it))return 'F';
  if(!has(it, ID)){
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
}

function getEntry(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index != 'F')return that[O1][index];
  // frozen object case
  for(entry = that[FIRST]; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
}

module.exports = {
  getConstructor: function(NAME, IS_MAP, ADDER){
    function C(iterable){
      var that = assert.inst(this, C, NAME);
      set(that, O1, $.create(null));
      set(that, SIZE, 0);
      set(that, LAST, undefined);
      set(that, FIRST, undefined);
      if(iterable != undefined)$iter.forOf(iterable, IS_MAP, that[ADDER], that);
    }
    $.mix(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function(){
        for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that[FIRST] = that[LAST] = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that[O1][entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that[FIRST] == entry)that[FIRST] = next;
          if(that[LAST] == entry)that[LAST] = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments[1], 3)
          , entry;
        while(entry = entry ? entry.n : this[FIRST]){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function(key){
        return !!getEntry(this, key);
      }
    });
    if($.DESC)$.setDesc(C.prototype, 'size', {
      get: function(){
        return assert.def(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that[LAST] = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that[LAST],          // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that[FIRST])that[FIRST] = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index != 'F')that[O1][index] = entry;
    } return that;
  },
  getEntry: getEntry,
  getIterConstructor: function(){
    return function(iterated, kind){
      set(this, ITER, {o: iterated, k: kind});
    };
  },
  next: function(){
    var iter  = this[ITER]
      , kind  = iter.k
      , entry = iter.l;
    // revert to the last existing entry
    while(entry && entry.r)entry = entry.p;
    // get next entry
    if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
      // or finish the iteration
      iter.o = undefined;
      return step(1);
    }
    // return step by kind
    if(kind == 'key'  )return step(0, entry.k);
    if(kind == 'value')return step(0, entry.v);
    return step(0, [entry.k, entry.v]);
  }
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.assert":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assert.js","./$.ctx":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.ctx.js","./$.iter":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.iter.js","./$.uid":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.uid.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.collection-weak.js":[function(require,module,exports){
'use strict';
var $         = require('./$')
  , safe      = require('./$.uid').safe
  , assert    = require('./$.assert')
  , forOf     = require('./$.iter').forOf
  , has       = $.has
  , isObject  = $.isObject
  , hide      = $.hide
  , isFrozen  = Object.isFrozen || $.core.Object.isFrozen
  , id        = 0
  , ID        = safe('id')
  , WEAK      = safe('weak')
  , LEAK      = safe('leak')
  , method    = require('./$.array-methods')
  , find      = method(5)
  , findIndex = method(6);
function findFrozen(store, key){
  return find.call(store.array, function(it){
    return it[0] === key;
  });
}
// fallback for frozen keys
function leakStore(that){
  return that[LEAK] || hide(that, LEAK, {
    array: [],
    get: function(key){
      var entry = findFrozen(this, key);
      if(entry)return entry[1];
    },
    has: function(key){
      return !!findFrozen(this, key);
    },
    set: function(key, value){
      var entry = findFrozen(this, key);
      if(entry)entry[1] = value;
      else this.array.push([key, value]);
    },
    'delete': function(key){
      var index = findIndex.call(this.array, function(it){
        return it[0] === key;
      });
      if(~index)this.array.splice(index, 1);
      return !!~index;
    }
  })[LEAK];
}

module.exports = {
  getConstructor: function(NAME, IS_MAP, ADDER){
    function C(iterable){
      $.set(assert.inst(this, C, NAME), ID, id++);
      if(iterable != undefined)forOf(iterable, IS_MAP, this[ADDER], this);
    }
    $.mix(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        if(isFrozen(key))return leakStore(this)['delete'](key);
        return has(key, WEAK) && has(key[WEAK], this[ID]) && delete key[WEAK][this[ID]];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function(key){
        if(!isObject(key))return false;
        if(isFrozen(key))return leakStore(this).has(key);
        return has(key, WEAK) && has(key[WEAK], this[ID]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    if(isFrozen(assert.obj(key))){
      leakStore(that).set(key, value);
    } else {
      has(key, WEAK) || hide(key, WEAK, {});
      key[WEAK][that[ID]] = value;
    } return that;
  },
  leakStore: leakStore,
  WEAK: WEAK,
  ID: ID
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.array-methods":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.array-methods.js","./$.assert":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assert.js","./$.iter":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.iter.js","./$.uid":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.uid.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.collection.js":[function(require,module,exports){
'use strict';
var $     = require('./$')
  , $def  = require('./$.def')
  , $iter = require('./$.iter')
  , assertInstance = require('./$.assert').inst;

module.exports = function(NAME, methods, common, IS_MAP, isWeak){
  var Base  = $.g[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  function fixMethod(KEY, CHAIN){
    var method = proto[KEY];
    if($.FW)proto[KEY] = function(a, b){
      var result = method.call(this, a === 0 ? 0 : a, b);
      return CHAIN ? this : result;
    };
  }
  if(!$.isFunction(C) || !(isWeak || !$iter.BUGGY && proto.forEach && proto.entries)){
    // create collection constructor
    C = common.getConstructor(NAME, IS_MAP, ADDER);
    $.mix(C.prototype, methods);
  } else {
    var inst  = new C
      , chain = inst[ADDER](isWeak ? {} : -0, 1)
      , buggyZero;
    // wrap for init collections from iterable
    if($iter.fail(function(iter){
      new C(iter); // eslint-disable-line no-new
    }) || $iter.DANGER_CLOSING){
      C = function(iterable){
        assertInstance(this, C, NAME);
        var that = new Base;
        if(iterable != undefined)$iter.forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      };
      C.prototype = proto;
      if($.FW)proto.constructor = C;
    }
    isWeak || inst.forEach(function(val, key){
      buggyZero = 1 / key === -Infinity;
    });
    // fix converting -0 key to +0
    if(buggyZero){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    // + fix .add & .set for chaining
    if(buggyZero || chain !== inst)fixMethod(ADDER, true);
  }

  require('./$.cof').set(C, NAME);
  require('./$.species')(C);

  O[NAME] = C;
  $def($def.G + $def.W + $def.F * (C != Base), O);

  // add .keys, .values, .entries, [@@iterator]
  // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
  if(!isWeak)$iter.std(
    C, NAME,
    common.getIterConstructor(), common.next,
    IS_MAP ? 'key+value' : 'value' , !IS_MAP, true
  );

  return C;
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.assert":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assert.js","./$.cof":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.cof.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.iter":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.iter.js","./$.species":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.species.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.ctx.js":[function(require,module,exports){
// Optional / simple context binding
var assertFunction = require('./$.assert').fn;
module.exports = function(fn, that, length){
  assertFunction(fn);
  if(~length && that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  } return function(/* ...args */){
      return fn.apply(that, arguments);
    };
};
},{"./$.assert":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assert.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js":[function(require,module,exports){
var $          = require('./$')
  , global     = $.g
  , core       = $.core
  , isFunction = $.isFunction;
function ctx(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
}
global.core = core;
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
function $def(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {}).prototype
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    if(type & $def.B && own)exp = ctx(out, global);
    else exp = type & $def.P && isFunction(out) ? ctx(Function.call, out) : out;
    // extend global
    if(target && !own){
      if(isGlobal)target[key] = out;
      else delete target[key] && $.hide(target, key, out);
    }
    // export
    if(exports[key] != out)$.hide(exports, key, exp);
  }
}
module.exports = $def;
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.fw.js":[function(require,module,exports){
module.exports = function($){
  $.FW   = true;
  $.path = $.g;
  return $;
};
},{}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.invoke.js":[function(require,module,exports){
// Fast apply
// http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
  } return              fn.apply(that, args);
};
},{}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.iter.js":[function(require,module,exports){
'use strict';
var $                 = require('./$')
  , ctx               = require('./$.ctx')
  , cof               = require('./$.cof')
  , $def              = require('./$.def')
  , assertObject      = require('./$.assert').obj
  , SYMBOL_ITERATOR   = require('./$.wks')('iterator')
  , FF_ITERATOR       = '@@iterator'
  , Iterators         = {}
  , IteratorPrototype = {};
// Safari has byggy iterators w/o `next`
var BUGGY = 'keys' in [] && !('next' in [].keys());
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
setIterator(IteratorPrototype, $.that);
function setIterator(O, value){
  $.hide(O, SYMBOL_ITERATOR, value);
  // Add iterator for FF iterator protocol
  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
}
function defineIterator(Constructor, NAME, value, DEFAULT){
  var proto = Constructor.prototype
    , iter  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT] || value;
  // Define iterator
  if($.FW)setIterator(proto, iter);
  if(iter !== value){
    var iterProto = $.getProto(iter.call(new Constructor));
    // Set @@toStringTag to native iterators
    cof.set(iterProto, NAME + ' Iterator', true);
    // FF fix
    if($.FW)$.has(proto, FF_ITERATOR) && setIterator(iterProto, $.that);
  }
  // Plug for library
  Iterators[NAME] = iter;
  // FF & v8 fix
  Iterators[NAME + ' Iterator'] = $.that;
  return iter;
}
function getIterator(it){
  var Symbol  = $.g.Symbol
    , ext     = it[Symbol && Symbol.iterator || FF_ITERATOR]
    , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[cof.classof(it)];
  return assertObject(getIter.call(it));
}
function closeIterator(iterator){
  var ret = iterator['return'];
  if(ret !== undefined)assertObject(ret.call(iterator));
}
function stepCall(iterator, fn, value, entries){
  try {
    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
  } catch(e){
    closeIterator(iterator);
    throw e;
  }
}
var DANGER_CLOSING = true;
!function(){
  try {
    var iter = [1].keys();
    iter['return'] = function(){ DANGER_CLOSING = false; };
    Array.from(iter, function(){ throw 2; });
  } catch(e){ /* empty */ }
}();
var $iter = module.exports = {
  BUGGY: BUGGY,
  DANGER_CLOSING: DANGER_CLOSING,
  fail: function(exec){
    var fail = true;
    try {
      var arr  = [[{}, 1]]
        , iter = arr[SYMBOL_ITERATOR]()
        , next = iter.next;
      iter.next = function(){
        fail = false;
        return next.call(this);
      };
      arr[SYMBOL_ITERATOR] = function(){
        return iter;
      };
      exec(arr);
    } catch(e){ /* empty */ }
    return fail;
  },
  Iterators: Iterators,
  prototype: IteratorPrototype,
  step: function(done, value){
    return {value: value, done: !!done};
  },
  stepCall: stepCall,
  close: closeIterator,
  is: function(it){
    var O      = Object(it)
      , Symbol = $.g.Symbol
      , SYM    = Symbol && Symbol.iterator || FF_ITERATOR;
    return SYM in O || SYMBOL_ITERATOR in O || $.has(Iterators, cof.classof(O));
  },
  get: getIterator,
  set: setIterator,
  create: function(Constructor, NAME, next, proto){
    Constructor.prototype = $.create(proto || $iter.prototype, {next: $.desc(1, next)});
    cof.set(Constructor, NAME + ' Iterator');
  },
  define: defineIterator,
  std: function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
    function createIter(kind){
      return function(){
        return new Constructor(this, kind);
      };
    }
    $iter.create(Constructor, NAME, next);
    var entries = createIter('key+value')
      , values  = createIter('value')
      , proto   = Base.prototype
      , methods, key;
    if(DEFAULT == 'value')values = defineIterator(Base, NAME, values, 'values');
    else entries = defineIterator(Base, NAME, entries, 'entries');
    if(DEFAULT){
      methods = {
        entries: entries,
        keys:    IS_SET ? values : createIter('key'),
        values:  values
      };
      $def($def.P + $def.F * BUGGY, NAME, methods);
      if(FORCE)for(key in methods){
        if(!(key in proto))$.hide(proto, key, methods[key]);
      }
    }
  },
  forOf: function(iterable, entries, fn, that){
    var iterator = getIterator(iterable)
      , f = ctx(fn, that, entries ? 2 : 1)
      , step;
    while(!(step = iterator.next()).done){
      if(stepCall(iterator, f, step.value, entries) === false){
        return closeIterator(iterator);
      }
    }
  }
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.assert":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assert.js","./$.cof":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.cof.js","./$.ctx":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.ctx.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.wks":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.wks.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js":[function(require,module,exports){
'use strict';
var global = typeof self != 'undefined' ? self : Function('return this')()
  , core   = {}
  , defineProperty = Object.defineProperty
  , hasOwnProperty = {}.hasOwnProperty
  , ceil  = Math.ceil
  , floor = Math.floor
  , max   = Math.max
  , min   = Math.min;
// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
var DESC = !!function(){
  try {
    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
  } catch(e){ /* empty */ }
}();
var hide = createDefiner(1);
// 7.1.4 ToInteger
function toInteger(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
}
function desc(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
}
function simpleSet(object, key, value){
  object[key] = value;
  return object;
}
function createDefiner(bitmap){
  return DESC ? function(object, key, value){
    return $.setDesc(object, key, desc(bitmap, value)); // eslint-disable-line no-use-before-define
  } : simpleSet;
}

function isObject(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
}
function isFunction(it){
  return typeof it == 'function';
}
function assertDefined(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
}

var $ = module.exports = require('./$.fw')({
  g: global,
  core: core,
  html: global.document && document.documentElement,
  // http://jsperf.com/core-js-isobject
  isObject:   isObject,
  isFunction: isFunction,
  it: function(it){
    return it;
  },
  that: function(){
    return this;
  },
  // 7.1.4 ToInteger
  toInteger: toInteger,
  // 7.1.15 ToLength
  toLength: function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  },
  toIndex: function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  },
  has: function(it, key){
    return hasOwnProperty.call(it, key);
  },
  create:     Object.create,
  getProto:   Object.getPrototypeOf,
  DESC:       DESC,
  desc:       desc,
  getDesc:    Object.getOwnPropertyDescriptor,
  setDesc:    defineProperty,
  getKeys:    Object.keys,
  getNames:   Object.getOwnPropertyNames,
  getSymbols: Object.getOwnPropertySymbols,
  // Dummy, fix for not array-like ES3 string in es5 module
  assertDefined: assertDefined,
  ES5Object: Object,
  toObject: function(it){
    return $.ES5Object(assertDefined(it));
  },
  hide: hide,
  def: createDefiner(0),
  set: global.Symbol ? simpleSet : hide,
  mix: function(target, src){
    for(var key in src)hide(target, key, src[key]);
    return target;
  },
  each: [].forEach
});
if(typeof __e != 'undefined')__e = core;
if(typeof __g != 'undefined')__g = global;
},{"./$.fw":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.fw.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.keyof.js":[function(require,module,exports){
var $ = require('./$');
module.exports = function(object, el){
  var O      = $.toObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.own-keys.js":[function(require,module,exports){
var $            = require('./$')
  , assertObject = require('./$.assert').obj;
module.exports = function(it){
  assertObject(it);
  return $.getSymbols ? $.getNames(it).concat($.getSymbols(it)) : $.getNames(it);
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.assert":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assert.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.partial.js":[function(require,module,exports){
'use strict';
var $      = require('./$')
  , invoke = require('./$.invoke')
  , assertFunction = require('./$.assert').fn;
module.exports = function(/* ...pargs */){
  var fn     = assertFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = $.path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that    = this
      , _length = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !_length)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(_length > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.assert":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assert.js","./$.invoke":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.invoke.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.replacer.js":[function(require,module,exports){
'use strict';
module.exports = function(regExp, replace, isStatic){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(isStatic ? it : this).replace(regExp, replacer);
  };
};
},{}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.set-proto.js":[function(require,module,exports){
// Works with __proto__ only. Old v8 can't works with null proto objects.
/*eslint-disable no-proto */
var $      = require('./$')
  , assert = require('./$.assert');
module.exports = Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
  ? function(buggy, set){
      try {
        set = require('./$.ctx')(Function.call, $.getDesc(Object.prototype, '__proto__').set, 2);
        set({}, []);
      } catch(e){ buggy = true; }
      return function(O, proto){
        assert.obj(O);
        assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }()
  : undefined);
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.assert":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assert.js","./$.ctx":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.ctx.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.species.js":[function(require,module,exports){
var $ = require('./$');
module.exports = function(C){
  if($.DESC && $.FW)$.setDesc(C, require('./$.wks')('species'), {
    configurable: true,
    get: $.that
  });
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.wks":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.wks.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.string-at.js":[function(require,module,exports){
'use strict';
// true  -> String#at
// false -> String#codePointAt
var $ = require('./$');
module.exports = function(TO_STRING){
  return function(pos){
    var s = String($.assertDefined(this))
      , i = $.toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.task.js":[function(require,module,exports){
'use strict';
var $      = require('./$')
  , ctx    = require('./$.ctx')
  , cof    = require('./$.cof')
  , invoke = require('./$.invoke')
  , global             = $.g
  , isFunction         = $.isFunction
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , postMessage        = global.postMessage
  , addEventListener   = global.addEventListener
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
function run(){
  var id = +this;
  if($.has(queue, id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
}
function listner(event){
  run.call(event.data);
}
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!isFunction(setTask) || !isFunction(clearTask)){
  setTask = function(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(isFunction(fn) ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(cof(global.process) == 'process'){
    defer = function(id){
      global.process.nextTick(ctx(run, id, 1));
    };
  // Modern browsers, skip implementation for WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is object
  } else if(addEventListener && isFunction(postMessage) && !$.g.importScripts){
    defer = function(id){
      postMessage(id, '*');
    };
    addEventListener('message', listner, false);
  // WebWorkers
  } else if(isFunction(MessageChannel)){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // IE8-
  } else if($.g.document && ONREADYSTATECHANGE in document.createElement('script')){
    defer = function(id){
      $.html.appendChild(document.createElement('script'))[ONREADYSTATECHANGE] = function(){
        $.html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.cof":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.cof.js","./$.ctx":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.ctx.js","./$.invoke":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.invoke.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.uid.js":[function(require,module,exports){
var sid = 0;
function uid(key){
  return 'Symbol(' + key + ')_' + (++sid + Math.random()).toString(36);
}
uid.safe = require('./$').g.Symbol || uid;
module.exports = uid;
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.unscope.js":[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var $           = require('./$')
  , UNSCOPABLES = require('./$.wks')('unscopables');
if($.FW && !(UNSCOPABLES in []))$.hide(Array.prototype, UNSCOPABLES, {});
module.exports = function(key){
  if($.FW)[][UNSCOPABLES][key] = true;
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.wks":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.wks.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.wks.js":[function(require,module,exports){
var global = require('./$').g
  , store  = {};
module.exports = function(name){
  return store[name] || (store[name] =
    global.Symbol && global.Symbol[name] || require('./$.uid').safe('Symbol.' + name));
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.uid":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.uid.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es5.js":[function(require,module,exports){
var $                = require('./$')
  , cof              = require('./$.cof')
  , $def             = require('./$.def')
  , invoke           = require('./$.invoke')
  , arrayMethod      = require('./$.array-methods')
  , IE_PROTO         = require('./$.uid').safe('__proto__')
  , assert           = require('./$.assert')
  , assertObject     = assert.obj
  , ObjectProto      = Object.prototype
  , A                = []
  , slice            = A.slice
  , indexOf          = A.indexOf
  , classof          = cof.classof
  , defineProperties = Object.defineProperties
  , has              = $.has
  , defineProperty   = $.setDesc
  , getOwnDescriptor = $.getDesc
  , isFunction       = $.isFunction
  , toObject         = $.toObject
  , toLength         = $.toLength
  , IE8_DOM_DEFINE   = false;

if(!$.DESC){
  try {
    IE8_DOM_DEFINE = defineProperty(document.createElement('div'), 'x',
      {get: function(){ return 8; }}
    ).x == 8;
  } catch(e){ /* empty */ }
  $.setDesc = function(O, P, Attributes){
    if(IE8_DOM_DEFINE)try {
      return defineProperty(O, P, Attributes);
    } catch(e){ /* empty */ }
    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
    if('value' in Attributes)assertObject(O)[P] = Attributes.value;
    return O;
  };
  $.getDesc = function(O, P){
    if(IE8_DOM_DEFINE)try {
      return getOwnDescriptor(O, P);
    } catch(e){ /* empty */ }
    if(has(O, P))return $.desc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
  };
  defineProperties = function(O, Properties){
    assertObject(O);
    var keys   = $.getKeys(Properties)
      , length = keys.length
      , i = 0
      , P;
    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
    return O;
  };
}
$def($def.S + $def.F * !$.DESC, 'Object', {
  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $.getDesc,
  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  defineProperty: $.setDesc,
  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
  defineProperties: defineProperties
});

  // IE 8- don't enum bug keys
var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
            'toLocaleString,toString,valueOf').split(',')
  // Additional keys for getOwnPropertyNames
  , keys2 = keys1.concat('length', 'prototype')
  , keysLen1 = keys1.length;

// Create object with `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = document.createElement('iframe')
    , i      = keysLen1
    , iframeDocument;
  iframe.style.display = 'none';
  $.html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script>');
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict.prototype[keys1[i]];
  return createDict();
};
function createGetKeys(names, length){
  return function(object){
    var O      = toObject(object)
      , i      = 0
      , result = []
      , key;
    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(length > i)if(has(O, key = names[i++])){
      ~indexOf.call(result, key) || result.push(key);
    }
    return result;
  };
}
function isPrimitive(it){ return !$.isObject(it); }
function Empty(){}
$def($def.S, 'Object', {
  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  getPrototypeOf: $.getProto = $.getProto || function(O){
    O = Object(assert.def(O));
    if(has(O, IE_PROTO))return O[IE_PROTO];
    if(isFunction(O.constructor) && O instanceof O.constructor){
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  },
  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  create: $.create = $.create || function(O, /*?*/Properties){
    var result;
    if(O !== null){
      Empty.prototype = assertObject(O);
      result = new Empty();
      Empty.prototype = null;
      // add "__proto__" for Object.getPrototypeOf shim
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : defineProperties(result, Properties);
  },
  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false),
  // 19.1.2.17 / 15.2.3.8 Object.seal(O)
  seal: $.it, // <- cap
  // 19.1.2.5 / 15.2.3.9 Object.freeze(O)
  freeze: $.it, // <- cap
  // 19.1.2.15 / 15.2.3.10 Object.preventExtensions(O)
  preventExtensions: $.it, // <- cap
  // 19.1.2.13 / 15.2.3.11 Object.isSealed(O)
  isSealed: isPrimitive, // <- cap
  // 19.1.2.12 / 15.2.3.12 Object.isFrozen(O)
  isFrozen: isPrimitive, // <- cap
  // 19.1.2.11 / 15.2.3.13 Object.isExtensible(O)
  isExtensible: $.isObject // <- cap
});

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
$def($def.P, 'Function', {
  bind: function(that /*, args... */){
    var fn       = assert.fn(this)
      , partArgs = slice.call(arguments, 1);
    function bound(/* args... */){
      var args = partArgs.concat(slice.call(arguments));
      return invoke(fn, args, this instanceof bound ? $.create(fn.prototype) : that);
    }
    if(fn.prototype)bound.prototype = fn.prototype;
    return bound;
  }
});

// Fix for not array-like ES3 string
function arrayMethodFix(fn){
  return function(){
    return fn.apply($.ES5Object(this), arguments);
  };
}
if(!(0 in Object('z') && 'z'[0] == 'z')){
  $.ES5Object = function(it){
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
}
$def($def.P + $def.F * ($.ES5Object != Object), 'Array', {
  slice: arrayMethodFix(slice),
  join: arrayMethodFix(A.join)
});

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
$def($def.S, 'Array', {
  isArray: function(arg){
    return cof(arg) == 'Array';
  }
});
function createArrayReduce(isRight){
  return function(callbackfn, memo){
    assert.fn(callbackfn);
    var O      = toObject(this)
      , length = toLength(O.length)
      , index  = isRight ? length - 1 : 0
      , i      = isRight ? -1 : 1;
    if(arguments.length < 2)for(;;){
      if(index in O){
        memo = O[index];
        index += i;
        break;
      }
      index += i;
      assert(isRight ? index >= 0 : length > index, 'Reduce of empty array with no initial value');
    }
    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
      memo = callbackfn(memo, O[index], index, this);
    }
    return memo;
  };
}
$def($def.P, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: $.each = $.each || arrayMethod(0),
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: arrayMethod(1),
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: arrayMethod(2),
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: arrayMethod(3),
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: arrayMethod(4),
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: createArrayReduce(false),
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: createArrayReduce(true),
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: indexOf = indexOf || require('./$.array-includes')(false),
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
    var O      = toObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, $.toInteger(fromIndex));
    if(index < 0)index = toLength(length + index);
    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
    return -1;
  }
});

// 21.1.3.25 / 15.5.4.20 String.prototype.trim()
$def($def.P, 'String', {trim: require('./$.replacer')(/^\s*([\s\S]*\S)?\s*$/, '$1')});

// 20.3.3.1 / 15.9.4.4 Date.now()
$def($def.S, 'Date', {now: function(){
  return +new Date;
}});

function lz(num){
  return num > 9 ? num : '0' + num;
}
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
$def($def.P, 'Date', {toISOString: function(){
  if(!isFinite(this))throw RangeError('Invalid time value');
  var d = this
    , y = d.getUTCFullYear()
    , m = d.getUTCMilliseconds()
    , s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
}});

if(classof(function(){ return arguments; }()) == 'Object')cof.classof = function(it){
  var tag = classof(it);
  return tag == 'Object' && isFunction(it.callee) ? 'Arguments' : tag;
};
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.array-includes":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.array-includes.js","./$.array-methods":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.array-methods.js","./$.assert":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assert.js","./$.cof":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.cof.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.invoke":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.invoke.js","./$.replacer":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.replacer.js","./$.uid":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.uid.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.copy-within.js":[function(require,module,exports){
'use strict';
var $       = require('./$')
  , $def    = require('./$.def')
  , toIndex = $.toIndex;
$def($def.P, 'Array', {
  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
  copyWithin: function(target/* = 0 */, start /* = 0, end = @length */){
    var O     = Object($.assertDefined(this))
      , len   = $.toLength(O.length)
      , to    = toIndex(target, len)
      , from  = toIndex(start, len)
      , end   = arguments[2]
      , fin   = end === undefined ? len : toIndex(end, len)
      , count = Math.min(fin - from, len - to)
      , inc   = 1;
    if(from < to && to < from + count){
      inc  = -1;
      from = from + count - 1;
      to   = to   + count - 1;
    }
    while(count-- > 0){
      if(from in O)O[to] = O[from];
      else delete O[to];
      to   += inc;
      from += inc;
    } return O;
  }
});
require('./$.unscope')('copyWithin');
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.unscope":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.unscope.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.fill.js":[function(require,module,exports){
'use strict';
var $       = require('./$')
  , $def    = require('./$.def')
  , toIndex = $.toIndex;
$def($def.P, 'Array', {
  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  fill: function(value /*, start = 0, end = @length */){
    var O      = Object($.assertDefined(this))
      , length = $.toLength(O.length)
      , index  = toIndex(arguments[1], length)
      , end    = arguments[2]
      , endPos = end === undefined ? length : toIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
  }
});
require('./$.unscope')('fill');
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.unscope":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.unscope.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.find-index.js":[function(require,module,exports){
var $def = require('./$.def');
$def($def.P, 'Array', {
  // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
  findIndex: require('./$.array-methods')(6)
});
require('./$.unscope')('findIndex');
},{"./$.array-methods":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.array-methods.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.unscope":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.unscope.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.find.js":[function(require,module,exports){
var $def = require('./$.def');
$def($def.P, 'Array', {
  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
  find: require('./$.array-methods')(5)
});
require('./$.unscope')('find');
},{"./$.array-methods":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.array-methods.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.unscope":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.unscope.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.from.js":[function(require,module,exports){
var $     = require('./$')
  , ctx   = require('./$.ctx')
  , $def  = require('./$.def')
  , $iter = require('./$.iter')
  , stepCall = $iter.stepCall;
$def($def.S + $def.F * $iter.DANGER_CLOSING, 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = Object($.assertDefined(arrayLike))
      , mapfn   = arguments[1]
      , mapping = mapfn !== undefined
      , f       = mapping ? ctx(mapfn, arguments[2], 2) : undefined
      , index   = 0
      , length, result, step, iterator;
    if($iter.is(O)){
      iterator = $iter.get(O);
      // strange IE quirks mode bug -> use typeof instead of isFunction
      result   = new (typeof this == 'function' ? this : Array);
      for(; !(step = iterator.next()).done; index++){
        result[index] = mapping ? stepCall(iterator, f, [step.value, index], true) : step.value;
      }
    } else {
      // strange IE quirks mode bug -> use typeof instead of isFunction
      result = new (typeof this == 'function' ? this : Array)(length = $.toLength(O.length));
      for(; length > index; index++){
        result[index] = mapping ? f(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.ctx":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.ctx.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.iter":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.iter.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.iterator.js":[function(require,module,exports){
var $          = require('./$')
  , setUnscope = require('./$.unscope')
  , ITER       = require('./$.uid').safe('iter')
  , $iter      = require('./$.iter')
  , step       = $iter.step
  , Iterators  = $iter.Iterators;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
$iter.std(Array, 'Array', function(iterated, kind){
  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , kind  = iter.k
    , index = iter.i++;
  if(!O || index >= O.length){
    iter.o = undefined;
    return step(1);
  }
  if(kind == 'key'  )return step(0, index);
  if(kind == 'value')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'value');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

setUnscope('keys');
setUnscope('values');
setUnscope('entries');
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.iter":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.iter.js","./$.uid":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.uid.js","./$.unscope":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.unscope.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.of.js":[function(require,module,exports){
var $def = require('./$.def');
$def($def.S, 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function(/* ...args */){
    var index  = 0
      , length = arguments.length
      // strange IE quirks mode bug -> use typeof instead of isFunction
      , result = new (typeof this == 'function' ? this : Array)(length);
    while(length > index)result[index] = arguments[index++];
    result.length = length;
    return result;
  }
});
},{"./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.species.js":[function(require,module,exports){
require('./$.species')(Array);
},{"./$.species":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.species.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.function.name.js":[function(require,module,exports){
'use strict';
var $    = require('./$')
  , NAME = 'name'
  , setDesc = $.setDesc
  , FunctionProto = Function.prototype;
// 19.2.4.2 name
NAME in FunctionProto || $.FW && $.DESC && setDesc(FunctionProto, NAME, {
  configurable: true,
  get: function(){
    var match = String(this).match(/^\s*function ([^ (]*)/)
      , name  = match ? match[1] : '';
    $.has(this, NAME) || setDesc(this, NAME, $.desc(5, name));
    return name;
  },
  set: function(value){
    $.has(this, NAME) || setDesc(this, NAME, $.desc(0, value));
  }
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.map.js":[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.1 Map Objects
require('./$.collection')('Map', {
  // 23.1.3.6 Map.prototype.get(key)
  get: function(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./$.collection":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.collection.js","./$.collection-strong":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.collection-strong.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.math.js":[function(require,module,exports){
var Infinity = 1 / 0
  , $def  = require('./$.def')
  , E     = Math.E
  , pow   = Math.pow
  , abs   = Math.abs
  , exp   = Math.exp
  , log   = Math.log
  , sqrt  = Math.sqrt
  , ceil  = Math.ceil
  , floor = Math.floor
  , sign  = Math.sign || function(x){
      return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
    };

// 20.2.2.5 Math.asinh(x)
function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
}
// 20.2.2.14 Math.expm1(x)
function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
}

$def($def.S, 'Math', {
  // 20.2.2.3 Math.acosh(x)
  acosh: function(x){
    return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
  },
  // 20.2.2.5 Math.asinh(x)
  asinh: asinh,
  // 20.2.2.7 Math.atanh(x)
  atanh: function(x){
    return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
  },
  // 20.2.2.9 Math.cbrt(x)
  cbrt: function(x){
    return sign(x = +x) * pow(abs(x), 1 / 3);
  },
  // 20.2.2.11 Math.clz32(x)
  clz32: function(x){
    return (x >>>= 0) ? 32 - x.toString(2).length : 32;
  },
  // 20.2.2.12 Math.cosh(x)
  cosh: function(x){
    return (exp(x = +x) + exp(-x)) / 2;
  },
  // 20.2.2.14 Math.expm1(x)
  expm1: expm1,
  // 20.2.2.16 Math.fround(x)
  // TODO: fallback for IE9-
  fround: function(x){
    return new Float32Array([x])[0];
  },
  // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
  hypot: function(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , len1 = arguments.length
      , len2 = len1
      , args = Array(len1)
      , larg = -Infinity
      , arg;
    while(len1--){
      arg = args[len1] = +arguments[len1];
      if(arg == Infinity || arg == -Infinity)return Infinity;
      if(arg > larg)larg = arg;
    }
    larg = arg || 1;
    while(len2--)sum += pow(args[len2] / larg, 2);
    return larg * sqrt(sum);
  },
  // 20.2.2.18 Math.imul(x, y)
  imul: function(x, y){
    var UInt16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UInt16 & xn
      , yl = UInt16 & yn;
    return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
  },
  // 20.2.2.20 Math.log1p(x)
  log1p: function(x){
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
  },
  // 20.2.2.21 Math.log10(x)
  log10: function(x){
    return log(x) / Math.LN10;
  },
  // 20.2.2.22 Math.log2(x)
  log2: function(x){
    return log(x) / Math.LN2;
  },
  // 20.2.2.28 Math.sign(x)
  sign: sign,
  // 20.2.2.30 Math.sinh(x)
  sinh: function(x){
    return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
  },
  // 20.2.2.33 Math.tanh(x)
  tanh: function(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  },
  // 20.2.2.34 Math.trunc(x)
  trunc: function(it){
    return (it > 0 ? floor : ceil)(it);
  }
});
},{"./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.number.constructor.js":[function(require,module,exports){
'use strict';
var $          = require('./$')
  , isObject   = $.isObject
  , isFunction = $.isFunction
  , NUMBER     = 'Number'
  , Number     = $.g[NUMBER]
  , Base       = Number
  , proto      = Number.prototype;
function toPrimitive(it){
  var fn, val;
  if(isFunction(fn = it.valueOf) && !isObject(val = fn.call(it)))return val;
  if(isFunction(fn = it.toString) && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to number");
}
function toNumber(it){
  if(isObject(it))it = toPrimitive(it);
  if(typeof it == 'string' && it.length > 2 && it.charCodeAt(0) == 48){
    var binary = false;
    switch(it.charCodeAt(1)){
      case 66 : case 98  : binary = true;
      case 79 : case 111 : return parseInt(it.slice(2), binary ? 2 : 8);
    }
  } return +it;
}
if($.FW && !(Number('0o1') && Number('0b1'))){
  Number = function Number(it){
    return this instanceof Number ? new Base(toNumber(it)) : toNumber(it);
  };
  $.each.call($.DESC ? $.getNames(Base) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES6 (in case, if modules with ES6 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
    ).split(','), function(key){
      if($.has(Base, key) && !$.has(Number, key)){
        $.setDesc(Number, key, $.getDesc(Base, key));
      }
    }
  );
  Number.prototype = proto;
  proto.constructor = Number;
  $.hide($.g, NUMBER, Number);
}
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.number.statics.js":[function(require,module,exports){
var $     = require('./$')
  , $def  = require('./$.def')
  , abs   = Math.abs
  , floor = Math.floor
  , MAX_SAFE_INTEGER = 0x1fffffffffffff; // pow(2, 53) - 1 == 9007199254740991;
function isInteger(it){
  return !$.isObject(it) && isFinite(it) && floor(it) === it;
}
$def($def.S, 'Number', {
  // 20.1.2.1 Number.EPSILON
  EPSILON: Math.pow(2, -52),
  // 20.1.2.2 Number.isFinite(number)
  isFinite: function(it){
    return typeof it == 'number' && isFinite(it);
  },
  // 20.1.2.3 Number.isInteger(number)
  isInteger: isInteger,
  // 20.1.2.4 Number.isNaN(number)
  isNaN: function(number){
    return number != number;
  },
  // 20.1.2.5 Number.isSafeInteger(number)
  isSafeInteger: function(number){
    return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
  },
  // 20.1.2.6 Number.MAX_SAFE_INTEGER
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
  // 20.1.2.10 Number.MIN_SAFE_INTEGER
  MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
  // 20.1.2.12 Number.parseFloat(string)
  parseFloat: parseFloat,
  // 20.1.2.13 Number.parseInt(string, radix)
  parseInt: parseInt
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.object.assign.js":[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $def = require('./$.def');
$def($def.S, 'Object', {assign: require('./$.assign')});
},{"./$.assign":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assign.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.object.is.js":[function(require,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $def = require('./$.def');
$def($def.S, 'Object', {
  is: function(x, y){
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  }
});
},{"./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.object.set-prototype-of.js":[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $def = require('./$.def');
$def($def.S, 'Object', {setPrototypeOf: require('./$.set-proto')});
},{"./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.set-proto":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.set-proto.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.object.statics-accept-primitives.js":[function(require,module,exports){
var $        = require('./$')
  , $def     = require('./$.def')
  , isObject = $.isObject
  , toObject = $.toObject;
function wrapObjectMethod(METHOD, MODE){
  var fn  = ($.core.Object || {})[METHOD] || Object[METHOD]
    , f   = 0
    , o   = {};
  o[METHOD] = MODE == 1 ? function(it){
    return isObject(it) ? fn(it) : it;
  } : MODE == 2 ? function(it){
    return isObject(it) ? fn(it) : true;
  } : MODE == 3 ? function(it){
    return isObject(it) ? fn(it) : false;
  } : MODE == 4 ? function(it, key){
    return fn(toObject(it), key);
  } : MODE == 5 ? function(it){
    return fn(Object($.assertDefined(it)));
  } : function(it){
    return fn(toObject(it));
  };
  try {
    fn('z');
  } catch(e){
    f = 1;
  }
  $def($def.S + $def.F * f, 'Object', o);
}
wrapObjectMethod('freeze', 1);
wrapObjectMethod('seal', 1);
wrapObjectMethod('preventExtensions', 1);
wrapObjectMethod('isFrozen', 2);
wrapObjectMethod('isSealed', 2);
wrapObjectMethod('isExtensible', 3);
wrapObjectMethod('getOwnPropertyDescriptor', 4);
wrapObjectMethod('getPrototypeOf', 5);
wrapObjectMethod('keys');
wrapObjectMethod('getOwnPropertyNames');
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.object.to-string.js":[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var $   = require('./$')
  , cof = require('./$.cof')
  , tmp = {};
tmp[require('./$.wks')('toStringTag')] = 'z';
if($.FW && cof(tmp) != 'z')$.hide(Object.prototype, 'toString', function(){
  return '[object ' + cof.classof(this) + ']';
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.cof":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.cof.js","./$.wks":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.wks.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.promise.js":[function(require,module,exports){
'use strict';
var $       = require('./$')
  , ctx     = require('./$.ctx')
  , cof     = require('./$.cof')
  , $def    = require('./$.def')
  , assert  = require('./$.assert')
  , $iter   = require('./$.iter')
  , SPECIES = require('./$.wks')('species')
  , RECORD  = require('./$.uid').safe('record')
  , forOf   = $iter.forOf
  , PROMISE = 'Promise'
  , global  = $.g
  , process = global.process
  , asap    = process && process.nextTick || require('./$.task').set
  , Promise = global[PROMISE]
  , Base    = Promise
  , isFunction     = $.isFunction
  , isObject       = $.isObject
  , assertFunction = assert.fn
  , assertObject   = assert.obj
  , test;
function getConstructor(C){
  var S = assertObject(C)[SPECIES];
  return S != undefined ? S : C;
}
isFunction(Promise) && isFunction(Promise.resolve)
&& Promise.resolve(test = new Promise(function(){})) == test
|| function(){
  function isThenable(it){
    var then;
    if(isObject(it))then = it.then;
    return isFunction(then) ? then : false;
  }
  function handledRejectionOrHasOnRejected(promise){
    var record = promise[RECORD]
      , chain  = record.c
      , i      = 0
      , react;
    if(record.h)return true;
    while(chain.length > i){
      react = chain[i++];
      if(react.fail || handledRejectionOrHasOnRejected(react.P))return true;
    }
  }
  function notify(record, isReject){
    var chain = record.c;
    if(isReject || chain.length)asap(function(){
      var promise = record.p
        , value   = record.v
        , ok      = record.s == 1
        , i       = 0;
      if(isReject && !handledRejectionOrHasOnRejected(promise)){
        setTimeout(function(){
          if(!handledRejectionOrHasOnRejected(promise)){
            if(cof(process) == 'process'){
              process.emit('unhandledRejection', value, promise);
            } else if(global.console && isFunction(console.error)){
              console.error('Unhandled promise rejection', value);
            }
          }
        }, 1e3);
      } else while(chain.length > i)!function(react){
        var cb = ok ? react.ok : react.fail
          , ret, then;
        try {
          if(cb){
            if(!ok)record.h = true;
            ret = cb === true ? value : cb(value);
            if(ret === react.P){
              react.rej(TypeError(PROMISE + '-chain cycle'));
            } else if(then = isThenable(ret)){
              then.call(ret, react.res, react.rej);
            } else react.res(ret);
          } else react.rej(value);
        } catch(err){
          react.rej(err);
        }
      }(chain[i++]);
      chain.length = 0;
    });
  }
  function reject(value){
    var record = this;
    if(record.d)return;
    record.d = true;
    record = record.r || record; // unwrap
    record.v = value;
    record.s = 2;
    notify(record, true);
  }
  function resolve(value){
    var record = this
      , then, wrapper;
    if(record.d)return;
    record.d = true;
    record = record.r || record; // unwrap
    try {
      if(then = isThenable(value)){
        wrapper = {r: record, d: false}; // wrap
        then.call(value, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
      } else {
        record.v = value;
        record.s = 1;
        notify(record);
      }
    } catch(err){
      reject.call(wrapper || {r: record, d: false}, err); // wrap
    }
  }
  // 25.4.3.1 Promise(executor)
  Promise = function(executor){
    assertFunction(executor);
    var record = {
      p: assert.inst(this, Promise, PROMISE), // <- promise
      c: [],                                  // <- chain
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false                                // <- handled rejection
    };
    $.hide(this, RECORD, record);
    try {
      executor(ctx(resolve, record, 1), ctx(reject, record, 1));
    } catch(err){
      reject.call(record, err);
    }
  };
  $.mix(Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function(onFulfilled, onRejected){
      var S = assertObject(assertObject(this).constructor)[SPECIES];
      var react = {
        ok:   isFunction(onFulfilled) ? onFulfilled : true,
        fail: isFunction(onRejected)  ? onRejected  : false
      };
      var P = react.P = new (S != undefined ? S : Promise)(function(res, rej){
        react.res = assertFunction(res);
        react.rej = assertFunction(rej);
      });
      var record = this[RECORD];
      record.c.push(react);
      record.s && notify(record);
      return P;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}();
$def($def.G + $def.W + $def.F * (Promise != Base), {Promise: Promise});
$def($def.S, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function(r){
    return new (getConstructor(this))(function(res, rej){
      rej(r);
    });
  },
  // 25.4.4.6 Promise.resolve(x)
  resolve: function(x){
    return isObject(x) && RECORD in x && $.getProto(x) === this.prototype
      ? x : new (getConstructor(this))(function(res){
        res(x);
      });
  }
});
$def($def.S + $def.F * ($iter.fail(function(iter){
  Promise.all(iter)['catch'](function(){});
}) || $iter.DANGER_CLOSING), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function(iterable){
    var C      = getConstructor(this)
      , values = [];
    return new C(function(resolve, reject){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        C.resolve(promise).then(function(value){
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function(iterable){
    var C = getConstructor(this);
    return new C(function(resolve, reject){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(resolve, reject);
      });
    });
  }
});
cof.set(Promise, PROMISE);
require('./$.species')(Promise);
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.assert":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assert.js","./$.cof":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.cof.js","./$.ctx":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.ctx.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.iter":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.iter.js","./$.species":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.species.js","./$.task":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.task.js","./$.uid":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.uid.js","./$.wks":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.wks.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.reflect.js":[function(require,module,exports){
var $         = require('./$')
  , $def      = require('./$.def')
  , setProto  = require('./$.set-proto')
  , $iter     = require('./$.iter')
  , ITER      = require('./$.uid').safe('iter')
  , step      = $iter.step
  , assert    = require('./$.assert')
  , isObject  = $.isObject
  , getDesc   = $.getDesc
  , setDesc   = $.setDesc
  , getProto  = $.getProto
  , apply     = Function.apply
  , assertObject = assert.obj
  , isExtensible = Object.isExtensible || $.it;
function Enumerate(iterated){
  var keys = [], key;
  for(key in iterated)keys.push(key);
  $.set(this, ITER, {o: iterated, a: keys, i: 0});
}
$iter.create(Enumerate, 'Object', function(){
  var iter = this[ITER]
    , keys = iter.a
    , key;
  do {
    if(iter.i >= keys.length)return step(1);
  } while(!((key = keys[iter.i++]) in iter.o));
  return step(0, key);
});

function wrap(fn){
  return function(it){
    assertObject(it);
    try {
      fn.apply(undefined, arguments);
      return true;
    } catch(e){
      return false;
    }
  };
}

function reflectGet(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc = getDesc(assertObject(target), propertyKey), proto;
  if(desc)return $.has(desc, 'value')
    ? desc.value
    : desc.get === undefined
      ? undefined
      : desc.get.call(receiver);
  return isObject(proto = getProto(target))
    ? reflectGet(proto, propertyKey, receiver)
    : undefined;
}
function reflectSet(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = getDesc(assertObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = getProto(target))){
      return reflectSet(proto, propertyKey, V, receiver);
    }
    ownDesc = $.desc(0);
  }
  if($.has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = getDesc(receiver, propertyKey) || $.desc(0);
    existingDescriptor.value = V;
    setDesc(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

var reflect = {
  // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
  apply: require('./$.ctx')(Function.call, apply, 3),
  // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
  construct: function(target, argumentsList /*, newTarget*/){
    var proto    = assert.fn(arguments.length < 3 ? target : arguments[2]).prototype
      , instance = $.create(isObject(proto) ? proto : Object.prototype)
      , result   = apply.call(target, instance, argumentsList);
    return isObject(result) ? result : instance;
  },
  // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
  defineProperty: wrap(setDesc),
  // 26.1.4 Reflect.deleteProperty(target, propertyKey)
  deleteProperty: function(target, propertyKey){
    var desc = getDesc(assertObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  },
  // 26.1.5 Reflect.enumerate(target)
  enumerate: function(target){
    return new Enumerate(assertObject(target));
  },
  // 26.1.6 Reflect.get(target, propertyKey [, receiver])
  get: reflectGet,
  // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
  getOwnPropertyDescriptor: function(target, propertyKey){
    return getDesc(assertObject(target), propertyKey);
  },
  // 26.1.8 Reflect.getPrototypeOf(target)
  getPrototypeOf: function(target){
    return getProto(assertObject(target));
  },
  // 26.1.9 Reflect.has(target, propertyKey)
  has: function(target, propertyKey){
    return propertyKey in target;
  },
  // 26.1.10 Reflect.isExtensible(target)
  isExtensible: function(target){
    return !!isExtensible(assertObject(target));
  },
  // 26.1.11 Reflect.ownKeys(target)
  ownKeys: require('./$.own-keys'),
  // 26.1.12 Reflect.preventExtensions(target)
  preventExtensions: wrap(Object.preventExtensions || $.it),
  // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
  set: reflectSet
};
// 26.1.14 Reflect.setPrototypeOf(target, proto)
if(setProto)reflect.setPrototypeOf = function(target, proto){
  setProto(assertObject(target), proto);
  return true;
};

$def($def.G, {Reflect: {}});
$def($def.S, 'Reflect', reflect);
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.assert":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.assert.js","./$.ctx":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.ctx.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.iter":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.iter.js","./$.own-keys":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.own-keys.js","./$.set-proto":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.set-proto.js","./$.uid":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.uid.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.regexp.js":[function(require,module,exports){
var $      = require('./$')
  , cof    = require('./$.cof')
  , RegExp = $.g.RegExp
  , Base   = RegExp
  , proto  = RegExp.prototype;
if($.FW && $.DESC){
  // RegExp allows a regex with flags as the pattern
  if(!function(){try{ return RegExp(/a/g, 'i') == '/a/i'; }catch(e){ /* empty */ }}()){
    RegExp = function RegExp(pattern, flags){
      return new Base(cof(pattern) == 'RegExp' && flags !== undefined
        ? pattern.source : pattern, flags);
    };
    $.each.call($.getNames(Base), function(key){
      key in RegExp || $.setDesc(RegExp, key, {
        configurable: true,
        get: function(){ return Base[key]; },
        set: function(it){ Base[key] = it; }
      });
    });
    proto.constructor = RegExp;
    RegExp.prototype = proto;
    $.hide($.g, 'RegExp', RegExp);
  }
  // 21.2.5.3 get RegExp.prototype.flags()
  if(/./g.flags != 'g')$.setDesc(proto, 'flags', {
    configurable: true,
    get: require('./$.replacer')(/^.*\/(\w*)$/, '$1')
  });
}
require('./$.species')(RegExp);
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.cof":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.cof.js","./$.replacer":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.replacer.js","./$.species":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.species.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.set.js":[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.2 Set Objects
require('./$.collection')('Set', {
  // 23.2.3.1 Set.prototype.add(value)
  add: function(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./$.collection":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.collection.js","./$.collection-strong":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.collection-strong.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.code-point-at.js":[function(require,module,exports){
var $def = require('./$.def');
$def($def.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: require('./$.string-at')(false)
});
},{"./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.string-at":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.string-at.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.ends-with.js":[function(require,module,exports){
'use strict';
var $    = require('./$')
  , cof  = require('./$.cof')
  , $def = require('./$.def')
  , toLength = $.toLength;

$def($def.P, 'String', {
  // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
  endsWith: function(searchString /*, endPosition = @length */){
    if(cof(searchString) == 'RegExp')throw TypeError();
    var that = String($.assertDefined(this))
      , endPosition = arguments[1]
      , len = toLength(that.length)
      , end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    searchString += '';
    return that.slice(end - searchString.length, end) === searchString;
  }
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.cof":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.cof.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.from-code-point.js":[function(require,module,exports){
var $def    = require('./$.def')
  , toIndex = require('./$').toIndex
  , fromCharCode = String.fromCharCode;

$def($def.S, 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function(x){ // eslint-disable-line no-unused-vars
    var res = []
      , len = arguments.length
      , i   = 0
      , code;
    while(len > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.includes.js":[function(require,module,exports){
'use strict';
var $    = require('./$')
  , cof  = require('./$.cof')
  , $def = require('./$.def');

$def($def.P, 'String', {
  // 21.1.3.7 String.prototype.includes(searchString, position = 0)
  includes: function(searchString /*, position = 0 */){
    if(cof(searchString) == 'RegExp')throw TypeError();
    return !!~String($.assertDefined(this)).indexOf(searchString, arguments[1]);
  }
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.cof":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.cof.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.iterator.js":[function(require,module,exports){
var set   = require('./$').set
  , at    = require('./$.string-at')(true)
  , ITER  = require('./$.uid').safe('iter')
  , $iter = require('./$.iter')
  , step  = $iter.step;

// 21.1.3.27 String.prototype[@@iterator]()
$iter.std(String, 'String', function(iterated){
  set(this, ITER, {o: String(iterated), i: 0});
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , index = iter.i
    , point;
  if(index >= O.length)return step(1);
  point = at.call(O, index);
  iter.i += point.length;
  return step(0, point);
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.iter":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.iter.js","./$.string-at":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.string-at.js","./$.uid":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.uid.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.raw.js":[function(require,module,exports){
var $    = require('./$')
  , $def = require('./$.def');

$def($def.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function(callSite){
    var raw = $.toObject(callSite.raw)
      , len = $.toLength(raw.length)
      , sln = arguments.length
      , res = []
      , i   = 0;
    while(len > i){
      res.push(String(raw[i++]));
      if(i < sln)res.push(String(arguments[i]));
    } return res.join('');
  }
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.repeat.js":[function(require,module,exports){
'use strict';
var $    = require('./$')
  , $def = require('./$.def');

$def($def.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: function(count){
    var str = String($.assertDefined(this))
      , res = ''
      , n   = $.toInteger(count);
    if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
    for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
    return res;
  }
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.starts-with.js":[function(require,module,exports){
'use strict';
var $    = require('./$')
  , cof  = require('./$.cof')
  , $def = require('./$.def');

$def($def.P, 'String', {
  // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
  startsWith: function(searchString /*, position = 0 */){
    if(cof(searchString) == 'RegExp')throw TypeError();
    var that  = String($.assertDefined(this))
      , index = $.toLength(Math.min(arguments[1], that.length));
    searchString += '';
    return that.slice(index, index + searchString.length) === searchString;
  }
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.cof":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.cof.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.symbol.js":[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $        = require('./$')
  , setTag   = require('./$.cof').set
  , uid      = require('./$.uid')
  , $def     = require('./$.def')
  , keyOf    = require('./$.keyof')
  , has      = $.has
  , hide     = $.hide
  , getNames = $.getNames
  , toObject = $.toObject
  , Symbol   = $.g.Symbol
  , Base     = Symbol
  , setter   = false
  , TAG      = uid.safe('tag')
  , SymbolRegistry = {}
  , AllSymbols     = {};

function wrap(tag){
  var sym = AllSymbols[tag] = $.set($.create(Symbol.prototype), TAG, tag);
  $.DESC && setter && $.setDesc(Object.prototype, tag, {
    configurable: true,
    set: function(value){
      hide(this, tag, value);
    }
  });
  return sym;
}

// 19.4.1.1 Symbol([description])
if(!$.isFunction(Symbol)){
  Symbol = function(description){
    if(this instanceof Symbol)throw TypeError('Symbol is not a constructor');
    return wrap(uid(description));
  };
  hide(Symbol.prototype, 'toString', function(){
    return this[TAG];
  });
}
$def($def.G + $def.W, {Symbol: Symbol});

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function(key){
    return keyOf(SymbolRegistry, key);
  },
  pure: uid.safe,
  set: $.set,
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
    'species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), function(it){
    var sym = require('./$.wks')(it);
    symbolStatics[it] = Symbol === Base ? sym : wrap(sym);
  }
);

setter = true;

$def($def.S, 'Symbol', symbolStatics);

$def($def.S + $def.F * (Symbol != Base), 'Object', {
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: function(it){
    var names = getNames(toObject(it)), result = [], key, i = 0;
    while(names.length > i)has(AllSymbols, key = names[i++]) || result.push(key);
    return result;
  },
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: function(it){
    var names = getNames(toObject(it)), result = [], key, i = 0;
    while(names.length > i)has(AllSymbols, key = names[i++]) && result.push(AllSymbols[key]);
    return result;
  }
});

setTag(Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setTag($.g.JSON, 'JSON', true);
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.cof":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.cof.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.keyof":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.keyof.js","./$.uid":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.uid.js","./$.wks":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.wks.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.weak-map.js":[function(require,module,exports){
'use strict';
var $         = require('./$')
  , weak      = require('./$.collection-weak')
  , leakStore = weak.leakStore
  , ID        = weak.ID
  , WEAK      = weak.WEAK
  , has       = $.has
  , isObject  = $.isObject
  , isFrozen  = Object.isFrozen || $.core.Object.isFrozen
  , tmp       = {};

// 23.3 WeakMap Objects
var WeakMap = require('./$.collection')('WeakMap', {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function(key){
    if(isObject(key)){
      if(isFrozen(key))return leakStore(this).get(key);
      if(has(key, WEAK))return key[WEAK][this[ID]];
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function(key, value){
    return weak.def(this, key, value);
  }
}, weak, true, true);

// IE11 WeakMap frozen keys fix
if($.FW && new WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  $.each.call(['delete', 'has', 'get', 'set'], function(key){
    var method = WeakMap.prototype[key];
    WeakMap.prototype[key] = function(a, b){
      // store frozen objects on leaky map
      if(isObject(a) && isFrozen(a)){
        var result = leakStore(this)[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    };
  });
}
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.collection":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.collection.js","./$.collection-weak":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.collection-weak.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.weak-set.js":[function(require,module,exports){
'use strict';
var weak = require('./$.collection-weak');

// 23.4 WeakSet Objects
require('./$.collection')('WeakSet', {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);
},{"./$.collection":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.collection.js","./$.collection-weak":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.collection-weak.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es7.array.includes.js":[function(require,module,exports){
// https://github.com/domenic/Array.prototype.includes
var $def = require('./$.def');
$def($def.P, 'Array', {
  includes: require('./$.array-includes')(true)
});
require('./$.unscope')('includes');
},{"./$.array-includes":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.array-includes.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.unscope":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.unscope.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":[function(require,module,exports){
// https://gist.github.com/WebReflection/9353781
var $       = require('./$')
  , $def    = require('./$.def')
  , ownKeys = require('./$.own-keys');

$def($def.S, 'Object', {
  getOwnPropertyDescriptors: function(object){
    var O      = $.toObject(object)
      , result = {};
    $.each.call(ownKeys(O), function(key){
      $.setDesc(result, key, $.desc(0, $.getDesc(O, key)));
    });
    return result;
  }
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.own-keys":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.own-keys.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es7.object.to-array.js":[function(require,module,exports){
// http://goo.gl/XkBrjD
var $    = require('./$')
  , $def = require('./$.def');
function createObjectToArray(isEntries){
  return function(object){
    var O      = $.toObject(object)
      , keys   = $.getKeys(object)
      , length = keys.length
      , i      = 0
      , result = Array(length)
      , key;
    if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
    else while(length > i)result[i] = O[keys[i++]];
    return result;
  };
}
$def($def.S, 'Object', {
  values:  createObjectToArray(false),
  entries: createObjectToArray(true)
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es7.regexp.escape.js":[function(require,module,exports){
// https://gist.github.com/kangax/9698100
var $def = require('./$.def');
$def($def.S, 'RegExp', {
  escape: require('./$.replacer')(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)
});
},{"./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.replacer":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.replacer.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es7.string.at.js":[function(require,module,exports){
// https://github.com/mathiasbynens/String.prototype.at
var $def = require('./$.def');
$def($def.P, 'String', {
  at: require('./$.string-at')(true)
});
},{"./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.string-at":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.string-at.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/js.array.statics.js":[function(require,module,exports){
// JavaScript 1.6 / Strawman array statics shim
var $       = require('./$')
  , $def    = require('./$.def')
  , core    = $.core
  , statics = {};
function setStatics(keys, length){
  $.each.call(keys.split(','), function(key){
    if(length == undefined && key in core.Array)statics[key] = core.Array[key];
    else if(key in [])statics[key] = require('./$.ctx')(Function.call, [][key], length);
  });
}
setStatics('pop,reverse,shift,keys,values,entries', 1);
setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
           'reduce,reduceRight,copyWithin,fill,turn');
$def($def.S, 'Array', statics);
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.ctx":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.ctx.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/web.dom.iterable.js":[function(require,module,exports){
require('./es6.array.iterator');
var $         = require('./$')
  , Iterators = require('./$.iter').Iterators
  , ITERATOR  = require('./$.wks')('iterator')
  , NodeList  = $.g.NodeList;
if($.FW && NodeList && !(ITERATOR in NodeList.prototype)){
  $.hide(NodeList.prototype, ITERATOR, Iterators.Array);
}
Iterators.NodeList = Iterators.Array;
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.iter":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.iter.js","./$.wks":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.wks.js","./es6.array.iterator":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.iterator.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/web.immediate.js":[function(require,module,exports){
var $def  = require('./$.def')
  , $task = require('./$.task');
$def($def.G + $def.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});
},{"./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.task":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.task.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/web.timers.js":[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var $       = require('./$')
  , $def    = require('./$.def')
  , invoke  = require('./$.invoke')
  , partial = require('./$.partial')
  , MSIE    = !!$.g.navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
function wrap(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      $.isFunction(fn) ? fn : Function(fn)
    ), time);
  } : set;
}
$def($def.G + $def.B + $def.F * MSIE, {
  setTimeout:  wrap($.g.setTimeout),
  setInterval: wrap($.g.setInterval)
});
},{"./$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./$.def":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.def.js","./$.invoke":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.invoke.js","./$.partial":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.partial.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/shim.js":[function(require,module,exports){
require('./modules/es5');
require('./modules/es6.symbol');
require('./modules/es6.object.assign');
require('./modules/es6.object.is');
require('./modules/es6.object.set-prototype-of');
require('./modules/es6.object.to-string');
require('./modules/es6.object.statics-accept-primitives');
require('./modules/es6.function.name');
require('./modules/es6.number.constructor');
require('./modules/es6.number.statics');
require('./modules/es6.math');
require('./modules/es6.string.from-code-point');
require('./modules/es6.string.raw');
require('./modules/es6.string.iterator');
require('./modules/es6.string.code-point-at');
require('./modules/es6.string.ends-with');
require('./modules/es6.string.includes');
require('./modules/es6.string.repeat');
require('./modules/es6.string.starts-with');
require('./modules/es6.array.from');
require('./modules/es6.array.of');
require('./modules/es6.array.iterator');
require('./modules/es6.array.species');
require('./modules/es6.array.copy-within');
require('./modules/es6.array.fill');
require('./modules/es6.array.find');
require('./modules/es6.array.find-index');
require('./modules/es6.regexp');
require('./modules/es6.promise');
require('./modules/es6.map');
require('./modules/es6.set');
require('./modules/es6.weak-map');
require('./modules/es6.weak-set');
require('./modules/es6.reflect');
require('./modules/es7.array.includes');
require('./modules/es7.string.at');
require('./modules/es7.regexp.escape');
require('./modules/es7.object.get-own-property-descriptors');
require('./modules/es7.object.to-array');
require('./modules/js.array.statics');
require('./modules/web.timers');
require('./modules/web.immediate');
require('./modules/web.dom.iterable');
module.exports = require('./modules/$').core;
},{"./modules/$":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/$.js","./modules/es5":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es5.js","./modules/es6.array.copy-within":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.copy-within.js","./modules/es6.array.fill":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.fill.js","./modules/es6.array.find":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.find.js","./modules/es6.array.find-index":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.find-index.js","./modules/es6.array.from":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.from.js","./modules/es6.array.iterator":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.iterator.js","./modules/es6.array.of":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.of.js","./modules/es6.array.species":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.array.species.js","./modules/es6.function.name":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.function.name.js","./modules/es6.map":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.map.js","./modules/es6.math":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.math.js","./modules/es6.number.constructor":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.number.constructor.js","./modules/es6.number.statics":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.number.statics.js","./modules/es6.object.assign":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.object.assign.js","./modules/es6.object.is":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.object.is.js","./modules/es6.object.set-prototype-of":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.object.set-prototype-of.js","./modules/es6.object.statics-accept-primitives":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.object.statics-accept-primitives.js","./modules/es6.object.to-string":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.object.to-string.js","./modules/es6.promise":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.promise.js","./modules/es6.reflect":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.reflect.js","./modules/es6.regexp":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.regexp.js","./modules/es6.set":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.set.js","./modules/es6.string.code-point-at":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.code-point-at.js","./modules/es6.string.ends-with":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.ends-with.js","./modules/es6.string.from-code-point":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.from-code-point.js","./modules/es6.string.includes":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.includes.js","./modules/es6.string.iterator":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.iterator.js","./modules/es6.string.raw":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.raw.js","./modules/es6.string.repeat":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.repeat.js","./modules/es6.string.starts-with":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.string.starts-with.js","./modules/es6.symbol":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.symbol.js","./modules/es6.weak-map":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.weak-map.js","./modules/es6.weak-set":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es6.weak-set.js","./modules/es7.array.includes":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es7.array.includes.js","./modules/es7.object.get-own-property-descriptors":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js","./modules/es7.object.to-array":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es7.object.to-array.js","./modules/es7.regexp.escape":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es7.regexp.escape.js","./modules/es7.string.at":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/es7.string.at.js","./modules/js.array.statics":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/js.array.statics.js","./modules/web.dom.iterable":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/web.dom.iterable.js","./modules/web.immediate":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/web.immediate.js","./modules/web.timers":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/core-js/modules/web.timers.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/node_modules/regenerator-babel/runtime.js":[function(require,module,exports){
(function (global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol =
    typeof Symbol === "function" && Symbol.iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    return new Generator(innerFn, outerFn, self || null, tryLocsList || []);
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    genFun.__proto__ = GeneratorFunctionPrototype;
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    return new Promise(function(resolve, reject) {
      var generator = wrap(innerFn, outerFn, self, tryLocsList);
      var callNext = step.bind(generator.next);
      var callThrow = step.bind(generator["throw"]);

      function step(arg) {
        var record = tryCatch(this, null, arg);
        if (record.type === "throw") {
          reject(record.arg);
          return;
        }

        var info = record.arg;
        if (info.done) {
          resolve(info.value);
        } else {
          Promise.resolve(info.value).then(callNext, callThrow);
        }
      }

      callNext();
    });
  };

  function Generator(innerFn, outerFn, self, tryLocsList) {
    var generator = outerFn ? Object.create(outerFn.prototype) : this;
    var context = new Context(tryLocsList);
    var state = GenStateSuspendedStart;

    function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;

            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedStart &&
              typeof arg !== "undefined") {
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
            throw new TypeError(
              "attempt to send " + JSON.stringify(arg) + " to newborn generator"
            );
          }

          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            delete context.sent;
          }

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;

          if (method === "next") {
            context.dispatchException(record.arg);
          } else {
            arg = record.arg;
          }
        }
      }
    }

    generator.next = invoke.bind(generator, "next");
    generator["throw"] = invoke.bind(generator, "throw");
    generator["return"] = invoke.bind(generator, "return");

    return generator;
  }

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset();
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function() {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      // Pre-initialize at least 20 temporary variables to enable hidden
      // class optimizations for simple generators.
      for (var tempIndex = 0, tempName;
           hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20;
           ++tempIndex) {
        this[tempName] = null;
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg < finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          return this.complete(entry.completion, entry.afterLoc);
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window : this
);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/polyfill.js":[function(require,module,exports){
module.exports = require("./lib/babel/polyfill");

},{"./lib/babel/polyfill":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/lib/babel/polyfill.js"}],"/home/abudaan/workspace/qambi/node_modules/babelify/polyfill.js":[function(require,module,exports){
module.exports = require("babel-core/polyfill");

},{"babel-core/polyfill":"/home/abudaan/workspace/qambi/node_modules/babelify/node_modules/babel-core/polyfill.js"}],"/home/abudaan/workspace/qambi/src/audio_event.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createAudioEvent = createAudioEvent;
'use strict';

var AudioEvent = function AudioEvent() {
  _classCallCheck(this, AudioEvent);
};

exports.AudioEvent = AudioEvent;

function createAudioEvent() {
  return new AudioEvent();
}

},{}],"/home/abudaan/workspace/qambi/src/config.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
/*
  Creates the config object that is used for internally sharing settings, information and the state. Other modules may add keys to this object.
*/

'use strict';

var config = undefined,
    defaultSong = undefined,
    ua = 'NA',
    os = 'unknown',
    browser = 'NA';

function getConfig() {
  if (config !== undefined) {
    return config;
  }

  config = new Map();
  config.set('legacy', false); // true if the browser uses an older version of the WebAudio API, source.noteOn() and source.noteOff instead of source.start() and source.stop()
  config.set('midi', false); // true if the browser has MIDI support either via WebMIDI or Jazz
  config.set('webmidi', false); // true if the browser has WebMIDI
  config.set('webaudio', true); // true if the browser has WebAudio
  config.set('jazz', false); // true if the browser has the Jazz plugin
  config.set('ogg', false); // true if WebAudio supports ogg
  config.set('mp3', false); // true if WebAudio supports mp3
  config.set('bitrate_mp3_encoding', 128); // default bitrate for audio recordings
  config.set('debugLevel', 4); // 0 = off, 1 = error, 2 = warn, 3 = info, 4 = log
  config.set('pitch', 440); // basic pitch that is used when generating samples
  config.set('bufferTime', 350 / 1000); // time in seconds that events are scheduled ahead
  config.set('autoAdjustBufferTime', false);
  config.set('noteNameMode', 'sharp');
  config.set('minimalSongLength', 60000); //millis
  config.set('pauseOnBlur', false); // pause the AudioContext when page or tab looses focus
  config.set('restartOnFocus', true); // if song was playing at the time the page or tab lost focus, it will start playing automatically as soon as the page/tab gets focus again
  config.set('defaultPPQ', 960);
  config.set('overrulePPQ', true);
  config.set('precision', 3); // means float with precision 3, e.g. 10.437
  config.set('activeSongs', {}); // the songs currently loaded in memory

  defaultSong = new Map();
  defaultSong.set('bpm', 120);
  defaultSong.set('ppq', config.get('defaultPPQ'));
  defaultSong.set('bars', 30);
  defaultSong.set('lowestNote', 0);
  defaultSong.set('highestNote', 127);
  defaultSong.set('nominator', 4);
  defaultSong.set('denominator', 4);
  defaultSong.set('quantizeValue', 8);
  defaultSong.set('fixedLengthValue', false);
  defaultSong.set('positionType', 'all');
  defaultSong.set('useMetronome', false);
  defaultSong.set('autoSize', true);
  defaultSong.set('loop', false);
  defaultSong.set('playbackSpeed', 1);
  defaultSong.set('autoQuantize', false);
  config.set('defaultSong', defaultSong);

  // get browser and os
  if (navigator !== undefined) {
    ua = navigator.userAgent;

    if (ua.match(/(iPad|iPhone|iPod)/g)) {
      os = 'ios';
    } else if (ua.indexOf('Android') !== -1) {
      os = 'android';
    } else if (ua.indexOf('Linux') !== -1) {
      os = 'linux';
    } else if (ua.indexOf('Macintosh') !== -1) {
      os = 'osx';
    } else if (ua.indexOf('Windows') !== -1) {
      os = 'windows';
    }

    if (ua.indexOf('Chrome') !== -1) {
      // chrome, chromium and canary
      browser = 'chrome';

      if (ua.indexOf('OPR') !== -1) {
        browser = 'opera';
      } else if (ua.indexOf('Chromium') !== -1) {
        browser = 'chromium';
      }
    } else if (ua.indexOf('Safari') !== -1) {
      browser = 'safari';
    } else if (ua.indexOf('Firefox') !== -1) {
      browser = 'firefox';
    } else if (ua.indexOf('Trident') !== -1) {
      browser = 'Internet Explorer';
    }

    if (os === 'ios') {
      if (ua.indexOf('CriOS') !== -1) {
        browser = 'chrome';
      }
    }
  } else {}
  config.set('ua', ua);
  config.set('os', os);
  config.set('browser', browser);

  // check if we have an audio context
  window.AudioContext = window.AudioContext || window.webkitAudioContext || window.oAudioContext || window.msAudioContext;
  config.set('audio_context', navigator.getUserMedia !== undefined);
  config.set('record_audio', navigator.getUserMedia !== undefined);

  // check if audio can be recorded
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  config.set('audio_context', window.AudioContext !== undefined);

  // no webaudio, return
  if (config.get('audio_context') === false) {
    return false;
  }

  // check for other 'modern' API's
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  window.Blob = window.Blob || window.webkitBlob || window.mozBlob;
  //console.log('iOS', os, context, window.Blob, window.requestAnimationFrame);

  return config;
}

exports['default'] = getConfig;
module.exports = exports['default'];

// TODO: check os here with Nodejs' require('os')

},{}],"/home/abudaan/workspace/qambi/src/heartbeat.js":[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.addTask = addTask;
exports.removeTask = removeTask;
exports.start = start;

var _getConfig = require('./config.js');

var _getConfig2 = _interopRequireWildcard(_getConfig);

'use strict';

var timedTasks = new Map();
var repetitiveTasks = new Map();
var scheduledTasks = new Map();
var tasks = new Map();
var config = _getConfig2['default']();
var lastTimeStamp = undefined;

function heartbeat(timestamp) {
  var now = config.getTime();

  // for instance: the callback of sample.unschedule;
  for (var _ref3 in timedTasks) {
    var _ref2 = _slicedToArray(_ref3, 2);

    var key = _ref2[0];
    var task = _ref2[1];

    if (task.time >= now) {
      task.execute(now);
      timedTasks['delete'](key);
    }
  }

  // for instance: song.update();
  for (var task in scheduledTasks.values) {
    task(now);
  }

  // for instance: song.pulse();
  for (var task in repetitiveTasks.values) {
    task(now);
  }
  /*
    // skip the first 10 frames because they tend to have weird intervals
    if(r >= 10){
      let diff = (timestamp - lastTimeStamp)/1000;
      sequencer.diff = diff;
      // if(r < 40){
      //     console.log(diff);
      //     r++;
      // }
      if(diff > sequencer.bufferTime && sequencer.autoAdjustBufferTime === true){
        if(sequencer.debug){
          console.log('adjusted buffertime:' + sequencer.bufferTime + ' -> ' +  diff);
        }
        sequencer.bufferTime = diff;
      }
    }else{
      r++;
    }
  */
  lastTimeStamp = timestamp;
  scheduledTasks.clear();

  //setTimeout(heartbeat, 100);
  window.requestAnimationFrame(heartbeat);
}

function addTask(type, id, task) {
  var map = tasks.get(type);
  map.set(id, task);
}

function removeTask(type, id) {
  var map = tasks.get(type);
  map['delete'](id);
}

function start() {
  tasks.set('timed', timedTasks);
  tasks.set('repetitive', repetitiveTasks);
  tasks.set('scheduled', scheduledTasks);
  heartbeat();
}

},{"./config.js":"/home/abudaan/workspace/qambi/src/config.js"}],"/home/abudaan/workspace/qambi/src/init_audio.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _log$info$warn$error$parseSamples = require('./util');

/*
  Sets up the basic audio routing, tests which audio formats are supported and parses the samples for the metronome ticks.
*/

'use strict';

var data = {},
    context = undefined,
    source = undefined,
    gainNode = undefined,
    compressor = undefined;

var compressorParams = ['threshold', 'knee', 'ratio', 'reduction', 'attack', 'release'],
    emptyOgg = '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Y5l93VlmX3eO4Rg6v/Djqaqvm64rDKcsC7/t68az+76yjK7r+6osC78q28Kx677z/L6wLKPs+sJqy8Kw2rYx3L5uLL9wHMtr68ox675RtnV8X3gKw/N0dV15Zl3H9nV040c4fsoAAIABBwCAABPKQKEhKwKAOAEAjySJomRZoihZliiKpui6omi6rqRppqlpnmlammeapmmqsimarixpmmlanmaamqeZpmiarmuapqyKpinLpmrKsmmasuy6sm27rmzbomnKsmmasmyapiy7sqvbruzquqRZpql5nmlqnmeapmrKsmmarqt5nmp6nmiqniiqqmqqqq2qqixbnmeamuippieKqmqqpq2aqirLpqrasmmqtmyqqm27quz6sm3rummqsm2qpi2bqmrbruzqsizbui9pmmlqnmeamueZpmmasmyaqitbnqeaniiqquaJpmqqqiybpqrKlueZqieKquqJnmuaqirLpmraqmmatmyqqi2bpirLrm37vuvKsm6qqmybqmrrpmrKsmzLvu/Kqu6KpinLpqrasmmqsi3bsu/Lsqz7omnKsmmqsm2qqi7Lsm0bs2z7umiasm2qpi2bqirbsi37uizbuu/Krm+rqqzrsi37uu76rnDrujC8smz7qqz6uivbum/rMtv2fUTTlGVTNW3bVFVZdmXZ9mXb9n3RNG1bVVVbNk3VtmVZ9n1Ztm1hNE3ZNlVV1k3VtG1Zlm1htmXhdmXZt2Vb9nXXlXVf133j12Xd5rqy7cuyrfuqq/q27vvCcOuu8AoAABhwAAAIMKEMFBqyEgCIAgAAjGGMMQiNUs45B6FRyjnnIGTOQQghlcw5CCGUkjkHoZSUMucglJJSCKGUlFoLIZSUUmsFAAAUOAAABNigKbE4QKEhKwGAVAAAg+NYlueZomrasmNJnieKqqmqtu1IlueJommqqm1bnieKpqmqruvrmueJommqquvqumiapqmqruu6ui6aoqmqquu6sq6bpqqqriu7suzrpqqqquvKriz7wqq6rivLsm3rwrCqruvKsmzbtm/cuq7rvu/7wpGt67ou/MIxDEcBAOAJDgBABTasjnBSNBZYaMhKACADAIAwBiGDEEIGIYSQUkohpZQSAAAw4AAAEGBCGSg0ZEUAECcAABhDKaSUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJIKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKqaSUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKZVSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUgoAkIpwAJB6MKEMFBqyEgBIBQAAjFFKKcacgxAx5hhj0EkoKWLMOcYclJJS5RyEEFJpLbfKOQghpNRSbZlzUlqLMeYYM+ekpBRbzTmHUlKLseaaa+6ktFZrrjXnWlqrNdecc825tBZrrjnXnHPLMdecc8455xhzzjnnnHPOBQDgNDgAgB7YsDrCSdFYYKEhKwGAVAAAAhmlGHPOOegQUow55xyEECKFGHPOOQghVIw55xx0EEKoGHPMOQghhJA55xyEEEIIIXMOOugghBBCBx2EEEIIoZTOQQghhBBKKCGEEEIIIYQQOgghhBBCCCGEEEIIIYRSSgghhBBCCaGUUAAAYIEDAECADasjnBSNBRYashIAAAIAgByWoFLOhEGOQY8NQcpRMw1CTDnRmWJOajMVU5A5EJ10EhlqQdleMgsAAIAgACDABBAYICj4QgiIMQAAQYjMEAmFVbDAoAwaHOYBwANEhEQAkJigSLu4gC4DXNDFXQdCCEIQglgcQAEJODjhhife8IQbnKBTVOogAAAAAAAMAOABAOCgACIimquwuMDI0Njg6PAIAAAAAAAWAPgAADg+gIiI5iosLjAyNDY4OjwCAAAAAAAAAACAgIAAAAAAAEAAAACAgE9nZ1MABAEAAAAAAAAAXcXeFwIAAABq2npxAgEBAAo=',
    emptyMp3 = '//sQxAADwAABpAAAACAAADSAAAAETEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=',
    hightick = 'UklGRkQFAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YSAFAACx/xf/dADOACwBsP3p+6H+zAGoBOkCCwBX/EH5OvxlA4kJ2wcSArT9E/ut+HT2evUx98n6OAF5CCUMwQvfCOsJxAx0DSIMEAq9BiAB3vhz7mLkT9sR133YxN2s5QLv0vrUBnwRnxuQJeEsSDCiMd8yFS8aKFIhohUsCKj64u625OraA9HuyPnElcP+wxvJWtW25637VQ0jHPgnBTDDM1o0CzKLK+8hzhgFDOz8Se4J47DYVtG0z5fQq9LB12rfA+j99roHAhelIyMwIjdTOuU8mjwIOGoxhCb5E53/j+3k3/fTY8pTw4y/Tr+ew8DMvdsk8RcHRRkSKO4yGTkHPkU/rzzyNcgsrR94Dp/5r+Zs17zOncoDxhfE38WLyn/TeOMi9r0IRxlRKIQzyTlOPKo9yjmWMcokDRLc/Y7rudtdzu/D2L1Iu+27JcG3yYrVLujl+3UOZx1UK5Q0qzmNPDk8ZjeeMPojzhH+/jLtPd5m0hHLHsYIw5TEMMnA0jvj8fSOBiwXASZgMzM8dUBGQbI+rzjpKkIZygZT9QflcdaRyqXCz7+VwUPH784r3K7s+v0KDu8bvyeLMb43NjrhOIo0dSvQHi0PnP6i7ovg3NTxy4/Gf8X8yH/QBtvX55P2Ygb0FcUjsy4LNmI5ejiXM38r7iC8FJwHPvok7dDgQdaJzlTKIsoFzsrVkuA87d/6qAi7FQ0h9ClKMLEz3TOrMBcqYSD8E9AFd/dS6kTf6dbU0XnQv9IH2MXfZ+ln9DEAFwwdFy8giib6KawqeChgI/UbHBOTCZj/vvXe7InlFuDN3P3b0d1F4gzpifG2+u4D7Qw1FfwbnCD+IlgjWyHLHPMVog2mBL37qvP+7NvnYuTv4rvjfubN6k3wpPZ0/WkEOwtiEUsWcxm+Gl4aOhhiFDAPIwmbAtn7TPVy77zqcefr5YHmHull7enyfPmcAHgHew1REr8Vhhd/F+AV1RJ0DikJWQNc/ZP3efKd7hvs2ur46rHs5u8e9N/48/0hA/8HFgwuD04RSBIREqsQOg7mCssGMAJW/Xn4G/TK8Lbuzu0I7qTvnPJy9sX6bP84BLYIbAwdD84QYxG7EOcODAxwCFMEAQC9+7P3SvTX8XHw+u9R8KTxIvSo9+X7VQCUBJ0IMwziDj4QLhAGD9UMrgnTBZcBRv1v+Xv2UfS+8tfx+vES87z0+vb3+Zf9ZgEQBSEIUArWC8kM2QyzC5EJEAdvBHgBXP5n++r4Avd89Wj07fMw9D31Jvfp+Uj9xQD9A8QG5QhXClELrAsvC9wJ7gd6BWIC3v6O+7T4PPZN9EHzWvNf9Pz1Fvit+qL9rQCHAwEG/weCCZUKFwvDCnIJcAcQBWcCaf8Z/CD55vaB9dD0wPSP9UL3m/k7/Mz+JwEyAw8FzAY7CBsJaQk5CWkI2gatBCICYf+j/Fr6vfiV9872sfZP91z4p/lR+3H9zf89AroEFAfjCP0Jcwo8CjAJdQdgBSEDkgDQ/Vj7ZfnR95T28fUd9v32Vvg2+nb8+/6xAWoE4AbDCP4JpAqbCqQJ0weEBfgCTACT/R37M/m+9672IPY69gb3afhW+tT8qf+MAj0FggcuCScKXAriCcMIEAfyBJYCFwCP/Rz7A/l793z2F/Zn9mH37fjd+i39yf9pAt0EFAfRCNkJGAqrCZYIvgZPBJ8B6P4//M350vdz9q/1lfUq9mz3RPmi+3H+bgFVBOQG3wgHCkwK0Am7CCAHCgWmAjAA',
    lowtick = 'UklGRlQFAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YTAFAAB0/5v+U/4T/3gA0wFTAuUB+f8d/nT90f1q/ub+tf46/mb/8wFQA9gC7wCd/mr+FAGRA3cE6wJf/h36evmv+8v/NwRHBZUC2/60+//5EvuZ/aX/bgFOAp8Azvzh9wfzLPF68zT4y/2BAygIfQwaEjYY0x31Irwl8SOWHVESOgPh9NfpReFt22nYHddD2BXcZeDa5InqgPDx9nP+6gS4CBYLnw0zES0WXxv4HkcgLh/1G+EX1RNpD4wKigXH/6r5/fNu7lTpj+Zu5hHoXOtL71byr/Qp91L64v6OBO4JoQ5zEskU+hU1FiQVeRP7EWgP4Qr0BIT+tPid9C3y1vCh8FDxJvK28vvyy/LA8pLzU/XP95v6xvw4/uD/RAK2BSkKcg6BEScTZBMeEqkPTQxjCKEEVwFi/nv7h/hp9aDyAvHP8MfxLvM+9PX0uPW19g/4Lfr7/C4AKgNaBXQGywb0BhIHWQfWB1oIzAjtCF8IHwdtBakDVwKLAeYA8v9w/kj81/nQ94v29/XX9bz1bPUY9Uz1Z/aH+Hr7yP4MAi4F+wcfCnYLNgyfDPsMSw0sDUAMfgrcB5IEMwFb/iX8T/pT+O/1X/Mf8cbvrO+18MLyvfVP+Rf9wgAoBCEHpwnIC5EN4Q5AD3wO1Ay0CpsIvwbvBNcCbQAr/nX8Ofsf+vb4mvda9rj1z/WX9pL3a/hH+ZX6R/wn/vP/eQESA/AE+wYDCcwKFAyPDCkMFQuSCe4HVQbSBHQDCwI8ANL9JPuY+HX28vTq82PzdPMV9Az1MfZ49zD5gftx/sQBBQXLB8cJ/gqpCw8MigwWDXENXQ2rDDUL7QgDBswCdv8S/K74WPVk8hXwou4P7mvu1+9T8pz1Uvli/ZoBwgWRCcsMPg/CEEQR4RDADwoO9wusCVMH4ARSApn/ufzd+Wj3bvX78xzzx/L68qzz1vSD9qX4Gfvd/c0AhwO/BWwHmghvCQEKVQonClsJCwiIBh0F0gOgAm0BOwAx/03+XP0g/Lb6cPmX+F/4vfh++TH6s/os+7/7cvwL/Zz9XP5O/3IA3AF9AzsF9gaUCAAKHgueCzcL9wntB3sF4wIzAI396fp1+Gv2IvWn9N30p/Xi9m74G/ru+9P9k/8aAYEC1AMTBSIG0wYuB1gHkgcACGEISAhTBzEFWAKt/5L92fuU+vX50fmf+SP5i/gb+Bf4mviv+Sr7kvyb/Uj+r/4X/8r/+gCiAo0EUAaRBzwISwjqB3IHGQfCBv8FpgTMApQAKf67+5n5/vfn9jz2yPVn9SL1RPXq9SP3Dvmr+6f+sQGKBAcH+whOCh0Laws3C28KLAmDB5AFfQNoAVP/Zv3e+7P6sfnL+Cv4vPeM95b37feV+Jn51Poq/LL9mv+YAVYD3gQuBmcHSAikCIEI7Af+BuEFngQXA1sBv/9v/pf9MP3W/Fj8q/sR+6H6U/o3+mP6y/pN+/f7xvye/WH+Jf9mAD4CQAQJBisHtgf6Bw0I8QdsB1sGywT4AggBCP/o/KX6mPg19572jfaz9uf2S/cM+E35E/tW/af/5wH1A8AFKgfkB/AHgwfxBlAGgQVIBMMCJwGs/43+vP0i/Zr8Lfzl+9H76fvi+9f75fsf/In8BP10/ej9cf4O/7f/dAAcAaUBEgKMAhgDpAMEBCEEDwTfA3IDxQL8ASoBUwCG/87+J/6h/Rr9pPxk/Gb8oPwJ/XH9w/39/UD+qP41/9D/WwDeAGsBAgKdAhEDQQNAA0sDbwOVA5YDVwPOAhgCVAGRAA==';

function initAudio(ctx) {
  context = ctx;
  return new Promise(function executor(resolve, reject) {
    context = new window.AudioContext();
    data.context = context;

    if (context.createGainNode === undefined) {
      context.createGainNode = context.createGain;
    }
    // check for older implementations of WebAudio
    source = context.createBufferSource();
    data.legacy = false;
    if (source.start === undefined) {
      data.legacy = true;
    }

    // set up the elementary audio nodes
    compressor = context.createDynamicsCompressor();
    compressor.connect(context.destination);
    gainNode = context.createGainNode();
    gainNode.connect(context.destination);
    gainNode.gain.value = 1;

    data.masterGainNode = gainNode;
    data.masterCompressor = compressor;

    _log$info$warn$error$parseSamples.parseSamples({
      ogg: emptyOgg,
      mp3: emptyMp3,
      lowtick: lowtick,
      hightick: hightick
    }).then(function onFulfilled(buffers) {
      data.ogg = buffers.ogg !== undefined;
      data.mp3 = buffers.mp3 !== undefined;
      data.lowtick = buffers.lowtick;
      data.hightick = buffers.hightick;
      if (data.ogg === false && data.mp3 === false) {
        reject('No support for ogg nor mp3!');
      } else {
        resolve(data);
      }
    }, function onRejected() {
      reject('Something went wrong while initializing Audio');
    });
  });
}

data.setMasterVolume = function () {
  var value = arguments[0] === undefined ? 0.5 : arguments[0];

  if (value > 1) {
    _log$info$warn$error$parseSamples.info('maximal volume is 1.0, volume is set to 1.0');
  }
  value = value < 0 ? 0 : value > 1 ? 1 : value;
  gainNode.gain.value = value;
};

data.getMasterVolume = function () {
  return gainNode.gain.value;
};

data.getCompressionReduction = function () {
  //console.log(compressor);
  return compressor.reduction.value;
};

data.enableMasterCompressor = function (flag) {
  if (flag) {
    gainNode.disconnect(0);
    gainNode.connect(compressor);
    compressor.disconnect(0);
    compressor.connect(context.destination);
  } else {
    compressor.disconnect(0);
    gainNode.disconnect(0);
    gainNode.connect(context.destination);
  }
};

data.configureMasterCompressor = function (cfg) {
  /*
      readonly attribute AudioParam threshold; // in Decibels
      readonly attribute AudioParam knee; // in Decibels
      readonly attribute AudioParam ratio; // unit-less
      readonly attribute AudioParam reduction; // in Decibels
      readonly attribute AudioParam attack; // in Seconds
      readonly attribute AudioParam release; // in Seconds
  */
  var i = undefined,
      param = undefined;
  for (i = compressorParams.length; i >= 0; i--) {
    param = compressorParams[i];
    if (cfg[param] !== undefined) {
      compressor[param].value = cfg[param];
    }
  }
};

data.getAudioContext = function () {
  return context;
};

data.getTime = function () {
  return context.currentTime;
};

exports['default'] = initAudio;
module.exports = exports['default'];

},{"./util":"/home/abudaan/workspace/qambi/src/util.js"}],"/home/abudaan/workspace/qambi/src/init_midi.js":[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _bind = Function.prototype.bind;

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.initMidiSong = initMidiSong;
exports.setMidiInputSong = setMidiInputSong;
exports.setMidiOutputSong = setMidiOutputSong;

var _log$info$warn$error$typeString = require('./util');

var _MidiEvent = require('./midi_event');

var _MidiEvent2 = _interopRequireWildcard(_MidiEvent);

/*
  Requests MIDI access, queries all inputs and outputs and stores them in alphabetical order
*/

'use strict';

var data = {};
var inputs = new Map();
var outputs = new Map();

var songMidiEventListener = undefined;
var midiEventListenerId = 0;

function initMidi() {

  return new Promise(function executor(resolve, reject) {

    var tmp = undefined;

    if (navigator.requestMIDIAccess !== undefined) {

      navigator.requestMIDIAccess().then(function onFulFilled(midi) {
        if (midi._jazzInstances !== undefined) {
          data.jazz = midi._jazzInstances[0]._Jazz.version;
          data.midi = true;
        } else {
          data.webmidi = true;
          data.midi = true;
        }

        // old implementation of WebMIDI
        if (typeof midi.inputs.values !== 'function') {
          reject('You browser is using an old implementation of the WebMIDI API, please update your browser.');
          return;
        }

        // get inputs
        tmp = Array.from(midi.inputs.values());

        //sort ports by name ascending
        tmp.sort(function (a, b) {
          return a.name.toLowerCase() <= b.name.toLowerCase() ? 1 : -1;
        });

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = tmp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var port = _step.value;

            inputs.set(port.id, port);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        // get outputs
        tmp = Array.from(midi.outputs.values());

        //sort ports by name ascending
        tmp.sort(function (a, b) {
          return a.name.toLowerCase() <= b.name.toLowerCase() ? 1 : -1;
        });

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = tmp[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var port = _step2.value;

            outputs.set(port.id, port);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        // onconnect and ondisconnect are not yet implemented in Chrome and Chromium
        midi.addEventListener('onconnect', function (e) {
          _log$info$warn$error$typeString.log('device connected', e);
        }, false);

        midi.addEventListener('ondisconnect', function (e) {
          _log$info$warn$error$typeString.log('device disconnected', e);
        }, false);

        // export
        data.inputs = inputs;
        data.outputs = outputs;

        resolve(data);
      }, function onReject(e) {
        //console.log(e);
        reject('Something went wrong while requesting MIDIAccess');
      });
      // browsers without WebMIDI API
    } else {
      data.midi = false;
      resolve(data);
    }
  });
}

function initMidiSong(song) {

  songMidiEventListener = function (e) {
    //console.log(e);
    handleMidiMessageSong(song, e, this);
  };

  // by default a song listens to all available midi-in ports
  inputs.forEach(function (port) {
    port.addEventListener('midimessage', songMidiEventListener);
    song.midiInputs.set(port.id, port);
  });

  outputs.forEach(function (port) {
    song.midiOutputs.set(port.id, port);
  });
}

function setMidiInputSong(song, id, flag) {
  var input = inputs.get(id);

  if (input === undefined) {
    _log$info$warn$error$typeString.warn('no midi input with id', id, 'found');
    return;
  }

  if (flag === false) {
    song.midiInputs['delete'](id);
    input.removeEventListener('midimessage', songMidiEventListener);
  } else {
    song.midiInputs.set(id, input);
    input.addEventListener('midimessage', songMidiEventListener);
  }

  var tracks = song.tracks;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = tracks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var track = _step3.value;

      track.setMidiInput(id, flag);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3['return']) {
        _iterator3['return']();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

function setMidiOutputSong(song, id, flag) {
  var output = outputs.get(id);

  if (output === undefined) {
    _log$info$warn$error$typeString.warn('no midi output with id', id, 'found');
    return;
  }

  if (flag === false) {
    song.midiOutputs['delete'](id);
    var time = song.scheduler.lastEventTime + 100;
    output.send([176, 123, 0], time); // stop all notes
    output.send([176, 121, 0], time); // reset all controllers
  } else {
    song.midiOutputs.set(id, output);
  }

  var tracks = song.tracks;
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = tracks[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var track = _step4.value;

      track.setMidiOutput(id, flag);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4['return']) {
        _iterator4['return']();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
}

function handleMidiMessageSong(song, midiMessageEvent, input) {
  var midiEvent = new (_bind.apply(_MidiEvent2['default'], [null].concat([song.ticks], _toConsumableArray(midiMessageEvent.data))))();

  //console.log(midiMessageEvent.data);

  var tracks = song.tracks;
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = tracks[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var track = _step5.value;

      //console.log(track.midiInputs, input);
      /*
      if(midiEvent.channel === track.channel || track.channel === 0 || track.channel === 'any'){
        handleMidiMessageTrack(midiEvent, track);
      }
      */
      // like in Cubase, midi events from all devices, sent on any midi channel are forwarded to all tracks
      // set track.monitor to false if you don't want to receive midi events on a certain track
      // note that track.monitor is by default set to false and that track.monitor is automatically set to true
      // if you are recording on that track
      //console.log(track.monitor, track.id, input.id);
      if (track.monitor === true && track.midiInputs.get(input.id) !== undefined) {
        handleMidiMessageTrack(midiEvent, track, input);
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5['return']) {
        _iterator5['return']();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  var listeners = song.midiEventListeners.get(midiEvent.type);
  if (listeners !== undefined) {
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = listeners[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var listener = _step6.value;

        listener(midiEvent, input);
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6['return']) {
          _iterator6['return']();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }
  }
}

function handleMidiMessageTrack(track, midiEvent, input) {
  var song = track.song,
      note = undefined,
      listeners = undefined,
      channel = undefined;
  //data = midiMessageEvent.data,
  //midiEvent = createMidiEvent(song.ticks, data[0], data[1], data[2]);

  //midiEvent.source = midiMessageEvent.srcElement.name;
  //console.log(midiMessageEvent)
  //console.log('---->', midiEvent.type);

  // add the exact time of this event so we can calculate its ticks position
  midiEvent.recordMillis = context.currentTime * 1000; // millis
  midiEvent.state = 'recorded';

  if (midiEvent.type === 144) {
    note = createMidiNote(midiEvent);
    track.recordingNotes[midiEvent.data1] = note;
    //track.song.recordingNotes[note.id] = note;
  } else if (midiEvent.type === 128) {
    note = track.recordingNotes[midiEvent.data1];
    // check if the note exists: if the user plays notes on her keyboard before the midi system has
    // been fully initialized, it can happen that the first incoming midi event is a NOTE OFF event
    if (note === undefined) {
      return;
    }
    note.addNoteOff(midiEvent);
    delete track.recordingNotes[midiEvent.data1];
    //delete track.song.recordingNotes[note.id];
  }

  //console.log(song.preroll, song.recording, track.recordEnabled);

  if ((song.prerolling || song.recording) && track.recordEnabled === 'midi') {
    if (midiEvent.type === 144) {
      track.song.recordedNotes.push(note);
    }
    track.recordPart.addEvent(midiEvent);
    // song.recordedEvents is used in the key editor
    track.song.recordedEvents.push(midiEvent);
  } else if (track.enableRetrospectiveRecording) {
    track.retrospectiveRecording.push(midiEvent);
  }

  // call all midi event listeners
  listeners = track.midiEventListeners[midiEvent.type];
  if (listeners !== undefined) {
    objectForEach(listeners, function (listener) {
      listener(midiEvent, input);
    });
  }

  channel = track.channel;
  if (channel === 'any' || channel === undefined || isNaN(channel) === true) {
    channel = 0;
  }

  objectForEach(track.midiOutputs, function (output) {
    //console.log('midi out', output, midiEvent.type);
    if (midiEvent.type === 128 || midiEvent.type === 144 || midiEvent.type === 176) {
      //console.log(midiEvent.type, midiEvent.data1, midiEvent.data2);
      output.send([midiEvent.type, midiEvent.data1, midiEvent.data2]);
      // }else if(midiEvent.type === 192){
      //     output.send([midiEvent.type + channel, midiEvent.data1]);
    }
    //output.send([midiEvent.status + channel, midiEvent.data1, midiEvent.data2]);
  });

  // @TODO: maybe a track should be able to send its event to both a midi-out port and an internal heartbeat song?
  //console.log(track.routeToMidiOut);
  if (track.routeToMidiOut === false) {
    midiEvent.track = track;
    track.instrument.processEvent(midiEvent);
  }
}

function addMidiEventListener() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // caller can be a track or a song

  var id = midiEventListenerId++;
  var listener = undefined;
  types = {}, ids = [], loop;

  // should I inline this?
  loop = function (args) {
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = args[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var arg = _step7.value;

        var type = _log$info$warn$error$typeString.typeString(arg);
        //console.log(type);
        if (type === 'array') {
          loop(arg);
        } else if (type === 'function') {
          listener = arg;
        } else if (isNaN(arg) === false) {
          arg = parseInt(arg, 10);
          if (sequencer.checkEventType(arg) !== false) {
            types[arg] = arg;
          }
        } else if (type === 'string') {
          if (sequencer.checkEventType(arg) !== false) {
            arg = sequencer.midiEventNumberByName(arg);
            types[arg] = arg;
          }
        }
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7['return']) {
          _iterator7['return']();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }
  };

  loop(args, 0, args.length);
  //console.log('types', types, 'listener', listener);

  objectForEach(types, function (type) {
    //console.log(type);
    if (obj.midiEventListeners[type] === undefined) {
      obj.midiEventListeners[type] = {};
    }
    obj.midiEventListeners[type][id] = listener;
    ids.push(type + '_' + id);
  });

  //console.log(obj.midiEventListeners);
  return ids.length === 1 ? ids[0] : ids;
}

function removeMidiEventListener(id, obj) {
  var type;
  id = id.split('_');
  type = id[0];
  id = id[1];
  delete obj.midiEventListeners[type][id];
}

function removeMidiEventListeners() {}

exports['default'] = initMidi;

},{"./midi_event":"/home/abudaan/workspace/qambi/src/midi_event.js","./util":"/home/abudaan/workspace/qambi/src/util.js"}],"/home/abudaan/workspace/qambi/src/instrument.js":[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

var _bind = Function.prototype.bind;
var _slice = Array.prototype.slice;

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createInstrument = createInstrument;

var _log$info$warn$error = require('./util');

var _getNoteNumber = require('./note');

var _createSample = require('./sample');

var _createSample2 = _interopRequireWildcard(_createSample);

'use strict';

var Instrument = (function () {
  function Instrument() {
    _classCallCheck(this, Instrument);

    this.samplesData = new Array(128).fill(-1);
    this.samplesData = this.samplesData.map(function () {
      return new Array(128).fill(-1);
    });
    this.scheduledSamples = new Map();
  }

  _createClass(Instrument, [{
    key: 'processEvent',
    value: function processEvent(event) {
      var _this = this;

      if (event.type === 128) {
        var _ret = (function () {
          // stop sample
          if (event.midiNote === undefined) {
            return {
              v: undefined
            };
          }
          var id = event.midiNote.id;
          var sample = _this.scheduledSamples.get(id);
          sample.stop(event.time, function () {
            return _this.scheduledSamples['delete'](id);
          });
        })();

        if (typeof _ret === 'object') {
          return _ret.v;
        }
      } else if (event.type === 144) {
        // start sample
        if (event.midiNote === undefined) {
          return;
        }
        var sampleData = this.samplesData[event.noteNumber][event.velocity];
        var sample = _createSample2['default'](sampleData, event);
        this.scheduledSamples.set(event.midiNote.id, sample);
        sample.start();
      }
    }
  }, {
    key: 'addSampleData',

    /*
      @param noteId can be note name (C4) or note number (60)
      @param audio buffer
      @param config (optional)
        {
          sustain: [sustainStart, sustainEnd], // optional, in millis
          release: [releaseDuration, releaseEnvelope], // optional
          pan: panPosition // optional
          velocity: [velocityStart, velocityEnd] // optional, for multi-layered instruments
        }
    */
    value: function addSampleData(noteId, audioBuffer) {
      var _ref = arguments[2] === undefined ? {} : arguments[2];

      var _ref$sustain = _ref.sustain;
      var sustain = _ref$sustain === undefined ? [false, false] : _ref$sustain;
      var _ref$release = _ref.release;
      var release = _ref$release === undefined ? [false, 'default'] : _ref$release;
      var _ref$pan = _ref.pan;
      var pan = _ref$pan === undefined ? false : _ref$pan;
      var _ref$velocity = _ref.velocity;
      var velocity = _ref$velocity === undefined ? [0, 127] : _ref$velocity;

      if (audioBuffer instanceof AudioBuffer === false) {
        _log$info$warn$error.warn('not a valid AudioBuffer instance');
        return;
      }

      var _sustain = _slicedToArray(sustain, 2);

      var sustainStart = _sustain[0];
      var sustainEnd = _sustain[1];

      var _release = _slicedToArray(release, 2);

      var releaseDuration = _release[0];
      var releaseEnvelope = _release[1];

      var _velocity = _slicedToArray(velocity, 2);

      var velocityStart = _velocity[0];
      var velocityEnd = _velocity[1];

      if (sustain.length !== 2) {
        sustainStart = sustainEnd = false;
      }

      if (releaseDuration === false) {
        releaseEnvelope = false;
      }

      // log(sustainStart, sustainEnd);
      // log(releaseDuration, releaseEnvelope);
      // log(panPosition);
      // log(velocityStart, velocityEnd);

      if (isNaN(noteId)) {
        noteId = _getNoteNumber.getNoteNumber(noteId);
        if (isNaN(noteId)) {
          _log$info$warn$error.warn(noteId);
        }
      }

      this.samplesData[noteId].fill({
        n: noteId,
        d: audioBuffer,
        s1: sustainStart,
        s2: sustainEnd,
        r: releaseDuration,
        e: releaseEnvelope,
        p: pan
      }, velocityStart, velocityEnd + 1);

      //console.log(this.samplesData[noteId]);
    }
  }]);

  return Instrument;
})();

exports.Instrument = Instrument;

function createInstrument() {
  return new (_bind.apply(Instrument, [null].concat(_slice.call(arguments))))();
}

},{"./note":"/home/abudaan/workspace/qambi/src/note.js","./sample":"/home/abudaan/workspace/qambi/src/sample.js","./util":"/home/abudaan/workspace/qambi/src/util.js"}],"/home/abudaan/workspace/qambi/src/midi_event.js":[function(require,module,exports){
'use strict';

var _bind = Function.prototype.bind;
var _slice = Array.prototype.slice;

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createMIDIEvent = createMIDIEvent;

var _log$info$warn$error$typeString = require('./util');

var _createNote = require('./note.js');

/**
  @public
  @class MIDIEvent
  @param time {int} the time that the event is scheduled
  @param type {int} type of MIDIEvent, e.g. NOTE_ON, NOTE_OFF or, 144, 128, etc.
  @param data1 {int} if type is 144 or 128: note number
  @param [data2] {int} if type is 144 or 128: velocity
  @param [channel] {int} channel


  @example
  // plays the central c at velocity 100
  let event = sequencer.createMIDIEvent(120, sequencer.NOTE_ON, 60, 100);

  // pass arguments as array
  let event = sequencer.createMIDIEvent([120, sequencer.NOTE_ON, 60, 100]);

*/

'use strict';

var midiEventId = 0;

/*
  arguments:
   - [ticks, type, data1, data2, channel]
   - ticks, type, data1, data2, channel

  data2 and channel are optional but must be numbers if provided
*/

var MIDIEvent = (function () {
  function MIDIEvent() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, MIDIEvent);

    var note = undefined;

    this.id = 'M' + midiEventId++ + new Date().getTime();
    this.eventNumber = midiEventId;
    this.time = 0;
    this.muted = false;

    if (args === undefined || args.length === 0) {
      // bypass contructor for cloning
      return;
    } else if (_log$info$warn$error$typeString.typeString(args[0]) === 'midimessageevent') {
      _log$info$warn$error$typeString.info('midimessageevent');
      return;
    } else if (_log$info$warn$error$typeString.typeString(args[0]) === 'array') {
      // support for un-spreaded parameters
      args = args[0];
      if (_log$info$warn$error$typeString.typeString(args[0]) === 'array') {
        // support for passing parameters in an array
        args = args[0];
      }
    }

    args.forEach(function (data, i) {
      if (isNaN(data) && i < 5) {
        _log$info$warn$error$typeString.error('please provide numbers for ticks, type, data1 and optionally for data2 and channel');
      }
    });

    this.ticks = args[0];
    this.status = args[1];
    this.type = (this.status >> 4) * 16;
    //console.log(this.type, this.status);
    if (this.type >= 128 && this.type <= 224) {
      //the higher 4 bits of the status byte is the command
      this.command = this.type;
      //the lower 4 bits of the status byte is the channel number
      this.channel = (this.status & 15) + 1; // from zero-based to 1-based
    } else {
      this.type = this.status;
      this.channel = args[4] || 1;
    }

    this.sortIndex = this.type + this.ticks; // note off events come before note on events

    switch (this.type) {
      case 0:
        break;
      case 128:
        this.data1 = args[2];
        note = _createNote.createNote(this.data1);
        this.note = note;
        this.noteName = note.fullName;
        this.noteNumber = note.number;
        this.octave = note.octave;
        this.frequency = note.frequency;
        this.data2 = 0; //data[3];
        this.velocity = this.data2;
        break;
      case 144:
        this.data1 = args[2]; //note number
        this.data2 = args[3]; //velocity
        if (this.data2 === 0) {
          //if velocity is 0, this is a NOTE OFF event
          this.type = 128;
        }
        note = _createNote.createNote(this.data1);
        this.note = note;
        this.noteName = note.fullName;
        this.noteNumber = note.number;
        this.octave = note.octave;
        this.frequency = note.frequency;
        this.velocity = this.data2;
        break;
      case 81:
        this.bpm = args[2];
        break;
      case 88:
        this.nominator = args[2];
        this.denominator = args[3];
        break;
      case 176:
        // control change
        this.data1 = args[2];
        this.data2 = args[3];
        this.controllerType = args[2];
        this.controllerValue = args[3];
        break;
      case 192:
        // program change
        this.data1 = args[2];
        this.programNumber = args[2];
        break;
      case 208:
        // channel pressure
        this.data1 = args[2];
        this.data2 = args[3];
        break;
      case 224:
        // pitch bend
        this.data1 = args[2];
        this.data2 = args[3];
        break;
      case 47:
        break;
      default:
        _log$info$warn$error$typeString.warn('not a recognized type of midi event!');
    }
  }

  _createClass(MIDIEvent, [{
    key: 'clone',
    value: function clone() {
      var event = new MIDIEvent();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(this)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var property = _step.value;

          if (property !== 'id' && property !== 'eventNumber' && property !== 'midiNote') {
            event[property] = this[property];
          }
          event.song = undefined;
          event.track = undefined;
          event.trackId = undefined;
          event.part = undefined;
          event.partId = undefined;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return event;
    }
  }, {
    key: 'transpose',
    value: function transpose(semi) {
      if (this.type !== 128 && this.type !== 144) {
        _log$info$warn$error$typeString.error('you can only transpose note on and note off events');
        return;
      }

      //console.log('transpose', semi);
      if (_log$info$warn$error$typeString.typeString(semi) === 'array') {
        var type = semi[0];
        if (type === 'hertz') {} else if (type === 'semi' || type === 'semitone') {
          semi = semi[1];
        }
      } else if (isNaN(semi) === true) {
        _log$info$warn$error$typeString.error('please provide a number');
        return;
      }

      var tmp = this.data1 + parseInt(semi, 10);
      if (tmp < 0) {
        tmp = 0;
      } else if (tmp > 127) {
        tmp = 127;
      }
      this.data1 = tmp;
      var note = _createNote.createNote(this.data1);
      this.note = note;
      this.noteName = note.fullName;
      this.noteNumber = note.number;
      this.octave = note.octave;
      this.frequency = note.frequency;

      if (this.midiNote !== undefined) {
        this.midiNote.pitch = this.data1;
      }

      if (this.state !== 'new') {
        this.state = 'transposed';
      }
      this.update();
    }
  }, {
    key: 'setPitch',
    value: function setPitch(pitch) {
      if (this.type !== 128 && this.type !== 144) {
        _log$info$warn$error$typeString.error('you can only set the pitch of note on and note off events');
        return;
      }
      if (_log$info$warn$error$typeString.typeString(pitch) === 'array') {
        var type = pitch[0];
        if (type === 'hertz') {} else if (type === 'semi' || type === 'semitone') {
          pitch = pitch[1];
        }
      } else if (isNaN(pitch) === true) {
        _log$info$warn$error$typeString.error('please provide a number');
        return;
      }

      this.data1 = parseInt(pitch, 10);
      var note = _createNote.createNote(this.data1);
      this.note = note;
      this.noteName = note.fullName;
      this.noteNumber = note.number;
      this.octave = note.octave;
      this.frequency = note.frequency;

      if (this.midiNote !== undefined) {
        this.midiNote.pitch = this.data1;
      }
      if (this.state !== 'new') {
        this.state = 'transposed';
      }
      this.update();
    }
  }, {
    key: 'move',
    value: function move(ticks) {
      if (isNaN(ticks)) {
        _log$info$warn$error$typeString.error('please provide a number');
        return;
      }
      this.ticks += parseInt(ticks, 10);
      //@todo: set duration of midi note
      if (this.state !== 'new') {
        this.state = 'moved';
      }
      this.update();
    }
  }, {
    key: 'moveTo',
    value: function moveTo() {
      for (var _len2 = arguments.length, position = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        position[_key2] = arguments[_key2];
      }

      if (position[0] === 'ticks' && isNaN(position[1]) === false) {
        this.ticks = parseInt(position[1], 10);
      } else if (this.song === undefined) {
        console.error('The midi event has not been added to a song yet; you can only move to ticks values');
      } else {
        position = this.song.getPosition(position);
        if (position === false) {
          console.error('wrong position data');
        } else {
          this.ticks = position.ticks;
        }
      }

      if (this.state !== 'new') {
        this.state = 'moved';
      }
      this.update();
    }
  }, {
    key: 'reset',
    value: function reset() {
      var fromPart = arguments[0] === undefined ? true : arguments[0];
      var fromTrack = arguments[1] === undefined ? true : arguments[1];
      var fromSong = arguments[2] === undefined ? true : arguments[2];

      if (fromPart) {
        this.part = undefined;
        this.partId = undefined;
      }
      if (fromTrack) {
        this.track = undefined;
        this.trackId = undefined;
        this.channel = 0;
      }
      if (fromSong) {
        this.song = undefined;
      }
      this.state = 'removed';
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.part !== undefined) {
        this.part._changedEvents.set(this.id, this);
      }
    }
  }]);

  return MIDIEvent;
})();

exports.MIDIEvent = MIDIEvent;

function createMIDIEvent() {
  return new (_bind.apply(MIDIEvent, [null].concat(_slice.call(arguments))))();
}

//convert hertz to semi

//convert hertz to pitch

},{"./note.js":"/home/abudaan/workspace/qambi/src/note.js","./util":"/home/abudaan/workspace/qambi/src/util.js"}],"/home/abudaan/workspace/qambi/src/midi_parse.js":[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = parseMIDIFile;

var _createMIDIStream = require('./midi_stream');

var _createMIDIStream2 = _interopRequireWildcard(_createMIDIStream);

/*
  Extracts all midi events from a binary midi file, uses midi_stream.js

  based on: https://github.com/gasman/jasmid
*/

'use strict';

var lastEventTypeByte = undefined,
    trackName = undefined;

function readChunk(stream) {
  var id = stream.read(4, true);
  var length = stream.readInt32();
  //console.log(length);
  return {
    id: id,
    length: length,
    data: stream.read(length, false)
  };
}

function readEvent(stream) {
  var event = {};
  var length;
  event.deltaTime = stream.readVarInt();
  var eventTypeByte = stream.readInt8();
  //console.log(eventTypeByte, eventTypeByte & 0x80, 146 & 0x0f);
  if ((eventTypeByte & 240) == 240) {
    /* system / meta event */
    if (eventTypeByte == 255) {
      /* meta event */
      event.type = 'meta';
      var subtypeByte = stream.readInt8();
      length = stream.readVarInt();
      switch (subtypeByte) {
        case 0:
          event.subtype = 'sequenceNumber';
          if (length !== 2) {
            throw 'Expected length for sequenceNumber event is 2, got ' + length;
          }
          event.number = stream.readInt16();
          return event;
        case 1:
          event.subtype = 'text';
          event.text = stream.read(length);
          return event;
        case 2:
          event.subtype = 'copyrightNotice';
          event.text = stream.read(length);
          return event;
        case 3:
          event.subtype = 'trackName';
          event.text = stream.read(length);
          trackName = event.text;
          return event;
        case 4:
          event.subtype = 'instrumentName';
          event.text = stream.read(length);
          return event;
        case 5:
          event.subtype = 'lyrics';
          event.text = stream.read(length);
          return event;
        case 6:
          event.subtype = 'marker';
          event.text = stream.read(length);
          return event;
        case 7:
          event.subtype = 'cuePoint';
          event.text = stream.read(length);
          return event;
        case 32:
          event.subtype = 'midiChannelPrefix';
          if (length !== 1) {
            throw 'Expected length for midiChannelPrefix event is 1, got ' + length;
          }
          event.channel = stream.readInt8();
          return event;
        case 47:
          event.subtype = 'endOfTrack';
          if (length !== 0) {
            throw 'Expected length for endOfTrack event is 0, got ' + length;
          }
          return event;
        case 81:
          event.subtype = 'setTempo';
          if (length !== 3) {
            throw 'Expected length for setTempo event is 3, got ' + length;
          }
          event.microsecondsPerBeat = (stream.readInt8() << 16) + (stream.readInt8() << 8) + stream.readInt8();
          return event;
        case 84:
          event.subtype = 'smpteOffset';
          if (length !== 5) {
            throw 'Expected length for smpteOffset event is 5, got ' + length;
          }
          var hourByte = stream.readInt8();
          event.frameRate = ({
            0: 24, 32: 25, 64: 29, 96: 30
          })[hourByte & 96];
          event.hour = hourByte & 31;
          event.min = stream.readInt8();
          event.sec = stream.readInt8();
          event.frame = stream.readInt8();
          event.subframe = stream.readInt8();
          return event;
        case 88:
          event.subtype = 'timeSignature';
          if (length !== 4) {
            throw 'Expected length for timeSignature event is 4, got ' + length;
          }
          event.numerator = stream.readInt8();
          event.denominator = Math.pow(2, stream.readInt8());
          event.metronome = stream.readInt8();
          event.thirtyseconds = stream.readInt8();
          return event;
        case 89:
          event.subtype = 'keySignature';
          if (length !== 2) {
            throw 'Expected length for keySignature event is 2, got ' + length;
          }
          event.key = stream.readInt8(true);
          event.scale = stream.readInt8();
          return event;
        case 127:
          event.subtype = 'sequencerSpecific';
          event.data = stream.read(length);
          return event;
        default:
          //if(sequencer.debug >= 2){
          //    console.warn('Unrecognised meta event subtype: ' + subtypeByte);
          //}
          event.subtype = 'unknown';
          event.data = stream.read(length);
          return event;
      }
      event.data = stream.read(length);
      return event;
    } else if (eventTypeByte == 240) {
      event.type = 'sysEx';
      length = stream.readVarInt();
      event.data = stream.read(length);
      return event;
    } else if (eventTypeByte == 247) {
      event.type = 'dividedSysEx';
      length = stream.readVarInt();
      event.data = stream.read(length);
      return event;
    } else {
      throw 'Unrecognised MIDI event type byte: ' + eventTypeByte;
    }
  } else {
    /* channel event */
    var param1 = undefined;
    if ((eventTypeByte & 128) === 0) {
      /* running status - reuse lastEventTypeByte as the event type.
        eventTypeByte is actually the first parameter
      */
      //console.log('running status');
      param1 = eventTypeByte;
      eventTypeByte = lastEventTypeByte;
    } else {
      param1 = stream.readInt8();
      //console.log('last', eventTypeByte);
      lastEventTypeByte = eventTypeByte;
    }
    var eventType = eventTypeByte >> 4;
    event.channel = eventTypeByte & 15;
    event.type = 'channel';
    switch (eventType) {
      case 8:
        event.subtype = 'noteOff';
        event.noteNumber = param1;
        event.velocity = stream.readInt8();
        return event;
      case 9:
        event.noteNumber = param1;
        event.velocity = stream.readInt8();
        if (event.velocity === 0) {
          event.subtype = 'noteOff';
        } else {
          event.subtype = 'noteOn';
          //console.log('noteOn');
        }
        return event;
      case 10:
        event.subtype = 'noteAftertouch';
        event.noteNumber = param1;
        event.amount = stream.readInt8();
        return event;
      case 11:
        event.subtype = 'controller';
        event.controllerType = param1;
        event.value = stream.readInt8();
        return event;
      case 12:
        event.subtype = 'programChange';
        event.programNumber = param1;
        return event;
      case 13:
        event.subtype = 'channelAftertouch';
        event.amount = param1;
        //if(trackName === 'SH-S1-44-C09 L=SML IN=3'){
        //    console.log('channel pressure', trackName, param1);
        //}
        return event;
      case 14:
        event.subtype = 'pitchBend';
        event.value = param1 + (stream.readInt8() << 7);
        return event;
      default:
        /*
        throw 'Unrecognised MIDI event type: ' + eventType;
        console.log('Unrecognised MIDI event type: ' + eventType);
        */

        event.value = stream.readInt8();
        event.subtype = 'unknown';
        //console.log(event);
        /*
                event.noteNumber = param1;
                event.velocity = stream.readInt8();
                event.subtype = 'noteOn';
                console.log('weirdo', trackName, param1, event.velocity);
        */

        return event;
    }
  }
}

function parseMIDIFile(buffer) {
  var tracks = new Map();
  var stream = _createMIDIStream2['default'](new Uint8Array(buffer));

  var headerChunk = readChunk(stream);
  if (headerChunk.id !== 'MThd' || headerChunk.length !== 6) {
    throw 'Bad .mid file - header not found';
  }

  var headerStream = _createMIDIStream2['default'](headerChunk.data);
  var formatType = headerStream.readInt16();
  var trackCount = headerStream.readInt16();
  var timeDivision = headerStream.readInt16();

  if (timeDivision & 32768) {
    throw 'Expressing time division in SMTPE frames is not supported yet';
  }

  var header = {
    formatType: formatType,
    trackCount: trackCount,
    ticksPerBeat: timeDivision
  };

  for (var i = 0; i < trackCount; i++) {
    trackName = 'track_' + i;
    var track = [];
    var trackChunk = readChunk(stream);
    if (trackChunk.id !== 'MTrk') {
      throw 'Unexpected chunk - expected MTrk, got ' + trackChunk.id;
    }
    var trackStream = _createMIDIStream2['default'](trackChunk.data);
    while (!trackStream.eof()) {
      var _event = readEvent(trackStream);
      track.push(_event);
    }
    tracks.set(trackName, track);
  }

  return {
    header: header,
    tracks: tracks
  };
}

module.exports = exports['default'];

},{"./midi_stream":"/home/abudaan/workspace/qambi/src/midi_stream.js"}],"/home/abudaan/workspace/qambi/src/midi_stream.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createMIDIStream;
/*
  Wrapper for accessing bytes through sequential reads

  based on: https://github.com/gasman/jasmid
  adapted to work with ArrayBuffer -> Uint8Array
*/

'use strict';

var fcc = String.fromCharCode;

var MIDIStream = (function () {

  // buffer is Uint8Array

  function MIDIStream(buffer) {
    _classCallCheck(this, MIDIStream);

    this.buffer = buffer;
    this.position = 0;
  }

  _createClass(MIDIStream, [{
    key: 'read',

    /* read string or any number of bytes */
    value: function read(length) {
      var toString = arguments[1] === undefined ? true : arguments[1];

      var result = undefined;

      if (toString) {
        result = '';
        for (var i = 0; i < length; i++, this.position++) {
          result += fcc(this.buffer[this.position]);
        }
        return result;
      } else {
        result = [];
        for (var i = 0; i < length; i++, this.position++) {
          result.push(this.buffer[this.position]);
        }
        return result;
      }
    }
  }, {
    key: 'readInt32',

    /* read a big-endian 32-bit integer */
    value: function readInt32() {
      var result = (this.buffer[this.position] << 24) + (this.buffer[this.position + 1] << 16) + (this.buffer[this.position + 2] << 8) + this.buffer[this.position + 3];
      this.position += 4;
      return result;
    }
  }, {
    key: 'readInt16',

    /* read a big-endian 16-bit integer */
    value: function readInt16() {
      var result = (this.buffer[this.position] << 8) + this.buffer[this.position + 1];
      this.position += 2;
      return result;
    }
  }, {
    key: 'readInt8',

    /* read an 8-bit integer */
    value: function readInt8(signed) {
      var result = this.buffer[this.position];
      if (signed && result > 127) {
        result -= 256;
      }
      this.position += 1;
      return result;
    }
  }, {
    key: 'eof',
    value: function eof() {
      return this.position >= this.buffer.length;
    }
  }, {
    key: 'readVarInt',

    /* read a MIDI-style letiable-length integer
      (big-endian value in groups of 7 bits,
      with top bit set to signify that another byte follows)
    */
    value: function readVarInt() {
      var result = 0;
      while (true) {
        var b = this.readInt8();
        if (b & 128) {
          result += b & 127;
          result <<= 7;
        } else {
          /* b is the last byte */
          return result + b;
        }
      }
    }
  }]);

  return MIDIStream;
})();

exports.MIDIStream = MIDIStream;

function createMIDIStream(buffer) {
  return new MIDIStream(buffer);
}

},{}],"/home/abudaan/workspace/qambi/src/note.js":[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

/*
  arguments
  - noteNumber: 60
  - noteNumber and notename mode: 60, 'sharp'
  - noteName: 'C#4'
  - name and octave: 'C#', 4
  - note name, octave, note name mode: 'D', 4, 'sharp'
  - data object:
    {
      name: 'C',
      octave: 4
    }
    or
    {
      frequency: 234.16
    }
*/

exports.createNote = createNote;
exports.getNoteNumber = getNoteNumber;
exports.getNoteName = getNoteName;
exports.getNoteOctave = getNoteOctave;
exports.getFullNoteName = getFullNoteName;
exports.getFrequency = getFrequency;
exports.isBlackKey = isBlackKey;

var _getConfig = require('./config');

var _getConfig2 = _interopRequireWildcard(_getConfig);

var _log$info$warn$error$typeString = require('./util');

/*
  Adds a function to create a note object that contains information about a musical note:
    - name, e.g. 'C'
    - octave,  -1 - 9
    - fullName: 'C1'
    - frequency: 234.16, based on the basic pitch
    - number: 60 midi note number

  Adds several utility methods organised around the note object
*/

'use strict';

var errorMsg = undefined,
    warningMsg = undefined,
    config = _getConfig2['default'](),
    pow = Math.pow,
    floor = Math.floor;

var noteNames = {
  sharp: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  flat: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
  'enharmonic-sharp': ['B#', 'C#', 'C##', 'D#', 'D##', 'E#', 'F#', 'F##', 'G#', 'G##', 'A#', 'A##'],
  'enharmonic-flat': ['Dbb', 'Db', 'Ebb', 'Eb', 'Fb', 'Gbb', 'Gb', 'Abb', 'Ab', 'Bbb', 'Bb', 'Cb']
};
function createNote() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var numArgs = args.length,
      data = undefined,
      octave = undefined,
      noteName = undefined,
      noteNumber = undefined,
      noteNameMode = undefined,
      arg0 = args[0],
      arg1 = args[1],
      arg2 = args[2],
      type0 = _log$info$warn$error$typeString.typeString(arg0),
      type1 = _log$info$warn$error$typeString.typeString(arg1),
      type2 = _log$info$warn$error$typeString.typeString(arg2);

  errorMsg = '';
  warningMsg = '';

  // argument: note number
  if (numArgs === 1 && type0 === 'number') {
    if (arg0 < 0 || arg0 > 127) {
      errorMsg = 'please provide a note number >= 0 and <= 127 ' + arg0;
    } else {
      noteNumber = arg0;
      data = _getNoteName(noteNumber);
      noteName = data[0];
      octave = data[1];
    }

    // arguments: full note name
  } else if (numArgs === 1 && type0 === 'string') {
    data = _checkNoteName(arg0);
    if (errorMsg === '') {
      noteName = data[0];
      octave = data[1];
      noteNumber = _getNoteNumber(noteName, octave);
    }

    // arguments: note name, octave
  } else if (numArgs === 2 && type0 === 'string' && type1 === 'number') {
    data = _checkNoteName(arg0, arg1);
    if (errorMsg === '') {
      noteName = data[0];
      octave = data[1];
      noteNumber = _getNoteNumber(noteName, octave);
    }

    // arguments: full note name, note name mode -> for converting between note name modes
  } else if (numArgs === 2 && type0 === 'string' && type1 === 'string') {
    data = _checkNoteName(arg0);
    if (errorMsg === '') {
      noteNameMode = _checkNoteNameMode(arg1);
      noteName = data[0];
      octave = data[1];
      noteNumber = _getNoteNumber(noteName, octave);
    }

    // arguments: note number, note name mode
  } else if (numArgs === 2 && _log$info$warn$error$typeString.typeString(arg0) === 'number' && _log$info$warn$error$typeString.typeString(arg1) === 'string') {
    if (arg0 < 0 || arg0 > 127) {
      errorMsg = 'please provide a note number >= 0 and <= 127 ' + arg0;
    } else {
      noteNameMode = _checkNoteNameMode(arg1);
      noteNumber = arg0;
      data = _getNoteName(noteNumber, noteNameMode);
      noteName = data[0];
      octave = data[1];
    }

    // arguments: note name, octave, note name mode
  } else if (numArgs === 3 && type0 === 'string' && type1 === 'number' && type2 === 'string') {
    data = _checkNoteName(arg0, arg1);
    if (errorMsg === '') {
      noteNameMode = _checkNoteNameMode(arg2);
      noteName = data[0];
      octave = data[1];
      noteNumber = _getNoteNumber(noteName, octave);
    }
  } else {
    errorMsg = 'wrong arguments, please consult documentation';
  }

  if (errorMsg) {
    _log$info$warn$error$typeString.error(errorMsg);
    return false;
  }

  if (warningMsg) {
    _log$info$warn$error$typeString.warn(warningMsg);
  }

  var note = {
    name: noteName,
    octave: octave,
    fullName: noteName + octave,
    number: noteNumber,
    frequency: _getFrequency(noteNumber),
    blackKey: _isBlackKey(noteNumber)
  };
  Object.freeze(note);
  return note;
}

function _getNoteName(number) {
  var mode = arguments[1] === undefined ? config.get('noteNameMode') : arguments[1];

  //let octave = Math.floor((number / 12) - 2), // → in Cubase central C = C3 instead of C4
  var octave = floor(number / 12 - 1);
  var noteName = noteNames[mode][number % 12];
  return [noteName, octave];
}

function _getNoteNumber(name, octave) {
  var keys = Object.keys(noteNames);
  var index = undefined;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      var mode = noteNames[key];
      index = mode.findIndex(function (x) {
        return x === name;
      });
      if (index !== -1) {
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  //number = (index + 12) + (octave * 12) + 12; // → in Cubase central C = C3 instead of C4
  var number = index + 12 + octave * 12; // → midi standard + scientific naming, see: http://en.wikipedia.org/wiki/Middle_C and http://en.wikipedia.org/wiki/Scientific_pitch_notation

  if (number < 0 || number > 127) {
    errorMsg = 'please provide a note between C0 and G10';
    return;
  }
  return number;
}

function _getFrequency(number) {
  return config.get('pitch') * pow(2, (number - 69) / 12); // midi standard, see: http://en.wikipedia.org/wiki/MIDI_Tuning_Standard
}

// TODO: calculate note from frequency
function _getPitch(hertz) {}

function _checkNoteNameMode(mode) {
  var keys = Object.keys(noteNames);
  var result = keys.find(function (x) {
    return x === mode;
  }) !== undefined;
  if (result === false) {
    mode = config.get('noteNameMode');
    warningMsg = mode + ' is not a valid note name mode, using "' + mode + '" instead';
  }
  return mode;
}

function _checkNoteName() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var numArgs = args.length,
      arg0 = args[0],
      arg1 = args[1],
      char = undefined,
      name = '',
      octave = '';

  // extract octave from note name
  if (numArgs === 1) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = arg0[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        char = _step2.value;

        if (isNaN(char) && char !== '-') {
          name += char;
        } else {
          octave += char;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
          _iterator2['return']();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    if (octave === '') {
      octave = 0;
    }
  } else if (numArgs === 2) {
    name = arg0;
    octave = arg1;
  }

  // check if note name is valid
  var keys = Object.keys(noteNames);
  var index = -1;

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var key = _step3.value;

      var mode = noteNames[key];
      index = mode.findIndex(function (x) {
        return x === name;
      });
      if (index !== -1) {
        break;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3['return']) {
        _iterator3['return']();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  if (index === -1) {
    errorMsg = arg0 + ' is not a valid note name, please use letters A - G and if necessary an accidental like #, ##, b or bb, followed by a number for the octave';
    return;
  }

  if (octave < -1 || octave > 9) {
    errorMsg = 'please provide an octave between -1 and 9';
    return;
  }

  octave = parseInt(octave, 10);
  name = name.substring(0, 1).toUpperCase() + name.substring(1);

  //console.log(name,'|',octave);
  return [name, octave];
}

function _isBlackKey(noteNumber) {
  var black = undefined;

  switch (true) {
    case noteNumber % 12 === 1: //C#
    case noteNumber % 12 === 3: //D#
    case noteNumber % 12 === 6: //F#
    case noteNumber % 12 === 8: //G#
    case noteNumber % 12 === 10:
      //A#
      black = true;
      break;
    default:
      black = false;
  }

  return black;
}

function getNoteNumber() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var note = createNote.apply(undefined, args);
  if (note) {
    return note.number;
  }
  return errorMsg;
}

function getNoteName() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  var note = createNote.apply(undefined, args);
  if (note) {
    return note.name;
  }
  return false;
}

function getNoteOctave() {
  for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var note = createNote.apply(undefined, args);
  if (note) {
    return note.octave;
  }
  return false;
}

function getFullNoteName() {
  for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  var note = createNote.apply(undefined, args);
  if (note) {
    return note.fullName;
  }
  return false;
}

function getFrequency() {
  for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var note = createNote.apply(undefined, args);
  if (note) {
    return note.frequency;
  }
  return false;
}

function isBlackKey() {
  for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    args[_key8] = arguments[_key8];
  }

  var note = createNote.apply(undefined, args);
  if (note) {
    return note.blackKey;
  }
  return false;
}

//fm  =  2(m−69)/12(440 Hz).

},{"./config":"/home/abudaan/workspace/qambi/src/config.js","./util":"/home/abudaan/workspace/qambi/src/util.js"}],"/home/abudaan/workspace/qambi/src/part.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createPart = createPart;

var _info = require('./util.js');

var _MIDIEvent = require('./midi_event.js');

var _AudioEvent = require('./audio_event.js');

'use strict';

var partId = 0;

var Part = (function () {
  function Part() {
    var config = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Part);

    this.id = 'P' + partId++ + Date.now();
    this._events = [];
    this.needsUpdate = false;
    this.ticks = 0;

    this._eventsMap = new Map();
    this._numberOfEventsChanged = false;

    if (config.events) {
      this.addEvents(config.events);
    }
    this.name = config.name || this.id;
    config = null;
  }

  _createClass(Part, [{
    key: 'addEvent',
    value: function addEvent(event) {
      if (event instanceof _MIDIEvent.MIDIEvent || event instanceof _AudioEvent.AudioEvent) {
        event.state = 'new';
        this.needsUpdate = true;
        this._numberOfEventsChanged = true;
        this._eventsMap.set(event.id, event);
        return this; // make it chainable
      }
    }
  }, {
    key: 'addEvents',
    value: function addEvents(events) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _event = _step.value;

          this.addEvent(_event);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return this; // make it chainable
    }
  }, {
    key: 'removeEvent',
    value: function removeEvent(event) {
      if (this._eventsMap.has(event.id)) {
        event.reset(true, false, false);
        this.needsUpdate = true;
        this._numberOfEventsChanged = true;
        return this; // make it chainable
      }
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents(events) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = events[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _event2 = _step2.value;

          this.removeEvent(_event2);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return this; // make it chainable
    }
  }, {
    key: 'moveEvent',
    value: function moveEvent(event, ticks) {
      if (this._eventsMap.has(event.id)) {
        event.move(ticks);
        this.needsUpdate = true;
        return this; // make it chainable
      }
    }
  }, {
    key: 'moveEvents',
    value: function moveEvents(events) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = events[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _event3 = _step3.value;

          this.moveEvent(_event3);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
            _iterator3['return']();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return this; // make it chainable
    }
  }, {
    key: 'transposeEvent',
    value: function transposeEvent(event, semitones) {
      if (this._eventsMap.has(event.id)) {
        if (event.type !== 128 && event.type !== 144) {
          return;
        }
        event.transpose(semitones);
        // no need to set needsUpdate to true!
        return this; // make it chainable
      }
    }
  }, {
    key: 'transposeEvents',
    value: function transposeEvents(events) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = events[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _event4 = _step4.value;

          this.transposeEvent(_event4);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4['return']) {
            _iterator4['return']();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return this; // make it chainable
    }
  }, {
    key: 'getEvents',
    value: function getEvents() {
      if (this.needsUpdate) {
        this.update();
      }
      return this._events;
    }
  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      // if number of events has changed update the _events array and the _eventsMap map
      if (this._numberOfEventsChanged === true) {
        this._events = [];
        Array.from(this._eventsMap.values()).forEach(function (event) {
          if (event.state === 'removed') {
            _this._eventsMap['delete'](event.id);
          } else {
            _this._events.push(event);
          }
        });

        if (this.track !== undefined) {
          // tell the track to update its events array as well, this is done when track.update() or song.update() is called
          this.track._numberOfEventsChanged = true;
        }
        this._numberOfEventsChanged = false;
      }

      this._events.sort(function (a, b) {
        return a.ticks <= b.ticks ? -1 : 1;
      });

      // create notes
      var notes = {};
      var n = 0;
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this._events[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _event5 = _step5.value;

          if (_event5.type === 144) {
            notes[_event5.noteNumber] = _event5;
          } else if (_event5.type === 128) {
            var noteOn = notes[_event5.noteNumber];
            //console.log(event.noteNumber, noteOn);
            var noteOff = _event5;
            if (noteOn === undefined) {
              _info.info('no note on event!', n++);
              continue;
            }
            noteOn.noteOff = noteOff;
            noteOff.noteOn = noteOn;
            noteOn.durationTicks = noteOff.ticks - noteOn.ticks;
            delete notes[_event5.noteNumber];
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5['return']) {
            _iterator5['return']();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      this.needsUpdate = false;
    }
  }]);

  return Part;
})();

exports.Part = Part;

function createPart(config) {
  return new Part(config);
}

},{"./audio_event.js":"/home/abudaan/workspace/qambi/src/audio_event.js","./midi_event.js":"/home/abudaan/workspace/qambi/src/midi_event.js","./util.js":"/home/abudaan/workspace/qambi/src/util.js"}],"/home/abudaan/workspace/qambi/src/sample.js":[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createSample;

var _getConfig = require('./config.js');

var _getConfig2 = _interopRequireWildcard(_getConfig);

'use strict';

var config = _getConfig2['default']();

var Sample = (function () {
  function Sample(sampleData, event) {
    _classCallCheck(this, Sample);

    if (sampleData === -1) {
      // create simple synth sample
      this.source = config.context.createOscillator();
      this.source.type = 'sine';
      this.source.frequency.value = event.frequency;
      this.source.connect(config.destination);
    }
  }

  _createClass(Sample, [{
    key: 'start',
    value: function start() {
      console.log(this.source);
      this.source.start();
    }
  }]);

  return Sample;
})();

function createSample(sampleData, event) {
  return new Sample(sampleData, event);
}

module.exports = exports['default'];

},{"./config.js":"/home/abudaan/workspace/qambi/src/config.js"}],"/home/abudaan/workspace/qambi/src/sequencer.js":[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _getConfig = require('./config.js');

var _getConfig2 = _interopRequireWildcard(_getConfig);

//import polyFill from './polyfill.js';

var _initAudio = require('./init_audio.js');

var _initAudio2 = _interopRequireWildcard(_initAudio);

var _initMidi = require('./init_midi.js');

var _initMidi2 = _interopRequireWildcard(_initMidi);

var _createSong = require('./song.js');

var _createTrack = require('./track.js');

var _createMIDIEvent = require('./midi_event.js');

var _createInstrument = require('./instrument.js');

var _createSongFromMIDIFile = require('./song_from_midifile.js');

var _createSongFromMIDIFile2 = _interopRequireWildcard(_createSongFromMIDIFile);

var _start = require('./heartbeat.js');

var _ajax = require('./util.js');

var _createNote$getNoteNumber$getNoteName$getNoteOctave$getFullNoteName$getFrequency$isBlackKey = require('./note.js');

/*
  This is the main module of the library: it creates the sequencer object and functionality from other modules gets mixed in
*/

'use strict';

// required by babelify for transpiling es6
require('babelify/polyfill');

var sequencer = {};
var config = undefined;
var debugLevel = undefined;

function init() {
  return new Promise(executor);
}

function executor(resolve, reject) {
  //polyfill();
  config = _getConfig2['default']();
  // the debug level has been set before sequencer.init() so add it to the config object
  if (debugLevel !== undefined) {
    config.debugLevel = debugLevel;
  }

  if (config === false) {
    reject('The WebAudio API hasn\'t been implemented in ' + config.browser + ', please use any other browser');
  } else {
    // create the context and share it internally via the config object
    config.context = new window.AudioContext();
    config.destination = config.context.destination;
    // add unlock method for ios devices
    // unlockWebAudio is called when the user called Song.play(), because we assume that the user presses a button to start the song.
    if (config.os !== 'ios') {
      Object.defineProperty(sequencer, 'unlockWebAudio', { value: function value() {} });
    } else {
      Object.defineProperty(sequencer, 'unlockWebAudio', {
        value: function value() {
          var src = config.context.createOscillator(),
              gainNode = config.context.createGain();
          gainNode.gain.value = 0;
          src.connect(gainNode);
          gainNode.connect(config.context.destination);
          if (src.noteOn !== undefined) {
            src.start = src.noteOn;
            src.stop = src.noteOff;
          }
          src.start(0);
          src.stop(0.001);
          // remove function after first use
          Object.defineProperty(sequencer, 'unlockWebAudio', { value: function value() {} });
        },
        configurable: true
      });
    }

    _initAudio2['default'](config.context).then(function onFulfilled(data) {

      config.legacy = data.legacy; // true if the browser uses an older version of the WebAudio API, source.noteOn() and source.noteOff instead of source.start() and source.stop()
      config.lowtick = data.lowtick; // metronome sample
      config.hightick = data.hightick; //metronome sample
      config.masterGainNode = data.gainNode;
      config.masterCompressor = data.compressor;
      config.getTime = data.getTime;

      Object.defineProperty(sequencer, 'time', { get: data.getTime });
      Object.defineProperty(sequencer, 'audioContext', { get: data.getAudioContext });
      Object.defineProperty(sequencer, 'masterVolume', { get: data.getMasterVolume, set: data.setMasterVolume });
      Object.defineProperty(sequencer, 'enableMasterCompressor', { value: data.enableMasterCompressor });
      Object.defineProperty(sequencer, 'configureMasterCompressor', { value: data.configureMasterCompressor });

      _initMidi2['default']().then(function onFulfilled(midi) {

        Object.defineProperty(sequencer, 'midiInputs', { value: midi.inputs });
        Object.defineProperty(sequencer, 'midiOutputs', { value: midi.outputs });

        //Object.seal(sequencer);
        _start.start(); // start heartbeat
        resolve();
      }, function onRejected(e) {
        if (e !== undefined && typeof e === 'string') {
          reject(e);
        } else if (config.browser === 'chrome' || config.browser === 'chromium') {
          reject('Web MIDI API not enabled');
        } else {
          reject('Web MIDI API not supported');
        }
      });
    }, function onRejected(e) {
      reject(e);
    });
  }
}

Object.defineProperty(sequencer, 'name', { value: 'qambi' });
Object.defineProperty(sequencer, 'init', { value: init });
Object.defineProperty(sequencer, 'ui', { value: {}, writable: true }); // ui functions

// add util functions
var util = {};
Object.defineProperty(util, 'ajax', { value: _ajax.ajax });
Object.defineProperty(sequencer, 'util', { value: util });

//TODO: create methods getSongs, removeSong and so on
//Object.defineProperty(sequencer, 'activeSongs', {activeSongs: {}, writable: true}); // the songs that are currently loaded in memory

Object.defineProperty(sequencer, 'debugLevel', {
  get: function get() {
    return config.debugLevel;
  },
  set: function set(value) {
    if (config !== undefined) {
      config.debugLevel = value;
    } else {
      // allow the debugLevel to be set before sequencer.init();
      debugLevel = value;
    }
  }
});

Object.defineProperty(sequencer, 'createMIDIEvent', { value: _createMIDIEvent.createMIDIEvent });
Object.defineProperty(sequencer, 'createTrack', { value: _createTrack.createTrack });
Object.defineProperty(sequencer, 'createSong', { value: _createSong.createSong });
Object.defineProperty(sequencer, 'createInstrument', { value: _createInstrument.createInstrument });
Object.defineProperty(sequencer, 'createSongFromMIDIFile', { value: _createSongFromMIDIFile2['default'] });

Object.defineProperty(sequencer, 'createNote', { value: _createNote$getNoteNumber$getNoteName$getNoteOctave$getFullNoteName$getFrequency$isBlackKey.createNote });
Object.defineProperty(sequencer, 'getNoteNumber', { value: _createNote$getNoteNumber$getNoteName$getNoteOctave$getFullNoteName$getFrequency$isBlackKey.getNoteNumber });
Object.defineProperty(sequencer, 'getNoteName', { value: _createNote$getNoteNumber$getNoteName$getNoteOctave$getFullNoteName$getFrequency$isBlackKey.getNoteName });
Object.defineProperty(sequencer, 'getNoteOctave', { value: _createNote$getNoteNumber$getNoteName$getNoteOctave$getFullNoteName$getFrequency$isBlackKey.getNoteOctave });
Object.defineProperty(sequencer, 'getFullNoteName', { value: _createNote$getNoteNumber$getNoteName$getNoteOctave$getFullNoteName$getFrequency$isBlackKey.getFullNoteName });
Object.defineProperty(sequencer, 'getFrequency', { value: _createNote$getNoteNumber$getNoteName$getNoteOctave$getFullNoteName$getFrequency$isBlackKey.getFrequency });
Object.defineProperty(sequencer, 'isBlackKey', { value: _createNote$getNoteNumber$getNoteName$getNoteOctave$getFullNoteName$getFrequency$isBlackKey.isBlackKey });

// note name modi
Object.defineProperty(sequencer, 'SHARP', { value: 'sharp' });
Object.defineProperty(sequencer, 'FLAT', { value: 'flat' });
Object.defineProperty(sequencer, 'ENHARMONIC_SHARP', { value: 'enharmonic-sharp' });
Object.defineProperty(sequencer, 'ENHARMONIC_FLAT', { value: 'enharmonic-flat' });

// standard MIDI events
Object.defineProperty(sequencer, 'NOTE_OFF', { value: 128 }); //128
Object.defineProperty(sequencer, 'NOTE_ON', { value: 144 }); //144
Object.defineProperty(sequencer, 'POLY_PRESSURE', { value: 160 }); //160
Object.defineProperty(sequencer, 'CONTROL_CHANGE', { value: 176 }); //176
Object.defineProperty(sequencer, 'PROGRAM_CHANGE', { value: 192 }); //192
Object.defineProperty(sequencer, 'CHANNEL_PRESSURE', { value: 208 }); //208
Object.defineProperty(sequencer, 'PITCH_BEND', { value: 224 }); //224
Object.defineProperty(sequencer, 'SYSTEM_EXCLUSIVE', { value: 240 }); //240
Object.defineProperty(sequencer, 'MIDI_TIMECODE', { value: 241 });
Object.defineProperty(sequencer, 'SONG_POSITION', { value: 242 });
Object.defineProperty(sequencer, 'SONG_SELECT', { value: 243 });
Object.defineProperty(sequencer, 'TUNE_REQUEST', { value: 246 });
Object.defineProperty(sequencer, 'EOX', { value: 247 });
Object.defineProperty(sequencer, 'TIMING_CLOCK', { value: 248 });
Object.defineProperty(sequencer, 'START', { value: 250 });
Object.defineProperty(sequencer, 'CONTINUE', { value: 251 });
Object.defineProperty(sequencer, 'STOP', { value: 252 });
Object.defineProperty(sequencer, 'ACTIVE_SENSING', { value: 254 });
Object.defineProperty(sequencer, 'SYSTEM_RESET', { value: 255 });

Object.defineProperty(sequencer, 'TEMPO', { value: 81 });
Object.defineProperty(sequencer, 'TIME_SIGNATURE', { value: 88 });
Object.defineProperty(sequencer, 'END_OF_TRACK', { value: 47 });

exports['default'] = sequencer;
module.exports = exports['default'];

},{"./config.js":"/home/abudaan/workspace/qambi/src/config.js","./heartbeat.js":"/home/abudaan/workspace/qambi/src/heartbeat.js","./init_audio.js":"/home/abudaan/workspace/qambi/src/init_audio.js","./init_midi.js":"/home/abudaan/workspace/qambi/src/init_midi.js","./instrument.js":"/home/abudaan/workspace/qambi/src/instrument.js","./midi_event.js":"/home/abudaan/workspace/qambi/src/midi_event.js","./note.js":"/home/abudaan/workspace/qambi/src/note.js","./song.js":"/home/abudaan/workspace/qambi/src/song.js","./song_from_midifile.js":"/home/abudaan/workspace/qambi/src/song_from_midifile.js","./track.js":"/home/abudaan/workspace/qambi/src/track.js","./util.js":"/home/abudaan/workspace/qambi/src/util.js","babelify/polyfill":"/home/abudaan/workspace/qambi/node_modules/babelify/polyfill.js"}],"/home/abudaan/workspace/qambi/src/song.js":[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createSong = createSong;

var _addEventListener$removeEventListener$dispatchEvent = require('./song_add_eventlistener');

var _log$info$warn$error$typeString = require('./util');

var _getConfig = require('./config');

var _getConfig2 = _interopRequireWildcard(_getConfig);

var _Track = require('./track');

var _Part = require('./part');

var _MIDIEvent = require('./midi_event');

var _initMidiSong$setMidiInputSong$setMidiOutputSong = require('./init_midi');

'use strict';

var songId = 0,
    config = _getConfig2['default'](),
    defaultSong = config.get('defaultSong');

var Song = (function () {

  /*
    @param settings is a Map or an Object
  */

  function Song(settings) {
    _classCallCheck(this, Song);

    this.id = 'S' + songId++ + Date.now();
    this.name = this.id;
    this._events = []; // all MIDI and audio events
    this._parts = [];
    this._tracks = [];
    this._eventsMap = new Map();
    this._partsMap = new Map();
    this._tracksMap = new Map();

    this._timeEvents = []; // all tempo and time signature events
    this._allEvents = []; // all tempo and time signature events, plus all MIDI and audio events

    this.needsUpdate = false;

    // first add all settings from the default song
    ///*
    defaultSong.forEach(function (value, key) {
      this[key] = value;
    }, this);
    //*/
    /*
        // or:
        for(let[value, key] of defaultSong.entries()){
          ((key, value) => {
            this[key] = value;
          })(key, value);
        }
    */

    if (settings.timeEvents) {
      this._timeEvents = Array.from(settings.timeEvents);
      //delete settings.timeEvents;
    }

    if (settings.tracks) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = settings.tracks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var track = _step.value;

          this.addTrack(track);
        }
        //delete settings.tracks;
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    //settings = null;

    // then override settings by provided settings
    if (_log$info$warn$error$typeString.typeString(settings) === 'object') {
      Object.keys(settings).forEach(function (key) {
        this[key] = settings[key];
      }, this);
    } else if (settings !== undefined) {
      settings.forEach(function (value, key) {
        this[key] = value;
      }, this);
    }

    // initialize midi for this song: add Maps for midi in- and outputs, and add eventlisteners to the midi inputs
    this.midiInputs = new Map();
    this.midiOutputs = new Map();
    _initMidiSong$setMidiInputSong$setMidiOutputSong.initMidiSong(this); // @see: init_midi.js

    this.lastBar = this.bars;
    this.pitchRange = this.highestNote - this.lowestNote + 1;
    this.factor = 4 / this.denominator;
    this.ticksPerBeat = this.ppq * this.factor;
    this.ticksPerBar = this.ticksPerBeat * this.nominator;
    this.millisPerTick = 60000 / this.bpm / this.ppq;
    this.recordId = -1;
    this.doLoop = false;
    this.illegalLoop = true;
    this.loopStart = 0;
    this.loopEnd = 0;
    this.loopDuration = 0;
    this.audioRecordingLatency = 0;
    this.grid = undefined;

    config.get('activeSongs')[this.id] = this;

    //console.log(this);
    /*
        if(settings.timeEvents && settings.timeEvents.length > 0){
          this.timeEvents = Array.from(settings.timeEvents);
    
          this.tempoEvent = getTimeEvents(sequencer.TEMPO, this)[0];
          this.timeSignatureEvent = getTimeEvents(sequencer.TIME_SIGNATURE, this)[0];
    
          if(this.tempoEvent === undefined){
            this.tempoEvent = new MIDIEvent(0, sequencer.TEMPO, this.bpm);
            this.timeEvents.unshift(this.tempoEvent);
          }else{
            this.bpm = this.tempoEvent.bpm;
          }
          if(this.timeSignatureEvent === undefined){
            this.timeSignatureEvent = new MIDIEvent(0, sequencer.TIME_SIGNATURE, this.nominator, this.denominator);
            this.timeEvents.unshift(this.timeSignatureEvent);
          }else{
            this.nominator = this.timeSignatureEvent.nominator;
            this.denominator = this.timeSignatureEvent.denominator;
          }
          //console.log(1, this.nominator, this.denominator, this.bpm);
        }else{
          // there has to be a tempo and time signature event at ticks 0, otherwise the position can't be calculated, and moreover, it is dictated by the MIDI standard
          this.tempoEvent = new MIDIEvent(0, sequencer.TEMPO, this.bpm);
          this.timeSignatureEvent = new MIDIEvent(0, sequencer.TIME_SIGNATURE, this.nominator, this.denominator);
          this.timeEvents = [
            this.tempoEvent,
            this.timeSignatureEvent
          ];
        }
    
        // TODO: A value for bpm, nominator and denominator in the config overrules the time events specified in the config -> maybe this should be the other way round
    
        // if a value for bpm is set in the config, and this value is different from the bpm value of the first
        // tempo event, all tempo events will be updated to the bpm value in the config.
        if(config.timeEvents !== undefined && config.bpm !== undefined){
          if(this.bpm !== config.bpm){
            this.setTempo(config.bpm, false);
          }
        }
    
        // if a value for nominator and/or denominator is set in the config, and this/these value(s) is/are different from the values
        // of the first time signature event, all time signature events will be updated to the values in the config.
        // @TODO: maybe only the first time signature event should be updated?
        if(config.timeEvents !== undefined && (config.nominator !== undefined || config.denominator !== undefined)){
          if(this.nominator !== config.nominator || this.denominator !== config.denominator){
            this.setTimeSignature(config.nominator || this.nominator, config.denominator || this.denominator, false);
          }
        }
    
        //console.log(2, this.nominator, this.denominator, this.bpm);
    
        this.tracks = [];
        this.parts = [];
        this.notes = [];
        this.events = [];//.concat(this.timeEvents);
        this.allEvents = []; // all events plus metronome ticks
    
        this.tracksById = {};
        this.tracksByName = {};
        this.partsById = {};
        this.notesById = {};
        this.eventsById = {};
    
        this.activeEvents = null;
        this.activeNotes = null;
        this.activeParts = null;
    
        this.recordedNotes = [];
        this.recordedEvents = [];
        this.recordingNotes = {}; // notes that don't have their note off events yet
    
        this.numTracks = 0;
        this.numParts = 0;
        this.numNotes = 0;
        this.numEvents = 0;
        this.instruments = [];
    
        this.playing = false;
        this.paused = false;
        this.stopped = true;
        this.recording = false;
        this.prerolling = false;
        this.precounting = false;
        this.preroll = true;
        this.precount = 0;
        this.listeners = {};
    
        this.playhead = createPlayhead(this, this.positionType, this.id, this);//, this.position);
        this.playheadRecording = createPlayhead(this, 'all', this.id + '_recording');
        this.scheduler = createScheduler(this);
        this.followEvent = createFollowEvent(this);
    
        this.volume = 1;
        this.gainNode = context.createGainNode();
        this.gainNode.gain.value = this.volume;
        this.metronome = createMetronome(this, dispatchEvent);
        this.connect();
    
    
        if(config.className === 'MidiFile' && config.loaded === false){
          if(sequencer.debug){
            console.warn('midifile', config.name, 'has not yet been loaded!');
          }
        }
    
        //if(config.tracks && config.tracks.length > 0){
        if(config.tracks){
          this.addTracks(config.tracks);
        }
    
        if(config.parts){
          this.addParts(config.parts);
        }
    
        if(config.events){
          this.addEvents(config.events);
        }
    
        if(config.events || config.parts || config.tracks){
          //console.log(config.events, config.parts, config.tracks)
          // the length of the song will be determined by the events, parts and/or tracks that are added to the song
          if(config.bars === undefined){
            this.lastBar = 0;
          }
          this.lastEvent = new MIDIEvent([this.lastBar, sequencer.END_OF_TRACK]);
        }else{
          this.lastEvent = new MIDIEvent([this.bars * this.ticksPerBar, sequencer.END_OF_TRACK]);
        }
        //console.log('update');
        this.update(true);
    
        this.numTimeEvents = this.timeEvents.length;
        this.playhead.set('ticks', 0);
        this.midiEventListeners = {};
        //console.log(this.timeEvents);
    
    */
  }

  _createClass(Song, [{
    key: 'stop',
    value: function stop() {
      _addEventListener$removeEventListener$dispatchEvent.dispatchEvent('stop');
    }
  }, {
    key: 'play',
    value: function play() {
      _addEventListener$removeEventListener$dispatchEvent.dispatchEvent('play');
    }
  }, {
    key: 'setMidiInput',
    value: function setMidiInput(id) {
      var flag = arguments[1] === undefined ? true : arguments[1];

      _initMidiSong$setMidiInputSong$setMidiOutputSong.setMidiInputSong(this, id, flag);
    }
  }, {
    key: 'setMidiOutput',
    value: function setMidiOutput(id) {
      var flag = arguments[1] === undefined ? true : arguments[1];

      _initMidiSong$setMidiInputSong$setMidiOutputSong.setMidiOutputSong(this, id, flag);
    }
  }, {
    key: 'addMidiEventListener',
    value: (function (_addMidiEventListener) {
      function addMidiEventListener(_x) {
        return _addMidiEventListener.apply(this, arguments);
      }

      addMidiEventListener.toString = function () {
        return _addMidiEventListener.toString();
      };

      return addMidiEventListener;
    })(function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      addMidiEventListener.apply(undefined, [this].concat(args));
    })
  }, {
    key: 'addTrack',
    value: function addTrack(track) {
      if (track instanceof _Track.Track) {
        track.song = this;
        track.state = 'new';
        this.needsUpdate = true;
        this._tracksMap.set(track.id, track);
        this._numberOfTracksChanged = true;
        return this; // make it chainable
      }
    }
  }, {
    key: 'removeTrack',
    value: function removeTrack(track) {
      if (this._tracksMap.has(track.id)) {
        track.state = 'removed';
        this.needsUpdate = true;
        this._numberOfTracksChanged = true;
        return this; // make it chainable
      }
    }
  }, {
    key: 'getTracks',
    value: function getTracks() {
      if (this.needsUpdate) {
        this.update();
      }
      return this._tracks;
    }
  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      // update _tracks array and _tracksMap map
      if (this._numberOfTracksChanged === true) {
        this._tracks = [];
        Array.from(this._tracksMap.values()).forEach(function (track) {
          if (track.state === 'removed') {
            _this._tracksMap['delete'](track.id);
          } else {
            track.state = 'clean';
            _this._tracks.push(track);
          }
        });
        this._numberOfTracksChanged = false;
      }

      // add all new events and parts to the array and the map in question
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._tracks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var track = _step2.value;

          if (track.needsUpdate === true) {
            track.update();
          }
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = track._newEvents.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _event = _step3.value;

              this._events.push(_event);
              this._eventsMap.set(_event.id, _event);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                _iterator3['return']();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          // we can clear the _newEvents map now; it will be populated again as soon as new events are added
          track._newEvents.clear();

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = track._newParts.values()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var part = _step4.value;

              this._parts.push(part);
              this._partsMap.set(part.id, part);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                _iterator4['return']();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          // we can clear the _newParts map now; it will be populated again as soon as new parts are added
          track._newParts.clear();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      // update _parts array and _partsMap map
      if (this._numberOfPartsChanged === true) {
        this._parts = [];
        Array.from(this._partsMap.values()).forEach(function (part) {
          // the state of a part gets set to 'removed' when track.removePart() is called
          if (part.state === 'removed') {
            _this._partsMap['delete'](part.id);
          } else {
            part.state = 'clean';
            _this._parts.push(part);
          }
        });
        this._numberOfPartsChanged = false;
      }

      // update _events array and _eventsMap map
      if (this._numberOfEventsChanged === true) {
        this._events = [];
        Array.from(this._eventsMap.values()).forEach(function (event) {
          if (event.state === 'removed') {
            // the state of a event gets set to 'removed' when part.removeEvent() or track.removeEvent() is called
            _this._eventsMap['delete'](event.id);
          } else {
            event.state = 'clean';
            _this._events.push(event);
          }
        });
        this._numberOfEventsChanged = false;
      }
      this._parts.sort(function (a, b) {
        return a.ticks <= b.ticks ? -1 : 1;
      });
      this._events.sort(function (a, b) {
        return a.ticks <= b.ticks ? -1 : 1;
      });

      this.needsUpdate = false;
    }
  }]);

  return Song;
})();

exports.Song = Song;

Song.prototype.addEventListener = _addEventListener$removeEventListener$dispatchEvent.addEventListener;
Song.prototype.removeEventListener = _addEventListener$removeEventListener$dispatchEvent.removeEventListener;
Song.prototype.dispatchEvent = _addEventListener$removeEventListener$dispatchEvent.dispatchEvent;

function createSong(settings) {
  return new Song(settings);
}

},{"./config":"/home/abudaan/workspace/qambi/src/config.js","./init_midi":"/home/abudaan/workspace/qambi/src/init_midi.js","./midi_event":"/home/abudaan/workspace/qambi/src/midi_event.js","./part":"/home/abudaan/workspace/qambi/src/part.js","./song_add_eventlistener":"/home/abudaan/workspace/qambi/src/song_add_eventlistener.js","./track":"/home/abudaan/workspace/qambi/src/track.js","./util":"/home/abudaan/workspace/qambi/src/util.js"}],"/home/abudaan/workspace/qambi/src/song_add_eventlistener.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var listeners = {};

function addEventListener(id, callback) {
  listeners[id] = callback;
}

function removeEventListener(id, callback) {
  delete listeners[id];
}

function dispatchEvent(id) {
  for (var key in listeners) {
    if (key === id && listeners.hasOwnProperty(key)) {
      listeners[key](id);
    }
  }
}

exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.dispatchEvent = dispatchEvent;

},{}],"/home/abudaan/workspace/qambi/src/song_from_midifile.js":[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createSongFromMIDIFile;

var _log$info$warn$error$base64ToBinary$ajax = require('./util.js');

var _parseMIDIFile = require('./midi_parse');

var _parseMIDIFile2 = _interopRequireWildcard(_parseMIDIFile);

var _MIDIEvent = require('./midi_event');

var _Part = require('./part');

var _Track = require('./track');

var _Song = require('./song');

'use strict';

function createSongFromMIDIFile(data) {

  if (data instanceof ArrayBuffer === true) {
    var buffer = new Uint8Array(data);
    return toSong(_parseMIDIFile2['default'](buffer));
  } else if (data.header !== undefined && data.tracks !== undefined) {
    return toSong(data);
  } else {
    data = _log$info$warn$error$base64ToBinary$ajax.base64ToBinary(data);
    if (data instanceof ArrayBuffer === true) {
      var buffer = new Uint8Array(data);
      return toSong(_parseMIDIFile2['default'](buffer));
    } else {
      _log$info$warn$error$base64ToBinary$ajax.error('wrong data');
    }
  }
}

function toSong(parsed) {
  var tracks = parsed.tracks;
  var ppq = parsed.header.ticksPerBeat;
  var timeEvents = [];
  var config = {
    tracks: []
  };
  var events = undefined;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tracks.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var track = _step.value;

      var lastTicks = undefined,
          lastType = undefined;
      var ticks = 0;
      var type = undefined;
      var channel = -1;
      events = [];

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = track[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _event = _step2.value;

          ticks += _event.deltaTime * ppq;
          //console.log(event.subtype, event.deltaTime, tmpTicks);

          if (channel === -1 && _event.channel !== undefined) {
            channel = _event.channel;
            track.channel = channel;
          }
          type = _event.subtype;

          switch (_event.subtype) {

            case 'trackName':
              track.name = _event.text;
              //console.log('name', track.name, numTracks);
              break;

            case 'instrumentName':
              if (_event.text) {
                track.instrumentName = _event.text;
              }
              break;

            case 'noteOn':
              events.push(new _MIDIEvent.MIDIEvent(ticks, 144, _event.noteNumber, _event.velocity));
              break;

            case 'noteOff':
              events.push(new _MIDIEvent.MIDIEvent(ticks, 128, _event.noteNumber, _event.velocity));
              break;

            case 'setTempo':
              // sometimes 2 tempo events have the same position in ticks
              // we use the last in these cases (same as Cubase)
              var bpm = 60000000 / _event.microsecondsPerBeat;

              if (ticks === lastTicks && type === lastType) {
                _log$info$warn$error$base64ToBinary$ajax.info('tempo events on the same tick', ticks, bpm);
                timeEvents.pop();
              }

              if (config.bpm === undefined) {
                config.bpm = bpm;
              }
              timeEvents.push(new _MIDIEvent.MIDIEvent(ticks, 81, bpm));
              break;

            case 'timeSignature':
              // sometimes 2 time signature events have the same position in ticks
              // we use the last in these cases (same as Cubase)
              if (lastTicks === ticks && lastType === type) {
                _log$info$warn$error$base64ToBinary$ajax.info('time signature events on the same tick', ticks, _event.numerator, _event.denominator);
                timeEvents.pop();
              }

              if (config.nominator === undefined) {
                config.nominator = _event.numerator;
                config.denominator = _event.denominator;
              }
              timeEvents.push(new _MIDIEvent.MIDIEvent(ticks, 88, _event.numerator, _event.denominator));
              break;

            case 'controller':
              events.push(new _MIDIEvent.MIDIEvent(ticks, 176, _event.controllerType, _event.value));
              break;

            case 'programChange':
              events.push(new _MIDIEvent.MIDIEvent(ticks, 192, _event.programNumber));
              break;

            case 'pitchBend':
              events.push(new _MIDIEvent.MIDIEvent(ticks, 224, _event.value));
              break;

            default:
            //console.log(track.name, event.type);
          }

          lastType = type;
          lastTicks = ticks;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (events.length > 0) {
        config.tracks.push(new _Track.Track().addPart(new _Part.Part({ events: events })));
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  config.ppq = ppq;
  config.timeEvents = timeEvents;
  var song = new _Song.Song(config);
  song.update();
  return song;
}
module.exports = exports['default'];

},{"./midi_event":"/home/abudaan/workspace/qambi/src/midi_event.js","./midi_parse":"/home/abudaan/workspace/qambi/src/midi_parse.js","./part":"/home/abudaan/workspace/qambi/src/part.js","./song":"/home/abudaan/workspace/qambi/src/song.js","./track":"/home/abudaan/workspace/qambi/src/track.js","./util.js":"/home/abudaan/workspace/qambi/src/util.js"}],"/home/abudaan/workspace/qambi/src/track.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createTrack = createTrack;

var _Part = require('./part');

'use strict';

var trackId = 0;

var Track = (function () {
  function Track() {
    var config = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Track);

    this.id = 'T' + trackId++ + Date.now();
    this._parts = [];
    this._events = [];
    this.state = 'clean';

    this._partsMap = new Map();
    this._eventsMap = new Map();
    this._newEvents = new Map();
    this._newParts = new Map();

    this.needsUpdate = false;
    this._numberOfPartsChanged = false;
    this._numberOfEventsChanged = false;

    if (config.parts) {
      this.addParts(config.parts);
      config.parts = null;
    }
    this.name = config.name || this.id;
    config = null;
  }

  _createClass(Track, [{
    key: 'addPart',

    /*
      addEvent(event){
        let part = new Part();
        part.track = this;
        part.addEvent(event);
        this._partsMap.set(part.id, part);
        this.numberOfPartsChanged = true;
        this.needsUpdate = true;
      }
    
      addEvents(events){
        let part = new Part();
        part.track = this;
        part.addEvents(events);
        this._partsMap.set(part.id, part);
        this.numberOfPartsChanged = true;
        this.needsUpdate = true;
      }
    */

    value: function addPart(part) {
      if (part instanceof _Part.Part) {
        part.track = this;
        part.state = 'new';
        this._partsMap.set(part.id, part);
        this._numberOfEventsChanged = true;
        this._numberOfPartsChanged = true;
        this.needsUpdate = true;
      }
      return this; // make it chainable
    }
  }, {
    key: 'addParts',
    value: function addParts(parts) {
      for (var part in parts) {
        this.addPart(part);
      }
      return this; // make it chainable
    }
  }, {
    key: 'removePart',
    value: function removePart(part) {
      if (this._partsMap.has(part.id)) {
        //@todo: part.reset() here, just like event.reset()?
        part.state = 'removed';
        this._numberOfEventsChanged = true;
        this._numberOfPartsChanged = true;
        this.needsUpdate = true;
      }
      return this; // make it chainable
    }
  }, {
    key: 'removeParts',
    value: function removeParts(parts) {
      for (var part in parts) {
        this.removePart(part);
      }
      return this; // make it chainable
    }
  }, {
    key: 'movePart',
    value: function movePart(part, ticks) {
      if (this._partsMap.has(part.id)) {
        part.moveEvents(part.events, ticks);
        if (part.state !== 'new') {
          part.state = 'moved';
        }
        this.needsUpdate = true;
      }
      return this; // make it chainable
    }
  }, {
    key: 'moveParts',
    value: function moveParts(parts, ticks) {
      for (var part in parts) {
        this.movePart(part, ticks);
      }
      return this; // make it chainable
    }
  }, {
    key: 'transposePart',
    value: function transposePart(part, semitones) {
      if (this._partsMap.has(part.id)) {
        part.transposeEvents(part.events, semitones);
        if (part.state !== 'new') {
          part.state = 'transposed';
        }
        // no need to set needsUpdate to true!
      }
      return this; // make it chainable
    }
  }, {
    key: 'transposeParts',
    value: function transposeParts(parts, semitones) {
      for (var part in parts) {
        this.transposePart(part, semitones);
      }
      return this; // make it chainable
    }
  }, {
    key: 'getEvents',
    value: function getEvents() {
      if (this.needsUpdate) {
        this.update();
      }
      return this._events;
    }
  }, {
    key: 'getParts',
    value: function getParts() {
      if (this.needsUpdate) {
        this.update();
      }
      return this._parts;
    }
  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      // if number of parts has changed update the _parts array and the _partsMap map
      if (this._numberOfPartsChanged === true) {
        this._parts = [];
        Array.from(this._partsMap.values()).forEach(function (part) {
          if (part.state === 'removed') {
            _this._partsMap['delete'](part.id);
          } else {
            _this._parts.push(part);
          }
        });

        if (this.song !== undefined) {
          // tell the song to update its parts array as well, this is done when song.update() is called
          this.song._numberOfPartsChanged = true;
        }
        this._numberOfPartsChanged = false;
      }

      this._parts.sort(function (a, b) {
        return a.ticks <= b.ticks ? -1 : 1;
      });

      // 1) reap all new events and add them to _eventsMap
      // 2) store new events in _newEvents, and new parts in _newParts so the new events and parts are available for song.update() as well
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var part = _step.value;

          // part.getEvents() also triggers part.update() if necessary
          var newEvents = part.getEvents().filter(function (event) {
            return event.state === 'new';
          });
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = newEvents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _event = _step2.value;

              this._eventsMap.set(_event.id, _event);
              this._newEvents.set(_event.id, _event);
              _event.state = 'clean';
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                _iterator2['return']();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          if (part.state === 'new') {
            this._newParts.set(part.id, part);
            part.state = 'clean';
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      // if number of events has changed update the _events array and the _eventsMap map
      if (this._numberOfEventsChanged === true) {
        this._events = [];
        Array.from(this._eventsMap.values()).forEach(function (event) {
          if (event.state === 'removed') {
            _this._eventsMap['delete'](event.id);
          } else {
            _this._events.push(event);
          }
        });

        if (this.song !== undefined) {
          // tell the song to update its events array as well, this is done when song.update() is called
          this.song._numberOfEventsChanged = true;
        }
        this._numberOfEventsChanged = false;
      }

      this._events.sort(function (a, b) {
        return a.ticks <= b.ticks ? -1 : 1;
      });

      this.needsUpdate = false;
    }
  }]);

  return Track;
})();

exports.Track = Track;

function createTrack(config) {
  return new Track(config);
}

/*
let Track = {
    init: function(){
        let id = 'T' + trackId++ + new Date().getTime();
        Object.defineProperty(this, 'id', {
            value: id
        });
    }
};

export default function createTrack(){
  var t = Object.create(Track);
  t.init(arguments);
  return t;
}

*/

},{"./part":"/home/abudaan/workspace/qambi/src/part.js"}],"/home/abudaan/workspace/qambi/src/util.js":[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _slice = Array.prototype.slice;
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.typeString = typeString;
exports.ajax = ajax;
exports.parseSamples = parseSamples;
exports.error = error;
exports.warn = warn;
exports.info = info;
exports.log = log;
exports.getNiceTime = getNiceTime;

var _getConfig = require('./config');

var _getConfig2 = _interopRequireWildcard(_getConfig);

/*
  An unorganised collection of various utility functions that are used across the library
*/

'use strict';

var console = window.console,
    mPow = Math.pow,
    mRound = Math.round,
    mFloor = Math.floor,
    mRandom = Math.random,
    config = _getConfig2['default']();
// context = config.context,
// floor = function(value){
//  return value | 0;
// },

var noteLengthNames = {
  1: 'quarter',
  2: 'eighth',
  4: 'sixteenth',
  8: '32th',
  16: '64th'
};

function typeString(o) {
  if (typeof o != 'object') {
    return typeof o;
  }

  if (o === null) {
    return 'null';
  }

  //object, array, function, date, regexp, string, number, boolean, error
  var internalClass = Object.prototype.toString.call(o).match(/\[object\s(\w+)\]/)[1];
  return internalClass.toLowerCase();
}

function ajax(config) {
  var request = new XMLHttpRequest(),
      method = config.method === undefined ? 'GET' : config.method,
      fileSize = undefined;

  function executor(resolve, reject) {

    reject = reject || function () {};
    resolve = resolve || function () {};

    request.onload = function () {
      if (request.status !== 200) {
        reject(request.status);
        return;
      }

      if (config.responseType === 'json') {
        fileSize = request.response.length;
        resolve(JSON.parse(request.response), fileSize);
        request = null;
      } else {
        resolve(request.response);
        request = null;
      }
    };

    request.onerror = function (e) {
      config.onError(e);
    };

    request.open(method, config.url, true);

    if (config.overrideMimeType) {
      request.overrideMimeType(config.overrideMimeType);
    }

    if (config.responseType) {
      if (config.responseType === 'json') {
        request.responseType = 'text';
      } else {
        request.responseType = config.responseType;
      }
    }

    if (method === 'POST') {
      request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }

    if (config.data) {
      request.send(config.data);
    } else {
      request.send();
    }
  }

  return new Promise(executor);
}

function parseSample(sample, id, every) {
  return new Promise(function (resolve, reject) {
    try {
      config.context.decodeAudioData(sample, function onSuccess(buffer) {
        //console.log(id, buffer);
        if (id !== undefined) {
          resolve({ id: id, buffer: buffer });
          if (every) {
            every({ id: id, buffer: buffer });
          }
        } else {
          resolve(buffer);
          if (every) {
            every(buffer);
          }
        }
      }, function onError(e) {
        //console.log('error decoding audiodata', id, e);
        //reject(e); // don't use reject because we use this as a nested promise and we don't want the parent promise to reject
        if (id !== undefined) {
          resolve({ id: id, buffer: undefined });
        } else {
          resolve(undefined);
        }
      });
    } catch (e) {
      //console.log('error decoding audiodata', id, e);
      //reject(e);
      if (id !== undefined) {
        resolve({ id: id, buffer: undefined });
      } else {
        resolve(undefined);
      }
    }
  });
}

function loadAndParseSample(url, id, every) {
  return new Promise(function executor(resolve, reject) {
    ajax({ url: url, responseType: 'arraybuffer' }).then(function onFulfilled(data) {
      parseSample(data, id, every).then(resolve, reject);
    }, function onRejected() {
      if (id !== undefined) {
        resolve({ id: id, buffer: undefined });
      } else {
        resolve(undefined);
      }
    });
  });
}

function parseSamples(mapping, every) {
  var key = undefined,
      sample = undefined,
      promises = [],
      type = typeString(mapping);

  every = typeString(every) === 'function' ? every : false;
  //console.log(type, mapping)
  if (type === 'object') {
    for (key in mapping) {
      if (mapping.hasOwnProperty(key)) {
        sample = mapping[key];
        if (sample.indexOf('http://') === -1) {
          promises.push(parseSample(base64ToBinary(sample), key, every));
        } else {
          promises.push(loadAndParseSample(sample, key, every));
        }
      }
    }
  } else if (type === 'array') {
    mapping.forEach(function (sample) {
      if (sample.indexOf('http://') === -1) {
        promises.push(parseSample(base64ToBinary(sample), every));
      } else {
        promises.push(loadAndParseSample(sample, every));
      }
    });
  }

  return new Promise(function (resolve, reject) {
    Promise.all(promises).then(function onFulfilled(values) {
      if (type === 'object') {
        (function () {
          var mapping = {};
          values.forEach(function (value) {
            mapping[value.id] = value.buffer;
          });
          //console.log(mapping);
          resolve(mapping);
        })();
      } else if (type === 'array') {
        resolve(values);
      }
    }, function onRejected(e) {
      reject(e);
    });
  });
}

// adapted version of https://github.com/danguer/blog-examples/blob/master/js/base64-binary.js
function base64ToBinary(input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      bytes = undefined,
      uarray = undefined,
      buffer = undefined,
      lkey1 = undefined,
      lkey2 = undefined,
      chr1 = undefined,
      chr2 = undefined,
      chr3 = undefined,
      enc1 = undefined,
      enc2 = undefined,
      enc3 = undefined,
      enc4 = undefined,
      i = undefined,
      j = 0;

  bytes = Math.ceil(3 * input.length / 4);
  buffer = new ArrayBuffer(bytes);
  uarray = new Uint8Array(buffer);

  lkey1 = keyStr.indexOf(input.charAt(input.length - 1));
  lkey2 = keyStr.indexOf(input.charAt(input.length - 1));
  if (lkey1 == 64) bytes--; //padding chars, so skip
  if (lkey2 == 64) bytes--; //padding chars, so skip

  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

  for (i = 0; i < bytes; i += 3) {
    //get the 3 octects in 4 ascii chars
    enc1 = keyStr.indexOf(input.charAt(j++));
    enc2 = keyStr.indexOf(input.charAt(j++));
    enc3 = keyStr.indexOf(input.charAt(j++));
    enc4 = keyStr.indexOf(input.charAt(j++));

    chr1 = enc1 << 2 | enc2 >> 4;
    chr2 = (enc2 & 15) << 4 | enc3 >> 2;
    chr3 = (enc3 & 3) << 6 | enc4;

    uarray[i] = chr1;
    if (enc3 != 64) uarray[i + 1] = chr2;
    if (enc4 != 64) uarray[i + 2] = chr3;
  }
  //console.log(buffer);
  return buffer;
}

function error() {
  if (config.get('debugLevel') >= 1) {
    //console.error(...arguments);
    //console.trace();
    console.groupCollapsed.apply(console, ['ERROR:'].concat(_slice.call(arguments)));
    console.trace();
    console.groupEnd();
  }
}

function warn() {
  if (config.get('debugLevel') >= 2) {
    //console.warn(...arguments);
    //console.trace();
    console.groupCollapsed.apply(console, ['WARNING:'].concat(_slice.call(arguments)));
    console.trace();
    console.groupEnd();
  }
}

function info() {
  if (config.get('debugLevel') >= 3) {
    //console.info(...arguments);
    //console.trace('INFO', ...arguments);
    console.groupCollapsed.apply(console, ['INFO:'].concat(_slice.call(arguments)));
    console.trace();
    console.groupEnd();
  }
}

function log() {
  if (config.get('debugLevel') >= 4) {
    //console.log(...arguments);
    //console.trace('LOG', ...arguments);
    console.groupCollapsed.apply(console, ['LOG:'].concat(_slice.call(arguments)));
    console.trace();
    console.groupEnd();
  }
}

function getNiceTime(millis) {
  var h = undefined,
      m = undefined,
      s = undefined,
      ms = undefined,
      seconds = undefined,
      timeAsString = '';

  seconds = millis / 1000; // → millis to seconds
  h = mFloor(seconds / (60 * 60));
  m = mFloor(seconds % (60 * 60) / 60);
  s = mFloor(seconds % 60);
  ms = mRound((seconds - h * 3600 - m * 60 - s) * 1000);

  timeAsString += h + ':';
  timeAsString += m < 10 ? '0' + m : m;
  timeAsString += ':';
  timeAsString += s < 10 ? '0' + s : s;
  timeAsString += ':';
  timeAsString += ms === 0 ? '000' : ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : ms;

  //console.log(h, m, s, ms);
  return {
    hour: h,
    minute: m,
    second: s,
    millisecond: ms,
    timeAsString: timeAsString,
    timeAsArray: [h, m, s, ms]
  };
}

},{"./config":"/home/abudaan/workspace/qambi/src/config.js"}]},{},["/home/abudaan/workspace/qambi/src/sequencer.js"])("/home/abudaan/workspace/qambi/src/sequencer.js")
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbGliL2JhYmVsL3BvbHlmaWxsLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktbWV0aG9kcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuYXNzZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmNvZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24td2Vhay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuY3R4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5kZWYuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmZ3LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5pbnZva2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLml0ZXIuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5rZXlvZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQub3duLWtleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLnBhcnRpYWwuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLnJlcGxhY2VyLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5zZXQtcHJvdG8uanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLnNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQudGFzay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQudWlkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC51bnNjb3BlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC53a3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5zdGF0aWNzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1zZXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LnRvLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLmF0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvanMuYXJyYXkuc3RhdGljcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9zaGltLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1iYWJlbC9ydW50aW1lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL3BvbHlmaWxsLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L3BvbHlmaWxsLmpzIiwiL2hvbWUvYWJ1ZGFhbi93b3Jrc3BhY2UvcWFtYmkvc3JjL2F1ZGlvX2V2ZW50LmpzIiwiL2hvbWUvYWJ1ZGFhbi93b3Jrc3BhY2UvcWFtYmkvc3JjL2NvbmZpZy5qcyIsIi9ob21lL2FidWRhYW4vd29ya3NwYWNlL3FhbWJpL3NyYy9oZWFydGJlYXQuanMiLCIvaG9tZS9hYnVkYWFuL3dvcmtzcGFjZS9xYW1iaS9zcmMvaW5pdF9hdWRpby5qcyIsIi9ob21lL2FidWRhYW4vd29ya3NwYWNlL3FhbWJpL3NyYy9pbml0X21pZGkuanMiLCIvaG9tZS9hYnVkYWFuL3dvcmtzcGFjZS9xYW1iaS9zcmMvaW5zdHJ1bWVudC5qcyIsIi9ob21lL2FidWRhYW4vd29ya3NwYWNlL3FhbWJpL3NyYy9taWRpX2V2ZW50LmpzIiwiL2hvbWUvYWJ1ZGFhbi93b3Jrc3BhY2UvcWFtYmkvc3JjL21pZGlfcGFyc2UuanMiLCIvaG9tZS9hYnVkYWFuL3dvcmtzcGFjZS9xYW1iaS9zcmMvbWlkaV9zdHJlYW0uanMiLCIvaG9tZS9hYnVkYWFuL3dvcmtzcGFjZS9xYW1iaS9zcmMvbm90ZS5qcyIsIi9ob21lL2FidWRhYW4vd29ya3NwYWNlL3FhbWJpL3NyYy9wYXJ0LmpzIiwiL2hvbWUvYWJ1ZGFhbi93b3Jrc3BhY2UvcWFtYmkvc3JjL3NhbXBsZS5qcyIsIi9ob21lL2FidWRhYW4vd29ya3NwYWNlL3FhbWJpL3NyYy9zZXF1ZW5jZXIuanMiLCIvaG9tZS9hYnVkYWFuL3dvcmtzcGFjZS9xYW1iaS9zcmMvc29uZy5qcyIsIi9ob21lL2FidWRhYW4vd29ya3NwYWNlL3FhbWJpL3NyYy9zb25nX2FkZF9ldmVudGxpc3RlbmVyLmpzIiwiL2hvbWUvYWJ1ZGFhbi93b3Jrc3BhY2UvcWFtYmkvc3JjL3NvbmdfZnJvbV9taWRpZmlsZS5qcyIsIi9ob21lL2FidWRhYW4vd29ya3NwYWNlL3FhbWJpL3NyYy90cmFjay5qcyIsIi9ob21lL2FidWRhYW4vd29ya3NwYWNlL3FhbWJpL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDUCxVQUFNLEVBQUUsQ0FBQztBQUNULFVBQU0sRUFBRSxDQUFDO0FBQ1QsZUFBVyxFQUFFLEVBQUU7QUFDZixnQkFBWSxFQUFFLFlBQVk7QUFDMUIsZUFBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0dBQzdCLENBQUM7Q0FDSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuaWYgKGdsb2JhbC5fYmFiZWxQb2x5ZmlsbCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJvbmx5IG9uZSBpbnN0YW5jZSBvZiBiYWJlbC9wb2x5ZmlsbCBpcyBhbGxvd2VkXCIpO1xufVxuZ2xvYmFsLl9iYWJlbFBvbHlmaWxsID0gdHJ1ZTtcblxucmVxdWlyZShcImNvcmUtanMvc2hpbVwiKTtcblxucmVxdWlyZShcInJlZ2VuZXJhdG9yLWJhYmVsL3J1bnRpbWVcIik7IiwiJ3VzZSBzdHJpY3QnO1xyXG4vLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXHJcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXHJcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xyXG4gIHJldHVybiBmdW5jdGlvbihlbCAvKiwgZnJvbUluZGV4ID0gMCAqLyl7XHJcbiAgICB2YXIgTyAgICAgID0gJC50b09iamVjdCh0aGlzKVxyXG4gICAgICAsIGxlbmd0aCA9ICQudG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICwgaW5kZXggID0gJC50b0luZGV4KGFyZ3VtZW50c1sxXSwgbGVuZ3RoKVxyXG4gICAgICAsIHZhbHVlO1xyXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xyXG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XHJcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XHJcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXg7XHJcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XHJcbiAgfTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxyXG4vLyAxIC0+IEFycmF5I21hcFxyXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxyXG4vLyAzIC0+IEFycmF5I3NvbWVcclxuLy8gNCAtPiBBcnJheSNldmVyeVxyXG4vLyA1IC0+IEFycmF5I2ZpbmRcclxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcclxudmFyICQgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjdHggPSByZXF1aXJlKCcuLyQuY3R4Jyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSl7XHJcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcclxuICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXHJcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcclxuICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxyXG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XHJcbiAgICB2YXIgTyAgICAgID0gT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgLCBzZWxmICAgPSAkLkVTNU9iamVjdChPKVxyXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0sIDMpXHJcbiAgICAgICwgbGVuZ3RoID0gJC50b0xlbmd0aChzZWxmLmxlbmd0aClcclxuICAgICAgLCBpbmRleCAgPSAwXHJcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gQXJyYXkobGVuZ3RoKSA6IElTX0ZJTFRFUiA/IFtdIDogdW5kZWZpbmVkXHJcbiAgICAgICwgdmFsLCByZXM7XHJcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xyXG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcclxuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcclxuICAgICAgaWYoVFlQRSl7XHJcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXHJcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xyXG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcclxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXHJcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XHJcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXHJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcclxuICB9O1xyXG59OyIsInZhciAkID0gcmVxdWlyZSgnLi8kJyk7XHJcbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1zZzEsIG1zZzIpe1xyXG4gIGlmKCFjb25kaXRpb24pdGhyb3cgVHlwZUVycm9yKG1zZzIgPyBtc2cxICsgbXNnMiA6IG1zZzEpO1xyXG59XHJcbmFzc2VydC5kZWYgPSAkLmFzc2VydERlZmluZWQ7XHJcbmFzc2VydC5mbiA9IGZ1bmN0aW9uKGl0KXtcclxuICBpZighJC5pc0Z1bmN0aW9uKGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xyXG4gIHJldHVybiBpdDtcclxufTtcclxuYXNzZXJ0Lm9iaiA9IGZ1bmN0aW9uKGl0KXtcclxuICBpZighJC5pc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xyXG4gIHJldHVybiBpdDtcclxufTtcclxuYXNzZXJ0Lmluc3QgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUpe1xyXG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpdGhyb3cgVHlwZUVycm9yKG5hbWUgKyBcIjogdXNlIHRoZSAnbmV3JyBvcGVyYXRvciFcIik7XHJcbiAgcmV0dXJuIGl0O1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2VydDsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xyXG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICB2YXIgVCA9IE9iamVjdCgkLmFzc2VydERlZmluZWQodGFyZ2V0KSlcclxuICAgICwgbCA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICwgaSA9IDE7XHJcbiAgd2hpbGUobCA+IGkpe1xyXG4gICAgdmFyIFMgICAgICA9ICQuRVM1T2JqZWN0KGFyZ3VtZW50c1tpKytdKVxyXG4gICAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhTKVxyXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXHJcbiAgICAgICwgaiAgICAgID0gMFxyXG4gICAgICAsIGtleTtcclxuICAgIHdoaWxlKGxlbmd0aCA+IGopVFtrZXkgPSBrZXlzW2orK11dID0gU1trZXldO1xyXG4gIH1cclxuICByZXR1cm4gVDtcclxufTsiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgVEFHICAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJylcclxuICAsIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XHJcbmZ1bmN0aW9uIGNvZihpdCl7XHJcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcclxufVxyXG5jb2YuY2xhc3NvZiA9IGZ1bmN0aW9uKGl0KXtcclxuICB2YXIgTywgVDtcclxuICByZXR1cm4gaXQgPT0gdW5kZWZpbmVkID8gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogJ051bGwnXHJcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUIDogY29mKE8pO1xyXG59O1xyXG5jb2Yuc2V0ID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XHJcbiAgaWYoaXQgJiYgISQuaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSQuaGlkZShpdCwgVEFHLCB0YWcpO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IGNvZjsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjdHggICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxyXG4gICwgc2FmZSAgICAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZVxyXG4gICwgYXNzZXJ0ICAgPSByZXF1aXJlKCcuLyQuYXNzZXJ0JylcclxuICAsICRpdGVyICAgID0gcmVxdWlyZSgnLi8kLml0ZXInKVxyXG4gICwgaGFzICAgICAgPSAkLmhhc1xyXG4gICwgc2V0ICAgICAgPSAkLnNldFxyXG4gICwgaXNPYmplY3QgPSAkLmlzT2JqZWN0XHJcbiAgLCBoaWRlICAgICA9ICQuaGlkZVxyXG4gICwgc3RlcCAgICAgPSAkaXRlci5zdGVwXHJcbiAgLCBpc0Zyb3plbiA9IE9iamVjdC5pc0Zyb3plbiB8fCAkLmNvcmUuT2JqZWN0LmlzRnJvemVuXHJcbiAgLCBJRCAgICAgICA9IHNhZmUoJ2lkJylcclxuICAsIE8xICAgICAgID0gc2FmZSgnTzEnKVxyXG4gICwgTEFTVCAgICAgPSBzYWZlKCdsYXN0JylcclxuICAsIEZJUlNUICAgID0gc2FmZSgnZmlyc3QnKVxyXG4gICwgSVRFUiAgICAgPSBzYWZlKCdpdGVyJylcclxuICAsIFNJWkUgICAgID0gJC5ERVNDID8gc2FmZSgnc2l6ZScpIDogJ3NpemUnXHJcbiAgLCBpZCAgICAgICA9IDA7XHJcblxyXG5mdW5jdGlvbiBmYXN0S2V5KGl0LCBjcmVhdGUpe1xyXG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcclxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xyXG4gIC8vIGNhbid0IHNldCBpZCB0byBmcm96ZW4gb2JqZWN0XHJcbiAgaWYoaXNGcm96ZW4oaXQpKXJldHVybiAnRic7XHJcbiAgaWYoIWhhcyhpdCwgSUQpKXtcclxuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIGlkXHJcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XHJcbiAgICAvLyBhZGQgbWlzc2luZyBvYmplY3QgaWRcclxuICAgIGhpZGUoaXQsIElELCArK2lkKTtcclxuICAvLyByZXR1cm4gb2JqZWN0IGlkIHdpdGggcHJlZml4XHJcbiAgfSByZXR1cm4gJ08nICsgaXRbSURdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFbnRyeSh0aGF0LCBrZXkpe1xyXG4gIC8vIGZhc3QgY2FzZVxyXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XHJcbiAgaWYoaW5kZXggIT0gJ0YnKXJldHVybiB0aGF0W08xXVtpbmRleF07XHJcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXHJcbiAgZm9yKGVudHJ5ID0gdGhhdFtGSVJTVF07IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xyXG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKE5BTUUsIElTX01BUCwgQURERVIpe1xyXG4gICAgZnVuY3Rpb24gQyhpdGVyYWJsZSl7XHJcbiAgICAgIHZhciB0aGF0ID0gYXNzZXJ0Lmluc3QodGhpcywgQywgTkFNRSk7XHJcbiAgICAgIHNldCh0aGF0LCBPMSwgJC5jcmVhdGUobnVsbCkpO1xyXG4gICAgICBzZXQodGhhdCwgU0laRSwgMCk7XHJcbiAgICAgIHNldCh0aGF0LCBMQVNULCB1bmRlZmluZWQpO1xyXG4gICAgICBzZXQodGhhdCwgRklSU1QsIHVuZGVmaW5lZCk7XHJcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkkaXRlci5mb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XHJcbiAgICB9XHJcbiAgICAkLm1peChDLnByb3RvdHlwZSwge1xyXG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcclxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXHJcbiAgICAgIGNsZWFyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0W08xXSwgZW50cnkgPSB0aGF0W0ZJUlNUXTsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XHJcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcclxuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0W0ZJUlNUXSA9IHRoYXRbTEFTVF0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcclxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXHJcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcclxuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xyXG4gICAgICAgIGlmKGVudHJ5KXtcclxuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxyXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xyXG4gICAgICAgICAgZGVsZXRlIHRoYXRbTzFdW2VudHJ5LmldO1xyXG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XHJcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XHJcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XHJcbiAgICAgICAgICBpZih0aGF0W0ZJUlNUXSA9PSBlbnRyeSl0aGF0W0ZJUlNUXSA9IG5leHQ7XHJcbiAgICAgICAgICBpZih0aGF0W0xBU1RdID09IGVudHJ5KXRoYXRbTEFTVF0gPSBwcmV2O1xyXG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xyXG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcclxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24oY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XHJcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdLCAzKVxyXG4gICAgICAgICAgLCBlbnRyeTtcclxuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXNbRklSU1RdKXtcclxuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XHJcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcclxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxyXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcclxuICAgICAgaGFzOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYoJC5ERVNDKSQuc2V0RGVzYyhDLnByb3RvdHlwZSwgJ3NpemUnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gYXNzZXJ0LmRlZih0aGlzW1NJWkVdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQztcclxuICB9LFxyXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XHJcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXHJcbiAgICAgICwgcHJldiwgaW5kZXg7XHJcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcclxuICAgIGlmKGVudHJ5KXtcclxuICAgICAgZW50cnkudiA9IHZhbHVlO1xyXG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhhdFtMQVNUXSA9IGVudHJ5ID0ge1xyXG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxyXG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcclxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcclxuICAgICAgICBwOiBwcmV2ID0gdGhhdFtMQVNUXSwgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcclxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxyXG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXHJcbiAgICAgIH07XHJcbiAgICAgIGlmKCF0aGF0W0ZJUlNUXSl0aGF0W0ZJUlNUXSA9IGVudHJ5O1xyXG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xyXG4gICAgICB0aGF0W1NJWkVdKys7XHJcbiAgICAgIC8vIGFkZCB0byBpbmRleFxyXG4gICAgICBpZihpbmRleCAhPSAnRicpdGhhdFtPMV1baW5kZXhdID0gZW50cnk7XHJcbiAgICB9IHJldHVybiB0aGF0O1xyXG4gIH0sXHJcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxyXG4gIGdldEl0ZXJDb25zdHJ1Y3RvcjogZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XHJcbiAgICAgIHNldCh0aGlzLCBJVEVSLCB7bzogaXRlcmF0ZWQsIGs6IGtpbmR9KTtcclxuICAgIH07XHJcbiAgfSxcclxuICBuZXh0OiBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxyXG4gICAgICAsIGtpbmQgID0gaXRlci5rXHJcbiAgICAgICwgZW50cnkgPSBpdGVyLmw7XHJcbiAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcclxuICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xyXG4gICAgLy8gZ2V0IG5leHQgZW50cnlcclxuICAgIGlmKCFpdGVyLm8gfHwgIShpdGVyLmwgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IGl0ZXIub1tGSVJTVF0pKXtcclxuICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cclxuICAgICAgaXRlci5vID0gdW5kZWZpbmVkO1xyXG4gICAgICByZXR1cm4gc3RlcCgxKTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcclxuICAgIGlmKGtpbmQgPT0gJ2tleScgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcclxuICAgIGlmKGtpbmQgPT0gJ3ZhbHVlJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcclxuICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XHJcbiAgfVxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBzYWZlICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZVxyXG4gICwgYXNzZXJ0ICAgID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpXHJcbiAgLCBmb3JPZiAgICAgPSByZXF1aXJlKCcuLyQuaXRlcicpLmZvck9mXHJcbiAgLCBoYXMgICAgICAgPSAkLmhhc1xyXG4gICwgaXNPYmplY3QgID0gJC5pc09iamVjdFxyXG4gICwgaGlkZSAgICAgID0gJC5oaWRlXHJcbiAgLCBpc0Zyb3plbiAgPSBPYmplY3QuaXNGcm96ZW4gfHwgJC5jb3JlLk9iamVjdC5pc0Zyb3plblxyXG4gICwgaWQgICAgICAgID0gMFxyXG4gICwgSUQgICAgICAgID0gc2FmZSgnaWQnKVxyXG4gICwgV0VBSyAgICAgID0gc2FmZSgnd2VhaycpXHJcbiAgLCBMRUFLICAgICAgPSBzYWZlKCdsZWFrJylcclxuICAsIG1ldGhvZCAgICA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJylcclxuICAsIGZpbmQgICAgICA9IG1ldGhvZCg1KVxyXG4gICwgZmluZEluZGV4ID0gbWV0aG9kKDYpO1xyXG5mdW5jdGlvbiBmaW5kRnJvemVuKHN0b3JlLCBrZXkpe1xyXG4gIHJldHVybiBmaW5kLmNhbGwoc3RvcmUuYXJyYXksIGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xyXG4gIH0pO1xyXG59XHJcbi8vIGZhbGxiYWNrIGZvciBmcm96ZW4ga2V5c1xyXG5mdW5jdGlvbiBsZWFrU3RvcmUodGhhdCl7XHJcbiAgcmV0dXJuIHRoYXRbTEVBS10gfHwgaGlkZSh0aGF0LCBMRUFLLCB7XHJcbiAgICBhcnJheTogW10sXHJcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIHZhciBlbnRyeSA9IGZpbmRGcm96ZW4odGhpcywga2V5KTtcclxuICAgICAgaWYoZW50cnkpcmV0dXJuIGVudHJ5WzFdO1xyXG4gICAgfSxcclxuICAgIGhhczogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgcmV0dXJuICEhZmluZEZyb3plbih0aGlzLCBrZXkpO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgIHZhciBlbnRyeSA9IGZpbmRGcm96ZW4odGhpcywga2V5KTtcclxuICAgICAgaWYoZW50cnkpZW50cnlbMV0gPSB2YWx1ZTtcclxuICAgICAgZWxzZSB0aGlzLmFycmF5LnB1c2goW2tleSwgdmFsdWVdKTtcclxuICAgIH0sXHJcbiAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgdmFyIGluZGV4ID0gZmluZEluZGV4LmNhbGwodGhpcy5hcnJheSwgZnVuY3Rpb24oaXQpe1xyXG4gICAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xyXG4gICAgICB9KTtcclxuICAgICAgaWYofmluZGV4KXRoaXMuYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgcmV0dXJuICEhfmluZGV4O1xyXG4gICAgfVxyXG4gIH0pW0xFQUtdO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24oTkFNRSwgSVNfTUFQLCBBRERFUil7XHJcbiAgICBmdW5jdGlvbiBDKGl0ZXJhYmxlKXtcclxuICAgICAgJC5zZXQoYXNzZXJ0Lmluc3QodGhpcywgQywgTkFNRSksIElELCBpZCsrKTtcclxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoaXNbQURERVJdLCB0aGlzKTtcclxuICAgIH1cclxuICAgICQubWl4KEMucHJvdG90eXBlLCB7XHJcbiAgICAgIC8vIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXHJcbiAgICAgIC8vIDIzLjQuMy4zIFdlYWtTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcclxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmKGlzRnJvemVuKGtleSkpcmV0dXJuIGxlYWtTdG9yZSh0aGlzKVsnZGVsZXRlJ10oa2V5KTtcclxuICAgICAgICByZXR1cm4gaGFzKGtleSwgV0VBSykgJiYgaGFzKGtleVtXRUFLXSwgdGhpc1tJRF0pICYmIGRlbGV0ZSBrZXlbV0VBS11bdGhpc1tJRF1dO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxyXG4gICAgICAvLyAyMy40LjMuNCBXZWFrU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXHJcbiAgICAgIGhhczogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpLmhhcyhrZXkpO1xyXG4gICAgICAgIHJldHVybiBoYXMoa2V5LCBXRUFLKSAmJiBoYXMoa2V5W1dFQUtdLCB0aGlzW0lEXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEM7XHJcbiAgfSxcclxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xyXG4gICAgaWYoaXNGcm96ZW4oYXNzZXJ0Lm9iaihrZXkpKSl7XHJcbiAgICAgIGxlYWtTdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoYXMoa2V5LCBXRUFLKSB8fCBoaWRlKGtleSwgV0VBSywge30pO1xyXG4gICAgICBrZXlbV0VBS11bdGhhdFtJRF1dID0gdmFsdWU7XHJcbiAgICB9IHJldHVybiB0aGF0O1xyXG4gIH0sXHJcbiAgbGVha1N0b3JlOiBsZWFrU3RvcmUsXHJcbiAgV0VBSzogV0VBSyxcclxuICBJRDogSURcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCAkZGVmICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgJGl0ZXIgPSByZXF1aXJlKCcuLyQuaXRlcicpXHJcbiAgLCBhc3NlcnRJbnN0YW5jZSA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKS5pbnN0O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgaXNXZWFrKXtcclxuICB2YXIgQmFzZSAgPSAkLmdbTkFNRV1cclxuICAgICwgQyAgICAgPSBCYXNlXHJcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xyXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcclxuICAgICwgTyAgICAgPSB7fTtcclxuICBmdW5jdGlvbiBmaXhNZXRob2QoS0VZLCBDSEFJTil7XHJcbiAgICB2YXIgbWV0aG9kID0gcHJvdG9bS0VZXTtcclxuICAgIGlmKCQuRlcpcHJvdG9bS0VZXSA9IGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICB2YXIgcmVzdWx0ID0gbWV0aG9kLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTtcclxuICAgICAgcmV0dXJuIENIQUlOID8gdGhpcyA6IHJlc3VsdDtcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmKCEkLmlzRnVuY3Rpb24oQykgfHwgIShpc1dlYWsgfHwgISRpdGVyLkJVR0dZICYmIHByb3RvLmZvckVhY2ggJiYgcHJvdG8uZW50cmllcykpe1xyXG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3IoTkFNRSwgSVNfTUFQLCBBRERFUik7XHJcbiAgICAkLm1peChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBpbnN0ICA9IG5ldyBDXHJcbiAgICAgICwgY2hhaW4gPSBpbnN0W0FEREVSXShpc1dlYWsgPyB7fSA6IC0wLCAxKVxyXG4gICAgICAsIGJ1Z2d5WmVybztcclxuICAgIC8vIHdyYXAgZm9yIGluaXQgY29sbGVjdGlvbnMgZnJvbSBpdGVyYWJsZVxyXG4gICAgaWYoJGl0ZXIuZmFpbChmdW5jdGlvbihpdGVyKXtcclxuICAgICAgbmV3IEMoaXRlcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XHJcbiAgICB9KSB8fCAkaXRlci5EQU5HRVJfQ0xPU0lORyl7XHJcbiAgICAgIEMgPSBmdW5jdGlvbihpdGVyYWJsZSl7XHJcbiAgICAgICAgYXNzZXJ0SW5zdGFuY2UodGhpcywgQywgTkFNRSk7XHJcbiAgICAgICAgdmFyIHRoYXQgPSBuZXcgQmFzZTtcclxuICAgICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpJGl0ZXIuZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xyXG4gICAgICAgIHJldHVybiB0aGF0O1xyXG4gICAgICB9O1xyXG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xyXG4gICAgICBpZigkLkZXKXByb3RvLmNvbnN0cnVjdG9yID0gQztcclxuICAgIH1cclxuICAgIGlzV2VhayB8fCBpbnN0LmZvckVhY2goZnVuY3Rpb24odmFsLCBrZXkpe1xyXG4gICAgICBidWdneVplcm8gPSAxIC8ga2V5ID09PSAtSW5maW5pdHk7XHJcbiAgICB9KTtcclxuICAgIC8vIGZpeCBjb252ZXJ0aW5nIC0wIGtleSB0byArMFxyXG4gICAgaWYoYnVnZ3laZXJvKXtcclxuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcclxuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcclxuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XHJcbiAgICB9XHJcbiAgICAvLyArIGZpeCAuYWRkICYgLnNldCBmb3IgY2hhaW5pbmdcclxuICAgIGlmKGJ1Z2d5WmVybyB8fCBjaGFpbiAhPT0gaW5zdClmaXhNZXRob2QoQURERVIsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWlyZSgnLi8kLmNvZicpLnNldChDLCBOQU1FKTtcclxuICByZXF1aXJlKCcuLyQuc3BlY2llcycpKEMpO1xyXG5cclxuICBPW05BTUVdID0gQztcclxuICAkZGVmKCRkZWYuRyArICRkZWYuVyArICRkZWYuRiAqIChDICE9IEJhc2UpLCBPKTtcclxuXHJcbiAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXHJcbiAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxyXG4gIGlmKCFpc1dlYWspJGl0ZXIuc3RkKFxyXG4gICAgQywgTkFNRSxcclxuICAgIGNvbW1vbi5nZXRJdGVyQ29uc3RydWN0b3IoKSwgY29tbW9uLm5leHQsXHJcbiAgICBJU19NQVAgPyAna2V5K3ZhbHVlJyA6ICd2YWx1ZScgLCAhSVNfTUFQLCB0cnVlXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIEM7XHJcbn07IiwiLy8gT3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXHJcbnZhciBhc3NlcnRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKS5mbjtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcclxuICBhc3NlcnRGdW5jdGlvbihmbik7XHJcbiAgaWYofmxlbmd0aCAmJiB0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xyXG4gIHN3aXRjaChsZW5ndGgpe1xyXG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XHJcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xyXG4gICAgfTtcclxuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcclxuICAgIH07XHJcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcclxuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XHJcbiAgICB9O1xyXG4gIH0gcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xyXG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn07IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgZ2xvYmFsICAgICA9ICQuZ1xyXG4gICwgY29yZSAgICAgICA9ICQuY29yZVxyXG4gICwgaXNGdW5jdGlvbiA9ICQuaXNGdW5jdGlvbjtcclxuZnVuY3Rpb24gY3R4KGZuLCB0aGF0KXtcclxuICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xyXG4gIH07XHJcbn1cclxuZ2xvYmFsLmNvcmUgPSBjb3JlO1xyXG4vLyB0eXBlIGJpdG1hcFxyXG4kZGVmLkYgPSAxOyAgLy8gZm9yY2VkXHJcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcclxuJGRlZi5TID0gNDsgIC8vIHN0YXRpY1xyXG4kZGVmLlAgPSA4OyAgLy8gcHJvdG9cclxuJGRlZi5CID0gMTY7IC8vIGJpbmRcclxuJGRlZi5XID0gMzI7IC8vIHdyYXBcclxuZnVuY3Rpb24gJGRlZih0eXBlLCBuYW1lLCBzb3VyY2Upe1xyXG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcclxuICAgICwgaXNHbG9iYWwgPSB0eXBlICYgJGRlZi5HXHJcbiAgICAsIHRhcmdldCAgID0gaXNHbG9iYWwgPyBnbG9iYWwgOiB0eXBlICYgJGRlZi5TXHJcbiAgICAgICAgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KS5wcm90b3R5cGVcclxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xyXG4gIGlmKGlzR2xvYmFsKXNvdXJjZSA9IG5hbWU7XHJcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xyXG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXHJcbiAgICBvd24gPSAhKHR5cGUgJiAkZGVmLkYpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xyXG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcclxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XHJcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxyXG4gICAgaWYodHlwZSAmICRkZWYuQiAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcclxuICAgIGVsc2UgZXhwID0gdHlwZSAmICRkZWYuUCAmJiBpc0Z1bmN0aW9uKG91dCkgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcclxuICAgIC8vIGV4dGVuZCBnbG9iYWxcclxuICAgIGlmKHRhcmdldCAmJiAhb3duKXtcclxuICAgICAgaWYoaXNHbG9iYWwpdGFyZ2V0W2tleV0gPSBvdXQ7XHJcbiAgICAgIGVsc2UgZGVsZXRlIHRhcmdldFtrZXldICYmICQuaGlkZSh0YXJnZXQsIGtleSwgb3V0KTtcclxuICAgIH1cclxuICAgIC8vIGV4cG9ydFxyXG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCkkLmhpZGUoZXhwb3J0cywga2V5LCBleHApO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9ICRkZWY7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkKXtcclxuICAkLkZXICAgPSB0cnVlO1xyXG4gICQucGF0aCA9ICQuZztcclxuICByZXR1cm4gJDtcclxufTsiLCIvLyBGYXN0IGFwcGx5XHJcbi8vIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcclxuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XHJcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcclxuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xyXG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xyXG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xyXG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xyXG4gICAgY2FzZSA1OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pO1xyXG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjdHggICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxyXG4gICwgY29mICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuY29mJylcclxuICAsICRkZWYgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCBhc3NlcnRPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKS5vYmpcclxuICAsIFNZTUJPTF9JVEVSQVRPUiAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXHJcbiAgLCBGRl9JVEVSQVRPUiAgICAgICA9ICdAQGl0ZXJhdG9yJ1xyXG4gICwgSXRlcmF0b3JzICAgICAgICAgPSB7fVxyXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcclxuLy8gU2FmYXJpIGhhcyBieWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxyXG52YXIgQlVHR1kgPSAna2V5cycgaW4gW10gJiYgISgnbmV4dCcgaW4gW10ua2V5cygpKTtcclxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcclxuc2V0SXRlcmF0b3IoSXRlcmF0b3JQcm90b3R5cGUsICQudGhhdCk7XHJcbmZ1bmN0aW9uIHNldEl0ZXJhdG9yKE8sIHZhbHVlKXtcclxuICAkLmhpZGUoTywgU1lNQk9MX0lURVJBVE9SLCB2YWx1ZSk7XHJcbiAgLy8gQWRkIGl0ZXJhdG9yIGZvciBGRiBpdGVyYXRvciBwcm90b2NvbFxyXG4gIGlmKEZGX0lURVJBVE9SIGluIFtdKSQuaGlkZShPLCBGRl9JVEVSQVRPUiwgdmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yKENvbnN0cnVjdG9yLCBOQU1FLCB2YWx1ZSwgREVGQVVMVCl7XHJcbiAgdmFyIHByb3RvID0gQ29uc3RydWN0b3IucHJvdG90eXBlXHJcbiAgICAsIGl0ZXIgID0gcHJvdG9bU1lNQk9MX0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXSB8fCB2YWx1ZTtcclxuICAvLyBEZWZpbmUgaXRlcmF0b3JcclxuICBpZigkLkZXKXNldEl0ZXJhdG9yKHByb3RvLCBpdGVyKTtcclxuICBpZihpdGVyICE9PSB2YWx1ZSl7XHJcbiAgICB2YXIgaXRlclByb3RvID0gJC5nZXRQcm90byhpdGVyLmNhbGwobmV3IENvbnN0cnVjdG9yKSk7XHJcbiAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXHJcbiAgICBjb2Yuc2V0KGl0ZXJQcm90bywgTkFNRSArICcgSXRlcmF0b3InLCB0cnVlKTtcclxuICAgIC8vIEZGIGZpeFxyXG4gICAgaWYoJC5GVykkLmhhcyhwcm90bywgRkZfSVRFUkFUT1IpICYmIHNldEl0ZXJhdG9yKGl0ZXJQcm90bywgJC50aGF0KTtcclxuICB9XHJcbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxyXG4gIEl0ZXJhdG9yc1tOQU1FXSA9IGl0ZXI7XHJcbiAgLy8gRkYgJiB2OCBmaXhcclxuICBJdGVyYXRvcnNbTkFNRSArICcgSXRlcmF0b3InXSA9ICQudGhhdDtcclxuICByZXR1cm4gaXRlcjtcclxufVxyXG5mdW5jdGlvbiBnZXRJdGVyYXRvcihpdCl7XHJcbiAgdmFyIFN5bWJvbCAgPSAkLmcuU3ltYm9sXHJcbiAgICAsIGV4dCAgICAgPSBpdFtTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yIHx8IEZGX0lURVJBVE9SXVxyXG4gICAgLCBnZXRJdGVyID0gZXh0IHx8IGl0W1NZTUJPTF9JVEVSQVRPUl0gfHwgSXRlcmF0b3JzW2NvZi5jbGFzc29mKGl0KV07XHJcbiAgcmV0dXJuIGFzc2VydE9iamVjdChnZXRJdGVyLmNhbGwoaXQpKTtcclxufVxyXG5mdW5jdGlvbiBjbG9zZUl0ZXJhdG9yKGl0ZXJhdG9yKXtcclxuICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xyXG4gIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFzc2VydE9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xyXG59XHJcbmZ1bmN0aW9uIHN0ZXBDYWxsKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFzc2VydE9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcclxuICB9IGNhdGNoKGUpe1xyXG4gICAgY2xvc2VJdGVyYXRvcihpdGVyYXRvcik7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG52YXIgREFOR0VSX0NMT1NJTkcgPSB0cnVlO1xyXG4hZnVuY3Rpb24oKXtcclxuICB0cnkge1xyXG4gICAgdmFyIGl0ZXIgPSBbMV0ua2V5cygpO1xyXG4gICAgaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBEQU5HRVJfQ0xPU0lORyA9IGZhbHNlOyB9O1xyXG4gICAgQXJyYXkuZnJvbShpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcclxuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XHJcbn0oKTtcclxudmFyICRpdGVyID0gbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgQlVHR1k6IEJVR0dZLFxyXG4gIERBTkdFUl9DTE9TSU5HOiBEQU5HRVJfQ0xPU0lORyxcclxuICBmYWlsOiBmdW5jdGlvbihleGVjKXtcclxuICAgIHZhciBmYWlsID0gdHJ1ZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBhcnIgID0gW1t7fSwgMV1dXHJcbiAgICAgICAgLCBpdGVyID0gYXJyW1NZTUJPTF9JVEVSQVRPUl0oKVxyXG4gICAgICAgICwgbmV4dCA9IGl0ZXIubmV4dDtcclxuICAgICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBmYWlsID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIG5leHQuY2FsbCh0aGlzKTtcclxuICAgICAgfTtcclxuICAgICAgYXJyW1NZTUJPTF9JVEVSQVRPUl0gPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBpdGVyO1xyXG4gICAgICB9O1xyXG4gICAgICBleGVjKGFycik7XHJcbiAgICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XHJcbiAgICByZXR1cm4gZmFpbDtcclxuICB9LFxyXG4gIEl0ZXJhdG9yczogSXRlcmF0b3JzLFxyXG4gIHByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXHJcbiAgc3RlcDogZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xyXG4gICAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XHJcbiAgfSxcclxuICBzdGVwQ2FsbDogc3RlcENhbGwsXHJcbiAgY2xvc2U6IGNsb3NlSXRlcmF0b3IsXHJcbiAgaXM6IGZ1bmN0aW9uKGl0KXtcclxuICAgIHZhciBPICAgICAgPSBPYmplY3QoaXQpXHJcbiAgICAgICwgU3ltYm9sID0gJC5nLlN5bWJvbFxyXG4gICAgICAsIFNZTSAgICA9IFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3IgfHwgRkZfSVRFUkFUT1I7XHJcbiAgICByZXR1cm4gU1lNIGluIE8gfHwgU1lNQk9MX0lURVJBVE9SIGluIE8gfHwgJC5oYXMoSXRlcmF0b3JzLCBjb2YuY2xhc3NvZihPKSk7XHJcbiAgfSxcclxuICBnZXQ6IGdldEl0ZXJhdG9yLFxyXG4gIHNldDogc2V0SXRlcmF0b3IsXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCwgcHJvdG8pe1xyXG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gJC5jcmVhdGUocHJvdG8gfHwgJGl0ZXIucHJvdG90eXBlLCB7bmV4dDogJC5kZXNjKDEsIG5leHQpfSk7XHJcbiAgICBjb2Yuc2V0KENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xyXG4gIH0sXHJcbiAgZGVmaW5lOiBkZWZpbmVJdGVyYXRvcixcclxuICBzdGQ6IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFKXtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUl0ZXIoa2luZCl7XHJcbiAgICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICAkaXRlci5jcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xyXG4gICAgdmFyIGVudHJpZXMgPSBjcmVhdGVJdGVyKCdrZXkrdmFsdWUnKVxyXG4gICAgICAsIHZhbHVlcyAgPSBjcmVhdGVJdGVyKCd2YWx1ZScpXHJcbiAgICAgICwgcHJvdG8gICA9IEJhc2UucHJvdG90eXBlXHJcbiAgICAgICwgbWV0aG9kcywga2V5O1xyXG4gICAgaWYoREVGQVVMVCA9PSAndmFsdWUnKXZhbHVlcyA9IGRlZmluZUl0ZXJhdG9yKEJhc2UsIE5BTUUsIHZhbHVlcywgJ3ZhbHVlcycpO1xyXG4gICAgZWxzZSBlbnRyaWVzID0gZGVmaW5lSXRlcmF0b3IoQmFzZSwgTkFNRSwgZW50cmllcywgJ2VudHJpZXMnKTtcclxuICAgIGlmKERFRkFVTFQpe1xyXG4gICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIGVudHJpZXM6IGVudHJpZXMsXHJcbiAgICAgICAga2V5czogICAgSVNfU0VUID8gdmFsdWVzIDogY3JlYXRlSXRlcigna2V5JyksXHJcbiAgICAgICAgdmFsdWVzOiAgdmFsdWVzXHJcbiAgICAgIH07XHJcbiAgICAgICRkZWYoJGRlZi5QICsgJGRlZi5GICogQlVHR1ksIE5BTUUsIG1ldGhvZHMpO1xyXG4gICAgICBpZihGT1JDRSlmb3Ioa2V5IGluIG1ldGhvZHMpe1xyXG4gICAgICAgIGlmKCEoa2V5IGluIHByb3RvKSkkLmhpZGUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZm9yT2Y6IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCl7XHJcbiAgICB2YXIgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSlcclxuICAgICAgLCBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXHJcbiAgICAgICwgc3RlcDtcclxuICAgIHdoaWxlKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSl7XHJcbiAgICAgIGlmKHN0ZXBDYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKSA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHJldHVybiBjbG9zZUl0ZXJhdG9yKGl0ZXJhdG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciBnbG9iYWwgPSB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpXHJcbiAgLCBjb3JlICAgPSB7fVxyXG4gICwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcclxuICAsIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHlcclxuICAsIGNlaWwgID0gTWF0aC5jZWlsXHJcbiAgLCBmbG9vciA9IE1hdGguZmxvb3JcclxuICAsIG1heCAgID0gTWF0aC5tYXhcclxuICAsIG1pbiAgID0gTWF0aC5taW47XHJcbi8vIFRoZSBlbmdpbmUgd29ya3MgZmluZSB3aXRoIGRlc2NyaXB0b3JzPyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5LlxyXG52YXIgREVTQyA9ICEhZnVuY3Rpb24oKXtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiAyOyB9fSkuYSA9PSAyO1xyXG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxufSgpO1xyXG52YXIgaGlkZSA9IGNyZWF0ZURlZmluZXIoMSk7XHJcbi8vIDcuMS40IFRvSW50ZWdlclxyXG5mdW5jdGlvbiB0b0ludGVnZXIoaXQpe1xyXG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xyXG59XHJcbmZ1bmN0aW9uIGRlc2MoYml0bWFwLCB2YWx1ZSl7XHJcbiAgcmV0dXJuIHtcclxuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcclxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcclxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcclxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcclxuICB9O1xyXG59XHJcbmZ1bmN0aW9uIHNpbXBsZVNldChvYmplY3QsIGtleSwgdmFsdWUpe1xyXG4gIG9iamVjdFtrZXldID0gdmFsdWU7XHJcbiAgcmV0dXJuIG9iamVjdDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEZWZpbmVyKGJpdG1hcCl7XHJcbiAgcmV0dXJuIERFU0MgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xyXG4gICAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgZGVzYyhiaXRtYXAsIHZhbHVlKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuICB9IDogc2ltcGxlU2V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdChpdCl7XHJcbiAgcmV0dXJuIGl0ICE9PSBudWxsICYmICh0eXBlb2YgaXQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIGl0ID09ICdmdW5jdGlvbicpO1xyXG59XHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oaXQpe1xyXG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJztcclxufVxyXG5mdW5jdGlvbiBhc3NlcnREZWZpbmVkKGl0KXtcclxuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xyXG4gIHJldHVybiBpdDtcclxufVxyXG5cclxudmFyICQgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mdycpKHtcclxuICBnOiBnbG9iYWwsXHJcbiAgY29yZTogY29yZSxcclxuICBodG1sOiBnbG9iYWwuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxyXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvcmUtanMtaXNvYmplY3RcclxuICBpc09iamVjdDogICBpc09iamVjdCxcclxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxyXG4gIGl0OiBmdW5jdGlvbihpdCl7XHJcbiAgICByZXR1cm4gaXQ7XHJcbiAgfSxcclxuICB0aGF0OiBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfSxcclxuICAvLyA3LjEuNCBUb0ludGVnZXJcclxuICB0b0ludGVnZXI6IHRvSW50ZWdlcixcclxuICAvLyA3LjEuMTUgVG9MZW5ndGhcclxuICB0b0xlbmd0aDogZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcclxuICB9LFxyXG4gIHRvSW5kZXg6IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xyXG4gICAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xyXG4gICAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XHJcbiAgfSxcclxuICBoYXM6IGZ1bmN0aW9uKGl0LCBrZXkpe1xyXG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XHJcbiAgfSxcclxuICBjcmVhdGU6ICAgICBPYmplY3QuY3JlYXRlLFxyXG4gIGdldFByb3RvOiAgIE9iamVjdC5nZXRQcm90b3R5cGVPZixcclxuICBERVNDOiAgICAgICBERVNDLFxyXG4gIGRlc2M6ICAgICAgIGRlc2MsXHJcbiAgZ2V0RGVzYzogICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcclxuICBzZXREZXNjOiAgICBkZWZpbmVQcm9wZXJ0eSxcclxuICBnZXRLZXlzOiAgICBPYmplY3Qua2V5cyxcclxuICBnZXROYW1lczogICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcclxuICBnZXRTeW1ib2xzOiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxyXG4gIC8vIER1bW15LCBmaXggZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmcgaW4gZXM1IG1vZHVsZVxyXG4gIGFzc2VydERlZmluZWQ6IGFzc2VydERlZmluZWQsXHJcbiAgRVM1T2JqZWN0OiBPYmplY3QsXHJcbiAgdG9PYmplY3Q6IGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiAkLkVTNU9iamVjdChhc3NlcnREZWZpbmVkKGl0KSk7XHJcbiAgfSxcclxuICBoaWRlOiBoaWRlLFxyXG4gIGRlZjogY3JlYXRlRGVmaW5lcigwKSxcclxuICBzZXQ6IGdsb2JhbC5TeW1ib2wgPyBzaW1wbGVTZXQgOiBoaWRlLFxyXG4gIG1peDogZnVuY3Rpb24odGFyZ2V0LCBzcmMpe1xyXG4gICAgZm9yKHZhciBrZXkgaW4gc3JjKWhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfSxcclxuICBlYWNoOiBbXS5mb3JFYWNoXHJcbn0pO1xyXG5pZih0eXBlb2YgX19lICE9ICd1bmRlZmluZWQnKV9fZSA9IGNvcmU7XHJcbmlmKHR5cGVvZiBfX2cgIT0gJ3VuZGVmaW5lZCcpX19nID0gZ2xvYmFsOyIsInZhciAkID0gcmVxdWlyZSgnLi8kJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XHJcbiAgdmFyIE8gICAgICA9ICQudG9PYmplY3Qob2JqZWN0KVxyXG4gICAgLCBrZXlzICAgPSAkLmdldEtleXMoTylcclxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICwgaW5kZXggID0gMFxyXG4gICAgLCBrZXk7XHJcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcclxufTsiLCJ2YXIgJCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGFzc2VydE9iamVjdCA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKS5vYmo7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xyXG4gIGFzc2VydE9iamVjdChpdCk7XHJcbiAgcmV0dXJuICQuZ2V0U3ltYm9scyA/ICQuZ2V0TmFtZXMoaXQpLmNvbmNhdCgkLmdldFN5bWJvbHMoaXQpKSA6ICQuZ2V0TmFtZXMoaXQpO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBpbnZva2UgPSByZXF1aXJlKCcuLyQuaW52b2tlJylcclxuICAsIGFzc2VydEZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpLmZuO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKC8qIC4uLnBhcmdzICovKXtcclxuICB2YXIgZm4gICAgID0gYXNzZXJ0RnVuY3Rpb24odGhpcylcclxuICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgLCBwYXJncyAgPSBBcnJheShsZW5ndGgpXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwgXyAgICAgID0gJC5wYXRoLl9cclxuICAgICwgaG9sZGVyID0gZmFsc2U7XHJcbiAgd2hpbGUobGVuZ3RoID4gaSlpZigocGFyZ3NbaV0gPSBhcmd1bWVudHNbaSsrXSkgPT09IF8paG9sZGVyID0gdHJ1ZTtcclxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XHJcbiAgICB2YXIgdGhhdCAgICA9IHRoaXNcclxuICAgICAgLCBfbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAsIGogPSAwLCBrID0gMCwgYXJncztcclxuICAgIGlmKCFob2xkZXIgJiYgIV9sZW5ndGgpcmV0dXJuIGludm9rZShmbiwgcGFyZ3MsIHRoYXQpO1xyXG4gICAgYXJncyA9IHBhcmdzLnNsaWNlKCk7XHJcbiAgICBpZihob2xkZXIpZm9yKDtsZW5ndGggPiBqOyBqKyspaWYoYXJnc1tqXSA9PT0gXylhcmdzW2pdID0gYXJndW1lbnRzW2srK107XHJcbiAgICB3aGlsZShfbGVuZ3RoID4gaylhcmdzLnB1c2goYXJndW1lbnRzW2srK10pO1xyXG4gICAgcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhhdCk7XHJcbiAgfTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVnRXhwLCByZXBsYWNlLCBpc1N0YXRpYyl7XHJcbiAgdmFyIHJlcGxhY2VyID0gcmVwbGFjZSA9PT0gT2JqZWN0KHJlcGxhY2UpID8gZnVuY3Rpb24ocGFydCl7XHJcbiAgICByZXR1cm4gcmVwbGFjZVtwYXJ0XTtcclxuICB9IDogcmVwbGFjZTtcclxuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuIFN0cmluZyhpc1N0YXRpYyA/IGl0IDogdGhpcykucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcclxuICB9O1xyXG59OyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrcyB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cclxuLyplc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xyXG52YXIgJCAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGFzc2VydCA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICA/IGZ1bmN0aW9uKGJ1Z2d5LCBzZXQpe1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vJC5jdHgnKShGdW5jdGlvbi5jYWxsLCAkLmdldERlc2MoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XHJcbiAgICAgICAgc2V0KHt9LCBbXSk7XHJcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24oTywgcHJvdG8pe1xyXG4gICAgICAgIGFzc2VydC5vYmooTyk7XHJcbiAgICAgICAgYXNzZXJ0KHByb3RvID09PSBudWxsIHx8ICQuaXNPYmplY3QocHJvdG8pLCBwcm90bywgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xyXG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XHJcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xyXG4gICAgICAgIHJldHVybiBPO1xyXG4gICAgICB9O1xyXG4gICAgfSgpXHJcbiAgOiB1bmRlZmluZWQpOyIsInZhciAkID0gcmVxdWlyZSgnLi8kJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQyl7XHJcbiAgaWYoJC5ERVNDICYmICQuRlcpJC5zZXREZXNjKEMsIHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpLCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBnZXQ6ICQudGhhdFxyXG4gIH0pO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XHJcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxyXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvcyl7XHJcbiAgICB2YXIgcyA9IFN0cmluZygkLmFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICwgaSA9ICQudG9JbnRlZ2VyKHBvcylcclxuICAgICAgLCBsID0gcy5sZW5ndGhcclxuICAgICAgLCBhLCBiO1xyXG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcclxuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XHJcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsXHJcbiAgICAgIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxyXG4gICAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXHJcbiAgICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XHJcbiAgfTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY3R4ICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXHJcbiAgLCBjb2YgICAgPSByZXF1aXJlKCcuLyQuY29mJylcclxuICAsIGludm9rZSA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxyXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gJC5nXHJcbiAgLCBpc0Z1bmN0aW9uICAgICAgICAgPSAkLmlzRnVuY3Rpb25cclxuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcclxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxyXG4gICwgcG9zdE1lc3NhZ2UgICAgICAgID0gZ2xvYmFsLnBvc3RNZXNzYWdlXHJcbiAgLCBhZGRFdmVudExpc3RlbmVyICAgPSBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lclxyXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXHJcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXHJcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxyXG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcclxuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xyXG5mdW5jdGlvbiBydW4oKXtcclxuICB2YXIgaWQgPSArdGhpcztcclxuICBpZigkLmhhcyhxdWV1ZSwgaWQpKXtcclxuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcclxuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XHJcbiAgICBmbigpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsaXN0bmVyKGV2ZW50KXtcclxuICBydW4uY2FsbChldmVudC5kYXRhKTtcclxufVxyXG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XHJcbmlmKCFpc0Z1bmN0aW9uKHNldFRhc2spIHx8ICFpc0Z1bmN0aW9uKGNsZWFyVGFzaykpe1xyXG4gIHNldFRhc2sgPSBmdW5jdGlvbihmbil7XHJcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcclxuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XHJcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcclxuICAgICAgaW52b2tlKGlzRnVuY3Rpb24oZm4pID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xyXG4gICAgfTtcclxuICAgIGRlZmVyKGNvdW50ZXIpO1xyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfTtcclxuICBjbGVhclRhc2sgPSBmdW5jdGlvbihpZCl7XHJcbiAgICBkZWxldGUgcXVldWVbaWRdO1xyXG4gIH07XHJcbiAgLy8gTm9kZS5qcyAwLjgtXHJcbiAgaWYoY29mKGdsb2JhbC5wcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xyXG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XHJcbiAgICAgIGdsb2JhbC5wcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XHJcbiAgICB9O1xyXG4gIC8vIE1vZGVybiBicm93c2Vycywgc2tpcCBpbXBsZW1lbnRhdGlvbiBmb3IgV2ViV29ya2Vyc1xyXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzIG9iamVjdFxyXG4gIH0gZWxzZSBpZihhZGRFdmVudExpc3RlbmVyICYmIGlzRnVuY3Rpb24ocG9zdE1lc3NhZ2UpICYmICEkLmcuaW1wb3J0U2NyaXB0cyl7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgcG9zdE1lc3NhZ2UoaWQsICcqJyk7XHJcbiAgICB9O1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RuZXIsIGZhbHNlKTtcclxuICAvLyBXZWJXb3JrZXJzXHJcbiAgfSBlbHNlIGlmKGlzRnVuY3Rpb24oTWVzc2FnZUNoYW5uZWwpKXtcclxuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XHJcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcclxuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdG5lcjtcclxuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xyXG4gIC8vIElFOC1cclxuICB9IGVsc2UgaWYoJC5nLmRvY3VtZW50ICYmIE9OUkVBRFlTVEFURUNIQU5HRSBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSl7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgJC5odG1sLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAkLmh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgc2V0OiAgIHNldFRhc2ssXHJcbiAgY2xlYXI6IGNsZWFyVGFza1xyXG59OyIsInZhciBzaWQgPSAwO1xyXG5mdW5jdGlvbiB1aWQoa2V5KXtcclxuICByZXR1cm4gJ1N5bWJvbCgnICsga2V5ICsgJylfJyArICgrK3NpZCArIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDM2KTtcclxufVxyXG51aWQuc2FmZSA9IHJlcXVpcmUoJy4vJCcpLmcuU3ltYm9sIHx8IHVpZDtcclxubW9kdWxlLmV4cG9ydHMgPSB1aWQ7IiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxyXG52YXIgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuLyQud2tzJykoJ3Vuc2NvcGFibGVzJyk7XHJcbmlmKCQuRlcgJiYgIShVTlNDT1BBQkxFUyBpbiBbXSkpJC5oaWRlKEFycmF5LnByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHt9KTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xyXG4gIGlmKCQuRlcpW11bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xyXG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQnKS5nXHJcbiAgLCBzdG9yZSAgPSB7fTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcclxuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cclxuICAgIGdsb2JhbC5TeW1ib2wgJiYgZ2xvYmFsLlN5bWJvbFtuYW1lXSB8fCByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnU3ltYm9sLicgKyBuYW1lKSk7XHJcbn07IiwidmFyICQgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY29mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxyXG4gICwgJGRlZiAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgaW52b2tlICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxyXG4gICwgYXJyYXlNZXRob2QgICAgICA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJylcclxuICAsIElFX1BST1RPICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnX19wcm90b19fJylcclxuICAsIGFzc2VydCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuYXNzZXJ0JylcclxuICAsIGFzc2VydE9iamVjdCAgICAgPSBhc3NlcnQub2JqXHJcbiAgLCBPYmplY3RQcm90byAgICAgID0gT2JqZWN0LnByb3RvdHlwZVxyXG4gICwgQSAgICAgICAgICAgICAgICA9IFtdXHJcbiAgLCBzbGljZSAgICAgICAgICAgID0gQS5zbGljZVxyXG4gICwgaW5kZXhPZiAgICAgICAgICA9IEEuaW5kZXhPZlxyXG4gICwgY2xhc3NvZiAgICAgICAgICA9IGNvZi5jbGFzc29mXHJcbiAgLCBkZWZpbmVQcm9wZXJ0aWVzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXNcclxuICAsIGhhcyAgICAgICAgICAgICAgPSAkLmhhc1xyXG4gICwgZGVmaW5lUHJvcGVydHkgICA9ICQuc2V0RGVzY1xyXG4gICwgZ2V0T3duRGVzY3JpcHRvciA9ICQuZ2V0RGVzY1xyXG4gICwgaXNGdW5jdGlvbiAgICAgICA9ICQuaXNGdW5jdGlvblxyXG4gICwgdG9PYmplY3QgICAgICAgICA9ICQudG9PYmplY3RcclxuICAsIHRvTGVuZ3RoICAgICAgICAgPSAkLnRvTGVuZ3RoXHJcbiAgLCBJRThfRE9NX0RFRklORSAgID0gZmFsc2U7XHJcblxyXG5pZighJC5ERVNDKXtcclxuICB0cnkge1xyXG4gICAgSUU4X0RPTV9ERUZJTkUgPSBkZWZpbmVQcm9wZXJ0eShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgJ3gnLFxyXG4gICAgICB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gODsgfX1cclxuICAgICkueCA9PSA4O1xyXG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxuICAkLnNldERlc2MgPSBmdW5jdGlvbihPLCBQLCBBdHRyaWJ1dGVzKXtcclxuICAgIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XHJcbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcclxuICAgIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxuICAgIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xyXG4gICAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKWFzc2VydE9iamVjdChPKVtQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XHJcbiAgICByZXR1cm4gTztcclxuICB9O1xyXG4gICQuZ2V0RGVzYyA9IGZ1bmN0aW9uKE8sIFApe1xyXG4gICAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcclxuICAgICAgcmV0dXJuIGdldE93bkRlc2NyaXB0b3IoTywgUCk7XHJcbiAgICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XHJcbiAgICBpZihoYXMoTywgUCkpcmV0dXJuICQuZGVzYyghT2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChPLCBQKSwgT1tQXSk7XHJcbiAgfTtcclxuICBkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24oTywgUHJvcGVydGllcyl7XHJcbiAgICBhc3NlcnRPYmplY3QoTyk7XHJcbiAgICB2YXIga2V5cyAgID0gJC5nZXRLZXlzKFByb3BlcnRpZXMpXHJcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgLCBpID0gMFxyXG4gICAgICAsIFA7XHJcbiAgICB3aGlsZShsZW5ndGggPiBpKSQuc2V0RGVzYyhPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcclxuICAgIHJldHVybiBPO1xyXG4gIH07XHJcbn1cclxuJGRlZigkZGVmLlMgKyAkZGVmLkYgKiAhJC5ERVNDLCAnT2JqZWN0Jywge1xyXG4gIC8vIDE5LjEuMi42IC8gMTUuMi4zLjMgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxyXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJC5nZXREZXNjLFxyXG4gIC8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXHJcbiAgZGVmaW5lUHJvcGVydHk6ICQuc2V0RGVzYyxcclxuICAvLyAxOS4xLjIuMyAvIDE1LjIuMy43IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXHJcbiAgZGVmaW5lUHJvcGVydGllczogZGVmaW5lUHJvcGVydGllc1xyXG59KTtcclxuXHJcbiAgLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xyXG52YXIga2V5czEgPSAoJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsJyArXHJcbiAgICAgICAgICAgICd0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJykuc3BsaXQoJywnKVxyXG4gIC8vIEFkZGl0aW9uYWwga2V5cyBmb3IgZ2V0T3duUHJvcGVydHlOYW1lc1xyXG4gICwga2V5czIgPSBrZXlzMS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKVxyXG4gICwga2V5c0xlbjEgPSBrZXlzMS5sZW5ndGg7XHJcblxyXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxyXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XHJcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcclxuICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcclxuICAgICwgaSAgICAgID0ga2V5c0xlbjFcclxuICAgICwgaWZyYW1lRG9jdW1lbnQ7XHJcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgJC5odG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxyXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XHJcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xyXG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xyXG4gIGlmcmFtZURvY3VtZW50LndyaXRlKCc8c2NyaXB0PmRvY3VtZW50LkY9T2JqZWN0PC9zY3JpcHQ+Jyk7XHJcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcclxuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcclxuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3QucHJvdG90eXBlW2tleXMxW2ldXTtcclxuICByZXR1cm4gY3JlYXRlRGljdCgpO1xyXG59O1xyXG5mdW5jdGlvbiBjcmVhdGVHZXRLZXlzKG5hbWVzLCBsZW5ndGgpe1xyXG4gIHJldHVybiBmdW5jdGlvbihvYmplY3Qpe1xyXG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KG9iamVjdClcclxuICAgICAgLCBpICAgICAgPSAwXHJcbiAgICAgICwgcmVzdWx0ID0gW11cclxuICAgICAgLCBrZXk7XHJcbiAgICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XHJcbiAgICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXHJcbiAgICB3aGlsZShsZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XHJcbiAgICAgIH5pbmRleE9mLmNhbGwocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbn1cclxuZnVuY3Rpb24gaXNQcmltaXRpdmUoaXQpeyByZXR1cm4gISQuaXNPYmplY3QoaXQpOyB9XHJcbmZ1bmN0aW9uIEVtcHR5KCl7fVxyXG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHtcclxuICAvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxyXG4gIGdldFByb3RvdHlwZU9mOiAkLmdldFByb3RvID0gJC5nZXRQcm90byB8fCBmdW5jdGlvbihPKXtcclxuICAgIE8gPSBPYmplY3QoYXNzZXJ0LmRlZihPKSk7XHJcbiAgICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcclxuICAgIGlmKGlzRnVuY3Rpb24oTy5jb25zdHJ1Y3RvcikgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xyXG4gICAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XHJcbiAgICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xyXG4gIH0sXHJcbiAgLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxyXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICQuZ2V0TmFtZXMgPSAkLmdldE5hbWVzIHx8IGNyZWF0ZUdldEtleXMoa2V5czIsIGtleXMyLmxlbmd0aCwgdHJ1ZSksXHJcbiAgLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXHJcbiAgY3JlYXRlOiAkLmNyZWF0ZSA9ICQuY3JlYXRlIHx8IGZ1bmN0aW9uKE8sIC8qPyovUHJvcGVydGllcyl7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgaWYoTyAhPT0gbnVsbCl7XHJcbiAgICAgIEVtcHR5LnByb3RvdHlwZSA9IGFzc2VydE9iamVjdChPKTtcclxuICAgICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XHJcbiAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XHJcbiAgICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2Ygc2hpbVxyXG4gICAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcclxuICAgIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XHJcbiAgICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xyXG4gIH0sXHJcbiAgLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXHJcbiAga2V5czogJC5nZXRLZXlzID0gJC5nZXRLZXlzIHx8IGNyZWF0ZUdldEtleXMoa2V5czEsIGtleXNMZW4xLCBmYWxzZSksXHJcbiAgLy8gMTkuMS4yLjE3IC8gMTUuMi4zLjggT2JqZWN0LnNlYWwoTylcclxuICBzZWFsOiAkLml0LCAvLyA8LSBjYXBcclxuICAvLyAxOS4xLjIuNSAvIDE1LjIuMy45IE9iamVjdC5mcmVlemUoTylcclxuICBmcmVlemU6ICQuaXQsIC8vIDwtIGNhcFxyXG4gIC8vIDE5LjEuMi4xNSAvIDE1LjIuMy4xMCBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoTylcclxuICBwcmV2ZW50RXh0ZW5zaW9uczogJC5pdCwgLy8gPC0gY2FwXHJcbiAgLy8gMTkuMS4yLjEzIC8gMTUuMi4zLjExIE9iamVjdC5pc1NlYWxlZChPKVxyXG4gIGlzU2VhbGVkOiBpc1ByaW1pdGl2ZSwgLy8gPC0gY2FwXHJcbiAgLy8gMTkuMS4yLjEyIC8gMTUuMi4zLjEyIE9iamVjdC5pc0Zyb3plbihPKVxyXG4gIGlzRnJvemVuOiBpc1ByaW1pdGl2ZSwgLy8gPC0gY2FwXHJcbiAgLy8gMTkuMS4yLjExIC8gMTUuMi4zLjEzIE9iamVjdC5pc0V4dGVuc2libGUoTylcclxuICBpc0V4dGVuc2libGU6ICQuaXNPYmplY3QgLy8gPC0gY2FwXHJcbn0pO1xyXG5cclxuLy8gMTkuMi4zLjIgLyAxNS4zLjQuNSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCh0aGlzQXJnLCBhcmdzLi4uKVxyXG4kZGVmKCRkZWYuUCwgJ0Z1bmN0aW9uJywge1xyXG4gIGJpbmQ6IGZ1bmN0aW9uKHRoYXQgLyosIGFyZ3MuLi4gKi8pe1xyXG4gICAgdmFyIGZuICAgICAgID0gYXNzZXJ0LmZuKHRoaXMpXHJcbiAgICAgICwgcGFydEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcbiAgICBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKXtcclxuICAgICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcclxuICAgICAgcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhpcyBpbnN0YW5jZW9mIGJvdW5kID8gJC5jcmVhdGUoZm4ucHJvdG90eXBlKSA6IHRoYXQpO1xyXG4gICAgfVxyXG4gICAgaWYoZm4ucHJvdG90eXBlKWJvdW5kLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcclxuICAgIHJldHVybiBib3VuZDtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gRml4IGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5nXHJcbmZ1bmN0aW9uIGFycmF5TWV0aG9kRml4KGZuKXtcclxuICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBmbi5hcHBseSgkLkVTNU9iamVjdCh0aGlzKSwgYXJndW1lbnRzKTtcclxuICB9O1xyXG59XHJcbmlmKCEoMCBpbiBPYmplY3QoJ3onKSAmJiAneidbMF0gPT0gJ3onKSl7XHJcbiAgJC5FUzVPYmplY3QgPSBmdW5jdGlvbihpdCl7XHJcbiAgICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XHJcbiAgfTtcclxufVxyXG4kZGVmKCRkZWYuUCArICRkZWYuRiAqICgkLkVTNU9iamVjdCAhPSBPYmplY3QpLCAnQXJyYXknLCB7XHJcbiAgc2xpY2U6IGFycmF5TWV0aG9kRml4KHNsaWNlKSxcclxuICBqb2luOiBhcnJheU1ldGhvZEZpeChBLmpvaW4pXHJcbn0pO1xyXG5cclxuLy8gMjIuMS4yLjIgLyAxNS40LjMuMiBBcnJheS5pc0FycmF5KGFyZylcclxuJGRlZigkZGVmLlMsICdBcnJheScsIHtcclxuICBpc0FycmF5OiBmdW5jdGlvbihhcmcpe1xyXG4gICAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XHJcbiAgfVxyXG59KTtcclxuZnVuY3Rpb24gY3JlYXRlQXJyYXlSZWR1Y2UoaXNSaWdodCl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGNhbGxiYWNrZm4sIG1lbW8pe1xyXG4gICAgYXNzZXJ0LmZuKGNhbGxiYWNrZm4pO1xyXG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KHRoaXMpXHJcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICwgaW5kZXggID0gaXNSaWdodCA/IGxlbmd0aCAtIDEgOiAwXHJcbiAgICAgICwgaSAgICAgID0gaXNSaWdodCA/IC0xIDogMTtcclxuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPCAyKWZvcig7Oyl7XHJcbiAgICAgIGlmKGluZGV4IGluIE8pe1xyXG4gICAgICAgIG1lbW8gPSBPW2luZGV4XTtcclxuICAgICAgICBpbmRleCArPSBpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGluZGV4ICs9IGk7XHJcbiAgICAgIGFzc2VydChpc1JpZ2h0ID8gaW5kZXggPj0gMCA6IGxlbmd0aCA+IGluZGV4LCAnUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xyXG4gICAgfVxyXG4gICAgZm9yKDtpc1JpZ2h0ID8gaW5kZXggPj0gMCA6IGxlbmd0aCA+IGluZGV4OyBpbmRleCArPSBpKWlmKGluZGV4IGluIE8pe1xyXG4gICAgICBtZW1vID0gY2FsbGJhY2tmbihtZW1vLCBPW2luZGV4XSwgaW5kZXgsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1lbW87XHJcbiAgfTtcclxufVxyXG4kZGVmKCRkZWYuUCwgJ0FycmF5Jywge1xyXG4gIC8vIDIyLjEuMy4xMCAvIDE1LjQuNC4xOCBBcnJheS5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxyXG4gIGZvckVhY2g6ICQuZWFjaCA9ICQuZWFjaCB8fCBhcnJheU1ldGhvZCgwKSxcclxuICAvLyAyMi4xLjMuMTUgLyAxNS40LjQuMTkgQXJyYXkucHJvdG90eXBlLm1hcChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxyXG4gIG1hcDogYXJyYXlNZXRob2QoMSksXHJcbiAgLy8gMjIuMS4zLjcgLyAxNS40LjQuMjAgQXJyYXkucHJvdG90eXBlLmZpbHRlcihjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxyXG4gIGZpbHRlcjogYXJyYXlNZXRob2QoMiksXHJcbiAgLy8gMjIuMS4zLjIzIC8gMTUuNC40LjE3IEFycmF5LnByb3RvdHlwZS5zb21lKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXHJcbiAgc29tZTogYXJyYXlNZXRob2QoMyksXHJcbiAgLy8gMjIuMS4zLjUgLyAxNS40LjQuMTYgQXJyYXkucHJvdG90eXBlLmV2ZXJ5KGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXHJcbiAgZXZlcnk6IGFycmF5TWV0aG9kKDQpLFxyXG4gIC8vIDIyLjEuMy4xOCAvIDE1LjQuNC4yMSBBcnJheS5wcm90b3R5cGUucmVkdWNlKGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcclxuICByZWR1Y2U6IGNyZWF0ZUFycmF5UmVkdWNlKGZhbHNlKSxcclxuICAvLyAyMi4xLjMuMTkgLyAxNS40LjQuMjIgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcclxuICByZWR1Y2VSaWdodDogY3JlYXRlQXJyYXlSZWR1Y2UodHJ1ZSksXHJcbiAgLy8gMjIuMS4zLjExIC8gMTUuNC40LjE0IEFycmF5LnByb3RvdHlwZS5pbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcclxuICBpbmRleE9mOiBpbmRleE9mID0gaW5kZXhPZiB8fCByZXF1aXJlKCcuLyQuYXJyYXktaW5jbHVkZXMnKShmYWxzZSksXHJcbiAgLy8gMjIuMS4zLjE0IC8gMTUuNC40LjE1IEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXHJcbiAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uKGVsLCBmcm9tSW5kZXggLyogPSBAWyotMV0gKi8pe1xyXG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KHRoaXMpXHJcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICwgaW5kZXggID0gbGVuZ3RoIC0gMTtcclxuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKWluZGV4ID0gTWF0aC5taW4oaW5kZXgsICQudG9JbnRlZ2VyKGZyb21JbmRleCkpO1xyXG4gICAgaWYoaW5kZXggPCAwKWluZGV4ID0gdG9MZW5ndGgobGVuZ3RoICsgaW5kZXgpO1xyXG4gICAgZm9yKDtpbmRleCA+PSAwOyBpbmRleC0tKWlmKGluZGV4IGluIE8paWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBpbmRleDtcclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gMjEuMS4zLjI1IC8gMTUuNS40LjIwIFN0cmluZy5wcm90b3R5cGUudHJpbSgpXHJcbiRkZWYoJGRlZi5QLCAnU3RyaW5nJywge3RyaW06IHJlcXVpcmUoJy4vJC5yZXBsYWNlcicpKC9eXFxzKihbXFxzXFxTXSpcXFMpP1xccyokLywgJyQxJyl9KTtcclxuXHJcbi8vIDIwLjMuMy4xIC8gMTUuOS40LjQgRGF0ZS5ub3coKVxyXG4kZGVmKCRkZWYuUywgJ0RhdGUnLCB7bm93OiBmdW5jdGlvbigpe1xyXG4gIHJldHVybiArbmV3IERhdGU7XHJcbn19KTtcclxuXHJcbmZ1bmN0aW9uIGx6KG51bSl7XHJcbiAgcmV0dXJuIG51bSA+IDkgPyBudW0gOiAnMCcgKyBudW07XHJcbn1cclxuLy8gMjAuMy40LjM2IC8gMTUuOS41LjQzIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKClcclxuJGRlZigkZGVmLlAsICdEYXRlJywge3RvSVNPU3RyaW5nOiBmdW5jdGlvbigpe1xyXG4gIGlmKCFpc0Zpbml0ZSh0aGlzKSl0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcclxuICB2YXIgZCA9IHRoaXNcclxuICAgICwgeSA9IGQuZ2V0VVRDRnVsbFllYXIoKVxyXG4gICAgLCBtID0gZC5nZXRVVENNaWxsaXNlY29uZHMoKVxyXG4gICAgLCBzID0geSA8IDAgPyAnLScgOiB5ID4gOTk5OSA/ICcrJyA6ICcnO1xyXG4gIHJldHVybiBzICsgKCcwMDAwMCcgKyBNYXRoLmFicyh5KSkuc2xpY2UocyA/IC02IDogLTQpICtcclxuICAgICctJyArIGx6KGQuZ2V0VVRDTW9udGgoKSArIDEpICsgJy0nICsgbHooZC5nZXRVVENEYXRlKCkpICtcclxuICAgICdUJyArIGx6KGQuZ2V0VVRDSG91cnMoKSkgKyAnOicgKyBseihkLmdldFVUQ01pbnV0ZXMoKSkgK1xyXG4gICAgJzonICsgbHooZC5nZXRVVENTZWNvbmRzKCkpICsgJy4nICsgKG0gPiA5OSA/IG0gOiAnMCcgKyBseihtKSkgKyAnWic7XHJcbn19KTtcclxuXHJcbmlmKGNsYXNzb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnT2JqZWN0Jyljb2YuY2xhc3NvZiA9IGZ1bmN0aW9uKGl0KXtcclxuICB2YXIgdGFnID0gY2xhc3NvZihpdCk7XHJcbiAgcmV0dXJuIHRhZyA9PSAnT2JqZWN0JyAmJiBpc0Z1bmN0aW9uKGl0LmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHRhZztcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsICRkZWYgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIHRvSW5kZXggPSAkLnRvSW5kZXg7XHJcbiRkZWYoJGRlZi5QLCAnQXJyYXknLCB7XHJcbiAgLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXHJcbiAgY29weVdpdGhpbjogZnVuY3Rpb24odGFyZ2V0LyogPSAwICovLCBzdGFydCAvKiA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xyXG4gICAgdmFyIE8gICAgID0gT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgLCBsZW4gICA9ICQudG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICwgdG8gICAgPSB0b0luZGV4KHRhcmdldCwgbGVuKVxyXG4gICAgICAsIGZyb20gID0gdG9JbmRleChzdGFydCwgbGVuKVxyXG4gICAgICAsIGVuZCAgID0gYXJndW1lbnRzWzJdXHJcbiAgICAgICwgZmluICAgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvSW5kZXgoZW5kLCBsZW4pXHJcbiAgICAgICwgY291bnQgPSBNYXRoLm1pbihmaW4gLSBmcm9tLCBsZW4gLSB0bylcclxuICAgICAgLCBpbmMgICA9IDE7XHJcbiAgICBpZihmcm9tIDwgdG8gJiYgdG8gPCBmcm9tICsgY291bnQpe1xyXG4gICAgICBpbmMgID0gLTE7XHJcbiAgICAgIGZyb20gPSBmcm9tICsgY291bnQgLSAxO1xyXG4gICAgICB0byAgID0gdG8gICArIGNvdW50IC0gMTtcclxuICAgIH1cclxuICAgIHdoaWxlKGNvdW50LS0gPiAwKXtcclxuICAgICAgaWYoZnJvbSBpbiBPKU9bdG9dID0gT1tmcm9tXTtcclxuICAgICAgZWxzZSBkZWxldGUgT1t0b107XHJcbiAgICAgIHRvICAgKz0gaW5jO1xyXG4gICAgICBmcm9tICs9IGluYztcclxuICAgIH0gcmV0dXJuIE87XHJcbiAgfVxyXG59KTtcclxucmVxdWlyZSgnLi8kLnVuc2NvcGUnKSgnY29weVdpdGhpbicpOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgJGRlZiAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgdG9JbmRleCA9ICQudG9JbmRleDtcclxuJGRlZigkZGVmLlAsICdBcnJheScsIHtcclxuICAvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcclxuICBmaWxsOiBmdW5jdGlvbih2YWx1ZSAvKiwgc3RhcnQgPSAwLCBlbmQgPSBAbGVuZ3RoICovKXtcclxuICAgIHZhciBPICAgICAgPSBPYmplY3QoJC5hc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAsIGxlbmd0aCA9ICQudG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChhcmd1bWVudHNbMV0sIGxlbmd0aClcclxuICAgICAgLCBlbmQgICAgPSBhcmd1bWVudHNbMl1cclxuICAgICAgLCBlbmRQb3MgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvSW5kZXgoZW5kLCBsZW5ndGgpO1xyXG4gICAgd2hpbGUoZW5kUG9zID4gaW5kZXgpT1tpbmRleCsrXSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIE87XHJcbiAgfVxyXG59KTtcclxucmVxdWlyZSgnLi8kLnVuc2NvcGUnKSgnZmlsbCcpOyIsInZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG4kZGVmKCRkZWYuUCwgJ0FycmF5Jywge1xyXG4gIC8vIDIyLjEuMy45IEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gIGZpbmRJbmRleDogcmVxdWlyZSgnLi8kLmFycmF5LW1ldGhvZHMnKSg2KVxyXG59KTtcclxucmVxdWlyZSgnLi8kLnVuc2NvcGUnKSgnZmluZEluZGV4Jyk7IiwidmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcbiRkZWYoJGRlZi5QLCAnQXJyYXknLCB7XHJcbiAgLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gIGZpbmQ6IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJykoNSlcclxufSk7XHJcbnJlcXVpcmUoJy4vJC51bnNjb3BlJykoJ2ZpbmQnKTsiLCJ2YXIgJCAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY3R4ICAgPSByZXF1aXJlKCcuLyQuY3R4JylcclxuICAsICRkZWYgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCAkaXRlciA9IHJlcXVpcmUoJy4vJC5pdGVyJylcclxuICAsIHN0ZXBDYWxsID0gJGl0ZXIuc3RlcENhbGw7XHJcbiRkZWYoJGRlZi5TICsgJGRlZi5GICogJGl0ZXIuREFOR0VSX0NMT1NJTkcsICdBcnJheScsIHtcclxuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXHJcbiAgZnJvbTogZnVuY3Rpb24oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xyXG4gICAgdmFyIE8gICAgICAgPSBPYmplY3QoJC5hc3NlcnREZWZpbmVkKGFycmF5TGlrZSkpXHJcbiAgICAgICwgbWFwZm4gICA9IGFyZ3VtZW50c1sxXVxyXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICwgZiAgICAgICA9IG1hcHBpbmcgPyBjdHgobWFwZm4sIGFyZ3VtZW50c1syXSwgMikgOiB1bmRlZmluZWRcclxuICAgICAgLCBpbmRleCAgID0gMFxyXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcclxuICAgIGlmKCRpdGVyLmlzKE8pKXtcclxuICAgICAgaXRlcmF0b3IgPSAkaXRlci5nZXQoTyk7XHJcbiAgICAgIC8vIHN0cmFuZ2UgSUUgcXVpcmtzIG1vZGUgYnVnIC0+IHVzZSB0eXBlb2YgaW5zdGVhZCBvZiBpc0Z1bmN0aW9uXHJcbiAgICAgIHJlc3VsdCAgID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KTtcclxuICAgICAgZm9yKDsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcclxuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IHN0ZXBDYWxsKGl0ZXJhdG9yLCBmLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHN0cmFuZ2UgSUUgcXVpcmtzIG1vZGUgYnVnIC0+IHVzZSB0eXBlb2YgaW5zdGVhZCBvZiBpc0Z1bmN0aW9uXHJcbiAgICAgIHJlc3VsdCA9IG5ldyAodHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheSkobGVuZ3RoID0gJC50b0xlbmd0aChPLmxlbmd0aCkpO1xyXG4gICAgICBmb3IoOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XHJcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBmKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn0pOyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIHNldFVuc2NvcGUgPSByZXF1aXJlKCcuLyQudW5zY29wZScpXHJcbiAgLCBJVEVSICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmUoJ2l0ZXInKVxyXG4gICwgJGl0ZXIgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyJylcclxuICAsIHN0ZXAgICAgICAgPSAkaXRlci5zdGVwXHJcbiAgLCBJdGVyYXRvcnMgID0gJGl0ZXIuSXRlcmF0b3JzO1xyXG5cclxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxyXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxyXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXHJcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxyXG4kaXRlci5zdGQoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcclxuICAkLnNldCh0aGlzLCBJVEVSLCB7bzogJC50b09iamVjdChpdGVyYXRlZCksIGk6IDAsIGs6IGtpbmR9KTtcclxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXHJcbn0sIGZ1bmN0aW9uKCl7XHJcbiAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxyXG4gICAgLCBPICAgICA9IGl0ZXIub1xyXG4gICAgLCBraW5kICA9IGl0ZXIua1xyXG4gICAgLCBpbmRleCA9IGl0ZXIuaSsrO1xyXG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcclxuICAgIGl0ZXIubyA9IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiBzdGVwKDEpO1xyXG4gIH1cclxuICBpZihraW5kID09ICdrZXknICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xyXG4gIGlmKGtpbmQgPT0gJ3ZhbHVlJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XHJcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xyXG59LCAndmFsdWUnKTtcclxuXHJcbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcclxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcclxuXHJcbnNldFVuc2NvcGUoJ2tleXMnKTtcclxuc2V0VW5zY29wZSgndmFsdWVzJyk7XHJcbnNldFVuc2NvcGUoJ2VudHJpZXMnKTsiLCJ2YXIgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcclxuJGRlZigkZGVmLlMsICdBcnJheScsIHtcclxuICAvLyAyMi4xLjIuMyBBcnJheS5vZiggLi4uaXRlbXMpXHJcbiAgb2Y6IGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xyXG4gICAgdmFyIGluZGV4ICA9IDBcclxuICAgICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgIC8vIHN0cmFuZ2UgSUUgcXVpcmtzIG1vZGUgYnVnIC0+IHVzZSB0eXBlb2YgaW5zdGVhZCBvZiBpc0Z1bmN0aW9uXHJcbiAgICAgICwgcmVzdWx0ID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KShsZW5ndGgpO1xyXG4gICAgd2hpbGUobGVuZ3RoID4gaW5kZXgpcmVzdWx0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCsrXTtcclxuICAgIHJlc3VsdC5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufSk7IiwicmVxdWlyZSgnLi8kLnNwZWNpZXMnKShBcnJheSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBOQU1FID0gJ25hbWUnXHJcbiAgLCBzZXREZXNjID0gJC5zZXREZXNjXHJcbiAgLCBGdW5jdGlvblByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4vLyAxOS4yLjQuMiBuYW1lXHJcbk5BTUUgaW4gRnVuY3Rpb25Qcm90byB8fCAkLkZXICYmICQuREVTQyAmJiBzZXREZXNjKEZ1bmN0aW9uUHJvdG8sIE5BTUUsIHtcclxuICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgZ2V0OiBmdW5jdGlvbigpe1xyXG4gICAgdmFyIG1hdGNoID0gU3RyaW5nKHRoaXMpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLylcclxuICAgICAgLCBuYW1lICA9IG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcclxuICAgICQuaGFzKHRoaXMsIE5BTUUpIHx8IHNldERlc2ModGhpcywgTkFNRSwgJC5kZXNjKDUsIG5hbWUpKTtcclxuICAgIHJldHVybiBuYW1lO1xyXG4gIH0sXHJcbiAgc2V0OiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAkLmhhcyh0aGlzLCBOQU1FKSB8fCBzZXREZXNjKHRoaXMsIE5BTUUsICQuZGVzYygwLCB2YWx1ZSkpO1xyXG4gIH1cclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tc3Ryb25nJyk7XHJcblxyXG4vLyAyMy4xIE1hcCBPYmplY3RzXHJcbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uJykoJ01hcCcsIHtcclxuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXHJcbiAgZ2V0OiBmdW5jdGlvbihrZXkpe1xyXG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XHJcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcclxuICB9LFxyXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXHJcbiAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcclxuICB9XHJcbn0sIHN0cm9uZywgdHJ1ZSk7IiwidmFyIEluZmluaXR5ID0gMSAvIDBcclxuICAsICRkZWYgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCBFICAgICA9IE1hdGguRVxyXG4gICwgcG93ICAgPSBNYXRoLnBvd1xyXG4gICwgYWJzICAgPSBNYXRoLmFic1xyXG4gICwgZXhwICAgPSBNYXRoLmV4cFxyXG4gICwgbG9nICAgPSBNYXRoLmxvZ1xyXG4gICwgc3FydCAgPSBNYXRoLnNxcnRcclxuICAsIGNlaWwgID0gTWF0aC5jZWlsXHJcbiAgLCBmbG9vciA9IE1hdGguZmxvb3JcclxuICAsIHNpZ24gID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gKHggPSAreCkgPT0gMCB8fCB4ICE9IHggPyB4IDogeCA8IDAgPyAtMSA6IDE7XHJcbiAgICB9O1xyXG5cclxuLy8gMjAuMi4yLjUgTWF0aC5hc2luaCh4KVxyXG5mdW5jdGlvbiBhc2luaCh4KXtcclxuICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IGxvZyh4ICsgc3FydCh4ICogeCArIDEpKTtcclxufVxyXG4vLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxyXG5mdW5jdGlvbiBleHBtMSh4KXtcclxuICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiB4ID4gLTFlLTYgJiYgeCA8IDFlLTYgPyB4ICsgeCAqIHggLyAyIDogZXhwKHgpIC0gMTtcclxufVxyXG5cclxuJGRlZigkZGVmLlMsICdNYXRoJywge1xyXG4gIC8vIDIwLjIuMi4zIE1hdGguYWNvc2goeClcclxuICBhY29zaDogZnVuY3Rpb24oeCl7XHJcbiAgICByZXR1cm4gKHggPSAreCkgPCAxID8gTmFOIDogaXNGaW5pdGUoeCkgPyBsb2coeCAvIEUgKyBzcXJ0KHggKyAxKSAqIHNxcnQoeCAtIDEpIC8gRSkgKyAxIDogeDtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcclxuICBhc2luaDogYXNpbmgsXHJcbiAgLy8gMjAuMi4yLjcgTWF0aC5hdGFuaCh4KVxyXG4gIGF0YW5oOiBmdW5jdGlvbih4KXtcclxuICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IGxvZygoMSArIHgpIC8gKDEgLSB4KSkgLyAyO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjkgTWF0aC5jYnJ0KHgpXHJcbiAgY2JydDogZnVuY3Rpb24oeCl7XHJcbiAgICByZXR1cm4gc2lnbih4ID0gK3gpICogcG93KGFicyh4KSwgMSAvIDMpO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjExIE1hdGguY2x6MzIoeClcclxuICBjbHozMjogZnVuY3Rpb24oeCl7XHJcbiAgICByZXR1cm4gKHggPj4+PSAwKSA/IDMyIC0geC50b1N0cmluZygyKS5sZW5ndGggOiAzMjtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4xMiBNYXRoLmNvc2goeClcclxuICBjb3NoOiBmdW5jdGlvbih4KXtcclxuICAgIHJldHVybiAoZXhwKHggPSAreCkgKyBleHAoLXgpKSAvIDI7XHJcbiAgfSxcclxuICAvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxyXG4gIGV4cG0xOiBleHBtMSxcclxuICAvLyAyMC4yLjIuMTYgTWF0aC5mcm91bmQoeClcclxuICAvLyBUT0RPOiBmYWxsYmFjayBmb3IgSUU5LVxyXG4gIGZyb3VuZDogZnVuY3Rpb24oeCl7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbeF0pWzBdO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjE3IE1hdGguaHlwb3QoW3ZhbHVlMVssIHZhbHVlMlssIOKApiBdXV0pXHJcbiAgaHlwb3Q6IGZ1bmN0aW9uKHZhbHVlMSwgdmFsdWUyKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gICAgdmFyIHN1bSAgPSAwXHJcbiAgICAgICwgbGVuMSA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICAgLCBsZW4yID0gbGVuMVxyXG4gICAgICAsIGFyZ3MgPSBBcnJheShsZW4xKVxyXG4gICAgICAsIGxhcmcgPSAtSW5maW5pdHlcclxuICAgICAgLCBhcmc7XHJcbiAgICB3aGlsZShsZW4xLS0pe1xyXG4gICAgICBhcmcgPSBhcmdzW2xlbjFdID0gK2FyZ3VtZW50c1tsZW4xXTtcclxuICAgICAgaWYoYXJnID09IEluZmluaXR5IHx8IGFyZyA9PSAtSW5maW5pdHkpcmV0dXJuIEluZmluaXR5O1xyXG4gICAgICBpZihhcmcgPiBsYXJnKWxhcmcgPSBhcmc7XHJcbiAgICB9XHJcbiAgICBsYXJnID0gYXJnIHx8IDE7XHJcbiAgICB3aGlsZShsZW4yLS0pc3VtICs9IHBvdyhhcmdzW2xlbjJdIC8gbGFyZywgMik7XHJcbiAgICByZXR1cm4gbGFyZyAqIHNxcnQoc3VtKTtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4xOCBNYXRoLmltdWwoeCwgeSlcclxuICBpbXVsOiBmdW5jdGlvbih4LCB5KXtcclxuICAgIHZhciBVSW50MTYgPSAweGZmZmZcclxuICAgICAgLCB4biA9ICt4XHJcbiAgICAgICwgeW4gPSAreVxyXG4gICAgICAsIHhsID0gVUludDE2ICYgeG5cclxuICAgICAgLCB5bCA9IFVJbnQxNiAmIHluO1xyXG4gICAgcmV0dXJuIDAgfCB4bCAqIHlsICsgKChVSW50MTYgJiB4biA+Pj4gMTYpICogeWwgKyB4bCAqIChVSW50MTYgJiB5biA+Pj4gMTYpIDw8IDE2ID4+PiAwKTtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXHJcbiAgbG9nMXA6IGZ1bmN0aW9uKHgpe1xyXG4gICAgcmV0dXJuICh4ID0gK3gpID4gLTFlLTggJiYgeCA8IDFlLTggPyB4IC0geCAqIHggLyAyIDogbG9nKDEgKyB4KTtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4yMSBNYXRoLmxvZzEwKHgpXHJcbiAgbG9nMTA6IGZ1bmN0aW9uKHgpe1xyXG4gICAgcmV0dXJuIGxvZyh4KSAvIE1hdGguTE4xMDtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4yMiBNYXRoLmxvZzIoeClcclxuICBsb2cyOiBmdW5jdGlvbih4KXtcclxuICAgIHJldHVybiBsb2coeCkgLyBNYXRoLkxOMjtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcclxuICBzaWduOiBzaWduLFxyXG4gIC8vIDIwLjIuMi4zMCBNYXRoLnNpbmgoeClcclxuICBzaW5oOiBmdW5jdGlvbih4KXtcclxuICAgIHJldHVybiBhYnMoeCA9ICt4KSA8IDEgPyAoZXhwbTEoeCkgLSBleHBtMSgteCkpIC8gMiA6IChleHAoeCAtIDEpIC0gZXhwKC14IC0gMSkpICogKEUgLyAyKTtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4zMyBNYXRoLnRhbmgoeClcclxuICB0YW5oOiBmdW5jdGlvbih4KXtcclxuICAgIHZhciBhID0gZXhwbTEoeCA9ICt4KVxyXG4gICAgICAsIGIgPSBleHBtMSgteCk7XHJcbiAgICByZXR1cm4gYSA9PSBJbmZpbml0eSA/IDEgOiBiID09IEluZmluaXR5ID8gLTEgOiAoYSAtIGIpIC8gKGV4cCh4KSArIGV4cCgteCkpO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjM0IE1hdGgudHJ1bmMoeClcclxuICB0cnVuYzogZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuIChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcclxuICB9XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgaXNPYmplY3QgICA9ICQuaXNPYmplY3RcclxuICAsIGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb25cclxuICAsIE5VTUJFUiAgICAgPSAnTnVtYmVyJ1xyXG4gICwgTnVtYmVyICAgICA9ICQuZ1tOVU1CRVJdXHJcbiAgLCBCYXNlICAgICAgID0gTnVtYmVyXHJcbiAgLCBwcm90byAgICAgID0gTnVtYmVyLnByb3RvdHlwZTtcclxuZnVuY3Rpb24gdG9QcmltaXRpdmUoaXQpe1xyXG4gIHZhciBmbiwgdmFsO1xyXG4gIGlmKGlzRnVuY3Rpb24oZm4gPSBpdC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XHJcbiAgaWYoaXNGdW5jdGlvbihmbiA9IGl0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XHJcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gbnVtYmVyXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHRvTnVtYmVyKGl0KXtcclxuICBpZihpc09iamVjdChpdCkpaXQgPSB0b1ByaW1pdGl2ZShpdCk7XHJcbiAgaWYodHlwZW9mIGl0ID09ICdzdHJpbmcnICYmIGl0Lmxlbmd0aCA+IDIgJiYgaXQuY2hhckNvZGVBdCgwKSA9PSA0OCl7XHJcbiAgICB2YXIgYmluYXJ5ID0gZmFsc2U7XHJcbiAgICBzd2l0Y2goaXQuY2hhckNvZGVBdCgxKSl7XHJcbiAgICAgIGNhc2UgNjYgOiBjYXNlIDk4ICA6IGJpbmFyeSA9IHRydWU7XHJcbiAgICAgIGNhc2UgNzkgOiBjYXNlIDExMSA6IHJldHVybiBwYXJzZUludChpdC5zbGljZSgyKSwgYmluYXJ5ID8gMiA6IDgpO1xyXG4gICAgfVxyXG4gIH0gcmV0dXJuICtpdDtcclxufVxyXG5pZigkLkZXICYmICEoTnVtYmVyKCcwbzEnKSAmJiBOdW1iZXIoJzBiMScpKSl7XHJcbiAgTnVtYmVyID0gZnVuY3Rpb24gTnVtYmVyKGl0KXtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgTnVtYmVyID8gbmV3IEJhc2UodG9OdW1iZXIoaXQpKSA6IHRvTnVtYmVyKGl0KTtcclxuICB9O1xyXG4gICQuZWFjaC5jYWxsKCQuREVTQyA/ICQuZ2V0TmFtZXMoQmFzZSkgOiAoXHJcbiAgICAgIC8vIEVTMzpcclxuICAgICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xyXG4gICAgICAvLyBFUzYgKGluIGNhc2UsIGlmIG1vZHVsZXMgd2l0aCBFUzYgTnVtYmVyIHN0YXRpY3MgcmVxdWlyZWQgYmVmb3JlKTpcclxuICAgICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcclxuICAgICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXHJcbiAgICApLnNwbGl0KCcsJyksIGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGlmKCQuaGFzKEJhc2UsIGtleSkgJiYgISQuaGFzKE51bWJlciwga2V5KSl7XHJcbiAgICAgICAgJC5zZXREZXNjKE51bWJlciwga2V5LCAkLmdldERlc2MoQmFzZSwga2V5KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApO1xyXG4gIE51bWJlci5wcm90b3R5cGUgPSBwcm90bztcclxuICBwcm90by5jb25zdHJ1Y3RvciA9IE51bWJlcjtcclxuICAkLmhpZGUoJC5nLCBOVU1CRVIsIE51bWJlcik7XHJcbn0iLCJ2YXIgJCAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgJGRlZiAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIGFicyAgID0gTWF0aC5hYnNcclxuICAsIGZsb29yID0gTWF0aC5mbG9vclxyXG4gICwgTUFYX1NBRkVfSU5URUdFUiA9IDB4MWZmZmZmZmZmZmZmZmY7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTE7XHJcbmZ1bmN0aW9uIGlzSW50ZWdlcihpdCl7XHJcbiAgcmV0dXJuICEkLmlzT2JqZWN0KGl0KSAmJiBpc0Zpbml0ZShpdCkgJiYgZmxvb3IoaXQpID09PSBpdDtcclxufVxyXG4kZGVmKCRkZWYuUywgJ051bWJlcicsIHtcclxuICAvLyAyMC4xLjIuMSBOdW1iZXIuRVBTSUxPTlxyXG4gIEVQU0lMT046IE1hdGgucG93KDIsIC01MiksXHJcbiAgLy8gMjAuMS4yLjIgTnVtYmVyLmlzRmluaXRlKG51bWJlcilcclxuICBpc0Zpbml0ZTogZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShpdCk7XHJcbiAgfSxcclxuICAvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcclxuICBpc0ludGVnZXI6IGlzSW50ZWdlcixcclxuICAvLyAyMC4xLjIuNCBOdW1iZXIuaXNOYU4obnVtYmVyKVxyXG4gIGlzTmFOOiBmdW5jdGlvbihudW1iZXIpe1xyXG4gICAgcmV0dXJuIG51bWJlciAhPSBudW1iZXI7XHJcbiAgfSxcclxuICAvLyAyMC4xLjIuNSBOdW1iZXIuaXNTYWZlSW50ZWdlcihudW1iZXIpXHJcbiAgaXNTYWZlSW50ZWdlcjogZnVuY3Rpb24obnVtYmVyKXtcclxuICAgIHJldHVybiBpc0ludGVnZXIobnVtYmVyKSAmJiBhYnMobnVtYmVyKSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xyXG4gIH0sXHJcbiAgLy8gMjAuMS4yLjYgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcclxuICBNQVhfU0FGRV9JTlRFR0VSOiBNQVhfU0FGRV9JTlRFR0VSLFxyXG4gIC8vIDIwLjEuMi4xMCBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUlxyXG4gIE1JTl9TQUZFX0lOVEVHRVI6IC1NQVhfU0FGRV9JTlRFR0VSLFxyXG4gIC8vIDIwLjEuMi4xMiBOdW1iZXIucGFyc2VGbG9hdChzdHJpbmcpXHJcbiAgcGFyc2VGbG9hdDogcGFyc2VGbG9hdCxcclxuICAvLyAyMC4xLjIuMTMgTnVtYmVyLnBhcnNlSW50KHN0cmluZywgcmFkaXgpXHJcbiAgcGFyc2VJbnQ6IHBhcnNlSW50XHJcbn0pOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vJC5hc3NpZ24nKX0pOyIsIi8vIDE5LjEuMy4xMCBPYmplY3QuaXModmFsdWUxLCB2YWx1ZTIpXHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHtcclxuICBpczogZnVuY3Rpb24oeCwgeSl7XHJcbiAgICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcclxuICB9XHJcbn0pOyIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi8kLnNldC1wcm90bycpfSk7IiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsICRkZWYgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCBpc09iamVjdCA9ICQuaXNPYmplY3RcclxuICAsIHRvT2JqZWN0ID0gJC50b09iamVjdDtcclxuZnVuY3Rpb24gd3JhcE9iamVjdE1ldGhvZChNRVRIT0QsIE1PREUpe1xyXG4gIHZhciBmbiAgPSAoJC5jb3JlLk9iamVjdCB8fCB7fSlbTUVUSE9EXSB8fCBPYmplY3RbTUVUSE9EXVxyXG4gICAgLCBmICAgPSAwXHJcbiAgICAsIG8gICA9IHt9O1xyXG4gIG9bTUVUSE9EXSA9IE1PREUgPT0gMSA/IGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcclxuICB9IDogTU9ERSA9PSAyID8gZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XHJcbiAgfSA6IE1PREUgPT0gMyA/IGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBmYWxzZTtcclxuICB9IDogTU9ERSA9PSA0ID8gZnVuY3Rpb24oaXQsIGtleSl7XHJcbiAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpLCBrZXkpO1xyXG4gIH0gOiBNT0RFID09IDUgPyBmdW5jdGlvbihpdCl7XHJcbiAgICByZXR1cm4gZm4oT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZChpdCkpKTtcclxuICB9IDogZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSk7XHJcbiAgfTtcclxuICB0cnkge1xyXG4gICAgZm4oJ3onKTtcclxuICB9IGNhdGNoKGUpe1xyXG4gICAgZiA9IDE7XHJcbiAgfVxyXG4gICRkZWYoJGRlZi5TICsgJGRlZi5GICogZiwgJ09iamVjdCcsIG8pO1xyXG59XHJcbndyYXBPYmplY3RNZXRob2QoJ2ZyZWV6ZScsIDEpO1xyXG53cmFwT2JqZWN0TWV0aG9kKCdzZWFsJywgMSk7XHJcbndyYXBPYmplY3RNZXRob2QoJ3ByZXZlbnRFeHRlbnNpb25zJywgMSk7XHJcbndyYXBPYmplY3RNZXRob2QoJ2lzRnJvemVuJywgMik7XHJcbndyYXBPYmplY3RNZXRob2QoJ2lzU2VhbGVkJywgMik7XHJcbndyYXBPYmplY3RNZXRob2QoJ2lzRXh0ZW5zaWJsZScsIDMpO1xyXG53cmFwT2JqZWN0TWV0aG9kKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCA0KTtcclxud3JhcE9iamVjdE1ldGhvZCgnZ2V0UHJvdG90eXBlT2YnLCA1KTtcclxud3JhcE9iamVjdE1ldGhvZCgna2V5cycpO1xyXG53cmFwT2JqZWN0TWV0aG9kKCdnZXRPd25Qcm9wZXJ0eU5hbWVzJyk7IiwiJ3VzZSBzdHJpY3QnO1xyXG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcclxudmFyICQgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjb2YgPSByZXF1aXJlKCcuLyQuY29mJylcclxuICAsIHRtcCA9IHt9O1xyXG50bXBbcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcclxuaWYoJC5GVyAmJiBjb2YodG1wKSAhPSAneicpJC5oaWRlKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuICdbb2JqZWN0ICcgKyBjb2YuY2xhc3NvZih0aGlzKSArICddJztcclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjdHggICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXHJcbiAgLCBjb2YgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXHJcbiAgLCAkZGVmICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCBhc3NlcnQgID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpXHJcbiAgLCAkaXRlciAgID0gcmVxdWlyZSgnLi8kLml0ZXInKVxyXG4gICwgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpXHJcbiAgLCBSRUNPUkQgID0gcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmUoJ3JlY29yZCcpXHJcbiAgLCBmb3JPZiAgID0gJGl0ZXIuZm9yT2ZcclxuICAsIFBST01JU0UgPSAnUHJvbWlzZSdcclxuICAsIGdsb2JhbCAgPSAkLmdcclxuICAsIHByb2Nlc3MgPSBnbG9iYWwucHJvY2Vzc1xyXG4gICwgYXNhcCAgICA9IHByb2Nlc3MgJiYgcHJvY2Vzcy5uZXh0VGljayB8fCByZXF1aXJlKCcuLyQudGFzaycpLnNldFxyXG4gICwgUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXVxyXG4gICwgQmFzZSAgICA9IFByb21pc2VcclxuICAsIGlzRnVuY3Rpb24gICAgID0gJC5pc0Z1bmN0aW9uXHJcbiAgLCBpc09iamVjdCAgICAgICA9ICQuaXNPYmplY3RcclxuICAsIGFzc2VydEZ1bmN0aW9uID0gYXNzZXJ0LmZuXHJcbiAgLCBhc3NlcnRPYmplY3QgICA9IGFzc2VydC5vYmpcclxuICAsIHRlc3Q7XHJcbmZ1bmN0aW9uIGdldENvbnN0cnVjdG9yKEMpe1xyXG4gIHZhciBTID0gYXNzZXJ0T2JqZWN0KEMpW1NQRUNJRVNdO1xyXG4gIHJldHVybiBTICE9IHVuZGVmaW5lZCA/IFMgOiBDO1xyXG59XHJcbmlzRnVuY3Rpb24oUHJvbWlzZSkgJiYgaXNGdW5jdGlvbihQcm9taXNlLnJlc29sdmUpXHJcbiYmIFByb21pc2UucmVzb2x2ZSh0ZXN0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24oKXt9KSkgPT0gdGVzdFxyXG58fCBmdW5jdGlvbigpe1xyXG4gIGZ1bmN0aW9uIGlzVGhlbmFibGUoaXQpe1xyXG4gICAgdmFyIHRoZW47XHJcbiAgICBpZihpc09iamVjdChpdCkpdGhlbiA9IGl0LnRoZW47XHJcbiAgICByZXR1cm4gaXNGdW5jdGlvbih0aGVuKSA/IHRoZW4gOiBmYWxzZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChwcm9taXNlKXtcclxuICAgIHZhciByZWNvcmQgPSBwcm9taXNlW1JFQ09SRF1cclxuICAgICAgLCBjaGFpbiAgPSByZWNvcmQuY1xyXG4gICAgICAsIGkgICAgICA9IDBcclxuICAgICAgLCByZWFjdDtcclxuICAgIGlmKHJlY29yZC5oKXJldHVybiB0cnVlO1xyXG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XHJcbiAgICAgIHJlYWN0ID0gY2hhaW5baSsrXTtcclxuICAgICAgaWYocmVhY3QuZmFpbCB8fCBoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHJlYWN0LlApKXJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBub3RpZnkocmVjb3JkLCBpc1JlamVjdCl7XHJcbiAgICB2YXIgY2hhaW4gPSByZWNvcmQuYztcclxuICAgIGlmKGlzUmVqZWN0IHx8IGNoYWluLmxlbmd0aClhc2FwKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBwcm9taXNlID0gcmVjb3JkLnBcclxuICAgICAgICAsIHZhbHVlICAgPSByZWNvcmQudlxyXG4gICAgICAgICwgb2sgICAgICA9IHJlY29yZC5zID09IDFcclxuICAgICAgICAsIGkgICAgICAgPSAwO1xyXG4gICAgICBpZihpc1JlamVjdCAmJiAhaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChwcm9taXNlKSl7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgaWYoIWhhbmRsZWRSZWplY3Rpb25Pckhhc09uUmVqZWN0ZWQocHJvbWlzZSkpe1xyXG4gICAgICAgICAgICBpZihjb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcclxuICAgICAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGdsb2JhbC5jb25zb2xlICYmIGlzRnVuY3Rpb24oY29uc29sZS5lcnJvcikpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDFlMyk7XHJcbiAgICAgIH0gZWxzZSB3aGlsZShjaGFpbi5sZW5ndGggPiBpKSFmdW5jdGlvbihyZWFjdCl7XHJcbiAgICAgICAgdmFyIGNiID0gb2sgPyByZWFjdC5vayA6IHJlYWN0LmZhaWxcclxuICAgICAgICAgICwgcmV0LCB0aGVuO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZihjYil7XHJcbiAgICAgICAgICAgIGlmKCFvaylyZWNvcmQuaCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldCA9IGNiID09PSB0cnVlID8gdmFsdWUgOiBjYih2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmKHJldCA9PT0gcmVhY3QuUCl7XHJcbiAgICAgICAgICAgICAgcmVhY3QucmVqKFR5cGVFcnJvcihQUk9NSVNFICsgJy1jaGFpbiBjeWNsZScpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJldCkpe1xyXG4gICAgICAgICAgICAgIHRoZW4uY2FsbChyZXQsIHJlYWN0LnJlcywgcmVhY3QucmVqKTtcclxuICAgICAgICAgICAgfSBlbHNlIHJlYWN0LnJlcyhyZXQpO1xyXG4gICAgICAgICAgfSBlbHNlIHJlYWN0LnJlaih2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgcmVhY3QucmVqKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KGNoYWluW2krK10pO1xyXG4gICAgICBjaGFpbi5sZW5ndGggPSAwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSl7XHJcbiAgICB2YXIgcmVjb3JkID0gdGhpcztcclxuICAgIGlmKHJlY29yZC5kKXJldHVybjtcclxuICAgIHJlY29yZC5kID0gdHJ1ZTtcclxuICAgIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXHJcbiAgICByZWNvcmQudiA9IHZhbHVlO1xyXG4gICAgcmVjb3JkLnMgPSAyO1xyXG4gICAgbm90aWZ5KHJlY29yZCwgdHJ1ZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpe1xyXG4gICAgdmFyIHJlY29yZCA9IHRoaXNcclxuICAgICAgLCB0aGVuLCB3cmFwcGVyO1xyXG4gICAgaWYocmVjb3JkLmQpcmV0dXJuO1xyXG4gICAgcmVjb3JkLmQgPSB0cnVlO1xyXG4gICAgcmVjb3JkID0gcmVjb3JkLnIgfHwgcmVjb3JkOyAvLyB1bndyYXBcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XHJcbiAgICAgICAgd3JhcHBlciA9IHtyOiByZWNvcmQsIGQ6IGZhbHNlfTsgLy8gd3JhcFxyXG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgocmVqZWN0LCB3cmFwcGVyLCAxKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVjb3JkLnYgPSB2YWx1ZTtcclxuICAgICAgICByZWNvcmQucyA9IDE7XHJcbiAgICAgICAgbm90aWZ5KHJlY29yZCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgcmVqZWN0LmNhbGwod3JhcHBlciB8fCB7cjogcmVjb3JkLCBkOiBmYWxzZX0sIGVycik7IC8vIHdyYXBcclxuICAgIH1cclxuICB9XHJcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcclxuICBQcm9taXNlID0gZnVuY3Rpb24oZXhlY3V0b3Ipe1xyXG4gICAgYXNzZXJ0RnVuY3Rpb24oZXhlY3V0b3IpO1xyXG4gICAgdmFyIHJlY29yZCA9IHtcclxuICAgICAgcDogYXNzZXJ0Lmluc3QodGhpcywgUHJvbWlzZSwgUFJPTUlTRSksIC8vIDwtIHByb21pc2VcclxuICAgICAgYzogW10sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGNoYWluXHJcbiAgICAgIHM6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxyXG4gICAgICBkOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gZG9uZVxyXG4gICAgICB2OiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcclxuICAgICAgaDogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGhhbmRsZWQgcmVqZWN0aW9uXHJcbiAgICB9O1xyXG4gICAgJC5oaWRlKHRoaXMsIFJFQ09SRCwgcmVjb3JkKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGV4ZWN1dG9yKGN0eChyZXNvbHZlLCByZWNvcmQsIDEpLCBjdHgocmVqZWN0LCByZWNvcmQsIDEpKTtcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgcmVqZWN0LmNhbGwocmVjb3JkLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgJC5taXgoUHJvbWlzZS5wcm90b3R5cGUsIHtcclxuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXHJcbiAgICB0aGVuOiBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XHJcbiAgICAgIHZhciBTID0gYXNzZXJ0T2JqZWN0KGFzc2VydE9iamVjdCh0aGlzKS5jb25zdHJ1Y3RvcilbU1BFQ0lFU107XHJcbiAgICAgIHZhciByZWFjdCA9IHtcclxuICAgICAgICBvazogICBpc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogdHJ1ZSxcclxuICAgICAgICBmYWlsOiBpc0Z1bmN0aW9uKG9uUmVqZWN0ZWQpICA/IG9uUmVqZWN0ZWQgIDogZmFsc2VcclxuICAgICAgfTtcclxuICAgICAgdmFyIFAgPSByZWFjdC5QID0gbmV3IChTICE9IHVuZGVmaW5lZCA/IFMgOiBQcm9taXNlKShmdW5jdGlvbihyZXMsIHJlail7XHJcbiAgICAgICAgcmVhY3QucmVzID0gYXNzZXJ0RnVuY3Rpb24ocmVzKTtcclxuICAgICAgICByZWFjdC5yZWogPSBhc3NlcnRGdW5jdGlvbihyZWopO1xyXG4gICAgICB9KTtcclxuICAgICAgdmFyIHJlY29yZCA9IHRoaXNbUkVDT1JEXTtcclxuICAgICAgcmVjb3JkLmMucHVzaChyZWFjdCk7XHJcbiAgICAgIHJlY29yZC5zICYmIG5vdGlmeShyZWNvcmQpO1xyXG4gICAgICByZXR1cm4gUDtcclxuICAgIH0sXHJcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxyXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcclxuICAgIH1cclxuICB9KTtcclxufSgpO1xyXG4kZGVmKCRkZWYuRyArICRkZWYuVyArICRkZWYuRiAqIChQcm9taXNlICE9IEJhc2UpLCB7UHJvbWlzZTogUHJvbWlzZX0pO1xyXG4kZGVmKCRkZWYuUywgUFJPTUlTRSwge1xyXG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXHJcbiAgcmVqZWN0OiBmdW5jdGlvbihyKXtcclxuICAgIHJldHVybiBuZXcgKGdldENvbnN0cnVjdG9yKHRoaXMpKShmdW5jdGlvbihyZXMsIHJlail7XHJcbiAgICAgIHJlaihyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXHJcbiAgcmVzb2x2ZTogZnVuY3Rpb24oeCl7XHJcbiAgICByZXR1cm4gaXNPYmplY3QoeCkgJiYgUkVDT1JEIGluIHggJiYgJC5nZXRQcm90byh4KSA9PT0gdGhpcy5wcm90b3R5cGVcclxuICAgICAgPyB4IDogbmV3IChnZXRDb25zdHJ1Y3Rvcih0aGlzKSkoZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICByZXMoeCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiRkZWYoJGRlZi5TICsgJGRlZi5GICogKCRpdGVyLmZhaWwoZnVuY3Rpb24oaXRlcil7XHJcbiAgUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZnVuY3Rpb24oKXt9KTtcclxufSkgfHwgJGl0ZXIuREFOR0VSX0NMT1NJTkcpLCBQUk9NSVNFLCB7XHJcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXHJcbiAgYWxsOiBmdW5jdGlvbihpdGVyYWJsZSl7XHJcbiAgICB2YXIgQyAgICAgID0gZ2V0Q29uc3RydWN0b3IodGhpcylcclxuICAgICAgLCB2YWx1ZXMgPSBbXTtcclxuICAgIHJldHVybiBuZXcgQyhmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIHZhbHVlcy5wdXNoLCB2YWx1ZXMpO1xyXG4gICAgICB2YXIgcmVtYWluaW5nID0gdmFsdWVzLmxlbmd0aFxyXG4gICAgICAgICwgcmVzdWx0cyAgID0gQXJyYXkocmVtYWluaW5nKTtcclxuICAgICAgaWYocmVtYWluaW5nKSQuZWFjaC5jYWxsKHZhbHVlcywgZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpe1xyXG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHJlc3VsdHMpO1xyXG4gICAgICAgIH0sIHJlamVjdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlbHNlIHJlc29sdmUocmVzdWx0cyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcclxuICByYWNlOiBmdW5jdGlvbihpdGVyYWJsZSl7XHJcbiAgICB2YXIgQyA9IGdldENvbnN0cnVjdG9yKHRoaXMpO1xyXG4gICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XHJcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5jb2Yuc2V0KFByb21pc2UsIFBST01JU0UpO1xyXG5yZXF1aXJlKCcuLyQuc3BlY2llcycpKFByb21pc2UpOyIsInZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgJGRlZiAgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCBzZXRQcm90byAgPSByZXF1aXJlKCcuLyQuc2V0LXByb3RvJylcclxuICAsICRpdGVyICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyJylcclxuICAsIElURVIgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKS5zYWZlKCdpdGVyJylcclxuICAsIHN0ZXAgICAgICA9ICRpdGVyLnN0ZXBcclxuICAsIGFzc2VydCAgICA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKVxyXG4gICwgaXNPYmplY3QgID0gJC5pc09iamVjdFxyXG4gICwgZ2V0RGVzYyAgID0gJC5nZXREZXNjXHJcbiAgLCBzZXREZXNjICAgPSAkLnNldERlc2NcclxuICAsIGdldFByb3RvICA9ICQuZ2V0UHJvdG9cclxuICAsIGFwcGx5ICAgICA9IEZ1bmN0aW9uLmFwcGx5XHJcbiAgLCBhc3NlcnRPYmplY3QgPSBhc3NlcnQub2JqXHJcbiAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8ICQuaXQ7XHJcbmZ1bmN0aW9uIEVudW1lcmF0ZShpdGVyYXRlZCl7XHJcbiAgdmFyIGtleXMgPSBbXSwga2V5O1xyXG4gIGZvcihrZXkgaW4gaXRlcmF0ZWQpa2V5cy5wdXNoKGtleSk7XHJcbiAgJC5zZXQodGhpcywgSVRFUiwge286IGl0ZXJhdGVkLCBhOiBrZXlzLCBpOiAwfSk7XHJcbn1cclxuJGl0ZXIuY3JlYXRlKEVudW1lcmF0ZSwgJ09iamVjdCcsIGZ1bmN0aW9uKCl7XHJcbiAgdmFyIGl0ZXIgPSB0aGlzW0lURVJdXHJcbiAgICAsIGtleXMgPSBpdGVyLmFcclxuICAgICwga2V5O1xyXG4gIGRvIHtcclxuICAgIGlmKGl0ZXIuaSA+PSBrZXlzLmxlbmd0aClyZXR1cm4gc3RlcCgxKTtcclxuICB9IHdoaWxlKCEoKGtleSA9IGtleXNbaXRlci5pKytdKSBpbiBpdGVyLm8pKTtcclxuICByZXR1cm4gc3RlcCgwLCBrZXkpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHdyYXAoZm4pe1xyXG4gIHJldHVybiBmdW5jdGlvbihpdCl7XHJcbiAgICBhc3NlcnRPYmplY3QoaXQpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZm4uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWZsZWN0R2V0KHRhcmdldCwgcHJvcGVydHlLZXkvKiwgcmVjZWl2ZXIqLyl7XHJcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl1cclxuICAgICwgZGVzYyA9IGdldERlc2MoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KSwgcHJvdG87XHJcbiAgaWYoZGVzYylyZXR1cm4gJC5oYXMoZGVzYywgJ3ZhbHVlJylcclxuICAgID8gZGVzYy52YWx1ZVxyXG4gICAgOiBkZXNjLmdldCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgIDogZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XHJcbiAgcmV0dXJuIGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG8odGFyZ2V0KSlcclxuICAgID8gcmVmbGVjdEdldChwcm90bywgcHJvcGVydHlLZXksIHJlY2VpdmVyKVxyXG4gICAgOiB1bmRlZmluZWQ7XHJcbn1cclxuZnVuY3Rpb24gcmVmbGVjdFNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWLyosIHJlY2VpdmVyKi8pe1xyXG4gIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCA0ID8gdGFyZ2V0IDogYXJndW1lbnRzWzNdXHJcbiAgICAsIG93bkRlc2MgID0gZ2V0RGVzYyhhc3NlcnRPYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpXHJcbiAgICAsIGV4aXN0aW5nRGVzY3JpcHRvciwgcHJvdG87XHJcbiAgaWYoIW93bkRlc2Mpe1xyXG4gICAgaWYoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90byh0YXJnZXQpKSl7XHJcbiAgICAgIHJldHVybiByZWZsZWN0U2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgViwgcmVjZWl2ZXIpO1xyXG4gICAgfVxyXG4gICAgb3duRGVzYyA9ICQuZGVzYygwKTtcclxuICB9XHJcbiAgaWYoJC5oYXMob3duRGVzYywgJ3ZhbHVlJykpe1xyXG4gICAgaWYob3duRGVzYy53cml0YWJsZSA9PT0gZmFsc2UgfHwgIWlzT2JqZWN0KHJlY2VpdmVyKSlyZXR1cm4gZmFsc2U7XHJcbiAgICBleGlzdGluZ0Rlc2NyaXB0b3IgPSBnZXREZXNjKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSkgfHwgJC5kZXNjKDApO1xyXG4gICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcclxuICAgIHNldERlc2MocmVjZWl2ZXIsIHByb3BlcnR5S2V5LCBleGlzdGluZ0Rlc2NyaXB0b3IpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBvd25EZXNjLnNldCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAob3duRGVzYy5zZXQuY2FsbChyZWNlaXZlciwgViksIHRydWUpO1xyXG59XHJcblxyXG52YXIgcmVmbGVjdCA9IHtcclxuICAvLyAyNi4xLjEgUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdClcclxuICBhcHBseTogcmVxdWlyZSgnLi8kLmN0eCcpKEZ1bmN0aW9uLmNhbGwsIGFwcGx5LCAzKSxcclxuICAvLyAyNi4xLjIgUmVmbGVjdC5jb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IFssIG5ld1RhcmdldF0pXHJcbiAgY29uc3RydWN0OiBmdW5jdGlvbih0YXJnZXQsIGFyZ3VtZW50c0xpc3QgLyosIG5ld1RhcmdldCovKXtcclxuICAgIHZhciBwcm90byAgICA9IGFzc2VydC5mbihhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXSkucHJvdG90eXBlXHJcbiAgICAgICwgaW5zdGFuY2UgPSAkLmNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpXHJcbiAgICAgICwgcmVzdWx0ICAgPSBhcHBseS5jYWxsKHRhcmdldCwgaW5zdGFuY2UsIGFyZ3VtZW50c0xpc3QpO1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBpbnN0YW5jZTtcclxuICB9LFxyXG4gIC8vIDI2LjEuMyBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpXHJcbiAgZGVmaW5lUHJvcGVydHk6IHdyYXAoc2V0RGVzYyksXHJcbiAgLy8gMjYuMS40IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSlcclxuICBkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eUtleSl7XHJcbiAgICB2YXIgZGVzYyA9IGdldERlc2MoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcclxuICAgIHJldHVybiBkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSA/IGZhbHNlIDogZGVsZXRlIHRhcmdldFtwcm9wZXJ0eUtleV07XHJcbiAgfSxcclxuICAvLyAyNi4xLjUgUmVmbGVjdC5lbnVtZXJhdGUodGFyZ2V0KVxyXG4gIGVudW1lcmF0ZTogZnVuY3Rpb24odGFyZ2V0KXtcclxuICAgIHJldHVybiBuZXcgRW51bWVyYXRlKGFzc2VydE9iamVjdCh0YXJnZXQpKTtcclxuICB9LFxyXG4gIC8vIDI2LjEuNiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5S2V5IFssIHJlY2VpdmVyXSlcclxuICBnZXQ6IHJlZmxlY3RHZXQsXHJcbiAgLy8gMjYuMS43IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpXHJcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgIHJldHVybiBnZXREZXNjKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XHJcbiAgfSxcclxuICAvLyAyNi4xLjggUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpXHJcbiAgZ2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uKHRhcmdldCl7XHJcbiAgICByZXR1cm4gZ2V0UHJvdG8oYXNzZXJ0T2JqZWN0KHRhcmdldCkpO1xyXG4gIH0sXHJcbiAgLy8gMjYuMS45IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpXHJcbiAgaGFzOiBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgIHJldHVybiBwcm9wZXJ0eUtleSBpbiB0YXJnZXQ7XHJcbiAgfSxcclxuICAvLyAyNi4xLjEwIFJlZmxlY3QuaXNFeHRlbnNpYmxlKHRhcmdldClcclxuICBpc0V4dGVuc2libGU6IGZ1bmN0aW9uKHRhcmdldCl7XHJcbiAgICByZXR1cm4gISFpc0V4dGVuc2libGUoYXNzZXJ0T2JqZWN0KHRhcmdldCkpO1xyXG4gIH0sXHJcbiAgLy8gMjYuMS4xMSBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxyXG4gIG93bktleXM6IHJlcXVpcmUoJy4vJC5vd24ta2V5cycpLFxyXG4gIC8vIDI2LjEuMTIgUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpXHJcbiAgcHJldmVudEV4dGVuc2lvbnM6IHdyYXAoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zIHx8ICQuaXQpLFxyXG4gIC8vIDI2LjEuMTMgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViBbLCByZWNlaXZlcl0pXHJcbiAgc2V0OiByZWZsZWN0U2V0XHJcbn07XHJcbi8vIDI2LjEuMTQgUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKVxyXG5pZihzZXRQcm90bylyZWZsZWN0LnNldFByb3RvdHlwZU9mID0gZnVuY3Rpb24odGFyZ2V0LCBwcm90byl7XHJcbiAgc2V0UHJvdG8oYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3RvKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbiRkZWYoJGRlZi5HLCB7UmVmbGVjdDoge319KTtcclxuJGRlZigkZGVmLlMsICdSZWZsZWN0JywgcmVmbGVjdCk7IiwidmFyICQgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjb2YgICAgPSByZXF1aXJlKCcuLyQuY29mJylcclxuICAsIFJlZ0V4cCA9ICQuZy5SZWdFeHBcclxuICAsIEJhc2UgICA9IFJlZ0V4cFxyXG4gICwgcHJvdG8gID0gUmVnRXhwLnByb3RvdHlwZTtcclxuaWYoJC5GVyAmJiAkLkRFU0Mpe1xyXG4gIC8vIFJlZ0V4cCBhbGxvd3MgYSByZWdleCB3aXRoIGZsYWdzIGFzIHRoZSBwYXR0ZXJuXHJcbiAgaWYoIWZ1bmN0aW9uKCl7dHJ5eyByZXR1cm4gUmVnRXhwKC9hL2csICdpJykgPT0gJy9hL2knOyB9Y2F0Y2goZSl7IC8qIGVtcHR5ICovIH19KCkpe1xyXG4gICAgUmVnRXhwID0gZnVuY3Rpb24gUmVnRXhwKHBhdHRlcm4sIGZsYWdzKXtcclxuICAgICAgcmV0dXJuIG5ldyBCYXNlKGNvZihwYXR0ZXJuKSA9PSAnUmVnRXhwJyAmJiBmbGFncyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBwYXR0ZXJuLnNvdXJjZSA6IHBhdHRlcm4sIGZsYWdzKTtcclxuICAgIH07XHJcbiAgICAkLmVhY2guY2FsbCgkLmdldE5hbWVzKEJhc2UpLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgICBrZXkgaW4gUmVnRXhwIHx8ICQuc2V0RGVzYyhSZWdFeHAsIGtleSwge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBCYXNlW2tleV07IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbihpdCl7IEJhc2Vba2V5XSA9IGl0OyB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBwcm90by5jb25zdHJ1Y3RvciA9IFJlZ0V4cDtcclxuICAgIFJlZ0V4cC5wcm90b3R5cGUgPSBwcm90bztcclxuICAgICQuaGlkZSgkLmcsICdSZWdFeHAnLCBSZWdFeHApO1xyXG4gIH1cclxuICAvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXHJcbiAgaWYoLy4vZy5mbGFncyAhPSAnZycpJC5zZXREZXNjKHByb3RvLCAnZmxhZ3MnLCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IHJlcXVpcmUoJy4vJC5yZXBsYWNlcicpKC9eLipcXC8oXFx3KikkLywgJyQxJylcclxuICB9KTtcclxufVxyXG5yZXF1aXJlKCcuLyQuc3BlY2llcycpKFJlZ0V4cCk7IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tc3Ryb25nJyk7XHJcblxyXG4vLyAyMy4yIFNldCBPYmplY3RzXHJcbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uJykoJ1NldCcsIHtcclxuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcclxuICBhZGQ6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcclxuICB9XHJcbn0sIHN0cm9uZyk7IiwidmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcbiRkZWYoJGRlZi5QLCAnU3RyaW5nJywge1xyXG4gIC8vIDIxLjEuMy4zIFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQocG9zKVxyXG4gIGNvZGVQb2ludEF0OiByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykoZmFsc2UpXHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY29mICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxyXG4gICwgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgdG9MZW5ndGggPSAkLnRvTGVuZ3RoO1xyXG5cclxuJGRlZigkZGVmLlAsICdTdHJpbmcnLCB7XHJcbiAgLy8gMjEuMS4zLjYgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aChzZWFyY2hTdHJpbmcgWywgZW5kUG9zaXRpb25dKVxyXG4gIGVuZHNXaXRoOiBmdW5jdGlvbihzZWFyY2hTdHJpbmcgLyosIGVuZFBvc2l0aW9uID0gQGxlbmd0aCAqLyl7XHJcbiAgICBpZihjb2Yoc2VhcmNoU3RyaW5nKSA9PSAnUmVnRXhwJyl0aHJvdyBUeXBlRXJyb3IoKTtcclxuICAgIHZhciB0aGF0ID0gU3RyaW5nKCQuYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgLCBlbmRQb3NpdGlvbiA9IGFyZ3VtZW50c1sxXVxyXG4gICAgICAsIGxlbiA9IHRvTGVuZ3RoKHRoYXQubGVuZ3RoKVxyXG4gICAgICAsIGVuZCA9IGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBsZW4gOiBNYXRoLm1pbih0b0xlbmd0aChlbmRQb3NpdGlvbiksIGxlbik7XHJcbiAgICBzZWFyY2hTdHJpbmcgKz0gJyc7XHJcbiAgICByZXR1cm4gdGhhdC5zbGljZShlbmQgLSBzZWFyY2hTdHJpbmcubGVuZ3RoLCBlbmQpID09PSBzZWFyY2hTdHJpbmc7XHJcbiAgfVxyXG59KTsiLCJ2YXIgJGRlZiAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgdG9JbmRleCA9IHJlcXVpcmUoJy4vJCcpLnRvSW5kZXhcclxuICAsIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XHJcblxyXG4kZGVmKCRkZWYuUywgJ1N0cmluZycsIHtcclxuICAvLyAyMS4xLjIuMiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKVxyXG4gIGZyb21Db2RlUG9pbnQ6IGZ1bmN0aW9uKHgpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICB2YXIgcmVzID0gW11cclxuICAgICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICwgaSAgID0gMFxyXG4gICAgICAsIGNvZGU7XHJcbiAgICB3aGlsZShsZW4gPiBpKXtcclxuICAgICAgY29kZSA9ICthcmd1bWVudHNbaSsrXTtcclxuICAgICAgaWYodG9JbmRleChjb2RlLCAweDEwZmZmZikgIT09IGNvZGUpdGhyb3cgUmFuZ2VFcnJvcihjb2RlICsgJyBpcyBub3QgYSB2YWxpZCBjb2RlIHBvaW50Jyk7XHJcbiAgICAgIHJlcy5wdXNoKGNvZGUgPCAweDEwMDAwXHJcbiAgICAgICAgPyBmcm9tQ2hhckNvZGUoY29kZSlcclxuICAgICAgICA6IGZyb21DaGFyQ29kZSgoKGNvZGUgLT0gMHgxMDAwMCkgPj4gMTApICsgMHhkODAwLCBjb2RlICUgMHg0MDAgKyAweGRjMDApXHJcbiAgICAgICk7XHJcbiAgICB9IHJldHVybiByZXMuam9pbignJyk7XHJcbiAgfVxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGNvZiAgPSByZXF1aXJlKCcuLyQuY29mJylcclxuICAsICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcblxyXG4kZGVmKCRkZWYuUCwgJ1N0cmluZycsIHtcclxuICAvLyAyMS4xLjMuNyBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKHNlYXJjaFN0cmluZywgcG9zaXRpb24gPSAwKVxyXG4gIGluY2x1ZGVzOiBmdW5jdGlvbihzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XHJcbiAgICBpZihjb2Yoc2VhcmNoU3RyaW5nKSA9PSAnUmVnRXhwJyl0aHJvdyBUeXBlRXJyb3IoKTtcclxuICAgIHJldHVybiAhIX5TdHJpbmcoJC5hc3NlcnREZWZpbmVkKHRoaXMpKS5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzWzFdKTtcclxuICB9XHJcbn0pOyIsInZhciBzZXQgICA9IHJlcXVpcmUoJy4vJCcpLnNldFxyXG4gICwgYXQgICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSlcclxuICAsIElURVIgID0gcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmUoJ2l0ZXInKVxyXG4gICwgJGl0ZXIgPSByZXF1aXJlKCcuLyQuaXRlcicpXHJcbiAgLCBzdGVwICA9ICRpdGVyLnN0ZXA7XHJcblxyXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXHJcbiRpdGVyLnN0ZChTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XHJcbiAgc2V0KHRoaXMsIElURVIsIHtvOiBTdHJpbmcoaXRlcmF0ZWQpLCBpOiAwfSk7XHJcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcclxufSwgZnVuY3Rpb24oKXtcclxuICB2YXIgaXRlciAgPSB0aGlzW0lURVJdXHJcbiAgICAsIE8gICAgID0gaXRlci5vXHJcbiAgICAsIGluZGV4ID0gaXRlci5pXHJcbiAgICAsIHBvaW50O1xyXG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiBzdGVwKDEpO1xyXG4gIHBvaW50ID0gYXQuY2FsbChPLCBpbmRleCk7XHJcbiAgaXRlci5pICs9IHBvaW50Lmxlbmd0aDtcclxuICByZXR1cm4gc3RlcCgwLCBwb2ludCk7XHJcbn0pOyIsInZhciAkICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcblxyXG4kZGVmKCRkZWYuUywgJ1N0cmluZycsIHtcclxuICAvLyAyMS4xLjIuNCBTdHJpbmcucmF3KGNhbGxTaXRlLCAuLi5zdWJzdGl0dXRpb25zKVxyXG4gIHJhdzogZnVuY3Rpb24oY2FsbFNpdGUpe1xyXG4gICAgdmFyIHJhdyA9ICQudG9PYmplY3QoY2FsbFNpdGUucmF3KVxyXG4gICAgICAsIGxlbiA9ICQudG9MZW5ndGgocmF3Lmxlbmd0aClcclxuICAgICAgLCBzbG4gPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICwgcmVzID0gW11cclxuICAgICAgLCBpICAgPSAwO1xyXG4gICAgd2hpbGUobGVuID4gaSl7XHJcbiAgICAgIHJlcy5wdXNoKFN0cmluZyhyYXdbaSsrXSkpO1xyXG4gICAgICBpZihpIDwgc2xuKXJlcy5wdXNoKFN0cmluZyhhcmd1bWVudHNbaV0pKTtcclxuICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcclxuICB9XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcclxuXHJcbiRkZWYoJGRlZi5QLCAnU3RyaW5nJywge1xyXG4gIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcclxuICByZXBlYXQ6IGZ1bmN0aW9uKGNvdW50KXtcclxuICAgIHZhciBzdHIgPSBTdHJpbmcoJC5hc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAsIHJlcyA9ICcnXHJcbiAgICAgICwgbiAgID0gJC50b0ludGVnZXIoY291bnQpO1xyXG4gICAgaWYobiA8IDAgfHwgbiA9PSBJbmZpbml0eSl0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XHJcbiAgICBmb3IoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSlpZihuICYgMSlyZXMgKz0gc3RyO1xyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY29mICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxyXG4gICwgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcclxuXHJcbiRkZWYoJGRlZi5QLCAnU3RyaW5nJywge1xyXG4gIC8vIDIxLjEuMy4xOCBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIFssIHBvc2l0aW9uIF0pXHJcbiAgc3RhcnRzV2l0aDogZnVuY3Rpb24oc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xyXG4gICAgaWYoY29mKHNlYXJjaFN0cmluZykgPT0gJ1JlZ0V4cCcpdGhyb3cgVHlwZUVycm9yKCk7XHJcbiAgICB2YXIgdGhhdCAgPSBTdHJpbmcoJC5hc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAsIGluZGV4ID0gJC50b0xlbmd0aChNYXRoLm1pbihhcmd1bWVudHNbMV0sIHRoYXQubGVuZ3RoKSk7XHJcbiAgICBzZWFyY2hTdHJpbmcgKz0gJyc7XHJcbiAgICByZXR1cm4gdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2hTdHJpbmcubGVuZ3RoKSA9PT0gc2VhcmNoU3RyaW5nO1xyXG4gIH1cclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXHJcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBzZXRUYWcgICA9IHJlcXVpcmUoJy4vJC5jb2YnKS5zZXRcclxuICAsIHVpZCAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXHJcbiAgLCAkZGVmICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwga2V5T2YgICAgPSByZXF1aXJlKCcuLyQua2V5b2YnKVxyXG4gICwgaGFzICAgICAgPSAkLmhhc1xyXG4gICwgaGlkZSAgICAgPSAkLmhpZGVcclxuICAsIGdldE5hbWVzID0gJC5nZXROYW1lc1xyXG4gICwgdG9PYmplY3QgPSAkLnRvT2JqZWN0XHJcbiAgLCBTeW1ib2wgICA9ICQuZy5TeW1ib2xcclxuICAsIEJhc2UgICAgID0gU3ltYm9sXHJcbiAgLCBzZXR0ZXIgICA9IGZhbHNlXHJcbiAgLCBUQUcgICAgICA9IHVpZC5zYWZlKCd0YWcnKVxyXG4gICwgU3ltYm9sUmVnaXN0cnkgPSB7fVxyXG4gICwgQWxsU3ltYm9scyAgICAgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIHdyYXAodGFnKXtcclxuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gJC5zZXQoJC5jcmVhdGUoU3ltYm9sLnByb3RvdHlwZSksIFRBRywgdGFnKTtcclxuICAkLkRFU0MgJiYgc2V0dGVyICYmICQuc2V0RGVzYyhPYmplY3QucHJvdG90eXBlLCB0YWcsIHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICBoaWRlKHRoaXMsIHRhZywgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBzeW07XHJcbn1cclxuXHJcbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxyXG5pZighJC5pc0Z1bmN0aW9uKFN5bWJvbCkpe1xyXG4gIFN5bWJvbCA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uKXtcclxuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcclxuICAgIHJldHVybiB3cmFwKHVpZChkZXNjcmlwdGlvbikpO1xyXG4gIH07XHJcbiAgaGlkZShTeW1ib2wucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHRoaXNbVEFHXTtcclxuICB9KTtcclxufVxyXG4kZGVmKCRkZWYuRyArICRkZWYuVywge1N5bWJvbDogU3ltYm9sfSk7XHJcblxyXG52YXIgc3ltYm9sU3RhdGljcyA9IHtcclxuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcclxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcclxuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcclxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXHJcbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9IFN5bWJvbChrZXkpO1xyXG4gIH0sXHJcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXHJcbiAga2V5Rm9yOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xyXG4gIH0sXHJcbiAgcHVyZTogdWlkLnNhZmUsXHJcbiAgc2V0OiAkLnNldCxcclxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXHJcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxyXG59O1xyXG4vLyAxOS40LjIuMiBTeW1ib2wuaGFzSW5zdGFuY2VcclxuLy8gMTkuNC4yLjMgU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZVxyXG4vLyAxOS40LjIuNCBTeW1ib2wuaXRlcmF0b3JcclxuLy8gMTkuNC4yLjYgU3ltYm9sLm1hdGNoXHJcbi8vIDE5LjQuMi44IFN5bWJvbC5yZXBsYWNlXHJcbi8vIDE5LjQuMi45IFN5bWJvbC5zZWFyY2hcclxuLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXHJcbi8vIDE5LjQuMi4xMSBTeW1ib2wuc3BsaXRcclxuLy8gMTkuNC4yLjEyIFN5bWJvbC50b1ByaW1pdGl2ZVxyXG4vLyAxOS40LjIuMTMgU3ltYm9sLnRvU3RyaW5nVGFnXHJcbi8vIDE5LjQuMi4xNCBTeW1ib2wudW5zY29wYWJsZXNcclxuJC5lYWNoLmNhbGwoKFxyXG4gICAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCwnICtcclxuICAgICdzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xyXG4gICkuc3BsaXQoJywnKSwgZnVuY3Rpb24oaXQpe1xyXG4gICAgdmFyIHN5bSA9IHJlcXVpcmUoJy4vJC53a3MnKShpdCk7XHJcbiAgICBzeW1ib2xTdGF0aWNzW2l0XSA9IFN5bWJvbCA9PT0gQmFzZSA/IHN5bSA6IHdyYXAoc3ltKTtcclxuICB9XHJcbik7XHJcblxyXG5zZXR0ZXIgPSB0cnVlO1xyXG5cclxuJGRlZigkZGVmLlMsICdTeW1ib2wnLCBzeW1ib2xTdGF0aWNzKTtcclxuXHJcbiRkZWYoJGRlZi5TICsgJGRlZi5GICogKFN5bWJvbCAhPSBCYXNlKSwgJ09iamVjdCcsIHtcclxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxyXG4gIGdldE93blByb3BlcnR5TmFtZXM6IGZ1bmN0aW9uKGl0KXtcclxuICAgIHZhciBuYW1lcyA9IGdldE5hbWVzKHRvT2JqZWN0KGl0KSksIHJlc3VsdCA9IFtdLCBrZXksIGkgPSAwO1xyXG4gICAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSloYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSxcclxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXHJcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbihpdCl7XHJcbiAgICB2YXIgbmFtZXMgPSBnZXROYW1lcyh0b09iamVjdChpdCkpLCByZXN1bHQgPSBbXSwga2V5LCBpID0gMDtcclxuICAgIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufSk7XHJcblxyXG5zZXRUYWcoU3ltYm9sLCAnU3ltYm9sJyk7XHJcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cclxuc2V0VGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XHJcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXHJcbnNldFRhZygkLmcuSlNPTiwgJ0pTT04nLCB0cnVlKTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgd2VhayAgICAgID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24td2VhaycpXHJcbiAgLCBsZWFrU3RvcmUgPSB3ZWFrLmxlYWtTdG9yZVxyXG4gICwgSUQgICAgICAgID0gd2Vhay5JRFxyXG4gICwgV0VBSyAgICAgID0gd2Vhay5XRUFLXHJcbiAgLCBoYXMgICAgICAgPSAkLmhhc1xyXG4gICwgaXNPYmplY3QgID0gJC5pc09iamVjdFxyXG4gICwgaXNGcm96ZW4gID0gT2JqZWN0LmlzRnJvemVuIHx8ICQuY29yZS5PYmplY3QuaXNGcm96ZW5cclxuICAsIHRtcCAgICAgICA9IHt9O1xyXG5cclxuLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcclxudmFyIFdlYWtNYXAgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdXZWFrTWFwJywge1xyXG4gIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXHJcbiAgZ2V0OiBmdW5jdGlvbihrZXkpe1xyXG4gICAgaWYoaXNPYmplY3Qoa2V5KSl7XHJcbiAgICAgIGlmKGlzRnJvemVuKGtleSkpcmV0dXJuIGxlYWtTdG9yZSh0aGlzKS5nZXQoa2V5KTtcclxuICAgICAgaWYoaGFzKGtleSwgV0VBSykpcmV0dXJuIGtleVtXRUFLXVt0aGlzW0lEXV07XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyAyMy4zLjMuNSBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcclxuICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIGtleSwgdmFsdWUpO1xyXG4gIH1cclxufSwgd2VhaywgdHJ1ZSwgdHJ1ZSk7XHJcblxyXG4vLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XHJcbmlmKCQuRlcgJiYgbmV3IFdlYWtNYXAoKS5zZXQoKE9iamVjdC5mcmVlemUgfHwgT2JqZWN0KSh0bXApLCA3KS5nZXQodG1wKSAhPSA3KXtcclxuICAkLmVhY2guY2FsbChbJ2RlbGV0ZScsICdoYXMnLCAnZ2V0JywgJ3NldCddLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgdmFyIG1ldGhvZCA9IFdlYWtNYXAucHJvdG90eXBlW2tleV07XHJcbiAgICBXZWFrTWFwLnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgIC8vIHN0b3JlIGZyb3plbiBvYmplY3RzIG9uIGxlYWt5IG1hcFxyXG4gICAgICBpZihpc09iamVjdChhKSAmJiBpc0Zyb3plbihhKSl7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGxlYWtTdG9yZSh0aGlzKVtrZXldKGEsIGIpO1xyXG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NldCcgPyB0aGlzIDogcmVzdWx0O1xyXG4gICAgICAvLyBzdG9yZSBhbGwgdGhlIHJlc3Qgb24gbmF0aXZlIHdlYWttYXBcclxuICAgICAgfSByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgYSwgYik7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgd2VhayA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXdlYWsnKTtcclxuXHJcbi8vIDIzLjQgV2Vha1NldCBPYmplY3RzXHJcbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uJykoJ1dlYWtTZXQnLCB7XHJcbiAgLy8gMjMuNC4zLjEgV2Vha1NldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxyXG4gIGFkZDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIHZhbHVlLCB0cnVlKTtcclxuICB9XHJcbn0sIHdlYWssIGZhbHNlLCB0cnVlKTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vZG9tZW5pYy9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcclxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcbiRkZWYoJGRlZi5QLCAnQXJyYXknLCB7XHJcbiAgaW5jbHVkZXM6IHJlcXVpcmUoJy4vJC5hcnJheS1pbmNsdWRlcycpKHRydWUpXHJcbn0pO1xyXG5yZXF1aXJlKCcuLyQudW5zY29wZScpKCdpbmNsdWRlcycpOyIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vOTM1Mzc4MVxyXG52YXIgJCAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCAkZGVmICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCBvd25LZXlzID0gcmVxdWlyZSgnLi8kLm93bi1rZXlzJyk7XHJcblxyXG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHtcclxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbihvYmplY3Qpe1xyXG4gICAgdmFyIE8gICAgICA9ICQudG9PYmplY3Qob2JqZWN0KVxyXG4gICAgICAsIHJlc3VsdCA9IHt9O1xyXG4gICAgJC5lYWNoLmNhbGwob3duS2V5cyhPKSwgZnVuY3Rpb24oa2V5KXtcclxuICAgICAgJC5zZXREZXNjKHJlc3VsdCwga2V5LCAkLmRlc2MoMCwgJC5nZXREZXNjKE8sIGtleSkpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn0pOyIsIi8vIGh0dHA6Ly9nb28uZ2wvWGtCcmpEXHJcbnZhciAkICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcbmZ1bmN0aW9uIGNyZWF0ZU9iamVjdFRvQXJyYXkoaXNFbnRyaWVzKXtcclxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KXtcclxuICAgIHZhciBPICAgICAgPSAkLnRvT2JqZWN0KG9iamVjdClcclxuICAgICAgLCBrZXlzICAgPSAkLmdldEtleXMob2JqZWN0KVxyXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXHJcbiAgICAgICwgaSAgICAgID0gMFxyXG4gICAgICAsIHJlc3VsdCA9IEFycmF5KGxlbmd0aClcclxuICAgICAgLCBrZXk7XHJcbiAgICBpZihpc0VudHJpZXMpd2hpbGUobGVuZ3RoID4gaSlyZXN1bHRbaV0gPSBba2V5ID0ga2V5c1tpKytdLCBPW2tleV1dO1xyXG4gICAgZWxzZSB3aGlsZShsZW5ndGggPiBpKXJlc3VsdFtpXSA9IE9ba2V5c1tpKytdXTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxufVxyXG4kZGVmKCRkZWYuUywgJ09iamVjdCcsIHtcclxuICB2YWx1ZXM6ICBjcmVhdGVPYmplY3RUb0FycmF5KGZhbHNlKSxcclxuICBlbnRyaWVzOiBjcmVhdGVPYmplY3RUb0FycmF5KHRydWUpXHJcbn0pOyIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2thbmdheC85Njk4MTAwXHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG4kZGVmKCRkZWYuUywgJ1JlZ0V4cCcsIHtcclxuICBlc2NhcGU6IHJlcXVpcmUoJy4vJC5yZXBsYWNlcicpKC8oW1xcXFxcXC1bXFxde30oKSorPy4sXiR8XSkvZywgJ1xcXFwkMScsIHRydWUpXHJcbn0pOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcclxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcbiRkZWYoJGRlZi5QLCAnU3RyaW5nJywge1xyXG4gIGF0OiByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSlcclxufSk7IiwiLy8gSmF2YVNjcmlwdCAxLjYgLyBTdHJhd21hbiBhcnJheSBzdGF0aWNzIHNoaW1cclxudmFyICQgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgJGRlZiAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgY29yZSAgICA9ICQuY29yZVxyXG4gICwgc3RhdGljcyA9IHt9O1xyXG5mdW5jdGlvbiBzZXRTdGF0aWNzKGtleXMsIGxlbmd0aCl7XHJcbiAgJC5lYWNoLmNhbGwoa2V5cy5zcGxpdCgnLCcpLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgaWYobGVuZ3RoID09IHVuZGVmaW5lZCAmJiBrZXkgaW4gY29yZS5BcnJheSlzdGF0aWNzW2tleV0gPSBjb3JlLkFycmF5W2tleV07XHJcbiAgICBlbHNlIGlmKGtleSBpbiBbXSlzdGF0aWNzW2tleV0gPSByZXF1aXJlKCcuLyQuY3R4JykoRnVuY3Rpb24uY2FsbCwgW11ba2V5XSwgbGVuZ3RoKTtcclxuICB9KTtcclxufVxyXG5zZXRTdGF0aWNzKCdwb3AscmV2ZXJzZSxzaGlmdCxrZXlzLHZhbHVlcyxlbnRyaWVzJywgMSk7XHJcbnNldFN0YXRpY3MoJ2luZGV4T2YsZXZlcnksc29tZSxmb3JFYWNoLG1hcCxmaWx0ZXIsZmluZCxmaW5kSW5kZXgsaW5jbHVkZXMnLCAzKTtcclxuc2V0U3RhdGljcygnam9pbixzbGljZSxjb25jYXQscHVzaCxzcGxpY2UsdW5zaGlmdCxzb3J0LGxhc3RJbmRleE9mLCcgK1xyXG4gICAgICAgICAgICdyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsLHR1cm4nKTtcclxuJGRlZigkZGVmLlMsICdBcnJheScsIHN0YXRpY3MpOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XHJcbnZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXInKS5JdGVyYXRvcnNcclxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxyXG4gICwgTm9kZUxpc3QgID0gJC5nLk5vZGVMaXN0O1xyXG5pZigkLkZXICYmIE5vZGVMaXN0ICYmICEoSVRFUkFUT1IgaW4gTm9kZUxpc3QucHJvdG90eXBlKSl7XHJcbiAgJC5oaWRlKE5vZGVMaXN0LnByb3RvdHlwZSwgSVRFUkFUT1IsIEl0ZXJhdG9ycy5BcnJheSk7XHJcbn1cclxuSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzLkFycmF5OyIsInZhciAkZGVmICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgJHRhc2sgPSByZXF1aXJlKCcuLyQudGFzaycpO1xyXG4kZGVmKCRkZWYuRyArICRkZWYuQiwge1xyXG4gIHNldEltbWVkaWF0ZTogICAkdGFzay5zZXQsXHJcbiAgY2xlYXJJbW1lZGlhdGU6ICR0YXNrLmNsZWFyXHJcbn0pOyIsIi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcclxudmFyICQgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgJGRlZiAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgaW52b2tlICA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxyXG4gICwgcGFydGlhbCA9IHJlcXVpcmUoJy4vJC5wYXJ0aWFsJylcclxuICAsIE1TSUUgICAgPSAhISQuZy5uYXZpZ2F0b3IgJiYgL01TSUUgLlxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xyXG5mdW5jdGlvbiB3cmFwKHNldCl7XHJcbiAgcmV0dXJuIE1TSUUgPyBmdW5jdGlvbihmbiwgdGltZSAvKiwgLi4uYXJncyAqLyl7XHJcbiAgICByZXR1cm4gc2V0KGludm9rZShcclxuICAgICAgcGFydGlhbCxcclxuICAgICAgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpLFxyXG4gICAgICAkLmlzRnVuY3Rpb24oZm4pID8gZm4gOiBGdW5jdGlvbihmbilcclxuICAgICksIHRpbWUpO1xyXG4gIH0gOiBzZXQ7XHJcbn1cclxuJGRlZigkZGVmLkcgKyAkZGVmLkIgKyAkZGVmLkYgKiBNU0lFLCB7XHJcbiAgc2V0VGltZW91dDogIHdyYXAoJC5nLnNldFRpbWVvdXQpLFxyXG4gIHNldEludGVydmFsOiB3cmFwKCQuZy5zZXRJbnRlcnZhbClcclxufSk7IiwicmVxdWlyZSgnLi9tb2R1bGVzL2VzNScpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3Quc3RhdGljcy1hY2NlcHQtcHJpbWl0aXZlcycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3InKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuc3RhdGljcycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnJhdycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGgnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkub2YnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvcicpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbicpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbGwnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnByb21pc2UnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXAnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zZXQnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi53ZWFrLW1hcCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LndlYWstc2V0Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLmF0Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZScpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LnRvLWFycmF5Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9qcy5hcnJheS5zdGF0aWNzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy93ZWIudGltZXJzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy93ZWIuaW1tZWRpYXRlJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9tb2R1bGVzLyQnKS5jb3JlOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID1cbiAgICB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHJldHVybiBuZXcgR2VuZXJhdG9yKGlubmVyRm4sIG91dGVyRm4sIHNlbGYgfHwgbnVsbCwgdHJ5TG9jc0xpc3QgfHwgW10pO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuZXJhdG9yID0gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCk7XG4gICAgICB2YXIgY2FsbE5leHQgPSBzdGVwLmJpbmQoZ2VuZXJhdG9yLm5leHQpO1xuICAgICAgdmFyIGNhbGxUaHJvdyA9IHN0ZXAuYmluZChnZW5lcmF0b3JbXCJ0aHJvd1wiXSk7XG5cbiAgICAgIGZ1bmN0aW9uIHN0ZXAoYXJnKSB7XG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaCh0aGlzLCBudWxsLCBhcmcpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICByZXNvbHZlKGluZm8udmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZShpbmZvLnZhbHVlKS50aGVuKGNhbGxOZXh0LCBjYWxsVGhyb3cpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhbGxOZXh0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGdlbmVyYXRvciA9IG91dGVyRm4gPyBPYmplY3QuY3JlYXRlKG91dGVyRm4ucHJvdG90eXBlKSA6IHRoaXM7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCk7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSxcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yLFxuICAgICAgICAgICAgYXJnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gTGlrZSByZXR1cm5pbmcgZ2VuZXJhdG9yLnRocm93KHVuY2F1Z2h0KSwgYnV0IHdpdGhvdXQgdGhlXG4gICAgICAgICAgICAvLyBvdmVyaGVhZCBvZiBhbiBleHRyYSBmdW5jdGlvbiBjYWxsLlxuICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgJiZcbiAgICAgICAgICAgICAgdHlwZW9mIGFyZyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgXCJhdHRlbXB0IHRvIHNlbmQgXCIgKyBKU09OLnN0cmluZ2lmeShhcmcpICsgXCIgdG8gbmV3Ym9ybiBnZW5lcmF0b3JcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkWWllbGQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc2VudCA9IGFyZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIGNvbnRleHQuc2VudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG5cbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihyZWNvcmQuYXJnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0b3IubmV4dCA9IGludm9rZS5iaW5kKGdlbmVyYXRvciwgXCJuZXh0XCIpO1xuICAgIGdlbmVyYXRvcltcInRocm93XCJdID0gaW52b2tlLmJpbmQoZ2VuZXJhdG9yLCBcInRocm93XCIpO1xuICAgIGdlbmVyYXRvcltcInJldHVyblwiXSA9IGludm9rZS5iaW5kKGdlbmVyYXRvciwgXCJyZXR1cm5cIik7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIHRoaXMuc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICAvLyBQcmUtaW5pdGlhbGl6ZSBhdCBsZWFzdCAyMCB0ZW1wb3JhcnkgdmFyaWFibGVzIHRvIGVuYWJsZSBoaWRkZW5cbiAgICAgIC8vIGNsYXNzIG9wdGltaXphdGlvbnMgZm9yIHNpbXBsZSBnZW5lcmF0b3JzLlxuICAgICAgZm9yICh2YXIgdGVtcEluZGV4ID0gMCwgdGVtcE5hbWU7XG4gICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIHRlbXBOYW1lID0gXCJ0XCIgKyB0ZW1wSW5kZXgpIHx8IHRlbXBJbmRleCA8IDIwO1xuICAgICAgICAgICArK3RlbXBJbmRleCkge1xuICAgICAgICB0aGlzW3RlbXBOYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOiB0aGlzXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9saWIvYmFiZWwvcG9seWZpbGxcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1jb3JlL3BvbHlmaWxsXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbmV4cG9ydCBjbGFzcyBBdWRpb0V2ZW50e1xuICBjb25zdHJ1Y3Rvcigpe1xuXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUF1ZGlvRXZlbnQoKXtcbiAgcmV0dXJuIG5ldyBBdWRpb0V2ZW50KCk7XG59IiwiLypcbiAgQ3JlYXRlcyB0aGUgY29uZmlnIG9iamVjdCB0aGF0IGlzIHVzZWQgZm9yIGludGVybmFsbHkgc2hhcmluZyBzZXR0aW5ncywgaW5mb3JtYXRpb24gYW5kIHRoZSBzdGF0ZS4gT3RoZXIgbW9kdWxlcyBtYXkgYWRkIGtleXMgdG8gdGhpcyBvYmplY3QuXG4qL1xuXG4ndXNlIHN0cmljdCc7XG5cbmxldFxuICBjb25maWcsXG4gIGRlZmF1bHRTb25nLFxuICB1YSA9ICdOQScsXG4gIG9zID0gJ3Vua25vd24nLFxuICBicm93c2VyID0gJ05BJztcblxuXG5mdW5jdGlvbiBnZXRDb25maWcoKXtcbiAgaWYoY29uZmlnICE9PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBjb25maWcgPSBuZXcgTWFwKCk7XG4gIGNvbmZpZy5zZXQoJ2xlZ2FjeScsIGZhbHNlKTsgLy8gdHJ1ZSBpZiB0aGUgYnJvd3NlciB1c2VzIGFuIG9sZGVyIHZlcnNpb24gb2YgdGhlIFdlYkF1ZGlvIEFQSSwgc291cmNlLm5vdGVPbigpIGFuZCBzb3VyY2Uubm90ZU9mZiBpbnN0ZWFkIG9mIHNvdXJjZS5zdGFydCgpIGFuZCBzb3VyY2Uuc3RvcCgpXG4gIGNvbmZpZy5zZXQoJ21pZGknLCBmYWxzZSk7IC8vIHRydWUgaWYgdGhlIGJyb3dzZXIgaGFzIE1JREkgc3VwcG9ydCBlaXRoZXIgdmlhIFdlYk1JREkgb3IgSmF6elxuICBjb25maWcuc2V0KCd3ZWJtaWRpJywgZmFsc2UpOyAvLyB0cnVlIGlmIHRoZSBicm93c2VyIGhhcyBXZWJNSURJXG4gIGNvbmZpZy5zZXQoJ3dlYmF1ZGlvJywgdHJ1ZSk7IC8vIHRydWUgaWYgdGhlIGJyb3dzZXIgaGFzIFdlYkF1ZGlvXG4gIGNvbmZpZy5zZXQoJ2phenonLCBmYWxzZSk7IC8vIHRydWUgaWYgdGhlIGJyb3dzZXIgaGFzIHRoZSBKYXp6IHBsdWdpblxuICBjb25maWcuc2V0KCdvZ2cnLCBmYWxzZSk7IC8vIHRydWUgaWYgV2ViQXVkaW8gc3VwcG9ydHMgb2dnXG4gIGNvbmZpZy5zZXQoJ21wMycsIGZhbHNlKTsgLy8gdHJ1ZSBpZiBXZWJBdWRpbyBzdXBwb3J0cyBtcDNcbiAgY29uZmlnLnNldCgnYml0cmF0ZV9tcDNfZW5jb2RpbmcnLCAxMjgpOyAvLyBkZWZhdWx0IGJpdHJhdGUgZm9yIGF1ZGlvIHJlY29yZGluZ3NcbiAgY29uZmlnLnNldCgnZGVidWdMZXZlbCcsIDQpOyAvLyAwID0gb2ZmLCAxID0gZXJyb3IsIDIgPSB3YXJuLCAzID0gaW5mbywgNCA9IGxvZ1xuICBjb25maWcuc2V0KCdwaXRjaCcsIDQ0MCk7IC8vIGJhc2ljIHBpdGNoIHRoYXQgaXMgdXNlZCB3aGVuIGdlbmVyYXRpbmcgc2FtcGxlc1xuICBjb25maWcuc2V0KCdidWZmZXJUaW1lJywgMzUwLzEwMDApOyAvLyB0aW1lIGluIHNlY29uZHMgdGhhdCBldmVudHMgYXJlIHNjaGVkdWxlZCBhaGVhZFxuICBjb25maWcuc2V0KCdhdXRvQWRqdXN0QnVmZmVyVGltZScsIGZhbHNlKTtcbiAgY29uZmlnLnNldCgnbm90ZU5hbWVNb2RlJywgJ3NoYXJwJyk7XG4gIGNvbmZpZy5zZXQoJ21pbmltYWxTb25nTGVuZ3RoJywgNjAwMDApOyAvL21pbGxpc1xuICBjb25maWcuc2V0KCdwYXVzZU9uQmx1cicsIGZhbHNlKTsgLy8gcGF1c2UgdGhlIEF1ZGlvQ29udGV4dCB3aGVuIHBhZ2Ugb3IgdGFiIGxvb3NlcyBmb2N1c1xuICBjb25maWcuc2V0KCdyZXN0YXJ0T25Gb2N1cycsIHRydWUpOyAvLyBpZiBzb25nIHdhcyBwbGF5aW5nIGF0IHRoZSB0aW1lIHRoZSBwYWdlIG9yIHRhYiBsb3N0IGZvY3VzLCBpdCB3aWxsIHN0YXJ0IHBsYXlpbmcgYXV0b21hdGljYWxseSBhcyBzb29uIGFzIHRoZSBwYWdlL3RhYiBnZXRzIGZvY3VzIGFnYWluXG4gIGNvbmZpZy5zZXQoJ2RlZmF1bHRQUFEnLCA5NjApO1xuICBjb25maWcuc2V0KCdvdmVycnVsZVBQUScsIHRydWUpO1xuICBjb25maWcuc2V0KCdwcmVjaXNpb24nLCAzKTsgLy8gbWVhbnMgZmxvYXQgd2l0aCBwcmVjaXNpb24gMywgZS5nLiAxMC40MzdcbiAgY29uZmlnLnNldCgnYWN0aXZlU29uZ3MnLCB7fSk7Ly8gdGhlIHNvbmdzIGN1cnJlbnRseSBsb2FkZWQgaW4gbWVtb3J5XG5cblxuICBkZWZhdWx0U29uZyA9IG5ldyBNYXAoKTtcbiAgZGVmYXVsdFNvbmcuc2V0KCdicG0nLCAxMjApO1xuICBkZWZhdWx0U29uZy5zZXQoJ3BwcScsIGNvbmZpZy5nZXQoJ2RlZmF1bHRQUFEnKSk7XG4gIGRlZmF1bHRTb25nLnNldCgnYmFycycsIDMwKTtcbiAgZGVmYXVsdFNvbmcuc2V0KCdsb3dlc3ROb3RlJywgMCk7XG4gIGRlZmF1bHRTb25nLnNldCgnaGlnaGVzdE5vdGUnLCAxMjcpO1xuICBkZWZhdWx0U29uZy5zZXQoJ25vbWluYXRvcicsIDQpO1xuICBkZWZhdWx0U29uZy5zZXQoJ2Rlbm9taW5hdG9yJywgNCk7XG4gIGRlZmF1bHRTb25nLnNldCgncXVhbnRpemVWYWx1ZScsIDgpO1xuICBkZWZhdWx0U29uZy5zZXQoJ2ZpeGVkTGVuZ3RoVmFsdWUnLCBmYWxzZSk7XG4gIGRlZmF1bHRTb25nLnNldCgncG9zaXRpb25UeXBlJywgJ2FsbCcpO1xuICBkZWZhdWx0U29uZy5zZXQoJ3VzZU1ldHJvbm9tZScsIGZhbHNlKTtcbiAgZGVmYXVsdFNvbmcuc2V0KCdhdXRvU2l6ZScsIHRydWUpO1xuICBkZWZhdWx0U29uZy5zZXQoJ2xvb3AnLCBmYWxzZSk7XG4gIGRlZmF1bHRTb25nLnNldCgncGxheWJhY2tTcGVlZCcsIDEpO1xuICBkZWZhdWx0U29uZy5zZXQoJ2F1dG9RdWFudGl6ZScsIGZhbHNlKTtcbiAgY29uZmlnLnNldCgnZGVmYXVsdFNvbmcnLCBkZWZhdWx0U29uZyk7XG5cblxuICAvLyBnZXQgYnJvd3NlciBhbmQgb3NcbiAgaWYobmF2aWdhdG9yICE9PSB1bmRlZmluZWQpe1xuICAgIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICAgIGlmKHVhLm1hdGNoKC8oaVBhZHxpUGhvbmV8aVBvZCkvZykpe1xuICAgICAgb3MgPSAnaW9zJztcbiAgICB9ZWxzZSBpZih1YS5pbmRleE9mKCdBbmRyb2lkJykgIT09IC0xKXtcbiAgICAgIG9zID0gJ2FuZHJvaWQnO1xuICAgIH1lbHNlIGlmKHVhLmluZGV4T2YoJ0xpbnV4JykgIT09IC0xKXtcbiAgICAgICBvcyA9ICdsaW51eCc7XG4gICAgfWVsc2UgaWYodWEuaW5kZXhPZignTWFjaW50b3NoJykgIT09IC0xKXtcbiAgICAgICBvcyA9ICdvc3gnO1xuICAgIH1lbHNlIGlmKHVhLmluZGV4T2YoJ1dpbmRvd3MnKSAhPT0gLTEpe1xuICAgICAgIG9zID0gJ3dpbmRvd3MnO1xuICAgIH1cblxuICAgIGlmKHVhLmluZGV4T2YoJ0Nocm9tZScpICE9PSAtMSl7XG4gICAgICAvLyBjaHJvbWUsIGNocm9taXVtIGFuZCBjYW5hcnlcbiAgICAgIGJyb3dzZXIgPSAnY2hyb21lJztcblxuICAgICAgaWYodWEuaW5kZXhPZignT1BSJykgIT09IC0xKXtcbiAgICAgICAgYnJvd3NlciA9ICdvcGVyYSc7XG4gICAgICB9ZWxzZSBpZih1YS5pbmRleE9mKCdDaHJvbWl1bScpICE9PSAtMSl7XG4gICAgICAgIGJyb3dzZXIgPSAnY2hyb21pdW0nO1xuICAgICAgfVxuICAgIH1lbHNlIGlmKHVhLmluZGV4T2YoJ1NhZmFyaScpICE9PSAtMSl7XG4gICAgICBicm93c2VyID0gJ3NhZmFyaSc7XG4gICAgfWVsc2UgaWYodWEuaW5kZXhPZignRmlyZWZveCcpICE9PSAtMSl7XG4gICAgICBicm93c2VyID0gJ2ZpcmVmb3gnO1xuICAgIH1lbHNlIGlmKHVhLmluZGV4T2YoJ1RyaWRlbnQnKSAhPT0gLTEpe1xuICAgICAgYnJvd3NlciA9ICdJbnRlcm5ldCBFeHBsb3Jlcic7XG4gICAgfVxuXG4gICAgaWYob3MgPT09ICdpb3MnKXtcbiAgICAgIGlmKHVhLmluZGV4T2YoJ0NyaU9TJykgIT09IC0xKXtcbiAgICAgICAgYnJvd3NlciA9ICdjaHJvbWUnO1xuICAgICAgfVxuICAgIH1cbiAgfWVsc2V7XG4gICAgLy8gVE9ETzogY2hlY2sgb3MgaGVyZSB3aXRoIE5vZGVqcycgcmVxdWlyZSgnb3MnKVxuICB9XG4gIGNvbmZpZy5zZXQoJ3VhJywgdWEpO1xuICBjb25maWcuc2V0KCdvcycsIG9zKTtcbiAgY29uZmlnLnNldCgnYnJvd3NlcicsIGJyb3dzZXIpO1xuXG4gIC8vIGNoZWNrIGlmIHdlIGhhdmUgYW4gYXVkaW8gY29udGV4dFxuICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gKFxuICAgIHdpbmRvdy5BdWRpb0NvbnRleHQgfHxcbiAgICB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0IHx8XG4gICAgd2luZG93Lm9BdWRpb0NvbnRleHQgfHxcbiAgICB3aW5kb3cubXNBdWRpb0NvbnRleHRcbiAgKTtcbiAgY29uZmlnLnNldCgnYXVkaW9fY29udGV4dCcsIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgIT09IHVuZGVmaW5lZCk7XG4gIGNvbmZpZy5zZXQoJ3JlY29yZF9hdWRpbycsIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgIT09IHVuZGVmaW5lZCk7XG5cblxuICAvLyBjaGVjayBpZiBhdWRpbyBjYW4gYmUgcmVjb3JkZWRcbiAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IChcbiAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhIHx8XG4gICAgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSB8fFxuICAgIG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHxcbiAgICBuYXZpZ2F0b3IubXNHZXRVc2VyTWVkaWFcbiAgKTtcbiAgY29uZmlnLnNldCgnYXVkaW9fY29udGV4dCcsIHdpbmRvdy5BdWRpb0NvbnRleHQgIT09IHVuZGVmaW5lZCk7XG5cblxuICAvLyBubyB3ZWJhdWRpbywgcmV0dXJuXG4gIGlmKGNvbmZpZy5nZXQoJ2F1ZGlvX2NvbnRleHQnKSA9PT0gZmFsc2Upe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGNoZWNrIGZvciBvdGhlciAnbW9kZXJuJyBBUEknc1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICB3aW5kb3cuQmxvYiA9IHdpbmRvdy5CbG9iIHx8IHdpbmRvdy53ZWJraXRCbG9iIHx8IHdpbmRvdy5tb3pCbG9iO1xuICAvL2NvbnNvbGUubG9nKCdpT1MnLCBvcywgY29udGV4dCwgd2luZG93LkJsb2IsIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpO1xuXG4gIHJldHVybiBjb25maWc7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29uZmlnOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGdldENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcyc7XG5cblxubGV0IHRpbWVkVGFza3MgPSBuZXcgTWFwKCk7XG5sZXQgcmVwZXRpdGl2ZVRhc2tzID0gbmV3IE1hcCgpO1xubGV0IHNjaGVkdWxlZFRhc2tzID0gbmV3IE1hcCgpO1xubGV0IHRhc2tzID0gbmV3IE1hcCgpO1xubGV0IGNvbmZpZyA9IGdldENvbmZpZygpO1xubGV0IGxhc3RUaW1lU3RhbXA7XG5cblxuZnVuY3Rpb24gaGVhcnRiZWF0KHRpbWVzdGFtcCl7XG4gIGxldCBub3cgPSBjb25maWcuZ2V0VGltZSgpO1xuXG4gIC8vIGZvciBpbnN0YW5jZTogdGhlIGNhbGxiYWNrIG9mIHNhbXBsZS51bnNjaGVkdWxlO1xuICBmb3IobGV0IFtrZXksIHRhc2tdIGluIHRpbWVkVGFza3Mpe1xuICAgIGlmKHRhc2sudGltZSA+PSBub3cpe1xuICAgICAgdGFzay5leGVjdXRlKG5vdyk7XG4gICAgICB0aW1lZFRhc2tzLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gZm9yIGluc3RhbmNlOiBzb25nLnVwZGF0ZSgpO1xuICBmb3IobGV0IHRhc2sgaW4gc2NoZWR1bGVkVGFza3MudmFsdWVzKXtcbiAgICB0YXNrKG5vdyk7XG4gIH1cblxuICAvLyBmb3IgaW5zdGFuY2U6IHNvbmcucHVsc2UoKTtcbiAgZm9yKGxldCB0YXNrIGluIHJlcGV0aXRpdmVUYXNrcy52YWx1ZXMpe1xuICAgIHRhc2sobm93KTtcbiAgfVxuLypcbiAgLy8gc2tpcCB0aGUgZmlyc3QgMTAgZnJhbWVzIGJlY2F1c2UgdGhleSB0ZW5kIHRvIGhhdmUgd2VpcmQgaW50ZXJ2YWxzXG4gIGlmKHIgPj0gMTApe1xuICAgIGxldCBkaWZmID0gKHRpbWVzdGFtcCAtIGxhc3RUaW1lU3RhbXApLzEwMDA7XG4gICAgc2VxdWVuY2VyLmRpZmYgPSBkaWZmO1xuICAgIC8vIGlmKHIgPCA0MCl7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGRpZmYpO1xuICAgIC8vICAgICByKys7XG4gICAgLy8gfVxuICAgIGlmKGRpZmYgPiBzZXF1ZW5jZXIuYnVmZmVyVGltZSAmJiBzZXF1ZW5jZXIuYXV0b0FkanVzdEJ1ZmZlclRpbWUgPT09IHRydWUpe1xuICAgICAgaWYoc2VxdWVuY2VyLmRlYnVnKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2FkanVzdGVkIGJ1ZmZlcnRpbWU6JyArIHNlcXVlbmNlci5idWZmZXJUaW1lICsgJyAtPiAnICsgIGRpZmYpO1xuICAgICAgfVxuICAgICAgc2VxdWVuY2VyLmJ1ZmZlclRpbWUgPSBkaWZmO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgcisrO1xuICB9XG4qL1xuICBsYXN0VGltZVN0YW1wID0gdGltZXN0YW1wO1xuICBzY2hlZHVsZWRUYXNrcy5jbGVhcigpO1xuXG4gIC8vc2V0VGltZW91dChoZWFydGJlYXQsIDEwMCk7XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGVhcnRiZWF0KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFzayh0eXBlLCBpZCwgdGFzayl7XG4gIGxldCBtYXAgPSB0YXNrcy5nZXQodHlwZSk7XG4gIG1hcC5zZXQoaWQsIHRhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayh0eXBlLCBpZCl7XG4gIGxldCBtYXAgPSB0YXNrcy5nZXQodHlwZSk7XG4gIG1hcC5kZWxldGUoaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKXtcbiAgdGFza3Muc2V0KCd0aW1lZCcsIHRpbWVkVGFza3MpO1xuICB0YXNrcy5zZXQoJ3JlcGV0aXRpdmUnLCByZXBldGl0aXZlVGFza3MpO1xuICB0YXNrcy5zZXQoJ3NjaGVkdWxlZCcsIHNjaGVkdWxlZFRhc2tzKTtcbiAgaGVhcnRiZWF0KCk7XG59IiwiLypcbiAgU2V0cyB1cCB0aGUgYmFzaWMgYXVkaW8gcm91dGluZywgdGVzdHMgd2hpY2ggYXVkaW8gZm9ybWF0cyBhcmUgc3VwcG9ydGVkIGFuZCBwYXJzZXMgdGhlIHNhbXBsZXMgZm9yIHRoZSBtZXRyb25vbWUgdGlja3MuXG4qL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7bG9nLCBpbmZvLCB3YXJuLCBlcnJvciwgcGFyc2VTYW1wbGVzfSBmcm9tICcuL3V0aWwnO1xuXG5sZXRcbiAgZGF0YSA9IHt9LFxuICBjb250ZXh0LFxuXG4gIHNvdXJjZSxcbiAgZ2Fpbk5vZGUsXG4gIGNvbXByZXNzb3I7XG5cbmNvbnN0XG4gIGNvbXByZXNzb3JQYXJhbXMgPSBbJ3RocmVzaG9sZCcsICdrbmVlJywgJ3JhdGlvJywgJ3JlZHVjdGlvbicsICdhdHRhY2snLCAncmVsZWFzZSddLFxuXG4gIGVtcHR5T2dnID0gJ1QyZG5Vd0FDQUFBQUFBQUFBQUJkeGQ0WEFBQUFBRGFTMGpRQkhnRjJiM0ppYVhNQUFBQUFBVVNzQUFBQUFBQUFnTHNBQUFBQUFBQzRBVTluWjFNQUFBQUFBQUFBQUFBQVhjWGVGd0VBQUFBYVhLK1FEejMvLy8vLy8vLy8vLy8vLy8vL01nTjJiM0ppYVhNdEFBQUFXR2x3YUM1UGNtY2diR2xpVm05eVltbHpJRWtnTWpBeE1ERXhNREVnS0ZOamFHRjFabVZ1ZFdkblpYUXBBQUFBQUFFRmRtOXlZbWx6SDBKRFZnRUFBQUVBR0dOVUtVYVpVdEpLaVJsemxERkdtV0tTU29tbGhCWkNTSjF6RkZPcE9kZWNhNnk1dFNDRUVCcFRVQ2tGbVZLT1Vta1pZNUFwQlpsU0VFdEpKWFFTT2llZFl4QmJTY0hXbUd1TFFiWWNoQTJhVWt3cHhKUlNpa0lJR1ZPTUtjV1VVa3BDQnlWMERqcm1IRk9PU2loQnVKeHpxN1dXbG1PTHFYU1NTdWNrWkV4Q1NDbUZra29IcFZOT1FrZzFsdFpTS1IxelVsSnFRZWdnaEJCQ3RpQ0VEWUxRa0ZVQUFBRUF3RUFRR3JJS0FGQUFBQkNLb1JpS0FvU0dyQUlBTWdBQUJLQW9qdUlvamlNNWttTkpGaEFhc2dvQUFBSUFFQUFBd0hBVVNaRVV5YkVrUzlJc1M5TkVVVlY5MVRaVlZmWjFYZGQxWGRkMUlEUmtGUUFBQVFCQVNLZVpwUm9nd2d4a0dBZ05XUVVBSUFBQUFFWW93aEFEUWtOV0FRQUFBUUFBWWlnNWlDYTA1bnh6am9ObU9XZ3F4ZVowY0NMVjVrbHVLdWJtbkhQT09TZWJjOFk0NTV4emluSm1NV2dtdE9hY2N4S0RaaWxvSnJUbW5IT2V4T1pCYTZxMDVweHp4am1uZzNGR0dPZWNjNXEwNWtGcU50Ym1uSE1XdEtZNWFpN0Y1cHh6SXVYbVNXMHUxZWFjYzg0NTU1eHp6am5ubkhPcUY2ZHpjRTQ0NTV4em92Ym1XbTVDRitlY2N6NFpwM3R6UWpqbm5IUE9PZWVjYzg0NTU1eHpndENRVlFBQUVBQUFRUmcyaG5HbklFaWZvNEVZUllocHlLUUgzYVBESkdnTWNncXBSNk9qa1ZMcUlKUlV4a2twblNBMFpCVUFBQWdBQUNHRUZGSklJWVVVVWtnaGhSUlNpQ0dHR0dMSUthZWNnZ29xcWFTaWlqTEtMTFBNTXNzc3M4d3k2N0N6empyc01NUVFRd3l0dEJKTFRiWFZXR090dWVlY2F3N1NXbW10dGRaS0thV1VVa29wQ0ExWkJRQ0FBQUFRQ0Jsa2tFRkdJWVVVVW9naHBweHl5aW1vb0FKQ1ExWUJBSUFBQUFJQUFBQTh5WE5FUjNSRVIzUkVSM1JFUjNSRXgzTThSNVJFU1pSRVNiUk15OVJNVHhWVjFaVmRXOVpsM2ZadFlSZDIzZmQxMy9kMTQ5ZUZZVm1XWlZtV1pWbVdaVm1XWlZtV1pWbUMwSkJWQUFBSUFBQ0FFRUlJSVlVVVVrZ2hwUmhqekRIbm9KTlFRaUEwWkJVQUFBZ0FJQUFBQU1CUkhNVnhKRWR5Sk1tU0xFbVRORXV6UE0zVFBFMzBSRkVVVGROVVJWZDBSZDIwUmRtVVRkZDBUZGwwVlZtMVhWbTJiZG5XYlYrV2JkLzNmZC8zZmQvM2ZkLzNmZC8zZFIwSURWa0ZBRWdBQU9oSWpxUklpcVJJanVNNGtpUUJvU0dyQUFBWkFBQUJBQ2lLb3ppTzQwaVNKRW1XcEVtZTVWbWlabXFtWjNxcXFBS2hJYXNBQUVBQUFBRUFBQUFBQUNpYTRpbW00aW1pNGptaUkwcWlaVnFpcG1xdUtKdXk2N3F1NjdxdTY3cXU2N3F1NjdxdTY3cXU2N3F1NjdxdTY3cXU2N3F1NjdxdTY3b3VFQnF5Q2dDUUFBRFFrUnpKa1J4SmtSUkprUnpKQVVKRFZnRUFNZ0FBQWdCd0RNZVFGTW14TEV2VFBNM1RQRTMwUkUvMFRFOFZYZEVGUWtOV0FRQ0FBQUFDQUFBQUFBQXdKTU5TTEVkek5FbVVWRXUxVkUyMVZFc1ZWVTlWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVTFUZE0wVFNBMFpDVUFBQVFBd0dLTndlVWdJU1VsNWQ0UXdoQ1RuakVtSWJWZUlRU1JrdDR4QmhXRG5qS2lESExlUXVNUWd4NElEVmtSQUVRQkFBREdJTWNRYzhnNVI2bVRFam5ucUhTVUd1Y2NwWTVTWnluRm1HTE5LSlhZVXF5TmM0NVNSNjJqbEdJc0xYYVVVbzJweGdJQUFBSWNBQUFDTElSQ1ExWUVBRkVBQUlReFNDbWtGR0tNT2FlY1E0d3A1NWh6aGpIbUhIT09PZWVnZEZJcTU1eDBUa3JFR0hPT09hZWNjMUk2SjVWelRrb25vUUFBZ0FBSEFJQUFDNkhRa0JVQlFKd0FnRUdTUEUveU5GR1VORThVUlZOMFhWRTBYZGZ5UE5YMFRGTlZQZEZVVlZOVmJkbFVWVm1XUE04MFBkTlVWYzgwVmRWVVZWazJWVldXUlZYVmJkTjFkZHQwVmQyV2JkdjNYVnNXZGxGVmJkMVVYZHMzVmRmMlhkbjJmVm5XZFdQeVBGWDFUTk4xUGROMFpkVjFiVnQxWFYzM1RGT1dUZGVWWmROMWJkdVZaVjEzWmRuM05kTjBYZE5WWmRsMFhkbDJaVmUzWFZuMmZkTjFoZCtWWlY5WFpWa1lkbDMzaFZ2WGxlVjBYZDFYWlZjM1ZsbjJmVnZYaGVIV2RXR1pQRTlWUGROMFhjODBYVmQxWFY5WFhkZldOZE9VWmROMWJkbFVYVmwyWmRuM1hWZldkYzgwWmRsMFhkczJYVmVXWFZuMmZWZVdkZDEwWFY5WFpWbjRWVmYyZFZuWGxlSFdiZUUzWGRmM1ZWbjJoVmVXZGVIV2RXRzVkVjBZUGxYMWZWTjJoZUYwWmQvWGhkOVpibDA0bHRGMWZXR1ZiZUZZWlZrNWZ1RllsdDMzbFdWMFhWOVliZGtZVmxrV2hsLzRuZVgyZmVONGRWMFpidDNuekxydkRNZnZwUHZLMDlWdFk1bDkzVmxtWDNlTzRSZzZ2L0RqcWFxdm02NHJES2NzQzcvdDY4YXorNzZ5aks3cis2b3NDNzhxMjhLeDY3N3ovTDZ3TEtQcytzSnF5OEt3MnJZeDNMNXVMTDl3SE10cjY4b3g2NzVSdG5WOFgzZ0t3L04wZFYxNVpsM0g5blYwNDBjNGZzb0FBSUFCQndDQUFCUEtRS0VoS3dLQU9BRUFqeVNKb21SWm9paFpsaWlLcHVpNm9taTZycVJwcHFscG5tbGFtbWVhcG1tcXNpbWFyaXhwbW1sYW5tYWFtcWVacG1pYXJtdWFwcXlLcGluTHBtcktzbW1hc3V5NnNtMjdybXpib21uS3NtbWFzbXlhcGl5N3NxdmJydXpxdXFSWnBxbDVubWxxbm1lYXBtcktzbW1hcnF0NW5tcDZubWlxbmlpcXFtcXFxcTJxcWl4Ym5tZWFtdWlwcGllS3FtcXFwcTJhcWlyTHBxcmFzbW1xdG15cXFtMjdxdXo2c20zcnVtbXFzbTJxcGkyYnFtcmJydXpxc2l6YnVpOXBtbWxxbm1lYW11ZVpwbW1hc215YXFpdGJucWVhbmlpcXF1YUpwbXFxcWl5YnBxcktsdWVacWllS3F1cUpubXVhcWlyTHBtcmFxbW1hdG15cXFpMmJwaXJMcm0zN3Z1dktzbTZxcW15YnFtcnJwbXJLc216THZ1L0txdTZLcGluTHBxcmFzbW1xc2kzYnN1L0xzcXo3b21uS3NtbXFzbTJxcWk3THNtMGJzMno3dW1pYXNtMnFwaTJicWlyYnNpMzd1aXpidXUvS3JtK3JxcXpyc2kzN3V1NzZybkRydWpDOHNtejdxcXo2dWl2YnVtL3JNdHYyZlVUVGxHVlROVzNiVkZWWmRtWFo5bVhiOW4zUk5HMWJWVlZiTmszVnRtVlo5bjFadG0xaE5FM1pObFZWMWszVnRHMVpsbTFodG1YaGRtWFp0MlZiOW5YWGxYVmYxMzNqMTJYZDVycXk3Y3V5cmZ1cXEvcTI3dnZDY091dThBb0FBQmh3QUFBSU1LRU1GQnF5RWdDSUFnQUFqR0dNTVFpTlVzNDVCNkZSeWpubklHVE9RUWdobGN3NUNDR1VramtIb1pTVU11Y2dsSkpTQ0tHVWxGb0xJWlNVVW1zRkFBQVVPQUFBQk5pZ0tiRTRRS0VoS3dHQVZBQUFnK05ZbHVlWm9tcmFzbU5KbmllS3FxbXF0dTFJbHVlSm9tbXFxbTFibmllS3BxbXFydXZybXVlSm9tbXFxdXZxdW1pYXBxbXFydXU2dWk2YW9xbXFxdXU2c3E2YnBxcXFyaXU3c3V6cnBxcXFxdXZLcml6N3dxcTZyaXZMc20zcndyQ3FydXZLc216YnRtL2N1cTdydnUvN3dwR3Q2N291L01JeERFY0JBT0FKRGdCQUJUYXNqbkJTTkJaWWFNaEtBQ0FEQUlBd0JpR0RFRUlHSVlTUVVrb2hwWlFTQUFBdzRBQUFFR0JDR1NnMFpFVUFFQ2NBQUJoREthU1VVa29wcFpSU1NpbWxsRkpLS2FXVVVrb3BwWlJTU2ltbGxGSklLYVdVVWtvcHBaUlNTaW1sbEZKS0thV1VVa29wcFpSU1NpbWxsRkpLS2FXVVVrb3BwWlJTU2ltbGxGSktxYVNVVWtvcHBaUlNTaW1sbEZKS0thV1VVa29wcFpSU1NpbWxsRkpLS2FXVVVrb3BwWlJTU2ltbGxGSktLYVdVVWtvcHBaUlNTaW1sbEZKS0thV1VVa29wcFpSU1NpbWxsRkpLS2FXVVVrb3BwWlJTU2ltbGxGSktLYVdVVWtvcHBaUlNTaW1sbEZKS0thV1VVa29wcFpSU1NpbWxsRkpLS2FXVVVrb3BwWlJTU2ltbGxGSktLYVdVVWtvcHBaUlNTaW1sbEZKS0thV1VVa29wcFpSU1NpbWxsRkpLS2FXVVVrb3BwWlJTU2ltbGxGSktLYVdVVWtvcHBaUlNTaW1sbEZKS0thV1VVa29wcFpSU1NpbWxsRkpLS2FXVVVrb3BwWlJTU2ltbGxGSktLWlZTU2ltbGxGSktLYVdVVWtvcHBaUlNTaW1sbEZKS0thV1VVa29wcFpSU1NpbWxsRkpLS2FXVVVrb3BwWlJTU2ltbGxGSktLYVdVVWtvcHBaUlNTaW1sbEZKS0thV1VVa29wcFpSU1NpbWxsRkpLS2FXVVVnb0FrSXB3QUpCNk1LRU1GQnF5RWdCSUJRQUFqRkZLS2NhY2d4QXg1aGhqMEVrb0tXTE1PY1ljbEpKUzVSeUVFRkpwTGJmS09RZ2hwTlJTYlpselVscUxNZVlZTStla3BCUmJ6VG1IVWxLTHNlYWFhKzZrdEZacnJqWG5XbHFyTmRlY2M4MjV0QlpycmpuWG5IUExNZGVjYzg0NTV4aHp6am5ubkhQT0JRRGdORGdBZ0I3WXNEckNTZEZZWUtFaEt3R0FWQUFBQWhtbEdIUE9PZWdRVW93NTV4eUVFQ0tGR0hQT09RZ2hWSXc1NXh4MEVFS29HSFBNT1FnaGhKQTU1eHlFRUVJSUlYTU9PdWdnaEJCQ0J4MkVFRUlJb1pUT1FRZ2hoQkJLS0NHRUVFSUlJWVFRT2dnaGhCQkNDQ0dFRUVJSUlZUlNTZ2doaEJCQ0NhR1VVQUFBWUlFREFFQ0FEYXNqbkJTTkJSWWFzaElBQUFJQWdCeVdvRkxPaEVHT1FZOE5RY3BSTXcxQ1REblJtV0pPYWpNVlU1QTVFSjEwRWhscVFkbGVNZ3NBQUlBZ0FDREFCQkFZSUNqNFFnaUlNUUFBUVlqTUVBbUZWYkRBb0F3YUhPWUJ3QU5FaEVRQWtKaWdTTHU0Z0M0RFhOREZYUWRDQ0VJUWdsZ2NRQUVKT0RqaGhpZmU4SVFibktCVFZPb2dBQUFBQUFBTUFPQUJBT0NnQUNJaW1xdXd1TURJME5qZzZQQUlBQUFBQUFBV0FQZ0FBRGcrZ0lpSTVpb3NMakF5TkRZNE9qd0NBQUFBQUFBQUFBQ0FnSUFBQUFBQUFFQUFBQUNBZ0U5bloxTUFCQUVBQUFBQUFBQUFYY1hlRndJQUFBQnEybnB4QWdFQkFBbz0nLFxuICBlbXB0eU1wMyA9ICcvL3NReEFBRHdBQUJwQUFBQUNBQUFEU0FBQUFFVEVGTlJUTXVPVGt1TlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZVPScsXG4gIGhpZ2h0aWNrID0gJ1VrbEdSa1FGQUFCWFFWWkZabTEwSUJBQUFBQUJBQUVBUkt3QUFJaFlBUUFDQUJBQVpHRjBZU0FGQUFDeC94Zi9kQURPQUN3QnNQM3ArNkgrekFHb0JPa0NDd0JYL0VINU92eGxBNGtKMndjU0FyVDlFL3V0K0hUMmV2VXg5OG42T0FGNUNDVU13UXZmQ09zSnhBeDBEU0lNRUFxOUJpQUIzdmh6N21Ma1Q5c1IxMzNZeE4yczVRTHYwdnJVQm53Um54dVFKZUVzU0RDaU1kOHlGUzhhS0ZJaG9oVXNDS2o2NHU2MjVPcmFBOUh1eVBuRWxjUCt3eHZKV3RXMjU2MzdWUTBqSFBnbkJURERNMW8wQ3pLTEsrOGh6aGdGRE96OFNlNEo0N0RZVnRHMHo1ZlFxOUxCMTJyZkErajk5cm9IQWhlbEl5TXdJamRUT3VVOG1qd0lPR294aENiNUU1My9qKzNrMy9mVFk4cFR3NHkvVHIrZXc4RE12ZHNrOFJjSFJSa1NLTzR5R1RrSFBrVS9yenp5TmNnc3JSOTREcC81citaczE3ek9uY29EeGhmRTM4V0x5bi9UZU9NaTlyMElSeGxSS0lRenlUbE9QS285eWptV01jb2tEUkxjL1k3cnVkdGR6dS9EMkwxSXUrMjdKY0czeVlyVkx1amwrM1VPWngxVUs1UTBxem1OUERrOFpqZWVNUG9qemhIKy9qTHRQZDVtMGhITEhzWUl3NVRFTU1uQTBqdmo4ZlNPQml3WEFTWmdNek04ZFVCR1FiSStyempwS2tJWnlnWlQ5UWZsY2RhUnlxWEN6NytWd1VQSDc4NHIzSzdzK3YwS0R1OGJ2eWVMTWI0M05qcmhPSW8wZFN2UUhpMFBuUDZpN292ZzNOVHh5NC9HZjhYOHlIL1FCdHZYNTVQMllnYjBGY1Vqc3k0TE5tSTVlamlYTTM4cjdpQzhGSndIUHZvazdkRGdRZGFKemxUS0lzb0Z6c3JWa3VBODdkLzZxQWk3RlEwaDlDbEtNTEV6M1RPck1CY3FZU0Q4RTlBRmQvZFM2a1RmNmRiVTBYblF2OUlIMk1YZlorbG45REVBRnd3ZEZ5OGdpaWI2S2F3cWVDaGdJL1ViSEJPVENaai92dlhlN0lubEZ1RE4zUDNiMGQxRjRnenBpZkcyK3U0RDdRdzFGZndibkNEK0lsZ2pXeUhMSFBNVm9nMm1CTDM3cXZQKzdOdm5ZdVR2NHJ2amZ1Yk42azN3cFBaMC9Xa0VPd3RpRVVzV2N4bStHbDRhT2hoaUZEQVBJd21iQXRuN1RQVnk3N3pxY2VmcjVZSG1IdWxsN2VueWZQbWNBSGdIZXcxUkVyOFZoaGQvRitBVjFSSjBEaWtKV1FOYy9aUDNlZktkN2h2czJ1cjQ2ckhzNXU4ZTlOLzQ4LzBoQS84SEZnd3VEMDRSU0JJUkVxc1FPZzdtQ3NzR01BSlcvWG40Ry9USzhMYnV6dTBJN3FUdm5QSnk5c1g2YlA4NEJMWUliQXdkRDg0UVl4RzdFT2NPREF4d0NGTUVBUUM5KzdQM1N2VFg4WEh3K3U5UjhLVHhJdlNvOStYN1ZRQ1VCSjBJTXd6aURqNFFMaEFHRDlVTXJnblRCWmNCUnYxditYdjJVZlMrOHRmeCt2RVM4N3owK3ZiMytaZjlaZ0VRQlNFSVVBcldDOGtNMlF5ekM1RUpFQWR2QkhnQlhQNW4rK3I0QXZkODlXajA3Zk13OUQzMUp2ZnArVWo5eFFEOUE4UUc1UWhYQ2xFTHJBc3ZDOXdKN2dkNkJXSUMzdjZPKzdUNFBQWk45RUh6V3ZOZjlQejFGdml0K3FMOXJRQ0hBd0VHL3dlQ0NaVUtGd3ZEQ25JSmNBY1FCV2NDYWY4Wi9DRDU1dmFCOWREMHdQU1A5VUwzbS9rNy9NeitKd0V5QXc4RnpBWTdDQnNKYVFrNUNXa0kyZ2F0QkNJQ1lmK2ovRnI2dmZpVjk4NzJzZlpQOTF6NHAvbFIrM0g5emY4OUFyb0VGQWZqQ1AwSmN3bzhDakFKZFFkZ0JTRURrZ0RRL1ZqN1pmblI5NVQyOGZVZDl2MzJWdmcyK25iOCsvNnhBV29FNEFiRENQNEpwQXFiQ3FRSjB3ZUVCZmdDVEFDVC9SMzdNL20rOTY3MklQWTY5Z2IzYWZoVyt0VDhxZitNQWowRmdnY3VDU2NLWEFyaUNjTUlFQWZ5QkpZQ0Z3Q1AvUno3QS9sNzkzejJGL1puOW1IMzdmamQraTM5eWY5cEF0MEVGQWZSQ05rSkdBcXJDWllJdmdaUEJKOEI2UDQvL00zNTB2ZHo5cS8xbGZVcTltejNSUG1pKzNIK2JnRlZCT1FHM3dnSENrd0swQW03Q0NBSENnV21BakFBJyxcbiAgbG93dGljayA9ICdVa2xHUmxRRkFBQlhRVlpGWm0xMElCQUFBQUFCQUFFQVJLd0FBSWhZQVFBQ0FCQUFaR0YwWVRBRkFBQjAvNXYrVS80VC8zZ0Ewd0ZUQXVVQitmOGQvblQ5MGYxcS91Yit0ZjQ2L21iLzh3RlFBOWdDN3dDZC9tcitGQUdSQTNjRTZ3SmYvaDM2ZXZtdis4di9Od1JIQlpVQzIvNjArLy81RXZ1Wi9hWC9iZ0ZPQXA4QXp2emg5d2Z6TFBGNjh6VDR5LzJCQXlnSWZRd2FFallZMHgzMUlyd2w4U09XSFZFU09nUGg5TmZwUmVGdDIybllIZGREMkJYY1plRGE1SW5xZ1BEeDluUCs2Z1M0Q0JZTG53MHpFUzBXWHh2NEhrY2dMaC8xRytFWDFSTnBENHdLaWdYSC82cjUvZk51N2xUcGorWnU1aEhvWE90TDcxYnlyL1FwOTFMNjR2Nk9CTzRKb1E1ekVza1UraFUxRmlRVmVSUDdFV2dQNFFyMEJJVCt0UGlkOUMzeTF2Q2g4RkR4SnZLMjh2dnl5L0xBOHBMelUvWFA5NXY2eHZ3NC91RC9SQUsyQlNrS2NnNkJFU2NUWkJNZUVxa1BUUXhqQ0tFRVZ3RmkvbnY3aC9ocDlhRHlBdkhQOE1meEx2TSs5UFgwdVBXMTlnLzRMZnI3L0M0QUtnTmFCWFFHeXdiMEJoSUhXUWZXQjFvSXpBanRDRjhJSHdkdEJha0RWd0tMQWVZQTh2OXcva2o4MS9uUTk0djI5L1hYOWJ6MWJQVVk5VXoxWi9hSCtIcjd5UDRNQWk0Rit3Y2ZDbllMTmd5ZkRQc01TdzBzRFVBTWZncmNCNUlFTXdGYi9pWDhUL3BUK08vMVgvTWY4Y2J2ck8rMThNTHl2ZlZQK1JmOXdnQW9CQ0VIcHduSUM1RU40UTVBRDN3TzFBeTBDcHNJdndidkJOY0NiUUFyL25YOE9mc2YrdmI0bXZkYTlyajF6L1dYOXBMM2EvaEgrWlg2Ui93bi92UC9lUUVTQS9BRSt3WURDY3dLRkF5UERDa01GUXVTQ2U0SFZRYlNCSFFEQ3dJOEFOTDlKUHVZK0hYMjh2VHE4MlB6ZFBNVjlBejFNZlo0OXpENWdmdHgvc1FCQlFYTEI4Y0ovZ3FwQ3c4TWlnd1dEWEVOWFEyckREVUw3UWdEQnN3Q2R2OFMvSzc0V1BWazhoWHdvdTRQN212dTErOVQ4cHoxVXZsaS9ab0J3Z1dSQ2NzTVBnL0NFRVFSNFJEQUR3b085d3VzQ1ZNSDRBUlNBcG4vdWZ6ZCtXajNidlg3OHh6engvTDY4cXp6MXZTRDlxWDRHZnZkL2MwQWh3Ty9CV3dIbWdodkNRRUtWUW9uQ2xzSkN3aUlCaDBGMGdPZ0FtMEJPd0F4LzAzK1hQMGcvTGI2Y1BtWCtGLzR2ZmgrK1RINnMvb3MrNy83Y3Z3TC9aejlYUDVPLzNJQTNBRjlBenNGOWdhVUNBQUtIZ3VlQ3pjTDl3bnRCM3NGNHdJekFJMzk2ZnAxK0d2Mkl2V245TjMwcC9YaTltNzRHL3J1KzlQOWsvOGFBWUVDMUFNVEJTSUcwd1l1QjFnSGtnY0FDR0VJU0FoVEJ6RUZXQUt0LzVMOTJmdVUrdlg1MGZtZitTUDVpL2diK0JmNG12aXYrU3I3a3Z5Yi9VaityLzRYLzhyLytnQ2lBbzBFVUFhUkJ6d0lTd2pxQjNJSEdRZkNCdjhGcGdUTUFwUUFLZjY3KzVuNS92Zm45anoyeVBWbjlTTDFSUFhxOVNQM0R2bXIrNmYrc1FHS0JBY0grd2hPQ2gwTGF3czNDMjhLTEFtREI1QUZmUU5vQVZQL1p2M2UrN1A2c2ZuTCtDdjR2UGVNOTViMzdmZVYrSm41MVBvcS9MTDltditZQVZZRDNnUXVCbWNIU0Fpa0NJRUk3QWYrQnVFRm5nUVhBMXNCdi85di9wZjlNUDNXL0ZqOHEvc1IrNkg2VS9vMyttUDZ5L3BOKy9mN3h2eWUvV0grSmY5bUFENENRQVFKQmlzSHRnZjZCdzBJOFFkc0Ixc0d5d1Q0QWdnQkNQL28vS1g2bVBnMTk1NzJqZmF6OXVmMlMvY00rRTM1RS90Vy9hZi81d0gxQThBRktnZmtCL0FIZ3dmeEJsQUdnUVZJQk1NQ0p3R3MvNDMrdlAwaS9acjhMZnpsKzlINzZmdmkrOWY3NWZzZi9JbjhCUDEwL2VqOWNmNE8vN2YvZEFBY0FhVUJFZ0tNQWhnRHBBTUVCQ0VFRHdUZkEzSUR4UUw4QVNvQlV3Q0cvODcrSi82aC9ScjlwUHhrL0diOG9Qd0ovWEg5dy8zOS9VRCtxUDQxLzlEL1d3RGVBR3NCQWdLZEFoRURRUU5BQTBzRGJ3T1ZBNVlEVndQT0FoZ0NWQUdSQUE9PSc7XG5cblxuZnVuY3Rpb24gaW5pdEF1ZGlvKGN0eCl7XG4gIGNvbnRleHQgPSBjdHg7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3Qpe1xuICAgIGNvbnRleHQgPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dCgpO1xuICAgIGRhdGEuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICBpZihjb250ZXh0LmNyZWF0ZUdhaW5Ob2RlID09PSB1bmRlZmluZWQpe1xuICAgICAgY29udGV4dC5jcmVhdGVHYWluTm9kZSA9IGNvbnRleHQuY3JlYXRlR2FpbjtcbiAgICB9XG4gICAgLy8gY2hlY2sgZm9yIG9sZGVyIGltcGxlbWVudGF0aW9ucyBvZiBXZWJBdWRpb1xuICAgIHNvdXJjZSA9IGNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgZGF0YS5sZWdhY3kgPSBmYWxzZTtcbiAgICBpZihzb3VyY2Uuc3RhcnQgPT09IHVuZGVmaW5lZCl7XG4gICAgICBkYXRhLmxlZ2FjeSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gc2V0IHVwIHRoZSBlbGVtZW50YXJ5IGF1ZGlvIG5vZGVzXG4gICAgY29tcHJlc3NvciA9IGNvbnRleHQuY3JlYXRlRHluYW1pY3NDb21wcmVzc29yKCk7XG4gICAgY29tcHJlc3Nvci5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIGdhaW5Ob2RlID0gY29udGV4dC5jcmVhdGVHYWluTm9kZSgpO1xuICAgIGdhaW5Ob2RlLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDE7XG5cbiAgICBkYXRhLm1hc3RlckdhaW5Ob2RlID0gZ2Fpbk5vZGU7XG4gICAgZGF0YS5tYXN0ZXJDb21wcmVzc29yID0gY29tcHJlc3NvcjtcblxuICAgIHBhcnNlU2FtcGxlcyh7XG4gICAgICAnb2dnJzogZW1wdHlPZ2csXG4gICAgICAnbXAzJzogZW1wdHlNcDMsXG4gICAgICAnbG93dGljayc6IGxvd3RpY2ssXG4gICAgICAnaGlnaHRpY2snOiBoaWdodGlja1xuICAgIH0pLnRoZW4oXG4gICAgICBmdW5jdGlvbiBvbkZ1bGZpbGxlZChidWZmZXJzKXtcbiAgICAgICAgZGF0YS5vZ2cgPSBidWZmZXJzLm9nZyAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBkYXRhLm1wMyA9IGJ1ZmZlcnMubXAzICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGRhdGEubG93dGljayA9IGJ1ZmZlcnMubG93dGljaztcbiAgICAgICAgZGF0YS5oaWdodGljayA9IGJ1ZmZlcnMuaGlnaHRpY2s7XG4gICAgICAgIGlmKGRhdGEub2dnID09PSBmYWxzZSAmJiBkYXRhLm1wMyA9PT0gZmFsc2Upe1xuICAgICAgICAgIHJlamVjdCgnTm8gc3VwcG9ydCBmb3Igb2dnIG5vciBtcDMhJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiBvblJlamVjdGVkKCl7XG4gICAgICAgIHJlamVjdCgnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgaW5pdGlhbGl6aW5nIEF1ZGlvJyk7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG59XG5cblxuZGF0YS5zZXRNYXN0ZXJWb2x1bWUgPSBmdW5jdGlvbih2YWx1ZSA9IDAuNSl7XG4gIGlmKHZhbHVlID4gMSl7XG4gICAgaW5mbygnbWF4aW1hbCB2b2x1bWUgaXMgMS4wLCB2b2x1bWUgaXMgc2V0IHRvIDEuMCcpO1xuICB9XG4gIHZhbHVlID0gdmFsdWUgPCAwID8gMCA6IHZhbHVlID4gMSA/IDEgOiB2YWx1ZTtcbiAgZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHZhbHVlO1xufTtcblxuXG5kYXRhLmdldE1hc3RlclZvbHVtZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBnYWluTm9kZS5nYWluLnZhbHVlO1xufTtcblxuXG5kYXRhLmdldENvbXByZXNzaW9uUmVkdWN0aW9uID0gZnVuY3Rpb24oKXtcbiAgLy9jb25zb2xlLmxvZyhjb21wcmVzc29yKTtcbiAgcmV0dXJuIGNvbXByZXNzb3IucmVkdWN0aW9uLnZhbHVlO1xufTtcblxuXG5kYXRhLmVuYWJsZU1hc3RlckNvbXByZXNzb3IgPSBmdW5jdGlvbihmbGFnKXtcbiAgaWYoZmxhZyl7XG4gICAgZ2Fpbk5vZGUuZGlzY29ubmVjdCgwKTtcbiAgICBnYWluTm9kZS5jb25uZWN0KGNvbXByZXNzb3IpO1xuICAgIGNvbXByZXNzb3IuZGlzY29ubmVjdCgwKTtcbiAgICBjb21wcmVzc29yLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gIH1lbHNle1xuICAgIGNvbXByZXNzb3IuZGlzY29ubmVjdCgwKTtcbiAgICBnYWluTm9kZS5kaXNjb25uZWN0KDApO1xuICAgIGdhaW5Ob2RlLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gIH1cbn07XG5cblxuZGF0YS5jb25maWd1cmVNYXN0ZXJDb21wcmVzc29yID0gZnVuY3Rpb24oY2ZnKXtcbiAgLypcbiAgICAgIHJlYWRvbmx5IGF0dHJpYnV0ZSBBdWRpb1BhcmFtIHRocmVzaG9sZDsgLy8gaW4gRGVjaWJlbHNcbiAgICAgIHJlYWRvbmx5IGF0dHJpYnV0ZSBBdWRpb1BhcmFtIGtuZWU7IC8vIGluIERlY2liZWxzXG4gICAgICByZWFkb25seSBhdHRyaWJ1dGUgQXVkaW9QYXJhbSByYXRpbzsgLy8gdW5pdC1sZXNzXG4gICAgICByZWFkb25seSBhdHRyaWJ1dGUgQXVkaW9QYXJhbSByZWR1Y3Rpb247IC8vIGluIERlY2liZWxzXG4gICAgICByZWFkb25seSBhdHRyaWJ1dGUgQXVkaW9QYXJhbSBhdHRhY2s7IC8vIGluIFNlY29uZHNcbiAgICAgIHJlYWRvbmx5IGF0dHJpYnV0ZSBBdWRpb1BhcmFtIHJlbGVhc2U7IC8vIGluIFNlY29uZHNcbiAgKi9cbiAgbGV0IGksIHBhcmFtO1xuICBmb3IoaSA9IGNvbXByZXNzb3JQYXJhbXMubGVuZ3RoOyBpID49IDA7IGktLSl7XG4gICAgICBwYXJhbSA9IGNvbXByZXNzb3JQYXJhbXNbaV07XG4gICAgICBpZihjZmdbcGFyYW1dICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgIGNvbXByZXNzb3JbcGFyYW1dLnZhbHVlID0gY2ZnW3BhcmFtXTtcbiAgICAgIH1cbiAgfVxufTtcblxuXG5kYXRhLmdldEF1ZGlvQ29udGV4dCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuXG5kYXRhLmdldFRpbWUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gY29udGV4dC5jdXJyZW50VGltZTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEF1ZGlvO1xuXG5cbiIsIi8qXG4gIFJlcXVlc3RzIE1JREkgYWNjZXNzLCBxdWVyaWVzIGFsbCBpbnB1dHMgYW5kIG91dHB1dHMgYW5kIHN0b3JlcyB0aGVtIGluIGFscGhhYmV0aWNhbCBvcmRlclxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCB7bG9nLCBpbmZvLCB3YXJuLCBlcnJvciwgdHlwZVN0cmluZ30gZnJvbSAnLi91dGlsJztcbmltcG9ydCBNaWRpRXZlbnQgZnJvbSAnLi9taWRpX2V2ZW50JztcblxuXG5sZXQgZGF0YSA9IHt9O1xubGV0IGlucHV0cyA9IG5ldyBNYXAoKTtcbmxldCBvdXRwdXRzID0gbmV3IE1hcCgpO1xuXG5sZXQgc29uZ01pZGlFdmVudExpc3RlbmVyO1xubGV0IG1pZGlFdmVudExpc3RlbmVySWQgPSAwO1xuXG5mdW5jdGlvbiBpbml0TWlkaSgpe1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3Qpe1xuXG4gICAgbGV0IHRtcDtcblxuICAgIGlmKG5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2VzcyAhPT0gdW5kZWZpbmVkKXtcblxuICAgICAgbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzKCkudGhlbihcblxuICAgICAgICBmdW5jdGlvbiBvbkZ1bEZpbGxlZChtaWRpKXtcbiAgICAgICAgICBpZihtaWRpLl9qYXp6SW5zdGFuY2VzICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZGF0YS5qYXp6ID0gbWlkaS5famF6ekluc3RhbmNlc1swXS5fSmF6ei52ZXJzaW9uO1xuICAgICAgICAgICAgZGF0YS5taWRpID0gdHJ1ZTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRhdGEud2VibWlkaSA9IHRydWU7XG4gICAgICAgICAgICBkYXRhLm1pZGkgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIG9sZCBpbXBsZW1lbnRhdGlvbiBvZiBXZWJNSURJXG4gICAgICAgICAgaWYodHlwZW9mIG1pZGkuaW5wdXRzLnZhbHVlcyAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICByZWplY3QoJ1lvdSBicm93c2VyIGlzIHVzaW5nIGFuIG9sZCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgV2ViTUlESSBBUEksIHBsZWFzZSB1cGRhdGUgeW91ciBicm93c2VyLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy8gZ2V0IGlucHV0c1xuICAgICAgICAgIHRtcCA9IEFycmF5LmZyb20obWlkaS5pbnB1dHMudmFsdWVzKCkpO1xuXG4gICAgICAgICAgLy9zb3J0IHBvcnRzIGJ5IG5hbWUgYXNjZW5kaW5nXG4gICAgICAgICAgdG1wLnNvcnQoKGEsIGIpID0+IGEubmFtZS50b0xvd2VyQ2FzZSgpIDw9IGIubmFtZS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKTtcblxuICAgICAgICAgIGZvcihsZXQgcG9ydCBvZiB0bXApe1xuICAgICAgICAgICAgaW5wdXRzLnNldChwb3J0LmlkLCBwb3J0KTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8vIGdldCBvdXRwdXRzXG4gICAgICAgICAgdG1wID0gQXJyYXkuZnJvbShtaWRpLm91dHB1dHMudmFsdWVzKCkpO1xuXG4gICAgICAgICAgLy9zb3J0IHBvcnRzIGJ5IG5hbWUgYXNjZW5kaW5nXG4gICAgICAgICAgdG1wLnNvcnQoKGEsIGIpID0+IGEubmFtZS50b0xvd2VyQ2FzZSgpIDw9IGIubmFtZS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKTtcblxuICAgICAgICAgIGZvcihsZXQgcG9ydCBvZiB0bXApe1xuICAgICAgICAgICAgb3V0cHV0cy5zZXQocG9ydC5pZCwgcG9ydCk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvLyBvbmNvbm5lY3QgYW5kIG9uZGlzY29ubmVjdCBhcmUgbm90IHlldCBpbXBsZW1lbnRlZCBpbiBDaHJvbWUgYW5kIENocm9taXVtXG4gICAgICAgICAgbWlkaS5hZGRFdmVudExpc3RlbmVyKCdvbmNvbm5lY3QnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGxvZygnZGV2aWNlIGNvbm5lY3RlZCcsIGUpO1xuICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICAgIG1pZGkuYWRkRXZlbnRMaXN0ZW5lcignb25kaXNjb25uZWN0JywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBsb2coJ2RldmljZSBkaXNjb25uZWN0ZWQnLCBlKTtcbiAgICAgICAgICB9LCBmYWxzZSk7XG5cblxuICAgICAgICAgIC8vIGV4cG9ydFxuICAgICAgICAgIGRhdGEuaW5wdXRzID0gaW5wdXRzO1xuICAgICAgICAgIGRhdGEub3V0cHV0cyA9IG91dHB1dHM7XG5cbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0KGUpe1xuICAgICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgcmVqZWN0KCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSByZXF1ZXN0aW5nIE1JRElBY2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAvLyBicm93c2VycyB3aXRob3V0IFdlYk1JREkgQVBJXG4gICAgfWVsc2V7XG4gICAgICBkYXRhLm1pZGkgPSBmYWxzZTtcbiAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWlkaVNvbmcoc29uZyl7XG5cbiAgc29uZ01pZGlFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZSl7XG4gICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICBoYW5kbGVNaWRpTWVzc2FnZVNvbmcoc29uZywgZSwgdGhpcyk7XG4gIH07XG5cbiAgLy8gYnkgZGVmYXVsdCBhIHNvbmcgbGlzdGVucyB0byBhbGwgYXZhaWxhYmxlIG1pZGktaW4gcG9ydHNcbiAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24ocG9ydCl7XG4gICAgcG9ydC5hZGRFdmVudExpc3RlbmVyKCdtaWRpbWVzc2FnZScsIHNvbmdNaWRpRXZlbnRMaXN0ZW5lcik7XG4gICAgc29uZy5taWRpSW5wdXRzLnNldChwb3J0LmlkLCBwb3J0KTtcbiAgfSk7XG5cbiAgb3V0cHV0cy5mb3JFYWNoKGZ1bmN0aW9uKHBvcnQpe1xuICAgIHNvbmcubWlkaU91dHB1dHMuc2V0KHBvcnQuaWQsIHBvcnQpO1xuICB9KTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNaWRpSW5wdXRTb25nKHNvbmcsIGlkLCBmbGFnKXtcbiAgbGV0IGlucHV0ID0gaW5wdXRzLmdldChpZCk7XG5cbiAgaWYoaW5wdXQgPT09IHVuZGVmaW5lZCl7XG4gICAgd2Fybignbm8gbWlkaSBpbnB1dCB3aXRoIGlkJywgaWQsICdmb3VuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKGZsYWcgPT09IGZhbHNlKXtcbiAgICBzb25nLm1pZGlJbnB1dHMuZGVsZXRlKGlkKTtcbiAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdtaWRpbWVzc2FnZScsIHNvbmdNaWRpRXZlbnRMaXN0ZW5lcik7XG4gIH1lbHNle1xuICAgIHNvbmcubWlkaUlucHV0cy5zZXQoaWQsIGlucHV0KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtaWRpbWVzc2FnZScsIHNvbmdNaWRpRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBsZXQgdHJhY2tzID0gc29uZy50cmFja3M7XG4gIGZvcihsZXQgdHJhY2sgb2YgdHJhY2tzKXtcbiAgICB0cmFjay5zZXRNaWRpSW5wdXQoaWQsIGZsYWcpO1xuICB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWlkaU91dHB1dFNvbmcoc29uZywgaWQsIGZsYWcpe1xuICBsZXQgb3V0cHV0ID0gb3V0cHV0cy5nZXQoaWQpO1xuXG4gIGlmKG91dHB1dCA9PT0gdW5kZWZpbmVkKXtcbiAgICB3YXJuKCdubyBtaWRpIG91dHB1dCB3aXRoIGlkJywgaWQsICdmb3VuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKGZsYWcgPT09IGZhbHNlKXtcbiAgICBzb25nLm1pZGlPdXRwdXRzLmRlbGV0ZShpZCk7XG4gICAgbGV0IHRpbWUgPSBzb25nLnNjaGVkdWxlci5sYXN0RXZlbnRUaW1lICsgMTAwO1xuICAgIG91dHB1dC5zZW5kKFsweEIwLCAweDdCLCAweDAwXSwgdGltZSk7IC8vIHN0b3AgYWxsIG5vdGVzXG4gICAgb3V0cHV0LnNlbmQoWzB4QjAsIDB4NzksIDB4MDBdLCB0aW1lKTsgLy8gcmVzZXQgYWxsIGNvbnRyb2xsZXJzXG4gIH1lbHNle1xuICAgIHNvbmcubWlkaU91dHB1dHMuc2V0KGlkLCBvdXRwdXQpO1xuICB9XG5cbiAgbGV0IHRyYWNrcyA9IHNvbmcudHJhY2tzO1xuICBmb3IobGV0IHRyYWNrIG9mIHRyYWNrcyl7XG4gICAgdHJhY2suc2V0TWlkaU91dHB1dChpZCwgZmxhZyk7XG4gIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGhhbmRsZU1pZGlNZXNzYWdlU29uZyhzb25nLCBtaWRpTWVzc2FnZUV2ZW50LCBpbnB1dCl7XG4gIGxldCBtaWRpRXZlbnQgPSBuZXcgTWlkaUV2ZW50KHNvbmcudGlja3MsIC4uLm1pZGlNZXNzYWdlRXZlbnQuZGF0YSk7XG5cbiAgLy9jb25zb2xlLmxvZyhtaWRpTWVzc2FnZUV2ZW50LmRhdGEpO1xuXG4gIGxldCB0cmFja3MgPSBzb25nLnRyYWNrcztcbiAgZm9yKGxldCB0cmFjayBvZiB0cmFja3Mpe1xuICAgIC8vY29uc29sZS5sb2codHJhY2subWlkaUlucHV0cywgaW5wdXQpO1xuICAgIC8qXG4gICAgaWYobWlkaUV2ZW50LmNoYW5uZWwgPT09IHRyYWNrLmNoYW5uZWwgfHwgdHJhY2suY2hhbm5lbCA9PT0gMCB8fCB0cmFjay5jaGFubmVsID09PSAnYW55Jyl7XG4gICAgICBoYW5kbGVNaWRpTWVzc2FnZVRyYWNrKG1pZGlFdmVudCwgdHJhY2spO1xuICAgIH1cbiAgICAqL1xuICAgIC8vIGxpa2UgaW4gQ3ViYXNlLCBtaWRpIGV2ZW50cyBmcm9tIGFsbCBkZXZpY2VzLCBzZW50IG9uIGFueSBtaWRpIGNoYW5uZWwgYXJlIGZvcndhcmRlZCB0byBhbGwgdHJhY2tzXG4gICAgLy8gc2V0IHRyYWNrLm1vbml0b3IgdG8gZmFsc2UgaWYgeW91IGRvbid0IHdhbnQgdG8gcmVjZWl2ZSBtaWRpIGV2ZW50cyBvbiBhIGNlcnRhaW4gdHJhY2tcbiAgICAvLyBub3RlIHRoYXQgdHJhY2subW9uaXRvciBpcyBieSBkZWZhdWx0IHNldCB0byBmYWxzZSBhbmQgdGhhdCB0cmFjay5tb25pdG9yIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHRvIHRydWVcbiAgICAvLyBpZiB5b3UgYXJlIHJlY29yZGluZyBvbiB0aGF0IHRyYWNrXG4gICAgLy9jb25zb2xlLmxvZyh0cmFjay5tb25pdG9yLCB0cmFjay5pZCwgaW5wdXQuaWQpO1xuICAgIGlmKHRyYWNrLm1vbml0b3IgPT09IHRydWUgJiYgdHJhY2subWlkaUlucHV0cy5nZXQoaW5wdXQuaWQpICE9PSB1bmRlZmluZWQpe1xuICAgICAgaGFuZGxlTWlkaU1lc3NhZ2VUcmFjayhtaWRpRXZlbnQsIHRyYWNrLCBpbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGxpc3RlbmVycyA9IHNvbmcubWlkaUV2ZW50TGlzdGVuZXJzLmdldChtaWRpRXZlbnQudHlwZSk7XG4gIGlmKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKXtcbiAgICBmb3IobGV0IGxpc3RlbmVyIG9mIGxpc3RlbmVycyl7XG4gICAgICBsaXN0ZW5lcihtaWRpRXZlbnQsIGlucHV0KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGhhbmRsZU1pZGlNZXNzYWdlVHJhY2sodHJhY2ssIG1pZGlFdmVudCwgaW5wdXQpe1xuICBsZXQgc29uZyA9IHRyYWNrLnNvbmcsXG4gICAgbm90ZSwgbGlzdGVuZXJzLCBjaGFubmVsO1xuICAgIC8vZGF0YSA9IG1pZGlNZXNzYWdlRXZlbnQuZGF0YSxcbiAgICAvL21pZGlFdmVudCA9IGNyZWF0ZU1pZGlFdmVudChzb25nLnRpY2tzLCBkYXRhWzBdLCBkYXRhWzFdLCBkYXRhWzJdKTtcblxuICAvL21pZGlFdmVudC5zb3VyY2UgPSBtaWRpTWVzc2FnZUV2ZW50LnNyY0VsZW1lbnQubmFtZTtcbiAgLy9jb25zb2xlLmxvZyhtaWRpTWVzc2FnZUV2ZW50KVxuICAvL2NvbnNvbGUubG9nKCctLS0tPicsIG1pZGlFdmVudC50eXBlKTtcblxuICAvLyBhZGQgdGhlIGV4YWN0IHRpbWUgb2YgdGhpcyBldmVudCBzbyB3ZSBjYW4gY2FsY3VsYXRlIGl0cyB0aWNrcyBwb3NpdGlvblxuICBtaWRpRXZlbnQucmVjb3JkTWlsbGlzID0gY29udGV4dC5jdXJyZW50VGltZSAqIDEwMDA7IC8vIG1pbGxpc1xuICBtaWRpRXZlbnQuc3RhdGUgPSAncmVjb3JkZWQnO1xuXG4gIGlmKG1pZGlFdmVudC50eXBlID09PSAxNDQpe1xuICAgIG5vdGUgPSBjcmVhdGVNaWRpTm90ZShtaWRpRXZlbnQpO1xuICAgIHRyYWNrLnJlY29yZGluZ05vdGVzW21pZGlFdmVudC5kYXRhMV0gPSBub3RlO1xuICAgIC8vdHJhY2suc29uZy5yZWNvcmRpbmdOb3Rlc1tub3RlLmlkXSA9IG5vdGU7XG4gIH1lbHNlIGlmKG1pZGlFdmVudC50eXBlID09PSAxMjgpe1xuICAgIG5vdGUgPSB0cmFjay5yZWNvcmRpbmdOb3Rlc1ttaWRpRXZlbnQuZGF0YTFdO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBub3RlIGV4aXN0czogaWYgdGhlIHVzZXIgcGxheXMgbm90ZXMgb24gaGVyIGtleWJvYXJkIGJlZm9yZSB0aGUgbWlkaSBzeXN0ZW0gaGFzXG4gICAgLy8gYmVlbiBmdWxseSBpbml0aWFsaXplZCwgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSBmaXJzdCBpbmNvbWluZyBtaWRpIGV2ZW50IGlzIGEgTk9URSBPRkYgZXZlbnRcbiAgICBpZihub3RlID09PSB1bmRlZmluZWQpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub3RlLmFkZE5vdGVPZmYobWlkaUV2ZW50KTtcbiAgICBkZWxldGUgdHJhY2sucmVjb3JkaW5nTm90ZXNbbWlkaUV2ZW50LmRhdGExXTtcbiAgICAvL2RlbGV0ZSB0cmFjay5zb25nLnJlY29yZGluZ05vdGVzW25vdGUuaWRdO1xuICB9XG5cbiAgLy9jb25zb2xlLmxvZyhzb25nLnByZXJvbGwsIHNvbmcucmVjb3JkaW5nLCB0cmFjay5yZWNvcmRFbmFibGVkKTtcblxuICBpZigoc29uZy5wcmVyb2xsaW5nIHx8IHNvbmcucmVjb3JkaW5nKSAmJiB0cmFjay5yZWNvcmRFbmFibGVkID09PSAnbWlkaScpe1xuICAgIGlmKG1pZGlFdmVudC50eXBlID09PSAxNDQpe1xuICAgICAgdHJhY2suc29uZy5yZWNvcmRlZE5vdGVzLnB1c2gobm90ZSk7XG4gICAgfVxuICAgIHRyYWNrLnJlY29yZFBhcnQuYWRkRXZlbnQobWlkaUV2ZW50KTtcbiAgICAvLyBzb25nLnJlY29yZGVkRXZlbnRzIGlzIHVzZWQgaW4gdGhlIGtleSBlZGl0b3JcbiAgICB0cmFjay5zb25nLnJlY29yZGVkRXZlbnRzLnB1c2gobWlkaUV2ZW50KTtcbiAgfWVsc2UgaWYodHJhY2suZW5hYmxlUmV0cm9zcGVjdGl2ZVJlY29yZGluZyl7XG4gICAgdHJhY2sucmV0cm9zcGVjdGl2ZVJlY29yZGluZy5wdXNoKG1pZGlFdmVudCk7XG4gIH1cblxuICAvLyBjYWxsIGFsbCBtaWRpIGV2ZW50IGxpc3RlbmVyc1xuICBsaXN0ZW5lcnMgPSB0cmFjay5taWRpRXZlbnRMaXN0ZW5lcnNbbWlkaUV2ZW50LnR5cGVdO1xuICBpZihsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCl7XG4gICAgb2JqZWN0Rm9yRWFjaChsaXN0ZW5lcnMsIGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICAgIGxpc3RlbmVyKG1pZGlFdmVudCwgaW5wdXQpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbm5lbCA9IHRyYWNrLmNoYW5uZWw7XG4gIGlmKGNoYW5uZWwgPT09ICdhbnknIHx8IGNoYW5uZWwgPT09IHVuZGVmaW5lZCB8fCBpc05hTihjaGFubmVsKSA9PT0gdHJ1ZSl7XG4gICAgY2hhbm5lbCA9IDA7XG4gIH1cblxuICBvYmplY3RGb3JFYWNoKHRyYWNrLm1pZGlPdXRwdXRzLCBmdW5jdGlvbihvdXRwdXQpe1xuICAgIC8vY29uc29sZS5sb2coJ21pZGkgb3V0Jywgb3V0cHV0LCBtaWRpRXZlbnQudHlwZSk7XG4gICAgaWYobWlkaUV2ZW50LnR5cGUgPT09IDEyOCB8fCBtaWRpRXZlbnQudHlwZSA9PT0gMTQ0IHx8IG1pZGlFdmVudC50eXBlID09PSAxNzYpe1xuICAgICAgLy9jb25zb2xlLmxvZyhtaWRpRXZlbnQudHlwZSwgbWlkaUV2ZW50LmRhdGExLCBtaWRpRXZlbnQuZGF0YTIpO1xuICAgICAgb3V0cHV0LnNlbmQoW21pZGlFdmVudC50eXBlLCBtaWRpRXZlbnQuZGF0YTEsIG1pZGlFdmVudC5kYXRhMl0pO1xuICAgIC8vIH1lbHNlIGlmKG1pZGlFdmVudC50eXBlID09PSAxOTIpe1xuICAgIC8vICAgICBvdXRwdXQuc2VuZChbbWlkaUV2ZW50LnR5cGUgKyBjaGFubmVsLCBtaWRpRXZlbnQuZGF0YTFdKTtcbiAgICB9XG4gICAgLy9vdXRwdXQuc2VuZChbbWlkaUV2ZW50LnN0YXR1cyArIGNoYW5uZWwsIG1pZGlFdmVudC5kYXRhMSwgbWlkaUV2ZW50LmRhdGEyXSk7XG4gIH0pO1xuXG4gIC8vIEBUT0RPOiBtYXliZSBhIHRyYWNrIHNob3VsZCBiZSBhYmxlIHRvIHNlbmQgaXRzIGV2ZW50IHRvIGJvdGggYSBtaWRpLW91dCBwb3J0IGFuZCBhbiBpbnRlcm5hbCBoZWFydGJlYXQgc29uZz9cbiAgLy9jb25zb2xlLmxvZyh0cmFjay5yb3V0ZVRvTWlkaU91dCk7XG4gIGlmKHRyYWNrLnJvdXRlVG9NaWRpT3V0ID09PSBmYWxzZSl7XG4gICAgbWlkaUV2ZW50LnRyYWNrID0gdHJhY2s7XG4gICAgdHJhY2suaW5zdHJ1bWVudC5wcm9jZXNzRXZlbnQobWlkaUV2ZW50KTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGFkZE1pZGlFdmVudExpc3RlbmVyKC4uLmFyZ3MpeyAvLyBjYWxsZXIgY2FuIGJlIGEgdHJhY2sgb3IgYSBzb25nXG5cbiAgbGV0IGlkID0gbWlkaUV2ZW50TGlzdGVuZXJJZCsrO1xuICBsZXQgbGlzdGVuZXI7XG4gICAgdHlwZXMgPSB7fSxcbiAgICBpZHMgPSBbXSxcbiAgICBsb29wO1xuXG5cbiAgLy8gc2hvdWxkIEkgaW5saW5lIHRoaXM/XG4gIGxvb3AgPSBmdW5jdGlvbihhcmdzKXtcbiAgICBmb3IobGV0IGFyZyBvZiBhcmdzKXtcbiAgICAgIGxldCB0eXBlID0gdHlwZVN0cmluZyhhcmcpO1xuICAgICAgLy9jb25zb2xlLmxvZyh0eXBlKTtcbiAgICAgIGlmKHR5cGUgPT09ICdhcnJheScpe1xuICAgICAgICBsb29wKGFyZyk7XG4gICAgICB9ZWxzZSBpZih0eXBlID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgbGlzdGVuZXIgPSBhcmc7XG4gICAgICB9ZWxzZSBpZihpc05hTihhcmcpID09PSBmYWxzZSl7XG4gICAgICAgIGFyZyA9IHBhcnNlSW50KGFyZywgMTApO1xuICAgICAgICBpZihzZXF1ZW5jZXIuY2hlY2tFdmVudFR5cGUoYXJnKSAhPT0gZmFsc2Upe1xuICAgICAgICAgIHR5cGVzW2FyZ10gPSBhcmc7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHR5cGUgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgaWYoc2VxdWVuY2VyLmNoZWNrRXZlbnRUeXBlKGFyZykgIT09IGZhbHNlKXtcbiAgICAgICAgICBhcmcgPSBzZXF1ZW5jZXIubWlkaUV2ZW50TnVtYmVyQnlOYW1lKGFyZyk7XG4gICAgICAgICAgdHlwZXNbYXJnXSA9IGFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBsb29wKGFyZ3MsIDAsIGFyZ3MubGVuZ3RoKTtcbiAgLy9jb25zb2xlLmxvZygndHlwZXMnLCB0eXBlcywgJ2xpc3RlbmVyJywgbGlzdGVuZXIpO1xuXG4gIG9iamVjdEZvckVhY2godHlwZXMsIGZ1bmN0aW9uKHR5cGUpe1xuICAgIC8vY29uc29sZS5sb2codHlwZSk7XG4gICAgaWYob2JqLm1pZGlFdmVudExpc3RlbmVyc1t0eXBlXSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIG9iai5taWRpRXZlbnRMaXN0ZW5lcnNbdHlwZV0gPSB7fTtcbiAgICB9XG4gICAgb2JqLm1pZGlFdmVudExpc3RlbmVyc1t0eXBlXVtpZF0gPSBsaXN0ZW5lcjtcbiAgICBpZHMucHVzaCh0eXBlICsgJ18nICsgaWQpO1xuICB9KTtcblxuICAvL2NvbnNvbGUubG9nKG9iai5taWRpRXZlbnRMaXN0ZW5lcnMpO1xuICByZXR1cm4gaWRzLmxlbmd0aCA9PT0gMSA/IGlkc1swXSA6IGlkcztcbn1cblxuXG5mdW5jdGlvbiByZW1vdmVNaWRpRXZlbnRMaXN0ZW5lcihpZCwgb2JqKXtcbiAgdmFyIHR5cGU7XG4gIGlkID0gaWQuc3BsaXQoJ18nKTtcbiAgdHlwZSA9IGlkWzBdO1xuICBpZCA9IGlkWzFdO1xuICBkZWxldGUgb2JqLm1pZGlFdmVudExpc3RlbmVyc1t0eXBlXVtpZF07XG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlTWlkaUV2ZW50TGlzdGVuZXJzKCl7XG5cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRNaWRpOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtsb2csIGluZm8sIHdhcm4sIGVycm9yfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtnZXROb3RlTnVtYmVyfSBmcm9tICcuL25vdGUnO1xuaW1wb3J0IGNyZWF0ZVNhbXBsZSBmcm9tICcuL3NhbXBsZSc7XG5cbmV4cG9ydCBjbGFzcyBJbnN0cnVtZW50e1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5zYW1wbGVzRGF0YSA9IG5ldyBBcnJheSgxMjgpLmZpbGwoLTEpO1xuICAgIHRoaXMuc2FtcGxlc0RhdGEgPSB0aGlzLnNhbXBsZXNEYXRhLm1hcChmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIG5ldyBBcnJheSgxMjgpLmZpbGwoLTEpO1xuICAgIH0pO1xuICAgIHRoaXMuc2NoZWR1bGVkU2FtcGxlcyA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIHByb2Nlc3NFdmVudChldmVudCl7XG4gICAgaWYoZXZlbnQudHlwZSA9PT0gMTI4KXtcbiAgICAgIC8vIHN0b3Agc2FtcGxlXG4gICAgICBpZihldmVudC5taWRpTm90ZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGlkID0gZXZlbnQubWlkaU5vdGUuaWQ7XG4gICAgICBsZXQgc2FtcGxlID0gdGhpcy5zY2hlZHVsZWRTYW1wbGVzLmdldChpZCk7XG4gICAgICBzYW1wbGUuc3RvcChldmVudC50aW1lLCAoKSA9PiB0aGlzLnNjaGVkdWxlZFNhbXBsZXMuZGVsZXRlKGlkKSk7XG4gICAgfWVsc2UgaWYoZXZlbnQudHlwZSA9PT0gMTQ0KXtcbiAgICAgIC8vIHN0YXJ0IHNhbXBsZVxuICAgICAgaWYoZXZlbnQubWlkaU5vdGUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzYW1wbGVEYXRhID0gdGhpcy5zYW1wbGVzRGF0YVtldmVudC5ub3RlTnVtYmVyXVtldmVudC52ZWxvY2l0eV07XG4gICAgICBsZXQgc2FtcGxlID0gY3JlYXRlU2FtcGxlKHNhbXBsZURhdGEsIGV2ZW50KTtcbiAgICAgIHRoaXMuc2NoZWR1bGVkU2FtcGxlcy5zZXQoZXZlbnQubWlkaU5vdGUuaWQsIHNhbXBsZSk7XG4gICAgICBzYW1wbGUuc3RhcnQoKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgIEBwYXJhbSBub3RlSWQgY2FuIGJlIG5vdGUgbmFtZSAoQzQpIG9yIG5vdGUgbnVtYmVyICg2MClcbiAgICBAcGFyYW0gYXVkaW8gYnVmZmVyXG4gICAgQHBhcmFtIGNvbmZpZyAob3B0aW9uYWwpXG4gICAgICB7XG4gICAgICAgIHN1c3RhaW46IFtzdXN0YWluU3RhcnQsIHN1c3RhaW5FbmRdLCAvLyBvcHRpb25hbCwgaW4gbWlsbGlzXG4gICAgICAgIHJlbGVhc2U6IFtyZWxlYXNlRHVyYXRpb24sIHJlbGVhc2VFbnZlbG9wZV0sIC8vIG9wdGlvbmFsXG4gICAgICAgIHBhbjogcGFuUG9zaXRpb24gLy8gb3B0aW9uYWxcbiAgICAgICAgdmVsb2NpdHk6IFt2ZWxvY2l0eVN0YXJ0LCB2ZWxvY2l0eUVuZF0gLy8gb3B0aW9uYWwsIGZvciBtdWx0aS1sYXllcmVkIGluc3RydW1lbnRzXG4gICAgICB9XG4gICovXG4gIGFkZFNhbXBsZURhdGEobm90ZUlkLCBhdWRpb0J1ZmZlcixcbiAgICB7XG4gICAgICBzdXN0YWluID0gW2ZhbHNlLCBmYWxzZV0sXG4gICAgICByZWxlYXNlID0gW2ZhbHNlLCAnZGVmYXVsdCddLFxuICAgICAgcGFuID0gZmFsc2UsXG4gICAgICB2ZWxvY2l0eSA9IFswLCAxMjddXG4gICAgfSA9IHt9KXtcblxuICAgIGlmKGF1ZGlvQnVmZmVyIGluc3RhbmNlb2YgQXVkaW9CdWZmZXIgPT09IGZhbHNlKXtcbiAgICAgIHdhcm4oJ25vdCBhIHZhbGlkIEF1ZGlvQnVmZmVyIGluc3RhbmNlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IFtzdXN0YWluU3RhcnQsIHN1c3RhaW5FbmRdID0gc3VzdGFpbjtcbiAgICBsZXQgW3JlbGVhc2VEdXJhdGlvbiwgcmVsZWFzZUVudmVsb3BlXSA9IHJlbGVhc2U7XG4gICAgbGV0IFt2ZWxvY2l0eVN0YXJ0LCB2ZWxvY2l0eUVuZF0gPSB2ZWxvY2l0eTtcblxuICAgIGlmKHN1c3RhaW4ubGVuZ3RoICE9PSAyKXtcbiAgICAgIHN1c3RhaW5TdGFydCA9IHN1c3RhaW5FbmQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihyZWxlYXNlRHVyYXRpb24gPT09IGZhbHNlKXtcbiAgICAgIHJlbGVhc2VFbnZlbG9wZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGxvZyhzdXN0YWluU3RhcnQsIHN1c3RhaW5FbmQpO1xuICAgIC8vIGxvZyhyZWxlYXNlRHVyYXRpb24sIHJlbGVhc2VFbnZlbG9wZSk7XG4gICAgLy8gbG9nKHBhblBvc2l0aW9uKTtcbiAgICAvLyBsb2codmVsb2NpdHlTdGFydCwgdmVsb2NpdHlFbmQpO1xuXG4gICAgaWYoaXNOYU4obm90ZUlkKSl7XG4gICAgICBub3RlSWQgPSBnZXROb3RlTnVtYmVyKG5vdGVJZCk7XG4gICAgICBpZihpc05hTihub3RlSWQpKXtcbiAgICAgICAgd2Fybihub3RlSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2FtcGxlc0RhdGFbbm90ZUlkXS5maWxsKHtcbiAgICAgIG46IG5vdGVJZCxcbiAgICAgIGQ6IGF1ZGlvQnVmZmVyLFxuICAgICAgczE6IHN1c3RhaW5TdGFydCxcbiAgICAgIHMyOiBzdXN0YWluRW5kLFxuICAgICAgcjogcmVsZWFzZUR1cmF0aW9uLFxuICAgICAgZTogcmVsZWFzZUVudmVsb3BlLFxuICAgICAgcDogcGFuXG4gICAgfSwgdmVsb2NpdHlTdGFydCwgdmVsb2NpdHlFbmQgKyAxKTtcblxuICAgIC8vY29uc29sZS5sb2codGhpcy5zYW1wbGVzRGF0YVtub3RlSWRdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5zdHJ1bWVudCgpe1xuICByZXR1cm4gbmV3IEluc3RydW1lbnQoLi4uYXJndW1lbnRzKTtcbn0iLCIvKipcbiAgQHB1YmxpY1xuICBAY2xhc3MgTUlESUV2ZW50XG4gIEBwYXJhbSB0aW1lIHtpbnR9IHRoZSB0aW1lIHRoYXQgdGhlIGV2ZW50IGlzIHNjaGVkdWxlZFxuICBAcGFyYW0gdHlwZSB7aW50fSB0eXBlIG9mIE1JRElFdmVudCwgZS5nLiBOT1RFX09OLCBOT1RFX09GRiBvciwgMTQ0LCAxMjgsIGV0Yy5cbiAgQHBhcmFtIGRhdGExIHtpbnR9IGlmIHR5cGUgaXMgMTQ0IG9yIDEyODogbm90ZSBudW1iZXJcbiAgQHBhcmFtIFtkYXRhMl0ge2ludH0gaWYgdHlwZSBpcyAxNDQgb3IgMTI4OiB2ZWxvY2l0eVxuICBAcGFyYW0gW2NoYW5uZWxdIHtpbnR9IGNoYW5uZWxcblxuXG4gIEBleGFtcGxlXG4gIC8vIHBsYXlzIHRoZSBjZW50cmFsIGMgYXQgdmVsb2NpdHkgMTAwXG4gIGxldCBldmVudCA9IHNlcXVlbmNlci5jcmVhdGVNSURJRXZlbnQoMTIwLCBzZXF1ZW5jZXIuTk9URV9PTiwgNjAsIDEwMCk7XG5cbiAgLy8gcGFzcyBhcmd1bWVudHMgYXMgYXJyYXlcbiAgbGV0IGV2ZW50ID0gc2VxdWVuY2VyLmNyZWF0ZU1JRElFdmVudChbMTIwLCBzZXF1ZW5jZXIuTk9URV9PTiwgNjAsIDEwMF0pO1xuXG4qL1xuXG5cbid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQge2xvZywgaW5mbywgd2FybiwgZXJyb3IsIHR5cGVTdHJpbmd9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge2NyZWF0ZU5vdGV9IGZyb20gJy4vbm90ZS5qcyc7XG5cblxubGV0XG4gIG1pZGlFdmVudElkID0gMDtcblxuXG4vKlxuICBhcmd1bWVudHM6XG4gICAtIFt0aWNrcywgdHlwZSwgZGF0YTEsIGRhdGEyLCBjaGFubmVsXVxuICAgLSB0aWNrcywgdHlwZSwgZGF0YTEsIGRhdGEyLCBjaGFubmVsXG5cbiAgZGF0YTIgYW5kIGNoYW5uZWwgYXJlIG9wdGlvbmFsIGJ1dCBtdXN0IGJlIG51bWJlcnMgaWYgcHJvdmlkZWRcbiovXG5cbmV4cG9ydCBjbGFzcyBNSURJRXZlbnR7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3Mpe1xuICAgIGxldCBub3RlO1xuXG4gICAgdGhpcy5pZCA9ICdNJyArIG1pZGlFdmVudElkKysgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLmV2ZW50TnVtYmVyID0gbWlkaUV2ZW50SWQ7XG4gICAgdGhpcy50aW1lID0gMDtcbiAgICB0aGlzLm11dGVkID0gZmFsc2U7XG5cblxuICAgIGlmKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAvLyBieXBhc3MgY29udHJ1Y3RvciBmb3IgY2xvbmluZ1xuICAgICAgcmV0dXJuO1xuICAgIH1lbHNlIGlmKHR5cGVTdHJpbmcoYXJnc1swXSkgPT09ICdtaWRpbWVzc2FnZWV2ZW50Jyl7XG4gICAgICBpbmZvKCdtaWRpbWVzc2FnZWV2ZW50Jyk7XG4gICAgICByZXR1cm47XG4gICAgfWVsc2UgaWYodHlwZVN0cmluZyhhcmdzWzBdKSA9PT0gJ2FycmF5Jyl7XG4gICAgICAvLyBzdXBwb3J0IGZvciB1bi1zcHJlYWRlZCBwYXJhbWV0ZXJzXG4gICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgIGlmKHR5cGVTdHJpbmcoYXJnc1swXSkgPT09ICdhcnJheScpe1xuICAgICAgICAvLyBzdXBwb3J0IGZvciBwYXNzaW5nIHBhcmFtZXRlcnMgaW4gYW4gYXJyYXlcbiAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEsIGkpe1xuICAgICAgaWYoaXNOYU4oZGF0YSkgJiYgaSA8IDUpe1xuICAgICAgICBlcnJvcigncGxlYXNlIHByb3ZpZGUgbnVtYmVycyBmb3IgdGlja3MsIHR5cGUsIGRhdGExIGFuZCBvcHRpb25hbGx5IGZvciBkYXRhMiBhbmQgY2hhbm5lbCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy50aWNrcyA9IGFyZ3NbMF07XG4gICAgdGhpcy5zdGF0dXMgPSBhcmdzWzFdO1xuICAgIHRoaXMudHlwZSA9ICh0aGlzLnN0YXR1cyA+PiA0KSAqIDE2O1xuICAgIC8vY29uc29sZS5sb2codGhpcy50eXBlLCB0aGlzLnN0YXR1cyk7XG4gICAgaWYodGhpcy50eXBlID49IDB4ODAgJiYgdGhpcy50eXBlIDw9IDB4RTApe1xuICAgICAgLy90aGUgaGlnaGVyIDQgYml0cyBvZiB0aGUgc3RhdHVzIGJ5dGUgaXMgdGhlIGNvbW1hbmRcbiAgICAgIHRoaXMuY29tbWFuZCA9IHRoaXMudHlwZTtcbiAgICAgIC8vdGhlIGxvd2VyIDQgYml0cyBvZiB0aGUgc3RhdHVzIGJ5dGUgaXMgdGhlIGNoYW5uZWwgbnVtYmVyXG4gICAgICB0aGlzLmNoYW5uZWwgPSAodGhpcy5zdGF0dXMgJiAweEYpICsgMTsgLy8gZnJvbSB6ZXJvLWJhc2VkIHRvIDEtYmFzZWRcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMudHlwZSA9IHRoaXMuc3RhdHVzO1xuICAgICAgdGhpcy5jaGFubmVsID0gYXJnc1s0XSB8fCAxO1xuICAgIH1cblxuICAgIHRoaXMuc29ydEluZGV4ID0gdGhpcy50eXBlICsgdGhpcy50aWNrczsgLy8gbm90ZSBvZmYgZXZlbnRzIGNvbWUgYmVmb3JlIG5vdGUgb24gZXZlbnRzXG5cbiAgICBzd2l0Y2godGhpcy50eXBlKXtcbiAgICAgIGNhc2UgMHgwOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMHg4MDpcbiAgICAgICAgdGhpcy5kYXRhMSA9IGFyZ3NbMl07XG4gICAgICAgIG5vdGUgPSBjcmVhdGVOb3RlKHRoaXMuZGF0YTEpO1xuICAgICAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgICAgICB0aGlzLm5vdGVOYW1lID0gbm90ZS5mdWxsTmFtZTtcbiAgICAgICAgdGhpcy5ub3RlTnVtYmVyID0gbm90ZS5udW1iZXI7XG4gICAgICAgIHRoaXMub2N0YXZlID0gbm90ZS5vY3RhdmU7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gbm90ZS5mcmVxdWVuY3k7XG4gICAgICAgIHRoaXMuZGF0YTIgPSAwOy8vZGF0YVszXTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMuZGF0YTI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAweDkwOlxuICAgICAgICB0aGlzLmRhdGExID0gYXJnc1syXTsvL25vdGUgbnVtYmVyXG4gICAgICAgIHRoaXMuZGF0YTIgPSBhcmdzWzNdOy8vdmVsb2NpdHlcbiAgICAgICAgaWYodGhpcy5kYXRhMiA9PT0gMCl7XG4gICAgICAgICAgLy9pZiB2ZWxvY2l0eSBpcyAwLCB0aGlzIGlzIGEgTk9URSBPRkYgZXZlbnRcbiAgICAgICAgICB0aGlzLnR5cGUgPSAweDgwO1xuICAgICAgICB9XG4gICAgICAgIG5vdGUgPSBjcmVhdGVOb3RlKHRoaXMuZGF0YTEpO1xuICAgICAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgICAgICB0aGlzLm5vdGVOYW1lID0gbm90ZS5mdWxsTmFtZTtcbiAgICAgICAgdGhpcy5ub3RlTnVtYmVyID0gbm90ZS5udW1iZXI7XG4gICAgICAgIHRoaXMub2N0YXZlID0gbm90ZS5vY3RhdmU7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gbm90ZS5mcmVxdWVuY3k7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLmRhdGEyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMHg1MTpcbiAgICAgICAgdGhpcy5icG0gPSBhcmdzWzJdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMHg1ODpcbiAgICAgICAgdGhpcy5ub21pbmF0b3IgPSBhcmdzWzJdO1xuICAgICAgICB0aGlzLmRlbm9taW5hdG9yID0gYXJnc1szXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDB4QjA6Ly8gY29udHJvbCBjaGFuZ2VcbiAgICAgICAgdGhpcy5kYXRhMSA9IGFyZ3NbMl07XG4gICAgICAgIHRoaXMuZGF0YTIgPSBhcmdzWzNdO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJUeXBlID0gYXJnc1syXTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyVmFsdWUgPSBhcmdzWzNdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMHhDMDovLyBwcm9ncmFtIGNoYW5nZVxuICAgICAgICB0aGlzLmRhdGExID0gYXJnc1syXTtcbiAgICAgICAgdGhpcy5wcm9ncmFtTnVtYmVyID0gYXJnc1syXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDB4RDA6Ly8gY2hhbm5lbCBwcmVzc3VyZVxuICAgICAgICB0aGlzLmRhdGExID0gYXJnc1syXTtcbiAgICAgICAgdGhpcy5kYXRhMiA9IGFyZ3NbM107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAweEUwOi8vIHBpdGNoIGJlbmRcbiAgICAgICAgdGhpcy5kYXRhMSA9IGFyZ3NbMl07XG4gICAgICAgIHRoaXMuZGF0YTIgPSBhcmdzWzNdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMHgyRjpcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB3YXJuKCdub3QgYSByZWNvZ25pemVkIHR5cGUgb2YgbWlkaSBldmVudCEnKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgY2xvbmUoKXtcbiAgICBsZXQgZXZlbnQgPSBuZXcgTUlESUV2ZW50KCk7XG5cbiAgICBmb3IobGV0IHByb3BlcnR5IG9mIE9iamVjdC5rZXlzKHRoaXMpKXtcbiAgICAgIGlmKHByb3BlcnR5ICE9PSAnaWQnICYmIHByb3BlcnR5ICE9PSAnZXZlbnROdW1iZXInICYmIHByb3BlcnR5ICE9PSAnbWlkaU5vdGUnKXtcbiAgICAgICAgZXZlbnRbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV07XG4gICAgICB9XG4gICAgICBldmVudC5zb25nID0gdW5kZWZpbmVkO1xuICAgICAgZXZlbnQudHJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICBldmVudC50cmFja0lkID0gdW5kZWZpbmVkO1xuICAgICAgZXZlbnQucGFydCA9IHVuZGVmaW5lZDtcbiAgICAgIGV2ZW50LnBhcnRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG5cblxuXG4gIHRyYW5zcG9zZShzZW1pKXtcbiAgICBpZih0aGlzLnR5cGUgIT09IDB4ODAgJiYgdGhpcy50eXBlICE9PSAweDkwKXtcbiAgICAgIGVycm9yKCd5b3UgY2FuIG9ubHkgdHJhbnNwb3NlIG5vdGUgb24gYW5kIG5vdGUgb2ZmIGV2ZW50cycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vY29uc29sZS5sb2coJ3RyYW5zcG9zZScsIHNlbWkpO1xuICAgIGlmKHR5cGVTdHJpbmcoc2VtaSkgPT09ICdhcnJheScpe1xuICAgICAgbGV0IHR5cGUgPSBzZW1pWzBdO1xuICAgICAgaWYodHlwZSA9PT0gJ2hlcnR6Jyl7XG4gICAgICAgIC8vY29udmVydCBoZXJ0eiB0byBzZW1pXG4gICAgICB9ZWxzZSBpZih0eXBlID09PSAnc2VtaScgfHwgdHlwZSA9PT0gJ3NlbWl0b25lJyl7XG4gICAgICAgIHNlbWkgPSBzZW1pWzFdO1xuICAgICAgfVxuICAgIH1lbHNlIGlmKGlzTmFOKHNlbWkpID09PSB0cnVlKXtcbiAgICAgIGVycm9yKCdwbGVhc2UgcHJvdmlkZSBhIG51bWJlcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB0bXAgPSB0aGlzLmRhdGExICsgcGFyc2VJbnQoc2VtaSwgMTApO1xuICAgIGlmKHRtcCA8IDApe1xuICAgICAgdG1wID0gMDtcbiAgICB9ZWxzZSBpZih0bXAgPiAxMjcpe1xuICAgICAgdG1wID0gMTI3O1xuICAgIH1cbiAgICB0aGlzLmRhdGExID0gdG1wO1xuICAgIGxldCBub3RlID0gY3JlYXRlTm90ZSh0aGlzLmRhdGExKTtcbiAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgIHRoaXMubm90ZU5hbWUgPSBub3RlLmZ1bGxOYW1lO1xuICAgIHRoaXMubm90ZU51bWJlciA9IG5vdGUubnVtYmVyO1xuICAgIHRoaXMub2N0YXZlID0gbm90ZS5vY3RhdmU7XG4gICAgdGhpcy5mcmVxdWVuY3kgPSBub3RlLmZyZXF1ZW5jeTtcblxuICAgIGlmKHRoaXMubWlkaU5vdGUgIT09IHVuZGVmaW5lZCl7XG4gICAgICB0aGlzLm1pZGlOb3RlLnBpdGNoID0gdGhpcy5kYXRhMTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnN0YXRlICE9PSAnbmV3Jyl7XG4gICAgICB0aGlzLnN0YXRlID0gJ3RyYW5zcG9zZWQnO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cblxuXG4gIHNldFBpdGNoKHBpdGNoKXtcbiAgICBpZih0aGlzLnR5cGUgIT09IDB4ODAgJiYgdGhpcy50eXBlICE9PSAweDkwKXtcbiAgICAgIGVycm9yKCd5b3UgY2FuIG9ubHkgc2V0IHRoZSBwaXRjaCBvZiBub3RlIG9uIGFuZCBub3RlIG9mZiBldmVudHMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYodHlwZVN0cmluZyhwaXRjaCkgPT09ICdhcnJheScpe1xuICAgICAgbGV0IHR5cGUgPSBwaXRjaFswXTtcbiAgICAgIGlmKHR5cGUgPT09ICdoZXJ0eicpe1xuICAgICAgICAvL2NvbnZlcnQgaGVydHogdG8gcGl0Y2hcbiAgICAgIH1lbHNlIGlmKHR5cGUgPT09ICdzZW1pJyB8fCB0eXBlID09PSAnc2VtaXRvbmUnKXtcbiAgICAgICAgcGl0Y2ggPSBwaXRjaFsxXTtcbiAgICAgIH1cbiAgICB9ZWxzZSBpZihpc05hTihwaXRjaCkgPT09IHRydWUpe1xuICAgICAgZXJyb3IoJ3BsZWFzZSBwcm92aWRlIGEgbnVtYmVyJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhMSA9IHBhcnNlSW50KHBpdGNoLDEwKTtcbiAgICBsZXQgbm90ZSA9IGNyZWF0ZU5vdGUodGhpcy5kYXRhMSk7XG4gICAgdGhpcy5ub3RlID0gbm90ZTtcbiAgICB0aGlzLm5vdGVOYW1lID0gbm90ZS5mdWxsTmFtZTtcbiAgICB0aGlzLm5vdGVOdW1iZXIgPSBub3RlLm51bWJlcjtcbiAgICB0aGlzLm9jdGF2ZSA9IG5vdGUub2N0YXZlO1xuICAgIHRoaXMuZnJlcXVlbmN5ID0gbm90ZS5mcmVxdWVuY3k7XG5cbiAgICBpZih0aGlzLm1pZGlOb3RlICE9PSB1bmRlZmluZWQpe1xuICAgICAgdGhpcy5taWRpTm90ZS5waXRjaCA9IHRoaXMuZGF0YTE7XG4gICAgfVxuICAgIGlmKHRoaXMuc3RhdGUgIT09ICduZXcnKXtcbiAgICAgIHRoaXMuc3RhdGUgPSAndHJhbnNwb3NlZCc7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuXG5cbiAgbW92ZSh0aWNrcyl7XG4gICAgaWYoaXNOYU4odGlja3MpKXtcbiAgICAgIGVycm9yKCdwbGVhc2UgcHJvdmlkZSBhIG51bWJlcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRpY2tzICs9IHBhcnNlSW50KHRpY2tzLCAxMCk7XG4gICAgLy9AdG9kbzogc2V0IGR1cmF0aW9uIG9mIG1pZGkgbm90ZVxuICAgIGlmKHRoaXMuc3RhdGUgIT09ICduZXcnKXtcbiAgICAgIHRoaXMuc3RhdGUgPSAnbW92ZWQnO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cblxuXG4gIG1vdmVUbyguLi5wb3NpdGlvbil7XG5cbiAgICBpZihwb3NpdGlvblswXSA9PT0gJ3RpY2tzJyAmJiBpc05hTihwb3NpdGlvblsxXSkgPT09IGZhbHNlKXtcbiAgICAgIHRoaXMudGlja3MgPSBwYXJzZUludChwb3NpdGlvblsxXSwgMTApO1xuICAgIH1lbHNlIGlmKHRoaXMuc29uZyA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBtaWRpIGV2ZW50IGhhcyBub3QgYmVlbiBhZGRlZCB0byBhIHNvbmcgeWV0OyB5b3UgY2FuIG9ubHkgbW92ZSB0byB0aWNrcyB2YWx1ZXMnKTtcbiAgICB9ZWxzZXtcbiAgICAgIHBvc2l0aW9uID0gdGhpcy5zb25nLmdldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgIGlmKHBvc2l0aW9uID09PSBmYWxzZSl7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3dyb25nIHBvc2l0aW9uIGRhdGEnKTtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLnRpY2tzID0gcG9zaXRpb24udGlja3M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodGhpcy5zdGF0ZSAhPT0gJ25ldycpe1xuICAgICAgdGhpcy5zdGF0ZSA9ICdtb3ZlZCc7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuXG4gIHJlc2V0KGZyb21QYXJ0ID0gdHJ1ZSwgZnJvbVRyYWNrID0gdHJ1ZSwgZnJvbVNvbmcgPSB0cnVlKXtcblxuICAgIGlmKGZyb21QYXJ0KXtcbiAgICAgIHRoaXMucGFydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMucGFydElkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZihmcm9tVHJhY2spe1xuICAgICAgdGhpcy50cmFjayA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMudHJhY2tJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuY2hhbm5lbCA9IDA7XG4gICAgfVxuICAgIGlmKGZyb21Tb25nKXtcbiAgICAgIHRoaXMuc29uZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9ICdyZW1vdmVkJztcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cblxuICB1cGRhdGUoKXtcbiAgICBpZih0aGlzLnBhcnQgIT09IHVuZGVmaW5lZCl7XG4gICAgICB0aGlzLnBhcnQuX2NoYW5nZWRFdmVudHMuc2V0KHRoaXMuaWQsIHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTUlESUV2ZW50KCl7XG4gIHJldHVybiBuZXcgTUlESUV2ZW50KC4uLmFyZ3VtZW50cyk7XG59XG4iLCIvKlxuICBFeHRyYWN0cyBhbGwgbWlkaSBldmVudHMgZnJvbSBhIGJpbmFyeSBtaWRpIGZpbGUsIHVzZXMgbWlkaV9zdHJlYW0uanNcblxuICBiYXNlZCBvbjogaHR0cHM6Ly9naXRodWIuY29tL2dhc21hbi9qYXNtaWRcbiovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNyZWF0ZU1JRElTdHJlYW0gZnJvbSAnLi9taWRpX3N0cmVhbSc7XG5cbmxldFxuICBsYXN0RXZlbnRUeXBlQnl0ZSxcbiAgdHJhY2tOYW1lO1xuXG5cbmZ1bmN0aW9uIHJlYWRDaHVuayhzdHJlYW0pe1xuICBsZXQgaWQgPSBzdHJlYW0ucmVhZCg0LCB0cnVlKTtcbiAgbGV0IGxlbmd0aCA9IHN0cmVhbS5yZWFkSW50MzIoKTtcbiAgLy9jb25zb2xlLmxvZyhsZW5ndGgpO1xuICByZXR1cm57XG4gICAgJ2lkJzogaWQsXG4gICAgJ2xlbmd0aCc6IGxlbmd0aCxcbiAgICAnZGF0YSc6IHN0cmVhbS5yZWFkKGxlbmd0aCwgZmFsc2UpXG4gIH07XG59XG5cblxuZnVuY3Rpb24gcmVhZEV2ZW50KHN0cmVhbSl7XG4gIHZhciBldmVudCA9IHt9O1xuICB2YXIgbGVuZ3RoO1xuICBldmVudC5kZWx0YVRpbWUgPSBzdHJlYW0ucmVhZFZhckludCgpO1xuICBsZXQgZXZlbnRUeXBlQnl0ZSA9IHN0cmVhbS5yZWFkSW50OCgpO1xuICAvL2NvbnNvbGUubG9nKGV2ZW50VHlwZUJ5dGUsIGV2ZW50VHlwZUJ5dGUgJiAweDgwLCAxNDYgJiAweDBmKTtcbiAgaWYoKGV2ZW50VHlwZUJ5dGUgJiAweGYwKSA9PSAweGYwKXtcbiAgICAvKiBzeXN0ZW0gLyBtZXRhIGV2ZW50ICovXG4gICAgaWYoZXZlbnRUeXBlQnl0ZSA9PSAweGZmKXtcbiAgICAgIC8qIG1ldGEgZXZlbnQgKi9cbiAgICAgIGV2ZW50LnR5cGUgPSAnbWV0YSc7XG4gICAgICBsZXQgc3VidHlwZUJ5dGUgPSBzdHJlYW0ucmVhZEludDgoKTtcbiAgICAgIGxlbmd0aCA9IHN0cmVhbS5yZWFkVmFySW50KCk7XG4gICAgICBzd2l0Y2goc3VidHlwZUJ5dGUpe1xuICAgICAgICBjYXNlIDB4MDA6XG4gICAgICAgICAgZXZlbnQuc3VidHlwZSA9ICdzZXF1ZW5jZU51bWJlcic7XG4gICAgICAgICAgaWYobGVuZ3RoICE9PSAyKXtcbiAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBsZW5ndGggZm9yIHNlcXVlbmNlTnVtYmVyIGV2ZW50IGlzIDIsIGdvdCAnICsgbGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5udW1iZXIgPSBzdHJlYW0ucmVhZEludDE2KCk7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICBjYXNlIDB4MDE6XG4gICAgICAgICAgZXZlbnQuc3VidHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICBldmVudC50ZXh0ID0gc3RyZWFtLnJlYWQobGVuZ3RoKTtcbiAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIGNhc2UgMHgwMjpcbiAgICAgICAgICBldmVudC5zdWJ0eXBlID0gJ2NvcHlyaWdodE5vdGljZSc7XG4gICAgICAgICAgZXZlbnQudGV4dCA9IHN0cmVhbS5yZWFkKGxlbmd0aCk7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICBjYXNlIDB4MDM6XG4gICAgICAgICAgZXZlbnQuc3VidHlwZSA9ICd0cmFja05hbWUnO1xuICAgICAgICAgIGV2ZW50LnRleHQgPSBzdHJlYW0ucmVhZChsZW5ndGgpO1xuICAgICAgICAgIHRyYWNrTmFtZSA9IGV2ZW50LnRleHQ7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICBjYXNlIDB4MDQ6XG4gICAgICAgICAgZXZlbnQuc3VidHlwZSA9ICdpbnN0cnVtZW50TmFtZSc7XG4gICAgICAgICAgZXZlbnQudGV4dCA9IHN0cmVhbS5yZWFkKGxlbmd0aCk7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICBjYXNlIDB4MDU6XG4gICAgICAgICAgZXZlbnQuc3VidHlwZSA9ICdseXJpY3MnO1xuICAgICAgICAgIGV2ZW50LnRleHQgPSBzdHJlYW0ucmVhZChsZW5ndGgpO1xuICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgY2FzZSAweDA2OlxuICAgICAgICAgIGV2ZW50LnN1YnR5cGUgPSAnbWFya2VyJztcbiAgICAgICAgICBldmVudC50ZXh0ID0gc3RyZWFtLnJlYWQobGVuZ3RoKTtcbiAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIGNhc2UgMHgwNzpcbiAgICAgICAgICBldmVudC5zdWJ0eXBlID0gJ2N1ZVBvaW50JztcbiAgICAgICAgICBldmVudC50ZXh0ID0gc3RyZWFtLnJlYWQobGVuZ3RoKTtcbiAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIGNhc2UgMHgyMDpcbiAgICAgICAgICBldmVudC5zdWJ0eXBlID0gJ21pZGlDaGFubmVsUHJlZml4JztcbiAgICAgICAgICBpZihsZW5ndGggIT09IDEpe1xuICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIGxlbmd0aCBmb3IgbWlkaUNoYW5uZWxQcmVmaXggZXZlbnQgaXMgMSwgZ290ICcgKyBsZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50LmNoYW5uZWwgPSBzdHJlYW0ucmVhZEludDgoKTtcbiAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIGNhc2UgMHgyZjpcbiAgICAgICAgICBldmVudC5zdWJ0eXBlID0gJ2VuZE9mVHJhY2snO1xuICAgICAgICAgIGlmKGxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgbGVuZ3RoIGZvciBlbmRPZlRyYWNrIGV2ZW50IGlzIDAsIGdvdCAnICsgbGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIGNhc2UgMHg1MTpcbiAgICAgICAgICBldmVudC5zdWJ0eXBlID0gJ3NldFRlbXBvJztcbiAgICAgICAgICBpZihsZW5ndGggIT09IDMpe1xuICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIGxlbmd0aCBmb3Igc2V0VGVtcG8gZXZlbnQgaXMgMywgZ290ICcgKyBsZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50Lm1pY3Jvc2Vjb25kc1BlckJlYXQgPSAoXG4gICAgICAgICAgICAoc3RyZWFtLnJlYWRJbnQ4KCkgPDwgMTYpICtcbiAgICAgICAgICAgIChzdHJlYW0ucmVhZEludDgoKSA8PCA4KSArXG4gICAgICAgICAgICBzdHJlYW0ucmVhZEludDgoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICBjYXNlIDB4NTQ6XG4gICAgICAgICAgZXZlbnQuc3VidHlwZSA9ICdzbXB0ZU9mZnNldCc7XG4gICAgICAgICAgaWYobGVuZ3RoICE9PSA1KXtcbiAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBsZW5ndGggZm9yIHNtcHRlT2Zmc2V0IGV2ZW50IGlzIDUsIGdvdCAnICsgbGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgaG91ckJ5dGUgPSBzdHJlYW0ucmVhZEludDgoKTtcbiAgICAgICAgICBldmVudC5mcmFtZVJhdGUgPXtcbiAgICAgICAgICAgIDB4MDA6IDI0LCAweDIwOiAyNSwgMHg0MDogMjksIDB4NjA6IDMwXG4gICAgICAgICAgfVtob3VyQnl0ZSAmIDB4NjBdO1xuICAgICAgICAgIGV2ZW50LmhvdXIgPSBob3VyQnl0ZSAmIDB4MWY7XG4gICAgICAgICAgZXZlbnQubWluID0gc3RyZWFtLnJlYWRJbnQ4KCk7XG4gICAgICAgICAgZXZlbnQuc2VjID0gc3RyZWFtLnJlYWRJbnQ4KCk7XG4gICAgICAgICAgZXZlbnQuZnJhbWUgPSBzdHJlYW0ucmVhZEludDgoKTtcbiAgICAgICAgICBldmVudC5zdWJmcmFtZSA9IHN0cmVhbS5yZWFkSW50OCgpO1xuICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgY2FzZSAweDU4OlxuICAgICAgICAgIGV2ZW50LnN1YnR5cGUgPSAndGltZVNpZ25hdHVyZSc7XG4gICAgICAgICAgaWYobGVuZ3RoICE9PSA0KXtcbiAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBsZW5ndGggZm9yIHRpbWVTaWduYXR1cmUgZXZlbnQgaXMgNCwgZ290ICcgKyBsZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50Lm51bWVyYXRvciA9IHN0cmVhbS5yZWFkSW50OCgpO1xuICAgICAgICAgIGV2ZW50LmRlbm9taW5hdG9yID0gTWF0aC5wb3coMiwgc3RyZWFtLnJlYWRJbnQ4KCkpO1xuICAgICAgICAgIGV2ZW50Lm1ldHJvbm9tZSA9IHN0cmVhbS5yZWFkSW50OCgpO1xuICAgICAgICAgIGV2ZW50LnRoaXJ0eXNlY29uZHMgPSBzdHJlYW0ucmVhZEludDgoKTtcbiAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIGNhc2UgMHg1OTpcbiAgICAgICAgICBldmVudC5zdWJ0eXBlID0gJ2tleVNpZ25hdHVyZSc7XG4gICAgICAgICAgaWYobGVuZ3RoICE9PSAyKXtcbiAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBsZW5ndGggZm9yIGtleVNpZ25hdHVyZSBldmVudCBpcyAyLCBnb3QgJyArIGxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQua2V5ID0gc3RyZWFtLnJlYWRJbnQ4KHRydWUpO1xuICAgICAgICAgIGV2ZW50LnNjYWxlID0gc3RyZWFtLnJlYWRJbnQ4KCk7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICBjYXNlIDB4N2Y6XG4gICAgICAgICAgZXZlbnQuc3VidHlwZSA9ICdzZXF1ZW5jZXJTcGVjaWZpYyc7XG4gICAgICAgICAgZXZlbnQuZGF0YSA9IHN0cmVhbS5yZWFkKGxlbmd0aCk7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vaWYoc2VxdWVuY2VyLmRlYnVnID49IDIpe1xuICAgICAgICAgIC8vICAgIGNvbnNvbGUud2FybignVW5yZWNvZ25pc2VkIG1ldGEgZXZlbnQgc3VidHlwZTogJyArIHN1YnR5cGVCeXRlKTtcbiAgICAgICAgICAvL31cbiAgICAgICAgICBldmVudC5zdWJ0eXBlID0gJ3Vua25vd24nO1xuICAgICAgICAgIGV2ZW50LmRhdGEgPSBzdHJlYW0ucmVhZChsZW5ndGgpO1xuICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIH1cbiAgICAgIGV2ZW50LmRhdGEgPSBzdHJlYW0ucmVhZChsZW5ndGgpO1xuICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1lbHNlIGlmKGV2ZW50VHlwZUJ5dGUgPT0gMHhmMCl7XG4gICAgICBldmVudC50eXBlID0gJ3N5c0V4JztcbiAgICAgIGxlbmd0aCA9IHN0cmVhbS5yZWFkVmFySW50KCk7XG4gICAgICBldmVudC5kYXRhID0gc3RyZWFtLnJlYWQobGVuZ3RoKTtcbiAgICAgIHJldHVybiBldmVudDtcbiAgICB9ZWxzZSBpZihldmVudFR5cGVCeXRlID09IDB4Zjcpe1xuICAgICAgZXZlbnQudHlwZSA9ICdkaXZpZGVkU3lzRXgnO1xuICAgICAgbGVuZ3RoID0gc3RyZWFtLnJlYWRWYXJJbnQoKTtcbiAgICAgIGV2ZW50LmRhdGEgPSBzdHJlYW0ucmVhZChsZW5ndGgpO1xuICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1lbHNle1xuICAgICAgdGhyb3cgJ1VucmVjb2duaXNlZCBNSURJIGV2ZW50IHR5cGUgYnl0ZTogJyArIGV2ZW50VHlwZUJ5dGU7XG4gICAgfVxuICB9ZWxzZXtcbiAgICAvKiBjaGFubmVsIGV2ZW50ICovXG4gICAgbGV0IHBhcmFtMTtcbiAgICBpZigoZXZlbnRUeXBlQnl0ZSAmIDB4ODApID09PSAwKXtcbiAgICAgIC8qIHJ1bm5pbmcgc3RhdHVzIC0gcmV1c2UgbGFzdEV2ZW50VHlwZUJ5dGUgYXMgdGhlIGV2ZW50IHR5cGUuXG4gICAgICAgIGV2ZW50VHlwZUJ5dGUgaXMgYWN0dWFsbHkgdGhlIGZpcnN0IHBhcmFtZXRlclxuICAgICAgKi9cbiAgICAgIC8vY29uc29sZS5sb2coJ3J1bm5pbmcgc3RhdHVzJyk7XG4gICAgICBwYXJhbTEgPSBldmVudFR5cGVCeXRlO1xuICAgICAgZXZlbnRUeXBlQnl0ZSA9IGxhc3RFdmVudFR5cGVCeXRlO1xuICAgIH1lbHNle1xuICAgICAgcGFyYW0xID0gc3RyZWFtLnJlYWRJbnQ4KCk7XG4gICAgICAvL2NvbnNvbGUubG9nKCdsYXN0JywgZXZlbnRUeXBlQnl0ZSk7XG4gICAgICBsYXN0RXZlbnRUeXBlQnl0ZSA9IGV2ZW50VHlwZUJ5dGU7XG4gICAgfVxuICAgIGxldCBldmVudFR5cGUgPSBldmVudFR5cGVCeXRlID4+IDQ7XG4gICAgZXZlbnQuY2hhbm5lbCA9IGV2ZW50VHlwZUJ5dGUgJiAweDBmO1xuICAgIGV2ZW50LnR5cGUgPSAnY2hhbm5lbCc7XG4gICAgc3dpdGNoIChldmVudFR5cGUpe1xuICAgICAgY2FzZSAweDA4OlxuICAgICAgICBldmVudC5zdWJ0eXBlID0gJ25vdGVPZmYnO1xuICAgICAgICBldmVudC5ub3RlTnVtYmVyID0gcGFyYW0xO1xuICAgICAgICBldmVudC52ZWxvY2l0eSA9IHN0cmVhbS5yZWFkSW50OCgpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICBjYXNlIDB4MDk6XG4gICAgICAgIGV2ZW50Lm5vdGVOdW1iZXIgPSBwYXJhbTE7XG4gICAgICAgIGV2ZW50LnZlbG9jaXR5ID0gc3RyZWFtLnJlYWRJbnQ4KCk7XG4gICAgICAgIGlmKGV2ZW50LnZlbG9jaXR5ID09PSAwKXtcbiAgICAgICAgICBldmVudC5zdWJ0eXBlID0gJ25vdGVPZmYnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBldmVudC5zdWJ0eXBlID0gJ25vdGVPbic7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnbm90ZU9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgY2FzZSAweDBhOlxuICAgICAgICBldmVudC5zdWJ0eXBlID0gJ25vdGVBZnRlcnRvdWNoJztcbiAgICAgICAgZXZlbnQubm90ZU51bWJlciA9IHBhcmFtMTtcbiAgICAgICAgZXZlbnQuYW1vdW50ID0gc3RyZWFtLnJlYWRJbnQ4KCk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIGNhc2UgMHgwYjpcbiAgICAgICAgZXZlbnQuc3VidHlwZSA9ICdjb250cm9sbGVyJztcbiAgICAgICAgZXZlbnQuY29udHJvbGxlclR5cGUgPSBwYXJhbTE7XG4gICAgICAgIGV2ZW50LnZhbHVlID0gc3RyZWFtLnJlYWRJbnQ4KCk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIGNhc2UgMHgwYzpcbiAgICAgICAgZXZlbnQuc3VidHlwZSA9ICdwcm9ncmFtQ2hhbmdlJztcbiAgICAgICAgZXZlbnQucHJvZ3JhbU51bWJlciA9IHBhcmFtMTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgY2FzZSAweDBkOlxuICAgICAgICBldmVudC5zdWJ0eXBlID0gJ2NoYW5uZWxBZnRlcnRvdWNoJztcbiAgICAgICAgZXZlbnQuYW1vdW50ID0gcGFyYW0xO1xuICAgICAgICAvL2lmKHRyYWNrTmFtZSA9PT0gJ1NILVMxLTQ0LUMwOSBMPVNNTCBJTj0zJyl7XG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCdjaGFubmVsIHByZXNzdXJlJywgdHJhY2tOYW1lLCBwYXJhbTEpO1xuICAgICAgICAvL31cbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgY2FzZSAweDBlOlxuICAgICAgICBldmVudC5zdWJ0eXBlID0gJ3BpdGNoQmVuZCc7XG4gICAgICAgIGV2ZW50LnZhbHVlID0gcGFyYW0xICsgKHN0cmVhbS5yZWFkSW50OCgpIDw8IDcpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvKlxuICAgICAgICB0aHJvdyAnVW5yZWNvZ25pc2VkIE1JREkgZXZlbnQgdHlwZTogJyArIGV2ZW50VHlwZTtcbiAgICAgICAgY29uc29sZS5sb2coJ1VucmVjb2duaXNlZCBNSURJIGV2ZW50IHR5cGU6ICcgKyBldmVudFR5cGUpO1xuICAgICAgICAqL1xuXG4gICAgICAgIGV2ZW50LnZhbHVlID0gc3RyZWFtLnJlYWRJbnQ4KCk7XG4gICAgICAgIGV2ZW50LnN1YnR5cGUgPSAndW5rbm93bic7XG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xuLypcbiAgICAgICAgZXZlbnQubm90ZU51bWJlciA9IHBhcmFtMTtcbiAgICAgICAgZXZlbnQudmVsb2NpdHkgPSBzdHJlYW0ucmVhZEludDgoKTtcbiAgICAgICAgZXZlbnQuc3VidHlwZSA9ICdub3RlT24nO1xuICAgICAgICBjb25zb2xlLmxvZygnd2VpcmRvJywgdHJhY2tOYW1lLCBwYXJhbTEsIGV2ZW50LnZlbG9jaXR5KTtcbiovXG5cbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlTUlESUZpbGUoYnVmZmVyKXtcbiAgbGV0IHRyYWNrcyA9IG5ldyBNYXAoKTtcbiAgbGV0IHN0cmVhbSA9IGNyZWF0ZU1JRElTdHJlYW0obmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSk7XG5cbiAgbGV0IGhlYWRlckNodW5rID0gcmVhZENodW5rKHN0cmVhbSk7XG4gIGlmKGhlYWRlckNodW5rLmlkICE9PSAnTVRoZCcgfHwgaGVhZGVyQ2h1bmsubGVuZ3RoICE9PSA2KXtcbiAgICB0aHJvdyAnQmFkIC5taWQgZmlsZSAtIGhlYWRlciBub3QgZm91bmQnO1xuICB9XG5cbiAgbGV0IGhlYWRlclN0cmVhbSA9IGNyZWF0ZU1JRElTdHJlYW0oaGVhZGVyQ2h1bmsuZGF0YSk7XG4gIGxldCBmb3JtYXRUeXBlID0gaGVhZGVyU3RyZWFtLnJlYWRJbnQxNigpO1xuICBsZXQgdHJhY2tDb3VudCA9IGhlYWRlclN0cmVhbS5yZWFkSW50MTYoKTtcbiAgbGV0IHRpbWVEaXZpc2lvbiA9IGhlYWRlclN0cmVhbS5yZWFkSW50MTYoKTtcblxuICBpZih0aW1lRGl2aXNpb24gJiAweDgwMDApe1xuICAgIHRocm93ICdFeHByZXNzaW5nIHRpbWUgZGl2aXNpb24gaW4gU01UUEUgZnJhbWVzIGlzIG5vdCBzdXBwb3J0ZWQgeWV0JztcbiAgfVxuXG4gIGxldCBoZWFkZXIgPXtcbiAgICAnZm9ybWF0VHlwZSc6IGZvcm1hdFR5cGUsXG4gICAgJ3RyYWNrQ291bnQnOiB0cmFja0NvdW50LFxuICAgICd0aWNrc1BlckJlYXQnOiB0aW1lRGl2aXNpb25cbiAgfTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgdHJhY2tDb3VudDsgaSsrKXtcbiAgICB0cmFja05hbWUgPSAndHJhY2tfJyArIGk7XG4gICAgbGV0IHRyYWNrID0gW107XG4gICAgbGV0IHRyYWNrQ2h1bmsgPSByZWFkQ2h1bmsoc3RyZWFtKTtcbiAgICBpZih0cmFja0NodW5rLmlkICE9PSAnTVRyaycpe1xuICAgICAgdGhyb3cgJ1VuZXhwZWN0ZWQgY2h1bmsgLSBleHBlY3RlZCBNVHJrLCBnb3QgJysgdHJhY2tDaHVuay5pZDtcbiAgICB9XG4gICAgbGV0IHRyYWNrU3RyZWFtID0gY3JlYXRlTUlESVN0cmVhbSh0cmFja0NodW5rLmRhdGEpO1xuICAgIHdoaWxlKCF0cmFja1N0cmVhbS5lb2YoKSl7XG4gICAgICBsZXQgZXZlbnQgPSByZWFkRXZlbnQodHJhY2tTdHJlYW0pO1xuICAgICAgdHJhY2sucHVzaChldmVudCk7XG4gICAgfVxuICAgIHRyYWNrcy5zZXQodHJhY2tOYW1lLCB0cmFjayk7XG4gIH1cblxuICByZXR1cm57XG4gICAgJ2hlYWRlcic6IGhlYWRlcixcbiAgICAndHJhY2tzJzogdHJhY2tzXG4gIH07XG59IiwiLypcbiAgV3JhcHBlciBmb3IgYWNjZXNzaW5nIGJ5dGVzIHRocm91Z2ggc2VxdWVudGlhbCByZWFkc1xuXG4gIGJhc2VkIG9uOiBodHRwczovL2dpdGh1Yi5jb20vZ2FzbWFuL2phc21pZFxuICBhZGFwdGVkIHRvIHdvcmsgd2l0aCBBcnJheUJ1ZmZlciAtPiBVaW50OEFycmF5XG4qL1xuXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgZmNjID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblxuZXhwb3J0IGNsYXNzIE1JRElTdHJlYW17XG5cbiAgLy8gYnVmZmVyIGlzIFVpbnQ4QXJyYXlcbiAgY29uc3RydWN0b3IoYnVmZmVyKXtcbiAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgfVxuXG4gIC8qIHJlYWQgc3RyaW5nIG9yIGFueSBudW1iZXIgb2YgYnl0ZXMgKi9cbiAgcmVhZChsZW5ndGgsIHRvU3RyaW5nID0gdHJ1ZSkge1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZih0b1N0cmluZyl7XG4gICAgICByZXN1bHQgPSAnJztcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKywgdGhpcy5wb3NpdGlvbisrKXtcbiAgICAgICAgcmVzdWx0ICs9IGZjYyh0aGlzLmJ1ZmZlclt0aGlzLnBvc2l0aW9uXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1lbHNle1xuICAgICAgcmVzdWx0ID0gW107XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyssIHRoaXMucG9zaXRpb24rKyl7XG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuYnVmZmVyW3RoaXMucG9zaXRpb25dKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgLyogcmVhZCBhIGJpZy1lbmRpYW4gMzItYml0IGludGVnZXIgKi9cbiAgcmVhZEludDMyKCkge1xuICAgIGxldCByZXN1bHQgPSAoXG4gICAgICAodGhpcy5idWZmZXJbdGhpcy5wb3NpdGlvbl0gPDwgMjQpICtcbiAgICAgICh0aGlzLmJ1ZmZlclt0aGlzLnBvc2l0aW9uICsgMV0gPDwgMTYpICtcbiAgICAgICh0aGlzLmJ1ZmZlclt0aGlzLnBvc2l0aW9uICsgMl0gPDwgOCkgK1xuICAgICAgdGhpcy5idWZmZXJbdGhpcy5wb3NpdGlvbiArIDNdXG4gICAgKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qIHJlYWQgYSBiaWctZW5kaWFuIDE2LWJpdCBpbnRlZ2VyICovXG4gIHJlYWRJbnQxNigpIHtcbiAgICBsZXQgcmVzdWx0ID0gKFxuICAgICAgKHRoaXMuYnVmZmVyW3RoaXMucG9zaXRpb25dIDw8IDgpICtcbiAgICAgIHRoaXMuYnVmZmVyW3RoaXMucG9zaXRpb24gKyAxXVxuICAgICk7XG4gICAgdGhpcy5wb3NpdGlvbiArPSAyO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKiByZWFkIGFuIDgtYml0IGludGVnZXIgKi9cbiAgcmVhZEludDgoc2lnbmVkKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuYnVmZmVyW3RoaXMucG9zaXRpb25dO1xuICAgIGlmKHNpZ25lZCAmJiByZXN1bHQgPiAxMjcpe1xuICAgICAgcmVzdWx0IC09IDI1NjtcbiAgICB9XG4gICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBlb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPj0gdGhpcy5idWZmZXIubGVuZ3RoO1xuICB9XG5cbiAgLyogcmVhZCBhIE1JREktc3R5bGUgbGV0aWFibGUtbGVuZ3RoIGludGVnZXJcbiAgICAoYmlnLWVuZGlhbiB2YWx1ZSBpbiBncm91cHMgb2YgNyBiaXRzLFxuICAgIHdpdGggdG9wIGJpdCBzZXQgdG8gc2lnbmlmeSB0aGF0IGFub3RoZXIgYnl0ZSBmb2xsb3dzKVxuICAqL1xuICByZWFkVmFySW50KCkge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIGxldCBiID0gdGhpcy5yZWFkSW50OCgpO1xuICAgICAgaWYgKGIgJiAweDgwKSB7XG4gICAgICAgIHJlc3VsdCArPSAoYiAmIDB4N2YpO1xuICAgICAgICByZXN1bHQgPDw9IDc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBiIGlzIHRoZSBsYXN0IGJ5dGUgKi9cbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIGI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTUlESVN0cmVhbShidWZmZXIpe1xuICByZXR1cm4gbmV3IE1JRElTdHJlYW0oYnVmZmVyKTtcbn1cbiIsIi8qXG4gIEFkZHMgYSBmdW5jdGlvbiB0byBjcmVhdGUgYSBub3RlIG9iamVjdCB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IGEgbXVzaWNhbCBub3RlOlxuICAgIC0gbmFtZSwgZS5nLiAnQydcbiAgICAtIG9jdGF2ZSwgIC0xIC0gOVxuICAgIC0gZnVsbE5hbWU6ICdDMSdcbiAgICAtIGZyZXF1ZW5jeTogMjM0LjE2LCBiYXNlZCBvbiB0aGUgYmFzaWMgcGl0Y2hcbiAgICAtIG51bWJlcjogNjAgbWlkaSBub3RlIG51bWJlclxuXG4gIEFkZHMgc2V2ZXJhbCB1dGlsaXR5IG1ldGhvZHMgb3JnYW5pc2VkIGFyb3VuZCB0aGUgbm90ZSBvYmplY3RcbiovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGdldENvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge2xvZywgaW5mbywgd2FybiwgZXJyb3IsIHR5cGVTdHJpbmd9IGZyb20gJy4vdXRpbCc7XG5cbmxldFxuICBlcnJvck1zZyxcbiAgd2FybmluZ01zZyxcbiAgY29uZmlnID0gZ2V0Q29uZmlnKCksXG4gIHBvdyA9IE1hdGgucG93LFxuICBmbG9vciA9IE1hdGguZmxvb3I7XG5cbmNvbnN0IG5vdGVOYW1lcyA9IHtcbiAgJ3NoYXJwJyA6IFsnQycsICdDIycsICdEJywgJ0QjJywgJ0UnLCAnRicsICdGIycsICdHJywgJ0cjJywgJ0EnLCAnQSMnLCAnQiddLFxuICAnZmxhdCcgOiBbJ0MnLCAnRGInLCAnRCcsICdFYicsICdFJywgJ0YnLCAnR2InLCAnRycsICdBYicsICdBJywgJ0JiJywgJ0InXSxcbiAgJ2VuaGFybW9uaWMtc2hhcnAnIDogWydCIycsICdDIycsICdDIyMnLCAnRCMnLCAnRCMjJywgJ0UjJywgJ0YjJywgJ0YjIycsICdHIycsICdHIyMnLCAnQSMnLCAnQSMjJ10sXG4gICdlbmhhcm1vbmljLWZsYXQnIDogWydEYmInLCAnRGInLCAnRWJiJywgJ0ViJywgJ0ZiJywgJ0diYicsICdHYicsICdBYmInLCAnQWInLCAnQmJiJywgJ0JiJywgJ0NiJ11cbn07XG5cblxuLypcbiAgYXJndW1lbnRzXG4gIC0gbm90ZU51bWJlcjogNjBcbiAgLSBub3RlTnVtYmVyIGFuZCBub3RlbmFtZSBtb2RlOiA2MCwgJ3NoYXJwJ1xuICAtIG5vdGVOYW1lOiAnQyM0J1xuICAtIG5hbWUgYW5kIG9jdGF2ZTogJ0MjJywgNFxuICAtIG5vdGUgbmFtZSwgb2N0YXZlLCBub3RlIG5hbWUgbW9kZTogJ0QnLCA0LCAnc2hhcnAnXG4gIC0gZGF0YSBvYmplY3Q6XG4gICAge1xuICAgICAgbmFtZTogJ0MnLFxuICAgICAgb2N0YXZlOiA0XG4gICAgfVxuICAgIG9yXG4gICAge1xuICAgICAgZnJlcXVlbmN5OiAyMzQuMTZcbiAgICB9XG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90ZSguLi5hcmdzKXtcbiAgbGV0XG4gICAgbnVtQXJncyA9IGFyZ3MubGVuZ3RoLFxuICAgIGRhdGEsXG4gICAgb2N0YXZlLFxuICAgIG5vdGVOYW1lLFxuICAgIG5vdGVOdW1iZXIsXG4gICAgbm90ZU5hbWVNb2RlLFxuICAgIGFyZzAgPSBhcmdzWzBdLFxuICAgIGFyZzEgPSBhcmdzWzFdLFxuICAgIGFyZzIgPSBhcmdzWzJdLFxuICAgIHR5cGUwID0gdHlwZVN0cmluZyhhcmcwKSxcbiAgICB0eXBlMSA9IHR5cGVTdHJpbmcoYXJnMSksXG4gICAgdHlwZTIgPSB0eXBlU3RyaW5nKGFyZzIpO1xuXG4gIGVycm9yTXNnID0gJyc7XG4gIHdhcm5pbmdNc2cgPSAnJztcblxuICAvLyBhcmd1bWVudDogbm90ZSBudW1iZXJcbiAgaWYobnVtQXJncyA9PT0gMSAmJiB0eXBlMCA9PT0gJ251bWJlcicpe1xuICAgIGlmKGFyZzAgPCAwIHx8IGFyZzAgPiAxMjcpe1xuICAgICAgZXJyb3JNc2cgPSAncGxlYXNlIHByb3ZpZGUgYSBub3RlIG51bWJlciA+PSAwIGFuZCA8PSAxMjcgJyArICBhcmcwO1xuICAgIH1lbHNle1xuICAgICAgbm90ZU51bWJlciA9IGFyZzA7XG4gICAgICBkYXRhID0gX2dldE5vdGVOYW1lKG5vdGVOdW1iZXIpO1xuICAgICAgbm90ZU5hbWUgPSBkYXRhWzBdO1xuICAgICAgb2N0YXZlID0gZGF0YVsxXTtcbiAgICB9XG5cblxuICAvLyBhcmd1bWVudHM6IGZ1bGwgbm90ZSBuYW1lXG4gIH1lbHNlIGlmKG51bUFyZ3MgPT09IDEgJiYgdHlwZTAgPT09ICdzdHJpbmcnKXtcbiAgICBkYXRhID0gX2NoZWNrTm90ZU5hbWUoYXJnMCk7XG4gICAgaWYoZXJyb3JNc2cgPT09ICcnKXtcbiAgICAgIG5vdGVOYW1lID0gZGF0YVswXTtcbiAgICAgIG9jdGF2ZSA9IGRhdGFbMV07XG4gICAgICBub3RlTnVtYmVyID0gX2dldE5vdGVOdW1iZXIobm90ZU5hbWUsIG9jdGF2ZSk7XG4gICAgfVxuXG4gIC8vIGFyZ3VtZW50czogbm90ZSBuYW1lLCBvY3RhdmVcbiAgfWVsc2UgaWYobnVtQXJncyA9PT0gMiAmJiB0eXBlMCA9PT0gJ3N0cmluZycgJiYgdHlwZTEgPT09ICdudW1iZXInKXtcbiAgICBkYXRhID0gX2NoZWNrTm90ZU5hbWUoYXJnMCwgYXJnMSk7XG4gICAgaWYoZXJyb3JNc2cgPT09ICcnKXtcbiAgICAgIG5vdGVOYW1lID0gZGF0YVswXTtcbiAgICAgIG9jdGF2ZSA9IGRhdGFbMV07XG4gICAgICBub3RlTnVtYmVyID0gX2dldE5vdGVOdW1iZXIobm90ZU5hbWUsIG9jdGF2ZSk7XG4gICAgfVxuXG4gIC8vIGFyZ3VtZW50czogZnVsbCBub3RlIG5hbWUsIG5vdGUgbmFtZSBtb2RlIC0+IGZvciBjb252ZXJ0aW5nIGJldHdlZW4gbm90ZSBuYW1lIG1vZGVzXG4gIH1lbHNlIGlmKG51bUFyZ3MgPT09IDIgJiYgdHlwZTAgPT09ICdzdHJpbmcnICYmIHR5cGUxID09PSAnc3RyaW5nJyl7XG4gICAgZGF0YSA9IF9jaGVja05vdGVOYW1lKGFyZzApO1xuICAgIGlmKGVycm9yTXNnID09PSAnJyl7XG4gICAgICBub3RlTmFtZU1vZGUgPSBfY2hlY2tOb3RlTmFtZU1vZGUoYXJnMSk7XG4gICAgICBub3RlTmFtZSA9IGRhdGFbMF07XG4gICAgICBvY3RhdmUgPSBkYXRhWzFdO1xuICAgICAgbm90ZU51bWJlciA9IF9nZXROb3RlTnVtYmVyKG5vdGVOYW1lLCBvY3RhdmUpO1xuICAgIH1cblxuXG4gIC8vIGFyZ3VtZW50czogbm90ZSBudW1iZXIsIG5vdGUgbmFtZSBtb2RlXG4gIH1lbHNlIGlmKG51bUFyZ3MgPT09IDIgJiYgdHlwZVN0cmluZyhhcmcwKSA9PT0gJ251bWJlcicgJiYgdHlwZVN0cmluZyhhcmcxKSA9PT0gJ3N0cmluZycpe1xuICAgIGlmKGFyZzAgPCAwIHx8IGFyZzAgPiAxMjcpe1xuICAgICAgZXJyb3JNc2cgPSAncGxlYXNlIHByb3ZpZGUgYSBub3RlIG51bWJlciA+PSAwIGFuZCA8PSAxMjcgJyArIGFyZzA7XG4gICAgfWVsc2V7XG4gICAgICBub3RlTmFtZU1vZGUgPSBfY2hlY2tOb3RlTmFtZU1vZGUoYXJnMSk7XG4gICAgICBub3RlTnVtYmVyID0gYXJnMDtcbiAgICAgIGRhdGEgPSBfZ2V0Tm90ZU5hbWUobm90ZU51bWJlciwgbm90ZU5hbWVNb2RlKTtcbiAgICAgIG5vdGVOYW1lID0gZGF0YVswXTtcbiAgICAgIG9jdGF2ZSA9IGRhdGFbMV07XG4gICAgfVxuXG5cbiAgLy8gYXJndW1lbnRzOiBub3RlIG5hbWUsIG9jdGF2ZSwgbm90ZSBuYW1lIG1vZGVcbiAgfWVsc2UgaWYobnVtQXJncyA9PT0gMyAmJiB0eXBlMCA9PT0gJ3N0cmluZycgJiYgdHlwZTEgPT09ICdudW1iZXInICYmIHR5cGUyID09PSAnc3RyaW5nJyl7XG4gICAgZGF0YSA9IF9jaGVja05vdGVOYW1lKGFyZzAsIGFyZzEpO1xuICAgIGlmKGVycm9yTXNnID09PSAnJyl7XG4gICAgICBub3RlTmFtZU1vZGUgPSBfY2hlY2tOb3RlTmFtZU1vZGUoYXJnMik7XG4gICAgICBub3RlTmFtZSA9IGRhdGFbMF07XG4gICAgICBvY3RhdmUgPSBkYXRhWzFdO1xuICAgICAgbm90ZU51bWJlciA9IF9nZXROb3RlTnVtYmVyKG5vdGVOYW1lLG9jdGF2ZSk7XG4gICAgfVxuXG4gIH1lbHNle1xuICAgIGVycm9yTXNnID0gJ3dyb25nIGFyZ3VtZW50cywgcGxlYXNlIGNvbnN1bHQgZG9jdW1lbnRhdGlvbic7XG4gIH1cblxuICBpZihlcnJvck1zZyl7XG4gICAgZXJyb3IoZXJyb3JNc2cpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKHdhcm5pbmdNc2cpe1xuICAgIHdhcm4od2FybmluZ01zZyk7XG4gIH1cblxuICBsZXQgbm90ZSA9IHtcbiAgICBuYW1lOiBub3RlTmFtZSxcbiAgICBvY3RhdmU6IG9jdGF2ZSxcbiAgICBmdWxsTmFtZTogbm90ZU5hbWUgKyBvY3RhdmUsXG4gICAgbnVtYmVyOiBub3RlTnVtYmVyLFxuICAgIGZyZXF1ZW5jeTogX2dldEZyZXF1ZW5jeShub3RlTnVtYmVyKSxcbiAgICBibGFja0tleTogX2lzQmxhY2tLZXkobm90ZU51bWJlcilcbiAgfVxuICBPYmplY3QuZnJlZXplKG5vdGUpO1xuICByZXR1cm4gbm90ZTtcbn1cblxuXG5mdW5jdGlvbiBfZ2V0Tm90ZU5hbWUobnVtYmVyLCBtb2RlID0gY29uZmlnLmdldCgnbm90ZU5hbWVNb2RlJykpIHtcbiAgLy9sZXQgb2N0YXZlID0gTWF0aC5mbG9vcigobnVtYmVyIC8gMTIpIC0gMiksIC8vIOKGkiBpbiBDdWJhc2UgY2VudHJhbCBDID0gQzMgaW5zdGVhZCBvZiBDNFxuICBsZXQgb2N0YXZlID0gZmxvb3IoKG51bWJlciAvIDEyKSAtIDEpO1xuICBsZXQgbm90ZU5hbWUgPSBub3RlTmFtZXNbbW9kZV1bbnVtYmVyICUgMTJdO1xuICByZXR1cm4gW25vdGVOYW1lLCBvY3RhdmVdO1xufVxuXG5cbmZ1bmN0aW9uIF9nZXROb3RlTnVtYmVyKG5hbWUsIG9jdGF2ZSkge1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG5vdGVOYW1lcyk7XG4gIGxldCBpbmRleDtcblxuICBmb3IobGV0IGtleSBvZiBrZXlzKXtcbiAgICBsZXQgbW9kZSA9IG5vdGVOYW1lc1trZXldO1xuICAgIGluZGV4ID0gbW9kZS5maW5kSW5kZXgoeCA9PiB4ID09PSBuYW1lKTtcbiAgICBpZihpbmRleCAhPT0gLTEpe1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy9udW1iZXIgPSAoaW5kZXggKyAxMikgKyAob2N0YXZlICogMTIpICsgMTI7IC8vIOKGkiBpbiBDdWJhc2UgY2VudHJhbCBDID0gQzMgaW5zdGVhZCBvZiBDNFxuICBsZXQgbnVtYmVyID0gKGluZGV4ICsgMTIpICsgKG9jdGF2ZSAqIDEyKTsvLyDihpIgbWlkaSBzdGFuZGFyZCArIHNjaWVudGlmaWMgbmFtaW5nLCBzZWU6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWlkZGxlX0MgYW5kIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2NpZW50aWZpY19waXRjaF9ub3RhdGlvblxuXG4gIGlmKG51bWJlciA8IDAgfHwgbnVtYmVyID4gMTI3KXtcbiAgICBlcnJvck1zZyA9ICdwbGVhc2UgcHJvdmlkZSBhIG5vdGUgYmV0d2VlbiBDMCBhbmQgRzEwJztcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuXG5mdW5jdGlvbiBfZ2V0RnJlcXVlbmN5KG51bWJlcil7XG4gIHJldHVybiBjb25maWcuZ2V0KCdwaXRjaCcpICogcG93KDIsKG51bWJlciAtIDY5KS8xMik7IC8vIG1pZGkgc3RhbmRhcmQsIHNlZTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NSURJX1R1bmluZ19TdGFuZGFyZFxufVxuXG5cbi8vIFRPRE86IGNhbGN1bGF0ZSBub3RlIGZyb20gZnJlcXVlbmN5XG5mdW5jdGlvbiBfZ2V0UGl0Y2goaGVydHope1xuICAvL2ZtICA9ICAyKG3iiJI2OSkvMTIoNDQwIEh6KS5cbn1cblxuXG5mdW5jdGlvbiBfY2hlY2tOb3RlTmFtZU1vZGUobW9kZSl7XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMobm90ZU5hbWVzKTtcbiAgbGV0IHJlc3VsdCA9IGtleXMuZmluZCh4ID0+IHggPT09IG1vZGUpICE9PSB1bmRlZmluZWQ7XG4gIGlmKHJlc3VsdCA9PT0gZmFsc2Upe1xuICAgIG1vZGUgPSBjb25maWcuZ2V0KCdub3RlTmFtZU1vZGUnKTtcbiAgICB3YXJuaW5nTXNnID0gbW9kZSArICcgaXMgbm90IGEgdmFsaWQgbm90ZSBuYW1lIG1vZGUsIHVzaW5nIFwiJyArIG1vZGUgKyAnXCIgaW5zdGVhZCc7XG4gIH1cbiAgcmV0dXJuIG1vZGU7XG59XG5cblxuZnVuY3Rpb24gX2NoZWNrTm90ZU5hbWUoLi4uYXJncyl7XG4gIGxldFxuICAgIG51bUFyZ3MgPSBhcmdzLmxlbmd0aCxcbiAgICBhcmcwID0gYXJnc1swXSxcbiAgICBhcmcxID0gYXJnc1sxXSxcbiAgICBjaGFyLFxuICAgIG5hbWUgPSAnJyxcbiAgICBvY3RhdmUgPSAnJztcblxuICAvLyBleHRyYWN0IG9jdGF2ZSBmcm9tIG5vdGUgbmFtZVxuICBpZihudW1BcmdzID09PSAxKXtcbiAgICBmb3IoY2hhciBvZiBhcmcwKXtcbiAgICAgIGlmKGlzTmFOKGNoYXIpICYmIGNoYXIgIT09ICctJyl7XG4gICAgICAgIG5hbWUgKz0gY2hhcjtcbiAgICAgIH1lbHNle1xuICAgICAgICBvY3RhdmUgKz0gY2hhcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYob2N0YXZlID09PSAnJyl7XG4gICAgICBvY3RhdmUgPSAwO1xuICAgIH1cbiAgfWVsc2UgaWYobnVtQXJncyA9PT0gMil7XG4gICAgbmFtZSA9IGFyZzA7XG4gICAgb2N0YXZlID0gYXJnMTtcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIG5vdGUgbmFtZSBpcyB2YWxpZFxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG5vdGVOYW1lcyk7XG4gIGxldCBpbmRleCA9IC0xO1xuXG4gIGZvcihsZXQga2V5IG9mIGtleXMpe1xuICAgIGxldCBtb2RlID0gbm90ZU5hbWVzW2tleV07XG4gICAgaW5kZXggPSBtb2RlLmZpbmRJbmRleCh4ID0+IHggPT09IG5hbWUpO1xuICAgIGlmKGluZGV4ICE9PSAtMSl7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZihpbmRleCA9PT0gLTEpe1xuICAgIGVycm9yTXNnID0gYXJnMCArICcgaXMgbm90IGEgdmFsaWQgbm90ZSBuYW1lLCBwbGVhc2UgdXNlIGxldHRlcnMgQSAtIEcgYW5kIGlmIG5lY2Vzc2FyeSBhbiBhY2NpZGVudGFsIGxpa2UgIywgIyMsIGIgb3IgYmIsIGZvbGxvd2VkIGJ5IGEgbnVtYmVyIGZvciB0aGUgb2N0YXZlJztcbiAgICByZXR1cm47XG4gIH1cblxuICBpZihvY3RhdmUgPCAtMSB8fCBvY3RhdmUgPiA5KXtcbiAgICBlcnJvck1zZyA9ICdwbGVhc2UgcHJvdmlkZSBhbiBvY3RhdmUgYmV0d2VlbiAtMSBhbmQgOSc7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb2N0YXZlID0gcGFyc2VJbnQob2N0YXZlLCAxMCk7XG4gIG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSk7XG5cbiAgLy9jb25zb2xlLmxvZyhuYW1lLCd8JyxvY3RhdmUpO1xuICByZXR1cm4gW25hbWUsIG9jdGF2ZV07XG59XG5cblxuXG5mdW5jdGlvbiBfaXNCbGFja0tleShub3RlTnVtYmVyKXtcbiAgbGV0IGJsYWNrO1xuXG4gIHN3aXRjaCh0cnVlKXtcbiAgICBjYXNlIG5vdGVOdW1iZXIgJSAxMiA9PT0gMTovL0MjXG4gICAgY2FzZSBub3RlTnVtYmVyICUgMTIgPT09IDM6Ly9EI1xuICAgIGNhc2Ugbm90ZU51bWJlciAlIDEyID09PSA2Oi8vRiNcbiAgICBjYXNlIG5vdGVOdW1iZXIgJSAxMiA9PT0gODovL0cjXG4gICAgY2FzZSBub3RlTnVtYmVyICUgMTIgPT09IDEwOi8vQSNcbiAgICAgIGJsYWNrID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBibGFjayA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGJsYWNrO1xufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm90ZU51bWJlciguLi5hcmdzKXtcbiAgbGV0IG5vdGUgPSBjcmVhdGVOb3RlKC4uLmFyZ3MpO1xuICBpZihub3RlKXtcbiAgICByZXR1cm4gbm90ZS5udW1iZXI7XG4gIH1cbiAgcmV0dXJuIGVycm9yTXNnO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3RlTmFtZSguLi5hcmdzKXtcbiAgbGV0IG5vdGUgPSBjcmVhdGVOb3RlKC4uLmFyZ3MpO1xuICBpZihub3RlKXtcbiAgICByZXR1cm4gbm90ZS5uYW1lO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm90ZU9jdGF2ZSguLi5hcmdzKXtcbiAgbGV0IG5vdGUgPSBjcmVhdGVOb3RlKC4uLmFyZ3MpO1xuICBpZihub3RlKXtcbiAgICByZXR1cm4gbm90ZS5vY3RhdmU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsTm90ZU5hbWUoLi4uYXJncyl7XG4gIGxldCBub3RlID0gY3JlYXRlTm90ZSguLi5hcmdzKTtcbiAgaWYobm90ZSl7XG4gICAgcmV0dXJuIG5vdGUuZnVsbE5hbWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGcmVxdWVuY3koLi4uYXJncyl7XG4gIGxldCBub3RlID0gY3JlYXRlTm90ZSguLi5hcmdzKTtcbiAgaWYobm90ZSl7XG4gICAgcmV0dXJuIG5vdGUuZnJlcXVlbmN5O1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaXNCbGFja0tleSguLi5hcmdzKXtcbiAgbGV0IG5vdGUgPSBjcmVhdGVOb3RlKC4uLmFyZ3MpO1xuICBpZihub3RlKXtcbiAgICByZXR1cm4gbm90ZS5ibGFja0tleTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2luZm99IGZyb20gJy4vdXRpbC5qcyc7XG5pbXBvcnQge01JRElFdmVudH0gZnJvbSAnLi9taWRpX2V2ZW50LmpzJztcbmltcG9ydCB7QXVkaW9FdmVudH0gZnJvbSAnLi9hdWRpb19ldmVudC5qcyc7XG5cbmxldCBwYXJ0SWQgPSAwO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXJ0e1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KXtcbiAgICB0aGlzLmlkID0gJ1AnICsgcGFydElkKysgKyBEYXRlLm5vdygpO1xuICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnRpY2tzID0gMDtcblxuICAgIHRoaXMuX2V2ZW50c01hcCA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLl9udW1iZXJPZkV2ZW50c0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIGlmKGNvbmZpZy5ldmVudHMpe1xuICAgICAgdGhpcy5hZGRFdmVudHMoY29uZmlnLmV2ZW50cyk7XG4gICAgfVxuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lIHx8IHRoaXMuaWQ7XG4gICAgY29uZmlnID0gbnVsbDtcbiAgfVxuXG4gIGFkZEV2ZW50KGV2ZW50KXtcbiAgICBpZihldmVudCBpbnN0YW5jZW9mIE1JRElFdmVudCB8fCBldmVudCBpbnN0YW5jZW9mIEF1ZGlvRXZlbnQpe1xuICAgICAgZXZlbnQuc3RhdGUgPSAnbmV3JztcbiAgICAgIHRoaXMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgdGhpcy5fbnVtYmVyT2ZFdmVudHNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2V2ZW50c01hcC5zZXQoZXZlbnQuaWQsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzOyAvLyBtYWtlIGl0IGNoYWluYWJsZVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50cyhldmVudHMpe1xuICAgIGZvcihsZXQgZXZlbnQgb2YgZXZlbnRzKXtcbiAgICAgIHRoaXMuYWRkRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpczsgLy8gbWFrZSBpdCBjaGFpbmFibGVcbiAgfVxuXG5cbiAgcmVtb3ZlRXZlbnQoZXZlbnQpe1xuICAgIGlmKHRoaXMuX2V2ZW50c01hcC5oYXMoZXZlbnQuaWQpKXtcbiAgICAgIGV2ZW50LnJlc2V0KHRydWUsIGZhbHNlLCBmYWxzZSk7XG4gICAgICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX251bWJlck9mRXZlbnRzQ2hhbmdlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpczsgLy8gbWFrZSBpdCBjaGFpbmFibGVcbiAgICB9XG4gIH1cblxuICByZW1vdmVFdmVudHMoZXZlbnRzKXtcbiAgICBmb3IobGV0IGV2ZW50IG9mIGV2ZW50cyl7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7IC8vIG1ha2UgaXQgY2hhaW5hYmxlXG4gIH1cblxuXG4gIG1vdmVFdmVudChldmVudCwgdGlja3Mpe1xuICAgIGlmKHRoaXMuX2V2ZW50c01hcC5oYXMoZXZlbnQuaWQpKXtcbiAgICAgIGV2ZW50Lm1vdmUodGlja3MpO1xuICAgICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpczsgLy8gbWFrZSBpdCBjaGFpbmFibGVcbiAgICB9XG4gIH1cblxuICBtb3ZlRXZlbnRzKGV2ZW50cyl7XG4gICAgZm9yKGxldCBldmVudCBvZiBldmVudHMpe1xuICAgICAgdGhpcy5tb3ZlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpczsgLy8gbWFrZSBpdCBjaGFpbmFibGVcbiAgfVxuXG5cbiAgdHJhbnNwb3NlRXZlbnQoZXZlbnQsIHNlbWl0b25lcyl7XG4gICAgaWYodGhpcy5fZXZlbnRzTWFwLmhhcyhldmVudC5pZCkpe1xuICAgICAgaWYoZXZlbnQudHlwZSAhPT0gMTI4ICYmIGV2ZW50LnR5cGUgIT09IDE0NCl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnRyYW5zcG9zZShzZW1pdG9uZXMpO1xuICAgICAgLy8gbm8gbmVlZCB0byBzZXQgbmVlZHNVcGRhdGUgdG8gdHJ1ZSFcbiAgICAgIHJldHVybiB0aGlzOyAvLyBtYWtlIGl0IGNoYWluYWJsZVxuICAgIH1cbiAgfVxuXG4gIHRyYW5zcG9zZUV2ZW50cyhldmVudHMpe1xuICAgIGZvcihsZXQgZXZlbnQgb2YgZXZlbnRzKXtcbiAgICAgIHRoaXMudHJhbnNwb3NlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpczsgLy8gbWFrZSBpdCBjaGFpbmFibGVcbiAgfVxuXG4gIGdldEV2ZW50cygpe1xuICAgIGlmKHRoaXMubmVlZHNVcGRhdGUpe1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50cztcbiAgfVxuXG4gIHVwZGF0ZSgpe1xuXG4gICAgLy8gaWYgbnVtYmVyIG9mIGV2ZW50cyBoYXMgY2hhbmdlZCB1cGRhdGUgdGhlIF9ldmVudHMgYXJyYXkgYW5kIHRoZSBfZXZlbnRzTWFwIG1hcFxuICAgIGlmKHRoaXMuX251bWJlck9mRXZlbnRzQ2hhbmdlZCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLl9ldmVudHMgPSBbXTtcbiAgICAgIEFycmF5LmZyb20odGhpcy5fZXZlbnRzTWFwLnZhbHVlcygpKS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICBpZihldmVudC5zdGF0ZSA9PT0gJ3JlbW92ZWQnKXtcbiAgICAgICAgICB0aGlzLl9ldmVudHNNYXAuZGVsZXRlKGV2ZW50LmlkKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy50cmFjayAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgLy8gdGVsbCB0aGUgdHJhY2sgdG8gdXBkYXRlIGl0cyBldmVudHMgYXJyYXkgYXMgd2VsbCwgdGhpcyBpcyBkb25lIHdoZW4gdHJhY2sudXBkYXRlKCkgb3Igc29uZy51cGRhdGUoKSBpcyBjYWxsZWRcbiAgICAgICAgdGhpcy50cmFjay5fbnVtYmVyT2ZFdmVudHNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX251bWJlck9mRXZlbnRzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cy5zb3J0KChhLCBiKSA9PiAoYS50aWNrcyA8PSBiLnRpY2tzKSA/IC0xIDogMSk7XG5cbiAgICAvLyBjcmVhdGUgbm90ZXNcbiAgICBsZXQgbm90ZXMgPSB7fTtcbiAgICBsZXQgbiA9IDA7XG4gICAgZm9yKGxldCBldmVudCBvZiB0aGlzLl9ldmVudHMpe1xuICAgICAgaWYoZXZlbnQudHlwZSA9PT0gMTQ0KXtcbiAgICAgICAgbm90ZXNbZXZlbnQubm90ZU51bWJlcl0gPSBldmVudDtcbiAgICAgIH1lbHNlIGlmKGV2ZW50LnR5cGUgPT09IDEyOCl7XG4gICAgICAgIGxldCBub3RlT24gPSBub3Rlc1tldmVudC5ub3RlTnVtYmVyXTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC5ub3RlTnVtYmVyLCBub3RlT24pO1xuICAgICAgICBsZXQgbm90ZU9mZiA9IGV2ZW50O1xuICAgICAgICBpZihub3RlT24gPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgaW5mbygnbm8gbm90ZSBvbiBldmVudCEnLCBuKyspO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG5vdGVPbi5ub3RlT2ZmID0gbm90ZU9mZjtcbiAgICAgICAgbm90ZU9mZi5ub3RlT24gPSBub3RlT247XG4gICAgICAgIG5vdGVPbi5kdXJhdGlvblRpY2tzID0gbm90ZU9mZi50aWNrcyAtIG5vdGVPbi50aWNrcztcbiAgICAgICAgZGVsZXRlIG5vdGVzW2V2ZW50Lm5vdGVOdW1iZXJdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFydChjb25maWcpe1xuICByZXR1cm4gbmV3IFBhcnQoY29uZmlnKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnZXRDb25maWcgZnJvbSAnLi9jb25maWcuanMnO1xuXG5cbmxldCBjb25maWcgPSBnZXRDb25maWcoKTtcblxuY2xhc3MgU2FtcGxle1xuXG4gIGNvbnN0cnVjdG9yKHNhbXBsZURhdGEsIGV2ZW50KXtcbiAgICBpZihzYW1wbGVEYXRhID09PSAtMSl7XG4gICAgICAvLyBjcmVhdGUgc2ltcGxlIHN5bnRoIHNhbXBsZVxuICAgICAgdGhpcy5zb3VyY2UgPSBjb25maWcuY29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgICB0aGlzLnNvdXJjZS50eXBlID0gJ3NpbmUnO1xuICAgICAgdGhpcy5zb3VyY2UuZnJlcXVlbmN5LnZhbHVlID0gZXZlbnQuZnJlcXVlbmN5O1xuICAgICAgdGhpcy5zb3VyY2UuY29ubmVjdChjb25maWcuZGVzdGluYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCl7XG4gICAgY29uc29sZS5sb2codGhpcy5zb3VyY2UpO1xuICAgIHRoaXMuc291cmNlLnN0YXJ0KCk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTYW1wbGUoc2FtcGxlRGF0YSwgZXZlbnQpe1xuICByZXR1cm4gbmV3IFNhbXBsZShzYW1wbGVEYXRhLCBldmVudCk7XG59IiwiLypcbiAgVGhpcyBpcyB0aGUgbWFpbiBtb2R1bGUgb2YgdGhlIGxpYnJhcnk6IGl0IGNyZWF0ZXMgdGhlIHNlcXVlbmNlciBvYmplY3QgYW5kIGZ1bmN0aW9uYWxpdHkgZnJvbSBvdGhlciBtb2R1bGVzIGdldHMgbWl4ZWQgaW5cbiovXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gcmVxdWlyZWQgYnkgYmFiZWxpZnkgZm9yIHRyYW5zcGlsaW5nIGVzNlxucmVxdWlyZSgnYmFiZWxpZnkvcG9seWZpbGwnKTtcblxuaW1wb3J0IGdldENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcyc7XG4vL2ltcG9ydCBwb2x5RmlsbCBmcm9tICcuL3BvbHlmaWxsLmpzJztcbmltcG9ydCBpbml0QXVkaW8gZnJvbSAnLi9pbml0X2F1ZGlvLmpzJztcbmltcG9ydCBpbml0TWlkaSBmcm9tICcuL2luaXRfbWlkaS5qcyc7XG5pbXBvcnQge2NyZWF0ZVNvbmd9IGZyb20gJy4vc29uZy5qcyc7XG5pbXBvcnQge2NyZWF0ZVRyYWNrfSBmcm9tICcuL3RyYWNrLmpzJztcbmltcG9ydCB7Y3JlYXRlTUlESUV2ZW50fSBmcm9tICcuL21pZGlfZXZlbnQuanMnO1xuaW1wb3J0IHtjcmVhdGVJbnN0cnVtZW50fSBmcm9tICcuL2luc3RydW1lbnQuanMnO1xuaW1wb3J0IGNyZWF0ZVNvbmdGcm9tTUlESUZpbGUgZnJvbSAnLi9zb25nX2Zyb21fbWlkaWZpbGUuanMnO1xuaW1wb3J0IHtzdGFydH0gZnJvbSAnLi9oZWFydGJlYXQuanMnO1xuaW1wb3J0IHthamF4fSBmcm9tICcuL3V0aWwuanMnO1xuaW1wb3J0IHtjcmVhdGVOb3RlLCBnZXROb3RlTnVtYmVyLCBnZXROb3RlTmFtZSwgZ2V0Tm90ZU9jdGF2ZSwgZ2V0RnVsbE5vdGVOYW1lLCBnZXRGcmVxdWVuY3ksIGlzQmxhY2tLZXl9IGZyb20gJy4vbm90ZS5qcyc7XG5cbmxldCBzZXF1ZW5jZXIgPSB7fTtcbmxldCBjb25maWc7XG5sZXQgZGVidWdMZXZlbDtcblxuXG5mdW5jdGlvbiBpbml0KCl7XG4gIHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcik7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCl7XG4gIC8vcG9seWZpbGwoKTtcbiAgY29uZmlnID0gZ2V0Q29uZmlnKCk7XG4gIC8vIHRoZSBkZWJ1ZyBsZXZlbCBoYXMgYmVlbiBzZXQgYmVmb3JlIHNlcXVlbmNlci5pbml0KCkgc28gYWRkIGl0IHRvIHRoZSBjb25maWcgb2JqZWN0XG4gIGlmKGRlYnVnTGV2ZWwgIT09IHVuZGVmaW5lZCl7XG4gICAgY29uZmlnLmRlYnVnTGV2ZWwgPSBkZWJ1Z0xldmVsO1xuICB9XG5cbiAgaWYoY29uZmlnID09PSBmYWxzZSl7XG4gICAgcmVqZWN0KGBUaGUgV2ViQXVkaW8gQVBJIGhhc25cXCd0IGJlZW4gaW1wbGVtZW50ZWQgaW4gJHtjb25maWcuYnJvd3Nlcn0sIHBsZWFzZSB1c2UgYW55IG90aGVyIGJyb3dzZXJgKTtcbiAgfWVsc2V7XG4gICAgLy8gY3JlYXRlIHRoZSBjb250ZXh0IGFuZCBzaGFyZSBpdCBpbnRlcm5hbGx5IHZpYSB0aGUgY29uZmlnIG9iamVjdFxuICAgIGNvbmZpZy5jb250ZXh0ID0gbmV3IHdpbmRvdy5BdWRpb0NvbnRleHQoKTtcbiAgICBjb25maWcuZGVzdGluYXRpb24gPSBjb25maWcuY29udGV4dC5kZXN0aW5hdGlvbjtcbiAgICAvLyBhZGQgdW5sb2NrIG1ldGhvZCBmb3IgaW9zIGRldmljZXNcbiAgICAvLyB1bmxvY2tXZWJBdWRpbyBpcyBjYWxsZWQgd2hlbiB0aGUgdXNlciBjYWxsZWQgU29uZy5wbGF5KCksIGJlY2F1c2Ugd2UgYXNzdW1lIHRoYXQgdGhlIHVzZXIgcHJlc3NlcyBhIGJ1dHRvbiB0byBzdGFydCB0aGUgc29uZy5cbiAgICBpZihjb25maWcub3MgIT09ICdpb3MnKXtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICd1bmxvY2tXZWJBdWRpbycsIHt2YWx1ZTogZnVuY3Rpb24oKXt9fSk7XG4gICAgfWVsc2V7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAndW5sb2NrV2ViQXVkaW8nLCB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIGxldCBzcmMgPSBjb25maWcuY29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKCksXG4gICAgICAgICAgICBnYWluTm9kZSA9IGNvbmZpZy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgICBnYWluTm9kZS5nYWluLnZhbHVlID0gMDtcbiAgICAgICAgICBzcmMuY29ubmVjdChnYWluTm9kZSk7XG4gICAgICAgICAgZ2Fpbk5vZGUuY29ubmVjdChjb25maWcuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICAgICAgaWYoc3JjLm5vdGVPbiAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHNyYy5zdGFydCA9IHNyYy5ub3RlT247XG4gICAgICAgICAgICBzcmMuc3RvcCA9IHNyYy5ub3RlT2ZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcmMuc3RhcnQoMCk7XG4gICAgICAgICAgc3JjLnN0b3AoMC4wMDEpO1xuICAgICAgICAgIC8vIHJlbW92ZSBmdW5jdGlvbiBhZnRlciBmaXJzdCB1c2VcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAndW5sb2NrV2ViQXVkaW8nLCB7dmFsdWU6IGZ1bmN0aW9uKCl7fX0pO1xuICAgICAgICB9LFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBdWRpbyhjb25maWcuY29udGV4dCkudGhlbihcbiAgICAgIGZ1bmN0aW9uIG9uRnVsZmlsbGVkKGRhdGEpe1xuXG4gICAgICAgIGNvbmZpZy5sZWdhY3kgPSBkYXRhLmxlZ2FjeTsgLy8gdHJ1ZSBpZiB0aGUgYnJvd3NlciB1c2VzIGFuIG9sZGVyIHZlcnNpb24gb2YgdGhlIFdlYkF1ZGlvIEFQSSwgc291cmNlLm5vdGVPbigpIGFuZCBzb3VyY2Uubm90ZU9mZiBpbnN0ZWFkIG9mIHNvdXJjZS5zdGFydCgpIGFuZCBzb3VyY2Uuc3RvcCgpXG4gICAgICAgIGNvbmZpZy5sb3d0aWNrID0gZGF0YS5sb3d0aWNrOyAvLyBtZXRyb25vbWUgc2FtcGxlXG4gICAgICAgIGNvbmZpZy5oaWdodGljayA9IGRhdGEuaGlnaHRpY2s7IC8vbWV0cm9ub21lIHNhbXBsZVxuICAgICAgICBjb25maWcubWFzdGVyR2Fpbk5vZGUgPSBkYXRhLmdhaW5Ob2RlO1xuICAgICAgICBjb25maWcubWFzdGVyQ29tcHJlc3NvciA9IGRhdGEuY29tcHJlc3NvcjtcbiAgICAgICAgY29uZmlnLmdldFRpbWUgPSBkYXRhLmdldFRpbWU7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ3RpbWUnLCB7Z2V0OiBkYXRhLmdldFRpbWV9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ2F1ZGlvQ29udGV4dCcsIHtnZXQ6IGRhdGEuZ2V0QXVkaW9Db250ZXh0fSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdtYXN0ZXJWb2x1bWUnLCB7Z2V0OiBkYXRhLmdldE1hc3RlclZvbHVtZSwgc2V0OiBkYXRhLnNldE1hc3RlclZvbHVtZX0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAnZW5hYmxlTWFzdGVyQ29tcHJlc3NvcicsIHt2YWx1ZTogZGF0YS5lbmFibGVNYXN0ZXJDb21wcmVzc29yfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdjb25maWd1cmVNYXN0ZXJDb21wcmVzc29yJywge3ZhbHVlOiBkYXRhLmNvbmZpZ3VyZU1hc3RlckNvbXByZXNzb3J9KTtcblxuICAgICAgICBpbml0TWlkaSgpLnRoZW4oXG4gICAgICAgICAgZnVuY3Rpb24gb25GdWxmaWxsZWQobWlkaSl7XG5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdtaWRpSW5wdXRzJywge3ZhbHVlOiBtaWRpLmlucHV0c30pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ21pZGlPdXRwdXRzJywge3ZhbHVlOiBtaWRpLm91dHB1dHN9KTtcblxuICAgICAgICAgICAgLy9PYmplY3Quc2VhbChzZXF1ZW5jZXIpO1xuICAgICAgICAgICAgc3RhcnQoKTsgLy8gc3RhcnQgaGVhcnRiZWF0XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiBvblJlamVjdGVkKGUpe1xuICAgICAgICAgICAgaWYoZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlID09PSAnc3RyaW5nJyl7XG4gICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvbmZpZy5icm93c2VyID09PSAnY2hyb21lJyB8fCBjb25maWcuYnJvd3NlciA9PT0gJ2Nocm9taXVtJyl7XG4gICAgICAgICAgICAgIHJlamVjdCgnV2ViIE1JREkgQVBJIG5vdCBlbmFibGVkJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgcmVqZWN0KCdXZWIgTUlESSBBUEkgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiBvblJlamVjdGVkKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAnbmFtZScsIHt2YWx1ZTogJ3FhbWJpJ30pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ2luaXQnLCB7dmFsdWU6IGluaXR9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICd1aScsIHt2YWx1ZToge30sIHdyaXRhYmxlOiB0cnVlfSk7IC8vIHVpIGZ1bmN0aW9uc1xuXG5cbi8vIGFkZCB1dGlsIGZ1bmN0aW9uc1xubGV0IHV0aWwgPSB7fTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh1dGlsLCAnYWpheCcsIHt2YWx1ZTogYWpheH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ3V0aWwnLCB7dmFsdWU6IHV0aWx9KTtcblxuLy9UT0RPOiBjcmVhdGUgbWV0aG9kcyBnZXRTb25ncywgcmVtb3ZlU29uZyBhbmQgc28gb25cbi8vT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ2FjdGl2ZVNvbmdzJywge2FjdGl2ZVNvbmdzOiB7fSwgd3JpdGFibGU6IHRydWV9KTsgLy8gdGhlIHNvbmdzIHRoYXQgYXJlIGN1cnJlbnRseSBsb2FkZWQgaW4gbWVtb3J5XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdkZWJ1Z0xldmVsJywge1xuICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGNvbmZpZy5kZWJ1Z0xldmVsO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICBpZihjb25maWcgIT09IHVuZGVmaW5lZCl7XG4gICAgICBjb25maWcuZGVidWdMZXZlbCA9IHZhbHVlO1xuICAgIH1lbHNle1xuICAgICAgLy8gYWxsb3cgdGhlIGRlYnVnTGV2ZWwgdG8gYmUgc2V0IGJlZm9yZSBzZXF1ZW5jZXIuaW5pdCgpO1xuICAgICAgZGVidWdMZXZlbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAnY3JlYXRlTUlESUV2ZW50Jywge3ZhbHVlOiBjcmVhdGVNSURJRXZlbnR9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdjcmVhdGVUcmFjaycsIHt2YWx1ZTogY3JlYXRlVHJhY2t9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdjcmVhdGVTb25nJywge3ZhbHVlOiBjcmVhdGVTb25nfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAnY3JlYXRlSW5zdHJ1bWVudCcsIHt2YWx1ZTogY3JlYXRlSW5zdHJ1bWVudH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ2NyZWF0ZVNvbmdGcm9tTUlESUZpbGUnLCB7dmFsdWU6IGNyZWF0ZVNvbmdGcm9tTUlESUZpbGV9KTtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAnY3JlYXRlTm90ZScsIHt2YWx1ZTogY3JlYXRlTm90ZX0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ2dldE5vdGVOdW1iZXInLCB7dmFsdWU6IGdldE5vdGVOdW1iZXJ9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdnZXROb3RlTmFtZScsIHt2YWx1ZTogZ2V0Tm90ZU5hbWV9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdnZXROb3RlT2N0YXZlJywge3ZhbHVlOiBnZXROb3RlT2N0YXZlfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAnZ2V0RnVsbE5vdGVOYW1lJywge3ZhbHVlOiBnZXRGdWxsTm90ZU5hbWV9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdnZXRGcmVxdWVuY3knLCB7dmFsdWU6IGdldEZyZXF1ZW5jeX0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ2lzQmxhY2tLZXknLCB7dmFsdWU6IGlzQmxhY2tLZXl9KTtcblxuXG5cbi8vIG5vdGUgbmFtZSBtb2RpXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAnU0hBUlAnLCB7dmFsdWU6ICdzaGFycCd9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdGTEFUJywge3ZhbHVlOiAnZmxhdCd9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdFTkhBUk1PTklDX1NIQVJQJywge3ZhbHVlOiAnZW5oYXJtb25pYy1zaGFycCd9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdFTkhBUk1PTklDX0ZMQVQnLCB7dmFsdWU6ICdlbmhhcm1vbmljLWZsYXQnfSk7XG5cblxuLy8gc3RhbmRhcmQgTUlESSBldmVudHNcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdOT1RFX09GRicsIHt2YWx1ZTogMHg4MH0pOyAvLzEyOFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ05PVEVfT04nLCB7dmFsdWU6IDB4OTB9KTsgLy8xNDRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdQT0xZX1BSRVNTVVJFJywge3ZhbHVlOiAweEEwfSk7IC8vMTYwXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAnQ09OVFJPTF9DSEFOR0UnLCB7dmFsdWU6IDB4QjB9KTsgLy8xNzZcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdQUk9HUkFNX0NIQU5HRScsIHt2YWx1ZTogMHhDMH0pOyAvLzE5MlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ0NIQU5ORUxfUFJFU1NVUkUnLCB7dmFsdWU6IDB4RDB9KTsgLy8yMDhcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdQSVRDSF9CRU5EJywge3ZhbHVlOiAweEUwfSk7IC8vMjI0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAnU1lTVEVNX0VYQ0xVU0lWRScsIHt2YWx1ZTogMHhGMH0pOyAvLzI0MFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ01JRElfVElNRUNPREUnLCB7dmFsdWU6IDI0MX0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ1NPTkdfUE9TSVRJT04nLCB7dmFsdWU6IDI0Mn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ1NPTkdfU0VMRUNUJywge3ZhbHVlOiAyNDN9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdUVU5FX1JFUVVFU1QnLCB7dmFsdWU6IDI0Nn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ0VPWCcsIHt2YWx1ZTogMjQ3fSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAnVElNSU5HX0NMT0NLJywge3ZhbHVlOiAyNDh9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdTVEFSVCcsIHt2YWx1ZTogMjUwfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAnQ09OVElOVUUnLCB7dmFsdWU6IDI1MX0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ1NUT1AnLCB7dmFsdWU6IDI1Mn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ0FDVElWRV9TRU5TSU5HJywge3ZhbHVlOiAyNTR9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdTWVNURU1fUkVTRVQnLCB7dmFsdWU6IDI1NX0pO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZXF1ZW5jZXIsICdURU1QTycsIHt2YWx1ZTogMHg1MX0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlcXVlbmNlciwgJ1RJTUVfU0lHTkFUVVJFJywge3ZhbHVlOiAweDU4fSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2VxdWVuY2VyLCAnRU5EX09GX1RSQUNLJywge3ZhbHVlOiAweDJGfSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgc2VxdWVuY2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIsIGRpc3BhdGNoRXZlbnR9IGZyb20gJy4vc29uZ19hZGRfZXZlbnRsaXN0ZW5lcic7XG5pbXBvcnQge2xvZywgaW5mbywgd2FybiwgZXJyb3IsIHR5cGVTdHJpbmd9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7VHJhY2t9IGZyb20gJy4vdHJhY2snO1xuaW1wb3J0IHtQYXJ0fSBmcm9tICcuL3BhcnQnO1xuaW1wb3J0IHtNSURJRXZlbnR9IGZyb20gJy4vbWlkaV9ldmVudCc7XG5pbXBvcnQge2luaXRNaWRpU29uZywgc2V0TWlkaUlucHV0U29uZywgc2V0TWlkaU91dHB1dFNvbmd9IGZyb20gJy4vaW5pdF9taWRpJztcblxuXG5sZXQgc29uZ0lkID0gMCxcbiAgY29uZmlnID0gZ2V0Q29uZmlnKCksXG4gIGRlZmF1bHRTb25nID0gY29uZmlnLmdldCgnZGVmYXVsdFNvbmcnKTtcblxuXG5leHBvcnQgY2xhc3MgU29uZ3tcblxuICAvKlxuICAgIEBwYXJhbSBzZXR0aW5ncyBpcyBhIE1hcCBvciBhbiBPYmplY3RcbiAgKi9cbiAgY29uc3RydWN0b3Ioc2V0dGluZ3Mpe1xuXG4gICAgdGhpcy5pZCA9ICdTJyArIHNvbmdJZCsrICsgRGF0ZS5ub3coKTtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmlkO1xuICAgIHRoaXMuX2V2ZW50cyA9IFtdOyAvLyBhbGwgTUlESSBhbmQgYXVkaW8gZXZlbnRzXG4gICAgdGhpcy5fcGFydHMgPSBbXTtcbiAgICB0aGlzLl90cmFja3MgPSBbXTtcbiAgICB0aGlzLl9ldmVudHNNYXAgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fcGFydHNNYXAgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fdHJhY2tzTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgdGhpcy5fdGltZUV2ZW50cyA9IFtdOyAvLyBhbGwgdGVtcG8gYW5kIHRpbWUgc2lnbmF0dXJlIGV2ZW50c1xuICAgIHRoaXMuX2FsbEV2ZW50cyA9IFtdOyAvLyBhbGwgdGVtcG8gYW5kIHRpbWUgc2lnbmF0dXJlIGV2ZW50cywgcGx1cyBhbGwgTUlESSBhbmQgYXVkaW8gZXZlbnRzXG5cbiAgICB0aGlzLm5lZWRzVXBkYXRlID0gZmFsc2U7XG5cbiAgICAvLyBmaXJzdCBhZGQgYWxsIHNldHRpbmdzIGZyb20gdGhlIGRlZmF1bHQgc29uZ1xuLy8vKlxuICAgIGRlZmF1bHRTb25nLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSl7XG4gICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB9LCB0aGlzKTtcbi8vKi9cbi8qXG4gICAgLy8gb3I6XG4gICAgZm9yKGxldFt2YWx1ZSwga2V5XSBvZiBkZWZhdWx0U29uZy5lbnRyaWVzKCkpe1xuICAgICAgKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgfSkoa2V5LCB2YWx1ZSk7XG4gICAgfVxuKi9cblxuXG4gICAgaWYoc2V0dGluZ3MudGltZUV2ZW50cyl7XG4gICAgICB0aGlzLl90aW1lRXZlbnRzID0gQXJyYXkuZnJvbShzZXR0aW5ncy50aW1lRXZlbnRzKTtcbiAgICAgIC8vZGVsZXRlIHNldHRpbmdzLnRpbWVFdmVudHM7XG4gICAgfVxuXG4gICAgaWYoc2V0dGluZ3MudHJhY2tzKXtcbiAgICAgIGZvcihsZXQgdHJhY2sgb2Ygc2V0dGluZ3MudHJhY2tzKXtcbiAgICAgICAgdGhpcy5hZGRUcmFjayh0cmFjayk7XG4gICAgICB9XG4gICAgICAvL2RlbGV0ZSBzZXR0aW5ncy50cmFja3M7XG4gICAgfVxuXG4gICAgLy9zZXR0aW5ncyA9IG51bGw7XG5cbiAgICAvLyB0aGVuIG92ZXJyaWRlIHNldHRpbmdzIGJ5IHByb3ZpZGVkIHNldHRpbmdzXG4gICAgaWYodHlwZVN0cmluZyhzZXR0aW5ncykgPT09ICdvYmplY3QnKXtcbiAgICAgIE9iamVjdC5rZXlzKHNldHRpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHRoaXNba2V5XSA9IHNldHRpbmdzW2tleV07XG4gICAgICB9LCB0aGlzKTtcbiAgICB9ZWxzZSBpZihzZXR0aW5ncyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHNldHRpbmdzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSl7XG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gaW5pdGlhbGl6ZSBtaWRpIGZvciB0aGlzIHNvbmc6IGFkZCBNYXBzIGZvciBtaWRpIGluLSBhbmQgb3V0cHV0cywgYW5kIGFkZCBldmVudGxpc3RlbmVycyB0byB0aGUgbWlkaSBpbnB1dHNcbiAgICB0aGlzLm1pZGlJbnB1dHMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5taWRpT3V0cHV0cyA9IG5ldyBNYXAoKTtcbiAgICBpbml0TWlkaVNvbmcodGhpcyk7IC8vIEBzZWU6IGluaXRfbWlkaS5qc1xuXG4gICAgdGhpcy5sYXN0QmFyID0gdGhpcy5iYXJzO1xuICAgIHRoaXMucGl0Y2hSYW5nZSA9IHRoaXMuaGlnaGVzdE5vdGUgLSB0aGlzLmxvd2VzdE5vdGUgKyAxO1xuICAgIHRoaXMuZmFjdG9yID0gNC90aGlzLmRlbm9taW5hdG9yO1xuICAgIHRoaXMudGlja3NQZXJCZWF0ID0gdGhpcy5wcHEgKiB0aGlzLmZhY3RvcjtcbiAgICB0aGlzLnRpY2tzUGVyQmFyID0gdGhpcy50aWNrc1BlckJlYXQgKiB0aGlzLm5vbWluYXRvcjtcbiAgICB0aGlzLm1pbGxpc1BlclRpY2sgPSAoNjAwMDAvdGhpcy5icG0vdGhpcy5wcHEpO1xuICAgIHRoaXMucmVjb3JkSWQgPSAtMTtcbiAgICB0aGlzLmRvTG9vcCA9IGZhbHNlO1xuICAgIHRoaXMuaWxsZWdhbExvb3AgPSB0cnVlO1xuICAgIHRoaXMubG9vcFN0YXJ0ID0gMDtcbiAgICB0aGlzLmxvb3BFbmQgPSAwO1xuICAgIHRoaXMubG9vcER1cmF0aW9uID0gMDtcbiAgICB0aGlzLmF1ZGlvUmVjb3JkaW5nTGF0ZW5jeSA9IDA7XG4gICAgdGhpcy5ncmlkID0gdW5kZWZpbmVkO1xuXG4gICAgY29uZmlnLmdldCgnYWN0aXZlU29uZ3MnKVt0aGlzLmlkXSA9IHRoaXM7XG5cblxuICAgIC8vY29uc29sZS5sb2codGhpcyk7XG4vKlxuICAgIGlmKHNldHRpbmdzLnRpbWVFdmVudHMgJiYgc2V0dGluZ3MudGltZUV2ZW50cy5sZW5ndGggPiAwKXtcbiAgICAgIHRoaXMudGltZUV2ZW50cyA9IEFycmF5LmZyb20oc2V0dGluZ3MudGltZUV2ZW50cyk7XG5cbiAgICAgIHRoaXMudGVtcG9FdmVudCA9IGdldFRpbWVFdmVudHMoc2VxdWVuY2VyLlRFTVBPLCB0aGlzKVswXTtcbiAgICAgIHRoaXMudGltZVNpZ25hdHVyZUV2ZW50ID0gZ2V0VGltZUV2ZW50cyhzZXF1ZW5jZXIuVElNRV9TSUdOQVRVUkUsIHRoaXMpWzBdO1xuXG4gICAgICBpZih0aGlzLnRlbXBvRXZlbnQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHRoaXMudGVtcG9FdmVudCA9IG5ldyBNSURJRXZlbnQoMCwgc2VxdWVuY2VyLlRFTVBPLCB0aGlzLmJwbSk7XG4gICAgICAgIHRoaXMudGltZUV2ZW50cy51bnNoaWZ0KHRoaXMudGVtcG9FdmVudCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5icG0gPSB0aGlzLnRlbXBvRXZlbnQuYnBtO1xuICAgICAgfVxuICAgICAgaWYodGhpcy50aW1lU2lnbmF0dXJlRXZlbnQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHRoaXMudGltZVNpZ25hdHVyZUV2ZW50ID0gbmV3IE1JRElFdmVudCgwLCBzZXF1ZW5jZXIuVElNRV9TSUdOQVRVUkUsIHRoaXMubm9taW5hdG9yLCB0aGlzLmRlbm9taW5hdG9yKTtcbiAgICAgICAgdGhpcy50aW1lRXZlbnRzLnVuc2hpZnQodGhpcy50aW1lU2lnbmF0dXJlRXZlbnQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMubm9taW5hdG9yID0gdGhpcy50aW1lU2lnbmF0dXJlRXZlbnQubm9taW5hdG9yO1xuICAgICAgICB0aGlzLmRlbm9taW5hdG9yID0gdGhpcy50aW1lU2lnbmF0dXJlRXZlbnQuZGVub21pbmF0b3I7XG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKDEsIHRoaXMubm9taW5hdG9yLCB0aGlzLmRlbm9taW5hdG9yLCB0aGlzLmJwbSk7XG4gICAgfWVsc2V7XG4gICAgICAvLyB0aGVyZSBoYXMgdG8gYmUgYSB0ZW1wbyBhbmQgdGltZSBzaWduYXR1cmUgZXZlbnQgYXQgdGlja3MgMCwgb3RoZXJ3aXNlIHRoZSBwb3NpdGlvbiBjYW4ndCBiZSBjYWxjdWxhdGVkLCBhbmQgbW9yZW92ZXIsIGl0IGlzIGRpY3RhdGVkIGJ5IHRoZSBNSURJIHN0YW5kYXJkXG4gICAgICB0aGlzLnRlbXBvRXZlbnQgPSBuZXcgTUlESUV2ZW50KDAsIHNlcXVlbmNlci5URU1QTywgdGhpcy5icG0pO1xuICAgICAgdGhpcy50aW1lU2lnbmF0dXJlRXZlbnQgPSBuZXcgTUlESUV2ZW50KDAsIHNlcXVlbmNlci5USU1FX1NJR05BVFVSRSwgdGhpcy5ub21pbmF0b3IsIHRoaXMuZGVub21pbmF0b3IpO1xuICAgICAgdGhpcy50aW1lRXZlbnRzID0gW1xuICAgICAgICB0aGlzLnRlbXBvRXZlbnQsXG4gICAgICAgIHRoaXMudGltZVNpZ25hdHVyZUV2ZW50XG4gICAgICBdO1xuICAgIH1cblxuICAgIC8vIFRPRE86IEEgdmFsdWUgZm9yIGJwbSwgbm9taW5hdG9yIGFuZCBkZW5vbWluYXRvciBpbiB0aGUgY29uZmlnIG92ZXJydWxlcyB0aGUgdGltZSBldmVudHMgc3BlY2lmaWVkIGluIHRoZSBjb25maWcgLT4gbWF5YmUgdGhpcyBzaG91bGQgYmUgdGhlIG90aGVyIHdheSByb3VuZFxuXG4gICAgLy8gaWYgYSB2YWx1ZSBmb3IgYnBtIGlzIHNldCBpbiB0aGUgY29uZmlnLCBhbmQgdGhpcyB2YWx1ZSBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgYnBtIHZhbHVlIG9mIHRoZSBmaXJzdFxuICAgIC8vIHRlbXBvIGV2ZW50LCBhbGwgdGVtcG8gZXZlbnRzIHdpbGwgYmUgdXBkYXRlZCB0byB0aGUgYnBtIHZhbHVlIGluIHRoZSBjb25maWcuXG4gICAgaWYoY29uZmlnLnRpbWVFdmVudHMgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuYnBtICE9PSB1bmRlZmluZWQpe1xuICAgICAgaWYodGhpcy5icG0gIT09IGNvbmZpZy5icG0pe1xuICAgICAgICB0aGlzLnNldFRlbXBvKGNvbmZpZy5icG0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBhIHZhbHVlIGZvciBub21pbmF0b3IgYW5kL29yIGRlbm9taW5hdG9yIGlzIHNldCBpbiB0aGUgY29uZmlnLCBhbmQgdGhpcy90aGVzZSB2YWx1ZShzKSBpcy9hcmUgZGlmZmVyZW50IGZyb20gdGhlIHZhbHVlc1xuICAgIC8vIG9mIHRoZSBmaXJzdCB0aW1lIHNpZ25hdHVyZSBldmVudCwgYWxsIHRpbWUgc2lnbmF0dXJlIGV2ZW50cyB3aWxsIGJlIHVwZGF0ZWQgdG8gdGhlIHZhbHVlcyBpbiB0aGUgY29uZmlnLlxuICAgIC8vIEBUT0RPOiBtYXliZSBvbmx5IHRoZSBmaXJzdCB0aW1lIHNpZ25hdHVyZSBldmVudCBzaG91bGQgYmUgdXBkYXRlZD9cbiAgICBpZihjb25maWcudGltZUV2ZW50cyAhPT0gdW5kZWZpbmVkICYmIChjb25maWcubm9taW5hdG9yICE9PSB1bmRlZmluZWQgfHwgY29uZmlnLmRlbm9taW5hdG9yICE9PSB1bmRlZmluZWQpKXtcbiAgICAgIGlmKHRoaXMubm9taW5hdG9yICE9PSBjb25maWcubm9taW5hdG9yIHx8IHRoaXMuZGVub21pbmF0b3IgIT09IGNvbmZpZy5kZW5vbWluYXRvcil7XG4gICAgICAgIHRoaXMuc2V0VGltZVNpZ25hdHVyZShjb25maWcubm9taW5hdG9yIHx8IHRoaXMubm9taW5hdG9yLCBjb25maWcuZGVub21pbmF0b3IgfHwgdGhpcy5kZW5vbWluYXRvciwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vY29uc29sZS5sb2coMiwgdGhpcy5ub21pbmF0b3IsIHRoaXMuZGVub21pbmF0b3IsIHRoaXMuYnBtKTtcblxuICAgIHRoaXMudHJhY2tzID0gW107XG4gICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgIHRoaXMubm90ZXMgPSBbXTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdOy8vLmNvbmNhdCh0aGlzLnRpbWVFdmVudHMpO1xuICAgIHRoaXMuYWxsRXZlbnRzID0gW107IC8vIGFsbCBldmVudHMgcGx1cyBtZXRyb25vbWUgdGlja3NcblxuICAgIHRoaXMudHJhY2tzQnlJZCA9IHt9O1xuICAgIHRoaXMudHJhY2tzQnlOYW1lID0ge307XG4gICAgdGhpcy5wYXJ0c0J5SWQgPSB7fTtcbiAgICB0aGlzLm5vdGVzQnlJZCA9IHt9O1xuICAgIHRoaXMuZXZlbnRzQnlJZCA9IHt9O1xuXG4gICAgdGhpcy5hY3RpdmVFdmVudHMgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlTm90ZXMgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlUGFydHMgPSBudWxsO1xuXG4gICAgdGhpcy5yZWNvcmRlZE5vdGVzID0gW107XG4gICAgdGhpcy5yZWNvcmRlZEV2ZW50cyA9IFtdO1xuICAgIHRoaXMucmVjb3JkaW5nTm90ZXMgPSB7fTsgLy8gbm90ZXMgdGhhdCBkb24ndCBoYXZlIHRoZWlyIG5vdGUgb2ZmIGV2ZW50cyB5ZXRcblxuICAgIHRoaXMubnVtVHJhY2tzID0gMDtcbiAgICB0aGlzLm51bVBhcnRzID0gMDtcbiAgICB0aGlzLm51bU5vdGVzID0gMDtcbiAgICB0aGlzLm51bUV2ZW50cyA9IDA7XG4gICAgdGhpcy5pbnN0cnVtZW50cyA9IFtdO1xuXG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgIHRoaXMucmVjb3JkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wcmVyb2xsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wcmVjb3VudGluZyA9IGZhbHNlO1xuICAgIHRoaXMucHJlcm9sbCA9IHRydWU7XG4gICAgdGhpcy5wcmVjb3VudCA9IDA7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcblxuICAgIHRoaXMucGxheWhlYWQgPSBjcmVhdGVQbGF5aGVhZCh0aGlzLCB0aGlzLnBvc2l0aW9uVHlwZSwgdGhpcy5pZCwgdGhpcyk7Ly8sIHRoaXMucG9zaXRpb24pO1xuICAgIHRoaXMucGxheWhlYWRSZWNvcmRpbmcgPSBjcmVhdGVQbGF5aGVhZCh0aGlzLCAnYWxsJywgdGhpcy5pZCArICdfcmVjb3JkaW5nJyk7XG4gICAgdGhpcy5zY2hlZHVsZXIgPSBjcmVhdGVTY2hlZHVsZXIodGhpcyk7XG4gICAgdGhpcy5mb2xsb3dFdmVudCA9IGNyZWF0ZUZvbGxvd0V2ZW50KHRoaXMpO1xuXG4gICAgdGhpcy52b2x1bWUgPSAxO1xuICAgIHRoaXMuZ2Fpbk5vZGUgPSBjb250ZXh0LmNyZWF0ZUdhaW5Ob2RlKCk7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gdGhpcy52b2x1bWU7XG4gICAgdGhpcy5tZXRyb25vbWUgPSBjcmVhdGVNZXRyb25vbWUodGhpcywgZGlzcGF0Y2hFdmVudCk7XG4gICAgdGhpcy5jb25uZWN0KCk7XG5cblxuICAgIGlmKGNvbmZpZy5jbGFzc05hbWUgPT09ICdNaWRpRmlsZScgJiYgY29uZmlnLmxvYWRlZCA9PT0gZmFsc2Upe1xuICAgICAgaWYoc2VxdWVuY2VyLmRlYnVnKXtcbiAgICAgICAgY29uc29sZS53YXJuKCdtaWRpZmlsZScsIGNvbmZpZy5uYW1lLCAnaGFzIG5vdCB5ZXQgYmVlbiBsb2FkZWQhJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9pZihjb25maWcudHJhY2tzICYmIGNvbmZpZy50cmFja3MubGVuZ3RoID4gMCl7XG4gICAgaWYoY29uZmlnLnRyYWNrcyl7XG4gICAgICB0aGlzLmFkZFRyYWNrcyhjb25maWcudHJhY2tzKTtcbiAgICB9XG5cbiAgICBpZihjb25maWcucGFydHMpe1xuICAgICAgdGhpcy5hZGRQYXJ0cyhjb25maWcucGFydHMpO1xuICAgIH1cblxuICAgIGlmKGNvbmZpZy5ldmVudHMpe1xuICAgICAgdGhpcy5hZGRFdmVudHMoY29uZmlnLmV2ZW50cyk7XG4gICAgfVxuXG4gICAgaWYoY29uZmlnLmV2ZW50cyB8fCBjb25maWcucGFydHMgfHwgY29uZmlnLnRyYWNrcyl7XG4gICAgICAvL2NvbnNvbGUubG9nKGNvbmZpZy5ldmVudHMsIGNvbmZpZy5wYXJ0cywgY29uZmlnLnRyYWNrcylcbiAgICAgIC8vIHRoZSBsZW5ndGggb2YgdGhlIHNvbmcgd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHRoZSBldmVudHMsIHBhcnRzIGFuZC9vciB0cmFja3MgdGhhdCBhcmUgYWRkZWQgdG8gdGhlIHNvbmdcbiAgICAgIGlmKGNvbmZpZy5iYXJzID09PSB1bmRlZmluZWQpe1xuICAgICAgICB0aGlzLmxhc3RCYXIgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5sYXN0RXZlbnQgPSBuZXcgTUlESUV2ZW50KFt0aGlzLmxhc3RCYXIsIHNlcXVlbmNlci5FTkRfT0ZfVFJBQ0tdKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubGFzdEV2ZW50ID0gbmV3IE1JRElFdmVudChbdGhpcy5iYXJzICogdGhpcy50aWNrc1BlckJhciwgc2VxdWVuY2VyLkVORF9PRl9UUkFDS10pO1xuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKCd1cGRhdGUnKTtcbiAgICB0aGlzLnVwZGF0ZSh0cnVlKTtcblxuICAgIHRoaXMubnVtVGltZUV2ZW50cyA9IHRoaXMudGltZUV2ZW50cy5sZW5ndGg7XG4gICAgdGhpcy5wbGF5aGVhZC5zZXQoJ3RpY2tzJywgMCk7XG4gICAgdGhpcy5taWRpRXZlbnRMaXN0ZW5lcnMgPSB7fTtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMudGltZUV2ZW50cyk7XG5cbiovXG4gIH1cblxuXG4gIHN0b3AoKXtcbiAgICBkaXNwYXRjaEV2ZW50KCdzdG9wJyk7XG4gIH1cblxuICBwbGF5KCl7XG4gICAgZGlzcGF0Y2hFdmVudCgncGxheScpO1xuICB9XG5cbiAgc2V0TWlkaUlucHV0KGlkLCBmbGFnID0gdHJ1ZSl7XG4gICAgc2V0TWlkaUlucHV0U29uZyh0aGlzLCBpZCwgZmxhZyk7XG4gIH1cblxuICBzZXRNaWRpT3V0cHV0KGlkLCBmbGFnID0gdHJ1ZSl7XG4gICAgc2V0TWlkaU91dHB1dFNvbmcodGhpcywgaWQsIGZsYWcpO1xuICB9XG5cbiAgYWRkTWlkaUV2ZW50TGlzdGVuZXIoLi4uYXJncyl7XG4gICAgYWRkTWlkaUV2ZW50TGlzdGVuZXIodGhpcywgLi4uYXJncyk7XG4gIH1cblxuXG4gIGFkZFRyYWNrKHRyYWNrKXtcbiAgICBpZih0cmFjayBpbnN0YW5jZW9mIFRyYWNrKXtcbiAgICAgIHRyYWNrLnNvbmcgPSB0aGlzO1xuICAgICAgdHJhY2suc3RhdGUgPSAnbmV3JztcbiAgICAgIHRoaXMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgdGhpcy5fdHJhY2tzTWFwLnNldCh0cmFjay5pZCwgdHJhY2spO1xuICAgICAgdGhpcy5fbnVtYmVyT2ZUcmFja3NDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzOyAvLyBtYWtlIGl0IGNoYWluYWJsZVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRyYWNrKHRyYWNrKXtcbiAgICBpZih0aGlzLl90cmFja3NNYXAuaGFzKHRyYWNrLmlkKSl7XG4gICAgICB0cmFjay5zdGF0ZSA9ICdyZW1vdmVkJztcbiAgICAgIHRoaXMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgdGhpcy5fbnVtYmVyT2ZUcmFja3NDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzOyAvLyBtYWtlIGl0IGNoYWluYWJsZVxuICAgIH1cbiAgfVxuXG4gIGdldFRyYWNrcygpe1xuICAgIGlmKHRoaXMubmVlZHNVcGRhdGUpe1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3RyYWNrcztcbiAgfVxuXG4gIHVwZGF0ZSgpe1xuXG4gICAgLy8gdXBkYXRlIF90cmFja3MgYXJyYXkgYW5kIF90cmFja3NNYXAgbWFwXG4gICAgaWYodGhpcy5fbnVtYmVyT2ZUcmFja3NDaGFuZ2VkID09PSB0cnVlKXtcbiAgICAgIHRoaXMuX3RyYWNrcyA9IFtdO1xuICAgICAgQXJyYXkuZnJvbSh0aGlzLl90cmFja3NNYXAudmFsdWVzKCkpLmZvckVhY2goKHRyYWNrKSA9PiB7XG4gICAgICAgIGlmKHRyYWNrLnN0YXRlID09PSAncmVtb3ZlZCcpe1xuICAgICAgICAgIHRoaXMuX3RyYWNrc01hcC5kZWxldGUodHJhY2suaWQpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0cmFjay5zdGF0ZSA9ICdjbGVhbic7XG4gICAgICAgICAgdGhpcy5fdHJhY2tzLnB1c2godHJhY2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX251bWJlck9mVHJhY2tzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cblxuXG5cbiAgICAvLyBhZGQgYWxsIG5ldyBldmVudHMgYW5kIHBhcnRzIHRvIHRoZSBhcnJheSBhbmQgdGhlIG1hcCBpbiBxdWVzdGlvblxuICAgIGZvcihsZXQgdHJhY2sgb2YgdGhpcy5fdHJhY2tzKXtcbiAgICAgIGlmKHRyYWNrLm5lZWRzVXBkYXRlID09PSB0cnVlKXtcbiAgICAgICAgdHJhY2sudXBkYXRlKCk7XG4gICAgICB9XG4gICAgICBmb3IobGV0IGV2ZW50IG9mIHRyYWNrLl9uZXdFdmVudHMudmFsdWVzKCkpe1xuICAgICAgICB0aGlzLl9ldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c01hcC5zZXQoZXZlbnQuaWQsIGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIC8vIHdlIGNhbiBjbGVhciB0aGUgX25ld0V2ZW50cyBtYXAgbm93OyBpdCB3aWxsIGJlIHBvcHVsYXRlZCBhZ2FpbiBhcyBzb29uIGFzIG5ldyBldmVudHMgYXJlIGFkZGVkXG4gICAgICB0cmFjay5fbmV3RXZlbnRzLmNsZWFyKCk7XG5cbiAgICAgIGZvcihsZXQgcGFydCBvZiB0cmFjay5fbmV3UGFydHMudmFsdWVzKCkpe1xuICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICB0aGlzLl9wYXJ0c01hcC5zZXQocGFydC5pZCwgcGFydCk7XG4gICAgICB9XG4gICAgICAvLyB3ZSBjYW4gY2xlYXIgdGhlIF9uZXdQYXJ0cyBtYXAgbm93OyBpdCB3aWxsIGJlIHBvcHVsYXRlZCBhZ2FpbiBhcyBzb29uIGFzIG5ldyBwYXJ0cyBhcmUgYWRkZWRcbiAgICAgIHRyYWNrLl9uZXdQYXJ0cy5jbGVhcigpO1xuICAgIH1cblxuXG5cbiAgICAvLyB1cGRhdGUgX3BhcnRzIGFycmF5IGFuZCBfcGFydHNNYXAgbWFwXG4gICAgaWYodGhpcy5fbnVtYmVyT2ZQYXJ0c0NoYW5nZWQgPT09IHRydWUpe1xuICAgICAgdGhpcy5fcGFydHMgPSBbXTtcbiAgICAgIEFycmF5LmZyb20odGhpcy5fcGFydHNNYXAudmFsdWVzKCkpLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgICAgLy8gdGhlIHN0YXRlIG9mIGEgcGFydCBnZXRzIHNldCB0byAncmVtb3ZlZCcgd2hlbiB0cmFjay5yZW1vdmVQYXJ0KCkgaXMgY2FsbGVkXG4gICAgICAgIGlmKHBhcnQuc3RhdGUgPT09ICdyZW1vdmVkJyl7XG4gICAgICAgICAgdGhpcy5fcGFydHNNYXAuZGVsZXRlKHBhcnQuaWQpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBwYXJ0LnN0YXRlID0gJ2NsZWFuJztcbiAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX251bWJlck9mUGFydHNDaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG5cblxuICAgIC8vIHVwZGF0ZSBfZXZlbnRzIGFycmF5IGFuZCBfZXZlbnRzTWFwIG1hcFxuICAgIGlmKHRoaXMuX251bWJlck9mRXZlbnRzQ2hhbmdlZCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLl9ldmVudHMgPSBbXTtcbiAgICAgIEFycmF5LmZyb20odGhpcy5fZXZlbnRzTWFwLnZhbHVlcygpKS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICBpZihldmVudC5zdGF0ZSA9PT0gJ3JlbW92ZWQnKXtcbiAgICAgICAgLy8gdGhlIHN0YXRlIG9mIGEgZXZlbnQgZ2V0cyBzZXQgdG8gJ3JlbW92ZWQnIHdoZW4gcGFydC5yZW1vdmVFdmVudCgpIG9yIHRyYWNrLnJlbW92ZUV2ZW50KCkgaXMgY2FsbGVkXG4gICAgICAgICAgdGhpcy5fZXZlbnRzTWFwLmRlbGV0ZShldmVudC5pZCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGV2ZW50LnN0YXRlID0gJ2NsZWFuJztcbiAgICAgICAgICB0aGlzLl9ldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fbnVtYmVyT2ZFdmVudHNDaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX3BhcnRzLnNvcnQoKGEsIGIpID0+IChhLnRpY2tzIDw9IGIudGlja3MpID8gLTEgOiAxKTtcbiAgICB0aGlzLl9ldmVudHMuc29ydCgoYSwgYikgPT4gKGEudGlja3MgPD0gYi50aWNrcykgPyAtMSA6IDEpO1xuXG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICB9XG59XG5cblNvbmcucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuU29uZy5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5Tb25nLnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU29uZyhzZXR0aW5ncyl7XG4gIHJldHVybiBuZXcgU29uZyhzZXR0aW5ncyk7XG59IiwibGV0IGxpc3RlbmVycyA9IHt9O1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGlkLCBjYWxsYmFjayl7XG4gIGxpc3RlbmVyc1tpZF0gPSBjYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihpZCwgY2FsbGJhY2spe1xuICBkZWxldGUgbGlzdGVuZXJzW2lkXTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChpZCl7XG4gIGZvcihsZXQga2V5IGluIGxpc3RlbmVycyl7XG4gICAgaWYoa2V5ID09PSBpZCAmJiBsaXN0ZW5lcnMuaGFzT3duUHJvcGVydHkoa2V5KSl7XG4gICAgICBsaXN0ZW5lcnNba2V5XShpZCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7YWRkRXZlbnRMaXN0ZW5lciBhcyBhZGRFdmVudExpc3RlbmVyfTtcbmV4cG9ydCB7cmVtb3ZlRXZlbnRMaXN0ZW5lciBhcyByZW1vdmVFdmVudExpc3RlbmVyfTtcbmV4cG9ydCB7ZGlzcGF0Y2hFdmVudCBhcyBkaXNwYXRjaEV2ZW50fTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7bG9nLCBpbmZvLCB3YXJuLCBlcnJvciwgYmFzZTY0VG9CaW5hcnksIGFqYXh9IGZyb20gJy4vdXRpbC5qcyc7XG5pbXBvcnQgcGFyc2VNSURJRmlsZSBmcm9tICcuL21pZGlfcGFyc2UnO1xuaW1wb3J0IHtNSURJRXZlbnR9IGZyb20gJy4vbWlkaV9ldmVudCc7XG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydCc7XG5pbXBvcnQge1RyYWNrfSBmcm9tICcuL3RyYWNrJztcbmltcG9ydCB7U29uZ30gZnJvbSAnLi9zb25nJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTb25nRnJvbU1JRElGaWxlKGRhdGEpe1xuXG4gIGlmKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA9PT0gdHJ1ZSl7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICAgIHJldHVybiB0b1NvbmcocGFyc2VNSURJRmlsZShidWZmZXIpKTtcbiAgfWVsc2UgaWYoZGF0YS5oZWFkZXIgIT09IHVuZGVmaW5lZCAmJiBkYXRhLnRyYWNrcyAhPT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gdG9Tb25nKGRhdGEpO1xuICB9ZWxzZXtcbiAgICBkYXRhID0gYmFzZTY0VG9CaW5hcnkoZGF0YSk7XG4gICAgaWYoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID09PSB0cnVlKXtcbiAgICAgIGxldCBidWZmZXIgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgICAgIHJldHVybiB0b1NvbmcocGFyc2VNSURJRmlsZShidWZmZXIpKTtcbiAgICB9ZWxzZXtcbiAgICAgIGVycm9yKCd3cm9uZyBkYXRhJyk7XG4gICAgfVxuICB9XG59XG5cblxuZnVuY3Rpb24gdG9Tb25nKHBhcnNlZCl7XG4gIGxldCB0cmFja3MgPSBwYXJzZWQudHJhY2tzO1xuICBsZXQgcHBxID0gcGFyc2VkLmhlYWRlci50aWNrc1BlckJlYXQ7XG4gIGxldCB0aW1lRXZlbnRzID0gW107XG4gIGxldCBjb25maWcgPSB7XG4gICAgdHJhY2tzOiBbXVxuICB9O1xuICBsZXQgZXZlbnRzO1xuXG4gIGZvcihsZXQgdHJhY2sgb2YgdHJhY2tzLnZhbHVlcygpKXtcbiAgICBsZXQgbGFzdFRpY2tzLCBsYXN0VHlwZTtcbiAgICBsZXQgdGlja3MgPSAwO1xuICAgIGxldCB0eXBlO1xuICAgIGxldCBjaGFubmVsID0gLTE7XG4gICAgZXZlbnRzID0gW107XG5cbiAgICBmb3IobGV0IGV2ZW50IG9mIHRyYWNrKXtcbiAgICAgIHRpY2tzICs9IChldmVudC5kZWx0YVRpbWUgKiBwcHEpO1xuICAgICAgLy9jb25zb2xlLmxvZyhldmVudC5zdWJ0eXBlLCBldmVudC5kZWx0YVRpbWUsIHRtcFRpY2tzKTtcblxuICAgICAgaWYoY2hhbm5lbCA9PT0gLTEgJiYgZXZlbnQuY2hhbm5lbCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgY2hhbm5lbCA9IGV2ZW50LmNoYW5uZWw7XG4gICAgICAgIHRyYWNrLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgICAgfVxuICAgICAgdHlwZSA9IGV2ZW50LnN1YnR5cGU7XG5cbiAgICAgIHN3aXRjaChldmVudC5zdWJ0eXBlKXtcblxuICAgICAgICBjYXNlICd0cmFja05hbWUnOlxuICAgICAgICAgIHRyYWNrLm5hbWUgPSBldmVudC50ZXh0O1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ25hbWUnLCB0cmFjay5uYW1lLCBudW1UcmFja3MpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2luc3RydW1lbnROYW1lJzpcbiAgICAgICAgICBpZihldmVudC50ZXh0KXtcbiAgICAgICAgICAgIHRyYWNrLmluc3RydW1lbnROYW1lID0gZXZlbnQudGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbm90ZU9uJzpcbiAgICAgICAgICBldmVudHMucHVzaChuZXcgTUlESUV2ZW50KHRpY2tzLCAweDkwLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ25vdGVPZmYnOlxuICAgICAgICAgIGV2ZW50cy5wdXNoKG5ldyBNSURJRXZlbnQodGlja3MsIDB4ODAsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5KSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnc2V0VGVtcG8nOlxuICAgICAgICAgIC8vIHNvbWV0aW1lcyAyIHRlbXBvIGV2ZW50cyBoYXZlIHRoZSBzYW1lIHBvc2l0aW9uIGluIHRpY2tzXG4gICAgICAgICAgLy8gd2UgdXNlIHRoZSBsYXN0IGluIHRoZXNlIGNhc2VzIChzYW1lIGFzIEN1YmFzZSlcbiAgICAgICAgICBsZXQgYnBtID0gNjAwMDAwMDAvZXZlbnQubWljcm9zZWNvbmRzUGVyQmVhdDtcblxuICAgICAgICAgIGlmKHRpY2tzID09PSBsYXN0VGlja3MgJiYgdHlwZSA9PT0gbGFzdFR5cGUpe1xuICAgICAgICAgICAgaW5mbygndGVtcG8gZXZlbnRzIG9uIHRoZSBzYW1lIHRpY2snLCB0aWNrcywgYnBtKTtcbiAgICAgICAgICAgIHRpbWVFdmVudHMucG9wKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoY29uZmlnLmJwbSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNvbmZpZy5icG0gPSBicG07XG4gICAgICAgICAgfVxuICAgICAgICAgIHRpbWVFdmVudHMucHVzaChuZXcgTUlESUV2ZW50KHRpY2tzLCAweDUxLCBicG0pKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICd0aW1lU2lnbmF0dXJlJzpcbiAgICAgICAgICAvLyBzb21ldGltZXMgMiB0aW1lIHNpZ25hdHVyZSBldmVudHMgaGF2ZSB0aGUgc2FtZSBwb3NpdGlvbiBpbiB0aWNrc1xuICAgICAgICAgIC8vIHdlIHVzZSB0aGUgbGFzdCBpbiB0aGVzZSBjYXNlcyAoc2FtZSBhcyBDdWJhc2UpXG4gICAgICAgICAgaWYobGFzdFRpY2tzID09PSB0aWNrcyAmJiBsYXN0VHlwZSA9PT0gdHlwZSl7XG4gICAgICAgICAgICBpbmZvKCd0aW1lIHNpZ25hdHVyZSBldmVudHMgb24gdGhlIHNhbWUgdGljaycsIHRpY2tzLCBldmVudC5udW1lcmF0b3IsIGV2ZW50LmRlbm9taW5hdG9yKTtcbiAgICAgICAgICAgIHRpbWVFdmVudHMucG9wKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoY29uZmlnLm5vbWluYXRvciA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNvbmZpZy5ub21pbmF0b3IgPSBldmVudC5udW1lcmF0b3I7XG4gICAgICAgICAgICBjb25maWcuZGVub21pbmF0b3IgPSBldmVudC5kZW5vbWluYXRvcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGltZUV2ZW50cy5wdXNoKG5ldyBNSURJRXZlbnQodGlja3MsIDB4NTgsIGV2ZW50Lm51bWVyYXRvciwgZXZlbnQuZGVub21pbmF0b3IpKTtcbiAgICAgICAgICBicmVhaztcblxuXG4gICAgICAgIGNhc2UgJ2NvbnRyb2xsZXInOlxuICAgICAgICAgIGV2ZW50cy5wdXNoKG5ldyBNSURJRXZlbnQodGlja3MsIDB4QjAsIGV2ZW50LmNvbnRyb2xsZXJUeXBlLCBldmVudC52YWx1ZSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Byb2dyYW1DaGFuZ2UnOlxuICAgICAgICAgIGV2ZW50cy5wdXNoKG5ldyBNSURJRXZlbnQodGlja3MsIDB4QzAsIGV2ZW50LnByb2dyYW1OdW1iZXIpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdwaXRjaEJlbmQnOlxuICAgICAgICAgIGV2ZW50cy5wdXNoKG5ldyBNSURJRXZlbnQodGlja3MsIDB4RTAsIGV2ZW50LnZhbHVlKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRyYWNrLm5hbWUsIGV2ZW50LnR5cGUpO1xuICAgICAgfVxuXG4gICAgICBsYXN0VHlwZSA9IHR5cGU7XG4gICAgICBsYXN0VGlja3MgPSB0aWNrcztcbiAgICB9XG5cbiAgICBpZihldmVudHMubGVuZ3RoID4gMCl7XG4gICAgICBjb25maWcudHJhY2tzLnB1c2gobmV3IFRyYWNrKCkuYWRkUGFydChuZXcgUGFydCh7ZXZlbnRzOmV2ZW50c30pKSk7XG4gICAgfVxuICB9XG5cbiAgY29uZmlnLnBwcSA9IHBwcTtcbiAgY29uZmlnLnRpbWVFdmVudHMgPSB0aW1lRXZlbnRzO1xuICBsZXQgc29uZyA9IG5ldyBTb25nKGNvbmZpZyk7XG4gIHNvbmcudXBkYXRlKCk7XG4gIHJldHVybiBzb25nO1xufSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtQYXJ0fSBmcm9tICcuL3BhcnQnO1xuXG5sZXQgdHJhY2tJZCA9IDA7XG5cblxuZXhwb3J0IGNsYXNzIFRyYWNre1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KXtcbiAgICB0aGlzLmlkID0gJ1QnICsgdHJhY2tJZCsrICsgRGF0ZS5ub3coKTtcbiAgICB0aGlzLl9wYXJ0cyA9IFtdO1xuICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xuICAgIHRoaXMuc3RhdGUgPSAnY2xlYW4nO1xuXG4gICAgdGhpcy5fcGFydHNNYXAgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fZXZlbnRzTWFwID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuX25ld0V2ZW50cyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLl9uZXdQYXJ0cyA9IG5ldyBNYXAoKTtcblxuICAgIHRoaXMubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl9udW1iZXJPZlBhcnRzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHRoaXMuX251bWJlck9mRXZlbnRzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgaWYoY29uZmlnLnBhcnRzKXtcbiAgICAgIHRoaXMuYWRkUGFydHMoY29uZmlnLnBhcnRzKTtcbiAgICAgIGNvbmZpZy5wYXJ0cyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lIHx8IHRoaXMuaWQ7XG4gICAgY29uZmlnID0gbnVsbDtcbiAgfVxuXG4vKlxuICBhZGRFdmVudChldmVudCl7XG4gICAgbGV0IHBhcnQgPSBuZXcgUGFydCgpO1xuICAgIHBhcnQudHJhY2sgPSB0aGlzO1xuICAgIHBhcnQuYWRkRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuX3BhcnRzTWFwLnNldChwYXJ0LmlkLCBwYXJ0KTtcbiAgICB0aGlzLm51bWJlck9mUGFydHNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGFkZEV2ZW50cyhldmVudHMpe1xuICAgIGxldCBwYXJ0ID0gbmV3IFBhcnQoKTtcbiAgICBwYXJ0LnRyYWNrID0gdGhpcztcbiAgICBwYXJ0LmFkZEV2ZW50cyhldmVudHMpO1xuICAgIHRoaXMuX3BhcnRzTWFwLnNldChwYXJ0LmlkLCBwYXJ0KTtcbiAgICB0aGlzLm51bWJlck9mUGFydHNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuKi9cblxuICBhZGRQYXJ0KHBhcnQpe1xuICAgIGlmKHBhcnQgaW5zdGFuY2VvZiBQYXJ0KXtcbiAgICAgIHBhcnQudHJhY2sgPSB0aGlzO1xuICAgICAgcGFydC5zdGF0ZSA9ICduZXcnO1xuICAgICAgdGhpcy5fcGFydHNNYXAuc2V0KHBhcnQuaWQsIHBhcnQpO1xuICAgICAgdGhpcy5fbnVtYmVyT2ZFdmVudHNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX251bWJlck9mUGFydHNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpczsgLy8gbWFrZSBpdCBjaGFpbmFibGVcbiAgfVxuXG4gIGFkZFBhcnRzKHBhcnRzKXtcbiAgICBmb3IobGV0IHBhcnQgaW4gcGFydHMpe1xuICAgICAgdGhpcy5hZGRQYXJ0KHBhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpczsgLy8gbWFrZSBpdCBjaGFpbmFibGVcbiAgfVxuXG5cbiAgcmVtb3ZlUGFydChwYXJ0KXtcbiAgICBpZih0aGlzLl9wYXJ0c01hcC5oYXMocGFydC5pZCkpe1xuICAgICAgLy9AdG9kbzogcGFydC5yZXNldCgpIGhlcmUsIGp1c3QgbGlrZSBldmVudC5yZXNldCgpP1xuICAgICAgcGFydC5zdGF0ZSA9ICdyZW1vdmVkJztcbiAgICAgIHRoaXMuX251bWJlck9mRXZlbnRzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB0aGlzLl9udW1iZXJPZlBhcnRzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7IC8vIG1ha2UgaXQgY2hhaW5hYmxlXG4gIH1cblxuICByZW1vdmVQYXJ0cyhwYXJ0cyl7XG4gICAgZm9yKGxldCBwYXJ0IGluIHBhcnRzKXtcbiAgICAgIHRoaXMucmVtb3ZlUGFydChwYXJ0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7IC8vIG1ha2UgaXQgY2hhaW5hYmxlXG4gIH1cblxuXG4gIG1vdmVQYXJ0KHBhcnQsIHRpY2tzKXtcbiAgICBpZih0aGlzLl9wYXJ0c01hcC5oYXMocGFydC5pZCkpe1xuICAgICAgcGFydC5tb3ZlRXZlbnRzKHBhcnQuZXZlbnRzLCB0aWNrcyk7XG4gICAgICBpZihwYXJ0LnN0YXRlICE9PSAnbmV3Jyl7XG4gICAgICAgIHBhcnQuc3RhdGUgPSAnbW92ZWQnO1xuICAgICAgfVxuICAgICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzOyAvLyBtYWtlIGl0IGNoYWluYWJsZVxuICB9XG5cbiAgbW92ZVBhcnRzKHBhcnRzLCB0aWNrcyl7XG4gICAgZm9yKGxldCBwYXJ0IGluIHBhcnRzKXtcbiAgICAgIHRoaXMubW92ZVBhcnQocGFydCwgdGlja3MpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpczsgLy8gbWFrZSBpdCBjaGFpbmFibGVcbiAgfVxuXG5cbiAgdHJhbnNwb3NlUGFydChwYXJ0LCBzZW1pdG9uZXMpe1xuICAgIGlmKHRoaXMuX3BhcnRzTWFwLmhhcyhwYXJ0LmlkKSl7XG4gICAgICBwYXJ0LnRyYW5zcG9zZUV2ZW50cyhwYXJ0LmV2ZW50cywgc2VtaXRvbmVzKTtcbiAgICAgIGlmKHBhcnQuc3RhdGUgIT09ICduZXcnKXtcbiAgICAgICAgcGFydC5zdGF0ZSA9ICd0cmFuc3Bvc2VkJztcbiAgICAgIH1cbiAgICAgIC8vIG5vIG5lZWQgdG8gc2V0IG5lZWRzVXBkYXRlIHRvIHRydWUhXG4gICAgfVxuICAgIHJldHVybiB0aGlzOyAvLyBtYWtlIGl0IGNoYWluYWJsZVxuICB9XG5cbiAgdHJhbnNwb3NlUGFydHMocGFydHMsIHNlbWl0b25lcyl7XG4gICAgZm9yKGxldCBwYXJ0IGluIHBhcnRzKXtcbiAgICAgIHRoaXMudHJhbnNwb3NlUGFydChwYXJ0LCBzZW1pdG9uZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpczsgLy8gbWFrZSBpdCBjaGFpbmFibGVcbiAgfVxuXG5cbiAgZ2V0RXZlbnRzKCl7XG4gICAgaWYodGhpcy5uZWVkc1VwZGF0ZSl7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXZlbnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKXtcbiAgICBpZih0aGlzLm5lZWRzVXBkYXRlKXtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wYXJ0cztcbiAgfVxuXG4gIHVwZGF0ZSgpe1xuXG4gICAgLy8gaWYgbnVtYmVyIG9mIHBhcnRzIGhhcyBjaGFuZ2VkIHVwZGF0ZSB0aGUgX3BhcnRzIGFycmF5IGFuZCB0aGUgX3BhcnRzTWFwIG1hcFxuICAgIGlmKHRoaXMuX251bWJlck9mUGFydHNDaGFuZ2VkID09PSB0cnVlKXtcbiAgICAgIHRoaXMuX3BhcnRzID0gW107XG4gICAgICBBcnJheS5mcm9tKHRoaXMuX3BhcnRzTWFwLnZhbHVlcygpKS5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgIGlmKHBhcnQuc3RhdGUgPT09ICdyZW1vdmVkJyl7XG4gICAgICAgICAgdGhpcy5fcGFydHNNYXAuZGVsZXRlKHBhcnQuaWQpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy5zb25nICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAvLyB0ZWxsIHRoZSBzb25nIHRvIHVwZGF0ZSBpdHMgcGFydHMgYXJyYXkgYXMgd2VsbCwgdGhpcyBpcyBkb25lIHdoZW4gc29uZy51cGRhdGUoKSBpcyBjYWxsZWRcbiAgICAgICAgdGhpcy5zb25nLl9udW1iZXJPZlBhcnRzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLl9udW1iZXJPZlBhcnRzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX3BhcnRzLnNvcnQoKGEsIGIpID0+IChhLnRpY2tzIDw9IGIudGlja3MpID8gLTEgOiAxKTtcblxuXG4gICAgLy8gMSkgcmVhcCBhbGwgbmV3IGV2ZW50cyBhbmQgYWRkIHRoZW0gdG8gX2V2ZW50c01hcFxuICAgIC8vIDIpIHN0b3JlIG5ldyBldmVudHMgaW4gX25ld0V2ZW50cywgYW5kIG5ldyBwYXJ0cyBpbiBfbmV3UGFydHMgc28gdGhlIG5ldyBldmVudHMgYW5kIHBhcnRzIGFyZSBhdmFpbGFibGUgZm9yIHNvbmcudXBkYXRlKCkgYXMgd2VsbFxuICAgIGZvcihsZXQgcGFydCBvZiB0aGlzLl9wYXJ0cyl7XG4gICAgICAvLyBwYXJ0LmdldEV2ZW50cygpIGFsc28gdHJpZ2dlcnMgcGFydC51cGRhdGUoKSBpZiBuZWNlc3NhcnlcbiAgICAgIGxldCBuZXdFdmVudHMgPSBwYXJ0LmdldEV2ZW50cygpLmZpbHRlcihmdW5jdGlvbihldmVudCl7XG4gICAgICAgIHJldHVybiBldmVudC5zdGF0ZSA9PT0gJ25ldyc7XG4gICAgICB9KTtcbiAgICAgIGZvcihsZXQgZXZlbnQgb2YgbmV3RXZlbnRzKXtcbiAgICAgICAgdGhpcy5fZXZlbnRzTWFwLnNldChldmVudC5pZCwgZXZlbnQpO1xuICAgICAgICB0aGlzLl9uZXdFdmVudHMuc2V0KGV2ZW50LmlkLCBldmVudCk7XG4gICAgICAgIGV2ZW50LnN0YXRlID0gJ2NsZWFuJztcbiAgICAgIH1cbiAgICAgIGlmKHBhcnQuc3RhdGUgPT09ICduZXcnKXtcbiAgICAgICAgdGhpcy5fbmV3UGFydHMuc2V0KHBhcnQuaWQsIHBhcnQpO1xuICAgICAgICBwYXJ0LnN0YXRlID0gJ2NsZWFuJztcbiAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgLy8gaWYgbnVtYmVyIG9mIGV2ZW50cyBoYXMgY2hhbmdlZCB1cGRhdGUgdGhlIF9ldmVudHMgYXJyYXkgYW5kIHRoZSBfZXZlbnRzTWFwIG1hcFxuICAgIGlmKHRoaXMuX251bWJlck9mRXZlbnRzQ2hhbmdlZCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLl9ldmVudHMgPSBbXTtcbiAgICAgIEFycmF5LmZyb20odGhpcy5fZXZlbnRzTWFwLnZhbHVlcygpKS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICBpZihldmVudC5zdGF0ZSA9PT0gJ3JlbW92ZWQnKXtcbiAgICAgICAgICB0aGlzLl9ldmVudHNNYXAuZGVsZXRlKGV2ZW50LmlkKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy5zb25nICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAvLyB0ZWxsIHRoZSBzb25nIHRvIHVwZGF0ZSBpdHMgZXZlbnRzIGFycmF5IGFzIHdlbGwsIHRoaXMgaXMgZG9uZSB3aGVuIHNvbmcudXBkYXRlKCkgaXMgY2FsbGVkXG4gICAgICAgIHRoaXMuc29uZy5fbnVtYmVyT2ZFdmVudHNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX251bWJlck9mRXZlbnRzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cy5zb3J0KChhLCBiKSA9PiAoYS50aWNrcyA8PSBiLnRpY2tzKSA/IC0xIDogMSk7XG5cblxuICAgIHRoaXMubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhY2soY29uZmlnKXtcbiAgcmV0dXJuIG5ldyBUcmFjayhjb25maWcpO1xufVxuXG5cbi8qXG5sZXQgVHJhY2sgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGlkID0gJ1QnICsgdHJhY2tJZCsrICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaWQnLCB7XG4gICAgICAgICAgICB2YWx1ZTogaWRcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVHJhY2soKXtcbiAgdmFyIHQgPSBPYmplY3QuY3JlYXRlKFRyYWNrKTtcbiAgdC5pbml0KGFyZ3VtZW50cyk7XG4gIHJldHVybiB0O1xufVxuXG4qLyIsIi8qXG4gIEFuIHVub3JnYW5pc2VkIGNvbGxlY3Rpb24gb2YgdmFyaW91cyB1dGlsaXR5IGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGFjcm9zcyB0aGUgbGlicmFyeVxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJy4vY29uZmlnJztcblxubGV0XG4gIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSxcbiAgbVBvdyA9IE1hdGgucG93LFxuICBtUm91bmQgPSBNYXRoLnJvdW5kLFxuICBtRmxvb3IgPSBNYXRoLmZsb29yLFxuICBtUmFuZG9tID0gTWF0aC5yYW5kb20sXG4gIGNvbmZpZyA9IGdldENvbmZpZygpO1xuICAvLyBjb250ZXh0ID0gY29uZmlnLmNvbnRleHQsXG4gIC8vIGZsb29yID0gZnVuY3Rpb24odmFsdWUpe1xuICAvLyAgcmV0dXJuIHZhbHVlIHwgMDtcbiAgLy8gfSxcblxuY29uc3RcbiAgbm90ZUxlbmd0aE5hbWVzID0ge1xuICAgIDE6ICdxdWFydGVyJyxcbiAgICAyOiAnZWlnaHRoJyxcbiAgICA0OiAnc2l4dGVlbnRoJyxcbiAgICA4OiAnMzJ0aCcsXG4gICAgMTY6ICc2NHRoJ1xuICB9O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlU3RyaW5nKG8pe1xuICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jyl7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9XG5cbiAgaWYobyA9PT0gbnVsbCl7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuXG4gIC8vb2JqZWN0LCBhcnJheSwgZnVuY3Rpb24sIGRhdGUsIHJlZ2V4cCwgc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4sIGVycm9yXG4gIGxldCBpbnRlcm5hbENsYXNzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLm1hdGNoKC9cXFtvYmplY3RcXHMoXFx3KylcXF0vKVsxXTtcbiAgcmV0dXJuIGludGVybmFsQ2xhc3MudG9Mb3dlckNhc2UoKTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhamF4KGNvbmZpZyl7XG4gIGxldFxuICAgIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSxcbiAgICBtZXRob2QgPSBjb25maWcubWV0aG9kID09PSB1bmRlZmluZWQgPyAnR0VUJyA6IGNvbmZpZy5tZXRob2QsXG4gICAgZmlsZVNpemU7XG5cbiAgZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KXtcblxuICAgIHJlamVjdCA9IHJlamVjdCB8fCBmdW5jdGlvbigpe307XG4gICAgcmVzb2x2ZSA9IHJlc29sdmUgfHwgZnVuY3Rpb24oKXt9O1xuXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgICAgaWYocmVxdWVzdC5zdGF0dXMgIT09IDIwMCl7XG4gICAgICAgIHJlamVjdChyZXF1ZXN0LnN0YXR1cyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nKXtcbiAgICAgICAgZmlsZVNpemUgPSByZXF1ZXN0LnJlc3BvbnNlLmxlbmd0aDtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2UpLCBmaWxlU2l6ZSk7XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXNwb25zZSk7XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgY29uZmlnLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIGNvbmZpZy51cmwsIHRydWUpO1xuXG4gICAgaWYoY29uZmlnLm92ZXJyaWRlTWltZVR5cGUpe1xuICAgICAgICByZXF1ZXN0Lm92ZXJyaWRlTWltZVR5cGUoY29uZmlnLm92ZXJyaWRlTWltZVR5cGUpO1xuICAgIH1cblxuICAgIGlmKGNvbmZpZy5yZXNwb25zZVR5cGUpe1xuICAgICAgICBpZihjb25maWcucmVzcG9uc2VUeXBlID09PSAnanNvbicpe1xuICAgICAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAndGV4dCc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgaWYoY29uZmlnLmRhdGEpe1xuICAgICAgICByZXF1ZXN0LnNlbmQoY29uZmlnLmRhdGEpO1xuICAgIH1lbHNle1xuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpO1xufVxuXG5cbmZ1bmN0aW9uIHBhcnNlU2FtcGxlKHNhbXBsZSwgaWQsIGV2ZXJ5KXtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgdHJ5e1xuICAgICAgY29uZmlnLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHNhbXBsZSxcbiAgICAgICAgZnVuY3Rpb24gb25TdWNjZXNzKGJ1ZmZlcil7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhpZCwgYnVmZmVyKTtcbiAgICAgICAgICBpZihpZCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHJlc29sdmUoeydpZCc6IGlkLCAnYnVmZmVyJzogYnVmZmVyfSk7XG4gICAgICAgICAgICBpZihldmVyeSl7XG4gICAgICAgICAgICAgIGV2ZXJ5KHsnaWQnOiBpZCwgJ2J1ZmZlcic6IGJ1ZmZlcn0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVzb2x2ZShidWZmZXIpO1xuICAgICAgICAgICAgaWYoZXZlcnkpe1xuICAgICAgICAgICAgICBldmVyeShidWZmZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiBvbkVycm9yKGUpe1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdlcnJvciBkZWNvZGluZyBhdWRpb2RhdGEnLCBpZCwgZSk7XG4gICAgICAgIC8vcmVqZWN0KGUpOyAvLyBkb24ndCB1c2UgcmVqZWN0IGJlY2F1c2Ugd2UgdXNlIHRoaXMgYXMgYSBuZXN0ZWQgcHJvbWlzZSBhbmQgd2UgZG9uJ3Qgd2FudCB0aGUgcGFyZW50IHByb21pc2UgdG8gcmVqZWN0XG4gICAgICAgIGlmKGlkICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgIHJlc29sdmUoeydpZCc6IGlkLCAnYnVmZmVyJzogdW5kZWZpbmVkfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgLy9jb25zb2xlLmxvZygnZXJyb3IgZGVjb2RpbmcgYXVkaW9kYXRhJywgaWQsIGUpO1xuICAgICAgLy9yZWplY3QoZSk7XG4gICAgICBpZihpZCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcmVzb2x2ZSh7J2lkJzogaWQsICdidWZmZXInOiB1bmRlZmluZWR9KTtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBsb2FkQW5kUGFyc2VTYW1wbGUodXJsLCBpZCwgZXZlcnkpe1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBhamF4KHt1cmw6IHVybCwgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInfSkudGhlbihcbiAgICAgIGZ1bmN0aW9uIG9uRnVsZmlsbGVkKGRhdGEpe1xuICAgICAgICBwYXJzZVNhbXBsZShkYXRhLCBpZCwgZXZlcnkpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiBvblJlamVjdGVkKCl7XG4gICAgICAgIGlmKGlkICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgIHJlc29sdmUoeydpZCc6IGlkLCAnYnVmZmVyJzogdW5kZWZpbmVkfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNhbXBsZXMobWFwcGluZywgZXZlcnkpe1xuICBsZXQga2V5LCBzYW1wbGUsXG4gICAgcHJvbWlzZXMgPSBbXSxcbiAgICB0eXBlID0gdHlwZVN0cmluZyhtYXBwaW5nKTtcblxuICBldmVyeSA9IHR5cGVTdHJpbmcoZXZlcnkpID09PSAnZnVuY3Rpb24nID8gZXZlcnkgOiBmYWxzZTtcbiAgLy9jb25zb2xlLmxvZyh0eXBlLCBtYXBwaW5nKVxuICBpZih0eXBlID09PSAnb2JqZWN0Jyl7XG4gICAgZm9yKGtleSBpbiBtYXBwaW5nKXtcbiAgICAgIGlmKG1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSl7XG4gICAgICAgIHNhbXBsZSA9IG1hcHBpbmdba2V5XTtcbiAgICAgICAgaWYoc2FtcGxlLmluZGV4T2YoJ2h0dHA6Ly8nKSA9PT0gLTEpe1xuICAgICAgICAgIHByb21pc2VzLnB1c2gocGFyc2VTYW1wbGUoYmFzZTY0VG9CaW5hcnkoc2FtcGxlKSwga2V5LCBldmVyeSkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKGxvYWRBbmRQYXJzZVNhbXBsZShzYW1wbGUsIGtleSwgZXZlcnkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfWVsc2UgaWYodHlwZSA9PT0gJ2FycmF5Jyl7XG4gICAgbWFwcGluZy5mb3JFYWNoKGZ1bmN0aW9uKHNhbXBsZSl7XG4gICAgICBpZihzYW1wbGUuaW5kZXhPZignaHR0cDovLycpID09PSAtMSl7XG4gICAgICAgIHByb21pc2VzLnB1c2gocGFyc2VTYW1wbGUoYmFzZTY0VG9CaW5hcnkoc2FtcGxlKSwgZXZlcnkpKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBwcm9taXNlcy5wdXNoKGxvYWRBbmRQYXJzZVNhbXBsZShzYW1wbGUsIGV2ZXJ5KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihcbiAgICAgIGZ1bmN0aW9uIG9uRnVsZmlsbGVkKHZhbHVlcyl7XG4gICAgICAgIGlmKHR5cGUgPT09ICdvYmplY3QnKXtcbiAgICAgICAgICBsZXQgbWFwcGluZyA9IHt9O1xuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgIG1hcHBpbmdbdmFsdWUuaWRdID0gdmFsdWUuYnVmZmVyO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vY29uc29sZS5sb2cobWFwcGluZyk7XG4gICAgICAgICAgcmVzb2x2ZShtYXBwaW5nKTtcbiAgICAgICAgfWVsc2UgaWYodHlwZSA9PT0gJ2FycmF5Jyl7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gb25SZWplY3RlZChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgICk7XG4gIH0pO1xufVxuXG5cblxuLy8gYWRhcHRlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9kYW5ndWVyL2Jsb2ctZXhhbXBsZXMvYmxvYi9tYXN0ZXIvanMvYmFzZTY0LWJpbmFyeS5qc1xuZnVuY3Rpb24gYmFzZTY0VG9CaW5hcnkoaW5wdXQpe1xuICBsZXQga2V5U3RyID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JyxcbiAgICBieXRlcywgdWFycmF5LCBidWZmZXIsXG4gICAgbGtleTEsIGxrZXkyLFxuICAgIGNocjEsIGNocjIsIGNocjMsXG4gICAgZW5jMSwgZW5jMiwgZW5jMywgZW5jNCxcbiAgICBpLCBqID0gMDtcblxuICBieXRlcyA9IE1hdGguY2VpbCgoMyAqIGlucHV0Lmxlbmd0aCkgLyA0LjApO1xuICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZXMpO1xuICB1YXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuXG4gIGxrZXkxID0ga2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGlucHV0Lmxlbmd0aC0xKSk7XG4gIGxrZXkyID0ga2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGlucHV0Lmxlbmd0aC0xKSk7XG4gIGlmKGxrZXkxID09IDY0KSBieXRlcy0tOyAvL3BhZGRpbmcgY2hhcnMsIHNvIHNraXBcbiAgaWYobGtleTIgPT0gNjQpIGJ5dGVzLS07IC8vcGFkZGluZyBjaGFycywgc28gc2tpcFxuXG4gIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csICcnKTtcblxuICBmb3IoaSA9IDA7IGkgPCBieXRlczsgaSArPSAzKSB7XG4gICAgLy9nZXQgdGhlIDMgb2N0ZWN0cyBpbiA0IGFzY2lpIGNoYXJzXG4gICAgZW5jMSA9IGtleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChqKyspKTtcbiAgICBlbmMyID0ga2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGorKykpO1xuICAgIGVuYzMgPSBrZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaisrKSk7XG4gICAgZW5jNCA9IGtleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChqKyspKTtcblxuICAgIGNocjEgPSAoZW5jMSA8PCAyKSB8IChlbmMyID4+IDQpO1xuICAgIGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTtcbiAgICBjaHIzID0gKChlbmMzICYgMykgPDwgNikgfCBlbmM0O1xuXG4gICAgdWFycmF5W2ldID0gY2hyMTtcbiAgICBpZihlbmMzICE9IDY0KSB1YXJyYXlbaSsxXSA9IGNocjI7XG4gICAgaWYoZW5jNCAhPSA2NCkgdWFycmF5W2krMl0gPSBjaHIzO1xuICB9XG4gIC8vY29uc29sZS5sb2coYnVmZmVyKTtcbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcigpe1xuICBpZihjb25maWcuZ2V0KCdkZWJ1Z0xldmVsJykgPj0gMSl7XG4gICAgLy9jb25zb2xlLmVycm9yKC4uLmFyZ3VtZW50cyk7XG4gICAgLy9jb25zb2xlLnRyYWNlKCk7XG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnRVJST1I6JywgLi4uYXJndW1lbnRzKTtcbiAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuKCl7XG4gIGlmKGNvbmZpZy5nZXQoJ2RlYnVnTGV2ZWwnKSA+PSAyKXtcbiAgICAvL2NvbnNvbGUud2FybiguLi5hcmd1bWVudHMpO1xuICAgIC8vY29uc29sZS50cmFjZSgpO1xuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ1dBUk5JTkc6JywgLi4uYXJndW1lbnRzKTtcbiAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmZvKCl7XG4gIGlmKGNvbmZpZy5nZXQoJ2RlYnVnTGV2ZWwnKSA+PSAzKXtcbiAgICAvL2NvbnNvbGUuaW5mbyguLi5hcmd1bWVudHMpO1xuICAgIC8vY29uc29sZS50cmFjZSgnSU5GTycsIC4uLmFyZ3VtZW50cyk7XG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnSU5GTzonLCAuLi5hcmd1bWVudHMpO1xuICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZygpe1xuICBpZihjb25maWcuZ2V0KCdkZWJ1Z0xldmVsJykgPj0gNCl7XG4gICAgLy9jb25zb2xlLmxvZyguLi5hcmd1bWVudHMpO1xuICAgIC8vY29uc29sZS50cmFjZSgnTE9HJywgLi4uYXJndW1lbnRzKTtcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdMT0c6JywgLi4uYXJndW1lbnRzKTtcbiAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5pY2VUaW1lKG1pbGxpcyl7XG4gIGxldCBoLCBtLCBzLCBtcyxcbiAgICAgIHNlY29uZHMsXG4gICAgICB0aW1lQXNTdHJpbmcgPSAnJztcblxuICBzZWNvbmRzID0gbWlsbGlzLzEwMDA7IC8vIOKGkiBtaWxsaXMgdG8gc2Vjb25kc1xuICBoID0gbUZsb29yKHNlY29uZHMgLyAoNjAgKiA2MCkpO1xuICBtID0gbUZsb29yKChzZWNvbmRzICUgKDYwICogNjApKSAvIDYwKTtcbiAgcyA9IG1GbG9vcihzZWNvbmRzICUgKDYwKSk7XG4gIG1zID0gbVJvdW5kKChzZWNvbmRzIC0gKGggKiAzNjAwKSAtIChtICogNjApIC0gcykgKiAxMDAwKTtcblxuICB0aW1lQXNTdHJpbmcgKz0gaCArICc6JztcbiAgdGltZUFzU3RyaW5nICs9IG0gPCAxMCA/ICcwJyArIG0gOiBtO1xuICB0aW1lQXNTdHJpbmcgKz0gJzonO1xuICB0aW1lQXNTdHJpbmcgKz0gcyA8IDEwID8gJzAnICsgcyA6IHM7XG4gIHRpbWVBc1N0cmluZyArPSAnOic7XG4gIHRpbWVBc1N0cmluZyArPSBtcyA9PT0gMCA/ICcwMDAnIDogbXMgPCAxMCA/ICcwMCcgKyBtcyA6IG1zIDwgMTAwID8gJzAnICsgbXMgOiBtcztcblxuICAvL2NvbnNvbGUubG9nKGgsIG0sIHMsIG1zKTtcbiAgcmV0dXJuIHtcbiAgICAgIGhvdXI6IGgsXG4gICAgICBtaW51dGU6IG0sXG4gICAgICBzZWNvbmQ6IHMsXG4gICAgICBtaWxsaXNlY29uZDogbXMsXG4gICAgICB0aW1lQXNTdHJpbmc6IHRpbWVBc1N0cmluZyxcbiAgICAgIHRpbWVBc0FycmF5OiBbaCwgbSwgcywgbXNdXG4gIH07XG59XG4iXX0=
