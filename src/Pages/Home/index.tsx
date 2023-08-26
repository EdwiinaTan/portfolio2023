import { Box, Button, Divider } from "@mui/material"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Card } from "src/components/Card"
import { LinkTarget } from "src/components/Link"
import { Body3, Title2 } from "src/components/Typo"
import { useStyles } from "./Styles"
import animeaux from "/assets/animeaux.png"
import gazou from "/assets/gazou.jpeg"
import rick from "/assets/rick.svg"

export const Home = () => {
  const classes = useStyles()
  const [seeMore, setSeeMore] = useState<boolean>(false)
  const { t } = useTranslation()

  return (
    <main className={classes.container}>
      <Box sx={{ p: 2 }}></Box>
      <Body3>Hello ✧</Body3>
      <Box sx={{ p: 2 }}></Box>
      <Title2>
        Edwina is a Frontend Developer based in Paris, currently working at{" "}
        <LinkTarget link="https://www.flatsy.fr/" text="Flatsy" />. She build
        some fun projects with her little energy. I hope you find this portfolio
        enjoyable and inspiring :)
      </Title2>
      <Box sx={{ p: 2 }}></Box>
      <Divider />
      <Box sx={{ p: 1 }}></Box>
      <Box sx={{ p: 1 }}></Box>
      <Body3>Projects</Body3>
      <Box sx={{ p: 0.5 }}></Box>
      <Card
        src={animeaux}
        title="01 | Animeaux"
        subTitle="Animal association"
        objectFit="contain"
        link="animeaux"
      />
      <Box sx={{ p: 4 }}></Box>
      <Card
        src={rick}
        title="02 | Rick & Morty"
        subTitle="Characters"
        link="animeaux"
      />
      <Box sx={{ p: 4 }}></Box>
      <Card
        src={gazou}
        title="03 | Gazou"
        subTitle="Looking for gas"
        link="gazou"
      />
      {!seeMore ? (
        <Button onClick={() => setSeeMore(true)}>{t("home.see_more")}</Button>
      ) : (
        <>
          <Box sx={{ p: 4 }}></Box>
          <Card
            src={rick}
            title="02 | Rick & Morty"
            subTitle="Characters"
            link="animeaux"
          />
        </>
      )}
      <Box sx={{ p: 4 }}></Box>
    </main>
  )
}
