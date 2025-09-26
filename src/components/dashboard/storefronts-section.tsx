"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, BarChart3, TrendingUp } from "lucide-react"
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import MapContainer and related components with SSR disabled
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => ({ default: mod.MapContainer })),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => ({ default: mod.TileLayer })),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => ({ default: mod.Marker })),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => ({ default: mod.Popup })),
  { ssr: false }
)

// Import Leaflet CSS (safe for SSR)
import 'leaflet/dist/leaflet.css'

export function StorefrontsSection() {
  useEffect(() => {
    // Dynamically import Leaflet and fix default markers (client-side only)
    import('leaflet').then((L) => {
      // Fix for default markers in react-leaflet (v4+)
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      })
    }).catch((error) => {
      console.error('Failed to load Leaflet:', error)
    })

    // Additional setup if needed (e.g., for custom icons)
  }, [])

  // Coordinates for a central point in India (e.g., Mumbai)
  const indiaPosition = [19.0760, 72.8777]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <Card className="p-6 bg-white border border-border relative"> {/* Added relative for absolute positioning */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Storefronts</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
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

        {/* World Map Visualization using Leaflet */}
        <div className="relative h-64 rounded-lg overflow-hidden bg-gray-100">
          <MapContainer
            center={[20, 0]} // Centered on world view
            zoom={2}
            style={{ height: '100%', width: '100%' }}
            className="rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marker for India */}
            <Marker position={indiaPosition}>
              <Popup>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="w-3 h-3 bg-[var(--color-apple-orange)] rounded-full mx-auto mb-1"></div>
                  <span className="text-sm font-medium">India Storefront</span>
                </motion.div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Progress bar at bottom - positioned relative to the card */}
        <div className="mt-4 mb-4"> {/* Adjusted to be static below the map for better layout */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>$0</span>
            <span>$2.5k</span>
          </div>
          <div className="w-full bg-white/50 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1, delay: 0.7 }}
              className="bg-[var(--color-apple-orange)] h-2 rounded-full"
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[var(--color-apple-orange)] rounded-sm"></div>
          <span className="text-sm text-muted-foreground">India</span>
        </div>
      </Card>
    </motion.div>
  )
}