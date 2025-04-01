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

// chart building using chart.js
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("analyticsChart");

  // data for the chart
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Label 1",
        data: [13500, 7600, 13000, 9000, 15500, 13000, 21000],
        backgroundColor: "rgba(92, 107, 192, 0.2)",
        borderColor: "rgba(71, 69, 164, 1)",
        tension: 0.4,
        fill: true,
        order: 2,
      },
      {
        label: "Label 2",
        data: [5000, 8000, 4000, 7000, 12000, 10500, 7000],
        backgroundColor: "rgba(249, 186, 51, 0.2)",
        borderColor: "rgba(249, 186, 51, 1)",
        tension: 0.4,
        fill: true,
        order: 1,
      },
    ],
  };

  // configuration for the chart
  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          mode: "index",
          intersect: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          border: {
            display: false,
            dash: [15, 6],
            dashOffset: 0,
          },
          grid: {
            tickBorderDash: [1, 10],
            color: "#EBEBEB",
          },
          ticks: {
            callback: function (value) {
              if (value === 0) return "0k";
              return value / 1000 + "k";
            },
            color: "#999999",
            font: {
              size: 12,
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#999999",
            font: {
              size: 12,
            },
          },
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
    },
  };

  // creating the chart
  new Chart(ctx, config);
});
