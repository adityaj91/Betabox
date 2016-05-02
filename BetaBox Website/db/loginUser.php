<?php 

header("Access-Control-Allow-Origin: *");
// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

require_once './connection.php'; // The mysql database connection script
/*if(isset($_POST['username']) && isset($_POST['password']) ){
$username = $_POST['username'];
$password =  $_POST['password'];*/

$request=json_decode(file_get_contents("php://input"));
$username=mysql_real_escape_string($request->username);
$password=mysql_real_escape_string($request->password);

$query = "SELECT COUNT(userID) FROM MOCK_USERS WHERE userID = '$username' AND password = '$password'  LIMIT 0, 1;";
//SELECT * STRCMP() FROM MOCK_USERS WHERE userID = 'hrice1' AND password = 'm7N12mA';
//SELECT userID, password FROM MOCK_USERS WHERE userID = 'hrice1' AND password = 'm7N12mA';

// $result = $mysqli->query($query) or die($mysqli->error.__LINE__);
 
// $result = $mysqli->affected_rows;



$query="insert into user(`nom`,`prenom`,`email`,`adresse`) values($nom,$prenom,$email,$adresse)";
$queryRes=mysql_query($query);
if($queryRes) echo "1";
else echo "2";

$myQuery = mysql_query($query, $conn);
if($myQuery == FALSE){
    //$result['success'] = false;
    echo "false"
}

$numrows = mysql_num_rows($myQuery);

if($numrows == 1) {
    //$result['success'] = true;
    echo "true"
    //exit();
} else {
    //$result['success'] = false;
    echo "false"
}
 
//echo $json_response = json_encode($result);
}

?>

    

