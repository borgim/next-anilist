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


  return (
    <div className="flex flex-col gap-14 w-full ml-32 pt-5">
      <h1 className="text-white text-xl">home</h1>
      <AnimeList animes={data} />
   </div>
  )
}
