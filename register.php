<?php


//  Data from register form
    $name = $_POST['nama'];
    $uname = $_POST['username'];
    $pwd = $_POST['password'];
	
	//  Data for accessing database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "user_api";


    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $query = "INSERT INTO user(username, password, name)
                  VALUES('$uname', '$pwd', '$name')";
        $conn->exec($query);
        $cookie_name = "username";
        $cookie_value = $uname;
        setcookie($cookie_name, $cookie_value, time()+ (86400*30), "/");
        
		header("Location: index.php");
		
        die();
    }
    catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

    $conn = null;
?>
