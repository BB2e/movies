// 스크롤하면 헤더에 on 붙이기

let headerNav = document.querySelector('header');
let he = headerNav.getBoundingClientRect().height;
let headerWrap = document.querySelector('.headerWrap');

document.addEventListener('scroll', () => {
    if ((window.scrollY) > he + 250) {
        headerWrap.classList.add('on');
    } else {
        headerWrap.classList.remove('on');
    }
})

/////// site 이동 작동이 안된다..
// let select  = document.querySelector('select');

// select.addEventListener('change', (e)=>{
//     console.log('abc');

//     window.open(e.target.value, '_self')

// }


/////////// 아웃캐라셀 슬라이드

$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 2
            },
            769: {
                items: 3
            },
            1000: {
                items: 7
            }
        }
    });
});




$(function () {



///////////     탭버튼

    $('.tab_Wrap>a').on('click', function () {

        var i = $(this).index();

        $('.tab_Wrap>a').removeClass('on');
        $(this).addClass('on');

        $('.panel_wrap>ul').removeClass('on');
        $('.panel_wrap>ul').eq(i).addClass('on');
    });



///////// 슬라이드

    var visual = $('#visual > li');
    var Btn = $('.slideBtn > a');
    var current = 0;

    timer();

// 네비버튼 클릭시

    Btn.on('click', function () {
        var tt = $(this);
        var i = tt.index();

        Btn.removeClass('on');
        tt.addClass('on');

        move(i);
    });

    // 좌우 slide
    function move(i) {
        var currentE1 = visual.eq(current);
        var nextE1 = visual.eq(i);

        currentE1.css({
            'left': 0
        }).animate({
            'left': '-100%'
        });
        nextE1.css({
            'left': '100%'
        }).animate({
            'left': '0'
        });

        current = i
    }

    function timer() {

        setInterval(function () {

            var n = current + 1;

            if (n == visual.size())(n = 0)

            Btn.eq(n).trigger('click');
        }, 4000)
    }


});
