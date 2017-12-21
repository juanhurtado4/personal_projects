//Problem: Hints in form are shown even when form is valid
//Solution: hide and show them at appropriate times

$('form span').hide();

function passwordEvent(){
    if ($(this).val().length > 8) {
        $(this).next().hide()
    } else {
        $(this).next().show()
    }
}

$('#password').focus(passwordEvent).keyup(passwordEvent);