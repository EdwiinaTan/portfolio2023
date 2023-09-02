export interface ImageProps {
  draw: string
}

export const Image: React.FC<ImageProps> = ({ draw }) => {
  return (
    <img
      src={draw}
      alt="Animeaux animal association"
      width="100%"
      style={{
        borderRadius: 8,
      }}
    />
  )
}
