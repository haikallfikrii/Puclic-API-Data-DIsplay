// Mengambil data dari API JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    displayData(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Fungsi untuk menampilkan data di dalam elemen HTML
function displayData(users) {
  const contentDiv = document.getElementById("content");

  users.forEach((user) => {
    // Membuat elemen div untuk setiap pengguna
    const userCard = document.createElement("div");
    userCard.classList.add("card");

    // Menambahkan nama pengguna
    const userName = document.createElement("h2");
    userName.textContent = user.name;
    userCard.appendChild(userName);

    // Menambahkan email pengguna
    const userEmail = document.createElement("p");
    userEmail.textContent = `Email: ${user.email}`;
    userCard.appendChild(userEmail);

    // Menambahkan alamat pengguna
    const userAddress = document.createElement("p");
    userAddress.textContent = `Address: ${user.address.street}, ${user.address.city}`;
    userCard.appendChild(userAddress);

    // Menambahkan card ke dalam content div
    contentDiv.appendChild(userCard);
  });
}
