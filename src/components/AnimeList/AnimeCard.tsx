import Image from "next/image"
import Link from "next/link"
import { AddToFavoriteButton } from "../FavoritesList/AddToFavoriteButton"

interface IAnimeCardProps {
  id?: number
  englishTitle?: string
  nativeTitle: string
  coverImage: string
  episodes?: number
  seasonYear?: number
  status?: string
  format?: string
}

export const AnimeCard = ({ ...anime }: IAnimeCardProps) => {
  return (
    <div className="w-60 h-[29rem] flex flex-col items-center justify-between hover:bg-slate-800 hover:scale-[1.2] transition-all hover:p-2 hover:rounded-lg hover:shadow-2xl hover:z-10">
      <Link href={``} className="relative">
        <Image src={anime.coverImage} alt="" width="240" height="340" className="w-[240px] h-[340px] rounded-t-lg" />
        <div className="flex justify-between w-full px-2 absolute top-0">
          <span className="bg-orange-600 text-white px-2">{anime.episodes}ep</span>
          <span className="text-pink-700 font-extrabold">{anime.format}</span>
        </div>
        <div className="flex flex-col items-center">
          {anime.englishTitle
            ?
            <h4 className="text-white font-semibold text-center">{anime.englishTitle}</h4>
            :
            <h4 className="text-white font-semibold text-center">{anime.nativeTitle}</h4>
          }
          <span className="text-gray-600">{anime.seasonYear}</span>
        </div>
      </Link>
      <AddToFavoriteButton anime={anime} />
    </div>
  )

}