import { Body2, Body3 } from "../../components/Typo"
import { useStyles } from "./Styles"

export const Home = () => {
  const classes = useStyles()

  return (
    <main className={classes.container}>
      <Body3>Hello ✧</Body3>
      <Body2>Edwina is a software developer based in France.</Body2>
    </main>
  )
}
