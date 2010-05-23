function(doc) {
  if(!doc.target) { return; }
  if(!doc.date) {
    doc.date = 0;
  }
  emit(doc.date, doc.target);
}
