function Enlarger(box) {
    console.log("Enlarger constructor");

    // 接收所有成员
    this.box = box;

    // 把所有的元素都找到并赋值
    this.show = this.box.querySelector(".show");
    this.mask = this.box.querySelector(".mask");
    this.list = this.box.querySelector(".list");
    this.enlarge = this.box.querySelector(".enlarge");

    // 初始化
    this.init();
}

/* 初始化：绑定4个事件 */
Enlarger.prototype.init = function () {
    console.log("init");

    // 事件外边的this指的Enlarger实例
    // 事件内的this指的是事件源
    // 先将Enlarger实例这个this保存下来
    const thisEnlarger = this;

    /* 鼠标在show中的移入移出事件 */
    this.show.onmouseover = function (e) {
        thisEnlarger.mask.style.display = thisEnlarger.enlarge.style.display = "block";
    };

    this.show.onmouseout = function (e) {
        thisEnlarger.mask.style.display = thisEnlarger.enlarge.style.display = "none";
    };

    /* 鼠标在show中的move事件 */
    this.show.onmousemove = function (e) {
        const ex = e.pageX;
        const ey = e.pageY;
        console.log(ex, ey);

        let left = ex - thisEnlarger.box.offsetLeft - thisEnlarger.mask.clientWidth / 2;
        let top = ey - thisEnlarger.box.offsetTop - thisEnlarger.mask.clientHeight / 2;

        // 边界检测
        left = left < 0 ? 0 : left;
        left =
            left > thisEnlarger.show.clientWidth - thisEnlarger.mask.clientWidth
                ? thisEnlarger.show.clientWidth - thisEnlarger.mask.clientWidth
                : left;
        top = top < 0 ? 0 : top;
        top =
            top > thisEnlarger.show.clientHeight - thisEnlarger.mask.clientHeight
                ? thisEnlarger.show.clientHeight - thisEnlarger.mask.clientHeight
                : top;

        /* 设置mask的位置 */
        thisEnlarger.mask.style.left = left + "px";
        thisEnlarger.mask.style.top = top + "px";

        /* 计算enlarge的background-position */
        thisEnlarger.enlarge.style.backgroundPosition = `${
            (-thisEnlarger.enlarge.clientWidth / thisEnlarger.mask.clientWidth) * left
        }px ${(-thisEnlarger.enlarge.clientHeight / thisEnlarger.mask.clientHeight) * top}px`;
    };

    /* list中p的点击事件 */
    // 遍历list中的所有p 一一给每个P设置点击事件
    for (let i = 0; i < this.list.children.length; i++) {

        this.list.children[i].onclick = function (e) {

            // 取消所有p的active
            for (let j = 0; j < thisEnlarger.list.children.length; j++) {
                thisEnlarger.list.children[j].className = "";
            }

            // 设置当前p为active
            // 这里的this就是点击的P元素
            this.className = "active";

            // 从当前p中的img中拿到showImg enlargeImg
            const showImg = this.children[0].getAttribute("showImg");
            const enlargeImg = this.children[0].getAttribute("enlargeImg");

            // 分别丢给show中的图片的src 和enlarge的背景
            thisEnlarger.show.children[0].src = showImg;
            thisEnlarger.enlarge.style.backgroundImage = `url(${enlargeImg})`;
        };

    }
};

function getStyle(element, attr) {
    return window.getComputedStyle(element)[attr];
}
