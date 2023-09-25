import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useContext } from 'react'
import { AppContext, IGlobalDataType } from '@/contexts/AppContextData'

export function RecentSales() {
  const appData = useContext<IGlobalDataType>(AppContext)

  return (
    <div className="space-y-8">
      {appData.recent_sales.map((sale, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
            <AvatarImage src={sale.avatar_src} alt={sale.avatar_alt} />
            <AvatarFallback>{sale.avatar_fallback}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">{sale.amount}</div>
        </div>
      ))}
    </div>
  )
}
