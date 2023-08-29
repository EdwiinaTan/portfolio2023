// import me from "/assets/about/image1.png"
import { LayoutPage } from "src/components/Layout"
import { Body3 } from "src/components/Typo"
import me2 from "/assets/about/image2.png"
import me3 from "/assets/about/image3.png"
import me4 from "/assets/about/image4.png"

export const About = () => {
  return (
    <LayoutPage>
      <Body3>About me ಠ_ಠ</Body3>
      <div>
        {/* <img
        src={me}
        alt="Animeaux animal association"
        width="250"
        height="300"
        style={{ objectFit: "cover" }}
      /> */}
        <img
          src={me2}
          alt="Animeaux animal association"
          width="250"
          height="300"
          style={{ objectFit: "cover" }}
        />
        <img
          src={me3}
          alt="Animeaux animal association"
          width="250"
          height="300"
          style={{ objectFit: "cover" }}
        />
        <img
          src={me4}
          alt="Animeaux animal association"
          width="250"
          height="300"
          style={{ objectFit: "cover" }}
        />
        {/* <img
        src={me6}
        alt="Animeaux animal association"
        width="250"
        height="300"
        style={{ borderRadius: 8, objectFit: "contain" }}
      /> */}
      </div>
    </LayoutPage>
  )
}
