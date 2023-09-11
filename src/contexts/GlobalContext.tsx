import React from 'react'
import SidebarContextData from '@/contexts/SidebarContext'
import ListenNowData from '@/contexts/ListenNowAlbumsContext'
import MadeForYouAlbumsData from '@/contexts/MadeForYouAlbumsContext'

type Props = {
  children?: React.ReactNode
}

const GlobalContext: React.FC<Props> = ({ children }) => {
  return (
    <SidebarContextData>
      <ListenNowData>
        <MadeForYouAlbumsData>{children}</MadeForYouAlbumsData>
      </ListenNowData>
    </SidebarContextData>
  )
}

export default GlobalContext
