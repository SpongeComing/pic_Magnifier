  var aImg = document.querySelectorAll('img');
  var aDiv = document.querySelectorAll('div');
  var oP = document.querySelector('p');
  var scaleX = parseInt(getStyle(aImg[0],'width'))/parseInt(getStyle(aImg[1],'width'))
  var scaleY = parseInt(getStyle(aImg[0],'height'))/parseInt(getStyle(aImg[1],'height'))

  aImg[0].onmouseover  =function () {

    oP.style.display = 'block';
    aDiv[1].style.display = 'block';

    oP.style.width = parseInt(getStyle(aImg[0],'width')) * scaleX +'px';
    oP.style.height = parseInt(getStyle(aImg[0],'height')) * scaleY +'px';

  };

  aDiv[0].onmousemove = function (ev) {

    oP.style.display = 'block';
    aDiv[1].style.display = 'block';

    var ev = ev || event;

    var L = ev.clientX - aDiv[0].offsetLeft - oP.offsetWidth/2;
    var T = ev.clientY - aDiv[0].offsetTop - oP.offsetHeight/2;

    if (L<0) {
      L = 0;
    }else if (L>aDiv[0].offsetWidth - oP.offsetWidth-2) {
      L = aDiv[0].offsetWidth - oP.offsetWidth-2;
    }

    if (T<0) {
      T = 0;
    }else if (T>aDiv[0].offsetHeight - oP.offsetHeight-2) {
     T = aDiv[0].offsetHeight - oP.offsetHeight-2;
   }
   oP.style.left = L +'px';
   oP.style.top = T +'px';

   aImg[1].style.left = -L/scaleX + 'px';
   aImg[1].style.top = -T/scaleY + 'px';
 };

 aDiv[0].onmouseout = function () {

  oP.style.display = 'none';
  aDiv[1].style.display = 'none';

}

function getStyle( obj,attr){
  if ( getComputedStyle ) {

    return getComputedStyle( obj ,false)[ attr ];
  }else{
    return obj.currentStyle[ attr ];
  }
}
