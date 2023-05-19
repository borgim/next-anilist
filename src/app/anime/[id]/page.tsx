import { getAnimeInfo } from "@/utils/getAnimeInfo"

type AnimePageProps = {
  params: {
    id: string
  }
}

export default async function AnimePage({ params }: AnimePageProps) {
  const { id } = params

  const data = await getAnimeInfo(Number(id))

  return (
    <div className="flex flex-col gap-14 w-full ml-32 pt-5">
      <h1 className="text-white text-xl">home</h1>
      <p>id: {id}</p>
      {data.title.english}
      {data.description}
      {console.log('anime data: ', data)}
    </div>
  )
}