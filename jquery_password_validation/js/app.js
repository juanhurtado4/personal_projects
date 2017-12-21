//Problem: Hints in form are shown even when form is valid
//Solution: hide and show them at appropriate times
let $password = $('#password');
let $username = $('#username');
let $confirmPassword = $('#confirm_password');


$('form span').hide();

function isPasswordValid() {
    return $password.val().length > 8;
}

function isUsernamePresent() {
    return $username.val().length > 0;
}

function arePasswordsMatching() {
    return $password.val() === $confirmPassword.val();
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent() {
    if (isPasswordValid()) {
        $password.next().hide();
    } else {
        $password.next().show();
    }
}

function confirmPasswordEvent() {
    if (arePasswordsMatching()) {
        $confirmPassword.next().hide();
    } else {
        $confirmPassword.next().show();
    }
}

$password.focus(function() {
    passwordEvent();
    enableSubmitEvent();
}).keyup(function() {
    passwordEvent();
    confirmPasswordEvent();
    enableSubmitEvent();
});

function enableSubmitEvent() {
    $('#submit').prop("disabled", !canSubmit())
}

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

$username.focus(enableSubmitEvent()).keyup(enableSubmitEvent());
enableSubmitEvent();