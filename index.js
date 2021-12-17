
let itemParents = document.querySelector(".gearindex_mouth_sonsTop")
let itemMouth = document.querySelector(".itemMouth")
// navlist
let smallCont = document.querySelector(".smallCont")
let normalSeasonIntro = document.querySelector("#normalSeasonIntro")
let flagshipStore = document.querySelector("#flagshipStore")
let flagStoreImgBottom = document.querySelector(".flagStoreImgBottom")
let selectedGoodsNav = document.querySelector("#selectedGoodsNav")
let searchBossParent = document.querySelector("#searchBossParent")
$.ajax({
    url:"./js/navigation.json",
    data:{
        page:0,
        limit:2
    },
    success:function(res){
        render(res)
        localStorage.setItem("navDataTop",JSON.stringify(res))
    },
    error:function(err){
        console.log(err);
    }
})

function render(res){
         let str = "";
    res.forEach((item,index)=>{ 
       return str +=`
       <dd class="item11">
            <p><i data=${item.category} index=${item.index}>${item.name}</i><i style="color: #d5d5d5;">&gt;&nbsp;</i></p>
            <p class="smallCont">
                ${res[index].list.map((item11)=>{
                    return `<span>${item11}</span>`
                }).join("")}
            </p>
                </dd>
       `
    }
    )
    $(".navgiList").html(str);
}
// 
render2()
function render2(){
    $.ajax({
        url:"./js/nav2.json",
        success:function(res){
            let str2 = "";
            res.forEach((item,index)=>{
                return str2 +=`
                <dd>
                    <p><i data=${item.category} index=${item.index}>${item.name}</i><i style="color: #d5d5d5">&gt;&nbsp;</i></p>
                    <p>
                       ${res[index].sub.map((item2)=>{
                           return `<span>${item2}</span>`
                       }).join("")}
                    </p>
                </dd>
                `
            })
            $(".navgiList2").html(str2)
        },
        error:function(err){
            console.log(err);
        }
    })
}
// 侧边nav
$(".bankNumber").hover(
    function(){
        $(".sliderBank").css({"display":"flex"}).children().first().css({"color":"#333333"}).parent().parent()
        .css({"background":"#fb658a","color":"#ffffff"})
    },
    function(){
        $(".sliderBank").css({"display":"none"}).parent()
        .css({"background":"#ffffff","color":"#333333"})
    }
)
$(".noticePage").hover(
    function(){
        $(".sliderNotice").css({"display":"flex"}).parent()
        .css({"background":"#fb658a","color":"#ffffff"})
    },
    function(){
        $(".sliderNotice").css({"display":"none"}).parent()
        .css({"background":"#ffffff","color":"#333333"})
    }
)
$(".getIntheTruck").hover(
    function(){
        $(this).css({"background":"#fb658a","color":"#ffffff"})
    },
    function(){
        $(this).css({"background":"#ffffff","color":"#333333"})
    }
)
$(".customService").hover(
    function(){
        $(".sliderService").css({"display":"flex"}).parent()
        .css({"background":"#fb658a","color":"#ffffff"})
    },
    function(){
        $(".sliderService").css({"display":"none"}).parent()
        .css({"background":"#ffffff","color":"#333333"})
    }
)
$(".feedBack").hover(
    function(){
        $(this).css({"background":"#fb658a","color":"#ffffff"})
    },
    function(){
        $(this).css({"background":"#ffffff","color":"#333333"})
    }
)
$(".demensionalCode").hover(
    function(){
        $(".sliderCode").css({"display":"flex"}).parent()
        .css({"background":"#fb658a","color":"#ffffff"})
    },
    function(){
        $(".sliderCode").css({"display":"none"}).parent()
        .css({"background":"#ffffff","color":"#333333"})
    }
)
$(".backToTop").hover(
    function(){
        $(this).css({"background":"#fb658a","color":"#ffffff"})
    },
    function(){
        $(this).css({"background":"#ffffff","color":"#333333"})
    }
)

$(".backToTop").click(function(e){
    $("#box").animate({scrollTop:0},650)
})
// 顶部显隐
// $(window).scroll(function(){
//     var scrollY = $(document).scrollTop();
//       if(scrollY>500){
//         $("#searchBossParent").show()
//     }else{
//         $("#searchBossParent").hide()
//     }
// })

