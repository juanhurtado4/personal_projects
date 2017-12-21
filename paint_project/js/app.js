let color = $('.selected').css('background-color');

$('.controls li').click(function() {

    $(this).siblings().removeClass('selected');

    $(this).addClass('selected')

    color = $(this).css('background-color');
});