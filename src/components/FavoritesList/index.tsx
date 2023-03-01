'use client'

import { useEffect, useState } from "react"

import { useFavoriteAnimesStore } from "@/store/favoriteAnimesStore"
import { AnimeList } from "../AnimeList"

interface IAnime {
  id?: number;
  englishTitle?: string;
  nativeTitle: string;
  coverImage: string;
  episodes?: number;
  seasonYear?: number;
  status?: string;
  format?: string;
}

export const FavoritesList = () => {

  const [animesList, setAnimesList] = useState<IAnime[]>([])
  const [animeQuantity, setAnimeQuantity] = useState(0)

  const { favoriteAnimes, favoritesCounter } = useFavoriteAnimesStore()

  useEffect(() => {
    setAnimesList(favoriteAnimes)
  }, [favoriteAnimes])

  useEffect(() => {
    setAnimeQuantity(favoritesCounter)
  }, [favoritesCounter])

  return (
    <>
      {animeQuantity !== 0 ? <AnimeList animes={animesList} /> : <div>Your list is empty</div>}
    </>
  )
}