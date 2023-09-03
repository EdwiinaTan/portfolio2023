import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LayoutPage } from "src/components/Layout"
import { SpaceDivider } from "src/components/SpaceDivider"
import { Body3, Body4, SubBody } from "src/components/Typo"

export const Cv = () => {
  const { t } = useTranslation()

  return (
    <LayoutPage>
      <Body3>CV 🂡</Body3>
      <Box sx={{ p: 4 }} />
      <div style={{ width: "70%", margin: "auto" }}>
        <div style={{ display: "flex", gap: 40 }}>
          <SubBody>{t("cv.experience")}</SubBody>
        </div>
        <SpaceDivider />
        <SubBody>{t("cv.education")}</SubBody>
        <SpaceDivider />
        <SubBody>{t("cv.skills")}</SubBody>
        <Body4>Great sense of listening</Body4>
        <Body4>Vllo video montage</Body4>
      </div>
    </LayoutPage>
  )
}
