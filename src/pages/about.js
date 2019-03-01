import React from "react"

import Bio from "../components/bio"
import AppLayout from "../components/appLayout"
import SEO from "../components/seo"
import { Row, Col } from "antd"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <AppLayout page="about" location={this.props.location} title={siteTitle}>
        <SEO
          title="A Propos de Moi"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Row className="bio" type="flex" justify="center">
          <Col xs={24}>
            <h2>
              A propos de moi
              </h2>
            <p>Je m'appèle Ricardo Do Vale et j'aime les chats, en particulier les Maines Coon.</p>
            <p>J'ai découvert ma passion pour les chats grâce à ma compagne qui avait un chat de type européen nommé Mitterand (c’est pas une blague).</p>
            <p>Il y a quelques années, vous m’auriez proposé un chat ? Je vous aurais répondu: ”Et un battage de fesse tu veux aussi !”. Les chats… C’est pas des bêtes pour moi. Devant m’en accommoder (tu prend la femme, tu prends le chat), j’ai découvert un animal surprenant. J’envahis son territoire, je lui pique sa maîtresse, il trouve pourtant ma venue plutôt sympa.</p>
            <p>Ces petites habitudes se sont gentiment mêlées à notre quotidien. Au final, il prenait beaucoup de plaisir à mes côtés, surtout pour venir me réveiller le matin tel un tracteur qui avance avec douceur. Cela s’appèle… la Ronron thérapie.</p>
            <p>Quelques années après qu’il nous aie quitté, nous avons opté pour une Sibérienne que nous avons appelée Fiona et par la suite, de mon côté, j’ai trouvé le chat qui me convenait… Le Maine Coon</p>
            <Bio />
          </Col>
        </Row>
      </AppLayout>
    )
  }
}

export default AboutPage