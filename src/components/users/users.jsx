import React from "react";

// Sample user data (you can replace this with API data)
const users = [
  { id: 1, name: "Neil Sims", email: "email@windster.com", task: "5" },
  { id: 2, name: "Bonnie Green", email: "email@windster.com", task: "3" },
  { id: 3, name: "Michael Gough", email: "email@windster.com", task: "2" },
  { id: 4, name: "Lana Byrd", email: "email@windster.com", task: "1" },
  { id: 5, name: "Thomas Lean", email: "email@windster.com", task: "0" },
];

const Users = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            👥 Top Users
          </h2>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            View all
          </a>
        </div>

        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {users.map((user) => (
            <li key={user.id} className="py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                  {user.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user.email}
                  </p>
                </div>
              </div>
              <span className="text-base font-semibold text-gray-900 dark:text-white">
                {user.task} Tasks
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
