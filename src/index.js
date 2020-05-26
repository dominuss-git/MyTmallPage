import $ from 'jquery'
import './css/style.css'

$('.throw-line__lines').click(function(e) {
    $('.devices').css('flex-direction', 'column');
    $('.img-box').css('width', '200px');
    $('.devices__item').css('flex-direction', 'row');
    $('.title__t').css('width', '400px');
    $('.title__t').css('padding', '15px 0 0 0');
    $('.cost').css('padding', '35px 0 0 0');
    $('.devices__text1').text("Доставка из: Россия");
    $('.devices__text2').text("Приблизительно: дн.");
})

$( window ).resize(function() {
    if( $( window ).width() <= 1150) {
        $('.throw-line__grid').click();
    }
});

$('.throw-line__grid').click(function(e) {
    $('.devices').css('flex-direction', 'row');
    $('.img-box').css('width', '200px');
    $('.devices__item').css('flex-direction', 'column');
    $('.title__t').css('width', '200px');
    $('.title__t').css('padding', '0');
    $('.cost').css('padding', '0');
    $('.devices__text1').text("");
    $('.devices__text2').text("");
})