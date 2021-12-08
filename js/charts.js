const ctx = document.getElementById("trafficSource").getContext("2d");
const earning = document.getElementById("earning").getContext("2d");

let myChart = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Facebook", "Youtube", "Amazon"],
    datasets: [
      {
        label: "Traffic Source",
        data: [1200, 1900, 3000],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

myChart = new Chart(earning, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Earning",
        data: [
          1200, 109, 3000, 5400, 1220, 3600, 4800, 4578, 2566, 8545, 4587, 9000,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 255, 64, 1)",
          "rgba(255, 120, 132, 1)",
          "rgba(54, 180, 235, 1)",
          "rgba(100, 255, 86, 1)",
          "rgba(40, 255, 192, 1)",
          "rgba(50, 160, 255, 1)",
          "rgba(255, 159, 100, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
