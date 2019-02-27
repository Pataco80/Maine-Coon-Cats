import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Row, Col } from "antd"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (

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
            </Col>
            <Col xs={6} sm={2} className="image-profile-bio">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                  display: "flex",
                }}
                imgStyle={{
                  borderRadius: `50%`,
                  display: "flex",
                }}
              />
            </Col>
            <Col xs={18} sm={22} className="sign-bio">
              <p>
                Ecris par <strong>{author}</strong>
                {` `}
                <a href={`https://twitter.com/${social.twitter}`}>
                  Suivez-moi sur Twitter
              </a>
              </p>
            </Col>
          </Row>

        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
