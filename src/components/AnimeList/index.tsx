import { AnimeCard } from "./AnimeCard"

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

type AnimeListType = {
  animes: IAnime[]
}

export const AnimeList = ({ animes }: AnimeListType) => {
  return (
    <div className="grid grid-cols-autofill gap-y-16 justify-between pr-8 mb-20">
      {
        animes.map((anime: IAnime) => {
          return (
            <AnimeCard 
              key={anime?.nativeTitle} 
              englishTitle={anime?.englishTitle} 
              nativeTitle={anime?.nativeTitle} 
              coverImage={anime?.coverImage} 
            />
          )
        })

      }
    </div>
  )
}