"use client"

import { DashboardLayout } from "@/src/components/dashboard/dashboard-layout"
import { DataTablesSection } from "@/src/components/dashboard/data-tables-section"
import { MetricsSummary } from "@/src/components/dashboard/metrics-summary"
import { StorefrontsSection } from "@/src/components/dashboard/storefronts-section"
import { TrendsSection } from "@/src/components/dashboard/trends-section"
// import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
// import { MetricsSummary } from "@/components/dashboard/metrics-summary"
// import { StorefrontsSection } from "@/components/dashboard/storefronts-section"
// import { TrendsSection } from "@/components/dashboard/trends-section"
// import { DataTablesSection } from "@/components/dashboard/data-tables-section"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6 md:space-y-8">
        <motion.div variants={itemVariants}>
          <MetricsSummary />
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
          <StorefrontsSection />
          <TrendsSection />
        </motion.div>

        <motion.div variants={itemVariants}>
          <DataTablesSection />
        </motion.div>
      </motion.div>
    </DashboardLayout>
  )
}
