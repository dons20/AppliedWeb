$(document).ready(function() {
    var $rform =  $('#registrationForm form');
    var $lform =  $('#loginForm form');
    $rform.on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type:       "POST",
            cache:      false,
            url:        $(this).attr('action'),
            data:       $(this).serialize(),
            success:    function(data) {
                $('#regClose').trigger('click');
            }
        });
    });
    $lform.on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type:       "POST",
            cache:      false,
            url:        $(this).attr('action'),
            data:       $(this).serialize(),
            success:    function(data) {
                $('#loginClose').trigger('click');
                console.log(data);
            }
        });
    });
})