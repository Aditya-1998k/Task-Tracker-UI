import { Link } from "react-router-dom"
import { useState } from "react";
import AddTaskModal from "./Tasks/AddTaskModel";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleLogOut = () =>{
    localStorage.removeItem("token")
    window.location.href = "/"
  }

  return (
    <>
      <nav className="relative bg-black/90 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Task Tracker" className="h-8 w-auto" />
              </div>
              <div className="sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to="/dashboard" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/50 hover:text-white" > Overview </Link>
                  <Link to="/tasks" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/50 hover:text-white">Task Board</Link>
                  <Link to="/mytask" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/50 hover:text-white">My Tasks</Link>
                  <Link to="/users" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/50 hover:text-white">Workspace</Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-10 sm:pr-0">
              <button
                onClick={() => setShowModal(true)}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/50 hover:text-white"
              >
                Task +
              </button>
              <a onClick={handleLogOut} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-600 hover:text-white">Sign Out</a>
            </div>
          </div>
        </div>
      </nav>

      {/* AddTaskModal here */}
      <AddTaskModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>

  )
}

export default Navbar
