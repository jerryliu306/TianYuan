/*;(function(){for(var b=0,c=["webkit","moz"],a=0;a<c.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[c[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[a]+"CancelAnimationFrame"]||window[c[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,c){var e=(new Date).getTime(),g=Math.max(0,16-(e-b)),f=window.setTimeout(function(){a(e+g)},g);b=e+g;return f});window.cancelAnimationFrame||(window.cancelAnimationFrame=
function(a){clearTimeout(a)})})();(function(b){b.snowfall=function(c,a){function x(k,d,f,g,h){this.id=h;this.x=k;this.y=d;this.size=f;this.speed=g;this.step=0;this.stepSize=e(1,10)/100;a.collection&&(this.target=r[e(0,r.length-1)]);k=null;a.image?(k=b(document.createElement("img")),k[0].src=a.image):(k=b(document.createElement("div")),k.css({background:a.flakeColor}));k.attr({"class":"snowfall-flakes",id:"flake-"+this.id}).css({width:this.size,height:this.size,position:a.flakePosition,top:this.y,left:this.x,fontSize:0,zIndex:a.flakeIndex});
b(c).get(0).tagName===b(document).get(0).tagName?(b("body").append(k),c=b("body")):b(c).append(k);this.element=document.getElementById("flake-"+this.id);this.update=function(){this.y+=this.speed;this.y>p-(this.size+6)&&this.reset();this.element.style.top=this.y+"px";this.element.style.left=this.x+"px";this.step+=this.stepSize;this.x=!1===s?this.x+Math.cos(this.step):this.x+(s+Math.cos(this.step));if(a.collection&&this.x>this.target.x&&this.x<this.target.width+this.target.x&&this.y>this.target.y&&
this.y<this.target.height+this.target.y){var b=this.target.element.getContext("2d"),c=this.x-this.target.x,d=this.y-this.target.y,e=this.target.colData;if(void 0!==e[parseInt(c)][parseInt(d+this.speed+this.size)]||d+this.speed+this.size>this.target.height)if(d+this.speed+this.size>this.target.height){for(;d+this.speed+this.size>this.target.height&&0<this.speed;)this.speed*=0.5;b.fillStyle="#fff";void 0==e[parseInt(c)][parseInt(d+this.speed+this.size)]?(e[parseInt(c)][parseInt(d+this.speed+this.size)]=
1,b.fillRect(c,d+this.speed+this.size,this.size,this.size)):(e[parseInt(c)][parseInt(d+this.speed)]=1,b.fillRect(c,d+this.speed,this.size,this.size));this.reset()}else this.speed=1,this.stepSize=0,parseInt(c)+1<this.target.width&&void 0==e[parseInt(c)+1][parseInt(d)+1]?this.x++:0<parseInt(c)-1&&void 0==e[parseInt(c)-1][parseInt(d)+1]?this.x--:(b.fillStyle="#fff",b.fillRect(c,d,this.size,this.size),e[parseInt(c)][parseInt(d)]=1,this.reset())}(this.x>q-l||this.x<l)&&this.reset()};this.reset=function(){this.y=
0;this.x=e(l,q-l);this.stepSize=e(1,10)/100;this.size=e(100*a.minSize,100*a.maxSize)/100;this.speed=e(a.minSpeed,a.maxSpeed)}}function u(){for(d=0;d<g.length;d+=1)g[d].update();v=requestAnimationFrame(function(){u()})}a=b.extend({flakeCount:35,flakeColor:"#ffffff",flakeIndex:999999,minSize:1,maxSize:2,minSpeed:1,maxSpeed:5,round:!1,shadow:!1,collection:!1,collectionHeight:40,deviceorientation:!1},a);var e=function(a,b){return Math.round(a+Math.random()*(b-a))};b(c).data("snowfall",this);var g=[],
f=0,d=0,p=b(c).height(),q=b(c).width(),l=0,v=0;if(!1!==a.collection)if(f=document.createElement("canvas"),f.getContext&&f.getContext("2d"))for(var r=[],f=b(a.collection),n=a.collectionHeight,d=0;d<f.length;d++){var h=f[d].getBoundingClientRect(),m=document.createElement("canvas"),w=[];if(0<h.top-n){document.body.appendChild(m);m.style.position=a.flakePosition;m.height=n;m.width=h.width;m.style.left=h.left+"px";m.style.top=h.top-n+"px";for(var t=0;t<h.width;t++)w[t]=[];r.push({element:m,x:h.left,y:h.top-
n,width:h.width,height:n,colData:w})}}else a.collection=!1;b(c).get(0).tagName===b(document).get(0).tagName&&(l=25);b(window).bind("resize",function(){p=b(c)[0].clientHeight;q=b(c)[0].offsetWidth;});for(d=0;d<a.flakeCount;d+=1)f=g.length,g.push(new x(e(l,q-l),e(0,p),e(100*a.minSize,100*a.maxSize)/100,e(a.minSpeed,a.maxSpeed),f));a.round&&b(".snowfall-flakes").css({"-moz-border-radius":a.maxSize,"-webkit-border-radius":a.maxSize,"border-radius":a.maxSize});a.shadow&&b(".snowfall-flakes").css({"-moz-box-shadow":"1px 1px 1px #555",
"-webkit-box-shadow":"1px 1px 1px #555","box-shadow":"1px 1px 1px #555"});var s=!1;a.deviceorientation&&b(window).bind("deviceorientation",function(a){s=0.1*a.originalEvent.gamma});u();this.clear=function(){b(c).children(".snowfall-flakes").remove();g=[];cancelAnimationFrame(v)}};b.fn.snowfall=function(c){if("object"==typeof c||void 0==c)return this.each(function(a){new b.snowfall(this,c)});if("string"==typeof c)return this.each(function(a){(a=b(this).data("snowfall"))&&a.clear()})}})(jQuery);*/
const NUMBER_OF_LEAVES = 30;
function init(){ var container = document.getElementById('leafContainer');for (var i = 0; i < NUMBER_OF_LEAVES; i++) { container.appendChild(createALeaf());}}
function randomInteger(low, high){ return low + Math.floor(Math.random() * (high - low));}
function randomFloat(low, high){ return low + Math.random() * (high - low);}
function pixelValue(value){ return value + 'px';}
function durationValue(value){ return value + 's';}
function createALeaf(){
    var leafDiv = document.createElement('div');
    var image = document.createElement('img');
    image.src = 'http://apisimsim.duapp.com/index/images/dhimg/money/' + randomInteger(1, 7) + '.png';
    leafDiv.style.top = "-100px";
    leafDiv.style.left = pixelValue(randomInteger(0, 500));
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    leafDiv.style.webkitAnimationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;
    var fadeAndDropDuration = durationValue(randomFloat(5, 11));
    var spinDuration = durationValue(randomFloat(4, 8));
    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
    var leafDelay = durationValue(randomFloat(0, 5));
    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
    image.style.webkitAnimationDuration = spinDuration;
    leafDiv.appendChild(image);
    return leafDiv;
}
window.addEventListener('load', init, false);