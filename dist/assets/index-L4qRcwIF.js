(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Xp=()=>!0;class Yp{constructor(t){this.detect=t,this.props={}}registerProperty(t,e,i,s){this.props[t]={get:e,set:i,gate:s||Xp}}}class qp{constructor(t){this.detect=t||null,this.targetAdapters=[],this.propertyResolvers=[]}registerTargetAdapter(t){const e=new Yp(t);return this.targetAdapters.push(e),e}registerPropertyResolver(t){this.propertyResolvers.indexOf(t)===-1&&this.propertyResolvers.push(t)}}const ia=[];function $p(n){const t=new qp(n);return ia.push(t),t}function qd(n,t){if(!n)return null;const e=ia.length;t:for(let i=0;i<e;i++){const s=ia[i];if(s.detect&&!s.detect(n))continue;const r=s.targetAdapters;for(let o=0,a=r.length;o<a;o++){const c=r[o];if(c.detect(n)){const l=c.props[t];if(l&&(!l.gate||l.gate(n)))return l;break t}}}for(let i=0;i<e;i++){const s=ia[i];if(s.detect&&!s.detect(n))continue;const r=s.propertyResolvers;for(let o=0,a=r.length;o<a;o++){const c=r[o](n,t);if(c)return c}}return null}const Zp=n=>!!(n&&!n.nodeType&&(n.isObject3D||n.isMaterial||n.isTexture||n.isFog||n.isFogExp2||n.isUniformNode||n.isColor||n.isVector2||n.isVector3||n.isVector4||n.isAnimejsInstanceProxy)),ys=$p(Zp);const qi=typeof window<"u",fi=qi?window:null,me=qi?document:null,Te={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},le={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},gn={NONE:0,AUTO:1,FORCE:2},Oe={replace:0,none:1,blend:2},qh=Symbol(),nr=Symbol(),$d=Symbol(),Na=Symbol(),Kp=Symbol(),oe=1e-11,Ln=1e12,pn=1e3,zc=240,gs="",Jp="var(",mo=[],Zd=(()=>{const n=new Map;return n.set("x","translateX"),n.set("y","translateY"),n.set("z","translateZ"),n})(),ga=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],jp=ga.reduce((n,t)=>({...n,[t]:t+"("}),{}),we=()=>{},Qp=n=>n,tm=/\)\s*[-.\d]/,em=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,nm=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,im=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,sm=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,rm=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,$h=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,Kd=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,om=/([a-z])([A-Z])/g,am=/(\*=|\+=|-=)/,cm=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;const _a={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:zc,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:pn,delay:0,loopDelay:0,ease:"out(2)",composition:Oe.replace,modifier:Qp,onBegin:we,onBeforeUpdate:we,onUpdate:we,onLoop:we,onPause:we,onComplete:we,onRender:we},lm={root:me},he={defaults:_a,precision:4,timeScale:1,tickThreshold:200,editor:null},Jd={version:"4.5.0",engine:null};qi&&(fi.AnimeJS||(fi.AnimeJS=[]),fi.AnimeJS.push(Jd));const jd=n=>n.replace(om,"$1-$2").toLowerCase(),Kn=(n,t)=>n.indexOf(t)===0,Hi=Date.now,tn=Array.isArray,on=n=>n&&n.constructor===Object,In=n=>typeof n=="number"&&!isNaN(n),Si=n=>typeof n=="string",Qn=n=>typeof n=="function",Nt=n=>typeof n>"u",$s=n=>Nt(n)||n===null,Qd=n=>qi&&n instanceof SVGElement,tf=n=>em.test(n),ef=n=>Kn(n,"rgb"),nf=n=>Kn(n,"hsl"),hm=n=>tf(n)||(ef(n)||nf(n))&&(n[n.length-1]===")"||!tm.test(n)),Ir=n=>!he.defaults.hasOwnProperty(n),um=["opacity","rotate","overflow","color"],dm=(n,t)=>{if(um.includes(t))return!1;if(n.getAttribute(t)||t in n){if(t==="scale"){const e=n.parentNode;return e&&e.tagName==="filter"}return!0}},qa=n=>Si(n)?parseFloat(n):n,es=Math.pow,Xn=Math.sqrt,Yl=Math.sin,ql=Math.cos,Un=Math.abs,go=Math.exp,wr=Math.floor,fm=Math.asin,Zh=Math.max,$a=Math.atan2,pi=Math.PI,Vc=Math.round,Ht=(n,t,e)=>n<t?t:n>e?e:n,Bt=(n,t)=>{if(t<0)return n;if(!t)return Vc(n);const e=10**t;return Vc(n*e)/e},Cs=(n,t)=>tn(t)?t.reduce((e,i)=>Un(i-n)<Un(e-n)?i:e):t?Vc(n/t)*t:n,sa=(n,t,e)=>e===1?t:e===0?n:n+(t-n)*e,Ua=n=>n===1/0?Ln:n===-1/0?-Ln:n,Zs=n=>n<=oe?oe:Ua(Bt(n,11)),$e=n=>tn(n)?[...n]:n,va=(n,t)=>{const e={...n};for(let i in t){const s=n[i];e[i]=Nt(s)?t[i]:s}return e},be=(n,t,e,i="_prev",s="_next")=>{let r=n._head,o=s;for(e&&(r=n._tail,o=i);r;){const a=r[o];t(r),r=a}},os=(n,t,e="_prev",i="_next")=>{const s=t[e],r=t[i];s?s[i]=r:n._head=r,r?r[e]=s:n._tail=s,t[e]=null,t[i]=null},as=(n,t,e,i="_prev",s="_next")=>{let r=n._tail;for(;r&&e&&e(r,t);)r=r[i];const o=r?r[s]:n._head;r?r[s]=t:n._head=t,o?o[i]=t:n._tail=t,t[i]=r,t[s]=o};const _o=(n,t,e,i,s)=>i+(n-t)/(e-t)*(s-i),On=n=>n*Math.PI/180,Gi=n=>n*180/Math.PI;const $l="184",pm=0,Kh=1,mm=2,ra=1,gm=2,Rr=3,Wi=0,an=1,_n=2,gi=0,Ks=1,Xr=2,Jh=3,jh=4,_m=5,ns=100,vm=101,xm=102,Sm=103,Mm=104,ym=200,Em=201,bm=202,Tm=203,Gc=204,kc=205,Am=206,wm=207,Rm=208,Cm=209,Pm=210,Lm=211,Dm=212,Im=213,Nm=214,Hc=0,Wc=1,Xc=2,ir=3,Yc=4,qc=5,$c=6,Zc=7,sf=0,Um=1,Fm=2,Bn=0,rf=1,of=2,af=3,cf=4,lf=5,hf=6,uf=7,df=300,_s=301,sr=302,Za=303,Ka=304,Fa=306,Kc=1e3,mi=1001,Jc=1002,We=1003,Om=1004,vo=1005,Ke=1006,Ja=1007,cs=1008,vn=1009,ff=1010,pf=1011,Yr=1012,Zl=1013,ti=1014,qn=1015,Mi=1016,Kl=1017,Jl=1018,qr=1020,mf=35902,gf=35899,_f=1021,vf=1022,Fn=1023,yi=1026,ls=1027,xf=1028,jl=1029,vs=1030,Ql=1031,th=1033,oa=33776,aa=33777,ca=33778,la=33779,jc=35840,Qc=35841,tl=35842,el=35843,nl=36196,il=37492,sl=37496,rl=37488,ol=37489,xa=37490,al=37491,cl=37808,ll=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,_l=37817,vl=37818,xl=37819,Sl=37820,Ml=37821,yl=36492,El=36494,bl=36495,Tl=36283,Al=36284,Sa=36285,wl=36286,Bm=3200,Rl=0,zm=1,zi="",Fe="srgb",Ma="srgb-linear",ya="linear",ge="srgb",Ps=7680,Qh=519,Vm=512,Gm=513,km=514,eh=515,Hm=516,Wm=517,nh=518,Xm=519,tu=35044,eu="300 es",$n=2e3,$r=2001;function Ym(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qm(){const n=Ea("canvas");return n.style.display="block",n}const nu={};function iu(...n){const t="THREE."+n.shift();console.log(t,...n)}function Sf(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qt(...n){n=Sf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function de(...n){n=Sf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Cl(...n){const t=n.join(" ");t in nu||(nu[t]=!0,qt(...n))}function $m(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Zm={[Hc]:Wc,[Xc]:$c,[Yc]:Zc,[ir]:qc,[Wc]:Hc,[$c]:Xc,[Zc]:Yc,[qc]:ir};class Es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let su=1234567;const Js=Math.PI/180,Zr=180/Math.PI;function bs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function ce(n,t,e){return Math.max(t,Math.min(e,n))}function ih(n,t){return(n%t+t)%t}function Km(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Jm(n,t,e){return n!==t?(e-n)/(t-n):0}function Nr(n,t,e){return(1-e)*n+e*t}function jm(n,t,e,i){return Nr(n,t,1-Math.exp(-e*i))}function Qm(n,t=1){return t-Math.abs(ih(n,t*2)-t)}function t0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function e0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function n0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function i0(n,t){return n+Math.random()*(t-n)}function s0(n){return n*(.5-Math.random())}function r0(n){n!==void 0&&(su=n);let t=su+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function o0(n){return n*Js}function a0(n){return n*Zr}function c0(n){return(n&n-1)===0&&n!==0}function l0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function h0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function u0(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),h=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ys(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ee={DEG2RAD:Js,RAD2DEG:Zr,generateUUID:bs,clamp:ce,euclideanModulo:ih,mapLinear:Km,inverseLerp:Jm,lerp:Nr,damp:jm,pingpong:Qm,smoothstep:t0,smootherstep:e0,randInt:n0,randFloat:i0,randFloatSpread:s0,seededRandom:r0,degToRad:o0,radToDeg:a0,isPowerOfTwo:c0,ceilPowerOfTwo:l0,floorPowerOfTwo:h0,setQuaternionFromProperEuler:u0,normalize:je,denormalize:Ys},Nh=class Nh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nh.prototype.isVector2=!0;let bt=Nh;class Ts{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(d!==v||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*v;m<0&&(h=-h,f=-f,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const S=Math.acos(m),M=Math.sin(S);p=Math.sin(p*S)/M,a=Math.sin(a*S)/M,c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+v*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+v*a;const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Uh=class Uh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ru.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ru.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uh.prototype.isVector3=!0;let A=Uh;const ja=new A,ru=new Ts,Fh=class Fh{constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],S=s[1],M=s[4],y=s[7],C=s[2],T=s[5],L=s[8];return r[0]=o*v+a*S+c*C,r[3]=o*m+a*M+c*T,r[6]=o*p+a*y+c*L,r[1]=l*v+u*S+d*C,r[4]=l*m+u*M+d*T,r[7]=l*p+u*y+d*L,r[2]=h*v+f*S+g*C,r[5]=h*m+f*M+g*T,r[8]=h*p+f*y+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*l-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=h*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Fh.prototype.isMatrix3=!0;let ne=Fh;const Qa=new ne,ou=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),au=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d0(){const n={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ma]:{primaries:t,whitePoint:i,transfer:ya,toXYZ:ou,fromXYZ:au,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:ou,fromXYZ:au,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),n}const ue=d0();function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ls;class f0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ls===void 0&&(Ls=Ea("canvas")),Ls.width=t.width,Ls.height=t.height;const s=Ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ls}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ea("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_i(e[i]/255)*255):e[i]=_i(e[i]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let p0=0;class sh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tc(s[o].image)):r.push(tc(s[o]))}else r=tc(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function tc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?f0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}let m0=0;const ec=new A;class en extends Es{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,i=mi,s=mi,r=Ke,o=cs,a=Fn,c=vn,l=en.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=bs(),this.name="",this.source=new sh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ec).x}get height(){return this.source.getSize(ec).y}get depth(){return this.source.getSize(ec).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==df)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kc:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Jc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kc:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Jc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=df;en.DEFAULT_ANISOTROPY=1;const Oh=class Oh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,y=(f+1)/2,C=(p+1)/2,T=(u+h)/4,L=(d+v)/4,x=(g+m)/4;return M>y&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=L/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=x/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=L/r,s=x/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-v)/S,this.z=(h-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oh.prototype.isVector4=!0;let Le=Oh;class g0 extends Es{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new en(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new sh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends g0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Mf extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _0 extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ia=class Ia{constructor(t,e,i,s,r,o,a,c,l,u,d,h,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,d,h,f,g,v,m)}set(t,e,i,s,r,o,a,c,l,u,d,h,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ia().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Ds.setFromMatrixColumn(t,0).length(),r=1/Ds.setFromMatrixColumn(t,1).length(),o=1/Ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,v=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,v=l*d;e[0]=h+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=v+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,v=l*d;e[0]=h-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,v=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+v,e[1]=c*d,e[5]=v*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-v*d}else if(t.order==="XZY"){const h=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+v,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(v0,t,x0)}lookAt(t,e,i){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),Ci.crossVectors(i,un),Ci.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ci.crossVectors(i,un)),Ci.normalize(),xo.crossVectors(un,Ci),s[0]=Ci.x,s[4]=xo.x,s[8]=un.x,s[1]=Ci.y,s[5]=xo.y,s[9]=un.y,s[2]=Ci.z,s[6]=xo.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],M=i[7],y=i[11],C=i[15],T=s[0],L=s[4],x=s[8],w=s[12],I=s[1],R=s[5],U=s[9],G=s[13],X=s[2],D=s[6],z=s[10],F=s[14],Z=s[3],V=s[7],tt=s[11],ct=s[15];return r[0]=o*T+a*I+c*X+l*Z,r[4]=o*L+a*R+c*D+l*V,r[8]=o*x+a*U+c*z+l*tt,r[12]=o*w+a*G+c*F+l*ct,r[1]=u*T+d*I+h*X+f*Z,r[5]=u*L+d*R+h*D+f*V,r[9]=u*x+d*U+h*z+f*tt,r[13]=u*w+d*G+h*F+f*ct,r[2]=g*T+v*I+m*X+p*Z,r[6]=g*L+v*R+m*D+p*V,r[10]=g*x+v*U+m*z+p*tt,r[14]=g*w+v*G+m*F+p*ct,r[3]=S*T+M*I+y*X+C*Z,r[7]=S*L+M*R+y*D+C*V,r[11]=S*x+M*U+y*z+C*tt,r[15]=S*w+M*G+y*F+C*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],S=c*f-l*h,M=a*f-l*d,y=a*h-c*d,C=o*f-l*u,T=o*h-c*u,L=o*d-a*u;return e*(v*S-m*M+p*y)-i*(g*S-m*C+p*T)+s*(g*M-v*C+p*L)-r*(g*y-v*T+m*L)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=e*a-i*o,M=e*c-s*o,y=e*l-r*o,C=i*c-s*a,T=i*l-r*a,L=s*l-r*c,x=u*v-d*g,w=u*m-h*g,I=u*p-f*g,R=d*m-h*v,U=d*p-f*v,G=h*p-f*m,X=S*G-M*U+y*R+C*I-T*w+L*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/X;return t[0]=(a*G-c*U+l*R)*D,t[1]=(s*U-i*G-r*R)*D,t[2]=(v*L-m*T+p*C)*D,t[3]=(h*T-d*L-f*C)*D,t[4]=(c*I-o*G-l*w)*D,t[5]=(e*G-s*I+r*w)*D,t[6]=(m*y-g*L-p*M)*D,t[7]=(u*L-h*y+f*M)*D,t[8]=(o*U-a*I+l*x)*D,t[9]=(i*I-e*U-r*x)*D,t[10]=(g*T-v*y+p*S)*D,t[11]=(d*y-u*T-f*S)*D,t[12]=(a*w-o*R-c*x)*D,t[13]=(e*R-i*w+s*x)*D,t[14]=(v*M-g*C-m*S)*D,t[15]=(u*C-d*M+h*S)*D,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,v=o*u,m=o*d,p=a*d,S=c*l,M=c*u,y=c*d,C=i.x,T=i.y,L=i.z;return s[0]=(1-(v+p))*C,s[1]=(f+y)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(h+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+M)*L,s[9]=(m-S)*L,s[10]=(1-(h+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ds.set(s[0],s[1],s[2]).length();const a=Ds.set(s[4],s[5],s[6]).length(),c=Ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Rn.copy(this);const l=1/o,u=1/a,d=1/c;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,e.setFromRotationMatrix(Rn),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=$n,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===$r)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=$n,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===$n)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===$r)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ia.prototype.isMatrix4=!0;let Re=Ia;const Ds=new A,Rn=new Re,v0=new A(0,0,0),x0=new A(1,1,1),Ci=new A,xo=new A,un=new A,cu=new Re,lu=new Ts;class Ei{constructor(t=0,e=0,i=0,s=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lu.setFromEuler(this),this.setFromQuaternion(lu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class yf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let S0=0;const hu=new A,Is=new Ts,ri=new Re,So=new A,vr=new A,M0=new A,y0=new Ts,uu=new A(1,0,0),du=new A(0,1,0),fu=new A(0,0,1),pu={type:"added"},E0={type:"removed"},Ns={type:"childadded",child:null},nc={type:"childremoved",child:null};class Be extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new A,e=new Ei,i=new Ts,s=new A(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new ne}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(uu,t)}rotateY(t){return this.rotateOnAxis(du,t)}rotateZ(t){return this.rotateOnAxis(fu,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uu,t)}translateY(t){return this.translateOnAxis(du,t)}translateZ(t){return this.translateOnAxis(fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?So.copy(t):So.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(vr,So,this.up):ri.lookAt(So,vr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(ri),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(de("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pu),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E0),nc.child=t,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pu),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,M0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,y0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Be.DEFAULT_UP=new A(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class En extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b0={type:"move"};class ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new En;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function sc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ue.workingColorSpace){if(t=ih(t,1),e=ce(e,0,1),i=ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=sc(o,r,t+1/3),this.g=sc(o,r,t),this.b=sc(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function i(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const i=Ef[t.toLowerCase()];return i!==void 0?this.setHex(i,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ue.workingToColorSpace(qe.copy(this),t),Math.round(ce(qe.r*255,0,255))*65536+Math.round(ce(qe.g*255,0,255))*256+Math.round(ce(qe.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(qe.copy(this),e);const i=qe.r,s=qe.g,r=qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Fe){ue.workingToColorSpace(qe.copy(this),t);const e=qe.r,i=qe.g,s=qe.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Mo);const i=Nr(Pi.h,Mo.h,e),s=Nr(Pi.s,Mo.s,e),r=Nr(Pi.l,Mo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new $t;$t.NAMES=Ef;class rh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new rh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class T0 extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Cn=new A,oi=new A,rc=new A,ai=new A,Us=new A,Fs=new A,mu=new A,oc=new A,ac=new A,cc=new A,lc=new Le,hc=new Le,uc=new Le;class Mn{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Cn.subVectors(s,e),oi.subVectors(i,e),rc.subVectors(t,e);const o=Cn.dot(Cn),a=Cn.dot(oi),c=Cn.dot(rc),l=oi.dot(oi),u=oi.dot(rc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return lc.setScalar(0),hc.setScalar(0),uc.setScalar(0),lc.fromBufferAttribute(t,e),hc.fromBufferAttribute(t,i),uc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lc,r.x),o.addScaledVector(hc,r.y),o.addScaledVector(uc,r.z),o}static isFrontFacing(t,e,i,s){return Cn.subVectors(i,e),oi.subVectors(t,e),Cn.cross(oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Cn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Us.subVectors(s,i),Fs.subVectors(r,i),oc.subVectors(t,i);const c=Us.dot(oc),l=Fs.dot(oc);if(c<=0&&l<=0)return e.copy(i);ac.subVectors(t,s);const u=Us.dot(ac),d=Fs.dot(ac);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Us,o);cc.subVectors(t,r);const f=Us.dot(cc),g=Fs.dot(cc);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Fs,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return mu.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(mu,a);const p=1/(m+v+h);return o=v*p,a=h*p,e.copy(i).addScaledVector(Us,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class to{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(t.matrixWorld),this.union(yo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),Eo.subVectors(this.max,xr),Os.subVectors(t.a,xr),Bs.subVectors(t.b,xr),zs.subVectors(t.c,xr),Li.subVectors(Bs,Os),Di.subVectors(zs,Bs),Zi.subVectors(Os,zs);let e=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-Zi.z,Zi.y,Li.z,0,-Li.x,Di.z,0,-Di.x,Zi.z,0,-Zi.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-Zi.y,Zi.x,0];return!dc(e,Os,Bs,zs,Eo)||(e=[1,0,0,0,1,0,0,0,1],!dc(e,Os,Bs,zs,Eo))?!1:(bo.crossVectors(Li,Di),e=[bo.x,bo.y,bo.z],dc(e,Os,Bs,zs,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ci=[new A,new A,new A,new A,new A,new A,new A,new A],Pn=new A,yo=new to,Os=new A,Bs=new A,zs=new A,Li=new A,Di=new A,Zi=new A,xr=new A,Eo=new A,bo=new A,Ki=new A;function dc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=t.dot(Ki),l=e.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ue=new A,To=new bt;let A0=0;class jn extends Es{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:A0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=tu,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)To.fromBufferAttribute(this,e),To.applyMatrix3(t),this.setXY(e,To.x,To.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tu&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class bf extends jn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Tf extends jn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class _e extends jn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const w0=new to,Sr=new A,fc=new A;class Oa{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):w0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(fc)),this.expandByPoint(Sr.copy(t.center).sub(fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let R0=0;const Sn=new Re,pc=new Be,Vs=new A,dn=new to,Mr=new to,ke=new A;class De extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ym(t)?Tf:bf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,i){return Sn.makeTranslation(t,e,i),this.applyMatrix4(Sn),this}scale(t,e,i){return Sn.makeScale(t,e,i),this.applyMatrix4(Sn),this}lookAt(t){return pc.lookAt(t),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(dn.min,Mr.min),dn.expandByPoint(ke),ke.addVectors(dn.max,Mr.max),dn.expandByPoint(ke)):(dn.expandByPoint(Mr.min),dn.expandByPoint(Mr.max))}dn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ke.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(t,l),ke.add(Vs)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new A,c[x]=new A;const l=new A,u=new A,d=new A,h=new bt,f=new bt,g=new bt,v=new A,m=new A;function p(x,w,I){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,I),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,I),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[x].add(v),a[w].add(v),a[I].add(v),c[x].add(m),c[w].add(m),c[I].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,w=S.length;x<w;++x){const I=S[x],R=I.start,U=I.count;for(let G=R,X=R+U;G<X;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const M=new A,y=new A,C=new A,T=new A;function L(x){C.fromBufferAttribute(s,x),T.copy(C);const w=a[x];M.copy(w),M.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(T,w);const R=y.dot(c[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,R)}for(let x=0,w=S.length;x<w;++x){const I=S[x],R=I.start,U=I.count;for(let G=R,X=R+U;G<X;G+=3)L(t.getX(G+0)),L(t.getX(G+1)),L(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,u=new A,d=new A;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new jn(h,u,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let C0=0;class dr extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Ks,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=kc,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gc&&(i.blendSrc=this.blendSrc),this.blendDst!==kc&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const li=new A,mc=new A,Ao=new A,Ii=new A,gc=new A,wo=new A,_c=new A;class Af{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){mc.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(mc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ao),a=Ii.dot(this.direction),c=-Ii.dot(Ao),l=Ii.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(mc).addScaledVector(Ao,h),f}intersectSphere(t,e){li.subVectors(t.center,this.origin);const i=li.dot(this.direction),s=li.dot(li)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,i,s,r){gc.subVectors(e,t),wo.subVectors(i,t),_c.crossVectors(gc,wo);let o=this.direction.dot(_c),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);const c=a*this.direction.dot(wo.crossVectors(Ii,wo));if(c<0)return null;const l=a*this.direction.dot(gc.cross(Ii));if(l<0||c+l>o)return null;const u=-a*Ii.dot(_c);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ii extends dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gu=new Re,Ji=new Af,Ro=new Oa,_u=new A,Co=new A,Po=new A,Lo=new A,vc=new A,Do=new A,vu=new A,Io=new A;class Me extends Be{constructor(t=new De,e=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(vc.fromBufferAttribute(d,t),o?Do.addScaledVector(vc,u):Do.addScaledVector(vc.sub(e),u))}e.add(Do)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),Ji.copy(t.ray).recast(t.near),!(Ro.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Ro,_u)===null||Ji.origin.distanceToSquared(_u)>(t.far-t.near)**2))&&(gu.copy(r).invert(),Ji.copy(t.ray).applyMatrix4(gu),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,C=M;y<C;y+=3){const T=a.getX(y),L=a.getX(y+1),x=a.getX(y+2);s=No(this,p,t,i,l,u,d,T,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=No(this,o,t,i,l,u,d,S,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,C=M;y<C;y+=3){const T=y,L=y+1,x=y+2;s=No(this,p,t,i,l,u,d,T,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=m,M=m+1,y=m+2;s=No(this,o,t,i,l,u,d,S,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function P0(n,t,e,i,s,r,o,a){let c;if(t.side===an?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Wi,a),c===null)return null;Io.copy(a),Io.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Io);return l<e.near||l>e.far?null:{distance:l,point:Io.clone(),object:n}}function No(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Co),n.getVertexPosition(c,Po),n.getVertexPosition(l,Lo);const u=P0(n,t,e,i,Co,Po,Lo,vu);if(u){const d=new A;Mn.getBarycoord(vu,Co,Po,Lo,d),s&&(u.uv=Mn.getInterpolatedAttribute(s,a,c,l,d,new bt)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,a,c,l,d,new bt)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,c,l,d,new A),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new A,materialIndex:0};Mn.getNormal(Co,Po,Lo,h.normal),u.face=h,u.barycoord=d}return u}class L0 extends en{constructor(t=null,e=1,i=1,s,r,o,a,c,l=We,u=We,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xc=new A,D0=new A,I0=new ne;class Oi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=xc.subVectors(i,e).cross(D0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(xc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||I0.getNormalMatrix(t),s=this.coplanarPoint(xc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Oa,N0=new bt(.5,.5),Uo=new A;class oh{constructor(t=new Oi,e=new Oi,i=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=$n,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],S=r[12],M=r[13],y=r[14],C=r[15];if(s[0].setComponents(l-o,f-u,p-g,C-S).normalize(),s[1].setComponents(l+o,f+u,p+g,C+S).normalize(),s[2].setComponents(l+a,f+d,p+v,C+M).normalize(),s[3].setComponents(l-a,f-d,p-v,C-M).normalize(),i)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(l-c,f-h,p-m,C-y).normalize();else if(s[4].setComponents(l-c,f-h,p-m,C-y).normalize(),e===$n)s[5].setComponents(l+c,f+h,p+m,C+y).normalize();else if(e===$r)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);const e=N0.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Uo.x=s.normal.x>0?t.max.x:t.min.x,Uo.y=s.normal.y>0?t.max.y:t.min.y,Uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bi extends dr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ba=new A,Ta=new A,xu=new Re,yr=new Af,Fo=new Oa,Sc=new A,Su=new A;class Ba extends Be{constructor(t=new De,e=new bi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ba.fromBufferAttribute(e,s-1),Ta.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ba.distanceTo(Ta);t.setAttribute("lineDistance",new _e(i,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,t.ray.intersectsSphere(Fo)===!1)return;xu.copy(s).invert(),yr.copy(t.ray).applyMatrix4(xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),S=u.getX(v+1),M=Oo(this,t,yr,c,p,S,v);M&&e.push(M)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Oo(this,t,yr,c,v,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=Oo(this,t,yr,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=Oo(this,t,yr,c,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oo(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(ba.fromBufferAttribute(a,s),Ta.fromBufferAttribute(a,r),e.distanceSqToSegment(ba,Ta,Sc,Su)>i)return;Sc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Sc);if(!(l<t.near||l>t.far))return{distance:l,point:Su.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Mu=new A,yu=new A;class Qs extends Ba{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Mu.fromBufferAttribute(e,s),yu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Mu.distanceTo(yu);t.setAttribute("lineDistance",new _e(i,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wf extends en{constructor(t=[],e=_s,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rr extends en{constructor(t,e,i=ti,s,r,o,a=We,c=We,l,u=yi,d=1){if(u!==yi&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class U0 extends rr{constructor(t,e=ti,i=_s,s,r,o=We,a=We,c,l=yi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Rf extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cn extends De{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(d,2));function g(v,m,p,S,M,y,C,T,L,x,w){const I=y/L,R=C/x,U=y/2,G=C/2,X=T/2,D=L+1,z=x+1;let F=0,Z=0;const V=new A;for(let tt=0;tt<z;tt++){const ct=tt*R-G;for(let vt=0;vt<D;vt++){const Gt=vt*I-U;V[v]=Gt*S,V[m]=ct*M,V[p]=X,l.push(V.x,V.y,V.z),V[v]=0,V[m]=0,V[p]=T>0?1:-1,u.push(V.x,V.y,V.z),d.push(vt/L),d.push(1-tt/x),F+=1}}for(let tt=0;tt<x;tt++)for(let ct=0;ct<L;ct++){const vt=h+ct+D*tt,Gt=h+ct+D*(tt+1),Yt=h+(ct+1)+D*(tt+1),Ut=h+(ct+1)+D*tt;c.push(vt,Gt,Ut),c.push(Gt,Yt,Ut),Z+=6}a.addGroup(f,Z,w),f+=Z,h+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class eo extends De{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const v=[],m=i/2;let p=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new _e(d,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(f,2));function S(){const y=new A,C=new A;let T=0;const L=(e-t)/i;for(let x=0;x<=r;x++){const w=[],I=x/r,R=I*(e-t)+t;for(let U=0;U<=s;U++){const G=U/s,X=G*c+a,D=Math.sin(X),z=Math.cos(X);C.x=R*D,C.y=-I*i+m,C.z=R*z,d.push(C.x,C.y,C.z),y.set(D,L,z).normalize(),h.push(y.x,y.y,y.z),f.push(G,1-I),w.push(g++)}v.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){const I=v[w][x],R=v[w+1][x],U=v[w+1][x+1],G=v[w][x+1];(t>0||w!==0)&&(u.push(I,R,G),T+=3),(e>0||w!==r-1)&&(u.push(R,U,G),T+=3)}l.addGroup(p,T,0),p+=T}function M(y){const C=g,T=new bt,L=new A;let x=0;const w=y===!0?t:e,I=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*I,0),h.push(0,I,0),f.push(.5,.5),g++;const R=g;for(let U=0;U<=s;U++){const X=U/s*c+a,D=Math.cos(X),z=Math.sin(X);L.x=w*z,L.y=m*I,L.z=w*D,d.push(L.x,L.y,L.z),h.push(0,I,0),T.x=D*.5+.5,T.y=z*.5*I+.5,f.push(T.x,T.y),g++}for(let U=0;U<s;U++){const G=C+U,X=R+U;y===!0?u.push(X,X+1,G):u.push(X+1,X,G),x+=3}l.addGroup(p,x,y===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends eo{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ds(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Bo=new A,zo=new A,Mc=new A,Vo=new Mn;class ha extends De{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Js*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:p}=Vo;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Vo.getNormal(Mc),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){const M=(S+1)%3,y=d[S],C=d[M],T=Vo[u[S]],L=Vo[u[M]],x=`${y}_${C}`,w=`${C}_${y}`;w in h&&h[w]?(Mc.dot(h[w].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(L.x,L.y,L.z)),h[w]=null):x in h||(h[x]={index0:l[S],index1:l[M],normal:Mc.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:m}=h[g];Bo.fromBufferAttribute(a,v),zo.fromBufferAttribute(a,m),f.push(Bo.x,Bo.y,Bo.z),f.push(zo.x,zo.y,zo.z)}this.setAttribute("position",new _e(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new bt:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new A,s=[],r=[],o=[],a=new A,c=new Re;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ah extends si{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new bt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class F0 extends ah{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ch(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Eu=new A,bu=new A,yc=new ch,Ec=new ch,bc=new ch;class no extends si{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new A){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(bu.subVectors(s[0],s[1]).add(s[0]),l=bu);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Eu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Eu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),yc.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,v,m),Ec.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,v,m),bc.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Ec.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),bc.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(yc.calc(c),Ec.calc(c),bc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tu(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function O0(n,t){const e=1-n;return e*e*t}function B0(n,t){return 2*(1-n)*n*t}function z0(n,t){return n*n*t}function Ur(n,t,e,i){return O0(n,t)+B0(n,e)+z0(n,i)}function V0(n,t){const e=1-n;return e*e*e*t}function G0(n,t){const e=1-n;return 3*e*e*n*t}function k0(n,t){return 3*(1-n)*n*n*t}function H0(n,t){return n*n*n*t}function Fr(n,t,e,i,s){return V0(n,t)+G0(n,e)+k0(n,i)+H0(n,s)}class Cf extends si{constructor(t=new bt,e=new bt,i=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new bt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fr(t,s.x,r.x,o.x,a.x),Fr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class W0 extends si{constructor(t=new A,e=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new A){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fr(t,s.x,r.x,o.x,a.x),Fr(t,s.y,r.y,o.y,a.y),Fr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pf extends si{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class X0 extends si{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lf extends si{constructor(t=new bt,e=new bt,i=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new bt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Df extends si{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y),Ur(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class If extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Tu(a,c.x,l.x,u.x,d.x),Tu(a,c.y,l.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new bt().fromArray(s))}return this}}var Aa=Object.freeze({__proto__:null,ArcCurve:F0,CatmullRomCurve3:no,CubicBezierCurve:Cf,CubicBezierCurve3:W0,EllipseCurve:ah,LineCurve:Pf,LineCurve3:X0,QuadraticBezierCurve:Lf,QuadraticBezierCurve3:Df,SplineCurve:If});class Y0 extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Aa[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Aa[s.type]().fromJSON(s))}return this}}class Au extends Y0{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Pf(this.currentPoint.clone(),new bt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Lf(this.currentPoint.clone(),new bt(t,e),new bt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Cf(this.currentPoint.clone(),new bt(t,e),new bt(i,s),new bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new If(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new ah(t,e,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class io extends Au{constructor(t){super(t),this.uuid=bs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Au().fromJSON(s))}return this}}function q0(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Nf(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=j0(n,t,r,e)),n.length>80*e){a=n[0],c=n[1];let u=a,d=c;for(let h=e;h<s;h+=e){const f=n[h],g=n[h+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Kr(r,o,e,a,c,l,0),o}function Nf(n,t,e,i,s){let r;if(s===lg(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=wu(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=wu(o/i|0,n[o],n[o+1],r);return r&&or(r,r.next)&&(jr(r),r=r.next),r}function xs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(or(e,e.next)||Ce(e.prev,e,e.next)===0)){if(jr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Kr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&ig(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Z0(n,i,s,r):$0(n)){t.push(c.i,n.i,l.i),jr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=K0(xs(n),t),Kr(n,t,e,i,s,r,2)):o===2&&J0(n,t,e,i,s,r):Kr(xs(n),t,e,i,s,r,1);break}}}function $0(n){const t=n.prev,e=n,i=n.next;if(Ce(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Cr(s,a,r,c,o,l,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Z0(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Ce(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),g=Math.min(u,d,h),v=Math.max(a,c,l),m=Math.max(u,d,h),p=Pl(f,g,t,e,i),S=Pl(v,m,t,e,i);let M=n.prevZ,y=n.nextZ;for(;M&&M.z>=p&&y&&y.z<=S;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Cr(a,u,c,d,l,h,M.x,M.y)&&Ce(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Cr(a,u,c,d,l,h,y.x,y.y)&&Ce(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Cr(a,u,c,d,l,h,M.x,M.y)&&Ce(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Cr(a,u,c,d,l,h,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function K0(n,t){let e=n;do{const i=e.prev,s=e.next.next;!or(i,s)&&Ff(i,e,e.next,s)&&Jr(i,s)&&Jr(s,i)&&(t.push(i.i,e.i,s.i),jr(e),jr(e.next),e=n=s),e=e.next}while(e!==n);return xs(e)}function J0(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&og(o,a)){let c=Of(o,a);o=xs(o,o.next),c=xs(c,c.next),Kr(o,t,e,i,s,r,0),Kr(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function j0(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Nf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(rg(l))}s.sort(Q0);for(let r=0;r<s.length;r++)e=tg(s[r],e);return e}function Q0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function tg(n,t){const e=eg(n,t);if(!e)return t;const i=Of(e,n);return xs(i,i.next),xs(e,e.next)}function eg(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(or(n,e))return e;do{if(or(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Uf(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Jr(e,n)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&ng(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function ng(n,t){return Ce(n.prev,n,t.prev)<0&&Ce(t.next,n,n.next)<0}function ig(n,t,e,i){let s=n;do s.z===0&&(s.z=Pl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,sg(s)}function sg(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Pl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function rg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Uf(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Cr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Uf(n,t,e,i,s,r,o,a)}function og(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ag(n,t)&&(Jr(n,t)&&Jr(t,n)&&cg(n,t)&&(Ce(n.prev,n,t.prev)||Ce(n,t.prev,t))||or(n,t)&&Ce(n.prev,n,n.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function or(n,t){return n.x===t.x&&n.y===t.y}function Ff(n,t,e,i){const s=ko(Ce(n,t,e)),r=ko(Ce(n,t,i)),o=ko(Ce(e,i,n)),a=ko(Ce(e,i,t));return!!(s!==r&&o!==a||s===0&&Go(n,e,t)||r===0&&Go(n,i,t)||o===0&&Go(e,n,i)||a===0&&Go(e,t,i))}function Go(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ko(n){return n>0?1:n<0?-1:0}function ag(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ff(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Jr(n,t){return Ce(n.prev,n,n.next)<0?Ce(n,t,n.next)>=0&&Ce(n,n.prev,t)>=0:Ce(n,t,n.prev)<0||Ce(n,n.next,t)<0}function cg(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Of(n,t){const e=Ll(n.i,n.x,n.y),i=Ll(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function wu(n,t,e,i){const s=Ll(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ll(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lg(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class hg{static triangulate(t,e,i=2){return q0(t,e,i)}}class qs{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return qs.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Ru(t),Cu(i,t);let o=t.length;e.forEach(Ru);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Cu(i,e[c]);const a=hg.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ru(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Cu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class fr extends De{constructor(t=new io([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:ug;let M,y=!1,C,T,L,x;if(p){M=p.getSpacedPoints(u),y=!0,h=!1;const J=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(u,J),T=new A,L=new A,x=new A}h||(m=0,f=0,g=0,v=0);const w=a.extractPoints(l);let I=w.shape;const R=w.holes;if(!qs.isClockWise(I)){I=I.reverse();for(let J=0,nt=R.length;J<nt;J++){const K=R[J];qs.isClockWise(K)&&(R[J]=K.reverse())}}function G(J){const K=10000000000000001e-36;let lt=J[0];for(let ot=1;ot<=J.length;ot++){const Dt=ot%J.length,P=J[Dt],Ft=P.x-lt.x,St=P.y-lt.y,gt=Ft*Ft+St*St,et=Math.max(Math.abs(P.x),Math.abs(P.y),Math.abs(lt.x),Math.abs(lt.y)),zt=K*et*et;if(gt<=zt){J.splice(Dt,1),ot--;continue}lt=P}}G(I),R.forEach(G);const X=R.length,D=I;for(let J=0;J<X;J++){const nt=R[J];I=I.concat(nt)}function z(J,nt,K){return nt||de("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(nt,K)}const F=I.length;function Z(J,nt,K){let lt,ot,Dt;const P=J.x-nt.x,Ft=J.y-nt.y,St=K.x-J.x,gt=K.y-J.y,et=P*P+Ft*Ft,zt=P*gt-Ft*St;if(Math.abs(zt)>Number.EPSILON){const b=Math.sqrt(et),_=Math.sqrt(St*St+gt*gt),O=nt.x-Ft/b,q=nt.y+P/b,it=K.x-gt/_,at=K.y+St/_,dt=((it-O)*gt-(at-q)*St)/(P*gt-Ft*St);lt=O+P*dt-J.x,ot=q+Ft*dt-J.y;const $=lt*lt+ot*ot;if($<=2)return new bt(lt,ot);Dt=Math.sqrt($/2)}else{let b=!1;P>Number.EPSILON?St>Number.EPSILON&&(b=!0):P<-Number.EPSILON?St<-Number.EPSILON&&(b=!0):Math.sign(Ft)===Math.sign(gt)&&(b=!0),b?(lt=-Ft,ot=P,Dt=Math.sqrt(et)):(lt=P,ot=Ft,Dt=Math.sqrt(et/2))}return new bt(lt/Dt,ot/Dt)}const V=[];for(let J=0,nt=D.length,K=nt-1,lt=J+1;J<nt;J++,K++,lt++)K===nt&&(K=0),lt===nt&&(lt=0),V[J]=Z(D[J],D[K],D[lt]);const tt=[];let ct,vt=V.concat();for(let J=0,nt=X;J<nt;J++){const K=R[J];ct=[];for(let lt=0,ot=K.length,Dt=ot-1,P=lt+1;lt<ot;lt++,Dt++,P++)Dt===ot&&(Dt=0),P===ot&&(P=0),ct[lt]=Z(K[lt],K[Dt],K[P]);tt.push(ct),vt=vt.concat(ct)}let Gt;if(m===0)Gt=qs.triangulateShape(D,R);else{const J=[],nt=[];for(let K=0;K<m;K++){const lt=K/m,ot=f*Math.cos(lt*Math.PI/2),Dt=g*Math.sin(lt*Math.PI/2)+v;for(let P=0,Ft=D.length;P<Ft;P++){const St=z(D[P],V[P],Dt);ut(St.x,St.y,-ot),lt===0&&J.push(St)}for(let P=0,Ft=X;P<Ft;P++){const St=R[P];ct=tt[P];const gt=[];for(let et=0,zt=St.length;et<zt;et++){const b=z(St[et],ct[et],Dt);ut(b.x,b.y,-ot),lt===0&&gt.push(b)}lt===0&&nt.push(gt)}}Gt=qs.triangulateShape(J,nt)}const Yt=Gt.length,Ut=g+v;for(let J=0;J<F;J++){const nt=h?z(I[J],vt[J],Ut):I[J];y?(L.copy(C.normals[0]).multiplyScalar(nt.x),T.copy(C.binormals[0]).multiplyScalar(nt.y),x.copy(M[0]).add(L).add(T),ut(x.x,x.y,x.z)):ut(nt.x,nt.y,0)}for(let J=1;J<=u;J++)for(let nt=0;nt<F;nt++){const K=h?z(I[nt],vt[nt],Ut):I[nt];y?(L.copy(C.normals[J]).multiplyScalar(K.x),T.copy(C.binormals[J]).multiplyScalar(K.y),x.copy(M[J]).add(L).add(T),ut(x.x,x.y,x.z)):ut(K.x,K.y,d/u*J)}for(let J=m-1;J>=0;J--){const nt=J/m,K=f*Math.cos(nt*Math.PI/2),lt=g*Math.sin(nt*Math.PI/2)+v;for(let ot=0,Dt=D.length;ot<Dt;ot++){const P=z(D[ot],V[ot],lt);ut(P.x,P.y,d+K)}for(let ot=0,Dt=R.length;ot<Dt;ot++){const P=R[ot];ct=tt[ot];for(let Ft=0,St=P.length;Ft<St;Ft++){const gt=z(P[Ft],ct[Ft],lt);y?ut(gt.x,gt.y+M[u-1].y,M[u-1].x+K):ut(gt.x,gt.y,d+K)}}}k(),ht();function k(){const J=s.length/3;if(h){let nt=0,K=F*nt;for(let lt=0;lt<Yt;lt++){const ot=Gt[lt];Lt(ot[2]+K,ot[1]+K,ot[0]+K)}nt=u+m*2,K=F*nt;for(let lt=0;lt<Yt;lt++){const ot=Gt[lt];Lt(ot[0]+K,ot[1]+K,ot[2]+K)}}else{for(let nt=0;nt<Yt;nt++){const K=Gt[nt];Lt(K[2],K[1],K[0])}for(let nt=0;nt<Yt;nt++){const K=Gt[nt];Lt(K[0]+F*u,K[1]+F*u,K[2]+F*u)}}i.addGroup(J,s.length/3-J,0)}function ht(){const J=s.length/3;let nt=0;st(D,nt),nt+=D.length;for(let K=0,lt=R.length;K<lt;K++){const ot=R[K];st(ot,nt),nt+=ot.length}i.addGroup(J,s.length/3-J,1)}function st(J,nt){let K=J.length;for(;--K>=0;){const lt=K;let ot=K-1;ot<0&&(ot=J.length-1);for(let Dt=0,P=u+m*2;Dt<P;Dt++){const Ft=F*Dt,St=F*(Dt+1),gt=nt+lt+Ft,et=nt+ot+Ft,zt=nt+ot+St,b=nt+lt+St;Ct(gt,et,zt,b)}}}function ut(J,nt,K){c.push(J),c.push(nt),c.push(K)}function Lt(J,nt,K){Mt(J),Mt(nt),Mt(K);const lt=s.length/3,ot=S.generateTopUV(i,s,lt-3,lt-2,lt-1);xt(ot[0]),xt(ot[1]),xt(ot[2])}function Ct(J,nt,K,lt){Mt(J),Mt(nt),Mt(lt),Mt(nt),Mt(K),Mt(lt);const ot=s.length/3,Dt=S.generateSideWallUV(i,s,ot-6,ot-3,ot-2,ot-1);xt(Dt[0]),xt(Dt[1]),xt(Dt[3]),xt(Dt[1]),xt(Dt[2]),xt(Dt[3])}function Mt(J){s.push(c[J*3+0]),s.push(c[J*3+1]),s.push(c[J*3+2])}function xt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return dg(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Aa[s.type]().fromJSON(s)),new fr(i,t.options)}}const ug={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new bt(r,o),new bt(a,c),new bt(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new bt(o,1-c),new bt(l,1-d),new bt(h,1-g),new bt(v,1-p)]:[new bt(a,1-c),new bt(u,1-d),new bt(f,1-g),new bt(m,1-p)]}};function dg(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class so extends De{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let M=0;M<l;M++){const y=M*d-r;g.push(y,-S,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const M=S+l*p,y=S+l*(p+1),C=S+1+l*(p+1),T=S+1+l*p;f.push(M,y,T),f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.width,t.height,t.widthSegments,t.heightSegments)}}class ro extends De{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new A,h=new A,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const S=[],M=p/i;let y=0;p===0&&o===0?y=.5/e:p===i&&c===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const T=C/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(T+y,1-M),S.push(l++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const M=u[p][S+1],y=u[p][S],C=u[p+1][S],T=u[p+1][S+1];(p!==0||o>0)&&f.push(M,y,T),(p!==i-1||c<Math.PI)&&f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class oo extends De{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new A,f=new A,g=new A;for(let v=0;v<=i;v++){const m=o+v/i*a;for(let p=0;p<=s;p++){const S=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,S=(s+1)*(v-1)+m-1,M=(s+1)*(v-1)+m,y=(s+1)*v+m;c.push(p,S,y),c.push(S,M,y)}this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class lh extends De{constructor(t=new Df(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new bt;let u=new A;const d=[],h=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new _e(d,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(f,2));function v(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),S(),p()}function m(M){u=t.getPointAt(M/e,u);const y=o.normals[M],C=o.binormals[M];for(let T=0;T<=s;T++){const L=T/s*Math.PI*2,x=Math.sin(L),w=-Math.cos(L);c.x=w*y.x+x*C.x,c.y=w*y.y+x*C.y,c.z=w*y.z+x*C.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let y=1;y<=s;y++){const C=(s+1)*(M-1)+(y-1),T=(s+1)*M+(y-1),L=(s+1)*M+y,x=(s+1)*(M-1)+y;g.push(C,T,x),g.push(T,L,x)}}function S(){for(let M=0;M<=e;M++)for(let y=0;y<=s;y++)l.x=M/e,l.y=y/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new lh(new Aa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ar(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Pu(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Pu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Qe(n){const t={};for(let e=0;e<n.length;e++){const i=ar(n[e]);for(const s in i)t[s]=i[s]}return t}function Pu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function fg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const pg={clone:ar,merge:Qe};var mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=fg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class _g extends ei{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ao extends dr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vg extends ao{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class xg extends dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sg extends dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hh extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Mg extends hh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Tc=new Re,Lu=new A,Du=new A;class zf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oh,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lu),Du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Du),e.updateMatrixWorld(),Tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===$r||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ho=new A,Wo=new Ts,Gn=new A;class Vf extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ho,Wo,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Wo,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Ho,Wo,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Wo,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new A,Iu=new bt,Nu=new bt;class mn extends Vf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Nu),e.subVectors(Nu,Iu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Js*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class yg extends zf{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}}class uh extends hh{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new yg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class dh extends Vf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Eg extends zf{constructor(){super(new dh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bg extends hh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Eg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Gs=-90,ks=1;class Tg extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(Gs,ks,t,e);s.layers=this.layers,this.add(s);const r=new mn(Gs,ks,t,e);r.layers=this.layers,this.add(r);const o=new mn(Gs,ks,t,e);o.layers=this.layers,this.add(o);const a=new mn(Gs,ks,t,e);a.layers=this.layers,this.add(a);const c=new mn(Gs,ks,t,e);c.layers=this.layers,this.add(c);const l=new mn(Gs,ks,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$r)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ag extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}let wg=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,qt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};const Bh=class Bh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Bh.prototype.isMatrix2=!0;let Uu=Bh;function Fu(n,t,e,i){const s=Rg(i);switch(e){case _f:return n*t;case xf:return n*t/s.components*s.byteLength;case jl:return n*t/s.components*s.byteLength;case vs:return n*t*2/s.components*s.byteLength;case Ql:return n*t*2/s.components*s.byteLength;case vf:return n*t*3/s.components*s.byteLength;case Fn:return n*t*4/s.components*s.byteLength;case th:return n*t*4/s.components*s.byteLength;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ca:case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qc:case el:return Math.max(n,16)*Math.max(t,8)/4;case jc:case tl:return Math.max(n,8)*Math.max(t,8)/2;case nl:case il:case rl:case ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sl:case xa:case al:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case pl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case _l:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case yl:case El:case bl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Tl:case Al:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Sa:case wl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rg(n){switch(n){case vn:case ff:return{byteLength:1,components:1};case Yr:case pf:case Mi:return{byteLength:2,components:1};case Kl:case Jl:return{byteLength:2,components:4};case ti:case Zl:case qn:return{byteLength:4,components:1};case mf:case gf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);function Gf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Cg(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lg=`#ifdef USE_ALPHAHASH
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
#endif`,Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fg=`#ifdef USE_AOMAP
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
#endif`,Og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hg=`#ifdef USE_IRIDESCENCE
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
#endif`,Wg=`#ifdef USE_BUMPMAP
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`#define PI 3.141592653589793
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
} // validated`,t_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e_=`vec3 transformedNormal = objectNormal;
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
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o_="gl_FragColor = linearToOutputTexel( gl_FragColor );",a_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,l_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g_=`#ifdef USE_FOG
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
}`,v_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
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
#endif
#include <lightprobes_pars_fragment>`,y_=`#ifdef USE_ENVMAP
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
#endif`,E_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,R_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,C_=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,I_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,H_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`#ifdef USE_MORPHTARGETS
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
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K_=`#ifndef FLAT_SHADED
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
#endif`,j_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
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
#endif`,tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,mv=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_v=`#ifdef USE_SKINNING
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
#endif`,vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xv=`#ifdef USE_SKINNING
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
#endif`,Sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ev=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bv=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tv=`#ifdef USE_TRANSMISSION
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lv=`uniform sampler2D t2D;
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
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`#include <common>
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
}`,Ov=`#if DEPTH_PACKING == 3200
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
}`,Bv=`#define DISTANCE
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
}`,zv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`uniform float scale;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,Xv=`uniform vec3 diffuse;
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
}`,Yv=`#define LAMBERT
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
}`,qv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,$v=`#define MATCAP
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
}`,Zv=`#define MATCAP
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
}`,Kv=`#define NORMAL
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
}`,Jv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jv=`#define PHONG
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
}`,Qv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,tx=`#define STANDARD
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
}`,ex=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,nx=`#define TOON
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
}`,ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,sx=`uniform float size;
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
}`,rx=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,ax=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,cx=`uniform float rotation;
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
}`,lx=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Pg,alphahash_pars_fragment:Lg,alphamap_fragment:Dg,alphamap_pars_fragment:Ig,alphatest_fragment:Ng,alphatest_pars_fragment:Ug,aomap_fragment:Fg,aomap_pars_fragment:Og,batching_pars_vertex:Bg,batching_vertex:zg,begin_vertex:Vg,beginnormal_vertex:Gg,bsdfs:kg,iridescence_fragment:Hg,bumpmap_pars_fragment:Wg,clipping_planes_fragment:Xg,clipping_planes_pars_fragment:Yg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:$g,color_fragment:Zg,color_pars_fragment:Kg,color_pars_vertex:Jg,color_vertex:jg,common:Qg,cube_uv_reflection_fragment:t_,defaultnormal_vertex:e_,displacementmap_pars_vertex:n_,displacementmap_vertex:i_,emissivemap_fragment:s_,emissivemap_pars_fragment:r_,colorspace_fragment:o_,colorspace_pars_fragment:a_,envmap_fragment:c_,envmap_common_pars_fragment:l_,envmap_pars_fragment:h_,envmap_pars_vertex:u_,envmap_physical_pars_fragment:y_,envmap_vertex:d_,fog_vertex:f_,fog_pars_vertex:p_,fog_fragment:m_,fog_pars_fragment:g_,gradientmap_pars_fragment:__,lightmap_pars_fragment:v_,lights_lambert_fragment:x_,lights_lambert_pars_fragment:S_,lights_pars_begin:M_,lights_toon_fragment:E_,lights_toon_pars_fragment:b_,lights_phong_fragment:T_,lights_phong_pars_fragment:A_,lights_physical_fragment:w_,lights_physical_pars_fragment:R_,lights_fragment_begin:C_,lights_fragment_maps:P_,lights_fragment_end:L_,lightprobes_pars_fragment:D_,logdepthbuf_fragment:I_,logdepthbuf_pars_fragment:N_,logdepthbuf_pars_vertex:U_,logdepthbuf_vertex:F_,map_fragment:O_,map_pars_fragment:B_,map_particle_fragment:z_,map_particle_pars_fragment:V_,metalnessmap_fragment:G_,metalnessmap_pars_fragment:k_,morphinstance_vertex:H_,morphcolor_vertex:W_,morphnormal_vertex:X_,morphtarget_pars_vertex:Y_,morphtarget_vertex:q_,normal_fragment_begin:$_,normal_fragment_maps:Z_,normal_pars_fragment:K_,normal_pars_vertex:J_,normal_vertex:j_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:tv,clearcoat_normal_fragment_maps:ev,clearcoat_pars_fragment:nv,iridescence_pars_fragment:iv,opaque_fragment:sv,packing:rv,premultiplied_alpha_fragment:ov,project_vertex:av,dithering_fragment:cv,dithering_pars_fragment:lv,roughnessmap_fragment:hv,roughnessmap_pars_fragment:uv,shadowmap_pars_fragment:dv,shadowmap_pars_vertex:fv,shadowmap_vertex:pv,shadowmask_pars_fragment:mv,skinbase_vertex:gv,skinning_pars_vertex:_v,skinning_vertex:vv,skinnormal_vertex:xv,specularmap_fragment:Sv,specularmap_pars_fragment:Mv,tonemapping_fragment:yv,tonemapping_pars_fragment:Ev,transmission_fragment:bv,transmission_pars_fragment:Tv,uv_pars_fragment:Av,uv_pars_vertex:wv,uv_vertex:Rv,worldpos_vertex:Cv,background_vert:Pv,background_frag:Lv,backgroundCube_vert:Dv,backgroundCube_frag:Iv,cube_vert:Nv,cube_frag:Uv,depth_vert:Fv,depth_frag:Ov,distance_vert:Bv,distance_frag:zv,equirect_vert:Vv,equirect_frag:Gv,linedashed_vert:kv,linedashed_frag:Hv,meshbasic_vert:Wv,meshbasic_frag:Xv,meshlambert_vert:Yv,meshlambert_frag:qv,meshmatcap_vert:$v,meshmatcap_frag:Zv,meshnormal_vert:Kv,meshnormal_frag:Jv,meshphong_vert:jv,meshphong_frag:Qv,meshphysical_vert:tx,meshphysical_frag:ex,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:sx,points_frag:rx,shadow_vert:ox,shadow_frag:ax,sprite_vert:cx,sprite_frag:lx},Et={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Yn={basic:{uniforms:Qe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Qe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Qe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Qe([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Qe([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new $t(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Qe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Qe([Et.points,Et.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Qe([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Qe([Et.common,Et.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Qe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Qe([Et.sprite,Et.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:Qe([Et.common,Et.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:Qe([Et.lights,Et.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Yn.physical={uniforms:Qe([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const Xo={r:0,b:0,g:0},hx=new Re,kf=new ne;kf.set(-1,0,0,0,1,0,0,0,1);function ux(n,t,e,i,s,r){const o=new $t(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){const y=S.backgroundBlurriness>0;M=t.get(M,y)}return M}function g(S){let M=!1;const y=f(S);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,M){const y=f(M);y&&(y.isCubeTexture||y.mapping===Fa)?(l===void 0&&(l=new Me(new cn(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ar(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(hx.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(kf),l.material.toneMapped=ue.getTransfer(y.colorSpace)!==ge,(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Me(new so(2,2),new ei({name:"BackgroundMaterial",uniforms:ar(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ue.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,M){S.getRGB(Xo,Bf(n)),e.buffers.color.setClear(Xo.r,Xo.g,Xo.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:v,dispose:p}}function dx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(R,U,G,X,D){let z=!1;const F=d(R,X,G,U);r!==F&&(r=F,l(r.object)),z=f(R,X,G,D),z&&g(R,X,G,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(R,U,G,X),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return n.createVertexArray()}function l(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function d(R,U,G,X){const D=X.wireframe===!0;let z=i[U.id];z===void 0&&(z={},i[U.id]=z);const F=R.isInstancedMesh===!0?R.id:0;let Z=z[F];Z===void 0&&(Z={},z[F]=Z);let V=Z[G.id];V===void 0&&(V={},Z[G.id]=V);let tt=V[D];return tt===void 0&&(tt=h(c()),V[D]=tt),tt}function h(R){const U=[],G=[],X=[];for(let D=0;D<e;D++)U[D]=0,G[D]=0,X[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:X,object:R,attributes:{},index:null}}function f(R,U,G,X){const D=r.attributes,z=U.attributes;let F=0;const Z=G.getAttributes();for(const V in Z)if(Z[V].location>=0){const ct=D[V];let vt=z[V];if(vt===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(vt=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(vt=R.instanceColor)),ct===void 0||ct.attribute!==vt||vt&&ct.data!==vt.data)return!0;F++}return r.attributesNum!==F||r.index!==X}function g(R,U,G,X){const D={},z=U.attributes;let F=0;const Z=G.getAttributes();for(const V in Z)if(Z[V].location>=0){let ct=z[V];ct===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(ct=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(ct=R.instanceColor));const vt={};vt.attribute=ct,ct&&ct.data&&(vt.data=ct.data),D[V]=vt,F++}r.attributes=D,r.attributesNum=F,r.index=X}function v(){const R=r.newAttributes;for(let U=0,G=R.length;U<G;U++)R[U]=0}function m(R){p(R,0)}function p(R,U){const G=r.newAttributes,X=r.enabledAttributes,D=r.attributeDivisors;G[R]=1,X[R]===0&&(n.enableVertexAttribArray(R),X[R]=1),D[R]!==U&&(n.vertexAttribDivisor(R,U),D[R]=U)}function S(){const R=r.newAttributes,U=r.enabledAttributes;for(let G=0,X=U.length;G<X;G++)U[G]!==R[G]&&(n.disableVertexAttribArray(G),U[G]=0)}function M(R,U,G,X,D,z,F){F===!0?n.vertexAttribIPointer(R,U,G,D,z):n.vertexAttribPointer(R,U,G,X,D,z)}function y(R,U,G,X){v();const D=X.attributes,z=G.getAttributes(),F=U.defaultAttributeValues;for(const Z in z){const V=z[Z];if(V.location>=0){let tt=D[Z];if(tt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),tt!==void 0){const ct=tt.normalized,vt=tt.itemSize,Gt=t.get(tt);if(Gt===void 0)continue;const Yt=Gt.buffer,Ut=Gt.type,k=Gt.bytesPerElement,ht=Ut===n.INT||Ut===n.UNSIGNED_INT||tt.gpuType===Zl;if(tt.isInterleavedBufferAttribute){const st=tt.data,ut=st.stride,Lt=tt.offset;if(st.isInstancedInterleavedBuffer){for(let Ct=0;Ct<V.locationSize;Ct++)p(V.location+Ct,st.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ct=0;Ct<V.locationSize;Ct++)m(V.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let Ct=0;Ct<V.locationSize;Ct++)M(V.location+Ct,vt/V.locationSize,Ut,ct,ut*k,(Lt+vt/V.locationSize*Ct)*k,ht)}else{if(tt.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)p(V.location+st,tt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let st=0;st<V.locationSize;st++)m(V.location+st);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let st=0;st<V.locationSize;st++)M(V.location+st,vt/V.locationSize,Ut,ct,vt*k,vt/V.locationSize*st*k,ht)}}else if(F!==void 0){const ct=F[Z];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(V.location,ct);break;case 3:n.vertexAttrib3fv(V.location,ct);break;case 4:n.vertexAttrib4fv(V.location,ct);break;default:n.vertexAttrib1fv(V.location,ct)}}}}S()}function C(){w();for(const R in i){const U=i[R];for(const G in U){const X=U[G];for(const D in X){const z=X[D];for(const F in z)u(z[F].object),delete z[F];delete X[D]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const U=i[R.id];for(const G in U){const X=U[G];for(const D in X){const z=X[D];for(const F in z)u(z[F].object),delete z[F];delete X[D]}}delete i[R.id]}function L(R){for(const U in i){const G=i[U];for(const X in G){const D=G[X];if(D[R.id]===void 0)continue;const z=D[R.id];for(const F in z)u(z[F].object),delete z[F];delete D[R.id]}}}function x(R){for(const U in i){const G=i[U],X=R.isInstancedMesh===!0?R.id:0,D=G[X];if(D!==void 0){for(const z in D){const F=D[z];for(const Z in F)u(F[Z].object),delete F[Z];delete D[z]}delete G[X],Object.keys(G).length===0&&delete i[U]}}}function w(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function fx(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function px(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Fn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const x=L===Mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==vn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==qn&&!x)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(qt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:y,maxSamples:C,samples:T}}function mx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Oi,a=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:i,M=S*4;let y=p.clippingState||null;c.value=y,y=u(g,h,M,f);for(let C=0;C!==M;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=f;M!==v;++M,y+=4)o.copy(d[M]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const Vi=4,Ou=[.125,.215,.35,.446,.526,.582],is=20,gx=256,Er=new dh,Bu=new $t;let Ac=null,wc=0,Rc=0,Cc=!1;const _x=new A;class zu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=_x}=r;Ac=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ac,wc,Rc),this._renderer.xr.enabled=Cc,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ac=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Mi,format:Fn,colorSpace:Ma,depthBuffer:!1},s=Vu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vx(r)),this._blurMaterial=Sx(r,t,e),this._ggxMaterial=xx(r,t,e)}return s}_compileMaterial(t){const e=new Me(new De,t);this._renderer.compile(e,Er)}_sceneToCubeUV(t,e,i,s,r){const c=new mn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Bu),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new cn,new ii({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(Bu),p=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));const C=this._cubeSize;Hs(s,y*C,M>2?C:0,C,C),d.setRenderTarget(s),p&&d.render(v,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===_s||t.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Hs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Er)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Vi?i-g+Vi:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Hs(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,Er),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Hs(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(a,Er)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&de("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*is-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):is;m>is&&qt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);const p=[];let S=0;for(let L=0;L<is;++L){const x=L/v,w=Math.exp(-x*x/2);p.push(w),L===0?S+=w:L<m&&(S+=2*w)}for(let L=0;L<p.length;L++)p[L]=p[L]/S;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const y=this._sizeLods[s],C=3*y*(s>M-Vi?s-M+Vi:0),T=4*(this._cubeSize-y);Hs(e,C,T,3*y,2*y),c.setRenderTarget(e),c.render(d,Er)}}function vx(n){const t=[],e=[],i=[];let s=n;const r=n-Vi+1+Ou.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Vi?c=Ou[o-n+Vi-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*f),M=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){const L=T%3*2/3-1,x=T>2?0:-1,w=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];S.set(w,v*g*T),M.set(h,m*g*T);const I=[T,T,T,T,T,T];y.set(I,p*g*T)}const C=new De;C.setAttribute("position",new jn(S,v)),C.setAttribute("uv",new jn(M,m)),C.setAttribute("faceIndex",new jn(y,p)),i.push(new Me(C,null)),s>Vi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Vu(n,t,e){const i=new Jn(n,t,e);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function xx(n,t,e){return new ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:za(),fragmentShader:`

			precision highp float;
			precision highp int;

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Sx(n,t,e){const i=new Float32Array(is),s=new A(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:za(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Gu(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:za(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ku(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function za(){return`

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
	`}class Hf extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new wf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:gi});r.uniforms.tEquirect.value=e;const o=new Me(s,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=Ke),new Tg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function Mx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Za||f===Ka)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Hf(g.height);return v.fromEquirectangularTexture(n,h),t.set(h,v),h.addEventListener("dispose",l),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===Za||f===Ka,v=f===_s||f===sr;if(g||v){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new zu(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||v&&S&&c(S)?(i===null&&(i=new zu(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Za?h.mapping=_s:f===Ka&&(h.mapping=sr),h}function c(h){let f=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function yx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Cl("WebGLRenderer: "+i+" extension not supported."),s}}}function Ex(n,t,e,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const S=f.array;v=f.version;for(let M=0,y=S.length;M<y;M+=3){const C=S[M+0],T=S[M+1],L=S[M+2];h.push(C,T,T,L,L,C)}}else{const S=g.array;v=g.version;for(let M=0,y=S.length/3-1;M<y;M+=3){const C=M+0,T=M+1,L=M+2;h.push(C,T,T,L,L,C)}}const m=new(g.count>=65535?Tf:bf)(h,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function bx(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*o),e.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Tx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:de("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ax(n,t,e){const i=new WeakMap,s=new Le;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let I=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",I)};var f=I;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const L=new Float32Array(C*T*4*d),x=new Mf(L,C,T,d);x.type=qn,x.needsUpdate=!0;const w=y*4;for(let R=0;R<d;R++){const U=p[R],G=S[R],X=M[R],D=C*T*4*R;for(let z=0;z<U.count;z++){const F=z*w;g===!0&&(s.fromBufferAttribute(U,z),L[D+F+0]=s.x,L[D+F+1]=s.y,L[D+F+2]=s.z,L[D+F+3]=0),v===!0&&(s.fromBufferAttribute(G,z),L[D+F+4]=s.x,L[D+F+5]=s.y,L[D+F+6]=s.z,L[D+F+7]=0),m===!0&&(s.fromBufferAttribute(X,z),L[D+F+8]=s.x,L[D+F+9]=s.y,L[D+F+10]=s.z,L[D+F+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new bt(C,T)},i.set(a,h),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function wx(n,t,e,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const Rx={[rf]:"LINEAR_TONE_MAPPING",[of]:"REINHARD_TONE_MAPPING",[af]:"CINEON_TONE_MAPPING",[cf]:"ACES_FILMIC_TONE_MAPPING",[hf]:"AGX_TONE_MAPPING",[uf]:"NEUTRAL_TONE_MAPPING",[lf]:"CUSTOM_TONE_MAPPING"};function Cx(n,t,e,i,s){const r=new Jn(t,e,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new rr(t,e):void 0}),o=new Jn(t,e,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),a=new De;a.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new _e([0,2,0,0,2,0],2));const c=new _g({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Me(a,c),u=new dh(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,v=null,m=[],p=!1;this.setSize=function(S,M){r.setSize(S,M),o.setSize(S,M);for(let y=0;y<m.length;y++){const C=m[y];C.setSize&&C.setSize(S,M)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;const M=r.width,y=r.height;for(let C=0;C<m.length;C++){const T=m[C];T.setSize&&T.setSize(M,y)}},this.begin=function(S,M){if(f||S.toneMapping===Bn&&m.length===0)return!1;if(v=M,M!==null){const y=M.width,C=M.height;(r.width!==y||r.height!==C)&&this.setSize(y,C)}return p===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=Bn,!0},this.hasRenderPass=function(){return p},this.end=function(S,M){S.toneMapping=g,f=!0;let y=r,C=o;for(let T=0;T<m.length;T++){const L=m[T];if(L.enabled!==!1&&(L.render(S,C,y,M),L.needsSwap!==!1)){const x=y;y=C,C=x}}if(d!==S.outputColorSpace||h!==S.toneMapping){d=S.outputColorSpace,h=S.toneMapping,c.defines={},ue.getTransfer(d)===ge&&(c.defines.SRGB_TRANSFER="");const T=Rx[h];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(v),S.render(l,u),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Wf=new en,Dl=new rr(1,1),Xf=new Mf,Yf=new _0,qf=new wf,Hu=[],Wu=[],Xu=new Float32Array(16),Yu=new Float32Array(9),qu=new Float32Array(4);function pr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Hu[s];if(r===void 0&&(r=new Float32Array(s),Hu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Va(n,t){let e=Wu[t];e===void 0&&(e=new Int32Array(t),Wu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Px(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Lx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),Ve(e,t)}}function Dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),Ve(e,t)}}function Ix(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),Ve(e,t)}}function Nx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,i))return;qu.set(i),n.uniformMatrix2fv(this.addr,!1,qu),Ve(e,i)}}function Ux(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,i))return;Yu.set(i),n.uniformMatrix3fv(this.addr,!1,Yu),Ve(e,i)}}function Fx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,i))return;Xu.set(i),n.uniformMatrix4fv(this.addr,!1,Xu),Ve(e,i)}}function Ox(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),Ve(e,t)}}function zx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),Ve(e,t)}}function Vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),Ve(e,t)}}function Gx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function kx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),Ve(e,t)}}function Hx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),Ve(e,t)}}function Wx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),Ve(e,t)}}function Xx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Dl.compareFunction=e.isReversedDepthBuffer()?nh:eh,r=Dl):r=Wf,e.setTexture2D(t||r,s)}function Yx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yf,s)}function qx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||qf,s)}function $x(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Xf,s)}function Zx(n){switch(n){case 5126:return Px;case 35664:return Lx;case 35665:return Dx;case 35666:return Ix;case 35674:return Nx;case 35675:return Ux;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return zx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return kx;case 36295:return Hx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return $x}}function Kx(n,t){n.uniform1fv(this.addr,t)}function Jx(n,t){const e=pr(t,this.size,2);n.uniform2fv(this.addr,e)}function jx(n,t){const e=pr(t,this.size,3);n.uniform3fv(this.addr,e)}function Qx(n,t){const e=pr(t,this.size,4);n.uniform4fv(this.addr,e)}function tS(n,t){const e=pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function eS(n,t){const e=pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function nS(n,t){const e=pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function iS(n,t){n.uniform1iv(this.addr,t)}function sS(n,t){n.uniform2iv(this.addr,t)}function rS(n,t){n.uniform3iv(this.addr,t)}function oS(n,t){n.uniform4iv(this.addr,t)}function aS(n,t){n.uniform1uiv(this.addr,t)}function cS(n,t){n.uniform2uiv(this.addr,t)}function lS(n,t){n.uniform3uiv(this.addr,t)}function hS(n,t){n.uniform4uiv(this.addr,t)}function uS(n,t,e){const i=this.cache,s=t.length,r=Va(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Dl:o=Wf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function dS(n,t,e){const i=this.cache,s=t.length,r=Va(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yf,r[o])}function fS(n,t,e){const i=this.cache,s=t.length,r=Va(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qf,r[o])}function pS(n,t,e){const i=this.cache,s=t.length,r=Va(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xf,r[o])}function mS(n){switch(n){case 5126:return Kx;case 35664:return Jx;case 35665:return jx;case 35666:return Qx;case 35674:return tS;case 35675:return eS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return sS;case 35668:case 35672:return rS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return cS;case 36295:return lS;case 36296:return hS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return pS}}class gS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Zx(e.type)}}class _S{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mS(e.type)}}class vS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Pc=/(\w+)(\])?(\[|\.)?/g;function $u(n,t){n.seq.push(t),n.map[t.id]=t}function xS(n,t,e){const i=n.name,s=i.length;for(Pc.lastIndex=0;;){const r=Pc.exec(i),o=Pc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$u(e,l===void 0?new gS(a,n,t):new _S(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new vS(a),$u(e,d)),e=d}}}class ua{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);xS(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Zu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const SS=37297;let MS=0;function yS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Ku=new ne;function ES(n){ue._getMatrix(Ku,ue.workingColorSpace,n);const t=`mat3( ${Ku.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case ya:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ju(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+yS(n.getShaderSource(t),a)}else return r}function bS(n,t){const e=ES(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const TS={[rf]:"Linear",[of]:"Reinhard",[af]:"Cineon",[cf]:"ACESFilmic",[hf]:"AgX",[uf]:"Neutral",[lf]:"Custom"};function AS(n,t){const e=TS[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yo=new A;function wS(){ue.getLuminanceCoefficients(Yo);const n=Yo.x.toFixed(4),t=Yo.y.toFixed(4),e=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function CS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function PS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Pr(n){return n!==""}function ju(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const LS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(n){return n.replace(LS,IS)}const DS=new Map;function IS(n,t){let e=re[t];if(e===void 0){const i=DS.get(t);if(i!==void 0)e=re[i],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Il(e)}const NS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(n){return n.replace(NS,US)}function US(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ed(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const FS={[ra]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function OS(n){return FS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BS={[_s]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE_UV"};function zS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":BS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const VS={[sr]:"ENVMAP_MODE_REFRACTION"};function GS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":VS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kS={[sf]:"ENVMAP_BLENDING_MULTIPLY",[Um]:"ENVMAP_BLENDING_MIX",[Fm]:"ENVMAP_BLENDING_ADD"};function HS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":kS[n.combine]||"ENVMAP_BLENDING_NONE"}function WS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function XS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=OS(e),l=zS(e),u=GS(e),d=HS(e),h=WS(e),f=RS(e),g=CS(r),v=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`)):(m=[ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),p=[ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?re.tonemapping_pars_fragment:"",e.toneMapping!==Bn?AS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,bS("linearToOutputTexel",e.outputColorSpace),wS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),o=Il(o),o=ju(o,e),o=Qu(o,e),a=Il(a),a=ju(a,e),a=Qu(a,e),o=td(o),a=td(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+o,y=S+p+a,C=Zu(s,s.VERTEX_SHADER,M),T=Zu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,C),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(R){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(C)||"",X=s.getShaderInfoLog(T)||"",D=U.trim(),z=G.trim(),F=X.trim();let Z=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,C,T);else{const tt=Ju(s,C,"vertex"),ct=Ju(s,T,"fragment");de("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+tt+`
`+ct)}else D!==""?qt("WebGLProgram: Program Info Log:",D):(z===""||F==="")&&(V=!1);V&&(R.diagnostics={runnable:Z,programLog:D,vertexShader:{log:z,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(C),s.deleteShader(T),x=new ua(s,v),w=PS(s,v)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,SS)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=MS++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let YS=0;class qS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new $S(t),e.set(t,i)),i}}class $S{constructor(t){this.id=YS++,this.code=t,this.usedTimes=0}}function ZS(n){return n===vs||n===xa||n===Sa}function KS(n,t,e,i,s,r){const o=new yf,a=new qS,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,w,I,R,U,G){const X=R.fog,D=U.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=t.get(x.envMap||z,F),V=Z&&Z.mapping===Fa?Z.image.height:null,tt=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&qt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ct=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,vt=ct!==void 0?ct.length:0;let Gt=0;D.morphAttributes.position!==void 0&&(Gt=1),D.morphAttributes.normal!==void 0&&(Gt=2),D.morphAttributes.color!==void 0&&(Gt=3);let Yt,Ut,k,ht;if(tt){const jt=Yn[tt];Yt=jt.vertexShader,Ut=jt.fragmentShader}else Yt=x.vertexShader,Ut=x.fragmentShader,a.update(x),k=a.getVertexShaderID(x),ht=a.getFragmentShaderID(x);const st=n.getRenderTarget(),ut=n.state.buffers.depth.getReversed(),Lt=U.isInstancedMesh===!0,Ct=U.isBatchedMesh===!0,Mt=!!x.map,xt=!!x.matcap,J=!!Z,nt=!!x.aoMap,K=!!x.lightMap,lt=!!x.bumpMap,ot=!!x.normalMap,Dt=!!x.displacementMap,P=!!x.emissiveMap,Ft=!!x.metalnessMap,St=!!x.roughnessMap,gt=x.anisotropy>0,et=x.clearcoat>0,zt=x.dispersion>0,b=x.iridescence>0,_=x.sheen>0,O=x.transmission>0,q=gt&&!!x.anisotropyMap,it=et&&!!x.clearcoatMap,at=et&&!!x.clearcoatNormalMap,dt=et&&!!x.clearcoatRoughnessMap,$=b&&!!x.iridescenceMap,Q=b&&!!x.iridescenceThicknessMap,yt=_&&!!x.sheenColorMap,Pt=_&&!!x.sheenRoughnessMap,_t=!!x.specularMap,ft=!!x.specularColorMap,Zt=!!x.specularIntensityMap,ee=O&&!!x.transmissionMap,Qt=O&&!!x.thicknessMap,N=!!x.gradientMap,pt=!!x.alphaMap,j=x.alphaTest>0,Tt=!!x.alphaHash,mt=!!x.extensions;let rt=Bn;x.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(rt=n.toneMapping);const Rt={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:Yt,fragmentShader:Ut,defines:x.defines,customVertexShaderID:k,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ct,batchingColor:Ct&&U._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&U.instanceColor!==null,instancingMorph:Lt&&U.morphTexture!==null,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Mt,matcap:xt,envMap:J,envMapMode:J&&Z.mapping,envMapCubeUVHeight:V,aoMap:nt,lightMap:K,bumpMap:lt,normalMap:ot,displacementMap:Dt,emissiveMap:P,normalMapObjectSpace:ot&&x.normalMapType===zm,normalMapTangentSpace:ot&&x.normalMapType===Rl,packedNormalMap:ot&&x.normalMapType===Rl&&ZS(x.normalMap.format),metalnessMap:Ft,roughnessMap:St,anisotropy:gt,anisotropyMap:q,clearcoat:et,clearcoatMap:it,clearcoatNormalMap:at,clearcoatRoughnessMap:dt,dispersion:zt,iridescence:b,iridescenceMap:$,iridescenceThicknessMap:Q,sheen:_,sheenColorMap:yt,sheenRoughnessMap:Pt,specularMap:_t,specularColorMap:ft,specularIntensityMap:Zt,transmission:O,transmissionMap:ee,thicknessMap:Qt,gradientMap:N,opaque:x.transparent===!1&&x.blending===Ks&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:j,alphaHash:Tt,combine:x.combine,mapUv:Mt&&g(x.map.channel),aoMapUv:nt&&g(x.aoMap.channel),lightMapUv:K&&g(x.lightMap.channel),bumpMapUv:lt&&g(x.bumpMap.channel),normalMapUv:ot&&g(x.normalMap.channel),displacementMapUv:Dt&&g(x.displacementMap.channel),emissiveMapUv:P&&g(x.emissiveMap.channel),metalnessMapUv:Ft&&g(x.metalnessMap.channel),roughnessMapUv:St&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:it&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&g(x.sheenRoughnessMap.channel),specularMapUv:_t&&g(x.specularMap.channel),specularColorMapUv:ft&&g(x.specularColorMap.channel),specularIntensityMapUv:Zt&&g(x.specularIntensityMap.channel),transmissionMapUv:ee&&g(x.transmissionMap.channel),thicknessMapUv:Qt&&g(x.thicknessMap.channel),alphaMapUv:pt&&g(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ot||gt),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(Mt||pt),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&ot===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Gt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:Mt&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===ge,decodeVideoTextureEmissive:P&&x.emissiveMap.isVideoTexture===!0&&ue.getTransfer(x.emissiveMap.colorSpace)===ge,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:mt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&x.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)w.push(I),w.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(w,x),S(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function M(x){const w=f[x.type];let I;if(w){const R=Yn[w];I=pg.clone(R.uniforms)}else I=x.uniforms;return I}function y(x,w){let I=u.get(w);return I!==void 0?++I.usedTimes:(I=new XS(n,w,x,s),l.push(I),u.set(w,I)),I}function C(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function L(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:C,releaseShaderCache:T,programs:l,dispose:L}}function JS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function jS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function nd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function id(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,v,m,p){let S=n[t];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},n[t]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=o(h),S.groupOrder=v,S.renderOrder=h.renderOrder,S.z=m,S.group=p),t++,S}function c(h,f,g,v,m,p){const S=a(h,f,g,v,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):e.push(S)}function l(h,f,g,v,m,p){const S=a(h,f,g,v,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,f){e.length>1&&e.sort(h||jS),i.length>1&&i.sort(f||nd),s.length>1&&s.sort(f||nd)}function d(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function QS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new id,n.set(i,[o])):s>=r.length?(o=new id,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function tM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new $t};break;case"SpotLight":e={position:new A,direction:new A,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function eM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let nM=0;function iM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function sM(n){const t=new tM,e=eM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);const s=new A,r=new Re,o=new Re;function a(l){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,M=0,y=0,C=0,T=0,L=0;l.sort(iM);for(let w=0,I=l.length;w<I;w++){const R=l[w],U=R.color,G=R.intensity,X=R.distance;let D=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===vs?D=R.shadow.map.texture:D=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=U.r*G,d+=U.g*G,h+=U.b*G;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],G);L++}else if(R.isDirectionalLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const F=R.shadow,Z=e.get(R);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=D,i.directionalShadowMatrix[f]=R.shadow.matrix,S++}i.directional[f]=z,f++}else if(R.isSpotLight){const z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(U).multiplyScalar(G),z.distance=X,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[v]=z;const F=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,F.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[v]=F.matrix,R.castShadow){const Z=e.get(R);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,i.spotShadow[v]=Z,i.spotShadowMap[v]=D,y++}v++}else if(R.isRectAreaLight){const z=t.get(R);z.color.copy(U).multiplyScalar(G),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=z,m++}else if(R.isPointLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const F=R.shadow,Z=e.get(R);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,Z.shadowCameraNear=F.camera.near,Z.shadowCameraFar=F.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=D,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=z,g++}else if(R.isHemisphereLight){const z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(G),z.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[p]=z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==S||x.numPointShadows!==M||x.numSpotShadows!==y||x.numSpotMaps!==C||x.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,x.directionalLength=f,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=S,x.numPointShadows=M,x.numSpotShadows=y,x.numSpotMaps=C,x.numLightProbes=L,i.version=nM++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const M=l[p];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function sd(n){const t=new sM(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function rM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new sd(n),t.set(s,[a])):r>=o.length?(a=new sd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const oM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cM=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],lM=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],rd=new Re,br=new A,Lc=new A;function hM(n,t,e){let i=new oh;const s=new bt,r=new bt,o=new Le,a=new xg,c=new Sg,l={},u=e.maxTextureSize,d={[Wi]:an,[an]:Wi,[_n]:_n},h=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:oM,fragmentShader:aM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Me(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ra;let p=this.type;this.render=function(T,L,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===gm&&(qt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ra);const w=n.getRenderTarget(),I=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(gi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const G=p!==this.type;G&&L.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(D=>D.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,D=T.length;X<D;X++){const z=T[X],F=z.shadow;if(F===void 0){qt("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const Z=F.getFrameExtents();s.multiply(Z),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,F.mapSize.y=r.y));const V=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=V,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Rr){if(z.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Jn(s.x,s.y,{format:vs,type:Mi,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new rr(s.x,s.y,qn),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=yi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=We,F.map.depthTexture.magFilter=We}else z.isPointLight?(F.map=new Hf(s.x),F.map.depthTexture=new U0(s.x,ti)):(F.map=new Jn(s.x,s.y),F.map.depthTexture=new rr(s.x,s.y,ti)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=yi,this.type===ra?(F.map.depthTexture.compareFunction=V?nh:eh,F.map.depthTexture.minFilter=Ke,F.map.depthTexture.magFilter=Ke):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=We,F.map.depthTexture.magFilter=We);F.camera.updateProjectionMatrix()}const tt=F.map.isWebGLCubeRenderTarget?6:1;for(let ct=0;ct<tt;ct++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,ct),n.clear();else{ct===0&&(n.setRenderTarget(F.map),n.clear());const vt=F.getViewport(ct);o.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),U.viewport(o)}if(z.isPointLight){const vt=F.camera,Gt=F.matrix,Yt=z.distance||vt.far;Yt!==vt.far&&(vt.far=Yt,vt.updateProjectionMatrix()),br.setFromMatrixPosition(z.matrixWorld),vt.position.copy(br),Lc.copy(vt.position),Lc.add(cM[ct]),vt.up.copy(lM[ct]),vt.lookAt(Lc),vt.updateMatrixWorld(),Gt.makeTranslation(-br.x,-br.y,-br.z),rd.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(rd,vt.coordinateSystem,vt.reversedDepth)}else F.updateMatrices(z);i=F.getFrustum(),y(L,x,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===Rr&&S(F,x),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,I,R)};function S(T,L){const x=t.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(s.x,s.y,{format:vs,type:Mi})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(L,null,x,h,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(L,null,x,f,v,null)}function M(T,L,x,w){let I=null;const R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)I=R;else if(I=x.isPointLight===!0?c:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const U=I.uuid,G=L.uuid;let X=l[U];X===void 0&&(X={},l[U]=X);let D=X[G];D===void 0&&(D=I.clone(),X[G]=D,L.addEventListener("dispose",C)),I=D}if(I.visible=L.visible,I.wireframe=L.wireframe,w===Rr?I.side=L.shadowSide!==null?L.shadowSide:L.side:I.side=L.shadowSide!==null?L.shadowSide:d[L.side],I.alphaMap=L.alphaMap,I.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,I.map=L.map,I.clipShadows=L.clipShadows,I.clippingPlanes=L.clippingPlanes,I.clipIntersection=L.clipIntersection,I.displacementMap=L.displacementMap,I.displacementScale=L.displacementScale,I.displacementBias=L.displacementBias,I.wireframeLinewidth=L.wireframeLinewidth,I.linewidth=L.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const U=n.properties.get(I);U.light=x}return I}function y(T,L,x,w,I){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Rr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const G=t.update(T),X=T.material;if(Array.isArray(X)){const D=G.groups;for(let z=0,F=D.length;z<F;z++){const Z=D[z],V=X[Z.materialIndex];if(V&&V.visible){const tt=M(T,V,w,I);T.onBeforeShadow(n,T,L,x,G,tt,Z),n.renderBufferDirect(x,null,G,tt,T,Z),T.onAfterShadow(n,T,L,x,G,tt,Z)}}}else if(X.visible){const D=M(T,X,w,I);T.onBeforeShadow(n,T,L,x,G,D,null),n.renderBufferDirect(x,null,G,D,T,null),T.onAfterShadow(n,T,L,x,G,D,null)}}const U=T.children;for(let G=0,X=U.length;G<X;G++)y(U[G],L,x,w,I)}function C(T){T.target.removeEventListener("dispose",C);for(const x in l){const w=l[x],I=T.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function uM(n,t){function e(){let N=!1;const pt=new Le;let j=null;const Tt=new Le(0,0,0,0);return{setMask:function(mt){j!==mt&&!N&&(n.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){N=mt},setClear:function(mt,rt,Rt,jt,Xt){Xt===!0&&(mt*=jt,rt*=jt,Rt*=jt),pt.set(mt,rt,Rt,jt),Tt.equals(pt)===!1&&(n.clearColor(mt,rt,Rt,jt),Tt.copy(pt))},reset:function(){N=!1,j=null,Tt.set(-1,0,0,0)}}}function i(){let N=!1,pt=!1,j=null,Tt=null,mt=null;return{setReversed:function(rt){if(pt!==rt){const Rt=t.get("EXT_clip_control");rt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),pt=rt;const jt=mt;mt=null,this.setClear(jt)}},getReversed:function(){return pt},setTest:function(rt){rt?st(n.DEPTH_TEST):ut(n.DEPTH_TEST)},setMask:function(rt){j!==rt&&!N&&(n.depthMask(rt),j=rt)},setFunc:function(rt){if(pt&&(rt=Zm[rt]),Tt!==rt){switch(rt){case Hc:n.depthFunc(n.NEVER);break;case Wc:n.depthFunc(n.ALWAYS);break;case Xc:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case Yc:n.depthFunc(n.EQUAL);break;case qc:n.depthFunc(n.GEQUAL);break;case $c:n.depthFunc(n.GREATER);break;case Zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Tt=rt}},setLocked:function(rt){N=rt},setClear:function(rt){mt!==rt&&(mt=rt,pt&&(rt=1-rt),n.clearDepth(rt))},reset:function(){N=!1,j=null,Tt=null,mt=null,pt=!1}}}function s(){let N=!1,pt=null,j=null,Tt=null,mt=null,rt=null,Rt=null,jt=null,Xt=null;return{setTest:function(te){N||(te?st(n.STENCIL_TEST):ut(n.STENCIL_TEST))},setMask:function(te){pt!==te&&!N&&(n.stencilMask(te),pt=te)},setFunc:function(te,zn,ln){(j!==te||Tt!==zn||mt!==ln)&&(n.stencilFunc(te,zn,ln),j=te,Tt=zn,mt=ln)},setOp:function(te,zn,ln){(rt!==te||Rt!==zn||jt!==ln)&&(n.stencilOp(te,zn,ln),rt=te,Rt=zn,jt=ln)},setLocked:function(te){N=te},setClear:function(te){Xt!==te&&(n.clearStencil(te),Xt=te)},reset:function(){N=!1,pt=null,j=null,Tt=null,mt=null,rt=null,Rt=null,jt=null,Xt=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,M=null,y=null,C=null,T=null,L=null,x=new $t(0,0,0),w=0,I=!1,R=null,U=null,G=null,X=null,D=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Z=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=Z>=2);let tt=null,ct={};const vt=n.getParameter(n.SCISSOR_BOX),Gt=n.getParameter(n.VIEWPORT),Yt=new Le().fromArray(vt),Ut=new Le().fromArray(Gt);function k(N,pt,j,Tt){const mt=new Uint8Array(4),rt=n.createTexture();n.bindTexture(N,rt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<j;Rt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(pt,0,n.RGBA,1,1,Tt,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(pt+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return rt}const ht={};ht[n.TEXTURE_2D]=k(n.TEXTURE_2D,n.TEXTURE_2D,1),ht[n.TEXTURE_CUBE_MAP]=k(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[n.TEXTURE_2D_ARRAY]=k(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ht[n.TEXTURE_3D]=k(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(n.DEPTH_TEST),o.setFunc(ir),lt(!1),ot(Kh),st(n.CULL_FACE),nt(gi);function st(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ut(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Lt(N,pt){return h[N]!==pt?(n.bindFramebuffer(N,pt),h[N]=pt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=pt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ct(N,pt){let j=g,Tt=!1;if(N){j=f.get(pt),j===void 0&&(j=[],f.set(pt,j));const mt=N.textures;if(j.length!==mt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,Rt=mt.length;rt<Rt;rt++)j[rt]=n.COLOR_ATTACHMENT0+rt;j.length=mt.length,Tt=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,Tt=!0);Tt&&n.drawBuffers(j)}function Mt(N){return v!==N?(n.useProgram(N),v=N,!0):!1}const xt={[ns]:n.FUNC_ADD,[vm]:n.FUNC_SUBTRACT,[xm]:n.FUNC_REVERSE_SUBTRACT};xt[Sm]=n.MIN,xt[Mm]=n.MAX;const J={[ym]:n.ZERO,[Em]:n.ONE,[bm]:n.SRC_COLOR,[Gc]:n.SRC_ALPHA,[Pm]:n.SRC_ALPHA_SATURATE,[Rm]:n.DST_COLOR,[Am]:n.DST_ALPHA,[Tm]:n.ONE_MINUS_SRC_COLOR,[kc]:n.ONE_MINUS_SRC_ALPHA,[Cm]:n.ONE_MINUS_DST_COLOR,[wm]:n.ONE_MINUS_DST_ALPHA,[Lm]:n.CONSTANT_COLOR,[Dm]:n.ONE_MINUS_CONSTANT_COLOR,[Im]:n.CONSTANT_ALPHA,[Nm]:n.ONE_MINUS_CONSTANT_ALPHA};function nt(N,pt,j,Tt,mt,rt,Rt,jt,Xt,te){if(N===gi){m===!0&&(ut(n.BLEND),m=!1);return}if(m===!1&&(st(n.BLEND),m=!0),N!==_m){if(N!==p||te!==I){if((S!==ns||C!==ns)&&(n.blendEquation(n.FUNC_ADD),S=ns,C=ns),te)switch(N){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xr:n.blendFunc(n.ONE,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:de("WebGLState: Invalid blending: ",N);break}else switch(N){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jh:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jh:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",N);break}M=null,y=null,T=null,L=null,x.set(0,0,0),w=0,p=N,I=te}return}mt=mt||pt,rt=rt||j,Rt=Rt||Tt,(pt!==S||mt!==C)&&(n.blendEquationSeparate(xt[pt],xt[mt]),S=pt,C=mt),(j!==M||Tt!==y||rt!==T||Rt!==L)&&(n.blendFuncSeparate(J[j],J[Tt],J[rt],J[Rt]),M=j,y=Tt,T=rt,L=Rt),(jt.equals(x)===!1||Xt!==w)&&(n.blendColor(jt.r,jt.g,jt.b,Xt),x.copy(jt),w=Xt),p=N,I=!1}function K(N,pt){N.side===_n?ut(n.CULL_FACE):st(n.CULL_FACE);let j=N.side===an;pt&&(j=!j),lt(j),N.blending===Ks&&N.transparent===!1?nt(gi):nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Tt=N.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),P(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(N){R!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),R=N)}function ot(N){N!==pm?(st(n.CULL_FACE),N!==U&&(N===Kh?n.cullFace(n.BACK):N===mm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ut(n.CULL_FACE),U=N}function Dt(N){N!==G&&(F&&n.lineWidth(N),G=N)}function P(N,pt,j){N?(st(n.POLYGON_OFFSET_FILL),(X!==pt||D!==j)&&(X=pt,D=j,o.getReversed()&&(pt=-pt),n.polygonOffset(pt,j))):ut(n.POLYGON_OFFSET_FILL)}function Ft(N){N?st(n.SCISSOR_TEST):ut(n.SCISSOR_TEST)}function St(N){N===void 0&&(N=n.TEXTURE0+z-1),tt!==N&&(n.activeTexture(N),tt=N)}function gt(N,pt,j){j===void 0&&(tt===null?j=n.TEXTURE0+z-1:j=tt);let Tt=ct[j];Tt===void 0&&(Tt={type:void 0,texture:void 0},ct[j]=Tt),(Tt.type!==N||Tt.texture!==pt)&&(tt!==j&&(n.activeTexture(j),tt=j),n.bindTexture(N,pt||ht[N]),Tt.type=N,Tt.texture=pt)}function et(){const N=ct[tt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function zt(){try{n.compressedTexImage2D(...arguments)}catch(N){de("WebGLState:",N)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(N){de("WebGLState:",N)}}function _(){try{n.texSubImage2D(...arguments)}catch(N){de("WebGLState:",N)}}function O(){try{n.texSubImage3D(...arguments)}catch(N){de("WebGLState:",N)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(N){de("WebGLState:",N)}}function it(){try{n.compressedTexSubImage3D(...arguments)}catch(N){de("WebGLState:",N)}}function at(){try{n.texStorage2D(...arguments)}catch(N){de("WebGLState:",N)}}function dt(){try{n.texStorage3D(...arguments)}catch(N){de("WebGLState:",N)}}function $(){try{n.texImage2D(...arguments)}catch(N){de("WebGLState:",N)}}function Q(){try{n.texImage3D(...arguments)}catch(N){de("WebGLState:",N)}}function yt(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function Pt(N,pt){d[N]!==pt&&(n.pixelStorei(N,pt),d[N]=pt)}function _t(N){Yt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Yt.copy(N))}function ft(N){Ut.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ut.copy(N))}function Zt(N,pt){let j=l.get(pt);j===void 0&&(j=new WeakMap,l.set(pt,j));let Tt=j.get(N);Tt===void 0&&(Tt=n.getUniformBlockIndex(pt,N.name),j.set(N,Tt))}function ee(N,pt){const Tt=l.get(pt).get(N);c.get(pt)!==Tt&&(n.uniformBlockBinding(pt,Tt,N.__bindingPointIndex),c.set(pt,Tt))}function Qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},tt=null,ct={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,M=null,y=null,C=null,T=null,L=null,x=new $t(0,0,0),w=0,I=!1,R=null,U=null,G=null,X=null,D=null,Yt.set(0,0,n.canvas.width,n.canvas.height),Ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:ut,bindFramebuffer:Lt,drawBuffers:Ct,useProgram:Mt,setBlending:nt,setMaterial:K,setFlipSided:lt,setCullFace:ot,setLineWidth:Dt,setPolygonOffset:P,setScissorTest:Ft,activeTexture:St,bindTexture:gt,unbindTexture:et,compressedTexImage2D:zt,compressedTexImage3D:b,texImage2D:$,texImage3D:Q,pixelStorei:Pt,getParameter:yt,updateUBOMapping:Zt,uniformBlockBinding:ee,texStorage2D:at,texStorage3D:dt,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:q,compressedTexSubImage3D:it,scissor:_t,viewport:ft,reset:Qt}}function dM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new bt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,_){return g?new OffscreenCanvas(b,_):Ea("canvas")}function m(b,_,O){let q=1;const it=zt(b);if((it.width>O||it.height>O)&&(q=O/Math.max(it.width,it.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const at=Math.floor(q*it.width),dt=Math.floor(q*it.height);h===void 0&&(h=v(at,dt));const $=_?v(at,dt):h;return $.width=at,$.height=dt,$.getContext("2d").drawImage(b,0,0,at,dt),qt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+at+"x"+dt+")."),$}else return"data"in b&&qt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),b;return b}function p(b){return b.generateMipmaps}function S(b){n.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,_,O,q,it,at=!1){if(b!==null){if(n[b]!==void 0)return n[b];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let dt;q&&(dt=t.get("EXT_texture_norm16"),dt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===n.RED&&(O===n.FLOAT&&($=n.R32F),O===n.HALF_FLOAT&&($=n.R16F),O===n.UNSIGNED_BYTE&&($=n.R8),O===n.UNSIGNED_SHORT&&dt&&($=dt.R16_EXT),O===n.SHORT&&dt&&($=dt.R16_SNORM_EXT)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.R8UI),O===n.UNSIGNED_SHORT&&($=n.R16UI),O===n.UNSIGNED_INT&&($=n.R32UI),O===n.BYTE&&($=n.R8I),O===n.SHORT&&($=n.R16I),O===n.INT&&($=n.R32I)),_===n.RG&&(O===n.FLOAT&&($=n.RG32F),O===n.HALF_FLOAT&&($=n.RG16F),O===n.UNSIGNED_BYTE&&($=n.RG8),O===n.UNSIGNED_SHORT&&dt&&($=dt.RG16_EXT),O===n.SHORT&&dt&&($=dt.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RG8UI),O===n.UNSIGNED_SHORT&&($=n.RG16UI),O===n.UNSIGNED_INT&&($=n.RG32UI),O===n.BYTE&&($=n.RG8I),O===n.SHORT&&($=n.RG16I),O===n.INT&&($=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGB8UI),O===n.UNSIGNED_SHORT&&($=n.RGB16UI),O===n.UNSIGNED_INT&&($=n.RGB32UI),O===n.BYTE&&($=n.RGB8I),O===n.SHORT&&($=n.RGB16I),O===n.INT&&($=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGBA8UI),O===n.UNSIGNED_SHORT&&($=n.RGBA16UI),O===n.UNSIGNED_INT&&($=n.RGBA32UI),O===n.BYTE&&($=n.RGBA8I),O===n.SHORT&&($=n.RGBA16I),O===n.INT&&($=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_SHORT&&dt&&($=dt.RGB16_EXT),O===n.SHORT&&dt&&($=dt.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),_===n.RGBA){const Q=at?ya:ue.getTransfer(it);O===n.FLOAT&&($=n.RGBA32F),O===n.HALF_FLOAT&&($=n.RGBA16F),O===n.UNSIGNED_BYTE&&($=Q===ge?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&dt&&($=dt.RGBA16_EXT),O===n.SHORT&&dt&&($=dt.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function C(b,_){let O;return b?_===null||_===ti||_===qr?O=n.DEPTH24_STENCIL8:_===qn?O=n.DEPTH32F_STENCIL8:_===Yr&&(O=n.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ti||_===qr?O=n.DEPTH_COMPONENT24:_===qn?O=n.DEPTH_COMPONENT32F:_===Yr&&(O=n.DEPTH_COMPONENT16),O}function T(b,_){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==We&&b.minFilter!==Ke?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function L(b){const _=b.target;_.removeEventListener("dispose",L),w(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(b){const _=b.target;_.removeEventListener("dispose",x),R(_)}function w(b){const _=i.get(b);if(_.__webglInit===void 0)return;const O=b.source,q=f.get(O);if(q){const it=q[_.__cacheKey];it.usedTimes--,it.usedTimes===0&&I(b),Object.keys(q).length===0&&f.delete(O)}i.remove(b)}function I(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const O=b.source,q=f.get(O);delete q[_.__cacheKey],o.memory.textures--}function R(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let it=0;it<_.__webglFramebuffer[q].length;it++)n.deleteFramebuffer(_.__webglFramebuffer[q][it]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=b.textures;for(let q=0,it=O.length;q<it;q++){const at=i.get(O[q]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(b)}let U=0;function G(){U=0}function X(){return U}function D(b){U=b}function z(){const b=U;return b>=s.maxTextures&&qt("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),U+=1,b}function F(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function Z(b,_){const O=i.get(b);if(b.isVideoTexture&&gt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const q=b.image;if(q===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(O,b,_);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function V(b,_){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){ut(O,b,_);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function tt(b,_){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){ut(O,b,_);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function ct(b,_){const O=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&O.__version!==b.version){Lt(O,b,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const vt={[Kc]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[Jc]:n.MIRRORED_REPEAT},Gt={[We]:n.NEAREST,[Om]:n.NEAREST_MIPMAP_NEAREST,[vo]:n.NEAREST_MIPMAP_LINEAR,[Ke]:n.LINEAR,[Ja]:n.LINEAR_MIPMAP_NEAREST,[cs]:n.LINEAR_MIPMAP_LINEAR},Yt={[Vm]:n.NEVER,[Xm]:n.ALWAYS,[Gm]:n.LESS,[eh]:n.LEQUAL,[km]:n.EQUAL,[nh]:n.GEQUAL,[Hm]:n.GREATER,[Wm]:n.NOTEQUAL};function Ut(b,_){if(_.type===qn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ke||_.magFilter===Ja||_.magFilter===vo||_.magFilter===cs||_.minFilter===Ke||_.minFilter===Ja||_.minFilter===vo||_.minFilter===cs)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,vt[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,vt[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,vt[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Gt[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Gt[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===We||_.minFilter!==vo&&_.minFilter!==cs||_.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function k(b,_){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",L));const q=_.source;let it=f.get(q);it===void 0&&(it={},f.set(q,it));const at=F(_);if(at!==b.__cacheKey){it[at]===void 0&&(it[at]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),it[at].usedTimes++;const dt=it[b.__cacheKey];dt!==void 0&&(it[b.__cacheKey].usedTimes--,dt.usedTimes===0&&I(_)),b.__cacheKey=at,b.__webglTexture=it[at].texture}return O}function ht(b,_,O){return Math.floor(Math.floor(b/O)/_)}function st(b,_,O,q){const at=b.updateRanges;if(at.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,q,_.data);else{at.sort((Pt,_t)=>Pt.start-_t.start);let dt=0;for(let Pt=1;Pt<at.length;Pt++){const _t=at[dt],ft=at[Pt],Zt=_t.start+_t.count,ee=ht(ft.start,_.width,4),Qt=ht(_t.start,_.width,4);ft.start<=Zt+1&&ee===Qt&&ht(ft.start+ft.count-1,_.width,4)===ee?_t.count=Math.max(_t.count,ft.start+ft.count-_t.start):(++dt,at[dt]=ft)}at.length=dt+1;const $=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),yt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Pt=0,_t=at.length;Pt<_t;Pt++){const ft=at[Pt],Zt=Math.floor(ft.start/4),ee=Math.ceil(ft.count/4),Qt=Zt%_.width,N=Math.floor(Zt/_.width),pt=ee,j=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,Qt,N,pt,j,O,q,_.data)}b.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,$),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,yt)}}function ut(b,_,O){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);const it=k(b,_),at=_.source;e.bindTexture(q,b.__webglTexture,n.TEXTURE0+O);const dt=i.get(at);if(at.version!==dt.__version||it===!0){if(e.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const j=ue.getPrimaries(ue.workingColorSpace),Tt=_.colorSpace===zi?null:ue.getPrimaries(_.colorSpace),mt=_.colorSpace===zi||j===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=m(_.image,!1,s.maxTextureSize);Q=et(_,Q);const yt=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type);let _t=y(_.internalFormat,yt,Pt,_.normalized,_.colorSpace,_.isVideoTexture);Ut(q,_);let ft;const Zt=_.mipmaps,ee=_.isVideoTexture!==!0,Qt=dt.__version===void 0||it===!0,N=at.dataReady,pt=T(_,Q);if(_.isDepthTexture)_t=C(_.format===ls,_.type),Qt&&(ee?e.texStorage2D(n.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,_t,Q.width,Q.height,0,yt,Pt,null));else if(_.isDataTexture)if(Zt.length>0){ee&&Qt&&e.texStorage2D(n.TEXTURE_2D,pt,_t,Zt[0].width,Zt[0].height);for(let j=0,Tt=Zt.length;j<Tt;j++)ft=Zt[j],ee?N&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ft.width,ft.height,yt,Pt,ft.data):e.texImage2D(n.TEXTURE_2D,j,_t,ft.width,ft.height,0,yt,Pt,ft.data);_.generateMipmaps=!1}else ee?(Qt&&e.texStorage2D(n.TEXTURE_2D,pt,_t,Q.width,Q.height),N&&st(_,Q,yt,Pt)):e.texImage2D(n.TEXTURE_2D,0,_t,Q.width,Q.height,0,yt,Pt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ee&&Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,_t,Zt[0].width,Zt[0].height,Q.depth);for(let j=0,Tt=Zt.length;j<Tt;j++)if(ft=Zt[j],_.format!==Fn)if(yt!==null)if(ee){if(N)if(_.layerUpdates.size>0){const mt=Fu(ft.width,ft.height,_.format,_.type);for(const rt of _.layerUpdates){const Rt=ft.data.subarray(rt*mt/ft.data.BYTES_PER_ELEMENT,(rt+1)*mt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,rt,ft.width,ft.height,1,yt,Rt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,Q.depth,yt,ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,_t,ft.width,ft.height,Q.depth,0,ft.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,Q.depth,yt,Pt,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,_t,ft.width,ft.height,Q.depth,0,yt,Pt,ft.data)}else{ee&&Qt&&e.texStorage2D(n.TEXTURE_2D,pt,_t,Zt[0].width,Zt[0].height);for(let j=0,Tt=Zt.length;j<Tt;j++)ft=Zt[j],_.format!==Fn?yt!==null?ee?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ft.width,ft.height,yt,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,j,_t,ft.width,ft.height,0,ft.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?N&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ft.width,ft.height,yt,Pt,ft.data):e.texImage2D(n.TEXTURE_2D,j,_t,ft.width,ft.height,0,yt,Pt,ft.data)}else if(_.isDataArrayTexture)if(ee){if(Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,_t,Q.width,Q.height,Q.depth),N)if(_.layerUpdates.size>0){const j=Fu(Q.width,Q.height,_.format,_.type);for(const Tt of _.layerUpdates){const mt=Q.data.subarray(Tt*j/Q.data.BYTES_PER_ELEMENT,(Tt+1)*j/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Tt,Q.width,Q.height,1,yt,Pt,mt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,yt,Pt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,yt,Pt,Q.data);else if(_.isData3DTexture)ee?(Qt&&e.texStorage3D(n.TEXTURE_3D,pt,_t,Q.width,Q.height,Q.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,yt,Pt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,yt,Pt,Q.data);else if(_.isFramebufferTexture){if(Qt)if(ee)e.texStorage2D(n.TEXTURE_2D,pt,_t,Q.width,Q.height);else{let j=Q.width,Tt=Q.height;for(let mt=0;mt<pt;mt++)e.texImage2D(n.TEXTURE_2D,mt,_t,j,Tt,0,yt,Pt,null),j>>=1,Tt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),d.add(_),j.onpaint=jt=>{const Xt=jt.changedElements;for(const te of d)Xt.includes(te.image)&&(te.needsUpdate=!0)},j.requestPaint();return}const Tt=0,mt=n.RGBA,rt=n.RGBA,Rt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Tt,mt,rt,Rt,Q),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Zt.length>0){if(ee&&Qt){const j=zt(Zt[0]);e.texStorage2D(n.TEXTURE_2D,pt,_t,j.width,j.height)}for(let j=0,Tt=Zt.length;j<Tt;j++)ft=Zt[j],ee?N&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,yt,Pt,ft):e.texImage2D(n.TEXTURE_2D,j,_t,yt,Pt,ft);_.generateMipmaps=!1}else if(ee){if(Qt){const j=zt(Q);e.texStorage2D(n.TEXTURE_2D,pt,_t,j.width,j.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Pt,Q)}else e.texImage2D(n.TEXTURE_2D,0,_t,yt,Pt,Q);p(_)&&S(q),dt.__version=at.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Lt(b,_,O){if(_.image.length!==6)return;const q=k(b,_),it=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const at=i.get(it);if(it.version!==at.__version||q===!0){e.activeTexture(n.TEXTURE0+O);const dt=ue.getPrimaries(ue.workingColorSpace),$=_.colorSpace===zi?null:ue.getPrimaries(_.colorSpace),Q=_.colorSpace===zi||dt===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const yt=_.isCompressedTexture||_.image[0].isCompressedTexture,Pt=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let rt=0;rt<6;rt++)!yt&&!Pt?_t[rt]=m(_.image[rt],!0,s.maxCubemapSize):_t[rt]=Pt?_.image[rt].image:_.image[rt],_t[rt]=et(_,_t[rt]);const ft=_t[0],Zt=r.convert(_.format,_.colorSpace),ee=r.convert(_.type),Qt=y(_.internalFormat,Zt,ee,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,pt=at.__version===void 0||q===!0,j=it.dataReady;let Tt=T(_,ft);Ut(n.TEXTURE_CUBE_MAP,_);let mt;if(yt){N&&pt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Qt,ft.width,ft.height);for(let rt=0;rt<6;rt++){mt=_t[rt].mipmaps;for(let Rt=0;Rt<mt.length;Rt++){const jt=mt[Rt];_.format!==Fn?Zt!==null?N?j&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,0,0,jt.width,jt.height,Zt,jt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,Qt,jt.width,jt.height,0,jt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,0,0,jt.width,jt.height,Zt,ee,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,Qt,jt.width,jt.height,0,Zt,ee,jt.data)}}}else{if(mt=_.mipmaps,N&&pt){mt.length>0&&Tt++;const rt=zt(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Qt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Pt){N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,_t[rt].width,_t[rt].height,Zt,ee,_t[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,_t[rt].width,_t[rt].height,0,Zt,ee,_t[rt].data);for(let Rt=0;Rt<mt.length;Rt++){const Xt=mt[Rt].image[rt].image;N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,0,0,Xt.width,Xt.height,Zt,ee,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,Qt,Xt.width,Xt.height,0,Zt,ee,Xt.data)}}else{N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Zt,ee,_t[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,Zt,ee,_t[rt]);for(let Rt=0;Rt<mt.length;Rt++){const jt=mt[Rt];N?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,0,0,Zt,ee,jt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,Qt,Zt,ee,jt.image[rt])}}}p(_)&&S(n.TEXTURE_CUBE_MAP),at.__version=it.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ct(b,_,O,q,it,at){const dt=r.convert(O.format,O.colorSpace),$=r.convert(O.type),Q=y(O.internalFormat,dt,$,O.normalized,O.colorSpace),yt=i.get(_),Pt=i.get(O);if(Pt.__renderTarget=_,!yt.__hasExternalTextures){const _t=Math.max(1,_.width>>at),ft=Math.max(1,_.height>>at);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,at,Q,_t,ft,_.depth,0,dt,$,null):e.texImage2D(it,at,Q,_t,ft,0,dt,$,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),St(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,it,Pt.__webglTexture,0,Ft(_)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,it,Pt.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(b,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const q=_.depthTexture,it=q&&q.isDepthTexture?q.type:null,at=C(_.stencilBuffer,it),dt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;St(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft(_),at,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft(_),at,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,at,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,b)}else{const q=_.textures;for(let it=0;it<q.length;it++){const at=q[it],dt=r.convert(at.format,at.colorSpace),$=r.convert(at.type),Q=y(at.internalFormat,dt,$,at.normalized,at.colorSpace);St(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft(_),Q,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft(_),Q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Q,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(b,_,O){const q=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=i.get(_.depthTexture);if(it.__renderTarget=_,(!it.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(it.__webglInit===void 0&&(it.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),it.__webglTexture===void 0){it.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),Ut(n.TEXTURE_CUBE_MAP,_.depthTexture);const yt=r.convert(_.depthTexture.format),Pt=r.convert(_.depthTexture.type);let _t;_.depthTexture.format===yi?_t=n.DEPTH_COMPONENT24:_.depthTexture.format===ls&&(_t=n.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,_t,_.width,_.height,0,yt,Pt,null)}}else Z(_.depthTexture,0);const at=it.__webglTexture,dt=Ft(_),$=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,Q=_.depthTexture.format===ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===yi)St(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,$,at,0,dt):n.framebufferTexture2D(n.FRAMEBUFFER,Q,$,at,0);else if(_.depthTexture.format===ls)St(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,$,at,0,dt):n.framebufferTexture2D(n.FRAMEBUFFER,Q,$,at,0);else throw new Error("Unknown depthTexture format")}function J(b){const _=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const it=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",it)};q.addEventListener("dispose",it),_.__depthDisposeCallback=it}_.__boundDepthTexture=q}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let q=0;q<6;q++)xt(_.__webglFramebuffer[q],b,q);else{const q=b.texture.mipmaps;q&&q.length>0?xt(_.__webglFramebuffer[0],b,0):xt(_.__webglFramebuffer,b,0)}else if(O){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),Mt(_.__webglDepthbuffer[q],b,!1);else{const it=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,at)}}else{const q=b.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Mt(_.__webglDepthbuffer,b,!1);else{const it=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,at)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(b,_,O){const q=i.get(b);_!==void 0&&Ct(q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&J(b)}function K(b){const _=b.texture,O=i.get(b),q=i.get(_);b.addEventListener("dispose",x);const it=b.textures,at=b.isWebGLCubeRenderTarget===!0,dt=it.length>1;if(dt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,o.memory.textures++),at){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let Q=0;Q<_.mipmaps.length;Q++)O.__webglFramebuffer[$][Q]=n.createFramebuffer()}else O.__webglFramebuffer[$]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)O.__webglFramebuffer[$]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(dt)for(let $=0,Q=it.length;$<Q;$++){const yt=i.get(it[$]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&St(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<it.length;$++){const Q=it[$];O.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[$]);const yt=r.convert(Q.format,Q.colorSpace),Pt=r.convert(Q.type),_t=y(Q.internalFormat,yt,Pt,Q.normalized,Q.colorSpace,b.isXRRenderTarget===!0),ft=Ft(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,_t,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,O.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ut(n.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Ct(O.__webglFramebuffer[$][Q],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else Ct(O.__webglFramebuffer[$],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(_)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let $=0,Q=it.length;$<Q;$++){const yt=it[$],Pt=i.get(yt);let _t=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(_t=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,Pt.__webglTexture),Ut(_t,yt),Ct(O.__webglFramebuffer,b,yt,n.COLOR_ATTACHMENT0+$,_t,0),p(yt)&&S(_t)}e.unbindTexture()}else{let $=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&($=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture($,q.__webglTexture),Ut($,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Ct(O.__webglFramebuffer[Q],b,_,n.COLOR_ATTACHMENT0,$,Q);else Ct(O.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,$,0);p(_)&&S($),e.unbindTexture()}b.depthBuffer&&J(b)}function lt(b){const _=b.textures;for(let O=0,q=_.length;O<q;O++){const it=_[O];if(p(it)){const at=M(b),dt=i.get(it).__webglTexture;e.bindTexture(at,dt),S(at),e.unbindTexture()}}}const ot=[],Dt=[];function P(b){if(b.samples>0){if(St(b)===!1){const _=b.textures,O=b.width,q=b.height;let it=n.COLOR_BUFFER_BIT;const at=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(b),$=_.length>1;if($)for(let yt=0;yt<_.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);const Q=b.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let yt=0;yt<_.length;yt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[yt]);const Pt=i.get(_[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,it,n.NEAREST),c===!0&&(ot.length=0,Dt.length=0,ot.push(n.COLOR_ATTACHMENT0+yt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ot.push(at),Dt.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let yt=0;yt<_.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,dt.__webglColorRenderbuffer[yt]);const Pt=i.get(_[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Ft(b){return Math.min(s.maxSamples,b.samples)}function St(b){const _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function gt(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function et(b,_){const O=b.colorSpace,q=b.format,it=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Ma&&O!==zi&&(ue.getTransfer(O)===ge?(q!==Fn||it!==vn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",O)),_}function zt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.getTextureUnits=X,this.setTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=tt,this.setTextureCube=ct,this.rebindTextures=nt,this.setupRenderTarget=K,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function fM(n,t){function e(i,s=zi){let r;const o=ue.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===Kl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ff)return n.BYTE;if(i===pf)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===Zl)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===Mi)return n.HALF_FLOAT;if(i===_f)return n.ALPHA;if(i===vf)return n.RGB;if(i===Fn)return n.RGBA;if(i===yi)return n.DEPTH_COMPONENT;if(i===ls)return n.DEPTH_STENCIL;if(i===xf)return n.RED;if(i===jl)return n.RED_INTEGER;if(i===vs)return n.RG;if(i===Ql)return n.RG_INTEGER;if(i===th)return n.RGBA_INTEGER;if(i===oa||i===aa||i===ca||i===la)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jc||i===Qc||i===tl||i===el)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nl||i===il||i===sl||i===rl||i===ol||i===xa||i===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nl||i===il)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===rl)return r.COMPRESSED_R11_EAC;if(i===ol)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xa)return r.COMPRESSED_RG11_EAC;if(i===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cl||i===ll||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Sl||i===Ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ll)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_l)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ml)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yl||i===El||i===bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===yl)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tl||i===Al||i===Sa||i===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const pM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mM=`
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

}`;class gM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Rf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ei({vertexShader:pM,fragmentShader:mM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _M extends Es{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new gM,p={},S=e.getContextAttributes();let M=null,y=null;const C=[],T=[],L=new bt;let x=null;const w=new mn;w.viewport=new Le;const I=new mn;I.viewport=new Le;const R=[w,I],U=new Ag;let G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ht=C[k];return ht===void 0&&(ht=new ic,C[k]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(k){let ht=C[k];return ht===void 0&&(ht=new ic,C[k]=ht),ht.getGripSpace()},this.getHand=function(k){let ht=C[k];return ht===void 0&&(ht=new ic,C[k]=ht),ht.getHandSpace()};function D(k){const ht=T.indexOf(k.inputSource);if(ht===-1)return;const st=C[ht];st!==void 0&&(st.update(k.inputSource,k.frame,l||o),st.dispatchEvent({type:k.type,data:k.inputSource}))}function z(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",F);for(let k=0;k<C.length;k++){const ht=T[k];ht!==null&&(T[k]=null,C[k].disconnect(ht))}G=null,X=null,m.reset();for(const k in p)delete p[k];t.setRenderTarget(M),f=null,h=null,d=null,s=null,y=null,Ut.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",z),s.addEventListener("inputsourceschange",F),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,ut=null,Lt=null;S.depth&&(Lt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=S.stencil?ls:yi,ut=S.stencil?qr:ti);const Ct={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ct),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Jn(h.textureWidth,h.textureHeight,{format:Fn,type:vn,depthTexture:new rr(h.textureWidth,h.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const st={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ut.setContext(s),Ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(k){for(let ht=0;ht<k.removed.length;ht++){const st=k.removed[ht],ut=T.indexOf(st);ut>=0&&(T[ut]=null,C[ut].disconnect(st))}for(let ht=0;ht<k.added.length;ht++){const st=k.added[ht];let ut=T.indexOf(st);if(ut===-1){for(let Ct=0;Ct<C.length;Ct++)if(Ct>=T.length){T.push(st),ut=Ct;break}else if(T[Ct]===null){T[Ct]=st,ut=Ct;break}if(ut===-1)break}const Lt=C[ut];Lt&&Lt.connect(st)}}const Z=new A,V=new A;function tt(k,ht,st){Z.setFromMatrixPosition(ht.matrixWorld),V.setFromMatrixPosition(st.matrixWorld);const ut=Z.distanceTo(V),Lt=ht.projectionMatrix.elements,Ct=st.projectionMatrix.elements,Mt=Lt[14]/(Lt[10]-1),xt=Lt[14]/(Lt[10]+1),J=(Lt[9]+1)/Lt[5],nt=(Lt[9]-1)/Lt[5],K=(Lt[8]-1)/Lt[0],lt=(Ct[8]+1)/Ct[0],ot=Mt*K,Dt=Mt*lt,P=ut/(-K+lt),Ft=P*-K;if(ht.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ft),k.translateZ(P),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Lt[10]===-1)k.projectionMatrix.copy(ht.projectionMatrix),k.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const St=Mt+P,gt=xt+P,et=ot-Ft,zt=Dt+(ut-Ft),b=J*xt/gt*St,_=nt*xt/gt*St;k.projectionMatrix.makePerspective(et,zt,b,_,St,gt),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function ct(k,ht){ht===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ht.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let ht=k.near,st=k.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(st=m.depthFar)),U.near=I.near=w.near=ht,U.far=I.far=w.far=st,(G!==U.near||X!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,X=U.far),U.layers.mask=k.layers.mask|6,w.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;const ut=k.parent,Lt=U.cameras;ct(U,ut);for(let Ct=0;Ct<Lt.length;Ct++)ct(Lt[Ct],ut);Lt.length===2?tt(U,w,I):U.projectionMatrix.copy(w.projectionMatrix),vt(k,U,ut)};function vt(k,ht,st){st===null?k.matrix.copy(ht.matrixWorld):(k.matrix.copy(st.matrixWorld),k.matrix.invert(),k.matrix.multiply(ht.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ht.projectionMatrix),k.projectionMatrixInverse.copy(ht.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Zr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(k){c=k,h!==null&&(h.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(k){return p[k]};let Gt=null;function Yt(k,ht){if(u=ht.getViewerPose(l||o),g=ht,u!==null){const st=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ut=!1;st.length!==U.cameras.length&&(U.cameras.length=0,ut=!0);for(let xt=0;xt<st.length;xt++){const J=st[xt];let nt=null;if(f!==null)nt=f.getViewport(J);else{const lt=d.getViewSubImage(h,J);nt=lt.viewport,xt===0&&(t.setRenderTargetTextures(y,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(y))}let K=R[xt];K===void 0&&(K=new mn,K.layers.enable(xt),K.viewport=new Le,R[xt]=K),K.matrix.fromArray(J.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(J.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(nt.x,nt.y,nt.width,nt.height),xt===0&&(U.matrix.copy(K.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ut===!0&&U.cameras.push(K)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const xt=d.getDepthInformation(st[0]);xt&&xt.isValid&&xt.texture&&m.init(xt,s.renderState)}if(Lt&&Lt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let xt=0;xt<st.length;xt++){const J=st[xt].camera;if(J){let nt=p[J];nt||(nt=new Rf,p[J]=nt);const K=d.getCameraImage(J);nt.sourceTexture=K}}}}for(let st=0;st<C.length;st++){const ut=T[st],Lt=C[st];ut!==null&&Lt!==void 0&&Lt.update(ut,ht,l||o)}Gt&&Gt(k,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),g=null}const Ut=new Gf;Ut.setAnimationLoop(Yt),this.setAnimationLoop=function(k){Gt=k},this.dispose=function(){}}}const vM=new Re,$f=new ne;$f.set(-1,0,0,0,1,0,0,0,1);function xM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),M=S.envMap,y=S.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(vM.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($f),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function SM(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const y=M.program;i.uniformBlockBinding(S,y)}function l(S,M){let y=s[S.id];y===void 0&&(g(S),y=u(S),s[S.id]=y,S.addEventListener("dispose",m));const C=M.program;i.updateUBOMapping(S,C);const T=t.render.frame;r[S.id]!==T&&(h(S),r[S.id]=T)}function u(S){const M=d();S.__bindingPointIndex=M;const y=n.createBuffer(),C=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return de("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const M=s[S.id],y=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,L=y.length;T<L;T++){const x=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,I=x.length;w<I;w++){const R=x[w];if(f(R,T,w,C)===!0){const U=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let D=0;D<G.length;D++){const z=G[D],F=v(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,U+X,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):ArrayBuffer.isView(z)?R.__data.set(new z.constructor(z.buffer,z.byteOffset,R.__data.length)):(z.toArray(R.__data,X),X+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,M,y,C){const T=S.value,L=M+"_"+y;if(C[L]===void 0)return typeof T=="number"||typeof T=="boolean"?C[L]=T:ArrayBuffer.isView(T)?C[L]=T.slice():C[L]=T.clone(),!0;{const x=C[L];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return C[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function g(S){const M=S.uniforms;let y=0;const C=16;for(let L=0,x=M.length;L<x;L++){const w=Array.isArray(M[L])?M[L]:[M[L]];for(let I=0,R=w.length;I<R;I++){const U=w[I],G=Array.isArray(U.value)?U.value:[U.value];for(let X=0,D=G.length;X<D;X++){const z=G[X],F=v(z),Z=y%C,V=Z%F.boundary,tt=Z+V;y+=V,tt!==0&&C-tt<F.storage&&(y+=C-tt),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=F.storage}}}const T=y%C;return T>0&&(y+=C-T),S.__size=y,S.__cache={},this}function v(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}const MM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function yM(){return kn===null&&(kn=new L0(MM,16,16,vs,Mi),kn.name="DFG_LUT",kn.minFilter=Ke,kn.magFilter=Ke,kn.wrapS=mi,kn.wrapT=mi,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class EM{constructor(t={}){const{canvas:e=qm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=vn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=f,m=new Set([th,Ql,jl]),p=new Set([vn,ti,Yr,qr,Kl,Jl]),S=new Uint32Array(4),M=new Int32Array(4),y=new A;let C=null,T=null;const L=[],x=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let R=!1,U=null;this._outputColorSpace=Fe;let G=0,X=0,D=null,z=-1,F=null;const Z=new Le,V=new Le;let tt=null;const ct=new $t(0);let vt=0,Gt=e.width,Yt=e.height,Ut=1,k=null,ht=null;const st=new Le(0,0,Gt,Yt),ut=new Le(0,0,Gt,Yt);let Lt=!1;const Ct=new oh;let Mt=!1,xt=!1;const J=new Re,nt=new A,K=new Le,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Dt(){return D===null?Ut:1}let P=i;function Ft(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$l}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",jt,!1),P===null){const B="webgl2";if(P=Ft(B,E),P===null)throw Ft(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw de("WebGLRenderer: "+E.message),E}let St,gt,et,zt,b,_,O,q,it,at,dt,$,Q,yt,Pt,_t,ft,Zt,ee,Qt,N,pt,j;function Tt(){St=new yx(P),St.init(),N=new fM(P,St),gt=new px(P,St,t,N),et=new uM(P,St),gt.reversedDepthBuffer&&h&&et.buffers.depth.setReversed(!0),zt=new Tx(P),b=new JS,_=new dM(P,St,et,b,gt,N,zt),O=new Mx(I),q=new Cg(P),pt=new dx(P,q),it=new Ex(P,q,zt,pt),at=new wx(P,it,q,pt,zt),Zt=new Ax(P,gt,_),Pt=new mx(b),dt=new KS(I,O,St,gt,pt,Pt),$=new xM(I,b),Q=new QS,yt=new rM(St),ft=new ux(I,O,et,at,g,c),_t=new hM(I,at,gt),j=new SM(P,zt,gt,et),ee=new fx(P,St,zt),Qt=new bx(P,St,zt),zt.programs=dt.programs,I.capabilities=gt,I.extensions=St,I.properties=b,I.renderLists=Q,I.shadowMap=_t,I.state=et,I.info=zt}Tt(),v!==vn&&(w=new Cx(v,e.width,e.height,s,r));const mt=new _M(I,P);this.xr=mt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=St.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=St.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(E){E!==void 0&&(Ut=E,this.setSize(Gt,Yt,!1))},this.getSize=function(E){return E.set(Gt,Yt)},this.setSize=function(E,B,Y=!0){if(mt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=E,Yt=B,e.width=Math.floor(E*Ut),e.height=Math.floor(B*Ut),Y===!0&&(e.style.width=E+"px",e.style.height=B+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Gt*Ut,Yt*Ut).floor()},this.setDrawingBufferSize=function(E,B,Y){Gt=E,Yt=B,Ut=Y,e.width=Math.floor(E*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(v===vn){de("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){qt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Z)},this.getViewport=function(E){return E.copy(st)},this.setViewport=function(E,B,Y,H){E.isVector4?st.set(E.x,E.y,E.z,E.w):st.set(E,B,Y,H),et.viewport(Z.copy(st).multiplyScalar(Ut).round())},this.getScissor=function(E){return E.copy(ut)},this.setScissor=function(E,B,Y,H){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,B,Y,H),et.scissor(V.copy(ut).multiplyScalar(Ut).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(E){et.setScissorTest(Lt=E)},this.setOpaqueSort=function(E){k=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,Y=!0){let H=0;if(E){let W=!1;if(D!==null){const wt=D.texture.format;W=m.has(wt)}if(W){const wt=D.texture.type,Ot=p.has(wt),At=ft.getClearColor(),Vt=ft.getClearAlpha(),kt=At.r,ie=At.g,ae=At.b;Ot?(S[0]=kt,S[1]=ie,S[2]=ae,S[3]=Vt,P.clearBufferuiv(P.COLOR,0,S)):(M[0]=kt,M[1]=ie,M[2]=ae,M[3]=Vt,P.clearBufferiv(P.COLOR,0,M))}else H|=P.COLOR_BUFFER_BIT}B&&(H|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",jt,!1),ft.dispose(),Q.dispose(),yt.dispose(),b.dispose(),O.dispose(),at.dispose(),pt.dispose(),j.dispose(),dt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",zh),mt.removeEventListener("sessionend",Vh),$i.stop()};function rt(E){E.preventDefault(),iu("WebGLRenderer: Context Lost."),R=!0}function Rt(){iu("WebGLRenderer: Context Restored."),R=!1;const E=zt.autoReset,B=_t.enabled,Y=_t.autoUpdate,H=_t.needsUpdate,W=_t.type;Tt(),zt.autoReset=E,_t.enabled=B,_t.autoUpdate=Y,_t.needsUpdate=H,_t.type=W}function jt(E){de("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xt(E){const B=E.target;B.removeEventListener("dispose",Xt),te(B)}function te(E){zn(E),b.remove(E)}function zn(E){const B=b.get(E).programs;B!==void 0&&(B.forEach(function(Y){dt.releaseProgram(Y)}),E.isShaderMaterial&&dt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Y,H,W,wt){B===null&&(B=lt);const Ot=W.isMesh&&W.matrixWorld.determinant()<0,At=zp(E,B,Y,H,W);et.setMaterial(H,Ot);let Vt=Y.index,kt=1;if(H.wireframe===!0){if(Vt=it.getWireframeAttribute(Y),Vt===void 0)return;kt=2}const ie=Y.drawRange,ae=Y.attributes.position;let Wt=ie.start*kt,ve=(ie.start+ie.count)*kt;wt!==null&&(Wt=Math.max(Wt,wt.start*kt),ve=Math.min(ve,(wt.start+wt.count)*kt)),Vt!==null?(Wt=Math.max(Wt,0),ve=Math.min(ve,Vt.count)):ae!=null&&(Wt=Math.max(Wt,0),ve=Math.min(ve,ae.count));const Ie=ve-Wt;if(Ie<0||Ie===1/0)return;pt.setup(W,H,At,Y,Vt);let Pe,xe=ee;if(Vt!==null&&(Pe=q.get(Vt),xe=Qt,xe.setIndex(Pe)),W.isMesh)H.wireframe===!0?(et.setLineWidth(H.wireframeLinewidth*Dt()),xe.setMode(P.LINES)):xe.setMode(P.TRIANGLES);else if(W.isLine){let Xe=H.linewidth;Xe===void 0&&(Xe=1),et.setLineWidth(Xe*Dt()),W.isLineSegments?xe.setMode(P.LINES):W.isLineLoop?xe.setMode(P.LINE_LOOP):xe.setMode(P.LINE_STRIP)}else W.isPoints?xe.setMode(P.POINTS):W.isSprite&&xe.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(St.get("WEBGL_multi_draw"))xe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xe=W._multiDrawStarts,It=W._multiDrawCounts,hn=W._multiDrawCount,fe=Vt?q.get(Vt).bytesPerElement:1,xn=b.get(H).currentProgram.getUniforms();for(let Vn=0;Vn<hn;Vn++)xn.setValue(P,"_gl_DrawID",Vn),xe.render(Xe[Vn]/fe,It[Vn])}else if(W.isInstancedMesh)xe.renderInstances(Wt,Ie,W.count);else if(Y.isInstancedBufferGeometry){const Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,It=Math.min(Y.instanceCount,Xe);xe.renderInstances(Wt,Ie,It)}else xe.render(Wt,Ie)};function ln(E,B,Y){E.transparent===!0&&E.side===_n&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,po(E,B,Y),E.side=Wi,E.needsUpdate=!0,po(E,B,Y),E.side=_n):po(E,B,Y)}this.compile=function(E,B,Y=null){Y===null&&(Y=E),T=yt.get(Y),T.init(B),x.push(T),Y.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const H=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const wt=W.material;if(wt)if(Array.isArray(wt))for(let Ot=0;Ot<wt.length;Ot++){const At=wt[Ot];ln(At,Y,W),H.add(At)}else ln(wt,Y,W),H.add(wt)}),T=x.pop(),H},this.compileAsync=function(E,B,Y=null){const H=this.compile(E,B,Y);return new Promise(W=>{function wt(){if(H.forEach(function(Ot){b.get(Ot).currentProgram.isReady()&&H.delete(Ot)}),H.size===0){W(E);return}setTimeout(wt,10)}St.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Xa=null;function Op(E){Xa&&Xa(E)}function zh(){$i.stop()}function Vh(){$i.start()}const $i=new Gf;$i.setAnimationLoop(Op),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(E){Xa=E,mt.setAnimationLoop(E),E===null?$i.stop():$i.start()},mt.addEventListener("sessionstart",zh),mt.addEventListener("sessionend",Vh),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(E,B);const Y=mt.enabled===!0&&mt.isPresenting===!0,H=w!==null&&(D===null||Y)&&w.begin(I,D);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(B),B=mt.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,B,D),T=yt.get(E,x.length),T.init(B),T.state.textureUnits=_.getTextureUnits(),x.push(T),J.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ct.setFromProjectionMatrix(J,$n,B.reversedDepth),xt=this.localClippingEnabled,Mt=Pt.init(this.clippingPlanes,xt),C=Q.get(E,L.length),C.init(),L.push(C),mt.enabled===!0&&mt.isPresenting===!0){const Ot=I.xr.getDepthSensingMesh();Ot!==null&&Ya(Ot,B,-1/0,I.sortObjects)}Ya(E,B,0,I.sortObjects),C.finish(),I.sortObjects===!0&&C.sort(k,ht),ot=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,ot&&ft.addToRenderList(C,E),this.info.render.frame++,Mt===!0&&Pt.beginShadows();const W=T.state.shadowsArray;if(_t.render(W,E,B),Mt===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&w.hasRenderPass())===!1){const Ot=C.opaque,At=C.transmissive;if(T.setupLights(),B.isArrayCamera){const Vt=B.cameras;if(At.length>0)for(let kt=0,ie=Vt.length;kt<ie;kt++){const ae=Vt[kt];kh(Ot,At,E,ae)}ot&&ft.render(E);for(let kt=0,ie=Vt.length;kt<ie;kt++){const ae=Vt[kt];Gh(C,E,ae,ae.viewport)}}else At.length>0&&kh(Ot,At,E,B),ot&&ft.render(E),Gh(C,E,B)}D!==null&&X===0&&(_.updateMultisampleRenderTarget(D),_.updateRenderTargetMipmap(D)),H&&w.end(I),E.isScene===!0&&E.onAfterRender(I,E,B),pt.resetDefaultState(),z=-1,F=null,x.pop(),x.length>0?(T=x[x.length-1],_.setTextureUnits(T.state.textureUnits),Mt===!0&&Pt.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?C=L[L.length-1]:C=null,U!==null&&U.renderEnd()};function Ya(E,B,Y,H){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ct.intersectsSprite(E)){H&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);const Ot=at.update(E),At=E.material;At.visible&&C.push(E,Ot,At,Y,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ct.intersectsObject(E))){const Ot=at.update(E),At=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),K.copy(E.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),K.copy(Ot.boundingSphere.center)),K.applyMatrix4(E.matrixWorld).applyMatrix4(J)),Array.isArray(At)){const Vt=Ot.groups;for(let kt=0,ie=Vt.length;kt<ie;kt++){const ae=Vt[kt],Wt=At[ae.materialIndex];Wt&&Wt.visible&&C.push(E,Ot,Wt,Y,K.z,ae)}}else At.visible&&C.push(E,Ot,At,Y,K.z,null)}}const wt=E.children;for(let Ot=0,At=wt.length;Ot<At;Ot++)Ya(wt[Ot],B,Y,H)}function Gh(E,B,Y,H){const{opaque:W,transmissive:wt,transparent:Ot}=E;T.setupLightsView(Y),Mt===!0&&Pt.setGlobalState(I.clippingPlanes,Y),H&&et.viewport(Z.copy(H)),W.length>0&&fo(W,B,Y),wt.length>0&&fo(wt,B,Y),Ot.length>0&&fo(Ot,B,Y),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function kh(E,B,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Wt=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Jn(1,1,{generateMipmaps:!0,type:Wt?Mi:vn,minFilter:cs,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace})}const wt=T.state.transmissionRenderTarget[H.id],Ot=H.viewport||Z;wt.setSize(Ot.z*I.transmissionResolutionScale,Ot.w*I.transmissionResolutionScale);const At=I.getRenderTarget(),Vt=I.getActiveCubeFace(),kt=I.getActiveMipmapLevel();I.setRenderTarget(wt),I.getClearColor(ct),vt=I.getClearAlpha(),vt<1&&I.setClearColor(16777215,.5),I.clear(),ot&&ft.render(Y);const ie=I.toneMapping;I.toneMapping=Bn;const ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),Mt===!0&&Pt.setGlobalState(I.clippingPlanes,H),fo(E,Y,H),_.updateMultisampleRenderTarget(wt),_.updateRenderTargetMipmap(wt),St.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let ve=0,Ie=B.length;ve<Ie;ve++){const Pe=B[ve],{object:xe,geometry:Xe,material:It,group:hn}=Pe;if(It.side===_n&&xe.layers.test(H.layers)){const fe=It.side;It.side=an,It.needsUpdate=!0,Hh(xe,Y,H,Xe,It,hn),It.side=fe,It.needsUpdate=!0,Wt=!0}}Wt===!0&&(_.updateMultisampleRenderTarget(wt),_.updateRenderTargetMipmap(wt))}I.setRenderTarget(At,Vt,kt),I.setClearColor(ct,vt),ae!==void 0&&(H.viewport=ae),I.toneMapping=ie}function fo(E,B,Y){const H=B.isScene===!0?B.overrideMaterial:null;for(let W=0,wt=E.length;W<wt;W++){const Ot=E[W],{object:At,geometry:Vt,group:kt}=Ot;let ie=Ot.material;ie.allowOverride===!0&&H!==null&&(ie=H),At.layers.test(Y.layers)&&Hh(At,B,Y,Vt,ie,kt)}}function Hh(E,B,Y,H,W,wt){E.onBeforeRender(I,B,Y,H,W,wt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(I,B,Y,H,E,wt),W.transparent===!0&&W.side===_n&&W.forceSinglePass===!1?(W.side=an,W.needsUpdate=!0,I.renderBufferDirect(Y,B,H,W,E,wt),W.side=Wi,W.needsUpdate=!0,I.renderBufferDirect(Y,B,H,W,E,wt),W.side=_n):I.renderBufferDirect(Y,B,H,W,E,wt),E.onAfterRender(I,B,Y,H,W,wt)}function po(E,B,Y){B.isScene!==!0&&(B=lt);const H=b.get(E),W=T.state.lights,wt=T.state.shadowsArray,Ot=W.state.version,At=dt.getParameters(E,W.state,wt,B,Y,T.state.lightProbeGridArray),Vt=dt.getProgramCacheKey(At);let kt=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;const ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=O.get(E.envMap||H.environment,ie),H.envMapRotation=H.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,kt===void 0&&(E.addEventListener("dispose",Xt),kt=new Map,H.programs=kt);let ae=kt.get(Vt);if(ae!==void 0){if(H.currentProgram===ae&&H.lightsStateVersion===Ot)return Xh(E,At),ae}else At.uniforms=dt.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,Y,At),E.onBeforeCompile(At,I),ae=dt.acquireProgram(At,Vt),kt.set(Vt,ae),H.uniforms=At.uniforms;const Wt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Wt.clippingPlanes=Pt.uniform),Xh(E,At),H.needsLights=Gp(E),H.lightsStateVersion=Ot,H.needsLights&&(Wt.ambientLightColor.value=W.state.ambient,Wt.lightProbe.value=W.state.probe,Wt.directionalLights.value=W.state.directional,Wt.directionalLightShadows.value=W.state.directionalShadow,Wt.spotLights.value=W.state.spot,Wt.spotLightShadows.value=W.state.spotShadow,Wt.rectAreaLights.value=W.state.rectArea,Wt.ltc_1.value=W.state.rectAreaLTC1,Wt.ltc_2.value=W.state.rectAreaLTC2,Wt.pointLights.value=W.state.point,Wt.pointLightShadows.value=W.state.pointShadow,Wt.hemisphereLights.value=W.state.hemi,Wt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Wt.spotLightMatrix.value=W.state.spotLightMatrix,Wt.spotLightMap.value=W.state.spotLightMap,Wt.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=ae,H.uniformsList=null,ae}function Wh(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=ua.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Xh(E,B){const Y=b.get(E);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Bp(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let Y=0,H=E.length;Y<H;Y++){const W=E[Y];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function zp(E,B,Y,H,W){B.isScene!==!0&&(B=lt),_.resetTextureUnits();const wt=B.fog,Ot=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,At=D===null?I.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ue.workingColorSpace,Vt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,kt=O.get(H.envMap||Ot,Vt),ie=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ae=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Wt=!!Y.morphAttributes.position,ve=!!Y.morphAttributes.normal,Ie=!!Y.morphAttributes.color;let Pe=Bn;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Pe=I.toneMapping);const xe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Xe=xe!==void 0?xe.length:0,It=b.get(H),hn=T.state.lights;if(Mt===!0&&(xt===!0||E!==F)){const ye=E===F&&H.id===z;Pt.setState(H,E,ye)}let fe=!1;H.version===It.__version?(It.needsLights&&It.lightsStateVersion!==hn.state.version||It.outputColorSpace!==At||W.isBatchedMesh&&It.batching===!1||!W.isBatchedMesh&&It.batching===!0||W.isBatchedMesh&&It.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&It.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&It.instancing===!1||!W.isInstancedMesh&&It.instancing===!0||W.isSkinnedMesh&&It.skinning===!1||!W.isSkinnedMesh&&It.skinning===!0||W.isInstancedMesh&&It.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&It.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&It.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&It.instancingMorph===!1&&W.morphTexture!==null||It.envMap!==kt||H.fog===!0&&It.fog!==wt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Pt.numPlanes||It.numIntersection!==Pt.numIntersection)||It.vertexAlphas!==ie||It.vertexTangents!==ae||It.morphTargets!==Wt||It.morphNormals!==ve||It.morphColors!==Ie||It.toneMapping!==Pe||It.morphTargetsCount!==Xe||!!It.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,It.__version=H.version);let xn=It.currentProgram;fe===!0&&(xn=po(H,B,W),U&&H.isNodeMaterial&&U.onUpdateProgram(H,xn,It));let Vn=!1,Ai=!1,ws=!1;const Se=xn.getUniforms(),Ne=It.uniforms;if(et.useProgram(xn.program)&&(Vn=!0,Ai=!0,ws=!0),H.id!==z&&(z=H.id,Ai=!0),It.needsLights){const ye=Bp(T.state.lightProbeGridArray,W);It.lightProbeGrid!==ye&&(It.lightProbeGrid=ye,Ai=!0)}if(Vn||F!==E){et.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Se.setValue(P,"projectionMatrix",E.projectionMatrix),Se.setValue(P,"viewMatrix",E.matrixWorldInverse);const Ri=Se.map.cameraPosition;Ri!==void 0&&Ri.setValue(P,nt.setFromMatrixPosition(E.matrixWorld)),gt.logarithmicDepthBuffer&&Se.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Se.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,Ai=!0,ws=!0)}if(It.needsLights&&(hn.state.directionalShadowMap.length>0&&Se.setValue(P,"directionalShadowMap",hn.state.directionalShadowMap,_),hn.state.spotShadowMap.length>0&&Se.setValue(P,"spotShadowMap",hn.state.spotShadowMap,_),hn.state.pointShadowMap.length>0&&Se.setValue(P,"pointShadowMap",hn.state.pointShadowMap,_)),W.isSkinnedMesh){Se.setOptional(P,W,"bindMatrix"),Se.setOptional(P,W,"bindMatrixInverse");const ye=W.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),Se.setValue(P,"boneTexture",ye.boneTexture,_))}W.isBatchedMesh&&(Se.setOptional(P,W,"batchingTexture"),Se.setValue(P,"batchingTexture",W._matricesTexture,_),Se.setOptional(P,W,"batchingIdTexture"),Se.setValue(P,"batchingIdTexture",W._indirectTexture,_),Se.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&Se.setValue(P,"batchingColorTexture",W._colorsTexture,_));const wi=Y.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Zt.update(W,Y,xn),(Ai||It.receiveShadow!==W.receiveShadow)&&(It.receiveShadow=W.receiveShadow,Se.setValue(P,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(Ne.envMapIntensity.value=B.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=yM()),Ai){if(Se.setValue(P,"toneMappingExposure",I.toneMappingExposure),It.needsLights&&Vp(Ne,ws),wt&&H.fog===!0&&$.refreshFogUniforms(Ne,wt),$.refreshMaterialUniforms(Ne,H,Ut,Yt,T.state.transmissionRenderTarget[E.id]),It.needsLights&&It.lightProbeGrid){const ye=It.lightProbeGrid;Ne.probesSH.value=ye.texture,Ne.probesMin.value.copy(ye.boundingBox.min),Ne.probesMax.value.copy(ye.boundingBox.max),Ne.probesResolution.value.copy(ye.resolution)}ua.upload(P,Wh(It),Ne,_)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ua.upload(P,Wh(It),Ne,_),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Se.setValue(P,"center",W.center),Se.setValue(P,"modelViewMatrix",W.modelViewMatrix),Se.setValue(P,"normalMatrix",W.normalMatrix),Se.setValue(P,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){const ye=H.uniformsGroups;for(let Ri=0,Rs=ye.length;Ri<Rs;Ri++){const Yh=ye[Ri];j.update(Yh,xn),j.bind(Yh,xn)}}return xn}function Vp(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Gp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,B,Y){const H=b.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),b.get(E.texture).__webglTexture=B,b.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const Y=b.get(E);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const kp=P.createFramebuffer();this.setRenderTarget=function(E,B=0,Y=0){D=E,G=B,X=Y;let H=null,W=!1,wt=!1;if(E){const At=b.get(E);if(At.__useDefaultFramebuffer!==void 0){et.bindFramebuffer(P.FRAMEBUFFER,At.__webglFramebuffer),Z.copy(E.viewport),V.copy(E.scissor),tt=E.scissorTest,et.viewport(Z),et.scissor(V),et.setScissorTest(tt),z=-1;return}else if(At.__webglFramebuffer===void 0)_.setupRenderTarget(E);else if(At.__hasExternalTextures)_.rebindTextures(E,b.get(E.texture).__webglTexture,b.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ie=E.depthTexture;if(At.__boundDepthTexture!==ie){if(ie!==null&&b.has(ie)&&(E.width!==ie.image.width||E.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(E)}}const Vt=E.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(wt=!0);const kt=b.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(kt[B])?H=kt[B][Y]:H=kt[B],W=!0):E.samples>0&&_.useMultisampledRTT(E)===!1?H=b.get(E).__webglMultisampledFramebuffer:Array.isArray(kt)?H=kt[Y]:H=kt,Z.copy(E.viewport),V.copy(E.scissor),tt=E.scissorTest}else Z.copy(st).multiplyScalar(Ut).floor(),V.copy(ut).multiplyScalar(Ut).floor(),tt=Lt;if(Y!==0&&(H=kp),et.bindFramebuffer(P.FRAMEBUFFER,H)&&et.drawBuffers(E,H),et.viewport(Z),et.scissor(V),et.setScissorTest(tt),W){const At=b.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,At.__webglTexture,Y)}else if(wt){const At=B;for(let Vt=0;Vt<E.textures.length;Vt++){const kt=b.get(E.textures[Vt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Vt,kt.__webglTexture,Y,At)}}else if(E!==null&&Y!==0){const At=b.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,At.__webglTexture,Y)}z=-1},this.readRenderTargetPixels=function(E,B,Y,H,W,wt,Ot,At=0){if(!(E&&E.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ot!==void 0&&(Vt=Vt[Ot]),Vt){et.bindFramebuffer(P.FRAMEBUFFER,Vt);try{const kt=E.textures[At],ie=kt.format,ae=kt.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+At),!gt.textureFormatReadable(ie)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(ae)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-H&&Y>=0&&Y<=E.height-W&&P.readPixels(B,Y,H,W,N.convert(ie),N.convert(ae),wt)}finally{const kt=D!==null?b.get(D).__webglFramebuffer:null;et.bindFramebuffer(P.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(E,B,Y,H,W,wt,Ot,At=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ot!==void 0&&(Vt=Vt[Ot]),Vt)if(B>=0&&B<=E.width-H&&Y>=0&&Y<=E.height-W){et.bindFramebuffer(P.FRAMEBUFFER,Vt);const kt=E.textures[At],ie=kt.format,ae=kt.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+At),!gt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Wt),P.bufferData(P.PIXEL_PACK_BUFFER,wt.byteLength,P.STREAM_READ),P.readPixels(B,Y,H,W,N.convert(ie),N.convert(ae),0);const ve=D!==null?b.get(D).__webglFramebuffer:null;et.bindFramebuffer(P.FRAMEBUFFER,ve);const Ie=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await $m(P,Ie,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Wt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,wt),P.deleteBuffer(Wt),P.deleteSync(Ie),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,Y=0){const H=Math.pow(2,-Y),W=Math.floor(E.image.width*H),wt=Math.floor(E.image.height*H),Ot=B!==null?B.x:0,At=B!==null?B.y:0;_.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,Ot,At,W,wt),et.unbindTexture()};const Hp=P.createFramebuffer(),Wp=P.createFramebuffer();this.copyTextureToTexture=function(E,B,Y=null,H=null,W=0,wt=0){let Ot,At,Vt,kt,ie,ae,Wt,ve,Ie;const Pe=E.isCompressedTexture?E.mipmaps[wt]:E.image;if(Y!==null)Ot=Y.max.x-Y.min.x,At=Y.max.y-Y.min.y,Vt=Y.isBox3?Y.max.z-Y.min.z:1,kt=Y.min.x,ie=Y.min.y,ae=Y.isBox3?Y.min.z:0;else{const Ne=Math.pow(2,-W);Ot=Math.floor(Pe.width*Ne),At=Math.floor(Pe.height*Ne),E.isDataArrayTexture?Vt=Pe.depth:E.isData3DTexture?Vt=Math.floor(Pe.depth*Ne):Vt=1,kt=0,ie=0,ae=0}H!==null?(Wt=H.x,ve=H.y,Ie=H.z):(Wt=0,ve=0,Ie=0);const xe=N.convert(B.format),Xe=N.convert(B.type);let It;B.isData3DTexture?(_.setTexture3D(B,0),It=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(_.setTexture2DArray(B,0),It=P.TEXTURE_2D_ARRAY):(_.setTexture2D(B,0),It=P.TEXTURE_2D),et.activeTexture(P.TEXTURE0),et.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),et.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),et.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const hn=et.getParameter(P.UNPACK_ROW_LENGTH),fe=et.getParameter(P.UNPACK_IMAGE_HEIGHT),xn=et.getParameter(P.UNPACK_SKIP_PIXELS),Vn=et.getParameter(P.UNPACK_SKIP_ROWS),Ai=et.getParameter(P.UNPACK_SKIP_IMAGES);et.pixelStorei(P.UNPACK_ROW_LENGTH,Pe.width),et.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pe.height),et.pixelStorei(P.UNPACK_SKIP_PIXELS,kt),et.pixelStorei(P.UNPACK_SKIP_ROWS,ie),et.pixelStorei(P.UNPACK_SKIP_IMAGES,ae);const ws=E.isDataArrayTexture||E.isData3DTexture,Se=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Ne=b.get(E),wi=b.get(B),ye=b.get(Ne.__renderTarget),Ri=b.get(wi.__renderTarget);et.bindFramebuffer(P.READ_FRAMEBUFFER,ye.__webglFramebuffer),et.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Rs=0;Rs<Vt;Rs++)ws&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,b.get(E).__webglTexture,W,ae+Rs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,b.get(B).__webglTexture,wt,Ie+Rs)),P.blitFramebuffer(kt,ie,Ot,At,Wt,ve,Ot,At,P.DEPTH_BUFFER_BIT,P.NEAREST);et.bindFramebuffer(P.READ_FRAMEBUFFER,null),et.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||b.has(E)){const Ne=b.get(E),wi=b.get(B);et.bindFramebuffer(P.READ_FRAMEBUFFER,Hp),et.bindFramebuffer(P.DRAW_FRAMEBUFFER,Wp);for(let ye=0;ye<Vt;ye++)ws?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ne.__webglTexture,W,ae+ye):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ne.__webglTexture,W),Se?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,wi.__webglTexture,wt,Ie+ye):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,wi.__webglTexture,wt),W!==0?P.blitFramebuffer(kt,ie,Ot,At,Wt,ve,Ot,At,P.COLOR_BUFFER_BIT,P.NEAREST):Se?P.copyTexSubImage3D(It,wt,Wt,ve,Ie+ye,kt,ie,Ot,At):P.copyTexSubImage2D(It,wt,Wt,ve,kt,ie,Ot,At);et.bindFramebuffer(P.READ_FRAMEBUFFER,null),et.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Se?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(It,wt,Wt,ve,Ie,Ot,At,Vt,xe,Xe,Pe.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(It,wt,Wt,ve,Ie,Ot,At,Vt,xe,Pe.data):P.texSubImage3D(It,wt,Wt,ve,Ie,Ot,At,Vt,xe,Xe,Pe):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,wt,Wt,ve,Ot,At,xe,Xe,Pe.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,wt,Wt,ve,Pe.width,Pe.height,xe,Pe.data):P.texSubImage2D(P.TEXTURE_2D,wt,Wt,ve,Ot,At,xe,Xe,Pe);et.pixelStorei(P.UNPACK_ROW_LENGTH,hn),et.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe),et.pixelStorei(P.UNPACK_SKIP_PIXELS,xn),et.pixelStorei(P.UNPACK_SKIP_ROWS,Vn),et.pixelStorei(P.UNPACK_SKIP_IMAGES,Ai),wt===0&&B.generateMipmaps&&P.generateMipmap(It),et.unbindTexture()},this.initRenderTarget=function(E){b.get(E).__webglFramebuffer===void 0&&_.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?_.setTextureCube(E,0):E.isData3DTexture?_.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?_.setTexture2DArray(E,0):_.setTexture2D(E,0),et.unbindTexture()},this.resetState=function(){G=0,X=0,D=null,et.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}const An=1/255,Zf={X:"x",Y:"y",Z:"z",W:"w"},nn=0,Or=1,Dc=2,da=0,Br=1,Ic=2,pe={kind:0,path:0,base:"",axis:"x"};function Kf(n,t,e,i,s,r,o){if(t!==0){const a=Math.tan(On(t));n[4]+=n[0]*a,n[5]+=n[1]*a,n[6]+=n[2]*a}if(e!==0){const a=Math.tan(On(e));n[0]+=n[4]*a,n[1]+=n[5]*a,n[2]+=n[6]*a}if(i!==0){const a=Math.tan(On(i));n[0]+=n[8]*a,n[1]+=n[9]*a,n[2]+=n[10]*a}(s!==0||r!==0||o!==0)&&(n[12]+=s-(n[0]*s+n[4]*r+n[8]*o),n[13]+=r-(n[1]*s+n[5]*r+n[9]*o),n[14]+=o-(n[2]*s+n[6]*r+n[10]*o))}function Ga(n){return n?`#${n.getHexString(Fe)}`:null}function fs(n,t){return n?t==="x"||t==="y"?!!(n.isVector2||n.isVector3||n.isVector4):t==="z"?!!(n.isVector3||n.isVector4):!!n.isVector4:!1}function Jf(n,t){const e=n[t];if(e!==void 0){if(e&&e.isColor)return pe.kind=da,pe.path=nn,pe;if(e&&e.isUniformNode){const o=e.value;return o&&o.isColor?(pe.kind=da,pe.path=Dc,pe):typeof o=="number"||typeof o=="boolean"?(pe.kind=Br,pe.path=Dc,pe):null}return typeof e=="number"||typeof e=="boolean"?(pe.kind=Br,pe.path=nn,pe):null}const i=n.uniforms,s=i&&i[t];if(s){const o=s.value;if(o&&o.isColor)return pe.kind=da,pe.path=Or,pe;if(typeof o=="number")return pe.kind=Br,pe.path=Or,pe}const r=Zf[t[t.length-1]];if(r){const o=t.slice(0,-1);if(fs(n[o],r))return pe.kind=Ic,pe.path=nn,pe.base=o,pe.axis=r,pe;const a=n[o];if(a&&a.isUniformNode&&fs(a.value,r))return pe.kind=Ic,pe.path=Dc,pe.base=o,pe.axis=r,pe;const c=i&&i[o];if(c&&fs(c.value,r))return pe.kind=Ic,pe.path=Or,pe.base=o,pe.axis=r,pe}return null}function Ss(n,t,e){if(e===nn)return n[t];if(e===Or){const s=n.uniforms,r=s&&s[t];return r?r.value:null}const i=n[t];return i?i.value:null}function od(n,t,e,i){if(i===nn){n[t]=e;return}if(i===Or){const r=n.uniforms,o=r&&r[t];o&&(o.value=e);return}const s=n[t];s&&(s.value=e)}function ka(n,t,e,i){if(i===void 0&&(i=0),!n)return i;const s=Array.isArray(n)?n[0]:n;if(!s)return i;const r=Ss(s,t,e);return r??i}function fh(n,t,e,i){if(n)if(Array.isArray(n))for(let s=0,r=n.length;s<r;s++)od(n[s],t,e,i);else od(n,t,e,i)}function ph(n,t,e){if(!n)return null;const i=Array.isArray(n)?n[0]:n;return Ga(i?Ss(i,t,e):null)}function mh(n,t,e,i){if(!n)return;const s=e[0]*An,r=e[1]*An,o=e[2]*An;if(Array.isArray(n))for(let a=0,c=n.length;a<c;a++){const l=Ss(n[a],t,i);l&&l.setRGB(s,r,o,Fe)}else{const a=Ss(n,t,i);a&&a.setRGB(s,r,o,Fe)}}function bM(n,t,e,i){if(!n)return 0;const s=Array.isArray(n)?n[0]:n,r=s?Ss(s,t,i):null;return r?r[e]:0}function TM(n,t,e,i,s){if(n)if(Array.isArray(n))for(let r=0,o=n.length;r<o;r++){const a=Ss(n[r],t,s);a&&(a[e]=i)}else{const r=Ss(n,t,s);r&&(r[e]=i)}}const AM=n=>n,wM=n=>n.material,RM=[{},{},{}],CM=[{},{},{}],PM=[{},{},{}],LM=[{},{},{}],DM=[{},{},{}],IM=[{},{},{}],jf=(n,t,e,i,s,r)=>{const o=t.path;if(t.kind===da){const u=i[o];return u[n]||(u[n]={get:d=>ph(e(d),n,o),set:(d,h,f)=>mh(e(d),n,f._numbers,o)})}if(t.kind===Br){const u=s[o];return u[n]||(u[n]={get:d=>ka(e(d),n,o),set:(d,h)=>fh(e(d),n,h,o)})}const a=t.base,c=t.axis,l=r[o];return l[n]||(l[n]={get:u=>bM(e(u),a,c,o),set:(u,d)=>TM(e(u),a,c,d,o)})};ys.registerPropertyResolver((n,t)=>{const e=Jf(n,t);return!e||e.kind===Br&&e.path===nn?null:jf(t,e,AM,RM,CM,PM)});ys.registerPropertyResolver((n,t)=>{if(n[t]!==void 0)return null;const e=n.material;if(!e)return null;const i=Array.isArray(e)?e[0]:e;if(!i)return null;const s=Jf(i,t);return s?jf(t,s,wM,LM,DM,IM):null});const Qf={rotation:1,angle:1},ad={};ys.registerPropertyResolver((n,t)=>!Qf[t]||typeof n[t]!="number"?null:ad[t]||(ad[t]={get:e=>Gi(e[t]),set:(e,i)=>{e[t]=On(i)}}));const cd={};ys.registerPropertyResolver((n,t)=>{const e=Zf[t[t.length-1]];if(!e)return null;const i=t.slice(0,-1);if(!Qf[i])return null;const s=n[i];return!s||!s.isEuler?null:cd[t]||(cd[t]={get:r=>Gi(r[i][e]),set:(r,o)=>{r[i][e]=On(o)}})});const co=ys.registerTargetAdapter(n=>!!(n&&n.isUniformNode));co.registerProperty("color",n=>Ga(n.value),(n,t,e)=>{const i=e._numbers;n.value.setRGB(i[0]*An,i[1]*An,i[2]*An,Fe)},n=>!!(n.value&&n.value.isColor));co.registerProperty("x",n=>n.value.x,(n,t)=>{n.value.x=t},n=>fs(n.value,"x"));co.registerProperty("y",n=>n.value.y,(n,t)=>{n.value.y=t},n=>fs(n.value,"y"));co.registerProperty("z",n=>n.value.z,(n,t)=>{n.value.z=t},n=>fs(n.value,"z"));co.registerProperty("w",n=>n.value.w,(n,t)=>{n.value.w=t},n=>fs(n.value,"w"));const ld=n=>n.isLight?n:n.material,zr=Symbol("animejs.skewOrigin"),Nl=Symbol("animejs.opacity");function lo(n,t){if(t===void 0)if(n.material)t=ka(n.material,"opacity",nn,1);else{const i=n[Nl];t=i===void 0?1:i}const e=n.scale;n.visible=!!(t&&e.x&&e.y&&e.z)}function tp(n){let t=n[zr];if(t)return t;t=n[zr]={skewX:0,skewY:0,skewZ:0,originX:0,originY:0,originZ:0};const e=n.updateMatrix;return n.updateMatrix=function(){e.call(this);const i=this[zr];(i.skewX!==0||i.skewY!==0||i.skewZ!==0||i.originX!==0||i.originY!==0||i.originZ!==0)&&Kf(this.matrix.elements,i.skewX,i.skewY,i.skewZ,i.originX,i.originY,i.originZ)},t}const Ge=ys.registerTargetAdapter(n=>n instanceof Be);Ge.registerProperty("x",n=>n.position.x,(n,t)=>{n.position.x=t});Ge.registerProperty("y",n=>n.position.y,(n,t)=>{n.position.y=t});Ge.registerProperty("z",n=>n.position.z,(n,t)=>{n.position.z=t});Ge.registerProperty("rotateX",n=>Gi(n.rotation.x),(n,t)=>{n.rotation.x=On(t)});Ge.registerProperty("rotateY",n=>Gi(n.rotation.y),(n,t)=>{n.rotation.y=On(t)});Ge.registerProperty("rotateZ",n=>Gi(n.rotation.z),(n,t)=>{n.rotation.z=On(t)});Ge.registerProperty("scaleX",n=>n.scale.x,(n,t)=>{n.scale.x=t,lo(n)});Ge.registerProperty("scaleY",n=>n.scale.y,(n,t)=>{n.scale.y=t,lo(n)});Ge.registerProperty("scaleZ",n=>n.scale.z,(n,t)=>{n.scale.z=t,lo(n)});Ge.registerProperty("scale",n=>n.scale.x,(n,t)=>{n.scale.x=t,n.scale.y=t,n.scale.z=t,lo(n)});Ge.registerProperty("visible",n=>n.visible,(n,t)=>{n.visible=!!t});Ge.registerProperty("opacity",n=>{if(n.material)return ka(n.material,"opacity",nn,1);const t=n[Nl];return t===void 0?1:t},(n,t)=>{n.material?fh(n.material,"opacity",t,nn):n[Nl]=t,lo(n,t)},n=>!n.isLight);Ge.registerProperty("color",n=>ph(ld(n),"color",nn),(n,t,e)=>mh(ld(n),"color",e._numbers,nn));Ge.registerProperty("groundColor",n=>ph(n,"groundColor",nn),(n,t,e)=>mh(n,"groundColor",e._numbers,nn),n=>!!n.groundColor);Ge.registerProperty("background",n=>{const t=n.background;return t&&t.isColor?Ga(t):"#000000"},(n,t,e)=>{const i=n;let s=i.background;(!s||!s.isColor)&&(s=new $t,i.background=s);const r=e._numbers;s.setRGB(r[0]*An,r[1]*An,r[2]*An,Fe)},n=>!!n.isScene);const ho=(n,t,e,i)=>{Ge.registerProperty(n,s=>s[t](),(s,r)=>{s[e](r)},s=>!!s[i])};ho("volume","getVolume","setVolume","setVolume");ho("refDistance","getRefDistance","setRefDistance","setRefDistance");ho("rolloffFactor","getRolloffFactor","setRolloffFactor","setRefDistance");ho("maxDistance","getMaxDistance","setMaxDistance","setRefDistance");ho("focalLength","getFocalLength","setFocalLength","setFocalLength");const Ti=(n,t)=>{Ge.registerProperty(n,e=>e[n],(e,i)=>{e[n]=i,e.updateProjectionMatrix()},t)},ep=n=>!!n.isPerspectiveCamera,Ha=n=>!!n.isOrthographicCamera;Ti("fov",ep);Ti("aspect",ep);Ti("left",Ha);Ti("right",Ha);Ti("top",Ha);Ti("bottom",Ha);const mr=(n,t)=>{Ge.registerProperty(n,e=>{const i=e[zr];return i?i[t]:0},(e,i)=>{tp(e)[t]=i})};mr("skewX","skewX");mr("skewY","skewY");mr("skewZ","skewZ");mr("transformOriginX","originX");mr("transformOriginY","originY");mr("transformOriginZ","originZ");Ge.registerProperty("transformOrigin",n=>{const t=n[zr];return t?`${t.originX} ${t.originY} ${t.originZ}`:"0 0 0"},(n,t,e)=>{const i=tp(n),s=e._numbers;i.originX=s[0],i.originY=s[1],i.originZ=s[2]});const gh=n=>!!n.isPerspectiveCamera||!!n.isOrthographicCamera;Ti("near",gh);Ti("far",gh);Ti("zoom",gh);const Qi=n=>!!(n._skewX||n._skewY||n._skewZ||n._originX||n._originY||n._originZ),qo=1,$o=2,Zo=4,ts=8;class NM{constructor(t,e){this.isAnimejsInstanceProxy=!0,this.parent=t.mesh,this.id=e,this._position=new A,this._rotation=new Ei(0,0,0,"XYZ"),this._scale=new A(1,1,1),this._matrix=new Re,this._quat=new Ts,this._color=new $t,this._dirty=0,this._skewX=0,this._skewY=0,this._skewZ=0,this._originX=0,this._originY=0,this._originZ=0,this._hasSkewOrigin=!1,this._dirtyList=t.dirtyList;const i=t.mesh;this._hasSetColor="setColorAt"in i,this._hasSetVisible="setVisibleAt"in i,this._hasGetVisible="getVisibleAt"in i,i.getMatrixAt(e,this._matrix),this._matrix.elements[15]===0&&this._matrix.identity(),this._matrix.decompose(this._position,this._quat,this._scale),this._rotation.setFromQuaternion(this._quat,"XYZ"),"getColorAt"in i&&"instanceColor"in i&&i.instanceColor&&i.getColorAt(e,this._color)}_markDirty(t){this._dirty===0&&this._dirtyList.push(this),this._dirty|=t}_flush(){const t=this._dirty;if(!t)return;const e=this._matrix,i=this._position;if(t===qo&&!this._hasSkewOrigin){const s=e.elements;s[12]=i.x,s[13]=i.y,s[14]=i.z}else{const s=this._quat;t&$o&&s.setFromEuler(this._rotation),e.compose(i,s,this._scale),this._hasSkewOrigin&&Kf(e.elements,this._skewX,this._skewY,this._skewZ,this._originX,this._originY,this._originZ)}this.parent.setMatrixAt(this.id,e),this._dirty=0}get x(){return this._position.x}set x(t){this._position.x=t,this._markDirty(qo)}get y(){return this._position.y}set y(t){this._position.y=t,this._markDirty(qo)}get z(){return this._position.z}set z(t){this._position.z=t,this._markDirty(qo)}get rotateX(){return Gi(this._rotation.x)}set rotateX(t){this._rotation.x=On(t),this._markDirty($o)}get rotateY(){return Gi(this._rotation.y)}set rotateY(t){this._rotation.y=On(t),this._markDirty($o)}get rotateZ(){return Gi(this._rotation.z)}set rotateZ(t){this._rotation.z=On(t),this._markDirty($o)}get scaleX(){return this._scale.x}set scaleX(t){this._scale.x=t,this._markDirty(Zo)}get scaleY(){return this._scale.y}set scaleY(t){this._scale.y=t,this._markDirty(Zo)}get scaleZ(){return this._scale.z}set scaleZ(t){this._scale.z=t,this._markDirty(Zo)}get scale(){return this._scale.x}set scale(t){const e=this._scale;e.x=t,e.y=t,e.z=t,this._markDirty(Zo)}get skewX(){return this._skewX}set skewX(t){this._skewX=t,this._hasSkewOrigin=Qi(this),this._markDirty(ts)}get skewY(){return this._skewY}set skewY(t){this._skewY=t,this._hasSkewOrigin=Qi(this),this._markDirty(ts)}get skewZ(){return this._skewZ}set skewZ(t){this._skewZ=t,this._hasSkewOrigin=Qi(this),this._markDirty(ts)}get transformOriginX(){return this._originX}set transformOriginX(t){this._originX=t,this._hasSkewOrigin=Qi(this),this._markDirty(ts)}get transformOriginY(){return this._originY}set transformOriginY(t){this._originY=t,this._hasSkewOrigin=Qi(this),this._markDirty(ts)}get transformOriginZ(){return this._originZ}set transformOriginZ(t){this._originZ=t,this._hasSkewOrigin=Qi(this),this._markDirty(ts)}get opacity(){return ka(this.parent.material,"opacity",nn,1)}set opacity(t){fh(this.parent.material,"opacity",t,nn)}get visible(){return this._hasGetVisible?this.parent.getVisibleAt(this.id):!0}set visible(t){this._hasSetVisible&&this.parent.setVisibleAt(this.id,t)}}const np=ys.registerTargetAdapter(n=>n instanceof NM);np.registerProperty("color",n=>Ga(n._color),(n,t,e)=>{if(!n._hasSetColor)return;const i=e._numbers;n._color.setRGB(i[0]*An,i[1]*An,i[2]*An,Fe);const s=n.parent;s.setColorAt(n.id,n._color),s.instanceColor&&(s.instanceColor.needsUpdate=!0)});np.registerProperty("transformOrigin",n=>`${n._originX} ${n._originY} ${n._originZ}`,(n,t,e)=>{const i=e._numbers;n._originX=i[0],n._originY=i[1],n._originZ=i[2],n._hasSkewOrigin=Qi(n),n._markDirty(ts)});const UM=(n,t,e)=>{const i=n.style.transform;if(i){const s=n[Na];let r=0;const o=i.length;let a;for(;r<o;){for(;r<o&&i.charCodeAt(r)===32;)r++;if(r>=o)break;const l=r;for(;r<o&&i.charCodeAt(r)!==40;)r++;if(r>=o)break;const u=i.substring(l,r);let d=1;const h=r+1;let f=-1,g=-1;for(r++;r<o&&d>0;){const m=i.charCodeAt(r);m===40?d++:m===41?d--:m===44&&d===1&&(f===-1?f=r:g===-1&&(g=r)),r++}const v=r-1;u==="translate"||u==="translate3d"?(f===-1?s.translateX=i.substring(h,v).trim():(s.translateX=i.substring(h,f).trim(),g===-1?s.translateY=i.substring(f+1,v).trim():(s.translateY=i.substring(f+1,g).trim(),s.translateZ=i.substring(g+1,v).trim())),a=i.substring(h,v)):u==="scale"||u==="scale3d"?f===-1?s.scale=i.substring(h,v).trim():(s.scaleX=i.substring(h,f).trim(),g===-1?s.scaleY=i.substring(f+1,v).trim():(s.scaleY=i.substring(f+1,g).trim(),s.scaleZ=i.substring(g+1,v).trim())):s[u]=i.substring(h,v)}if(t==="translate3d"&&a)return e&&(e[t]=a),a;const c=s[t];if(!Nt(c))return e&&(e[t]=c),c}return t==="translate3d"?"0px, 0px, 0px":t==="rotate3d"?"0, 0, 0, 0deg":Kn(t,"scale")?"1":Kn(t,"rotate")||Kn(t,"skew")?"0deg":"0px"},ip=n=>{let t=gs;for(let e=0,i=ga.length;e<i;e++){const s=ga[e],r=n[s];if(r!==void 0){if(s==="translateX"){const o=n.translateY;if(o!==void 0){const a=n.translateZ;a!==void 0?(t+=`translate3d(${r},${o},${a}) `,e+=2):(t+=`translate(${r},${o}) `,e+=1);continue}}if(s==="scaleX"&&n.scale===void 0){const o=n.scaleY;if(o!==void 0){const a=n.scaleZ;a!==void 0?(t+=`scale3d(${r},${o},${a}) `,e+=2):(t+=`scale(${r},${o}) `,e+=1);continue}}t+=`${jp[s]}${r}) `}s==="rotateZ"&&n.rotate3d!==void 0&&(t+=`rotate3d(${n.rotate3d}) `)}return n.matrix!==void 0&&(t+=`matrix(${n.matrix}) `),n.matrix3d!==void 0&&(t+=`matrix3d(${n.matrix3d}) `),t};const FM=n=>{const t=nm.exec(n)||im.exec(n),e=Nt(t[4])?1:+t[4];return[+t[1],+t[2],+t[3],e]},OM=n=>{const t=n.length,e=t===4||t===5;return[+("0x"+n[1]+n[e?1:2]),+("0x"+n[e?2:3]+n[e?2:4]),+("0x"+n[e?3:5]+n[e?3:6]),t===5||t===9?+(+("0x"+n[e?4:7]+n[e?4:8])/255).toFixed(3):1]},Nc=(n,t,e)=>(e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*(2/3-e)*6:n),BM=n=>{const t=sm.exec(n)||rm.exec(n),e=+t[1]/360,i=+t[2]/100,s=+t[3]/100,r=Nt(t[4])?1:+t[4];let o,a,c;if(i===0)o=a=c=s;else{const l=s<.5?s*(1+i):s+i-s*i,u=2*s-l;o=Bt(Nc(u,l,e+1/3)*255,0),a=Bt(Nc(u,l,e)*255,0),c=Bt(Nc(u,l,e-1/3)*255,0)}return[o,a,c,r]},zM=n=>ef(n)?FM(n):tf(n)?OM(n):nf(n)?BM(n):[0,0,0,1];const Jt=(n,t)=>Nt(n)?t:n,hd=(n,t)=>{const e=n.match(cm),i=t[nr]?t:document.documentElement;let s=getComputedStyle(i)?.getPropertyValue(e[1]);return(!s||s.trim()===gs)&&e[2]&&(s=e[2].trim()),s||0},hi=(n,t,e,i,s,r)=>{if(Qn(n)){if(!s){const a=n(t,e,i,r);return isNaN(+a)?a||0:+a}const o=()=>{const a=n(t,e,i,r);return isNaN(+a)?a||0:+a};return s.func=o,o()}if(Si(n)&&Kn(n,Jp)){if(!s)return hd(n,t);const o=()=>hd(n,t);return s.func=o,o()}return n},_h=(n,t)=>n[nr]?n[$d]&&dm(n,t)?Te.ATTRIBUTE:ga.includes(t)||Zd.get(t)?Te.TRANSFORM:Kn(t,"--")?Te.CSS_VAR:t in n.style?Te.CSS:t in n?Te.OBJECT:Te.ATTRIBUTE:Te.OBJECT,ud=(n,t,e)=>{const i=n.style[t];i&&e&&(e[t]=i);const s=i||getComputedStyle(n[Kp]||n).getPropertyValue(t);return s==="auto"?"0":s},ss=(n,t,e,i)=>{const s=Nt(e)?_h(n,t):e,r=qd(n,t);if(r){const o=r.get(n);return o&&i&&(i[t]=o),o??0}if(s===Te.OBJECT){const o=n[t];return o&&i&&(i[t]=o),o||0}if(s===Te.ATTRIBUTE){const o=n.getAttribute(t);return o&&i&&(i[t]=o),o}return s===Te.TRANSFORM?UM(n,t,i):s===Te.CSS_VAR?ud(n,t,i).trimStart():ud(n,t,i)},fa=(n,t,e)=>e==="-"?n-t:e==="+"?n+t:n*t,vh=()=>({t:le.NUMBER,n:0,u:null,o:null,d:null,s:null}),fn=(n,t)=>{if(t.t=le.NUMBER,t.n=0,t.u=null,t.o=null,t.d=null,t.s=null,!n)return t;const e=+n;if(!isNaN(e))return t.n=e,t;let i=n;i[1]==="="&&(t.o=i[0],i=i.slice(2));const s=i.includes(" ")?!1:Kd.exec(i);if(s)return t.t=le.UNIT,t.n=+s[1],t.u=s[2],t;if(t.o)return t.n=+i,t;if(hm(i))return t.t=le.COLOR,t.d=zM(i),t;{const r=i.match($h);return t.t=le.COMPLEX,t.d=r?r.map(Number):[],t.s=i.split($h)||[],t}},dd=(n,t)=>(t.t=n._valueType,t.n=n._toNumber,t.u=n._unit,t.o=null,t.d=$e(n._toNumbers),t.s=$e(n._strings),t),Ze=vh(),sp=(n,t,e)=>{const i=n._modifier,s=n._fromNumbers,r=n._toNumbers,o=n._strings;let a=o[0];for(let c=0,l=r.length;c<l;c++){const u=i(Bt(sa(s[c],r[c],t),e)),d=o[c+1];a+=`${d?u+d:u}`,n._numbers[c]=u}return a};const pa=(n,t,e,i,s)=>{const r=n.parent,o=n.duration,a=n.completed,c=n.iterationDuration,l=n.iterationCount,u=n._currentIteration,d=n._loopDelay,h=n._reversed,f=n._alternate,g=n._hasChildren,v=n._delay,m=n._currentTime,p=v+c,S=t-v,M=Ht(m,-v,o),y=Ht(S,-v,o),C=S-m,T=y>0,L=y>=o,x=o<=oe,w=s===gn.FORCE;let I=0,R=S,U=0;if(l>1){const F=c+(L?0:d),Z=~~(y/F);n._currentIteration=Ht(Z,0,l),L&&n._currentIteration--,I=n._currentIteration%2,R=y-Z*F||0}const G=h^(f&&I),X=n._ease;let D=L?G?0:o:G?c-R:R;X&&(D=c*X(D/c)||0);const z=(r?r.backwards:S<m)?!G:!!G;if(n._currentTime=S,n._iterationTime=D,n.backwards=z,T&&!n.began?(n.began=!0,!e&&!(r&&(z||!r.began))&&n.onBegin(n)):S<=0&&(n.began=!1),!e&&!g&&T&&n._currentIteration!==u&&n.onLoop(n),w||s===gn.AUTO&&(t>=(r&&v>0?0:v)&&t<=p||t<=v&&M>v||t>=p&&M!==o)||D>=p&&M!==o||D<=v&&M>0&&!L||t<=M&&M===o&&a||L&&!a&&x){if(T&&(n.computeDeltaTime(M),e||n.onBeforeUpdate(n)),!g){const F=w||(z?C*-1:C)>=he.tickThreshold,Z=Bt(n._offset+(r?r._offset:0)+v+D,12);let V=n._head,tt,ct,vt,Gt,Yt=0;for(;V;){const Ut=V._composition,k=V._currentTime,ht=V._changeDuration,st=V._absoluteStartTime+V._changeDuration,ut=V._nextRep,Lt=V._prevRep,Ct=Ut!==Oe.none,Mt=Lt?Lt._absoluteStartTime+Lt._changeDuration:0,xt=Lt&&Lt.parent!==V.parent,J=!ut||ut._isOverridden?st:ut.parent===V.parent?st+ut._delay:ut._absoluteStartTime<ut._absoluteUpdateStartTime?ut._absoluteStartTime:ut._absoluteUpdateStartTime;if((F||(k!==ht||Z<=J||Lt&&!xt&&(!ut||ut.parent!==V.parent))&&(k!==0||Z>=V._absoluteStartTime||xt&&!V._hasFromValue&&!Lt._isOverridden&&Z>=Mt||ut&&!ut._isOverridden&&ut.parent===V.parent&&ut._currentTime!==0&&D<ut._startTime))&&(!Lt||xt||D>=V._startTime)&&(!Ct||!V._isOverridden&&(!V._isOverlapped||Z<=st)&&(!ut||ut._isOverridden||Z<=J)&&(!Lt||Lt._isOverridden||(xt?Z>=V._absoluteStartTime||!V._hasFromValue&&Z>=Mt:Z>=Mt+V._delay)))){const nt=V._currentTime=Ht(D-V._startTime,0,ht),K=V._ease(nt/V._updateDuration),lt=V._modifier,ot=V._valueType,Dt=V._tweenType,P=Dt===Te.OBJECT,Ft=ot===le.NUMBER,St=Ft&&P||K===0||K===1?-1:he.precision;let gt,et;if(Ft)gt=et=lt(Bt(sa(V._fromNumber,V._toNumber,K),St));else if(ot===le.UNIT)et=lt(Bt(sa(V._fromNumber,V._toNumber,K),St)),gt=`${et}${V._unit}`;else if(ot===le.COLOR){const zt=V._numbers,b=V._fromNumbers,_=V._toNumbers,O=1-K,q=b[0],it=b[1],at=b[2],dt=_[0],$=_[1],Q=_[2];zt[0]=lt(Math.sqrt(q*q*O+dt*dt*K)),zt[1]=lt(Math.sqrt(it*it*O+$*$*K)),zt[2]=lt(Math.sqrt(at*at*O+Q*Q*K)),zt[3]=lt(sa(b[3],_[3],K)),(!V._setter||i)&&(gt=`rgba(${Bt(zt[0],0)},${Bt(zt[1],0)},${Bt(zt[2],0)},${zt[3]})`)}else ot===le.COMPLEX&&(gt=sp(V,K,St));if(Ct&&(V._number=et),!i&&Ut!==Oe.blend){const zt=V.property;tt=V.target,V._setter?V._setter(tt,et,V):P?tt[zt]=gt:Dt===Te.ATTRIBUTE?tt.setAttribute(zt,gt):(ct=tt.style,Dt===Te.TRANSFORM?(tt!==vt&&(vt=tt,Gt=tt[Na]),Gt[zt]=gt,Yt=1):Dt===Te.CSS?ct[zt]=gt:Dt===Te.CSS_VAR&&ct.setProperty(zt,gt)),T&&(U=1)}else V._value=gt}else k&&Lt&&!xt&&D<V._startTime&&(V._currentTime=0);Yt&&V._renderTransforms&&(ct.transform=ip(Gt),Yt=0),V=V._next}!e&&U&&n.onRender(n)}!e&&T&&n.onUpdate(n)}return r&&x?!e&&(r.began&&!z&&S>0&&!a||z&&S<=oe&&a)&&(n.onComplete(n),n.completed=!z):T&&L?l===1/0?n._startTime+=n.duration:n._currentIteration>=l-1&&(n.paused=!0,!a&&!g&&(n.completed=!0,!e&&!(r&&(z||!r.began))&&(n.onComplete(n),n._resolve(n)))):n.completed=!1,U},rs=(n,t,e,i,s)=>{const r=n._currentIteration;if(pa(n,t,e,i,s),n._hasChildren){const o=n,a=o.backwards,c=i?t:o._iterationTime,l=Hi();let u=0,d=!0;if(!i&&o._currentIteration!==r){const h=o.iterationDuration;be(o,f=>{if(!a)!f.completed&&!f.backwards&&f._currentTime<f.iterationDuration&&pa(f,h,e,1,gn.FORCE),f.began=!1,f.completed=!1;else{const g=f.duration,v=f._offset+f._delay,m=v+g;!e&&g<=oe&&(!v||m===h)&&f.onComplete(f)}}),e||o.onLoop(o)}be(o,h=>{const f=Bt((c-h._offset)*h._speed,12);if(a&&f>h._delay+h.duration)return;const g=h._fps<o._fps?h.requestTick(l):s;u+=pa(h,f,e,i,g),!h.completed&&d&&(d=!1)},a),!e&&u&&o.onRender(o),(d||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,e||(o.onComplete(o),o._resolve(o))))}};const fd={},xh=(n,t,e)=>{if(e===Te.TRANSFORM){const i=Zd.get(n);return i||n}else if(e===Te.CSS||e===Te.ATTRIBUTE&&Qd(t)&&n in t.style){const i=fd[n];if(i)return i;{const s=n&&jd(n);return fd[n]=s,s}}else return n},Sh=(n,t=!1)=>{if(n._hasChildren)be(n,e=>Sh(e,t),!0);else{const e=n;e.pause(),be(e,i=>{const s=i.property,r=i.target,o=i._tweenType,a=i._inlineValue,c=$s(a)||a===gs;if(i._setter){if(!t&&!c){if(fn(a,Ze),Ze.d){const l=Ze.d,u=i._numbers;for(let d=0,h=l.length;d<h;d++)u[d]=l[d]}else i._number=Ze.n;i._setter(i.target,i._number,i)}}else if(o===Te.OBJECT)!t&&!c&&(r[s]=a);else if(r[nr])if(o===Te.ATTRIBUTE)t||(c?r.removeAttribute(s):r.setAttribute(s,a));else{const l=r.style;if(o===Te.TRANSFORM){const u=r[Na];c?delete u[s]:u[s]=a,i._renderTransforms&&(Object.keys(u).length?l.transform=ip(u):l.removeProperty("transform"))}else c?l.removeProperty(jd(s)):l[s]=a}r[nr]&&e._tail===i&&e.targets.forEach(l=>{l.getAttribute&&l.getAttribute("style")===gs&&l.removeAttribute("style")})})}return n};class rp{constructor(t=0){this.deltaTime=0,this._currentTime=t,this._lastTickTime=t,this._startTime=t,this._lastTime=t,this._frameDuration=pn/zc,this._fps=zc,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(t){const e=+t,i=e<oe?oe:e,s=pn/i;i>_a.frameRate&&(_a.frameRate=i),this._fps=i,this._frameDuration=s}get speed(){return this._speed}set speed(t){const e=+t;this._speed=e<oe?oe:e}requestTick(t){const e=this._frameDuration,i=t-this._lastTickTime,s=e*.25,r=s<4?s:4;return i+r<e?gn.NONE:(this._lastTickTime=i>=e?t-i%e:t,gn.AUTO)}computeDeltaTime(t){const e=t-this._lastTime;return this.deltaTime=e,this._lastTime=t,e}}const tr={animation:null,update:we},VM=n=>{let t=tr.animation;return t||(t={duration:oe,computeDeltaTime:we,_offset:0,_delay:0,_head:null,_tail:null},tr.animation=t,tr.update=()=>{n.forEach(e=>{for(let i in e){const s=e[i],r=s._head;if(r){const o=r._valueType,a=o===le.COMPLEX||o===le.COLOR?$e(r._fromNumbers):null;let c=r._fromNumber,l=s._tail;for(;l&&l!==r;){if(a)for(let u=0,d=l._numbers.length;u<d;u++)a[u]+=l._numbers[u];else c+=l._number;l=l._prevAdd}r._toNumber=c,r._toNumbers=a}}}),pa(t,1,1,0,gn.FORCE)}),t};const op=qi?requestAnimationFrame:setImmediate,GM=qi?cancelAnimationFrame:clearImmediate;class kM extends rp{constructor(t){super(t),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=_a,this.paused=!0,this.reqId=0}update(){const t=this._currentTime=Hi();if(this.requestTick(t)){this.computeDeltaTime(t);const e=this._speed,i=this._fps;let s=this._head;for(;s;){const r=s._next;s.paused?(os(this,s),this._hasChildren=!!this._tail,s._running=!1,s.completed&&!s._cancelled&&s.cancel()):rs(s,(t-s._startTime)*s._speed*e,0,0,s._fps<i?s.requestTick(t):gn.AUTO),s=r}tr.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(Hi()),this.reqId=op(ap)),this}pause(){if(this.reqId)return this.paused=!0,HM()}resume(){if(this.paused)return this.paused=!1,be(this,t=>t.resetTime()),this.wake()}get speed(){return this._speed*(he.timeScale===1?1:pn)}set speed(t){const e=t*he.timeScale;this._speed!==e&&(this._speed=e,be(this,i=>i.speed=i._speed))}get timeUnit(){return he.timeScale===1?"ms":"s"}set timeUnit(t){const i=t==="s",s=i?.001:1;if(he.timeScale!==s){he.timeScale=s,he.tickThreshold=200*s;const r=i?.001:pn;this.defaults.duration*=r,this._speed*=r}}get precision(){return he.precision}set precision(t){he.precision=t}}const He=(()=>{const n=new kM(Hi());return qi&&(Jd.engine=n,me.addEventListener("visibilitychange",()=>{n.pauseOnDocumentHidden&&(me.hidden?n.pause():n.resume())})),n})(),ap=()=>{He._head?(He.reqId=op(ap),He.update()):He.reqId=0},HM=()=>(GM(He.reqId),He.reqId=0,He);const wa={_rep:new WeakMap,_add:new Map},Mh=(n,t,e="_rep")=>{const i=wa[e];let s=i.get(n);return s||(s={},i.set(n,s)),s[t]?s[t]:s[t]={_head:null,_tail:null}},WM=(n,t)=>n._isOverridden||n._absoluteStartTime>t._absoluteStartTime,ma=n=>{n._isOverlapped=1,n._isOverridden=1,n._changeDuration=oe,n._currentTime=oe},cp=(n,t)=>{const e=n._composition;if(e===Oe.replace){const i=n._absoluteStartTime;as(t,n,WM,"_prevRep","_nextRep");const s=n._prevRep;if(s){const r=s.parent,o=s._absoluteEndTime;if(n.parent.id!==r.id&&r.iterationCount>1&&o+(r.duration-r.iterationDuration)>i){ma(s);let l=s._prevRep;for(;l&&l.parent.id===r.id;)ma(l),l=l._prevRep}const a=n._absoluteUpdateStartTime;if(o>a){const l=s._startTime,u=o-(l+s._updateDuration),d=Bt(a-u-l,12);s._changeDuration=d,s._currentTime=d,s._isOverlapped=1,d<oe&&ma(s)}const c=n.parent.parent;if(!c||c!==r.parent){let l=!0;if(be(r,u=>{u._isOverlapped||(l=!1)}),l){const u=r.parent;if(u){let d=!0;be(u,h=>{h!==r&&be(h,f=>{f._isOverlapped||(d=!1)})}),d&&u.cancel()}else r.cancel()}}}}else if(e===Oe.blend){const i=Mh(n.target,n.property,"_add"),s=VM(wa._add);let r=i._head;r||(r={...n},r._composition=Oe.replace,r._updateDuration=oe,r._startTime=0,r._numbers=$e(n._fromNumbers),r._number=0,r._next=null,r._prev=null,as(i,r),as(s,r));const o=n._toNumber;if(n._fromNumber=r._fromNumber-o,n._toNumber=0,n._numbers=$e(n._fromNumbers),n._number=0,r._fromNumber=o,n._toNumbers.length){const a=$e(n._toNumbers);a.forEach((c,l)=>{n._fromNumbers[l]=r._fromNumbers[l]-c,n._toNumbers[l]=0}),r._fromNumbers=a}as(i,n,null,"_prevAdd","_nextAdd")}return n},lp=n=>{const t=n._composition;if(t!==Oe.none){const e=n.target,i=n.property,o=wa._rep.get(e)[i];if(os(o,n,"_prevRep","_nextRep"),t===Oe.blend){const a=wa._add,c=a.get(e);if(!c)return;const l=c[i],u=tr.animation;os(l,n,"_prevAdd","_nextAdd");const d=l._head;if(d&&d===l._tail){os(l,d,"_prevAdd","_nextAdd"),os(u,d);let h=!0;for(let f in c)if(c[f]._head){h=!1;break}h&&a.delete(e)}}}return n},pd=(n,t,e)=>{let i=!1;return be(t,s=>{const r=s.target;if(n.includes(r)){const o=s.property,a=s._tweenType,c=xh(e,r,a);(!c||c&&c===o)&&(s.parent._tail===s&&s._tweenType===Te.TRANSFORM&&s._prev&&s._prev._tweenType===Te.TRANSFORM&&(s._prev._renderTransforms=1),os(t,s),lp(s),i=!0)}},!0),i},Bi=(n,t,e)=>{const i=t||He;let s;if(i._hasChildren){let r=0;be(i,o=>{if(!o._hasChildren)if(s=pd(n,o,e),s&&!o._head)o.cancel(),os(i,o);else{const c=o._offset+o._delay+o.duration;c>r&&(r=c)}o._head?Bi(n,o,e):o._hasChildren=!1},!0),Nt(i.iterationDuration)||(i.iterationDuration=r)}else s=pd(n,i,e);s&&!i._head&&(i._hasChildren=!1,i.cancel&&i.cancel())};const md=n=>(n.paused=!0,n.began=!1,n.completed=!1,n),Ul=n=>(n._cancelled&&(n._hasChildren?be(n,Ul):be(n,t=>{t._composition!==Oe.none&&cp(t,Mh(t.target,t.property))}),n._cancelled=0),n);let gd=0;const XM=(n,t)=>n._priority>t._priority;class er extends rp{constructor(t={},e=null,i=0){super(0),++gd;const{id:s,delay:r,duration:o,reversed:a,alternate:c,loop:l,loopDelay:u,autoplay:d,frameRate:h,playbackRate:f,priority:g,onComplete:v,onLoop:m,onPause:p,onBegin:S,onBeforeUpdate:M,onUpdate:y}=t,C=e?0:He._lastTickTime,T=e?e.defaults:he.defaults,L=Qn(r)||Nt(r)?T.delay:+r,x=Qn(o)||Nt(o)?1/0:+o,w=Jt(l,T.loop),I=Jt(u,T.loopDelay);let R=w===!0||w===1/0||w<0?1/0:w+1,U=0;e?U=i:(He.reqId||He.requestTick(Hi()),U=(He._lastTickTime-He._startTime)*he.timeScale),this.id=Nt(s)?gd:s,this.parent=e,this.duration=Ua((x+I)*R-I)||oe,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=S||T.onBegin,this.onBeforeUpdate=M||T.onBeforeUpdate,this.onUpdate=y||T.onUpdate,this.onLoop=m||T.onLoop,this.onPause=p||T.onPause,this.onComplete=v||T.onComplete,this.iterationDuration=x,this.iterationCount=R,this._autoplay=e?!1:Jt(d,T.autoplay),this._offset=U,this._delay=L,this._loopDelay=I,this._iterationTime=0,this._currentIteration=0,this._resolve=we,this._running=!1,this._reversed=+Jt(a,T.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=Jt(c,T.alternate),this._prev=null,this._next=null,this._lastTickTime=C,this._startTime=C,this._lastTime=C,this._fps=Jt(h,T.frameRate),this._speed=Jt(f,T.playbackRate),this._priority=+Jt(g,1)}get cancelled(){return!!this._cancelled}set cancelled(t){t?this.cancel():this.reset(!0).play()}get currentTime(){return Ht(Bt(this._currentTime,he.precision),-this._delay,this.duration)}set currentTime(t){const e=this.paused;this.pause().seek(+t),e||this.resume()}get iterationCurrentTime(){return Ht(Bt(this._iterationTime,he.precision),0,this.iterationDuration)}set iterationCurrentTime(t){this.currentTime=this.iterationDuration*this._currentIteration+t}get progress(){return Ht(Bt(this._currentTime/this.duration,10),0,1)}set progress(t){this.currentTime=this.duration*t}get iterationProgress(){return Ht(Bt(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(t){const e=this.iterationDuration;this.currentTime=e*this._currentIteration+e*t}get currentIteration(){return this._currentIteration}set currentIteration(t){this.currentTime=this.iterationDuration*Ht(+t,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(t){t?this.reverse():this.play()}get speed(){return super.speed}set speed(t){super.speed=t,this.resetTime()}reset(t=!1){return Ul(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,rs(this,0,1,~~t,gn.FORCE),md(this),this._hasChildren&&be(this,md),this}init(t=!1){this.fps=this._fps,this.speed=this._speed,!t&&this._hasChildren&&rs(this,this.duration,1,~~t,gn.FORCE),this.reset(t);const e=this._autoplay;return e===!0?this.resume():e&&!Nt(e.linked)&&e.link(this),this}resetTime(){const t=1/(this._speed*He._speed);return this._startTime=Hi()-(this._currentTime+this._delay)*t,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=oe&&!this._hasChildren?rs(this,oe,0,0,gn.FORCE):(this._running||(as(He,this,XM),He._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,He.wake()),this):this}restart(){return this.reset().resume()}seek(t,e=0,i=0){Ul(this),this.completed=!1;const s=this.paused;return this.paused=!0,rs(this,t+this._delay,~~e,~~i,gn.AUTO),s?this:this.resume()}alternate(){const t=this._reversed,e=this.iterationCount,i=this.iterationDuration,s=e===1/0?wr(Ln/i):e;return this._reversed=+(this._alternate&&!(s%2)?t:!t),e===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(i*s-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?be(this,t=>t.cancel(),!0):be(this,lp),this._cancelled=1,this.pause()}stretch(t){const e=this.duration,i=Zs(t);if(e===i)return this;const s=t/e,r=t<=oe;return this.duration=r?oe:i,this.iterationDuration=r?oe:Zs(this.iterationDuration*s),this._offset*=s,this._delay*=s,this._loopDelay*=s,this}revert(){rs(this,0,1,0,gn.AUTO);const t=this._autoplay;return t&&t.linked&&t.linked===this&&t.revert(),this.cancel()}complete(t=0){return this.seek(this.duration,t).cancel()}then(t=we){const e=this.then,i=()=>{this.then=null,t(this),this.then=e,this._resolve=we};return new Promise(s=>(this._resolve=()=>s(i()),this.completed&&this._resolve(),this))}}function _d(n){const t=Si(n)?lm.root.querySelectorAll(n):n;if(t instanceof NodeList||t instanceof HTMLCollection)return t}function hs(n){if($s(n))return[];if(!qi)return tn(n)&&n.flat(1/0)||[n];if(tn(n)){const e=n.flat(1/0),i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];if(!$s(o)){const a=_d(o);if(a)for(let c=0,l=a.length;c<l;c++){const u=a[c];if(!$s(u)){let d=!1;for(let h=0,f=i.length;h<f;h++)if(i[h]===u){d=!0;break}d||i.push(u)}}else{let c=!1;for(let l=0,u=i.length;l<u;l++)if(i[l]===o){c=!0;break}c||i.push(o)}}}return i}const t=_d(n);return t?Array.from(t):[n]}function yh(n){const t=hs(n),e=t.length;for(let i=0;i<e;i++){const s=t[i];if(!s[qh]){s[qh]=!0;const r=Qd(s);(s.nodeType||r)&&(s[nr]=!0,s[$d]=r,s[Na]={})}}return t}const Uc={deg:1,rad:180/pi,turn:360},vd={},Fl=(n,t,e,i=!1)=>{const s=t.u,r=t.n;if(t.t===le.UNIT&&s===e)return t;const o=r+s+e,a=vd[o];if(!Nt(a)&&!i)t.n=a;else{let c;if(s in Uc)c=r*Uc[s]/Uc[e];else{const u=n.cloneNode(),d=n.parentNode,h=d&&d!==me?d:me.body;h.appendChild(u);const f=u.style;f.width=100+s;const g=u.offsetWidth||100;f.width=100+e;const v=u.offsetWidth||100,m=g/v;h.removeChild(u),c=m*r}t.n=c,vd[o]=c}return t.t,le.UNIT,t.u=e,t};const Xi=n=>n;const Tr=(n=1.68)=>t=>es(t,+n),Ol={in:n=>t=>n(t),out:n=>t=>1-n(1-t),inOut:n=>t=>t<.5?n(t*2)/2:1-n(t*-2+2)/2,outIn:n=>t=>t<.5?(1-n(1-t*2))/2:(n(t*2-1)+1)/2},YM=pi/2,xd=pi*2,Sd={[gs]:Tr,Quad:Tr(2),Cubic:Tr(3),Quart:Tr(4),Quint:Tr(5),Sine:n=>1-ql(n*YM),Circ:n=>1-Xn(1-n*n),Expo:n=>n?es(2,10*n-10):0,Bounce:n=>{let t,e=4;for(;n<((t=es(2,--e))-1)/11;);return 1/es(4,3-e)-7.5625*es((t*3-2)/22-n,2)},Back:(n=1.7)=>t=>(+n+1)*t*t*t-+n*t*t,Elastic:(n=1,t=.3)=>{const e=Ht(+n,1,10),i=Ht(+t,oe,2),s=i/xd*fm(1/e),r=xd/i;return o=>o===0||o===1?o:-e*es(2,-10*(1-o))*Yl((1-o-s)*r)}},us=(()=>{const n={linear:Xi,none:Xi};for(let t in Ol)for(let e in Sd){const i=Sd[e],s=Ol[t];n[t+e]=e===gs||e==="Back"||e==="Elastic"?(r,o)=>s(i(r,o)):s(i)}return n})(),Ko={linear:Xi,none:Xi},qM=n=>{if(Ko[n])return Ko[n];if(n.indexOf("(")<=-1){const e=Ol[n]||n.includes("Back")||n.includes("Elastic")?us[n]():us[n];return e?Ko[n]=e:Xi}else{const t=n.slice(0,-1).split("("),e=us[t[0]];return e?Ko[n]=e(...t[1].split(",")):Xi}},Md=["steps(","irregular(","linear(","cubicBezier("],cr=n=>{if(Si(n)){for(let e=0,i=Md.length;e<i;e++)if(Kn(n,Md[e]))return console.warn(`String syntax for \`ease: "${n}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${n}\``),Xi}return Qn(n)?n:Si(n)?qM(n):Xi};const Kt=vh(),se=vh(),Ws={},Jo={func:null},jo={func:null},Qo=[null],Xs=[null,null],ta={to:null};let $M=0,yd=0,Ui,Hn;const ZM=(n,t)=>{const e={};if(tn(n)){const i=[].concat(...n.map(s=>Object.keys(s))).filter(Ir);for(let s=0,r=i.length;s<r;s++){const o=i[s],a=n.map(c=>{const l={};for(let u in c){const d=c[u];Ir(u)?u===o&&(l.to=d):l[u]=d}return l});e[o]=a}}else{const i=Jt(t.duration,he.defaults.duration);Object.keys(n).map(r=>({o:parseFloat(r)/100,p:n[r]})).sort((r,o)=>r.o-o.o).forEach(r=>{const o=r.o,a=r.p;for(let c in a)if(Ir(c)){let l=e[c];l||(l=e[c]=[]);const u=o*i;let d=l.length,h=l[d-1];const f={to:a[c]};let g=0;for(let v=0;v<d;v++)g+=l[v].duration;d===1&&(f.from=h.to),a.ease&&(f.ease=a.ease),f.duration=u-(d?g:0),l.push(f)}return r});for(let r in e){const o=e[r];let a;for(let c=0,l=o.length;c<l;c++){const u=o[c],d=u.ease;u.ease=a||void 0,a=d}o[0].duration||o.shift()}}return e};class ki extends er{constructor(t,e,i,s,r=!1,o=0,a){super(e,i,s),this._head,this._tail,++yd;const c=yh(t),l=c.length,u=e.keyframes,d=u?va(ZM(u,e),e):e,{id:h,delay:f,duration:g,ease:v,playbackEase:m,modifier:p,composition:S,onRender:M}=d,y=i?i.defaults:he.defaults,C=Jt(v,y.ease),T=Jt(m,y.playbackEase),L=T?cr(T):null,x=!Nt(C.ease),w=x?C.ease:Jt(v,L?"linear":y.ease),I=x?C.settlingDuration:Jt(g,y.duration),R=Jt(f,y.delay),U=p||y.modifier,G=Nt(S)&&l>=pn?Oe.none:Nt(S)?y.composition:S,X=this._offset+(i?i._offset:0);x&&(C.parent=this);let D=NaN,z=NaN,F=0,Z=0;for(let V=0;V<l;V++){const tt=c[V],ct=o||V,vt=a||c;let Gt=NaN,Yt=NaN;for(let Ut in d)if(Ir(Ut)){const k=_h(tt,Ut),ht=qd(tt,Ut),st=xh(Ut,tt,k);let ut=d[Ut];const Lt=tn(ut);if(r&&!Lt&&(Xs[0]=ut,Xs[1]=ut,ut=Xs),Lt){const K=ut.length,lt=!on(ut[0]);K===2&&lt?(ta.to=ut,Qo[0]=ta,Ui=Qo):K>2&&lt?(Ui=[],ut.forEach((ot,Dt)=>{Dt?Dt===1?(Xs[1]=ot,Ui.push(Xs)):Ui.push(ot):Xs[0]=ot})):Ui=ut}else Qo[0]=ut,Ui=Qo;let Ct=null,Mt=null,xt=NaN,J=0,nt=0;for(let K=Ui.length;nt<K;nt++){const lt=Ui[nt];on(lt)?Hn=lt:(ta.to=lt,Hn=ta),Jo.func=null,jo.func=null;const ot=hi(Jt(Hn.composition,G),tt,ct,vt,null,null),Dt=In(ot)?ot:Oe[ot];!Ct&&Dt!==Oe.none&&(Ct=Mh(tt,st));const P=Ct?Ct._tail:null,Ft=i&&P&&P.parent.parent===i?P:Mt,St=hi(Hn.to,tt,ct,vt,Jo,Ft);let gt;on(St)&&!Nt(St.to)?(Hn=St,gt=St.to):gt=St;const et=hi(Hn.from,tt,ct,vt,jo,Ft),zt=Hn.ease||w,b=hi(zt,tt,ct,vt,null,Ft),_=Qn(b)||Si(b)?b:zt,O=!Nt(_)&&!Nt(_.ease),q=O?_.ease:_,it=O?_.settlingDuration:hi(Jt(Hn.duration,K>1?hi(I,tt,ct,vt,null,Ft)/K:I),tt,ct,vt,null,Ft),at=hi(Jt(Hn.delay,nt?0:R),tt,ct,vt,null,Ft),dt=Hn.modifier||U,$=!Nt(et),Q=!Nt(gt),yt=tn(gt),Pt=yt||$&&Q,_t=Mt?J:0,ft=Mt?J+at:at,Zt=Bt(X+ft,12),ee=Bt(X+_t,12);!Z&&($||yt)&&(Z=1);let Qt=Mt;if(Dt!==Oe.none){let Xt=Ct._head;for(;Xt&&Xt._absoluteStartTime<=Zt;)if(Xt._isOverridden||(Qt=Xt),Xt=Xt._nextRep,Xt&&Xt._absoluteStartTime>=Zt)for(;Xt;)ma(Xt),Xt=Xt._nextRep}if(Pt){fn(yt?hi(gt[0],tt,ct,vt,jo,Ft):et,Kt),fn(yt?hi(gt[1],tt,ct,vt,Jo,Ft):gt,se);const Xt=ss(tt,st,k,Ws);Kt.t===le.NUMBER&&(Qt?Qt._valueType===le.UNIT&&(Kt.t=le.UNIT,Kt.u=Qt._unit):(fn(Xt,Ze),Ze.t===le.UNIT&&(Kt.t=le.UNIT,Kt.u=Ze.u)))}else Q?fn(gt,se):Mt?dd(Mt,se):fn(i&&Qt&&Qt.parent.parent===i?Qt._value:ss(tt,st,k,Ws),se),$?fn(et,Kt):Mt?dd(Mt,Kt):fn(i&&Qt&&Qt.parent.parent===i?Qt._value:ss(tt,st,k,Ws),Kt);if(Kt.o&&(Kt.n=fa(Qt?Qt._toNumber:fn(ss(tt,st,k,Ws),Ze).n,Kt.n,Kt.o)),se.o&&(se.n=fa(Kt.n,se.n,se.o)),Kt.t!==se.t){if(Kt.t===le.COMPLEX||se.t===le.COMPLEX){const Xt=Kt.t===le.COMPLEX?Kt:se,te=Kt.t===le.COMPLEX?se:Kt;te.t=le.COMPLEX,te.s=$e(Xt.s),te.d=Xt.d.map(()=>te.n)}else if(Kt.t===le.UNIT||se.t===le.UNIT){const Xt=Kt.t===le.UNIT?Kt:se,te=Kt.t===le.UNIT?se:Kt;te.t=le.UNIT,te.u=Xt.u}else if(Kt.t===le.COLOR||se.t===le.COLOR){const Xt=Kt.t===le.COLOR?Kt:se,te=Kt.t===le.COLOR?se:Kt;te.t=le.COLOR,te.d=Xt.d.map(()=>0)}}if(Kt.u!==se.u){let Xt=se.u?Kt:se;Xt=Fl(tt,Xt,se.u?se.u:Kt.u,!1)}if(se.d&&Kt.d&&se.d.length!==Kt.d.length){const Xt=Kt.d.length>se.d.length?Kt:se,te=Xt===Kt?se:Kt;te.d=Xt.d.map((zn,ln)=>Nt(te.d[ln])?0:te.d[ln]),te.s=$e(Xt.s)}const N=Bt(+it||oe,12);let pt=Ws[st];$s(pt)||(Ws[st]=null);const j=ht?ht.set:null;J=Bt(ft+N,12);const Tt=Kt.d,mt=se.d,rt=se.s,Rt={parent:this,id:$M++,property:st,target:tt,_value:null,_toFunc:Jo.func,_fromFunc:jo.func,_ease:cr(q),_fromNumbers:Tt?$e(Tt):mo,_toNumbers:mt?$e(mt):mo,_strings:rt?$e(rt):mo,_fromNumber:Kt.n,_toNumber:se.n,_numbers:Tt?$e(Tt):mo,_number:Kt.n,_unit:se.u,_modifier:dt,_currentTime:0,_startTime:ft,_delay:+at,_updateDuration:N,_changeDuration:N,_absoluteStartTime:Zt,_absoluteUpdateStartTime:ee,_absoluteEndTime:Bt(X+J,12),_hasFromValue:$||yt?1:0,_tweenType:k,_setter:j,_valueType:se.t,_composition:Dt,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:pt,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};Dt!==Oe.none&&cp(Rt,Ct);const jt=Rt._valueType;if(jt===le.COMPLEX)Rt._value=sp(Rt,1,-1);else if(jt===le.UNIT)Rt._value=`${dt(Rt._toNumber)}${Rt._unit}`;else if(jt===le.COLOR){const Xt=se.d;Rt._value=`rgba(${Bt(Xt[0],0)},${Bt(Xt[1],0)},${Bt(Xt[2],0)},${Xt[3]})`}else Rt._value=dt(Rt._toNumber);isNaN(xt)&&(xt=Rt._startTime),Mt=Rt,F++,as(this,Rt)}(isNaN(z)||xt<z)&&(z=xt),(isNaN(D)||J>D)&&(D=J),k===Te.TRANSFORM&&(Gt=F-nt,Yt=F)}if(!isNaN(Gt)){let Ut=0;be(this,k=>{Ut>=Gt&&Ut<Yt&&(k._renderTransforms=1,k._composition===Oe.blend&&be(tr.animation,ht=>{ht.id===k.id&&(ht._renderTransforms=1)})),Ut++})}}l||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),z?(be(this,V=>{V._startTime-V._delay||(V._delay-=z),V._startTime-=z}),D-=z):z=0,D||(D=oe,this.iterationCount=0),this.targets=c,this.id=Nt(h)?yd:h,this.duration=D===oe?oe:Ua((D+this._loopDelay)*this.iterationCount-this._loopDelay)||oe,this.onRender=M||y.onRender,this._ease=L,this._delay=z,this.iterationDuration=D,!this._autoplay&&Z&&this.onRender(this)}stretch(t){const e=this.duration;if(e===Zs(t))return this;const i=t/e;return be(this,s=>{s._updateDuration=Zs(s._updateDuration*i),s._changeDuration=Zs(s._changeDuration*i),s._currentTime*=i,s._delay*=i,s._startTime*=i,s._absoluteStartTime*=i,s._absoluteUpdateStartTime*=i,s._absoluteEndTime*=i}),super.stretch(t)}refresh(){return be(this,t=>{const e=t._toFunc,i=t._fromFunc;(e||i)&&(i?(fn(i(),Kt),Kt.u!==t._unit&&t.target[nr]&&Fl(t.target,Kt,t._unit,!0),t._fromNumbers=$e(Kt.d),t._fromNumber=Kt.n):e&&(fn(ss(t.target,t.property,t._tweenType),Ze),t._fromNumbers=$e(Ze.d),t._fromNumber=Ze.n),e&&(fn(e(),se),t._toNumbers=$e(se.d),t._strings=$e(se.s),t._toNumber=se.o?fa(t._fromNumber,se.n,se.o):se.n))}),this.duration===oe&&this.restart(),this}revert(){return super.revert(),Sh(this)}then(t){return super.then(t)}}const lr=(n,t)=>new ki(n,t,null,0,!1).init();const KM=(n,t)=>{if(Kn(t,"<")){const e=t[1]==="<",i=n._tail,s=i?i._offset+i._delay:0;return e?s:s+i.duration}},Lr=(n,t)=>{let e=n.iterationDuration;if(e===oe&&(e=0),Nt(t))return e;if(In(+t))return+t;const i=t,s=n?n.labels:null,r=!$s(s),o=KM(n,i),a=!Nt(o),c=am.exec(i);if(c){const l=c[0],u=i.split(l),d=r&&u[0]?s[u[0]]:e,h=a?o:r?d:e,f=+u[1];return fa(h,f,l[0])}else return a?o:r?Nt(s[i])?e:s[i]:e};function JM(n){return Ua((n.iterationDuration+n._loopDelay)*n.iterationCount-n._loopDelay)||oe}function Fc(n,t,e,i,s,r){const a=In(n.duration)&&n.duration<=oe?e-oe:e;t.composition&&rs(t,a,1,1,gn.AUTO);const c=i?new ki(i,n,t,a,!1,s,r):new er(n,t,a);return t.composition&&c.init(!0),as(t,c),be(t,l=>{const d=l._offset+l._delay+l.duration;d>t.iterationDuration&&(t.iterationDuration=d)}),t.duration=JM(t),t}let Ed=0;class jM extends er{constructor(t={}){super(t,null,0),++Ed,this.id=Nt(t.id)?Ed:t.id,this.duration=0,this.labels={};const e=t.defaults,i=he.defaults;this.defaults=e?va(e,i):i,this.composition=Jt(t.composition,!0),this.onRender=t.onRender||i.onRender;const s=Jt(t.playbackEase,i.playbackEase);this._ease=s?cr(s):null,this.iterationDuration=0}add(t,e,i){const s=on(e),r=on(t);if(s||r){if(this._hasChildren=!0,s){const o=e,a=i&&i.type==="Stagger"&&he.editor,c=Qn(i)?i:null;if(c||a){const l=hs(t),u=this.duration,d=this.iterationDuration,h=o.id;let f=0;l.length;const g=c||he.editor.resolveStagger(i.defaultValue);l.forEach(v=>{const m={...o};this.duration=u,this.iterationDuration=d,Nt(h)||(m.id=h+"-"+f);const p=Lr(this,g(v,f,l,null,this));Fc(m,this,p,v,f,l),f++})}else{const l=o,u=i&&i.type?i.defaultValue:i;Fc(l,this,Lr(this,u),t)}}else Fc(t,this,Lr(this,e));return this.composition&&this.init(!0),this}}sync(t,e){if(Nt(t)||t&&Nt(t.pause))return this;t.pause();const i=+(t.effect?t.effect.getTiming().duration:t.duration);return!Nt(t)&&!Nt(t.persist)&&(t.persist=!0),this.add(t,{currentTime:[0,i],duration:i,delay:0,ease:"linear",playbackEase:"linear"},e)}set(t,e,i){return Nt(e)?this:(e.duration=oe,e.composition=Oe.replace,this.add(t,e,i))}call(t,e){return Nt(t)||t&&!Qn(t)?this:this.add({duration:0,delay:0,onComplete:()=>t(this)},e)}label(t,e){return Nt(t)||t&&!Si(t)?this:(this.labels[t]=Lr(this,e),this)}remove(t,e){return Bi(hs(t),this,e),this}stretch(t){const e=this.duration;if(e===Zs(t))return this;const i=t/e,s=this.labels;be(this,r=>r.stretch(r.duration*i));for(let r in s)s[r]*=i;return super.stretch(t)}refresh(){return be(this,t=>{t.refresh&&t.refresh()}),this}revert(){return super.revert(),be(this,t=>t.revert,!0),Sh(this)}then(t){return super.then(t)}}const QM=n=>new jM(n).init();class ty{constructor(t,e){const i=()=>{this.callbacks.completed&&this.callbacks.reset(),this.callbacks.play()},s=()=>{if(this.callbacks.completed)return;let c=!0;for(let l in this.animations)if(!this.animations[l].paused&&c){c=!1;break}c&&this.callbacks.complete()},r={onBegin:i,onComplete:s,onPause:s},o={v:1,autoplay:!1},a={};if(this.targets=[],this.animations={},this.callbacks=null,!(Nt(t)||Nt(e))){for(let c in e){const l=e[c];Ir(c)?a[c]=l:Kn(c,"on")?o[c]=l:r[c]=l}this.callbacks=new ki({v:0},o);for(let c in a){const l=a[c],u=on(l);let d={},h="+=0";if(u){const v=l.unit;Si(v)&&(h+=v)}else d.duration=l;d[c]=u?va({to:h},l):h;const f=va(r,d);f.composition=Oe.replace,f.autoplay=!1;const g=this.animations[c]=new ki(t,f,null,0,!1).init();this.targets.length||this.targets.push(...g.targets),this[c]=(v,m,p)=>{const S=g._head;if(Nt(v)&&S){const M=S._numbers;return M&&M.length?M:S._modifier(S._number)}else return be(g,M=>{if(tn(v))for(let y=0,C=v.length;y<C;y++)Nt(M._numbers[y])||(M._fromNumbers[y]=M._modifier(M._numbers[y]),M._toNumbers[y]=v[y]);else M._fromNumber=M._modifier(M._number),M._toNumber=v;Nt(p)||(M._ease=cr(p)),M._currentTime=0}),Nt(m)||g.stretch(m),g.reset(!0).resume(),this}}}}revert(){for(let t in this.animations)this[t]=we,this.animations[t].revert();return this.animations={},this.targets.length=0,this.callbacks&&this.callbacks.revert(),this}}const rn=pn*10;class ey{constructor(t={}){const e=!Nt(t.bounce)||!Nt(t.duration);this.timeStep=.02,this.restThreshold=5e-4,this.restDuration=200,this.maxDuration=6e4,this.maxRestSteps=this.restDuration/this.timeStep/pn,this.maxIterations=this.maxDuration/this.timeStep/pn,this.bn=Ht(Jt(t.bounce,.5),-1,1),this.pd=Ht(Jt(t.duration,628),10*he.timeScale,rn*he.timeScale),this.m=Ht(Jt(t.mass,1),1,rn),this.s=Ht(Jt(t.stiffness,100),oe,rn),this.d=Ht(Jt(t.damping,10),oe,rn),this.v=Ht(Jt(t.velocity,0),-rn,rn),this.w0=0,this.zeta=0,this.wd=0,this.b=0,this.completed=!1,this.solverDuration=0,this.settlingDuration=0,this.parent=null,this.onComplete=t.onComplete||we,e&&this.calculateSDFromBD(),this.compute(),this.ease=i=>{const s=i*this.settlingDuration,r=this.completed,o=this.pd;return s>=o&&!r&&(this.completed=!0,this.onComplete(this.parent)),s<o&&r&&(this.completed=!1),i===0||i===1?i:this.solve(i*this.solverDuration)}}solve(t){const{zeta:e,w0:i,wd:s,b:r}=this;let o=t;return e<1?o=go(-o*e*i)*(1*ql(s*o)+r*Yl(s*o)):e===1?o=(1+r*o)*go(-o*i):o=((1+r)*go((-e*i+s)*o)+(1-r)*go((-e*i-s)*o))/2,1-o}calculateSDFromBD(){const t=he.timeScale===1?this.pd/pn:this.pd;this.m=1,this.v=0,this.s=es(2*pi/t,2),this.bn>=0?this.d=(1-this.bn)*4*pi/t:this.d=4*pi/(t*(1+this.bn)),this.s=Bt(Ht(this.s,oe,rn),3),this.d=Bt(Ht(this.d,oe,300),3)}calculateBDFromSD(){const t=2*pi/Xn(this.s);this.pd=t*(he.timeScale===1?pn:1),this.d/(2*Xn(this.s))<=1?this.bn=1-this.d*t/(4*pi):this.bn=4*pi/(this.d*t)-1,this.bn=Bt(Ht(this.bn,-1,1),3),this.pd=Bt(Ht(this.pd,10*he.timeScale,rn*he.timeScale),3)}compute(){const{maxRestSteps:t,maxIterations:e,restThreshold:i,timeStep:s,m:r,d:o,s:a,v:c}=this,l=this.w0=Ht(Xn(a/r),oe,pn),u=this.zeta=o/(2*Xn(a*r));u<1?(this.wd=l*Xn(1-u*u),this.b=(u*l+-c)/this.wd):u===1?(this.wd=0,this.b=-c+l):(this.wd=l*Xn(u*u-1),this.b=(u*l+-c)/this.wd);let d=0,h=0,f=0;for(;h<=t&&f<=e;)Un(1-this.solve(d))<i?h++:h=0,this.solverDuration=d,d+=s,f++;this.settlingDuration=Bt(this.solverDuration*pn,0)*he.timeScale}get bounce(){return this.bn}set bounce(t){this.bn=Ht(Jt(t,1),-1,1),this.calculateSDFromBD(),this.compute()}get duration(){return this.pd}set duration(t){this.pd=Ht(Jt(t,1),10*he.timeScale,rn*he.timeScale),this.calculateSDFromBD(),this.compute()}get stiffness(){return this.s}set stiffness(t){this.s=Ht(Jt(t,100),oe,rn),this.calculateBDFromSD(),this.compute()}get damping(){return this.d}set damping(t){this.d=Ht(Jt(t,10),oe,rn),this.calculateBDFromSD(),this.compute()}get mass(){return this.m}set mass(t){this.m=Ht(Jt(t,1),1,rn),this.compute()}get velocity(){return this.v}set velocity(t){this.v=Ht(Jt(t,0),-rn,rn),this.compute()}}const bd=n=>new ey(n);function ea(n,t,e){const i=yh(n);if(!i.length)return;const[s]=i,r=_h(s,t),o=xh(t,s,r);let a=ss(s,o);if(Nt(e))return a;if(fn(a,Ze),Ze.t===le.NUMBER||Ze.t===le.UNIT){if(e===!1)return Ze.n;{const c=Fl(s,Ze,e,!1);return`${Bt(c.n,he.precision)}${c.u}`}}}const Ar=(n,t)=>{if(!Nt(t))return t.duration=oe,t.composition=Jt(t.composition,Oe.none),new ki(n,t,null,0,!0).resume()};const Fi=n=>{n.cancelable&&n.preventDefault()};class ny{constructor(t){this.el=t,this.zIndex=0,this.parentElement=null,this.classList={add:we,remove:we}}get x(){return this.el.x||0}set x(t){this.el.x=t}get y(){return this.el.y||0}set y(t){this.el.y=t}get width(){return this.el.width||0}set width(t){this.el.width=t}get height(){return this.el.height||0}set height(t){this.el.height=t}getBoundingClientRect(){return{top:this.y,right:this.x,bottom:this.y+this.height,left:this.x+this.width}}}class iy{constructor(t){this.$el=t,this.inlineTransforms=[],this.point=new DOMPoint,this.inversedMatrix=this.getMatrix().inverse()}normalizePoint(t,e){return this.point.x=t,this.point.y=e,this.point.matrixTransform(this.inversedMatrix)}traverseUp(t){let e=this.$el.parentElement,i=0;for(;e&&e!==me;)t(e,i),e=e.parentElement,i++}getMatrix(){const t=new DOMMatrix;return this.traverseUp(e=>{const i=getComputedStyle(e).transform;if(i){const s=new DOMMatrix(i);t.preMultiplySelf(s)}}),t}remove(){this.traverseUp((t,e)=>{this.inlineTransforms[e]=t.style.transform,t.style.transform="none"})}revert(){this.traverseUp((t,e)=>{const i=this.inlineTransforms[e];i===""?t.style.removeProperty("transform"):t.style.transform=i})}}const Je=(n,t)=>n&&Qn(n)?n(t):n;let na=0;class sy{constructor(t,e={}){if(!t)return;const i=e.x,s=e.y,r=e.trigger,o=e.modifier,a=e.releaseEase,c=a&&cr(a),l=!Nt(a)&&!Nt(a.ease),u=on(i)&&!Nt(i.mapTo)?i.mapTo:"translateX",d=on(s)&&!Nt(s.mapTo)?s.mapTo:"translateY",h=Je(e.container,this);this.containerArray=tn(h)?h:null,this.$container=h&&!this.containerArray?hs(h)[0]:me.body,this.useWin=this.$container===me.body,this.$scrollContainer=this.useWin?fi:this.$container,this.$target=on(t)?new ny(t):hs(t)[0],this.$trigger=hs(r||t)[0],this.fixed=ea(this.$target,"position")==="fixed",this.isFinePointer=!0,this.containerPadding=[0,0,0,0],this.containerFriction=0,this.releaseContainerFriction=0,this.snapX=0,this.snapY=0,this.scrollSpeed=0,this.scrollThreshold=0,this.dragSpeed=0,this.dragThreshold=3,this.maxVelocity=0,this.minVelocity=0,this.velocityMultiplier=0,this.cursor=!1,this.releaseXSpring=l?a:bd({mass:Jt(e.releaseMass,1),stiffness:Jt(e.releaseStiffness,80),damping:Jt(e.releaseDamping,20)}),this.releaseYSpring=l?a:bd({mass:Jt(e.releaseMass,1),stiffness:Jt(e.releaseStiffness,80),damping:Jt(e.releaseDamping,20)}),this.releaseEase=c||us.outQuint,this.hasReleaseSpring=l,this.onGrab=e.onGrab||we,this.onDrag=e.onDrag||we,this.onRelease=e.onRelease||we,this.onUpdate=e.onUpdate||we,this.onSettle=e.onSettle||we,this.onSnap=e.onSnap||we,this.onResize=e.onResize||we,this.onAfterResize=e.onAfterResize||we,this.disabled=[0,0];const f={};if(o&&(f.modifier=o),Nt(i)||i===!0)f[u]=0;else if(on(i)){const g=i,v={};g.modifier&&(v.modifier=g.modifier),g.composition&&(v.composition=g.composition),f[u]=v}else i===!1&&(f[u]=0,this.disabled[0]=1);if(Nt(s)||s===!0)f[d]=0;else if(on(s)){const g=s,v={};g.modifier&&(v.modifier=g.modifier),g.composition&&(v.composition=g.composition),f[d]=v}else s===!1&&(f[d]=0,this.disabled[1]=1);this.animate=new ty(this.$target,f),this.xProp=u,this.yProp=d,this.destX=0,this.destY=0,this.deltaX=0,this.deltaY=0,this.scroll={x:0,y:0},this.coords=[this.x,this.y,0,0],this.snapped=[0,0],this.pointer=[0,0,0,0,0,0,0,0],this.scrollView=[0,0],this.dragArea=[0,0,0,0],this.containerBounds=[-Ln,Ln,Ln,-Ln],this.scrollBounds=[0,0,0,0],this.targetBounds=[0,0,0,0],this.window=[0,0],this.velocityStack=[0,0,0],this.velocityStackIndex=0,this.velocityTime=Hi(),this.velocity=0,this.angle=0,this.cursorStyles=null,this.triggerStyles=null,this.bodyStyles=null,this.targetStyles=null,this.touchActionStyles=null,this.transforms=new iy(this.$target),this.overshootCoords={x:0,y:0},this.overshootTicker=new er({autoplay:!1,onUpdate:()=>{this.updated=!0,this.manual=!0,this.disabled[0]||this.animate[this.xProp](this.overshootCoords.x,1),this.disabled[1]||this.animate[this.yProp](this.overshootCoords.y,1)},onComplete:()=>{this.manual=!1,this.disabled[0]||this.animate[this.xProp](this.overshootCoords.x,0),this.disabled[1]||this.animate[this.yProp](this.overshootCoords.y,0)}},null,0).init(),this.updateTicker=new er({autoplay:!1,onUpdate:()=>this.update()},null,0).init(),this.contained=!Nt(h),this.manual=!1,this.grabbed=!1,this.dragged=!1,this.updated=!1,this.released=!1,this.canScroll=!1,this.enabled=!1,this.initialized=!1,this.activeProp=this.disabled[1]?u:d,this.animate.callbacks.onRender=()=>{const g=this.updated,m=!(this.grabbed&&g)&&this.released,p=this.x,S=this.y,M=p-this.coords[2],y=S-this.coords[3];this.deltaX=M,this.deltaY=y,this.coords[2]=p,this.coords[3]=S,g&&(M||y)&&this.onUpdate(this),m?(this.computeVelocity(M,y),this.angle=$a(y,M)):this.updated=!1},this.animate.callbacks.onComplete=()=>{!this.grabbed&&this.released&&(this.released=!1),this.manual||(this.deltaX=0,this.deltaY=0,this.velocity=0,this.velocityStack[0]=0,this.velocityStack[1]=0,this.velocityStack[2]=0,this.velocityStackIndex=0,this.onSettle(this))},this.resizeTicker=new er({autoplay:!1,duration:150*he.timeScale,onComplete:()=>{this.onResize(this),this.refresh(),this.onAfterResize(this)}}).init(),this.parameters=e,this.resizeObserver=new ResizeObserver(()=>{this.initialized?this.resizeTicker.restart():this.initialized=!0}),this.enable(),this.refresh(),this.resizeObserver.observe(this.$container),on(t)||this.resizeObserver.observe(this.$target)}computeVelocity(t,e){const i=this.velocityTime,s=Hi(),r=s-i;if(r<17)return this.velocity;this.velocityTime=s;const o=this.velocityStack,a=this.velocityMultiplier,c=this.minVelocity,l=this.maxVelocity,u=this.velocityStackIndex;o[u]=Bt(Ht(Xn(t*t+e*e)/r*a,c,l),5);const d=Zh(o[0],o[1],o[2]);return this.velocity=d,this.velocityStackIndex=(u+1)%3,d}setX(t,e=!1){if(this.disabled[0])return;const i=Bt(t,5);return this.overshootTicker.pause(),this.manual=!0,this.updated=!e,this.destX=i,this.snapped[0]=Cs(i,this.snapX),this.animate[this.xProp](i,0),this.manual=!1,this}setY(t,e=!1){if(this.disabled[1])return;const i=Bt(t,5);return this.overshootTicker.pause(),this.manual=!0,this.updated=!e,this.destY=i,this.snapped[1]=Cs(i,this.snapY),this.animate[this.yProp](i,0),this.manual=!1,this}get x(){return Bt(this.animate[this.xProp](),he.precision)}set x(t){this.setX(t,!1)}get y(){return Bt(this.animate[this.yProp](),he.precision)}set y(t){this.setY(t,!1)}get progressX(){return _o(this.x,this.containerBounds[3],this.containerBounds[1],0,1)}set progressX(t){this.setX(_o(t,0,1,this.containerBounds[3],this.containerBounds[1]),!1)}get progressY(){return _o(this.y,this.containerBounds[0],this.containerBounds[2],0,1)}set progressY(t){this.setY(_o(t,0,1,this.containerBounds[0],this.containerBounds[2]),!1)}updateScrollCoords(){const t=Bt(this.useWin?fi.scrollX:this.$container.scrollLeft,0),e=Bt(this.useWin?fi.scrollY:this.$container.scrollTop,0),[i,s,r,o]=this.containerPadding,a=this.scrollThreshold;this.scroll.x=t,this.scroll.y=e,this.scrollBounds[0]=e-this.targetBounds[0]+i-a,this.scrollBounds[1]=t-this.targetBounds[1]-s+a,this.scrollBounds[2]=e-this.targetBounds[2]-r+a,this.scrollBounds[3]=t-this.targetBounds[3]+o-a}updateBoundingValues(){const t=this.$container;if(!t)return;const e=this.x,i=this.y,s=this.coords[2],r=this.coords[3];this.coords[2]=0,this.coords[3]=0,this.setX(0,!0),this.setY(0,!0),this.transforms.remove();const o=this.window[0]=fi.innerWidth,a=this.window[1]=fi.innerHeight,c=this.useWin,l=t.scrollWidth,u=t.scrollHeight,d=this.fixed,h=t.getBoundingClientRect(),[f,g,v,m]=this.containerPadding;this.dragArea[0]=c?0:h.left,this.dragArea[1]=c?0:h.top,this.scrollView[0]=c?Ht(l,o,l):l,this.scrollView[1]=c?Ht(u,a,u):u,this.updateScrollCoords();const{width:p,height:S,left:M,top:y,right:C,bottom:T}=t.getBoundingClientRect();this.dragArea[2]=Bt(c?Ht(p,o,o):p,0),this.dragArea[3]=Bt(c?Ht(S,a,a):S,0);const L=ea(t,"overflow"),x=L==="visible",w=L==="hidden";if(this.canScroll=d?!1:this.contained&&(t===me.body&&x||!w&&!x)&&(l>this.dragArea[2]+m-g||u>this.dragArea[3]+f-v)&&(!this.containerArray||this.containerArray&&!tn(this.containerArray)),this.contained){const I=this.scroll.x,R=this.scroll.y,U=this.canScroll,G=this.$target.getBoundingClientRect(),X=U?c?0:t.scrollLeft:0,D=U?c?0:t.scrollTop:0,z=U?this.scrollView[0]-X-p:0,F=U?this.scrollView[1]-D-S:0;this.targetBounds[0]=Bt(G.top+R-(c?0:y),0),this.targetBounds[1]=Bt(G.right+I-(c?o:C),0),this.targetBounds[2]=Bt(G.bottom+R-(c?a:T),0),this.targetBounds[3]=Bt(G.left+I-(c?0:M),0),this.containerArray?(this.containerBounds[0]=this.containerArray[0]+f,this.containerBounds[1]=this.containerArray[1]-g,this.containerBounds[2]=this.containerArray[2]-v,this.containerBounds[3]=this.containerArray[3]+m):(this.containerBounds[0]=-Bt(G.top-(d?Ht(y,0,a):y)+D-f,0),this.containerBounds[1]=-Bt(G.right-(d?Ht(C,0,o):C)-z+g,0),this.containerBounds[2]=-Bt(G.bottom-(d?Ht(T,0,a):T)-F+v,0),this.containerBounds[3]=-Bt(G.left-(d?Ht(M,0,o):M)+X-m,0))}this.transforms.revert(),this.coords[2]=s,this.coords[3]=r,this.setX(e,!0),this.setY(i,!0)}isOutOfBounds(t,e,i){if(!this.contained)return 0;const[s,r,o,a]=t,[c,l]=this.disabled,u=!c&&e<a||!c&&e>r,d=!l&&i<s||!l&&i>o;return u&&!d?1:!u&&d?2:u&&d?3:0}refresh(){const t=this.parameters,e=t.x,i=t.y,s=Je(t.container,this),r=Je(t.containerPadding,this)||0,o=tn(r)?r:[r,r,r,r],a=this.x,c=this.y,l=Je(t.cursor,this),u={onHover:"grab",onGrab:"grabbing"};if(l){const{onHover:p,onGrab:S}=l;p&&(u.onHover=p),S&&(u.onGrab=S)}const d=Je(t.dragThreshold,this),h={mouse:3,touch:7};if(In(d))h.mouse=d,h.touch=d;else if(d){const{mouse:p,touch:S}=d;Nt(p)||(h.mouse=p),Nt(S)||(h.touch=S)}this.containerArray=tn(s)?s:null,this.$container=s&&!this.containerArray?hs(s)[0]:me.body,this.useWin=this.$container===me.body,this.$scrollContainer=this.useWin?fi:this.$container,this.isFinePointer=matchMedia("(pointer:fine)").matches,this.containerPadding=Jt(o,[0,0,0,0]),this.containerFriction=Ht(Jt(Je(t.containerFriction,this),.8),0,1),this.releaseContainerFriction=Ht(Jt(Je(t.releaseContainerFriction,this),this.containerFriction),0,1),this.snapX=Je(on(e)&&!Nt(e.snap)?e.snap:t.snap,this),this.snapY=Je(on(i)&&!Nt(i.snap)?i.snap:t.snap,this),this.scrollSpeed=Jt(Je(t.scrollSpeed,this),1.5),this.scrollThreshold=Jt(Je(t.scrollThreshold,this),20),this.dragSpeed=Jt(Je(t.dragSpeed,this),1),this.dragThreshold=this.isFinePointer?h.mouse:h.touch,this.minVelocity=Jt(Je(t.minVelocity,this),0),this.maxVelocity=Jt(Je(t.maxVelocity,this),50),this.velocityMultiplier=Jt(Je(t.velocityMultiplier,this),1),this.cursor=l===!1?!1:u,this.updateBoundingValues();const[f,g,v,m]=this.containerBounds;this.setX(Ht(a,m,g),!0),this.setY(Ht(c,f,v),!0)}update(){if(this.updateScrollCoords(),this.canScroll){const[S,M,y,C]=this.containerPadding,[T,L]=this.scrollView,x=this.dragArea[2],w=this.dragArea[3],I=this.scroll.x,R=this.scroll.y,U=this.$container.scrollWidth,G=this.$container.scrollHeight,X=this.useWin?Ht(U,this.window[0],U):U,D=this.useWin?Ht(G,this.window[1],G):G,z=T-X,F=L-D;this.dragged&&z>0&&(this.coords[0]-=z,this.scrollView[0]=X),this.dragged&&F>0&&(this.coords[1]-=F,this.scrollView[1]=D);const Z=this.scrollSpeed*10,V=this.scrollThreshold,[tt,ct]=this.coords,[vt,Gt,Yt,Ut]=this.scrollBounds,k=Bt(Ht((ct-vt+S)/V,-1,0)*Z,0),ht=Bt(Ht((tt-Gt-M)/V,0,1)*Z,0),st=Bt(Ht((ct-Yt-y)/V,0,1)*Z,0),ut=Bt(Ht((tt-Ut+C)/V,-1,0)*Z,0);if(k||st||ut||ht){const[Lt,Ct]=this.disabled;let Mt=I,xt=R;Lt||(Mt=Bt(Ht(I+(ut||ht),0,T-x),0),this.coords[0]-=I-Mt),Ct||(xt=Bt(Ht(R+(k||st),0,L-w),0),this.coords[1]-=R-xt),this.useWin?this.$scrollContainer.scrollBy(-(I-Mt),-(R-xt)):this.$scrollContainer.scrollTo(Mt,xt)}}const[t,e,i,s]=this.containerBounds,[r,o,a,c,l,u]=this.pointer;this.coords[0]+=(r-l)*this.dragSpeed,this.coords[1]+=(o-u)*this.dragSpeed,this.pointer[4]=r,this.pointer[5]=o;const[d,h]=this.coords,[f,g]=this.snapped,v=(1-this.containerFriction)*this.dragSpeed;this.setX(d>e?e+(d-e)*v:d<s?s+(d-s)*v:d,!1),this.setY(h>i?i+(h-i)*v:h<t?t+(h-t)*v:h,!1),this.computeVelocity(r-l,o-u),this.angle=$a(o-c,r-a);const[m,p]=this.snapped;(m!==f&&this.snapX||p!==g&&this.snapY)&&this.onSnap(this)}stop(){this.updateTicker.pause(),this.overshootTicker.pause();for(let t in this.animate.animations)this.animate.animations[t].pause();return Bi([this],null,"x"),Bi([this],null,"y"),Bi([this],null,"progressX"),Bi([this],null,"progressY"),Bi([this.scroll]),Bi([this.overshootCoords]),this}scrollInView(t,e=0,i=us.inOutQuad){this.updateScrollCoords();const s=this.destX,r=this.destY,o=this.scroll,a=this.scrollBounds,c=this.canScroll;if(!this.containerArray&&this.isOutOfBounds(a,s,r)){const[l,u,d,h]=a,f=Bt(Ht(r-l,-Ln,0),0),g=Bt(Ht(s-u,0,Ln),0),v=Bt(Ht(r-d,0,Ln),0),m=Bt(Ht(s-h,-Ln,0),0);new ki(o,{x:Bt(o.x+(m?m-e:g?g+e:0),0),y:Bt(o.y+(f?f-e:v?v+e:0),0),duration:Nt(t)?350*he.timeScale:t,ease:i,onUpdate:()=>{this.canScroll=!1,this.$scrollContainer.scrollTo(o.x,o.y)}}).init().then(()=>{this.canScroll=c})}return this}handleHover(){this.isFinePointer&&this.cursor&&!this.cursorStyles&&(this.cursorStyles=Ar(this.$trigger,{cursor:this.cursor.onHover}))}animateInView(t,e=0,i=us.inOutQuad){this.stop(),this.updateBoundingValues();const s=this.x,r=this.y,[o,a,c,l]=this.containerPadding,u=this.scroll.y-this.targetBounds[0]+o+e,d=this.scroll.x-this.targetBounds[1]-a-e,h=this.scroll.y-this.targetBounds[2]-c-e,f=this.scroll.x-this.targetBounds[3]+l+e,g=this.isOutOfBounds([u,d,h,f],s,r);if(g){const[v,m]=this.disabled,p=Ht(Cs(s,this.snapX),f,d),S=Ht(Cs(r,this.snapY),u,h),M=Nt(t)?350*he.timeScale:t;!v&&(g===1||g===3)&&this.animate[this.xProp](p,M,i),!m&&(g===2||g===3)&&this.animate[this.yProp](S,M,i)}return this}handleDown(t){const e=t.target;if(this.grabbed||e.type==="range")return;t.stopPropagation(),this.grabbed=!0,this.released=!1,this.stop(),this.updateBoundingValues();const i=t.changedTouches,s=i?i[0].clientX:t.clientX,r=i?i[0].clientY:t.clientY,{x:o,y:a}=this.transforms.normalizePoint(s,r),[c,l,u,d]=this.containerBounds,h=(1-this.containerFriction)*this.dragSpeed,f=this.x,g=this.y;this.coords[0]=this.coords[2]=h?f>l?l+(f-l)/h:f<d?d+(f-d)/h:f:f,this.coords[1]=this.coords[3]=h?g>u?u+(g-u)/h:g<c?c+(g-c)/h:g:g,this.pointer[0]=o,this.pointer[1]=a,this.pointer[2]=o,this.pointer[3]=a,this.pointer[4]=o,this.pointer[5]=a,this.pointer[6]=o,this.pointer[7]=a,this.deltaX=0,this.deltaY=0,this.velocity=0,this.velocityStack[0]=0,this.velocityStack[1]=0,this.velocityStack[2]=0,this.velocityStackIndex=0,this.angle=0,this.targetStyles&&(this.targetStyles.revert(),this.targetStyles=null);const v=ea(this.$target,"zIndex",!1);na=(v>na?v:na)+1,this.targetStyles=Ar(this.$target,{zIndex:na}),this.triggerStyles&&(this.triggerStyles.revert(),this.triggerStyles=null),this.cursorStyles&&(this.cursorStyles.revert(),this.cursorStyles=null),this.isFinePointer&&this.cursor&&(this.bodyStyles=Ar(me.body,{cursor:this.cursor.onGrab})),this.scrollInView(100,0,us.out(3)),this.onGrab(this),me.addEventListener("touchmove",this),me.addEventListener("touchend",this),me.addEventListener("touchcancel",this),me.addEventListener("mousemove",this),me.addEventListener("mouseup",this),me.addEventListener("selectstart",this)}handleMove(t){if(!this.grabbed)return;const e=t.changedTouches,i=e?e[0].clientX:t.clientX,s=e?e[0].clientY:t.clientY,{x:r,y:o}=this.transforms.normalizePoint(i,s),a=r-this.pointer[6],c=o-this.pointer[7];let l=t.target,u=!1,d=!1,h=!1;for(;e&&l&&l!==this.$trigger;){const f=ea(l,"overflow-y");if(f!=="hidden"&&f!=="visible"){const{scrollTop:g,scrollHeight:v,clientHeight:m}=l;if(v>m){h=!0,u=g<=3,d=g>=v-m-3;break}}l=l.parentElement}h&&(!u&&!d||u&&c<0||d&&c>0)?(this.pointer[0]=r,this.pointer[1]=o,this.pointer[2]=r,this.pointer[3]=o,this.pointer[4]=r,this.pointer[5]=o,this.pointer[6]=r,this.pointer[7]=o):(Fi(t),this.triggerStyles||(this.triggerStyles=Ar(this.$trigger,{pointerEvents:"none"})),this.$trigger.addEventListener("touchstart",Fi,{passive:!1}),this.$trigger.addEventListener("touchmove",Fi,{passive:!1}),this.$trigger.addEventListener("touchend",Fi),(this.dragged||!this.disabled[0]&&Un(a)>this.dragThreshold||!this.disabled[1]&&Un(c)>this.dragThreshold)&&(this.updateTicker.resume(),this.pointer[2]=this.pointer[0],this.pointer[3]=this.pointer[1],this.pointer[0]=r,this.pointer[1]=o,this.dragged=!0,this.released=!1,this.onDrag(this)))}handleUp(){if(!this.grabbed)return;this.updateTicker.pause(),this.triggerStyles&&(this.triggerStyles.revert(),this.triggerStyles=null),this.bodyStyles&&(this.bodyStyles.revert(),this.bodyStyles=null);const[t,e]=this.disabled,[i,s,r,o,a,c]=this.pointer,[l,u,d,h]=this.containerBounds,[f,g]=this.snapped,v=this.releaseXSpring,m=this.releaseYSpring,p=this.releaseEase,S=this.hasReleaseSpring,M=this.overshootCoords,y=this.x,C=this.y,T=this.computeVelocity(i-a,s-c),L=this.angle=$a(s-o,i-r),x=T*150,w=(1-this.releaseContainerFriction)*this.dragSpeed,I=y+ql(L)*x,R=C+Yl(L)*x,U=I>u?u+(I-u)*w:I<h?h+(I-h)*w:I,G=R>d?d+(R-d)*w:R<l?l+(R-l)*w:R,X=this.destX=Ht(Bt(Cs(U,this.snapX),5),h,u),D=this.destY=Ht(Bt(Cs(G,this.snapY),5),l,d),z=this.isOutOfBounds(this.containerBounds,I,R);let F=0,Z=0,V=p,tt=p,ct=0;if(M.x=y,M.y=C,!t){const Gt=X===u?y>u?-1:1:y<h?-1:1,Yt=Bt(y-X,0);v.velocity=e&&S?Yt?x*Gt/Un(Yt):0:T;const{ease:Ut,settlingDuration:k,restDuration:ht}=v;F=y===X?0:S?k:k-ht*he.timeScale,S&&(V=Ut),F>ct&&(ct=F)}if(!e){const Gt=D===d?C>d?-1:1:C<l?-1:1,Yt=Bt(C-D,0);m.velocity=t&&S?Yt?x*Gt/Un(Yt):0:T;const{ease:Ut,settlingDuration:k,restDuration:ht}=m;Z=C===D?0:S?k:k-ht*he.timeScale,S&&(tt=Ut),Z>ct&&(ct=Z)}if(!S&&z&&w&&(F||Z)){const Gt=Oe.blend;new ki(M,{x:{to:U,duration:F*.65},y:{to:G,duration:Z*.65},ease:p,composition:Gt}).init(),new ki(M,{x:{to:X,duration:F},y:{to:D,duration:Z},ease:p,composition:Gt}).init(),this.overshootTicker.stretch(Zh(F,Z)).restart()}else t||this.animate[this.xProp](X,F,V),e||this.animate[this.yProp](D,Z,tt);this.scrollInView(ct,this.scrollThreshold,p);let vt=!1;X!==f&&(this.snapped[0]=X,this.snapX&&(vt=!0)),D!==g&&this.snapY&&(this.snapped[1]=D,this.snapY&&(vt=!0)),vt&&this.onSnap(this),this.grabbed=!1,this.dragged=!1,this.updated=!0,this.released=!0,this.onRelease(this),this.$trigger.removeEventListener("touchstart",Fi),this.$trigger.removeEventListener("touchmove",Fi),this.$trigger.removeEventListener("touchend",Fi),me.removeEventListener("touchmove",this),me.removeEventListener("touchend",this),me.removeEventListener("touchcancel",this),me.removeEventListener("mousemove",this),me.removeEventListener("mouseup",this),me.removeEventListener("selectstart",this)}reset(){return this.stop(),this.resizeTicker.pause(),this.grabbed=!1,this.dragged=!1,this.updated=!1,this.released=!1,this.canScroll=!1,this.setX(0,!0),this.setY(0,!0),this.coords[0]=0,this.coords[1]=0,this.pointer[0]=0,this.pointer[1]=0,this.pointer[2]=0,this.pointer[3]=0,this.pointer[4]=0,this.pointer[5]=0,this.pointer[6]=0,this.pointer[7]=0,this.velocity=0,this.velocityStack[0]=0,this.velocityStack[1]=0,this.velocityStack[2]=0,this.velocityStackIndex=0,this.angle=0,this}enable(){return this.enabled||(this.enabled=!0,this.$target.classList.remove("is-disabled"),this.touchActionStyles=Ar(this.$trigger,{touchAction:this.disabled[0]?"pan-x":this.disabled[1]?"pan-y":"none"}),this.$trigger.addEventListener("touchstart",this,{passive:!0}),this.$trigger.addEventListener("mousedown",this,{passive:!0}),this.$trigger.addEventListener("mouseenter",this)),this}disable(){return this.enabled=!1,this.grabbed=!1,this.dragged=!1,this.updated=!1,this.released=!1,this.canScroll=!1,this.touchActionStyles.revert(),this.cursorStyles&&(this.cursorStyles.revert(),this.cursorStyles=null),this.triggerStyles&&(this.triggerStyles.revert(),this.triggerStyles=null),this.bodyStyles&&(this.bodyStyles.revert(),this.bodyStyles=null),this.targetStyles&&(this.targetStyles.revert(),this.targetStyles=null),this.$target.classList.add("is-disabled"),this.$trigger.removeEventListener("touchstart",this),this.$trigger.removeEventListener("mousedown",this),this.$trigger.removeEventListener("mouseenter",this),me.removeEventListener("touchmove",this),me.removeEventListener("touchend",this),me.removeEventListener("touchcancel",this),me.removeEventListener("mousemove",this),me.removeEventListener("mouseup",this),me.removeEventListener("selectstart",this),this}revert(){return this.reset(),this.disable(),this.$target.classList.remove("is-disabled"),this.updateTicker.revert(),this.overshootTicker.revert(),this.resizeTicker.revert(),this.animate.revert(),this.resizeObserver.disconnect(),this}handleEvent(t){switch(t.type){case"mousedown":this.handleDown(t);break;case"touchstart":this.handleDown(t);break;case"mousemove":this.handleMove(t);break;case"touchmove":this.handleMove(t);break;case"mouseup":this.handleUp();break;case"touchend":this.handleUp();break;case"touchcancel":this.handleUp();break;case"mouseenter":this.handleHover();break;case"selectstart":Fi(t);break}}}const ry=(n,t)=>new sy(n,t);const hp=(n=0,t=1,e=0)=>{const i=10**e;return Math.floor((Math.random()*(t-n+1/i)+n)*i)/i};let oy=0;const ay=(n,t=0,e=1,i=0)=>{let s=n===void 0?oy++:n;return(r=t,o=e,a=i)=>{s+=1831565813,s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61);const c=10**a;return Math.floor((((s^s>>>14)>>>0)/4294967296*(o-r+1/c)+r)*c)/c}},cy=(n,t=hp)=>{let e=n.length,i,s;for(;e;)s=t(0,--e),i=n[e],n[e]=n[s],n[s]=i;return n};const ly=(n,t={})=>{let e=[],i=0,s,r=null;const o=t.from,a=t.reversed,c=t.ease,l=!Nt(c),d=l&&!Nt(c.ease)?c.ease:l?cr(c):null,h=t.grid,f=h===!0,g=t.axis,v=t.total,m=Nt(o)||o===0||o==="first",p=o==="center",S=o==="last",M=o==="random",y=tn(o),C=tn(n),T=t.use,L=qa(C?n[0]:n),x=C?qa(n[1]):0,w=Kd.exec((C?n[1]:n)+gs),I=t.start||0+(C?L:0),R=t.seed,G=!Nt(R)&&R!==!1?ay(R===!0?0:R):hp,X=t.jitter,D=!Nt(X),z=tn(X),F=z?X[0]:X||0,Z=z?X[1]:X||0;let V=m?0:In(o)?o:0;return(tt,ct,vt,Gt,Yt)=>{const[Ut]=yh(tt),k=Nt(v)?vt.length:v,ht=Nt(T)?!1:Qn(T)?T(Ut,ct,k):ss(Ut,T),st=In(ht)||Si(ht)&&In(+ht)?+ht:ct,ut=st>=0&&st<k?st:ct;if(p&&(V=(k-1)/2),S&&(V=k-1),!e.length){if(f){let Mt=!0,xt=!1,J=1/0,nt=1/0,K=1/0,lt=-1/0,ot=-1/0,Dt=-1/0;const P=[],Ft=[],St=[];for(let gt=0;gt<k;gt++){const et=vt[gt];let zt=0,b=0,_=0,O=!1;if(et&&Qn(et.getBoundingClientRect)){const q=et.getBoundingClientRect();zt=q.left+q.width/2,b=q.top+q.height/2,O=!0}else{const q=et;q&&In(q.x)&&In(q.y)&&(zt=q.x,b=q.y,In(q.z)&&(_=q.z,xt=!0),O=!0)}if(!O){Mt=!1;break}P.push(zt),Ft.push(b),St.push(_),zt<J&&(J=zt),b<nt&&(nt=b),_<K&&(K=_),zt>lt&&(lt=zt),b>ot&&(ot=b),_>Dt&&(Dt=_)}if(Mt){let gt=P[0],et=Ft[0],zt=St[0];y?(gt=J+o[0]*(lt-J),et=nt+o[1]*(ot-nt),zt=xt?K+(o.length>=3?o[2]:.5)*(Dt-K):0):p?(gt=(J+lt)/2,et=(nt+ot)/2,zt=(K+Dt)/2):S?(gt=P[k-1],et=Ft[k-1],zt=St[k-1]):In(o)&&(gt=P[o],et=Ft[o],zt=St[o]);for(let _=0;_<k;_++){const O=gt-P[_],q=et-Ft[_],it=zt-St[_];let at=Xn(O*O+q*q+(xt?it*it:0));g==="x"&&(at=-O),g==="y"&&(at=-q),g==="z"&&(at=-it),e.push(at)}let b=1/0;for(let _=0;_<k;_++){const O=Un(e[_]);O>0&&O<b&&(b=O)}if(b>0&&b<1/0)for(let _=0;_<k;_++)e[_]=e[_]/b}else for(let gt=0;gt<k;gt++)e.push(Un(V-gt))}else for(let Mt=0;Mt<k;Mt++)if(!h)e.push(Un(V-Mt));else{const xt=h.length,J=h[0]*h[1];let nt,K,lt;y?(nt=o[0]*(h[0]-1),K=o[1]*(h[1]-1),lt=xt===3?(o.length>=3?o[2]:.5)*(h[2]-1):0):p?(nt=(h[0]-1)/2,K=(h[1]-1)/2,lt=xt===3?(h[2]-1)/2:0):(nt=V%h[0],K=wr(V/h[0])%h[1],lt=xt===3?wr(V/J):0);const ot=Mt%h[0],Dt=wr(Mt/h[0])%h[1],P=xt===3?wr(Mt/J):0,Ft=nt-ot,St=K-Dt,gt=lt-P;let et=Xn(Ft*Ft+St*St+(xt===3?gt*gt:0));g==="x"&&(et=-Ft),g==="y"&&(et=-St),g==="z"&&(et=-gt),e.push(et)}i=e[0];for(let Mt=1;Mt<k;Mt++)e[Mt]>i&&(i=e[Mt]);if(d||a)for(let Mt=0;Mt<k;Mt++){let xt=e[Mt];d&&(xt=d(xt/i)*i),a&&(xt=g?-xt:Un(i-xt)),e[Mt]=xt}if(D){r=new Array(k);for(let Mt=0;Mt<k;Mt++)r[Mt]=G(-1,1,4)}M&&(e=cy(e,G))}const Lt=C?(x-L)/i:L;Nt(s)&&(s=Yt?Lr(Yt,Nt(t.start)?Yt.iterationDuration:I):I);let Ct=s+(Lt*Bt(e[ut],2)||0);if(D){const Mt=i?e[ut]/i:0,xt=F+(Z-F)*Mt;Ct=Ct+r[ut]*xt}return t.modifier&&(Ct=t.modifier(Ct)),w&&(Ct=`${Ct}${w[2]}`),Ct}},up=document.querySelector("#app");if(!up)throw new Error("Missing #app root");up.innerHTML=`
  <div class="boot-screen" aria-hidden="true">
    <div class="boot-screen__mark">NX/01</div>
    <div class="boot-screen__line"><span></span></div>
    <div class="boot-screen__status">INITIALIZING FLIGHT SYSTEM</div>
  </div>

  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="NEXUS Aero Lab home">
      <span>NX</span><span class="wordmark__slash">/</span><span>01</span>
    </a>
    <div class="header-telemetry" aria-label="Live telemetry status">
      <span class="status-dot"></span>
      <span>FLIGHT LINK</span>
      <span class="header-telemetry__time">04:32:08 UTC</span>
    </div>
    <nav class="site-nav" aria-label="Primary navigation">
      <a href="#calibrate">CALIBRATE</a>
      <a href="#vector">VECTOR</a>
      <a href="#modules">MODULES</a>
    </nav>
  </header>

  <div class="viewport" aria-hidden="true">
    <canvas id="webgl"></canvas>
    <div class="spectrum-bands">
      <span class="spectrum-band spectrum-band--mint"></span>
      <span class="spectrum-band spectrum-band--coral"></span>
      <span class="spectrum-band spectrum-band--blue"></span>
    </div>
    <div class="chapter-flash"></div>
    <div class="viewport-grid">
      <i></i><i></i><i></i><i></i><i></i><i></i>
      <b></b><b></b><b></b><b></b>
    </div>
    <div class="reticle">
      <span></span><span></span><span></span><span></span>
    </div>
    <div class="coordinates coordinates--north">MACH 0.72 / AOA 04.8</div>
    <div class="coordinates coordinates--south">THRUST 73% / VECTOR LOCK</div>
    <div class="blueprint-hud">
      <div class="blueprint-hud__title">
        <span>NX-7 / GENERAL ARRANGEMENT</span>
        <b>EXPLODED ORTHOGRAPHIC / REV.04</b>
      </div>
      <div class="blueprint-hud__scale">
        <span>0</span><i></i><i></i><i></i><i></i><strong>8.4 M</strong>
      </div>
      <div class="blueprint-hud__datum">DATUM A-A / LONGITUDINAL CENTERLINE</div>
    </div>
  </div>

  <div class="event-log" aria-hidden="true">
    <span>EVENT / PREFLIGHT</span>
    <b>0x7A-00 / AIRFRAME ONLINE</b>
  </div>

  <div class="assembly-labels" aria-hidden="true">
    <span class="assembly-label assembly-label--nose"><b>01</b> RADOME / MULTI-SPECTRAL SENSOR</span>
    <span class="assembly-label assembly-label--canopy"><b>02</b> FLIGHT DECK / PRESSURE CELL</span>
    <span class="assembly-label assembly-label--wing"><b>03</b> CHINE SPAR / CONTROL SURFACE</span>
    <span class="assembly-label assembly-label--engine"><b>04</b> RAMJET NACELLE / COMPRESSOR</span>
    <span class="assembly-label assembly-label--avionics"><b>05</b> AVIONICS BUS / CONTROL CORE</span>
    <span class="assembly-label assembly-label--tail"><b>06</b> STABILITY ARRAY / ACTUATOR</span>
  </div>

  <aside class="story-index" aria-label="Story chapters">
    <div class="story-index__track"><span></span></div>
    <a href="#top" data-index="0"><b>00</b><span>PREFLIGHT</span></a>
    <a href="#calibrate" data-index="1"><b>01</b><span>CALIBRATE</span></a>
    <a href="#vector" data-index="2"><b>02</b><span>VECTOR</span></a>
    <a href="#tune" data-index="3"><b>03</b><span>TUNE</span></a>
    <a href="#modules" data-index="4"><b>04</b><span>MODULES</span></a>
    <a href="#contact" data-index="5"><b>05</b><span>LAUNCH</span></a>
  </aside>

  <main>
    <section id="top" class="chapter chapter--hero" data-chapter="0">
      <div class="chapter__sticky hero-layout">
        <div class="hero-copy">
          <p class="eyebrow"><span>EXPERIMENTAL FLIGHT SYSTEM</span><span>AIRFRAME NX-7</span></p>
          <h1>NEXUS</h1>
          <p class="hero-copy__lead">A modular aircraft assembled in real time from structure, propulsion, control, and motion.</p>
          <div class="hero-actions">
            <button class="command command--primary" type="button">ENTER LAB</button>
            <button class="command" type="button">VIEW AIRFRAME</button>
          </div>
        </div>
        <div class="hero-specs" aria-label="System specifications">
          <div><span>FLIGHT LOOP</span><strong>120 Hz</strong></div>
          <div><span>COMPONENTS</span><strong>26</strong></div>
          <div><span>LATENCY</span><strong>08 ms</strong></div>
        </div>
      </div>
    </section>

    <section id="calibrate" class="chapter chapter--calibrate" data-chapter="1">
      <div class="chapter__sticky chapter-layout chapter-layout--left">
        <div class="chapter-copy">
          <p class="eyebrow"><span>01 / CALIBRATION</span><span>ARRAY SYNCHRONIZED</span></p>
          <h2>Every surface.<br />One response.</h2>
          <p>Flight controls, stabilizers, and propulsion lock into one timing system before the airframe separates.</p>
          <div class="data-row">
            <div><span>PHASE</span><strong class="phase-readout">0.000</strong></div>
            <div><span>DRIFT</span><strong>0.04%</strong></div>
            <div><span>SURFACES</span><strong>18</strong></div>
          </div>
        </div>
      </div>
    </section>

    <section id="vector" class="chapter chapter--vector" data-chapter="2">
      <div class="chapter__sticky chapter-layout chapter-layout--right">
        <div class="chapter-copy">
          <p class="eyebrow"><span>02 / VECTOR TRACE</span><span>PATH LOCKED</span></p>
          <h2>Motion leaves<br />a readable trace.</h2>
          <p>Curves become coordinates. Coordinates become timing. Every point stays connected to the same source.</p>
          <div class="vector-scope" aria-label="Signal vector plot">
            <svg viewBox="0 0 520 160" role="img" aria-label="Animated signal vector">
              <path class="vector-scope__guide" d="M0 80 H520" />
              <path class="vector-scope__path" d="M0 105 C55 105 52 30 108 32 S160 140 218 112 S286 40 338 76 S405 126 520 42" />
              <circle class="vector-scope__probe" cx="0" cy="105" r="6" />
            </svg>
            <div><span>VECTOR LENGTH</span><strong class="vector-readout">000.0</strong></div>
          </div>
        </div>
      </div>
    </section>

    <section id="tune" class="chapter chapter--tune" data-chapter="3">
      <div class="chapter__sticky chapter-layout chapter-layout--left">
        <div class="chapter-copy">
          <p class="eyebrow"><span>03 / LIVE PROBE</span><span>MANUAL CHANNEL</span></p>
          <h2>Input changes<br />the trajectory.</h2>
          <p>Control position, thrust, and vector angle remain live values instead of pre-rendered decoration.</p>
        </div>
        <div class="probe-console">
          <div class="probe-console__head">
            <span>PROBE VECTOR</span>
            <strong class="probe-state">X 50 / Y 50</strong>
          </div>
          <div class="probe-field">
            <i class="probe-field__axis probe-field__axis--x"></i>
            <i class="probe-field__axis probe-field__axis--y"></i>
            <button class="probe-handle" type="button" aria-label="Signal probe" title="Signal probe"><span></span></button>
          </div>
          <label class="carrier-control">
            <span>THRUST</span>
            <input type="range" min="18" max="96" value="73" aria-label="Engine thrust" />
            <strong><output>73</output>%</strong>
          </label>
        </div>
      </div>
    </section>

    <section id="modules" class="chapter chapter--modules" data-chapter="4">
      <div class="chapter__sticky chapter-layout chapter-layout--right">
        <div class="chapter-copy">
          <p class="eyebrow"><span>04 / ENGINEERING MODE</span><span>GA / REV.04</span></p>
          <h2>Aircraft becomes<br />a drawing.</h2>
          <p>Outer skin dissolves into datum lines, section frames, spars, and numbered systems before every part returns to flight position.</p>
          <div class="module-ledger" aria-label="Module telemetry">
            <div><span>A1</span><b>AIRFRAME</b><strong>2.84 KB</strong></div>
            <div><span>B4</span><b>VECTOR</b><strong>0.64 KB</strong></div>
            <div><span>C7</span><b>THRUST</b><strong>1.18 KB</strong></div>
            <div><span>D2</span><b>CONTROL</b><strong>0.42 KB</strong></div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="chapter chapter--contact" data-chapter="5">
      <div class="chapter__sticky contact-layout">
        <p class="eyebrow"><span>05 / ASSEMBLY COMPLETE</span><span>CLEARED FOR LAUNCH</span></p>
        <h2>Assemble the next<br />impossible machine.</h2>
        <p class="contact-layout__lead">NEXUS is a live study in aircraft decomposition, spatial rendering, and timeline choreography.</p>
        <div class="hero-actions hero-actions--center">
          <button class="command command--primary" type="button">REQUEST FLIGHT BRIEF</button>
          <button class="command" type="button">VIEW PROGRAM</button>
        </div>
        <footer>
          <span>NEXUS AERO LAB</span>
          <span>REAL-TIME FLIGHT ASSEMBLY</span>
          <span>2026 / 01</span>
        </footer>
      </div>
    </section>
  </main>

  <div class="scroll-status" aria-hidden="true">
    <span class="scroll-status__chapter">00</span>
    <div><i></i></div>
    <span class="scroll-status__percent">000%</span>
  </div>
`;const Ae={background:527116,foreground:15659754,mint:6485711,coral:16739143,blue:6128895},dp=document.querySelector("#webgl");if(!dp)throw new Error("Missing WebGL canvas");const Yi=new EM({canvas:dp,antialias:!0,alpha:!1,powerPreference:"high-performance"});Yi.setPixelRatio(Math.min(window.devicePixelRatio,1.6));Yi.setSize(window.innerWidth,window.innerHeight,!1);Yi.outputColorSpace=Fe;Yi.toneMapping=Bn;Yi.localClippingEnabled=!0;const vi=new T0;vi.background=new $t(Ae.background);vi.fog=new rh(Ae.background,.028);const Wn=new mn(34,window.innerWidth/window.innerHeight,.1,100);Wn.position.set(.8,1.15,13.8);const fp=new En,yn=new En,As=new En;fp.add(yn,As);vi.add(fp);const pp=new Mg(Ae.foreground,Ae.background,1.5),Eh=new bg(Ae.foreground,5.8);Eh.position.set(5,7,8);const Qr=new uh(Ae.mint,16,18,1.8);Qr.position.set(-3.5,2.5,4);const bh=new uh(Ae.coral,18,16,1.7);bh.position.set(4,-2,3);vi.add(pp,Eh,Qr,bh);const Zn=new ao({color:1581348,roughness:.5,metalness:.58,side:_n,transparent:!0}),bn=new ao({color:593681,roughness:.46,metalness:.64,side:_n,transparent:!0}),Tn=new ao({color:1120540,roughness:.52,metalness:.56,side:_n,transparent:!0}),Vr=new vg({color:3562897,roughness:.08,metalness:.25,transmission:.22,transparent:!0,opacity:.82}),Nn=new ao({color:Ae.coral,roughness:.2,metalness:.15,emissive:Ae.coral,emissiveIntensity:.5,transparent:!0}),hr=new ii({color:Ae.mint,transparent:!0}),ur=new ii({color:Ae.coral,transparent:!0}),Bl=new bi({color:3424839,transparent:!0,opacity:.62}),gr=new bi({color:3496568,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),ps=new bi({color:13916993,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),_r=new bi({color:5862794,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),Td=new $t(14933975),hy=new $t(1581348),uy=new $t(14012874),dy=new $t(593681),fy=new $t(13025979),py=new $t(1120540),my=new $t(13683909),gy=new $t(3424839),Ad=new $t(4744570),_y=new $t(Ae.foreground),wd=new $t(Ae.background),Oc=new $t,Ra=[];function sn(n,t){const e=new Me(n,t),i=new Qs(new ha(n,18),Bl),s=new Qs(new ha(n,14),gr),r=new Qs(new ha(n,14),_r);return s.scale.setScalar(1.002),r.position.set(.012,.009,-.01),r.scale.setScalar(1.003),e.add(i),e.add(s),e.add(r),e}function ni(n,t,e,i=new A){const s=new En;return s.name=n,s.position.copy(t),s.userData={name:n,home:t.clone(),homeRotation:s.rotation.clone(),explodeOffset:e.clone(),explodeRotation:i.clone()},yn.add(s),Ra.push(s),s}function Th(n,t,e,i,s,r=40,o=5){const a=[],c=[];for(let h=0;h<=o;h+=1){const f=h/o,g=f*f*(3-2*f),v=n*.5-f*n,m=Ee.lerp(t,i,g),p=Ee.lerp(e,s,g);for(let S=0;S<r;S+=1){const M=S/r*Math.PI*2;a.push(v,Math.cos(M)*m,Math.sin(M)*p)}}for(let h=0;h<o;h+=1)for(let f=0;f<r;f+=1){const g=(f+1)%r,v=h*r+f,m=h*r+g,p=(h+1)*r+g,S=(h+1)*r+f;c.push(v,m,S,m,p,S)}const l=a.length/3;a.push(n*.5,0,0);const u=a.length/3;a.push(-n*.5,0,0);for(let h=0;h<r;h+=1){const f=(h+1)%r;c.push(l,h,f);const g=o*r;c.push(u,g+f,g+h)}const d=new De;return d.setAttribute("position",new _e(a,3)),d.setIndex(c),d.computeVertexNormals(),d}function Ca(n,t,e,i){const s=Array.from({length:48},(r,o)=>{const a=o/48*Math.PI*2;return new A(0,Math.cos(a)*n,Math.sin(a)*t)});return new Me(new lh(new no(s,!0),64,e,6,!0),i)}function Wa(n,t,e,i,s,r,o,a,c=Zn){const l=ni(n,new A(t,0,0),a),u=sn(Th(e,i,s,r,o),c);l.add(u),[{x:e*.48,h:i,w:s,material:Tn},{x:-e*.48,h:r,w:o,material:bn}].forEach(f=>{const g=Ca(f.h*1.015,f.w*1.015,.026,f.material);g.position.x=f.x,l.add(g)});for(let f=-1;f<=1;f+=1){const g=(f+1)/2,v=Ca(Ee.lerp(i,r,g)*1.01,Ee.lerp(s,o,g)*1.01,.009,Tn);v.position.x=f*e*.23,l.add(v)}const h=sn(new cn(e*.38,.018,Math.min(s,o)*.68),bn);return h.position.set(.04,Math.max(i,r)*.94,0),l.add(h),l}const Ah=ni("NOSE",new A(3.62,-.01,0),new A(2.7,0,0),new A(0,0,-4)),vy=sn(Th(1.72,.018,.025,.245,.46,40,7),Zn);Ah.add(vy);const wh=new Me(new eo(.025,.035,.7,12),bn);wh.rotation.z=-Math.PI/2;wh.position.x=1.12;Ah.add(wh);const Rh=new Me(new ds(.055,.28,12),ur);Rh.rotation.z=-Math.PI/2;Rh.position.x=1.56;Ah.add(Rh);Wa("FORWARD FUSELAGE",2.25,1.18,.245,.46,.31,.64,new A(1.45,0,0));Wa("CENTER FUSELAGE",.9,1.58,.31,.64,.34,.76,new A(.42,0,0));Wa("REAR FUSELAGE",-.78,1.78,.34,.76,.27,.61,new A(-.48,0,0));Wa("TAIL CONE",-2.38,1.44,.27,.61,.115,.25,new A(-1.75,0,0));const Ch=ni("CANOPY",new A(1.42,.34,0),new A(.12,1.55,0),new A(0,4,-3)),mp=sn(new ro(.5,32,18),Vr);mp.scale.set(.96,.34,.48);Ch.add(mp);const Ph=sn(new ro(.42,28,16),Vr);Ph.position.x=-.66;Ph.scale.set(.82,.28,.42);Ch.add(Ph);const gp=new Me(new cn(1.25,.035,.055),Nn);gp.position.set(-.18,.12,0);Ch.add(gp);function xy(){const n=new io;n.moveTo(4.22,0),n.lineTo(3.12,.42),n.lineTo(1.62,1.16),n.lineTo(.12,2.05),n.lineTo(-1.42,2.82),n.lineTo(-2.72,2.18),n.lineTo(-3.18,.78),n.lineTo(-3.26,0),n.closePath();const t=new fr(n,{depth:.16,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:1});return t.rotateX(Math.PI/2),t}for(const n of[-1,1]){const t=ni(n<0?"PORT CHINE SKIN":"STARBOARD CHINE SKIN",new A(0,.055,0),new A(-.12,.46,n*2.7),new A(n*5,n*3,n*4)),e=sn(xy(),bn);e.scale.z=n,t.add(e);const i=new Me(new cn(2.2,.024,.028),n<0?ur:hr);i.position.set(-.18,.17,n*1.42),i.rotation.y=n*-.22,t.add(i);for(let s=0;s<5;s+=1){const r=sn(new cn(.42,.018,.3+s*.05),Tn);r.position.set(1.25-s*.72,.17,n*(.76+s*.36)),r.rotation.y=n*-.08,t.add(r)}}function Rd(n){const t=new io;n?(t.moveTo(-.25,2.02),t.lineTo(-2.55,2.38),t.lineTo(-2.98,3.62),t.lineTo(-1.34,3.22)):(t.moveTo(1.3,.42),t.lineTo(-1.55,.7),t.lineTo(-2.55,2.42),t.lineTo(-.25,2.08)),t.closePath();const e=new fr(t,{depth:n?.08:.12,bevelEnabled:!1});return e.rotateX(Math.PI/2),e}for(const n of[-1,1]){const t=n<0?"PORT":"STARBOARD",e=ni(`${t} INNER WING`,new A(0,0,0),new A(-.18,.58,n*2.35),new A(n*5,0,n*4)),i=sn(Rd(!1),Tn);i.scale.z=n,e.add(i);const s=sn(new cn(1.45,.055,.36),bn);s.position.set(-1.25,-.02,n*1.72),s.rotation.y=n*.12,e.add(s);const r=ni(`${t} OUTER WING`,new A(0,0,0),new A(-.75,.92,n*3.85),new A(n*8,n*4,n*7)),o=sn(Rd(!0),Zn);o.scale.z=n,r.add(o);const a=new Me(new cn(1.05,.035,.15),n<0?ur:hr);a.position.set(-1.78,.1,n*2.72),r.add(a);const c=new Me(new ro(.085,16,12),new ii({color:n<0?Ae.coral:Ae.mint}));c.position.set(-2.82,.05,n*3.48),r.add(c)}function Sy(){const n=new io;n.moveTo(.4,.15),n.lineTo(-.9,.2),n.lineTo(-1.3,1.45),n.lineTo(-.45,1.05),n.closePath();const t=new fr(n,{depth:.07,bevelEnabled:!1});return t.rotateX(Math.PI/2),t}for(const n of[-1,1]){const t=ni(n<0?"PORT STABILIZER":"STARBOARD STABILIZER",new A(-2.15,.15,0),new A(-1.25,.68,n*3.05),new A(n*6,0,n*5)),e=sn(Sy(),Tn);e.scale.z=n,t.add(e)}function My(){const n=new io;return n.moveTo(.35,0),n.lineTo(-.85,0),n.lineTo(-.55,1.35),n.lineTo(.05,1.02),n.closePath(),new fr(n,{depth:.08,bevelEnabled:!1})}for(const n of[-1,1])ni(n<0?"PORT FIN":"STARBOARD FIN",new A(-1.86,.24,n*1.78),new A(-.72,2.05,n*.72),new A(0,n*5,n*4)).add(sn(My(),n<0?bn:Zn));const _p=[],vp=[];for(const n of[-1,1]){const t=ni(n<0?"PORT ENGINE":"STARBOARD ENGINE",new A(-.72,-.035,n*1.82),new A(-.55,-.92,n*2.68),new A(n*5,n*4,n*4)),e=sn(Th(2.48,.28,.42,.23,.34,36,6),bn);t.add(e);for(const l of[-1.03,-.44,.28,.92]){const u=(1.24-l)/2.48,d=Ca(Ee.lerp(.28,.23,u)*1.03,Ee.lerp(.42,.34,u)*1.03,.018,l===-1.03?Nn:Zn);d.position.x=l,t.add(d)}const i=Ca(.285,.425,.038,Zn);i.position.x=1.22,t.add(i);const s=new En;s.position.x=1.235;for(let l=0;l<12;l+=1){const u=new Me(new cn(.022,.39,.045),hr);u.rotation.x=l/12*Math.PI*2,s.add(u)}const r=new Me(new ds(.12,.58,24),Tn);r.rotation.z=-Math.PI/2,r.position.x=.2,s.add(r),t.add(s),_p.push(s);const o=new Me(new ds(.14,.56,20),Nn);o.rotation.z=Math.PI/2,o.position.x=-1.24,t.add(o);const a=new ii({color:n<0?Ae.coral:Ae.mint,transparent:!0,opacity:0,blending:Xr,depthWrite:!1}),c=new Me(new ds(.25,3.2,24,1,!0),a);c.rotation.z=Math.PI/2,c.position.set(-3.58,-.035,n*1.82),c.scale.y=1,As.add(c),vp.push(a)}for(let n=0;n<6;n+=1){const t=1.4-n*.58,e=ni(`AVIONICS ${String(n+1).padStart(2,"0")}`,new A(t,-.05,0),new A((n-2.5)*.22,n%2===0?.82+n*.08:-.78-n*.06,n%2===0?.72:-.72),new A(n*1.2,n*-1.5,n*1.1)),i=sn(new cn(.34+n*.025,.22,.42),n%3===0?Nn:Tn);e.add(i)}const Pa=new En,xp=sn(new eo(.1,.1,5.4,18),bn);xp.rotation.z=Math.PI/2;Pa.add(xp);for(let n=0;n<9;n+=1){const t=-2.25+n*.56,e=new Me(new oo(.52+Math.sin(n*.7)*.08,.018,8,48),n%3===0?Nn:Tn);e.rotation.y=Math.PI/2,e.position.x=t,Pa.add(e);for(const i of[-.18,.18]){const s=new Me(new cn(.5,.025,.025),n%2===0?hr:ur);s.position.set(t,i,n%2===0?.24:-.24),Pa.add(s)}}yn.add(Pa);const wn=new En;wn.name="NX-7 ENGINEERING DRAWING";yn.add(wn);function xi(n,t=gr){return new Ba(new De().setFromPoints(n),t)}function yy(n,t,e,i=gr){const s=Array.from({length:65},(r,o)=>{const a=o/64*Math.PI*2;return new A(n,Math.cos(a)*t,Math.sin(a)*e)});return xi(s,i)}function Ey(n,t,e,i,s,r=22){const o=Array.from({length:r*2+1},(c,l)=>{const u=l/(r*2)*Math.PI*2,d=l%2===0?1.08:.95;return new A(0,Math.cos(u)*i*d,Math.sin(u)*s*d)}),a=xi(o,ps);return a.position.set(n,t,e),a}const Sp=[{x:-3.1,h:.12,w:.25},{x:-2.55,h:.25,w:.52},{x:-1.75,h:.3,w:.67},{x:-.8,h:.34,w:.76},{x:.15,h:.34,w:.78},{x:1.05,h:.33,w:.73},{x:1.9,h:.29,w:.6},{x:2.7,h:.24,w:.48},{x:3.45,h:.12,w:.24},{x:4.45,h:.015,w:.02}];Sp.forEach((n,t)=>{wn.add(yy(n.x,n.h*(t%2===0?1.02:1),n.w*(t%2===0?1.02:1),t===4?ps:gr))});const Mp=[];[{x:-2.55,y:0,z:0,h:.29,w:.58,teeth:28},{x:-.82,y:0,z:0,h:.38,w:.82,teeth:32},{x:1.72,y:0,z:0,h:.33,w:.66,teeth:30},{x:-.35,y:0,z:-1.82,h:.31,w:.45,teeth:22},{x:-.35,y:0,z:1.82,h:.31,w:.45,teeth:22}].forEach(n=>{const t=Ey(n.x,n.y,n.z,n.h,n.w,n.teeth);Mp.push(t),wn.add(t)});for(let n=0;n<10;n+=1){const t=n/10*Math.PI*2,e=Sp.map(i=>new A(i.x,Math.cos(t)*i.h,Math.sin(t)*i.w));wn.add(xi(e,_r))}wn.add(xi([new A(-4.7,0,0),new A(5.05,0,0)],ps));wn.add(xi([new A(-3.28,.08,0),new A(4.48,.08,0)],_r));const by=[[[3.25,.08,.42],[-2.88,.08,3.58]],[[3.25,.08,-.42],[-2.88,.08,-3.58]],[[1.65,.09,1.15],[-2.64,.09,2.52]],[[1.65,.09,-1.15],[-2.64,.09,-2.52]],[[.62,.1,1.72],[-2.25,.1,3.1]],[[.62,.1,-1.72],[-2.25,.1,-3.1]],[[-.2,.1,2.08],[-.2,.1,3.25]],[[-.2,.1,-2.08],[-.2,.1,-3.25]]];by.forEach((n,t)=>{wn.add(xi(n.map(e=>new A(...e)),t<2?gr:_r))});const yp=[];for(let n=0;n<26;n+=1){const t=-2.95+n*.285;yp.push(t,-.3,.02,t+.22,.3,.02)}const Ty=new Qs(new De().setAttribute("position",new _e(yp,3)),_r);wn.add(Ty);function Lh(n,t,e=.16){const i=t.clone().sub(n).normalize(),s=new A(-i.y,i.x,0).multiplyScalar(e);wn.add(xi([n,t],ps)),wn.add(xi([n.clone().sub(s),n.clone().add(s)],ps)),wn.add(xi([t.clone().sub(s),t.clone().add(s)],ps))}Lh(new A(-3.25,-1.06,0),new A(4.48,-1.06,0));Lh(new A(-2.9,1.16,0),new A(-2.9,-1.16,0));Lh(new A(-1.7,.8,-3.72),new A(-1.7,.8,3.72));const zl=new bi({color:8025969,transparent:!0,opacity:0}),Ep=new En;yn.add(Ep);Ra.forEach(n=>{const t=n.userData.home,e=n.userData.explodeOffset,i=new De().setFromPoints([t,t.clone().add(e.clone().multiplyScalar(.64))]);Ep.add(new Ba(i,zl))});const Ay=[new A(-7,-1.5,-2),new A(-3.8,1.2,.8),new A(0,.6,1.5),new A(3.8,-.8,0),new A(7,1.6,-1.5)],wy=new no(Ay),bp=new bi({color:Ae.mint,transparent:!0,opacity:.18}),Tp=new Ba(new De().setFromPoints(wy.getPoints(180)),bp);Tp.position.z=-2;vi.add(Tp);const Ap=[];for(let n=0;n<160;n+=1){const t=(Math.random()-.5)*24,e=(Math.random()-.5)*10,i=(Math.random()-.5)*10-2,s=.12+Math.random()*.55;Ap.push(t,e,i,t+s,e,i)}const wp=new De;wp.setAttribute("position",new _e(Ap,3));const Vl=new bi({color:Ae.foreground,transparent:!0,opacity:.18}),Rp=new Qs(wp,Vl);vi.add(Rp);const Cp=new ii({color:Ae.coral,transparent:!0,opacity:0,side:_n,blending:Xr,depthWrite:!1}),Pp=new bi({color:Ae.coral,transparent:!0,opacity:0,depthTest:!1}),Lp=new so(7.8,5.8),uo=new Me(Lp,Cp);uo.rotation.y=Math.PI/2;uo.add(new Qs(new ha(Lp),Pp));uo.position.set(4.75,0,0);As.add(uo);const Gl=new uh(Ae.coral,0,7,2);As.add(Gl);const Cd=new Oi(new A(-1,0,0),4.75),Ry=new ii({color:Ae.blue,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1}),Dh=new Me(new ds(2.7,7.2,32,3,!0),Ry);Dh.rotation.z=Math.PI/2;Dh.position.x=-2.9;As.add(Dh);const Dp=[];for(let n=0;n<5;n+=1){const t=new ii({color:n%2===0?Ae.coral:Ae.mint,transparent:!0,opacity:0,blending:Xr,depthWrite:!1}),e=new Me(new oo(.72,.022,8,96),t);e.rotation.y=Math.PI/2,e.position.x=-3.2-n*.35,e.scale.setScalar(.1),As.add(e),Dp.push(e)}const Cy=[-2.35,-.82,.85,2.22].map((n,t)=>{const e=new ii({color:t%2===0?13916993:3496568,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),i=new Me(new oo(.54,.018,8,72),e);return i.rotation.y=Math.PI/2,i.position.x=n,i.scale.setScalar(.2),yn.add(i),{mesh:i,material:e}});yn.rotation.set(Ee.degToRad(-5),Ee.degToRad(-10),Ee.degToRad(-2));const Ih=window.matchMedia("(prefers-reduced-motion: reduce)").matches;Ih||lr(_p,{rotateX:360,duration:620,loop:!0,ease:"linear"});const Ms=QM({autoplay:!1,defaults:{ease:"inOut(3)"}}),kl={progress:0},La={light:0,blueprint:0},Gr={r:8,g:11,b:12},kr={r:227,g:223,b:215},Dn={x:4.75,energy:0},Dr={x:.8,y:1.15,z:13.8,targetX:.5,targetY:0,targetZ:0,upX:0,upY:1,upZ:0,fov:34},Hl={progress:0},Py=new no([new A(2.8,2.2,13.5),new A(4.5,2.7,14.2),new A(9.2,6.5,12.8),new A(5.8,11.5,12),new A(-1.8,12.5,12.8),new A(-9.6,8,10.5),new A(-11.8,5.5,-6),new A(-4.8,7.5,-13.5),new A(5.8,2.8,14.5)],!1,"catmullrom",.34),Ly=new no([new A(.55,0,0),new A(.35,0,0),new A(.1,0,0),new A(.45,.08,0),new A(.55,.06,0),new A(.2,-.02,0),new A(0,0,0),new A(0,-.04,0),new A(0,-.05,0)],!1,"catmullrom",.34),Pd=new A,Ld=new A;Ms.add(kl,{progress:1,duration:7200,ease:"linear"},0).add(Hl,{progress:1,duration:7200,ease:"linear"},0).add(yn,{x:1.45,y:-.08,rotateX:-3,rotateY:-7,rotateZ:-2,scale:.94,duration:900},0).add(Dr,{fov:32,duration:920,ease:"out(3)"},0).add(Gr,{r:18,g:8,b:7,duration:620,ease:"inOutQuad"},620).add(Dn,{energy:1,duration:120,ease:"out(4)"},760).add(Dn,{x:-3.55,duration:940,ease:"inOut(3)"},800).add(Dn,{energy:0,duration:180,ease:"out(3)"},1660).add(yn,{x:.45,y:.04,rotateX:0,rotateY:0,rotateZ:0,scale:.82,duration:980,ease:"inOut(5)"},850).add(La,{light:1,blueprint:1,duration:820,ease:"inOutQuad"},900).add(Dr,{fov:34,duration:920,ease:"inOut(4)"},980).add(bp,{opacity:0,duration:360},980).add(zl,{opacity:.46,duration:460},1450).add(kr,{r:219,g:226,b:228,duration:900,ease:"inOutQuad"},2100).add(yn,{x:.15,y:.05,rotateY:7,rotateZ:-2,scale:.79,duration:1250,ease:"inOut(3)"},2380).add(kr,{r:232,g:226,b:216,duration:900,ease:"inOutQuad"},3400).add(yn,{x:.1,y:0,rotateY:-5,rotateZ:1.5,scale:.82,duration:1320,ease:"inOut(3)"},3600).add(zl,{opacity:0,duration:520},4880).add(Dr,{fov:31,duration:900,ease:"inOut(4)"},5200).add(La,{light:0,blueprint:0,duration:920,ease:"inOutQuad"},5660).add(Gr,{r:8,g:11,b:12,duration:820,ease:"inOutQuad"},5660).add(yn,{x:0,y:-.18,rotateX:-4,rotateY:-8,rotateZ:0,scale:.96,duration:1120,ease:"inOut(5)"},5760).add(Dr,{fov:35,duration:920,ease:"inOut(4)"},6200);function Dy(n){return/FUSELAGE|TAIL CONE|NOSE/.test(n)?0:/CHINE|WING/.test(n)?1:/ENGINE|STABILIZER|FIN|CANOPY/.test(n)?2:3}function Iy(n){return/AVIONICS/.test(n)?0:/FUSELAGE|TAIL CONE|NOSE/.test(n)?1:/ENGINE/.test(n)?2:/CHINE|WING/.test(n)?3:4}Ra.forEach((n,t)=>{const e=n.userData.home,i=n.userData.explodeOffset,s=n.userData.explodeRotation,r=.12;Ms.add(n,{x:e.x+i.x*r,y:e.y+i.y*r,z:e.z+i.z*r,duration:360,ease:"out(4)"},720+t*10).add(n,{x:e.x,y:e.y,z:e.z,duration:440,ease:"inOut(4)"},1040+(Ra.length-t)*7).add(n,{x:e.x+i.x*.62,y:e.y+i.y*.62,z:e.z+i.z*.62,rotateX:s.x*.68,rotateY:s.y*.68,rotateZ:s.z*.68,duration:880,ease:"out(5)"},1420+Dy(n.userData.name)*185+t*8).add(n,{x:e.x,y:e.y,z:e.z,rotateX:Ee.radToDeg(n.userData.homeRotation.x),rotateY:Ee.radToDeg(n.userData.homeRotation.y),rotateZ:Ee.radToDeg(n.userData.homeRotation.z),duration:1080,ease:"inOut(5)"},3480+Iy(n.userData.name)*225+t*7)});Cy.forEach(({mesh:n,material:t},e)=>{const i=3650+e*280;Ms.add(n,{scale:[.2,1.7],duration:620,ease:"out(4)"},i).add(t,{opacity:[0,.62,0],duration:620,ease:"out(4)"},i).add(n,{scale:.2,duration:10},i+640)});vp.forEach((n,t)=>{Ms.add(n,{opacity:0,duration:260},920).add(n,{opacity:.62-t*.08,duration:520},6250)});Dp.forEach((n,t)=>{Ms.add(n,{scale:1.4+t*.38,opacity:[0,.5-t*.06,0],duration:760,ease:"out(4)"},6260+t*76).add(n,{scale:.1,opacity:0,duration:10},7140)});const Da=[...document.querySelectorAll(".chapter")],Ny=[...document.querySelectorAll(".story-index a")],Dd=document.querySelector(".story-index__track span"),Id=document.querySelector(".scroll-status div i"),Nd=document.querySelector(".scroll-status__chapter"),Ud=document.querySelector(".scroll-status__percent"),Fd=document.querySelector(".phase-readout"),ms=document.querySelector(".vector-scope__path"),Bc=document.querySelector(".vector-scope__probe"),Od=document.querySelector(".vector-readout"),Bd=document.querySelector(".coordinates--north"),zd=document.querySelector(".coordinates--south"),Vd=document.querySelector(".event-log span"),Gd=document.querySelector(".event-log b"),kd=document.querySelector(".chapter-flash"),Hr=ms?.getTotalLength()??1;ms&&(ms.style.strokeDasharray=`${Hr}`,ms.style.strokeDashoffset=`${Hr}`);let Wl=0,ui=0,di=-1,Wr=73,Xl=.5;const Hd=[["EVENT / PREFLIGHT","0x7A-00 / AIRFRAME ONLINE"],["EVENT / CALIBRATE","0x14-C2 / SURFACES ALIGNED"],["EVENT / VECTOR","0x84-FF / FLIGHT PATH LOCKED"],["EVENT / TUNE","0x6B-47 / MANUAL CONTROL"],["EVENT / MODULES","0x5D-84 / AIRFRAME UNBOUND"],["EVENT / LAUNCH","0xE8-FF / ASSEMBLY COMPLETE"]];function Uy(){const n=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);return Ee.clamp(window.scrollY/n,0,1)}function Fy(){const n=window.scrollY+window.innerHeight*.5;let t=0;return Da.forEach((e,i)=>{n>=e.offsetTop&&(t=i)}),t}function Oy(){const n=Fy();if(n!==di&&(di=n,document.body.dataset.chapter=String(di),Ny.forEach((t,e)=>t.classList.toggle("is-active",e===di)),Da.forEach((t,e)=>t.classList.toggle("is-active",e===di)),Nd&&(Nd.textContent=String(di).padStart(2,"0")),Vd&&(Vd.textContent=Hd[di][0]),Gd&&(Gd.textContent=Hd[di][1]),!Ih)){const t=Da[di].querySelectorAll(".eyebrow, h1, h2, .hero-copy__lead, .chapter-copy > p:not(.eyebrow), .data-row, .vector-scope, .module-ledger, .hero-actions");lr(t,{opacity:[0,1],y:[24,0],duration:560,delay:ly(65),ease:"out(4)"}),kd&&lr(kd,{opacity:[0,.16,0],scaleX:[0,1],duration:520,ease:"out(4)"})}}function By(){if(!ms||!Bc||!Od)return;const n=Da[2],t=(window.scrollY+window.innerHeight*.6-n.offsetTop)/n.offsetHeight,e=Ee.clamp(t,0,1);ms.style.strokeDashoffset=`${Hr*(1-e)}`;const i=ms.getPointAtLength(Hr*e);Bc.setAttribute("cx",i.x.toFixed(2)),Bc.setAttribute("cy",i.y.toFixed(2)),Od.textContent=(Hr*e).toFixed(1).padStart(5,"0")}function Ip(){Wl=Uy(),Oy(),By()}window.addEventListener("scroll",Ip,{passive:!0});document.querySelectorAll("a").forEach(n=>{n.addEventListener("click",t=>t.preventDefault())});const Wd=document.querySelector(".carrier-control input"),Xd=document.querySelector(".carrier-control output");Wd?.addEventListener("input",()=>{Wr=Number(Wd.value),Xd&&(Xd.value=String(Wr)),lr(Nn,{emissiveIntensity:.18+Wr/96*.85,duration:240,ease:"out(3)"})});const Yd=document.querySelector(".probe-state"),Np=ry(".probe-handle",{container:".probe-field",containerPadding:10,releaseEase:"out(4)",onUpdate:n=>{const t=Math.round(n.progressX*100),e=Math.round((1-n.progressY)*100);Xl=(n.progressX+1-n.progressY)*.5,Yd&&(Yd.textContent=`X ${String(t).padStart(2,"0")} / Y ${String(e).padStart(2,"0")}`),Qr.position.x=-5+n.progressX*10,Qr.position.y=-3+(1-n.progressY)*6}});Np.progressX=.5;Np.progressY=.5;function Up(){const n=window.innerWidth,t=window.innerHeight;Yi.setPixelRatio(Math.min(window.devicePixelRatio,n<760?1.25:1.6)),Yi.setSize(n,t,!1),Wn.aspect=n/t,Wn.updateProjectionMatrix()}window.addEventListener("resize",Up);const zy=new wg;function Fp(){const n=zy.getElapsedTime();ui=Ih?Wl:Ee.lerp(ui,Wl,.075),Ms.seek(ui*Ms.duration);const t=La.light,e=La.blueprint,i=window.innerWidth<760?1.22:1;Py.getPointAt(Ee.clamp(Hl.progress,0,1),Pd),Ly.getPointAt(Ee.clamp(Hl.progress,0,1),Ld),Wn.position.copy(Pd).multiplyScalar(i),Wn.up.set(0,1,0),Wn.lookAt(Ld);const s=Dr.fov+(window.innerWidth<760?9:0);Math.abs(Wn.fov-s)>.01&&(Wn.fov=s,Wn.updateProjectionMatrix()),wd.setRGB(Gr.r/255,Gr.g/255,Gr.b/255),Td.setRGB(kr.r/255,kr.g/255,kr.b/255),Oc.lerpColors(wd,Td,t),vi.background.copy(Oc),vi.fog?.color.copy(Oc),Zn.color.lerpColors(hy,uy,t),bn.color.lerpColors(dy,fy,t),Tn.color.lerpColors(py,my,t),Bl.color.lerpColors(gy,Ad,t);const r=Ee.lerp(1,.018,e);uo.position.x=Dn.x,Gl.position.set(Dn.x,.4,0),Gl.intensity=Dn.energy*28,Cp.opacity=Dn.energy*.055,Pp.opacity=Dn.energy*.7,Cd.constant=Dn.x;const o=Dn.energy>.015?[Cd]:[];[Zn,bn,Tn,Vr,Nn,hr,ur].forEach(l=>{l.clippingPlanes=o}),Zn.opacity=r,bn.opacity=r,Tn.opacity=r,Vr.opacity=Ee.lerp(.82,.012,e),Nn.opacity=Ee.lerp(1,.025,e),hr.opacity=Ee.lerp(1,.02,e),ur.opacity=Ee.lerp(1,.02,e);const a=e<.42;Zn.depthWrite=a,bn.depthWrite=a,Tn.depthWrite=a,Vr.depthWrite=a,Nn.depthWrite=a,gr.opacity=e*.92,_r.opacity=e*.34,ps.opacity=e*.78,Bl.opacity=Ee.lerp(.62,.08,e),document.body.classList.toggle("is-engineering",t>.34),document.body.classList.toggle("is-exploded",e>.82&&kl.progress>.22&&kl.progress<.57),document.body.classList.toggle("is-scanning",Dn.energy>.05),Vl.color.lerpColors(_y,Ad,t),Vl.opacity=Ee.lerp(.16,.025,t),Nn.emissiveIntensity+=(.18+Xl*.34-Nn.emissiveIntensity)*.04,pp.intensity=Ee.lerp(1.5,2.1,t),Eh.intensity=Ee.lerp(5.8,1.2,t),Qr.intensity=(16+Math.sin(n*1.2)*2)*(1-t),bh.intensity=(13+Math.sin(n*1.6)*3+Wr*.03)*(1-t),Mp.forEach((l,u)=>{l.rotation.x=n*(u%2===0?.18:-.14)*e}),As.rotation.z=Math.sin(n*.4)*.012,Rp.position.x=n*1.4%8-4;const c=Math.round(ui*100);Dd&&(Dd.style.transform=`scaleY(${ui})`),Id&&(Id.style.transform=`scaleX(${ui})`),Ud&&(Ud.textContent=`${String(c).padStart(3,"0")}%`),Fd&&(Fd.textContent=(ui*6.283).toFixed(3)),Bd&&(Bd.textContent=`MACH ${(.72+ui*.94).toFixed(2)} / AOA ${(4.8+Math.sin(ui*Math.PI)*7.4).toFixed(1)}`),zd&&(zd.textContent=`THRUST ${Math.round(Wr)}% / VECTOR ${Math.round(Xl*100)}`),Yi.render(vi,Wn),requestAnimationFrame(Fp)}Up();Ip();Fp();window.addEventListener("load",()=>{window.setTimeout(()=>{document.body.classList.add("is-ready"),lr(".boot-screen__line span",{scaleX:[0,1],duration:520,ease:"out(4)"}),lr(".boot-screen",{opacity:[1,0],duration:520,delay:320,ease:"inOut(3)"})},180)});
