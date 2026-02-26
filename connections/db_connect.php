<?php
    $hostname = "localhost";
	$username = "root";
	$password = "";
	$database = "db_school";
	$connection = new mysqli($hostname, $username, $password, $database);

	if ($connection->connect_error) {
		echo $connection->connect_error;
	} else {
		// echo "connection suvvessful!";
	}
?>