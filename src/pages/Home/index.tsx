import { Box, Button, Divider } from "@mui/material"
import { useState } from "react"
import { useTranslation } from "react-i18next"
// import { useAirtableAnimal } from "src/airtable"
import { Card } from "src/components/Card"
import { Body3, Title2 } from "src/components/Typo"
import { useStyles } from "./Styles"
import animeaux from "/assets/animeaux/animeaux.png"
import gazou from "/assets/gazou/gazou.jpeg"
import lanetscouade from "/assets/lanetscouade/lanetscouade.png"
import mooflix from "/assets/projects/mooflix/mooflix.jpeg"
import rick from "/assets/projects/rick/rick.svg"
import switchy from "/assets/switchy/switchy.jpeg"
import tastyworld from "/assets/tastyworld/tastyworld.png"
import weather from "/assets/weather/weather.png"

export const Home = () => {
  const classes = useStyles()
  const [seeMore, setSeeMore] = useState<boolean>(false)
  const { t } = useTranslation()
  // const { data, loading } = useAirtableAnimal()

  return (
    <main className={classes.container}>
      {/* {loading ? (
        <p>loading</p>
      ) : (
        data.map((record: AirtableRecord) => (
          <ul>
            <li key={record.id}>{record.fields.title}</li>
          </ul>
        ))
      )} */}
      <Box sx={{ p: 2 }} />
      <Body3>Hello ✧</Body3>
      <Box sx={{ p: 2 }} />
      {/* <Title2>
        I'am a Frontend Developer based in Paris, currently working at{" "}
        <LinkTarget link="https://www.flatsy.fr/" text="Flatsy" />. I build some
        fun projects with my little energy. I hope you find this portfolio
        enjoyable and inspiring :)
      </Title2> */}
      <Title2>{t("intro")}</Title2>
      <Box sx={{ p: 2 }} />
      <Divider />
      <Box sx={{ p: 2 }} />
      <Body3>{t("projects")}</Body3>
      <Box sx={{ p: 0.5 }} />
      <Card
        src={animeaux}
        title="01 | Animeaux"
        subTitle={t("animeaux.animal_association")}
        objectFit="contain"
        link="animeaux"
      />
      <Box sx={{ p: 4 }}></Box>
      <Card
        src={lanetscouade}
        title="02 | La Netscouade"
        subTitle={t("lanet.digital_agency")}
        link="lanetscouade"
      />
      <Box sx={{ p: 4 }} />
      <Card
        src={gazou}
        title="03 | Gazou"
        subTitle={t("gazou.gas_stations")}
        link="gazou"
      />
      {!seeMore ? (
        <>
          <Box sx={{ p: 2 }} />
          <Button onClick={() => setSeeMore(true)}>{t("home.see_more")}</Button>
        </>
      ) : (
        <>
          <Box sx={{ p: 4 }} />
          <Card
            src={rick}
            title="04 | Rick & Morty"
            subTitle="Characters"
            link="rick"
          />
          <Box sx={{ p: 4 }} />
          <Card
            src={mooflix}
            title="05 | Mooflix"
            subTitle="Allociné bis"
            link="mooflix"
          />
          <Box sx={{ p: 4 }} />
          <Card
            src={switchy}
            title="06 | Switchy"
            subTitle="Games"
            link="animeaux"
          />
          <Box sx={{ p: 4 }} />
          <Card
            src={tastyworld}
            title="07 | Tastyworld"
            subTitle="Miam"
            link="animeaux"
          />
          <Box sx={{ p: 4 }} />
          <Card
            src={weather}
            title="08 | Weather"
            subTitle="Cloudy"
            link="animeaux"
          />
        </>
      )}
      <Box sx={{ p: 4 }} />
    </main>
  )
}
