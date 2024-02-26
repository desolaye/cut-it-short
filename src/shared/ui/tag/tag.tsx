import classNames from 'classnames'
import { PropsWithChildren } from 'react'

interface ITagProps {
  mode?: 'primary' | 'good' | 'average' | 'bad'
}

export const Tag = (props: PropsWithChildren<ITagProps>) => {
  const { mode, children } = props

  const className = classNames('text-x-main w-fit rounded', {
    'font-medium bg-x-white/20 px-4 py-1.5':
      mode === 'primary' || typeof mode === 'undefined',
    'font-semibold bg-x-green px-2 py-1 text-xl': mode === 'good',
    'font-semibold bg-x-yellow px-2 py-1 text-xl': mode === 'average',
    'font-semibold bg-x-red px-2 py-1 text-xl': mode === 'bad',
  })

  return <div className={className}>{children}</div>
}
