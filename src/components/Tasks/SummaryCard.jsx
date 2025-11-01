import React from 'react'

function SummaryCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
    {[
        { title: "Total Tasks", value: 42, color: "bg-blue-500" },
        { title: "Open", value: 10, color: "bg-orange-500" },
        { title: "In Progress", value: 15, color: "bg-yellow-500" },
        { title: "Completed", value: 17, color: "bg-green-500" },
    ].map((card) => (
        <div key={card.title} className={`p-4 rounded-xl text-white ${card.color}`}>
        <h4 className="text-lg font-semibold">{card.title}</h4>
        <p className="text-2xl font-bold">{card.value}</p>
        </div>
    ))}
    </div>
  )
}

export default SummaryCard