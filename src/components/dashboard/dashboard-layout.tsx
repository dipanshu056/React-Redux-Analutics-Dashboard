"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Sidebar } from "./sidebar"
import { DashboardHeader } from "./header"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="md:ml-16 transition-all duration-300">
        <DashboardHeader />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-4 md:p-8"
        >
          {children}
        </motion.main>
      </div>
    </div>
  )
}
