<?php
      // $conn->set_charset('utf8');//把乱码转成文字
         include 'cona.php';//连接数据库 
       
        $mysql = "SELECT * FROM listl";
        $xuan = $conn -> query($mysql);//返回一个集合，
        if($xuan->num_rows){
            echo 1;  //代表真
          }else{
            echo 0;
          }
?>