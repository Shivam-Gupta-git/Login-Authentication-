import React from "react";

function Notes() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">
            My Notes
          </h1>
          <p className="text-gray-600 mt-2">
            Keep track of your important thoughts and tasks.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Note Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-indigo-600 mb-2">Meeting Notes</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Discuss project milestones and timelines with the team.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-indigo-600 mb-2">Ideas</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Brainstorm new features and improvements for the app.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-indigo-600 mb-2">To-Do</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Complete the React dashboard and connect it to the backend API.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-indigo-600 mb-2">Personal Notes</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ideas for blog posts, tutorials, and learning notes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-indigo-600 mb-2">Shopping List</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Milk, bread, eggs, fruits, and office supplies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-indigo-600 mb-2">Learning Notes</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              React hooks, Tailwind CSS tips, and backend API integration ideas.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Notes;