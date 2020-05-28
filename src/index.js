import $ from 'jquery'
import './css/style.css'

$('.throw-line__lines').click(function(e) {
    $('.devices__item').addClass("devices-line__item");
    $('.devices__item').removeClass("devices__item");
    $('.devices').addClass("devices-line");
    $('.devices').removeClass("devices");
    $('.title__t').addClass("title__t-line");
    $('.title__t').removeClass("title__t");
    $('.cost').addClass("cost-line");
    $('.cost').removeClass("cost");
    $('.devices__text1').text("Доставка из: Россия");
    $('.devices__text2').text("Приблизительно: дн.");
})

$( window ).resize(function() {
    if( $( window ).width() <= 1150) {
        $('.throw-line__grid').click();
    }
});
''
$('.throw-line__grid').click(function(e) {
    $('.devices-line__item').addClass("devices__item");
    $('.devices-line__item').removeClass("devices-line__item");
    $('.devices-line').addClass("devices");
    $('.devices-line').removeClass("devices-line");
    $('.title__t-line').addClass("title__t");
    $('.title__t-line').removeClass("title__t-line");
    $('.cost-line').addClass("cost");
    $('.cost-line').removeClass("cost-line");
    $('.devices__text1').text("");
    $('.devices__text2').text("");
})

$('.my-logo').click(function(e) {
    window.open("https://github.com/dominuss-git");
})