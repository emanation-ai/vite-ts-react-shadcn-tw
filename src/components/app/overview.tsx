'use client'

import { DashboardChartsContext } from '@/contexts/DashboardChartsContext'
import { IDashboardChartsContext } from '@/interfaces'
import { useContext } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

export function Overview() {
  const { chart_data } = useContext<IDashboardChartsContext>(
    DashboardChartsContext,
  )

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chart_data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: number) => `$${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
