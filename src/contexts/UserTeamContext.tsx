import React, { createContext, useEffect, useState } from 'react'
import {
  IUserCreateTeam,
  IUserTeamContext,
  IUserTeamHeader,
} from '@/interfaces'
import data from '@/data/user_teams.json'

// @ts-ignore
export const UserTeamContext = createContext<IUserTeamContext>()

type Props = {
  children?: React.ReactNode
}

const UserTeamData: React.FC<Props> = ({ children }) => {
  let [groups, setGroups] = useState<IUserTeamHeader[]>(data.groups)
  let [create_team, setCreateTeam] = useState<IUserCreateTeam>(data.create_team)

  useEffect(() => {
    setGroups((groups = data.groups))
    setCreateTeam((create_team = data.create_team))
  }, [data.groups, data.create_team])

  return (
    <UserTeamContext.Provider
      value={{ groups, create_team, setGroups, setCreateTeam }}
    >
      {children}
    </UserTeamContext.Provider>
  )
}

export default UserTeamData
