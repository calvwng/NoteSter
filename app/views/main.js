$(document).ready(function() {
	$.getJSON( "test.json", function( data ) {
		$.each( data, function( key, val ) {
			$('#list').append(
				'<li>\
							<div class="panel">\
													<div class="panel-heading">\
																<div id="headerText" class="pull-left">\
																			<h3 class="title">' + val.title + '</h3>\
																			<h6><a href="#" class="authorName">' + val.author + '</a></h6>\
																</div>\
																<div class="upDownVote pull-right">\
																						<div id = "voteCount" class = "tally ">' + val.votes + '</div>\
																						<a id = "upVoteButton" href = "#">' +
																									'<span class = "glyphicon glyphicon-thumbs-up thumb upDownVote" aria-hidden="true"> </span>\
																						</a>\
																						<a id = "downVoteButton" href = "#">\
																									<span class = "glyphicon glyphicon-thumbs-down thumb upDownVote" aria-hidden="true"></span>\
																						</a>\
																</div>\
													</div>\
													<div class="panel-body">\
																<p class = "col-sm-10 desc pull-left">'+ val.description.slice(0,255) +'...<a href="#" class = "">Read More</a></p>\
													</div>\
							</div>\
				</li>'
			);
			// $('#list').append(
			// '<li>' +
			//     '<h2><a id = "resourceTitle" href = # class = "title pull-left col-lg-12">' + val.title +'</a></h2><br>' +
			//     '<h3><a href="#" class = "authorName pull-left col-lg-12">'+val.author+'</a></h3>'+
			// 				'<div class = "upDownVote col-md-2 pull-right">' +
			//           '<div id = "voteCount" class = "tally ">' + val.votes + '</div>' +
			//           '<a id = "upVoteButton" href = "#">' +
			//              '<span class = "glyphicon glyphicon-thumbs-up thumb upDownVote" aria-hidden="true"> </span>'+
			// 		        '</a>' +
			//           '<a id = "downVoteButton" href = "#">' +
			//              '<span class = "glyphicon glyphicon-thumbs-down thumb upDownVote" aria-hidden="true"></span>' +
			//           '</a>' +
			//     '</div>' +
			//     '<p class = "col-sm-10 desc pull-left">'+val.description.slice(0,255)+'...<a href="#" class = "">Read More</a></p>' +
			// '</li>');
		});
	});
});
