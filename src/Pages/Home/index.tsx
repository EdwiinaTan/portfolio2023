import { Box, Divider } from "@mui/material"
import animeaux from "../../../public/assets/animeaux.png"
import gazou from "../../../public/assets/gazou.jpeg"
import rick from "../../../public/assets/rick.svg"
import { Card } from "../../components/Card"
import { LinkTarget } from "../../components/Link"
import { Body3, Title2 } from "../../components/Typo"
import { useStyles } from "./Styles"

export const Home = () => {
  const classes = useStyles()
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
      <Box sx={{ p: 2 }}></Box>
      <Body3>Projects</Body3>
      <Box sx={{ p: 0.5 }}></Box>
      <Card
        src={animeaux}
        title="01 | Animeaux"
        subTitle="Animal association"
        objectFit="contain"
      />
      <Box sx={{ p: 4 }}></Box>
      <Card src={rick} title="02 | Rick & Morty" subTitle="Characters" />
      <Box sx={{ p: 4 }}></Box>
      <Card src={gazou} title="03 | Gazou" subTitle="Looking for gas" />
      <Box sx={{ p: 4 }}></Box>
    </main>
  )
}
