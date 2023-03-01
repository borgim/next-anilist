'use client'

import { useEffect, useState } from "react"
import { useFavoriteAnimesStore } from "@/store/favoriteAnimesStore"

export const FavoritesCounter = () => {
  
  const [quantityFavorites, setQuantityFavorites] = useState(0)

  const { favoritesCounter } = useFavoriteAnimesStore()

  useEffect(() => {
    setQuantityFavorites(favoritesCounter)
  }, [favoritesCounter])

  return (
    <>
      <span className="absolute top-0 right-0 bg-red-500 w-10 h-4 rounded-t-full rounded-bl-full flex items-center justify-center text-white text-xs">
        {quantityFavorites}
      </span>
    </>
  )
}