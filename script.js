// adding event listener to sidebar items
document.querySelectorAll(".sidebar-item").forEach((item) => {
  item.addEventListener("click", () => {
    alert(` ${item.textContent.trim()} clicked!`);
  });
});
// adding event listener to navbar items
document.querySelector(".header").addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("search-icon")) {
    alert("Search icon clicked!");
  } else if (target.classList.contains("notification-icon")) {
    alert("Notification clicked!");
  } else if (target.classList.contains("chat-icon")) {
    alert("Chat clicked!");
  } else if (target.classList.contains("gallery-icon")) {
    alert("Gallery clicked!");
  } else if (target.closest(".user-menu")) {
    alert(
      `User menu clicked: ${document.querySelector(".user-name").textContent}`
    );
  }
});

// adding event listener to finance cards to highlight the selected card
const financeCards = document.querySelectorAll(".individual-finance-card");
// adding click event listener to each card
financeCards.forEach((card) => {
  card.addEventListener("click", function () {
    financeCards.forEach((c) => {
      c.classList.remove("individual-finance-card-active");
    });

    this.classList.add("individual-finance-card-active");
  });
});