// 实力档口currentPage=1&newCount=0&traceId=
gear_mouth()
function gear_mouth(){
    $.ajax({
        url:"https://www.vvic.com/index/goodShops?city=gz",
        success:function(res){
            console.log("实力档口",res);
            let { data } = res;
            let res2 = data.good_shops;
            renderGearMouth(res2)
            localStorage.setItem("gearMouth",JSON.stringify(res2))
        },
        error:function(err){
            console.log(err);
        }
    })
}
 var num = 5;
$(".clickLeftpagi").click(function(e){
  num--; 
  if(num<1){
       num = 1;
    $(".clickLeftpagi").addClass("disabled")
  }else{
       $(".pageCountLeft").text(num);
  }
})

$(".clickRgihtpagi").click(function(e){
    if(num){

    }
})
// 实力档口默认渲染页
function renderGearMouth(res2){
    let arrMouth = res2.slice(0,5);
    let str = "";
    arrMouth.map((item,index)=>{
        return str +=`
                <li class="itemMouth" index=${index}>${item.shop_name}</li>
        `
    })
    itemParents.innerHTML = str;
}
// 实力档口点击渲染
itemParents.onclick = function(e){
    if(e.target.classList.contains("itemMouth")){
        $(".itemMouth").removeClass("active");
        e.target.classList.add("active");
        let index = e.target.getAttribute("index")
        let resImgs = JSON.parse(localStorage.getItem("gearMouth"))
        let newArr = resImgs.slice(0,5);
        console.log("实力档口",newArr);
        let str = "";
        newArr[index].items.map((item,index)=>{
            return str +=`
            <li>
            <a href="./html/item.html?${item.vid}"><img src="${item.ad_img_url}" alt=""></a>
            <p>￥${parseInt(item.discount_price)}</p>
            </li>
            `
        })
        $(".gearindex_mouth_sonsList").html(str);
    }
}

renderMouth()
function renderMouth(){
    let res = JSON.parse(localStorage.getItem("gearMouth")).slice(0,1)
    let str = "";
    console.log("渲染总部",res);
    res[0].items.map((item)=>{
        return  str+=`
        <li>
        <a href="./html/item.html?id=${item.vid}">
        <img src="${item.ad_img_url}" alt=""></a>
            <p>￥${parseInt(item.discount_price)}</p>
            </li>   
        ` 
    })
    $(".gearindex_mouth_sonsList").html(str);
}

// pagination左右键点击渲染
function renderClickCont(){

}
// 当季推荐默认渲染页
renderSeason()
function renderSeason(){
    $.ajax({
        url:"./js/normalSeason.json",
        success:function(res){
            // console.log("当季推荐大数据",res);
            let { data } = res;
            // console.log("当季推荐",data);
            normalTextRender(data)
            localStorage.setItem("normalSeason",JSON.stringify(data))
        },
        error:function(err){
            console.log(err);
        }
    })
}

function normalTextRender(data){
    // console.log("naoram",data);
    data = data.slice(0,6);
    // console.log("naoram2",data);
    let str = "";
    data.map((item,index)=>{
        return str+=`
        <li class="itemSeason" index=${index}>${item.materialList[0].shopName}</li>
        `
    })
    $(".introLeftSons").html(str);
    normalImgsRender(data)
}
function normalImgsRender(data){
    let newArr = data[0].materialList.filter((item,index)=>{
        return index>0
    })
    let str = "";
    data[0].materialList.map((item,index)=>{
        // console.log("diao",item);
        return str=`
        <dt>
        <a href="./html/item.html?id=${item.vid}">
        <img src="${item.adImgUrl}" width="100%" height="100%"></a>
        </dt>
            <dd>
                ${newArr.map((item)=>{
                    return `
                    <p>
                    <a href="./html/item.html?id=${item.vid}">
                    <img src="${item.adImgUrl}" alt="" ></a>
                    <span>￥${item.discountPrice}.00</span>
                </p>
                    `
                })}
            </dd>             
        `
    })
    $(".rightImgListss").html(str);
}

