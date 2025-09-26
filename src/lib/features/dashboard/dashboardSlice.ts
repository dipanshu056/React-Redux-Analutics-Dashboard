import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface MetricData {
  conversionsRoas: number
  spend: number
  percentage: number
}

export interface CampaignData {
  id: string
  name: string
  type: "Discovery" | "Competitor" | "Today tab" | "Branding"
  spend: number
  installs: number
  conversion: number
  change: number
  status: "active" | "paused"
}

export interface TrendData {
  date: string
  spend: number
  installs: number
}

export interface DashboardState {
  dateRange: {
    start: string
    end: string
  }
  totalSummary: {
    metrics: MetricData[]
  }
  campaigns: CampaignData[]
  trends: TrendData[]
  selectedTab: "Campaigns" | "Ad Groups" | "Keywords" | "Ads"
  loading: boolean
  error: string | null
}

const initialState: DashboardState = {
  dateRange: {
    start: "2025-07-05",
    end: "2025-07-11",
  },
  totalSummary: {
    metrics: [
      { conversionsRoas: 0.0, spend: 0, percentage: 0 },
      { conversionsRoas: 6109.89, spend: 6109.89, percentage: 27.4 },
      { conversionsRoas: 0.0, spend: 0, percentage: 0 },
      { conversionsRoas: 2.01, spend: 2.01, percentage: 0 },
      { conversionsRoas: 2.91, spend: 2.91, percentage: 0 },
      { conversionsRoas: 0, spend: 0, percentage: 0 },
    ],
  },
  campaigns: [
    {
      id: "1",
      name: "Discovery",
      type: "Discovery",
      spend: 6109.89,
      installs: 44,
      conversion: 0.0,
      change: 27.4,
      status: "active",
    },
    {
      id: "2",
      name: "Competitor",
      type: "Competitor",
      spend: 6109.89,
      installs: 121,
      conversion: 0.0,
      change: 27.4,
      status: "active",
    },
    {
      id: "3",
      name: "Today tab",
      type: "Today tab",
      spend: 6109.89,
      installs: 44,
      conversion: 0.0,
      change: 27.4,
      status: "active",
    },
    {
      id: "4",
      name: "Branding",
      type: "Branding",
      spend: 6109.89,
      installs: 44,
      conversion: 0.0,
      change: 27.4,
      status: "active",
    },
  ],
  trends: [
    { date: "5 Jul", spend: 800, installs: 12 },
    { date: "6 Jul", spend: 950, installs: 15 },
    { date: "7 Jul", spend: 1200, installs: 18 },
    { date: "8 Jul", spend: 1100, installs: 16 },
    { date: "9 Jul", spend: 1300, installs: 20 },
    { date: "10 Jul", spend: 1400, installs: 22 },
    { date: "11 Jul", spend: 1500, installs: 25 },
  ],
  selectedTab: "Campaigns",
  loading: false,
  error: null,
}

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDateRange: (state, action: PayloadAction<{ start: string; end: string }>) => {
      state.dateRange = action.payload
    },
    setSelectedTab: (state, action: PayloadAction<"Campaigns" | "Ad Groups" | "Keywords" | "Ads">) => {
      state.selectedTab = action.payload
    },
    updateCampaignStatus: (state, action: PayloadAction<{ id: string; status: "active" | "paused" }>) => {
      const campaign = state.campaigns.find((c) => c.id === action.payload.id)
      if (campaign) {
        campaign.status = action.payload.status
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const { setDateRange, setSelectedTab, updateCampaignStatus, setLoading, setError } = dashboardSlice.actions
export default dashboardSlice.reducer
