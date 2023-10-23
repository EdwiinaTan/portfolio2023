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
import animalEdit1 from "/assets/animeaux/hifi/animalEdit1.svg"
import animalProfil from "/assets/animeaux/hifi/animalProfil.svg"
import animaux from "/assets/animeaux/hifi/animaux.svg"
import connexion from "/assets/animeaux/hifi/connexion.svg"
import createAccount from "/assets/animeaux/hifi/createAccount.svg"
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
            <Body3 style={{ color: theme.palette.common.black }}>
              {t("stack")}
            </Body3>
            <Body4>React Native</Body4>
            <Body4>Expo</Body4>
            <Body4>React Query</Body4>
            <Body4>Material UI</Body4>
            <Body4>AWS-SDK</Body4>
          </div>
          <div>
            <Body3 style={{ color: theme.palette.common.black }}>
              {t("tools")}
            </Body3>
            <Body4>Figma</Body4>
            <Body4>Airtable</Body4>
            <Body4>AWS - Bucket S3</Body4>
          </div>
          <div>
            <Body3 style={{ color: theme.palette.common.black }}>
              {t("project")}
            </Body3>
            <LinkProject
              link="https://github.com/EdwiinaTan/animeaux"
              text={t("repository")}
            />
            <Box sx={{ p: 0.01 }}></Box>
            <LinkProject
              link="https://www.canva.com/design/DAFtTmWgpv0/nNqA5X70zZNikwJyEluYLg/edit?utm_content=DAFtTmWgpv0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              text={t("presentation")}
            />
          </div>
          <div>
            <Body3 style={{ color: theme.palette.common.black }}>
              {t("timeline")}
            </Body3>
            <Body4>{t("animeaux.date_project")}</Body4>
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
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.critic1")}</Body4>
        <Box sx={{ p: 0.5 }}></Box>
        <Body4>{t("animeaux.critic2")}</Body4>
        <Body4>{t("animeaux.critic3")}</Body4>
        <Body4>{t("animeaux.critic4")}</Body4>
        <SpaceDivider />
        <SubBody>{t("animeaux.hifi_prototype")}</SubBody>
        <Box sx={{ p: 1 }}></Box>
        <Body4>Page de connexion</Body4>
        <Box sx={{ p: 0.5 }}></Box>
        <div style={{ display: "flex", gap: 24 }}>
          <img
            src={connexion}
            alt="Animeaux animal association"
            // width="50%"
            height={500}
          />
          <img
            src={createAccount}
            alt="Animeaux animal association"
            // width="50%"
            height={500}
          />
        </div>
        <Box sx={{ p: 2 }}></Box>
        <Body4>Page animal</Body4>
        <Box sx={{ p: 0.5 }}></Box>
        <div style={{ display: "flex", gap: 24 }}>
          <img
            src={animaux}
            alt="Animeaux animal association"
            // width="50%"
            height={500}
          />
          <img
            src={animalProfil}
            alt="Animeaux animal association"
            // width="50%"
            height={500}
          />
          <img
            src={animalEdit1}
            alt="Animeaux animal association"
            // width="50%"
            height={500}
          />
        </div>
        <SpaceDivider />
        <SubBody>{t("animeaux.obstacles")}</SubBody>
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.obstacles1")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.obstacles2")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.obstacles3")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.obstacles4")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.obstacles5")}</Body4>
        <SpaceDivider />
        <SubBody>{t("animeaux.learn")}</SubBody>
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.learn1")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.learn2")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.learn3")}</Body4>
      </div>
      <Box sx={{ p: 2 }}></Box>
    </article>
  )
}
