import { Button } from '@/src/shared/ui/button'
import ChevronRight from '@/src/shared/assets/icons/chevron-right-icon.svg'
import { IMovie, MovieCard } from '@/src/enitities/movie'

interface IMovieCategoryListProps {
  title: string
  movies: Array<IMovie>
}

export const MovieCategoryList = (props: IMovieCategoryListProps) => {
  const { title, movies } = props

  return (
    <section className="flex flex-col gap-4">
      <Button mode="text" icon={<ChevronRight />}>
        <p className="text-xl">{title}</p>
      </Button>
      <main className="grid grid-cols-3 gap-4">
        {movies.map((val) => (
          <MovieCard key={val.id} movie={val} img={val.image} />
        ))}
      </main>
    </section>
  )
}
