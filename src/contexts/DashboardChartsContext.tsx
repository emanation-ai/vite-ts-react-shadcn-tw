import { IChartData, ICardHeader, IDashboardChartsContext } from "@/interfaces"
import React, { createContext, useState } from "react"
import charts_default from "../data/chart_data.json"

// @ts-ignore
export const DashboardChartsContext = createContext<IDashboardChartsContext>()

type Props = {
  children?: React.ReactNode
}

const DashboardChartsData: React.FC<Props> = ({ children }) => {
  let [chart_header, setChartHeaders] = useState<ICardHeader>(
    charts_default.chart_header
  )
  let [chart_data, setChartData] = useState<IChartData[]>(
    charts_default.chart_data
  )

  return (
    <DashboardChartsContext.Provider
      value={{ chart_header, chart_data, setChartHeaders, setChartData }}
    >
      {children}
    </DashboardChartsContext.Provider>
  )
}

export default DashboardChartsData
