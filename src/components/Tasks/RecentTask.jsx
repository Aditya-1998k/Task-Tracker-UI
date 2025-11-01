import React from 'react'
import { useState, useEffect } from 'react'
import apiClient from '../../api/axios'

function RecentTask() {
  const [recentTasks, setrecentTask] = useState([])

  useEffect(() =>{
    const fetchtask = async () =>{
        try{
            const response = await apiClient.get("/tasks/recent");
            setrecentTask(response.data.tasks)
        }catch(err){
            console.log(err)
        }
    }
    fetchtask()
  }, [])
  return (
    <div className="mt-6 bg-white rounded-xl shadow-md p-4">
        <h3 className="text-lg font-semibold mb-4">Recent Tasks</h3>
        <table className="min-w-full text-sm">
            <thead>
            <tr className="text-left border-b">
                <th className="p-2">Summary</th>
                <th className="p-2">Assigned</th>
                <th className="p-2">Status</th>
                <th className="p-2">Priority</th>
            </tr>
            </thead>
            <tbody>
            {recentTasks.map((task) => (
                <tr key={task._id} className="border-b hover:bg-gray-50">
                <td className="p-2">{task.summary}</td>
                <td className="p-2">{task.assigned}</td>
                <td className="p-2">{task.status}</td>
                <td className="p-2">{task.priority}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default RecentTask