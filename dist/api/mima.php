<?php
      // $conn->set_charset('utf8');//把乱码转成文字
         include 'cona.php';//连接数据库 
        $hone = isset ($_POST['hone']) ? $_POST['hone'] : '';//判断前端是否传数据过来
        $psw = isset ($_POST['psw']) ? $_POST['psw'] : '';//判断前端是否传数据过来
        $sql = "INSERT INTO login(hone,psw) VALUES('$hone','$psw')";
        $xuan = $conn -> query($sql); //除了select查找的 返回的都是布尔值;
        if($xuan){
            echo 1;  //代表真
          }else{
            echo 0;
          }
?>