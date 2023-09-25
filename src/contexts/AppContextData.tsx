import React, { createContext, useState } from 'react'
import * as data from '@/data/index.json'

export type IGlobalDataType = typeof data

// @ts-ignore
// export const AppContext = createContext<IGlobalDataType>()
export const AppContext = createContext<IGlobalDataType>(data)

type Props = {
  children?: React.ReactNode
  dataFromJson?: IGlobalDataType
}

const AppContextData: React.FC<Props> = ({ children, dataFromJson = data }) => {
  let [appData, _setAppData] = useState<IGlobalDataType>(dataFromJson)

  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>
}

export default AppContextData
