$(document).ready(function() {
	$.getJSON( "js/test.json", function( data ) {
		$.each( data, function( key, val ) {
			$('#list').append(
				'<li>\
							<div id=\"card' + val.id + '\" class="panel">\
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
																						<button id = downVoteButton>\
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
			var voteContainer = $("#card" + val.id).find(".upDownVote");
			
			//var isUp = false;
			//var isDown = false;

			voteContainer.find("#upVoteButton").click(function(evt){
			  var btn = evt.currentTarget; // the clicked button
			  console.log("up:" + evt.currentTarget);
			  
			  /*
			  if(!isUp){
			  val.votes++;
			  isUp = true;
			  }
			  else{
				val.votes--;
				isUp = false;
			  }
			  $("#voteCount").text(val.votes);
			  */
			});

			voteContainer.find("#downVoteButton").click(function(evt){
			  var btn = evt.currentTarget; // the clicked button
			  console.log("down:" + evt.currentTarget);
			  
			  /*
			  if(!isDown){
			  val.votes--;
			  isDown = true;
			  }
			  else{
				val.votes++;
				isDown = false;
			  } 
			  $("#voteCount").text(val.votes);
			  */
			});
		});
	});
	
});
