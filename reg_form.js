<<<<<<< HEAD
// Initialize the room variable
 var room = 0;
=======

>>>>>>> f808851758a0449f6264a472890ce7461c93b460

// Show the registration form when the "Book Now" button is clicked
document.getElementById('bookNowBtn').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'block';
});

// Hide the registration form when the "Close" button is clicked
document.getElementById('closeFormBtn').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'none';
});



// Handle form submission
let room = 0; // Initialize the room count globally

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const noofroom = parseInt(document.getElementById('rooms').value) || 0;
    console.log("Requested rooms:", noofroom);

    // Check if rooms are available
<<<<<<< HEAD
    if (room > 100) {
=======
    if (room + noofroom > 100) {
>>>>>>> f808851758a0449f6264a472890ce7461c93b460
        alert("Rooms are not available");
    } else {
        // Update the room count
        room += noofroom;
        alert("Room is booked!");
        console.log("Current room count: " + room);

        // Close the form after submission
        document.getElementById('registrationForm').style.display = 'none';
    }
});
