'use client'

import { useFavoriteAnimesStore } from "@/store/favoriteAnimesStore"
import { AnimeList } from "../AnimeList"

export const FavoritesList = () => {

  const { favoriteAnimes } = useFavoriteAnimesStore()

  console.log("favorite animes", favoriteAnimes)
  return (
    <>
      <AnimeList animes={favoriteAnimes} />
    </>
  )
}