// script.js - Improved Lifetime Explorations Controller
// =========================================================

/**
 * Enhanced version of original Lifetime Explorations
 * Improvements:
 * - Toggle font (Poppins ↔ Courier) instead of one-way change
 * - Toggle bold instead of one-way change
 * - Smooth animations and hover effects
 * - Visual feedback for active states
 * - Better UX with Enter key support
 * - Delete functionality for items
 * - Mobile responsive
 */

// Get DOM elements
const exploreList = document.getElementById("exploreList");
const newItemInput = document.getElementById("newItem");
const addBtn = document.getElementById("addBtn");
const fontBtn = document.getElementById("fontBtn");
const boldBtn = document.getElementById("boldBtn");

// State
let isCourierFont = false;
let isBoldActive = false;

// Enhanced Add Item Function
function addItem() {
  const input = newItemInput.value.trim();
  if (input !== "") {
    const li = document.createElement("li");
    li.className = `list-item ${isCourierFont ? 'font-courier' : ''} ${isBoldActive ? 'bold-active' : ''}`;
    li.innerHTML = `
      <span>${input}</span>
      <button class="delete-btn" onclick="deleteItem(this)">×</button>
    `;
    
    // Animate in
    li.style.opacity = '0';
    li.style.transform = 'translateX(-20px)';
    exploreList.appendChild(li);
    
    // Animate entrance
    setTimeout(() => {
      li.style.transition = 'all 0.4s ease';
      li.style.opacity = '1';
      li.style.transform = 'translateX(0)';
    }, 10);
    
    newItemInput.value = "";
    newItemInput.focus();
  }
}

// Delete Item Function
function deleteItem(btn) {
  const li = btn.closest('li');
  li.style.transition = 'all 0.3s ease';
  li.style.opacity = '0';
  li.style.transform = 'translateX(20px)';
  setTimeout(() => li.remove(), 300);
}

// Toggle Font Family
function changeFont() {
  isCourierFont = !isCourierFont;
  const listItems = document.querySelectorAll('.list-item');
  
  listItems.forEach(item => {
    item.classList.toggle('font-courier', isCourierFont);
  });
  
  updateButtonStates();
}

// Toggle Bold
function makeBold() {
  isBoldActive = !isBoldActive;
  const listItems = document.querySelectorAll('.list-item');
  
  listItems.forEach(item => {
    item.classList.toggle('bold-active', isBoldActive);
  });
  
  updateButtonStates();
}

// Update button visual states
function updateButtonStates() {
  fontBtn.classList.toggle('active', isCourierFont);
  boldBtn.classList.toggle('active', isBoldActive);
  
  fontBtn.textContent = isCourierFont ? 'Modern Font' : 'Typewriter Font';
}

// Event Listeners
newItemInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addItem();
  }
});

// Focus styles
newItemInput.addEventListener('focus', function() {
  this.parentElement.style.transform = 'scale(1.02)';
});
newItemInput.addEventListener('blur', function() {
  this.parentElement.style.transform = 'scale(1)';
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Add delete buttons to existing items
  const existingItems = exploreList.querySelectorAll('li');
  existingItems.forEach((li, index) => {
    li.className = `list-item ${isCourierFont ? 'font-courier' : ''} ${isBoldActive ? 'bold-active' : ''}`;
    li.innerHTML += '<button class="delete-btn" onclick="deleteItem(this)">×</button>';
  });
  
  updateButtonStates();
  console.log('✅ Lifetime Explorations enhanced!');
});