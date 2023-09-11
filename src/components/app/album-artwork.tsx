import { PlusCircledIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { PlaylistIcon } from '@/components/app/icons'
import { IAlbumCard, ISidebarContext } from '@/interfaces'
import { useContext } from 'react'
import { SidebarContext } from '@/contexts/SidebarContext'

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: IAlbumCard
  aspectRatio?: 'portrait' | 'square'
  width?: number
  height?: number
}

export function AlbumArtwork({
  album,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  const { playLists } = useContext<ISidebarContext>(SidebarContext)

  return (
    <div className={cn('space-y-3', className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <img
              src={album.cover}
              alt={album.name}
              width={width}
              height={height}
              className={cn(
                'h-auto w-auto object-cover transition-all hover:scale-105',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {playLists.map((item: string, index: number) => (
                <ContextMenuItem key={`${item}${index}`}>
                  <PlaylistIcon />
                  {item}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-muted-foreground">{album.artist}</p>
      </div>
    </div>
  )
}
