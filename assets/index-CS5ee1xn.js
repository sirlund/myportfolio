const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MindStudioCaseStudy-CoGz1I53.js","assets/CaseStudyLayout-uwxuUcmT.js","assets/WeniaCaseStudy-CJLN1EBg.js","assets/TreezCaseStudy-CciDU8hH.js","assets/NacionalCaseStudy-Cl_eZ7a1.js","assets/KlareCaseStudy-4Gcmq8Dl.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function x_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Rf={exports:{}},da={},bf={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function fM(){if(Qg)return xt;Qg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=p&&O[p]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(O,se,ye){this.props=O,this.context=se,this.refs=T,this.updater=ye||x}S.prototype.isReactComponent={},S.prototype.setState=function(O,se){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,se,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(O,se,ye){this.props=O,this.context=se,this.refs=T,this.updater=ye||x}var C=D.prototype=new y;C.constructor=D,M(C,S.prototype),C.isPureReactComponent=!0;var A=Array.isArray,N=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function k(O,se,ye){var be,Re={},Q=null,fe=null;if(se!=null)for(be in se.ref!==void 0&&(fe=se.ref),se.key!==void 0&&(Q=""+se.key),se)N.call(se,be)&&!F.hasOwnProperty(be)&&(Re[be]=se[be]);var me=arguments.length-2;if(me===1)Re.children=ye;else if(1<me){for(var Ne=Array(me),ke=0;ke<me;ke++)Ne[ke]=arguments[ke+2];Re.children=Ne}if(O&&O.defaultProps)for(be in me=O.defaultProps,me)Re[be]===void 0&&(Re[be]=me[be]);return{$$typeof:n,type:O,key:Q,ref:fe,props:Re,_owner:I.current}}function P(O,se){return{$$typeof:n,type:O.type,key:se,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function H(O){var se={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ye){return se[ye]})}var K=/\/+/g;function ie(O,se){return typeof O=="object"&&O!==null&&O.key!=null?H(""+O.key):se.toString(36)}function ce(O,se,ye,be,Re){var Q=typeof O;(Q==="undefined"||Q==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(Q){case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case n:case e:fe=!0}}if(fe)return fe=O,Re=Re(fe),O=be===""?"."+ie(fe,0):be,A(Re)?(ye="",O!=null&&(ye=O.replace(K,"$&/")+"/"),ce(Re,se,ye,"",function(ke){return ke})):Re!=null&&(R(Re)&&(Re=P(Re,ye+(!Re.key||fe&&fe.key===Re.key?"":(""+Re.key).replace(K,"$&/")+"/")+O)),se.push(Re)),1;if(fe=0,be=be===""?".":be+":",A(O))for(var me=0;me<O.length;me++){Q=O[me];var Ne=be+ie(Q,me);fe+=ce(Q,se,ye,Ne,Re)}else if(Ne=v(O),typeof Ne=="function")for(O=Ne.call(O),me=0;!(Q=O.next()).done;)Q=Q.value,Ne=be+ie(Q,me++),fe+=ce(Q,se,ye,Ne,Re);else if(Q==="object")throw se=String(O),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return fe}function pe(O,se,ye){if(O==null)return O;var be=[],Re=0;return ce(O,be,"","",function(Q){return se.call(ye,Q,Re++)}),be}function Z(O){if(O._status===-1){var se=O._result;se=se(),se.then(function(ye){(O._status===0||O._status===-1)&&(O._status=1,O._result=ye)},function(ye){(O._status===0||O._status===-1)&&(O._status=2,O._result=ye)}),O._status===-1&&(O._status=0,O._result=se)}if(O._status===1)return O._result.default;throw O._result}var oe={current:null},V={transition:null},le={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:V,ReactCurrentOwner:I};function te(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:pe,forEach:function(O,se,ye){pe(O,function(){se.apply(this,arguments)},ye)},count:function(O){var se=0;return pe(O,function(){se++}),se},toArray:function(O){return pe(O,function(se){return se})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xt.Component=S,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=D,xt.StrictMode=r,xt.Suspense=d,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,xt.act=te,xt.cloneElement=function(O,se,ye){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var be=M({},O.props),Re=O.key,Q=O.ref,fe=O._owner;if(se!=null){if(se.ref!==void 0&&(Q=se.ref,fe=I.current),se.key!==void 0&&(Re=""+se.key),O.type&&O.type.defaultProps)var me=O.type.defaultProps;for(Ne in se)N.call(se,Ne)&&!F.hasOwnProperty(Ne)&&(be[Ne]=se[Ne]===void 0&&me!==void 0?me[Ne]:se[Ne])}var Ne=arguments.length-2;if(Ne===1)be.children=ye;else if(1<Ne){me=Array(Ne);for(var ke=0;ke<Ne;ke++)me[ke]=arguments[ke+2];be.children=me}return{$$typeof:n,type:O.type,key:Re,ref:Q,props:be,_owner:fe}},xt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},xt.createElement=k,xt.createFactory=function(O){var se=k.bind(null,O);return se.type=O,se},xt.createRef=function(){return{current:null}},xt.forwardRef=function(O){return{$$typeof:c,render:O}},xt.isValidElement=R,xt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:Z}},xt.memo=function(O,se){return{$$typeof:h,type:O,compare:se===void 0?null:se}},xt.startTransition=function(O){var se=V.transition;V.transition={};try{O()}finally{V.transition=se}},xt.unstable_act=te,xt.useCallback=function(O,se){return oe.current.useCallback(O,se)},xt.useContext=function(O){return oe.current.useContext(O)},xt.useDebugValue=function(){},xt.useDeferredValue=function(O){return oe.current.useDeferredValue(O)},xt.useEffect=function(O,se){return oe.current.useEffect(O,se)},xt.useId=function(){return oe.current.useId()},xt.useImperativeHandle=function(O,se,ye){return oe.current.useImperativeHandle(O,se,ye)},xt.useInsertionEffect=function(O,se){return oe.current.useInsertionEffect(O,se)},xt.useLayoutEffect=function(O,se){return oe.current.useLayoutEffect(O,se)},xt.useMemo=function(O,se){return oe.current.useMemo(O,se)},xt.useReducer=function(O,se,ye){return oe.current.useReducer(O,se,ye)},xt.useRef=function(O){return oe.current.useRef(O)},xt.useState=function(O){return oe.current.useState(O)},xt.useSyncExternalStore=function(O,se,ye){return oe.current.useSyncExternalStore(O,se,ye)},xt.useTransition=function(){return oe.current.useTransition()},xt.version="18.3.1",xt}var Jg;function Oh(){return Jg||(Jg=1,bf.exports=fM()),bf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function dM(){if(e0)return da;e0=1;var n=Oh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var m,p={},v=null,x=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(p[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)p[m]===void 0&&(p[m]=d[m]);return{$$typeof:e,type:c,key:v,ref:x,props:p,_owner:o.current}}return da.Fragment=t,da.jsx=u,da.jsxs=u,da}var t0;function hM(){return t0||(t0=1,Rf.exports=dM()),Rf.exports}var Y=hM(),Jl={},Pf={exports:{}},Gn={},Df={exports:{}},Lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function pM(){return n0||(n0=1,(function(n){function e(V,le){var te=V.length;V.push(le);e:for(;0<te;){var O=te-1>>>1,se=V[O];if(0<o(se,le))V[O]=le,V[te]=se,te=O;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var le=V[0],te=V.pop();if(te!==le){V[0]=te;e:for(var O=0,se=V.length,ye=se>>>1;O<ye;){var be=2*(O+1)-1,Re=V[be],Q=be+1,fe=V[Q];if(0>o(Re,te))Q<se&&0>o(fe,Re)?(V[O]=fe,V[Q]=te,O=Q):(V[O]=Re,V[be]=te,O=be);else if(Q<se&&0>o(fe,te))V[O]=fe,V[Q]=te,O=Q;else break e}}return le}function o(V,le){var te=V.sortIndex-le.sortIndex;return te!==0?te:V.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],m=1,p=null,v=3,x=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(V){for(var le=t(h);le!==null;){if(le.callback===null)r(h);else if(le.startTime<=V)r(h),le.sortIndex=le.expirationTime,e(d,le);else break;le=t(h)}}function A(V){if(T=!1,C(V),!M)if(t(d)!==null)M=!0,Z(N);else{var le=t(h);le!==null&&oe(A,le.startTime-V)}}function N(V,le){M=!1,T&&(T=!1,y(k),k=-1),x=!0;var te=v;try{for(C(le),p=t(d);p!==null&&(!(p.expirationTime>le)||V&&!H());){var O=p.callback;if(typeof O=="function"){p.callback=null,v=p.priorityLevel;var se=O(p.expirationTime<=le);le=n.unstable_now(),typeof se=="function"?p.callback=se:p===t(d)&&r(d),C(le)}else r(d);p=t(d)}if(p!==null)var ye=!0;else{var be=t(h);be!==null&&oe(A,be.startTime-le),ye=!1}return ye}finally{p=null,v=te,x=!1}}var I=!1,F=null,k=-1,P=5,R=-1;function H(){return!(n.unstable_now()-R<P)}function K(){if(F!==null){var V=n.unstable_now();R=V;var le=!0;try{le=F(!0,V)}finally{le?ie():(I=!1,F=null)}}else I=!1}var ie;if(typeof D=="function")ie=function(){D(K)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=K,ie=function(){pe.postMessage(null)}}else ie=function(){S(K,0)};function Z(V){F=V,I||(I=!0,ie())}function oe(V,le){k=S(function(){V(n.unstable_now())},le)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,Z(N))},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(V){switch(v){case 1:case 2:case 3:var le=3;break;default:le=v}var te=v;v=le;try{return V()}finally{v=te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(V,le){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var te=v;v=V;try{return le()}finally{v=te}},n.unstable_scheduleCallback=function(V,le,te){var O=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?O+te:O):te=O,V){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=te+se,V={id:m++,callback:le,priorityLevel:V,startTime:te,expirationTime:se,sortIndex:-1},te>O?(V.sortIndex=te,e(h,V),t(d)===null&&V===t(h)&&(T?(y(k),k=-1):T=!0,oe(A,te-O))):(V.sortIndex=se,e(d,V),M||x||(M=!0,Z(N))),V},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(V){var le=v;return function(){var te=v;v=le;try{return V.apply(this,arguments)}finally{v=te}}}})(Lf)),Lf}var i0;function mM(){return i0||(i0=1,Df.exports=pM()),Df.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function gM(){if(r0)return Gn;r0=1;var n=Oh(),e=mM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},p={};function v(i){return d.call(p,i)?!0:d.call(m,i)?!1:h.test(i)?p[i]=!0:(m[i]=!0,!1)}function x(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,f){if(s===null||typeof s>"u"||x(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,a,f,g,_,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function C(i,s,a,f){var g=S.hasOwnProperty(s)?S[s]:null;(g!==null?g.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,g,f)&&(a=null),f||g===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):g.mustUseProperty?i[g.propertyName]=a===null?g.type===3?!1:"":a:(s=g.attributeName,f=g.attributeNamespace,a===null?i.removeAttribute(s):(g=g.type,a=g===3||g===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),V=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var te=Object.assign,O;function se(i){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var ye=!1;function be(i,s){if(!i||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(re){var f=re}Reflect.construct(i,[],s)}else{try{s.call()}catch(re){f=re}i.call(s.prototype)}else{try{throw Error()}catch(re){f=re}i()}}catch(re){if(re&&f&&typeof re.stack=="string"){for(var g=re.stack.split(`
`),_=f.stack.split(`
`),E=g.length-1,U=_.length-1;1<=E&&0<=U&&g[E]!==_[U];)U--;for(;1<=E&&0<=U;E--,U--)if(g[E]!==_[U]){if(E!==1||U!==1)do if(E--,U--,0>U||g[E]!==_[U]){var z=`
`+g[E].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=E&&0<=U);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?se(i):""}function Re(i){switch(i.tag){case 5:return se(i.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return i=be(i.type,!1),i;case 11:return i=be(i.type.render,!1),i;case 1:return i=be(i.type,!0),i;default:return""}}function Q(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case I:return"Portal";case P:return"Profiler";case k:return"StrictMode";case ie:return"Suspense";case ce:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case H:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case K:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case pe:return s=i.displayName||null,s!==null?s:Q(i.type)||"Memo";case Z:s=i._payload,i=i._init;try{return Q(i(s))}catch{}}return null}function fe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(s);case 8:return s===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function me(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ne(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ke(i){var s=Ne(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var g=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return g.call(this)},set:function(E){f=""+E,_.call(this,E)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(E){f=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function pt(i){i._valueTracker||(i._valueTracker=ke(i))}function zt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Ne(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function B(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function At(i,s){var a=s.checked;return te({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function ft(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=me(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function tt(i,s){s=s.checked,s!=null&&C(i,"checked",s,!1)}function Ge(i,s){tt(i,s);var a=me(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Be(i,s.type,a):s.hasOwnProperty("defaultValue")&&Be(i,s.type,me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Pt(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Be(i,s,a){(s!=="number"||B(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var ut=Array.isArray;function kt(i,s,a,f){if(i=i.options,s){s={};for(var g=0;g<a.length;g++)s["$"+a[g]]=!0;for(a=0;a<i.length;a++)g=s.hasOwnProperty("$"+i[a].value),i[a].selected!==g&&(i[a].selected=g),g&&f&&(i[a].defaultSelected=!0)}else{for(a=""+me(a),s=null,g=0;g<i.length;g++){if(i[g].value===a){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}s!==null||i[g].disabled||(s=i[g])}s!==null&&(s.selected=!0)}}function _t(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function L(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ut(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:me(a)}}function w(i,s){var a=me(s.value),f=me(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function $(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?he(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var de,Ke=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,g){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,g)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=de.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Me(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var We={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(We).forEach(function(i){je.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),We[s]=We[i]})});function Te(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||We.hasOwnProperty(i)&&We[i]?(""+s).trim():s+"px"}function Ue(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,g=Te(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,g):i[a]=g}}var nt=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(i,s){if(s){if(nt[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ie(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function G(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ee=null,Ce=null,Ve=null;function xe(i){if(i=Zo(i)){if(typeof Ee!="function")throw Error(t(280));var s=i.stateNode;s&&(s=pl(s),Ee(i.stateNode,i.type,s))}}function ee(i){Ce?Ve?Ve.push(i):Ve=[i]:Ce=i}function De(){if(Ce){var i=Ce,s=Ve;if(Ve=Ce=null,xe(i),s)for(i=0;i<s.length;i++)xe(s[i])}}function Ze(i,s){return i(s)}function mt(){}var yt=!1;function Dt(i,s,a){if(yt)return i(s,a);yt=!0;try{return Ze(i,s,a)}finally{yt=!1,(Ce!==null||Ve!==null)&&(mt(),De())}}function It(i,s){var a=i.stateNode;if(a===null)return null;var f=pl(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var mi=!1;if(c)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){mi=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch{mi=!1}function _n(i,s,a,f,g,_,E,U,z){var re=Array.prototype.slice.call(arguments,3);try{s.apply(a,re)}catch(_e){this.onError(_e)}}var gi=!1,Dn=null,Di=!1,bs=null,Ps={onError:function(i){gi=!0,Dn=i}};function Ya(i,s,a,f,g,_,E,U,z){gi=!1,Dn=null,_n.apply(Ps,arguments)}function qa(i,s,a,f,g,_,E,U,z){if(Ya.apply(this,arguments),gi){if(gi){var re=Dn;gi=!1,Dn=null}else throw Error(t(198));Di||(Di=!0,bs=re)}}function Xi(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function $a(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Ka(i){if(Xi(i)!==i)throw Error(t(188))}function Ku(i){var s=i.alternate;if(!s){if(s=Xi(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var g=a.return;if(g===null)break;var _=g.alternate;if(_===null){if(f=g.return,f!==null){a=f;continue}break}if(g.child===_.child){for(_=g.child;_;){if(_===a)return Ka(g),i;if(_===f)return Ka(g),s;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=g,f=_;else{for(var E=!1,U=g.child;U;){if(U===a){E=!0,a=g,f=_;break}if(U===f){E=!0,f=g,a=_;break}U=U.sibling}if(!E){for(U=_.child;U;){if(U===a){E=!0,a=_,f=g;break}if(U===f){E=!0,f=_,a=g;break}U=U.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function Za(i){return i=Ku(i),i!==null?Qa(i):null}function Qa(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Qa(i);if(s!==null)return s;i=i.sibling}return null}var b=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,ae=e.unstable_shouldYield,ue=e.unstable_requestPaint,j=e.unstable_now,we=e.unstable_getCurrentPriorityLevel,Fe=e.unstable_ImmediatePriority,qe=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,ot=e.unstable_LowPriority,at=e.unstable_IdlePriority,et=null,dt=null;function Lt(i){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(et,i,void 0,(i.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:it,Bt=Math.log,Nt=Math.LN2;function it(i){return i>>>=0,i===0?32:31-(Bt(i)/Nt|0)|0}var Ft=64,St=4194304;function ln(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function vi(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,g=i.suspendedLanes,_=i.pingedLanes,E=a&268435455;if(E!==0){var U=E&~g;U!==0?f=ln(U):(_&=E,_!==0&&(f=ln(_)))}else E=a&~g,E!==0?f=ln(E):_!==0&&(f=ln(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&g)===0&&(g=f&-f,_=s&-s,g>=_||g===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-Tt(s),g=1<<a,f|=i[a],s&=~g;return f}function Ln(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qr(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,_=i.pendingLanes;0<_;){var E=31-Tt(_),U=1<<E,z=g[E];z===-1?((U&a)===0||(U&f)!==0)&&(g[E]=Ln(U,s)):z<=s&&(i.expiredLanes|=U),_&=~U}}function Vt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function In(){var i=Ft;return Ft<<=1,(Ft&4194240)===0&&(Ft=64),i}function Mn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function en(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Tt(s),i[s]=a}function En(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var g=31-Tt(a),_=1<<g;s[g]=0,f[g]=-1,i[g]=-1,a&=~_}}function $r(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-Tt(a),g=1<<f;g&s|i[f]&s&&(i[f]|=s),a&=~g}}var Mt=0;function Pp(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Dp,Zu,Lp,Ip,Np,Qu=!1,Ja=[],pr=null,mr=null,gr=null,Uo=new Map,Fo=new Map,vr=[],Ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Up(i,s){switch(i){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Uo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(s.pointerId)}}function Oo(i,s,a,f,g,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[g]},s!==null&&(s=Zo(s),s!==null&&Zu(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),i)}function Nx(i,s,a,f,g){switch(s){case"focusin":return pr=Oo(pr,i,s,a,f,g),!0;case"dragenter":return mr=Oo(mr,i,s,a,f,g),!0;case"mouseover":return gr=Oo(gr,i,s,a,f,g),!0;case"pointerover":var _=g.pointerId;return Uo.set(_,Oo(Uo.get(_)||null,i,s,a,f,g)),!0;case"gotpointercapture":return _=g.pointerId,Fo.set(_,Oo(Fo.get(_)||null,i,s,a,f,g)),!0}return!1}function Fp(i){var s=Kr(i.target);if(s!==null){var a=Xi(s);if(a!==null){if(s=a.tag,s===13){if(s=$a(a),s!==null){i.blockedOn=s,Np(i.priority,function(){Lp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function el(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=ec(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);lt=f,a.target.dispatchEvent(f),lt=null}else return s=Zo(a),s!==null&&Zu(s),i.blockedOn=a,!1;s.shift()}return!0}function Op(i,s,a){el(i)&&a.delete(s)}function Ux(){Qu=!1,pr!==null&&el(pr)&&(pr=null),mr!==null&&el(mr)&&(mr=null),gr!==null&&el(gr)&&(gr=null),Uo.forEach(Op),Fo.forEach(Op)}function ko(i,s){i.blockedOn===s&&(i.blockedOn=null,Qu||(Qu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ux)))}function Bo(i){function s(g){return ko(g,i)}if(0<Ja.length){ko(Ja[0],i);for(var a=1;a<Ja.length;a++){var f=Ja[a];f.blockedOn===i&&(f.blockedOn=null)}}for(pr!==null&&ko(pr,i),mr!==null&&ko(mr,i),gr!==null&&ko(gr,i),Uo.forEach(s),Fo.forEach(s),a=0;a<vr.length;a++)f=vr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<vr.length&&(a=vr[0],a.blockedOn===null);)Fp(a),a.blockedOn===null&&vr.shift()}var Ds=A.ReactCurrentBatchConfig,tl=!0;function Fx(i,s,a,f){var g=Mt,_=Ds.transition;Ds.transition=null;try{Mt=1,Ju(i,s,a,f)}finally{Mt=g,Ds.transition=_}}function Ox(i,s,a,f){var g=Mt,_=Ds.transition;Ds.transition=null;try{Mt=4,Ju(i,s,a,f)}finally{Mt=g,Ds.transition=_}}function Ju(i,s,a,f){if(tl){var g=ec(i,s,a,f);if(g===null)vc(i,s,f,nl,a),Up(i,f);else if(Nx(g,i,s,a,f))f.stopPropagation();else if(Up(i,f),s&4&&-1<Ix.indexOf(i)){for(;g!==null;){var _=Zo(g);if(_!==null&&Dp(_),_=ec(i,s,a,f),_===null&&vc(i,s,f,nl,a),_===g)break;g=_}g!==null&&f.stopPropagation()}else vc(i,s,f,null,a)}}var nl=null;function ec(i,s,a,f){if(nl=null,i=G(f),i=Kr(i),i!==null)if(s=Xi(i),s===null)i=null;else if(a=s.tag,a===13){if(i=$a(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return nl=i,null}function kp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(we()){case Fe:return 1;case qe:return 4;case ze:case ot:return 16;case at:return 536870912;default:return 16}default:return 16}}var _r=null,tc=null,il=null;function Bp(){if(il)return il;var i,s=tc,a=s.length,f,g="value"in _r?_r.value:_r.textContent,_=g.length;for(i=0;i<a&&s[i]===g[i];i++);var E=a-i;for(f=1;f<=E&&s[a-f]===g[_-f];f++);return il=g.slice(i,1<f?1-f:void 0)}function rl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function sl(){return!0}function Vp(){return!1}function $n(i){function s(a,f,g,_,E){this._reactName=a,this._targetInst=g,this.type=f,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var U in i)i.hasOwnProperty(U)&&(a=i[U],this[U]=a?a(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?sl:Vp,this.isPropagationStopped=Vp,this}return te(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),s}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=$n(Ls),Vo=te({},Ls,{view:0,detail:0}),kx=$n(Vo),ic,rc,zo,ol=te({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==zo&&(zo&&i.type==="mousemove"?(ic=i.screenX-zo.screenX,rc=i.screenY-zo.screenY):rc=ic=0,zo=i),ic)},movementY:function(i){return"movementY"in i?i.movementY:rc}}),zp=$n(ol),Bx=te({},ol,{dataTransfer:0}),Vx=$n(Bx),zx=te({},Vo,{relatedTarget:0}),sc=$n(zx),Hx=te({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Gx=$n(Hx),Wx=te({},Ls,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),jx=$n(Wx),Xx=te({},Ls,{data:0}),Hp=$n(Xx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=$x[i])?!!s[i]:!1}function oc(){return Kx}var Zx=te({},Vo,{key:function(i){if(i.key){var s=Yx[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=rl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?qx[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(i){return i.type==="keypress"?rl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?rl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Qx=$n(Zx),Jx=te({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=$n(Jx),eS=te({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),tS=$n(eS),nS=te({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),iS=$n(nS),rS=te({},ol,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),sS=$n(rS),oS=[9,13,27,32],ac=c&&"CompositionEvent"in window,Ho=null;c&&"documentMode"in document&&(Ho=document.documentMode);var aS=c&&"TextEvent"in window&&!Ho,Wp=c&&(!ac||Ho&&8<Ho&&11>=Ho),jp=" ",Xp=!1;function Yp(i,s){switch(i){case"keyup":return oS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Is=!1;function lS(i,s){switch(i){case"compositionend":return qp(s);case"keypress":return s.which!==32?null:(Xp=!0,jp);case"textInput":return i=s.data,i===jp&&Xp?null:i;default:return null}}function uS(i,s){if(Is)return i==="compositionend"||!ac&&Yp(i,s)?(i=Bp(),il=tc=_r=null,Is=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Wp&&s.locale!=="ko"?null:s.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!cS[i.type]:s==="textarea"}function Kp(i,s,a,f){ee(f),s=fl(s,"onChange"),0<s.length&&(a=new nc("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var Go=null,Wo=null;function fS(i){pm(i,0)}function al(i){var s=ks(i);if(zt(s))return i}function dS(i,s){if(i==="change")return s}var Zp=!1;if(c){var lc;if(c){var uc="oninput"in document;if(!uc){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),uc=typeof Qp.oninput=="function"}lc=uc}else lc=!1;Zp=lc&&(!document.documentMode||9<document.documentMode)}function Jp(){Go&&(Go.detachEvent("onpropertychange",em),Wo=Go=null)}function em(i){if(i.propertyName==="value"&&al(Wo)){var s=[];Kp(s,Wo,i,G(i)),Dt(fS,s)}}function hS(i,s,a){i==="focusin"?(Jp(),Go=s,Wo=a,Go.attachEvent("onpropertychange",em)):i==="focusout"&&Jp()}function pS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return al(Wo)}function mS(i,s){if(i==="click")return al(s)}function gS(i,s){if(i==="input"||i==="change")return al(s)}function vS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var _i=typeof Object.is=="function"?Object.is:vS;function jo(i,s){if(_i(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var g=a[f];if(!d.call(s,g)||!_i(i[g],s[g]))return!1}return!0}function tm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function nm(i,s){var a=tm(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=tm(a)}}function im(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?im(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function rm(){for(var i=window,s=B();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=B(i.document)}return s}function cc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function _S(i){var s=rm(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&im(a.ownerDocument.documentElement,a)){if(f!==null&&cc(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var g=a.textContent.length,_=Math.min(f.start,g);f=f.end===void 0?_:Math.min(f.end,g),!i.extend&&_>f&&(g=f,f=_,_=g),g=nm(a,_);var E=nm(a,f);g&&E&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var yS=c&&"documentMode"in document&&11>=document.documentMode,Ns=null,fc=null,Xo=null,dc=!1;function sm(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;dc||Ns==null||Ns!==B(f)||(f=Ns,"selectionStart"in f&&cc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Xo&&jo(Xo,f)||(Xo=f,f=fl(fc,"onSelect"),0<f.length&&(s=new nc("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Ns)))}function ll(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Us={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},hc={},om={};c&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function ul(i){if(hc[i])return hc[i];if(!Us[i])return i;var s=Us[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in om)return hc[i]=s[a];return i}var am=ul("animationend"),lm=ul("animationiteration"),um=ul("animationstart"),cm=ul("transitionend"),fm=new Map,dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(i,s){fm.set(i,s),l(s,[i])}for(var pc=0;pc<dm.length;pc++){var mc=dm[pc],xS=mc.toLowerCase(),SS=mc[0].toUpperCase()+mc.slice(1);yr(xS,"on"+SS)}yr(am,"onAnimationEnd"),yr(lm,"onAnimationIteration"),yr(um,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(cm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function hm(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,qa(f,s,void 0,i),i.currentTarget=null}function pm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],g=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var E=f.length-1;0<=E;E--){var U=f[E],z=U.instance,re=U.currentTarget;if(U=U.listener,z!==_&&g.isPropagationStopped())break e;hm(g,U,re),_=z}else for(E=0;E<f.length;E++){if(U=f[E],z=U.instance,re=U.currentTarget,U=U.listener,z!==_&&g.isPropagationStopped())break e;hm(g,U,re),_=z}}}if(Di)throw i=bs,Di=!1,bs=null,i}function jt(i,s){var a=s[Ec];a===void 0&&(a=s[Ec]=new Set);var f=i+"__bubble";a.has(f)||(mm(s,i,2,!1),a.add(f))}function gc(i,s,a){var f=0;s&&(f|=4),mm(a,i,f,s)}var cl="_reactListening"+Math.random().toString(36).slice(2);function qo(i){if(!i[cl]){i[cl]=!0,r.forEach(function(a){a!=="selectionchange"&&(MS.has(a)||gc(a,!1,i),gc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[cl]||(s[cl]=!0,gc("selectionchange",!1,s))}}function mm(i,s,a,f){switch(kp(s)){case 1:var g=Fx;break;case 4:g=Ox;break;default:g=Ju}a=g.bind(null,s,a,i),g=void 0,!mi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(s,a,{capture:!0,passive:g}):i.addEventListener(s,a,!0):g!==void 0?i.addEventListener(s,a,{passive:g}):i.addEventListener(s,a,!1)}function vc(i,s,a,f,g){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var E=f.tag;if(E===3||E===4){var U=f.stateNode.containerInfo;if(U===g||U.nodeType===8&&U.parentNode===g)break;if(E===4)for(E=f.return;E!==null;){var z=E.tag;if((z===3||z===4)&&(z=E.stateNode.containerInfo,z===g||z.nodeType===8&&z.parentNode===g))return;E=E.return}for(;U!==null;){if(E=Kr(U),E===null)return;if(z=E.tag,z===5||z===6){f=_=E;continue e}U=U.parentNode}}f=f.return}Dt(function(){var re=_,_e=G(a),Se=[];e:{var ve=fm.get(i);if(ve!==void 0){var He=nc,$e=i;switch(i){case"keypress":if(rl(a)===0)break e;case"keydown":case"keyup":He=Qx;break;case"focusin":$e="focus",He=sc;break;case"focusout":$e="blur",He=sc;break;case"beforeblur":case"afterblur":He=sc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=Vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=tS;break;case am:case lm:case um:He=Gx;break;case cm:He=iS;break;case"scroll":He=kx;break;case"wheel":He=sS;break;case"copy":case"cut":case"paste":He=jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Gp}var Qe=(s&4)!==0,tn=!Qe&&i==="scroll",q=Qe?ve!==null?ve+"Capture":null:ve;Qe=[];for(var W=re,J;W!==null;){J=W;var Ae=J.stateNode;if(J.tag===5&&Ae!==null&&(J=Ae,q!==null&&(Ae=It(W,q),Ae!=null&&Qe.push($o(W,Ae,J)))),tn)break;W=W.return}0<Qe.length&&(ve=new He(ve,$e,null,a,_e),Se.push({event:ve,listeners:Qe}))}}if((s&7)===0){e:{if(ve=i==="mouseover"||i==="pointerover",He=i==="mouseout"||i==="pointerout",ve&&a!==lt&&($e=a.relatedTarget||a.fromElement)&&(Kr($e)||$e[Yi]))break e;if((He||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,He?($e=a.relatedTarget||a.toElement,He=re,$e=$e?Kr($e):null,$e!==null&&(tn=Xi($e),$e!==tn||$e.tag!==5&&$e.tag!==6)&&($e=null)):(He=null,$e=re),He!==$e)){if(Qe=zp,Ae="onMouseLeave",q="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(Qe=Gp,Ae="onPointerLeave",q="onPointerEnter",W="pointer"),tn=He==null?ve:ks(He),J=$e==null?ve:ks($e),ve=new Qe(Ae,W+"leave",He,a,_e),ve.target=tn,ve.relatedTarget=J,Ae=null,Kr(_e)===re&&(Qe=new Qe(q,W+"enter",$e,a,_e),Qe.target=J,Qe.relatedTarget=tn,Ae=Qe),tn=Ae,He&&$e)t:{for(Qe=He,q=$e,W=0,J=Qe;J;J=Fs(J))W++;for(J=0,Ae=q;Ae;Ae=Fs(Ae))J++;for(;0<W-J;)Qe=Fs(Qe),W--;for(;0<J-W;)q=Fs(q),J--;for(;W--;){if(Qe===q||q!==null&&Qe===q.alternate)break t;Qe=Fs(Qe),q=Fs(q)}Qe=null}else Qe=null;He!==null&&gm(Se,ve,He,Qe,!1),$e!==null&&tn!==null&&gm(Se,tn,$e,Qe,!0)}}e:{if(ve=re?ks(re):window,He=ve.nodeName&&ve.nodeName.toLowerCase(),He==="select"||He==="input"&&ve.type==="file")var Je=dS;else if($p(ve))if(Zp)Je=gS;else{Je=pS;var rt=hS}else(He=ve.nodeName)&&He.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Je=mS);if(Je&&(Je=Je(i,re))){Kp(Se,Je,a,_e);break e}rt&&rt(i,ve,re),i==="focusout"&&(rt=ve._wrapperState)&&rt.controlled&&ve.type==="number"&&Be(ve,"number",ve.value)}switch(rt=re?ks(re):window,i){case"focusin":($p(rt)||rt.contentEditable==="true")&&(Ns=rt,fc=re,Xo=null);break;case"focusout":Xo=fc=Ns=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,sm(Se,a,_e);break;case"selectionchange":if(yS)break;case"keydown":case"keyup":sm(Se,a,_e)}var st;if(ac)e:{switch(i){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else Is?Yp(i,a)&&(ht="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(Wp&&a.locale!=="ko"&&(Is||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Is&&(st=Bp()):(_r=_e,tc="value"in _r?_r.value:_r.textContent,Is=!0)),rt=fl(re,ht),0<rt.length&&(ht=new Hp(ht,i,null,a,_e),Se.push({event:ht,listeners:rt}),st?ht.data=st:(st=qp(a),st!==null&&(ht.data=st)))),(st=aS?lS(i,a):uS(i,a))&&(re=fl(re,"onBeforeInput"),0<re.length&&(_e=new Hp("onBeforeInput","beforeinput",null,a,_e),Se.push({event:_e,listeners:re}),_e.data=st))}pm(Se,s)})}function $o(i,s,a){return{instance:i,listener:s,currentTarget:a}}function fl(i,s){for(var a=s+"Capture",f=[];i!==null;){var g=i,_=g.stateNode;g.tag===5&&_!==null&&(g=_,_=It(i,a),_!=null&&f.unshift($o(i,_,g)),_=It(i,s),_!=null&&f.push($o(i,_,g))),i=i.return}return f}function Fs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function gm(i,s,a,f,g){for(var _=s._reactName,E=[];a!==null&&a!==f;){var U=a,z=U.alternate,re=U.stateNode;if(z!==null&&z===f)break;U.tag===5&&re!==null&&(U=re,g?(z=It(a,_),z!=null&&E.unshift($o(a,z,U))):g||(z=It(a,_),z!=null&&E.push($o(a,z,U)))),a=a.return}E.length!==0&&i.push({event:s,listeners:E})}var ES=/\r\n?/g,TS=/\u0000|\uFFFD/g;function vm(i){return(typeof i=="string"?i:""+i).replace(ES,`
`).replace(TS,"")}function dl(i,s,a){if(s=vm(s),vm(i)!==s&&a)throw Error(t(425))}function hl(){}var _c=null,yc=null;function xc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(i){return _m.resolve(null).then(i).catch(CS)}:Sc;function CS(i){setTimeout(function(){throw i})}function Mc(i,s){var a=s,f=0;do{var g=a.nextSibling;if(i.removeChild(a),g&&g.nodeType===8)if(a=g.data,a==="/$"){if(f===0){i.removeChild(g),Bo(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=g}while(a);Bo(s)}function xr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function ym(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Li="__reactFiber$"+Os,Ko="__reactProps$"+Os,Yi="__reactContainer$"+Os,Ec="__reactEvents$"+Os,RS="__reactListeners$"+Os,bS="__reactHandles$"+Os;function Kr(i){var s=i[Li];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Yi]||a[Li]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=ym(i);i!==null;){if(a=i[Li])return a;i=ym(i)}return s}i=a,a=i.parentNode}return null}function Zo(i){return i=i[Li]||i[Yi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ks(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function pl(i){return i[Ko]||null}var Tc=[],Bs=-1;function Sr(i){return{current:i}}function Xt(i){0>Bs||(i.current=Tc[Bs],Tc[Bs]=null,Bs--)}function Ht(i,s){Bs++,Tc[Bs]=i.current,i.current=s}var Mr={},Tn=Sr(Mr),kn=Sr(!1),Zr=Mr;function Vs(i,s){var a=i.type.contextTypes;if(!a)return Mr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var g={},_;for(_ in a)g[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=g),g}function Bn(i){return i=i.childContextTypes,i!=null}function ml(){Xt(kn),Xt(Tn)}function xm(i,s,a){if(Tn.current!==Mr)throw Error(t(168));Ht(Tn,s),Ht(kn,a)}function Sm(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var g in f)if(!(g in s))throw Error(t(108,fe(i)||"Unknown",g));return te({},a,f)}function gl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Mr,Zr=Tn.current,Ht(Tn,i),Ht(kn,kn.current),!0}function Mm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=Sm(i,s,Zr),f.__reactInternalMemoizedMergedChildContext=i,Xt(kn),Xt(Tn),Ht(Tn,i)):Xt(kn),Ht(kn,a)}var qi=null,vl=!1,wc=!1;function Em(i){qi===null?qi=[i]:qi.push(i)}function PS(i){vl=!0,Em(i)}function Er(){if(!wc&&qi!==null){wc=!0;var i=0,s=Mt;try{var a=qi;for(Mt=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}qi=null,vl=!1}catch(g){throw qi!==null&&(qi=qi.slice(i+1)),b(Fe,Er),g}finally{Mt=s,wc=!1}}return null}var zs=[],Hs=0,_l=null,yl=0,ni=[],ii=0,Qr=null,$i=1,Ki="";function Jr(i,s){zs[Hs++]=yl,zs[Hs++]=_l,_l=i,yl=s}function Tm(i,s,a){ni[ii++]=$i,ni[ii++]=Ki,ni[ii++]=Qr,Qr=i;var f=$i;i=Ki;var g=32-Tt(f)-1;f&=~(1<<g),a+=1;var _=32-Tt(s)+g;if(30<_){var E=g-g%5;_=(f&(1<<E)-1).toString(32),f>>=E,g-=E,$i=1<<32-Tt(s)+g|a<<g|f,Ki=_+i}else $i=1<<_|a<<g|f,Ki=i}function Ac(i){i.return!==null&&(Jr(i,1),Tm(i,1,0))}function Cc(i){for(;i===_l;)_l=zs[--Hs],zs[Hs]=null,yl=zs[--Hs],zs[Hs]=null;for(;i===Qr;)Qr=ni[--ii],ni[ii]=null,Ki=ni[--ii],ni[ii]=null,$i=ni[--ii],ni[ii]=null}var Kn=null,Zn=null,Yt=!1,yi=null;function wm(i,s){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Am(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Kn=i,Zn=xr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Kn=i,Zn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Qr!==null?{id:$i,overflow:Ki}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Kn=i,Zn=null,!0):!1;default:return!1}}function Rc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function bc(i){if(Yt){var s=Zn;if(s){var a=s;if(!Am(i,s)){if(Rc(i))throw Error(t(418));s=xr(a.nextSibling);var f=Kn;s&&Am(i,s)?wm(f,a):(i.flags=i.flags&-4097|2,Yt=!1,Kn=i)}}else{if(Rc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Yt=!1,Kn=i}}}function Cm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Kn=i}function xl(i){if(i!==Kn)return!1;if(!Yt)return Cm(i),Yt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!xc(i.type,i.memoizedProps)),s&&(s=Zn)){if(Rc(i))throw Rm(),Error(t(418));for(;s;)wm(i,s),s=xr(s.nextSibling)}if(Cm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Zn=xr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Zn=null}}else Zn=Kn?xr(i.stateNode.nextSibling):null;return!0}function Rm(){for(var i=Zn;i;)i=xr(i.nextSibling)}function Gs(){Zn=Kn=null,Yt=!1}function Pc(i){yi===null?yi=[i]:yi.push(i)}var DS=A.ReactCurrentBatchConfig;function Qo(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var g=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(E){var U=g.refs;E===null?delete U[_]:U[_]=E},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function Sl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function bm(i){var s=i._init;return s(i._payload)}function Pm(i){function s(q,W){if(i){var J=q.deletions;J===null?(q.deletions=[W],q.flags|=16):J.push(W)}}function a(q,W){if(!i)return null;for(;W!==null;)s(q,W),W=W.sibling;return null}function f(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function g(q,W){return q=Dr(q,W),q.index=0,q.sibling=null,q}function _(q,W,J){return q.index=J,i?(J=q.alternate,J!==null?(J=J.index,J<W?(q.flags|=2,W):J):(q.flags|=2,W)):(q.flags|=1048576,W)}function E(q){return i&&q.alternate===null&&(q.flags|=2),q}function U(q,W,J,Ae){return W===null||W.tag!==6?(W=Mf(J,q.mode,Ae),W.return=q,W):(W=g(W,J),W.return=q,W)}function z(q,W,J,Ae){var Je=J.type;return Je===F?_e(q,W,J.props.children,Ae,J.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&bm(Je)===W.type)?(Ae=g(W,J.props),Ae.ref=Qo(q,W,J),Ae.return=q,Ae):(Ae=jl(J.type,J.key,J.props,null,q.mode,Ae),Ae.ref=Qo(q,W,J),Ae.return=q,Ae)}function re(q,W,J,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=Ef(J,q.mode,Ae),W.return=q,W):(W=g(W,J.children||[]),W.return=q,W)}function _e(q,W,J,Ae,Je){return W===null||W.tag!==7?(W=as(J,q.mode,Ae,Je),W.return=q,W):(W=g(W,J),W.return=q,W)}function Se(q,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Mf(""+W,q.mode,J),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case N:return J=jl(W.type,W.key,W.props,null,q.mode,J),J.ref=Qo(q,null,W),J.return=q,J;case I:return W=Ef(W,q.mode,J),W.return=q,W;case Z:var Ae=W._init;return Se(q,Ae(W._payload),J)}if(ut(W)||le(W))return W=as(W,q.mode,J,null),W.return=q,W;Sl(q,W)}return null}function ve(q,W,J,Ae){var Je=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Je!==null?null:U(q,W,""+J,Ae);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case N:return J.key===Je?z(q,W,J,Ae):null;case I:return J.key===Je?re(q,W,J,Ae):null;case Z:return Je=J._init,ve(q,W,Je(J._payload),Ae)}if(ut(J)||le(J))return Je!==null?null:_e(q,W,J,Ae,null);Sl(q,J)}return null}function He(q,W,J,Ae,Je){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return q=q.get(J)||null,U(W,q,""+Ae,Je);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case N:return q=q.get(Ae.key===null?J:Ae.key)||null,z(W,q,Ae,Je);case I:return q=q.get(Ae.key===null?J:Ae.key)||null,re(W,q,Ae,Je);case Z:var rt=Ae._init;return He(q,W,J,rt(Ae._payload),Je)}if(ut(Ae)||le(Ae))return q=q.get(J)||null,_e(W,q,Ae,Je,null);Sl(W,Ae)}return null}function $e(q,W,J,Ae){for(var Je=null,rt=null,st=W,ht=W=0,gn=null;st!==null&&ht<J.length;ht++){st.index>ht?(gn=st,st=null):gn=st.sibling;var Ct=ve(q,st,J[ht],Ae);if(Ct===null){st===null&&(st=gn);break}i&&st&&Ct.alternate===null&&s(q,st),W=_(Ct,W,ht),rt===null?Je=Ct:rt.sibling=Ct,rt=Ct,st=gn}if(ht===J.length)return a(q,st),Yt&&Jr(q,ht),Je;if(st===null){for(;ht<J.length;ht++)st=Se(q,J[ht],Ae),st!==null&&(W=_(st,W,ht),rt===null?Je=st:rt.sibling=st,rt=st);return Yt&&Jr(q,ht),Je}for(st=f(q,st);ht<J.length;ht++)gn=He(st,q,ht,J[ht],Ae),gn!==null&&(i&&gn.alternate!==null&&st.delete(gn.key===null?ht:gn.key),W=_(gn,W,ht),rt===null?Je=gn:rt.sibling=gn,rt=gn);return i&&st.forEach(function(Lr){return s(q,Lr)}),Yt&&Jr(q,ht),Je}function Qe(q,W,J,Ae){var Je=le(J);if(typeof Je!="function")throw Error(t(150));if(J=Je.call(J),J==null)throw Error(t(151));for(var rt=Je=null,st=W,ht=W=0,gn=null,Ct=J.next();st!==null&&!Ct.done;ht++,Ct=J.next()){st.index>ht?(gn=st,st=null):gn=st.sibling;var Lr=ve(q,st,Ct.value,Ae);if(Lr===null){st===null&&(st=gn);break}i&&st&&Lr.alternate===null&&s(q,st),W=_(Lr,W,ht),rt===null?Je=Lr:rt.sibling=Lr,rt=Lr,st=gn}if(Ct.done)return a(q,st),Yt&&Jr(q,ht),Je;if(st===null){for(;!Ct.done;ht++,Ct=J.next())Ct=Se(q,Ct.value,Ae),Ct!==null&&(W=_(Ct,W,ht),rt===null?Je=Ct:rt.sibling=Ct,rt=Ct);return Yt&&Jr(q,ht),Je}for(st=f(q,st);!Ct.done;ht++,Ct=J.next())Ct=He(st,q,ht,Ct.value,Ae),Ct!==null&&(i&&Ct.alternate!==null&&st.delete(Ct.key===null?ht:Ct.key),W=_(Ct,W,ht),rt===null?Je=Ct:rt.sibling=Ct,rt=Ct);return i&&st.forEach(function(cM){return s(q,cM)}),Yt&&Jr(q,ht),Je}function tn(q,W,J,Ae){if(typeof J=="object"&&J!==null&&J.type===F&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case N:e:{for(var Je=J.key,rt=W;rt!==null;){if(rt.key===Je){if(Je=J.type,Je===F){if(rt.tag===7){a(q,rt.sibling),W=g(rt,J.props.children),W.return=q,q=W;break e}}else if(rt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&bm(Je)===rt.type){a(q,rt.sibling),W=g(rt,J.props),W.ref=Qo(q,rt,J),W.return=q,q=W;break e}a(q,rt);break}else s(q,rt);rt=rt.sibling}J.type===F?(W=as(J.props.children,q.mode,Ae,J.key),W.return=q,q=W):(Ae=jl(J.type,J.key,J.props,null,q.mode,Ae),Ae.ref=Qo(q,W,J),Ae.return=q,q=Ae)}return E(q);case I:e:{for(rt=J.key;W!==null;){if(W.key===rt)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){a(q,W.sibling),W=g(W,J.children||[]),W.return=q,q=W;break e}else{a(q,W);break}else s(q,W);W=W.sibling}W=Ef(J,q.mode,Ae),W.return=q,q=W}return E(q);case Z:return rt=J._init,tn(q,W,rt(J._payload),Ae)}if(ut(J))return $e(q,W,J,Ae);if(le(J))return Qe(q,W,J,Ae);Sl(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,W!==null&&W.tag===6?(a(q,W.sibling),W=g(W,J),W.return=q,q=W):(a(q,W),W=Mf(J,q.mode,Ae),W.return=q,q=W),E(q)):a(q,W)}return tn}var Ws=Pm(!0),Dm=Pm(!1),Ml=Sr(null),El=null,js=null,Dc=null;function Lc(){Dc=js=El=null}function Ic(i){var s=Ml.current;Xt(Ml),i._currentValue=s}function Nc(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function Xs(i,s){El=i,Dc=js=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Vn=!0),i.firstContext=null)}function ri(i){var s=i._currentValue;if(Dc!==i)if(i={context:i,memoizedValue:s,next:null},js===null){if(El===null)throw Error(t(308));js=i,El.dependencies={lanes:0,firstContext:i}}else js=js.next=i;return s}var es=null;function Uc(i){es===null?es=[i]:es.push(i)}function Lm(i,s,a,f){var g=s.interleaved;return g===null?(a.next=a,Uc(s)):(a.next=g.next,g.next=a),s.interleaved=a,Zi(i,f)}function Zi(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Tr=!1;function Fc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Im(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Qi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function wr(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(wt&2)!==0){var g=f.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s,Zi(i,a)}return g=f.interleaved,g===null?(s.next=s,Uc(f)):(s.next=g.next,g.next=s),f.interleaved=s,Zi(i,a)}function Tl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,$r(i,a)}}function Nm(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var g=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?g=_=E:_=_.next=E,a=a.next}while(a!==null);_===null?g=_=s:_=_.next=s}else g=_=s;a={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function wl(i,s,a,f){var g=i.updateQueue;Tr=!1;var _=g.firstBaseUpdate,E=g.lastBaseUpdate,U=g.shared.pending;if(U!==null){g.shared.pending=null;var z=U,re=z.next;z.next=null,E===null?_=re:E.next=re,E=z;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==E&&(U===null?_e.firstBaseUpdate=re:U.next=re,_e.lastBaseUpdate=z))}if(_!==null){var Se=g.baseState;E=0,_e=re=z=null,U=_;do{var ve=U.lane,He=U.eventTime;if((f&ve)===ve){_e!==null&&(_e=_e.next={eventTime:He,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var $e=i,Qe=U;switch(ve=s,He=a,Qe.tag){case 1:if($e=Qe.payload,typeof $e=="function"){Se=$e.call(He,Se,ve);break e}Se=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Qe.payload,ve=typeof $e=="function"?$e.call(He,Se,ve):$e,ve==null)break e;Se=te({},Se,ve);break e;case 2:Tr=!0}}U.callback!==null&&U.lane!==0&&(i.flags|=64,ve=g.effects,ve===null?g.effects=[U]:ve.push(U))}else He={eventTime:He,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(re=_e=He,z=Se):_e=_e.next=He,E|=ve;if(U=U.next,U===null){if(U=g.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,g.lastBaseUpdate=ve,g.shared.pending=null}}while(!0);if(_e===null&&(z=Se),g.baseState=z,g.firstBaseUpdate=re,g.lastBaseUpdate=_e,s=g.shared.interleaved,s!==null){g=s;do E|=g.lane,g=g.next;while(g!==s)}else _===null&&(g.shared.lanes=0);is|=E,i.lanes=E,i.memoizedState=Se}}function Um(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],g=f.callback;if(g!==null){if(f.callback=null,f=a,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var Jo={},Ii=Sr(Jo),ea=Sr(Jo),ta=Sr(Jo);function ts(i){if(i===Jo)throw Error(t(174));return i}function Oc(i,s){switch(Ht(ta,s),Ht(ea,i),Ht(Ii,Jo),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ge(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ge(s,i)}Xt(Ii),Ht(Ii,s)}function Ys(){Xt(Ii),Xt(ea),Xt(ta)}function Fm(i){ts(ta.current);var s=ts(Ii.current),a=ge(s,i.type);s!==a&&(Ht(ea,i),Ht(Ii,a))}function kc(i){ea.current===i&&(Xt(Ii),Xt(ea))}var $t=Sr(0);function Al(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Bc=[];function Vc(){for(var i=0;i<Bc.length;i++)Bc[i]._workInProgressVersionPrimary=null;Bc.length=0}var Cl=A.ReactCurrentDispatcher,zc=A.ReactCurrentBatchConfig,ns=0,Kt=null,un=null,pn=null,Rl=!1,na=!1,ia=0,LS=0;function wn(){throw Error(t(321))}function Hc(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!_i(i[a],s[a]))return!1;return!0}function Gc(i,s,a,f,g,_){if(ns=_,Kt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Cl.current=i===null||i.memoizedState===null?FS:OS,i=a(f,g),na){_=0;do{if(na=!1,ia=0,25<=_)throw Error(t(301));_+=1,pn=un=null,s.updateQueue=null,Cl.current=kS,i=a(f,g)}while(na)}if(Cl.current=Dl,s=un!==null&&un.next!==null,ns=0,pn=un=Kt=null,Rl=!1,s)throw Error(t(300));return i}function Wc(){var i=ia!==0;return ia=0,i}function Ni(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Kt.memoizedState=pn=i:pn=pn.next=i,pn}function si(){if(un===null){var i=Kt.alternate;i=i!==null?i.memoizedState:null}else i=un.next;var s=pn===null?Kt.memoizedState:pn.next;if(s!==null)pn=s,un=i;else{if(i===null)throw Error(t(310));un=i,i={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},pn===null?Kt.memoizedState=pn=i:pn=pn.next=i}return pn}function ra(i,s){return typeof s=="function"?s(i):s}function jc(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=un,g=f.baseQueue,_=a.pending;if(_!==null){if(g!==null){var E=g.next;g.next=_.next,_.next=E}f.baseQueue=g=_,a.pending=null}if(g!==null){_=g.next,f=f.baseState;var U=E=null,z=null,re=_;do{var _e=re.lane;if((ns&_e)===_e)z!==null&&(z=z.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),f=re.hasEagerState?re.eagerState:i(f,re.action);else{var Se={lane:_e,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};z===null?(U=z=Se,E=f):z=z.next=Se,Kt.lanes|=_e,is|=_e}re=re.next}while(re!==null&&re!==_);z===null?E=f:z.next=U,_i(f,s.memoizedState)||(Vn=!0),s.memoizedState=f,s.baseState=E,s.baseQueue=z,a.lastRenderedState=f}if(i=a.interleaved,i!==null){g=i;do _=g.lane,Kt.lanes|=_,is|=_,g=g.next;while(g!==i)}else g===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Xc(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,g=a.pending,_=s.memoizedState;if(g!==null){a.pending=null;var E=g=g.next;do _=i(_,E.action),E=E.next;while(E!==g);_i(_,s.memoizedState)||(Vn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,f]}function Om(){}function km(i,s){var a=Kt,f=si(),g=s(),_=!_i(f.memoizedState,g);if(_&&(f.memoizedState=g,Vn=!0),f=f.queue,Yc(zm.bind(null,a,f,i),[i]),f.getSnapshot!==s||_||pn!==null&&pn.memoizedState.tag&1){if(a.flags|=2048,sa(9,Vm.bind(null,a,f,g,s),void 0,null),mn===null)throw Error(t(349));(ns&30)!==0||Bm(a,s,g)}return g}function Bm(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Vm(i,s,a,f){s.value=a,s.getSnapshot=f,Hm(s)&&Gm(i)}function zm(i,s,a){return a(function(){Hm(s)&&Gm(i)})}function Hm(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!_i(i,a)}catch{return!0}}function Gm(i){var s=Zi(i,1);s!==null&&Ei(s,i,1,-1)}function Wm(i){var s=Ni();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:i},s.queue=i,i=i.dispatch=US.bind(null,Kt,i),[s.memoizedState,i]}function sa(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function jm(){return si().memoizedState}function bl(i,s,a,f){var g=Ni();Kt.flags|=i,g.memoizedState=sa(1|s,a,void 0,f===void 0?null:f)}function Pl(i,s,a,f){var g=si();f=f===void 0?null:f;var _=void 0;if(un!==null){var E=un.memoizedState;if(_=E.destroy,f!==null&&Hc(f,E.deps)){g.memoizedState=sa(s,a,_,f);return}}Kt.flags|=i,g.memoizedState=sa(1|s,a,_,f)}function Xm(i,s){return bl(8390656,8,i,s)}function Yc(i,s){return Pl(2048,8,i,s)}function Ym(i,s){return Pl(4,2,i,s)}function qm(i,s){return Pl(4,4,i,s)}function $m(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Km(i,s,a){return a=a!=null?a.concat([i]):null,Pl(4,4,$m.bind(null,s,i),a)}function qc(){}function Zm(i,s){var a=si();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Hc(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function Qm(i,s){var a=si();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Hc(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function Jm(i,s,a){return(ns&21)===0?(i.baseState&&(i.baseState=!1,Vn=!0),i.memoizedState=a):(_i(a,s)||(a=In(),Kt.lanes|=a,is|=a,i.baseState=!0),s)}function IS(i,s){var a=Mt;Mt=a!==0&&4>a?a:4,i(!0);var f=zc.transition;zc.transition={};try{i(!1),s()}finally{Mt=a,zc.transition=f}}function eg(){return si().memoizedState}function NS(i,s,a){var f=br(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},tg(i))ng(s,a);else if(a=Lm(i,s,a,f),a!==null){var g=Un();Ei(a,i,f,g),ig(a,s,f)}}function US(i,s,a){var f=br(i),g={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(tg(i))ng(s,g);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var E=s.lastRenderedState,U=_(E,a);if(g.hasEagerState=!0,g.eagerState=U,_i(U,E)){var z=s.interleaved;z===null?(g.next=g,Uc(s)):(g.next=z.next,z.next=g),s.interleaved=g;return}}catch{}finally{}a=Lm(i,s,g,f),a!==null&&(g=Un(),Ei(a,i,f,g),ig(a,s,f))}}function tg(i){var s=i.alternate;return i===Kt||s!==null&&s===Kt}function ng(i,s){na=Rl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function ig(i,s,a){if((a&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,$r(i,a)}}var Dl={readContext:ri,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},FS={readContext:ri,useCallback:function(i,s){return Ni().memoizedState=[i,s===void 0?null:s],i},useContext:ri,useEffect:Xm,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,bl(4194308,4,$m.bind(null,s,i),a)},useLayoutEffect:function(i,s){return bl(4194308,4,i,s)},useInsertionEffect:function(i,s){return bl(4,2,i,s)},useMemo:function(i,s){var a=Ni();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Ni();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=NS.bind(null,Kt,i),[f.memoizedState,i]},useRef:function(i){var s=Ni();return i={current:i},s.memoizedState=i},useState:Wm,useDebugValue:qc,useDeferredValue:function(i){return Ni().memoizedState=i},useTransition:function(){var i=Wm(!1),s=i[0];return i=IS.bind(null,i[1]),Ni().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Kt,g=Ni();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),mn===null)throw Error(t(349));(ns&30)!==0||Bm(f,s,a)}g.memoizedState=a;var _={value:a,getSnapshot:s};return g.queue=_,Xm(zm.bind(null,f,_,i),[i]),f.flags|=2048,sa(9,Vm.bind(null,f,_,a,s),void 0,null),a},useId:function(){var i=Ni(),s=mn.identifierPrefix;if(Yt){var a=Ki,f=$i;a=(f&~(1<<32-Tt(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=ia++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=LS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},OS={readContext:ri,useCallback:Zm,useContext:ri,useEffect:Yc,useImperativeHandle:Km,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:Qm,useReducer:jc,useRef:jm,useState:function(){return jc(ra)},useDebugValue:qc,useDeferredValue:function(i){var s=si();return Jm(s,un.memoizedState,i)},useTransition:function(){var i=jc(ra)[0],s=si().memoizedState;return[i,s]},useMutableSource:Om,useSyncExternalStore:km,useId:eg,unstable_isNewReconciler:!1},kS={readContext:ri,useCallback:Zm,useContext:ri,useEffect:Yc,useImperativeHandle:Km,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:Qm,useReducer:Xc,useRef:jm,useState:function(){return Xc(ra)},useDebugValue:qc,useDeferredValue:function(i){var s=si();return un===null?s.memoizedState=i:Jm(s,un.memoizedState,i)},useTransition:function(){var i=Xc(ra)[0],s=si().memoizedState;return[i,s]},useMutableSource:Om,useSyncExternalStore:km,useId:eg,unstable_isNewReconciler:!1};function xi(i,s){if(i&&i.defaultProps){s=te({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function $c(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:te({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Ll={isMounted:function(i){return(i=i._reactInternals)?Xi(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=Un(),g=br(i),_=Qi(f,g);_.payload=s,a!=null&&(_.callback=a),s=wr(i,_,g),s!==null&&(Ei(s,i,g,f),Tl(s,i,g))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=Un(),g=br(i),_=Qi(f,g);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=wr(i,_,g),s!==null&&(Ei(s,i,g,f),Tl(s,i,g))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Un(),f=br(i),g=Qi(a,f);g.tag=2,s!=null&&(g.callback=s),s=wr(i,g,f),s!==null&&(Ei(s,i,f,a),Tl(s,i,f))}};function rg(i,s,a,f,g,_,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,E):s.prototype&&s.prototype.isPureReactComponent?!jo(a,f)||!jo(g,_):!0}function sg(i,s,a){var f=!1,g=Mr,_=s.contextType;return typeof _=="object"&&_!==null?_=ri(_):(g=Bn(s)?Zr:Tn.current,f=s.contextTypes,_=(f=f!=null)?Vs(i,g):Mr),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ll,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=_),s}function og(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Ll.enqueueReplaceState(s,s.state,null)}function Kc(i,s,a,f){var g=i.stateNode;g.props=a,g.state=i.memoizedState,g.refs={},Fc(i);var _=s.contextType;typeof _=="object"&&_!==null?g.context=ri(_):(_=Bn(s)?Zr:Tn.current,g.context=Vs(i,_)),g.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&($c(i,s,_,a),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&Ll.enqueueReplaceState(g,g.state,null),wl(i,a,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function qs(i,s){try{var a="",f=s;do a+=Re(f),f=f.return;while(f);var g=a}catch(_){g=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:g,digest:null}}function Zc(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function Qc(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var BS=typeof WeakMap=="function"?WeakMap:Map;function ag(i,s,a){a=Qi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){Bl||(Bl=!0,pf=f),Qc(i,s)},a}function lg(i,s,a){a=Qi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=s.value;a.payload=function(){return f(g)},a.callback=function(){Qc(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){Qc(i,s),typeof f!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function ug(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new BS;var g=new Set;f.set(s,g)}else g=f.get(s),g===void 0&&(g=new Set,f.set(s,g));g.has(a)||(g.add(a),i=JS.bind(null,i,s,a),s.then(i,i))}function cg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function fg(i,s,a,f,g){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Qi(-1,1),s.tag=2,wr(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var VS=A.ReactCurrentOwner,Vn=!1;function Nn(i,s,a,f){s.child=i===null?Dm(s,null,a,f):Ws(s,i.child,a,f)}function dg(i,s,a,f,g){a=a.render;var _=s.ref;return Xs(s,g),f=Gc(i,s,a,f,_,g),a=Wc(),i!==null&&!Vn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,Ji(i,s,g)):(Yt&&a&&Ac(s),s.flags|=1,Nn(i,s,f,g),s.child)}function hg(i,s,a,f,g){if(i===null){var _=a.type;return typeof _=="function"&&!Sf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,pg(i,s,_,f,g)):(i=jl(a.type,null,f,s,s.mode,g),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&g)===0){var E=_.memoizedProps;if(a=a.compare,a=a!==null?a:jo,a(E,f)&&i.ref===s.ref)return Ji(i,s,g)}return s.flags|=1,i=Dr(_,f),i.ref=s.ref,i.return=s,s.child=i}function pg(i,s,a,f,g){if(i!==null){var _=i.memoizedProps;if(jo(_,f)&&i.ref===s.ref)if(Vn=!1,s.pendingProps=f=_,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Vn=!0);else return s.lanes=i.lanes,Ji(i,s,g)}return Jc(i,s,a,f,g)}function mg(i,s,a){var f=s.pendingProps,g=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Ks,Qn),Qn|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ht(Ks,Qn),Qn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Ht(Ks,Qn),Qn|=f}else _!==null?(f=_.baseLanes|a,s.memoizedState=null):f=a,Ht(Ks,Qn),Qn|=f;return Nn(i,s,g,a),s.child}function gg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Jc(i,s,a,f,g){var _=Bn(a)?Zr:Tn.current;return _=Vs(s,_),Xs(s,g),a=Gc(i,s,a,f,_,g),f=Wc(),i!==null&&!Vn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,Ji(i,s,g)):(Yt&&f&&Ac(s),s.flags|=1,Nn(i,s,a,g),s.child)}function vg(i,s,a,f,g){if(Bn(a)){var _=!0;gl(s)}else _=!1;if(Xs(s,g),s.stateNode===null)Nl(i,s),sg(s,a,f),Kc(s,a,f,g),f=!0;else if(i===null){var E=s.stateNode,U=s.memoizedProps;E.props=U;var z=E.context,re=a.contextType;typeof re=="object"&&re!==null?re=ri(re):(re=Bn(a)?Zr:Tn.current,re=Vs(s,re));var _e=a.getDerivedStateFromProps,Se=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==f||z!==re)&&og(s,E,f,re),Tr=!1;var ve=s.memoizedState;E.state=ve,wl(s,f,E,g),z=s.memoizedState,U!==f||ve!==z||kn.current||Tr?(typeof _e=="function"&&($c(s,a,_e,f),z=s.memoizedState),(U=Tr||rg(s,a,U,f,ve,z,re))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=z),E.props=f,E.state=z,E.context=re,f=U):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{E=s.stateNode,Im(i,s),U=s.memoizedProps,re=s.type===s.elementType?U:xi(s.type,U),E.props=re,Se=s.pendingProps,ve=E.context,z=a.contextType,typeof z=="object"&&z!==null?z=ri(z):(z=Bn(a)?Zr:Tn.current,z=Vs(s,z));var He=a.getDerivedStateFromProps;(_e=typeof He=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Se||ve!==z)&&og(s,E,f,z),Tr=!1,ve=s.memoizedState,E.state=ve,wl(s,f,E,g);var $e=s.memoizedState;U!==Se||ve!==$e||kn.current||Tr?(typeof He=="function"&&($c(s,a,He,f),$e=s.memoizedState),(re=Tr||rg(s,a,re,f,ve,$e,z)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(f,$e,z),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(f,$e,z)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=$e),E.props=f,E.state=$e,E.context=z,f=re):(typeof E.componentDidUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),f=!1)}return ef(i,s,a,f,_,g)}function ef(i,s,a,f,g,_){gg(i,s);var E=(s.flags&128)!==0;if(!f&&!E)return g&&Mm(s,a,!1),Ji(i,s,_);f=s.stateNode,VS.current=s;var U=E&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&E?(s.child=Ws(s,i.child,null,_),s.child=Ws(s,null,U,_)):Nn(i,s,U,_),s.memoizedState=f.state,g&&Mm(s,a,!0),s.child}function _g(i){var s=i.stateNode;s.pendingContext?xm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&xm(i,s.context,!1),Oc(i,s.containerInfo)}function yg(i,s,a,f,g){return Gs(),Pc(g),s.flags|=256,Nn(i,s,a,f),s.child}var tf={dehydrated:null,treeContext:null,retryLane:0};function nf(i){return{baseLanes:i,cachePool:null,transitions:null}}function xg(i,s,a){var f=s.pendingProps,g=$t.current,_=!1,E=(s.flags&128)!==0,U;if((U=E)||(U=i!==null&&i.memoizedState===null?!1:(g&2)!==0),U?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Ht($t,g&1),i===null)return bc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=f.children,i=f.fallback,_?(f=s.mode,_=s.child,E={mode:"hidden",children:E},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=E):_=Xl(E,f,0,null),i=as(i,f,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=nf(a),s.memoizedState=tf,i):rf(s,E));if(g=i.memoizedState,g!==null&&(U=g.dehydrated,U!==null))return zS(i,s,E,f,U,g,a);if(_){_=f.fallback,E=s.mode,g=i.child,U=g.sibling;var z={mode:"hidden",children:f.children};return(E&1)===0&&s.child!==g?(f=s.child,f.childLanes=0,f.pendingProps=z,s.deletions=null):(f=Dr(g,z),f.subtreeFlags=g.subtreeFlags&14680064),U!==null?_=Dr(U,_):(_=as(_,E,a,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,E=i.child.memoizedState,E=E===null?nf(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},_.memoizedState=E,_.childLanes=i.childLanes&~a,s.memoizedState=tf,f}return _=i.child,i=_.sibling,f=Dr(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function rf(i,s){return s=Xl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Il(i,s,a,f){return f!==null&&Pc(f),Ws(s,i.child,null,a),i=rf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function zS(i,s,a,f,g,_,E){if(a)return s.flags&256?(s.flags&=-257,f=Zc(Error(t(422))),Il(i,s,E,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,g=s.mode,f=Xl({mode:"visible",children:f.children},g,0,null),_=as(_,g,E,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&Ws(s,i.child,null,E),s.child.memoizedState=nf(E),s.memoizedState=tf,_);if((s.mode&1)===0)return Il(i,s,E,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var U=f.dgst;return f=U,_=Error(t(419)),f=Zc(_,f,void 0),Il(i,s,E,f)}if(U=(E&i.childLanes)!==0,Vn||U){if(f=mn,f!==null){switch(E&-E){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|E))!==0?0:g,g!==0&&g!==_.retryLane&&(_.retryLane=g,Zi(i,g),Ei(f,i,g,-1))}return xf(),f=Zc(Error(t(421))),Il(i,s,E,f)}return g.data==="$?"?(s.flags|=128,s.child=i.child,s=eM.bind(null,i),g._reactRetry=s,null):(i=_.treeContext,Zn=xr(g.nextSibling),Kn=s,Yt=!0,yi=null,i!==null&&(ni[ii++]=$i,ni[ii++]=Ki,ni[ii++]=Qr,$i=i.id,Ki=i.overflow,Qr=s),s=rf(s,f.children),s.flags|=4096,s)}function Sg(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),Nc(i.return,s,a)}function sf(i,s,a,f,g){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:g}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=g)}function Mg(i,s,a){var f=s.pendingProps,g=f.revealOrder,_=f.tail;if(Nn(i,s,f.children,a),f=$t.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Sg(i,a,s);else if(i.tag===19)Sg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Ht($t,f),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(a=s.child,g=null;a!==null;)i=a.alternate,i!==null&&Al(i)===null&&(g=a),a=a.sibling;a=g,a===null?(g=s.child,s.child=null):(g=a.sibling,a.sibling=null),sf(s,!1,g,a,_);break;case"backwards":for(a=null,g=s.child,s.child=null;g!==null;){if(i=g.alternate,i!==null&&Al(i)===null){s.child=g;break}i=g.sibling,g.sibling=a,a=g,g=i}sf(s,!0,a,null,_);break;case"together":sf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Nl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Ji(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),is|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Dr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Dr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function HS(i,s,a){switch(s.tag){case 3:_g(s),Gs();break;case 5:Fm(s);break;case 1:Bn(s.type)&&gl(s);break;case 4:Oc(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,g=s.memoizedProps.value;Ht(Ml,f._currentValue),f._currentValue=g;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Ht($t,$t.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?xg(i,s,a):(Ht($t,$t.current&1),i=Ji(i,s,a),i!==null?i.sibling:null);Ht($t,$t.current&1);break;case 19:if(f=(a&s.childLanes)!==0,(i.flags&128)!==0){if(f)return Mg(i,s,a);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Ht($t,$t.current),f)break;return null;case 22:case 23:return s.lanes=0,mg(i,s,a)}return Ji(i,s,a)}var Eg,of,Tg,wg;Eg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},of=function(){},Tg=function(i,s,a,f){var g=i.memoizedProps;if(g!==f){i=s.stateNode,ts(Ii.current);var _=null;switch(a){case"input":g=At(i,g),f=At(i,f),_=[];break;case"select":g=te({},g,{value:void 0}),f=te({},f,{value:void 0}),_=[];break;case"textarea":g=_t(i,g),f=_t(i,f),_=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=hl)}Ye(a,f);var E;a=null;for(re in g)if(!f.hasOwnProperty(re)&&g.hasOwnProperty(re)&&g[re]!=null)if(re==="style"){var U=g[re];for(E in U)U.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?_||(_=[]):(_=_||[]).push(re,null));for(re in f){var z=f[re];if(U=g?.[re],f.hasOwnProperty(re)&&z!==U&&(z!=null||U!=null))if(re==="style")if(U){for(E in U)!U.hasOwnProperty(E)||z&&z.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in z)z.hasOwnProperty(E)&&U[E]!==z[E]&&(a||(a={}),a[E]=z[E])}else a||(_||(_=[]),_.push(re,a)),a=z;else re==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(_=_||[]).push(re,z)):re==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(re,""+z):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(z!=null&&re==="onScroll"&&jt("scroll",i),_||U===z||(_=[])):(_=_||[]).push(re,z))}a&&(_=_||[]).push("style",a);var re=_;(s.updateQueue=re)&&(s.flags|=4)}},wg=function(i,s,a,f){a!==f&&(s.flags|=4)};function oa(i,s){if(!Yt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function An(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var g=i.child;g!==null;)a|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)a|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function GS(i,s,a){var f=s.pendingProps;switch(Cc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(s),null;case 1:return Bn(s.type)&&ml(),An(s),null;case 3:return f=s.stateNode,Ys(),Xt(kn),Xt(Tn),Vc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(xl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,yi!==null&&(vf(yi),yi=null))),of(i,s),An(s),null;case 5:kc(s);var g=ts(ta.current);if(a=s.type,i!==null&&s.stateNode!=null)Tg(i,s,a,f,g),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return An(s),null}if(i=ts(Ii.current),xl(s)){f=s.stateNode,a=s.type;var _=s.memoizedProps;switch(f[Li]=s,f[Ko]=_,i=(s.mode&1)!==0,a){case"dialog":jt("cancel",f),jt("close",f);break;case"iframe":case"object":case"embed":jt("load",f);break;case"video":case"audio":for(g=0;g<Yo.length;g++)jt(Yo[g],f);break;case"source":jt("error",f);break;case"img":case"image":case"link":jt("error",f),jt("load",f);break;case"details":jt("toggle",f);break;case"input":ft(f,_),jt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},jt("invalid",f);break;case"textarea":L(f,_),jt("invalid",f)}Ye(a,_),g=null;for(var E in _)if(_.hasOwnProperty(E)){var U=_[E];E==="children"?typeof U=="string"?f.textContent!==U&&(_.suppressHydrationWarning!==!0&&dl(f.textContent,U,i),g=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(_.suppressHydrationWarning!==!0&&dl(f.textContent,U,i),g=["children",""+U]):o.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&jt("scroll",f)}switch(a){case"input":pt(f),Pt(f,_,!0);break;case"textarea":pt(f),$(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=hl)}f=g,s.updateQueue=f,f!==null&&(s.flags|=4)}else{E=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=E.createElement(a,{is:f.is}):(i=E.createElement(a),a==="select"&&(E=i,f.multiple?E.multiple=!0:f.size&&(E.size=f.size))):i=E.createElementNS(i,a),i[Li]=s,i[Ko]=f,Eg(i,s,!1,!1),s.stateNode=i;e:{switch(E=Ie(a,f),a){case"dialog":jt("cancel",i),jt("close",i),g=f;break;case"iframe":case"object":case"embed":jt("load",i),g=f;break;case"video":case"audio":for(g=0;g<Yo.length;g++)jt(Yo[g],i);g=f;break;case"source":jt("error",i),g=f;break;case"img":case"image":case"link":jt("error",i),jt("load",i),g=f;break;case"details":jt("toggle",i),g=f;break;case"input":ft(i,f),g=At(i,f),jt("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=te({},f,{value:void 0}),jt("invalid",i);break;case"textarea":L(i,f),g=_t(i,f),jt("invalid",i);break;default:g=f}Ye(a,g),U=g;for(_ in U)if(U.hasOwnProperty(_)){var z=U[_];_==="style"?Ue(i,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ke(i,z)):_==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&Me(i,z):typeof z=="number"&&Me(i,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?z!=null&&_==="onScroll"&&jt("scroll",i):z!=null&&C(i,_,z,E))}switch(a){case"input":pt(i),Pt(i,f,!1);break;case"textarea":pt(i),$(i);break;case"option":f.value!=null&&i.setAttribute("value",""+me(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?kt(i,!!f.multiple,_,!1):f.defaultValue!=null&&kt(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=hl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return An(s),null;case 6:if(i&&s.stateNode!=null)wg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=ts(ta.current),ts(Ii.current),xl(s)){if(f=s.stateNode,a=s.memoizedProps,f[Li]=s,(_=f.nodeValue!==a)&&(i=Kn,i!==null))switch(i.tag){case 3:dl(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&dl(f.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[Li]=s,s.stateNode=f}return An(s),null;case 13:if(Xt($t),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Yt&&Zn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Rm(),Gs(),s.flags|=98560,_=!1;else if(_=xl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Li]=s}else Gs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;An(s),_=!1}else yi!==null&&(vf(yi),yi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||($t.current&1)!==0?cn===0&&(cn=3):xf())),s.updateQueue!==null&&(s.flags|=4),An(s),null);case 4:return Ys(),of(i,s),i===null&&qo(s.stateNode.containerInfo),An(s),null;case 10:return Ic(s.type._context),An(s),null;case 17:return Bn(s.type)&&ml(),An(s),null;case 19:if(Xt($t),_=s.memoizedState,_===null)return An(s),null;if(f=(s.flags&128)!==0,E=_.rendering,E===null)if(f)oa(_,!1);else{if(cn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(E=Al(i),E!==null){for(s.flags|=128,oa(_,!1),f=E.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)_=a,i=f,_.flags&=14680066,E=_.alternate,E===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=E.childLanes,_.lanes=E.lanes,_.child=E.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=E.memoizedProps,_.memoizedState=E.memoizedState,_.updateQueue=E.updateQueue,_.type=E.type,i=E.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Ht($t,$t.current&1|2),s.child}i=i.sibling}_.tail!==null&&j()>Zs&&(s.flags|=128,f=!0,oa(_,!1),s.lanes=4194304)}else{if(!f)if(i=Al(E),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),oa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!E.alternate&&!Yt)return An(s),null}else 2*j()-_.renderingStartTime>Zs&&a!==1073741824&&(s.flags|=128,f=!0,oa(_,!1),s.lanes=4194304);_.isBackwards?(E.sibling=s.child,s.child=E):(a=_.last,a!==null?a.sibling=E:s.child=E,_.last=E)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=j(),s.sibling=null,a=$t.current,Ht($t,f?a&1|2:a&1),s):(An(s),null);case 22:case 23:return yf(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Qn&1073741824)!==0&&(An(s),s.subtreeFlags&6&&(s.flags|=8192)):An(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function WS(i,s){switch(Cc(s),s.tag){case 1:return Bn(s.type)&&ml(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ys(),Xt(kn),Xt(Tn),Vc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return kc(s),null;case 13:if(Xt($t),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Gs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Xt($t),null;case 4:return Ys(),null;case 10:return Ic(s.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var Ul=!1,Cn=!1,jS=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function $s(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Qt(i,s,f)}else a.current=null}function af(i,s,a){try{a()}catch(f){Qt(i,s,f)}}var Ag=!1;function XS(i,s){if(_c=tl,i=rm(),cc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var g=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var E=0,U=-1,z=-1,re=0,_e=0,Se=i,ve=null;t:for(;;){for(var He;Se!==a||g!==0&&Se.nodeType!==3||(U=E+g),Se!==_||f!==0&&Se.nodeType!==3||(z=E+f),Se.nodeType===3&&(E+=Se.nodeValue.length),(He=Se.firstChild)!==null;)ve=Se,Se=He;for(;;){if(Se===i)break t;if(ve===a&&++re===g&&(U=E),ve===_&&++_e===f&&(z=E),(He=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=He}a=U===-1||z===-1?null:{start:U,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(yc={focusedElem:i,selectionRange:a},tl=!1,Xe=s;Xe!==null;)if(s=Xe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Xe=i;else for(;Xe!==null;){s=Xe;try{var $e=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Qe=$e.memoizedProps,tn=$e.memoizedState,q=s.stateNode,W=q.getSnapshotBeforeUpdate(s.elementType===s.type?Qe:xi(s.type,Qe),tn);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var J=s.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Qt(s,s.return,Ae)}if(i=s.sibling,i!==null){i.return=s.return,Xe=i;break}Xe=s.return}return $e=Ag,Ag=!1,$e}function aa(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var _=g.destroy;g.destroy=void 0,_!==void 0&&af(s,a,_)}g=g.next}while(g!==f)}}function Fl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function lf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function Cg(i){var s=i.alternate;s!==null&&(i.alternate=null,Cg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Li],delete s[Ko],delete s[Ec],delete s[RS],delete s[bS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Rg(i){return i.tag===5||i.tag===3||i.tag===4}function bg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Rg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function uf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=hl));else if(f!==4&&(i=i.child,i!==null))for(uf(i,s,a),i=i.sibling;i!==null;)uf(i,s,a),i=i.sibling}function cf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(cf(i,s,a),i=i.sibling;i!==null;)cf(i,s,a),i=i.sibling}var yn=null,Si=!1;function Ar(i,s,a){for(a=a.child;a!==null;)Pg(i,s,a),a=a.sibling}function Pg(i,s,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 5:Cn||$s(a,s);case 6:var f=yn,g=Si;yn=null,Ar(i,s,a),yn=f,Si=g,yn!==null&&(Si?(i=yn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):yn.removeChild(a.stateNode));break;case 18:yn!==null&&(Si?(i=yn,a=a.stateNode,i.nodeType===8?Mc(i.parentNode,a):i.nodeType===1&&Mc(i,a),Bo(i)):Mc(yn,a.stateNode));break;case 4:f=yn,g=Si,yn=a.stateNode.containerInfo,Si=!0,Ar(i,s,a),yn=f,Si=g;break;case 0:case 11:case 14:case 15:if(!Cn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var _=g,E=_.destroy;_=_.tag,E!==void 0&&((_&2)!==0||(_&4)!==0)&&af(a,s,E),g=g.next}while(g!==f)}Ar(i,s,a);break;case 1:if(!Cn&&($s(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(U){Qt(a,s,U)}Ar(i,s,a);break;case 21:Ar(i,s,a);break;case 22:a.mode&1?(Cn=(f=Cn)||a.memoizedState!==null,Ar(i,s,a),Cn=f):Ar(i,s,a);break;default:Ar(i,s,a)}}function Dg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new jS),s.forEach(function(f){var g=tM.bind(null,i,f);a.has(f)||(a.add(f),f.then(g,g))})}}function Mi(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var g=a[f];try{var _=i,E=s,U=E;e:for(;U!==null;){switch(U.tag){case 5:yn=U.stateNode,Si=!1;break e;case 3:yn=U.stateNode.containerInfo,Si=!0;break e;case 4:yn=U.stateNode.containerInfo,Si=!0;break e}U=U.return}if(yn===null)throw Error(t(160));Pg(_,E,g),yn=null,Si=!1;var z=g.alternate;z!==null&&(z.return=null),g.return=null}catch(re){Qt(g,s,re)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Lg(s,i),s=s.sibling}function Lg(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Mi(s,i),Ui(i),f&4){try{aa(3,i,i.return),Fl(3,i)}catch(Qe){Qt(i,i.return,Qe)}try{aa(5,i,i.return)}catch(Qe){Qt(i,i.return,Qe)}}break;case 1:Mi(s,i),Ui(i),f&512&&a!==null&&$s(a,a.return);break;case 5:if(Mi(s,i),Ui(i),f&512&&a!==null&&$s(a,a.return),i.flags&32){var g=i.stateNode;try{Me(g,"")}catch(Qe){Qt(i,i.return,Qe)}}if(f&4&&(g=i.stateNode,g!=null)){var _=i.memoizedProps,E=a!==null?a.memoizedProps:_,U=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{U==="input"&&_.type==="radio"&&_.name!=null&&tt(g,_),Ie(U,E);var re=Ie(U,_);for(E=0;E<z.length;E+=2){var _e=z[E],Se=z[E+1];_e==="style"?Ue(g,Se):_e==="dangerouslySetInnerHTML"?Ke(g,Se):_e==="children"?Me(g,Se):C(g,_e,Se,re)}switch(U){case"input":Ge(g,_);break;case"textarea":w(g,_);break;case"select":var ve=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!_.multiple;var He=_.value;He!=null?kt(g,!!_.multiple,He,!1):ve!==!!_.multiple&&(_.defaultValue!=null?kt(g,!!_.multiple,_.defaultValue,!0):kt(g,!!_.multiple,_.multiple?[]:"",!1))}g[Ko]=_}catch(Qe){Qt(i,i.return,Qe)}}break;case 6:if(Mi(s,i),Ui(i),f&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,_=i.memoizedProps;try{g.nodeValue=_}catch(Qe){Qt(i,i.return,Qe)}}break;case 3:if(Mi(s,i),Ui(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{Bo(s.containerInfo)}catch(Qe){Qt(i,i.return,Qe)}break;case 4:Mi(s,i),Ui(i);break;case 13:Mi(s,i),Ui(i),g=i.child,g.flags&8192&&(_=g.memoizedState!==null,g.stateNode.isHidden=_,!_||g.alternate!==null&&g.alternate.memoizedState!==null||(hf=j())),f&4&&Dg(i);break;case 22:if(_e=a!==null&&a.memoizedState!==null,i.mode&1?(Cn=(re=Cn)||_e,Mi(s,i),Cn=re):Mi(s,i),Ui(i),f&8192){if(re=i.memoizedState!==null,(i.stateNode.isHidden=re)&&!_e&&(i.mode&1)!==0)for(Xe=i,_e=i.child;_e!==null;){for(Se=Xe=_e;Xe!==null;){switch(ve=Xe,He=ve.child,ve.tag){case 0:case 11:case 14:case 15:aa(4,ve,ve.return);break;case 1:$s(ve,ve.return);var $e=ve.stateNode;if(typeof $e.componentWillUnmount=="function"){f=ve,a=ve.return;try{s=f,$e.props=s.memoizedProps,$e.state=s.memoizedState,$e.componentWillUnmount()}catch(Qe){Qt(f,a,Qe)}}break;case 5:$s(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Ug(Se);continue}}He!==null?(He.return=ve,Xe=He):Ug(Se)}_e=_e.sibling}e:for(_e=null,Se=i;;){if(Se.tag===5){if(_e===null){_e=Se;try{g=Se.stateNode,re?(_=g.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(U=Se.stateNode,z=Se.memoizedProps.style,E=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=Te("display",E))}catch(Qe){Qt(i,i.return,Qe)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=re?"":Se.memoizedProps}catch(Qe){Qt(i,i.return,Qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Mi(s,i),Ui(i),f&4&&Dg(i);break;case 21:break;default:Mi(s,i),Ui(i)}}function Ui(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Rg(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(Me(g,""),f.flags&=-33);var _=bg(i);cf(i,_,g);break;case 3:case 4:var E=f.stateNode.containerInfo,U=bg(i);uf(i,U,E);break;default:throw Error(t(161))}}catch(z){Qt(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function YS(i,s,a){Xe=i,Ig(i)}function Ig(i,s,a){for(var f=(i.mode&1)!==0;Xe!==null;){var g=Xe,_=g.child;if(g.tag===22&&f){var E=g.memoizedState!==null||Ul;if(!E){var U=g.alternate,z=U!==null&&U.memoizedState!==null||Cn;U=Ul;var re=Cn;if(Ul=E,(Cn=z)&&!re)for(Xe=g;Xe!==null;)E=Xe,z=E.child,E.tag===22&&E.memoizedState!==null?Fg(g):z!==null?(z.return=E,Xe=z):Fg(g);for(;_!==null;)Xe=_,Ig(_),_=_.sibling;Xe=g,Ul=U,Cn=re}Ng(i)}else(g.subtreeFlags&8772)!==0&&_!==null?(_.return=g,Xe=_):Ng(i)}}function Ng(i){for(;Xe!==null;){var s=Xe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Cn||Fl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Cn)if(a===null)f.componentDidMount();else{var g=s.elementType===s.type?a.memoizedProps:xi(s.type,a.memoizedProps);f.componentDidUpdate(g,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Um(s,_,f);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Um(s,E,a)}break;case 5:var U=s.stateNode;if(a===null&&s.flags&4){a=U;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var re=s.alternate;if(re!==null){var _e=re.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&Bo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||s.flags&512&&lf(s)}catch(ve){Qt(s,s.return,ve)}}if(s===i){Xe=null;break}if(a=s.sibling,a!==null){a.return=s.return,Xe=a;break}Xe=s.return}}function Ug(i){for(;Xe!==null;){var s=Xe;if(s===i){Xe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Xe=a;break}Xe=s.return}}function Fg(i){for(;Xe!==null;){var s=Xe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Fl(4,s)}catch(z){Qt(s,a,z)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var g=s.return;try{f.componentDidMount()}catch(z){Qt(s,g,z)}}var _=s.return;try{lf(s)}catch(z){Qt(s,_,z)}break;case 5:var E=s.return;try{lf(s)}catch(z){Qt(s,E,z)}}}catch(z){Qt(s,s.return,z)}if(s===i){Xe=null;break}var U=s.sibling;if(U!==null){U.return=s.return,Xe=U;break}Xe=s.return}}var qS=Math.ceil,Ol=A.ReactCurrentDispatcher,ff=A.ReactCurrentOwner,oi=A.ReactCurrentBatchConfig,wt=0,mn=null,sn=null,xn=0,Qn=0,Ks=Sr(0),cn=0,la=null,is=0,kl=0,df=0,ua=null,zn=null,hf=0,Zs=1/0,er=null,Bl=!1,pf=null,Cr=null,Vl=!1,Rr=null,zl=0,ca=0,mf=null,Hl=-1,Gl=0;function Un(){return(wt&6)!==0?j():Hl!==-1?Hl:Hl=j()}function br(i){return(i.mode&1)===0?1:(wt&2)!==0&&xn!==0?xn&-xn:DS.transition!==null?(Gl===0&&(Gl=In()),Gl):(i=Mt,i!==0||(i=window.event,i=i===void 0?16:kp(i.type)),i)}function Ei(i,s,a,f){if(50<ca)throw ca=0,mf=null,Error(t(185));en(i,a,f),((wt&2)===0||i!==mn)&&(i===mn&&((wt&2)===0&&(kl|=a),cn===4&&Pr(i,xn)),Hn(i,f),a===1&&wt===0&&(s.mode&1)===0&&(Zs=j()+500,vl&&Er()))}function Hn(i,s){var a=i.callbackNode;qr(i,s);var f=vi(i,i===mn?xn:0);if(f===0)a!==null&&X(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&X(a),s===1)i.tag===0?PS(kg.bind(null,i)):Em(kg.bind(null,i)),AS(function(){(wt&6)===0&&Er()}),a=null;else{switch(Pp(f)){case 1:a=Fe;break;case 4:a=qe;break;case 16:a=ze;break;case 536870912:a=at;break;default:a=ze}a=Xg(a,Og.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Og(i,s){if(Hl=-1,Gl=0,(wt&6)!==0)throw Error(t(327));var a=i.callbackNode;if(Qs()&&i.callbackNode!==a)return null;var f=vi(i,i===mn?xn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=Wl(i,f);else{s=f;var g=wt;wt|=2;var _=Vg();(mn!==i||xn!==s)&&(er=null,Zs=j()+500,ss(i,s));do try{ZS();break}catch(U){Bg(i,U)}while(!0);Lc(),Ol.current=_,wt=g,sn!==null?s=0:(mn=null,xn=0,s=cn)}if(s!==0){if(s===2&&(g=Vt(i),g!==0&&(f=g,s=gf(i,g))),s===1)throw a=la,ss(i,0),Pr(i,f),Hn(i,j()),a;if(s===6)Pr(i,f);else{if(g=i.current.alternate,(f&30)===0&&!$S(g)&&(s=Wl(i,f),s===2&&(_=Vt(i),_!==0&&(f=_,s=gf(i,_))),s===1))throw a=la,ss(i,0),Pr(i,f),Hn(i,j()),a;switch(i.finishedWork=g,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:os(i,zn,er);break;case 3:if(Pr(i,f),(f&130023424)===f&&(s=hf+500-j(),10<s)){if(vi(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){Un(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Sc(os.bind(null,i,zn,er),s);break}os(i,zn,er);break;case 4:if(Pr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,g=-1;0<f;){var E=31-Tt(f);_=1<<E,E=s[E],E>g&&(g=E),f&=~_}if(f=g,f=j()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*qS(f/1960))-f,10<f){i.timeoutHandle=Sc(os.bind(null,i,zn,er),f);break}os(i,zn,er);break;case 5:os(i,zn,er);break;default:throw Error(t(329))}}}return Hn(i,j()),i.callbackNode===a?Og.bind(null,i):null}function gf(i,s){var a=ua;return i.current.memoizedState.isDehydrated&&(ss(i,s).flags|=256),i=Wl(i,s),i!==2&&(s=zn,zn=a,s!==null&&vf(s)),i}function vf(i){zn===null?zn=i:zn.push.apply(zn,i)}function $S(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var g=a[f],_=g.getSnapshot;g=g.value;try{if(!_i(_(),g))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Pr(i,s){for(s&=~df,s&=~kl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-Tt(s),f=1<<a;i[a]=-1,s&=~f}}function kg(i){if((wt&6)!==0)throw Error(t(327));Qs();var s=vi(i,0);if((s&1)===0)return Hn(i,j()),null;var a=Wl(i,s);if(i.tag!==0&&a===2){var f=Vt(i);f!==0&&(s=f,a=gf(i,f))}if(a===1)throw a=la,ss(i,0),Pr(i,s),Hn(i,j()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,os(i,zn,er),Hn(i,j()),null}function _f(i,s){var a=wt;wt|=1;try{return i(s)}finally{wt=a,wt===0&&(Zs=j()+500,vl&&Er())}}function rs(i){Rr!==null&&Rr.tag===0&&(wt&6)===0&&Qs();var s=wt;wt|=1;var a=oi.transition,f=Mt;try{if(oi.transition=null,Mt=1,i)return i()}finally{Mt=f,oi.transition=a,wt=s,(wt&6)===0&&Er()}}function yf(){Qn=Ks.current,Xt(Ks)}function ss(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,wS(a)),sn!==null)for(a=sn.return;a!==null;){var f=a;switch(Cc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&ml();break;case 3:Ys(),Xt(kn),Xt(Tn),Vc();break;case 5:kc(f);break;case 4:Ys();break;case 13:Xt($t);break;case 19:Xt($t);break;case 10:Ic(f.type._context);break;case 22:case 23:yf()}a=a.return}if(mn=i,sn=i=Dr(i.current,null),xn=Qn=s,cn=0,la=null,df=kl=is=0,zn=ua=null,es!==null){for(s=0;s<es.length;s++)if(a=es[s],f=a.interleaved,f!==null){a.interleaved=null;var g=f.next,_=a.pending;if(_!==null){var E=_.next;_.next=g,f.next=E}a.pending=f}es=null}return i}function Bg(i,s){do{var a=sn;try{if(Lc(),Cl.current=Dl,Rl){for(var f=Kt.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Rl=!1}if(ns=0,pn=un=Kt=null,na=!1,ia=0,ff.current=null,a===null||a.return===null){cn=1,la=s,sn=null;break}e:{var _=i,E=a.return,U=a,z=s;if(s=xn,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var re=z,_e=U,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var He=cg(E);if(He!==null){He.flags&=-257,fg(He,E,U,_,s),He.mode&1&&ug(_,re,s),s=He,z=re;var $e=s.updateQueue;if($e===null){var Qe=new Set;Qe.add(z),s.updateQueue=Qe}else $e.add(z);break e}else{if((s&1)===0){ug(_,re,s),xf();break e}z=Error(t(426))}}else if(Yt&&U.mode&1){var tn=cg(E);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),fg(tn,E,U,_,s),Pc(qs(z,U));break e}}_=z=qs(z,U),cn!==4&&(cn=2),ua===null?ua=[_]:ua.push(_),_=E;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var q=ag(_,z,s);Nm(_,q);break e;case 1:U=z;var W=_.type,J=_.stateNode;if((_.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(Cr===null||!Cr.has(J)))){_.flags|=65536,s&=-s,_.lanes|=s;var Ae=lg(_,U,s);Nm(_,Ae);break e}}_=_.return}while(_!==null)}Hg(a)}catch(Je){s=Je,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function Vg(){var i=Ol.current;return Ol.current=Dl,i===null?Dl:i}function xf(){(cn===0||cn===3||cn===2)&&(cn=4),mn===null||(is&268435455)===0&&(kl&268435455)===0||Pr(mn,xn)}function Wl(i,s){var a=wt;wt|=2;var f=Vg();(mn!==i||xn!==s)&&(er=null,ss(i,s));do try{KS();break}catch(g){Bg(i,g)}while(!0);if(Lc(),wt=a,Ol.current=f,sn!==null)throw Error(t(261));return mn=null,xn=0,cn}function KS(){for(;sn!==null;)zg(sn)}function ZS(){for(;sn!==null&&!ae();)zg(sn)}function zg(i){var s=jg(i.alternate,i,Qn);i.memoizedProps=i.pendingProps,s===null?Hg(i):sn=s,ff.current=null}function Hg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=GS(a,s,Qn),a!==null){sn=a;return}}else{if(a=WS(a,s),a!==null){a.flags&=32767,sn=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{cn=6,sn=null;return}}if(s=s.sibling,s!==null){sn=s;return}sn=s=i}while(s!==null);cn===0&&(cn=5)}function os(i,s,a){var f=Mt,g=oi.transition;try{oi.transition=null,Mt=1,QS(i,s,a,f)}finally{oi.transition=g,Mt=f}return null}function QS(i,s,a,f){do Qs();while(Rr!==null);if((wt&6)!==0)throw Error(t(327));a=i.finishedWork;var g=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(En(i,_),i===mn&&(sn=mn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Vl||(Vl=!0,Xg(ze,function(){return Qs(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=oi.transition,oi.transition=null;var E=Mt;Mt=1;var U=wt;wt|=4,ff.current=null,XS(i,a),Lg(a,i),_S(yc),tl=!!_c,yc=_c=null,i.current=a,YS(a),ue(),wt=U,Mt=E,oi.transition=_}else i.current=a;if(Vl&&(Vl=!1,Rr=i,zl=g),_=i.pendingLanes,_===0&&(Cr=null),Lt(a.stateNode),Hn(i,j()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)g=s[a],f(g.value,{componentStack:g.stack,digest:g.digest});if(Bl)throw Bl=!1,i=pf,pf=null,i;return(zl&1)!==0&&i.tag!==0&&Qs(),_=i.pendingLanes,(_&1)!==0?i===mf?ca++:(ca=0,mf=i):ca=0,Er(),null}function Qs(){if(Rr!==null){var i=Pp(zl),s=oi.transition,a=Mt;try{if(oi.transition=null,Mt=16>i?16:i,Rr===null)var f=!1;else{if(i=Rr,Rr=null,zl=0,(wt&6)!==0)throw Error(t(331));var g=wt;for(wt|=4,Xe=i.current;Xe!==null;){var _=Xe,E=_.child;if((Xe.flags&16)!==0){var U=_.deletions;if(U!==null){for(var z=0;z<U.length;z++){var re=U[z];for(Xe=re;Xe!==null;){var _e=Xe;switch(_e.tag){case 0:case 11:case 15:aa(8,_e,_)}var Se=_e.child;if(Se!==null)Se.return=_e,Xe=Se;else for(;Xe!==null;){_e=Xe;var ve=_e.sibling,He=_e.return;if(Cg(_e),_e===re){Xe=null;break}if(ve!==null){ve.return=He,Xe=ve;break}Xe=He}}}var $e=_.alternate;if($e!==null){var Qe=$e.child;if(Qe!==null){$e.child=null;do{var tn=Qe.sibling;Qe.sibling=null,Qe=tn}while(Qe!==null)}}Xe=_}}if((_.subtreeFlags&2064)!==0&&E!==null)E.return=_,Xe=E;else e:for(;Xe!==null;){if(_=Xe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:aa(9,_,_.return)}var q=_.sibling;if(q!==null){q.return=_.return,Xe=q;break e}Xe=_.return}}var W=i.current;for(Xe=W;Xe!==null;){E=Xe;var J=E.child;if((E.subtreeFlags&2064)!==0&&J!==null)J.return=E,Xe=J;else e:for(E=W;Xe!==null;){if(U=Xe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Fl(9,U)}}catch(Je){Qt(U,U.return,Je)}if(U===E){Xe=null;break e}var Ae=U.sibling;if(Ae!==null){Ae.return=U.return,Xe=Ae;break e}Xe=U.return}}if(wt=g,Er(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(et,i)}catch{}f=!0}return f}finally{Mt=a,oi.transition=s}}return!1}function Gg(i,s,a){s=qs(a,s),s=ag(i,s,1),i=wr(i,s,1),s=Un(),i!==null&&(en(i,1,s),Hn(i,s))}function Qt(i,s,a){if(i.tag===3)Gg(i,i,a);else for(;s!==null;){if(s.tag===3){Gg(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Cr===null||!Cr.has(f))){i=qs(a,i),i=lg(s,i,1),s=wr(s,i,1),i=Un(),s!==null&&(en(s,1,i),Hn(s,i));break}}s=s.return}}function JS(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=Un(),i.pingedLanes|=i.suspendedLanes&a,mn===i&&(xn&a)===a&&(cn===4||cn===3&&(xn&130023424)===xn&&500>j()-hf?ss(i,0):df|=a),Hn(i,s)}function Wg(i,s){s===0&&((i.mode&1)===0?s=1:(s=St,St<<=1,(St&130023424)===0&&(St=4194304)));var a=Un();i=Zi(i,s),i!==null&&(en(i,s,a),Hn(i,a))}function eM(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Wg(i,a)}function tM(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(a=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Wg(i,a)}var jg;jg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||kn.current)Vn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Vn=!1,HS(i,s,a);Vn=(i.flags&131072)!==0}else Vn=!1,Yt&&(s.flags&1048576)!==0&&Tm(s,yl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Nl(i,s),i=s.pendingProps;var g=Vs(s,Tn.current);Xs(s,a),g=Gc(null,s,f,i,g,a);var _=Wc();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Bn(f)?(_=!0,gl(s)):_=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Fc(s),g.updater=Ll,s.stateNode=g,g._reactInternals=s,Kc(s,f,i,a),s=ef(null,s,f,!0,_,a)):(s.tag=0,Yt&&_&&Ac(s),Nn(null,s,g,a),s=s.child),s;case 16:f=s.elementType;e:{switch(Nl(i,s),i=s.pendingProps,g=f._init,f=g(f._payload),s.type=f,g=s.tag=iM(f),i=xi(f,i),g){case 0:s=Jc(null,s,f,i,a);break e;case 1:s=vg(null,s,f,i,a);break e;case 11:s=dg(null,s,f,i,a);break e;case 14:s=hg(null,s,f,xi(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:xi(f,g),Jc(i,s,f,g,a);case 1:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:xi(f,g),vg(i,s,f,g,a);case 3:e:{if(_g(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,g=_.element,Im(i,s),wl(s,f,null,a);var E=s.memoizedState;if(f=E.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){g=qs(Error(t(423)),s),s=yg(i,s,f,a,g);break e}else if(f!==g){g=qs(Error(t(424)),s),s=yg(i,s,f,a,g);break e}else for(Zn=xr(s.stateNode.containerInfo.firstChild),Kn=s,Yt=!0,yi=null,a=Dm(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),f===g){s=Ji(i,s,a);break e}Nn(i,s,f,a)}s=s.child}return s;case 5:return Fm(s),i===null&&bc(s),f=s.type,g=s.pendingProps,_=i!==null?i.memoizedProps:null,E=g.children,xc(f,g)?E=null:_!==null&&xc(f,_)&&(s.flags|=32),gg(i,s),Nn(i,s,E,a),s.child;case 6:return i===null&&bc(s),null;case 13:return xg(i,s,a);case 4:return Oc(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Ws(s,null,f,a):Nn(i,s,f,a),s.child;case 11:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:xi(f,g),dg(i,s,f,g,a);case 7:return Nn(i,s,s.pendingProps,a),s.child;case 8:return Nn(i,s,s.pendingProps.children,a),s.child;case 12:return Nn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,g=s.pendingProps,_=s.memoizedProps,E=g.value,Ht(Ml,f._currentValue),f._currentValue=E,_!==null)if(_i(_.value,E)){if(_.children===g.children&&!kn.current){s=Ji(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var U=_.dependencies;if(U!==null){E=_.child;for(var z=U.firstContext;z!==null;){if(z.context===f){if(_.tag===1){z=Qi(-1,a&-a),z.tag=2;var re=_.updateQueue;if(re!==null){re=re.shared;var _e=re.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),re.pending=z}}_.lanes|=a,z=_.alternate,z!==null&&(z.lanes|=a),Nc(_.return,a,s),U.lanes|=a;break}z=z.next}}else if(_.tag===10)E=_.type===s.type?null:_.child;else if(_.tag===18){if(E=_.return,E===null)throw Error(t(341));E.lanes|=a,U=E.alternate,U!==null&&(U.lanes|=a),Nc(E,a,s),E=_.sibling}else E=_.child;if(E!==null)E.return=_;else for(E=_;E!==null;){if(E===s){E=null;break}if(_=E.sibling,_!==null){_.return=E.return,E=_;break}E=E.return}_=E}Nn(i,s,g.children,a),s=s.child}return s;case 9:return g=s.type,f=s.pendingProps.children,Xs(s,a),g=ri(g),f=f(g),s.flags|=1,Nn(i,s,f,a),s.child;case 14:return f=s.type,g=xi(f,s.pendingProps),g=xi(f.type,g),hg(i,s,f,g,a);case 15:return pg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:xi(f,g),Nl(i,s),s.tag=1,Bn(f)?(i=!0,gl(s)):i=!1,Xs(s,a),sg(s,f,g),Kc(s,f,g,a),ef(null,s,f,!0,i,a);case 19:return Mg(i,s,a);case 22:return mg(i,s,a)}throw Error(t(156,s.tag))};function Xg(i,s){return b(i,s)}function nM(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(i,s,a,f){return new nM(i,s,a,f)}function Sf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function iM(i){if(typeof i=="function")return Sf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===K)return 11;if(i===pe)return 14}return 2}function Dr(i,s){var a=i.alternate;return a===null?(a=ai(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function jl(i,s,a,f,g,_){var E=2;if(f=i,typeof i=="function")Sf(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case F:return as(a.children,g,_,s);case k:E=8,g|=8;break;case P:return i=ai(12,a,s,g|2),i.elementType=P,i.lanes=_,i;case ie:return i=ai(13,a,s,g),i.elementType=ie,i.lanes=_,i;case ce:return i=ai(19,a,s,g),i.elementType=ce,i.lanes=_,i;case oe:return Xl(a,g,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:E=10;break e;case H:E=9;break e;case K:E=11;break e;case pe:E=14;break e;case Z:E=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ai(E,a,s,g),s.elementType=i,s.type=f,s.lanes=_,s}function as(i,s,a,f){return i=ai(7,i,f,s),i.lanes=a,i}function Xl(i,s,a,f){return i=ai(22,i,f,s),i.elementType=oe,i.lanes=a,i.stateNode={isHidden:!1},i}function Mf(i,s,a){return i=ai(6,i,null,s),i.lanes=a,i}function Ef(i,s,a){return s=ai(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function rM(i,s,a,f,g){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mn(0),this.expirationTimes=Mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mn(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Tf(i,s,a,f,g,_,E,U,z){return i=new rM(i,s,a,U,z),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ai(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fc(_),i}function sM(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function Yg(i){if(!i)return Mr;i=i._reactInternals;e:{if(Xi(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Bn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Bn(a))return Sm(i,a,s)}return s}function qg(i,s,a,f,g,_,E,U,z){return i=Tf(a,f,!0,i,g,_,E,U,z),i.context=Yg(null),a=i.current,f=Un(),g=br(a),_=Qi(f,g),_.callback=s??null,wr(a,_,g),i.current.lanes=g,en(i,g,f),Hn(i,f),i}function Yl(i,s,a,f){var g=s.current,_=Un(),E=br(g);return a=Yg(a),s.context===null?s.context=a:s.pendingContext=a,s=Qi(_,E),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=wr(g,s,E),i!==null&&(Ei(i,g,E,_),Tl(i,g,E)),E}function ql(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function $g(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function wf(i,s){$g(i,s),(i=i.alternate)&&$g(i,s)}function oM(){return null}var Kg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Af(i){this._internalRoot=i}$l.prototype.render=Af.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Yl(i,s,null,null)},$l.prototype.unmount=Af.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;rs(function(){Yl(null,i,null,null)}),s[Yi]=null}};function $l(i){this._internalRoot=i}$l.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ip();i={blockedOn:null,target:i,priority:s};for(var a=0;a<vr.length&&s!==0&&s<vr[a].priority;a++);vr.splice(a,0,i),a===0&&Fp(i)}};function Cf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Kl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Zg(){}function aM(i,s,a,f,g){if(g){if(typeof f=="function"){var _=f;f=function(){var re=ql(E);_.call(re)}}var E=qg(s,f,i,0,null,!1,!1,"",Zg);return i._reactRootContainer=E,i[Yi]=E.current,qo(i.nodeType===8?i.parentNode:i),rs(),E}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var U=f;f=function(){var re=ql(z);U.call(re)}}var z=Tf(i,0,!1,null,null,!1,!1,"",Zg);return i._reactRootContainer=z,i[Yi]=z.current,qo(i.nodeType===8?i.parentNode:i),rs(function(){Yl(s,z,a,f)}),z}function Zl(i,s,a,f,g){var _=a._reactRootContainer;if(_){var E=_;if(typeof g=="function"){var U=g;g=function(){var z=ql(E);U.call(z)}}Yl(s,E,i,g)}else E=aM(a,s,i,g,f);return ql(E)}Dp=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=ln(s.pendingLanes);a!==0&&($r(s,a|1),Hn(s,j()),(wt&6)===0&&(Zs=j()+500,Er()))}break;case 13:rs(function(){var f=Zi(i,1);if(f!==null){var g=Un();Ei(f,i,1,g)}}),wf(i,1)}},Zu=function(i){if(i.tag===13){var s=Zi(i,134217728);if(s!==null){var a=Un();Ei(s,i,134217728,a)}wf(i,134217728)}},Lp=function(i){if(i.tag===13){var s=br(i),a=Zi(i,s);if(a!==null){var f=Un();Ei(a,i,s,f)}wf(i,s)}},Ip=function(){return Mt},Np=function(i,s){var a=Mt;try{return Mt=i,s()}finally{Mt=a}},Ee=function(i,s,a){switch(s){case"input":if(Ge(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var g=pl(f);if(!g)throw Error(t(90));zt(f),Ge(f,g)}}}break;case"textarea":w(i,a);break;case"select":s=a.value,s!=null&&kt(i,!!a.multiple,s,!1)}},Ze=_f,mt=rs;var lM={usingClientEntryPoint:!1,Events:[Zo,ks,pl,ee,De,_f]},fa={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uM={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Za(i),i===null?null:i.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||oM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{et=Ql.inject(uM),dt=Ql}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lM,Gn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(s))throw Error(t(200));return sM(i,s,null,a)},Gn.createRoot=function(i,s){if(!Cf(i))throw Error(t(299));var a=!1,f="",g=Kg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=Tf(i,1,!1,null,null,a,!1,f,g),i[Yi]=s.current,qo(i.nodeType===8?i.parentNode:i),new Af(s)},Gn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Za(s),i=i===null?null:i.stateNode,i},Gn.flushSync=function(i){return rs(i)},Gn.hydrate=function(i,s,a){if(!Kl(s))throw Error(t(200));return Zl(null,i,s,!0,a)},Gn.hydrateRoot=function(i,s,a){if(!Cf(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,g=!1,_="",E=Kg;if(a!=null&&(a.unstable_strictMode===!0&&(g=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=qg(s,null,i,1,a??null,g,!1,_,E),i[Yi]=s.current,qo(i),f)for(i=0;i<f.length;i++)a=f[i],g=a._getVersion,g=g(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,g]:s.mutableSourceEagerHydrationData.push(a,g);return new $l(s)},Gn.render=function(i,s,a){if(!Kl(s))throw Error(t(200));return Zl(null,i,s,!1,a)},Gn.unmountComponentAtNode=function(i){if(!Kl(i))throw Error(t(40));return i._reactRootContainer?(rs(function(){Zl(null,null,i,!1,function(){i._reactRootContainer=null,i[Yi]=null})}),!0):!1},Gn.unstable_batchedUpdates=_f,Gn.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!Kl(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Zl(i,s,a,!1,f)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var s0;function S_(){if(s0)return Pf.exports;s0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Pf.exports=gM(),Pf.exports}var o0;function vM(){if(o0)return Jl;o0=1;var n=S_();return Jl.createRoot=n.createRoot,Jl.hydrateRoot=n.hydrateRoot,Jl}var _M=vM();const yM="modulepreload",xM=function(n){return"/myportfolio/"+n},a0={},Oa=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");o=u(t.map(h=>{if(h=xM(h),h in a0)return;a0[h]=!0;const m=h.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":yM,m||(v.as="script"),v.crossOrigin="",v.href=h,d&&v.setAttribute("nonce",d),document.head.appendChild(v),m)return new Promise((x,M)=>{v.addEventListener("load",x),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return o.then(u=>{for(const c of u||[])c.status==="rejected"&&l(c.reason);return e().catch(l)})};var Pe=Oh();const Le=x_(Pe);var SM=S_();const MM=x_(SM);function EM(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}const TM=n=>{switch(n){case"success":return CM;case"info":return bM;case"warning":return RM;case"error":return PM;default:return null}},wM=Array(12).fill(0),AM=({visible:n,className:e})=>Le.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":n},Le.createElement("div",{className:"sonner-spinner"},wM.map((t,r)=>Le.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),CM=Le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Le.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),RM=Le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},Le.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),bM=Le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Le.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),PM=Le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Le.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),DM=Le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},Le.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Le.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),LM=()=>{const[n,e]=Le.useState(document.hidden);return Le.useEffect(()=>{const t=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),n};let Ad=1;class IM{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;const{message:r,...o}=e,l=typeof e?.id=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Ad++,u=this.toasts.find(d=>d.id===l),c=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(l)&&this.dismissedToasts.delete(l),u?this.toasts=this.toasts.map(d=>d.id===l?(this.publish({...d,...e,id:l,title:r}),{...d,...e,id:l,dismissible:c,title:r}):d):this.addToast({title:r,...o,dismissible:c,id:l}),l},this.dismiss=e=>(e?(this.dismissedToasts.add(e),requestAnimationFrame(()=>this.subscribers.forEach(t=>t({id:e,dismiss:!0})))):this.toasts.forEach(t=>{this.subscribers.forEach(r=>r({id:t.id,dismiss:!0}))}),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let r;t.loading!==void 0&&(r=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));const o=Promise.resolve(e instanceof Function?e():e);let l=r!==void 0,u;const c=o.then(async h=>{if(u=["resolve",h],Le.isValidElement(h))l=!1,this.create({id:r,type:"default",message:h});else if(UM(h)&&!h.ok){l=!1;const p=typeof t.error=="function"?await t.error(`HTTP error! status: ${h.status}`):t.error,v=typeof t.description=="function"?await t.description(`HTTP error! status: ${h.status}`):t.description,M=typeof p=="object"&&!Le.isValidElement(p)?p:{message:p};this.create({id:r,type:"error",description:v,...M})}else if(h instanceof Error){l=!1;const p=typeof t.error=="function"?await t.error(h):t.error,v=typeof t.description=="function"?await t.description(h):t.description,M=typeof p=="object"&&!Le.isValidElement(p)?p:{message:p};this.create({id:r,type:"error",description:v,...M})}else if(t.success!==void 0){l=!1;const p=typeof t.success=="function"?await t.success(h):t.success,v=typeof t.description=="function"?await t.description(h):t.description,M=typeof p=="object"&&!Le.isValidElement(p)?p:{message:p};this.create({id:r,type:"success",description:v,...M})}}).catch(async h=>{if(u=["reject",h],t.error!==void 0){l=!1;const m=typeof t.error=="function"?await t.error(h):t.error,p=typeof t.description=="function"?await t.description(h):t.description,x=typeof m=="object"&&!Le.isValidElement(m)?m:{message:m};this.create({id:r,type:"error",description:p,...x})}}).finally(()=>{l&&(this.dismiss(r),r=void 0),t.finally==null||t.finally.call(t)}),d=()=>new Promise((h,m)=>c.then(()=>u[0]==="reject"?m(u[1]):h(u[1])).catch(m));return typeof r!="string"&&typeof r!="number"?{unwrap:d}:Object.assign(r,{unwrap:d})},this.custom=(e,t)=>{const r=t?.id||Ad++;return this.create({jsx:e(r),id:r,...t}),r},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const jn=new IM,NM=(n,e)=>{const t=e?.id||Ad++;return jn.addToast({title:n,...e,id:t}),t},UM=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",FM=NM,OM=()=>jn.toasts,kM=()=>jn.getActiveToasts();Object.assign(FM,{success:jn.success,info:jn.info,warning:jn.warning,error:jn.error,custom:jn.custom,message:jn.message,promise:jn.promise,dismiss:jn.dismiss,loading:jn.loading},{getHistory:OM,getToasts:kM});EM("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function eu(n){return n.label!==void 0}const BM=3,VM="24px",zM="16px",l0=4e3,HM=356,GM=14,WM=45,jM=200;function Fi(...n){return n.filter(Boolean).join(" ")}function XM(n){const[e,t]=n.split("-"),r=[];return e&&r.push(e),t&&r.push(t),r}const YM=n=>{var e,t,r,o,l,u,c,d,h;const{invert:m,toast:p,unstyled:v,interacting:x,setHeights:M,visibleToasts:T,heights:S,index:y,toasts:D,expanded:C,removeToast:A,defaultRichColors:N,closeButton:I,style:F,cancelButtonStyle:k,actionButtonStyle:P,className:R="",descriptionClassName:H="",duration:K,position:ie,gap:ce,expandByDefault:pe,classNames:Z,icons:oe,closeButtonAriaLabel:V="Close toast"}=n,[le,te]=Le.useState(null),[O,se]=Le.useState(null),[ye,be]=Le.useState(!1),[Re,Q]=Le.useState(!1),[fe,me]=Le.useState(!1),[Ne,ke]=Le.useState(!1),[pt,zt]=Le.useState(!1),[B,At]=Le.useState(0),[ft,tt]=Le.useState(0),Ge=Le.useRef(p.duration||K||l0),Pt=Le.useRef(null),Be=Le.useRef(null),ut=y===0,kt=y+1<=T,_t=p.type,L=p.dismissible!==!1,w=p.className||"",$=p.descriptionClassName||"",he=Le.useMemo(()=>S.findIndex(ee=>ee.toastId===p.id)||0,[S,p.id]),ge=Le.useMemo(()=>{var ee;return(ee=p.closeButton)!=null?ee:I},[p.closeButton,I]),de=Le.useMemo(()=>p.duration||K||l0,[p.duration,K]),Ke=Le.useRef(0),Me=Le.useRef(0),We=Le.useRef(0),je=Le.useRef(null),[Te,Ue]=ie.split("-"),nt=Le.useMemo(()=>S.reduce((ee,De,Ze)=>Ze>=he?ee:ee+De.height,0),[S,he]),Ye=LM(),Ie=p.invert||m,lt=_t==="loading";Me.current=Le.useMemo(()=>he*ce+nt,[he,nt]),Le.useEffect(()=>{Ge.current=de},[de]),Le.useEffect(()=>{be(!0)},[]),Le.useEffect(()=>{const ee=Be.current;if(ee){const De=ee.getBoundingClientRect().height;return tt(De),M(Ze=>[{toastId:p.id,height:De,position:p.position},...Ze]),()=>M(Ze=>Ze.filter(mt=>mt.toastId!==p.id))}},[M,p.id]),Le.useLayoutEffect(()=>{if(!ye)return;const ee=Be.current,De=ee.style.height;ee.style.height="auto";const Ze=ee.getBoundingClientRect().height;ee.style.height=De,tt(Ze),M(mt=>mt.find(Dt=>Dt.toastId===p.id)?mt.map(Dt=>Dt.toastId===p.id?{...Dt,height:Ze}:Dt):[{toastId:p.id,height:Ze,position:p.position},...mt])},[ye,p.title,p.description,M,p.id,p.jsx,p.action,p.cancel]);const G=Le.useCallback(()=>{Q(!0),At(Me.current),M(ee=>ee.filter(De=>De.toastId!==p.id)),setTimeout(()=>{A(p)},jM)},[p,A,M,Me]);Le.useEffect(()=>{if(p.promise&&_t==="loading"||p.duration===1/0||p.type==="loading")return;let ee;return C||x||Ye?(()=>{if(We.current<Ke.current){const mt=new Date().getTime()-Ke.current;Ge.current=Ge.current-mt}We.current=new Date().getTime()})():(()=>{Ge.current!==1/0&&(Ke.current=new Date().getTime(),ee=setTimeout(()=>{p.onAutoClose==null||p.onAutoClose.call(p,p),G()},Ge.current))})(),()=>clearTimeout(ee)},[C,x,p,_t,Ye,G]),Le.useEffect(()=>{p.delete&&(G(),p.onDismiss==null||p.onDismiss.call(p,p))},[G,p.delete]);function Ee(){var ee;if(oe?.loading){var De;return Le.createElement("div",{className:Fi(Z?.loader,p==null||(De=p.classNames)==null?void 0:De.loader,"sonner-loader"),"data-visible":_t==="loading"},oe.loading)}return Le.createElement(AM,{className:Fi(Z?.loader,p==null||(ee=p.classNames)==null?void 0:ee.loader),visible:_t==="loading"})}const Ce=p.icon||oe?.[_t]||TM(_t);var Ve,xe;return Le.createElement("li",{tabIndex:0,ref:Be,className:Fi(R,w,Z?.toast,p==null||(e=p.classNames)==null?void 0:e.toast,Z?.default,Z?.[_t],p==null||(t=p.classNames)==null?void 0:t[_t]),"data-sonner-toast":"","data-rich-colors":(Ve=p.richColors)!=null?Ve:N,"data-styled":!(p.jsx||p.unstyled||v),"data-mounted":ye,"data-promise":!!p.promise,"data-swiped":pt,"data-removed":Re,"data-visible":kt,"data-y-position":Te,"data-x-position":Ue,"data-index":y,"data-front":ut,"data-swiping":fe,"data-dismissible":L,"data-type":_t,"data-invert":Ie,"data-swipe-out":Ne,"data-swipe-direction":O,"data-expanded":!!(C||pe&&ye),"data-testid":p.testId,style:{"--index":y,"--toasts-before":y,"--z-index":D.length-y,"--offset":`${Re?B:Me.current}px`,"--initial-height":pe?"auto":`${ft}px`,...F,...p.style},onDragEnd:()=>{me(!1),te(null),je.current=null},onPointerDown:ee=>{ee.button!==2&&(lt||!L||(Pt.current=new Date,At(Me.current),ee.target.setPointerCapture(ee.pointerId),ee.target.tagName!=="BUTTON"&&(me(!0),je.current={x:ee.clientX,y:ee.clientY})))},onPointerUp:()=>{var ee,De,Ze;if(Ne||!L)return;je.current=null;const mt=Number(((ee=Be.current)==null?void 0:ee.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),yt=Number(((De=Be.current)==null?void 0:De.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Dt=new Date().getTime()-((Ze=Pt.current)==null?void 0:Ze.getTime()),It=le==="x"?mt:yt,mi=Math.abs(It)/Dt;if(Math.abs(It)>=WM||mi>.11){At(Me.current),p.onDismiss==null||p.onDismiss.call(p,p),se(le==="x"?mt>0?"right":"left":yt>0?"down":"up"),G(),ke(!0);return}else{var Wt,_n;(Wt=Be.current)==null||Wt.style.setProperty("--swipe-amount-x","0px"),(_n=Be.current)==null||_n.style.setProperty("--swipe-amount-y","0px")}zt(!1),me(!1),te(null)},onPointerMove:ee=>{var De,Ze,mt;if(!je.current||!L||((De=window.getSelection())==null?void 0:De.toString().length)>0)return;const Dt=ee.clientY-je.current.y,It=ee.clientX-je.current.x;var mi;const Wt=(mi=n.swipeDirections)!=null?mi:XM(ie);!le&&(Math.abs(It)>1||Math.abs(Dt)>1)&&te(Math.abs(It)>Math.abs(Dt)?"x":"y");let _n={x:0,y:0};const gi=Dn=>1/(1.5+Math.abs(Dn)/20);if(le==="y"){if(Wt.includes("top")||Wt.includes("bottom"))if(Wt.includes("top")&&Dt<0||Wt.includes("bottom")&&Dt>0)_n.y=Dt;else{const Dn=Dt*gi(Dt);_n.y=Math.abs(Dn)<Math.abs(Dt)?Dn:Dt}}else if(le==="x"&&(Wt.includes("left")||Wt.includes("right")))if(Wt.includes("left")&&It<0||Wt.includes("right")&&It>0)_n.x=It;else{const Dn=It*gi(It);_n.x=Math.abs(Dn)<Math.abs(It)?Dn:It}(Math.abs(_n.x)>0||Math.abs(_n.y)>0)&&zt(!0),(Ze=Be.current)==null||Ze.style.setProperty("--swipe-amount-x",`${_n.x}px`),(mt=Be.current)==null||mt.style.setProperty("--swipe-amount-y",`${_n.y}px`)}},ge&&!p.jsx&&_t!=="loading"?Le.createElement("button",{"aria-label":V,"data-disabled":lt,"data-close-button":!0,onClick:lt||!L?()=>{}:()=>{G(),p.onDismiss==null||p.onDismiss.call(p,p)},className:Fi(Z?.closeButton,p==null||(r=p.classNames)==null?void 0:r.closeButton)},(xe=oe?.close)!=null?xe:DM):null,(_t||p.icon||p.promise)&&p.icon!==null&&(oe?.[_t]!==null||p.icon)?Le.createElement("div",{"data-icon":"",className:Fi(Z?.icon,p==null||(o=p.classNames)==null?void 0:o.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Ee():null,p.type!=="loading"?Ce:null):null,Le.createElement("div",{"data-content":"",className:Fi(Z?.content,p==null||(l=p.classNames)==null?void 0:l.content)},Le.createElement("div",{"data-title":"",className:Fi(Z?.title,p==null||(u=p.classNames)==null?void 0:u.title)},p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title),p.description?Le.createElement("div",{"data-description":"",className:Fi(H,$,Z?.description,p==null||(c=p.classNames)==null?void 0:c.description)},typeof p.description=="function"?p.description():p.description):null),Le.isValidElement(p.cancel)?p.cancel:p.cancel&&eu(p.cancel)?Le.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||k,onClick:ee=>{eu(p.cancel)&&L&&(p.cancel.onClick==null||p.cancel.onClick.call(p.cancel,ee),G())},className:Fi(Z?.cancelButton,p==null||(d=p.classNames)==null?void 0:d.cancelButton)},p.cancel.label):null,Le.isValidElement(p.action)?p.action:p.action&&eu(p.action)?Le.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||P,onClick:ee=>{eu(p.action)&&(p.action.onClick==null||p.action.onClick.call(p.action,ee),!ee.defaultPrevented&&G())},className:Fi(Z?.actionButton,p==null||(h=p.classNames)==null?void 0:h.actionButton)},p.action.label):null)};function u0(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function qM(n,e){const t={};return[n,e].forEach((r,o)=>{const l=o===1,u=l?"--mobile-offset":"--offset",c=l?zM:VM;function d(h){["top","right","bottom","left"].forEach(m=>{t[`${u}-${m}`]=typeof h=="number"?`${h}px`:h})}typeof r=="number"||typeof r=="string"?d(r):typeof r=="object"?["top","right","bottom","left"].forEach(h=>{r[h]===void 0?t[`${u}-${h}`]=c:t[`${u}-${h}`]=typeof r[h]=="number"?`${r[h]}px`:r[h]}):d(c)}),t}const $M=Le.forwardRef(function(e,t){const{id:r,invert:o,position:l="bottom-right",hotkey:u=["altKey","KeyT"],expand:c,closeButton:d,className:h,offset:m,mobileOffset:p,theme:v="light",richColors:x,duration:M,style:T,visibleToasts:S=BM,toastOptions:y,dir:D=u0(),gap:C=GM,icons:A,containerAriaLabel:N="Notifications"}=e,[I,F]=Le.useState([]),k=Le.useMemo(()=>r?I.filter(ye=>ye.toasterId===r):I.filter(ye=>!ye.toasterId),[I,r]),P=Le.useMemo(()=>Array.from(new Set([l].concat(k.filter(ye=>ye.position).map(ye=>ye.position)))),[k,l]),[R,H]=Le.useState([]),[K,ie]=Le.useState(!1),[ce,pe]=Le.useState(!1),[Z,oe]=Le.useState(v!=="system"?v:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),V=Le.useRef(null),le=u.join("+").replace(/Key/g,"").replace(/Digit/g,""),te=Le.useRef(null),O=Le.useRef(!1),se=Le.useCallback(ye=>{F(be=>{var Re;return(Re=be.find(Q=>Q.id===ye.id))!=null&&Re.delete||jn.dismiss(ye.id),be.filter(({id:Q})=>Q!==ye.id)})},[]);return Le.useEffect(()=>jn.subscribe(ye=>{if(ye.dismiss){requestAnimationFrame(()=>{F(be=>be.map(Re=>Re.id===ye.id?{...Re,delete:!0}:Re))});return}setTimeout(()=>{MM.flushSync(()=>{F(be=>{const Re=be.findIndex(Q=>Q.id===ye.id);return Re!==-1?[...be.slice(0,Re),{...be[Re],...ye},...be.slice(Re+1)]:[ye,...be]})})})}),[I]),Le.useEffect(()=>{if(v!=="system"){oe(v);return}if(v==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?oe("dark"):oe("light")),typeof window>"u")return;const ye=window.matchMedia("(prefers-color-scheme: dark)");try{ye.addEventListener("change",({matches:be})=>{oe(be?"dark":"light")})}catch{ye.addListener(({matches:Re})=>{try{oe(Re?"dark":"light")}catch(Q){console.error(Q)}})}},[v]),Le.useEffect(()=>{I.length<=1&&ie(!1)},[I]),Le.useEffect(()=>{const ye=be=>{var Re;if(u.every(me=>be[me]||be.code===me)){var fe;ie(!0),(fe=V.current)==null||fe.focus()}be.code==="Escape"&&(document.activeElement===V.current||(Re=V.current)!=null&&Re.contains(document.activeElement))&&ie(!1)};return document.addEventListener("keydown",ye),()=>document.removeEventListener("keydown",ye)},[u]),Le.useEffect(()=>{if(V.current)return()=>{te.current&&(te.current.focus({preventScroll:!0}),te.current=null,O.current=!1)}},[V.current]),Le.createElement("section",{ref:t,"aria-label":`${N} ${le}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},P.map((ye,be)=>{var Re;const[Q,fe]=ye.split("-");return k.length?Le.createElement("ol",{key:ye,dir:D==="auto"?u0():D,tabIndex:-1,ref:V,className:h,"data-sonner-toaster":!0,"data-sonner-theme":Z,"data-y-position":Q,"data-x-position":fe,style:{"--front-toast-height":`${((Re=R[0])==null?void 0:Re.height)||0}px`,"--width":`${HM}px`,"--gap":`${C}px`,...T,...qM(m,p)},onBlur:me=>{O.current&&!me.currentTarget.contains(me.relatedTarget)&&(O.current=!1,te.current&&(te.current.focus({preventScroll:!0}),te.current=null))},onFocus:me=>{me.target instanceof HTMLElement&&me.target.dataset.dismissible==="false"||O.current||(O.current=!0,te.current=me.relatedTarget)},onMouseEnter:()=>ie(!0),onMouseMove:()=>ie(!0),onMouseLeave:()=>{ce||ie(!1)},onDragEnd:()=>ie(!1),onPointerDown:me=>{me.target instanceof HTMLElement&&me.target.dataset.dismissible==="false"||pe(!0)},onPointerUp:()=>pe(!1)},k.filter(me=>!me.position&&be===0||me.position===ye).map((me,Ne)=>{var ke,pt;return Le.createElement(YM,{key:me.id,icons:A,index:Ne,toast:me,defaultRichColors:x,duration:(ke=y?.duration)!=null?ke:M,className:y?.className,descriptionClassName:y?.descriptionClassName,invert:o,visibleToasts:S,closeButton:(pt=y?.closeButton)!=null?pt:d,interacting:ce,position:ye,style:y?.style,unstyled:y?.unstyled,classNames:y?.classNames,cancelButtonStyle:y?.cancelButtonStyle,actionButtonStyle:y?.actionButtonStyle,closeButtonAriaLabel:y?.closeButtonAriaLabel,removeToast:se,toasts:k.filter(zt=>zt.position==me.position),heights:R.filter(zt=>zt.position==me.position),setHeights:H,expandByDefault:c,gap:C,expanded:K,swipeDirections:e.swipeDirections})})):null}))}),KM=({...n})=>Y.jsx($M,{theme:"light",className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...n}),M_=Pe.createContext({});function ZM(n){const e=Pe.useRef(null);return e.current===null&&(e.current=n()),e.current}const kh=typeof window<"u",QM=kh?Pe.useLayoutEffect:Pe.useEffect,Bh=Pe.createContext(null);function Vh(n,e){n.indexOf(e)===-1&&n.push(e)}function zh(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const ur=(n,e,t)=>t>e?e:t<n?n:t;let Hh=()=>{};const cr={},E_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function T_(n){return typeof n=="object"&&n!==null}const w_=n=>/^0[^.\s]+$/u.test(n);function Gh(n){let e;return()=>(e===void 0&&(e=n()),e)}const pi=n=>n,JM=(n,e)=>t=>e(n(t)),ka=(...n)=>n.reduce(JM),Aa=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};class Wh{constructor(){this.subscriptions=[]}add(e){return Vh(this.subscriptions,e),()=>zh(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Hi=n=>n*1e3,hi=n=>n/1e3;function A_(n,e){return e?n*(1e3/e):0}const C_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,eE=1e-7,tE=12;function nE(n,e,t,r,o){let l,u,c=0;do u=e+(t-e)/2,l=C_(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>eE&&++c<tE);return u}function Ba(n,e,t,r){if(n===e&&t===r)return pi;const o=l=>nE(l,0,1,n,t);return l=>l===0||l===1?l:C_(o(l),e,r)}const R_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,b_=n=>e=>1-n(1-e),P_=Ba(.33,1.53,.69,.99),jh=b_(P_),D_=R_(jh),L_=n=>(n*=2)<1?.5*jh(n):.5*(2-Math.pow(2,-10*(n-1))),Xh=n=>1-Math.sin(Math.acos(n)),I_=b_(Xh),N_=R_(Xh),iE=Ba(.42,0,1,1),rE=Ba(0,0,.58,1),U_=Ba(.42,0,.58,1),sE=n=>Array.isArray(n)&&typeof n[0]!="number",F_=n=>Array.isArray(n)&&typeof n[0]=="number",oE={linear:pi,easeIn:iE,easeInOut:U_,easeOut:rE,circIn:Xh,circInOut:N_,circOut:I_,backIn:jh,backInOut:D_,backOut:P_,anticipate:L_},aE=n=>typeof n=="string",c0=n=>{if(F_(n)){Hh(n.length===4);const[e,t,r,o]=n;return Ba(e,t,r,o)}else if(aE(n))return oE[n];return n},tu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function lE(n,e){let t=new Set,r=new Set,o=!1,l=!1;const u=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function d(m){u.has(m)&&(h.schedule(m),n()),m(c)}const h={schedule:(m,p=!1,v=!1)=>{const M=v&&o?t:r;return p&&u.add(m),M.has(m)||M.add(m),m},cancel:m=>{r.delete(m),u.delete(m)},process:m=>{if(c=m,o){l=!0;return}o=!0,[t,r]=[r,t],t.forEach(d),t.clear(),o=!1,l&&(l=!1,h.process(m))}};return h}const uE=40;function O_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=tu.reduce((C,A)=>(C[A]=lE(l),C),{}),{setup:c,read:d,resolveKeyframes:h,preUpdate:m,update:p,preRender:v,render:x,postRender:M}=u,T=()=>{const C=cr.useManualTiming?o.timestamp:performance.now();t=!1,cr.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(C-o.timestamp,uE),1)),o.timestamp=C,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),m.process(o),p.process(o),v.process(o),x.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(T))},S=()=>{t=!0,r=!0,o.isProcessing||n(T)};return{schedule:tu.reduce((C,A)=>{const N=u[A];return C[A]=(I,F=!1,k=!1)=>(t||S(),N.schedule(I,F,k)),C},{}),cancel:C=>{for(let A=0;A<tu.length;A++)u[tu[A]].cancel(C)},state:o,steps:u}}const{schedule:qt,cancel:Gr,state:Sn,steps:If}=O_(typeof requestAnimationFrame<"u"?requestAnimationFrame:pi,!0);let Au;function cE(){Au=void 0}const Xn={now:()=>(Au===void 0&&Xn.set(Sn.isProcessing||cr.useManualTiming?Sn.timestamp:performance.now()),Au),set:n=>{Au=n,queueMicrotask(cE)}},k_=n=>e=>typeof e=="string"&&e.startsWith(n),Yh=k_("--"),fE=k_("var(--"),qh=n=>fE(n)?dE.test(n.split("/*")[0].trim()):!1,dE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Po={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ca={...Po,transform:n=>ur(0,1,n)},nu={...Po,default:1},Sa=n=>Math.round(n*1e5)/1e5,$h=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function hE(n){return n==null}const pE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Kh=(n,e)=>t=>!!(typeof t=="string"&&pE.test(t)&&t.startsWith(n)||e&&!hE(t)&&Object.prototype.hasOwnProperty.call(t,e)),B_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,c]=r.match($h);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},mE=n=>ur(0,255,n),Nf={...Po,transform:n=>Math.round(mE(n))},xs={test:Kh("rgb","red"),parse:B_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Nf.transform(n)+", "+Nf.transform(e)+", "+Nf.transform(t)+", "+Sa(Ca.transform(r))+")"};function gE(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Cd={test:Kh("#"),parse:gE,transform:xs.transform},Va=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Br=Va("deg"),Gi=Va("%"),ct=Va("px"),vE=Va("vh"),_E=Va("vw"),f0={...Gi,parse:n=>Gi.parse(n)/100,transform:n=>Gi.transform(n*100)},mo={test:Kh("hsl","hue"),parse:B_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Gi.transform(Sa(e))+", "+Gi.transform(Sa(t))+", "+Sa(Ca.transform(r))+")"},an={test:n=>xs.test(n)||Cd.test(n)||mo.test(n),parse:n=>xs.test(n)?xs.parse(n):mo.test(n)?mo.parse(n):Cd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?xs.transform(n):mo.transform(n),getAnimatableNone:n=>{const e=an.parse(n);return e.alpha=0,an.transform(e)}},yE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function xE(n){return isNaN(n)&&typeof n=="string"&&(n.match($h)?.length||0)+(n.match(yE)?.length||0)>0}const V_="number",z_="color",SE="var",ME="var(",d0="${}",EE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ra(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const c=e.replace(EE,d=>(an.test(d)?(r.color.push(l),o.push(z_),t.push(an.parse(d))):d.startsWith(ME)?(r.var.push(l),o.push(SE),t.push(d)):(r.number.push(l),o.push(V_),t.push(parseFloat(d))),++l,d0)).split(d0);return{values:t,split:c,indexes:r,types:o}}function H_(n){return Ra(n).values}function G_(n){const{split:e,types:t}=Ra(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const c=t[u];c===V_?l+=Sa(o[u]):c===z_?l+=an.transform(o[u]):l+=o[u]}return l}}const TE=n=>typeof n=="number"?0:an.test(n)?an.getAnimatableNone(n):n;function wE(n){const e=H_(n);return G_(n)(e.map(TE))}const Wr={test:xE,parse:H_,createTransformer:G_,getAnimatableNone:wE};function Uf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function AE({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=Uf(d,c,n+1/3),l=Uf(d,c,n),u=Uf(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Uu(n,e){return t=>t>0?e:n}const Zt=(n,e,t)=>n+(e-n)*t,Ff=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},CE=[Cd,xs,mo],RE=n=>CE.find(e=>e.test(n));function h0(n){const e=RE(n);if(!e)return!1;let t=e.parse(n);return e===mo&&(t=AE(t)),t}const p0=(n,e)=>{const t=h0(n),r=h0(e);if(!t||!r)return Uu(n,e);const o={...t};return l=>(o.red=Ff(t.red,r.red,l),o.green=Ff(t.green,r.green,l),o.blue=Ff(t.blue,r.blue,l),o.alpha=Zt(t.alpha,r.alpha,l),xs.transform(o))},Rd=new Set(["none","hidden"]);function bE(n,e){return Rd.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function PE(n,e){return t=>Zt(n,e,t)}function Zh(n){return typeof n=="number"?PE:typeof n=="string"?qh(n)?Uu:an.test(n)?p0:IE:Array.isArray(n)?W_:typeof n=="object"?an.test(n)?p0:DE:Uu}function W_(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>Zh(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function DE(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Zh(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function LE(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],u=n.indexes[l][r[l]],c=n.values[u]??0;t[o]=c,r[l]++}return t}const IE=(n,e)=>{const t=Wr.createTransformer(e),r=Ra(n),o=Ra(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Rd.has(n)&&!o.values.length||Rd.has(e)&&!r.values.length?bE(n,e):ka(W_(LE(r,o),o.values),t):Uu(n,e)};function j_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Zt(n,e,t):Zh(n)(n,e)}const NE=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>qt.update(e,t),stop:()=>Gr(e),now:()=>Sn.isProcessing?Sn.timestamp:Xn.now()}},X_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=Math.round(n(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Fu=2e4;function Qh(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Fu;)e+=t,r=n.next(e);return e>=Fu?1/0:e}function UE(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(Qh(r),Fu);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:hi(o)}}const FE=5;function Y_(n,e,t){const r=Math.max(e-FE,0);return A_(t-n(r),e-r)}const Jt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Of=.001;function OE({duration:n=Jt.duration,bounce:e=Jt.bounce,velocity:t=Jt.velocity,mass:r=Jt.mass}){let o,l,u=1-e;u=ur(Jt.minDamping,Jt.maxDamping,u),n=ur(Jt.minDuration,Jt.maxDuration,hi(n)),u<1?(o=h=>{const m=h*u,p=m*n,v=m-t,x=bd(h,u),M=Math.exp(-p);return Of-v/x*M},l=h=>{const p=h*u*n,v=p*t+t,x=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-p),T=bd(Math.pow(h,2),u);return(-o(h)+Of>0?-1:1)*((v-x)*M)/T}):(o=h=>{const m=Math.exp(-h*n),p=(h-t)*n+1;return-Of+m*p},l=h=>{const m=Math.exp(-h*n),p=(t-h)*(n*n);return m*p});const c=5/n,d=BE(o,l,c);if(n=Hi(n),isNaN(d))return{stiffness:Jt.stiffness,damping:Jt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const kE=12;function BE(n,e,t){let r=t;for(let o=1;o<kE;o++)r=r-n(r)/e(r);return r}function bd(n,e){return n*Math.sqrt(1-e*e)}const VE=["duration","bounce"],zE=["stiffness","damping","mass"];function m0(n,e){return e.some(t=>n[t]!==void 0)}function HE(n){let e={velocity:Jt.velocity,stiffness:Jt.stiffness,damping:Jt.damping,mass:Jt.mass,isResolvedFromDuration:!1,...n};if(!m0(n,zE)&&m0(n,VE))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*ur(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Jt.mass,stiffness:o,damping:l}}else{const t=OE(n);e={...e,...t,mass:Jt.mass},e.isResolvedFromDuration=!0}return e}function Ou(n=Jt.visualDuration,e=Jt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:p,velocity:v,isResolvedFromDuration:x}=HE({...t,velocity:-hi(t.velocity||0)}),M=v||0,T=h/(2*Math.sqrt(d*m)),S=u-l,y=hi(Math.sqrt(d/m)),D=Math.abs(S)<5;r||(r=D?Jt.restSpeed.granular:Jt.restSpeed.default),o||(o=D?Jt.restDelta.granular:Jt.restDelta.default);let C;if(T<1){const N=bd(y,T);C=I=>{const F=Math.exp(-T*y*I);return u-F*((M+T*y*S)/N*Math.sin(N*I)+S*Math.cos(N*I))}}else if(T===1)C=N=>u-Math.exp(-y*N)*(S+(M+y*S)*N);else{const N=y*Math.sqrt(T*T-1);C=I=>{const F=Math.exp(-T*y*I),k=Math.min(N*I,300);return u-F*((M+T*y*S)*Math.sinh(k)+N*S*Math.cosh(k))/N}}const A={calculatedDuration:x&&p||null,next:N=>{const I=C(N);if(x)c.done=N>=p;else{let F=N===0?M:0;T<1&&(F=N===0?Hi(M):Y_(C,N,I));const k=Math.abs(F)<=r,P=Math.abs(u-I)<=o;c.done=k&&P}return c.value=c.done?u:I,c},toString:()=>{const N=Math.min(Qh(A),Fu),I=X_(F=>A.next(N*F).value,N,30);return N+"ms "+I},toTransition:()=>{}};return A}Ou.applyToOptions=n=>{const e=UE(n,100,Ou);return n.ease=e.ease,n.duration=Hi(e.duration),n.type="keyframes",n};function Pd({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:m}){const p=n[0],v={done:!1,value:p},x=k=>c!==void 0&&k<c||d!==void 0&&k>d,M=k=>c===void 0?d:d===void 0||Math.abs(c-k)<Math.abs(d-k)?c:d;let T=t*e;const S=p+T,y=u===void 0?S:u(S);y!==S&&(T=y-p);const D=k=>-T*Math.exp(-k/r),C=k=>y+D(k),A=k=>{const P=D(k),R=C(k);v.done=Math.abs(P)<=h,v.value=v.done?y:R};let N,I;const F=k=>{x(v.value)&&(N=k,I=Ou({keyframes:[v.value,M(v.value)],velocity:Y_(C,k,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return F(0),{calculatedDuration:null,next:k=>{let P=!1;return!I&&N===void 0&&(P=!0,A(k),F(k)),N!==void 0&&k>=N?I.next(k-N):(!P&&A(k),v)}}}function GE(n,e,t){const r=[],o=t||cr.mix||j_,l=n.length-1;for(let u=0;u<l;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||pi:e;c=ka(d,c)}r.push(c)}return r}function WE(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(Hh(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=GE(e,r,o),d=c.length,h=m=>{if(u&&m<n[0])return e[0];let p=0;if(d>1)for(;p<n.length-2&&!(m<n[p+1]);p++);const v=Aa(n[p],n[p+1],m);return c[p](v)};return t?m=>h(ur(n[0],n[l-1],m)):h}function jE(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Aa(0,e,r);n.push(Zt(t,1,o))}}function XE(n){const e=[0];return jE(e,n.length-1),e}function YE(n,e){return n.map(t=>t*e)}function qE(n,e){return n.map(()=>e||U_).splice(0,n.length-1)}function Ma({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=sE(r)?r.map(c0):c0(r),l={done:!1,value:e[0]},u=YE(t&&t.length===e.length?t:XE(e),n),c=WE(u,e,{ease:Array.isArray(o)?o:qE(e,o)});return{calculatedDuration:n,next:d=>(l.value=c(d),l.done=d>=n,l)}}const $E=n=>n!==null;function Jh(n,{repeat:e,repeatType:t="loop"},r,o=1){const l=n.filter($E),c=o<0||e&&t!=="loop"&&e%2===1?0:l.length-1;return!c||r===void 0?l[c]:r}const KE={decay:Pd,inertia:Pd,tween:Ma,keyframes:Ma,spring:Ou};function q_(n){typeof n.type=="string"&&(n.type=KE[n.type])}class ep{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const ZE=n=>n/100;class tp extends ep{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:t}=this.options;t&&t.updatedAt!==Xn.now()&&this.tick(Xn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;q_(e);const{type:t=Ma,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=e;let{keyframes:c}=e;const d=t||Ma;d!==Ma&&typeof c[0]!="number"&&(this.mixKeyframes=ka(ZE,j_(c[0],c[1])),c=[0,100]);const h=d({...e,keyframes:c});l==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...c].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=Qh(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:c,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:m,repeat:p,repeatType:v,repeatDelay:x,type:M,onUpdate:T,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const y=this.currentTime-h*(this.playbackSpeed>=0?1:-1),D=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let C=this.currentTime,A=r;if(p){const k=Math.min(this.currentTime,o)/c;let P=Math.floor(k),R=k%1;!R&&k>=1&&(R=1),R===1&&P--,P=Math.min(P,p+1),!!(P%2)&&(v==="reverse"?(R=1-R,x&&(R-=x/c)):v==="mirror"&&(A=u)),C=ur(0,1,R)*c}const N=D?{done:!1,value:m[0]}:A.next(C);l&&(N.value=l(N.value));let{done:I}=N;!D&&d!==null&&(I=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return F&&M!==Pd&&(N.value=Jh(m,this.options,S,this.speed)),T&&T(N.value),F&&this.finish(),N}then(e,t){return this.finished.then(e,t)}get duration(){return hi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+hi(e)}get time(){return hi(this.currentTime)}set time(e){e=Hi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Xn.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=hi(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=NE,startTime:t}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Xn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function QE(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Ss=n=>n*180/Math.PI,Dd=n=>{const e=Ss(Math.atan2(n[1],n[0]));return Ld(e)},JE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Dd,rotateZ:Dd,skewX:n=>Ss(Math.atan(n[1])),skewY:n=>Ss(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Ld=n=>(n=n%360,n<0&&(n+=360),n),g0=Dd,v0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),_0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),e1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:v0,scaleY:_0,scale:n=>(v0(n)+_0(n))/2,rotateX:n=>Ld(Ss(Math.atan2(n[6],n[5]))),rotateY:n=>Ld(Ss(Math.atan2(-n[2],n[0]))),rotateZ:g0,rotate:g0,skewX:n=>Ss(Math.atan(n[4])),skewY:n=>Ss(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Id(n){return n.includes("scale")?1:0}function Nd(n,e){if(!n||n==="none")return Id(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=e1,o=t;else{const c=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=JE,o=c}if(!o)return Id(e);const l=r[e],u=o[1].split(",").map(n1);return typeof l=="function"?l(u):u[l]}const t1=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Nd(t,e)};function n1(n){return parseFloat(n.trim())}const Do=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Lo=new Set(Do),y0=n=>n===Po||n===ct,i1=new Set(["x","y","z"]),r1=Do.filter(n=>!i1.has(n));function s1(n){const e=[];return r1.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Ts={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Nd(e,"x"),y:(n,{transform:e})=>Nd(e,"y")};Ts.translateX=Ts.x;Ts.translateY=Ts.y;const ws=new Set;let Ud=!1,Fd=!1,Od=!1;function $_(){if(Fd){const n=Array.from(ws).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=s1(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{r.getValue(l)?.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Fd=!1,Ud=!1,ws.forEach(n=>n.complete(Od)),ws.clear()}function K_(){ws.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Fd=!0)})}function o1(){Od=!0,K_(),$_(),Od=!1}class np{constructor(e,t,r,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(ws.add(this),Ud||(Ud=!0,qt.read(K_),qt.resolveKeyframes($_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const l=o?.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&t){const c=r.readValue(t,u);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=u),o&&l===void 0&&o.set(e[0])}QE(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ws.delete(this)}cancel(){this.state==="scheduled"&&(ws.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const a1=n=>n.startsWith("--");function l1(n,e,t){a1(e)?n.style.setProperty(e,t):n.style[e]=t}const u1=Gh(()=>window.ScrollTimeline!==void 0),c1={};function f1(n,e){const t=Gh(n);return()=>c1[e]??t()}const Z_=f1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ya=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,x0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ya([0,.65,.55,1]),circOut:ya([.55,0,1,.45]),backIn:ya([.31,.01,.66,-.59]),backOut:ya([.33,1.53,.69,.99])};function Q_(n,e){if(n)return typeof n=="function"?Z_()?X_(n,e):"ease-out":F_(n)?ya(n):Array.isArray(n)?n.map(t=>Q_(t,e)||x0.easeOut):x0[n]}function d1(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:c="easeOut",times:d}={},h=void 0){const m={[e]:t};d&&(m.offset=d);const p=Q_(c,o);Array.isArray(p)&&(m.easing=p);const v={delay:r,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return h&&(v.pseudoElement=h),n.animate(m,v)}function J_(n){return typeof n=="function"&&"applyToOptions"in n}function h1({type:n,...e}){return J_(n)&&Z_()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class p1 extends ep{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:c,onComplete:d}=e;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=e,Hh(typeof e.type!="string");const h=h1(e);this.animation=d1(t,r,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=Jh(o,this.options,c,this.speed);this.updateMotionValue?this.updateMotionValue(m):l1(t,r,m),this.animation.cancel()}d?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return hi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+hi(e)}get time(){return hi(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Hi(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&u1()?(this.animation.timeline=e,pi):t(this)}}const ey={anticipate:L_,backInOut:D_,circInOut:N_};function m1(n){return n in ey}function g1(n){typeof n.ease=="string"&&m1(n.ease)&&(n.ease=ey[n.ease])}const S0=10;class v1 extends p1{constructor(e){g1(e),q_(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:l,...u}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const c=new tp({...u,autoplay:!1}),d=Hi(this.finishedTime??this.time);t.setWithVelocity(c.sample(d-S0).value,c.sample(d).value,S0),c.stop()}}const M0=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Wr.test(n)||n==="0")&&!n.startsWith("url("));function _1(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function y1(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=M0(o,e),c=M0(l,e);return!u||!c?!1:_1(n)||(t==="spring"||J_(t))&&r}function kd(n){n.duration=0,n.type="keyframes"}const x1=new Set(["opacity","clipPath","filter","transform"]),S1=Gh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function M1(n){const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:l,type:u}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=e.owner.getProps();return S1()&&t&&x1.has(t)&&(t!=="transform"||!h)&&!d&&!r&&o!=="mirror"&&l!==0&&u!=="inertia"}const E1=40;class T1 extends ep{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:c,name:d,motionValue:h,element:m,...p}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Xn.now();const v={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,name:d,motionValue:h,element:m,...p},x=m?.KeyframeResolver||np;this.keyframeResolver=new x(c,(M,T,S)=>this.onKeyframesResolved(M,T,v,!S),d,h,m),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,r,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:c,delay:d,isHandoff:h,onUpdate:m}=r;this.resolvedAt=Xn.now(),y1(e,l,u,c)||((cr.instantAnimations||!d)&&m?.(Jh(e,r,t)),e[0]=e[e.length-1],kd(r),r.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>E1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},x=!h&&M1(v)?new v1({...v,element:v.motionValue.owner.current}):new tp(v);x.finished.then(()=>this.notifyFinished()).catch(pi),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),o1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const w1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function A1(n){const e=w1.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function ty(n,e,t=1){const[r,o]=A1(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return E_(u)?parseFloat(u):u}return qh(o)?ty(o,e,t+1):o}function ip(n,e){return n?.[e]??n?.default??n}const ny=new Set(["width","height","top","left","right","bottom",...Do]),C1={test:n=>n==="auto",parse:n=>n},iy=n=>e=>e.test(n),ry=[Po,ct,Gi,Br,_E,vE,C1],E0=n=>ry.find(iy(n));function R1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||w_(n):!0}const b1=new Set(["brightness","contrast","saturate","opacity"]);function P1(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match($h)||[];if(!r)return n;const o=t.replace(r,"");let l=b1.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const D1=/\b([a-z-]*)\(.*?\)/gu,Bd={...Wr,getAnimatableNone:n=>{const e=n.match(D1);return e?e.map(P1).join(" "):n}},T0={...Po,transform:Math.round},L1={rotate:Br,rotateX:Br,rotateY:Br,rotateZ:Br,scale:nu,scaleX:nu,scaleY:nu,scaleZ:nu,skew:Br,skewX:Br,skewY:Br,distance:ct,translateX:ct,translateY:ct,translateZ:ct,x:ct,y:ct,z:ct,perspective:ct,transformPerspective:ct,opacity:Ca,originX:f0,originY:f0,originZ:ct},rp={borderWidth:ct,borderTopWidth:ct,borderRightWidth:ct,borderBottomWidth:ct,borderLeftWidth:ct,borderRadius:ct,radius:ct,borderTopLeftRadius:ct,borderTopRightRadius:ct,borderBottomRightRadius:ct,borderBottomLeftRadius:ct,width:ct,maxWidth:ct,height:ct,maxHeight:ct,top:ct,right:ct,bottom:ct,left:ct,padding:ct,paddingTop:ct,paddingRight:ct,paddingBottom:ct,paddingLeft:ct,margin:ct,marginTop:ct,marginRight:ct,marginBottom:ct,marginLeft:ct,backgroundPositionX:ct,backgroundPositionY:ct,...L1,zIndex:T0,fillOpacity:Ca,strokeOpacity:Ca,numOctaves:T0},I1={...rp,color:an,backgroundColor:an,outlineColor:an,fill:an,stroke:an,borderColor:an,borderTopColor:an,borderRightColor:an,borderBottomColor:an,borderLeftColor:an,filter:Bd,WebkitFilter:Bd},sy=n=>I1[n];function oy(n,e){let t=sy(n);return t!==Bd&&(t=Wr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const N1=new Set(["auto","none","0"]);function U1(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!N1.has(l)&&Ra(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=oy(t,o)}class F1 extends np{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),qh(h))){const m=ty(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!ny.has(r)||e.length!==2)return;const[o,l]=e,u=E0(o),c=E0(l);if(u!==c)if(y0(u)&&y0(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else Ts[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||R1(e[o]))&&r.push(o);r.length&&U1(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ts[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,u=r[l];r[l]=Ts[t](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([c,d])=>{e.getValue(c).set(d)}),this.resolveNoneKeyframes()}}function ay(n,e,t){if(n instanceof EventTarget)return[n];if(typeof n=="string"){const o=document.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n)}const ly=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function O1(n){return T_(n)&&"offsetHeight"in n}const w0=30,k1=n=>!isNaN(parseFloat(n));class B1{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const o=Xn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Xn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=k1(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Wh);const r=this.events[e].add(t);return e==="change"?()=>{r(),qt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Xn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>w0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,w0);return A_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Eo(n,e){return new B1(n,e)}const{schedule:sp}=O_(queueMicrotask,!1),Ci={x:!1,y:!1};function uy(){return Ci.x||Ci.y}function V1(n){return n==="x"||n==="y"?Ci[n]?null:(Ci[n]=!0,()=>{Ci[n]=!1}):Ci.x||Ci.y?null:(Ci.x=Ci.y=!0,()=>{Ci.x=Ci.y=!1})}function cy(n,e){const t=ay(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function A0(n){return!(n.pointerType==="touch"||uy())}function z1(n,e,t={}){const[r,o,l]=cy(n,t),u=c=>{if(!A0(c))return;const{target:d}=c,h=e(d,c);if(typeof h!="function"||!d)return;const m=p=>{A0(p)&&(h(p),d.removeEventListener("pointerleave",m))};d.addEventListener("pointerleave",m,o)};return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),l}const fy=(n,e)=>e?n===e?!0:fy(n,e.parentElement):!1,op=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,H1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function G1(n){return H1.has(n.tagName)||n.tabIndex!==-1}const Cu=new WeakSet;function C0(n){return e=>{e.key==="Enter"&&n(e)}}function kf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const W1=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=C0(()=>{if(Cu.has(t))return;kf(t,"down");const o=C0(()=>{kf(t,"up")}),l=()=>kf(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function R0(n){return op(n)&&!uy()}function j1(n,e,t={}){const[r,o,l]=cy(n,t),u=c=>{const d=c.currentTarget;if(!R0(c))return;Cu.add(d);const h=e(d,c),m=(x,M)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",v),Cu.has(d)&&Cu.delete(d),R0(x)&&typeof h=="function"&&h(x,{success:M})},p=x=>{m(x,d===window||d===document||t.useGlobalTarget||fy(d,x.target))},v=x=>{m(x,!1)};window.addEventListener("pointerup",p,o),window.addEventListener("pointercancel",v,o)};return r.forEach(c=>{(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),O1(c)&&(c.addEventListener("focus",h=>W1(h,o)),!G1(c)&&!c.hasAttribute("tabindex")&&(c.tabIndex=0))}),l}function dy(n){return T_(n)&&"ownerSVGElement"in n}function X1(n){return dy(n)&&n.tagName==="svg"}const Pn=n=>!!(n&&n.getVelocity),Y1=[...ry,an,Wr],q1=n=>Y1.find(iy(n)),hy=Pe.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function $1(n=!0){const e=Pe.useContext(Bh);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=Pe.useId();Pe.useEffect(()=>{if(n)return o(l)},[n]);const u=Pe.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const py=Pe.createContext({strict:!1}),b0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},To={};for(const n in b0)To[n]={isEnabled:e=>b0[n].some(t=>!!e[t])};function K1(n){for(const e in n)To[e]={...To[e],...n[e]}}const Z1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ku(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Z1.has(n)}let my=n=>!ku(n);function Q1(n){typeof n=="function"&&(my=e=>e.startsWith("on")?!ku(e):n(e))}try{Q1(require("@emotion/is-prop-valid").default)}catch{}function J1(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(my(o)||t===!0&&ku(o)||!e&&!ku(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Gu=Pe.createContext({});function Wu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ba(n){return typeof n=="string"||Array.isArray(n)}const ap=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],lp=["initial",...ap];function ju(n){return Wu(n.animate)||lp.some(e=>ba(n[e]))}function gy(n){return!!(ju(n)||n.variants)}function eT(n,e){if(ju(n)){const{initial:t,animate:r}=n;return{initial:t===!1||ba(t)?t:void 0,animate:ba(r)?r:void 0}}return n.inherit!==!1?e:{}}function tT(n){const{initial:e,animate:t}=eT(n,Pe.useContext(Gu));return Pe.useMemo(()=>({initial:e,animate:t}),[P0(e),P0(t)])}function P0(n){return Array.isArray(n)?n.join(" "):n}const Pa={};function nT(n){for(const e in n)Pa[e]=n[e],Yh(e)&&(Pa[e].isCSSVariable=!0)}function vy(n,{layout:e,layoutId:t}){return Lo.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Pa[n]||n==="opacity")}const iT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},rT=Do.length;function sT(n,e,t){let r="",o=!0;for(let l=0;l<rT;l++){const u=Do[l],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=ly(c,rp[u]);if(!d){o=!1;const m=iT[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function up(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Lo.has(d)){u=!0;continue}else if(Yh(d)){o[d]=h;continue}else{const m=ly(h,rp[d]);d.startsWith("origin")?(c=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=sT(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}const cp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function _y(n,e,t){for(const r in e)!Pn(e[r])&&!vy(r,t)&&(n[r]=e[r])}function oT({transformTemplate:n},e){return Pe.useMemo(()=>{const t=cp();return up(t,e,n),Object.assign({},t.vars,t.style)},[e])}function aT(n,e){const t=n.style||{},r={};return _y(r,t,n),Object.assign(r,oT(n,e)),r}function lT(n,e){const t={},r=aT(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const uT={offset:"stroke-dashoffset",array:"stroke-dasharray"},cT={offset:"strokeDashoffset",array:"strokeDasharray"};function fT(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?uT:cT;n[l.offset]=ct.transform(-r);const u=ct.transform(e),c=ct.transform(t);n[l.array]=`${u} ${c}`}function yy(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...c},d,h,m){if(up(n,c,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:p,style:v}=n;p.transform&&(v.transform=p.transform,delete p.transform),(v.transform||p.transformOrigin)&&(v.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),v.transform&&(v.transformBox=m?.transformBox??"fill-box",delete p.transformBox),e!==void 0&&(p.x=e),t!==void 0&&(p.y=t),r!==void 0&&(p.scale=r),o!==void 0&&fT(p,o,l,u,!1)}const xy=()=>({...cp(),attrs:{}}),Sy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function dT(n,e,t,r){const o=Pe.useMemo(()=>{const l=xy();return yy(l,e,Sy(r),n.transformTemplate,n.style),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};_y(l,n.style,n),o.style={...l,...o.style}}return o}const hT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fp(n){return typeof n!="string"||n.includes("-")?!1:!!(hT.indexOf(n)>-1||/[A-Z]/u.test(n))}function pT(n,e,t,{latestValues:r},o,l=!1){const c=(fp(n)?dT:lT)(e,r,o,n),d=J1(e,typeof n=="string",l),h=n!==Pe.Fragment?{...d,...c,ref:t}:{},{children:m}=e,p=Pe.useMemo(()=>Pn(m)?m.get():m,[m]);return Pe.createElement(n,{...h,children:p})}function D0(n){const e=[{},{}];return n?.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function dp(n,e,t,r){if(typeof e=="function"){const[o,l]=D0(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=D0(r);e=e(t!==void 0?t:n.custom,o,l)}return e}function Ru(n){return Pn(n)?n.get():n}function mT({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:gT(t,r,o,n),renderState:e()}}function gT(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Ru(l[v]);let{initial:u,animate:c}=n;const d=ju(n),h=gy(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const p=m?c:u;if(p&&typeof p!="boolean"&&!Wu(p)){const v=Array.isArray(p)?p:[p];for(let x=0;x<v.length;x++){const M=dp(n,v[x]);if(M){const{transitionEnd:T,transition:S,...y}=M;for(const D in y){let C=y[D];if(Array.isArray(C)){const A=m?C.length-1:0;C=C[A]}C!==null&&(o[D]=C)}for(const D in T)o[D]=T[D]}}}return o}const My=n=>(e,t)=>{const r=Pe.useContext(Gu),o=Pe.useContext(Bh),l=()=>mT(n,e,r,o);return t?l():ZM(l)};function hp(n,e,t){const{style:r}=n,o={};for(const l in r)(Pn(r[l])||e.style&&Pn(e.style[l])||vy(l,n)||t?.getValue(l)?.liveStyle!==void 0)&&(o[l]=r[l]);return o}const vT=My({scrapeMotionValuesFromProps:hp,createRenderState:cp});function Ey(n,e,t){const r=hp(n,e,t);for(const o in n)if(Pn(n[o])||Pn(e[o])){const l=Do.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}const _T=My({scrapeMotionValuesFromProps:Ey,createRenderState:xy}),yT=Symbol.for("motionComponentSymbol");function go(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function xT(n,e,t){return Pe.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):go(t)&&(t.current=r))},[e])}const pp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),ST="framerAppearId",Ty="data-"+pp(ST),wy=Pe.createContext({});function MT(n,e,t,r,o){const{visualElement:l}=Pe.useContext(Gu),u=Pe.useContext(py),c=Pe.useContext(Bh),d=Pe.useContext(hy).reducedMotion,h=Pe.useRef(null);r=r||u.renderer,!h.current&&r&&(h.current=r(n,{visualState:e,parent:l,props:t,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const m=h.current,p=Pe.useContext(wy);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&ET(h.current,t,o,p);const v=Pe.useRef(!1);Pe.useInsertionEffect(()=>{m&&v.current&&m.update(t,c)});const x=t[Ty],M=Pe.useRef(!!x&&!window.MotionHandoffIsComplete?.(x)&&window.MotionHasOptimisedAnimation?.(x));return QM(()=>{m&&(v.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),M.current&&m.animationState&&m.animationState.animateChanges())}),Pe.useEffect(()=>{m&&(!M.current&&m.animationState&&m.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(x)}),M.current=!1),m.enteringChildren=void 0)}),m}function ET(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h,layoutCrossfade:m}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Ay(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||c&&go(c),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:m,layoutScroll:d,layoutRoot:h})}function Ay(n){if(n)return n.options.allowProjection!==!1?n.projection:Ay(n.parent)}function Bf(n,{forwardMotionProps:e=!1}={},t,r){t&&K1(t);const o=fp(n)?_T:vT;function l(c,d){let h;const m={...Pe.useContext(hy),...c,layoutId:TT(c)},{isStatic:p}=m,v=tT(c),x=o(c,p);if(!p&&kh){wT();const M=AT(m);h=M.MeasureLayout,v.visualElement=MT(n,x,m,r,M.ProjectionNode)}return Y.jsxs(Gu.Provider,{value:v,children:[h&&v.visualElement?Y.jsx(h,{visualElement:v.visualElement,...m}):null,pT(n,c,xT(x,v.visualElement,d),x,p,e)]})}l.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const u=Pe.forwardRef(l);return u[yT]=n,u}function TT({layoutId:n}){const e=Pe.useContext(M_).id;return e&&n!==void 0?e+"-"+n:n}function wT(n,e){Pe.useContext(py).strict}function AT(n){const{drag:e,layout:t}=To;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e?.isEnabled(n)||t?.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function CT(n,e){if(typeof Proxy>"u")return Bf;const t=new Map,r=(l,u)=>Bf(l,u,n,e),o=(l,u)=>r(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?r:(t.has(u)||t.set(u,Bf(u,void 0,n,e)),t.get(u))})}function Cy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function RT({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function bT(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Vf(n){return n===void 0||n===1}function Vd({scale:n,scaleX:e,scaleY:t}){return!Vf(n)||!Vf(e)||!Vf(t)}function ms(n){return Vd(n)||Ry(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Ry(n){return L0(n.x)||L0(n.y)}function L0(n){return n&&n!=="0%"}function Bu(n,e,t){const r=n-t,o=e*r;return t+o}function I0(n,e,t,r,o){return o!==void 0&&(n=Bu(n,o,r)),Bu(n,t,r)+e}function zd(n,e=0,t=1,r,o){n.min=I0(n.min,e,t,r,o),n.max=I0(n.max,e,t,r,o)}function by(n,{x:e,y:t}){zd(n.x,e.translate,e.scale,e.originPoint),zd(n.y,t.translate,t.scale,t.originPoint)}const N0=.999999999999,U0=1.0000000000001;function PT(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&_o(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,by(n,u)),r&&ms(l.latestValues)&&_o(n,l.latestValues))}e.x<U0&&e.x>N0&&(e.x=1),e.y<U0&&e.y>N0&&(e.y=1)}function vo(n,e){n.min=n.min+e,n.max=n.max+e}function F0(n,e,t,r,o=.5){const l=Zt(n.min,n.max,o);zd(n,e,t,l,r)}function _o(n,e){F0(n.x,e.x,e.scaleX,e.scale,e.originX),F0(n.y,e.y,e.scaleY,e.scale,e.originY)}function Py(n,e){return Cy(bT(n.getBoundingClientRect(),e))}function DT(n,e,t){const r=Py(n,t),{scroll:o}=e;return o&&(vo(r.x,o.offset.x),vo(r.y,o.offset.y)),r}const O0=()=>({translate:0,scale:1,origin:0,originPoint:0}),yo=()=>({x:O0(),y:O0()}),k0=()=>({min:0,max:0}),nn=()=>({x:k0(),y:k0()}),Hd={current:null},Dy={current:!1};function LT(){if(Dy.current=!0,!!kh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Hd.current=n.matches;n.addEventListener("change",e),e()}else Hd.current=!1}const IT=new WeakMap;function NT(n,e,t){for(const r in e){const o=e[r],l=t[r];if(Pn(o))n.addValue(r,o);else if(Pn(l))n.addValue(r,Eo(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Eo(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const B0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class UT{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=np,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=Xn.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,qt.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!l,this.isControllingVariants=ju(t),this.isVariantNode=gy(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:m,...p}=this.scrapeMotionValuesFromProps(t,{},this);for(const v in p){const x=p[v];d[v]!==void 0&&Pn(x)&&x.set(d[v])}}mount(e){this.current=e,IT.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),Dy.current||LT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Hd.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Gr(this.notifyUpdate),Gr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Lo.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&qt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l&&l(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in To){const t=To[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):nn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<B0.length;r++){const o=B0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=NT(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Eo(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(E_(r)||w_(r))?r=parseFloat(r):!q1(r)&&Wr.test(t)&&(r=oy(e,t)),this.setBaseTarget(e,Pn(r)?r.get():r)),Pn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const l=dp(this.props,t,this.presenceContext?.custom);l&&(r=l[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Pn(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Wh),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){sp.render(this.render)}}class Ly extends UT{constructor(){super(...arguments),this.KeyframeResolver=F1}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Pn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function Iy(n,{style:e,vars:t},r,o){const l=n.style;let u;for(u in e)l[u]=e[u];o?.applyProjectionStyles(l,r);for(u in t)l.setProperty(u,t[u])}function FT(n){return window.getComputedStyle(n)}class OT extends Ly{constructor(){super(...arguments),this.type="html",this.renderInstance=Iy}readValueFromInstance(e,t){if(Lo.has(t))return this.projection?.isProjecting?Id(t):t1(e,t);{const r=FT(e),o=(Yh(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Py(e,t)}build(e,t,r){up(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return hp(e,t,r)}}const Ny=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function kT(n,e,t,r){Iy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(Ny.has(o)?o:pp(o),e.attrs[o])}class BT extends Ly{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=nn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Lo.has(t)){const r=sy(t);return r&&r.default||0}return t=Ny.has(t)?t:pp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Ey(e,t,r)}build(e,t,r){yy(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){kT(e,t,r,o)}mount(e){this.isSVGTag=Sy(e.tagName),super.mount(e)}}const VT=(n,e)=>fp(n)?new BT(e):new OT(e,{allowProjection:n!==Pe.Fragment});function So(n,e,t){const r=n.getProps();return dp(r,e,t!==void 0?t:r.custom,n)}const Gd=n=>Array.isArray(n);function zT(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Eo(t))}function HT(n){return Gd(n)?n[n.length-1]||0:n}function GT(n,e){const t=So(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const c=HT(l[u]);zT(n,u,c)}}function WT(n){return!!(Pn(n)&&n.add)}function Wd(n,e){const t=n.getValue("willChange");if(WT(t))return t.add(e);if(!t&&cr.WillChange){const r=new cr.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function Uy(n){return n.props[Ty]}const jT=n=>n!==null;function XT(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(jT),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return o[l]}const YT={type:"spring",stiffness:500,damping:25,restSpeed:10},qT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),$T={type:"keyframes",duration:.8},KT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ZT=(n,{keyframes:e})=>e.length>2?$T:Lo.has(n)?n.startsWith("scale")?qT(e[1]):YT:KT;function QT({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const mp=(n,e,t,r={},o,l)=>u=>{const c=ip(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-Hi(d);const m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:v=>{e.set(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:l?void 0:o};QT(c)||Object.assign(m,ZT(n,m)),m.duration&&(m.duration=Hi(m.duration)),m.repeatDelay&&(m.repeatDelay=Hi(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let p=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(kd(m),m.delay===0&&(p=!0)),(cr.instantAnimations||cr.skipAnimations)&&(p=!0,kd(m),m.delay=0),m.allowFlatten=!c.type&&!c.ease,p&&!l&&e.get()!==void 0){const v=XT(m.keyframes,c);if(v!==void 0){qt.update(()=>{m.onUpdate(v),m.onComplete()});return}}return c.isSync?new tp(m):new T1(m)};function JT({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function Fy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:l=n.getDefaultTransition(),transitionEnd:u,...c}=e;r&&(l=r);const d=[],h=o&&n.animationState&&n.animationState.getState()[o];for(const m in c){const p=n.getValue(m,n.latestValues[m]??null),v=c[m];if(v===void 0||h&&JT(h,m))continue;const x={delay:t,...ip(l||{},m)},M=p.get();if(M!==void 0&&!p.isAnimating&&!Array.isArray(v)&&v===M&&!x.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const y=Uy(n);if(y){const D=window.MotionHandoffAnimation(y,m,qt);D!==null&&(x.startTime=D,T=!0)}}Wd(n,m),p.start(mp(m,p,v,n.shouldReduceMotion&&ny.has(m)?{type:!1}:x,n,T));const S=p.animation;S&&d.push(S)}return u&&Promise.all(d).then(()=>{qt.update(()=>{u&&GT(n,u)})}),d}function Oy(n,e,t,r=0,o=1){const l=Array.from(n).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),u=n.size,c=(u-1)*r;return typeof t=="function"?t(l,u):o===1?l*r:c-l*r}function jd(n,e,t={}){const r=So(n,e,t.type==="exit"?n.presenceContext?.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const l=r?()=>Promise.all(Fy(n,r,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:m,staggerDirection:p}=o;return ew(n,e,d,h,m,p,t)}:()=>Promise.resolve(),{when:c}=o;if(c){const[d,h]=c==="beforeChildren"?[l,u]:[u,l];return d().then(()=>h())}else return Promise.all([l(),u(t.delay)])}function ew(n,e,t=0,r=0,o=0,l=1,u){const c=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),c.push(jd(d,e,{...u,delay:t+(typeof r=="function"?0:r)+Oy(n.variantChildren,d,r,o,l)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(c)}function tw(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>jd(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=jd(n,e,t);else{const o=typeof e=="function"?So(n,e,t.custom):e;r=Promise.all(Fy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}function ky(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const nw=lp.length;function By(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?By(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<nw;t++){const r=lp[t],o=n.props[r];(ba(o)||o===!1)&&(e[r]=o)}return e}const iw=[...ap].reverse(),rw=ap.length;function sw(n){return e=>Promise.all(e.map(({animation:t,options:r})=>tw(n,t,r)))}function ow(n){let e=sw(n),t=V0(),r=!0;const o=d=>(h,m)=>{const p=So(n,m,d==="exit"?n.presenceContext?.custom:void 0);if(p){const{transition:v,transitionEnd:x,...M}=p;h={...h,...M,...x}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,m=By(n.parent)||{},p=[],v=new Set;let x={},M=1/0;for(let S=0;S<rw;S++){const y=iw[S],D=t[y],C=h[y]!==void 0?h[y]:m[y],A=ba(C),N=y===d?D.isActive:null;N===!1&&(M=S);let I=C===m[y]&&C!==h[y]&&A;if(I&&r&&n.manuallyAnimateOnMount&&(I=!1),D.protectedKeys={...x},!D.isActive&&N===null||!C&&!D.prevProp||Wu(C)||typeof C=="boolean")continue;const F=aw(D.prevProp,C);let k=F||y===d&&D.isActive&&!I&&A||S>M&&A,P=!1;const R=Array.isArray(C)?C:[C];let H=R.reduce(o(y),{});N===!1&&(H={});const{prevResolvedValues:K={}}=D,ie={...K,...H},ce=oe=>{k=!0,v.has(oe)&&(P=!0,v.delete(oe)),D.needsAnimating[oe]=!0;const V=n.getValue(oe);V&&(V.liveStyle=!1)};for(const oe in ie){const V=H[oe],le=K[oe];if(x.hasOwnProperty(oe))continue;let te=!1;Gd(V)&&Gd(le)?te=!ky(V,le):te=V!==le,te?V!=null?ce(oe):v.add(oe):V!==void 0&&v.has(oe)?ce(oe):D.protectedKeys[oe]=!0}D.prevProp=C,D.prevResolvedValues=H,D.isActive&&(x={...x,...H}),r&&n.blockInitialAnimation&&(k=!1);const pe=I&&F;k&&(!pe||P)&&p.push(...R.map(oe=>{const V={type:y};if(typeof oe=="string"&&r&&!pe&&n.manuallyAnimateOnMount&&n.parent){const{parent:le}=n,te=So(le,oe);if(le.enteringChildren&&te){const{delayChildren:O}=te.transition||{};V.delay=Oy(le.enteringChildren,n,O)}}return{animation:oe,options:V}}))}if(v.size){const S={};if(typeof h.initial!="boolean"){const y=So(n,Array.isArray(h.initial)?h.initial[0]:h.initial);y&&y.transition&&(S.transition=y.transition)}v.forEach(y=>{const D=n.getBaseTarget(y),C=n.getValue(y);C&&(C.liveStyle=!0),S[y]=D??null}),p.push({animation:S})}let T=!!p.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),r=!1,T?e(p):Promise.resolve()}function c(d,h){if(t[d].isActive===h)return Promise.resolve();n.variantChildren?.forEach(p=>p.animationState?.setActive(d,h)),t[d].isActive=h;const m=u(d);for(const p in t)t[p].protectedKeys={};return m}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t,reset:()=>{t=V0(),r=!0}}}function aw(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!ky(e,n):!1}function ls(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function V0(){return{animate:ls(!0),whileInView:ls(),whileHover:ls(),whileTap:ls(),whileDrag:ls(),whileFocus:ls(),exit:ls()}}class Xr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class lw extends Xr{constructor(e){super(e),e.animationState||(e.animationState=ow(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Wu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let uw=0;class cw extends Xr{constructor(){super(...arguments),this.id=uw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const fw={animation:{Feature:lw},exit:{Feature:cw}};function Da(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function za(n){return{point:{x:n.pageX,y:n.pageY}}}const dw=n=>e=>op(e)&&n(e,za(e));function Ea(n,e,t,r){return Da(n,e,dw(t),r)}const Vy=1e-4,hw=1-Vy,pw=1+Vy,zy=.01,mw=0-zy,gw=0+zy;function On(n){return n.max-n.min}function vw(n,e,t){return Math.abs(n-e)<=t}function z0(n,e,t,r=.5){n.origin=r,n.originPoint=Zt(e.min,e.max,n.origin),n.scale=On(t)/On(e),n.translate=Zt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=hw&&n.scale<=pw||isNaN(n.scale))&&(n.scale=1),(n.translate>=mw&&n.translate<=gw||isNaN(n.translate))&&(n.translate=0)}function Ta(n,e,t,r){z0(n.x,e.x,t.x,r?r.originX:void 0),z0(n.y,e.y,t.y,r?r.originY:void 0)}function H0(n,e,t){n.min=t.min+e.min,n.max=n.min+On(e)}function _w(n,e,t){H0(n.x,e.x,t.x),H0(n.y,e.y,t.y)}function G0(n,e,t){n.min=e.min-t.min,n.max=n.min+On(e)}function wa(n,e,t){G0(n.x,e.x,t.x),G0(n.y,e.y,t.y)}function ci(n){return[n("x"),n("y")]}const Hy=({current:n})=>n?n.ownerDocument.defaultView:null,W0=(n,e)=>Math.abs(n-e);function yw(n,e){const t=W0(n.x,e.x),r=W0(n.y,e.y);return Math.sqrt(t**2+r**2)}class Gy{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Hf(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,M=yw(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!M)return;const{point:T}=v,{timestamp:S}=Sn;this.history.push({...T,timestamp:S});const{onStart:y,onMove:D}=this.handlers;x||(y&&y(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,v)},this.handlePointerMove=(v,x)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=zf(x,this.transformPagePoint),qt.update(this.updatePoint,!0)},this.handlePointerUp=(v,x)=>{this.end();const{onEnd:M,onSessionEnd:T,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Hf(v.type==="pointercancel"?this.lastMoveEventInfo:zf(x,this.transformPagePoint),this.history);this.startEvent&&M&&M(v,y),T&&T(v,y)},!op(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const c=za(e),d=zf(c,this.transformPagePoint),{point:h}=d,{timestamp:m}=Sn;this.history=[{...h,timestamp:m}];const{onSessionStart:p}=t;p&&p(e,Hf(d,this.history)),this.removeListeners=ka(Ea(this.contextWindow,"pointermove",this.handlePointerMove),Ea(this.contextWindow,"pointerup",this.handlePointerUp),Ea(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Gr(this.updatePoint)}}function zf(n,e){return e?{point:e(n.point)}:n}function j0(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Hf({point:n},e){return{point:n,delta:j0(n,Wy(e)),offset:j0(n,xw(e)),velocity:Sw(e,.1)}}function xw(n){return n[0]}function Wy(n){return n[n.length-1]}function Sw(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=Wy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>Hi(e)));)t--;if(!r)return{x:0,y:0};const l=hi(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function Mw(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Zt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Zt(t,n,r.max):Math.min(n,t)),n}function X0(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function Ew(n,{top:e,left:t,bottom:r,right:o}){return{x:X0(n.x,t,o),y:X0(n.y,e,r)}}function Y0(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function Tw(n,e){return{x:Y0(n.x,e.x),y:Y0(n.y,e.y)}}function ww(n,e){let t=.5;const r=On(n),o=On(e);return o>r?t=Aa(e.min,e.max-r,n.min):r>o&&(t=Aa(n.min,n.max-o,e.min)),ur(0,1,t)}function Aw(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Xd=.35;function Cw(n=Xd){return n===!1?n=0:n===!0&&(n=Xd),{x:q0(n,"left","right"),y:q0(n,"top","bottom")}}function q0(n,e,t){return{min:$0(n,e),max:$0(n,t)}}function $0(n,e){return typeof n=="number"?n:n[e]||0}const Rw=new WeakMap;class bw{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=nn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=p=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(za(p).point)},u=(p,v)=>{const{drag:x,dragPropagation:M,onDragStart:T}=this.getProps();if(x&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=V1(x),!this.openDragLock))return;this.latestPointerEvent=p,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ci(y=>{let D=this.getAxisMotionValue(y).get()||0;if(Gi.test(D)){const{projection:C}=this.visualElement;if(C&&C.layout){const A=C.layout.layoutBox[y];A&&(D=On(A)*(parseFloat(D)/100))}}this.originPoint[y]=D}),T&&qt.postRender(()=>T(p,v)),Wd(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},c=(p,v)=>{this.latestPointerEvent=p,this.latestPanInfo=v;const{dragPropagation:x,dragDirectionLock:M,onDirectionLock:T,onDrag:S}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:y}=v;if(M&&this.currentDirection===null){this.currentDirection=Pw(y),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",v.point,y),this.updateAxis("y",v.point,y),this.visualElement.render(),S&&S(p,v)},d=(p,v)=>{this.latestPointerEvent=p,this.latestPanInfo=v,this.stop(p,v),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>ci(p=>this.getAnimationState(p)==="paused"&&this.getAxisMotionValue(p).animation?.play()),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Gy(e,{onSessionStart:l,onStart:u,onMove:c,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:Hy(this.visualElement)})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:c}=this.getProps();c&&qt.postRender(()=>c(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!iu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=Mw(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;e&&go(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=Ew(r.layoutBox,e):this.constraints=!1,this.elastic=Cw(t),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ci(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=Aw(r.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!go(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=DT(r,o.root,this.visualElement.getTransformPagePoint());let u=Tw(o.layout.layoutBox,l);if(t){const c=t(RT(u));this.hasMutatedConstraints=!!c,c&&(u=Cy(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=ci(m=>{if(!iu(m,t,this.currentDirection))return;let p=d&&d[m]||{};u&&(p={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...p};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Wd(this.visualElement,e),r.start(mp(e,r,0,t,this.visualElement,!1))}stopAnimation(){ci(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ci(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ci(t=>{const{drag:r}=this.getProps();if(!iu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-Zt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!go(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ci(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=ww({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ci(u=>{if(!iu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(Zt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;Rw.set(this.visualElement,this);const e=this.visualElement.current,t=Ea(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();go(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),qt.read(r);const u=Da(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(ci(m=>{const p=this.getAxisMotionValue(m);p&&(this.originPoint[m]+=d[m].translate,p.set(p.get()+d[m].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Xd,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function iu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function Pw(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class Dw extends Xr{constructor(e){super(e),this.removeGroupControls=pi,this.removeListeners=pi,this.controls=new bw(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||pi}unmount(){this.removeGroupControls(),this.removeListeners()}}const K0=n=>(e,t)=>{n&&qt.postRender(()=>n(e,t))};class Lw extends Xr{constructor(){super(...arguments),this.removePointerDownListener=pi}onPointerDown(e){this.session=new Gy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Hy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:K0(e),onStart:K0(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&qt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Ea(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const bu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Z0(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const ha={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(ct.test(n))n=parseFloat(n);else return n;const t=Z0(n,e.target.x),r=Z0(n,e.target.y);return`${t}% ${r}%`}},Iw={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Wr.parse(n);if(o.length>5)return r;const l=Wr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=Zt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};let Gf=!1;class Nw extends Pe.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;nT(Uw),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),Gf&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),bu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,{projection:u}=r;return u&&(u.isPresent=l,Gf=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==l?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||qt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),sp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;Gf=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function jy(n){const[e,t]=$1(),r=Pe.useContext(M_);return Y.jsx(Nw,{...n,layoutGroup:r,switchLayoutGroup:Pe.useContext(wy),isPresent:e,safeToRemove:t})}const Uw={borderRadius:{...ha,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ha,borderTopRightRadius:ha,borderBottomLeftRadius:ha,borderBottomRightRadius:ha,boxShadow:Iw};function Fw(n,e,t){const r=Pn(n)?n:Eo(n);return r.start(mp("",r,e,t)),r.animation}const Ow=(n,e)=>n.depth-e.depth;class kw{constructor(){this.children=[],this.isDirty=!1}add(e){Vh(this.children,e),this.isDirty=!0}remove(e){zh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Ow),this.isDirty=!1,this.children.forEach(e)}}function Bw(n,e){const t=Xn.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(Gr(r),n(l-e))};return qt.setup(r,!0),()=>Gr(r)}const Xy=["TopLeft","TopRight","BottomLeft","BottomRight"],Vw=Xy.length,Q0=n=>typeof n=="string"?parseFloat(n):n,J0=n=>typeof n=="number"||ct.test(n);function zw(n,e,t,r,o,l){o?(n.opacity=Zt(0,t.opacity??1,Hw(r)),n.opacityExit=Zt(e.opacity??1,0,Gw(r))):l&&(n.opacity=Zt(e.opacity??1,t.opacity??1,r));for(let u=0;u<Vw;u++){const c=`border${Xy[u]}Radius`;let d=ev(e,c),h=ev(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||J0(d)===J0(h)?(n[c]=Math.max(Zt(Q0(d),Q0(h),r),0),(Gi.test(h)||Gi.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=Zt(e.rotate||0,t.rotate||0,r))}function ev(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const Hw=Yy(0,.5,I_),Gw=Yy(.5,.95,pi);function Yy(n,e,t){return r=>r<n?0:r>e?1:t(Aa(n,e,r))}function tv(n,e){n.min=e.min,n.max=e.max}function li(n,e){tv(n.x,e.x),tv(n.y,e.y)}function nv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function iv(n,e,t,r,o){return n-=e,n=Bu(n,1/t,r),o!==void 0&&(n=Bu(n,1/o,r)),n}function Ww(n,e=0,t=1,r=.5,o,l=n,u=n){if(Gi.test(e)&&(e=parseFloat(e),e=Zt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Zt(l.min,l.max,r);n===l&&(c-=e),n.min=iv(n.min,e,t,c,o),n.max=iv(n.max,e,t,c,o)}function rv(n,e,[t,r,o],l,u){Ww(n,e[t],e[r],e[o],e.scale,l,u)}const jw=["x","scaleX","originX"],Xw=["y","scaleY","originY"];function sv(n,e,t,r){rv(n.x,e,jw,t?t.x:void 0,r?r.x:void 0),rv(n.y,e,Xw,t?t.y:void 0,r?r.y:void 0)}function ov(n){return n.translate===0&&n.scale===1}function qy(n){return ov(n.x)&&ov(n.y)}function av(n,e){return n.min===e.min&&n.max===e.max}function Yw(n,e){return av(n.x,e.x)&&av(n.y,e.y)}function lv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function $y(n,e){return lv(n.x,e.x)&&lv(n.y,e.y)}function uv(n){return On(n.x)/On(n.y)}function cv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class qw{constructor(){this.members=[]}add(e){Vh(this.members,e),e.scheduleRender()}remove(e){if(zh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function $w(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=t?.z||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:p,rotateY:v,skewX:x,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),p&&(r+=`rotateX(${p}deg) `),v&&(r+=`rotateY(${v}deg) `),x&&(r+=`skewX(${x}deg) `),M&&(r+=`skewY(${M}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const Wf=["","X","Y","Z"],Kw=1e3;let Zw=0;function jf(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function Ky(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Uy(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",qt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Ky(r)}function Zy({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e?.()){this.id=Zw++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(eA),this.nodes.forEach(rA),this.nodes.forEach(sA),this.nodes.forEach(tA)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new kw)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Wh),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=dy(u)&&!X1(u),this.instance=u;const{layoutId:c,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||c)&&(this.isLayoutDirty=!0),n){let m,p=0;const v=()=>this.root.updateBlockedByResize=!1;qt.read(()=>{p=window.innerWidth}),n(u,()=>{const x=window.innerWidth;x!==p&&(p=x,this.root.updateBlockedByResize=!0,m&&m(),m=Bw(v,250),bu.hasAnimatedSinceResize&&(bu.hasAnimatedSinceResize=!1,this.nodes.forEach(hv)))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&h&&(c||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p,hasRelativeLayoutChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||cA,{onLayoutAnimationStart:T,onLayoutAnimationComplete:S}=h.getProps(),y=!this.targetLayout||!$y(this.targetLayout,x),D=!p&&v;if(this.options.layoutRoot||this.resumeFrom||D||p&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...ip(M,"layout"),onPlay:T,onComplete:S};(h.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(m,D)}else p||hv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Gr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(oA),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ky(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const p=this.path[m];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(fv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(dv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(iA),this.nodes.forEach(Qw),this.nodes.forEach(Jw)):this.nodes.forEach(dv),this.clearAllSnapshots();const c=Xn.now();Sn.delta=ur(0,1e3/60,c-Sn.timestamp),Sn.timestamp=c,Sn.isProcessing=!0,If.update.process(Sn),If.preRender.process(Sn),If.render.process(Sn),Sn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,sp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(nA),this.sharedNodes.forEach(aA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!On(this.snapshot.measuredBox.x)&&!On(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=nn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!qy(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&this.instance&&(c||ms(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),fA(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return nn();const c=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(dA))){const{scroll:h}=this.root;h&&(vo(c.x,h.offset.x),vo(c.y,h.offset.y))}return c}removeElementScroll(u){const c=nn();if(li(c,u),this.scroll?.wasRoot)return c;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:m,options:p}=h;h!==this.root&&m&&p.layoutScroll&&(m.wasRoot&&li(c,u),vo(c.x,m.offset.x),vo(c.y,m.offset.y))}return c}applyTransform(u,c=!1){const d=nn();li(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!c&&m.options.layoutScroll&&m.scroll&&m!==m.root&&_o(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),ms(m.latestValues)&&_o(d,m.latestValues)}return ms(this.latestValues)&&_o(d,this.latestValues),d}removeTransform(u){const c=nn();li(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!ms(h.latestValues))continue;Vd(h.latestValues)&&h.updateSnapshot();const m=nn(),p=h.measurePageBox();li(m,p),sv(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return ms(this.latestValues)&&sv(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Sn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==c;if(!(u||d&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:p}=this.options;if(!(!this.layout||!(m||p))){if(this.resolvedRelativeTargetAt=Sn.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nn(),this.relativeTargetOrigin=nn(),wa(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=nn(),this.targetWithTransforms=nn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),_w(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):li(this.target,this.layout.layoutBox),by(this.target,this.targetDelta)):li(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nn(),this.relativeTargetOrigin=nn(),wa(this.relativeTargetOrigin,this.target,v.target),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Vd(this.parent.latestValues)||Ry(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const u=this.getLead(),c=!!this.resumingFrom||this!==u;let d=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(d=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Sn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;li(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,v=this.treeScale.y;PT(this.layoutCorrected,this.treeScale,this.path,c),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=nn());const{target:x}=u;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(nv(this.prevProjectionDelta.x,this.projectionDelta.x),nv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ta(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==v||!cv(this.projectionDelta.x,this.prevProjectionDelta.x)||!cv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=yo(),this.projectionDelta=yo(),this.projectionDeltaWithTransform=yo()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},p=yo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=nn(),x=d?d.source:void 0,M=this.layout?this.layout.source:void 0,T=x!==M,S=this.getStack(),y=!S||S.members.length<=1,D=!!(T&&!y&&this.options.crossfade===!0&&!this.path.some(uA));this.animationProgress=0;let C;this.mixTargetDelta=A=>{const N=A/1e3;pv(p.x,u.x,N),pv(p.y,u.y,N),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wa(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),lA(this.relativeTarget,this.relativeTargetOrigin,v,N),C&&Yw(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=nn()),li(C,this.relativeTarget)),T&&(this.animationValues=m,zw(m,h,this.latestValues,N,D,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Gr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qt.update(()=>{bu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Eo(0)),this.currentAnimation=Fw(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Kw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:m}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&Qy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||nn();const p=On(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+p;const v=On(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}li(c,d),_o(c,m),Ta(this.projectionDeltaWithTransform,this.layoutCorrected,c,m)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new qw),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&jf("z",u,h,this.animationValues);for(let m=0;m<Wf.length;m++)jf(`rotate${Wf[m]}`,u,h,this.animationValues),jf(`skew${Wf[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}applyProjectionStyles(u,c){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Ru(c?.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Ru(c?.pointerEvents)||""),this.hasProjected&&!ms(this.latestValues)&&(u.transform=d?d({},""):"none",this.hasProjected=!1);return}u.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let p=$w(this.projectionDeltaWithTransform,this.treeScale,m);d&&(p=d(m,p)),u.transform=p;const{x:v,y:x}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,h.animationValues?u.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const M in Pa){if(m[M]===void 0)continue;const{correct:T,applyTo:S,isCSSVariable:y}=Pa[M],D=p==="none"?m[M]:T(m[M],h);if(S){const C=S.length;for(let A=0;A<C;A++)u[S[A]]=D}else y?this.options.visualElement.renderState.vars[M]=D:u[M]=D}this.options.layoutId&&(u.pointerEvents=h===this?Ru(c?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(fv),this.root.sharedNodes.clear()}}}function Qw(n){n.updateLayout()}function Jw(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=n.layout,{animationType:o}=n.options,l=e.source!==n.layout.source;o==="size"?ci(m=>{const p=l?e.measuredBox[m]:e.layoutBox[m],v=On(p);p.min=t[m].min,p.max=p.min+v}):Qy(o,e.layoutBox,t)&&ci(m=>{const p=l?e.measuredBox[m]:e.layoutBox[m],v=On(t[m]);p.max=p.min+v,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[m].max=n.relativeTarget[m].min+v)});const u=yo();Ta(u,t,e.layoutBox);const c=yo();l?Ta(c,n.applyTransform(r,!0),e.measuredBox):Ta(c,t,e.layoutBox);const d=!qy(u);let h=!1;if(!n.resumeFrom){const m=n.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:p,layout:v}=m;if(p&&v){const x=nn();wa(x,e.layoutBox,p.layoutBox);const M=nn();wa(M,t,v.layoutBox),$y(x,M)||(h=!0),m.options.layoutRoot&&(n.relativeTarget=M,n.relativeTargetOrigin=x,n.relativeParent=m)}}}n.notifyListeners("didUpdate",{layout:t,snapshot:e,delta:c,layoutDelta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(n.isLead()){const{onExitComplete:t}=n.options;t&&t()}n.options.transition=void 0}function eA(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function tA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function nA(n){n.clearSnapshot()}function fv(n){n.clearMeasurements()}function dv(n){n.isLayoutDirty=!1}function iA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function hv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function rA(n){n.resolveTargetDelta()}function sA(n){n.calcProjection()}function oA(n){n.resetSkewAndRotation()}function aA(n){n.removeLeadSnapshot()}function pv(n,e,t){n.translate=Zt(e.translate,0,t),n.scale=Zt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function mv(n,e,t,r){n.min=Zt(e.min,t.min,r),n.max=Zt(e.max,t.max,r)}function lA(n,e,t,r){mv(n.x,e.x,t.x,r),mv(n.y,e.y,t.y,r)}function uA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const cA={duration:.45,ease:[.4,0,.1,1]},gv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),vv=gv("applewebkit/")&&!gv("chrome/")?Math.round:pi;function _v(n){n.min=vv(n.min),n.max=vv(n.max)}function fA(n){_v(n.x),_v(n.y)}function Qy(n,e,t){return n==="position"||n==="preserve-aspect"&&!vw(uv(e),uv(t),.2)}function dA(n){return n!==n.root&&n.scroll?.wasRoot}const hA=Zy({attachResizeListener:(n,e)=>Da(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Xf={current:void 0},Jy=Zy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Xf.current){const n=new hA({});n.mount(window),n.setOptions({layoutScroll:!0}),Xf.current=n}return Xf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),pA={pan:{Feature:Lw},drag:{Feature:Dw,ProjectionNode:Jy,MeasureLayout:jy}};function yv(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&qt.postRender(()=>l(e,za(e)))}class mA extends Xr{mount(){const{current:e}=this.node;e&&(this.unmount=z1(e,(t,r)=>(yv(this.node,r,"Start"),o=>yv(this.node,o,"End"))))}unmount(){}}class gA extends Xr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ka(Da(this.node.current,"focus",()=>this.onFocus()),Da(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function xv(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&qt.postRender(()=>l(e,za(e)))}class vA extends Xr{mount(){const{current:e}=this.node;e&&(this.unmount=j1(e,(t,r)=>(xv(this.node,r,"Start"),(o,{success:l})=>xv(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Yd=new WeakMap,Yf=new WeakMap,_A=n=>{const e=Yd.get(n.target);e&&e(n)},yA=n=>{n.forEach(_A)};function xA({root:n,...e}){const t=n||document;Yf.has(t)||Yf.set(t,{});const r=Yf.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(yA,{root:n,...e})),r[o]}function SA(n,e,t){const r=xA(e);return Yd.set(n,t),r.observe(n),()=>{Yd.delete(n),r.unobserve(n)}}const MA={some:0,all:1};class EA extends Xr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:MA[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:p}=this.node.getProps(),v=h?m:p;v&&v(d)};return SA(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(TA(e,t))&&this.startObserver()}unmount(){}}function TA({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const wA={inView:{Feature:EA},tap:{Feature:vA},focus:{Feature:gA},hover:{Feature:mA}},AA={layout:{ProjectionNode:Jy,MeasureLayout:jy}},CA={...fw,...wA,...pA,...AA},Gt=CT(CA,VT),RA={some:0,all:1};function bA(n,e,{root:t,margin:r,amount:o="some"}={}){const l=ay(n),u=new WeakMap,c=h=>{h.forEach(m=>{const p=u.get(m.target);if(m.isIntersecting!==!!p)if(m.isIntersecting){const v=e(m.target,m);typeof v=="function"?u.set(m.target,v):d.unobserve(m.target)}else typeof p=="function"&&(p(m),u.delete(m.target))})},d=new IntersectionObserver(c,{root:t,rootMargin:r,threshold:typeof o=="number"?o:RA[o]});return l.forEach(h=>d.observe(h)),()=>d.disconnect()}function gp(n,{root:e,margin:t,amount:r,once:o=!1,initial:l=!1}={}){const[u,c]=Pe.useState(l);return Pe.useEffect(()=>{if(!n.current||o&&u)return;const d=()=>(c(!0),o?void 0:()=>c(!1)),h={root:e&&e.current||void 0,margin:t,amount:r};return bA(n.current,d,h)},[e,n,t,o,r]),u}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),DA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),Sv=n=>{const e=DA(n);return e.charAt(0).toUpperCase()+e.slice(1)},ex=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var LA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=Pe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...c},d)=>Pe.createElement("svg",{ref:d,...LA,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:ex("lucide",o),...c},[...u.map(([h,m])=>Pe.createElement(h,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=(n,e)=>{const t=Pe.forwardRef(({className:r,...o},l)=>Pe.createElement(IA,{ref:l,iconNode:e,className:ex(`lucide-${PA(Sv(n))}`,`lucide-${n}`,r),...o}));return t.displayName=Sv(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],UA=vp("arrow-up-right",NA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],OA=vp("menu",FA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],BA=vp("x",kA),Mv=[{name:"Work",href:"#work"},{name:"About",href:"#about"},{name:"Contact",href:"#contact"}];function Ev(){const{currentRoute:n,navigateTo:e}=Lx(),[t,r]=Pe.useState(!1),[o,l]=Pe.useState(!1);Pe.useEffect(()=>{const c=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const u=c=>{if(n!=="home")e("home"),setTimeout(()=>{const d=document.querySelector(c);d&&d.scrollIntoView({behavior:"smooth"})},100);else{const d=document.querySelector(c);d&&d.scrollIntoView({behavior:"smooth"})}l(!1)};return Y.jsx(Gt.header,{initial:{y:-100},animate:{y:0},transition:{duration:.6},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${t?"bg-background/90 backdrop-blur-md":"bg-transparent"}`,children:Y.jsxs("nav",{className:"max-w-6xl mx-auto px-6 lg:px-8",children:[Y.jsxs("div",{className:"flex items-center justify-between h-20",children:[Y.jsx(Gt.div,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"cursor-pointer",onClick:()=>e("home"),children:Y.jsx("span",{className:"font-medium",children:"Nicolás Lundin"})}),Y.jsx("div",{className:"hidden md:block",children:Y.jsx("div",{className:"flex items-center space-x-8",children:Mv.map(c=>Y.jsx(Gt.button,{whileHover:{y:-2},whileTap:{scale:.95},onClick:()=>u(c.href),className:"text-sm hover:text-muted-foreground transition-colors duration-200",children:c.name},c.name))})}),Y.jsx("div",{className:"md:hidden",children:Y.jsx(Gt.button,{whileTap:{scale:.95},onClick:()=>l(!o),className:"p-2",children:o?Y.jsx(BA,{size:20}):Y.jsx(OA,{size:20})})})]}),Y.jsx(Gt.div,{initial:{opacity:0,height:0},animate:{opacity:o?1:0,height:o?"auto":0},transition:{duration:.3},className:"md:hidden overflow-hidden",children:Y.jsx("div",{className:"py-4 space-y-4",children:Mv.map(c=>Y.jsx(Gt.button,{whileHover:{x:10},whileTap:{scale:.95},onClick:()=>u(c.href),className:"block text-sm hover:text-muted-foreground transition-colors duration-200",children:c.name},c.name))})})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _p="180",VA=0,Tv=1,zA=2,tx=1,HA=2,or=3,jr=0,Yn=1,ki=2,zr=0,As=1,wv=2,Av=3,Cv=4,GA=5,_s=100,WA=101,jA=102,XA=103,YA=104,qA=200,$A=201,KA=202,ZA=203,qd=204,$d=205,QA=206,JA=207,eC=208,tC=209,nC=210,iC=211,rC=212,sC=213,oC=214,Kd=0,Zd=1,Qd=2,wo=3,Jd=4,eh=5,th=6,nh=7,nx=0,aC=1,lC=2,Hr=0,uC=1,cC=2,fC=3,dC=4,hC=5,pC=6,mC=7,ix=300,Ao=301,Co=302,ih=303,rh=304,Xu=306,sh=1e3,Ms=1001,oh=1002,Pi=1003,gC=1004,ru=1005,Bi=1006,qf=1007,Es=1008,fr=1009,rx=1010,sx=1011,La=1012,yp=1013,Cs=1014,ar=1015,Ha=1016,xp=1017,Sp=1018,Ia=1020,ox=35902,ax=35899,lx=1021,ux=1022,bi=1023,Na=1026,Ua=1027,cx=1028,Mp=1029,fx=1030,Ep=1031,Tp=1033,Pu=33776,Du=33777,Lu=33778,Iu=33779,ah=35840,lh=35841,uh=35842,ch=35843,fh=36196,dh=37492,hh=37496,ph=37808,mh=37809,gh=37810,vh=37811,_h=37812,yh=37813,xh=37814,Sh=37815,Mh=37816,Eh=37817,Th=37818,wh=37819,Ah=37820,Ch=37821,Rh=36492,bh=36494,Ph=36495,Dh=36283,Lh=36284,Ih=36285,Nh=36286,vC=3200,_C=3201,yC=0,xC=1,Vr="",fi="srgb",Ro="srgb-linear",Vu="linear",Ot="srgb",Js=7680,Rv=519,SC=512,MC=513,EC=514,dx=515,TC=516,wC=517,AC=518,CC=519,bv=35044,Pv="300 es",Vi=2e3,zu=2001;class Io{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=Math.PI/180,Uh=180/Math.PI;function Ga(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function RC(n,e){return(n%e+e)%e}function Kf(n,e,t){return(1-t)*n+t*e}function pa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let d=r[o+0],h=r[o+1],m=r[o+2],p=r[o+3];const v=l[u+0],x=l[u+1],M=l[u+2],T=l[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=p;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=T;return}if(p!==T||d!==v||h!==x||m!==M){let S=1-c;const y=d*v+h*x+m*M+p*T,D=y>=0?1:-1,C=1-y*y;if(C>Number.EPSILON){const N=Math.sqrt(C),I=Math.atan2(N,y*D);S=Math.sin(S*I)/N,c=Math.sin(c*I)/N}const A=c*D;if(d=d*S+v*A,h=h*S+x*A,m=m*S+M*A,p=p*S+T*A,S===1-c){const N=1/Math.sqrt(d*d+h*h+m*m+p*p);d*=N,h*=N,m*=N,p*=N}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=p}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],d=r[o+1],h=r[o+2],m=r[o+3],p=l[u],v=l[u+1],x=l[u+2],M=l[u+3];return e[t]=c*M+m*p+d*x-h*v,e[t+1]=d*M+m*v+h*p-c*x,e[t+2]=h*M+m*x+c*v-d*p,e[t+3]=m*M-c*p-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),m=c(o/2),p=c(l/2),v=d(r/2),x=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=v*m*p+h*x*M,this._y=h*x*p-v*m*M,this._z=h*m*M+v*x*p,this._w=h*m*p-v*x*M;break;case"YXZ":this._x=v*m*p+h*x*M,this._y=h*x*p-v*m*M,this._z=h*m*M-v*x*p,this._w=h*m*p+v*x*M;break;case"ZXY":this._x=v*m*p-h*x*M,this._y=h*x*p+v*m*M,this._z=h*m*M+v*x*p,this._w=h*m*p-v*x*M;break;case"ZYX":this._x=v*m*p-h*x*M,this._y=h*x*p+v*m*M,this._z=h*m*M-v*x*p,this._w=h*m*p+v*x*M;break;case"YZX":this._x=v*m*p+h*x*M,this._y=h*x*p+v*m*M,this._z=h*m*M-v*x*p,this._w=h*m*p-v*x*M;break;case"XZY":this._x=v*m*p-h*x*M,this._y=h*x*p-v*m*M,this._z=h*m*M+v*x*p,this._w=h*m*p+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],m=t[6],p=t[10],v=r+c+p;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-o)*x}else if(r>c&&r>p){const x=2*Math.sqrt(1+r-c-p);this._w=(m-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+h)/x}else if(c>p){const x=2*Math.sqrt(1+c-r-p);this._w=(l-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+p-r-c);this._w=(u-o)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*c+o*h-l*d,this._y=o*m+u*d+l*c-r*h,this._z=l*m+u*h+r*d-o*c,this._w=u*m-r*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,c),p=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*p+this._w*v,this._x=r*p+this._x*v,this._y=o*p+this._y*v,this._z=l*p+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),m=2*(c*t-l*o),p=2*(l*r-u*t);return this.x=t+d*h+u*p-c*m,this.y=r+d*m+c*h-l*p,this.z=o+d*p+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Zf.copy(this).projectOnVector(e),this.sub(Zf)}reflect(e){return this.sub(Zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new ne,Dv=new Wa;class gt{constructor(e,t,r,o,l,u,c,d,h){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h)}set(e,t,r,o,l,u,c,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],m=r[4],p=r[7],v=r[2],x=r[5],M=r[8],T=o[0],S=o[3],y=o[6],D=o[1],C=o[4],A=o[7],N=o[2],I=o[5],F=o[8];return l[0]=u*T+c*D+d*N,l[3]=u*S+c*C+d*I,l[6]=u*y+c*A+d*F,l[1]=h*T+m*D+p*N,l[4]=h*S+m*C+p*I,l[7]=h*y+m*A+p*F,l[2]=v*T+x*D+M*N,l[5]=v*S+x*C+M*I,l[8]=v*y+x*A+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*c*h-r*l*m+r*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],p=m*u-c*h,v=c*d-m*l,x=h*l-u*d,M=t*p+r*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=p*T,e[1]=(o*h-m*r)*T,e[2]=(c*r-o*u)*T,e[3]=v*T,e[4]=(m*t-o*d)*T,e[5]=(o*l-c*t)*T,e[6]=x*T,e[7]=(r*d-h*t)*T,e[8]=(u*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Qf.makeScale(e,t)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new gt;function hx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bC(){const n=Hu("canvas");return n.style.display="block",n}const Lv={};function Fa(n){n in Lv||(Lv[n]=!0,console.warn(n))}function PC(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Iv=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nv=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DC(){const n={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ot&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(o.r=Mo(o.r),o.g=Mo(o.g),o.b=Mo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Vr?Vu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Fa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Fa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ro]:{primaries:e,whitePoint:r,transfer:Vu,toXYZ:Iv,fromXYZ:Nv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:Iv,fromXYZ:Nv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),n}const Rt=DC();function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let eo;class LC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{eo===void 0&&(eo=Hu("canvas")),eo.width=e.width,eo.height=e.height;const o=eo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=eo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=lr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IC=0;class wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IC++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(Jf(o[u].image)):l.push(Jf(o[u]))}else l=Jf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Jf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?LC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NC=0;const ed=new ne;class qn extends Io{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,r=Ms,o=Ms,l=Bi,u=Es,c=bi,d=fr,h=qn.DEFAULT_ANISOTROPY,m=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NC++}),this.uuid=Ga(),this.name="",this.source=new wp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sh:e.x=e.x-Math.floor(e.x);break;case Ms:e.x=e.x<0?0:1;break;case oh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sh:e.y=e.y-Math.floor(e.y);break;case Ms:e.y=e.y<0?0:1;break;case oh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=ix;qn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,r=0,o=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],p=d[8],v=d[1],x=d[5],M=d[9],T=d[2],S=d[6],y=d[10];if(Math.abs(m-v)<.01&&Math.abs(p-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(p+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,A=(x+1)/2,N=(y+1)/2,I=(m+v)/4,F=(p+T)/4,k=(M+S)/4;return C>A&&C>N?C<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(C),o=I/r,l=F/r):A>N?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=I/o,l=k/o):N<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),r=F/l,o=k/l),this.set(r,o,l,t),this}let D=Math.sqrt((S-M)*(S-M)+(p-T)*(p-T)+(v-m)*(v-m));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(p-T)/D,this.z=(v-m)/D,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UC extends Io{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new qn(o);this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new wp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends UC{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class px extends qn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FC extends qn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ja{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ti):Ti.fromBufferAttribute(l,u),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),su.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),su.copy(r.boundingBox)),su.applyMatrix4(e.matrixWorld),this.union(su)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),ou.subVectors(this.max,ma),to.subVectors(e.a,ma),no.subVectors(e.b,ma),io.subVectors(e.c,ma),Ir.subVectors(no,to),Nr.subVectors(io,no),us.subVectors(to,io);let t=[0,-Ir.z,Ir.y,0,-Nr.z,Nr.y,0,-us.z,us.y,Ir.z,0,-Ir.x,Nr.z,0,-Nr.x,us.z,0,-us.x,-Ir.y,Ir.x,0,-Nr.y,Nr.x,0,-us.y,us.x,0];return!td(t,to,no,io,ou)||(t=[1,0,0,0,1,0,0,0,1],!td(t,to,no,io,ou))?!1:(au.crossVectors(Ir,Nr),t=[au.x,au.y,au.z],td(t,to,no,io,ou))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tr=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Ti=new ne,su=new ja,to=new ne,no=new ne,io=new ne,Ir=new ne,Nr=new ne,us=new ne,ma=new ne,ou=new ne,au=new ne,cs=new ne;function td(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){cs.fromArray(n,l);const c=o.x*Math.abs(cs.x)+o.y*Math.abs(cs.y)+o.z*Math.abs(cs.z),d=e.dot(cs),h=t.dot(cs),m=r.dot(cs);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const OC=new ja,ga=new ne,nd=new ne;class Ap{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):OC.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ga,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(nd)),this.expandByPoint(ga.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const nr=new ne,id=new ne,lu=new ne,Ur=new ne,rd=new ne,uu=new ne,sd=new ne;class kC{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){id.copy(e).add(t).multiplyScalar(.5),lu.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(id);const l=e.distanceTo(t)*.5,u=-this.direction.dot(lu),c=Ur.dot(this.direction),d=-Ur.dot(lu),h=Ur.lengthSq(),m=Math.abs(1-u*u);let p,v,x,M;if(m>0)if(p=u*d-c,v=u*c-d,M=l*m,p>=0)if(v>=-M)if(v<=M){const T=1/m;p*=T,v*=T,x=p*(p+u*v+2*c)+v*(u*p+v+2*d)+h}else v=l,p=Math.max(0,-(u*v+c)),x=-p*p+v*(v+2*d)+h;else v=-l,p=Math.max(0,-(u*v+c)),x=-p*p+v*(v+2*d)+h;else v<=-M?(p=Math.max(0,-(-u*l+c)),v=p>0?-l:Math.min(Math.max(-l,-d),l),x=-p*p+v*(v+2*d)+h):v<=M?(p=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+h):(p=Math.max(0,-(u*l+c)),v=p>0?l:Math.min(Math.max(-l,-d),l),x=-p*p+v*(v+2*d)+h);else v=u>0?-l:l,p=Math.max(0,-(u*v+c)),x=-p*p+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,p),o&&o.copy(id).addScaledVector(lu,v),x}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const r=nr.dot(this.direction),o=nr.dot(nr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,d;const h=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),p>=0?(c=(e.min.z-v.z)*p,d=(e.max.z-v.z)*p):(c=(e.max.z-v.z)*p,d=(e.min.z-v.z)*p),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,r,o,l){rd.subVectors(t,e),uu.subVectors(r,e),sd.crossVectors(rd,uu);let u=this.direction.dot(sd),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Ur.subVectors(this.origin,e);const d=c*this.direction.dot(uu.crossVectors(Ur,uu));if(d<0)return null;const h=c*this.direction.dot(rd.cross(Ur));if(h<0||d+h>u)return null;const m=-c*Ur.dot(sd);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,t,r,o,l,u,c,d,h,m,p,v,x,M,T,S){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h,m,p,v,x,M,T,S)}set(e,t,r,o,l,u,c,d,h,m,p,v,x,M,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=m,y[10]=p,y[14]=v,y[3]=x,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/ro.setFromMatrixColumn(e,0).length(),l=1/ro.setFromMatrixColumn(e,1).length(),u=1/ro.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),p=Math.sin(l);if(e.order==="XYZ"){const v=u*m,x=u*p,M=c*m,T=c*p;t[0]=d*m,t[4]=-d*p,t[8]=h,t[1]=x+M*h,t[5]=v-T*h,t[9]=-c*d,t[2]=T-v*h,t[6]=M+x*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,x=d*p,M=h*m,T=h*p;t[0]=v+T*c,t[4]=M*c-x,t[8]=u*h,t[1]=u*p,t[5]=u*m,t[9]=-c,t[2]=x*c-M,t[6]=T+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,x=d*p,M=h*m,T=h*p;t[0]=v-T*c,t[4]=-u*p,t[8]=M+x*c,t[1]=x+M*c,t[5]=u*m,t[9]=T-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,x=u*p,M=c*m,T=c*p;t[0]=d*m,t[4]=M*h-x,t[8]=v*h+T,t[1]=d*p,t[5]=T*h+v,t[9]=x*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,x=u*h,M=c*d,T=c*h;t[0]=d*m,t[4]=T-v*p,t[8]=M*p+x,t[1]=p,t[5]=u*m,t[9]=-c*m,t[2]=-h*m,t[6]=x*p+M,t[10]=v-T*p}else if(e.order==="XZY"){const v=u*d,x=u*h,M=c*d,T=c*h;t[0]=d*m,t[4]=-p,t[8]=h*m,t[1]=v*p+T,t[5]=u*m,t[9]=x*p-M,t[2]=M*p-x,t[6]=c*m,t[10]=T*p+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BC,e,VC)}lookAt(e,t,r){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Fr.crossVectors(r,Jn),Fr.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Fr.crossVectors(r,Jn)),Fr.normalize(),cu.crossVectors(Jn,Fr),o[0]=Fr.x,o[4]=cu.x,o[8]=Jn.x,o[1]=Fr.y,o[5]=cu.y,o[9]=Jn.y,o[2]=Fr.z,o[6]=cu.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],m=r[1],p=r[5],v=r[9],x=r[13],M=r[2],T=r[6],S=r[10],y=r[14],D=r[3],C=r[7],A=r[11],N=r[15],I=o[0],F=o[4],k=o[8],P=o[12],R=o[1],H=o[5],K=o[9],ie=o[13],ce=o[2],pe=o[6],Z=o[10],oe=o[14],V=o[3],le=o[7],te=o[11],O=o[15];return l[0]=u*I+c*R+d*ce+h*V,l[4]=u*F+c*H+d*pe+h*le,l[8]=u*k+c*K+d*Z+h*te,l[12]=u*P+c*ie+d*oe+h*O,l[1]=m*I+p*R+v*ce+x*V,l[5]=m*F+p*H+v*pe+x*le,l[9]=m*k+p*K+v*Z+x*te,l[13]=m*P+p*ie+v*oe+x*O,l[2]=M*I+T*R+S*ce+y*V,l[6]=M*F+T*H+S*pe+y*le,l[10]=M*k+T*K+S*Z+y*te,l[14]=M*P+T*ie+S*oe+y*O,l[3]=D*I+C*R+A*ce+N*V,l[7]=D*F+C*H+A*pe+N*le,l[11]=D*k+C*K+A*Z+N*te,l[15]=D*P+C*ie+A*oe+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],m=e[2],p=e[6],v=e[10],x=e[14],M=e[3],T=e[7],S=e[11],y=e[15];return M*(+l*d*p-o*h*p-l*c*v+r*h*v+o*c*x-r*d*x)+T*(+t*d*x-t*h*v+l*u*v-o*u*x+o*h*m-l*d*m)+S*(+t*h*p-t*c*x-l*u*p+r*u*x+l*c*m-r*h*m)+y*(-o*c*m-t*d*p+t*c*v+o*u*p-r*u*v+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],p=e[9],v=e[10],x=e[11],M=e[12],T=e[13],S=e[14],y=e[15],D=p*S*h-T*v*h+T*d*x-c*S*x-p*d*y+c*v*y,C=M*v*h-m*S*h-M*d*x+u*S*x+m*d*y-u*v*y,A=m*T*h-M*p*h+M*c*x-u*T*x-m*c*y+u*p*y,N=M*p*d-m*T*d-M*c*v+u*T*v+m*c*S-u*p*S,I=t*D+r*C+o*A+l*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=D*F,e[1]=(T*v*l-p*S*l-T*o*x+r*S*x+p*o*y-r*v*y)*F,e[2]=(c*S*l-T*d*l+T*o*h-r*S*h-c*o*y+r*d*y)*F,e[3]=(p*d*l-c*v*l-p*o*h+r*v*h+c*o*x-r*d*x)*F,e[4]=C*F,e[5]=(m*S*l-M*v*l+M*o*x-t*S*x-m*o*y+t*v*y)*F,e[6]=(M*d*l-u*S*l-M*o*h+t*S*h+u*o*y-t*d*y)*F,e[7]=(u*v*l-m*d*l+m*o*h-t*v*h-u*o*x+t*d*x)*F,e[8]=A*F,e[9]=(M*p*l-m*T*l-M*r*x+t*T*x+m*r*y-t*p*y)*F,e[10]=(u*T*l-M*c*l+M*r*h-t*T*h-u*r*y+t*c*y)*F,e[11]=(m*c*l-u*p*l-m*r*h+t*p*h+u*r*x-t*c*x)*F,e[12]=N*F,e[13]=(m*T*o-M*p*o+M*r*v-t*T*v-m*r*S+t*p*S)*F,e[14]=(M*c*o-u*T*o-M*r*d+t*T*d+u*r*S-t*c*S)*F,e[15]=(u*p*o-m*c*o+m*r*d-t*p*d-u*r*v+t*c*v)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,d=e.z,h=l*u,m=l*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,m*c+r,m*d-o*u,0,h*d-o*c,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,m=u+u,p=c+c,v=l*h,x=l*m,M=l*p,T=u*m,S=u*p,y=c*p,D=d*h,C=d*m,A=d*p,N=r.x,I=r.y,F=r.z;return o[0]=(1-(T+y))*N,o[1]=(x+A)*N,o[2]=(M-C)*N,o[3]=0,o[4]=(x-A)*I,o[5]=(1-(v+y))*I,o[6]=(S+D)*I,o[7]=0,o[8]=(M+C)*F,o[9]=(S-D)*F,o[10]=(1-(v+T))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=ro.set(o[0],o[1],o[2]).length();const u=ro.set(o[4],o[5],o[6]).length(),c=ro.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],wi.copy(this);const h=1/l,m=1/u,p=1/c;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=m,wi.elements[5]*=m,wi.elements[6]*=m,wi.elements[8]*=p,wi.elements[9]*=p,wi.elements[10]*=p,t.setFromRotationMatrix(wi),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=Vi,d=!1){const h=this.elements,m=2*l/(t-e),p=2*l/(r-o),v=(t+e)/(t-e),x=(r+o)/(r-o);let M,T;if(d)M=l/(u-l),T=u*l/(u-l);else if(c===Vi)M=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(c===zu)M=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=p,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=Vi,d=!1){const h=this.elements,m=2/(t-e),p=2/(r-o),v=-(t+e)/(t-e),x=-(r+o)/(r-o);let M,T;if(d)M=1/(u-l),T=u/(u-l);else if(c===Vi)M=-2/(u-l),T=-(u+l)/(u-l);else if(c===zu)M=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=p,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ro=new ne,wi=new fn,BC=new ne(0,0,0),VC=new ne(1,1,1),Fr=new ne,cu=new ne,Jn=new ne,Uv=new fn,Fv=new Wa;class dr{constructor(e=0,t=0,r=0,o=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],m=o[9],p=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-p,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-p,l)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Uv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fv.setFromEuler(this),this.setFromQuaternion(Fv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zC=0;const Ov=new ne,so=new Wa,ir=new fn,fu=new ne,va=new ne,HC=new ne,GC=new Wa,kv=new ne(1,0,0),Bv=new ne(0,1,0),Vv=new ne(0,0,1),zv={type:"added"},WC={type:"removed"},oo={type:"childadded",child:null},od={type:"childremoved",child:null};class ti extends Io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zC++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new ne,t=new dr,r=new Wa,o=new ne(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new gt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(kv,e)}rotateY(e){return this.rotateOnAxis(Bv,e)}rotateZ(e){return this.rotateOnAxis(Vv,e)}translateOnAxis(e,t){return Ov.copy(e).applyQuaternion(this.quaternion),this.position.add(Ov.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kv,e)}translateY(e){return this.translateOnAxis(Bv,e)}translateZ(e){return this.translateOnAxis(Vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fu.copy(e):fu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(va,fu,this.up):ir.lookAt(fu,va,this.up),this.quaternion.setFromRotationMatrix(ir),o&&(ir.extractRotation(o.matrixWorld),so.setFromRotationMatrix(ir),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zv),oo.child=e,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(WC),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zv),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,HC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,GC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>({...c})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const p=d[h];l(e.shapes,p)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),p=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),p.length>0&&(r.shapes=p),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ti.DEFAULT_UP=new ne(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new ne,rr=new ne,ad=new ne,sr=new ne,ao=new ne,lo=new ne,Hv=new ne,ld=new ne,ud=new ne,cd=new ne,fd=new rn,dd=new rn,hd=new rn;class Ri{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ai.subVectors(e,t),o.cross(Ai);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ai.subVectors(o,t),rr.subVectors(r,t),ad.subVectors(e,t);const u=Ai.dot(Ai),c=Ai.dot(rr),d=Ai.dot(ad),h=rr.dot(rr),m=rr.dot(ad),p=u*h-c*c;if(p===0)return l.set(0,0,0),null;const v=1/p,x=(h*d-c*m)*v,M=(u*m-c*d)*v;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,r,o,l,u,c,d){return this.getBarycoord(e,t,r,o,sr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,sr.x),d.addScaledVector(u,sr.y),d.addScaledVector(c,sr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return fd.setScalar(0),dd.setScalar(0),hd.setScalar(0),fd.fromBufferAttribute(e,t),dd.fromBufferAttribute(e,r),hd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(fd,l.x),u.addScaledVector(dd,l.y),u.addScaledVector(hd,l.z),u}static isFrontFacing(e,t,r,o){return Ai.subVectors(r,t),rr.subVectors(e,t),Ai.cross(rr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ai.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ri.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;ao.subVectors(o,r),lo.subVectors(l,r),ld.subVectors(e,r);const d=ao.dot(ld),h=lo.dot(ld);if(d<=0&&h<=0)return t.copy(r);ud.subVectors(e,o);const m=ao.dot(ud),p=lo.dot(ud);if(m>=0&&p<=m)return t.copy(o);const v=d*p-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(ao,u);cd.subVectors(e,l);const x=ao.dot(cd),M=lo.dot(cd);if(M>=0&&x<=M)return t.copy(l);const T=x*h-d*M;if(T<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(r).addScaledVector(lo,c);const S=m*M-x*p;if(S<=0&&p-m>=0&&x-M>=0)return Hv.subVectors(l,o),c=(p-m)/(p-m+(x-M)),t.copy(o).addScaledVector(Hv,c);const y=1/(S+T+v);return u=T*y,c=v*y,t.copy(r).addScaledVector(ao,u).addScaledVector(lo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},du={h:0,s:0,l:0};function pd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ut{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Rt.workingColorSpace){if(e=RC(e,1),t=Et(t,0,1),r=Et(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=pd(u,l,e+1/3),this.g=pd(u,l,e),this.b=pd(u,l,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,t=fi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const r=gx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Rt.workingToColorSpace(bn.copy(this),e),Math.round(Et(bn.r*255,0,255))*65536+Math.round(Et(bn.g*255,0,255))*256+Math.round(Et(bn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(bn.copy(this),t);const r=bn.r,o=bn.g,l=bn.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let d,h;const m=(c+u)/2;if(c===u)d=0,h=0;else{const p=u-c;switch(h=m<=.5?p/(u+c):p/(2-u-c),u){case r:d=(o-l)/p+(o<l?6:0);break;case o:d=(l-r)/p+2;break;case l:d=(r-o)/p+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=fi){Rt.workingToColorSpace(bn.copy(this),e);const t=bn.r,r=bn.g,o=bn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(du);const r=Kf(Or.h,du.h,t),o=Kf(Or.s,du.s,t),l=Kf(Or.l,du.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Ut;Ut.NAMES=gx;let jC=0;class Yu extends Io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jC++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=As,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=$d,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==jr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qd&&(r.blendSrc=this.blendSrc),this.blendDst!==$d&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vx extends Yu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new ne,hu=new bt;let XC=0;class Wi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=bv,this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)hu.fromBufferAttribute(this,t),hu.applyMatrix3(e),this.setXY(t,hu.x,hu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=pa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array),l=Wn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bv&&(e.usage=this.usage),e}}class _x extends Wi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class yx extends Wi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ji extends Wi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let YC=0;const ui=new fn,md=new ti,uo=new ne,ei=new ja,_a=new ja,vn=new ne;class Yr extends Io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YC++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hx(e)?yx:_x)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,r){return ui.makeTranslation(e,t,r),this.applyMatrix4(ui),this}scale(e,t,r){return ui.makeScale(e,t,r),this.applyMatrix4(ui),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ji(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ap);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];_a.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(ei.min,_a.min),ei.expandByPoint(vn),vn.addVectors(ei.max,_a.max),ei.expandByPoint(vn)):(ei.expandByPoint(_a.min),ei.expandByPoint(_a.max))}ei.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)vn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(vn));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)vn.fromBufferAttribute(c,h),d&&(uo.fromBufferAttribute(e,h),vn.add(uo)),o=Math.max(o,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let k=0;k<r.count;k++)c[k]=new ne,d[k]=new ne;const h=new ne,m=new ne,p=new ne,v=new bt,x=new bt,M=new bt,T=new ne,S=new ne;function y(k,P,R){h.fromBufferAttribute(r,k),m.fromBufferAttribute(r,P),p.fromBufferAttribute(r,R),v.fromBufferAttribute(l,k),x.fromBufferAttribute(l,P),M.fromBufferAttribute(l,R),m.sub(h),p.sub(h),x.sub(v),M.sub(v);const H=1/(x.x*M.y-M.x*x.y);isFinite(H)&&(T.copy(m).multiplyScalar(M.y).addScaledVector(p,-x.y).multiplyScalar(H),S.copy(p).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(H),c[k].add(T),c[P].add(T),c[R].add(T),d[k].add(S),d[P].add(S),d[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let k=0,P=D.length;k<P;++k){const R=D[k],H=R.start,K=R.count;for(let ie=H,ce=H+K;ie<ce;ie+=3)y(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const C=new ne,A=new ne,N=new ne,I=new ne;function F(k){N.fromBufferAttribute(o,k),I.copy(N);const P=c[k];C.copy(P),C.sub(N.multiplyScalar(N.dot(P))).normalize(),A.crossVectors(I,P);const H=A.dot(d[k])<0?-1:1;u.setXYZW(k,C.x,C.y,C.z,H)}for(let k=0,P=D.length;k<P;++k){const R=D[k],H=R.start,K=R.count;for(let ie=H,ce=H+K;ie<ce;ie+=3)F(e.getX(ie+0)),F(e.getX(ie+1)),F(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new ne,l=new ne,u=new ne,c=new ne,d=new ne,h=new ne,m=new ne,p=new ne;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),m.subVectors(u,l),p.subVectors(o,l),m.cross(p),c.fromBufferAttribute(r,M),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),c.add(m),d.add(m),h.add(m),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),p.subVectors(o,l),m.cross(p),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,p=c.normalized,v=new h.constructor(d.length*m);let x=0,M=0;for(let T=0,S=d.length;T<S;T++){c.isInterleavedBufferAttribute?x=d[T]*c.data.stride+c.offset:x=d[T]*m;for(let y=0;y<m;y++)v[M++]=h[x++]}return new Wi(v,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yr,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let m=0,p=h.length;m<p;m++){const v=h[m],x=e(v,r);d.push(x)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let p=0,v=h.length;p<v;p++){const x=h[p];m.push(x.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],p=l[h];for(let v=0,x=p.length;v<x;v++)m.push(p[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gv=new fn,fs=new kC,pu=new Ap,Wv=new ne,mu=new ne,gu=new ne,vu=new ne,gd=new ne,_u=new ne,jv=new ne,yu=new ne;class zi extends ti{constructor(e=new Yr,t=new vx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){_u.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=c[d],p=l[d];m!==0&&(gd.fromBufferAttribute(p,e),u?_u.addScaledVector(gd,m):_u.addScaledVector(gd.sub(t),m))}t.add(_u)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pu.copy(r.boundingSphere),pu.applyMatrix4(l),fs.copy(e.ray).recast(e.near),!(pu.containsPoint(fs.origin)===!1&&(fs.intersectSphere(pu,Wv)===null||fs.origin.distanceToSquared(Wv)>(e.far-e.near)**2))&&(Gv.copy(l).invert(),fs.copy(e.ray).applyMatrix4(Gv),!(r.boundingBox!==null&&fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,p=l.attributes.normal,v=l.groups,x=l.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=u[S.materialIndex],D=Math.max(S.start,x.start),C=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let A=D,N=C;A<N;A+=3){const I=c.getX(A),F=c.getX(A+1),k=c.getX(A+2);o=xu(this,y,e,r,h,m,p,I,F,k),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(c.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const D=c.getX(S),C=c.getX(S+1),A=c.getX(S+2);o=xu(this,u,e,r,h,m,p,D,C,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=u[S.materialIndex],D=Math.max(S.start,x.start),C=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let A=D,N=C;A<N;A+=3){const I=A,F=A+1,k=A+2;o=xu(this,y,e,r,h,m,p,I,F,k),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const D=S,C=S+1,A=S+2;o=xu(this,u,e,r,h,m,p,D,C,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function qC(n,e,t,r,o,l,u,c){let d;if(e.side===Yn?d=r.intersectTriangle(u,l,o,!0,c):d=r.intersectTriangle(o,l,u,e.side===jr,c),d===null)return null;yu.copy(c),yu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(yu);return h<t.near||h>t.far?null:{distance:h,point:yu.clone(),object:n}}function xu(n,e,t,r,o,l,u,c,d,h){n.getVertexPosition(c,mu),n.getVertexPosition(d,gu),n.getVertexPosition(h,vu);const m=qC(n,e,t,r,mu,gu,vu,jv);if(m){const p=new ne;Ri.getBarycoord(jv,mu,gu,vu,p),o&&(m.uv=Ri.getInterpolatedAttribute(o,c,d,h,p,new bt)),l&&(m.uv1=Ri.getInterpolatedAttribute(l,c,d,h,p,new bt)),u&&(m.normal=Ri.getInterpolatedAttribute(u,c,d,h,p,new ne),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:d,c:h,normal:new ne,materialIndex:0};Ri.getNormal(mu,gu,vu,v.normal),m.face=v,m.barycoord=p}return m}class Xa extends Yr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],p=[];let v=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new ji(h,3)),this.setAttribute("normal",new ji(m,3)),this.setAttribute("uv",new ji(p,2));function M(T,S,y,D,C,A,N,I,F,k,P){const R=A/F,H=N/k,K=A/2,ie=N/2,ce=I/2,pe=F+1,Z=k+1;let oe=0,V=0;const le=new ne;for(let te=0;te<Z;te++){const O=te*H-ie;for(let se=0;se<pe;se++){const ye=se*R-K;le[T]=ye*D,le[S]=O*C,le[y]=ce,h.push(le.x,le.y,le.z),le[T]=0,le[S]=0,le[y]=I>0?1:-1,m.push(le.x,le.y,le.z),p.push(se/F),p.push(1-te/k),oe+=1}}for(let te=0;te<k;te++)for(let O=0;O<F;O++){const se=v+O+pe*te,ye=v+O+pe*(te+1),be=v+(O+1)+pe*(te+1),Re=v+(O+1)+pe*te;d.push(se,ye,Re),d.push(ye,be,Re),V+=6}c.addGroup(x,V,P),x+=V,v+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const r=bo(n[t]);for(const o in r)e[o]=r[o]}return e}function $C(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const KC={clone:bo,merge:Fn};var ZC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Yu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZC,this.fragmentShader=QC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=$C(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Sx extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kr=new ne,Xv=new bt,Yv=new bt;class di extends Sx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($f*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uh*2*Math.atan(Math.tan($f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,t){return this.getViewBounds(e,Xv,Yv),t.subVectors(Yv,Xv)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($f*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const co=-90,fo=1;class JC extends ti{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(co,fo,e,t);o.layers=this.layers,this.add(o);const l=new di(co,fo,e,t);l.layers=this.layers,this.add(l);const u=new di(co,fo,e,t);u.layers=this.layers,this.add(u);const c=new di(co,fo,e,t);c.layers=this.layers,this.add(c);const d=new di(co,fo,e,t);d.layers=this.layers,this.add(d);const h=new di(co,fo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===zu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,m]=this.children,p=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(p,v,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Mx extends qn{constructor(e=[],t=Ao,r,o,l,u,c,d,h,m){super(e,t,r,o,l,u,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eR extends Rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Mx(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Xa(5,5,5),l=new hr({name:"CubemapFromEquirect",uniforms:bo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:zr});l.uniforms.tEquirect.value=t;const u=new zi(o,l),c=t.minFilter;return t.minFilter===Es&&(t.minFilter=Bi),new JC(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class Su extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tR={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Su,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Su,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Su,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,r),y=this._getHandJoint(h,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],v=m.position.distanceTo(p.position),x=.02,M=.005;h.inputState.pinching&&v>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(tR)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Su;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class nR extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _d=new ne,iR=new ne,rR=new gt;class gs{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=_d.subVectors(r,t).cross(iR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(_d),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||rR.getNormalMatrix(e),o=this.coplanarPoint(_d).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Ap,sR=new bt(.5,.5),Mu=new ne;class Ex{constructor(e=new gs,t=new gs,r=new gs,o=new gs,l=new gs,u=new gs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Vi,r=!1){const o=this.planes,l=e.elements,u=l[0],c=l[1],d=l[2],h=l[3],m=l[4],p=l[5],v=l[6],x=l[7],M=l[8],T=l[9],S=l[10],y=l[11],D=l[12],C=l[13],A=l[14],N=l[15];if(o[0].setComponents(h-u,x-m,y-M,N-D).normalize(),o[1].setComponents(h+u,x+m,y+M,N+D).normalize(),o[2].setComponents(h+c,x+p,y+T,N+C).normalize(),o[3].setComponents(h-c,x-p,y-T,N-C).normalize(),r)o[4].setComponents(d,v,S,A).normalize(),o[5].setComponents(h-d,x-v,y-S,N-A).normalize();else if(o[4].setComponents(h-d,x-v,y-S,N-A).normalize(),t===Vi)o[5].setComponents(h+d,x+v,y+S,N+A).normalize();else if(t===zu)o[5].setComponents(d,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=sR.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Mu.x=o.normal.x>0?e.max.x:e.min.x,Mu.y=o.normal.y>0?e.max.y:e.min.y,Mu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Mu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tx extends qn{constructor(e,t,r=Cs,o,l,u,c=Pi,d=Pi,h,m=Na,p=1){if(m!==Na&&m!==Ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:p};super(v,o,l,u,c,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wx extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cp extends Yr{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];c(o),h(r),m(),this.setAttribute("position",new ji(l,3)),this.setAttribute("normal",new ji(l.slice(),3)),this.setAttribute("uv",new ji(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function c(D){const C=new ne,A=new ne,N=new ne;for(let I=0;I<t.length;I+=3)x(t[I+0],C),x(t[I+1],A),x(t[I+2],N),d(C,A,N,D)}function d(D,C,A,N){const I=N+1,F=[];for(let k=0;k<=I;k++){F[k]=[];const P=D.clone().lerp(A,k/I),R=C.clone().lerp(A,k/I),H=I-k;for(let K=0;K<=H;K++)K===0&&k===I?F[k][K]=P:F[k][K]=P.clone().lerp(R,K/H)}for(let k=0;k<I;k++)for(let P=0;P<2*(I-k)-1;P++){const R=Math.floor(P/2);P%2===0?(v(F[k][R+1]),v(F[k+1][R]),v(F[k][R])):(v(F[k][R+1]),v(F[k+1][R+1]),v(F[k+1][R]))}}function h(D){const C=new ne;for(let A=0;A<l.length;A+=3)C.x=l[A+0],C.y=l[A+1],C.z=l[A+2],C.normalize().multiplyScalar(D),l[A+0]=C.x,l[A+1]=C.y,l[A+2]=C.z}function m(){const D=new ne;for(let C=0;C<l.length;C+=3){D.x=l[C+0],D.y=l[C+1],D.z=l[C+2];const A=S(D)/2/Math.PI+.5,N=y(D)/Math.PI+.5;u.push(A,1-N)}M(),p()}function p(){for(let D=0;D<u.length;D+=6){const C=u[D+0],A=u[D+2],N=u[D+4],I=Math.max(C,A,N),F=Math.min(C,A,N);I>.9&&F<.1&&(C<.2&&(u[D+0]+=1),A<.2&&(u[D+2]+=1),N<.2&&(u[D+4]+=1))}}function v(D){l.push(D.x,D.y,D.z)}function x(D,C){const A=D*3;C.x=e[A+0],C.y=e[A+1],C.z=e[A+2]}function M(){const D=new ne,C=new ne,A=new ne,N=new ne,I=new bt,F=new bt,k=new bt;for(let P=0,R=0;P<l.length;P+=9,R+=6){D.set(l[P+0],l[P+1],l[P+2]),C.set(l[P+3],l[P+4],l[P+5]),A.set(l[P+6],l[P+7],l[P+8]),I.set(u[R+0],u[R+1]),F.set(u[R+2],u[R+3]),k.set(u[R+4],u[R+5]),N.copy(D).add(C).add(A).divideScalar(3);const H=S(N);T(I,R+0,D,H),T(F,R+2,C,H),T(k,R+4,A,H)}}function T(D,C,A,N){N<0&&D.x===1&&(u[C]=D.x-1),A.x===0&&A.z===0&&(u[C]=N/2/Math.PI+.5)}function S(D){return Math.atan2(D.z,-D.x)}function y(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cp(e.vertices,e.indices,e.radius,e.details)}}class Rp extends Cp{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rp(e.radius,e.detail)}}class qu extends Yr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,m=d+1,p=e/c,v=t/d,x=[],M=[],T=[],S=[];for(let y=0;y<m;y++){const D=y*v-u;for(let C=0;C<h;C++){const A=C*p-l;M.push(A,-D,0),T.push(0,0,1),S.push(C/c),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let D=0;D<c;D++){const C=D+h*y,A=D+h*(y+1),N=D+1+h*(y+1),I=D+1+h*y;x.push(C,A,I),x.push(A,N,I)}this.setIndex(x),this.setAttribute("position",new ji(M,3)),this.setAttribute("normal",new ji(T,3)),this.setAttribute("uv",new ji(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.width,e.height,e.widthSegments,e.heightSegments)}}class oR extends Yu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aR extends Yu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lR extends Sx{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class uR extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qv(n,e,t,r){const o=fR(r);switch(t){case lx:return n*e;case cx:return n*e/o.components*o.byteLength;case Mp:return n*e/o.components*o.byteLength;case fx:return n*e*2/o.components*o.byteLength;case Ep:return n*e*2/o.components*o.byteLength;case ux:return n*e*3/o.components*o.byteLength;case bi:return n*e*4/o.components*o.byteLength;case Tp:return n*e*4/o.components*o.byteLength;case Pu:case Du:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lu:case Iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lh:case ch:return Math.max(n,16)*Math.max(e,8)/4;case ah:case uh:return Math.max(n,8)*Math.max(e,8)/2;case fh:case dh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Rh:case bh:case Ph:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dh:case Lh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ih:case Nh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fR(n){switch(n){case fr:case rx:return{byteLength:1,components:1};case La:case sx:case Ha:return{byteLength:2,components:1};case xp:case Sp:return{byteLength:2,components:4};case Cs:case yp:case ar:return{byteLength:4,components:1};case ox:case ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ax(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function dR(n){const e=new WeakMap;function t(c,d){const h=c.array,m=c.usage,p=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,m),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,d,h){const m=d.array,p=d.updateRanges;if(n.bindBuffer(h,c),p.length===0)n.bufferSubData(h,0,m);else{p.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<p.length;x++){const M=p[v],T=p[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++v,p[v]=T)}p.length=v+1;for(let x=0,M=p.length;x<M;x++){const T=p[x];n.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:l,update:u}}var hR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pR=`#ifdef USE_ALPHAHASH
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
#endif`,mR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_R=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yR=`#ifdef USE_AOMAP
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
#endif`,xR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SR=`#ifdef USE_BATCHING
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
#endif`,MR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ER=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AR=`#ifdef USE_IRIDESCENCE
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
#endif`,CR=`#ifdef USE_BUMPMAP
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
#endif`,RR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,FR=`#define PI 3.141592653589793
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
} // validated`,OR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kR=`vec3 transformedNormal = objectNormal;
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
#endif`,BR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GR="gl_FragColor = linearToOutputTexel( gl_FragColor );",WR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jR=`#ifdef USE_ENVMAP
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
#endif`,XR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YR=`#ifdef USE_ENVMAP
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
#endif`,qR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$R=`#ifdef USE_ENVMAP
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
#endif`,KR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eb=`#ifdef USE_GRADIENTMAP
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
}`,tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rb=`uniform bool receiveShadow;
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
#endif`,sb=`#ifdef USE_ENVMAP
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
#endif`,ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cb=`PhysicalMaterial material;
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
#endif`,fb=`struct PhysicalMaterial {
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
}`,db=`
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
#endif`,hb=`#if defined( RE_IndirectDiffuse )
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
#endif`,pb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mb=`#if defined( USE_POINTS_UV )
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
#endif`,Eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`#ifdef USE_MORPHTARGETS
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
#endif`,bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Db=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ub=`#ifdef USE_NORMALMAP
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
#endif`,Fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$b=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zb=`float getShadowMask() {
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
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jb=`#ifdef USE_SKINNING
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
#endif`,e2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t2=`#ifdef USE_SKINNING
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
#endif`,n2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o2=`#ifdef USE_TRANSMISSION
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
#endif`,a2=`#ifdef USE_TRANSMISSION
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
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h2=`uniform sampler2D t2D;
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
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_2=`#include <common>
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
}`,y2=`#if DEPTH_PACKING == 3200
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
}`,x2=`#define DISTANCE
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
}`,S2=`#define DISTANCE
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
}`,M2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T2=`uniform float scale;
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
}`,w2=`uniform vec3 diffuse;
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
}`,A2=`#include <common>
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
}`,C2=`uniform vec3 diffuse;
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
}`,R2=`#define LAMBERT
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
}`,b2=`#define LAMBERT
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
}`,P2=`#define MATCAP
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
}`,D2=`#define MATCAP
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
}`,L2=`#define NORMAL
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
}`,I2=`#define NORMAL
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
}`,N2=`#define PHONG
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
}`,U2=`#define PHONG
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
}`,F2=`#define STANDARD
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
}`,O2=`#define STANDARD
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
}`,k2=`#define TOON
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
}`,B2=`#define TOON
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
}`,V2=`uniform float size;
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
}`,z2=`uniform vec3 diffuse;
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
}`,H2=`#include <common>
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
}`,G2=`uniform vec3 color;
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
}`,W2=`uniform float rotation;
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
}`,j2=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:hR,alphahash_pars_fragment:pR,alphamap_fragment:mR,alphamap_pars_fragment:gR,alphatest_fragment:vR,alphatest_pars_fragment:_R,aomap_fragment:yR,aomap_pars_fragment:xR,batching_pars_vertex:SR,batching_vertex:MR,begin_vertex:ER,beginnormal_vertex:TR,bsdfs:wR,iridescence_fragment:AR,bumpmap_pars_fragment:CR,clipping_planes_fragment:RR,clipping_planes_pars_fragment:bR,clipping_planes_pars_vertex:PR,clipping_planes_vertex:DR,color_fragment:LR,color_pars_fragment:IR,color_pars_vertex:NR,color_vertex:UR,common:FR,cube_uv_reflection_fragment:OR,defaultnormal_vertex:kR,displacementmap_pars_vertex:BR,displacementmap_vertex:VR,emissivemap_fragment:zR,emissivemap_pars_fragment:HR,colorspace_fragment:GR,colorspace_pars_fragment:WR,envmap_fragment:jR,envmap_common_pars_fragment:XR,envmap_pars_fragment:YR,envmap_pars_vertex:qR,envmap_physical_pars_fragment:sb,envmap_vertex:$R,fog_vertex:KR,fog_pars_vertex:ZR,fog_fragment:QR,fog_pars_fragment:JR,gradientmap_pars_fragment:eb,lightmap_pars_fragment:tb,lights_lambert_fragment:nb,lights_lambert_pars_fragment:ib,lights_pars_begin:rb,lights_toon_fragment:ob,lights_toon_pars_fragment:ab,lights_phong_fragment:lb,lights_phong_pars_fragment:ub,lights_physical_fragment:cb,lights_physical_pars_fragment:fb,lights_fragment_begin:db,lights_fragment_maps:hb,lights_fragment_end:pb,logdepthbuf_fragment:mb,logdepthbuf_pars_fragment:gb,logdepthbuf_pars_vertex:vb,logdepthbuf_vertex:_b,map_fragment:yb,map_pars_fragment:xb,map_particle_fragment:Sb,map_particle_pars_fragment:Mb,metalnessmap_fragment:Eb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:wb,morphcolor_vertex:Ab,morphnormal_vertex:Cb,morphtarget_pars_vertex:Rb,morphtarget_vertex:bb,normal_fragment_begin:Pb,normal_fragment_maps:Db,normal_pars_fragment:Lb,normal_pars_vertex:Ib,normal_vertex:Nb,normalmap_pars_fragment:Ub,clearcoat_normal_fragment_begin:Fb,clearcoat_normal_fragment_maps:Ob,clearcoat_pars_fragment:kb,iridescence_pars_fragment:Bb,opaque_fragment:Vb,packing:zb,premultiplied_alpha_fragment:Hb,project_vertex:Gb,dithering_fragment:Wb,dithering_pars_fragment:jb,roughnessmap_fragment:Xb,roughnessmap_pars_fragment:Yb,shadowmap_pars_fragment:qb,shadowmap_pars_vertex:$b,shadowmap_vertex:Kb,shadowmask_pars_fragment:Zb,skinbase_vertex:Qb,skinning_pars_vertex:Jb,skinning_vertex:e2,skinnormal_vertex:t2,specularmap_fragment:n2,specularmap_pars_fragment:i2,tonemapping_fragment:r2,tonemapping_pars_fragment:s2,transmission_fragment:o2,transmission_pars_fragment:a2,uv_pars_fragment:l2,uv_pars_vertex:u2,uv_vertex:c2,worldpos_vertex:f2,background_vert:d2,background_frag:h2,backgroundCube_vert:p2,backgroundCube_frag:m2,cube_vert:g2,cube_frag:v2,depth_vert:_2,depth_frag:y2,distanceRGBA_vert:x2,distanceRGBA_frag:S2,equirect_vert:M2,equirect_frag:E2,linedashed_vert:T2,linedashed_frag:w2,meshbasic_vert:A2,meshbasic_frag:C2,meshlambert_vert:R2,meshlambert_frag:b2,meshmatcap_vert:P2,meshmatcap_frag:D2,meshnormal_vert:L2,meshnormal_frag:I2,meshphong_vert:N2,meshphong_frag:U2,meshphysical_vert:F2,meshphysical_frag:O2,meshtoon_vert:k2,meshtoon_frag:B2,points_vert:V2,points_frag:z2,shadow_vert:H2,shadow_frag:G2,sprite_vert:W2,sprite_frag:j2},Oe={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Oi={basic:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ut(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Fn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Fn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ut(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Fn([Oe.points,Oe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Fn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Fn([Oe.common,Oe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Fn([Oe.sprite,Oe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Fn([Oe.common,Oe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Fn([Oe.lights,Oe.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Oi.physical={uniforms:Fn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Eu={r:0,b:0,g:0},hs=new dr,X2=new fn;function Y2(n,e,t,r,o,l,u){const c=new Ut(0);let d=l===!0?0:1,h,m,p=null,v=0,x=null;function M(C){let A=C.isScene===!0?C.background:null;return A&&A.isTexture&&(A=(C.backgroundBlurriness>0?t:e).get(A)),A}function T(C){let A=!1;const N=M(C);N===null?y(c,d):N&&N.isColor&&(y(N,1),A=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(C,A){const N=M(A);N&&(N.isCubeTexture||N.mapping===Xu)?(m===void 0&&(m=new zi(new Xa(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:bo(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),hs.copy(A.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(X2.makeRotationFromEuler(hs)),m.material.toneMapped=Rt.getTransfer(N.colorSpace)!==Ot,(p!==N||v!==N.version||x!==n.toneMapping)&&(m.material.needsUpdate=!0,p=N,v=N.version,x=n.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new zi(new qu(2,2),new hr({name:"BackgroundMaterial",uniforms:bo(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(N.colorSpace)!==Ot,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(p!==N||v!==N.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,p=N,v=N.version,x=n.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function y(C,A){C.getRGB(Eu,xx(n)),r.buffers.color.setClear(Eu.r,Eu.g,Eu.b,A,u)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,A=1){c.set(C),d=A,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,y(c,d)},render:T,addToRenderList:S,dispose:D}}function q2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function c(R,H,K,ie,ce){let pe=!1;const Z=p(ie,K,H);l!==Z&&(l=Z,h(l.object)),pe=x(R,ie,K,ce),pe&&M(R,ie,K,ce),ce!==null&&e.update(ce,n.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,A(R,H,K,ie),ce!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function d(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function m(R){return n.deleteVertexArray(R)}function p(R,H,K){const ie=K.wireframe===!0;let ce=r[R.id];ce===void 0&&(ce={},r[R.id]=ce);let pe=ce[H.id];pe===void 0&&(pe={},ce[H.id]=pe);let Z=pe[ie];return Z===void 0&&(Z=v(d()),pe[ie]=Z),Z}function v(R){const H=[],K=[],ie=[];for(let ce=0;ce<t;ce++)H[ce]=0,K[ce]=0,ie[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:ie,object:R,attributes:{},index:null}}function x(R,H,K,ie){const ce=l.attributes,pe=H.attributes;let Z=0;const oe=K.getAttributes();for(const V in oe)if(oe[V].location>=0){const te=ce[V];let O=pe[V];if(O===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),te===void 0||te.attribute!==O||O&&te.data!==O.data)return!0;Z++}return l.attributesNum!==Z||l.index!==ie}function M(R,H,K,ie){const ce={},pe=H.attributes;let Z=0;const oe=K.getAttributes();for(const V in oe)if(oe[V].location>=0){let te=pe[V];te===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const O={};O.attribute=te,te&&te.data&&(O.data=te.data),ce[V]=O,Z++}l.attributes=ce,l.attributesNum=Z,l.index=ie}function T(){const R=l.newAttributes;for(let H=0,K=R.length;H<K;H++)R[H]=0}function S(R){y(R,0)}function y(R,H){const K=l.newAttributes,ie=l.enabledAttributes,ce=l.attributeDivisors;K[R]=1,ie[R]===0&&(n.enableVertexAttribArray(R),ie[R]=1),ce[R]!==H&&(n.vertexAttribDivisor(R,H),ce[R]=H)}function D(){const R=l.newAttributes,H=l.enabledAttributes;for(let K=0,ie=H.length;K<ie;K++)H[K]!==R[K]&&(n.disableVertexAttribArray(K),H[K]=0)}function C(R,H,K,ie,ce,pe,Z){Z===!0?n.vertexAttribIPointer(R,H,K,ce,pe):n.vertexAttribPointer(R,H,K,ie,ce,pe)}function A(R,H,K,ie){T();const ce=ie.attributes,pe=K.getAttributes(),Z=H.defaultAttributeValues;for(const oe in pe){const V=pe[oe];if(V.location>=0){let le=ce[oe];if(le===void 0&&(oe==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),oe==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const te=le.normalized,O=le.itemSize,se=e.get(le);if(se===void 0)continue;const ye=se.buffer,be=se.type,Re=se.bytesPerElement,Q=be===n.INT||be===n.UNSIGNED_INT||le.gpuType===yp;if(le.isInterleavedBufferAttribute){const fe=le.data,me=fe.stride,Ne=le.offset;if(fe.isInstancedInterleavedBuffer){for(let ke=0;ke<V.locationSize;ke++)y(V.location+ke,fe.meshPerAttribute);R.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<V.locationSize;ke++)S(V.location+ke);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let ke=0;ke<V.locationSize;ke++)C(V.location+ke,O/V.locationSize,be,te,me*Re,(Ne+O/V.locationSize*ke)*Re,Q)}else{if(le.isInstancedBufferAttribute){for(let fe=0;fe<V.locationSize;fe++)y(V.location+fe,le.meshPerAttribute);R.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let fe=0;fe<V.locationSize;fe++)S(V.location+fe);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let fe=0;fe<V.locationSize;fe++)C(V.location+fe,O/V.locationSize,be,te,O*Re,O/V.locationSize*fe*Re,Q)}}else if(Z!==void 0){const te=Z[oe];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(V.location,te);break;case 3:n.vertexAttrib3fv(V.location,te);break;case 4:n.vertexAttrib4fv(V.location,te);break;default:n.vertexAttrib1fv(V.location,te)}}}}D()}function N(){k();for(const R in r){const H=r[R];for(const K in H){const ie=H[K];for(const ce in ie)m(ie[ce].object),delete ie[ce];delete H[K]}delete r[R]}}function I(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const K in H){const ie=H[K];for(const ce in ie)m(ie[ce].object),delete ie[ce];delete H[K]}delete r[R.id]}function F(R){for(const H in r){const K=r[H];if(K[R.id]===void 0)continue;const ie=K[R.id];for(const ce in ie)m(ie[ce].object),delete ie[ce];delete K[R.id]}}function k(){P(),u=!0,l!==o&&(l=o,h(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:k,resetDefaultState:P,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function $2(n,e,t){let r;function o(h){r=h}function l(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,p){p!==0&&(n.drawArraysInstanced(r,h,m,p),t.update(m,r,p))}function c(h,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,p);let x=0;for(let M=0;M<p;M++)x+=m[M];t.update(x,r,1)}function d(h,m,p,v){if(p===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)u(h[M],m[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,m,0,v,0,p);let M=0;for(let T=0;T<p;T++)M+=m[T]*v[T];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function K2(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==bi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(F){const k=F===Ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==fr&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ar&&!k)}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:C,maxFragmentUniforms:A,vertexTextures:N,maxSamples:I}}function Z2(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new gs,c=new gt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(p,v){const x=p.length!==0||v||r!==0||o;return o=v,r=p.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(p,v){t=m(p,v,0)},this.setState=function(p,v,x){const M=p.clippingPlanes,T=p.clipIntersection,S=p.clipShadows,y=n.get(p);if(!o||M===null||M.length===0||l&&!S)l?m(null):h();else{const D=l?0:r,C=D*4;let A=y.clippingState||null;d.value=A,A=m(M,v,C,x);for(let N=0;N!==C;++N)A[N]=t[N];y.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(p,v,x,M){const T=p!==null?p.length:0;let S=null;if(T!==0){if(S=d.value,M!==!0||S===null){const y=x+T*4,D=v.matrixWorldInverse;c.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let C=0,A=x;C!==T;++C,A+=4)u.copy(p[C]).applyMatrix4(D,c),u.normal.toArray(S,A),S[A+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function Q2(n){let e=new WeakMap;function t(u,c){return c===ih?u.mapping=Ao:c===rh&&(u.mapping=Co),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===ih||c===rh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new eR(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const xo=4,$v=[.125,.215,.35,.446,.526,.582],ys=20,yd=new lR,Kv=new Ut;let xd=null,Sd=0,Md=0,Ed=!1;const vs=(1+Math.sqrt(5))/2,ho=1/vs,Zv=[new ne(-vs,ho,0),new ne(vs,ho,0),new ne(-ho,0,vs),new ne(ho,0,vs),new ne(0,vs,-ho),new ne(0,vs,ho),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],J2=new ne;class Qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:c=J2}=l;xd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xd,Sd,Md),this._renderer.xr.enabled=Ed,e.scissorTest=!1,Tu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ao||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:Ha,format:bi,colorSpace:Ro,depthBuffer:!1},o=Jv(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jv(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eP(l)),this._blurMaterial=tP(l,e,t)}return o}_compileMaterial(e){const t=new zi(this._lodPlanes[0],e);this._renderer.compile(t,yd)}_sceneToCubeUV(e,t,r,o,l){const d=new di(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,x=p.toneMapping;p.getClearColor(Kv),p.toneMapping=Hr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(o),p.clearDepth(),p.setRenderTarget(null));const T=new vx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),S=new zi(new Xa,T);let y=!1;const D=e.background;D?D.isColor&&(T.color.copy(D),e.background=null,y=!0):(T.color.copy(Kv),y=!0);for(let C=0;C<6;C++){const A=C%3;A===0?(d.up.set(0,h[C],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[C],l.y,l.z)):A===1?(d.up.set(0,0,h[C]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[C],l.z)):(d.up.set(0,h[C],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[C]));const N=this._cubeSize;Tu(o,A*N,C>2?N:0,N,N),p.setRenderTarget(o),y&&p.render(S,d),p.render(e,d)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=x,p.autoClear=v,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ao||e.mapping===Co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=t_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new zi(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;Tu(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,yd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=Zv[(o-l-1)%Zv.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new zi(this._lodPlanes[o],h),v=h.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ys-1),T=l/M,S=isFinite(l)?1+Math.floor(m*T):ys;S>ys&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ys}`);const y=[];let D=0;for(let F=0;F<ys;++F){const k=F/T,P=Math.exp(-k*k/2);y.push(P),F===0?D+=P:F<S&&(D+=2*P)}for(let F=0;F<y.length;F++)y[F]=y[F]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:C}=this;v.dTheta.value=M,v.mipInt.value=C-r;const A=this._sizeLods[o],N=3*A*(o>C-xo?o-C+xo:0),I=4*(this._cubeSize-A);Tu(t,N,I,3*A,2*A),d.setRenderTarget(t),d.render(p,yd)}}function eP(n){const e=[],t=[],r=[];let o=n;const l=n-xo+1+$v.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-xo?d=$v[u-n+xo-1]:u===0&&(d=0),r.push(d);const h=1/(c-2),m=-h,p=1+h,v=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,M=6,T=3,S=2,y=1,D=new Float32Array(T*M*x),C=new Float32Array(S*M*x),A=new Float32Array(y*M*x);for(let I=0;I<x;I++){const F=I%3*2/3-1,k=I>2?0:-1,P=[F,k,0,F+2/3,k,0,F+2/3,k+1,0,F,k,0,F+2/3,k+1,0,F,k+1,0];D.set(P,T*M*I),C.set(v,S*M*I);const R=[I,I,I,I,I,I];A.set(R,y*M*I)}const N=new Yr;N.setAttribute("position",new Wi(D,T)),N.setAttribute("uv",new Wi(C,S)),N.setAttribute("faceIndex",new Wi(A,y)),e.push(N),o>xo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Jv(n,e,t){const r=new Rs(n,e,t);return r.texture.mapping=Xu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function tP(n,e,t){const r=new Float32Array(ys),o=new ne(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:bp(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function e_(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bp(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function t_(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function bp(){return`

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
	`}function nP(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,h=d===ih||d===rh,m=d===Ao||d===Co;if(h||m){let p=e.get(c);const v=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new Qv(n)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const x=c.image;return h&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new Qv(n)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",l),p.texture):null}}}return c}function o(c){let d=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function iP(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Fa("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function rP(n,e,t,r){const o={},l=new WeakMap;function u(p){const v=p.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(p,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(p){const v=p.attributes;for(const x in v)e.update(v[x],n.ARRAY_BUFFER)}function h(p){const v=[],x=p.index,M=p.attributes.position;let T=0;if(x!==null){const D=x.array;T=x.version;for(let C=0,A=D.length;C<A;C+=3){const N=D[C+0],I=D[C+1],F=D[C+2];v.push(N,I,I,F,F,N)}}else if(M!==void 0){const D=M.array;T=M.version;for(let C=0,A=D.length/3-1;C<A;C+=3){const N=C+0,I=C+1,F=C+2;v.push(N,I,I,F,F,N)}}else return;const S=new(hx(v)?yx:_x)(v,1);S.version=T;const y=l.get(p);y&&e.remove(y),l.set(p,S)}function m(p){const v=l.get(p);if(v){const x=p.index;x!==null&&v.version<x.version&&h(p)}else h(p);return l.get(p)}return{get:c,update:d,getWireframeAttribute:m}}function sP(n,e,t){let r;function o(v){r=v}let l,u;function c(v){l=v.type,u=v.bytesPerElement}function d(v,x){n.drawElements(r,x,l,v*u),t.update(x,r,1)}function h(v,x,M){M!==0&&(n.drawElementsInstanced(r,x,l,v*u,M),t.update(x,r,M))}function m(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,r,1)}function p(v,x,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/u,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,v,0,T,0,M);let y=0;for(let D=0;D<M;D++)y+=x[D]*T[D];t.update(y,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function oP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function aP(n,e,t){const r=new WeakMap,o=new rn;function l(u,c,d){const h=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=m!==void 0?m.length:0;let v=r.get(c);if(v===void 0||v.count!==p){let P=function(){F.dispose(),r.delete(c),c.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();const x=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let C=0;x===!0&&(C=1),M===!0&&(C=2),T===!0&&(C=3);let A=c.attributes.position.count*C,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const I=new Float32Array(A*N*4*p),F=new px(I,A,N,p);F.type=ar,F.needsUpdate=!0;const k=C*4;for(let R=0;R<p;R++){const H=S[R],K=y[R],ie=D[R],ce=A*N*4*R;for(let pe=0;pe<H.count;pe++){const Z=pe*k;x===!0&&(o.fromBufferAttribute(H,pe),I[ce+Z+0]=o.x,I[ce+Z+1]=o.y,I[ce+Z+2]=o.z,I[ce+Z+3]=0),M===!0&&(o.fromBufferAttribute(K,pe),I[ce+Z+4]=o.x,I[ce+Z+5]=o.y,I[ce+Z+6]=o.z,I[ce+Z+7]=0),T===!0&&(o.fromBufferAttribute(ie,pe),I[ce+Z+8]=o.x,I[ce+Z+9]=o.y,I[ce+Z+10]=o.z,I[ce+Z+11]=ie.itemSize===4?o.w:1)}}v={count:p,texture:F,size:new bt(A,N)},r.set(c,v),c.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let x=0;for(let T=0;T<h.length;T++)x+=h[T];const M=c.morphTargetsRelative?1:1-x;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function lP(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,p=e.get(d,m);if(o.get(p)!==h&&(e.update(p),o.set(p,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return p}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const Cx=new qn,n_=new Tx(1,1),Rx=new px,bx=new FC,Px=new Mx,i_=[],r_=[],s_=new Float32Array(16),o_=new Float32Array(9),a_=new Float32Array(4);function No(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=i_[o];if(l===void 0&&(l=new Float32Array(o),i_[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function $u(n,e){let t=r_[e];t===void 0&&(t=new Int32Array(e),r_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function uP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function fP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function dP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function hP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;a_.set(r),n.uniformMatrix2fv(this.addr,!1,a_),hn(t,r)}}function pP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;o_.set(r),n.uniformMatrix3fv(this.addr,!1,o_),hn(t,r)}}function mP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;s_.set(r),n.uniformMatrix4fv(this.addr,!1,s_),hn(t,r)}}function gP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function _P(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function yP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function xP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function MP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function EP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function TP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(n_.compareFunction=dx,l=n_):l=Cx,t.setTexture2D(e||l,o)}function wP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||bx,o)}function AP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Px,o)}function CP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Rx,o)}function RP(n){switch(n){case 5126:return uP;case 35664:return cP;case 35665:return fP;case 35666:return dP;case 35674:return hP;case 35675:return pP;case 35676:return mP;case 5124:case 35670:return gP;case 35667:case 35671:return vP;case 35668:case 35672:return _P;case 35669:case 35673:return yP;case 5125:return xP;case 36294:return SP;case 36295:return MP;case 36296:return EP;case 35678:case 36198:case 36298:case 36306:case 35682:return TP;case 35679:case 36299:case 36307:return wP;case 35680:case 36300:case 36308:case 36293:return AP;case 36289:case 36303:case 36311:case 36292:return CP}}function bP(n,e){n.uniform1fv(this.addr,e)}function PP(n,e){const t=No(e,this.size,2);n.uniform2fv(this.addr,t)}function DP(n,e){const t=No(e,this.size,3);n.uniform3fv(this.addr,t)}function LP(n,e){const t=No(e,this.size,4);n.uniform4fv(this.addr,t)}function IP(n,e){const t=No(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NP(n,e){const t=No(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function UP(n,e){const t=No(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FP(n,e){n.uniform1iv(this.addr,e)}function OP(n,e){n.uniform2iv(this.addr,e)}function kP(n,e){n.uniform3iv(this.addr,e)}function BP(n,e){n.uniform4iv(this.addr,e)}function VP(n,e){n.uniform1uiv(this.addr,e)}function zP(n,e){n.uniform2uiv(this.addr,e)}function HP(n,e){n.uniform3uiv(this.addr,e)}function GP(n,e){n.uniform4uiv(this.addr,e)}function WP(n,e,t){const r=this.cache,o=e.length,l=$u(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Cx,l[u])}function jP(n,e,t){const r=this.cache,o=e.length,l=$u(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||bx,l[u])}function XP(n,e,t){const r=this.cache,o=e.length,l=$u(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Px,l[u])}function YP(n,e,t){const r=this.cache,o=e.length,l=$u(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Rx,l[u])}function qP(n){switch(n){case 5126:return bP;case 35664:return PP;case 35665:return DP;case 35666:return LP;case 35674:return IP;case 35675:return NP;case 35676:return UP;case 5124:case 35670:return FP;case 35667:case 35671:return OP;case 35668:case 35672:return kP;case 35669:case 35673:return BP;case 5125:return VP;case 36294:return zP;case 36295:return HP;case 36296:return GP;case 35678:case 36198:case 36298:case 36306:case 35682:return WP;case 35679:case 36299:case 36307:return jP;case 35680:case 36300:case 36308:case 36293:return XP;case 36289:case 36303:case 36311:case 36292:return YP}}class $P{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=RP(t.type)}}class KP{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qP(t.type)}}class ZP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function l_(n,e){n.seq.push(e),n.map[e.id]=e}function QP(n,e,t){const r=n.name,o=r.length;for(Td.lastIndex=0;;){const l=Td.exec(r),u=Td.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){l_(t,h===void 0?new $P(c,n,e):new KP(c,n,e));break}else{let p=t.map[c];p===void 0&&(p=new ZP(c),l_(t,p)),t=p}}}class Nu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);QP(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function u_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const JP=37297;let e3=0;function t3(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const c_=new gt;function n3(n){Rt._getMatrix(c_,Rt.workingColorSpace,n);const e=`mat3( ${c_.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(n)){case Vu:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function f_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+t3(n.getShaderSource(e),c)}else return l}function i3(n,e){const t=n3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r3(n,e){let t;switch(e){case uC:t="Linear";break;case cC:t="Reinhard";break;case fC:t="Cineon";break;case dC:t="ACESFilmic";break;case pC:t="AgX";break;case mC:t="Neutral";break;case hC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wu=new ne;function s3(){Rt.getLuminanceCoefficients(wu);const n=wu.x.toFixed(4),e=wu.y.toFixed(4),t=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function a3(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function l3(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function xa(n){return n!==""}function d_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(n){return n.replace(u3,f3)}const c3=new Map;function f3(n,e){let t=vt[e];if(t===void 0){const r=c3.get(e);if(r!==void 0)t=vt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Fh(t)}const d3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p_(n){return n.replace(d3,h3)}function h3(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function m_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function p3(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===tx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===HA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function m3(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ao:case Co:e="ENVMAP_TYPE_CUBE";break;case Xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g3(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Co:e="ENVMAP_MODE_REFRACTION";break}return e}function v3(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nx:e="ENVMAP_BLENDING_MULTIPLY";break;case aC:e="ENVMAP_BLENDING_MIX";break;case lC:e="ENVMAP_BLENDING_ADD";break}return e}function _3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function y3(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=p3(t),h=m3(t),m=g3(t),p=v3(t),v=_3(t),x=o3(t),M=a3(l),T=o.createProgram();let S,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(xa).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(xa).join(`
`),y.length>0&&(y+=`
`)):(S=[m_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),y=[m_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hr?"#define TONE_MAPPING":"",t.toneMapping!==Hr?vt.tonemapping_pars_fragment:"",t.toneMapping!==Hr?r3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,i3("linearToOutputTexel",t.outputColorSpace),s3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),u=Fh(u),u=d_(u,t),u=h_(u,t),c=Fh(c),c=d_(c,t),c=h_(c,t),u=p_(u),c=p_(c),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Pv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const C=D+S+u,A=D+y+c,N=u_(o,o.VERTEX_SHADER,C),I=u_(o,o.FRAGMENT_SHADER,A);o.attachShader(T,N),o.attachShader(T,I),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(H){if(n.debug.checkShaderErrors){const K=o.getProgramInfoLog(T)||"",ie=o.getShaderInfoLog(N)||"",ce=o.getShaderInfoLog(I)||"",pe=K.trim(),Z=ie.trim(),oe=ce.trim();let V=!0,le=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,N,I);else{const te=f_(o,N,"vertex"),O=f_(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+pe+`
`+te+`
`+O)}else pe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pe):(Z===""||oe==="")&&(le=!1);le&&(H.diagnostics={runnable:V,programLog:pe,vertexShader:{log:Z,prefix:S},fragmentShader:{log:oe,prefix:y}})}o.deleteShader(N),o.deleteShader(I),k=new Nu(o,T),P=l3(o,T)}let k;this.getUniforms=function(){return k===void 0&&F(this),k};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(T,JP)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e3++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=I,this}let x3=0;class S3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new M3(e),t.set(e,r)),r}}class M3{constructor(e){this.id=x3++,this.code=e,this.usedTimes=0}}function E3(n,e,t,r,o,l,u){const c=new mx,d=new S3,h=new Set,m=[],p=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,R,H,K,ie){const ce=K.fog,pe=ie.geometry,Z=P.isMeshStandardMaterial?K.environment:null,oe=(P.isMeshStandardMaterial?t:e).get(P.envMap||Z),V=oe&&oe.mapping===Xu?oe.image.height:null,le=M[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const te=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,O=te!==void 0?te.length:0;let se=0;pe.morphAttributes.position!==void 0&&(se=1),pe.morphAttributes.normal!==void 0&&(se=2),pe.morphAttributes.color!==void 0&&(se=3);let ye,be,Re,Q;if(le){const yt=Oi[le];ye=yt.vertexShader,be=yt.fragmentShader}else ye=P.vertexShader,be=P.fragmentShader,d.update(P),Re=d.getVertexShaderID(P),Q=d.getFragmentShaderID(P);const fe=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ne=ie.isInstancedMesh===!0,ke=ie.isBatchedMesh===!0,pt=!!P.map,zt=!!P.matcap,B=!!oe,At=!!P.aoMap,ft=!!P.lightMap,tt=!!P.bumpMap,Ge=!!P.normalMap,Pt=!!P.displacementMap,Be=!!P.emissiveMap,ut=!!P.metalnessMap,kt=!!P.roughnessMap,_t=P.anisotropy>0,L=P.clearcoat>0,w=P.dispersion>0,$=P.iridescence>0,he=P.sheen>0,ge=P.transmission>0,de=_t&&!!P.anisotropyMap,Ke=L&&!!P.clearcoatMap,Me=L&&!!P.clearcoatNormalMap,We=L&&!!P.clearcoatRoughnessMap,je=$&&!!P.iridescenceMap,Te=$&&!!P.iridescenceThicknessMap,Ue=he&&!!P.sheenColorMap,nt=he&&!!P.sheenRoughnessMap,Ye=!!P.specularMap,Ie=!!P.specularColorMap,lt=!!P.specularIntensityMap,G=ge&&!!P.transmissionMap,Ee=ge&&!!P.thicknessMap,Ce=!!P.gradientMap,Ve=!!P.alphaMap,xe=P.alphaTest>0,ee=!!P.alphaHash,De=!!P.extensions;let Ze=Hr;P.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const mt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:ye,fragmentShader:be,defines:P.defines,customVertexShaderID:Re,customFragmentShaderID:Q,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:ke,batchingColor:ke&&ie._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&ie.instanceColor!==null,instancingMorph:Ne&&ie.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ro,alphaToCoverage:!!P.alphaToCoverage,map:pt,matcap:zt,envMap:B,envMapMode:B&&oe.mapping,envMapCubeUVHeight:V,aoMap:At,lightMap:ft,bumpMap:tt,normalMap:Ge,displacementMap:v&&Pt,emissiveMap:Be,normalMapObjectSpace:Ge&&P.normalMapType===xC,normalMapTangentSpace:Ge&&P.normalMapType===yC,metalnessMap:ut,roughnessMap:kt,anisotropy:_t,anisotropyMap:de,clearcoat:L,clearcoatMap:Ke,clearcoatNormalMap:Me,clearcoatRoughnessMap:We,dispersion:w,iridescence:$,iridescenceMap:je,iridescenceThicknessMap:Te,sheen:he,sheenColorMap:Ue,sheenRoughnessMap:nt,specularMap:Ye,specularColorMap:Ie,specularIntensityMap:lt,transmission:ge,transmissionMap:G,thicknessMap:Ee,gradientMap:Ce,opaque:P.transparent===!1&&P.blending===As&&P.alphaToCoverage===!1,alphaMap:Ve,alphaTest:xe,alphaHash:ee,combine:P.combine,mapUv:pt&&T(P.map.channel),aoMapUv:At&&T(P.aoMap.channel),lightMapUv:ft&&T(P.lightMap.channel),bumpMapUv:tt&&T(P.bumpMap.channel),normalMapUv:Ge&&T(P.normalMap.channel),displacementMapUv:Pt&&T(P.displacementMap.channel),emissiveMapUv:Be&&T(P.emissiveMap.channel),metalnessMapUv:ut&&T(P.metalnessMap.channel),roughnessMapUv:kt&&T(P.roughnessMap.channel),anisotropyMapUv:de&&T(P.anisotropyMap.channel),clearcoatMapUv:Ke&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:Me&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:nt&&T(P.sheenRoughnessMap.channel),specularMapUv:Ye&&T(P.specularMap.channel),specularColorMapUv:Ie&&T(P.specularColorMap.channel),specularIntensityMapUv:lt&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:Ee&&T(P.thicknessMap.channel),alphaMapUv:Ve&&T(P.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(Ge||_t),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!pe.attributes.uv&&(pt||Ve),fog:!!ce,useFog:P.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:me,skinning:ie.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:pt&&P.map.isVideoTexture===!0&&Rt.getTransfer(P.map.colorSpace)===Ot,decodeVideoTextureEmissive:Be&&P.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(P.emissiveMap.colorSpace)===Ot,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===ki,flipSided:P.side===Yn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:De&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&P.extensions.multiDraw===!0||ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return mt.vertexUv1s=h.has(1),mt.vertexUv2s=h.has(2),mt.vertexUv3s=h.has(3),h.clear(),mt}function y(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)R.push(H),R.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(D(R,P),C(R,P),R.push(n.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function D(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function C(P,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),R.gradientMap&&c.enable(22),P.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),P.push(c.mask)}function A(P){const R=M[P.type];let H;if(R){const K=Oi[R];H=KC.clone(K.uniforms)}else H=P.uniforms;return H}function N(P,R){let H;for(let K=0,ie=m.length;K<ie;K++){const ce=m[K];if(ce.cacheKey===R){H=ce,++H.usedTimes;break}}return H===void 0&&(H=new y3(n,R,P,l),m.push(H)),H}function I(P){if(--P.usedTimes===0){const R=m.indexOf(P);m[R]=m[m.length-1],m.pop(),P.destroy()}}function F(P){d.remove(P)}function k(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:A,acquireProgram:N,releaseProgram:I,releaseShaderCache:F,programs:m,dispose:k}}function T3(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function w3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function g_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function v_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(p,v,x,M,T,S){let y=n[e];return y===void 0?(y={id:p.id,object:p,geometry:v,material:x,groupOrder:M,renderOrder:p.renderOrder,z:T,group:S},n[e]=y):(y.id=p.id,y.object=p,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=p.renderOrder,y.z=T,y.group=S),e++,y}function c(p,v,x,M,T,S){const y=u(p,v,x,M,T,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):t.push(y)}function d(p,v,x,M,T,S){const y=u(p,v,x,M,T,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function h(p,v){t.length>1&&t.sort(p||w3),r.length>1&&r.sort(v||g_),o.length>1&&o.sort(v||g_)}function m(){for(let p=e,v=n.length;p<v;p++){const x=n[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:d,finish:m,sort:h}}function A3(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new v_,n.set(r,[u])):o>=l.length?(u=new v_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function C3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Ut};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}function R3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let b3=0;function P3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function D3(n){const e=new C3,t=R3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ne);const o=new ne,l=new fn,u=new fn;function c(h){let m=0,p=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let x=0,M=0,T=0,S=0,y=0,D=0,C=0,A=0,N=0,I=0,F=0;h.sort(P3);for(let P=0,R=h.length;P<R;P++){const H=h[P],K=H.color,ie=H.intensity,ce=H.distance,pe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=K.r*ie,p+=K.g*ie,v+=K.b*ie;else if(H.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(H.sh.coefficients[Z],ie);F++}else if(H.isDirectionalLight){const Z=e.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const oe=H.shadow,V=t.get(H);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,r.directionalShadow[x]=V,r.directionalShadowMap[x]=pe,r.directionalShadowMatrix[x]=H.shadow.matrix,D++}r.directional[x]=Z,x++}else if(H.isSpotLight){const Z=e.get(H);Z.position.setFromMatrixPosition(H.matrixWorld),Z.color.copy(K).multiplyScalar(ie),Z.distance=ce,Z.coneCos=Math.cos(H.angle),Z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Z.decay=H.decay,r.spot[T]=Z;const oe=H.shadow;if(H.map&&(r.spotLightMap[N]=H.map,N++,oe.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[T]=oe.matrix,H.castShadow){const V=t.get(H);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,r.spotShadow[T]=V,r.spotShadowMap[T]=pe,A++}T++}else if(H.isRectAreaLight){const Z=e.get(H);Z.color.copy(K).multiplyScalar(ie),Z.halfWidth.set(H.width*.5,0,0),Z.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=Z,S++}else if(H.isPointLight){const Z=e.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity),Z.distance=H.distance,Z.decay=H.decay,H.castShadow){const oe=H.shadow,V=t.get(H);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,V.shadowCameraNear=oe.camera.near,V.shadowCameraFar=oe.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=pe,r.pointShadowMatrix[M]=H.shadow.matrix,C++}r.point[M]=Z,M++}else if(H.isHemisphereLight){const Z=e.get(H);Z.skyColor.copy(H.color).multiplyScalar(ie),Z.groundColor.copy(H.groundColor).multiplyScalar(ie),r.hemi[y]=Z,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=p,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==x||k.pointLength!==M||k.spotLength!==T||k.rectAreaLength!==S||k.hemiLength!==y||k.numDirectionalShadows!==D||k.numPointShadows!==C||k.numSpotShadows!==A||k.numSpotMaps!==N||k.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=T,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=A+N-I,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,k.directionalLength=x,k.pointLength=M,k.spotLength=T,k.rectAreaLength=S,k.hemiLength=y,k.numDirectionalShadows=D,k.numPointShadows=C,k.numSpotShadows=A,k.numSpotMaps=N,k.numLightProbes=F,r.version=b3++)}function d(h,m){let p=0,v=0,x=0,M=0,T=0;const S=m.matrixWorldInverse;for(let y=0,D=h.length;y<D;y++){const C=h[y];if(C.isDirectionalLight){const A=r.directional[p];A.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),p++}else if(C.isSpotLight){const A=r.spot[x];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),x++}else if(C.isRectAreaLight){const A=r.rectArea[M];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),u.identity(),l.copy(C.matrixWorld),l.premultiply(S),u.extractRotation(l),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),M++}else if(C.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const A=r.hemi[T];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(S),T++}}}return{setup:c,setupView:d,state:r}}function __(n){const e=new D3(n),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function c(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:l,pushShadow:u}}function L3(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new __(n),e.set(o,[c])):l>=u.length?(c=new __(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const I3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N3=`uniform sampler2D shadow_pass;
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
}`;function U3(n,e,t){let r=new Ex;const o=new bt,l=new bt,u=new rn,c=new oR({depthPacking:_C}),d=new aR,h={},m=t.maxTextureSize,p={[jr]:Yn,[Yn]:jr,[ki]:ki},v=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:I3,fragmentShader:N3}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new Yr;M.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new zi(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tx;let y=this.type;this.render=function(I,F,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const P=n.getRenderTarget(),R=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),K=n.state;K.setBlending(zr),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ie=y!==or&&this.type===or,ce=y===or&&this.type!==or;for(let pe=0,Z=I.length;pe<Z;pe++){const oe=I[pe],V=oe.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const le=V.getFrameExtents();if(o.multiply(le),l.copy(V.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/le.x),o.x=l.x*le.x,V.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/le.y),o.y=l.y*le.y,V.mapSize.y=l.y)),V.map===null||ie===!0||ce===!0){const O=this.type!==or?{minFilter:Pi,magFilter:Pi}:{};V.map!==null&&V.map.dispose(),V.map=new Rs(o.x,o.y,O),V.map.texture.name=oe.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const te=V.getViewportCount();for(let O=0;O<te;O++){const se=V.getViewport(O);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),K.viewport(u),V.updateMatrices(oe,O),r=V.getFrustum(),A(F,k,V.camera,oe,this.type)}V.isPointLightShadow!==!0&&this.type===or&&D(V,k),V.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(P,R,H)};function D(I,F){const k=e.update(T);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Rs(o.x,o.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(F,null,k,v,T,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(F,null,k,x,T,null)}function C(I,F,k,P){let R=null;const H=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)R=H;else if(R=k.isPointLight===!0?d:c,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=R.uuid,ie=F.uuid;let ce=h[K];ce===void 0&&(ce={},h[K]=ce);let pe=ce[ie];pe===void 0&&(pe=R.clone(),ce[ie]=pe,F.addEventListener("dispose",N)),R=pe}if(R.visible=F.visible,R.wireframe=F.wireframe,P===or?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:p[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const K=n.properties.get(R);K.light=k}return R}function A(I,F,k,P,R){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===or)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const ie=e.update(I),ce=I.material;if(Array.isArray(ce)){const pe=ie.groups;for(let Z=0,oe=pe.length;Z<oe;Z++){const V=pe[Z],le=ce[V.materialIndex];if(le&&le.visible){const te=C(I,le,P,R);I.onBeforeShadow(n,I,F,k,ie,te,V),n.renderBufferDirect(k,null,ie,te,I,V),I.onAfterShadow(n,I,F,k,ie,te,V)}}}else if(ce.visible){const pe=C(I,ce,P,R);I.onBeforeShadow(n,I,F,k,ie,pe,null),n.renderBufferDirect(k,null,ie,pe,I,null),I.onAfterShadow(n,I,F,k,ie,pe,null)}}const K=I.children;for(let ie=0,ce=K.length;ie<ce;ie++)A(K[ie],F,k,P,R)}function N(I){I.target.removeEventListener("dispose",N);for(const k in h){const P=h[k],R=I.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const F3={[Kd]:Zd,[Qd]:th,[Jd]:nh,[wo]:eh,[Zd]:Kd,[th]:Qd,[nh]:Jd,[eh]:wo};function O3(n,e){function t(){let G=!1;const Ee=new rn;let Ce=null;const Ve=new rn(0,0,0,0);return{setMask:function(xe){Ce!==xe&&!G&&(n.colorMask(xe,xe,xe,xe),Ce=xe)},setLocked:function(xe){G=xe},setClear:function(xe,ee,De,Ze,mt){mt===!0&&(xe*=Ze,ee*=Ze,De*=Ze),Ee.set(xe,ee,De,Ze),Ve.equals(Ee)===!1&&(n.clearColor(xe,ee,De,Ze),Ve.copy(Ee))},reset:function(){G=!1,Ce=null,Ve.set(-1,0,0,0)}}}function r(){let G=!1,Ee=!1,Ce=null,Ve=null,xe=null;return{setReversed:function(ee){if(Ee!==ee){const De=e.get("EXT_clip_control");ee?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Ee=ee;const Ze=xe;xe=null,this.setClear(Ze)}},getReversed:function(){return Ee},setTest:function(ee){ee?fe(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(ee){Ce!==ee&&!G&&(n.depthMask(ee),Ce=ee)},setFunc:function(ee){if(Ee&&(ee=F3[ee]),Ve!==ee){switch(ee){case Kd:n.depthFunc(n.NEVER);break;case Zd:n.depthFunc(n.ALWAYS);break;case Qd:n.depthFunc(n.LESS);break;case wo:n.depthFunc(n.LEQUAL);break;case Jd:n.depthFunc(n.EQUAL);break;case eh:n.depthFunc(n.GEQUAL);break;case th:n.depthFunc(n.GREATER);break;case nh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ve=ee}},setLocked:function(ee){G=ee},setClear:function(ee){xe!==ee&&(Ee&&(ee=1-ee),n.clearDepth(ee),xe=ee)},reset:function(){G=!1,Ce=null,Ve=null,xe=null,Ee=!1}}}function o(){let G=!1,Ee=null,Ce=null,Ve=null,xe=null,ee=null,De=null,Ze=null,mt=null;return{setTest:function(yt){G||(yt?fe(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(yt){Ee!==yt&&!G&&(n.stencilMask(yt),Ee=yt)},setFunc:function(yt,Dt,It){(Ce!==yt||Ve!==Dt||xe!==It)&&(n.stencilFunc(yt,Dt,It),Ce=yt,Ve=Dt,xe=It)},setOp:function(yt,Dt,It){(ee!==yt||De!==Dt||Ze!==It)&&(n.stencilOp(yt,Dt,It),ee=yt,De=Dt,Ze=It)},setLocked:function(yt){G=yt},setClear:function(yt){mt!==yt&&(n.clearStencil(yt),mt=yt)},reset:function(){G=!1,Ee=null,Ce=null,Ve=null,xe=null,ee=null,De=null,Ze=null,mt=null}}}const l=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let m={},p={},v=new WeakMap,x=[],M=null,T=!1,S=null,y=null,D=null,C=null,A=null,N=null,I=null,F=new Ut(0,0,0),k=0,P=!1,R=null,H=null,K=null,ie=null,ce=null;const pe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,oe=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=oe>=1):V.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=oe>=2);let le=null,te={};const O=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),ye=new rn().fromArray(O),be=new rn().fromArray(se);function Re(G,Ee,Ce,Ve){const xe=new Uint8Array(4),ee=n.createTexture();n.bindTexture(G,ee),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<Ce;De++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Ve,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(Ee+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ee}const Q={};Q[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),c.setClear(0),fe(n.DEPTH_TEST),u.setFunc(wo),tt(!1),Ge(Tv),fe(n.CULL_FACE),At(zr);function fe(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function me(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function Ne(G,Ee){return p[G]!==Ee?(n.bindFramebuffer(G,Ee),p[G]=Ee,G===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Ee),G===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ke(G,Ee){let Ce=x,Ve=!1;if(G){Ce=v.get(Ee),Ce===void 0&&(Ce=[],v.set(Ee,Ce));const xe=G.textures;if(Ce.length!==xe.length||Ce[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,De=xe.length;ee<De;ee++)Ce[ee]=n.COLOR_ATTACHMENT0+ee;Ce.length=xe.length,Ve=!0}}else Ce[0]!==n.BACK&&(Ce[0]=n.BACK,Ve=!0);Ve&&n.drawBuffers(Ce)}function pt(G){return M!==G?(n.useProgram(G),M=G,!0):!1}const zt={[_s]:n.FUNC_ADD,[WA]:n.FUNC_SUBTRACT,[jA]:n.FUNC_REVERSE_SUBTRACT};zt[XA]=n.MIN,zt[YA]=n.MAX;const B={[qA]:n.ZERO,[$A]:n.ONE,[KA]:n.SRC_COLOR,[qd]:n.SRC_ALPHA,[nC]:n.SRC_ALPHA_SATURATE,[eC]:n.DST_COLOR,[QA]:n.DST_ALPHA,[ZA]:n.ONE_MINUS_SRC_COLOR,[$d]:n.ONE_MINUS_SRC_ALPHA,[tC]:n.ONE_MINUS_DST_COLOR,[JA]:n.ONE_MINUS_DST_ALPHA,[iC]:n.CONSTANT_COLOR,[rC]:n.ONE_MINUS_CONSTANT_COLOR,[sC]:n.CONSTANT_ALPHA,[oC]:n.ONE_MINUS_CONSTANT_ALPHA};function At(G,Ee,Ce,Ve,xe,ee,De,Ze,mt,yt){if(G===zr){T===!0&&(me(n.BLEND),T=!1);return}if(T===!1&&(fe(n.BLEND),T=!0),G!==GA){if(G!==S||yt!==P){if((y!==_s||A!==_s)&&(n.blendEquation(n.FUNC_ADD),y=_s,A=_s),yt)switch(G){case As:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wv:n.blendFunc(n.ONE,n.ONE);break;case Av:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case As:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wv:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Av:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,C=null,N=null,I=null,F.set(0,0,0),k=0,S=G,P=yt}return}xe=xe||Ee,ee=ee||Ce,De=De||Ve,(Ee!==y||xe!==A)&&(n.blendEquationSeparate(zt[Ee],zt[xe]),y=Ee,A=xe),(Ce!==D||Ve!==C||ee!==N||De!==I)&&(n.blendFuncSeparate(B[Ce],B[Ve],B[ee],B[De]),D=Ce,C=Ve,N=ee,I=De),(Ze.equals(F)===!1||mt!==k)&&(n.blendColor(Ze.r,Ze.g,Ze.b,mt),F.copy(Ze),k=mt),S=G,P=!1}function ft(G,Ee){G.side===ki?me(n.CULL_FACE):fe(n.CULL_FACE);let Ce=G.side===Yn;Ee&&(Ce=!Ce),tt(Ce),G.blending===As&&G.transparent===!1?At(zr):At(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ve=G.stencilWrite;c.setTest(Ve),Ve&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(G){R!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),R=G)}function Ge(G){G!==VA?(fe(n.CULL_FACE),G!==H&&(G===Tv?n.cullFace(n.BACK):G===zA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),H=G}function Pt(G){G!==K&&(Z&&n.lineWidth(G),K=G)}function Be(G,Ee,Ce){G?(fe(n.POLYGON_OFFSET_FILL),(ie!==Ee||ce!==Ce)&&(n.polygonOffset(Ee,Ce),ie=Ee,ce=Ce)):me(n.POLYGON_OFFSET_FILL)}function ut(G){G?fe(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function kt(G){G===void 0&&(G=n.TEXTURE0+pe-1),le!==G&&(n.activeTexture(G),le=G)}function _t(G,Ee,Ce){Ce===void 0&&(le===null?Ce=n.TEXTURE0+pe-1:Ce=le);let Ve=te[Ce];Ve===void 0&&(Ve={type:void 0,texture:void 0},te[Ce]=Ve),(Ve.type!==G||Ve.texture!==Ee)&&(le!==Ce&&(n.activeTexture(Ce),le=Ce),n.bindTexture(G,Ee||Q[G]),Ve.type=G,Ve.texture=Ee)}function L(){const G=te[le];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(G){ye.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ye.copy(G))}function nt(G){be.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),be.copy(G))}function Ye(G,Ee){let Ce=h.get(Ee);Ce===void 0&&(Ce=new WeakMap,h.set(Ee,Ce));let Ve=Ce.get(G);Ve===void 0&&(Ve=n.getUniformBlockIndex(Ee,G.name),Ce.set(G,Ve))}function Ie(G,Ee){const Ve=h.get(Ee).get(G);d.get(Ee)!==Ve&&(n.uniformBlockBinding(Ee,Ve,G.__bindingPointIndex),d.set(Ee,Ve))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},le=null,te={},p={},v=new WeakMap,x=[],M=null,T=!1,S=null,y=null,D=null,C=null,A=null,N=null,I=null,F=new Ut(0,0,0),k=0,P=!1,R=null,H=null,K=null,ie=null,ce=null,ye.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),c.reset()}return{buffers:{color:l,depth:u,stencil:c},enable:fe,disable:me,bindFramebuffer:Ne,drawBuffers:ke,useProgram:pt,setBlending:At,setMaterial:ft,setFlipSided:tt,setCullFace:Ge,setLineWidth:Pt,setPolygonOffset:Be,setScissorTest:ut,activeTexture:kt,bindTexture:_t,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:$,texImage2D:je,texImage3D:Te,updateUBOMapping:Ye,uniformBlockBinding:Ie,texStorage2D:Me,texStorage3D:We,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:de,compressedTexSubImage3D:Ke,scissor:Ue,viewport:nt,reset:lt}}function k3(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,m=new WeakMap;let p;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return x?new OffscreenCanvas(L,w):Hu("canvas")}function T(L,w,$){let he=1;const ge=_t(L);if((ge.width>$||ge.height>$)&&(he=$/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(he*ge.width),Ke=Math.floor(he*ge.height);p===void 0&&(p=M(de,Ke));const Me=w?M(de,Ke):p;return Me.width=de,Me.height=Ke,Me.getContext("2d").drawImage(L,0,0,de,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+de+"x"+Ke+")."),Me}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(L,w,$,he,ge=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=w;if(w===n.RED&&($===n.FLOAT&&(de=n.R32F),$===n.HALF_FLOAT&&(de=n.R16F),$===n.UNSIGNED_BYTE&&(de=n.R8)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.R8UI),$===n.UNSIGNED_SHORT&&(de=n.R16UI),$===n.UNSIGNED_INT&&(de=n.R32UI),$===n.BYTE&&(de=n.R8I),$===n.SHORT&&(de=n.R16I),$===n.INT&&(de=n.R32I)),w===n.RG&&($===n.FLOAT&&(de=n.RG32F),$===n.HALF_FLOAT&&(de=n.RG16F),$===n.UNSIGNED_BYTE&&(de=n.RG8)),w===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.RG8UI),$===n.UNSIGNED_SHORT&&(de=n.RG16UI),$===n.UNSIGNED_INT&&(de=n.RG32UI),$===n.BYTE&&(de=n.RG8I),$===n.SHORT&&(de=n.RG16I),$===n.INT&&(de=n.RG32I)),w===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.RGB8UI),$===n.UNSIGNED_SHORT&&(de=n.RGB16UI),$===n.UNSIGNED_INT&&(de=n.RGB32UI),$===n.BYTE&&(de=n.RGB8I),$===n.SHORT&&(de=n.RGB16I),$===n.INT&&(de=n.RGB32I)),w===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),$===n.UNSIGNED_INT&&(de=n.RGBA32UI),$===n.BYTE&&(de=n.RGBA8I),$===n.SHORT&&(de=n.RGBA16I),$===n.INT&&(de=n.RGBA32I)),w===n.RGB&&($===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),w===n.RGBA){const Ke=ge?Vu:Rt.getTransfer(he);$===n.FLOAT&&(de=n.RGBA32F),$===n.HALF_FLOAT&&(de=n.RGBA16F),$===n.UNSIGNED_BYTE&&(de=Ke===Ot?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(L,w){let $;return L?w===null||w===Cs||w===Ia?$=n.DEPTH24_STENCIL8:w===ar?$=n.DEPTH32F_STENCIL8:w===La&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Cs||w===Ia?$=n.DEPTH_COMPONENT24:w===ar?$=n.DEPTH_COMPONENT32F:w===La&&($=n.DEPTH_COMPONENT16),$}function N(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pi&&L.minFilter!==Bi?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function I(L){const w=L.target;w.removeEventListener("dispose",I),k(w),w.isVideoTexture&&m.delete(w)}function F(L){const w=L.target;w.removeEventListener("dispose",F),R(w)}function k(L){const w=r.get(L);if(w.__webglInit===void 0)return;const $=L.source,he=v.get($);if(he){const ge=he[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(L),Object.keys(he).length===0&&v.delete($)}r.remove(L)}function P(L){const w=r.get(L);n.deleteTexture(w.__webglTexture);const $=L.source,he=v.get($);delete he[w.__cacheKey],u.memory.textures--}function R(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let ge=0;ge<w.__webglFramebuffer[he].length;ge++)n.deleteFramebuffer(w.__webglFramebuffer[he][ge]);else n.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)n.deleteFramebuffer(w.__webglFramebuffer[he]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=L.textures;for(let he=0,ge=$.length;he<ge;he++){const de=r.get($[he]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove($[he])}r.remove(L)}let H=0;function K(){H=0}function ie(){const L=H;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),H+=1,L}function ce(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function pe(L,w){const $=r.get(L);if(L.isVideoTexture&&ut(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q($,L,w);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function Z(L,w){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){Q($,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function oe(L,w){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){Q($,L,w);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function V(L,w){const $=r.get(L);if(L.version>0&&$.__version!==L.version){fe($,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}const le={[sh]:n.REPEAT,[Ms]:n.CLAMP_TO_EDGE,[oh]:n.MIRRORED_REPEAT},te={[Pi]:n.NEAREST,[gC]:n.NEAREST_MIPMAP_NEAREST,[ru]:n.NEAREST_MIPMAP_LINEAR,[Bi]:n.LINEAR,[qf]:n.LINEAR_MIPMAP_NEAREST,[Es]:n.LINEAR_MIPMAP_LINEAR},O={[SC]:n.NEVER,[CC]:n.ALWAYS,[MC]:n.LESS,[dx]:n.LEQUAL,[EC]:n.EQUAL,[AC]:n.GEQUAL,[TC]:n.GREATER,[wC]:n.NOTEQUAL};function se(L,w){if(w.type===ar&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bi||w.magFilter===qf||w.magFilter===ru||w.magFilter===Es||w.minFilter===Bi||w.minFilter===qf||w.minFilter===ru||w.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,le[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,le[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,le[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,te[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,te[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Pi||w.minFilter!==ru&&w.minFilter!==Es||w.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function ye(L,w){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",I));const he=w.source;let ge=v.get(he);ge===void 0&&(ge={},v.set(he,ge));const de=ce(w);if(de!==L.__cacheKey){ge[de]===void 0&&(ge[de]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,$=!0),ge[de].usedTimes++;const Ke=ge[L.__cacheKey];Ke!==void 0&&(ge[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&P(w)),L.__cacheKey=de,L.__webglTexture=ge[de].texture}return $}function be(L,w,$){return Math.floor(Math.floor(L/$)/w)}function Re(L,w,$,he){const de=L.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,$,he,w.data);else{de.sort((Te,Ue)=>Te.start-Ue.start);let Ke=0;for(let Te=1;Te<de.length;Te++){const Ue=de[Ke],nt=de[Te],Ye=Ue.start+Ue.count,Ie=be(nt.start,w.width,4),lt=be(Ue.start,w.width,4);nt.start<=Ye+1&&Ie===lt&&be(nt.start+nt.count-1,w.width,4)===Ie?Ue.count=Math.max(Ue.count,nt.start+nt.count-Ue.start):(++Ke,de[Ke]=nt)}de.length=Ke+1;const Me=n.getParameter(n.UNPACK_ROW_LENGTH),We=n.getParameter(n.UNPACK_SKIP_PIXELS),je=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Te=0,Ue=de.length;Te<Ue;Te++){const nt=de[Te],Ye=Math.floor(nt.start/4),Ie=Math.ceil(nt.count/4),lt=Ye%w.width,G=Math.floor(Ye/w.width),Ee=Ie,Ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,lt,G,Ee,Ce,$,he,w.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,je)}}function Q(L,w,$){let he=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=n.TEXTURE_3D);const ge=ye(L,w),de=w.source;t.bindTexture(he,L.__webglTexture,n.TEXTURE0+$);const Ke=r.get(de);if(de.version!==Ke.__version||ge===!0){t.activeTexture(n.TEXTURE0+$);const Me=Rt.getPrimaries(Rt.workingColorSpace),We=w.colorSpace===Vr?null:Rt.getPrimaries(w.colorSpace),je=w.colorSpace===Vr||Me===We?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Te=T(w.image,!1,o.maxTextureSize);Te=kt(w,Te);const Ue=l.convert(w.format,w.colorSpace),nt=l.convert(w.type);let Ye=C(w.internalFormat,Ue,nt,w.colorSpace,w.isVideoTexture);se(he,w);let Ie;const lt=w.mipmaps,G=w.isVideoTexture!==!0,Ee=Ke.__version===void 0||ge===!0,Ce=de.dataReady,Ve=N(w,Te);if(w.isDepthTexture)Ye=A(w.format===Ua,w.type),Ee&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ye,Te.width,Te.height):t.texImage2D(n.TEXTURE_2D,0,Ye,Te.width,Te.height,0,Ue,nt,null));else if(w.isDataTexture)if(lt.length>0){G&&Ee&&t.texStorage2D(n.TEXTURE_2D,Ve,Ye,lt[0].width,lt[0].height);for(let xe=0,ee=lt.length;xe<ee;xe++)Ie=lt[xe],G?Ce&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Ue,nt,Ie.data):t.texImage2D(n.TEXTURE_2D,xe,Ye,Ie.width,Ie.height,0,Ue,nt,Ie.data);w.generateMipmaps=!1}else G?(Ee&&t.texStorage2D(n.TEXTURE_2D,Ve,Ye,Te.width,Te.height),Ce&&Re(w,Te,Ue,nt)):t.texImage2D(n.TEXTURE_2D,0,Ye,Te.width,Te.height,0,Ue,nt,Te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,Ye,lt[0].width,lt[0].height,Te.depth);for(let xe=0,ee=lt.length;xe<ee;xe++)if(Ie=lt[xe],w.format!==bi)if(Ue!==null)if(G){if(Ce)if(w.layerUpdates.size>0){const De=qv(Ie.width,Ie.height,w.format,w.type);for(const Ze of w.layerUpdates){const mt=Ie.data.subarray(Ze*De/Ie.data.BYTES_PER_ELEMENT,(Ze+1)*De/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,Ze,Ie.width,Ie.height,1,Ue,mt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ie.width,Ie.height,Te.depth,Ue,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Ye,Ie.width,Ie.height,Te.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ie.width,Ie.height,Te.depth,Ue,nt,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Ye,Ie.width,Ie.height,Te.depth,0,Ue,nt,Ie.data)}else{G&&Ee&&t.texStorage2D(n.TEXTURE_2D,Ve,Ye,lt[0].width,lt[0].height);for(let xe=0,ee=lt.length;xe<ee;xe++)Ie=lt[xe],w.format!==bi?Ue!==null?G?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Ye,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ce&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Ue,nt,Ie.data):t.texImage2D(n.TEXTURE_2D,xe,Ye,Ie.width,Ie.height,0,Ue,nt,Ie.data)}else if(w.isDataArrayTexture)if(G){if(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,Ye,Te.width,Te.height,Te.depth),Ce)if(w.layerUpdates.size>0){const xe=qv(Te.width,Te.height,w.format,w.type);for(const ee of w.layerUpdates){const De=Te.data.subarray(ee*xe/Te.data.BYTES_PER_ELEMENT,(ee+1)*xe/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,Te.width,Te.height,1,Ue,nt,De)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ue,nt,Te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ye,Te.width,Te.height,Te.depth,0,Ue,nt,Te.data);else if(w.isData3DTexture)G?(Ee&&t.texStorage3D(n.TEXTURE_3D,Ve,Ye,Te.width,Te.height,Te.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ue,nt,Te.data)):t.texImage3D(n.TEXTURE_3D,0,Ye,Te.width,Te.height,Te.depth,0,Ue,nt,Te.data);else if(w.isFramebufferTexture){if(Ee)if(G)t.texStorage2D(n.TEXTURE_2D,Ve,Ye,Te.width,Te.height);else{let xe=Te.width,ee=Te.height;for(let De=0;De<Ve;De++)t.texImage2D(n.TEXTURE_2D,De,Ye,xe,ee,0,Ue,nt,null),xe>>=1,ee>>=1}}else if(lt.length>0){if(G&&Ee){const xe=_t(lt[0]);t.texStorage2D(n.TEXTURE_2D,Ve,Ye,xe.width,xe.height)}for(let xe=0,ee=lt.length;xe<ee;xe++)Ie=lt[xe],G?Ce&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ue,nt,Ie):t.texImage2D(n.TEXTURE_2D,xe,Ye,Ue,nt,Ie);w.generateMipmaps=!1}else if(G){if(Ee){const xe=_t(Te);t.texStorage2D(n.TEXTURE_2D,Ve,Ye,xe.width,xe.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,nt,Te)}else t.texImage2D(n.TEXTURE_2D,0,Ye,Ue,nt,Te);S(w)&&y(he),Ke.__version=de.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function fe(L,w,$){if(w.image.length!==6)return;const he=ye(L,w),ge=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+$);const de=r.get(ge);if(ge.version!==de.__version||he===!0){t.activeTexture(n.TEXTURE0+$);const Ke=Rt.getPrimaries(Rt.workingColorSpace),Me=w.colorSpace===Vr?null:Rt.getPrimaries(w.colorSpace),We=w.colorSpace===Vr||Ke===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const je=w.isCompressedTexture||w.image[0].isCompressedTexture,Te=w.image[0]&&w.image[0].isDataTexture,Ue=[];for(let ee=0;ee<6;ee++)!je&&!Te?Ue[ee]=T(w.image[ee],!0,o.maxCubemapSize):Ue[ee]=Te?w.image[ee].image:w.image[ee],Ue[ee]=kt(w,Ue[ee]);const nt=Ue[0],Ye=l.convert(w.format,w.colorSpace),Ie=l.convert(w.type),lt=C(w.internalFormat,Ye,Ie,w.colorSpace),G=w.isVideoTexture!==!0,Ee=de.__version===void 0||he===!0,Ce=ge.dataReady;let Ve=N(w,nt);se(n.TEXTURE_CUBE_MAP,w);let xe;if(je){G&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,lt,nt.width,nt.height);for(let ee=0;ee<6;ee++){xe=Ue[ee].mipmaps;for(let De=0;De<xe.length;De++){const Ze=xe[De];w.format!==bi?Ye!==null?G?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,Ze.width,Ze.height,Ye,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,lt,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,Ze.width,Ze.height,Ye,Ie,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,lt,Ze.width,Ze.height,0,Ye,Ie,Ze.data)}}}else{if(xe=w.mipmaps,G&&Ee){xe.length>0&&Ve++;const ee=_t(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,lt,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Te){G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ue[ee].width,Ue[ee].height,Ye,Ie,Ue[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,lt,Ue[ee].width,Ue[ee].height,0,Ye,Ie,Ue[ee].data);for(let De=0;De<xe.length;De++){const mt=xe[De].image[ee].image;G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,mt.width,mt.height,Ye,Ie,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,lt,mt.width,mt.height,0,Ye,Ie,mt.data)}}else{G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ye,Ie,Ue[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,lt,Ye,Ie,Ue[ee]);for(let De=0;De<xe.length;De++){const Ze=xe[De];G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,Ye,Ie,Ze.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,lt,Ye,Ie,Ze.image[ee])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),de.__version=ge.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function me(L,w,$,he,ge,de){const Ke=l.convert($.format,$.colorSpace),Me=l.convert($.type),We=C($.internalFormat,Ke,Me,$.colorSpace),je=r.get(w),Te=r.get($);if(Te.__renderTarget=w,!je.__hasExternalTextures){const Ue=Math.max(1,w.width>>de),nt=Math.max(1,w.height>>de);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,de,We,Ue,nt,w.depth,0,Ke,Me,null):t.texImage2D(ge,de,We,Ue,nt,0,Ke,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Be(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,ge,Te.__webglTexture,0,Pt(w)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,he,ge,Te.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(L,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const he=w.depthTexture,ge=he&&he.isDepthTexture?he.type:null,de=A(w.stencilBuffer,ge),Ke=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=Pt(w);Be(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,de,w.width,w.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,de,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,de,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ke,n.RENDERBUFFER,L)}else{const he=w.textures;for(let ge=0;ge<he.length;ge++){const de=he[ge],Ke=l.convert(de.format,de.colorSpace),Me=l.convert(de.type),We=C(de.internalFormat,Ke,Me,de.colorSpace),je=Pt(w);$&&Be(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,We,w.width,w.height):Be(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,We,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,We,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(w.depthTexture);he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const ge=he.__webglTexture,de=Pt(w);if(w.depthTexture.format===Na)Be(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Ua)Be(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function pt(L){const w=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=he}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const he=L.texture.mipmaps;he&&he.length>0?ke(w.__webglFramebuffer[0],L):ke(w.__webglFramebuffer,L)}else if($){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=n.createRenderbuffer(),Ne(w.__webglDepthbuffer[he],L,!1);else{const ge=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[he];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,de)}}else{const he=L.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ne(w.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(L,w,$){const he=r.get(L);w!==void 0&&me(he.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&pt(L)}function B(L){const w=L.texture,$=r.get(L),he=r.get(w);L.addEventListener("dispose",F);const ge=L.textures,de=L.isWebGLCubeRenderTarget===!0,Ke=ge.length>1;if(Ke||(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=w.version,u.memory.textures++),de){$.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[Me]=[];for(let We=0;We<w.mipmaps.length;We++)$.__webglFramebuffer[Me][We]=n.createFramebuffer()}else $.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let Me=0;Me<w.mipmaps.length;Me++)$.__webglFramebuffer[Me]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Ke)for(let Me=0,We=ge.length;Me<We;Me++){const je=r.get(ge[Me]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),u.memory.textures++)}if(L.samples>0&&Be(L)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Me=0;Me<ge.length;Me++){const We=ge[Me];$.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Me]);const je=l.convert(We.format,We.colorSpace),Te=l.convert(We.type),Ue=C(We.internalFormat,je,Te,We.colorSpace,L.isXRRenderTarget===!0),nt=Pt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,Ue,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,$.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),se(n.TEXTURE_CUBE_MAP,w);for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0)for(let We=0;We<w.mipmaps.length;We++)me($.__webglFramebuffer[Me][We],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We);else me($.__webglFramebuffer[Me],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Me=0,We=ge.length;Me<We;Me++){const je=ge[Me],Te=r.get(je);let Ue=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Te.__webglTexture),se(Ue,je),me($.__webglFramebuffer,L,je,n.COLOR_ATTACHMENT0+Me,Ue,0),S(je)&&y(Ue)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,he.__webglTexture),se(Me,w),w.mipmaps&&w.mipmaps.length>0)for(let We=0;We<w.mipmaps.length;We++)me($.__webglFramebuffer[We],L,w,n.COLOR_ATTACHMENT0,Me,We);else me($.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,Me,0);S(w)&&y(Me),t.unbindTexture()}L.depthBuffer&&pt(L)}function At(L){const w=L.textures;for(let $=0,he=w.length;$<he;$++){const ge=w[$];if(S(ge)){const de=D(L),Ke=r.get(ge).__webglTexture;t.bindTexture(de,Ke),y(de),t.unbindTexture()}}}const ft=[],tt=[];function Ge(L){if(L.samples>0){if(Be(L)===!1){const w=L.textures,$=L.width,he=L.height;let ge=n.COLOR_BUFFER_BIT;const de=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ke=r.get(L),Me=w.length>1;if(Me)for(let je=0;je<w.length;je++)t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const We=L.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let je=0;je<w.length;je++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ke.__webglColorRenderbuffer[je]);const Te=r.get(w[je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,$,he,0,0,$,he,ge,n.NEAREST),d===!0&&(ft.length=0,tt.length=0,ft.push(n.COLOR_ATTACHMENT0+je),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ft.push(de),tt.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,tt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let je=0;je<w.length;je++){t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,Ke.__webglColorRenderbuffer[je]);const Te=r.get(w[je]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Pt(L){return Math.min(o.maxSamples,L.samples)}function Be(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ut(L){const w=u.render.frame;m.get(L)!==w&&(m.set(L,w),L.update())}function kt(L,w){const $=L.colorSpace,he=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==Ro&&$!==Vr&&(Rt.getTransfer($)===Ot?(he!==bi||ge!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function _t(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=ie,this.resetTextureUnits=K,this.setTexture2D=pe,this.setTexture2DArray=Z,this.setTexture3D=oe,this.setTextureCube=V,this.rebindTextures=zt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Be}function B3(n,e){function t(r,o=Vr){let l;const u=Rt.getTransfer(o);if(r===fr)return n.UNSIGNED_BYTE;if(r===xp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Sp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===ox)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===ax)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===rx)return n.BYTE;if(r===sx)return n.SHORT;if(r===La)return n.UNSIGNED_SHORT;if(r===yp)return n.INT;if(r===Cs)return n.UNSIGNED_INT;if(r===ar)return n.FLOAT;if(r===Ha)return n.HALF_FLOAT;if(r===lx)return n.ALPHA;if(r===ux)return n.RGB;if(r===bi)return n.RGBA;if(r===Na)return n.DEPTH_COMPONENT;if(r===Ua)return n.DEPTH_STENCIL;if(r===cx)return n.RED;if(r===Mp)return n.RED_INTEGER;if(r===fx)return n.RG;if(r===Ep)return n.RG_INTEGER;if(r===Tp)return n.RGBA_INTEGER;if(r===Pu||r===Du||r===Lu||r===Iu)if(u===Ot)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Pu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Du)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Iu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Pu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Du)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Iu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ah||r===lh||r===uh||r===ch)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===ah)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ch)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fh||r===dh||r===hh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===fh||r===dh)return u===Ot?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===hh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ph||r===mh||r===gh||r===vh||r===_h||r===yh||r===xh||r===Sh||r===Mh||r===Eh||r===Th||r===wh||r===Ah||r===Ch)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ph)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_h)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Eh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Th)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ah)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ch)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rh||r===bh||r===Ph)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Rh)return u===Ot?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ph)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dh||r===Lh||r===Ih||r===Nh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Dh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Lh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ih)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ia?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const V3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z3=`
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

}`;class H3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new wx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new hr({vertexShader:V3,fragmentShader:z3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zi(new qu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G3 extends Io{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,m=null,p=null,v=null,x=null,M=null;const T=typeof XRWebGLBinding<"u",S=new H3,y={},D=t.getContextAttributes();let C=null,A=null;const N=[],I=[],F=new bt;let k=null;const P=new di;P.viewport=new rn;const R=new di;R.viewport=new rn;const H=[P,R],K=new uR;let ie=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=N[Q];return fe===void 0&&(fe=new vd,N[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=N[Q];return fe===void 0&&(fe=new vd,N[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=N[Q];return fe===void 0&&(fe=new vd,N[Q]=fe),fe.getHandSpace()};function pe(Q){const fe=I.indexOf(Q.inputSource);if(fe===-1)return;const me=N[fe];me!==void 0&&(me.update(Q.inputSource,Q.frame,h||u),me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){o.removeEventListener("select",pe),o.removeEventListener("selectstart",pe),o.removeEventListener("selectend",pe),o.removeEventListener("squeeze",pe),o.removeEventListener("squeezestart",pe),o.removeEventListener("squeezeend",pe),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",oe);for(let Q=0;Q<N.length;Q++){const fe=I[Q];fe!==null&&(I[Q]=null,N[Q].disconnect(fe))}ie=null,ce=null,S.reset();for(const Q in y)delete y[Q];e.setRenderTarget(C),x=null,v=null,p=null,o=null,A=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(o,t)),p},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(C=e.getRenderTarget(),o.addEventListener("select",pe),o.addEventListener("selectstart",pe),o.addEventListener("selectend",pe),o.addEventListener("squeeze",pe),o.addEventListener("squeezestart",pe),o.addEventListener("squeezeend",pe),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",oe),D.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ne=null,ke=null;D.depth&&(ke=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=D.stencil?Ua:Na,Ne=D.stencil?Ia:Cs);const pt={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:l};p=this.getBinding(),v=p.createProjectionLayer(pt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new Rs(v.textureWidth,v.textureHeight,{format:bi,type:fr,depthTexture:new Tx(v.textureWidth,v.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const me={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new Rs(x.framebufferWidth,x.framebufferHeight,{format:bi,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Re.setContext(o),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function oe(Q){for(let fe=0;fe<Q.removed.length;fe++){const me=Q.removed[fe],Ne=I.indexOf(me);Ne>=0&&(I[Ne]=null,N[Ne].disconnect(me))}for(let fe=0;fe<Q.added.length;fe++){const me=Q.added[fe];let Ne=I.indexOf(me);if(Ne===-1){for(let pt=0;pt<N.length;pt++)if(pt>=I.length){I.push(me),Ne=pt;break}else if(I[pt]===null){I[pt]=me,Ne=pt;break}if(Ne===-1)break}const ke=N[Ne];ke&&ke.connect(me)}}const V=new ne,le=new ne;function te(Q,fe,me){V.setFromMatrixPosition(fe.matrixWorld),le.setFromMatrixPosition(me.matrixWorld);const Ne=V.distanceTo(le),ke=fe.projectionMatrix.elements,pt=me.projectionMatrix.elements,zt=ke[14]/(ke[10]-1),B=ke[14]/(ke[10]+1),At=(ke[9]+1)/ke[5],ft=(ke[9]-1)/ke[5],tt=(ke[8]-1)/ke[0],Ge=(pt[8]+1)/pt[0],Pt=zt*tt,Be=zt*Ge,ut=Ne/(-tt+Ge),kt=ut*-tt;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(kt),Q.translateZ(ut),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ke[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const _t=zt+ut,L=B+ut,w=Pt-kt,$=Be+(Ne-kt),he=At*B/L*_t,ge=ft*B/L*_t;Q.projectionMatrix.makePerspective(w,$,he,ge,_t,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function O(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let fe=Q.near,me=Q.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(me=S.depthFar)),K.near=R.near=P.near=fe,K.far=R.far=P.far=me,(ie!==K.near||ce!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),ie=K.near,ce=K.far),K.layers.mask=Q.layers.mask|6,P.layers.mask=K.layers.mask&3,R.layers.mask=K.layers.mask&5;const Ne=Q.parent,ke=K.cameras;O(K,Ne);for(let pt=0;pt<ke.length;pt++)O(ke[pt],Ne);ke.length===2?te(K,P,R):K.projectionMatrix.copy(P.projectionMatrix),se(Q,K,Ne)};function se(Q,fe,me){me===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Uh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(Q){d=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(Q){return y[Q]};let ye=null;function be(Q,fe){if(m=fe.getViewerPose(h||u),M=fe,m!==null){const me=m.views;x!==null&&(e.setRenderTargetFramebuffer(A,x.framebuffer),e.setRenderTarget(A));let Ne=!1;me.length!==K.cameras.length&&(K.cameras.length=0,Ne=!0);for(let B=0;B<me.length;B++){const At=me[B];let ft=null;if(x!==null)ft=x.getViewport(At);else{const Ge=p.getViewSubImage(v,At);ft=Ge.viewport,B===0&&(e.setRenderTargetTextures(A,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(A))}let tt=H[B];tt===void 0&&(tt=new di,tt.layers.enable(B),tt.viewport=new rn,H[B]=tt),tt.matrix.fromArray(At.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(At.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ft.x,ft.y,ft.width,ft.height),B===0&&(K.matrix.copy(tt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ne===!0&&K.cameras.push(tt)}const ke=o.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){p=r.getBinding();const B=p.getDepthInformation(me[0]);B&&B.isValid&&B.texture&&S.init(B,o.renderState)}if(ke&&ke.includes("camera-access")&&T){e.state.unbindTexture(),p=r.getBinding();for(let B=0;B<me.length;B++){const At=me[B].camera;if(At){let ft=y[At];ft||(ft=new wx,y[At]=ft);const tt=p.getCameraImage(At);ft.sourceTexture=tt}}}}for(let me=0;me<N.length;me++){const Ne=I[me],ke=N[me];Ne!==null&&ke!==void 0&&ke.update(Ne,fe,h||u)}ye&&ye(Q,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Re=new Ax;Re.setAnimationLoop(be),this.setAnimationLoop=function(Q){ye=Q},this.dispose=function(){}}}const ps=new dr,W3=new fn;function j3(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,xx(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,D,C,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),p(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,A)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),T(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?d(S,y,D,C):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Yn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Yn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),C=D.envMap,A=D.envMapRotation;C&&(S.envMap.value=C,ps.copy(A),ps.x*=-1,ps.y*=-1,ps.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),S.envMapRotation.value.setFromMatrix4(W3.makeRotationFromEuler(ps)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,D,C){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=C*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function p(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function X3(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,C){const A=C.program;r.uniformBlockBinding(D,A)}function h(D,C){let A=o[D.id];A===void 0&&(M(D),A=m(D),o[D.id]=A,D.addEventListener("dispose",S));const N=C.program;r.updateUBOMapping(D,N);const I=e.render.frame;l[D.id]!==I&&(v(D),l[D.id]=I)}function m(D){const C=p();D.__bindingPointIndex=C;const A=n.createBuffer(),N=D.__size,I=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,N,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,A),A}function p(){for(let D=0;D<c;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const C=o[D.id],A=D.uniforms,N=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let I=0,F=A.length;I<F;I++){const k=Array.isArray(A[I])?A[I]:[A[I]];for(let P=0,R=k.length;P<R;P++){const H=k[P];if(x(H,I,P,N)===!0){const K=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let ce=0;for(let pe=0;pe<ie.length;pe++){const Z=ie[pe],oe=T(Z);typeof Z=="number"||typeof Z=="boolean"?(H.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,K+ce,H.__data)):Z.isMatrix3?(H.__data[0]=Z.elements[0],H.__data[1]=Z.elements[1],H.__data[2]=Z.elements[2],H.__data[3]=0,H.__data[4]=Z.elements[3],H.__data[5]=Z.elements[4],H.__data[6]=Z.elements[5],H.__data[7]=0,H.__data[8]=Z.elements[6],H.__data[9]=Z.elements[7],H.__data[10]=Z.elements[8],H.__data[11]=0):(Z.toArray(H.__data,ce),ce+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(D,C,A,N){const I=D.value,F=C+"_"+A;if(N[F]===void 0)return typeof I=="number"||typeof I=="boolean"?N[F]=I:N[F]=I.clone(),!0;{const k=N[F];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return N[F]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function M(D){const C=D.uniforms;let A=0;const N=16;for(let F=0,k=C.length;F<k;F++){const P=Array.isArray(C[F])?C[F]:[C[F]];for(let R=0,H=P.length;R<H;R++){const K=P[R],ie=Array.isArray(K.value)?K.value:[K.value];for(let ce=0,pe=ie.length;ce<pe;ce++){const Z=ie[ce],oe=T(Z),V=A%N,le=V%oe.boundary,te=V+le;A+=le,te!==0&&N-te<oe.storage&&(A+=N-te),K.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=A,A+=oe.storage}}}const I=A%N;return I>0&&(A+=N-I),D.__size=A,D.__cache={},this}function T(D){const C={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(C.boundary=4,C.storage=4):D.isVector2?(C.boundary=8,C.storage=8):D.isVector3||D.isColor?(C.boundary=16,C.storage=12):D.isVector4?(C.boundary=16,C.storage=16):D.isMatrix3?(C.boundary=48,C.storage=48):D.isMatrix4?(C.boundary=64,C.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),C}function S(D){const C=D.target;C.removeEventListener("dispose",S);const A=u.indexOf(C.__bindingPointIndex);u.splice(A,1),n.deleteBuffer(o[C.id]),delete o[C.id],delete l[C.id]}function y(){for(const D in o)n.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class Y3{constructor(e={}){const{canvas:t=bC(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const D=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=fi;let I=0,F=0,k=null,P=-1,R=null;const H=new rn,K=new rn;let ie=null;const ce=new Ut(0);let pe=0,Z=t.width,oe=t.height,V=1,le=null,te=null;const O=new rn(0,0,Z,oe),se=new rn(0,0,Z,oe);let ye=!1;const be=new Ex;let Re=!1,Q=!1;const fe=new fn,me=new ne,Ne=new rn,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function zt(){return k===null?V:1}let B=r;function At(b,X){return t.getContext(b,X)}try{const b={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_p}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",xe,!1),B===null){const X="webgl2";if(B=At(X,b),B===null)throw At(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ft,tt,Ge,Pt,Be,ut,kt,_t,L,w,$,he,ge,de,Ke,Me,We,je,Te,Ue,nt,Ye,Ie,lt;function G(){ft=new iP(B),ft.init(),Ye=new B3(B,ft),tt=new K2(B,ft,e,Ye),Ge=new O3(B,ft),tt.reversedDepthBuffer&&v&&Ge.buffers.depth.setReversed(!0),Pt=new oP(B),Be=new T3,ut=new k3(B,ft,Ge,Be,tt,Ye,Pt),kt=new Q2(A),_t=new nP(A),L=new dR(B),Ie=new q2(B,L),w=new rP(B,L,Pt,Ie),$=new lP(B,w,L,Pt),Te=new aP(B,tt,ut),Me=new Z2(Be),he=new E3(A,kt,_t,ft,tt,Ie,Me),ge=new j3(A,Be),de=new A3,Ke=new L3(ft),je=new Y2(A,kt,_t,Ge,$,x,d),We=new U3(A,$,tt),lt=new X3(B,Pt,tt,Ge),Ue=new $2(B,ft,Pt),nt=new sP(B,ft,Pt),Pt.programs=he.programs,A.capabilities=tt,A.extensions=ft,A.properties=Be,A.renderLists=de,A.shadowMap=We,A.state=Ge,A.info=Pt}G();const Ee=new G3(A,B);this.xr=Ee,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(Z,oe,!1))},this.getSize=function(b){return b.set(Z,oe)},this.setSize=function(b,X,ae=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,oe=X,t.width=Math.floor(b*V),t.height=Math.floor(X*V),ae===!0&&(t.style.width=b+"px",t.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(Z*V,oe*V).floor()},this.setDrawingBufferSize=function(b,X,ae){Z=b,oe=X,V=ae,t.width=Math.floor(b*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,X,ae,ue){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,X,ae,ue),Ge.viewport(H.copy(O).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,X,ae,ue){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,X,ae,ue),Ge.scissor(K.copy(se).multiplyScalar(V).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){Ge.setScissorTest(ye=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,ae=!0){let ue=0;if(b){let j=!1;if(k!==null){const we=k.texture.format;j=we===Tp||we===Ep||we===Mp}if(j){const we=k.texture.type,Fe=we===fr||we===Cs||we===La||we===Ia||we===xp||we===Sp,qe=je.getClearColor(),ze=je.getClearAlpha(),ot=qe.r,at=qe.g,et=qe.b;Fe?(M[0]=ot,M[1]=at,M[2]=et,M[3]=ze,B.clearBufferuiv(B.COLOR,0,M)):(T[0]=ot,T[1]=at,T[2]=et,T[3]=ze,B.clearBufferiv(B.COLOR,0,T))}else ue|=B.COLOR_BUFFER_BIT}X&&(ue|=B.DEPTH_BUFFER_BIT),ae&&(ue|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),je.dispose(),de.dispose(),Ke.dispose(),Be.dispose(),kt.dispose(),_t.dispose(),$.dispose(),Ie.dispose(),lt.dispose(),he.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",It),Ee.removeEventListener("sessionend",mi),Wt.stop()};function Ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const b=Pt.autoReset,X=We.enabled,ae=We.autoUpdate,ue=We.needsUpdate,j=We.type;G(),Pt.autoReset=b,We.enabled=X,We.autoUpdate=ae,We.needsUpdate=ue,We.type=j}function xe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ee(b){const X=b.target;X.removeEventListener("dispose",ee),De(X)}function De(b){Ze(b),Be.remove(b)}function Ze(b){const X=Be.get(b).programs;X!==void 0&&(X.forEach(function(ae){he.releaseProgram(ae)}),b.isShaderMaterial&&he.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,ae,ue,j,we){X===null&&(X=ke);const Fe=j.isMesh&&j.matrixWorld.determinant()<0,qe=Xi(b,X,ae,ue,j);Ge.setMaterial(ue,Fe);let ze=ae.index,ot=1;if(ue.wireframe===!0){if(ze=w.getWireframeAttribute(ae),ze===void 0)return;ot=2}const at=ae.drawRange,et=ae.attributes.position;let dt=at.start*ot,Lt=(at.start+at.count)*ot;we!==null&&(dt=Math.max(dt,we.start*ot),Lt=Math.min(Lt,(we.start+we.count)*ot)),ze!==null?(dt=Math.max(dt,0),Lt=Math.min(Lt,ze.count)):et!=null&&(dt=Math.max(dt,0),Lt=Math.min(Lt,et.count));const Tt=Lt-dt;if(Tt<0||Tt===1/0)return;Ie.setup(j,ue,qe,ae,ze);let Bt,Nt=Ue;if(ze!==null&&(Bt=L.get(ze),Nt=nt,Nt.setIndex(Bt)),j.isMesh)ue.wireframe===!0?(Ge.setLineWidth(ue.wireframeLinewidth*zt()),Nt.setMode(B.LINES)):Nt.setMode(B.TRIANGLES);else if(j.isLine){let it=ue.linewidth;it===void 0&&(it=1),Ge.setLineWidth(it*zt()),j.isLineSegments?Nt.setMode(B.LINES):j.isLineLoop?Nt.setMode(B.LINE_LOOP):Nt.setMode(B.LINE_STRIP)}else j.isPoints?Nt.setMode(B.POINTS):j.isSprite&&Nt.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Fa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Nt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const it=j._multiDrawStarts,Ft=j._multiDrawCounts,St=j._multiDrawCount,ln=ze?L.get(ze).bytesPerElement:1,vi=Be.get(ue).currentProgram.getUniforms();for(let Ln=0;Ln<St;Ln++)vi.setValue(B,"_gl_DrawID",Ln),Nt.render(it[Ln]/ln,Ft[Ln])}else if(j.isInstancedMesh)Nt.renderInstances(dt,Tt,j.count);else if(ae.isInstancedBufferGeometry){const it=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ft=Math.min(ae.instanceCount,it);Nt.renderInstances(dt,Tt,Ft)}else Nt.render(dt,Tt)};function mt(b,X,ae){b.transparent===!0&&b.side===ki&&b.forceSinglePass===!1?(b.side=Yn,b.needsUpdate=!0,Ps(b,X,ae),b.side=jr,b.needsUpdate=!0,Ps(b,X,ae),b.side=ki):Ps(b,X,ae)}this.compile=function(b,X,ae=null){ae===null&&(ae=b),y=Ke.get(ae),y.init(X),C.push(y),ae.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),b!==ae&&b.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights();const ue=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Fe=0;Fe<we.length;Fe++){const qe=we[Fe];mt(qe,ae,j),ue.add(qe)}else mt(we,ae,j),ue.add(we)}),y=C.pop(),ue},this.compileAsync=function(b,X,ae=null){const ue=this.compile(b,X,ae);return new Promise(j=>{function we(){if(ue.forEach(function(Fe){Be.get(Fe).currentProgram.isReady()&&ue.delete(Fe)}),ue.size===0){j(b);return}setTimeout(we,10)}ft.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let yt=null;function Dt(b){yt&&yt(b)}function It(){Wt.stop()}function mi(){Wt.start()}const Wt=new Ax;Wt.setAnimationLoop(Dt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(b){yt=b,Ee.setAnimationLoop(b),b===null?Wt.stop():Wt.start()},Ee.addEventListener("sessionstart",It),Ee.addEventListener("sessionend",mi),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(X),X=Ee.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,X,k),y=Ke.get(b,C.length),y.init(X),C.push(y),fe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),be.setFromProjectionMatrix(fe,Vi,X.reversedDepth),Q=this.localClippingEnabled,Re=Me.init(this.clippingPlanes,Q),S=de.get(b,D.length),S.init(),D.push(S),Ee.enabled===!0&&Ee.isPresenting===!0){const we=A.xr.getDepthSensingMesh();we!==null&&_n(we,X,-1/0,A.sortObjects)}_n(b,X,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(le,te),pt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,pt&&je.addToRenderList(S,b),this.info.render.frame++,Re===!0&&Me.beginShadows();const ae=y.state.shadowsArray;We.render(ae,b,X),Re===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=S.opaque,j=S.transmissive;if(y.setupLights(),X.isArrayCamera){const we=X.cameras;if(j.length>0)for(let Fe=0,qe=we.length;Fe<qe;Fe++){const ze=we[Fe];Dn(ue,j,b,ze)}pt&&je.render(b);for(let Fe=0,qe=we.length;Fe<qe;Fe++){const ze=we[Fe];gi(S,b,ze,ze.viewport)}}else j.length>0&&Dn(ue,j,b,X),pt&&je.render(b),gi(S,b,X);k!==null&&F===0&&(ut.updateMultisampleRenderTarget(k),ut.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(A,b,X),Ie.resetDefaultState(),P=-1,R=null,C.pop(),C.length>0?(y=C[C.length-1],Re===!0&&Me.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function _n(b,X,ae,ue){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)ae=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||be.intersectsSprite(b)){ue&&Ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(fe);const Fe=$.update(b),qe=b.material;qe.visible&&S.push(b,Fe,qe,ae,Ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||be.intersectsObject(b))){const Fe=$.update(b),qe=b.material;if(ue&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ne.copy(b.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ne.copy(Fe.boundingSphere.center)),Ne.applyMatrix4(b.matrixWorld).applyMatrix4(fe)),Array.isArray(qe)){const ze=Fe.groups;for(let ot=0,at=ze.length;ot<at;ot++){const et=ze[ot],dt=qe[et.materialIndex];dt&&dt.visible&&S.push(b,Fe,dt,ae,Ne.z,et)}}else qe.visible&&S.push(b,Fe,qe,ae,Ne.z,null)}}const we=b.children;for(let Fe=0,qe=we.length;Fe<qe;Fe++)_n(we[Fe],X,ae,ue)}function gi(b,X,ae,ue){const j=b.opaque,we=b.transmissive,Fe=b.transparent;y.setupLightsView(ae),Re===!0&&Me.setGlobalState(A.clippingPlanes,ae),ue&&Ge.viewport(H.copy(ue)),j.length>0&&Di(j,X,ae),we.length>0&&Di(we,X,ae),Fe.length>0&&Di(Fe,X,ae),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Dn(b,X,ae,ue){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ue.id]===void 0&&(y.state.transmissionRenderTarget[ue.id]=new Rs(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Ha:fr,minFilter:Es,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const we=y.state.transmissionRenderTarget[ue.id],Fe=ue.viewport||H;we.setSize(Fe.z*A.transmissionResolutionScale,Fe.w*A.transmissionResolutionScale);const qe=A.getRenderTarget(),ze=A.getActiveCubeFace(),ot=A.getActiveMipmapLevel();A.setRenderTarget(we),A.getClearColor(ce),pe=A.getClearAlpha(),pe<1&&A.setClearColor(16777215,.5),A.clear(),pt&&je.render(ae);const at=A.toneMapping;A.toneMapping=Hr;const et=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),y.setupLightsView(ue),Re===!0&&Me.setGlobalState(A.clippingPlanes,ue),Di(b,ae,ue),ut.updateMultisampleRenderTarget(we),ut.updateRenderTargetMipmap(we),ft.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Lt=0,Tt=X.length;Lt<Tt;Lt++){const Bt=X[Lt],Nt=Bt.object,it=Bt.geometry,Ft=Bt.material,St=Bt.group;if(Ft.side===ki&&Nt.layers.test(ue.layers)){const ln=Ft.side;Ft.side=Yn,Ft.needsUpdate=!0,bs(Nt,ae,ue,it,Ft,St),Ft.side=ln,Ft.needsUpdate=!0,dt=!0}}dt===!0&&(ut.updateMultisampleRenderTarget(we),ut.updateRenderTargetMipmap(we))}A.setRenderTarget(qe,ze,ot),A.setClearColor(ce,pe),et!==void 0&&(ue.viewport=et),A.toneMapping=at}function Di(b,X,ae){const ue=X.isScene===!0?X.overrideMaterial:null;for(let j=0,we=b.length;j<we;j++){const Fe=b[j],qe=Fe.object,ze=Fe.geometry,ot=Fe.group;let at=Fe.material;at.allowOverride===!0&&ue!==null&&(at=ue),qe.layers.test(ae.layers)&&bs(qe,X,ae,ze,at,ot)}}function bs(b,X,ae,ue,j,we){b.onBeforeRender(A,X,ae,ue,j,we),b.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(A,X,ae,ue,b,we),j.transparent===!0&&j.side===ki&&j.forceSinglePass===!1?(j.side=Yn,j.needsUpdate=!0,A.renderBufferDirect(ae,X,ue,j,b,we),j.side=jr,j.needsUpdate=!0,A.renderBufferDirect(ae,X,ue,j,b,we),j.side=ki):A.renderBufferDirect(ae,X,ue,j,b,we),b.onAfterRender(A,X,ae,ue,j,we)}function Ps(b,X,ae){X.isScene!==!0&&(X=ke);const ue=Be.get(b),j=y.state.lights,we=y.state.shadowsArray,Fe=j.state.version,qe=he.getParameters(b,j.state,we,X,ae),ze=he.getProgramCacheKey(qe);let ot=ue.programs;ue.environment=b.isMeshStandardMaterial?X.environment:null,ue.fog=X.fog,ue.envMap=(b.isMeshStandardMaterial?_t:kt).get(b.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,ot===void 0&&(b.addEventListener("dispose",ee),ot=new Map,ue.programs=ot);let at=ot.get(ze);if(at!==void 0){if(ue.currentProgram===at&&ue.lightsStateVersion===Fe)return qa(b,qe),at}else qe.uniforms=he.getUniforms(b),b.onBeforeCompile(qe,A),at=he.acquireProgram(qe,ze),ot.set(ze,at),ue.uniforms=qe.uniforms;const et=ue.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(et.clippingPlanes=Me.uniform),qa(b,qe),ue.needsLights=Ka(b),ue.lightsStateVersion=Fe,ue.needsLights&&(et.ambientLightColor.value=j.state.ambient,et.lightProbe.value=j.state.probe,et.directionalLights.value=j.state.directional,et.directionalLightShadows.value=j.state.directionalShadow,et.spotLights.value=j.state.spot,et.spotLightShadows.value=j.state.spotShadow,et.rectAreaLights.value=j.state.rectArea,et.ltc_1.value=j.state.rectAreaLTC1,et.ltc_2.value=j.state.rectAreaLTC2,et.pointLights.value=j.state.point,et.pointLightShadows.value=j.state.pointShadow,et.hemisphereLights.value=j.state.hemi,et.directionalShadowMap.value=j.state.directionalShadowMap,et.directionalShadowMatrix.value=j.state.directionalShadowMatrix,et.spotShadowMap.value=j.state.spotShadowMap,et.spotLightMatrix.value=j.state.spotLightMatrix,et.spotLightMap.value=j.state.spotLightMap,et.pointShadowMap.value=j.state.pointShadowMap,et.pointShadowMatrix.value=j.state.pointShadowMatrix),ue.currentProgram=at,ue.uniformsList=null,at}function Ya(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Nu.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function qa(b,X){const ae=Be.get(b);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function Xi(b,X,ae,ue,j){X.isScene!==!0&&(X=ke),ut.resetTextureUnits();const we=X.fog,Fe=ue.isMeshStandardMaterial?X.environment:null,qe=k===null?A.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ro,ze=(ue.isMeshStandardMaterial?_t:kt).get(ue.envMap||Fe),ot=ue.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,at=!!ae.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),et=!!ae.morphAttributes.position,dt=!!ae.morphAttributes.normal,Lt=!!ae.morphAttributes.color;let Tt=Hr;ue.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Tt=A.toneMapping);const Bt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Nt=Bt!==void 0?Bt.length:0,it=Be.get(ue),Ft=y.state.lights;if(Re===!0&&(Q===!0||b!==R)){const en=b===R&&ue.id===P;Me.setState(ue,b,en)}let St=!1;ue.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Ft.state.version||it.outputColorSpace!==qe||j.isBatchedMesh&&it.batching===!1||!j.isBatchedMesh&&it.batching===!0||j.isBatchedMesh&&it.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&it.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&it.instancing===!1||!j.isInstancedMesh&&it.instancing===!0||j.isSkinnedMesh&&it.skinning===!1||!j.isSkinnedMesh&&it.skinning===!0||j.isInstancedMesh&&it.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&it.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&it.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&it.instancingMorph===!1&&j.morphTexture!==null||it.envMap!==ze||ue.fog===!0&&it.fog!==we||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Me.numPlanes||it.numIntersection!==Me.numIntersection)||it.vertexAlphas!==ot||it.vertexTangents!==at||it.morphTargets!==et||it.morphNormals!==dt||it.morphColors!==Lt||it.toneMapping!==Tt||it.morphTargetsCount!==Nt)&&(St=!0):(St=!0,it.__version=ue.version);let ln=it.currentProgram;St===!0&&(ln=Ps(ue,X,j));let vi=!1,Ln=!1,qr=!1;const Vt=ln.getUniforms(),In=it.uniforms;if(Ge.useProgram(ln.program)&&(vi=!0,Ln=!0,qr=!0),ue.id!==P&&(P=ue.id,Ln=!0),vi||R!==b){Ge.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Vt.setValue(B,"projectionMatrix",b.projectionMatrix),Vt.setValue(B,"viewMatrix",b.matrixWorldInverse);const En=Vt.map.cameraPosition;En!==void 0&&En.setValue(B,me.setFromMatrixPosition(b.matrixWorld)),tt.logarithmicDepthBuffer&&Vt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Vt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Ln=!0,qr=!0)}if(j.isSkinnedMesh){Vt.setOptional(B,j,"bindMatrix"),Vt.setOptional(B,j,"bindMatrixInverse");const en=j.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Vt.setValue(B,"boneTexture",en.boneTexture,ut))}j.isBatchedMesh&&(Vt.setOptional(B,j,"batchingTexture"),Vt.setValue(B,"batchingTexture",j._matricesTexture,ut),Vt.setOptional(B,j,"batchingIdTexture"),Vt.setValue(B,"batchingIdTexture",j._indirectTexture,ut),Vt.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Vt.setValue(B,"batchingColorTexture",j._colorsTexture,ut));const Mn=ae.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Te.update(j,ae,ln),(Ln||it.receiveShadow!==j.receiveShadow)&&(it.receiveShadow=j.receiveShadow,Vt.setValue(B,"receiveShadow",j.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(In.envMap.value=ze,In.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&X.environment!==null&&(In.envMapIntensity.value=X.environmentIntensity),Ln&&(Vt.setValue(B,"toneMappingExposure",A.toneMappingExposure),it.needsLights&&$a(In,qr),we&&ue.fog===!0&&ge.refreshFogUniforms(In,we),ge.refreshMaterialUniforms(In,ue,V,oe,y.state.transmissionRenderTarget[b.id]),Nu.upload(B,Ya(it),In,ut)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Nu.upload(B,Ya(it),In,ut),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Vt.setValue(B,"center",j.center),Vt.setValue(B,"modelViewMatrix",j.modelViewMatrix),Vt.setValue(B,"normalMatrix",j.normalMatrix),Vt.setValue(B,"modelMatrix",j.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const en=ue.uniformsGroups;for(let En=0,$r=en.length;En<$r;En++){const Mt=en[En];lt.update(Mt,ln),lt.bind(Mt,ln)}}return ln}function $a(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Ka(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,X,ae){const ue=Be.get(b);ue.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Be.get(b.texture).__webglTexture=X,Be.get(b.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:ae,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const ae=Be.get(b);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0};const Ku=B.createFramebuffer();this.setRenderTarget=function(b,X=0,ae=0){k=b,I=X,F=ae;let ue=!0,j=null,we=!1,Fe=!1;if(b){const ze=Be.get(b);if(ze.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(B.FRAMEBUFFER,null),ue=!1;else if(ze.__webglFramebuffer===void 0)ut.setupRenderTarget(b);else if(ze.__hasExternalTextures)ut.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const et=b.depthTexture;if(ze.__boundDepthTexture!==et){if(et!==null&&Be.has(et)&&(b.width!==et.image.width||b.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(b)}}const ot=b.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Fe=!0);const at=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(at[X])?j=at[X][ae]:j=at[X],we=!0):b.samples>0&&ut.useMultisampledRTT(b)===!1?j=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(at)?j=at[ae]:j=at,H.copy(b.viewport),K.copy(b.scissor),ie=b.scissorTest}else H.copy(O).multiplyScalar(V).floor(),K.copy(se).multiplyScalar(V).floor(),ie=ye;if(ae!==0&&(j=Ku),Ge.bindFramebuffer(B.FRAMEBUFFER,j)&&ue&&Ge.drawBuffers(b,j),Ge.viewport(H),Ge.scissor(K),Ge.setScissorTest(ie),we){const ze=Be.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,ze.__webglTexture,ae)}else if(Fe){const ze=X;for(let ot=0;ot<b.textures.length;ot++){const at=Be.get(b.textures[ot]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ot,at.__webglTexture,ae,ze)}}else if(b!==null&&ae!==0){const ze=Be.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ze.__webglTexture,ae)}P=-1},this.readRenderTargetPixels=function(b,X,ae,ue,j,we,Fe,qe=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){Ge.bindFramebuffer(B.FRAMEBUFFER,ze);try{const ot=b.textures[qe],at=ot.format,et=ot.type;if(!tt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-ue&&ae>=0&&ae<=b.height-j&&(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+qe),B.readPixels(X,ae,ue,j,Ye.convert(at),Ye.convert(et),we))}finally{const ot=k!==null?Be.get(k).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(b,X,ae,ue,j,we,Fe,qe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze)if(X>=0&&X<=b.width-ue&&ae>=0&&ae<=b.height-j){Ge.bindFramebuffer(B.FRAMEBUFFER,ze);const ot=b.textures[qe],at=ot.format,et=ot.type;if(!tt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+qe),B.readPixels(X,ae,ue,j,Ye.convert(at),Ye.convert(et),0);const Lt=k!==null?Be.get(k).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,Lt);const Tt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await PC(B,Tt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.deleteBuffer(dt),B.deleteSync(Tt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,ae=0){const ue=Math.pow(2,-ae),j=Math.floor(b.image.width*ue),we=Math.floor(b.image.height*ue),Fe=X!==null?X.x:0,qe=X!==null?X.y:0;ut.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,ae,0,0,Fe,qe,j,we),Ge.unbindTexture()};const Za=B.createFramebuffer(),Qa=B.createFramebuffer();this.copyTextureToTexture=function(b,X,ae=null,ue=null,j=0,we=null){we===null&&(j!==0?(Fa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=j,j=0):we=0);let Fe,qe,ze,ot,at,et,dt,Lt,Tt;const Bt=b.isCompressedTexture?b.mipmaps[we]:b.image;if(ae!==null)Fe=ae.max.x-ae.min.x,qe=ae.max.y-ae.min.y,ze=ae.isBox3?ae.max.z-ae.min.z:1,ot=ae.min.x,at=ae.min.y,et=ae.isBox3?ae.min.z:0;else{const Mn=Math.pow(2,-j);Fe=Math.floor(Bt.width*Mn),qe=Math.floor(Bt.height*Mn),b.isDataArrayTexture?ze=Bt.depth:b.isData3DTexture?ze=Math.floor(Bt.depth*Mn):ze=1,ot=0,at=0,et=0}ue!==null?(dt=ue.x,Lt=ue.y,Tt=ue.z):(dt=0,Lt=0,Tt=0);const Nt=Ye.convert(X.format),it=Ye.convert(X.type);let Ft;X.isData3DTexture?(ut.setTexture3D(X,0),Ft=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ut.setTexture2DArray(X,0),Ft=B.TEXTURE_2D_ARRAY):(ut.setTexture2D(X,0),Ft=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const St=B.getParameter(B.UNPACK_ROW_LENGTH),ln=B.getParameter(B.UNPACK_IMAGE_HEIGHT),vi=B.getParameter(B.UNPACK_SKIP_PIXELS),Ln=B.getParameter(B.UNPACK_SKIP_ROWS),qr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Bt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ot),B.pixelStorei(B.UNPACK_SKIP_ROWS,at),B.pixelStorei(B.UNPACK_SKIP_IMAGES,et);const Vt=b.isDataArrayTexture||b.isData3DTexture,In=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const Mn=Be.get(b),en=Be.get(X),En=Be.get(Mn.__renderTarget),$r=Be.get(en.__renderTarget);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,En.__webglFramebuffer),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let Mt=0;Mt<ze;Mt++)Vt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(b).__webglTexture,j,et+Mt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(X).__webglTexture,we,Tt+Mt)),B.blitFramebuffer(ot,at,Fe,qe,dt,Lt,Fe,qe,B.DEPTH_BUFFER_BIT,B.NEAREST);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||Be.has(b)){const Mn=Be.get(b),en=Be.get(X);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,Za),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Qa);for(let En=0;En<ze;En++)Vt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Mn.__webglTexture,j,et+En):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Mn.__webglTexture,j),In?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,en.__webglTexture,we,Tt+En):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,en.__webglTexture,we),j!==0?B.blitFramebuffer(ot,at,Fe,qe,dt,Lt,Fe,qe,B.COLOR_BUFFER_BIT,B.NEAREST):In?B.copyTexSubImage3D(Ft,we,dt,Lt,Tt+En,ot,at,Fe,qe):B.copyTexSubImage2D(Ft,we,dt,Lt,ot,at,Fe,qe);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else In?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Ft,we,dt,Lt,Tt,Fe,qe,ze,Nt,it,Bt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Ft,we,dt,Lt,Tt,Fe,qe,ze,Nt,Bt.data):B.texSubImage3D(Ft,we,dt,Lt,Tt,Fe,qe,ze,Nt,it,Bt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,we,dt,Lt,Fe,qe,Nt,it,Bt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,we,dt,Lt,Bt.width,Bt.height,Nt,Bt.data):B.texSubImage2D(B.TEXTURE_2D,we,dt,Lt,Fe,qe,Nt,it,Bt);B.pixelStorei(B.UNPACK_ROW_LENGTH,St),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ln),B.pixelStorei(B.UNPACK_SKIP_PIXELS,vi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ln),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qr),we===0&&X.generateMipmaps&&B.generateMipmap(Ft),Ge.unbindTexture()},this.initRenderTarget=function(b){Be.get(b).__webglFramebuffer===void 0&&ut.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ut.setTextureCube(b,0):b.isData3DTexture?ut.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ut.setTexture2DArray(b,0):ut.setTexture2D(b,0),Ge.unbindTexture()},this.resetState=function(){I=0,F=0,k=null,Ge.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}function q3(){const n=Pe.useRef(null);return Pe.useEffect(()=>{console.log("Initializing Three.js canvas");const e={backgroundColor:16448250,cameraFOV:75,cameraDistance:4,bubbleSize:.9,bubbleDetail:128,speed1:.1,frequency1:1,intensity1:.1,speed2:.2,frequency2:1,intensity2:.05,speed3:.2,frequency3:2,intensity3:.02,glassColorR:.12,glassColorG:.11,glassColorB:.19,topColorR:.55,topColorG:1,topColorB:1,bottomColorR:.8,bottomColorG:.2,bottomColorB:.5,fresnelPower:3,fresnelBlend:.8,highlightPower:50,highlightIntensity:.5,baseTransparency:.1,edgeTransparency:.6};let t,r,o,l,u;const c=new cR,d=n.current;if(!d){console.error("Mount ref is null");return}const h=d.clientWidth,m=d.clientHeight;t=new nR,t.background=new Ut(e.backgroundColor),r=new di(e.cameraFOV,h/m,.1,1e3),r.position.z=e.cameraDistance,o=new Y3({antialias:!0,alpha:!0}),o.setSize(h,m),o.setPixelRatio(window.devicePixelRatio),d.appendChild(o.domElement);const p=`
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
    `,v=`
      precision highp float;

      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      uniform float time;

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

      void main() {
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);

          // Fresnel effect using config parameter
          float fresnel = pow(1.0 - dot(vNormal, viewDirection), fresnelPower);

          // Gradient using config colors
          float gradient = (vPosition.y + 1.0) * 0.5;
          vec3 gradientColor = mix(bottomColor, topColor, gradient);

          // Blend with fresnel
          vec3 color = mix(gradientColor, vec3(1.0), fresnel * fresnelBlend);

          // Specular highlight using config parameters
          float highlight = pow(max(dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))), 0.0), highlightPower);
          color += vec3(1.0) * highlight * highlightIntensity;

          // Transparency using config parameters
          float alpha = baseTransparency + fresnel * edgeTransparency;

          gl_FragColor = vec4(color, alpha);
      }
    `;l=new hr({vertexShader:p,fragmentShader:v,uniforms:{time:{value:0},speed1:{value:e.speed1},frequency1:{value:e.frequency1},intensity1:{value:e.intensity1},speed2:{value:e.speed2},frequency2:{value:e.frequency2},intensity2:{value:e.intensity2},speed3:{value:e.speed3},frequency3:{value:e.frequency3},intensity3:{value:e.intensity3},glassColor:{value:new ne(e.glassColorR,e.glassColorG,e.glassColorB)},topColor:{value:new ne(e.topColorR,e.topColorG,e.topColorB)},bottomColor:{value:new ne(e.bottomColorR,e.bottomColorG,e.bottomColorB)},fresnelPower:{value:e.fresnelPower},fresnelBlend:{value:e.fresnelBlend},highlightPower:{value:e.highlightPower},highlightIntensity:{value:e.highlightIntensity},baseTransparency:{value:e.baseTransparency},edgeTransparency:{value:e.edgeTransparency}},transparent:!0,side:ki,blending:As});const x=new Rp(e.bubbleSize,e.bubbleDetail);u=new zi(x,l),t.add(u),console.log("Mesh created:",u),console.log("Scene:",t),console.log("Camera position:",r.position);function M(){const y=d.clientWidth,D=d.clientHeight;r.aspect=y/D,r.updateProjectionMatrix(),o.setSize(y,D)}window.addEventListener("resize",M);let T=!1;function S(){if(T)return;requestAnimationFrame(S);const y=c.getElapsedTime();l.uniforms.time.value=y,o.render(t,r)}return S(),()=>{T=!0,window.removeEventListener("resize",M),d.removeChild(o.domElement),o.dispose(),x.dispose(),l.dispose()}},[]),Y.jsx("div",{ref:n,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0},"aria-label":"Three.js Canvas"})}function $3(){const[n,e]=Pe.useState({x:50,y:50}),[t,r]=Pe.useState({x:50,y:50}),[o,l]=Pe.useState(!1),[u,c]=Pe.useState({triangle:{x:0,y:0,rotation:0},star:{x:0,y:0,rotation:0},circle:{x:0,y:0,rotation:0}}),d=Pe.useRef(null),h=Pe.useRef(null),m=()=>{const p=document.querySelector("#work");p&&p.scrollIntoView({behavior:"smooth"})};return Pe.useEffect(()=>{const p=d.current;if(!p)return;const v=M=>{const T=p.getBoundingClientRect(),S=(M.clientX-T.left)/T.width*100,y=(M.clientY-T.top)/T.height*100,D=S-t.x,C=y-t.y;c(A=>({triangle:{x:A.triangle.x+D*.3,y:A.triangle.y+C*.2,rotation:A.triangle.rotation+D*.1},star:{x:A.star.x+D*-.4,y:A.star.y+C*.3,rotation:A.star.rotation+D*-.15},circle:{x:A.circle.x+D*.25,y:A.circle.y+C*-.2,rotation:A.circle.rotation+C*.1}})),r({x:S,y}),e({x:S,y}),l(!0),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{l(!1)},200)},x=()=>{l(!1)};return p.addEventListener("mousemove",v),p.addEventListener("mouseleave",x),()=>{p.removeEventListener("mousemove",v),p.removeEventListener("mouseleave",x),h.current&&clearTimeout(h.current)}},[t]),Y.jsxs("section",{ref:d,id:"home",className:"min-h-screen flex items-center justify-center relative overflow-hidden",children:[Y.jsx(q3,{}),Y.jsx("div",{className:"max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10",children:Y.jsxs(Gt.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[Y.jsx(Gt.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},className:"mb-6",children:"Nicolás Lundin"}),Y.jsx(Gt.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},className:"text-muted-foreground mb-12 max-w-2xl mx-auto",children:"A Senior Product Designer from Santiago, Chile –– creating user-friendly solutions for digital products."}),Y.jsx(Gt.button,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},onClick:m,whileHover:{y:-2},whileTap:{scale:.98},className:"text-sm border-b border-foreground pb-1 hover:text-muted-foreground transition-colors duration-200",children:"View Works"})]})}),Y.jsx(Gt.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1.5},className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10",children:Y.jsx(Gt.div,{animate:{y:[0,4,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},children:Y.jsxs("svg",{width:"20",height:"32",viewBox:"0 0 20 32",fill:"none",className:"text-muted-foreground",children:[Y.jsx("rect",{x:"1",y:"1",width:"18",height:"26",rx:"9",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),Y.jsx(Gt.rect,{x:"8.5",y:"6",width:"3",height:"6",rx:"1.5",fill:"currentColor",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0,ease:"easeInOut"}}),Y.jsx(Gt.line,{x1:"10",y1:"30",x2:"10",y2:"31",stroke:"currentColor",strokeWidth:"1.5",animate:{opacity:[.3,.8,.3]},transition:{duration:2,repeat:1/0,ease:"easeInOut",delay:.2}})]})})})]})}const wd={p1088c080:"M44.6304 9.20584C46.5924 12.7013 48.5275 16.0754 50.3928 19.4932C52.2018 22.8081 51.6213 26.6383 49.0364 28.9617C46.4811 31.2586 42.7171 31.2562 40.1984 28.9561C37.632 26.6124 37.0731 22.7629 38.8809 19.4713C40.7538 16.0612 42.6793 12.6842 44.6304 9.20584Z",p312ce400:"M22.6809 7.21269C22.327 8.30627 22.1104 9.47097 21.5961 10.4815C18.8561 15.8659 16.0705 21.2273 13.243 26.5656C11.2226 30.38 7.0585 31.7378 3.55122 29.8165C0.138819 27.9473 -0.998985 23.7594 0.950683 19.9707C3.76822 14.4957 6.58521 9.01904 9.51007 3.60228C11.1166 0.626926 14.342 -0.583744 17.5176 0.340023C20.4855 1.20339 22.5131 3.98235 22.6809 7.21269Z",p32b8100:"M41.7108 7.17782C41.3569 8.27141 41.1403 9.43611 40.6261 10.4466C37.8861 15.831 35.1004 21.1924 32.2729 26.5308C30.2526 30.3452 26.0885 31.7029 22.5812 29.7816C19.1688 27.9124 18.0309 23.7245 19.9807 19.9358C22.7982 14.4609 25.6152 8.98419 28.5401 3.56741C30.1466 0.592062 33.372 -0.618608 36.5476 0.305157C39.5154 1.16852 41.543 3.94749 41.7108 7.17782Z"},po={p21bad880:"M62.8902 0.979263V1.0023ZM58.098 5.36866L58.2832 4.90783C58.3295 4.79263 58.3526 4.6659 58.3526 4.53917C58.3642 4.00922 57.9359 3.57143 57.4034 3.55991H52.125V0.979263C52.1134 0.449309 52.5417 0.0115207 53.0742 0H61.9295C62.4619 0.0115207 62.8902 0.449309 62.8787 0.979263V3.49078L56.3732 20.0346C56.3269 20.1498 56.3037 20.2765 56.3037 20.3917C56.2922 20.9217 56.7089 21.3479 57.2298 21.371H61.2465V23.9516C61.2581 24.4816 60.8298 24.9194 60.2973 24.9309H52.7153C52.1828 24.9194 51.7546 24.4816 51.7661 23.9516V21.4401L58.098 5.36866Z",p22605980:"M40.9198 24.9194C40.3874 24.9078 39.9591 24.47 39.9706 23.9401V0.979263C39.9591 0.449309 40.3874 0.0115207 40.9198 0H49.3584C49.8909 0.0115207 50.3192 0.449309 50.3076 0.979263V3.55991H44.6935C44.1957 3.57143 43.779 3.96313 43.7558 4.45853V9.15899C43.7443 9.68894 44.1726 10.1267 44.705 10.1383H48.9648V13.6982H44.705C44.1726 13.7097 43.7443 14.1475 43.7558 14.6774V20.3802C43.7443 20.9101 44.1726 21.3479 44.705 21.3595H50.3076V23.9401C50.3192 24.47 49.8909 24.9078 49.3584 24.9194",p331b8100:"M0.219938 0C0.625083 0 1.16913 0.195852 1.31962 0.541474L4.22508 7.38479L5.70675 10.9677L10.1286 21.394V23.9055C10.1402 24.4355 9.71189 24.8733 9.17941 24.8848H2.56977C2.0373 24.8733 1.609 24.4355 1.62058 23.9055V21.3249H5.6373C6.1582 21.3018 6.57492 20.8756 6.56334 20.3456C6.56334 20.2189 6.54019 20.1037 6.49388 19.9885L3.31061 11.9931L1.92154 8.3871L0.96077 6.08295C0.85659 5.69124 0.254662 5.47235 0 6.08295",p36e3ad00:"M28.3951 24.9194C27.8626 24.9078 27.4343 24.47 27.4459 23.9401V0.979263C27.4343 0.449309 27.8626 0.0115207 28.3951 0H36.8337C37.3661 0.0115207 37.7944 0.449309 37.7829 0.979263V3.55991H32.1687C31.671 3.57143 31.2542 3.96313 31.2311 4.45853V9.15899C31.2195 9.68894 31.6478 10.1267 32.1803 10.1383H36.4401V13.6982H32.1803C31.6478 13.7097 31.2195 14.1475 31.2311 14.6774V20.3802C31.2195 20.9101 31.6478 21.3479 32.1803 21.3595H37.7829V23.9401C37.7944 24.47 37.3661 24.9078 36.8337 24.9194H28.3951Z",p39d6fb00:"M21.0446 17.3042C21.0446 14.9885 20.3964 14.2396 18.6716 14.2396H18.3128C17.7803 14.2512 17.352 14.6889 17.3636 15.2189V24.9309H14.516C13.9835 24.9194 13.5552 24.4816 13.5668 23.9516L13.5552 0.979263C13.5436 0.449309 13.9719 0.0115207 14.5044 0H19.1809C23.105 0 24.7951 1.8894 24.7951 5.73733V7.26959C24.7951 9.83871 23.9964 11.4747 22.3179 12.1889V12.2581C24.2163 12.8687 24.8298 14.712 24.8298 17.5346V23.9516C24.8414 24.4816 24.4131 24.9194 23.8806 24.9309H21.0446M17.352 9.70046C17.3404 10.2304 17.7687 10.6682 18.3012 10.6797H18.7295C20.1417 10.6797 20.9983 10.0346 20.9983 8.04148V6.11751C20.9983 4.3318 20.4079 3.54839 19.0652 3.54839H18.2896C17.7571 3.55991 17.3288 3.9977 17.3404 4.52765L17.352 9.70046Z",pf46a0b0:"M10.7771 0C11.3096 0.0115207 11.7378 0.449309 11.7263 0.979263L11.7378 1.947V3.55991H8.7282C8.19572 3.57143 7.76743 4.00922 7.779 4.53917V24.9309H4.93142C4.39894 24.9194 3.97065 24.4816 3.98222 23.9516V4.53917C3.9938 4.00922 3.5655 3.57143 3.03303 3.55991H0.0118048V2.2235L0.000229235 0.979263C-0.0113463 0.449309 0.416949 0.0115207 0.949425 0H10.7771Z"},K3="/myportfolio/assets/f2f5123cf9e66431edd3697e20336ef308182706-VlTc-rv7.png",Z3="/myportfolio/assets/e44fcb5bc8dca7effc85f21ee80ed064a838827f-BtaIciKY.png";function Q3(){return Y.jsx("div",{className:"h-[30.711px] relative shrink-0 w-[51.441px]",children:Y.jsx("svg",{className:"block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 52 31",children:Y.jsxs("g",{children:[Y.jsx("path",{clipRule:"evenodd",d:wd.p312ce400,fill:"white",fillRule:"evenodd"}),Y.jsx("path",{clipRule:"evenodd",d:wd.p32b8100,fill:"white",fillRule:"evenodd"}),Y.jsx("path",{clipRule:"evenodd",d:wd.p1088c080,fill:"white",fillRule:"evenodd"})]})})})}function J3(){return Y.jsx("div",{className:"aspect-[72/25] overflow-clip relative w-[72px]",children:Y.jsxs("div",{className:"absolute contents inset-[0.06%_0.11%_0.21%_0.1%]",children:[Y.jsx("div",{className:"absolute inset-[0.06%_0.11%_0.4%_85.83%]",children:Y.jsx("svg",{className:"block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 11 25",children:Y.jsx("path",{d:po.p331b8100,fill:"#404040",fillOpacity:"0.48"})})}),Y.jsx("div",{className:"absolute inset-[0.06%_12.55%_0.21%_0.1%]",children:Y.jsx("svg",{className:"block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 63 25",children:Y.jsxs("g",{children:[Y.jsx("path",{d:po.p21bad880,fill:"#404040"}),Y.jsx("path",{d:po.p22605980,fill:"#404040"}),Y.jsx("path",{d:po.p36e3ad00,fill:"#404040"}),Y.jsx("path",{d:po.p39d6fb00,fill:"#404040"}),Y.jsx("path",{d:po.pf46a0b0,fill:"#404040"})]})})})]})})}function eD(){return Y.jsx("div",{className:"w-[54px] h-[54px] bg-white/20 rounded-lg flex items-center justify-center",children:Y.jsx("span",{className:"text-white font-bold text-lg",children:"W"})})}function tD(){return Y.jsx("div",{className:"w-[54px] h-[54px] bg-white/20 rounded-lg flex items-center justify-center",children:Y.jsx("span",{className:"text-white font-bold text-lg",children:"N"})})}function nD(){return Y.jsx("div",{className:"w-[54px] h-[54px] bg-white/20 rounded-lg flex items-center justify-center",children:Y.jsx("span",{className:"text-white font-bold text-lg",children:"K"})})}const iD=[{id:1,title:"At Mindstudio, I transformed design complexity into a systematic approach that facilitated the scaling of AI-driven applications.",description:"As the lead designer at MindSet DS, I developed a robust design system from inception, ensuring alignment between design and development, implementing dark mode theming, and optimizing the design, deployment, and evolution of AI-powered tools.",backgroundColor:"#255fb3",textColor:"white",icon:Y.jsx(Q3,{}),image:K3,route:"mindstudio"},{id:2,title:"At Wenia, I created a revolutionary mobile crypto experience that simplified complex financial processes.",description:"As the UI/UX lead, I designed a streamlined mobile application that makes cryptocurrency trading accessible to everyday users, focusing on clear information architecture and intuitive user flows that reduce the complexity of digital asset management.",backgroundColor:"#8b5cf6",textColor:"white",icon:Y.jsx(eD,{}),image:"https://images.unsplash.com/photo-1634542118071-f391e9a0cfb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjcnlwdG8lMjBhcHB8ZW58MXx8fHwxNzU4OTIyODU4fDA&ixlib=rb-4.1.0&q=80&w=1080",route:"wenia"},{id:3,title:"At Treez, I developed a design system that ensured consistent product quality across platforms",description:"As the Design System Lead, I spearheaded the development of Root DS — a scalable and accessible system that effectively addressed years of design debt, enhancing consistency, clarity, and efficiency.",backgroundColor:"#f1f6ea",textColor:"#29292a",descriptionColor:"#6d6d6e",buttonColor:"white",buttonTextColor:"black",icon:Y.jsx(J3,{}),image:Z3,route:"treez"},{id:4,title:"At Nacional Monte de Piedad, I modernized Mexico's largest pawn shop chain through systematic design innovation.",description:"As the lead designer, I developed a comprehensive design system that transformed their digital financial services, creating consistent user experiences across all customer touchpoints while maintaining their trusted brand heritage.",backgroundColor:"#dc2626",textColor:"white",icon:Y.jsx(tD,{}),image:"https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzZXJ2aWNlcyUyMGRlc2lnbnxlbnwxfHx8fDE3NTg5MjI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",route:"nacional"},{id:5,title:"At Klare, I transformed insurance from a bureaucratic maze into an intuitive digital experience.",description:"Leading the UI team, I redesigned the entire life insurance journey, converting a historically slow and complex process into a 100% digital, user-friendly experience that customers could complete with confidence and ease.",backgroundColor:"#059669",textColor:"white",icon:Y.jsx(nD,{}),image:"https://images.unsplash.com/photo-1711185898083-e1f04ff38300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODkyMjg2NXww&ixlib=rb-4.1.0&q=80&w=1080",route:"klare"}];function rD(){const{navigateTo:n}=Lx(),e=Pe.useRef(null),t=gp(e,{once:!0,margin:"-100px"});return Y.jsx("section",{id:"work",className:"work-section",ref:e,children:iD.map((r,o)=>Y.jsx(Gt.div,{initial:{opacity:0,y:40},animate:t?{opacity:1,y:0}:{},transition:{duration:.6,delay:o*.2},className:"work-project-item",style:{backgroundColor:r.backgroundColor},children:Y.jsx("div",{className:"work-project-container",children:Y.jsx("div",{className:"work-project-content",children:Y.jsxs("div",{className:"work-project-inner",children:[Y.jsxs("div",{className:"project-content-container",children:[Y.jsx("div",{className:"project-icon-container",children:r.icon}),Y.jsxs("div",{className:"project-text-section",children:[Y.jsx("div",{className:"project-title-container",children:Y.jsx("h2",{className:"project-title",style:{color:r.textColor},children:r.title})}),Y.jsx("div",{className:"project-description-container",children:Y.jsx("p",{className:"project-description",style:{color:r.descriptionColor||r.textColor},children:r.description})})]}),Y.jsx(Gt.button,{onClick:()=>n(r.route),className:"project-button",style:{backgroundColor:r.buttonColor||"white",color:r.buttonTextColor||"black"},whileHover:{scale:1.05},whileTap:{scale:.95},children:Y.jsx("span",{className:"project-button-text",children:"View Project"})})]}),Y.jsx("div",{className:"project-image-section",children:Y.jsx("div",{className:"project-image-container",children:Y.jsx("img",{alt:`${r.title} preview`,className:"project-image",src:r.image})})})]})})})},r.id))})}function sD(){const n=Pe.useRef(null),e=gp(n,{once:!0,margin:"-100px"});return Y.jsx("section",{id:"about",className:"py-24 bg-muted/30",children:Y.jsx("div",{className:"max-w-4xl mx-auto px-6 lg:px-8",children:Y.jsxs(Gt.div,{ref:n,initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{},transition:{duration:.8},children:[Y.jsx("h2",{className:"mb-8",children:"About"}),Y.jsxs("div",{className:"space-y-6 text-muted-foreground leading-relaxed",children:[Y.jsx("p",{children:"I'm a Senior Product Designer from Santiago, Chile, with extensive experience creating user-friendly solutions for digital products. I specialize in design systems, fintech, and transforming complex processes into intuitive experiences."}),Y.jsx("p",{children:"My approach focuses on systematic design thinking and cross-functional collaboration. I excel at building scalable design systems from inception and leading design teams to deliver consistent, high-quality user experiences."}),Y.jsx("p",{children:"Throughout my career, I've worked across diverse industries including AI platforms, cryptocurrency, cannabis tech, financial services, and insurtech. I'm passionate about making complex technologies accessible and user-friendly."}),Y.jsx("p",{children:"I believe in the power of design systems to scale quality and consistency, and I'm always looking for opportunities to mentor other designers and share knowledge within the design community."})]}),Y.jsx(Gt.div,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:.4},className:"mt-12 pt-8 border-t border-border",children:Y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 text-sm",children:[Y.jsxs("div",{children:[Y.jsx("h4",{className:"mb-3",children:"Tools"}),Y.jsxs("div",{className:"space-y-1 text-muted-foreground",children:[Y.jsx("p",{children:"Figma"}),Y.jsx("p",{children:"Sketch"}),Y.jsx("p",{children:"Principle"}),Y.jsx("p",{children:"Adobe Creative Suite"})]})]}),Y.jsxs("div",{children:[Y.jsx("h4",{className:"mb-3",children:"Skills"}),Y.jsxs("div",{className:"space-y-1 text-muted-foreground",children:[Y.jsx("p",{children:"User Research"}),Y.jsx("p",{children:"Information Architecture"}),Y.jsx("p",{children:"Interaction Design"}),Y.jsx("p",{children:"Design Systems"})]})]}),Y.jsxs("div",{children:[Y.jsx("h4",{className:"mb-3",children:"Industries"}),Y.jsxs("div",{className:"space-y-1 text-muted-foreground",children:[Y.jsx("p",{children:"AI & Machine Learning"}),Y.jsx("p",{children:"Fintech & Crypto"}),Y.jsx("p",{children:"Insurtech"}),Y.jsx("p",{children:"Financial Services"})]})]})]})})]})})})}const oD=[{name:"Email",href:"mailto:nicolas@example.com",description:"nicolas@example.com"},{name:"LinkedIn",href:"https://linkedin.com/in/nicolaslundin",description:"Connect with me"},{name:"Dribbble",href:"https://dribbble.com/nicolaslundin",description:"View my work"},{name:"Resume",href:"#",description:"Download PDF"}];function aD(){const n=Pe.useRef(null),e=gp(n,{once:!0,margin:"-100px"});return Y.jsx("section",{id:"contact",className:"py-24",children:Y.jsx("div",{className:"max-w-4xl mx-auto px-6 lg:px-8",children:Y.jsxs(Gt.div,{ref:n,initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{},transition:{duration:.8},children:[Y.jsx("h2",{className:"mb-8",children:"Let's Connect"}),Y.jsx("p",{className:"text-muted-foreground mb-12 max-w-2xl leading-relaxed",children:"I'm always interested in discussing new opportunities, especially those involving design systems, fintech, or complex product challenges. Feel free to reach out if you'd like to work together or just want to chat about design."}),Y.jsx("div",{className:"space-y-6",children:oD.map((t,r)=>Y.jsxs(Gt.a,{href:t.href,initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:r*.1},whileHover:{x:10},className:"group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors duration-200",children:[Y.jsxs("div",{children:[Y.jsx("div",{className:"font-medium group-hover:text-muted-foreground transition-colors duration-200",children:t.name}),Y.jsx("div",{className:"text-sm text-muted-foreground",children:t.description})]}),Y.jsx(Gt.div,{whileHover:{scale:1.1},className:"w-8 h-8 flex items-center justify-center",children:Y.jsx(UA,{size:16,className:"text-muted-foreground group-hover:text-foreground transition-colors duration-200"})})]},t.name))})]})})})}function y_(){const n=new Date().getFullYear();return Y.jsx("footer",{className:"py-12 border-t border-border",children:Y.jsx("div",{className:"max-w-6xl mx-auto px-6 lg:px-8",children:Y.jsxs(Gt.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"flex flex-col md:flex-row items-center justify-between",children:[Y.jsxs("div",{className:"text-sm text-muted-foreground mb-4 md:mb-0",children:["© ",n," Emily Chen. All rights reserved."]}),Y.jsxs("div",{className:"flex items-center space-x-6 text-sm",children:[Y.jsx(Gt.a,{href:"https://linkedin.com/in/emilychen",whileHover:{y:-2},className:"text-muted-foreground hover:text-foreground transition-colors duration-200",children:"LinkedIn"}),Y.jsx(Gt.a,{href:"https://dribbble.com/emilychen",whileHover:{y:-2},className:"text-muted-foreground hover:text-foreground transition-colors duration-200",children:"Dribbble"}),Y.jsx(Gt.a,{href:"mailto:emily@example.com",whileHover:{y:-2},className:"text-muted-foreground hover:text-foreground transition-colors duration-200",children:"Email"})]})]})})})}function lD(){const[n,e]=Pe.useState({x:0,y:0}),[t,r]=Pe.useState(!1),[o,l]=Pe.useState(!1),[u,c]=Pe.useState(!1);if(Pe.useEffect(()=>{const m=()=>{const M=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)||window.matchMedia("(hover: none)").matches;c(M),M&&(document.body.style.cursor="",document.documentElement.style.cursor="")};if(m(),window.addEventListener("resize",m),u)return()=>{window.removeEventListener("resize",m)};const p=M=>{e({x:M.clientX,y:M.clientY}),t||r(!0);const T=M.target,S=T.matches('a, button, [role="button"], input, textarea, select, [data-testid], [tabindex="0"]')||T.closest('a, button, [role="button"], input, textarea, select, [data-testid], [tabindex="0"]');l(!!S)},v=()=>{r(!1),l(!1)},x=()=>{r(!0)};return document.addEventListener("mousemove",p),document.addEventListener("mouseleave",v),document.addEventListener("mouseenter",x),document.body.style.cursor="none",document.documentElement.style.cursor="none",()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseleave",v),document.removeEventListener("mouseenter",x),window.removeEventListener("resize",m)}},[t,u]),u||!t)return null;const d=o?48:32,h=d/2;return Y.jsx(Gt.div,{className:"fixed pointer-events-none z-[10000] rounded-full",style:{left:n.x-h,top:n.y-h,width:d,height:d,backgroundColor:o?"rgba(0, 0, 0, 0.3)":"white",mixBlendMode:o?"normal":"difference"},animate:{scale:o?[1,1.1,1]:[1,1.05,1],width:d,height:d},transition:{scale:{duration:o?.8:1.5,repeat:1/0,ease:"easeInOut"},width:{type:"spring",stiffness:200,damping:25},height:{type:"spring",stiffness:200,damping:25}}})}const uD=Pe.lazy(()=>Oa(()=>import("./MindStudioCaseStudy-CoGz1I53.js"),__vite__mapDeps([0,1]))),cD=Pe.lazy(()=>Oa(()=>import("./WeniaCaseStudy-CJLN1EBg.js"),__vite__mapDeps([2,1]))),fD=Pe.lazy(()=>Oa(()=>import("./TreezCaseStudy-CciDU8hH.js"),__vite__mapDeps([3,1]))),dD=Pe.lazy(()=>Oa(()=>import("./NacionalCaseStudy-Cl_eZ7a1.js"),__vite__mapDeps([4,1]))),hD=Pe.lazy(()=>Oa(()=>import("./KlareCaseStudy-4Gcmq8Dl.js"),__vite__mapDeps([5,1]))),Dx=Pe.createContext(void 0),Lx=()=>{const n=Pe.useContext(Dx);if(!n)throw new Error("useNavigation must be used within NavigationProvider");return n},pD=({error:n,resetError:e})=>Y.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[60vh] px-4",children:[Y.jsx("h2",{className:"mb-4",children:"Something went wrong"}),Y.jsx("p",{className:"text-muted-foreground mb-4 text-center",children:n.message||"An unexpected error occurred"}),Y.jsx("button",{onClick:e,className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity",children:"Try again"})]});function mD(){const[n,e]=Pe.useState("home"),[t,r]=Pe.useState(null),o=d=>{try{r(null),e(d),window.scrollTo({top:0,behavior:"smooth"})}catch(h){r(h instanceof Error?h:new Error("Navigation failed"))}},l=()=>{try{r(null),e("home"),setTimeout(()=>{const d=document.getElementById("work");d&&d.scrollIntoView({behavior:"smooth"})},100)}catch(d){r(d instanceof Error?d:new Error("Navigation to work failed"))}},u=()=>{r(null),e("home")};Pe.useEffect(()=>{if(n==="home"){const d=m=>{m.preventDefault();const v=m.currentTarget.getAttribute("href");if(v){const x=document.querySelector(v);x&&x.scrollIntoView({behavior:"smooth"})}},h=document.querySelectorAll('a[href^="#"]');return h.forEach(m=>{m.addEventListener("click",d)}),()=>{h.forEach(m=>{m.removeEventListener("click",d)})}}},[n]);const c=()=>{const d=()=>Y.jsx("div",{className:"flex items-center justify-center min-h-[60vh]",children:Y.jsx("div",{className:"animate-pulse",children:"Loading..."})});switch(n){case"mindstudio":return Y.jsx(Pe.Suspense,{fallback:Y.jsx(d,{}),children:Y.jsx(uD,{})});case"wenia":return Y.jsx(Pe.Suspense,{fallback:Y.jsx(d,{}),children:Y.jsx(cD,{})});case"treez":return Y.jsx(Pe.Suspense,{fallback:Y.jsx(d,{}),children:Y.jsx(fD,{})});case"nacional":return Y.jsx(Pe.Suspense,{fallback:Y.jsx(d,{}),children:Y.jsx(dD,{})});case"klare":return Y.jsx(Pe.Suspense,{fallback:Y.jsx(d,{}),children:Y.jsx(hD,{})});case"home":default:return Y.jsxs("main",{children:[Y.jsx($3,{}),Y.jsx(rD,{}),Y.jsx(sD,{}),Y.jsx(aD,{})]})}};return t?Y.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[Y.jsx(Ev,{}),Y.jsx(pD,{error:t,resetError:u}),Y.jsx(y_,{})]}):Y.jsx(Dx.Provider,{value:{currentRoute:n,navigateTo:o,navigateToWork:l},children:Y.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[Y.jsx(lD,{}),Y.jsx(Ev,{}),c(),Y.jsx(y_,{}),Y.jsx(KM,{position:"bottom-right",duration:4e3})]})})}_M.createRoot(document.getElementById("root")).render(Y.jsx(mD,{}));export{vp as c,Y as j,Gt as m,Pe as r,Lx as u};
