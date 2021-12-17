
window.onload = function(){
    let res = location.search.match(/\?id=(\w+)/);
    console.log("id=",res);
    let id = res[1];
    $.ajax({
        url:`https://www.vvic.com/ads/itemdetail/${id}`,
        success:function(res){
            // console.log("商品详情数据",res);
            let { data } = res;
            console.log("data",data);
            let newArr = data.ads.slice(0,19)
            console.log("newarr",newArr);
            renderList(newArr)
        },
        error:function(err){
            console.log(err);
        }
    })

    function renderList(data){
        let str = ""
        data.map((item)=>{
            // console.log("右侧数据",item);
            return str=`
            <section class="footer_topCont">
            <div style="height: 41px;"><p>当前位置：&nbsp;首页&nbsp;&lt;&nbsp;女装&nbsp;&lt;&nbsp;上装/外套&nbsp;&lt;&nbsp;蕾丝衫/雪雪雪</p></div>
        </section>
        <section class="footer_bottomCont">
            <div class="footerLeftContss">
               <div class="footerLeftindomCont">
                   <article>
                       <div></div>
                       <div>
                           <p><span><i class="iconfont icon-jushoucang"></i>&nbsp;收藏</span><span><i class="iconfont icon-zhangdan"></i>&nbsp;加入拿货单</span></p>
                           <p>投诉/举报</p>
                       </div>
                   </article>
                   <article>
                       <dl>
                           <dd>${item.title}</dd>
                           <dd><span>批发价</span><span>￥${item.discount_price}</span></dd>
                           <dd><span><i style="width: 45px;">货号</i><i style="margin-left: 46px;">${item.position}#</i></span><span><i style="width: 72px;text-align: center;margin-left: 24px;">上新时间</i><i style="margin-left: 22px;">2021-12-16-21:00:06</i></span></dd>
                           <dd>
                               <span>销量：4</span>
                               <span>上款量：88</span>
                               <span>收款量：18</span>
                           </dd>
                           <dd>
                               <span>颜色</span><span><i>粉红色</i><i>玫紫色</i></span>
                           </dd>
                           <dd>
                               <div>
                                   <p>
                                       <span>尺码</span><span>L</span><span>59</span><span>
                                           <i class="iconfont icon-checkbox-minus-full"></i><i style="font-size: 17px;text-align: center;background-color: #ffffff;color: black;">&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;</i><i class="iconfont icon-jiahao"></i>
                                       </span>
                                   </p>
                                   <p><span></span><span>XL</span><span>59</span><span>
                                    <i class="iconfont icon-checkbox-minus-full"></i><i style="font-size: 17px;text-align: center;background-color: #ffffff;color: black;">&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;</i><i class="iconfont icon-jiahao"></i>
                                   </span></p>
                                   <p><span></span><span>2XL</span><span>59</span><span>
                                    <i class="iconfont icon-checkbox-minus-full"></i><i style="font-size: 17px;text-align: center;background-color: #ffffff;color: black;">&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;</i><i class="iconfont icon-jiahao"></i>
                                   </span></p>
                                   <p><span></span><span>3XL</span><span>59</span><span>
                                    <i class="iconfont icon-checkbox-minus-full"></i><i style="font-size: 17px;text-align: center;background-color: #ffffff;color: black;">&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;</i><i class="iconfont icon-jiahao"></i>
                                   </span></p>
                                   <p><span></span><span>4XL</span><span>59</span><span>
                                    <i class="iconfont icon-checkbox-minus-full"></i><i style="font-size: 17px;text-align: center;background-color: #ffffff;color: black;">&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;</i><i class="iconfont icon-jiahao"></i>
                                   </span></p>
                               </div>
                           </dd>
                           <dd>
                               <div class="bottomContss">
                                   <p>
                                       <span>上款</span><span>一键上传</span><span>数据包</span><span>图片/视频下载</span>
                                   </p>
                                   <p>
                                       <span>进货</span><span>加入进货车</span>
                                   </p>
                                   <p>
                                       <span>发货</span><span>搜款网代发</span>
                                   </p>
                                   <p>
                                       <span>服务</span><span><i style="background-color: #ffb500;color: #ffffff;">实</i>&nbsp;实拍</span><span><i style="background-color: #ff8679;color: #ffffff;">退</i>&nbsp;退</span><span><i style="background-color: #59c0da;color: #ffffff;">发</i>&nbsp;48小时发货</span>
                                   </p>
                                   <i class="iconfont icon-erweima" style="position: absolute;right: 15px;bottom: 0;font-size: 22px;"></i>
                               </div>
                           </dd>
                       </dl>
                   </article>
               </div>
            </div>
            <div class="footerRightContss">
                <article>
                    <dl class="indomTextmix">
                        <dd><p style=" color: #333333; font-size: 19px;display: flex;align-items: center;">亮点魅力服饰实拍店</p></dd>
                        <dd><p style="color: #ffffff;"><i style="width: 42px;height: 19px;background-color: #ff361a;border-radius: 5px;">首发</i>&nbsp;
                            <i style="width: 55px;height: 19px;background-color: #ff6c00;border-radius: 5px;">店/3年</i></p></dd>
                        <dd><p>排行：<i style="color: #333333;">第<b style="color: #ef3664;font-weight: lighter;">714</b>名</i></p></dd>
                        <dd><p>旺旺：liangdianmeili</p></dd>
                        <dd><p>商品：163款</dd>
                        <dd><p>电话：13923081211，135333</p></dd>
                        <dd><p>微信：chen004401</p></dd>
                        <dd><p>QQ&nbsp;：1436541606</p></dd>
                        <dd><p>产地：广东省&nbsp;广州</p></dd>
                        <dd><p>地址：女人街&nbsp;9楼&nbsp;912-A&nbsp;<i class="iconfont icon-weizhi"></i></p></dd>
                        <dd>
                            <p>进入档口</p>
                            <p>关注档口</p>
                        </dd>
                    </dl>
                </article>
                <article class="rightContsList">
                    <ul>
                        <p style="font-size: 18px;">推荐商品</p>
                       
                       ${data.map((item)=>{
                           return `
                            <li>
                        <img src="${item.index_img_url}" alt="">
                        <p><span>￥${item.discount_price}</span><span>${item.shop_name}</span></p>
                    </li>
                           `
                       }).join("")}
                    </ul>
                </article>
            </div>
        </section>
            `
        })
        $("#footerBoss").html(str);
    }
}
