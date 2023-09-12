import React, { createContext, useState } from 'react'
import {
  IDashboardMainContext,
  IDashboardStats,
  IDashboardTabs,
} from '@/interfaces'

// @ts-ignore
export const DashboardMainContext = createContext<IDashboardMainContext>()

type Props = {
  children?: React.ReactNode
}

const DashboardMainData: React.FC<Props> = ({ children }) => {
  let [main, setMain] = useState<IDashboardTabs>({
    title: 'Dashboard',
    tabs: [
      {
        title: 'Overview',
        value: 'overview',
        disabled: false,
      },
      {
        title: 'Analytics',
        value: 'analytics',
        disabled: true,
      },
      {
        title: 'Reports',
        value: 'reports',
        disabled: true,
      },
      {
        title: 'Notifications',
        value: 'notifications',
        disabled: true,
      },
    ],
  })
  let [stats, setStats] = useState<IDashboardStats[]>([
    {
      title: 'Total Revenue',
      formatted_value: '$45,231.89',
      label: '+20.1% from last month',
    },
    {
      title: 'Subscriptions',
      formatted_value: '+2350',
      label: '+180.1% from last month',
    },
    {
      title: 'Total Revenue',
      formatted_value: '+12,234',
      label: '+19% from last month',
    },
    {
      title: 'Total Revenue',
      formatted_value: '+573',
      label: '+201 since last hour',
    },
  ])

  return (
    <DashboardMainContext.Provider value={{ main, stats, setMain, setStats }}>
      {children}
    </DashboardMainContext.Provider>
  )
}

export default DashboardMainData
