/**
 * Created by Nana on 2017/7/8.
 */
window.onload = function () {
    search();
    secondKill();
};

//=================  头部搜索  ===================
var search = function () {
//    搜索框对象
    var search = document.getElementsByClassName("jd_header_box")[0];
//    banner对象
    var  banner = document.getElementsByClassName("jd_banner")[0];
//    高度
    var height = banner.offsetHeight;

    window.onscroll = function () {
      var top = document.body.scrollTop;
    //  当滚动高度大于banner的高度时颜色不变
        if(top > height){
            search.style.background = "rgba(201,21,35,0.85)";
        }else{
            var op = top/height * 0.85;
            search.style.background = "rgba(201,21,35,"+ op +")";
        }
    };
}
//=================  /头部搜索  ===================

//=================  秒杀倒计时  ===================
var secondKill = function () {
  // 父盒子
    var parentTime = document.getElementsByClassName("ms_time")[0];
//    span 时间
    var timeList = parentTime.getElementsByClassName("num");

    // console.log(timeList.length);

    var times = 4 * 60 * 60;
    setInterval(function () {
       times --;

       var h = Math.floor(times/(60*60));
       var m = Math.floor(times/60%60);
       var s = times % 60;

       timeList[0].innerHTML = h>10?Math.floor(h/10):0;
       timeList[1].innerHTML = h%10;

       timeList[2].innerHTML = m>10?Math.floor(m/10):0;
       timeList[3].innerHTML = m%10;

       timeList[4].innerHTML = s>10?Math.floor(s/10):0;
       timeList[5].innerHTML = s%10;

    },1000);
};
//=================  /秒杀倒计时  ===================