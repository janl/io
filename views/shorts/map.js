function(doc) {
  if(!doc.target) { return; }
  
  emit(doc._id, doc.target);
}
