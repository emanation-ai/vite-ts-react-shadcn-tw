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

export interface IAlbumCard {
  name: string
  artist: string
  cover: string
}
