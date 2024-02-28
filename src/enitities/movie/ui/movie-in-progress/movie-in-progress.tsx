'use client'

import classNames from 'classnames'
import { useState } from 'react'

import { toTimeFormat } from '@/src/shared/lib/to-time-format'
import { IMovie } from '../../lib/movie.interface'
import PlayIcon from '@/src/shared/assets/icons/play-icon.svg'

interface IMovieInProgressProps {
  movie: IMovie
}

export const MovieInProgress = (props: IMovieInProgressProps) => {
  const { movie } = props
  const [isHovered, setIsHovered] = useState(false)

  const className = classNames(
    'flex flex-col gap-4 hover:gap-0 justify-end min-h-[292px] rounded w-[560px] bg-110% hover:bg-120% transition-all bg-center bg-no-repeat',
  )

  return (
    <button
      className={className}
      style={{ backgroundImage: `url("${movie.image}")` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="flex flex-col gap-4 items-center justify-center w-full flex-1 bg-x-black/50">
          <div className="w-12 h-12">
            <PlayIcon />
          </div>
          <p className="text-x-main">Продолжить просмотр</p>
        </div>
      )}
      {!isHovered && (
        <div className="flex items-end justify-between px-8 w-full text-x-main">
          <p className="text-2xl">{movie.title}</p>
          <p>{toTimeFormat(movie.watchTime)}</p>
        </div>
      )}
      <div className="bg-x-white/20 h-2 w-full rounded-b">
        <div
          className="bg-x-main h-2 rounded-bl"
          style={{
            width: `${Math.floor((movie.watchTime * 100) / movie.duration)}%`,
          }}
        />
      </div>
    </button>
  )
}
