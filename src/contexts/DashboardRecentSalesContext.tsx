import React, { createContext, useEffect, useState } from 'react'
import {
  ICardHeader,
  IDashboardRecentSalesContext,
  IRecentSales,
} from '@/interfaces'
import data from '@/data/recent_sales.json'

// @ts-ignore
export const DashboardRecentSalesContext = createContext<
  IDashboardRecentSalesContext
>()

type Props = {
  children?: React.ReactNode
}

const DashboardRecentSalesData: React.FC<Props> = ({ children }) => {
  let [sales_header, setSalesHeader] = useState<ICardHeader>(data.sales_header)
  let [recent_sales, setRecentSales] = useState<IRecentSales[]>(
    data.recent_sales,
  )

  useEffect(() => {
    setSalesHeader((sales_header = data.sales_header))
    setRecentSales((recent_sales = data.recent_sales))
  }, [data.sales_header, data.recent_sales])

  return (
    <DashboardRecentSalesContext.Provider
      value={{ sales_header, recent_sales, setSalesHeader, setRecentSales }}
    >
      {children}
    </DashboardRecentSalesContext.Provider>
  )
}

export default DashboardRecentSalesData
