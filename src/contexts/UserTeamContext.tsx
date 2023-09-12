import React, { createContext, useState } from 'react'
import {
  IUserCreateTeam,
  IUserTeamContext,
  IUserTeamHeader,
} from '@/interfaces'

// @ts-ignore
export const UserTeamContext = createContext<IUserTeamContext>()

type Props = {
  children?: React.ReactNode
}

const UserTeamData: React.FC<Props> = ({ children }) => {
  let [groups, setGroups] = useState<IUserTeamHeader[]>([
    {
      label: 'Personal Account',
      teams: [
        {
          label: 'Alicia Koch',
          value: 'personal',
          avatar_src: 'https://avatar.vercel.sh/personal.png',
        },
      ],
    },
    {
      label: 'Teams',
      teams: [
        {
          label: 'Acme Inc.',
          value: 'acme-inc',
          avatar_src: 'https://avatar.vercel.sh/acme-inc.png',
        },
        {
          label: 'Monsters Inc.',
          value: 'monsters',
          avatar_src: 'https://avatar.vercel.sh/monsters.png',
        },
      ],
    },
  ])
  let [create_team, setCreateTeam] = useState<IUserCreateTeam>({
    title: 'Create team',
    description: 'Add a new team to manage products and customers.',
    input_label_name: 'Team Name',
    input_placeholder_name: 'Acme Inc.',
    input_label_sub_plan: 'Subscription Plan',
    input_placeholder_sub_plan: 'Select a plan',
    subscription_plans: [
      {
        title: 'Free',
        pricing_description: 'Trial for two weeks',
        value: 'free',
      },
      {
        title: 'Pro',
        pricing_description: '$9/month per user',
        value: 'pro',
      },
    ],
  })

  return (
    <UserTeamContext.Provider
      value={{ groups, create_team, setGroups, setCreateTeam }}
    >
      {children}
    </UserTeamContext.Provider>
  )
}

export default UserTeamData
