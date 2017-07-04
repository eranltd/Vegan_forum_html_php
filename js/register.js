$(document).ready(function(){
				$("#register_btn").click(function(){
				var email = $("#email_register").val();
				var password = $("#password_register").val();

				// Checking for blank fields.
				if( email =='' || password ==''){
				$('input[type="text"],input[type="password"]').css("border","2px solid red");
				$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
				alert("Please fill all fields...!!!!!!");
				}
				else {
				$.post("../register.php",{ email1: email, password1:password},
				function(data) {
				if(data=='Invalid Email.......') {
				$('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
				$('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
				alert(data);
				}
				else if(data=='Failed'){
				$('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
				alert('Failed Register new user');
				} 
				else if(data == 'Registered Successfully'){
					alert(data);

				$("div").find("#registerBtn").remove();
				$("div").find("#loginBtn").remove();
				$("div").find("#forumBtn").show();
				//show the hidden forum
				$( "#forum" ).show();
				$( "#login_container" ).remove();
				$( "#register" ).remove();
$("#BtnDirect").attr("href", "#forum");
				}
			});
		}
	});

$("div").find("#registerBtn").click(function(){
	$("div").find("#loginBtn").hide();
	$( "#login_container" ).hide();


});
});