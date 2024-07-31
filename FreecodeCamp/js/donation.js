console.log('Donation.js loaded');

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.getElementById('mydropdown'); // Adjust this ID to match your HTML

dropdown.addEventListener('click', function (event) {
  event.stopPropagation();
  dropdown.classList.toggle('active');
});

document.addEventListener('click', function () {
  dropdown.classList.remove('active');
});

function updateDropdownPosition() {
  const rect = dropdown.getBoundingClientRect();
  const screenWidth = window.innerWidth;
  const dropdownWidth = dropdownContent.offsetWidth;

  const leftPosition = Math.min(screenWidth - dropdownWidth, rect.left);

  dropdownContent.style.left = leftPosition + 'px';
}

window.addEventListener('resize', updateDropdownPosition);

window.addEventListener('load', function () {
  updateDropdownPosition();
  dropdownContent.style.display = 'none';
});

document.addEventListener('scroll', function () {
  dropdown.classList.remove('active');
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    dropdown.classList.remove('active');
  }
});

// ... (rest of your donation.js code)

// Define variables to store donation-related information
let currentDonation = 20; // Initial donation amount
const donationAmountElement = document.getElementById('donationAmount');
const totalDonationElement = document.getElementById('totalDonation');
const learningHoursElement = document.getElementById('learningHours');

// Function to update donation information
function updateDonation(amount) {
  currentDonation = amount;
  donationAmountElement.textContent = amount;
  totalDonationElement.textContent = currentDonation * 2; // Assuming 1 dollar = 2 learning hours
  learningHoursElement.textContent = currentDonation * 100;
}

// Function to handle the donation button click
function donate() {
  // You can implement the donation submission logic here
  // For example, you might want to open a donation form or perform an API request
  alert(`Thank you for your donation of $${currentDonation}/month!`);
}

// Attach click event listeners to the donation buttons
document.querySelector('.donation-buttons button:nth-child(1)').addEventListener('click', () => updateDonation(5));
document.querySelector('.donation-buttons button:nth-child(2)').addEventListener('click', () => updateDonation(10));
document.querySelector('.donation-buttons button:nth-child(3)').addEventListener('click', () => updateDonation(20));
document.querySelector('.donation-buttons button:nth-child(4)').addEventListener('click', () => updateDonation(40));

// Attach click event listener to the donate button
document.querySelector('.btn-donate').addEventListener('click', donate);
