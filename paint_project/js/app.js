let color = $('.selected').css('background-color');
let context = $('canvas')[0].getContext("2d");

$('.controls').on('click', 'li', function() {

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

$('#addNewColor').click(function() {
    let $newColor = $('<li></li>')
    $newColor.css('background-color', $('#newColor').css('background-color'))

    $('.controls ul').append($newColor);

    $newColor.click();
});

context.beginPath();
context.moveTo(10, 10);
context.lineTo(20, 10);
context.stroke();
