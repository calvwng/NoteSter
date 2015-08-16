$(document).ready(function() {
	$.getJSON( "test.json", function( data ) {
		$.each( data, function( key, val ) {
			$('#list').append(
				'<li>\
							<div id = "card'+val.id+'" class="panel">\
													<div class="panel-heading">\
																<div id="headerText" class="pull-left">\
																			<h3 class="title">' + val.title + '</h3>\
																			<h6><a href="#" class="authorName">' + val.author + '</a></h6>\
																</div>\
																<div class="upDownVote pull-right">\
																						<div id = "voteCount" class = "tally ">' + val.votes + '</div>\
																						<button id = "upVoteButton">' +
																									'<span class = "glyphicon glyphicon-thumbs-up thumb upDownVote" aria-hidden="true"> </span>\
																						</button>\
																						<button id = upButton>\
																						<span class = "glyphicon glyphicon-thumbs-down thumb upDownVote" aria-hidden="true"></span>\
																						</button>\
																</div>\
													</div>\
													<div class="panel-body">\
																<p class = "col-sm-10 desc pull-left">'+ val.description.slice(0,255) +'...<a href="/cards/#{'+val.id+'}" class = "">Read More</a></p>\
													</div>\
							</div>\
				</li>'
			);
			//begin event handler
			$("#card" + val.id).find("voteCount")
		});
	});
	
});
