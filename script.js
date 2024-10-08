document.addEventListener("DOMContentLoaded", function () {
    const itemInput = document.getElementById("item-input");
    const addButton = document.getElementById("add-button");
    const itemList = document.getElementById("item-list");
    const purchasedList = document.getElementById("purchased-list");

    addButton.addEventListener("click", function () {
        const itemName = itemInput.value.trim();
        if (itemName) {
            addItem(itemName);
            itemInput.value = '';
        }
    });

    function addItem(name) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${name}</span>
            <button class="delete-button">🗑️</button>
            <input type="checkbox" class="purchase-checkbox">
        `;

        const checkbox = listItem.querySelector(".purchase-checkbox");
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                listItem.querySelector("span").classList.add("purchased");
                purchasedList.appendChild(listItem);
                itemList.removeChild(listItem);
            } else {
                listItem.querySelector("span").classList.remove("purchased");
                itemList.appendChild(listItem);
                purchasedList.removeChild(listItem);
            }
        });

        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
            itemList.removeChild(listItem);
            purchasedList.removeChild(listItem);
        });

        itemList.appendChild(listItem);
    }
});
