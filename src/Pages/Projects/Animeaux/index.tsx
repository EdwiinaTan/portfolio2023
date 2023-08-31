import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link as LinkDom } from "react-router-dom"
import { LinkProject } from "src/components/Link"
import { SpaceDivider } from "src/components/SpaceDivider"
import { Body2, Body3, Body4, SubBody } from "src/components/Typo"
import { theme } from "src/theme"
import { Compilation } from "./Compilation"
import { Presentation } from "./Presentation"
import { Tech } from "./Tech"
import banner from "/assets/animeaux/banner.png"
import lofi1 from "/assets/animeaux/lofi1.svg"
import lofi2 from "/assets/animeaux/lofi2.svg"
import persona1 from "/assets/animeaux/persona1.svg"
import persona2 from "/assets/animeaux/persona2.svg"
import persona3 from "/assets/animeaux/persona3.svg"

export const Animeaux = () => {
  const { t } = useTranslation()

  return (
    <article>
      <LinkDom to="https://www.animeaux.org/" target="_blank" rel="noopener">
        <img
          src={banner}
          alt="Animeaux animal association"
          width="100%"
          height="100%"
        />
      </LinkDom>
      <Body4 style={{ fontSize: 12 }}>{t("animeaux.translation_image")}</Body4>
      <Box sx={{ p: 2 }}></Box>
      <div style={{ width: "70%", margin: "auto" }}>
        <Body2 style={{ color: theme.palette.grey[600] }}>01 | Animeaux</Body2>
        <Body3>{t("animeaux.help_volunteers")}</Body3>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.intro")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Body3 style={{ color: theme.palette.common.black }}>Stack</Body3>
            <Body4>React Native</Body4>
            <Body4>Expo</Body4>
            <Body4>React Query</Body4>
            <Body4>Material UI</Body4>
            <Body4>Aws-Sdk</Body4>
          </div>
          <div>
            <Body3 style={{ color: theme.palette.common.black }}>Tools</Body3>
            <Body4>Figma</Body4>
            <Body4>Airtable</Body4>
            <Body4>AWS - Bucket S3</Body4>
          </div>
          <div>
            <Body3 style={{ color: theme.palette.common.black }}>Project</Body3>
            <LinkProject
              link="https://github.com/EdwiinaTan/animeaux"
              text="Repository"
            />
          </div>
          <div>
            <Body3 style={{ color: theme.palette.common.black }}>
              Timeline
            </Body3>
            <Body4>November 2022 - June 2023</Body4>
          </div>
        </section>
        <SpaceDivider />
        <Presentation />
        <SpaceDivider />
        <Compilation />
        <SpaceDivider />
        <Tech />
        <SpaceDivider />
        <SubBody>{t("animeaux.persona")}</SubBody>
        <Box sx={{ p: 0.1 }}></Box>
        <img src={persona2} alt="Animeaux animal association" width="50%" />
        <img src={persona3} alt="Animeaux animal association" width="50%" />
        <img src={persona1} alt="Animeaux animal association" width="50%" />
        <SpaceDivider />
        <SubBody>{t("animeaux.low_fidelity_prototype")}</SubBody>
        <Box sx={{ p: 1 }}></Box>
        <img src={lofi1} alt="Animeaux animal association" width="50%" />
        <img src={lofi2} alt="Animeaux animal association" width="50%" />
        <SpaceDivider />
        <SubBody>{t("animeaux.critic_session")}</SubBody>
        <Box sx={{ p: 0.1 }}></Box>
        <Body4>À partir de mes camarades de classe</Body4>
        <Body4>
          Eliott : Ça serait bien d’avoir que des icônes dans le menu, notamment
          la FA pour que ça soit cohérent
        </Body4>
        <Body4>
          Coraline : Peut-être qu’au lieu de mettre 'Profil de l’animal', il
          faudrait mettre le nom de l’animal en titre, c’est-à-dire : 'Profil de
          Cacahuète'
        </Body4>
        <Body4>
          Dalinda : Je trouve que c’est mieux d’avoir une bottomSheet plutôt
          qu’une modale, sur la dernière maquette, pour aller sur un autre
          screen
        </Body4>
        <SpaceDivider />
        <SubBody>{t("animeaux.hifi_prototype")}</SubBody>
        <SpaceDivider />
        <SubBody>{t("animeaux.learn")}</SubBody>
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.tech_expo1")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.tech_expo2")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.tech_expo3")}</Body4>
        <Body4>{t("animeaux.benchmark2")}</Body4>
      </div>
    </article>
  )
}
