import React, { createContext, useState } from 'react'
import { ISidebarContext, ISidebarData } from '@/interfaces'
import {
  AlbumIcon,
  GridBoxIcon,
  PencilIcon,
  PlayIcon,
  PlaylistIcon,
  RadioWavesIcon,
  SongIcon,
  UserIcon,
} from '@/components/app/icons'

// @ts-ignore
export const SidebarContext = createContext<ISidebarContext>()

type Props = {
  children?: React.ReactNode
}

const SidebarContextData: React.FC<Props> = ({ children }) => {
  const [sidebarLinks, setSidebarLinks] = useState<ISidebarData[]>([
    {
      title: 'Discover',
      links: [
        {
          id: 1,
          icon: <PlayIcon />,
          title: 'Listen Now',
        },
        {
          id: 2,
          icon: <GridBoxIcon />,
          title: 'Browse',
        },
        {
          id: 3,
          icon: <RadioWavesIcon />,
          title: 'Radio',
        },
      ],
    },
    {
      title: 'Library',
      links: [
        {
          id: 4,
          icon: <PlaylistIcon />,
          title: 'Playlist',
        },
        {
          id: 5,
          icon: <SongIcon />,
          title: 'Songs',
        },
        {
          id: 6,
          icon: <UserIcon />,
          title: 'Made for You',
        },
        {
          id: 7,
          icon: <PencilIcon />,
          title: 'Artist',
        },
        {
          id: 8,
          icon: <AlbumIcon />,
          title: 'Albums',
        },
      ],
    },
  ])
  let [playLists, setPlayLists] = useState<string[]>([
    'Recently Added',
    'Recently Played',
    'Top Songs',
    'Top Albums',
    'Top Artists',
    'Logic Discography',
    'Bedtime Beats',
    'Feeling Happy',
    'I miss Y2K Pop',
    'Runtober',
    'Mellow Days',
    'Eminem Essentials',
  ])

  return (
    <SidebarContext.Provider
      value={{ sidebarLinks, setSidebarLinks, playLists, setPlayLists }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextData
