<?php 

	$conn = mysql_connect("localhost","root","");
	$db = mysql_select_db("lifecare",$conn);

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	echo $request->name;
	$name = $request->name;
	$email = $request->email;
	$amount = $request->amount;
	$phone = $request->phone;

	/*$arr = [];*/

	$query = mysql_query("Insert into donation_form(name,email,amount,phone) VALUES ()");
	while($row = mysql_fetch_assoc($query)){ 
		array_push($arr,$row);
	}
	
	echo json_encode($arr);

?>