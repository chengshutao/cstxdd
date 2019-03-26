$(function(){
      //移进去显示二级导航
      $('.menu_lxiala').css('display','none');
      $('.menu_l').hover(function(){
         $('.menu_lxiala').css('display','block');
        
      },function(){
          $('.menu_lxiala').css('display','none');
      });
    // 手风琴main_l
    $('.main_ltt').css('height','0');
    var a = $('.main_ltt:eq(0) dd').size()*26+'px';
    $('.main_ltt:eq(0)').css('height',a);
        // var idok = true;
    $('#main11 .main_lt').on('click','.bb',function(){
        var b = $(this).next().find('dd').size()*26+'px'; //有几个dd
        var aaa = $(this).next().css('height').slice(0,1)*1;//用距离做判断
       if(aaa){
        $(this).next().animate({'height':0});
       }else{
        $(this).next().animate({'height':b});
       }
     
    });
    //main_选项卡
    //初始化
    $('.xxkk span').css({ 'background': '#e6e6e6','color':'#666666'});
    $('.xxkk span').eq(0).css({ 'background': '#fff','color':'#333333'});
    
    $('.xs ul').show();
    $('.xs ul').eq(0).hide();
    $('.xxkk span').on('click',function(){
        //点击的时候改变属性，兄弟元素清除
        $(this).css({ 'background': '#fff','color':'#333333'}).siblings().css({ 'background': '#e6e6e6','color':'#666666'});
        $('.xs ul').eq($(this).index()).hide().siblings().show();
    });
    // 更多选项的选项卡
    //先初始化
    $('.main_rtop3xxk div').hide();
    $('.main_rtop3xxk div').css('border',0);
    $('.main_rtop3t ul li').hover(function(){
        $('.main_rtop3xxk div').eq($(this).index()).show().siblings().hide();//移进去显示
        $('.main_rtop3xxk div').eq($(this).index()).css({'border':'1px','borderColor':'#ccc','borderStyle':'solid','borderTop':0})
    },function(){
        $('.main_rtop3xxk div').hide();//鼠标移出来消失
    });
    //数据渲染和分页
    function ajaxjx(res){
         ress = res.map(function(item){
            return `
            <li data-id="${item.cid}">
            <div class="ccpp_img">
                    <a href="javascript:void(0);" class="lianjie">
                        <img src="${item.dimg}" alt="">
                    </a>
                    <span class="zhuankaun">
                        <img src="${item.yimg}" alt="">
                    </span>
                    <a href="javascript:void(0);" class="xiantian"></a>
            </div>
            <p class="ccpp_1">
                <a href="javascript:void(0);">
                ${item.text}
                </a>
            </p>
            <p class="ccpp_2">
            ${item.gtext}
            </p>
            <p class="ccpp_3">
                <span class="prom fl">
                </span>
                <a href="javascript:void(0);" class="pjjj">
                    [${item.haop}]
                </a>
            </p>
            <p class="ccpp_4">
                <span>
                ￥${item.jiage}
                </span>
                <p class="ccpp_5">
                    <a href="javascript:void(0);" class="ccpp_51">
                        到货通知
                    </a>
                    <a href="javascript:void(0);" class="ccpp_52">
                        收藏
                    </a>
                    <a href="javascript:void(0);" class="ccpp_53">
                        <input type="checkbox">
                        比较
                    </a>
                </p>
            </p>
        </li>
            `;
        }).join('');
       return ress;
    };

    var ye = 1;
    var itiao = 12;
    //先渲染第一页
        $.ajax({
            type:'post',
            async:true,
            data:'iye='+ye+'&itiao='+itiao,
            url:'../api/list.php',
           success:function(str){
            var att = JSON.parse(str);
            var res = att.data;//去渲染的数据
            var aabb =  ajaxjx(res);
            $('#ccpp').html(aabb);
            var yey = Math.ceil(att.tota/att.tiao);//总页码数
            var gezi = '';//多少ye就有多少格子
            for(var i=0;i<yey;i++){
                gezi += `<span>${i+1}</span>`;
            }
            $('.gezi').html(gezi);
            $('.gezi span').eq(0).addClass('fen');//第一个盒子加类名
           }
        });


       //价格排序
       var idokd = false;
      $('.djjiage').click(function(){
        $.ajax({
            type:'post',
            async:true,
            data:'iye='+ye+'&itiao='+itiao,
            url:'../api/shengjianxu.php',
           success:function(str){
            var att = JSON.parse(str);
            var res = att.data;//去渲染的数据
            var aabb =  ajaxjx(res);
            $('#ccpp').html(aabb);
            var yey = Math.ceil(att.tota/att.tiao);//总页码数
            var gezi = '';//多少ye就有多少格子
            for(var i=0;i<yey;i++){
                gezi += `<span>${i+1}</span>`;
            }
            $('.gezi').html(gezi);
            $('.gezi span').eq(0).addClass('fen');//第一个盒子加类名          
           }
        })  
        idokd=!idokd;
    });
//    console.log(idokd);
    $('.gezi').on('click','span',function(){
        var _this = $(this);//改变下面ajax里面的this指向
        var yeshu = $(this).html();
        console.log(idokd);
        var tiao = 12;
           if(idokd){
            $.ajax({
                type:'post',
                async:true,
                data:'iye='+yeshu+'&itiao='+tiao,
                url:'../api/shengjianxu.php',
                success:function(str){
                    var att = JSON.parse(str);   
                    var res2 = att.data;
                    var aabc = ajaxjx(res2);
                    $('#ccpp').html(aabc);//替换
                //排他
                var yey = Math.ceil(att.tota/att.tiao);//总页码数
                for(var i=0;i<yey;i++){
                    $('.gezi span').removeClass('fen');//清除之前的类名
                }
                _this.addClass('fen');//点击当前哪个哪个的类名就为fen
                
                }
            })
           }else{
            $.ajax({
                type:'post',
                async:true,
                data:'iye='+yeshu+'&itiao='+tiao,
                url:'../api/list.php',
                success:function(str){
                    var att = JSON.parse(str);   
                    var res2 = att.data;
                    var aabc = ajaxjx(res2);
                $('#ccpp').html(aabc);//替换
                //排他
                var yey = Math.ceil(att.tota/att.tiao);//总页码数
                for(var i=0;i<yey;i++){
                    $('.gezi span').removeClass('fen');//清除之前的类名
                }
                _this.addClass('fen');//点击当前哪个哪个的类名就为fen
                
                }
            });
           };
            // .bink(this);
    });
                        //点击跳转页面
     
            $('#ccpp').on('click','li',function(){
                var dataId =$(this).attr("data-id");
                location.href = 'goods.html?uid='+dataId;//吧data-id传到详情页去
              
    });

})