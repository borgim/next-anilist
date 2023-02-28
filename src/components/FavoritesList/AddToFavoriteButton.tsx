'use client'

import { useFavoriteAnimesStore } from "@/store/favoriteAnimesStore"
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

  const { addAnime, favoriteAnimes } = useFavoriteAnimesStore()

  return (
    <button className="flex items-center justify-center gap-2 w-full bg-[purple] hover:text-white p-2 rounded-lg" onClick={() => addAnime(anime)}>
      Add to favorites
      <Star />
    </button>
  )
}