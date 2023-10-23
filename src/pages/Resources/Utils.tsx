import { CardTech } from "src/components/CardTech"
import { TechType } from "./Type"

export const renderTechCard = (techArray: TechType[]) => {
  return techArray.map((tech: TechType) => {
    return (
      <CardTech
        image={tech.img}
        title={tech.title}
        subtitle={tech.subtitle || ""}
        link={tech.link}
      />
    )
  })
}
