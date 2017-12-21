// Problem: User when clicking on image goes to a dead end
// Solution: Create an overlay with the large image - Lightbox

let $overlay = $('<div id="overlay"></div>');
let $image = $('<img>');

// An image to overlay
$overlay.append($image);

//Add overlay
$('body').append($overlay);

//1. Capture the click event on a link to an image
$('#imageGallery a').click(function(){
  event.preventDefault();
  let imageLocation = $(this).attr('href');
  //Update overlay with the image linked in the link
  $image.attr('src', imageLocation);

  //Show the overlay
  $overlay.show();
});


$overlay.click(function(){
  $overlay.hide();
});