// 点击渲染
normalSeasonIntro.onclick=function(e){
    if(e.target.classList.contains("itemSeason")){
    $(".itemSeason").removeClass("activeSeasson")
    e.target.classList.add("activeSeasson")
    let index = e.target.getAttribute("index")
    let seasonImgs = localStorage.getItem("normalSeason")
        let newArr = JSON.parse(seasonImgs)
        let arr = newArr.slice(0,6);
        let sonArr = arr[index].materialList.filter((item,index)=>{
            return index>0;
        })
        console.log("arr",sonArr);
        let str = "";
        arr[index].materialList.map((item)=>{
            return str=`
            <dt>
            <a href="./html/item.html?id=${item.vid}">
            <img src="${item.adImgUrl}" width="100%" height="100%"></a>
            </dt>
                <dd>
                    ${sonArr.map((item)=>{
                        return `
                        <p><a href="./html/item.html?id=${item.vid}">
                        <img src="${item.adImgUrl}" alt="" ></a>
                        <span>￥${item.discountPrice}.00</span>
                    </p>
                        `
                    })}
                </dd>             
            `
        })
    $(".rightImgListss").html(str);
    }
}

// 旗舰店铺
renderFlagStore()
function renderFlagStore(){
    $.ajax({
        url:"https://www.vvic.com/index/flagShipShop/v2?city=gz",
        success:function(res){
          
            let { data } = res;
            console.log("旗舰商店",data);
            renderFlagShopson(data)
            localStorage.setItem("flagStoreShops",JSON.stringify(data))
        },
        error:function(err){
            console.log(err);
        }
    })
}

// 默认渲染页
function renderFlagShopson(data){
    // console.log("旗舰商店",data);
    let str = "";
    // console.log("标题",data[0][0]);
    data[0].map((item)=>{
        // console.log("旗舰商店item",item.materialList[0].shopName);
        return str=`
            <div class="flagStoreTextTop">
         <ul class="textTopparent">
         ${data[0].map((item,index)=>{
            return `<li class="storesonItem" index=${index}>${item.hotList[0].shopName}</li>`
        })}
        </ul>
        </div>
        <div class="flagStoreImgBottom">
                        <dl>
                            <dt>
                                <img src="${item.shopInfo.indexImgUrl}" alt="">
                            </dt>
                            <dd>
                            ${data[0][0].materialList.map((item,index)=>{
                                return `
                                <p><a href="./html/item.html?id=${item.vid}">
                                <img src="${item.indexImgUrl}" alt=""></a>
                                <span>￥${item.discountPrice}</span>
                            </p>
                                `
                            }).join("")}
                            </dd>
                            <dd>
                                <p class="personShops">人气商品</p>
                               <div>
                               ${data[0][0].hotList.map((item)=>{
                                   return ` <p><a href="./html/item.html?id=${item.vid}">
                                   <img src="${item.indexImgUrl}" alt=""></a>
                                   <span>
                                       <i>${item.title}</i>
                                       <i>￥${item.discountPrice}</i>
                                   </span>
                               </p>`
                               })}
                               </div>
                            </dd>
                        </dl>
        `
    })
    $("#flagshipStore").html(str);
}
// 点击渲染旗舰店
flagshipStore.onclick = function(e){
    if(e.target.classList.contains("storesonItem")){
        $(".storesonItem").removeClass("activeSeasson2")
        e.target.classList.add("activeSeasson2")
        let index = e.target.getAttribute("index")
        let storeData = JSON.parse(localStorage.getItem("flagStoreShops"))[0]
        let str = "";
        storeData[index].materialList.map((item)=>{
            return str=`
            <dl>
            <dt>
              <img src="${storeData[index].shopInfo.indexImgUrl}" alt="">
            </dt>
            <dd>
            ${storeData[index].materialList.map((item)=>{
                return `
                <p><a href="./html/item.html?id=${item.vid}">
                <img src="${item.indexImgUrl}" alt=""></a>
                <span>￥${item.discountPrice}</span>
            </p>
                `
            }).join("")}
            </dd>
            <dd>
                <p class="personShops">人气商品</p>
               <div>
               ${storeData[index].hotList.map((item)=>{
                   return ` <p><a href="./html/item.html?id=${item.vid}">
                   <img src="${item.indexImgUrl}" alt=""></a>
                   <span>
                       <i>${item.title}</i>
                       <i>￥${item.discountPrice}</i>
                   </span>
               </p>`
               })}
               </div>
            </dd>
        </dl>
            `
        })
        $(".flagStoreImgBottom").html(str);
    }
}


