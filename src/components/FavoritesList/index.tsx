'use client'

import { useFavoriteAnimesStore } from "@/store/favoriteAnimesStore"
import { AnimeList } from "../AnimeList"

export const FavoritesList = () => {

  const { favoriteAnimes } = useFavoriteAnimesStore()

  console.log(favoriteAnimes)
  return (
    <>
      <AnimeList animes={favoriteAnimes} />
    </>
  )
}