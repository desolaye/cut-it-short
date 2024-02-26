'use client'

import { InputHTMLAttributes, useState } from 'react'

import EyeOffIcon from '@/src/shared/assets/icons/eye-off-icon.svg'
import EyeIcon from '@/src/shared/assets/icons/eye-icon.svg'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: IInputProps) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <div className="relative">
      <input
        className="border border-x-secondary text-x-main focus:border-x-main rounded transition-all bg-transparent p-4 pr-14 w-full outline-none"
        type={isShown ? 'text' : props.type}
        {...props}
      />
      {props.type === 'password' && (
        <button
          onClick={() => setIsShown((prev) => !prev)}
          className="absolute top-1/2 right-4 -translate-y-1/2"
        >
          {isShown ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      )}
    </div>
  )
}
