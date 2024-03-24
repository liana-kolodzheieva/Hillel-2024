$(document).ready(function() {
    // Зміна фонового кольору при наведенні на input
    $('input[type="text"]').focus(function() {
        $(this).addClass('purple-bg');
    }).blur(function() {
        $(this).removeClass('purple-bg');
    });

    // Виведення повідомлення у консоль при зміні значення селекту
    $('#gender').change(function() {
        var selectedOption = $(this).val();
        console.log('Зміна в селекті: ' + selectedOption);
    });

    // Відстеження події submit та виведення на сторінку даних з форми
    $('#form').submit(function(event) {
        event.preventDefault();
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            gender: $('#gender').val()
        };
        var dataList = '<ul>';
        $.each(formData, function(key, value) {
            dataList += '<li>' + key + ': ' + value + '</li>';
        });
        dataList += '</ul>';
        $('body').append(dataList);
    });
});
