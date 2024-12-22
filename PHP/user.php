<?php
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = ""; // Default XAMPP password
$dbname = "userinfo";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// Function to register a new user
function registerUser($conn) {
    // Check if username or email already exists
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
        $username = $_POST['username'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        
    }
    $stmt = $conn->prepare("SELECT * FROM details WHERE Username = ? OR Email = ?");
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        return "Username or email already exists.";
    }

    // Proceed with registration
  
    $stmt = $conn->prepare("INSERT INTO details (Username, Email, Phone, pass) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $username, $email, $phone, $password);

    if ($stmt->execute()) {
        return "Registration successful!";
    } else {
        return "Error: " . $stmt->error;
    }
}

// Function to login a user
function loginUser($conn) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
        $username = $_POST['username'];
        $password = $_POST['password'];
    }
    $stmt = $conn->prepare("SELECT pass FROM details WHERE Username = ? AND pass = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo"1";
    } else {
        echo"0";
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];
    

    if ($action === 'register') {
        return registerUser($conn);
    } elseif ($action === 'login') {
        loginUser($conn);
    }
}

$conn->close();
?>