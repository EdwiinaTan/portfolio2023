import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { CardTech } from "src/components/CardTech"
import { LayoutPage } from "src/components/Layout"
import { SubBody, Title2 } from "src/components/Typo"
import { useStyles } from "./Styles"
import { TechType } from "./Type"
import {
  techAIArray,
  techIconArray,
  techIllusArray,
  techMockupArray,
} from "./Utils"

export const Tech = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  const renderTechCard = (techArray: TechType[]) => {
    return techArray.map((tech: TechType) => {
      return (
        <CardTech
          image={tech.img}
          title={tech.title}
          subtitle={tech.subtitle}
          link={tech.link}
        />
      )
    })
  }

  return (
    <LayoutPage>
      <Title2>{t("tech.intro")}</Title2>
      <Box sx={{ p: 2 }}></Box>
      <Divider />
      <Box sx={{ p: 1 }}></Box>
      <SubBody>{t("tech.ai")}</SubBody>
      <div className={classes.card}>{renderTechCard(techAIArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("tech.illustrations")}</SubBody>
      <div className={classes.card}>{renderTechCard(techIllusArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("tech.icons")}</SubBody>
      <div className={classes.card}>{renderTechCard(techIconArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("tech.mockups")}</SubBody>
      <div className={classes.card}>{renderTechCard(techMockupArray)}</div>
    </LayoutPage>
  )
}
