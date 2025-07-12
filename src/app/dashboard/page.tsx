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
            <li style={{ color: "#d7720e" }}>No homework due today.</li>
          ) : (
            todaysHomework.map((hw) => (
              <li
                key={hw.id}
                style={{
                  backgroundColor: "#f5a440", // yipi-orange-light
                  color: "#010101", // yipi-black
                  borderRadius: "0.5rem",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  padding: "1rem",
                }}
              >
                <span style={{ fontWeight: 600 }}>{hw.title}</span>{" "}
                <span style={{ color: "#29281c" }}>({hw.class})</span>
              </li>
            ))
          )}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Due Tomorrow's Homework</h2>
        <ul className="space-y-2">
          {tomorrowsHomework.length === 0 ? (
            <li style={{ color: "#d7720e" }}>No homework due tomorrow.</li>
          ) : (
            tomorrowsHomework.map((hw) => (
              <li
                key={hw.id}
                style={{
                  backgroundColor: "#ff8201", // yipi-orange
                  color: "#f9f8f2", // yipi-cream
                  borderRadius: "0.5rem",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  padding: "1rem",
                }}
              >
                <span style={{ fontWeight: 600 }}>{hw.title}</span>{" "}
                <span style={{ color: "#29281c" }}>({hw.class})</span>
              </li>
            ))
          )}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Joined Classes</h2>
        <ul className="flex flex-wrap gap-4">
          {joinedClasses.length === 0 ? (
            <li style={{ color: "#d7720e" }}>
              You have not joined any classes.
            </li>
          ) : (
            joinedClasses.map((cls) => (
              <li
                key={cls.id}
                style={{
                  backgroundColor: "#74c645", // yipi-green
                  color: "#030107", // yipi-navy
                  borderRadius: "0.5rem",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  padding: "0.5rem 1.5rem",
                  fontWeight: 600,
                }}
              >
                {cls.name}
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
}
