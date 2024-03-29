import { Accordeon } from '@/src/shared/ui/accordeon'

export const Faq = () => {
  return (
    <section className="flex flex-col gap-4 pt-20">
      <p className="text-x-main text-3xl text-center">
        Часто задаваемые вопросы
      </p>
      <Accordeon
        title="Что такое Cut It Short?"
        text="Cut It Short – удобная площадка, которая предоставляет пользователю возможность в одном месте смотреть короткометражное кино с описанием и возможностью оценки, а авторам публиковать, продвигать свои проекты и привлекать ресурсы на создание новых."
      />
      <Accordeon
        title="Что такое Cut It Short?"
        text="Cut It Short – удобная площадка, которая предоставляет пользователю возможность в одном месте смотреть короткометражное кино с описанием и возможностью оценки, а авторам публиковать, продвигать свои проекты и привлекать ресурсы на создание новых."
      />
    </section>
  )
}
