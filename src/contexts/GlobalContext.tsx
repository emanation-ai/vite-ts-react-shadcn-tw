import React from 'react'
import DashboardMainData from '@/contexts/DashboardMainContext'
import DashboardChartsData from '@/contexts/DashboardChartsContext'
import DashboardRecentSalesData from '@/contexts/DashboardRecentSalesContext'
import UserTeamData from '@/contexts/UserTeamContext'
import NavigationData from '@/contexts/NavigationContext'
import UserNavigationData from '@/contexts/UserNavigationContext'

type Props = {
  children?: React.ReactNode
}

const GlobalContext: React.FC<Props> = ({ children }) => {
  return (
    <DashboardMainData>
      <DashboardChartsData>
        <DashboardRecentSalesData>
          <UserTeamData>
            <NavigationData>
              <UserNavigationData>{children}</UserNavigationData>
            </NavigationData>
          </UserTeamData>
        </DashboardRecentSalesData>
      </DashboardChartsData>
    </DashboardMainData>
  )
}

export default GlobalContext
