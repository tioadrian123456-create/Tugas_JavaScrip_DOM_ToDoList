const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Fungsi untuk menambahkan tugas
function addTask() {
    const taskText = taskInput.value.trim();

    // Mengecek apakah input kosong
    if (taskText === "") {
        alert("Silakan masukkan tugas terlebih dahulu!");
        return;
    }

    // Membuat elemen list
    const li = document.createElement("li");
    li.classList.add("task");

    // Bagian kiri tugas
    const taskLeft = document.createElement("div");
    taskLeft.classList.add("task-left");

    // Membuat checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Membuat teks tugas
    const text = document.createElement("span");
    text.classList.add("task-text");
    text.textContent = taskText;

    // Ketika checkbox dicentang
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            text.classList.add("completed");
        } else {
            text.classList.remove("completed");
        }
    });

    // Membuat tombol hapus
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.classList.add("delete-button");

    // Ketika tombol hapus ditekan
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    // Menggabungkan elemen
    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(text);

    li.appendChild(taskLeft);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    // Mengosongkan input
    taskInput.value = "";
}

// Tombol tambah diklik
addButton.addEventListener("click", addTask);

// Bisa menekan Enter untuk menambahkan tugas
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});