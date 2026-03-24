document.addEventListener("DOMContentLoaded", () => {
    const totalPriceDisplay = document.getElementById("total-price");

    // Function to calculate the sum of all items currently in the DOM
    function updateTotalPrice() {
        let total = 0;
        const allItems = document.querySelectorAll(".item");
        
        allItems.forEach(item => {
            const price = parseFloat(item.querySelector(".unit-price").innerText);
            const qty = parseInt(item.querySelector(".quantity").innerText);
            total += price * qty;
        });
        
        totalPriceDisplay.innerText = total;
    }

    // Select all product rows
    const products = document.querySelectorAll(".item");

    products.forEach(product => {
        const plusBtn = product.querySelector(".plus-btn");
        const minusBtn = product.querySelector(".minus-btn");
        const deleteBtn = product.querySelector(".delete-btn");
        const likeBtn = product.querySelector(".like-btn");
        const quantitySpan = product.querySelector(".quantity");

        // 1. Plus Button Logic
        plusBtn.addEventListener("click", () => {
            quantitySpan.innerText = parseInt(quantitySpan.innerText) + 1;
            updateTotalPrice();
        });

        // 2. Minus Button Logic
        minusBtn.addEventListener("click", () => {
            let currentQty = parseInt(quantitySpan.innerText);
            if (currentQty > 1) {
                quantitySpan.innerText = currentQty - 1;
                updateTotalPrice();
            }
        });

        // 3. Delete Logic
        deleteBtn.addEventListener("click", () => {
            product.remove(); // Removes the whole item div
            updateTotalPrice(); // Recalculate total after deletion
        });

        // 4. Like Logic (Color Change)
        likeBtn.addEventListener("click", () => {
            likeBtn.classList.toggle("is-active");
        });
    });
});