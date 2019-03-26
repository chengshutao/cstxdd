<?php

    //连接数据库
    include 'cona.php';//连接数据库 
    $conn->query("SET NAMES utf8");//把乱码转成文字
    $zt = isset($_POST['zt']) ? $_POST['zt'] : '';
    $id = isset($_POST['id']) ? $_POST['id'] : '';
    $num = isset($_POST['num']) ? $_POST['num'] : '';
    $xiaoji = isset($_POST['xiaoji']) ? $_POST['xiaoji'] : '';
    if($zt=='add'){
        //加
        $sql="UPDATE car SET num=$num,xiaoji=$xiaoji WHERE gid='$id'";
    }  
    if($zt=='update'){
        //减
        $sql="UPDATE car SET num=$num,xiaoji=$xiaoji WHERE gid='$id'";
    }
    if($zt=='dele'){
        //删除一行
          $sql="DELETE FROM car WHERE gid='$id'";
    }
    if($zt=='deldeall'){
        //清空购物车
          $sql="DELETE FROM car";
    }
    if($zt){
        //执行语句
        $res = $conn->query($sql);
    }
    //重新查询id对应的商品信息
    $sql3 = "SELECT * FROM car";
    //执行sql语句，得到一个结果集
    $res3 = $conn->query($sql3);
    //得到结果集里面的内容部分
    $row3 = $res3->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]

    //返回商品信息
    echo json_encode($row3,JSON_UNESCAPED_UNICODE);

?>