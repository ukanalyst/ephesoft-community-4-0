function folderManager(){var T='',Bb='" for "gwt:onLoadErrorFn"',zb='" for "gwt:onPropertyErrorFn"',mb='"><\/script>',bb='#',Hc='.cache.html',db='/',pb='//',oc='45D5A42780108F7359422EB6C5150D2D',sc='54C04A26CA4D511669327CF022456E7A',xc='64FD01BF94E741A0FBEF08299FAD22F3',yc='8CA1285F3417BDE51C5D39E227663E82',zc='8CDCACA42FE124F4052B393D960988AF',Gc=':',pc=':1',Bc=':10',Cc=':11',qc=':2',rc=':3',tc=':4',uc=':5',vc=':6',wc=':7',Dc=':8',Ec=':9',tb='::',Uc='<script defer="defer">folderManager.onInjectionDone(\'folderManager\')<\/script>',lb='<script id="',Qc='<script language="javascript" src="',wb='=',cb='?',Ac='BEDDA6A8AE95F67034DA1730C2BE4F53',yb='Bad handler "',Oc='DOMContentLoaded',Fc='F2BE0B3C537CABFE29077C91136B3438',nb='SCRIPT',kb='__gwt_marker_folderManager',_b='adobeair',ac='air',ob='base',gb='baseUrl',X='begin',W='bootstrap',Hb='chrome',fb='clear.cache.gif',vb='content',ab='end',U='folderManager',ib='folderManager.nocache.js',sb='folderManager::',Xb='gecko',Zb='gecko1_8',$b='gecko1_9',Y='gwt.codesvr=',Z='gwt.hosted=',$='gwt.hybrid',Ic='gwt/clean/clean.css',Ab='gwt:onLoadErrorFn',xb='gwt:onPropertyErrorFn',ub='gwt:property',Gb='gxt.user.agent',Nc='head',mc='hosted.html?folderManager',Mc='href',Kb='ie10',Qb='ie6',Ob='ie7',Mb='ie8',Lb='ie9',Cb='iframe',eb='img',Db="javascript:''",Jc='link',ic='linux',lc='loadExternalRefs',hc='mac',gc='mac os x',fc='macintosh',qb='meta',Fb='moduleRequested',_='moduleStartup',Jb='msie',Pb='msie 6',Nb='msie 7',rb='name',Ib='opera',Eb='position:absolute;width:0;height:0;border:none',Kc='rel',Yb='rv:1.8',Rb='safari',Tb='safari3',Vb='safari4',Wb='safari5',hb='script',nc='selectingPermutation',V='startup',Lc='stylesheet',Pc='swfupload.js',Rc='swfupload.js"><\/script>',Sc='swfupload.speed.js',Tc='swfupload.speed.js"><\/script>',jb='undefined',dc='unknown',bc='user.agent',ec='user.agent.os',Sb='version/3',Ub='version/4',cc='webkit',kc='win32',jc='windows';var m=window,n=document,o=m.__gwtStatsEvent?function(a){return m.__gwtStatsEvent(a)}:null,p=m.__gwtStatsSessionId?m.__gwtStatsSessionId:null,q,r,s,t=T,u={},v=[],w=[],A=[],B=0,C,D;o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:W,millis:(new Date).getTime(),type:X});if(!m.__gwt_stylesLoaded){m.__gwt_stylesLoaded={}}if(!m.__gwt_scriptsLoaded){m.__gwt_scriptsLoaded={}}function F(){var b=false;try{var c=m.location.search;return (c.indexOf(Y)!=-1||(c.indexOf(Z)!=-1||m.external&&m.external.gwtOnLoad))&&c.indexOf($)==-1}catch(a){}F=function(){return b};return b}
function G(){if(q&&r){var b=n.getElementById(U);var c=b.contentWindow;if(F()){c.__gwt_getProperty=function(a){return L(a)}}folderManager=null;c.gwtOnLoad(C,U,t,B);o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:_,millis:(new Date).getTime(),type:ab})}}
function H(){function e(a){var b=a.lastIndexOf(bb);if(b==-1){b=a.length}var c=a.indexOf(cb);if(c==-1){c=a.length}var d=a.lastIndexOf(db,Math.min(c,b));return d>=0?a.substring(0,d+1):T}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=n.createElement(eb);b.src=a+fb;a=e(b.src)}return a}
function g(){var a=J(gb);if(a!=null){return a}return T}
function h(){var a=n.getElementsByTagName(hb);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(ib)!=-1){return e(a[b].src)}}return T}
function i(){var a;if(typeof isBodyLoaded==jb||!isBodyLoaded()){var b=kb;var c;n.write(lb+b+mb);c=n.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=nb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return T}
function j(){var a=n.getElementsByTagName(ob);if(a.length>0){return a[a.length-1].href}return T}
function k(){var a=n.location;return a.href==a.protocol+pb+a.host+a.pathname+a.search+a.hash}
var l=g();if(l==T){l=h()}if(l==T){l=i()}if(l==T){l=j()}if(l==T&&k()){l=e(n.location.href)}l=f(l);t=l;return l}
function I(){var b=document.getElementsByTagName(qb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(rb),g;if(f){f=f.replace(sb,T);if(f.indexOf(tb)>=0){continue}if(f==ub){g=e.getAttribute(vb);if(g){var h,i=g.indexOf(wb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=T}u[f]=h}}else if(f==xb){g=e.getAttribute(vb);if(g){try{D=eval(g)}catch(a){alert(yb+g+zb)}}}else if(f==Ab){g=e.getAttribute(vb);if(g){try{C=eval(g)}catch(a){alert(yb+g+Bb)}}}}}}
function J(a){var b=u[a];return b==null?null:b}
function K(a,b){var c=A;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function L(a){var b=w[a](),c=v[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(D){D(a,d,b)}throw null}
var M;function N(){if(!M){M=true;var a=n.createElement(Cb);a.src=Db;a.id=U;a.style.cssText=Eb;a.tabIndex=-1;n.body.appendChild(a);o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:_,millis:(new Date).getTime(),type:Fb});a.contentWindow.location.replace(t+P)}}
w[Gb]=function(){var a=navigator.userAgent.toLowerCase();if(a.indexOf(Hb)!=-1)return Hb;if(a.indexOf(Ib)!=-1)return Ib;if(a.indexOf(Jb)!=-1){if(n.documentMode>=10)return Kb;if(n.documentMode>=9)return Lb;if(n.documentMode>=8)return Mb;if(a.indexOf(Nb)!=-1)return Ob;if(a.indexOf(Pb)!=-1)return Qb;return Kb}if(a.indexOf(Rb)!=-1){if(a.indexOf(Sb)!=-1)return Tb;if(a.indexOf(Ub)!=-1)return Vb;return Wb}if(a.indexOf(Xb)!=-1){if(a.indexOf(Yb)!=-1)return Zb;return $b}if(a.indexOf(_b)!=-1)return ac;return null};v[Gb]={air:0,chrome:1,gecko1_8:2,gecko1_9:3,ie10:4,ie8:5,ie9:6,safari3:7,safari4:8,safari5:9};w[bc]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(cc)!=-1}())return Rb;if(function(){return b.indexOf(Jb)!=-1&&n.documentMode>=10}())return Kb;if(function(){return b.indexOf(Jb)!=-1&&n.documentMode>=9}())return Lb;if(function(){return b.indexOf(Jb)!=-1&&n.documentMode>=8}())return Mb;if(function(){return b.indexOf(Xb)!=-1}())return Zb;return dc};v[bc]={gecko1_8:0,ie10:1,ie8:2,ie9:3,safari:4};w[ec]=function(){var a=m.navigator.userAgent.toLowerCase();if(a.indexOf(fc)!=-1||a.indexOf(gc)!=-1){return hc}if(a.indexOf(ic)!=-1){return ic}if(a.indexOf(jc)!=-1||a.indexOf(kc)!=-1){return jc}return dc};v[ec]={linux:0,mac:1,unknown:2,windows:3};folderManager.onScriptLoad=function(){if(M){r=true;G()}};folderManager.onInjectionDone=function(){q=true;o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:lc,millis:(new Date).getTime(),type:ab});G()};I();H();var O;var P;if(F()){if(m.external&&(m.external.initModule&&m.external.initModule(U))){m.location.reload();return}P=mc;O=T}o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:W,millis:(new Date).getTime(),type:nc});if(!F()){try{K([$b,Zb,ic],oc);K([$b,Zb,hc],oc+pc);K([$b,Zb,dc],oc+qc);K([$b,Zb,jc],oc+rc);K([Tb,Rb,ic],sc);K([Tb,Rb,hc],sc+pc);K([Tb,Rb,dc],sc+qc);K([Tb,Rb,jc],sc+rc);K([Vb,Rb,ic],sc+tc);K([Vb,Rb,hc],sc+uc);K([Vb,Rb,dc],sc+vc);K([Vb,Rb,jc],sc+wc);K([Mb,Mb,ic],xc);K([Mb,Mb,hc],xc+pc);K([Mb,Mb,dc],xc+qc);K([Mb,Mb,jc],xc+rc);K([Zb,Zb,ic],yc);K([Zb,Zb,hc],yc+pc);K([Zb,Zb,dc],yc+qc);K([Zb,Zb,jc],yc+rc);K([Lb,Lb,ic],zc);K([Lb,Lb,hc],zc+pc);K([Lb,Lb,dc],zc+qc);K([Lb,Lb,jc],zc+rc);K([ac,Rb,ic],Ac);K([ac,Rb,hc],Ac+pc);K([Wb,Rb,dc],Ac+Bc);K([Wb,Rb,jc],Ac+Cc);K([ac,Rb,dc],Ac+qc);K([ac,Rb,jc],Ac+rc);K([Hb,Rb,ic],Ac+tc);K([Hb,Rb,hc],Ac+uc);K([Hb,Rb,dc],Ac+vc);K([Hb,Rb,jc],Ac+wc);K([Wb,Rb,ic],Ac+Dc);K([Wb,Rb,hc],Ac+Ec);K([Kb,Kb,ic],Fc);K([Kb,Kb,hc],Fc+pc);K([Kb,Kb,dc],Fc+qc);K([Kb,Kb,jc],Fc+rc);O=A[L(Gb)][L(bc)][L(ec)];var Q=O.indexOf(Gc);if(Q!=-1){B=Number(O.substring(Q+1));O=O.substring(0,Q)}P=O+Hc}catch(a){return}}var R;function S(){if(!s){s=true;if(!__gwt_stylesLoaded[Ic]){var a=n.createElement(Jc);__gwt_stylesLoaded[Ic]=a;a.setAttribute(Kc,Lc);a.setAttribute(Mc,t+Ic);n.getElementsByTagName(Nc)[0].appendChild(a)}G();if(n.removeEventListener){n.removeEventListener(Oc,S,false)}if(R){clearInterval(R)}}}
if(n.addEventListener){n.addEventListener(Oc,function(){N();S()},false)}var R=setInterval(function(){if(/loaded|complete/.test(n.readyState)){N();S()}},50);o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:W,millis:(new Date).getTime(),type:ab});o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:lc,millis:(new Date).getTime(),type:X});if(!__gwt_scriptsLoaded[Pc]){__gwt_scriptsLoaded[Pc]=true;document.write(Qc+t+Rc)}if(!__gwt_scriptsLoaded[Sc]){__gwt_scriptsLoaded[Sc]=true;document.write(Qc+t+Tc)}if(!__gwt_scriptsLoaded[Pc]){__gwt_scriptsLoaded[Pc]=true;document.write(Qc+t+Rc)}n.write(Uc)}
folderManager();