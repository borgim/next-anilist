import { FavoritesList } from "@/components/FavoritesList";

export default function Favorites() {

  return (
    <div className="flex flex-col gap-14 w-full ml-32 pt-5">
      <h1 className="text-white text-xl">favorites</h1>
      <FavoritesList />
    </div>
  )
}