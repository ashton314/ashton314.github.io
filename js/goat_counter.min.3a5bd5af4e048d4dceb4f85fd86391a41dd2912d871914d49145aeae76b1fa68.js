window.goatcounter={endpoint:'https://ashton314_github_io.goatcounter.com/count'};(function(){'use strict';if(window.goatcounter&&window.goatcounter.vars)
window.goatcounter=window.goatcounter.vars
else
window.goatcounter=window.goatcounter||{}
var get_data=function(vars){var data={p:(vars.path===undefined?goatcounter.path:vars.path),r:(vars.referrer===undefined?goatcounter.referrer:vars.referrer),t:(vars.title===undefined?goatcounter.title:vars.title),e:!!(vars.event||goatcounter.event),s:[window.screen.width,window.screen.height,(window.devicePixelRatio||1)],b:is_bot(),q:location.search,}
var rcb,pcb,tcb
if(typeof(data.r)==='function')rcb=data.r
if(typeof(data.t)==='function')tcb=data.t
if(typeof(data.p)==='function')pcb=data.p
if(is_empty(data.r))data.r=document.referrer
if(is_empty(data.t))data.t=document.title
if(is_empty(data.p)){var loc=location,c=document.querySelector('link[rel="canonical"][href]')
if(c){var a=document.createElement('a')
a.href=c.href
if(a.hostname.replace(/^www\./,'')===location.hostname.replace(/^www\./,''))
loc=a}
data.p=(loc.pathname+loc.search)||'/'}
if(rcb)data.r=rcb(data.r)
if(tcb)data.t=tcb(data.t)
if(pcb)data.p=pcb(data.p)
return data}
var is_empty=function(v){return v===null||v===undefined||typeof(v)==='function'}
var is_bot=function(){var w=window,d=document
if(w.callPhantom||w._phantom||w.phantom)
return 150
if(w.__nightmare)
return 151
if(d.__selenium_unwrapped||d.__webdriver_evaluate||d.__driver_evaluate)
return 152
if(navigator.webdriver)
return 153
return 0}
var urlencode=function(obj){var p=[]
for(var k in obj)
if(obj[k]!==''&&obj[k]!==null&&obj[k]!==undefined&&obj[k]!==false)
p.push(encodeURIComponent(k)+'='+encodeURIComponent(obj[k]))
return '?'+p.join('&')}
var get_endpoint=function(){var s=document.querySelector('script[data-goatcounter]');if(s&&s.dataset.goatcounter)
return s.dataset.goatcounter
return(goatcounter.endpoint||window.counter)}
goatcounter.filter=function(){if('visibilityState'in document&&(document.visibilityState==='prerender'||document.visibilityState==='hidden'))
return 'visibilityState'
if(!goatcounter.allow_frame&&location!==parent.location)
return 'frame'
if(!goatcounter.allow_local&&location.hostname.match(/(localhost$|^127\.|^10\.|^172\.(1[6-9]|2[0-9]|3[0-1])\.|^192\.168\.)/))
return 'local'
if(localStorage&&localStorage.getItem('skipgc')==='t')
return 'disabled with #toggle-goatcounter'
return false}
window.goatcounter.url=function(vars){var data=get_data(vars||{})
if(data.p===null)
return
data.rnd=Math.random().toString(36).substr(2,5)
var endpoint=get_endpoint()
if(!endpoint){if(console&&'warn'in console)
console.warn('goatcounter: no endpoint found')
return}
return endpoint+urlencode(data)}
window.goatcounter.count=function(vars){var f=goatcounter.filter()
if(f){if(console&&'log'in console)
console.warn('goatcounter: not counting because of: '+f)
return}
var url=goatcounter.url(vars)
if(!url){if(console&&'log'in console)
console.warn('goatcounter: not counting because path callback returned null')
return}
var img=document.createElement('img')
img.src=url
img.style.position='absolute'
img.setAttribute('alt','')
img.setAttribute('aria-hidden','true')
var rm=function(){if(img&&img.parentNode)img.parentNode.removeChild(img)}
setTimeout(rm,3000)
img.addEventListener('load',rm,false)
document.body.appendChild(img)}
window.goatcounter.get_query=function(name){var s=location.search.substr(1).split('&')
for(var i=0;i<s.length;i++)
if(s[i].toLowerCase().indexOf(name.toLowerCase()+'=')===0)
return s[i].substr(name.length+1)}
window.goatcounter.bind_events=function(){if(!document.querySelectorAll)
return
var send=function(elem){return function(){goatcounter.count({event:true,path:(elem.dataset.goatcounterClick||elem.name||elem.id||''),title:(elem.dataset.goatcounterTitle||elem.title||(elem.innerHTML||'').substr(0,200)||''),referrer:(elem.dataset.goatcounterReferrer||elem.dataset.goatcounterReferral||''),})}}
Array.prototype.slice.call(document.querySelectorAll("*[data-goatcounter-click]")).forEach(function(elem){if(elem.dataset.goatcounterBound)
return
var f=send(elem)
elem.addEventListener('click',f,false)
elem.addEventListener('auxclick',f,false)
elem.dataset.goatcounterBound='true'})}
if(location.hash==='#toggle-goatcounter')
if(localStorage.getItem('skipgc')==='t'){localStorage.removeItem('skipgc','t')
alert('GoatCounter tracking is now ENABLED in this browser.')}
else{localStorage.setItem('skipgc','t')
alert('GoatCounter tracking is now DISABLED in this browser until '+location+' is loaded again.')}
if(!goatcounter.no_onload){var go=function(){goatcounter.count()
if(!goatcounter.no_events)
goatcounter.bind_events()}
if(document.body===null)
document.addEventListener('DOMContentLoaded',function(){go()},false)
else
go()}})();