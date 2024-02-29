'use client'

import classNames from 'classnames'
import { useRef, useState } from 'react'

import ChevronDown from '@/src/shared/assets/icons/chevron-down-icon.svg'

interface IAccordeonProps {
  title: string
  text: string
}

export const Accordeon = (props: IAccordeonProps) => {
  const { title, text } = props

  const [isOpen, setIsOpen] = useState(false)
  const contentHeight = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col gap-8 items-center text-x-main">
      <button
        className="flex justify-between w-full gap-4 items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="text-x-gray text-6xl font-extralight">[</p>
        <div className="flex justify-between items-center w-full text-2xl pt-1">
          {title}
          <div
            className={classNames('transition-all', { '-rotate-180': isOpen })}
          >
            <ChevronDown />
          </div>
        </div>
        <p className="text-x-gray text-6xl font-extralight">]</p>
      </button>
      <main
        className="overflow-hidden transition-all px-12"
        ref={contentHeight}
        style={{ height: isOpen ? contentHeight.current?.scrollHeight : '0px' }}
      >
        <p>{text}</p>
      </main>
    </div>
  )
}
