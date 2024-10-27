function openModal(image) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = image.src;
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  