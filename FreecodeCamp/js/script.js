console.log('Script.js loaded');

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.getElementById('mydropdown');

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

 const imageUrls = [
  "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png",
  "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png",
  "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png",
  "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sebzg/288/328799_2.png",
   "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sebzg/288/328799_2.png", "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sebzg/288/328799_2.png", "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sebzg/288/328799_2.png", "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sebzg/288/328799_2.png", "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sebzg/288/328799_2.png", "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sebzg/288/328799_2.png",
   "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png",
  "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sebzg/288/328799_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png",
  "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sebzg/288/328799_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png","https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/dancouper/288/158608_2.png",
  "https://sea1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sebzg/288/328799_2.png",
];

  const imageContainer = document.getElementById('imageContainer');

  imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Online User';
    imageContainer.appendChild(img);
  });