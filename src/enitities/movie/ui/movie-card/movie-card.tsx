import classNames from 'classnames'

import { Tag } from '@/src/shared/ui/tag'
import { IMovie } from '../../lib/movie.interface'

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
    'p-8 w-full bg-center bg-no-repeat flex flex-col rounded justify-between transition-all text-left',
    {
      'min-h-[600px] bg-130% hover:bg-140%': size === 'l',
      'min-h-[290px] bg-110% hover:bg-120%':
        size === 'm' || typeof size === 'undefined',
    },
  )

  const textClassName = classNames('text-x-main', {
    'text-2xl': size === 'm' || typeof size === 'undefined',
    'text-4xl': size === 'l',
  })

  return (
    <button className={classes} style={{ backgroundImage: `url("${img}")` }}>
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
        <p className={textClassName}>{movie.title}</p>
        <p className="truncate">{movie.description}</p>
      </main>
    </button>
  )
}

//