// 风格馆
renderStyleMuseum()
function renderStyleMuseum(){
    $.ajax({
        url:"./js/styleMuseum.json",
        success:function(res){
            // console.log("风格馆",res);  
            let { data } = res;
            localStorage.setItem("styleMuseum",data)
            let arr = data.slice(0,4);
            // console.log("风格馆首页",arr);
            renderMuseumss(arr)
        },
        error:function(err){
            console.log(err);
        }
    })
}

function renderMuseumss(data){
    // console.log("首页",data);
    // console.log("要被选择",data[0].materialList);
    let newArr = data[0].materialList.slice(1,data[0].materialList.length)
    let str = "";
    data.map((item,index)=>{
        // console.log("item风格馆",item.materialList);
        // console.log("index",index);
        return str+=`
        <li class="styleSonss">
        <article class="mainMixstyle">
         <div>
         <img src="${item.materialList[index].adImgUrl}"></div>
         <div>
           ${data[index].materialList.slice(1,data[index].materialList.length).map((item)=>{
               return `
               <p>
               <img src="${item.adImgUrl}" alt="">
               <span>
               <i style="color: #ef3664;font-size: 23px;">￥${item.discountPrice}</i>
               <i style="color: #6c6c6c;font-size: 17px;">${item.shopDesc}</i></span>
               </span></p>
               `
           }).join("")}
         </div>
          </article>
    </li>
        `
    })
    $(".stylemuseumss").html(str);
}


$(".styleSonss").mouseenter(function () {
    $(this)
        .siblings()
        .finish()
        .animate({ width: 270 })
        .end()
        .finish()
        .animate({ width: 650 })
        .children().children()
        .first().css({"width":"270px"})
})

$(".stylemuseumss").mouseleave(function () {
    $(this).children().finish().animate({ width: 270 })
    .children().children().first().css({"width":"358px"})
    .parent().parent().parent().children().eq(3).finish().css({"width":"729px"});
    
})
   
// 精选商铺
renderSelectedGoods()
function renderSelectedGoods(){
    $.ajax({
        url:"./js/selectedGoods.json",
        success:function(res){
            // console.log("精选店铺",res);
            let { data } = res;
            renderSelectedGoodsContent(data)
            localStorage.setItem("selectedGoods",JSON.stringify(data))
        },
        error:function(err){
            console.log(err);
        }
    })
}

