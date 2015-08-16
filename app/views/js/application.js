$(document).ready(function() {     
  $.getJSON( "js/quote.json", function( data ) {
	$.each( data, function( key, val ) {
		$('#noteInfoList').append("<li>" + val.title + "</li>" );
	});
  });
});
  
  