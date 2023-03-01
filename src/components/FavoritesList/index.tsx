'use client'

import { useFavoriteAnimesStore } from "@/store/favoriteAnimesStore"
import { AnimeList } from "../AnimeList"

export const FavoritesList = () => {

  const { favoriteAnimes, favoritesCounter } = useFavoriteAnimesStore()

  return (
    <>
      {favoritesCounter !== 0 ? <AnimeList animes={favoriteAnimes} /> : "Your list is empty"}
    </>
  )
}