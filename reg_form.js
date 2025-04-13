// Initialize the room variable
 var room = 0;

// Show the registration form when the "Book Now" button is clicked
document.getElementById('bookNowBtn').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'block';
});

// Hide the registration form when the "Close" button is clicked
document.getElementById('closeFormBtn').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'none';
});



// Handle form submission
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demonstration

    var noofroom = parseInt(document.getElementById('rooms').value) || 0; // Convert to integer
    console.log(noofroom);
    // Check if rooms are available
    if (room > 100) {
        alert("Rooms are not available");
    } else {
        // Update the room count
        room += noofroom; // Increment the room count
        alert("Room is booked!"); // Alert that the room is booked
        console.log("Current room count: " + room); // Log the current room count for debugging
        
        // Close the form after submission
        document.getElementById('registrationForm').style.display = 'none';
    }
});