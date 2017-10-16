!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("fs"),require("path")):"function"==typeof define&&define.amd?define(["fs","path"],t):"object"==typeof exports?exports.asmDom=t(require("fs"),require("path")):e.asmDom=t(e.fs,e.path)}(this,function(e,t){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={},n={2:0};return t.e=function(t){if(0!==n[t]){var o=require("./"+t+".asm-dom.js"),r=o.modules,i=o.ids;for(var a in r)e[a]=r[a];for(var u=0;i.length>u;u++)n[i[u]]=0}return Promise.resolve()},t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){process.nextTick(function(){throw e})},t(t.s=6)}([function(e,t,o){"use strict";t.__esModule=!0,t.nodes=void 0;var n=o(5),r=function(e){return e&&e.__esModule?e:{default:e}}(n),i=t.nodes={0:null},a=0,u=function(e){if(null===e)return 0;if(void 0!==e.asmDomPtr)return e.asmDomPtr;var t=++a;return i[t]=e,e.asmDomPtr=t,t};t.default={addNode:function(e){return u(e.parentNode),u(e.nextSibling),u(e)},createElement:function(e){return u(r.default.create(e))},createElementNS:function(e,t){return u(r.default.createNS(t,e))},createTextNode:function(e){return u(r.default.createText(e))},createComment:function(e){return u(r.default.createComment(e))},insertBefore:function(e,t,o){i[e].insertBefore(i[t],i[o])},removeChild:function(e){null!==i[e]&&void 0!==i[e]&&r.default.collect(i[e])},appendChild:function(e,t){i[e].appendChild(i[t])},removeAttribute:function(e,t){i[e].removeAttribute(t)},setAttribute:function(e,t,o){120!==t.charCodeAt(0)?i[e].setAttribute(t,o):58===t.charCodeAt(3)?i[e].setAttributeNS("http://www.w3.org/XML/1998/namespace",t,o):58===t.charCodeAt(5)?i[e].setAttributeNS("http://www.w3.org/1999/xlink",t,o):i[e].setAttribute(t,o)},parentNode:function(e){return null!==i[e]&&void 0!==i[e]&&null!==i[e].parentNode?i[e].parentNode.asmDomPtr:0},nextSibling:function(e){return null!==i[e]&&void 0!==i[e]&&null!==i[e].nextSibling?i[e].nextSibling.asmDomPtr:0},setTextContent:function(e,t){i[e].textContent=t}}},function(e,t,o){"use strict";t.__esModule=!0;var n=o(0);t.default=function(e,t,o){var r=window.asmDomHelpers.vnodesData[e],i=window.asmDomHelpers.vnodesData[t];if(void 0!==r&&(r=r.raw),void 0!==i&&(i=i.raw),(void 0!==r||void 0!==i)&&r!==i){void 0===r&&(r={}),void 0===i&&(i={});var a=n.nodes[o];for(var u in r)void 0===i[u]&&(a[u]=void 0);for(var d in i)(r[d]!==i[d]||"value"===d&&a[d]!==i[d])&&(a[d]=i[d]);a.asmDomRaws=Object.keys(i)}}},function(e,t,o){"use strict";t.__esModule=!0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Array.prototype.instanceofArray=!0;var r=function(e){for(var t=new window.asmDom.VNodePtrVector,o=0;e.length>o;o++)"string"==typeof e[o]?t.push_back(window.asmDom._h_ti(e[o],!0)):!1!==e[o]&&null!==e[o]&&void 0!==e[o]&&t.push_back(e[o]);return t},i=function(e){var t=new window.asmDom.MapStringString;"string"==typeof e.className&&t.set("class",e.className);for(var o in e)!1!==e[o]&&"className"!==o&&"raw"!==o&&t.set(o,""+e[o]);return t};t.default=function(e,t,o,a){var u=void 0,d=void 0!==t&&void 0!==t.raw?t.raw:void 0;if(void 0===t)u=window.asmDom._h_s(e);else if(void 0===o)if(!0===t.instanceofArray)u=window.asmDom._h_sc(e,t=r(t)),t.delete();else switch(void 0===t?"undefined":n(t)){case"boolean":u=window.asmDom._h_ti(e,t);break;case"string":u=window.asmDom._h_st(e,t);break;case"number":u=window.asmDom._h_sn(e,t);break;case"object":u=window.asmDom._h_sd(e,t=i(t)),t.delete();break;default:throw Error("Invalid argument: ",t)}else{if(void 0!==a)throw Error("Invalid arguments provided to h function");if(!0===o.instanceofArray)u=window.asmDom._h_sdc(e,t=i(t),o=r(o)),t.delete(),o.delete();else switch(void 0===o?"undefined":n(o)){case"string":u=window.asmDom._h_sdt(e,t=i(t),o),t.delete();break;case"number":u=window.asmDom._h_sdn(e,t=i(t),o),t.delete();break;default:throw Error("Invalid argument: ",o)}}return void 0!==d&&(window.asmDomHelpers.vnodesData[u]={raw:d}),u}},function(e,t,o){"use strict";t.__esModule=!0,t.default=function(e,t){if(!1!==window.asmDom.unsafePatch||window.asmDomHelpers.currentNode===e||void 0===window.asmDomHelpers.currentNode){if(e===t)return t;if(window.asmDomHelpers.currentNode=t,"number"!=typeof e){var o=new window.asmDom.MapStringString;""!==e.id&&o.set("id",e.id),""!==e.className&&o.set("class",e.className),e=window.asmDom._h_elm(e.tagName.toLowerCase(),o,window.asmDomHelpers.domApi.addNode(e)),o.delete()}return window.asmDom._patch(e,t),!0===window.asmDom.clearMemory&&setTimeout(window.asmDom.deleteVNode.bind(null,e)),t}}},,function(e,t,o){"use strict";t.__esModule=!0;var n={collect:function(e){n.clean(e);var t=e.nodeName;void 0!==e.asmDomNS&&(t+=e.namespaceURI);var o=n.nodes[t];void 0!==o?o.push(e):n.nodes[t]=[e]},create:function(e){e=e.toUpperCase();var t=n.nodes[e];if(void 0!==t){var o=t.pop();if(void 0!==o)return o}return document.createElement(e)},createNS:function(e,t){e=e.toUpperCase();var o=n.nodes[e+t];if(void 0!==o){var r=o.pop();if(void 0!==r)return r}var i=document.createElementNS(t,e);return i.asmDomNS=t,i},createText:function(e){var t=n.nodes["#text"];if(void 0!==t){var o=t.pop();if(void 0!==o)return o.nodeValue=e,o}return document.createTextNode(e)},createComment:function(e){var t=n.nodes["#comment"];if(void 0!==t){var o=t.pop();if(void 0!==o)return o.nodeValue=e,o}return document.createComment(e)},clean:function(e){for(var t=void 0;t=e.lastChild;)n.collect(t);for(e.remove(),t=void 0!==e.attributes?e.attributes.length:0;t--;)e.removeAttribute(e.attributes[t].name);void 0!==e.asmDomRaws&&e.asmDomRaws.length>0&&(e.asmDomRaws.forEach(function(t){e[t]=void 0}),e.asmDomRaws=[]),null!==e.textContent&&""!==e.textContent&&(e.textContent=""),Object.keys(e).forEach(function(t){"a"===t[0]&&"s"===t[1]&&"m"===t[2]&&"D"===t[3]&&"o"===t[4]&&"m"===t[5]||(e[t]=void 0)})},nodes:{}};t.default=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=o(2),i=n(r),a=o(3),u=n(a),d=o(1),s=n(d),c=o(0),f=n(c),m={};t.default=function(e){if(void 0===e&&(e={}),void 0!==m.lib&&!0!==e.hardReload)return Promise.resolve(m.lib);void 0===e.clearMemory&&(e.clearMemory=!0),void 0===e.unsafePatch&&(e.unsafePatch=!1);var t=void 0,n=new Promise(function(t){e._main=function(){return t(m)}});return t=(!0===e.useWasm||"WebAssembly"in window)&&!0!==e.useAsmJS?new Promise(function(e){o.e(0).then(function(t){e(o(7))}.bind(null,o)).catch(o.oe)}).then(function(t){return t.default(e)}):new Promise(function(e){o.e(1).then(function(t){e(o(4))}.bind(null,o)).catch(o.oe)}),t.then(function(t){return t(e)}).then(function(e){return m.lib=e,void 0===window&&void 0!==global&&(global.window={}),window.asmDom=e,e.h=i.default,e.patch=u.default,e.getNode=function(t){return c.nodes[e._getNode(t)]},e.deleteVNode=function(t){window.asmDomHelpers.vnodesData[t]=void 0,e._deleteVNode(t)},e.reset=function(){window.asmDomHelpers={currentNode:void 0,domApi:f.default,vnodesData:{},diff:s.default}},e.reset(),n}).then(function(e){return e.lib})}},,,,,function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")}])});