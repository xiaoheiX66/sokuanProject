"use strict";

var loupeBox = document.querySelector(".loupeBox");
var loupeShow = document.querySelector(".loupeShow");
var loupeMask = document.querySelector(".loupeMask");
var loupeList = document.querySelector(".loupeList");
var loupeEnlarge = document.querySelector(".loupeEnlarge");
/* 鼠标在show中的移入移出事件 */

loupeShow.onmouseover = function (e) {
  loupeMask.style.display = loupeEnlarge.style.display = "block";
};

loupeShow.onmouseout = function (e) {
  loupeMask.style.display = loupeEnlarge.style.display = "none";
};
/* 鼠标在show中的move事件 */


loupeShow.onmousemove = function (e) {
  var ex = e.pageX;
  var ey = e.pageY; // console.log(ex, ey);

  var left = ex - loupeBox.offsetLeft - loupeMask.clientWidth / 2;
  var top = ey - loupeBox.offsetTop - loupeMask.clientHeight / 2; // 边界检测

  left = left < 0 ? 0 : left;
  left = left > loupeShow.clientWidth - loupeMask.clientWidth ? loupeShow.clientWidth - loupeMask.clientWidth : left;
  top = top < 0 ? 0 : top;
  top = top > loupeShow.clientHeight - loupeMask.clientHeight ? loupeShow.clientHeight - loupeMask.clientHeight : top;
  /* 设置mask的位置 */

  loupeMask.style.left = left + "px";
  loupeMask.style.top = top + "px";
  /* 计算enlarge的background-position */

  loupeEnlarge.style.backgroundPosition = "".concat(-loupeEnlarge.clientWidth / loupeMask.clientWidth * left, "px \n            ").concat(-loupeEnlarge.clientHeight / loupeMask.clientHeight * top, "px");
};
/* list中p的点击事件 */
// 遍历list中的所有p 一一给每个P设置点击事件


for (var i = 0; i < loupeList.children.length; i++) {
  loupeList.children[i].onclick = function (e) {
    //不用i
    // 取消所有p的active
    for (var j = 0; j < loupeList.children.length; j++) {
      loupeList.children[j].className = "";
    } // 设置当前p为active


    this.className = "loupeActive"; // 从当前p中的img中拿到showImg enlargeImg

    var showImg = this.children[0].getAttribute("showImg");
    var enlargeImg = this.children[0].getAttribute("enlargeImg"); // 分别丢给show中的图片的src 和enlarge的背景

    loupeShow.children[0].src = showImg;
    loupeEnlarge.style.backgroundImage = "url(".concat(enlargeImg, ")");
  };
}

function getStyle(element, attr) {
  return window.getComputedStyle(element)[attr];
}