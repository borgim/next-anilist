import { json } from "stream/consumers";
import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware"

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

const getInitialFavoriteAnimes = () => {
  const list = JSON.parse(localStorage.getItem("favoriteAnimes") || '[]')

  return list
}

const initialFavoritesCounter = getInitialFavoriteAnimes().length

export const useFavoriteAnimesStore = create<AnimeListType>((set) => ({
  favoriteAnimes: getInitialFavoriteAnimes(),
  favoritesCounter: initialFavoritesCounter,
  addAnime: (anime: IAnime) => {
    set(
      (state) => (
        localStorage.setItem(
          "favoriteAnimes",
          JSON.stringify([...state.favoriteAnimes, anime])
        ),
        {
          favoriteAnimes: [
            ...state.favoriteAnimes,
            {
              coverImage: anime.coverImage,
              englishTitle: anime.englishTitle,
              episodes: anime.episodes,
              format: anime.format,
              id: anime.id,
              nativeTitle: anime.nativeTitle,
            },
          ],
          favoritesCounter: state.favoritesCounter + 1,
        }
      )
    );
  },
  removeAnime: (anime: IAnime) => {
    set(
      (state) => (
        localStorage.setItem(
          "favoriteAnimes",
          JSON.stringify(
            state.favoriteAnimes.filter(
              (item) => item.nativeTitle !== anime.nativeTitle
            )
          )
        ),
        {
          favoriteAnimes: state.favoriteAnimes.filter(
            (item) => item.nativeTitle !== anime.nativeTitle
          ),
          favoritesCounter: state.favoritesCounter - 1,
        }
      )
    );
  },
}));
