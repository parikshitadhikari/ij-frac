// adding event listener to sidebar items
document.querySelectorAll(".sidebar-item").forEach((item) => {
  item.addEventListener("click", () => {
    alert(` ${item.textContent.trim()} clicked!`);
  });
});
// adding event listener to navbar items
document.querySelector(".navbar").addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("search-icon")) {
    alert("Search icon clicked!");
  } else if (target.classList.contains("notification-icon")) {
    alert("Notification clicked!");
  } else if (target.classList.contains("chat-icon")) {
    alert("Chat clicked!");
  } else if (target.classList.contains("gallery-icon")) {
    alert("Gallery clicked!");
  } else {
    alert(
      `User menu clicked: ${document.querySelector(".user-name").textContent}`
    );
  }
});
