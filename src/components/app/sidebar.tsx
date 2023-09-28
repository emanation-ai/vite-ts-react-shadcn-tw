import React, { useContext } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AppContext, IGlobalDataType } from '@/contexts/AppContext'
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

type Props = {
  className?: any
}

export const Sidebar: React.FC<Props> = ({ className }) => {
  const appData = useContext<IGlobalDataType>(AppContext)

  const renderSidebarIcons: (icon: string) => React.ReactNode = (
    icon: string,
  ) => {
    switch (icon) {
      case 'play':
        return <PlayIcon />
      case 'grid':
        return <GridBoxIcon />
      case 'radio':
        return <RadioWavesIcon />
      case 'playlist':
        return <PlaylistIcon />
      case 'songs':
        return <SongIcon />
      case 'user':
        return <UserIcon />
      case 'pencil':
        return <PencilIcon />
      case 'album':
        return <AlbumIcon />
      default:
        return <PlayIcon />
    }
  }

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        {appData.sidebar_links.map((block, index: number) => {
          return (
            <React.Fragment key={index}>
              <div className="px-3 py-2">
                <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                  {block.title}
                </h2>
                <div className="space-y-1 p-2">
                  {block.links?.map((link, index) => (
                    <Button
                      key={`${link.id}-${index}`}
                      variant="ghost"
                      className="w-full justify-start font-normal"
                    >
                      <span>{renderSidebarIcons(link.icon)}</span>
                      {link.title}
                    </Button>
                  ))}
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {appData.playlist.map((link: string, index: number) => (
                <Button
                  key={`${link}-${index}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <PlaylistIcon />
                  {link}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
