import { Box, Divider } from "@mui/material"
import banner from "../../../../public/assets/animeaux/banner2.png"
import { Body2, Body3, Body4 } from "../../../components/Typo"
import { theme } from "../../../theme"

export const Animeaux = () => {
  return (
    <article>
      <img
        src={banner}
        alt="Animeaux animal association"
        width="100%"
        height="100%"
        style={{ borderRadius: 8 }}
      />
      <Body4 style={{ fontSize: 12 }}>
        *Adopt! Find your dream partner and give him a second chance.
      </Body4>
      <Box sx={{ p: 2 }}></Box>
      <div style={{ width: "70%", margin: "auto" }}>
        <Body2 style={{ color: theme.palette.grey[600] }}>01 | Animeaux</Body2>
        <Body3>Help volunteers</Body3>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 1 }}></Box>
        <Body4>
          This project was made when I was in school. We had to choose a project
          that we wanted to do.
        </Body4>
        <Box sx={{ p: 1 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Body3>Stack</Body3>
            <Body4>React Native</Body4>
            <Body4>React Query</Body4>
            <Body4>Material UI</Body4>
            <Body4>Aws-Sdk</Body4>
          </div>
          <div>
            <Body3>Tools</Body3>
            <Body4>Figma</Body4>
            <Body4>Airtable</Body4>
            <Body4>AWS - Bucket S3</Body4>
          </div>
          <div>
            <Body3>Repo</Body3>
            {/* https://gitlab.com/Yutsu/animeaux-expo-m2 */}
            <Body4>Github - Animeaux</Body4>
          </div>
          <div>
            <Body3>Timeline</Body3>
            <Body4>November 2022 - June 2023</Body4>
          </div>
        </section>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>
      </div>
    </article>
  )
}
