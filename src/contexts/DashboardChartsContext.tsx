import React, { createContext, useState } from 'react'
import { IChardData, ICardHeader, IDashboardChartsContext } from '@/interfaces'

// @ts-ignore
export const DashboardChartsContext = createContext<IDashboardChartsContext>()

type Props = {
  children?: React.ReactNode
}

const DashboardChartsData: React.FC<Props> = ({ children }) => {
  let [chart_header, setChartHeaders] = useState<ICardHeader>({
    title: 'Overview',
    subtitle: 'Sales per month',
  })
  let [chart_data, setChartData] = useState<IChardData[]>([
    {
      name: 'Jan',
      total: 5000,
    },
    {
      name: 'Feb',
      total: 3400,
    },
    {
      name: 'Mar',
      total: 4100,
    },
    {
      name: 'Apr',
      total: 3800,
    },
    {
      name: 'May',
      total: 2900,
    },
    {
      name: 'Jun',
      total: 3000,
    },
    {
      name: 'Jul',
      total: 2700,
    },
    {
      name: 'Aug',
      total: 3800,
    },
    {
      name: 'Sep',
      total: 3700,
    },
    {
      name: 'Oct',
      total: 2800,
    },
    {
      name: 'Nov',
      total: 2700,
    },
    {
      name: 'Dec',
      total: 3900,
    },
  ])

  return (
    <DashboardChartsContext.Provider
      value={{ chart_header, chart_data, setChartHeaders, setChartData }}
    >
      {children}
    </DashboardChartsContext.Provider>
  )
}

export default DashboardChartsData
