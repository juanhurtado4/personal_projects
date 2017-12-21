// Prevent people from seeing spoilers
// Solution: Hide spoilers and reveal them through user interaction


// 1. Hide spoiler
let spoiler = $('.spoiler span').hide();
// 2. Add a button
$('.spoiler').append('<button>Reveal Spoiler!</button>');
// 3. When button pressed
$('button').click(function(){
  $(this).hide();
//  $('.spoiler span').show();
  $(this).prev().show();
});

$('.spoiler span').click(function(){
//  $('.spoiler span').hide();
  $(this).hide();
  $(this).next().show();
});