import { Button } from '@/src/shared/ui/button'
import Image from 'next/image'

export const ShareMovies = () => {
  return (
    <section className="relative text-center flex flex-col justify-center items-center gap-10 pt-60 pb-10">
      <h1 className="z-10 text-7xl max-w-5xl mx-auto text-x-main">
        Делитесь своим творчеством с миром!
      </h1>
      <p className="z-10 max-w-[540px] mx-auto">
        Мы предлагаем уникальную площадку, где авторы могут поделиться своим
        видением мира и продвигать независимое короткометражное кино
      </p>
      <footer className="z-10">
        <Button>Опубликовать фильм</Button>
      </footer>
      <Image
        className="absolute top-36 right-1/2 translate-x-1/2"
        alt="movie"
        src="/movies/1.png"
        width={260}
        height={160}
      />
      <Image
        className="absolute top-16 right-60"
        alt="movie"
        src="/movies/1.png"
        width={260}
        height={160}
      />
      <Image
        className="absolute top-1/2 right-0 -translate-y-1/2"
        alt="movie"
        src="/movies/1.png"
        width={260}
        height={160}
      />
      <Image
        className="absolute bottom-16 right-60"
        alt="movie"
        src="/movies/1.png"
        width={260}
        height={160}
      />
      <Image
        className="absolute top-16 left-60"
        alt="movie"
        src="/movies/1.png"
        width={260}
        height={160}
      />
      <Image
        className="absolute top-1/2 left-0 -translate-y-1/2"
        alt="movie"
        src="/movies/1.png"
        width={260}
        height={160}
      />
      <Image
        className="absolute bottom-16 left-60"
        alt="movie"
        src="/movies/1.png"
        width={260}
        height={160}
      />
    </section>
  )
}
