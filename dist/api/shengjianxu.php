<?php
            include 'cona.php';//连接数据库 
            $conn->query("SET NAMES utf8");//把乱码转成文字
            //先拿到数据
            $ye = isset($_POST['iye']) ? $_POST['iye'] : '';
            $tiao = isset($_POST['itiao']) ? $_POST['itiao'] : '';
            $index = ($ye-1)*$tiao;//
            $mysql3 = "SELECT * FROM listl order by jiage LIMIT $index,$tiao";
            $res = $conn -> query($mysql3);
            // var_dump($res);
            $arr =$res->fetch_all(MYSQLI_ASSOC);//获取大数据里面所查询到的数据


            $sql2 = "SELECT * FROM listl order by jiage";
            $res2 = $conn->query($sql2);
            $st = array(
                'data'=> $arr,//查询到的一段数据
                'tota' => $res2->num_rows,//得到的数据的总长度
                'tiao' => $tiao,
                'ye' => $ye,
                // 'idd'=> $arr3
            );
            // var_dump($st);
           echo json_encode($st,JSON_UNESCAPED_UNICODE);
            
?>