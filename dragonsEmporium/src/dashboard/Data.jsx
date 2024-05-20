// dashboard/data.js

export const salesOverviewData = {
    todaySales: "$12,426",
    totalSales: "$2,38,485",
    totalOrders: "84,382",
    change: "+36%",
    totalSalesChange: "-14%",
  };
  
  export const salesGraphData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "New user",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
      },
      {
        label: "Returning user",
        data: [45, 49, 60, 71, 46, 35, 30],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
      },
    ],
  };
  
  export const transactionsData = [
    { status: "Completed", card: "Visa card **** 4831", amount: "$182.94", date: "Jan 17, 2022", vendor: "Amazon" },
    { status: "Completed", card: "Mastercard **** 6442", amount: "$99.00", date: "Jan 17, 2022", vendor: "Facebook" },
    { status: "Pending", card: "Account **** 882", amount: "$249.94", date: "Jan 17, 2022", vendor: "Netflix" },
    { status: "Canceled", card: "Amex card **** 5666", amount: "$199.24", date: "Jan 17, 2022", vendor: "Amazon Prime" },
  ];
  
  export const notificationsData = [
    { message: "Product sold order: 1000", type: "order" },
    { message: "Commission request", type: "commission" },
    { message: "Message from w.lawson@example.com", type: "message" },
    { message: "Question from w.lawson@example.com", type: "question" },
  ];
  
  export const customersData = [
    { name: "Jenny Wilson", email: "w.lawson@example.com" },
    { name: "Devon Lane", email: "dat.roberts@example.com" },
    { name: "Jane Cooper", email: "jgraham@example.com" },
    { name: "Dianne Russell", email: "curtis.de@example.com" },
  ];
  