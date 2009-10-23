function(head, req) {
  // !json templates.stats
  // !code vendor/mustache.js/mustache.js

  provides("html", function() {
    send(templates.stats.head);
    var row;
    while(row = getRow()) {
      send(Mustache.to_html(templates.stats.row, {
        target: row.value,
        date: row.key,
        id: row.id
      }));
    }
    send(templates.stats.tail);
  });
}
