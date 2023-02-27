import { GET_ANIMES_PAGE } from "@/graphql/queries/getAnimesPerPage";
import { anilistClient } from "@/services/anilistGraphql";
import { cache } from "react";

export async function getAnimesPerPage(page: number, perPage: number) {
  const { data } = await anilistClient.query({
    query: GET_ANIMES_PAGE,
    variables: {
      page,
      perPage,
    }
  })

  return data.Page.media
}