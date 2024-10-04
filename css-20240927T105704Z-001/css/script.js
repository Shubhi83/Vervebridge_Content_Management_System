$(function () {
    $('#date3').datetimepicker({
        allowInputToggle: true
    });
});

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var datetime = document.getElementById('datetime').value;
    var people = document.getElementById('select1').value;
    var message = document.getElementById('message').value;

    // Store data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('datetime', datetime);
    localStorage.setItem('people', people);
    localStorage.setItem('message', message);

    // Show alert with success message
    alert('Booking successfully!');

    // Redirect to confirmation page
    window.location.href = 'css-20240927T105704Z-001/css/confirm.html';
});









