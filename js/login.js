$(document).ready(function(){
$( "#forum" ).hide();
$("div").find("#forumBtn").hide();

		$("#login").click(function(){

		var email = $("#email").val();
		var password = $("#password").val();
		// Checking for blank fields.
		if( email =='' || password ==''){
		$('input[type="text"],input[type="password"]').css("border","2px solid red");
		$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
		alert("Please fill all fields...!!!!!!");
		}
		else {
		$.post("../loginC.php",{ email1: email, password1:password},
		function(data) {
		if(data=='Invalid Email.......') {
		$('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
		$('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
		alert(data);
		}
		else if(data=='Email or Password is wrong...!!!!'){
		$('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
		alert(data);
		} 
	else if(data == 'Successfully Logged in...'){
			$("form")[0].reset();
			$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
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
	else{
		alert(data);
		}
		});
		}
	});
});