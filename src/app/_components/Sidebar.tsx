import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col justify-between p-4 shadow-lg">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-800 transition">Homepage</Link>
          </li>
          <li>
            <Link href="/classes" className="block px-4 py-2 rounded hover:bg-gray-800 transition">Classes</Link>
          </li>
          <li>
            <Link href="/courses" className="block px-4 py-2 rounded hover:bg-gray-800 transition">Courses</Link>
          </li>
          <li>
            <Link href="/reports" className="block px-4 py-2 rounded hover:bg-gray-800 transition">Reports</Link>
          </li>
          <li>
            <Link href="/vocabulary" className="block px-4 py-2 rounded hover:bg-gray-800 transition">Vocabulary</Link>
          </li>
          <li>
            <Link href="/error-note" className="block px-4 py-2 rounded hover:bg-gray-800 transition">Error Note</Link>
          </li>
        </ul>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <ul className="space-y-2">
            <li>
              <Link href="/settings" className="block px-4 py-2 rounded hover:bg-gray-800 transition">Settings</Link>
            </li>
            <li>
              <Link href="/logout" className="block px-4 py-2 rounded hover:bg-gray-800 transition">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
