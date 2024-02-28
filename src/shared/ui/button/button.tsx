import classNames from 'classnames'
import { PropsWithChildren, ReactNode } from 'react'

interface IButtonProps {
  mode?: 'primary' | 'secondary' | 'text' | 'icon'
  icon?: ReactNode
  onClick?: () => void
}

export const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { icon, mode, children, onClick } = props

  const classNameParent = classNames(
    'flex items-center gap-2 transition-all rounded',
    {
      'bg-x-main hover:bg-x-gray text-x-black hover:text-x-main':
        mode === 'primary' || typeof mode === 'undefined',
      'border border-x-black border-l-x-main border-r-x-main hover:text-x-main hover:border-t-x-main hover:border-b-x-main':
        mode === 'secondary',
      'text-x-main hover:text-x-secondary': mode === 'text',
    },
  )

  const classNameChild = classNames('transition-all', {
    'px-6 py-3': mode === 'secondary',
    'px-8 py-4': mode === 'primary' || typeof mode === 'undefined',
  })

  return (
    <button onClick={onClick} className={classNameParent}>
      {children && <div className={classNameChild}>{children}</div>}
      {icon && (
        <div className={classNames({ 'p-2': mode !== 'text' })}>{icon}</div>
      )}
    </button>
  )
}
