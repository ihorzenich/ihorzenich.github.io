RegExp.escape=function(_1){
if(!arguments.callee.sRE){
var _2=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];
arguments.callee.sRE=new RegExp("(\\"+_2.join("|\\")+")","g");
}
return _1.replace(arguments.callee.sRE,"\\$1");
};
var _CE={$:function(){
var _3=[],_4;
for(var i=0;i<arguments.length;i++){
_4=arguments[i];
if(typeof _4=="string"){
_4=document.getElementById(_4);
}
_3.push(_4);
}
return _3.length<2?_3[0]:_3;
},ret13:function(_6,_7,_8){
if(!_8){
_8=window;
}
if(_6=="unload"&&!_CE.isa7){
_6="beforeunload";
}
if(_8.addEventListener){
_8.addEventListener(_6,_7,false);
}else{
if(_8.attachEvent){
if(_8==window&&!(_6=="unload"||_6=="load"||_6=="beforeunload")){
_8=window.document;
}
_8.attachEvent("on"+_6,_7);
}
}
},pos:function(_9,_a){
var _b={};
_b.x=_b.y=0;
_9=_CE.$(_9);
if(!_9.nodeName){
return {x:_9.posX,y:_9.posY};
}
if(!_9){
return {x:undefined,y:undefined};
}
if(_9.nodeName=="OPTION"){
while(_9=_9.parentNode){
if(_9.nodeName=="SELECT"){
break;
}
}
return _CE.pos(_9);
}
if(!_a){
_a=document;
}
if(_9.nodeName=="AREA"){
return _CE.poa10(_9,_a);
}else{
if(_CE.isE4){
with(_9.getBoundingClientRect()){
_b.x=left-1;
_b.y=top-1;
}
var st=(_a.parentWindow.pageYOffset||_a.documentElement.scrollTop||_a.body.scrollTop||0);
var sl=(_a.parentWindow.pageXOffset||_a.documentElement.scrollLeft||_a.body.scrollLeft||0);
_b.x+=sl;
_b.y+=st;
}else{
if(_9["offsetParent"]){
var _e;
if((_CE.isSafari)&&(_9.style.getPropertyValue("position")=="absolute")&&(_9.parentNode==_CE.db)){
_e=_CE.db;
}else{
_e=_CE.db.parentNode;
}
do{
var n=_9["offsetLeft"];
_b.x+=isNaN(n)?0:n;
var m=_9["offsetTop"];
_b.y+=isNaN(m)?0:m;
_9=_9.offsetParent;
}while((_9!=_e)&&(_9!=null));
}else{
if(_9["x"]&&_9["y"]){
_b.x+=isNaN(_9.x)?0:_9.x;
_b.y+=isNaN(_9.y)?0:_9.y;
}
}
}
return _b;
}
},sus21:function(_11,_12,_13){
if(!_11){
return 0;
}
var _14=0;
while(_11){
var val=_11[_12];
if(val){
_14+=val-0;
if(_11==_13.body){
break;
}
}
_11=_11.parentNode;
}
return _14;
},iny8:function(_16,obj){
for(var i=0;i<_16.length;i++){
if(_16[i]==obj){
return true;
}
}
return false;
},size:function(_19){
_19=_CE.$(_19);
if(_19.nodeName=="AREA"){
return _CE.sia11(_19);
}
return {width:_19.offsetWidth,height:_19.offsetHeight};
},sia11:function(_1a){
var _1b=_CE.rea11(_1a);
return {width:(_1b.right-_1b.left),height:(_1b.bottom-_1b.top)};
},geX4:function(obj,_1d){
return _CE.pos(obj,_1d).x;
},geY4:function(obj,_1f){
return _CE.pos(obj,_1f).y;
},geh8:function(obj){
return _CE.size(obj).width;
},get9:function(obj){
return _CE.size(obj).height;
},por7:function(_22){
return {x:_CE.poX8(_22),y:_CE.poY8(_22)};
},poX8:function(_23){
return _23.pageX||(_23.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft));
},poY8:function(_24){
return _24.pageY||(_24.clientY+(document.documentElement.scrollTop||document.body.scrollTop));
},delay:function(_25){
date=new Date();
var _26=null;
do{
var _26=new Date();
}while(_26-date<_25);
},evt13:function(_27){
if(_27.target||_27.srcElement){
var _28=(_27.target||_27.srcElement);
return _28;
}
return null;
},ads12:function(_29,_2a){
for(var i=0;i<_2a.length;i++){
_29.push(_2a[i]);
}
},cln14:function(_2c,_2d){
var _2e=null;
var _2f=null;
try{
_2e=_CE.poX8(_2d);
_2f=_CE.poY8(_2d);
var pos=_CE.pos(_2c);
var _31=_CE.size(_2c);
return this.ren17(pos,_31,_2e,_2f);
}
catch(e){
}
return {x:_2e,y:_2f};
},ren17:function(pos,_33,_34,_35){
if(_35<pos.y){
_35=pos.y;
}
if(_35>pos.y+_33.height){
_35=pos.y+_33.height;
}
if(_34<pos.x){
_34=pos.x;
}
if(_34>pos.x+_33.width){
_34=pos.x+_33.width;
}
_34-=pos.x;
_35-=pos.y;
_34/=_33.width;
_35/=_33.height;
return {x:_34,y:_35};
}};
_CE.db=document["body"]||document["documentElement"];
_CE.isi8=(/Konqueror|Safari|KHTML/.test(navigator.userAgent))?true:false;
_CE.isE4=(/MSIE/.test(navigator.userAgent))?true:false;
_CE.isz5=(/Gecko/.test(navigator.userAgent)&&!_CE.isi8)?true:false;
_CE.is26=(/Firefox\/2/.test(navigator.userAgent)&&!this.isSafari)?true:false;
_CE.isa7=(/Opera/.test(navigator.userAgent))?true:false;
_CE.flash=0;
if(navigator.plugins&&navigator.plugins.length){
var x=navigator.plugins["Shockwave Flash"];
if(x&&x.description){
var y=x.description;
_CE.flash=y.charAt(y.indexOf(".")-1);
}
}else{
for(var i=10;i>0;i--){
_CE.flash=0;
try{
var flash=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);
_CE.flash=i;
break;
}
catch(e){
}
}
}
_CE.Cls5={cre6:function(){
return function(){
this.initialize.apply(this,arguments);
};
}};
Function.prototype.ce_bind=function(){
var _36=this;
var _37=[];
for(var i=0;i<arguments.length;i++){
_37.push(arguments[i]);
}
var _39=_37[0];
for(var i=0;i<_37.length-1;i++){
_37[i]=_37[i+1];
}
_37.length--;
return function(){
return _36.apply(_39,_37.concat(arguments));
};
};
Function.prototype.ce_bindAsEventListener=function(_3a){
var _3b=this;
return function(_3c){
return _3b.call(_3a,_3c||window.event);
};
};
_CE.log=function(_3d){
};
_CE.ged15=function(){
var _3e=document.getElementsByTagName("head");
if(_3e.length==0){
var _3f=document.createElement("HEAD");
document.appendChild(_3f);
return _3f;
}else{
return _3e[0];
}
};
_CE.toy7=function(_40){
var _41=new Array();
for(var i=0;i<_40.length;i++){
_41.push(_40[i]);
}
return _41;
};
if(_CE.isz5){
var ceoht=function(){
var _43=document.createElement("div");
_43.appendChild(this.cloneNode(true));
var _44=_43.innerHTML;
_43=null;
return _44;
};
var cetg=function(){
return this.srcTarget;
};
eval("HTMLElement.prototype.ce_outerHTML getter = ceoht");
eval("Event.prototype.target getter = cetg");
}
_CE.poa10=function(_45,_46){
var map=_45.parentNode;
if(!map.dstElement){
if(!_46){
_46=document;
}
var _48=_46.getElementsByTagName("*");
if(_48["toArray"]){
_48=_48.toy7();
}
for(var i=0;i<_48.length;i++){
var _4a=_48[i];
if(_4a.useMap){
if(_4a.useMap.replace("#","")==map.name){
break;
}
}
_4a=null;
}
map.dstElement=_4a;
}
if(map.dstElement){
var _4b=_CE.pos(map.dstElement);
var _4c=_CE.rea11(_45);
return {x:(_4b.x+_4c.left),y:(_4b.y+_4c.top)};
}else{
return {x:-1,y:-1};
}
};
_CE.rea11=function(_4d){
if(_4d["rectDefined"]){
return {left:_4d.rLeft,top:_4d.rTop,right:_4d.rRight,bottom:_4d.rBottom};
}
if(!_4d.shape){
_4d.shape="rect";
}
var _4e=_4d.coords.split(",");
var _4f;
if(_4d.shape.toLowerCase()=="rectangle"||_4d.shape.toLowerCase()=="rect"){
_4f={left:parseInt(_4e[0]),top:parseInt(_4e[1]),right:parseInt(_4e[2]),bottom:parseInt(_4e[3])};
}
if(_4d.shape.toLowerCase()=="circle"||_4d.shape.toLowerCase()=="circ"){
_4f={left:parseInt(_4e[0])-parseInt(_4e[2]),top:parseInt(_4e[1])-parseInt(_4e[2]),right:parseInt(_4e[0])+parseInt(_4e[2]),bottom:parseInt(_4e[1])+parseInt(_4e[2])};
}
if(_4d.shape.toLowerCase()=="polygon"||_4d.shape.toLowerCase()=="poly"){
var l,t,r,b;
for(var i=0;i<_4e.length;i+=2){
var c=parseInt(_4e[i]);
if(l==undefined||c<l){
l=c;
}
if(r==undefined||c>r){
r=c;
}
}
for(var i=1;i<_4e.length;i+=2){
var c=parseInt(_4e[i]);
if(t==undefined||c<t){
t=c;
}
if(b==undefined||c>b){
b=c;
}
}
_4f={left:l,top:t,right:r,bottom:b};
}
_4d.rectDefined=true;
_4d.rLeft=_4f.left;
_4d.rRight=_4f.right;
_4d.rTop=_4f.top;
_4d.rBottom=_4f.bottom;
return _4f;
};
_CE.sul16=function(_56,_57,_58){
var _59="";
var _5a=(_57=="after")?"nextSibling":"previousSibling";
var _5b=_56[_5a];
var _5c=new RegExp("(br|center)","im");
var _5d=new RegExp("(body|html|script)","im");
var _5e=false;
var _5f=false;
while(_5b){
if(_5b.nodeType==3||_5b.nodeType==8){
if(_5b.nodeType!=8){
_5f=true;
if(_57=="after"){
_59+=_5b.data;
}else{
_59=_5b.data+_59;
}
}
}else{
if(_5b.nodeName.match(_5c)){
if(!_5b.nodeName.match(_5d)){
if(_57=="after"){
_59+=(_5b["outerHTML"]||_5b["ce_outerHTML"]);
}else{
_59=(_5b["outerHTML"]||_5b["ce_outerHTML"])+_59;
}
}
}else{
_5e=true;
break;
}
}
if(!_5e){
_5b=_5b[_5a];
}
}
if(_5b&&!_5b.nodeName.match(_5d)){
if(_57=="after"){
_59+=(_5b["outerHTML"]||_5b["ce_outerHTML"]);
}else{
_59=(_5b["outerHTML"]||_5b["ce_outerHTML"])+_59;
}
}
if(((!_5e&&!_5f)||!_59.match(/[^\s]/m))&&_56.parentNode&&(_56.parentNode["outerHTML"]||_56.parentNode["ce_outerHTML"])&&!_56.parentNode.nodeName.toLowerCase().match(_5d)){
if(_57=="before"){
_59=(_56.parentNode["outerHTML"]||_56.parentNode["ce_outerHTML"]).replace(/[\n\r]/gm,"").replace(/(^.*?>).*/m,"$1")+_59;
}else{
_59+="</"+_56.parentNode.nodeName+">";
}
if(!_58||_56.parentNode.nodeName.toLowerCase().match(_5c)){
if(_57=="before"){
_59=this.sul16(_56.parentNode,_57,true)+_59;
}else{
_59=_59+this.sul16(_56.parentNode,_57);
}
}
}else{
if(_5b){
if(_56.nodeName.toLowerCase().match(_5c)||(!_58&&_5b.nodeName.toLowerCase().match(_5c))){
if(_57=="before"){
_59=this.sul16(_5b,_57,true)+_59;
}else{
_59=_59+this.sul16(_5b,_57,true);
}
}
}
}
return _59;
};
_CE.html_after=function(_60){
return this.sul16(_60,"after");
};
_CE.html_before=function(_61){
return this.sul16(_61,"before");
};
_CE.gee30=function(_62,_63){
if(_63=="OBJECT"||_63=="EMBED"){
if(_CE.isz5){
return _62.getElementsByTagName("embed");
}else{
var _64=new Array();
var _65=_CE.toy7(_62.getElementsByTagName("object")).concat(_CE.toy7(_62.getElementsByTagName("embed")));
for(var i=0;i<_65.length;i++){
if(_65[i].offsetParent){
_64.push(_65[i]);
}
}
return _64;
}
}else{
return _62.getElementsByTagName(_63);
}
};
_CEEL={"focus":".ons7.","mouseover":".onmouseover.","unload":".ond8.","mousemove":".one11.","contextmenu":".onu13.","click":".onk7.","mousedown":".onn11.","mouseup":".onmouseup."};
_CE.Trr7=_CE.Cls5.cre6();
_CE.Trr7.prototype={initialize:function(_67){
this.target=_67;
this.res15();
this.ifr21();
var _68=new Date();
this.start_time=_68.getTime();
},res15:function(){
this.ret14("mousedown");
this.ret14("contextmenu");
this.ret14("mousemove");
this.ret14("unload");
var _69=new Array();
_CE.ads12(_69,this.target.getElementsByTagName("input"));
_CE.ads12(_69,this.target.getElementsByTagName("textarea"));
_CE.ads12(_69,this.target.getElementsByTagName("select"));
for(var i=0;i<_69.length;i++){
_CE.ret13("focus",this.crk21(_69[i]).ce_bind(this),_69[i]);
}
},crk21:function(_6b){
function on_focus_callbk(){
this.ons7(_6b);
}
return on_focus_callbk;
},ges11:function(){
return this.target.getElementsByTagName("iframe");
},she21:function(ifr){
return !(ifr.src);
},ife15:function(_6d){
var _6e=null;
if(_6e=_CE.evt13(_6d)){
this.current_iframe=_6e;
}
},ife17:function(e){
this.current_iframe=null;
},ifr21:function(){
if(!_CE.isSafari){
this.current_iframe=null;
var _70=this.ges11();
for(var i=0;i<_70.length;i++){
if(!this.she21(_70[i])){
_CE.ret13("mouseover",this.ife15.ce_bindAsEventListener(this),_70[i]);
_CE.ret13("mouseout",this.ife17.ce_bindAsEventListener(this),_70[i]);
}
}
}
},ift20:function(){
if(_CE.isi8){
if(this.lastMousePosition){
var _72=this.ges11();
var pos;
var _74;
var _75;
for(var i=0;i<_72.length;i++){
_75=_72[i];
pos=_CE.pos(_75);
if(this.lastMousePosition.x>=pos.x&&this.lastMousePosition.y>=pos.y){
_74=_CE.size(_75);
if(this.lastMousePosition.x<=pos.x+_74.width&&this.lastMousePosition.y<=pos.y+_74.height){
break;
}
}
}
if(i<_72.length&&_75){
var rel=_CE.ren17(pos,_74,this.lastMousePosition.x,this.lastMousePosition.y);
this.rek14(_75,rel,true,"mousedown");
}
}
}else{
if(this.current_iframe){
var _78;
var rel;
var pos=_CE.pos(this.current_iframe);
var _74=_CE.size(this.current_iframe);
if(this.iframe_mouse_pos){
_78=this.iframe_mouse_pos;
if(_CE.is26){
rel={x:_78.x/_74.width,y:_78.y/_74.height};
}else{
_78=this.iframe_mouse_pos;
var _79=0;
var _7a=0;
if(this.target.documentElement&&this.target.documentElement.scrollLeft){
_79=this.target.documentElement.scrollLeft;
}else{
if(this.target.body.scrollLeft){
_79=this.target.body.scrollLeft;
}
}
if(this.target.documentElement&&this.target.documentElement.scrollTop){
_7a=this.target.documentElement.scrollTop;
}else{
if(this.target.body.scrollTop){
_7a=this.target.body.scrollTop;
}
}
_78.y+=_7a;
_78.x+=_79;
rel=_CE.ren17(pos,_74,_78.x,_78.y);
}
}else{
rel={x:0.5,y:0.5};
}
this.rek14(this.current_iframe,rel,true,"mousedown");
}
}
},ret14:function(_7b,_7c){
var _7d=this[_CEEL[_7b].replace(/\./g,"")].ce_bindAsEventListener(this);
_CE.ret13(_7b,_7d,_7c);
},ond8:function(_7e){
this.ift20();
},one11:function(_7f){
this.lastMousePosition={x:_CE.poX8(_7f),y:_CE.poY8(_7f)};
},onu13:function(_80){
var _81;
if(_81=_CE.evt13(_80)){
this.rek14(_81,_CE.cln14(_81,_80),false,"contextmenu");
}
},onk7:function(_82){
var _83=null;
if(_83=_CE.evt13(_82)){
if(_83!=this.last_mouse_down_element){
this.onn11(_82,true);
}
}
},ons7:function(_84){
if(_84&&_84!=this.last_mouse_down_element&&_84!=this.last_focus_element){
this.last_mouse_down_element=null;
this.last_focus_element=_84;
setTimeout(this.onn28.ce_bind(this),500);
}
},onn28:function(){
if(this.last_focus_element){
this.rek14(this.last_focus_element,{x:0.5,y:0.5},false,"focus");
}
},onn11:function(_85,_86){
var _87=null;
if(_87=_CE.evt13(_85)){
this.last_mouse_down_element=_87;
this.last_focus_element=null;
this.rek14(_87,_CE.cln14(_87,_85),(_86||_87.nodeName=="A"||_87.onclick),"mousedown");
setTimeout(function(){
this.last_mouse_down_element=null;
}.ce_bind(this),650);
}
},rek14:function(_88,_89,_8a,_8b){
if(this.ise12(_88)){
var _8c=this.ise7(_88);
if(!_CEU.tdc&&!_8c){
return false;
}
var _8d=_CE.html_before(_88);
var _8e=_CE.html_after(_88);
if(_8d.length>500){
_8d=_8d.substring(0,500);
}
if(_8e.length>500){
_8e=_8e.substring(0,500);
}
var _8f=this.see13({html:(_88["outerHTML"]||_88["ce_outerHTML"]),html_before:_8d,html_after:_8e,time_to_click:this.tik13(),click_x:_89.x,click_y:_89.y,event_type:_8b,live:(_8c?"true":"false")});
var _90=350;
if(_8f.parts.length>1){
_90+=150*(_8f.parts.length-1);
}
if(_8f.parts.length>2){
_90+=100*(_8f.parts.length-2);
}
if(_8f.parts.length>3){
_90+=100*(_8f.parts.length-3);
}
if(_8f.parts.length>4){
_90+=50*(_8f.parts.length-4);
}
if(_8f.parts.length>5){
_90+=50*(_8f.parts.length-5);
}
if(_8c&&_8b!="contextmenu"&&!this.sky10(_88)){
_CE.delay(_90);
}
}
},sky10:function(_91){
if(_91){
if(_91.nodeName=="SELECT"){
return true;
}
}
},tik13:function(){
var _92=new Date();
return _92.getTime()-this.start_time;
},ise12:function(_93){
if(!_93){
return false;
}
if(!(_93["outerHTML"]||_93["ce_outerHTML"])){
return false;
}
if((_93["outerHTML"]||_93["ce_outerHTML"]).length>3000){
return false;
}
var _94=["BODY","OPTION","HTML"];
for(var i=0;i<_94.length;i++){
if(_93.tagName==_94[i]){
return false;
}
}
return true;
},ise7:function(_96){
var _97=["A","IMG","INPUT","SELECT","TEXTAREA","OBJECT","EMBED","IFRAME","BUTTON","AREA"];
var _98=_96.nodeName;
for(var i=0;i<_97.length;i++){
if(_98==_97[i]){
return true;
}
}
if(_96.parentNode&&_96.parentNode.nodeName!="BODY"){
if(this.ise7(_96.parentNode)){
return true;
}
}
return (_96.onclick||_96.onmouseup||_96.onmousedown);
},see13:function(_9a){
return new _CE.Ret7(_CEU.tu,_9a);
}};
_CE.Ret7=_CE.Cls5.cre6();
_CE.Ret7.MAX_LENGTH=1024;
_CE.Ret7.count=0;
_CE.Ret7.prototype={initialize:function(url,_9c){
this.head=document.getElementsByTagName("HEAD")[0];
this.url=url;
this.parameters=_9c;
this.set12();
},apd6:function(src){
var _9e=src;
for(var i=1;i<arguments.length;i++){
var _a0=arguments[i];
if(_a0.substr(0,1)=="&"||_a0.substr(0,1)=="?"){
_a0=_a0.substr(1,_a0.length-1);
}
if(_9e.substr(_9e.length-1,1)!="&"&&_9e.substr(_9e.length-1,1)!="?"){
_9e+=_9e.match(/\?/)?"&":"?";
}
_9e+=_a0;
}
return _9e;
},set12:function(){
this.url_params="";
this.parts=new Array();
var _a1="";
for(var key in this.parameters){
if(_a1.length+key.length+2>_CE.Ret7.MAX_LENGTH){
this.parts.push(_a1);
_a1="";
}
_a1+="&"+key+"=";
var _a3=""+this.parameters[key];
var _a4=0;
while(_a4<_a3.length-1){
var _a5=0;
if(_a1.length<_CE.Ret7.MAX_LENGTH){
_a5=_CE.Ret7.MAX_LENGTH-_a1.length;
if(_a4+_a5>_a3.length){
_a5=_a3.length-_a4;
}
_a1+=encodeURIComponent(_a3.substr(_a4,_a5));
}
_a4+=_a5;
if(_a4<_a3.length-1){
this.parts.push(_a1);
_a1="&"+key+"=";
}
}
}
this.parts.push(_a1);
_CE.Ret7.count+=1;
var rid=_CEU.vi+"-"+_CE.Ret7.count;
var _a7=new Date();
if(this.parts.length==1){
this.crt16(this.apd6(this.url,this.parts[0],"_rt=s","_rid="+rid,"_ts="+_a7.getTime()));
}else{
if(this.parts.length<10){
for(var i=0;i<this.parts.length;i++){
var url=this.apd6(this.url,this.parts[i],"_rt=m","_i="+i,"_l="+this.parts.length,"_rid="+rid,"_ts="+_a7.getTime());
this.crt16(url);
}
}
}
},crt16:function(url){
var _ab=document.createElement("SCRIPT");
_ab.type="text/javascript";
_ab.charset="utf-8";
_ab.src=url;
var _ac=function(){
this.parentNode.removeChild(this);
}.ce_bind(_ab);
_ab.onload=_ac;
_ab.onabort=_ac;
_ab=_CE.ged15().appendChild(_ab);
}};
_CE.URL={noe9:function(url){
url=url.toLowerCase();
if(!url.match(/^http/)){
url="http://"+url;
}
url=url.replace(/^(http\:\/\/.*?)\:(80|443)(.*)/i,"$1$3");
url=url.replace(/#[a-zA-Z0-9_]+?$/,"");
url=url.replace(/#$/,"");
url=url.replace(/\/+$/,"");
url=url.replace(/^(https|http)/,"http");
url=url.replace(/%2D/,"-");
return url;
},stx11:function(url){
return url.replace(/(^.*?\/)(index|default)(\.[^\?]*)/i,"$1");
},sae4:function(_af,_b0){
_af=new String(_af);
_b0=new String(_b0);
var _b1=/^(http\:\/\/)(www\.)(.*)/i;
_af=_af.replace(_b1,"$1$3");
_b0=_b0.replace(_b1,"$1$3");
if(_b0.match(/\?/)&&!_af.match(/\?/)){
_b0=_b0.replace(/\?.*/,"");
}
_af=_CE.URL.stx11(_af);
_b0=_CE.URL.stx11(_b0);
if(_b0.indexOf("?")!=-1&&_af.indexOf("?")!=-1){
var _b2=_af.replace(/^.*\?/,"").split("&");
var _b3=_b0.replace(/^.*\?/,"").split("&");
var _b4=[];
for(var i=0;i<_b2.length;i++){
_b4.push(_b2[i].split("=")[0]);
}
var _b6=[];
for(var i=0;i<_b3.length;i++){
var _b7=_b3[i].split("=")[0];
for(var j=0;j<_b4.length;j++){
if(_b4[j]==_b7){
_b6.push(_b3[i]);
}
}
}
_b3=_b6;
_b0=_b0.replace(/\?.*/,"")+"?"+_b3.join("&");
}
_af=_CE.URL.noe9(_af);
_b0=_CE.URL.noe9(_b0);
return (_af.toLowerCase()==_b0.toLowerCase());
}};
_CE.Lor6=_CE.Cls5.cre6();
_CE.Lor6.prototype={initialize:function(_b9){
this.data=_b9;
this.location=_CE.URL.noe9(document.location.toString());
this.wam12();
},doy9:function(){
if(this.dom_ready_called){
return;
}
this.dom_ready_called=true;
if(this.dom_timer){
clearInterval(this.dom_timer);
}
for(var i=0;i<this.data.length;i++){
var d=this.data[i];
var _bc=d[4];
var url=_CE.URL.noe9(_bc);
if(_CE.URL.sae4(url,this.location)){
var _be=document.createElement("script");
_be.src=_CE.gsu(d)+"&dts="+(new Date()).getTime();
_be.type="text/javascript";
_be.charset="utf-8";
_be=_CE.ged15().appendChild(_be);
return true;
}
}
},wam12:function(){
if(_CE.isz5||_CE.isa7){
var _bf=false;
var _c0=document.getElementsByTagName("script");
for(var i=0;i<_c0.length;i++){
if(_c0[i].src.match(/crazyegg|cetrk/)){
_bf=true;
}
}
if(_bf){
this.doy9();
}else{
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",function(){
this.doy9();
}.ce_bindAsEventListener(this),false);
}
}
}
if(_CE.isE4){
var _c2=document.getElementById("__ce_ie_onload");
if(_c2.readyState=="complete"){
this.doy9();
}else{
_c2.loader=this;
_c2.onreadystatechange=function(){
if(this.readyState=="complete"){
_c2.loader.doy9();
}
};
}
}
if(/KHTML/i.test(navigator.userAgent)){
this.dom_timer=setInterval(function(){
if(/loaded|complete/.test(document.readyState)){
this.doy9();
}
}.ce_bind(this),10);
}
_CE.ret13("load",function(){
this.doy9();
}.ce_bindAsEventListener(this));
}};
if(_CE.isE4){
document.write("<scr"+"ipt id=__ce_ie_onload defer src=''></script>");
}




_CE.gsu = function(d)
{
  var s = document.getElementsByTagName("script");var p = ["crazyegg.com","cetrk.com"];
  for(var i=0;i<s.length;i++){for (var j=0;j<p.length;j++){var x=s[i].src.indexOf(p[j]);if(x==8 || x==7){_CE.u=s[i].src.substring(0,x+p[j].length);}}}
  _CE.u = _CE.u.replace("cetrk", "crazyegg");
  return (_CE.u+"/track/script")+"?i="+d[0]+"&u="+d[1]+"&psid="+d[5]+"&nva=5000&td="+d[8]+"&sid="+d[2]+"&v="+d[3]+"&tip="+d[7]+"&w="+document.body.clientWidth + "&h=" + document.body.clientHeight+"&r="+encodeURIComponent(document.referrer)+"&l="+encodeURIComponent(document.location.toString());
}

new _CE.Lor6([]);
