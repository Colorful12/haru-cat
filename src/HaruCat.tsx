import haruImage from './assets/haru.svg'

export type HaruCatProps = {
  size?: number
}

export function HaruCat({ size = 120 }: HaruCatProps) {
  return <img src={haruImage} alt="ハルくん" width={size} height={size} />
}
