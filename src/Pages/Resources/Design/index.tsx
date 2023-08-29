import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { CardTech } from "src/components/CardTech"
import { LayoutPage } from "src/components/Layout"
import { Body3, SubBody, Title2 } from "src/components/Typo"
import { TechType } from "../Tech/Type"
import { useStyles } from "./Styles"
import {
  designFontArray,
  designIconArray,
  designIllusArray,
  designLogoArray,
  designMockupArray,
} from "./Utils"

export const Design = () => {
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
      <Body3>Design ⌖</Body3>
      <Box sx={{ p: 2 }} />
      <Title2>{t("design.intro")}</Title2>
      <Box sx={{ p: 2 }}></Box>
      <Divider />
      <Box sx={{ p: 1 }}></Box>
      <SubBody>{t("design.font")}</SubBody>
      <div className={classes.card}>{renderTechCard(designFontArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("design.icons")}</SubBody>
      <div className={classes.card}>{renderTechCard(designIconArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("design.illustrations")}</SubBody>
      <div className={classes.card}>{renderTechCard(designIllusArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("design.logo")}</SubBody>
      <div className={classes.card}>{renderTechCard(designLogoArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("design.mockups")}</SubBody>
      <div className={classes.card}>{renderTechCard(designMockupArray)}</div>
    </LayoutPage>
  )
}
