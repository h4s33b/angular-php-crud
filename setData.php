<?php 

	$conn = mysql_connect("localhost","root","");
	$db = mysql_select_db("lifecare",$conn);

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$name = $request->name;
	$email = $request->email;
	$amount = $request->amount;
	$phone = $request->phone;

	/*$arr = [];*/

	$query = mysql_query("Insert into donation_form(name,email,amount,phone) VALUES ('".$name."','".$email."',".$amount.",".$phone.")");
	if($query){
		echo json_encode(["response"=>"done"]);
	}else{
		echo json_encode(["response"=>"Error Occurred"]);
	}

?>