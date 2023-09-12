import React, { createContext, useState } from 'react'
import { INavigation, INavigationContext } from '@/interfaces'

// @ts-ignore
export const NavigationContext = createContext<INavigationContext>()

type Props = {
  children?: React.ReactNode
}

const NavigationData: React.FC<Props> = ({ children }) => {
  let [links, setLinks] = useState<INavigation[]>([
    {
      href: '/examples/dashboard',
      label: 'Overview',
    },
    {
      href: '/examples/dashboard',
      label: 'Customer',
    },
    {
      href: '/examples/dashboard',
      label: 'Products',
    },
    {
      href: '/examples/dashboard',
      label: 'Settings',
    },
  ])

  return (
    <NavigationContext.Provider value={{ links, setLinks }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationData
