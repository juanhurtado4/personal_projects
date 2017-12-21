// Create select tag and append to #menu
let $select = $('<select></select>');
$('#menu').append($select);

// Cycle over #menu links
$('#menu a').each(function(){
    let $anchor = $(this);
    let $option = $('<option></option>');

    if ($anchor.parent().hasClass('selected')) {
        $option.prop('selected', true)
    }

    $option.val($anchor.attr('href'));
    $option.text($anchor.text());

    $select.append($option);
});


$select.change(function(){
    window.location = $select.val();
});