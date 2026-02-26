<?php
	function getStudents() {
		# Get established connection
		global $connection; 

		$sql = "SELECT * FROM students;";
		$students = $connection->query($sql) or die ($con->error);
		return $students;
	}

	function getStudentByID($studentId) {
		$sql = "SELECT * FROM students WHERE StudentID=$studentId;";
		$students = $connection->query($sql) or die ($con->error);
		return $students->fetch_assoc();
	}
?>