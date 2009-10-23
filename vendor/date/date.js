function f(n) {    // Format integers to have at least two digits.
    return n < 10 ? '0' + n : n;
}

Date.prototype.rfc3339 = function() {
    return this.getUTCFullYear()   + '-' +
         f(this.getUTCMonth() + 1) + '-' +
         f(this.getUTCDate())      + 'T' +
         f(this.getUTCHours())     + ':' +
         f(this.getUTCMinutes())   + ':' +
         f(this.getUTCSeconds())   + 'Z';
};

// This is a format that collates in order and tends to work with
// JavaScript's new Date(string) date parsing capabilities, unlike rfc3339.
Date.prototype.toJSON = function() {
    return this.getUTCFullYear()   + '/' +
         f(this.getUTCMonth() + 1) + '/' +
         f(this.getUTCDate())      + ' ' +
         f(this.getUTCHours())     + ':' +
         f(this.getUTCMinutes())   + ':' +
         f(this.getUTCSeconds())   + ' +0000';
};

// from http://blog.dansnetwork.com/2008/11/01/javascript-iso8601rfc3339-date-parser/
Date.prototype.setISO8601 = function(dString) {

  var regexp = /(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)(:)?(\d\d)(\.\d+)?(Z|([+-])(\d\d)(:)?(\d\d))/;

  if (dString.toString().match(new RegExp(regexp))) {
    var d = dString.match(new RegExp(regexp));
    var offset = 0;

    this.setUTCDate(1);
    this.setUTCFullYear(parseInt(d[1],10));
    this.setUTCMonth(parseInt(d[3],10) - 1);
    this.setUTCDate(parseInt(d[5],10));
    this.setUTCHours(parseInt(d[7],10));
    this.setUTCMinutes(parseInt(d[9],10));
    this.setUTCSeconds(parseInt(d[11],10));
    if (d[12])
    this.setUTCMilliseconds(parseFloat(d[12]) * 1000);
    else
    this.setUTCMilliseconds(0);
    if (d[13] != 'Z') {
      offset = (d[15] * 60) + parseInt(d[17],10);
      offset *= ((d[14] == '-') ? -1 : 1);
      this.setTime(this.getTime() - offset * 60 * 1000);
    }
  }
  else {
    this.setTime(Date.parse(dString));
  }
  return this;
};

Date.prototype.setRFC3339 = Date.prototype.setISO8601;
