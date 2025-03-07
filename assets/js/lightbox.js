// Get elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const likeButton = document.getElementById('like-button');
const prevButton = document.getElementById('lightbox-prev');
const nextButton = document.getElementById('lightbox-next');

// Image data (src and title)
const images = [
    { src: 'image1.jpg', title: 'Image 1' },
    { src: 'image2.jpg', title: 'Image 2' },
    { src: 'image3.jpg', title: 'Image 3' }
];
let currentImageIndex = 0;

// Show lightbox with selected image
function showLightbox(index) {
    currentImageIndex = index;
    lightbox.style.display = 'flex';
    lightboxImage.src = images[index].src;
    lightboxTitle.textContent = images[index].title;

    // Enable/disable prev/next buttons based on index
    prevButton.disabled = currentImageIndex === 0;
    nextButton.disabled = currentImageIndex === images.length - 1;
}

// Hide lightbox
function hideLightbox() {
    lightbox.style.display = 'none';
}

// Show previous image
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    lightboxImage.src = images[currentImageIndex].src;
    lightboxTitle.textContent = images[currentImageIndex].title;

    prevButton.disabled = currentImageIndex === 0;
    nextButton.disabled = currentImageIndex === images.length - 1;
}

// Show next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImage.src = images[currentImageIndex].src;
    lightboxTitle.textContent = images[currentImageIndex].title;

    prevButton.disabled = currentImageIndex === 0;
    nextButton.disabled = currentImageIndex === images.length - 1;
}

// Toggle like button state
function toggleLike() {
    likeButton.classList.toggle('liked');
    likeButton.textContent = likeButton.classList.contains('liked') ? 'Liked' : 'Like';
}

// Event listeners for prev/next buttons
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

// Event listener for "like" button
likeButton.addEventListener('click', toggleLike);

// Open lightbox on image click
document.querySelectorAll('.gallery-item').forEach((img, index) => {
    img.addEventListener('click', () => showLightbox(index));
});

// Close lightbox if clicked outside image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        hideLightbox();
    }
});
