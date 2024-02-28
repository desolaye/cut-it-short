export const toTimeFormat = (duration: number) => {
  const hours = Math.floor(duration / 360)
  const mins = Math.floor(duration / 60)
  const seconds = Math.floor(duration % 60)

  return `${hours > 0 ? `${hours} ч` : ''} ${mins > 0 ? `${mins} мин` : ''} ${
    seconds > 0 ? `${seconds} сек` : ''
  }`
}
