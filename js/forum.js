$(document).ready(function(){	
				$("#save").click(function(){
					var d = { name: $("#name_forum").val(),
					message: $("#message_forum").val()};
					$.ajax({
						url: "../forum.php",
						type: "post",
						data: d,
						dataType: "text",
						success: function(data){
							refreshMessages();
						},
						error: function(err){
							console.log(err);
						}
					});
				});
				
				function refreshMessages(){
					$("#messages").empty();
					$("#messages").append("<li class='list-group-item'>Loading...</li>");
					$.ajax({
						url: "../forum.php",
						type: "get",
						success: function(data){
//console.log(data);
							$("#messages").empty();
							for(i=0;i<data.length;i++){
								let li = "<li class='list-group-item' id='message_row'>" + 
									data[i].Subject + ": " + data[i].Message + 
									"</li>";
								$("#messages").append(li);
							}
						},
						error: function(err){
							console.log(err);
						}
					});
				}
				refreshMessages();
	
				$("#refresh_msg").click(function(){
					refreshMessages();
				});
			});