import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { CardTech } from "src/components/CardTech"
import { LayoutPage } from "src/components/Layout"
import { SubBody, Title2 } from "src/components/Typo"
import anthony from "/assets/tech/anthony.png"
import cleanup from "/assets/tech/cleanup.png"
import iconer from "/assets/tech/iconer.png"
import pixelTrue from "/assets/tech/pixeltrue.png"
import relume from "/assets/tech/relume.png"
import shots from "/assets/tech/shots.png"
import svgrepo from "/assets/tech/svgrepo.png"
import vectorizer from "/assets/tech/vectorizer.png"

export const Tech = () => {
  const { t } = useTranslation()

  return (
    <LayoutPage>
      <Title2>
        J'ai regroupé tous les sites qui me semble pertinant et utile. Cela me
        permet également de découvrir de nouvelles idées et de garder un œil sur
        ce qui pourrait être utile ou intéressant dans ma vie quotidienne ⦿
      </Title2>
      <Box sx={{ p: 2 }}></Box>
      <Divider />
      <Box sx={{ p: 1 }}></Box>
      <SubBody>{t("tech.ai")}</SubBody>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: 24,
        }}
      >
        <CardTech
          image={vectorizer}
          title="Vectorizer"
          subtitle="Improve picture"
          link="https://www.svgrepo.com/"
        />
        <CardTech
          image={cleanup}
          title="Cleanup"
          subtitle="Remove it easily"
          link="https://cleanup.pictures/"
        />
        <CardTech
          image={relume}
          title="Relume"
          subtitle="Create wireframe and sitemap"
          link="https://cleanup.pictures/"
        />
        <CardTech
          image={relume}
          title="Perplexity"
          subtitle="Chat GPT bis"
          link="https://www.perplexity.ai/"
        />
      </div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("tech.mockups")}</SubBody>
      <div style={{ display: "flex", gap: 24 }}>
        <CardTech
          image={pixelTrue}
          title="Pixeltrue"
          subtitle="Free mockups with 4 devices with edit"
          link="https://mockups.pixeltrue.com/"
        />
        <CardTech
          image={anthony}
          title="Anthonyboyd"
          subtitle="Mockups with 7 types, just download it"
          link="https://www.anthonyboyd.graphics/mockups-collection/"
        />
        <CardTech
          image={shots}
          title="Shots"
          subtitle="Create your own custom mockup"
          link="https://shots.so/"
        />
      </div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("tech.icons")}</SubBody>
      <div style={{ display: "flex", gap: 24 }}>
        <CardTech
          image={svgrepo}
          title="SvgRepo"
          subtitle="So so much svg icons"
          link="https://www.svgrepo.com/"
        />
        <CardTech
          image={iconer}
          title="Iconer"
          subtitle="Icon by group"
          link="https://iconer.app/"
        />
      </div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("tech.illustrations")}</SubBody>
      <div style={{ display: "flex", gap: 24 }}>
        <CardTech
          image={svgrepo}
          title="Manypixels"
          subtitle="So so much svg icons"
          link="https://www.manypixels.co/gallery"
        />
        <CardTech
          image={iconer}
          title="Icon8 illustration"
          subtitle="Icon by group"
          link="https://icons8.com/illustrations/styles"
        />
        <CardTech
          image={iconer}
          title="Undraw"
          subtitle="Icon by group"
          link="https://undraw.co/illustrations"
        />
        <CardTech
          image={iconer}
          title="Blush"
          subtitle="Icon by group"
          link="https://blush.design/"
        />
      </div>
    </LayoutPage>
  )
}
