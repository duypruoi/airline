// Function to show the modal
function showModal(promoId) {
    // Tìm modal tương ứng và hiển thị
    document.getElementById(promoId).style.display = "block";
  }
  
  // Function to close the modal
  function closeModal(promoId) {
    // Tìm modal tương ứng và ẩn đi
    document.getElementById(promoId).style.display = "none";
  }
  
  // Khi người dùng nhấn vào ngoài vùng modal, đóng modal
  window.onclick = function (event) {
    // Nếu nhấn vào background của modal (mà không phải nội dung)
    if (event.target.classList.contains("modalKM2")) {
      event.target.style.display = "none"; // Ẩn modal
    }
  };
  