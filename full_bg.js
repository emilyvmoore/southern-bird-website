var bgimg;
var init = function() {
  if (arguments.callee.done) return;
  arguments.callee.done = true;
  bgimg = document.getElementById('bg').getElementsByTagName('img')[0];
  if (!bgimg) return;
  bgimg.onload = resizeBg;
  bgimg.src = 'southern_bird.jpg';
  if (window.addEventListener) window.addEventListener('resize', resizeBg, false);
  else if (window.attachEvent) window.attachEvent('onresize', resizeBg);
  else window.onresize = resizeBg;
}
var resizeBg = function() {
  var w = self.innerWidth || document.documentElement.clientWidth;
  var h = self.innerHeight || document.documentElement.clientHeight;
  if (bgimg.width !== w) {
    bgimg.parentNode.style.left = '0';
    bgimg.parentNode.style.top = '0';
    bgimg.height = bgimg.parentNode.height = (w / bgimg.width) * bgimg.height;
    bgimg.width = bgimg.parentNode.width = w;
  }
  if (bgimg.height < h) {
    bgimg.width = bgimg.parentNode.width = (h / bgimg.height) * bgimg.width;
    bgimg.height = bgimg.parentNode.height = h;
    bgimg.parentNode.style.left = '-' + ((bgimg.width - w) / 2) + 'px';
  }
  else if (bgimg.height > h) {
    bgimg.parentNode.style.top = '-' + ((bgimg.height - h) / 2) + 'px';
  }
}

if (document.addEventListener) document.addEventListener("DOMContentLoaded", init, false);

/*@cc_on @*/
/*@if (@_win32 || @_win64)
  document.write('<script id="ie_onload" defer src="javascript:void(0);"></script>');
  document.getElementById('ie_onload').onreadystatechange = checkState;
  function checkState() {
    if (this.readyState && this.readyState != 'complete') return;
    else init();
  }
    
/*@end @*/

if (/KHTML|Webkit|iCab/i.test(navigator.userAgent)) {
	var khtmltimer = window.setInterval(function() {
		if (/loaded|complete/.test(document.readyState)) {
  		window.clearInterval(khtmltimer);
  		init();
		}
	}, 10);
}