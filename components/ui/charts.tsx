'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import { type ChartConfig, ChartContainer } from '@/components/ui/chart'
import { Badge } from '@/components/ui/badge'
import { TrendingUp } from 'lucide-react'
import { useRef, useState } from 'react'
import { useSpring, useMotionValueEvent } from 'motion/react'

const chartData = [
  { month: 'জানু', mobile: 245 },
  { month: 'ফেব', mobile: 654 },
  { month: 'মার্চ', mobile: 387 },
  { month: 'এপ্রি', mobile: 521 },
  { month: 'মে', mobile: 412 },
  { month: 'জুন', mobile: 598 },
  { month: 'জুল', mobile: 640 },
  { month: 'আগ', mobile: 743 },
  { month: 'সেপ্ট', mobile: 690 },
  { month: 'অক্টো', mobile: 720 },
  { month: 'নভে', mobile: 780 },
  { month: 'ডিসে', mobile: 812 },
]

const chartConfig = {
  mobile: {
    label: 'বিক্রয়',
    color: '#FCA070',
  },
} satisfies ChartConfig

export function ClippedAreaChart() {
  const chartRef = useRef<HTMLDivElement>(null)
  const [axis, setAxis] = useState(0)

  // motion values
  const springX = useSpring(0, {
    damping: 30,
    stiffness: 100,
  })
  const springY = useSpring(0, {
    damping: 30,
    stiffness: 100,
  })

  useMotionValueEvent(springX, 'change', (latest) => {
    setAxis(latest)
  })

  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <div>
          <h3 className="text-lg font-bold text-zinc-900">
            প্ল্যাটফর্ম পারফরম্যান্স
          </h3>
          <p className="text-xs text-zinc-500 tracking-widest font-semibold mt-1">
            গত ৩০ দিনের প্রবৃদ্ধি
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center pb-2">
            <span className="font-semibold">৳{springY.get().toFixed(0)}</span>
            <Badge variant="secondary" className="text-emerald-600">
              <TrendingUp className="h-4 w-4" />
              <span>+২৪%</span>
            </Badge>
          </div>
          <p className="text-zinc-500 text-sm">গত মাসের মোট বিক্রয়</p>
        </div>
      </div>
      <ChartContainer
        ref={chartRef}
        className="h-54 w-full"
        config={chartConfig}
      >
        <AreaChart
          className="overflow-visible"
          accessibilityLayer
          data={chartData}
          onMouseMove={(state) => {
            const x = state.activeCoordinate?.x
            // recharts 3 removed activePayload from mouse state — read the
            // active datum through activeTooltipIndex (which may be a string).
            const index = state.activeTooltipIndex
            const dataValue =
              index != null ? chartData[Number(index)]?.mobile : undefined
            if (x && dataValue !== undefined) {
              springX.set(x)
              springY.set(dataValue)
            }
          }}
          onMouseLeave={() => {
            springX.set(chartRef.current?.getBoundingClientRect().width || 0)
            springY.jump(chartData[chartData.length - 1]?.mobile || 0)
          }}
          margin={{
            right: 0,
            left: 0,
          }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            horizontalCoordinatesGenerator={(props) => {
              const { height } = props
              return [0, height - 30]
            }}
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            interval="preserveStartEnd"
          />
          <Area
            dataKey="mobile"
            type="monotone"
            fill="url(#gradient-cliped-area-mobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            clipPath={`inset(0 ${
              Number(chartRef.current?.getBoundingClientRect().width) - axis
            } 0 0)`}
          />
          <line
            x1={axis}
            y1={0}
            x2={axis}
            y2={'85%'}
            stroke="var(--color-mobile)"
            strokeDasharray="3 3"
            strokeLinecap="round"
            strokeOpacity={0.2}
          />
          <rect
            x={axis - 50}
            y={0}
            width={50}
            height={18}
            fill="var(--color-mobile)"
          />
          <text
            x={axis - 25}
            fontWeight={600}
            y={13}
            textAnchor="middle"
            fill="#02254b"
          >
            ৳{springY.get().toFixed(0)}
          </text>
          {/* this is a ghost line behind graph */}
          <Area
            dataKey="mobile"
            type="monotone"
            fill="none"
            stroke="var(--color-mobile)"
            strokeOpacity={0.1}
          />
          <defs>
            <linearGradient
              id="gradient-cliped-area-mobile"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="var(--color-mobile)"
                stopOpacity={0.2}
              />
              <stop
                offset="95%"
                stopColor="var(--color-mobile)"
                stopOpacity={0}
              />
              <mask id="mask-cliped-area-chart">
                <rect x={0} y={0} width={'50%'} height={'100%'} fill="white" />
              </mask>
            </linearGradient>
          </defs>
        </AreaChart>
      </ChartContainer>
    </>
  )
}
