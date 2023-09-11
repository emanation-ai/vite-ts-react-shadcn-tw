import { useContext } from 'react'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlbumArtwork } from './components/app/album-artwork'
import { Menu } from './components/app/menu'
import { PodcastEmptyPlaceholder } from './components/app/podcast-empty-placeholder'
import { Sidebar } from './components/app/sidebar'
import {
  IAlbumCard,
  IListenNowAlbumsContext,
  IMadeForYouAlbumsContext,
} from '@/interfaces'
import { ListenNowContext } from '@/contexts/ListenNowAlbumsContext'
import { MadeForYouAlbumContext } from '@/contexts/MadeForYouAlbumsContext'

function App() {
  let { topAlbums, setTopAlbums } = useContext<IListenNowAlbumsContext>(
    ListenNowContext,
  )
  let { madeForYouAlbums, setMadeForYouAlbums } = useContext<
    IMadeForYouAlbumsContext
  >(MadeForYouAlbumContext)
  let addTopAlbum: IAlbumCard = {
    name: 'React Rendezvous',
    artist: 'Ethan Byte',
    cover:
      'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
  }
  let addMadeForYouAlbum: IAlbumCard = {
    name: 'Thinking Components',
    artist: 'Lena Logic',
    cover:
      'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80',
  }

  const handleAddMusic = () => {
    let updatedTopAlbums: IAlbumCard[] = [...topAlbums]
    let updatedMadeForYouAlbums: IAlbumCard[] = [...madeForYouAlbums]
    updatedTopAlbums.push(addTopAlbum)
    updatedMadeForYouAlbums.push(addMadeForYouAlbum)
    setTopAlbums((topAlbums = updatedTopAlbums))
    setMadeForYouAlbums((madeForYouAlbums = updatedMadeForYouAlbums))
  }

  return (
    <>
      <div className="md:block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Music
                        </TabsTrigger>
                        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                        <TabsTrigger value="live" disabled>
                          Live
                        </TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button onClick={() => handleAddMusic()}>
                          <PlusCircledIcon className="mr-2 h-4 w-4" />
                          Add music
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Listen Now
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Top picks for you. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pb-4">
                            {topAlbums.map((album, index: number) => (
                              <AlbumArtwork
                                key={`${album.name}${index}`}
                                album={album}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Made for You
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personal playlists. Updated daily.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-4 pb-4">
                            {madeForYouAlbums.map((album, index: number) => (
                              <AlbumArtwork
                                key={`${album.name}${index}`}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
