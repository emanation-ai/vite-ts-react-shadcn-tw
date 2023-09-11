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
    {
      title: 'Playlists',
      links: [
        {
          id: 9,
          icon: <PlaylistIcon />,
          title: 'Recently Added',
        },
        {
          id: 10,
          icon: <PlaylistIcon />,
          title: 'Recently Played',
        },
        {
          id: 11,
          icon: <PlaylistIcon />,
          title: 'Top Songs',
        },
        {
          id: 12,
          icon: <PlaylistIcon />,
          title: 'Top Albums',
        },
        {
          id: 13,
          icon: <PlaylistIcon />,
          title: 'Top Artists',
        },
        {
          id: 14,
          icon: <PlaylistIcon />,
          title: 'Logic Discography',
        },
        {
          id: 15,
          icon: <PlaylistIcon />,
          title: 'Bedtime Beats',
        },
        {
          id: 16,
          icon: <PlaylistIcon />,
          title: 'Feeling Happy',
        },
        {
          id: 17,
          icon: <PlaylistIcon />,
          title: 'I miss Y2K Pop',
        },
        {
          id: 18,
          icon: <PlaylistIcon />,
          title: 'Runtober',
        },
        {
          id: 19,
          icon: <PlaylistIcon />,
          title: 'Mellow Days',
        },
        {
          id: 20,
          icon: <PlaylistIcon />,
          title: 'Eminem Essentials',
        },
      ],
    },
  ])

  return (
    <SidebarContext.Provider value={{ sidebarLinks, setSidebarLinks }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextData
