$(function(){
                //移进去显示二级导航
                $('.menu_lxiala').css('display','none');
                $('.menu_l').hover(function(){
                   $('.menu_lxiala').css('display','block');
                  
                },function(){
                    $('.menu_lxiala').css('display','none');
                })
// var zhochang = $('.xiaotup ul li').outerWidth(true)*$('.xiaotup ul li').size();
 
  //吸顶菜单
  $Top = $('#xiding').offset().top;//获取盒子到达顶部的距离
  $(window).scroll(function(){
      var Y = $(document).scrollTop();//获取滚轴距离顶部的距离
       if(Y>=$Top){//当滚轴滚动的距离大于盒子到达顶部的福利的时候进行吸顶
        $('#xiding')
        .css({
        'position':'fixed',
        'left':0,
        'top':0,
        'background':'#606982',
        'color':"#fff"});
        $('.xidin_r').hide();//商品对比隐藏
        $('.xidin_rr').css('display','block');//回到通知显示
       }else{
        $('#xiding').css({
            'position':'static',
            'background':'#f0f0f0',
            'color':"#787878"
        });
        $('.xidin_r').show();
        $('.xidin_rr').css('display','none');
    }
  })

  
        //  var ress = encodeURI(location.search.split(1));//取网站的后面进行切割
         var ress = encodeURI(location.search).slice(1);//取网站的后面进行切割
       
        // var aaaaa = location.search.split(1);
        var arra=ress.split('=');//切成数组
        var bb = arra[1];//选中他的第二个  就是你在列表页传过来的data-id
             $.ajax({
                    type:'post',
                    async:true,
                    data:'uid='+bb,
                    url:'../api/xiangqin.php',
                    success:function(str){
                        var att = JSON.parse(str);                
                        var res = att.map(function(item){
                                return `
                                <div id="sqmainz">
                        <div class="sqmain1 clear">
                            <div class="sqmain1_l fl">
                            <div class="magnifier" id="magnifier1">
                            <div class="magnifier-container">
                                <div class="images-cover"></div>
                               
                                <div class="move-view"></div>
                               
                            </div>
                            <div class="magnifier-assembly">
                                <div class="magnifier-btn">
                                    <span class="magnifier-btn-left">&lt;</span>
                                    <span class="magnifier-btn-right">&gt;</span>
                                </div>
                               
                                <div class="magnifier-line">
                                    <ul class="clearfix animation03">
                                        <li>
                                            <div class="small-img">
                                                <img src="../images/liebiao/chanp/cp.jpg" />
                                            </div>
                                        </li>
                                        <li>
                                            <div class="small-img">
                                                <img src="../images/liebiao/chanp/cp1.jpg" />
                                            </div>
                                        </li>
                                        <li>
                                            <div class="small-img">
                                                <img src="../images/liebiao/chanp/cp2.jpg" />
                                            </div>
                                        </li>
                                        <li>
                                            <div class="small-img">
                                                <img src="../images/liebiao/chanp/cp3.jpg "/>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="small-img">
                                                <img src="../images/liebiao/chanp/cp4.jpg "/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                               
                            </div>
                            <div class="magnifier-view"></div>
                            
                            </div>
                            </div>
                            <di class="sqmain1_r fl">
                                <div class="sqmain1_r_top">
                                    <h1>${item.text}</h1>
                                    <p>${item.gtext}</p>
                                </div>

                               <div class="sqmain1_rc clear">
                                <div class="sqmain1_r_centl fl">
                                  
                                       <ul class="goods_in">
                                           <li>
                                               <div class="goods_in_11 fl">
                                                品 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                
                                                牌 ：
                                               </div>
                                               <div class="goods_in_12 fl">
                                                   <a href="">
                                                   ${item.pinpai}
                                                   </a>
                                               </div>
                                           </li>
                                           <li>
                                            <div class="goods_in_11 fl">
                                             产&nbsp;&nbsp;品&nbsp;&nbsp;型&nbsp;号：
                                            </div>
                                            <div class="goods_in_12 fl">
                                                <a href="">
                                                ${item.xinhao}
                                                </a>
                                            </div>
                                        </li>
                                           <li>
                                               <div class="goods_in1 fl">
                                                新&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;蛋&nbsp;&nbsp;&nbsp;&nbsp;价：
                                               </div>
                                               <div class="fl goodsss goods_in_12">
                                                <span class="jiaqian1">
                                                    
                                                   <i> ￥${item.jiage}.00</i>
                                                </span>
                                                <span class="fangjia">
                                                    <i></i>
                                                    返100.00元
                                                </span>
                                               </div>
                                           </li>
                                           <li>
                                                <div class="goods_in1 fl">
                                                        商&nbsp;&nbsp;品&nbsp;&nbsp;支&nbsp;持：
                                                       </div>
                                                       <div class="fl kaundu goods_in_12">
                                                        <a href="" class="kaunduimg">
                                                                不支持无理由退
                                                        </a>
                                                       </div>
                                           </li>
                                           <li>
                                                <div class="goods_in_11 fl dada">
                                                        颜 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                        
                                                        色 ：
                                                       </div>
                                                       <div class="goods_in_12 fl yuanse  yuanse1">
                                                        <a href="javascript:void(0);" class="banbenb">
                                                              ${item.color}
                                                              <s></s>
                                                            </a>
                                                        <a href="javascript:void(0);">
                                                        ${item.color1}
                                                        <s></s>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                        ${item.color2}
                                                        <s></s>
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                        ${item.color3}
                                                        <s></s>
                                                    </a>
                                                       </div>
                                           </li>
                                           <li>
                                                <div class="goods_in_11 fl dada">
                                                        版 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                        
                                                        本 ：
                                                       </div>
                                                       <div class="goods_in_12 fl yuanse yuanse2">
                                                            <a href="javascript:void(0);" class="banbenb">
                                                                                    
                                                             ${item.banben}
                                                             <s></s>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                                    
                                                                ${item.banben1}
                                                                <s></s>
                                                                  </a>
                                                                  <a href="javascript:void(0);">
                                                                                    
                                                                  ${item.banben2}
                                                                  <s></s>
                                                                    </a>
                                                          
                                                           </div>
                                           </li>
                                           <li>
                                                <div class="goods_in_11 fl dada">
                                                        数 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                        
                                                        量 ：
                                                       </div>
                                                       <div class="goods_in_12 fl jiajian">
                                                            <a href="javascript:void(0);" class="cutnum">-</a>
                                                          <input type="text" class="jiajiashu nownum" value="1">
                                                          <a href="javascript:void(0);" class="addnum">+</a>
                                                           </div>
                                           </li>
                                           <li>
                                                <div class="goods_in_11 fl dada">
                                                      
                                                       </div>
                                                       <div class="goods_in_12 fl xuanzhile">
                                                                已选  “ 
                                                                <strong  class="str1">
                                                                     ${item.color}
                                                                </strong>
                                                                、
                                                                <strong class="str2">
                                                                ${item.banben}
                                                                </strong>
                                                                ”
                                                           </div>

                                           </li>
                                       </ul>
                        <div class="sfoujia">
                        <div class="gwcdian"><p>X</p></div>
                        <div class="jgw">
                             <p class="guanji">商品已经成功加入购物车</p>
                             <div class="pd">
                                 <a href="javascript:void(0);" class="liji">继续购物</a>
                                 <a href="javascript:void(0);" class="gwc">去结算</a>
                             </div>
                        </div>
                    </div>
                                  <div class="sqmain1_r_centbo">
                                    <a href="" class="daohuitonz ljgm">
                                        立即购买
                                    </a>
                                    <a href="javascript:void(0);" class="daohuitonz jrgwc">
                                            加入购物车
                                        </a>
                                   <div class="jiarushouc clear">
                                        <a href="" class="jrscj fl">
                                            加入收藏夹
                                        </a>
                                        <div class="honxing fl">
                                         <div class="shuzi">
                                             <ul class="shuzidinwei">
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                        </ul>
                                         </div>
                                        </div>
                                        <div class="fengxianglj fl">
                                            <a href="javascript:void(0);" class="fxlj1"></a>
                                            <a href="javascript:void(0);" class="fxlj2"></a>
                                            <a href="javascript:void(0);" class="fxlj3"></a>
                                            <a href="javascript:void(0);" class="fxlj4"></a>
                                            <a href="javascript:void(0);" class="fxlj5"></a>
                                        </div>
                                   </div>
                                    </div>
                                </div>
                                <div class="sqmain1_r_centr fl">
                                    <p class="sqmain1_r_centr_title">
                                        <a href="">
                                            减价通知
                                        </a>
                                    </p>
                                    <div class="sqmain1_r_centr_pl">
                                        <p><strong>5.0</strong></p>
                                       <p class="sqmain1_r_centr_tu"><a href="" class=""></a></p>
                                       <a href="">已有15人评论</a>
                                    </div>
                                    <div class="sqmain1_r_centr_erweima">
                                        <img src="../images/xianqin/erweima.png" alt="">
                                        <p>转到手机上看</p>
                                        <div class="sqmain1_r_centr_erweimad">
                                                <img src="../images/xianqin/erweima.png" alt="">
                                        </div>  
                                    </div>
                                </div>
                               </div>
                            </di></div>
                        </div>
                                `;
                        }).join('');                                                                                        
                        $('#xuanrang').html(res); 
                        var magnifierConfig = {
                            magnifier : "#magnifier1",//最外层的大容器
                            width : 450,//承载容器宽
                            height : 450,//承载容器高
                            moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
                            zoom : 5//缩放比例
                        };                
                        var _magnifier = magnifier(magnifierConfig);                                                                        
                    }
                    
                })
                              
               //选择商品颜色
                $('#sqmain').on('click','.yuanse1 a',function(){
                    $(this).addClass('banbenb').siblings().removeClass('banbenb');
                       var aa =$(this).html();
                         // 过滤html标签                               
                          function repalceHtml(str){
                              var dd=str.replace(/<\/?.+?>/g,"");
                              var dds=dd.replace(/ /g,"");//dds为得到后的内容
                              return dds;
                          }
                          var bb = repalceHtml(aa);
                          $('.str1').html(bb);
                          
          })
          //选择商品型号
          
          $('#sqmain').on('click','.yuanse2 a',function(){
            $(this).addClass('banbenb').siblings().removeClass('banbenb');
                       var aa =$(this).html();
                       // 过滤html标签                               
                        function repalceHtml(str){
                            var dd=str.replace(/<\/?.+?>/g,"");
                            var dds=dd.replace(/ /g,"");//dds为得到后的内容
                            return dds;
                        }
                        var bb = repalceHtml(aa);
                        $('.str2').html(bb);
  })                        
        //           
                          var num =1;
                           $('#sqmain').on('click','.addnum',function() {
                              num = $(this).prev().val() * 1;//取值
                             num++;
                             if(num >= 100) {
                                 //假设库存量
                                 num = 100;
                             }
                             $(this).prev().val(num);//赋值
                          
                         });
                         //减
                         $('#sqmain').on('click','.cutnum',function() {
                            num = $(this).next().val() * 1;//取值
                           num--;
                           if(num <= 1) {
                               //假设库存量
                               num = 1;
                           }
                           $(this).next().val(num);//赋值
                          
                       });
                       $('#sqmain').on('click','.liji',function(){
                                $('.sfoujia').hide();
                       })
                       $('#sqmain').on('click','.gwcdian',function(){
                              $('.sfoujia').hide();
                    })
                      
                      $('#sqmain').on('click','.jrgwc',function(){
                        $('.sfoujia').show();
                          var ababc = $('.nownum').val();
                          var xiaojia = $('.jiaqian1 i').eq(0).text().slice(2);// //获取价格，减掉单位只要数字                  
                        var totalPrice = (ababc * xiaojia).toFixed(2);//保留两位小数         
                            $.ajax({
                                type:'post',
                                async:true,
                                data:{
                                    gid:bb,
                                    num:ababc,
                                    xiaoji:totalPrice,
                                },
                                url:'../api/char.php',
                                success:function(str){                                                      
                                                                                      
                                }
        
                            })
                            
                      })
                      $('#sqmain').on('click','.gwc',function(){
                        location.href = 'car.html?';//吧data-id传到详情页去   
                    
                      })
                   
        
})