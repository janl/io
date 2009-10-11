function(doc, req) {
  if(doc) {
    return [null, "You can't edit shorts"];
  }
  var doc = {};
  doc.target = req.query.target;

  var shortio = function() {
    function generateSecret(length) {
      var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var secret = '';
      for (var i=0; i<length; i++) {
        secret += tab.charAt(Math.floor(Math.random() * 64));
      }
      return secret;
    }
    return generateSecret(4);
  }

  var shortened = shortio();
  doc._id = shortened;
  return [doc, "Shortened to " + shortened + "\n"];
}
