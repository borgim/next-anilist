import { create } from "zustand"

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
  favoriteAnimes: IAnime[];
  addAnime: (anime: IAnime) => void;
  removeAnime: (anime: IAnime) => void;
};

export const useFavoriteAnimesStore = create<AnimeListType>((set) => ({
  favoriteAnimes: [],
  addAnime: (anime: IAnime) => {
    set((state) => ({
      favoriteAnimes: [
        ...state.favoriteAnimes,
        {
          coverImage: anime.coverImage,
          englishTitle: anime.englishTitle,
          episodes: anime.episodes,
          format: anime.format,
          id: anime.id,
          nativeTitle: anime.nativeTitle,
        }
      ]
    }))
  },
  removeAnime: (anime: IAnime) => {
    set((state) => ({
      favoriteAnimes: state.favoriteAnimes.filter((item) => item.nativeTitle !== anime.nativeTitle)
    }))
  }
}));