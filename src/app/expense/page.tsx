import React from 'react'
import Sidebar from '../../components/Sidebar'
import ExpensesComparison from '../../components/ExpensesComparison'
import ExpensesBreakdown from '../../components/ExpensesBreakdown'
import { Button } from '../../components/ui/button'

export default function WealthWise() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Expenses Comparison</h1>
          <div className="space-x-4">
            <Button variant="outline">SET BUDGET</Button>
            <Button>+ ADD EXPENSE</Button>
          </div>
        </div>
        <ExpensesComparison />
        <ExpensesBreakdown />
      </main>
    </div>
  )
}