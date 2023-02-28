import { getAnimesPerPage } from '@/utils/getAnimesPerPage'
import { AnimeList } from "@/components/AnimeList";

interface IAnime {
  id: number
  title: {
    english: string
    native: string
  }
  coverImage: {
    large: string
  }
  episodes: number
  seasonYear: number
  status: string
  format: string
}

export default async function Home() {

  const data: IAnime[] = await getAnimesPerPage(1, 10)

  const animeData = data.map((anime) => {
    return {
      id: anime.id,
      englishTitle: anime.title.english,
      nativeTitle: anime.title.native,
      coverImage: anime.coverImage.large,
      episodes: anime.episodes,
      seasonYear: anime.seasonYear,
      status: anime.status,
      format: anime.format
    }
  })


  return (
    <div className="flex flex-col gap-14 w-full ml-32 pt-5">
      <h1 className="text-white text-xl">home</h1>
      <AnimeList animes={animeData} />
   </div>
  )
}
