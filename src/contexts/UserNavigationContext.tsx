import React, { createContext, useState } from 'react'
import { IUser, IUserMenu, IUserNavigationContext } from '@/interfaces'

// @ts-ignore
export const UserNavigationContext = createContext<IUserNavigationContext>()

type Props = {
  children?: React.ReactNode
}

const UserNavigationData: React.FC<Props> = ({ children }) => {
  let [user, setUser] = useState<IUser>({
    img_src: '/avatars/01.png',
    img_alt: '@shadcn',
    username: 'shadcn',
    email: 'm@example.com',
  })
  let [menus, setMenus] = useState<IUserMenu[]>([
    {
      name: 'Profile',
      shortcut: '⇧⌘P',
    },
    {
      name: 'Billing',
      shortcut: '⌘B',
    },
    {
      name: 'Settings',
      shortcut: '⌘S',
    },
    {
      name: 'New Team',
      shortcut: null,
    },
  ])
  let [menus_other, setOtherMenus] = useState<IUserMenu[]>([
    {
      name: 'Log out',
      shortcut: '⇧⌘Q',
    },
    {
      name: 'Exit',
      shortcut: null,
    },
  ])

  return (
    <UserNavigationContext.Provider
      value={{ user, menus, menus_other, setUser, setMenus, setOtherMenus }}
    >
      {children}
    </UserNavigationContext.Provider>
  )
}

export default UserNavigationData
