<?php


//  Data from register form
    $name = $_POST['nama'];
    $uname = $_POST['username'];
    $pwd = $_POST['password'];
	
	//  Data for accessing database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "progif";


    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $query = "INSERT INTO user_api(nama,username, password)
                  VALUES('$name', '$uname', '$pwd')";
        $conn->exec($query);
        $cookie_name = "username";
        $cookie_value = $uname;
        setcookie($cookie_name, $cookie_value, time()+ (86400*30), "/");
        
		header("Location: login.html");
		
        die();
    }
    catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

    $conn = null;
?>
