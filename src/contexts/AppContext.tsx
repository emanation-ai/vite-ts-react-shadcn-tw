import React, { createContext, useState } from 'react'
import * as data from '@/data/index.json'

export type IGlobalDataType = typeof data

export const AppContext = createContext<IGlobalDataType>(data)

type Props = {
  children?: React.ReactNode
  dataFromJson?: IGlobalDataType
}

const AppData: React.FC<Props> = ({ children, dataFromJson = data }) => {
  const [appData, _setAppData] = useState<IGlobalDataType>(dataFromJson)

  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>
}

export default AppData
