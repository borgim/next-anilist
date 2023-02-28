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
  favoritesCounter: number;
  addAnime: (anime: IAnime) => void;
  removeAnime: (anime: IAnime) => void;
};

export const useFavoriteAnimesStore = create<AnimeListType>((set) => ({
  favoriteAnimes: [],
  favoritesCounter: 0,
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
      ],
      favoritesCounter: state.favoritesCounter + 1
    }))
  },
  removeAnime: (anime: IAnime) => {
    set((state) => ({
      favoriteAnimes: state.favoriteAnimes.filter((item) => item.nativeTitle !== anime.nativeTitle),
      favoritesCounter: state.favoritesCounter - 1
    }))
  }
}));