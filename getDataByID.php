<?php 

	$conn = mysql_connect("localhost","root","");
	$db = mysql_select_db("lifecare",$conn);

	$id=json_decode($_GET['id']);
	$arr = [];

	$query = mysql_query("select * from donation_form where id = ".$id."");
	while($row = mysql_fetch_assoc($query)){ 
		array_push($arr,$row);
	}
	
	echo json_encode($arr);

?>