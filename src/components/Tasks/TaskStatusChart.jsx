import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import apiClient from "../../api/axios"

const TaskStatusChart = () => {
  const [data, setData] = useState({ OPEN: 0, INPROGRESS: 0, COMPLETED: 0, REVIEW:0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiClient.get("/tasks/status_summary");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching task summary:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const chartConfig = {
      series: [data.OPEN, data.INPROGRESS, data.COMPLETED, data.REVIEW],
      labels: ["Open", "In Progress", "Completed", "REVIEW"],
      chart: {
        type: "pie",
        width: 350,
        height: 350,
        toolbar: { show: false },
      },
      dataLabels: { enabled: true },
      colors: ["#ff8f00", "#1e88e5", "#43a047", "black"],
      legend: { show: true, position: "bottom" },
    };

    const chart = new ApexCharts(document.querySelector("#task-status-chart"), chartConfig);
    chart.render();

    return () => chart.destroy(); // cleanup
  }, [data]);

  return (
    <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md p-4">
      <h6 className="text-base font-semibold text-blue-gray-900">Task Status Summary</h6>
      <div className="py-6 grid place-items-center">
        <div id="task-status-chart"></div>
      </div>
    </div>
  );
};

export default TaskStatusChart;
