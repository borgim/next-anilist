'use client'

import { useEffect, useState } from "react"

import { useFavoriteAnimesStore } from "@/store/favoriteAnimesStore"
import { isAnimeInFavoriteList } from "@/utils/isAnimeInFavoriteList"
import { Star } from "lucide-react"

interface IAddToFavoritesButtonProps {
  id?: number
  englishTitle?: string
  nativeTitle: string
  coverImage: string
  episodes?: number
  seasonYear?: number
  status?: string
  format?: string
}

type AnimeType = {
  anime: IAddToFavoritesButtonProps
}

export const AddToFavoriteButton = ({ anime }: AnimeType) => {

  const [animeList, setAnimeList] = useState<IAddToFavoritesButtonProps[]>([])

  const { addAnime, removeAnime, favoriteAnimes } = useFavoriteAnimesStore()

  const animeNativeTitle = anime.nativeTitle

  useEffect(() => {
    setAnimeList(favoriteAnimes)
  }, [favoriteAnimes])

  const RemoveFromFavoritesButton = () => {
    return (
      <button className="flex items-center justify-center gap-2 w-full bg-[purple] hover:text-white p-2 rounded-lg" onClick={() => removeAnime(anime)}>
        Remove from favorites
      </button>
    )
  }

  const AddToFavoritesButton = () => {
    return (
      <button className="flex items-center justify-center gap-2 w-full bg-[purple] hover:text-white p-2 rounded-lg" onClick={() => addAnime(anime)}>
        Add to favorites
        <Star />
      </button>
    )
  }

  const isAnimeAlreadyInFavorites = isAnimeInFavoriteList(animeNativeTitle, animeList)

  return (
    <>
      {isAnimeAlreadyInFavorites ? <RemoveFromFavoritesButton /> : <AddToFavoritesButton />}
    </>
  )
}