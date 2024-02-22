// Array to store registered users
var users = [];

document.querySelector('.box2 form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var username = document.getElementById('n2').value;
    var password = document.getElementById('n4').value;
    var confirmPassword = document.getElementById('n5').value;
    var mobileNumber = document.getElementById('n6').value;
    var age = document.getElementById('n8').value;

    // Validate age to be between 18 and 90
    if (age < 18 || age > 90) {
        alert('Age must be between 18 and 90.');
        return;
    }

    // Validate mobile number to contain exactly 11 digits
    if (!/^\d{11}$/.test(mobileNumber)) {
        alert('Mobile number must contain exactly 11 digits.');
        return;
    }

    // Check if password matches confirm password
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Validate password length
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Store user details in an object
    var user = {
        username: username,
        password: password
    };

    // Check if user already exists
    var existingUser = users.find(function(u) {
        return u.username === username;
    });

    if (existingUser) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    // Add user to users array
    users.push(user);

    // Clear form fields
    document.getElementById('n2').value = '';
    document.getElementById('n4').value = '';
    document.getElementById('n5').value = '';
    document.getElementById('n6').value = '';
    document.getElementById('n1').value = '';
    document.getElementById('n3').value = '';
    document.getElementById('n7').value = '';

    alert('Registration successful!'); // Display success message

    console.log(users); // Print users to console
});


document.querySelector('.box form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var username = document.querySelector('.box .name input[type="text"]').value;
    var password = document.querySelector('.box .pass input[type="password"]').value;

    // Check if user is registered
    var registeredUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (registeredUser) {
        alert('Logged in successfully!');
    } else {
        alert('Not registered or incorrect credentials.');
    }
});
