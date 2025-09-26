"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  Target,
  Users,
  TrendingUp,
  Settings,
  HelpCircle,
  Bell,
  Search,
  Calendar,
  PieChart,
  Menu,
  X,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  { icon: BarChart3, label: "Overview", active: true },
  { icon: Target, label: "Campaigns", active: false },
  { icon: Users, label: "Audiences", active: false },
  { icon: TrendingUp, label: "Performance", active: false },
  { icon: Search, label: "Keywords", active: false },
  { icon: PieChart, label: "Reports", active: false },
  { icon: Calendar, label: "Schedule", active: false },
  { icon: Bell, label: "Alerts", active: false },
  { icon: Settings, label: "Settings", active: false },
  { icon: HelpCircle, label: "Help", active: false },
]

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-white shadow-md"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Mobile Overlay */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          width: isExpanded ? "240px" : "64px",
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "bg-[var(--color-apple-orange)] h-screen flex flex-col py-6 fixed left-0 top-0 z-50 transition-all duration-300",
          "w-16 md:w-16",
          isExpanded && "w-60 md:w-60",
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-center mb-8 px-4">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-[var(--color-apple-orange)] rounded-sm"></div>
          </div>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-3 text-white font-semibold text-lg"
            >
              Apple Ads
            </motion.span>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-2 flex-1 px-2">
          {sidebarItems.map((item, index) => (
            <motion.button
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-left",
                item.active ? "bg-white text-[var(--color-apple-orange)]" : "text-white hover:bg-white/20",
              )}
            >
              <item.icon size={20} className="shrink-0" />
              {isExpanded && (
                <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="font-medium">
                  {item.label}
                </motion.span>
              )}
            </motion.button>
          ))}
        </nav>

        {/* Bottom Profile */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-3 py-3 mx-2 rounded-lg text-white hover:bg-white/20 transition-colors"
        >
          <div className="w-8 h-8 bg-white/20 rounded-full shrink-0 flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          {isExpanded && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-left">
              <p className="font-medium text-sm">John Doe</p>
              <p className="text-xs text-white/70">Admin</p>
            </motion.div>
          )}
        </motion.button>
      </motion.div>
    </>
  )
}
