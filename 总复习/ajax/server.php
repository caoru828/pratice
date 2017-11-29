<?php

	$keyword = $_POST['key'];

	$arr = array(
		array("keyword" => "iphone4", "desc" => "这是iphone4."),
		array("keyword" => "iphone5", "desc" => "这是iphone5."),
		array("keyword" => "iphone6", "desc" => "这是iphone6."),
		array("keyword" => "iphone7", "desc" => "这是iphone7."),
		array("keyword" => "sansung", "desc" => "这是sansung s8.")
	);

	$result = array();

	foreach ($arr as $item) { 
		if( strpos($item['keyword'], $keyword) !== false ){
			array_push($result, $item);
		}
	}

	echo json_encode($result);

?>