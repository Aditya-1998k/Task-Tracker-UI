import { useState } from "react";
import apiClient from "../../api/axios";

const AddTaskModal = ({ isOpen, onClose }) => {

  const [form, setForm] = useState({
    summary: "", description: "", task_type: "development",
    status: "OPEN", assigned: "",
    estimate: "", priority: "medium",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.post("/tasks/add_task", form);
      alert("Task added successfully!");
      setForm({
        summary: "", description: "", task_type: "development",
        status: "OPEN", assigned: "", estimate: "", priority: "medium",
      });
      onClose();
    } catch (err) {
      console.error("Error adding task:", err);
      alert("Failed to add task");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-3xl shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">➕ New Task</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 text-2xl" > &times; </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Left side */}
          <div className="col-span-1 space-y-3">
            <input type="text" name="summary"
              placeholder="Task Summary"  value={form.summary}
              onChange={handleChange} className="w-full border p-2 rounded" required
            />
            <textarea  name="description"  placeholder="Description"
              rows="5" value={form.description} onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Right side */}
          <div className="col-span-1 space-y-3">
            <input type="text"  name="assigned"  placeholder="Assigned To" value={form.assigned}
              onChange={handleChange} className="w-full border p-2 rounded"
            />

            <input type="number"  name="estimate" placeholder="Estimate (hrs)"
              value={form.estimate} onChange={handleChange} className="w-full border p-2 rounded"
            />

            <select name="task_type" value={form.task_type} onChange={handleChange} className="w-full border p-2 rounded">
              <option value="development">Development</option>
              <option value="testing">Testing</option>
              <option value="design">Design</option>
            </select>

            <select name="priority" value={form.priority} onChange={handleChange}  className="w-full border p-2 rounded" >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <select name="status" value={form.status}  onChange={handleChange} className="w-full border p-2 rounded">
              <option value="OPEN">Open</option>
              <option value="INPROGRESS">In Progress</option>
              <option value="REVIEW">Review</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>

          {/* Buttons row */}
          <div className="col-span-2 flex justify-end gap-3 mt-4">
            <button  type="button"  onClick={onClose}  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Cancel</button>
            <button  type="submit" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" >Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
