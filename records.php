<?php 
	require './connections/db_connect.php';
	require './connections/db.php';
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>View Student Records</title>
	<link rel="stylesheet" type="text/css" href="./defaults.css">
	<link rel="stylesheet" type="text/css" href="./theme.css">

	<style>
		#students {
			background-color: lightblue;
			margin: auto;
			font-size: 1rem;
			font-family: monospace;
		}
		#students caption {
			font-size: 1.2em;
			margin-bottom: 1.2rem;
		}
		#students tbody tr:nth-child(odd) {
			background-color: skyblue;
		}
		#students th,
		#students td {
			padding: 10px;
		}
	</style>
</head>
<body>
	<h1 class="title">STUDENT MANAGEMENT SYSTEM</h1>
	<table id="students">
		<caption>View Student Records</caption>
		<thead>
			<tr>
				<th>Student ID</th>
				<th>First Name</th>
				<th>Middle Initial</th>
				<th>Last Name</th>
				<th>Age</th>
			</tr>
		</thead>
		<tbody>
			<?php
				$students = getStudents(); 
				while ($student = $students->fetch_assoc()) {
			?>
			<tr>
				<td><?php echo $student["StudentID"]; ?></td>
				<td><?php echo $student["FirstName"]; ?></td>
				<td><?php echo $student["MiddleInitial"]; ?></td>
				<td><?php echo $student["LastName"]; ?></td>
				<td><?php echo $student["Age"]; ?></td>
			</tr>
			<?php 
				}
			?>
		</tbody>
	</table>
</body>
</html>