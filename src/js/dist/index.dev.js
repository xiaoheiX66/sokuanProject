"use strict";

var itemParents = document.querySelector(".gearindex_mouth_sonsTop");
var itemMouth = document.querySelector(".itemMouth"); // navlist

var smallCont = document.querySelector(".smallCont");
$.ajax({
  url: "./js/navigation.json",
  data: {
    page: 0,
    limit: 2
  },
  success: function success(res) {
    render(res);
    localStorage.setItem("navDataTop", JSON.stringify(res));
  },
  error: function error(err) {
    console.log(err);
  }
});

function render(res) {
  var str = "";
  res.forEach(function (item, index) {
    return str += "\n       <dd class=\"item11\">\n            <p><i data=".concat(item.category, " index=").concat(item.index, ">").concat(item.name, "</i><i style=\"color: #d5d5d5;\">&gt;&nbsp;</i></p>\n            <p class=\"smallCont\">\n                ").concat(res[index].list.map(function (item11) {
      return "<span>".concat(item11, "</span>");
    }).join(""), "\n            </p>\n                </dd>\n       ");
  });
  $(".navgiList").html(str);
} // 


render2();

function render2() {
  $.ajax({
    url: "./js/nav2.json",
    success: function success(res) {
      var str2 = "";
      res.forEach(function (item, index) {
        return str2 += "\n                <dd>\n                    <p><i data=".concat(item.category, " index=").concat(item.index, ">").concat(item.name, "</i><i style=\"color: #d5d5d5\">&gt;&nbsp;</i></p>\n                    <p>\n                       ").concat(res[index].sub.map(function (item2) {
          return "<span>".concat(item2, "</span>");
        }).join(""), "\n                    </p>\n                </dd>\n                ");
      });
      $(".navgiList2").html(str2);
    },
    error: function error(err) {
      console.log(err);
    }
  });
} // 实力档口currentPage=1&newCount=0&traceId=


gear_mouth();

function gear_mouth() {
  $.ajax({
    url: "https://www.vvic.com/index/goodShops?city=gz",
    success: function success(res) {
      console.log("实力档口", res);
      var data = res.data;
      var res2 = data.good_shops;
      renderGearMouth(res2);
      localStorage.setItem("gearMouth", JSON.stringify(res2));
    },
    error: function error(err) {
      console.log(err);
    }
  });
}

var num = 5;
$(".clickLeftpagi").click(function (e) {
  num--;

  if (num < 1) {
    num = 1;
    $(".clickLeftpagi").addClass("disabled");
  } else {
    $(".pageCountLeft").text(num);
  }
});
$(".clickRgihtpagi").click(function (e) {
  if (num) {}
}); // 实力档口默认渲染页

function renderGearMouth(res2) {
  var arrMouth = res2.slice(0, 5);
  var str = "";
  arrMouth.map(function (item, index) {
    return str += "\n                <li class=\"itemMouth\" index=".concat(index, ">").concat(item.shop_name, "</li>\n        ");
  });
  itemParents.innerHTML = str;
} // 实力档口点击渲染


itemParents.onclick = function (e) {
  if (e.target.classList.contains("itemMouth")) {
    $(".itemMouth").removeClass("active");
    e.target.classList.add("active");
    var index = e.target.getAttribute("index");
    var resImgs = JSON.parse(localStorage.getItem("gearMouth"));
    var newArr = resImgs.slice(0, 5);
    var str = "";
    newArr[index].items.map(function (item, index) {
      return str += "\n            <li><img src=\"".concat(item.ad_img_url, "\" alt=\"\">\n            <p>\uFFE5").concat(parseInt(item.discount_price), "</p>\n            </li>\n            ");
    });
    $(".gearindex_mouth_sonsList").html(str);
  }
};

renderMouth();

function renderMouth() {
  var res = JSON.parse(localStorage.getItem("gearMouth")).slice(0, 1);
  var str = "";
  console.log("渲染总部", res);
  res[0].items.map(function (item) {
    return str += "\n        <li><img src=\"".concat(item.ad_img_url, "\" alt=\"\">\n            <p>\uFFE5").concat(parseInt(item.discount_price), "</p>\n            </li>   \n        ");
  });
  $(".gearindex_mouth_sonsList").html(str);
} // pagination左右键点击渲染


function renderClickCont() {} // 当季推荐默认渲染页


renderSeason();

function renderSeason() {
  $.ajax({
    // url:"https://www.vvic.com/recommend/index/season?city=gz",
    url: "/api/recommend/index/style?city=gz",
    success: function success(res) {
      console.log("当季推荐大数据", res);
    },
    error: function error(err) {
      console.log(err);
    }
  });
} //   // 封装上一页，下一页
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