// adding event listener to sidebar items
document.querySelectorAll(".sidebar-item").forEach((item) => {
  item.addEventListener("click", () => {
    alert(` ${item.textContent.trim()} clicked!`);
  });
});
