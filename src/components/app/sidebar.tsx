import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import React, { useContext } from 'react'
import { ISidebarContext } from '@/interfaces'
import { SidebarContext } from '@/contexts/SidebarContext'

type Props = {
  className?: any
}

export const Sidebar: React.FC<Props> = ({ className }) => {
  const { sidebarLinks } = useContext<ISidebarContext>(SidebarContext)

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="space-y-4 py-4">
          {sidebarLinks.map((block, index: number) => {
            return (
              <React.Fragment key={index}>
                <div className="px-3 py-2">
                  <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                    {block.title}
                  </h2>
                  <ScrollArea className="max-h-[300px] px-1">
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
                  </ScrollArea>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}
