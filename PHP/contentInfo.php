<?php
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = ""; // Default XAMPP password
$dbname = "userinfo"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$value = null;
if($_SERVER["REQUEST_METHOD"] === "POST") {
    $value = $_POST['value'];
    $login = $_POST['login'];
    $userType = $_POST['userType'];
    $username = $_POST['username'];
}
$tableName = "Symptomsreport_" . $username;

if(!$login) {
    switch($value) {
        case '0': {  // HomePage Details
           
            $sql = "SELECT notice FROM notices LIMIT 1";
            $result = $conn->query($sql);
    
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                echo $row['notice'];
            } else {
                echo "No notice found.";
            }
           break;
        }
        case '1': {   // Notice Details
    
            break;
        }
        case '2': { // About Details
            break;
        }
        case '3': { // Case Registered Details
            $sql = "SELECT * FROM Diseases LIMIT 2";
            $result = $conn->query($sql);
            $disease = "";
            $count = "";
            while($row = $result->fetch_assoc()) {
                $disease = $disease. '-' . $row["name"];
                $count = $count. '-' .$row["count"];
            }
            echo $disease."+".$count;
    
            
           break;
        }
    
        case '4': { // Gallery Details
            break;
        }
        case '5': { // About Us Details
            break;
        }
        case '6': { // Partners Details
            break;
        }
        case '7': { //Contact Us Details
            break;
        }
    }
}


if($login) {
    if($userType == "users") {
         
        switch($value) {
            case '0': {
                
            $sql = "SELECT notice FROM notices LIMIT 1";
            $result = $conn->query($sql);
    
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                echo $row['notice'];
            } else {
                echo "No notice found.";
            }
           break;
            }

            case "1": {
              
                $patientName = $_POST['patientName'];
                $patientAge = $_POST['patientAge'];
                $symptom1 = $_POST['symptom1'];
                $symptom2 = $_POST['symptom2'];
                $symptom3 = $_POST['symptom3'];
               
                $checkTable = "SHOW TABLES LIKE '$tableName'";
                $tableExists = $conn->query($checkTable);

                if ($tableExists->num_rows == 0) {
                    $createTable = "CREATE TABLE $tableName (
                        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                        patientName VARCHAR(30) NOT NULL,
                        age INT(3) NOT NULL,
                        symptom1 VARCHAR(50),
                        symptom2 VARCHAR(50),
                        symptom3 VARCHAR(50),
                        info VARCHAR(50),
                        datee VARCHAR(50),
                        timee VARCHAR(50)
                    )";
                    $conn->query($createTable);
                        
                   
                }
                $countSql = "SELECT COUNT(*) as total FROM $tableName";
                $countResult = $conn->query($countSql);
            
                $countRow = $countResult->fetch_assoc();
                $totalCount = (int)$countRow['total'] + 1;
                    
               
                $currentDate = date('Y:m:d');
                $currentTime = date('H:i:s');
                $sql = "INSERT INTO $tableName (id, patientName, age, symptom1, symptom2, symptom3, info, datee, timee) VALUES ('$totalCount', '$patientName', '$patientAge', '$symptom1', '$symptom2', '$symptom3', 'pending', '$currentDate', '$currentTime')";
               

                if ($conn->query($sql) === TRUE) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }

                break;
            }

            
            case "2": {

                
               
                break;
            }

            
            case "3": {
                
                break;
            }

            
            case "4": {
                
                break;
            }

            
            case "5": {
                
                break;
            }

            
            case "6": {
                
                break;
            }


            
            case "7": {

                $sql = "SELECT * FROM Diseases LIMIT 2";
                $result = $conn->query($sql);
                $disease = "";
                $count = "";
                while($row = $result->fetch_assoc()) {
                    $disease = $disease. '-' . $row["name"];
                    $count = $count. '-' .$row["count"];
                }
                echo $disease."+".$count;
                
                break;
            }

            
            case "8": {
                
                break;
            }

              
            case "9": {
                
                break;
            }

            
            case "10": {
                
                break;
            }

            
            case "11": {
                
                break;
            }

        }

    }

    if($userType == "admin") {

    }

    if($userType == "doctor") {
        switch($value) {
            case '0': {
                
            $sql = "SELECT notice FROM notices LIMIT 1";
            $result = $conn->query($sql);
    
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                echo $row['notice'];
            } else {
                echo "No notice found.";
            }
           break;
            }



            case '1' : {
             
                break;
            }


            case '2' : {

                break;
            }
        }
    }

    if($userType == "ngo") {

    }
}

$conn->close();
?>