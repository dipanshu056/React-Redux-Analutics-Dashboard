"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, ArrowUpDown } from "lucide-react"

const tabs = ["Campaigns", "Ad Groups", "Keywords", "Ads"] as const

// Sample campaign data matching the original structure
const campaignData = [
  {
    id: 1,
    name: "Discovery",
    type: "LOC",
    location: "India",
    spend: 6109.89,
    spendChange: "+27.42%",
    installs: 44,
    installsChange: "+27.42%",
    conversion: 0.00,
    conversionChange: "0%",
    spendBg: "#ffce84",
    installsBg: "#f4f8f9",
    conversionBg: "transparent"
  },
  {
    id: 2,
    name: "Competitor",
    type: "LOC",
    location: "India",
    spend: 6109.89,
    spendChange: "+27.42%",
    installs: 121,
    installsChange: "+27.42%",
    conversion: 0.00,
    conversionChange: "0%",
    spendBg: "#ffdcc6",
    installsBg: "#fffdfd",
    conversionBg: "transparent"
  },
  {
    id: 3,
    name: "Today tab",
    type: "LOC",
    location: "India",
    spend: 6109.89,
    spendChange: "+27.42%",
    installs: 44,
    installsChange: "+27.42%",
    conversion: 0.00,
    conversionChange: "0%",
    spendBg: "#fff0e6",
    installsBg: "#fffdfd",
    conversionBg: "transparent"
  },
  {
    id: 4,
    name: "Branding",
    type: "LOC",
    location: "India",
    spend: 6109.89,
    spendChange: "+27.42%",
    installs: 44,
    installsChange: "+27.42%",
    conversion: 0.00,
    conversionChange: "0%",
    spendBg: "#f1fbfc",
    installsBg: "#e7eded",
    conversionBg: "transparent"
  }
]

export function TopListTable() {
  const [selectedTab, setSelectedTab] = useState("Campaigns")

  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-6 h-full">
        <h2 className="text-lg font-semibold text-foreground px-2">
          Top List
        </h2>
        
        <Card className="p-6 bg-white border border-border w-full flex-1">
          <div className="flex flex-col gap-6 h-full">
            {/* Tab Navigation */}
            <div className="flex flex-col w-full">
              <div className="flex justify-start items-center px-4">
                <div className="flex gap-8 flex-wrap">
                  {tabs.map((tab) => (
                    <div key={tab} className="flex flex-col items-center">
                      <button
                        onClick={() => setSelectedTab(tab)}
                        className={`text-sm font-medium leading-5 text-foreground hover:opacity-80 transition-opacity py-2 ${selectedTab === tab ? 'font-semibold' : 'font-normal'}`}
                      >
                        {tab}
                      </button>
                      {selectedTab === tab && (
                        <div className="w-full h-[3px] bg-[#ff8800] mt-2"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-full h-[1px] bg-border mt-4"></div>
            </div>

            {/* Table Header */}
            <div className="flex justify-end items-center px-4">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <ArrowUpDown size={16} className="text-muted-foreground" />
                  <span className="text-sm font-normal leading-normal text-foreground">Spend</span>
                  <ChevronDown size={16} className="text-muted-foreground" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-normal leading-normal text-foreground">Installs</span>
                  <ChevronDown size={16} className="text-muted-foreground" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-normal leading-normal text-foreground">Conver...</span>
                  <ChevronDown size={16} className="text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Campaign List */}
            <div className="flex flex-col w-full gap-3 flex-1">
              {campaignData.map((campaign, index) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex justify-start items-center w-full py-3 border-b border-gray-100 last:border-b-0"
                >
                  {/* Campaign Info */}
                  <div className="flex items-start gap-3 w-[35%]">
                    <div className="w-[12px] h-[12px] bg-[#46a756] rounded-[6px] mt-1 flex-shrink-0"></div>
                    <div className="flex flex-col gap-1 flex-1">
                      <span className="text-sm font-medium text-foreground">
                        {campaign.name} ({campaign.type})
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {campaign.location}
                      </span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex justify-center items-center flex-1">
                    <div className="flex gap-0 w-full">
                      {/* Spend */}
                      <div 
                        className="flex flex-col justify-center items-center p-3 flex-1 rounded-l-sm"
                        style={{ backgroundColor: campaign.spendBg }}
                      >
                        <span className="text-sm font-semibold text-foreground">
                          ${campaign.spend.toFixed(2)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {campaign.spendChange}
                        </span>
                      </div>

                      {/* Installs */}
                      <div 
                        className="flex flex-col justify-center items-center p-3 flex-1"
                        style={{ backgroundColor: campaign.installsBg }}
                      >
                        <span className="text-sm font-semibold text-foreground">
                          ${campaign.installs}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {campaign.installsChange}
                        </span>
                      </div>

                      {/* Conversion */}
                      <div 
                        className="flex flex-col justify-center items-center p-3 flex-1 rounded-r-sm border-l border-[#9b9b9b]/20"
                        style={{ backgroundColor: campaign.conversionBg }}
                      >
                        <span className="text-sm font-semibold text-foreground">
                          {campaign.conversion.toFixed(2)}%
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {campaign.conversionChange}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
                      </div>
        </Card>
      </div>
    </section>
  )
}