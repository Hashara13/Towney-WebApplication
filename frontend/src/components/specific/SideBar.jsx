import React from 'react'
import { Link } from "react-router-dom";


const SideBar = () => {
  return (
    <div>
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-purple-900 shadow-md rtl:border-r-0 rtl:border-l dark:bg-purple-800 dark:border-gray-700">
    <div className="flex flex-col justify-between flex-1 mt-6">
      <nav className="-mx-3 space-y-6">
        <div className="space-y-3">
          <label className="px-1 text-sm text-white-800 uppercase active-true dark:text-gray-100">
            Account
          </label>

          <Link
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 border-t dark:hover:bg-gray-800 dark:hover:text-gray-100 hover:text-gray-700"
            to="/create/new"
          >
            <span className="mx-2 text-sm font-medium">Profile</span>
          </Link>

          <Link
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 border-t dark:hover:bg-gray-800 dark:hover:text-gray-100 hover:text-gray-700"
            to="/create/rates"
          >
            <span className="mx-2 text-sm font-medium">Rates</span>
          </Link>
        </div>

        <div className="space-y-3">
          <label className="px-1 text-sm text-gray-800 uppercase dark:text-gray-100">
            WorksSpace
          </label>

          <Link
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 border-t hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 hover:text-gray-700"
            to="/dashboard"
          >
            <span className="mx-2 text-sm font-medium">New Works</span>
          </Link>

          <Link
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 border-t hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 hover:text-gray-700"
            to="/dashboard"
          >
            <span className="mx-2 text-sm font-medium">My Works</span>
          </Link>
        </div>
        <div className="space-y-3">
          <label className="px-1 text-sm text-gray-800 uppercase dark:text-gray-100">
            Group
          </label>

          <Link
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 border-t hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 hover:text-gray-700"
            to="/dashboard"
          >
            <span className="mx-2 text-sm font-medium">New Group</span>
          </Link>

          <Link
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 border-t hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 hover:text-gray-700"
            to="/dashboard"
          >
            <span className="mx-2 text-sm font-medium">My Groups</span>
          </Link>
        </div>
        <Link
            className="flex items-center px-3 mt-20 py-2 text-gray-300 hover:text-gray-300 "
            to="/create"
          >
            <h3 className="mx-2 text-sm font-medium">How to Connect ?</h3>
          </Link>
      </nav>
    </div>

   
  </aside>
  </div>
  )
}

export default SideBar