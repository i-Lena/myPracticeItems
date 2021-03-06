/**
 * Created by Nana on 2017/6/28.
 */
/*
 * 自己的JS脚步
 * @Author: ilena
 * @Date:   2017-06-28 10:59:26
 * @Last Modified by:   ilena
 * @Last Modified time: 2017-07-04 11:01:38
 */

'use strict';
//$(function () {
    //当文档加载完成才会执行
    /**
     * 根据屏幕的变化决定轮播图片应该展示什么
     * @return{[type]}[description]
     * **/
//     function resize() {
//         //获取屏幕宽度
//         var windowWidth = $(window).width;
//         //判断屏幕大小
//         var isSmallScreen = windowWidth < 768;
//         //根据大小为界面上的每一张轮播图设置背景
//         // $("#ad-slider > .carousel-inner > .item")  //获取到的是一个DOM数组（多个元素）
//         $("#ad-slider > .carousel-inner > .item").each(function (i, item) {
//             //因为拿到的是DOM对象，需要转换
//             var $item = $(item);
//             var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
//             //设置背景图片
//             // $item.css("backgroundImage","url(" + imgSrc + ")");
//             $item.css('backgroundImage', 'url("' + imgSrc + '")');
//             //
//             //因为我们需要小图时，尺寸比例变化，所以小图时我们使用img 方式
//             if(isSmallScreen){
//                 $item.html('<img src="' + imgSrc + '" alt="" />');
//             }else {
//                 $item.empty();
//             }
//         });
//     }
//     // $(window).on("resize",resize);
//     //让window对象立即触发一下resize
//     // $(window).trigger('resize');
//
//     $(window).on('resize',resize).trigger('resize');
// })


$(function() {
        // 当文档加载完成才会执行
        /**
         * 根据屏幕宽度的变化决定轮播图片应该展示什么
         * @return {[type]} [description]
         */
        function resize() {
            // 获取屏幕宽度
            var windowWidth = $(window).width();
            // 判断屏幕属于大还是小
            var isSmallScreen = windowWidth < 768;
            // 根据大小为界面上的每一张轮播图设置背景
            // $('#main_ad > .carousel-inner > .item') // 获取到的是一个DOM数组（多个元素）
            $('#ad-slider > .carousel-inner > .item').each(function(i, item) {
                // 因为拿到是DOM对象 需要转换
                var $item = $(item);
                // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
                var imgSrc =
                    isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

                // jQuery方式
                // $element.data()
                // 是一个函数 ，专门用于取元素上的自定义属性（data-abc）
                // 函数的参数是我们要取得属性名称（abc）
                //
                // $element.attr('data-abc')
                //
                // JS中的写法
                // element.dataset['abc']
                //
                // element.getAttribute('data-abc')
                // element.setAttribute('data-abc','')

                // 设置背景图片
                $item.css('backgroundImage', 'url("' + imgSrc + '")');
                //
                // 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
                if (isSmallScreen) {
                    $item.html('<img src="' + imgSrc + '" alt="" />');
                } else {
                    $item.empty();
                }
            });
        }
        // $(window).on('resize', resize);
        // // 让window对象立即触发一下resize
        // $(window).trigger('resize');


        $(window).on('resize', resize).trigger('resize');

        //==============  初始化tooltips插件   =================
        $('[data-toggle="tooltip"]').tooltip();

    //    控制标签页的标签容器宽度
        var $ulContainer = $('.nav-tabs');
    //    获取所有子元素的宽度和
        var width = 30;  //因为原本ul上有padding-left
    //  遍历子元素
        $ulContainer.children().each(function (index,element) {
            width += element.clientWidth;
        });
    //    此时width等于所有li的宽度总和
    // 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
        if(width > $(window).width()){
            $ulContainer.css("width",width)
                .parent().css('overflow-x','scroll');
        }
    //==============  /初始化tooltips插件   =================
    //============    新闻列表中每个a注册点击事件   =============
        var $newsTitle = $('.news-title');
        $("#news .nav-pills a").on('click',function () {
        //    获取当前点击元素
            var $this = $(this);
        //    获取对应的title值
            var title = $this.data('title');
        //    将title设置到相应的位置
            $newsTitle.text(title);
        });
    //============    /新闻列表中每个a注册点击事件   =============

    //===============  轮播图左滑右滑  ====================

      //1.获取手指在轮播图元素上的滑动方向（左右）

    //获取界面上说的轮播图容器
    var $carousels = $(".carousel");
    var startX, endX;
    var offset = 50;
    //注册滑动事件
    $carousels.on('touchstart',function (e) {
        // 手指触摸开始时记录一下手指所在的坐标X
        startX = e.originalEvent.touches[0].clientX;
        // console.log(startX);
    });
    $carousels.on("touchmove",function (e) {
        // 结束触摸一瞬间最后的手指所在的坐标X
        endX = e.originalEvent.touches[0].clientX;
        // console.log(endX);
    });
    $carousels.on('touchend',function (e) {
        //比较大小
        //控制精度
        //获取每次运动的距离，当距离大于一定值时认为是方向有变化
        var distance = Math.abs(startX - endX);
        if (distance > offset){
            //有方向变化
            // console.log(startX > endX ? '←':'→');
            //2.根据获得到的方向选择上一张或下一张
            $(this).carousel(startX > endX ? 'next':'prev');
        }
    });


    //===============  /轮播图左滑右滑  ====================

    });
