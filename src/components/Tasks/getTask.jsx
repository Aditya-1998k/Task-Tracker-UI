import { useEffect, useState } from "react";
import apiClient from "../../api/axios";

const GetTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await apiClient.get("/tasks/get_tasks"); // 👈 your API endpoint
        setTasks(response.data.tasks || []);
        console.log(response)
      } catch (err) {
        console.error("Failed to fetch tasks:", err);
        setError(err.response?.data?.message || "Failed to load tasks");
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) return <p className="text-gray-500 text-center mt-8">Loading tasks...</p>;
  if (error) return <p className="text-red-500 text-center mt-8">Error: {error}</p>;

  return (
    <div className="bg-gradient-to-bl from-blue-50 to-violet-50 flex  justify-center lg:min-h-screen">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          🧩 All Tasks
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white rounded-lg border border-gray-200 shadow hover:shadow-md transition duration-300 p-4"
            >

              <div className="px-1 py-3">
                <div className="font-bold text-lg mb-2 text-gray-800">{task.summary}</div>
                <p className="text-gray-600 text-sm line-clamp-3">{task.description}</p>
              </div>

              <div className="px-1 py-3 flex items-center justify-between">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  {task.status}
                </span>
                <span className="text-sm text-gray-500">👤 {task.assigned}</span>
              </div>

              <div className="px-1 pb-3">
                <a href="#" className="text-blue-500 text-sm hover:underline" >View Details → </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetTasks;
