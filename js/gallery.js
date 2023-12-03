const images = [
    "../img/gallery/001.jpg",
    "../img/gallery/002.jpg",
    "../img/gallery/003.jpg",
    "../img/gallery/004.jpg",
    "../img/gallery/005.jpg",
    "../img/gallery/006.jpg",

  ];
  let currentIndex = 0;
  
  const backdrop = document.querySelector(".backdrop");
  const modal = document.querySelector(".modal");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const imageElement = document.getElementById("image");
  
  function openModal() {
    modal.classList.add("is-visible");
    backdrop.classList.add("is-visible");
  
    showCurrentImage();
    window.addEventListener("keydown", escapeKeyHandler);
    backdrop.addEventListener("click", backdropClickHandler);
    prevButton.addEventListener("click", prevImage);
    nextButton.addEventListener("click", nextImage);
  }
  
  function closeModal() {
    modal.classList.remove("is-visible");
    backdrop.classList.remove("is-visible");
    window.removeEventListener("keydown", escapeKeyHandler);
    backdrop.removeEventListener("click", backdropClickHandler);
    prevButton.removeEventListener("click", prevImage);
    nextButton.removeEventListener("click", nextImage);
  }
  
  function escapeKeyHandler(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }
  
  function backdropClickHandler(event) {
    if (event.target.classList.contains("backdrop")) {
      closeModal();
    }
  }
  
  function showCurrentImage() {
    imageElement.src = images[currentIndex];
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showCurrentImage();
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showCurrentImage();
  }
  
  // Event listener for opening the modal
  document.getElementById("openButton").addEventListener("click", openModal);
  