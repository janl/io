function(doc, req) {
  if(!doc) {
    return "Hey there, this is <a href=\"http://twitter.com/janl\">@janl's</a> personal URL shortener. Make your own with <a href=\"http://github.com/janl/io\">io</a>."
  }

  return {
    code: 302,
    headers: {"Location": doc.target},
    body: "If you don't get redirected, please go to " + doc.target + "\n"
  };
}
