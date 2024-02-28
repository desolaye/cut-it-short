export interface IMovie {
  id: number
  title: string
  description: string
  duration: number
  inProgress: boolean
  watchTime: number
  tags: Array<{ text: string; mode?: 'primary' | 'good' | 'average' | 'bad' }>
  rating: { text: string; mode?: 'primary' | 'good' | 'average' | 'bad' }
  image: string
}
