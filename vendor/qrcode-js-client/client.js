function make_qr_code(url) {
  var qr = new QRCode(4, QRErrorCorrectLevel.H);
  qr.addData(url);
  qr.make();
  var f = 5;

  var width = qr.getModuleCount();
  var text = '';
  text += '<html><head><style type="text/css">.qr-b { width:'+f+'px; height:'+f+'px; float:left; background-color:#000}</style>';
  text += '<style type="text/css">.qr-w { width:'+f+'px; height:'+f+'px; float:left; background-color:#FFF}</style></head><body>';
  text += '<div style="width:' + (width * f) + 'px;height:' + (width * f) + 'px;">';
  for (var r = 0; r < width; r++) {
      // var margin = 'style="margin-top:' + (r*f) + 'px"';
      var margin = '';
      for (var c = 0; c < width; c++) {
          if (qr.isDark(r, c) ) {
            text += '<div class="qr-b"> </div>';
          } else {
            text += '<div class="qr-w"> </div>';
          }
      }
  }
  text += '</div></body></html>';

  return text;
}

// node.js
// var sys = require("sys");
// sys.puts(text);
// 
// setTimeout(function() {
//   sys.puts("done");
// }, 2000);