function renderSelectedGoodsContent(data){
    let newArr = data.slice(0,6);
    // console.log("精选商铺前6个",newArr);
    // console.log("精选商品内部",newArr[0].materialList);
    let newArr2 = newArr[0].materialList.slice(2,newArr[0].materialList.length-1)
    // console.log("后3个",newArr2);
    let str = "";
    newArr.map((item)=>{
        // console.log("精选item",item);
        return str=`
        <div class="selectGoodsList">
        <ul>
           ${newArr.map((item,index)=>{
               return ` <li><a class="selectedSonss" index=${index}>${item.materialList[0].shopName}</a></li>`
           }).join("")}
        </ul>
    </div>
     <div class="selectedGoodsCont">
         <dl>
             <dd>
             <video width="100%" height="100%" controls>
             <source src="${item.materialList[0].adVideoUrl}"  type="video/mp4">
             </video>
             </dd>
             <dd>
                 <div><a href="./html/item.html?id=${item.vid}">
                     <img src="${item.materialList[1].adImgUrl}"></a>
                 </div>
                 <div>
                   ${newArr2.map(item=>{
                       return `  <p><a href="./html/item.html?id=${item.vid}">
                       <img src="${item.adImgUrl}" alt=""></a>
                       <span>￥${item.discountPrice}.00</span>
                   </p>`
                   }).join("")}
                 </div>
             </dd>
             <dd>
                 <p><a href="./html/item.html?id=${item.vid}">
                     <img src="${item.materialList[5].adImgUrl}"></a>
                 </p>
                 <p>
                    <button>进入商铺</button>
                 </p>
             </dd>
         </dl>
     </div>
        `
    })
    $("#selectedGoodsNav").html(str);   
}
// 点击渲染
selectedGoodsNav.onclick = function(e){
    if(e.target.classList.contains("selectedSonss")){
        $(".selectedSonss").removeClass("activeSelectGoods")
        e.target.classList.add("activeSelectGoods")
        let index = e.target.getAttribute("index")
        let data = JSON.parse(localStorage.getItem("selectedGoods")).slice(0,6)
        // console.log("点击后精选的内容",data);
        // 中间3个图片
        let newArr = data[index].materialList.slice(2,5)
        let str = "";
        data[index].materialList.map((item)=>{
            // console.log("点击后的内容",item);
            // console.log("index",index);
            return str=`
         <div class="selectedGoodsCont">
             <dl>
                 <dd>
                 <video width="100%" height="100%" controls>
                 <source src="${item.adVideoUrl}"  type="video/mp4">
                 </video>
                 </dd>
                 <dd>
                     <div><a href="./html/item.html?id=${item.vid}">
                     <img src="${data[index].materialList[1].adImgUrl}"></a>
                     </div>
                     <div>
                       ${newArr.map(item=>{
                           return `  <p><a href="./html/item.html?id=${item.vid}">
                           <img src="${item.adImgUrl}" alt=""></a>
                           <span>￥${item.discountPrice}.00</span>
                       </p>`
                       }).join("")}
                     </div>
                 </dd>
                 <dd>
                     <p><a href="./html/item.html?id=${item.vid}">
                         <img src="${data[index].materialList[5].adImgUrl}"></a>
                     </p>
                     <p>
                        <button>进入商铺</button>
                     </p>
                 </dd>
             </dl>
         </div>
            `
        }).join("")
        $(".selectedGoodsCont").html(str);
    }
}

// 热门商品
renderHotShops()
function renderHotShops(){
    $.ajax({
        url:"https://www.vvic.com/index/hotItems?city=gz",
        success:function(res){
            console.log("热门商品",res);
            let { data } = res;
            let datas = data.hot_items;
            console.log("热门商品内容",datas);
            renderHotShopsCont(datas)
            localStorage.setItem("hotShops",data.hot_items)
        },
        error:function(err){
            console.log(err);
        }
    })
}

function renderHotShopsCont(data){
    let str = "";
    data.map((item)=>{
        return str+=`
        <li class="hotShopsList"><a href="./html/item.html?id=${item.vid}">
        <img src="${item.ad_img_url}" alt=""></a>
        <div><p>￥${item.price}</p>
        <p>${item.bname}</p></div>
    </li> 
        `
    })
    $(".hotShopListParent").html(str);
}

// 猜你喜欢
renderGuessYourFavorite()
function renderGuessYourFavorite(){
    $.ajax({
        url:"./js/guessYourLike.json",
        success:function(res){
            console.log("猜你喜欢",res);
            let { data } = res;
            let datas = data.guess_you_like;
            console.log("猜你喜欢itm",datas);
            renderYourLikeContent(datas)
            localStorage.setItem("guessYourLike",datas)
        },
        error:function(err){
            console.log(err);
        }
    })
}
function renderYourLikeContent(data){
    let str = "";
    data.map((item)=>{
        return str+=`
        <li><a href="./html/item.html?id=${item.vid}">
          <img src="${item.index_img_url}" alt=""></a>
         <p>￥${item.discount_price}</p>
          <p>
              <span><img src="//src.vvic.com/statics/v2/css/img/slzz/slzz-item.png" alt>&nbsp;${item.shop_name}</span><span>${item.art_no}#</span>
          </p>
     </li>
        `
    })
    $(".guessYourList").html(str);
}
// 
//   // 封装上一页，下一页
//   function previouPage(){}
// function nextPages(){}
// // 划过显现渲染
// console.log("navsss",$(".item11"));
// $(".navgiList").click(function(e){
//     console.log("e.target",e.target);
//     if(e.target.classList.contains("item11")){
//         $(".leftActiveCont").show()
//     }else{
//         $(".leftActiveCont").hide()
//     }
// })
