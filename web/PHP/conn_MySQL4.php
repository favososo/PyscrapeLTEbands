<?php
    $dbhost = '127.0.0.1';
    $dbuser = 'root';
    $dbpass = 'Acedanny79623';
    $dbname = 'lte_band';
    $conn = new mysqli($dbhost, $dbuser, $dbpass) or die('Error with MySQL connection');
    mysqli_query($conn,"SET NAMES 'utf8'");
    mysqli_select_db($conn,$dbname);
    $sql4=$_POST['sql4'];
    //echo $sql;
    $result = mysqli_query($conn,$sql4) or die('MySQL query error');
    //echo $result;
    while($row = mysqli_fetch_assoc($result)){
        $operator = str_replace('\'','',$row['operator']);
        echo $operator.'<br>';
        //echo "<li name='cband'>".$row['operator']."</li>";
    }
?>