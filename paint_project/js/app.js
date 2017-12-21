let color = $('.selected').css('background-color');

$('.controls li').click(function() {

    $(this).siblings().removeClass('selected');

    $(this).addClass('selected')

    color = $(this).css('background-color');
});

$('#revealColorSelect').click(function() {
    changeColor();
    $('#colorSelect').toggle();
});

function changeColor() {
    let r = $('#red').val();
    let g = $('#green').val();
    let b = $('#blue').val();
    $('#newColor').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')')
}

$('input[type=range]').on('input', changeColor);