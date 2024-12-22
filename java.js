document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".product-item button");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Sản phẩm đã được thêm vào giỏ hàng!");
        });
    });
});
document.querySelector(".search-form").addEventListener("submit", function(event) {
    const query = document.querySelector("input[name='q']").value.trim();
    if (query === "") {
        event.preventDefault();
        alert("Vui lòng nhập từ khóa để tìm kiếm.");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src; // Change main image source to clicked thumbnail source
            mainImage.alt = this.alt; // Update alt text for accessibility
        });
    });
});