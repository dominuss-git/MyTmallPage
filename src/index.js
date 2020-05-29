import $ from 'jquery'
import './css/style.css'

$('.throw-line__lines').click(function(e) {
    $('.devices_grid__item').addClass("devices_line__item");
    $('.devices_grid__item').removeClass("devices_grid__item");
    $('.devices_grid').addClass("devices_line");
    $('.devices_grid').removeClass("devices_grid");
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
    $('.devices_line__item').addClass("devices_grid__item");
    $('.devices_line__item').removeClass("devices_line__item");
    $('.devices_line').addClass("devices_grid");
    $('.devices_line').removeClass("devices_line");
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