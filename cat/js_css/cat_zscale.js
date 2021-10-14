//
//    cat_zscale.js
//


// ________Z-scaling__________________________

let cat_zscale = 1.000;
let cat_size = 150;
let cat_px = '150px'

function ZScale() {

  cat_zscale = (Text2Num(cat.style.top)) / win_height;
  log(cat_zscale);

  cat_width = 1200; //Math.round(cat_zscale * 1200);
  
  cat_height = Math.round(cat_zscale * 150);

  log(cat_width);

  log(cat_height);

  cat.style.width = cat_width; //cat_height;
  cat.style.height = cat_height;


  cat_height_px = cat_height + 'px';
  cat_width_px = cat_width + 'px';

  cat.style.backgroundSize = cat_width_px + ', ' + cat_height_px;
  log(cat.style.backgroundSize);
//  log(cat.style.backgroundSize);

}


//  cat.style.backgroundSize = '300px';
