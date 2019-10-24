<?php
session_start();

    
$_SESSION['login_user']=NULL;   
$_SESSION['login'] = 0; 
  session_destroy();
header("location:index.php");