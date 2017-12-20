// Create select tag and append to #menu
let $select = $('<select></select>');
$('#menu').append($select);

// Cycle over #menu links
$('#menu a').each(function(){
    let $anchor = $(this);
    let $option = $('<option></option>');

    $option.val($anchor.attr('href'));
    $option.text($anchor.text());

    $select.append($option);
});

let $button = $('<button>Go</button>');
$('#menu').append($button);

$button.click(function(){
    window.location = $select.val();
});