import React from "react";

export default function DashboardPage() {
  // Dummy data 
  const todaysHomework = [
    { id: 1, title: "Math Worksheet", class: "Math 101" },
    { id: 2, title: "Read Chapter 3", class: "English 201" },
  ];
  const tomorrowsHomework = [
    { id: 3, title: "Science Project", class: "Science 102" },
  ];
  const joinedClasses = [
    { id: 1, name: "Math 101" },
    { id: 2, name: "English 201" },
    { id: 3, name: "Science 102" },
  ];

  return (
    <div className="p-8 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Due Today's Homework</h2>
        <ul className="space-y-2">
          {todaysHomework.length === 0 ? (
            <li className="text-gray-500">No homework due today.</li>
          ) : (
            todaysHomework.map(hw => (
              <li key={hw.id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
                <span className="font-semibold">{hw.title}</span> <span className="text-gray-500">({hw.class})</span>
              </li>
            ))
          )}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Due Tomorrow's Homework</h2>
        <ul className="space-y-2">
          {tomorrowsHomework.length === 0 ? (
            <li className="text-gray-500">No homework due tomorrow.</li>
          ) : (
            tomorrowsHomework.map(hw => (
              <li key={hw.id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
                <span className="font-semibold">{hw.title}</span> <span className="text-gray-500">({hw.class})</span>
              </li>
            ))
          )}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Joined Classes</h2>
        <ul className="flex flex-wrap gap-4">
          {joinedClasses.length === 0 ? (
            <li className="text-gray-500">You have not joined any classes.</li>
          ) : (
            joinedClasses.map(cls => (
              <li key={cls.id} className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-4 py-2 rounded shadow">
                {cls.name}
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
}
