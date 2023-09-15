import React, { createContext, useEffect, useState } from 'react'
import {
  IDashboardMainContext,
  IDashboardStats,
  IDashboardTabs,
} from '@/interfaces'
import data from '@/data/main_data.json'

// @ts-ignore
export const DashboardMainContext = createContext<IDashboardMainContext>()

type Props = {
  children?: React.ReactNode
}

const DashboardMainData: React.FC<Props> = ({ children }) => {
  let [main, setMain] = useState<IDashboardTabs>(data.main)
  let [stats, setStats] = useState<IDashboardStats[]>(data.stats)

  useEffect(() => {
    setMain((main = data.main))
    setStats((stats = data.stats))
  }, [data.main, data.stats])

  return (
    <DashboardMainContext.Provider value={{ main, stats, setMain, setStats }}>
      {children}
    </DashboardMainContext.Provider>
  )
}

export default DashboardMainData
