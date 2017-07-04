<?php
	header('Content-Type: application/json');
	
	/***************************/
	//this part will be the same on all our server files

	//connecting to the db
	$mysqli = new mysqli(
		"localhost",
    	"id1120034_eranltd",
    	"inferan303",
    	"id1120034_exercise4");
	
	// check connection 
	if ($mysqli->connect_error) {
		die("Connect failed: ".$mysqli->connect_error);
	}
	/***************************/
	
	
	
	/***************************/
	//for each object, we'll create a save/retrieve function with post/get	
	
	$method = $_SERVER["REQUEST_METHOD"];
	if($method == "GET"){ //select
		$arr = array();
		if ($select = $mysqli->query("SELECT * FROM Forum")) {
			while($row = $select->fetch_assoc()) {
				$arr[] = $row;
			}
			echo json_encode($arr);
		}
	} 
	else if($method == "POST"){ //insert
		$name = $_POST["name"];
		$message = $_POST["message"];
		mysqli_query($mysqli, 
				"INSERT INTO Forum VALUES('$name', '$message',NULL)")
				or die(mysqli_error($mysqli));
		echo "ok";
	}
	
	/***************************/
	$mysqli->close();
?>
