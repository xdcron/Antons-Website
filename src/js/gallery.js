const galleryContainer = document.querySelector(".gallery-container");
const imageView = document.querySelector(".image-view");
const imageOverlay = document.querySelector(".image-overlay");
const closeBtn = document.querySelector(".close-image");

galleryContainer.addEventListener("click", (e) => {
  const item = e.target.closest(".gallery-item");
  const src = item.getAttribute("src");
  imageOverlay.classList.add("grid");
  imageOverlay.classList.remove("hidden");
  imageView.classList.remove("hidden");
  imageView.src = src;
  console.log();
});

closeBtn.addEventListener("click", () => {
  imageOverlay.classList.remove("grid");
  imageOverlay.classList.add("hidden");
  imageView.classList.add("hidden");
});
