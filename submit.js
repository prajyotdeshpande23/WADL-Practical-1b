document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    // Send data via AJAX POST request
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Server Response:", data);

        // Save data to localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));

        alert("User Registered Successfully!");
        window.location.href = "users.html"; // Redirect to user list page
    })
    .catch(error => console.error("Error:", error));
});
