!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.composi={})}(this,function(e){"use strict";function t(e,t){var n={};return Object.keys(e).map(function(e){return n[e]=e}),Object.keys(t).map(function(e){return n[e]=e}),n}function n(e,t,n,o){return a(o||document.body,n,e,t)}function o(e,n,o,r){if("key"===n);else if("style"===n){var i=!0,s=!1,u=void 0;try{for(var a,c=t(r,o=o||{})[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){var l=a.value;e.style[l]=o[l]||""}}catch(e){s=!0,u=e}finally{try{!i&&c.return&&c.return()}finally{if(s)throw u}}}else{try{e[n]=o}catch(e){}"function"!=typeof o&&(o?"xlink-href"===n?e.setAttributeNS("http://www.w3.org/1999/xlink","href",o):e.setAttribute(n,o):e.removeAttribute(n))}}function r(e,t){var n=(t=t||"svg"===e.type)?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type);for(var r in e.props)o(n,r,e.props[r]);return e.children.map(function(e){return n.appendChild(i(e,t))}),n}function i(e,t){return"string"==typeof e?document.createTextNode(e):r(e,t)}function s(e){if(e&&e.props)return e.props.key}function u(e,n,r){for(var i in t(n,r)){var s=r[i],u="value"===i||"checked"===i?e[i]:n[i];s!==u&&o(e,i,s,u)}}function a(e,t,n,o,r,l){if(null==n)t=e.insertBefore(i(o,r),t);else if(null!=o.type&&o.type===n.type){u(t,n.props,o.props),r=r||"svg"===o.type;for(var p=o.children.length,d=n.children.length,f={},h=[],m={},y=0;y<d;){var v=h[y]=t.childNodes[y],b=n.children[y],w=s(b);null!=w&&(f[w]=[v,b]),y++}for(var g=0,S=0;S<p;){var k=h[g],C=n.children[g],N=o.children[S],U=s(C);if(m[U])g++;else{var W=s(N),x=f[W]||[];null==W?(null==U&&(a(t,k,C,N,r),S++),g++):(U===W?a(t,x[0],x[1],N,r)&&g++:x[0]?t.insertBefore(x[0],k)&&a(t,x[0],x[1],N,r):a(t,k,null,N,r),m[W]=N,S++)}}for(;g<d;)null==s(n.children[g])&&c(t,h[g]),g++;for(var A in f){var q=f[A];m[q[1].props.key]||c(t,q[0])}}else t&&o!==t.nodeValue&&("string"==typeof o&&"string"==typeof n?t.nodeValue=o:(t=e.insertBefore(i(o,r),l=t),c(e,l,n.data)));return t}var c=function(e,t){return e.removeChild(t)},l=function(e,t){Object.keys(t).forEach(function(n){t.hasOwnProperty(n)&&Object.defineProperty(e,n,{value:t[n],writable:!0,enumerable:!1,configurable:!0})})},p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=(function(){function e(e){this.value=e}function t(t){function n(r,i){try{var s=t[r](i),u=s.value;u instanceof e?Promise.resolve(u.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(s.done?"return":"normal",s.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":r.resolve({value:t,done:!0});break;case"throw":r.reject(t);break;default:r.resolve({value:t,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(e,t){return new Promise(function(o,s){var u={key:e,arg:t,resolve:o,reject:s,next:null};i?i=i.next=u:(r=i=u,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,16)},m=(new Date).getTime(),y=function(){function e(t){d(this,e),t||(t={}),this.selector=t.container||t.root||"body",t.render&&(this.render=t.render),this[m]=t.state,this.oldNode=null,this.selector&&(this.container=document.querySelector(this.selector)),this.componentShouldUpdate=!0,this.mounted=!1,this.element,t.beforeCreateComponent&&(this.beforeCreateComponent=t.beforeCreateComponent),t.componentWasCreated&&(this.componentWasCreated=t.componentWasCreated),t.componentWillUpdate&&(this.componentWillUpdate=t.componentWillUpdate),t.componentDidUpdate&&(this.componentDidUpdate=t.componentDidUpdate),t.componentWillUnmount&&(this.componentWillUnmount=t.componentWillUnmount)}return f(e,[{key:"setState",value:function(e,t){if("function"==typeof e){var n=e.call(this,this.state);"function"!=typeof n&&n&&this.setState(n)}if(Array.isArray(this.state)){var o=this.state;t||0===t?"object"===p(o[t])?(l(o[t],e),this.state=o):(o[t]=e,this.state=o):this.state=o}else if("object"===p(this.state)){var r=this.state;l(r,e),this.state=r}else this.state=e}},{key:"update",value:function(e){function t(e){try{return JSON.stringify(this.oldNode)!==JSON.stringify(r(e))}catch(e){return!0}}if(this.render){var o=e||this.state;this.container&&"string"==typeof this.container&&(this.selector=this.container,this.container=document.querySelector(this.container));var r=this.render,i=this.render(o),s=void 0;if(i&&i.props&&i.props.id)try{s=this.container.querySelector("#"+i.props.id)}catch(e){}if(s&&!this.mounted&&s.parentNode.removeChild(s),this.element=n(this.oldNode,this.oldNode=this.render(o),this.element,this.container),!(this.mounted&&this.oldNode&&t(o)))return this.beforeCreateComponent&&this.beforeCreateComponent(this),this.componentWasCreated&&this.componentWasCreated(this),void(this.mounted=!0);this.componentWillUpdate&&this.componentWillUpdate(this),this.componentDidUpdate&&t(o)&&this.componentDidUpdate(this)}}},{key:"unmount",value:function(){this.componentWillUnmount&&this.componentWillUnmount(this),this.container.removeChild(this.element),this.container=void 0;for(var e in this)delete this[e];delete this.state,this.update=void 0,this.unmount=void 0}},{key:"state",set:function(e){var t=this;this[m]=e,h(function(){return t.update()})},get:function(){return this[m]}}]),e}();window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t=(this.document||this.ownerDocument).querySelectorAll(e),n=void 0,o=this;do{for(n=t.length;--n>=0&&t.item(n)!==o;);}while(n<0&&(o=o.parentElement));return o});var v={container:void 0,element:void 0,oldNode:void 0,mounted:!1};e.h=function(e,t){for(var n=[],o=void 0,r=[],i=arguments.length,s=Array(i>2?i-2:0),u=2;u<i;u++)s[u-2]=arguments[u];for(n=n.concat(s.reverse());n.length;)Array.isArray(o=n.pop())?o.map(function(e){return n.unshift(e)}):null!=o&&!0!==o&&!1!==o&&("number"==typeof o&&(o+=""),r.push(o));return"string"==typeof e?{type:e,props:t||{},children:r}:e(t||{},r)},e.patch=n,e.render=function(e,t){"string"==typeof t&&(t=document.querySelector(t)),v.container!==t&&(v.container=t,v.element=void 0,v.oldNode=void 0),v.container&&v.mounted&&(v.mounted=!1);if(e.props&&e.props.id)try{"string"==typeof t?document.querySelector(t).querySelector("#"+e.props.id):t.querySelector("#"+e.props.id)}catch(e){}v.element=n(v.oldNode,v.oldNode=e,v.element,t),v.mounted=!0},e.Component=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=composi.js.map