"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, BarChart3, TrendingUp, MoreHorizontal } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { useAppSelector } from "@/src/lib/hooks"

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-border rounded-lg shadow-lg">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function TrendsSection() {
  const { trends } = useAppSelector((state) => state.dashboard)

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <Card className="p-6 bg-white border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Trends</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Plus size={16} />
            </Button>
            <Button variant="ghost" size="sm" className="text-[var(--color-apple-orange)]">
              Spend
            </Button>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <BarChart3 size={14} />
              </Button>
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <TrendingUp size={14} />
              </Button>
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <MoreHorizontal size={14} />
              </Button>
            </div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trends} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip content={<CustomTooltip />} />

              {/* Spend Line */}
              <Line
                type="monotone"
                dataKey="spend"
                stroke="var(--color-apple-orange)"
                strokeWidth={3}
                dot={{ fill: "var(--color-apple-orange)", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "var(--color-apple-orange)", strokeWidth: 2 }}
                name="Spend"
              />

              {/* Installs Line */}
              <Line
                type="monotone"
                dataKey="installs"
                stroke="#60a5fa"
                strokeWidth={2}
                dot={{ fill: "#60a5fa", strokeWidth: 2, r: 3 }}
                activeDot={{ r: 5, stroke: "#60a5fa", strokeWidth: 2 }}
                name="Installs"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[var(--color-apple-orange)] rounded-sm"></div>
            <span className="text-sm text-muted-foreground">Spend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
            <span className="text-sm text-muted-foreground">Installs</span>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
