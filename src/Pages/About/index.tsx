import me from "../../../public/assets/about/image1.png"
import me2 from "../../../public/assets/about/image2.png"
import me3 from "../../../public/assets/about/image3.png"
import me4 from "../../../public/assets/about/image4.png"

export const About = () => {
  return (
    <div>
      <p>About</p>
      <img
        src={me}
        alt="Animeaux animal association"
        width="250"
        height="300"
        style={{ borderRadius: 8, objectFit: "contain" }}
      />
      <img
        src={me2}
        alt="Animeaux animal association"
        width="250"
        height="300"
        style={{ borderRadius: 8, objectFit: "contain" }}
      />
      <img
        src={me3}
        alt="Animeaux animal association"
        width="250"
        height="300"
        style={{ borderRadius: 8, objectFit: "contain" }}
      />
      <img
        src={me4}
        alt="Animeaux animal association"
        width="250"
        height="300"
        style={{ borderRadius: 8, objectFit: "contain" }}
      />
      {/* <img
        src={me6}
        alt="Animeaux animal association"
        width="250"
        height="300"
        style={{ borderRadius: 8, objectFit: "contain" }}
      /> */}
    </div>
  )
}
