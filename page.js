
function highlightCard(card) {
    card.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.2)";
  }
  
  function resetCard(card) {
    card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";
  }
  let likeCount = 0;
  let dislikeCount = 0;
  
  function likeProduct() {
      likeCount++;
      document.getElementById('likeCount').innerText = likeCount;
  }
  
  function dislikeProduct() {
      dislikeCount++;
      document.getElementById('dislikeCount').innerText = dislikeCount;
  }
  
  function addComment() {
      let commentText = document.getElementById('commentBox').value;
      if (commentText.trim() !== "") {
          let commentSection = document.getElementById('commentsSection');
          let commentDiv = document.createElement('div');
          commentDiv.classList.add('alert', 'alert-secondary', 'mt-2');
          commentDiv.innerText = commentText;
          commentSection.appendChild(commentDiv);
          document.getElementById('commentBox').value = ""; // Clear input box
      }
  }
  document.addEventListener("DOMContentLoaded", function() {
    let dropdownButton = document.getElementById("menuDropdown");

    dropdownButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents immediate closing
        let dropdownMenu = this.nextElementSibling;

        // Toggle dropdown visibility
        dropdownMenu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        let dropdowns = document.querySelectorAll(".dropdown-menu");
        dropdowns.forEach((menu) => {
            if (!menu.contains(event.target) && !dropdownButton.contains(event.target)) {
                menu.classList.remove("show");
            }
        });
    });
});
