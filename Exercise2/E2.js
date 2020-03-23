let currentImageIndex = 0;
function nextImage(n) {
  let imageHolder = document.getElementById('imagePlaceHolder');
  let pageImages = [];

  // fill array with images
  for (let i = 1; i <= 5; i++) {
    pageImages.push("images/" + i + ".jpeg");
  }

  // previous button pressed
  if (n == 1) {
    if (currentImageIndex == 0) {
      currentImageIndex = 4;
    }
    else {
      currentImageIndex -= 1;
    }
  }
  // next button pressed
  if (n == 2) {
    if (currentImageIndex == 4) {
      currentImageIndex = 0;
    }
    else {
      currentImageIndex += 1;
    }
  }

  imageHolder.src = pageImages[currentImageIndex];
}
