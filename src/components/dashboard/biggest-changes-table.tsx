"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useAppSelector } from "@/src/lib/hooks"

const tabs = ["Campaigns", "Ad Groups", "Keywords", "Ads"]

// Sample campaign data matching the original structure
const campaignData = [
  {
    id: 1,
    name: "Discovery",
    type: "LOC",
    location: "India",
    spend: 6109.89,
    value: "$6,109.89",
    change: "+27.42%",
    barWidth: "75%",
    barColor: "#ff6100"
  },
  {
    id: 2,
    name: "Competitor",
    type: "LOC", 
    location: "India",
    spend: 6109.89,
    value: "$6,109.89",
    change: "+27.42%",
    barWidth: "45%", 
    barColor: "#ff6100"
  },
  {
    id: 3,
    name: "Today tab",
    type: "LOC",
    location: "India",
    spend: 6109.89,
    value: "$6,109.89",
    change: "+27.42%",
    barWidth: "25%",
    barColor: "#f7ce02"
  },
  {
    id: 4,
    name: "Branding",
    type: "LOC",
    location: "India", 
    spend: 6109.89,
    value: "$6,109.89",
    change: "+27.42%",
    barWidth: "15%",
    barColor: "#f7ce02"
  }
]

export function BiggestChangesTable() {
  const [selectedTab, setSelectedTab] = useState("Campaigns")
  // const { campaigns } = useAppSelector((state) => state.dashboard)

  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-6 h-full">
        <h3 className="text-lg font-semibold text-foreground px-2">
          Biggest Changes
        </h3>
        
        <Card className="p-6 bg-white border border-border w-full flex-1">
          <div className="flex flex-col gap-6 h-full">
            {/* Tab Navigation */}
            <div className="flex flex-col w-full">
              <div className="flex justify-start items-center px-4">
                <div className="flex gap-8 flex-wrap">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`text-sm font-medium leading-5 text-foreground hover:opacity-80 transition-opacity py-2 ${selectedTab === tab ? 'font-semibold' : 'font-normal'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Active tab indicator */}
              <div className="ml-4 mt-2 w-[80px] h-[3px] bg-[var(--color-apple-orange)]"></div>
              
              {/* Divider */}
              <div className="w-full h-[1px] bg-border mt-4"></div>
            </div>

            {/* Dropdown */}
            <div className="px-4">
              <div className="w-[120px]">
                <div className="relative">
                  <select className="w-full px-3 py-2 pr-8 text-sm bg-white border border-border rounded appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--color-apple-orange)] focus:border-transparent">
                    <option>Spend</option>
                    <option>Installs</option>
                    <option>Conversion</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="relative flex-1 min-h-[280px] px-4">
              {/* Campaign Items */}
              <div className="flex flex-col justify-between h-full py-4">
                {campaignData.map((campaign, index) => (
                  <motion.div
                    key={campaign.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between w-full py-3"
                  >
                    {/* Left: Campaign Info */}
                    <div className="flex items-start gap-3 w-[40%]">
                      <div className="w-[12px] h-[12px] bg-green-500 rounded-[6px] mt-1 flex-shrink-0"></div>
                      <div className="flex flex-col gap-1 flex-1">
                        <span className="text-sm font-medium text-foreground">
                          {campaign.name} ({campaign.type})
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {campaign.location}
                        </span>
                      </div>
                    </div>

                    {/* Center: Bar Chart */}
                    <div className="flex-1 px-4">
                      <div className="relative h-[28px] bg-gray-100 rounded-sm">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: campaign.barWidth }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                          className="h-full rounded-sm transition-all duration-300"
                          style={{ backgroundColor: campaign.barColor }}
                        ></motion.div>
                      </div>
                    </div>

                    {/* Right: Values */}
                    <div className="flex flex-col items-end w-[25%]">
                      <span className="text-sm font-semibold text-foreground">
                        {campaign.value}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {campaign.change}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Horizontal divider lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="w-full h-[1px] bg-border opacity-20"></div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}