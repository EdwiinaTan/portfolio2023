type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down"

export interface CardProps {
  src: string
  title: string
  subTitle: string
  objectFit?: ObjectFit | undefined
}
