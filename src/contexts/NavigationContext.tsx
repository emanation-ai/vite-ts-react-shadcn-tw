import React, { createContext, useEffect, useState } from 'react'
import { INavigation, INavigationContext } from '@/interfaces'
import data from '@/data/nav_menu.json'

// @ts-ignore
export const NavigationContext = createContext<INavigationContext>()

type Props = {
  children?: React.ReactNode
}

const NavigationData: React.FC<Props> = ({ children }) => {
  let [links, setLinks] = useState<INavigation[]>(data.links)

  useEffect(() => {
    setLinks((links = data.links))
  }, [data.links])

  return (
    <NavigationContext.Provider value={{ links, setLinks }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationData
