<?php
//connecting to the db
// Establishing connection with server..

  $connection = new mysqli(
    "localhost",
    "id1120034_eranltd",
    "inferan303",
    "id1120034_exercise4");
  
  // check connection 
  if ($connection->connect_error) {
    die("Connect failed: ".$connection->connect_error);
  }
  /***************************/

	//we'll create a user /retrieve user with post/get	
	$method = $_SERVER["REQUEST_METHOD"];

	if($method == "GET"){ 
		}

	
	else if($method == "POST"){ //get login information
		$email=$_POST['email1']; // Fetching Values from URL.
                $password= sha1($_POST['password1']); //Password Encryption

                // check if e-mail address syntax is valid or not
                $email = filter_var($email, FILTER_SANITIZE_EMAIL); // sanitizing email(Remove unexpected 
                //symbol like <,>,?,#,!, etc.)
             if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
             echo "Invalid Email.......";
             }else{
      // Matching user input email and password with stored email and password in database.      
      
       
     //$result = $connection->query("SELECT * FROM Users");
    $result = $connection->query("SELECT * FROM Users WHERE username='$email' AND password='$password'");

      $data = $result->num_rows;

     // printf("Checking..Username:%s\n Password:%s.\n", $email ,$password);
     // printf("Result set has %d rows.\n", $data);

      if($data > 0){ 
      echo "Successfully Logged in...";

      }else{
      echo "Email or Password is wrong...!!!!";
                  }
                }
              }
  $connection->close();
 //Connection Closed.
?>