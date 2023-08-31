import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LayoutPage } from "src/components/Layout"
import { Body3, SubBody, Title2 } from "src/components/Typo"
import { renderTechCard } from "../Utils"
import { useStyles } from "./Styles"
import { techAIArray, techAppArray, techTemplatesArray } from "./Utils"

export const Tech = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <LayoutPage>
      <Body3>Tech ⚐</Body3>
      <Box sx={{ p: 2 }} />
      <Title2>{t("tech.intro")}</Title2>
      <Box sx={{ p: 2 }}></Box>
      <Divider />
      <Box sx={{ p: 1 }}></Box>
      <SubBody>{t("tech.ai")}</SubBody>
      <div className={classes.card}>{renderTechCard(techAIArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("tech.templates")}</SubBody>
      <div className={classes.card}>{renderTechCard(techTemplatesArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("tech.applications")}</SubBody>
      <div className={classes.card}>{renderTechCard(techAppArray)}</div>
      <Box sx={{ p: 3 }}></Box>
    </LayoutPage>
  )
}
