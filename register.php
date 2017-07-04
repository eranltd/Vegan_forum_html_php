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

  if($method == "POST"){ 

    $email=$_POST['email1']; // Fetching Values from URL.
    $password= sha1($_POST['password1']); //Password Encryption

    // check if e-mail address syntax is valid or not
    $email = filter_var($email, FILTER_SANITIZE_EMAIL); // sanitizing email(Remove unexpected 
    //symbol like <,>,?,#,!, etc.)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
             echo "Invalid Email.......";
             }

      else{
      // Registering in DB      
     
      
mysqli_query($connection, 
				"INSERT INTO Users (`username`, `password`, `isManager`)
SELECT * FROM (SELECT '$email', '$password', '0') AS tmp
WHERE NOT EXISTS (
    SELECT username FROM Users WHERE username = '$email'
) LIMIT 1;
 ")
				or die(mysqli_error($connection));
		echo "Registered Successfully";




      }
    }

              
  $connection->close();
 //Connection Closed.
?>