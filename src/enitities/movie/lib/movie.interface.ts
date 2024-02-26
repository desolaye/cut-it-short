export interface IMovie {
  id: number
  title: string
  description: string
  tags: Array<{ text: string; mode?: 'primary' | 'good' | 'average' | 'bad' }>
  rating: { text: string; mode?: 'primary' | 'good' | 'average' | 'bad' }
  image: string
}
