import { IChartData, ICardHeader, IDashboardChartsContext } from "@/interfaces"
import { chartData, chartHeader } from "./chartsDefault.json"
import React, { createContext, useState } from "react"

// @ts-ignore
export const DashboardChartsContext = createContext<IDashboardChartsContext>()

type Props = {
  children?: React.ReactNode
}

const DashboardChartsData: React.FC<Props> = ({ children }) => {
  let [chart_header, setChartHeaders] = useState<ICardHeader>(chartHeader)
  let [chart_data, setChartData] = useState<IChartData[]>(chartData)

  return (
    <DashboardChartsContext.Provider
      value={{ chart_header, chart_data, setChartHeaders, setChartData }}
    >
      {children}
    </DashboardChartsContext.Provider>
  )
}

export default DashboardChartsData
