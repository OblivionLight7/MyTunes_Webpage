<?php
//if(isset($_POST['name'])){
$email = $_POST['email'];
$password = $_POST['password'];

//}

  $con = new mysqli("localhost","root","","music");
  if($con->connect_error){
    die("failed to connect : ".$con->connect_error);
  }else{
    $stmt = $con->prepare("select * from signup where email = ?");
    
    $stmt->bind_param("s",$email);
    $stmt->execute();

    $stmt_result = $stmt->get_result();
    if($stmt_result->num_rows > 0) {
      $data = $stmt_result-> fetch_assoc();
      if($data['password'] === $password){
      header("Location: music.html");
      
      }

     else{
      echo  "<script>
      
      window.location='login.html';
      alert('Invalid Email or Password');
      
      
      </script>";
      
     }
    }
  }

  ?>