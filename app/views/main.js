$(document).ready(function() {     
				$.getJSON( "test.json", function( data ) {
					$.each( data, function( key, val ) {
						$('#list').append(
						'<li><h2><a id = "resourceTitle" href = '+' class = "title pull-left col-lg-12">' + val.title +'</a></h2><br><h3><a href="#" class = "authorName pull-left col-lg-12">'+val.author+'</a></h3>'+
						'<div class = "upDownVote col-md-2 pull-right"><div id = "voteCount" class = "tally ">' + val.votes +
						'</div><a id = "upVoteButton" href = "#"><span class = "glyphicon glyphicon-thumbs-up thumb upDownVote" aria-hidden="true"> </span>'+
					'</a><a id = "downVoteButton" href = "#"><span class = "glyphicon glyphicon-thumbs-down thumb upDownVote" aria-hidden="true"></span></a>'
					+ '</div>'+ '<p class = "col-sm-10 desc pull-left">'+val.description.slice(0,255)+'...<a href="#" class = "">Read More</a></p>' +
					'</li>');
					});
				});
			});
			
