import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside
      className="h-screen w-64 flex flex-col justify-between p-4 shadow-lg"
      style={{
        backgroundColor: "#ff8201", // yipi-orange
        color: "#f9f8f2", // yipi-cream
      }}
    >
      <div className="mb-6">
        <img
          src="logo.jpg"
          alt="Sidebar Logo"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded transition"
              style={{
                color: "#f9f8f2",
              }}
            >
              Homepage
            </Link>
          </li>
          <li>
            <Link
              href="/classes"
              className="block px-4 py-2 rounded transition"
              style={{
                color: "#f9f8f2",
              }}
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className="block px-4 py-2 rounded transition"
              style={{
                color: "#f9f8f2",
              }}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href="/reports"
              className="block px-4 py-2 rounded transition"
              style={{
                color: "#f9f8f2",
              }}
            >
              Reports
            </Link>
          </li>
          <li>
            <Link
              href="/vocabulary"
              className="block px-4 py-2 rounded transition"
              style={{
                color: "#f9f8f2",
              }}
            >
              Vocabulary
            </Link>
          </li>
          <li>
            <Link
              href="/error-note"
              className="block px-4 py-2 rounded transition"
              style={{
                color: "#f9f8f2",
              }}
            >
              Error Note
            </Link>
          </li>
        </ul>
        <div className="mt-8 pt-4" style={{ borderTop: "1px solid #f9f8f2" }}>
          <ul className="space-y-2">
            <li>
              <Link
                href="/settings"
                className="block px-4 py-2 rounded transition"
                style={{
                  color: "#f9f8f2",
                }}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/logout"
                className="block px-4 py-2 rounded transition"
                style={{
                  color: "#f9f8f2",
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
