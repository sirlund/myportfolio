const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MindStudioCaseStudy-wNQYuI59.js","assets/CaseStudyLayout-Tm2LkxtK.js","assets/CaseStudyLayout-BoKZBsC_.css","assets/CaseStudyContent-4iZsDpsn.css","assets/WeniaCaseStudy-e-OAv60b.js","assets/TreezCaseStudy-pObCfczX.js","assets/NacionalCaseStudy-DlCcDo8H.js","assets/KlareCaseStudy-TWW5a5ms.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function E_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bf={exports:{}},fa={},Pf={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function pE(){if(tv)return xt;tv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=p&&O[p]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(O,re,ye){this.props=O,this.context=re,this.refs=T,this.updater=ye||x}S.prototype.isReactComponent={},S.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(O,re,ye){this.props=O,this.context=re,this.refs=T,this.updater=ye||x}var R=D.prototype=new y;R.constructor=D,E(R,S.prototype),R.isPureReactComponent=!0;var A=Array.isArray,N=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function k(O,re,ye){var be,Re={},Z=null,ce=null;if(re!=null)for(be in re.ref!==void 0&&(ce=re.ref),re.key!==void 0&&(Z=""+re.key),re)N.call(re,be)&&!F.hasOwnProperty(be)&&(Re[be]=re[be]);var pe=arguments.length-2;if(pe===1)Re.children=ye;else if(1<pe){for(var Ie=Array(pe),ke=0;ke<pe;ke++)Ie[ke]=arguments[ke+2];Re.children=Ie}if(O&&O.defaultProps)for(be in pe=O.defaultProps,pe)Re[be]===void 0&&(Re[be]=pe[be]);return{$$typeof:n,type:O,key:Z,ref:ce,props:Re,_owner:L.current}}function P(O,re){return{$$typeof:n,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function H(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ye){return re[ye]})}var $=/\/+/g;function ne(O,re){return typeof O=="object"&&O!==null&&O.key!=null?H(""+O.key):re.toString(36)}function ue(O,re,ye,be,Re){var Z=typeof O;(Z==="undefined"||Z==="boolean")&&(O=null);var ce=!1;if(O===null)ce=!0;else switch(Z){case"string":case"number":ce=!0;break;case"object":switch(O.$$typeof){case n:case e:ce=!0}}if(ce)return ce=O,Re=Re(ce),O=be===""?"."+ne(ce,0):be,A(Re)?(ye="",O!=null&&(ye=O.replace($,"$&/")+"/"),ue(Re,re,ye,"",function(ke){return ke})):Re!=null&&(C(Re)&&(Re=P(Re,ye+(!Re.key||ce&&ce.key===Re.key?"":(""+Re.key).replace($,"$&/")+"/")+O)),re.push(Re)),1;if(ce=0,be=be===""?".":be+":",A(O))for(var pe=0;pe<O.length;pe++){Z=O[pe];var Ie=be+ne(Z,pe);ce+=ue(Z,re,ye,Ie,Re)}else if(Ie=v(O),typeof Ie=="function")for(O=Ie.call(O),pe=0;!(Z=O.next()).done;)Z=Z.value,Ie=be+ne(Z,pe++),ce+=ue(Z,re,ye,Ie,Re);else if(Z==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ce}function he(O,re,ye){if(O==null)return O;var be=[],Re=0;return ue(O,be,"","",function(Z){return re.call(ye,Z,Re++)}),be}function K(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(ye){(O._status===0||O._status===-1)&&(O._status=1,O._result=ye)},function(ye){(O._status===0||O._status===-1)&&(O._status=2,O._result=ye)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var se={current:null},z={transition:null},ae={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:z,ReactCurrentOwner:L};function ee(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:he,forEach:function(O,re,ye){he(O,function(){re.apply(this,arguments)},ye)},count:function(O){var re=0;return he(O,function(){re++}),re},toArray:function(O){return he(O,function(re){return re})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xt.Component=S,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=D,xt.StrictMode=r,xt.Suspense=d,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,xt.act=ee,xt.cloneElement=function(O,re,ye){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var be=E({},O.props),Re=O.key,Z=O.ref,ce=O._owner;if(re!=null){if(re.ref!==void 0&&(Z=re.ref,ce=L.current),re.key!==void 0&&(Re=""+re.key),O.type&&O.type.defaultProps)var pe=O.type.defaultProps;for(Ie in re)N.call(re,Ie)&&!F.hasOwnProperty(Ie)&&(be[Ie]=re[Ie]===void 0&&pe!==void 0?pe[Ie]:re[Ie])}var Ie=arguments.length-2;if(Ie===1)be.children=ye;else if(1<Ie){pe=Array(Ie);for(var ke=0;ke<Ie;ke++)pe[ke]=arguments[ke+2];be.children=pe}return{$$typeof:n,type:O.type,key:Re,ref:Z,props:be,_owner:ce}},xt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},xt.createElement=k,xt.createFactory=function(O){var re=k.bind(null,O);return re.type=O,re},xt.createRef=function(){return{current:null}},xt.forwardRef=function(O){return{$$typeof:c,render:O}},xt.isValidElement=C,xt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:K}},xt.memo=function(O,re){return{$$typeof:h,type:O,compare:re===void 0?null:re}},xt.startTransition=function(O){var re=z.transition;z.transition={};try{O()}finally{z.transition=re}},xt.unstable_act=ee,xt.useCallback=function(O,re){return se.current.useCallback(O,re)},xt.useContext=function(O){return se.current.useContext(O)},xt.useDebugValue=function(){},xt.useDeferredValue=function(O){return se.current.useDeferredValue(O)},xt.useEffect=function(O,re){return se.current.useEffect(O,re)},xt.useId=function(){return se.current.useId()},xt.useImperativeHandle=function(O,re,ye){return se.current.useImperativeHandle(O,re,ye)},xt.useInsertionEffect=function(O,re){return se.current.useInsertionEffect(O,re)},xt.useLayoutEffect=function(O,re){return se.current.useLayoutEffect(O,re)},xt.useMemo=function(O,re){return se.current.useMemo(O,re)},xt.useReducer=function(O,re,ye){return se.current.useReducer(O,re,ye)},xt.useRef=function(O){return se.current.useRef(O)},xt.useState=function(O){return se.current.useState(O)},xt.useSyncExternalStore=function(O,re,ye){return se.current.useSyncExternalStore(O,re,ye)},xt.useTransition=function(){return se.current.useTransition()},xt.version="18.3.1",xt}var nv;function Bh(){return nv||(nv=1,Pf.exports=pE()),Pf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function mE(){if(iv)return fa;iv=1;var n=Bh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var m,p={},v=null,x=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(p[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)p[m]===void 0&&(p[m]=d[m]);return{$$typeof:e,type:c,key:v,ref:x,props:p,_owner:o.current}}return fa.Fragment=t,fa.jsx=u,fa.jsxs=u,fa}var rv;function gE(){return rv||(rv=1,bf.exports=mE()),bf.exports}var me=gE(),Ql={},Df={exports:{}},Gn={},Lf={exports:{}},If={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function vE(){return sv||(sv=1,(function(n){function e(z,ae){var ee=z.length;z.push(ae);e:for(;0<ee;){var O=ee-1>>>1,re=z[O];if(0<o(re,ae))z[O]=ae,z[ee]=re,ee=O;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ae=z[0],ee=z.pop();if(ee!==ae){z[0]=ee;e:for(var O=0,re=z.length,ye=re>>>1;O<ye;){var be=2*(O+1)-1,Re=z[be],Z=be+1,ce=z[Z];if(0>o(Re,ee))Z<re&&0>o(ce,Re)?(z[O]=ce,z[Z]=ee,O=Z):(z[O]=Re,z[be]=ee,O=be);else if(Z<re&&0>o(ce,ee))z[O]=ce,z[Z]=ee,O=Z;else break e}}return ae}function o(z,ae){var ee=z.sortIndex-ae.sortIndex;return ee!==0?ee:z.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],m=1,p=null,v=3,x=!1,E=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(z){for(var ae=t(h);ae!==null;){if(ae.callback===null)r(h);else if(ae.startTime<=z)r(h),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=t(h)}}function A(z){if(T=!1,R(z),!E)if(t(d)!==null)E=!0,K(N);else{var ae=t(h);ae!==null&&se(A,ae.startTime-z)}}function N(z,ae){E=!1,T&&(T=!1,y(k),k=-1),x=!0;var ee=v;try{for(R(ae),p=t(d);p!==null&&(!(p.expirationTime>ae)||z&&!H());){var O=p.callback;if(typeof O=="function"){p.callback=null,v=p.priorityLevel;var re=O(p.expirationTime<=ae);ae=n.unstable_now(),typeof re=="function"?p.callback=re:p===t(d)&&r(d),R(ae)}else r(d);p=t(d)}if(p!==null)var ye=!0;else{var be=t(h);be!==null&&se(A,be.startTime-ae),ye=!1}return ye}finally{p=null,v=ee,x=!1}}var L=!1,F=null,k=-1,P=5,C=-1;function H(){return!(n.unstable_now()-C<P)}function $(){if(F!==null){var z=n.unstable_now();C=z;var ae=!0;try{ae=F(!0,z)}finally{ae?ne():(L=!1,F=null)}}else L=!1}var ne;if(typeof D=="function")ne=function(){D($)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=$,ne=function(){he.postMessage(null)}}else ne=function(){S($,0)};function K(z){F=z,L||(L=!0,ne())}function se(z,ae){k=S(function(){z(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){E||x||(E=!0,K(N))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ae=3;break;default:ae=v}var ee=v;v=ae;try{return z()}finally{v=ee}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=v;v=z;try{return ae()}finally{v=ee}},n.unstable_scheduleCallback=function(z,ae,ee){var O=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?O+ee:O):ee=O,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ee+re,z={id:m++,callback:ae,priorityLevel:z,startTime:ee,expirationTime:re,sortIndex:-1},ee>O?(z.sortIndex=ee,e(h,z),t(d)===null&&z===t(h)&&(T?(y(k),k=-1):T=!0,se(A,ee-O))):(z.sortIndex=re,e(d,z),E||x||(E=!0,K(N))),z},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(z){var ae=v;return function(){var ee=v;v=ae;try{return z.apply(this,arguments)}finally{v=ee}}}})(If)),If}var ov;function _E(){return ov||(ov=1,Lf.exports=vE()),Lf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function yE(){if(av)return Gn;av=1;var n=Bh(),e=_E();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},p={};function v(i){return d.call(p,i)?!0:d.call(m,i)?!1:h.test(i)?p[i]=!0:(m[i]=!0,!1)}function x(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,a,f){if(s===null||typeof s>"u"||x(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,a,f,g,_,M){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function R(i,s,a,f){var g=S.hasOwnProperty(s)?S[s]:null;(g!==null?g.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,a,g,f)&&(a=null),f||g===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):g.mustUseProperty?i[g.propertyName]=a===null?g.type===3?!1:"":a:(s=g.attributeName,f=g.attributeNamespace,a===null?i.removeAttribute(s):(g=g.type,a=g===3||g===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),H=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),z=Symbol.iterator;function ae(i){return i===null||typeof i!="object"?null:(i=z&&i[z]||i["@@iterator"],typeof i=="function"?i:null)}var ee=Object.assign,O;function re(i){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var ye=!1;function be(i,s){if(!i||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ie){var f=ie}Reflect.construct(i,[],s)}else{try{s.call()}catch(ie){f=ie}i.call(s.prototype)}else{try{throw Error()}catch(ie){f=ie}i()}}catch(ie){if(ie&&f&&typeof ie.stack=="string"){for(var g=ie.stack.split(`
`),_=f.stack.split(`
`),M=g.length-1,U=_.length-1;1<=M&&0<=U&&g[M]!==_[U];)U--;for(;1<=M&&0<=U;M--,U--)if(g[M]!==_[U]){if(M!==1||U!==1)do if(M--,U--,0>U||g[M]!==_[U]){var V=`
`+g[M].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=M&&0<=U);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?re(i):""}function Re(i){switch(i.tag){case 5:return re(i.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return i=be(i.type,!1),i;case 11:return i=be(i.type.render,!1),i;case 1:return i=be(i.type,!0),i;default:return""}}function Z(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case L:return"Portal";case P:return"Profiler";case k:return"StrictMode";case ne:return"Suspense";case ue:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case H:return(i.displayName||"Context")+".Consumer";case C:return(i._context.displayName||"Context")+".Provider";case $:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case he:return s=i.displayName||null,s!==null?s:Z(i.type)||"Memo";case K:s=i._payload,i=i._init;try{return Z(i(s))}catch{}}return null}function ce(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(s);case 8:return s===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function pe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ie(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ke(i){var s=Ie(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var g=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return g.call(this)},set:function(M){f=""+M,_.call(this,M)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(M){f=""+M},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function pt(i){i._valueTracker||(i._valueTracker=ke(i))}function Ht(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Ie(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function B(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function At(i,s){var a=s.checked;return ee({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function ft(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=pe(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function tt(i,s){s=s.checked,s!=null&&R(i,"checked",s,!1)}function Ge(i,s){tt(i,s);var a=pe(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Be(i,s.type,a):s.hasOwnProperty("defaultValue")&&Be(i,s.type,pe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Pt(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Be(i,s,a){(s!=="number"||B(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var ut=Array.isArray;function kt(i,s,a,f){if(i=i.options,s){s={};for(var g=0;g<a.length;g++)s["$"+a[g]]=!0;for(a=0;a<i.length;a++)g=s.hasOwnProperty("$"+i[a].value),i[a].selected!==g&&(i[a].selected=g),g&&f&&(i[a].defaultSelected=!0)}else{for(a=""+pe(a),s=null,g=0;g<i.length;g++){if(i[g].value===a){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}s!==null||i[g].disabled||(s=i[g])}s!==null&&(s.selected=!0)}}function _t(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function I(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ut(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:pe(a)}}function w(i,s){var a=pe(s.value),f=pe(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function q(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function de(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?de(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var fe,Ke=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,g){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,g)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=fe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ee(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var We={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(We).forEach(function(i){Xe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),We[s]=We[i]})});function Te(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||We.hasOwnProperty(i)&&We[i]?(""+s).trim():s+"px"}function Ne(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,g=Te(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,g):i[a]=g}}var nt=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(i,s){if(s){if(nt[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Le(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function G(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Me=null,Ce=null,ze=null;function xe(i){if(i=Ko(i)){if(typeof Me!="function")throw Error(t(280));var s=i.stateNode;s&&(s=hl(s),Me(i.stateNode,i.type,s))}}function J(i){Ce?ze?ze.push(i):ze=[i]:Ce=i}function Pe(){if(Ce){var i=Ce,s=ze;if(ze=Ce=null,xe(i),s)for(i=0;i<s.length;i++)xe(s[i])}}function Ze(i,s){return i(s)}function mt(){}var yt=!1;function Dt(i,s,a){if(yt)return i(s,a);yt=!0;try{return Ze(i,s,a)}finally{yt=!1,(Ce!==null||ze!==null)&&(mt(),Pe())}}function It(i,s){var a=i.stateNode;if(a===null)return null;var f=hl(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var mi=!1;if(c)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){mi=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch{mi=!1}function _n(i,s,a,f,g,_,M,U,V){var ie=Array.prototype.slice.call(arguments,3);try{s.apply(a,ie)}catch(_e){this.onError(_e)}}var gi=!1,Dn=null,Di=!1,bs=null,Ps={onError:function(i){gi=!0,Dn=i}};function ja(i,s,a,f,g,_,M,U,V){gi=!1,Dn=null,_n.apply(Ps,arguments)}function Ya(i,s,a,f,g,_,M,U,V){if(ja.apply(this,arguments),gi){if(gi){var ie=Dn;gi=!1,Dn=null}else throw Error(t(198));Di||(Di=!0,bs=ie)}}function ji(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function qa(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function $a(i){if(ji(i)!==i)throw Error(t(188))}function Zu(i){var s=i.alternate;if(!s){if(s=ji(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var g=a.return;if(g===null)break;var _=g.alternate;if(_===null){if(f=g.return,f!==null){a=f;continue}break}if(g.child===_.child){for(_=g.child;_;){if(_===a)return $a(g),i;if(_===f)return $a(g),s;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=g,f=_;else{for(var M=!1,U=g.child;U;){if(U===a){M=!0,a=g,f=_;break}if(U===f){M=!0,f=g,a=_;break}U=U.sibling}if(!M){for(U=_.child;U;){if(U===a){M=!0,a=_,f=g;break}if(U===f){M=!0,f=_,a=g;break}U=U.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function Ka(i){return i=Zu(i),i!==null?Za(i):null}function Za(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Za(i);if(s!==null)return s;i=i.sibling}return null}var b=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,oe=e.unstable_shouldYield,le=e.unstable_requestPaint,X=e.unstable_now,we=e.unstable_getCurrentPriorityLevel,Ue=e.unstable_ImmediatePriority,qe=e.unstable_UserBlockingPriority,Ve=e.unstable_NormalPriority,ot=e.unstable_LowPriority,at=e.unstable_IdlePriority,et=null,dt=null;function Lt(i){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(et,i,void 0,(i.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:it,Bt=Math.log,Nt=Math.LN2;function it(i){return i>>>=0,i===0?32:31-(Bt(i)/Nt|0)|0}var Ft=64,St=4194304;function ln(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function vi(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,g=i.suspendedLanes,_=i.pingedLanes,M=a&268435455;if(M!==0){var U=M&~g;U!==0?f=ln(U):(_&=M,_!==0&&(f=ln(_)))}else M=a&~g,M!==0?f=ln(M):_!==0&&(f=ln(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&g)===0&&(g=f&-f,_=s&-s,g>=_||g===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-Tt(s),g=1<<a,f|=i[a],s&=~g;return f}function Ln(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qr(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,_=i.pendingLanes;0<_;){var M=31-Tt(_),U=1<<M,V=g[M];V===-1?((U&a)===0||(U&f)!==0)&&(g[M]=Ln(U,s)):V<=s&&(i.expiredLanes|=U),_&=~U}}function zt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function In(){var i=Ft;return Ft<<=1,(Ft&4194240)===0&&(Ft=64),i}function En(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function en(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Tt(s),i[s]=a}function Mn(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var g=31-Tt(a),_=1<<g;s[g]=0,f[g]=-1,i[g]=-1,a&=~_}}function $r(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-Tt(a),g=1<<f;g&s|i[f]&s&&(i[f]|=s),a&=~g}}var Et=0;function Ip(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Np,Qu,Up,Fp,Op,Ju=!1,Qa=[],pr=null,mr=null,gr=null,No=new Map,Uo=new Map,vr=[],Fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kp(i,s){switch(i){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":No.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(s.pointerId)}}function Fo(i,s,a,f,g,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[g]},s!==null&&(s=Ko(s),s!==null&&Qu(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),i)}function Ox(i,s,a,f,g){switch(s){case"focusin":return pr=Fo(pr,i,s,a,f,g),!0;case"dragenter":return mr=Fo(mr,i,s,a,f,g),!0;case"mouseover":return gr=Fo(gr,i,s,a,f,g),!0;case"pointerover":var _=g.pointerId;return No.set(_,Fo(No.get(_)||null,i,s,a,f,g)),!0;case"gotpointercapture":return _=g.pointerId,Uo.set(_,Fo(Uo.get(_)||null,i,s,a,f,g)),!0}return!1}function Bp(i){var s=Kr(i.target);if(s!==null){var a=ji(s);if(a!==null){if(s=a.tag,s===13){if(s=qa(a),s!==null){i.blockedOn=s,Op(i.priority,function(){Up(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Ja(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=tc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);lt=f,a.target.dispatchEvent(f),lt=null}else return s=Ko(a),s!==null&&Qu(s),i.blockedOn=a,!1;s.shift()}return!0}function zp(i,s,a){Ja(i)&&a.delete(s)}function kx(){Ju=!1,pr!==null&&Ja(pr)&&(pr=null),mr!==null&&Ja(mr)&&(mr=null),gr!==null&&Ja(gr)&&(gr=null),No.forEach(zp),Uo.forEach(zp)}function Oo(i,s){i.blockedOn===s&&(i.blockedOn=null,Ju||(Ju=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kx)))}function ko(i){function s(g){return Oo(g,i)}if(0<Qa.length){Oo(Qa[0],i);for(var a=1;a<Qa.length;a++){var f=Qa[a];f.blockedOn===i&&(f.blockedOn=null)}}for(pr!==null&&Oo(pr,i),mr!==null&&Oo(mr,i),gr!==null&&Oo(gr,i),No.forEach(s),Uo.forEach(s),a=0;a<vr.length;a++)f=vr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<vr.length&&(a=vr[0],a.blockedOn===null);)Bp(a),a.blockedOn===null&&vr.shift()}var Ds=A.ReactCurrentBatchConfig,el=!0;function Bx(i,s,a,f){var g=Et,_=Ds.transition;Ds.transition=null;try{Et=1,ec(i,s,a,f)}finally{Et=g,Ds.transition=_}}function zx(i,s,a,f){var g=Et,_=Ds.transition;Ds.transition=null;try{Et=4,ec(i,s,a,f)}finally{Et=g,Ds.transition=_}}function ec(i,s,a,f){if(el){var g=tc(i,s,a,f);if(g===null)_c(i,s,f,tl,a),kp(i,f);else if(Ox(g,i,s,a,f))f.stopPropagation();else if(kp(i,f),s&4&&-1<Fx.indexOf(i)){for(;g!==null;){var _=Ko(g);if(_!==null&&Np(_),_=tc(i,s,a,f),_===null&&_c(i,s,f,tl,a),_===g)break;g=_}g!==null&&f.stopPropagation()}else _c(i,s,f,null,a)}}var tl=null;function tc(i,s,a,f){if(tl=null,i=G(f),i=Kr(i),i!==null)if(s=ji(i),s===null)i=null;else if(a=s.tag,a===13){if(i=qa(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return tl=i,null}function Vp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(we()){case Ue:return 1;case qe:return 4;case Ve:case ot:return 16;case at:return 536870912;default:return 16}default:return 16}}var _r=null,nc=null,nl=null;function Hp(){if(nl)return nl;var i,s=nc,a=s.length,f,g="value"in _r?_r.value:_r.textContent,_=g.length;for(i=0;i<a&&s[i]===g[i];i++);var M=a-i;for(f=1;f<=M&&s[a-f]===g[_-f];f++);return nl=g.slice(i,1<f?1-f:void 0)}function il(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function rl(){return!0}function Gp(){return!1}function $n(i){function s(a,f,g,_,M){this._reactName=a,this._targetInst=g,this.type=f,this.nativeEvent=_,this.target=M,this.currentTarget=null;for(var U in i)i.hasOwnProperty(U)&&(a=i[U],this[U]=a?a(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?rl:Gp,this.isPropagationStopped=Gp,this}return ee(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),s}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=$n(Ls),Bo=ee({},Ls,{view:0,detail:0}),Vx=$n(Bo),rc,sc,zo,sl=ee({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==zo&&(zo&&i.type==="mousemove"?(rc=i.screenX-zo.screenX,sc=i.screenY-zo.screenY):sc=rc=0,zo=i),rc)},movementY:function(i){return"movementY"in i?i.movementY:sc}}),Wp=$n(sl),Hx=ee({},sl,{dataTransfer:0}),Gx=$n(Hx),Wx=ee({},Bo,{relatedTarget:0}),oc=$n(Wx),Xx=ee({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),jx=$n(Xx),Yx=ee({},Ls,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),qx=$n(Yx),$x=ee({},Ls,{data:0}),Xp=$n($x),Kx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jx(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Qx[i])?!!s[i]:!1}function ac(){return Jx}var eS=ee({},Bo,{key:function(i){if(i.key){var s=Kx[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=il(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Zx[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(i){return i.type==="keypress"?il(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?il(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),tS=$n(eS),nS=ee({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=$n(nS),iS=ee({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),rS=$n(iS),sS=ee({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),oS=$n(sS),aS=ee({},sl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),lS=$n(aS),uS=[9,13,27,32],lc=c&&"CompositionEvent"in window,Vo=null;c&&"documentMode"in document&&(Vo=document.documentMode);var cS=c&&"TextEvent"in window&&!Vo,Yp=c&&(!lc||Vo&&8<Vo&&11>=Vo),qp=" ",$p=!1;function Kp(i,s){switch(i){case"keyup":return uS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Is=!1;function fS(i,s){switch(i){case"compositionend":return Zp(s);case"keypress":return s.which!==32?null:($p=!0,qp);case"textInput":return i=s.data,i===qp&&$p?null:i;default:return null}}function dS(i,s){if(Is)return i==="compositionend"||!lc&&Kp(i,s)?(i=Hp(),nl=nc=_r=null,Is=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Yp&&s.locale!=="ko"?null:s.data;default:return null}}var hS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!hS[i.type]:s==="textarea"}function Jp(i,s,a,f){J(f),s=cl(s,"onChange"),0<s.length&&(a=new ic("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var Ho=null,Go=null;function pS(i){vm(i,0)}function ol(i){var s=ks(i);if(Ht(s))return i}function mS(i,s){if(i==="change")return s}var em=!1;if(c){var uc;if(c){var cc="oninput"in document;if(!cc){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),cc=typeof tm.oninput=="function"}uc=cc}else uc=!1;em=uc&&(!document.documentMode||9<document.documentMode)}function nm(){Ho&&(Ho.detachEvent("onpropertychange",im),Go=Ho=null)}function im(i){if(i.propertyName==="value"&&ol(Go)){var s=[];Jp(s,Go,i,G(i)),Dt(pS,s)}}function gS(i,s,a){i==="focusin"?(nm(),Ho=s,Go=a,Ho.attachEvent("onpropertychange",im)):i==="focusout"&&nm()}function vS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ol(Go)}function _S(i,s){if(i==="click")return ol(s)}function yS(i,s){if(i==="input"||i==="change")return ol(s)}function xS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var _i=typeof Object.is=="function"?Object.is:xS;function Wo(i,s){if(_i(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var g=a[f];if(!d.call(s,g)||!_i(i[g],s[g]))return!1}return!0}function rm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function sm(i,s){var a=rm(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rm(a)}}function om(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?om(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function am(){for(var i=window,s=B();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=B(i.document)}return s}function fc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function SS(i){var s=am(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&om(a.ownerDocument.documentElement,a)){if(f!==null&&fc(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var g=a.textContent.length,_=Math.min(f.start,g);f=f.end===void 0?_:Math.min(f.end,g),!i.extend&&_>f&&(g=f,f=_,_=g),g=sm(a,_);var M=sm(a,f);g&&M&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==M.node||i.focusOffset!==M.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(M.node,M.offset)):(s.setEnd(M.node,M.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var ES=c&&"documentMode"in document&&11>=document.documentMode,Ns=null,dc=null,Xo=null,hc=!1;function lm(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hc||Ns==null||Ns!==B(f)||(f=Ns,"selectionStart"in f&&fc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Xo&&Wo(Xo,f)||(Xo=f,f=cl(dc,"onSelect"),0<f.length&&(s=new ic("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Ns)))}function al(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Us={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},pc={},um={};c&&(um=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function ll(i){if(pc[i])return pc[i];if(!Us[i])return i;var s=Us[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in um)return pc[i]=s[a];return i}var cm=ll("animationend"),fm=ll("animationiteration"),dm=ll("animationstart"),hm=ll("transitionend"),pm=new Map,mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(i,s){pm.set(i,s),l(s,[i])}for(var mc=0;mc<mm.length;mc++){var gc=mm[mc],MS=gc.toLowerCase(),TS=gc[0].toUpperCase()+gc.slice(1);yr(MS,"on"+TS)}yr(cm,"onAnimationEnd"),yr(fm,"onAnimationIteration"),yr(dm,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(hm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wS=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function gm(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,Ya(f,s,void 0,i),i.currentTarget=null}function vm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],g=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var M=f.length-1;0<=M;M--){var U=f[M],V=U.instance,ie=U.currentTarget;if(U=U.listener,V!==_&&g.isPropagationStopped())break e;gm(g,U,ie),_=V}else for(M=0;M<f.length;M++){if(U=f[M],V=U.instance,ie=U.currentTarget,U=U.listener,V!==_&&g.isPropagationStopped())break e;gm(g,U,ie),_=V}}}if(Di)throw i=bs,Di=!1,bs=null,i}function Xt(i,s){var a=s[Tc];a===void 0&&(a=s[Tc]=new Set);var f=i+"__bubble";a.has(f)||(_m(s,i,2,!1),a.add(f))}function vc(i,s,a){var f=0;s&&(f|=4),_m(a,i,f,s)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Yo(i){if(!i[ul]){i[ul]=!0,r.forEach(function(a){a!=="selectionchange"&&(wS.has(a)||vc(a,!1,i),vc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[ul]||(s[ul]=!0,vc("selectionchange",!1,s))}}function _m(i,s,a,f){switch(Vp(s)){case 1:var g=Bx;break;case 4:g=zx;break;default:g=ec}a=g.bind(null,s,a,i),g=void 0,!mi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(s,a,{capture:!0,passive:g}):i.addEventListener(s,a,!0):g!==void 0?i.addEventListener(s,a,{passive:g}):i.addEventListener(s,a,!1)}function _c(i,s,a,f,g){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var M=f.tag;if(M===3||M===4){var U=f.stateNode.containerInfo;if(U===g||U.nodeType===8&&U.parentNode===g)break;if(M===4)for(M=f.return;M!==null;){var V=M.tag;if((V===3||V===4)&&(V=M.stateNode.containerInfo,V===g||V.nodeType===8&&V.parentNode===g))return;M=M.return}for(;U!==null;){if(M=Kr(U),M===null)return;if(V=M.tag,V===5||V===6){f=_=M;continue e}U=U.parentNode}}f=f.return}Dt(function(){var ie=_,_e=G(a),Se=[];e:{var ve=pm.get(i);if(ve!==void 0){var He=ic,$e=i;switch(i){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":He=tS;break;case"focusin":$e="focus",He=oc;break;case"focusout":$e="blur",He=oc;break;case"beforeblur":case"afterblur":He=oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=rS;break;case cm:case fm:case dm:He=jx;break;case hm:He=oS;break;case"scroll":He=Vx;break;case"wheel":He=lS;break;case"copy":case"cut":case"paste":He=qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=jp}var Qe=(s&4)!==0,tn=!Qe&&i==="scroll",Y=Qe?ve!==null?ve+"Capture":null:ve;Qe=[];for(var W=ie,Q;W!==null;){Q=W;var Ae=Q.stateNode;if(Q.tag===5&&Ae!==null&&(Q=Ae,Y!==null&&(Ae=It(W,Y),Ae!=null&&Qe.push(qo(W,Ae,Q)))),tn)break;W=W.return}0<Qe.length&&(ve=new He(ve,$e,null,a,_e),Se.push({event:ve,listeners:Qe}))}}if((s&7)===0){e:{if(ve=i==="mouseover"||i==="pointerover",He=i==="mouseout"||i==="pointerout",ve&&a!==lt&&($e=a.relatedTarget||a.fromElement)&&(Kr($e)||$e[Yi]))break e;if((He||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,He?($e=a.relatedTarget||a.toElement,He=ie,$e=$e?Kr($e):null,$e!==null&&(tn=ji($e),$e!==tn||$e.tag!==5&&$e.tag!==6)&&($e=null)):(He=null,$e=ie),He!==$e)){if(Qe=Wp,Ae="onMouseLeave",Y="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(Qe=jp,Ae="onPointerLeave",Y="onPointerEnter",W="pointer"),tn=He==null?ve:ks(He),Q=$e==null?ve:ks($e),ve=new Qe(Ae,W+"leave",He,a,_e),ve.target=tn,ve.relatedTarget=Q,Ae=null,Kr(_e)===ie&&(Qe=new Qe(Y,W+"enter",$e,a,_e),Qe.target=Q,Qe.relatedTarget=tn,Ae=Qe),tn=Ae,He&&$e)t:{for(Qe=He,Y=$e,W=0,Q=Qe;Q;Q=Fs(Q))W++;for(Q=0,Ae=Y;Ae;Ae=Fs(Ae))Q++;for(;0<W-Q;)Qe=Fs(Qe),W--;for(;0<Q-W;)Y=Fs(Y),Q--;for(;W--;){if(Qe===Y||Y!==null&&Qe===Y.alternate)break t;Qe=Fs(Qe),Y=Fs(Y)}Qe=null}else Qe=null;He!==null&&ym(Se,ve,He,Qe,!1),$e!==null&&tn!==null&&ym(Se,tn,$e,Qe,!0)}}e:{if(ve=ie?ks(ie):window,He=ve.nodeName&&ve.nodeName.toLowerCase(),He==="select"||He==="input"&&ve.type==="file")var Je=mS;else if(Qp(ve))if(em)Je=yS;else{Je=vS;var rt=gS}else(He=ve.nodeName)&&He.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Je=_S);if(Je&&(Je=Je(i,ie))){Jp(Se,Je,a,_e);break e}rt&&rt(i,ve,ie),i==="focusout"&&(rt=ve._wrapperState)&&rt.controlled&&ve.type==="number"&&Be(ve,"number",ve.value)}switch(rt=ie?ks(ie):window,i){case"focusin":(Qp(rt)||rt.contentEditable==="true")&&(Ns=rt,dc=ie,Xo=null);break;case"focusout":Xo=dc=Ns=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,lm(Se,a,_e);break;case"selectionchange":if(ES)break;case"keydown":case"keyup":lm(Se,a,_e)}var st;if(lc)e:{switch(i){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else Is?Kp(i,a)&&(ht="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(Yp&&a.locale!=="ko"&&(Is||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Is&&(st=Hp()):(_r=_e,nc="value"in _r?_r.value:_r.textContent,Is=!0)),rt=cl(ie,ht),0<rt.length&&(ht=new Xp(ht,i,null,a,_e),Se.push({event:ht,listeners:rt}),st?ht.data=st:(st=Zp(a),st!==null&&(ht.data=st)))),(st=cS?fS(i,a):dS(i,a))&&(ie=cl(ie,"onBeforeInput"),0<ie.length&&(_e=new Xp("onBeforeInput","beforeinput",null,a,_e),Se.push({event:_e,listeners:ie}),_e.data=st))}vm(Se,s)})}function qo(i,s,a){return{instance:i,listener:s,currentTarget:a}}function cl(i,s){for(var a=s+"Capture",f=[];i!==null;){var g=i,_=g.stateNode;g.tag===5&&_!==null&&(g=_,_=It(i,a),_!=null&&f.unshift(qo(i,_,g)),_=It(i,s),_!=null&&f.push(qo(i,_,g))),i=i.return}return f}function Fs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ym(i,s,a,f,g){for(var _=s._reactName,M=[];a!==null&&a!==f;){var U=a,V=U.alternate,ie=U.stateNode;if(V!==null&&V===f)break;U.tag===5&&ie!==null&&(U=ie,g?(V=It(a,_),V!=null&&M.unshift(qo(a,V,U))):g||(V=It(a,_),V!=null&&M.push(qo(a,V,U)))),a=a.return}M.length!==0&&i.push({event:s,listeners:M})}var AS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function xm(i){return(typeof i=="string"?i:""+i).replace(AS,`
`).replace(CS,"")}function fl(i,s,a){if(s=xm(s),xm(i)!==s&&a)throw Error(t(425))}function dl(){}var yc=null,xc=null;function Sc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,RS=typeof clearTimeout=="function"?clearTimeout:void 0,Sm=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof Sm<"u"?function(i){return Sm.resolve(null).then(i).catch(PS)}:Ec;function PS(i){setTimeout(function(){throw i})}function Mc(i,s){var a=s,f=0;do{var g=a.nextSibling;if(i.removeChild(a),g&&g.nodeType===8)if(a=g.data,a==="/$"){if(f===0){i.removeChild(g),ko(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=g}while(a);ko(s)}function xr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Em(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Li="__reactFiber$"+Os,$o="__reactProps$"+Os,Yi="__reactContainer$"+Os,Tc="__reactEvents$"+Os,DS="__reactListeners$"+Os,LS="__reactHandles$"+Os;function Kr(i){var s=i[Li];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Yi]||a[Li]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=Em(i);i!==null;){if(a=i[Li])return a;i=Em(i)}return s}i=a,a=i.parentNode}return null}function Ko(i){return i=i[Li]||i[Yi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ks(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function hl(i){return i[$o]||null}var wc=[],Bs=-1;function Sr(i){return{current:i}}function jt(i){0>Bs||(i.current=wc[Bs],wc[Bs]=null,Bs--)}function Gt(i,s){Bs++,wc[Bs]=i.current,i.current=s}var Er={},Tn=Sr(Er),kn=Sr(!1),Zr=Er;function zs(i,s){var a=i.type.contextTypes;if(!a)return Er;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var g={},_;for(_ in a)g[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=g),g}function Bn(i){return i=i.childContextTypes,i!=null}function pl(){jt(kn),jt(Tn)}function Mm(i,s,a){if(Tn.current!==Er)throw Error(t(168));Gt(Tn,s),Gt(kn,a)}function Tm(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var g in f)if(!(g in s))throw Error(t(108,ce(i)||"Unknown",g));return ee({},a,f)}function ml(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Er,Zr=Tn.current,Gt(Tn,i),Gt(kn,kn.current),!0}function wm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=Tm(i,s,Zr),f.__reactInternalMemoizedMergedChildContext=i,jt(kn),jt(Tn),Gt(Tn,i)):jt(kn),Gt(kn,a)}var qi=null,gl=!1,Ac=!1;function Am(i){qi===null?qi=[i]:qi.push(i)}function IS(i){gl=!0,Am(i)}function Mr(){if(!Ac&&qi!==null){Ac=!0;var i=0,s=Et;try{var a=qi;for(Et=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}qi=null,gl=!1}catch(g){throw qi!==null&&(qi=qi.slice(i+1)),b(Ue,Mr),g}finally{Et=s,Ac=!1}}return null}var Vs=[],Hs=0,vl=null,_l=0,ni=[],ii=0,Qr=null,$i=1,Ki="";function Jr(i,s){Vs[Hs++]=_l,Vs[Hs++]=vl,vl=i,_l=s}function Cm(i,s,a){ni[ii++]=$i,ni[ii++]=Ki,ni[ii++]=Qr,Qr=i;var f=$i;i=Ki;var g=32-Tt(f)-1;f&=~(1<<g),a+=1;var _=32-Tt(s)+g;if(30<_){var M=g-g%5;_=(f&(1<<M)-1).toString(32),f>>=M,g-=M,$i=1<<32-Tt(s)+g|a<<g|f,Ki=_+i}else $i=1<<_|a<<g|f,Ki=i}function Cc(i){i.return!==null&&(Jr(i,1),Cm(i,1,0))}function Rc(i){for(;i===vl;)vl=Vs[--Hs],Vs[Hs]=null,_l=Vs[--Hs],Vs[Hs]=null;for(;i===Qr;)Qr=ni[--ii],ni[ii]=null,Ki=ni[--ii],ni[ii]=null,$i=ni[--ii],ni[ii]=null}var Kn=null,Zn=null,Yt=!1,yi=null;function Rm(i,s){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function bm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Kn=i,Zn=xr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Kn=i,Zn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Qr!==null?{id:$i,overflow:Ki}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Kn=i,Zn=null,!0):!1;default:return!1}}function bc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Pc(i){if(Yt){var s=Zn;if(s){var a=s;if(!bm(i,s)){if(bc(i))throw Error(t(418));s=xr(a.nextSibling);var f=Kn;s&&bm(i,s)?Rm(f,a):(i.flags=i.flags&-4097|2,Yt=!1,Kn=i)}}else{if(bc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Yt=!1,Kn=i}}}function Pm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Kn=i}function yl(i){if(i!==Kn)return!1;if(!Yt)return Pm(i),Yt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Sc(i.type,i.memoizedProps)),s&&(s=Zn)){if(bc(i))throw Dm(),Error(t(418));for(;s;)Rm(i,s),s=xr(s.nextSibling)}if(Pm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Zn=xr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Zn=null}}else Zn=Kn?xr(i.stateNode.nextSibling):null;return!0}function Dm(){for(var i=Zn;i;)i=xr(i.nextSibling)}function Gs(){Zn=Kn=null,Yt=!1}function Dc(i){yi===null?yi=[i]:yi.push(i)}var NS=A.ReactCurrentBatchConfig;function Zo(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var g=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(M){var U=g.refs;M===null?delete U[_]:U[_]=M},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function xl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Lm(i){var s=i._init;return s(i._payload)}function Im(i){function s(Y,W){if(i){var Q=Y.deletions;Q===null?(Y.deletions=[W],Y.flags|=16):Q.push(W)}}function a(Y,W){if(!i)return null;for(;W!==null;)s(Y,W),W=W.sibling;return null}function f(Y,W){for(Y=new Map;W!==null;)W.key!==null?Y.set(W.key,W):Y.set(W.index,W),W=W.sibling;return Y}function g(Y,W){return Y=Dr(Y,W),Y.index=0,Y.sibling=null,Y}function _(Y,W,Q){return Y.index=Q,i?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<W?(Y.flags|=2,W):Q):(Y.flags|=2,W)):(Y.flags|=1048576,W)}function M(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,W,Q,Ae){return W===null||W.tag!==6?(W=Mf(Q,Y.mode,Ae),W.return=Y,W):(W=g(W,Q),W.return=Y,W)}function V(Y,W,Q,Ae){var Je=Q.type;return Je===F?_e(Y,W,Q.props.children,Ae,Q.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&Lm(Je)===W.type)?(Ae=g(W,Q.props),Ae.ref=Zo(Y,W,Q),Ae.return=Y,Ae):(Ae=Wl(Q.type,Q.key,Q.props,null,Y.mode,Ae),Ae.ref=Zo(Y,W,Q),Ae.return=Y,Ae)}function ie(Y,W,Q,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==Q.containerInfo||W.stateNode.implementation!==Q.implementation?(W=Tf(Q,Y.mode,Ae),W.return=Y,W):(W=g(W,Q.children||[]),W.return=Y,W)}function _e(Y,W,Q,Ae,Je){return W===null||W.tag!==7?(W=as(Q,Y.mode,Ae,Je),W.return=Y,W):(W=g(W,Q),W.return=Y,W)}function Se(Y,W,Q){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Mf(""+W,Y.mode,Q),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case N:return Q=Wl(W.type,W.key,W.props,null,Y.mode,Q),Q.ref=Zo(Y,null,W),Q.return=Y,Q;case L:return W=Tf(W,Y.mode,Q),W.return=Y,W;case K:var Ae=W._init;return Se(Y,Ae(W._payload),Q)}if(ut(W)||ae(W))return W=as(W,Y.mode,Q,null),W.return=Y,W;xl(Y,W)}return null}function ve(Y,W,Q,Ae){var Je=W!==null?W.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Je!==null?null:U(Y,W,""+Q,Ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case N:return Q.key===Je?V(Y,W,Q,Ae):null;case L:return Q.key===Je?ie(Y,W,Q,Ae):null;case K:return Je=Q._init,ve(Y,W,Je(Q._payload),Ae)}if(ut(Q)||ae(Q))return Je!==null?null:_e(Y,W,Q,Ae,null);xl(Y,Q)}return null}function He(Y,W,Q,Ae,Je){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return Y=Y.get(Q)||null,U(W,Y,""+Ae,Je);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case N:return Y=Y.get(Ae.key===null?Q:Ae.key)||null,V(W,Y,Ae,Je);case L:return Y=Y.get(Ae.key===null?Q:Ae.key)||null,ie(W,Y,Ae,Je);case K:var rt=Ae._init;return He(Y,W,Q,rt(Ae._payload),Je)}if(ut(Ae)||ae(Ae))return Y=Y.get(Q)||null,_e(W,Y,Ae,Je,null);xl(W,Ae)}return null}function $e(Y,W,Q,Ae){for(var Je=null,rt=null,st=W,ht=W=0,gn=null;st!==null&&ht<Q.length;ht++){st.index>ht?(gn=st,st=null):gn=st.sibling;var Ct=ve(Y,st,Q[ht],Ae);if(Ct===null){st===null&&(st=gn);break}i&&st&&Ct.alternate===null&&s(Y,st),W=_(Ct,W,ht),rt===null?Je=Ct:rt.sibling=Ct,rt=Ct,st=gn}if(ht===Q.length)return a(Y,st),Yt&&Jr(Y,ht),Je;if(st===null){for(;ht<Q.length;ht++)st=Se(Y,Q[ht],Ae),st!==null&&(W=_(st,W,ht),rt===null?Je=st:rt.sibling=st,rt=st);return Yt&&Jr(Y,ht),Je}for(st=f(Y,st);ht<Q.length;ht++)gn=He(st,Y,ht,Q[ht],Ae),gn!==null&&(i&&gn.alternate!==null&&st.delete(gn.key===null?ht:gn.key),W=_(gn,W,ht),rt===null?Je=gn:rt.sibling=gn,rt=gn);return i&&st.forEach(function(Lr){return s(Y,Lr)}),Yt&&Jr(Y,ht),Je}function Qe(Y,W,Q,Ae){var Je=ae(Q);if(typeof Je!="function")throw Error(t(150));if(Q=Je.call(Q),Q==null)throw Error(t(151));for(var rt=Je=null,st=W,ht=W=0,gn=null,Ct=Q.next();st!==null&&!Ct.done;ht++,Ct=Q.next()){st.index>ht?(gn=st,st=null):gn=st.sibling;var Lr=ve(Y,st,Ct.value,Ae);if(Lr===null){st===null&&(st=gn);break}i&&st&&Lr.alternate===null&&s(Y,st),W=_(Lr,W,ht),rt===null?Je=Lr:rt.sibling=Lr,rt=Lr,st=gn}if(Ct.done)return a(Y,st),Yt&&Jr(Y,ht),Je;if(st===null){for(;!Ct.done;ht++,Ct=Q.next())Ct=Se(Y,Ct.value,Ae),Ct!==null&&(W=_(Ct,W,ht),rt===null?Je=Ct:rt.sibling=Ct,rt=Ct);return Yt&&Jr(Y,ht),Je}for(st=f(Y,st);!Ct.done;ht++,Ct=Q.next())Ct=He(st,Y,ht,Ct.value,Ae),Ct!==null&&(i&&Ct.alternate!==null&&st.delete(Ct.key===null?ht:Ct.key),W=_(Ct,W,ht),rt===null?Je=Ct:rt.sibling=Ct,rt=Ct);return i&&st.forEach(function(hE){return s(Y,hE)}),Yt&&Jr(Y,ht),Je}function tn(Y,W,Q,Ae){if(typeof Q=="object"&&Q!==null&&Q.type===F&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case N:e:{for(var Je=Q.key,rt=W;rt!==null;){if(rt.key===Je){if(Je=Q.type,Je===F){if(rt.tag===7){a(Y,rt.sibling),W=g(rt,Q.props.children),W.return=Y,Y=W;break e}}else if(rt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&Lm(Je)===rt.type){a(Y,rt.sibling),W=g(rt,Q.props),W.ref=Zo(Y,rt,Q),W.return=Y,Y=W;break e}a(Y,rt);break}else s(Y,rt);rt=rt.sibling}Q.type===F?(W=as(Q.props.children,Y.mode,Ae,Q.key),W.return=Y,Y=W):(Ae=Wl(Q.type,Q.key,Q.props,null,Y.mode,Ae),Ae.ref=Zo(Y,W,Q),Ae.return=Y,Y=Ae)}return M(Y);case L:e:{for(rt=Q.key;W!==null;){if(W.key===rt)if(W.tag===4&&W.stateNode.containerInfo===Q.containerInfo&&W.stateNode.implementation===Q.implementation){a(Y,W.sibling),W=g(W,Q.children||[]),W.return=Y,Y=W;break e}else{a(Y,W);break}else s(Y,W);W=W.sibling}W=Tf(Q,Y.mode,Ae),W.return=Y,Y=W}return M(Y);case K:return rt=Q._init,tn(Y,W,rt(Q._payload),Ae)}if(ut(Q))return $e(Y,W,Q,Ae);if(ae(Q))return Qe(Y,W,Q,Ae);xl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,W!==null&&W.tag===6?(a(Y,W.sibling),W=g(W,Q),W.return=Y,Y=W):(a(Y,W),W=Mf(Q,Y.mode,Ae),W.return=Y,Y=W),M(Y)):a(Y,W)}return tn}var Ws=Im(!0),Nm=Im(!1),Sl=Sr(null),El=null,Xs=null,Lc=null;function Ic(){Lc=Xs=El=null}function Nc(i){var s=Sl.current;jt(Sl),i._currentValue=s}function Uc(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function js(i,s){El=i,Lc=Xs=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(zn=!0),i.firstContext=null)}function ri(i){var s=i._currentValue;if(Lc!==i)if(i={context:i,memoizedValue:s,next:null},Xs===null){if(El===null)throw Error(t(308));Xs=i,El.dependencies={lanes:0,firstContext:i}}else Xs=Xs.next=i;return s}var es=null;function Fc(i){es===null?es=[i]:es.push(i)}function Um(i,s,a,f){var g=s.interleaved;return g===null?(a.next=a,Fc(s)):(a.next=g.next,g.next=a),s.interleaved=a,Zi(i,f)}function Zi(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Tr=!1;function Oc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Qi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function wr(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(wt&2)!==0){var g=f.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s,Zi(i,a)}return g=f.interleaved,g===null?(s.next=s,Fc(f)):(s.next=g.next,g.next=s),f.interleaved=s,Zi(i,a)}function Ml(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,$r(i,a)}}function Om(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var g=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?g=_=M:_=_.next=M,a=a.next}while(a!==null);_===null?g=_=s:_=_.next=s}else g=_=s;a={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Tl(i,s,a,f){var g=i.updateQueue;Tr=!1;var _=g.firstBaseUpdate,M=g.lastBaseUpdate,U=g.shared.pending;if(U!==null){g.shared.pending=null;var V=U,ie=V.next;V.next=null,M===null?_=ie:M.next=ie,M=V;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==M&&(U===null?_e.firstBaseUpdate=ie:U.next=ie,_e.lastBaseUpdate=V))}if(_!==null){var Se=g.baseState;M=0,_e=ie=V=null,U=_;do{var ve=U.lane,He=U.eventTime;if((f&ve)===ve){_e!==null&&(_e=_e.next={eventTime:He,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var $e=i,Qe=U;switch(ve=s,He=a,Qe.tag){case 1:if($e=Qe.payload,typeof $e=="function"){Se=$e.call(He,Se,ve);break e}Se=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Qe.payload,ve=typeof $e=="function"?$e.call(He,Se,ve):$e,ve==null)break e;Se=ee({},Se,ve);break e;case 2:Tr=!0}}U.callback!==null&&U.lane!==0&&(i.flags|=64,ve=g.effects,ve===null?g.effects=[U]:ve.push(U))}else He={eventTime:He,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ie=_e=He,V=Se):_e=_e.next=He,M|=ve;if(U=U.next,U===null){if(U=g.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,g.lastBaseUpdate=ve,g.shared.pending=null}}while(!0);if(_e===null&&(V=Se),g.baseState=V,g.firstBaseUpdate=ie,g.lastBaseUpdate=_e,s=g.shared.interleaved,s!==null){g=s;do M|=g.lane,g=g.next;while(g!==s)}else _===null&&(g.shared.lanes=0);is|=M,i.lanes=M,i.memoizedState=Se}}function km(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],g=f.callback;if(g!==null){if(f.callback=null,f=a,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var Qo={},Ii=Sr(Qo),Jo=Sr(Qo),ea=Sr(Qo);function ts(i){if(i===Qo)throw Error(t(174));return i}function kc(i,s){switch(Gt(ea,s),Gt(Jo,i),Gt(Ii,Qo),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ge(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ge(s,i)}jt(Ii),Gt(Ii,s)}function Ys(){jt(Ii),jt(Jo),jt(ea)}function Bm(i){ts(ea.current);var s=ts(Ii.current),a=ge(s,i.type);s!==a&&(Gt(Jo,i),Gt(Ii,a))}function Bc(i){Jo.current===i&&(jt(Ii),jt(Jo))}var $t=Sr(0);function wl(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var zc=[];function Vc(){for(var i=0;i<zc.length;i++)zc[i]._workInProgressVersionPrimary=null;zc.length=0}var Al=A.ReactCurrentDispatcher,Hc=A.ReactCurrentBatchConfig,ns=0,Kt=null,un=null,pn=null,Cl=!1,ta=!1,na=0,US=0;function wn(){throw Error(t(321))}function Gc(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!_i(i[a],s[a]))return!1;return!0}function Wc(i,s,a,f,g,_){if(ns=_,Kt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Al.current=i===null||i.memoizedState===null?BS:zS,i=a(f,g),ta){_=0;do{if(ta=!1,na=0,25<=_)throw Error(t(301));_+=1,pn=un=null,s.updateQueue=null,Al.current=VS,i=a(f,g)}while(ta)}if(Al.current=Pl,s=un!==null&&un.next!==null,ns=0,pn=un=Kt=null,Cl=!1,s)throw Error(t(300));return i}function Xc(){var i=na!==0;return na=0,i}function Ni(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Kt.memoizedState=pn=i:pn=pn.next=i,pn}function si(){if(un===null){var i=Kt.alternate;i=i!==null?i.memoizedState:null}else i=un.next;var s=pn===null?Kt.memoizedState:pn.next;if(s!==null)pn=s,un=i;else{if(i===null)throw Error(t(310));un=i,i={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},pn===null?Kt.memoizedState=pn=i:pn=pn.next=i}return pn}function ia(i,s){return typeof s=="function"?s(i):s}function jc(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=un,g=f.baseQueue,_=a.pending;if(_!==null){if(g!==null){var M=g.next;g.next=_.next,_.next=M}f.baseQueue=g=_,a.pending=null}if(g!==null){_=g.next,f=f.baseState;var U=M=null,V=null,ie=_;do{var _e=ie.lane;if((ns&_e)===_e)V!==null&&(V=V.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),f=ie.hasEagerState?ie.eagerState:i(f,ie.action);else{var Se={lane:_e,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};V===null?(U=V=Se,M=f):V=V.next=Se,Kt.lanes|=_e,is|=_e}ie=ie.next}while(ie!==null&&ie!==_);V===null?M=f:V.next=U,_i(f,s.memoizedState)||(zn=!0),s.memoizedState=f,s.baseState=M,s.baseQueue=V,a.lastRenderedState=f}if(i=a.interleaved,i!==null){g=i;do _=g.lane,Kt.lanes|=_,is|=_,g=g.next;while(g!==i)}else g===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Yc(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,g=a.pending,_=s.memoizedState;if(g!==null){a.pending=null;var M=g=g.next;do _=i(_,M.action),M=M.next;while(M!==g);_i(_,s.memoizedState)||(zn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,f]}function zm(){}function Vm(i,s){var a=Kt,f=si(),g=s(),_=!_i(f.memoizedState,g);if(_&&(f.memoizedState=g,zn=!0),f=f.queue,qc(Wm.bind(null,a,f,i),[i]),f.getSnapshot!==s||_||pn!==null&&pn.memoizedState.tag&1){if(a.flags|=2048,ra(9,Gm.bind(null,a,f,g,s),void 0,null),mn===null)throw Error(t(349));(ns&30)!==0||Hm(a,s,g)}return g}function Hm(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Gm(i,s,a,f){s.value=a,s.getSnapshot=f,Xm(s)&&jm(i)}function Wm(i,s,a){return a(function(){Xm(s)&&jm(i)})}function Xm(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!_i(i,a)}catch{return!0}}function jm(i){var s=Zi(i,1);s!==null&&Mi(s,i,1,-1)}function Ym(i){var s=Ni();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:i},s.queue=i,i=i.dispatch=kS.bind(null,Kt,i),[s.memoizedState,i]}function ra(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function qm(){return si().memoizedState}function Rl(i,s,a,f){var g=Ni();Kt.flags|=i,g.memoizedState=ra(1|s,a,void 0,f===void 0?null:f)}function bl(i,s,a,f){var g=si();f=f===void 0?null:f;var _=void 0;if(un!==null){var M=un.memoizedState;if(_=M.destroy,f!==null&&Gc(f,M.deps)){g.memoizedState=ra(s,a,_,f);return}}Kt.flags|=i,g.memoizedState=ra(1|s,a,_,f)}function $m(i,s){return Rl(8390656,8,i,s)}function qc(i,s){return bl(2048,8,i,s)}function Km(i,s){return bl(4,2,i,s)}function Zm(i,s){return bl(4,4,i,s)}function Qm(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Jm(i,s,a){return a=a!=null?a.concat([i]):null,bl(4,4,Qm.bind(null,s,i),a)}function $c(){}function eg(i,s){var a=si();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Gc(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function tg(i,s){var a=si();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Gc(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function ng(i,s,a){return(ns&21)===0?(i.baseState&&(i.baseState=!1,zn=!0),i.memoizedState=a):(_i(a,s)||(a=In(),Kt.lanes|=a,is|=a,i.baseState=!0),s)}function FS(i,s){var a=Et;Et=a!==0&&4>a?a:4,i(!0);var f=Hc.transition;Hc.transition={};try{i(!1),s()}finally{Et=a,Hc.transition=f}}function ig(){return si().memoizedState}function OS(i,s,a){var f=br(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},rg(i))sg(s,a);else if(a=Um(i,s,a,f),a!==null){var g=Un();Mi(a,i,f,g),og(a,s,f)}}function kS(i,s,a){var f=br(i),g={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(rg(i))sg(s,g);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var M=s.lastRenderedState,U=_(M,a);if(g.hasEagerState=!0,g.eagerState=U,_i(U,M)){var V=s.interleaved;V===null?(g.next=g,Fc(s)):(g.next=V.next,V.next=g),s.interleaved=g;return}}catch{}finally{}a=Um(i,s,g,f),a!==null&&(g=Un(),Mi(a,i,f,g),og(a,s,f))}}function rg(i){var s=i.alternate;return i===Kt||s!==null&&s===Kt}function sg(i,s){ta=Cl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function og(i,s,a){if((a&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,$r(i,a)}}var Pl={readContext:ri,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},BS={readContext:ri,useCallback:function(i,s){return Ni().memoizedState=[i,s===void 0?null:s],i},useContext:ri,useEffect:$m,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Rl(4194308,4,Qm.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Rl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Rl(4,2,i,s)},useMemo:function(i,s){var a=Ni();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Ni();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=OS.bind(null,Kt,i),[f.memoizedState,i]},useRef:function(i){var s=Ni();return i={current:i},s.memoizedState=i},useState:Ym,useDebugValue:$c,useDeferredValue:function(i){return Ni().memoizedState=i},useTransition:function(){var i=Ym(!1),s=i[0];return i=FS.bind(null,i[1]),Ni().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Kt,g=Ni();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),mn===null)throw Error(t(349));(ns&30)!==0||Hm(f,s,a)}g.memoizedState=a;var _={value:a,getSnapshot:s};return g.queue=_,$m(Wm.bind(null,f,_,i),[i]),f.flags|=2048,ra(9,Gm.bind(null,f,_,a,s),void 0,null),a},useId:function(){var i=Ni(),s=mn.identifierPrefix;if(Yt){var a=Ki,f=$i;a=(f&~(1<<32-Tt(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=na++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=US++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},zS={readContext:ri,useCallback:eg,useContext:ri,useEffect:qc,useImperativeHandle:Jm,useInsertionEffect:Km,useLayoutEffect:Zm,useMemo:tg,useReducer:jc,useRef:qm,useState:function(){return jc(ia)},useDebugValue:$c,useDeferredValue:function(i){var s=si();return ng(s,un.memoizedState,i)},useTransition:function(){var i=jc(ia)[0],s=si().memoizedState;return[i,s]},useMutableSource:zm,useSyncExternalStore:Vm,useId:ig,unstable_isNewReconciler:!1},VS={readContext:ri,useCallback:eg,useContext:ri,useEffect:qc,useImperativeHandle:Jm,useInsertionEffect:Km,useLayoutEffect:Zm,useMemo:tg,useReducer:Yc,useRef:qm,useState:function(){return Yc(ia)},useDebugValue:$c,useDeferredValue:function(i){var s=si();return un===null?s.memoizedState=i:ng(s,un.memoizedState,i)},useTransition:function(){var i=Yc(ia)[0],s=si().memoizedState;return[i,s]},useMutableSource:zm,useSyncExternalStore:Vm,useId:ig,unstable_isNewReconciler:!1};function xi(i,s){if(i&&i.defaultProps){s=ee({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function Kc(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:ee({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Dl={isMounted:function(i){return(i=i._reactInternals)?ji(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=Un(),g=br(i),_=Qi(f,g);_.payload=s,a!=null&&(_.callback=a),s=wr(i,_,g),s!==null&&(Mi(s,i,g,f),Ml(s,i,g))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=Un(),g=br(i),_=Qi(f,g);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=wr(i,_,g),s!==null&&(Mi(s,i,g,f),Ml(s,i,g))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Un(),f=br(i),g=Qi(a,f);g.tag=2,s!=null&&(g.callback=s),s=wr(i,g,f),s!==null&&(Mi(s,i,f,a),Ml(s,i,f))}};function ag(i,s,a,f,g,_,M){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,M):s.prototype&&s.prototype.isPureReactComponent?!Wo(a,f)||!Wo(g,_):!0}function lg(i,s,a){var f=!1,g=Er,_=s.contextType;return typeof _=="object"&&_!==null?_=ri(_):(g=Bn(s)?Zr:Tn.current,f=s.contextTypes,_=(f=f!=null)?zs(i,g):Er),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Dl,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=_),s}function ug(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Dl.enqueueReplaceState(s,s.state,null)}function Zc(i,s,a,f){var g=i.stateNode;g.props=a,g.state=i.memoizedState,g.refs={},Oc(i);var _=s.contextType;typeof _=="object"&&_!==null?g.context=ri(_):(_=Bn(s)?Zr:Tn.current,g.context=zs(i,_)),g.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Kc(i,s,_,a),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&Dl.enqueueReplaceState(g,g.state,null),Tl(i,a,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function qs(i,s){try{var a="",f=s;do a+=Re(f),f=f.return;while(f);var g=a}catch(_){g=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:g,digest:null}}function Qc(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function Jc(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var HS=typeof WeakMap=="function"?WeakMap:Map;function cg(i,s,a){a=Qi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){kl||(kl=!0,mf=f),Jc(i,s)},a}function fg(i,s,a){a=Qi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=s.value;a.payload=function(){return f(g)},a.callback=function(){Jc(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){Jc(i,s),typeof f!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var M=s.stack;this.componentDidCatch(s.value,{componentStack:M!==null?M:""})}),a}function dg(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new HS;var g=new Set;f.set(s,g)}else g=f.get(s),g===void 0&&(g=new Set,f.set(s,g));g.has(a)||(g.add(a),i=nE.bind(null,i,s,a),s.then(i,i))}function hg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function pg(i,s,a,f,g){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Qi(-1,1),s.tag=2,wr(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var GS=A.ReactCurrentOwner,zn=!1;function Nn(i,s,a,f){s.child=i===null?Nm(s,null,a,f):Ws(s,i.child,a,f)}function mg(i,s,a,f,g){a=a.render;var _=s.ref;return js(s,g),f=Wc(i,s,a,f,_,g),a=Xc(),i!==null&&!zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,Ji(i,s,g)):(Yt&&a&&Cc(s),s.flags|=1,Nn(i,s,f,g),s.child)}function gg(i,s,a,f,g){if(i===null){var _=a.type;return typeof _=="function"&&!Ef(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,vg(i,s,_,f,g)):(i=Wl(a.type,null,f,s,s.mode,g),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&g)===0){var M=_.memoizedProps;if(a=a.compare,a=a!==null?a:Wo,a(M,f)&&i.ref===s.ref)return Ji(i,s,g)}return s.flags|=1,i=Dr(_,f),i.ref=s.ref,i.return=s,s.child=i}function vg(i,s,a,f,g){if(i!==null){var _=i.memoizedProps;if(Wo(_,f)&&i.ref===s.ref)if(zn=!1,s.pendingProps=f=_,(i.lanes&g)!==0)(i.flags&131072)!==0&&(zn=!0);else return s.lanes=i.lanes,Ji(i,s,g)}return ef(i,s,a,f,g)}function _g(i,s,a){var f=s.pendingProps,g=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Ks,Qn),Qn|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Gt(Ks,Qn),Qn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Gt(Ks,Qn),Qn|=f}else _!==null?(f=_.baseLanes|a,s.memoizedState=null):f=a,Gt(Ks,Qn),Qn|=f;return Nn(i,s,g,a),s.child}function yg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function ef(i,s,a,f,g){var _=Bn(a)?Zr:Tn.current;return _=zs(s,_),js(s,g),a=Wc(i,s,a,f,_,g),f=Xc(),i!==null&&!zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,Ji(i,s,g)):(Yt&&f&&Cc(s),s.flags|=1,Nn(i,s,a,g),s.child)}function xg(i,s,a,f,g){if(Bn(a)){var _=!0;ml(s)}else _=!1;if(js(s,g),s.stateNode===null)Il(i,s),lg(s,a,f),Zc(s,a,f,g),f=!0;else if(i===null){var M=s.stateNode,U=s.memoizedProps;M.props=U;var V=M.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=ri(ie):(ie=Bn(a)?Zr:Tn.current,ie=zs(s,ie));var _e=a.getDerivedStateFromProps,Se=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==f||V!==ie)&&ug(s,M,f,ie),Tr=!1;var ve=s.memoizedState;M.state=ve,Tl(s,f,M,g),V=s.memoizedState,U!==f||ve!==V||kn.current||Tr?(typeof _e=="function"&&(Kc(s,a,_e,f),V=s.memoizedState),(U=Tr||ag(s,a,U,f,ve,V,ie))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(s.flags|=4194308)):(typeof M.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=V),M.props=f,M.state=V,M.context=ie,f=U):(typeof M.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{M=s.stateNode,Fm(i,s),U=s.memoizedProps,ie=s.type===s.elementType?U:xi(s.type,U),M.props=ie,Se=s.pendingProps,ve=M.context,V=a.contextType,typeof V=="object"&&V!==null?V=ri(V):(V=Bn(a)?Zr:Tn.current,V=zs(s,V));var He=a.getDerivedStateFromProps;(_e=typeof He=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==Se||ve!==V)&&ug(s,M,f,V),Tr=!1,ve=s.memoizedState,M.state=ve,Tl(s,f,M,g);var $e=s.memoizedState;U!==Se||ve!==$e||kn.current||Tr?(typeof He=="function"&&(Kc(s,a,He,f),$e=s.memoizedState),(ie=Tr||ag(s,a,ie,f,ve,$e,V)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(f,$e,V),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(f,$e,V)),typeof M.componentDidUpdate=="function"&&(s.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=$e),M.props=f,M.state=$e,M.context=V,f=ie):(typeof M.componentDidUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),f=!1)}return tf(i,s,a,f,_,g)}function tf(i,s,a,f,g,_){yg(i,s);var M=(s.flags&128)!==0;if(!f&&!M)return g&&wm(s,a,!1),Ji(i,s,_);f=s.stateNode,GS.current=s;var U=M&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&M?(s.child=Ws(s,i.child,null,_),s.child=Ws(s,null,U,_)):Nn(i,s,U,_),s.memoizedState=f.state,g&&wm(s,a,!0),s.child}function Sg(i){var s=i.stateNode;s.pendingContext?Mm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Mm(i,s.context,!1),kc(i,s.containerInfo)}function Eg(i,s,a,f,g){return Gs(),Dc(g),s.flags|=256,Nn(i,s,a,f),s.child}var nf={dehydrated:null,treeContext:null,retryLane:0};function rf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Mg(i,s,a){var f=s.pendingProps,g=$t.current,_=!1,M=(s.flags&128)!==0,U;if((U=M)||(U=i!==null&&i.memoizedState===null?!1:(g&2)!==0),U?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Gt($t,g&1),i===null)return Pc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(M=f.children,i=f.fallback,_?(f=s.mode,_=s.child,M={mode:"hidden",children:M},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=M):_=Xl(M,f,0,null),i=as(i,f,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=rf(a),s.memoizedState=nf,i):sf(s,M));if(g=i.memoizedState,g!==null&&(U=g.dehydrated,U!==null))return WS(i,s,M,f,U,g,a);if(_){_=f.fallback,M=s.mode,g=i.child,U=g.sibling;var V={mode:"hidden",children:f.children};return(M&1)===0&&s.child!==g?(f=s.child,f.childLanes=0,f.pendingProps=V,s.deletions=null):(f=Dr(g,V),f.subtreeFlags=g.subtreeFlags&14680064),U!==null?_=Dr(U,_):(_=as(_,M,a,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,M=i.child.memoizedState,M=M===null?rf(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},_.memoizedState=M,_.childLanes=i.childLanes&~a,s.memoizedState=nf,f}return _=i.child,i=_.sibling,f=Dr(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function sf(i,s){return s=Xl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Ll(i,s,a,f){return f!==null&&Dc(f),Ws(s,i.child,null,a),i=sf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function WS(i,s,a,f,g,_,M){if(a)return s.flags&256?(s.flags&=-257,f=Qc(Error(t(422))),Ll(i,s,M,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,g=s.mode,f=Xl({mode:"visible",children:f.children},g,0,null),_=as(_,g,M,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&Ws(s,i.child,null,M),s.child.memoizedState=rf(M),s.memoizedState=nf,_);if((s.mode&1)===0)return Ll(i,s,M,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var U=f.dgst;return f=U,_=Error(t(419)),f=Qc(_,f,void 0),Ll(i,s,M,f)}if(U=(M&i.childLanes)!==0,zn||U){if(f=mn,f!==null){switch(M&-M){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|M))!==0?0:g,g!==0&&g!==_.retryLane&&(_.retryLane=g,Zi(i,g),Mi(f,i,g,-1))}return Sf(),f=Qc(Error(t(421))),Ll(i,s,M,f)}return g.data==="$?"?(s.flags|=128,s.child=i.child,s=iE.bind(null,i),g._reactRetry=s,null):(i=_.treeContext,Zn=xr(g.nextSibling),Kn=s,Yt=!0,yi=null,i!==null&&(ni[ii++]=$i,ni[ii++]=Ki,ni[ii++]=Qr,$i=i.id,Ki=i.overflow,Qr=s),s=sf(s,f.children),s.flags|=4096,s)}function Tg(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),Uc(i.return,s,a)}function of(i,s,a,f,g){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:g}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=g)}function wg(i,s,a){var f=s.pendingProps,g=f.revealOrder,_=f.tail;if(Nn(i,s,f.children,a),f=$t.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Tg(i,a,s);else if(i.tag===19)Tg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Gt($t,f),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(a=s.child,g=null;a!==null;)i=a.alternate,i!==null&&wl(i)===null&&(g=a),a=a.sibling;a=g,a===null?(g=s.child,s.child=null):(g=a.sibling,a.sibling=null),of(s,!1,g,a,_);break;case"backwards":for(a=null,g=s.child,s.child=null;g!==null;){if(i=g.alternate,i!==null&&wl(i)===null){s.child=g;break}i=g.sibling,g.sibling=a,a=g,g=i}of(s,!0,a,null,_);break;case"together":of(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Il(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Ji(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),is|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Dr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Dr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function XS(i,s,a){switch(s.tag){case 3:Sg(s),Gs();break;case 5:Bm(s);break;case 1:Bn(s.type)&&ml(s);break;case 4:kc(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,g=s.memoizedProps.value;Gt(Sl,f._currentValue),f._currentValue=g;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Gt($t,$t.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Mg(i,s,a):(Gt($t,$t.current&1),i=Ji(i,s,a),i!==null?i.sibling:null);Gt($t,$t.current&1);break;case 19:if(f=(a&s.childLanes)!==0,(i.flags&128)!==0){if(f)return wg(i,s,a);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Gt($t,$t.current),f)break;return null;case 22:case 23:return s.lanes=0,_g(i,s,a)}return Ji(i,s,a)}var Ag,af,Cg,Rg;Ag=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},af=function(){},Cg=function(i,s,a,f){var g=i.memoizedProps;if(g!==f){i=s.stateNode,ts(Ii.current);var _=null;switch(a){case"input":g=At(i,g),f=At(i,f),_=[];break;case"select":g=ee({},g,{value:void 0}),f=ee({},f,{value:void 0}),_=[];break;case"textarea":g=_t(i,g),f=_t(i,f),_=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=dl)}Ye(a,f);var M;a=null;for(ie in g)if(!f.hasOwnProperty(ie)&&g.hasOwnProperty(ie)&&g[ie]!=null)if(ie==="style"){var U=g[ie];for(M in U)U.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?_||(_=[]):(_=_||[]).push(ie,null));for(ie in f){var V=f[ie];if(U=g?.[ie],f.hasOwnProperty(ie)&&V!==U&&(V!=null||U!=null))if(ie==="style")if(U){for(M in U)!U.hasOwnProperty(M)||V&&V.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in V)V.hasOwnProperty(M)&&U[M]!==V[M]&&(a||(a={}),a[M]=V[M])}else a||(_||(_=[]),_.push(ie,a)),a=V;else ie==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,U=U?U.__html:void 0,V!=null&&U!==V&&(_=_||[]).push(ie,V)):ie==="children"?typeof V!="string"&&typeof V!="number"||(_=_||[]).push(ie,""+V):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(V!=null&&ie==="onScroll"&&Xt("scroll",i),_||U===V||(_=[])):(_=_||[]).push(ie,V))}a&&(_=_||[]).push("style",a);var ie=_;(s.updateQueue=ie)&&(s.flags|=4)}},Rg=function(i,s,a,f){a!==f&&(s.flags|=4)};function sa(i,s){if(!Yt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function An(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var g=i.child;g!==null;)a|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)a|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function jS(i,s,a){var f=s.pendingProps;switch(Rc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(s),null;case 1:return Bn(s.type)&&pl(),An(s),null;case 3:return f=s.stateNode,Ys(),jt(kn),jt(Tn),Vc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(yl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,yi!==null&&(_f(yi),yi=null))),af(i,s),An(s),null;case 5:Bc(s);var g=ts(ea.current);if(a=s.type,i!==null&&s.stateNode!=null)Cg(i,s,a,f,g),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return An(s),null}if(i=ts(Ii.current),yl(s)){f=s.stateNode,a=s.type;var _=s.memoizedProps;switch(f[Li]=s,f[$o]=_,i=(s.mode&1)!==0,a){case"dialog":Xt("cancel",f),Xt("close",f);break;case"iframe":case"object":case"embed":Xt("load",f);break;case"video":case"audio":for(g=0;g<jo.length;g++)Xt(jo[g],f);break;case"source":Xt("error",f);break;case"img":case"image":case"link":Xt("error",f),Xt("load",f);break;case"details":Xt("toggle",f);break;case"input":ft(f,_),Xt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Xt("invalid",f);break;case"textarea":I(f,_),Xt("invalid",f)}Ye(a,_),g=null;for(var M in _)if(_.hasOwnProperty(M)){var U=_[M];M==="children"?typeof U=="string"?f.textContent!==U&&(_.suppressHydrationWarning!==!0&&fl(f.textContent,U,i),g=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(_.suppressHydrationWarning!==!0&&fl(f.textContent,U,i),g=["children",""+U]):o.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Xt("scroll",f)}switch(a){case"input":pt(f),Pt(f,_,!0);break;case"textarea":pt(f),q(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=dl)}f=g,s.updateQueue=f,f!==null&&(s.flags|=4)}else{M=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=de(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=M.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=M.createElement(a,{is:f.is}):(i=M.createElement(a),a==="select"&&(M=i,f.multiple?M.multiple=!0:f.size&&(M.size=f.size))):i=M.createElementNS(i,a),i[Li]=s,i[$o]=f,Ag(i,s,!1,!1),s.stateNode=i;e:{switch(M=Le(a,f),a){case"dialog":Xt("cancel",i),Xt("close",i),g=f;break;case"iframe":case"object":case"embed":Xt("load",i),g=f;break;case"video":case"audio":for(g=0;g<jo.length;g++)Xt(jo[g],i);g=f;break;case"source":Xt("error",i),g=f;break;case"img":case"image":case"link":Xt("error",i),Xt("load",i),g=f;break;case"details":Xt("toggle",i),g=f;break;case"input":ft(i,f),g=At(i,f),Xt("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=ee({},f,{value:void 0}),Xt("invalid",i);break;case"textarea":I(i,f),g=_t(i,f),Xt("invalid",i);break;default:g=f}Ye(a,g),U=g;for(_ in U)if(U.hasOwnProperty(_)){var V=U[_];_==="style"?Ne(i,V):_==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ke(i,V)):_==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&Ee(i,V):typeof V=="number"&&Ee(i,""+V):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?V!=null&&_==="onScroll"&&Xt("scroll",i):V!=null&&R(i,_,V,M))}switch(a){case"input":pt(i),Pt(i,f,!1);break;case"textarea":pt(i),q(i);break;case"option":f.value!=null&&i.setAttribute("value",""+pe(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?kt(i,!!f.multiple,_,!1):f.defaultValue!=null&&kt(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=dl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return An(s),null;case 6:if(i&&s.stateNode!=null)Rg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=ts(ea.current),ts(Ii.current),yl(s)){if(f=s.stateNode,a=s.memoizedProps,f[Li]=s,(_=f.nodeValue!==a)&&(i=Kn,i!==null))switch(i.tag){case 3:fl(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&fl(f.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[Li]=s,s.stateNode=f}return An(s),null;case 13:if(jt($t),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Yt&&Zn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Dm(),Gs(),s.flags|=98560,_=!1;else if(_=yl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Li]=s}else Gs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;An(s),_=!1}else yi!==null&&(_f(yi),yi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||($t.current&1)!==0?cn===0&&(cn=3):Sf())),s.updateQueue!==null&&(s.flags|=4),An(s),null);case 4:return Ys(),af(i,s),i===null&&Yo(s.stateNode.containerInfo),An(s),null;case 10:return Nc(s.type._context),An(s),null;case 17:return Bn(s.type)&&pl(),An(s),null;case 19:if(jt($t),_=s.memoizedState,_===null)return An(s),null;if(f=(s.flags&128)!==0,M=_.rendering,M===null)if(f)sa(_,!1);else{if(cn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(M=wl(i),M!==null){for(s.flags|=128,sa(_,!1),f=M.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)_=a,i=f,_.flags&=14680066,M=_.alternate,M===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=M.childLanes,_.lanes=M.lanes,_.child=M.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=M.memoizedProps,_.memoizedState=M.memoizedState,_.updateQueue=M.updateQueue,_.type=M.type,i=M.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Gt($t,$t.current&1|2),s.child}i=i.sibling}_.tail!==null&&X()>Zs&&(s.flags|=128,f=!0,sa(_,!1),s.lanes=4194304)}else{if(!f)if(i=wl(M),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),sa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!M.alternate&&!Yt)return An(s),null}else 2*X()-_.renderingStartTime>Zs&&a!==1073741824&&(s.flags|=128,f=!0,sa(_,!1),s.lanes=4194304);_.isBackwards?(M.sibling=s.child,s.child=M):(a=_.last,a!==null?a.sibling=M:s.child=M,_.last=M)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=X(),s.sibling=null,a=$t.current,Gt($t,f?a&1|2:a&1),s):(An(s),null);case 22:case 23:return xf(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Qn&1073741824)!==0&&(An(s),s.subtreeFlags&6&&(s.flags|=8192)):An(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function YS(i,s){switch(Rc(s),s.tag){case 1:return Bn(s.type)&&pl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ys(),jt(kn),jt(Tn),Vc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Bc(s),null;case 13:if(jt($t),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Gs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return jt($t),null;case 4:return Ys(),null;case 10:return Nc(s.type._context),null;case 22:case 23:return xf(),null;case 24:return null;default:return null}}var Nl=!1,Cn=!1,qS=typeof WeakSet=="function"?WeakSet:Set,je=null;function $s(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Qt(i,s,f)}else a.current=null}function lf(i,s,a){try{a()}catch(f){Qt(i,s,f)}}var bg=!1;function $S(i,s){if(yc=el,i=am(),fc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var g=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var M=0,U=-1,V=-1,ie=0,_e=0,Se=i,ve=null;t:for(;;){for(var He;Se!==a||g!==0&&Se.nodeType!==3||(U=M+g),Se!==_||f!==0&&Se.nodeType!==3||(V=M+f),Se.nodeType===3&&(M+=Se.nodeValue.length),(He=Se.firstChild)!==null;)ve=Se,Se=He;for(;;){if(Se===i)break t;if(ve===a&&++ie===g&&(U=M),ve===_&&++_e===f&&(V=M),(He=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=He}a=U===-1||V===-1?null:{start:U,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(xc={focusedElem:i,selectionRange:a},el=!1,je=s;je!==null;)if(s=je,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,je=i;else for(;je!==null;){s=je;try{var $e=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Qe=$e.memoizedProps,tn=$e.memoizedState,Y=s.stateNode,W=Y.getSnapshotBeforeUpdate(s.elementType===s.type?Qe:xi(s.type,Qe),tn);Y.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Q=s.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Qt(s,s.return,Ae)}if(i=s.sibling,i!==null){i.return=s.return,je=i;break}je=s.return}return $e=bg,bg=!1,$e}function oa(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var _=g.destroy;g.destroy=void 0,_!==void 0&&lf(s,a,_)}g=g.next}while(g!==f)}}function Ul(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function uf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function Pg(i){var s=i.alternate;s!==null&&(i.alternate=null,Pg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Li],delete s[$o],delete s[Tc],delete s[DS],delete s[LS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Dg(i){return i.tag===5||i.tag===3||i.tag===4}function Lg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Dg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function cf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=dl));else if(f!==4&&(i=i.child,i!==null))for(cf(i,s,a),i=i.sibling;i!==null;)cf(i,s,a),i=i.sibling}function ff(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(ff(i,s,a),i=i.sibling;i!==null;)ff(i,s,a),i=i.sibling}var yn=null,Si=!1;function Ar(i,s,a){for(a=a.child;a!==null;)Ig(i,s,a),a=a.sibling}function Ig(i,s,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 5:Cn||$s(a,s);case 6:var f=yn,g=Si;yn=null,Ar(i,s,a),yn=f,Si=g,yn!==null&&(Si?(i=yn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):yn.removeChild(a.stateNode));break;case 18:yn!==null&&(Si?(i=yn,a=a.stateNode,i.nodeType===8?Mc(i.parentNode,a):i.nodeType===1&&Mc(i,a),ko(i)):Mc(yn,a.stateNode));break;case 4:f=yn,g=Si,yn=a.stateNode.containerInfo,Si=!0,Ar(i,s,a),yn=f,Si=g;break;case 0:case 11:case 14:case 15:if(!Cn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var _=g,M=_.destroy;_=_.tag,M!==void 0&&((_&2)!==0||(_&4)!==0)&&lf(a,s,M),g=g.next}while(g!==f)}Ar(i,s,a);break;case 1:if(!Cn&&($s(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(U){Qt(a,s,U)}Ar(i,s,a);break;case 21:Ar(i,s,a);break;case 22:a.mode&1?(Cn=(f=Cn)||a.memoizedState!==null,Ar(i,s,a),Cn=f):Ar(i,s,a);break;default:Ar(i,s,a)}}function Ng(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new qS),s.forEach(function(f){var g=rE.bind(null,i,f);a.has(f)||(a.add(f),f.then(g,g))})}}function Ei(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var g=a[f];try{var _=i,M=s,U=M;e:for(;U!==null;){switch(U.tag){case 5:yn=U.stateNode,Si=!1;break e;case 3:yn=U.stateNode.containerInfo,Si=!0;break e;case 4:yn=U.stateNode.containerInfo,Si=!0;break e}U=U.return}if(yn===null)throw Error(t(160));Ig(_,M,g),yn=null,Si=!1;var V=g.alternate;V!==null&&(V.return=null),g.return=null}catch(ie){Qt(g,s,ie)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ug(s,i),s=s.sibling}function Ug(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ei(s,i),Ui(i),f&4){try{oa(3,i,i.return),Ul(3,i)}catch(Qe){Qt(i,i.return,Qe)}try{oa(5,i,i.return)}catch(Qe){Qt(i,i.return,Qe)}}break;case 1:Ei(s,i),Ui(i),f&512&&a!==null&&$s(a,a.return);break;case 5:if(Ei(s,i),Ui(i),f&512&&a!==null&&$s(a,a.return),i.flags&32){var g=i.stateNode;try{Ee(g,"")}catch(Qe){Qt(i,i.return,Qe)}}if(f&4&&(g=i.stateNode,g!=null)){var _=i.memoizedProps,M=a!==null?a.memoizedProps:_,U=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{U==="input"&&_.type==="radio"&&_.name!=null&&tt(g,_),Le(U,M);var ie=Le(U,_);for(M=0;M<V.length;M+=2){var _e=V[M],Se=V[M+1];_e==="style"?Ne(g,Se):_e==="dangerouslySetInnerHTML"?Ke(g,Se):_e==="children"?Ee(g,Se):R(g,_e,Se,ie)}switch(U){case"input":Ge(g,_);break;case"textarea":w(g,_);break;case"select":var ve=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!_.multiple;var He=_.value;He!=null?kt(g,!!_.multiple,He,!1):ve!==!!_.multiple&&(_.defaultValue!=null?kt(g,!!_.multiple,_.defaultValue,!0):kt(g,!!_.multiple,_.multiple?[]:"",!1))}g[$o]=_}catch(Qe){Qt(i,i.return,Qe)}}break;case 6:if(Ei(s,i),Ui(i),f&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,_=i.memoizedProps;try{g.nodeValue=_}catch(Qe){Qt(i,i.return,Qe)}}break;case 3:if(Ei(s,i),Ui(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{ko(s.containerInfo)}catch(Qe){Qt(i,i.return,Qe)}break;case 4:Ei(s,i),Ui(i);break;case 13:Ei(s,i),Ui(i),g=i.child,g.flags&8192&&(_=g.memoizedState!==null,g.stateNode.isHidden=_,!_||g.alternate!==null&&g.alternate.memoizedState!==null||(pf=X())),f&4&&Ng(i);break;case 22:if(_e=a!==null&&a.memoizedState!==null,i.mode&1?(Cn=(ie=Cn)||_e,Ei(s,i),Cn=ie):Ei(s,i),Ui(i),f&8192){if(ie=i.memoizedState!==null,(i.stateNode.isHidden=ie)&&!_e&&(i.mode&1)!==0)for(je=i,_e=i.child;_e!==null;){for(Se=je=_e;je!==null;){switch(ve=je,He=ve.child,ve.tag){case 0:case 11:case 14:case 15:oa(4,ve,ve.return);break;case 1:$s(ve,ve.return);var $e=ve.stateNode;if(typeof $e.componentWillUnmount=="function"){f=ve,a=ve.return;try{s=f,$e.props=s.memoizedProps,$e.state=s.memoizedState,$e.componentWillUnmount()}catch(Qe){Qt(f,a,Qe)}}break;case 5:$s(ve,ve.return);break;case 22:if(ve.memoizedState!==null){kg(Se);continue}}He!==null?(He.return=ve,je=He):kg(Se)}_e=_e.sibling}e:for(_e=null,Se=i;;){if(Se.tag===5){if(_e===null){_e=Se;try{g=Se.stateNode,ie?(_=g.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(U=Se.stateNode,V=Se.memoizedProps.style,M=V!=null&&V.hasOwnProperty("display")?V.display:null,U.style.display=Te("display",M))}catch(Qe){Qt(i,i.return,Qe)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ie?"":Se.memoizedProps}catch(Qe){Qt(i,i.return,Qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ei(s,i),Ui(i),f&4&&Ng(i);break;case 21:break;default:Ei(s,i),Ui(i)}}function Ui(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Dg(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(Ee(g,""),f.flags&=-33);var _=Lg(i);ff(i,_,g);break;case 3:case 4:var M=f.stateNode.containerInfo,U=Lg(i);cf(i,U,M);break;default:throw Error(t(161))}}catch(V){Qt(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function KS(i,s,a){je=i,Fg(i)}function Fg(i,s,a){for(var f=(i.mode&1)!==0;je!==null;){var g=je,_=g.child;if(g.tag===22&&f){var M=g.memoizedState!==null||Nl;if(!M){var U=g.alternate,V=U!==null&&U.memoizedState!==null||Cn;U=Nl;var ie=Cn;if(Nl=M,(Cn=V)&&!ie)for(je=g;je!==null;)M=je,V=M.child,M.tag===22&&M.memoizedState!==null?Bg(g):V!==null?(V.return=M,je=V):Bg(g);for(;_!==null;)je=_,Fg(_),_=_.sibling;je=g,Nl=U,Cn=ie}Og(i)}else(g.subtreeFlags&8772)!==0&&_!==null?(_.return=g,je=_):Og(i)}}function Og(i){for(;je!==null;){var s=je;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Cn||Ul(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Cn)if(a===null)f.componentDidMount();else{var g=s.elementType===s.type?a.memoizedProps:xi(s.type,a.memoizedProps);f.componentDidUpdate(g,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&km(s,_,f);break;case 3:var M=s.updateQueue;if(M!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}km(s,M,a)}break;case 5:var U=s.stateNode;if(a===null&&s.flags&4){a=U;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ie=s.alternate;if(ie!==null){var _e=ie.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&ko(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||s.flags&512&&uf(s)}catch(ve){Qt(s,s.return,ve)}}if(s===i){je=null;break}if(a=s.sibling,a!==null){a.return=s.return,je=a;break}je=s.return}}function kg(i){for(;je!==null;){var s=je;if(s===i){je=null;break}var a=s.sibling;if(a!==null){a.return=s.return,je=a;break}je=s.return}}function Bg(i){for(;je!==null;){var s=je;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Ul(4,s)}catch(V){Qt(s,a,V)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var g=s.return;try{f.componentDidMount()}catch(V){Qt(s,g,V)}}var _=s.return;try{uf(s)}catch(V){Qt(s,_,V)}break;case 5:var M=s.return;try{uf(s)}catch(V){Qt(s,M,V)}}}catch(V){Qt(s,s.return,V)}if(s===i){je=null;break}var U=s.sibling;if(U!==null){U.return=s.return,je=U;break}je=s.return}}var ZS=Math.ceil,Fl=A.ReactCurrentDispatcher,df=A.ReactCurrentOwner,oi=A.ReactCurrentBatchConfig,wt=0,mn=null,sn=null,xn=0,Qn=0,Ks=Sr(0),cn=0,aa=null,is=0,Ol=0,hf=0,la=null,Vn=null,pf=0,Zs=1/0,er=null,kl=!1,mf=null,Cr=null,Bl=!1,Rr=null,zl=0,ua=0,gf=null,Vl=-1,Hl=0;function Un(){return(wt&6)!==0?X():Vl!==-1?Vl:Vl=X()}function br(i){return(i.mode&1)===0?1:(wt&2)!==0&&xn!==0?xn&-xn:NS.transition!==null?(Hl===0&&(Hl=In()),Hl):(i=Et,i!==0||(i=window.event,i=i===void 0?16:Vp(i.type)),i)}function Mi(i,s,a,f){if(50<ua)throw ua=0,gf=null,Error(t(185));en(i,a,f),((wt&2)===0||i!==mn)&&(i===mn&&((wt&2)===0&&(Ol|=a),cn===4&&Pr(i,xn)),Hn(i,f),a===1&&wt===0&&(s.mode&1)===0&&(Zs=X()+500,gl&&Mr()))}function Hn(i,s){var a=i.callbackNode;qr(i,s);var f=vi(i,i===mn?xn:0);if(f===0)a!==null&&j(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&j(a),s===1)i.tag===0?IS(Vg.bind(null,i)):Am(Vg.bind(null,i)),bS(function(){(wt&6)===0&&Mr()}),a=null;else{switch(Ip(f)){case 1:a=Ue;break;case 4:a=qe;break;case 16:a=Ve;break;case 536870912:a=at;break;default:a=Ve}a=$g(a,zg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function zg(i,s){if(Vl=-1,Hl=0,(wt&6)!==0)throw Error(t(327));var a=i.callbackNode;if(Qs()&&i.callbackNode!==a)return null;var f=vi(i,i===mn?xn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=Gl(i,f);else{s=f;var g=wt;wt|=2;var _=Gg();(mn!==i||xn!==s)&&(er=null,Zs=X()+500,ss(i,s));do try{eE();break}catch(U){Hg(i,U)}while(!0);Ic(),Fl.current=_,wt=g,sn!==null?s=0:(mn=null,xn=0,s=cn)}if(s!==0){if(s===2&&(g=zt(i),g!==0&&(f=g,s=vf(i,g))),s===1)throw a=aa,ss(i,0),Pr(i,f),Hn(i,X()),a;if(s===6)Pr(i,f);else{if(g=i.current.alternate,(f&30)===0&&!QS(g)&&(s=Gl(i,f),s===2&&(_=zt(i),_!==0&&(f=_,s=vf(i,_))),s===1))throw a=aa,ss(i,0),Pr(i,f),Hn(i,X()),a;switch(i.finishedWork=g,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:os(i,Vn,er);break;case 3:if(Pr(i,f),(f&130023424)===f&&(s=pf+500-X(),10<s)){if(vi(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){Un(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Ec(os.bind(null,i,Vn,er),s);break}os(i,Vn,er);break;case 4:if(Pr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,g=-1;0<f;){var M=31-Tt(f);_=1<<M,M=s[M],M>g&&(g=M),f&=~_}if(f=g,f=X()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*ZS(f/1960))-f,10<f){i.timeoutHandle=Ec(os.bind(null,i,Vn,er),f);break}os(i,Vn,er);break;case 5:os(i,Vn,er);break;default:throw Error(t(329))}}}return Hn(i,X()),i.callbackNode===a?zg.bind(null,i):null}function vf(i,s){var a=la;return i.current.memoizedState.isDehydrated&&(ss(i,s).flags|=256),i=Gl(i,s),i!==2&&(s=Vn,Vn=a,s!==null&&_f(s)),i}function _f(i){Vn===null?Vn=i:Vn.push.apply(Vn,i)}function QS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var g=a[f],_=g.getSnapshot;g=g.value;try{if(!_i(_(),g))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Pr(i,s){for(s&=~hf,s&=~Ol,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-Tt(s),f=1<<a;i[a]=-1,s&=~f}}function Vg(i){if((wt&6)!==0)throw Error(t(327));Qs();var s=vi(i,0);if((s&1)===0)return Hn(i,X()),null;var a=Gl(i,s);if(i.tag!==0&&a===2){var f=zt(i);f!==0&&(s=f,a=vf(i,f))}if(a===1)throw a=aa,ss(i,0),Pr(i,s),Hn(i,X()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,os(i,Vn,er),Hn(i,X()),null}function yf(i,s){var a=wt;wt|=1;try{return i(s)}finally{wt=a,wt===0&&(Zs=X()+500,gl&&Mr())}}function rs(i){Rr!==null&&Rr.tag===0&&(wt&6)===0&&Qs();var s=wt;wt|=1;var a=oi.transition,f=Et;try{if(oi.transition=null,Et=1,i)return i()}finally{Et=f,oi.transition=a,wt=s,(wt&6)===0&&Mr()}}function xf(){Qn=Ks.current,jt(Ks)}function ss(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,RS(a)),sn!==null)for(a=sn.return;a!==null;){var f=a;switch(Rc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&pl();break;case 3:Ys(),jt(kn),jt(Tn),Vc();break;case 5:Bc(f);break;case 4:Ys();break;case 13:jt($t);break;case 19:jt($t);break;case 10:Nc(f.type._context);break;case 22:case 23:xf()}a=a.return}if(mn=i,sn=i=Dr(i.current,null),xn=Qn=s,cn=0,aa=null,hf=Ol=is=0,Vn=la=null,es!==null){for(s=0;s<es.length;s++)if(a=es[s],f=a.interleaved,f!==null){a.interleaved=null;var g=f.next,_=a.pending;if(_!==null){var M=_.next;_.next=g,f.next=M}a.pending=f}es=null}return i}function Hg(i,s){do{var a=sn;try{if(Ic(),Al.current=Pl,Cl){for(var f=Kt.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Cl=!1}if(ns=0,pn=un=Kt=null,ta=!1,na=0,df.current=null,a===null||a.return===null){cn=1,aa=s,sn=null;break}e:{var _=i,M=a.return,U=a,V=s;if(s=xn,U.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ie=V,_e=U,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var He=hg(M);if(He!==null){He.flags&=-257,pg(He,M,U,_,s),He.mode&1&&dg(_,ie,s),s=He,V=ie;var $e=s.updateQueue;if($e===null){var Qe=new Set;Qe.add(V),s.updateQueue=Qe}else $e.add(V);break e}else{if((s&1)===0){dg(_,ie,s),Sf();break e}V=Error(t(426))}}else if(Yt&&U.mode&1){var tn=hg(M);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),pg(tn,M,U,_,s),Dc(qs(V,U));break e}}_=V=qs(V,U),cn!==4&&(cn=2),la===null?la=[_]:la.push(_),_=M;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Y=cg(_,V,s);Om(_,Y);break e;case 1:U=V;var W=_.type,Q=_.stateNode;if((_.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(Cr===null||!Cr.has(Q)))){_.flags|=65536,s&=-s,_.lanes|=s;var Ae=fg(_,U,s);Om(_,Ae);break e}}_=_.return}while(_!==null)}Xg(a)}catch(Je){s=Je,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function Gg(){var i=Fl.current;return Fl.current=Pl,i===null?Pl:i}function Sf(){(cn===0||cn===3||cn===2)&&(cn=4),mn===null||(is&268435455)===0&&(Ol&268435455)===0||Pr(mn,xn)}function Gl(i,s){var a=wt;wt|=2;var f=Gg();(mn!==i||xn!==s)&&(er=null,ss(i,s));do try{JS();break}catch(g){Hg(i,g)}while(!0);if(Ic(),wt=a,Fl.current=f,sn!==null)throw Error(t(261));return mn=null,xn=0,cn}function JS(){for(;sn!==null;)Wg(sn)}function eE(){for(;sn!==null&&!oe();)Wg(sn)}function Wg(i){var s=qg(i.alternate,i,Qn);i.memoizedProps=i.pendingProps,s===null?Xg(i):sn=s,df.current=null}function Xg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=jS(a,s,Qn),a!==null){sn=a;return}}else{if(a=YS(a,s),a!==null){a.flags&=32767,sn=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{cn=6,sn=null;return}}if(s=s.sibling,s!==null){sn=s;return}sn=s=i}while(s!==null);cn===0&&(cn=5)}function os(i,s,a){var f=Et,g=oi.transition;try{oi.transition=null,Et=1,tE(i,s,a,f)}finally{oi.transition=g,Et=f}return null}function tE(i,s,a,f){do Qs();while(Rr!==null);if((wt&6)!==0)throw Error(t(327));a=i.finishedWork;var g=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(Mn(i,_),i===mn&&(sn=mn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Bl||(Bl=!0,$g(Ve,function(){return Qs(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=oi.transition,oi.transition=null;var M=Et;Et=1;var U=wt;wt|=4,df.current=null,$S(i,a),Ug(a,i),SS(xc),el=!!yc,xc=yc=null,i.current=a,KS(a),le(),wt=U,Et=M,oi.transition=_}else i.current=a;if(Bl&&(Bl=!1,Rr=i,zl=g),_=i.pendingLanes,_===0&&(Cr=null),Lt(a.stateNode),Hn(i,X()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)g=s[a],f(g.value,{componentStack:g.stack,digest:g.digest});if(kl)throw kl=!1,i=mf,mf=null,i;return(zl&1)!==0&&i.tag!==0&&Qs(),_=i.pendingLanes,(_&1)!==0?i===gf?ua++:(ua=0,gf=i):ua=0,Mr(),null}function Qs(){if(Rr!==null){var i=Ip(zl),s=oi.transition,a=Et;try{if(oi.transition=null,Et=16>i?16:i,Rr===null)var f=!1;else{if(i=Rr,Rr=null,zl=0,(wt&6)!==0)throw Error(t(331));var g=wt;for(wt|=4,je=i.current;je!==null;){var _=je,M=_.child;if((je.flags&16)!==0){var U=_.deletions;if(U!==null){for(var V=0;V<U.length;V++){var ie=U[V];for(je=ie;je!==null;){var _e=je;switch(_e.tag){case 0:case 11:case 15:oa(8,_e,_)}var Se=_e.child;if(Se!==null)Se.return=_e,je=Se;else for(;je!==null;){_e=je;var ve=_e.sibling,He=_e.return;if(Pg(_e),_e===ie){je=null;break}if(ve!==null){ve.return=He,je=ve;break}je=He}}}var $e=_.alternate;if($e!==null){var Qe=$e.child;if(Qe!==null){$e.child=null;do{var tn=Qe.sibling;Qe.sibling=null,Qe=tn}while(Qe!==null)}}je=_}}if((_.subtreeFlags&2064)!==0&&M!==null)M.return=_,je=M;else e:for(;je!==null;){if(_=je,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:oa(9,_,_.return)}var Y=_.sibling;if(Y!==null){Y.return=_.return,je=Y;break e}je=_.return}}var W=i.current;for(je=W;je!==null;){M=je;var Q=M.child;if((M.subtreeFlags&2064)!==0&&Q!==null)Q.return=M,je=Q;else e:for(M=W;je!==null;){if(U=je,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ul(9,U)}}catch(Je){Qt(U,U.return,Je)}if(U===M){je=null;break e}var Ae=U.sibling;if(Ae!==null){Ae.return=U.return,je=Ae;break e}je=U.return}}if(wt=g,Mr(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(et,i)}catch{}f=!0}return f}finally{Et=a,oi.transition=s}}return!1}function jg(i,s,a){s=qs(a,s),s=cg(i,s,1),i=wr(i,s,1),s=Un(),i!==null&&(en(i,1,s),Hn(i,s))}function Qt(i,s,a){if(i.tag===3)jg(i,i,a);else for(;s!==null;){if(s.tag===3){jg(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Cr===null||!Cr.has(f))){i=qs(a,i),i=fg(s,i,1),s=wr(s,i,1),i=Un(),s!==null&&(en(s,1,i),Hn(s,i));break}}s=s.return}}function nE(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=Un(),i.pingedLanes|=i.suspendedLanes&a,mn===i&&(xn&a)===a&&(cn===4||cn===3&&(xn&130023424)===xn&&500>X()-pf?ss(i,0):hf|=a),Hn(i,s)}function Yg(i,s){s===0&&((i.mode&1)===0?s=1:(s=St,St<<=1,(St&130023424)===0&&(St=4194304)));var a=Un();i=Zi(i,s),i!==null&&(en(i,s,a),Hn(i,a))}function iE(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Yg(i,a)}function rE(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(a=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Yg(i,a)}var qg;qg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||kn.current)zn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return zn=!1,XS(i,s,a);zn=(i.flags&131072)!==0}else zn=!1,Yt&&(s.flags&1048576)!==0&&Cm(s,_l,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Il(i,s),i=s.pendingProps;var g=zs(s,Tn.current);js(s,a),g=Wc(null,s,f,i,g,a);var _=Xc();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Bn(f)?(_=!0,ml(s)):_=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Oc(s),g.updater=Dl,s.stateNode=g,g._reactInternals=s,Zc(s,f,i,a),s=tf(null,s,f,!0,_,a)):(s.tag=0,Yt&&_&&Cc(s),Nn(null,s,g,a),s=s.child),s;case 16:f=s.elementType;e:{switch(Il(i,s),i=s.pendingProps,g=f._init,f=g(f._payload),s.type=f,g=s.tag=oE(f),i=xi(f,i),g){case 0:s=ef(null,s,f,i,a);break e;case 1:s=xg(null,s,f,i,a);break e;case 11:s=mg(null,s,f,i,a);break e;case 14:s=gg(null,s,f,xi(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:xi(f,g),ef(i,s,f,g,a);case 1:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:xi(f,g),xg(i,s,f,g,a);case 3:e:{if(Sg(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,g=_.element,Fm(i,s),Tl(s,f,null,a);var M=s.memoizedState;if(f=M.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){g=qs(Error(t(423)),s),s=Eg(i,s,f,a,g);break e}else if(f!==g){g=qs(Error(t(424)),s),s=Eg(i,s,f,a,g);break e}else for(Zn=xr(s.stateNode.containerInfo.firstChild),Kn=s,Yt=!0,yi=null,a=Nm(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),f===g){s=Ji(i,s,a);break e}Nn(i,s,f,a)}s=s.child}return s;case 5:return Bm(s),i===null&&Pc(s),f=s.type,g=s.pendingProps,_=i!==null?i.memoizedProps:null,M=g.children,Sc(f,g)?M=null:_!==null&&Sc(f,_)&&(s.flags|=32),yg(i,s),Nn(i,s,M,a),s.child;case 6:return i===null&&Pc(s),null;case 13:return Mg(i,s,a);case 4:return kc(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Ws(s,null,f,a):Nn(i,s,f,a),s.child;case 11:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:xi(f,g),mg(i,s,f,g,a);case 7:return Nn(i,s,s.pendingProps,a),s.child;case 8:return Nn(i,s,s.pendingProps.children,a),s.child;case 12:return Nn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,g=s.pendingProps,_=s.memoizedProps,M=g.value,Gt(Sl,f._currentValue),f._currentValue=M,_!==null)if(_i(_.value,M)){if(_.children===g.children&&!kn.current){s=Ji(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var U=_.dependencies;if(U!==null){M=_.child;for(var V=U.firstContext;V!==null;){if(V.context===f){if(_.tag===1){V=Qi(-1,a&-a),V.tag=2;var ie=_.updateQueue;if(ie!==null){ie=ie.shared;var _e=ie.pending;_e===null?V.next=V:(V.next=_e.next,_e.next=V),ie.pending=V}}_.lanes|=a,V=_.alternate,V!==null&&(V.lanes|=a),Uc(_.return,a,s),U.lanes|=a;break}V=V.next}}else if(_.tag===10)M=_.type===s.type?null:_.child;else if(_.tag===18){if(M=_.return,M===null)throw Error(t(341));M.lanes|=a,U=M.alternate,U!==null&&(U.lanes|=a),Uc(M,a,s),M=_.sibling}else M=_.child;if(M!==null)M.return=_;else for(M=_;M!==null;){if(M===s){M=null;break}if(_=M.sibling,_!==null){_.return=M.return,M=_;break}M=M.return}_=M}Nn(i,s,g.children,a),s=s.child}return s;case 9:return g=s.type,f=s.pendingProps.children,js(s,a),g=ri(g),f=f(g),s.flags|=1,Nn(i,s,f,a),s.child;case 14:return f=s.type,g=xi(f,s.pendingProps),g=xi(f.type,g),gg(i,s,f,g,a);case 15:return vg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:xi(f,g),Il(i,s),s.tag=1,Bn(f)?(i=!0,ml(s)):i=!1,js(s,a),lg(s,f,g),Zc(s,f,g,a),tf(null,s,f,!0,i,a);case 19:return wg(i,s,a);case 22:return _g(i,s,a)}throw Error(t(156,s.tag))};function $g(i,s){return b(i,s)}function sE(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(i,s,a,f){return new sE(i,s,a,f)}function Ef(i){return i=i.prototype,!(!i||!i.isReactComponent)}function oE(i){if(typeof i=="function")return Ef(i)?1:0;if(i!=null){if(i=i.$$typeof,i===$)return 11;if(i===he)return 14}return 2}function Dr(i,s){var a=i.alternate;return a===null?(a=ai(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Wl(i,s,a,f,g,_){var M=2;if(f=i,typeof i=="function")Ef(i)&&(M=1);else if(typeof i=="string")M=5;else e:switch(i){case F:return as(a.children,g,_,s);case k:M=8,g|=8;break;case P:return i=ai(12,a,s,g|2),i.elementType=P,i.lanes=_,i;case ne:return i=ai(13,a,s,g),i.elementType=ne,i.lanes=_,i;case ue:return i=ai(19,a,s,g),i.elementType=ue,i.lanes=_,i;case se:return Xl(a,g,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:M=10;break e;case H:M=9;break e;case $:M=11;break e;case he:M=14;break e;case K:M=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ai(M,a,s,g),s.elementType=i,s.type=f,s.lanes=_,s}function as(i,s,a,f){return i=ai(7,i,f,s),i.lanes=a,i}function Xl(i,s,a,f){return i=ai(22,i,f,s),i.elementType=se,i.lanes=a,i.stateNode={isHidden:!1},i}function Mf(i,s,a){return i=ai(6,i,null,s),i.lanes=a,i}function Tf(i,s,a){return s=ai(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function aE(i,s,a,f,g){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function wf(i,s,a,f,g,_,M,U,V){return i=new aE(i,s,a,U,V),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ai(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(_),i}function lE(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function Kg(i){if(!i)return Er;i=i._reactInternals;e:{if(ji(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Bn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Bn(a))return Tm(i,a,s)}return s}function Zg(i,s,a,f,g,_,M,U,V){return i=wf(a,f,!0,i,g,_,M,U,V),i.context=Kg(null),a=i.current,f=Un(),g=br(a),_=Qi(f,g),_.callback=s??null,wr(a,_,g),i.current.lanes=g,en(i,g,f),Hn(i,f),i}function jl(i,s,a,f){var g=s.current,_=Un(),M=br(g);return a=Kg(a),s.context===null?s.context=a:s.pendingContext=a,s=Qi(_,M),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=wr(g,s,M),i!==null&&(Mi(i,g,M,_),Ml(i,g,M)),M}function Yl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Qg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Af(i,s){Qg(i,s),(i=i.alternate)&&Qg(i,s)}function uE(){return null}var Jg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Cf(i){this._internalRoot=i}ql.prototype.render=Cf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));jl(i,s,null,null)},ql.prototype.unmount=Cf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;rs(function(){jl(null,i,null,null)}),s[Yi]=null}};function ql(i){this._internalRoot=i}ql.prototype.unstable_scheduleHydration=function(i){if(i){var s=Fp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<vr.length&&s!==0&&s<vr[a].priority;a++);vr.splice(a,0,i),a===0&&Bp(i)}};function Rf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function $l(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function ev(){}function cE(i,s,a,f,g){if(g){if(typeof f=="function"){var _=f;f=function(){var ie=Yl(M);_.call(ie)}}var M=Zg(s,f,i,0,null,!1,!1,"",ev);return i._reactRootContainer=M,i[Yi]=M.current,Yo(i.nodeType===8?i.parentNode:i),rs(),M}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var U=f;f=function(){var ie=Yl(V);U.call(ie)}}var V=wf(i,0,!1,null,null,!1,!1,"",ev);return i._reactRootContainer=V,i[Yi]=V.current,Yo(i.nodeType===8?i.parentNode:i),rs(function(){jl(s,V,a,f)}),V}function Kl(i,s,a,f,g){var _=a._reactRootContainer;if(_){var M=_;if(typeof g=="function"){var U=g;g=function(){var V=Yl(M);U.call(V)}}jl(s,M,i,g)}else M=cE(a,s,i,g,f);return Yl(M)}Np=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=ln(s.pendingLanes);a!==0&&($r(s,a|1),Hn(s,X()),(wt&6)===0&&(Zs=X()+500,Mr()))}break;case 13:rs(function(){var f=Zi(i,1);if(f!==null){var g=Un();Mi(f,i,1,g)}}),Af(i,1)}},Qu=function(i){if(i.tag===13){var s=Zi(i,134217728);if(s!==null){var a=Un();Mi(s,i,134217728,a)}Af(i,134217728)}},Up=function(i){if(i.tag===13){var s=br(i),a=Zi(i,s);if(a!==null){var f=Un();Mi(a,i,s,f)}Af(i,s)}},Fp=function(){return Et},Op=function(i,s){var a=Et;try{return Et=i,s()}finally{Et=a}},Me=function(i,s,a){switch(s){case"input":if(Ge(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var g=hl(f);if(!g)throw Error(t(90));Ht(f),Ge(f,g)}}}break;case"textarea":w(i,a);break;case"select":s=a.value,s!=null&&kt(i,!!a.multiple,s,!1)}},Ze=yf,mt=rs;var fE={usingClientEntryPoint:!1,Events:[Ko,ks,hl,J,Pe,yf]},ca={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dE={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Ka(i),i===null?null:i.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||uE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{et=Zl.inject(dE),dt=Zl}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fE,Gn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(s))throw Error(t(200));return lE(i,s,null,a)},Gn.createRoot=function(i,s){if(!Rf(i))throw Error(t(299));var a=!1,f="",g=Jg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=wf(i,1,!1,null,null,a,!1,f,g),i[Yi]=s.current,Yo(i.nodeType===8?i.parentNode:i),new Cf(s)},Gn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Ka(s),i=i===null?null:i.stateNode,i},Gn.flushSync=function(i){return rs(i)},Gn.hydrate=function(i,s,a){if(!$l(s))throw Error(t(200));return Kl(null,i,s,!0,a)},Gn.hydrateRoot=function(i,s,a){if(!Rf(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,g=!1,_="",M=Jg;if(a!=null&&(a.unstable_strictMode===!0&&(g=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),s=Zg(s,null,i,1,a??null,g,!1,_,M),i[Yi]=s.current,Yo(i),f)for(i=0;i<f.length;i++)a=f[i],g=a._getVersion,g=g(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,g]:s.mutableSourceEagerHydrationData.push(a,g);return new ql(s)},Gn.render=function(i,s,a){if(!$l(s))throw Error(t(200));return Kl(null,i,s,!1,a)},Gn.unmountComponentAtNode=function(i){if(!$l(i))throw Error(t(40));return i._reactRootContainer?(rs(function(){Kl(null,null,i,!1,function(){i._reactRootContainer=null,i[Yi]=null})}),!0):!1},Gn.unstable_batchedUpdates=yf,Gn.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!$l(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Kl(i,s,a,!1,f)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var lv;function M_(){if(lv)return Df.exports;lv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Df.exports=yE(),Df.exports}var uv;function xE(){if(uv)return Ql;uv=1;var n=M_();return Ql.createRoot=n.createRoot,Ql.hydrateRoot=n.hydrateRoot,Ql}var SE=xE(),Oe=Bh();const De=E_(Oe);var EE=M_();const ME=E_(EE);function TE(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}const wE=n=>{switch(n){case"success":return RE;case"info":return PE;case"warning":return bE;case"error":return DE;default:return null}},AE=Array(12).fill(0),CE=({visible:n,className:e})=>De.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":n},De.createElement("div",{className:"sonner-spinner"},AE.map((t,r)=>De.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),RE=De.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},De.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),bE=De.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},De.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),PE=De.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},De.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),DE=De.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},De.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),LE=De.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},De.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),De.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),IE=()=>{const[n,e]=De.useState(document.hidden);return De.useEffect(()=>{const t=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),n};let Cd=1;class NE{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;const{message:r,...o}=e,l=typeof e?.id=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Cd++,u=this.toasts.find(d=>d.id===l),c=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(l)&&this.dismissedToasts.delete(l),u?this.toasts=this.toasts.map(d=>d.id===l?(this.publish({...d,...e,id:l,title:r}),{...d,...e,id:l,dismissible:c,title:r}):d):this.addToast({title:r,...o,dismissible:c,id:l}),l},this.dismiss=e=>(e?(this.dismissedToasts.add(e),requestAnimationFrame(()=>this.subscribers.forEach(t=>t({id:e,dismiss:!0})))):this.toasts.forEach(t=>{this.subscribers.forEach(r=>r({id:t.id,dismiss:!0}))}),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let r;t.loading!==void 0&&(r=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));const o=Promise.resolve(e instanceof Function?e():e);let l=r!==void 0,u;const c=o.then(async h=>{if(u=["resolve",h],De.isValidElement(h))l=!1,this.create({id:r,type:"default",message:h});else if(FE(h)&&!h.ok){l=!1;const p=typeof t.error=="function"?await t.error(`HTTP error! status: ${h.status}`):t.error,v=typeof t.description=="function"?await t.description(`HTTP error! status: ${h.status}`):t.description,E=typeof p=="object"&&!De.isValidElement(p)?p:{message:p};this.create({id:r,type:"error",description:v,...E})}else if(h instanceof Error){l=!1;const p=typeof t.error=="function"?await t.error(h):t.error,v=typeof t.description=="function"?await t.description(h):t.description,E=typeof p=="object"&&!De.isValidElement(p)?p:{message:p};this.create({id:r,type:"error",description:v,...E})}else if(t.success!==void 0){l=!1;const p=typeof t.success=="function"?await t.success(h):t.success,v=typeof t.description=="function"?await t.description(h):t.description,E=typeof p=="object"&&!De.isValidElement(p)?p:{message:p};this.create({id:r,type:"success",description:v,...E})}}).catch(async h=>{if(u=["reject",h],t.error!==void 0){l=!1;const m=typeof t.error=="function"?await t.error(h):t.error,p=typeof t.description=="function"?await t.description(h):t.description,x=typeof m=="object"&&!De.isValidElement(m)?m:{message:m};this.create({id:r,type:"error",description:p,...x})}}).finally(()=>{l&&(this.dismiss(r),r=void 0),t.finally==null||t.finally.call(t)}),d=()=>new Promise((h,m)=>c.then(()=>u[0]==="reject"?m(u[1]):h(u[1])).catch(m));return typeof r!="string"&&typeof r!="number"?{unwrap:d}:Object.assign(r,{unwrap:d})},this.custom=(e,t)=>{const r=t?.id||Cd++;return this.create({jsx:e(r),id:r,...t}),r},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Xn=new NE,UE=(n,e)=>{const t=e?.id||Cd++;return Xn.addToast({title:n,...e,id:t}),t},FE=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",OE=UE,kE=()=>Xn.toasts,BE=()=>Xn.getActiveToasts();Object.assign(OE,{success:Xn.success,info:Xn.info,warning:Xn.warning,error:Xn.error,custom:Xn.custom,message:Xn.message,promise:Xn.promise,dismiss:Xn.dismiss,loading:Xn.loading},{getHistory:kE,getToasts:BE});TE("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function Jl(n){return n.label!==void 0}const zE=3,VE="24px",HE="16px",cv=4e3,GE=356,WE=14,XE=45,jE=200;function Fi(...n){return n.filter(Boolean).join(" ")}function YE(n){const[e,t]=n.split("-"),r=[];return e&&r.push(e),t&&r.push(t),r}const qE=n=>{var e,t,r,o,l,u,c,d,h;const{invert:m,toast:p,unstyled:v,interacting:x,setHeights:E,visibleToasts:T,heights:S,index:y,toasts:D,expanded:R,removeToast:A,defaultRichColors:N,closeButton:L,style:F,cancelButtonStyle:k,actionButtonStyle:P,className:C="",descriptionClassName:H="",duration:$,position:ne,gap:ue,expandByDefault:he,classNames:K,icons:se,closeButtonAriaLabel:z="Close toast"}=n,[ae,ee]=De.useState(null),[O,re]=De.useState(null),[ye,be]=De.useState(!1),[Re,Z]=De.useState(!1),[ce,pe]=De.useState(!1),[Ie,ke]=De.useState(!1),[pt,Ht]=De.useState(!1),[B,At]=De.useState(0),[ft,tt]=De.useState(0),Ge=De.useRef(p.duration||$||cv),Pt=De.useRef(null),Be=De.useRef(null),ut=y===0,kt=y+1<=T,_t=p.type,I=p.dismissible!==!1,w=p.className||"",q=p.descriptionClassName||"",de=De.useMemo(()=>S.findIndex(J=>J.toastId===p.id)||0,[S,p.id]),ge=De.useMemo(()=>{var J;return(J=p.closeButton)!=null?J:L},[p.closeButton,L]),fe=De.useMemo(()=>p.duration||$||cv,[p.duration,$]),Ke=De.useRef(0),Ee=De.useRef(0),We=De.useRef(0),Xe=De.useRef(null),[Te,Ne]=ne.split("-"),nt=De.useMemo(()=>S.reduce((J,Pe,Ze)=>Ze>=de?J:J+Pe.height,0),[S,de]),Ye=IE(),Le=p.invert||m,lt=_t==="loading";Ee.current=De.useMemo(()=>de*ue+nt,[de,nt]),De.useEffect(()=>{Ge.current=fe},[fe]),De.useEffect(()=>{be(!0)},[]),De.useEffect(()=>{const J=Be.current;if(J){const Pe=J.getBoundingClientRect().height;return tt(Pe),E(Ze=>[{toastId:p.id,height:Pe,position:p.position},...Ze]),()=>E(Ze=>Ze.filter(mt=>mt.toastId!==p.id))}},[E,p.id]),De.useLayoutEffect(()=>{if(!ye)return;const J=Be.current,Pe=J.style.height;J.style.height="auto";const Ze=J.getBoundingClientRect().height;J.style.height=Pe,tt(Ze),E(mt=>mt.find(Dt=>Dt.toastId===p.id)?mt.map(Dt=>Dt.toastId===p.id?{...Dt,height:Ze}:Dt):[{toastId:p.id,height:Ze,position:p.position},...mt])},[ye,p.title,p.description,E,p.id,p.jsx,p.action,p.cancel]);const G=De.useCallback(()=>{Z(!0),At(Ee.current),E(J=>J.filter(Pe=>Pe.toastId!==p.id)),setTimeout(()=>{A(p)},jE)},[p,A,E,Ee]);De.useEffect(()=>{if(p.promise&&_t==="loading"||p.duration===1/0||p.type==="loading")return;let J;return R||x||Ye?(()=>{if(We.current<Ke.current){const mt=new Date().getTime()-Ke.current;Ge.current=Ge.current-mt}We.current=new Date().getTime()})():(()=>{Ge.current!==1/0&&(Ke.current=new Date().getTime(),J=setTimeout(()=>{p.onAutoClose==null||p.onAutoClose.call(p,p),G()},Ge.current))})(),()=>clearTimeout(J)},[R,x,p,_t,Ye,G]),De.useEffect(()=>{p.delete&&(G(),p.onDismiss==null||p.onDismiss.call(p,p))},[G,p.delete]);function Me(){var J;if(se?.loading){var Pe;return De.createElement("div",{className:Fi(K?.loader,p==null||(Pe=p.classNames)==null?void 0:Pe.loader,"sonner-loader"),"data-visible":_t==="loading"},se.loading)}return De.createElement(CE,{className:Fi(K?.loader,p==null||(J=p.classNames)==null?void 0:J.loader),visible:_t==="loading"})}const Ce=p.icon||se?.[_t]||wE(_t);var ze,xe;return De.createElement("li",{tabIndex:0,ref:Be,className:Fi(C,w,K?.toast,p==null||(e=p.classNames)==null?void 0:e.toast,K?.default,K?.[_t],p==null||(t=p.classNames)==null?void 0:t[_t]),"data-sonner-toast":"","data-rich-colors":(ze=p.richColors)!=null?ze:N,"data-styled":!(p.jsx||p.unstyled||v),"data-mounted":ye,"data-promise":!!p.promise,"data-swiped":pt,"data-removed":Re,"data-visible":kt,"data-y-position":Te,"data-x-position":Ne,"data-index":y,"data-front":ut,"data-swiping":ce,"data-dismissible":I,"data-type":_t,"data-invert":Le,"data-swipe-out":Ie,"data-swipe-direction":O,"data-expanded":!!(R||he&&ye),"data-testid":p.testId,style:{"--index":y,"--toasts-before":y,"--z-index":D.length-y,"--offset":`${Re?B:Ee.current}px`,"--initial-height":he?"auto":`${ft}px`,...F,...p.style},onDragEnd:()=>{pe(!1),ee(null),Xe.current=null},onPointerDown:J=>{J.button!==2&&(lt||!I||(Pt.current=new Date,At(Ee.current),J.target.setPointerCapture(J.pointerId),J.target.tagName!=="BUTTON"&&(pe(!0),Xe.current={x:J.clientX,y:J.clientY})))},onPointerUp:()=>{var J,Pe,Ze;if(Ie||!I)return;Xe.current=null;const mt=Number(((J=Be.current)==null?void 0:J.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),yt=Number(((Pe=Be.current)==null?void 0:Pe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Dt=new Date().getTime()-((Ze=Pt.current)==null?void 0:Ze.getTime()),It=ae==="x"?mt:yt,mi=Math.abs(It)/Dt;if(Math.abs(It)>=XE||mi>.11){At(Ee.current),p.onDismiss==null||p.onDismiss.call(p,p),re(ae==="x"?mt>0?"right":"left":yt>0?"down":"up"),G(),ke(!0);return}else{var Wt,_n;(Wt=Be.current)==null||Wt.style.setProperty("--swipe-amount-x","0px"),(_n=Be.current)==null||_n.style.setProperty("--swipe-amount-y","0px")}Ht(!1),pe(!1),ee(null)},onPointerMove:J=>{var Pe,Ze,mt;if(!Xe.current||!I||((Pe=window.getSelection())==null?void 0:Pe.toString().length)>0)return;const Dt=J.clientY-Xe.current.y,It=J.clientX-Xe.current.x;var mi;const Wt=(mi=n.swipeDirections)!=null?mi:YE(ne);!ae&&(Math.abs(It)>1||Math.abs(Dt)>1)&&ee(Math.abs(It)>Math.abs(Dt)?"x":"y");let _n={x:0,y:0};const gi=Dn=>1/(1.5+Math.abs(Dn)/20);if(ae==="y"){if(Wt.includes("top")||Wt.includes("bottom"))if(Wt.includes("top")&&Dt<0||Wt.includes("bottom")&&Dt>0)_n.y=Dt;else{const Dn=Dt*gi(Dt);_n.y=Math.abs(Dn)<Math.abs(Dt)?Dn:Dt}}else if(ae==="x"&&(Wt.includes("left")||Wt.includes("right")))if(Wt.includes("left")&&It<0||Wt.includes("right")&&It>0)_n.x=It;else{const Dn=It*gi(It);_n.x=Math.abs(Dn)<Math.abs(It)?Dn:It}(Math.abs(_n.x)>0||Math.abs(_n.y)>0)&&Ht(!0),(Ze=Be.current)==null||Ze.style.setProperty("--swipe-amount-x",`${_n.x}px`),(mt=Be.current)==null||mt.style.setProperty("--swipe-amount-y",`${_n.y}px`)}},ge&&!p.jsx&&_t!=="loading"?De.createElement("button",{"aria-label":z,"data-disabled":lt,"data-close-button":!0,onClick:lt||!I?()=>{}:()=>{G(),p.onDismiss==null||p.onDismiss.call(p,p)},className:Fi(K?.closeButton,p==null||(r=p.classNames)==null?void 0:r.closeButton)},(xe=se?.close)!=null?xe:LE):null,(_t||p.icon||p.promise)&&p.icon!==null&&(se?.[_t]!==null||p.icon)?De.createElement("div",{"data-icon":"",className:Fi(K?.icon,p==null||(o=p.classNames)==null?void 0:o.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Me():null,p.type!=="loading"?Ce:null):null,De.createElement("div",{"data-content":"",className:Fi(K?.content,p==null||(l=p.classNames)==null?void 0:l.content)},De.createElement("div",{"data-title":"",className:Fi(K?.title,p==null||(u=p.classNames)==null?void 0:u.title)},p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title),p.description?De.createElement("div",{"data-description":"",className:Fi(H,q,K?.description,p==null||(c=p.classNames)==null?void 0:c.description)},typeof p.description=="function"?p.description():p.description):null),De.isValidElement(p.cancel)?p.cancel:p.cancel&&Jl(p.cancel)?De.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||k,onClick:J=>{Jl(p.cancel)&&I&&(p.cancel.onClick==null||p.cancel.onClick.call(p.cancel,J),G())},className:Fi(K?.cancelButton,p==null||(d=p.classNames)==null?void 0:d.cancelButton)},p.cancel.label):null,De.isValidElement(p.action)?p.action:p.action&&Jl(p.action)?De.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||P,onClick:J=>{Jl(p.action)&&(p.action.onClick==null||p.action.onClick.call(p.action,J),!J.defaultPrevented&&G())},className:Fi(K?.actionButton,p==null||(h=p.classNames)==null?void 0:h.actionButton)},p.action.label):null)};function fv(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function $E(n,e){const t={};return[n,e].forEach((r,o)=>{const l=o===1,u=l?"--mobile-offset":"--offset",c=l?HE:VE;function d(h){["top","right","bottom","left"].forEach(m=>{t[`${u}-${m}`]=typeof h=="number"?`${h}px`:h})}typeof r=="number"||typeof r=="string"?d(r):typeof r=="object"?["top","right","bottom","left"].forEach(h=>{r[h]===void 0?t[`${u}-${h}`]=c:t[`${u}-${h}`]=typeof r[h]=="number"?`${r[h]}px`:r[h]}):d(c)}),t}const KE=De.forwardRef(function(e,t){const{id:r,invert:o,position:l="bottom-right",hotkey:u=["altKey","KeyT"],expand:c,closeButton:d,className:h,offset:m,mobileOffset:p,theme:v="light",richColors:x,duration:E,style:T,visibleToasts:S=zE,toastOptions:y,dir:D=fv(),gap:R=WE,icons:A,containerAriaLabel:N="Notifications"}=e,[L,F]=De.useState([]),k=De.useMemo(()=>r?L.filter(ye=>ye.toasterId===r):L.filter(ye=>!ye.toasterId),[L,r]),P=De.useMemo(()=>Array.from(new Set([l].concat(k.filter(ye=>ye.position).map(ye=>ye.position)))),[k,l]),[C,H]=De.useState([]),[$,ne]=De.useState(!1),[ue,he]=De.useState(!1),[K,se]=De.useState(v!=="system"?v:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),z=De.useRef(null),ae=u.join("+").replace(/Key/g,"").replace(/Digit/g,""),ee=De.useRef(null),O=De.useRef(!1),re=De.useCallback(ye=>{F(be=>{var Re;return(Re=be.find(Z=>Z.id===ye.id))!=null&&Re.delete||Xn.dismiss(ye.id),be.filter(({id:Z})=>Z!==ye.id)})},[]);return De.useEffect(()=>Xn.subscribe(ye=>{if(ye.dismiss){requestAnimationFrame(()=>{F(be=>be.map(Re=>Re.id===ye.id?{...Re,delete:!0}:Re))});return}setTimeout(()=>{ME.flushSync(()=>{F(be=>{const Re=be.findIndex(Z=>Z.id===ye.id);return Re!==-1?[...be.slice(0,Re),{...be[Re],...ye},...be.slice(Re+1)]:[ye,...be]})})})}),[L]),De.useEffect(()=>{if(v!=="system"){se(v);return}if(v==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?se("dark"):se("light")),typeof window>"u")return;const ye=window.matchMedia("(prefers-color-scheme: dark)");try{ye.addEventListener("change",({matches:be})=>{se(be?"dark":"light")})}catch{ye.addListener(({matches:Re})=>{try{se(Re?"dark":"light")}catch(Z){console.error(Z)}})}},[v]),De.useEffect(()=>{L.length<=1&&ne(!1)},[L]),De.useEffect(()=>{const ye=be=>{var Re;if(u.every(pe=>be[pe]||be.code===pe)){var ce;ne(!0),(ce=z.current)==null||ce.focus()}be.code==="Escape"&&(document.activeElement===z.current||(Re=z.current)!=null&&Re.contains(document.activeElement))&&ne(!1)};return document.addEventListener("keydown",ye),()=>document.removeEventListener("keydown",ye)},[u]),De.useEffect(()=>{if(z.current)return()=>{ee.current&&(ee.current.focus({preventScroll:!0}),ee.current=null,O.current=!1)}},[z.current]),De.createElement("section",{ref:t,"aria-label":`${N} ${ae}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},P.map((ye,be)=>{var Re;const[Z,ce]=ye.split("-");return k.length?De.createElement("ol",{key:ye,dir:D==="auto"?fv():D,tabIndex:-1,ref:z,className:h,"data-sonner-toaster":!0,"data-sonner-theme":K,"data-y-position":Z,"data-x-position":ce,style:{"--front-toast-height":`${((Re=C[0])==null?void 0:Re.height)||0}px`,"--width":`${GE}px`,"--gap":`${R}px`,...T,...$E(m,p)},onBlur:pe=>{O.current&&!pe.currentTarget.contains(pe.relatedTarget)&&(O.current=!1,ee.current&&(ee.current.focus({preventScroll:!0}),ee.current=null))},onFocus:pe=>{pe.target instanceof HTMLElement&&pe.target.dataset.dismissible==="false"||O.current||(O.current=!0,ee.current=pe.relatedTarget)},onMouseEnter:()=>ne(!0),onMouseMove:()=>ne(!0),onMouseLeave:()=>{ue||ne(!1)},onDragEnd:()=>ne(!1),onPointerDown:pe=>{pe.target instanceof HTMLElement&&pe.target.dataset.dismissible==="false"||he(!0)},onPointerUp:()=>he(!1)},k.filter(pe=>!pe.position&&be===0||pe.position===ye).map((pe,Ie)=>{var ke,pt;return De.createElement(qE,{key:pe.id,icons:A,index:Ie,toast:pe,defaultRichColors:x,duration:(ke=y?.duration)!=null?ke:E,className:y?.className,descriptionClassName:y?.descriptionClassName,invert:o,visibleToasts:S,closeButton:(pt=y?.closeButton)!=null?pt:d,interacting:ue,position:ye,style:y?.style,unstyled:y?.unstyled,classNames:y?.classNames,cancelButtonStyle:y?.cancelButtonStyle,actionButtonStyle:y?.actionButtonStyle,closeButtonAriaLabel:y?.closeButtonAriaLabel,removeToast:re,toasts:k.filter(Ht=>Ht.position==pe.position),heights:C.filter(Ht=>Ht.position==pe.position),setHeights:H,expandByDefault:c,gap:R,expanded:$,swipeDirections:e.swipeDirections})})):null}))}),ZE=({...n})=>me.jsx(KE,{theme:"light",className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...n}),T_=Oe.createContext({});function QE(n){const e=Oe.useRef(null);return e.current===null&&(e.current=n()),e.current}const zh=typeof window<"u",JE=zh?Oe.useLayoutEffect:Oe.useEffect,Vh=Oe.createContext(null);function Hh(n,e){n.indexOf(e)===-1&&n.push(e)}function Gh(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const ur=(n,e,t)=>t>e?e:t<n?n:t;let Wh=()=>{};const cr={},w_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function A_(n){return typeof n=="object"&&n!==null}const C_=n=>/^0[^.\s]+$/u.test(n);function Xh(n){let e;return()=>(e===void 0&&(e=n()),e)}const pi=n=>n,eM=(n,e)=>t=>e(n(t)),Fa=(...n)=>n.reduce(eM),wa=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};class jh{constructor(){this.subscriptions=[]}add(e){return Hh(this.subscriptions,e),()=>Gh(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Hi=n=>n*1e3,hi=n=>n/1e3;function R_(n,e){return e?n*(1e3/e):0}const b_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,tM=1e-7,nM=12;function iM(n,e,t,r,o){let l,u,c=0;do u=e+(t-e)/2,l=b_(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>tM&&++c<nM);return u}function Oa(n,e,t,r){if(n===e&&t===r)return pi;const o=l=>iM(l,0,1,n,t);return l=>l===0||l===1?l:b_(o(l),e,r)}const P_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,D_=n=>e=>1-n(1-e),L_=Oa(.33,1.53,.69,.99),Yh=D_(L_),I_=P_(Yh),N_=n=>(n*=2)<1?.5*Yh(n):.5*(2-Math.pow(2,-10*(n-1))),qh=n=>1-Math.sin(Math.acos(n)),U_=D_(qh),F_=P_(qh),rM=Oa(.42,0,1,1),sM=Oa(0,0,.58,1),O_=Oa(.42,0,.58,1),oM=n=>Array.isArray(n)&&typeof n[0]!="number",k_=n=>Array.isArray(n)&&typeof n[0]=="number",aM={linear:pi,easeIn:rM,easeInOut:O_,easeOut:sM,circIn:qh,circInOut:F_,circOut:U_,backIn:Yh,backInOut:I_,backOut:L_,anticipate:N_},lM=n=>typeof n=="string",dv=n=>{if(k_(n)){Wh(n.length===4);const[e,t,r,o]=n;return Oa(e,t,r,o)}else if(lM(n))return aM[n];return n},eu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function uM(n,e){let t=new Set,r=new Set,o=!1,l=!1;const u=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function d(m){u.has(m)&&(h.schedule(m),n()),m(c)}const h={schedule:(m,p=!1,v=!1)=>{const E=v&&o?t:r;return p&&u.add(m),E.has(m)||E.add(m),m},cancel:m=>{r.delete(m),u.delete(m)},process:m=>{if(c=m,o){l=!0;return}o=!0,[t,r]=[r,t],t.forEach(d),t.clear(),o=!1,l&&(l=!1,h.process(m))}};return h}const cM=40;function B_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=eu.reduce((R,A)=>(R[A]=uM(l),R),{}),{setup:c,read:d,resolveKeyframes:h,preUpdate:m,update:p,preRender:v,render:x,postRender:E}=u,T=()=>{const R=cr.useManualTiming?o.timestamp:performance.now();t=!1,cr.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(R-o.timestamp,cM),1)),o.timestamp=R,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),m.process(o),p.process(o),v.process(o),x.process(o),E.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(T))},S=()=>{t=!0,r=!0,o.isProcessing||n(T)};return{schedule:eu.reduce((R,A)=>{const N=u[A];return R[A]=(L,F=!1,k=!1)=>(t||S(),N.schedule(L,F,k)),R},{}),cancel:R=>{for(let A=0;A<eu.length;A++)u[eu[A]].cancel(R)},state:o,steps:u}}const{schedule:qt,cancel:Gr,state:Sn,steps:Nf}=B_(typeof requestAnimationFrame<"u"?requestAnimationFrame:pi,!0);let Au;function fM(){Au=void 0}const jn={now:()=>(Au===void 0&&jn.set(Sn.isProcessing||cr.useManualTiming?Sn.timestamp:performance.now()),Au),set:n=>{Au=n,queueMicrotask(fM)}},z_=n=>e=>typeof e=="string"&&e.startsWith(n),$h=z_("--"),dM=z_("var(--"),Kh=n=>dM(n)?hM.test(n.split("/*")[0].trim()):!1,hM=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,bo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Aa={...bo,transform:n=>ur(0,1,n)},tu={...bo,default:1},xa=n=>Math.round(n*1e5)/1e5,Zh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function pM(n){return n==null}const mM=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Qh=(n,e)=>t=>!!(typeof t=="string"&&mM.test(t)&&t.startsWith(n)||e&&!pM(t)&&Object.prototype.hasOwnProperty.call(t,e)),V_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,c]=r.match(Zh);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},gM=n=>ur(0,255,n),Uf={...bo,transform:n=>Math.round(gM(n))},xs={test:Qh("rgb","red"),parse:V_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Uf.transform(n)+", "+Uf.transform(e)+", "+Uf.transform(t)+", "+xa(Aa.transform(r))+")"};function vM(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Rd={test:Qh("#"),parse:vM,transform:xs.transform},ka=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Br=ka("deg"),Gi=ka("%"),ct=ka("px"),_M=ka("vh"),yM=ka("vw"),hv={...Gi,parse:n=>Gi.parse(n)/100,transform:n=>Gi.transform(n*100)},po={test:Qh("hsl","hue"),parse:V_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Gi.transform(xa(e))+", "+Gi.transform(xa(t))+", "+xa(Aa.transform(r))+")"},an={test:n=>xs.test(n)||Rd.test(n)||po.test(n),parse:n=>xs.test(n)?xs.parse(n):po.test(n)?po.parse(n):Rd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?xs.transform(n):po.transform(n),getAnimatableNone:n=>{const e=an.parse(n);return e.alpha=0,an.transform(e)}},xM=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function SM(n){return isNaN(n)&&typeof n=="string"&&(n.match(Zh)?.length||0)+(n.match(xM)?.length||0)>0}const H_="number",G_="color",EM="var",MM="var(",pv="${}",TM=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ca(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const c=e.replace(TM,d=>(an.test(d)?(r.color.push(l),o.push(G_),t.push(an.parse(d))):d.startsWith(MM)?(r.var.push(l),o.push(EM),t.push(d)):(r.number.push(l),o.push(H_),t.push(parseFloat(d))),++l,pv)).split(pv);return{values:t,split:c,indexes:r,types:o}}function W_(n){return Ca(n).values}function X_(n){const{split:e,types:t}=Ca(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const c=t[u];c===H_?l+=xa(o[u]):c===G_?l+=an.transform(o[u]):l+=o[u]}return l}}const wM=n=>typeof n=="number"?0:an.test(n)?an.getAnimatableNone(n):n;function AM(n){const e=W_(n);return X_(n)(e.map(wM))}const Wr={test:SM,parse:W_,createTransformer:X_,getAnimatableNone:AM};function Ff(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function CM({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=Ff(d,c,n+1/3),l=Ff(d,c,n),u=Ff(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Fu(n,e){return t=>t>0?e:n}const Zt=(n,e,t)=>n+(e-n)*t,Of=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},RM=[Rd,xs,po],bM=n=>RM.find(e=>e.test(n));function mv(n){const e=bM(n);if(!e)return!1;let t=e.parse(n);return e===po&&(t=CM(t)),t}const gv=(n,e)=>{const t=mv(n),r=mv(e);if(!t||!r)return Fu(n,e);const o={...t};return l=>(o.red=Of(t.red,r.red,l),o.green=Of(t.green,r.green,l),o.blue=Of(t.blue,r.blue,l),o.alpha=Zt(t.alpha,r.alpha,l),xs.transform(o))},bd=new Set(["none","hidden"]);function PM(n,e){return bd.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function DM(n,e){return t=>Zt(n,e,t)}function Jh(n){return typeof n=="number"?DM:typeof n=="string"?Kh(n)?Fu:an.test(n)?gv:NM:Array.isArray(n)?j_:typeof n=="object"?an.test(n)?gv:LM:Fu}function j_(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>Jh(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function LM(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Jh(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function IM(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],u=n.indexes[l][r[l]],c=n.values[u]??0;t[o]=c,r[l]++}return t}const NM=(n,e)=>{const t=Wr.createTransformer(e),r=Ca(n),o=Ca(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?bd.has(n)&&!o.values.length||bd.has(e)&&!r.values.length?PM(n,e):Fa(j_(IM(r,o),o.values),t):Fu(n,e)};function Y_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Zt(n,e,t):Jh(n)(n,e)}const UM=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>qt.update(e,t),stop:()=>Gr(e),now:()=>Sn.isProcessing?Sn.timestamp:jn.now()}},q_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=Math.round(n(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Ou=2e4;function ep(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Ou;)e+=t,r=n.next(e);return e>=Ou?1/0:e}function FM(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(ep(r),Ou);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:hi(o)}}const OM=5;function $_(n,e,t){const r=Math.max(e-OM,0);return R_(t-n(r),e-r)}const Jt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},kf=.001;function kM({duration:n=Jt.duration,bounce:e=Jt.bounce,velocity:t=Jt.velocity,mass:r=Jt.mass}){let o,l,u=1-e;u=ur(Jt.minDamping,Jt.maxDamping,u),n=ur(Jt.minDuration,Jt.maxDuration,hi(n)),u<1?(o=h=>{const m=h*u,p=m*n,v=m-t,x=Pd(h,u),E=Math.exp(-p);return kf-v/x*E},l=h=>{const p=h*u*n,v=p*t+t,x=Math.pow(u,2)*Math.pow(h,2)*n,E=Math.exp(-p),T=Pd(Math.pow(h,2),u);return(-o(h)+kf>0?-1:1)*((v-x)*E)/T}):(o=h=>{const m=Math.exp(-h*n),p=(h-t)*n+1;return-kf+m*p},l=h=>{const m=Math.exp(-h*n),p=(t-h)*(n*n);return m*p});const c=5/n,d=zM(o,l,c);if(n=Hi(n),isNaN(d))return{stiffness:Jt.stiffness,damping:Jt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const BM=12;function zM(n,e,t){let r=t;for(let o=1;o<BM;o++)r=r-n(r)/e(r);return r}function Pd(n,e){return n*Math.sqrt(1-e*e)}const VM=["duration","bounce"],HM=["stiffness","damping","mass"];function vv(n,e){return e.some(t=>n[t]!==void 0)}function GM(n){let e={velocity:Jt.velocity,stiffness:Jt.stiffness,damping:Jt.damping,mass:Jt.mass,isResolvedFromDuration:!1,...n};if(!vv(n,HM)&&vv(n,VM))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*ur(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Jt.mass,stiffness:o,damping:l}}else{const t=kM(n);e={...e,...t,mass:Jt.mass},e.isResolvedFromDuration=!0}return e}function ku(n=Jt.visualDuration,e=Jt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:p,velocity:v,isResolvedFromDuration:x}=GM({...t,velocity:-hi(t.velocity||0)}),E=v||0,T=h/(2*Math.sqrt(d*m)),S=u-l,y=hi(Math.sqrt(d/m)),D=Math.abs(S)<5;r||(r=D?Jt.restSpeed.granular:Jt.restSpeed.default),o||(o=D?Jt.restDelta.granular:Jt.restDelta.default);let R;if(T<1){const N=Pd(y,T);R=L=>{const F=Math.exp(-T*y*L);return u-F*((E+T*y*S)/N*Math.sin(N*L)+S*Math.cos(N*L))}}else if(T===1)R=N=>u-Math.exp(-y*N)*(S+(E+y*S)*N);else{const N=y*Math.sqrt(T*T-1);R=L=>{const F=Math.exp(-T*y*L),k=Math.min(N*L,300);return u-F*((E+T*y*S)*Math.sinh(k)+N*S*Math.cosh(k))/N}}const A={calculatedDuration:x&&p||null,next:N=>{const L=R(N);if(x)c.done=N>=p;else{let F=N===0?E:0;T<1&&(F=N===0?Hi(E):$_(R,N,L));const k=Math.abs(F)<=r,P=Math.abs(u-L)<=o;c.done=k&&P}return c.value=c.done?u:L,c},toString:()=>{const N=Math.min(ep(A),Ou),L=q_(F=>A.next(N*F).value,N,30);return N+"ms "+L},toTransition:()=>{}};return A}ku.applyToOptions=n=>{const e=FM(n,100,ku);return n.ease=e.ease,n.duration=Hi(e.duration),n.type="keyframes",n};function Dd({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:m}){const p=n[0],v={done:!1,value:p},x=k=>c!==void 0&&k<c||d!==void 0&&k>d,E=k=>c===void 0?d:d===void 0||Math.abs(c-k)<Math.abs(d-k)?c:d;let T=t*e;const S=p+T,y=u===void 0?S:u(S);y!==S&&(T=y-p);const D=k=>-T*Math.exp(-k/r),R=k=>y+D(k),A=k=>{const P=D(k),C=R(k);v.done=Math.abs(P)<=h,v.value=v.done?y:C};let N,L;const F=k=>{x(v.value)&&(N=k,L=ku({keyframes:[v.value,E(v.value)],velocity:$_(R,k,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return F(0),{calculatedDuration:null,next:k=>{let P=!1;return!L&&N===void 0&&(P=!0,A(k),F(k)),N!==void 0&&k>=N?L.next(k-N):(!P&&A(k),v)}}}function WM(n,e,t){const r=[],o=t||cr.mix||Y_,l=n.length-1;for(let u=0;u<l;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||pi:e;c=Fa(d,c)}r.push(c)}return r}function XM(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(Wh(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=WM(e,r,o),d=c.length,h=m=>{if(u&&m<n[0])return e[0];let p=0;if(d>1)for(;p<n.length-2&&!(m<n[p+1]);p++);const v=wa(n[p],n[p+1],m);return c[p](v)};return t?m=>h(ur(n[0],n[l-1],m)):h}function jM(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=wa(0,e,r);n.push(Zt(t,1,o))}}function YM(n){const e=[0];return jM(e,n.length-1),e}function qM(n,e){return n.map(t=>t*e)}function $M(n,e){return n.map(()=>e||O_).splice(0,n.length-1)}function Sa({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=oM(r)?r.map(dv):dv(r),l={done:!1,value:e[0]},u=qM(t&&t.length===e.length?t:YM(e),n),c=XM(u,e,{ease:Array.isArray(o)?o:$M(e,o)});return{calculatedDuration:n,next:d=>(l.value=c(d),l.done=d>=n,l)}}const KM=n=>n!==null;function tp(n,{repeat:e,repeatType:t="loop"},r,o=1){const l=n.filter(KM),c=o<0||e&&t!=="loop"&&e%2===1?0:l.length-1;return!c||r===void 0?l[c]:r}const ZM={decay:Dd,inertia:Dd,tween:Sa,keyframes:Sa,spring:ku};function K_(n){typeof n.type=="string"&&(n.type=ZM[n.type])}class np{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const QM=n=>n/100;class ip extends np{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:t}=this.options;t&&t.updatedAt!==jn.now()&&this.tick(jn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;K_(e);const{type:t=Sa,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=e;let{keyframes:c}=e;const d=t||Sa;d!==Sa&&typeof c[0]!="number"&&(this.mixKeyframes=Fa(QM,Y_(c[0],c[1])),c=[0,100]);const h=d({...e,keyframes:c});l==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...c].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=ep(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:c,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:m,repeat:p,repeatType:v,repeatDelay:x,type:E,onUpdate:T,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const y=this.currentTime-h*(this.playbackSpeed>=0?1:-1),D=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let R=this.currentTime,A=r;if(p){const k=Math.min(this.currentTime,o)/c;let P=Math.floor(k),C=k%1;!C&&k>=1&&(C=1),C===1&&P--,P=Math.min(P,p+1),!!(P%2)&&(v==="reverse"?(C=1-C,x&&(C-=x/c)):v==="mirror"&&(A=u)),R=ur(0,1,C)*c}const N=D?{done:!1,value:m[0]}:A.next(R);l&&(N.value=l(N.value));let{done:L}=N;!D&&d!==null&&(L=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return F&&E!==Dd&&(N.value=tp(m,this.options,S,this.speed)),T&&T(N.value),F&&this.finish(),N}then(e,t){return this.finished.then(e,t)}get duration(){return hi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+hi(e)}get time(){return hi(this.currentTime)}set time(e){e=Hi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(jn.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=hi(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=UM,startTime:t}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(jn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function JM(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Ss=n=>n*180/Math.PI,Ld=n=>{const e=Ss(Math.atan2(n[1],n[0]));return Id(e)},eT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Ld,rotateZ:Ld,skewX:n=>Ss(Math.atan(n[1])),skewY:n=>Ss(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Id=n=>(n=n%360,n<0&&(n+=360),n),_v=Ld,yv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),xv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),tT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:yv,scaleY:xv,scale:n=>(yv(n)+xv(n))/2,rotateX:n=>Id(Ss(Math.atan2(n[6],n[5]))),rotateY:n=>Id(Ss(Math.atan2(-n[2],n[0]))),rotateZ:_v,rotate:_v,skewX:n=>Ss(Math.atan(n[4])),skewY:n=>Ss(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Nd(n){return n.includes("scale")?1:0}function Ud(n,e){if(!n||n==="none")return Nd(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=tT,o=t;else{const c=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=eT,o=c}if(!o)return Nd(e);const l=r[e],u=o[1].split(",").map(iT);return typeof l=="function"?l(u):u[l]}const nT=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Ud(t,e)};function iT(n){return parseFloat(n.trim())}const Po=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Do=new Set(Po),Sv=n=>n===bo||n===ct,rT=new Set(["x","y","z"]),sT=Po.filter(n=>!rT.has(n));function oT(n){const e=[];return sT.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Ts={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Ud(e,"x"),y:(n,{transform:e})=>Ud(e,"y")};Ts.translateX=Ts.x;Ts.translateY=Ts.y;const ws=new Set;let Fd=!1,Od=!1,kd=!1;function Z_(){if(Od){const n=Array.from(ws).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=oT(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{r.getValue(l)?.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Od=!1,Fd=!1,ws.forEach(n=>n.complete(kd)),ws.clear()}function Q_(){ws.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Od=!0)})}function aT(){kd=!0,Q_(),Z_(),kd=!1}class rp{constructor(e,t,r,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(ws.add(this),Fd||(Fd=!0,qt.read(Q_),qt.resolveKeyframes(Z_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const l=o?.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&t){const c=r.readValue(t,u);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=u),o&&l===void 0&&o.set(e[0])}JM(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ws.delete(this)}cancel(){this.state==="scheduled"&&(ws.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const lT=n=>n.startsWith("--");function uT(n,e,t){lT(e)?n.style.setProperty(e,t):n.style[e]=t}const cT=Xh(()=>window.ScrollTimeline!==void 0),fT={};function dT(n,e){const t=Xh(n);return()=>fT[e]??t()}const J_=dT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_a=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Ev={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_a([0,.65,.55,1]),circOut:_a([.55,0,1,.45]),backIn:_a([.31,.01,.66,-.59]),backOut:_a([.33,1.53,.69,.99])};function ey(n,e){if(n)return typeof n=="function"?J_()?q_(n,e):"ease-out":k_(n)?_a(n):Array.isArray(n)?n.map(t=>ey(t,e)||Ev.easeOut):Ev[n]}function hT(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:c="easeOut",times:d}={},h=void 0){const m={[e]:t};d&&(m.offset=d);const p=ey(c,o);Array.isArray(p)&&(m.easing=p);const v={delay:r,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return h&&(v.pseudoElement=h),n.animate(m,v)}function ty(n){return typeof n=="function"&&"applyToOptions"in n}function pT({type:n,...e}){return ty(n)&&J_()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class mT extends np{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:c,onComplete:d}=e;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=e,Wh(typeof e.type!="string");const h=pT(e);this.animation=hT(t,r,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=tp(o,this.options,c,this.speed);this.updateMotionValue?this.updateMotionValue(m):uT(t,r,m),this.animation.cancel()}d?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return hi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+hi(e)}get time(){return hi(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Hi(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&cT()?(this.animation.timeline=e,pi):t(this)}}const ny={anticipate:N_,backInOut:I_,circInOut:F_};function gT(n){return n in ny}function vT(n){typeof n.ease=="string"&&gT(n.ease)&&(n.ease=ny[n.ease])}const Mv=10;class _T extends mT{constructor(e){vT(e),K_(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:l,...u}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const c=new ip({...u,autoplay:!1}),d=Hi(this.finishedTime??this.time);t.setWithVelocity(c.sample(d-Mv).value,c.sample(d).value,Mv),c.stop()}}const Tv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Wr.test(n)||n==="0")&&!n.startsWith("url("));function yT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function xT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=Tv(o,e),c=Tv(l,e);return!u||!c?!1:yT(n)||(t==="spring"||ty(t))&&r}function Bd(n){n.duration=0,n.type="keyframes"}const ST=new Set(["opacity","clipPath","filter","transform"]),ET=Xh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function MT(n){const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:l,type:u}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=e.owner.getProps();return ET()&&t&&ST.has(t)&&(t!=="transform"||!h)&&!d&&!r&&o!=="mirror"&&l!==0&&u!=="inertia"}const TT=40;class wT extends np{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:c,name:d,motionValue:h,element:m,...p}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=jn.now();const v={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,name:d,motionValue:h,element:m,...p},x=m?.KeyframeResolver||rp;this.keyframeResolver=new x(c,(E,T,S)=>this.onKeyframesResolved(E,T,v,!S),d,h,m),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,r,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:c,delay:d,isHandoff:h,onUpdate:m}=r;this.resolvedAt=jn.now(),xT(e,l,u,c)||((cr.instantAnimations||!d)&&m?.(tp(e,r,t)),e[0]=e[e.length-1],Bd(r),r.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>TT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},x=!h&&MT(v)?new _T({...v,element:v.motionValue.owner.current}):new ip(v);x.finished.then(()=>this.notifyFinished()).catch(pi),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),aT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const AT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function CT(n){const e=AT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function iy(n,e,t=1){const[r,o]=CT(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return w_(u)?parseFloat(u):u}return Kh(o)?iy(o,e,t+1):o}function sp(n,e){return n?.[e]??n?.default??n}const ry=new Set(["width","height","top","left","right","bottom",...Po]),RT={test:n=>n==="auto",parse:n=>n},sy=n=>e=>e.test(n),oy=[bo,ct,Gi,Br,yM,_M,RT],wv=n=>oy.find(sy(n));function bT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||C_(n):!0}const PT=new Set(["brightness","contrast","saturate","opacity"]);function DT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Zh)||[];if(!r)return n;const o=t.replace(r,"");let l=PT.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const LT=/\b([a-z-]*)\(.*?\)/gu,zd={...Wr,getAnimatableNone:n=>{const e=n.match(LT);return e?e.map(DT).join(" "):n}},Av={...bo,transform:Math.round},IT={rotate:Br,rotateX:Br,rotateY:Br,rotateZ:Br,scale:tu,scaleX:tu,scaleY:tu,scaleZ:tu,skew:Br,skewX:Br,skewY:Br,distance:ct,translateX:ct,translateY:ct,translateZ:ct,x:ct,y:ct,z:ct,perspective:ct,transformPerspective:ct,opacity:Aa,originX:hv,originY:hv,originZ:ct},op={borderWidth:ct,borderTopWidth:ct,borderRightWidth:ct,borderBottomWidth:ct,borderLeftWidth:ct,borderRadius:ct,radius:ct,borderTopLeftRadius:ct,borderTopRightRadius:ct,borderBottomRightRadius:ct,borderBottomLeftRadius:ct,width:ct,maxWidth:ct,height:ct,maxHeight:ct,top:ct,right:ct,bottom:ct,left:ct,padding:ct,paddingTop:ct,paddingRight:ct,paddingBottom:ct,paddingLeft:ct,margin:ct,marginTop:ct,marginRight:ct,marginBottom:ct,marginLeft:ct,backgroundPositionX:ct,backgroundPositionY:ct,...IT,zIndex:Av,fillOpacity:Aa,strokeOpacity:Aa,numOctaves:Av},NT={...op,color:an,backgroundColor:an,outlineColor:an,fill:an,stroke:an,borderColor:an,borderTopColor:an,borderRightColor:an,borderBottomColor:an,borderLeftColor:an,filter:zd,WebkitFilter:zd},ay=n=>NT[n];function ly(n,e){let t=ay(n);return t!==zd&&(t=Wr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const UT=new Set(["auto","none","0"]);function FT(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!UT.has(l)&&Ca(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=ly(t,o)}class OT extends rp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),Kh(h))){const m=iy(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!ry.has(r)||e.length!==2)return;const[o,l]=e,u=wv(o),c=wv(l);if(u!==c)if(Sv(u)&&Sv(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else Ts[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||bT(e[o]))&&r.push(o);r.length&&FT(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ts[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,u=r[l];r[l]=Ts[t](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([c,d])=>{e.getValue(c).set(d)}),this.resolveNoneKeyframes()}}function uy(n,e,t){if(n instanceof EventTarget)return[n];if(typeof n=="string"){const o=document.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n)}const cy=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function kT(n){return A_(n)&&"offsetHeight"in n}const Cv=30,BT=n=>!isNaN(parseFloat(n));class zT{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const o=jn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=jn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=BT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new jh);const r=this.events[e].add(t);return e==="change"?()=>{r(),qt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=jn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Cv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Cv);return R_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Eo(n,e){return new zT(n,e)}const{schedule:ap}=B_(queueMicrotask,!1),Ci={x:!1,y:!1};function fy(){return Ci.x||Ci.y}function VT(n){return n==="x"||n==="y"?Ci[n]?null:(Ci[n]=!0,()=>{Ci[n]=!1}):Ci.x||Ci.y?null:(Ci.x=Ci.y=!0,()=>{Ci.x=Ci.y=!1})}function dy(n,e){const t=uy(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function Rv(n){return!(n.pointerType==="touch"||fy())}function HT(n,e,t={}){const[r,o,l]=dy(n,t),u=c=>{if(!Rv(c))return;const{target:d}=c,h=e(d,c);if(typeof h!="function"||!d)return;const m=p=>{Rv(p)&&(h(p),d.removeEventListener("pointerleave",m))};d.addEventListener("pointerleave",m,o)};return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),l}const hy=(n,e)=>e?n===e?!0:hy(n,e.parentElement):!1,lp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,GT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function WT(n){return GT.has(n.tagName)||n.tabIndex!==-1}const Cu=new WeakSet;function bv(n){return e=>{e.key==="Enter"&&n(e)}}function Bf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const XT=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=bv(()=>{if(Cu.has(t))return;Bf(t,"down");const o=bv(()=>{Bf(t,"up")}),l=()=>Bf(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function Pv(n){return lp(n)&&!fy()}function jT(n,e,t={}){const[r,o,l]=dy(n,t),u=c=>{const d=c.currentTarget;if(!Pv(c))return;Cu.add(d);const h=e(d,c),m=(x,E)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",v),Cu.has(d)&&Cu.delete(d),Pv(x)&&typeof h=="function"&&h(x,{success:E})},p=x=>{m(x,d===window||d===document||t.useGlobalTarget||hy(d,x.target))},v=x=>{m(x,!1)};window.addEventListener("pointerup",p,o),window.addEventListener("pointercancel",v,o)};return r.forEach(c=>{(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),kT(c)&&(c.addEventListener("focus",h=>XT(h,o)),!WT(c)&&!c.hasAttribute("tabindex")&&(c.tabIndex=0))}),l}function py(n){return A_(n)&&"ownerSVGElement"in n}function YT(n){return py(n)&&n.tagName==="svg"}const Pn=n=>!!(n&&n.getVelocity),qT=[...oy,an,Wr],$T=n=>qT.find(sy(n)),my=Oe.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function KT(n=!0){const e=Oe.useContext(Vh);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=Oe.useId();Oe.useEffect(()=>{if(n)return o(l)},[n]);const u=Oe.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const gy=Oe.createContext({strict:!1}),Dv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Mo={};for(const n in Dv)Mo[n]={isEnabled:e=>Dv[n].some(t=>!!e[t])};function ZT(n){for(const e in n)Mo[e]={...Mo[e],...n[e]}}const QT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Bu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||QT.has(n)}let vy=n=>!Bu(n);function JT(n){typeof n=="function"&&(vy=e=>e.startsWith("on")?!Bu(e):n(e))}try{JT(require("@emotion/is-prop-valid").default)}catch{}function ew(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(vy(o)||t===!0&&Bu(o)||!e&&!Bu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Wu=Oe.createContext({});function Xu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Ra(n){return typeof n=="string"||Array.isArray(n)}const up=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cp=["initial",...up];function ju(n){return Xu(n.animate)||cp.some(e=>Ra(n[e]))}function _y(n){return!!(ju(n)||n.variants)}function tw(n,e){if(ju(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Ra(t)?t:void 0,animate:Ra(r)?r:void 0}}return n.inherit!==!1?e:{}}function nw(n){const{initial:e,animate:t}=tw(n,Oe.useContext(Wu));return Oe.useMemo(()=>({initial:e,animate:t}),[Lv(e),Lv(t)])}function Lv(n){return Array.isArray(n)?n.join(" "):n}const ba={};function iw(n){for(const e in n)ba[e]=n[e],$h(e)&&(ba[e].isCSSVariable=!0)}function yy(n,{layout:e,layoutId:t}){return Do.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!ba[n]||n==="opacity")}const rw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},sw=Po.length;function ow(n,e,t){let r="",o=!0;for(let l=0;l<sw;l++){const u=Po[l],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=cy(c,op[u]);if(!d){o=!1;const m=rw[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function fp(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Do.has(d)){u=!0;continue}else if($h(d)){o[d]=h;continue}else{const m=cy(h,op[d]);d.startsWith("origin")?(c=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=ow(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}const dp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function xy(n,e,t){for(const r in e)!Pn(e[r])&&!yy(r,t)&&(n[r]=e[r])}function aw({transformTemplate:n},e){return Oe.useMemo(()=>{const t=dp();return fp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function lw(n,e){const t=n.style||{},r={};return xy(r,t,n),Object.assign(r,aw(n,e)),r}function uw(n,e){const t={},r=lw(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const cw={offset:"stroke-dashoffset",array:"stroke-dasharray"},fw={offset:"strokeDashoffset",array:"strokeDasharray"};function dw(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?cw:fw;n[l.offset]=ct.transform(-r);const u=ct.transform(e),c=ct.transform(t);n[l.array]=`${u} ${c}`}function Sy(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...c},d,h,m){if(fp(n,c,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:p,style:v}=n;p.transform&&(v.transform=p.transform,delete p.transform),(v.transform||p.transformOrigin)&&(v.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),v.transform&&(v.transformBox=m?.transformBox??"fill-box",delete p.transformBox),e!==void 0&&(p.x=e),t!==void 0&&(p.y=t),r!==void 0&&(p.scale=r),o!==void 0&&dw(p,o,l,u,!1)}const Ey=()=>({...dp(),attrs:{}}),My=n=>typeof n=="string"&&n.toLowerCase()==="svg";function hw(n,e,t,r){const o=Oe.useMemo(()=>{const l=Ey();return Sy(l,e,My(r),n.transformTemplate,n.style),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};xy(l,n.style,n),o.style={...l,...o.style}}return o}const pw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hp(n){return typeof n!="string"||n.includes("-")?!1:!!(pw.indexOf(n)>-1||/[A-Z]/u.test(n))}function mw(n,e,t,{latestValues:r},o,l=!1){const c=(hp(n)?hw:uw)(e,r,o,n),d=ew(e,typeof n=="string",l),h=n!==Oe.Fragment?{...d,...c,ref:t}:{},{children:m}=e,p=Oe.useMemo(()=>Pn(m)?m.get():m,[m]);return Oe.createElement(n,{...h,children:p})}function Iv(n){const e=[{},{}];return n?.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function pp(n,e,t,r){if(typeof e=="function"){const[o,l]=Iv(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=Iv(r);e=e(t!==void 0?t:n.custom,o,l)}return e}function Ru(n){return Pn(n)?n.get():n}function gw({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:vw(t,r,o,n),renderState:e()}}function vw(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Ru(l[v]);let{initial:u,animate:c}=n;const d=ju(n),h=_y(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const p=m?c:u;if(p&&typeof p!="boolean"&&!Xu(p)){const v=Array.isArray(p)?p:[p];for(let x=0;x<v.length;x++){const E=pp(n,v[x]);if(E){const{transitionEnd:T,transition:S,...y}=E;for(const D in y){let R=y[D];if(Array.isArray(R)){const A=m?R.length-1:0;R=R[A]}R!==null&&(o[D]=R)}for(const D in T)o[D]=T[D]}}}return o}const Ty=n=>(e,t)=>{const r=Oe.useContext(Wu),o=Oe.useContext(Vh),l=()=>gw(n,e,r,o);return t?l():QE(l)};function mp(n,e,t){const{style:r}=n,o={};for(const l in r)(Pn(r[l])||e.style&&Pn(e.style[l])||yy(l,n)||t?.getValue(l)?.liveStyle!==void 0)&&(o[l]=r[l]);return o}const _w=Ty({scrapeMotionValuesFromProps:mp,createRenderState:dp});function wy(n,e,t){const r=mp(n,e,t);for(const o in n)if(Pn(n[o])||Pn(e[o])){const l=Po.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}const yw=Ty({scrapeMotionValuesFromProps:wy,createRenderState:Ey}),xw=Symbol.for("motionComponentSymbol");function mo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Sw(n,e,t){return Oe.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):mo(t)&&(t.current=r))},[e])}const gp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Ew="framerAppearId",Ay="data-"+gp(Ew),Cy=Oe.createContext({});function Mw(n,e,t,r,o){const{visualElement:l}=Oe.useContext(Wu),u=Oe.useContext(gy),c=Oe.useContext(Vh),d=Oe.useContext(my).reducedMotion,h=Oe.useRef(null);r=r||u.renderer,!h.current&&r&&(h.current=r(n,{visualState:e,parent:l,props:t,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const m=h.current,p=Oe.useContext(Cy);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&Tw(h.current,t,o,p);const v=Oe.useRef(!1);Oe.useInsertionEffect(()=>{m&&v.current&&m.update(t,c)});const x=t[Ay],E=Oe.useRef(!!x&&!window.MotionHandoffIsComplete?.(x)&&window.MotionHasOptimisedAnimation?.(x));return JE(()=>{m&&(v.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),E.current&&m.animationState&&m.animationState.animateChanges())}),Oe.useEffect(()=>{m&&(!E.current&&m.animationState&&m.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(x)}),E.current=!1),m.enteringChildren=void 0)}),m}function Tw(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h,layoutCrossfade:m}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Ry(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||c&&mo(c),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:m,layoutScroll:d,layoutRoot:h})}function Ry(n){if(n)return n.options.allowProjection!==!1?n.projection:Ry(n.parent)}function zf(n,{forwardMotionProps:e=!1}={},t,r){t&&ZT(t);const o=hp(n)?yw:_w;function l(c,d){let h;const m={...Oe.useContext(my),...c,layoutId:ww(c)},{isStatic:p}=m,v=nw(c),x=o(c,p);if(!p&&zh){Aw();const E=Cw(m);h=E.MeasureLayout,v.visualElement=Mw(n,x,m,r,E.ProjectionNode)}return me.jsxs(Wu.Provider,{value:v,children:[h&&v.visualElement?me.jsx(h,{visualElement:v.visualElement,...m}):null,mw(n,c,Sw(x,v.visualElement,d),x,p,e)]})}l.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const u=Oe.forwardRef(l);return u[xw]=n,u}function ww({layoutId:n}){const e=Oe.useContext(T_).id;return e&&n!==void 0?e+"-"+n:n}function Aw(n,e){Oe.useContext(gy).strict}function Cw(n){const{drag:e,layout:t}=Mo;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e?.isEnabled(n)||t?.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Rw(n,e){if(typeof Proxy>"u")return zf;const t=new Map,r=(l,u)=>zf(l,u,n,e),o=(l,u)=>r(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?r:(t.has(u)||t.set(u,zf(u,void 0,n,e)),t.get(u))})}function by({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function bw({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function Pw(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Vf(n){return n===void 0||n===1}function Vd({scale:n,scaleX:e,scaleY:t}){return!Vf(n)||!Vf(e)||!Vf(t)}function ms(n){return Vd(n)||Py(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Py(n){return Nv(n.x)||Nv(n.y)}function Nv(n){return n&&n!=="0%"}function zu(n,e,t){const r=n-t,o=e*r;return t+o}function Uv(n,e,t,r,o){return o!==void 0&&(n=zu(n,o,r)),zu(n,t,r)+e}function Hd(n,e=0,t=1,r,o){n.min=Uv(n.min,e,t,r,o),n.max=Uv(n.max,e,t,r,o)}function Dy(n,{x:e,y:t}){Hd(n.x,e.translate,e.scale,e.originPoint),Hd(n.y,t.translate,t.scale,t.originPoint)}const Fv=.999999999999,Ov=1.0000000000001;function Dw(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&vo(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,Dy(n,u)),r&&ms(l.latestValues)&&vo(n,l.latestValues))}e.x<Ov&&e.x>Fv&&(e.x=1),e.y<Ov&&e.y>Fv&&(e.y=1)}function go(n,e){n.min=n.min+e,n.max=n.max+e}function kv(n,e,t,r,o=.5){const l=Zt(n.min,n.max,o);Hd(n,e,t,l,r)}function vo(n,e){kv(n.x,e.x,e.scaleX,e.scale,e.originX),kv(n.y,e.y,e.scaleY,e.scale,e.originY)}function Ly(n,e){return by(Pw(n.getBoundingClientRect(),e))}function Lw(n,e,t){const r=Ly(n,t),{scroll:o}=e;return o&&(go(r.x,o.offset.x),go(r.y,o.offset.y)),r}const Bv=()=>({translate:0,scale:1,origin:0,originPoint:0}),_o=()=>({x:Bv(),y:Bv()}),zv=()=>({min:0,max:0}),nn=()=>({x:zv(),y:zv()}),Gd={current:null},Iy={current:!1};function Iw(){if(Iy.current=!0,!!zh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Gd.current=n.matches;n.addEventListener("change",e),e()}else Gd.current=!1}const Nw=new WeakMap;function Uw(n,e,t){for(const r in e){const o=e[r],l=t[r];if(Pn(o))n.addValue(r,o);else if(Pn(l))n.addValue(r,Eo(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Eo(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Vv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Fw{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=rp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=jn.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,qt.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!l,this.isControllingVariants=ju(t),this.isVariantNode=_y(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:m,...p}=this.scrapeMotionValuesFromProps(t,{},this);for(const v in p){const x=p[v];d[v]!==void 0&&Pn(x)&&x.set(d[v])}}mount(e){this.current=e,Nw.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),Iy.current||Iw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gd.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Gr(this.notifyUpdate),Gr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Do.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&qt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l&&l(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Mo){const t=Mo[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):nn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Vv.length;r++){const o=Vv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=Uw(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Eo(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(w_(r)||C_(r))?r=parseFloat(r):!$T(r)&&Wr.test(t)&&(r=ly(e,t)),this.setBaseTarget(e,Pn(r)?r.get():r)),Pn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const l=pp(this.props,t,this.presenceContext?.custom);l&&(r=l[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Pn(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new jh),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){ap.render(this.render)}}class Ny extends Fw{constructor(){super(...arguments),this.KeyframeResolver=OT}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Pn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function Uy(n,{style:e,vars:t},r,o){const l=n.style;let u;for(u in e)l[u]=e[u];o?.applyProjectionStyles(l,r);for(u in t)l.setProperty(u,t[u])}function Ow(n){return window.getComputedStyle(n)}class kw extends Ny{constructor(){super(...arguments),this.type="html",this.renderInstance=Uy}readValueFromInstance(e,t){if(Do.has(t))return this.projection?.isProjecting?Nd(t):nT(e,t);{const r=Ow(e),o=($h(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ly(e,t)}build(e,t,r){fp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return mp(e,t,r)}}const Fy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Bw(n,e,t,r){Uy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(Fy.has(o)?o:gp(o),e.attrs[o])}class zw extends Ny{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=nn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Do.has(t)){const r=ay(t);return r&&r.default||0}return t=Fy.has(t)?t:gp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return wy(e,t,r)}build(e,t,r){Sy(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){Bw(e,t,r,o)}mount(e){this.isSVGTag=My(e.tagName),super.mount(e)}}const Vw=(n,e)=>hp(n)?new zw(e):new kw(e,{allowProjection:n!==Oe.Fragment});function xo(n,e,t){const r=n.getProps();return pp(r,e,t!==void 0?t:r.custom,n)}const Wd=n=>Array.isArray(n);function Hw(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Eo(t))}function Gw(n){return Wd(n)?n[n.length-1]||0:n}function Ww(n,e){const t=xo(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const c=Gw(l[u]);Hw(n,u,c)}}function Xw(n){return!!(Pn(n)&&n.add)}function Xd(n,e){const t=n.getValue("willChange");if(Xw(t))return t.add(e);if(!t&&cr.WillChange){const r=new cr.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function Oy(n){return n.props[Ay]}const jw=n=>n!==null;function Yw(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(jw),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return o[l]}const qw={type:"spring",stiffness:500,damping:25,restSpeed:10},$w=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Kw={type:"keyframes",duration:.8},Zw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Qw=(n,{keyframes:e})=>e.length>2?Kw:Do.has(n)?n.startsWith("scale")?$w(e[1]):qw:Zw;function Jw({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const vp=(n,e,t,r={},o,l)=>u=>{const c=sp(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-Hi(d);const m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:v=>{e.set(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:l?void 0:o};Jw(c)||Object.assign(m,Qw(n,m)),m.duration&&(m.duration=Hi(m.duration)),m.repeatDelay&&(m.repeatDelay=Hi(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let p=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(Bd(m),m.delay===0&&(p=!0)),(cr.instantAnimations||cr.skipAnimations)&&(p=!0,Bd(m),m.delay=0),m.allowFlatten=!c.type&&!c.ease,p&&!l&&e.get()!==void 0){const v=Yw(m.keyframes,c);if(v!==void 0){qt.update(()=>{m.onUpdate(v),m.onComplete()});return}}return c.isSync?new ip(m):new wT(m)};function e1({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function ky(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:l=n.getDefaultTransition(),transitionEnd:u,...c}=e;r&&(l=r);const d=[],h=o&&n.animationState&&n.animationState.getState()[o];for(const m in c){const p=n.getValue(m,n.latestValues[m]??null),v=c[m];if(v===void 0||h&&e1(h,m))continue;const x={delay:t,...sp(l||{},m)},E=p.get();if(E!==void 0&&!p.isAnimating&&!Array.isArray(v)&&v===E&&!x.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const y=Oy(n);if(y){const D=window.MotionHandoffAnimation(y,m,qt);D!==null&&(x.startTime=D,T=!0)}}Xd(n,m),p.start(vp(m,p,v,n.shouldReduceMotion&&ry.has(m)?{type:!1}:x,n,T));const S=p.animation;S&&d.push(S)}return u&&Promise.all(d).then(()=>{qt.update(()=>{u&&Ww(n,u)})}),d}function By(n,e,t,r=0,o=1){const l=Array.from(n).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),u=n.size,c=(u-1)*r;return typeof t=="function"?t(l,u):o===1?l*r:c-l*r}function jd(n,e,t={}){const r=xo(n,e,t.type==="exit"?n.presenceContext?.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const l=r?()=>Promise.all(ky(n,r,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:m,staggerDirection:p}=o;return t1(n,e,d,h,m,p,t)}:()=>Promise.resolve(),{when:c}=o;if(c){const[d,h]=c==="beforeChildren"?[l,u]:[u,l];return d().then(()=>h())}else return Promise.all([l(),u(t.delay)])}function t1(n,e,t=0,r=0,o=0,l=1,u){const c=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),c.push(jd(d,e,{...u,delay:t+(typeof r=="function"?0:r)+By(n.variantChildren,d,r,o,l)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(c)}function n1(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>jd(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=jd(n,e,t);else{const o=typeof e=="function"?xo(n,e,t.custom):e;r=Promise.all(ky(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}function zy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const i1=cp.length;function Vy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Vy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<i1;t++){const r=cp[t],o=n.props[r];(Ra(o)||o===!1)&&(e[r]=o)}return e}const r1=[...up].reverse(),s1=up.length;function o1(n){return e=>Promise.all(e.map(({animation:t,options:r})=>n1(n,t,r)))}function a1(n){let e=o1(n),t=Hv(),r=!0;const o=d=>(h,m)=>{const p=xo(n,m,d==="exit"?n.presenceContext?.custom:void 0);if(p){const{transition:v,transitionEnd:x,...E}=p;h={...h,...E,...x}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,m=Vy(n.parent)||{},p=[],v=new Set;let x={},E=1/0;for(let S=0;S<s1;S++){const y=r1[S],D=t[y],R=h[y]!==void 0?h[y]:m[y],A=Ra(R),N=y===d?D.isActive:null;N===!1&&(E=S);let L=R===m[y]&&R!==h[y]&&A;if(L&&r&&n.manuallyAnimateOnMount&&(L=!1),D.protectedKeys={...x},!D.isActive&&N===null||!R&&!D.prevProp||Xu(R)||typeof R=="boolean")continue;const F=l1(D.prevProp,R);let k=F||y===d&&D.isActive&&!L&&A||S>E&&A,P=!1;const C=Array.isArray(R)?R:[R];let H=C.reduce(o(y),{});N===!1&&(H={});const{prevResolvedValues:$={}}=D,ne={...$,...H},ue=se=>{k=!0,v.has(se)&&(P=!0,v.delete(se)),D.needsAnimating[se]=!0;const z=n.getValue(se);z&&(z.liveStyle=!1)};for(const se in ne){const z=H[se],ae=$[se];if(x.hasOwnProperty(se))continue;let ee=!1;Wd(z)&&Wd(ae)?ee=!zy(z,ae):ee=z!==ae,ee?z!=null?ue(se):v.add(se):z!==void 0&&v.has(se)?ue(se):D.protectedKeys[se]=!0}D.prevProp=R,D.prevResolvedValues=H,D.isActive&&(x={...x,...H}),r&&n.blockInitialAnimation&&(k=!1);const he=L&&F;k&&(!he||P)&&p.push(...C.map(se=>{const z={type:y};if(typeof se=="string"&&r&&!he&&n.manuallyAnimateOnMount&&n.parent){const{parent:ae}=n,ee=xo(ae,se);if(ae.enteringChildren&&ee){const{delayChildren:O}=ee.transition||{};z.delay=By(ae.enteringChildren,n,O)}}return{animation:se,options:z}}))}if(v.size){const S={};if(typeof h.initial!="boolean"){const y=xo(n,Array.isArray(h.initial)?h.initial[0]:h.initial);y&&y.transition&&(S.transition=y.transition)}v.forEach(y=>{const D=n.getBaseTarget(y),R=n.getValue(y);R&&(R.liveStyle=!0),S[y]=D??null}),p.push({animation:S})}let T=!!p.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),r=!1,T?e(p):Promise.resolve()}function c(d,h){if(t[d].isActive===h)return Promise.resolve();n.variantChildren?.forEach(p=>p.animationState?.setActive(d,h)),t[d].isActive=h;const m=u(d);for(const p in t)t[p].protectedKeys={};return m}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t,reset:()=>{t=Hv(),r=!0}}}function l1(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!zy(e,n):!1}function ls(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Hv(){return{animate:ls(!0),whileInView:ls(),whileHover:ls(),whileTap:ls(),whileDrag:ls(),whileFocus:ls(),exit:ls()}}class jr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class u1 extends jr{constructor(e){super(e),e.animationState||(e.animationState=a1(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Xu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let c1=0;class f1 extends jr{constructor(){super(...arguments),this.id=c1++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const d1={animation:{Feature:u1},exit:{Feature:f1}};function Pa(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Ba(n){return{point:{x:n.pageX,y:n.pageY}}}const h1=n=>e=>lp(e)&&n(e,Ba(e));function Ea(n,e,t,r){return Pa(n,e,h1(t),r)}const Hy=1e-4,p1=1-Hy,m1=1+Hy,Gy=.01,g1=0-Gy,v1=0+Gy;function On(n){return n.max-n.min}function _1(n,e,t){return Math.abs(n-e)<=t}function Gv(n,e,t,r=.5){n.origin=r,n.originPoint=Zt(e.min,e.max,n.origin),n.scale=On(t)/On(e),n.translate=Zt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=p1&&n.scale<=m1||isNaN(n.scale))&&(n.scale=1),(n.translate>=g1&&n.translate<=v1||isNaN(n.translate))&&(n.translate=0)}function Ma(n,e,t,r){Gv(n.x,e.x,t.x,r?r.originX:void 0),Gv(n.y,e.y,t.y,r?r.originY:void 0)}function Wv(n,e,t){n.min=t.min+e.min,n.max=n.min+On(e)}function y1(n,e,t){Wv(n.x,e.x,t.x),Wv(n.y,e.y,t.y)}function Xv(n,e,t){n.min=e.min-t.min,n.max=n.min+On(e)}function Ta(n,e,t){Xv(n.x,e.x,t.x),Xv(n.y,e.y,t.y)}function ci(n){return[n("x"),n("y")]}const Wy=({current:n})=>n?n.ownerDocument.defaultView:null,jv=(n,e)=>Math.abs(n-e);function x1(n,e){const t=jv(n.x,e.x),r=jv(n.y,e.y);return Math.sqrt(t**2+r**2)}class Xy{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Gf(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,E=x1(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!E)return;const{point:T}=v,{timestamp:S}=Sn;this.history.push({...T,timestamp:S});const{onStart:y,onMove:D}=this.handlers;x||(y&&y(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,v)},this.handlePointerMove=(v,x)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Hf(x,this.transformPagePoint),qt.update(this.updatePoint,!0)},this.handlePointerUp=(v,x)=>{this.end();const{onEnd:E,onSessionEnd:T,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Gf(v.type==="pointercancel"?this.lastMoveEventInfo:Hf(x,this.transformPagePoint),this.history);this.startEvent&&E&&E(v,y),T&&T(v,y)},!lp(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const c=Ba(e),d=Hf(c,this.transformPagePoint),{point:h}=d,{timestamp:m}=Sn;this.history=[{...h,timestamp:m}];const{onSessionStart:p}=t;p&&p(e,Gf(d,this.history)),this.removeListeners=Fa(Ea(this.contextWindow,"pointermove",this.handlePointerMove),Ea(this.contextWindow,"pointerup",this.handlePointerUp),Ea(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Gr(this.updatePoint)}}function Hf(n,e){return e?{point:e(n.point)}:n}function Yv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Gf({point:n},e){return{point:n,delta:Yv(n,jy(e)),offset:Yv(n,S1(e)),velocity:E1(e,.1)}}function S1(n){return n[0]}function jy(n){return n[n.length-1]}function E1(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=jy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>Hi(e)));)t--;if(!r)return{x:0,y:0};const l=hi(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function M1(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Zt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Zt(t,n,r.max):Math.min(n,t)),n}function qv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function T1(n,{top:e,left:t,bottom:r,right:o}){return{x:qv(n.x,t,o),y:qv(n.y,e,r)}}function $v(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function w1(n,e){return{x:$v(n.x,e.x),y:$v(n.y,e.y)}}function A1(n,e){let t=.5;const r=On(n),o=On(e);return o>r?t=wa(e.min,e.max-r,n.min):r>o&&(t=wa(n.min,n.max-o,e.min)),ur(0,1,t)}function C1(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Yd=.35;function R1(n=Yd){return n===!1?n=0:n===!0&&(n=Yd),{x:Kv(n,"left","right"),y:Kv(n,"top","bottom")}}function Kv(n,e,t){return{min:Zv(n,e),max:Zv(n,t)}}function Zv(n,e){return typeof n=="number"?n:n[e]||0}const b1=new WeakMap;class P1{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=nn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=p=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ba(p).point)},u=(p,v)=>{const{drag:x,dragPropagation:E,onDragStart:T}=this.getProps();if(x&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=VT(x),!this.openDragLock))return;this.latestPointerEvent=p,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ci(y=>{let D=this.getAxisMotionValue(y).get()||0;if(Gi.test(D)){const{projection:R}=this.visualElement;if(R&&R.layout){const A=R.layout.layoutBox[y];A&&(D=On(A)*(parseFloat(D)/100))}}this.originPoint[y]=D}),T&&qt.postRender(()=>T(p,v)),Xd(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},c=(p,v)=>{this.latestPointerEvent=p,this.latestPanInfo=v;const{dragPropagation:x,dragDirectionLock:E,onDirectionLock:T,onDrag:S}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:y}=v;if(E&&this.currentDirection===null){this.currentDirection=D1(y),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",v.point,y),this.updateAxis("y",v.point,y),this.visualElement.render(),S&&S(p,v)},d=(p,v)=>{this.latestPointerEvent=p,this.latestPanInfo=v,this.stop(p,v),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>ci(p=>this.getAnimationState(p)==="paused"&&this.getAxisMotionValue(p).animation?.play()),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Xy(e,{onSessionStart:l,onStart:u,onMove:c,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:Wy(this.visualElement)})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:c}=this.getProps();c&&qt.postRender(()=>c(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!nu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=M1(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;e&&mo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=T1(r.layoutBox,e):this.constraints=!1,this.elastic=R1(t),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ci(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=C1(r.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!mo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=Lw(r,o.root,this.visualElement.getTransformPagePoint());let u=w1(o.layout.layoutBox,l);if(t){const c=t(bw(u));this.hasMutatedConstraints=!!c,c&&(u=by(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=ci(m=>{if(!nu(m,t,this.currentDirection))return;let p=d&&d[m]||{};u&&(p={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,E={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...p};return this.startAxisValueAnimation(m,E)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Xd(this.visualElement,e),r.start(vp(e,r,0,t,this.visualElement,!1))}stopAnimation(){ci(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ci(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ci(t=>{const{drag:r}=this.getProps();if(!nu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-Zt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!mo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ci(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=A1({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ci(u=>{if(!nu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(Zt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;b1.set(this.visualElement,this);const e=this.visualElement.current,t=Ea(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();mo(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),qt.read(r);const u=Pa(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(ci(m=>{const p=this.getAxisMotionValue(m);p&&(this.originPoint[m]+=d[m].translate,p.set(p.get()+d[m].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Yd,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function nu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function D1(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class L1 extends jr{constructor(e){super(e),this.removeGroupControls=pi,this.removeListeners=pi,this.controls=new P1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||pi}unmount(){this.removeGroupControls(),this.removeListeners()}}const Qv=n=>(e,t)=>{n&&qt.postRender(()=>n(e,t))};class I1 extends jr{constructor(){super(...arguments),this.removePointerDownListener=pi}onPointerDown(e){this.session=new Xy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Wy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Qv(e),onStart:Qv(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&qt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Ea(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const bu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Jv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const da={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(ct.test(n))n=parseFloat(n);else return n;const t=Jv(n,e.target.x),r=Jv(n,e.target.y);return`${t}% ${r}%`}},N1={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Wr.parse(n);if(o.length>5)return r;const l=Wr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=Zt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};let Wf=!1;class U1 extends Oe.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;iw(F1),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),Wf&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),bu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,{projection:u}=r;return u&&(u.isPresent=l,Wf=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==l?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||qt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),ap.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;Wf=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Yy(n){const[e,t]=KT(),r=Oe.useContext(T_);return me.jsx(U1,{...n,layoutGroup:r,switchLayoutGroup:Oe.useContext(Cy),isPresent:e,safeToRemove:t})}const F1={borderRadius:{...da,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:da,borderTopRightRadius:da,borderBottomLeftRadius:da,borderBottomRightRadius:da,boxShadow:N1};function O1(n,e,t){const r=Pn(n)?n:Eo(n);return r.start(vp("",r,e,t)),r.animation}const k1=(n,e)=>n.depth-e.depth;class B1{constructor(){this.children=[],this.isDirty=!1}add(e){Hh(this.children,e),this.isDirty=!0}remove(e){Gh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(k1),this.isDirty=!1,this.children.forEach(e)}}function z1(n,e){const t=jn.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(Gr(r),n(l-e))};return qt.setup(r,!0),()=>Gr(r)}const qy=["TopLeft","TopRight","BottomLeft","BottomRight"],V1=qy.length,e0=n=>typeof n=="string"?parseFloat(n):n,t0=n=>typeof n=="number"||ct.test(n);function H1(n,e,t,r,o,l){o?(n.opacity=Zt(0,t.opacity??1,G1(r)),n.opacityExit=Zt(e.opacity??1,0,W1(r))):l&&(n.opacity=Zt(e.opacity??1,t.opacity??1,r));for(let u=0;u<V1;u++){const c=`border${qy[u]}Radius`;let d=n0(e,c),h=n0(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||t0(d)===t0(h)?(n[c]=Math.max(Zt(e0(d),e0(h),r),0),(Gi.test(h)||Gi.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=Zt(e.rotate||0,t.rotate||0,r))}function n0(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const G1=$y(0,.5,U_),W1=$y(.5,.95,pi);function $y(n,e,t){return r=>r<n?0:r>e?1:t(wa(n,e,r))}function i0(n,e){n.min=e.min,n.max=e.max}function li(n,e){i0(n.x,e.x),i0(n.y,e.y)}function r0(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function s0(n,e,t,r,o){return n-=e,n=zu(n,1/t,r),o!==void 0&&(n=zu(n,1/o,r)),n}function X1(n,e=0,t=1,r=.5,o,l=n,u=n){if(Gi.test(e)&&(e=parseFloat(e),e=Zt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Zt(l.min,l.max,r);n===l&&(c-=e),n.min=s0(n.min,e,t,c,o),n.max=s0(n.max,e,t,c,o)}function o0(n,e,[t,r,o],l,u){X1(n,e[t],e[r],e[o],e.scale,l,u)}const j1=["x","scaleX","originX"],Y1=["y","scaleY","originY"];function a0(n,e,t,r){o0(n.x,e,j1,t?t.x:void 0,r?r.x:void 0),o0(n.y,e,Y1,t?t.y:void 0,r?r.y:void 0)}function l0(n){return n.translate===0&&n.scale===1}function Ky(n){return l0(n.x)&&l0(n.y)}function u0(n,e){return n.min===e.min&&n.max===e.max}function q1(n,e){return u0(n.x,e.x)&&u0(n.y,e.y)}function c0(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Zy(n,e){return c0(n.x,e.x)&&c0(n.y,e.y)}function f0(n){return On(n.x)/On(n.y)}function d0(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class $1{constructor(){this.members=[]}add(e){Hh(this.members,e),e.scheduleRender()}remove(e){if(Gh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function K1(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=t?.z||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:p,rotateY:v,skewX:x,skewY:E}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),p&&(r+=`rotateX(${p}deg) `),v&&(r+=`rotateY(${v}deg) `),x&&(r+=`skewX(${x}deg) `),E&&(r+=`skewY(${E}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const Xf=["","X","Y","Z"],Z1=1e3;let Q1=0;function jf(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function Qy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Oy(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",qt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Qy(r)}function Jy({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e?.()){this.id=Q1++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(tA),this.nodes.forEach(sA),this.nodes.forEach(oA),this.nodes.forEach(nA)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new B1)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new jh),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=py(u)&&!YT(u),this.instance=u;const{layoutId:c,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||c)&&(this.isLayoutDirty=!0),n){let m,p=0;const v=()=>this.root.updateBlockedByResize=!1;qt.read(()=>{p=window.innerWidth}),n(u,()=>{const x=window.innerWidth;x!==p&&(p=x,this.root.updateBlockedByResize=!0,m&&m(),m=z1(v,250),bu.hasAnimatedSinceResize&&(bu.hasAnimatedSinceResize=!1,this.nodes.forEach(m0)))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&h&&(c||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p,hasRelativeLayoutChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||h.getDefaultTransition()||fA,{onLayoutAnimationStart:T,onLayoutAnimationComplete:S}=h.getProps(),y=!this.targetLayout||!Zy(this.targetLayout,x),D=!p&&v;if(this.options.layoutRoot||this.resumeFrom||D||p&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...sp(E,"layout"),onPlay:T,onComplete:S};(h.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(m,D)}else p||m0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Gr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(aA),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Qy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const p=this.path[m];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(h0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(p0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(rA),this.nodes.forEach(J1),this.nodes.forEach(eA)):this.nodes.forEach(p0),this.clearAllSnapshots();const c=jn.now();Sn.delta=ur(0,1e3/60,c-Sn.timestamp),Sn.timestamp=c,Sn.isProcessing=!0,Nf.update.process(Sn),Nf.preRender.process(Sn),Nf.render.process(Sn),Sn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ap.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(iA),this.sharedNodes.forEach(lA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!On(this.snapshot.measuredBox.x)&&!On(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=nn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!Ky(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&this.instance&&(c||ms(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),dA(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return nn();const c=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(hA))){const{scroll:h}=this.root;h&&(go(c.x,h.offset.x),go(c.y,h.offset.y))}return c}removeElementScroll(u){const c=nn();if(li(c,u),this.scroll?.wasRoot)return c;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:m,options:p}=h;h!==this.root&&m&&p.layoutScroll&&(m.wasRoot&&li(c,u),go(c.x,m.offset.x),go(c.y,m.offset.y))}return c}applyTransform(u,c=!1){const d=nn();li(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!c&&m.options.layoutScroll&&m.scroll&&m!==m.root&&vo(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),ms(m.latestValues)&&vo(d,m.latestValues)}return ms(this.latestValues)&&vo(d,this.latestValues),d}removeTransform(u){const c=nn();li(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!ms(h.latestValues))continue;Vd(h.latestValues)&&h.updateSnapshot();const m=nn(),p=h.measurePageBox();li(m,p),a0(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return ms(this.latestValues)&&a0(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Sn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==c;if(!(u||d&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:p}=this.options;if(!(!this.layout||!(m||p))){if(this.resolvedRelativeTargetAt=Sn.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nn(),this.relativeTargetOrigin=nn(),Ta(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=nn(),this.targetWithTransforms=nn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),y1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):li(this.target,this.layout.layoutBox),Dy(this.target,this.targetDelta)):li(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nn(),this.relativeTargetOrigin=nn(),Ta(this.relativeTargetOrigin,this.target,v.target),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Vd(this.parent.latestValues)||Py(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const u=this.getLead(),c=!!this.resumingFrom||this!==u;let d=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(d=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Sn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;li(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,v=this.treeScale.y;Dw(this.layoutCorrected,this.treeScale,this.path,c),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=nn());const{target:x}=u;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(r0(this.prevProjectionDelta.x,this.projectionDelta.x),r0(this.prevProjectionDelta.y,this.projectionDelta.y)),Ma(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==v||!d0(this.projectionDelta.x,this.prevProjectionDelta.x)||!d0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=_o(),this.projectionDelta=_o(),this.projectionDeltaWithTransform=_o()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},p=_o();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=nn(),x=d?d.source:void 0,E=this.layout?this.layout.source:void 0,T=x!==E,S=this.getStack(),y=!S||S.members.length<=1,D=!!(T&&!y&&this.options.crossfade===!0&&!this.path.some(cA));this.animationProgress=0;let R;this.mixTargetDelta=A=>{const N=A/1e3;g0(p.x,u.x,N),g0(p.y,u.y,N),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ta(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),uA(this.relativeTarget,this.relativeTargetOrigin,v,N),R&&q1(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=nn()),li(R,this.relativeTarget)),T&&(this.animationValues=m,H1(m,h,this.latestValues,N,D,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Gr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qt.update(()=>{bu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Eo(0)),this.currentAnimation=O1(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Z1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:m}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&ex(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||nn();const p=On(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+p;const v=On(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}li(c,d),vo(c,m),Ma(this.projectionDeltaWithTransform,this.layoutCorrected,c,m)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new $1),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&jf("z",u,h,this.animationValues);for(let m=0;m<Xf.length;m++)jf(`rotate${Xf[m]}`,u,h,this.animationValues),jf(`skew${Xf[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}applyProjectionStyles(u,c){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Ru(c?.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Ru(c?.pointerEvents)||""),this.hasProjected&&!ms(this.latestValues)&&(u.transform=d?d({},""):"none",this.hasProjected=!1);return}u.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let p=K1(this.projectionDeltaWithTransform,this.treeScale,m);d&&(p=d(m,p)),u.transform=p;const{x:v,y:x}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,h.animationValues?u.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const E in ba){if(m[E]===void 0)continue;const{correct:T,applyTo:S,isCSSVariable:y}=ba[E],D=p==="none"?m[E]:T(m[E],h);if(S){const R=S.length;for(let A=0;A<R;A++)u[S[A]]=D}else y?this.options.visualElement.renderState.vars[E]=D:u[E]=D}this.options.layoutId&&(u.pointerEvents=h===this?Ru(c?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(h0),this.root.sharedNodes.clear()}}}function J1(n){n.updateLayout()}function eA(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=n.layout,{animationType:o}=n.options,l=e.source!==n.layout.source;o==="size"?ci(m=>{const p=l?e.measuredBox[m]:e.layoutBox[m],v=On(p);p.min=t[m].min,p.max=p.min+v}):ex(o,e.layoutBox,t)&&ci(m=>{const p=l?e.measuredBox[m]:e.layoutBox[m],v=On(t[m]);p.max=p.min+v,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[m].max=n.relativeTarget[m].min+v)});const u=_o();Ma(u,t,e.layoutBox);const c=_o();l?Ma(c,n.applyTransform(r,!0),e.measuredBox):Ma(c,t,e.layoutBox);const d=!Ky(u);let h=!1;if(!n.resumeFrom){const m=n.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:p,layout:v}=m;if(p&&v){const x=nn();Ta(x,e.layoutBox,p.layoutBox);const E=nn();Ta(E,t,v.layoutBox),Zy(x,E)||(h=!0),m.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=x,n.relativeParent=m)}}}n.notifyListeners("didUpdate",{layout:t,snapshot:e,delta:c,layoutDelta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(n.isLead()){const{onExitComplete:t}=n.options;t&&t()}n.options.transition=void 0}function tA(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function nA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function iA(n){n.clearSnapshot()}function h0(n){n.clearMeasurements()}function p0(n){n.isLayoutDirty=!1}function rA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function m0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function sA(n){n.resolveTargetDelta()}function oA(n){n.calcProjection()}function aA(n){n.resetSkewAndRotation()}function lA(n){n.removeLeadSnapshot()}function g0(n,e,t){n.translate=Zt(e.translate,0,t),n.scale=Zt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function v0(n,e,t,r){n.min=Zt(e.min,t.min,r),n.max=Zt(e.max,t.max,r)}function uA(n,e,t,r){v0(n.x,e.x,t.x,r),v0(n.y,e.y,t.y,r)}function cA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const fA={duration:.45,ease:[.4,0,.1,1]},_0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),y0=_0("applewebkit/")&&!_0("chrome/")?Math.round:pi;function x0(n){n.min=y0(n.min),n.max=y0(n.max)}function dA(n){x0(n.x),x0(n.y)}function ex(n,e,t){return n==="position"||n==="preserve-aspect"&&!_1(f0(e),f0(t),.2)}function hA(n){return n!==n.root&&n.scroll?.wasRoot}const pA=Jy({attachResizeListener:(n,e)=>Pa(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Yf={current:void 0},tx=Jy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Yf.current){const n=new pA({});n.mount(window),n.setOptions({layoutScroll:!0}),Yf.current=n}return Yf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),mA={pan:{Feature:I1},drag:{Feature:L1,ProjectionNode:tx,MeasureLayout:Yy}};function S0(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&qt.postRender(()=>l(e,Ba(e)))}class gA extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=HT(e,(t,r)=>(S0(this.node,r,"Start"),o=>S0(this.node,o,"End"))))}unmount(){}}class vA extends jr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Fa(Pa(this.node.current,"focus",()=>this.onFocus()),Pa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function E0(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&qt.postRender(()=>l(e,Ba(e)))}class _A extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=jT(e,(t,r)=>(E0(this.node,r,"Start"),(o,{success:l})=>E0(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const qd=new WeakMap,qf=new WeakMap,yA=n=>{const e=qd.get(n.target);e&&e(n)},xA=n=>{n.forEach(yA)};function SA({root:n,...e}){const t=n||document;qf.has(t)||qf.set(t,{});const r=qf.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(xA,{root:n,...e})),r[o]}function EA(n,e,t){const r=SA(e);return qd.set(n,t),r.observe(n),()=>{qd.delete(n),r.unobserve(n)}}const MA={some:0,all:1};class TA extends jr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:MA[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:p}=this.node.getProps(),v=h?m:p;v&&v(d)};return EA(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(wA(e,t))&&this.startObserver()}unmount(){}}function wA({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const AA={inView:{Feature:TA},tap:{Feature:_A},focus:{Feature:vA},hover:{Feature:gA}},CA={layout:{ProjectionNode:tx,MeasureLayout:Yy}},RA={...d1,...AA,...mA,...CA},Vt=Rw(RA,Vw),bA={some:0,all:1};function PA(n,e,{root:t,margin:r,amount:o="some"}={}){const l=uy(n),u=new WeakMap,c=h=>{h.forEach(m=>{const p=u.get(m.target);if(m.isIntersecting!==!!p)if(m.isIntersecting){const v=e(m.target,m);typeof v=="function"?u.set(m.target,v):d.unobserve(m.target)}else typeof p=="function"&&(p(m),u.delete(m.target))})},d=new IntersectionObserver(c,{root:t,rootMargin:r,threshold:typeof o=="number"?o:bA[o]});return l.forEach(h=>d.observe(h)),()=>d.disconnect()}function _p(n,{root:e,margin:t,amount:r,once:o=!1,initial:l=!1}={}){const[u,c]=Oe.useState(l);return Oe.useEffect(()=>{if(!n.current||o&&u)return;const d=()=>(c(!0),o?void 0:()=>c(!1)),h={root:e&&e.current||void 0,margin:t,amount:r};return PA(n.current,d,h)},[e,n,t,o,r]),u}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),LA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),M0=n=>{const e=LA(n);return e.charAt(0).toUpperCase()+e.slice(1)},nx=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=Oe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...c},d)=>Oe.createElement("svg",{ref:d,...IA,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:nx("lucide",o),...c},[...u.map(([h,m])=>Oe.createElement(h,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=(n,e)=>{const t=Oe.forwardRef(({className:r,...o},l)=>Oe.createElement(NA,{ref:l,iconNode:e,className:nx(`lucide-${DA(M0(n))}`,`lucide-${n}`,r),...o}));return t.displayName=M0(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],FA=yp("arrow-up-right",UA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],kA=yp("menu",OA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zA=yp("x",BA),xp={NAME:"Nicolás Lundin"},$d="/",Pu={NAVIGATION_FAILED:"Navigation failed",ROUTE_NOT_FOUND:"Route not found",UNEXPECTED_ERROR:"An unexpected error occurred"},VA={behavior:"smooth",block:"start"},T0=[{name:"Work",href:"#work"},{name:"About",href:"#about"},{name:"Contact",href:"#contact"}];function HA(){const{currentRoute:n,navigateTo:e}=Ux(),[t,r]=Oe.useState(!1),[o,l]=Oe.useState(!1);Oe.useEffect(()=>{const c=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const u=c=>{l(!1),requestAnimationFrame(()=>{n!=="home"?(e("home"),setTimeout(()=>{window.history.pushState({route:"home",section:c},"",`/${c}`);const d=document.querySelector(c);d&&d.scrollIntoView({behavior:"smooth"})},300)):(window.history.pushState({route:"home",section:c},"",`/${c}`),setTimeout(()=>{const d=document.querySelector(c);if(d){const p=d.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:p,behavior:"smooth"})}},50))})};return me.jsx(Vt.header,{initial:{y:-100},animate:{y:0},transition:{duration:.6},className:`header ${t?"header-scrolled":"header-transparent"}`,children:me.jsxs("nav",{className:"header-nav",children:[me.jsxs("div",{className:"header-inner",children:[me.jsx(Vt.div,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"header-logo",onClick:()=>e("home"),children:me.jsx("span",{className:"header-logo-text",children:xp.NAME})}),me.jsx("div",{className:"header-desktop-nav",children:me.jsx("div",{className:"header-nav-items",children:T0.map(c=>me.jsx(Vt.button,{whileHover:{y:-2},whileTap:{scale:.95},onClick:()=>u(c.href),className:"header-nav-button",children:c.name},c.name))})}),me.jsx(Vt.button,{whileTap:{scale:.95},onClick:()=>l(!o),className:"header-mobile-menu-button",children:o?me.jsx(zA,{size:20}):me.jsx(kA,{size:20})})]}),me.jsx(Vt.div,{initial:{opacity:0,height:0},animate:{opacity:o?1:0,height:o?"auto":0},transition:{duration:.3},className:"header-mobile-nav",children:me.jsx("div",{className:"header-mobile-nav-items",children:T0.map(c=>me.jsx(Vt.button,{whileHover:{x:10},whileTap:{scale:.95},onClick:()=>u(c.href),className:"header-mobile-nav-button",children:c.name},c.name))})})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sp="180",GA=0,w0=1,WA=2,ix=1,XA=2,or=3,Xr=0,Yn=1,ki=2,Vr=0,As=1,A0=2,C0=3,R0=4,jA=5,_s=100,YA=101,qA=102,$A=103,KA=104,ZA=200,QA=201,JA=202,eC=203,Kd=204,Zd=205,tC=206,nC=207,iC=208,rC=209,sC=210,oC=211,aC=212,lC=213,uC=214,Qd=0,Jd=1,eh=2,To=3,th=4,nh=5,ih=6,rh=7,rx=0,cC=1,fC=2,Hr=0,dC=1,hC=2,pC=3,mC=4,gC=5,vC=6,_C=7,sx=300,wo=301,Ao=302,sh=303,oh=304,Yu=306,ah=1e3,Es=1001,lh=1002,Pi=1003,yC=1004,iu=1005,Bi=1006,$f=1007,Ms=1008,fr=1009,ox=1010,ax=1011,Da=1012,Ep=1013,Cs=1014,ar=1015,za=1016,Mp=1017,Tp=1018,La=1020,lx=35902,ux=35899,cx=1021,fx=1022,bi=1023,Ia=1026,Na=1027,dx=1028,wp=1029,hx=1030,Ap=1031,Cp=1033,Du=33776,Lu=33777,Iu=33778,Nu=33779,uh=35840,ch=35841,fh=35842,dh=35843,hh=36196,ph=37492,mh=37496,gh=37808,vh=37809,_h=37810,yh=37811,xh=37812,Sh=37813,Eh=37814,Mh=37815,Th=37816,wh=37817,Ah=37818,Ch=37819,Rh=37820,bh=37821,Ph=36492,Dh=36494,Lh=36495,Ih=36283,Nh=36284,Uh=36285,Fh=36286,xC=3200,SC=3201,EC=0,MC=1,zr="",fi="srgb",Co="srgb-linear",Vu="linear",Ot="srgb",Js=7680,b0=519,TC=512,wC=513,AC=514,px=515,CC=516,RC=517,bC=518,PC=519,P0=35044,D0="300 es",zi=2e3,Hu=2001;class Lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=Math.PI/180,Oh=180/Math.PI;function Va(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function DC(n,e){return(n%e+e)%e}function Zf(n,e,t){return(1-t)*n+t*e}function ha(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ha{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let d=r[o+0],h=r[o+1],m=r[o+2],p=r[o+3];const v=l[u+0],x=l[u+1],E=l[u+2],T=l[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=p;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=E,e[t+3]=T;return}if(p!==T||d!==v||h!==x||m!==E){let S=1-c;const y=d*v+h*x+m*E+p*T,D=y>=0?1:-1,R=1-y*y;if(R>Number.EPSILON){const N=Math.sqrt(R),L=Math.atan2(N,y*D);S=Math.sin(S*L)/N,c=Math.sin(c*L)/N}const A=c*D;if(d=d*S+v*A,h=h*S+x*A,m=m*S+E*A,p=p*S+T*A,S===1-c){const N=1/Math.sqrt(d*d+h*h+m*m+p*p);d*=N,h*=N,m*=N,p*=N}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=p}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],d=r[o+1],h=r[o+2],m=r[o+3],p=l[u],v=l[u+1],x=l[u+2],E=l[u+3];return e[t]=c*E+m*p+d*x-h*v,e[t+1]=d*E+m*v+h*p-c*x,e[t+2]=h*E+m*x+c*v-d*p,e[t+3]=m*E-c*p-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),m=c(o/2),p=c(l/2),v=d(r/2),x=d(o/2),E=d(l/2);switch(u){case"XYZ":this._x=v*m*p+h*x*E,this._y=h*x*p-v*m*E,this._z=h*m*E+v*x*p,this._w=h*m*p-v*x*E;break;case"YXZ":this._x=v*m*p+h*x*E,this._y=h*x*p-v*m*E,this._z=h*m*E-v*x*p,this._w=h*m*p+v*x*E;break;case"ZXY":this._x=v*m*p-h*x*E,this._y=h*x*p+v*m*E,this._z=h*m*E+v*x*p,this._w=h*m*p-v*x*E;break;case"ZYX":this._x=v*m*p-h*x*E,this._y=h*x*p+v*m*E,this._z=h*m*E-v*x*p,this._w=h*m*p+v*x*E;break;case"YZX":this._x=v*m*p+h*x*E,this._y=h*x*p+v*m*E,this._z=h*m*E-v*x*p,this._w=h*m*p-v*x*E;break;case"XZY":this._x=v*m*p-h*x*E,this._y=h*x*p-v*m*E,this._z=h*m*E+v*x*p,this._w=h*m*p+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],m=t[6],p=t[10],v=r+c+p;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-o)*x}else if(r>c&&r>p){const x=2*Math.sqrt(1+r-c-p);this._w=(m-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+h)/x}else if(c>p){const x=2*Math.sqrt(1+c-r-p);this._w=(l-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+p-r-c);this._w=(u-o)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*c+o*h-l*d,this._y=o*m+u*d+l*c-r*h,this._z=l*m+u*h+r*d-o*c,this._w=u*m-r*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,c),p=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*p+this._w*v,this._x=r*p+this._x*v,this._y=o*p+this._y*v,this._z=l*p+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(L0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(L0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),m=2*(c*t-l*o),p=2*(l*r-u*t);return this.x=t+d*h+u*p-c*m,this.y=r+d*m+c*h-l*p,this.z=o+d*p+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qf.copy(this).projectOnVector(e),this.sub(Qf)}reflect(e){return this.sub(Qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new te,L0=new Ha;class gt{constructor(e,t,r,o,l,u,c,d,h){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h)}set(e,t,r,o,l,u,c,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],m=r[4],p=r[7],v=r[2],x=r[5],E=r[8],T=o[0],S=o[3],y=o[6],D=o[1],R=o[4],A=o[7],N=o[2],L=o[5],F=o[8];return l[0]=u*T+c*D+d*N,l[3]=u*S+c*R+d*L,l[6]=u*y+c*A+d*F,l[1]=h*T+m*D+p*N,l[4]=h*S+m*R+p*L,l[7]=h*y+m*A+p*F,l[2]=v*T+x*D+E*N,l[5]=v*S+x*R+E*L,l[8]=v*y+x*A+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*c*h-r*l*m+r*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],p=m*u-c*h,v=c*d-m*l,x=h*l-u*d,E=t*p+r*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=p*T,e[1]=(o*h-m*r)*T,e[2]=(c*r-o*u)*T,e[3]=v*T,e[4]=(m*t-o*d)*T,e[5]=(o*l-c*t)*T,e[6]=x*T,e[7]=(r*d-h*t)*T,e[8]=(u*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Jf.makeScale(e,t)),this}rotate(e){return this.premultiply(Jf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jf=new gt;function mx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function LC(){const n=Gu("canvas");return n.style.display="block",n}const I0={};function Ua(n){n in I0||(I0[n]=!0,console.warn(n))}function IC(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const N0=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U0=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NC(){const n={enabled:!0,workingColorSpace:Co,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ot&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(o.r=So(o.r),o.g=So(o.g),o.b=So(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===zr?Vu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ua("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ua("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Co]:{primaries:e,whitePoint:r,transfer:Vu,toXYZ:N0,fromXYZ:U0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:N0,fromXYZ:U0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),n}const Rt=NC();function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function So(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let eo;class UC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{eo===void 0&&(eo=Gu("canvas")),eo.width=e.width,eo.height=e.height;const o=eo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=eo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=lr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FC=0;class Rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FC++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(ed(o[u].image)):l.push(ed(o[u]))}else l=ed(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ed(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?UC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OC=0;const td=new te;class qn extends Lo{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,r=Es,o=Es,l=Bi,u=Ms,c=bi,d=fr,h=qn.DEFAULT_ANISOTROPY,m=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OC++}),this.uuid=Va(),this.name="",this.source=new Rp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ah:e.x=e.x-Math.floor(e.x);break;case Es:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ah:e.y=e.y-Math.floor(e.y);break;case Es:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=sx;qn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,r=0,o=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],p=d[8],v=d[1],x=d[5],E=d[9],T=d[2],S=d[6],y=d[10];if(Math.abs(m-v)<.01&&Math.abs(p-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(p+T)<.1&&Math.abs(E+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,A=(x+1)/2,N=(y+1)/2,L=(m+v)/4,F=(p+T)/4,k=(E+S)/4;return R>A&&R>N?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=L/r,l=F/r):A>N?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=L/o,l=k/o):N<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),r=F/l,o=k/l),this.set(r,o,l,t),this}let D=Math.sqrt((S-E)*(S-E)+(p-T)*(p-T)+(v-m)*(v-m));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(p-T)/D,this.z=(v-m)/D,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kC extends Lo{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new qn(o);this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Rp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends kC{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class gx extends qn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BC extends qn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ti):Ti.fromBufferAttribute(l,u),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ru.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ru.copy(r.boundingBox)),ru.applyMatrix4(e.matrixWorld),this.union(ru)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),su.subVectors(this.max,pa),to.subVectors(e.a,pa),no.subVectors(e.b,pa),io.subVectors(e.c,pa),Ir.subVectors(no,to),Nr.subVectors(io,no),us.subVectors(to,io);let t=[0,-Ir.z,Ir.y,0,-Nr.z,Nr.y,0,-us.z,us.y,Ir.z,0,-Ir.x,Nr.z,0,-Nr.x,us.z,0,-us.x,-Ir.y,Ir.x,0,-Nr.y,Nr.x,0,-us.y,us.x,0];return!nd(t,to,no,io,su)||(t=[1,0,0,0,1,0,0,0,1],!nd(t,to,no,io,su))?!1:(ou.crossVectors(Ir,Nr),t=[ou.x,ou.y,ou.z],nd(t,to,no,io,su))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tr=[new te,new te,new te,new te,new te,new te,new te,new te],Ti=new te,ru=new Ga,to=new te,no=new te,io=new te,Ir=new te,Nr=new te,us=new te,pa=new te,su=new te,ou=new te,cs=new te;function nd(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){cs.fromArray(n,l);const c=o.x*Math.abs(cs.x)+o.y*Math.abs(cs.y)+o.z*Math.abs(cs.z),d=e.dot(cs),h=t.dot(cs),m=r.dot(cs);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const zC=new Ga,ma=new te,id=new te;class bp{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):zC.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ma,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(id)),this.expandByPoint(ma.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const nr=new te,rd=new te,au=new te,Ur=new te,sd=new te,lu=new te,od=new te;class VC{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){rd.copy(e).add(t).multiplyScalar(.5),au.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(rd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(au),c=Ur.dot(this.direction),d=-Ur.dot(au),h=Ur.lengthSq(),m=Math.abs(1-u*u);let p,v,x,E;if(m>0)if(p=u*d-c,v=u*c-d,E=l*m,p>=0)if(v>=-E)if(v<=E){const T=1/m;p*=T,v*=T,x=p*(p+u*v+2*c)+v*(u*p+v+2*d)+h}else v=l,p=Math.max(0,-(u*v+c)),x=-p*p+v*(v+2*d)+h;else v=-l,p=Math.max(0,-(u*v+c)),x=-p*p+v*(v+2*d)+h;else v<=-E?(p=Math.max(0,-(-u*l+c)),v=p>0?-l:Math.min(Math.max(-l,-d),l),x=-p*p+v*(v+2*d)+h):v<=E?(p=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+h):(p=Math.max(0,-(u*l+c)),v=p>0?l:Math.min(Math.max(-l,-d),l),x=-p*p+v*(v+2*d)+h);else v=u>0?-l:l,p=Math.max(0,-(u*v+c)),x=-p*p+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,p),o&&o.copy(rd).addScaledVector(au,v),x}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const r=nr.dot(this.direction),o=nr.dot(nr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,d;const h=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),p>=0?(c=(e.min.z-v.z)*p,d=(e.max.z-v.z)*p):(c=(e.max.z-v.z)*p,d=(e.min.z-v.z)*p),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,r,o,l){sd.subVectors(t,e),lu.subVectors(r,e),od.crossVectors(sd,lu);let u=this.direction.dot(od),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Ur.subVectors(this.origin,e);const d=c*this.direction.dot(lu.crossVectors(Ur,lu));if(d<0)return null;const h=c*this.direction.dot(sd.cross(Ur));if(h<0||d+h>u)return null;const m=-c*Ur.dot(od);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,t,r,o,l,u,c,d,h,m,p,v,x,E,T,S){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h,m,p,v,x,E,T,S)}set(e,t,r,o,l,u,c,d,h,m,p,v,x,E,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=m,y[10]=p,y[14]=v,y[3]=x,y[7]=E,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/ro.setFromMatrixColumn(e,0).length(),l=1/ro.setFromMatrixColumn(e,1).length(),u=1/ro.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),p=Math.sin(l);if(e.order==="XYZ"){const v=u*m,x=u*p,E=c*m,T=c*p;t[0]=d*m,t[4]=-d*p,t[8]=h,t[1]=x+E*h,t[5]=v-T*h,t[9]=-c*d,t[2]=T-v*h,t[6]=E+x*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,x=d*p,E=h*m,T=h*p;t[0]=v+T*c,t[4]=E*c-x,t[8]=u*h,t[1]=u*p,t[5]=u*m,t[9]=-c,t[2]=x*c-E,t[6]=T+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,x=d*p,E=h*m,T=h*p;t[0]=v-T*c,t[4]=-u*p,t[8]=E+x*c,t[1]=x+E*c,t[5]=u*m,t[9]=T-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,x=u*p,E=c*m,T=c*p;t[0]=d*m,t[4]=E*h-x,t[8]=v*h+T,t[1]=d*p,t[5]=T*h+v,t[9]=x*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,x=u*h,E=c*d,T=c*h;t[0]=d*m,t[4]=T-v*p,t[8]=E*p+x,t[1]=p,t[5]=u*m,t[9]=-c*m,t[2]=-h*m,t[6]=x*p+E,t[10]=v-T*p}else if(e.order==="XZY"){const v=u*d,x=u*h,E=c*d,T=c*h;t[0]=d*m,t[4]=-p,t[8]=h*m,t[1]=v*p+T,t[5]=u*m,t[9]=x*p-E,t[2]=E*p-x,t[6]=c*m,t[10]=T*p+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HC,e,GC)}lookAt(e,t,r){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Fr.crossVectors(r,Jn),Fr.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Fr.crossVectors(r,Jn)),Fr.normalize(),uu.crossVectors(Jn,Fr),o[0]=Fr.x,o[4]=uu.x,o[8]=Jn.x,o[1]=Fr.y,o[5]=uu.y,o[9]=Jn.y,o[2]=Fr.z,o[6]=uu.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],m=r[1],p=r[5],v=r[9],x=r[13],E=r[2],T=r[6],S=r[10],y=r[14],D=r[3],R=r[7],A=r[11],N=r[15],L=o[0],F=o[4],k=o[8],P=o[12],C=o[1],H=o[5],$=o[9],ne=o[13],ue=o[2],he=o[6],K=o[10],se=o[14],z=o[3],ae=o[7],ee=o[11],O=o[15];return l[0]=u*L+c*C+d*ue+h*z,l[4]=u*F+c*H+d*he+h*ae,l[8]=u*k+c*$+d*K+h*ee,l[12]=u*P+c*ne+d*se+h*O,l[1]=m*L+p*C+v*ue+x*z,l[5]=m*F+p*H+v*he+x*ae,l[9]=m*k+p*$+v*K+x*ee,l[13]=m*P+p*ne+v*se+x*O,l[2]=E*L+T*C+S*ue+y*z,l[6]=E*F+T*H+S*he+y*ae,l[10]=E*k+T*$+S*K+y*ee,l[14]=E*P+T*ne+S*se+y*O,l[3]=D*L+R*C+A*ue+N*z,l[7]=D*F+R*H+A*he+N*ae,l[11]=D*k+R*$+A*K+N*ee,l[15]=D*P+R*ne+A*se+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],m=e[2],p=e[6],v=e[10],x=e[14],E=e[3],T=e[7],S=e[11],y=e[15];return E*(+l*d*p-o*h*p-l*c*v+r*h*v+o*c*x-r*d*x)+T*(+t*d*x-t*h*v+l*u*v-o*u*x+o*h*m-l*d*m)+S*(+t*h*p-t*c*x-l*u*p+r*u*x+l*c*m-r*h*m)+y*(-o*c*m-t*d*p+t*c*v+o*u*p-r*u*v+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],p=e[9],v=e[10],x=e[11],E=e[12],T=e[13],S=e[14],y=e[15],D=p*S*h-T*v*h+T*d*x-c*S*x-p*d*y+c*v*y,R=E*v*h-m*S*h-E*d*x+u*S*x+m*d*y-u*v*y,A=m*T*h-E*p*h+E*c*x-u*T*x-m*c*y+u*p*y,N=E*p*d-m*T*d-E*c*v+u*T*v+m*c*S-u*p*S,L=t*D+r*R+o*A+l*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=D*F,e[1]=(T*v*l-p*S*l-T*o*x+r*S*x+p*o*y-r*v*y)*F,e[2]=(c*S*l-T*d*l+T*o*h-r*S*h-c*o*y+r*d*y)*F,e[3]=(p*d*l-c*v*l-p*o*h+r*v*h+c*o*x-r*d*x)*F,e[4]=R*F,e[5]=(m*S*l-E*v*l+E*o*x-t*S*x-m*o*y+t*v*y)*F,e[6]=(E*d*l-u*S*l-E*o*h+t*S*h+u*o*y-t*d*y)*F,e[7]=(u*v*l-m*d*l+m*o*h-t*v*h-u*o*x+t*d*x)*F,e[8]=A*F,e[9]=(E*p*l-m*T*l-E*r*x+t*T*x+m*r*y-t*p*y)*F,e[10]=(u*T*l-E*c*l+E*r*h-t*T*h-u*r*y+t*c*y)*F,e[11]=(m*c*l-u*p*l-m*r*h+t*p*h+u*r*x-t*c*x)*F,e[12]=N*F,e[13]=(m*T*o-E*p*o+E*r*v-t*T*v-m*r*S+t*p*S)*F,e[14]=(E*c*o-u*T*o-E*r*d+t*T*d+u*r*S-t*c*S)*F,e[15]=(u*p*o-m*c*o+m*r*d-t*p*d-u*r*v+t*c*v)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,d=e.z,h=l*u,m=l*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,m*c+r,m*d-o*u,0,h*d-o*c,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,m=u+u,p=c+c,v=l*h,x=l*m,E=l*p,T=u*m,S=u*p,y=c*p,D=d*h,R=d*m,A=d*p,N=r.x,L=r.y,F=r.z;return o[0]=(1-(T+y))*N,o[1]=(x+A)*N,o[2]=(E-R)*N,o[3]=0,o[4]=(x-A)*L,o[5]=(1-(v+y))*L,o[6]=(S+D)*L,o[7]=0,o[8]=(E+R)*F,o[9]=(S-D)*F,o[10]=(1-(v+T))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=ro.set(o[0],o[1],o[2]).length();const u=ro.set(o[4],o[5],o[6]).length(),c=ro.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],wi.copy(this);const h=1/l,m=1/u,p=1/c;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=m,wi.elements[5]*=m,wi.elements[6]*=m,wi.elements[8]*=p,wi.elements[9]*=p,wi.elements[10]*=p,t.setFromRotationMatrix(wi),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=zi,d=!1){const h=this.elements,m=2*l/(t-e),p=2*l/(r-o),v=(t+e)/(t-e),x=(r+o)/(r-o);let E,T;if(d)E=l/(u-l),T=u*l/(u-l);else if(c===zi)E=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(c===Hu)E=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=p,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=zi,d=!1){const h=this.elements,m=2/(t-e),p=2/(r-o),v=-(t+e)/(t-e),x=-(r+o)/(r-o);let E,T;if(d)E=1/(u-l),T=u/(u-l);else if(c===zi)E=-2/(u-l),T=-(u+l)/(u-l);else if(c===Hu)E=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=p,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ro=new te,wi=new fn,HC=new te(0,0,0),GC=new te(1,1,1),Fr=new te,uu=new te,Jn=new te,F0=new fn,O0=new Ha;class dr{constructor(e=0,t=0,r=0,o=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],m=o[9],p=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-p,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-p,l)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return F0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(F0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return O0.setFromEuler(this),this.setFromQuaternion(O0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class vx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WC=0;const k0=new te,so=new Ha,ir=new fn,cu=new te,ga=new te,XC=new te,jC=new Ha,B0=new te(1,0,0),z0=new te(0,1,0),V0=new te(0,0,1),H0={type:"added"},YC={type:"removed"},oo={type:"childadded",child:null},ad={type:"childremoved",child:null};class ti extends Lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WC++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new te,t=new dr,r=new Ha,o=new te(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new gt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(B0,e)}rotateY(e){return this.rotateOnAxis(z0,e)}rotateZ(e){return this.rotateOnAxis(V0,e)}translateOnAxis(e,t){return k0.copy(e).applyQuaternion(this.quaternion),this.position.add(k0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(B0,e)}translateY(e){return this.translateOnAxis(z0,e)}translateZ(e){return this.translateOnAxis(V0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?cu.copy(e):cu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(ga,cu,this.up):ir.lookAt(cu,ga,this.up),this.quaternion.setFromRotationMatrix(ir),o&&(ir.extractRotation(o.matrixWorld),so.setFromRotationMatrix(ir),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(H0),oo.child=e,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(YC),ad.child=e,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(H0),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,XC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,jC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>({...c})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const p=d[h];l(e.shapes,p)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),p=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),p.length>0&&(r.shapes=p),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ti.DEFAULT_UP=new te(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new te,rr=new te,ld=new te,sr=new te,ao=new te,lo=new te,G0=new te,ud=new te,cd=new te,fd=new te,dd=new rn,hd=new rn,pd=new rn;class Ri{constructor(e=new te,t=new te,r=new te){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ai.subVectors(e,t),o.cross(Ai);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ai.subVectors(o,t),rr.subVectors(r,t),ld.subVectors(e,t);const u=Ai.dot(Ai),c=Ai.dot(rr),d=Ai.dot(ld),h=rr.dot(rr),m=rr.dot(ld),p=u*h-c*c;if(p===0)return l.set(0,0,0),null;const v=1/p,x=(h*d-c*m)*v,E=(u*m-c*d)*v;return l.set(1-x-E,E,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,r,o,l,u,c,d){return this.getBarycoord(e,t,r,o,sr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,sr.x),d.addScaledVector(u,sr.y),d.addScaledVector(c,sr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return dd.setScalar(0),hd.setScalar(0),pd.setScalar(0),dd.fromBufferAttribute(e,t),hd.fromBufferAttribute(e,r),pd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(dd,l.x),u.addScaledVector(hd,l.y),u.addScaledVector(pd,l.z),u}static isFrontFacing(e,t,r,o){return Ai.subVectors(r,t),rr.subVectors(e,t),Ai.cross(rr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ai.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ri.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;ao.subVectors(o,r),lo.subVectors(l,r),ud.subVectors(e,r);const d=ao.dot(ud),h=lo.dot(ud);if(d<=0&&h<=0)return t.copy(r);cd.subVectors(e,o);const m=ao.dot(cd),p=lo.dot(cd);if(m>=0&&p<=m)return t.copy(o);const v=d*p-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(ao,u);fd.subVectors(e,l);const x=ao.dot(fd),E=lo.dot(fd);if(E>=0&&x<=E)return t.copy(l);const T=x*h-d*E;if(T<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(r).addScaledVector(lo,c);const S=m*E-x*p;if(S<=0&&p-m>=0&&x-E>=0)return G0.subVectors(l,o),c=(p-m)/(p-m+(x-E)),t.copy(o).addScaledVector(G0,c);const y=1/(S+T+v);return u=T*y,c=v*y,t.copy(r).addScaledVector(ao,u).addScaledVector(lo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},fu={h:0,s:0,l:0};function md(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ut{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Rt.workingColorSpace){if(e=DC(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=md(u,l,e+1/3),this.g=md(u,l,e),this.b=md(u,l,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,t=fi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const r=_x[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Rt.workingToColorSpace(bn.copy(this),e),Math.round(Mt(bn.r*255,0,255))*65536+Math.round(Mt(bn.g*255,0,255))*256+Math.round(Mt(bn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(bn.copy(this),t);const r=bn.r,o=bn.g,l=bn.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let d,h;const m=(c+u)/2;if(c===u)d=0,h=0;else{const p=u-c;switch(h=m<=.5?p/(u+c):p/(2-u-c),u){case r:d=(o-l)/p+(o<l?6:0);break;case o:d=(l-r)/p+2;break;case l:d=(r-o)/p+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=fi){Rt.workingToColorSpace(bn.copy(this),e);const t=bn.r,r=bn.g,o=bn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(fu);const r=Zf(Or.h,fu.h,t),o=Zf(Or.s,fu.s,t),l=Zf(Or.l,fu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Ut;Ut.NAMES=_x;let qC=0;class qu extends Lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qC++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=As,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Zd,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==Xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kd&&(r.blendSrc=this.blendSrc),this.blendDst!==Zd&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yx extends qu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=rx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new te,du=new bt;let $C=0;class Wi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$C++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=P0,this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)du.fromBufferAttribute(this,t),du.applyMatrix3(e),this.setXY(t,du.x,du.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ha(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array),l=Wn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==P0&&(e.usage=this.usage),e}}class xx extends Wi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Sx extends Wi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Xi extends Wi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let KC=0;const ui=new fn,gd=new ti,uo=new te,ei=new Ga,va=new Ga,vn=new te;class Yr extends Lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KC++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mx(e)?Sx:xx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,r){return ui.makeTranslation(e,t,r),this.applyMatrix4(ui),this}scale(e,t,r){return ui.makeScale(e,t,r),this.applyMatrix4(ui),this}lookAt(e){return gd.lookAt(e),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xi(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];va.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(ei.min,va.min),ei.expandByPoint(vn),vn.addVectors(ei.max,va.max),ei.expandByPoint(vn)):(ei.expandByPoint(va.min),ei.expandByPoint(va.max))}ei.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)vn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(vn));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)vn.fromBufferAttribute(c,h),d&&(uo.fromBufferAttribute(e,h),vn.add(uo)),o=Math.max(o,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let k=0;k<r.count;k++)c[k]=new te,d[k]=new te;const h=new te,m=new te,p=new te,v=new bt,x=new bt,E=new bt,T=new te,S=new te;function y(k,P,C){h.fromBufferAttribute(r,k),m.fromBufferAttribute(r,P),p.fromBufferAttribute(r,C),v.fromBufferAttribute(l,k),x.fromBufferAttribute(l,P),E.fromBufferAttribute(l,C),m.sub(h),p.sub(h),x.sub(v),E.sub(v);const H=1/(x.x*E.y-E.x*x.y);isFinite(H)&&(T.copy(m).multiplyScalar(E.y).addScaledVector(p,-x.y).multiplyScalar(H),S.copy(p).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(H),c[k].add(T),c[P].add(T),c[C].add(T),d[k].add(S),d[P].add(S),d[C].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let k=0,P=D.length;k<P;++k){const C=D[k],H=C.start,$=C.count;for(let ne=H,ue=H+$;ne<ue;ne+=3)y(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const R=new te,A=new te,N=new te,L=new te;function F(k){N.fromBufferAttribute(o,k),L.copy(N);const P=c[k];R.copy(P),R.sub(N.multiplyScalar(N.dot(P))).normalize(),A.crossVectors(L,P);const H=A.dot(d[k])<0?-1:1;u.setXYZW(k,R.x,R.y,R.z,H)}for(let k=0,P=D.length;k<P;++k){const C=D[k],H=C.start,$=C.count;for(let ne=H,ue=H+$;ne<ue;ne+=3)F(e.getX(ne+0)),F(e.getX(ne+1)),F(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new te,l=new te,u=new te,c=new te,d=new te,h=new te,m=new te,p=new te;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),m.subVectors(u,l),p.subVectors(o,l),m.cross(p),c.fromBufferAttribute(r,E),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),c.add(m),d.add(m),h.add(m),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),p.subVectors(o,l),m.cross(p),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,p=c.normalized,v=new h.constructor(d.length*m);let x=0,E=0;for(let T=0,S=d.length;T<S;T++){c.isInterleavedBufferAttribute?x=d[T]*c.data.stride+c.offset:x=d[T]*m;for(let y=0;y<m;y++)v[E++]=h[x++]}return new Wi(v,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yr,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let m=0,p=h.length;m<p;m++){const v=h[m],x=e(v,r);d.push(x)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let p=0,v=h.length;p<v;p++){const x=h[p];m.push(x.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],p=l[h];for(let v=0,x=p.length;v<x;v++)m.push(p[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const W0=new fn,fs=new VC,hu=new bp,X0=new te,pu=new te,mu=new te,gu=new te,vd=new te,vu=new te,j0=new te,_u=new te;class Vi extends ti{constructor(e=new Yr,t=new yx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){vu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=c[d],p=l[d];m!==0&&(vd.fromBufferAttribute(p,e),u?vu.addScaledVector(vd,m):vu.addScaledVector(vd.sub(t),m))}t.add(vu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hu.copy(r.boundingSphere),hu.applyMatrix4(l),fs.copy(e.ray).recast(e.near),!(hu.containsPoint(fs.origin)===!1&&(fs.intersectSphere(hu,X0)===null||fs.origin.distanceToSquared(X0)>(e.far-e.near)**2))&&(W0.copy(l).invert(),fs.copy(e.ray).applyMatrix4(W0),!(r.boundingBox!==null&&fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,p=l.attributes.normal,v=l.groups,x=l.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],y=u[S.materialIndex],D=Math.max(S.start,x.start),R=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let A=D,N=R;A<N;A+=3){const L=c.getX(A),F=c.getX(A+1),k=c.getX(A+2);o=yu(this,y,e,r,h,m,p,L,F,k),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(c.count,x.start+x.count);for(let S=E,y=T;S<y;S+=3){const D=c.getX(S),R=c.getX(S+1),A=c.getX(S+2);o=yu(this,u,e,r,h,m,p,D,R,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],y=u[S.materialIndex],D=Math.max(S.start,x.start),R=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let A=D,N=R;A<N;A+=3){const L=A,F=A+1,k=A+2;o=yu(this,y,e,r,h,m,p,L,F,k),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let S=E,y=T;S<y;S+=3){const D=S,R=S+1,A=S+2;o=yu(this,u,e,r,h,m,p,D,R,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function ZC(n,e,t,r,o,l,u,c){let d;if(e.side===Yn?d=r.intersectTriangle(u,l,o,!0,c):d=r.intersectTriangle(o,l,u,e.side===Xr,c),d===null)return null;_u.copy(c),_u.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(_u);return h<t.near||h>t.far?null:{distance:h,point:_u.clone(),object:n}}function yu(n,e,t,r,o,l,u,c,d,h){n.getVertexPosition(c,pu),n.getVertexPosition(d,mu),n.getVertexPosition(h,gu);const m=ZC(n,e,t,r,pu,mu,gu,j0);if(m){const p=new te;Ri.getBarycoord(j0,pu,mu,gu,p),o&&(m.uv=Ri.getInterpolatedAttribute(o,c,d,h,p,new bt)),l&&(m.uv1=Ri.getInterpolatedAttribute(l,c,d,h,p,new bt)),u&&(m.normal=Ri.getInterpolatedAttribute(u,c,d,h,p,new te),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:d,c:h,normal:new te,materialIndex:0};Ri.getNormal(pu,mu,gu,v.normal),m.face=v,m.barycoord=p}return m}class Wa extends Yr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],p=[];let v=0,x=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Xi(h,3)),this.setAttribute("normal",new Xi(m,3)),this.setAttribute("uv",new Xi(p,2));function E(T,S,y,D,R,A,N,L,F,k,P){const C=A/F,H=N/k,$=A/2,ne=N/2,ue=L/2,he=F+1,K=k+1;let se=0,z=0;const ae=new te;for(let ee=0;ee<K;ee++){const O=ee*H-ne;for(let re=0;re<he;re++){const ye=re*C-$;ae[T]=ye*D,ae[S]=O*R,ae[y]=ue,h.push(ae.x,ae.y,ae.z),ae[T]=0,ae[S]=0,ae[y]=L>0?1:-1,m.push(ae.x,ae.y,ae.z),p.push(re/F),p.push(1-ee/k),se+=1}}for(let ee=0;ee<k;ee++)for(let O=0;O<F;O++){const re=v+O+he*ee,ye=v+O+he*(ee+1),be=v+(O+1)+he*(ee+1),Re=v+(O+1)+he*ee;d.push(re,ye,Re),d.push(ye,be,Re),z+=6}c.addGroup(x,z,P),x+=z,v+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ro(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const r=Ro(n[t]);for(const o in r)e[o]=r[o]}return e}function QC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ex(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const JC={clone:Ro,merge:Fn};var eR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends qu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eR,this.fragmentShader=tR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=QC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Mx extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kr=new te,Y0=new bt,q0=new bt;class di extends Mx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oh*2*Math.atan(Math.tan(Kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,t){return this.getViewBounds(e,Y0,q0),t.subVectors(q0,Y0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const co=-90,fo=1;class nR extends ti{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(co,fo,e,t);o.layers=this.layers,this.add(o);const l=new di(co,fo,e,t);l.layers=this.layers,this.add(l);const u=new di(co,fo,e,t);u.layers=this.layers,this.add(u);const c=new di(co,fo,e,t);c.layers=this.layers,this.add(c);const d=new di(co,fo,e,t);d.layers=this.layers,this.add(d);const h=new di(co,fo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Hu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,m]=this.children,p=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(p,v,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Tx extends qn{constructor(e=[],t=wo,r,o,l,u,c,d,h,m){super(e,t,r,o,l,u,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iR extends Rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Tx(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Wa(5,5,5),l=new hr({name:"CubemapFromEquirect",uniforms:Ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:Vr});l.uniforms.tEquirect.value=t;const u=new Vi(o,l),c=t.minFilter;return t.minFilter===Ms&&(t.minFilter=Bi),new nR(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class xu extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rR={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,r),y=this._getHandJoint(h,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],v=m.position.distanceTo(p.position),x=.02,E=.005;h.inputState.pinching&&v>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(rR)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new xu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class sR extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yd=new te,oR=new te,aR=new gt;class gs{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=yd.subVectors(r,t).cross(oR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(yd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||aR.getNormalMatrix(e),o=this.coplanarPoint(yd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new bp,lR=new bt(.5,.5),Su=new te;class wx{constructor(e=new gs,t=new gs,r=new gs,o=new gs,l=new gs,u=new gs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=zi,r=!1){const o=this.planes,l=e.elements,u=l[0],c=l[1],d=l[2],h=l[3],m=l[4],p=l[5],v=l[6],x=l[7],E=l[8],T=l[9],S=l[10],y=l[11],D=l[12],R=l[13],A=l[14],N=l[15];if(o[0].setComponents(h-u,x-m,y-E,N-D).normalize(),o[1].setComponents(h+u,x+m,y+E,N+D).normalize(),o[2].setComponents(h+c,x+p,y+T,N+R).normalize(),o[3].setComponents(h-c,x-p,y-T,N-R).normalize(),r)o[4].setComponents(d,v,S,A).normalize(),o[5].setComponents(h-d,x-v,y-S,N-A).normalize();else if(o[4].setComponents(h-d,x-v,y-S,N-A).normalize(),t===zi)o[5].setComponents(h+d,x+v,y+S,N+A).normalize();else if(t===Hu)o[5].setComponents(d,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=lR.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Su.x=o.normal.x>0?e.max.x:e.min.x,Su.y=o.normal.y>0?e.max.y:e.min.y,Su.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Su)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ax extends qn{constructor(e,t,r=Cs,o,l,u,c=Pi,d=Pi,h,m=Ia,p=1){if(m!==Ia&&m!==Na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:p};super(v,o,l,u,c,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cx extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pp extends Yr{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];c(o),h(r),m(),this.setAttribute("position",new Xi(l,3)),this.setAttribute("normal",new Xi(l.slice(),3)),this.setAttribute("uv",new Xi(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function c(D){const R=new te,A=new te,N=new te;for(let L=0;L<t.length;L+=3)x(t[L+0],R),x(t[L+1],A),x(t[L+2],N),d(R,A,N,D)}function d(D,R,A,N){const L=N+1,F=[];for(let k=0;k<=L;k++){F[k]=[];const P=D.clone().lerp(A,k/L),C=R.clone().lerp(A,k/L),H=L-k;for(let $=0;$<=H;$++)$===0&&k===L?F[k][$]=P:F[k][$]=P.clone().lerp(C,$/H)}for(let k=0;k<L;k++)for(let P=0;P<2*(L-k)-1;P++){const C=Math.floor(P/2);P%2===0?(v(F[k][C+1]),v(F[k+1][C]),v(F[k][C])):(v(F[k][C+1]),v(F[k+1][C+1]),v(F[k+1][C]))}}function h(D){const R=new te;for(let A=0;A<l.length;A+=3)R.x=l[A+0],R.y=l[A+1],R.z=l[A+2],R.normalize().multiplyScalar(D),l[A+0]=R.x,l[A+1]=R.y,l[A+2]=R.z}function m(){const D=new te;for(let R=0;R<l.length;R+=3){D.x=l[R+0],D.y=l[R+1],D.z=l[R+2];const A=S(D)/2/Math.PI+.5,N=y(D)/Math.PI+.5;u.push(A,1-N)}E(),p()}function p(){for(let D=0;D<u.length;D+=6){const R=u[D+0],A=u[D+2],N=u[D+4],L=Math.max(R,A,N),F=Math.min(R,A,N);L>.9&&F<.1&&(R<.2&&(u[D+0]+=1),A<.2&&(u[D+2]+=1),N<.2&&(u[D+4]+=1))}}function v(D){l.push(D.x,D.y,D.z)}function x(D,R){const A=D*3;R.x=e[A+0],R.y=e[A+1],R.z=e[A+2]}function E(){const D=new te,R=new te,A=new te,N=new te,L=new bt,F=new bt,k=new bt;for(let P=0,C=0;P<l.length;P+=9,C+=6){D.set(l[P+0],l[P+1],l[P+2]),R.set(l[P+3],l[P+4],l[P+5]),A.set(l[P+6],l[P+7],l[P+8]),L.set(u[C+0],u[C+1]),F.set(u[C+2],u[C+3]),k.set(u[C+4],u[C+5]),N.copy(D).add(R).add(A).divideScalar(3);const H=S(N);T(L,C+0,D,H),T(F,C+2,R,H),T(k,C+4,A,H)}}function T(D,R,A,N){N<0&&D.x===1&&(u[R]=D.x-1),A.x===0&&A.z===0&&(u[R]=N/2/Math.PI+.5)}function S(D){return Math.atan2(D.z,-D.x)}function y(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pp(e.vertices,e.indices,e.radius,e.details)}}class Dp extends Pp{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dp(e.radius,e.detail)}}class $u extends Yr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,m=d+1,p=e/c,v=t/d,x=[],E=[],T=[],S=[];for(let y=0;y<m;y++){const D=y*v-u;for(let R=0;R<h;R++){const A=R*p-l;E.push(A,-D,0),T.push(0,0,1),S.push(R/c),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let D=0;D<c;D++){const R=D+h*y,A=D+h*(y+1),N=D+1+h*(y+1),L=D+1+h*y;x.push(R,A,L),x.push(A,N,L)}this.setIndex(x),this.setAttribute("position",new Xi(E,3)),this.setAttribute("normal",new Xi(T,3)),this.setAttribute("uv",new Xi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.width,e.height,e.widthSegments,e.heightSegments)}}class uR extends qu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cR extends qu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fR extends Mx{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dR extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $0(n,e,t,r){const o=pR(r);switch(t){case cx:return n*e;case dx:return n*e/o.components*o.byteLength;case wp:return n*e/o.components*o.byteLength;case hx:return n*e*2/o.components*o.byteLength;case Ap:return n*e*2/o.components*o.byteLength;case fx:return n*e*3/o.components*o.byteLength;case bi:return n*e*4/o.components*o.byteLength;case Cp:return n*e*4/o.components*o.byteLength;case Du:case Lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Iu:case Nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ch:case dh:return Math.max(n,16)*Math.max(e,8)/4;case uh:case fh:return Math.max(n,8)*Math.max(e,8)/2;case hh:case ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Th:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ph:case Dh:case Lh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ih:case Nh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Uh:case Fh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pR(n){switch(n){case fr:case ox:return{byteLength:1,components:1};case Da:case ax:case za:return{byteLength:2,components:1};case Mp:case Tp:return{byteLength:2,components:4};case Cs:case Ep:case ar:return{byteLength:4,components:1};case lx:case ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rx(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function mR(n){const e=new WeakMap;function t(c,d){const h=c.array,m=c.usage,p=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,m),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,d,h){const m=d.array,p=d.updateRanges;if(n.bindBuffer(h,c),p.length===0)n.bufferSubData(h,0,m);else{p.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<p.length;x++){const E=p[v],T=p[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,p[v]=T)}p.length=v+1;for(let x=0,E=p.length;x<E;x++){const T=p[x];n.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:l,update:u}}var gR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vR=`#ifdef USE_ALPHAHASH
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
#endif`,_R=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ER=`#ifdef USE_AOMAP
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
#endif`,MR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TR=`#ifdef USE_BATCHING
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
#endif`,wR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bR=`#ifdef USE_IRIDESCENCE
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
#endif`,PR=`#ifdef USE_BUMPMAP
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
#endif`,DR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,BR=`#define PI 3.141592653589793
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
} // validated`,zR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VR=`vec3 transformedNormal = objectNormal;
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
#endif`,HR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jR="gl_FragColor = linearToOutputTexel( gl_FragColor );",YR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qR=`#ifdef USE_ENVMAP
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
#endif`,$R=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KR=`#ifdef USE_ENVMAP
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
#endif`,ZR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QR=`#ifdef USE_ENVMAP
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
#endif`,JR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ib=`#ifdef USE_GRADIENTMAP
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
}`,rb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ab=`uniform bool receiveShadow;
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
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hb=`PhysicalMaterial material;
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
#endif`,pb=`struct PhysicalMaterial {
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
}`,mb=`
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
#endif`,gb=`#if defined( RE_IndirectDiffuse )
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wb=`#if defined( USE_POINTS_UV )
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
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`#ifdef USE_MORPHTARGETS
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
#endif`,Lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kb=`#ifdef USE_NORMALMAP
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
#endif`,Bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eP=`float getShadowMask() {
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
}`,tP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nP=`#ifdef USE_SKINNING
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
#endif`,iP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rP=`#ifdef USE_SKINNING
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
#endif`,sP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uP=`#ifdef USE_TRANSMISSION
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
#endif`,cP=`#ifdef USE_TRANSMISSION
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
#endif`,fP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gP=`uniform sampler2D t2D;
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
}`,vP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_P=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SP=`#include <common>
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
}`,EP=`#if DEPTH_PACKING == 3200
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
}`,MP=`#define DISTANCE
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
}`,TP=`#define DISTANCE
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
}`,wP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CP=`uniform float scale;
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
}`,RP=`uniform vec3 diffuse;
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
}`,bP=`#include <common>
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
}`,PP=`uniform vec3 diffuse;
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
}`,DP=`#define LAMBERT
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
}`,LP=`#define LAMBERT
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
}`,IP=`#define MATCAP
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
}`,NP=`#define MATCAP
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
}`,UP=`#define NORMAL
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
}`,FP=`#define NORMAL
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
}`,OP=`#define PHONG
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
}`,kP=`#define PHONG
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
}`,BP=`#define STANDARD
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
}`,zP=`#define STANDARD
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
}`,VP=`#define TOON
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
}`,HP=`#define TOON
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
}`,GP=`uniform float size;
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
}`,WP=`uniform vec3 diffuse;
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
}`,XP=`#include <common>
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
}`,jP=`uniform vec3 color;
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
}`,YP=`uniform float rotation;
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
}`,qP=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:gR,alphahash_pars_fragment:vR,alphamap_fragment:_R,alphamap_pars_fragment:yR,alphatest_fragment:xR,alphatest_pars_fragment:SR,aomap_fragment:ER,aomap_pars_fragment:MR,batching_pars_vertex:TR,batching_vertex:wR,begin_vertex:AR,beginnormal_vertex:CR,bsdfs:RR,iridescence_fragment:bR,bumpmap_pars_fragment:PR,clipping_planes_fragment:DR,clipping_planes_pars_fragment:LR,clipping_planes_pars_vertex:IR,clipping_planes_vertex:NR,color_fragment:UR,color_pars_fragment:FR,color_pars_vertex:OR,color_vertex:kR,common:BR,cube_uv_reflection_fragment:zR,defaultnormal_vertex:VR,displacementmap_pars_vertex:HR,displacementmap_vertex:GR,emissivemap_fragment:WR,emissivemap_pars_fragment:XR,colorspace_fragment:jR,colorspace_pars_fragment:YR,envmap_fragment:qR,envmap_common_pars_fragment:$R,envmap_pars_fragment:KR,envmap_pars_vertex:ZR,envmap_physical_pars_fragment:lb,envmap_vertex:QR,fog_vertex:JR,fog_pars_vertex:eb,fog_fragment:tb,fog_pars_fragment:nb,gradientmap_pars_fragment:ib,lightmap_pars_fragment:rb,lights_lambert_fragment:sb,lights_lambert_pars_fragment:ob,lights_pars_begin:ab,lights_toon_fragment:ub,lights_toon_pars_fragment:cb,lights_phong_fragment:fb,lights_phong_pars_fragment:db,lights_physical_fragment:hb,lights_physical_pars_fragment:pb,lights_fragment_begin:mb,lights_fragment_maps:gb,lights_fragment_end:vb,logdepthbuf_fragment:_b,logdepthbuf_pars_fragment:yb,logdepthbuf_pars_vertex:xb,logdepthbuf_vertex:Sb,map_fragment:Eb,map_pars_fragment:Mb,map_particle_fragment:Tb,map_particle_pars_fragment:wb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:Cb,morphinstance_vertex:Rb,morphcolor_vertex:bb,morphnormal_vertex:Pb,morphtarget_pars_vertex:Db,morphtarget_vertex:Lb,normal_fragment_begin:Ib,normal_fragment_maps:Nb,normal_pars_fragment:Ub,normal_pars_vertex:Fb,normal_vertex:Ob,normalmap_pars_fragment:kb,clearcoat_normal_fragment_begin:Bb,clearcoat_normal_fragment_maps:zb,clearcoat_pars_fragment:Vb,iridescence_pars_fragment:Hb,opaque_fragment:Gb,packing:Wb,premultiplied_alpha_fragment:Xb,project_vertex:jb,dithering_fragment:Yb,dithering_pars_fragment:qb,roughnessmap_fragment:$b,roughnessmap_pars_fragment:Kb,shadowmap_pars_fragment:Zb,shadowmap_pars_vertex:Qb,shadowmap_vertex:Jb,shadowmask_pars_fragment:eP,skinbase_vertex:tP,skinning_pars_vertex:nP,skinning_vertex:iP,skinnormal_vertex:rP,specularmap_fragment:sP,specularmap_pars_fragment:oP,tonemapping_fragment:aP,tonemapping_pars_fragment:lP,transmission_fragment:uP,transmission_pars_fragment:cP,uv_pars_fragment:fP,uv_pars_vertex:dP,uv_vertex:hP,worldpos_vertex:pP,background_vert:mP,background_frag:gP,backgroundCube_vert:vP,backgroundCube_frag:_P,cube_vert:yP,cube_frag:xP,depth_vert:SP,depth_frag:EP,distanceRGBA_vert:MP,distanceRGBA_frag:TP,equirect_vert:wP,equirect_frag:AP,linedashed_vert:CP,linedashed_frag:RP,meshbasic_vert:bP,meshbasic_frag:PP,meshlambert_vert:DP,meshlambert_frag:LP,meshmatcap_vert:IP,meshmatcap_frag:NP,meshnormal_vert:UP,meshnormal_frag:FP,meshphong_vert:OP,meshphong_frag:kP,meshphysical_vert:BP,meshphysical_frag:zP,meshtoon_vert:VP,meshtoon_frag:HP,points_vert:GP,points_frag:WP,shadow_vert:XP,shadow_frag:jP,sprite_vert:YP,sprite_frag:qP},Fe={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Oi={basic:{uniforms:Fn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Fn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ut(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Fn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Fn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Fn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ut(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Fn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Fn([Fe.points,Fe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Fn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Fn([Fe.common,Fe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Fn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Fn([Fe.sprite,Fe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Fn([Fe.common,Fe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Fn([Fe.lights,Fe.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Oi.physical={uniforms:Fn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Eu={r:0,b:0,g:0},hs=new dr,$P=new fn;function KP(n,e,t,r,o,l,u){const c=new Ut(0);let d=l===!0?0:1,h,m,p=null,v=0,x=null;function E(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?t:e).get(A)),A}function T(R){let A=!1;const N=E(R);N===null?y(c,d):N&&N.isColor&&(y(N,1),A=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(R,A){const N=E(A);N&&(N.isCubeTexture||N.mapping===Yu)?(m===void 0&&(m=new Vi(new Wa(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:Ro(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),hs.copy(A.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4($P.makeRotationFromEuler(hs)),m.material.toneMapped=Rt.getTransfer(N.colorSpace)!==Ot,(p!==N||v!==N.version||x!==n.toneMapping)&&(m.material.needsUpdate=!0,p=N,v=N.version,x=n.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Vi(new $u(2,2),new hr({name:"BackgroundMaterial",uniforms:Ro(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(N.colorSpace)!==Ot,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(p!==N||v!==N.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,p=N,v=N.version,x=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function y(R,A){R.getRGB(Eu,Ex(n)),r.buffers.color.setClear(Eu.r,Eu.g,Eu.b,A,u)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,A=1){c.set(R),d=A,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,y(c,d)},render:T,addToRenderList:S,dispose:D}}function ZP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function c(C,H,$,ne,ue){let he=!1;const K=p(ne,$,H);l!==K&&(l=K,h(l.object)),he=x(C,ne,$,ue),he&&E(C,ne,$,ue),ue!==null&&e.update(ue,n.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,A(C,H,$,ne),ue!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return n.createVertexArray()}function h(C){return n.bindVertexArray(C)}function m(C){return n.deleteVertexArray(C)}function p(C,H,$){const ne=$.wireframe===!0;let ue=r[C.id];ue===void 0&&(ue={},r[C.id]=ue);let he=ue[H.id];he===void 0&&(he={},ue[H.id]=he);let K=he[ne];return K===void 0&&(K=v(d()),he[ne]=K),K}function v(C){const H=[],$=[],ne=[];for(let ue=0;ue<t;ue++)H[ue]=0,$[ue]=0,ne[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:ne,object:C,attributes:{},index:null}}function x(C,H,$,ne){const ue=l.attributes,he=H.attributes;let K=0;const se=$.getAttributes();for(const z in se)if(se[z].location>=0){const ee=ue[z];let O=he[z];if(O===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),ee===void 0||ee.attribute!==O||O&&ee.data!==O.data)return!0;K++}return l.attributesNum!==K||l.index!==ne}function E(C,H,$,ne){const ue={},he=H.attributes;let K=0;const se=$.getAttributes();for(const z in se)if(se[z].location>=0){let ee=he[z];ee===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor));const O={};O.attribute=ee,ee&&ee.data&&(O.data=ee.data),ue[z]=O,K++}l.attributes=ue,l.attributesNum=K,l.index=ne}function T(){const C=l.newAttributes;for(let H=0,$=C.length;H<$;H++)C[H]=0}function S(C){y(C,0)}function y(C,H){const $=l.newAttributes,ne=l.enabledAttributes,ue=l.attributeDivisors;$[C]=1,ne[C]===0&&(n.enableVertexAttribArray(C),ne[C]=1),ue[C]!==H&&(n.vertexAttribDivisor(C,H),ue[C]=H)}function D(){const C=l.newAttributes,H=l.enabledAttributes;for(let $=0,ne=H.length;$<ne;$++)H[$]!==C[$]&&(n.disableVertexAttribArray($),H[$]=0)}function R(C,H,$,ne,ue,he,K){K===!0?n.vertexAttribIPointer(C,H,$,ue,he):n.vertexAttribPointer(C,H,$,ne,ue,he)}function A(C,H,$,ne){T();const ue=ne.attributes,he=$.getAttributes(),K=H.defaultAttributeValues;for(const se in he){const z=he[se];if(z.location>=0){let ae=ue[se];if(ae===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),ae!==void 0){const ee=ae.normalized,O=ae.itemSize,re=e.get(ae);if(re===void 0)continue;const ye=re.buffer,be=re.type,Re=re.bytesPerElement,Z=be===n.INT||be===n.UNSIGNED_INT||ae.gpuType===Ep;if(ae.isInterleavedBufferAttribute){const ce=ae.data,pe=ce.stride,Ie=ae.offset;if(ce.isInstancedInterleavedBuffer){for(let ke=0;ke<z.locationSize;ke++)y(z.location+ke,ce.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ke=0;ke<z.locationSize;ke++)S(z.location+ke);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let ke=0;ke<z.locationSize;ke++)R(z.location+ke,O/z.locationSize,be,ee,pe*Re,(Ie+O/z.locationSize*ke)*Re,Z)}else{if(ae.isInstancedBufferAttribute){for(let ce=0;ce<z.locationSize;ce++)y(z.location+ce,ae.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ce=0;ce<z.locationSize;ce++)S(z.location+ce);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let ce=0;ce<z.locationSize;ce++)R(z.location+ce,O/z.locationSize,be,ee,O*Re,O/z.locationSize*ce*Re,Z)}}else if(K!==void 0){const ee=K[se];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(z.location,ee);break;case 3:n.vertexAttrib3fv(z.location,ee);break;case 4:n.vertexAttrib4fv(z.location,ee);break;default:n.vertexAttrib1fv(z.location,ee)}}}}D()}function N(){k();for(const C in r){const H=r[C];for(const $ in H){const ne=H[$];for(const ue in ne)m(ne[ue].object),delete ne[ue];delete H[$]}delete r[C]}}function L(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const $ in H){const ne=H[$];for(const ue in ne)m(ne[ue].object),delete ne[ue];delete H[$]}delete r[C.id]}function F(C){for(const H in r){const $=r[H];if($[C.id]===void 0)continue;const ne=$[C.id];for(const ue in ne)m(ne[ue].object),delete ne[ue];delete $[C.id]}}function k(){P(),u=!0,l!==o&&(l=o,h(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:k,resetDefaultState:P,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function QP(n,e,t){let r;function o(h){r=h}function l(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,p){p!==0&&(n.drawArraysInstanced(r,h,m,p),t.update(m,r,p))}function c(h,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,p);let x=0;for(let E=0;E<p;E++)x+=m[E];t.update(x,r,1)}function d(h,m,p,v){if(p===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<h.length;E++)u(h[E],m[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,m,0,v,0,p);let E=0;for(let T=0;T<p;T++)E+=m[T]*v[T];t.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function JP(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==bi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(F){const k=F===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==fr&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ar&&!k)}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:A,vertexTextures:N,maxSamples:L}}function e2(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new gs,c=new gt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(p,v){const x=p.length!==0||v||r!==0||o;return o=v,r=p.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(p,v){t=m(p,v,0)},this.setState=function(p,v,x){const E=p.clippingPlanes,T=p.clipIntersection,S=p.clipShadows,y=n.get(p);if(!o||E===null||E.length===0||l&&!S)l?m(null):h();else{const D=l?0:r,R=D*4;let A=y.clippingState||null;d.value=A,A=m(E,v,R,x);for(let N=0;N!==R;++N)A[N]=t[N];y.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(p,v,x,E){const T=p!==null?p.length:0;let S=null;if(T!==0){if(S=d.value,E!==!0||S===null){const y=x+T*4,D=v.matrixWorldInverse;c.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let R=0,A=x;R!==T;++R,A+=4)u.copy(p[R]).applyMatrix4(D,c),u.normal.toArray(S,A),S[A+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function t2(n){let e=new WeakMap;function t(u,c){return c===sh?u.mapping=wo:c===oh&&(u.mapping=Ao),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===sh||c===oh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new iR(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const yo=4,K0=[.125,.215,.35,.446,.526,.582],ys=20,xd=new fR,Z0=new Ut;let Sd=null,Ed=0,Md=0,Td=!1;const vs=(1+Math.sqrt(5))/2,ho=1/vs,Q0=[new te(-vs,ho,0),new te(vs,ho,0),new te(-ho,0,vs),new te(ho,0,vs),new te(0,vs,-ho),new te(0,vs,ho),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)],n2=new te;class J0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:c=n2}=l;Sd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sd,Ed,Md),this._renderer.xr.enabled=Td,e.scissorTest=!1,Mu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wo||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:za,format:bi,colorSpace:Co,depthBuffer:!1},o=e_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i2(l)),this._blurMaterial=r2(l,e,t)}return o}_compileMaterial(e){const t=new Vi(this._lodPlanes[0],e);this._renderer.compile(t,xd)}_sceneToCubeUV(e,t,r,o,l){const d=new di(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,x=p.toneMapping;p.getClearColor(Z0),p.toneMapping=Hr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(o),p.clearDepth(),p.setRenderTarget(null));const T=new yx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),S=new Vi(new Wa,T);let y=!1;const D=e.background;D?D.isColor&&(T.color.copy(D),e.background=null,y=!0):(T.color.copy(Z0),y=!0);for(let R=0;R<6;R++){const A=R%3;A===0?(d.up.set(0,h[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[R],l.y,l.z)):A===1?(d.up.set(0,0,h[R]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[R],l.z)):(d.up.set(0,h[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[R]));const N=this._cubeSize;Mu(o,A*N,R>2?N:0,N,N),p.setRenderTarget(o),y&&p.render(S,d),p.render(e,d)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=x,p.autoClear=v,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===wo||e.mapping===Ao;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=n_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Vi(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;Mu(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,xd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=Q0[(o-l-1)%Q0.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new Vi(this._lodPlanes[o],h),v=h.uniforms,x=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ys-1),T=l/E,S=isFinite(l)?1+Math.floor(m*T):ys;S>ys&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ys}`);const y=[];let D=0;for(let F=0;F<ys;++F){const k=F/T,P=Math.exp(-k*k/2);y.push(P),F===0?D+=P:F<S&&(D+=2*P)}for(let F=0;F<y.length;F++)y[F]=y[F]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:R}=this;v.dTheta.value=E,v.mipInt.value=R-r;const A=this._sizeLods[o],N=3*A*(o>R-yo?o-R+yo:0),L=4*(this._cubeSize-A);Mu(t,N,L,3*A,2*A),d.setRenderTarget(t),d.render(p,xd)}}function i2(n){const e=[],t=[],r=[];let o=n;const l=n-yo+1+K0.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-yo?d=K0[u-n+yo-1]:u===0&&(d=0),r.push(d);const h=1/(c-2),m=-h,p=1+h,v=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,E=6,T=3,S=2,y=1,D=new Float32Array(T*E*x),R=new Float32Array(S*E*x),A=new Float32Array(y*E*x);for(let L=0;L<x;L++){const F=L%3*2/3-1,k=L>2?0:-1,P=[F,k,0,F+2/3,k,0,F+2/3,k+1,0,F,k,0,F+2/3,k+1,0,F,k+1,0];D.set(P,T*E*L),R.set(v,S*E*L);const C=[L,L,L,L,L,L];A.set(C,y*E*L)}const N=new Yr;N.setAttribute("position",new Wi(D,T)),N.setAttribute("uv",new Wi(R,S)),N.setAttribute("faceIndex",new Wi(A,y)),e.push(N),o>yo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function e_(n,e,t){const r=new Rs(n,e,t);return r.texture.mapping=Yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Mu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function r2(n,e,t){const r=new Float32Array(ys),o=new te(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Lp(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function t_(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lp(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function n_(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Lp(){return`

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
	`}function s2(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,h=d===sh||d===oh,m=d===wo||d===Ao;if(h||m){let p=e.get(c);const v=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new J0(n)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const x=c.image;return h&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new J0(n)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",l),p.texture):null}}}return c}function o(c){let d=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function o2(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ua("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function a2(n,e,t,r){const o={},l=new WeakMap;function u(p){const v=p.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(p,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(p){const v=p.attributes;for(const x in v)e.update(v[x],n.ARRAY_BUFFER)}function h(p){const v=[],x=p.index,E=p.attributes.position;let T=0;if(x!==null){const D=x.array;T=x.version;for(let R=0,A=D.length;R<A;R+=3){const N=D[R+0],L=D[R+1],F=D[R+2];v.push(N,L,L,F,F,N)}}else if(E!==void 0){const D=E.array;T=E.version;for(let R=0,A=D.length/3-1;R<A;R+=3){const N=R+0,L=R+1,F=R+2;v.push(N,L,L,F,F,N)}}else return;const S=new(mx(v)?Sx:xx)(v,1);S.version=T;const y=l.get(p);y&&e.remove(y),l.set(p,S)}function m(p){const v=l.get(p);if(v){const x=p.index;x!==null&&v.version<x.version&&h(p)}else h(p);return l.get(p)}return{get:c,update:d,getWireframeAttribute:m}}function l2(n,e,t){let r;function o(v){r=v}let l,u;function c(v){l=v.type,u=v.bytesPerElement}function d(v,x){n.drawElements(r,x,l,v*u),t.update(x,r,1)}function h(v,x,E){E!==0&&(n.drawElementsInstanced(r,x,l,v*u,E),t.update(x,r,E))}function m(v,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,v,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];t.update(S,r,1)}function p(v,x,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/u,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,v,0,T,0,E);let y=0;for(let D=0;D<E;D++)y+=x[D]*T[D];t.update(y,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function u2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function c2(n,e,t){const r=new WeakMap,o=new rn;function l(u,c,d){const h=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=m!==void 0?m.length:0;let v=r.get(c);if(v===void 0||v.count!==p){let P=function(){F.dispose(),r.delete(c),c.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();const x=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let R=0;x===!0&&(R=1),E===!0&&(R=2),T===!0&&(R=3);let A=c.attributes.position.count*R,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*N*4*p),F=new gx(L,A,N,p);F.type=ar,F.needsUpdate=!0;const k=R*4;for(let C=0;C<p;C++){const H=S[C],$=y[C],ne=D[C],ue=A*N*4*C;for(let he=0;he<H.count;he++){const K=he*k;x===!0&&(o.fromBufferAttribute(H,he),L[ue+K+0]=o.x,L[ue+K+1]=o.y,L[ue+K+2]=o.z,L[ue+K+3]=0),E===!0&&(o.fromBufferAttribute($,he),L[ue+K+4]=o.x,L[ue+K+5]=o.y,L[ue+K+6]=o.z,L[ue+K+7]=0),T===!0&&(o.fromBufferAttribute(ne,he),L[ue+K+8]=o.x,L[ue+K+9]=o.y,L[ue+K+10]=o.z,L[ue+K+11]=ne.itemSize===4?o.w:1)}}v={count:p,texture:F,size:new bt(A,N)},r.set(c,v),c.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let x=0;for(let T=0;T<h.length;T++)x+=h[T];const E=c.morphTargetsRelative?1:1-x;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function f2(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,p=e.get(d,m);if(o.get(p)!==h&&(e.update(p),o.set(p,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return p}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const bx=new qn,i_=new Ax(1,1),Px=new gx,Dx=new BC,Lx=new Tx,r_=[],s_=[],o_=new Float32Array(16),a_=new Float32Array(9),l_=new Float32Array(4);function Io(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=r_[o];if(l===void 0&&(l=new Float32Array(o),r_[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Ku(n,e){let t=s_[e];t===void 0&&(t=new Int32Array(e),s_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function d2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function h2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function p2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function m2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function g2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;l_.set(r),n.uniformMatrix2fv(this.addr,!1,l_),hn(t,r)}}function v2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;a_.set(r),n.uniformMatrix3fv(this.addr,!1,a_),hn(t,r)}}function _2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;o_.set(r),n.uniformMatrix4fv(this.addr,!1,o_),hn(t,r)}}function y2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function x2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function S2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function E2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function M2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function T2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function w2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function A2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function C2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(i_.compareFunction=px,l=i_):l=bx,t.setTexture2D(e||l,o)}function R2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Dx,o)}function b2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Lx,o)}function P2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Px,o)}function D2(n){switch(n){case 5126:return d2;case 35664:return h2;case 35665:return p2;case 35666:return m2;case 35674:return g2;case 35675:return v2;case 35676:return _2;case 5124:case 35670:return y2;case 35667:case 35671:return x2;case 35668:case 35672:return S2;case 35669:case 35673:return E2;case 5125:return M2;case 36294:return T2;case 36295:return w2;case 36296:return A2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return R2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return P2}}function L2(n,e){n.uniform1fv(this.addr,e)}function I2(n,e){const t=Io(e,this.size,2);n.uniform2fv(this.addr,t)}function N2(n,e){const t=Io(e,this.size,3);n.uniform3fv(this.addr,t)}function U2(n,e){const t=Io(e,this.size,4);n.uniform4fv(this.addr,t)}function F2(n,e){const t=Io(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function O2(n,e){const t=Io(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function k2(n,e){const t=Io(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function B2(n,e){n.uniform1iv(this.addr,e)}function z2(n,e){n.uniform2iv(this.addr,e)}function V2(n,e){n.uniform3iv(this.addr,e)}function H2(n,e){n.uniform4iv(this.addr,e)}function G2(n,e){n.uniform1uiv(this.addr,e)}function W2(n,e){n.uniform2uiv(this.addr,e)}function X2(n,e){n.uniform3uiv(this.addr,e)}function j2(n,e){n.uniform4uiv(this.addr,e)}function Y2(n,e,t){const r=this.cache,o=e.length,l=Ku(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||bx,l[u])}function q2(n,e,t){const r=this.cache,o=e.length,l=Ku(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Dx,l[u])}function $2(n,e,t){const r=this.cache,o=e.length,l=Ku(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Lx,l[u])}function K2(n,e,t){const r=this.cache,o=e.length,l=Ku(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Px,l[u])}function Z2(n){switch(n){case 5126:return L2;case 35664:return I2;case 35665:return N2;case 35666:return U2;case 35674:return F2;case 35675:return O2;case 35676:return k2;case 5124:case 35670:return B2;case 35667:case 35671:return z2;case 35668:case 35672:return V2;case 35669:case 35673:return H2;case 5125:return G2;case 36294:return W2;case 36295:return X2;case 36296:return j2;case 35678:case 36198:case 36298:case 36306:case 35682:return Y2;case 35679:case 36299:case 36307:return q2;case 35680:case 36300:case 36308:case 36293:return $2;case 36289:case 36303:case 36311:case 36292:return K2}}class Q2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=D2(t.type)}}class J2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z2(t.type)}}class eD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function u_(n,e){n.seq.push(e),n.map[e.id]=e}function tD(n,e,t){const r=n.name,o=r.length;for(wd.lastIndex=0;;){const l=wd.exec(r),u=wd.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){u_(t,h===void 0?new Q2(c,n,e):new J2(c,n,e));break}else{let p=t.map[c];p===void 0&&(p=new eD(c),u_(t,p)),t=p}}}class Uu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);tD(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function c_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const nD=37297;let iD=0;function rD(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const f_=new gt;function sD(n){Rt._getMatrix(f_,Rt.workingColorSpace,n);const e=`mat3( ${f_.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(n)){case Vu:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function d_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+rD(n.getShaderSource(e),c)}else return l}function oD(n,e){const t=sD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function aD(n,e){let t;switch(e){case dC:t="Linear";break;case hC:t="Reinhard";break;case pC:t="Cineon";break;case mC:t="ACESFilmic";break;case vC:t="AgX";break;case _C:t="Neutral";break;case gC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tu=new te;function lD(){Rt.getLuminanceCoefficients(Tu);const n=Tu.x.toFixed(4),e=Tu.y.toFixed(4),t=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function cD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function fD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function ya(n){return n!==""}function h_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dD=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(n){return n.replace(dD,pD)}const hD=new Map;function pD(n,e){let t=vt[e];if(t===void 0){const r=hD.get(e);if(r!==void 0)t=vt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kh(t)}const mD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(n){return n.replace(mD,gD)}function gD(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function g_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function vD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ix?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===XA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function _D(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wo:case Ao:e="ENVMAP_TYPE_CUBE";break;case Yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function xD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rx:e="ENVMAP_BLENDING_MULTIPLY";break;case cC:e="ENVMAP_BLENDING_MIX";break;case fC:e="ENVMAP_BLENDING_ADD";break}return e}function SD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function ED(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=vD(t),h=_D(t),m=yD(t),p=xD(t),v=SD(t),x=uD(t),E=cD(l),T=o.createProgram();let S,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ya).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ya).join(`
`),y.length>0&&(y+=`
`)):(S=[g_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),y=[g_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hr?"#define TONE_MAPPING":"",t.toneMapping!==Hr?vt.tonemapping_pars_fragment:"",t.toneMapping!==Hr?aD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,oD("linearToOutputTexel",t.outputColorSpace),lD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),u=kh(u),u=h_(u,t),u=p_(u,t),c=kh(c),c=h_(c,t),c=p_(c,t),u=m_(u),c=m_(c),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===D0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===D0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=D+S+u,A=D+y+c,N=c_(o,o.VERTEX_SHADER,R),L=c_(o,o.FRAGMENT_SHADER,A);o.attachShader(T,N),o.attachShader(T,L),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(H){if(n.debug.checkShaderErrors){const $=o.getProgramInfoLog(T)||"",ne=o.getShaderInfoLog(N)||"",ue=o.getShaderInfoLog(L)||"",he=$.trim(),K=ne.trim(),se=ue.trim();let z=!0,ae=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,N,L);else{const ee=d_(o,N,"vertex"),O=d_(o,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+he+`
`+ee+`
`+O)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(K===""||se==="")&&(ae=!1);ae&&(H.diagnostics={runnable:z,programLog:he,vertexShader:{log:K,prefix:S},fragmentShader:{log:se,prefix:y}})}o.deleteShader(N),o.deleteShader(L),k=new Uu(o,T),P=fD(o,T)}let k;this.getUniforms=function(){return k===void 0&&F(this),k};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,nD)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iD++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=L,this}let MD=0;class TD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new wD(e),t.set(e,r)),r}}class wD{constructor(e){this.id=MD++,this.code=e,this.usedTimes=0}}function AD(n,e,t,r,o,l,u){const c=new vx,d=new TD,h=new Set,m=[],p=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,C,H,$,ne){const ue=$.fog,he=ne.geometry,K=P.isMeshStandardMaterial?$.environment:null,se=(P.isMeshStandardMaterial?t:e).get(P.envMap||K),z=se&&se.mapping===Yu?se.image.height:null,ae=E[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const ee=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,O=ee!==void 0?ee.length:0;let re=0;he.morphAttributes.position!==void 0&&(re=1),he.morphAttributes.normal!==void 0&&(re=2),he.morphAttributes.color!==void 0&&(re=3);let ye,be,Re,Z;if(ae){const yt=Oi[ae];ye=yt.vertexShader,be=yt.fragmentShader}else ye=P.vertexShader,be=P.fragmentShader,d.update(P),Re=d.getVertexShaderID(P),Z=d.getFragmentShaderID(P);const ce=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ie=ne.isInstancedMesh===!0,ke=ne.isBatchedMesh===!0,pt=!!P.map,Ht=!!P.matcap,B=!!se,At=!!P.aoMap,ft=!!P.lightMap,tt=!!P.bumpMap,Ge=!!P.normalMap,Pt=!!P.displacementMap,Be=!!P.emissiveMap,ut=!!P.metalnessMap,kt=!!P.roughnessMap,_t=P.anisotropy>0,I=P.clearcoat>0,w=P.dispersion>0,q=P.iridescence>0,de=P.sheen>0,ge=P.transmission>0,fe=_t&&!!P.anisotropyMap,Ke=I&&!!P.clearcoatMap,Ee=I&&!!P.clearcoatNormalMap,We=I&&!!P.clearcoatRoughnessMap,Xe=q&&!!P.iridescenceMap,Te=q&&!!P.iridescenceThicknessMap,Ne=de&&!!P.sheenColorMap,nt=de&&!!P.sheenRoughnessMap,Ye=!!P.specularMap,Le=!!P.specularColorMap,lt=!!P.specularIntensityMap,G=ge&&!!P.transmissionMap,Me=ge&&!!P.thicknessMap,Ce=!!P.gradientMap,ze=!!P.alphaMap,xe=P.alphaTest>0,J=!!P.alphaHash,Pe=!!P.extensions;let Ze=Hr;P.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const mt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:ye,fragmentShader:be,defines:P.defines,customVertexShaderID:Re,customFragmentShaderID:Z,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:ke,batchingColor:ke&&ne._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ne.instanceColor!==null,instancingMorph:Ie&&ne.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Co,alphaToCoverage:!!P.alphaToCoverage,map:pt,matcap:Ht,envMap:B,envMapMode:B&&se.mapping,envMapCubeUVHeight:z,aoMap:At,lightMap:ft,bumpMap:tt,normalMap:Ge,displacementMap:v&&Pt,emissiveMap:Be,normalMapObjectSpace:Ge&&P.normalMapType===MC,normalMapTangentSpace:Ge&&P.normalMapType===EC,metalnessMap:ut,roughnessMap:kt,anisotropy:_t,anisotropyMap:fe,clearcoat:I,clearcoatMap:Ke,clearcoatNormalMap:Ee,clearcoatRoughnessMap:We,dispersion:w,iridescence:q,iridescenceMap:Xe,iridescenceThicknessMap:Te,sheen:de,sheenColorMap:Ne,sheenRoughnessMap:nt,specularMap:Ye,specularColorMap:Le,specularIntensityMap:lt,transmission:ge,transmissionMap:G,thicknessMap:Me,gradientMap:Ce,opaque:P.transparent===!1&&P.blending===As&&P.alphaToCoverage===!1,alphaMap:ze,alphaTest:xe,alphaHash:J,combine:P.combine,mapUv:pt&&T(P.map.channel),aoMapUv:At&&T(P.aoMap.channel),lightMapUv:ft&&T(P.lightMap.channel),bumpMapUv:tt&&T(P.bumpMap.channel),normalMapUv:Ge&&T(P.normalMap.channel),displacementMapUv:Pt&&T(P.displacementMap.channel),emissiveMapUv:Be&&T(P.emissiveMap.channel),metalnessMapUv:ut&&T(P.metalnessMap.channel),roughnessMapUv:kt&&T(P.roughnessMap.channel),anisotropyMapUv:fe&&T(P.anisotropyMap.channel),clearcoatMapUv:Ke&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:nt&&T(P.sheenRoughnessMap.channel),specularMapUv:Ye&&T(P.specularMap.channel),specularColorMapUv:Le&&T(P.specularColorMap.channel),specularIntensityMapUv:lt&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:Me&&T(P.thicknessMap.channel),alphaMapUv:ze&&T(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(Ge||_t),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!he.attributes.uv&&(pt||ze),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:pe,skinning:ne.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:pt&&P.map.isVideoTexture===!0&&Rt.getTransfer(P.map.colorSpace)===Ot,decodeVideoTextureEmissive:Be&&P.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(P.emissiveMap.colorSpace)===Ot,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===ki,flipSided:P.side===Yn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Pe&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&P.extensions.multiDraw===!0||ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return mt.vertexUv1s=h.has(1),mt.vertexUv2s=h.has(2),mt.vertexUv3s=h.has(3),h.clear(),mt}function y(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)C.push(H),C.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(D(C,P),R(C,P),C.push(n.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function D(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function R(P,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),C.gradientMap&&c.enable(22),P.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),P.push(c.mask)}function A(P){const C=E[P.type];let H;if(C){const $=Oi[C];H=JC.clone($.uniforms)}else H=P.uniforms;return H}function N(P,C){let H;for(let $=0,ne=m.length;$<ne;$++){const ue=m[$];if(ue.cacheKey===C){H=ue,++H.usedTimes;break}}return H===void 0&&(H=new ED(n,C,P,l),m.push(H)),H}function L(P){if(--P.usedTimes===0){const C=m.indexOf(P);m[C]=m[m.length-1],m.pop(),P.destroy()}}function F(P){d.remove(P)}function k(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:A,acquireProgram:N,releaseProgram:L,releaseShaderCache:F,programs:m,dispose:k}}function CD(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function RD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function v_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function __(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(p,v,x,E,T,S){let y=n[e];return y===void 0?(y={id:p.id,object:p,geometry:v,material:x,groupOrder:E,renderOrder:p.renderOrder,z:T,group:S},n[e]=y):(y.id=p.id,y.object=p,y.geometry=v,y.material=x,y.groupOrder=E,y.renderOrder=p.renderOrder,y.z=T,y.group=S),e++,y}function c(p,v,x,E,T,S){const y=u(p,v,x,E,T,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):t.push(y)}function d(p,v,x,E,T,S){const y=u(p,v,x,E,T,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function h(p,v){t.length>1&&t.sort(p||RD),r.length>1&&r.sort(v||v_),o.length>1&&o.sort(v||v_)}function m(){for(let p=e,v=n.length;p<v;p++){const x=n[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:d,finish:m,sort:h}}function bD(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new __,n.set(r,[u])):o>=l.length?(u=new __,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function PD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new Ut};break;case"SpotLight":t={position:new te,direction:new te,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new te,halfWidth:new te,halfHeight:new te};break}return n[e.id]=t,t}}}function DD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let LD=0;function ID(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ND(n){const e=new PD,t=DD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const o=new te,l=new fn,u=new fn;function c(h){let m=0,p=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let x=0,E=0,T=0,S=0,y=0,D=0,R=0,A=0,N=0,L=0,F=0;h.sort(ID);for(let P=0,C=h.length;P<C;P++){const H=h[P],$=H.color,ne=H.intensity,ue=H.distance,he=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=$.r*ne,p+=$.g*ne,v+=$.b*ne;else if(H.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(H.sh.coefficients[K],ne);F++}else if(H.isDirectionalLight){const K=e.get(H);if(K.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const se=H.shadow,z=t.get(H);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,r.directionalShadow[x]=z,r.directionalShadowMap[x]=he,r.directionalShadowMatrix[x]=H.shadow.matrix,D++}r.directional[x]=K,x++}else if(H.isSpotLight){const K=e.get(H);K.position.setFromMatrixPosition(H.matrixWorld),K.color.copy($).multiplyScalar(ne),K.distance=ue,K.coneCos=Math.cos(H.angle),K.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),K.decay=H.decay,r.spot[T]=K;const se=H.shadow;if(H.map&&(r.spotLightMap[N]=H.map,N++,se.updateMatrices(H),H.castShadow&&L++),r.spotLightMatrix[T]=se.matrix,H.castShadow){const z=t.get(H);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,r.spotShadow[T]=z,r.spotShadowMap[T]=he,A++}T++}else if(H.isRectAreaLight){const K=e.get(H);K.color.copy($).multiplyScalar(ne),K.halfWidth.set(H.width*.5,0,0),K.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=K,S++}else if(H.isPointLight){const K=e.get(H);if(K.color.copy(H.color).multiplyScalar(H.intensity),K.distance=H.distance,K.decay=H.decay,H.castShadow){const se=H.shadow,z=t.get(H);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,z.shadowCameraNear=se.camera.near,z.shadowCameraFar=se.camera.far,r.pointShadow[E]=z,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=H.shadow.matrix,R++}r.point[E]=K,E++}else if(H.isHemisphereLight){const K=e.get(H);K.skyColor.copy(H.color).multiplyScalar(ne),K.groundColor.copy(H.groundColor).multiplyScalar(ne),r.hemi[y]=K,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=p,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==x||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==S||k.hemiLength!==y||k.numDirectionalShadows!==D||k.numPointShadows!==R||k.numSpotShadows!==A||k.numSpotMaps!==N||k.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=T,r.rectArea.length=S,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=A+N-L,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=F,k.directionalLength=x,k.pointLength=E,k.spotLength=T,k.rectAreaLength=S,k.hemiLength=y,k.numDirectionalShadows=D,k.numPointShadows=R,k.numSpotShadows=A,k.numSpotMaps=N,k.numLightProbes=F,r.version=LD++)}function d(h,m){let p=0,v=0,x=0,E=0,T=0;const S=m.matrixWorldInverse;for(let y=0,D=h.length;y<D;y++){const R=h[y];if(R.isDirectionalLight){const A=r.directional[p];A.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),p++}else if(R.isSpotLight){const A=r.spot[x];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),x++}else if(R.isRectAreaLight){const A=r.rectArea[E];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),u.identity(),l.copy(R.matrixWorld),l.premultiply(S),u.extractRotation(l),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),E++}else if(R.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),v++}else if(R.isHemisphereLight){const A=r.hemi[T];A.direction.setFromMatrixPosition(R.matrixWorld),A.direction.transformDirection(S),T++}}}return{setup:c,setupView:d,state:r}}function y_(n){const e=new ND(n),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function c(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:l,pushShadow:u}}function UD(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new y_(n),e.set(o,[c])):l>=u.length?(c=new y_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const FD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OD=`uniform sampler2D shadow_pass;
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
}`;function kD(n,e,t){let r=new wx;const o=new bt,l=new bt,u=new rn,c=new uR({depthPacking:SC}),d=new cR,h={},m=t.maxTextureSize,p={[Xr]:Yn,[Yn]:Xr,[ki]:ki},v=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:FD,fragmentShader:OD}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Yr;E.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Vi(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ix;let y=this.type;this.render=function(L,F,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;const P=n.getRenderTarget(),C=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Vr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ne=y!==or&&this.type===or,ue=y===or&&this.type!==or;for(let he=0,K=L.length;he<K;he++){const se=L[he],z=se.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const ae=z.getFrameExtents();if(o.multiply(ae),l.copy(z.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ae.x),o.x=l.x*ae.x,z.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ae.y),o.y=l.y*ae.y,z.mapSize.y=l.y)),z.map===null||ne===!0||ue===!0){const O=this.type!==or?{minFilter:Pi,magFilter:Pi}:{};z.map!==null&&z.map.dispose(),z.map=new Rs(o.x,o.y,O),z.map.texture.name=se.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ee=z.getViewportCount();for(let O=0;O<ee;O++){const re=z.getViewport(O);u.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),$.viewport(u),z.updateMatrices(se,O),r=z.getFrustum(),A(F,k,z.camera,se,this.type)}z.isPointLightShadow!==!0&&this.type===or&&D(z,k),z.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(P,C,H)};function D(L,F){const k=e.update(T);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Rs(o.x,o.y)),v.uniforms.shadow_pass.value=L.map.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(F,null,k,v,T,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(F,null,k,x,T,null)}function R(L,F,k,P){let C=null;const H=k.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)C=H;else if(C=k.isPointLight===!0?d:c,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=C.uuid,ne=F.uuid;let ue=h[$];ue===void 0&&(ue={},h[$]=ue);let he=ue[ne];he===void 0&&(he=C.clone(),ue[ne]=he,F.addEventListener("dispose",N)),C=he}if(C.visible=F.visible,C.wireframe=F.wireframe,P===or?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:p[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=n.properties.get(C);$.light=k}return C}function A(L,F,k,P,C){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===or)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,L.matrixWorld);const ne=e.update(L),ue=L.material;if(Array.isArray(ue)){const he=ne.groups;for(let K=0,se=he.length;K<se;K++){const z=he[K],ae=ue[z.materialIndex];if(ae&&ae.visible){const ee=R(L,ae,P,C);L.onBeforeShadow(n,L,F,k,ne,ee,z),n.renderBufferDirect(k,null,ne,ee,L,z),L.onAfterShadow(n,L,F,k,ne,ee,z)}}}else if(ue.visible){const he=R(L,ue,P,C);L.onBeforeShadow(n,L,F,k,ne,he,null),n.renderBufferDirect(k,null,ne,he,L,null),L.onAfterShadow(n,L,F,k,ne,he,null)}}const $=L.children;for(let ne=0,ue=$.length;ne<ue;ne++)A($[ne],F,k,P,C)}function N(L){L.target.removeEventListener("dispose",N);for(const k in h){const P=h[k],C=L.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const BD={[Qd]:Jd,[eh]:ih,[th]:rh,[To]:nh,[Jd]:Qd,[ih]:eh,[rh]:th,[nh]:To};function zD(n,e){function t(){let G=!1;const Me=new rn;let Ce=null;const ze=new rn(0,0,0,0);return{setMask:function(xe){Ce!==xe&&!G&&(n.colorMask(xe,xe,xe,xe),Ce=xe)},setLocked:function(xe){G=xe},setClear:function(xe,J,Pe,Ze,mt){mt===!0&&(xe*=Ze,J*=Ze,Pe*=Ze),Me.set(xe,J,Pe,Ze),ze.equals(Me)===!1&&(n.clearColor(xe,J,Pe,Ze),ze.copy(Me))},reset:function(){G=!1,Ce=null,ze.set(-1,0,0,0)}}}function r(){let G=!1,Me=!1,Ce=null,ze=null,xe=null;return{setReversed:function(J){if(Me!==J){const Pe=e.get("EXT_clip_control");J?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Me=J;const Ze=xe;xe=null,this.setClear(Ze)}},getReversed:function(){return Me},setTest:function(J){J?ce(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(J){Ce!==J&&!G&&(n.depthMask(J),Ce=J)},setFunc:function(J){if(Me&&(J=BD[J]),ze!==J){switch(J){case Qd:n.depthFunc(n.NEVER);break;case Jd:n.depthFunc(n.ALWAYS);break;case eh:n.depthFunc(n.LESS);break;case To:n.depthFunc(n.LEQUAL);break;case th:n.depthFunc(n.EQUAL);break;case nh:n.depthFunc(n.GEQUAL);break;case ih:n.depthFunc(n.GREATER);break;case rh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ze=J}},setLocked:function(J){G=J},setClear:function(J){xe!==J&&(Me&&(J=1-J),n.clearDepth(J),xe=J)},reset:function(){G=!1,Ce=null,ze=null,xe=null,Me=!1}}}function o(){let G=!1,Me=null,Ce=null,ze=null,xe=null,J=null,Pe=null,Ze=null,mt=null;return{setTest:function(yt){G||(yt?ce(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(yt){Me!==yt&&!G&&(n.stencilMask(yt),Me=yt)},setFunc:function(yt,Dt,It){(Ce!==yt||ze!==Dt||xe!==It)&&(n.stencilFunc(yt,Dt,It),Ce=yt,ze=Dt,xe=It)},setOp:function(yt,Dt,It){(J!==yt||Pe!==Dt||Ze!==It)&&(n.stencilOp(yt,Dt,It),J=yt,Pe=Dt,Ze=It)},setLocked:function(yt){G=yt},setClear:function(yt){mt!==yt&&(n.clearStencil(yt),mt=yt)},reset:function(){G=!1,Me=null,Ce=null,ze=null,xe=null,J=null,Pe=null,Ze=null,mt=null}}}const l=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let m={},p={},v=new WeakMap,x=[],E=null,T=!1,S=null,y=null,D=null,R=null,A=null,N=null,L=null,F=new Ut(0,0,0),k=0,P=!1,C=null,H=null,$=null,ne=null,ue=null;const he=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,se=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=se>=1):z.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=se>=2);let ae=null,ee={};const O=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),ye=new rn().fromArray(O),be=new rn().fromArray(re);function Re(G,Me,Ce,ze){const xe=new Uint8Array(4),J=n.createTexture();n.bindTexture(G,J),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<Ce;Pe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,ze,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(Me+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return J}const Z={};Z[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ce(n.DEPTH_TEST),u.setFunc(To),tt(!1),Ge(w0),ce(n.CULL_FACE),At(Vr);function ce(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function pe(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function Ie(G,Me){return p[G]!==Me?(n.bindFramebuffer(G,Me),p[G]=Me,G===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Me),G===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ke(G,Me){let Ce=x,ze=!1;if(G){Ce=v.get(Me),Ce===void 0&&(Ce=[],v.set(Me,Ce));const xe=G.textures;if(Ce.length!==xe.length||Ce[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Pe=xe.length;J<Pe;J++)Ce[J]=n.COLOR_ATTACHMENT0+J;Ce.length=xe.length,ze=!0}}else Ce[0]!==n.BACK&&(Ce[0]=n.BACK,ze=!0);ze&&n.drawBuffers(Ce)}function pt(G){return E!==G?(n.useProgram(G),E=G,!0):!1}const Ht={[_s]:n.FUNC_ADD,[YA]:n.FUNC_SUBTRACT,[qA]:n.FUNC_REVERSE_SUBTRACT};Ht[$A]=n.MIN,Ht[KA]=n.MAX;const B={[ZA]:n.ZERO,[QA]:n.ONE,[JA]:n.SRC_COLOR,[Kd]:n.SRC_ALPHA,[sC]:n.SRC_ALPHA_SATURATE,[iC]:n.DST_COLOR,[tC]:n.DST_ALPHA,[eC]:n.ONE_MINUS_SRC_COLOR,[Zd]:n.ONE_MINUS_SRC_ALPHA,[rC]:n.ONE_MINUS_DST_COLOR,[nC]:n.ONE_MINUS_DST_ALPHA,[oC]:n.CONSTANT_COLOR,[aC]:n.ONE_MINUS_CONSTANT_COLOR,[lC]:n.CONSTANT_ALPHA,[uC]:n.ONE_MINUS_CONSTANT_ALPHA};function At(G,Me,Ce,ze,xe,J,Pe,Ze,mt,yt){if(G===Vr){T===!0&&(pe(n.BLEND),T=!1);return}if(T===!1&&(ce(n.BLEND),T=!0),G!==jA){if(G!==S||yt!==P){if((y!==_s||A!==_s)&&(n.blendEquation(n.FUNC_ADD),y=_s,A=_s),yt)switch(G){case As:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case A0:n.blendFunc(n.ONE,n.ONE);break;case C0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case R0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case As:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case A0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case C0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,R=null,N=null,L=null,F.set(0,0,0),k=0,S=G,P=yt}return}xe=xe||Me,J=J||Ce,Pe=Pe||ze,(Me!==y||xe!==A)&&(n.blendEquationSeparate(Ht[Me],Ht[xe]),y=Me,A=xe),(Ce!==D||ze!==R||J!==N||Pe!==L)&&(n.blendFuncSeparate(B[Ce],B[ze],B[J],B[Pe]),D=Ce,R=ze,N=J,L=Pe),(Ze.equals(F)===!1||mt!==k)&&(n.blendColor(Ze.r,Ze.g,Ze.b,mt),F.copy(Ze),k=mt),S=G,P=!1}function ft(G,Me){G.side===ki?pe(n.CULL_FACE):ce(n.CULL_FACE);let Ce=G.side===Yn;Me&&(Ce=!Ce),tt(Ce),G.blending===As&&G.transparent===!1?At(Vr):At(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const ze=G.stencilWrite;c.setTest(ze),ze&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(G){C!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),C=G)}function Ge(G){G!==GA?(ce(n.CULL_FACE),G!==H&&(G===w0?n.cullFace(n.BACK):G===WA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),H=G}function Pt(G){G!==$&&(K&&n.lineWidth(G),$=G)}function Be(G,Me,Ce){G?(ce(n.POLYGON_OFFSET_FILL),(ne!==Me||ue!==Ce)&&(n.polygonOffset(Me,Ce),ne=Me,ue=Ce)):pe(n.POLYGON_OFFSET_FILL)}function ut(G){G?ce(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function kt(G){G===void 0&&(G=n.TEXTURE0+he-1),ae!==G&&(n.activeTexture(G),ae=G)}function _t(G,Me,Ce){Ce===void 0&&(ae===null?Ce=n.TEXTURE0+he-1:Ce=ae);let ze=ee[Ce];ze===void 0&&(ze={type:void 0,texture:void 0},ee[Ce]=ze),(ze.type!==G||ze.texture!==Me)&&(ae!==Ce&&(n.activeTexture(Ce),ae=Ce),n.bindTexture(G,Me||Z[G]),ze.type=G,ze.texture=Me)}function I(){const G=ee[ae];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(G){ye.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ye.copy(G))}function nt(G){be.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),be.copy(G))}function Ye(G,Me){let Ce=h.get(Me);Ce===void 0&&(Ce=new WeakMap,h.set(Me,Ce));let ze=Ce.get(G);ze===void 0&&(ze=n.getUniformBlockIndex(Me,G.name),Ce.set(G,ze))}function Le(G,Me){const ze=h.get(Me).get(G);d.get(Me)!==ze&&(n.uniformBlockBinding(Me,ze,G.__bindingPointIndex),d.set(Me,ze))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},ae=null,ee={},p={},v=new WeakMap,x=[],E=null,T=!1,S=null,y=null,D=null,R=null,A=null,N=null,L=null,F=new Ut(0,0,0),k=0,P=!1,C=null,H=null,$=null,ne=null,ue=null,ye.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),c.reset()}return{buffers:{color:l,depth:u,stencil:c},enable:ce,disable:pe,bindFramebuffer:Ie,drawBuffers:ke,useProgram:pt,setBlending:At,setMaterial:ft,setFlipSided:tt,setCullFace:Ge,setLineWidth:Pt,setPolygonOffset:Be,setScissorTest:ut,activeTexture:kt,bindTexture:_t,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:q,texImage2D:Xe,texImage3D:Te,updateUBOMapping:Ye,uniformBlockBinding:Le,texStorage2D:Ee,texStorage3D:We,texSubImage2D:de,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ke,scissor:Ne,viewport:nt,reset:lt}}function VD(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,m=new WeakMap;let p;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,w){return x?new OffscreenCanvas(I,w):Gu("canvas")}function T(I,w,q){let de=1;const ge=_t(I);if((ge.width>q||ge.height>q)&&(de=q/Math.max(ge.width,ge.height)),de<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const fe=Math.floor(de*ge.width),Ke=Math.floor(de*ge.height);p===void 0&&(p=E(fe,Ke));const Ee=w?E(fe,Ke):p;return Ee.width=fe,Ee.height=Ke,Ee.getContext("2d").drawImage(I,0,0,fe,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+Ke+")."),Ee}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function S(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(I,w,q,de,ge=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let fe=w;if(w===n.RED&&(q===n.FLOAT&&(fe=n.R32F),q===n.HALF_FLOAT&&(fe=n.R16F),q===n.UNSIGNED_BYTE&&(fe=n.R8)),w===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(fe=n.R8UI),q===n.UNSIGNED_SHORT&&(fe=n.R16UI),q===n.UNSIGNED_INT&&(fe=n.R32UI),q===n.BYTE&&(fe=n.R8I),q===n.SHORT&&(fe=n.R16I),q===n.INT&&(fe=n.R32I)),w===n.RG&&(q===n.FLOAT&&(fe=n.RG32F),q===n.HALF_FLOAT&&(fe=n.RG16F),q===n.UNSIGNED_BYTE&&(fe=n.RG8)),w===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(fe=n.RG8UI),q===n.UNSIGNED_SHORT&&(fe=n.RG16UI),q===n.UNSIGNED_INT&&(fe=n.RG32UI),q===n.BYTE&&(fe=n.RG8I),q===n.SHORT&&(fe=n.RG16I),q===n.INT&&(fe=n.RG32I)),w===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),q===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),q===n.UNSIGNED_INT&&(fe=n.RGB32UI),q===n.BYTE&&(fe=n.RGB8I),q===n.SHORT&&(fe=n.RGB16I),q===n.INT&&(fe=n.RGB32I)),w===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),q===n.UNSIGNED_INT&&(fe=n.RGBA32UI),q===n.BYTE&&(fe=n.RGBA8I),q===n.SHORT&&(fe=n.RGBA16I),q===n.INT&&(fe=n.RGBA32I)),w===n.RGB&&(q===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),w===n.RGBA){const Ke=ge?Vu:Rt.getTransfer(de);q===n.FLOAT&&(fe=n.RGBA32F),q===n.HALF_FLOAT&&(fe=n.RGBA16F),q===n.UNSIGNED_BYTE&&(fe=Ke===Ot?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function A(I,w){let q;return I?w===null||w===Cs||w===La?q=n.DEPTH24_STENCIL8:w===ar?q=n.DEPTH32F_STENCIL8:w===Da&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Cs||w===La?q=n.DEPTH_COMPONENT24:w===ar?q=n.DEPTH_COMPONENT32F:w===Da&&(q=n.DEPTH_COMPONENT16),q}function N(I,w){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pi&&I.minFilter!==Bi?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function L(I){const w=I.target;w.removeEventListener("dispose",L),k(w),w.isVideoTexture&&m.delete(w)}function F(I){const w=I.target;w.removeEventListener("dispose",F),C(w)}function k(I){const w=r.get(I);if(w.__webglInit===void 0)return;const q=I.source,de=v.get(q);if(de){const ge=de[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(I),Object.keys(de).length===0&&v.delete(q)}r.remove(I)}function P(I){const w=r.get(I);n.deleteTexture(w.__webglTexture);const q=I.source,de=v.get(q);delete de[w.__cacheKey],u.memory.textures--}function C(I){const w=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(w.__webglFramebuffer[de]))for(let ge=0;ge<w.__webglFramebuffer[de].length;ge++)n.deleteFramebuffer(w.__webglFramebuffer[de][ge]);else n.deleteFramebuffer(w.__webglFramebuffer[de]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[de])}else{if(Array.isArray(w.__webglFramebuffer))for(let de=0;de<w.__webglFramebuffer.length;de++)n.deleteFramebuffer(w.__webglFramebuffer[de]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let de=0;de<w.__webglColorRenderbuffer.length;de++)w.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[de]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=I.textures;for(let de=0,ge=q.length;de<ge;de++){const fe=r.get(q[de]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(q[de])}r.remove(I)}let H=0;function $(){H=0}function ne(){const I=H;return I>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),H+=1,I}function ue(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function he(I,w){const q=r.get(I);if(I.isVideoTexture&&ut(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){const de=I.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(q,I,w);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+w)}function K(I,w){const q=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Z(q,I,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+w)}function se(I,w){const q=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Z(q,I,w);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+w)}function z(I,w){const q=r.get(I);if(I.version>0&&q.__version!==I.version){ce(q,I,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+w)}const ae={[ah]:n.REPEAT,[Es]:n.CLAMP_TO_EDGE,[lh]:n.MIRRORED_REPEAT},ee={[Pi]:n.NEAREST,[yC]:n.NEAREST_MIPMAP_NEAREST,[iu]:n.NEAREST_MIPMAP_LINEAR,[Bi]:n.LINEAR,[$f]:n.LINEAR_MIPMAP_NEAREST,[Ms]:n.LINEAR_MIPMAP_LINEAR},O={[TC]:n.NEVER,[PC]:n.ALWAYS,[wC]:n.LESS,[px]:n.LEQUAL,[AC]:n.EQUAL,[bC]:n.GEQUAL,[CC]:n.GREATER,[RC]:n.NOTEQUAL};function re(I,w){if(w.type===ar&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bi||w.magFilter===$f||w.magFilter===iu||w.magFilter===Ms||w.minFilter===Bi||w.minFilter===$f||w.minFilter===iu||w.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ae[w.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ae[w.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ae[w.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ee[w.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ee[w.minFilter]),w.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Pi||w.minFilter!==iu&&w.minFilter!==Ms||w.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function ye(I,w){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",L));const de=w.source;let ge=v.get(de);ge===void 0&&(ge={},v.set(de,ge));const fe=ue(w);if(fe!==I.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,q=!0),ge[fe].usedTimes++;const Ke=ge[I.__cacheKey];Ke!==void 0&&(ge[I.__cacheKey].usedTimes--,Ke.usedTimes===0&&P(w)),I.__cacheKey=fe,I.__webglTexture=ge[fe].texture}return q}function be(I,w,q){return Math.floor(Math.floor(I/q)/w)}function Re(I,w,q,de){const fe=I.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,q,de,w.data);else{fe.sort((Te,Ne)=>Te.start-Ne.start);let Ke=0;for(let Te=1;Te<fe.length;Te++){const Ne=fe[Ke],nt=fe[Te],Ye=Ne.start+Ne.count,Le=be(nt.start,w.width,4),lt=be(Ne.start,w.width,4);nt.start<=Ye+1&&Le===lt&&be(nt.start+nt.count-1,w.width,4)===Le?Ne.count=Math.max(Ne.count,nt.start+nt.count-Ne.start):(++Ke,fe[Ke]=nt)}fe.length=Ke+1;const Ee=n.getParameter(n.UNPACK_ROW_LENGTH),We=n.getParameter(n.UNPACK_SKIP_PIXELS),Xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Te=0,Ne=fe.length;Te<Ne;Te++){const nt=fe[Te],Ye=Math.floor(nt.start/4),Le=Math.ceil(nt.count/4),lt=Ye%w.width,G=Math.floor(Ye/w.width),Me=Le,Ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,lt,G,Me,Ce,q,de,w.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ee),n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,Xe)}}function Z(I,w,q){let de=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=n.TEXTURE_3D);const ge=ye(I,w),fe=w.source;t.bindTexture(de,I.__webglTexture,n.TEXTURE0+q);const Ke=r.get(fe);if(fe.version!==Ke.__version||ge===!0){t.activeTexture(n.TEXTURE0+q);const Ee=Rt.getPrimaries(Rt.workingColorSpace),We=w.colorSpace===zr?null:Rt.getPrimaries(w.colorSpace),Xe=w.colorSpace===zr||Ee===We?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Te=T(w.image,!1,o.maxTextureSize);Te=kt(w,Te);const Ne=l.convert(w.format,w.colorSpace),nt=l.convert(w.type);let Ye=R(w.internalFormat,Ne,nt,w.colorSpace,w.isVideoTexture);re(de,w);let Le;const lt=w.mipmaps,G=w.isVideoTexture!==!0,Me=Ke.__version===void 0||ge===!0,Ce=fe.dataReady,ze=N(w,Te);if(w.isDepthTexture)Ye=A(w.format===Na,w.type),Me&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ye,Te.width,Te.height):t.texImage2D(n.TEXTURE_2D,0,Ye,Te.width,Te.height,0,Ne,nt,null));else if(w.isDataTexture)if(lt.length>0){G&&Me&&t.texStorage2D(n.TEXTURE_2D,ze,Ye,lt[0].width,lt[0].height);for(let xe=0,J=lt.length;xe<J;xe++)Le=lt[xe],G?Ce&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Le.width,Le.height,Ne,nt,Le.data):t.texImage2D(n.TEXTURE_2D,xe,Ye,Le.width,Le.height,0,Ne,nt,Le.data);w.generateMipmaps=!1}else G?(Me&&t.texStorage2D(n.TEXTURE_2D,ze,Ye,Te.width,Te.height),Ce&&Re(w,Te,Ne,nt)):t.texImage2D(n.TEXTURE_2D,0,Ye,Te.width,Te.height,0,Ne,nt,Te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,Ye,lt[0].width,lt[0].height,Te.depth);for(let xe=0,J=lt.length;xe<J;xe++)if(Le=lt[xe],w.format!==bi)if(Ne!==null)if(G){if(Ce)if(w.layerUpdates.size>0){const Pe=$0(Le.width,Le.height,w.format,w.type);for(const Ze of w.layerUpdates){const mt=Le.data.subarray(Ze*Pe/Le.data.BYTES_PER_ELEMENT,(Ze+1)*Pe/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,Ze,Le.width,Le.height,1,Ne,mt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Le.width,Le.height,Te.depth,Ne,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Ye,Le.width,Le.height,Te.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Le.width,Le.height,Te.depth,Ne,nt,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Ye,Le.width,Le.height,Te.depth,0,Ne,nt,Le.data)}else{G&&Me&&t.texStorage2D(n.TEXTURE_2D,ze,Ye,lt[0].width,lt[0].height);for(let xe=0,J=lt.length;xe<J;xe++)Le=lt[xe],w.format!==bi?Ne!==null?G?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Le.width,Le.height,Ne,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ce&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Le.width,Le.height,Ne,nt,Le.data):t.texImage2D(n.TEXTURE_2D,xe,Ye,Le.width,Le.height,0,Ne,nt,Le.data)}else if(w.isDataArrayTexture)if(G){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,Ye,Te.width,Te.height,Te.depth),Ce)if(w.layerUpdates.size>0){const xe=$0(Te.width,Te.height,w.format,w.type);for(const J of w.layerUpdates){const Pe=Te.data.subarray(J*xe/Te.data.BYTES_PER_ELEMENT,(J+1)*xe/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,Te.width,Te.height,1,Ne,nt,Pe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ne,nt,Te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ye,Te.width,Te.height,Te.depth,0,Ne,nt,Te.data);else if(w.isData3DTexture)G?(Me&&t.texStorage3D(n.TEXTURE_3D,ze,Ye,Te.width,Te.height,Te.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ne,nt,Te.data)):t.texImage3D(n.TEXTURE_3D,0,Ye,Te.width,Te.height,Te.depth,0,Ne,nt,Te.data);else if(w.isFramebufferTexture){if(Me)if(G)t.texStorage2D(n.TEXTURE_2D,ze,Ye,Te.width,Te.height);else{let xe=Te.width,J=Te.height;for(let Pe=0;Pe<ze;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ye,xe,J,0,Ne,nt,null),xe>>=1,J>>=1}}else if(lt.length>0){if(G&&Me){const xe=_t(lt[0]);t.texStorage2D(n.TEXTURE_2D,ze,Ye,xe.width,xe.height)}for(let xe=0,J=lt.length;xe<J;xe++)Le=lt[xe],G?Ce&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ne,nt,Le):t.texImage2D(n.TEXTURE_2D,xe,Ye,Ne,nt,Le);w.generateMipmaps=!1}else if(G){if(Me){const xe=_t(Te);t.texStorage2D(n.TEXTURE_2D,ze,Ye,xe.width,xe.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,nt,Te)}else t.texImage2D(n.TEXTURE_2D,0,Ye,Ne,nt,Te);S(w)&&y(de),Ke.__version=fe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ce(I,w,q){if(w.image.length!==6)return;const de=ye(I,w),ge=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+q);const fe=r.get(ge);if(ge.version!==fe.__version||de===!0){t.activeTexture(n.TEXTURE0+q);const Ke=Rt.getPrimaries(Rt.workingColorSpace),Ee=w.colorSpace===zr?null:Rt.getPrimaries(w.colorSpace),We=w.colorSpace===zr||Ke===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,Te=w.image[0]&&w.image[0].isDataTexture,Ne=[];for(let J=0;J<6;J++)!Xe&&!Te?Ne[J]=T(w.image[J],!0,o.maxCubemapSize):Ne[J]=Te?w.image[J].image:w.image[J],Ne[J]=kt(w,Ne[J]);const nt=Ne[0],Ye=l.convert(w.format,w.colorSpace),Le=l.convert(w.type),lt=R(w.internalFormat,Ye,Le,w.colorSpace),G=w.isVideoTexture!==!0,Me=fe.__version===void 0||de===!0,Ce=ge.dataReady;let ze=N(w,nt);re(n.TEXTURE_CUBE_MAP,w);let xe;if(Xe){G&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,lt,nt.width,nt.height);for(let J=0;J<6;J++){xe=Ne[J].mipmaps;for(let Pe=0;Pe<xe.length;Pe++){const Ze=xe[Pe];w.format!==bi?Ye!==null?G?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe,0,0,Ze.width,Ze.height,Ye,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe,lt,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe,0,0,Ze.width,Ze.height,Ye,Le,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe,lt,Ze.width,Ze.height,0,Ye,Le,Ze.data)}}}else{if(xe=w.mipmaps,G&&Me){xe.length>0&&ze++;const J=_t(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,lt,J.width,J.height)}for(let J=0;J<6;J++)if(Te){G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne[J].width,Ne[J].height,Ye,Le,Ne[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,lt,Ne[J].width,Ne[J].height,0,Ye,Le,Ne[J].data);for(let Pe=0;Pe<xe.length;Pe++){const mt=xe[Pe].image[J].image;G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe+1,0,0,mt.width,mt.height,Ye,Le,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe+1,lt,mt.width,mt.height,0,Ye,Le,mt.data)}}else{G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ye,Le,Ne[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,lt,Ye,Le,Ne[J]);for(let Pe=0;Pe<xe.length;Pe++){const Ze=xe[Pe];G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe+1,0,0,Ye,Le,Ze.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe+1,lt,Ye,Le,Ze.image[J])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),fe.__version=ge.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function pe(I,w,q,de,ge,fe){const Ke=l.convert(q.format,q.colorSpace),Ee=l.convert(q.type),We=R(q.internalFormat,Ke,Ee,q.colorSpace),Xe=r.get(w),Te=r.get(q);if(Te.__renderTarget=w,!Xe.__hasExternalTextures){const Ne=Math.max(1,w.width>>fe),nt=Math.max(1,w.height>>fe);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,fe,We,Ne,nt,w.depth,0,Ke,Ee,null):t.texImage2D(ge,fe,We,Ne,nt,0,Ke,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Be(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ge,Te.__webglTexture,0,Pt(w)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,ge,Te.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(I,w,q){if(n.bindRenderbuffer(n.RENDERBUFFER,I),w.depthBuffer){const de=w.depthTexture,ge=de&&de.isDepthTexture?de.type:null,fe=A(w.stencilBuffer,ge),Ke=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=Pt(w);Be(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,fe,w.width,w.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,fe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ke,n.RENDERBUFFER,I)}else{const de=w.textures;for(let ge=0;ge<de.length;ge++){const fe=de[ge],Ke=l.convert(fe.format,fe.colorSpace),Ee=l.convert(fe.type),We=R(fe.internalFormat,Ke,Ee,fe.colorSpace),Xe=Pt(w);q&&Be(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,We,w.width,w.height):Be(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,We,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,We,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(w.depthTexture);de.__renderTarget=w,(!de.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const ge=de.__webglTexture,fe=Pt(w);if(w.depthTexture.format===Ia)Be(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Na)Be(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function pt(I){const w=r.get(I),q=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const de=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),de){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,de.removeEventListener("dispose",ge)};de.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=de}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const de=I.texture.mipmaps;de&&de.length>0?ke(w.__webglFramebuffer[0],I):ke(w.__webglFramebuffer,I)}else if(q){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]===void 0)w.__webglDepthbuffer[de]=n.createRenderbuffer(),Ie(w.__webglDepthbuffer[de],I,!1);else{const ge=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[de];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,fe)}}else{const de=I.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ie(w.__webglDepthbuffer,I,!1);else{const ge=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(I,w,q){const de=r.get(I);w!==void 0&&pe(de.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&pt(I)}function B(I){const w=I.texture,q=r.get(I),de=r.get(w);I.addEventListener("dispose",F);const ge=I.textures,fe=I.isWebGLCubeRenderTarget===!0,Ke=ge.length>1;if(Ke||(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=w.version,u.memory.textures++),fe){q.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[Ee]=[];for(let We=0;We<w.mipmaps.length;We++)q.__webglFramebuffer[Ee][We]=n.createFramebuffer()}else q.__webglFramebuffer[Ee]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)q.__webglFramebuffer[Ee]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Ke)for(let Ee=0,We=ge.length;Ee<We;Ee++){const Xe=r.get(ge[Ee]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),u.memory.textures++)}if(I.samples>0&&Be(I)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ge.length;Ee++){const We=ge[Ee];q.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Ee]);const Xe=l.convert(We.format,We.colorSpace),Te=l.convert(We.type),Ne=R(We.internalFormat,Xe,Te,We.colorSpace,I.isXRRenderTarget===!0),nt=Pt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,Ne,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,q.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),re(n.TEXTURE_CUBE_MAP,w);for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let We=0;We<w.mipmaps.length;We++)pe(q.__webglFramebuffer[Ee][We],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We);else pe(q.__webglFramebuffer[Ee],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ee=0,We=ge.length;Ee<We;Ee++){const Xe=ge[Ee],Te=r.get(Xe);let Ne=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ne=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Te.__webglTexture),re(Ne,Xe),pe(q.__webglFramebuffer,I,Xe,n.COLOR_ATTACHMENT0+Ee,Ne,0),S(Xe)&&y(Ne)}t.unbindTexture()}else{let Ee=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ee=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,de.__webglTexture),re(Ee,w),w.mipmaps&&w.mipmaps.length>0)for(let We=0;We<w.mipmaps.length;We++)pe(q.__webglFramebuffer[We],I,w,n.COLOR_ATTACHMENT0,Ee,We);else pe(q.__webglFramebuffer,I,w,n.COLOR_ATTACHMENT0,Ee,0);S(w)&&y(Ee),t.unbindTexture()}I.depthBuffer&&pt(I)}function At(I){const w=I.textures;for(let q=0,de=w.length;q<de;q++){const ge=w[q];if(S(ge)){const fe=D(I),Ke=r.get(ge).__webglTexture;t.bindTexture(fe,Ke),y(fe),t.unbindTexture()}}}const ft=[],tt=[];function Ge(I){if(I.samples>0){if(Be(I)===!1){const w=I.textures,q=I.width,de=I.height;let ge=n.COLOR_BUFFER_BIT;const fe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ke=r.get(I),Ee=w.length>1;if(Ee)for(let Xe=0;Xe<w.length;Xe++)t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const We=I.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Xe=0;Xe<w.length;Xe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ke.__webglColorRenderbuffer[Xe]);const Te=r.get(w[Xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,q,de,0,0,q,de,ge,n.NEAREST),d===!0&&(ft.length=0,tt.length=0,ft.push(n.COLOR_ATTACHMENT0+Xe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ft.push(fe),tt.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,tt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let Xe=0;Xe<w.length;Xe++){t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,Ke.__webglColorRenderbuffer[Xe]);const Te=r.get(w[Xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const w=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Pt(I){return Math.min(o.maxSamples,I.samples)}function Be(I){const w=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ut(I){const w=u.render.frame;m.get(I)!==w&&(m.set(I,w),I.update())}function kt(I,w){const q=I.colorSpace,de=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Co&&q!==zr&&(Rt.getTransfer(q)===Ot?(de!==bi||ge!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function _t(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=ne,this.resetTextureUnits=$,this.setTexture2D=he,this.setTexture2DArray=K,this.setTexture3D=se,this.setTextureCube=z,this.rebindTextures=Ht,this.setupRenderTarget=B,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Be}function HD(n,e){function t(r,o=zr){let l;const u=Rt.getTransfer(o);if(r===fr)return n.UNSIGNED_BYTE;if(r===Mp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Tp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===lx)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===ux)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===ox)return n.BYTE;if(r===ax)return n.SHORT;if(r===Da)return n.UNSIGNED_SHORT;if(r===Ep)return n.INT;if(r===Cs)return n.UNSIGNED_INT;if(r===ar)return n.FLOAT;if(r===za)return n.HALF_FLOAT;if(r===cx)return n.ALPHA;if(r===fx)return n.RGB;if(r===bi)return n.RGBA;if(r===Ia)return n.DEPTH_COMPONENT;if(r===Na)return n.DEPTH_STENCIL;if(r===dx)return n.RED;if(r===wp)return n.RED_INTEGER;if(r===hx)return n.RG;if(r===Ap)return n.RG_INTEGER;if(r===Cp)return n.RGBA_INTEGER;if(r===Du||r===Lu||r===Iu||r===Nu)if(u===Ot)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Du)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Iu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Du)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Iu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uh||r===ch||r===fh||r===dh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===uh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ch)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hh||r===ph||r===mh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===hh||r===ph)return u===Ot?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===mh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gh||r===vh||r===_h||r===yh||r===xh||r===Sh||r===Eh||r===Mh||r===Th||r===wh||r===Ah||r===Ch||r===Rh||r===bh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===gh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_h)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Eh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Th)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ah)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ch)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ph||r===Dh||r===Lh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ph)return u===Ot?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ih||r===Nh||r===Uh||r===Fh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ih)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Nh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===La?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const GD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WD=`
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

}`;class XD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Cx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new hr({vertexShader:GD,fragmentShader:WD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vi(new $u(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jD extends Lo{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,m=null,p=null,v=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",S=new XD,y={},D=t.getContextAttributes();let R=null,A=null;const N=[],L=[],F=new bt;let k=null;const P=new di;P.viewport=new rn;const C=new di;C.viewport=new rn;const H=[P,C],$=new dR;let ne=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=N[Z];return ce===void 0&&(ce=new _d,N[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=N[Z];return ce===void 0&&(ce=new _d,N[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=N[Z];return ce===void 0&&(ce=new _d,N[Z]=ce),ce.getHandSpace()};function he(Z){const ce=L.indexOf(Z.inputSource);if(ce===-1)return;const pe=N[ce];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,h||u),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",se);for(let Z=0;Z<N.length;Z++){const ce=L[Z];ce!==null&&(L[Z]=null,N[Z].disconnect(ce))}ne=null,ue=null,S.reset();for(const Z in y)delete y[Z];e.setRenderTarget(R),x=null,v=null,p=null,o=null,A=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(o,t)),p},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",K),o.addEventListener("inputsourceschange",se),D.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,ke=null;D.depth&&(ke=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=D.stencil?Na:Ia,Ie=D.stencil?La:Cs);const pt={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:l};p=this.getBinding(),v=p.createProjectionLayer(pt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new Rs(v.textureWidth,v.textureHeight,{format:bi,type:fr,depthTexture:new Ax(v.textureWidth,v.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const pe={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new Rs(x.framebufferWidth,x.framebufferHeight,{format:bi,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Re.setContext(o),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function se(Z){for(let ce=0;ce<Z.removed.length;ce++){const pe=Z.removed[ce],Ie=L.indexOf(pe);Ie>=0&&(L[Ie]=null,N[Ie].disconnect(pe))}for(let ce=0;ce<Z.added.length;ce++){const pe=Z.added[ce];let Ie=L.indexOf(pe);if(Ie===-1){for(let pt=0;pt<N.length;pt++)if(pt>=L.length){L.push(pe),Ie=pt;break}else if(L[pt]===null){L[pt]=pe,Ie=pt;break}if(Ie===-1)break}const ke=N[Ie];ke&&ke.connect(pe)}}const z=new te,ae=new te;function ee(Z,ce,pe){z.setFromMatrixPosition(ce.matrixWorld),ae.setFromMatrixPosition(pe.matrixWorld);const Ie=z.distanceTo(ae),ke=ce.projectionMatrix.elements,pt=pe.projectionMatrix.elements,Ht=ke[14]/(ke[10]-1),B=ke[14]/(ke[10]+1),At=(ke[9]+1)/ke[5],ft=(ke[9]-1)/ke[5],tt=(ke[8]-1)/ke[0],Ge=(pt[8]+1)/pt[0],Pt=Ht*tt,Be=Ht*Ge,ut=Ie/(-tt+Ge),kt=ut*-tt;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(kt),Z.translateZ(ut),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ke[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const _t=Ht+ut,I=B+ut,w=Pt-kt,q=Be+(Ie-kt),de=At*B/I*_t,ge=ft*B/I*_t;Z.projectionMatrix.makePerspective(w,q,de,ge,_t,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function O(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let ce=Z.near,pe=Z.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(pe=S.depthFar)),$.near=C.near=P.near=ce,$.far=C.far=P.far=pe,(ne!==$.near||ue!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),ne=$.near,ue=$.far),$.layers.mask=Z.layers.mask|6,P.layers.mask=$.layers.mask&3,C.layers.mask=$.layers.mask&5;const Ie=Z.parent,ke=$.cameras;O($,Ie);for(let pt=0;pt<ke.length;pt++)O(ke[pt],Ie);ke.length===2?ee($,P,C):$.projectionMatrix.copy(P.projectionMatrix),re(Z,$,Ie)};function re(Z,ce,pe){pe===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Oh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(Z){d=Z,v!==null&&(v.fixedFoveation=Z),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Z)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(Z){return y[Z]};let ye=null;function be(Z,ce){if(m=ce.getViewerPose(h||u),E=ce,m!==null){const pe=m.views;x!==null&&(e.setRenderTargetFramebuffer(A,x.framebuffer),e.setRenderTarget(A));let Ie=!1;pe.length!==$.cameras.length&&($.cameras.length=0,Ie=!0);for(let B=0;B<pe.length;B++){const At=pe[B];let ft=null;if(x!==null)ft=x.getViewport(At);else{const Ge=p.getViewSubImage(v,At);ft=Ge.viewport,B===0&&(e.setRenderTargetTextures(A,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(A))}let tt=H[B];tt===void 0&&(tt=new di,tt.layers.enable(B),tt.viewport=new rn,H[B]=tt),tt.matrix.fromArray(At.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(At.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ft.x,ft.y,ft.width,ft.height),B===0&&($.matrix.copy(tt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ie===!0&&$.cameras.push(tt)}const ke=o.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){p=r.getBinding();const B=p.getDepthInformation(pe[0]);B&&B.isValid&&B.texture&&S.init(B,o.renderState)}if(ke&&ke.includes("camera-access")&&T){e.state.unbindTexture(),p=r.getBinding();for(let B=0;B<pe.length;B++){const At=pe[B].camera;if(At){let ft=y[At];ft||(ft=new Cx,y[At]=ft);const tt=p.getCameraImage(At);ft.sourceTexture=tt}}}}for(let pe=0;pe<N.length;pe++){const Ie=L[pe],ke=N[pe];Ie!==null&&ke!==void 0&&ke.update(Ie,ce,h||u)}ye&&ye(Z,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Re=new Rx;Re.setAnimationLoop(be),this.setAnimationLoop=function(Z){ye=Z},this.dispose=function(){}}}const ps=new dr,YD=new fn;function qD(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Ex(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,D,R,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),p(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,A)):y.isMeshMatcapMaterial?(l(S,y),E(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),T(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?d(S,y,D,R):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Yn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Yn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),R=D.envMap,A=D.envMapRotation;R&&(S.envMap.value=R,ps.copy(A),ps.x*=-1,ps.y*=-1,ps.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),S.envMapRotation.value.setFromMatrix4(YD.makeRotationFromEuler(ps)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,D,R){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=R*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function p(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function $D(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,R){const A=R.program;r.uniformBlockBinding(D,A)}function h(D,R){let A=o[D.id];A===void 0&&(E(D),A=m(D),o[D.id]=A,D.addEventListener("dispose",S));const N=R.program;r.updateUBOMapping(D,N);const L=e.render.frame;l[D.id]!==L&&(v(D),l[D.id]=L)}function m(D){const R=p();D.__bindingPointIndex=R;const A=n.createBuffer(),N=D.__size,L=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,N,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,A),A}function p(){for(let D=0;D<c;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const R=o[D.id],A=D.uniforms,N=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let L=0,F=A.length;L<F;L++){const k=Array.isArray(A[L])?A[L]:[A[L]];for(let P=0,C=k.length;P<C;P++){const H=k[P];if(x(H,L,P,N)===!0){const $=H.__offset,ne=Array.isArray(H.value)?H.value:[H.value];let ue=0;for(let he=0;he<ne.length;he++){const K=ne[he],se=T(K);typeof K=="number"||typeof K=="boolean"?(H.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,$+ue,H.__data)):K.isMatrix3?(H.__data[0]=K.elements[0],H.__data[1]=K.elements[1],H.__data[2]=K.elements[2],H.__data[3]=0,H.__data[4]=K.elements[3],H.__data[5]=K.elements[4],H.__data[6]=K.elements[5],H.__data[7]=0,H.__data[8]=K.elements[6],H.__data[9]=K.elements[7],H.__data[10]=K.elements[8],H.__data[11]=0):(K.toArray(H.__data,ue),ue+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(D,R,A,N){const L=D.value,F=R+"_"+A;if(N[F]===void 0)return typeof L=="number"||typeof L=="boolean"?N[F]=L:N[F]=L.clone(),!0;{const k=N[F];if(typeof L=="number"||typeof L=="boolean"){if(k!==L)return N[F]=L,!0}else if(k.equals(L)===!1)return k.copy(L),!0}return!1}function E(D){const R=D.uniforms;let A=0;const N=16;for(let F=0,k=R.length;F<k;F++){const P=Array.isArray(R[F])?R[F]:[R[F]];for(let C=0,H=P.length;C<H;C++){const $=P[C],ne=Array.isArray($.value)?$.value:[$.value];for(let ue=0,he=ne.length;ue<he;ue++){const K=ne[ue],se=T(K),z=A%N,ae=z%se.boundary,ee=z+ae;A+=ae,ee!==0&&N-ee<se.storage&&(A+=N-ee),$.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=se.storage}}}const L=A%N;return L>0&&(A+=N-L),D.__size=A,D.__cache={},this}function T(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function S(D){const R=D.target;R.removeEventListener("dispose",S);const A=u.indexOf(R.__bindingPointIndex);u.splice(A,1),n.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function y(){for(const D in o)n.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class KD{constructor(e={}){const{canvas:t=LC(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const D=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=fi;let L=0,F=0,k=null,P=-1,C=null;const H=new rn,$=new rn;let ne=null;const ue=new Ut(0);let he=0,K=t.width,se=t.height,z=1,ae=null,ee=null;const O=new rn(0,0,K,se),re=new rn(0,0,K,se);let ye=!1;const be=new wx;let Re=!1,Z=!1;const ce=new fn,pe=new te,Ie=new rn,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Ht(){return k===null?z:1}let B=r;function At(b,j){return t.getContext(b,j)}try{const b={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sp}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",xe,!1),B===null){const j="webgl2";if(B=At(j,b),B===null)throw At(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ft,tt,Ge,Pt,Be,ut,kt,_t,I,w,q,de,ge,fe,Ke,Ee,We,Xe,Te,Ne,nt,Ye,Le,lt;function G(){ft=new o2(B),ft.init(),Ye=new HD(B,ft),tt=new JP(B,ft,e,Ye),Ge=new zD(B,ft),tt.reversedDepthBuffer&&v&&Ge.buffers.depth.setReversed(!0),Pt=new u2(B),Be=new CD,ut=new VD(B,ft,Ge,Be,tt,Ye,Pt),kt=new t2(A),_t=new s2(A),I=new mR(B),Le=new ZP(B,I),w=new a2(B,I,Pt,Le),q=new f2(B,w,I,Pt),Te=new c2(B,tt,ut),Ee=new e2(Be),de=new AD(A,kt,_t,ft,tt,Le,Ee),ge=new qD(A,Be),fe=new bD,Ke=new UD(ft),Xe=new KP(A,kt,_t,Ge,q,x,d),We=new kD(A,q,tt),lt=new $D(B,Pt,tt,Ge),Ne=new QP(B,ft,Pt),nt=new l2(B,ft,Pt),Pt.programs=de.programs,A.capabilities=tt,A.extensions=ft,A.properties=Be,A.renderLists=fe,A.shadowMap=We,A.state=Ge,A.info=Pt}G();const Me=new jD(A,B);this.xr=Me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(K,se,!1))},this.getSize=function(b){return b.set(K,se)},this.setSize=function(b,j,oe=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,se=j,t.width=Math.floor(b*z),t.height=Math.floor(j*z),oe===!0&&(t.style.width=b+"px",t.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(K*z,se*z).floor()},this.setDrawingBufferSize=function(b,j,oe){K=b,se=j,z=oe,t.width=Math.floor(b*oe),t.height=Math.floor(j*oe),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,j,oe,le){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,j,oe,le),Ge.viewport(H.copy(O).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,j,oe,le){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,j,oe,le),Ge.scissor($.copy(re).multiplyScalar(z).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){Ge.setScissorTest(ye=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(b=!0,j=!0,oe=!0){let le=0;if(b){let X=!1;if(k!==null){const we=k.texture.format;X=we===Cp||we===Ap||we===wp}if(X){const we=k.texture.type,Ue=we===fr||we===Cs||we===Da||we===La||we===Mp||we===Tp,qe=Xe.getClearColor(),Ve=Xe.getClearAlpha(),ot=qe.r,at=qe.g,et=qe.b;Ue?(E[0]=ot,E[1]=at,E[2]=et,E[3]=Ve,B.clearBufferuiv(B.COLOR,0,E)):(T[0]=ot,T[1]=at,T[2]=et,T[3]=Ve,B.clearBufferiv(B.COLOR,0,T))}else le|=B.COLOR_BUFFER_BIT}j&&(le|=B.DEPTH_BUFFER_BIT),oe&&(le|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Xe.dispose(),fe.dispose(),Ke.dispose(),Be.dispose(),kt.dispose(),_t.dispose(),q.dispose(),Le.dispose(),lt.dispose(),de.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",It),Me.removeEventListener("sessionend",mi),Wt.stop()};function Ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const b=Pt.autoReset,j=We.enabled,oe=We.autoUpdate,le=We.needsUpdate,X=We.type;G(),Pt.autoReset=b,We.enabled=j,We.autoUpdate=oe,We.needsUpdate=le,We.type=X}function xe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function J(b){const j=b.target;j.removeEventListener("dispose",J),Pe(j)}function Pe(b){Ze(b),Be.remove(b)}function Ze(b){const j=Be.get(b).programs;j!==void 0&&(j.forEach(function(oe){de.releaseProgram(oe)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,oe,le,X,we){j===null&&(j=ke);const Ue=X.isMesh&&X.matrixWorld.determinant()<0,qe=ji(b,j,oe,le,X);Ge.setMaterial(le,Ue);let Ve=oe.index,ot=1;if(le.wireframe===!0){if(Ve=w.getWireframeAttribute(oe),Ve===void 0)return;ot=2}const at=oe.drawRange,et=oe.attributes.position;let dt=at.start*ot,Lt=(at.start+at.count)*ot;we!==null&&(dt=Math.max(dt,we.start*ot),Lt=Math.min(Lt,(we.start+we.count)*ot)),Ve!==null?(dt=Math.max(dt,0),Lt=Math.min(Lt,Ve.count)):et!=null&&(dt=Math.max(dt,0),Lt=Math.min(Lt,et.count));const Tt=Lt-dt;if(Tt<0||Tt===1/0)return;Le.setup(X,le,qe,oe,Ve);let Bt,Nt=Ne;if(Ve!==null&&(Bt=I.get(Ve),Nt=nt,Nt.setIndex(Bt)),X.isMesh)le.wireframe===!0?(Ge.setLineWidth(le.wireframeLinewidth*Ht()),Nt.setMode(B.LINES)):Nt.setMode(B.TRIANGLES);else if(X.isLine){let it=le.linewidth;it===void 0&&(it=1),Ge.setLineWidth(it*Ht()),X.isLineSegments?Nt.setMode(B.LINES):X.isLineLoop?Nt.setMode(B.LINE_LOOP):Nt.setMode(B.LINE_STRIP)}else X.isPoints?Nt.setMode(B.POINTS):X.isSprite&&Nt.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ua("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Nt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const it=X._multiDrawStarts,Ft=X._multiDrawCounts,St=X._multiDrawCount,ln=Ve?I.get(Ve).bytesPerElement:1,vi=Be.get(le).currentProgram.getUniforms();for(let Ln=0;Ln<St;Ln++)vi.setValue(B,"_gl_DrawID",Ln),Nt.render(it[Ln]/ln,Ft[Ln])}else if(X.isInstancedMesh)Nt.renderInstances(dt,Tt,X.count);else if(oe.isInstancedBufferGeometry){const it=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ft=Math.min(oe.instanceCount,it);Nt.renderInstances(dt,Tt,Ft)}else Nt.render(dt,Tt)};function mt(b,j,oe){b.transparent===!0&&b.side===ki&&b.forceSinglePass===!1?(b.side=Yn,b.needsUpdate=!0,Ps(b,j,oe),b.side=Xr,b.needsUpdate=!0,Ps(b,j,oe),b.side=ki):Ps(b,j,oe)}this.compile=function(b,j,oe=null){oe===null&&(oe=b),y=Ke.get(oe),y.init(j),R.push(y),oe.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),b!==oe&&b.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const le=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let Ue=0;Ue<we.length;Ue++){const qe=we[Ue];mt(qe,oe,X),le.add(qe)}else mt(we,oe,X),le.add(we)}),y=R.pop(),le},this.compileAsync=function(b,j,oe=null){const le=this.compile(b,j,oe);return new Promise(X=>{function we(){if(le.forEach(function(Ue){Be.get(Ue).currentProgram.isReady()&&le.delete(Ue)}),le.size===0){X(b);return}setTimeout(we,10)}ft.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let yt=null;function Dt(b){yt&&yt(b)}function It(){Wt.stop()}function mi(){Wt.start()}const Wt=new Rx;Wt.setAnimationLoop(Dt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(b){yt=b,Me.setAnimationLoop(b),b===null?Wt.stop():Wt.start()},Me.addEventListener("sessionstart",It),Me.addEventListener("sessionend",mi),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(j),j=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,j,k),y=Ke.get(b,R.length),y.init(j),R.push(y),ce.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),be.setFromProjectionMatrix(ce,zi,j.reversedDepth),Z=this.localClippingEnabled,Re=Ee.init(this.clippingPlanes,Z),S=fe.get(b,D.length),S.init(),D.push(S),Me.enabled===!0&&Me.isPresenting===!0){const we=A.xr.getDepthSensingMesh();we!==null&&_n(we,j,-1/0,A.sortObjects)}_n(b,j,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(ae,ee),pt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,pt&&Xe.addToRenderList(S,b),this.info.render.frame++,Re===!0&&Ee.beginShadows();const oe=y.state.shadowsArray;We.render(oe,b,j),Re===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=S.opaque,X=S.transmissive;if(y.setupLights(),j.isArrayCamera){const we=j.cameras;if(X.length>0)for(let Ue=0,qe=we.length;Ue<qe;Ue++){const Ve=we[Ue];Dn(le,X,b,Ve)}pt&&Xe.render(b);for(let Ue=0,qe=we.length;Ue<qe;Ue++){const Ve=we[Ue];gi(S,b,Ve,Ve.viewport)}}else X.length>0&&Dn(le,X,b,j),pt&&Xe.render(b),gi(S,b,j);k!==null&&F===0&&(ut.updateMultisampleRenderTarget(k),ut.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(A,b,j),Le.resetDefaultState(),P=-1,C=null,R.pop(),R.length>0?(y=R[R.length-1],Re===!0&&Ee.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function _n(b,j,oe,le){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)oe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||be.intersectsSprite(b)){le&&Ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);const Ue=q.update(b),qe=b.material;qe.visible&&S.push(b,Ue,qe,oe,Ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||be.intersectsObject(b))){const Ue=q.update(b),qe=b.material;if(le&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ie.copy(b.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ie.copy(Ue.boundingSphere.center)),Ie.applyMatrix4(b.matrixWorld).applyMatrix4(ce)),Array.isArray(qe)){const Ve=Ue.groups;for(let ot=0,at=Ve.length;ot<at;ot++){const et=Ve[ot],dt=qe[et.materialIndex];dt&&dt.visible&&S.push(b,Ue,dt,oe,Ie.z,et)}}else qe.visible&&S.push(b,Ue,qe,oe,Ie.z,null)}}const we=b.children;for(let Ue=0,qe=we.length;Ue<qe;Ue++)_n(we[Ue],j,oe,le)}function gi(b,j,oe,le){const X=b.opaque,we=b.transmissive,Ue=b.transparent;y.setupLightsView(oe),Re===!0&&Ee.setGlobalState(A.clippingPlanes,oe),le&&Ge.viewport(H.copy(le)),X.length>0&&Di(X,j,oe),we.length>0&&Di(we,j,oe),Ue.length>0&&Di(Ue,j,oe),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Dn(b,j,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[le.id]===void 0&&(y.state.transmissionRenderTarget[le.id]=new Rs(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?za:fr,minFilter:Ms,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const we=y.state.transmissionRenderTarget[le.id],Ue=le.viewport||H;we.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);const qe=A.getRenderTarget(),Ve=A.getActiveCubeFace(),ot=A.getActiveMipmapLevel();A.setRenderTarget(we),A.getClearColor(ue),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),pt&&Xe.render(oe);const at=A.toneMapping;A.toneMapping=Hr;const et=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),y.setupLightsView(le),Re===!0&&Ee.setGlobalState(A.clippingPlanes,le),Di(b,oe,le),ut.updateMultisampleRenderTarget(we),ut.updateRenderTargetMipmap(we),ft.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Lt=0,Tt=j.length;Lt<Tt;Lt++){const Bt=j[Lt],Nt=Bt.object,it=Bt.geometry,Ft=Bt.material,St=Bt.group;if(Ft.side===ki&&Nt.layers.test(le.layers)){const ln=Ft.side;Ft.side=Yn,Ft.needsUpdate=!0,bs(Nt,oe,le,it,Ft,St),Ft.side=ln,Ft.needsUpdate=!0,dt=!0}}dt===!0&&(ut.updateMultisampleRenderTarget(we),ut.updateRenderTargetMipmap(we))}A.setRenderTarget(qe,Ve,ot),A.setClearColor(ue,he),et!==void 0&&(le.viewport=et),A.toneMapping=at}function Di(b,j,oe){const le=j.isScene===!0?j.overrideMaterial:null;for(let X=0,we=b.length;X<we;X++){const Ue=b[X],qe=Ue.object,Ve=Ue.geometry,ot=Ue.group;let at=Ue.material;at.allowOverride===!0&&le!==null&&(at=le),qe.layers.test(oe.layers)&&bs(qe,j,oe,Ve,at,ot)}}function bs(b,j,oe,le,X,we){b.onBeforeRender(A,j,oe,le,X,we),b.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(A,j,oe,le,b,we),X.transparent===!0&&X.side===ki&&X.forceSinglePass===!1?(X.side=Yn,X.needsUpdate=!0,A.renderBufferDirect(oe,j,le,X,b,we),X.side=Xr,X.needsUpdate=!0,A.renderBufferDirect(oe,j,le,X,b,we),X.side=ki):A.renderBufferDirect(oe,j,le,X,b,we),b.onAfterRender(A,j,oe,le,X,we)}function Ps(b,j,oe){j.isScene!==!0&&(j=ke);const le=Be.get(b),X=y.state.lights,we=y.state.shadowsArray,Ue=X.state.version,qe=de.getParameters(b,X.state,we,j,oe),Ve=de.getProgramCacheKey(qe);let ot=le.programs;le.environment=b.isMeshStandardMaterial?j.environment:null,le.fog=j.fog,le.envMap=(b.isMeshStandardMaterial?_t:kt).get(b.envMap||le.environment),le.envMapRotation=le.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,ot===void 0&&(b.addEventListener("dispose",J),ot=new Map,le.programs=ot);let at=ot.get(Ve);if(at!==void 0){if(le.currentProgram===at&&le.lightsStateVersion===Ue)return Ya(b,qe),at}else qe.uniforms=de.getUniforms(b),b.onBeforeCompile(qe,A),at=de.acquireProgram(qe,Ve),ot.set(Ve,at),le.uniforms=qe.uniforms;const et=le.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(et.clippingPlanes=Ee.uniform),Ya(b,qe),le.needsLights=$a(b),le.lightsStateVersion=Ue,le.needsLights&&(et.ambientLightColor.value=X.state.ambient,et.lightProbe.value=X.state.probe,et.directionalLights.value=X.state.directional,et.directionalLightShadows.value=X.state.directionalShadow,et.spotLights.value=X.state.spot,et.spotLightShadows.value=X.state.spotShadow,et.rectAreaLights.value=X.state.rectArea,et.ltc_1.value=X.state.rectAreaLTC1,et.ltc_2.value=X.state.rectAreaLTC2,et.pointLights.value=X.state.point,et.pointLightShadows.value=X.state.pointShadow,et.hemisphereLights.value=X.state.hemi,et.directionalShadowMap.value=X.state.directionalShadowMap,et.directionalShadowMatrix.value=X.state.directionalShadowMatrix,et.spotShadowMap.value=X.state.spotShadowMap,et.spotLightMatrix.value=X.state.spotLightMatrix,et.spotLightMap.value=X.state.spotLightMap,et.pointShadowMap.value=X.state.pointShadowMap,et.pointShadowMatrix.value=X.state.pointShadowMatrix),le.currentProgram=at,le.uniformsList=null,at}function ja(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=Uu.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function Ya(b,j){const oe=Be.get(b);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function ji(b,j,oe,le,X){j.isScene!==!0&&(j=ke),ut.resetTextureUnits();const we=j.fog,Ue=le.isMeshStandardMaterial?j.environment:null,qe=k===null?A.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Co,Ve=(le.isMeshStandardMaterial?_t:kt).get(le.envMap||Ue),ot=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,at=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),et=!!oe.morphAttributes.position,dt=!!oe.morphAttributes.normal,Lt=!!oe.morphAttributes.color;let Tt=Hr;le.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Tt=A.toneMapping);const Bt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Nt=Bt!==void 0?Bt.length:0,it=Be.get(le),Ft=y.state.lights;if(Re===!0&&(Z===!0||b!==C)){const en=b===C&&le.id===P;Ee.setState(le,b,en)}let St=!1;le.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Ft.state.version||it.outputColorSpace!==qe||X.isBatchedMesh&&it.batching===!1||!X.isBatchedMesh&&it.batching===!0||X.isBatchedMesh&&it.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&it.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&it.instancing===!1||!X.isInstancedMesh&&it.instancing===!0||X.isSkinnedMesh&&it.skinning===!1||!X.isSkinnedMesh&&it.skinning===!0||X.isInstancedMesh&&it.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&it.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&it.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&it.instancingMorph===!1&&X.morphTexture!==null||it.envMap!==Ve||le.fog===!0&&it.fog!==we||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Ee.numPlanes||it.numIntersection!==Ee.numIntersection)||it.vertexAlphas!==ot||it.vertexTangents!==at||it.morphTargets!==et||it.morphNormals!==dt||it.morphColors!==Lt||it.toneMapping!==Tt||it.morphTargetsCount!==Nt)&&(St=!0):(St=!0,it.__version=le.version);let ln=it.currentProgram;St===!0&&(ln=Ps(le,j,X));let vi=!1,Ln=!1,qr=!1;const zt=ln.getUniforms(),In=it.uniforms;if(Ge.useProgram(ln.program)&&(vi=!0,Ln=!0,qr=!0),le.id!==P&&(P=le.id,Ln=!0),vi||C!==b){Ge.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),zt.setValue(B,"projectionMatrix",b.projectionMatrix),zt.setValue(B,"viewMatrix",b.matrixWorldInverse);const Mn=zt.map.cameraPosition;Mn!==void 0&&Mn.setValue(B,pe.setFromMatrixPosition(b.matrixWorld)),tt.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&zt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,Ln=!0,qr=!0)}if(X.isSkinnedMesh){zt.setOptional(B,X,"bindMatrix"),zt.setOptional(B,X,"bindMatrixInverse");const en=X.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),zt.setValue(B,"boneTexture",en.boneTexture,ut))}X.isBatchedMesh&&(zt.setOptional(B,X,"batchingTexture"),zt.setValue(B,"batchingTexture",X._matricesTexture,ut),zt.setOptional(B,X,"batchingIdTexture"),zt.setValue(B,"batchingIdTexture",X._indirectTexture,ut),zt.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&zt.setValue(B,"batchingColorTexture",X._colorsTexture,ut));const En=oe.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Te.update(X,oe,ln),(Ln||it.receiveShadow!==X.receiveShadow)&&(it.receiveShadow=X.receiveShadow,zt.setValue(B,"receiveShadow",X.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(In.envMap.value=Ve,In.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&j.environment!==null&&(In.envMapIntensity.value=j.environmentIntensity),Ln&&(zt.setValue(B,"toneMappingExposure",A.toneMappingExposure),it.needsLights&&qa(In,qr),we&&le.fog===!0&&ge.refreshFogUniforms(In,we),ge.refreshMaterialUniforms(In,le,z,se,y.state.transmissionRenderTarget[b.id]),Uu.upload(B,ja(it),In,ut)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Uu.upload(B,ja(it),In,ut),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&zt.setValue(B,"center",X.center),zt.setValue(B,"modelViewMatrix",X.modelViewMatrix),zt.setValue(B,"normalMatrix",X.normalMatrix),zt.setValue(B,"modelMatrix",X.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const en=le.uniformsGroups;for(let Mn=0,$r=en.length;Mn<$r;Mn++){const Et=en[Mn];lt.update(Et,ln),lt.bind(Et,ln)}}return ln}function qa(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function $a(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,j,oe){const le=Be.get(b);le.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Be.get(b.texture).__webglTexture=j,Be.get(b.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:oe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,j){const oe=Be.get(b);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0};const Zu=B.createFramebuffer();this.setRenderTarget=function(b,j=0,oe=0){k=b,L=j,F=oe;let le=!0,X=null,we=!1,Ue=!1;if(b){const Ve=Be.get(b);if(Ve.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(B.FRAMEBUFFER,null),le=!1;else if(Ve.__webglFramebuffer===void 0)ut.setupRenderTarget(b);else if(Ve.__hasExternalTextures)ut.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const et=b.depthTexture;if(Ve.__boundDepthTexture!==et){if(et!==null&&Be.has(et)&&(b.width!==et.image.width||b.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(b)}}const ot=b.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ue=!0);const at=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(at[j])?X=at[j][oe]:X=at[j],we=!0):b.samples>0&&ut.useMultisampledRTT(b)===!1?X=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(at)?X=at[oe]:X=at,H.copy(b.viewport),$.copy(b.scissor),ne=b.scissorTest}else H.copy(O).multiplyScalar(z).floor(),$.copy(re).multiplyScalar(z).floor(),ne=ye;if(oe!==0&&(X=Zu),Ge.bindFramebuffer(B.FRAMEBUFFER,X)&&le&&Ge.drawBuffers(b,X),Ge.viewport(H),Ge.scissor($),Ge.setScissorTest(ne),we){const Ve=Be.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ve.__webglTexture,oe)}else if(Ue){const Ve=j;for(let ot=0;ot<b.textures.length;ot++){const at=Be.get(b.textures[ot]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ot,at.__webglTexture,oe,Ve)}}else if(b!==null&&oe!==0){const Ve=Be.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ve.__webglTexture,oe)}P=-1},this.readRenderTargetPixels=function(b,j,oe,le,X,we,Ue,qe=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){Ge.bindFramebuffer(B.FRAMEBUFFER,Ve);try{const ot=b.textures[qe],at=ot.format,et=ot.type;if(!tt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-le&&oe>=0&&oe<=b.height-X&&(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+qe),B.readPixels(j,oe,le,X,Ye.convert(at),Ye.convert(et),we))}finally{const ot=k!==null?Be.get(k).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(b,j,oe,le,X,we,Ue,qe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve)if(j>=0&&j<=b.width-le&&oe>=0&&oe<=b.height-X){Ge.bindFramebuffer(B.FRAMEBUFFER,Ve);const ot=b.textures[qe],at=ot.format,et=ot.type;if(!tt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+qe),B.readPixels(j,oe,le,X,Ye.convert(at),Ye.convert(et),0);const Lt=k!==null?Be.get(k).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,Lt);const Tt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await IC(B,Tt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.deleteBuffer(dt),B.deleteSync(Tt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,j=null,oe=0){const le=Math.pow(2,-oe),X=Math.floor(b.image.width*le),we=Math.floor(b.image.height*le),Ue=j!==null?j.x:0,qe=j!==null?j.y:0;ut.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,oe,0,0,Ue,qe,X,we),Ge.unbindTexture()};const Ka=B.createFramebuffer(),Za=B.createFramebuffer();this.copyTextureToTexture=function(b,j,oe=null,le=null,X=0,we=null){we===null&&(X!==0?(Ua("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=X,X=0):we=0);let Ue,qe,Ve,ot,at,et,dt,Lt,Tt;const Bt=b.isCompressedTexture?b.mipmaps[we]:b.image;if(oe!==null)Ue=oe.max.x-oe.min.x,qe=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,ot=oe.min.x,at=oe.min.y,et=oe.isBox3?oe.min.z:0;else{const En=Math.pow(2,-X);Ue=Math.floor(Bt.width*En),qe=Math.floor(Bt.height*En),b.isDataArrayTexture?Ve=Bt.depth:b.isData3DTexture?Ve=Math.floor(Bt.depth*En):Ve=1,ot=0,at=0,et=0}le!==null?(dt=le.x,Lt=le.y,Tt=le.z):(dt=0,Lt=0,Tt=0);const Nt=Ye.convert(j.format),it=Ye.convert(j.type);let Ft;j.isData3DTexture?(ut.setTexture3D(j,0),Ft=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ut.setTexture2DArray(j,0),Ft=B.TEXTURE_2D_ARRAY):(ut.setTexture2D(j,0),Ft=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const St=B.getParameter(B.UNPACK_ROW_LENGTH),ln=B.getParameter(B.UNPACK_IMAGE_HEIGHT),vi=B.getParameter(B.UNPACK_SKIP_PIXELS),Ln=B.getParameter(B.UNPACK_SKIP_ROWS),qr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Bt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ot),B.pixelStorei(B.UNPACK_SKIP_ROWS,at),B.pixelStorei(B.UNPACK_SKIP_IMAGES,et);const zt=b.isDataArrayTexture||b.isData3DTexture,In=j.isDataArrayTexture||j.isData3DTexture;if(b.isDepthTexture){const En=Be.get(b),en=Be.get(j),Mn=Be.get(En.__renderTarget),$r=Be.get(en.__renderTarget);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let Et=0;Et<Ve;Et++)zt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(b).__webglTexture,X,et+Et),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(j).__webglTexture,we,Tt+Et)),B.blitFramebuffer(ot,at,Ue,qe,dt,Lt,Ue,qe,B.DEPTH_BUFFER_BIT,B.NEAREST);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Be.has(b)){const En=Be.get(b),en=Be.get(j);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,Ka),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Za);for(let Mn=0;Mn<Ve;Mn++)zt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,En.__webglTexture,X,et+Mn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,En.__webglTexture,X),In?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,en.__webglTexture,we,Tt+Mn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,en.__webglTexture,we),X!==0?B.blitFramebuffer(ot,at,Ue,qe,dt,Lt,Ue,qe,B.COLOR_BUFFER_BIT,B.NEAREST):In?B.copyTexSubImage3D(Ft,we,dt,Lt,Tt+Mn,ot,at,Ue,qe):B.copyTexSubImage2D(Ft,we,dt,Lt,ot,at,Ue,qe);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else In?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Ft,we,dt,Lt,Tt,Ue,qe,Ve,Nt,it,Bt.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Ft,we,dt,Lt,Tt,Ue,qe,Ve,Nt,Bt.data):B.texSubImage3D(Ft,we,dt,Lt,Tt,Ue,qe,Ve,Nt,it,Bt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,we,dt,Lt,Ue,qe,Nt,it,Bt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,we,dt,Lt,Bt.width,Bt.height,Nt,Bt.data):B.texSubImage2D(B.TEXTURE_2D,we,dt,Lt,Ue,qe,Nt,it,Bt);B.pixelStorei(B.UNPACK_ROW_LENGTH,St),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ln),B.pixelStorei(B.UNPACK_SKIP_PIXELS,vi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ln),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qr),we===0&&j.generateMipmaps&&B.generateMipmap(Ft),Ge.unbindTexture()},this.initRenderTarget=function(b){Be.get(b).__webglFramebuffer===void 0&&ut.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ut.setTextureCube(b,0):b.isData3DTexture?ut.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ut.setTexture2DArray(b,0):ut.setTexture2D(b,0),Ge.unbindTexture()},this.resetState=function(){L=0,F=0,k=null,Ge.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}function ZD(){const n=Oe.useRef(null);return Oe.useEffect(()=>{console.log("Initializing Three.js canvas");const e={backgroundColor:16448250,cameraFOV:70,cameraDistance:1.8,bubbleSize:.9,bubbleDetail:128,speed1:.1,frequency1:1,intensity1:.1,speed2:.2,frequency2:1,intensity2:.05,speed3:.2,frequency3:2,intensity3:.02,glassColorR:.12,glassColorG:.11,glassColorB:.19,topColorR:.55,topColorG:1,topColorB:1,bottomColorR:.8,bottomColorG:.2,bottomColorB:.5,fresnelPower:3,fresnelBlend:.8,highlightPower:50,highlightIntensity:.5,baseTransparency:.1,edgeTransparency:.6,mouseLerpSpeed:.2,mouseInfluenceStrength:1,mouseBlendAmount:.6,mouseColorIntensity:.6};let t,r,o,l,u;const c=new hR,d={x:0,y:0};let h=!1;const m=n.current;if(!m){console.error("Mount ref is null");return}const p=window.innerWidth,v=Math.min(Math.max(300,p*.8),600),x=v,E=v;t=new sR,t.background=new Ut(e.backgroundColor),r=new di(e.cameraFOV,x/E,.1,1e3),r.position.z=e.cameraDistance,o=new KD({antialias:!0,alpha:!0}),o.setSize(x,E),o.setPixelRatio(window.devicePixelRatio),m.appendChild(o.domElement);const T=`
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      uniform float time;

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

          // Apply three layers of noise using config parameters
          float noise = snoise(pos * frequency1 + time * speed1) * intensity1;
          noise += snoise(pos * frequency2 - time * speed2) * intensity2;
          noise += snoise(pos * frequency3 + time * speed3) * intensity3;

          pos += normal * noise;

          vPosition = pos;
          vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
          vWorldPosition = worldPosition.xyz;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,S=`
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

          // Mouse influence - always active when mouse is present
          float mouseInfluence = mouseInfluenceStrength;

          // Create color variation based on mouse position
          vec3 mouseColor1 = vec3(
              0.4 + mousePos.x * mouseColorIntensity,
              0.6 + mousePos.y * mouseColorIntensity,
              0.9
          );
          vec3 mouseColor2 = vec3(
              0.9,
              0.3 + mousePos.x * mouseColorIntensity,
              0.5 + mousePos.y * mouseColorIntensity
          );

          // Gradient using config colors with mouse influence
          float gradient = (vPosition.y + 1.0) * 0.5;
          vec3 baseGradient = mix(bottomColor, topColor, gradient);

          // Mix in mouse-influenced colors
          vec3 mouseGradient = mix(mouseColor1, mouseColor2, gradient);
          vec3 gradientColor = mix(baseGradient, mouseGradient, mouseInfluence * mouseBlendAmount);

          // Blend with fresnel
          vec3 color = mix(gradientColor, vec3(1.0), fresnel * fresnelBlend);

          // Specular highlight using config parameters
          float highlight = pow(max(dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))), 0.0), highlightPower);
          color += vec3(1.0) * highlight * highlightIntensity;

          // Transparency using config parameters
          float alpha = baseTransparency + fresnel * edgeTransparency;

          gl_FragColor = vec4(color, alpha);
      }
    `;l=new hr({vertexShader:T,fragmentShader:S,uniforms:{time:{value:0},mousePos:{value:new bt(0,0)},speed1:{value:e.speed1},frequency1:{value:e.frequency1},intensity1:{value:e.intensity1},speed2:{value:e.speed2},frequency2:{value:e.frequency2},intensity2:{value:e.intensity2},speed3:{value:e.speed3},frequency3:{value:e.frequency3},intensity3:{value:e.intensity3},glassColor:{value:new te(e.glassColorR,e.glassColorG,e.glassColorB)},topColor:{value:new te(e.topColorR,e.topColorG,e.topColorB)},bottomColor:{value:new te(e.bottomColorR,e.bottomColorG,e.bottomColorB)},fresnelPower:{value:e.fresnelPower},fresnelBlend:{value:e.fresnelBlend},highlightPower:{value:e.highlightPower},highlightIntensity:{value:e.highlightIntensity},baseTransparency:{value:e.baseTransparency},edgeTransparency:{value:e.edgeTransparency},mouseInfluenceStrength:{value:e.mouseInfluenceStrength},mouseBlendAmount:{value:e.mouseBlendAmount},mouseColorIntensity:{value:e.mouseColorIntensity}},transparent:!0,side:ki,blending:As});const y=new Dp(e.bubbleSize,e.bubbleDetail);u=new Vi(y,l),t.add(u),console.log("Mesh created:",u),console.log("Scene:",t),console.log("Camera position:",r.position);const D=document.getElementById("home");if(!D){console.error("Hero section not found");return}function R(P){if(!h)return;const C=D.getBoundingClientRect();d.x=(P.clientX-C.left)/C.width*2-1,d.y=-((P.clientY-C.top)/C.height)*2+1}function A(){h=!0}function N(){h=!1,d.x=0,d.y=0}D.addEventListener("mousemove",R),D.addEventListener("mouseenter",A),D.addEventListener("mouseleave",N);function L(){const P=window.innerWidth,C=Math.min(Math.max(300,P*.8),600);r.aspect=1,r.updateProjectionMatrix(),o.setSize(C,C)}window.addEventListener("resize",L);let F=!1;function k(){if(F)return;requestAnimationFrame(k);const P=c.getElapsedTime();l.uniforms.time.value=P,l.uniforms.mousePos.value.x+=(d.x-l.uniforms.mousePos.value.x)*e.mouseLerpSpeed,l.uniforms.mousePos.value.y+=(d.y-l.uniforms.mousePos.value.y)*e.mouseLerpSpeed,o.render(t,r)}return k(),()=>{F=!0,window.removeEventListener("resize",L),D&&(D.removeEventListener("mousemove",R),D.removeEventListener("mouseenter",A),D.removeEventListener("mouseleave",N)),m.removeChild(o.domElement),o.dispose(),y.dispose(),l.dispose()}},[]),me.jsx("div",{ref:n,className:"three-canvas","aria-label":"Three.js Canvas"})}function QD(){const n=Oe.useRef(null),e=()=>{window.history.pushState({route:"home",section:"#work"},"","/#work");const t=document.querySelector("#work");t&&t.scrollIntoView({behavior:"smooth"})};return me.jsxs("section",{ref:n,id:"home",className:"hero-section",children:[me.jsx("div",{className:"canvas-container",children:me.jsx(ZD,{})}),me.jsx("div",{className:"hero-content-wrapper",children:me.jsx("div",{className:"hero-content-center",children:me.jsx("div",{className:"hero-content",children:me.jsxs(Vt.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[me.jsx(Vt.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},className:"hero-title",children:xp.NAME}),me.jsx(Vt.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},className:"hero-description",children:"A Senior Product Designer from Santiago, Chile –– creating user-friendly solutions for digital products."}),me.jsx(Vt.button,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},onClick:e,whileHover:{y:-2},whileTap:{scale:.98},className:"hero-button",children:"View Work"})]})})})}),me.jsx(Vt.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1.5},className:"hero-scroll-indicator",children:me.jsx(Vt.div,{animate:{y:[0,4,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},children:me.jsxs("svg",{width:"20",height:"32",viewBox:"0 0 20 32",fill:"none",className:"hero-scroll-icon",children:[me.jsx("rect",{x:"1",y:"1",width:"18",height:"26",rx:"9",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),me.jsx(Vt.rect,{x:"8.5",y:"6",width:"3",height:"6",rx:"1.5",fill:"currentColor",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0,ease:"easeInOut"}}),me.jsx(Vt.line,{x1:"10",y1:"30",x2:"10",y2:"31",stroke:"currentColor",strokeWidth:"1.5",animate:{opacity:[.3,.8,.3]},transition:{duration:2,repeat:1/0,ease:"easeInOut",delay:.2}})]})})})]})}function JD(){const{navigateTo:n}=Ux(),e=Oe.useRef(null),t=_p(e,{once:!0,margin:"-100px"});return me.jsx("section",{id:"work",className:"work-section",ref:e,children:me.jsxs(Vt.div,{initial:{opacity:0,y:40},animate:t?{opacity:1,y:0}:{},transition:{duration:.6},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",padding:"4rem 2rem",textAlign:"center"},children:[me.jsx(Vt.h2,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.6,delay:.2},style:{fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:700,marginBottom:"1rem",color:"var(--foreground)"},children:"Case Studies Coming Soon"}),me.jsx(Vt.p,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.6,delay:.4},style:{fontSize:"clamp(1rem, 2vw, 1.25rem)",color:"var(--muted-foreground)",maxWidth:"600px",lineHeight:1.6},children:"I'm currently finalizing detailed case studies of my work. Check back soon for in-depth breakdowns of projects and more."})]})})}function eL(){const n=Oe.useRef(null),e=_p(n,{once:!0,margin:"-100px"});return me.jsx("section",{id:"about",className:"about-section",children:me.jsx("div",{className:"about-container",children:me.jsxs(Vt.div,{ref:n,initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{},transition:{duration:.8},children:[me.jsx("h2",{className:"about-title",children:"About"}),me.jsxs("div",{className:"about-content",children:[me.jsx("p",{children:"I'm a Senior Product Designer from Santiago, Chile, with extensive experience creating user-friendly solutions for digital products. I specialize in design systems, fintech, and transforming complex processes into intuitive experiences."}),me.jsx("p",{children:"My approach focuses on systematic design thinking and cross-functional collaboration. I excel at building scalable design systems from inception and leading design teams to deliver consistent, high-quality user experiences."}),me.jsx("p",{children:"Throughout my career, I've worked across diverse industries including AI platforms, cryptocurrency, cannabis tech, financial services, and insurtech. I'm passionate about making complex technologies accessible and user-friendly."}),me.jsx("p",{children:"I believe in the power of design systems to scale quality and consistency, and I'm always looking for opportunities to mentor other designers and share knowledge within the design community."})]}),me.jsx(Vt.div,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:.4},className:"about-divider",children:me.jsxs("div",{className:"about-grid",children:[me.jsxs("div",{children:[me.jsx("h4",{className:"about-grid-title",children:"Tools"}),me.jsxs("div",{className:"about-grid-content",children:[me.jsx("p",{children:"Figma"}),me.jsx("p",{children:"Sketch"}),me.jsx("p",{children:"Principle"}),me.jsx("p",{children:"Adobe Creative Suite"})]})]}),me.jsxs("div",{children:[me.jsx("h4",{className:"about-grid-title",children:"Skills"}),me.jsxs("div",{className:"about-grid-content",children:[me.jsx("p",{children:"User Research"}),me.jsx("p",{children:"Information Architecture"}),me.jsx("p",{children:"Interaction Design"}),me.jsx("p",{children:"Design Systems"})]})]}),me.jsxs("div",{children:[me.jsx("h4",{className:"about-grid-title",children:"Industries"}),me.jsxs("div",{className:"about-grid-content",children:[me.jsx("p",{children:"AI & Machine Learning"}),me.jsx("p",{children:"Fintech & Crypto"}),me.jsx("p",{children:"Insurtech"}),me.jsx("p",{children:"Financial Services"})]})]})]})})]})})})}const tL=[{name:"Email",href:"mailto:nlundin@gmail.com",description:"nlundin@gmail.com"},{name:"LinkedIn",target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/nicolaslundin",description:"Connect with me"},{name:"Dribbble",target:"_blank",rel:"noopener noreferrer",href:"https://dribbble.com/sirlund",description:"View my work"},{name:"Resume",href:"#",description:"Download PDF"}];function nL(){const n=Oe.useRef(null),e=_p(n,{once:!0,margin:"-100px"});return me.jsx("section",{id:"contact",className:"contact-section",children:me.jsx("div",{className:"contact-container",children:me.jsxs(Vt.div,{ref:n,initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{},transition:{duration:.8},children:[me.jsx("h2",{className:"contact-title",children:"Let's Connect"}),me.jsx("p",{className:"contact-description",children:"I'm always interested in discussing new opportunities, especially those involving design systems, fintech, or complex product challenges. Feel free to reach out if you'd like to work together or just want to chat about design."}),me.jsx("div",{className:"contact-links",children:tL.map((t,r)=>me.jsxs(Vt.a,{href:t.href,target:t.target,rel:t.rel,initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:r*.1},whileHover:{x:10},className:"contact-link",children:[me.jsxs("div",{children:[me.jsx("div",{className:"contact-link-name",children:t.name}),me.jsx("div",{className:"contact-link-description",children:t.description})]}),me.jsx(Vt.div,{whileHover:{scale:1.1},className:"contact-link-icon",children:me.jsx(FA,{size:16})})]},t.name))})]})})})}function iL(){const n=new Date().getFullYear();return me.jsx("footer",{className:"footer",children:me.jsx("div",{className:"footer-container",children:me.jsxs(Vt.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"footer-inner",children:[me.jsxs("div",{className:"footer-copyright",children:["© ",n," ",xp.NAME,". Maybe some rights reserved :)"]}),me.jsxs("div",{className:"footer-links",children:[me.jsx(Vt.a,{href:"https://linkedin.com/in/nicolaslundin",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-2},className:"footer-link",children:"LinkedIn"}),me.jsx(Vt.a,{href:"https://dribbble.com/sirlund",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-2},className:"footer-link",children:"Dribbble"}),me.jsx(Vt.a,{href:"mailto:nlundin@gmail.com",whileHover:{y:-2},className:"footer-link",children:"Email"})]})]})})})}function rL(){const[n,e]=Oe.useState({x:0,y:0}),[t,r]=Oe.useState(!1),[o,l]=Oe.useState(!1),[u,c]=Oe.useState(!1);if(Oe.useEffect(()=>{const m=()=>{const E=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)||window.matchMedia("(hover: none)").matches;c(E),E&&(document.body.style.cursor="",document.documentElement.style.cursor="")};if(m(),window.addEventListener("resize",m),u)return()=>{window.removeEventListener("resize",m)};const p=E=>{e({x:E.clientX,y:E.clientY}),t||r(!0);const T=E.target,S=T.matches('a, button, [role="button"], input, textarea, select, [data-testid], [tabindex="0"]')||T.closest('a, button, [role="button"], input, textarea, select, [data-testid], [tabindex="0"]');l(!!S)},v=()=>{r(!1),l(!1)},x=()=>{r(!0)};return document.addEventListener("mousemove",p),document.addEventListener("mouseleave",v),document.addEventListener("mouseenter",x),document.body.style.cursor="none",document.documentElement.style.cursor="none",()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseleave",v),document.removeEventListener("mouseenter",x),window.removeEventListener("resize",m)}},[t,u]),u||!t)return null;const d=o?48:32,h=d/2;return me.jsx(Vt.div,{className:"custom-cursor",style:{left:n.x-h,top:n.y-h,width:d,height:d,backgroundColor:o?"rgba(0, 0, 0, 0.3)":"white",mixBlendMode:o?"normal":"difference"},animate:{scale:o?[1,1.1,1]:[1,1.05,1],width:d,height:d},transition:{scale:{duration:o?.8:1.5,repeat:1/0,ease:"easeInOut"},width:{type:"spring",stiffness:200,damping:25},height:{type:"spring",stiffness:200,damping:25}}})}const sL="modulepreload",oL=function(n){return"/"+n},x_={},Xa=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");o=u(t.map(h=>{if(h=oL(h),h in x_)return;x_[h]=!0;const m=h.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":sL,m||(v.as="script"),v.crossOrigin="",v.href=h,d&&v.setAttribute("nonce",d),document.head.appendChild(v),m)return new Promise((x,E)=>{v.addEventListener("load",x),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return o.then(u=>{for(const c of u||[])c.status==="rejected"&&l(c.reason);return e().catch(l)})},aL=Oe.lazy(()=>Xa(()=>import("./MindStudioCaseStudy-wNQYuI59.js"),__vite__mapDeps([0,1,2,3]))),lL=Oe.lazy(()=>Xa(()=>import("./WeniaCaseStudy-e-OAv60b.js"),__vite__mapDeps([4,1,2]))),uL=Oe.lazy(()=>Xa(()=>import("./TreezCaseStudy-pObCfczX.js"),__vite__mapDeps([5,1,2,3]))),cL=Oe.lazy(()=>Xa(()=>import("./NacionalCaseStudy-DlCcDo8H.js"),__vite__mapDeps([6,1,2]))),fL=Oe.lazy(()=>Xa(()=>import("./KlareCaseStudy-TWW5a5ms.js"),__vite__mapDeps([7,1,2]))),dL={home:{path:"/",label:"Home"},mindstudio:{path:"/mindstudio",component:aL,label:"MindStudio"},wenia:{path:"/wenia",component:lL,label:"Wenia"},treez:{path:"/treez",component:uL,label:"Treez"},nacional:{path:"/nacional",component:cL,label:"Nacional"},klare:{path:"/klare",component:fL,label:"Klare"}},hL=["mindstudio","wenia","treez","nacional","klare"];function Ix(){const n=window.location.pathname.replace($d,"").replace(/^\//,"");return n===""?"home":hL.includes(n)?n:"home"}function pL(n){return n==="home"?$d:`${$d}${n}`}function Ad(n,e=VA){const t=document.getElementById(n);t&&t.scrollIntoView(e)}function mL(n="smooth"){window.scrollTo({top:0,behavior:n})}function wu(n,e){const t=pL(n),r=e?`${t}#${e}`:t,o=e?{route:n,section:e}:{route:n};window.history.pushState(o,"",r)}function gL(n){const e=t=>{const r=t.state;r&&r.route?n(r.route):n(Ix())};return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}const Nx=Oe.createContext(void 0),Ux=()=>{const n=Oe.useContext(Nx);if(!n)throw new Error("useNavigation must be used within NavigationProvider");return n},vL=()=>me.jsx("div",{className:"loading-container",children:me.jsx("div",{className:"loading-spinner",children:"Loading..."})}),S_=({error:n,resetError:e})=>me.jsxs("div",{className:"error-container",children:[me.jsx("h2",{className:"error-title",children:"Something went wrong"}),me.jsx("p",{className:"error-message",children:n.message||Pu.UNEXPECTED_ERROR}),me.jsx("button",{onClick:e,className:"error-button",children:"Try again"})]});function _L(){const[n,e]=Oe.useState(Ix),[t,r]=Oe.useState(null),o=d=>{try{r(null),e(d),wu(d),mL()}catch(h){r(h instanceof Error?h:new Error(Pu.NAVIGATION_FAILED))}},l=()=>{try{r(null),e("home"),wu("home","work"),setTimeout(()=>Ad("work"),100)}catch(d){r(d instanceof Error?d:new Error(Pu.NAVIGATION_FAILED))}},u=()=>{r(null),e("home"),wu("home")};Oe.useEffect(()=>gL(h=>{e(h);const m=window.location.hash;m&&setTimeout(()=>Ad(m.substring(1)),100)}),[]),Oe.useEffect(()=>{if(n!=="home")return;const d=m=>{m.preventDefault();const v=m.currentTarget.getAttribute("href");if(v){const x=v.substring(1);wu("home",x),Ad(x)}},h=document.querySelectorAll('a[href^="#"]');return h.forEach(m=>m.addEventListener("click",d)),()=>{h.forEach(m=>m.removeEventListener("click",d))}},[n]);const c=()=>{if(n!=="home"){const h=dL[n].component;return h?me.jsx(Oe.Suspense,{fallback:me.jsx(vL,{}),children:me.jsx(h,{})}):me.jsx(S_,{error:new Error(Pu.ROUTE_NOT_FOUND),resetError:u})}return me.jsxs("main",{children:[me.jsx(QD,{}),me.jsx(JD,{}),me.jsx(eL,{}),me.jsx(nL,{})]})};return me.jsx(Nx.Provider,{value:{currentRoute:n,navigateTo:o,navigateToWork:l},children:me.jsxs("div",{className:"app-container",children:[me.jsx(rL,{}),me.jsx(HA,{}),t?me.jsx(S_,{error:t,resetError:u}):c(),me.jsx(iL,{}),me.jsx(ZE,{position:"bottom-right",duration:4e3})]})})}SE.createRoot(document.getElementById("root")).render(me.jsx(_L,{}));export{yp as c,me as j,Vt as m,Oe as r,Ux as u};
