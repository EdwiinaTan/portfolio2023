import { useStyles } from "./Styles"

export interface TypoProps {
  children: React.ReactNode
}

export const Title1: React.FC<TypoProps> = ({ children }) => {
  const classes = useStyles()
  return <span className={classes.title1}>{children}</span>
}

export const Title2: React.FC<TypoProps> = ({ children }) => {
  const classes = useStyles()
  return <h1 className={classes.title2}>{children}</h1>
}

export const Title3: React.FC<TypoProps> = ({ children }) => {
  const classes = useStyles()
  return <h1 className={classes.title3}>{children}</h1>
}

export const Body1: React.FC<TypoProps> = ({ children }) => {
  const classes = useStyles()
  return <span className={classes.body1}>{children}</span>
}

export const Body2: React.FC<TypoProps> = ({ children }) => {
  const classes = useStyles()
  return <h1 className={classes.body2}>{children}</h1>
}

export const Body3: React.FC<TypoProps> = ({ children }) => {
  const classes = useStyles()
  return <h1 className={classes.body3}>{children}</h1>
}
