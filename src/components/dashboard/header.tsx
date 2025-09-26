"use client"

import { motion } from "framer-motion"
import { Calendar, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks"

export function DashboardHeader() {
  const { dateRange } = useAppSelector((state) => state.dashboard)
  const dispatch = useAppDispatch()

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="bg-white border-b border-border px-4 md:px-8 py-4"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="pt-12 md:pt-0">
          <h1 className="text-xl md:text-2xl font-semibold text-foreground">Overview dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            A consolidated view of your app efficiency by storefronts and key metrics.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          {/* Poll Name Selector */}
          <button className="flex items-center gap-2 text-xs md:text-sm bg-transparent border border-input rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground">
            <div className="flex items-center justify-center w-8 h-6 bg-red-500 text-white text-xs font-bold rounded">
              PDF
            </div>
            <span className="font-medium">PDF Name</span>
            <ChevronDown size={16} />
          </button>

          <div className="flex items-center gap-2">
            {/* Date Range Picker */}
            <Button variant="outline" className="flex items-center gap-2 text-xs md:text-sm bg-transparent">
              <Calendar size={16} />
              <span className="font-medium">Jul 5 - Jul 11, 2025</span>
            </Button>

            {/* Filter Button */}
            <Button variant="outline" size="icon">
              <Filter size={16} />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
