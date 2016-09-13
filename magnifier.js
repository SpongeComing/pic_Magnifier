var aImg = document.querySelectorAll('img');
var aDiv = document.querySelectorAll('div');
var oP = document.querySelector('p');
var scale = parseInt(getStyle(aImg[0],'width'))/parseInt(getStyle(aImg[1],'width'))


aImg[0].onmouseover = function (ev) {

  var ev = ev || event;

  var disX = ev.clientX - aDiv[0].offsetLeft - 1;
  var disY = ev.clientY - aDiv[0].offsetTop -1;

  magnifier (disX,disY);

oP.onmousemove = function (ev) {

  var ev = ev || event;

  var l = ev.clientX - aDiv[0].offsetLeft -1;
  var t = ev.clientY - aDiv[0].offsetTop -1;

  magnifier(l,t);
}

};

aDiv[0].onmouseout = function  () {
  oP.style.display = 'none';
  aDiv[1].style.display = 'none';
 };

function getStyle( obj,attr){
  if ( getComputedStyle ) {

    return getComputedStyle( obj ,false)[ attr ];
  }else{
    return obj.currentStyle[ attr ];
  }
}

function magnifier (x,y) {

  var dWidth = aDiv[0].clientWidth;
  var dHeight = aDiv[0].clientHeight;//大图宽高

  oP.style.width = dWidth * scale + 'px';
  oP.style.height = dHeight * scale+'px';

   var iWidth = parseInt(getStyle( oP,'width'));
  var iHeight = parseInt(getStyle( oP,'height'));//放大镜宽高

  if (x < iWidth/2){

    oP.style.left = '0px';
    aImg[1].style.left = '0px';

  }else if (x > dWidth- iWidth/2){

    oP.style.left = (dWidth - iWidth) + 'px';
    aImg[1].style.left = -(dWidth - iWidth)/scale + 'px';

  }else {

    oP.style.left = (x - iWidth/2) + 'px';
    aImg[1].style.left = -(x - iWidth/2)/scale + 'px';
  }


  if (y < iHeight/2) {

    oP.style.top = '0px';
    aImg[1].style.top = '0px';
  }else if ( y > dHeight - iHeight/2 ){

    oP.style.top = (dHeight - iHeight) + 'px';
    aImg[1].style.top = -(dHeight - iHeight)/scale + 'px';

  }else {

    oP.style.top = (y - iHeight/2) + 'px';
    aImg[1].style.top = -(y - iHeight/2)/scale + 'px';
  }

  oP.style.display = 'block';
  aDiv[1].style.display = 'block';

}

