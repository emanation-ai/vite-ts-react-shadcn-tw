import React from 'react'

export interface ISidebarLinks {
  id?: string | number
  icon: React.ReactNode
  title: string
}

export interface ISidebarData {
  title: string
  links: ISidebarLinks[]
}

export type ISidebarContext = {
  sidebarLinks: ISidebarData[]
  setSidebarLinks: React.Dispatch<React.SetStateAction<ISidebarData[]>>
  playLists: string[]
  setPlayLists: React.Dispatch<React.SetStateAction<string[]>>
}

export interface IAlbumCard {
  name: string
  artist: string
  cover: string
}

export type IListenNowAlbumsContext = {
  topAlbums: IAlbumCard[]
  setTopAlbums: React.Dispatch<React.SetStateAction<IAlbumCard[]>>
}

export type IMadeForYouAlbumsContext = {
  madeForYouAlbums: IAlbumCard[]
  setMadeForYouAlbums: React.Dispatch<React.SetStateAction<IAlbumCard[]>>
}
