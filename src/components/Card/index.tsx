import { Link as LinkDom } from "react-router-dom"
import { theme } from "../../theme"
import { Body2, Body3 } from "../Typo"
import { useStyles } from "./Styles"
import { CardProps } from "./Type"

export const Card: React.FC<CardProps> = ({
  src,
  title,
  subTitle,
  objectFit = "cover",
}) => {
  const classes = useStyles()

  return (
    <article className={classes.project}>
      <LinkDom to="/animeaux">
        <section
          style={{
            padding: 40,
            border: `1px solid ${theme.palette.grey[300]}`,
            width: 700,
            height: 400,
            borderRadius: 8,
          }}
        >
          <img
            src={src}
            alt="Animeaux animal association"
            width="100%"
            height="100%"
            style={{
              borderRadius: 8,
              objectFit: objectFit,
            }}
          />{" "}
        </section>
      </LinkDom>
      <section>
        <Body2 style={{ color: theme.palette.grey[700] }}>{title}</Body2>
        <Body3 style={{ color: theme.palette.grey[500] }}>{subTitle}</Body3>
      </section>
    </article>
  )
}
