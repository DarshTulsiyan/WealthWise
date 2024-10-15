import React, { act } from 'react'
import { BarChart2, PieChart, Target, FileText, TrendingUp, Calendar, User, LogOut } from 'lucide-react'

const menuItems = [
  { icon: BarChart2, label: 'Overview' },
  { icon: PieChart, label: 'Budgeting' },
  { icon: Target, label: 'Goals' },
  { icon: FileText, label: 'Bills' },
  { icon: TrendingUp, label: 'Insights'},
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">WealthWise</h1>
      <nav className="flex-1">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={`mb-4 rounded-md`}>
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded-md transition-colors">
                <item.icon className="mr-3" size={20} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="flex items-center mb-4">
          <Calendar size={20} className="mr-3 text-teal-500" />
          <span className="text-gray-300">16/08/2024</span>
        </div>
        <div className="flex items-center mb-4">
          <User size={20} className="mr-3 text-teal-500" />
          <span className="text-gray-300">Vivek</span>
        </div>
        <button className="flex items-center text-gray-400 hover:text-white">
          <LogOut size={20} className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}