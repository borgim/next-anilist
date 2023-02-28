'use client'

import { useFavoriteAnimesStore } from "@/store/favoriteAnimesStore"

export const FavoritesCounter = () => {

  const { favoritesCounter } = useFavoriteAnimesStore()

  return (
    <>
      <span className="absolute top-0 right-0 bg-red-500 w-10 h-5 rounded-t-full rounded-bl-full flex items-center justify-center text-white text-xs">
        {favoritesCounter}
      </span>
    </>
  )
}