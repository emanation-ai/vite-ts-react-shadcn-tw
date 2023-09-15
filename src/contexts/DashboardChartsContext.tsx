import React, { createContext, useEffect, useState } from 'react'
import { IChardData, ICardHeader, IDashboardChartsContext } from '@/interfaces'
import data from '@/data/chart_data.json'

// @ts-ignore
export const DashboardChartsContext = createContext<IDashboardChartsContext>()

type Props = {
  children?: React.ReactNode
}

const DashboardChartsData: React.FC<Props> = ({ children }) => {
  let [chartHeader, setChartHeaders] = useState<ICardHeader>(data.chart_header)
  let [chartData, setChartData] = useState<IChardData[]>(data.chart_data)

  useEffect(() => {
    setChartHeaders((chartHeader = data.chart_header))
    setChartData((chartData = data.chart_data))
  }, [data.chart_header, data.chart_data])

  return (
    <DashboardChartsContext.Provider
      value={{ chartHeader, chartData, setChartHeaders, setChartData }}
    >
      {children}
    </DashboardChartsContext.Provider>
  )
}

export default DashboardChartsData
