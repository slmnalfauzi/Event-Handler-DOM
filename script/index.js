const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', function() {
    const itemText = itemInput.value.trim(); // Mengambil nilai dari input dan menghapus spasi

    if (itemText) { // Memastikan input tidak kosong
        addItemToList(itemText);
        itemInput.value = ''; // Mengosongkan input field setelah menambahkan item
    } else {
        alert('Silakan masukkan item yang valid.');
    }
});

function addItemToList(text) {
    const newItem = document.createElement('li');
    newItem.textContent = text;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.onclick = function() {
        const newText = prompt('Edit item:', text);
        if (newText) {
            newItem.firstChild.textContent = newText; // Mengupdate teks item
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        itemList.removeChild(newItem); // Menghapus item dari daftar
    };

    newItem.appendChild(editButton);
    newItem.appendChild(deleteButton);

    itemList.appendChild(newItem);
}