(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function s1(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var kf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex;function H3(){if(ex)return Ro;ex=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=e,Ro.jsx=i,Ro.jsxs=i,Ro}var tx;function V3(){return tx||(tx=1,kf.exports=H3()),kf.exports}var b=V3(),jf={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx;function G3(){if(nx)return ut;nx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.iterator;function _(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function y(D,ee,Se){this.props=D,this.context=ee,this.refs=C,this.updater=Se||M}y.prototype.isReactComponent={},y.prototype.setState=function(D,ee){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ee,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function v(){}v.prototype=y.prototype;function z(D,ee,Se){this.props=D,this.context=ee,this.refs=C,this.updater=Se||M}var L=z.prototype=new v;L.constructor=z,A(L,y.prototype),L.isPureReactComponent=!0;var F=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function G(D,ee,Se,ye,De,Ve){return Se=Ve.ref,{$$typeof:o,type:D,key:ee,ref:Se!==void 0?Se:null,props:Ve}}function ae(D,ee){return G(D.type,ee,void 0,void 0,void 0,D.props)}function N(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function w(D){var ee={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Se){return ee[Se]})}var j=/\/+/g;function te(D,ee){return typeof D=="object"&&D!==null&&D.key!=null?w(""+D.key):ee.toString(36)}function ce(){}function ge(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(ce,ce):(D.status="pending",D.then(function(ee){D.status==="pending"&&(D.status="fulfilled",D.value=ee)},function(ee){D.status==="pending"&&(D.status="rejected",D.reason=ee)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ue(D,ee,Se,ye,De){var Ve=typeof D;(Ve==="undefined"||Ve==="boolean")&&(D=null);var $=!1;if(D===null)$=!0;else switch(Ve){case"bigint":case"string":case"number":$=!0;break;case"object":switch(D.$$typeof){case o:case e:$=!0;break;case x:return $=D._init,ue($(D._payload),ee,Se,ye,De)}}if($)return De=De(D),$=ye===""?"."+te(D,0):ye,F(De)?(Se="",$!=null&&(Se=$.replace(j,"$&/")+"/"),ue(De,ee,Se,"",function(Je){return Je})):De!=null&&(N(De)&&(De=ae(De,Se+(De.key==null||D&&D.key===De.key?"":(""+De.key).replace(j,"$&/")+"/")+$)),ee.push(De)),1;$=0;var me=ye===""?".":ye+":";if(F(D))for(var Ee=0;Ee<D.length;Ee++)ye=D[Ee],Ve=me+te(ye,Ee),$+=ue(ye,ee,Se,Ve,De);else if(Ee=_(D),typeof Ee=="function")for(D=Ee.call(D),Ee=0;!(ye=D.next()).done;)ye=ye.value,Ve=me+te(ye,Ee++),$+=ue(ye,ee,Se,Ve,De);else if(Ve==="object"){if(typeof D.then=="function")return ue(ge(D),ee,Se,ye,De);throw ee=String(D),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return $}function B(D,ee,Se){if(D==null)return D;var ye=[],De=0;return ue(D,ye,"","",function(Ve){return ee.call(Se,Ve,De++)}),ye}function Z(D){if(D._status===-1){var ee=D._result;ee=ee(),ee.then(function(Se){(D._status===0||D._status===-1)&&(D._status=1,D._result=Se)},function(Se){(D._status===0||D._status===-1)&&(D._status=2,D._result=Se)}),D._status===-1&&(D._status=0,D._result=ee)}if(D._status===1)return D._result.default;throw D._result}var Y=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function _e(){}return ut.Children={map:B,forEach:function(D,ee,Se){B(D,function(){ee.apply(this,arguments)},Se)},count:function(D){var ee=0;return B(D,function(){ee++}),ee},toArray:function(D){return B(D,function(ee){return ee})||[]},only:function(D){if(!N(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ut.Component=y,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=z,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ut.__COMPILER_RUNTIME={__proto__:null,c:function(D){return H.H.useMemoCache(D)}},ut.cache=function(D){return function(){return D.apply(null,arguments)}},ut.cloneElement=function(D,ee,Se){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ye=A({},D.props),De=D.key,Ve=void 0;if(ee!=null)for($ in ee.ref!==void 0&&(Ve=void 0),ee.key!==void 0&&(De=""+ee.key),ee)!O.call(ee,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&ee.ref===void 0||(ye[$]=ee[$]);var $=arguments.length-2;if($===1)ye.children=Se;else if(1<$){for(var me=Array($),Ee=0;Ee<$;Ee++)me[Ee]=arguments[Ee+2];ye.children=me}return G(D.type,De,void 0,void 0,Ve,ye)},ut.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},ut.createElement=function(D,ee,Se){var ye,De={},Ve=null;if(ee!=null)for(ye in ee.key!==void 0&&(Ve=""+ee.key),ee)O.call(ee,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(De[ye]=ee[ye]);var $=arguments.length-2;if($===1)De.children=Se;else if(1<$){for(var me=Array($),Ee=0;Ee<$;Ee++)me[Ee]=arguments[Ee+2];De.children=me}if(D&&D.defaultProps)for(ye in $=D.defaultProps,$)De[ye]===void 0&&(De[ye]=$[ye]);return G(D,Ve,void 0,void 0,null,De)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(D){return{$$typeof:h,render:D}},ut.isValidElement=N,ut.lazy=function(D){return{$$typeof:x,_payload:{_status:-1,_result:D},_init:Z}},ut.memo=function(D,ee){return{$$typeof:p,type:D,compare:ee===void 0?null:ee}},ut.startTransition=function(D){var ee=H.T,Se={};H.T=Se;try{var ye=D(),De=H.S;De!==null&&De(Se,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(_e,Y)}catch(Ve){Y(Ve)}finally{H.T=ee}},ut.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ut.use=function(D){return H.H.use(D)},ut.useActionState=function(D,ee,Se){return H.H.useActionState(D,ee,Se)},ut.useCallback=function(D,ee){return H.H.useCallback(D,ee)},ut.useContext=function(D){return H.H.useContext(D)},ut.useDebugValue=function(){},ut.useDeferredValue=function(D,ee){return H.H.useDeferredValue(D,ee)},ut.useEffect=function(D,ee,Se){var ye=H.H;if(typeof Se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ye.useEffect(D,ee)},ut.useId=function(){return H.H.useId()},ut.useImperativeHandle=function(D,ee,Se){return H.H.useImperativeHandle(D,ee,Se)},ut.useInsertionEffect=function(D,ee){return H.H.useInsertionEffect(D,ee)},ut.useLayoutEffect=function(D,ee){return H.H.useLayoutEffect(D,ee)},ut.useMemo=function(D,ee){return H.H.useMemo(D,ee)},ut.useOptimistic=function(D,ee){return H.H.useOptimistic(D,ee)},ut.useReducer=function(D,ee,Se){return H.H.useReducer(D,ee,Se)},ut.useRef=function(D){return H.H.useRef(D)},ut.useState=function(D){return H.H.useState(D)},ut.useSyncExternalStore=function(D,ee,Se){return H.H.useSyncExternalStore(D,ee,Se)},ut.useTransition=function(){return H.H.useTransition()},ut.version="19.1.1",ut}var ix;function g0(){return ix||(ix=1,jf.exports=G3()),jf.exports}var Io=g0();const k3=s1(Io);var Xf={exports:{}},Co={},Wf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function j3(){return ax||(ax=1,(function(o){function e(B,Z){var Y=B.length;B.push(Z);e:for(;0<Y;){var _e=Y-1>>>1,D=B[_e];if(0<l(D,Z))B[_e]=Z,B[Y]=D,Y=_e;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],Y=B.pop();if(Y!==Z){B[0]=Y;e:for(var _e=0,D=B.length,ee=D>>>1;_e<ee;){var Se=2*(_e+1)-1,ye=B[Se],De=Se+1,Ve=B[De];if(0>l(ye,Y))De<D&&0>l(Ve,ye)?(B[_e]=Ve,B[De]=Y,_e=De):(B[_e]=ye,B[Se]=Y,_e=Se);else if(De<D&&0>l(Ve,Y))B[_e]=Ve,B[De]=Y,_e=De;else break e}}return Z}function l(B,Z){var Y=B.sortIndex-Z.sortIndex;return Y!==0?Y:B.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,g=null,_=3,M=!1,A=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function F(B){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=B)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function H(B){if(C=!1,F(B),!A)if(i(m)!==null)A=!0,O||(O=!0,te());else{var Z=i(p);Z!==null&&ue(H,Z.startTime-B)}}var O=!1,G=-1,ae=5,N=-1;function w(){return y?!0:!(o.unstable_now()-N<ae)}function j(){if(y=!1,O){var B=o.unstable_now();N=B;var Z=!0;try{e:{A=!1,C&&(C=!1,z(G),G=-1),M=!0;var Y=_;try{t:{for(F(B),g=i(m);g!==null&&!(g.expirationTime>B&&w());){var _e=g.callback;if(typeof _e=="function"){g.callback=null,_=g.priorityLevel;var D=_e(g.expirationTime<=B);if(B=o.unstable_now(),typeof D=="function"){g.callback=D,F(B),Z=!0;break t}g===i(m)&&r(m),F(B)}else r(m);g=i(m)}if(g!==null)Z=!0;else{var ee=i(p);ee!==null&&ue(H,ee.startTime-B),Z=!1}}break e}finally{g=null,_=Y,M=!1}Z=void 0}}finally{Z?te():O=!1}}}var te;if(typeof L=="function")te=function(){L(j)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ge=ce.port2;ce.port1.onmessage=j,te=function(){ge.postMessage(null)}}else te=function(){v(j,0)};function ue(B,Z){G=v(function(){B(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(B){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var Y=_;_=Z;try{return B()}finally{_=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=_;_=B;try{return Z()}finally{_=Y}},o.unstable_scheduleCallback=function(B,Z,Y){var _e=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?_e+Y:_e):Y=_e,B){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Y+D,B={id:x++,callback:Z,priorityLevel:B,startTime:Y,expirationTime:D,sortIndex:-1},Y>_e?(B.sortIndex=Y,e(p,B),i(m)===null&&B===i(p)&&(C?(z(G),G=-1):C=!0,ue(H,Y-_e))):(B.sortIndex=D,e(m,B),A||M||(A=!0,O||(O=!0,te()))),B},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(B){var Z=_;return function(){var Y=_;_=Z;try{return B.apply(this,arguments)}finally{_=Y}}}})(qf)),qf}var rx;function X3(){return rx||(rx=1,Wf.exports=j3()),Wf.exports}var Yf={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function W3(){if(sx)return Cn;sx=1;var o=g0();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,x)},Cn.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:M}):x==="script"&&r.d.X(m,{crossOrigin:g,integrity:_,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.1.1",Cn}var ox;function q3(){if(ox)return Yf.exports;ox=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Yf.exports=W3(),Yf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function Y3(){if(lx)return Co;lx=1;var o=X3(),e=g0(),i=q3();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),t;if(f===s)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,s=f;break}if(T===s){S=!0,s=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=c;break}if(T===s){S=!0,s=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case y:return"Profiler";case C:return"StrictMode";case H:return"Suspense";case O:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case L:return(t.displayName||"Context")+".Provider";case z:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return n=t.displayName||null,n!==null?n:ge(t.type)||"Memo";case ae:n=t._payload,t=t._init;try{return ge(t(n))}catch{}}return null}var ue=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},_e=[],D=-1;function ee(t){return{current:t}}function Se(t){0>D||(t.current=_e[D],_e[D]=null,D--)}function ye(t,n){D++,_e[D]=t.current,t.current=n}var De=ee(null),Ve=ee(null),$=ee(null),me=ee(null);function Ee(t,n){switch(ye($,n),ye(Ve,t),ye(De,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Cm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Cm(n),t=wm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Se(De),ye(De,t)}function Je(){Se(De),Se(Ve),Se($)}function ke(t){t.memoizedState!==null&&ye(me,t);var n=De.current,a=wm(n,t.type);n!==a&&(ye(Ve,t),ye(De,a))}function lt(t){Ve.current===t&&(Se(De),Se(Ve)),me.current===t&&(Se(me),yo._currentValue=Y)}var Jt=Object.prototype.hasOwnProperty,ct=o.unstable_scheduleCallback,Ot=o.unstable_cancelCallback,I=o.unstable_shouldYield,pt=o.unstable_requestPaint,rt=o.unstable_now,Pt=o.unstable_getCurrentPriorityLevel,He=o.unstable_ImmediatePriority,kt=o.unstable_UserBlockingPriority,je=o.unstable_NormalPriority,st=o.unstable_LowPriority,U=o.unstable_IdlePriority,E=o.log,J=o.unstable_setDisableYieldValue,de=null,pe=null;function oe(t){if(typeof E=="function"&&J(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(de,t)}catch{}}var Pe=Math.clz32?Math.clz32:Ge,Ue=Math.log,Qe=Math.LN2;function Ge(t){return t>>>=0,t===0?32:31-(Ue(t)/Qe|0)|0}var be=256,Ae=4194304;function qe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ke(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=qe(s):(S&=T,S!==0?c=qe(S):a||(a=T&~t,a!==0&&(c=qe(a))))):(T=s&~f,T!==0?c=qe(T):S!==0?c=qe(S):a||(a=s&~t,a!==0&&(c=qe(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function nt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var t=be;return be<<=1,(be&4194048)===0&&(be=256),t}function Ne(){var t=Ae;return Ae<<=1,(Ae&62914560)===0&&(Ae=4194304),t}function Ce(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Re(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Me(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,Q=t.hiddenUpdates;for(a=S&~a;0<a;){var fe=31-Pe(a),xe=1<<fe;T[fe]=0,P[fe]=-1;var ne=Q[fe];if(ne!==null)for(Q[fe]=null,fe=0;fe<ne.length;fe++){var ie=ne[fe];ie!==null&&(ie.lane&=-536870913)}a&=~xe}s!==0&&ve(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function ve(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pe(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Fe(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pe(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function it(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function wt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Ym(t.type))}function $n(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var rn=Math.random().toString(36).slice(2),xn="__reactFiber$"+rn,yn="__reactProps$"+rn,Ui="__reactContainer$"+rn,di="__reactEvents$"+rn,Ns="__reactListeners$"+rn,Ko="__reactHandles$"+rn,Us="__reactResources$"+rn,yi="__reactMarker$"+rn;function Er(t){delete t[xn],delete t[yn],delete t[di],delete t[Ns],delete t[Ko]}function hi(t){var n=t[xn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ui]||a[xn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Lm(t);t!==null;){if(a=t[xn])return a;t=Lm(t)}return n}t=a,a=t.parentNode}return null}function Li(t){if(t=t[xn]||t[Ui]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function fa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function da(t){var n=t[Us];return n||(n=t[Us]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(t){t[yi]=!0}var Qo=new Set,Jo={};function Oi(t,n){ha(t,n),ha(t+"Capture",n)}function ha(t,n){for(Jo[t]=n,t=0;t<n.length;t++)Qo.add(n[t])}var R=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),W={},re={};function se(t){return Jt.call(re,t)?!0:Jt.call(W,t)?!1:R.test(t)?re[t]=!0:(W[t]=!0,!1)}function q(t,n,a){if(se(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Te(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function we(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Be,ze;function Ye(t){if(Be===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Be=n&&n[1]||"",ze=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Be+t+ze}var $e=!1;function Xe(t,n){if(!t||$e)return"";$e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ie){var ne=ie}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ie){ne=ie}t.call(xe.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var P=S.split(`
`),Q=T.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===Q.length)for(s=P.length-1,c=Q.length-1;1<=s&&0<=c&&P[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==Q[c]){var fe=`
`+P[s].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=s&&0<=c);break}}}finally{$e=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ye(a):""}function mt(t){switch(t.tag){case 26:case 27:case 5:return Ye(t.type);case 16:return Ye("Lazy");case 13:return Ye("Suspense");case 19:return Ye("SuspenseList");case 0:case 15:return Xe(t.type,!1);case 11:return Xe(t.type.render,!1);case 1:return Xe(t.type,!0);case 31:return Ye("Activity");default:return""}}function Rt(t){try{var n="";do n+=mt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function St(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Dt(t){var n=Wt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ze(t){t._valueTracker||(t._valueTracker=Dt(t))}function jt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Wt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function gt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Un=/[\n"\\]/g;function fn(t){return t.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(t,n,a,s,c,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+St(n)):t.value!==""+St(n)&&(t.value=""+St(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Vt(t,S,St(n)):a!=null?Vt(t,S,St(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+St(T):t.removeAttribute("name")}function pa(t,n,a,s,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+St(a):"",n=n!=null?""+St(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function Vt(t,n,a){n==="number"&&gt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function $t(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+St(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ln(t,n,a){if(n!=null&&(n=""+St(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+St(a):""}function gn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ue(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=St(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function en(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ls=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mi(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Ls.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function w0(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Mi(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Mi(t,f,n[f])}function Vc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var F1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(t){return I1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Gc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tr=null,Ar=null;function D0(t){var n=Li(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Mn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[yn]||null;if(!c)throw Error(r(90));Mn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&jt(s)}break e;case"textarea":Ln(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&$t(t,!!a.multiple,n,!1)}}}var jc=!1;function N0(t,n,a){if(jc)return t(n,a);jc=!0;try{var s=t(n);return s}finally{if(jc=!1,(Tr!==null||Ar!==null)&&(Fl(),Tr&&(n=Tr,t=Ar,Ar=Tr=null,D0(n),t)))for(n=0;n<t.length;n++)D0(t[n])}}function Os(t,n){var a=t.stateNode;if(a===null)return null;var s=a[yn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(Pi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Xc=!1}var ma=null,Wc=null,el=null;function U0(){if(el)return el;var t,n=Wc,a=n.length,s,c="value"in ma?ma.value:ma.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return el=c.slice(t,1<s?1-s:void 0)}function tl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function L0(){return!1}function Bn(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:L0,this.isPropagationStopped=L0,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Bn(Za),zs=x({},Za,{view:0,detail:0}),H1=Bn(zs),qc,Yc,Bs,al=x({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(qc=t.screenX-Bs.screenX,Yc=t.screenY-Bs.screenY):Yc=qc=0,Bs=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),O0=Bn(al),V1=x({},al,{dataTransfer:0}),G1=Bn(V1),k1=x({},zs,{relatedTarget:0}),Zc=Bn(k1),j1=x({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),X1=Bn(j1),W1=x({},Za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q1=Bn(W1),Y1=x({},Za,{data:0}),P0=Bn(Y1),Z1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J1(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Q1[t])?!!n[t]:!1}function Kc(){return J1}var $1=x({},zs,{key:function(t){if(t.key){var n=Z1[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eg=Bn($1),tg=x({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),z0=Bn(tg),ng=x({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),ig=Bn(ng),ag=x({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),rg=Bn(ag),sg=x({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),og=Bn(sg),lg=x({},Za,{newState:0,oldState:0}),cg=Bn(lg),ug=[9,13,27,32],Qc=Pi&&"CompositionEvent"in window,Fs=null;Pi&&"documentMode"in document&&(Fs=document.documentMode);var fg=Pi&&"TextEvent"in window&&!Fs,B0=Pi&&(!Qc||Fs&&8<Fs&&11>=Fs),F0=" ",I0=!1;function H0(t,n){switch(t){case"keyup":return ug.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function dg(t,n){switch(t){case"compositionend":return V0(n);case"keypress":return n.which!==32?null:(I0=!0,F0);case"textInput":return t=n.data,t===F0&&I0?null:t;default:return null}}function hg(t,n){if(Rr)return t==="compositionend"||!Qc&&H0(t,n)?(t=U0(),el=Wc=ma=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return B0&&n.locale!=="ko"?null:n.data;default:return null}}var pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function G0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!pg[t.type]:n==="textarea"}function k0(t,n,a,s){Tr?Ar?Ar.push(s):Ar=[s]:Tr=s,n=jl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Is=null,Hs=null;function mg(t){Mm(t,0)}function rl(t){var n=fa(t);if(jt(n))return t}function j0(t,n){if(t==="change")return n}var X0=!1;if(Pi){var Jc;if(Pi){var $c="oninput"in document;if(!$c){var W0=document.createElement("div");W0.setAttribute("oninput","return;"),$c=typeof W0.oninput=="function"}Jc=$c}else Jc=!1;X0=Jc&&(!document.documentMode||9<document.documentMode)}function q0(){Is&&(Is.detachEvent("onpropertychange",Y0),Hs=Is=null)}function Y0(t){if(t.propertyName==="value"&&rl(Hs)){var n=[];k0(n,Hs,t,kc(t)),N0(mg,n)}}function xg(t,n,a){t==="focusin"?(q0(),Is=n,Hs=a,Is.attachEvent("onpropertychange",Y0)):t==="focusout"&&q0()}function gg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rl(Hs)}function vg(t,n){if(t==="click")return rl(n)}function _g(t,n){if(t==="input"||t==="change")return rl(n)}function Sg(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var kn=typeof Object.is=="function"?Object.is:Sg;function Vs(t,n){if(kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Jt.call(n,c)||!kn(t[c],n[c]))return!1}return!0}function Z0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function K0(t,n){var a=Z0(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Z0(a)}}function Q0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Q0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function J0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gt(t.document)}return n}function eu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var bg=Pi&&"documentMode"in document&&11>=document.documentMode,Cr=null,tu=null,Gs=null,nu=!1;function $0(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Cr==null||Cr!==gt(s)||(s=Cr,"selectionStart"in s&&eu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Gs&&Vs(Gs,s)||(Gs=s,s=jl(tu,"onSelect"),0<s.length&&(n=new il("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function Ka(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var wr={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},iu={},eh={};Pi&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Qa(t){if(iu[t])return iu[t];if(!wr[t])return t;var n=wr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in eh)return iu[t]=n[a];return t}var th=Qa("animationend"),nh=Qa("animationiteration"),ih=Qa("animationstart"),yg=Qa("transitionrun"),Mg=Qa("transitionstart"),Eg=Qa("transitioncancel"),ah=Qa("transitionend"),rh=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function pi(t,n){rh.set(t,n),Oi(n,[t])}var sh=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=sh.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Rt(n)},sh.set(t,n),n)}return{value:t,source:n,stack:Rt(n)}}var ti=[],Dr=0,ru=0;function sl(){for(var t=Dr,n=ru=Dr=0;n<t;){var a=ti[n];ti[n++]=null;var s=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&oh(a,c,f)}}function ol(t,n,a,s){ti[Dr++]=t,ti[Dr++]=n,ti[Dr++]=a,ti[Dr++]=s,ru|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function su(t,n,a,s){return ol(t,n,a,s),ll(t)}function Nr(t,n){return ol(t,null,null,n),ll(t)}function oh(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pe(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function ll(t){if(50<po)throw po=0,hf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={};function Tg(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new Tg(t,n,a,s)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function lh(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cl(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")ou(t)&&(S=1);else if(typeof t=="string")S=R3(t,a,De.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=jn(31,a,n,c),t.elementType=N,t.lanes=f,t;case A:return Ja(a.children,c,f,n);case C:S=8,c|=24;break;case y:return t=jn(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case H:return t=jn(13,a,n,c),t.elementType=H,t.lanes=f,t;case O:return t=jn(19,a,n,c),t.elementType=O,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case L:S=10;break e;case z:S=9;break e;case F:S=11;break e;case G:S=14;break e;case ae:S=16,s=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Ja(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function lu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function cu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Lr=[],Or=0,ul=null,fl=0,ni=[],ii=0,$a=null,Bi=1,Fi="";function er(t,n){Lr[Or++]=fl,Lr[Or++]=ul,ul=t,fl=n}function ch(t,n,a){ni[ii++]=Bi,ni[ii++]=Fi,ni[ii++]=$a,$a=t;var s=Bi;t=Fi;var c=32-Pe(s)-1;s&=~(1<<c),a+=1;var f=32-Pe(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Bi=1<<32-Pe(n)+c|a<<c|s,Fi=f+t}else Bi=1<<f|a<<c|s,Fi=t}function uu(t){t.return!==null&&(er(t,1),ch(t,1,0))}function fu(t){for(;t===ul;)ul=Lr[--Or],Lr[Or]=null,fl=Lr[--Or],Lr[Or]=null;for(;t===$a;)$a=ni[--ii],ni[ii]=null,Fi=ni[--ii],ni[ii]=null,Bi=ni[--ii],ni[ii]=null}var On=null,Zt=null,Ct=!1,tr=null,Ei=!1,du=Error(r(519));function nr(t){var n=Error(r(418,""));throw Xs(ei(n,t)),du}function uh(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[xn]=t,n[yn]=s,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)_t(xo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),pa(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ze(n);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),gn(n,s.value,s.defaultValue,s.children),Ze(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Rm(n.textContent,a)?(s.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),s.onScroll!=null&&_t("scroll",n),s.onScrollEnd!=null&&_t("scrollend",n),s.onClick!=null&&(n.onclick=Xl),n=!0):n=!1,n||nr(t)}function fh(t){for(On=t.return;On;)switch(On.tag){case 5:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:On=On.return}}function ks(t){if(t!==On)return!1;if(!Ct)return fh(t),Ct=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||wf(t.type,t.memoizedProps)),a=!a),a&&Zt&&nr(t),fh(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Zt=xi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Zt=null}}else n===27?(n=Zt,Na(t.type)?(t=Lf,Lf=null,Zt=t):Zt=n):Zt=On?xi(t.stateNode.nextSibling):null;return!0}function js(){Zt=On=null,Ct=!1}function dh(){var t=tr;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),tr=null),t}function Xs(t){tr===null?tr=[t]:tr.push(t)}var hu=ee(null),ir=null,Ii=null;function xa(t,n,a){ye(hu,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=hu.current,Se(hu)}function pu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function mu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),pu(f.return,a,t),s||(S=null);break e}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),pu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Ws(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;kn(c.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(c===me.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(yo):t=[yo])}c=c.return}t!==null&&mu(n,t,a,s),n.flags|=262144}function dl(t){for(t=t.firstContext;t!==null;){if(!kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,Ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return hh(ir,t)}function hl(t,n){return ir===null&&ar(t),hh(t,n)}function hh(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(t===null)throw Error(r(308));Ii=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ii=Ii.next=n;return a}var Ag=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Rg=o.unstable_scheduleCallback,Cg=o.unstable_NormalPriority,dn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new Ag,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&Rg(Cg,function(){t.controller.abort()})}var Ys=null,gu=0,Pr=0,zr=null;function wg(t,n){if(Ys===null){var a=Ys=[];gu=0,Pr=Sf(),zr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return gu++,n.then(ph,ph),n}function ph(){if(--gu===0&&Ys!==null){zr!==null&&(zr.status="fulfilled");var t=Ys;Ys=null,Pr=0,zr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Dg(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var mh=B.S;B.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&wg(t,n),mh!==null&&mh(t,n)};var rr=ee(null);function vu(){var t=rr.current;return t!==null?t:Xt.pooledCache}function pl(t,n){n===null?ye(rr,rr.current):ye(rr,n.pool)}function xh(){var t=vu();return t===null?null:{parent:dn._currentValue,pool:t}}var Zs=Error(r(460)),gh=Error(r(474)),ml=Error(r(542)),_u={then:function(){}};function vh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xl(){}function _h(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(xl,xl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bh(t),t;default:if(typeof n.status=="string")n.then(xl,xl);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bh(t),t}throw Ks=n,Zs}}var Ks=null;function Sh(){if(Ks===null)throw Error(r(459));var t=Ks;return Ks=null,t}function bh(t){if(t===Zs||t===ml)throw Error(r(483))}var ga=!1;function Su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Nt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ll(t),oh(t,null,a),n}return ol(t,s,n,a),ll(t)}function Qs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Fe(t,a)}}function yu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mu=!1;function Js(){if(Mu){var t=zr;if(t!==null)throw t}}function $s(t,n,a,s){Mu=!1;var c=t.updateQueue;ga=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,Q=P.next;P.next=null,S===null?f=Q:S.next=Q,S=P;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,T=fe.lastBaseUpdate,T!==S&&(T===null?fe.firstBaseUpdate=Q:T.next=Q,fe.lastBaseUpdate=P))}if(f!==null){var xe=c.baseState;S=0,fe=Q=P=null,T=f;do{var ne=T.lane&-536870913,ie=ne!==T.lane;if(ie?(Mt&ne)===ne:(s&ne)===ne){ne!==0&&ne===Pr&&(Mu=!0),fe!==null&&(fe=fe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var at=t,et=T;ne=n;var Ft=a;switch(et.tag){case 1:if(at=et.payload,typeof at=="function"){xe=at.call(Ft,xe,ne);break e}xe=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=et.payload,ne=typeof at=="function"?at.call(Ft,xe,ne):at,ne==null)break e;xe=x({},xe,ne);break e;case 2:ga=!0}}ne=T.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=c.callbacks,ie===null?c.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:T.tag,payload:T.payload,callback:T.callback,next:null},fe===null?(Q=fe=ie,P=xe):fe=fe.next=ie,S|=ne;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ie=T,T=ie.next,ie.next=null,c.lastBaseUpdate=ie,c.shared.pending=null}}while(!0);fe===null&&(P=xe),c.baseState=P,c.firstBaseUpdate=Q,c.lastBaseUpdate=fe,f===null&&(c.shared.lanes=0),Ra|=S,t.lanes=S,t.memoizedState=xe}}function yh(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Mh(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)yh(a[t],n)}var Br=ee(null),gl=ee(0);function Eh(t,n){t=qi,ye(gl,t),ye(Br,n),qi=t|n.baseLanes}function Eu(){ye(gl,qi),ye(Br,Br.current)}function Tu(){qi=gl.current,Se(Br),Se(gl)}var Sa=0,ht=null,zt=null,on=null,vl=!1,Fr=!1,sr=!1,_l=0,eo=0,Ir=null,Ng=0;function tn(){throw Error(r(321))}function Au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!kn(t[a],n[a]))return!1;return!0}function Ru(t,n,a,s,c,f){return Sa=f,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?op:lp,sr=!1,f=a(s,c),sr=!1,Fr&&(f=Ah(n,a,s,c)),Th(t),f}function Th(t){B.H=Tl;var n=zt!==null&&zt.next!==null;if(Sa=0,on=zt=ht=null,vl=!1,eo=0,Ir=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&dl(t)&&(vn=!0))}function Ah(t,n,a,s){ht=t;var c=0;do{if(Fr&&(Ir=null),eo=0,Fr=!1,25<=c)throw Error(r(301));if(c+=1,on=zt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Fg,f=n(a,s)}while(Fr);return f}function Ug(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(ht.flags|=1024),n}function Cu(){var t=_l!==0;return _l=0,t}function wu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Du(t){if(vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vl=!1}Sa=0,on=zt=ht=null,Fr=!1,eo=_l=0,Ir=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ht.memoizedState=on=t:on=on.next=t,on}function ln(){if(zt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var n=on===null?ht.memoizedState:on.next;if(n!==null)on=n,zt=t;else{if(t===null)throw ht.alternate===null?Error(r(467)):Error(r(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},on===null?ht.memoizedState=on=t:on=on.next=t}return on}function Nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=eo;return eo+=1,Ir===null&&(Ir=[]),t=_h(Ir,t,n),n=ht,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?op:lp),t}function Sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===L)return Rn(t)}throw Error(r(438,String(t)))}function Uu(t){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ht.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nu(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function bl(t){var n=ln();return Lu(n,zt,t)}function Lu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=S=null,P=null,Q=n,fe=!1;do{var xe=Q.lane&-536870913;if(xe!==Q.lane?(Mt&xe)===xe:(Sa&xe)===xe){var ne=Q.revertLane;if(ne===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),xe===Pr&&(fe=!0);else if((Sa&ne)===ne){Q=Q.next,ne===Pr&&(fe=!0);continue}else xe={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(T=P=xe,S=f):P=P.next=xe,ht.lanes|=ne,Ra|=ne;xe=Q.action,sr&&a(f,xe),f=Q.hasEagerState?Q.eagerState:a(f,xe)}else ne={lane:xe,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(T=P=ne,S=f):P=P.next=ne,ht.lanes|=xe,Ra|=xe;Q=Q.next}while(Q!==null&&Q!==n);if(P===null?S=f:P.next=T,!kn(f,t.memoizedState)&&(vn=!0,fe&&(a=zr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ou(t){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);kn(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Rh(t,n,a){var s=ht,c=ln(),f=Ct;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!kn((zt||c).memoizedState,a);S&&(c.memoizedState=a,vn=!0),c=c.queue;var T=Dh.bind(null,s,c,t);if(no(2048,8,T,[t]),c.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Hr(9,yl(),wh.bind(null,s,c,a,n),null),Xt===null)throw Error(r(349));f||(Sa&124)!==0||Ch(s,n,a)}return a}function Ch(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Nu(),ht.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wh(t,n,a,s){n.value=a,n.getSnapshot=s,Nh(n)&&Uh(t)}function Dh(t,n,a){return a(function(){Nh(n)&&Uh(t)})}function Nh(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!kn(t,a)}catch{return!0}}function Uh(t){var n=Nr(t,2);n!==null&&Zn(n,t,2)}function Pu(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),sr){oe(!0);try{a()}finally{oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function Lh(t,n,a,s){return t.baseState=a,Lu(t,zt,typeof s=="function"?s:Vi)}function Lg(t,n,a,s,c){if(El(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};B.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Oh(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Oh(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=B.T,S={};B.T=S;try{var T=a(c,s),P=B.S;P!==null&&P(S,T),Ph(t,n,T)}catch(Q){zu(t,n,Q)}finally{B.T=f}}else try{f=a(c,s),Ph(t,n,f)}catch(Q){zu(t,n,Q)}}function Ph(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){zh(t,n,s)},function(s){return zu(t,n,s)}):zh(t,n,a)}function zh(t,n,a){n.status="fulfilled",n.value=a,Bh(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Oh(t,a)))}function zu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Bh(n),n=n.next;while(n!==s)}t.action=null}function Bh(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Fh(t,n){return n}function Ih(t,n){if(Ct){var a=Xt.formState;if(a!==null){e:{var s=ht;if(Ct){if(Zt){t:{for(var c=Zt,f=Ei;c.nodeType!==8;){if(!f){c=null;break t}if(c=xi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Zt=xi(c.nextSibling),s=c.data==="F!";break e}}nr(s)}s=!1}s&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fh,lastRenderedState:n},a.queue=s,a=ap.bind(null,ht,s),s.dispatch=a,s=Pu(!1),f=Vu.bind(null,ht,!1,s.queue),s=Fn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Lg.bind(null,ht,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Hh(t){var n=ln();return Vh(n,zt,t)}function Vh(t,n,a){if(n=Lu(t,n,Fh)[0],t=bl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(S){throw S===Zs?ml:S}else s=n;n=ln();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,Hr(9,yl(),Og.bind(null,c,a),null)),[s,f,t]}function Og(t,n){t.action=n}function Gh(t){var n=ln(),a=zt;if(a!==null)return Vh(n,a,t);ln(),n=n.memoizedState,a=ln();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Hr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Nu(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function yl(){return{destroy:void 0,resource:void 0}}function kh(){return ln().memoizedState}function Ml(t,n,a,s){var c=Fn();s=s===void 0?null:s,ht.flags|=t,c.memoizedState=Hr(1|n,yl(),a,s)}function no(t,n,a,s){var c=ln();s=s===void 0?null:s;var f=c.memoizedState.inst;zt!==null&&s!==null&&Au(s,zt.memoizedState.deps)?c.memoizedState=Hr(n,f,a,s):(ht.flags|=t,c.memoizedState=Hr(1|n,f,a,s))}function jh(t,n){Ml(8390656,8,t,n)}function Xh(t,n){no(2048,8,t,n)}function Wh(t,n){return no(4,2,t,n)}function qh(t,n){return no(4,4,t,n)}function Yh(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Zh(t,n,a){a=a!=null?a.concat([t]):null,no(4,4,Yh.bind(null,n,t),a)}function Bu(){}function Kh(t,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Au(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Qh(t,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Au(n,s[1]))return s[0];if(s=t(),sr){oe(!0);try{t()}finally{oe(!1)}}return a.memoizedState=[s,n],s}function Fu(t,n,a){return a===void 0||(Sa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=em(),ht.lanes|=t,Ra|=t,a)}function Jh(t,n,a,s){return kn(a,n)?a:Br.current!==null?(t=Fu(t,a,s),kn(t,n)||(vn=!0),t):(Sa&42)===0?(vn=!0,t.memoizedState=a):(t=em(),ht.lanes|=t,Ra|=t,n)}function $h(t,n,a,s,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=B.T,T={};B.T=T,Vu(t,!1,n,a);try{var P=c(),Q=B.S;if(Q!==null&&Q(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var fe=Dg(P,s);io(t,n,fe,Yn(t))}else io(t,n,s,Yn(t))}catch(xe){io(t,n,{then:function(){},status:"rejected",reason:xe},Yn())}finally{Z.p=f,B.T=S}}function Pg(){}function Iu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=ep(t).queue;$h(t,c,n,Y,a===null?Pg:function(){return tp(t),a(s)})}function ep(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function tp(t){var n=ep(t).next.queue;io(t,n,{},Yn())}function Hu(){return Rn(yo)}function np(){return ln().memoizedState}function ip(){return ln().memoizedState}function zg(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=va(a);var s=_a(n,t,a);s!==null&&(Zn(s,n,a),Qs(s,n,a)),n={cache:xu()},t.payload=n;return}n=n.return}}function Bg(t,n,a){var s=Yn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},El(t)?rp(n,a):(a=su(t,n,a,s),a!==null&&(Zn(a,t,s),sp(a,n,s)))}function ap(t,n,a){var s=Yn();io(t,n,a,s)}function io(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(t))rp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,kn(T,S))return ol(t,n,c,0),Xt===null&&sl(),!1}catch{}finally{}if(a=su(t,n,c,s),a!==null)return Zn(a,t,s),sp(a,n,s),!0}return!1}function Vu(t,n,a,s){if(s={lane:2,revertLane:Sf(),action:s,hasEagerState:!1,eagerState:null,next:null},El(t)){if(n)throw Error(r(479))}else n=su(t,a,s,2),n!==null&&Zn(n,t,2)}function El(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function rp(t,n){Fr=vl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function sp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Fe(t,a)}}var Tl={readContext:Rn,use:Sl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},op={readContext:Rn,use:Sl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:jh,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ml(4194308,4,Yh.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ml(4194308,4,t,n)},useInsertionEffect:function(t,n){Ml(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var s=t();if(sr){oe(!0);try{t()}finally{oe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Fn();if(a!==void 0){var c=a(n);if(sr){oe(!0);try{a(n)}finally{oe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Bg.bind(null,ht,t),[s.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Pu(t);var n=t.queue,a=ap.bind(null,ht,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Bu,useDeferredValue:function(t,n){var a=Fn();return Fu(a,t,n)},useTransition:function(){var t=Pu(!1);return t=$h.bind(null,ht,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ht,c=Fn();if(Ct){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(Mt&124)!==0||Ch(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,jh(Dh.bind(null,s,f,t),[t]),s.flags|=2048,Hr(9,yl(),wh.bind(null,s,f,a,n),null),a},useId:function(){var t=Fn(),n=Xt.identifierPrefix;if(Ct){var a=Fi,s=Bi;a=(s&~(1<<32-Pe(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=_l++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Ng++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Hu,useFormState:Ih,useActionState:Ih,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vu.bind(null,ht,!0,a),a.dispatch=n,[t,n]},useMemoCache:Uu,useCacheRefresh:function(){return Fn().memoizedState=zg.bind(null,ht)}},lp={readContext:Rn,use:Sl,useCallback:Kh,useContext:Rn,useEffect:Xh,useImperativeHandle:Zh,useInsertionEffect:Wh,useLayoutEffect:qh,useMemo:Qh,useReducer:bl,useRef:kh,useState:function(){return bl(Vi)},useDebugValue:Bu,useDeferredValue:function(t,n){var a=ln();return Jh(a,zt.memoizedState,t,n)},useTransition:function(){var t=bl(Vi)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Rh,useId:np,useHostTransitionStatus:Hu,useFormState:Hh,useActionState:Hh,useOptimistic:function(t,n){var a=ln();return Lh(a,zt,t,n)},useMemoCache:Uu,useCacheRefresh:ip},Fg={readContext:Rn,use:Sl,useCallback:Kh,useContext:Rn,useEffect:Xh,useImperativeHandle:Zh,useInsertionEffect:Wh,useLayoutEffect:qh,useMemo:Qh,useReducer:Ou,useRef:kh,useState:function(){return Ou(Vi)},useDebugValue:Bu,useDeferredValue:function(t,n){var a=ln();return zt===null?Fu(a,t,n):Jh(a,zt.memoizedState,t,n)},useTransition:function(){var t=Ou(Vi)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Rh,useId:np,useHostTransitionStatus:Hu,useFormState:Gh,useActionState:Gh,useOptimistic:function(t,n){var a=ln();return zt!==null?Lh(a,zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Uu,useCacheRefresh:ip},Vr=null,ao=0;function Al(t){var n=ao;return ao+=1,Vr===null&&(Vr=[]),_h(Vr,t,n)}function ro(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Rl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function cp(t){var n=t._init;return n(t._payload)}function up(t){function n(X,k){if(t){var K=X.deletions;K===null?(X.deletions=[k],X.flags|=16):K.push(k)}}function a(X,k){if(!t)return null;for(;k!==null;)n(X,k),k=k.sibling;return null}function s(X){for(var k=new Map;X!==null;)X.key!==null?k.set(X.key,X):k.set(X.index,X),X=X.sibling;return k}function c(X,k){return X=zi(X,k),X.index=0,X.sibling=null,X}function f(X,k,K){return X.index=K,t?(K=X.alternate,K!==null?(K=K.index,K<k?(X.flags|=67108866,k):K):(X.flags|=67108866,k)):(X.flags|=1048576,k)}function S(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function T(X,k,K,he){return k===null||k.tag!==6?(k=lu(K,X.mode,he),k.return=X,k):(k=c(k,K),k.return=X,k)}function P(X,k,K,he){var Ie=K.type;return Ie===A?fe(X,k,K.props.children,he,K.key):k!==null&&(k.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===ae&&cp(Ie)===k.type)?(k=c(k,K.props),ro(k,K),k.return=X,k):(k=cl(K.type,K.key,K.props,null,X.mode,he),ro(k,K),k.return=X,k)}function Q(X,k,K,he){return k===null||k.tag!==4||k.stateNode.containerInfo!==K.containerInfo||k.stateNode.implementation!==K.implementation?(k=cu(K,X.mode,he),k.return=X,k):(k=c(k,K.children||[]),k.return=X,k)}function fe(X,k,K,he,Ie){return k===null||k.tag!==7?(k=Ja(K,X.mode,he,Ie),k.return=X,k):(k=c(k,K),k.return=X,k)}function xe(X,k,K){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=lu(""+k,X.mode,K),k.return=X,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _:return K=cl(k.type,k.key,k.props,null,X.mode,K),ro(K,k),K.return=X,K;case M:return k=cu(k,X.mode,K),k.return=X,k;case ae:var he=k._init;return k=he(k._payload),xe(X,k,K)}if(ue(k)||te(k))return k=Ja(k,X.mode,K,null),k.return=X,k;if(typeof k.then=="function")return xe(X,Al(k),K);if(k.$$typeof===L)return xe(X,hl(X,k),K);Rl(X,k)}return null}function ne(X,k,K,he){var Ie=k!==null?k.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ie!==null?null:T(X,k,""+K,he);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case _:return K.key===Ie?P(X,k,K,he):null;case M:return K.key===Ie?Q(X,k,K,he):null;case ae:return Ie=K._init,K=Ie(K._payload),ne(X,k,K,he)}if(ue(K)||te(K))return Ie!==null?null:fe(X,k,K,he,null);if(typeof K.then=="function")return ne(X,k,Al(K),he);if(K.$$typeof===L)return ne(X,k,hl(X,K),he);Rl(X,K)}return null}function ie(X,k,K,he,Ie){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return X=X.get(K)||null,T(k,X,""+he,Ie);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case _:return X=X.get(he.key===null?K:he.key)||null,P(k,X,he,Ie);case M:return X=X.get(he.key===null?K:he.key)||null,Q(k,X,he,Ie);case ae:var xt=he._init;return he=xt(he._payload),ie(X,k,K,he,Ie)}if(ue(he)||te(he))return X=X.get(K)||null,fe(k,X,he,Ie,null);if(typeof he.then=="function")return ie(X,k,K,Al(he),Ie);if(he.$$typeof===L)return ie(X,k,K,hl(k,he),Ie);Rl(k,he)}return null}function at(X,k,K,he){for(var Ie=null,xt=null,We=k,tt=k=0,Sn=null;We!==null&&tt<K.length;tt++){We.index>tt?(Sn=We,We=null):Sn=We.sibling;var Et=ne(X,We,K[tt],he);if(Et===null){We===null&&(We=Sn);break}t&&We&&Et.alternate===null&&n(X,We),k=f(Et,k,tt),xt===null?Ie=Et:xt.sibling=Et,xt=Et,We=Sn}if(tt===K.length)return a(X,We),Ct&&er(X,tt),Ie;if(We===null){for(;tt<K.length;tt++)We=xe(X,K[tt],he),We!==null&&(k=f(We,k,tt),xt===null?Ie=We:xt.sibling=We,xt=We);return Ct&&er(X,tt),Ie}for(We=s(We);tt<K.length;tt++)Sn=ie(We,X,tt,K[tt],he),Sn!==null&&(t&&Sn.alternate!==null&&We.delete(Sn.key===null?tt:Sn.key),k=f(Sn,k,tt),xt===null?Ie=Sn:xt.sibling=Sn,xt=Sn);return t&&We.forEach(function(za){return n(X,za)}),Ct&&er(X,tt),Ie}function et(X,k,K,he){if(K==null)throw Error(r(151));for(var Ie=null,xt=null,We=k,tt=k=0,Sn=null,Et=K.next();We!==null&&!Et.done;tt++,Et=K.next()){We.index>tt?(Sn=We,We=null):Sn=We.sibling;var za=ne(X,We,Et.value,he);if(za===null){We===null&&(We=Sn);break}t&&We&&za.alternate===null&&n(X,We),k=f(za,k,tt),xt===null?Ie=za:xt.sibling=za,xt=za,We=Sn}if(Et.done)return a(X,We),Ct&&er(X,tt),Ie;if(We===null){for(;!Et.done;tt++,Et=K.next())Et=xe(X,Et.value,he),Et!==null&&(k=f(Et,k,tt),xt===null?Ie=Et:xt.sibling=Et,xt=Et);return Ct&&er(X,tt),Ie}for(We=s(We);!Et.done;tt++,Et=K.next())Et=ie(We,X,tt,Et.value,he),Et!==null&&(t&&Et.alternate!==null&&We.delete(Et.key===null?tt:Et.key),k=f(Et,k,tt),xt===null?Ie=Et:xt.sibling=Et,xt=Et);return t&&We.forEach(function(I3){return n(X,I3)}),Ct&&er(X,tt),Ie}function Ft(X,k,K,he){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case _:e:{for(var Ie=K.key;k!==null;){if(k.key===Ie){if(Ie=K.type,Ie===A){if(k.tag===7){a(X,k.sibling),he=c(k,K.props.children),he.return=X,X=he;break e}}else if(k.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===ae&&cp(Ie)===k.type){a(X,k.sibling),he=c(k,K.props),ro(he,K),he.return=X,X=he;break e}a(X,k);break}else n(X,k);k=k.sibling}K.type===A?(he=Ja(K.props.children,X.mode,he,K.key),he.return=X,X=he):(he=cl(K.type,K.key,K.props,null,X.mode,he),ro(he,K),he.return=X,X=he)}return S(X);case M:e:{for(Ie=K.key;k!==null;){if(k.key===Ie)if(k.tag===4&&k.stateNode.containerInfo===K.containerInfo&&k.stateNode.implementation===K.implementation){a(X,k.sibling),he=c(k,K.children||[]),he.return=X,X=he;break e}else{a(X,k);break}else n(X,k);k=k.sibling}he=cu(K,X.mode,he),he.return=X,X=he}return S(X);case ae:return Ie=K._init,K=Ie(K._payload),Ft(X,k,K,he)}if(ue(K))return at(X,k,K,he);if(te(K)){if(Ie=te(K),typeof Ie!="function")throw Error(r(150));return K=Ie.call(K),et(X,k,K,he)}if(typeof K.then=="function")return Ft(X,k,Al(K),he);if(K.$$typeof===L)return Ft(X,k,hl(X,K),he);Rl(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,k!==null&&k.tag===6?(a(X,k.sibling),he=c(k,K),he.return=X,X=he):(a(X,k),he=lu(K,X.mode,he),he.return=X,X=he),S(X)):a(X,k)}return function(X,k,K,he){try{ao=0;var Ie=Ft(X,k,K,he);return Vr=null,Ie}catch(We){if(We===Zs||We===ml)throw We;var xt=jn(29,We,null,X.mode);return xt.lanes=he,xt.return=X,xt}finally{}}}var Gr=up(!0),fp=up(!1),ai=ee(null),Ti=null;function ba(t){var n=t.alternate;ye(hn,hn.current&1),ye(ai,t),Ti===null&&(n===null||Br.current!==null||n.memoizedState!==null)&&(Ti=t)}function dp(t){if(t.tag===22){if(ye(hn,hn.current),ye(ai,t),Ti===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ti=t)}}else ya()}function ya(){ye(hn,hn.current),ye(ai,ai.current)}function Gi(t){Se(ai),Ti===t&&(Ti=null),Se(hn)}var hn=ee(0);function Cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Uf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Gu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Yn(),c=va(s);c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,s),n!==null&&(Zn(n,t,s),Qs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Yn(),c=va(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,s),n!==null&&(Zn(n,t,s),Qs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),s=va(a);s.tag=2,n!=null&&(s.callback=n),n=_a(t,s,a),n!==null&&(Zn(n,t,a),Qs(n,t,a))}};function hp(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function pp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&ku.enqueueReplaceState(n,n.state,null)}function or(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function mp(t){wl(t)}function xp(t){console.error(t)}function gp(t){wl(t)}function Dl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function vp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ju(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Dl(t,n)},a}function _p(t){return t=va(t),t.tag=3,t}function Sp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){vp(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){vp(n,a,s),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Ig(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Ti===null?mf():a.alternate===null&&Kt===0&&(Kt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===_u?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),gf(t,s,c)),!1;case 22:return a.flags|=65536,s===_u?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),gf(t,s,c)),!1}throw Error(r(435,a.tag))}return gf(t,s,c),mf(),!1}if(Ct)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==du&&(t=Error(r(422),{cause:s}),Xs(ei(t,a)))):(s!==du&&(n=Error(r(423),{cause:s}),Xs(ei(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ei(s,a),c=ju(t.stateNode,s,c),yu(t,c),Kt!==4&&(Kt=2)),!1;var f=Error(r(520),{cause:s});if(f=ei(f,a),ho===null?ho=[f]:ho.push(f),Kt!==4&&(Kt=2),n===null)return!0;s=ei(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=ju(a.stateNode,s,t),yu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=_p(c),Sp(c,t,a,s),yu(a,c),!1}a=a.return}while(a!==null);return!1}var bp=Error(r(461)),vn=!1;function En(t,n,a,s){n.child=t===null?fp(n,null,a,s):Gr(n,t.child,a,s)}function yp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return ar(n),s=Ru(t,n,a,S,f,c),T=Cu(),t!==null&&!vn?(wu(t,n,c),ki(t,n,c)):(Ct&&T&&uu(n),n.flags|=1,En(t,n,s,c),n.child)}function Mp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ep(t,n,f,s,c)):(t=cl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Ju(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(S,s)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=zi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Ep(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Ju(t,c))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,ki(t,n,c)}return Xu(t,n,a,s,c)}function Tp(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Ap(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&pl(n,f!==null?f.cachePool:null),f!==null?Eh(n,f):Eu(),dp(n);else return n.lanes=n.childLanes=536870912,Ap(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(pl(n,f.cachePool),Eh(n,f),ya(),n.memoizedState=null):(t!==null&&pl(n,null),Eu(),ya());return En(t,n,c,a),n.child}function Ap(t,n,a,s){var c=vu();return c=c===null?null:{parent:dn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&pl(n,null),Eu(),dp(n),t!==null&&Ws(t,n,s,!0),null}function Nl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Xu(t,n,a,s,c){return ar(n),a=Ru(t,n,a,s,void 0,c),s=Cu(),t!==null&&!vn?(wu(t,n,c),ki(t,n,c)):(Ct&&s&&uu(n),n.flags|=1,En(t,n,a,c),n.child)}function Rp(t,n,a,s,c,f){return ar(n),n.updateQueue=null,a=Ah(n,s,a,c),Th(t),s=Cu(),t!==null&&!vn?(wu(t,n,f),ki(t,n,f)):(Ct&&s&&uu(n),n.flags|=1,En(t,n,a,f),n.child)}function Cp(t,n,a,s,c){if(ar(n),n.stateNode===null){var f=Ur,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Su(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):Ur,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Gu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&ku.enqueueReplaceState(f,f.state,null),$s(n,s,f,c),Js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=or(a,T);f.props=P;var Q=f.context,fe=a.contextType;S=Ur,typeof fe=="object"&&fe!==null&&(S=Rn(fe));var xe=a.getDerivedStateFromProps;fe=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,fe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==S)&&pp(n,f,s,S),ga=!1;var ne=n.memoizedState;f.state=ne,$s(n,s,f,c),Js(),Q=n.memoizedState,T||ne!==Q||ga?(typeof xe=="function"&&(Gu(n,a,xe,s),Q=n.memoizedState),(P=ga||hp(n,a,P,s,ne,Q,S))?(fe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=S,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,bu(t,n),S=n.memoizedProps,fe=or(a,S),f.props=fe,xe=n.pendingProps,ne=f.context,Q=a.contextType,P=Ur,typeof Q=="object"&&Q!==null&&(P=Rn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==xe||ne!==P)&&pp(n,f,s,P),ga=!1,ne=n.memoizedState,f.state=ne,$s(n,s,f,c),Js();var ie=n.memoizedState;S!==xe||ne!==ie||ga||t!==null&&t.dependencies!==null&&dl(t.dependencies)?(typeof T=="function"&&(Gu(n,a,T,s),ie=n.memoizedState),(fe=ga||hp(n,a,fe,s,ne,ie,P)||t!==null&&t.dependencies!==null&&dl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ie,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ie,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ie),f.props=s,f.state=ie,f.context=P,s=fe):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Nl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Gr(n,t.child,null,c),n.child=Gr(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ki(t,n,c),t}function wp(t,n,a,s){return js(),n.flags|=256,En(t,n,a,s),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(t){return{baseLanes:t,cachePool:xh()}}function Yu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function Dp(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(c?ba(n):ya(),Ct){var T=Zt,P;if(P=T){e:{for(P=T,T=Ei;P.nodeType!==8;){if(!T){T=null;break e}if(P=xi(P.nextSibling),P===null){T=null;break e}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:$a!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},P=jn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,On=n,Zt=null,P=!0):P=!1}P||nr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Uf(T)?n.lanes=32:n.lanes=536870912,null;Gi(n)}return T=s.children,s=s.fallback,c?(ya(),c=n.mode,T=Ul({mode:"hidden",children:T},c),s=Ja(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=qu(a),c.childLanes=Yu(t,S,a),n.memoizedState=Wu,s):(ba(n),Zu(n,T))}if(P=t.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(ba(n),n.flags&=-257,n=Ku(t,n,a)):n.memoizedState!==null?(ya(),n.child=t.child,n.flags|=128,n=null):(ya(),c=s.fallback,T=n.mode,s=Ul({mode:"visible",children:s.children},T),c=Ja(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Gr(n,t.child,null,a),s=n.child,s.memoizedState=qu(a),s.childLanes=Yu(t,S,a),n.memoizedState=Wu,n=c);else if(ba(n),Uf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var Q=S.dgst;S=Q,s=Error(r(419)),s.stack="",s.digest=S,Xs({value:s,source:null,stack:null}),n=Ku(t,n,a)}else if(vn||Ws(t,n,a,!1),S=(a&t.childLanes)!==0,vn||S){if(S=Xt,S!==null&&(s=a&-a,s=(s&42)!==0?1:it(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==P.retryLane))throw P.retryLane=s,Nr(t,s),Zn(S,t,s),bp;T.data==="$?"||mf(),n=Ku(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,Zt=xi(T.nextSibling),On=n,Ct=!0,tr=null,Ei=!1,t!==null&&(ni[ii++]=Bi,ni[ii++]=Fi,ni[ii++]=$a,Bi=t.id,Fi=t.overflow,$a=n),n=Zu(n,s.children),n.flags|=4096);return n}return c?(ya(),c=s.fallback,T=n.mode,P=t.child,Q=P.sibling,s=zi(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,Q!==null?c=zi(Q,c):(c=Ja(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=t.child.memoizedState,T===null?T=qu(a):(P=T.cachePool,P!==null?(Q=dn._currentValue,P=P.parent!==Q?{parent:Q,pool:Q}:P):P=xh(),T={baseLanes:T.baseLanes|a,cachePool:P}),c.memoizedState=T,c.childLanes=Yu(t,S,a),n.memoizedState=Wu,s):(ba(n),a=t.child,t=a.sibling,a=zi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Zu(t,n){return n=Ul({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ul(t,n){return t=jn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ku(t,n,a){return Gr(n,t.child,null,a),t=Zu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Np(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),pu(t.return,n,a)}function Qu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Up(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(En(t,n,s.children,a),s=hn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,a,n);else if(t.tag===19)Np(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(ye(hn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Cl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Qu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Cl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Qu(n,!0,a,null,f);break;case"together":Qu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ju(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&dl(t)))}function Hg(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),xa(n,dn,t.memoizedState.cache),js();break;case 27:case 5:ke(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Dp(t,n,a):(ba(n),t=ki(t,n,a),t!==null?t.sibling:null);ba(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ws(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Up(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ye(hn,hn.current),s)break;return null;case 22:case 23:return n.lanes=0,Tp(t,n,a);case 24:xa(n,dn,t.memoizedState.cache)}return ki(t,n,a)}function Lp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Ju(t,a)&&(n.flags&128)===0)return vn=!1,Hg(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,Ct&&(n.flags&1048576)!==0&&ch(n,fl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")ou(s)?(t=or(s,t),n.tag=1,n=Cp(null,n,s,t,a)):(n.tag=0,n=Xu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===F){n.tag=11,n=yp(null,n,s,t,a);break e}else if(c===G){n.tag=14,n=Mp(null,n,s,t,a);break e}}throw n=ge(s)||s,Error(r(306,n,""))}}return n;case 0:return Xu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=or(s,n.pendingProps),Cp(t,n,s,c,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,bu(t,n),$s(n,s,null,a);var S=n.memoizedState;if(s=S.cache,xa(n,dn,s),s!==f.cache&&mu(n,[dn],a,!0),Js(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=wp(t,n,s,a);break e}else if(s!==c){c=ei(Error(r(424)),n),Xs(c),n=wp(t,n,s,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=xi(t.firstChild),On=n,Ct=!0,tr=null,Ei=!0,a=fp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(js(),s===c){n=ki(t,n,a);break e}En(t,n,s,a)}n=n.child}return n;case 26:return Nl(t,n),t===null?(a=Bm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ct||(a=n.type,t=n.pendingProps,s=Wl($.current).createElement(a),s[xn]=n,s[yn]=t,An(s,a,t),sn(s),n.stateNode=s):n.memoizedState=Bm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ke(n),t===null&&Ct&&(s=n.stateNode=Om(n.type,n.pendingProps,$.current),On=n,Ei=!0,c=Zt,Na(n.type)?(Lf=c,Zt=xi(s.firstChild)):Zt=c),En(t,n,n.pendingProps.children,a),Nl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((c=s=Zt)&&(s=p3(s,n.type,n.pendingProps,Ei),s!==null?(n.stateNode=s,On=n,Zt=xi(s.firstChild),Ei=!1,c=!0):c=!1),c||nr(n)),ke(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,wf(c,f)?s=null:S!==null&&wf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Ru(t,n,Ug,null,null,a),yo._currentValue=c),Nl(t,n),En(t,n,s,a),n.child;case 6:return t===null&&Ct&&((t=a=Zt)&&(a=m3(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,On=n,Zt=null,t=!0):t=!1),t||nr(n)),null;case 13:return Dp(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Gr(n,null,s,a):En(t,n,s,a),n.child;case 11:return yp(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,xa(n,n.type,s.value),En(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ar(n),c=Rn(c),s=s(c),n.flags|=1,En(t,n,s,a),n.child;case 14:return Mp(t,n,n.type,n.pendingProps,a);case 15:return Ep(t,n,n.type,n.pendingProps,a);case 19:return Up(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=Ul(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=zi(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Tp(t,n,a);case 24:return ar(n),s=Rn(dn),t===null?(c=vu(),c===null&&(c=Xt,f=xu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Su(n),xa(n,dn,c)):((t.lanes&a)!==0&&(bu(t,n),$s(n,null,null,a),Js()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),xa(n,dn,s)):(s=f.cache,xa(n,dn,s),s!==c.cache&&mu(n,[dn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(t){t.flags|=4}function Op(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Gm(n)){if(n=ai.current,n!==null&&((Mt&4194048)===Mt?Ti!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||n!==Ti))throw Ks=_u,gh;t.flags|=8192}}function Ll(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,Wr|=n)}function so(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Vg(t,n,a){var s=n.pendingProps;switch(fu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Hi(dn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ks(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,dh())),Yt(n),null;case 26:return a=n.memoizedState,t===null?(ji(n),a!==null?(Yt(n),Op(n,a)):(Yt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ji(n),Yt(n),Op(n,a)):(Yt(n),n.flags&=-16777217):(t.memoizedProps!==s&&ji(n),Yt(n),n.flags&=-16777217),null;case 27:lt(n),a=$.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=De.current,ks(n)?uh(n):(t=Om(c,s,a),n.stateNode=t,ji(n))}return Yt(n),null;case 5:if(lt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(t=De.current,ks(n))uh(n);else{switch(c=Wl($.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[xn]=n,t[yn]=s;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(An(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ji(n)}}return Yt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=$.current,ks(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=On,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[xn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Rm(t.nodeValue,a)),t||nr(n)}else t=Wl(t).createTextNode(s),t[xn]=n,n.stateNode=t}return Yt(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ks(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[xn]=n}else js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),c=!1}else c=dh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),Yt(n),null;case 4:return Je(),t===null&&Ef(n.stateNode.containerInfo),Yt(n),null;case 10:return Hi(n.type),Yt(n),null;case 19:if(Se(hn),c=n.memoizedState,c===null)return Yt(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)so(c,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Cl(t),f!==null){for(n.flags|=128,so(c,!1),t=f.updateQueue,n.updateQueue=t,Ll(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)lh(a,t),a=a.sibling;return ye(hn,hn.current&1|2),n.child}t=t.sibling}c.tail!==null&&rt()>zl&&(n.flags|=128,s=!0,so(c,!1),n.lanes=4194304)}else{if(!s)if(t=Cl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Ll(n,t),so(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ct)return Yt(n),null}else 2*rt()-c.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,s=!0,so(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=rt(),n.sibling=null,t=hn.current,ye(hn,s?t&1|2:t&1),n):(Yt(n),null);case 22:case 23:return Gi(n),Tu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Se(rr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(dn),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Gg(t,n){switch(fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(dn),Je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 13:if(Gi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));js()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Se(hn),null;case 4:return Je(),null;case 10:return Hi(n.type),null;case 22:case 23:return Gi(n),Tu(),t!==null&&Se(rr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(dn),null;case 25:return null;default:return null}}function Pp(t,n){switch(fu(n),n.tag){case 3:Hi(dn),Je();break;case 26:case 27:case 5:lt(n);break;case 4:Je();break;case 13:Gi(n);break;case 19:Se(hn);break;case 10:Hi(n.type);break;case 22:case 23:Gi(n),Tu(),t!==null&&Se(rr);break;case 24:Hi(dn)}}function oo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(T){Gt(n,n.return,T)}}function Ma(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var P=a,Q=T;try{Q()}catch(fe){Gt(c,P,fe)}}}s=s.next}while(s!==f)}}catch(fe){Gt(n,n.return,fe)}}function zp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mh(n,a)}catch(s){Gt(t,t.return,s)}}}function Bp(t,n,a){a.props=or(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Gt(t,n,s)}}function lo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Gt(t,n,c)}}function Ai(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Gt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Gt(t,n,c)}else a.current=null}function Fp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Gt(t,t.return,c)}}function $u(t,n,a){try{var s=t.stateNode;c3(s,t.type,a,n),s[yn]=n}catch(c){Gt(t,t.return,c)}}function Ip(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function ef(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xl));else if(s!==4&&(s===27&&Na(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(tf(t,n,a),t=t.sibling;t!==null;)tf(t,n,a),t=t.sibling}function Ol(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ol(t,n,a),t=t.sibling;t!==null;)Ol(t,n,a),t=t.sibling}function Hp(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,s,a),n[xn]=t,n[yn]=a}catch(f){Gt(t,t.return,f)}}var Xi=!1,nn=!1,nf=!1,Vp=typeof WeakSet=="function"?WeakSet:Set,_n=null;function kg(t,n){if(t=t.containerInfo,Rf=Jl,t=J0(t),eu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,T=-1,P=-1,Q=0,fe=0,xe=t,ne=null;t:for(;;){for(var ie;xe!==a||c!==0&&xe.nodeType!==3||(T=S+c),xe!==f||s!==0&&xe.nodeType!==3||(P=S+s),xe.nodeType===3&&(S+=xe.nodeValue.length),(ie=xe.firstChild)!==null;)ne=xe,xe=ie;for(;;){if(xe===t)break t;if(ne===a&&++Q===c&&(T=S),ne===f&&++fe===s&&(P=S),(ie=xe.nextSibling)!==null)break;xe=ne,ne=xe.parentNode}xe=ie}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cf={focusedElem:t,selectionRange:a},Jl=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var at=or(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(at,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(et){Gt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Nf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function Gp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(t,a),s&4&&oo(5,a);break;case 1:if(Ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Gt(a,a.return,S)}else{var c=or(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Gt(a,a.return,S)}}s&64&&zp(a),s&512&&lo(a,a.return);break;case 3:if(Ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mh(t,n)}catch(S){Gt(a,a.return,S)}}break;case 27:n===null&&s&4&&Hp(a);case 26:case 5:Ea(t,a),n===null&&s&4&&Fp(a),s&512&&lo(a,a.return);break;case 12:Ea(t,a);break;case 13:Ea(t,a),s&4&&Xp(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Jg.bind(null,a),x3(t,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||nn,c=Xi;var f=nn;Xi=s,(nn=n)&&!f?Ta(t,a,(a.subtreeFlags&8772)!==0):Ea(t,a),Xi=c,nn=f}break;case 30:break;default:Ea(t,a)}}function kp(t){var n=t.alternate;n!==null&&(t.alternate=null,kp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Er(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,In=!1;function Wi(t,n,a){for(a=a.child;a!==null;)jp(t,n,a),a=a.sibling}function jp(t,n,a){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(de,a)}catch{}switch(a.tag){case 26:nn||Ai(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Ai(a,n);var s=qt,c=In;Na(a.type)&&(qt=a.stateNode,In=!1),Wi(t,n,a),vo(a.stateNode),qt=s,In=c;break;case 5:nn||Ai(a,n);case 6:if(s=qt,c=In,qt=null,Wi(t,n,a),qt=s,In=c,qt!==null)if(In)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(a.stateNode)}catch(f){Gt(a,n,f)}else try{qt.removeChild(a.stateNode)}catch(f){Gt(a,n,f)}break;case 18:qt!==null&&(In?(t=qt,Um(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ao(t)):Um(qt,a.stateNode));break;case 4:s=qt,c=In,qt=a.stateNode.containerInfo,In=!0,Wi(t,n,a),qt=s,In=c;break;case 0:case 11:case 14:case 15:nn||Ma(2,a,n),nn||Ma(4,a,n),Wi(t,n,a);break;case 1:nn||(Ai(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Bp(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:nn=(s=nn)||a.memoizedState!==null,Wi(t,n,a),nn=s;break;default:Wi(t,n,a)}}function Xp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ao(t)}catch(a){Gt(n,n.return,a)}}function jg(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Vp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Vp),n;default:throw Error(r(435,t.tag))}}function af(t,n){var a=jg(t);n.forEach(function(s){var c=$g.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,T=S;e:for(;T!==null;){switch(T.tag){case 27:if(Na(T.type)){qt=T.stateNode,In=!1;break e}break;case 5:qt=T.stateNode,In=!1;break e;case 3:case 4:qt=T.stateNode.containerInfo,In=!0;break e}T=T.return}if(qt===null)throw Error(r(160));jp(f,S,c),qt=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Wp(n,t),n=n.sibling}var mi=null;function Wp(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),s&4&&(Ma(3,t,t.return),oo(3,t),Ma(5,t,t.return));break;case 1:Xn(n,t),Wn(t),s&512&&(nn||a===null||Ai(a,a.return)),s&64&&Xi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=mi;if(Xn(n,t),Wn(t),s&512&&(nn||a===null||Ai(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[yi]||f[xn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,s,a),f[xn]=t,sn(f),s=f;break e;case"link":var S=Hm("link","href",c).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break t}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Hm("meta","content",c).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break t}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[xn]=t,sn(f),s=f}t.stateNode=s}else Vm(c,t.type,t.stateNode);else t.stateNode=Im(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Vm(c,t.type,t.stateNode):Im(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&$u(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),s&512&&(nn||a===null||Ai(a,a.return)),a!==null&&s&4&&$u(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),s&512&&(nn||a===null||Ai(a,a.return)),t.flags&32){c=t.stateNode;try{en(c,"")}catch(ie){Gt(t,t.return,ie)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,$u(t,c,a!==null?a.memoizedProps:c)),s&1024&&(nf=!0);break;case 6:if(Xn(n,t),Wn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ie){Gt(t,t.return,ie)}}break;case 3:if(Zl=null,c=mi,mi=ql(n.containerInfo),Xn(n,t),mi=c,Wn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(ie){Gt(t,t.return,ie)}nf&&(nf=!1,qp(t));break;case 4:s=mi,mi=ql(t.stateNode.containerInfo),Xn(n,t),Wn(t),mi=s;break;case 12:Xn(n,t),Wn(t);break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(uf=rt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,af(t,s)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,Q=Xi,fe=nn;if(Xi=Q||c,nn=fe||P,Xn(n,t),nn=fe,Xi=Q,Wn(t),s&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Xi||nn||lr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=P.stateNode;var xe=P.memoizedProps.style,ne=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;T.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){Gt(P,P.return,ie)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(ie){Gt(P,P.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,af(t,a))));break;case 19:Xn(n,t),Wn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,af(t,s)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Ip(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=ef(t);Ol(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(en(S,""),a.flags&=-33);var T=ef(t);Ol(t,T,S);break;case 3:case 4:var P=a.stateNode.containerInfo,Q=ef(t);tf(t,Q,P);break;default:throw Error(r(161))}}catch(fe){Gt(t,t.return,fe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function qp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;qp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Gp(t,n.alternate,n),n=n.sibling}function lr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),lr(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bp(n,n.return,a),lr(n);break;case 27:vo(n.stateNode);case 26:case 5:Ai(n,n.return),lr(n);break;case 22:n.memoizedState===null&&lr(n);break;case 30:lr(n);break;default:lr(n)}t=t.sibling}}function Ta(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ta(c,f,a),oo(4,f);break;case 1:if(Ta(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Gt(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)yh(P[c],T)}catch(Q){Gt(s,s.return,Q)}}a&&S&64&&zp(f),lo(f,f.return);break;case 27:Hp(f);case 26:case 5:Ta(c,f,a),a&&s===null&&S&4&&Fp(f),lo(f,f.return);break;case 12:Ta(c,f,a);break;case 13:Ta(c,f,a),a&&S&4&&Xp(c,f);break;case 22:f.memoizedState===null&&Ta(c,f,a),lo(f,f.return);break;case 30:break;default:Ta(c,f,a)}n=n.sibling}}function rf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function sf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function Ri(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yp(t,n,a,s),n=n.sibling}function Yp(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,s),c&2048&&oo(9,n);break;case 1:Ri(t,n,a,s);break;case 3:Ri(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(c&2048){Ri(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Gt(n,n.return,P)}}else Ri(t,n,a,s);break;case 13:Ri(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(t,n,a,s):co(t,n):f._visibility&2?Ri(t,n,a,s):(f._visibility|=2,kr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&rf(S,n);break;case 24:Ri(t,n,a,s),c&2048&&sf(n.alternate,n);break;default:Ri(t,n,a,s)}}function kr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,T=a,P=s,Q=S.flags;switch(S.tag){case 0:case 11:case 15:kr(f,S,T,P,c),oo(8,S);break;case 23:break;case 22:var fe=S.stateNode;S.memoizedState!==null?fe._visibility&2?kr(f,S,T,P,c):co(f,S):(fe._visibility|=2,kr(f,S,T,P,c)),c&&Q&2048&&rf(S.alternate,S);break;case 24:kr(f,S,T,P,c),c&&Q&2048&&sf(S.alternate,S);break;default:kr(f,S,T,P,c)}n=n.sibling}}function co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:co(a,s),c&2048&&rf(s.alternate,s);break;case 24:co(a,s),c&2048&&sf(s.alternate,s);break;default:co(a,s)}n=n.sibling}}var uo=8192;function jr(t){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)Zp(t),t=t.sibling}function Zp(t){switch(t.tag){case 26:jr(t),t.flags&uo&&t.memoizedState!==null&&w3(mi,t.memoizedState,t.memoizedProps);break;case 5:jr(t);break;case 3:case 4:var n=mi;mi=ql(t.stateNode.containerInfo),jr(t),mi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=uo,uo=16777216,jr(t),uo=n):jr(t));break;default:jr(t)}}function Kp(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,Jp(s,t)}Kp(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qp(t),t=t.sibling}function Qp(t){switch(t.tag){case 0:case 11:case 15:fo(t),t.flags&2048&&Ma(9,t,t.return);break;case 3:fo(t);break;case 12:fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Pl(t)):fo(t);break;default:fo(t)}}function Pl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,Jp(s,t)}Kp(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}t=t.sibling}}function Jp(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else e:for(a=t;_n!==null;){s=_n;var c=s.sibling,f=s.return;if(kp(s),s===a){_n=null;break e}if(c!==null){c.return=f,_n=c;break e}_n=f}}}var Xg={getCacheForType:function(t){var n=Rn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Wg=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Xt=null,vt=null,Mt=0,Ut=0,qn=null,Aa=!1,Xr=!1,of=!1,qi=0,Kt=0,Ra=0,cr=0,lf=0,ri=0,Wr=0,ho=null,Hn=null,cf=!1,uf=0,zl=1/0,Bl=null,Ca=null,Tn=0,wa=null,qr=null,Yr=0,ff=0,df=null,$p=null,po=0,hf=null;function Yn(){if((Nt&2)!==0&&Mt!==0)return Mt&-Mt;if(B.T!==null){var t=Pr;return t!==0?t:Sf()}return At()}function em(){ri===0&&(ri=(Mt&536870912)===0||Ct?V():536870912);var t=ai.current;return t!==null&&(t.flags|=32),ri}function Zn(t,n,a){(t===Xt&&(Ut===2||Ut===9)||t.cancelPendingCommit!==null)&&(Zr(t,0),Da(t,Mt,ri,!1)),Re(t,a),((Nt&2)===0||t!==Xt)&&(t===Xt&&((Nt&2)===0&&(cr|=a),Kt===4&&Da(t,Mt,ri,!1)),Ci(t))}function tm(t,n,a){if((Nt&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Oe(t,n),c=s?Zg(t,n):xf(t,n,!0),f=s;do{if(c===0){Xr&&!s&&Da(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!qg(a)){c=xf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var T=t;c=ho;var P=T.current.memoizedState.isDehydrated;if(P&&(Zr(T,S).flags|=256),S=xf(T,S,!1),S!==2){if(of&&!P){T.errorRecoveryDisabledLanes|=f,cr|=f,c=4;break e}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Zr(t,0),Da(t,n,0,!0);break}e:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(s,n,ri,!Aa);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=uf+300-rt(),10<c)){if(Da(s,n,ri,!Aa),Ke(s,0,!0)!==0)break e;s.timeoutHandle=Dm(nm.bind(null,s,a,Hn,Bl,cf,n,ri,cr,Wr,Aa,f,2,-0,0),c);break e}nm(s,a,Hn,Bl,cf,n,ri,cr,Wr,Aa,f,0,-0,0)}}break}while(!0);Ci(t)}function nm(t,n,a,s,c,f,S,T,P,Q,fe,xe,ne,ie){if(t.timeoutHandle=-1,xe=n.subtreeFlags,(xe&8192||(xe&16785408)===16785408)&&(bo={stylesheets:null,count:0,unsuspend:C3},Zp(n),xe=D3(),xe!==null)){t.cancelPendingCommit=xe(cm.bind(null,t,n,f,a,s,c,S,T,P,fe,1,ne,ie)),Da(t,f,S,!Q);return}cm(t,n,f,a,s,c,S,T,P)}function qg(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(t,n,a,s){n&=~lf,n&=~cr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Pe(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&ve(t,a,n)}function Fl(){return(Nt&6)===0?(mo(0),!1):!0}function pf(){if(vt!==null){if(Ut===0)var t=vt.return;else t=vt,Ii=ir=null,Du(t),Vr=null,ao=0,t=vt;for(;t!==null;)Pp(t.alternate,t),t=t.return;vt=null}}function Zr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,f3(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),pf(),Xt=t,vt=a=zi(t.current,null),Mt=n,Ut=0,qn=null,Aa=!1,Xr=Oe(t,n),of=!1,Wr=ri=lf=cr=Ra=Kt=0,Hn=ho=null,cf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Pe(s),f=1<<c;n|=t[c],s&=~f}return qi=n,sl(),a}function im(t,n){ht=null,B.H=Tl,n===Zs||n===ml?(n=Sh(),Ut=3):n===gh?(n=Sh(),Ut=4):Ut=n===bp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,vt===null&&(Kt=1,Dl(t,ei(n,t.current)))}function am(){var t=B.H;return B.H=Tl,t===null?Tl:t}function rm(){var t=B.A;return B.A=Xg,t}function mf(){Kt=4,Aa||(Mt&4194048)!==Mt&&ai.current!==null||(Xr=!0),(Ra&134217727)===0&&(cr&134217727)===0||Xt===null||Da(Xt,Mt,ri,!1)}function xf(t,n,a){var s=Nt;Nt|=2;var c=am(),f=rm();(Xt!==t||Mt!==n)&&(Bl=null,Zr(t,n)),n=!1;var S=Kt;e:do try{if(Ut!==0&&vt!==null){var T=vt,P=qn;switch(Ut){case 8:pf(),S=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var Q=Ut;if(Ut=0,qn=null,Kr(t,T,P,Q),a&&Xr){S=0;break e}break;default:Q=Ut,Ut=0,qn=null,Kr(t,T,P,Q)}}Yg(),S=Kt;break}catch(fe){im(t,fe)}while(!0);return n&&t.shellSuspendCounter++,Ii=ir=null,Nt=s,B.H=c,B.A=f,vt===null&&(Xt=null,Mt=0,sl()),S}function Yg(){for(;vt!==null;)sm(vt)}function Zg(t,n){var a=Nt;Nt|=2;var s=am(),c=rm();Xt!==t||Mt!==n?(Bl=null,zl=rt()+500,Zr(t,n)):Xr=Oe(t,n);e:do try{if(Ut!==0&&vt!==null){n=vt;var f=qn;t:switch(Ut){case 1:Ut=0,qn=null,Kr(t,n,f,1);break;case 2:case 9:if(vh(f)){Ut=0,qn=null,om(n);break}n=function(){Ut!==2&&Ut!==9||Xt!==t||(Ut=7),Ci(t)},f.then(n,n);break e;case 3:Ut=7;break e;case 4:Ut=5;break e;case 7:vh(f)?(Ut=0,qn=null,om(n)):(Ut=0,qn=null,Kr(t,n,f,7));break;case 5:var S=null;switch(vt.tag){case 26:S=vt.memoizedState;case 5:case 27:var T=vt;if(!S||Gm(S)){Ut=0,qn=null;var P=T.sibling;if(P!==null)vt=P;else{var Q=T.return;Q!==null?(vt=Q,Il(Q)):vt=null}break t}}Ut=0,qn=null,Kr(t,n,f,5);break;case 6:Ut=0,qn=null,Kr(t,n,f,6);break;case 8:pf(),Kt=6;break e;default:throw Error(r(462))}}Kg();break}catch(fe){im(t,fe)}while(!0);return Ii=ir=null,B.H=s,B.A=c,Nt=a,vt!==null?0:(Xt=null,Mt=0,sl(),Kt)}function Kg(){for(;vt!==null&&!I();)sm(vt)}function sm(t){var n=Lp(t.alternate,t,qi);t.memoizedProps=t.pendingProps,n===null?Il(t):vt=n}function om(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Rp(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=Rp(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:Du(n);default:Pp(a,n),n=vt=lh(n,qi),n=Lp(a,n,qi)}t.memoizedProps=t.pendingProps,n===null?Il(t):vt=n}function Kr(t,n,a,s){Ii=ir=null,Du(n),Vr=null,ao=0;var c=n.return;try{if(Ig(t,c,n,a,Mt)){Kt=1,Dl(t,ei(a,t.current)),vt=null;return}}catch(f){if(c!==null)throw vt=c,f;Kt=1,Dl(t,ei(a,t.current)),vt=null;return}n.flags&32768?(Ct||s===1?t=!0:Xr||(Mt&536870912)!==0?t=!1:(Aa=t=!0,(s===2||s===9||s===3||s===6)&&(s=ai.current,s!==null&&s.tag===13&&(s.flags|=16384))),lm(n,t)):Il(n)}function Il(t){var n=t;do{if((n.flags&32768)!==0){lm(n,Aa);return}t=n.return;var a=Vg(n.alternate,n,qi);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);Kt===0&&(Kt=5)}function lm(t,n){do{var a=Gg(t.alternate,t);if(a!==null){a.flags&=32767,vt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=a}while(t!==null);Kt=6,vt=null}function cm(t,n,a,s,c,f,S,T,P){t.cancelPendingCommit=null;do Hl();while(Tn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ru,Me(t,a,f,S,T,P),t===Xt&&(vt=Xt=null,Mt=0),qr=n,wa=t,Yr=a,ff=f,df=c,$p=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,e3(je,function(){return pm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,c=Z.p,Z.p=2,S=Nt,Nt|=4;try{kg(t,n,a)}finally{Nt=S,Z.p=c,B.T=s}}Tn=1,um(),fm(),dm()}}function um(){if(Tn===1){Tn=0;var t=wa,n=qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=Z.p;Z.p=2;var c=Nt;Nt|=4;try{Wp(n,t);var f=Cf,S=J0(t.containerInfo),T=f.focusedElem,P=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Q0(T.ownerDocument.documentElement,T)){if(P!==null&&eu(T)){var Q=P.start,fe=P.end;if(fe===void 0&&(fe=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(fe,T.value.length);else{var xe=T.ownerDocument||document,ne=xe&&xe.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),at=T.textContent.length,et=Math.min(P.start,at),Ft=P.end===void 0?et:Math.min(P.end,at);!ie.extend&&et>Ft&&(S=Ft,Ft=et,et=S);var X=K0(T,et),k=K0(T,Ft);if(X&&k&&(ie.rangeCount!==1||ie.anchorNode!==X.node||ie.anchorOffset!==X.offset||ie.focusNode!==k.node||ie.focusOffset!==k.offset)){var K=xe.createRange();K.setStart(X.node,X.offset),ie.removeAllRanges(),et>Ft?(ie.addRange(K),ie.extend(k.node,k.offset)):(K.setEnd(k.node,k.offset),ie.addRange(K))}}}}for(xe=[],ie=T;ie=ie.parentNode;)ie.nodeType===1&&xe.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xe.length;T++){var he=xe[T];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}Jl=!!Rf,Cf=Rf=null}finally{Nt=c,Z.p=s,B.T=a}}t.current=n,Tn=2}}function fm(){if(Tn===2){Tn=0;var t=wa,n=qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=Z.p;Z.p=2;var c=Nt;Nt|=4;try{Gp(t,n.alternate,n)}finally{Nt=c,Z.p=s,B.T=a}}Tn=3}}function dm(){if(Tn===4||Tn===3){Tn=0,pt();var t=wa,n=qr,a=Yr,s=$p;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,qr=wa=null,hm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ca=null),wt(a),n=n.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(de,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=B.T,c=Z.p,Z.p=2,B.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{B.T=n,Z.p=c}}(Yr&3)!==0&&Hl(),Ci(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===hf?po++:(po=0,hf=t):po=0,mo(0)}}function hm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function Hl(t){return um(),fm(),dm(),pm()}function pm(){if(Tn!==5)return!1;var t=wa,n=ff;ff=0;var a=wt(Yr),s=B.T,c=Z.p;try{Z.p=32>a?32:a,B.T=null,a=df,df=null;var f=wa,S=Yr;if(Tn=0,qr=wa=null,Yr=0,(Nt&6)!==0)throw Error(r(331));var T=Nt;if(Nt|=4,Qp(f.current),Yp(f,f.current,S,a),Nt=T,mo(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(de,f)}catch{}return!0}finally{Z.p=c,B.T=s,hm(t,n)}}function mm(t,n,a){n=ei(a,n),n=ju(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(Re(t,2),Ci(t))}function Gt(t,n,a){if(t.tag===3)mm(t,t,a);else for(;n!==null;){if(n.tag===3){mm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ca===null||!Ca.has(s))){t=ei(a,t),a=_p(2),s=_a(n,a,2),s!==null&&(Sp(a,s,n,t),Re(s,2),Ci(s));break}}n=n.return}}function gf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Wg;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(of=!0,c.add(a),t=Qg.bind(null,t,n,a),n.then(t,t))}function Qg(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(Mt&a)===a&&(Kt===4||Kt===3&&(Mt&62914560)===Mt&&300>rt()-uf?(Nt&2)===0&&Zr(t,0):lf|=a,Wr===Mt&&(Wr=0)),Ci(t)}function xm(t,n){n===0&&(n=Ne()),t=Nr(t,n),t!==null&&(Re(t,n),Ci(t))}function Jg(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),xm(t,a)}function $g(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),xm(t,a)}function e3(t,n){return ct(t,n)}var Vl=null,Qr=null,vf=!1,Gl=!1,_f=!1,ur=0;function Ci(t){t!==Qr&&t.next===null&&(Qr===null?Vl=Qr=t:Qr=Qr.next=t),Gl=!0,vf||(vf=!0,n3())}function mo(t,n){if(!_f&&Gl){_f=!0;do for(var a=!1,s=Vl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pe(42|t)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Sm(s,f))}else f=Mt,f=Ke(s,s===Xt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Oe(s,f)||(a=!0,Sm(s,f));s=s.next}while(a);_f=!1}}function t3(){gm()}function gm(){Gl=vf=!1;var t=0;ur!==0&&(u3()&&(t=ur),ur=0);for(var n=rt(),a=null,s=Vl;s!==null;){var c=s.next,f=vm(s,n);f===0?(s.next=null,a===null?Vl=c:a.next=c,c===null&&(Qr=a)):(a=s,(t!==0||(f&3)!==0)&&(Gl=!0)),s=c}mo(t)}function vm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Pe(f),T=1<<S,P=c[S];P===-1?((T&a)===0||(T&s)!==0)&&(c[S]=nt(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=Xt,a=Mt,a=Ke(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ut===2||Ut===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ot(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Oe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ot(s),wt(a)){case 2:case 8:a=kt;break;case 32:a=je;break;case 268435456:a=U;break;default:a=je}return s=_m.bind(null,t),a=ct(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ot(s),t.callbackPriority=2,t.callbackNode=null,2}function _m(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hl()&&t.callbackNode!==a)return null;var s=Mt;return s=Ke(t,t===Xt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(tm(t,s,n),vm(t,rt()),t.callbackNode!=null&&t.callbackNode===a?_m.bind(null,t):null)}function Sm(t,n){if(Hl())return null;tm(t,n,!0)}function n3(){d3(function(){(Nt&6)!==0?ct(He,t3):gm()})}function Sf(){return ur===0&&(ur=V()),ur}function bm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$o(""+t)}function ym(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function i3(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=bm((c[yn]||null).action),S=s.submitter;S&&(n=(n=S[yn]||null)?bm(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new il("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ur!==0){var P=S?ym(c,S):new FormData(c);Iu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=S?ym(c,S):new FormData(c),Iu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var bf=0;bf<au.length;bf++){var yf=au[bf],a3=yf.toLowerCase(),r3=yf[0].toUpperCase()+yf.slice(1);pi(a3,"on"+r3)}pi(th,"onAnimationEnd"),pi(nh,"onAnimationIteration"),pi(ih,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(yg,"onTransitionRun"),pi(Mg,"onTransitionStart"),pi(Eg,"onTransitionCancel"),pi(ah,"onTransitionEnd"),ha("onMouseEnter",["mouseout","mouseover"]),ha("onMouseLeave",["mouseout","mouseover"]),ha("onPointerEnter",["pointerout","pointerover"]),ha("onPointerLeave",["pointerout","pointerover"]),Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Mm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],P=T.instance,Q=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=Q;try{f(c)}catch(fe){wl(fe)}c.currentTarget=null,f=P}else for(S=0;S<s.length;S++){if(T=s[S],P=T.instance,Q=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=Q;try{f(c)}catch(fe){wl(fe)}c.currentTarget=null,f=P}}}}function _t(t,n){var a=n[di];a===void 0&&(a=n[di]=new Set);var s=t+"__bubble";a.has(s)||(Em(n,t,2,!1),a.add(s))}function Mf(t,n,a){var s=0;n&&(s|=4),Em(a,t,s,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Ef(t){if(!t[kl]){t[kl]=!0,Qo.forEach(function(a){a!=="selectionchange"&&(s3.has(a)||Mf(a,!1,t),Mf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[kl]||(n[kl]=!0,Mf("selectionchange",!1,n))}}function Em(t,n,a,s){switch(Ym(n)){case 2:var c=L3;break;case 8:c=O3;break;default:c=Ff}a=c.bind(null,n,a,t),c=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Tf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=s.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=hi(T),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){s=f=S;continue e}T=T.parentNode}}s=s.return}N0(function(){var Q=f,fe=kc(a),xe=[];e:{var ne=rh.get(t);if(ne!==void 0){var ie=il,at=t;switch(t){case"keypress":if(tl(a)===0)break e;case"keydown":case"keyup":ie=eg;break;case"focusin":at="focus",ie=Zc;break;case"focusout":at="blur",ie=Zc;break;case"beforeblur":case"afterblur":ie=Zc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=O0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=G1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=ig;break;case th:case nh:case ih:ie=X1;break;case ah:ie=rg;break;case"scroll":case"scrollend":ie=H1;break;case"wheel":ie=og;break;case"copy":case"cut":case"paste":ie=q1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=z0;break;case"toggle":case"beforetoggle":ie=cg}var et=(n&4)!==0,Ft=!et&&(t==="scroll"||t==="scrollend"),X=et?ne!==null?ne+"Capture":null:ne;et=[];for(var k=Q,K;k!==null;){var he=k;if(K=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||K===null||X===null||(he=Os(k,X),he!=null&&et.push(go(k,he,K))),Ft)break;k=k.return}0<et.length&&(ne=new ie(ne,at,null,a,fe),xe.push({event:ne,listeners:et}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&a!==Gc&&(at=a.relatedTarget||a.fromElement)&&(hi(at)||at[Ui]))break e;if((ie||ne)&&(ne=fe.window===fe?fe:(ne=fe.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(at=a.relatedTarget||a.toElement,ie=Q,at=at?hi(at):null,at!==null&&(Ft=u(at),et=at.tag,at!==Ft||et!==5&&et!==27&&et!==6)&&(at=null)):(ie=null,at=Q),ie!==at)){if(et=O0,he="onMouseLeave",X="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(et=z0,he="onPointerLeave",X="onPointerEnter",k="pointer"),Ft=ie==null?ne:fa(ie),K=at==null?ne:fa(at),ne=new et(he,k+"leave",ie,a,fe),ne.target=Ft,ne.relatedTarget=K,he=null,hi(fe)===Q&&(et=new et(X,k+"enter",at,a,fe),et.target=K,et.relatedTarget=Ft,he=et),Ft=he,ie&&at)t:{for(et=ie,X=at,k=0,K=et;K;K=Jr(K))k++;for(K=0,he=X;he;he=Jr(he))K++;for(;0<k-K;)et=Jr(et),k--;for(;0<K-k;)X=Jr(X),K--;for(;k--;){if(et===X||X!==null&&et===X.alternate)break t;et=Jr(et),X=Jr(X)}et=null}else et=null;ie!==null&&Tm(xe,ne,ie,et,!1),at!==null&&Ft!==null&&Tm(xe,Ft,at,et,!0)}}e:{if(ne=Q?fa(Q):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var Ie=j0;else if(G0(ne))if(X0)Ie=_g;else{Ie=gg;var xt=xg}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?Q&&Vc(Q.elementType)&&(Ie=j0):Ie=vg;if(Ie&&(Ie=Ie(t,Q))){k0(xe,Ie,a,fe);break e}xt&&xt(t,ne,Q),t==="focusout"&&Q&&ne.type==="number"&&Q.memoizedProps.value!=null&&Vt(ne,"number",ne.value)}switch(xt=Q?fa(Q):window,t){case"focusin":(G0(xt)||xt.contentEditable==="true")&&(Cr=xt,tu=Q,Gs=null);break;case"focusout":Gs=tu=Cr=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,$0(xe,a,fe);break;case"selectionchange":if(bg)break;case"keydown":case"keyup":$0(xe,a,fe)}var We;if(Qc)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Rr?H0(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(B0&&a.locale!=="ko"&&(Rr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Rr&&(We=U0()):(ma=fe,Wc="value"in ma?ma.value:ma.textContent,Rr=!0)),xt=jl(Q,tt),0<xt.length&&(tt=new P0(tt,t,null,a,fe),xe.push({event:tt,listeners:xt}),We?tt.data=We:(We=V0(a),We!==null&&(tt.data=We)))),(We=fg?dg(t,a):hg(t,a))&&(tt=jl(Q,"onBeforeInput"),0<tt.length&&(xt=new P0("onBeforeInput","beforeinput",null,a,fe),xe.push({event:xt,listeners:tt}),xt.data=We)),i3(xe,t,Q,a,fe)}Mm(xe,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function jl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Os(t,a),c!=null&&s.unshift(go(t,c,f)),c=Os(t,n),c!=null&&s.push(go(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tm(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,P=T.alternate,Q=T.stateNode;if(T=T.tag,P!==null&&P===s)break;T!==5&&T!==26&&T!==27||Q===null||(P=Q,c?(Q=Os(a,f),Q!=null&&S.unshift(go(a,Q,P))):c||(Q=Os(a,f),Q!=null&&S.push(go(a,Q,P)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var o3=/\r\n?/g,l3=/\u0000|\uFFFD/g;function Am(t){return(typeof t=="string"?t:""+t).replace(o3,`
`).replace(l3,"")}function Rm(t,n){return n=Am(n),Am(t)===n}function Xl(){}function Bt(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||en(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&en(t,""+s);break;case"className":Te(t,"class",s);break;case"tabIndex":Te(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Te(t,a,s);break;case"style":w0(t,s,f);break;case"data":if(n!=="object"){Te(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=$o(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Bt(t,n,"name",c.name,c,null),Bt(t,n,"formEncType",c.formEncType,c,null),Bt(t,n,"formMethod",c.formMethod,c,null),Bt(t,n,"formTarget",c.formTarget,c,null)):(Bt(t,n,"encType",c.encType,c,null),Bt(t,n,"method",c.method,c,null),Bt(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=$o(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Xl);break;case"onScroll":s!=null&&_t("scroll",t);break;case"onScrollEnd":s!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=$o(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_t("beforetoggle",t),_t("toggle",t),q(t,"popover",s);break;case"xlinkActuate":we(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":we(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":we(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":we(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":we(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":we(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":we(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":we(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":we(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":q(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=F1.get(a)||a,q(t,a,s))}}function Af(t,n,a,s,c,f){switch(a){case"style":w0(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?en(t,s):(typeof s=="number"||typeof s=="bigint")&&en(t,""+s);break;case"onScroll":s!=null&&_t("scroll",t);break;case"onScrollEnd":s!=null&&_t("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):q(t,a,s)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Bt(t,n,f,S,a,null)}}c&&Bt(t,n,"srcSet",a.srcSet,a,null),s&&Bt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var T=f=S=c=null,P=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var fe=a[s];if(fe!=null)switch(s){case"name":c=fe;break;case"type":S=fe;break;case"checked":P=fe;break;case"defaultChecked":Q=fe;break;case"value":f=fe;break;case"defaultValue":T=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:Bt(t,n,s,fe,a,null)}}pa(t,f,T,P,Q,S,c,!1),Ze(t);return;case"select":_t("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Bt(t,n,c,T,a,null)}n=f,a=S,t.multiple=!!s,n!=null?$t(t,!!s,n,!1):a!=null&&$t(t,!!s,a,!0);return;case"textarea":_t("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Bt(t,n,S,T,a,null)}gn(t,s,c,f),Ze(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Bt(t,n,P,s,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(s=0;s<xo.length;s++)_t(xo[s],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Bt(t,n,Q,s,a,null)}return;default:if(Vc(n)){for(fe in a)a.hasOwnProperty(fe)&&(s=a[fe],s!==void 0&&Af(t,n,fe,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Bt(t,n,T,s,a,null))}function c3(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,P=null,Q=null,fe=null;for(ie in a){var xe=a[ie];if(a.hasOwnProperty(ie)&&xe!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":P=xe;default:s.hasOwnProperty(ie)||Bt(t,n,ie,null,s,xe)}}for(var ne in s){var ie=s[ne];if(xe=a[ne],s.hasOwnProperty(ne)&&(ie!=null||xe!=null))switch(ne){case"type":f=ie;break;case"name":c=ie;break;case"checked":Q=ie;break;case"defaultChecked":fe=ie;break;case"value":S=ie;break;case"defaultValue":T=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:ie!==xe&&Bt(t,n,ne,ie,s,xe)}}Mn(t,S,T,P,Q,fe,f,c);return;case"select":ie=S=T=ne=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":ie=P;default:s.hasOwnProperty(f)||Bt(t,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":ne=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==P&&Bt(t,n,c,f,s,P)}n=T,a=S,s=ie,ne!=null?$t(t,!!a,ne,!1):!!s!=!!a&&(n!=null?$t(t,!!a,n,!0):$t(t,!!a,a?[]:"",!1));return;case"textarea":ie=ne=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Bt(t,n,T,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":ne=c;break;case"defaultValue":ie=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Bt(t,n,S,c,s,f)}Ln(t,ne,ie);return;case"option":for(var at in a)if(ne=a[at],a.hasOwnProperty(at)&&ne!=null&&!s.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:Bt(t,n,at,null,s,ne)}for(P in s)if(ne=s[P],ie=a[P],s.hasOwnProperty(P)&&ne!==ie&&(ne!=null||ie!=null))switch(P){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Bt(t,n,P,ne,s,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ne=a[et],a.hasOwnProperty(et)&&ne!=null&&!s.hasOwnProperty(et)&&Bt(t,n,et,null,s,ne);for(Q in s)if(ne=s[Q],ie=a[Q],s.hasOwnProperty(Q)&&ne!==ie&&(ne!=null||ie!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:Bt(t,n,Q,ne,s,ie)}return;default:if(Vc(n)){for(var Ft in a)ne=a[Ft],a.hasOwnProperty(Ft)&&ne!==void 0&&!s.hasOwnProperty(Ft)&&Af(t,n,Ft,void 0,s,ne);for(fe in s)ne=s[fe],ie=a[fe],!s.hasOwnProperty(fe)||ne===ie||ne===void 0&&ie===void 0||Af(t,n,fe,ne,s,ie);return}}for(var X in a)ne=a[X],a.hasOwnProperty(X)&&ne!=null&&!s.hasOwnProperty(X)&&Bt(t,n,X,null,s,ne);for(xe in s)ne=s[xe],ie=a[xe],!s.hasOwnProperty(xe)||ne===ie||ne==null&&ie==null||Bt(t,n,xe,ne,s,ie)}var Rf=null,Cf=null;function Wl(t){return t.nodeType===9?t:t.ownerDocument}function Cm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function wf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Df=null;function u3(){var t=window.event;return t&&t.type==="popstate"?t===Df?!1:(Df=t,!0):(Df=null,!1)}var Dm=typeof setTimeout=="function"?setTimeout:void 0,f3=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,d3=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(h3)}:Dm;function h3(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function Um(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&vo(S.documentElement),a&2&&vo(S.body),a&4)for(a=S.head,vo(a),S=a.firstChild;S;){var T=S.nextSibling,P=S.nodeName;S[yi]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){t.removeChild(f),Ao(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);Ao(n)}function Nf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nf(a),Er(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function p3(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[yi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function m3(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function Uf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function x3(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Lf=null;function Lm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Om(t,n,a){switch(n=Wl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Er(t)}var si=new Map,Pm=new Set;function ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Yi=Z.d;Z.d={f:g3,r:v3,D:_3,C:S3,L:b3,m:y3,X:E3,S:M3,M:T3};function g3(){var t=Yi.f(),n=Fl();return t||n}function v3(t){var n=Li(t);n!==null&&n.tag===5&&n.type==="form"?tp(n):Yi.r(t)}var $r=typeof document>"u"?null:document;function zm(t,n,a){var s=$r;if(s&&typeof n=="string"&&n){var c=fn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Pm.has(c)||(Pm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),An(n,"link",t),sn(n),s.head.appendChild(n)))}}function _3(t){Yi.D(t),zm("dns-prefetch",t,null)}function S3(t,n){Yi.C(t,n),zm("preconnect",t,n)}function b3(t,n,a){Yi.L(t,n,a);var s=$r;if(s&&t&&n){var c='link[rel="preload"][as="'+fn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+fn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+fn(a.imageSizes)+'"]')):c+='[href="'+fn(t)+'"]';var f=c;switch(n){case"style":f=es(t);break;case"script":f=ts(t)}si.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(So(f))||(n=s.createElement("link"),An(n,"link",t),sn(n),s.head.appendChild(n)))}}function y3(t,n){Yi.m(t,n);var a=$r;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+fn(s)+'"][href="'+fn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!si.has(f)&&(t=x({rel:"modulepreload",href:t},n),si.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}s=a.createElement("link"),An(s,"link",t),sn(s),a.head.appendChild(s)}}}function M3(t,n,a){Yi.S(t,n,a);var s=$r;if(s&&t){var c=da(s).hoistableStyles,f=es(t);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(_o(f)))T.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(f))&&Of(t,a);var P=S=s.createElement("link");sn(P),An(P,"link",t),P._p=new Promise(function(Q,fe){P.onload=Q,P.onerror=fe}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function E3(t,n){Yi.X(t,n);var a=$r;if(a&&t){var s=da(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(So(c)),f||(t=x({src:t,async:!0},n),(n=si.get(c))&&Pf(t,n),f=a.createElement("script"),sn(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function T3(t,n){Yi.M(t,n);var a=$r;if(a&&t){var s=da(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(So(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=si.get(c))&&Pf(t,n),f=a.createElement("script"),sn(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Bm(t,n,a,s){var c=(c=$.current)?ql(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=es(a.href),a=da(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=es(a.href);var f=da(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(_o(t)))&&!f._p&&(S.instance=f,S.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),f||A3(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=da(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function es(t){return'href="'+fn(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function Fm(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function A3(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),An(n,"link",a),sn(n),t.head.appendChild(n))}function ts(t){return'[src="'+fn(t)+'"]'}function So(t){return"script[async]"+t}function Im(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+fn(a.href)+'"]');if(s)return n.instance=s,sn(s),s;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),sn(s),An(s,"style",c),Yl(s,a.precedence,t),n.instance=s;case"stylesheet":c=es(a.href);var f=t.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,sn(f),f;s=Fm(a),(c=si.get(c))&&Of(s,c),f=(t.ownerDocument||t).createElement("link"),sn(f);var S=f;return S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),An(f,"link",s),n.state.loading|=4,Yl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(So(f)))?(n.instance=c,sn(c),c):(s=a,(c=si.get(f))&&(s=x({},a),Pf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),sn(c),An(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Yl(s,a.precedence,t));return n.instance}function Yl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Of(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Zl=null;function Hm(t,n,a){if(Zl===null){var s=new Map,c=Zl=new Map;c.set(a,s)}else c=Zl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[yi]||f[xn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function Vm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function R3(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Gm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var bo=null;function C3(){}function w3(t,n,a){if(bo===null)throw Error(r(475));var s=bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=es(a.href),f=t.querySelector(_o(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Kl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,sn(f);return}f=t.ownerDocument||t,a=Fm(a),(c=si.get(c))&&Of(a,c),f=f.createElement("link"),sn(f);var S=f;S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),An(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Kl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function D3(){if(bo===null)throw Error(r(475));var t=bo;return t.stylesheets&&t.count===0&&zf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&zf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Kl(){if(this.count--,this.count===0){if(this.stylesheets)zf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ql=null;function zf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ql=new Map,n.forEach(N3,t),Ql=null,Kl.call(t))}function N3(t,n){if(!(n.state.loading&4)){var a=Ql.get(t);if(a)var s=a.get(null);else{a=new Map,Ql.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Kl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var yo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function U3(t,n,a,s,c,f,S,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function km(t,n,a,s,c,f,S,T,P,Q,fe,xe){return t=new U3(t,n,a,S,T,P,Q,xe),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=xu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Su(f),t}function jm(t){return t?(t=Ur,t):Ur}function Xm(t,n,a,s,c,f){c=jm(c),s.context===null?s.context=c:s.pendingContext=c,s=va(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=_a(t,s,n),a!==null&&(Zn(a,t,n),Qs(a,t,n))}function Wm(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Bf(t,n){Wm(t,n),(t=t.alternate)&&Wm(t,n)}function qm(t){if(t.tag===13){var n=Nr(t,67108864);n!==null&&Zn(n,t,67108864),Bf(t,67108864)}}var Jl=!0;function L3(t,n,a,s){var c=B.T;B.T=null;var f=Z.p;try{Z.p=2,Ff(t,n,a,s)}finally{Z.p=f,B.T=c}}function O3(t,n,a,s){var c=B.T;B.T=null;var f=Z.p;try{Z.p=8,Ff(t,n,a,s)}finally{Z.p=f,B.T=c}}function Ff(t,n,a,s){if(Jl){var c=If(s);if(c===null)Tf(t,n,s,$l,a),Zm(t,s);else if(z3(c,t,n,a,s))s.stopPropagation();else if(Zm(t,s),n&4&&-1<P3.indexOf(t)){for(;c!==null;){var f=Li(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=qe(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var P=1<<31-Pe(S);T.entanglements[1]|=P,S&=~P}Ci(f),(Nt&6)===0&&(zl=rt()+500,mo(0))}}break;case 13:T=Nr(f,2),T!==null&&Zn(T,f,2),Fl(),Bf(f,2)}if(f=If(s),f===null&&Tf(t,n,s,$l,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Tf(t,n,s,null,a)}}function If(t){return t=kc(t),Hf(t)}var $l=null;function Hf(t){if($l=null,t=hi(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return $l=t,null}function Ym(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pt()){case He:return 2;case kt:return 8;case je:case st:return 32;case U:return 268435456;default:return 32}default:return 32}}var Vf=!1,Ua=null,La=null,Oa=null,Mo=new Map,Eo=new Map,Pa=[],P3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zm(t,n){switch(t){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function To(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Li(n),n!==null&&qm(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function z3(t,n,a,s,c){switch(n){case"focusin":return Ua=To(Ua,t,n,a,s,c),!0;case"dragenter":return La=To(La,t,n,a,s,c),!0;case"mouseover":return Oa=To(Oa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,To(Mo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Eo.set(f,To(Eo.get(f)||null,t,n,a,s,c)),!0}return!1}function Km(t){var n=hi(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,$n(t.priority,function(){if(a.tag===13){var s=Yn();s=it(s);var c=Nr(a,s);c!==null&&Zn(c,a,s),Bf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=If(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Gc=s,a.target.dispatchEvent(s),Gc=null}else return n=Li(a),n!==null&&qm(n),t.blockedOn=a,!1;n.shift()}return!0}function Qm(t,n,a){ec(t)&&a.delete(n)}function B3(){Vf=!1,Ua!==null&&ec(Ua)&&(Ua=null),La!==null&&ec(La)&&(La=null),Oa!==null&&ec(Oa)&&(Oa=null),Mo.forEach(Qm),Eo.forEach(Qm)}function tc(t,n){t.blockedOn===n&&(t.blockedOn=null,Vf||(Vf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,B3)))}var nc=null;function Jm(t){nc!==t&&(nc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===t&&(nc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Hf(s||a)===null)continue;break}var f=Li(a);f!==null&&(t.splice(n,3),n-=3,Iu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Ao(t){function n(P){return tc(P,t)}Ua!==null&&tc(Ua,t),La!==null&&tc(La,t),Oa!==null&&tc(Oa,t),Mo.forEach(n),Eo.forEach(n);for(var a=0;a<Pa.length;a++){var s=Pa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)Km(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[yn]||null;if(typeof f=="function")S||Jm(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[yn]||null)T=S.formAction;else if(Hf(c)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Jm(a)}}}function Gf(t){this._internalRoot=t}ic.prototype.render=Gf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Yn();Xm(a,s,t,n,null,null)},ic.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Xm(t.current,2,null,t,null,null),Fl(),n[Ui]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var n=At();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&Km(t)}};var $m=e.version;if($m!=="19.1.1")throw Error(r(527,$m,"19.1.1"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var F3={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{de=ac.inject(F3),pe=ac}catch{}}return Co.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=mp,f=xp,S=gp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=km(t,1,!1,null,null,a,s,c,f,S,T,null),t[Ui]=n.current,Ef(t),new Gf(n)},Co.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=mp,S=xp,T=gp,P=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=km(t,1,!0,n,a??null,s,c,f,S,T,P,Q),n.context=jm(null),a=n.current,s=Yn(),s=it(s),c=va(s),c.callback=null,_a(a,c,s),a=s,n.current.lanes=a,Re(n,a),Ci(n),t[Ui]=n.current,Ef(t),new ic(n)},Co.version="19.1.1",Co}var cx;function Z3(){if(cx)return Xf.exports;cx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xf.exports=Y3(),Xf.exports}var K3=Z3();const Q3=s1(K3);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const v0="181",J3=0,ux=1,$3=2,o1=1,e2=2,ta=3,qa=0,Vn=1,na=2,ra=0,bs=1,fx=2,dx=3,hx=4,t2=5,vr=100,n2=101,i2=102,a2=103,r2=104,s2=200,o2=201,l2=202,c2=203,Rd=204,Cd=205,u2=206,f2=207,d2=208,h2=209,p2=210,m2=211,x2=212,g2=213,v2=214,wd=0,Dd=1,Nd=2,Ms=3,Ud=4,Ld=5,Od=6,Pd=7,l1=0,_2=1,S2=2,Xa=0,b2=1,y2=2,M2=3,E2=4,T2=5,A2=6,R2=7,c1=300,Es=301,Ts=302,zd=303,Bd=304,Bc=306,Fd=1e3,ia=1001,Id=1002,Jn=1003,C2=1004,rc=1005,fi=1006,Zf=1007,Sr=1008,oa=1009,u1=1010,f1=1011,Ho=1012,_0=1013,yr=1014,aa=1015,Cs=1016,S0=1017,b0=1018,Vo=1020,d1=35902,h1=35899,p1=1021,m1=1022,Si=1023,Go=1026,ko=1027,x1=1028,y0=1029,M0=1030,E0=1031,T0=1033,Cc=33776,wc=33777,Dc=33778,Nc=33779,Hd=35840,Vd=35841,Gd=35842,kd=35843,jd=36196,Xd=37492,Wd=37496,qd=37808,Yd=37809,Zd=37810,Kd=37811,Qd=37812,Jd=37813,$d=37814,e0=37815,t0=37816,n0=37817,i0=37818,a0=37819,r0=37820,s0=37821,o0=36492,l0=36494,c0=36495,u0=36283,f0=36284,d0=36285,h0=36286,w2=3200,D2=3201,N2=0,U2=1,ka="",li="srgb",As="srgb-linear",Lc="linear",It="srgb",ns=7680,px=519,L2=512,O2=513,P2=514,g1=515,z2=516,B2=517,F2=518,I2=519,p0=35044,mx="300 es",Ni=2e3,Oc=2001;function v1(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function jo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function H2(){const o=jo("canvas");return o.style.display="block",o}const xx={};function Pc(...o){const e="THREE."+o.shift();console.log(e,...o)}function ot(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Qt(...o){const e="THREE."+o.shift();console.error(e,...o)}function Xo(...o){const e=o.join(" ");e in xx||(xx[e]=!0,ot(...o))}function V2(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=Math.PI/180,m0=180/Math.PI;function Wa(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function bt(o,e,i){return Math.max(e,Math.min(i,o))}function G2(o,e){return(o%e+e)%e}function Qf(o,e,i){return(1-i)*o+i*e}function Di(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ht(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,i=0){yt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],g=r[l+3],_=u[d+0],M=u[d+1],A=u[d+2],C=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(h>=1){e[i+0]=_,e[i+1]=M,e[i+2]=A,e[i+3]=C;return}if(g!==C||m!==_||p!==M||x!==A){let y=m*_+p*M+x*A+g*C;y<0&&(_=-_,M=-M,A=-A,C=-C,y=-y);let v=1-h;if(y<.9995){const z=Math.acos(y),L=Math.sin(z);v=Math.sin(v*z)/L,h=Math.sin(h*z)/L,m=m*v+_*h,p=p*v+M*h,x=x*v+A*h,g=g*v+C*h}else{m=m*v+_*h,p=p*v+M*h,x=x*v+A*h,g=g*v+C*h;const z=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=z,p*=z,x*=z,g*=z}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],g=u[d],_=u[d+1],M=u[d+2],A=u[d+3];return e[i]=h*A+x*g+m*M-p*_,e[i+1]=m*A+x*_+p*g-h*M,e[i+2]=p*A+x*M+h*_-m*g,e[i+3]=x*A-h*g-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),g=h(u/2),_=m(r/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=_*x*g+p*M*A,this._y=p*M*g-_*x*A,this._z=p*x*A+_*M*g,this._w=p*x*g-_*M*A;break;case"YXZ":this._x=_*x*g+p*M*A,this._y=p*M*g-_*x*A,this._z=p*x*A-_*M*g,this._w=p*x*g+_*M*A;break;case"ZXY":this._x=_*x*g-p*M*A,this._y=p*M*g+_*x*A,this._z=p*x*A+_*M*g,this._w=p*x*g-_*M*A;break;case"ZYX":this._x=_*x*g-p*M*A,this._y=p*M*g+_*x*A,this._z=p*x*A-_*M*g,this._w=p*x*g+_*M*A;break;case"YZX":this._x=_*x*g+p*M*A,this._y=p*M*g+_*x*A,this._z=p*x*A-_*M*g,this._w=p*x*g-_*M*A;break;case"XZY":this._x=_*x*g-p*M*A,this._y=p*M*g-_*x*A,this._z=p*x*A+_*M*g,this._w=p*x*g+_*M*A;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],_=r+h+g;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-u*m,this._y=l*x+d*m+u*h-r*p,this._z=u*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(gx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(gx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),x=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*x,this.y=r+m*x+h*p-u*g,this.z=l+m*g+u*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new le,gx=new Wo;class ft{constructor(e,i,r,l,u,d,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],g=r[7],_=r[2],M=r[5],A=r[8],C=l[0],y=l[3],v=l[6],z=l[1],L=l[4],F=l[7],H=l[2],O=l[5],G=l[8];return u[0]=d*C+h*z+m*H,u[3]=d*y+h*L+m*O,u[6]=d*v+h*F+m*G,u[1]=p*C+x*z+g*H,u[4]=p*y+x*L+g*O,u[7]=p*v+x*F+g*G,u[2]=_*C+M*z+A*H,u[5]=_*y+M*L+A*O,u[8]=_*v+M*F+A*G,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-r*u*x+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=x*d-h*p,_=h*m-x*u,M=p*u-d*m,A=i*g+r*_+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(l*p-x*r)*C,e[2]=(h*r-l*d)*C,e[3]=_*C,e[4]=(x*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=M*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply($f.makeScale(e,i)),this}rotate(e){return this.premultiply($f.makeRotation(-e)),this}translate(e,i){return this.premultiply($f.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $f=new ft,vx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_x=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k2(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===It&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=ys(l.r),l.g=ys(l.g),l.b=ys(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Lc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Xo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Xo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:e,whitePoint:r,transfer:Lc,toXYZ:vx,fromXYZ:_x,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:It,toXYZ:vx,fromXYZ:_x,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),o}const Tt=k2();function sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ys(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let is;class j2{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{is===void 0&&(is=jo("canvas")),is.width=e.width,is.height=e.height;const l=is.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=is}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=jo("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=sa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(sa(i[r]/255)*255):i[r]=sa(i[r]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X2=0;class A0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X2++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(ed(l[d].image)):u.push(ed(l[d]))}else u=ed(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function ed(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?j2.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let W2=0;const td=new le;class Nn extends ws{constructor(e=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=ia,l=ia,u=fi,d=Sr,h=Si,m=oa,p=Nn.DEFAULT_ANISOTROPY,x=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W2++}),this.uuid=Wa(),this.name="",this.source=new A0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fd:e.x=e.x-Math.floor(e.x);break;case ia:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fd:e.y=e.y-Math.floor(e.y);break;case ia:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=c1;Nn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],x=m[4],g=m[8],_=m[1],M=m[5],A=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(x-_)<.01&&Math.abs(g-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(g+C)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,F=(M+1)/2,H=(v+1)/2,O=(x+_)/4,G=(g+C)/4,ae=(A+y)/4;return L>F&&L>H?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=O/r,u=G/r):F>H?F<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),r=O/l,u=ae/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=G/u,l=ae/u),this.set(r,l,u,i),this}let z=Math.sqrt((y-A)*(y-A)+(g-C)*(g-C)+(_-x)*(_-x));return Math.abs(z)<.001&&(z=1),this.x=(y-A)/z,this.y=(g-C)/z,this.z=(_-x)/z,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q2 extends ws{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Nn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new A0(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends q2{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class _1 extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y2 extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,gi):gi.fromBufferAttribute(u,d),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sc.copy(r.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),oc.subVectors(this.max,wo),as.subVectors(e.a,wo),rs.subVectors(e.b,wo),ss.subVectors(e.c,wo),Ba.subVectors(rs,as),Fa.subVectors(ss,rs),fr.subVectors(as,ss);let i=[0,-Ba.z,Ba.y,0,-Fa.z,Fa.y,0,-fr.z,fr.y,Ba.z,0,-Ba.x,Fa.z,0,-Fa.x,fr.z,0,-fr.x,-Ba.y,Ba.x,0,-Fa.y,Fa.x,0,-fr.y,fr.x,0];return!nd(i,as,rs,ss,oc)||(i=[1,0,0,0,1,0,0,0,1],!nd(i,as,rs,ss,oc))?!1:(lc.crossVectors(Ba,Fa),i=[lc.x,lc.y,lc.z],nd(i,as,rs,ss,oc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zi=[new le,new le,new le,new le,new le,new le,new le,new le],gi=new le,sc=new qo,as=new le,rs=new le,ss=new le,Ba=new le,Fa=new le,fr=new le,wo=new le,oc=new le,lc=new le,dr=new le;function nd(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){dr.fromArray(o,u);const h=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),m=e.dot(dr),p=i.dot(dr),x=r.dot(dr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const Z2=new qo,Do=new le,id=new le;class R0{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Z2.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Do,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(id)),this.expandByPoint(Do.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ki=new le,ad=new le,cc=new le,Ia=new le,rd=new le,uc=new le,sd=new le;class K2{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ad.copy(e).add(i).multiplyScalar(.5),cc.copy(i).sub(e).normalize(),Ia.copy(this.origin).sub(ad);const u=e.distanceTo(i)*.5,d=-this.direction.dot(cc),h=Ia.dot(this.direction),m=-Ia.dot(cc),p=Ia.lengthSq(),x=Math.abs(1-d*d);let g,_,M,A;if(x>0)if(g=d*m-h,_=d*h-m,A=u*x,g>=0)if(_>=-A)if(_<=A){const C=1/x;g*=C,_*=C,M=g*(g+d*_+2*h)+_*(d*g+_+2*m)+p}else _=u,g=Math.max(0,-(d*_+h)),M=-g*g+_*(_+2*m)+p;else _=-u,g=Math.max(0,-(d*_+h)),M=-g*g+_*(_+2*m)+p;else _<=-A?(g=Math.max(0,-(-d*u+h)),_=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+_*(_+2*m)+p):_<=A?(g=0,_=Math.min(Math.max(-u,-m),u),M=_*(_+2*m)+p):(g=Math.max(0,-(d*u+h)),_=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+_*(_+2*m)+p);else _=d>0?-u:u,g=Math.max(0,-(d*_+h)),M=-g*g+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ad).addScaledVector(cc,_),M}intersectSphere(e,i){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),x>=0?(u=(e.min.y-_.y)*x,d=(e.max.y-_.y)*x):(u=(e.max.y-_.y)*x,d=(e.min.y-_.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-_.z)*g,m=(e.max.z-_.z)*g):(h=(e.max.z-_.z)*g,m=(e.min.z-_.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,i,r,l,u){rd.subVectors(i,e),uc.subVectors(r,e),sd.crossVectors(rd,uc);let d=this.direction.dot(sd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ia.subVectors(this.origin,e);const m=h*this.direction.dot(uc.crossVectors(Ia,uc));if(m<0)return null;const p=h*this.direction.dot(rd.cross(Ia));if(p<0||m+p>d)return null;const x=-h*Ia.dot(sd);return x<0?null:this.at(x/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(e,i,r,l,u,d,h,m,p,x,g,_,M,A,C,y){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,x,g,_,M,A,C,y)}set(e,i,r,l,u,d,h,m,p,x,g,_,M,A,C,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=g,v[14]=_,v[3]=M,v[7]=A,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/os.setFromMatrixColumn(e,0).length(),u=1/os.setFromMatrixColumn(e,1).length(),d=1/os.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const _=d*x,M=d*g,A=h*x,C=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=M+A*p,i[5]=_-C*p,i[9]=-h*m,i[2]=C-_*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const _=m*x,M=m*g,A=p*x,C=p*g;i[0]=_+C*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*g,i[5]=d*x,i[9]=-h,i[2]=M*h-A,i[6]=C+_*h,i[10]=d*m}else if(e.order==="ZXY"){const _=m*x,M=m*g,A=p*x,C=p*g;i[0]=_-C*h,i[4]=-d*g,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*x,i[9]=C-_*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const _=d*x,M=d*g,A=h*x,C=h*g;i[0]=m*x,i[4]=A*p-M,i[8]=_*p+C,i[1]=m*g,i[5]=C*p+_,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*x,i[4]=C-_*g,i[8]=A*g+M,i[1]=g,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=M*g+A,i[10]=_-C*g}else if(e.order==="XZY"){const _=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=_*g+C,i[5]=d*x,i[9]=M*g-A,i[2]=A*g-M,i[6]=h*x,i[10]=C*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q2,e,J2)}lookAt(e,i,r){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ha.crossVectors(r,Kn),Ha.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ha.crossVectors(r,Kn)),Ha.normalize(),fc.crossVectors(Kn,Ha),l[0]=Ha.x,l[4]=fc.x,l[8]=Kn.x,l[1]=Ha.y,l[5]=fc.y,l[9]=Kn.y,l[2]=Ha.z,l[6]=fc.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],g=r[5],_=r[9],M=r[13],A=r[2],C=r[6],y=r[10],v=r[14],z=r[3],L=r[7],F=r[11],H=r[15],O=l[0],G=l[4],ae=l[8],N=l[12],w=l[1],j=l[5],te=l[9],ce=l[13],ge=l[2],ue=l[6],B=l[10],Z=l[14],Y=l[3],_e=l[7],D=l[11],ee=l[15];return u[0]=d*O+h*w+m*ge+p*Y,u[4]=d*G+h*j+m*ue+p*_e,u[8]=d*ae+h*te+m*B+p*D,u[12]=d*N+h*ce+m*Z+p*ee,u[1]=x*O+g*w+_*ge+M*Y,u[5]=x*G+g*j+_*ue+M*_e,u[9]=x*ae+g*te+_*B+M*D,u[13]=x*N+g*ce+_*Z+M*ee,u[2]=A*O+C*w+y*ge+v*Y,u[6]=A*G+C*j+y*ue+v*_e,u[10]=A*ae+C*te+y*B+v*D,u[14]=A*N+C*ce+y*Z+v*ee,u[3]=z*O+L*w+F*ge+H*Y,u[7]=z*G+L*j+F*ue+H*_e,u[11]=z*ae+L*te+F*B+H*D,u[15]=z*N+L*ce+F*Z+H*ee,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],g=e[6],_=e[10],M=e[14],A=e[3],C=e[7],y=e[11],v=e[15];return A*(+u*m*g-l*p*g-u*h*_+r*p*_+l*h*M-r*m*M)+C*(+i*m*M-i*p*_+u*d*_-l*d*M+l*p*x-u*m*x)+y*(+i*p*g-i*h*M-u*d*g+r*d*M+u*h*x-r*p*x)+v*(-l*h*x-i*m*g+i*h*_+l*d*g-r*d*_+r*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=e[9],_=e[10],M=e[11],A=e[12],C=e[13],y=e[14],v=e[15],z=g*y*p-C*_*p+C*m*M-h*y*M-g*m*v+h*_*v,L=A*_*p-x*y*p-A*m*M+d*y*M+x*m*v-d*_*v,F=x*C*p-A*g*p+A*h*M-d*C*M-x*h*v+d*g*v,H=A*g*m-x*C*m-A*h*_+d*C*_+x*h*y-d*g*y,O=i*z+r*L+l*F+u*H;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/O;return e[0]=z*G,e[1]=(C*_*u-g*y*u-C*l*M+r*y*M+g*l*v-r*_*v)*G,e[2]=(h*y*u-C*m*u+C*l*p-r*y*p-h*l*v+r*m*v)*G,e[3]=(g*m*u-h*_*u-g*l*p+r*_*p+h*l*M-r*m*M)*G,e[4]=L*G,e[5]=(x*y*u-A*_*u+A*l*M-i*y*M-x*l*v+i*_*v)*G,e[6]=(A*m*u-d*y*u-A*l*p+i*y*p+d*l*v-i*m*v)*G,e[7]=(d*_*u-x*m*u+x*l*p-i*_*p-d*l*M+i*m*M)*G,e[8]=F*G,e[9]=(A*g*u-x*C*u-A*r*M+i*C*M+x*r*v-i*g*v)*G,e[10]=(d*C*u-A*h*u+A*r*p-i*C*p-d*r*v+i*h*v)*G,e[11]=(x*h*u-d*g*u-x*r*p+i*g*p+d*r*M-i*h*M)*G,e[12]=H*G,e[13]=(x*C*l-A*g*l+A*r*_-i*C*_-x*r*y+i*g*y)*G,e[14]=(A*h*l-d*C*l-A*r*m+i*C*m+d*r*y-i*h*y)*G,e[15]=(d*g*l-x*h*l+x*r*m-i*g*m-d*r*_+i*h*_)*G,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,x=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,x=d+d,g=h+h,_=u*p,M=u*x,A=u*g,C=d*x,y=d*g,v=h*g,z=m*p,L=m*x,F=m*g,H=r.x,O=r.y,G=r.z;return l[0]=(1-(C+v))*H,l[1]=(M+F)*H,l[2]=(A-L)*H,l[3]=0,l[4]=(M-F)*O,l[5]=(1-(_+v))*O,l[6]=(y+z)*O,l[7]=0,l[8]=(A+L)*G,l[9]=(y-z)*G,l[10]=(1-(_+C))*G,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=os.set(l[0],l[1],l[2]).length();const d=os.set(l[4],l[5],l[6]).length(),h=os.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],vi.copy(this);const p=1/u,x=1/d,g=1/h;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=x,vi.elements[5]*=x,vi.elements[6]*=x,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,i.setFromRotationMatrix(vi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Ni,m=!1){const p=this.elements,x=2*u/(i-e),g=2*u/(r-l),_=(i+e)/(i-e),M=(r+l)/(r-l);let A,C;if(m)A=u/(d-u),C=d*u/(d-u);else if(h===Ni)A=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Oc)A=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Ni,m=!1){const p=this.elements,x=2/(i-e),g=2/(r-l),_=-(i+e)/(i-e),M=-(r+l)/(r-l);let A,C;if(m)A=1/(d-u),C=d/(d-u);else if(h===Ni)A=-2/(d-u),C=-(d+u)/(d-u);else if(h===Oc)A=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const os=new le,vi=new un,Q2=new le(0,0,0),J2=new le(1,1,1),Ha=new le,fc=new le,Kn=new le,Sx=new un,bx=new Wo;class la{constructor(e=0,i=0,r=0,l=la.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Sx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return bx.setFromEuler(this),this.setFromQuaternion(bx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class S1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $2=0;const yx=new le,ls=new Wo,Qi=new un,dc=new le,No=new le,ev=new le,tv=new Wo,Mx=new le(1,0,0),Ex=new le(0,1,0),Tx=new le(0,0,1),Ax={type:"added"},nv={type:"removed"},cs={type:"childadded",child:null},od={type:"childremoved",child:null};class Gn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$2++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new le,i=new la,r=new Wo,l=new le(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new ft}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Mx,e)}rotateY(e){return this.rotateOnAxis(Ex,e)}rotateZ(e){return this.rotateOnAxis(Tx,e)}translateOnAxis(e,i){return yx.copy(e).applyQuaternion(this.quaternion),this.position.add(yx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Mx,e)}translateY(e){return this.translateOnAxis(Ex,e)}translateZ(e){return this.translateOnAxis(Tx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?dc.copy(e):dc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(No,dc,this.up):Qi.lookAt(dc,No,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),ls.setFromRotationMatrix(Qi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Qt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ax),cs.child=e,this.dispatchEvent(cs),cs.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(nv),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ax),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,ev),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,tv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),g=d(e.shapes),_=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new le(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new le,Ji=new le,ld=new le,$i=new le,us=new le,fs=new le,Rx=new le,cd=new le,ud=new le,fd=new le,dd=new an,hd=new an,pd=new an;class ui{constructor(e=new le,i=new le,r=new le){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),_i.subVectors(e,i),l.cross(_i);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){_i.subVectors(l,i),Ji.subVectors(r,i),ld.subVectors(e,i);const d=_i.dot(_i),h=_i.dot(Ji),m=_i.dot(ld),p=Ji.dot(Ji),x=Ji.dot(ld),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const _=1/g,M=(p*m-h*x)*_,A=(d*x-h*m)*_;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(d,$i.y),m.addScaledVector(h,$i.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return dd.setScalar(0),hd.setScalar(0),pd.setScalar(0),dd.fromBufferAttribute(e,i),hd.fromBufferAttribute(e,r),pd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(dd,u.x),d.addScaledVector(hd,u.y),d.addScaledVector(pd,u.z),d}static isFrontFacing(e,i,r,l){return _i.subVectors(r,i),Ji.subVectors(e,i),_i.cross(Ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),_i.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;us.subVectors(l,r),fs.subVectors(u,r),cd.subVectors(e,r);const m=us.dot(cd),p=fs.dot(cd);if(m<=0&&p<=0)return i.copy(r);ud.subVectors(e,l);const x=us.dot(ud),g=fs.dot(ud);if(x>=0&&g<=x)return i.copy(l);const _=m*g-x*p;if(_<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(us,d);fd.subVectors(e,u);const M=us.dot(fd),A=fs.dot(fd);if(A>=0&&M<=A)return i.copy(u);const C=M*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(fs,h);const y=x*A-M*g;if(y<=0&&g-x>=0&&M-A>=0)return Rx.subVectors(u,l),h=(g-x)/(g-x+(M-A)),i.copy(l).addScaledVector(Rx,h);const v=1/(y+C+_);return d=C*v,h=_*v,i.copy(r).addScaledVector(us,d).addScaledVector(fs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},hc={h:0,s:0,l:0};function md(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Lt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=G2(e,1),i=bt(i,0,1),r=bt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=md(d,u,e+1/3),this.g=md(d,u,e),this.b=md(d,u,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=li){function r(u){u!==void 0&&parseFloat(u)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const r=b1[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Tt.workingToColorSpace(Dn.copy(this),e),Math.round(bt(Dn.r*255,0,255))*65536+Math.round(bt(Dn.g*255,0,255))*256+Math.round(bt(Dn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=x<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=li){Tt.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==li?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Va),this.setHSL(Va.h+e,Va.s+i,Va.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Va),e.getHSL(hc);const r=Qf(Va.h,hc.h,i),l=Qf(Va.s,hc.s,i),u=Qf(Va.l,hc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Lt;Lt.NAMES=b1;let iv=0;class Yo extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=bs,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Cd,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(r.blending=this.blending),this.side!==qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rd&&(r.blendSrc=this.blendSrc),this.blendDst!==Cd&&(r.blendDst=this.blendDst),this.blendEquation!==vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==px&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class y1 extends Yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.combine=l1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new le,pc=new yt;let av=0;class bi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:av++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=p0,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(e),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Di(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Ht(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Di(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Di(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Di(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Di(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Ht(i,this.array),r=Ht(r,this.array),l=Ht(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Ht(i,this.array),r=Ht(r,this.array),l=Ht(l,this.array),u=Ht(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p0&&(e.usage=this.usage),e}}class M1 extends bi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class E1 extends bi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class br extends bi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let rv=0;const oi=new un,xd=new Gn,ds=new le,Qn=new qo,Uo=new qo,bn=new le;class ua extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v1(e)?E1:M1)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,r){return oi.makeTranslation(e,i,r),this.applyMatrix4(oi),this}scale(e,i,r){return oi.makeScale(e,i,r),this.applyMatrix4(oi),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new br(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new R0);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Uo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(Qn.min,Uo.min),Qn.expandByPoint(bn),bn.addVectors(Qn.max,Uo.max),Qn.expandByPoint(bn)):(Qn.expandByPoint(Uo.min),Qn.expandByPoint(Uo.max))}Qn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)bn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)bn.fromBufferAttribute(h,p),m&&(ds.fromBufferAttribute(e,p),bn.add(ds)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let ae=0;ae<r.count;ae++)h[ae]=new le,m[ae]=new le;const p=new le,x=new le,g=new le,_=new yt,M=new yt,A=new yt,C=new le,y=new le;function v(ae,N,w){p.fromBufferAttribute(r,ae),x.fromBufferAttribute(r,N),g.fromBufferAttribute(r,w),_.fromBufferAttribute(u,ae),M.fromBufferAttribute(u,N),A.fromBufferAttribute(u,w),x.sub(p),g.sub(p),M.sub(_),A.sub(_);const j=1/(M.x*A.y-A.x*M.y);isFinite(j)&&(C.copy(x).multiplyScalar(A.y).addScaledVector(g,-M.y).multiplyScalar(j),y.copy(g).multiplyScalar(M.x).addScaledVector(x,-A.x).multiplyScalar(j),h[ae].add(C),h[N].add(C),h[w].add(C),m[ae].add(y),m[N].add(y),m[w].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let ae=0,N=z.length;ae<N;++ae){const w=z[ae],j=w.start,te=w.count;for(let ce=j,ge=j+te;ce<ge;ce+=3)v(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const L=new le,F=new le,H=new le,O=new le;function G(ae){H.fromBufferAttribute(l,ae),O.copy(H);const N=h[ae];L.copy(N),L.sub(H.multiplyScalar(H.dot(N))).normalize(),F.crossVectors(O,N);const j=F.dot(m[ae])<0?-1:1;d.setXYZW(ae,L.x,L.y,L.z,j)}for(let ae=0,N=z.length;ae<N;++ae){const w=z[ae],j=w.start,te=w.count;for(let ce=j,ge=j+te;ce<ge;ce+=3)G(e.getX(ce+0)),G(e.getX(ce+1)),G(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new le,u=new le,d=new le,h=new le,m=new le,p=new le,x=new le,g=new le;if(e)for(let _=0,M=e.count;_<M;_+=3){const A=e.getX(_+0),C=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),x.subVectors(d,u),g.subVectors(l,u),x.cross(g),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),h.add(x),m.add(x),p.add(x),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),x.subVectors(d,u),g.subVectors(l,u),x.cross(g),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,g=h.normalized,_=new p.constructor(m.length*x);let M=0,A=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*x;for(let v=0;v<x;v++)_[A++]=p[M++]}return new bi(_,x,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ua,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,g=p.length;x<g;x++){const _=p[x],M=e(_,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,_=p.length;g<_;g++){const M=p[g];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=e.morphAttributes;for(const p in u){const x=[],g=u[p];for(let _=0,M=g.length;_<M;_++)x.push(g[_].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cx=new un,hr=new K2,mc=new R0,wx=new le,xc=new le,gc=new le,vc=new le,gd=new le,_c=new le,Dx=new le,Sc=new le;class Ya extends Gn{constructor(e=new ua,i=new y1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){_c.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],g=u[m];x!==0&&(gd.fromBufferAttribute(g,e),d?_c.addScaledVector(gd,x):_c.addScaledVector(gd.sub(i),x))}i.add(_c)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(u),hr.copy(e.ray).recast(e.near),!(mc.containsPoint(hr.origin)===!1&&(hr.intersectSphere(mc,wx)===null||hr.origin.distanceToSquared(wx)>(e.far-e.near)**2))&&(Cx.copy(u).invert(),hr.copy(e.ray).applyMatrix4(Cx),!(r.boundingBox!==null&&hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,hr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,g=u.attributes.normal,_=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=_.length;A<C;A++){const y=_[A],v=d[y.materialIndex],z=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let F=z,H=L;F<H;F+=3){const O=h.getX(F),G=h.getX(F+1),ae=h.getX(F+2);l=bc(this,v,e,r,p,x,g,O,G,ae),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=A,v=C;y<v;y+=3){const z=h.getX(y),L=h.getX(y+1),F=h.getX(y+2);l=bc(this,d,e,r,p,x,g,z,L,F),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=_.length;A<C;A++){const y=_[A],v=d[y.materialIndex],z=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let F=z,H=L;F<H;F+=3){const O=F,G=F+1,ae=F+2;l=bc(this,v,e,r,p,x,g,O,G,ae),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=A,v=C;y<v;y+=3){const z=y,L=y+1,F=y+2;l=bc(this,d,e,r,p,x,g,z,L,F),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function sv(o,e,i,r,l,u,d,h){let m;if(e.side===Vn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===qa,h),m===null)return null;Sc.copy(h),Sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:o}}function bc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,xc),o.getVertexPosition(m,gc),o.getVertexPosition(p,vc);const x=sv(o,e,i,r,xc,gc,vc,Dx);if(x){const g=new le;ui.getBarycoord(Dx,xc,gc,vc,g),l&&(x.uv=ui.getInterpolatedAttribute(l,h,m,p,g,new yt)),u&&(x.uv1=ui.getInterpolatedAttribute(u,h,m,p,g,new yt)),d&&(x.normal=ui.getInterpolatedAttribute(d,h,m,p,g,new le),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new le,materialIndex:0};ui.getNormal(xc,gc,vc,_.normal),x.face=_,x.barycoord=g}return x}class Zo extends ua{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],x=[],g=[];let _=0,M=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new br(p,3)),this.setAttribute("normal",new br(x,3)),this.setAttribute("uv",new br(g,2));function A(C,y,v,z,L,F,H,O,G,ae,N){const w=F/G,j=H/ae,te=F/2,ce=H/2,ge=O/2,ue=G+1,B=ae+1;let Z=0,Y=0;const _e=new le;for(let D=0;D<B;D++){const ee=D*j-ce;for(let Se=0;Se<ue;Se++){const ye=Se*w-te;_e[C]=ye*z,_e[y]=ee*L,_e[v]=ge,p.push(_e.x,_e.y,_e.z),_e[C]=0,_e[y]=0,_e[v]=O>0?1:-1,x.push(_e.x,_e.y,_e.z),g.push(Se/G),g.push(1-D/ae),Z+=1}}for(let D=0;D<ae;D++)for(let ee=0;ee<G;ee++){const Se=_+ee+ue*D,ye=_+ee+ue*(D+1),De=_+(ee+1)+ue*(D+1),Ve=_+(ee+1)+ue*D;m.push(Se,ye,Ve),m.push(ye,De,Ve),Y+=6}h.addGroup(M,Y,N),M+=Y,_+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function zn(o){const e={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)e[l]=r[l]}return e}function ov(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function T1(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const lv={clone:Rs,merge:zn};var cv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ca extends Yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cv,this.fragmentShader=uv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class A1 extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new le,Nx=new yt,Ux=new yt;class ci extends A1{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=m0*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return m0*2*Math.atan(Math.tan(Kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z)}getViewSize(e,i){return this.getViewBounds(e,Nx,Ux),i.subVectors(Ux,Nx)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Kf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const hs=-90,ps=1;class fv extends Gn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(hs,ps,e,i);l.layers=this.layers,this.add(l);const u=new ci(hs,ps,e,i);u.layers=this.layers,this.add(u);const d=new ci(hs,ps,e,i);d.layers=this.layers,this.add(d);const h=new ci(hs,ps,e,i);h.layers=this.layers,this.add(h);const m=new ci(hs,ps,e,i);m.layers=this.layers,this.add(m);const p=new ci(hs,ps,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Oc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,x]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(g,_,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class R1 extends Nn{constructor(e=[],i=Es,r,l,u,d,h,m,p,x){super(e,i,r,l,u,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dv extends Mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new R1(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Zo(5,5,5),u=new ca({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:ra});u.uniforms.tEquirect.value=i;const d=new Ya(l,u),h=i.minFilter;return i.minFilter===Sr&&(i.minFilter=fi),new fv(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class Bo extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hv={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=x.position.distanceTo(g.position),M=.02,A=.005;p.inputState.pinching&&_>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(hv)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Bo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class pv extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new la,this.environmentIntensity=1,this.environmentRotation=new la,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class mv{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=p0,this.updateRanges=[],this.version=0,this.uuid=Wa()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new le;class zc{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyMatrix4(e),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyNormalMatrix(e),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.transformDirection(e),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=Di(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Ht(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=Ht(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Di(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Di(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Di(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Di(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ht(i,this.array),r=Ht(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ht(i,this.array),r=Ht(r,this.array),l=Ht(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ht(i,this.array),r=Ht(r,this.array),l=Ht(l,this.array),u=Ht(u,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=u,this}clone(e){if(e===void 0){Pc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new bi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class C1 extends Yo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ms;const Lo=new le,xs=new le,gs=new le,vs=new yt,Oo=new yt,w1=new un,yc=new le,Po=new le,Mc=new le,Lx=new yt,_d=new yt,Ox=new yt;class xv extends Gn{constructor(e=new C1){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new ua;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new mv(i,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new zc(r,3,0,!1)),ms.setAttribute("uv",new zc(r,2,3,!1))}this.geometry=ms,this.material=e,this.center=new yt(.5,.5),this.count=1}raycast(e,i){e.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),w1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-gs.z);const r=this.material.rotation;let l,u;r!==0&&(u=Math.cos(r),l=Math.sin(r));const d=this.center;Ec(yc.set(-.5,-.5,0),gs,d,xs,l,u),Ec(Po.set(.5,-.5,0),gs,d,xs,l,u),Ec(Mc.set(.5,.5,0),gs,d,xs,l,u),Lx.set(0,0),_d.set(1,0),Ox.set(1,1);let h=e.ray.intersectTriangle(yc,Po,Mc,!1,Lo);if(h===null&&(Ec(Po.set(-.5,.5,0),gs,d,xs,l,u),_d.set(0,1),h=e.ray.intersectTriangle(yc,Mc,Po,!1,Lo),h===null))return;const m=e.ray.origin.distanceTo(Lo);m<e.near||m>e.far||i.push({distance:m,point:Lo.clone(),uv:ui.getInterpolation(Lo,yc,Po,Mc,Lx,_d,Ox,new yt),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ec(o,e,i,r,l,u){vs.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Oo.x=u*vs.x-l*vs.y,Oo.y=l*vs.x+u*vs.y):Oo.copy(vs),o.copy(e),o.x+=Oo.x,o.y+=Oo.y,o.applyMatrix4(w1)}class gv extends Nn{constructor(e=null,i=1,r=1,l,u,d,h,m,p=Jn,x=Jn,g,_){super(null,d,h,m,p,x,l,u,g,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sd=new le,vv=new le,_v=new ft;class gr{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Sd.subVectors(r,i).cross(vv.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Sd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||_v.getNormalMatrix(e),l=this.coplanarPoint(Sd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new R0,Sv=new yt(.5,.5),Tc=new le;class D1{constructor(e=new gr,i=new gr,r=new gr,l=new gr,u=new gr,d=new gr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ni,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],x=u[4],g=u[5],_=u[6],M=u[7],A=u[8],C=u[9],y=u[10],v=u[11],z=u[12],L=u[13],F=u[14],H=u[15];if(l[0].setComponents(p-d,M-x,v-A,H-z).normalize(),l[1].setComponents(p+d,M+x,v+A,H+z).normalize(),l[2].setComponents(p+h,M+g,v+C,H+L).normalize(),l[3].setComponents(p-h,M-g,v-C,H-L).normalize(),r)l[4].setComponents(m,_,y,F).normalize(),l[5].setComponents(p-m,M-_,v-y,H-F).normalize();else if(l[4].setComponents(p-m,M-_,v-y,H-F).normalize(),i===Ni)l[5].setComponents(p+m,M+_,v+y,H+F).normalize();else if(i===Oc)l[5].setComponents(m,_,y,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);const i=Sv.distanceTo(e.center);return pr.radius=.7071067811865476+i,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tc.x=l.normal.x>0?e.max.x:e.min.x,Tc.y=l.normal.y>0?e.max.y:e.min.y,Tc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class N1 extends Nn{constructor(e,i,r=yr,l,u,d,h=Jn,m=Jn,p,x=Go,g=1){if(x!==Go&&x!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:g};super(_,l,u,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new A0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class U1 extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fc extends ua{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,g=e/h,_=i/m,M=[],A=[],C=[],y=[];for(let v=0;v<x;v++){const z=v*_-d;for(let L=0;L<p;L++){const F=L*g-u;A.push(F,-z,0),C.push(0,0,1),y.push(L/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<h;z++){const L=z+p*v,F=z+p*(v+1),H=z+1+p*(v+1),O=z+1+p*v;M.push(L,F,O),M.push(F,H,O)}this.setIndex(M),this.setAttribute("position",new br(A,3)),this.setAttribute("normal",new br(C,3)),this.setAttribute("uv",new br(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.width,e.height,e.widthSegments,e.heightSegments)}}class bv extends Yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yv extends Yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bd={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Mv{constructor(e,i,r){const l=this;let u=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(x){h++,u===!1&&l.onStart!==void 0&&l.onStart(x,d,h),u=!0},this.itemEnd=function(x){d++,l.onProgress!==void 0&&l.onProgress(x,d,h),d===h&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,g){return p.push(x,g),this},this.removeHandler=function(x){const g=p.indexOf(x);return g!==-1&&p.splice(g,2),this},this.getHandler=function(x){for(let g=0,_=p.length;g<_;g+=2){const M=p[g],A=p[g+1];if(M.global&&(M.lastIndex=0),M.test(x))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ev=new Mv;class C0{constructor(e){this.manager=e!==void 0?e:Ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}C0.DEFAULT_MATERIAL_NAME="__DEFAULT";const _s=new WeakMap;class Tv extends C0{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,d=bd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(d),u.manager.itemEnd(e)},0);else{let g=_s.get(d);g===void 0&&(g=[],_s.set(d,g)),g.push({onLoad:i,onError:l})}return d}const h=jo("img");function m(){x(),i&&i(this);const g=_s.get(this)||[];for(let _=0;_<g.length;_++){const M=g[_];M.onLoad&&M.onLoad(this)}_s.delete(this),u.manager.itemEnd(e)}function p(g){x(),l&&l(g),bd.remove(`image:${e}`);const _=_s.get(this)||[];for(let M=0;M<_.length;M++){const A=_[M];A.onError&&A.onError(g)}_s.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function x(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),bd.add(`image:${e}`,h),u.manager.itemStart(e),h.src=e,h}}class Av extends C0{constructor(e){super(e)}load(e,i,r,l){const u=new Nn,d=new Tv(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){u.image=h,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class Rv extends A1{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Cv extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Px(o,e,i,r){const l=Dv(r);switch(i){case p1:return o*e;case x1:return o*e/l.components*l.byteLength;case y0:return o*e/l.components*l.byteLength;case M0:return o*e*2/l.components*l.byteLength;case E0:return o*e*2/l.components*l.byteLength;case m1:return o*e*3/l.components*l.byteLength;case Si:return o*e*4/l.components*l.byteLength;case T0:return o*e*4/l.components*l.byteLength;case Cc:case wc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Nc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Vd:case kd:return Math.max(o,16)*Math.max(e,8)/4;case Hd:case Gd:return Math.max(o,8)*Math.max(e,8)/2;case jd:case Xd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Wd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case $d:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case e0:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case t0:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case n0:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case i0:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case a0:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case r0:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case s0:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case o0:case l0:case c0:return Math.ceil(o/4)*Math.ceil(e/4)*16;case u0:case f0:return Math.ceil(o/4)*Math.ceil(e/4)*8;case d0:case h0:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Dv(o){switch(o){case oa:case u1:return{byteLength:1,components:1};case Ho:case f1:case Cs:return{byteLength:2,components:1};case S0:case b0:return{byteLength:2,components:4};case yr:case _0:case aa:return{byteLength:4,components:1};case d1:case h1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:v0}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=v0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function L1(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Nv(o){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,p,x),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const x=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,x);else{g.sort((M,A)=>M.start-A.start);let _=0;for(let M=1;M<g.length;M++){const A=g[_],C=g[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++_,g[_]=C)}g.length=_+1;for(let M=0,A=g.length;M<A;M++){const C=g[M];o.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Uv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,t_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,n_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,i_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l_="gl_FragColor = linearToOutputTexel( gl_FragColor );",c_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,m_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,__=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,S_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,E_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,T_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,D_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,V_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,K_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_S=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ES=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,US=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$S=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ab=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ob=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Uv,alphahash_pars_fragment:Lv,alphamap_fragment:Ov,alphamap_pars_fragment:Pv,alphatest_fragment:zv,alphatest_pars_fragment:Bv,aomap_fragment:Fv,aomap_pars_fragment:Iv,batching_pars_vertex:Hv,batching_vertex:Vv,begin_vertex:Gv,beginnormal_vertex:kv,bsdfs:jv,iridescence_fragment:Xv,bumpmap_pars_fragment:Wv,clipping_planes_fragment:qv,clipping_planes_pars_fragment:Yv,clipping_planes_pars_vertex:Zv,clipping_planes_vertex:Kv,color_fragment:Qv,color_pars_fragment:Jv,color_pars_vertex:$v,color_vertex:e_,common:t_,cube_uv_reflection_fragment:n_,defaultnormal_vertex:i_,displacementmap_pars_vertex:a_,displacementmap_vertex:r_,emissivemap_fragment:s_,emissivemap_pars_fragment:o_,colorspace_fragment:l_,colorspace_pars_fragment:c_,envmap_fragment:u_,envmap_common_pars_fragment:f_,envmap_pars_fragment:d_,envmap_pars_vertex:h_,envmap_physical_pars_fragment:E_,envmap_vertex:p_,fog_vertex:m_,fog_pars_vertex:x_,fog_fragment:g_,fog_pars_fragment:v_,gradientmap_pars_fragment:__,lightmap_pars_fragment:S_,lights_lambert_fragment:b_,lights_lambert_pars_fragment:y_,lights_pars_begin:M_,lights_toon_fragment:T_,lights_toon_pars_fragment:A_,lights_phong_fragment:R_,lights_phong_pars_fragment:C_,lights_physical_fragment:w_,lights_physical_pars_fragment:D_,lights_fragment_begin:N_,lights_fragment_maps:U_,lights_fragment_end:L_,logdepthbuf_fragment:O_,logdepthbuf_pars_fragment:P_,logdepthbuf_pars_vertex:z_,logdepthbuf_vertex:B_,map_fragment:F_,map_pars_fragment:I_,map_particle_fragment:H_,map_particle_pars_fragment:V_,metalnessmap_fragment:G_,metalnessmap_pars_fragment:k_,morphinstance_vertex:j_,morphcolor_vertex:X_,morphnormal_vertex:W_,morphtarget_pars_vertex:q_,morphtarget_vertex:Y_,normal_fragment_begin:Z_,normal_fragment_maps:K_,normal_pars_fragment:Q_,normal_pars_vertex:J_,normal_vertex:$_,normalmap_pars_fragment:eS,clearcoat_normal_fragment_begin:tS,clearcoat_normal_fragment_maps:nS,clearcoat_pars_fragment:iS,iridescence_pars_fragment:aS,opaque_fragment:rS,packing:sS,premultiplied_alpha_fragment:oS,project_vertex:lS,dithering_fragment:cS,dithering_pars_fragment:uS,roughnessmap_fragment:fS,roughnessmap_pars_fragment:dS,shadowmap_pars_fragment:hS,shadowmap_pars_vertex:pS,shadowmap_vertex:mS,shadowmask_pars_fragment:xS,skinbase_vertex:gS,skinning_pars_vertex:vS,skinning_vertex:_S,skinnormal_vertex:SS,specularmap_fragment:bS,specularmap_pars_fragment:yS,tonemapping_fragment:MS,tonemapping_pars_fragment:ES,transmission_fragment:TS,transmission_pars_fragment:AS,uv_pars_fragment:RS,uv_pars_vertex:CS,uv_vertex:wS,worldpos_vertex:DS,background_vert:NS,background_frag:US,backgroundCube_vert:LS,backgroundCube_frag:OS,cube_vert:PS,cube_frag:zS,depth_vert:BS,depth_frag:FS,distanceRGBA_vert:IS,distanceRGBA_frag:HS,equirect_vert:VS,equirect_frag:GS,linedashed_vert:kS,linedashed_frag:jS,meshbasic_vert:XS,meshbasic_frag:WS,meshlambert_vert:qS,meshlambert_frag:YS,meshmatcap_vert:ZS,meshmatcap_frag:KS,meshnormal_vert:QS,meshnormal_frag:JS,meshphong_vert:$S,meshphong_frag:eb,meshphysical_vert:tb,meshphysical_frag:nb,meshtoon_vert:ib,meshtoon_frag:ab,points_vert:rb,points_frag:sb,shadow_vert:ob,shadow_frag:lb,sprite_vert:cb,sprite_frag:ub},Le={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},wi={basic:{uniforms:zn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:zn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Lt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:zn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:zn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:zn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Lt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:zn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:zn([Le.points,Le.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:zn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:zn([Le.common,Le.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:zn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:zn([Le.sprite,Le.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:zn([Le.common,Le.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:zn([Le.lights,Le.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};wi.physical={uniforms:zn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ac={r:0,b:0,g:0},mr=new la,fb=new un;function db(o,e,i,r,l,u,d){const h=new Lt(0);let m=u===!0?0:1,p,x,g=null,_=0,M=null;function A(L){let F=L.isScene===!0?L.background:null;return F&&F.isTexture&&(F=(L.backgroundBlurriness>0?i:e).get(F)),F}function C(L){let F=!1;const H=A(L);H===null?v(h,m):H&&H.isColor&&(v(H,1),F=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,F){const H=A(F);H&&(H.isCubeTexture||H.mapping===Bc)?(x===void 0&&(x=new Ya(new Zo(1,1,1),new ca({name:"BackgroundCubeMaterial",uniforms:Rs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,G,ae){this.matrixWorld.copyPosition(ae.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),mr.copy(F.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),x.material.uniforms.envMap.value=H,x.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(fb.makeRotationFromEuler(mr)),x.material.toneMapped=Tt.getTransfer(H.colorSpace)!==It,(g!==H||_!==H.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,g=H,_=H.version,M=o.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Ya(new Fc(2,2),new ca({name:"BackgroundMaterial",uniforms:Rs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(H.colorSpace)!==It,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||_!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,g=H,_=H.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,F){L.getRGB(Ac,T1(o)),r.buffers.color.setClear(Ac.r,Ac.g,Ac.b,F,d)}function z(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,F=1){h.set(L),m=F,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(h,m)},render:C,addToRenderList:y,dispose:z}}function hb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let u=l,d=!1;function h(w,j,te,ce,ge){let ue=!1;const B=g(ce,te,j);u!==B&&(u=B,p(u.object)),ue=M(w,ce,te,ge),ue&&A(w,ce,te,ge),ge!==null&&e.update(ge,o.ELEMENT_ARRAY_BUFFER),(ue||d)&&(d=!1,F(w,j,te,ce),ge!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ge).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function x(w){return o.deleteVertexArray(w)}function g(w,j,te){const ce=te.wireframe===!0;let ge=r[w.id];ge===void 0&&(ge={},r[w.id]=ge);let ue=ge[j.id];ue===void 0&&(ue={},ge[j.id]=ue);let B=ue[ce];return B===void 0&&(B=_(m()),ue[ce]=B),B}function _(w){const j=[],te=[],ce=[];for(let ge=0;ge<i;ge++)j[ge]=0,te[ge]=0,ce[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:te,attributeDivisors:ce,object:w,attributes:{},index:null}}function M(w,j,te,ce){const ge=u.attributes,ue=j.attributes;let B=0;const Z=te.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const D=ge[Y];let ee=ue[Y];if(ee===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor)),D===void 0||D.attribute!==ee||ee&&D.data!==ee.data)return!0;B++}return u.attributesNum!==B||u.index!==ce}function A(w,j,te,ce){const ge={},ue=j.attributes;let B=0;const Z=te.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let D=ue[Y];D===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(D=w.instanceColor));const ee={};ee.attribute=D,D&&D.data&&(ee.data=D.data),ge[Y]=ee,B++}u.attributes=ge,u.attributesNum=B,u.index=ce}function C(){const w=u.newAttributes;for(let j=0,te=w.length;j<te;j++)w[j]=0}function y(w){v(w,0)}function v(w,j){const te=u.newAttributes,ce=u.enabledAttributes,ge=u.attributeDivisors;te[w]=1,ce[w]===0&&(o.enableVertexAttribArray(w),ce[w]=1),ge[w]!==j&&(o.vertexAttribDivisor(w,j),ge[w]=j)}function z(){const w=u.newAttributes,j=u.enabledAttributes;for(let te=0,ce=j.length;te<ce;te++)j[te]!==w[te]&&(o.disableVertexAttribArray(te),j[te]=0)}function L(w,j,te,ce,ge,ue,B){B===!0?o.vertexAttribIPointer(w,j,te,ge,ue):o.vertexAttribPointer(w,j,te,ce,ge,ue)}function F(w,j,te,ce){C();const ge=ce.attributes,ue=te.getAttributes(),B=j.defaultAttributeValues;for(const Z in ue){const Y=ue[Z];if(Y.location>=0){let _e=ge[Z];if(_e===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor)),_e!==void 0){const D=_e.normalized,ee=_e.itemSize,Se=e.get(_e);if(Se===void 0)continue;const ye=Se.buffer,De=Se.type,Ve=Se.bytesPerElement,$=De===o.INT||De===o.UNSIGNED_INT||_e.gpuType===_0;if(_e.isInterleavedBufferAttribute){const me=_e.data,Ee=me.stride,Je=_e.offset;if(me.isInstancedInterleavedBuffer){for(let ke=0;ke<Y.locationSize;ke++)v(Y.location+ke,me.meshPerAttribute);w.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ke=0;ke<Y.locationSize;ke++)y(Y.location+ke);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let ke=0;ke<Y.locationSize;ke++)L(Y.location+ke,ee/Y.locationSize,De,D,Ee*Ve,(Je+ee/Y.locationSize*ke)*Ve,$)}else{if(_e.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)v(Y.location+me,_e.meshPerAttribute);w.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let me=0;me<Y.locationSize;me++)y(Y.location+me);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let me=0;me<Y.locationSize;me++)L(Y.location+me,ee/Y.locationSize,De,D,ee*Ve,ee/Y.locationSize*me*Ve,$)}}else if(B!==void 0){const D=B[Z];if(D!==void 0)switch(D.length){case 2:o.vertexAttrib2fv(Y.location,D);break;case 3:o.vertexAttrib3fv(Y.location,D);break;case 4:o.vertexAttrib4fv(Y.location,D);break;default:o.vertexAttrib1fv(Y.location,D)}}}}z()}function H(){ae();for(const w in r){const j=r[w];for(const te in j){const ce=j[te];for(const ge in ce)x(ce[ge].object),delete ce[ge];delete j[te]}delete r[w]}}function O(w){if(r[w.id]===void 0)return;const j=r[w.id];for(const te in j){const ce=j[te];for(const ge in ce)x(ce[ge].object),delete ce[ge];delete j[te]}delete r[w.id]}function G(w){for(const j in r){const te=r[j];if(te[w.id]===void 0)continue;const ce=te[w.id];for(const ge in ce)x(ce[ge].object),delete ce[ge];delete te[w.id]}}function ae(){N(),d=!0,u!==l&&(u=l,p(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ae,resetDefaultState:N,dispose:H,releaseStatesOfGeometry:O,releaseStatesOfProgram:G,initAttributes:C,enableAttribute:y,disableUnusedAttributes:z}}function pb(o,e,i){let r;function l(p){r=p}function u(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,g){g!==0&&(o.drawArraysInstanced(r,p,x,g),i.update(x,r,g))}function h(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,g);let M=0;for(let A=0;A<g;A++)M+=x[A];i.update(M,r,1)}function m(p,x,g,_){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],x[A],_[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,x,0,_,0,g);let A=0;for(let C=0;C<g;C++)A+=x[C]*_[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function mb(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(G){return!(G!==Si&&r.convert(G)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(G){const ae=G===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==oa&&r.convert(G)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==aa&&!ae)}function m(G){if(G==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ot("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=A>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:F,vertexTextures:H,maxSamples:O}}function xb(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new gr,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const M=g.length!==0||_||r!==0||l;return l=_,r=g.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,_){i=x(g,_,0)},this.setState=function(g,_,M){const A=g.clippingPlanes,C=g.clipIntersection,y=g.clipShadows,v=o.get(g);if(!l||A===null||A.length===0||u&&!y)u?x(null):p();else{const z=u?0:r,L=z*4;let F=v.clippingState||null;m.value=F,F=x(A,_,L,M);for(let H=0;H!==L;++H)F[H]=i[H];v.clippingState=F,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(g,_,M,A){const C=g!==null?g.length:0;let y=null;if(C!==0){if(y=m.value,A!==!0||y===null){const v=M+C*4,z=_.matrixWorldInverse;h.getNormalMatrix(z),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,F=M;L!==C;++L,F+=4)d.copy(g[L]).applyMatrix4(z,h),d.normal.toArray(y,F),y[F+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function gb(o){let e=new WeakMap;function i(d,h){return h===zd?d.mapping=Es:h===Bd&&(d.mapping=Ts),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===zd||h===Bd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new dv(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ja=4,zx=[.125,.215,.35,.446,.526,.582],_r=20,vb=512,zo=new Rv,Bx=new Lt;let yd=null,Md=0,Ed=0,Td=!1;const _b=new le;class Fx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=_b}=u;yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Md,Ed),this._renderer.xr.enabled=Td,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:Cs,format:Si,colorSpace:As,depthBuffer:!1},l=Ix(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ix(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Sb(u)),this._blurMaterial=yb(u,e,i)}return l}_compileMaterial(e){const i=new Ya(new ua,e);this._renderer.compile(i,zo)}_sceneToCubeUV(e,i,r,l,u){const m=new ci(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,M=g.toneMapping;g.getClearColor(Bx),g.toneMapping=Xa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ya(new Zo,new y1({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const z=e.background;z?z.isColor&&(y.color.copy(z),e.background=null,v=!0):(y.color.copy(Bx),v=!0);for(let L=0;L<6;L++){const F=L%3;F===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[L],u.y,u.z)):F===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[L]));const H=this._cubeSize;Ss(l,F*H,L>2?H:0,H,H),g.setRenderTarget(l),v&&g.render(C,m),g.render(e,m)}g.toneMapping=M,g.autoClear=_,e.background=z}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Es||e.mapping===Ts;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Ss(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,zo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget;if(this._ggxMaterial===null){const z=3*Math.max(this._cubeSize,16),L=4*this._cubeSize;this._ggxMaterial=bb(this._lodMax,z,L)}const d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),_=.05+p*.95,M=g*_,{_lodMax:A}=this,C=this._sizeLods[r],y=3*C*(r>A-ja?r-A+ja:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=A-i,Ss(u,y,v,3*C,2*C),l.setRenderTarget(u),l.render(h,zo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,Ss(e,y,v,3*C,2*C),l.setRenderTarget(e),l.render(h,zo)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const _=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*_r-1),C=u/A,y=isFinite(u)?1+Math.floor(x*C):_r;y>_r&&ot(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_r}`);const v=[];let z=0;for(let G=0;G<_r;++G){const ae=G/C,N=Math.exp(-ae*ae/2);v.push(N),G===0?z+=N:G<y&&(z+=2*N)}for(let G=0;G<v.length;G++)v[G]=v[G]/z;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=d==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:L}=this;_.dTheta.value=A,_.mipInt.value=L-r;const F=this._sizeLods[l],H=3*F*(l>L-ja?l-L+ja:0),O=4*(this._cubeSize-F);Ss(i,H,O,3*F,2*F),m.setRenderTarget(i),m.render(g,zo)}}function Sb(o){const e=[],i=[],r=[];let l=o;const u=o-ja+1+zx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-ja?m=zx[d-o+ja-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,_=[x,x,g,x,g,g,x,x,g,g,x,g],M=6,A=6,C=3,y=2,v=1,z=new Float32Array(C*A*M),L=new Float32Array(y*A*M),F=new Float32Array(v*A*M);for(let O=0;O<M;O++){const G=O%3*2/3-1,ae=O>2?0:-1,N=[G,ae,0,G+2/3,ae,0,G+2/3,ae+1,0,G,ae,0,G+2/3,ae+1,0,G,ae+1,0];z.set(N,C*A*O),L.set(_,y*A*O);const w=[O,O,O,O,O,O];F.set(w,v*A*O)}const H=new ua;H.setAttribute("position",new bi(z,C)),H.setAttribute("uv",new bi(L,y)),H.setAttribute("faceIndex",new bi(F,v)),r.push(new Ya(H,null)),l>ja&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Ix(o,e,i){const r=new Mr(o,e,i);return r.texture.mapping=Bc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ss(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function bb(o,e,i){return new ca({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ra,depthTest:!1,depthWrite:!1})}function yb(o,e,i){const r=new Float32Array(_r),l=new le(0,1,0);return new ca({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ra,depthTest:!1,depthWrite:!1})}function Hx(){return new ca({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ra,depthTest:!1,depthWrite:!1})}function Vx(){return new ca({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ra,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mb(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===zd||m===Bd,x=m===Es||m===Ts;if(p||x){let g=e.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new Fx(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new Fx(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Eb(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Xo("WebGLRenderer: "+r+" extension not supported."),l}}}function Tb(o,e,i,r){const l={},u=new WeakMap;function d(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const A in _.attributes)e.remove(_.attributes[A]);_.removeEventListener("dispose",d),delete l[_.id];const M=u.get(_);M&&(e.remove(M),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(g,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(g){const _=g.attributes;for(const M in _)e.update(_[M],o.ARRAY_BUFFER)}function p(g){const _=[],M=g.index,A=g.attributes.position;let C=0;if(M!==null){const z=M.array;C=M.version;for(let L=0,F=z.length;L<F;L+=3){const H=z[L+0],O=z[L+1],G=z[L+2];_.push(H,O,O,G,G,H)}}else if(A!==void 0){const z=A.array;C=A.version;for(let L=0,F=z.length/3-1;L<F;L+=3){const H=L+0,O=L+1,G=L+2;_.push(H,O,O,G,G,H)}}else return;const y=new(v1(_)?E1:M1)(_,1);y.version=C;const v=u.get(g);v&&e.remove(v),u.set(g,y)}function x(g){const _=u.get(g);if(_){const M=g.index;M!==null&&_.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function Ab(o,e,i){let r;function l(_){r=_}let u,d;function h(_){u=_.type,d=_.bytesPerElement}function m(_,M){o.drawElements(r,M,u,_*d),i.update(M,r,1)}function p(_,M,A){A!==0&&(o.drawElementsInstanced(r,M,u,_*d,A),i.update(M,r,A))}function x(_,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,_,0,A);let y=0;for(let v=0;v<A;v++)y+=M[v];i.update(y,r,1)}function g(_,M,A,C){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)p(_[v]/d,M[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,_,0,C,0,A);let v=0;for(let z=0;z<A;z++)v+=M[z]*C[z];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function Rb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Qt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Cb(o,e,i){const r=new WeakMap,l=new an;function u(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let _=r.get(h);if(_===void 0||_.count!==g){let w=function(){ae.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var M=w;_!==void 0&&_.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let F=0;A===!0&&(F=1),C===!0&&(F=2),y===!0&&(F=3);let H=h.attributes.position.count*F,O=1;H>e.maxTextureSize&&(O=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const G=new Float32Array(H*O*4*g),ae=new _1(G,H,O,g);ae.type=aa,ae.needsUpdate=!0;const N=F*4;for(let j=0;j<g;j++){const te=v[j],ce=z[j],ge=L[j],ue=H*O*4*j;for(let B=0;B<te.count;B++){const Z=B*N;A===!0&&(l.fromBufferAttribute(te,B),G[ue+Z+0]=l.x,G[ue+Z+1]=l.y,G[ue+Z+2]=l.z,G[ue+Z+3]=0),C===!0&&(l.fromBufferAttribute(ce,B),G[ue+Z+4]=l.x,G[ue+Z+5]=l.y,G[ue+Z+6]=l.z,G[ue+Z+7]=0),y===!0&&(l.fromBufferAttribute(ge,B),G[ue+Z+8]=l.x,G[ue+Z+9]=l.y,G[ue+Z+10]=l.z,G[ue+Z+11]=ge.itemSize===4?l.w:1)}}_={count:g,texture:ae,size:new yt(H,O)},r.set(h,_),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function wb(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const O1=new Nn,Gx=new N1(1,1),P1=new _1,z1=new Y2,B1=new R1,kx=[],jx=[],Xx=new Float32Array(16),Wx=new Float32Array(9),qx=new Float32Array(4);function Ds(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=kx[l];if(u===void 0&&(u=new Float32Array(l),kx[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Hc(o,e){let i=jx[e];i===void 0&&(i=new Int32Array(e),jx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function Db(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function Nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function Ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function Lb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function Ob(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;qx.set(r),o.uniformMatrix2fv(this.addr,!1,qx),mn(i,r)}}function Pb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;Wx.set(r),o.uniformMatrix3fv(this.addr,!1,Wx),mn(i,r)}}function zb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;Xx.set(r),o.uniformMatrix4fv(this.addr,!1,Xx),mn(i,r)}}function Bb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function Ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function Hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function Vb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Gb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function kb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function jb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function Xb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Gx.compareFunction=g1,u=Gx):u=O1,i.setTexture2D(e||u,l)}function Wb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||z1,l)}function qb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||B1,l)}function Yb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||P1,l)}function Zb(o){switch(o){case 5126:return Db;case 35664:return Nb;case 35665:return Ub;case 35666:return Lb;case 35674:return Ob;case 35675:return Pb;case 35676:return zb;case 5124:case 35670:return Bb;case 35667:case 35671:return Fb;case 35668:case 35672:return Ib;case 35669:case 35673:return Hb;case 5125:return Vb;case 36294:return Gb;case 36295:return kb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return Yb}}function Kb(o,e){o.uniform1fv(this.addr,e)}function Qb(o,e){const i=Ds(e,this.size,2);o.uniform2fv(this.addr,i)}function Jb(o,e){const i=Ds(e,this.size,3);o.uniform3fv(this.addr,i)}function $b(o,e){const i=Ds(e,this.size,4);o.uniform4fv(this.addr,i)}function ey(o,e){const i=Ds(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ty(o,e){const i=Ds(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ny(o,e){const i=Ds(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function iy(o,e){o.uniform1iv(this.addr,e)}function ay(o,e){o.uniform2iv(this.addr,e)}function ry(o,e){o.uniform3iv(this.addr,e)}function sy(o,e){o.uniform4iv(this.addr,e)}function oy(o,e){o.uniform1uiv(this.addr,e)}function ly(o,e){o.uniform2uiv(this.addr,e)}function cy(o,e){o.uniform3uiv(this.addr,e)}function uy(o,e){o.uniform4uiv(this.addr,e)}function fy(o,e,i){const r=this.cache,l=e.length,u=Hc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||O1,u[d])}function dy(o,e,i){const r=this.cache,l=e.length,u=Hc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||z1,u[d])}function hy(o,e,i){const r=this.cache,l=e.length,u=Hc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||B1,u[d])}function py(o,e,i){const r=this.cache,l=e.length,u=Hc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||P1,u[d])}function my(o){switch(o){case 5126:return Kb;case 35664:return Qb;case 35665:return Jb;case 35666:return $b;case 35674:return ey;case 35675:return ty;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return ay;case 35668:case 35672:return ry;case 35669:case 35673:return sy;case 5125:return oy;case 36294:return ly;case 36295:return cy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return py}}class xy{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Zb(i.type)}}class gy{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=my(i.type)}}class vy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function Yx(o,e){o.seq.push(e),o.map[e.id]=e}function _y(o,e,i){const r=o.name,l=r.length;for(Ad.lastIndex=0;;){const u=Ad.exec(r),d=Ad.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Yx(i,p===void 0?new xy(h,o,e):new gy(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new vy(h),Yx(i,g)),i=g}}}class Uc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);_y(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function Zx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Sy=37297;let by=0;function yy(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Kx=new ft;function My(o){Tt._getMatrix(Kx,Tt.workingColorSpace,o);const e=`mat3( ${Kx.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Lc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Qx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+yy(o.getShaderSource(e),h)}else return u}function Ey(o,e){const i=My(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Ty(o,e){let i;switch(e){case b2:i="Linear";break;case y2:i="Reinhard";break;case M2:i="Cineon";break;case E2:i="ACESFilmic";break;case A2:i="AgX";break;case R2:i="Neutral";break;case T2:i="Custom";break;default:ot("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rc=new le;function Ay(){Tt.getLuminanceCoefficients(Rc);const o=Rc.x.toFixed(4),e=Rc.y.toFixed(4),i=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function Cy(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function wy(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Fo(o){return o!==""}function Jx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $x(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function x0(o){return o.replace(Dy,Uy)}const Ny=new Map;function Uy(o,e){let i=dt[e];if(i===void 0){const r=Ny.get(e);if(r!==void 0)i=dt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return x0(i)}const Ly=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e1(o){return o.replace(Ly,Oy)}function Oy(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function t1(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Py(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===o1?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===e2?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(e="SHADOWMAP_TYPE_VSM"),e}function zy(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function By(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function Fy(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case l1:e="ENVMAP_BLENDING_MULTIPLY";break;case _2:e="ENVMAP_BLENDING_MIX";break;case S2:e="ENVMAP_BLENDING_ADD";break}return e}function Iy(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Hy(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=Py(i),p=zy(i),x=By(i),g=Fy(i),_=Iy(i),M=Ry(i),A=Cy(u),C=l.createProgram();let y,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Fo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Fo).join(`
`),v.length>0&&(v+=`
`)):(y=[t1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),v=[t1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?dt.tonemapping_pars_fragment:"",i.toneMapping!==Xa?Ty("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Ey("linearToOutputTexel",i.outputColorSpace),Ay(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Fo).join(`
`)),d=x0(d),d=Jx(d,i),d=$x(d,i),h=x0(h),h=Jx(h,i),h=$x(h,i),d=e1(d),h=e1(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===mx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===mx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=z+y+d,F=z+v+h,H=Zx(l,l.VERTEX_SHADER,L),O=Zx(l,l.FRAGMENT_SHADER,F);l.attachShader(C,H),l.attachShader(C,O),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function G(j){if(o.debug.checkShaderErrors){const te=l.getProgramInfoLog(C)||"",ce=l.getShaderInfoLog(H)||"",ge=l.getShaderInfoLog(O)||"",ue=te.trim(),B=ce.trim(),Z=ge.trim();let Y=!0,_e=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,H,O);else{const D=Qx(l,H,"vertex"),ee=Qx(l,O,"fragment");Qt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ue+`
`+D+`
`+ee)}else ue!==""?ot("WebGLProgram: Program Info Log:",ue):(B===""||Z==="")&&(_e=!1);_e&&(j.diagnostics={runnable:Y,programLog:ue,vertexShader:{log:B,prefix:y},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(H),l.deleteShader(O),ae=new Uc(l,C),N=wy(l,C)}let ae;this.getUniforms=function(){return ae===void 0&&G(this),ae};let N;this.getAttributes=function(){return N===void 0&&G(this),N};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,Sy)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=by++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=O,this}let Vy=0;class Gy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new ky(e),i.set(e,r)),r}}class ky{constructor(e){this.id=Vy++,this.code=e,this.usedTimes=0}}function jy(o,e,i,r,l,u,d){const h=new S1,m=new Gy,p=new Set,x=[],g=l.logarithmicDepthBuffer,_=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(N){return p.add(N),N===0?"uv":`uv${N}`}function y(N,w,j,te,ce){const ge=te.fog,ue=ce.geometry,B=N.isMeshStandardMaterial?te.environment:null,Z=(N.isMeshStandardMaterial?i:e).get(N.envMap||B),Y=Z&&Z.mapping===Bc?Z.image.height:null,_e=A[N.type];N.precision!==null&&(M=l.getMaxPrecision(N.precision),M!==N.precision&&ot("WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const D=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,ee=D!==void 0?D.length:0;let Se=0;ue.morphAttributes.position!==void 0&&(Se=1),ue.morphAttributes.normal!==void 0&&(Se=2),ue.morphAttributes.color!==void 0&&(Se=3);let ye,De,Ve,$;if(_e){const At=wi[_e];ye=At.vertexShader,De=At.fragmentShader}else ye=N.vertexShader,De=N.fragmentShader,m.update(N),Ve=m.getVertexShaderID(N),$=m.getFragmentShaderID(N);const me=o.getRenderTarget(),Ee=o.state.buffers.depth.getReversed(),Je=ce.isInstancedMesh===!0,ke=ce.isBatchedMesh===!0,lt=!!N.map,Jt=!!N.matcap,ct=!!Z,Ot=!!N.aoMap,I=!!N.lightMap,pt=!!N.bumpMap,rt=!!N.normalMap,Pt=!!N.displacementMap,He=!!N.emissiveMap,kt=!!N.metalnessMap,je=!!N.roughnessMap,st=N.anisotropy>0,U=N.clearcoat>0,E=N.dispersion>0,J=N.iridescence>0,de=N.sheen>0,pe=N.transmission>0,oe=st&&!!N.anisotropyMap,Pe=U&&!!N.clearcoatMap,Ue=U&&!!N.clearcoatNormalMap,Qe=U&&!!N.clearcoatRoughnessMap,Ge=J&&!!N.iridescenceMap,be=J&&!!N.iridescenceThicknessMap,Ae=de&&!!N.sheenColorMap,qe=de&&!!N.sheenRoughnessMap,Ke=!!N.specularMap,Oe=!!N.specularColorMap,nt=!!N.specularIntensityMap,V=pe&&!!N.transmissionMap,Ne=pe&&!!N.thicknessMap,Ce=!!N.gradientMap,Re=!!N.alphaMap,Me=N.alphaTest>0,ve=!!N.alphaHash,Fe=!!N.extensions;let it=Xa;N.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(it=o.toneMapping);const wt={shaderID:_e,shaderType:N.type,shaderName:N.name,vertexShader:ye,fragmentShader:De,defines:N.defines,customVertexShaderID:Ve,customFragmentShaderID:$,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:ke,batchingColor:ke&&ce._colorsTexture!==null,instancing:Je,instancingColor:Je&&ce.instanceColor!==null,instancingMorph:Je&&ce.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:me===null?o.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:As,alphaToCoverage:!!N.alphaToCoverage,map:lt,matcap:Jt,envMap:ct,envMapMode:ct&&Z.mapping,envMapCubeUVHeight:Y,aoMap:Ot,lightMap:I,bumpMap:pt,normalMap:rt,displacementMap:_&&Pt,emissiveMap:He,normalMapObjectSpace:rt&&N.normalMapType===U2,normalMapTangentSpace:rt&&N.normalMapType===N2,metalnessMap:kt,roughnessMap:je,anisotropy:st,anisotropyMap:oe,clearcoat:U,clearcoatMap:Pe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Qe,dispersion:E,iridescence:J,iridescenceMap:Ge,iridescenceThicknessMap:be,sheen:de,sheenColorMap:Ae,sheenRoughnessMap:qe,specularMap:Ke,specularColorMap:Oe,specularIntensityMap:nt,transmission:pe,transmissionMap:V,thicknessMap:Ne,gradientMap:Ce,opaque:N.transparent===!1&&N.blending===bs&&N.alphaToCoverage===!1,alphaMap:Re,alphaTest:Me,alphaHash:ve,combine:N.combine,mapUv:lt&&C(N.map.channel),aoMapUv:Ot&&C(N.aoMap.channel),lightMapUv:I&&C(N.lightMap.channel),bumpMapUv:pt&&C(N.bumpMap.channel),normalMapUv:rt&&C(N.normalMap.channel),displacementMapUv:Pt&&C(N.displacementMap.channel),emissiveMapUv:He&&C(N.emissiveMap.channel),metalnessMapUv:kt&&C(N.metalnessMap.channel),roughnessMapUv:je&&C(N.roughnessMap.channel),anisotropyMapUv:oe&&C(N.anisotropyMap.channel),clearcoatMapUv:Pe&&C(N.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&C(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&C(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&C(N.iridescenceMap.channel),iridescenceThicknessMapUv:be&&C(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&C(N.sheenColorMap.channel),sheenRoughnessMapUv:qe&&C(N.sheenRoughnessMap.channel),specularMapUv:Ke&&C(N.specularMap.channel),specularColorMapUv:Oe&&C(N.specularColorMap.channel),specularIntensityMapUv:nt&&C(N.specularIntensityMap.channel),transmissionMapUv:V&&C(N.transmissionMap.channel),thicknessMapUv:Ne&&C(N.thicknessMap.channel),alphaMapUv:Re&&C(N.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(rt||st),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!ue.attributes.uv&&(lt||Re),fog:!!ge,useFog:N.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ee,skinning:ce.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:lt&&N.map.isVideoTexture===!0&&Tt.getTransfer(N.map.colorSpace)===It,decodeVideoTextureEmissive:He&&N.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(N.emissiveMap.colorSpace)===It,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===na,flipSided:N.side===Vn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:Fe&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&N.extensions.multiDraw===!0||ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return wt.vertexUv1s=p.has(1),wt.vertexUv2s=p.has(2),wt.vertexUv3s=p.has(3),p.clear(),wt}function v(N){const w=[];if(N.shaderID?w.push(N.shaderID):(w.push(N.customVertexShaderID),w.push(N.customFragmentShaderID)),N.defines!==void 0)for(const j in N.defines)w.push(j),w.push(N.defines[j]);return N.isRawShaderMaterial===!1&&(z(w,N),L(w,N),w.push(o.outputColorSpace)),w.push(N.customProgramCacheKey),w.join()}function z(N,w){N.push(w.precision),N.push(w.outputColorSpace),N.push(w.envMapMode),N.push(w.envMapCubeUVHeight),N.push(w.mapUv),N.push(w.alphaMapUv),N.push(w.lightMapUv),N.push(w.aoMapUv),N.push(w.bumpMapUv),N.push(w.normalMapUv),N.push(w.displacementMapUv),N.push(w.emissiveMapUv),N.push(w.metalnessMapUv),N.push(w.roughnessMapUv),N.push(w.anisotropyMapUv),N.push(w.clearcoatMapUv),N.push(w.clearcoatNormalMapUv),N.push(w.clearcoatRoughnessMapUv),N.push(w.iridescenceMapUv),N.push(w.iridescenceThicknessMapUv),N.push(w.sheenColorMapUv),N.push(w.sheenRoughnessMapUv),N.push(w.specularMapUv),N.push(w.specularColorMapUv),N.push(w.specularIntensityMapUv),N.push(w.transmissionMapUv),N.push(w.thicknessMapUv),N.push(w.combine),N.push(w.fogExp2),N.push(w.sizeAttenuation),N.push(w.morphTargetsCount),N.push(w.morphAttributeCount),N.push(w.numDirLights),N.push(w.numPointLights),N.push(w.numSpotLights),N.push(w.numSpotLightMaps),N.push(w.numHemiLights),N.push(w.numRectAreaLights),N.push(w.numDirLightShadows),N.push(w.numPointLightShadows),N.push(w.numSpotLightShadows),N.push(w.numSpotLightShadowsWithMaps),N.push(w.numLightProbes),N.push(w.shadowMapType),N.push(w.toneMapping),N.push(w.numClippingPlanes),N.push(w.numClipIntersection),N.push(w.depthPacking)}function L(N,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),N.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),N.push(h.mask)}function F(N){const w=A[N.type];let j;if(w){const te=wi[w];j=lv.clone(te.uniforms)}else j=N.uniforms;return j}function H(N,w){let j;for(let te=0,ce=x.length;te<ce;te++){const ge=x[te];if(ge.cacheKey===w){j=ge,++j.usedTimes;break}}return j===void 0&&(j=new Hy(o,w,N,u),x.push(j)),j}function O(N){if(--N.usedTimes===0){const w=x.indexOf(N);x[w]=x[x.length-1],x.pop(),N.destroy()}}function G(N){m.remove(N)}function ae(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:F,acquireProgram:H,releaseProgram:O,releaseShaderCache:G,programs:x,dispose:ae}}function Xy(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Wy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function n1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function i1(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(g,_,M,A,C,y){let v=o[e];return v===void 0?(v={id:g.id,object:g,geometry:_,material:M,groupOrder:A,renderOrder:g.renderOrder,z:C,group:y},o[e]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=M,v.groupOrder=A,v.renderOrder=g.renderOrder,v.z=C,v.group=y),e++,v}function h(g,_,M,A,C,y){const v=d(g,_,M,A,C,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,_,M,A,C,y){const v=d(g,_,M,A,C,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,_){i.length>1&&i.sort(g||Wy),r.length>1&&r.sort(_||n1),l.length>1&&l.sort(_||n1)}function x(){for(let g=e,_=o.length;g<_;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:x,sort:p}}function qy(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new i1,o.set(r,[d])):l>=u.length?(d=new i1,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Yy(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Lt};break;case"SpotLight":i={position:new le,direction:new le,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new le,halfWidth:new le,halfHeight:new le};break}return o[e.id]=i,i}}}function Zy(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Ky=0;function Qy(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Jy(o){const e=new Yy,i=Zy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new le);const l=new le,u=new un,d=new un;function h(p){let x=0,g=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,A=0,C=0,y=0,v=0,z=0,L=0,F=0,H=0,O=0,G=0;p.sort(Qy);for(let N=0,w=p.length;N<w;N++){const j=p[N],te=j.color,ce=j.intensity,ge=j.distance,ue=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)x+=te.r*ce,g+=te.g*ce,_+=te.b*ce;else if(j.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(j.sh.coefficients[B],ce);G++}else if(j.isDirectionalLight){const B=e.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Z=j.shadow,Y=i.get(j);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=ue,r.directionalShadowMatrix[M]=j.shadow.matrix,z++}r.directional[M]=B,M++}else if(j.isSpotLight){const B=e.get(j);B.position.setFromMatrixPosition(j.matrixWorld),B.color.copy(te).multiplyScalar(ce),B.distance=ge,B.coneCos=Math.cos(j.angle),B.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),B.decay=j.decay,r.spot[C]=B;const Z=j.shadow;if(j.map&&(r.spotLightMap[H]=j.map,H++,Z.updateMatrices(j),j.castShadow&&O++),r.spotLightMatrix[C]=Z.matrix,j.castShadow){const Y=i.get(j);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=ue,F++}C++}else if(j.isRectAreaLight){const B=e.get(j);B.color.copy(te).multiplyScalar(ce),B.halfWidth.set(j.width*.5,0,0),B.halfHeight.set(0,j.height*.5,0),r.rectArea[y]=B,y++}else if(j.isPointLight){const B=e.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),B.distance=j.distance,B.decay=j.decay,j.castShadow){const Z=j.shadow,Y=i.get(j);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=ue,r.pointShadowMatrix[A]=j.shadow.matrix,L++}r.point[A]=B,A++}else if(j.isHemisphereLight){const B=e.get(j);B.skyColor.copy(j.color).multiplyScalar(ce),B.groundColor.copy(j.groundColor).multiplyScalar(ce),r.hemi[v]=B,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=_;const ae=r.hash;(ae.directionalLength!==M||ae.pointLength!==A||ae.spotLength!==C||ae.rectAreaLength!==y||ae.hemiLength!==v||ae.numDirectionalShadows!==z||ae.numPointShadows!==L||ae.numSpotShadows!==F||ae.numSpotMaps!==H||ae.numLightProbes!==G)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=F+H-O,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=G,ae.directionalLength=M,ae.pointLength=A,ae.spotLength=C,ae.rectAreaLength=y,ae.hemiLength=v,ae.numDirectionalShadows=z,ae.numPointShadows=L,ae.numSpotShadows=F,ae.numSpotMaps=H,ae.numLightProbes=G,r.version=Ky++)}function m(p,x){let g=0,_=0,M=0,A=0,C=0;const y=x.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const L=p[v];if(L.isDirectionalLight){const F=r.directional[g];F.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(y),g++}else if(L.isSpotLight){const F=r.spot[M];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(y),F.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const F=r.rectArea[A];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(y),d.identity(),u.copy(L.matrixWorld),u.premultiply(y),d.extractRotation(u),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),A++}else if(L.isPointLight){const F=r.point[_];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(y),_++}else if(L.isHemisphereLight){const F=r.hemi[C];F.direction.setFromMatrixPosition(L.matrixWorld),F.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:r}}function a1(o){const e=new Jy(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function d(x){r.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function $y(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new a1(o),e.set(l,[h])):u>=d.length?(h=new a1(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const eM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nM(o,e,i){let r=new D1;const l=new yt,u=new yt,d=new an,h=new bv({depthPacking:D2}),m=new yv,p={},x=i.maxTextureSize,g={[qa]:Vn,[Vn]:qa,[na]:na},_=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:eM,fragmentShader:tM}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const A=new ua;A.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ya(A,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=o1;let v=this.type;this.render=function(O,G,ae){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const N=o.getRenderTarget(),w=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),te=o.state;te.setBlending(ra),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ce=v!==ta&&this.type===ta,ge=v===ta&&this.type!==ta;for(let ue=0,B=O.length;ue<B;ue++){const Z=O[ue],Y=Z.shadow;if(Y===void 0){ot("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const _e=Y.getFrameExtents();if(l.multiply(_e),u.copy(Y.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/_e.x),l.x=u.x*_e.x,Y.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/_e.y),l.y=u.y*_e.y,Y.mapSize.y=u.y)),Y.map===null||ce===!0||ge===!0){const ee=this.type!==ta?{minFilter:Jn,magFilter:Jn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Mr(l.x,l.y,ee),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const D=Y.getViewportCount();for(let ee=0;ee<D;ee++){const Se=Y.getViewport(ee);d.set(u.x*Se.x,u.y*Se.y,u.x*Se.z,u.y*Se.w),te.viewport(d),Y.updateMatrices(Z,ee),r=Y.getFrustum(),F(G,ae,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===ta&&z(Y,ae),Y.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(N,w,j)};function z(O,G){const ae=e.update(C);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Mr(l.x,l.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(G,null,ae,_,C,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(G,null,ae,M,C,null)}function L(O,G,ae,N){let w=null;const j=ae.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(j!==void 0)w=j;else if(w=ae.isPointLight===!0?m:h,o.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const te=w.uuid,ce=G.uuid;let ge=p[te];ge===void 0&&(ge={},p[te]=ge);let ue=ge[ce];ue===void 0&&(ue=w.clone(),ge[ce]=ue,G.addEventListener("dispose",H)),w=ue}if(w.visible=G.visible,w.wireframe=G.wireframe,N===ta?w.side=G.shadowSide!==null?G.shadowSide:G.side:w.side=G.shadowSide!==null?G.shadowSide:g[G.side],w.alphaMap=G.alphaMap,w.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,w.map=G.map,w.clipShadows=G.clipShadows,w.clippingPlanes=G.clippingPlanes,w.clipIntersection=G.clipIntersection,w.displacementMap=G.displacementMap,w.displacementScale=G.displacementScale,w.displacementBias=G.displacementBias,w.wireframeLinewidth=G.wireframeLinewidth,w.linewidth=G.linewidth,ae.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const te=o.properties.get(w);te.light=ae}return w}function F(O,G,ae,N,w){if(O.visible===!1)return;if(O.layers.test(G.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===ta)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,O.matrixWorld);const ce=e.update(O),ge=O.material;if(Array.isArray(ge)){const ue=ce.groups;for(let B=0,Z=ue.length;B<Z;B++){const Y=ue[B],_e=ge[Y.materialIndex];if(_e&&_e.visible){const D=L(O,_e,N,w);O.onBeforeShadow(o,O,G,ae,ce,D,Y),o.renderBufferDirect(ae,null,ce,D,O,Y),O.onAfterShadow(o,O,G,ae,ce,D,Y)}}}else if(ge.visible){const ue=L(O,ge,N,w);O.onBeforeShadow(o,O,G,ae,ce,ue,null),o.renderBufferDirect(ae,null,ce,ue,O,null),O.onAfterShadow(o,O,G,ae,ce,ue,null)}}const te=O.children;for(let ce=0,ge=te.length;ce<ge;ce++)F(te[ce],G,ae,N,w)}function H(O){O.target.removeEventListener("dispose",H);for(const ae in p){const N=p[ae],w=O.target.uuid;w in N&&(N[w].dispose(),delete N[w])}}}const iM={[wd]:Dd,[Nd]:Od,[Ud]:Pd,[Ms]:Ld,[Dd]:wd,[Od]:Nd,[Pd]:Ud,[Ld]:Ms};function aM(o,e){function i(){let V=!1;const Ne=new an;let Ce=null;const Re=new an(0,0,0,0);return{setMask:function(Me){Ce!==Me&&!V&&(o.colorMask(Me,Me,Me,Me),Ce=Me)},setLocked:function(Me){V=Me},setClear:function(Me,ve,Fe,it,wt){wt===!0&&(Me*=it,ve*=it,Fe*=it),Ne.set(Me,ve,Fe,it),Re.equals(Ne)===!1&&(o.clearColor(Me,ve,Fe,it),Re.copy(Ne))},reset:function(){V=!1,Ce=null,Re.set(-1,0,0,0)}}}function r(){let V=!1,Ne=!1,Ce=null,Re=null,Me=null;return{setReversed:function(ve){if(Ne!==ve){const Fe=e.get("EXT_clip_control");ve?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ne=ve;const it=Me;Me=null,this.setClear(it)}},getReversed:function(){return Ne},setTest:function(ve){ve?me(o.DEPTH_TEST):Ee(o.DEPTH_TEST)},setMask:function(ve){Ce!==ve&&!V&&(o.depthMask(ve),Ce=ve)},setFunc:function(ve){if(Ne&&(ve=iM[ve]),Re!==ve){switch(ve){case wd:o.depthFunc(o.NEVER);break;case Dd:o.depthFunc(o.ALWAYS);break;case Nd:o.depthFunc(o.LESS);break;case Ms:o.depthFunc(o.LEQUAL);break;case Ud:o.depthFunc(o.EQUAL);break;case Ld:o.depthFunc(o.GEQUAL);break;case Od:o.depthFunc(o.GREATER);break;case Pd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Re=ve}},setLocked:function(ve){V=ve},setClear:function(ve){Me!==ve&&(Ne&&(ve=1-ve),o.clearDepth(ve),Me=ve)},reset:function(){V=!1,Ce=null,Re=null,Me=null,Ne=!1}}}function l(){let V=!1,Ne=null,Ce=null,Re=null,Me=null,ve=null,Fe=null,it=null,wt=null;return{setTest:function(At){V||(At?me(o.STENCIL_TEST):Ee(o.STENCIL_TEST))},setMask:function(At){Ne!==At&&!V&&(o.stencilMask(At),Ne=At)},setFunc:function(At,$n,rn){(Ce!==At||Re!==$n||Me!==rn)&&(o.stencilFunc(At,$n,rn),Ce=At,Re=$n,Me=rn)},setOp:function(At,$n,rn){(ve!==At||Fe!==$n||it!==rn)&&(o.stencilOp(At,$n,rn),ve=At,Fe=$n,it=rn)},setLocked:function(At){V=At},setClear:function(At){wt!==At&&(o.clearStencil(At),wt=At)},reset:function(){V=!1,Ne=null,Ce=null,Re=null,Me=null,ve=null,Fe=null,it=null,wt=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},_=new WeakMap,M=[],A=null,C=!1,y=null,v=null,z=null,L=null,F=null,H=null,O=null,G=new Lt(0,0,0),ae=0,N=!1,w=null,j=null,te=null,ce=null,ge=null;const ue=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=Z>=2);let _e=null,D={};const ee=o.getParameter(o.SCISSOR_BOX),Se=o.getParameter(o.VIEWPORT),ye=new an().fromArray(ee),De=new an().fromArray(Se);function Ve(V,Ne,Ce,Re){const Me=new Uint8Array(4),ve=o.createTexture();o.bindTexture(V,ve),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Fe=0;Fe<Ce;Fe++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,Re,0,o.RGBA,o.UNSIGNED_BYTE,Me):o.texImage2D(Ne+Fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Me);return ve}const $={};$[o.TEXTURE_2D]=Ve(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=Ve(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=Ve(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=Ve(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),me(o.DEPTH_TEST),d.setFunc(Ms),pt(!1),rt(ux),me(o.CULL_FACE),Ot(ra);function me(V){x[V]!==!0&&(o.enable(V),x[V]=!0)}function Ee(V){x[V]!==!1&&(o.disable(V),x[V]=!1)}function Je(V,Ne){return g[V]!==Ne?(o.bindFramebuffer(V,Ne),g[V]=Ne,V===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ne),V===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function ke(V,Ne){let Ce=M,Re=!1;if(V){Ce=_.get(Ne),Ce===void 0&&(Ce=[],_.set(Ne,Ce));const Me=V.textures;if(Ce.length!==Me.length||Ce[0]!==o.COLOR_ATTACHMENT0){for(let ve=0,Fe=Me.length;ve<Fe;ve++)Ce[ve]=o.COLOR_ATTACHMENT0+ve;Ce.length=Me.length,Re=!0}}else Ce[0]!==o.BACK&&(Ce[0]=o.BACK,Re=!0);Re&&o.drawBuffers(Ce)}function lt(V){return A!==V?(o.useProgram(V),A=V,!0):!1}const Jt={[vr]:o.FUNC_ADD,[n2]:o.FUNC_SUBTRACT,[i2]:o.FUNC_REVERSE_SUBTRACT};Jt[a2]=o.MIN,Jt[r2]=o.MAX;const ct={[s2]:o.ZERO,[o2]:o.ONE,[l2]:o.SRC_COLOR,[Rd]:o.SRC_ALPHA,[p2]:o.SRC_ALPHA_SATURATE,[d2]:o.DST_COLOR,[u2]:o.DST_ALPHA,[c2]:o.ONE_MINUS_SRC_COLOR,[Cd]:o.ONE_MINUS_SRC_ALPHA,[h2]:o.ONE_MINUS_DST_COLOR,[f2]:o.ONE_MINUS_DST_ALPHA,[m2]:o.CONSTANT_COLOR,[x2]:o.ONE_MINUS_CONSTANT_COLOR,[g2]:o.CONSTANT_ALPHA,[v2]:o.ONE_MINUS_CONSTANT_ALPHA};function Ot(V,Ne,Ce,Re,Me,ve,Fe,it,wt,At){if(V===ra){C===!0&&(Ee(o.BLEND),C=!1);return}if(C===!1&&(me(o.BLEND),C=!0),V!==t2){if(V!==y||At!==N){if((v!==vr||F!==vr)&&(o.blendEquation(o.FUNC_ADD),v=vr,F=vr),At)switch(V){case bs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fx:o.blendFunc(o.ONE,o.ONE);break;case dx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Qt("WebGLState: Invalid blending: ",V);break}else switch(V){case bs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case dx:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hx:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",V);break}z=null,L=null,H=null,O=null,G.set(0,0,0),ae=0,y=V,N=At}return}Me=Me||Ne,ve=ve||Ce,Fe=Fe||Re,(Ne!==v||Me!==F)&&(o.blendEquationSeparate(Jt[Ne],Jt[Me]),v=Ne,F=Me),(Ce!==z||Re!==L||ve!==H||Fe!==O)&&(o.blendFuncSeparate(ct[Ce],ct[Re],ct[ve],ct[Fe]),z=Ce,L=Re,H=ve,O=Fe),(it.equals(G)===!1||wt!==ae)&&(o.blendColor(it.r,it.g,it.b,wt),G.copy(it),ae=wt),y=V,N=!1}function I(V,Ne){V.side===na?Ee(o.CULL_FACE):me(o.CULL_FACE);let Ce=V.side===Vn;Ne&&(Ce=!Ce),pt(Ce),V.blending===bs&&V.transparent===!1?Ot(ra):Ot(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const Re=V.stencilWrite;h.setTest(Re),Re&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),He(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?me(o.SAMPLE_ALPHA_TO_COVERAGE):Ee(o.SAMPLE_ALPHA_TO_COVERAGE)}function pt(V){w!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),w=V)}function rt(V){V!==J3?(me(o.CULL_FACE),V!==j&&(V===ux?o.cullFace(o.BACK):V===$3?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ee(o.CULL_FACE),j=V}function Pt(V){V!==te&&(B&&o.lineWidth(V),te=V)}function He(V,Ne,Ce){V?(me(o.POLYGON_OFFSET_FILL),(ce!==Ne||ge!==Ce)&&(o.polygonOffset(Ne,Ce),ce=Ne,ge=Ce)):Ee(o.POLYGON_OFFSET_FILL)}function kt(V){V?me(o.SCISSOR_TEST):Ee(o.SCISSOR_TEST)}function je(V){V===void 0&&(V=o.TEXTURE0+ue-1),_e!==V&&(o.activeTexture(V),_e=V)}function st(V,Ne,Ce){Ce===void 0&&(_e===null?Ce=o.TEXTURE0+ue-1:Ce=_e);let Re=D[Ce];Re===void 0&&(Re={type:void 0,texture:void 0},D[Ce]=Re),(Re.type!==V||Re.texture!==Ne)&&(_e!==Ce&&(o.activeTexture(Ce),_e=Ce),o.bindTexture(V,Ne||$[V]),Re.type=V,Re.texture=Ne)}function U(){const V=D[_e];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function J(){try{o.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function de(){try{o.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function pe(){try{o.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function oe(){try{o.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Pe(){try{o.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ue(){try{o.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Qe(){try{o.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ge(){try{o.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function be(){try{o.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ae(V){ye.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),ye.copy(V))}function qe(V){De.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),De.copy(V))}function Ke(V,Ne){let Ce=p.get(Ne);Ce===void 0&&(Ce=new WeakMap,p.set(Ne,Ce));let Re=Ce.get(V);Re===void 0&&(Re=o.getUniformBlockIndex(Ne,V.name),Ce.set(V,Re))}function Oe(V,Ne){const Re=p.get(Ne).get(V);m.get(Ne)!==Re&&(o.uniformBlockBinding(Ne,Re,V.__bindingPointIndex),m.set(Ne,Re))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},_e=null,D={},g={},_=new WeakMap,M=[],A=null,C=!1,y=null,v=null,z=null,L=null,F=null,H=null,O=null,G=new Lt(0,0,0),ae=0,N=!1,w=null,j=null,te=null,ce=null,ge=null,ye.set(0,0,o.canvas.width,o.canvas.height),De.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:me,disable:Ee,bindFramebuffer:Je,drawBuffers:ke,useProgram:lt,setBlending:Ot,setMaterial:I,setFlipSided:pt,setCullFace:rt,setLineWidth:Pt,setPolygonOffset:He,setScissorTest:kt,activeTexture:je,bindTexture:st,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:Ge,texImage3D:be,updateUBOMapping:Ke,uniformBlockBinding:Oe,texStorage2D:Ue,texStorage3D:Qe,texSubImage2D:de,texSubImage3D:pe,compressedTexSubImage2D:oe,compressedTexSubImage3D:Pe,scissor:Ae,viewport:qe,reset:nt}}function rM(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new yt,x=new WeakMap;let g;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,E){return M?new OffscreenCanvas(U,E):jo("canvas")}function C(U,E,J){let de=1;const pe=st(U);if((pe.width>J||pe.height>J)&&(de=J/Math.max(pe.width,pe.height)),de<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const oe=Math.floor(de*pe.width),Pe=Math.floor(de*pe.height);g===void 0&&(g=A(oe,Pe));const Ue=E?A(oe,Pe):g;return Ue.width=oe,Ue.height=Pe,Ue.getContext("2d").drawImage(U,0,0,oe,Pe),ot("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+oe+"x"+Pe+")."),Ue}else return"data"in U&&ot("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,E,J,de,pe=!1){if(U!==null){if(o[U]!==void 0)return o[U];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let oe=E;if(E===o.RED&&(J===o.FLOAT&&(oe=o.R32F),J===o.HALF_FLOAT&&(oe=o.R16F),J===o.UNSIGNED_BYTE&&(oe=o.R8)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(oe=o.R8UI),J===o.UNSIGNED_SHORT&&(oe=o.R16UI),J===o.UNSIGNED_INT&&(oe=o.R32UI),J===o.BYTE&&(oe=o.R8I),J===o.SHORT&&(oe=o.R16I),J===o.INT&&(oe=o.R32I)),E===o.RG&&(J===o.FLOAT&&(oe=o.RG32F),J===o.HALF_FLOAT&&(oe=o.RG16F),J===o.UNSIGNED_BYTE&&(oe=o.RG8)),E===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(oe=o.RG8UI),J===o.UNSIGNED_SHORT&&(oe=o.RG16UI),J===o.UNSIGNED_INT&&(oe=o.RG32UI),J===o.BYTE&&(oe=o.RG8I),J===o.SHORT&&(oe=o.RG16I),J===o.INT&&(oe=o.RG32I)),E===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(oe=o.RGB8UI),J===o.UNSIGNED_SHORT&&(oe=o.RGB16UI),J===o.UNSIGNED_INT&&(oe=o.RGB32UI),J===o.BYTE&&(oe=o.RGB8I),J===o.SHORT&&(oe=o.RGB16I),J===o.INT&&(oe=o.RGB32I)),E===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(oe=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(oe=o.RGBA16UI),J===o.UNSIGNED_INT&&(oe=o.RGBA32UI),J===o.BYTE&&(oe=o.RGBA8I),J===o.SHORT&&(oe=o.RGBA16I),J===o.INT&&(oe=o.RGBA32I)),E===o.RGB&&(J===o.UNSIGNED_INT_5_9_9_9_REV&&(oe=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(oe=o.R11F_G11F_B10F)),E===o.RGBA){const Pe=pe?Lc:Tt.getTransfer(de);J===o.FLOAT&&(oe=o.RGBA32F),J===o.HALF_FLOAT&&(oe=o.RGBA16F),J===o.UNSIGNED_BYTE&&(oe=Pe===It?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(oe=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(oe=o.RGB5_A1)}return(oe===o.R16F||oe===o.R32F||oe===o.RG16F||oe===o.RG32F||oe===o.RGBA16F||oe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function F(U,E){let J;return U?E===null||E===yr||E===Vo?J=o.DEPTH24_STENCIL8:E===aa?J=o.DEPTH32F_STENCIL8:E===Ho&&(J=o.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===yr||E===Vo?J=o.DEPTH_COMPONENT24:E===aa?J=o.DEPTH_COMPONENT32F:E===Ho&&(J=o.DEPTH_COMPONENT16),J}function H(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Jn&&U.minFilter!==fi?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function O(U){const E=U.target;E.removeEventListener("dispose",O),ae(E),E.isVideoTexture&&x.delete(E)}function G(U){const E=U.target;E.removeEventListener("dispose",G),w(E)}function ae(U){const E=r.get(U);if(E.__webglInit===void 0)return;const J=U.source,de=_.get(J);if(de){const pe=de[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&N(U),Object.keys(de).length===0&&_.delete(J)}r.remove(U)}function N(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const J=U.source,de=_.get(J);delete de[E.__cacheKey],d.memory.textures--}function w(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(E.__webglFramebuffer[de]))for(let pe=0;pe<E.__webglFramebuffer[de].length;pe++)o.deleteFramebuffer(E.__webglFramebuffer[de][pe]);else o.deleteFramebuffer(E.__webglFramebuffer[de]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[de])}else{if(Array.isArray(E.__webglFramebuffer))for(let de=0;de<E.__webglFramebuffer.length;de++)o.deleteFramebuffer(E.__webglFramebuffer[de]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let de=0;de<E.__webglColorRenderbuffer.length;de++)E.__webglColorRenderbuffer[de]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[de]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=U.textures;for(let de=0,pe=J.length;de<pe;de++){const oe=r.get(J[de]);oe.__webglTexture&&(o.deleteTexture(oe.__webglTexture),d.memory.textures--),r.remove(J[de])}r.remove(U)}let j=0;function te(){j=0}function ce(){const U=j;return U>=l.maxTextures&&ot("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),j+=1,U}function ge(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ue(U,E){const J=r.get(U);if(U.isVideoTexture&&kt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const de=U.image;if(de===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{$(J,U,E);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function B(U,E){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){$(J,U,E);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function Z(U,E){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){$(J,U,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function Y(U,E){const J=r.get(U);if(U.version>0&&J.__version!==U.version){me(J,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const _e={[Fd]:o.REPEAT,[ia]:o.CLAMP_TO_EDGE,[Id]:o.MIRRORED_REPEAT},D={[Jn]:o.NEAREST,[C2]:o.NEAREST_MIPMAP_NEAREST,[rc]:o.NEAREST_MIPMAP_LINEAR,[fi]:o.LINEAR,[Zf]:o.LINEAR_MIPMAP_NEAREST,[Sr]:o.LINEAR_MIPMAP_LINEAR},ee={[L2]:o.NEVER,[I2]:o.ALWAYS,[O2]:o.LESS,[g1]:o.LEQUAL,[P2]:o.EQUAL,[F2]:o.GEQUAL,[z2]:o.GREATER,[B2]:o.NOTEQUAL};function Se(U,E){if(E.type===aa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===fi||E.magFilter===Zf||E.magFilter===rc||E.magFilter===Sr||E.minFilter===fi||E.minFilter===Zf||E.minFilter===rc||E.minFilter===Sr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,_e[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,_e[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,_e[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,D[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,ee[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Jn||E.minFilter!==rc&&E.minFilter!==Sr||E.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ye(U,E){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",O));const de=E.source;let pe=_.get(de);pe===void 0&&(pe={},_.set(de,pe));const oe=ge(E);if(oe!==U.__cacheKey){pe[oe]===void 0&&(pe[oe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),pe[oe].usedTimes++;const Pe=pe[U.__cacheKey];Pe!==void 0&&(pe[U.__cacheKey].usedTimes--,Pe.usedTimes===0&&N(E)),U.__cacheKey=oe,U.__webglTexture=pe[oe].texture}return J}function De(U,E,J){return Math.floor(Math.floor(U/J)/E)}function Ve(U,E,J,de){const oe=U.updateRanges;if(oe.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,J,de,E.data);else{oe.sort((be,Ae)=>be.start-Ae.start);let Pe=0;for(let be=1;be<oe.length;be++){const Ae=oe[Pe],qe=oe[be],Ke=Ae.start+Ae.count,Oe=De(qe.start,E.width,4),nt=De(Ae.start,E.width,4);qe.start<=Ke+1&&Oe===nt&&De(qe.start+qe.count-1,E.width,4)===Oe?Ae.count=Math.max(Ae.count,qe.start+qe.count-Ae.start):(++Pe,oe[Pe]=qe)}oe.length=Pe+1;const Ue=o.getParameter(o.UNPACK_ROW_LENGTH),Qe=o.getParameter(o.UNPACK_SKIP_PIXELS),Ge=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let be=0,Ae=oe.length;be<Ae;be++){const qe=oe[be],Ke=Math.floor(qe.start/4),Oe=Math.ceil(qe.count/4),nt=Ke%E.width,V=Math.floor(Ke/E.width),Ne=Oe,Ce=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,nt),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,nt,V,Ne,Ce,J,de,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ue),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qe),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ge)}}function $(U,E,J){let de=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=o.TEXTURE_3D);const pe=ye(U,E),oe=E.source;i.bindTexture(de,U.__webglTexture,o.TEXTURE0+J);const Pe=r.get(oe);if(oe.version!==Pe.__version||pe===!0){i.activeTexture(o.TEXTURE0+J);const Ue=Tt.getPrimaries(Tt.workingColorSpace),Qe=E.colorSpace===ka?null:Tt.getPrimaries(E.colorSpace),Ge=E.colorSpace===ka||Ue===Qe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let be=C(E.image,!1,l.maxTextureSize);be=je(E,be);const Ae=u.convert(E.format,E.colorSpace),qe=u.convert(E.type);let Ke=L(E.internalFormat,Ae,qe,E.colorSpace,E.isVideoTexture);Se(de,E);let Oe;const nt=E.mipmaps,V=E.isVideoTexture!==!0,Ne=Pe.__version===void 0||pe===!0,Ce=oe.dataReady,Re=H(E,be);if(E.isDepthTexture)Ke=F(E.format===ko,E.type),Ne&&(V?i.texStorage2D(o.TEXTURE_2D,1,Ke,be.width,be.height):i.texImage2D(o.TEXTURE_2D,0,Ke,be.width,be.height,0,Ae,qe,null));else if(E.isDataTexture)if(nt.length>0){V&&Ne&&i.texStorage2D(o.TEXTURE_2D,Re,Ke,nt[0].width,nt[0].height);for(let Me=0,ve=nt.length;Me<ve;Me++)Oe=nt[Me],V?Ce&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ae,qe,Oe.data):i.texImage2D(o.TEXTURE_2D,Me,Ke,Oe.width,Oe.height,0,Ae,qe,Oe.data);E.generateMipmaps=!1}else V?(Ne&&i.texStorage2D(o.TEXTURE_2D,Re,Ke,be.width,be.height),Ce&&Ve(E,be,Ae,qe)):i.texImage2D(o.TEXTURE_2D,0,Ke,be.width,be.height,0,Ae,qe,be.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ke,nt[0].width,nt[0].height,be.depth);for(let Me=0,ve=nt.length;Me<ve;Me++)if(Oe=nt[Me],E.format!==Si)if(Ae!==null)if(V){if(Ce)if(E.layerUpdates.size>0){const Fe=Px(Oe.width,Oe.height,E.format,E.type);for(const it of E.layerUpdates){const wt=Oe.data.subarray(it*Fe/Oe.data.BYTES_PER_ELEMENT,(it+1)*Fe/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,it,Oe.width,Oe.height,1,Ae,wt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,be.depth,Ae,Oe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Ke,Oe.width,Oe.height,be.depth,0,Oe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ce&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,be.depth,Ae,qe,Oe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,Ke,Oe.width,Oe.height,be.depth,0,Ae,qe,Oe.data)}else{V&&Ne&&i.texStorage2D(o.TEXTURE_2D,Re,Ke,nt[0].width,nt[0].height);for(let Me=0,ve=nt.length;Me<ve;Me++)Oe=nt[Me],E.format!==Si?Ae!==null?V?Ce&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ae,Oe.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,Ke,Oe.width,Oe.height,0,Oe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ce&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ae,qe,Oe.data):i.texImage2D(o.TEXTURE_2D,Me,Ke,Oe.width,Oe.height,0,Ae,qe,Oe.data)}else if(E.isDataArrayTexture)if(V){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ke,be.width,be.height,be.depth),Ce)if(E.layerUpdates.size>0){const Me=Px(be.width,be.height,E.format,E.type);for(const ve of E.layerUpdates){const Fe=be.data.subarray(ve*Me/be.data.BYTES_PER_ELEMENT,(ve+1)*Me/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ve,be.width,be.height,1,Ae,qe,Fe)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ae,qe,be.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ke,be.width,be.height,be.depth,0,Ae,qe,be.data);else if(E.isData3DTexture)V?(Ne&&i.texStorage3D(o.TEXTURE_3D,Re,Ke,be.width,be.height,be.depth),Ce&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ae,qe,be.data)):i.texImage3D(o.TEXTURE_3D,0,Ke,be.width,be.height,be.depth,0,Ae,qe,be.data);else if(E.isFramebufferTexture){if(Ne)if(V)i.texStorage2D(o.TEXTURE_2D,Re,Ke,be.width,be.height);else{let Me=be.width,ve=be.height;for(let Fe=0;Fe<Re;Fe++)i.texImage2D(o.TEXTURE_2D,Fe,Ke,Me,ve,0,Ae,qe,null),Me>>=1,ve>>=1}}else if(nt.length>0){if(V&&Ne){const Me=st(nt[0]);i.texStorage2D(o.TEXTURE_2D,Re,Ke,Me.width,Me.height)}for(let Me=0,ve=nt.length;Me<ve;Me++)Oe=nt[Me],V?Ce&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ae,qe,Oe):i.texImage2D(o.TEXTURE_2D,Me,Ke,Ae,qe,Oe);E.generateMipmaps=!1}else if(V){if(Ne){const Me=st(be);i.texStorage2D(o.TEXTURE_2D,Re,Ke,Me.width,Me.height)}Ce&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae,qe,be)}else i.texImage2D(o.TEXTURE_2D,0,Ke,Ae,qe,be);y(E)&&v(de),Pe.__version=oe.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function me(U,E,J){if(E.image.length!==6)return;const de=ye(U,E),pe=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+J);const oe=r.get(pe);if(pe.version!==oe.__version||de===!0){i.activeTexture(o.TEXTURE0+J);const Pe=Tt.getPrimaries(Tt.workingColorSpace),Ue=E.colorSpace===ka?null:Tt.getPrimaries(E.colorSpace),Qe=E.colorSpace===ka||Pe===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let ve=0;ve<6;ve++)!Ge&&!be?Ae[ve]=C(E.image[ve],!0,l.maxCubemapSize):Ae[ve]=be?E.image[ve].image:E.image[ve],Ae[ve]=je(E,Ae[ve]);const qe=Ae[0],Ke=u.convert(E.format,E.colorSpace),Oe=u.convert(E.type),nt=L(E.internalFormat,Ke,Oe,E.colorSpace),V=E.isVideoTexture!==!0,Ne=oe.__version===void 0||de===!0,Ce=pe.dataReady;let Re=H(E,qe);Se(o.TEXTURE_CUBE_MAP,E);let Me;if(Ge){V&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,nt,qe.width,qe.height);for(let ve=0;ve<6;ve++){Me=Ae[ve].mipmaps;for(let Fe=0;Fe<Me.length;Fe++){const it=Me[Fe];E.format!==Si?Ke!==null?V?Ce&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,it.width,it.height,Ke,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,nt,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,it.width,it.height,Ke,Oe,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,nt,it.width,it.height,0,Ke,Oe,it.data)}}}else{if(Me=E.mipmaps,V&&Ne){Me.length>0&&Re++;const ve=st(Ae[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,nt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(be){V?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ae[ve].width,Ae[ve].height,Ke,Oe,Ae[ve].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Ae[ve].width,Ae[ve].height,0,Ke,Oe,Ae[ve].data);for(let Fe=0;Fe<Me.length;Fe++){const wt=Me[Fe].image[ve].image;V?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,wt.width,wt.height,Ke,Oe,wt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,nt,wt.width,wt.height,0,Ke,Oe,wt.data)}}else{V?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ke,Oe,Ae[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Ke,Oe,Ae[ve]);for(let Fe=0;Fe<Me.length;Fe++){const it=Me[Fe];V?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,Ke,Oe,it.image[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,nt,Ke,Oe,it.image[ve])}}}y(E)&&v(o.TEXTURE_CUBE_MAP),oe.__version=pe.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ee(U,E,J,de,pe,oe){const Pe=u.convert(J.format,J.colorSpace),Ue=u.convert(J.type),Qe=L(J.internalFormat,Pe,Ue,J.colorSpace),Ge=r.get(E),be=r.get(J);if(be.__renderTarget=E,!Ge.__hasExternalTextures){const Ae=Math.max(1,E.width>>oe),qe=Math.max(1,E.height>>oe);pe===o.TEXTURE_3D||pe===o.TEXTURE_2D_ARRAY?i.texImage3D(pe,oe,Qe,Ae,qe,E.depth,0,Pe,Ue,null):i.texImage2D(pe,oe,Qe,Ae,qe,0,Pe,Ue,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),He(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,pe,be.__webglTexture,0,Pt(E)):(pe===o.TEXTURE_2D||pe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,de,pe,be.__webglTexture,oe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(U,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const de=E.depthTexture,pe=de&&de.isDepthTexture?de.type:null,oe=F(E.stencilBuffer,pe),Pe=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=Pt(E);He(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ue,oe,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ue,oe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,oe,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pe,o.RENDERBUFFER,U)}else{const de=E.textures;for(let pe=0;pe<de.length;pe++){const oe=de[pe],Pe=u.convert(oe.format,oe.colorSpace),Ue=u.convert(oe.type),Qe=L(oe.internalFormat,Pe,Ue,oe.colorSpace),Ge=Pt(E);J&&He(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ge,Qe,E.width,E.height):He(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ge,Qe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Qe,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ke(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(E.depthTexture);de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ue(E.depthTexture,0);const pe=de.__webglTexture,oe=Pt(E);if(E.depthTexture.format===Go)He(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pe,0,oe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pe,0);else if(E.depthTexture.format===ko)He(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pe,0,oe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function lt(U){const E=r.get(U),J=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const de=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",pe)};de.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=de}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const de=U.texture.mipmaps;de&&de.length>0?ke(E.__webglFramebuffer[0],U):ke(E.__webglFramebuffer,U)}else if(J){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=o.createRenderbuffer(),Je(E.__webglDepthbuffer[de],U,!1);else{const pe=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[de];o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,oe)}}else{const de=U.texture.mipmaps;if(de&&de.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Je(E.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,oe)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Jt(U,E,J){const de=r.get(U);E!==void 0&&Ee(de.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&lt(U)}function ct(U){const E=U.texture,J=r.get(U),de=r.get(E);U.addEventListener("dispose",G);const pe=U.textures,oe=U.isWebGLCubeRenderTarget===!0,Pe=pe.length>1;if(Pe||(de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture()),de.__version=E.version,d.memory.textures++),oe){J.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[Ue]=[];for(let Qe=0;Qe<E.mipmaps.length;Qe++)J.__webglFramebuffer[Ue][Qe]=o.createFramebuffer()}else J.__webglFramebuffer[Ue]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)J.__webglFramebuffer[Ue]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Pe)for(let Ue=0,Qe=pe.length;Ue<Qe;Ue++){const Ge=r.get(pe[Ue]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&He(U)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ue=0;Ue<pe.length;Ue++){const Qe=pe[Ue];J.__webglColorRenderbuffer[Ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Ue]);const Ge=u.convert(Qe.format,Qe.colorSpace),be=u.convert(Qe.type),Ae=L(Qe.internalFormat,Ge,be,Qe.colorSpace,U.isXRRenderTarget===!0),qe=Pt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Ae,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,J.__webglColorRenderbuffer[Ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Je(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(oe){i.bindTexture(o.TEXTURE_CUBE_MAP,de.__webglTexture),Se(o.TEXTURE_CUBE_MAP,E);for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qe=0;Qe<E.mipmaps.length;Qe++)Ee(J.__webglFramebuffer[Ue][Qe],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe);else Ee(J.__webglFramebuffer[Ue],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);y(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let Ue=0,Qe=pe.length;Ue<Qe;Ue++){const Ge=pe[Ue],be=r.get(Ge);let Ae=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ae,be.__webglTexture),Se(Ae,Ge),Ee(J.__webglFramebuffer,U,Ge,o.COLOR_ATTACHMENT0+Ue,Ae,0),y(Ge)&&v(Ae)}i.unbindTexture()}else{let Ue=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ue,de.__webglTexture),Se(Ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Qe=0;Qe<E.mipmaps.length;Qe++)Ee(J.__webglFramebuffer[Qe],U,E,o.COLOR_ATTACHMENT0,Ue,Qe);else Ee(J.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Ue,0);y(E)&&v(Ue),i.unbindTexture()}U.depthBuffer&&lt(U)}function Ot(U){const E=U.textures;for(let J=0,de=E.length;J<de;J++){const pe=E[J];if(y(pe)){const oe=z(U),Pe=r.get(pe).__webglTexture;i.bindTexture(oe,Pe),v(oe),i.unbindTexture()}}}const I=[],pt=[];function rt(U){if(U.samples>0){if(He(U)===!1){const E=U.textures,J=U.width,de=U.height;let pe=o.COLOR_BUFFER_BIT;const oe=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=r.get(U),Ue=E.length>1;if(Ue)for(let Ge=0;Ge<E.length;Ge++)i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Qe=U.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ge=0;Ge<E.length;Ge++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(pe|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(pe|=o.STENCIL_BUFFER_BIT)),Ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ge]);const be=r.get(E[Ge]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,be,0)}o.blitFramebuffer(0,0,J,de,0,0,J,de,pe,o.NEAREST),m===!0&&(I.length=0,pt.length=0,I.push(o.COLOR_ATTACHMENT0+Ge),U.depthBuffer&&U.resolveDepthBuffer===!1&&(I.push(oe),pt.push(oe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,pt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ue)for(let Ge=0;Ge<E.length;Ge++){i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ge]);const be=r.get(E[Ge]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.TEXTURE_2D,be,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Pt(U){return Math.min(l.maxSamples,U.samples)}function He(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(U){const E=d.render.frame;x.get(U)!==E&&(x.set(U,E),U.update())}function je(U,E){const J=U.colorSpace,de=U.format,pe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==As&&J!==ka&&(Tt.getTransfer(J)===It?(de!==Si||pe!==oa)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",J)),E}function st(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=te,this.setTexture2D=ue,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Jt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=He}function sM(o,e){function i(r,l=ka){let u;const d=Tt.getTransfer(l);if(r===oa)return o.UNSIGNED_BYTE;if(r===S0)return o.UNSIGNED_SHORT_4_4_4_4;if(r===b0)return o.UNSIGNED_SHORT_5_5_5_1;if(r===d1)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===h1)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===u1)return o.BYTE;if(r===f1)return o.SHORT;if(r===Ho)return o.UNSIGNED_SHORT;if(r===_0)return o.INT;if(r===yr)return o.UNSIGNED_INT;if(r===aa)return o.FLOAT;if(r===Cs)return o.HALF_FLOAT;if(r===p1)return o.ALPHA;if(r===m1)return o.RGB;if(r===Si)return o.RGBA;if(r===Go)return o.DEPTH_COMPONENT;if(r===ko)return o.DEPTH_STENCIL;if(r===x1)return o.RED;if(r===y0)return o.RED_INTEGER;if(r===M0)return o.RG;if(r===E0)return o.RG_INTEGER;if(r===T0)return o.RGBA_INTEGER;if(r===Cc||r===wc||r===Dc||r===Nc)if(d===It)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Cc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Cc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hd||r===Vd||r===Gd||r===kd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Hd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Xd||r===Wd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===jd||r===Xd)return d===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Wd)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qd||r===Yd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===e0||r===t0||r===n0||r===i0||r===a0||r===r0||r===s0)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===qd)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yd)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zd)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kd)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jd)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$d)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===e0)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===t0)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===n0)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===i0)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===a0)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===r0)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===s0)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===o0||r===l0||r===c0)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===o0)return d===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===l0)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===c0)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===u0||r===f0||r===d0||r===h0)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===u0)return u.COMPRESSED_RED_RGTC1_EXT;if(r===f0)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===d0)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===h0)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const oM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new U1(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ca({vertexShader:oM,fragmentShader:lM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ya(new Fc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uM extends ws{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,x=null,g=null,_=null,M=null,A=null;const C=typeof XRWebGLBinding<"u",y=new cM,v={},z=i.getContextAttributes();let L=null,F=null;const H=[],O=[],G=new yt;let ae=null;const N=new ci;N.viewport=new an;const w=new ci;w.viewport=new an;const j=[N,w],te=new Cv;let ce=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let me=H[$];return me===void 0&&(me=new vd,H[$]=me),me.getTargetRaySpace()},this.getControllerGrip=function($){let me=H[$];return me===void 0&&(me=new vd,H[$]=me),me.getGripSpace()},this.getHand=function($){let me=H[$];return me===void 0&&(me=new vd,H[$]=me),me.getHandSpace()};function ue($){const me=O.indexOf($.inputSource);if(me===-1)return;const Ee=H[me];Ee!==void 0&&(Ee.update($.inputSource,$.frame,p||d),Ee.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",Z);for(let $=0;$<H.length;$++){const me=O[$];me!==null&&(O[$]=null,H[$].disconnect(me))}ce=null,ge=null,y.reset();for(const $ in v)delete v[$];e.setRenderTarget(L),M=null,_=null,g=null,l=null,F=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(ae),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",B),l.addEventListener("inputsourceschange",Z),z.xrCompatible!==!0&&await i.makeXRCompatible(),ae=e.getPixelRatio(),e.getSize(G),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Je=null,ke=null;z.depth&&(ke=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=z.stencil?ko:Go,Je=z.stencil?Vo:yr);const lt={colorFormat:i.RGBA8,depthFormat:ke,scaleFactor:u};g=this.getBinding(),_=g.createProjectionLayer(lt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),F=new Mr(_.textureWidth,_.textureHeight,{format:Si,type:oa,depthTexture:new N1(_.textureWidth,_.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ee={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),F=new Mr(M.framebufferWidth,M.framebufferHeight,{format:Si,type:oa,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ve.setContext(l),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z($){for(let me=0;me<$.removed.length;me++){const Ee=$.removed[me],Je=O.indexOf(Ee);Je>=0&&(O[Je]=null,H[Je].disconnect(Ee))}for(let me=0;me<$.added.length;me++){const Ee=$.added[me];let Je=O.indexOf(Ee);if(Je===-1){for(let lt=0;lt<H.length;lt++)if(lt>=O.length){O.push(Ee),Je=lt;break}else if(O[lt]===null){O[lt]=Ee,Je=lt;break}if(Je===-1)break}const ke=H[Je];ke&&ke.connect(Ee)}}const Y=new le,_e=new le;function D($,me,Ee){Y.setFromMatrixPosition(me.matrixWorld),_e.setFromMatrixPosition(Ee.matrixWorld);const Je=Y.distanceTo(_e),ke=me.projectionMatrix.elements,lt=Ee.projectionMatrix.elements,Jt=ke[14]/(ke[10]-1),ct=ke[14]/(ke[10]+1),Ot=(ke[9]+1)/ke[5],I=(ke[9]-1)/ke[5],pt=(ke[8]-1)/ke[0],rt=(lt[8]+1)/lt[0],Pt=Jt*pt,He=Jt*rt,kt=Je/(-pt+rt),je=kt*-pt;if(me.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(je),$.translateZ(kt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ke[10]===-1)$.projectionMatrix.copy(me.projectionMatrix),$.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const st=Jt+kt,U=ct+kt,E=Pt-je,J=He+(Je-je),de=Ot*ct/U*st,pe=I*ct/U*st;$.projectionMatrix.makePerspective(E,J,de,pe,st,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ee($,me){me===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(me.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let me=$.near,Ee=$.far;y.texture!==null&&(y.depthNear>0&&(me=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),te.near=w.near=N.near=me,te.far=w.far=N.far=Ee,(ce!==te.near||ge!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),ce=te.near,ge=te.far),te.layers.mask=$.layers.mask|6,N.layers.mask=te.layers.mask&3,w.layers.mask=te.layers.mask&5;const Je=$.parent,ke=te.cameras;ee(te,Je);for(let lt=0;lt<ke.length;lt++)ee(ke[lt],Je);ke.length===2?D(te,N,w):te.projectionMatrix.copy(N.projectionMatrix),Se($,te,Je)};function Se($,me,Ee){Ee===null?$.matrix.copy(me.matrixWorld):($.matrix.copy(Ee.matrixWorld),$.matrix.invert(),$.matrix.multiply(me.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(me.projectionMatrix),$.projectionMatrixInverse.copy(me.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=m0*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function($){m=$,_!==null&&(_.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function($){return v[$]};let ye=null;function De($,me){if(x=me.getViewerPose(p||d),A=me,x!==null){const Ee=x.views;M!==null&&(e.setRenderTargetFramebuffer(F,M.framebuffer),e.setRenderTarget(F));let Je=!1;Ee.length!==te.cameras.length&&(te.cameras.length=0,Je=!0);for(let ct=0;ct<Ee.length;ct++){const Ot=Ee[ct];let I=null;if(M!==null)I=M.getViewport(Ot);else{const rt=g.getViewSubImage(_,Ot);I=rt.viewport,ct===0&&(e.setRenderTargetTextures(F,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(F))}let pt=j[ct];pt===void 0&&(pt=new ci,pt.layers.enable(ct),pt.viewport=new an,j[ct]=pt),pt.matrix.fromArray(Ot.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ot.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(I.x,I.y,I.width,I.height),ct===0&&(te.matrix.copy(pt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Je===!0&&te.cameras.push(pt)}const ke=l.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const ct=g.getDepthInformation(Ee[0]);ct&&ct.isValid&&ct.texture&&y.init(ct,l.renderState)}if(ke&&ke.includes("camera-access")&&C){e.state.unbindTexture(),g=r.getBinding();for(let ct=0;ct<Ee.length;ct++){const Ot=Ee[ct].camera;if(Ot){let I=v[Ot];I||(I=new U1,v[Ot]=I);const pt=g.getCameraImage(Ot);I.sourceTexture=pt}}}}for(let Ee=0;Ee<H.length;Ee++){const Je=O[Ee],ke=H[Ee];Je!==null&&ke!==void 0&&ke.update(Je,me,p||d)}ye&&ye($,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),A=null}const Ve=new L1;Ve.setAnimationLoop(De),this.setAnimationLoop=function($){ye=$},this.dispose=function(){}}}const xr=new la,fM=new un;function dM(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,T1(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,z,L,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),x(y,v)):v.isMeshStandardMaterial?(u(y,v),_(y,v),v.isMeshPhysicalMaterial&&M(y,v,F)):v.isMeshMatcapMaterial?(u(y,v),A(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),C(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,z,L):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Vn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Vn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const z=e.get(v),L=z.envMap,F=z.envMapRotation;L&&(y.envMap.value=L,xr.copy(F),xr.x*=-1,xr.y*=-1,xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),y.envMapRotation.value.setFromMatrix4(fM.makeRotationFromEuler(xr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,z,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*z,y.scale.value=L*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,z){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const z=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function hM(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,L){const F=L.program;r.uniformBlockBinding(z,F)}function p(z,L){let F=l[z.id];F===void 0&&(A(z),F=x(z),l[z.id]=F,z.addEventListener("dispose",y));const H=L.program;r.updateUBOMapping(z,H);const O=e.render.frame;u[z.id]!==O&&(_(z),u[z.id]=O)}function x(z){const L=g();z.__bindingPointIndex=L;const F=o.createBuffer(),H=z.__size,O=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,H,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,F),F}function g(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(z){const L=l[z.id],F=z.uniforms,H=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let O=0,G=F.length;O<G;O++){const ae=Array.isArray(F[O])?F[O]:[F[O]];for(let N=0,w=ae.length;N<w;N++){const j=ae[N];if(M(j,O,N,H)===!0){const te=j.__offset,ce=Array.isArray(j.value)?j.value:[j.value];let ge=0;for(let ue=0;ue<ce.length;ue++){const B=ce[ue],Z=C(B);typeof B=="number"||typeof B=="boolean"?(j.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,te+ge,j.__data)):B.isMatrix3?(j.__data[0]=B.elements[0],j.__data[1]=B.elements[1],j.__data[2]=B.elements[2],j.__data[3]=0,j.__data[4]=B.elements[3],j.__data[5]=B.elements[4],j.__data[6]=B.elements[5],j.__data[7]=0,j.__data[8]=B.elements[6],j.__data[9]=B.elements[7],j.__data[10]=B.elements[8],j.__data[11]=0):(B.toArray(j.__data,ge),ge+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,te,j.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,L,F,H){const O=z.value,G=L+"_"+F;if(H[G]===void 0)return typeof O=="number"||typeof O=="boolean"?H[G]=O:H[G]=O.clone(),!0;{const ae=H[G];if(typeof O=="number"||typeof O=="boolean"){if(ae!==O)return H[G]=O,!0}else if(ae.equals(O)===!1)return ae.copy(O),!0}return!1}function A(z){const L=z.uniforms;let F=0;const H=16;for(let G=0,ae=L.length;G<ae;G++){const N=Array.isArray(L[G])?L[G]:[L[G]];for(let w=0,j=N.length;w<j;w++){const te=N[w],ce=Array.isArray(te.value)?te.value:[te.value];for(let ge=0,ue=ce.length;ge<ue;ge++){const B=ce[ge],Z=C(B),Y=F%H,_e=Y%Z.boundary,D=Y+_e;F+=_e,D!==0&&H-D<Z.storage&&(F+=H-D),te.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=F,F+=Z.storage}}}const O=F%H;return O>0&&(F+=H-O),z.__size=F,z.__cache={},this}function C(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",z),L}function y(z){const L=z.target;L.removeEventListener("dispose",y);const F=d.indexOf(L.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function v(){for(const z in l)o.deleteBuffer(l[z]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}const pM=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ea=null;function mM(){return ea===null&&(ea=new gv(pM,32,32,M0,Cs),ea.minFilter=fi,ea.magFilter=fi,ea.wrapS=ia,ea.wrapT=ia,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class xM{constructor(e={}){const{canvas:i=H2(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const A=new Set([T0,E0,y0]),C=new Set([oa,yr,Ho,Vo,S0,b0]),y=new Uint32Array(4),v=new Int32Array(4);let z=null,L=null;const F=[],H=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let G=!1;this._outputColorSpace=li;let ae=0,N=0,w=null,j=-1,te=null;const ce=new an,ge=new an;let ue=null;const B=new Lt(0);let Z=0,Y=i.width,_e=i.height,D=1,ee=null,Se=null;const ye=new an(0,0,Y,_e),De=new an(0,0,Y,_e);let Ve=!1;const $=new D1;let me=!1,Ee=!1;const Je=new un,ke=new le,lt=new an,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Ot(){return w===null?D:1}let I=r;function pt(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${v0}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",ve,!1),i.addEventListener("webglcontextcreationerror",Fe,!1),I===null){const W="webgl2";if(I=pt(W,R),I===null)throw pt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let rt,Pt,He,kt,je,st,U,E,J,de,pe,oe,Pe,Ue,Qe,Ge,be,Ae,qe,Ke,Oe,nt,V,Ne;function Ce(){rt=new Eb(I),rt.init(),nt=new sM(I,rt),Pt=new mb(I,rt,e,nt),He=new aM(I,rt),Pt.reversedDepthBuffer&&_&&He.buffers.depth.setReversed(!0),kt=new Rb(I),je=new Xy,st=new rM(I,rt,He,je,Pt,nt,kt),U=new gb(O),E=new Mb(O),J=new Nv(I),V=new hb(I,J),de=new Tb(I,J,kt,V),pe=new wb(I,de,J,kt),qe=new Cb(I,Pt,st),Ge=new xb(je),oe=new jy(O,U,E,rt,Pt,V,Ge),Pe=new dM(O,je),Ue=new qy,Qe=new $y(rt),Ae=new db(O,U,E,He,pe,M,m),be=new nM(O,pe,Pt),Ne=new hM(I,kt,Pt,He),Ke=new pb(I,rt,kt),Oe=new Ab(I,rt,kt),kt.programs=oe.programs,O.capabilities=Pt,O.extensions=rt,O.properties=je,O.renderLists=Ue,O.shadowMap=be,O.state=He,O.info=kt}Ce();const Re=new uM(O,I);this.xr=Re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=rt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=rt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(R){R!==void 0&&(D=R,this.setSize(Y,_e,!1))},this.getSize=function(R){return R.set(Y,_e)},this.setSize=function(R,W,re=!0){if(Re.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,_e=W,i.width=Math.floor(R*D),i.height=Math.floor(W*D),re===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(Y*D,_e*D).floor()},this.setDrawingBufferSize=function(R,W,re){Y=R,_e=W,D=re,i.width=Math.floor(R*re),i.height=Math.floor(W*re),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(ce)},this.getViewport=function(R){return R.copy(ye)},this.setViewport=function(R,W,re,se){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,W,re,se),He.viewport(ce.copy(ye).multiplyScalar(D).round())},this.getScissor=function(R){return R.copy(De)},this.setScissor=function(R,W,re,se){R.isVector4?De.set(R.x,R.y,R.z,R.w):De.set(R,W,re,se),He.scissor(ge.copy(De).multiplyScalar(D).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(R){He.setScissorTest(Ve=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){Se=R},this.getClearColor=function(R){return R.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,re=!0){let se=0;if(R){let q=!1;if(w!==null){const Te=w.texture.format;q=A.has(Te)}if(q){const Te=w.texture.type,we=C.has(Te),Be=Ae.getClearColor(),ze=Ae.getClearAlpha(),Ye=Be.r,$e=Be.g,Xe=Be.b;we?(y[0]=Ye,y[1]=$e,y[2]=Xe,y[3]=ze,I.clearBufferuiv(I.COLOR,0,y)):(v[0]=Ye,v[1]=$e,v[2]=Xe,v[3]=ze,I.clearBufferiv(I.COLOR,0,v))}else se|=I.COLOR_BUFFER_BIT}W&&(se|=I.DEPTH_BUFFER_BIT),re&&(se|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",ve,!1),i.removeEventListener("webglcontextcreationerror",Fe,!1),Ae.dispose(),Ue.dispose(),Qe.dispose(),je.dispose(),U.dispose(),E.dispose(),pe.dispose(),V.dispose(),Ne.dispose(),oe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",yn),Re.removeEventListener("sessionend",Ui),di.stop()};function Me(R){R.preventDefault(),Pc("WebGLRenderer: Context Lost."),G=!0}function ve(){Pc("WebGLRenderer: Context Restored."),G=!1;const R=kt.autoReset,W=be.enabled,re=be.autoUpdate,se=be.needsUpdate,q=be.type;Ce(),kt.autoReset=R,be.enabled=W,be.autoUpdate=re,be.needsUpdate=se,be.type=q}function Fe(R){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function it(R){const W=R.target;W.removeEventListener("dispose",it),wt(W)}function wt(R){At(R),je.remove(R)}function At(R){const W=je.get(R).programs;W!==void 0&&(W.forEach(function(re){oe.releaseProgram(re)}),R.isShaderMaterial&&oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,re,se,q,Te){W===null&&(W=Jt);const we=q.isMesh&&q.matrixWorld.determinant()<0,Be=da(R,W,re,se,q);He.setMaterial(se,we);let ze=re.index,Ye=1;if(se.wireframe===!0){if(ze=de.getWireframeAttribute(re),ze===void 0)return;Ye=2}const $e=re.drawRange,Xe=re.attributes.position;let mt=$e.start*Ye,Rt=($e.start+$e.count)*Ye;Te!==null&&(mt=Math.max(mt,Te.start*Ye),Rt=Math.min(Rt,(Te.start+Te.count)*Ye)),ze!==null?(mt=Math.max(mt,0),Rt=Math.min(Rt,ze.count)):Xe!=null&&(mt=Math.max(mt,0),Rt=Math.min(Rt,Xe.count));const St=Rt-mt;if(St<0||St===1/0)return;V.setup(q,se,Be,re,ze);let Wt,Dt=Ke;if(ze!==null&&(Wt=J.get(ze),Dt=Oe,Dt.setIndex(Wt)),q.isMesh)se.wireframe===!0?(He.setLineWidth(se.wireframeLinewidth*Ot()),Dt.setMode(I.LINES)):Dt.setMode(I.TRIANGLES);else if(q.isLine){let Ze=se.linewidth;Ze===void 0&&(Ze=1),He.setLineWidth(Ze*Ot()),q.isLineSegments?Dt.setMode(I.LINES):q.isLineLoop?Dt.setMode(I.LINE_LOOP):Dt.setMode(I.LINE_STRIP)}else q.isPoints?Dt.setMode(I.POINTS):q.isSprite&&Dt.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Xo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ze=q._multiDrawStarts,jt=q._multiDrawCounts,gt=q._multiDrawCount,Un=ze?J.get(ze).bytesPerElement:1,fn=je.get(se).currentProgram.getUniforms();for(let Mn=0;Mn<gt;Mn++)fn.setValue(I,"_gl_DrawID",Mn),Dt.render(Ze[Mn]/Un,jt[Mn])}else if(q.isInstancedMesh)Dt.renderInstances(mt,St,q.count);else if(re.isInstancedBufferGeometry){const Ze=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,jt=Math.min(re.instanceCount,Ze);Dt.renderInstances(mt,St,jt)}else Dt.render(mt,St)};function $n(R,W,re){R.transparent===!0&&R.side===na&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,hi(R,W,re),R.side=qa,R.needsUpdate=!0,hi(R,W,re),R.side=na):hi(R,W,re)}this.compile=function(R,W,re=null){re===null&&(re=R),L=Qe.get(re),L.init(W),H.push(L),re.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(L.pushLight(q),q.castShadow&&L.pushShadow(q))}),R!==re&&R.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(L.pushLight(q),q.castShadow&&L.pushShadow(q))}),L.setupLights();const se=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Te=q.material;if(Te)if(Array.isArray(Te))for(let we=0;we<Te.length;we++){const Be=Te[we];$n(Be,re,q),se.add(Be)}else $n(Te,re,q),se.add(Te)}),L=H.pop(),se},this.compileAsync=function(R,W,re=null){const se=this.compile(R,W,re);return new Promise(q=>{function Te(){if(se.forEach(function(we){je.get(we).currentProgram.isReady()&&se.delete(we)}),se.size===0){q(R);return}setTimeout(Te,10)}rt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let rn=null;function xn(R){rn&&rn(R)}function yn(){di.stop()}function Ui(){di.start()}const di=new L1;di.setAnimationLoop(xn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(R){rn=R,Re.setAnimationLoop(R),R===null?di.stop():di.start()},Re.addEventListener("sessionstart",yn),Re.addEventListener("sessionend",Ui),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(O,R,W,w),L=Qe.get(R,H.length),L.init(W),H.push(L),Je.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$.setFromProjectionMatrix(Je,Ni,W.reversedDepth),Ee=this.localClippingEnabled,me=Ge.init(this.clippingPlanes,Ee),z=Ue.get(R,F.length),z.init(),F.push(z),Re.enabled===!0&&Re.isPresenting===!0){const Te=O.xr.getDepthSensingMesh();Te!==null&&Ns(Te,W,-1/0,O.sortObjects)}Ns(R,W,0,O.sortObjects),z.finish(),O.sortObjects===!0&&z.sort(ee,Se),ct=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ct&&Ae.addToRenderList(z,R),this.info.render.frame++,me===!0&&Ge.beginShadows();const re=L.state.shadowsArray;be.render(re,R,W),me===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=z.opaque,q=z.transmissive;if(L.setupLights(),W.isArrayCamera){const Te=W.cameras;if(q.length>0)for(let we=0,Be=Te.length;we<Be;we++){const ze=Te[we];Us(se,q,R,ze)}ct&&Ae.render(R);for(let we=0,Be=Te.length;we<Be;we++){const ze=Te[we];Ko(z,R,ze,ze.viewport)}}else q.length>0&&Us(se,q,R,W),ct&&Ae.render(R),Ko(z,R,W);w!==null&&N===0&&(st.updateMultisampleRenderTarget(w),st.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(O,R,W),V.resetDefaultState(),j=-1,te=null,H.pop(),H.length>0?(L=H[H.length-1],me===!0&&Ge.setGlobalState(O.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?z=F[F.length-1]:z=null};function Ns(R,W,re,se){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){se&&lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);const we=pe.update(R),Be=R.material;Be.visible&&z.push(R,we,Be,re,lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){const we=pe.update(R),Be=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),lt.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),lt.copy(we.boundingSphere.center)),lt.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(Be)){const ze=we.groups;for(let Ye=0,$e=ze.length;Ye<$e;Ye++){const Xe=ze[Ye],mt=Be[Xe.materialIndex];mt&&mt.visible&&z.push(R,we,mt,re,lt.z,Xe)}}else Be.visible&&z.push(R,we,Be,re,lt.z,null)}}const Te=R.children;for(let we=0,Be=Te.length;we<Be;we++)Ns(Te[we],W,re,se)}function Ko(R,W,re,se){const{opaque:q,transmissive:Te,transparent:we}=R;L.setupLightsView(re),me===!0&&Ge.setGlobalState(O.clippingPlanes,re),se&&He.viewport(ce.copy(se)),q.length>0&&yi(q,W,re),Te.length>0&&yi(Te,W,re),we.length>0&&yi(we,W,re),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Us(R,W,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[se.id]===void 0&&(L.state.transmissionRenderTarget[se.id]=new Mr(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Cs:oa,minFilter:Sr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Te=L.state.transmissionRenderTarget[se.id],we=se.viewport||ce;Te.setSize(we.z*O.transmissionResolutionScale,we.w*O.transmissionResolutionScale);const Be=O.getRenderTarget(),ze=O.getActiveCubeFace(),Ye=O.getActiveMipmapLevel();O.setRenderTarget(Te),O.getClearColor(B),Z=O.getClearAlpha(),Z<1&&O.setClearColor(16777215,.5),O.clear(),ct&&Ae.render(re);const $e=O.toneMapping;O.toneMapping=Xa;const Xe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),L.setupLightsView(se),me===!0&&Ge.setGlobalState(O.clippingPlanes,se),yi(R,re,se),st.updateMultisampleRenderTarget(Te),st.updateRenderTargetMipmap(Te),rt.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Rt=0,St=W.length;Rt<St;Rt++){const Wt=W[Rt],{object:Dt,geometry:Ze,material:jt,group:gt}=Wt;if(jt.side===na&&Dt.layers.test(se.layers)){const Un=jt.side;jt.side=Vn,jt.needsUpdate=!0,Er(Dt,re,se,Ze,jt,gt),jt.side=Un,jt.needsUpdate=!0,mt=!0}}mt===!0&&(st.updateMultisampleRenderTarget(Te),st.updateRenderTargetMipmap(Te))}O.setRenderTarget(Be,ze,Ye),O.setClearColor(B,Z),Xe!==void 0&&(se.viewport=Xe),O.toneMapping=$e}function yi(R,W,re){const se=W.isScene===!0?W.overrideMaterial:null;for(let q=0,Te=R.length;q<Te;q++){const we=R[q],{object:Be,geometry:ze,group:Ye}=we;let $e=we.material;$e.allowOverride===!0&&se!==null&&($e=se),Be.layers.test(re.layers)&&Er(Be,W,re,ze,$e,Ye)}}function Er(R,W,re,se,q,Te){R.onBeforeRender(O,W,re,se,q,Te),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(O,W,re,se,R,Te),q.transparent===!0&&q.side===na&&q.forceSinglePass===!1?(q.side=Vn,q.needsUpdate=!0,O.renderBufferDirect(re,W,se,q,R,Te),q.side=qa,q.needsUpdate=!0,O.renderBufferDirect(re,W,se,q,R,Te),q.side=na):O.renderBufferDirect(re,W,se,q,R,Te),R.onAfterRender(O,W,re,se,q,Te)}function hi(R,W,re){W.isScene!==!0&&(W=Jt);const se=je.get(R),q=L.state.lights,Te=L.state.shadowsArray,we=q.state.version,Be=oe.getParameters(R,q.state,Te,W,re),ze=oe.getProgramCacheKey(Be);let Ye=se.programs;se.environment=R.isMeshStandardMaterial?W.environment:null,se.fog=W.fog,se.envMap=(R.isMeshStandardMaterial?E:U).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ye===void 0&&(R.addEventListener("dispose",it),Ye=new Map,se.programs=Ye);let $e=Ye.get(ze);if($e!==void 0){if(se.currentProgram===$e&&se.lightsStateVersion===we)return fa(R,Be),$e}else Be.uniforms=oe.getUniforms(R),R.onBeforeCompile(Be,O),$e=oe.acquireProgram(Be,ze),Ye.set(ze,$e),se.uniforms=Be.uniforms;const Xe=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ge.uniform),fa(R,Be),se.needsLights=Qo(R),se.lightsStateVersion=we,se.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),se.currentProgram=$e,se.uniformsList=null,$e}function Li(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Uc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function fa(R,W){const re=je.get(R);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function da(R,W,re,se,q){W.isScene!==!0&&(W=Jt),st.resetTextureUnits();const Te=W.fog,we=se.isMeshStandardMaterial?W.environment:null,Be=w===null?O.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:As,ze=(se.isMeshStandardMaterial?E:U).get(se.envMap||we),Ye=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,$e=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Xe=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,Rt=!!re.morphAttributes.color;let St=Xa;se.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(St=O.toneMapping);const Wt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Dt=Wt!==void 0?Wt.length:0,Ze=je.get(se),jt=L.state.lights;if(me===!0&&(Ee===!0||R!==te)){const gn=R===te&&se.id===j;Ge.setState(se,R,gn)}let gt=!1;se.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==jt.state.version||Ze.outputColorSpace!==Be||q.isBatchedMesh&&Ze.batching===!1||!q.isBatchedMesh&&Ze.batching===!0||q.isBatchedMesh&&Ze.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ze.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ze.instancing===!1||!q.isInstancedMesh&&Ze.instancing===!0||q.isSkinnedMesh&&Ze.skinning===!1||!q.isSkinnedMesh&&Ze.skinning===!0||q.isInstancedMesh&&Ze.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ze.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ze.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ze.instancingMorph===!1&&q.morphTexture!==null||Ze.envMap!==ze||se.fog===!0&&Ze.fog!==Te||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ge.numPlanes||Ze.numIntersection!==Ge.numIntersection)||Ze.vertexAlphas!==Ye||Ze.vertexTangents!==$e||Ze.morphTargets!==Xe||Ze.morphNormals!==mt||Ze.morphColors!==Rt||Ze.toneMapping!==St||Ze.morphTargetsCount!==Dt)&&(gt=!0):(gt=!0,Ze.__version=se.version);let Un=Ze.currentProgram;gt===!0&&(Un=hi(se,W,q));let fn=!1,Mn=!1,pa=!1;const Vt=Un.getUniforms(),$t=Ze.uniforms;if(He.useProgram(Un.program)&&(fn=!0,Mn=!0,pa=!0),se.id!==j&&(j=se.id,Mn=!0),fn||te!==R){He.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Vt.setValue(I,"projectionMatrix",R.projectionMatrix),Vt.setValue(I,"viewMatrix",R.matrixWorldInverse);const en=Vt.map.cameraPosition;en!==void 0&&en.setValue(I,ke.setFromMatrixPosition(R.matrixWorld)),Pt.logarithmicDepthBuffer&&Vt.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Vt.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),te!==R&&(te=R,Mn=!0,pa=!0)}if(q.isSkinnedMesh){Vt.setOptional(I,q,"bindMatrix"),Vt.setOptional(I,q,"bindMatrixInverse");const gn=q.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Vt.setValue(I,"boneTexture",gn.boneTexture,st))}q.isBatchedMesh&&(Vt.setOptional(I,q,"batchingTexture"),Vt.setValue(I,"batchingTexture",q._matricesTexture,st),Vt.setOptional(I,q,"batchingIdTexture"),Vt.setValue(I,"batchingIdTexture",q._indirectTexture,st),Vt.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Vt.setValue(I,"batchingColorTexture",q._colorsTexture,st));const Ln=re.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&qe.update(q,re,Un),(Mn||Ze.receiveShadow!==q.receiveShadow)&&(Ze.receiveShadow=q.receiveShadow,Vt.setValue(I,"receiveShadow",q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&($t.envMap.value=ze,$t.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&W.environment!==null&&($t.envMapIntensity.value=W.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=mM()),Mn&&(Vt.setValue(I,"toneMappingExposure",O.toneMappingExposure),Ze.needsLights&&sn($t,pa),Te&&se.fog===!0&&Pe.refreshFogUniforms($t,Te),Pe.refreshMaterialUniforms($t,se,D,_e,L.state.transmissionRenderTarget[R.id]),Uc.upload(I,Li(Ze),$t,st)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Uc.upload(I,Li(Ze),$t,st),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Vt.setValue(I,"center",q.center),Vt.setValue(I,"modelViewMatrix",q.modelViewMatrix),Vt.setValue(I,"normalMatrix",q.normalMatrix),Vt.setValue(I,"modelMatrix",q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const gn=se.uniformsGroups;for(let en=0,Ls=gn.length;en<Ls;en++){const Mi=gn[en];Ne.update(Mi,Un),Ne.bind(Mi,Un)}}return Un}function sn(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Qo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,W,re){const se=je.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),je.get(R.texture).__webglTexture=W,je.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const re=je.get(R);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0};const Jo=I.createFramebuffer();this.setRenderTarget=function(R,W=0,re=0){w=R,ae=W,N=re;let se=!0,q=null,Te=!1,we=!1;if(R){const ze=je.get(R);if(ze.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(I.FRAMEBUFFER,null),se=!1;else if(ze.__webglFramebuffer===void 0)st.setupRenderTarget(R);else if(ze.__hasExternalTextures)st.rebindTextures(R,je.get(R.texture).__webglTexture,je.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(ze.__boundDepthTexture!==Xe){if(Xe!==null&&je.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(R)}}const Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(we=!0);const $e=je.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($e[W])?q=$e[W][re]:q=$e[W],Te=!0):R.samples>0&&st.useMultisampledRTT(R)===!1?q=je.get(R).__webglMultisampledFramebuffer:Array.isArray($e)?q=$e[re]:q=$e,ce.copy(R.viewport),ge.copy(R.scissor),ue=R.scissorTest}else ce.copy(ye).multiplyScalar(D).floor(),ge.copy(De).multiplyScalar(D).floor(),ue=Ve;if(re!==0&&(q=Jo),He.bindFramebuffer(I.FRAMEBUFFER,q)&&se&&He.drawBuffers(R,q),He.viewport(ce),He.scissor(ge),He.setScissorTest(ue),Te){const ze=je.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,re)}else if(we){const ze=W;for(let Ye=0;Ye<R.textures.length;Ye++){const $e=je.get(R.textures[Ye]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ye,$e.__webglTexture,re,ze)}}else if(R!==null&&re!==0){const ze=je.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ze.__webglTexture,re)}j=-1},this.readRenderTargetPixels=function(R,W,re,se,q,Te,we,Be=0){if(!(R&&R.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(ze=ze[we]),ze){He.bindFramebuffer(I.FRAMEBUFFER,ze);try{const Ye=R.textures[Be],$e=Ye.format,Xe=Ye.type;if(!Pt.textureFormatReadable($e)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Xe)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-se&&re>=0&&re<=R.height-q&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Be),I.readPixels(W,re,se,q,nt.convert($e),nt.convert(Xe),Te))}finally{const Ye=w!==null?je.get(w).__webglFramebuffer:null;He.bindFramebuffer(I.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,W,re,se,q,Te,we,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(ze=ze[we]),ze)if(W>=0&&W<=R.width-se&&re>=0&&re<=R.height-q){He.bindFramebuffer(I.FRAMEBUFFER,ze);const Ye=R.textures[Be],$e=Ye.format,Xe=Ye.type;if(!Pt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,mt),I.bufferData(I.PIXEL_PACK_BUFFER,Te.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Be),I.readPixels(W,re,se,q,nt.convert($e),nt.convert(Xe),0);const Rt=w!==null?je.get(w).__webglFramebuffer:null;He.bindFramebuffer(I.FRAMEBUFFER,Rt);const St=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await V2(I,St,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,mt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Te),I.deleteBuffer(mt),I.deleteSync(St),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,re=0){const se=Math.pow(2,-re),q=Math.floor(R.image.width*se),Te=Math.floor(R.image.height*se),we=W!==null?W.x:0,Be=W!==null?W.y:0;st.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,re,0,0,we,Be,q,Te),He.unbindTexture()};const Oi=I.createFramebuffer(),ha=I.createFramebuffer();this.copyTextureToTexture=function(R,W,re=null,se=null,q=0,Te=null){Te===null&&(q!==0?(Xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=q,q=0):Te=0);let we,Be,ze,Ye,$e,Xe,mt,Rt,St;const Wt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(re!==null)we=re.max.x-re.min.x,Be=re.max.y-re.min.y,ze=re.isBox3?re.max.z-re.min.z:1,Ye=re.min.x,$e=re.min.y,Xe=re.isBox3?re.min.z:0;else{const Ln=Math.pow(2,-q);we=Math.floor(Wt.width*Ln),Be=Math.floor(Wt.height*Ln),R.isDataArrayTexture?ze=Wt.depth:R.isData3DTexture?ze=Math.floor(Wt.depth*Ln):ze=1,Ye=0,$e=0,Xe=0}se!==null?(mt=se.x,Rt=se.y,St=se.z):(mt=0,Rt=0,St=0);const Dt=nt.convert(W.format),Ze=nt.convert(W.type);let jt;W.isData3DTexture?(st.setTexture3D(W,0),jt=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(st.setTexture2DArray(W,0),jt=I.TEXTURE_2D_ARRAY):(st.setTexture2D(W,0),jt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const gt=I.getParameter(I.UNPACK_ROW_LENGTH),Un=I.getParameter(I.UNPACK_IMAGE_HEIGHT),fn=I.getParameter(I.UNPACK_SKIP_PIXELS),Mn=I.getParameter(I.UNPACK_SKIP_ROWS),pa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Wt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Wt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,$e),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xe);const Vt=R.isDataArrayTexture||R.isData3DTexture,$t=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Ln=je.get(R),gn=je.get(W),en=je.get(Ln.__renderTarget),Ls=je.get(gn.__renderTarget);He.bindFramebuffer(I.READ_FRAMEBUFFER,en.__webglFramebuffer),He.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let Mi=0;Mi<ze;Mi++)Vt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.get(R).__webglTexture,q,Xe+Mi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.get(W).__webglTexture,Te,St+Mi)),I.blitFramebuffer(Ye,$e,we,Be,mt,Rt,we,Be,I.DEPTH_BUFFER_BIT,I.NEAREST);He.bindFramebuffer(I.READ_FRAMEBUFFER,null),He.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||je.has(R)){const Ln=je.get(R),gn=je.get(W);He.bindFramebuffer(I.READ_FRAMEBUFFER,Oi),He.bindFramebuffer(I.DRAW_FRAMEBUFFER,ha);for(let en=0;en<ze;en++)Vt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ln.__webglTexture,q,Xe+en):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ln.__webglTexture,q),$t?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gn.__webglTexture,Te,St+en):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gn.__webglTexture,Te),q!==0?I.blitFramebuffer(Ye,$e,we,Be,mt,Rt,we,Be,I.COLOR_BUFFER_BIT,I.NEAREST):$t?I.copyTexSubImage3D(jt,Te,mt,Rt,St+en,Ye,$e,we,Be):I.copyTexSubImage2D(jt,Te,mt,Rt,Ye,$e,we,Be);He.bindFramebuffer(I.READ_FRAMEBUFFER,null),He.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else $t?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(jt,Te,mt,Rt,St,we,Be,ze,Dt,Ze,Wt.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(jt,Te,mt,Rt,St,we,Be,ze,Dt,Wt.data):I.texSubImage3D(jt,Te,mt,Rt,St,we,Be,ze,Dt,Ze,Wt):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Te,mt,Rt,we,Be,Dt,Ze,Wt.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Te,mt,Rt,Wt.width,Wt.height,Dt,Wt.data):I.texSubImage2D(I.TEXTURE_2D,Te,mt,Rt,we,Be,Dt,Ze,Wt);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Un),I.pixelStorei(I.UNPACK_SKIP_PIXELS,fn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,pa),Te===0&&W.generateMipmaps&&I.generateMipmap(jt),He.unbindTexture()},this.initRenderTarget=function(R){je.get(R).__webglFramebuffer===void 0&&st.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?st.setTextureCube(R,0):R.isData3DTexture?st.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?st.setTexture2DArray(R,0):st.setTexture2D(R,0),He.unbindTexture()},this.resetState=function(){ae=0,N=0,w=null,He.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const r1=["../../public/Angular.svg","../../public/React.svg","../../public/Spring Boot.svg","../../public/Node.js.svg","../../public/aws.svg","../../public/Python.svg","../../public/Java.svg","../../public/postgresql.svg","../../public/mongodb.svg","../../public/ysql.svg","../../public/Express.js.svg"];function gM(){const o=Io.useRef(null);return Io.useEffect(()=>{const e=o.current;if(!e)return;const i=new pv,r=new ci(75,window.innerWidth/window.innerHeight,.1,1e3),l=new xM({antialias:!0,alpha:!0});l.setPixelRatio(window.devicePixelRatio||1),l.setSize(window.innerWidth,window.innerHeight),e.appendChild(l.domElement);const u=new Bo;i.add(u);const d=new Av,m=Math.max(1,Math.floor(70/r1.length));r1.forEach(A=>{d.load(A,C=>{for(let y=0;y<m;y++){const v=new C1({map:C,transparent:!0,opacity:.9}),z=new xv(v);z.position.set(Math.random()*40-20,Math.random()*40-20,Math.random()*40-20);const L=1.8+Math.random()*1.2;z.scale.set(L,L,1),u.add(z)}},void 0,C=>{console.warn("Failed to load texture:",A,C)})}),r.position.z=32;const p=new wv;let x;const g=()=>{x=requestAnimationFrame(g);const A=p.getElapsedTime();u.rotation.x=A*.12,u.rotation.y=A*.18,u.children.forEach((C,y)=>{const v=A*.8+y;C.position.y+=Math.sin(v)*.004,C.position.x+=Math.cos(v*.6)*.004}),l.render(i,r)};g();const _=A=>{const C=A.clientX/window.innerWidth*2-1,y=-(A.clientY/window.innerHeight)*2+1;u.rotation.y+=C*.0025,u.rotation.x+=y*.0025},M=()=>{const A=window.innerWidth,C=window.innerHeight;r.aspect=A/C,r.updateProjectionMatrix(),l.setSize(A,C)};return document.addEventListener("mousemove",_),window.addEventListener("resize",M),()=>{cancelAnimationFrame(x),document.removeEventListener("mousemove",_),window.removeEventListener("resize",M),e.removeChild(l.domElement),l.dispose()}},[]),b.jsxs("section",{id:"home",className:"relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8",children:[b.jsx("div",{id:"three-container",ref:o}),b.jsxs("div",{className:"text-center max-w-5xl mx-auto",children:[b.jsx("div",{className:"mb-8 animate-float",children:b.jsx("div",{className:"w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 glow",children:"🚀"})}),b.jsxs("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-shadow leading-tight",children:["I help founders turn ideas",b.jsx("br",{}),"into seamless ",b.jsx("span",{className:"gradient-text",children:"digital experiences"})]}),b.jsxs("div",{className:"flex items-center justify-center gap-4 text-xl sm:text-2xl mb-8 flex-wrap",children:[b.jsx("span",{children:"Hello, I'm Shehan Silva"}),b.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm",children:"⚡"}),b.jsx("span",{children:"a Full Stack Engineer"})]}),b.jsxs("div",{className:"flex items-center justify-center gap-6 flex-wrap",children:[b.jsx("a",{href:"#contact",className:"glass px-8 py-4 rounded-full font-semibold hover:bg-white hover:bg-opacity-20 transition-all transform hover:scale-105 flex items-center gap-2",children:"Let's Connect →"}),b.jsx("a",{href:"mailto:marionilanka@gmail.com",className:"text-purple-300 hover:text-white transition-colors flex items-center gap-2",children:"📧 marionilanka@gmail.com"})]}),b.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto",children:[b.jsxs("div",{className:"glass p-6 rounded-2xl text-center",children:[b.jsx("div",{className:"text-3xl font-bold gradient-text",children:"20+"}),b.jsx("div",{className:"text-gray-300 mt-2",children:"Projects Completed"})]}),b.jsxs("div",{className:"glass p-6 rounded-2xl text-center",children:[b.jsx("div",{className:"text-3xl font-bold gradient-text",children:"2+"}),b.jsx("div",{className:"text-gray-300 mt-2",children:"Years Experience"})]}),b.jsxs("div",{className:"glass p-6 rounded-2xl text-center",children:[b.jsx("div",{className:"text-3xl font-bold gradient-text",children:"98%"}),b.jsx("div",{className:"text-gray-300 mt-2",children:"Client Satisfaction"})]})]})]})]})}function vM(){return b.jsx("nav",{className:"fixed top-0 w-full z-50 transition-all duration-300",id:"navbar",children:b.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:b.jsxs("div",{className:"flex justify-between items-center py-4",children:[b.jsx("div",{className:"text-2xl font-bold gradient-text",children:"SS"}),b.jsxs("div",{className:"hidden md:flex space-x-8",children:[b.jsx("a",{href:"#home",className:"nav-link hover:text-purple-400 transition-colors",children:"Home"}),b.jsx("a",{href:"#about",className:"nav-link hover:text-purple-400 transition-colors",children:"About"}),b.jsx("a",{href:"#projects",className:"nav-link hover:text-purple-400 transition-colors",children:"Projects"}),b.jsx("a",{href:"#testimonials",className:"nav-link hover:text-purple-400 transition-colors",children:"Testimonials"}),b.jsx("a",{href:"#contact",className:"nav-link hover:text-purple-400 transition-colors",children:"Contact"})]}),b.jsx("a",{href:"#contact",className:"bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform glow",children:"Book a Call"}),b.jsx("button",{className:"md:hidden p-2",id:"mobile-menu-btn",children:b.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:b.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})})})]})})})}function _M(){return b.jsx("section",{id:"about",className:"py-20 px-4 sm:px-6 lg:px-8",children:b.jsxs("div",{className:"max-w-7xl mx-auto",children:[b.jsxs("div",{className:"text-center mb-16",children:[b.jsx("h2",{className:"text-4xl sm:text-5xl font-bold mb-6 gradient-text",children:"About Me"}),b.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Passionate full-stack developer with expertise in modern web technologies and a keen eye for user experience design."})]}),b.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20",children:[b.jsxs("div",{className:"space-y-6",children:[b.jsxs("div",{className:"glass p-8 rounded-3xl",children:[b.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center",children:"💼"}),b.jsx("h3",{className:"text-2xl font-bold",children:"Collaboration First"})]}),b.jsx("p",{className:"text-gray-300",children:"I prioritize client collaboration, fostering open communication throughout the development process to ensure your vision becomes reality."})]}),b.jsxs("div",{className:"glass p-8 rounded-3xl",children:[b.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center",children:"🌍"}),b.jsx("h3",{className:"text-2xl font-bold",children:"Global Availability"})]}),b.jsx("p",{className:"text-gray-300",children:"Flexible with time zones and committed to maintaining clear communication regardless of geographical boundaries."})]})]}),b.jsxs("div",{className:"glass p-8 rounded-3xl",children:[b.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Tech Stack"}),b.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[b.jsx("div",{className:"group",children:b.jsx("div",{className:"glass p-4 rounded-xl hover:bg-blue-500 hover:bg-opacity-20 transition-all flex justify-center",children:b.jsx("div",{className:"text-2xl mb-2",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 40 40",children:[b.jsx("path",{fill:"#4e7ab5",d:"M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"}),b.jsx("path",{fill:"#4e7ab5",d:"M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"}),b.jsx("path",{fill:"#4e7ab5",d:"M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"}),b.jsx("path",{fill:"#8bb7f0",d:"M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"}),b.jsx("path",{fill:"#4e7ab5",d:"M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"}),b.jsx("path",{fill:"#8bb7f0",d:"M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"}),b.jsx("path",{fill:"#8bb7f0",d:"M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"}),b.jsx("g",{children:b.jsx("path",{fill:"#8bb7f0",d:"M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"})})]})})})}),b.jsx("div",{className:"group",children:b.jsx("div",{className:"glass p-4 rounded-xl hover:bg-green-500 hover:bg-opacity-20 transition-all flex justify-center",children:b.jsx("div",{className:"text-2xl mb-2",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 48 48",children:[b.jsx("path",{fill:"#21a366",d:"M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"}),b.jsx("path",{fill:"#21a366",d:"M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"})]})})})}),b.jsx("div",{className:"group",children:b.jsx("div",{className:"glass p-4 rounded-xl hover:bg-green-600 hover:bg-opacity-20 transition-all flex justify-center",children:b.jsx("div",{className:"text-2xl mb-2",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 40 40",children:[b.jsx("path",{fill:"#fff",d:"M63.266-77.509l-13.88-24.04c-1.96-3.39-5.61-5.5-9.53-5.5h-27.76c-3.92,0-7.57,2.11-9.53,5.5 l-13.88,24.04c-1.96,3.39-1.96,7.61,0,11l13.88,24.04c1.96,3.4,5.61,5.5,9.53,5.5h27.76c3.92,0,7.57-2.1,9.53-5.5l13.88-24.04 C65.226-69.899,65.226-74.119,63.266-77.509z M40.856-58.259c-3.58,3.97-8.49,6.31-13.83,6.59c-0.36,0.02-0.71,0.03-1.07,0.03 c-4.95,0-9.66-1.8-13.37-5.14c-8.2-7.38-8.87-20.06-1.48-28.27c0.57-0.63,1.18-1.23,1.83-1.78c1.25-1.08,3.14-0.94,4.23,0.32 c1.08,1.25,0.93,3.15-0.33,4.23c-0.44,0.38-0.87,0.8-1.27,1.25c-5.17,5.74-4.71,14.62,1.04,19.79c2.78,2.51,6.36,3.78,10.11,3.58 c3.74-0.2,7.18-1.84,9.68-4.62c5.17-5.74,4.7-14.62-1.04-19.79c-1.23-1.11-1.33-3.01-0.22-4.24c1.11-1.23,3-1.33,4.24-0.22 C47.576-79.149,48.236-66.469,40.856-58.259z M22.976-73.039v-16.96c0-1.66,1.35-3,3-3c1.66,0,3,1.34,3,3v16.96c0,1.65-1.34,3-3,3 c-0.82,0-1.58-0.34-2.12-0.88C23.316-71.459,22.976-72.219,22.976-73.039z M38.096,16.701l-6.2-10.5 c-0.56-0.95-1.35-1.73-2.27-2.27l-0.16-0.28h-0.34c-0.87-0.42-1.84-0.65-2.83-0.65h-12.63c-1,0-1.96,0.23-2.83,0.65h-0.44 l-0.22,0.37c-0.85,0.54-1.58,1.28-2.11,2.18l-6.2,10.5c-0.57,0.97-0.87,2.04-0.9,3.12l-0.1,0.18l0.1,0.18 c0.03,1.08,0.33,2.15,0.9,3.12l6.2,10.5c0.53,0.9,1.26,1.64,2.12,2.18l0.21,0.36h0.42c0.88,0.43,1.84,0.66,2.85,0.66h12.63 c1,0,1.97-0.23,2.85-0.66h0.32l0.15-0.26c0.93-0.55,1.72-1.32,2.28-2.28l6.2-10.5c0.6-1.02,0.9-2.16,0.9-3.3 S38.696,17.721,38.096,16.701z M15.656,25.071c2.66,2.4,6.78,2.18,9.17-0.48c2.4-2.66,2.18-6.78-0.48-9.17 c-0.62-0.56-0.67-1.51-0.11-2.12c0.55-0.62,1.5-0.67,2.12-0.11c3.89,3.5,4.2,9.52,0.7,13.41c-1.87,2.08-4.46,3.14-7.06,3.14 c-2.27,0-4.54-0.81-6.35-2.44c-3.89-3.5-4.21-9.52-0.7-13.41c0.27-0.3,0.56-0.59,0.86-0.85c0.63-0.54,1.58-0.46,2.12,0.16 c0.54,0.63,0.47,1.58-0.16,2.12c-0.21,0.18-0.41,0.37-0.6,0.58C12.776,18.561,12.996,22.681,15.656,25.071z M18.496,18.501v-7 c0-0.83,0.68-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5v7c0,0.83-0.67,1.5-1.5,1.5C19.176,20.001,18.496,19.331,18.496,18.501z M33.126,85.461c-0.07-0.77-0.3-1.52-0.7-2.21l-4.33-7.5c-0.4-0.7-0.94-1.28-1.58-1.73l-0.3-0.52h-0.6 c-0.71-0.33-1.48-0.5-2.28-0.5h-8.66c-0.8,0-1.57,0.17-2.28,0.5h-0.6l-0.3,0.52c-0.64,0.45-1.18,1.03-1.58,1.73l-4.33,7.5 c-0.4,0.69-0.63,1.44-0.7,2.21l-0.3,0.52l0.29,0.51c0.07,0.78,0.3,1.56,0.71,2.26l4.33,7.5c0.41,0.71,0.97,1.31,1.62,1.76 l0.26,0.45h0.51c0.73,0.35,1.54,0.54,2.37,0.54h8.66c0.83,0,1.64-0.19,2.37-0.54h0.51l0.26-0.45c0.65-0.45,1.21-1.05,1.62-1.76 l4.33-7.5c0.41-0.7,0.64-1.48,0.71-2.26l0.29-0.51L33.126,85.461z M16.036,89.511c1.82,1.63,4.63,1.49,6.26-0.33 c1.64-1.82,1.49-4.62-0.33-6.26c-0.46-0.42-0.49-1.13-0.08-1.59c0.42-0.46,1.13-0.5,1.59-0.08c2.74,2.46,2.96,6.7,0.5,9.44 c-1.2,1.32-2.84,2.11-4.62,2.2c-0.12,0.01-0.24,0.01-0.36,0.01c-1.65,0-3.23-0.6-4.46-1.72c-1.33-1.19-2.11-2.83-2.21-4.61 c-0.09-1.79,0.52-3.5,1.71-4.83c0.19-0.21,0.39-0.41,0.61-0.59c0.47-0.41,1.18-0.35,1.59,0.12c0.4,0.47,0.35,1.18-0.12,1.58 c-0.15,0.13-0.28,0.26-0.41,0.4c-0.79,0.88-1.19,2.01-1.13,3.2C14.636,87.631,15.156,88.721,16.036,89.511z M17.876,85.851v-5.73 c0-0.62,0.51-1.12,1.13-1.12s1.12,0.5,1.12,1.12v5.73c0,0.62-0.5,1.13-1.12,1.13S17.876,86.471,17.876,85.851z M25.636,129.631 c-0.05-0.49-0.21-0.97-0.47-1.41l-2.05-3.49c-0.26-0.43-0.6-0.8-1.01-1.08l-0.18-0.3h-0.34c-0.46-0.23-0.97-0.35-1.49-0.35h-4.22 c-0.52,0-1.03,0.12-1.49,0.35h-0.26l-0.13,0.22c-0.46,0.28-0.85,0.68-1.13,1.16l-2.06,3.49c-0.29,0.49-0.45,1.02-0.48,1.57 l-0.11,0.19l0.11,0.19c0.02,0.56,0.18,1.11,0.48,1.61l2.06,3.49c0.29,0.49,0.69,0.9,1.17,1.19l0.09,0.15h0.18 c0.48,0.26,1.02,0.39,1.57,0.39h4.22c0.56,0,1.1-0.14,1.58-0.39h0.25l0.14-0.23c0.42-0.28,0.78-0.66,1.05-1.11l2.05-3.49 c0.27-0.45,0.43-0.95,0.47-1.46l0.2-0.34L25.636,129.631z M16.366,131.891c0.48,0.44,1.08,0.66,1.74,0.62 c0.64-0.03,1.24-0.32,1.67-0.8c0.43-0.47,0.65-1.09,0.62-1.74c-0.04-0.64-0.32-1.23-0.8-1.67c-0.25-0.22-0.27-0.6-0.04-0.84 c0.22-0.25,0.6-0.27,0.84-0.05c0.72,0.65,1.14,1.53,1.19,2.5c0.06,0.96-0.27,1.89-0.92,2.61c-0.64,0.72-1.53,1.14-2.5,1.19h-0.19 c-0.89,0-1.75-0.32-2.41-0.92c-0.72-0.65-1.15-1.54-1.2-2.5c-0.05-0.97,0.28-1.89,0.93-2.61c0.1-0.11,0.21-0.22,0.32-0.32 c0.25-0.22,0.63-0.19,0.85,0.06c0.22,0.25,0.19,0.63-0.06,0.84c-0.08,0.07-0.15,0.14-0.22,0.22c-0.43,0.48-0.65,1.1-0.62,1.74 C15.606,130.871,15.886,131.461,16.366,131.891z M17.376,130.001v-2.95c0-0.33,0.27-0.6,0.6-0.6c0.34,0,0.6,0.27,0.6,0.6v2.95 c0,0.33-0.26,0.6-0.6,0.6C17.646,130.601,17.376,130.331,17.376,130.001z"}),b.jsx("path",{fill:"#bae0bd",d:"M29.626,3.931l-0.16-0.28h-19.07l-0.22,0.37l-9.21,15.8l-0.1,0.18l0.1,0.18l9.22,15.8l0.21,0.36 h19.07l0.15-0.26l9.38-16.08L29.626,3.931z M27.056,26.601c-1.87,2.08-4.46,3.14-7.06,3.14c-2.27,0-4.54-0.81-6.35-2.44 c-3.89-3.5-4.21-9.52-0.7-13.41c0.27-0.3,0.56-0.59,0.86-0.85c0.63-0.54,1.58-0.46,2.12,0.16c0.54,0.63,0.47,1.58-0.16,2.12 c-0.21,0.18-0.41,0.37-0.6,0.58c-2.39,2.66-2.17,6.78,0.49,9.17c2.66,2.4,6.78,2.18,9.17-0.48c2.4-2.66,2.18-6.78-0.48-9.17 c-0.62-0.56-0.67-1.51-0.11-2.12c0.55-0.62,1.5-0.67,2.12-0.11C30.246,16.691,30.556,22.711,27.056,26.601z M21.496,11.501v7 c0,0.83-0.67,1.5-1.5,1.5c-0.82,0-1.5-0.67-1.5-1.5v-7c0-0.83,0.68-1.5,1.5-1.5C20.826,10.001,21.496,10.671,21.496,11.501z"}),b.jsx("path",{fill:"#5e9c76",d:"M38.096,16.701l-6.2-10.5c-0.56-0.95-1.35-1.73-2.27-2.27c-0.16-0.11-0.33-0.2-0.5-0.28 c-0.87-0.42-1.84-0.65-2.83-0.65h-12.63c-1,0-1.96,0.23-2.83,0.65c-0.23,0.11-0.45,0.23-0.66,0.37c-0.85,0.54-1.58,1.28-2.11,2.18 l-6.2,10.5c-0.57,0.97-0.87,2.04-0.9,3.12v0.36c0.03,1.08,0.33,2.15,0.9,3.12l6.2,10.5c0.53,0.9,1.26,1.64,2.12,2.18 c0.2,0.14,0.41,0.25,0.63,0.36c0.88,0.43,1.84,0.66,2.85,0.66h12.63c1,0,1.97-0.23,2.85-0.66c0.16-0.08,0.32-0.16,0.47-0.26 c0.93-0.55,1.72-1.32,2.28-2.28l6.2-10.5c0.6-1.02,0.9-2.16,0.9-3.3S38.696,17.721,38.096,16.701z M26.296,36.001h-12.63 c-1.94,0-3.75-1.04-4.74-2.7l-6.2-10.5c-1.02-1.73-1.02-3.87,0-5.6l6.2-10.5c0.99-1.66,2.8-2.7,4.74-2.7h12.63 c1.94,0,3.75,1.04,4.74,2.7l6.2,10.5c1.01,1.73,1.01,3.87,0,5.6l-6.2,10.5C30.046,34.961,28.236,36.001,26.296,36.001z"})]})})})}),b.jsx("div",{className:"group",children:b.jsx("div",{className:"glass p-4 rounded-xl hover:bg-gray-600 hover:bg-opacity-20 transition-all flex justify-center",children:b.jsx("div",{className:"text-2xl mb-2",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 48 48",children:[b.jsx("path",{fill:"#212121",d:"M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"}),b.jsx("path",{fill:"#212121",d:"M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"})]})})})}),b.jsx("div",{className:"group",children:b.jsx("div",{className:"glass p-4 rounded-xl hover:bg-red-500 hover:bg-opacity-20 transition-all flex justify-center",children:b.jsx("div",{className:"text-2xl mb-2",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 48 48",children:[b.jsx("path",{fill:"#bdbdbd",d:"M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"}),b.jsx("path",{fill:"#b71c1c",d:"M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"}),b.jsx("path",{fill:"#dd2c00",d:"M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"}),b.jsx("path",{fill:"#bdbdbd",d:"M24 5.996L24 15.504 32.578 34 36.987 34z"}),b.jsx("path",{fill:"#eee",d:"M11.013 34L15.422 34 24 15.504 24 5.996z"}),b.jsx("path",{fill:"#bdbdbd",d:"M24 24H30V28H24z"}),b.jsx("path",{fill:"#eee",d:"M18 24H24V28H18z"})]})})})}),b.jsx("div",{className:"group",children:b.jsx("div",{className:"glass p-4 rounded-xl hover:bg-blue-600 hover:bg-opacity-20 transition-all flex justify-center",children:b.jsx("div",{className:"text-2xl mb-2",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 48 48",children:[b.jsx("path",{fill:"#00796b",d:"M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"}),b.jsx("path",{fill:"#00796b",d:"M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"}),b.jsx("path",{fill:"#f57f17",d:"M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"}),b.jsx("path",{fill:"#f57f17",d:"M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"}),b.jsx("path",{fill:"#f57f17",d:"M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"}),b.jsx("path",{fill:"#00796b",d:"M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"}),b.jsx("path",{fill:"#00796b",d:"M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"})]})})})}),b.jsx("div",{className:"group",children:b.jsx("div",{className:"glass p-4 rounded-xl hover:bg-blue-700 hover:bg-opacity-20 transition-all flex justify-center",children:b.jsx("div",{className:"text-2xl mb-2",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 48 48",children:[b.jsx("path",{fill:"#fff",d:"M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"}),b.jsx("path",{fill:"#0277bd",d:"M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"}),b.jsx("path",{fill:"#0277bd",d:"M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"}),b.jsx("path",{fill:"#0277bd",d:"M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"})]})})})}),b.jsx("div",{className:"group",children:b.jsx("div",{className:"glass p-4 rounded-xl hover:bg-orange-500 hover:bg-opacity-20 transition-all flex justify-center",children:b.jsx("div",{className:"text-2xl mb-2",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 48 48",children:[b.jsx("path",{fill:"#252f3e",d:"M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"}),b.jsx("path",{fill:"#f90",d:"M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"})]})})})}),b.jsx("div",{className:"group",children:b.jsx("div",{className:"glass p-4 rounded-xl hover:bg-green-700 hover:bg-opacity-20 transition-all flex justify-center",children:b.jsx("div",{className:"text-2xl mb-2",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 48 48",children:[b.jsx("path",{fill:"#5d4037",d:"M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"}),b.jsx("path",{fill:"#4caf50",d:"M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"}),b.jsx("path",{fill:"#dcedc8",d:"M23 28H25V36H23z"}),b.jsx("path",{fill:"#4caf50",d:"M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"}),b.jsx("path",{fill:"#81c784",d:"M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"})]})})})}),b.jsx("div",{className:"group",children:b.jsx("div",{className:"glass p-4 rounded-xl hover:bg-blue-800 hover:bg-opacity-20 transition-all flex justify-center",children:b.jsx("div",{className:"text-2xl mb-2",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 48 48",children:[b.jsx("path",{fill:"#0277BD",d:"M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"}),b.jsx("path",{fill:"#FFC107",d:"M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"})]})})})}),b.jsx("div",{className:"group",children:b.jsx("div",{className:"glass p-4 rounded-xl hover:bg-indigo-500 hover:bg-opacity-20 transition-all flex justify-center",children:b.jsx("div",{className:"text-2xl mb-2",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 48 48",children:[b.jsxs("linearGradient",{id:"NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1",x1:"24",x2:"24",y1:"43.734",y2:"4.266",gradientUnits:"userSpaceOnUse",children:[b.jsx("stop",{offset:"0","stop-color":"#0a070a"}),b.jsx("stop",{offset:".465","stop-color":"#2b2b2b"}),b.jsx("stop",{offset:"1","stop-color":"#4b4b4b"})]}),b.jsx("circle",{cx:"24",cy:"24",r:"19.734",fill:"url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"}),b.jsx("rect",{width:"3.023",height:"15.996",x:"15.992",y:"16.027",fill:"#fff"}),b.jsxs("linearGradient",{id:"NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2",x1:"30.512",x2:"30.512",y1:"33.021",y2:"18.431",gradientUnits:"userSpaceOnUse",children:[b.jsx("stop",{offset:".377","stop-color":"#fff","stop-opacity":"0"}),b.jsx("stop",{offset:".666","stop-color":"#fff","stop-opacity":".3"}),b.jsx("stop",{offset:".988","stop-color":"#fff"})]}),b.jsx("rect",{width:"2.953",height:"14.59",x:"29.035",y:"15.957",fill:"url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"}),b.jsxs("linearGradient",{id:"NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3",x1:"22.102",x2:"36.661",y1:"21.443",y2:"40.529",gradientUnits:"userSpaceOnUse",children:[b.jsx("stop",{offset:".296","stop-color":"#fff"}),b.jsx("stop",{offset:".521","stop-color":"#fff","stop-opacity":".5"}),b.jsx("stop",{offset:".838","stop-color":"#fff","stop-opacity":"0"})]}),b.jsx("polygon",{fill:"url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)",points:"36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"})]})})})}),b.jsx("div",{className:"group",children:b.jsx("div",{className:"glass p-4 rounded-xl hover:bg-indigo-500 hover:bg-opacity-20 transition-all flex justify-center",children:b.jsx("div",{className:"text-2xl mb-2",children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 48 48",children:[b.jsx("path",{fill:"#F44336",d:"M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"}),b.jsx("path",{fill:"#F44336",d:"M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"}),b.jsxs("g",{children:[b.jsx("path",{fill:"#1565C0",d:"M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"}),b.jsx("path",{fill:"#1565C0",d:"M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"}),b.jsx("path",{fill:"#1565C0",d:"M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"}),b.jsx("path",{fill:"#1565C0",d:"M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"}),b.jsx("path",{fill:"#1565C0",d:"M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"})]})]})})})})]})]})]}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[b.jsxs("div",{className:"glass p-8 rounded-3xl hover:scale-105 transition-transform",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4",children:"🚀"}),b.jsx("h3",{className:"text-xl font-bold mb-3",children:"Full Stack Development"}),b.jsx("p",{className:"text-gray-300",children:"End-to-end web application development with modern technologies and best practices."})]}),b.jsxs("div",{className:"glass p-8 rounded-3xl hover:scale-105 transition-transform",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4",children:"📊"}),b.jsx("h3",{className:"text-xl font-bold mb-3",children:"API Development"}),b.jsx("p",{className:"text-gray-300",children:"RESTful API design and development with proper documentation and security."})]}),b.jsxs("div",{className:"glass p-8 rounded-3xl hover:scale-105 transition-transform",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4",children:"🎨"}),b.jsx("h3",{className:"text-xl font-bold mb-3",children:"UI/UX Design"}),b.jsx("p",{className:"text-gray-300",children:"User-centered design with focus on accessibility and modern aesthetics."})]}),b.jsxs("div",{className:"glass p-8 rounded-3xl hover:scale-105 transition-transform",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4",children:"☁️"}),b.jsx("h3",{className:"text-xl font-bold mb-3",children:"Cloud Solutions"}),b.jsx("p",{className:"text-gray-300",children:"Scalable cloud infrastructure and deployment strategies."})]}),b.jsxs("div",{className:"glass p-8 rounded-3xl hover:scale-105 transition-transform",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4",children:"⚙️"}),b.jsx("h3",{className:"text-xl font-bold mb-3",children:"DevOps & Cloud"}),b.jsx("p",{className:"text-gray-300",children:"CI/CD pipelines, containerization, cloud infrastructure, and reliable deployments for your applications."})]}),b.jsxs("div",{className:"glass p-8 rounded-3xl hover:scale-105 transition-transform",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4",children:"🤖"}),b.jsx("h3",{className:"text-xl font-bold mb-3",children:"AI & Automation"}),b.jsx("p",{className:"text-gray-300",children:"AI-powered features, intelligent automation, and integrations to make your products smarter and more efficient."})]})]})]})})}function SM(){const[o,e]=Io.useState("all"),i=Io.useMemo(()=>[{title:"Smart-Stock Prime Inventory Management System",description:"Full-stack inventory management system for tracking products, stock levels, suppliers, and sales with an admin dashboard and REST API.",categories:["web"],tags:["React","Node.js","Express","MongoDB"],emoji:"📦",gradient:"from-purple-600 to-pink-600",links:{github:"https://github.com/MarioShehan22/Smart-Stock-Prime-Inventory-Management-System"}},{title:"Vehicle Parking (Smart Parking System)",description:"IoT-based smart parking management system using ESP8266/Arduino + Node.js + MongoDB + React to monitor slots and manage parking in real time.",categories:["web"],tags:["ESP8266","Node.js","MongoDB","React"],emoji:"🚗",gradient:"from-blue-600 to-cyan-600",featured:!0,links:{github:"https://github.com/MarioShehan22/Vehicle_Parking"}},{title:"Nutrition-Fitness (NutriFit)",description:"Health & fitness tracking web app for logging meals and workouts, calculating BMI/macros, and generating personalized nutrition insights.",categories:["web","ai"],tags:["MERN","React","Node.js","MongoDB"],emoji:"🥗",gradient:"from-green-500 to-emerald-600",featured:!0,links:{github:"https://github.com/MarioShehan22/Nutrition-Fitness"}},{title:"Richlook Web Project",description:"Full-stack web application with a separate frontend and backend for managing core business workflows, built with modern web technologies.",categories:["web"],tags:["Frontend","Backend","JavaScript"],emoji:"💎",gradient:"from-orange-500 to-red-500",links:{github:"https://github.com/MarioShehan22/richlook_Web_Project"}},{title:"MERN Supply & Demand App",description:"MERN-based supply & demand management app for listing items, matching requests, tracking availability, and managing records through a responsive dashboard.",categories:["web"],tags:["MongoDB","Express","React","Node.js"],emoji:"📈",gradient:"from-teal-500 to-lime-500",links:{github:"https://github.com/MarioShehan22/MERN_Supply_Demand"}}],[]),r=m=>o==="all"||m.includes(o),l=i.filter(m=>m.featured&&r(m.categories)),u=i.filter(m=>!m.featured&&r(m.categories)),d=m=>m==="all"?"All":m==="web"?"Web Apps":m==="mobile"?"Mobile":"AI / Automation",h=({links:m})=>m?b.jsxs("div",{className:"flex gap-4",children:[m.demo&&b.jsxs("a",{href:m.demo,target:"_blank",rel:"noreferrer",className:"text-purple-400 hover:text-white transition-colors flex items-center gap-2",children:[b.jsx("span",{children:"Live Demo"}),b.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]}),m.caseStudy&&b.jsxs("a",{href:m.caseStudy,target:"_blank",rel:"noreferrer",className:"text-blue-400 hover:text-white transition-colors flex items-center gap-2",children:[b.jsx("span",{children:"Case Study"}),b.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]}),m.github&&b.jsxs("a",{href:m.github,target:"_blank",rel:"noreferrer",className:"text-gray-400 hover:text-white transition-colors flex items-center gap-2",children:[b.jsx("span",{children:"GitHub"}),b.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:b.jsx("path",{fillRule:"evenodd",d:"M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",clipRule:"evenodd"})})]})]}):null;return b.jsx("section",{id:"projects",className:"py-20 px-4 sm:px-6 lg:px-8",children:b.jsxs("div",{className:"max-w-7xl mx-auto",children:[b.jsxs("div",{className:"text-center mb-10",children:[b.jsx("h2",{className:"text-4xl sm:text-5xl font-bold mb-6 gradient-text",children:"Featured Projects"}),b.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Showcasing some of my recent work that demonstrates technical excellence and creative problem-solving."})]}),b.jsx("div",{className:"flex justify-center gap-3 flex-wrap mb-12",children:["all","web","mobile","ai"].map(m=>b.jsx("button",{className:`project-tab px-4 py-2 rounded-full text-sm font-semibold ${o===m?"bg-purple-600 text-white shadow-lg":"bg-gray-800 text-gray-300 hover:bg-gray-700"}`,onClick:()=>e(m),children:d(m)},m))}),b.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12",children:l.map(m=>b.jsxs("div",{className:"glass p-8 rounded-3xl hover:scale-105 transition-transform group project-card",children:[b.jsx("div",{className:`aspect-video bg-gradient-to-br ${m.gradient} rounded-2xl mb-6 flex items-center justify-center`,children:b.jsx("div",{className:"text-6xl",children:m.emoji})}),b.jsx("h3",{className:"text-2xl font-bold mb-4",children:m.title}),b.jsx("p",{className:"text-gray-300 mb-6",children:m.description}),b.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:m.tags.map(p=>b.jsx("span",{className:"px-3 py-1 bg-black bg-opacity-10 rounded-full text-gray-200 text-sm",children:p},p))}),b.jsx(h,{links:m.links})]},m.title))}),u.length===0?b.jsx("div",{className:"text-center text-gray-400",children:"No projects in this category yet."}):b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:u.map(m=>b.jsxs("div",{className:"glass p-6 rounded-2xl hover:scale-105 transition-transform project-card",children:[b.jsx("div",{className:`w-16 h-16 bg-gradient-to-r ${m.gradient} rounded-2xl flex items-center justify-center mb-4`,children:b.jsx("div",{className:"text-2xl",children:m.emoji})}),b.jsx("h4",{className:"text-lg font-bold mb-2",children:m.title}),b.jsx("p",{className:"text-gray-300 text-sm mb-4",children:m.description}),b.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:m.tags.slice(0,3).map(p=>b.jsx("span",{className:"px-3 py-1 bg-black bg-opacity-10 rounded-full text-gray-200 text-xs",children:p},p))}),b.jsx(h,{links:m.links})]},m.title))})]})})}function bM(){return b.jsx("section",{id:"testimonials",className:"py-20 px-4 sm:px-6 lg:px-8",children:b.jsxs("div",{className:"max-w-7xl mx-auto",children:[b.jsxs("div",{className:"text-center mb-16",children:[b.jsx("h2",{className:"text-4xl sm:text-5xl font-bold mb-6 gradient-text",children:"What Clients Say"}),b.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Don't just take my word for it - here's what some of my clients have to say about working with me."})]}),b.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[b.jsxs("div",{className:"glass p-8 rounded-3xl",children:[b.jsxs("div",{className:"flex items-center mb-6",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4",children:"A"}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-bold",children:"Alex Johnson"}),b.jsx("p",{className:"text-gray-400 text-sm",children:"CEO, TechStart"})]})]}),b.jsx("div",{className:"mb-4",children:b.jsx("div",{className:"flex text-yellow-400",children:"★★★★★"})}),b.jsx("p",{className:"text-gray-300 italic",children:'"Shehan delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient."'})]}),b.jsxs("div",{className:"glass p-8 rounded-3xl",children:[b.jsxs("div",{className:"flex items-center mb-6",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4",children:"S"}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-bold",children:"Sarah Chen"}),b.jsx("p",{className:"text-gray-400 text-sm",children:"Founder, EcoMarket"})]})]}),b.jsx("div",{className:"mb-4",children:b.jsx("div",{className:"flex text-yellow-400",children:"★★★★★"})}),b.jsx("p",{className:"text-gray-300 italic",children:'"Working with Shehan was a game-changer for our startup. He not only built our e-commerce platform but also provided valuable insights on user experience and scalability."'})]}),b.jsxs("div",{className:"glass p-8 rounded-3xl",children:[b.jsxs("div",{className:"flex items-center mb-6",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4",children:"M"}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-bold",children:"Michael Rodriguez"}),b.jsx("p",{className:"text-gray-400 text-sm",children:"CTO, DataFlow"})]})]}),b.jsx("div",{className:"mb-4",children:b.jsx("div",{className:"flex text-yellow-400",children:"★★★★★"})}),b.jsx("p",{className:"text-gray-300 italic",children:`"Shehan's full-stack expertise helped us build a robust analytics dashboard. His code quality and documentation are top-notch, making future maintenance a breeze."`})]})]}),b.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16",children:[b.jsxs("div",{className:"text-center",children:[b.jsx("div",{className:"text-4xl font-bold gradient-text mb-2",children:"100%"}),b.jsx("div",{className:"text-gray-300",children:"Project Success Rate"})]}),b.jsxs("div",{className:"text-center",children:[b.jsx("div",{className:"text-4xl font-bold gradient-text mb-2",children:"48h"}),b.jsx("div",{className:"text-gray-300",children:"Avg. Response Time"})]}),b.jsxs("div",{className:"text-center",children:[b.jsx("div",{className:"text-4xl font-bold gradient-text mb-2",children:"25+"}),b.jsx("div",{className:"text-gray-300",children:"Happy Clients"})]}),b.jsxs("div",{className:"text-center",children:[b.jsx("div",{className:"text-4xl font-bold gradient-text mb-2",children:"3+"}),b.jsx("div",{className:"text-gray-300",children:"Years Partnership"})]})]})]})})}function yM(){return b.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8",children:b.jsxs("div",{className:"max-w-7xl mx-auto",children:[b.jsxs("div",{className:"text-center mb-16",children:[b.jsx("h2",{className:"text-4xl sm:text-5xl font-bold mb-6 gradient-text",children:"Let's Work Together"}),b.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Ready to bring your ideas to life? Let's discuss your project and see how I can help you achieve your goals."})]}),b.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[b.jsxs("div",{className:"glass p-8 rounded-3xl",children:[b.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Send me a message"}),b.jsxs("form",{className:"space-y-6",id:"contact-form",children:[b.jsxs("div",{children:[b.jsx("label",{htmlFor:"name",className:"block text-sm font-medium mb-2",children:"Your Name"}),b.jsx("input",{type:"text",id:"name",name:"name",required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"})]}),b.jsxs("div",{children:[b.jsx("label",{htmlFor:"email",className:"block text-sm font-medium mb-2",children:"Email Address"}),b.jsx("input",{type:"email",id:"email",name:"email",required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"})]}),b.jsxs("div",{children:[b.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium mb-2",children:"Subject"}),b.jsxs("select",{id:"subject",name:"subject",required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",children:[b.jsx("option",{value:"",children:"Select a subject"}),b.jsx("option",{value:"web-development",children:"Web Development"}),b.jsx("option",{value:"mobile-app",children:"Mobile App Development"}),b.jsx("option",{value:"consultation",children:"Technical Consultation"}),b.jsx("option",{value:"maintenance",children:"Maintenance & Support"}),b.jsx("option",{value:"other",children:"Other"})]})]}),b.jsxs("div",{children:[b.jsx("label",{htmlFor:"message",className:"block text-sm font-medium mb-2",children:"Project Details"}),b.jsx("textarea",{id:"message",name:"message",rows:6,required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",placeholder:"Tell me about your project, timeline, and requirements..."})]}),b.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold hover:scale-105 transition-transform glow",children:"Send Message 🚀"})]})]}),b.jsxs("div",{className:"space-y-8",children:[b.jsxs("div",{className:"glass p-8 rounded-3xl",children:[b.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Get in touch"}),b.jsxs("div",{className:"space-y-4",children:[b.jsxs("a",{href:"mailto:marioshehan025@gmail.com",className:"flex items-center gap-4 p-4 glass-dark rounded-2xl hover:bg-purple-500 hover:bg-opacity-20 transition-colors",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center",children:"📧"}),b.jsxs("div",{children:[b.jsx("div",{className:"font-semibold",children:"Email"}),b.jsx("div",{className:"text-gray-300",children:"marioshehan025@gmail.com"})]})]}),b.jsxs("a",{href:"tel:+94123456789",className:"flex items-center gap-4 p-4 glass-dark rounded-2xl hover:bg-blue-500 hover:bg-opacity-20 transition-colors",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center",children:"📞"}),b.jsxs("div",{children:[b.jsx("div",{className:"font-semibold",children:"Phone"}),b.jsx("div",{className:"text-gray-300",children:"+94 12 345 6789"})]})]}),b.jsxs("div",{className:"flex items-center gap-4 p-4 glass-dark rounded-2xl",children:[b.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center",children:"🌍"}),b.jsxs("div",{children:[b.jsx("div",{className:"font-semibold",children:"Location"}),b.jsx("div",{className:"text-gray-300",children:"Jaela, Sri Lanka"})]})]})]})]}),b.jsxs("div",{className:"glass p-8 rounded-3xl",children:[b.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Availability"}),b.jsxs("div",{className:"space-y-3",children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("span",{children:"Monday - Friday"}),b.jsx("span",{className:"text-green-400",children:"9:00 AM - 6:00 PM"})]}),b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("span",{children:"Saturday"}),b.jsx("span",{className:"text-yellow-400",children:"10:00 AM - 4:00 PM"})]}),b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("span",{children:"Sunday"}),b.jsx("span",{className:"text-red-400",children:"Emergency Only"})]})]}),b.jsx("div",{className:"mt-4 p-3 bg-green-500 bg-opacity-20 rounded-xl border border-green-500 border-opacity-30",children:b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full"}),b.jsx("span",{className:"text-green-300",children:"Currently available for new projects"})]})})]}),b.jsxs("div",{className:"glass p-8 rounded-3xl",children:[b.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Connect with me"}),b.jsxs("div",{className:"flex flex-wrap gap-4",children:[b.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 glass-dark rounded-xl hover:bg-blue-500 hover:bg-opacity-20 transition-colors",children:[b.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:b.jsx("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"})}),b.jsx("span",{children:"Twitter"})]}),b.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 glass-dark rounded-xl hover:bg-blue-600 hover:bg-opacity-20 transition-colors",children:[b.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:b.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),b.jsx("span",{children:"LinkedIn"})]}),b.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 glass-dark rounded-xl hover:bg-gray-600 hover:bg-opacity-20 transition-colors",children:[b.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:b.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),b.jsx("span",{children:"GitHub"})]})]})]})]})]})]})})}const MM=()=>b.jsx("footer",{className:"glass-dark py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800",children:b.jsxs("div",{className:"max-w-7xl mx-auto",children:[b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[b.jsxs("div",{className:"col-span-1 md:col-span-2",children:[b.jsx("div",{className:"text-2xl font-bold gradient-text mb-4",children:"Shehan Silva"}),b.jsx("p",{className:"text-gray-300 mb-6 max-w-md",children:"Full-stack developer passionate about creating exceptional digital experiences that drive business growth and user engagement."}),b.jsxs("div",{className:"flex gap-4",children:[b.jsx("a",{href:"https://stackoverflow.com/users/21095248/shehan-mario",className:"w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-purple-500 hover:bg-opacity-20 transition-colors",children:b.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:b.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.1348 2.50733C14.8547 2.03139 14.2379 1.86617 13.7573 2.13828C13.2767 2.4104 13.1143 3.01681 13.3945 3.49274L17.6136 10.6594L11.7009 4.86089C11.3066 4.47419 10.6673 4.47419 10.273 4.86089C9.87866 5.24759 9.87866 5.87455 10.273 6.26125L16.2673 12.1399L9.02076 8.03684C8.54016 7.76473 7.92342 7.92995 7.64323 8.40589C7.36304 8.88182 7.5255 9.48823 8.0061 9.76035L15.4385 13.9686L7.26356 11.8204C6.72941 11.6801 6.1784 11.9982 6.03283 12.5309C5.88727 13.0637 6.20229 13.6093 6.73644 13.7497L15.3001 16H7C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17C18 16.6823 17.8519 16.3993 17.6209 16.2161C17.7958 16.086 17.93 15.8989 17.9917 15.6734C18.0661 15.4009 18.0201 15.125 17.8858 14.9017C18.0828 14.82 18.2557 14.6766 18.3713 14.4802C18.5095 14.2455 18.54 13.9791 18.4779 13.7368C18.6834 13.7061 18.8811 13.6132 19.0393 13.458C19.2258 13.2751 19.3241 13.0385 19.3342 12.7989C19.5443 12.8256 19.7641 12.7875 19.961 12.676C20.4416 12.4039 20.6041 11.7975 20.3239 11.3215L15.1348 2.50733ZM4 17C4 16.4477 3.55228 16 3 16C2.44772 16 2 16.4477 2 17V18C2 20.2092 3.79086 22 6 22H18C20.2091 22 22 20.2092 22 18V17C22 16.4477 21.5523 16 21 16C20.4477 16 20 16.4477 20 17V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V17Z"})})}),b.jsx("a",{href:"https://www.linkedin.com/in/shehan-mario-7395a8251/",className:"w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-blue-600 hover:bg-opacity-20 transition-colors",children:b.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:b.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),b.jsx("a",{href:"https://github.com/MarioShehan22",className:"w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-colors",children:b.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:b.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})]})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-bold mb-4",children:"Quick Links"}),b.jsxs("ul",{className:"space-y-2",children:[b.jsx("li",{children:b.jsx("a",{href:"#home",className:"text-gray-300 hover:text-white transition-colors",children:"Home"})}),b.jsx("li",{children:b.jsx("a",{href:"#about",className:"text-gray-300 hover:text-white transition-colors",children:"About"})}),b.jsx("li",{children:b.jsx("a",{href:"#projects",className:"text-gray-300 hover:text-white transition-colors",children:"Projects"})}),b.jsx("li",{children:b.jsx("a",{href:"#testimonials",className:"text-gray-300 hover:text-white transition-colors",children:"Testimonials"})}),b.jsx("li",{children:b.jsx("a",{href:"#contact",className:"text-gray-300 hover:text-white transition-colors",children:"Contact"})})]})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-bold mb-4",children:"Services"}),b.jsxs("ul",{className:"space-y-2",children:[b.jsx("li",{children:b.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Web Development"})}),b.jsx("li",{children:b.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Mobile Apps"})}),b.jsx("li",{children:b.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"API Development"})}),b.jsx("li",{children:b.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"UI/UX Design"})}),b.jsx("li",{children:b.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Consultation"})})]})]})]}),b.jsxs("div",{className:"border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center",children:[b.jsx("div",{className:"text-gray-300 text-sm mb-4 md:mb-0",children:"© 2024 Shehan Silva. All rights reserved."}),b.jsxs("div",{className:"flex gap-6 text-sm",children:[b.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Privacy Policy"}),b.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Terms of Service"}),b.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Cookie Policy"})]})]})]})});function EM(){return b.jsxs(b.Fragment,{children:[b.jsx(vM,{}),b.jsx(gM,{}),b.jsx(_M,{}),b.jsx(SM,{}),b.jsx(bM,{}),b.jsx(yM,{}),b.jsx(MM,{})]})}Q3.createRoot(document.getElementById("root")).render(b.jsx(k3.StrictMode,{children:b.jsx(EM,{})}));
