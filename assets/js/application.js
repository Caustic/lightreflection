var sizeTables = function () {
  var tables = $('.data div#table-ids').attr('data-tableids');
  if ( tables !== undefined ) {
    tables = tables.split(/\s+/);
    for (i in tables) {
      addTable(tables[i]);
    }
  } else {
    addTable('gallery');
  }
}

var addTable = function (dest) {
  var width = $( '.row.' + dest ).width();
  $( '.row.' + dest ).remove();
  var col = Math.floor(width / 225);
  col = col === 0 ? 1 : col;
  $( '.col.' + dest ).width(100 / col + "%").each(function (index) {
    if (index % col === 0) {
      $( '#' + dest ).append('<div class="row ' + dest + '"></div>');
    }
    $( '.row.' + dest ).last().append(this.cloneNode(true));
  });
};

$(document).ready( function () {
  sizeTables()
  $(window).resize(sizeTables);
});
