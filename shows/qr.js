function(doc, req) {
  if(!doc) {
    return "Hey there, this is <a href=\"http://twitter.com/janl\">@janl's</a> personal URL shortener. Make your own with <a href=\"http://github.com/janl/io\">io</a>."
  }

  return doc.qr;
}
