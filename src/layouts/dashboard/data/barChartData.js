const barChartData = {
    labels: ["US", "Germany", "Britain", "Brazil"],  // Sites as labels
    datasets: [
      {
        label: "Media",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [400, 300, 350, 250],  // Media data for each site
      },
      {
        label: "Content",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
        data: [200, 150, 180, 120],  // Content data for each site
      },
      {
        label: "Menu",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: [434, 320, 290, 400],  // Menu data for each site
      },
      {
        label: "Taxonomy",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
        data: [343, 220, 300, 270],  // Taxonomy data for each site
      },
    ],
  };
  
  export default barChartData;