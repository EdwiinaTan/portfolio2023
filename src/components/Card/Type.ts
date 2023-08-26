type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down"

export interface CardProps {
  src: string
  title: string
  subTitle: string
  link: string
  objectFit?: ObjectFit | undefined
}
