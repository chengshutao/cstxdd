$(function(){
    // var ress = encodeURI(location.search).slice(1);//取网站的后面进行切割
    // var arra=ress.split('=');//切成数组 
    // var bb = arra[1];//选中他的第二个  就是你在列表页传过来的data-id
    var nnmae = getCookie('name');
    var psww = getCookie('psw');//取到cooki证明已经登录了
    var add= 'add';//增加数量
    var update = 'update';//减少数量
    var dele= 'dele';//删除一整行
    var deldeall = 'deldeall';//清空购物车
    var xiaoji = 'xiaoji';
    // var yonghum = getCookie('name');//拿到登录页面传来的cookies
	console.log(nnmae);
	   if(nnmae){
			 $('.logingg').css('display','none');
			 $('.zz').css('display','inline-block');
			 $('.yonhu').css('display','inline-block');
			 $('.yonhus').html(nnmae);
				 
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
    // var 
        if(psww){
            $('.mydenglu').hide();
            $.ajax({
                type:'post',
                async:true,
                url:'../api/car.php',
                success:function(str){
                    var arr = JSON.parse(str);
                    // console.log(arr);
                    var res = arr.map(function(item){
                        return `              
                                    <table class="cart_goods_area" id="tbcart">
                                            <tbody>
                                                <tr class="go" data-id="${item.gid}">
                                                    <td class="cb_1">
                                                        <input type="checkbox" id="che1">
                                                    </td>
                                                    <td class="cb_2">
                                                        <img src="${item.img1}" alt="">
                                                    </td>
                                                    <td class="cb_3">
                                                        <a style="color:#06c;margin-left: 4px;" href="javascript:;"> 
                                                        ${item.nam}
                                                            </a>
                                                    </td>
                                                    <td class="cb_4">
                                                        <span>¥ ${item.price}</span>
                                                    </td>
                                                   
                                                    <td class="cb_6">
                                                        <span class="cutnum fl">-</span>
                                                        <input type="text" value="${item.num}" maxlength="4" class="nownum fl">
                                                        <span class="addnum fl">+</span>
                                                    </td>
                                                    <td class="cb_7">
                                                        <span id="sum" class="cs_sum">
                                                            <b class="pr">¥ ${item.xiaoji}</b>
                                                        </span>
                                                    </td>
                                                    <td class="cb_8">
                                                        
                                                        <span class="del_opt"><a href="javascript:;"> <img src="../images/dele.png" alt=""></a></span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        
                               
                        
                        `;
                    }).join('');
                    $('.sd').html(nnmae);
                        //渲染
                              $('#card_goods').html(res);  
                             // 绑定事件
                                $('#card_goods').on('keyup', '.nownum', function () {
                                    goodTotal($(this));
                                });                       
                                // 删除当行
                                $('#card_goods').on('click', '.del_opt', function () {
                                    var res = confirm('您确定要删除吗？');
                                    if (res) {
                                        $(this).parent().parent().remove();
                                        var gid = $(this).parent().parent().attr('data-id');                                     
                                        jia1(dele,gid);                                        
                                    }
                                    quanbu();
                                });
                                //增加数量
                                $('#card_goods').on('click', '.addnum', function () {
                                    var num = $(this).prev().val() * 1;
                                    num++;
                                    if (num >= 100) {
                                        num = 100;
                                    }
                                    $(this).prev().val(num);//赋值	
                                    goodTotal($(this));
                                    var gid = $(this).parent().parent().attr('data-id');//获取data-id
                                    var xiaoji = $(this).parent().next().children().children().html().slice(2);//获取小计
                                    jia1(add,gid,num,xiaoji);
                                });
                                //减少数量
                                $('#card_goods').on('click', '.cutnum', function () {
                                    var num = $(this).next().val() * 1;
                                    num--;
                                    if (num <= 1) {
                                        num = 1;
                                    }
                                    $(this).next().val(num);//赋值                                 
                                    goodTotal($(this));
                                    var gid = $(this).parent().parent().attr('data-id');
                                    var xiaoji = $(this).parent().next().children().children().html().slice(2);//获取小计
                                    jia1(update,gid,num,xiaoji);
                                });

                                //小计的改变
                                function goodTotal(now) {
                                    var num = now.parent().find('input').val() * 1;	//商品数量
                                    var price = now.parent().prev().children().text().slice(1);//单价
                                    var totalPrice = (num * price).toFixed(2);	//总价
                                    now.parent().next().children().children().html('￥ ' + totalPrice);
                                    quanbu();
                                   
                                };                                                                          
                                // 全选不选
                                $('.dele_box input').on('click', function () {
                                    if ($('.dele_box input').prop('checked')) {
                                        //全选
                                        $('.cb_1 input').prop('checked', true);
                                    } else {
                                        //全部选
                                        $('.cb_1 input').prop('checked', false);
                                    }
                                    quanbu();
                                });
                                //全选
                                $('.cb_1 input').on('click', function () {
                                    var checkLe = $('.cb_1 input:checked').size();
                                    if (checkLe == $('.cb_1 input').size()) {
                                        $('.dele_box input').prop('checked', true);
                                    } else {
                                        $('.dele_box input').prop('checked', false);
                                    }
                                    quanbu();
                                });                       
                                // 总数量和总价的更新
                                var arr = [];//定义一个空的素组用来存你选取过的input的下标
                                function quanbu() {
                                    arr = [];//把小标存起来
                                    $('.cb_1 input').each(function (i, item) {
                                        if ($('.cb_1 input').eq(i).prop('checked')) {
                                            arr.push(i);//把点击过的下标都存到上面那个数组
                                        }
                                    });
                                    var num = 0;
                                    var priceAll = 0;//总金额的初始
                        
                                    arr.forEach(function (item) {//循环获取所有小计
                                        num += $('.nownum').eq(item).val() * 1;
                                        priceAll += ($('.pr').eq(item).text().slice(1)) * 1;
                        
                                    });                      
                                    $('.gw').html(num);
                                    $('#playmoney').html('￥' + priceAll);
                                };                                               
                               // 选中那个删除哪个
                                $('.de_a').on('click', function () {
                                    var res = confirm('您确定要删除你选定的商品吗？');
                                    if (res) {
                                        for (var i = arr.length - 1; i >= 0; i--) {	
                                            // $('.go').eq(arr[i]).remove();
                                            var a =$('.go').eq(arr[i]).attr('data-id');
                                              jia1(dele,a);
                                        }
                                       
                                    }
                                    arr = [];
                                    allNum();
                                });
                                    $('#tbcart').on('click','.de_a',function(){
                                            if($('.cart_goods_area input').prop('checked')==true){
                                                console.log('222');
                                            }else{
                                                console.log('111');
                                            }
                                    });
                                // 清空购物车
                                $('.de_clear').on('click', function () {
                                    var res = confirm('你确定要清除购物车吗？');
                                    if (res) {
                                        for (var i = arr.length; i >= 0; i--) {
                                            $('.go').remove();
                                        }
                                        var gid = $(this).parent().parent().attr('data-id');
                                        jia1(deldeall,gid);
                                    }
                                    arr = [];
                                    quanbu();
                                });
                          
                }///
                       
             });
        
        }else{
            // $('.mydenglu').show();
            alert('要先登陆完才可以加入购物车')
        }
        function jia1(b,a,nu,xiaoji){
            $.ajax({
                type:'post',
                async:true,
                data:'zt='+b+'&id='+a+'&num='+nu+'&xiaoji='+xiaoji,
                url:'../api/updatecar.php',
                success:function(str){
                        console.log(str);
                }
            });
           
    };
})