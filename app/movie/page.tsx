type Movie = {
  id: number
  title: string
  overview: string
}

type VideoResponse = {
  results: {
    id: string
    key: string
    name: string
    site: string
    type: string
  }[]
}

async function getMovieByTitle(title: string): Promise<Movie | null> {
  if (!title) return null
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(title)}&api_key=${process.env.TMDB_ACCESS_TOKEN}`,
    { cache: "no-store" },
  )

  if (!res.ok) throw new Error("Failed to search movie")
  const data = await res.json()
  return data.results?.[0] || null
}

async function getVideos(movieId: number): Promise<VideoResponse> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.TMDB_ACCESS_TOKEN}&limit=5`,
    { cache: "no-store" },
  )

  if (!res.ok) throw new Error("Failed to fetch videos")
  return res.json()
}

type Props = {
  searchParams: Promise<{ query?: string }>
}

export default async function MoviePage(props: Props) {
  const searchParams = await props.searchParams
  const query = searchParams.query || ""

  const movie = await getMovieByTitle(query)
  let trailer = null

  if (movie) {
    const videos = await getVideos(movie.id).catch(() => null)
    if (videos) {
      trailer = videos.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube",
      )
    }
  }

  return (
    <div className='p-8 max-w-4xl mx-auto'>
      <form action='/movie' method='GET' className='mb-8 flex gap-2'>
        <input
          type='text'
          name='query'
          defaultValue={query}
          placeholder='Enter the title of the movie...'
          className='border border-zinc-700 bg-zinc-900 px-4 py-2 rounded flex-1 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
        />
        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors'
        >
          Search
        </button>
      </form>

      {query && !movie && (
        <p className='text-red-400'>Nie znaleziono filmu "{query}".</p>
      )}

      {movie && (
        <div className='animate-in fade-in slide-in-from-bottom-4 duration-700'>
          <h1 className='text-4xl font-bold mb-4'>{movie.title}</h1>
          <p className='text-muted-foreground mb-8 text-lg leading-relaxed'>
            {movie.overview}
          </p>

          {trailer ? (
            <div className='aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-zinc-800'>
              <iframe
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${trailer.key}`}
                allowFullScreen
                className='border-0'
              />
            </div>
          ) : (
            <p className='text-muted-foreground italic'>
              Brak zwiastuna YouTube dla tego filmu.
            </p>
          )}
        </div>
      )}
    </div>
  )
}
