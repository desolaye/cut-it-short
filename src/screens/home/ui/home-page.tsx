import { IMovie } from '@/src/enitities/movie'
import { MovieCard } from '@/src/shared/ui/movie-card'
import { promises as fs } from 'fs'

const getMovies = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/shared/assets/mocks/movies.json',
    'utf8',
  )

  const res = (await JSON.parse(file)) as { data: Array<IMovie> }

  return res
}

export const HomePage = async () => {
  const { data } = await getMovies()
  console.log(data)

  return (
    <section>
      <header className="text-x-main text-center">
        <h2 className="text-[80px]">Короткие метры</h2>
        <div className="flex gap-2 justify-center text-[80px]">
          <p className="font-thin">[</p>
          <p>февраля</p>
          <p className="font-thin">]</p>
        </div>
      </header>
      <main className="grid grid-cols-5 grid-rows-2 gap-4">
        {data.map((v, i) => (
          <MovieCard
            key={v.id}
            movie={v}
            size={i === 0 ? 'l' : 'm'}
            className={i === 0 ? 'col-span-3 row-span-2' : 'col-span-2'}
            img={v.image}
          />
        ))}
      </main>
    </section>
  )
}
