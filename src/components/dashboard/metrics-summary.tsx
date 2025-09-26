"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useAppSelector } from "@/src/lib/hooks"

const metricLabels = [
  "Conversions ROAS",
  "Conversions ROAS",
  "Conversions ROAS",
  "Conversions ROAS",
  "Conversions ROAS",
  "Conversions ROAS",
]

const metricSubLabels = ["0%", "27.4%", "0%", "0%", "0%", "0%"]

export function MetricsSummary() {
  const { totalSummary } = useAppSelector((state) => state.dashboard)

  const formatValue = (value: number, index: number) => {
    if (index === 1) return `$${value.toFixed(2)}`
    if (index === 3 || index === 4) return `$${value.toFixed(2)}`
    if (index === 5) return value.toString()
    return `${value.toFixed(2)}%`
  }

  return (
    <div className="space-y-4">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg font-semibold text-foreground"
      >
        Total Summary
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {totalSummary.metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
            }}
          >
            <Card className="p-4 bg-white border border-border hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-medium">{metricLabels[index]}</p>

                <div className="space-y-1">
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-xl md:text-2xl font-bold text-foreground"
                  >
                    {formatValue(metric.conversionsRoas, index)}
                  </motion.p>

                  <p className="text-xs text-muted-foreground">{metricSubLabels[index]}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
