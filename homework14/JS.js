

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var checkbox = document.getElementById("checkbox").checked;

    if (name === "" || date === "" || email === "" || number === "" || !checkbox) {
        alert("Please, fill in all fields of the form and confirm your mind.");
        return;
    }

    var userInfo = "Name: " + name + "<br>" +
                   "Date: " + date + "<br>" +
                   "Email: " + email + "<br>" +
                   "Phone: " + number;

    document.getElementById("output").innerHTML = userInfo;
});
