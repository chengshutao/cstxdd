<?php
     //配置参数
     $servername = 'localhost';
     $username ='root';
     $passname='';
     $dbname ='cstxd';
    //要调用php的属性或者方法要用 名->属性或者方法
     $conn = new mysqli($servername,$username,$passname,$dbname);
     //判断是否连接成功
     if($conn->connect_error){
         die('连接失败：'.$conn->connect_error);
     }
         
     

    

?>