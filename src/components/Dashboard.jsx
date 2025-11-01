import SummaryCard from "./Tasks/SummaryCard";
import TaskStatusChart from "./Tasks/TaskStatusChart";
import TaskPriorityChart from "./Tasks/TaskPriorityChart";
import RecentTask from "./Tasks/RecentTask";

function Dashboard() {
  return (
    <div className="p-7 grid gap-6">
      {/* Top Summary Cards */}
      <SummaryCard />

      <div className="grid md:grid-cols-2 gap-7">
        {/* Left: Task Status Chart */}
        <TaskStatusChart />

        {/* Right: Priority Chart or Upcoming Tasks */}
        <RecentTask />
      </div>

      {/* Bottom: Recent Tasks Table */}
      <TaskPriorityChart/>
    </div>
  );
}

export default Dashboard  