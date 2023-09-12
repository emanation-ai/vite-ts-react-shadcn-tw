import { useContext } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarDateRangePicker } from '@/components/app/date-range-picker'
import { MainNav } from '@/components/app/main-nav'
import { Overview } from '@/components/app/overview'
import { RecentSales } from '@/components/app/recent-sales'
import { Search } from '@/components/app/search'
import TeamSwitcher from '@/components/app/team-switcher'
import { UserNav } from '@/components/app/user-nav'
import {
  IDashboardChartsContext,
  IDashboardMainContext,
  IDashboardRecentSalesContext,
} from '@/interfaces'
import { DashboardMainContext } from '@/contexts/DashboardMainContext'
import { DashboardChartsContext } from '@/contexts/DashboardChartsContext'
import { DashboardRecentSalesContext } from '@/contexts/DashboardRecentSalesContext'

function App() {
  const { main, stats } = useContext<IDashboardMainContext>(
    DashboardMainContext,
  )
  const { chart_header } = useContext<IDashboardChartsContext>(
    DashboardChartsContext,
  )
  const { sales_header } = useContext<IDashboardRecentSalesContext>(
    DashboardRecentSalesContext,
  )

  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">{main.title}</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              {main.tabs.map((tab) => (
                <TabsTrigger
                  value={tab.value}
                  key={tab.value}
                  disabled={tab.disabled}
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                  <Card key={`stat-${i}`}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.title}
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {stat.formatted_value}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>{chart_header.title}</CardTitle>
                    <CardDescription>{chart_header.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>{sales_header.title}</CardTitle>
                    <CardDescription>{sales_header.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
export default App
