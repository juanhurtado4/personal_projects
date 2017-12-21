//Problem: Hints in form are shown even when form is valid
//Solution: hide and show them at appropriate times
let $password = $('#password');
let $confirmPassword = $('#confirm_password');


$('form span').hide();

function passwordEvent() {
    if ($password.val().length > 8) {
        $password.next().hide();
    } else {
        $password.next().show();
    }
}

function confirmPasswordEvent() {
    if ($password.val() === $confirmPassword.val()) {
        $confirmPassword.next().hide();
    } else {
        $confirmPassword.next().show();
    }
}

$password.focus(function() {
    passwordEvent();
    confirmPasswordEvent();
}).keyup(function() {
    passwordEvent();
    confirmPasswordEvent();
});

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

