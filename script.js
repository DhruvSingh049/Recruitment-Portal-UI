// Modal functionality
const modal = document.getElementById('join-modal');
const openModalBtn = document.getElementById('join-now-btn');
const closeModalBtn = document.getElementById('close-modal-btn');

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Submit join form (you can add your own logic here)
const joinForm = document.getElementById('join-form');
joinForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Add your form submission logic here
  // For example, you can use Fetch API to submit the form data to your server
  // and show a success message in the modal
  modal.style.display = 'none';
  alert('Form submitted successfully!');
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = 100;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
window.addEventListener('scroll', handleScroll);

// Platform-friendly feature check
function isFeatureSupported(feature) {
  return typeof feature !== 'undefined';
}