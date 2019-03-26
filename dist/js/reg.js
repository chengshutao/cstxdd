$(function(){
    //随机四位数
    function ranNum() {
        var str = '0123456789zxcvbnmasdfghjklpoiuytrewqZXCVBNMLKJHGFDSAQWERTYUIOP';
        var num1 = parseInt(Math.random() * str.length);
        var num2 = parseInt(Math.random() * str.length);
        var num3 = parseInt(Math.random() * str.length);
        var num4 = parseInt(Math.random() * str.length);
        var res = str[num1] + str[num2] + str[num3] + str[num4];
        //要返回值
        return res;
    };
        $('.suiji').html(ranNum());
        //点击随机随机生成
        $('.huanyizhang').click(function(){
            $('.suiji').html(ranNum());
        });
        //判断手机是否已经用过了
      $('#txtPhone').on('blur',function(){
            //先判断非空
            var a = $('#txtPhone').val();
            // console.log($a);
            if(a){
                if(Zz.tel(a)){//正则判断/^1[3-9]\d{9}$/
                    $.ajax({
                        type:'post',
                        async:true,
                        data:'hone='+a,
                        url:'../api/login.php',
                        success:function(str){
                            var arr = JSON.parse(str)*1;
                            // console.log(arr);
                           if(arr>0){
                                $('#tipPhone').css('display','inline-block');
                                $('#shuruzhen').css('display','none');
                                $('#tipPhoneRight').css('display','none');
                           }else{
                            $('#shuruzhen').css('display','none');
                            $('#tipPhone').css('display','none');
                            $('#tipPhoneRight').css('display','inline-block');
                           }
                        }
                    })
                }else{
                    $('#shuruzhen').css('display','inline-block');
                    $('#tipPhoneRight').css('display','none');
                }
            }else{
                $('#shuruzhen').css('display','inline-block');
                $('#tipPhoneRight').css('display','none');
            }
      });
      //判断密码
       $('.miam').on('blur',function(){
        var b = $('.miam').val();
            if(b){
                if(Zz.psweasy(b)){
                    $('#zqmima').css('display','inline-block');       
                    $('#mmgscw').css('display','none');
                                
                }else{
                    $('#mmgscw').css('display','inline-block');
                    $('#zqmima').css('display','none');
                }
            }else{
                $('#mmgscw').css('display','inline-block');
                $('#zqmima').css('display','none');
            }
       });
       $('.queren').on('blur',function(){     
        var b = $('.miam').val();
        var a= $('.queren').val();
        if(a){
            if(a==b){
                $('#mmbpp').css('display','none');
                $('#tiss').css('display','inline-block');
            }else{
                $('#mmbpp').css('display','inline-block');
                $('#tiss').css('display','none');
            }
        }else{
            $('#mmbpp').css('display','inline-block');
            $('#tiss').css('display','none');
        }

       });
       //判断内容是否写完
       $('.zcbtn').click(function(){
             var b = $('#txtCodeForEmail').val().toLowerCase();//都转为小写
             var a= $('.suiji').html().toLowerCase();//都转为小写
             var c = $('.miam').val();
              var d= $('.queren').val();
              var e = $('#txtPhone').val();
             if(b&&c&&d&&e){
                if(b==a){
                $.ajax({
                    type:'post',
                     async:true,
                    data:'hone='+e+'&psw='+c,
                     url:'../api/mima.php',
                     success:function(str){
                         var att = JSON.parse(str);
                       if(att==1){
                         $('.miam').val('');
                         $('.queren').val('');
                          $('#txtPhone').val('');
                           alert('注册成功！')
                        location.href = 'login.html';
                       }else{

                       }
                 }
                     });
                }else{
                   alert('验证码错误！')
                }
             }else{
                alert('完善上面的内容')
             }
       });
    //    var isok = true;
    $('#name').on('focus',function(){
        $('#name').val('');
    });
       $('#name').on('blur',function(){
            
    });
    $('.logoin_operr').click(function(){
        var a = $('#pwd').val();
        var b = $('#name').val();
        var aa = $('#pwd').val().trim();
        var bb = $('#name').val().trim();
        if(a){
            $('#tipName').css('display','none');
        }else{
            $('#tipName').css('display','block');
        }
        if(b){
            $('#tipPwd').css('display','none');
        }else{
            $('#tipPwd').css('display','block');
        }
        if(aa&&bb){
            $('#tipName').css('display','none');
            $('#tipPwd').css('display','none');
            $.ajax({
                     type:'post',
                     async:true,
                     data:'hone='+b+'&psw='+a,
                     url:'../api/login.php',
                    success:function(str){
                        var arr = JSON.parse(str);
                        if(arr==1){  //把密码和账号传到数据库里面进行判断  如果有就返回1没有就返回0
                            $('#tipPwd').css('display','none');   
                            $('#tipName').css('display','none');                      
                            setCookie('name',b,'/',7);//把cookies传给所有网页
                            setCookie('psw',a,'/',7);
                            location.href = '../index.html';
                        }else{
                           
                            $('#tipName').css('display','block');
                            $('#tipPwd').css('display','block');
                        }
                     }
            });
        }else{
             $('#tipName').css('display','block');
            $('#tipPwd').css('display','block');
        }
    });
})