"use client"

import * as React from "react"
import { ResponsiveContainer } from "recharts"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config?: Record<string, any>
    children: React.ComponentProps<typeof ResponsiveContainer>["children"]
  }
>(({ children, config, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    active?: boolean
    payload?: Array<any>
    label?: string
  }
>(({ active, payload, label, ...props }, ref) => {
  if (active && payload && payload.length) {
    return (
      <div ref={ref} className="rounded-lg border bg-background p-2 shadow-sm" {...props}>
        <div className="grid gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">{label}</span>
          </div>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 shrink-0 rounded-[2px]" style={{ backgroundColor: entry.color }} />
              <span className="text-sm font-medium">
                {entry.name}: {entry.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
})
ChartTooltip.displayName = "ChartTooltip"

export { ChartContainer, ChartTooltip }
