import { Box, Divider } from "@mui/material"
import logo from "../../../public/assets/logo.jpg"
import { Body2, Body3, Title2 } from "../../components/Typo"
import { theme } from "../../theme"
import { useStyles } from "./Styles"

export const Home = () => {
  const classes = useStyles()

  return (
    <main className={classes.container}>
      <Body3>Hello ✧</Body3>
      <Box sx={{ p: 2 }}></Box>
      <Title2>
        Edwina is a software developer based in France, currently @ Flatsy. She
        tries to build and finish some fun projects with her little energy she
        has. I hope you find this portfolio enjoyable and inspiring :)
      </Title2>
      <Box sx={{ p: 2 }}></Box>
      <Divider />
      <Box sx={{ p: 2 }}></Box>
      <Body3>Projects</Body3>
      <Box sx={{ p: 0.5 }}></Box>
      <article className={classes.project}>
        <img
          src={logo}
          alt="First project"
          width={700}
          style={{
            border: `1px solid ${theme.palette.grey[300]}`,
            borderRadius: 8,
          }}
        />
        <div>
          <Body2>01 | Project</Body2>
          <Body3>Truc bidule</Body3>
        </div>
      </article>
    </main>
  )
}
