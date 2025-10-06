const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MindStudioCaseStudy-Cbj8IwCr.js","assets/CaseStudyLayout-EI5N8NhF.js","assets/CaseStudyLayout-BoKZBsC_.css","assets/CaseStudyContent-4iZsDpsn.css","assets/WeniaCaseStudy-DWxaAc9l.js","assets/TreezCaseStudy-BOw0Qtdn.js","assets/NacionalCaseStudy-C7YwHjkn.js","assets/KlareCaseStudy-DjLDCbM6.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function T_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Lf={exports:{}},da={},If={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function gE(){if(iv)return xt;iv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=p&&O[p]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(O,re,ge){this.props=O,this.context=re,this.refs=T,this.updater=ge||x}S.prototype.isReactComponent={},S.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(O,re,ge){this.props=O,this.context=re,this.refs=T,this.updater=ge||x}var R=D.prototype=new y;R.constructor=D,E(R,S.prototype),R.isPureReactComponent=!0;var A=Array.isArray,N=Object.prototype.hasOwnProperty,I={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function F(O,re,ge){var Ce,be={},Q=null,ce=null;if(re!=null)for(Ce in re.ref!==void 0&&(ce=re.ref),re.key!==void 0&&(Q=""+re.key),re)N.call(re,Ce)&&!k.hasOwnProperty(Ce)&&(be[Ce]=re[Ce]);var pe=arguments.length-2;if(pe===1)be.children=ge;else if(1<pe){for(var Ie=Array(pe),ke=0;ke<pe;ke++)Ie[ke]=arguments[ke+2];be.children=Ie}if(O&&O.defaultProps)for(Ce in pe=O.defaultProps,pe)be[Ce]===void 0&&(be[Ce]=pe[Ce]);return{$$typeof:n,type:O,key:Q,ref:ce,props:be,_owner:I.current}}function P(O,re){return{$$typeof:n,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function V(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return re[ge]})}var q=/\/+/g;function ie(O,re){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):re.toString(36)}function ue(O,re,ge,Ce,be){var Q=typeof O;(Q==="undefined"||Q==="boolean")&&(O=null);var ce=!1;if(O===null)ce=!0;else switch(Q){case"string":case"number":ce=!0;break;case"object":switch(O.$$typeof){case n:case e:ce=!0}}if(ce)return ce=O,be=be(ce),O=Ce===""?"."+ie(ce,0):Ce,A(be)?(ge="",O!=null&&(ge=O.replace(q,"$&/")+"/"),ue(be,re,ge,"",function(ke){return ke})):be!=null&&(C(be)&&(be=P(be,ge+(!be.key||ce&&ce.key===be.key?"":(""+be.key).replace(q,"$&/")+"/")+O)),re.push(be)),1;if(ce=0,Ce=Ce===""?".":Ce+":",A(O))for(var pe=0;pe<O.length;pe++){Q=O[pe];var Ie=Ce+ie(Q,pe);ce+=ue(Q,re,ge,Ie,be)}else if(Ie=v(O),typeof Ie=="function")for(O=Ie.call(O),pe=0;!(Q=O.next()).done;)Q=Q.value,Ie=Ce+ie(Q,pe++),ce+=ue(Q,re,ge,Ie,be);else if(Q==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ce}function de(O,re,ge){if(O==null)return O;var Ce=[],be=0;return ue(O,Ce,"","",function(Q){return re.call(ge,Q,be++)}),Ce}function K(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var se={current:null},B={transition:null},ee={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:B,ReactCurrentOwner:I};function $(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:de,forEach:function(O,re,ge){de(O,function(){re.apply(this,arguments)},ge)},count:function(O){var re=0;return de(O,function(){re++}),re},toArray:function(O){return de(O,function(re){return re})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xt.Component=S,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=D,xt.StrictMode=r,xt.Suspense=d,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,xt.act=$,xt.cloneElement=function(O,re,ge){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ce=E({},O.props),be=O.key,Q=O.ref,ce=O._owner;if(re!=null){if(re.ref!==void 0&&(Q=re.ref,ce=I.current),re.key!==void 0&&(be=""+re.key),O.type&&O.type.defaultProps)var pe=O.type.defaultProps;for(Ie in re)N.call(re,Ie)&&!k.hasOwnProperty(Ie)&&(Ce[Ie]=re[Ie]===void 0&&pe!==void 0?pe[Ie]:re[Ie])}var Ie=arguments.length-2;if(Ie===1)Ce.children=ge;else if(1<Ie){pe=Array(Ie);for(var ke=0;ke<Ie;ke++)pe[ke]=arguments[ke+2];Ce.children=pe}return{$$typeof:n,type:O.type,key:be,ref:Q,props:Ce,_owner:ce}},xt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},xt.createElement=F,xt.createFactory=function(O){var re=F.bind(null,O);return re.type=O,re},xt.createRef=function(){return{current:null}},xt.forwardRef=function(O){return{$$typeof:c,render:O}},xt.isValidElement=C,xt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:K}},xt.memo=function(O,re){return{$$typeof:h,type:O,compare:re===void 0?null:re}},xt.startTransition=function(O){var re=B.transition;B.transition={};try{O()}finally{B.transition=re}},xt.unstable_act=$,xt.useCallback=function(O,re){return se.current.useCallback(O,re)},xt.useContext=function(O){return se.current.useContext(O)},xt.useDebugValue=function(){},xt.useDeferredValue=function(O){return se.current.useDeferredValue(O)},xt.useEffect=function(O,re){return se.current.useEffect(O,re)},xt.useId=function(){return se.current.useId()},xt.useImperativeHandle=function(O,re,ge){return se.current.useImperativeHandle(O,re,ge)},xt.useInsertionEffect=function(O,re){return se.current.useInsertionEffect(O,re)},xt.useLayoutEffect=function(O,re){return se.current.useLayoutEffect(O,re)},xt.useMemo=function(O,re){return se.current.useMemo(O,re)},xt.useReducer=function(O,re,ge){return se.current.useReducer(O,re,ge)},xt.useRef=function(O){return se.current.useRef(O)},xt.useState=function(O){return se.current.useState(O)},xt.useSyncExternalStore=function(O,re,ge){return se.current.useSyncExternalStore(O,re,ge)},xt.useTransition=function(){return se.current.useTransition()},xt.version="18.3.1",xt}var rv;function Gh(){return rv||(rv=1,If.exports=gE()),If.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function vE(){if(sv)return da;sv=1;var n=Gh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var m,p={},v=null,x=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(p[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)p[m]===void 0&&(p[m]=d[m]);return{$$typeof:e,type:c,key:v,ref:x,props:p,_owner:o.current}}return da.Fragment=t,da.jsx=u,da.jsxs=u,da}var ov;function _E(){return ov||(ov=1,Lf.exports=vE()),Lf.exports}var me=_E(),Jl={},Nf={exports:{}},Gn={},Uf={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function yE(){return av||(av=1,(function(n){function e(B,ee){var $=B.length;B.push(ee);e:for(;0<$;){var O=$-1>>>1,re=B[O];if(0<o(re,ee))B[O]=ee,B[$]=re,$=O;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ee=B[0],$=B.pop();if($!==ee){B[0]=$;e:for(var O=0,re=B.length,ge=re>>>1;O<ge;){var Ce=2*(O+1)-1,be=B[Ce],Q=Ce+1,ce=B[Q];if(0>o(be,$))Q<re&&0>o(ce,be)?(B[O]=ce,B[Q]=$,O=Q):(B[O]=be,B[Ce]=$,O=Ce);else if(Q<re&&0>o(ce,$))B[O]=ce,B[Q]=$,O=Q;else break e}}return ee}function o(B,ee){var $=B.sortIndex-ee.sortIndex;return $!==0?$:B.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],m=1,p=null,v=3,x=!1,E=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(B){for(var ee=t(h);ee!==null;){if(ee.callback===null)r(h);else if(ee.startTime<=B)r(h),ee.sortIndex=ee.expirationTime,e(d,ee);else break;ee=t(h)}}function A(B){if(T=!1,R(B),!E)if(t(d)!==null)E=!0,K(N);else{var ee=t(h);ee!==null&&se(A,ee.startTime-B)}}function N(B,ee){E=!1,T&&(T=!1,y(F),F=-1),x=!0;var $=v;try{for(R(ee),p=t(d);p!==null&&(!(p.expirationTime>ee)||B&&!V());){var O=p.callback;if(typeof O=="function"){p.callback=null,v=p.priorityLevel;var re=O(p.expirationTime<=ee);ee=n.unstable_now(),typeof re=="function"?p.callback=re:p===t(d)&&r(d),R(ee)}else r(d);p=t(d)}if(p!==null)var ge=!0;else{var Ce=t(h);Ce!==null&&se(A,Ce.startTime-ee),ge=!1}return ge}finally{p=null,v=$,x=!1}}var I=!1,k=null,F=-1,P=5,C=-1;function V(){return!(n.unstable_now()-C<P)}function q(){if(k!==null){var B=n.unstable_now();C=B;var ee=!0;try{ee=k(!0,B)}finally{ee?ie():(I=!1,k=null)}}else I=!1}var ie;if(typeof D=="function")ie=function(){D(q)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=q,ie=function(){de.postMessage(null)}}else ie=function(){S(q,0)};function K(B){k=B,I||(I=!0,ie())}function se(B,ee){F=S(function(){B(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){E||x||(E=!0,K(N))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(B){switch(v){case 1:case 2:case 3:var ee=3;break;default:ee=v}var $=v;v=ee;try{return B()}finally{v=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,ee){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=v;v=B;try{return ee()}finally{v=$}},n.unstable_scheduleCallback=function(B,ee,$){var O=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?O+$:O):$=O,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=$+re,B={id:m++,callback:ee,priorityLevel:B,startTime:$,expirationTime:re,sortIndex:-1},$>O?(B.sortIndex=$,e(h,B),t(d)===null&&B===t(h)&&(T?(y(F),F=-1):T=!0,se(A,$-O))):(B.sortIndex=re,e(d,B),E||x||(E=!0,K(N))),B},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(B){var ee=v;return function(){var $=v;v=ee;try{return B.apply(this,arguments)}finally{v=$}}}})(Ff)),Ff}var lv;function xE(){return lv||(lv=1,Uf.exports=yE()),Uf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function SE(){if(uv)return Gn;uv=1;var n=Gh(),e=xE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},p={};function v(i){return d.call(p,i)?!0:d.call(m,i)?!1:h.test(i)?p[i]=!0:(m[i]=!0,!1)}function x(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,a,f){if(s===null||typeof s>"u"||x(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,a,f,g,_,M){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function R(i,s,a,f){var g=S.hasOwnProperty(s)?S[s]:null;(g!==null?g.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,a,g,f)&&(a=null),f||g===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):g.mustUseProperty?i[g.propertyName]=a===null?g.type===3?!1:"":a:(s=g.attributeName,f=g.attributeNamespace,a===null?i.removeAttribute(s):(g=g.type,a=g===3||g===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),I=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),B=Symbol.iterator;function ee(i){return i===null||typeof i!="object"?null:(i=B&&i[B]||i["@@iterator"],typeof i=="function"?i:null)}var $=Object.assign,O;function re(i){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var ge=!1;function Ce(i,s){if(!i||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(oe){var f=oe}Reflect.construct(i,[],s)}else{try{s.call()}catch(oe){f=oe}i.call(s.prototype)}else{try{throw Error()}catch(oe){f=oe}i()}}catch(oe){if(oe&&f&&typeof oe.stack=="string"){for(var g=oe.stack.split(`
`),_=f.stack.split(`
`),M=g.length-1,U=_.length-1;1<=M&&0<=U&&g[M]!==_[U];)U--;for(;1<=M&&0<=U;M--,U--)if(g[M]!==_[U]){if(M!==1||U!==1)do if(M--,U--,0>U||g[M]!==_[U]){var H=`
`+g[M].replace(" at new "," at ");return i.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",i.displayName)),H}while(1<=M&&0<=U);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?re(i):""}function be(i){switch(i.tag){case 5:return re(i.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return i=Ce(i.type,!1),i;case 11:return i=Ce(i.type.render,!1),i;case 1:return i=Ce(i.type,!0),i;default:return""}}function Q(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case k:return"Fragment";case I:return"Portal";case P:return"Profiler";case F:return"StrictMode";case ie:return"Suspense";case ue:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case C:return(i._context.displayName||"Context")+".Provider";case q:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case de:return s=i.displayName||null,s!==null?s:Q(i.type)||"Memo";case K:s=i._payload,i=i._init;try{return Q(i(s))}catch{}}return null}function ce(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(s);case 8:return s===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function pe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ie(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ke(i){var s=Ie(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var g=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return g.call(this)},set:function(M){f=""+M,_.call(this,M)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(M){f=""+M},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function pt(i){i._valueTracker||(i._valueTracker=ke(i))}function Ht(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Ie(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function z(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function At(i,s){var a=s.checked;return $({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function ft(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=pe(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function tt(i,s){s=s.checked,s!=null&&R(i,"checked",s,!1)}function Ge(i,s){tt(i,s);var a=pe(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Be(i,s.type,a):s.hasOwnProperty("defaultValue")&&Be(i,s.type,pe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Dt(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Be(i,s,a){(s!=="number"||z(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var ut=Array.isArray;function Bt(i,s,a,f){if(i=i.options,s){s={};for(var g=0;g<a.length;g++)s["$"+a[g]]=!0;for(a=0;a<i.length;a++)g=s.hasOwnProperty("$"+i[a].value),i[a].selected!==g&&(i[a].selected=g),g&&f&&(i[a].defaultSelected=!0)}else{for(a=""+pe(a),s=null,g=0;g<i.length;g++){if(i[g].value===a){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}s!==null||i[g].disabled||(s=i[g])}s!==null&&(s.selected=!0)}}function _t(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function L(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ut(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:pe(a)}}function w(i,s){var a=pe(s.value),f=pe(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function Z(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?he(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var fe,Ke=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,g){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,g)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=fe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ee(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var We={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(We).forEach(function(i){Xe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),We[s]=We[i]})});function Te(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||We.hasOwnProperty(i)&&We[i]?(""+s).trim():s+"px"}function Ne(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,g=Te(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,g):i[a]=g}}var nt=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(i,s){if(s){if(nt[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Le(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function G(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Me=null,Re=null,ze=null;function xe(i){if(i=Zo(i)){if(typeof Me!="function")throw Error(t(280));var s=i.stateNode;s&&(s=pl(s),Me(i.stateNode,i.type,s))}}function te(i){Re?ze?ze.push(i):ze=[i]:Re=i}function Pe(){if(Re){var i=Re,s=ze;if(ze=Re=null,xe(i),s)for(i=0;i<s.length;i++)xe(s[i])}}function Ze(i,s){return i(s)}function mt(){}var yt=!1;function Lt(i,s,a){if(yt)return i(s,a);yt=!0;try{return Ze(i,s,a)}finally{yt=!1,(Re!==null||ze!==null)&&(mt(),Pe())}}function Nt(i,s){var a=i.stateNode;if(a===null)return null;var f=pl(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var mi=!1;if(c)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){mi=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch{mi=!1}function _n(i,s,a,f,g,_,M,U,H){var oe=Array.prototype.slice.call(arguments,3);try{s.apply(a,oe)}catch(ye){this.onError(ye)}}var gi=!1,Dn=null,Di=!1,Ps=null,Ds={onError:function(i){gi=!0,Dn=i}};function Ya(i,s,a,f,g,_,M,U,H){gi=!1,Dn=null,_n.apply(Ds,arguments)}function qa(i,s,a,f,g,_,M,U,H){if(Ya.apply(this,arguments),gi){if(gi){var oe=Dn;gi=!1,Dn=null}else throw Error(t(198));Di||(Di=!0,Ps=oe)}}function ji(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function $a(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Ka(i){if(ji(i)!==i)throw Error(t(188))}function ec(i){var s=i.alternate;if(!s){if(s=ji(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var g=a.return;if(g===null)break;var _=g.alternate;if(_===null){if(f=g.return,f!==null){a=f;continue}break}if(g.child===_.child){for(_=g.child;_;){if(_===a)return Ka(g),i;if(_===f)return Ka(g),s;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=g,f=_;else{for(var M=!1,U=g.child;U;){if(U===a){M=!0,a=g,f=_;break}if(U===f){M=!0,f=g,a=_;break}U=U.sibling}if(!M){for(U=_.child;U;){if(U===a){M=!0,a=_,f=g;break}if(U===f){M=!0,f=_,a=g;break}U=U.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function Za(i){return i=ec(i),i!==null?Qa(i):null}function Qa(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Qa(i);if(s!==null)return s;i=i.sibling}return null}var b=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,ae=e.unstable_shouldYield,le=e.unstable_requestPaint,X=e.unstable_now,we=e.unstable_getCurrentPriorityLevel,Ue=e.unstable_ImmediatePriority,qe=e.unstable_UserBlockingPriority,Ve=e.unstable_NormalPriority,ot=e.unstable_LowPriority,at=e.unstable_IdlePriority,et=null,dt=null;function It(i){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(et,i,void 0,(i.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:it,zt=Math.log,Ut=Math.LN2;function it(i){return i>>>=0,i===0?32:31-(zt(i)/Ut|0)|0}var Ot=64,St=4194304;function ln(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function vi(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,g=i.suspendedLanes,_=i.pingedLanes,M=a&268435455;if(M!==0){var U=M&~g;U!==0?f=ln(U):(_&=M,_!==0&&(f=ln(_)))}else M=a&~g,M!==0?f=ln(M):_!==0&&(f=ln(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&g)===0&&(g=f&-f,_=s&-s,g>=_||g===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-Tt(s),g=1<<a,f|=i[a],s&=~g;return f}function Ln(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $r(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,_=i.pendingLanes;0<_;){var M=31-Tt(_),U=1<<M,H=g[M];H===-1?((U&a)===0||(U&f)!==0)&&(g[M]=Ln(U,s)):H<=s&&(i.expiredLanes|=U),_&=~U}}function Vt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function In(){var i=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),i}function En(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function en(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Tt(s),i[s]=a}function Mn(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var g=31-Tt(a),_=1<<g;s[g]=0,f[g]=-1,i[g]=-1,a&=~_}}function Kr(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-Tt(a),g=1<<f;g&s|i[f]&s&&(i[f]|=s),a&=~g}}var Et=0;function Up(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Fp,tc,Op,kp,Bp,nc=!1,Ja=[],pr=null,mr=null,gr=null,Uo=new Map,Fo=new Map,vr=[],kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(i,s){switch(i){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Uo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(s.pointerId)}}function Oo(i,s,a,f,g,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[g]},s!==null&&(s=Zo(s),s!==null&&tc(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),i)}function Bx(i,s,a,f,g){switch(s){case"focusin":return pr=Oo(pr,i,s,a,f,g),!0;case"dragenter":return mr=Oo(mr,i,s,a,f,g),!0;case"mouseover":return gr=Oo(gr,i,s,a,f,g),!0;case"pointerover":var _=g.pointerId;return Uo.set(_,Oo(Uo.get(_)||null,i,s,a,f,g)),!0;case"gotpointercapture":return _=g.pointerId,Fo.set(_,Oo(Fo.get(_)||null,i,s,a,f,g)),!0}return!1}function Vp(i){var s=Zr(i.target);if(s!==null){var a=ji(s);if(a!==null){if(s=a.tag,s===13){if(s=$a(a),s!==null){i.blockedOn=s,Bp(i.priority,function(){Op(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function el(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=rc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);lt=f,a.target.dispatchEvent(f),lt=null}else return s=Zo(a),s!==null&&tc(s),i.blockedOn=a,!1;s.shift()}return!0}function Hp(i,s,a){el(i)&&a.delete(s)}function zx(){nc=!1,pr!==null&&el(pr)&&(pr=null),mr!==null&&el(mr)&&(mr=null),gr!==null&&el(gr)&&(gr=null),Uo.forEach(Hp),Fo.forEach(Hp)}function ko(i,s){i.blockedOn===s&&(i.blockedOn=null,nc||(nc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,zx)))}function Bo(i){function s(g){return ko(g,i)}if(0<Ja.length){ko(Ja[0],i);for(var a=1;a<Ja.length;a++){var f=Ja[a];f.blockedOn===i&&(f.blockedOn=null)}}for(pr!==null&&ko(pr,i),mr!==null&&ko(mr,i),gr!==null&&ko(gr,i),Uo.forEach(s),Fo.forEach(s),a=0;a<vr.length;a++)f=vr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<vr.length&&(a=vr[0],a.blockedOn===null);)Vp(a),a.blockedOn===null&&vr.shift()}var Ls=A.ReactCurrentBatchConfig,tl=!0;function Vx(i,s,a,f){var g=Et,_=Ls.transition;Ls.transition=null;try{Et=1,ic(i,s,a,f)}finally{Et=g,Ls.transition=_}}function Hx(i,s,a,f){var g=Et,_=Ls.transition;Ls.transition=null;try{Et=4,ic(i,s,a,f)}finally{Et=g,Ls.transition=_}}function ic(i,s,a,f){if(tl){var g=rc(i,s,a,f);if(g===null)Sc(i,s,f,nl,a),zp(i,f);else if(Bx(g,i,s,a,f))f.stopPropagation();else if(zp(i,f),s&4&&-1<kx.indexOf(i)){for(;g!==null;){var _=Zo(g);if(_!==null&&Fp(_),_=rc(i,s,a,f),_===null&&Sc(i,s,f,nl,a),_===g)break;g=_}g!==null&&f.stopPropagation()}else Sc(i,s,f,null,a)}}var nl=null;function rc(i,s,a,f){if(nl=null,i=G(f),i=Zr(i),i!==null)if(s=ji(i),s===null)i=null;else if(a=s.tag,a===13){if(i=$a(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return nl=i,null}function Gp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(we()){case Ue:return 1;case qe:return 4;case Ve:case ot:return 16;case at:return 536870912;default:return 16}default:return 16}}var _r=null,sc=null,il=null;function Wp(){if(il)return il;var i,s=sc,a=s.length,f,g="value"in _r?_r.value:_r.textContent,_=g.length;for(i=0;i<a&&s[i]===g[i];i++);var M=a-i;for(f=1;f<=M&&s[a-f]===g[_-f];f++);return il=g.slice(i,1<f?1-f:void 0)}function rl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function sl(){return!0}function Xp(){return!1}function $n(i){function s(a,f,g,_,M){this._reactName=a,this._targetInst=g,this.type=f,this.nativeEvent=_,this.target=M,this.currentTarget=null;for(var U in i)i.hasOwnProperty(U)&&(a=i[U],this[U]=a?a(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?sl:Xp,this.isPropagationStopped=Xp,this}return $(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),s}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=$n(Is),zo=$({},Is,{view:0,detail:0}),Gx=$n(zo),ac,lc,Vo,ol=$({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Vo&&(Vo&&i.type==="mousemove"?(ac=i.screenX-Vo.screenX,lc=i.screenY-Vo.screenY):lc=ac=0,Vo=i),ac)},movementY:function(i){return"movementY"in i?i.movementY:lc}}),jp=$n(ol),Wx=$({},ol,{dataTransfer:0}),Xx=$n(Wx),jx=$({},zo,{relatedTarget:0}),uc=$n(jx),Yx=$({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),qx=$n(Yx),$x=$({},Is,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Kx=$n($x),Zx=$({},Is,{data:0}),Yp=$n(Zx),Qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=eS[i])?!!s[i]:!1}function cc(){return tS}var nS=$({},zo,{key:function(i){if(i.key){var s=Qx[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=rl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Jx[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(i){return i.type==="keypress"?rl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?rl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),iS=$n(nS),rS=$({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=$n(rS),sS=$({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),oS=$n(sS),aS=$({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),lS=$n(aS),uS=$({},ol,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),cS=$n(uS),fS=[9,13,27,32],fc=c&&"CompositionEvent"in window,Ho=null;c&&"documentMode"in document&&(Ho=document.documentMode);var dS=c&&"TextEvent"in window&&!Ho,$p=c&&(!fc||Ho&&8<Ho&&11>=Ho),Kp=" ",Zp=!1;function Qp(i,s){switch(i){case"keyup":return fS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ns=!1;function hS(i,s){switch(i){case"compositionend":return Jp(s);case"keypress":return s.which!==32?null:(Zp=!0,Kp);case"textInput":return i=s.data,i===Kp&&Zp?null:i;default:return null}}function pS(i,s){if(Ns)return i==="compositionend"||!fc&&Qp(i,s)?(i=Wp(),il=sc=_r=null,Ns=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return $p&&s.locale!=="ko"?null:s.data;default:return null}}var mS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!mS[i.type]:s==="textarea"}function tm(i,s,a,f){te(f),s=fl(s,"onChange"),0<s.length&&(a=new oc("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var Go=null,Wo=null;function gS(i){ym(i,0)}function al(i){var s=Bs(i);if(Ht(s))return i}function vS(i,s){if(i==="change")return s}var nm=!1;if(c){var dc;if(c){var hc="oninput"in document;if(!hc){var im=document.createElement("div");im.setAttribute("oninput","return;"),hc=typeof im.oninput=="function"}dc=hc}else dc=!1;nm=dc&&(!document.documentMode||9<document.documentMode)}function rm(){Go&&(Go.detachEvent("onpropertychange",sm),Wo=Go=null)}function sm(i){if(i.propertyName==="value"&&al(Wo)){var s=[];tm(s,Wo,i,G(i)),Lt(gS,s)}}function _S(i,s,a){i==="focusin"?(rm(),Go=s,Wo=a,Go.attachEvent("onpropertychange",sm)):i==="focusout"&&rm()}function yS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return al(Wo)}function xS(i,s){if(i==="click")return al(s)}function SS(i,s){if(i==="input"||i==="change")return al(s)}function ES(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var _i=typeof Object.is=="function"?Object.is:ES;function Xo(i,s){if(_i(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var g=a[f];if(!d.call(s,g)||!_i(i[g],s[g]))return!1}return!0}function om(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function am(i,s){var a=om(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=om(a)}}function lm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?lm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function um(){for(var i=window,s=z();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=z(i.document)}return s}function pc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function MS(i){var s=um(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&lm(a.ownerDocument.documentElement,a)){if(f!==null&&pc(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var g=a.textContent.length,_=Math.min(f.start,g);f=f.end===void 0?_:Math.min(f.end,g),!i.extend&&_>f&&(g=f,f=_,_=g),g=am(a,_);var M=am(a,f);g&&M&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==M.node||i.focusOffset!==M.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(M.node,M.offset)):(s.setEnd(M.node,M.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var TS=c&&"documentMode"in document&&11>=document.documentMode,Us=null,mc=null,jo=null,gc=!1;function cm(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gc||Us==null||Us!==z(f)||(f=Us,"selectionStart"in f&&pc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),jo&&Xo(jo,f)||(jo=f,f=fl(mc,"onSelect"),0<f.length&&(s=new oc("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Us)))}function ll(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Fs={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},vc={},fm={};c&&(fm=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function ul(i){if(vc[i])return vc[i];if(!Fs[i])return i;var s=Fs[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in fm)return vc[i]=s[a];return i}var dm=ul("animationend"),hm=ul("animationiteration"),pm=ul("animationstart"),mm=ul("transitionend"),gm=new Map,vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(i,s){gm.set(i,s),l(s,[i])}for(var _c=0;_c<vm.length;_c++){var yc=vm[_c],wS=yc.toLowerCase(),AS=yc[0].toUpperCase()+yc.slice(1);yr(wS,"on"+AS)}yr(dm,"onAnimationEnd"),yr(hm,"onAnimationIteration"),yr(pm,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(mm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function _m(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,qa(f,s,void 0,i),i.currentTarget=null}function ym(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],g=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var M=f.length-1;0<=M;M--){var U=f[M],H=U.instance,oe=U.currentTarget;if(U=U.listener,H!==_&&g.isPropagationStopped())break e;_m(g,U,oe),_=H}else for(M=0;M<f.length;M++){if(U=f[M],H=U.instance,oe=U.currentTarget,U=U.listener,H!==_&&g.isPropagationStopped())break e;_m(g,U,oe),_=H}}}if(Di)throw i=Ps,Di=!1,Ps=null,i}function Xt(i,s){var a=s[Cc];a===void 0&&(a=s[Cc]=new Set);var f=i+"__bubble";a.has(f)||(xm(s,i,2,!1),a.add(f))}function xc(i,s,a){var f=0;s&&(f|=4),xm(a,i,f,s)}var cl="_reactListening"+Math.random().toString(36).slice(2);function qo(i){if(!i[cl]){i[cl]=!0,r.forEach(function(a){a!=="selectionchange"&&(CS.has(a)||xc(a,!1,i),xc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[cl]||(s[cl]=!0,xc("selectionchange",!1,s))}}function xm(i,s,a,f){switch(Gp(s)){case 1:var g=Vx;break;case 4:g=Hx;break;default:g=ic}a=g.bind(null,s,a,i),g=void 0,!mi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(s,a,{capture:!0,passive:g}):i.addEventListener(s,a,!0):g!==void 0?i.addEventListener(s,a,{passive:g}):i.addEventListener(s,a,!1)}function Sc(i,s,a,f,g){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var M=f.tag;if(M===3||M===4){var U=f.stateNode.containerInfo;if(U===g||U.nodeType===8&&U.parentNode===g)break;if(M===4)for(M=f.return;M!==null;){var H=M.tag;if((H===3||H===4)&&(H=M.stateNode.containerInfo,H===g||H.nodeType===8&&H.parentNode===g))return;M=M.return}for(;U!==null;){if(M=Zr(U),M===null)return;if(H=M.tag,H===5||H===6){f=_=M;continue e}U=U.parentNode}}f=f.return}Lt(function(){var oe=_,ye=G(a),Se=[];e:{var _e=gm.get(i);if(_e!==void 0){var He=oc,$e=i;switch(i){case"keypress":if(rl(a)===0)break e;case"keydown":case"keyup":He=iS;break;case"focusin":$e="focus",He=uc;break;case"focusout":$e="blur",He=uc;break;case"beforeblur":case"afterblur":He=uc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=oS;break;case dm:case hm:case pm:He=qx;break;case mm:He=lS;break;case"scroll":He=Gx;break;case"wheel":He=cS;break;case"copy":case"cut":case"paste":He=Kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=qp}var Qe=(s&4)!==0,tn=!Qe&&i==="scroll",Y=Qe?_e!==null?_e+"Capture":null:_e;Qe=[];for(var W=oe,J;W!==null;){J=W;var Ae=J.stateNode;if(J.tag===5&&Ae!==null&&(J=Ae,Y!==null&&(Ae=Nt(W,Y),Ae!=null&&Qe.push($o(W,Ae,J)))),tn)break;W=W.return}0<Qe.length&&(_e=new He(_e,$e,null,a,ye),Se.push({event:_e,listeners:Qe}))}}if((s&7)===0){e:{if(_e=i==="mouseover"||i==="pointerover",He=i==="mouseout"||i==="pointerout",_e&&a!==lt&&($e=a.relatedTarget||a.fromElement)&&(Zr($e)||$e[Yi]))break e;if((He||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,He?($e=a.relatedTarget||a.toElement,He=oe,$e=$e?Zr($e):null,$e!==null&&(tn=ji($e),$e!==tn||$e.tag!==5&&$e.tag!==6)&&($e=null)):(He=null,$e=oe),He!==$e)){if(Qe=jp,Ae="onMouseLeave",Y="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(Qe=qp,Ae="onPointerLeave",Y="onPointerEnter",W="pointer"),tn=He==null?_e:Bs(He),J=$e==null?_e:Bs($e),_e=new Qe(Ae,W+"leave",He,a,ye),_e.target=tn,_e.relatedTarget=J,Ae=null,Zr(ye)===oe&&(Qe=new Qe(Y,W+"enter",$e,a,ye),Qe.target=J,Qe.relatedTarget=tn,Ae=Qe),tn=Ae,He&&$e)t:{for(Qe=He,Y=$e,W=0,J=Qe;J;J=Os(J))W++;for(J=0,Ae=Y;Ae;Ae=Os(Ae))J++;for(;0<W-J;)Qe=Os(Qe),W--;for(;0<J-W;)Y=Os(Y),J--;for(;W--;){if(Qe===Y||Y!==null&&Qe===Y.alternate)break t;Qe=Os(Qe),Y=Os(Y)}Qe=null}else Qe=null;He!==null&&Sm(Se,_e,He,Qe,!1),$e!==null&&tn!==null&&Sm(Se,tn,$e,Qe,!0)}}e:{if(_e=oe?Bs(oe):window,He=_e.nodeName&&_e.nodeName.toLowerCase(),He==="select"||He==="input"&&_e.type==="file")var Je=vS;else if(em(_e))if(nm)Je=SS;else{Je=yS;var rt=_S}else(He=_e.nodeName)&&He.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Je=xS);if(Je&&(Je=Je(i,oe))){tm(Se,Je,a,ye);break e}rt&&rt(i,_e,oe),i==="focusout"&&(rt=_e._wrapperState)&&rt.controlled&&_e.type==="number"&&Be(_e,"number",_e.value)}switch(rt=oe?Bs(oe):window,i){case"focusin":(em(rt)||rt.contentEditable==="true")&&(Us=rt,mc=oe,jo=null);break;case"focusout":jo=mc=Us=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,cm(Se,a,ye);break;case"selectionchange":if(TS)break;case"keydown":case"keyup":cm(Se,a,ye)}var st;if(fc)e:{switch(i){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else Ns?Qp(i,a)&&(ht="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&($p&&a.locale!=="ko"&&(Ns||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Ns&&(st=Wp()):(_r=ye,sc="value"in _r?_r.value:_r.textContent,Ns=!0)),rt=fl(oe,ht),0<rt.length&&(ht=new Yp(ht,i,null,a,ye),Se.push({event:ht,listeners:rt}),st?ht.data=st:(st=Jp(a),st!==null&&(ht.data=st)))),(st=dS?hS(i,a):pS(i,a))&&(oe=fl(oe,"onBeforeInput"),0<oe.length&&(ye=new Yp("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:oe}),ye.data=st))}ym(Se,s)})}function $o(i,s,a){return{instance:i,listener:s,currentTarget:a}}function fl(i,s){for(var a=s+"Capture",f=[];i!==null;){var g=i,_=g.stateNode;g.tag===5&&_!==null&&(g=_,_=Nt(i,a),_!=null&&f.unshift($o(i,_,g)),_=Nt(i,s),_!=null&&f.push($o(i,_,g))),i=i.return}return f}function Os(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Sm(i,s,a,f,g){for(var _=s._reactName,M=[];a!==null&&a!==f;){var U=a,H=U.alternate,oe=U.stateNode;if(H!==null&&H===f)break;U.tag===5&&oe!==null&&(U=oe,g?(H=Nt(a,_),H!=null&&M.unshift($o(a,H,U))):g||(H=Nt(a,_),H!=null&&M.push($o(a,H,U)))),a=a.return}M.length!==0&&i.push({event:s,listeners:M})}var RS=/\r\n?/g,bS=/\u0000|\uFFFD/g;function Em(i){return(typeof i=="string"?i:""+i).replace(RS,`
`).replace(bS,"")}function dl(i,s,a){if(s=Em(s),Em(i)!==s&&a)throw Error(t(425))}function hl(){}var Ec=null,Mc=null;function Tc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,PS=typeof clearTimeout=="function"?clearTimeout:void 0,Mm=typeof Promise=="function"?Promise:void 0,DS=typeof queueMicrotask=="function"?queueMicrotask:typeof Mm<"u"?function(i){return Mm.resolve(null).then(i).catch(LS)}:wc;function LS(i){setTimeout(function(){throw i})}function Ac(i,s){var a=s,f=0;do{var g=a.nextSibling;if(i.removeChild(a),g&&g.nodeType===8)if(a=g.data,a==="/$"){if(f===0){i.removeChild(g),Bo(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=g}while(a);Bo(s)}function xr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Tm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Li="__reactFiber$"+ks,Ko="__reactProps$"+ks,Yi="__reactContainer$"+ks,Cc="__reactEvents$"+ks,IS="__reactListeners$"+ks,NS="__reactHandles$"+ks;function Zr(i){var s=i[Li];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Yi]||a[Li]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=Tm(i);i!==null;){if(a=i[Li])return a;i=Tm(i)}return s}i=a,a=i.parentNode}return null}function Zo(i){return i=i[Li]||i[Yi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Bs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function pl(i){return i[Ko]||null}var Rc=[],zs=-1;function Sr(i){return{current:i}}function jt(i){0>zs||(i.current=Rc[zs],Rc[zs]=null,zs--)}function Gt(i,s){zs++,Rc[zs]=i.current,i.current=s}var Er={},Tn=Sr(Er),kn=Sr(!1),Qr=Er;function Vs(i,s){var a=i.type.contextTypes;if(!a)return Er;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var g={},_;for(_ in a)g[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=g),g}function Bn(i){return i=i.childContextTypes,i!=null}function ml(){jt(kn),jt(Tn)}function wm(i,s,a){if(Tn.current!==Er)throw Error(t(168));Gt(Tn,s),Gt(kn,a)}function Am(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var g in f)if(!(g in s))throw Error(t(108,ce(i)||"Unknown",g));return $({},a,f)}function gl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Er,Qr=Tn.current,Gt(Tn,i),Gt(kn,kn.current),!0}function Cm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=Am(i,s,Qr),f.__reactInternalMemoizedMergedChildContext=i,jt(kn),jt(Tn),Gt(Tn,i)):jt(kn),Gt(kn,a)}var qi=null,vl=!1,bc=!1;function Rm(i){qi===null?qi=[i]:qi.push(i)}function US(i){vl=!0,Rm(i)}function Mr(){if(!bc&&qi!==null){bc=!0;var i=0,s=Et;try{var a=qi;for(Et=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}qi=null,vl=!1}catch(g){throw qi!==null&&(qi=qi.slice(i+1)),b(Ue,Mr),g}finally{Et=s,bc=!1}}return null}var Hs=[],Gs=0,_l=null,yl=0,ni=[],ii=0,Jr=null,$i=1,Ki="";function es(i,s){Hs[Gs++]=yl,Hs[Gs++]=_l,_l=i,yl=s}function bm(i,s,a){ni[ii++]=$i,ni[ii++]=Ki,ni[ii++]=Jr,Jr=i;var f=$i;i=Ki;var g=32-Tt(f)-1;f&=~(1<<g),a+=1;var _=32-Tt(s)+g;if(30<_){var M=g-g%5;_=(f&(1<<M)-1).toString(32),f>>=M,g-=M,$i=1<<32-Tt(s)+g|a<<g|f,Ki=_+i}else $i=1<<_|a<<g|f,Ki=i}function Pc(i){i.return!==null&&(es(i,1),bm(i,1,0))}function Dc(i){for(;i===_l;)_l=Hs[--Gs],Hs[Gs]=null,yl=Hs[--Gs],Hs[Gs]=null;for(;i===Jr;)Jr=ni[--ii],ni[ii]=null,Ki=ni[--ii],ni[ii]=null,$i=ni[--ii],ni[ii]=null}var Kn=null,Zn=null,Yt=!1,yi=null;function Pm(i,s){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Dm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Kn=i,Zn=xr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Kn=i,Zn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Jr!==null?{id:$i,overflow:Ki}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Kn=i,Zn=null,!0):!1;default:return!1}}function Lc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Ic(i){if(Yt){var s=Zn;if(s){var a=s;if(!Dm(i,s)){if(Lc(i))throw Error(t(418));s=xr(a.nextSibling);var f=Kn;s&&Dm(i,s)?Pm(f,a):(i.flags=i.flags&-4097|2,Yt=!1,Kn=i)}}else{if(Lc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Yt=!1,Kn=i}}}function Lm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Kn=i}function xl(i){if(i!==Kn)return!1;if(!Yt)return Lm(i),Yt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Tc(i.type,i.memoizedProps)),s&&(s=Zn)){if(Lc(i))throw Im(),Error(t(418));for(;s;)Pm(i,s),s=xr(s.nextSibling)}if(Lm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Zn=xr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Zn=null}}else Zn=Kn?xr(i.stateNode.nextSibling):null;return!0}function Im(){for(var i=Zn;i;)i=xr(i.nextSibling)}function Ws(){Zn=Kn=null,Yt=!1}function Nc(i){yi===null?yi=[i]:yi.push(i)}var FS=A.ReactCurrentBatchConfig;function Qo(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var g=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(M){var U=g.refs;M===null?delete U[_]:U[_]=M},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function Sl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Nm(i){var s=i._init;return s(i._payload)}function Um(i){function s(Y,W){if(i){var J=Y.deletions;J===null?(Y.deletions=[W],Y.flags|=16):J.push(W)}}function a(Y,W){if(!i)return null;for(;W!==null;)s(Y,W),W=W.sibling;return null}function f(Y,W){for(Y=new Map;W!==null;)W.key!==null?Y.set(W.key,W):Y.set(W.index,W),W=W.sibling;return Y}function g(Y,W){return Y=Dr(Y,W),Y.index=0,Y.sibling=null,Y}function _(Y,W,J){return Y.index=J,i?(J=Y.alternate,J!==null?(J=J.index,J<W?(Y.flags|=2,W):J):(Y.flags|=2,W)):(Y.flags|=1048576,W)}function M(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,W,J,Ae){return W===null||W.tag!==6?(W=Af(J,Y.mode,Ae),W.return=Y,W):(W=g(W,J),W.return=Y,W)}function H(Y,W,J,Ae){var Je=J.type;return Je===k?ye(Y,W,J.props.children,Ae,J.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&Nm(Je)===W.type)?(Ae=g(W,J.props),Ae.ref=Qo(Y,W,J),Ae.return=Y,Ae):(Ae=Xl(J.type,J.key,J.props,null,Y.mode,Ae),Ae.ref=Qo(Y,W,J),Ae.return=Y,Ae)}function oe(Y,W,J,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=Cf(J,Y.mode,Ae),W.return=Y,W):(W=g(W,J.children||[]),W.return=Y,W)}function ye(Y,W,J,Ae,Je){return W===null||W.tag!==7?(W=ls(J,Y.mode,Ae,Je),W.return=Y,W):(W=g(W,J),W.return=Y,W)}function Se(Y,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Af(""+W,Y.mode,J),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case N:return J=Xl(W.type,W.key,W.props,null,Y.mode,J),J.ref=Qo(Y,null,W),J.return=Y,J;case I:return W=Cf(W,Y.mode,J),W.return=Y,W;case K:var Ae=W._init;return Se(Y,Ae(W._payload),J)}if(ut(W)||ee(W))return W=ls(W,Y.mode,J,null),W.return=Y,W;Sl(Y,W)}return null}function _e(Y,W,J,Ae){var Je=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Je!==null?null:U(Y,W,""+J,Ae);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case N:return J.key===Je?H(Y,W,J,Ae):null;case I:return J.key===Je?oe(Y,W,J,Ae):null;case K:return Je=J._init,_e(Y,W,Je(J._payload),Ae)}if(ut(J)||ee(J))return Je!==null?null:ye(Y,W,J,Ae,null);Sl(Y,J)}return null}function He(Y,W,J,Ae,Je){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return Y=Y.get(J)||null,U(W,Y,""+Ae,Je);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case N:return Y=Y.get(Ae.key===null?J:Ae.key)||null,H(W,Y,Ae,Je);case I:return Y=Y.get(Ae.key===null?J:Ae.key)||null,oe(W,Y,Ae,Je);case K:var rt=Ae._init;return He(Y,W,J,rt(Ae._payload),Je)}if(ut(Ae)||ee(Ae))return Y=Y.get(J)||null,ye(W,Y,Ae,Je,null);Sl(W,Ae)}return null}function $e(Y,W,J,Ae){for(var Je=null,rt=null,st=W,ht=W=0,gn=null;st!==null&&ht<J.length;ht++){st.index>ht?(gn=st,st=null):gn=st.sibling;var Ct=_e(Y,st,J[ht],Ae);if(Ct===null){st===null&&(st=gn);break}i&&st&&Ct.alternate===null&&s(Y,st),W=_(Ct,W,ht),rt===null?Je=Ct:rt.sibling=Ct,rt=Ct,st=gn}if(ht===J.length)return a(Y,st),Yt&&es(Y,ht),Je;if(st===null){for(;ht<J.length;ht++)st=Se(Y,J[ht],Ae),st!==null&&(W=_(st,W,ht),rt===null?Je=st:rt.sibling=st,rt=st);return Yt&&es(Y,ht),Je}for(st=f(Y,st);ht<J.length;ht++)gn=He(st,Y,ht,J[ht],Ae),gn!==null&&(i&&gn.alternate!==null&&st.delete(gn.key===null?ht:gn.key),W=_(gn,W,ht),rt===null?Je=gn:rt.sibling=gn,rt=gn);return i&&st.forEach(function(Lr){return s(Y,Lr)}),Yt&&es(Y,ht),Je}function Qe(Y,W,J,Ae){var Je=ee(J);if(typeof Je!="function")throw Error(t(150));if(J=Je.call(J),J==null)throw Error(t(151));for(var rt=Je=null,st=W,ht=W=0,gn=null,Ct=J.next();st!==null&&!Ct.done;ht++,Ct=J.next()){st.index>ht?(gn=st,st=null):gn=st.sibling;var Lr=_e(Y,st,Ct.value,Ae);if(Lr===null){st===null&&(st=gn);break}i&&st&&Lr.alternate===null&&s(Y,st),W=_(Lr,W,ht),rt===null?Je=Lr:rt.sibling=Lr,rt=Lr,st=gn}if(Ct.done)return a(Y,st),Yt&&es(Y,ht),Je;if(st===null){for(;!Ct.done;ht++,Ct=J.next())Ct=Se(Y,Ct.value,Ae),Ct!==null&&(W=_(Ct,W,ht),rt===null?Je=Ct:rt.sibling=Ct,rt=Ct);return Yt&&es(Y,ht),Je}for(st=f(Y,st);!Ct.done;ht++,Ct=J.next())Ct=He(st,Y,ht,Ct.value,Ae),Ct!==null&&(i&&Ct.alternate!==null&&st.delete(Ct.key===null?ht:Ct.key),W=_(Ct,W,ht),rt===null?Je=Ct:rt.sibling=Ct,rt=Ct);return i&&st.forEach(function(mE){return s(Y,mE)}),Yt&&es(Y,ht),Je}function tn(Y,W,J,Ae){if(typeof J=="object"&&J!==null&&J.type===k&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case N:e:{for(var Je=J.key,rt=W;rt!==null;){if(rt.key===Je){if(Je=J.type,Je===k){if(rt.tag===7){a(Y,rt.sibling),W=g(rt,J.props.children),W.return=Y,Y=W;break e}}else if(rt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&Nm(Je)===rt.type){a(Y,rt.sibling),W=g(rt,J.props),W.ref=Qo(Y,rt,J),W.return=Y,Y=W;break e}a(Y,rt);break}else s(Y,rt);rt=rt.sibling}J.type===k?(W=ls(J.props.children,Y.mode,Ae,J.key),W.return=Y,Y=W):(Ae=Xl(J.type,J.key,J.props,null,Y.mode,Ae),Ae.ref=Qo(Y,W,J),Ae.return=Y,Y=Ae)}return M(Y);case I:e:{for(rt=J.key;W!==null;){if(W.key===rt)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){a(Y,W.sibling),W=g(W,J.children||[]),W.return=Y,Y=W;break e}else{a(Y,W);break}else s(Y,W);W=W.sibling}W=Cf(J,Y.mode,Ae),W.return=Y,Y=W}return M(Y);case K:return rt=J._init,tn(Y,W,rt(J._payload),Ae)}if(ut(J))return $e(Y,W,J,Ae);if(ee(J))return Qe(Y,W,J,Ae);Sl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,W!==null&&W.tag===6?(a(Y,W.sibling),W=g(W,J),W.return=Y,Y=W):(a(Y,W),W=Af(J,Y.mode,Ae),W.return=Y,Y=W),M(Y)):a(Y,W)}return tn}var Xs=Um(!0),Fm=Um(!1),El=Sr(null),Ml=null,js=null,Uc=null;function Fc(){Uc=js=Ml=null}function Oc(i){var s=El.current;jt(El),i._currentValue=s}function kc(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function Ys(i,s){Ml=i,Uc=js=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(zn=!0),i.firstContext=null)}function ri(i){var s=i._currentValue;if(Uc!==i)if(i={context:i,memoizedValue:s,next:null},js===null){if(Ml===null)throw Error(t(308));js=i,Ml.dependencies={lanes:0,firstContext:i}}else js=js.next=i;return s}var ts=null;function Bc(i){ts===null?ts=[i]:ts.push(i)}function Om(i,s,a,f){var g=s.interleaved;return g===null?(a.next=a,Bc(s)):(a.next=g.next,g.next=a),s.interleaved=a,Zi(i,f)}function Zi(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Tr=!1;function zc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function km(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Qi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function wr(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(wt&2)!==0){var g=f.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s,Zi(i,a)}return g=f.interleaved,g===null?(s.next=s,Bc(f)):(s.next=g.next,g.next=s),f.interleaved=s,Zi(i,a)}function Tl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,Kr(i,a)}}function Bm(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var g=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?g=_=M:_=_.next=M,a=a.next}while(a!==null);_===null?g=_=s:_=_.next=s}else g=_=s;a={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function wl(i,s,a,f){var g=i.updateQueue;Tr=!1;var _=g.firstBaseUpdate,M=g.lastBaseUpdate,U=g.shared.pending;if(U!==null){g.shared.pending=null;var H=U,oe=H.next;H.next=null,M===null?_=oe:M.next=oe,M=H;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,U=ye.lastBaseUpdate,U!==M&&(U===null?ye.firstBaseUpdate=oe:U.next=oe,ye.lastBaseUpdate=H))}if(_!==null){var Se=g.baseState;M=0,ye=oe=H=null,U=_;do{var _e=U.lane,He=U.eventTime;if((f&_e)===_e){ye!==null&&(ye=ye.next={eventTime:He,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var $e=i,Qe=U;switch(_e=s,He=a,Qe.tag){case 1:if($e=Qe.payload,typeof $e=="function"){Se=$e.call(He,Se,_e);break e}Se=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Qe.payload,_e=typeof $e=="function"?$e.call(He,Se,_e):$e,_e==null)break e;Se=$({},Se,_e);break e;case 2:Tr=!0}}U.callback!==null&&U.lane!==0&&(i.flags|=64,_e=g.effects,_e===null?g.effects=[U]:_e.push(U))}else He={eventTime:He,lane:_e,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ye===null?(oe=ye=He,H=Se):ye=ye.next=He,M|=_e;if(U=U.next,U===null){if(U=g.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,g.lastBaseUpdate=_e,g.shared.pending=null}}while(!0);if(ye===null&&(H=Se),g.baseState=H,g.firstBaseUpdate=oe,g.lastBaseUpdate=ye,s=g.shared.interleaved,s!==null){g=s;do M|=g.lane,g=g.next;while(g!==s)}else _===null&&(g.shared.lanes=0);rs|=M,i.lanes=M,i.memoizedState=Se}}function zm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],g=f.callback;if(g!==null){if(f.callback=null,f=a,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var Jo={},Ii=Sr(Jo),ea=Sr(Jo),ta=Sr(Jo);function ns(i){if(i===Jo)throw Error(t(174));return i}function Vc(i,s){switch(Gt(ta,s),Gt(ea,i),Gt(Ii,Jo),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ve(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ve(s,i)}jt(Ii),Gt(Ii,s)}function qs(){jt(Ii),jt(ea),jt(ta)}function Vm(i){ns(ta.current);var s=ns(Ii.current),a=ve(s,i.type);s!==a&&(Gt(ea,i),Gt(Ii,a))}function Hc(i){ea.current===i&&(jt(Ii),jt(ea))}var $t=Sr(0);function Al(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Gc=[];function Wc(){for(var i=0;i<Gc.length;i++)Gc[i]._workInProgressVersionPrimary=null;Gc.length=0}var Cl=A.ReactCurrentDispatcher,Xc=A.ReactCurrentBatchConfig,is=0,Kt=null,un=null,pn=null,Rl=!1,na=!1,ia=0,OS=0;function wn(){throw Error(t(321))}function jc(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!_i(i[a],s[a]))return!1;return!0}function Yc(i,s,a,f,g,_){if(is=_,Kt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Cl.current=i===null||i.memoizedState===null?VS:HS,i=a(f,g),na){_=0;do{if(na=!1,ia=0,25<=_)throw Error(t(301));_+=1,pn=un=null,s.updateQueue=null,Cl.current=GS,i=a(f,g)}while(na)}if(Cl.current=Dl,s=un!==null&&un.next!==null,is=0,pn=un=Kt=null,Rl=!1,s)throw Error(t(300));return i}function qc(){var i=ia!==0;return ia=0,i}function Ni(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Kt.memoizedState=pn=i:pn=pn.next=i,pn}function si(){if(un===null){var i=Kt.alternate;i=i!==null?i.memoizedState:null}else i=un.next;var s=pn===null?Kt.memoizedState:pn.next;if(s!==null)pn=s,un=i;else{if(i===null)throw Error(t(310));un=i,i={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},pn===null?Kt.memoizedState=pn=i:pn=pn.next=i}return pn}function ra(i,s){return typeof s=="function"?s(i):s}function $c(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=un,g=f.baseQueue,_=a.pending;if(_!==null){if(g!==null){var M=g.next;g.next=_.next,_.next=M}f.baseQueue=g=_,a.pending=null}if(g!==null){_=g.next,f=f.baseState;var U=M=null,H=null,oe=_;do{var ye=oe.lane;if((is&ye)===ye)H!==null&&(H=H.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),f=oe.hasEagerState?oe.eagerState:i(f,oe.action);else{var Se={lane:ye,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};H===null?(U=H=Se,M=f):H=H.next=Se,Kt.lanes|=ye,rs|=ye}oe=oe.next}while(oe!==null&&oe!==_);H===null?M=f:H.next=U,_i(f,s.memoizedState)||(zn=!0),s.memoizedState=f,s.baseState=M,s.baseQueue=H,a.lastRenderedState=f}if(i=a.interleaved,i!==null){g=i;do _=g.lane,Kt.lanes|=_,rs|=_,g=g.next;while(g!==i)}else g===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Kc(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,g=a.pending,_=s.memoizedState;if(g!==null){a.pending=null;var M=g=g.next;do _=i(_,M.action),M=M.next;while(M!==g);_i(_,s.memoizedState)||(zn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,f]}function Hm(){}function Gm(i,s){var a=Kt,f=si(),g=s(),_=!_i(f.memoizedState,g);if(_&&(f.memoizedState=g,zn=!0),f=f.queue,Zc(jm.bind(null,a,f,i),[i]),f.getSnapshot!==s||_||pn!==null&&pn.memoizedState.tag&1){if(a.flags|=2048,sa(9,Xm.bind(null,a,f,g,s),void 0,null),mn===null)throw Error(t(349));(is&30)!==0||Wm(a,s,g)}return g}function Wm(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Xm(i,s,a,f){s.value=a,s.getSnapshot=f,Ym(s)&&qm(i)}function jm(i,s,a){return a(function(){Ym(s)&&qm(i)})}function Ym(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!_i(i,a)}catch{return!0}}function qm(i){var s=Zi(i,1);s!==null&&Mi(s,i,1,-1)}function $m(i){var s=Ni();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:i},s.queue=i,i=i.dispatch=zS.bind(null,Kt,i),[s.memoizedState,i]}function sa(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function Km(){return si().memoizedState}function bl(i,s,a,f){var g=Ni();Kt.flags|=i,g.memoizedState=sa(1|s,a,void 0,f===void 0?null:f)}function Pl(i,s,a,f){var g=si();f=f===void 0?null:f;var _=void 0;if(un!==null){var M=un.memoizedState;if(_=M.destroy,f!==null&&jc(f,M.deps)){g.memoizedState=sa(s,a,_,f);return}}Kt.flags|=i,g.memoizedState=sa(1|s,a,_,f)}function Zm(i,s){return bl(8390656,8,i,s)}function Zc(i,s){return Pl(2048,8,i,s)}function Qm(i,s){return Pl(4,2,i,s)}function Jm(i,s){return Pl(4,4,i,s)}function eg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function tg(i,s,a){return a=a!=null?a.concat([i]):null,Pl(4,4,eg.bind(null,s,i),a)}function Qc(){}function ng(i,s){var a=si();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&jc(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function ig(i,s){var a=si();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&jc(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function rg(i,s,a){return(is&21)===0?(i.baseState&&(i.baseState=!1,zn=!0),i.memoizedState=a):(_i(a,s)||(a=In(),Kt.lanes|=a,rs|=a,i.baseState=!0),s)}function kS(i,s){var a=Et;Et=a!==0&&4>a?a:4,i(!0);var f=Xc.transition;Xc.transition={};try{i(!1),s()}finally{Et=a,Xc.transition=f}}function sg(){return si().memoizedState}function BS(i,s,a){var f=br(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},og(i))ag(s,a);else if(a=Om(i,s,a,f),a!==null){var g=Un();Mi(a,i,f,g),lg(a,s,f)}}function zS(i,s,a){var f=br(i),g={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(og(i))ag(s,g);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var M=s.lastRenderedState,U=_(M,a);if(g.hasEagerState=!0,g.eagerState=U,_i(U,M)){var H=s.interleaved;H===null?(g.next=g,Bc(s)):(g.next=H.next,H.next=g),s.interleaved=g;return}}catch{}finally{}a=Om(i,s,g,f),a!==null&&(g=Un(),Mi(a,i,f,g),lg(a,s,f))}}function og(i){var s=i.alternate;return i===Kt||s!==null&&s===Kt}function ag(i,s){na=Rl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function lg(i,s,a){if((a&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,Kr(i,a)}}var Dl={readContext:ri,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},VS={readContext:ri,useCallback:function(i,s){return Ni().memoizedState=[i,s===void 0?null:s],i},useContext:ri,useEffect:Zm,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,bl(4194308,4,eg.bind(null,s,i),a)},useLayoutEffect:function(i,s){return bl(4194308,4,i,s)},useInsertionEffect:function(i,s){return bl(4,2,i,s)},useMemo:function(i,s){var a=Ni();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Ni();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=BS.bind(null,Kt,i),[f.memoizedState,i]},useRef:function(i){var s=Ni();return i={current:i},s.memoizedState=i},useState:$m,useDebugValue:Qc,useDeferredValue:function(i){return Ni().memoizedState=i},useTransition:function(){var i=$m(!1),s=i[0];return i=kS.bind(null,i[1]),Ni().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Kt,g=Ni();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),mn===null)throw Error(t(349));(is&30)!==0||Wm(f,s,a)}g.memoizedState=a;var _={value:a,getSnapshot:s};return g.queue=_,Zm(jm.bind(null,f,_,i),[i]),f.flags|=2048,sa(9,Xm.bind(null,f,_,a,s),void 0,null),a},useId:function(){var i=Ni(),s=mn.identifierPrefix;if(Yt){var a=Ki,f=$i;a=(f&~(1<<32-Tt(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=ia++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=OS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},HS={readContext:ri,useCallback:ng,useContext:ri,useEffect:Zc,useImperativeHandle:tg,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:ig,useReducer:$c,useRef:Km,useState:function(){return $c(ra)},useDebugValue:Qc,useDeferredValue:function(i){var s=si();return rg(s,un.memoizedState,i)},useTransition:function(){var i=$c(ra)[0],s=si().memoizedState;return[i,s]},useMutableSource:Hm,useSyncExternalStore:Gm,useId:sg,unstable_isNewReconciler:!1},GS={readContext:ri,useCallback:ng,useContext:ri,useEffect:Zc,useImperativeHandle:tg,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:ig,useReducer:Kc,useRef:Km,useState:function(){return Kc(ra)},useDebugValue:Qc,useDeferredValue:function(i){var s=si();return un===null?s.memoizedState=i:rg(s,un.memoizedState,i)},useTransition:function(){var i=Kc(ra)[0],s=si().memoizedState;return[i,s]},useMutableSource:Hm,useSyncExternalStore:Gm,useId:sg,unstable_isNewReconciler:!1};function xi(i,s){if(i&&i.defaultProps){s=$({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function Jc(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:$({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Ll={isMounted:function(i){return(i=i._reactInternals)?ji(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=Un(),g=br(i),_=Qi(f,g);_.payload=s,a!=null&&(_.callback=a),s=wr(i,_,g),s!==null&&(Mi(s,i,g,f),Tl(s,i,g))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=Un(),g=br(i),_=Qi(f,g);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=wr(i,_,g),s!==null&&(Mi(s,i,g,f),Tl(s,i,g))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Un(),f=br(i),g=Qi(a,f);g.tag=2,s!=null&&(g.callback=s),s=wr(i,g,f),s!==null&&(Mi(s,i,f,a),Tl(s,i,f))}};function ug(i,s,a,f,g,_,M){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,M):s.prototype&&s.prototype.isPureReactComponent?!Xo(a,f)||!Xo(g,_):!0}function cg(i,s,a){var f=!1,g=Er,_=s.contextType;return typeof _=="object"&&_!==null?_=ri(_):(g=Bn(s)?Qr:Tn.current,f=s.contextTypes,_=(f=f!=null)?Vs(i,g):Er),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ll,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=_),s}function fg(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Ll.enqueueReplaceState(s,s.state,null)}function ef(i,s,a,f){var g=i.stateNode;g.props=a,g.state=i.memoizedState,g.refs={},zc(i);var _=s.contextType;typeof _=="object"&&_!==null?g.context=ri(_):(_=Bn(s)?Qr:Tn.current,g.context=Vs(i,_)),g.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Jc(i,s,_,a),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&Ll.enqueueReplaceState(g,g.state,null),wl(i,a,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function $s(i,s){try{var a="",f=s;do a+=be(f),f=f.return;while(f);var g=a}catch(_){g=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:g,digest:null}}function tf(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function nf(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var WS=typeof WeakMap=="function"?WeakMap:Map;function dg(i,s,a){a=Qi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){Bl||(Bl=!0,_f=f),nf(i,s)},a}function hg(i,s,a){a=Qi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=s.value;a.payload=function(){return f(g)},a.callback=function(){nf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){nf(i,s),typeof f!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var M=s.stack;this.componentDidCatch(s.value,{componentStack:M!==null?M:""})}),a}function pg(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new WS;var g=new Set;f.set(s,g)}else g=f.get(s),g===void 0&&(g=new Set,f.set(s,g));g.has(a)||(g.add(a),i=rE.bind(null,i,s,a),s.then(i,i))}function mg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function gg(i,s,a,f,g){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Qi(-1,1),s.tag=2,wr(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var XS=A.ReactCurrentOwner,zn=!1;function Nn(i,s,a,f){s.child=i===null?Fm(s,null,a,f):Xs(s,i.child,a,f)}function vg(i,s,a,f,g){a=a.render;var _=s.ref;return Ys(s,g),f=Yc(i,s,a,f,_,g),a=qc(),i!==null&&!zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,Ji(i,s,g)):(Yt&&a&&Pc(s),s.flags|=1,Nn(i,s,f,g),s.child)}function _g(i,s,a,f,g){if(i===null){var _=a.type;return typeof _=="function"&&!wf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,yg(i,s,_,f,g)):(i=Xl(a.type,null,f,s,s.mode,g),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&g)===0){var M=_.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(M,f)&&i.ref===s.ref)return Ji(i,s,g)}return s.flags|=1,i=Dr(_,f),i.ref=s.ref,i.return=s,s.child=i}function yg(i,s,a,f,g){if(i!==null){var _=i.memoizedProps;if(Xo(_,f)&&i.ref===s.ref)if(zn=!1,s.pendingProps=f=_,(i.lanes&g)!==0)(i.flags&131072)!==0&&(zn=!0);else return s.lanes=i.lanes,Ji(i,s,g)}return rf(i,s,a,f,g)}function xg(i,s,a){var f=s.pendingProps,g=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Zs,Qn),Qn|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Gt(Zs,Qn),Qn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Gt(Zs,Qn),Qn|=f}else _!==null?(f=_.baseLanes|a,s.memoizedState=null):f=a,Gt(Zs,Qn),Qn|=f;return Nn(i,s,g,a),s.child}function Sg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function rf(i,s,a,f,g){var _=Bn(a)?Qr:Tn.current;return _=Vs(s,_),Ys(s,g),a=Yc(i,s,a,f,_,g),f=qc(),i!==null&&!zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,Ji(i,s,g)):(Yt&&f&&Pc(s),s.flags|=1,Nn(i,s,a,g),s.child)}function Eg(i,s,a,f,g){if(Bn(a)){var _=!0;gl(s)}else _=!1;if(Ys(s,g),s.stateNode===null)Nl(i,s),cg(s,a,f),ef(s,a,f,g),f=!0;else if(i===null){var M=s.stateNode,U=s.memoizedProps;M.props=U;var H=M.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=ri(oe):(oe=Bn(a)?Qr:Tn.current,oe=Vs(s,oe));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==f||H!==oe)&&fg(s,M,f,oe),Tr=!1;var _e=s.memoizedState;M.state=_e,wl(s,f,M,g),H=s.memoizedState,U!==f||_e!==H||kn.current||Tr?(typeof ye=="function"&&(Jc(s,a,ye,f),H=s.memoizedState),(U=Tr||ug(s,a,U,f,_e,H,oe))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(s.flags|=4194308)):(typeof M.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=H),M.props=f,M.state=H,M.context=oe,f=U):(typeof M.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{M=s.stateNode,km(i,s),U=s.memoizedProps,oe=s.type===s.elementType?U:xi(s.type,U),M.props=oe,Se=s.pendingProps,_e=M.context,H=a.contextType,typeof H=="object"&&H!==null?H=ri(H):(H=Bn(a)?Qr:Tn.current,H=Vs(s,H));var He=a.getDerivedStateFromProps;(ye=typeof He=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==Se||_e!==H)&&fg(s,M,f,H),Tr=!1,_e=s.memoizedState,M.state=_e,wl(s,f,M,g);var $e=s.memoizedState;U!==Se||_e!==$e||kn.current||Tr?(typeof He=="function"&&(Jc(s,a,He,f),$e=s.memoizedState),(oe=Tr||ug(s,a,oe,f,_e,$e,H)||!1)?(ye||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(f,$e,H),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(f,$e,H)),typeof M.componentDidUpdate=="function"&&(s.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=$e),M.props=f,M.state=$e,M.context=H,f=oe):(typeof M.componentDidUpdate!="function"||U===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),f=!1)}return sf(i,s,a,f,_,g)}function sf(i,s,a,f,g,_){Sg(i,s);var M=(s.flags&128)!==0;if(!f&&!M)return g&&Cm(s,a,!1),Ji(i,s,_);f=s.stateNode,XS.current=s;var U=M&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&M?(s.child=Xs(s,i.child,null,_),s.child=Xs(s,null,U,_)):Nn(i,s,U,_),s.memoizedState=f.state,g&&Cm(s,a,!0),s.child}function Mg(i){var s=i.stateNode;s.pendingContext?wm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&wm(i,s.context,!1),Vc(i,s.containerInfo)}function Tg(i,s,a,f,g){return Ws(),Nc(g),s.flags|=256,Nn(i,s,a,f),s.child}var of={dehydrated:null,treeContext:null,retryLane:0};function af(i){return{baseLanes:i,cachePool:null,transitions:null}}function wg(i,s,a){var f=s.pendingProps,g=$t.current,_=!1,M=(s.flags&128)!==0,U;if((U=M)||(U=i!==null&&i.memoizedState===null?!1:(g&2)!==0),U?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Gt($t,g&1),i===null)return Ic(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(M=f.children,i=f.fallback,_?(f=s.mode,_=s.child,M={mode:"hidden",children:M},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=M):_=jl(M,f,0,null),i=ls(i,f,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=af(a),s.memoizedState=of,i):lf(s,M));if(g=i.memoizedState,g!==null&&(U=g.dehydrated,U!==null))return jS(i,s,M,f,U,g,a);if(_){_=f.fallback,M=s.mode,g=i.child,U=g.sibling;var H={mode:"hidden",children:f.children};return(M&1)===0&&s.child!==g?(f=s.child,f.childLanes=0,f.pendingProps=H,s.deletions=null):(f=Dr(g,H),f.subtreeFlags=g.subtreeFlags&14680064),U!==null?_=Dr(U,_):(_=ls(_,M,a,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,M=i.child.memoizedState,M=M===null?af(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},_.memoizedState=M,_.childLanes=i.childLanes&~a,s.memoizedState=of,f}return _=i.child,i=_.sibling,f=Dr(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function lf(i,s){return s=jl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Il(i,s,a,f){return f!==null&&Nc(f),Xs(s,i.child,null,a),i=lf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function jS(i,s,a,f,g,_,M){if(a)return s.flags&256?(s.flags&=-257,f=tf(Error(t(422))),Il(i,s,M,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,g=s.mode,f=jl({mode:"visible",children:f.children},g,0,null),_=ls(_,g,M,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&Xs(s,i.child,null,M),s.child.memoizedState=af(M),s.memoizedState=of,_);if((s.mode&1)===0)return Il(i,s,M,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var U=f.dgst;return f=U,_=Error(t(419)),f=tf(_,f,void 0),Il(i,s,M,f)}if(U=(M&i.childLanes)!==0,zn||U){if(f=mn,f!==null){switch(M&-M){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|M))!==0?0:g,g!==0&&g!==_.retryLane&&(_.retryLane=g,Zi(i,g),Mi(f,i,g,-1))}return Tf(),f=tf(Error(t(421))),Il(i,s,M,f)}return g.data==="$?"?(s.flags|=128,s.child=i.child,s=sE.bind(null,i),g._reactRetry=s,null):(i=_.treeContext,Zn=xr(g.nextSibling),Kn=s,Yt=!0,yi=null,i!==null&&(ni[ii++]=$i,ni[ii++]=Ki,ni[ii++]=Jr,$i=i.id,Ki=i.overflow,Jr=s),s=lf(s,f.children),s.flags|=4096,s)}function Ag(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),kc(i.return,s,a)}function uf(i,s,a,f,g){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:g}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=g)}function Cg(i,s,a){var f=s.pendingProps,g=f.revealOrder,_=f.tail;if(Nn(i,s,f.children,a),f=$t.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Ag(i,a,s);else if(i.tag===19)Ag(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Gt($t,f),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(a=s.child,g=null;a!==null;)i=a.alternate,i!==null&&Al(i)===null&&(g=a),a=a.sibling;a=g,a===null?(g=s.child,s.child=null):(g=a.sibling,a.sibling=null),uf(s,!1,g,a,_);break;case"backwards":for(a=null,g=s.child,s.child=null;g!==null;){if(i=g.alternate,i!==null&&Al(i)===null){s.child=g;break}i=g.sibling,g.sibling=a,a=g,g=i}uf(s,!0,a,null,_);break;case"together":uf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Nl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Ji(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),rs|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Dr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Dr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function YS(i,s,a){switch(s.tag){case 3:Mg(s),Ws();break;case 5:Vm(s);break;case 1:Bn(s.type)&&gl(s);break;case 4:Vc(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,g=s.memoizedProps.value;Gt(El,f._currentValue),f._currentValue=g;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Gt($t,$t.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?wg(i,s,a):(Gt($t,$t.current&1),i=Ji(i,s,a),i!==null?i.sibling:null);Gt($t,$t.current&1);break;case 19:if(f=(a&s.childLanes)!==0,(i.flags&128)!==0){if(f)return Cg(i,s,a);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Gt($t,$t.current),f)break;return null;case 22:case 23:return s.lanes=0,xg(i,s,a)}return Ji(i,s,a)}var Rg,cf,bg,Pg;Rg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},cf=function(){},bg=function(i,s,a,f){var g=i.memoizedProps;if(g!==f){i=s.stateNode,ns(Ii.current);var _=null;switch(a){case"input":g=At(i,g),f=At(i,f),_=[];break;case"select":g=$({},g,{value:void 0}),f=$({},f,{value:void 0}),_=[];break;case"textarea":g=_t(i,g),f=_t(i,f),_=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=hl)}Ye(a,f);var M;a=null;for(oe in g)if(!f.hasOwnProperty(oe)&&g.hasOwnProperty(oe)&&g[oe]!=null)if(oe==="style"){var U=g[oe];for(M in U)U.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?_||(_=[]):(_=_||[]).push(oe,null));for(oe in f){var H=f[oe];if(U=g?.[oe],f.hasOwnProperty(oe)&&H!==U&&(H!=null||U!=null))if(oe==="style")if(U){for(M in U)!U.hasOwnProperty(M)||H&&H.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in H)H.hasOwnProperty(M)&&U[M]!==H[M]&&(a||(a={}),a[M]=H[M])}else a||(_||(_=[]),_.push(oe,a)),a=H;else oe==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(_=_||[]).push(oe,H)):oe==="children"?typeof H!="string"&&typeof H!="number"||(_=_||[]).push(oe,""+H):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(H!=null&&oe==="onScroll"&&Xt("scroll",i),_||U===H||(_=[])):(_=_||[]).push(oe,H))}a&&(_=_||[]).push("style",a);var oe=_;(s.updateQueue=oe)&&(s.flags|=4)}},Pg=function(i,s,a,f){a!==f&&(s.flags|=4)};function oa(i,s){if(!Yt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function An(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var g=i.child;g!==null;)a|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)a|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function qS(i,s,a){var f=s.pendingProps;switch(Dc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(s),null;case 1:return Bn(s.type)&&ml(),An(s),null;case 3:return f=s.stateNode,qs(),jt(kn),jt(Tn),Wc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(xl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,yi!==null&&(Sf(yi),yi=null))),cf(i,s),An(s),null;case 5:Hc(s);var g=ns(ta.current);if(a=s.type,i!==null&&s.stateNode!=null)bg(i,s,a,f,g),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return An(s),null}if(i=ns(Ii.current),xl(s)){f=s.stateNode,a=s.type;var _=s.memoizedProps;switch(f[Li]=s,f[Ko]=_,i=(s.mode&1)!==0,a){case"dialog":Xt("cancel",f),Xt("close",f);break;case"iframe":case"object":case"embed":Xt("load",f);break;case"video":case"audio":for(g=0;g<Yo.length;g++)Xt(Yo[g],f);break;case"source":Xt("error",f);break;case"img":case"image":case"link":Xt("error",f),Xt("load",f);break;case"details":Xt("toggle",f);break;case"input":ft(f,_),Xt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Xt("invalid",f);break;case"textarea":L(f,_),Xt("invalid",f)}Ye(a,_),g=null;for(var M in _)if(_.hasOwnProperty(M)){var U=_[M];M==="children"?typeof U=="string"?f.textContent!==U&&(_.suppressHydrationWarning!==!0&&dl(f.textContent,U,i),g=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(_.suppressHydrationWarning!==!0&&dl(f.textContent,U,i),g=["children",""+U]):o.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Xt("scroll",f)}switch(a){case"input":pt(f),Dt(f,_,!0);break;case"textarea":pt(f),Z(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=hl)}f=g,s.updateQueue=f,f!==null&&(s.flags|=4)}else{M=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=M.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=M.createElement(a,{is:f.is}):(i=M.createElement(a),a==="select"&&(M=i,f.multiple?M.multiple=!0:f.size&&(M.size=f.size))):i=M.createElementNS(i,a),i[Li]=s,i[Ko]=f,Rg(i,s,!1,!1),s.stateNode=i;e:{switch(M=Le(a,f),a){case"dialog":Xt("cancel",i),Xt("close",i),g=f;break;case"iframe":case"object":case"embed":Xt("load",i),g=f;break;case"video":case"audio":for(g=0;g<Yo.length;g++)Xt(Yo[g],i);g=f;break;case"source":Xt("error",i),g=f;break;case"img":case"image":case"link":Xt("error",i),Xt("load",i),g=f;break;case"details":Xt("toggle",i),g=f;break;case"input":ft(i,f),g=At(i,f),Xt("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=$({},f,{value:void 0}),Xt("invalid",i);break;case"textarea":L(i,f),g=_t(i,f),Xt("invalid",i);break;default:g=f}Ye(a,g),U=g;for(_ in U)if(U.hasOwnProperty(_)){var H=U[_];_==="style"?Ne(i,H):_==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ke(i,H)):_==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&Ee(i,H):typeof H=="number"&&Ee(i,""+H):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?H!=null&&_==="onScroll"&&Xt("scroll",i):H!=null&&R(i,_,H,M))}switch(a){case"input":pt(i),Dt(i,f,!1);break;case"textarea":pt(i),Z(i);break;case"option":f.value!=null&&i.setAttribute("value",""+pe(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?Bt(i,!!f.multiple,_,!1):f.defaultValue!=null&&Bt(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=hl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return An(s),null;case 6:if(i&&s.stateNode!=null)Pg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=ns(ta.current),ns(Ii.current),xl(s)){if(f=s.stateNode,a=s.memoizedProps,f[Li]=s,(_=f.nodeValue!==a)&&(i=Kn,i!==null))switch(i.tag){case 3:dl(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&dl(f.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[Li]=s,s.stateNode=f}return An(s),null;case 13:if(jt($t),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Yt&&Zn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Im(),Ws(),s.flags|=98560,_=!1;else if(_=xl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Li]=s}else Ws(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;An(s),_=!1}else yi!==null&&(Sf(yi),yi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||($t.current&1)!==0?cn===0&&(cn=3):Tf())),s.updateQueue!==null&&(s.flags|=4),An(s),null);case 4:return qs(),cf(i,s),i===null&&qo(s.stateNode.containerInfo),An(s),null;case 10:return Oc(s.type._context),An(s),null;case 17:return Bn(s.type)&&ml(),An(s),null;case 19:if(jt($t),_=s.memoizedState,_===null)return An(s),null;if(f=(s.flags&128)!==0,M=_.rendering,M===null)if(f)oa(_,!1);else{if(cn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(M=Al(i),M!==null){for(s.flags|=128,oa(_,!1),f=M.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)_=a,i=f,_.flags&=14680066,M=_.alternate,M===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=M.childLanes,_.lanes=M.lanes,_.child=M.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=M.memoizedProps,_.memoizedState=M.memoizedState,_.updateQueue=M.updateQueue,_.type=M.type,i=M.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Gt($t,$t.current&1|2),s.child}i=i.sibling}_.tail!==null&&X()>Qs&&(s.flags|=128,f=!0,oa(_,!1),s.lanes=4194304)}else{if(!f)if(i=Al(M),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),oa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!M.alternate&&!Yt)return An(s),null}else 2*X()-_.renderingStartTime>Qs&&a!==1073741824&&(s.flags|=128,f=!0,oa(_,!1),s.lanes=4194304);_.isBackwards?(M.sibling=s.child,s.child=M):(a=_.last,a!==null?a.sibling=M:s.child=M,_.last=M)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=X(),s.sibling=null,a=$t.current,Gt($t,f?a&1|2:a&1),s):(An(s),null);case 22:case 23:return Mf(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Qn&1073741824)!==0&&(An(s),s.subtreeFlags&6&&(s.flags|=8192)):An(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function $S(i,s){switch(Dc(s),s.tag){case 1:return Bn(s.type)&&ml(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return qs(),jt(kn),jt(Tn),Wc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Hc(s),null;case 13:if(jt($t),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ws()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return jt($t),null;case 4:return qs(),null;case 10:return Oc(s.type._context),null;case 22:case 23:return Mf(),null;case 24:return null;default:return null}}var Ul=!1,Cn=!1,KS=typeof WeakSet=="function"?WeakSet:Set,je=null;function Ks(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Qt(i,s,f)}else a.current=null}function ff(i,s,a){try{a()}catch(f){Qt(i,s,f)}}var Dg=!1;function ZS(i,s){if(Ec=tl,i=um(),pc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var g=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var M=0,U=-1,H=-1,oe=0,ye=0,Se=i,_e=null;t:for(;;){for(var He;Se!==a||g!==0&&Se.nodeType!==3||(U=M+g),Se!==_||f!==0&&Se.nodeType!==3||(H=M+f),Se.nodeType===3&&(M+=Se.nodeValue.length),(He=Se.firstChild)!==null;)_e=Se,Se=He;for(;;){if(Se===i)break t;if(_e===a&&++oe===g&&(U=M),_e===_&&++ye===f&&(H=M),(He=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=He}a=U===-1||H===-1?null:{start:U,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mc={focusedElem:i,selectionRange:a},tl=!1,je=s;je!==null;)if(s=je,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,je=i;else for(;je!==null;){s=je;try{var $e=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Qe=$e.memoizedProps,tn=$e.memoizedState,Y=s.stateNode,W=Y.getSnapshotBeforeUpdate(s.elementType===s.type?Qe:xi(s.type,Qe),tn);Y.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var J=s.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Qt(s,s.return,Ae)}if(i=s.sibling,i!==null){i.return=s.return,je=i;break}je=s.return}return $e=Dg,Dg=!1,$e}function aa(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var _=g.destroy;g.destroy=void 0,_!==void 0&&ff(s,a,_)}g=g.next}while(g!==f)}}function Fl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function df(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function Lg(i){var s=i.alternate;s!==null&&(i.alternate=null,Lg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Li],delete s[Ko],delete s[Cc],delete s[IS],delete s[NS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Ig(i){return i.tag===5||i.tag===3||i.tag===4}function Ng(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Ig(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function hf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=hl));else if(f!==4&&(i=i.child,i!==null))for(hf(i,s,a),i=i.sibling;i!==null;)hf(i,s,a),i=i.sibling}function pf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(pf(i,s,a),i=i.sibling;i!==null;)pf(i,s,a),i=i.sibling}var yn=null,Si=!1;function Ar(i,s,a){for(a=a.child;a!==null;)Ug(i,s,a),a=a.sibling}function Ug(i,s,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 5:Cn||Ks(a,s);case 6:var f=yn,g=Si;yn=null,Ar(i,s,a),yn=f,Si=g,yn!==null&&(Si?(i=yn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):yn.removeChild(a.stateNode));break;case 18:yn!==null&&(Si?(i=yn,a=a.stateNode,i.nodeType===8?Ac(i.parentNode,a):i.nodeType===1&&Ac(i,a),Bo(i)):Ac(yn,a.stateNode));break;case 4:f=yn,g=Si,yn=a.stateNode.containerInfo,Si=!0,Ar(i,s,a),yn=f,Si=g;break;case 0:case 11:case 14:case 15:if(!Cn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var _=g,M=_.destroy;_=_.tag,M!==void 0&&((_&2)!==0||(_&4)!==0)&&ff(a,s,M),g=g.next}while(g!==f)}Ar(i,s,a);break;case 1:if(!Cn&&(Ks(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(U){Qt(a,s,U)}Ar(i,s,a);break;case 21:Ar(i,s,a);break;case 22:a.mode&1?(Cn=(f=Cn)||a.memoizedState!==null,Ar(i,s,a),Cn=f):Ar(i,s,a);break;default:Ar(i,s,a)}}function Fg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new KS),s.forEach(function(f){var g=oE.bind(null,i,f);a.has(f)||(a.add(f),f.then(g,g))})}}function Ei(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var g=a[f];try{var _=i,M=s,U=M;e:for(;U!==null;){switch(U.tag){case 5:yn=U.stateNode,Si=!1;break e;case 3:yn=U.stateNode.containerInfo,Si=!0;break e;case 4:yn=U.stateNode.containerInfo,Si=!0;break e}U=U.return}if(yn===null)throw Error(t(160));Ug(_,M,g),yn=null,Si=!1;var H=g.alternate;H!==null&&(H.return=null),g.return=null}catch(oe){Qt(g,s,oe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Og(s,i),s=s.sibling}function Og(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ei(s,i),Ui(i),f&4){try{aa(3,i,i.return),Fl(3,i)}catch(Qe){Qt(i,i.return,Qe)}try{aa(5,i,i.return)}catch(Qe){Qt(i,i.return,Qe)}}break;case 1:Ei(s,i),Ui(i),f&512&&a!==null&&Ks(a,a.return);break;case 5:if(Ei(s,i),Ui(i),f&512&&a!==null&&Ks(a,a.return),i.flags&32){var g=i.stateNode;try{Ee(g,"")}catch(Qe){Qt(i,i.return,Qe)}}if(f&4&&(g=i.stateNode,g!=null)){var _=i.memoizedProps,M=a!==null?a.memoizedProps:_,U=i.type,H=i.updateQueue;if(i.updateQueue=null,H!==null)try{U==="input"&&_.type==="radio"&&_.name!=null&&tt(g,_),Le(U,M);var oe=Le(U,_);for(M=0;M<H.length;M+=2){var ye=H[M],Se=H[M+1];ye==="style"?Ne(g,Se):ye==="dangerouslySetInnerHTML"?Ke(g,Se):ye==="children"?Ee(g,Se):R(g,ye,Se,oe)}switch(U){case"input":Ge(g,_);break;case"textarea":w(g,_);break;case"select":var _e=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!_.multiple;var He=_.value;He!=null?Bt(g,!!_.multiple,He,!1):_e!==!!_.multiple&&(_.defaultValue!=null?Bt(g,!!_.multiple,_.defaultValue,!0):Bt(g,!!_.multiple,_.multiple?[]:"",!1))}g[Ko]=_}catch(Qe){Qt(i,i.return,Qe)}}break;case 6:if(Ei(s,i),Ui(i),f&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,_=i.memoizedProps;try{g.nodeValue=_}catch(Qe){Qt(i,i.return,Qe)}}break;case 3:if(Ei(s,i),Ui(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{Bo(s.containerInfo)}catch(Qe){Qt(i,i.return,Qe)}break;case 4:Ei(s,i),Ui(i);break;case 13:Ei(s,i),Ui(i),g=i.child,g.flags&8192&&(_=g.memoizedState!==null,g.stateNode.isHidden=_,!_||g.alternate!==null&&g.alternate.memoizedState!==null||(vf=X())),f&4&&Fg(i);break;case 22:if(ye=a!==null&&a.memoizedState!==null,i.mode&1?(Cn=(oe=Cn)||ye,Ei(s,i),Cn=oe):Ei(s,i),Ui(i),f&8192){if(oe=i.memoizedState!==null,(i.stateNode.isHidden=oe)&&!ye&&(i.mode&1)!==0)for(je=i,ye=i.child;ye!==null;){for(Se=je=ye;je!==null;){switch(_e=je,He=_e.child,_e.tag){case 0:case 11:case 14:case 15:aa(4,_e,_e.return);break;case 1:Ks(_e,_e.return);var $e=_e.stateNode;if(typeof $e.componentWillUnmount=="function"){f=_e,a=_e.return;try{s=f,$e.props=s.memoizedProps,$e.state=s.memoizedState,$e.componentWillUnmount()}catch(Qe){Qt(f,a,Qe)}}break;case 5:Ks(_e,_e.return);break;case 22:if(_e.memoizedState!==null){zg(Se);continue}}He!==null?(He.return=_e,je=He):zg(Se)}ye=ye.sibling}e:for(ye=null,Se=i;;){if(Se.tag===5){if(ye===null){ye=Se;try{g=Se.stateNode,oe?(_=g.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(U=Se.stateNode,H=Se.memoizedProps.style,M=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=Te("display",M))}catch(Qe){Qt(i,i.return,Qe)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=oe?"":Se.memoizedProps}catch(Qe){Qt(i,i.return,Qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ei(s,i),Ui(i),f&4&&Fg(i);break;case 21:break;default:Ei(s,i),Ui(i)}}function Ui(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Ig(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(Ee(g,""),f.flags&=-33);var _=Ng(i);pf(i,_,g);break;case 3:case 4:var M=f.stateNode.containerInfo,U=Ng(i);hf(i,U,M);break;default:throw Error(t(161))}}catch(H){Qt(i,i.return,H)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function QS(i,s,a){je=i,kg(i)}function kg(i,s,a){for(var f=(i.mode&1)!==0;je!==null;){var g=je,_=g.child;if(g.tag===22&&f){var M=g.memoizedState!==null||Ul;if(!M){var U=g.alternate,H=U!==null&&U.memoizedState!==null||Cn;U=Ul;var oe=Cn;if(Ul=M,(Cn=H)&&!oe)for(je=g;je!==null;)M=je,H=M.child,M.tag===22&&M.memoizedState!==null?Vg(g):H!==null?(H.return=M,je=H):Vg(g);for(;_!==null;)je=_,kg(_),_=_.sibling;je=g,Ul=U,Cn=oe}Bg(i)}else(g.subtreeFlags&8772)!==0&&_!==null?(_.return=g,je=_):Bg(i)}}function Bg(i){for(;je!==null;){var s=je;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Cn||Fl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Cn)if(a===null)f.componentDidMount();else{var g=s.elementType===s.type?a.memoizedProps:xi(s.type,a.memoizedProps);f.componentDidUpdate(g,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&zm(s,_,f);break;case 3:var M=s.updateQueue;if(M!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}zm(s,M,a)}break;case 5:var U=s.stateNode;if(a===null&&s.flags&4){a=U;var H=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var oe=s.alternate;if(oe!==null){var ye=oe.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&Bo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||s.flags&512&&df(s)}catch(_e){Qt(s,s.return,_e)}}if(s===i){je=null;break}if(a=s.sibling,a!==null){a.return=s.return,je=a;break}je=s.return}}function zg(i){for(;je!==null;){var s=je;if(s===i){je=null;break}var a=s.sibling;if(a!==null){a.return=s.return,je=a;break}je=s.return}}function Vg(i){for(;je!==null;){var s=je;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Fl(4,s)}catch(H){Qt(s,a,H)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var g=s.return;try{f.componentDidMount()}catch(H){Qt(s,g,H)}}var _=s.return;try{df(s)}catch(H){Qt(s,_,H)}break;case 5:var M=s.return;try{df(s)}catch(H){Qt(s,M,H)}}}catch(H){Qt(s,s.return,H)}if(s===i){je=null;break}var U=s.sibling;if(U!==null){U.return=s.return,je=U;break}je=s.return}}var JS=Math.ceil,Ol=A.ReactCurrentDispatcher,mf=A.ReactCurrentOwner,oi=A.ReactCurrentBatchConfig,wt=0,mn=null,sn=null,xn=0,Qn=0,Zs=Sr(0),cn=0,la=null,rs=0,kl=0,gf=0,ua=null,Vn=null,vf=0,Qs=1/0,er=null,Bl=!1,_f=null,Cr=null,zl=!1,Rr=null,Vl=0,ca=0,yf=null,Hl=-1,Gl=0;function Un(){return(wt&6)!==0?X():Hl!==-1?Hl:Hl=X()}function br(i){return(i.mode&1)===0?1:(wt&2)!==0&&xn!==0?xn&-xn:FS.transition!==null?(Gl===0&&(Gl=In()),Gl):(i=Et,i!==0||(i=window.event,i=i===void 0?16:Gp(i.type)),i)}function Mi(i,s,a,f){if(50<ca)throw ca=0,yf=null,Error(t(185));en(i,a,f),((wt&2)===0||i!==mn)&&(i===mn&&((wt&2)===0&&(kl|=a),cn===4&&Pr(i,xn)),Hn(i,f),a===1&&wt===0&&(s.mode&1)===0&&(Qs=X()+500,vl&&Mr()))}function Hn(i,s){var a=i.callbackNode;$r(i,s);var f=vi(i,i===mn?xn:0);if(f===0)a!==null&&j(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&j(a),s===1)i.tag===0?US(Gg.bind(null,i)):Rm(Gg.bind(null,i)),DS(function(){(wt&6)===0&&Mr()}),a=null;else{switch(Up(f)){case 1:a=Ue;break;case 4:a=qe;break;case 16:a=Ve;break;case 536870912:a=at;break;default:a=Ve}a=Zg(a,Hg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Hg(i,s){if(Hl=-1,Gl=0,(wt&6)!==0)throw Error(t(327));var a=i.callbackNode;if(Js()&&i.callbackNode!==a)return null;var f=vi(i,i===mn?xn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=Wl(i,f);else{s=f;var g=wt;wt|=2;var _=Xg();(mn!==i||xn!==s)&&(er=null,Qs=X()+500,os(i,s));do try{nE();break}catch(U){Wg(i,U)}while(!0);Fc(),Ol.current=_,wt=g,sn!==null?s=0:(mn=null,xn=0,s=cn)}if(s!==0){if(s===2&&(g=Vt(i),g!==0&&(f=g,s=xf(i,g))),s===1)throw a=la,os(i,0),Pr(i,f),Hn(i,X()),a;if(s===6)Pr(i,f);else{if(g=i.current.alternate,(f&30)===0&&!eE(g)&&(s=Wl(i,f),s===2&&(_=Vt(i),_!==0&&(f=_,s=xf(i,_))),s===1))throw a=la,os(i,0),Pr(i,f),Hn(i,X()),a;switch(i.finishedWork=g,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:as(i,Vn,er);break;case 3:if(Pr(i,f),(f&130023424)===f&&(s=vf+500-X(),10<s)){if(vi(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){Un(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=wc(as.bind(null,i,Vn,er),s);break}as(i,Vn,er);break;case 4:if(Pr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,g=-1;0<f;){var M=31-Tt(f);_=1<<M,M=s[M],M>g&&(g=M),f&=~_}if(f=g,f=X()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*JS(f/1960))-f,10<f){i.timeoutHandle=wc(as.bind(null,i,Vn,er),f);break}as(i,Vn,er);break;case 5:as(i,Vn,er);break;default:throw Error(t(329))}}}return Hn(i,X()),i.callbackNode===a?Hg.bind(null,i):null}function xf(i,s){var a=ua;return i.current.memoizedState.isDehydrated&&(os(i,s).flags|=256),i=Wl(i,s),i!==2&&(s=Vn,Vn=a,s!==null&&Sf(s)),i}function Sf(i){Vn===null?Vn=i:Vn.push.apply(Vn,i)}function eE(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var g=a[f],_=g.getSnapshot;g=g.value;try{if(!_i(_(),g))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Pr(i,s){for(s&=~gf,s&=~kl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-Tt(s),f=1<<a;i[a]=-1,s&=~f}}function Gg(i){if((wt&6)!==0)throw Error(t(327));Js();var s=vi(i,0);if((s&1)===0)return Hn(i,X()),null;var a=Wl(i,s);if(i.tag!==0&&a===2){var f=Vt(i);f!==0&&(s=f,a=xf(i,f))}if(a===1)throw a=la,os(i,0),Pr(i,s),Hn(i,X()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,as(i,Vn,er),Hn(i,X()),null}function Ef(i,s){var a=wt;wt|=1;try{return i(s)}finally{wt=a,wt===0&&(Qs=X()+500,vl&&Mr())}}function ss(i){Rr!==null&&Rr.tag===0&&(wt&6)===0&&Js();var s=wt;wt|=1;var a=oi.transition,f=Et;try{if(oi.transition=null,Et=1,i)return i()}finally{Et=f,oi.transition=a,wt=s,(wt&6)===0&&Mr()}}function Mf(){Qn=Zs.current,jt(Zs)}function os(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,PS(a)),sn!==null)for(a=sn.return;a!==null;){var f=a;switch(Dc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&ml();break;case 3:qs(),jt(kn),jt(Tn),Wc();break;case 5:Hc(f);break;case 4:qs();break;case 13:jt($t);break;case 19:jt($t);break;case 10:Oc(f.type._context);break;case 22:case 23:Mf()}a=a.return}if(mn=i,sn=i=Dr(i.current,null),xn=Qn=s,cn=0,la=null,gf=kl=rs=0,Vn=ua=null,ts!==null){for(s=0;s<ts.length;s++)if(a=ts[s],f=a.interleaved,f!==null){a.interleaved=null;var g=f.next,_=a.pending;if(_!==null){var M=_.next;_.next=g,f.next=M}a.pending=f}ts=null}return i}function Wg(i,s){do{var a=sn;try{if(Fc(),Cl.current=Dl,Rl){for(var f=Kt.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Rl=!1}if(is=0,pn=un=Kt=null,na=!1,ia=0,mf.current=null,a===null||a.return===null){cn=1,la=s,sn=null;break}e:{var _=i,M=a.return,U=a,H=s;if(s=xn,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var oe=H,ye=U,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var He=mg(M);if(He!==null){He.flags&=-257,gg(He,M,U,_,s),He.mode&1&&pg(_,oe,s),s=He,H=oe;var $e=s.updateQueue;if($e===null){var Qe=new Set;Qe.add(H),s.updateQueue=Qe}else $e.add(H);break e}else{if((s&1)===0){pg(_,oe,s),Tf();break e}H=Error(t(426))}}else if(Yt&&U.mode&1){var tn=mg(M);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),gg(tn,M,U,_,s),Nc($s(H,U));break e}}_=H=$s(H,U),cn!==4&&(cn=2),ua===null?ua=[_]:ua.push(_),_=M;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Y=dg(_,H,s);Bm(_,Y);break e;case 1:U=H;var W=_.type,J=_.stateNode;if((_.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(Cr===null||!Cr.has(J)))){_.flags|=65536,s&=-s,_.lanes|=s;var Ae=hg(_,U,s);Bm(_,Ae);break e}}_=_.return}while(_!==null)}Yg(a)}catch(Je){s=Je,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function Xg(){var i=Ol.current;return Ol.current=Dl,i===null?Dl:i}function Tf(){(cn===0||cn===3||cn===2)&&(cn=4),mn===null||(rs&268435455)===0&&(kl&268435455)===0||Pr(mn,xn)}function Wl(i,s){var a=wt;wt|=2;var f=Xg();(mn!==i||xn!==s)&&(er=null,os(i,s));do try{tE();break}catch(g){Wg(i,g)}while(!0);if(Fc(),wt=a,Ol.current=f,sn!==null)throw Error(t(261));return mn=null,xn=0,cn}function tE(){for(;sn!==null;)jg(sn)}function nE(){for(;sn!==null&&!ae();)jg(sn)}function jg(i){var s=Kg(i.alternate,i,Qn);i.memoizedProps=i.pendingProps,s===null?Yg(i):sn=s,mf.current=null}function Yg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=qS(a,s,Qn),a!==null){sn=a;return}}else{if(a=$S(a,s),a!==null){a.flags&=32767,sn=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{cn=6,sn=null;return}}if(s=s.sibling,s!==null){sn=s;return}sn=s=i}while(s!==null);cn===0&&(cn=5)}function as(i,s,a){var f=Et,g=oi.transition;try{oi.transition=null,Et=1,iE(i,s,a,f)}finally{oi.transition=g,Et=f}return null}function iE(i,s,a,f){do Js();while(Rr!==null);if((wt&6)!==0)throw Error(t(327));a=i.finishedWork;var g=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(Mn(i,_),i===mn&&(sn=mn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||zl||(zl=!0,Zg(Ve,function(){return Js(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=oi.transition,oi.transition=null;var M=Et;Et=1;var U=wt;wt|=4,mf.current=null,ZS(i,a),Og(a,i),MS(Mc),tl=!!Ec,Mc=Ec=null,i.current=a,QS(a),le(),wt=U,Et=M,oi.transition=_}else i.current=a;if(zl&&(zl=!1,Rr=i,Vl=g),_=i.pendingLanes,_===0&&(Cr=null),It(a.stateNode),Hn(i,X()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)g=s[a],f(g.value,{componentStack:g.stack,digest:g.digest});if(Bl)throw Bl=!1,i=_f,_f=null,i;return(Vl&1)!==0&&i.tag!==0&&Js(),_=i.pendingLanes,(_&1)!==0?i===yf?ca++:(ca=0,yf=i):ca=0,Mr(),null}function Js(){if(Rr!==null){var i=Up(Vl),s=oi.transition,a=Et;try{if(oi.transition=null,Et=16>i?16:i,Rr===null)var f=!1;else{if(i=Rr,Rr=null,Vl=0,(wt&6)!==0)throw Error(t(331));var g=wt;for(wt|=4,je=i.current;je!==null;){var _=je,M=_.child;if((je.flags&16)!==0){var U=_.deletions;if(U!==null){for(var H=0;H<U.length;H++){var oe=U[H];for(je=oe;je!==null;){var ye=je;switch(ye.tag){case 0:case 11:case 15:aa(8,ye,_)}var Se=ye.child;if(Se!==null)Se.return=ye,je=Se;else for(;je!==null;){ye=je;var _e=ye.sibling,He=ye.return;if(Lg(ye),ye===oe){je=null;break}if(_e!==null){_e.return=He,je=_e;break}je=He}}}var $e=_.alternate;if($e!==null){var Qe=$e.child;if(Qe!==null){$e.child=null;do{var tn=Qe.sibling;Qe.sibling=null,Qe=tn}while(Qe!==null)}}je=_}}if((_.subtreeFlags&2064)!==0&&M!==null)M.return=_,je=M;else e:for(;je!==null;){if(_=je,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:aa(9,_,_.return)}var Y=_.sibling;if(Y!==null){Y.return=_.return,je=Y;break e}je=_.return}}var W=i.current;for(je=W;je!==null;){M=je;var J=M.child;if((M.subtreeFlags&2064)!==0&&J!==null)J.return=M,je=J;else e:for(M=W;je!==null;){if(U=je,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Fl(9,U)}}catch(Je){Qt(U,U.return,Je)}if(U===M){je=null;break e}var Ae=U.sibling;if(Ae!==null){Ae.return=U.return,je=Ae;break e}je=U.return}}if(wt=g,Mr(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(et,i)}catch{}f=!0}return f}finally{Et=a,oi.transition=s}}return!1}function qg(i,s,a){s=$s(a,s),s=dg(i,s,1),i=wr(i,s,1),s=Un(),i!==null&&(en(i,1,s),Hn(i,s))}function Qt(i,s,a){if(i.tag===3)qg(i,i,a);else for(;s!==null;){if(s.tag===3){qg(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Cr===null||!Cr.has(f))){i=$s(a,i),i=hg(s,i,1),s=wr(s,i,1),i=Un(),s!==null&&(en(s,1,i),Hn(s,i));break}}s=s.return}}function rE(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=Un(),i.pingedLanes|=i.suspendedLanes&a,mn===i&&(xn&a)===a&&(cn===4||cn===3&&(xn&130023424)===xn&&500>X()-vf?os(i,0):gf|=a),Hn(i,s)}function $g(i,s){s===0&&((i.mode&1)===0?s=1:(s=St,St<<=1,(St&130023424)===0&&(St=4194304)));var a=Un();i=Zi(i,s),i!==null&&(en(i,s,a),Hn(i,a))}function sE(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),$g(i,a)}function oE(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(a=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),$g(i,a)}var Kg;Kg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||kn.current)zn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return zn=!1,YS(i,s,a);zn=(i.flags&131072)!==0}else zn=!1,Yt&&(s.flags&1048576)!==0&&bm(s,yl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Nl(i,s),i=s.pendingProps;var g=Vs(s,Tn.current);Ys(s,a),g=Yc(null,s,f,i,g,a);var _=qc();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Bn(f)?(_=!0,gl(s)):_=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,zc(s),g.updater=Ll,s.stateNode=g,g._reactInternals=s,ef(s,f,i,a),s=sf(null,s,f,!0,_,a)):(s.tag=0,Yt&&_&&Pc(s),Nn(null,s,g,a),s=s.child),s;case 16:f=s.elementType;e:{switch(Nl(i,s),i=s.pendingProps,g=f._init,f=g(f._payload),s.type=f,g=s.tag=lE(f),i=xi(f,i),g){case 0:s=rf(null,s,f,i,a);break e;case 1:s=Eg(null,s,f,i,a);break e;case 11:s=vg(null,s,f,i,a);break e;case 14:s=_g(null,s,f,xi(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:xi(f,g),rf(i,s,f,g,a);case 1:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:xi(f,g),Eg(i,s,f,g,a);case 3:e:{if(Mg(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,g=_.element,km(i,s),wl(s,f,null,a);var M=s.memoizedState;if(f=M.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){g=$s(Error(t(423)),s),s=Tg(i,s,f,a,g);break e}else if(f!==g){g=$s(Error(t(424)),s),s=Tg(i,s,f,a,g);break e}else for(Zn=xr(s.stateNode.containerInfo.firstChild),Kn=s,Yt=!0,yi=null,a=Fm(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ws(),f===g){s=Ji(i,s,a);break e}Nn(i,s,f,a)}s=s.child}return s;case 5:return Vm(s),i===null&&Ic(s),f=s.type,g=s.pendingProps,_=i!==null?i.memoizedProps:null,M=g.children,Tc(f,g)?M=null:_!==null&&Tc(f,_)&&(s.flags|=32),Sg(i,s),Nn(i,s,M,a),s.child;case 6:return i===null&&Ic(s),null;case 13:return wg(i,s,a);case 4:return Vc(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Xs(s,null,f,a):Nn(i,s,f,a),s.child;case 11:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:xi(f,g),vg(i,s,f,g,a);case 7:return Nn(i,s,s.pendingProps,a),s.child;case 8:return Nn(i,s,s.pendingProps.children,a),s.child;case 12:return Nn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,g=s.pendingProps,_=s.memoizedProps,M=g.value,Gt(El,f._currentValue),f._currentValue=M,_!==null)if(_i(_.value,M)){if(_.children===g.children&&!kn.current){s=Ji(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var U=_.dependencies;if(U!==null){M=_.child;for(var H=U.firstContext;H!==null;){if(H.context===f){if(_.tag===1){H=Qi(-1,a&-a),H.tag=2;var oe=_.updateQueue;if(oe!==null){oe=oe.shared;var ye=oe.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),oe.pending=H}}_.lanes|=a,H=_.alternate,H!==null&&(H.lanes|=a),kc(_.return,a,s),U.lanes|=a;break}H=H.next}}else if(_.tag===10)M=_.type===s.type?null:_.child;else if(_.tag===18){if(M=_.return,M===null)throw Error(t(341));M.lanes|=a,U=M.alternate,U!==null&&(U.lanes|=a),kc(M,a,s),M=_.sibling}else M=_.child;if(M!==null)M.return=_;else for(M=_;M!==null;){if(M===s){M=null;break}if(_=M.sibling,_!==null){_.return=M.return,M=_;break}M=M.return}_=M}Nn(i,s,g.children,a),s=s.child}return s;case 9:return g=s.type,f=s.pendingProps.children,Ys(s,a),g=ri(g),f=f(g),s.flags|=1,Nn(i,s,f,a),s.child;case 14:return f=s.type,g=xi(f,s.pendingProps),g=xi(f.type,g),_g(i,s,f,g,a);case 15:return yg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:xi(f,g),Nl(i,s),s.tag=1,Bn(f)?(i=!0,gl(s)):i=!1,Ys(s,a),cg(s,f,g),ef(s,f,g,a),sf(null,s,f,!0,i,a);case 19:return Cg(i,s,a);case 22:return xg(i,s,a)}throw Error(t(156,s.tag))};function Zg(i,s){return b(i,s)}function aE(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(i,s,a,f){return new aE(i,s,a,f)}function wf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function lE(i){if(typeof i=="function")return wf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===q)return 11;if(i===de)return 14}return 2}function Dr(i,s){var a=i.alternate;return a===null?(a=ai(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Xl(i,s,a,f,g,_){var M=2;if(f=i,typeof i=="function")wf(i)&&(M=1);else if(typeof i=="string")M=5;else e:switch(i){case k:return ls(a.children,g,_,s);case F:M=8,g|=8;break;case P:return i=ai(12,a,s,g|2),i.elementType=P,i.lanes=_,i;case ie:return i=ai(13,a,s,g),i.elementType=ie,i.lanes=_,i;case ue:return i=ai(19,a,s,g),i.elementType=ue,i.lanes=_,i;case se:return jl(a,g,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:M=10;break e;case V:M=9;break e;case q:M=11;break e;case de:M=14;break e;case K:M=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ai(M,a,s,g),s.elementType=i,s.type=f,s.lanes=_,s}function ls(i,s,a,f){return i=ai(7,i,f,s),i.lanes=a,i}function jl(i,s,a,f){return i=ai(22,i,f,s),i.elementType=se,i.lanes=a,i.stateNode={isHidden:!1},i}function Af(i,s,a){return i=ai(6,i,null,s),i.lanes=a,i}function Cf(i,s,a){return s=ai(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function uE(i,s,a,f,g){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Rf(i,s,a,f,g,_,M,U,H){return i=new uE(i,s,a,U,H),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ai(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(_),i}function cE(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function Qg(i){if(!i)return Er;i=i._reactInternals;e:{if(ji(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Bn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Bn(a))return Am(i,a,s)}return s}function Jg(i,s,a,f,g,_,M,U,H){return i=Rf(a,f,!0,i,g,_,M,U,H),i.context=Qg(null),a=i.current,f=Un(),g=br(a),_=Qi(f,g),_.callback=s??null,wr(a,_,g),i.current.lanes=g,en(i,g,f),Hn(i,f),i}function Yl(i,s,a,f){var g=s.current,_=Un(),M=br(g);return a=Qg(a),s.context===null?s.context=a:s.pendingContext=a,s=Qi(_,M),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=wr(g,s,M),i!==null&&(Mi(i,g,M,_),Tl(i,g,M)),M}function ql(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function ev(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function bf(i,s){ev(i,s),(i=i.alternate)&&ev(i,s)}function fE(){return null}var tv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Pf(i){this._internalRoot=i}$l.prototype.render=Pf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Yl(i,s,null,null)},$l.prototype.unmount=Pf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ss(function(){Yl(null,i,null,null)}),s[Yi]=null}};function $l(i){this._internalRoot=i}$l.prototype.unstable_scheduleHydration=function(i){if(i){var s=kp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<vr.length&&s!==0&&s<vr[a].priority;a++);vr.splice(a,0,i),a===0&&Vp(i)}};function Df(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Kl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function nv(){}function dE(i,s,a,f,g){if(g){if(typeof f=="function"){var _=f;f=function(){var oe=ql(M);_.call(oe)}}var M=Jg(s,f,i,0,null,!1,!1,"",nv);return i._reactRootContainer=M,i[Yi]=M.current,qo(i.nodeType===8?i.parentNode:i),ss(),M}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var U=f;f=function(){var oe=ql(H);U.call(oe)}}var H=Rf(i,0,!1,null,null,!1,!1,"",nv);return i._reactRootContainer=H,i[Yi]=H.current,qo(i.nodeType===8?i.parentNode:i),ss(function(){Yl(s,H,a,f)}),H}function Zl(i,s,a,f,g){var _=a._reactRootContainer;if(_){var M=_;if(typeof g=="function"){var U=g;g=function(){var H=ql(M);U.call(H)}}Yl(s,M,i,g)}else M=dE(a,s,i,g,f);return ql(M)}Fp=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=ln(s.pendingLanes);a!==0&&(Kr(s,a|1),Hn(s,X()),(wt&6)===0&&(Qs=X()+500,Mr()))}break;case 13:ss(function(){var f=Zi(i,1);if(f!==null){var g=Un();Mi(f,i,1,g)}}),bf(i,1)}},tc=function(i){if(i.tag===13){var s=Zi(i,134217728);if(s!==null){var a=Un();Mi(s,i,134217728,a)}bf(i,134217728)}},Op=function(i){if(i.tag===13){var s=br(i),a=Zi(i,s);if(a!==null){var f=Un();Mi(a,i,s,f)}bf(i,s)}},kp=function(){return Et},Bp=function(i,s){var a=Et;try{return Et=i,s()}finally{Et=a}},Me=function(i,s,a){switch(s){case"input":if(Ge(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var g=pl(f);if(!g)throw Error(t(90));Ht(f),Ge(f,g)}}}break;case"textarea":w(i,a);break;case"select":s=a.value,s!=null&&Bt(i,!!a.multiple,s,!1)}},Ze=Ef,mt=ss;var hE={usingClientEntryPoint:!1,Events:[Zo,Bs,pl,te,Pe,Ef]},fa={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pE={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Za(i),i===null?null:i.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||fE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{et=Ql.inject(pE),dt=Ql}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hE,Gn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(s))throw Error(t(200));return cE(i,s,null,a)},Gn.createRoot=function(i,s){if(!Df(i))throw Error(t(299));var a=!1,f="",g=tv;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=Rf(i,1,!1,null,null,a,!1,f,g),i[Yi]=s.current,qo(i.nodeType===8?i.parentNode:i),new Pf(s)},Gn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Za(s),i=i===null?null:i.stateNode,i},Gn.flushSync=function(i){return ss(i)},Gn.hydrate=function(i,s,a){if(!Kl(s))throw Error(t(200));return Zl(null,i,s,!0,a)},Gn.hydrateRoot=function(i,s,a){if(!Df(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,g=!1,_="",M=tv;if(a!=null&&(a.unstable_strictMode===!0&&(g=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),s=Jg(s,null,i,1,a??null,g,!1,_,M),i[Yi]=s.current,qo(i),f)for(i=0;i<f.length;i++)a=f[i],g=a._getVersion,g=g(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,g]:s.mutableSourceEagerHydrationData.push(a,g);return new $l(s)},Gn.render=function(i,s,a){if(!Kl(s))throw Error(t(200));return Zl(null,i,s,!1,a)},Gn.unmountComponentAtNode=function(i){if(!Kl(i))throw Error(t(40));return i._reactRootContainer?(ss(function(){Zl(null,null,i,!1,function(){i._reactRootContainer=null,i[Yi]=null})}),!0):!1},Gn.unstable_batchedUpdates=Ef,Gn.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!Kl(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Zl(i,s,a,!1,f)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var cv;function w_(){if(cv)return Nf.exports;cv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Nf.exports=SE(),Nf.exports}var fv;function EE(){if(fv)return Jl;fv=1;var n=w_();return Jl.createRoot=n.createRoot,Jl.hydrateRoot=n.hydrateRoot,Jl}var ME=EE(),Fe=Gh();const De=T_(Fe);var TE=w_();const wE=T_(TE);function AE(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}const CE=n=>{switch(n){case"success":return PE;case"info":return LE;case"warning":return DE;case"error":return IE;default:return null}},RE=Array(12).fill(0),bE=({visible:n,className:e})=>De.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":n},De.createElement("div",{className:"sonner-spinner"},RE.map((t,r)=>De.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),PE=De.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},De.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),DE=De.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},De.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),LE=De.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},De.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),IE=De.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},De.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),NE=De.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},De.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),De.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),UE=()=>{const[n,e]=De.useState(document.hidden);return De.useEffect(()=>{const t=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),n};let Dd=1;class FE{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;const{message:r,...o}=e,l=typeof e?.id=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Dd++,u=this.toasts.find(d=>d.id===l),c=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(l)&&this.dismissedToasts.delete(l),u?this.toasts=this.toasts.map(d=>d.id===l?(this.publish({...d,...e,id:l,title:r}),{...d,...e,id:l,dismissible:c,title:r}):d):this.addToast({title:r,...o,dismissible:c,id:l}),l},this.dismiss=e=>(e?(this.dismissedToasts.add(e),requestAnimationFrame(()=>this.subscribers.forEach(t=>t({id:e,dismiss:!0})))):this.toasts.forEach(t=>{this.subscribers.forEach(r=>r({id:t.id,dismiss:!0}))}),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let r;t.loading!==void 0&&(r=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));const o=Promise.resolve(e instanceof Function?e():e);let l=r!==void 0,u;const c=o.then(async h=>{if(u=["resolve",h],De.isValidElement(h))l=!1,this.create({id:r,type:"default",message:h});else if(kE(h)&&!h.ok){l=!1;const p=typeof t.error=="function"?await t.error(`HTTP error! status: ${h.status}`):t.error,v=typeof t.description=="function"?await t.description(`HTTP error! status: ${h.status}`):t.description,E=typeof p=="object"&&!De.isValidElement(p)?p:{message:p};this.create({id:r,type:"error",description:v,...E})}else if(h instanceof Error){l=!1;const p=typeof t.error=="function"?await t.error(h):t.error,v=typeof t.description=="function"?await t.description(h):t.description,E=typeof p=="object"&&!De.isValidElement(p)?p:{message:p};this.create({id:r,type:"error",description:v,...E})}else if(t.success!==void 0){l=!1;const p=typeof t.success=="function"?await t.success(h):t.success,v=typeof t.description=="function"?await t.description(h):t.description,E=typeof p=="object"&&!De.isValidElement(p)?p:{message:p};this.create({id:r,type:"success",description:v,...E})}}).catch(async h=>{if(u=["reject",h],t.error!==void 0){l=!1;const m=typeof t.error=="function"?await t.error(h):t.error,p=typeof t.description=="function"?await t.description(h):t.description,x=typeof m=="object"&&!De.isValidElement(m)?m:{message:m};this.create({id:r,type:"error",description:p,...x})}}).finally(()=>{l&&(this.dismiss(r),r=void 0),t.finally==null||t.finally.call(t)}),d=()=>new Promise((h,m)=>c.then(()=>u[0]==="reject"?m(u[1]):h(u[1])).catch(m));return typeof r!="string"&&typeof r!="number"?{unwrap:d}:Object.assign(r,{unwrap:d})},this.custom=(e,t)=>{const r=t?.id||Dd++;return this.create({jsx:e(r),id:r,...t}),r},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Xn=new FE,OE=(n,e)=>{const t=e?.id||Dd++;return Xn.addToast({title:n,...e,id:t}),t},kE=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",BE=OE,zE=()=>Xn.toasts,VE=()=>Xn.getActiveToasts();Object.assign(BE,{success:Xn.success,info:Xn.info,warning:Xn.warning,error:Xn.error,custom:Xn.custom,message:Xn.message,promise:Xn.promise,dismiss:Xn.dismiss,loading:Xn.loading},{getHistory:zE,getToasts:VE});AE("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function eu(n){return n.label!==void 0}const HE=3,GE="24px",WE="16px",dv=4e3,XE=356,jE=14,YE=45,qE=200;function Fi(...n){return n.filter(Boolean).join(" ")}function $E(n){const[e,t]=n.split("-"),r=[];return e&&r.push(e),t&&r.push(t),r}const KE=n=>{var e,t,r,o,l,u,c,d,h;const{invert:m,toast:p,unstyled:v,interacting:x,setHeights:E,visibleToasts:T,heights:S,index:y,toasts:D,expanded:R,removeToast:A,defaultRichColors:N,closeButton:I,style:k,cancelButtonStyle:F,actionButtonStyle:P,className:C="",descriptionClassName:V="",duration:q,position:ie,gap:ue,expandByDefault:de,classNames:K,icons:se,closeButtonAriaLabel:B="Close toast"}=n,[ee,$]=De.useState(null),[O,re]=De.useState(null),[ge,Ce]=De.useState(!1),[be,Q]=De.useState(!1),[ce,pe]=De.useState(!1),[Ie,ke]=De.useState(!1),[pt,Ht]=De.useState(!1),[z,At]=De.useState(0),[ft,tt]=De.useState(0),Ge=De.useRef(p.duration||q||dv),Dt=De.useRef(null),Be=De.useRef(null),ut=y===0,Bt=y+1<=T,_t=p.type,L=p.dismissible!==!1,w=p.className||"",Z=p.descriptionClassName||"",he=De.useMemo(()=>S.findIndex(te=>te.toastId===p.id)||0,[S,p.id]),ve=De.useMemo(()=>{var te;return(te=p.closeButton)!=null?te:I},[p.closeButton,I]),fe=De.useMemo(()=>p.duration||q||dv,[p.duration,q]),Ke=De.useRef(0),Ee=De.useRef(0),We=De.useRef(0),Xe=De.useRef(null),[Te,Ne]=ie.split("-"),nt=De.useMemo(()=>S.reduce((te,Pe,Ze)=>Ze>=he?te:te+Pe.height,0),[S,he]),Ye=UE(),Le=p.invert||m,lt=_t==="loading";Ee.current=De.useMemo(()=>he*ue+nt,[he,nt]),De.useEffect(()=>{Ge.current=fe},[fe]),De.useEffect(()=>{Ce(!0)},[]),De.useEffect(()=>{const te=Be.current;if(te){const Pe=te.getBoundingClientRect().height;return tt(Pe),E(Ze=>[{toastId:p.id,height:Pe,position:p.position},...Ze]),()=>E(Ze=>Ze.filter(mt=>mt.toastId!==p.id))}},[E,p.id]),De.useLayoutEffect(()=>{if(!ge)return;const te=Be.current,Pe=te.style.height;te.style.height="auto";const Ze=te.getBoundingClientRect().height;te.style.height=Pe,tt(Ze),E(mt=>mt.find(Lt=>Lt.toastId===p.id)?mt.map(Lt=>Lt.toastId===p.id?{...Lt,height:Ze}:Lt):[{toastId:p.id,height:Ze,position:p.position},...mt])},[ge,p.title,p.description,E,p.id,p.jsx,p.action,p.cancel]);const G=De.useCallback(()=>{Q(!0),At(Ee.current),E(te=>te.filter(Pe=>Pe.toastId!==p.id)),setTimeout(()=>{A(p)},qE)},[p,A,E,Ee]);De.useEffect(()=>{if(p.promise&&_t==="loading"||p.duration===1/0||p.type==="loading")return;let te;return R||x||Ye?(()=>{if(We.current<Ke.current){const mt=new Date().getTime()-Ke.current;Ge.current=Ge.current-mt}We.current=new Date().getTime()})():(()=>{Ge.current!==1/0&&(Ke.current=new Date().getTime(),te=setTimeout(()=>{p.onAutoClose==null||p.onAutoClose.call(p,p),G()},Ge.current))})(),()=>clearTimeout(te)},[R,x,p,_t,Ye,G]),De.useEffect(()=>{p.delete&&(G(),p.onDismiss==null||p.onDismiss.call(p,p))},[G,p.delete]);function Me(){var te;if(se?.loading){var Pe;return De.createElement("div",{className:Fi(K?.loader,p==null||(Pe=p.classNames)==null?void 0:Pe.loader,"sonner-loader"),"data-visible":_t==="loading"},se.loading)}return De.createElement(bE,{className:Fi(K?.loader,p==null||(te=p.classNames)==null?void 0:te.loader),visible:_t==="loading"})}const Re=p.icon||se?.[_t]||CE(_t);var ze,xe;return De.createElement("li",{tabIndex:0,ref:Be,className:Fi(C,w,K?.toast,p==null||(e=p.classNames)==null?void 0:e.toast,K?.default,K?.[_t],p==null||(t=p.classNames)==null?void 0:t[_t]),"data-sonner-toast":"","data-rich-colors":(ze=p.richColors)!=null?ze:N,"data-styled":!(p.jsx||p.unstyled||v),"data-mounted":ge,"data-promise":!!p.promise,"data-swiped":pt,"data-removed":be,"data-visible":Bt,"data-y-position":Te,"data-x-position":Ne,"data-index":y,"data-front":ut,"data-swiping":ce,"data-dismissible":L,"data-type":_t,"data-invert":Le,"data-swipe-out":Ie,"data-swipe-direction":O,"data-expanded":!!(R||de&&ge),"data-testid":p.testId,style:{"--index":y,"--toasts-before":y,"--z-index":D.length-y,"--offset":`${be?z:Ee.current}px`,"--initial-height":de?"auto":`${ft}px`,...k,...p.style},onDragEnd:()=>{pe(!1),$(null),Xe.current=null},onPointerDown:te=>{te.button!==2&&(lt||!L||(Dt.current=new Date,At(Ee.current),te.target.setPointerCapture(te.pointerId),te.target.tagName!=="BUTTON"&&(pe(!0),Xe.current={x:te.clientX,y:te.clientY})))},onPointerUp:()=>{var te,Pe,Ze;if(Ie||!L)return;Xe.current=null;const mt=Number(((te=Be.current)==null?void 0:te.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),yt=Number(((Pe=Be.current)==null?void 0:Pe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Lt=new Date().getTime()-((Ze=Dt.current)==null?void 0:Ze.getTime()),Nt=ee==="x"?mt:yt,mi=Math.abs(Nt)/Lt;if(Math.abs(Nt)>=YE||mi>.11){At(Ee.current),p.onDismiss==null||p.onDismiss.call(p,p),re(ee==="x"?mt>0?"right":"left":yt>0?"down":"up"),G(),ke(!0);return}else{var Wt,_n;(Wt=Be.current)==null||Wt.style.setProperty("--swipe-amount-x","0px"),(_n=Be.current)==null||_n.style.setProperty("--swipe-amount-y","0px")}Ht(!1),pe(!1),$(null)},onPointerMove:te=>{var Pe,Ze,mt;if(!Xe.current||!L||((Pe=window.getSelection())==null?void 0:Pe.toString().length)>0)return;const Lt=te.clientY-Xe.current.y,Nt=te.clientX-Xe.current.x;var mi;const Wt=(mi=n.swipeDirections)!=null?mi:$E(ie);!ee&&(Math.abs(Nt)>1||Math.abs(Lt)>1)&&$(Math.abs(Nt)>Math.abs(Lt)?"x":"y");let _n={x:0,y:0};const gi=Dn=>1/(1.5+Math.abs(Dn)/20);if(ee==="y"){if(Wt.includes("top")||Wt.includes("bottom"))if(Wt.includes("top")&&Lt<0||Wt.includes("bottom")&&Lt>0)_n.y=Lt;else{const Dn=Lt*gi(Lt);_n.y=Math.abs(Dn)<Math.abs(Lt)?Dn:Lt}}else if(ee==="x"&&(Wt.includes("left")||Wt.includes("right")))if(Wt.includes("left")&&Nt<0||Wt.includes("right")&&Nt>0)_n.x=Nt;else{const Dn=Nt*gi(Nt);_n.x=Math.abs(Dn)<Math.abs(Nt)?Dn:Nt}(Math.abs(_n.x)>0||Math.abs(_n.y)>0)&&Ht(!0),(Ze=Be.current)==null||Ze.style.setProperty("--swipe-amount-x",`${_n.x}px`),(mt=Be.current)==null||mt.style.setProperty("--swipe-amount-y",`${_n.y}px`)}},ve&&!p.jsx&&_t!=="loading"?De.createElement("button",{"aria-label":B,"data-disabled":lt,"data-close-button":!0,onClick:lt||!L?()=>{}:()=>{G(),p.onDismiss==null||p.onDismiss.call(p,p)},className:Fi(K?.closeButton,p==null||(r=p.classNames)==null?void 0:r.closeButton)},(xe=se?.close)!=null?xe:NE):null,(_t||p.icon||p.promise)&&p.icon!==null&&(se?.[_t]!==null||p.icon)?De.createElement("div",{"data-icon":"",className:Fi(K?.icon,p==null||(o=p.classNames)==null?void 0:o.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Me():null,p.type!=="loading"?Re:null):null,De.createElement("div",{"data-content":"",className:Fi(K?.content,p==null||(l=p.classNames)==null?void 0:l.content)},De.createElement("div",{"data-title":"",className:Fi(K?.title,p==null||(u=p.classNames)==null?void 0:u.title)},p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title),p.description?De.createElement("div",{"data-description":"",className:Fi(V,Z,K?.description,p==null||(c=p.classNames)==null?void 0:c.description)},typeof p.description=="function"?p.description():p.description):null),De.isValidElement(p.cancel)?p.cancel:p.cancel&&eu(p.cancel)?De.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||F,onClick:te=>{eu(p.cancel)&&L&&(p.cancel.onClick==null||p.cancel.onClick.call(p.cancel,te),G())},className:Fi(K?.cancelButton,p==null||(d=p.classNames)==null?void 0:d.cancelButton)},p.cancel.label):null,De.isValidElement(p.action)?p.action:p.action&&eu(p.action)?De.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||P,onClick:te=>{eu(p.action)&&(p.action.onClick==null||p.action.onClick.call(p.action,te),!te.defaultPrevented&&G())},className:Fi(K?.actionButton,p==null||(h=p.classNames)==null?void 0:h.actionButton)},p.action.label):null)};function hv(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function ZE(n,e){const t={};return[n,e].forEach((r,o)=>{const l=o===1,u=l?"--mobile-offset":"--offset",c=l?WE:GE;function d(h){["top","right","bottom","left"].forEach(m=>{t[`${u}-${m}`]=typeof h=="number"?`${h}px`:h})}typeof r=="number"||typeof r=="string"?d(r):typeof r=="object"?["top","right","bottom","left"].forEach(h=>{r[h]===void 0?t[`${u}-${h}`]=c:t[`${u}-${h}`]=typeof r[h]=="number"?`${r[h]}px`:r[h]}):d(c)}),t}const QE=De.forwardRef(function(e,t){const{id:r,invert:o,position:l="bottom-right",hotkey:u=["altKey","KeyT"],expand:c,closeButton:d,className:h,offset:m,mobileOffset:p,theme:v="light",richColors:x,duration:E,style:T,visibleToasts:S=HE,toastOptions:y,dir:D=hv(),gap:R=jE,icons:A,containerAriaLabel:N="Notifications"}=e,[I,k]=De.useState([]),F=De.useMemo(()=>r?I.filter(ge=>ge.toasterId===r):I.filter(ge=>!ge.toasterId),[I,r]),P=De.useMemo(()=>Array.from(new Set([l].concat(F.filter(ge=>ge.position).map(ge=>ge.position)))),[F,l]),[C,V]=De.useState([]),[q,ie]=De.useState(!1),[ue,de]=De.useState(!1),[K,se]=De.useState(v!=="system"?v:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),B=De.useRef(null),ee=u.join("+").replace(/Key/g,"").replace(/Digit/g,""),$=De.useRef(null),O=De.useRef(!1),re=De.useCallback(ge=>{k(Ce=>{var be;return(be=Ce.find(Q=>Q.id===ge.id))!=null&&be.delete||Xn.dismiss(ge.id),Ce.filter(({id:Q})=>Q!==ge.id)})},[]);return De.useEffect(()=>Xn.subscribe(ge=>{if(ge.dismiss){requestAnimationFrame(()=>{k(Ce=>Ce.map(be=>be.id===ge.id?{...be,delete:!0}:be))});return}setTimeout(()=>{wE.flushSync(()=>{k(Ce=>{const be=Ce.findIndex(Q=>Q.id===ge.id);return be!==-1?[...Ce.slice(0,be),{...Ce[be],...ge},...Ce.slice(be+1)]:[ge,...Ce]})})})}),[I]),De.useEffect(()=>{if(v!=="system"){se(v);return}if(v==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?se("dark"):se("light")),typeof window>"u")return;const ge=window.matchMedia("(prefers-color-scheme: dark)");try{ge.addEventListener("change",({matches:Ce})=>{se(Ce?"dark":"light")})}catch{ge.addListener(({matches:be})=>{try{se(be?"dark":"light")}catch(Q){console.error(Q)}})}},[v]),De.useEffect(()=>{I.length<=1&&ie(!1)},[I]),De.useEffect(()=>{const ge=Ce=>{var be;if(u.every(pe=>Ce[pe]||Ce.code===pe)){var ce;ie(!0),(ce=B.current)==null||ce.focus()}Ce.code==="Escape"&&(document.activeElement===B.current||(be=B.current)!=null&&be.contains(document.activeElement))&&ie(!1)};return document.addEventListener("keydown",ge),()=>document.removeEventListener("keydown",ge)},[u]),De.useEffect(()=>{if(B.current)return()=>{$.current&&($.current.focus({preventScroll:!0}),$.current=null,O.current=!1)}},[B.current]),De.createElement("section",{ref:t,"aria-label":`${N} ${ee}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},P.map((ge,Ce)=>{var be;const[Q,ce]=ge.split("-");return F.length?De.createElement("ol",{key:ge,dir:D==="auto"?hv():D,tabIndex:-1,ref:B,className:h,"data-sonner-toaster":!0,"data-sonner-theme":K,"data-y-position":Q,"data-x-position":ce,style:{"--front-toast-height":`${((be=C[0])==null?void 0:be.height)||0}px`,"--width":`${XE}px`,"--gap":`${R}px`,...T,...ZE(m,p)},onBlur:pe=>{O.current&&!pe.currentTarget.contains(pe.relatedTarget)&&(O.current=!1,$.current&&($.current.focus({preventScroll:!0}),$.current=null))},onFocus:pe=>{pe.target instanceof HTMLElement&&pe.target.dataset.dismissible==="false"||O.current||(O.current=!0,$.current=pe.relatedTarget)},onMouseEnter:()=>ie(!0),onMouseMove:()=>ie(!0),onMouseLeave:()=>{ue||ie(!1)},onDragEnd:()=>ie(!1),onPointerDown:pe=>{pe.target instanceof HTMLElement&&pe.target.dataset.dismissible==="false"||de(!0)},onPointerUp:()=>de(!1)},F.filter(pe=>!pe.position&&Ce===0||pe.position===ge).map((pe,Ie)=>{var ke,pt;return De.createElement(KE,{key:pe.id,icons:A,index:Ie,toast:pe,defaultRichColors:x,duration:(ke=y?.duration)!=null?ke:E,className:y?.className,descriptionClassName:y?.descriptionClassName,invert:o,visibleToasts:S,closeButton:(pt=y?.closeButton)!=null?pt:d,interacting:ue,position:ge,style:y?.style,unstyled:y?.unstyled,classNames:y?.classNames,cancelButtonStyle:y?.cancelButtonStyle,actionButtonStyle:y?.actionButtonStyle,closeButtonAriaLabel:y?.closeButtonAriaLabel,removeToast:re,toasts:F.filter(Ht=>Ht.position==pe.position),heights:C.filter(Ht=>Ht.position==pe.position),setHeights:V,expandByDefault:c,gap:R,expanded:q,swipeDirections:e.swipeDirections})})):null}))}),JE=({...n})=>me.jsx(QE,{theme:"light",className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...n}),A_=Fe.createContext({});function eM(n){const e=Fe.useRef(null);return e.current===null&&(e.current=n()),e.current}const Wh=typeof window<"u",tM=Wh?Fe.useLayoutEffect:Fe.useEffect,Xh=Fe.createContext(null);function jh(n,e){n.indexOf(e)===-1&&n.push(e)}function Yh(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const ur=(n,e,t)=>t>e?e:t<n?n:t;let qh=()=>{};const cr={},C_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function R_(n){return typeof n=="object"&&n!==null}const b_=n=>/^0[^.\s]+$/u.test(n);function $h(n){let e;return()=>(e===void 0&&(e=n()),e)}const pi=n=>n,nM=(n,e)=>t=>e(n(t)),Oa=(...n)=>n.reduce(nM),Aa=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};class Kh{constructor(){this.subscriptions=[]}add(e){return jh(this.subscriptions,e),()=>Yh(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Hi=n=>n*1e3,hi=n=>n/1e3;function P_(n,e){return e?n*(1e3/e):0}const D_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,iM=1e-7,rM=12;function sM(n,e,t,r,o){let l,u,c=0;do u=e+(t-e)/2,l=D_(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>iM&&++c<rM);return u}function ka(n,e,t,r){if(n===e&&t===r)return pi;const o=l=>sM(l,0,1,n,t);return l=>l===0||l===1?l:D_(o(l),e,r)}const L_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,I_=n=>e=>1-n(1-e),N_=ka(.33,1.53,.69,.99),Zh=I_(N_),U_=L_(Zh),F_=n=>(n*=2)<1?.5*Zh(n):.5*(2-Math.pow(2,-10*(n-1))),Qh=n=>1-Math.sin(Math.acos(n)),O_=I_(Qh),k_=L_(Qh),oM=ka(.42,0,1,1),aM=ka(0,0,.58,1),B_=ka(.42,0,.58,1),lM=n=>Array.isArray(n)&&typeof n[0]!="number",z_=n=>Array.isArray(n)&&typeof n[0]=="number",uM={linear:pi,easeIn:oM,easeInOut:B_,easeOut:aM,circIn:Qh,circInOut:k_,circOut:O_,backIn:Zh,backInOut:U_,backOut:N_,anticipate:F_},cM=n=>typeof n=="string",pv=n=>{if(z_(n)){qh(n.length===4);const[e,t,r,o]=n;return ka(e,t,r,o)}else if(cM(n))return uM[n];return n},tu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function fM(n,e){let t=new Set,r=new Set,o=!1,l=!1;const u=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function d(m){u.has(m)&&(h.schedule(m),n()),m(c)}const h={schedule:(m,p=!1,v=!1)=>{const E=v&&o?t:r;return p&&u.add(m),E.has(m)||E.add(m),m},cancel:m=>{r.delete(m),u.delete(m)},process:m=>{if(c=m,o){l=!0;return}o=!0,[t,r]=[r,t],t.forEach(d),t.clear(),o=!1,l&&(l=!1,h.process(m))}};return h}const dM=40;function V_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=tu.reduce((R,A)=>(R[A]=fM(l),R),{}),{setup:c,read:d,resolveKeyframes:h,preUpdate:m,update:p,preRender:v,render:x,postRender:E}=u,T=()=>{const R=cr.useManualTiming?o.timestamp:performance.now();t=!1,cr.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(R-o.timestamp,dM),1)),o.timestamp=R,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),m.process(o),p.process(o),v.process(o),x.process(o),E.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(T))},S=()=>{t=!0,r=!0,o.isProcessing||n(T)};return{schedule:tu.reduce((R,A)=>{const N=u[A];return R[A]=(I,k=!1,F=!1)=>(t||S(),N.schedule(I,k,F)),R},{}),cancel:R=>{for(let A=0;A<tu.length;A++)u[tu[A]].cancel(R)},state:o,steps:u}}const{schedule:qt,cancel:Wr,state:Sn,steps:Of}=V_(typeof requestAnimationFrame<"u"?requestAnimationFrame:pi,!0);let Ru;function hM(){Ru=void 0}const jn={now:()=>(Ru===void 0&&jn.set(Sn.isProcessing||cr.useManualTiming?Sn.timestamp:performance.now()),Ru),set:n=>{Ru=n,queueMicrotask(hM)}},H_=n=>e=>typeof e=="string"&&e.startsWith(n),Jh=H_("--"),pM=H_("var(--"),ep=n=>pM(n)?mM.test(n.split("/*")[0].trim()):!1,mM=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Po={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ca={...Po,transform:n=>ur(0,1,n)},nu={...Po,default:1},Sa=n=>Math.round(n*1e5)/1e5,tp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function gM(n){return n==null}const vM=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,np=(n,e)=>t=>!!(typeof t=="string"&&vM.test(t)&&t.startsWith(n)||e&&!gM(t)&&Object.prototype.hasOwnProperty.call(t,e)),G_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,c]=r.match(tp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},_M=n=>ur(0,255,n),kf={...Po,transform:n=>Math.round(_M(n))},Ss={test:np("rgb","red"),parse:G_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+kf.transform(n)+", "+kf.transform(e)+", "+kf.transform(t)+", "+Sa(Ca.transform(r))+")"};function yM(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Ld={test:np("#"),parse:yM,transform:Ss.transform},Ba=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Br=Ba("deg"),Gi=Ba("%"),ct=Ba("px"),xM=Ba("vh"),SM=Ba("vw"),mv={...Gi,parse:n=>Gi.parse(n)/100,transform:n=>Gi.transform(n*100)},mo={test:np("hsl","hue"),parse:G_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Gi.transform(Sa(e))+", "+Gi.transform(Sa(t))+", "+Sa(Ca.transform(r))+")"},an={test:n=>Ss.test(n)||Ld.test(n)||mo.test(n),parse:n=>Ss.test(n)?Ss.parse(n):mo.test(n)?mo.parse(n):Ld.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ss.transform(n):mo.transform(n),getAnimatableNone:n=>{const e=an.parse(n);return e.alpha=0,an.transform(e)}},EM=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function MM(n){return isNaN(n)&&typeof n=="string"&&(n.match(tp)?.length||0)+(n.match(EM)?.length||0)>0}const W_="number",X_="color",TM="var",wM="var(",gv="${}",AM=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ra(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const c=e.replace(AM,d=>(an.test(d)?(r.color.push(l),o.push(X_),t.push(an.parse(d))):d.startsWith(wM)?(r.var.push(l),o.push(TM),t.push(d)):(r.number.push(l),o.push(W_),t.push(parseFloat(d))),++l,gv)).split(gv);return{values:t,split:c,indexes:r,types:o}}function j_(n){return Ra(n).values}function Y_(n){const{split:e,types:t}=Ra(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const c=t[u];c===W_?l+=Sa(o[u]):c===X_?l+=an.transform(o[u]):l+=o[u]}return l}}const CM=n=>typeof n=="number"?0:an.test(n)?an.getAnimatableNone(n):n;function RM(n){const e=j_(n);return Y_(n)(e.map(CM))}const Xr={test:MM,parse:j_,createTransformer:Y_,getAnimatableNone:RM};function Bf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function bM({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=Bf(d,c,n+1/3),l=Bf(d,c,n),u=Bf(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function ku(n,e){return t=>t>0?e:n}const Zt=(n,e,t)=>n+(e-n)*t,zf=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},PM=[Ld,Ss,mo],DM=n=>PM.find(e=>e.test(n));function vv(n){const e=DM(n);if(!e)return!1;let t=e.parse(n);return e===mo&&(t=bM(t)),t}const _v=(n,e)=>{const t=vv(n),r=vv(e);if(!t||!r)return ku(n,e);const o={...t};return l=>(o.red=zf(t.red,r.red,l),o.green=zf(t.green,r.green,l),o.blue=zf(t.blue,r.blue,l),o.alpha=Zt(t.alpha,r.alpha,l),Ss.transform(o))},Id=new Set(["none","hidden"]);function LM(n,e){return Id.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function IM(n,e){return t=>Zt(n,e,t)}function ip(n){return typeof n=="number"?IM:typeof n=="string"?ep(n)?ku:an.test(n)?_v:FM:Array.isArray(n)?q_:typeof n=="object"?an.test(n)?_v:NM:ku}function q_(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>ip(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function NM(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=ip(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function UM(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],u=n.indexes[l][r[l]],c=n.values[u]??0;t[o]=c,r[l]++}return t}const FM=(n,e)=>{const t=Xr.createTransformer(e),r=Ra(n),o=Ra(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Id.has(n)&&!o.values.length||Id.has(e)&&!r.values.length?LM(n,e):Oa(q_(UM(r,o),o.values),t):ku(n,e)};function $_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Zt(n,e,t):ip(n)(n,e)}const OM=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>qt.update(e,t),stop:()=>Wr(e),now:()=>Sn.isProcessing?Sn.timestamp:jn.now()}},K_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=Math.round(n(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Bu=2e4;function rp(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Bu;)e+=t,r=n.next(e);return e>=Bu?1/0:e}function kM(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(rp(r),Bu);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:hi(o)}}const BM=5;function Z_(n,e,t){const r=Math.max(e-BM,0);return P_(t-n(r),e-r)}const Jt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Vf=.001;function zM({duration:n=Jt.duration,bounce:e=Jt.bounce,velocity:t=Jt.velocity,mass:r=Jt.mass}){let o,l,u=1-e;u=ur(Jt.minDamping,Jt.maxDamping,u),n=ur(Jt.minDuration,Jt.maxDuration,hi(n)),u<1?(o=h=>{const m=h*u,p=m*n,v=m-t,x=Nd(h,u),E=Math.exp(-p);return Vf-v/x*E},l=h=>{const p=h*u*n,v=p*t+t,x=Math.pow(u,2)*Math.pow(h,2)*n,E=Math.exp(-p),T=Nd(Math.pow(h,2),u);return(-o(h)+Vf>0?-1:1)*((v-x)*E)/T}):(o=h=>{const m=Math.exp(-h*n),p=(h-t)*n+1;return-Vf+m*p},l=h=>{const m=Math.exp(-h*n),p=(t-h)*(n*n);return m*p});const c=5/n,d=HM(o,l,c);if(n=Hi(n),isNaN(d))return{stiffness:Jt.stiffness,damping:Jt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const VM=12;function HM(n,e,t){let r=t;for(let o=1;o<VM;o++)r=r-n(r)/e(r);return r}function Nd(n,e){return n*Math.sqrt(1-e*e)}const GM=["duration","bounce"],WM=["stiffness","damping","mass"];function yv(n,e){return e.some(t=>n[t]!==void 0)}function XM(n){let e={velocity:Jt.velocity,stiffness:Jt.stiffness,damping:Jt.damping,mass:Jt.mass,isResolvedFromDuration:!1,...n};if(!yv(n,WM)&&yv(n,GM))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*ur(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Jt.mass,stiffness:o,damping:l}}else{const t=zM(n);e={...e,...t,mass:Jt.mass},e.isResolvedFromDuration=!0}return e}function zu(n=Jt.visualDuration,e=Jt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:p,velocity:v,isResolvedFromDuration:x}=XM({...t,velocity:-hi(t.velocity||0)}),E=v||0,T=h/(2*Math.sqrt(d*m)),S=u-l,y=hi(Math.sqrt(d/m)),D=Math.abs(S)<5;r||(r=D?Jt.restSpeed.granular:Jt.restSpeed.default),o||(o=D?Jt.restDelta.granular:Jt.restDelta.default);let R;if(T<1){const N=Nd(y,T);R=I=>{const k=Math.exp(-T*y*I);return u-k*((E+T*y*S)/N*Math.sin(N*I)+S*Math.cos(N*I))}}else if(T===1)R=N=>u-Math.exp(-y*N)*(S+(E+y*S)*N);else{const N=y*Math.sqrt(T*T-1);R=I=>{const k=Math.exp(-T*y*I),F=Math.min(N*I,300);return u-k*((E+T*y*S)*Math.sinh(F)+N*S*Math.cosh(F))/N}}const A={calculatedDuration:x&&p||null,next:N=>{const I=R(N);if(x)c.done=N>=p;else{let k=N===0?E:0;T<1&&(k=N===0?Hi(E):Z_(R,N,I));const F=Math.abs(k)<=r,P=Math.abs(u-I)<=o;c.done=F&&P}return c.value=c.done?u:I,c},toString:()=>{const N=Math.min(rp(A),Bu),I=K_(k=>A.next(N*k).value,N,30);return N+"ms "+I},toTransition:()=>{}};return A}zu.applyToOptions=n=>{const e=kM(n,100,zu);return n.ease=e.ease,n.duration=Hi(e.duration),n.type="keyframes",n};function Ud({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:m}){const p=n[0],v={done:!1,value:p},x=F=>c!==void 0&&F<c||d!==void 0&&F>d,E=F=>c===void 0?d:d===void 0||Math.abs(c-F)<Math.abs(d-F)?c:d;let T=t*e;const S=p+T,y=u===void 0?S:u(S);y!==S&&(T=y-p);const D=F=>-T*Math.exp(-F/r),R=F=>y+D(F),A=F=>{const P=D(F),C=R(F);v.done=Math.abs(P)<=h,v.value=v.done?y:C};let N,I;const k=F=>{x(v.value)&&(N=F,I=zu({keyframes:[v.value,E(v.value)],velocity:Z_(R,F,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return k(0),{calculatedDuration:null,next:F=>{let P=!1;return!I&&N===void 0&&(P=!0,A(F),k(F)),N!==void 0&&F>=N?I.next(F-N):(!P&&A(F),v)}}}function jM(n,e,t){const r=[],o=t||cr.mix||$_,l=n.length-1;for(let u=0;u<l;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||pi:e;c=Oa(d,c)}r.push(c)}return r}function YM(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(qh(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=jM(e,r,o),d=c.length,h=m=>{if(u&&m<n[0])return e[0];let p=0;if(d>1)for(;p<n.length-2&&!(m<n[p+1]);p++);const v=Aa(n[p],n[p+1],m);return c[p](v)};return t?m=>h(ur(n[0],n[l-1],m)):h}function qM(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Aa(0,e,r);n.push(Zt(t,1,o))}}function $M(n){const e=[0];return qM(e,n.length-1),e}function KM(n,e){return n.map(t=>t*e)}function ZM(n,e){return n.map(()=>e||B_).splice(0,n.length-1)}function Ea({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=lM(r)?r.map(pv):pv(r),l={done:!1,value:e[0]},u=KM(t&&t.length===e.length?t:$M(e),n),c=YM(u,e,{ease:Array.isArray(o)?o:ZM(e,o)});return{calculatedDuration:n,next:d=>(l.value=c(d),l.done=d>=n,l)}}const QM=n=>n!==null;function sp(n,{repeat:e,repeatType:t="loop"},r,o=1){const l=n.filter(QM),c=o<0||e&&t!=="loop"&&e%2===1?0:l.length-1;return!c||r===void 0?l[c]:r}const JM={decay:Ud,inertia:Ud,tween:Ea,keyframes:Ea,spring:zu};function Q_(n){typeof n.type=="string"&&(n.type=JM[n.type])}class op{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const eT=n=>n/100;class ap extends op{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:t}=this.options;t&&t.updatedAt!==jn.now()&&this.tick(jn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Q_(e);const{type:t=Ea,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=e;let{keyframes:c}=e;const d=t||Ea;d!==Ea&&typeof c[0]!="number"&&(this.mixKeyframes=Oa(eT,$_(c[0],c[1])),c=[0,100]);const h=d({...e,keyframes:c});l==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...c].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=rp(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:c,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:m,repeat:p,repeatType:v,repeatDelay:x,type:E,onUpdate:T,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const y=this.currentTime-h*(this.playbackSpeed>=0?1:-1),D=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let R=this.currentTime,A=r;if(p){const F=Math.min(this.currentTime,o)/c;let P=Math.floor(F),C=F%1;!C&&F>=1&&(C=1),C===1&&P--,P=Math.min(P,p+1),!!(P%2)&&(v==="reverse"?(C=1-C,x&&(C-=x/c)):v==="mirror"&&(A=u)),R=ur(0,1,C)*c}const N=D?{done:!1,value:m[0]}:A.next(R);l&&(N.value=l(N.value));let{done:I}=N;!D&&d!==null&&(I=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return k&&E!==Ud&&(N.value=sp(m,this.options,S,this.speed)),T&&T(N.value),k&&this.finish(),N}then(e,t){return this.finished.then(e,t)}get duration(){return hi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+hi(e)}get time(){return hi(this.currentTime)}set time(e){e=Hi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(jn.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=hi(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=OM,startTime:t}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(jn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function tT(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Es=n=>n*180/Math.PI,Fd=n=>{const e=Es(Math.atan2(n[1],n[0]));return Od(e)},nT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Fd,rotateZ:Fd,skewX:n=>Es(Math.atan(n[1])),skewY:n=>Es(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Od=n=>(n=n%360,n<0&&(n+=360),n),xv=Fd,Sv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Ev=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),iT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Sv,scaleY:Ev,scale:n=>(Sv(n)+Ev(n))/2,rotateX:n=>Od(Es(Math.atan2(n[6],n[5]))),rotateY:n=>Od(Es(Math.atan2(-n[2],n[0]))),rotateZ:xv,rotate:xv,skewX:n=>Es(Math.atan(n[4])),skewY:n=>Es(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function kd(n){return n.includes("scale")?1:0}function Bd(n,e){if(!n||n==="none")return kd(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=iT,o=t;else{const c=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=nT,o=c}if(!o)return kd(e);const l=r[e],u=o[1].split(",").map(sT);return typeof l=="function"?l(u):u[l]}const rT=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Bd(t,e)};function sT(n){return parseFloat(n.trim())}const Do=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Lo=new Set(Do),Mv=n=>n===Po||n===ct,oT=new Set(["x","y","z"]),aT=Do.filter(n=>!oT.has(n));function lT(n){const e=[];return aT.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const ws={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Bd(e,"x"),y:(n,{transform:e})=>Bd(e,"y")};ws.translateX=ws.x;ws.translateY=ws.y;const As=new Set;let zd=!1,Vd=!1,Hd=!1;function J_(){if(Vd){const n=Array.from(As).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=lT(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{r.getValue(l)?.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Vd=!1,zd=!1,As.forEach(n=>n.complete(Hd)),As.clear()}function ey(){As.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Vd=!0)})}function uT(){Hd=!0,ey(),J_(),Hd=!1}class lp{constructor(e,t,r,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(As.add(this),zd||(zd=!0,qt.read(ey),qt.resolveKeyframes(J_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const l=o?.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&t){const c=r.readValue(t,u);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=u),o&&l===void 0&&o.set(e[0])}tT(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),As.delete(this)}cancel(){this.state==="scheduled"&&(As.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const cT=n=>n.startsWith("--");function fT(n,e,t){cT(e)?n.style.setProperty(e,t):n.style[e]=t}const dT=$h(()=>window.ScrollTimeline!==void 0),hT={};function pT(n,e){const t=$h(n);return()=>hT[e]??t()}const ty=pT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ya=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Tv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ya([0,.65,.55,1]),circOut:ya([.55,0,1,.45]),backIn:ya([.31,.01,.66,-.59]),backOut:ya([.33,1.53,.69,.99])};function ny(n,e){if(n)return typeof n=="function"?ty()?K_(n,e):"ease-out":z_(n)?ya(n):Array.isArray(n)?n.map(t=>ny(t,e)||Tv.easeOut):Tv[n]}function mT(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:c="easeOut",times:d}={},h=void 0){const m={[e]:t};d&&(m.offset=d);const p=ny(c,o);Array.isArray(p)&&(m.easing=p);const v={delay:r,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return h&&(v.pseudoElement=h),n.animate(m,v)}function iy(n){return typeof n=="function"&&"applyToOptions"in n}function gT({type:n,...e}){return iy(n)&&ty()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class vT extends op{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:c,onComplete:d}=e;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=e,qh(typeof e.type!="string");const h=gT(e);this.animation=mT(t,r,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=sp(o,this.options,c,this.speed);this.updateMotionValue?this.updateMotionValue(m):fT(t,r,m),this.animation.cancel()}d?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return hi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+hi(e)}get time(){return hi(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Hi(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&dT()?(this.animation.timeline=e,pi):t(this)}}const ry={anticipate:F_,backInOut:U_,circInOut:k_};function _T(n){return n in ry}function yT(n){typeof n.ease=="string"&&_T(n.ease)&&(n.ease=ry[n.ease])}const wv=10;class xT extends vT{constructor(e){yT(e),Q_(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:l,...u}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const c=new ap({...u,autoplay:!1}),d=Hi(this.finishedTime??this.time);t.setWithVelocity(c.sample(d-wv).value,c.sample(d).value,wv),c.stop()}}const Av=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Xr.test(n)||n==="0")&&!n.startsWith("url("));function ST(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function ET(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=Av(o,e),c=Av(l,e);return!u||!c?!1:ST(n)||(t==="spring"||iy(t))&&r}function Gd(n){n.duration=0,n.type="keyframes"}const MT=new Set(["opacity","clipPath","filter","transform"]),TT=$h(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function wT(n){const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:l,type:u}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=e.owner.getProps();return TT()&&t&&MT.has(t)&&(t!=="transform"||!h)&&!d&&!r&&o!=="mirror"&&l!==0&&u!=="inertia"}const AT=40;class CT extends op{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:c,name:d,motionValue:h,element:m,...p}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=jn.now();const v={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,name:d,motionValue:h,element:m,...p},x=m?.KeyframeResolver||lp;this.keyframeResolver=new x(c,(E,T,S)=>this.onKeyframesResolved(E,T,v,!S),d,h,m),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,r,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:c,delay:d,isHandoff:h,onUpdate:m}=r;this.resolvedAt=jn.now(),ET(e,l,u,c)||((cr.instantAnimations||!d)&&m?.(sp(e,r,t)),e[0]=e[e.length-1],Gd(r),r.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>AT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},x=!h&&wT(v)?new xT({...v,element:v.motionValue.owner.current}):new ap(v);x.finished.then(()=>this.notifyFinished()).catch(pi),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),uT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const RT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function bT(n){const e=RT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function sy(n,e,t=1){const[r,o]=bT(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return C_(u)?parseFloat(u):u}return ep(o)?sy(o,e,t+1):o}function up(n,e){return n?.[e]??n?.default??n}const oy=new Set(["width","height","top","left","right","bottom",...Do]),PT={test:n=>n==="auto",parse:n=>n},ay=n=>e=>e.test(n),ly=[Po,ct,Gi,Br,SM,xM,PT],Cv=n=>ly.find(ay(n));function DT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||b_(n):!0}const LT=new Set(["brightness","contrast","saturate","opacity"]);function IT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(tp)||[];if(!r)return n;const o=t.replace(r,"");let l=LT.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const NT=/\b([a-z-]*)\(.*?\)/gu,Wd={...Xr,getAnimatableNone:n=>{const e=n.match(NT);return e?e.map(IT).join(" "):n}},Rv={...Po,transform:Math.round},UT={rotate:Br,rotateX:Br,rotateY:Br,rotateZ:Br,scale:nu,scaleX:nu,scaleY:nu,scaleZ:nu,skew:Br,skewX:Br,skewY:Br,distance:ct,translateX:ct,translateY:ct,translateZ:ct,x:ct,y:ct,z:ct,perspective:ct,transformPerspective:ct,opacity:Ca,originX:mv,originY:mv,originZ:ct},cp={borderWidth:ct,borderTopWidth:ct,borderRightWidth:ct,borderBottomWidth:ct,borderLeftWidth:ct,borderRadius:ct,radius:ct,borderTopLeftRadius:ct,borderTopRightRadius:ct,borderBottomRightRadius:ct,borderBottomLeftRadius:ct,width:ct,maxWidth:ct,height:ct,maxHeight:ct,top:ct,right:ct,bottom:ct,left:ct,padding:ct,paddingTop:ct,paddingRight:ct,paddingBottom:ct,paddingLeft:ct,margin:ct,marginTop:ct,marginRight:ct,marginBottom:ct,marginLeft:ct,backgroundPositionX:ct,backgroundPositionY:ct,...UT,zIndex:Rv,fillOpacity:Ca,strokeOpacity:Ca,numOctaves:Rv},FT={...cp,color:an,backgroundColor:an,outlineColor:an,fill:an,stroke:an,borderColor:an,borderTopColor:an,borderRightColor:an,borderBottomColor:an,borderLeftColor:an,filter:Wd,WebkitFilter:Wd},uy=n=>FT[n];function cy(n,e){let t=uy(n);return t!==Wd&&(t=Xr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const OT=new Set(["auto","none","0"]);function kT(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!OT.has(l)&&Ra(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=cy(t,o)}class BT extends lp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),ep(h))){const m=sy(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!oy.has(r)||e.length!==2)return;const[o,l]=e,u=Cv(o),c=Cv(l);if(u!==c)if(Mv(u)&&Mv(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else ws[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||DT(e[o]))&&r.push(o);r.length&&kT(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ws[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,u=r[l];r[l]=ws[t](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([c,d])=>{e.getValue(c).set(d)}),this.resolveNoneKeyframes()}}function fy(n,e,t){if(n instanceof EventTarget)return[n];if(typeof n=="string"){const o=document.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n)}const dy=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function zT(n){return R_(n)&&"offsetHeight"in n}const bv=30,VT=n=>!isNaN(parseFloat(n));class HT{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const o=jn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=jn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=VT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Kh);const r=this.events[e].add(t);return e==="change"?()=>{r(),qt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=jn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>bv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,bv);return P_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Mo(n,e){return new HT(n,e)}const{schedule:fp}=V_(queueMicrotask,!1),Ci={x:!1,y:!1};function hy(){return Ci.x||Ci.y}function GT(n){return n==="x"||n==="y"?Ci[n]?null:(Ci[n]=!0,()=>{Ci[n]=!1}):Ci.x||Ci.y?null:(Ci.x=Ci.y=!0,()=>{Ci.x=Ci.y=!1})}function py(n,e){const t=fy(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function Pv(n){return!(n.pointerType==="touch"||hy())}function WT(n,e,t={}){const[r,o,l]=py(n,t),u=c=>{if(!Pv(c))return;const{target:d}=c,h=e(d,c);if(typeof h!="function"||!d)return;const m=p=>{Pv(p)&&(h(p),d.removeEventListener("pointerleave",m))};d.addEventListener("pointerleave",m,o)};return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),l}const my=(n,e)=>e?n===e?!0:my(n,e.parentElement):!1,dp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,XT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jT(n){return XT.has(n.tagName)||n.tabIndex!==-1}const bu=new WeakSet;function Dv(n){return e=>{e.key==="Enter"&&n(e)}}function Hf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const YT=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=Dv(()=>{if(bu.has(t))return;Hf(t,"down");const o=Dv(()=>{Hf(t,"up")}),l=()=>Hf(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function Lv(n){return dp(n)&&!hy()}function qT(n,e,t={}){const[r,o,l]=py(n,t),u=c=>{const d=c.currentTarget;if(!Lv(c))return;bu.add(d);const h=e(d,c),m=(x,E)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",v),bu.has(d)&&bu.delete(d),Lv(x)&&typeof h=="function"&&h(x,{success:E})},p=x=>{m(x,d===window||d===document||t.useGlobalTarget||my(d,x.target))},v=x=>{m(x,!1)};window.addEventListener("pointerup",p,o),window.addEventListener("pointercancel",v,o)};return r.forEach(c=>{(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),zT(c)&&(c.addEventListener("focus",h=>YT(h,o)),!jT(c)&&!c.hasAttribute("tabindex")&&(c.tabIndex=0))}),l}function gy(n){return R_(n)&&"ownerSVGElement"in n}function $T(n){return gy(n)&&n.tagName==="svg"}const Pn=n=>!!(n&&n.getVelocity),KT=[...ly,an,Xr],ZT=n=>KT.find(ay(n)),vy=Fe.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function QT(n=!0){const e=Fe.useContext(Xh);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=Fe.useId();Fe.useEffect(()=>{if(n)return o(l)},[n]);const u=Fe.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const _y=Fe.createContext({strict:!1}),Iv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},To={};for(const n in Iv)To[n]={isEnabled:e=>Iv[n].some(t=>!!e[t])};function JT(n){for(const e in n)To[e]={...To[e],...n[e]}}const ew=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||ew.has(n)}let yy=n=>!Vu(n);function tw(n){typeof n=="function"&&(yy=e=>e.startsWith("on")?!Vu(e):n(e))}try{tw(require("@emotion/is-prop-valid").default)}catch{}function nw(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(yy(o)||t===!0&&Vu(o)||!e&&!Vu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Yu=Fe.createContext({});function qu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ba(n){return typeof n=="string"||Array.isArray(n)}const hp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],pp=["initial",...hp];function $u(n){return qu(n.animate)||pp.some(e=>ba(n[e]))}function xy(n){return!!($u(n)||n.variants)}function iw(n,e){if($u(n)){const{initial:t,animate:r}=n;return{initial:t===!1||ba(t)?t:void 0,animate:ba(r)?r:void 0}}return n.inherit!==!1?e:{}}function rw(n){const{initial:e,animate:t}=iw(n,Fe.useContext(Yu));return Fe.useMemo(()=>({initial:e,animate:t}),[Nv(e),Nv(t)])}function Nv(n){return Array.isArray(n)?n.join(" "):n}const Pa={};function sw(n){for(const e in n)Pa[e]=n[e],Jh(e)&&(Pa[e].isCSSVariable=!0)}function Sy(n,{layout:e,layoutId:t}){return Lo.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Pa[n]||n==="opacity")}const ow={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},aw=Do.length;function lw(n,e,t){let r="",o=!0;for(let l=0;l<aw;l++){const u=Do[l],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=dy(c,cp[u]);if(!d){o=!1;const m=ow[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function mp(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Lo.has(d)){u=!0;continue}else if(Jh(d)){o[d]=h;continue}else{const m=dy(h,cp[d]);d.startsWith("origin")?(c=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=lw(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}const gp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ey(n,e,t){for(const r in e)!Pn(e[r])&&!Sy(r,t)&&(n[r]=e[r])}function uw({transformTemplate:n},e){return Fe.useMemo(()=>{const t=gp();return mp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function cw(n,e){const t=n.style||{},r={};return Ey(r,t,n),Object.assign(r,uw(n,e)),r}function fw(n,e){const t={},r=cw(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const dw={offset:"stroke-dashoffset",array:"stroke-dasharray"},hw={offset:"strokeDashoffset",array:"strokeDasharray"};function pw(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?dw:hw;n[l.offset]=ct.transform(-r);const u=ct.transform(e),c=ct.transform(t);n[l.array]=`${u} ${c}`}function My(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...c},d,h,m){if(mp(n,c,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:p,style:v}=n;p.transform&&(v.transform=p.transform,delete p.transform),(v.transform||p.transformOrigin)&&(v.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),v.transform&&(v.transformBox=m?.transformBox??"fill-box",delete p.transformBox),e!==void 0&&(p.x=e),t!==void 0&&(p.y=t),r!==void 0&&(p.scale=r),o!==void 0&&pw(p,o,l,u,!1)}const Ty=()=>({...gp(),attrs:{}}),wy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function mw(n,e,t,r){const o=Fe.useMemo(()=>{const l=Ty();return My(l,e,wy(r),n.transformTemplate,n.style),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};Ey(l,n.style,n),o.style={...l,...o.style}}return o}const gw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function vp(n){return typeof n!="string"||n.includes("-")?!1:!!(gw.indexOf(n)>-1||/[A-Z]/u.test(n))}function vw(n,e,t,{latestValues:r},o,l=!1){const c=(vp(n)?mw:fw)(e,r,o,n),d=nw(e,typeof n=="string",l),h=n!==Fe.Fragment?{...d,...c,ref:t}:{},{children:m}=e,p=Fe.useMemo(()=>Pn(m)?m.get():m,[m]);return Fe.createElement(n,{...h,children:p})}function Uv(n){const e=[{},{}];return n?.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function _p(n,e,t,r){if(typeof e=="function"){const[o,l]=Uv(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=Uv(r);e=e(t!==void 0?t:n.custom,o,l)}return e}function Pu(n){return Pn(n)?n.get():n}function _w({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:yw(t,r,o,n),renderState:e()}}function yw(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Pu(l[v]);let{initial:u,animate:c}=n;const d=$u(n),h=xy(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const p=m?c:u;if(p&&typeof p!="boolean"&&!qu(p)){const v=Array.isArray(p)?p:[p];for(let x=0;x<v.length;x++){const E=_p(n,v[x]);if(E){const{transitionEnd:T,transition:S,...y}=E;for(const D in y){let R=y[D];if(Array.isArray(R)){const A=m?R.length-1:0;R=R[A]}R!==null&&(o[D]=R)}for(const D in T)o[D]=T[D]}}}return o}const Ay=n=>(e,t)=>{const r=Fe.useContext(Yu),o=Fe.useContext(Xh),l=()=>_w(n,e,r,o);return t?l():eM(l)};function yp(n,e,t){const{style:r}=n,o={};for(const l in r)(Pn(r[l])||e.style&&Pn(e.style[l])||Sy(l,n)||t?.getValue(l)?.liveStyle!==void 0)&&(o[l]=r[l]);return o}const xw=Ay({scrapeMotionValuesFromProps:yp,createRenderState:gp});function Cy(n,e,t){const r=yp(n,e,t);for(const o in n)if(Pn(n[o])||Pn(e[o])){const l=Do.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}const Sw=Ay({scrapeMotionValuesFromProps:Cy,createRenderState:Ty}),Ew=Symbol.for("motionComponentSymbol");function go(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Mw(n,e,t){return Fe.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):go(t)&&(t.current=r))},[e])}const xp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Tw="framerAppearId",Ry="data-"+xp(Tw),by=Fe.createContext({});function ww(n,e,t,r,o){const{visualElement:l}=Fe.useContext(Yu),u=Fe.useContext(_y),c=Fe.useContext(Xh),d=Fe.useContext(vy).reducedMotion,h=Fe.useRef(null);r=r||u.renderer,!h.current&&r&&(h.current=r(n,{visualState:e,parent:l,props:t,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const m=h.current,p=Fe.useContext(by);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&Aw(h.current,t,o,p);const v=Fe.useRef(!1);Fe.useInsertionEffect(()=>{m&&v.current&&m.update(t,c)});const x=t[Ry],E=Fe.useRef(!!x&&!window.MotionHandoffIsComplete?.(x)&&window.MotionHasOptimisedAnimation?.(x));return tM(()=>{m&&(v.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),E.current&&m.animationState&&m.animationState.animateChanges())}),Fe.useEffect(()=>{m&&(!E.current&&m.animationState&&m.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(x)}),E.current=!1),m.enteringChildren=void 0)}),m}function Aw(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h,layoutCrossfade:m}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Py(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||c&&go(c),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:m,layoutScroll:d,layoutRoot:h})}function Py(n){if(n)return n.options.allowProjection!==!1?n.projection:Py(n.parent)}function Gf(n,{forwardMotionProps:e=!1}={},t,r){t&&JT(t);const o=vp(n)?Sw:xw;function l(c,d){let h;const m={...Fe.useContext(vy),...c,layoutId:Cw(c)},{isStatic:p}=m,v=rw(c),x=o(c,p);if(!p&&Wh){Rw();const E=bw(m);h=E.MeasureLayout,v.visualElement=ww(n,x,m,r,E.ProjectionNode)}return me.jsxs(Yu.Provider,{value:v,children:[h&&v.visualElement?me.jsx(h,{visualElement:v.visualElement,...m}):null,vw(n,c,Mw(x,v.visualElement,d),x,p,e)]})}l.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const u=Fe.forwardRef(l);return u[Ew]=n,u}function Cw({layoutId:n}){const e=Fe.useContext(A_).id;return e&&n!==void 0?e+"-"+n:n}function Rw(n,e){Fe.useContext(_y).strict}function bw(n){const{drag:e,layout:t}=To;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e?.isEnabled(n)||t?.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Pw(n,e){if(typeof Proxy>"u")return Gf;const t=new Map,r=(l,u)=>Gf(l,u,n,e),o=(l,u)=>r(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?r:(t.has(u)||t.set(u,Gf(u,void 0,n,e)),t.get(u))})}function Dy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function Dw({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function Lw(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Wf(n){return n===void 0||n===1}function Xd({scale:n,scaleX:e,scaleY:t}){return!Wf(n)||!Wf(e)||!Wf(t)}function gs(n){return Xd(n)||Ly(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Ly(n){return Fv(n.x)||Fv(n.y)}function Fv(n){return n&&n!=="0%"}function Hu(n,e,t){const r=n-t,o=e*r;return t+o}function Ov(n,e,t,r,o){return o!==void 0&&(n=Hu(n,o,r)),Hu(n,t,r)+e}function jd(n,e=0,t=1,r,o){n.min=Ov(n.min,e,t,r,o),n.max=Ov(n.max,e,t,r,o)}function Iy(n,{x:e,y:t}){jd(n.x,e.translate,e.scale,e.originPoint),jd(n.y,t.translate,t.scale,t.originPoint)}const kv=.999999999999,Bv=1.0000000000001;function Iw(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&_o(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,Iy(n,u)),r&&gs(l.latestValues)&&_o(n,l.latestValues))}e.x<Bv&&e.x>kv&&(e.x=1),e.y<Bv&&e.y>kv&&(e.y=1)}function vo(n,e){n.min=n.min+e,n.max=n.max+e}function zv(n,e,t,r,o=.5){const l=Zt(n.min,n.max,o);jd(n,e,t,l,r)}function _o(n,e){zv(n.x,e.x,e.scaleX,e.scale,e.originX),zv(n.y,e.y,e.scaleY,e.scale,e.originY)}function Ny(n,e){return Dy(Lw(n.getBoundingClientRect(),e))}function Nw(n,e,t){const r=Ny(n,t),{scroll:o}=e;return o&&(vo(r.x,o.offset.x),vo(r.y,o.offset.y)),r}const Vv=()=>({translate:0,scale:1,origin:0,originPoint:0}),yo=()=>({x:Vv(),y:Vv()}),Hv=()=>({min:0,max:0}),nn=()=>({x:Hv(),y:Hv()}),Yd={current:null},Uy={current:!1};function Uw(){if(Uy.current=!0,!!Wh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Yd.current=n.matches;n.addEventListener("change",e),e()}else Yd.current=!1}const Fw=new WeakMap;function Ow(n,e,t){for(const r in e){const o=e[r],l=t[r];if(Pn(o))n.addValue(r,o);else if(Pn(l))n.addValue(r,Mo(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Mo(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Gv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class kw{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=lp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=jn.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,qt.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!l,this.isControllingVariants=$u(t),this.isVariantNode=xy(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:m,...p}=this.scrapeMotionValuesFromProps(t,{},this);for(const v in p){const x=p[v];d[v]!==void 0&&Pn(x)&&x.set(d[v])}}mount(e){this.current=e,Fw.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),Uy.current||Uw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Yd.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Wr(this.notifyUpdate),Wr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Lo.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&qt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l&&l(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in To){const t=To[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):nn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Gv.length;r++){const o=Gv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=Ow(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Mo(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(C_(r)||b_(r))?r=parseFloat(r):!ZT(r)&&Xr.test(t)&&(r=cy(e,t)),this.setBaseTarget(e,Pn(r)?r.get():r)),Pn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const l=_p(this.props,t,this.presenceContext?.custom);l&&(r=l[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Pn(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Kh),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){fp.render(this.render)}}class Fy extends kw{constructor(){super(...arguments),this.KeyframeResolver=BT}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Pn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function Oy(n,{style:e,vars:t},r,o){const l=n.style;let u;for(u in e)l[u]=e[u];o?.applyProjectionStyles(l,r);for(u in t)l.setProperty(u,t[u])}function Bw(n){return window.getComputedStyle(n)}class zw extends Fy{constructor(){super(...arguments),this.type="html",this.renderInstance=Oy}readValueFromInstance(e,t){if(Lo.has(t))return this.projection?.isProjecting?kd(t):rT(e,t);{const r=Bw(e),o=(Jh(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ny(e,t)}build(e,t,r){mp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return yp(e,t,r)}}const ky=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Vw(n,e,t,r){Oy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(ky.has(o)?o:xp(o),e.attrs[o])}class Hw extends Fy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=nn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Lo.has(t)){const r=uy(t);return r&&r.default||0}return t=ky.has(t)?t:xp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Cy(e,t,r)}build(e,t,r){My(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){Vw(e,t,r,o)}mount(e){this.isSVGTag=wy(e.tagName),super.mount(e)}}const Gw=(n,e)=>vp(n)?new Hw(e):new zw(e,{allowProjection:n!==Fe.Fragment});function So(n,e,t){const r=n.getProps();return _p(r,e,t!==void 0?t:r.custom,n)}const qd=n=>Array.isArray(n);function Ww(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Mo(t))}function Xw(n){return qd(n)?n[n.length-1]||0:n}function jw(n,e){const t=So(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const c=Xw(l[u]);Ww(n,u,c)}}function Yw(n){return!!(Pn(n)&&n.add)}function $d(n,e){const t=n.getValue("willChange");if(Yw(t))return t.add(e);if(!t&&cr.WillChange){const r=new cr.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function By(n){return n.props[Ry]}const qw=n=>n!==null;function $w(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(qw),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return o[l]}const Kw={type:"spring",stiffness:500,damping:25,restSpeed:10},Zw=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Qw={type:"keyframes",duration:.8},Jw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},e1=(n,{keyframes:e})=>e.length>2?Qw:Lo.has(n)?n.startsWith("scale")?Zw(e[1]):Kw:Jw;function t1({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const Sp=(n,e,t,r={},o,l)=>u=>{const c=up(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-Hi(d);const m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:v=>{e.set(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:l?void 0:o};t1(c)||Object.assign(m,e1(n,m)),m.duration&&(m.duration=Hi(m.duration)),m.repeatDelay&&(m.repeatDelay=Hi(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let p=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(Gd(m),m.delay===0&&(p=!0)),(cr.instantAnimations||cr.skipAnimations)&&(p=!0,Gd(m),m.delay=0),m.allowFlatten=!c.type&&!c.ease,p&&!l&&e.get()!==void 0){const v=$w(m.keyframes,c);if(v!==void 0){qt.update(()=>{m.onUpdate(v),m.onComplete()});return}}return c.isSync?new ap(m):new CT(m)};function n1({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function zy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:l=n.getDefaultTransition(),transitionEnd:u,...c}=e;r&&(l=r);const d=[],h=o&&n.animationState&&n.animationState.getState()[o];for(const m in c){const p=n.getValue(m,n.latestValues[m]??null),v=c[m];if(v===void 0||h&&n1(h,m))continue;const x={delay:t,...up(l||{},m)},E=p.get();if(E!==void 0&&!p.isAnimating&&!Array.isArray(v)&&v===E&&!x.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const y=By(n);if(y){const D=window.MotionHandoffAnimation(y,m,qt);D!==null&&(x.startTime=D,T=!0)}}$d(n,m),p.start(Sp(m,p,v,n.shouldReduceMotion&&oy.has(m)?{type:!1}:x,n,T));const S=p.animation;S&&d.push(S)}return u&&Promise.all(d).then(()=>{qt.update(()=>{u&&jw(n,u)})}),d}function Vy(n,e,t,r=0,o=1){const l=Array.from(n).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),u=n.size,c=(u-1)*r;return typeof t=="function"?t(l,u):o===1?l*r:c-l*r}function Kd(n,e,t={}){const r=So(n,e,t.type==="exit"?n.presenceContext?.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const l=r?()=>Promise.all(zy(n,r,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:m,staggerDirection:p}=o;return i1(n,e,d,h,m,p,t)}:()=>Promise.resolve(),{when:c}=o;if(c){const[d,h]=c==="beforeChildren"?[l,u]:[u,l];return d().then(()=>h())}else return Promise.all([l(),u(t.delay)])}function i1(n,e,t=0,r=0,o=0,l=1,u){const c=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),c.push(Kd(d,e,{...u,delay:t+(typeof r=="function"?0:r)+Vy(n.variantChildren,d,r,o,l)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(c)}function r1(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Kd(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=Kd(n,e,t);else{const o=typeof e=="function"?So(n,e,t.custom):e;r=Promise.all(zy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}function Hy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const s1=pp.length;function Gy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Gy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<s1;t++){const r=pp[t],o=n.props[r];(ba(o)||o===!1)&&(e[r]=o)}return e}const o1=[...hp].reverse(),a1=hp.length;function l1(n){return e=>Promise.all(e.map(({animation:t,options:r})=>r1(n,t,r)))}function u1(n){let e=l1(n),t=Wv(),r=!0;const o=d=>(h,m)=>{const p=So(n,m,d==="exit"?n.presenceContext?.custom:void 0);if(p){const{transition:v,transitionEnd:x,...E}=p;h={...h,...E,...x}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,m=Gy(n.parent)||{},p=[],v=new Set;let x={},E=1/0;for(let S=0;S<a1;S++){const y=o1[S],D=t[y],R=h[y]!==void 0?h[y]:m[y],A=ba(R),N=y===d?D.isActive:null;N===!1&&(E=S);let I=R===m[y]&&R!==h[y]&&A;if(I&&r&&n.manuallyAnimateOnMount&&(I=!1),D.protectedKeys={...x},!D.isActive&&N===null||!R&&!D.prevProp||qu(R)||typeof R=="boolean")continue;const k=c1(D.prevProp,R);let F=k||y===d&&D.isActive&&!I&&A||S>E&&A,P=!1;const C=Array.isArray(R)?R:[R];let V=C.reduce(o(y),{});N===!1&&(V={});const{prevResolvedValues:q={}}=D,ie={...q,...V},ue=se=>{F=!0,v.has(se)&&(P=!0,v.delete(se)),D.needsAnimating[se]=!0;const B=n.getValue(se);B&&(B.liveStyle=!1)};for(const se in ie){const B=V[se],ee=q[se];if(x.hasOwnProperty(se))continue;let $=!1;qd(B)&&qd(ee)?$=!Hy(B,ee):$=B!==ee,$?B!=null?ue(se):v.add(se):B!==void 0&&v.has(se)?ue(se):D.protectedKeys[se]=!0}D.prevProp=R,D.prevResolvedValues=V,D.isActive&&(x={...x,...V}),r&&n.blockInitialAnimation&&(F=!1);const de=I&&k;F&&(!de||P)&&p.push(...C.map(se=>{const B={type:y};if(typeof se=="string"&&r&&!de&&n.manuallyAnimateOnMount&&n.parent){const{parent:ee}=n,$=So(ee,se);if(ee.enteringChildren&&$){const{delayChildren:O}=$.transition||{};B.delay=Vy(ee.enteringChildren,n,O)}}return{animation:se,options:B}}))}if(v.size){const S={};if(typeof h.initial!="boolean"){const y=So(n,Array.isArray(h.initial)?h.initial[0]:h.initial);y&&y.transition&&(S.transition=y.transition)}v.forEach(y=>{const D=n.getBaseTarget(y),R=n.getValue(y);R&&(R.liveStyle=!0),S[y]=D??null}),p.push({animation:S})}let T=!!p.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),r=!1,T?e(p):Promise.resolve()}function c(d,h){if(t[d].isActive===h)return Promise.resolve();n.variantChildren?.forEach(p=>p.animationState?.setActive(d,h)),t[d].isActive=h;const m=u(d);for(const p in t)t[p].protectedKeys={};return m}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t,reset:()=>{t=Wv(),r=!0}}}function c1(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Hy(e,n):!1}function us(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Wv(){return{animate:us(!0),whileInView:us(),whileHover:us(),whileTap:us(),whileDrag:us(),whileFocus:us(),exit:us()}}class Yr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class f1 extends Yr{constructor(e){super(e),e.animationState||(e.animationState=u1(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();qu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let d1=0;class h1 extends Yr{constructor(){super(...arguments),this.id=d1++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const p1={animation:{Feature:f1},exit:{Feature:h1}};function Da(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function za(n){return{point:{x:n.pageX,y:n.pageY}}}const m1=n=>e=>dp(e)&&n(e,za(e));function Ma(n,e,t,r){return Da(n,e,m1(t),r)}const Wy=1e-4,g1=1-Wy,v1=1+Wy,Xy=.01,_1=0-Xy,y1=0+Xy;function On(n){return n.max-n.min}function x1(n,e,t){return Math.abs(n-e)<=t}function Xv(n,e,t,r=.5){n.origin=r,n.originPoint=Zt(e.min,e.max,n.origin),n.scale=On(t)/On(e),n.translate=Zt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=g1&&n.scale<=v1||isNaN(n.scale))&&(n.scale=1),(n.translate>=_1&&n.translate<=y1||isNaN(n.translate))&&(n.translate=0)}function Ta(n,e,t,r){Xv(n.x,e.x,t.x,r?r.originX:void 0),Xv(n.y,e.y,t.y,r?r.originY:void 0)}function jv(n,e,t){n.min=t.min+e.min,n.max=n.min+On(e)}function S1(n,e,t){jv(n.x,e.x,t.x),jv(n.y,e.y,t.y)}function Yv(n,e,t){n.min=e.min-t.min,n.max=n.min+On(e)}function wa(n,e,t){Yv(n.x,e.x,t.x),Yv(n.y,e.y,t.y)}function ci(n){return[n("x"),n("y")]}const jy=({current:n})=>n?n.ownerDocument.defaultView:null,qv=(n,e)=>Math.abs(n-e);function E1(n,e){const t=qv(n.x,e.x),r=qv(n.y,e.y);return Math.sqrt(t**2+r**2)}class Yy{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=jf(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,E=E1(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!E)return;const{point:T}=v,{timestamp:S}=Sn;this.history.push({...T,timestamp:S});const{onStart:y,onMove:D}=this.handlers;x||(y&&y(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,v)},this.handlePointerMove=(v,x)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Xf(x,this.transformPagePoint),qt.update(this.updatePoint,!0)},this.handlePointerUp=(v,x)=>{this.end();const{onEnd:E,onSessionEnd:T,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=jf(v.type==="pointercancel"?this.lastMoveEventInfo:Xf(x,this.transformPagePoint),this.history);this.startEvent&&E&&E(v,y),T&&T(v,y)},!dp(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const c=za(e),d=Xf(c,this.transformPagePoint),{point:h}=d,{timestamp:m}=Sn;this.history=[{...h,timestamp:m}];const{onSessionStart:p}=t;p&&p(e,jf(d,this.history)),this.removeListeners=Oa(Ma(this.contextWindow,"pointermove",this.handlePointerMove),Ma(this.contextWindow,"pointerup",this.handlePointerUp),Ma(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Wr(this.updatePoint)}}function Xf(n,e){return e?{point:e(n.point)}:n}function $v(n,e){return{x:n.x-e.x,y:n.y-e.y}}function jf({point:n},e){return{point:n,delta:$v(n,qy(e)),offset:$v(n,M1(e)),velocity:T1(e,.1)}}function M1(n){return n[0]}function qy(n){return n[n.length-1]}function T1(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=qy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>Hi(e)));)t--;if(!r)return{x:0,y:0};const l=hi(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function w1(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Zt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Zt(t,n,r.max):Math.min(n,t)),n}function Kv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function A1(n,{top:e,left:t,bottom:r,right:o}){return{x:Kv(n.x,t,o),y:Kv(n.y,e,r)}}function Zv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function C1(n,e){return{x:Zv(n.x,e.x),y:Zv(n.y,e.y)}}function R1(n,e){let t=.5;const r=On(n),o=On(e);return o>r?t=Aa(e.min,e.max-r,n.min):r>o&&(t=Aa(n.min,n.max-o,e.min)),ur(0,1,t)}function b1(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Zd=.35;function P1(n=Zd){return n===!1?n=0:n===!0&&(n=Zd),{x:Qv(n,"left","right"),y:Qv(n,"top","bottom")}}function Qv(n,e,t){return{min:Jv(n,e),max:Jv(n,t)}}function Jv(n,e){return typeof n=="number"?n:n[e]||0}const D1=new WeakMap;class L1{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=nn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=p=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(za(p).point)},u=(p,v)=>{const{drag:x,dragPropagation:E,onDragStart:T}=this.getProps();if(x&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=GT(x),!this.openDragLock))return;this.latestPointerEvent=p,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ci(y=>{let D=this.getAxisMotionValue(y).get()||0;if(Gi.test(D)){const{projection:R}=this.visualElement;if(R&&R.layout){const A=R.layout.layoutBox[y];A&&(D=On(A)*(parseFloat(D)/100))}}this.originPoint[y]=D}),T&&qt.postRender(()=>T(p,v)),$d(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},c=(p,v)=>{this.latestPointerEvent=p,this.latestPanInfo=v;const{dragPropagation:x,dragDirectionLock:E,onDirectionLock:T,onDrag:S}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:y}=v;if(E&&this.currentDirection===null){this.currentDirection=I1(y),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",v.point,y),this.updateAxis("y",v.point,y),this.visualElement.render(),S&&S(p,v)},d=(p,v)=>{this.latestPointerEvent=p,this.latestPanInfo=v,this.stop(p,v),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>ci(p=>this.getAnimationState(p)==="paused"&&this.getAxisMotionValue(p).animation?.play()),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Yy(e,{onSessionStart:l,onStart:u,onMove:c,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:jy(this.visualElement)})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:c}=this.getProps();c&&qt.postRender(()=>c(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!iu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=w1(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;e&&go(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=A1(r.layoutBox,e):this.constraints=!1,this.elastic=P1(t),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ci(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=b1(r.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!go(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=Nw(r,o.root,this.visualElement.getTransformPagePoint());let u=C1(o.layout.layoutBox,l);if(t){const c=t(Dw(u));this.hasMutatedConstraints=!!c,c&&(u=Dy(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=ci(m=>{if(!iu(m,t,this.currentDirection))return;let p=d&&d[m]||{};u&&(p={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,E={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...p};return this.startAxisValueAnimation(m,E)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return $d(this.visualElement,e),r.start(Sp(e,r,0,t,this.visualElement,!1))}stopAnimation(){ci(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ci(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ci(t=>{const{drag:r}=this.getProps();if(!iu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-Zt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!go(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ci(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=R1({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ci(u=>{if(!iu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(Zt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;D1.set(this.visualElement,this);const e=this.visualElement.current,t=Ma(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();go(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),qt.read(r);const u=Da(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(ci(m=>{const p=this.getAxisMotionValue(m);p&&(this.originPoint[m]+=d[m].translate,p.set(p.get()+d[m].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Zd,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function iu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function I1(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class N1 extends Yr{constructor(e){super(e),this.removeGroupControls=pi,this.removeListeners=pi,this.controls=new L1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||pi}unmount(){this.removeGroupControls(),this.removeListeners()}}const e0=n=>(e,t)=>{n&&qt.postRender(()=>n(e,t))};class U1 extends Yr{constructor(){super(...arguments),this.removePointerDownListener=pi}onPointerDown(e){this.session=new Yy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:jy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:e0(e),onStart:e0(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&qt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Ma(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Du={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function t0(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const ha={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(ct.test(n))n=parseFloat(n);else return n;const t=t0(n,e.target.x),r=t0(n,e.target.y);return`${t}% ${r}%`}},F1={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Xr.parse(n);if(o.length>5)return r;const l=Xr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=Zt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};let Yf=!1;class O1 extends Fe.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;sw(k1),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),Yf&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Du.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,{projection:u}=r;return u&&(u.isPresent=l,Yf=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==l?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||qt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),fp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;Yf=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function $y(n){const[e,t]=QT(),r=Fe.useContext(A_);return me.jsx(O1,{...n,layoutGroup:r,switchLayoutGroup:Fe.useContext(by),isPresent:e,safeToRemove:t})}const k1={borderRadius:{...ha,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ha,borderTopRightRadius:ha,borderBottomLeftRadius:ha,borderBottomRightRadius:ha,boxShadow:F1};function B1(n,e,t){const r=Pn(n)?n:Mo(n);return r.start(Sp("",r,e,t)),r.animation}const z1=(n,e)=>n.depth-e.depth;class V1{constructor(){this.children=[],this.isDirty=!1}add(e){jh(this.children,e),this.isDirty=!0}remove(e){Yh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(z1),this.isDirty=!1,this.children.forEach(e)}}function H1(n,e){const t=jn.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(Wr(r),n(l-e))};return qt.setup(r,!0),()=>Wr(r)}const Ky=["TopLeft","TopRight","BottomLeft","BottomRight"],G1=Ky.length,n0=n=>typeof n=="string"?parseFloat(n):n,i0=n=>typeof n=="number"||ct.test(n);function W1(n,e,t,r,o,l){o?(n.opacity=Zt(0,t.opacity??1,X1(r)),n.opacityExit=Zt(e.opacity??1,0,j1(r))):l&&(n.opacity=Zt(e.opacity??1,t.opacity??1,r));for(let u=0;u<G1;u++){const c=`border${Ky[u]}Radius`;let d=r0(e,c),h=r0(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||i0(d)===i0(h)?(n[c]=Math.max(Zt(n0(d),n0(h),r),0),(Gi.test(h)||Gi.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=Zt(e.rotate||0,t.rotate||0,r))}function r0(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const X1=Zy(0,.5,O_),j1=Zy(.5,.95,pi);function Zy(n,e,t){return r=>r<n?0:r>e?1:t(Aa(n,e,r))}function s0(n,e){n.min=e.min,n.max=e.max}function li(n,e){s0(n.x,e.x),s0(n.y,e.y)}function o0(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function a0(n,e,t,r,o){return n-=e,n=Hu(n,1/t,r),o!==void 0&&(n=Hu(n,1/o,r)),n}function Y1(n,e=0,t=1,r=.5,o,l=n,u=n){if(Gi.test(e)&&(e=parseFloat(e),e=Zt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Zt(l.min,l.max,r);n===l&&(c-=e),n.min=a0(n.min,e,t,c,o),n.max=a0(n.max,e,t,c,o)}function l0(n,e,[t,r,o],l,u){Y1(n,e[t],e[r],e[o],e.scale,l,u)}const q1=["x","scaleX","originX"],$1=["y","scaleY","originY"];function u0(n,e,t,r){l0(n.x,e,q1,t?t.x:void 0,r?r.x:void 0),l0(n.y,e,$1,t?t.y:void 0,r?r.y:void 0)}function c0(n){return n.translate===0&&n.scale===1}function Qy(n){return c0(n.x)&&c0(n.y)}function f0(n,e){return n.min===e.min&&n.max===e.max}function K1(n,e){return f0(n.x,e.x)&&f0(n.y,e.y)}function d0(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Jy(n,e){return d0(n.x,e.x)&&d0(n.y,e.y)}function h0(n){return On(n.x)/On(n.y)}function p0(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class Z1{constructor(){this.members=[]}add(e){jh(this.members,e),e.scheduleRender()}remove(e){if(Yh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Q1(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=t?.z||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:p,rotateY:v,skewX:x,skewY:E}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),p&&(r+=`rotateX(${p}deg) `),v&&(r+=`rotateY(${v}deg) `),x&&(r+=`skewX(${x}deg) `),E&&(r+=`skewY(${E}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const qf=["","X","Y","Z"],J1=1e3;let eA=0;function $f(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function ex(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=By(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",qt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&ex(r)}function tx({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e?.()){this.id=eA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(iA),this.nodes.forEach(aA),this.nodes.forEach(lA),this.nodes.forEach(rA)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new V1)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Kh),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=gy(u)&&!$T(u),this.instance=u;const{layoutId:c,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||c)&&(this.isLayoutDirty=!0),n){let m,p=0;const v=()=>this.root.updateBlockedByResize=!1;qt.read(()=>{p=window.innerWidth}),n(u,()=>{const x=window.innerWidth;x!==p&&(p=x,this.root.updateBlockedByResize=!0,m&&m(),m=H1(v,250),Du.hasAnimatedSinceResize&&(Du.hasAnimatedSinceResize=!1,this.nodes.forEach(v0)))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&h&&(c||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p,hasRelativeLayoutChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||h.getDefaultTransition()||hA,{onLayoutAnimationStart:T,onLayoutAnimationComplete:S}=h.getProps(),y=!this.targetLayout||!Jy(this.targetLayout,x),D=!p&&v;if(this.options.layoutRoot||this.resumeFrom||D||p&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...up(E,"layout"),onPlay:T,onComplete:S};(h.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(m,D)}else p||v0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Wr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(uA),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ex(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const p=this.path[m];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(m0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(g0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(oA),this.nodes.forEach(tA),this.nodes.forEach(nA)):this.nodes.forEach(g0),this.clearAllSnapshots();const c=jn.now();Sn.delta=ur(0,1e3/60,c-Sn.timestamp),Sn.timestamp=c,Sn.isProcessing=!0,Of.update.process(Sn),Of.preRender.process(Sn),Of.render.process(Sn),Sn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,fp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(sA),this.sharedNodes.forEach(cA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!On(this.snapshot.measuredBox.x)&&!On(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=nn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!Qy(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&this.instance&&(c||gs(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),pA(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return nn();const c=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(mA))){const{scroll:h}=this.root;h&&(vo(c.x,h.offset.x),vo(c.y,h.offset.y))}return c}removeElementScroll(u){const c=nn();if(li(c,u),this.scroll?.wasRoot)return c;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:m,options:p}=h;h!==this.root&&m&&p.layoutScroll&&(m.wasRoot&&li(c,u),vo(c.x,m.offset.x),vo(c.y,m.offset.y))}return c}applyTransform(u,c=!1){const d=nn();li(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!c&&m.options.layoutScroll&&m.scroll&&m!==m.root&&_o(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),gs(m.latestValues)&&_o(d,m.latestValues)}return gs(this.latestValues)&&_o(d,this.latestValues),d}removeTransform(u){const c=nn();li(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!gs(h.latestValues))continue;Xd(h.latestValues)&&h.updateSnapshot();const m=nn(),p=h.measurePageBox();li(m,p),u0(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return gs(this.latestValues)&&u0(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Sn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==c;if(!(u||d&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:p}=this.options;if(!(!this.layout||!(m||p))){if(this.resolvedRelativeTargetAt=Sn.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nn(),this.relativeTargetOrigin=nn(),wa(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=nn(),this.targetWithTransforms=nn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),S1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):li(this.target,this.layout.layoutBox),Iy(this.target,this.targetDelta)):li(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nn(),this.relativeTargetOrigin=nn(),wa(this.relativeTargetOrigin,this.target,v.target),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Xd(this.parent.latestValues)||Ly(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const u=this.getLead(),c=!!this.resumingFrom||this!==u;let d=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(d=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Sn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;li(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,v=this.treeScale.y;Iw(this.layoutCorrected,this.treeScale,this.path,c),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=nn());const{target:x}=u;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(o0(this.prevProjectionDelta.x,this.projectionDelta.x),o0(this.prevProjectionDelta.y,this.projectionDelta.y)),Ta(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==v||!p0(this.projectionDelta.x,this.prevProjectionDelta.x)||!p0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=yo(),this.projectionDelta=yo(),this.projectionDeltaWithTransform=yo()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},p=yo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=nn(),x=d?d.source:void 0,E=this.layout?this.layout.source:void 0,T=x!==E,S=this.getStack(),y=!S||S.members.length<=1,D=!!(T&&!y&&this.options.crossfade===!0&&!this.path.some(dA));this.animationProgress=0;let R;this.mixTargetDelta=A=>{const N=A/1e3;_0(p.x,u.x,N),_0(p.y,u.y,N),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wa(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),fA(this.relativeTarget,this.relativeTargetOrigin,v,N),R&&K1(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=nn()),li(R,this.relativeTarget)),T&&(this.animationValues=m,W1(m,h,this.latestValues,N,D,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Wr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qt.update(()=>{Du.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Mo(0)),this.currentAnimation=B1(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(J1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:m}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&nx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||nn();const p=On(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+p;const v=On(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}li(c,d),_o(c,m),Ta(this.projectionDeltaWithTransform,this.layoutCorrected,c,m)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new Z1),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&$f("z",u,h,this.animationValues);for(let m=0;m<qf.length;m++)$f(`rotate${qf[m]}`,u,h,this.animationValues),$f(`skew${qf[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}applyProjectionStyles(u,c){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Pu(c?.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Pu(c?.pointerEvents)||""),this.hasProjected&&!gs(this.latestValues)&&(u.transform=d?d({},""):"none",this.hasProjected=!1);return}u.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let p=Q1(this.projectionDeltaWithTransform,this.treeScale,m);d&&(p=d(m,p)),u.transform=p;const{x:v,y:x}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,h.animationValues?u.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const E in Pa){if(m[E]===void 0)continue;const{correct:T,applyTo:S,isCSSVariable:y}=Pa[E],D=p==="none"?m[E]:T(m[E],h);if(S){const R=S.length;for(let A=0;A<R;A++)u[S[A]]=D}else y?this.options.visualElement.renderState.vars[E]=D:u[E]=D}this.options.layoutId&&(u.pointerEvents=h===this?Pu(c?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(m0),this.root.sharedNodes.clear()}}}function tA(n){n.updateLayout()}function nA(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=n.layout,{animationType:o}=n.options,l=e.source!==n.layout.source;o==="size"?ci(m=>{const p=l?e.measuredBox[m]:e.layoutBox[m],v=On(p);p.min=t[m].min,p.max=p.min+v}):nx(o,e.layoutBox,t)&&ci(m=>{const p=l?e.measuredBox[m]:e.layoutBox[m],v=On(t[m]);p.max=p.min+v,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[m].max=n.relativeTarget[m].min+v)});const u=yo();Ta(u,t,e.layoutBox);const c=yo();l?Ta(c,n.applyTransform(r,!0),e.measuredBox):Ta(c,t,e.layoutBox);const d=!Qy(u);let h=!1;if(!n.resumeFrom){const m=n.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:p,layout:v}=m;if(p&&v){const x=nn();wa(x,e.layoutBox,p.layoutBox);const E=nn();wa(E,t,v.layoutBox),Jy(x,E)||(h=!0),m.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=x,n.relativeParent=m)}}}n.notifyListeners("didUpdate",{layout:t,snapshot:e,delta:c,layoutDelta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(n.isLead()){const{onExitComplete:t}=n.options;t&&t()}n.options.transition=void 0}function iA(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function rA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function sA(n){n.clearSnapshot()}function m0(n){n.clearMeasurements()}function g0(n){n.isLayoutDirty=!1}function oA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function v0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function aA(n){n.resolveTargetDelta()}function lA(n){n.calcProjection()}function uA(n){n.resetSkewAndRotation()}function cA(n){n.removeLeadSnapshot()}function _0(n,e,t){n.translate=Zt(e.translate,0,t),n.scale=Zt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function y0(n,e,t,r){n.min=Zt(e.min,t.min,r),n.max=Zt(e.max,t.max,r)}function fA(n,e,t,r){y0(n.x,e.x,t.x,r),y0(n.y,e.y,t.y,r)}function dA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const hA={duration:.45,ease:[.4,0,.1,1]},x0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),S0=x0("applewebkit/")&&!x0("chrome/")?Math.round:pi;function E0(n){n.min=S0(n.min),n.max=S0(n.max)}function pA(n){E0(n.x),E0(n.y)}function nx(n,e,t){return n==="position"||n==="preserve-aspect"&&!x1(h0(e),h0(t),.2)}function mA(n){return n!==n.root&&n.scroll?.wasRoot}const gA=tx({attachResizeListener:(n,e)=>Da(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Kf={current:void 0},ix=tx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Kf.current){const n=new gA({});n.mount(window),n.setOptions({layoutScroll:!0}),Kf.current=n}return Kf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),vA={pan:{Feature:U1},drag:{Feature:N1,ProjectionNode:ix,MeasureLayout:$y}};function M0(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&qt.postRender(()=>l(e,za(e)))}class _A extends Yr{mount(){const{current:e}=this.node;e&&(this.unmount=WT(e,(t,r)=>(M0(this.node,r,"Start"),o=>M0(this.node,o,"End"))))}unmount(){}}class yA extends Yr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oa(Da(this.node.current,"focus",()=>this.onFocus()),Da(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function T0(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&qt.postRender(()=>l(e,za(e)))}class xA extends Yr{mount(){const{current:e}=this.node;e&&(this.unmount=qT(e,(t,r)=>(T0(this.node,r,"Start"),(o,{success:l})=>T0(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Qd=new WeakMap,Zf=new WeakMap,SA=n=>{const e=Qd.get(n.target);e&&e(n)},EA=n=>{n.forEach(SA)};function MA({root:n,...e}){const t=n||document;Zf.has(t)||Zf.set(t,{});const r=Zf.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(EA,{root:n,...e})),r[o]}function TA(n,e,t){const r=MA(e);return Qd.set(n,t),r.observe(n),()=>{Qd.delete(n),r.unobserve(n)}}const wA={some:0,all:1};class AA extends Yr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:wA[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:p}=this.node.getProps(),v=h?m:p;v&&v(d)};return TA(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(CA(e,t))&&this.startObserver()}unmount(){}}function CA({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const RA={inView:{Feature:AA},tap:{Feature:xA},focus:{Feature:yA},hover:{Feature:_A}},bA={layout:{ProjectionNode:ix,MeasureLayout:$y}},PA={...p1,...RA,...vA,...bA},Pt=Pw(PA,Gw),DA={some:0,all:1};function LA(n,e,{root:t,margin:r,amount:o="some"}={}){const l=fy(n),u=new WeakMap,c=h=>{h.forEach(m=>{const p=u.get(m.target);if(m.isIntersecting!==!!p)if(m.isIntersecting){const v=e(m.target,m);typeof v=="function"?u.set(m.target,v):d.unobserve(m.target)}else typeof p=="function"&&(p(m),u.delete(m.target))})},d=new IntersectionObserver(c,{root:t,rootMargin:r,threshold:typeof o=="number"?o:DA[o]});return l.forEach(h=>d.observe(h)),()=>d.disconnect()}function Ep(n,{root:e,margin:t,amount:r,once:o=!1,initial:l=!1}={}){const[u,c]=Fe.useState(l);return Fe.useEffect(()=>{if(!n.current||o&&u)return;const d=()=>(c(!0),o?void 0:()=>c(!1)),h={root:e&&e.current||void 0,margin:t,amount:r};return LA(n.current,d,h)},[e,n,t,o,r]),u}const Gu={NAME:"Nicolás Lundin",TAGLINE:"A Senior Product Designer from Santiago, Chile –– creating user-friendly solutions for digital products."},zr={EMAIL:"hola@nlund.in",LINKEDIN:"https://linkedin.com/in/nicolaslundin",DRIBBBLE:"https://dribbble.com/sirlund",RESUME:"#"},ru={DESCRIPTION:["I'm a Senior Product Designer from Santiago, Chile, with extensive experience creating user-friendly solutions for digital products. I specialize in design systems, fintech, and transforming complex processes into intuitive experiences.","My approach focuses on systematic design thinking and cross-functional collaboration. I excel at building scalable design systems from inception and leading design teams to deliver consistent, high-quality user experiences.","Throughout my career, I've worked across diverse industries including AI platforms, cryptocurrency, cannabis tech, financial services, and insurtech. I'm passionate about making complex technologies accessible and user-friendly.","I believe in the power of design systems to scale quality and consistency, and I'm always looking for opportunities to mentor other designers and share knowledge within the design community."],TOOLS:["Figma","Sketch","Principle","Adobe Creative Suite"],SKILLS:["User Research","Information Architecture","Interaction Design","Design Systems"],INDUSTRIES:["AI & Machine Learning","Fintech & Crypto","Insurtech","Financial Services"]},Qf={TITLE:"Let's Connect",DESCRIPTION:"I'm always interested in discussing new opportunities, especially those involving design systems, fintech, or complex product challenges. Feel free to reach out if you'd like to work together or just want to chat about design.",LINKS:[{name:"Email",href:`mailto:${zr.EMAIL}`,description:zr.EMAIL},{name:"LinkedIn",target:"_blank",rel:"noopener noreferrer",href:zr.LINKEDIN,description:"Connect with me"},{name:"Dribbble",target:"_blank",rel:"noopener noreferrer",href:zr.DRIBBBLE,description:"View my work"},{name:"Resume",href:zr.RESUME,description:"Download PDF"}]},Jd="/",Lu={NAVIGATION_FAILED:"Navigation failed",ROUTE_NOT_FOUND:"Route not found",UNEXPECTED_ERROR:"An unexpected error occurred"},IA={behavior:"smooth",block:"start"},w0=[{name:"Work",href:"#work"},{name:"About",href:"#about"},{name:"Contact",href:"#contact"}];function NA(){const{currentRoute:n,navigateTo:e}=Ox(),[t,r]=Fe.useState(!1),[o,l]=Fe.useState(!1);Fe.useEffect(()=>{const c=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),Fe.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[o]);const u=c=>{l(!1),requestAnimationFrame(()=>{n!=="home"?(e("home"),setTimeout(()=>{window.history.pushState({route:"home",section:c},"",`/${c}`);const d=document.querySelector(c);d&&d.scrollIntoView({behavior:"smooth"})},300)):(window.history.pushState({route:"home",section:c},"",`/${c}`),setTimeout(()=>{const d=document.querySelector(c);if(d){const p=d.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:p,behavior:"smooth"})}},50))})};return me.jsxs(me.Fragment,{children:[me.jsx(Pt.header,{initial:{y:-100},animate:{y:0},transition:{duration:.6},className:`header ${t?"header-scrolled":"header-transparent"}`,style:{zIndex:o?100:50,backgroundColor:o?"transparent":void 0},children:me.jsx("nav",{className:"header-nav",children:me.jsxs("div",{className:"header-inner",children:[me.jsx(Pt.div,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"header-logo",onClick:()=>e("home"),style:{color:o?"#ffffff":"inherit"},children:me.jsx("span",{className:"header-logo-text",children:Gu.NAME})}),me.jsx("div",{className:"header-desktop-nav",children:me.jsx("div",{className:"header-nav-items",children:w0.map(c=>me.jsx(Pt.button,{whileHover:{y:-2},whileTap:{scale:.95},onClick:()=>u(c.href),className:"header-nav-button",children:c.name},c.name))})}),me.jsx(Pt.button,{whileTap:{scale:.95},onClick:()=>l(!o),className:"header-mobile-menu-button","aria-label":"Toggle menu",style:{color:o?"#ffffff":"inherit"},children:me.jsxs(Pt.div,{animate:o?"open":"closed",className:"menu-icon",children:[me.jsx(Pt.span,{variants:{closed:{rotate:0,top:"0px"},open:{rotate:45,top:"8px"}},transition:{duration:.3},className:"menu-line",style:{position:"absolute"}}),me.jsx(Pt.span,{variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.3},className:"menu-line",style:{position:"absolute"}}),me.jsx(Pt.span,{variants:{closed:{rotate:0,bottom:"0px"},open:{rotate:-45,bottom:"8px"}},transition:{duration:.3},className:"menu-line",style:{position:"absolute"}})]})})]})})}),me.jsx(Pt.div,{initial:{opacity:0,x:"100%"},animate:{opacity:o?1:0,x:o?0:"100%"},transition:{duration:.4,ease:[.6,.05,.01,.9]},className:"header-mobile-nav-overlay",style:{pointerEvents:o?"auto":"none"},children:me.jsx("div",{className:"header-mobile-nav-content",children:w0.map((c,d)=>me.jsx(Pt.button,{initial:{opacity:0,x:50},animate:{opacity:o?1:0,x:o?0:50},transition:{duration:.4,delay:o?.1+d*.1:0,ease:[.6,.05,.01,.9]},whileHover:{x:20},whileTap:{scale:.95},onClick:()=>u(c.href),className:"header-mobile-nav-link",children:c.name},c.name))})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="180",UA=0,A0=1,FA=2,rx=1,OA=2,or=3,jr=0,Yn=1,ki=2,Hr=0,Cs=1,C0=2,R0=3,b0=4,kA=5,ys=100,BA=101,zA=102,VA=103,HA=104,GA=200,WA=201,XA=202,jA=203,eh=204,th=205,YA=206,qA=207,$A=208,KA=209,ZA=210,QA=211,JA=212,eC=213,tC=214,nh=0,ih=1,rh=2,wo=3,sh=4,oh=5,ah=6,lh=7,sx=0,nC=1,iC=2,Gr=0,rC=1,sC=2,oC=3,aC=4,lC=5,uC=6,cC=7,ox=300,Ao=301,Co=302,uh=303,ch=304,Ku=306,fh=1e3,Ms=1001,dh=1002,Pi=1003,fC=1004,su=1005,Bi=1006,Jf=1007,Ts=1008,fr=1009,ax=1010,lx=1011,La=1012,Tp=1013,Rs=1014,ar=1015,Va=1016,wp=1017,Ap=1018,Ia=1020,ux=35902,cx=35899,fx=1021,dx=1022,bi=1023,Na=1026,Ua=1027,hx=1028,Cp=1029,px=1030,Rp=1031,bp=1033,Iu=33776,Nu=33777,Uu=33778,Fu=33779,hh=35840,ph=35841,mh=35842,gh=35843,vh=36196,_h=37492,yh=37496,xh=37808,Sh=37809,Eh=37810,Mh=37811,Th=37812,wh=37813,Ah=37814,Ch=37815,Rh=37816,bh=37817,Ph=37818,Dh=37819,Lh=37820,Ih=37821,Nh=36492,Uh=36494,Fh=36495,Oh=36283,kh=36284,Bh=36285,zh=36286,dC=3200,hC=3201,pC=0,mC=1,Vr="",fi="srgb",Ro="srgb-linear",Wu="linear",kt="srgb",eo=7680,P0=519,gC=512,vC=513,_C=514,mx=515,yC=516,xC=517,SC=518,EC=519,D0=35044,L0="300 es",zi=2e3,Xu=2001;class Io{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,Vh=180/Math.PI;function Ha(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function MC(n,e){return(n%e+e)%e}function td(n,e,t){return(1-t)*n+t*e}function pa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ga{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let d=r[o+0],h=r[o+1],m=r[o+2],p=r[o+3];const v=l[u+0],x=l[u+1],E=l[u+2],T=l[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=p;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=E,e[t+3]=T;return}if(p!==T||d!==v||h!==x||m!==E){let S=1-c;const y=d*v+h*x+m*E+p*T,D=y>=0?1:-1,R=1-y*y;if(R>Number.EPSILON){const N=Math.sqrt(R),I=Math.atan2(N,y*D);S=Math.sin(S*I)/N,c=Math.sin(c*I)/N}const A=c*D;if(d=d*S+v*A,h=h*S+x*A,m=m*S+E*A,p=p*S+T*A,S===1-c){const N=1/Math.sqrt(d*d+h*h+m*m+p*p);d*=N,h*=N,m*=N,p*=N}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=p}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],d=r[o+1],h=r[o+2],m=r[o+3],p=l[u],v=l[u+1],x=l[u+2],E=l[u+3];return e[t]=c*E+m*p+d*x-h*v,e[t+1]=d*E+m*v+h*p-c*x,e[t+2]=h*E+m*x+c*v-d*p,e[t+3]=m*E-c*p-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),m=c(o/2),p=c(l/2),v=d(r/2),x=d(o/2),E=d(l/2);switch(u){case"XYZ":this._x=v*m*p+h*x*E,this._y=h*x*p-v*m*E,this._z=h*m*E+v*x*p,this._w=h*m*p-v*x*E;break;case"YXZ":this._x=v*m*p+h*x*E,this._y=h*x*p-v*m*E,this._z=h*m*E-v*x*p,this._w=h*m*p+v*x*E;break;case"ZXY":this._x=v*m*p-h*x*E,this._y=h*x*p+v*m*E,this._z=h*m*E+v*x*p,this._w=h*m*p-v*x*E;break;case"ZYX":this._x=v*m*p-h*x*E,this._y=h*x*p+v*m*E,this._z=h*m*E-v*x*p,this._w=h*m*p+v*x*E;break;case"YZX":this._x=v*m*p+h*x*E,this._y=h*x*p+v*m*E,this._z=h*m*E-v*x*p,this._w=h*m*p-v*x*E;break;case"XZY":this._x=v*m*p-h*x*E,this._y=h*x*p-v*m*E,this._z=h*m*E+v*x*p,this._w=h*m*p+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],m=t[6],p=t[10],v=r+c+p;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-o)*x}else if(r>c&&r>p){const x=2*Math.sqrt(1+r-c-p);this._w=(m-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+h)/x}else if(c>p){const x=2*Math.sqrt(1+c-r-p);this._w=(l-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+p-r-c);this._w=(u-o)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*c+o*h-l*d,this._y=o*m+u*d+l*c-r*h,this._z=l*m+u*h+r*d-o*c,this._w=u*m-r*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,c),p=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*p+this._w*v,this._x=r*p+this._x*v,this._y=o*p+this._y*v,this._z=l*p+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(I0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(I0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),m=2*(c*t-l*o),p=2*(l*r-u*t);return this.x=t+d*h+u*p-c*m,this.y=r+d*m+c*h-l*p,this.z=o+d*p+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nd=new ne,I0=new Ga;class gt{constructor(e,t,r,o,l,u,c,d,h){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h)}set(e,t,r,o,l,u,c,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],m=r[4],p=r[7],v=r[2],x=r[5],E=r[8],T=o[0],S=o[3],y=o[6],D=o[1],R=o[4],A=o[7],N=o[2],I=o[5],k=o[8];return l[0]=u*T+c*D+d*N,l[3]=u*S+c*R+d*I,l[6]=u*y+c*A+d*k,l[1]=h*T+m*D+p*N,l[4]=h*S+m*R+p*I,l[7]=h*y+m*A+p*k,l[2]=v*T+x*D+E*N,l[5]=v*S+x*R+E*I,l[8]=v*y+x*A+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*c*h-r*l*m+r*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],p=m*u-c*h,v=c*d-m*l,x=h*l-u*d,E=t*p+r*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=p*T,e[1]=(o*h-m*r)*T,e[2]=(c*r-o*u)*T,e[3]=v*T,e[4]=(m*t-o*d)*T,e[5]=(o*l-c*t)*T,e[6]=x*T,e[7]=(r*d-h*t)*T,e[8]=(u*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(id.makeScale(e,t)),this}rotate(e){return this.premultiply(id.makeRotation(-e)),this}translate(e,t){return this.premultiply(id.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const id=new gt;function gx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ju(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function TC(){const n=ju("canvas");return n.style.display="block",n}const N0={};function Fa(n){n in N0||(N0[n]=!0,console.warn(n))}function wC(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const U0=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F0=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AC(){const n={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===kt&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(o.r=Eo(o.r),o.g=Eo(o.g),o.b=Eo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Vr?Wu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Fa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Fa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ro]:{primaries:e,whitePoint:r,transfer:Wu,toXYZ:U0,fromXYZ:F0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:U0,fromXYZ:F0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),n}const Rt=AC();function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let to;class CC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{to===void 0&&(to=ju("canvas")),to.width=e.width,to.height=e.height;const o=to.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=to}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ju("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=lr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RC=0;class Pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RC++}),this.uuid=Ha(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(rd(o[u].image)):l.push(rd(o[u]))}else l=rd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function rd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?CC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bC=0;const sd=new ne;class qn extends Io{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,r=Ms,o=Ms,l=Bi,u=Ts,c=bi,d=fr,h=qn.DEFAULT_ANISOTROPY,m=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bC++}),this.uuid=Ha(),this.name="",this.source=new Pp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ox)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case Ms:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case Ms:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=ox;qn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,r=0,o=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],p=d[8],v=d[1],x=d[5],E=d[9],T=d[2],S=d[6],y=d[10];if(Math.abs(m-v)<.01&&Math.abs(p-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(p+T)<.1&&Math.abs(E+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,A=(x+1)/2,N=(y+1)/2,I=(m+v)/4,k=(p+T)/4,F=(E+S)/4;return R>A&&R>N?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=I/r,l=k/r):A>N?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=I/o,l=F/o):N<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),r=k/l,o=F/l),this.set(r,o,l,t),this}let D=Math.sqrt((S-E)*(S-E)+(p-T)*(p-T)+(v-m)*(v-m));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(p-T)/D,this.z=(v-m)/D,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PC extends Io{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new qn(o);this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Pp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends PC{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class vx extends qn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DC extends qn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ti):Ti.fromBufferAttribute(l,u),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ou.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ou.copy(r.boundingBox)),ou.applyMatrix4(e.matrixWorld),this.union(ou)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),au.subVectors(this.max,ma),no.subVectors(e.a,ma),io.subVectors(e.b,ma),ro.subVectors(e.c,ma),Ir.subVectors(io,no),Nr.subVectors(ro,io),cs.subVectors(no,ro);let t=[0,-Ir.z,Ir.y,0,-Nr.z,Nr.y,0,-cs.z,cs.y,Ir.z,0,-Ir.x,Nr.z,0,-Nr.x,cs.z,0,-cs.x,-Ir.y,Ir.x,0,-Nr.y,Nr.x,0,-cs.y,cs.x,0];return!od(t,no,io,ro,au)||(t=[1,0,0,0,1,0,0,0,1],!od(t,no,io,ro,au))?!1:(lu.crossVectors(Ir,Nr),t=[lu.x,lu.y,lu.z],od(t,no,io,ro,au))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tr=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Ti=new ne,ou=new Wa,no=new ne,io=new ne,ro=new ne,Ir=new ne,Nr=new ne,cs=new ne,ma=new ne,au=new ne,lu=new ne,fs=new ne;function od(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){fs.fromArray(n,l);const c=o.x*Math.abs(fs.x)+o.y*Math.abs(fs.y)+o.z*Math.abs(fs.z),d=e.dot(fs),h=t.dot(fs),m=r.dot(fs);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const LC=new Wa,ga=new ne,ad=new ne;class Dp{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):LC.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ga,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(ad)),this.expandByPoint(ga.copy(e.center).sub(ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const nr=new ne,ld=new ne,uu=new ne,Ur=new ne,ud=new ne,cu=new ne,cd=new ne;class IC{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ld.copy(e).add(t).multiplyScalar(.5),uu.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(ld);const l=e.distanceTo(t)*.5,u=-this.direction.dot(uu),c=Ur.dot(this.direction),d=-Ur.dot(uu),h=Ur.lengthSq(),m=Math.abs(1-u*u);let p,v,x,E;if(m>0)if(p=u*d-c,v=u*c-d,E=l*m,p>=0)if(v>=-E)if(v<=E){const T=1/m;p*=T,v*=T,x=p*(p+u*v+2*c)+v*(u*p+v+2*d)+h}else v=l,p=Math.max(0,-(u*v+c)),x=-p*p+v*(v+2*d)+h;else v=-l,p=Math.max(0,-(u*v+c)),x=-p*p+v*(v+2*d)+h;else v<=-E?(p=Math.max(0,-(-u*l+c)),v=p>0?-l:Math.min(Math.max(-l,-d),l),x=-p*p+v*(v+2*d)+h):v<=E?(p=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+h):(p=Math.max(0,-(u*l+c)),v=p>0?l:Math.min(Math.max(-l,-d),l),x=-p*p+v*(v+2*d)+h);else v=u>0?-l:l,p=Math.max(0,-(u*v+c)),x=-p*p+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,p),o&&o.copy(ld).addScaledVector(uu,v),x}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const r=nr.dot(this.direction),o=nr.dot(nr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,d;const h=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),p>=0?(c=(e.min.z-v.z)*p,d=(e.max.z-v.z)*p):(c=(e.max.z-v.z)*p,d=(e.min.z-v.z)*p),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,r,o,l){ud.subVectors(t,e),cu.subVectors(r,e),cd.crossVectors(ud,cu);let u=this.direction.dot(cd),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Ur.subVectors(this.origin,e);const d=c*this.direction.dot(cu.crossVectors(Ur,cu));if(d<0)return null;const h=c*this.direction.dot(ud.cross(Ur));if(h<0||d+h>u)return null;const m=-c*Ur.dot(cd);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,t,r,o,l,u,c,d,h,m,p,v,x,E,T,S){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h,m,p,v,x,E,T,S)}set(e,t,r,o,l,u,c,d,h,m,p,v,x,E,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=m,y[10]=p,y[14]=v,y[3]=x,y[7]=E,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/so.setFromMatrixColumn(e,0).length(),l=1/so.setFromMatrixColumn(e,1).length(),u=1/so.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),p=Math.sin(l);if(e.order==="XYZ"){const v=u*m,x=u*p,E=c*m,T=c*p;t[0]=d*m,t[4]=-d*p,t[8]=h,t[1]=x+E*h,t[5]=v-T*h,t[9]=-c*d,t[2]=T-v*h,t[6]=E+x*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,x=d*p,E=h*m,T=h*p;t[0]=v+T*c,t[4]=E*c-x,t[8]=u*h,t[1]=u*p,t[5]=u*m,t[9]=-c,t[2]=x*c-E,t[6]=T+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,x=d*p,E=h*m,T=h*p;t[0]=v-T*c,t[4]=-u*p,t[8]=E+x*c,t[1]=x+E*c,t[5]=u*m,t[9]=T-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,x=u*p,E=c*m,T=c*p;t[0]=d*m,t[4]=E*h-x,t[8]=v*h+T,t[1]=d*p,t[5]=T*h+v,t[9]=x*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,x=u*h,E=c*d,T=c*h;t[0]=d*m,t[4]=T-v*p,t[8]=E*p+x,t[1]=p,t[5]=u*m,t[9]=-c*m,t[2]=-h*m,t[6]=x*p+E,t[10]=v-T*p}else if(e.order==="XZY"){const v=u*d,x=u*h,E=c*d,T=c*h;t[0]=d*m,t[4]=-p,t[8]=h*m,t[1]=v*p+T,t[5]=u*m,t[9]=x*p-E,t[2]=E*p-x,t[6]=c*m,t[10]=T*p+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NC,e,UC)}lookAt(e,t,r){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Fr.crossVectors(r,Jn),Fr.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Fr.crossVectors(r,Jn)),Fr.normalize(),fu.crossVectors(Jn,Fr),o[0]=Fr.x,o[4]=fu.x,o[8]=Jn.x,o[1]=Fr.y,o[5]=fu.y,o[9]=Jn.y,o[2]=Fr.z,o[6]=fu.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],m=r[1],p=r[5],v=r[9],x=r[13],E=r[2],T=r[6],S=r[10],y=r[14],D=r[3],R=r[7],A=r[11],N=r[15],I=o[0],k=o[4],F=o[8],P=o[12],C=o[1],V=o[5],q=o[9],ie=o[13],ue=o[2],de=o[6],K=o[10],se=o[14],B=o[3],ee=o[7],$=o[11],O=o[15];return l[0]=u*I+c*C+d*ue+h*B,l[4]=u*k+c*V+d*de+h*ee,l[8]=u*F+c*q+d*K+h*$,l[12]=u*P+c*ie+d*se+h*O,l[1]=m*I+p*C+v*ue+x*B,l[5]=m*k+p*V+v*de+x*ee,l[9]=m*F+p*q+v*K+x*$,l[13]=m*P+p*ie+v*se+x*O,l[2]=E*I+T*C+S*ue+y*B,l[6]=E*k+T*V+S*de+y*ee,l[10]=E*F+T*q+S*K+y*$,l[14]=E*P+T*ie+S*se+y*O,l[3]=D*I+R*C+A*ue+N*B,l[7]=D*k+R*V+A*de+N*ee,l[11]=D*F+R*q+A*K+N*$,l[15]=D*P+R*ie+A*se+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],m=e[2],p=e[6],v=e[10],x=e[14],E=e[3],T=e[7],S=e[11],y=e[15];return E*(+l*d*p-o*h*p-l*c*v+r*h*v+o*c*x-r*d*x)+T*(+t*d*x-t*h*v+l*u*v-o*u*x+o*h*m-l*d*m)+S*(+t*h*p-t*c*x-l*u*p+r*u*x+l*c*m-r*h*m)+y*(-o*c*m-t*d*p+t*c*v+o*u*p-r*u*v+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],p=e[9],v=e[10],x=e[11],E=e[12],T=e[13],S=e[14],y=e[15],D=p*S*h-T*v*h+T*d*x-c*S*x-p*d*y+c*v*y,R=E*v*h-m*S*h-E*d*x+u*S*x+m*d*y-u*v*y,A=m*T*h-E*p*h+E*c*x-u*T*x-m*c*y+u*p*y,N=E*p*d-m*T*d-E*c*v+u*T*v+m*c*S-u*p*S,I=t*D+r*R+o*A+l*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/I;return e[0]=D*k,e[1]=(T*v*l-p*S*l-T*o*x+r*S*x+p*o*y-r*v*y)*k,e[2]=(c*S*l-T*d*l+T*o*h-r*S*h-c*o*y+r*d*y)*k,e[3]=(p*d*l-c*v*l-p*o*h+r*v*h+c*o*x-r*d*x)*k,e[4]=R*k,e[5]=(m*S*l-E*v*l+E*o*x-t*S*x-m*o*y+t*v*y)*k,e[6]=(E*d*l-u*S*l-E*o*h+t*S*h+u*o*y-t*d*y)*k,e[7]=(u*v*l-m*d*l+m*o*h-t*v*h-u*o*x+t*d*x)*k,e[8]=A*k,e[9]=(E*p*l-m*T*l-E*r*x+t*T*x+m*r*y-t*p*y)*k,e[10]=(u*T*l-E*c*l+E*r*h-t*T*h-u*r*y+t*c*y)*k,e[11]=(m*c*l-u*p*l-m*r*h+t*p*h+u*r*x-t*c*x)*k,e[12]=N*k,e[13]=(m*T*o-E*p*o+E*r*v-t*T*v-m*r*S+t*p*S)*k,e[14]=(E*c*o-u*T*o-E*r*d+t*T*d+u*r*S-t*c*S)*k,e[15]=(u*p*o-m*c*o+m*r*d-t*p*d-u*r*v+t*c*v)*k,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,d=e.z,h=l*u,m=l*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,m*c+r,m*d-o*u,0,h*d-o*c,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,m=u+u,p=c+c,v=l*h,x=l*m,E=l*p,T=u*m,S=u*p,y=c*p,D=d*h,R=d*m,A=d*p,N=r.x,I=r.y,k=r.z;return o[0]=(1-(T+y))*N,o[1]=(x+A)*N,o[2]=(E-R)*N,o[3]=0,o[4]=(x-A)*I,o[5]=(1-(v+y))*I,o[6]=(S+D)*I,o[7]=0,o[8]=(E+R)*k,o[9]=(S-D)*k,o[10]=(1-(v+T))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=so.set(o[0],o[1],o[2]).length();const u=so.set(o[4],o[5],o[6]).length(),c=so.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],wi.copy(this);const h=1/l,m=1/u,p=1/c;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=m,wi.elements[5]*=m,wi.elements[6]*=m,wi.elements[8]*=p,wi.elements[9]*=p,wi.elements[10]*=p,t.setFromRotationMatrix(wi),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=zi,d=!1){const h=this.elements,m=2*l/(t-e),p=2*l/(r-o),v=(t+e)/(t-e),x=(r+o)/(r-o);let E,T;if(d)E=l/(u-l),T=u*l/(u-l);else if(c===zi)E=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(c===Xu)E=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=p,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=zi,d=!1){const h=this.elements,m=2/(t-e),p=2/(r-o),v=-(t+e)/(t-e),x=-(r+o)/(r-o);let E,T;if(d)E=1/(u-l),T=u/(u-l);else if(c===zi)E=-2/(u-l),T=-(u+l)/(u-l);else if(c===Xu)E=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=p,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const so=new ne,wi=new fn,NC=new ne(0,0,0),UC=new ne(1,1,1),Fr=new ne,fu=new ne,Jn=new ne,O0=new fn,k0=new Ga;class dr{constructor(e=0,t=0,r=0,o=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],m=o[9],p=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-p,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-p,l)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return O0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return k0.setFromEuler(this),this.setFromQuaternion(k0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class _x{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FC=0;const B0=new ne,oo=new Ga,ir=new fn,du=new ne,va=new ne,OC=new ne,kC=new Ga,z0=new ne(1,0,0),V0=new ne(0,1,0),H0=new ne(0,0,1),G0={type:"added"},BC={type:"removed"},ao={type:"childadded",child:null},fd={type:"childremoved",child:null};class ti extends Io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FC++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new ne,t=new dr,r=new Ga,o=new ne(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new gt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _x,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oo.setFromAxisAngle(e,t),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,t){return oo.setFromAxisAngle(e,t),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(z0,e)}rotateY(e){return this.rotateOnAxis(V0,e)}rotateZ(e){return this.rotateOnAxis(H0,e)}translateOnAxis(e,t){return B0.copy(e).applyQuaternion(this.quaternion),this.position.add(B0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(z0,e)}translateY(e){return this.translateOnAxis(V0,e)}translateZ(e){return this.translateOnAxis(H0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?du.copy(e):du.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(va,du,this.up):ir.lookAt(du,va,this.up),this.quaternion.setFromRotationMatrix(ir),o&&(ir.extractRotation(o.matrixWorld),oo.setFromRotationMatrix(ir),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G0),ao.child=e,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(BC),fd.child=e,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G0),ao.child=e,this.dispatchEvent(ao),ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,OC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,kC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>({...c})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const p=d[h];l(e.shapes,p)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),p=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),p.length>0&&(r.shapes=p),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ti.DEFAULT_UP=new ne(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new ne,rr=new ne,dd=new ne,sr=new ne,lo=new ne,uo=new ne,W0=new ne,hd=new ne,pd=new ne,md=new ne,gd=new rn,vd=new rn,_d=new rn;class Ri{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ai.subVectors(e,t),o.cross(Ai);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ai.subVectors(o,t),rr.subVectors(r,t),dd.subVectors(e,t);const u=Ai.dot(Ai),c=Ai.dot(rr),d=Ai.dot(dd),h=rr.dot(rr),m=rr.dot(dd),p=u*h-c*c;if(p===0)return l.set(0,0,0),null;const v=1/p,x=(h*d-c*m)*v,E=(u*m-c*d)*v;return l.set(1-x-E,E,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,r,o,l,u,c,d){return this.getBarycoord(e,t,r,o,sr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,sr.x),d.addScaledVector(u,sr.y),d.addScaledVector(c,sr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return gd.setScalar(0),vd.setScalar(0),_d.setScalar(0),gd.fromBufferAttribute(e,t),vd.fromBufferAttribute(e,r),_d.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(gd,l.x),u.addScaledVector(vd,l.y),u.addScaledVector(_d,l.z),u}static isFrontFacing(e,t,r,o){return Ai.subVectors(r,t),rr.subVectors(e,t),Ai.cross(rr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ai.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ri.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;lo.subVectors(o,r),uo.subVectors(l,r),hd.subVectors(e,r);const d=lo.dot(hd),h=uo.dot(hd);if(d<=0&&h<=0)return t.copy(r);pd.subVectors(e,o);const m=lo.dot(pd),p=uo.dot(pd);if(m>=0&&p<=m)return t.copy(o);const v=d*p-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(lo,u);md.subVectors(e,l);const x=lo.dot(md),E=uo.dot(md);if(E>=0&&x<=E)return t.copy(l);const T=x*h-d*E;if(T<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(r).addScaledVector(uo,c);const S=m*E-x*p;if(S<=0&&p-m>=0&&x-E>=0)return W0.subVectors(l,o),c=(p-m)/(p-m+(x-E)),t.copy(o).addScaledVector(W0,c);const y=1/(S+T+v);return u=T*y,c=v*y,t.copy(r).addScaledVector(lo,u).addScaledVector(uo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},hu={h:0,s:0,l:0};function yd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ft{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Rt.workingColorSpace){if(e=MC(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=yd(u,l,e+1/3),this.g=yd(u,l,e),this.b=yd(u,l,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,t=fi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const r=yx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Rt.workingToColorSpace(bn.copy(this),e),Math.round(Mt(bn.r*255,0,255))*65536+Math.round(Mt(bn.g*255,0,255))*256+Math.round(Mt(bn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(bn.copy(this),t);const r=bn.r,o=bn.g,l=bn.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let d,h;const m=(c+u)/2;if(c===u)d=0,h=0;else{const p=u-c;switch(h=m<=.5?p/(u+c):p/(2-u-c),u){case r:d=(o-l)/p+(o<l?6:0);break;case o:d=(l-r)/p+2;break;case l:d=(r-o)/p+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=fi){Rt.workingToColorSpace(bn.copy(this),e);const t=bn.r,r=bn.g,o=bn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(hu);const r=td(Or.h,hu.h,t),o=td(Or.s,hu.s,t),l=td(Or.l,hu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Ft;Ft.NAMES=yx;let zC=0;class Zu extends Io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zC++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=Cs,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==jr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==eh&&(r.blendSrc=this.blendSrc),this.blendDst!==th&&(r.blendDst=this.blendDst),this.blendEquation!==ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==P0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xx extends Zu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new ne,pu=new bt;let VC=0;class Wi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=D0,this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)pu.fromBufferAttribute(this,t),pu.applyMatrix3(e),this.setXY(t,pu.x,pu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=pa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array),l=Wn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==D0&&(e.usage=this.usage),e}}class Sx extends Wi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ex extends Wi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Xi extends Wi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let HC=0;const ui=new fn,xd=new ti,co=new ne,ei=new Wa,_a=new Wa,vn=new ne;class qr extends Io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HC++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gx(e)?Ex:Sx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,r){return ui.makeTranslation(e,t,r),this.applyMatrix4(ui),this}scale(e,t,r){return ui.makeScale(e,t,r),this.applyMatrix4(ui),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xi(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];_a.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(ei.min,_a.min),ei.expandByPoint(vn),vn.addVectors(ei.max,_a.max),ei.expandByPoint(vn)):(ei.expandByPoint(_a.min),ei.expandByPoint(_a.max))}ei.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)vn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(vn));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)vn.fromBufferAttribute(c,h),d&&(co.fromBufferAttribute(e,h),vn.add(co)),o=Math.max(o,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let F=0;F<r.count;F++)c[F]=new ne,d[F]=new ne;const h=new ne,m=new ne,p=new ne,v=new bt,x=new bt,E=new bt,T=new ne,S=new ne;function y(F,P,C){h.fromBufferAttribute(r,F),m.fromBufferAttribute(r,P),p.fromBufferAttribute(r,C),v.fromBufferAttribute(l,F),x.fromBufferAttribute(l,P),E.fromBufferAttribute(l,C),m.sub(h),p.sub(h),x.sub(v),E.sub(v);const V=1/(x.x*E.y-E.x*x.y);isFinite(V)&&(T.copy(m).multiplyScalar(E.y).addScaledVector(p,-x.y).multiplyScalar(V),S.copy(p).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(V),c[F].add(T),c[P].add(T),c[C].add(T),d[F].add(S),d[P].add(S),d[C].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let F=0,P=D.length;F<P;++F){const C=D[F],V=C.start,q=C.count;for(let ie=V,ue=V+q;ie<ue;ie+=3)y(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const R=new ne,A=new ne,N=new ne,I=new ne;function k(F){N.fromBufferAttribute(o,F),I.copy(N);const P=c[F];R.copy(P),R.sub(N.multiplyScalar(N.dot(P))).normalize(),A.crossVectors(I,P);const V=A.dot(d[F])<0?-1:1;u.setXYZW(F,R.x,R.y,R.z,V)}for(let F=0,P=D.length;F<P;++F){const C=D[F],V=C.start,q=C.count;for(let ie=V,ue=V+q;ie<ue;ie+=3)k(e.getX(ie+0)),k(e.getX(ie+1)),k(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new ne,l=new ne,u=new ne,c=new ne,d=new ne,h=new ne,m=new ne,p=new ne;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),m.subVectors(u,l),p.subVectors(o,l),m.cross(p),c.fromBufferAttribute(r,E),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),c.add(m),d.add(m),h.add(m),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),p.subVectors(o,l),m.cross(p),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,p=c.normalized,v=new h.constructor(d.length*m);let x=0,E=0;for(let T=0,S=d.length;T<S;T++){c.isInterleavedBufferAttribute?x=d[T]*c.data.stride+c.offset:x=d[T]*m;for(let y=0;y<m;y++)v[E++]=h[x++]}return new Wi(v,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qr,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let m=0,p=h.length;m<p;m++){const v=h[m],x=e(v,r);d.push(x)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let p=0,v=h.length;p<v;p++){const x=h[p];m.push(x.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],p=l[h];for(let v=0,x=p.length;v<x;v++)m.push(p[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const X0=new fn,ds=new IC,mu=new Dp,j0=new ne,gu=new ne,vu=new ne,_u=new ne,Sd=new ne,yu=new ne,Y0=new ne,xu=new ne;class Vi extends ti{constructor(e=new qr,t=new xx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){yu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=c[d],p=l[d];m!==0&&(Sd.fromBufferAttribute(p,e),u?yu.addScaledVector(Sd,m):yu.addScaledVector(Sd.sub(t),m))}t.add(yu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mu.copy(r.boundingSphere),mu.applyMatrix4(l),ds.copy(e.ray).recast(e.near),!(mu.containsPoint(ds.origin)===!1&&(ds.intersectSphere(mu,j0)===null||ds.origin.distanceToSquared(j0)>(e.far-e.near)**2))&&(X0.copy(l).invert(),ds.copy(e.ray).applyMatrix4(X0),!(r.boundingBox!==null&&ds.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,p=l.attributes.normal,v=l.groups,x=l.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],y=u[S.materialIndex],D=Math.max(S.start,x.start),R=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let A=D,N=R;A<N;A+=3){const I=c.getX(A),k=c.getX(A+1),F=c.getX(A+2);o=Su(this,y,e,r,h,m,p,I,k,F),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(c.count,x.start+x.count);for(let S=E,y=T;S<y;S+=3){const D=c.getX(S),R=c.getX(S+1),A=c.getX(S+2);o=Su(this,u,e,r,h,m,p,D,R,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],y=u[S.materialIndex],D=Math.max(S.start,x.start),R=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let A=D,N=R;A<N;A+=3){const I=A,k=A+1,F=A+2;o=Su(this,y,e,r,h,m,p,I,k,F),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let S=E,y=T;S<y;S+=3){const D=S,R=S+1,A=S+2;o=Su(this,u,e,r,h,m,p,D,R,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function GC(n,e,t,r,o,l,u,c){let d;if(e.side===Yn?d=r.intersectTriangle(u,l,o,!0,c):d=r.intersectTriangle(o,l,u,e.side===jr,c),d===null)return null;xu.copy(c),xu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(xu);return h<t.near||h>t.far?null:{distance:h,point:xu.clone(),object:n}}function Su(n,e,t,r,o,l,u,c,d,h){n.getVertexPosition(c,gu),n.getVertexPosition(d,vu),n.getVertexPosition(h,_u);const m=GC(n,e,t,r,gu,vu,_u,Y0);if(m){const p=new ne;Ri.getBarycoord(Y0,gu,vu,_u,p),o&&(m.uv=Ri.getInterpolatedAttribute(o,c,d,h,p,new bt)),l&&(m.uv1=Ri.getInterpolatedAttribute(l,c,d,h,p,new bt)),u&&(m.normal=Ri.getInterpolatedAttribute(u,c,d,h,p,new ne),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:d,c:h,normal:new ne,materialIndex:0};Ri.getNormal(gu,vu,_u,v.normal),m.face=v,m.barycoord=p}return m}class Xa extends qr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],p=[];let v=0,x=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Xi(h,3)),this.setAttribute("normal",new Xi(m,3)),this.setAttribute("uv",new Xi(p,2));function E(T,S,y,D,R,A,N,I,k,F,P){const C=A/k,V=N/F,q=A/2,ie=N/2,ue=I/2,de=k+1,K=F+1;let se=0,B=0;const ee=new ne;for(let $=0;$<K;$++){const O=$*V-ie;for(let re=0;re<de;re++){const ge=re*C-q;ee[T]=ge*D,ee[S]=O*R,ee[y]=ue,h.push(ee.x,ee.y,ee.z),ee[T]=0,ee[S]=0,ee[y]=I>0?1:-1,m.push(ee.x,ee.y,ee.z),p.push(re/k),p.push(1-$/F),se+=1}}for(let $=0;$<F;$++)for(let O=0;O<k;O++){const re=v+O+de*$,ge=v+O+de*($+1),Ce=v+(O+1)+de*($+1),be=v+(O+1)+de*$;d.push(re,ge,be),d.push(ge,Ce,be),B+=6}c.addGroup(x,B,P),x+=B,v+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const r=bo(n[t]);for(const o in r)e[o]=r[o]}return e}function WC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const XC={clone:bo,merge:Fn};var jC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Zu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jC,this.fragmentShader=YC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=WC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Tx extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kr=new ne,q0=new bt,$0=new bt;class di extends Tx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,t){return this.getViewBounds(e,q0,$0),t.subVectors($0,q0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ed*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fo=-90,ho=1;class qC extends ti{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(fo,ho,e,t);o.layers=this.layers,this.add(o);const l=new di(fo,ho,e,t);l.layers=this.layers,this.add(l);const u=new di(fo,ho,e,t);u.layers=this.layers,this.add(u);const c=new di(fo,ho,e,t);c.layers=this.layers,this.add(c);const d=new di(fo,ho,e,t);d.layers=this.layers,this.add(d);const h=new di(fo,ho,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Xu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,m]=this.children,p=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(p,v,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class wx extends qn{constructor(e=[],t=Ao,r,o,l,u,c,d,h,m){super(e,t,r,o,l,u,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $C extends bs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new wx(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Xa(5,5,5),l=new hr({name:"CubemapFromEquirect",uniforms:bo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:Hr});l.uniforms.tEquirect.value=t;const u=new Vi(o,l),c=t.minFilter;return t.minFilter===Ts&&(t.minFilter=Bi),new qC(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class Eu extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KC={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Eu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Eu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Eu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,r),y=this._getHandJoint(h,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],v=m.position.distanceTo(p.position),x=.02,E=.005;h.inputState.pinching&&v>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(KC)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Eu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class ZC extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Md=new ne,QC=new ne,JC=new gt;class vs{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Md.subVectors(r,t).cross(QC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Md),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||JC.getNormalMatrix(e),o=this.coplanarPoint(Md).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Dp,eR=new bt(.5,.5),Mu=new ne;class Ax{constructor(e=new vs,t=new vs,r=new vs,o=new vs,l=new vs,u=new vs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=zi,r=!1){const o=this.planes,l=e.elements,u=l[0],c=l[1],d=l[2],h=l[3],m=l[4],p=l[5],v=l[6],x=l[7],E=l[8],T=l[9],S=l[10],y=l[11],D=l[12],R=l[13],A=l[14],N=l[15];if(o[0].setComponents(h-u,x-m,y-E,N-D).normalize(),o[1].setComponents(h+u,x+m,y+E,N+D).normalize(),o[2].setComponents(h+c,x+p,y+T,N+R).normalize(),o[3].setComponents(h-c,x-p,y-T,N-R).normalize(),r)o[4].setComponents(d,v,S,A).normalize(),o[5].setComponents(h-d,x-v,y-S,N-A).normalize();else if(o[4].setComponents(h-d,x-v,y-S,N-A).normalize(),t===zi)o[5].setComponents(h+d,x+v,y+S,N+A).normalize();else if(t===Xu)o[5].setComponents(d,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=eR.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Mu.x=o.normal.x>0?e.max.x:e.min.x,Mu.y=o.normal.y>0?e.max.y:e.min.y,Mu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Mu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cx extends qn{constructor(e,t,r=Rs,o,l,u,c=Pi,d=Pi,h,m=Na,p=1){if(m!==Na&&m!==Ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:p};super(v,o,l,u,c,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rx extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lp extends qr{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];c(o),h(r),m(),this.setAttribute("position",new Xi(l,3)),this.setAttribute("normal",new Xi(l.slice(),3)),this.setAttribute("uv",new Xi(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function c(D){const R=new ne,A=new ne,N=new ne;for(let I=0;I<t.length;I+=3)x(t[I+0],R),x(t[I+1],A),x(t[I+2],N),d(R,A,N,D)}function d(D,R,A,N){const I=N+1,k=[];for(let F=0;F<=I;F++){k[F]=[];const P=D.clone().lerp(A,F/I),C=R.clone().lerp(A,F/I),V=I-F;for(let q=0;q<=V;q++)q===0&&F===I?k[F][q]=P:k[F][q]=P.clone().lerp(C,q/V)}for(let F=0;F<I;F++)for(let P=0;P<2*(I-F)-1;P++){const C=Math.floor(P/2);P%2===0?(v(k[F][C+1]),v(k[F+1][C]),v(k[F][C])):(v(k[F][C+1]),v(k[F+1][C+1]),v(k[F+1][C]))}}function h(D){const R=new ne;for(let A=0;A<l.length;A+=3)R.x=l[A+0],R.y=l[A+1],R.z=l[A+2],R.normalize().multiplyScalar(D),l[A+0]=R.x,l[A+1]=R.y,l[A+2]=R.z}function m(){const D=new ne;for(let R=0;R<l.length;R+=3){D.x=l[R+0],D.y=l[R+1],D.z=l[R+2];const A=S(D)/2/Math.PI+.5,N=y(D)/Math.PI+.5;u.push(A,1-N)}E(),p()}function p(){for(let D=0;D<u.length;D+=6){const R=u[D+0],A=u[D+2],N=u[D+4],I=Math.max(R,A,N),k=Math.min(R,A,N);I>.9&&k<.1&&(R<.2&&(u[D+0]+=1),A<.2&&(u[D+2]+=1),N<.2&&(u[D+4]+=1))}}function v(D){l.push(D.x,D.y,D.z)}function x(D,R){const A=D*3;R.x=e[A+0],R.y=e[A+1],R.z=e[A+2]}function E(){const D=new ne,R=new ne,A=new ne,N=new ne,I=new bt,k=new bt,F=new bt;for(let P=0,C=0;P<l.length;P+=9,C+=6){D.set(l[P+0],l[P+1],l[P+2]),R.set(l[P+3],l[P+4],l[P+5]),A.set(l[P+6],l[P+7],l[P+8]),I.set(u[C+0],u[C+1]),k.set(u[C+2],u[C+3]),F.set(u[C+4],u[C+5]),N.copy(D).add(R).add(A).divideScalar(3);const V=S(N);T(I,C+0,D,V),T(k,C+2,R,V),T(F,C+4,A,V)}}function T(D,R,A,N){N<0&&D.x===1&&(u[R]=D.x-1),A.x===0&&A.z===0&&(u[R]=N/2/Math.PI+.5)}function S(D){return Math.atan2(D.z,-D.x)}function y(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lp(e.vertices,e.indices,e.radius,e.details)}}class Ip extends Lp{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ip(e.radius,e.detail)}}class Qu extends qr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,m=d+1,p=e/c,v=t/d,x=[],E=[],T=[],S=[];for(let y=0;y<m;y++){const D=y*v-u;for(let R=0;R<h;R++){const A=R*p-l;E.push(A,-D,0),T.push(0,0,1),S.push(R/c),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let D=0;D<c;D++){const R=D+h*y,A=D+h*(y+1),N=D+1+h*(y+1),I=D+1+h*y;x.push(R,A,I),x.push(A,N,I)}this.setIndex(x),this.setAttribute("position",new Xi(E,3)),this.setAttribute("normal",new Xi(T,3)),this.setAttribute("uv",new Xi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.width,e.height,e.widthSegments,e.heightSegments)}}class tR extends Zu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nR extends Zu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class iR extends Tx{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rR extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function K0(n,e,t,r){const o=oR(r);switch(t){case fx:return n*e;case hx:return n*e/o.components*o.byteLength;case Cp:return n*e/o.components*o.byteLength;case px:return n*e*2/o.components*o.byteLength;case Rp:return n*e*2/o.components*o.byteLength;case dx:return n*e*3/o.components*o.byteLength;case bi:return n*e*4/o.components*o.byteLength;case bp:return n*e*4/o.components*o.byteLength;case Iu:case Nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uu:case Fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ph:case gh:return Math.max(n,16)*Math.max(e,8)/4;case hh:case mh:return Math.max(n,8)*Math.max(e,8)/2;case vh:case _h:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Nh:case Uh:case Fh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Oh:case kh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bh:case zh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oR(n){switch(n){case fr:case ax:return{byteLength:1,components:1};case La:case lx:case Va:return{byteLength:2,components:1};case wp:case Ap:return{byteLength:2,components:4};case Rs:case Tp:case ar:return{byteLength:4,components:1};case ux:case cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bx(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function aR(n){const e=new WeakMap;function t(c,d){const h=c.array,m=c.usage,p=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,m),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,d,h){const m=d.array,p=d.updateRanges;if(n.bindBuffer(h,c),p.length===0)n.bufferSubData(h,0,m);else{p.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<p.length;x++){const E=p[v],T=p[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,p[v]=T)}p.length=v+1;for(let x=0,E=p.length;x<E;x++){const T=p[x];n.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:l,update:u}}var lR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uR=`#ifdef USE_ALPHAHASH
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
#endif`,cR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pR=`#ifdef USE_AOMAP
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
#endif`,mR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gR=`#ifdef USE_BATCHING
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
#endif`,vR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_R=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SR=`#ifdef USE_IRIDESCENCE
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
#endif`,ER=`#ifdef USE_BUMPMAP
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
#endif`,MR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,DR=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,LR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IR=`vec3 transformedNormal = objectNormal;
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
#endif`,NR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kR="gl_FragColor = linearToOutputTexel( gl_FragColor );",BR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zR=`#ifdef USE_ENVMAP
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
#endif`,VR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HR=`#ifdef USE_ENVMAP
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
#endif`,GR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WR=`#ifdef USE_ENVMAP
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
#endif`,XR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$R=`#ifdef USE_GRADIENTMAP
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
}`,KR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JR=`uniform bool receiveShadow;
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
#endif`,eb=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sb=`PhysicalMaterial material;
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
#endif`,ob=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,ab=`
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
#endif`,lb=`#if defined( RE_IndirectDiffuse )
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
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vb=`#if defined( USE_POINTS_UV )
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
#endif`,_b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
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
#endif`,Tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pb=`#ifdef USE_NORMALMAP
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
#endif`,Db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jb=`float getShadowMask() {
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
}`,Yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qb=`#ifdef USE_SKINNING
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
#endif`,$b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kb=`#ifdef USE_SKINNING
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
#endif`,Zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tP=`#ifdef USE_TRANSMISSION
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
#endif`,nP=`#ifdef USE_TRANSMISSION
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
#endif`,iP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lP=`uniform sampler2D t2D;
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
}`,uP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hP=`#include <common>
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
}`,pP=`#if DEPTH_PACKING == 3200
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
}`,mP=`#define DISTANCE
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
}`,gP=`#define DISTANCE
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
}`,vP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_P=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yP=`uniform float scale;
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
}`,xP=`uniform vec3 diffuse;
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
}`,SP=`#include <common>
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
}`,EP=`uniform vec3 diffuse;
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
}`,MP=`#define LAMBERT
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
}`,TP=`#define LAMBERT
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
}`,wP=`#define MATCAP
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
}`,AP=`#define MATCAP
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
}`,CP=`#define NORMAL
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
}`,RP=`#define NORMAL
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
}`,bP=`#define PHONG
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
}`,PP=`#define PHONG
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
}`,DP=`#define STANDARD
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
}`,LP=`#define STANDARD
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
}`,IP=`#define TOON
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
}`,NP=`#define TOON
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
}`,UP=`uniform float size;
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
}`,FP=`uniform vec3 diffuse;
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
}`,OP=`#include <common>
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
}`,kP=`uniform vec3 color;
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
}`,BP=`uniform float rotation;
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
}`,zP=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:lR,alphahash_pars_fragment:uR,alphamap_fragment:cR,alphamap_pars_fragment:fR,alphatest_fragment:dR,alphatest_pars_fragment:hR,aomap_fragment:pR,aomap_pars_fragment:mR,batching_pars_vertex:gR,batching_vertex:vR,begin_vertex:_R,beginnormal_vertex:yR,bsdfs:xR,iridescence_fragment:SR,bumpmap_pars_fragment:ER,clipping_planes_fragment:MR,clipping_planes_pars_fragment:TR,clipping_planes_pars_vertex:wR,clipping_planes_vertex:AR,color_fragment:CR,color_pars_fragment:RR,color_pars_vertex:bR,color_vertex:PR,common:DR,cube_uv_reflection_fragment:LR,defaultnormal_vertex:IR,displacementmap_pars_vertex:NR,displacementmap_vertex:UR,emissivemap_fragment:FR,emissivemap_pars_fragment:OR,colorspace_fragment:kR,colorspace_pars_fragment:BR,envmap_fragment:zR,envmap_common_pars_fragment:VR,envmap_pars_fragment:HR,envmap_pars_vertex:GR,envmap_physical_pars_fragment:eb,envmap_vertex:WR,fog_vertex:XR,fog_pars_vertex:jR,fog_fragment:YR,fog_pars_fragment:qR,gradientmap_pars_fragment:$R,lightmap_pars_fragment:KR,lights_lambert_fragment:ZR,lights_lambert_pars_fragment:QR,lights_pars_begin:JR,lights_toon_fragment:tb,lights_toon_pars_fragment:nb,lights_phong_fragment:ib,lights_phong_pars_fragment:rb,lights_physical_fragment:sb,lights_physical_pars_fragment:ob,lights_fragment_begin:ab,lights_fragment_maps:lb,lights_fragment_end:ub,logdepthbuf_fragment:cb,logdepthbuf_pars_fragment:fb,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:hb,map_fragment:pb,map_pars_fragment:mb,map_particle_fragment:gb,map_particle_pars_fragment:vb,metalnessmap_fragment:_b,metalnessmap_pars_fragment:yb,morphinstance_vertex:xb,morphcolor_vertex:Sb,morphnormal_vertex:Eb,morphtarget_pars_vertex:Mb,morphtarget_vertex:Tb,normal_fragment_begin:wb,normal_fragment_maps:Ab,normal_pars_fragment:Cb,normal_pars_vertex:Rb,normal_vertex:bb,normalmap_pars_fragment:Pb,clearcoat_normal_fragment_begin:Db,clearcoat_normal_fragment_maps:Lb,clearcoat_pars_fragment:Ib,iridescence_pars_fragment:Nb,opaque_fragment:Ub,packing:Fb,premultiplied_alpha_fragment:Ob,project_vertex:kb,dithering_fragment:Bb,dithering_pars_fragment:zb,roughnessmap_fragment:Vb,roughnessmap_pars_fragment:Hb,shadowmap_pars_fragment:Gb,shadowmap_pars_vertex:Wb,shadowmap_vertex:Xb,shadowmask_pars_fragment:jb,skinbase_vertex:Yb,skinning_pars_vertex:qb,skinning_vertex:$b,skinnormal_vertex:Kb,specularmap_fragment:Zb,specularmap_pars_fragment:Qb,tonemapping_fragment:Jb,tonemapping_pars_fragment:eP,transmission_fragment:tP,transmission_pars_fragment:nP,uv_pars_fragment:iP,uv_pars_vertex:rP,uv_vertex:sP,worldpos_vertex:oP,background_vert:aP,background_frag:lP,backgroundCube_vert:uP,backgroundCube_frag:cP,cube_vert:fP,cube_frag:dP,depth_vert:hP,depth_frag:pP,distanceRGBA_vert:mP,distanceRGBA_frag:gP,equirect_vert:vP,equirect_frag:_P,linedashed_vert:yP,linedashed_frag:xP,meshbasic_vert:SP,meshbasic_frag:EP,meshlambert_vert:MP,meshlambert_frag:TP,meshmatcap_vert:wP,meshmatcap_frag:AP,meshnormal_vert:CP,meshnormal_frag:RP,meshphong_vert:bP,meshphong_frag:PP,meshphysical_vert:DP,meshphysical_frag:LP,meshtoon_vert:IP,meshtoon_frag:NP,points_vert:UP,points_frag:FP,shadow_vert:OP,shadow_frag:kP,sprite_vert:BP,sprite_frag:zP},Oe={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Oi={basic:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ft(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Fn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Fn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ft(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Fn([Oe.points,Oe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Fn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Fn([Oe.common,Oe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Fn([Oe.sprite,Oe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Fn([Oe.common,Oe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Fn([Oe.lights,Oe.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Oi.physical={uniforms:Fn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Tu={r:0,b:0,g:0},ps=new dr,VP=new fn;function HP(n,e,t,r,o,l,u){const c=new Ft(0);let d=l===!0?0:1,h,m,p=null,v=0,x=null;function E(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?t:e).get(A)),A}function T(R){let A=!1;const N=E(R);N===null?y(c,d):N&&N.isColor&&(y(N,1),A=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(R,A){const N=E(A);N&&(N.isCubeTexture||N.mapping===Ku)?(m===void 0&&(m=new Vi(new Xa(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:bo(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,k,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),ps.copy(A.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(VP.makeRotationFromEuler(ps)),m.material.toneMapped=Rt.getTransfer(N.colorSpace)!==kt,(p!==N||v!==N.version||x!==n.toneMapping)&&(m.material.needsUpdate=!0,p=N,v=N.version,x=n.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Vi(new Qu(2,2),new hr({name:"BackgroundMaterial",uniforms:bo(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(N.colorSpace)!==kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(p!==N||v!==N.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,p=N,v=N.version,x=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function y(R,A){R.getRGB(Tu,Mx(n)),r.buffers.color.setClear(Tu.r,Tu.g,Tu.b,A,u)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,A=1){c.set(R),d=A,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,y(c,d)},render:T,addToRenderList:S,dispose:D}}function GP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function c(C,V,q,ie,ue){let de=!1;const K=p(ie,q,V);l!==K&&(l=K,h(l.object)),de=x(C,ie,q,ue),de&&E(C,ie,q,ue),ue!==null&&e.update(ue,n.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,A(C,V,q,ie),ue!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return n.createVertexArray()}function h(C){return n.bindVertexArray(C)}function m(C){return n.deleteVertexArray(C)}function p(C,V,q){const ie=q.wireframe===!0;let ue=r[C.id];ue===void 0&&(ue={},r[C.id]=ue);let de=ue[V.id];de===void 0&&(de={},ue[V.id]=de);let K=de[ie];return K===void 0&&(K=v(d()),de[ie]=K),K}function v(C){const V=[],q=[],ie=[];for(let ue=0;ue<t;ue++)V[ue]=0,q[ue]=0,ie[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:ie,object:C,attributes:{},index:null}}function x(C,V,q,ie){const ue=l.attributes,de=V.attributes;let K=0;const se=q.getAttributes();for(const B in se)if(se[B].location>=0){const $=ue[B];let O=de[B];if(O===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),$===void 0||$.attribute!==O||O&&$.data!==O.data)return!0;K++}return l.attributesNum!==K||l.index!==ie}function E(C,V,q,ie){const ue={},de=V.attributes;let K=0;const se=q.getAttributes();for(const B in se)if(se[B].location>=0){let $=de[B];$===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&($=C.instanceColor));const O={};O.attribute=$,$&&$.data&&(O.data=$.data),ue[B]=O,K++}l.attributes=ue,l.attributesNum=K,l.index=ie}function T(){const C=l.newAttributes;for(let V=0,q=C.length;V<q;V++)C[V]=0}function S(C){y(C,0)}function y(C,V){const q=l.newAttributes,ie=l.enabledAttributes,ue=l.attributeDivisors;q[C]=1,ie[C]===0&&(n.enableVertexAttribArray(C),ie[C]=1),ue[C]!==V&&(n.vertexAttribDivisor(C,V),ue[C]=V)}function D(){const C=l.newAttributes,V=l.enabledAttributes;for(let q=0,ie=V.length;q<ie;q++)V[q]!==C[q]&&(n.disableVertexAttribArray(q),V[q]=0)}function R(C,V,q,ie,ue,de,K){K===!0?n.vertexAttribIPointer(C,V,q,ue,de):n.vertexAttribPointer(C,V,q,ie,ue,de)}function A(C,V,q,ie){T();const ue=ie.attributes,de=q.getAttributes(),K=V.defaultAttributeValues;for(const se in de){const B=de[se];if(B.location>=0){let ee=ue[se];if(ee===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),ee!==void 0){const $=ee.normalized,O=ee.itemSize,re=e.get(ee);if(re===void 0)continue;const ge=re.buffer,Ce=re.type,be=re.bytesPerElement,Q=Ce===n.INT||Ce===n.UNSIGNED_INT||ee.gpuType===Tp;if(ee.isInterleavedBufferAttribute){const ce=ee.data,pe=ce.stride,Ie=ee.offset;if(ce.isInstancedInterleavedBuffer){for(let ke=0;ke<B.locationSize;ke++)y(B.location+ke,ce.meshPerAttribute);C.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ke=0;ke<B.locationSize;ke++)S(B.location+ke);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let ke=0;ke<B.locationSize;ke++)R(B.location+ke,O/B.locationSize,Ce,$,pe*be,(Ie+O/B.locationSize*ke)*be,Q)}else{if(ee.isInstancedBufferAttribute){for(let ce=0;ce<B.locationSize;ce++)y(B.location+ce,ee.meshPerAttribute);C.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ce=0;ce<B.locationSize;ce++)S(B.location+ce);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let ce=0;ce<B.locationSize;ce++)R(B.location+ce,O/B.locationSize,Ce,$,O*be,O/B.locationSize*ce*be,Q)}}else if(K!==void 0){const $=K[se];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(B.location,$);break;case 3:n.vertexAttrib3fv(B.location,$);break;case 4:n.vertexAttrib4fv(B.location,$);break;default:n.vertexAttrib1fv(B.location,$)}}}}D()}function N(){F();for(const C in r){const V=r[C];for(const q in V){const ie=V[q];for(const ue in ie)m(ie[ue].object),delete ie[ue];delete V[q]}delete r[C]}}function I(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const q in V){const ie=V[q];for(const ue in ie)m(ie[ue].object),delete ie[ue];delete V[q]}delete r[C.id]}function k(C){for(const V in r){const q=r[V];if(q[C.id]===void 0)continue;const ie=q[C.id];for(const ue in ie)m(ie[ue].object),delete ie[ue];delete q[C.id]}}function F(){P(),u=!0,l!==o&&(l=o,h(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:F,resetDefaultState:P,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function WP(n,e,t){let r;function o(h){r=h}function l(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,p){p!==0&&(n.drawArraysInstanced(r,h,m,p),t.update(m,r,p))}function c(h,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,p);let x=0;for(let E=0;E<p;E++)x+=m[E];t.update(x,r,1)}function d(h,m,p,v){if(p===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<h.length;E++)u(h[E],m[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,m,0,v,0,p);let E=0;for(let T=0;T<p;T++)E+=m[T]*v[T];t.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function XP(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==bi&&r.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(k){const F=k===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==fr&&r.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ar&&!F)}function d(k){if(k==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:A,vertexTextures:N,maxSamples:I}}function jP(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new vs,c=new gt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(p,v){const x=p.length!==0||v||r!==0||o;return o=v,r=p.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(p,v){t=m(p,v,0)},this.setState=function(p,v,x){const E=p.clippingPlanes,T=p.clipIntersection,S=p.clipShadows,y=n.get(p);if(!o||E===null||E.length===0||l&&!S)l?m(null):h();else{const D=l?0:r,R=D*4;let A=y.clippingState||null;d.value=A,A=m(E,v,R,x);for(let N=0;N!==R;++N)A[N]=t[N];y.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(p,v,x,E){const T=p!==null?p.length:0;let S=null;if(T!==0){if(S=d.value,E!==!0||S===null){const y=x+T*4,D=v.matrixWorldInverse;c.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let R=0,A=x;R!==T;++R,A+=4)u.copy(p[R]).applyMatrix4(D,c),u.normal.toArray(S,A),S[A+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function YP(n){let e=new WeakMap;function t(u,c){return c===uh?u.mapping=Ao:c===ch&&(u.mapping=Co),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===uh||c===ch)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new $C(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const xo=4,Z0=[.125,.215,.35,.446,.526,.582],xs=20,Td=new iR,Q0=new Ft;let wd=null,Ad=0,Cd=0,Rd=!1;const _s=(1+Math.sqrt(5))/2,po=1/_s,J0=[new ne(-_s,po,0),new ne(_s,po,0),new ne(-po,0,_s),new ne(po,0,_s),new ne(0,_s,-po),new ne(0,_s,po),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],qP=new ne;class e_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:c=qP}=l;wd=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wd,Ad,Cd),this._renderer.xr.enabled=Rd,e.scissorTest=!1,wu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ao||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wd=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:Va,format:bi,colorSpace:Ro,depthBuffer:!1},o=t_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$P(l)),this._blurMaterial=KP(l,e,t)}return o}_compileMaterial(e){const t=new Vi(this._lodPlanes[0],e);this._renderer.compile(t,Td)}_sceneToCubeUV(e,t,r,o,l){const d=new di(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,x=p.toneMapping;p.getClearColor(Q0),p.toneMapping=Gr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(o),p.clearDepth(),p.setRenderTarget(null));const T=new xx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),S=new Vi(new Xa,T);let y=!1;const D=e.background;D?D.isColor&&(T.color.copy(D),e.background=null,y=!0):(T.color.copy(Q0),y=!0);for(let R=0;R<6;R++){const A=R%3;A===0?(d.up.set(0,h[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[R],l.y,l.z)):A===1?(d.up.set(0,0,h[R]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[R],l.z)):(d.up.set(0,h[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[R]));const N=this._cubeSize;wu(o,A*N,R>2?N:0,N,N),p.setRenderTarget(o),y&&p.render(S,d),p.render(e,d)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=x,p.autoClear=v,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ao||e.mapping===Co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Vi(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;wu(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Td)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=J0[(o-l-1)%J0.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new Vi(this._lodPlanes[o],h),v=h.uniforms,x=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*xs-1),T=l/E,S=isFinite(l)?1+Math.floor(m*T):xs;S>xs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xs}`);const y=[];let D=0;for(let k=0;k<xs;++k){const F=k/T,P=Math.exp(-F*F/2);y.push(P),k===0?D+=P:k<S&&(D+=2*P)}for(let k=0;k<y.length;k++)y[k]=y[k]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:R}=this;v.dTheta.value=E,v.mipInt.value=R-r;const A=this._sizeLods[o],N=3*A*(o>R-xo?o-R+xo:0),I=4*(this._cubeSize-A);wu(t,N,I,3*A,2*A),d.setRenderTarget(t),d.render(p,Td)}}function $P(n){const e=[],t=[],r=[];let o=n;const l=n-xo+1+Z0.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-xo?d=Z0[u-n+xo-1]:u===0&&(d=0),r.push(d);const h=1/(c-2),m=-h,p=1+h,v=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,E=6,T=3,S=2,y=1,D=new Float32Array(T*E*x),R=new Float32Array(S*E*x),A=new Float32Array(y*E*x);for(let I=0;I<x;I++){const k=I%3*2/3-1,F=I>2?0:-1,P=[k,F,0,k+2/3,F,0,k+2/3,F+1,0,k,F,0,k+2/3,F+1,0,k,F+1,0];D.set(P,T*E*I),R.set(v,S*E*I);const C=[I,I,I,I,I,I];A.set(C,y*E*I)}const N=new qr;N.setAttribute("position",new Wi(D,T)),N.setAttribute("uv",new Wi(R,S)),N.setAttribute("faceIndex",new Wi(A,y)),e.push(N),o>xo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function t_(n,e,t){const r=new bs(n,e,t);return r.texture.mapping=Ku,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function KP(n,e,t){const r=new Float32Array(xs),o=new ne(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Np(),fragmentShader:`

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
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function n_(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

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
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function i_(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function Np(){return`

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
	`}function ZP(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,h=d===uh||d===ch,m=d===Ao||d===Co;if(h||m){let p=e.get(c);const v=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new e_(n)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const x=c.image;return h&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new e_(n)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",l),p.texture):null}}}return c}function o(c){let d=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function QP(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Fa("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function JP(n,e,t,r){const o={},l=new WeakMap;function u(p){const v=p.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(p,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(p){const v=p.attributes;for(const x in v)e.update(v[x],n.ARRAY_BUFFER)}function h(p){const v=[],x=p.index,E=p.attributes.position;let T=0;if(x!==null){const D=x.array;T=x.version;for(let R=0,A=D.length;R<A;R+=3){const N=D[R+0],I=D[R+1],k=D[R+2];v.push(N,I,I,k,k,N)}}else if(E!==void 0){const D=E.array;T=E.version;for(let R=0,A=D.length/3-1;R<A;R+=3){const N=R+0,I=R+1,k=R+2;v.push(N,I,I,k,k,N)}}else return;const S=new(gx(v)?Ex:Sx)(v,1);S.version=T;const y=l.get(p);y&&e.remove(y),l.set(p,S)}function m(p){const v=l.get(p);if(v){const x=p.index;x!==null&&v.version<x.version&&h(p)}else h(p);return l.get(p)}return{get:c,update:d,getWireframeAttribute:m}}function e2(n,e,t){let r;function o(v){r=v}let l,u;function c(v){l=v.type,u=v.bytesPerElement}function d(v,x){n.drawElements(r,x,l,v*u),t.update(x,r,1)}function h(v,x,E){E!==0&&(n.drawElementsInstanced(r,x,l,v*u,E),t.update(x,r,E))}function m(v,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,v,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];t.update(S,r,1)}function p(v,x,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/u,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,v,0,T,0,E);let y=0;for(let D=0;D<E;D++)y+=x[D]*T[D];t.update(y,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function t2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function n2(n,e,t){const r=new WeakMap,o=new rn;function l(u,c,d){const h=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=m!==void 0?m.length:0;let v=r.get(c);if(v===void 0||v.count!==p){let P=function(){k.dispose(),r.delete(c),c.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();const x=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let R=0;x===!0&&(R=1),E===!0&&(R=2),T===!0&&(R=3);let A=c.attributes.position.count*R,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const I=new Float32Array(A*N*4*p),k=new vx(I,A,N,p);k.type=ar,k.needsUpdate=!0;const F=R*4;for(let C=0;C<p;C++){const V=S[C],q=y[C],ie=D[C],ue=A*N*4*C;for(let de=0;de<V.count;de++){const K=de*F;x===!0&&(o.fromBufferAttribute(V,de),I[ue+K+0]=o.x,I[ue+K+1]=o.y,I[ue+K+2]=o.z,I[ue+K+3]=0),E===!0&&(o.fromBufferAttribute(q,de),I[ue+K+4]=o.x,I[ue+K+5]=o.y,I[ue+K+6]=o.z,I[ue+K+7]=0),T===!0&&(o.fromBufferAttribute(ie,de),I[ue+K+8]=o.x,I[ue+K+9]=o.y,I[ue+K+10]=o.z,I[ue+K+11]=ie.itemSize===4?o.w:1)}}v={count:p,texture:k,size:new bt(A,N)},r.set(c,v),c.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let x=0;for(let T=0;T<h.length;T++)x+=h[T];const E=c.morphTargetsRelative?1:1-x;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function i2(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,p=e.get(d,m);if(o.get(p)!==h&&(e.update(p),o.set(p,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return p}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const Px=new qn,r_=new Cx(1,1),Dx=new vx,Lx=new DC,Ix=new wx,s_=[],o_=[],a_=new Float32Array(16),l_=new Float32Array(9),u_=new Float32Array(4);function No(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=s_[o];if(l===void 0&&(l=new Float32Array(o),s_[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Ju(n,e){let t=o_[e];t===void 0&&(t=new Int32Array(e),o_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function r2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function s2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function o2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function a2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function l2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;u_.set(r),n.uniformMatrix2fv(this.addr,!1,u_),hn(t,r)}}function u2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;l_.set(r),n.uniformMatrix3fv(this.addr,!1,l_),hn(t,r)}}function c2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;a_.set(r),n.uniformMatrix4fv(this.addr,!1,a_),hn(t,r)}}function f2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function d2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function h2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function p2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function m2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function g2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function v2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function y2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(r_.compareFunction=mx,l=r_):l=Px,t.setTexture2D(e||l,o)}function x2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Lx,o)}function S2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Ix,o)}function E2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Dx,o)}function M2(n){switch(n){case 5126:return r2;case 35664:return s2;case 35665:return o2;case 35666:return a2;case 35674:return l2;case 35675:return u2;case 35676:return c2;case 5124:case 35670:return f2;case 35667:case 35671:return d2;case 35668:case 35672:return h2;case 35669:case 35673:return p2;case 5125:return m2;case 36294:return g2;case 36295:return v2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return y2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return S2;case 36289:case 36303:case 36311:case 36292:return E2}}function T2(n,e){n.uniform1fv(this.addr,e)}function w2(n,e){const t=No(e,this.size,2);n.uniform2fv(this.addr,t)}function A2(n,e){const t=No(e,this.size,3);n.uniform3fv(this.addr,t)}function C2(n,e){const t=No(e,this.size,4);n.uniform4fv(this.addr,t)}function R2(n,e){const t=No(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function b2(n,e){const t=No(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function P2(n,e){const t=No(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function D2(n,e){n.uniform1iv(this.addr,e)}function L2(n,e){n.uniform2iv(this.addr,e)}function I2(n,e){n.uniform3iv(this.addr,e)}function N2(n,e){n.uniform4iv(this.addr,e)}function U2(n,e){n.uniform1uiv(this.addr,e)}function F2(n,e){n.uniform2uiv(this.addr,e)}function O2(n,e){n.uniform3uiv(this.addr,e)}function k2(n,e){n.uniform4uiv(this.addr,e)}function B2(n,e,t){const r=this.cache,o=e.length,l=Ju(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Px,l[u])}function z2(n,e,t){const r=this.cache,o=e.length,l=Ju(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Lx,l[u])}function V2(n,e,t){const r=this.cache,o=e.length,l=Ju(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Ix,l[u])}function H2(n,e,t){const r=this.cache,o=e.length,l=Ju(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Dx,l[u])}function G2(n){switch(n){case 5126:return T2;case 35664:return w2;case 35665:return A2;case 35666:return C2;case 35674:return R2;case 35675:return b2;case 35676:return P2;case 5124:case 35670:return D2;case 35667:case 35671:return L2;case 35668:case 35672:return I2;case 35669:case 35673:return N2;case 5125:return U2;case 36294:return F2;case 36295:return O2;case 36296:return k2;case 35678:case 36198:case 36298:case 36306:case 35682:return B2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return V2;case 36289:case 36303:case 36311:case 36292:return H2}}class W2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=M2(t.type)}}class X2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G2(t.type)}}class j2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const bd=/(\w+)(\])?(\[|\.)?/g;function c_(n,e){n.seq.push(e),n.map[e.id]=e}function Y2(n,e,t){const r=n.name,o=r.length;for(bd.lastIndex=0;;){const l=bd.exec(r),u=bd.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){c_(t,h===void 0?new W2(c,n,e):new X2(c,n,e));break}else{let p=t.map[c];p===void 0&&(p=new j2(c),c_(t,p)),t=p}}}class Ou{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);Y2(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function f_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const q2=37297;let $2=0;function K2(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const d_=new gt;function Z2(n){Rt._getMatrix(d_,Rt.workingColorSpace,n);const e=`mat3( ${d_.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(n)){case Wu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function h_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+K2(n.getShaderSource(e),c)}else return l}function Q2(n,e){const t=Z2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function J2(n,e){let t;switch(e){case rC:t="Linear";break;case sC:t="Reinhard";break;case oC:t="Cineon";break;case aC:t="ACESFilmic";break;case uC:t="AgX";break;case cC:t="Neutral";break;case lC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Au=new ne;function eD(){Rt.getLuminanceCoefficients(Au);const n=Au.x.toFixed(4),e=Au.y.toFixed(4),t=Au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function nD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function iD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function xa(n){return n!==""}function p_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(n){return n.replace(rD,oD)}const sD=new Map;function oD(n,e){let t=vt[e];if(t===void 0){const r=sD.get(e);if(r!==void 0)t=vt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hh(t)}const aD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g_(n){return n.replace(aD,lD)}function lD(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function v_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===OA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function cD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ao:case Co:e="ENVMAP_TYPE_CUBE";break;case Ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Co:e="ENVMAP_MODE_REFRACTION";break}return e}function dD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sx:e="ENVMAP_BLENDING_MULTIPLY";break;case nC:e="ENVMAP_BLENDING_MIX";break;case iC:e="ENVMAP_BLENDING_ADD";break}return e}function hD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function pD(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=uD(t),h=cD(t),m=fD(t),p=dD(t),v=hD(t),x=tD(t),E=nD(l),T=o.createProgram();let S,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(xa).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(xa).join(`
`),y.length>0&&(y+=`
`)):(S=[v_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),y=[v_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gr?"#define TONE_MAPPING":"",t.toneMapping!==Gr?vt.tonemapping_pars_fragment:"",t.toneMapping!==Gr?J2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Q2("linearToOutputTexel",t.outputColorSpace),eD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),u=Hh(u),u=p_(u,t),u=m_(u,t),c=Hh(c),c=p_(c,t),c=m_(c,t),u=g_(u),c=g_(c),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===L0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===L0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=D+S+u,A=D+y+c,N=f_(o,o.VERTEX_SHADER,R),I=f_(o,o.FRAGMENT_SHADER,A);o.attachShader(T,N),o.attachShader(T,I),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function k(V){if(n.debug.checkShaderErrors){const q=o.getProgramInfoLog(T)||"",ie=o.getShaderInfoLog(N)||"",ue=o.getShaderInfoLog(I)||"",de=q.trim(),K=ie.trim(),se=ue.trim();let B=!0,ee=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,N,I);else{const $=h_(o,N,"vertex"),O=h_(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+de+`
`+$+`
`+O)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(K===""||se==="")&&(ee=!1);ee&&(V.diagnostics={runnable:B,programLog:de,vertexShader:{log:K,prefix:S},fragmentShader:{log:se,prefix:y}})}o.deleteShader(N),o.deleteShader(I),F=new Ou(o,T),P=iD(o,T)}let F;this.getUniforms=function(){return F===void 0&&k(this),F};let P;this.getAttributes=function(){return P===void 0&&k(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,q2)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$2++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=I,this}let mD=0;class gD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new vD(e),t.set(e,r)),r}}class vD{constructor(e){this.id=mD++,this.code=e,this.usedTimes=0}}function _D(n,e,t,r,o,l,u){const c=new _x,d=new gD,h=new Set,m=[],p=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,C,V,q,ie){const ue=q.fog,de=ie.geometry,K=P.isMeshStandardMaterial?q.environment:null,se=(P.isMeshStandardMaterial?t:e).get(P.envMap||K),B=se&&se.mapping===Ku?se.image.height:null,ee=E[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const $=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,O=$!==void 0?$.length:0;let re=0;de.morphAttributes.position!==void 0&&(re=1),de.morphAttributes.normal!==void 0&&(re=2),de.morphAttributes.color!==void 0&&(re=3);let ge,Ce,be,Q;if(ee){const yt=Oi[ee];ge=yt.vertexShader,Ce=yt.fragmentShader}else ge=P.vertexShader,Ce=P.fragmentShader,d.update(P),be=d.getVertexShaderID(P),Q=d.getFragmentShaderID(P);const ce=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ie=ie.isInstancedMesh===!0,ke=ie.isBatchedMesh===!0,pt=!!P.map,Ht=!!P.matcap,z=!!se,At=!!P.aoMap,ft=!!P.lightMap,tt=!!P.bumpMap,Ge=!!P.normalMap,Dt=!!P.displacementMap,Be=!!P.emissiveMap,ut=!!P.metalnessMap,Bt=!!P.roughnessMap,_t=P.anisotropy>0,L=P.clearcoat>0,w=P.dispersion>0,Z=P.iridescence>0,he=P.sheen>0,ve=P.transmission>0,fe=_t&&!!P.anisotropyMap,Ke=L&&!!P.clearcoatMap,Ee=L&&!!P.clearcoatNormalMap,We=L&&!!P.clearcoatRoughnessMap,Xe=Z&&!!P.iridescenceMap,Te=Z&&!!P.iridescenceThicknessMap,Ne=he&&!!P.sheenColorMap,nt=he&&!!P.sheenRoughnessMap,Ye=!!P.specularMap,Le=!!P.specularColorMap,lt=!!P.specularIntensityMap,G=ve&&!!P.transmissionMap,Me=ve&&!!P.thicknessMap,Re=!!P.gradientMap,ze=!!P.alphaMap,xe=P.alphaTest>0,te=!!P.alphaHash,Pe=!!P.extensions;let Ze=Gr;P.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const mt={shaderID:ee,shaderType:P.type,shaderName:P.name,vertexShader:ge,fragmentShader:Ce,defines:P.defines,customVertexShaderID:be,customFragmentShaderID:Q,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:ke,batchingColor:ke&&ie._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ie.instanceColor!==null,instancingMorph:Ie&&ie.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ro,alphaToCoverage:!!P.alphaToCoverage,map:pt,matcap:Ht,envMap:z,envMapMode:z&&se.mapping,envMapCubeUVHeight:B,aoMap:At,lightMap:ft,bumpMap:tt,normalMap:Ge,displacementMap:v&&Dt,emissiveMap:Be,normalMapObjectSpace:Ge&&P.normalMapType===mC,normalMapTangentSpace:Ge&&P.normalMapType===pC,metalnessMap:ut,roughnessMap:Bt,anisotropy:_t,anisotropyMap:fe,clearcoat:L,clearcoatMap:Ke,clearcoatNormalMap:Ee,clearcoatRoughnessMap:We,dispersion:w,iridescence:Z,iridescenceMap:Xe,iridescenceThicknessMap:Te,sheen:he,sheenColorMap:Ne,sheenRoughnessMap:nt,specularMap:Ye,specularColorMap:Le,specularIntensityMap:lt,transmission:ve,transmissionMap:G,thicknessMap:Me,gradientMap:Re,opaque:P.transparent===!1&&P.blending===Cs&&P.alphaToCoverage===!1,alphaMap:ze,alphaTest:xe,alphaHash:te,combine:P.combine,mapUv:pt&&T(P.map.channel),aoMapUv:At&&T(P.aoMap.channel),lightMapUv:ft&&T(P.lightMap.channel),bumpMapUv:tt&&T(P.bumpMap.channel),normalMapUv:Ge&&T(P.normalMap.channel),displacementMapUv:Dt&&T(P.displacementMap.channel),emissiveMapUv:Be&&T(P.emissiveMap.channel),metalnessMapUv:ut&&T(P.metalnessMap.channel),roughnessMapUv:Bt&&T(P.roughnessMap.channel),anisotropyMapUv:fe&&T(P.anisotropyMap.channel),clearcoatMapUv:Ke&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:nt&&T(P.sheenRoughnessMap.channel),specularMapUv:Ye&&T(P.specularMap.channel),specularColorMapUv:Le&&T(P.specularColorMap.channel),specularIntensityMapUv:lt&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:Me&&T(P.thicknessMap.channel),alphaMapUv:ze&&T(P.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Ge||_t),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!de.attributes.uv&&(pt||ze),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:pe,skinning:ie.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:pt&&P.map.isVideoTexture===!0&&Rt.getTransfer(P.map.colorSpace)===kt,decodeVideoTextureEmissive:Be&&P.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(P.emissiveMap.colorSpace)===kt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===ki,flipSided:P.side===Yn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Pe&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&P.extensions.multiDraw===!0||ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return mt.vertexUv1s=h.has(1),mt.vertexUv2s=h.has(2),mt.vertexUv3s=h.has(3),h.clear(),mt}function y(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)C.push(V),C.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(D(C,P),R(C,P),C.push(n.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function D(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function R(P,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),C.gradientMap&&c.enable(22),P.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),P.push(c.mask)}function A(P){const C=E[P.type];let V;if(C){const q=Oi[C];V=XC.clone(q.uniforms)}else V=P.uniforms;return V}function N(P,C){let V;for(let q=0,ie=m.length;q<ie;q++){const ue=m[q];if(ue.cacheKey===C){V=ue,++V.usedTimes;break}}return V===void 0&&(V=new pD(n,C,P,l),m.push(V)),V}function I(P){if(--P.usedTimes===0){const C=m.indexOf(P);m[C]=m[m.length-1],m.pop(),P.destroy()}}function k(P){d.remove(P)}function F(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:A,acquireProgram:N,releaseProgram:I,releaseShaderCache:k,programs:m,dispose:F}}function yD(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function xD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function __(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function y_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(p,v,x,E,T,S){let y=n[e];return y===void 0?(y={id:p.id,object:p,geometry:v,material:x,groupOrder:E,renderOrder:p.renderOrder,z:T,group:S},n[e]=y):(y.id=p.id,y.object=p,y.geometry=v,y.material=x,y.groupOrder=E,y.renderOrder=p.renderOrder,y.z=T,y.group=S),e++,y}function c(p,v,x,E,T,S){const y=u(p,v,x,E,T,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):t.push(y)}function d(p,v,x,E,T,S){const y=u(p,v,x,E,T,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function h(p,v){t.length>1&&t.sort(p||xD),r.length>1&&r.sort(v||__),o.length>1&&o.sort(v||__)}function m(){for(let p=e,v=n.length;p<v;p++){const x=n[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:d,finish:m,sort:h}}function SD(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new y_,n.set(r,[u])):o>=l.length?(u=new y_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function ED(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Ft};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":t={color:new Ft,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}function MD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let TD=0;function wD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AD(n){const e=new ED,t=MD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ne);const o=new ne,l=new fn,u=new fn;function c(h){let m=0,p=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let x=0,E=0,T=0,S=0,y=0,D=0,R=0,A=0,N=0,I=0,k=0;h.sort(wD);for(let P=0,C=h.length;P<C;P++){const V=h[P],q=V.color,ie=V.intensity,ue=V.distance,de=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=q.r*ie,p+=q.g*ie,v+=q.b*ie;else if(V.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(V.sh.coefficients[K],ie);k++}else if(V.isDirectionalLight){const K=e.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const se=V.shadow,B=t.get(V);B.shadowIntensity=se.intensity,B.shadowBias=se.bias,B.shadowNormalBias=se.normalBias,B.shadowRadius=se.radius,B.shadowMapSize=se.mapSize,r.directionalShadow[x]=B,r.directionalShadowMap[x]=de,r.directionalShadowMatrix[x]=V.shadow.matrix,D++}r.directional[x]=K,x++}else if(V.isSpotLight){const K=e.get(V);K.position.setFromMatrixPosition(V.matrixWorld),K.color.copy(q).multiplyScalar(ie),K.distance=ue,K.coneCos=Math.cos(V.angle),K.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),K.decay=V.decay,r.spot[T]=K;const se=V.shadow;if(V.map&&(r.spotLightMap[N]=V.map,N++,se.updateMatrices(V),V.castShadow&&I++),r.spotLightMatrix[T]=se.matrix,V.castShadow){const B=t.get(V);B.shadowIntensity=se.intensity,B.shadowBias=se.bias,B.shadowNormalBias=se.normalBias,B.shadowRadius=se.radius,B.shadowMapSize=se.mapSize,r.spotShadow[T]=B,r.spotShadowMap[T]=de,A++}T++}else if(V.isRectAreaLight){const K=e.get(V);K.color.copy(q).multiplyScalar(ie),K.halfWidth.set(V.width*.5,0,0),K.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=K,S++}else if(V.isPointLight){const K=e.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity),K.distance=V.distance,K.decay=V.decay,V.castShadow){const se=V.shadow,B=t.get(V);B.shadowIntensity=se.intensity,B.shadowBias=se.bias,B.shadowNormalBias=se.normalBias,B.shadowRadius=se.radius,B.shadowMapSize=se.mapSize,B.shadowCameraNear=se.camera.near,B.shadowCameraFar=se.camera.far,r.pointShadow[E]=B,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=V.shadow.matrix,R++}r.point[E]=K,E++}else if(V.isHemisphereLight){const K=e.get(V);K.skyColor.copy(V.color).multiplyScalar(ie),K.groundColor.copy(V.groundColor).multiplyScalar(ie),r.hemi[y]=K,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=p,r.ambient[2]=v;const F=r.hash;(F.directionalLength!==x||F.pointLength!==E||F.spotLength!==T||F.rectAreaLength!==S||F.hemiLength!==y||F.numDirectionalShadows!==D||F.numPointShadows!==R||F.numSpotShadows!==A||F.numSpotMaps!==N||F.numLightProbes!==k)&&(r.directional.length=x,r.spot.length=T,r.rectArea.length=S,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=A+N-I,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=k,F.directionalLength=x,F.pointLength=E,F.spotLength=T,F.rectAreaLength=S,F.hemiLength=y,F.numDirectionalShadows=D,F.numPointShadows=R,F.numSpotShadows=A,F.numSpotMaps=N,F.numLightProbes=k,r.version=TD++)}function d(h,m){let p=0,v=0,x=0,E=0,T=0;const S=m.matrixWorldInverse;for(let y=0,D=h.length;y<D;y++){const R=h[y];if(R.isDirectionalLight){const A=r.directional[p];A.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),p++}else if(R.isSpotLight){const A=r.spot[x];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),x++}else if(R.isRectAreaLight){const A=r.rectArea[E];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),u.identity(),l.copy(R.matrixWorld),l.premultiply(S),u.extractRotation(l),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),E++}else if(R.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),v++}else if(R.isHemisphereLight){const A=r.hemi[T];A.direction.setFromMatrixPosition(R.matrixWorld),A.direction.transformDirection(S),T++}}}return{setup:c,setupView:d,state:r}}function x_(n){const e=new AD(n),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function c(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:l,pushShadow:u}}function CD(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new x_(n),e.set(o,[c])):l>=u.length?(c=new x_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const RD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bD=`uniform sampler2D shadow_pass;
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
}`;function PD(n,e,t){let r=new Ax;const o=new bt,l=new bt,u=new rn,c=new tR({depthPacking:hC}),d=new nR,h={},m=t.maxTextureSize,p={[jr]:Yn,[Yn]:jr,[ki]:ki},v=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:RD,fragmentShader:bD}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new qr;E.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Vi(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rx;let y=this.type;this.render=function(I,k,F){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const P=n.getRenderTarget(),C=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Hr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ie=y!==or&&this.type===or,ue=y===or&&this.type!==or;for(let de=0,K=I.length;de<K;de++){const se=I[de],B=se.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ee=B.getFrameExtents();if(o.multiply(ee),l.copy(B.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ee.x),o.x=l.x*ee.x,B.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ee.y),o.y=l.y*ee.y,B.mapSize.y=l.y)),B.map===null||ie===!0||ue===!0){const O=this.type!==or?{minFilter:Pi,magFilter:Pi}:{};B.map!==null&&B.map.dispose(),B.map=new bs(o.x,o.y,O),B.map.texture.name=se.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const $=B.getViewportCount();for(let O=0;O<$;O++){const re=B.getViewport(O);u.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),q.viewport(u),B.updateMatrices(se,O),r=B.getFrustum(),A(k,F,B.camera,se,this.type)}B.isPointLightShadow!==!0&&this.type===or&&D(B,F),B.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(P,C,V)};function D(I,k){const F=e.update(T);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new bs(o.x,o.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(k,null,F,v,T,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(k,null,F,x,T,null)}function R(I,k,F,P){let C=null;const V=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)C=V;else if(C=F.isPointLight===!0?d:c,n.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const q=C.uuid,ie=k.uuid;let ue=h[q];ue===void 0&&(ue={},h[q]=ue);let de=ue[ie];de===void 0&&(de=C.clone(),ue[ie]=de,k.addEventListener("dispose",N)),C=de}if(C.visible=k.visible,C.wireframe=k.wireframe,P===or?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:p[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,F.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const q=n.properties.get(C);q.light=F}return C}function A(I,k,F,P,C){if(I.visible===!1)return;if(I.layers.test(k.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===or)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const ie=e.update(I),ue=I.material;if(Array.isArray(ue)){const de=ie.groups;for(let K=0,se=de.length;K<se;K++){const B=de[K],ee=ue[B.materialIndex];if(ee&&ee.visible){const $=R(I,ee,P,C);I.onBeforeShadow(n,I,k,F,ie,$,B),n.renderBufferDirect(F,null,ie,$,I,B),I.onAfterShadow(n,I,k,F,ie,$,B)}}}else if(ue.visible){const de=R(I,ue,P,C);I.onBeforeShadow(n,I,k,F,ie,de,null),n.renderBufferDirect(F,null,ie,de,I,null),I.onAfterShadow(n,I,k,F,ie,de,null)}}const q=I.children;for(let ie=0,ue=q.length;ie<ue;ie++)A(q[ie],k,F,P,C)}function N(I){I.target.removeEventListener("dispose",N);for(const F in h){const P=h[F],C=I.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const DD={[nh]:ih,[rh]:ah,[sh]:lh,[wo]:oh,[ih]:nh,[ah]:rh,[lh]:sh,[oh]:wo};function LD(n,e){function t(){let G=!1;const Me=new rn;let Re=null;const ze=new rn(0,0,0,0);return{setMask:function(xe){Re!==xe&&!G&&(n.colorMask(xe,xe,xe,xe),Re=xe)},setLocked:function(xe){G=xe},setClear:function(xe,te,Pe,Ze,mt){mt===!0&&(xe*=Ze,te*=Ze,Pe*=Ze),Me.set(xe,te,Pe,Ze),ze.equals(Me)===!1&&(n.clearColor(xe,te,Pe,Ze),ze.copy(Me))},reset:function(){G=!1,Re=null,ze.set(-1,0,0,0)}}}function r(){let G=!1,Me=!1,Re=null,ze=null,xe=null;return{setReversed:function(te){if(Me!==te){const Pe=e.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Me=te;const Ze=xe;xe=null,this.setClear(Ze)}},getReversed:function(){return Me},setTest:function(te){te?ce(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(te){Re!==te&&!G&&(n.depthMask(te),Re=te)},setFunc:function(te){if(Me&&(te=DD[te]),ze!==te){switch(te){case nh:n.depthFunc(n.NEVER);break;case ih:n.depthFunc(n.ALWAYS);break;case rh:n.depthFunc(n.LESS);break;case wo:n.depthFunc(n.LEQUAL);break;case sh:n.depthFunc(n.EQUAL);break;case oh:n.depthFunc(n.GEQUAL);break;case ah:n.depthFunc(n.GREATER);break;case lh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ze=te}},setLocked:function(te){G=te},setClear:function(te){xe!==te&&(Me&&(te=1-te),n.clearDepth(te),xe=te)},reset:function(){G=!1,Re=null,ze=null,xe=null,Me=!1}}}function o(){let G=!1,Me=null,Re=null,ze=null,xe=null,te=null,Pe=null,Ze=null,mt=null;return{setTest:function(yt){G||(yt?ce(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(yt){Me!==yt&&!G&&(n.stencilMask(yt),Me=yt)},setFunc:function(yt,Lt,Nt){(Re!==yt||ze!==Lt||xe!==Nt)&&(n.stencilFunc(yt,Lt,Nt),Re=yt,ze=Lt,xe=Nt)},setOp:function(yt,Lt,Nt){(te!==yt||Pe!==Lt||Ze!==Nt)&&(n.stencilOp(yt,Lt,Nt),te=yt,Pe=Lt,Ze=Nt)},setLocked:function(yt){G=yt},setClear:function(yt){mt!==yt&&(n.clearStencil(yt),mt=yt)},reset:function(){G=!1,Me=null,Re=null,ze=null,xe=null,te=null,Pe=null,Ze=null,mt=null}}}const l=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let m={},p={},v=new WeakMap,x=[],E=null,T=!1,S=null,y=null,D=null,R=null,A=null,N=null,I=null,k=new Ft(0,0,0),F=0,P=!1,C=null,V=null,q=null,ie=null,ue=null;const de=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,se=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(B)[1]),K=se>=1):B.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),K=se>=2);let ee=null,$={};const O=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),ge=new rn().fromArray(O),Ce=new rn().fromArray(re);function be(G,Me,Re,ze){const xe=new Uint8Array(4),te=n.createTexture();n.bindTexture(G,te),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<Re;Pe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,ze,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(Me+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return te}const Q={};Q[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ce(n.DEPTH_TEST),u.setFunc(wo),tt(!1),Ge(A0),ce(n.CULL_FACE),At(Hr);function ce(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function pe(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function Ie(G,Me){return p[G]!==Me?(n.bindFramebuffer(G,Me),p[G]=Me,G===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Me),G===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ke(G,Me){let Re=x,ze=!1;if(G){Re=v.get(Me),Re===void 0&&(Re=[],v.set(Me,Re));const xe=G.textures;if(Re.length!==xe.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Pe=xe.length;te<Pe;te++)Re[te]=n.COLOR_ATTACHMENT0+te;Re.length=xe.length,ze=!0}}else Re[0]!==n.BACK&&(Re[0]=n.BACK,ze=!0);ze&&n.drawBuffers(Re)}function pt(G){return E!==G?(n.useProgram(G),E=G,!0):!1}const Ht={[ys]:n.FUNC_ADD,[BA]:n.FUNC_SUBTRACT,[zA]:n.FUNC_REVERSE_SUBTRACT};Ht[VA]=n.MIN,Ht[HA]=n.MAX;const z={[GA]:n.ZERO,[WA]:n.ONE,[XA]:n.SRC_COLOR,[eh]:n.SRC_ALPHA,[ZA]:n.SRC_ALPHA_SATURATE,[$A]:n.DST_COLOR,[YA]:n.DST_ALPHA,[jA]:n.ONE_MINUS_SRC_COLOR,[th]:n.ONE_MINUS_SRC_ALPHA,[KA]:n.ONE_MINUS_DST_COLOR,[qA]:n.ONE_MINUS_DST_ALPHA,[QA]:n.CONSTANT_COLOR,[JA]:n.ONE_MINUS_CONSTANT_COLOR,[eC]:n.CONSTANT_ALPHA,[tC]:n.ONE_MINUS_CONSTANT_ALPHA};function At(G,Me,Re,ze,xe,te,Pe,Ze,mt,yt){if(G===Hr){T===!0&&(pe(n.BLEND),T=!1);return}if(T===!1&&(ce(n.BLEND),T=!0),G!==kA){if(G!==S||yt!==P){if((y!==ys||A!==ys)&&(n.blendEquation(n.FUNC_ADD),y=ys,A=ys),yt)switch(G){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case C0:n.blendFunc(n.ONE,n.ONE);break;case R0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case b0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case C0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case R0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,R=null,N=null,I=null,k.set(0,0,0),F=0,S=G,P=yt}return}xe=xe||Me,te=te||Re,Pe=Pe||ze,(Me!==y||xe!==A)&&(n.blendEquationSeparate(Ht[Me],Ht[xe]),y=Me,A=xe),(Re!==D||ze!==R||te!==N||Pe!==I)&&(n.blendFuncSeparate(z[Re],z[ze],z[te],z[Pe]),D=Re,R=ze,N=te,I=Pe),(Ze.equals(k)===!1||mt!==F)&&(n.blendColor(Ze.r,Ze.g,Ze.b,mt),k.copy(Ze),F=mt),S=G,P=!1}function ft(G,Me){G.side===ki?pe(n.CULL_FACE):ce(n.CULL_FACE);let Re=G.side===Yn;Me&&(Re=!Re),tt(Re),G.blending===Cs&&G.transparent===!1?At(Hr):At(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const ze=G.stencilWrite;c.setTest(ze),ze&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(G){C!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),C=G)}function Ge(G){G!==UA?(ce(n.CULL_FACE),G!==V&&(G===A0?n.cullFace(n.BACK):G===FA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),V=G}function Dt(G){G!==q&&(K&&n.lineWidth(G),q=G)}function Be(G,Me,Re){G?(ce(n.POLYGON_OFFSET_FILL),(ie!==Me||ue!==Re)&&(n.polygonOffset(Me,Re),ie=Me,ue=Re)):pe(n.POLYGON_OFFSET_FILL)}function ut(G){G?ce(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Bt(G){G===void 0&&(G=n.TEXTURE0+de-1),ee!==G&&(n.activeTexture(G),ee=G)}function _t(G,Me,Re){Re===void 0&&(ee===null?Re=n.TEXTURE0+de-1:Re=ee);let ze=$[Re];ze===void 0&&(ze={type:void 0,texture:void 0},$[Re]=ze),(ze.type!==G||ze.texture!==Me)&&(ee!==Re&&(n.activeTexture(Re),ee=Re),n.bindTexture(G,Me||Q[G]),ze.type=G,ze.texture=Me)}function L(){const G=$[ee];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(G){ge.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ge.copy(G))}function nt(G){Ce.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Ce.copy(G))}function Ye(G,Me){let Re=h.get(Me);Re===void 0&&(Re=new WeakMap,h.set(Me,Re));let ze=Re.get(G);ze===void 0&&(ze=n.getUniformBlockIndex(Me,G.name),Re.set(G,ze))}function Le(G,Me){const ze=h.get(Me).get(G);d.get(Me)!==ze&&(n.uniformBlockBinding(Me,ze,G.__bindingPointIndex),d.set(Me,ze))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},ee=null,$={},p={},v=new WeakMap,x=[],E=null,T=!1,S=null,y=null,D=null,R=null,A=null,N=null,I=null,k=new Ft(0,0,0),F=0,P=!1,C=null,V=null,q=null,ie=null,ue=null,ge.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),c.reset()}return{buffers:{color:l,depth:u,stencil:c},enable:ce,disable:pe,bindFramebuffer:Ie,drawBuffers:ke,useProgram:pt,setBlending:At,setMaterial:ft,setFlipSided:tt,setCullFace:Ge,setLineWidth:Dt,setPolygonOffset:Be,setScissorTest:ut,activeTexture:Bt,bindTexture:_t,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:Z,texImage2D:Xe,texImage3D:Te,updateUBOMapping:Ye,uniformBlockBinding:Le,texStorage2D:Ee,texStorage3D:We,texSubImage2D:he,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ke,scissor:Ne,viewport:nt,reset:lt}}function ID(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,m=new WeakMap;let p;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,w){return x?new OffscreenCanvas(L,w):ju("canvas")}function T(L,w,Z){let he=1;const ve=_t(L);if((ve.width>Z||ve.height>Z)&&(he=Z/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(he*ve.width),Ke=Math.floor(he*ve.height);p===void 0&&(p=E(fe,Ke));const Ee=w?E(fe,Ke):p;return Ee.width=fe,Ee.height=Ke,Ee.getContext("2d").drawImage(L,0,0,fe,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+Ke+")."),Ee}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(L,w,Z,he,ve=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=w;if(w===n.RED&&(Z===n.FLOAT&&(fe=n.R32F),Z===n.HALF_FLOAT&&(fe=n.R16F),Z===n.UNSIGNED_BYTE&&(fe=n.R8)),w===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.R8UI),Z===n.UNSIGNED_SHORT&&(fe=n.R16UI),Z===n.UNSIGNED_INT&&(fe=n.R32UI),Z===n.BYTE&&(fe=n.R8I),Z===n.SHORT&&(fe=n.R16I),Z===n.INT&&(fe=n.R32I)),w===n.RG&&(Z===n.FLOAT&&(fe=n.RG32F),Z===n.HALF_FLOAT&&(fe=n.RG16F),Z===n.UNSIGNED_BYTE&&(fe=n.RG8)),w===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.RG8UI),Z===n.UNSIGNED_SHORT&&(fe=n.RG16UI),Z===n.UNSIGNED_INT&&(fe=n.RG32UI),Z===n.BYTE&&(fe=n.RG8I),Z===n.SHORT&&(fe=n.RG16I),Z===n.INT&&(fe=n.RG32I)),w===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),Z===n.UNSIGNED_INT&&(fe=n.RGB32UI),Z===n.BYTE&&(fe=n.RGB8I),Z===n.SHORT&&(fe=n.RGB16I),Z===n.INT&&(fe=n.RGB32I)),w===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),Z===n.UNSIGNED_INT&&(fe=n.RGBA32UI),Z===n.BYTE&&(fe=n.RGBA8I),Z===n.SHORT&&(fe=n.RGBA16I),Z===n.INT&&(fe=n.RGBA32I)),w===n.RGB&&(Z===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),w===n.RGBA){const Ke=ve?Wu:Rt.getTransfer(he);Z===n.FLOAT&&(fe=n.RGBA32F),Z===n.HALF_FLOAT&&(fe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(fe=Ke===kt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function A(L,w){let Z;return L?w===null||w===Rs||w===Ia?Z=n.DEPTH24_STENCIL8:w===ar?Z=n.DEPTH32F_STENCIL8:w===La&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Rs||w===Ia?Z=n.DEPTH_COMPONENT24:w===ar?Z=n.DEPTH_COMPONENT32F:w===La&&(Z=n.DEPTH_COMPONENT16),Z}function N(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pi&&L.minFilter!==Bi?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function I(L){const w=L.target;w.removeEventListener("dispose",I),F(w),w.isVideoTexture&&m.delete(w)}function k(L){const w=L.target;w.removeEventListener("dispose",k),C(w)}function F(L){const w=r.get(L);if(w.__webglInit===void 0)return;const Z=L.source,he=v.get(Z);if(he){const ve=he[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(L),Object.keys(he).length===0&&v.delete(Z)}r.remove(L)}function P(L){const w=r.get(L);n.deleteTexture(w.__webglTexture);const Z=L.source,he=v.get(Z);delete he[w.__cacheKey],u.memory.textures--}function C(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let ve=0;ve<w.__webglFramebuffer[he].length;ve++)n.deleteFramebuffer(w.__webglFramebuffer[he][ve]);else n.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)n.deleteFramebuffer(w.__webglFramebuffer[he]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=L.textures;for(let he=0,ve=Z.length;he<ve;he++){const fe=r.get(Z[he]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(Z[he])}r.remove(L)}let V=0;function q(){V=0}function ie(){const L=V;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),V+=1,L}function ue(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function de(L,w){const Z=r.get(L);if(L.isVideoTexture&&ut(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,L,w);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+w)}function K(L,w){const Z=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Q(Z,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+w)}function se(L,w){const Z=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Q(Z,L,w);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+w)}function B(L,w){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){ce(Z,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+w)}const ee={[fh]:n.REPEAT,[Ms]:n.CLAMP_TO_EDGE,[dh]:n.MIRRORED_REPEAT},$={[Pi]:n.NEAREST,[fC]:n.NEAREST_MIPMAP_NEAREST,[su]:n.NEAREST_MIPMAP_LINEAR,[Bi]:n.LINEAR,[Jf]:n.LINEAR_MIPMAP_NEAREST,[Ts]:n.LINEAR_MIPMAP_LINEAR},O={[gC]:n.NEVER,[EC]:n.ALWAYS,[vC]:n.LESS,[mx]:n.LEQUAL,[_C]:n.EQUAL,[SC]:n.GEQUAL,[yC]:n.GREATER,[xC]:n.NOTEQUAL};function re(L,w){if(w.type===ar&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bi||w.magFilter===Jf||w.magFilter===su||w.magFilter===Ts||w.minFilter===Bi||w.minFilter===Jf||w.minFilter===su||w.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ee[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ee[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ee[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,$[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,$[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Pi||w.minFilter!==su&&w.minFilter!==Ts||w.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function ge(L,w){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",I));const he=w.source;let ve=v.get(he);ve===void 0&&(ve={},v.set(he,ve));const fe=ue(w);if(fe!==L.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ve[fe].usedTimes++;const Ke=ve[L.__cacheKey];Ke!==void 0&&(ve[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&P(w)),L.__cacheKey=fe,L.__webglTexture=ve[fe].texture}return Z}function Ce(L,w,Z){return Math.floor(Math.floor(L/Z)/w)}function be(L,w,Z,he){const fe=L.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Z,he,w.data);else{fe.sort((Te,Ne)=>Te.start-Ne.start);let Ke=0;for(let Te=1;Te<fe.length;Te++){const Ne=fe[Ke],nt=fe[Te],Ye=Ne.start+Ne.count,Le=Ce(nt.start,w.width,4),lt=Ce(Ne.start,w.width,4);nt.start<=Ye+1&&Le===lt&&Ce(nt.start+nt.count-1,w.width,4)===Le?Ne.count=Math.max(Ne.count,nt.start+nt.count-Ne.start):(++Ke,fe[Ke]=nt)}fe.length=Ke+1;const Ee=n.getParameter(n.UNPACK_ROW_LENGTH),We=n.getParameter(n.UNPACK_SKIP_PIXELS),Xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Te=0,Ne=fe.length;Te<Ne;Te++){const nt=fe[Te],Ye=Math.floor(nt.start/4),Le=Math.ceil(nt.count/4),lt=Ye%w.width,G=Math.floor(Ye/w.width),Me=Le,Re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,lt,G,Me,Re,Z,he,w.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ee),n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,Xe)}}function Q(L,w,Z){let he=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=n.TEXTURE_3D);const ve=ge(L,w),fe=w.source;t.bindTexture(he,L.__webglTexture,n.TEXTURE0+Z);const Ke=r.get(fe);if(fe.version!==Ke.__version||ve===!0){t.activeTexture(n.TEXTURE0+Z);const Ee=Rt.getPrimaries(Rt.workingColorSpace),We=w.colorSpace===Vr?null:Rt.getPrimaries(w.colorSpace),Xe=w.colorSpace===Vr||Ee===We?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Te=T(w.image,!1,o.maxTextureSize);Te=Bt(w,Te);const Ne=l.convert(w.format,w.colorSpace),nt=l.convert(w.type);let Ye=R(w.internalFormat,Ne,nt,w.colorSpace,w.isVideoTexture);re(he,w);let Le;const lt=w.mipmaps,G=w.isVideoTexture!==!0,Me=Ke.__version===void 0||ve===!0,Re=fe.dataReady,ze=N(w,Te);if(w.isDepthTexture)Ye=A(w.format===Ua,w.type),Me&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ye,Te.width,Te.height):t.texImage2D(n.TEXTURE_2D,0,Ye,Te.width,Te.height,0,Ne,nt,null));else if(w.isDataTexture)if(lt.length>0){G&&Me&&t.texStorage2D(n.TEXTURE_2D,ze,Ye,lt[0].width,lt[0].height);for(let xe=0,te=lt.length;xe<te;xe++)Le=lt[xe],G?Re&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Le.width,Le.height,Ne,nt,Le.data):t.texImage2D(n.TEXTURE_2D,xe,Ye,Le.width,Le.height,0,Ne,nt,Le.data);w.generateMipmaps=!1}else G?(Me&&t.texStorage2D(n.TEXTURE_2D,ze,Ye,Te.width,Te.height),Re&&be(w,Te,Ne,nt)):t.texImage2D(n.TEXTURE_2D,0,Ye,Te.width,Te.height,0,Ne,nt,Te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,Ye,lt[0].width,lt[0].height,Te.depth);for(let xe=0,te=lt.length;xe<te;xe++)if(Le=lt[xe],w.format!==bi)if(Ne!==null)if(G){if(Re)if(w.layerUpdates.size>0){const Pe=K0(Le.width,Le.height,w.format,w.type);for(const Ze of w.layerUpdates){const mt=Le.data.subarray(Ze*Pe/Le.data.BYTES_PER_ELEMENT,(Ze+1)*Pe/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,Ze,Le.width,Le.height,1,Ne,mt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Le.width,Le.height,Te.depth,Ne,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Ye,Le.width,Le.height,Te.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Le.width,Le.height,Te.depth,Ne,nt,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Ye,Le.width,Le.height,Te.depth,0,Ne,nt,Le.data)}else{G&&Me&&t.texStorage2D(n.TEXTURE_2D,ze,Ye,lt[0].width,lt[0].height);for(let xe=0,te=lt.length;xe<te;xe++)Le=lt[xe],w.format!==bi?Ne!==null?G?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Le.width,Le.height,Ne,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Re&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Le.width,Le.height,Ne,nt,Le.data):t.texImage2D(n.TEXTURE_2D,xe,Ye,Le.width,Le.height,0,Ne,nt,Le.data)}else if(w.isDataArrayTexture)if(G){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,Ye,Te.width,Te.height,Te.depth),Re)if(w.layerUpdates.size>0){const xe=K0(Te.width,Te.height,w.format,w.type);for(const te of w.layerUpdates){const Pe=Te.data.subarray(te*xe/Te.data.BYTES_PER_ELEMENT,(te+1)*xe/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,Te.width,Te.height,1,Ne,nt,Pe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ne,nt,Te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ye,Te.width,Te.height,Te.depth,0,Ne,nt,Te.data);else if(w.isData3DTexture)G?(Me&&t.texStorage3D(n.TEXTURE_3D,ze,Ye,Te.width,Te.height,Te.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ne,nt,Te.data)):t.texImage3D(n.TEXTURE_3D,0,Ye,Te.width,Te.height,Te.depth,0,Ne,nt,Te.data);else if(w.isFramebufferTexture){if(Me)if(G)t.texStorage2D(n.TEXTURE_2D,ze,Ye,Te.width,Te.height);else{let xe=Te.width,te=Te.height;for(let Pe=0;Pe<ze;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ye,xe,te,0,Ne,nt,null),xe>>=1,te>>=1}}else if(lt.length>0){if(G&&Me){const xe=_t(lt[0]);t.texStorage2D(n.TEXTURE_2D,ze,Ye,xe.width,xe.height)}for(let xe=0,te=lt.length;xe<te;xe++)Le=lt[xe],G?Re&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ne,nt,Le):t.texImage2D(n.TEXTURE_2D,xe,Ye,Ne,nt,Le);w.generateMipmaps=!1}else if(G){if(Me){const xe=_t(Te);t.texStorage2D(n.TEXTURE_2D,ze,Ye,xe.width,xe.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,nt,Te)}else t.texImage2D(n.TEXTURE_2D,0,Ye,Ne,nt,Te);S(w)&&y(he),Ke.__version=fe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ce(L,w,Z){if(w.image.length!==6)return;const he=ge(L,w),ve=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Z);const fe=r.get(ve);if(ve.version!==fe.__version||he===!0){t.activeTexture(n.TEXTURE0+Z);const Ke=Rt.getPrimaries(Rt.workingColorSpace),Ee=w.colorSpace===Vr?null:Rt.getPrimaries(w.colorSpace),We=w.colorSpace===Vr||Ke===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,Te=w.image[0]&&w.image[0].isDataTexture,Ne=[];for(let te=0;te<6;te++)!Xe&&!Te?Ne[te]=T(w.image[te],!0,o.maxCubemapSize):Ne[te]=Te?w.image[te].image:w.image[te],Ne[te]=Bt(w,Ne[te]);const nt=Ne[0],Ye=l.convert(w.format,w.colorSpace),Le=l.convert(w.type),lt=R(w.internalFormat,Ye,Le,w.colorSpace),G=w.isVideoTexture!==!0,Me=fe.__version===void 0||he===!0,Re=ve.dataReady;let ze=N(w,nt);re(n.TEXTURE_CUBE_MAP,w);let xe;if(Xe){G&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,lt,nt.width,nt.height);for(let te=0;te<6;te++){xe=Ne[te].mipmaps;for(let Pe=0;Pe<xe.length;Pe++){const Ze=xe[Pe];w.format!==bi?Ye!==null?G?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Ze.width,Ze.height,Ye,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,lt,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Ze.width,Ze.height,Ye,Le,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,lt,Ze.width,Ze.height,0,Ye,Le,Ze.data)}}}else{if(xe=w.mipmaps,G&&Me){xe.length>0&&ze++;const te=_t(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,lt,te.width,te.height)}for(let te=0;te<6;te++)if(Te){G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne[te].width,Ne[te].height,Ye,Le,Ne[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,lt,Ne[te].width,Ne[te].height,0,Ye,Le,Ne[te].data);for(let Pe=0;Pe<xe.length;Pe++){const mt=xe[Pe].image[te].image;G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,mt.width,mt.height,Ye,Le,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,lt,mt.width,mt.height,0,Ye,Le,mt.data)}}else{G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ye,Le,Ne[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,lt,Ye,Le,Ne[te]);for(let Pe=0;Pe<xe.length;Pe++){const Ze=xe[Pe];G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,Ye,Le,Ze.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,lt,Ye,Le,Ze.image[te])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),fe.__version=ve.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function pe(L,w,Z,he,ve,fe){const Ke=l.convert(Z.format,Z.colorSpace),Ee=l.convert(Z.type),We=R(Z.internalFormat,Ke,Ee,Z.colorSpace),Xe=r.get(w),Te=r.get(Z);if(Te.__renderTarget=w,!Xe.__hasExternalTextures){const Ne=Math.max(1,w.width>>fe),nt=Math.max(1,w.height>>fe);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,fe,We,Ne,nt,w.depth,0,Ke,Ee,null):t.texImage2D(ve,fe,We,Ne,nt,0,Ke,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Be(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,ve,Te.__webglTexture,0,Dt(w)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,he,ve,Te.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(L,w,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const he=w.depthTexture,ve=he&&he.isDepthTexture?he.type:null,fe=A(w.stencilBuffer,ve),Ke=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=Dt(w);Be(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,fe,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,fe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ke,n.RENDERBUFFER,L)}else{const he=w.textures;for(let ve=0;ve<he.length;ve++){const fe=he[ve],Ke=l.convert(fe.format,fe.colorSpace),Ee=l.convert(fe.type),We=R(fe.internalFormat,Ke,Ee,fe.colorSpace),Xe=Dt(w);Z&&Be(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,We,w.width,w.height):Be(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,We,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,We,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(w.depthTexture);he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),de(w.depthTexture,0);const ve=he.__webglTexture,fe=Dt(w);if(w.depthTexture.format===Na)Be(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Ua)Be(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function pt(L){const w=r.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=he}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const he=L.texture.mipmaps;he&&he.length>0?ke(w.__webglFramebuffer[0],L):ke(w.__webglFramebuffer,L)}else if(Z){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=n.createRenderbuffer(),Ie(w.__webglDepthbuffer[he],L,!1);else{const ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[he];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,fe)}}else{const he=L.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ie(w.__webglDepthbuffer,L,!1);else{const ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(L,w,Z){const he=r.get(L);w!==void 0&&pe(he.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&pt(L)}function z(L){const w=L.texture,Z=r.get(L),he=r.get(w);L.addEventListener("dispose",k);const ve=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Ke=ve.length>1;if(Ke||(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=w.version,u.memory.textures++),fe){Z.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Ee]=[];for(let We=0;We<w.mipmaps.length;We++)Z.__webglFramebuffer[Ee][We]=n.createFramebuffer()}else Z.__webglFramebuffer[Ee]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)Z.__webglFramebuffer[Ee]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Ke)for(let Ee=0,We=ve.length;Ee<We;Ee++){const Xe=r.get(ve[Ee]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),u.memory.textures++)}if(L.samples>0&&Be(L)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ve.length;Ee++){const We=ve[Ee];Z.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee]);const Xe=l.convert(We.format,We.colorSpace),Te=l.convert(We.type),Ne=R(We.internalFormat,Xe,Te,We.colorSpace,L.isXRRenderTarget===!0),nt=Dt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,Ne,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),re(n.TEXTURE_CUBE_MAP,w);for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let We=0;We<w.mipmaps.length;We++)pe(Z.__webglFramebuffer[Ee][We],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We);else pe(Z.__webglFramebuffer[Ee],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ee=0,We=ve.length;Ee<We;Ee++){const Xe=ve[Ee],Te=r.get(Xe);let Ne=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Te.__webglTexture),re(Ne,Xe),pe(Z.__webglFramebuffer,L,Xe,n.COLOR_ATTACHMENT0+Ee,Ne,0),S(Xe)&&y(Ne)}t.unbindTexture()}else{let Ee=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,he.__webglTexture),re(Ee,w),w.mipmaps&&w.mipmaps.length>0)for(let We=0;We<w.mipmaps.length;We++)pe(Z.__webglFramebuffer[We],L,w,n.COLOR_ATTACHMENT0,Ee,We);else pe(Z.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,Ee,0);S(w)&&y(Ee),t.unbindTexture()}L.depthBuffer&&pt(L)}function At(L){const w=L.textures;for(let Z=0,he=w.length;Z<he;Z++){const ve=w[Z];if(S(ve)){const fe=D(L),Ke=r.get(ve).__webglTexture;t.bindTexture(fe,Ke),y(fe),t.unbindTexture()}}}const ft=[],tt=[];function Ge(L){if(L.samples>0){if(Be(L)===!1){const w=L.textures,Z=L.width,he=L.height;let ve=n.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ke=r.get(L),Ee=w.length>1;if(Ee)for(let Xe=0;Xe<w.length;Xe++)t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const We=L.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Xe=0;Xe<w.length;Xe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ke.__webglColorRenderbuffer[Xe]);const Te=r.get(w[Xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,Z,he,0,0,Z,he,ve,n.NEAREST),d===!0&&(ft.length=0,tt.length=0,ft.push(n.COLOR_ATTACHMENT0+Xe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ft.push(fe),tt.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,tt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let Xe=0;Xe<w.length;Xe++){t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,Ke.__webglColorRenderbuffer[Xe]);const Te=r.get(w[Xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Dt(L){return Math.min(o.maxSamples,L.samples)}function Be(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ut(L){const w=u.render.frame;m.get(L)!==w&&(m.set(L,w),L.update())}function Bt(L,w){const Z=L.colorSpace,he=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Ro&&Z!==Vr&&(Rt.getTransfer(Z)===kt?(he!==bi||ve!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function _t(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=ie,this.resetTextureUnits=q,this.setTexture2D=de,this.setTexture2DArray=K,this.setTexture3D=se,this.setTextureCube=B,this.rebindTextures=Ht,this.setupRenderTarget=z,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Be}function ND(n,e){function t(r,o=Vr){let l;const u=Rt.getTransfer(o);if(r===fr)return n.UNSIGNED_BYTE;if(r===wp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ap)return n.UNSIGNED_SHORT_5_5_5_1;if(r===ux)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===cx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===ax)return n.BYTE;if(r===lx)return n.SHORT;if(r===La)return n.UNSIGNED_SHORT;if(r===Tp)return n.INT;if(r===Rs)return n.UNSIGNED_INT;if(r===ar)return n.FLOAT;if(r===Va)return n.HALF_FLOAT;if(r===fx)return n.ALPHA;if(r===dx)return n.RGB;if(r===bi)return n.RGBA;if(r===Na)return n.DEPTH_COMPONENT;if(r===Ua)return n.DEPTH_STENCIL;if(r===hx)return n.RED;if(r===Cp)return n.RED_INTEGER;if(r===px)return n.RG;if(r===Rp)return n.RG_INTEGER;if(r===bp)return n.RGBA_INTEGER;if(r===Iu||r===Nu||r===Uu||r===Fu)if(u===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Iu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Iu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hh||r===ph||r===mh||r===gh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===hh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ph)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vh||r===_h||r===yh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===vh||r===_h)return u===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===yh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xh||r===Sh||r===Eh||r===Mh||r===Th||r===wh||r===Ah||r===Ch||r===Rh||r===bh||r===Ph||r===Dh||r===Lh||r===Ih)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===xh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Th)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ah)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ch)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ph)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ih)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nh||r===Uh||r===Fh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Nh)return u===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Oh||r===kh||r===Bh||r===zh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Oh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===kh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ia?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const UD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FD=`
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

}`;class OD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Rx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new hr({vertexShader:UD,fragmentShader:FD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vi(new Qu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kD extends Io{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,m=null,p=null,v=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",S=new OD,y={},D=t.getContextAttributes();let R=null,A=null;const N=[],I=[],k=new bt;let F=null;const P=new di;P.viewport=new rn;const C=new di;C.viewport=new rn;const V=[P,C],q=new rR;let ie=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=N[Q];return ce===void 0&&(ce=new Ed,N[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=N[Q];return ce===void 0&&(ce=new Ed,N[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=N[Q];return ce===void 0&&(ce=new Ed,N[Q]=ce),ce.getHandSpace()};function de(Q){const ce=I.indexOf(Q.inputSource);if(ce===-1)return;const pe=N[ce];pe!==void 0&&(pe.update(Q.inputSource,Q.frame,h||u),pe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){o.removeEventListener("select",de),o.removeEventListener("selectstart",de),o.removeEventListener("selectend",de),o.removeEventListener("squeeze",de),o.removeEventListener("squeezestart",de),o.removeEventListener("squeezeend",de),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",se);for(let Q=0;Q<N.length;Q++){const ce=I[Q];ce!==null&&(I[Q]=null,N[Q].disconnect(ce))}ie=null,ue=null,S.reset();for(const Q in y)delete y[Q];e.setRenderTarget(R),x=null,v=null,p=null,o=null,A=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(o,t)),p},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",de),o.addEventListener("selectstart",de),o.addEventListener("selectend",de),o.addEventListener("squeeze",de),o.addEventListener("squeezestart",de),o.addEventListener("squeezeend",de),o.addEventListener("end",K),o.addEventListener("inputsourceschange",se),D.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(k),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,ke=null;D.depth&&(ke=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=D.stencil?Ua:Na,Ie=D.stencil?Ia:Rs);const pt={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:l};p=this.getBinding(),v=p.createProjectionLayer(pt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new bs(v.textureWidth,v.textureHeight,{format:bi,type:fr,depthTexture:new Cx(v.textureWidth,v.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const pe={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new bs(x.framebufferWidth,x.framebufferHeight,{format:bi,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),be.setContext(o),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function se(Q){for(let ce=0;ce<Q.removed.length;ce++){const pe=Q.removed[ce],Ie=I.indexOf(pe);Ie>=0&&(I[Ie]=null,N[Ie].disconnect(pe))}for(let ce=0;ce<Q.added.length;ce++){const pe=Q.added[ce];let Ie=I.indexOf(pe);if(Ie===-1){for(let pt=0;pt<N.length;pt++)if(pt>=I.length){I.push(pe),Ie=pt;break}else if(I[pt]===null){I[pt]=pe,Ie=pt;break}if(Ie===-1)break}const ke=N[Ie];ke&&ke.connect(pe)}}const B=new ne,ee=new ne;function $(Q,ce,pe){B.setFromMatrixPosition(ce.matrixWorld),ee.setFromMatrixPosition(pe.matrixWorld);const Ie=B.distanceTo(ee),ke=ce.projectionMatrix.elements,pt=pe.projectionMatrix.elements,Ht=ke[14]/(ke[10]-1),z=ke[14]/(ke[10]+1),At=(ke[9]+1)/ke[5],ft=(ke[9]-1)/ke[5],tt=(ke[8]-1)/ke[0],Ge=(pt[8]+1)/pt[0],Dt=Ht*tt,Be=Ht*Ge,ut=Ie/(-tt+Ge),Bt=ut*-tt;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Bt),Q.translateZ(ut),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ke[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const _t=Ht+ut,L=z+ut,w=Dt-Bt,Z=Be+(Ie-Bt),he=At*z/L*_t,ve=ft*z/L*_t;Q.projectionMatrix.makePerspective(w,Z,he,ve,_t,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function O(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let ce=Q.near,pe=Q.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(pe=S.depthFar)),q.near=C.near=P.near=ce,q.far=C.far=P.far=pe,(ie!==q.near||ue!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),ie=q.near,ue=q.far),q.layers.mask=Q.layers.mask|6,P.layers.mask=q.layers.mask&3,C.layers.mask=q.layers.mask&5;const Ie=Q.parent,ke=q.cameras;O(q,Ie);for(let pt=0;pt<ke.length;pt++)O(ke[pt],Ie);ke.length===2?$(q,P,C):q.projectionMatrix.copy(P.projectionMatrix),re(Q,q,Ie)};function re(Q,ce,pe){pe===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(pe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Vh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(Q){d=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(Q){return y[Q]};let ge=null;function Ce(Q,ce){if(m=ce.getViewerPose(h||u),E=ce,m!==null){const pe=m.views;x!==null&&(e.setRenderTargetFramebuffer(A,x.framebuffer),e.setRenderTarget(A));let Ie=!1;pe.length!==q.cameras.length&&(q.cameras.length=0,Ie=!0);for(let z=0;z<pe.length;z++){const At=pe[z];let ft=null;if(x!==null)ft=x.getViewport(At);else{const Ge=p.getViewSubImage(v,At);ft=Ge.viewport,z===0&&(e.setRenderTargetTextures(A,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(A))}let tt=V[z];tt===void 0&&(tt=new di,tt.layers.enable(z),tt.viewport=new rn,V[z]=tt),tt.matrix.fromArray(At.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(At.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ft.x,ft.y,ft.width,ft.height),z===0&&(q.matrix.copy(tt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ie===!0&&q.cameras.push(tt)}const ke=o.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){p=r.getBinding();const z=p.getDepthInformation(pe[0]);z&&z.isValid&&z.texture&&S.init(z,o.renderState)}if(ke&&ke.includes("camera-access")&&T){e.state.unbindTexture(),p=r.getBinding();for(let z=0;z<pe.length;z++){const At=pe[z].camera;if(At){let ft=y[At];ft||(ft=new Rx,y[At]=ft);const tt=p.getCameraImage(At);ft.sourceTexture=tt}}}}for(let pe=0;pe<N.length;pe++){const Ie=I[pe],ke=N[pe];Ie!==null&&ke!==void 0&&ke.update(Ie,ce,h||u)}ge&&ge(Q,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),E=null}const be=new bx;be.setAnimationLoop(Ce),this.setAnimationLoop=function(Q){ge=Q},this.dispose=function(){}}}const ms=new dr,BD=new fn;function zD(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Mx(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,D,R,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),p(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,A)):y.isMeshMatcapMaterial?(l(S,y),E(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),T(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?d(S,y,D,R):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Yn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Yn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),R=D.envMap,A=D.envMapRotation;R&&(S.envMap.value=R,ms.copy(A),ms.x*=-1,ms.y*=-1,ms.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),S.envMapRotation.value.setFromMatrix4(BD.makeRotationFromEuler(ms)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,D,R){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=R*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function p(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function VD(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,R){const A=R.program;r.uniformBlockBinding(D,A)}function h(D,R){let A=o[D.id];A===void 0&&(E(D),A=m(D),o[D.id]=A,D.addEventListener("dispose",S));const N=R.program;r.updateUBOMapping(D,N);const I=e.render.frame;l[D.id]!==I&&(v(D),l[D.id]=I)}function m(D){const R=p();D.__bindingPointIndex=R;const A=n.createBuffer(),N=D.__size,I=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,N,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,A),A}function p(){for(let D=0;D<c;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const R=o[D.id],A=D.uniforms,N=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let I=0,k=A.length;I<k;I++){const F=Array.isArray(A[I])?A[I]:[A[I]];for(let P=0,C=F.length;P<C;P++){const V=F[P];if(x(V,I,P,N)===!0){const q=V.__offset,ie=Array.isArray(V.value)?V.value:[V.value];let ue=0;for(let de=0;de<ie.length;de++){const K=ie[de],se=T(K);typeof K=="number"||typeof K=="boolean"?(V.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,q+ue,V.__data)):K.isMatrix3?(V.__data[0]=K.elements[0],V.__data[1]=K.elements[1],V.__data[2]=K.elements[2],V.__data[3]=0,V.__data[4]=K.elements[3],V.__data[5]=K.elements[4],V.__data[6]=K.elements[5],V.__data[7]=0,V.__data[8]=K.elements[6],V.__data[9]=K.elements[7],V.__data[10]=K.elements[8],V.__data[11]=0):(K.toArray(V.__data,ue),ue+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(D,R,A,N){const I=D.value,k=R+"_"+A;if(N[k]===void 0)return typeof I=="number"||typeof I=="boolean"?N[k]=I:N[k]=I.clone(),!0;{const F=N[k];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return N[k]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function E(D){const R=D.uniforms;let A=0;const N=16;for(let k=0,F=R.length;k<F;k++){const P=Array.isArray(R[k])?R[k]:[R[k]];for(let C=0,V=P.length;C<V;C++){const q=P[C],ie=Array.isArray(q.value)?q.value:[q.value];for(let ue=0,de=ie.length;ue<de;ue++){const K=ie[ue],se=T(K),B=A%N,ee=B%se.boundary,$=B+ee;A+=ee,$!==0&&N-$<se.storage&&(A+=N-$),q.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=se.storage}}}const I=A%N;return I>0&&(A+=N-I),D.__size=A,D.__cache={},this}function T(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function S(D){const R=D.target;R.removeEventListener("dispose",S);const A=u.indexOf(R.__bindingPointIndex);u.splice(A,1),n.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function y(){for(const D in o)n.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class HD{constructor(e={}){const{canvas:t=TC(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const D=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=fi;let I=0,k=0,F=null,P=-1,C=null;const V=new rn,q=new rn;let ie=null;const ue=new Ft(0);let de=0,K=t.width,se=t.height,B=1,ee=null,$=null;const O=new rn(0,0,K,se),re=new rn(0,0,K,se);let ge=!1;const Ce=new Ax;let be=!1,Q=!1;const ce=new fn,pe=new ne,Ie=new rn,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Ht(){return F===null?B:1}let z=r;function At(b,j){return t.getContext(b,j)}try{const b={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mp}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",xe,!1),z===null){const j="webgl2";if(z=At(j,b),z===null)throw At(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ft,tt,Ge,Dt,Be,ut,Bt,_t,L,w,Z,he,ve,fe,Ke,Ee,We,Xe,Te,Ne,nt,Ye,Le,lt;function G(){ft=new QP(z),ft.init(),Ye=new ND(z,ft),tt=new XP(z,ft,e,Ye),Ge=new LD(z,ft),tt.reversedDepthBuffer&&v&&Ge.buffers.depth.setReversed(!0),Dt=new t2(z),Be=new yD,ut=new ID(z,ft,Ge,Be,tt,Ye,Dt),Bt=new YP(A),_t=new ZP(A),L=new aR(z),Le=new GP(z,L),w=new JP(z,L,Dt,Le),Z=new i2(z,w,L,Dt),Te=new n2(z,tt,ut),Ee=new jP(Be),he=new _D(A,Bt,_t,ft,tt,Le,Ee),ve=new zD(A,Be),fe=new SD,Ke=new CD(ft),Xe=new HP(A,Bt,_t,Ge,Z,x,d),We=new PD(A,Z,tt),lt=new VD(z,Dt,tt,Ge),Ne=new WP(z,ft,Dt),nt=new e2(z,ft,Dt),Dt.programs=he.programs,A.capabilities=tt,A.extensions=ft,A.properties=Be,A.renderLists=fe,A.shadowMap=We,A.state=Ge,A.info=Dt}G();const Me=new kD(A,z);this.xr=Me,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(K,se,!1))},this.getSize=function(b){return b.set(K,se)},this.setSize=function(b,j,ae=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,se=j,t.width=Math.floor(b*B),t.height=Math.floor(j*B),ae===!0&&(t.style.width=b+"px",t.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(K*B,se*B).floor()},this.setDrawingBufferSize=function(b,j,ae){K=b,se=j,B=ae,t.width=Math.floor(b*ae),t.height=Math.floor(j*ae),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,j,ae,le){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,j,ae,le),Ge.viewport(V.copy(O).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,j,ae,le){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,j,ae,le),Ge.scissor(q.copy(re).multiplyScalar(B).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(b){Ge.setScissorTest(ge=b)},this.setOpaqueSort=function(b){ee=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(b=!0,j=!0,ae=!0){let le=0;if(b){let X=!1;if(F!==null){const we=F.texture.format;X=we===bp||we===Rp||we===Cp}if(X){const we=F.texture.type,Ue=we===fr||we===Rs||we===La||we===Ia||we===wp||we===Ap,qe=Xe.getClearColor(),Ve=Xe.getClearAlpha(),ot=qe.r,at=qe.g,et=qe.b;Ue?(E[0]=ot,E[1]=at,E[2]=et,E[3]=Ve,z.clearBufferuiv(z.COLOR,0,E)):(T[0]=ot,T[1]=at,T[2]=et,T[3]=Ve,z.clearBufferiv(z.COLOR,0,T))}else le|=z.COLOR_BUFFER_BIT}j&&(le|=z.DEPTH_BUFFER_BIT),ae&&(le|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Xe.dispose(),fe.dispose(),Ke.dispose(),Be.dispose(),Bt.dispose(),_t.dispose(),Z.dispose(),Le.dispose(),lt.dispose(),he.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Nt),Me.removeEventListener("sessionend",mi),Wt.stop()};function Re(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const b=Dt.autoReset,j=We.enabled,ae=We.autoUpdate,le=We.needsUpdate,X=We.type;G(),Dt.autoReset=b,We.enabled=j,We.autoUpdate=ae,We.needsUpdate=le,We.type=X}function xe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function te(b){const j=b.target;j.removeEventListener("dispose",te),Pe(j)}function Pe(b){Ze(b),Be.remove(b)}function Ze(b){const j=Be.get(b).programs;j!==void 0&&(j.forEach(function(ae){he.releaseProgram(ae)}),b.isShaderMaterial&&he.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,ae,le,X,we){j===null&&(j=ke);const Ue=X.isMesh&&X.matrixWorld.determinant()<0,qe=ji(b,j,ae,le,X);Ge.setMaterial(le,Ue);let Ve=ae.index,ot=1;if(le.wireframe===!0){if(Ve=w.getWireframeAttribute(ae),Ve===void 0)return;ot=2}const at=ae.drawRange,et=ae.attributes.position;let dt=at.start*ot,It=(at.start+at.count)*ot;we!==null&&(dt=Math.max(dt,we.start*ot),It=Math.min(It,(we.start+we.count)*ot)),Ve!==null?(dt=Math.max(dt,0),It=Math.min(It,Ve.count)):et!=null&&(dt=Math.max(dt,0),It=Math.min(It,et.count));const Tt=It-dt;if(Tt<0||Tt===1/0)return;Le.setup(X,le,qe,ae,Ve);let zt,Ut=Ne;if(Ve!==null&&(zt=L.get(Ve),Ut=nt,Ut.setIndex(zt)),X.isMesh)le.wireframe===!0?(Ge.setLineWidth(le.wireframeLinewidth*Ht()),Ut.setMode(z.LINES)):Ut.setMode(z.TRIANGLES);else if(X.isLine){let it=le.linewidth;it===void 0&&(it=1),Ge.setLineWidth(it*Ht()),X.isLineSegments?Ut.setMode(z.LINES):X.isLineLoop?Ut.setMode(z.LINE_LOOP):Ut.setMode(z.LINE_STRIP)}else X.isPoints?Ut.setMode(z.POINTS):X.isSprite&&Ut.setMode(z.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Fa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Ut.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const it=X._multiDrawStarts,Ot=X._multiDrawCounts,St=X._multiDrawCount,ln=Ve?L.get(Ve).bytesPerElement:1,vi=Be.get(le).currentProgram.getUniforms();for(let Ln=0;Ln<St;Ln++)vi.setValue(z,"_gl_DrawID",Ln),Ut.render(it[Ln]/ln,Ot[Ln])}else if(X.isInstancedMesh)Ut.renderInstances(dt,Tt,X.count);else if(ae.isInstancedBufferGeometry){const it=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ot=Math.min(ae.instanceCount,it);Ut.renderInstances(dt,Tt,Ot)}else Ut.render(dt,Tt)};function mt(b,j,ae){b.transparent===!0&&b.side===ki&&b.forceSinglePass===!1?(b.side=Yn,b.needsUpdate=!0,Ds(b,j,ae),b.side=jr,b.needsUpdate=!0,Ds(b,j,ae),b.side=ki):Ds(b,j,ae)}this.compile=function(b,j,ae=null){ae===null&&(ae=b),y=Ke.get(ae),y.init(j),R.push(y),ae.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),b!==ae&&b.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const le=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let Ue=0;Ue<we.length;Ue++){const qe=we[Ue];mt(qe,ae,X),le.add(qe)}else mt(we,ae,X),le.add(we)}),y=R.pop(),le},this.compileAsync=function(b,j,ae=null){const le=this.compile(b,j,ae);return new Promise(X=>{function we(){if(le.forEach(function(Ue){Be.get(Ue).currentProgram.isReady()&&le.delete(Ue)}),le.size===0){X(b);return}setTimeout(we,10)}ft.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let yt=null;function Lt(b){yt&&yt(b)}function Nt(){Wt.stop()}function mi(){Wt.start()}const Wt=new bx;Wt.setAnimationLoop(Lt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(b){yt=b,Me.setAnimationLoop(b),b===null?Wt.stop():Wt.start()},Me.addEventListener("sessionstart",Nt),Me.addEventListener("sessionend",mi),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(j),j=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,j,F),y=Ke.get(b,R.length),y.init(j),R.push(y),ce.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ce.setFromProjectionMatrix(ce,zi,j.reversedDepth),Q=this.localClippingEnabled,be=Ee.init(this.clippingPlanes,Q),S=fe.get(b,D.length),S.init(),D.push(S),Me.enabled===!0&&Me.isPresenting===!0){const we=A.xr.getDepthSensingMesh();we!==null&&_n(we,j,-1/0,A.sortObjects)}_n(b,j,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(ee,$),pt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,pt&&Xe.addToRenderList(S,b),this.info.render.frame++,be===!0&&Ee.beginShadows();const ae=y.state.shadowsArray;We.render(ae,b,j),be===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=S.opaque,X=S.transmissive;if(y.setupLights(),j.isArrayCamera){const we=j.cameras;if(X.length>0)for(let Ue=0,qe=we.length;Ue<qe;Ue++){const Ve=we[Ue];Dn(le,X,b,Ve)}pt&&Xe.render(b);for(let Ue=0,qe=we.length;Ue<qe;Ue++){const Ve=we[Ue];gi(S,b,Ve,Ve.viewport)}}else X.length>0&&Dn(le,X,b,j),pt&&Xe.render(b),gi(S,b,j);F!==null&&k===0&&(ut.updateMultisampleRenderTarget(F),ut.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(A,b,j),Le.resetDefaultState(),P=-1,C=null,R.pop(),R.length>0?(y=R[R.length-1],be===!0&&Ee.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function _n(b,j,ae,le){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)ae=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ce.intersectsSprite(b)){le&&Ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);const Ue=Z.update(b),qe=b.material;qe.visible&&S.push(b,Ue,qe,ae,Ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ce.intersectsObject(b))){const Ue=Z.update(b),qe=b.material;if(le&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ie.copy(b.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ie.copy(Ue.boundingSphere.center)),Ie.applyMatrix4(b.matrixWorld).applyMatrix4(ce)),Array.isArray(qe)){const Ve=Ue.groups;for(let ot=0,at=Ve.length;ot<at;ot++){const et=Ve[ot],dt=qe[et.materialIndex];dt&&dt.visible&&S.push(b,Ue,dt,ae,Ie.z,et)}}else qe.visible&&S.push(b,Ue,qe,ae,Ie.z,null)}}const we=b.children;for(let Ue=0,qe=we.length;Ue<qe;Ue++)_n(we[Ue],j,ae,le)}function gi(b,j,ae,le){const X=b.opaque,we=b.transmissive,Ue=b.transparent;y.setupLightsView(ae),be===!0&&Ee.setGlobalState(A.clippingPlanes,ae),le&&Ge.viewport(V.copy(le)),X.length>0&&Di(X,j,ae),we.length>0&&Di(we,j,ae),Ue.length>0&&Di(Ue,j,ae),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Dn(b,j,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[le.id]===void 0&&(y.state.transmissionRenderTarget[le.id]=new bs(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Va:fr,minFilter:Ts,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const we=y.state.transmissionRenderTarget[le.id],Ue=le.viewport||V;we.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);const qe=A.getRenderTarget(),Ve=A.getActiveCubeFace(),ot=A.getActiveMipmapLevel();A.setRenderTarget(we),A.getClearColor(ue),de=A.getClearAlpha(),de<1&&A.setClearColor(16777215,.5),A.clear(),pt&&Xe.render(ae);const at=A.toneMapping;A.toneMapping=Gr;const et=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),y.setupLightsView(le),be===!0&&Ee.setGlobalState(A.clippingPlanes,le),Di(b,ae,le),ut.updateMultisampleRenderTarget(we),ut.updateRenderTargetMipmap(we),ft.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let It=0,Tt=j.length;It<Tt;It++){const zt=j[It],Ut=zt.object,it=zt.geometry,Ot=zt.material,St=zt.group;if(Ot.side===ki&&Ut.layers.test(le.layers)){const ln=Ot.side;Ot.side=Yn,Ot.needsUpdate=!0,Ps(Ut,ae,le,it,Ot,St),Ot.side=ln,Ot.needsUpdate=!0,dt=!0}}dt===!0&&(ut.updateMultisampleRenderTarget(we),ut.updateRenderTargetMipmap(we))}A.setRenderTarget(qe,Ve,ot),A.setClearColor(ue,de),et!==void 0&&(le.viewport=et),A.toneMapping=at}function Di(b,j,ae){const le=j.isScene===!0?j.overrideMaterial:null;for(let X=0,we=b.length;X<we;X++){const Ue=b[X],qe=Ue.object,Ve=Ue.geometry,ot=Ue.group;let at=Ue.material;at.allowOverride===!0&&le!==null&&(at=le),qe.layers.test(ae.layers)&&Ps(qe,j,ae,Ve,at,ot)}}function Ps(b,j,ae,le,X,we){b.onBeforeRender(A,j,ae,le,X,we),b.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(A,j,ae,le,b,we),X.transparent===!0&&X.side===ki&&X.forceSinglePass===!1?(X.side=Yn,X.needsUpdate=!0,A.renderBufferDirect(ae,j,le,X,b,we),X.side=jr,X.needsUpdate=!0,A.renderBufferDirect(ae,j,le,X,b,we),X.side=ki):A.renderBufferDirect(ae,j,le,X,b,we),b.onAfterRender(A,j,ae,le,X,we)}function Ds(b,j,ae){j.isScene!==!0&&(j=ke);const le=Be.get(b),X=y.state.lights,we=y.state.shadowsArray,Ue=X.state.version,qe=he.getParameters(b,X.state,we,j,ae),Ve=he.getProgramCacheKey(qe);let ot=le.programs;le.environment=b.isMeshStandardMaterial?j.environment:null,le.fog=j.fog,le.envMap=(b.isMeshStandardMaterial?_t:Bt).get(b.envMap||le.environment),le.envMapRotation=le.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,ot===void 0&&(b.addEventListener("dispose",te),ot=new Map,le.programs=ot);let at=ot.get(Ve);if(at!==void 0){if(le.currentProgram===at&&le.lightsStateVersion===Ue)return qa(b,qe),at}else qe.uniforms=he.getUniforms(b),b.onBeforeCompile(qe,A),at=he.acquireProgram(qe,Ve),ot.set(Ve,at),le.uniforms=qe.uniforms;const et=le.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(et.clippingPlanes=Ee.uniform),qa(b,qe),le.needsLights=Ka(b),le.lightsStateVersion=Ue,le.needsLights&&(et.ambientLightColor.value=X.state.ambient,et.lightProbe.value=X.state.probe,et.directionalLights.value=X.state.directional,et.directionalLightShadows.value=X.state.directionalShadow,et.spotLights.value=X.state.spot,et.spotLightShadows.value=X.state.spotShadow,et.rectAreaLights.value=X.state.rectArea,et.ltc_1.value=X.state.rectAreaLTC1,et.ltc_2.value=X.state.rectAreaLTC2,et.pointLights.value=X.state.point,et.pointLightShadows.value=X.state.pointShadow,et.hemisphereLights.value=X.state.hemi,et.directionalShadowMap.value=X.state.directionalShadowMap,et.directionalShadowMatrix.value=X.state.directionalShadowMatrix,et.spotShadowMap.value=X.state.spotShadowMap,et.spotLightMatrix.value=X.state.spotLightMatrix,et.spotLightMap.value=X.state.spotLightMap,et.pointShadowMap.value=X.state.pointShadowMap,et.pointShadowMatrix.value=X.state.pointShadowMatrix),le.currentProgram=at,le.uniformsList=null,at}function Ya(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=Ou.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function qa(b,j){const ae=Be.get(b);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.batchingColor=j.batchingColor,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function ji(b,j,ae,le,X){j.isScene!==!0&&(j=ke),ut.resetTextureUnits();const we=j.fog,Ue=le.isMeshStandardMaterial?j.environment:null,qe=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ro,Ve=(le.isMeshStandardMaterial?_t:Bt).get(le.envMap||Ue),ot=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,at=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),et=!!ae.morphAttributes.position,dt=!!ae.morphAttributes.normal,It=!!ae.morphAttributes.color;let Tt=Gr;le.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Tt=A.toneMapping);const zt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ut=zt!==void 0?zt.length:0,it=Be.get(le),Ot=y.state.lights;if(be===!0&&(Q===!0||b!==C)){const en=b===C&&le.id===P;Ee.setState(le,b,en)}let St=!1;le.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Ot.state.version||it.outputColorSpace!==qe||X.isBatchedMesh&&it.batching===!1||!X.isBatchedMesh&&it.batching===!0||X.isBatchedMesh&&it.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&it.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&it.instancing===!1||!X.isInstancedMesh&&it.instancing===!0||X.isSkinnedMesh&&it.skinning===!1||!X.isSkinnedMesh&&it.skinning===!0||X.isInstancedMesh&&it.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&it.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&it.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&it.instancingMorph===!1&&X.morphTexture!==null||it.envMap!==Ve||le.fog===!0&&it.fog!==we||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Ee.numPlanes||it.numIntersection!==Ee.numIntersection)||it.vertexAlphas!==ot||it.vertexTangents!==at||it.morphTargets!==et||it.morphNormals!==dt||it.morphColors!==It||it.toneMapping!==Tt||it.morphTargetsCount!==Ut)&&(St=!0):(St=!0,it.__version=le.version);let ln=it.currentProgram;St===!0&&(ln=Ds(le,j,X));let vi=!1,Ln=!1,$r=!1;const Vt=ln.getUniforms(),In=it.uniforms;if(Ge.useProgram(ln.program)&&(vi=!0,Ln=!0,$r=!0),le.id!==P&&(P=le.id,Ln=!0),vi||C!==b){Ge.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Vt.setValue(z,"projectionMatrix",b.projectionMatrix),Vt.setValue(z,"viewMatrix",b.matrixWorldInverse);const Mn=Vt.map.cameraPosition;Mn!==void 0&&Mn.setValue(z,pe.setFromMatrixPosition(b.matrixWorld)),tt.logarithmicDepthBuffer&&Vt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Vt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,Ln=!0,$r=!0)}if(X.isSkinnedMesh){Vt.setOptional(z,X,"bindMatrix"),Vt.setOptional(z,X,"bindMatrixInverse");const en=X.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Vt.setValue(z,"boneTexture",en.boneTexture,ut))}X.isBatchedMesh&&(Vt.setOptional(z,X,"batchingTexture"),Vt.setValue(z,"batchingTexture",X._matricesTexture,ut),Vt.setOptional(z,X,"batchingIdTexture"),Vt.setValue(z,"batchingIdTexture",X._indirectTexture,ut),Vt.setOptional(z,X,"batchingColorTexture"),X._colorsTexture!==null&&Vt.setValue(z,"batchingColorTexture",X._colorsTexture,ut));const En=ae.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Te.update(X,ae,ln),(Ln||it.receiveShadow!==X.receiveShadow)&&(it.receiveShadow=X.receiveShadow,Vt.setValue(z,"receiveShadow",X.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(In.envMap.value=Ve,In.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&j.environment!==null&&(In.envMapIntensity.value=j.environmentIntensity),Ln&&(Vt.setValue(z,"toneMappingExposure",A.toneMappingExposure),it.needsLights&&$a(In,$r),we&&le.fog===!0&&ve.refreshFogUniforms(In,we),ve.refreshMaterialUniforms(In,le,B,se,y.state.transmissionRenderTarget[b.id]),Ou.upload(z,Ya(it),In,ut)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Ou.upload(z,Ya(it),In,ut),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Vt.setValue(z,"center",X.center),Vt.setValue(z,"modelViewMatrix",X.modelViewMatrix),Vt.setValue(z,"normalMatrix",X.normalMatrix),Vt.setValue(z,"modelMatrix",X.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const en=le.uniformsGroups;for(let Mn=0,Kr=en.length;Mn<Kr;Mn++){const Et=en[Mn];lt.update(Et,ln),lt.bind(Et,ln)}}return ln}function $a(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function Ka(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,j,ae){const le=Be.get(b);le.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Be.get(b.texture).__webglTexture=j,Be.get(b.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ae,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,j){const ae=Be.get(b);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0};const ec=z.createFramebuffer();this.setRenderTarget=function(b,j=0,ae=0){F=b,I=j,k=ae;let le=!0,X=null,we=!1,Ue=!1;if(b){const Ve=Be.get(b);if(Ve.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(z.FRAMEBUFFER,null),le=!1;else if(Ve.__webglFramebuffer===void 0)ut.setupRenderTarget(b);else if(Ve.__hasExternalTextures)ut.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const et=b.depthTexture;if(Ve.__boundDepthTexture!==et){if(et!==null&&Be.has(et)&&(b.width!==et.image.width||b.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(b)}}const ot=b.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ue=!0);const at=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(at[j])?X=at[j][ae]:X=at[j],we=!0):b.samples>0&&ut.useMultisampledRTT(b)===!1?X=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(at)?X=at[ae]:X=at,V.copy(b.viewport),q.copy(b.scissor),ie=b.scissorTest}else V.copy(O).multiplyScalar(B).floor(),q.copy(re).multiplyScalar(B).floor(),ie=ge;if(ae!==0&&(X=ec),Ge.bindFramebuffer(z.FRAMEBUFFER,X)&&le&&Ge.drawBuffers(b,X),Ge.viewport(V),Ge.scissor(q),Ge.setScissorTest(ie),we){const Ve=Be.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ve.__webglTexture,ae)}else if(Ue){const Ve=j;for(let ot=0;ot<b.textures.length;ot++){const at=Be.get(b.textures[ot]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ot,at.__webglTexture,ae,Ve)}}else if(b!==null&&ae!==0){const Ve=Be.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ve.__webglTexture,ae)}P=-1},this.readRenderTargetPixels=function(b,j,ae,le,X,we,Ue,qe=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){Ge.bindFramebuffer(z.FRAMEBUFFER,Ve);try{const ot=b.textures[qe],at=ot.format,et=ot.type;if(!tt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-le&&ae>=0&&ae<=b.height-X&&(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+qe),z.readPixels(j,ae,le,X,Ye.convert(at),Ye.convert(et),we))}finally{const ot=F!==null?Be.get(F).__webglFramebuffer:null;Ge.bindFramebuffer(z.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(b,j,ae,le,X,we,Ue,qe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve)if(j>=0&&j<=b.width-le&&ae>=0&&ae<=b.height-X){Ge.bindFramebuffer(z.FRAMEBUFFER,Ve);const ot=b.textures[qe],at=ot.format,et=ot.type;if(!tt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,dt),z.bufferData(z.PIXEL_PACK_BUFFER,we.byteLength,z.STREAM_READ),b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+qe),z.readPixels(j,ae,le,X,Ye.convert(at),Ye.convert(et),0);const It=F!==null?Be.get(F).__webglFramebuffer:null;Ge.bindFramebuffer(z.FRAMEBUFFER,It);const Tt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await wC(z,Tt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,dt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,we),z.deleteBuffer(dt),z.deleteSync(Tt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,j=null,ae=0){const le=Math.pow(2,-ae),X=Math.floor(b.image.width*le),we=Math.floor(b.image.height*le),Ue=j!==null?j.x:0,qe=j!==null?j.y:0;ut.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,ae,0,0,Ue,qe,X,we),Ge.unbindTexture()};const Za=z.createFramebuffer(),Qa=z.createFramebuffer();this.copyTextureToTexture=function(b,j,ae=null,le=null,X=0,we=null){we===null&&(X!==0?(Fa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=X,X=0):we=0);let Ue,qe,Ve,ot,at,et,dt,It,Tt;const zt=b.isCompressedTexture?b.mipmaps[we]:b.image;if(ae!==null)Ue=ae.max.x-ae.min.x,qe=ae.max.y-ae.min.y,Ve=ae.isBox3?ae.max.z-ae.min.z:1,ot=ae.min.x,at=ae.min.y,et=ae.isBox3?ae.min.z:0;else{const En=Math.pow(2,-X);Ue=Math.floor(zt.width*En),qe=Math.floor(zt.height*En),b.isDataArrayTexture?Ve=zt.depth:b.isData3DTexture?Ve=Math.floor(zt.depth*En):Ve=1,ot=0,at=0,et=0}le!==null?(dt=le.x,It=le.y,Tt=le.z):(dt=0,It=0,Tt=0);const Ut=Ye.convert(j.format),it=Ye.convert(j.type);let Ot;j.isData3DTexture?(ut.setTexture3D(j,0),Ot=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ut.setTexture2DArray(j,0),Ot=z.TEXTURE_2D_ARRAY):(ut.setTexture2D(j,0),Ot=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const St=z.getParameter(z.UNPACK_ROW_LENGTH),ln=z.getParameter(z.UNPACK_IMAGE_HEIGHT),vi=z.getParameter(z.UNPACK_SKIP_PIXELS),Ln=z.getParameter(z.UNPACK_SKIP_ROWS),$r=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,zt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,zt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ot),z.pixelStorei(z.UNPACK_SKIP_ROWS,at),z.pixelStorei(z.UNPACK_SKIP_IMAGES,et);const Vt=b.isDataArrayTexture||b.isData3DTexture,In=j.isDataArrayTexture||j.isData3DTexture;if(b.isDepthTexture){const En=Be.get(b),en=Be.get(j),Mn=Be.get(En.__renderTarget),Kr=Be.get(en.__renderTarget);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let Et=0;Et<Ve;Et++)Vt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.get(b).__webglTexture,X,et+Et),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.get(j).__webglTexture,we,Tt+Et)),z.blitFramebuffer(ot,at,Ue,qe,dt,It,Ue,qe,z.DEPTH_BUFFER_BIT,z.NEAREST);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Be.has(b)){const En=Be.get(b),en=Be.get(j);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,Za),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,Qa);for(let Mn=0;Mn<Ve;Mn++)Vt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,En.__webglTexture,X,et+Mn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,En.__webglTexture,X),In?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,en.__webglTexture,we,Tt+Mn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,en.__webglTexture,we),X!==0?z.blitFramebuffer(ot,at,Ue,qe,dt,It,Ue,qe,z.COLOR_BUFFER_BIT,z.NEAREST):In?z.copyTexSubImage3D(Ot,we,dt,It,Tt+Mn,ot,at,Ue,qe):z.copyTexSubImage2D(Ot,we,dt,It,ot,at,Ue,qe);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else In?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(Ot,we,dt,It,Tt,Ue,qe,Ve,Ut,it,zt.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(Ot,we,dt,It,Tt,Ue,qe,Ve,Ut,zt.data):z.texSubImage3D(Ot,we,dt,It,Tt,Ue,qe,Ve,Ut,it,zt):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,we,dt,It,Ue,qe,Ut,it,zt.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,we,dt,It,zt.width,zt.height,Ut,zt.data):z.texSubImage2D(z.TEXTURE_2D,we,dt,It,Ue,qe,Ut,it,zt);z.pixelStorei(z.UNPACK_ROW_LENGTH,St),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ln),z.pixelStorei(z.UNPACK_SKIP_PIXELS,vi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ln),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$r),we===0&&j.generateMipmaps&&z.generateMipmap(Ot),Ge.unbindTexture()},this.initRenderTarget=function(b){Be.get(b).__webglFramebuffer===void 0&&ut.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ut.setTextureCube(b,0):b.isData3DTexture?ut.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ut.setTexture2DArray(b,0):ut.setTexture2D(b,0),Ge.unbindTexture()},this.resetState=function(){I=0,k=0,F=null,Ge.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}function GD(){const n=Fe.useRef(null);return Fe.useEffect(()=>{console.log("Initializing Three.js canvas");const e={backgroundColor:16448250,cameraFOV:90,cameraDistance:2,bubbleSize:1,bubbleDetail:128,speed1:.1,frequency1:.5,intensity1:.1,speed2:.2,frequency2:.9,intensity2:.05,speed3:.2,frequency3:1.5,intensity3:.02,mouseIntensityMultiplier:2,mouseGravityStrength:.2,cameraRotationSpeed:.1,glassColorR:.12,glassColorG:.11,glassColorB:.19,topColorR:.5,topColorG:.65,topColorB:.75,bottomColorR:.7,bottomColorG:.45,bottomColorB:.6,fresnelPower:3,fresnelBlend:.8,highlightPower:50,highlightIntensity:.5,baseTransparency:.1,edgeTransparency:.6,mouseLerpSpeed:.05,mouseInfluenceStrength:1,mouseBlendAmount:.6,mouseColorIntensity:.6};let t,r,o,l,u;const c=new sR,d={x:0,y:0};let h=!1;const m={x:0,y:0};let p=!1,v=0,x=0;const E=n.current;if(!E){console.error("Mount ref is null");return}const T=window.innerWidth,S=T<768,y=Math.min(Math.max(300,T*.8),600),D=S?y*1.15:y,R=D,A=D;t=new ZC,t.background=new Ft(e.backgroundColor),r=new di(e.cameraFOV,R/A,.1,1e3),r.position.z=e.cameraDistance,o=new HD({antialias:!0,alpha:!0}),o.setSize(R,A),o.setPixelRatio(window.devicePixelRatio),E.appendChild(o.domElement);const N=`
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      uniform float time;
      uniform vec2 mousePos;

      // Animation parameters
      uniform float speed1;
      uniform float frequency1;
      uniform float intensity1;
      uniform float speed2;
      uniform float frequency2;
      uniform float intensity2;
      uniform float speed3;
      uniform float frequency3;
      uniform float intensity3;
      uniform float mouseIntensityMultiplier;
      uniform float mouseGravityStrength;

      vec3 mod289(vec3 x) { 
          return x - floor(x * (1.0 / 289.0)) * 289.0; 
      }

      vec4 mod289(vec4 x) { 
          return x - floor(x * (1.0 / 289.0)) * 289.0; 
      }

      vec4 permute(vec4 x) { 
          return mod289(((x * 34.0) + 1.0) * x); 
      }

      vec4 taylorInvSqrt(vec4 r) { 
          return 1.79284291400159 - 0.85373472095314 * r; 
      }

      float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);

          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);

          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;

          i = mod289(i);
          vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));

          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;

          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);

          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);

          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);

          vec4 s0 = floor(b0) * 2.0 + 1.0;
          vec4 s1 = floor(b1) * 2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));

          vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);

          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;

          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
          vNormal = normalize(normalMatrix * normal);

          vec3 pos = position;

          // Calculate mouse distance from center to modulate intensity
          float distanceFromCenter = length(mousePos);
          float intensityMultiplier = 1.0 + (distanceFromCenter * (mouseIntensityMultiplier - 1.0));

          // Apply three layers of noise with mouse-modulated intensities
          float noise = snoise(pos * frequency1 + time * speed1) * intensity1 * intensityMultiplier;
          noise += snoise(pos * frequency2 - time * speed2) * intensity2 * intensityMultiplier;
          noise += snoise(pos * frequency3 + time * speed3) * intensity3 * intensityMultiplier;

          pos += normal * noise;

          // Directional deformation based on mouse position
          // Map mouse position to a pull direction in 3D space
          vec3 pullDirection = normalize(vec3(mousePos.x, mousePos.y, 0.5));

          // Calculate how much each vertex should be affected
          // Vertices aligned with the pull direction get pulled outward
          float alignment = dot(normalize(position), pullDirection);

          // Only pull vertices that face the mouse direction (positive alignment)
          float pullStrength = max(0.0, alignment) * distanceFromCenter * mouseGravityStrength;

          // Apply directional pull along the normal
          pos += normal * pullStrength;

          vPosition = pos;
          vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
          vWorldPosition = worldPosition.xyz;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,I=`
      precision highp float;

      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      uniform float time;
      uniform vec2 mousePos;

      // Appearance parameters
      uniform vec3 glassColor;
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float fresnelPower;
      uniform float fresnelBlend;
      uniform float highlightPower;
      uniform float highlightIntensity;
      uniform float baseTransparency;
      uniform float edgeTransparency;
      uniform float mouseInfluenceStrength;
      uniform float mouseBlendAmount;
      uniform float mouseColorIntensity;

      void main() {
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);

          // Fresnel effect using config parameter
          float fresnel = pow(1.0 - dot(vNormal, viewDirection), fresnelPower);

          // Calculate distance from center (0,0) - when at center, distance is 0
          float distanceFromCenter = length(mousePos);

          // Mouse influence scales with distance from center
          float mouseInfluence = mouseInfluenceStrength * distanceFromCenter;

          // Define corner color pairs (top and bottom for each corner)
          // Top-right: Cyan → Magenta
          vec3 topRight_top = vec3(0.4, 0.8, 1.0);      // Cyan
          vec3 topRight_bottom = vec3(1.0, 0.3, 0.7);   // Magenta

          // Top-left: Cyan → Yellow
          vec3 topLeft_top = vec3(0.4, 0.8, 1.0);       // Cyan
          vec3 topLeft_bottom = vec3(1.0, 0.9, 0.2);    // Yellow

          // Bottom-left: Yellow → Purple
          vec3 bottomLeft_top = vec3(1.0, 0.9, 0.2);    // Yellow
          vec3 bottomLeft_bottom = vec3(0.7, 0.3, 1.0); // Purple

          // Bottom-right: Magenta → Blue
          vec3 bottomRight_top = vec3(1.0, 0.3, 0.7);   // Magenta
          vec3 bottomRight_bottom = vec3(0.3, 0.4, 1.0); // Blue

          // Calculate distance to each corner
          vec2 topRightCorner = vec2(1.0, 1.0);
          vec2 topLeftCorner = vec2(-1.0, 1.0);
          vec2 bottomLeftCorner = vec2(-1.0, -1.0);
          vec2 bottomRightCorner = vec2(1.0, -1.0);

          float distToTopRight = distance(mousePos, topRightCorner);
          float distToTopLeft = distance(mousePos, topLeftCorner);
          float distToBottomLeft = distance(mousePos, bottomLeftCorner);
          float distToBottomRight = distance(mousePos, bottomRightCorner);

          // Convert distances to weights (closer = higher weight)
          float maxDist = 2.83;
          float weightTopRight = 1.0 - (distToTopRight / maxDist);
          float weightTopLeft = 1.0 - (distToTopLeft / maxDist);
          float weightBottomLeft = 1.0 - (distToBottomLeft / maxDist);
          float weightBottomRight = 1.0 - (distToBottomRight / maxDist);

          // Normalize weights
          float totalWeight = weightTopRight + weightTopLeft + weightBottomLeft + weightBottomRight;
          weightTopRight /= totalWeight;
          weightTopLeft /= totalWeight;
          weightBottomLeft /= totalWeight;
          weightBottomRight /= totalWeight;

          // Blend corner top colors
          vec3 cornerTopColor = topRight_top * weightTopRight +
                                topLeft_top * weightTopLeft +
                                bottomLeft_top * weightBottomLeft +
                                bottomRight_top * weightBottomRight;

          // Blend corner bottom colors
          vec3 cornerBottomColor = topRight_bottom * weightTopRight +
                                   topLeft_bottom * weightTopLeft +
                                   bottomLeft_bottom * weightBottomLeft +
                                   bottomRight_bottom * weightBottomRight;

          // Vertical gradient with corner colors or base colors
          float verticalGradient = (vPosition.y + 1.0) * 0.5;
          vec3 baseGradient = mix(bottomColor, topColor, verticalGradient);
          vec3 cornerGradient = mix(cornerBottomColor, cornerTopColor, verticalGradient);

          // Mix base gradient with corner gradient based on mouse influence
          vec3 gradientColor = mix(baseGradient, cornerGradient, mouseInfluence * mouseBlendAmount);

          // Blend with fresnel
          vec3 color = mix(gradientColor, vec3(1.0), fresnel * fresnelBlend);

          // Specular highlight using config parameters
          float highlight = pow(max(dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))), 0.0), highlightPower);
          color += vec3(1.0) * highlight * highlightIntensity;

          // Transparency using config parameters
          float alpha = baseTransparency + fresnel * edgeTransparency;

          gl_FragColor = vec4(color, alpha);
      }
    `;l=new hr({vertexShader:N,fragmentShader:I,uniforms:{time:{value:0},mousePos:{value:new bt(0,0)},speed1:{value:e.speed1},frequency1:{value:e.frequency1},intensity1:{value:e.intensity1},speed2:{value:e.speed2},frequency2:{value:e.frequency2},intensity2:{value:e.intensity2},speed3:{value:e.speed3},frequency3:{value:e.frequency3},intensity3:{value:e.intensity3},mouseIntensityMultiplier:{value:e.mouseIntensityMultiplier},mouseGravityStrength:{value:e.mouseGravityStrength},glassColor:{value:new ne(e.glassColorR,e.glassColorG,e.glassColorB)},topColor:{value:new ne(e.topColorR,e.topColorG,e.topColorB)},bottomColor:{value:new ne(e.bottomColorR,e.bottomColorG,e.bottomColorB)},fresnelPower:{value:e.fresnelPower},fresnelBlend:{value:e.fresnelBlend},highlightPower:{value:e.highlightPower},highlightIntensity:{value:e.highlightIntensity},baseTransparency:{value:e.baseTransparency},edgeTransparency:{value:e.edgeTransparency},mouseInfluenceStrength:{value:e.mouseInfluenceStrength},mouseBlendAmount:{value:e.mouseBlendAmount},mouseColorIntensity:{value:e.mouseColorIntensity}},transparent:!0,side:ki,blending:Cs});const k=new Ip(e.bubbleSize,e.bubbleDetail);u=new Vi(k,l),t.add(u),console.log("Mesh created:",u),console.log("Scene:",t),console.log("Camera position:",r.position);const F=document.getElementById("home");if(!F){console.error("Hero section not found");return}function P(B){if(!h)return;const ee=F.getBoundingClientRect();B.clientY>=ee.top&&B.clientY<=ee.bottom&&B.clientX>=ee.left&&B.clientX<=ee.right&&(d.x=(B.clientX-ee.left)/ee.width*2-1,d.y=-((B.clientY-ee.top)/ee.height)*2+1)}function C(){h=!0}function V(){h=!1}F.addEventListener("mousemove",P),F.addEventListener("mouseenter",C),F.addEventListener("mouseleave",V);function q(B){p=!0,v=B.touches[0].clientX,x=v}function ie(B){if(!p)return;x=B.touches[0].clientX;const ee=x-v,$=window.innerWidth*.5;m.x=Math.max(-1,Math.min(1,ee/$)),m.y=Math.sin(m.x*Math.PI)*.5}function ue(){p=!1,v=0,x=0}F.addEventListener("touchstart",q,{passive:!0}),F.addEventListener("touchmove",ie,{passive:!0}),F.addEventListener("touchend",ue,{passive:!0});function de(){const B=window.innerWidth,ee=B<768,$=Math.min(Math.max(300,B*.8),600),O=ee?$*1.15:$;r.aspect=1,r.updateProjectionMatrix(),o.setSize(O,O)}window.addEventListener("resize",de);let K=!1;function se(){if(K)return;requestAnimationFrame(se);const B=c.getElapsedTime();l.uniforms.time.value=B;const ee=window.innerWidth<768;let $,O;ee?(p||(m.x*=.95,m.y*=.95),$=m.x,O=m.y):($=h?d.x:0,O=h?d.y:0),l.uniforms.mousePos.value.x+=($-l.uniforms.mousePos.value.x)*e.mouseLerpSpeed,l.uniforms.mousePos.value.y+=(O-l.uniforms.mousePos.value.y)*e.mouseLerpSpeed;const re=l.uniforms.mousePos.value.x*Math.PI*e.cameraRotationSpeed,ge=l.uniforms.mousePos.value.y*Math.PI*e.cameraRotationSpeed,Ce=e.cameraDistance;r.position.x=Ce*Math.sin(re)*Math.cos(ge),r.position.y=Ce*Math.sin(ge),r.position.z=Ce*Math.cos(re)*Math.cos(ge),r.lookAt(0,0,0),o.render(t,r)}return se(),()=>{K=!0,window.removeEventListener("resize",de),F.removeEventListener("mousemove",P),F.removeEventListener("mouseenter",C),F.removeEventListener("mouseleave",V),F.removeEventListener("touchstart",q),F.removeEventListener("touchmove",ie),F.removeEventListener("touchend",ue),E.removeChild(o.domElement),o.dispose(),k.dispose(),l.dispose()}},[]),me.jsx("div",{ref:n,className:"three-canvas","aria-label":"Three.js Canvas"})}function WD(){const n=Fe.useRef(null),e=()=>{window.history.pushState({route:"home",section:"#work"},"","/#work");const t=document.querySelector("#work");t&&t.scrollIntoView({behavior:"smooth"})};return me.jsxs("section",{ref:n,id:"home",className:"hero-section",children:[me.jsx("div",{className:"canvas-container",children:me.jsx(GD,{})}),me.jsx("div",{className:"hero-content-wrapper",children:me.jsx("div",{className:"hero-content-center",children:me.jsx("div",{className:"hero-content",children:me.jsxs(Pt.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[me.jsx(Pt.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},className:"hero-title",children:Gu.NAME}),me.jsx(Pt.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},className:"hero-description",children:Gu.TAGLINE}),me.jsx(Pt.button,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},onClick:e,whileHover:{y:-2},whileTap:{scale:.98},className:"hero-button",children:"View Work"})]})})})}),me.jsx(Pt.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1.5},className:"hero-scroll-indicator",children:me.jsx(Pt.div,{animate:{y:[0,4,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},children:me.jsxs("svg",{width:"20",height:"32",viewBox:"0 0 20 32",fill:"none",className:"hero-scroll-icon",children:[me.jsx("rect",{x:"1",y:"1",width:"18",height:"26",rx:"9",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),me.jsx(Pt.rect,{x:"8.5",y:"6",width:"3",height:"6",rx:"1.5",fill:"currentColor",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0,ease:"easeInOut"}}),me.jsx(Pt.line,{x1:"10",y1:"30",x2:"10",y2:"31",stroke:"currentColor",strokeWidth:"1.5",animate:{opacity:[.3,.8,.3]},transition:{duration:2,repeat:1/0,ease:"easeInOut",delay:.2}})]})})})]})}function XD(){const{navigateTo:n}=Ox(),e=Fe.useRef(null),t=Ep(e,{once:!0,margin:"-100px"});return me.jsx("section",{id:"work",className:"work-section",ref:e,children:me.jsxs(Pt.div,{initial:{opacity:0,y:40},animate:t?{opacity:1,y:0}:{},transition:{duration:.6},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",padding:"4rem 2rem",textAlign:"center"},children:[me.jsx(Pt.h2,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.6,delay:.2},style:{fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:700,marginBottom:"1rem",color:"var(--foreground)"},children:"Case Studies Coming Soon"}),me.jsx(Pt.p,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.6,delay:.4},style:{fontSize:"clamp(1rem, 2vw, 1.25rem)",color:"var(--muted-foreground)",maxWidth:"600px",lineHeight:1.6},children:"I'm currently finalizing detailed case studies of my work. Check back soon for in-depth breakdowns of projects and more."})]})})}function jD(){const n=Fe.useRef(null),e=Ep(n,{once:!0,margin:"-100px"});return me.jsx("section",{id:"about",className:"about-section",children:me.jsx("div",{className:"about-container",children:me.jsxs(Pt.div,{ref:n,initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{},transition:{duration:.8},children:[me.jsx("h2",{className:"about-title",children:"About"}),me.jsx("div",{className:"about-content",children:ru.DESCRIPTION.map((t,r)=>me.jsx("p",{children:t},r))}),me.jsx(Pt.div,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:.4},className:"about-divider",children:me.jsxs("div",{className:"about-grid",children:[me.jsxs("div",{children:[me.jsx("h4",{className:"about-grid-title",children:"Tools"}),me.jsx("div",{className:"about-grid-content",children:ru.TOOLS.map((t,r)=>me.jsx("p",{children:t},r))})]}),me.jsxs("div",{children:[me.jsx("h4",{className:"about-grid-title",children:"Skills"}),me.jsx("div",{className:"about-grid-content",children:ru.SKILLS.map((t,r)=>me.jsx("p",{children:t},r))})]}),me.jsxs("div",{children:[me.jsx("h4",{className:"about-grid-title",children:"Industries"}),me.jsx("div",{className:"about-grid-content",children:ru.INDUSTRIES.map((t,r)=>me.jsx("p",{children:t},r))})]})]})})]})})})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YD=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qD=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),S_=n=>{const e=qD(n);return e.charAt(0).toUpperCase()+e.slice(1)},Nx=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=Fe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...c},d)=>Fe.createElement("svg",{ref:d,...$D,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:Nx("lucide",o),...c},[...u.map(([h,m])=>Fe.createElement(h,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=(n,e)=>{const t=Fe.forwardRef(({className:r,...o},l)=>Fe.createElement(KD,{ref:l,iconNode:e,className:Nx(`lucide-${YD(S_(n))}`,`lucide-${n}`,r),...o}));return t.displayName=S_(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],JD=ZD("arrow-up-right",QD);function eL(){const n=Fe.useRef(null),e=Ep(n,{once:!0,margin:"-100px"});return me.jsx("section",{id:"contact",className:"contact-section",children:me.jsx("div",{className:"contact-container",children:me.jsxs(Pt.div,{ref:n,initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{},transition:{duration:.8},children:[me.jsx("h2",{className:"contact-title",children:Qf.TITLE}),me.jsx("p",{className:"contact-description",children:Qf.DESCRIPTION}),me.jsx("div",{className:"contact-links",children:Qf.LINKS.map((t,r)=>me.jsxs(Pt.a,{href:t.href,target:t.target,rel:t.rel,initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:r*.1},whileHover:{x:10},className:"contact-link",children:[me.jsxs("div",{children:[me.jsx("div",{className:"contact-link-name",children:t.name}),me.jsx("div",{className:"contact-link-description",children:t.description})]}),me.jsx(Pt.div,{whileHover:{scale:1.1},className:"contact-link-icon",children:me.jsx(JD,{size:16})})]},t.name))})]})})})}function tL(){const n=new Date().getFullYear();return me.jsx("footer",{className:"footer",children:me.jsx("div",{className:"footer-container",children:me.jsxs(Pt.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"footer-inner",children:[me.jsxs("div",{className:"footer-copyright",children:["© ",n," ",Gu.NAME,". Maybe some rights reserved :)"]}),me.jsxs("div",{className:"footer-links",children:[me.jsx(Pt.a,{href:zr.LINKEDIN,target:"_blank",rel:"noopener noreferrer",whileHover:{y:-2},className:"footer-link",children:"LinkedIn"}),me.jsx(Pt.a,{href:zr.DRIBBBLE,target:"_blank",rel:"noopener noreferrer",whileHover:{y:-2},className:"footer-link",children:"Dribbble"}),me.jsx(Pt.a,{href:`mailto:${zr.EMAIL}`,whileHover:{y:-2},className:"footer-link",children:"Email"})]})]})})})}function nL(){const[n,e]=Fe.useState({x:0,y:0}),[t,r]=Fe.useState(!1),[o,l]=Fe.useState(!1),[u,c]=Fe.useState(!1);if(Fe.useEffect(()=>{const m=()=>{const E=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)||window.matchMedia("(hover: none)").matches;c(E),E&&(document.body.style.cursor="",document.documentElement.style.cursor="")};if(m(),window.addEventListener("resize",m),u)return()=>{window.removeEventListener("resize",m)};const p=E=>{e({x:E.clientX,y:E.clientY}),t||r(!0);const T=E.target,S=T.matches('a, button, [role="button"], input, textarea, select, [data-testid], [tabindex="0"]')||T.closest('a, button, [role="button"], input, textarea, select, [data-testid], [tabindex="0"]');l(!!S)},v=()=>{r(!1),l(!1)},x=()=>{r(!0)};return document.addEventListener("mousemove",p),document.addEventListener("mouseleave",v),document.addEventListener("mouseenter",x),document.body.style.cursor="none",document.documentElement.style.cursor="none",()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseleave",v),document.removeEventListener("mouseenter",x),window.removeEventListener("resize",m)}},[t,u]),u||!t)return null;const d=o?48:32,h=d/2;return me.jsx(Pt.div,{className:"custom-cursor",style:{left:n.x-h,top:n.y-h,width:d,height:d,backgroundColor:o?"rgba(0, 0, 0, 0.3)":"white",mixBlendMode:o?"normal":"difference"},animate:{scale:o?[1,1.1,1]:[1,1.05,1],width:d,height:d},transition:{scale:{duration:o?.8:1.5,repeat:1/0,ease:"easeInOut"},width:{type:"spring",stiffness:200,damping:25},height:{type:"spring",stiffness:200,damping:25}}})}const iL="modulepreload",rL=function(n){return"/"+n},E_={},ja=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");o=u(t.map(h=>{if(h=rL(h),h in E_)return;E_[h]=!0;const m=h.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":iL,m||(v.as="script"),v.crossOrigin="",v.href=h,d&&v.setAttribute("nonce",d),document.head.appendChild(v),m)return new Promise((x,E)=>{v.addEventListener("load",x),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return o.then(u=>{for(const c of u||[])c.status==="rejected"&&l(c.reason);return e().catch(l)})},sL=Fe.lazy(()=>ja(()=>import("./MindStudioCaseStudy-Cbj8IwCr.js"),__vite__mapDeps([0,1,2,3]))),oL=Fe.lazy(()=>ja(()=>import("./WeniaCaseStudy-DWxaAc9l.js"),__vite__mapDeps([4,1,2]))),aL=Fe.lazy(()=>ja(()=>import("./TreezCaseStudy-BOw0Qtdn.js"),__vite__mapDeps([5,1,2,3]))),lL=Fe.lazy(()=>ja(()=>import("./NacionalCaseStudy-C7YwHjkn.js"),__vite__mapDeps([6,1,2]))),uL=Fe.lazy(()=>ja(()=>import("./KlareCaseStudy-DjLDCbM6.js"),__vite__mapDeps([7,1,2]))),cL={home:{path:"/",label:"Home"},mindstudio:{path:"/mindstudio",component:sL,label:"MindStudio"},wenia:{path:"/wenia",component:oL,label:"Wenia"},treez:{path:"/treez",component:aL,label:"Treez"},nacional:{path:"/nacional",component:lL,label:"Nacional"},klare:{path:"/klare",component:uL,label:"Klare"}},fL=["mindstudio","wenia","treez","nacional","klare"];function Ux(){const n=window.location.pathname.replace(Jd,"").replace(/^\//,"");return n===""?"home":fL.includes(n)?n:"home"}function dL(n){return n==="home"?Jd:`${Jd}${n}`}function Pd(n,e=IA){const t=document.getElementById(n);t&&t.scrollIntoView(e)}function hL(n="smooth"){window.scrollTo({top:0,behavior:n})}function Cu(n,e){const t=dL(n),r=e?`${t}#${e}`:t,o=e?{route:n,section:e}:{route:n};window.history.pushState(o,"",r)}function pL(n){const e=t=>{const r=t.state;r&&r.route?n(r.route):n(Ux())};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}const Fx=Fe.createContext(void 0),Ox=()=>{const n=Fe.useContext(Fx);if(!n)throw new Error("useNavigation must be used within NavigationProvider");return n},mL=()=>me.jsx("div",{className:"loading-container",children:me.jsx("div",{className:"loading-spinner",children:"Loading..."})}),M_=({error:n,resetError:e})=>me.jsxs("div",{className:"error-container",children:[me.jsx("h2",{className:"error-title",children:"Something went wrong"}),me.jsx("p",{className:"error-message",children:n.message||Lu.UNEXPECTED_ERROR}),me.jsx("button",{onClick:e,className:"error-button",children:"Try again"})]});function gL(){const[n,e]=Fe.useState(Ux),[t,r]=Fe.useState(null),o=d=>{try{r(null),e(d),Cu(d),hL()}catch(h){r(h instanceof Error?h:new Error(Lu.NAVIGATION_FAILED))}},l=()=>{try{r(null),e("home"),Cu("home","work"),setTimeout(()=>Pd("work"),100)}catch(d){r(d instanceof Error?d:new Error(Lu.NAVIGATION_FAILED))}},u=()=>{r(null),e("home"),Cu("home")};Fe.useEffect(()=>pL(h=>{e(h);const m=window.location.hash;m&&setTimeout(()=>Pd(m.substring(1)),100)}),[]),Fe.useEffect(()=>{if(n!=="home")return;const d=m=>{m.preventDefault();const v=m.currentTarget.getAttribute("href");if(v){const x=v.substring(1);Cu("home",x),Pd(x)}},h=document.querySelectorAll('a[href^="#"]');return h.forEach(m=>m.addEventListener("click",d)),()=>{h.forEach(m=>m.removeEventListener("click",d))}},[n]);const c=()=>{if(n!=="home"){const h=cL[n].component;return h?me.jsx(Fe.Suspense,{fallback:me.jsx(mL,{}),children:me.jsx(h,{})}):me.jsx(M_,{error:new Error(Lu.ROUTE_NOT_FOUND),resetError:u})}return me.jsxs("main",{children:[me.jsx(WD,{}),me.jsx(XD,{}),me.jsx(jD,{}),me.jsx(eL,{})]})};return me.jsx(Fx.Provider,{value:{currentRoute:n,navigateTo:o,navigateToWork:l},children:me.jsxs("div",{className:"app-container",children:[me.jsx(nL,{}),me.jsx(NA,{}),t?me.jsx(M_,{error:t,resetError:u}):c(),me.jsx(tL,{}),me.jsx(JE,{position:"bottom-right",duration:4e3})]})})}ME.createRoot(document.getElementById("root")).render(me.jsx(gL,{}));export{ZD as c,me as j,Pt as m,Fe as r,Ox as u};
