<?php
    $dbhost = '127.0.0.1';
    $dbuser = 'root';
    $dbpass = 'Acedanny79623';
    $dbname = 'lte_band';
    $port = '3306';

    $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname, $port) or die('Error with MySQL connection');
    mysqli_query($conn,"SET NAMES 'utf8'");
    mysqli_select_db($conn,$dbname);
    $sql=$_POST['sql'];
    //echo $sql;
    $result = mysqli_query($conn,$sql) or die('MySQL query error');
    //echo $result;
    while($row = mysqli_fetch_assoc($result)){
        $country = str_replace('\'','',$row['country']);
        echo $country.'<br>';
        //echo '<component :is="root" class="Taiwan" :model="treeData" vuecountry="'.$country.'"></component>';
        //echo '<ul><input type="checkbox" name="country" value="'.$country.'" onclick="showValue_country()" class >'.$country.'<span>[+]</span></ul>'.'<ul class="sub" style="display:none;"></ul>';
    }
