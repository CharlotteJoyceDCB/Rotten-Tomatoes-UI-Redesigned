// Function to handle cart icon click
// document.querySelector('.floating-cart').addEventListener('click', function() {
//     alert('Cart preview opening soon!');
// });

// Function to update cart count
function updateCartCount(count) {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}

// Get modal elements
const cartModal = document.getElementById('cartModal');
const closeBtn = document.querySelector('.close-btn');

// Show modal when cart icon is clicked
document.querySelector('.floating-cart').addEventListener('click', function() {
    cartModal.style.display = 'flex';
});

// Hide modal when close button is clicked
closeBtn.addEventListener('click', function() {
    cartModal.style.display = 'none';
});

// Hide modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

function selectSortOption(element, optionText) {
    // Update the button text
    document.getElementById('sortButton').innerText = 'Sort: ' + optionText;
  }