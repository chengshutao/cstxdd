 <?php

         include 'cona.php';//连接数据库 
           $conn->query("SET NAMES utf8");//把乱码转成文字
           //先拿到数据
        $sql5="SELECT * FROM car";
        $res5=$conn->query($sql5);
        $data5=$res5->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data5,JSON_UNESCAPED_UNICODE);

?> 