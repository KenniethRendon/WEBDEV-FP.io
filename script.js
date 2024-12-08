// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 20,  // Slight offset for better visibility
      behavior: 'smooth'
    });
  });
});

// Image Gallery Lightbox (Modal)
document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="${img.src}" alt="${img.alt}">
      </div>
    `;
    document.body.appendChild(modal);

    // Close the modal when the user clicks the close button
    modal.querySelector('.close').addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    // Close the modal when clicking outside of the image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
  });
});

// Toggle Mobile Navigation Menu
const navMenu = document.querySelector('header nav ul');
const toggleButton = document.createElement('button');
toggleButton.textContent = '☰';
toggleButton.classList.add('nav-toggle');
document.querySelector('header').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  toggleButton.classList.toggle('active');
});
