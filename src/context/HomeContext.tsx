import React, { createContext, useState } from 'react'
import * as data from '@/data/index.json'

export type IGlobalDataType = typeof data

// @ts-ignore
export const HomePageContext = createContext<IGlobalDataType>()

type Props = {
  children?: React.ReactNode
  dataFromJson?: IGlobalDataType
}

const HomePageData: React.FC<Props> = ({ children, dataFromJson = data }) => {
  const [appData, _setAppData] = useState<IGlobalDataType>(dataFromJson)

  return (
    <HomePageContext.Provider value={appData}>
      {children}
    </HomePageContext.Provider>
  )
}

export default HomePageData
