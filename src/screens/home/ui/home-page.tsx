import { promises as fs } from 'fs'

import { IMovie } from '@/src/enitities/movie'
import { Button } from '@/src/shared/ui/button'
import { MovieCard } from '@/src/enitities/movie'

import ChevronRightIcon from '@/src/shared/assets/icons/chevron-right-icon.svg'
import { MovieInProgress } from '@/src/enitities/movie/ui/movie-in-progress/movie-in-progress'
import { MovieCategoryList } from '@/src/widgets/movie-category-list'
import { Faq } from '@/src/widgets/faq'

const getMovies = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/shared/assets/mocks/movies.json',
    'utf8',
  )

  const res = (await JSON.parse(file)) as { data: Array<IMovie> }

  return res
}

const getMoviesInProgress = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/shared/assets/mocks/movies-in-progress.json',
    'utf8',
  )

  const res = (await JSON.parse(file)) as { data: Array<IMovie> }

  return res
}

export const HomePage = async () => {
  const { data: movies } = await getMovies()
  const { data: inProgress } = await getMoviesInProgress()

  return (
    <section className="flex flex-col gap-4">
      <header className="text-x-main text-center">
        <h2 className="text-[80px]">Короткие метры</h2>
        <div className="flex gap-2 justify-center text-[80px]">
          <p className="font-thin">[</p>
          <p>февраля</p>
          <p className="font-thin">]</p>
        </div>
      </header>
      <main className="flex flex-col gap-20">
        <section className="flex flex-col gap-8">
          <main className="grid grid-cols-5 grid-rows-2 gap-4">
            {movies.map((v, i) => (
              <MovieCard
                key={v.id}
                movie={v}
                size={i === 0 ? 'l' : 'm'}
                className={i === 0 ? 'col-span-3 row-span-2' : 'col-span-2'}
                img={v.image}
              />
            ))}
          </main>
          <footer className="flex justify-center">
            <Button mode="text" icon={<ChevronRightIcon />}>
              Смотреть все
            </Button>
          </footer>
        </section>
        <section className="flex flex-col gap-10">
          <p className="text-3xl text-x-main">Продолжить просмотр</p>
          <main className="flex gap-4">
            {inProgress.map((val) => (
              <MovieInProgress key={val.id} movie={val} />
            ))}
          </main>
        </section>
        <MovieCategoryList title="Для грустного настроения" movies={movies} />
        <MovieCategoryList title="Зарубежные фильмы" movies={movies} />
      </main>
      <Faq />
    </section>
  )
}
