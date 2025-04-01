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
  const ctx = document.getElementById("analyticsChart").getContext("2d");
  const timeframeSelect = document.getElementById("timeframe");

  // data for different timeframes
  const chartData = {
    weekly: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Label 1",
          data: [13500, 7600, 13000, 9000, 15500, 13000, 21000],
          backgroundColor: "rgba(92, 107, 192, 0.2)",
          borderColor: "rgba(71, 69, 164, 1)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Label 2",
          data: [5000, 8000, 4000, 7000, 12000, 10500, 7000],
          backgroundColor: "rgba(249, 186, 51, 0.2)",
          borderColor: "rgba(249, 186, 51, 1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    monthly: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Label 1",
          data: [53000, 28000, 59000, 51000],
          backgroundColor: "rgba(92, 107, 192, 0.2)",
          borderColor: "rgba(71, 69, 164, 1)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Label 2",
          data: [26500, 27500, 36000, 28500],
          backgroundColor: "rgba(249, 186, 51, 0.2)",
          borderColor: "rgba(249, 186, 51, 1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    yearly: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Label 1",
          data: [
            300000, 315000, 308000, 355000, 338000, 365000, 372000, 385000,
            395000, 412000, 425000, 428000,
          ],
          backgroundColor: "rgba(92, 107, 192, 0.2)",
          borderColor: "rgba(71, 69, 164, 1)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Label 2",
          data: [
            102000, 118000, 155000, 138000, 162000, 175000, 168000, 195000,
            205000, 218000, 235000, 248000,
          ],
          backgroundColor: "rgba(249, 186, 51, 0.2)",
          borderColor: "rgba(249, 186, 51, 1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
  };

  // chart configuration
  const config = {
    type: "line",
    data: chartData.weekly, // Default data
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { mode: "index", intersect: false },
      },
      scales: {
        y: {
          beginAtZero: true,
          border: { display: false, dash: [15, 5] },
          grid: { color: "#EBEBEB", tickBorderDash: [1, 10] },
          ticks: {
            callback: (value) => `${value / 1000}k`,
            color: "#999999",
            font: { size: 12 },
          },
        },
        x: {
          grid: { display: false },
          ticks: { color: "#999999", font: { size: 12 } },
        },
      },
      elements: { point: { radius: 0 } },
      interaction: { intersect: false, mode: "index" },
    },
  };

  // creating chart
  let analyticsChart = new Chart(ctx, config);

  // listening for dropdown changes
  timeframeSelect.addEventListener("change", function () {
    const selectedTimeframe = timeframeSelect.value;
    analyticsChart.data = chartData[selectedTimeframe];
    analyticsChart.update();
  });
});
