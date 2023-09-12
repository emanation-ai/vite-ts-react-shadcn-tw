import React, { createContext, useState } from 'react'
import {
  ICardHeader,
  IDashboardRecentSalesContext,
  IRecentSales,
} from '@/interfaces'

// @ts-ignore
export const DashboardRecentSalesContext = createContext<
  IDashboardRecentSalesContext
>()

type Props = {
  children?: React.ReactNode
}

const DashboardRecentSalesData: React.FC<Props> = ({ children }) => {
  let [sales_header, setSalesHeader] = useState<ICardHeader>({
    title: 'Recent Sales',
    subtitle: 'You made 200 sales this month',
  })
  let [recent_sales, setRecentSales] = useState<IRecentSales[]>([
    {
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      amount: '+$1,999.00',
      avatar_src: '/avatars/01.png',
      avatar_alt: 'Olivia Martin Avatar',
      avatar_fallback: 'OM',
    },
    {
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      amount: '+$39.00',
      avatar_src: '/avatars/02.png',
      avatar_alt: 'Jackson Lee Avatar',
      avatar_fallback: 'JL',
    },
    {
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      amount: '+$299.00',
      avatar_src: '/avatars/03.png',
      avatar_alt: 'Isabella Nguyen Avatar',
      avatar_fallback: 'IN',
    },
    {
      name: 'William Kim',
      email: 'will@email.com',
      amount: '+$99.00',
      avatar_src: '/avatars/04.png',
      avatar_alt: 'William Kim Avatar',
      avatar_fallback: 'WK',
    },
  ])

  return (
    <DashboardRecentSalesContext.Provider
      value={{ sales_header, recent_sales, setSalesHeader, setRecentSales }}
    >
      {children}
    </DashboardRecentSalesContext.Provider>
  )
}

export default DashboardRecentSalesData
