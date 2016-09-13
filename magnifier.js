function magnifier (x,y) {

  var dWidth = aDiv[0].clientWidth;
  var dHeight = aDiv[0].clientHeight;//大图宽高

  oP.style.width = dWidth * scale + 'px';
  oP.style.height = dHeight * scale+'px';

}