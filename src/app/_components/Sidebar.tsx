"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Helper to check active link
  const isActive = (href: string) => pathname === href;

  // Color codes
  const activeBg = "#f9f8f2"; // yipi-cream
  const inactiveColor = "#010101"; // yipi-black

  return (
    <>
      {/* Hamburger button: only visible on small screens */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#ff8201] text-white p-2 rounded"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      {/* Sidebar: hidden on mobile unless open, always visible on md+ */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 flex flex-col justify-between p-4 shadow-lg transition-transform z-40
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
        style={{
          backgroundColor: "#ff8201", // yipi-orange
          color: "#010101", // yipi-black
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
                className={`block px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8201] hover:bg-[#f5a440] ${
                  isActive("/dashboard") ? "bg-[#f5a440] font-bold" : ""
                }`}
                style={{
                  color: inactiveColor,
                }}
              >
                Homepage
              </Link>
            </li>
            <li>
              <Link
                href="/classes"
                className={`block px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8201] hover:bg-[#f5a440] ${
                  isActive("/classes") ? "bg-[#f5a440] font-bold" : ""
                }`}
                style={{
                  color: inactiveColor,
                }}
              >
                Classes
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className={`block px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8201] hover:bg-[#f5a440] ${
                  isActive("/courses") ? "bg-[#f5a440] font-bold" : ""
                }`}
                style={{
                  color: inactiveColor,
                }}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/reports"
                className={`block px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8201] hover:bg-[#f5a440] ${
                  isActive("/reports") ? "bg-[#f5a440] font-bold" : ""
                }`}
                style={{
                  color: inactiveColor,
                }}
              >
                Reports
              </Link>
            </li>
            <li>
              <Link
                href="/vocabulary"
                className={`block px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8201] hover:bg-[#f5a440] ${
                  isActive("/vocabulary") ? "bg-[#f5a440] font-bold" : ""
                }`}
                style={{
                  color: inactiveColor,
                }}
              >
                Vocabulary
              </Link>
            </li>
            <li>
              <Link
                href="/error-note"
                className={`block px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8201] hover:bg-[#f5a440] ${
                  isActive("/error-note") ? "bg-[#f5a440] font-bold" : ""
                }`}
                style={{
                  color: inactiveColor,
                }}
              >
                Error Note
              </Link>
            </li>
          </ul>
          {/* Section grouping for account */}
          <div className="mt-8 pt-4">
            <hr style={{ borderColor: "#010101", marginBottom: "0.5rem" }} />
            <div
              className="text-xs uppercase font-bold mb-2"
              style={{ color: "#010101" }}
            >
              Account
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/settings"
                  className={`block px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8201] hover:bg-[#f5a440] ${
                    isActive("/settings") ? "bg-[#f5a440] font-bold" : ""
                  }`}
                  style={{
                    color: inactiveColor,
                  }}
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="/logout"
                  className={`block px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8201] hover:bg-[#f5a440] ${
                    isActive("/logout") ? "bg-[#f5a440] font-bold" : ""
                  }`}
                  style={{
                    color: inactiveColor,
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );