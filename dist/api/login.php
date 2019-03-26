<?php
      // $conn->set_charset('utf8');//把乱码转成文字
         include 'cona.php';//连接数据库 
        $hone = isset($_POST['hone']) ? $_POST['hone'] : '';//判断前端是否传数据过来
        $psw = isset($_POST['psw']) ? $_POST['psw'] : '';//判断前端是否传数据过来
        $mysql = "SELECT * FROM login WHERE hone='$hone' AND psw='$psw'";
        $xuan = $conn -> query($mysql); //一个集合如果里面查找到右数据num_rows就不是0
        // var_dump($xuan);
        if($xuan->num_rows>0){
            echo 1;  //代表真
          }else{
            echo 0;
          }
?>