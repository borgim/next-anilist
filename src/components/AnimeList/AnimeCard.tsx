import { Star } from "lucide-react"
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

export const AnimeCard = ({ englishTitle, nativeTitle, coverImage }: IAnimeCardProps) => {
  const anime = {
    englishTitle,
    nativeTitle,
    coverImage
  }

  return (
    <div className="w-60 h-[29rem] flex flex-col items-center justify-between hover:bg-slate-800 hover:scale-[1.2] hover:p-2 hover:rounded-lg hover:shadow-2xl">
      <Link href={``}>
        <Image src={coverImage} alt="" width="240" height="340" className="w-[240px] h-[340px] rounded-t-lg" />
        <div className="flex flex-col items-center">
          <h4 className="text-white font-semibold text-center">{englishTitle}</h4>
          <h5 className="text-slate-400 text-center text-sm">{nativeTitle}</h5>
        </div>
      </Link>
      <AddToFavoriteButton anime={anime} />
    </div>
  )

}