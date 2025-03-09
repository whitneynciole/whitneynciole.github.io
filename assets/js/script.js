function openModal(event, linkElement) {
    event.preventDefault(); // Prevents the default link behavior

    let modal = document.getElementById("imageModal");
    let modalImage = document.getElementById("modalImg");
    let modalText = document.getElementById("modalText");

    let imageSrc = linkElement.href; // Get the image URL from the <a> tag
    let imageAlt = linkElement.querySelector("img").alt; // Get the alt text

    modal.style.display = "block";
    modalImage.src = imageSrc; // Set the modal image source
    modalText.innerText = imageAlt; // Set the modal text
}

// Function to close the modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
