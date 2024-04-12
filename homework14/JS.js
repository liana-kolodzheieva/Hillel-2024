

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
// збереження інформації
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var checkbox = document.getElementById("checkbox").checked;
// перевірка
    if (name === "" || date === "" || email === "" || number === "" || !checkbox) {
        alert("Please, fill in all fields of the form and confirm your mind.");
        return;
    }

    var userInfo = "<p>Name: " + name + "</p>" +
                   "<p>Date: " + date + "</p>" +
                   "<p>Email: " + email + "</p>" +
        "<p>Phone: " + number + "</p>" +
        "<p>_________________________</p>"

    // переніс інформаціі
    document.getElementById("output").insertAdjacentHTML('beforeend', userInfo);

    // чистка форми
    document.getElementById("form").reset();
});


