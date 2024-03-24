
$(document).ready(function () {

    $('input[type="text"]').focus(function() {
    $(this).css('background-color', 'purple');
}).blur(function() {
    $(this).css('background-color', 'white');
});

    $('#gender').change(function () {
        var selectedOption = $(this).val();
        console.log('Зміна в селекті: ' + selectedOption);
    });


    $('#form').submit(function (event) {
        event.preventDefault();
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            gender: $('#gender').val()
        };
        var dataList = '<ul>';
        $.each(formData, function (key, value) {
            dataList += '<li>' + key + ': ' + value + '</li>';
        });
        dataList += '</ul>';
        $('body').append(dataList);
    });
}); 
