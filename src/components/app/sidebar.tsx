import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import React, { useContext } from 'react'
import { ISidebarContext } from '@/interfaces'
import { SidebarContext } from '@/contexts/SidebarContext'
import { PlaylistIcon } from '@/components/app/icons'

type Props = {
  className?: any
}

export const Sidebar: React.FC<Props> = ({ className }) => {
  const { sidebarLinks, playLists } = useContext<ISidebarContext>(
    SidebarContext,
  )

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        {sidebarLinks.map((block, index: number) => {
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
                      <span>{link.icon}</span>
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
              {playLists.map((link: string, index: number) => (
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
