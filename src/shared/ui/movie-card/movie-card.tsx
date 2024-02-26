import classNames from 'classnames'

import { IMovie } from '@/src/enitities/movie'
import { Tag } from '../tag'

interface IMovieCardProps {
  movie: IMovie
  size?: 'l' | 'm'
  img?: string
  className?: string
}

export const MovieCard = (props: IMovieCardProps) => {
  const { size, img, movie, className } = props

  const classes = classNames(
    className,
    'p-8 w-full bg-center bg-no-repeat bg-cover flex flex-col rounded justify-between',
    {
      'min-h-[600px]': size === 'l',
      'min-h-[290px]': size === 'm' || typeof size === 'undefined',
    },
  )

  return (
    <section className={classes} style={{ backgroundImage: `url("${img}")` }}>
      <header className="flex gap-2">
        <Tag mode={movie.rating.mode}>{movie.rating.text}</Tag>
        {size === 'l' &&
          movie.tags.map((tag, i) => (
            <Tag key={i} mode={tag.mode}>
              {tag.text}
            </Tag>
          ))}
      </header>
      <main className="flex flex-col gap-4">
        <p className="text-4xl text-x-main">{movie.title}</p>
        <p>{movie.description}</p>
      </main>
    </section>
  )
}

//
