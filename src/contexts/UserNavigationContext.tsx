import React, { createContext, useEffect, useState } from 'react'
import { IUser, IUserMenu, IUserNavigationContext } from '@/interfaces'
import data from '@/data/user_nav.json'

// @ts-ignore
export const UserNavigationContext = createContext<IUserNavigationContext>()

type Props = {
  children?: React.ReactNode
}

const UserNavigationData: React.FC<Props> = ({ children }) => {
  let [user, setUser] = useState<IUser>(data.user)
  let [menus, setMenus] = useState<IUserMenu[]>(data.menus)
  let [menus_other, setOtherMenus] = useState<IUserMenu[]>(data.menus_other)

  useEffect(() => {
    setUser((user = data.user))
    setMenus((menus = data.menus))
    setOtherMenus((menus_other = data.menus_other))
  }, [data.user, data.menus, data.menus_other])

  return (
    <UserNavigationContext.Provider
      value={{ user, menus, menus_other, setUser, setMenus, setOtherMenus }}
    >
      {children}
    </UserNavigationContext.Provider>
  )
}

export default UserNavigationData
