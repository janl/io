function(doc, req) {
  // !json templates.index
  // !code vendor/mustache.js/mustache.js
  //!code vendor/date/date.js

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
  return [doc, templates.index.head + "http://localhost:5984/io/_design/io/_show/long/" + shortened + templates.index.tail];
}
