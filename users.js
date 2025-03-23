document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (!Array.isArray(users)) users = [];

    const userList = document.getElementById("userList");

    function renderUsers() {
        userList.innerHTML = ""; // Clear previous entries
        users.forEach((user, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><button class="delete-btn" data-index="${index}">Delete</button></td>
            `;
            userList.appendChild(row);
        });

        // Attach delete event to each button
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                deleteUser(index);
            });
        });
    }

    function deleteUser(index) {
        users.splice(index, 1); // Remove user from array
        localStorage.setItem("users", JSON.stringify(users)); // Update storage
        renderUsers(); // Re-render the table
    }

    renderUsers();
});
