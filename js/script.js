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

function updateGenreCount() {
    // Count the number of checked checkboxes
    const checkboxes = document.querySelectorAll('.dropdown-item input[type="checkbox"]');
    let checkedCount = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    // Update the button text with the count, or reset to "Genre" if none are selected
    const genreButton = document.getElementById('genreButton');
    if (checkedCount > 0) {
      genreButton.innerHTML = `Genre <span class="badge-count">${checkedCount}</span>`;
    } else {
      genreButton.innerHTML = 'Genre';
    }
  }

function updateRatingCount() {
// Count the number of checked checkboxes
const checkboxes = document.querySelectorAll('.dropdown-item input[type="checkbox"]');
let checkedCount = 0;
checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
    checkedCount++;
    }
});

// Update the button text with the count, or reset to "Rating" if none are selected
const ratingButton = document.getElementById('ratingButton');
    if (checkedCount > 0) {
      ratingButton.innerHTML = `Rating <span class="badge-count">${checkedCount}</span>`;
    } else {
      ratingButton.innerHTML = 'Rating';
    }
  }