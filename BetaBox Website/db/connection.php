<?php
	$dbhost = "104.131.132.179";
	$dbuser = "root";
	$dbpass = "Betab0x";
	$db = "Betabox";
	
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	
	mysql_select_db($db);
?>