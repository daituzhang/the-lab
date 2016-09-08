/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + ({"0":"app"}[chunkId]||chunkId) + "-" + {"0":"5e5151b89c067a373b69"}[chunkId] + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(exports) {
	
	  'use strict';
	
	  var device = function(userAgent, classContainer) {
	
	    var device = {};
	
	    var docElement = classContainer || window.document.documentElement;
	    userAgent = (userAgent || window.navigator.userAgent).toLowerCase();
	
	    function find(needle) {
	      return userAgent.indexOf(needle) !== -1;
	    }
	
	    function hasClass(className) {
	      var regex;
	      regex = new RegExp(className, 'i');
	      return docElement.className.match(regex);
	    }
	
	    function addClass(className) {
	      if (!hasClass(className)) {
	        docElement.className += ' ' + className;
	      }
	    }
	
	    function removeClass(className) {
	      if (hasClass(className)) {
	        docElement.className = docElement.className.replace(className, '');
	      }
	    }
	
	    function getFirstMatch(regex) {
	      var match = userAgent.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }
	
	    device.ios = function() {
	      return device.iphone() || device.ipod() || device.ipad();
	    };
	
	    device.iphone = function() {
	      return find('iphone');
	    };
	
	    device.ipod = function() {
	      return find('ipod');
	    };
	
	    device.ipad = function() {
	      return find('ipad');
	    };
	
	    device.android = function() {
	      return find('android');
	    };
	
	    device.androidPhone = function() {
	      return device.android() && find('mobile');
	    };
	
	    device.androidTablet = function() {
	      return device.android() && !find('mobile');
	    };
	
	    device.blackberry = function() {
	      return find('blackberry') || find('bb10') || find('rim');
	    };
	
	    device.blackberryPhone = function() {
	      return device.blackberry() && !find('tablet');
	    };
	
	    device.blackberryTablet = function() {
	      return device.blackberry() && find('tablet');
	    };
	
	    device.windows = function() {
	      return find('windows');
	    };
	
	    device.windowsPhone = function() {
	      return device.windows() && find('phone');
	    };
	
	    device.windowsTablet = function() {
	      return device.windows() && (find('touch') && !device.windowsPhone());
	    };
	
	    device.fxos = function() {
	      return (find('(mobile;') || find('(tablet;')) && find('; rv:');
	    };
	
	    device.fxosPhone = function() {
	      return device.fxos() && find('mobile');
	    };
	
	    device.fxosTablet = function() {
	      return device.fxos() && find('tablet');
	    };
	
	    device.meego = function() {
	      return find('meego');
	    };
	
	    device.cordova = function() {
	      return window.cordova && location.protocol === 'file:';
	    };
	
	    device.nodeWebkit = function() {
	      return typeof window.process === 'object';
	    };
	
	    device.bada = function() {
	      return find('bada');
	    };
	
	    device.mobile = function() {
	      return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
	    };
	
	    device.tablet = function() {
	      return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
	    };
	
	    device.desktop = function() {
	      return !device.tablet() && !device.mobile();
	    };
	
	    device.portrait = function() {
	      return (window.innerHeight / window.innerWidth) > 1;
	    };
	
	    device.landscape = function() {
	      return (window.innerHeight / window.innerWidth) < 1;
	    };
	
	    device.standAlone = function() {
	      return window.navigator.standalone === true;
	    };
	
	
	    device.addClasses = function() {
	
	      if (device._hasAddClasses) {
	        return;
	      }
	      device._hasAddClasses = true;
	
	      if (device.ios()) {
	        if (device.ipad()) {
	          addClass('ios ipad tablet');
	        } else if (device.iphone()) {
	          addClass('ios iphone mobile');
	        } else if (device.ipod()) {
	          addClass('ios ipod mobile');
	        }
	      } else if (device.android()) {
	        if (device.androidTablet()) {
	          addClass('android tablet');
	        } else {
	          addClass('android mobile');
	        }
	      } else if (device.blackberry()) {
	        if (device.blackberryTablet()) {
	          addClass('blackberry tablet');
	        } else {
	          addClass('blackberry mobile');
	        }
	      } else if (device.windows()) {
	        if (device.windowsTablet()) {
	          addClass('windows tablet');
	        } else if (device.windowsPhone()) {
	          addClass('windows mobile');
	        } else {
	          addClass('desktop');
	        }
	      } else if (device.fxos()) {
	        if (device.fxosTablet()) {
	          addClass('fxos tablet');
	        } else {
	          addClass('fxos mobile');
	        }
	      } else if (device.meego()) {
	        addClass('meego mobile');
	      } else if (device.nodeWebkit()) {
	        addClass('node-webkit');
	      } else {
	        addClass('desktop');
	      }
	
	      if (device.cordova()) {
	        addClass('cordova');
	      }
	
	      if (device.standAlone()) {
	        addClass('standalone');
	      }
	    };
	
	
	    // OS version extraction
	    var osVersion = '';
	    if (device.ios()) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (device.android()) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (device.windowsPhone()) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    }
	    /*else if (device.webos()) {
	          osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i); }*/
	    else if (device.blackberry()) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (device.bada()) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    }
	    /*else if (result.tizen) {
	          osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	        }*/
	
	    if (osVersion) {
	      device.osversion = osVersion;
	    }
	
	
	
	
	    device.addOrientationClasses = function() {
	
	      if (device.hasOrientationListener) {
	        return;
	      }
	
	      device.hasOrientationListener = true;
	
	      var onOrientationChange = function() {
	        if (device.landscape()) {
	          removeClass('portrait');
	          return addClass('landscape');
	        } else {
	          removeClass('landscape');
	          return addClass('portrait');
	        }
	      };
	
	      var orientationEvent = 'onorientationchange' in window ? 'orientationchange' : 'resize';
	
	      if (window.addEventListener) {
	        window.addEventListener(orientationEvent, onOrientationChange, false);
	      } else if (window.attachEvent) {
	        window.attachEvent(orientationEvent, onOrientationChange);
	      } else {
	        window[orientationEvent] = onOrientationChange;
	      }
	
	      onOrientationChange();
	
	    };
	
	    return device;
	  };
	
	  (typeof module !== 'undefined' && module.exports) ? (module.exports = device) : ( true ? (!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return device;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))) : (exports.device = device));
	
	}(this));


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2MzNGQzNjQxOTY0OGRhODBiYmMiLCJ3ZWJwYWNrOi8vLy4vfi9kZXZpY2UuanMvZGV2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBZ0QsVUFBVSw2QkFBNkIsMkJBQTJCO0FBQ2xIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTRCLG9CQUFvQixjQUFjO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esc0VBQXFFLEVBQUU7QUFDdkU7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSCxFQUFDIiwiZmlsZSI6InZlbmRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCBjYWxsYmFja3MgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKVxuIFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2guYXBwbHkoY2FsbGJhY2tzLCBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShjYWxsYmFja3MubGVuZ3RoKVxuIFx0XHRcdGNhbGxiYWNrcy5zaGlmdCgpLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdGlmKG1vcmVNb2R1bGVzWzBdKSB7XG4gXHRcdFx0aW5zdGFsbGVkTW9kdWxlc1swXSA9IDA7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdC8vIEFycmF5IG1lYW5zIFwibG9hZGluZ1wiLCBhcnJheSBjb250YWlucyBjYWxsYmFja3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDE6MFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCwgY2FsbGJhY2spIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMClcbiBcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBhbiBhcnJheSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdLnB1c2goY2FsbGJhY2spO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbY2FsbGJhY2tdO1xuIFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuIFx0XHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcIjBcIjpcImFwcFwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi1cIiArIHtcIjBcIjpcIjVlNTE1MWI4OWMwNjdhMzczYjY5XCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbiBcdFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjYzM0ZDM2NDE5NjQ4ZGE4MGJiY1xuICoqLyIsIihmdW5jdGlvbihleHBvcnRzKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBkZXZpY2UgPSBmdW5jdGlvbih1c2VyQWdlbnQsIGNsYXNzQ29udGFpbmVyKSB7XG5cbiAgICB2YXIgZGV2aWNlID0ge307XG5cbiAgICB2YXIgZG9jRWxlbWVudCA9IGNsYXNzQ29udGFpbmVyIHx8IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdXNlckFnZW50ID0gKHVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkudG9Mb3dlckNhc2UoKTtcblxuICAgIGZ1bmN0aW9uIGZpbmQobmVlZGxlKSB7XG4gICAgICByZXR1cm4gdXNlckFnZW50LmluZGV4T2YobmVlZGxlKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICB2YXIgcmVnZXg7XG4gICAgICByZWdleCA9IG5ldyBSZWdFeHAoY2xhc3NOYW1lLCAnaScpO1xuICAgICAgcmV0dXJuIGRvY0VsZW1lbnQuY2xhc3NOYW1lLm1hdGNoKHJlZ2V4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgIGlmICghaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xuICAgICAgICBkb2NFbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xuICAgICAgICBkb2NFbGVtZW50LmNsYXNzTmFtZSA9IGRvY0VsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoY2xhc3NOYW1lLCAnJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Rmlyc3RNYXRjaChyZWdleCkge1xuICAgICAgdmFyIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKHJlZ2V4KTtcbiAgICAgIHJldHVybiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaFsxXSkgfHwgJyc7XG4gICAgfVxuXG4gICAgZGV2aWNlLmlvcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGRldmljZS5pcGhvbmUoKSB8fCBkZXZpY2UuaXBvZCgpIHx8IGRldmljZS5pcGFkKCk7XG4gICAgfTtcblxuICAgIGRldmljZS5pcGhvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmaW5kKCdpcGhvbmUnKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLmlwb2QgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmaW5kKCdpcG9kJyk7XG4gICAgfTtcblxuICAgIGRldmljZS5pcGFkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmluZCgnaXBhZCcpO1xuICAgIH07XG5cbiAgICBkZXZpY2UuYW5kcm9pZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZpbmQoJ2FuZHJvaWQnKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLmFuZHJvaWRQaG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGRldmljZS5hbmRyb2lkKCkgJiYgZmluZCgnbW9iaWxlJyk7XG4gICAgfTtcblxuICAgIGRldmljZS5hbmRyb2lkVGFibGV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLmFuZHJvaWQoKSAmJiAhZmluZCgnbW9iaWxlJyk7XG4gICAgfTtcblxuICAgIGRldmljZS5ibGFja2JlcnJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmluZCgnYmxhY2tiZXJyeScpIHx8IGZpbmQoJ2JiMTAnKSB8fCBmaW5kKCdyaW0nKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLmJsYWNrYmVycnlQaG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGRldmljZS5ibGFja2JlcnJ5KCkgJiYgIWZpbmQoJ3RhYmxldCcpO1xuICAgIH07XG5cbiAgICBkZXZpY2UuYmxhY2tiZXJyeVRhYmxldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGRldmljZS5ibGFja2JlcnJ5KCkgJiYgZmluZCgndGFibGV0Jyk7XG4gICAgfTtcblxuICAgIGRldmljZS53aW5kb3dzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmluZCgnd2luZG93cycpO1xuICAgIH07XG5cbiAgICBkZXZpY2Uud2luZG93c1Bob25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLndpbmRvd3MoKSAmJiBmaW5kKCdwaG9uZScpO1xuICAgIH07XG5cbiAgICBkZXZpY2Uud2luZG93c1RhYmxldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGRldmljZS53aW5kb3dzKCkgJiYgKGZpbmQoJ3RvdWNoJykgJiYgIWRldmljZS53aW5kb3dzUGhvbmUoKSk7XG4gICAgfTtcblxuICAgIGRldmljZS5meG9zID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGZpbmQoJyhtb2JpbGU7JykgfHwgZmluZCgnKHRhYmxldDsnKSkgJiYgZmluZCgnOyBydjonKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLmZ4b3NQaG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGRldmljZS5meG9zKCkgJiYgZmluZCgnbW9iaWxlJyk7XG4gICAgfTtcblxuICAgIGRldmljZS5meG9zVGFibGV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLmZ4b3MoKSAmJiBmaW5kKCd0YWJsZXQnKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLm1lZWdvID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmluZCgnbWVlZ28nKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLmNvcmRvdmEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuY29yZG92YSAmJiBsb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2ZpbGU6JztcbiAgICB9O1xuXG4gICAgZGV2aWNlLm5vZGVXZWJraXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93LnByb2Nlc3MgPT09ICdvYmplY3QnO1xuICAgIH07XG5cbiAgICBkZXZpY2UuYmFkYSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZpbmQoJ2JhZGEnKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLm1vYmlsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGRldmljZS5hbmRyb2lkUGhvbmUoKSB8fCBkZXZpY2UuaXBob25lKCkgfHwgZGV2aWNlLmlwb2QoKSB8fCBkZXZpY2Uud2luZG93c1Bob25lKCkgfHwgZGV2aWNlLmJsYWNrYmVycnlQaG9uZSgpIHx8IGRldmljZS5meG9zUGhvbmUoKSB8fCBkZXZpY2UubWVlZ28oKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLnRhYmxldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGRldmljZS5pcGFkKCkgfHwgZGV2aWNlLmFuZHJvaWRUYWJsZXQoKSB8fCBkZXZpY2UuYmxhY2tiZXJyeVRhYmxldCgpIHx8IGRldmljZS53aW5kb3dzVGFibGV0KCkgfHwgZGV2aWNlLmZ4b3NUYWJsZXQoKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLmRlc2t0b3AgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhZGV2aWNlLnRhYmxldCgpICYmICFkZXZpY2UubW9iaWxlKCk7XG4gICAgfTtcblxuICAgIGRldmljZS5wb3J0cmFpdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICh3aW5kb3cuaW5uZXJIZWlnaHQgLyB3aW5kb3cuaW5uZXJXaWR0aCkgPiAxO1xuICAgIH07XG5cbiAgICBkZXZpY2UubGFuZHNjYXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKHdpbmRvdy5pbm5lckhlaWdodCAvIHdpbmRvdy5pbm5lcldpZHRoKSA8IDE7XG4gICAgfTtcblxuICAgIGRldmljZS5zdGFuZEFsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5zdGFuZGFsb25lID09PSB0cnVlO1xuICAgIH07XG5cblxuICAgIGRldmljZS5hZGRDbGFzc2VzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmIChkZXZpY2UuX2hhc0FkZENsYXNzZXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGV2aWNlLl9oYXNBZGRDbGFzc2VzID0gdHJ1ZTtcblxuICAgICAgaWYgKGRldmljZS5pb3MoKSkge1xuICAgICAgICBpZiAoZGV2aWNlLmlwYWQoKSkge1xuICAgICAgICAgIGFkZENsYXNzKCdpb3MgaXBhZCB0YWJsZXQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChkZXZpY2UuaXBob25lKCkpIHtcbiAgICAgICAgICBhZGRDbGFzcygnaW9zIGlwaG9uZSBtb2JpbGUnKTtcbiAgICAgICAgfSBlbHNlIGlmIChkZXZpY2UuaXBvZCgpKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoJ2lvcyBpcG9kIG1vYmlsZScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRldmljZS5hbmRyb2lkKCkpIHtcbiAgICAgICAgaWYgKGRldmljZS5hbmRyb2lkVGFibGV0KCkpIHtcbiAgICAgICAgICBhZGRDbGFzcygnYW5kcm9pZCB0YWJsZXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDbGFzcygnYW5kcm9pZCBtb2JpbGUnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkZXZpY2UuYmxhY2tiZXJyeSgpKSB7XG4gICAgICAgIGlmIChkZXZpY2UuYmxhY2tiZXJyeVRhYmxldCgpKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoJ2JsYWNrYmVycnkgdGFibGV0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkQ2xhc3MoJ2JsYWNrYmVycnkgbW9iaWxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGV2aWNlLndpbmRvd3MoKSkge1xuICAgICAgICBpZiAoZGV2aWNlLndpbmRvd3NUYWJsZXQoKSkge1xuICAgICAgICAgIGFkZENsYXNzKCd3aW5kb3dzIHRhYmxldCcpO1xuICAgICAgICB9IGVsc2UgaWYgKGRldmljZS53aW5kb3dzUGhvbmUoKSkge1xuICAgICAgICAgIGFkZENsYXNzKCd3aW5kb3dzIG1vYmlsZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENsYXNzKCdkZXNrdG9wJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGV2aWNlLmZ4b3MoKSkge1xuICAgICAgICBpZiAoZGV2aWNlLmZ4b3NUYWJsZXQoKSkge1xuICAgICAgICAgIGFkZENsYXNzKCdmeG9zIHRhYmxldCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENsYXNzKCdmeG9zIG1vYmlsZScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRldmljZS5tZWVnbygpKSB7XG4gICAgICAgIGFkZENsYXNzKCdtZWVnbyBtb2JpbGUnKTtcbiAgICAgIH0gZWxzZSBpZiAoZGV2aWNlLm5vZGVXZWJraXQoKSkge1xuICAgICAgICBhZGRDbGFzcygnbm9kZS13ZWJraXQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZENsYXNzKCdkZXNrdG9wJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZXZpY2UuY29yZG92YSgpKSB7XG4gICAgICAgIGFkZENsYXNzKCdjb3Jkb3ZhJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZXZpY2Uuc3RhbmRBbG9uZSgpKSB7XG4gICAgICAgIGFkZENsYXNzKCdzdGFuZGFsb25lJyk7XG4gICAgICB9XG4gICAgfTtcblxuXG4gICAgLy8gT1MgdmVyc2lvbiBleHRyYWN0aW9uXG4gICAgdmFyIG9zVmVyc2lvbiA9ICcnO1xuICAgIGlmIChkZXZpY2UuaW9zKCkpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL29zIChcXGQrKFtfXFxzXVxcZCspKikgbGlrZSBtYWMgb3MgeC9pKTtcbiAgICAgIG9zVmVyc2lvbiA9IG9zVmVyc2lvbi5yZXBsYWNlKC9bX1xcc10vZywgJy4nKTtcbiAgICB9IGVsc2UgaWYgKGRldmljZS5hbmRyb2lkKCkpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2FuZHJvaWRbIFxcLy1dKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9IGVsc2UgaWYgKGRldmljZS53aW5kb3dzUGhvbmUoKSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvd2luZG93cyBwaG9uZSAoPzpvcyk/XFxzPyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfVxuICAgIC8qZWxzZSBpZiAoZGV2aWNlLndlYm9zKCkpIHtcbiAgICAgICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC8oPzp3ZWJ8aHB3KW9zXFwvKFxcZCsoXFwuXFxkKykqKS9pKTsgfSovXG4gICAgZWxzZSBpZiAoZGV2aWNlLmJsYWNrYmVycnkoKSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvcmltXFxzdGFibGV0XFxzb3NcXHMoXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAoZGV2aWNlLmJhZGEoKSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvYmFkYVxcLyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfVxuICAgIC8qZWxzZSBpZiAocmVzdWx0LnRpemVuKSB7XG4gICAgICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvdGl6ZW5bXFwvXFxzXShcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgICAgIH0qL1xuXG4gICAgaWYgKG9zVmVyc2lvbikge1xuICAgICAgZGV2aWNlLm9zdmVyc2lvbiA9IG9zVmVyc2lvbjtcbiAgICB9XG5cblxuXG5cbiAgICBkZXZpY2UuYWRkT3JpZW50YXRpb25DbGFzc2VzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmIChkZXZpY2UuaGFzT3JpZW50YXRpb25MaXN0ZW5lcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRldmljZS5oYXNPcmllbnRhdGlvbkxpc3RlbmVyID0gdHJ1ZTtcblxuICAgICAgdmFyIG9uT3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGRldmljZS5sYW5kc2NhcGUoKSkge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKCdwb3J0cmFpdCcpO1xuICAgICAgICAgIHJldHVybiBhZGRDbGFzcygnbGFuZHNjYXBlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoJ2xhbmRzY2FwZScpO1xuICAgICAgICAgIHJldHVybiBhZGRDbGFzcygncG9ydHJhaXQnKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG9yaWVudGF0aW9uRXZlbnQgPSAnb25vcmllbnRhdGlvbmNoYW5nZScgaW4gd2luZG93ID8gJ29yaWVudGF0aW9uY2hhbmdlJyA6ICdyZXNpemUnO1xuXG4gICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIob3JpZW50YXRpb25FdmVudCwgb25PcmllbnRhdGlvbkNoYW5nZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KG9yaWVudGF0aW9uRXZlbnQsIG9uT3JpZW50YXRpb25DaGFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93W29yaWVudGF0aW9uRXZlbnRdID0gb25PcmllbnRhdGlvbkNoYW5nZTtcbiAgICAgIH1cblxuICAgICAgb25PcmllbnRhdGlvbkNoYW5nZSgpO1xuXG4gICAgfTtcblxuICAgIHJldHVybiBkZXZpY2U7XG4gIH07XG5cbiAgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSA/IChtb2R1bGUuZXhwb3J0cyA9IGRldmljZSkgOiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gKGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRldmljZTtcbiAgfSkpIDogKGV4cG9ydHMuZGV2aWNlID0gZGV2aWNlKSk7XG5cbn0odGhpcykpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGV2aWNlLmpzL2RldmljZS5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=