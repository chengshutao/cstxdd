$(function(){
     // 倒计时时间
     function toDb(a){//补零
        if(a<10){
            return '0' + a;
        }else{
            return '' + a;
        }
    };
    function getTime(){
        var time = new Date();
        var year = time.getFullYear();//年
		var mon = time.getMonth() + 1;//月
		var day = time.getDate();//日
        var hours = time.getHours()+1;//小时
        var hoursss = new Date(year+"-"+mon+"-"+day+" "+hours+":"+00+":"+00);//先定义一个时间
        var shuchuu = parseInt((hoursss-time)/1000);//两个小时之后的时间和现在的时间一直相减
        var hou = parseInt(shuchuu/60/60);
        var feng = parseInt(shuchuu/60%60);
        var miao = parseInt(shuchuu%60);
        $('.shi').html(toDb(hou));
        $('.fen').html(toDb(feng));
        $('.miao').html(toDb(miao));
    };
    getTime();
    setInterval(getTime,1000);
    //输入框内容的改变
    $('.header_cl_in').attr('placeholder','请输入您要的搜索的关键字');
    $('.header_cl_in').focus(function(){
        $('.header_cl_in').removeAttr('placeholder','');
    });
    $('.header_cl_in').blur(function(){
        $('.header_cl_in').attr('placeholder','请输入您要的搜索的关键字');
    });
  
    // 首页轮播
    $('.img-box li').css('opacity','0');//先把所有的图片隐藏
    var timer1 = null;
    var indexx = 0;//定义一个下标
    $('.img-box li').eq(0).css('opacity','1');//第一张显示出来
     timer1 = setInterval(don,2000);
    function don(){
        indexx++;
            if (indexx > 5) {
                indexx = 0;
            }
            $('.img-box li').eq(indexx).css('opacity','1').siblings().css('opacity','0');
            gen();
        };
        timer1;
        //根据img-box下面的li的长度创建小红点
        $('.img-box li').each(function(i,item){
            //循环创建节点
            span = `<li class="">${i+1}</li>`;
            //渲染
            $('.list-box').append(span);
     });
     $('.list-box li').eq(0).addClass('active');
     //焦点跟随
     function gen(){
        $('.list-box li').eq(indexx).addClass('active').siblings().removeClass('active');
     };
        //鼠标移入移除控制定时器
            $('.img-box').hover(function(){
                clearInterval(timer1);
              },function(){
            timer1 = setInterval(don,2000);
                });
    
        //用委托焦点跟随
        $('.list-box').on('mouseover','li',function(){
                var index_box = $(this).index()+1;//拿到你移入的下标
                $('.img-box li').eq(index_box-1).css('opacity','1').siblings().css('opacity','0');
                $('.list-box li').eq(index_box-1).addClass('active').siblings().removeClass('active');
                clearInterval(timer1);
        });

        $('.list-box').on('mouseout','li',function(){
            timer1 = setInterval(don,2000);
    });
        //今日炸蛋
        var timer2 = null;
        var  index1= 0;//定义一个下标
         timer2 = setInterval(don2,3000);
        var iw = $('.zhadan img').outerWidth();//先获取一张图片的宽度
        $('.zhadan li').css('left',iw);
        $('.zhadan li').eq(0).css('left',0);
        function don2(){
            $('.zhadan li').eq(index1).animate({'left':-iw},200,'linear');
            index1++
            index1 =  index1> $('.zhadan li').size()-1 ? 0 : index1;
            $('.zhadan li').eq(index1).css('left',iw);
            $('.zhadan li').eq(index1).animate({'left':0},200,'linear');
        };
        //根据素组的长度创建span
     $('.zhadan li').each(function(i,item){
        //循环创建节点
        span = `<span></span>`;
        //渲染
        $('.dian').append(span);
       });
       $('.zhadan  span').eq(0).addClass('oranger');
       $('.zhadan').hover(function(){
            clearInterval(timer2);
       },function(){
        timer2 = setInterval(don2,3000);
       });
       function gen1(){
        $('.dian span').eq(index1-1).addClass('oranger').siblings().removeClass('oranger');
       };
       $('.dian').on('mouseenter','span',function(){
        var dian1 = $(this).index()+1;//拿到你移入的下标
        if(index1>dian1){
            $('.zhadan li').eq(index1).animate({'left':iw},200,'linear');
            //把后面的图里面快速移动到左边边然后进去可视区
            $('.zhadan li').eq(dian1).css('left',-iw);
            $('.zhadan li').eq(dian1).animate({'left':0},200,'linear');
           
        }
        if(index1<dian1){
            $('.zhadan li').eq(index1).animate({'left':-iw},200,'linear');        
            //把后面的图里面快速移动到左边边然后进去可视区
            $('.zhadan li').eq(dian1).css('left',iw);
            $('.zhadan li').eq(dian1).animate({'left':0},200,'linear');
           
        }
        dian1=index1;//新图变旧图
        gen1();
        don2();
    });
   
    // 限时购的轮播
    var timer3 = null;
     timer3 = setInterval(don3,4000); 
    var iw2 = $('.xsgou1 li').innerWidth()*4;//先获取四张图片的宽度
    $('.xsgou1').css('left',0);
    var isok = true;//给开关进行判断
    function don3(){
       if(isok){
        $('.xsgou1').stop().animate({'left':-iw2},500,'linear');
     isok = !isok;//开关置反
        
       }else{
        $('.xsgou1').stop().animate({'left':0},500,'linear');
        isok = !isok;
       }
    };
    //左右按钮点击
    // var isok1 = true;
    $('.next').on('click',function(){
        if(iw2==772){
            $('.xsgou1').stop().animate({'left':-iw2},500,'linear');
        }
    });
    $('.preve').on('click',function(){
        $('.xsgou1').stop().animate({'left':0},500,'linear');
    });
    //鼠标移入的时候清理定时器
    $('.xsgou').hover(function(){
        clearInterval(timer3);
    },function(){
        timer3 = setInterval(don3,4000);
    });
    //
    var timer4 = null;
    var num = 0;
     timer4 = setInterval(don4,3000);
    var nun =  $('.img-box2 li').size();//长度
    function don4(){
          num++;
          num = num > nun ? 0:num;//当超过长度的时候又变为0
          $('.img-box2 li').eq(num).animate({'opacity':'1'},'2000','linear').siblings().animate({'opacity':'0'},'2000','linear');//改变透明度
    };
    //鼠标移入移除控制定时器
    $('.img-box2').hover(function(){
            clearInterval(timer4);
            // console.log('aaa');
    },function(){
        timer4 = setInterval(don4,2000);
    });
    //热卖区
    var c = $('.fff1_cluobo li').innerWidth()*$('.fff1_cluobo li').size();//给fff1_cluobo设定宽度
    $('.fff1_cluobo').css('width',c);
    var b = $('.fff1_cluobo li').innerWidth()*4;//要移动的距离
    // var aaa = setInterval(next1,2000);
        function next1(){
            $('.fff1_cluobo').stop().animate({'left':-b},50,function(){
                //出去的图片，剪切放到末尾
                $('.fff1_cluobo li:lt(4)').insertAfter($('.fff1_cluobo li:last'));
                //ul归位
                $('.fff1_cluobo').css('left',0);
            });
        };
            //点击调用
			$('.huanyipi').click(function(){
                next1();
            });
            //fff3选项卡
			$('#fff3 .xuan li').on('mouseover','',function(){//鼠标经过改变样色
                $(this).addClass('bian').siblings().removeClass('bian');//添加当前this的类名其他兄弟清除
                $('#xuanxianka ul').eq($(this).index()).css('display','block').siblings().css('display','none');
            });
            //main1选项卡
            // $('.main1 .xxk span').on('mouseover','',function(){//鼠标经过改变样色
            //     $(this).addClass('now').siblings().removeClass('now');//添加当前this的类名其他兄弟清除
            //     $('.xians ul').eq($(this).index()).css('display','block').siblings().css('display','none');
            // })
            // $('.main2 .xxk span').on('mouseover','',function(){//鼠标经过改变样色
            //     $(this).addClass('now').siblings().removeClass('now');//添加当前this的类名其他兄弟清除
            //     $('.main2 .xians ul').eq($(this).index()).css('display','block').siblings().css('display','none');
            // })
            
            var ab = $('.main1 .xxk span');
            var ba = $('.main1 .xians ul');
            var ac = $('.main2 .xxk span');
            var ca = $('.main2 .xians ul');
            var ad = $('.main3 .xxk span');
            var da = $('.main3 .xians ul');
            var ae = $('.main4 .xxk span');
            var ea = $('.main4 .xians ul');
            function aa(ab,ac){
                ab.on('mouseover','',function(){//鼠标经过改变样色
                    $(this).addClass('now').siblings().removeClass('now');//添加当前this的类名其他兄弟清除
                   ac.eq($(this).index()).css('display','block').siblings().css('display','none');
                });
            };
            aa(ab,ba);
            aa(ac,ca);
            aa(ad,da);
            aa(ae,ea);
            //手风琴
            $('.repin li').eq(0).css('width','70%');//先初始化
            $('.repin li').on('mouseover',function(){
                $('.repin li').eq($(this).index()).css('width','55%').siblings().css('width','14.8%');
            });
            //首页回到顶部
            window.onscroll =function(){
                if(window.scrollY>=900){//滚动到一定距离，回到顶部的快显示出来否是隐藏起来
                    // hhdb.style.display = 'block';
                    $('.huidaodinbu').css('display','block');
                }else{
                    $('.huidaodinbu').css('display','none');
                }
            };
            $('.huidaodinbu').click(function(){
                var scrolTop = window.scrollY;
                var timer = setInterval(
                    function(){
                      if(scrolTop>=0){ 
                        scrolTop -= 100;
                        window.scrollTo(0,scrolTop); //已垂直方向每50毫秒减去100；直到scrolTop=0;达不到条件，停止定时器
                 }else{
                     clearInterval(timer);
                 }
                    }
                    ,50);
            });
           
        //  main轮播tu
        //插件的使用
        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        //   $('.lunbo1').hover(function(){
        //         swiper = null;
        //   },function(){
        //     swiper = swiper;
        //   })
        // var ress = encodeURI(location.search.split(1));
        // var arra=ress.split('=');
        
       var yonghum = getCookie('name');//拿到登录页面传来的cookies
       console.log(yonghum);
          if(yonghum){
                $('.logingg').css('display','none');
                $('.zz').css('display','inline-block');
                $('.yonhu').css('display','inline-block');
                $('.yonhus').html(yonghum);
                    
          }else{
              $('.zz').css('display','none');//取不到name这个键值退出和用户名是隐藏的
              $('.yonhu').css('display','none');
              $('.logingg').css('display','inline-block');
          };
          //点击退出清除cookies
          $('.tuichu').click(function(){//清除全局的cookies
            removeCookie('psw','/');
            removeCookie('name','/');
           });
         
})
