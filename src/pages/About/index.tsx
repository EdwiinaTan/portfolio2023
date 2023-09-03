import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LayoutPage } from "src/components/Layout"
import { SpaceDivider } from "src/components/SpaceDivider"
import { Body3, SubBody } from "src/components/Typo"
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
      <Body3>About me ಠ_ಠ</Body3>
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
            {/* <img
              src={me8}
              alt="Animeaux animal association"
              width="250"
              height="200"
              style={{ objectFit: "cover", borderRadius: 8 }}
            /> */}
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
      <div style={{ width: "70%", margin: "auto" }}>
        <div style={{ display: "flex", gap: 40 }}>
          <SubBody>{t("about.info")}</SubBody>
        </div>
        <SpaceDivider />
        <SubBody>{t("about.whats_next")}</SubBody>
        <SpaceDivider />
        <SubBody>{t("about.hobbies")}</SubBody>
      </div>
      {/* <img
        src={me6}
        alt="Animeaux animal association"
        width="250"
        height="300"
        style={{ borderRadius: 8, objectFit: "contain" }}
      /> */}
    </LayoutPage>
  )
}
