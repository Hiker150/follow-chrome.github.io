var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){
function e(b,a,c){return b.call.apply(b.bind,arguments)}function f(b,a,c){if(!b)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return b.apply(a,c)}}return function(){return b.apply(a,arguments)}}function g(b,a,c){g=Function.prototype.bind&&-1!=(""+Function.prototype.bind).indexOf("native code")?e:f;return g.apply(null,arguments)}
Function.prototype.bind=Function.prototype.bind||function(b,a){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,b);return g.apply(null,c)}return g(this,b)};function h(b){this.a=b||{};this.pathname=window.location.pathname;this.f=!0;if(!1===this.a.tracklinks||!1===this.a.trackClicks)this.f=!1;this.a.trackQueryParams&&(this.k=!0);this.b=this.a.tracker?this.a.tracker+".":"";this.e=this.a.cookiePath||/^(.*\/)/.exec(this.pathname)[0];this.c=this.a.cookiePathCopy||[];this.prefix=this.a.prefix||"";this.h=this.a.defaultEventName;this.g=this.a.defaultAction;this.i=this.a.defaultLabel;var b=this.a.profile,a=this.prefix+this.pathname;this.k&&(a+=window.location.search);
window._gaq=window._gaq||[];window._gaq.push([this.b+"_setAccount",b]);window._gaq.push([this.b+"_setCookiePath",this.e]);window._gaq.push([this.b+"_setAllowAnchor",!0]);window._gaq.push([this.b+"_trackPageview",a]);if(this.c){b=0;for(a=this.c.length;b<a;b++)0>this.e.indexOf(this.c[b])&&window._gaq.push([this.b+"_cookiePathCopy",this.c[b]])}window._gat||(b=document.createElement("script"),b.type="text/javascript",b.async=!0,b.src=("https:"==document.location.protocol?"https://web.archive.org/web/20120701165425/https://ssl":"https://web.archive.org/web/20120701165425/http://www")+".google-analytics.com/ga.js",
a=document.getElementsByTagName("script")[0],a.parentNode.insertBefore(b,a));j(this,this.j,this);this.a.trackUnload&&k(window,"unload",this.l,this)}h.prototype.j=function(){this.f&&m(this);this.a.heatMapper&&n(this)};h.prototype.l=function(){this.d("AutoTrack: Navigation","Unload",window.location.href)};
function m(b){k(document.body,"click",function(a){a=a.target||a.srcElement;a=3==a.nodeType?a.parentNode:a;do{if(Boolean("a"==a.nodeName.toLowerCase()||a.getAttribute("data-g-event")||a.getAttribute("data-g-action")||a.getAttribute("data-g-label"))){var b=o(this,"eventname",a),d=o(this,"action",a),l=o(this,"label",a);this.d(b,d,l)}a.parentNode&&(a=a.parentNode)}while(a.parentNode)},b)}
function n(b){k(document.body,"click",function(a){this.d("AutoTrack: Heatmap","Click",a.clientX+","+a.clientY)},b)}h.prototype.d=function(b,a,c){window._gaq&&(this.prefix&&(c=this.prefix+c),window._gaq.push([this.b+"_trackEvent",b,a,c]))};
function o(b,a,c){function d(a){if("string"==typeof a)return a;if("function"==typeof a)return a(c)}if("eventname"==a)return c.getAttribute("data-g-event")||d(b.h)||("a"==c.tagName.toLowerCase()?c.hostname==window.location.hostname?"AutoTrack: Link Click":"AutoTrack: Outbound Click":"AutoTrack: Element Click");if("action"==a)return c.getAttribute("data-g-action")||d(b.g)||c.getAttribute("href")||"AutoTrack: Element Click";if("label"==a)return c.getAttribute("data-g-label")||d(b.i)||b.pathname}
function k(b,a,c,d){d&&(c=g(c,d));b.addEventListener?b.addEventListener(a,c,!1):b.attachEvent&&b.attachEvent("on"+a,c)}
function j(b,a,c){c&&(a=g(a,c));if(document.addEventListener)try{k(document,"DOMContentLoaded",a,b)}catch(d){k(window,"load",a,b)}else if(!document.uniqueID&&document.expando)var l=document.createElement("tempnode"),i=window.setInterval(function(){try{l.doScroll("left")}catch(b){return}window.clearInterval(i);i=l=null;c&&(a=g(a,c));a()},50);else"readyState"in document?i=window.setInterval(function(){/loaded|complete/.test(document.readyState)&&(window.clearInterval(i),i=null,c&&(a=g(a,c)),a())},50):
k(window,"load",a,b)}var p=["gweb","analytics","AutoTrack"],q=this;!(p[0]in q)&&q.execScript&&q.execScript("var "+p[0]);for(var r;p.length&&(r=p.shift());)!p.length&&void 0!==h?q[r]=h:q=q[r]?q[r]:q[r]={};h.prototype.trackEvent=h.prototype.d;
})()

}
/*
     FILE ARCHIVED ON 16:54:25 Jul 01, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:57:30 Apr 23, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.603
  exclusion.robots: 0.062
  exclusion.robots.policy: 0.053
  cdx.remote: 0.084
  esindex: 0.009
  LoadShardBlock: 325.917 (6)
  PetaboxLoader3.datanode: 262.31 (7)
  load_resource: 74.175
  PetaboxLoader3.resolve: 42.158
*/