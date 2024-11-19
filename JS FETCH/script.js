document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("userList");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userItem = document.createElement("div");
                userItem.className = "user-item";
                userItem.innerHTML = `
                    <h3>${user.name}</h3>
                    <div class="user-details">
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                    </div>
                `;

                userItem.addEventListener("click", () => {
                    const details = userItem.querySelector(".user-details");
                    details.style.display = details.style.display === "block" ? "none" : "block";
                });

                userList.appendChild(userItem);
            });
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });
});
