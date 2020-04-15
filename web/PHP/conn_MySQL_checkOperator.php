<?php
    $dbhost = '127.0.0.1';
    $dbuser = 'root';
    $dbpass = 'Acedanny79623';
    $dbname = 'lte_band';
    $conn = new mysqli($dbhost, $dbuser, $dbpass) or die('Error with MySQL connection');
    mysqli_query($conn,"SET NAMES 'utf8'");
    mysqli_select_db($conn,$dbname);
    $sql5=$_POST['sql5'];
    //echo $sql;
    $result = mysqli_query($conn,$sql5) ;
    //echo $sql5;
    while($row = mysqli_fetch_assoc($result)){
        echo $row['bands'].'<br>';
        //echo "<li name='cband'>".$row['bands']."</li>";
        //echo "<li name='cband'>".$row['operator']."</li>";
    }
?>