"use client"

import { motion } from "framer-motion"
import { TopListTable } from "./top-list-table"
import { BiggestChangesTable } from "./biggest-changes-table"

export function DataTablesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <TopListTable />
      <BiggestChangesTable />
    </motion.div>
  )
}
