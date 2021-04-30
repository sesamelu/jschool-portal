$(function () {
    //获取要定位元素距离浏览器顶部的距离,修改之处在于，应该是Y方向的距离。
    var navH = $("#fixedNav").offset().top;
    var topH = $("#topWrapper").offset().top;

    $(window).resize(function () {   //当浏览器大小变化时
        var viewWidth = $(window).width();
        console.log('viewWidth', viewWidth);
        if (1100 <= viewWidth) {//大视口情况
            //获取滚动条的滑动距离
            var scroH = $(this).scrollTop();
            //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
            if (scroH >96) {
                $("#topWrapper").attr('class', "school-top-wrapper-middle");
                console.log("主屏幕固定", scroH, navH);
                $("#fixedNav").addClass("is-stick");
            } else if (scroH <= 96) {
                console.log("主屏幕取消固定", scroH, navH);
                $("#fixedNav").removeClass("is-stick");

            }
        }else{
            var scroSmallH = $(this).scrollTop();
            //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
            if (scroSmallH > 0) {
                //底层元素固定
                $("#fixedNav").attr('class', "school-nav-content");
                $("#topWrapper").addClass("is-stick-middle");
            } else if (scroSmallH <= 0) {
                $("#topWrapper").removeClass("is-stick-middle");
            }
        }

    });
    //滚动条事件
    $(window).scroll(function () {
        var viewWidth = $(window).width();
        console.log('viewWidth', viewWidth);
        if (1100 >= viewWidth) {//小视口情况
            //获取滚动条的滑动距离
            var scroSmallH = $(this).scrollTop();
            //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
            if (scroSmallH > 0) {
                //底层元素固定
                $("#fixedNav").attr('class', "school-nav-content");
                $("#topWrapper").addClass("is-stick-middle");
            } else if (scroSmallH <= 0) {
                $("#topWrapper").removeClass("is-stick-middle");
            }
        } else {//大视口情况
            //获取滚动条的滑动距离
            var scroH = $(this).scrollTop();
            //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
            if (scroH >96) {
                $("#topWrapper").attr('class', "school-top-wrapper-middle");
                $("#fixedNav").addClass("is-stick");
            } else if (scroH <= 96) {
                console.log("主屏幕取消固定", scroH, navH);
                $("#fixedNav").removeClass("is-stick");

            }

        }


    })
});

function clickMenu() {
    var top;
    top =$(this).scrollTop('0');
    $('body').addClass('body-fixed');
    $("#fixedNav").attr('class',"active-menu school-nav-content");
    $('header').addClass('open-menu');
}

function closeMenu() {
    $("#fixedNav").removeClass("active-menu");
    $('header').removeClass('open-menu');
    $('body').removeClass('body-fixed')

}

function showkindergartenInfo() {
    $(".kindergarten .img-word").attr("class", 'img-word noActive');
}

function showkindergartenTitle() {
    $(".kindergarten .img-word").removeClass('noActive');
}

function showPrimaryInfo() {
    $(".primary-junior-school .img-word").attr("class", 'img-word noActive');

}

function showPrimaryTitle() {
    $(".primary-junior-school .img-word").removeClass('noActive');
}

function showHighInfo() {
    $(".high-school .img-word").attr("class", 'img-word noActive');
}

function showHighTitle() {
    $(".high-school .img-word").removeClass('noActive');
}