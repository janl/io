function(doc, req) {
  //!json templates
  if(!doc && !req.id) {
    return {
      code: 200,
      body: templates.head + templates.form + templates.foot
    }
  }

  var source;
  if(doc) {
    source = doc._id;
  } else if(req.id) {
    source = req.id;
  }

  var sane_source = source.replace(/[\,\.\)]$/, "");

  if(source != sane_source) {
    // redirect to real short
    return {
      code: 302,
      headers: {"Location": "http://jan.io/" + sane_source},
      body: "If you don't get redirected, please go to http://jan.io/" + sane_source + "\n"
    };
  }

  return {
    code: 302,
    headers: {"Location": doc.target},
    body: "If you don't get redirected, please go to " + doc.target + "\n"
  };
}
