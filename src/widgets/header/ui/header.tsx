import Link from 'next/link'

import Logo from '@/src/shared/assets/logo.svg'
import SearchIcon from '@/src/shared/assets/icons/search-icon.svg'
import AccountIcon from '@/src/shared/assets/icons/account-icon.svg'
import { Button } from '@/src/shared/ui/button'

export const Header = () => {
  return (
    <header className="flex justify-between py-6 items-center">
      <div className="flex gap-36 items-center">
        <Logo />
        <nav>
          <ul className="flex gap-10 items-center">
            <li>
              <Link href="/">Главная</Link>
            </li>

            <li>
              <Link href="/">Мои списки</Link>
            </li>
            <li>
              <Link href="/">Подборки</Link>
            </li>
            <li>
              <Link href="/">Библиотека</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-10">
        <SearchIcon />
        <div className="flex items-center gap-4">
          <Button mode="secondary">Поделиться фильмом</Button>
          <Button icon={<AccountIcon />} />
        </div>
      </div>
    </header>
  )
}
