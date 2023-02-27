import { getAnimesPerPageQuery } from "@/graphql/queries/getAnimesPerPage";
import { anilistClient } from "@/services/anilistGraphql";

export async function getAnimesPerPage(page: number, perPage: number) {
  const { data } = await anilistClient.query({
    query: getAnimesPerPageQuery,
    variables: {
      page,
      perPage,
    }
  })

  return data.Page.media
}