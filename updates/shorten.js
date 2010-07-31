function(doc, req) {
  // !code vendor/date/date.js

  if(doc) {
    return [null, "You can't edit shorts"];
  }
  var doc = {};
  doc.target = req.query.target || req.form.target;

  var shortio = function() {
    /* Borrowed from Jason Davies */
    function generateSecret(length) {
      var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var secret = '';
      for (var i=0; i<length; i++) {
        secret += tab.charAt(Math.floor(Math.random() * tab.length));
      }
      return secret;
    }
    return generateSecret(4);
  }

  var shortened = shortio();
  doc._id = shortened;
  doc.date = (new Date()).rfc3339();
  var shortlink = req.headers.Referer + shortened;
  return [doc, "<a href=\"" + shortlink +"\">" + shortlink + "</a>"];
}
