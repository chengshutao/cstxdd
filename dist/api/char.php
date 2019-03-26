<?php
/*
    点击加入购物车，先查询订单表，然后更新订单表
        get:
            gid:商品id
            num：商品数量
        返回：
            订单表的所有数量
 */

    //加入购物车，把数据写入订单表
    include 'cona.php';//连接数据库 
    $conn->query("SET NAMES utf8");//把乱码转成文字
    $num=isset($_POST['num']) ? $_POST['num'] : '';
    $gid=isset($_POST['gid']) ? $_POST['gid'] : '';
    $xiaojip=isset($_POST['xiaoji']) ? $_POST['xiaoji'] : '';
    //查询订单表是否有该gid商品
    $sql="SELECT num,xiaoji FROM car WHERE gid='$gid'";//查询购物车是否有数据
    $res=$conn->query($sql);
    $res2 = null;
    if($res->num_rows>0){//如果有就对数量和小计进行增加
        $data = $res->fetch_all(MYSQLI_ASSOC);
        $gnum = $data[0]['num'];//获取上一次的数量
        $num = $num + $gnum;//上一次的数量加上这一次的数量
        $xiaojia = $data[0]['xiaoji'];//获取前一次的小计
        $xiaojip = $xiaojip +$xiaojia;//新传进来的小计加上旧的小计
        $sql2="UPDATE car SET num=$num,xiaoji=$xiaojip WHERE gid=$gid";
        $res2=$conn->query($sql2);
    }else{//如果差不到数据就执行这里
        $sql3="SELECT * FROM  listl WHERE cid=$gid";//在列表页里面查
        $res3=$conn->query($sql3); 
        if($res3->num_rows>0){
            $data3=$res3->fetch_all(MYSQLI_ASSOC);
            $gname = $data3[0]['text'];//然后在列表页里面查你购物车里面需要的数据进行插入购物车
            $gprice = $data3[0]['jiage'];
            $gimg1 = $data3[0]['dimg'];
            $pinpai = $data3[0]['pinpai'];
            $xinhao = $data3[0]['xinhao'];
            $xiaoji = ($gprice*$num)*1;
            $sql4="INSERT INTO car(gid,nam,price,img1,num,pinpai,xinhao,xiaoji) VALUES ('$gid','$gname','$gprice','$gimg1','$num','$pinpai','$xinhao','$xiaoji')";
            $res2=$conn->query($sql4);
        }
    }
    if($res2){
        $sql5="SELECT * FROM car";
        $res5=$conn->query($sql5);
        $data5=$res5->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data5,JSON_UNESCAPED_UNICODE);
        // echo 1;
    }else{
        echo 0;
        // $sql5="SELECT * FROM car";
        // $res5=$conn->query($sql5);
        // $data5=$res5->fetch_all(MYSQLI_ASSOC);
        // echo json_encode($data5,JSON_UNESCAPED_UNICODE);
    }
    

?>