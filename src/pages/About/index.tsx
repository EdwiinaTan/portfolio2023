import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LayoutPage } from "src/components/Layout"
import { LinkProject } from "src/components/Link"
import { Body3, Body4, SubBody } from "src/components/Typo"
import me from "/assets/about/image1.png"
import me2 from "/assets/about/image2.png"
import me3 from "/assets/about/image3.png"
import me4 from "/assets/about/image4.png"
import me7 from "/assets/about/image7.png"
import me9 from "/assets/about/image9.png"

export const About = () => {
  const { t } = useTranslation()

  return (
    <LayoutPage>
      <Body3>{t("menu.about_me")} ಠ_ಠ</Body3>
      <Box sx={{ p: 2 }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <img
            src={me7}
            alt="Animeaux animal association"
            width="220"
            height="300"
            style={{
              objectFit: "cover",
              borderRadius: 8,
              marginTop: 20,
              marginRight: 8,
            }}
          />
          <img
            src={me3}
            alt="Animeaux animal association"
            width="250"
            height="300"
            style={{
              objectFit: "cover",
              borderRadius: 8,
              marginTop: 70,
              marginRight: 8,
            }}
          />

          <div
            style={{
              marginRight: 8,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <img
              src={me2}
              alt="Animeaux animal association"
              width="250"
              height="200"
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
            <img
              src={me4}
              alt="Animeaux animal association"
              width="250"
              height="200"
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={me}
              alt="Animeaux animal association"
              width="200"
              height="260"
              style={{
                objectFit: "cover",
                borderRadius: 8,
                marginTop: 30,
                marginRight: 8,
              }}
            />
            <img
              src={me9}
              alt="Animeaux animal association"
              width="200"
              height="280"
              style={{ objectFit: "cover", borderRadius: 8, marginTop: 80 }}
            />
          </div>
        </div>
      </div>
      <Box sx={{ p: 4 }} />
      <div
        style={{
          width: "70%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <SubBody>{t("about.info")}</SubBody>
          <Body4>Hi 🦉</Body4>
          <LinkProject
            link="https://www.linkedin.com/in/edwina-tan-977bb5159/"
            text={t("about.presentation_canva")}
          />
        </div>
        <div>
          <SubBody>{t("about.whats_next")}</SubBody>
          <Body4>{t("about.dog")}</Body4>
          <Body4>{t("about.consistent")}</Body4>
          <Body4>{t("about.personal")}</Body4>
          <Body4>{t("about.fullstack")}</Body4>
        </div>
        <div>
          <SubBody>{t("about.hobbies")}</SubBody>
          <Body4>{t("about.lego")}</Body4>
          <Body4>{t("about.read_draw")}</Body4>
          <Body4>{t("about.matcha")}</Body4>
          <Body4>{t("about.brawl_stars")}</Body4>
        </div>
      </div>
    </LayoutPage>
  )
}
